## Override Binding - Base

A plain building block with two top-level properties, `note` and `label`, plus a nested one, `assets.href`, each
bound in [context.jsonld](context.jsonld) to a generic predicate:

* `note` &rarr; `skos:note`
* `label` &rarr; `skos:prefLabel`
* `assets.href` &rarr; `dcat:downloadURL`

On its own this block is unremarkable. It exists to be extended by
[Override Binding - Child](bblocks://ogc.bbr.examples.semantic-uplift.override-binding.child), which redeclares
`note` and `label` in its own context, and restates the whole `assets` object to narrow `href`, to narrow their
meaning — see that block's description, and the docs on
[overriding an inherited binding](https://ogcincubator.github.io/bblocks-docs/create/semantic-uplift#overriding-an-inherited-binding),
for what that demonstrates.
