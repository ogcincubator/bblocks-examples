
# Test Context Override (Schema)

`ogc.bbr.examples.feature.overrideContext` *v1.0*

This example shows a simple customisation for OGC API Feature using an externally defined domain schema.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Feature Type based on a published schema

Test for overriding a schema element.

In this case Latitude and Longitude are converted to more common options.

## Examples

### GeoJSON - specialisation example.
#### json
```json
{
  "id": "f1",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      59.354444,
      17.939722
    ]
  },
  "properties": {
    "id": "urn:ngsi-ld:AirportFacility:id:IUXP:30337114",
    "type": "AirportFacility",
    "IataCode": "BMA",
    "IcaoCode": "ESSB",
    "Name": "control"
  }
}

```

#### jsonld
```jsonld
{
  "@context": "https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/feature/overrideContext/context.jsonld",
  "id": "f1",
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      59.354444,
      17.939722
    ]
  },
  "properties": {
    "id": "urn:ngsi-ld:AirportFacility:id:IUXP:30337114",
    "type": "AirportFacility",
    "IataCode": "BMA",
    "IcaoCode": "ESSB",
    "Name": "control"
  }
}
```

#### ttl
```ttl

<http://example.com/features/f1> a <http://example.com/features/Feature> .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Example of a simple GeoJSON Feature specialisation
$defs:
  MyFeature:
    allOf:
    - $ref: https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/feature/externalSchema/schema.yaml
anyOf:
- $ref: '#/$defs/MyFeature'
x-jsonld-extra-terms:
  Name: rdfs:label

```

Links to the schema:

* YAML version: [schema.yaml](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/feature/overrideContext/schema.json)
* JSON version: [schema.json](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/feature/overrideContext/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "AirportElevation": "https://smartdatamodels.org/dataModel.ACRIS/AirportElevation",
    "AirportElevationUnitOfMeasurement": "https://smartdatamodels.org/dataModel.ACRIS/AirportElevationUnitOfMeasurement",
    "AirportFacility": "https://smartdatamodels.org/dataModel.ACRIS/AirportFacility",
    "AirportLocation": "https://smartdatamodels.org/dataModel.ACRIS/AirportLocation",
    "CheckpointAreaLocation": "https://smartdatamodels.org/dataModel.ACRIS/CheckpointAreaLocation",
    "CheckpointFacility": "https://smartdatamodels.org/dataModel.ACRIS/CheckpointFacility",
    "CheckpointFacilityOperatorParty": "https://smartdatamodels.org/dataModel.ACRIS/CheckpointFacilityOperatorParty",
    "CheckpointFacilityType": "https://smartdatamodels.org/dataModel.ACRIS/CheckpointFacilityType",
    "ClosingTime": "https://smartdatamodels.org/dataModel.ACRIS/ClosingTime",
    "Code": "https://smartdatamodels.org/dataModel.ACRIS/Code",
    "ConcourseFacility": "https://smartdatamodels.org/dataModel.ACRIS/ConcourseFacility",
    "Description": "https://smartdatamodels.org/dataModel.ACRIS/Description",
    "EndTime": "https://smartdatamodels.org/dataModel.ACRIS/EndTime",
    "IataCode": "https://smartdatamodels.org/dataModel.ACRIS/IataCode",
    "IcaoCode": "https://smartdatamodels.org/dataModel.ACRIS/IcaoCode",
    "Identifier": "https://smartdatamodels.org/dataModel.ACRIS/Identifier",
    "Latitude": "https://smartdatamodels.org/dataModel.ACRIS/Latitude",
    "Longitude": "https://smartdatamodels.org/dataModel.ACRIS/Longitude",
    "MeasurementDevice": "https://smartdatamodels.org/dataModel.ACRIS/MeasurementDevice",
    "MeasurementDeviceLocation": "https://smartdatamodels.org/dataModel.ACRIS/MeasurementDeviceLocation",
    "MeasurementTimePeriod": "https://smartdatamodels.org/dataModel.ACRIS/MeasurementTimePeriod",
    "Name": "https://smartdatamodels.org/dataModel.ACRIS/Name",
    "Occupancy": "https://smartdatamodels.org/dataModel.ACRIS/Occupancy",
    "OpeningTime": "https://smartdatamodels.org/dataModel.ACRIS/OpeningTime",
    "OperationTimePeriod": "https://smartdatamodels.org/dataModel.ACRIS/OperationTimePeriod",
    "PassengerProcess": "https://smartdatamodels.org/dataModel.ACRIS/PassengerProcess",
    "PassengerProcessType": "https://smartdatamodels.org/dataModel.ACRIS/PassengerProcessType",
    "PassengerQueue": "https://smartdatamodels.org/dataModel.ACRIS/PassengerQueue",
    "ProjectedWaitTime": "https://smartdatamodels.org/dataModel.ACRIS/ProjectedWaitTime",
    "QueueLocation": "https://smartdatamodels.org/dataModel.ACRIS/QueueLocation",
    "QueueMeasurement": "https://smartdatamodels.org/dataModel.ACRIS/QueueMeasurement",
    "QueueStatus": "https://smartdatamodels.org/dataModel.ACRIS/QueueStatus",
    "QueueType": "https://smartdatamodels.org/dataModel.ACRIS/QueueType",
    "Srid": "https://smartdatamodels.org/dataModel.ACRIS/Srid",
    "TerminalAreaLocation": "https://smartdatamodels.org/dataModel.ACRIS/TerminalAreaLocation",
    "TerminalFacility": "https://smartdatamodels.org/dataModel.ACRIS/TerminalFacility",
    "Throughput": "https://smartdatamodels.org/dataModel.ACRIS/Throughput",
    "Value": "https://smartdatamodels.org/dataModel.ACRIS/Value",
    "WaitTime": "https://smartdatamodels.org/dataModel.ACRIS/WaitTime",
    "ZoneAreaLocation": "https://smartdatamodels.org/dataModel.ACRIS/ZoneAreaLocation",
    "id": "@id",
    "type": "@type",
    "ngsi-ld": "https://uri.etsi.org/ngsi-ld/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://ogcincubator.github.io/bblocks-examples/build/annotated/bbr/examples/feature/overrideContext/context.jsonld)

## Sources

* [OGC API - Features, Part 1, 7.16.2: Feature Response](https://docs.ogc.org/is/17-069r3/17-069r3.html#_response_7)
* [Smart Data models](https://smartdatamodels.org/)
* [Smart Data Model: Airport Facility](https://github.com/smart-data-models/dataModel.ACRIS/tree/master/AirportFacility)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/ogcincubator/bblocks-examples](https://github.com/ogcincubator/bblocks-examples)
* Path: `_sources/feature/overrideContext`

