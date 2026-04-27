import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/select.ts'

@customElement('select-page')
export class SelectPage extends LitElement {
  @state() private _theme = 'system'

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
      font-size: 0.9375rem;
      line-height: 1.65;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
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
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
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

    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
    }
  `

  private _onThemeChange(event: CustomEvent<{ value: string }>) {
    this._theme = event.detail.value
  }

  render() {
    return html`
      <h1>Select</h1>
      <p class="desc">
        Displays a list of options for the user to pick from, triggered by a
        button and styled with shadcn-compatible design tokens.
      </p>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-select placeholder="Theme"&gt;
  &lt;shadcx-select-item value="light"&gt;Light&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="dark"&gt;Dark&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="system"&gt;System&lt;/shadcx-select-item&gt;
&lt;/shadcx-select&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-select
          placeholder="Theme"
          .value=${this._theme}
          @value-change=${this._onThemeChange}
        >
          <shadcx-select-item value="light">Light</shadcx-select-item>
          <shadcx-select-item value="dark">Dark</shadcx-select-item>
          <shadcx-select-item value="system">System</shadcx-select-item>
        </shadcx-select>
        <span class="muted">Selected: ${this._theme}</span>
      </div>
      <pre><code>&lt;shadcx-select placeholder="Theme" value="system"&gt;
  &lt;shadcx-select-item value="light"&gt;Light&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="dark"&gt;Dark&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="system"&gt;System&lt;/shadcx-select-item&gt;
&lt;/shadcx-select&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-select placeholder="Select fruit" disabled>
          <shadcx-select-item value="apple">Apple</shadcx-select-item>
          <shadcx-select-item value="orange">Orange</shadcx-select-item>
        </shadcx-select>
      </div>
      <pre><code>&lt;shadcx-select placeholder="Select fruit" disabled&gt;
  &lt;shadcx-select-item value="apple"&gt;Apple&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="orange"&gt;Orange&lt;/shadcx-select-item&gt;
&lt;/shadcx-select&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <shadcx-select placeholder="Pick one" aria-invalid="true">
          <shadcx-select-item value="a">Option A</shadcx-select-item>
          <shadcx-select-item value="b">Option B</shadcx-select-item>
        </shadcx-select>
      </div>
      <pre><code>&lt;shadcx-select placeholder="Pick one" aria-invalid="true"&gt;
  &lt;shadcx-select-item value="a"&gt;Option A&lt;/shadcx-select-item&gt;
  &lt;shadcx-select-item value="b"&gt;Option B&lt;/shadcx-select-item&gt;
&lt;/shadcx-select&gt;</code></pre>

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
            <tr>
              <td><code>placeholder</code></td>
              <td><code>string</code></td>
              <td><code>"Select an option"</code></td>
            </tr>
            <tr>
              <td><code>value</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>string | null</code></td>
              <td><code>null</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'select-page': SelectPage
  }
}
