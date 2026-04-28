import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../lib/textarea.ts'
import '../../lib/button.ts'

@customElement('textarea-page')
export class TextareaPage extends LitElement {
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
      flex-direction: column;
      align-items: flex-start;
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
      width: 100%;
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

    shadcx-textarea {
      width: min(100%, 28rem);
    }

    .field {
      width: min(100%, 28rem);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .field-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: hsl(var(--foreground));
    }

    .field-description {
      margin: 0;
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
    }

    .field[data-disabled] {
      opacity: 0.75;
    }

    .field[data-invalid] .field-label,
    .field[data-invalid] .field-description {
      color: hsl(var(--destructive));
    }

    .inline-row {
      width: min(100%, 28rem);
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }

    .inline-row shadcx-button {
      align-self: flex-end;
    }
  `

  render() {
    return html`
      <h1>Textarea</h1>
      <p class="desc">Displays a form textarea or a component that looks like a textarea.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-textarea&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-textarea placeholder="Type your message here."></shadcx-textarea>
      </div>
      <pre><code>&lt;shadcx-textarea placeholder="Type your message here."&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <p class="field-label">Your feedback</p>
          <shadcx-textarea placeholder="Tell us what you think."></shadcx-textarea>
          <p class="field-description">Please include as much detail as possible.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field"&gt;
  &lt;p class="field-label"&gt;Your feedback&lt;/p&gt;
  &lt;shadcx-textarea placeholder="Tell us what you think."&gt;&lt;/shadcx-textarea&gt;
  &lt;p class="field-description"&gt;Please include as much detail as possible.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <p class="field-label">Project notes</p>
          <shadcx-textarea placeholder="Disabled" disabled></shadcx-textarea>
          <p class="field-description">This field is read-only for your role.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-disabled&gt;
  &lt;p class="field-label"&gt;Project notes&lt;/p&gt;
  &lt;shadcx-textarea disabled&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <p class="field-label">Bio</p>
          <shadcx-textarea aria-invalid="true" placeholder="At least 20 characters"></shadcx-textarea>
          <p class="field-description">Your bio must be at least 20 characters long.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-invalid&gt;
  &lt;p class="field-label"&gt;Bio&lt;/p&gt;
  &lt;shadcx-textarea aria-invalid="true"&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Button</h3>
      <div class="preview">
        <div class="inline-row">
          <shadcx-textarea placeholder="Write a comment..."></shadcx-textarea>
          <shadcx-button>Submit</shadcx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; flex-direction: column; gap: 0.5rem;"&gt;
  &lt;shadcx-textarea placeholder="Write a comment..."&gt;&lt;/shadcx-textarea&gt;
  &lt;shadcx-button&gt;Submit&lt;/shadcx-button&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>name</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>rows</code></td><td><code>number</code></td><td><code>4</code></td></tr>
            <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>string</code></td><td><code>—</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Part</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>root</code></td><td>The <code>&lt;textarea&gt;</code> element.</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'textarea-page': TextareaPage
  }
}
