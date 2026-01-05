
# Topo rules examples (Schema)

`ogc.bbr.examples.rules.topo-edges` *v1.0*

Demonstrates inheritance of rules (in this case for topology using feature references - that cannot be expressed in schemas.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Rules Inheritance

## Examples

### Line and points
Simple line using two points, which must be present according to inherited rules.
#### json
```json
{
  "@context": {
    "eg": "http://test-data/"
  },
  "id": "eg:eg1",
  "nodes": [
    {
      "id": "P1",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.32,
          -33.825
        ]
      },
      "properties": {
        "name": "waypoint 1"
      }
    },
    {
      "id": "P2",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.34,
          -32.825
        ]
      },
      "properties": {
        "name": "waypoint 2"
      }
    }
  ],
  "edges": [
    {
      "type": "Feature",
      "id": "LineP1P2",
      "geometry": null,
      "topology": {
        "type": "LineString",
        "references": [
          "P1",
          "P2"
        ]
      },
      "properties": {}
    }
  ]
}


```

#### jsonld
```jsonld
{
  "@context": [
    "https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/rules/topo-edges/context.jsonld",
    {
      "eg": "http://test-data/"
    }
  ],
  "id": "eg:eg1",
  "nodes": [
    {
      "id": "P1",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.32,
          -33.825
        ]
      },
      "properties": {
        "name": "waypoint 1"
      }
    },
    {
      "id": "P2",
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.34,
          -32.825
        ]
      },
      "properties": {
        "name": "waypoint 2"
      }
    }
  ],
  "edges": [
    {
      "type": "Feature",
      "id": "LineP1P2",
      "geometry": null,
      "topology": {
        "type": "LineString",
        "references": [
          "P1",
          "P2"
        ]
      },
      "properties": {}
    }
  ]
}
```

#### ttl
```ttl
@prefix : <https://example.com/edges/> .
@prefix eg: <http://test-data/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

eg:eg1 :edges <http://example.com/nodes/LineP1P2> ;
    :nodes <http://example.com/nodes/P1>,
        <http://example.com/nodes/P2> .

<http://example.com/nodes/LineP1P2> :topology [ :type "LineString" ;
            geojson:relatedFeatures ( <http://example.com/nodes/P1> <http://example.com/nodes/P2> ) ] ;
    :type "Feature" .

<http://example.com/nodes/P1> :geometry [ :type "Point" ;
            geojson:coordinates ( 1.5132e+02 -3.3825e+01 ) ] ;
    :name "waypoint 1" ;
    :type "Feature" .

<http://example.com/nodes/P2> :geometry [ :type "Point" ;
            geojson:coordinates ( 1.5134e+02 -3.2825e+01 ) ] ;
    :name "waypoint 2" ;
    :type "Feature" .


```

## Schema

```yaml
$schema: http://json-schema.org/draft/2020-12/schema
title: Nodes and Edges bundle
$defs:
  TopoLine:
    $ref: https://ogcincubator.github.io/topo-feature/build/annotated/geo/topo/features/topo-line/schema.yaml
  FeatureOptions:
    $ref: https://ogcincubator.github.io/topo-feature/build/annotated/geo/topo/features/topo-feature-collection/schema.yaml#FeatureOptions
  FeatureCollectionOptions:
    $ref: https://ogcincubator.github.io/topo-feature/build/annotated/geo/topo/features/topo-feature-collection/schema.yaml#FeatureCollectionOptions
  PointFeature:
    allOf:
    - $ref: '#/$defs/FeatureOptions'
    - properties:
        geometry:
          allOf:
          - properties:
              type:
                type: string
                const: Point
      required:
      - geometry
properties:
  id:
    description: The unique id for this object that can be persisted in the knowledge
      base as an IRI, so it must conform to a full URI or a CURIE that references
      an appropriate namespace.
    $ref: https://opengeospatial.github.io/bblocks/annotated-schemas/ogc-utils/iri-or-curie/schema.yaml
    x-jsonld-id: '@id'
  nodes:
    anyOf:
    - allOf:
      - $ref: '#/$defs/FeatureCollectionOptions'
      - properties:
          features:
            type: array
            items:
              $ref: '#/$defs/PointFeature'
    - type: array
      items:
        $ref: '#/$defs/PointFeature'
  edges:
    anyOf:
    - type: array
      items:
        $ref: '#/$defs/TopoLine'
    - allOf:
      - $ref: '#/$defs/FeatureCollectionOptions'
      - properties:
          features:
            type: array
            items:
              $ref: '#/$defs/TopoLine'
x-jsonld-vocab: https://example.com/edges/

```

Links to the schema:

* YAML version: [schema.yaml](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/rules/topo-edges/schema.json)
* JSON version: [schema.json](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/rules/topo-edges/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "@vocab": "https://example.com/edges/",
    "id": "@id",
    "nodes": {
      "@context": {
        "links": {
          "@context": {
            "href": {
              "@type": "@id",
              "@id": "oa:hasTarget"
            },
            "rel": {
              "@context": {
                "@base": "http://www.iana.org/assignments/relation/"
              },
              "@id": "http://www.iana.org/assignments/relation",
              "@type": "@id"
            },
            "type": "dct:type",
            "hreflang": "dct:language",
            "title": "rdfs:label",
            "length": "dct:extent"
          },
          "@id": "rdfs:seeAlso"
        },
        "featureType": "@type",
        "coordRefSys": "http://www.opengis.net/def/glossary/term/CoordinateReferenceSystemCRS",
        "time": {
          "@context": {
            "date": {
              "@id": "owlTime:hasTime",
              "@type": "xsd:date"
            },
            "timestamp": {
              "@id": "owlTime:hasTime",
              "@type": "xsd:dateTime"
            },
            "interval": {
              "@id": "owlTime:hasTime",
              "@container": "@list"
            }
          },
          "@id": "dct:time"
        },
        "place": "dct:spatial"
      }
    },
    "edges": {
      "@context": {
        "geometry": {
          "@context": {
            "type": "@type"
          },
          "@id": "geojson:geometry"
        },
        "links": {
          "@context": {
            "href": {
              "@type": "@id",
              "@id": "oa:hasTarget"
            },
            "rel": {
              "@context": {
                "@base": "http://www.iana.org/assignments/relation/"
              },
              "@id": "http://www.iana.org/assignments/relation",
              "@type": "@id"
            },
            "type": "dct:type",
            "hreflang": "dct:language",
            "title": "rdfs:label",
            "length": "dct:extent"
          },
          "@id": "rdfs:seeAlso"
        },
        "featureType": "@type",
        "time": {
          "@context": {
            "date": {
              "@id": "owlTime:hasTime",
              "@type": "xsd:date"
            },
            "timestamp": {
              "@id": "owlTime:hasTime",
              "@type": "xsd:dateTime"
            },
            "interval": {
              "@id": "owlTime:hasTime",
              "@container": "@list"
            }
          },
          "@id": "dct:time"
        },
        "coordRefSys": "http://www.opengis.net/def/glossary/term/CoordinateReferenceSystemCRS",
        "place": "dct:spatial",
        "topology": {
          "@context": {
            "references": {
              "@id": "geojson:relatedFeatures",
              "@type": "@id",
              "@container": "@list"
            }
          }
        }
      }
    },
    "properties": "@nest",
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "features": {
      "@container": "@set",
      "@id": "geojson:features"
    },
    "Polyhedron": "geojson:Polyhedron",
    "MultiPolyhedron": "geojson:MultiPolyhedron",
    "Prism": {
      "@id": "geojson:Prism",
      "@context": {
        "base": "geojson:prismBase",
        "lower": "geojson:prismLower",
        "upper": "geojson:prismUpper"
      }
    },
    "MultiPrism": {
      "@id": "geojson:MultiPrism",
      "@context": {
        "prisms": "geojson:prisms"
      }
    },
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "coordinates": {
      "@container": "@list",
      "@id": "geojson:coordinates"
    },
    "geometries": {
      "@id": "geojson:geometry",
      "@container": "@list"
    },
    "Arc": "geojson:Arc",
    "ArcWithCenter": "geojson:ArcWithCenter",
    "ArcByChord": "geojson:ArcByChord",
    "CircleByCenter": "geojson:CircleByCenter",
    "CubicSpline": "geojson:CubicSpline",
    "radius": "geojson:radius",
    "arcLength": "geojson:arcLength",
    "startTangentVector": "geojson:startTangentVector",
    "endTangentVector": "geojson:endTangentVector",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "geojson": "https://purl.org/geojson/vocab#",
    "owlTime": "http://www.w3.org/2006/time#",
    "time": "http://www.w3.org/2006/time#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "csdm": "https://linked.data.gov.au/def/csdm/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/rules/topo-edges/context.jsonld)


# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/ogcincubator/bblocks-examples](https://github.com/ogcincubator/bblocks-examples)
* Path: `_sources/rules/topo-edges`

