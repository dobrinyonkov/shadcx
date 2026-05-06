import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../lib/textarea.ts'
import '../../lib/button.ts'
import '../source-code-block.ts'
import textareaSource from '../../lib/textarea.ts?raw'
import textareaJavaScriptSource from '../../lib/textarea.ts?source-js'

export const description = 'Displays a form textarea or a component that looks like a textarea.'

@customElement('textarea-page')
export class TextareaPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc { color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }

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

    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 24rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }
    td code { font-size: 0.75rem; }

    .field {
      display: grid;
      gap: 0.375rem;
      width: min(100%, 20rem);
    }

    .field label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
    }

    .field .help {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.45;
      margin: 0;
    }

    .field[data-disabled] label,
    .field[data-disabled] .help {
      opacity: 0.5;
    }

    .field[data-invalid] label,
    .field[data-invalid] .help {
      color: hsl(var(--destructive));
    }

    .stack {
      display: grid;
      gap: 0.5rem;
      width: min(100%, 20rem);
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
    }
  `

  render() {
    return html`
      <h1>Textarea</h1>
      <p class="desc">Displays a form textarea or a component that looks like a textarea.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/textarea.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="textarea.ts" .source=${textareaSource} .jsSource=${textareaJavaScriptSource}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-textarea placeholder="Type your message here."&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-textarea placeholder="Type your message here."></shadcx-textarea>
      </div>
      <pre><code>&lt;shadcx-textarea placeholder="Type your message here."&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <label for="message">Message</label>
          <shadcx-textarea id="message" placeholder="Tell us what you need help with."></shadcx-textarea>
          <p class="help">Your message will be sent to the support team.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field"&gt;
  &lt;label for="message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="message" placeholder="Tell us what you need help with."&gt;&lt;/shadcx-textarea&gt;
  &lt;p&gt;Your message will be sent to the support team.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <label for="disabled-message">Message</label>
          <shadcx-textarea id="disabled-message" placeholder="Disabled textarea" disabled></shadcx-textarea>
          <p class="help">This field is currently unavailable.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-disabled&gt;
  &lt;label for="disabled-message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="disabled-message" disabled&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <label for="invalid-message">Message</label>
          <shadcx-textarea id="invalid-message" placeholder="Type at least 10 characters." aria-invalid="true"></shadcx-textarea>
          <p class="help">Message must be at least 10 characters.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-invalid&gt;
  &lt;label for="invalid-message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="invalid-message" aria-invalid="true"&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="stack">
          <shadcx-textarea placeholder="Write a comment..."></shadcx-textarea>
          <shadcx-button>Submit</shadcx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: grid; gap: 0.5rem;"&gt;
  &lt;shadcx-textarea placeholder="Write a comment..."&gt;&lt;/shadcx-textarea&gt;
  &lt;shadcx-button&gt;Submit&lt;/shadcx-button&gt;
&lt;/div&gt;</code></pre>

      <h3>RTL</h3>
      <div class="preview" dir="rtl">
        <shadcx-textarea placeholder="اكتب رسالتك هنا"></shadcx-textarea>
      </div>
      <pre><code>&lt;div dir="rtl"&gt;
  &lt;shadcx-textarea placeholder="اكتب رسالتك هنا"&gt;&lt;/shadcx-textarea&gt;
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
            <tr><td><code>rows</code></td><td><code>string</code></td><td><code>"3"</code></td></tr>
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
            <tr><td><code>root</code></td><td>The <code>&lt;textarea&gt;</code> element</td></tr>
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
