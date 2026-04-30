import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('button-page')
export class ButtonPage extends LitElement {
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
  `

  render() {
    return html`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-button class="scx-button scx-outline"&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <button class="scx-button">Button</button>
      </div>
      <pre><code>&lt;shadcx-button&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <button class="scx-button" >Default</button>
        <button class="scx-button scx-destructive">Destructive</button>
        <button class="scx-button scx-outline">Outline</button>
        <button class="scx-button scx-secondary">Secondary</button>
        <button class="scx-button scx-ghost">Ghost</button>
        <button class="scx-button scx-link">Link</button>
      </div>
      <pre><code>&lt;shadcx-button &gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-destructive"&gt;Destructive&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-outline"&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-secondary"&gt;Secondary&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-ghost"&gt;Ghost&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-link"&gt;Link&lt;/shadcx-button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <button class="scx-button scx-xs">Extra Small</button>
        <button class="scx-button scx-sm">Small</button>
        <button class="scx-button" >Default</button>
        <button class="scx-button scx-lg">Large</button>
      </div>
      <pre><code>&lt;shadcx-button class="scx-button scx-xs"&gt;Extra Small&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-sm"&gt;Small&lt;/shadcx-button&gt;
&lt;shadcx-button &gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-lg"&gt;Large&lt;/shadcx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <button class="scx-button scx-icon scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-xs scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-sm scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-lg scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <pre><code>&lt;shadcx-button class="scx-button scx-icon scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-xs scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-sm scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-lg scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <button class="scx-button" disabled>Primary</button>
        <button class="scx-button scx-outline" disabled>Outline</button>
        <button class="scx-button scx-ghost" disabled>Ghost</button>
      </div>
      <pre><code>&lt;shadcx-button disabled&gt;Primary&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-outline" disabled&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-ghost" disabled&gt;Ghost&lt;/shadcx-button&gt;</code></pre>

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
              <td><code>variant</code></td>
              <td><code>"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</code></td>
              <td><code>"default"</code></td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"</code></td>
              <td><code>"default"</code></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>root</code></td>
              <td>The <code>&lt;button&gt;</code> element</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-page': ButtonPage
  }
}
