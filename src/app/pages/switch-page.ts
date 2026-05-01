import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'

@customElement('switch-page')
export class SwitchPage extends LitElement {
  @state() private _checked = false

  static styles = [componentStyles, css`
    :host { display: block; font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif); }
    h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc { color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }
    .preview { border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1.5rem; display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem 1rem; border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); }
    .row { display: inline-flex; align-items: center; gap: 0.625rem; }
    .muted { color: hsl(var(--muted-foreground)); font-size: 0.875rem; }
  `]

  private _onSwitchChange(event: Event) {
    this._checked = (event.currentTarget as HTMLInputElement).checked
  }

  render() {
    return html`
      <h1>Switch</h1>
      <p class="desc">A control that allows the user to toggle between checked and not checked.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input type="checkbox" role="switch"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Description</h3>
      <div class="preview">
        <label class="row"><input type="checkbox" role="switch"><span>Email notifications</span></label>
      </div>
      <pre><code>&lt;label style="display:inline-flex;align-items:center;gap:0.625rem;"&gt;
  &lt;input type="checkbox" role="switch"&gt;
  &lt;span&gt;Email notifications&lt;/span&gt;
&lt;/label&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row"><input type="checkbox" role="switch" disabled><span>Disabled switch</span></label>
      </div>
      <pre><code>&lt;input type="checkbox" role="switch" disabled&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row"><input type="checkbox" role="switch" aria-invalid="true"><span>Required setting</span></label>
      </div>
      <pre><code>&lt;input type="checkbox" role="switch" aria-invalid="true"&gt;</code></pre>

      <h3>Size</h3>
      <div class="preview">
        <input type="checkbox" role="switch" class="scx-switch-sm" aria-label="small switch">
        <input type="checkbox" role="switch" aria-label="default switch">
        <input type="checkbox" role="switch" class="scx-switch-lg" aria-label="large switch">
      </div>
      <pre><code>&lt;input type="checkbox" role="switch" class="scx-switch-sm"&gt;
&lt;input type="checkbox" role="switch"&gt;
&lt;input type="checkbox" role="switch" class="scx-switch-lg"&gt;</code></pre>

      <h3>Controlled</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" role="switch" .checked=${this._checked} @change=${this._onSwitchChange}>
          <span>Push alerts</span>
        </label>
        <span class="muted">State: ${this._checked ? 'on' : 'off'}</span>
      </div>
      <pre><code>&lt;input type="checkbox" role="switch"&gt;
&lt;script&gt;
  switchEl.addEventListener('change', (event) =&gt; {
    console.log(event.currentTarget.checked)
  })
&lt;/script&gt;</code></pre>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'switch-page': SwitchPage } }
