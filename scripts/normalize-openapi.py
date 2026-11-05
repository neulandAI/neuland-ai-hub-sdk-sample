#!/usr/bin/env python3
# Normalizes the Hub's OpenAPI spec before it is fed to openapi-generator-cli 7.21.0.
# Every rule here fixes something the generator would otherwise get wrong for SDK
# users. The Hub spec itself is not edited; this runs on a copy at regen time.
#
# 1. Binary fields (generator #23095, delete once fixed upstream):
#      {type:"string", contentMediaType:"application/octet-stream"} -> {type:"string", format:"binary"}
#      anyOf:[<array of the above>, {type:"null"}]                  -> <array of the above>
# 2. Enum query/path parameters that `$ref` an enum schema are inlined, so the
#    generator emits a plain `str` (Python) / string-literal union (Node) and sends
#    the value as-is. With the `$ref`, the Python generator types them `Any` and
#    calls `.value`, which crashes on a plain string. Also unwraps
#    anyOf:[<enum ref>, null].
# 3. Endpoints that return files are declared `application/json` in the spec but
#    serve binary. Their 200 response is set to `application/octet-stream` so the
#    Python client returns `bytes` instead of decoding as text. Node callers pass
#    `{ responseType: "arraybuffer" }`.
# 4. The `File` API tag is renamed `Files`: in the Node SDK a class named `File`
#    shadows the web `File` type, so upload methods typed `Array<File>` were wrong.
# 5. Only the `X-API-KEY` and OAuth2 schemes are kept. The Hub also declares
#    `EntraAccessToken` (an apiKey scheme on `X-Entra-Access-Token`) and
#    `HTTPBearer`. The Node generator sends `configuration.apiKey` to every
#    apiKey scheme, so a plain API key also went out as an Entra token and the
#    Hub answered 400. The /v1 endpoints accept `X-API-KEY` too.
# 6. Nullable unions of a string-enum `$ref` plus string consts
#    (`anyOf: [<ReasoningEffortEnum>, {const: "auto"}, null]`) become one
#    nullable enum. Otherwise the generator emits a wrapper type that rejects
#    plain strings in Python ("low") and rejects null in Node.
# 7. Request bodies the Hub reads by hand and does not declare get a free-form
#    JSON object body (REQUEST_BODY_OVERRIDES), so the method takes a body.
# 8. Query parameters added after a release are dropped from the SDK when they
#    shift Node's positional `options` argument (DROPPED_PARAMETERS). A 1.2.1
#    call `workflowsStreamRunEvents(wf, run, { headers })` would otherwise send
#    the options object, stream token included, as `?after=` in the URL.
#
# Usage: python3 scripts/normalize-openapi.py <input.json> <output.json>

import json
import sys


def is_octet_string(node):
    return (
        isinstance(node, dict)
        and node.get("type") == "string"
        and node.get("contentMediaType") == "application/octet-stream"
    )


def is_binary_array(node):
    return (
        isinstance(node, dict)
        and node.get("type") == "array"
        and is_octet_string(node.get("items"))
    )


def normalize(node):
    if isinstance(node, dict):
        if is_octet_string(node):
            new = {k: v for k, v in node.items() if k != "contentMediaType"}
            new["format"] = "binary"
            return new

        any_of = node.get("anyOf")
        if isinstance(any_of, list) and len(any_of) == 2:
            non_null = [b for b in any_of if not (isinstance(b, dict) and b.get("type") == "null")]
            null_branch = [b for b in any_of if isinstance(b, dict) and b.get("type") == "null"]
            if len(non_null) == 1 and len(null_branch) == 1 and is_binary_array(non_null[0]):
                merged = {k: v for k, v in node.items() if k != "anyOf"}
                merged.update(normalize(non_null[0]))
                return merged

        return {k: normalize(v) for k, v in node.items()}

    if isinstance(node, list):
        return [normalize(v) for v in node]

    return node



# Endpoints whose 200 response is a file download. The Hub declares them as
# application/json; the generator must see them as binary.
BINARY_RESPONSE_OPERATIONS = {
    ("get", "/messages/{message_id}/convert"),
}

# API tags to rename before generation: {spec tag: SDK class name}.
TAG_RENAMES = {"File": "Files"}

# Security schemes the SDK keeps; every other scheme is removed (rule 5).
KEPT_SECURITY_SCHEMES = {"APIKeyHeader", "OAuth2PasswordBearer"}

# Operations whose JSON body the Hub parses by hand (rule 7).
REQUEST_BODY_OVERRIDES = {
    ("post", "/v1/chat/completions"): {
        "required": True,
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "additionalProperties": True,
                    "description": "OpenAI Chat Completions request body. `model` (an id "
                                   "from GET /v1/models) and `messages` are required.",
                }
            }
        },
    },
}

# {(method, path): {parameter names}} removed from the SDK (rule 8).
DROPPED_PARAMETERS = {
    ("post", "/workflows/{workflow_id}/runs/{run_id}/events"): {"after"},
    # Added in Hub rc.47; would turn authExchangeToken(appId, options) into
    # (appId, cookieName, options). Browser-session only, not needed by SDK users.
    ("post", "/auth/exchange/token"): {"cookie_name"},
}


def _operations(spec):
    for path, methods in spec.get("paths", {}).items():
        for method, op in methods.items():
            if isinstance(op, dict) and method in ("get", "post", "put", "patch", "delete"):
                yield method, path, op


def inline_enum_params(spec):
    schemas = spec.get("components", {}).get("schemas", {})
    count = 0
    for _, _, op in _operations(spec):
        for prm in op.get("parameters", []):
            sc = prm.get("schema", {})
            ref = sc.get("$ref")
            if not ref and isinstance(sc.get("anyOf"), list):
                non_null = [b for b in sc["anyOf"] if b.get("type") != "null"]
                if len(non_null) == 1 and "$ref" in non_null[0]:
                    ref = non_null[0]["$ref"]
            if not ref:
                continue
            target = schemas.get(ref.split("/")[-1], {})
            if "enum" not in target:
                continue
            prm["schema"] = {k: v for k, v in target.items() if k in ("type", "enum", "description")}
            count += 1
    return count


def binary_responses(spec):
    count = 0
    for method, path, op in _operations(spec):
        if (method, path) in BINARY_RESPONSE_OPERATIONS and "200" in op.get("responses", {}):
            op["responses"]["200"]["content"] = {
                "application/octet-stream": {"schema": {"type": "string", "format": "binary"}}
            }
            count += 1
    return count


def rename_tags(spec):
    count = 0
    for _, _, op in _operations(spec):
        tags = op.get("tags", [])
        new = [TAG_RENAMES.get(t, t) for t in tags]
        if new != tags:
            op["tags"] = new
            count += 1
    for tag in spec.get("tags", []):
        if tag.get("name") in TAG_RENAMES:
            tag["name"] = TAG_RENAMES[tag["name"]]
    return count


def restrict_security(spec):
    comps = spec.setdefault("components", {})
    schemes = comps.get("securitySchemes", {})
    dropped = set(schemes) - KEPT_SECURITY_SCHEMES
    comps["securitySchemes"] = {n: s for n, s in schemes.items() if n not in dropped}
    for _, _, op in _operations(spec):
        if "security" not in op:
            continue
        kept = [{k: v for k, v in req.items() if k not in dropped} for req in op["security"]]
        kept = [req for req in kept if req]
        if kept:
            op["security"] = kept
        else:
            op.pop("security")
    return len(dropped)


def merge_enum_unions(spec):
    schemas = spec.get("components", {}).get("schemas", {})
    count = 0

    def visit(node):
        nonlocal count
        if isinstance(node, list):
            for v in node:
                visit(v)
            return
        if not isinstance(node, dict):
            return
        any_of = node.get("anyOf")
        if isinstance(any_of, list):
            nulls = [b for b in any_of if b.get("type") == "null"]
            refs = [b for b in any_of if "$ref" in b]
            consts = [b for b in any_of if b.get("type") == "string" and "const" in b]
            if len(refs) == 1 and consts and len(refs) + len(consts) + len(nulls) == len(any_of):
                ref_name = refs[0]["$ref"].split("/")[-1]
                target = schemas.get(ref_name, {})
                if target.get("type") == "string" and "enum" in target:
                    extra = [c["const"] for c in consts]
                    base = ref_name.removesuffix("Enum")
                    name = base + "Or" + "".join(e.title() for e in extra) + "Enum"
                    schemas.setdefault(name, {
                        "type": "string",
                        "enum": target["enum"] + [e for e in extra if e not in target["enum"]],
                        "title": name,
                        "description": target.get("description", ""),
                    })
                    branch = {"$ref": f"#/components/schemas/{name}"}
                    node["anyOf"] = [branch] + nulls
                    count += 1
        for v in list(node.values()):
            visit(v)

    visit(spec)
    return count


def override_request_bodies(spec):
    count = 0
    for method, path, op in _operations(spec):
        body = REQUEST_BODY_OVERRIDES.get((method, path))
        if body and "requestBody" not in op:
            op["requestBody"] = json.loads(json.dumps(body))
            count += 1
    return count


def drop_parameters(spec):
    count = 0
    for method, path, op in _operations(spec):
        names = DROPPED_PARAMETERS.get((method, path))
        if names:
            before = len(op.get("parameters", []))
            op["parameters"] = [p for p in op.get("parameters", []) if p.get("name") not in names]
            count += before - len(op["parameters"])
    return count


def main():
    if len(sys.argv) != 3:
        print("usage: normalize-openapi.py <input.json> <output.json>", file=sys.stderr)
        sys.exit(2)

    src, dst = sys.argv[1], sys.argv[2]
    with open(src) as f:
        spec = json.load(f)

    normalized = normalize(spec)
    stats = {
        "enum params inlined": inline_enum_params(normalized),
        "binary responses": binary_responses(normalized),
        "tags renamed": rename_tags(normalized),
        "security schemes dropped": restrict_security(normalized),
        "enum unions merged": merge_enum_unions(normalized),
        "request bodies added": override_request_bodies(normalized),
        "parameters dropped": drop_parameters(normalized),
    }

    with open(dst, "w") as f:
        json.dump(normalized, f, indent=2)
        f.write("\n")

    before = json.dumps(spec).count('"contentMediaType"')
    after = json.dumps(normalized).count('"contentMediaType"')
    print(f"normalized {src} -> {dst}", file=sys.stderr)
    print(f"  contentMediaType occurrences: {before} -> {after}", file=sys.stderr)
    for k, v in stats.items():
        print(f"  {k}: {v}", file=sys.stderr)


if __name__ == "__main__":
    main()
