#!/usr/bin/env python3
# Rewrites OpenAPI 3.1 binary fields to the 3.0 shape openapi-generator-cli 7.21.0 understands.
# Tracking: OpenAPITools/openapi-generator#23095. Delete once that lands.
#
#   {type:"string", contentMediaType:"application/octet-stream"} -> {type:"string", format:"binary"}
#   anyOf:[<array of the above>, {type:"null"}]                  -> <array of the above>
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


def main():
    if len(sys.argv) != 3:
        print("usage: normalize-openapi.py <input.json> <output.json>", file=sys.stderr)
        sys.exit(2)

    src, dst = sys.argv[1], sys.argv[2]
    with open(src) as f:
        spec = json.load(f)

    normalized = normalize(spec)

    with open(dst, "w") as f:
        json.dump(normalized, f, indent=2)
        f.write("\n")

    before = json.dumps(spec).count('"contentMediaType"')
    after = json.dumps(normalized).count('"contentMediaType"')
    print(f"normalized {src} -> {dst}", file=sys.stderr)
    print(f"  contentMediaType occurrences: {before} -> {after}", file=sys.stderr)


if __name__ == "__main__":
    main()
