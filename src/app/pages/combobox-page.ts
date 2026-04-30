import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']

@customElement('combobox-page')
export class ComboboxPage extends LitElement {
  @state() private _singleValue = ''
  @state() private _multipleValues: string[] = []

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.65;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 0.8125rem;
    }

    .state {
      margin-top: 0.75rem;
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 28rem;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }
  `

  private _onSingleValueChange(event: Event) {
    const customEvent = event as CustomEvent<{ value: string }>
    this._singleValue = customEvent.detail.value
  }

  private _onMultipleValueChange(event: Event) {
    const customEvent = event as CustomEvent<{ value: string[] }>
    this._multipleValues = customEvent.detail.value
  }

  render() {
    return html`
      <h1>Combobox</h1>
      <p class="desc">
        Autocomplete input with suggestion filtering, keyboard navigation, clear
        behavior, and optional multi-select chips.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <p>
        In shadcx, list rendering is handled internally by
        <code>&lt;shadcx-combobox&gt;</code>, so there is no separate
        <code>ComboboxItem</code> component to compose.
      </p>
      <pre><code>&lt;shadcx-combobox id="framework-combobox" placeholder="Select a framework"&gt;&lt;/shadcx-combobox&gt;
&lt;script type="module"&gt;
  const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]
  const combobox = document.getElementById("framework-combobox")
  combobox.items = frameworks
&lt;/script&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <input list="frameworks" class="scx-combobox"
          .items=${frameworks}
          placeholder="Select a framework"
          show-clear
          auto-highlight
          .value=${this._singleValue}
          @value-change=${this._onSingleValueChange}
        >
        <div class="state">Value: ${this._singleValue || '(none)'}</div>
      </div>
      <pre><code>&lt;shadcx-combobox
  id="framework-single"
  placeholder="Select a framework"
  show-clear
  auto-highlight
&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h3>Multiple</h3>
      <div class="preview">
        <input list="frameworks" class="scx-combobox"
          .items=${frameworks}
          multiple
          show-clear
          auto-highlight
          placeholder="Add framework"
          .values=${this._multipleValues}
          @value-change=${this._onMultipleValueChange}
        >
        <div class="state">Values: ${this._multipleValues.length > 0 ? this._multipleValues.join(', ') : '(none)'}</div>
      </div>
      <pre><code>&lt;shadcx-combobox
  id="framework-multiple"
  multiple
  show-clear
  auto-highlight
  placeholder="Add framework"
&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h3>Disabled + Invalid</h3>
      <div class="preview">
        <input list="frameworks" class="scx-combobox" .items=${frameworks} disabled placeholder="Disabled">
        <br><br>
        <input list="frameworks" class="scx-combobox" .items=${frameworks} aria-invalid="true" placeholder="Required framework">
      </div>
      <pre><code>&lt;shadcx-combobox disabled&gt;&lt;/shadcx-combobox&gt;
&lt;shadcx-combobox aria-invalid="true"&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>items</code></td><td><code>string[]</code></td><td><code>[]</code></td></tr>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>"Select an option"</code></td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>values</code></td><td><code>string[]</code></td><td><code>[]</code></td></tr>
            <tr><td><code>multiple</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>show-clear</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>auto-highlight</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>string | null</code></td><td><code>null</code></td></tr>
          </tbody>
        </table>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Detail</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>value-change</code></td>
              <td><code>{ value: string | string[] }</code></td>
              <td>Fires whenever selected value(s) change.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'combobox-page': ComboboxPage
  }
}
