// Demo tab plugin for the "Tab plugin example" bblock
// (ogc.bbr.examples.plugins.tab-plugin-demo) in the bblocks-examples register.
//
// Declared once for the whole register in bblocks-config.yaml under
// viewer.tab-plugins, but matches() restricts it to a single bblock so the
// extra tab it contributes doesn't show up anywhere else.
//
// See the "tab-plugins" skill topic in ogcincubator/bblocks-examples for the
// full contract (TabPluginContext / TabPluginInstance / TabPluginClass).

const TARGET_IDENTIFIER = 'ogc.bbr.examples.plugins.tab-plugin-demo';

export default class TabPluginDemo {
  static tabId = 'plugin-demo';
  static tabLabel = 'Plugin demo';
  static icon = 'mdi-tab-plus';
  static weight = 0;
  static cacheable = true;

  constructor(context) {
    this.context = context;
  }

  matches() {
    return this.context.bblock?.itemIdentifier === TARGET_IDENTIFIER;
  }

  render(el) {
    const { bblock, register } = this.context;
    const stamp = bblock?.['x-sampleBuildPlugin'];

    const registerName = register?.name ?? '(register info unavailable)';

    el.innerHTML = `
      <div style="padding: 1.5rem; font-family: sans-serif; max-width: 60rem;">
        <h2 style="margin-top: 0;">This tab only exists on this bblock</h2>
        <p>
          This tab is contributed by <code>tab-plugin-demo.js</code>, declared once for the whole
          <strong>${escapeHtml(registerName)}</strong> register, but its <code>matches()</code>
          method only returns <code>true</code> when the current bblock's identifier is
          <code>${escapeHtml(TARGET_IDENTIFIER)}</code> — so every other bblock in this register
          renders exactly as it would without the plugin installed.
        </p>
        ${renderStampSection(stamp)}
      </div>
    `;
  }
}

function renderStampSection(stamp) {
  if (!stamp) {
    return `
      <p>
        No <code>x-sampleBuildPlugin</code> field was found on this bblock — the sample build
        plugin may not be wired up, or the register hasn't been rebuilt since it was added.
      </p>
    `;
  }
  return `
    <h3>Build plugin + tab plugin, paired</h3>
    <p>
      The <a href="https://github.com/ogcincubator/bblocks-build-plugin-sample" target="_blank"
      rel="noopener">sample build plugin</a>, wired up for this register via
      <code>plugins.build</code>, stamps an <code>x-sampleBuildPlugin</code> field onto every
      bblock's <code>json-full</code> output during <code>after_register</code>. This tab reads
      that field straight out of <code>context.bblock</code>:
    </p>
    <pre style="background: #f5f5f5; padding: 1rem; overflow-x: auto; border-radius: 4px;">${escapeHtml(
      JSON.stringify(stamp, null, 2)
    )}</pre>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}
