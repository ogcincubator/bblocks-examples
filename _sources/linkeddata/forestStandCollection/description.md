## Linked Data Example

This Building Block represents a typical case where Features can be documented to have multi-lingual labels and links to richer descriptions.

This "Linked Data" capability does not require "Semantic Web" infrastructure - it leverages JSON-LD to annotate JSON elements.

The key is this annotation is not trivial - it must work for the structural components of FeatureCollections and Features, and be able to be combined with the specific properties needed for the domain of application.

These examples show how the Building Blocks framework integrates JSON-LD from each component to create the "complete" context required for a generic Linked-Data aware client (in this case a Leaflet plugin) to resolve elements to URLs, and then access multilingual labels and descriptions using these links - all enabled by the context document.

Hint - look at the JSON-LD and Map-View visualisations, click on the map to access object attributes and see them come to life!



