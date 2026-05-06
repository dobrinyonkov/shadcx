import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']

@customElement('combobox-page')
export class ComboboxPage extends LitElement {
  @state() private _singleValue = ''
  @state() private _autocompleteValue = ''
  @state() private _multipleValues: string[] = []

  static styles = [componentStyles, css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.65;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
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
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 0.8125rem;
    }

    .state {
      margin-top: 0.75rem;
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 28rem;
      border-collapse: collapse;
      font-size: 0.875rem;
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
  `]

  private _onSingleValueChange(event: Event) {
    const select = event.currentTarget as HTMLSelectElement
    this._singleValue = select.value
  }

  private _onOptionListClick(event: Event) {
    const target = event.target
    if (!(target instanceof Node)) {
      return
    }

    const element = target instanceof Element ? target : target.parentElement
    const button = element?.closest<HTMLButtonElement>('button[data-value]')
    if (!button) {
      return
    }

    const selected = new Set(this._multipleValues)
    const framework = button.dataset.value || ''
    if (selected.has(framework)) {
      selected.delete(framework)
    } else {
      selected.add(framework)
    }

    this._multipleValues = frameworks.filter((item) => selected.has(item))
  }

  private _onAutocompleteInput(event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this._autocompleteValue = input.value
  }

  render() {
    return html`
      <h1>Combobox</h1>
      <p class="desc">
        Native select and datalist controls styled to sit beside the rest of
        the shadcn-inspired form elements.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <p>
        In CSS-only shadcx, combobox-style controls are native form elements.
        Use <code>&lt;select&gt;</code> for fixed choices or
        <code>&lt;input list&gt;</code> when you want browser-provided
        autocomplete.
      </p>
      <pre><code>&lt;select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <select
          aria-label="Select a framework"
          @change=${(event: Event) => this._onSingleValueChange(event)}
        >
          <option value="">Select a framework</option>
          ${frameworks.map((framework) => html`<option value=${framework}>${framework}</option>`)}
        </select>
        <div class="state">Value: ${this._singleValue || '(none)'}</div>
      </div>
      <pre><code>&lt;select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h3>Autocomplete</h3>
      <p>
        The input itself is fully styled, but the suggestion popup belongs to
        the browser and operating system, so its visual styling is limited.
      </p>
      <div class="preview">
        <input
          list="framework-options"
          placeholder="Search frameworks"
          @input=${(event: Event) => this._onAutocompleteInput(event)}
        >
        <datalist id="framework-options">
          ${frameworks.map((framework) => html`<option value=${framework}></option>`)}
        </datalist>
        <div class="state">Value: ${this._autocompleteValue || '(none)'}</div>
      </div>
      <pre><code>&lt;input list="framework-options" placeholder="Search frameworks"&gt;
&lt;datalist id="framework-options"&gt;
  &lt;option value="Next.js"&gt;&lt;/option&gt;
  &lt;option value="SvelteKit"&gt;&lt;/option&gt;
  &lt;option value="Nuxt.js"&gt;&lt;/option&gt;
&lt;/datalist&gt;</code></pre>

      <h3>Multiple</h3>
      <div class="preview">
        <fieldset
          class="scx-option-list"
          @click=${(event: Event) => this._onOptionListClick(event)}
        >
          <legend>Frameworks</legend>
          ${frameworks.map(
            (framework) => html`
              <button
                type="button"
                class="scx-outline"
                data-value=${framework}
                aria-pressed=${String(this._multipleValues.includes(framework))}
              >
                ${framework}
              </button>
            `,
          )}
        </fieldset>
        <div class="state">Values: ${this._multipleValues.length > 0 ? this._multipleValues.join(', ') : '(none)'}</div>
      </div>
<pre><code>&lt;fieldset class="scx-option-list"&gt;
  &lt;legend&gt;Frameworks&lt;/legend&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;Next.js&lt;/button&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;SvelteKit&lt;/button&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;Nuxt.js&lt;/button&gt;
&lt;/fieldset&gt;</code></pre>

      <h3>Disabled + Invalid</h3>
      <div class="preview">
        <select disabled aria-label="Disabled framework">
          <option>Disabled</option>
        </select>
        <br><br>
        <select aria-invalid="true" aria-label="Required framework">
          <option value="">Required framework</option>
          ${frameworks.map((framework) => html`<option value=${framework}>${framework}</option>`)}
        </select>
      </div>
      <pre><code>&lt;select disabled&gt;
  &lt;option&gt;Disabled&lt;/option&gt;
&lt;/select&gt;
&lt;select aria-invalid="true"&gt;
  &lt;option value=""&gt;Required framework&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>select</code></td><td>Native element</td><td>Styled as the shadcn-like combobox/select trigger.</td></tr>
            <tr><td><code>input[list]</code></td><td>Native element</td><td>Styled like an input while the browser owns autocomplete UI.</td></tr>
            <tr><td><code>fieldset.scx-option-list</code></td><td>Native fieldset</td><td>Styled option group for ergonomic multiple selection.</td></tr>
            <tr><td><code>option</code></td><td>Native child</td><td>Defines available choices.</td></tr>
            <tr><td><code>disabled</code></td><td>Boolean attribute</td><td>Applies disabled opacity and cursor.</td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>true</code></td><td>Applies destructive border and invalid ring.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Target</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>change</code>, <code>input</code></td>
              <td><code>select</code>, <code>input[list]</code>, buttons</td>
              <td>Use native form events and read <code>event.currentTarget.value</code> or update <code>aria-pressed</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'combobox-page': ComboboxPage
  }
}
