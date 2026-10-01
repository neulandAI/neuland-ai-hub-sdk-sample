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
