
# Example OGC API Processes instance output descriptions (Schema)

`ogc.bbr.examples.ogcapi.processes.schemas.outputDescriptions` *v1.0*

Collection of output descriptions

[*Status*](http://www.opengis.net/def/status): Under development

## Schema

```yaml
anyOf:
- $ref: https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/ogcapi/processes/schemas/buffer-geometry/outputDescription/schema.yaml
x-bblocks-metadata:
  itemIdentifier: ogc.bbr.examples.ogcapi.processes.schemas.outputDescriptions
  register: https://rob-metalinkage.github.io/bblocks-examples/build/register.json
  version: '1.0'
  dateOfLastChange: '2026-11-03'

```

Links to the schema:

* YAML version: [schema.yaml](https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/ogcapi/processes/schemas/outputDescriptions/schema.json)
* JSON version: [schema.json](https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/ogcapi/processes/schemas/outputDescriptions/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "@vocab": "https://w3id.org/ogc/api/processes/",
    "schema": "proc:schema",
    "title": "dct:title",
    "description": "dct:description",
    "keywords": "proc:keywords",
    "nullable": "proc:nullable",
    "type": "proc:type",
    "$ref": {
      "@id": "proc:ref",
      "@type": "@id"
    },
    "default": {
      "@id": "proc:default",
      "@type": "@json"
    },
    "minOccurs": "proc:minOccurs",
    "maxOccurs": "proc:maxOccurs",
    "enum": {
      "@id": "proc:enum",
      "@container": "@set"
    },
    "dct": "http://purl.org/dc/terms/",
    "proc": "https://w3id.org/ogc/api/processes/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://rob-metalinkage.github.io/bblocks-examples/build/annotated/bbr/examples/ogcapi/processes/schemas/outputDescriptions/context.jsonld)


# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/rob-metalinkage/bblocks-examples](https://github.com/rob-metalinkage/bblocks-examples)
* Path: `_sources/ogcapi/processes/schemas/outputDescriptions`

