This building block demonstrates the three sample validator plugins:

- **ZipValidator** — verifies ZIP archive integrity using Python's stdlib `zipfile`.
- **WktValidator** — validates WKT geometry syntax and topology using [Shapely](https://shapely.readthedocs.io/).
- **XsdValidator** — validates XML/GML documents against XSD schemas declared as bblock validation resources.

These plugins are loaded from the [`bbplugin-sample-validators`](https://github.com/ogcincubator/bblocks-sample-validator-plugins) package via the `plugins.validators` entry in `bblocks-config.yaml`.