import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'
import '../../components/scx-button.ts'

@customElement('button-page')
export class ButtonPage extends LitElement {
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
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-button.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-button variant="outline"&gt;Button&lt;/scx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-button>Button</scx-button>
      </div>
      <pre><code>&lt;scx-button&gt;Button&lt;/scx-button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <scx-button>Default</scx-button>
        <scx-button variant="destructive">Destructive</scx-button>
        <scx-button variant="outline">Outline</scx-button>
        <scx-button variant="secondary">Secondary</scx-button>
        <scx-button variant="ghost">Ghost</scx-button>
        <scx-button variant="link">Link</scx-button>
      </div>
      <pre><code>&lt;scx-button&gt;Default&lt;/scx-button&gt;
&lt;scx-button variant="destructive"&gt;Destructive&lt;/scx-button&gt;
&lt;scx-button variant="outline"&gt;Outline&lt;/scx-button&gt;
&lt;scx-button variant="secondary"&gt;Secondary&lt;/scx-button&gt;
&lt;scx-button variant="ghost"&gt;Ghost&lt;/scx-button&gt;
&lt;scx-button variant="link"&gt;Link&lt;/scx-button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <scx-button size="xs">Extra Small</scx-button>
        <scx-button size="sm">Small</scx-button>
        <scx-button>Default</scx-button>
        <scx-button size="lg">Large</scx-button>
      </div>
      <pre><code>&lt;scx-button size="xs"&gt;Extra Small&lt;/scx-button&gt;
&lt;scx-button size="sm"&gt;Small&lt;/scx-button&gt;
&lt;scx-button&gt;Default&lt;/scx-button&gt;
&lt;scx-button size="lg"&gt;Large&lt;/scx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <scx-button size="icon" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-xs" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-sm" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-lg" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
      </div>
      <pre><code>&lt;scx-button size="icon" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-xs" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-sm" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-lg" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <scx-button disabled>Primary</scx-button>
        <scx-button variant="outline" disabled>Outline</scx-button>
        <scx-button variant="ghost" disabled>Ghost</scx-button>
      </div>
      <pre><code>&lt;scx-button disabled&gt;Primary&lt;/scx-button&gt;
&lt;scx-button variant="outline" disabled&gt;Outline&lt;/scx-button&gt;
&lt;scx-button variant="ghost" disabled&gt;Ghost&lt;/scx-button&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>destructive | outline | secondary | ghost | link</code></td>
              <td>Visual variants. No attribute is the default button.</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>xs | sm | lg | icon | icon-xs | icon-sm | icon-lg</code></td>
              <td>Size presets. No size attribute is the default size.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean attribute</code></td>
              <td>Disabled state.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>States</h3>
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
              <td><code>:hover</code>, <code>:focus-visible</code>, <code>:disabled</code>, <code>[aria-invalid="true"]</code></td>
              <td>Native and ARIA states are styled directly by CSS inside the shadow DOM.</td>
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
