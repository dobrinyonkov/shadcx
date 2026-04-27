import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('button-page')
export class ButtonPage extends LitElement {
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
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-button variant="outline"&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <shadcx-button variant="default">Default</shadcx-button>
        <shadcx-button variant="outline">Outline</shadcx-button>
        <shadcx-button variant="ghost">Ghost</shadcx-button>
        <shadcx-button variant="destructive">Destructive</shadcx-button>
        <shadcx-button variant="secondary">Secondary</shadcx-button>
        <shadcx-button variant="link">Link</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button variant="default"&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline"&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button variant="ghost"&gt;Ghost&lt;/shadcx-button&gt;
&lt;shadcx-button variant="destructive"&gt;Destructive&lt;/shadcx-button&gt;
&lt;shadcx-button variant="secondary"&gt;Secondary&lt;/shadcx-button&gt;
&lt;shadcx-button variant="link"&gt;Link&lt;/shadcx-button&gt;</code></pre>

      <h3>Size</h3>
      <p>
        Use the <code>size</code> prop to change the size of the button.
      </p>
      <div class="preview">
        <shadcx-button size="xs">Extra Small</shadcx-button>
        <shadcx-button size="sm">Small</shadcx-button>
        <shadcx-button size="default">Default</shadcx-button>
        <shadcx-button size="lg">Large</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button size="xs"&gt;Extra Small&lt;/shadcx-button&gt;
&lt;shadcx-button size="sm"&gt;Small&lt;/shadcx-button&gt;
&lt;shadcx-button size="default"&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button size="lg"&gt;Large&lt;/shadcx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <shadcx-button size="icon-xs">?</shadcx-button>
        <shadcx-button size="icon-sm">?</shadcx-button>
        <shadcx-button size="icon">?</shadcx-button>
        <shadcx-button size="icon-lg">?</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button size="icon"&gt;&lt;svg ... /&gt;&lt;/shadcx-button&gt;
&lt;shadcx-button size="icon-sm"&gt;+&lt;/shadcx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-button variant="default" disabled>Default</shadcx-button>
        <shadcx-button variant="outline" disabled>Outline</shadcx-button>
        <shadcx-button variant="ghost" disabled>Ghost</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button variant="default" disabled&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline" disabled&gt;Outline&lt;/shadcx-button&gt;</code></pre>

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
            <td>variant</td>
            <td>"default" | "outline" | "ghost" | "destructive" | "secondary" | "link"</td>
            <td>"default"</td>
          </tr>
          <tr>
            <td>size</td>
            <td>"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"</td>
            <td>"default"</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>false</td>
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
            <td>The button element</td>
          </tr>
        </tbody>
      </table>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-page': ButtonPage
  }
}
