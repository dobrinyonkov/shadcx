import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'
import '../../components/scx-badge.ts'

@customElement('badge-page')
export class BadgePage extends LitElement {
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

    a.inline-link {
      color: hsl(var(--primary));
      text-decoration: none;
    }

    a.inline-link:hover {
      text-decoration: underline;
    }

    .spinner {
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 9999px;
      animation: spin 0.8s linear infinite;
      display: inline-block;
    }

    scx-badge.success::part(badge) {
      background-color: hsl(142 71% 45% / 0.15);
      border-color: hsl(142 71% 45% / 0.35);
      color: hsl(142 84% 25%);
    }

    :host-context(.dark) scx-badge.success::part(badge) {
      background-color: hsl(142 70% 35% / 0.25);
      border-color: hsl(142 70% 45% / 0.45);
      color: hsl(142 100% 85%);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
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
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>import './scx-badge.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-badge&gt;Badge&lt;/scx-badge&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <scx-badge>Default</scx-badge>
        <scx-badge variant="secondary">Secondary</scx-badge>
        <scx-badge variant="destructive">Destructive</scx-badge>
        <scx-badge variant="outline">Outline</scx-badge>
        <scx-badge variant="ghost">Ghost</scx-badge>
        <scx-badge variant="link">Link</scx-badge>
      </div>
      <pre><code>&lt;scx-badge&gt;Default&lt;/scx-badge&gt;
&lt;scx-badge variant="secondary"&gt;Secondary&lt;/scx-badge&gt;
&lt;scx-badge variant="destructive"&gt;Destructive&lt;/scx-badge&gt;
&lt;scx-badge variant="outline"&gt;Outline&lt;/scx-badge&gt;
&lt;scx-badge variant="ghost"&gt;Ghost&lt;/scx-badge&gt;
&lt;scx-badge variant="link"&gt;Link&lt;/scx-badge&gt;</code></pre>

      <h3>With Icon</h3>
      <div class="preview">
        <scx-badge>
          <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          Verified
        </scx-badge>
        <scx-badge variant="outline">
          New
          <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </scx-badge>
      </div>
      <pre><code>&lt;scx-badge&gt;
  &lt;svg data-icon="inline-start" ...&gt;&lt;/svg&gt;
  Verified
&lt;/scx-badge&gt;</code></pre>

      <h3>With Spinner</h3>
      <div class="preview">
        <scx-badge variant="secondary">
          <span data-icon="inline-start" class="spinner"></span>
          Syncing
        </scx-badge>
      </div>
      <pre><code>&lt;scx-badge variant="secondary"&gt;
  &lt;span data-icon="inline-start" class="spinner"&gt;&lt;/span&gt;
  Syncing
&lt;/scx-badge&gt;</code></pre>

      <h3>Link</h3>
      <div class="preview">
        <a class="inline-link" href="https://example.com" target="_blank" rel="noreferrer">
          <scx-badge variant="link">Read docs</scx-badge>
        </a>
      </div>
      <pre><code>&lt;a href="https://example.com"&gt;
  &lt;scx-badge variant="link"&gt;Read docs&lt;/scx-badge&gt;
&lt;/a&gt;</code></pre>

      <h3>Custom Colors</h3>
      <div class="preview">
        <scx-badge class="success">Success</scx-badge>
      </div>
      <pre><code>scx-badge.success::part(badge) {
  background-color: hsl(142 71% 45% / 0.15);
  border-color: hsl(142 71% 45% / 0.35);
  color: hsl(142 84% 25%);
}</code></pre>

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
              <td><code>secondary | destructive | outline | ghost | link</code></td>
              <td>Badge variants. No attribute is the default badge.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Customization</h3>
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
              <td><code>scx-badge.your-class::part(badge)</code></td>
              <td>Override colors, borders, radius, or spacing directly with CSS variables or standard CSS.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'badge-page': BadgePage
  }
}
