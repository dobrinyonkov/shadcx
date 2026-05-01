import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'

@customElement('checkbox-page')
export class CheckboxPage extends LitElement {
  @state() private _checked = false

  static styles = [componentStyles, css`
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

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
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

    td code {
      font-size: 0.75rem;
    }

    .row {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .label {
      font-size: 0.875rem;
      color: hsl(var(--foreground));
    }

    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]

  private _onCheckedChange(event: Event) {
    const checkbox = event.currentTarget as HTMLInputElement
    this._checked = checkbox.checked
  }

  render() {
    return html`
      <h1>Checkbox</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and unchecked
        states, with support for indeterminate and invalid states.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input type="checkbox"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox">
          <span class="label">Accept terms and conditions</span>
        </label>
      </div>
      <pre><code>&lt;label style="display: inline-flex; align-items: center; gap: 0.5rem;"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span&gt;Accept terms and conditions&lt;/span&gt;
&lt;/label&gt;</code></pre>

      <h3>Checked + Controlled</h3>
      <div class="preview">
        <label class="row">
          <input
            type="checkbox"
            .checked=${this._checked}
            @change=${(event: Event) => this._onCheckedChange(event)}
          >
          <span class="label">Enable notifications</span>
        </label>
        <span class="muted">State: ${this._checked ? 'checked' : 'unchecked'}</span>
      </div>
      <pre><code>&lt;input type="checkbox" checked&gt;
&lt;script&gt;
  checkbox.addEventListener('change', (event) =&gt; {
    console.log(event.currentTarget.checked)
  })
&lt;/script&gt;</code></pre>

      <h3>Indeterminate</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" .indeterminate=${true} aria-checked="mixed">
          <span class="label">Partially selected</span>
        </label>
      </div>
      <pre><code>&lt;input id="partial" type="checkbox" aria-checked="mixed"&gt;
&lt;script&gt;
  document.getElementById('partial').indeterminate = true
&lt;/script&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" disabled>
          <span class="label">Disabled option</span>
        </label>
      </div>
      <pre><code>&lt;input type="checkbox" disabled&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" aria-invalid="true">
          <span class="label">Required field</span>
        </label>
      </div>
      <pre><code>&lt;input type="checkbox" aria-invalid="true"&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>State / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>checked</code></td>
              <td>Native property / attribute</td>
              <td>Applies checked visual state.</td>
            </tr>
            <tr>
              <td><code>indeterminate</code></td>
              <td>Native property</td>
              <td>Applies mixed visual state via <code>:indeterminate</code>.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity and cursor.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and invalid ring.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'checkbox-page': CheckboxPage
  }
}
