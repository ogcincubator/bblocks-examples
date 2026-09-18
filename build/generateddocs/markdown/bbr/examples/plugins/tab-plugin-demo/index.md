
# Tab plugin example (Schema)

`ogc.bbr.examples.plugins.tab-plugin-demo` *v0.1*

A sample building block to showcase a tab plugin, scoped so it only adds its tab to this one block

[*Status*](http://www.opengis.net/def/status): Under development

## Description

This building block exists purely to demonstrate a **tab plugin**: a client-side viewer plugin that
adds a whole new top-level tab to a bblock's detail page (as opposed to a
[view plugin](https://github.com/ogcincubator/bblocks-viewer-plugin-types), which only replaces the
rendering of one example snippet).

The plugin, [`tab-plugin-demo.js`](https://github.com/ogcincubator/bblocks-examples/blob/master/plugins/tab-plugin-demo.js),
is declared once for the whole register in `bblocks-config.yaml`, but its `matches()` method checks
the bblock's own identifier and only returns `true` for this specific block
(`ogc.bbr.examples.plugins.tab-plugin-demo`) — so the extra "Plugin demo" tab it adds is only visible
here, and every other bblock in this register renders exactly as before.

The tab it adds also shows off the natural pairing between a
[build plugin](https://github.com/ogcincubator/bblocks-build-plugin-sample) and a tab plugin: the
`x-sampleBuildPlugin` field that the sample build plugin stamps onto this bblock's `json-full` output
(already wired up in this register) is read straight out of `context.bblock` and rendered in the new
tab.


# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/ogcincubator/bblocks-examples](https://github.com/ogcincubator/bblocks-examples)
* Path: `_sources/plugins/tab-plugin-demo`

