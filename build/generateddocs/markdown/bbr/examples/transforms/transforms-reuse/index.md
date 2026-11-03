
# Transforms reuse example (Schema)

`ogc.bbr.examples.transforms.transforms-reuse` *v0.1*

Demonstrates calling a component bblock's Python transform from a composite bblock using get_transformer.

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### Sample object for transform reuse
#### json
```json
{
  "name": "example item",
  "value": 42,
  "active": true
}

```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: A simple JSON object used to demonstrate transform reuse
type: object
x-bblocks-metadata:
  itemIdentifier: ogc.bbr.examples.transforms.transforms-reuse
  register: https://rob-metalinkage.github.io/bblocks-examples/build/register.json
  version: '0.1'
  dateOfLastChange: '2026-11-03'

```

Links to the schema:

* YAML version: [schema.yaml](https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/transforms/transforms-reuse/schema.json)
* JSON version: [schema.json](https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/transforms/transforms-reuse/schema.yaml)


# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/rob-metalinkage/bblocks-examples](https://github.com/rob-metalinkage/bblocks-examples)
* Path: `_sources/transforms/transforms-reuse`

