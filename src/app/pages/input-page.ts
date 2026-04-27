import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('input-page')
export class InputPage extends LitElement {
  static styles = css`
    :host {
      display: block;
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
      flex-direction: column;
      gap: 0.75rem;
      max-width: 24rem;
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
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
      font-size: 0.8125rem;
    }

    table {
      width: 100%;
      font-size: 0.875rem;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
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
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
      font-family: inherit;
    }
  `

  render() {
    return html`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-input /&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-input placeholder="Placeholder text..."></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Placeholder text..."&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-input disabled placeholder="Disabled input..."></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input disabled placeholder="Disabled input..."&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>File</h3>
      <p>
        Use the <code>type="file"</code> prop to create a file input.
      </p>
      <div class="preview">
        <shadcx-input type="file"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input type="file"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h2>API Reference</h2>
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
            <td>type</td>
            <td>string</td>
            <td>"text"</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>""</td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>""</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>""</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>required</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h3>Events</h3>
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
            <td>shadcx-input</td>
            <td>{ value: string }</td>
            <td>Fires on every input change</td>
          </tr>
        </tbody>
      </table>

      <h3>CSS Parts</h3>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>root</td>
            <td>The input element</td>
          </tr>
        </tbody>
      </table>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'input-page': InputPage
  }
}
