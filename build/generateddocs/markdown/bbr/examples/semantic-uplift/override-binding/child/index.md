
# Override Binding - Child (Profile) (Schema)

`ogc.bbr.examples.semantic-uplift.override-binding.child` *v1.0*

A profile of 'Override Binding - Base' that narrows its inherited 'note' and 'label' bindings by redeclaring them in its own context.jsonld.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Override Binding - Child (Profile)

This block joins its schema with the
[Override Binding - Base](bblocks://ogc.bbr.examples.semantic-uplift.override-binding.base) building block's via
an `allOf`/`$ref` in [schema.yaml](schema.yaml) — the same composition `extends` in `bblock.json` sets up — and
redeclares the base block's property names in its own [context.jsonld](context.jsonld):

* `note` — only `@id` is redeclared, narrowing `skos:note` down to `skos:definition`. Its `@type`
  (`xsd:string`) isn't redeclared here, so it's still inherited from the base block's binding.
* `label` — both `@id` and `@type` are redeclared, fully replacing `skos:prefLabel` (`xsd:string`) with
  `skos:altLabel` (`xsd:language`).
* `assets.href` — nested inside the `assets` object. Only `@id` is redeclared, narrowing `dcat:downloadURL`
  down to `dcat:accessURL`; `@type` (`@id`) is still inherited from the base block's binding.

This works because the postprocessor annotates each block's schema from its own context in isolation, then
assembles the final context by walking the compiled schema's `allOf` branches in order — base branch first, own
branch last — so a property mapped on both sides resolves to whichever branch comes later. Placing the base
block's `$ref` before this block's own properties in the `allOf` is what makes this block's mapping win.

`assets.href` demonstrates the extra step a *nested* override needs. Assembly matches `allOf` branches by
structural position in the schema tree, not by property name alone, so redeclaring `href` alone in this block's
`schema.yaml`/`context.jsonld` would do nothing — there's no top-level `href` node for the assembly walk to
match against the base schema's. Instead this block's own `allOf` branch restates the *whole* `assets` object
(with its own nested `href` property), which is what gives the assembly walk a matching structural position to
override at.

Look at the assembled JSON-LD context for this block (Examples tab &rarr; RDF/Turtle, or the annotated schema) and
compare it to the [base block](bblocks://ogc.bbr.examples.semantic-uplift.override-binding.base)'s: `note` should
carry `skos:definition` as `@id` but keep `xsd:string` as `@type`, `label` should be fully remapped to
`skos:altLabel` / `xsd:language`, and `assets.href` should carry `dcat:accessURL` as `@id` but keep `@id` as
`@type`.

See [overriding an inherited binding](https://ogcincubator.github.io/bblocks-docs/create/semantic-uplift#overriding-an-inherited-binding)
in the OGC Blocks docs for the full explanation of this mechanism, including the caveat that it isn't opt-in — any
property name reused from the base schema's chain is overridden the same way, whether or not that was intended.

## Examples

### Child (profile) example
#### json
```json
{
  "note": "This term narrows the inherited 'note' binding to skos:definition.",
  "label": "en",
  "assets": {
    "href": "https://example.org/resource"
  }
}

```

#### jsonld
```jsonld
{
  "@context": "https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/semantic-uplift/override-binding/child/context.jsonld",
  "note": "This term narrows the inherited 'note' binding to skos:definition.",
  "label": "en",
  "assets": {
    "href": "https://example.org/resource"
  }
}
```

#### ttl
```ttl
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] skos:altLabel "en"^^xsd:language ;
    skos:definition "This term narrows the inherited 'note' binding to skos:definition."^^xsd:string ;
    dcat:distribution [ dcat:accessURL <https://example.org/resource> ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Profile of "Override Binding - Base" that redeclares "note" and "label"
  to narrow their inherited SKOS bindings, and restates "assets" to narrow the nested
  "href" binding.
allOf:
- $ref: https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/semantic-uplift/override-binding/base/schema.yaml
- type: object
  properties:
    note:
      type: string
      x-jsonld-id: http://www.w3.org/2004/02/skos/core#definition
    label:
      type: string
      x-jsonld-id: http://www.w3.org/2004/02/skos/core#altLabel
      x-jsonld-type: http://www.w3.org/2001/XMLSchema#language
    assets:
      type: object
      properties:
        href:
          type: string
          x-jsonld-id: http://www.w3.org/ns/dcat#accessURL
      x-jsonld-id: http://www.w3.org/ns/dcat#distribution

```

Links to the schema:

* YAML version: [schema.yaml](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/semantic-uplift/override-binding/child/schema.json)
* JSON version: [schema.json](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/semantic-uplift/override-binding/child/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "note": {
      "@id": "http://www.w3.org/2004/02/skos/core#definition",
      "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    "label": {
      "@id": "http://www.w3.org/2004/02/skos/core#altLabel",
      "@type": "http://www.w3.org/2001/XMLSchema#language"
    },
    "assets": {
      "@context": {
        "href": {
          "@id": "http://www.w3.org/ns/dcat#accessURL",
          "@type": "@id"
        }
      },
      "@id": "http://www.w3.org/ns/dcat#distribution"
    },
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/semantic-uplift/override-binding/child/context.jsonld)

## Sources

* [SKOS Simple Knowledge Organization System Reference](https://www.w3.org/TR/skos-reference/)
* [OGC Blocks docs: Overriding an inherited binding](https://ogcincubator.github.io/bblocks-docs/create/semantic-uplift#overriding-an-inherited-binding)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/ogcincubator/bblocks-examples](https://github.com/ogcincubator/bblocks-examples)
* Path: `_sources/semantic-uplift/override-binding/child`

