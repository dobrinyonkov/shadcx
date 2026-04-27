import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../lib/popover.ts'

@customElement('popover-page')
export class PopoverPage extends LitElement {
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
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      min-height: 10rem;
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

    .form-row {
      display: grid;
      gap: 0.25rem;
    }

    .form-label {
      font-size: 0.8125rem;
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    .form-input {
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font: inherit;
      font-size: 0.8125rem;
      height: 2rem;
      padding-inline: 0.5rem;
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
      <h1>Popover</h1>
      <p class="desc">
        Displays rich content in a floating panel, triggered by a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-popover&gt;
  &lt;shadcx-popover-trigger&gt;Open Popover&lt;/shadcx-popover-trigger&gt;
  &lt;shadcx-popover-content&gt;
    &lt;shadcx-popover-header&gt;
      &lt;shadcx-popover-title&gt;Title&lt;/shadcx-popover-title&gt;
      &lt;shadcx-popover-description&gt;Description text here.&lt;/shadcx-popover-description&gt;
    &lt;/shadcx-popover-header&gt;
  &lt;/shadcx-popover-content&gt;
&lt;/shadcx-popover&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Open Popover</shadcx-popover-trigger>
          <shadcx-popover-content>
            <shadcx-popover-header>
              <shadcx-popover-title>Dimensions</shadcx-popover-title>
              <shadcx-popover-description>
                Set dimensions for the layer and save when you're done.
              </shadcx-popover-description>
            </shadcx-popover-header>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover&gt;
  &lt;shadcx-popover-trigger&gt;Open Popover&lt;/shadcx-popover-trigger&gt;
  &lt;shadcx-popover-content&gt;...&lt;/shadcx-popover-content&gt;
&lt;/shadcx-popover&gt;</code></pre>

      <h3>Align</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Start</shadcx-popover-trigger>
          <shadcx-popover-content align="start">
            <shadcx-popover-description>Aligned to the start edge.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>

        <shadcx-popover>
          <shadcx-popover-trigger>Center</shadcx-popover-trigger>
          <shadcx-popover-content align="center">
            <shadcx-popover-description>Centered relative to trigger.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>

        <shadcx-popover>
          <shadcx-popover-trigger>End</shadcx-popover-trigger>
          <shadcx-popover-content align="end">
            <shadcx-popover-description>Aligned to the end edge.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover-content align="start|center|end"&gt;...&lt;/shadcx-popover-content&gt;</code></pre>

      <h3>With Form</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Edit Profile</shadcx-popover-trigger>
          <shadcx-popover-content align="start" side-offset="8">
            <shadcx-popover-header>
              <shadcx-popover-title>Edit profile</shadcx-popover-title>
              <shadcx-popover-description>Make changes and close with Escape.</shadcx-popover-description>
            </shadcx-popover-header>
            <div class="form-row">
              <label class="form-label" for="popover-name">Name</label>
              <input class="form-input" id="popover-name" value="shadcx user" />
            </div>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover-content side-offset="8"&gt;
  &lt;!-- content --&gt;
&lt;/shadcx-popover-content&gt;</code></pre>

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
              <td><code>open</code> (on <code>shadcx-popover</code>)</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>align</code> (on <code>shadcx-popover-content</code>)</td>
              <td><code>"start" | "center" | "end"</code></td>
              <td><code>"center"</code></td>
            </tr>
            <tr>
              <td><code>side-offset</code> (on <code>shadcx-popover-content</code>)</td>
              <td><code>number</code></td>
              <td><code>4</code></td>
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
              <td><code>root</code> on <code>shadcx-popover-trigger</code></td>
              <td>The trigger button element.</td>
            </tr>
            <tr>
              <td><code>root</code> on <code>shadcx-popover-content</code></td>
              <td>The floating content container.</td>
            </tr>
            <tr>
              <td><code>root</code> on header/title/description</td>
              <td>Typography wrapper elements inside content.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'popover-page': PopoverPage
  }
}
