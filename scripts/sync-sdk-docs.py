#!/usr/bin/env python3
"""Sync generated SDK markdown into the Mintlify docs tree.

The OpenAPI Generator emits a `docs/` folder per SDK (one markdown file per API
tag and per model). Those files live outside the Mintlify content root and get
wiped on every regen, so this script copies them into `docs/sdk/<lang>/reference/`
as Mintlify-ready `.mdx` and rebuilds the navigation in `docs/docs.json`.

To keep the SDK reference readable, the navigation is organized **by resource**
(API tag), mirroring the API Reference tab: one collapsible group per resource,
each listing its methods page followed by its own models. The model-to-resource
mapping is derived from `docs/openapi.json` so it stays correct across regens.
Models that no operation references directly land in a "Shared Models" group.

It is idempotent: the reference directories and the managed navigation groups
are rebuilt from scratch on every run. Run it after regenerating the SDKs
(see MAINTAINING.md). Pure stdlib — no dependencies.
"""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS_ROOT = REPO_ROOT / "docs"
DOCS_JSON = DOCS_ROOT / "docs.json"
OPENAPI = DOCS_ROOT / "openapi.json"

# Public base URL to substitute for the generator's `http://localhost` default.
PUBLIC_BASE_URL = "https://api.your-domain.com"

# The Hub is deployed per tenant (one subdomain each), so there is no single
# base URL to hard-code. Publishing `servers` as a templated host variable makes
# the playground render an editable "host" field: readers type their own
# deployment and "Try it" targets it. A plain fixed URL would be wrong for every
# tenant but one. Re-applied on every run because `docs/openapi.json` is
# regenerated and the Hub itself emits a relative `{"url": "/"}`.
SERVERS = [
    {
        "url": "https://{host}",
        "variables": {
            "host": {
                "default": PUBLIC_BASE_URL.removeprefix("https://"),
                "description": "Hostname of your Neuland AI Hub deployment",
            }
        },
    }
]

# One entry per generated SDK. `lang` selects the fenced-code language used when
# rewriting method-signature blockquotes.
SDKS = [
    {"src": "python/sdk/docs", "dest": "python", "tab": "Python SDK", "lang": "python"},
    {"src": "nodejs/sdk/docs", "dest": "node", "tab": "Node SDK", "lang": "typescript"},
]

# Curated "Get Started" group kept at the top of each SDK tab. Everything below
# it (the per-resource groups + Shared Models) is regenerated each run.
GET_STARTED_GROUP = "Get Started"
MODELS_SECTION = "Models"
SHARED_MODELS_GROUP = "Shared"

# The SSE streaming endpoints are intentionally excluded from the Hub's OpenAPI
# schema (`include_in_schema=False`), so a re-fetched `docs/openapi.json` won't
# contain them. We inject them here so they appear in the API Reference tab.
# They are consumed via the standalone streaming clients, NOT the generated SDK
# (`x-streaming: true` flags them so the coverage check ignores them).
_SSE_RESPONSE = {
    "200": {
        "description": "Server-Sent Events stream. Each frame is an SSE event; "
                       "the stream ends after a terminal `state` event.",
        "content": {"text/event-stream": {"schema": {"type": "string"}}},
    }
}
STREAMING_PATHS = {
    "/messages/stream": {
        "post": {
            "tags": ["Message"],
            "summary": "Stream Message",
            "description": "Create a message and stream its generation as "
                           "Server-Sent Events. Not part of the generated SDK — "
                           "use the standalone streaming client (see the "
                           "Streaming guide).",
            "operationId": "messages_stream_message",
            "x-streaming": True,
            "security": [{"APIKeyHeader": []}],
            "requestBody": {
                "required": True,
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/MessageIn"}}},
            },
            "responses": _SSE_RESPONSE,
        }
    },
    "/messages/{message_id}/stream": {
        "get": {
            "tags": ["Message"],
            "summary": "Observe Message Stream",
            "description": "Observe an existing message's generation as "
                           "Server-Sent Events. Not part of the generated SDK — "
                           "use the standalone streaming client (see the "
                           "Streaming guide).",
            "operationId": "messages_observe_message",
            "x-streaming": True,
            "security": [{"APIKeyHeader": []}],
            "parameters": [{
                "name": "message_id",
                "in": "path",
                "required": True,
                "schema": {"type": "integer", "title": "Message Id"},
            }],
            "responses": _SSE_RESPONSE,
        }
    },
}

# Markdown link with up to two levels of nested brackets in the text, e.g.
# `[**List[Optional[int]]**](int.md)` — so the link text is captured whole.
LINK_RE = re.compile(r"\[((?:[^\[\]]|\[(?:[^\[\]]|\[[^\]]*\])*\])*)\]\(([^)]+)\)")
CODE_SPAN_RE = re.compile(r"`[^`]*`")
LOCAL_MD_RE = re.compile(r"^([A-Za-z0-9_.]*)\.md(#.*)?$")
DOC_LINK_RE = re.compile(r"\]\(([A-Za-z0-9_]+)\.md")


# --------------------------------------------------------------------------- #
# Transform: generated markdown -> Mintlify-ready MDX
# --------------------------------------------------------------------------- #
def categorize(text: str) -> str:
    """An API/endpoint doc lists request URIs; everything else is a model."""
    return "endpoints" if "All URIs are relative" in text else "models"


def extract_title(text: str) -> str:
    for line in text.splitlines():
        if line.startswith("# "):
            title = line[2:].strip().strip("*").strip("`").strip()
            for prefix in ("neuland_hub_sdk.", "neuland-hub-sdk."):
                if title.startswith(prefix):
                    title = title[len(prefix):]
            return title or "Reference"
    return "Reference"


def _esc(segment: str) -> str:
    """Escape MDX-hostile characters in a non-code text segment."""
    return segment.replace("<", "&lt;").replace("{", "&#123;").replace("}", "&#125;")


def escape_outside_code(line: str) -> str:
    """Escape MDX-hostile chars, but leave inline code spans untouched."""
    out: list[str] = []
    pos = 0
    for m in CODE_SPAN_RE.finditer(line):
        out.append(_esc(line[pos:m.start()]))
        out.append(m.group(0))
        pos = m.end()
    out.append(_esc(line[pos:]))
    return "".join(out)


def rewrite_links(line: str, dest: str, name_map: dict[str, str]) -> str:
    """Point generator-relative links at their new Mintlify locations.

    The generator sometimes emits broken targets for primitive types
    (`int.md`, `str.md`) or omits the target entirely (`.md`) for real models.
    For those, fall back to resolving by the link text, and if that fails too,
    drop the link wrapper and keep the plain text so no dead link survives.
    """

    def page_for(name: str) -> str | None:
        category = name_map.get(name)
        return f"/sdk/{dest}/reference/{category}/{name}" if category else None

    def repl(m: re.Match) -> str:
        text, target = m.group(1), m.group(2).strip()
        base = target.split("#", 1)[0]
        if base.endswith("README.md"):
            return f"[{text}](/sdk/{dest}/usage)"
        local = LOCAL_MD_RE.match(target)
        if not local:
            return m.group(0)
        name, anchor = local.group(1), (local.group(2) or "")
        url = page_for(name)
        if url:
            return f"[{text}]({url}{anchor})"
        url = page_for(text.strip("* `"))
        if url:
            return f"[{text}]({url})"
        return text  # primitive like int/str — keep the text, drop the dead link

    return LINK_RE.sub(repl, line)


def transform(text: str, dest: str, lang: str, name_map: dict[str, str]) -> str:
    text = text.replace("http://localhost", PUBLIC_BASE_URL)
    title = extract_title(text)

    body: list[str] = []
    in_fence = False
    seen_first_h1 = False
    sig_buf: list[str] = []  # consecutive "> ..." signature lines awaiting a fence

    def flush_signature() -> None:
        # Render the generator's blockquoted method signature as a code block so
        # it reads as code instead of a grey Mintlify callout.
        if not sig_buf:
            return
        body.append(f"```{lang}")
        body.extend(sig_buf)
        body.append("```")
        sig_buf.clear()

    for line in text.splitlines():
        stripped = line.lstrip()
        if stripped.startswith("```"):
            flush_signature()
            in_fence = not in_fence
            body.append(line)
            continue

        if in_fence:
            body.append(line)
            continue

        # Blockquoted signature line(s): buffer and emit as a fenced block.
        if line.startswith(">"):
            sig_buf.append(line.lstrip("> ").rstrip())
            continue
        flush_signature()

        if stripped.startswith("[[Back to"):
            continue
        if line.startswith("# "):
            if not seen_first_h1:
                seen_first_h1 = True
                continue
            line = "#" + line  # demote later H1s to H2 for a clean TOC
        line = rewrite_links(line, dest, name_map)
        line = escape_outside_code(line)
        body.append(line)

    flush_signature()
    safe_title = title.replace('"', '\\"')
    return f'---\ntitle: "{safe_title}"\n---\n\n' + "\n".join(body).strip() + "\n"


# --------------------------------------------------------------------------- #
# Resource mapping: model -> API tag, derived from the OpenAPI spec
# --------------------------------------------------------------------------- #
def _collect_refs(node, out: set[str]) -> None:
    if isinstance(node, dict):
        ref = node.get("$ref")
        if isinstance(ref, str):
            out.add(ref.split("/")[-1])
        for v in node.values():
            _collect_refs(v, out)
    elif isinstance(node, list):
        for v in node:
            _collect_refs(v, out)


def build_model_to_tag() -> tuple[dict[str, str], list[str]]:
    """Map each component schema to its primary API tag, plus the tag order.

    A schema's primary tag is the first tag of the first operation that
    references it (directly or transitively). Schemas reached only via another
    schema inherit that schema's tag in a second pass.
    """
    spec = json.loads(OPENAPI.read_text(encoding="utf-8"))
    schemas = spec.get("components", {}).get("schemas", {})
    tag_order = [t.get("name") for t in spec.get("tags", []) if t.get("name")]

    def closure(name: str, seen: set[str]) -> None:
        if name in seen or name not in schemas:
            return
        seen.add(name)
        direct: set[str] = set()
        _collect_refs(schemas[name], direct)
        for r in direct:
            closure(r, seen)

    model_tag: dict[str, str] = {}
    for methods in spec.get("paths", {}).values():
        for op in methods.values():
            if not isinstance(op, dict) or "tags" not in op:
                continue
            primary = op["tags"][0]
            direct: set[str] = set()
            _collect_refs(op.get("parameters", []), direct)
            _collect_refs(op.get("requestBody", {}), direct)
            _collect_refs(op.get("responses", {}), direct)
            reached: set[str] = set()
            for d in direct:
                closure(d, reached)
            for s in reached:
                model_tag.setdefault(s, primary)

    # Second pass: schemas only reached via another schema inherit its tag.
    for _ in range(5):  # iterate so chains of references settle
        changed = False
        for owner, schema in schemas.items():
            owner_tag = model_tag.get(owner)
            if not owner_tag:
                continue
            refs = set()
            _collect_refs(schema, refs)
            for r in refs:
                if r not in model_tag:
                    model_tag[r] = owner_tag
                    changed = True
        if not changed:
            break

    return model_tag, tag_order


def propagate_via_doc_links(model_tag: dict[str, str], src_dir: Path) -> None:
    """Tag models the spec can't see by following the generated docs' own links.

    The generator synthesizes standalone model pages (e.g. `To`, `Cc`, `Bcc`)
    from inline schemas that never appear in `components.schemas`. Those pages
    are reachable only through another doc's links, so propagate tags across the
    doc-to-doc reference graph: an endpoint doc seeds its own tag, and any
    untagged model linked from a tagged doc inherits that tag. Iterates to a
    fixpoint so multi-hop chains (endpoint -> model -> sub-model) settle.
    """
    graph: dict[str, set[str]] = {}
    seed: dict[str, str] = dict(model_tag)
    for f in src_dir.glob("*.md"):
        text = f.read_text(encoding="utf-8")
        graph[f.stem] = set(DOC_LINK_RE.findall(text))
        if categorize(text) == "endpoints":
            seed.setdefault(f.stem, f.stem)  # an endpoint doc represents its own tag

    for _ in range(10):
        changed = False
        for owner, targets in graph.items():
            tag = seed.get(owner)
            if not tag:
                continue
            for m in targets:
                if m not in seed:
                    seed[m] = tag
                    changed = True
        if not changed:
            break

    for name, tag in seed.items():
        model_tag.setdefault(name, tag)


# --------------------------------------------------------------------------- #
# Sync + navigation
# --------------------------------------------------------------------------- #
def sync_sdk(sdk: dict) -> dict[str, list[str]]:
    src_dir = REPO_ROOT / sdk["src"]
    dest, lang = sdk["dest"], sdk["lang"]
    if not src_dir.is_dir():
        raise SystemExit(f"Generated SDK docs not found: {src_dir} (regenerate the SDK first)")

    md_files = sorted(src_dir.glob("*.md"))
    if not md_files:
        raise SystemExit(f"No markdown files in {src_dir}")

    name_map: dict[str, str] = {}
    contents: dict[Path, str] = {}
    for f in md_files:
        text = f.read_text(encoding="utf-8")
        contents[f] = text
        name_map[f.stem] = categorize(text)

    reference_dir = DOCS_ROOT / "sdk" / dest / "reference"
    if reference_dir.exists():
        shutil.rmtree(reference_dir)

    pages: dict[str, list[str]] = {"endpoints": [], "models": []}
    for f in md_files:
        category = name_map[f.stem]
        out_dir = reference_dir / category
        out_dir.mkdir(parents=True, exist_ok=True)
        out_text = transform(contents[f], dest, lang, name_map)
        (out_dir / f"{f.stem}.mdx").write_text(out_text, encoding="utf-8")
        pages[category].append(f.stem)

    pages["endpoints"].sort()
    pages["models"].sort()
    return pages


def build_resource_groups(dest: str, pages: dict[str, list[str]],
                          model_tag: dict[str, str], tag_order: list[str]) -> list:
    """Build the SDK tab's navigation items (excluding the Get Started group).

    Layout: the per-resource method pages are listed flat (no individual group
    headers), followed by a single "Models" group whose pages are nested
    sub-groups — one per resource, in the same tag order. Models the spec maps
    to no resource fall into a "Shared" sub-group under Models.
    """
    endpoints = pages["endpoints"]
    models = pages["models"]
    endpoint_set = set(endpoints)

    def page(category: str, stem: str) -> str:
        return f"sdk/{dest}/reference/{category}/{stem}"

    # Resolve a tag to the endpoint doc (resource) that represents it. Most tags
    # match a doc name directly; a versioned tag like "Sharepoint v1" collapses
    # onto its base resource. Tags without any endpoint doc -> Shared.
    def resource_for_tag(tag: str | None) -> str | None:
        if not tag:
            return None
        if tag in endpoint_set:
            return tag
        compact = tag.replace(" ", "")
        for ep in endpoints:
            if compact.lower().startswith(ep.lower()) or ep.lower() == compact.lower():
                return ep
        return None

    models_by_resource: dict[str, list[str]] = {}
    shared: list[str] = []
    for m in models:
        resource = resource_for_tag(model_tag.get(m))
        if resource:
            models_by_resource.setdefault(resource, []).append(m)
        else:
            shared.append(m)

    # Order resources by the spec's tag order; leftover docs (e.g. "Default") last.
    def tag_index(ep: str) -> int:
        for i, t in enumerate(tag_order):
            if resource_for_tag(t) == ep:
                return i
        return len(tag_order)

    ordered = sorted(endpoints, key=lambda ep: (tag_index(ep), ep))

    # Method pages listed flat, in tag order — no per-resource group headers.
    method_pages = [page("endpoints", ep) for ep in ordered]

    # Separate Models section: a sub-group per resource that has models.
    model_subgroups: list[dict] = []
    for ep in ordered:
        ms = models_by_resource.get(ep)
        if ms:
            model_subgroups.append({"group": ep, "pages": [page("models", m) for m in sorted(ms)]})
    if shared:
        model_subgroups.append({"group": SHARED_MODELS_GROUP,
                                "pages": [page("models", m) for m in sorted(shared)]})

    models_section = [{"group": MODELS_SECTION, "pages": model_subgroups}] if model_subgroups else []
    return method_pages + models_section


def _page_exists(ref: str) -> bool:
    return (DOCS_ROOT / (ref + ".mdx")).exists() or (DOCS_ROOT / (ref + ".md")).exists()


def _existing_guide_pages() -> list[str]:
    d = DOCS_ROOT / "guides"
    return [f"guides/{p.stem}" for p in sorted(d.glob("*.mdx"))] if d.is_dir() else []


def _default_get_started(dest: str) -> dict:
    pages = [f"sdk/{dest}/{n}" for n in ("installation", "usage", "streaming")
             if _page_exists(f"sdk/{dest}/{n}")]
    return {"group": GET_STARTED_GROUP, "pages": pages}


def _all_refs(container: dict) -> list[str]:
    refs: list[str] = []
    def walk(pages):
        for p in pages:
            walk(p.get("pages", [])) if isinstance(p, dict) else refs.append(p)
    for g in container.get("groups", []):
        walk(g.get("pages", []))
    walk(container.get("pages", []))
    return refs


def update_navigation(groups_by_tab: dict[str, list]) -> None:
    """Rebuild the SDK tabs, and self-heal the overall tab structure.

    The Mintlify web editor can revert `docs.json` to older states, dropping the
    SDK tabs or breaking the Guides links. To make `openapi.json` + this script
    enough to regenerate everything, we CREATE any missing tab (SDK tabs, API
    Reference) and repair the Guides tab when its pages no longer resolve.
    """
    config = json.loads(DOCS_JSON.read_text(encoding="utf-8"))
    tabs = config.setdefault("navigation", {}).setdefault("tabs", [])

    def find(name: str):
        return next((t for t in tabs if t.get("tab") == name), None)

    # Guides tab: create a skeleton if missing, or repair it if its links broke.
    guide_pages = _existing_guide_pages()
    guides_tab = find("Guides")
    has_guide_tab = guides_tab or find("User Guide") or find("Integration Guide")
    if guides_tab is None and not has_guide_tab and guide_pages:
        tabs.insert(0, {"tab": "Guides",
                        "groups": [{"group": "Getting Started", "pages": guide_pages}]})
    elif guides_tab is not None and guide_pages:
        refs = _all_refs(guides_tab)
        if refs and any(not _page_exists(r) for r in refs):
            guides_tab.pop("pages", None)
            guides_tab["groups"] = [{"group": "Getting Started", "pages": guide_pages}]
            print("  repaired broken 'Guides' tab links")

    # SDK tabs: create if missing, keep the curated Get Started group, then fill
    # with the generated method pages + Models section.
    for sdk in SDKS:
        tab = find(sdk["tab"])
        if tab is None:
            tab = {"tab": sdk["tab"]}
            tabs.append(tab)
            print(f"  created missing '{sdk['tab']}' tab")
        existing = list(tab.get("groups", [])) + [
            p for p in tab.get("pages", []) if isinstance(p, dict)
        ]
        get_started = [g for g in existing if g.get("group") == GET_STARTED_GROUP]
        if not get_started:
            get_started = [_default_get_started(sdk["dest"])]
        tab.pop("groups", None)
        tab["pages"] = get_started + groups_by_tab[sdk["tab"]]

    # API Reference tab: create if missing (it just points at the spec).
    if find("API Reference") is None:
        tabs.append({"tab": "API Reference", "openapi": "openapi.json"})
        print("  created missing 'API Reference' tab")

    DOCS_JSON.write_text(json.dumps(config, indent=2) + "\n", encoding="utf-8")
    print(f"  updated navigation in {DOCS_JSON.relative_to(REPO_ROOT)}")


SDK_METHOD_RE = re.compile(r"^# \*\*([A-Za-z0-9_]+)\*\*", re.M)


def verify_coverage(src_dir: Path) -> None:
    """Warn if the generated SDK is out of sync with the API Reference spec.

    The API Reference tab renders `docs/openapi.json` directly, while the SDK
    pages come from the committed (generated) SDK. If the SDK was generated from
    an older spec, the two drift: endpoints exist in the API Reference with no
    SDK method. This compares the spec's operationIds to the SDK's method docs
    and reports the gap so it can be fixed by regenerating the SDK.
    """
    spec = json.loads(OPENAPI.read_text(encoding="utf-8"))
    spec_ops: dict[str, str] = {}  # operationId -> primary tag
    for methods in spec.get("paths", {}).values():
        for verb, op in methods.items():
            if verb.lower() in ("get", "post", "put", "patch", "delete") and isinstance(op, dict):
                # Streaming endpoints are intentionally not in the SDK — skip them.
                if op.get("operationId") and not op.get("x-streaming"):
                    spec_ops[op["operationId"]] = (op.get("tags") or ["(untagged)"])[0]

    sdk_methods: set[str] = set()
    for f in src_dir.glob("*.md"):
        text = f.read_text(encoding="utf-8")
        if "All URIs are relative" in text:
            sdk_methods.update(SDK_METHOD_RE.findall(text))

    missing = sorted(set(spec_ops) - sdk_methods)
    print(f"Coverage: {len(spec_ops)} spec operations, {len(sdk_methods)} SDK methods.")
    if not missing:
        print("  ✓ every API Reference operation has an SDK method.")
        return

    missing_tags = sorted({spec_ops[o] for o in missing})
    print(f"  ⚠ {len(missing)} operation(s) in openapi.json are NOT in the SDK "
          f"(SDK looks stale). Affected resources: {', '.join(missing_tags)}")
    print("    Regenerate the SDKs from the current spec (see MAINTAINING.md), "
          "then re-run this script.")


def ensure_servers() -> None:
    """Force `docs/openapi.json`'s `servers` to the editable host variable.

    The Hub emits a relative `{"url": "/"}` and a static export writes whatever
    `--server` was passed, so neither produces the templated form the playground
    needs. Idempotent: rewrites only when the block differs.
    """
    spec = json.loads(OPENAPI.read_text(encoding="utf-8"))
    if spec.get("servers") == SERVERS:
        print("  servers block already correct in openapi.json")
        return
    spec["servers"] = SERVERS
    OPENAPI.write_text(json.dumps(spec, indent=2) + "\n", encoding="utf-8")
    print(f"  set servers to editable host variable "
          f"(default: {SERVERS[0]['variables']['host']['default']})")


def merge_streaming_endpoints() -> None:
    """Inject the SSE streaming endpoints into `docs/openapi.json` if absent.

    The Hub hides these routes from its schema, so a re-fetched spec drops them.
    Re-injecting on every run keeps them in the API Reference tab regardless.
    """
    spec = json.loads(OPENAPI.read_text(encoding="utf-8"))
    paths = spec.setdefault("paths", {})
    added = [p for p in STREAMING_PATHS if p not in paths]
    if not added:
        print("  streaming endpoints already present in openapi.json")
        return
    for p in added:
        paths[p] = STREAMING_PATHS[p]
    OPENAPI.write_text(json.dumps(spec, indent=2) + "\n", encoding="utf-8")
    print(f"  injected streaming endpoints into openapi.json: {', '.join(added)}")


def main() -> None:
    print("Syncing generated SDK docs into the Mintlify tree...")
    ensure_servers()
    merge_streaming_endpoints()
    model_tag, tag_order = build_model_to_tag()
    # Both SDKs share the same spec/model names, so derive the link graph once.
    propagate_via_doc_links(model_tag, REPO_ROOT / SDKS[0]["src"])
    groups_by_tab: dict[str, list] = {}
    for sdk in SDKS:
        pages = sync_sdk(sdk)
        items = build_resource_groups(sdk["dest"], pages, model_tag, tag_order)
        groups_by_tab[sdk["tab"]] = items
        models_group = next((i for i in items if isinstance(i, dict)
                             and i["group"] == MODELS_SECTION), None)
        subgroups = len(models_group["pages"]) if models_group else 0
        print(f"  {sdk['dest']}: {len(pages['endpoints'])} method pages, "
              f"{len(pages['models'])} models in {subgroups} resource sub-groups")
    update_navigation(groups_by_tab)
    verify_coverage(REPO_ROOT / SDKS[0]["src"])
    print("Done.")


if __name__ == "__main__":
    main()
