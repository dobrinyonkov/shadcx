import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/combobox.ts'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']

@customElement('combobox-page')
export class ComboboxPage extends LitElement {
  @state() private _singleValue = ''
  @state() private _multipleValues: string[] = []

  static styles = css`
    :host { display: block; font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif); }
    h1 { font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { color: hsl(var(--muted-foreground)); margin: 0 0 1rem; font-size: 0.9375rem; line-height: 1.6; }
    .preview { border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; margin-bottom: 1rem; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; }
    code { font-family: var(--font-mono, ui-monospace, monospace); }
    .state { margin-top: 0.5rem; font-size: 0.8125rem; color: hsl(var(--muted-foreground)); }
  `

  private _onSingleValueChange(event: Event) {
    const customEvent = event as CustomEvent<{ value: string }>
    this._singleValue = customEvent.detail.value
  }

  private _onMultipleValueChange(event: Event) {
    const customEvent = event as CustomEvent<{ value: string[] }>
    this._multipleValues = customEvent.detail.value
  }

  render() {
    return html`
      <h1>Combobox</h1>
      <p>Autocomplete input with suggestions, keyboard navigation, optional clear behavior, and multi-select chips.</p>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-combobox .items=${'${["Next.js","SvelteKit"]}'} placeholder="Select a framework"&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <shadcx-combobox
          .items=${frameworks}
          placeholder="Select a framework"
          show-clear
          auto-highlight
          .value=${this._singleValue}
          @value-change=${this._onSingleValueChange}
        ></shadcx-combobox>
        <div class="state">Value: ${this._singleValue || '(none)'}</div>
      </div>

      <h3>Multiple</h3>
      <div class="preview">
        <shadcx-combobox
          .items=${frameworks}
          multiple
          show-clear
          auto-highlight
          placeholder="Add framework"
          .values=${this._multipleValues}
          @value-change=${this._onMultipleValueChange}
        ></shadcx-combobox>
        <div class="state">Values: ${this._multipleValues.length > 0 ? this._multipleValues.join(', ') : '(none)'}</div>
      </div>

      <h3>Disabled + Invalid</h3>
      <div class="preview">
        <shadcx-combobox .items=${frameworks} disabled placeholder="Disabled"></shadcx-combobox>
        <br><br>
        <shadcx-combobox .items=${frameworks} aria-invalid="true" placeholder="Required framework"></shadcx-combobox>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'combobox-page': ComboboxPage
  }
}
