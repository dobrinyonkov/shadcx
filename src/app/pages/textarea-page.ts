import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'
import '../../components/scx-textarea.ts'
import '../../components/scx-button.ts'

@customElement('textarea-page')
export class TextareaPage extends LitElement {
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
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview > scx-textarea,
    .preview > .field,
    .preview > .stack,
    .preview > .rtl-box {
      max-width: 20rem;
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

    .field,
    .stack,
    .rtl-box {
      display: grid;
      gap: 0.5rem;
      width: 100%;
      min-width: 0;
    }

    .field label,
    .rtl-box label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.35;
    }

    .field small {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .field[data-disabled] label,
    .field[data-disabled] small {
      opacity: 0.5;
    }

    .field[data-invalid] label,
    .field[data-invalid] small {
      color: hsl(var(--destructive));
    }

    .stack {
      justify-items: start;
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
      <h1>Textarea</h1>
      <p class="desc">
        Displays a form textarea or a component that looks like a textarea.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-textarea.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-textarea placeholder="Type your message here."></scx-textarea>
      </div>
      <pre><code>&lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <label for="textarea-message">Message</label>
          <scx-textarea id="textarea-message" placeholder="Type your message here." rows="6"></scx-textarea>
          <small>Enter your message below.</small>
        </div>
      </div>
      <pre><code>&lt;label for="textarea-message"&gt;Message&lt;/label&gt;
&lt;scx-textarea id="textarea-message" placeholder="Type your message here." rows="6"&gt;&lt;/scx-textarea&gt;
&lt;small&gt;Enter your message below.&lt;/small&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <label for="textarea-disabled">Message</label>
          <scx-textarea id="textarea-disabled" placeholder="Type your message here." disabled></scx-textarea>
        </div>
      </div>
      <pre><code>&lt;div data-disabled&gt;
  &lt;label for="textarea-disabled"&gt;Message&lt;/label&gt;
  &lt;scx-textarea id="textarea-disabled" placeholder="Type your message here." disabled&gt;&lt;/scx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <label for="textarea-invalid">Message</label>
          <scx-textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"></scx-textarea>
          <small>Please enter a valid message.</small>
        </div>
      </div>
      <pre><code>&lt;div data-invalid&gt;
  &lt;label for="textarea-invalid"&gt;Message&lt;/label&gt;
  &lt;scx-textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"&gt;&lt;/scx-textarea&gt;
  &lt;small&gt;Please enter a valid message.&lt;/small&gt;
&lt;/div&gt;</code></pre>

      <h3>Button</h3>
      <div class="preview">
        <div class="stack">
          <scx-textarea placeholder="Type your message here."></scx-textarea>
          <scx-button>Send message</scx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: grid; gap: 0.5rem;"&gt;
  &lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;
  &lt;scx-button&gt;Send message&lt;/scx-button&gt;
&lt;/div&gt;</code></pre>

      <h3>RTL</h3>
      <div class="preview">
        <div class="rtl-box" dir="rtl">
          <label for="textarea-rtl">التعليقات</label>
          <scx-textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."></scx-textarea>
        </div>
      </div>
      <pre><code>&lt;div dir="rtl"&gt;
  &lt;label for="textarea-rtl"&gt;التعليقات&lt;/label&gt;
  &lt;scx-textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."&gt;&lt;/scx-textarea&gt;
&lt;/div&gt;</code></pre>

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
              <td><code>placeholder</code></td>
              <td>Native attribute</td>
              <td>Placeholder text uses <code>--muted-foreground</code>.</td>
            </tr>
            <tr>
              <td><code>rows</code></td>
              <td>Native attribute</td>
              <td>Controls the visible line count while preserving the component styles.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity, cursor, and input-token background.</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>Boolean attribute</td>
              <td>Native read-only behavior remains unchanged.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and ring styles.</td>
            </tr>
            <tr>
              <td><code>dir</code></td>
              <td><code>rtl | ltr</code></td>
              <td>Uses browser text direction and logical padding for RTL layouts.</td>
            </tr>
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
