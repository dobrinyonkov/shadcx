import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'

@customElement('input-page')
export class InputPage extends LitElement {
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

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
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

    .inline-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
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

  render() {
    return html`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input placeholder="Enter text"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <input placeholder="Enter text">
      </div>
      <pre><code>&lt;input placeholder="Enter text"&gt;</code></pre>

      <h3>Types</h3>
      <div class="preview">
        <input type="text" placeholder="Text">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="search" placeholder="Search">
      </div>
      <pre><code>&lt;input type="text" placeholder="Text"&gt;
&lt;input type="email" placeholder="Email"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="search" placeholder="Search"&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <input placeholder="Disabled" disabled>
      </div>
      <pre><code>&lt;input placeholder="Disabled" disabled&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <input placeholder="Error" aria-invalid="true">
      </div>
      <pre><code>&lt;input placeholder="Error" aria-invalid="true"&gt;</code></pre>

      <h3>File</h3>
      <div class="preview">
        <input type="file">
      </div>
      <pre><code>&lt;input type="file"&gt;</code></pre>

      <h3>Required</h3>
      <div class="preview">
        <input placeholder="Required field" required>
      </div>
      <pre><code>&lt;input placeholder="Required field" required&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="inline-row">
          <input type="search" placeholder="Search...">
          <button class="scx-outline">Search</button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; gap: 0.5rem;"&gt;
  &lt;input type="search" placeholder="Search..."&gt;
  &lt;button class="scx-outline"&gt;Search&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type</code></td>
              <td>Native input types</td>
              <td>Text-like input styling, including file inputs.</td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td>Native attribute</td>
              <td>Placeholder text uses <code>--muted-foreground</code>.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity and cursor.</td>
            </tr>
            <tr>
              <td><code>required</code></td>
              <td>Boolean attribute</td>
              <td>Native form validation remains unchanged.</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>Boolean attribute</td>
              <td>Native read-only behavior remains unchanged.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and invalid ring.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Styled Elements</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>input</code>, <code>textarea</code></td>
              <td>Text-like controls are styled directly. Checkboxes have their own styles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'input-page': InputPage
  }
}
