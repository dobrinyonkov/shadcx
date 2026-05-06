import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/dropdown-menu.ts'
import '../../lib/button.ts'
import '../source-code-block.ts'
import dropdownMenuSource from '../../lib/dropdown-menu.ts?raw'
import dropdownMenuJavaScriptSource from '../../lib/dropdown-menu.ts?source-js'

export const description = 'Displays a menu of actions or functions triggered by a button.'

@customElement('dropdown-menu-page')
export class DropdownMenuPage extends LitElement {
  @state() private _density = 'comfortable'

  static styles = css`
    :host { display: block; font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif); }
    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc, .note { color: hsl(var(--muted-foreground)); }
    .desc { margin-bottom: 1.5rem; }
    .note { font-size: 0.875rem; }
    .preview { border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1.5rem; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 0; border-bottom-left-radius: 0; border-bottom-right-radius: 0; min-height: 12rem; }
    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 34rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); vertical-align: top; }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }
    td code { font-size: 0.75rem; }
    shadcx-dropdown-menu-content.wide { --shadcx-dropdown-menu-width: 14rem; }
    .avatar { width: 2.25rem; height: 2.25rem; border-radius: 999px; border: 1px solid hsl(var(--border)); background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--muted-foreground))); color: hsl(var(--primary-foreground)); display: inline-grid; place-items: center; font-weight: 700; cursor: pointer; }
    @media (max-width: 640px) { h1 { font-size: 1.375rem; } h2 { font-size: 1.125rem; } .preview { padding: 1rem; } pre { padding: 0.75rem; font-size: 0.75rem; } }
  `

  private _onDensityChange(event: Event) {
    const customEvent = event as CustomEvent<{ value: string }>
    this._density = customEvent.detail.value
  }

  render() {
    return html`
      <h1>Dropdown Menu</h1>
      <p class="desc">Displays a menu of actions or functions triggered by a button.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/dropdown-menu.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="dropdown-menu.ts" .source=${dropdownMenuSource} .jsSource=${dropdownMenuJavaScriptSource}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-dropdown-menu&gt;
  &lt;shadcx-dropdown-menu-trigger&gt;
    &lt;shadcx-button variant="outline"&gt;Open&lt;/shadcx-button&gt;
  &lt;/shadcx-dropdown-menu-trigger&gt;
  &lt;shadcx-dropdown-menu-content&gt;
    &lt;shadcx-dropdown-menu-label&gt;My Account&lt;/shadcx-dropdown-menu-label&gt;
    &lt;shadcx-dropdown-menu-item&gt;Profile&lt;/shadcx-dropdown-menu-item&gt;
    &lt;shadcx-dropdown-menu-item&gt;Billing&lt;/shadcx-dropdown-menu-item&gt;
  &lt;/shadcx-dropdown-menu-content&gt;
&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Open</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-label>My Account</shadcx-dropdown-menu-label>
            <shadcx-dropdown-menu-item>Profile</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>Billing</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-item>Team</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>Subscription</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu&gt;...&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h3>Shortcuts and Icons</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Actions</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content class="wide">
            <shadcx-dropdown-menu-item>
              <svg data-icon viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              New File
              <shadcx-dropdown-menu-shortcut>N</shadcx-dropdown-menu-shortcut>
            </shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>
              <svg data-icon viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/></svg>
              Save
              <shadcx-dropdown-menu-shortcut>S</shadcx-dropdown-menu-shortcut>
            </shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item variant="destructive">Delete</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-item&gt;
  &lt;svg data-icon&gt;...&lt;/svg&gt;
  New File
  &lt;shadcx-dropdown-menu-shortcut&gt;N&lt;/shadcx-dropdown-menu-shortcut&gt;
&lt;/shadcx-dropdown-menu-item&gt;</code></pre>

      <h3>Checkboxes</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">View</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-checkbox-item checked>Show Toolbar</shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-checkbox-item>Show Sidebar</shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-checkbox-item checked>Show Status Bar</shadcx-dropdown-menu-checkbox-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-checkbox-item checked&gt;Show Toolbar&lt;/shadcx-dropdown-menu-checkbox-item&gt;</code></pre>

      <h3>Radio Group</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Density: ${this._density}</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-radio-group value=${this._density} @value-change=${this._onDensityChange}>
              <shadcx-dropdown-menu-radio-item value="compact">Compact</shadcx-dropdown-menu-radio-item>
              <shadcx-dropdown-menu-radio-item value="comfortable">Comfortable</shadcx-dropdown-menu-radio-item>
              <shadcx-dropdown-menu-radio-item value="spacious">Spacious</shadcx-dropdown-menu-radio-item>
            </shadcx-dropdown-menu-radio-group>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-radio-group value="comfortable"&gt;
  &lt;shadcx-dropdown-menu-radio-item value="compact"&gt;Compact&lt;/shadcx-dropdown-menu-radio-item&gt;
&lt;/shadcx-dropdown-menu-radio-group&gt;</code></pre>

      <h3>Submenu and Avatar</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><button class="avatar" type="button">DY</button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content align="end" class="wide">
            <shadcx-dropdown-menu-label>dobrinyonkov</shadcx-dropdown-menu-label>
            <shadcx-dropdown-menu-item>Account</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-sub>
              <shadcx-dropdown-menu-sub-trigger>Switch workspace</shadcx-dropdown-menu-sub-trigger>
              <shadcx-dropdown-menu-sub-content>
                <shadcx-dropdown-menu-item>Design</shadcx-dropdown-menu-item>
                <shadcx-dropdown-menu-item>Engineering</shadcx-dropdown-menu-item>
              </shadcx-dropdown-menu-sub-content>
            </shadcx-dropdown-menu-sub>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-item variant="destructive">Sign out</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-sub&gt;
  &lt;shadcx-dropdown-menu-sub-trigger&gt;Switch workspace&lt;/shadcx-dropdown-menu-sub-trigger&gt;
  &lt;shadcx-dropdown-menu-sub-content&gt;...&lt;/shadcx-dropdown-menu-sub-content&gt;
&lt;/shadcx-dropdown-menu-sub&gt;</code></pre>

      <p class="note">Current shadcx scope: uncontrolled/open attribute, labels, groups, separators, items, destructive items, checkbox items, radio groups, shortcuts, basic submenus, outside click, and Escape dismissal. Radix-only features such as portals, collision handling, modal focus trapping, full roving tabindex, and typeahead are not implemented in this first vanilla port.</p>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Element</th><th>Prop</th><th>Type / Default</th></tr></thead>
          <tbody>
            <tr><td><code>shadcx-dropdown-menu</code></td><td><code>open</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-content</code></td><td><code>align</code></td><td><code>"start" | "end"</code> / <code>"start"</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-item</code></td><td><code>variant</code></td><td><code>"default" | "destructive"</code> / <code>"default"</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-item</code></td><td><code>disabled</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-checkbox-item</code></td><td><code>checked</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-radio-group</code></td><td><code>value</code></td><td><code>string</code> / <code>""</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-radio-item</code></td><td><code>value</code></td><td><code>string</code> / <code>""</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Events</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Event</th><th>Element</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td><code>checked-change</code></td><td><code>shadcx-dropdown-menu-checkbox-item</code></td><td><code>{ checked: boolean }</code></td></tr>
            <tr><td><code>value-change</code></td><td><code>shadcx-dropdown-menu-radio-group</code></td><td><code>{ value: string }</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Part</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>root</code></td><td>The internal wrapper/control for each dropdown menu element.</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropdown-menu-page': DropdownMenuPage
  }
}
