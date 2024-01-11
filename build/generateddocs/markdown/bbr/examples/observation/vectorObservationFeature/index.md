
# Example SOSA Vector Observation Feature (Schema)

`ogc.bbr.examples.observation.vectorObservationFeature` *v1.0*

This building block defines an example specialisation of an existing Feature specialisation (SOSA Observation), using another schema to define a result set - in this case the GeoPose model

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### VectorObservation - specialisation example.
#### json
```json
{
  "@id": "vector-obs-1",
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -111.67183507997295,
        40.056709946862874
      ],
      [
        -111.71,
        40.156709946862874
      ]
    ]
  },
  "time": null,
  "place": null,
  "properties": {
    "hasFeatureOfInterest": "eg:Traverse-P1-P2",
    "observedProperty": "Geopose (or a URI for this concept)",
    "resultTime": "2023-05-22T16:41:00+2",
    "hasResult": {
      "@context": {
        "resultschema": "http://example.org/resultschema/",
        "pose": "resultschema:pose",
        "distance": {
          "@id": "resultschema:distance"
        }
      },
      "pose": {
        "position": {
          "lat": -111.67183507997295,
          "lon": 40.056709946862874,
          "h": 0.5
        },
        "angles": {
          "yaw": 15.35,
          "pitch": -0.01,
          "roll": 0
        }
      },
      "distance": 6889234.2
    }
  }
}

```

#### jsonld
```jsonld
{
  "@id": "vector-obs-1",
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -111.67183507997295,
        40.056709946862874
      ],
      [
        -111.71,
        40.156709946862875
      ]
    ]
  },
  "time": null,
  "place": null,
  "properties": {
    "hasFeatureOfInterest": "eg:Traverse-P1-P2",
    "observedProperty": "Geopose (or a URI for this concept)",
    "resultTime": "2023-05-22T16:41:00+2",
    "hasResult": {
      "@context": {
        "resultschema": "http://example.org/resultschema/",
        "pose": "resultschema:pose",
        "distance": {
          "@id": "resultschema:distance"
        }
      },
      "pose": {
        "position": {
          "lat": -111.67183507997295,
          "lon": 40.056709946862874,
          "h": 0.5
        },
        "angles": {
          "yaw": 15.35,
          "pitch": -0.01,
          "roll": 0
        }
      },
      "distance": 6889234.2
    }
  },
  "@context": "https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/observation/vectorObservationFeature/context.jsonld"
}
```

#### ttl
```ttl
@prefix geo1: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix geopose: <http://example.com/geopose/> .
@prefix ns1: <http://example.org/resultschema/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.com/features/vector-obs-1> a geojson:Feature ;
    sosa:hasFeatureOfInterest <eg:Traverse-P1-P2> ;
    sosa:hasResult [ ns1:distance 6.889234e+06 ;
            ns1:pose [ geopose:angles [ geopose:pitch -1e-02 ;
                            geopose:roll 0 ;
                            geopose:yaw 1.535e+01 ] ;
                    geopose:position [ geopose:h 5e-01 ;
                            geo1:lat -1.116718e+02 ;
                            geo1:long 4.005671e+01 ] ] ] ;
    sosa:observedProperty <http://example.com/features/> ;
    sosa:resultTime "2023-05-22T16:41:00+2" ;
    geojson:geometry [ a geojson:LineString ;
            geojson:coordinates ( "[-111.67183507997295, 40.056709946862874]" "[-111.71, 40.156709946862875]" ) ] .


```


### VectorObservationCollection
#### json
```json
{
  "@context": {
    "resultschema": "http://example.org/resultschema/",
    "pose": "resultschema:pose",
    "distance": {
      "@id": "resultschema:distance"
    }
  },
  "@id": "c1",
  "type": "FeatureCollection",
  "featureType": "sosa:ObservationCollection",
  "observedProperty": "Geopose (or a URI for this concept)",
  "properties": {
    "resultTime": "1999"
  },
  "features": [
    {
      "@id": "vector-obs-1",
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -111.67183507997295,
            40.056709946862874
          ],
          [
            -111.67183507997295,
            40.056709946862874
          ]
        ]
      },
      "time": null,
      "place": null,
      "properties": {
        "hasFeatureOfInterest": "eg:Traverse-P1-P2",
        "resultTime": "2023-05-22T16:41:00+2",
        "hasResult": {
          "pose": {
            "position": {
              "lat": -111.67183507997295,
              "lon": 40.056709946862874,
              "h": 0.5
            },
            "angles": {
              "yaw": 15.35,
              "pitch": -0.01,
              "roll": 0
            }
          },
          "distance": 6889234.2
        }
      }
    }
  ]
}
```

#### jsonld
```jsonld
{
  "@context": [
    "https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/observation/vectorObservationFeature/context.jsonld",
    {
      "resultschema": "http://example.org/resultschema/",
      "pose": "resultschema:pose",
      "distance": {
        "@id": "resultschema:distance"
      }
    }
  ],
  "@id": "c1",
  "type": "FeatureCollection",
  "featureType": "sosa:ObservationCollection",
  "observedProperty": "Geopose (or a URI for this concept)",
  "properties": {
    "resultTime": "1999"
  },
  "features": [
    {
      "@id": "vector-obs-1",
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -111.67183507997295,
            40.056709946862874
          ],
          [
            -111.67183507997295,
            40.056709946862874
          ]
        ]
      },
      "time": null,
      "place": null,
      "properties": {
        "hasFeatureOfInterest": "eg:Traverse-P1-P2",
        "resultTime": "2023-05-22T16:41:00+2",
        "hasResult": {
          "pose": {
            "position": {
              "lat": -111.67183507997295,
              "lon": 40.056709946862874,
              "h": 0.5
            },
            "angles": {
              "yaw": 15.35,
              "pitch": -0.01,
              "roll": 0
            }
          },
          "distance": 6889234.2
        }
      }
    }
  ]
}
```

#### ttl
```ttl
@prefix geo1: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix geopose: <http://example.com/geopose/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix resultschema: <http://example.org/resultschema/> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<http://example.com/features/c1> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember <http://example.com/features/vector-obs-1> ;
    sosa:observedProperty <http://example.com/features/> ;
    sosa:resultTime "1999" .

<http://example.com/features/vector-obs-1> a geojson:Feature ;
    sosa:hasFeatureOfInterest <eg:Traverse-P1-P2> ;
    sosa:hasResult [ resultschema:distance 6.889234e+06 ;
            resultschema:pose [ geopose:angles [ geopose:pitch -1e-02 ;
                            geopose:roll 0 ;
                            geopose:yaw 1.535e+01 ] ;
                    geopose:position [ geopose:h 5e-01 ;
                            geo1:lat -1.116718e+02 ;
                            geo1:long 4.005671e+01 ] ] ] ;
    sosa:resultTime "2023-05-22T16:41:00+2" ;
    geojson:geometry [ a geojson:LineString ;
            geojson:coordinates ( "[-111.67183507997295, 40.056709946862874]" "[-111.67183507997295, 40.056709946862874]" ) ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Example SOSA Observation Specialisation - a vector bearing and distance
$defs:
  VectorObservation:
    allOf:
    - $ref: https://opengeospatial.github.io/ogcapi-sosa/build/annotated/unstable/sosa/features/observation/schema.json
    - type: object
      properties:
        properties:
          $ref: ../vectorObservation/schema.yaml
  VectorObservationCollection:
    allOf:
    - $ref: https://opengeospatial.github.io/ogcapi-sosa/build/annotated/unstable/sosa/features/observationCollection/schema.json
    - type: object
      properties:
        features:
          type: array
          items:
            $ref: '#/$defs/VectorObservation'
anyOf:
- $ref: '#/$defs/VectorObservation'
- $ref: '#/$defs/VectorObservationCollection'

```

Links to the schema:

* YAML version: [schema.yaml](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/observation/vectorObservationFeature/schema.json)
* JSON version: [schema.json](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/observation/vectorObservationFeature/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "type": "@type",
    "id": "@id",
    "properties": "@nest",
    "geometry": {
      "@context": {},
      "@id": "geojson:geometry"
    },
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
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
      "@id": "sosa:hasMember",
      "@context": {
        "features": {
          "@container": "@set",
          "@id": "geojson:features"
        }
      }
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
    "coordinates": {
      "@container": "@list",
      "@id": "geojson:coordinates"
    },
    "resultTime": "sosa:resultTime",
    "phenomenonTime": "sosa:phenomenonTime",
    "hasFeatureOfInterest": {
      "@id": "sosa:hasFeatureOfInterest",
      "@type": "@id"
    },
    "observedProperty": {
      "@id": "sosa:observedProperty",
      "@type": "@id"
    },
    "usedProcedure": {
      "@id": "sosa:usedProcedure",
      "@type": "@id"
    },
    "madeBySensor": {
      "@id": "sosa:madeBySensor",
      "@type": "@id"
    },
    "hasResult": "sosa:hasResult",
    "hasSimpleResult": "sosa:hasSimpleResult",
    "Observation": "sosa:Observation",
    "Sample": "sosa:Sample",
    "System": "sosa:System",
    "Platform": "sosa:Platform",
    "observes": {
      "@id": "sosa:observes",
      "@type": "@id"
    },
    "isObservedBy": {
      "@id": "sosa:isObservedBy",
      "@type": "@id"
    },
    "madeObservation": {
      "@id": "sosa:madeObservation",
      "@type": "@id"
    },
    "actsOnProperty": {
      "@id": "sosa:actsOnProperty",
      "@type": "@id"
    },
    "isActedOnBy": {
      "@id": "sosa:isActedOnBy",
      "@type": "@id"
    },
    "madeActuation": {
      "@id": "sosa:madeActuation",
      "@type": "@id"
    },
    "madeByActuator": {
      "@id": "sosa:madeByActuator",
      "@type": "@id"
    },
    "hasSample": {
      "@id": "sosa:hasSample",
      "@type": "@id"
    },
    "isSampleOf": {
      "@id": "sosa:isSampleOf",
      "@type": "@id"
    },
    "madeSampling": {
      "@id": "sosa:madeSampling",
      "@type": "@id"
    },
    "madeBySampler": {
      "@id": "sosa:madeBySampler",
      "@type": "@id"
    },
    "isFeatureOfInterestOf": {
      "@id": "sosa:isFeatureOfInterestOf",
      "@type": "@id"
    },
    "isResultOf": "sosa:isResultOf",
    "hosts": {
      "@id": "sosa:hosts",
      "@type": "@id",
      "@container": "@set"
    },
    "isHostedBy": "sosa:isHostedBy",
    "isProxyFor": "sosa:isProxyFor",
    "wasOriginatedBy": "sosa:wasOriginatedBy",
    "detects": "sosa:detects",
    "hasProperty": "sosa:hasProperty",
    "isPropertyOf": "sosa:isPropertyOf",
    "forProperty": "sosa:forProperty",
    "implements": "sosa:implements",
    "implementedBy": "sosa:implementedBy",
    "hasInput": "sosa:hasInput",
    "hasOutput": "sosa:hasOutput",
    "hasSubSystem": {
      "@id": "sosa:hasSubSystem",
      "@type": "@id",
      "@container": "@set"
    },
    "deployedSystem": "sosa:deployedSystem",
    "hasDeployment": "sosa:hasDeployment",
    "deployedOnPlatform": "sosa:deployedOnPlatform",
    "inDeployment": "sosa:inDeployment",
    "inCondition": "ssn-system:inCondition",
    "hasSystemCapability": "ssn-system:hasSystemCapability",
    "hasSystemProperty": "ssn-system:hasSystemProperty",
    "hasOperatingRange": "ssn-system:hasOperatingRange",
    "hasOperatingProperty": "ssn-system:hasOperatingProperty",
    "hasSurvivalRange": "ssn-system:hasSurvivalRange",
    "hasSurvivalProperty": "ssn-system:hasSurvivalProperty",
    "qualityOfObservation": "ssn-system:qualityOfObservation",
    "hasMember": {
      "@context": {},
      "@id": "sosa:hasMember"
    },
    "position": {
      "@context": {
        "lat": "geo:lat",
        "lon": "geo:long",
        "h": "geopose:h"
      },
      "@id": "geopose:position"
    },
    "angles": {
      "@context": {
        "yaw": "geopose:yaw",
        "pitch": "geopose:pitch",
        "roll": "geopose:roll"
      },
      "@id": "geopose:angles"
    },
    "geojson": "https://purl.org/geojson/vocab#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "sosa": "http://www.w3.org/ns/sosa/",
    "ssn-system": "ssn:systems/",
    "ssn": "http://www.w3.org/ns/ssn/",
    "geopose": "http://example.com/geopose/",
    "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/observation/vectorObservationFeature/context.jsonld)

## Sources

* [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn/)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/ogcincubator/bblocks-examples](https://github.com/ogcincubator/bblocks-examples)
* Path: `_sources/observation/vectorObservationFeature`
