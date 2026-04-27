import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/switch.ts'

@customElement('switch-page')
export class SwitchPage extends LitElement {
  @state() private _checked = false

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

    .row {
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
    }

    .label {
      font-size: 0.875rem;
      color: hsl(var(--foreground));
    }

    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
    }

    .card {
      width: 100%;
      max-width: 24rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 0.875rem;
      cursor: pointer;
      user-select: none;
    }

    .card:hover {
      background-color: hsl(var(--muted) / 0.5);
    }

    .card[data-disabled='true'] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .table-wrap {
      overflow-x: auto;
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

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }
  `

  private _onCheckedChange(event: Event) {
    const target = event.currentTarget as HTMLElement & { checked?: boolean }
    this._checked = Boolean(target.checked)
  }

  private _onCardClick(event: Event) {
    const target = event.currentTarget as HTMLElement
    const control = target.querySelector('shadcx-switch') as HTMLElement & { click(): void; disabled?: boolean }
    if (!control?.disabled) {
      control.click()
    }
  }

  render() {
    return html`
      <h1>Switch</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and not checked.
      </p>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-switch&gt;&lt;/shadcx-switch&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Description</h3>
      <div class="preview">
        <label class="row">
          <shadcx-switch .checked=${this._checked} @change=${this._onCheckedChange}></shadcx-switch>
          <span class="label">Enable marketing emails</span>
        </label>
        <span class="muted">State: ${this._checked ? 'checked' : 'unchecked'}</span>
      </div>
      <pre><code>&lt;shadcx-switch .checked=${'${checked}'} @change=${'${onChange}'}&gt;&lt;/shadcx-switch&gt;</code></pre>

      <h3>Choice Card</h3>
      <div class="preview">
        <label class="card" @click=${this._onCardClick}>
          <span class="label">Low-power mode</span>
          <shadcx-switch></shadcx-switch>
        </label>
      </div>
      <pre><code>&lt;label class="card"&gt;
  &lt;span&gt;Low-power mode&lt;/span&gt;
  &lt;shadcx-switch&gt;&lt;/shadcx-switch&gt;
&lt;/label&gt;</code></pre>

      <h3>Disabled + Invalid + Size</h3>
      <div class="preview">
        <label class="row"><shadcx-switch disabled></shadcx-switch><span class="label">Disabled</span></label>
        <label class="row"><shadcx-switch aria-invalid="true"></shadcx-switch><span class="label">Invalid</span></label>
        <label class="row"><shadcx-switch size="sm"></shadcx-switch><span class="label">Small</span></label>
        <label class="row"><shadcx-switch size="default" checked></shadcx-switch><span class="label">Default</span></label>
        <label class="row"><shadcx-switch size="lg"></shadcx-switch><span class="label">Large</span></label>
      </div>
      <pre><code>&lt;shadcx-switch disabled&gt;&lt;/shadcx-switch&gt;
&lt;shadcx-switch aria-invalid="true"&gt;&lt;/shadcx-switch&gt;
&lt;shadcx-switch size="sm"&gt;&lt;/shadcx-switch&gt;
&lt;shadcx-switch size="default" checked&gt;&lt;/shadcx-switch&gt;
&lt;shadcx-switch size="lg"&gt;&lt;/shadcx-switch&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'default' | 'lg'</code></td><td><code>'default'</code></td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>string | null</code></td><td><code>null</code></td></tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'switch-page': SwitchPage
  }
}
