const styles = `
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
  img, video { max-width: 100%; height: auto; }
  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
  blockquote, dl, dd, hr, figure, p, pre { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: inherit; }
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  button, select { text-transform: none; }
  button, [type='button'], [type='reset'], [type='submit'] {
    appearance: button;
    background-color: transparent;
    background-image: none;
  }
  :-moz-focusring { outline: auto; }
  :-moz-ui-invalid { box-shadow: none; }
  progress { vertical-align: baseline; }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }
  [type='search'] { appearance: textfield; outline-offset: -2px; }
  ::-webkit-search-decoration { -webkit-appearance: none; }
  ::-webkit-file-upload-button { font: inherit; appearance: button; }
  textarea { resize: vertical; }
  fieldset { margin: 0; padding: 0; min-width: 0; }
  legend { padding: 0; }
  ::placeholder { color: hsl(var(--muted-foreground)); opacity: 1; }
  [hidden] { display: none !important; }

  :host {
    display: block;
    width: 100%;
    max-width: 24rem;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }

  .control { position: relative; width: 100%; }

  .input {
    width: 100%;
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-size: 0.875rem;
    padding: 0 2rem 0 0.75rem;
    outline: none;
  }

  .input:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  .input[aria-invalid] { border-color: hsl(var(--destructive)); }
  .input:disabled { opacity: 0.5; cursor: not-allowed; }

  .icon-btn {
    position: absolute;
    top: 50%;
    right: 0.35rem;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    color: hsl(var(--muted-foreground));
    width: 1.5rem;
    height: 1.5rem;
    border-radius: calc(var(--radius) - 4px);
    cursor: pointer;
  }

  .icon-btn:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    min-height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    padding: 0.25rem 0.35rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    height: 1.5rem;
    border-radius: 999px;
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }

  .chip-remove {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    line-height: 1;
  }

  .chips-input {
    border: none;
    background: transparent;
    color: hsl(var(--foreground));
    outline: none;
    font-size: 0.875rem;
    min-width: 8rem;
    flex: 1;
  }

  .content {
    position: absolute;
    z-index: 30;
    margin-top: 0.25rem;
    width: 100%;
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--popover));
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
    overflow: hidden;
  }

  .empty { padding: 0.75rem; font-size: 0.8125rem; color: hsl(var(--muted-foreground)); }
  .list { max-height: 15rem; overflow-y: auto; padding: 0.25rem; }

  .item {
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    border-radius: calc(var(--radius) - 4px);
    padding: 0.5rem;
    color: hsl(var(--popover-foreground));
    font-size: 0.875rem;
    cursor: pointer;
  }

  .item:hover, .item[data-highlighted='true'] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  .check { color: hsl(var(--primary)); font-size: 0.75rem; }
`

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export class Combobox extends HTMLElement {
  static observedAttributes = ['placeholder', 'disabled', 'multiple', 'show-clear', 'auto-highlight', 'aria-invalid', 'value']

  private _items: string[] = []
  private _values: string[] = []
  private _query = ''
  private _open = false
  private _highlightedIndex = -1

  get items() {
    return this._items
  }

  set items(value: string[]) {
    this._items = Array.isArray(value) ? value : []
    this.render()
  }

  get placeholder() {
    return this.getAttribute('placeholder') ?? 'Select an option'
  }

  set placeholder(value: string) {
    this.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  get multiple() {
    return this.hasAttribute('multiple')
  }

  set multiple(value: boolean) {
    this.toggleAttribute('multiple', value)
  }

  get showClear() {
    return this.hasAttribute('show-clear')
  }

  set showClear(value: boolean) {
    this.toggleAttribute('show-clear', value)
  }

  get autoHighlight() {
    return this.hasAttribute('auto-highlight')
  }

  set autoHighlight(value: boolean) {
    this.toggleAttribute('auto-highlight', value)
  }

  get ariaInvalid() {
    return this.getAttribute('aria-invalid')
  }

  set ariaInvalid(value: string | null) {
    if (value === null) this.removeAttribute('aria-invalid')
    else this.setAttribute('aria-invalid', value)
  }

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    if (value) this.setAttribute('value', value)
    else this.removeAttribute('value')
  }

  get values() {
    return this._values
  }

  set values(value: string[]) {
    this._values = Array.isArray(value) ? value : []
    this.render()
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    window.addEventListener('pointerdown', this.onWindowPointerDown)
    this.render()
  }

  disconnectedCallback() {
    window.removeEventListener('pointerdown', this.onWindowPointerDown)
  }

  attributeChangedCallback() {
    if (!this.multiple && !this._query && this.value) {
      this._query = this.value
    }
    this.render()
  }

  private get filteredItems() {
    const query = this._query.trim().toLowerCase()
    if (!query) return this.items
    return this.items.filter((item) => item.toLowerCase().includes(query))
  }

  private onWindowPointerDown = (event: PointerEvent) => {
    if (!event.composedPath().includes(this)) {
      this._open = false
      this.render()
    }
  }

  private toggleOpen() {
    if (this.disabled) return
    this._open = !this._open
    if (this._open && this.autoHighlight && this.filteredItems.length > 0) {
      this._highlightedIndex = 0
    }
    this.render()
  }

  private onInput = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement
    this._query = input.value
    this._open = true
    this._highlightedIndex = this.autoHighlight && this.filteredItems.length > 0 ? 0 : -1
    this.render(true)
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (!this._open && event.key === 'ArrowDown') {
      event.preventDefault()
      this._open = true
      this._highlightedIndex = 0
      this.render(true)
      return
    }

    if (!this._open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this._highlightedIndex = Math.min(this._highlightedIndex + 1, this.filteredItems.length - 1)
      this.render(true)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0)
      this.render(true)
      return
    }

    if (event.key === 'Enter' && this._highlightedIndex >= 0) {
      event.preventDefault()
      this.selectItem(this.filteredItems[this._highlightedIndex])
      return
    }

    if (event.key === 'Escape') {
      this._open = false
      this._highlightedIndex = -1
      this.render()
    }
  }

  private selectItem(item: string) {
    if (this.multiple) {
      if (this.values.includes(item)) {
        this._values = this.values.filter((value) => value !== item)
      } else {
        this._values = [...this.values, item]
      }
      this._query = ''
      this.dispatchValueChange(this.values)
      this.render(true)
      return
    }

    this.value = item
    this._query = item
    this._open = false
    this.dispatchValueChange(this.value)
    this.render()
  }

  private clear() {
    this.value = ''
    this._values = []
    this._query = ''
    this.dispatchValueChange(this.multiple ? this.values : this.value)
    this.render(true)
  }

  private onActionButtonClick = () => {
    const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value)
    if (this.showClear && hasValue) {
      this.clear()
      return
    }
    this.toggleOpen()
  }

  private removeValue(item: string) {
    this._values = this.values.filter((value) => value !== item)
    this.dispatchValueChange(this.values)
    this.render(true)
  }

  private dispatchValueChange(value: string | string[]) {
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value }, bubbles: true, composed: true }))
  }

  private render(focusInput = false) {
    if (!this.shadowRoot) return
    if (!this.multiple && !this._query && this.value) {
      this._query = this.value
    }

    const inputAttrs = `
      value="${escapeHtml(this._query)}"
      placeholder="${escapeHtml(this.placeholder)}"
      ${this.disabled ? 'disabled' : ''}
      ${this.ariaInvalid ? `aria-invalid="${escapeHtml(this.ariaInvalid)}"` : ''}
    `
    const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value)
    const actionLabel = this.showClear && hasValue ? 'Clear selection' : 'Open options'
    const actionText = this.showClear && hasValue ? 'x' : '▾'

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="control">
        ${this.multiple ? this.renderMultipleInput(inputAttrs) : this.renderSingleInput(inputAttrs)}
        <button class="icon-btn" type="button" aria-label="${actionLabel}">${actionText}</button>
      </div>
      ${this._open ? this.renderContent() : ''}
    `

    const input = this.shadowRoot.querySelector('input')
    input?.addEventListener('focus', () => {
      if (this._open) return
      this._open = true
      this.render(true)
    })
    input?.addEventListener('input', this.onInput)
    input?.addEventListener('keydown', this.onKeyDown)
    this.shadowRoot.querySelector('.icon-btn')?.addEventListener('click', this.onActionButtonClick)
    this.shadowRoot.querySelectorAll<HTMLButtonElement>('[data-item-index]').forEach((button) => {
      button.addEventListener('mouseenter', () => {
        this._highlightedIndex = Number(button.dataset.itemIndex)
        this.render(focusInput)
      })
      button.addEventListener('click', () => this.selectItem(this.filteredItems[Number(button.dataset.itemIndex)]))
    })
    this.shadowRoot.querySelectorAll<HTMLButtonElement>('[data-remove-value]').forEach((button) => {
      button.addEventListener('click', () => this.removeValue(button.dataset.removeValue ?? ''))
    })

    if (focusInput) {
      const nextInput = this.shadowRoot.querySelector<HTMLInputElement>('input')
      nextInput?.focus()
      nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length)
    }
  }

  private renderSingleInput(inputAttrs: string) {
    return `<input class="input" part="input" ${inputAttrs}>`
  }

  private renderMultipleInput(inputAttrs: string) {
    return `
      <div class="chips" part="chips">
        ${this.values.map((item) => `
          <span class="chip" part="chip">
            ${escapeHtml(item)}
            <button class="chip-remove" type="button" data-remove-value="${escapeHtml(item)}" aria-label="Remove ${escapeHtml(item)}">x</button>
          </span>
        `).join('')}
        <input class="chips-input" part="input" ${inputAttrs}>
      </div>
    `
  }

  private renderContent() {
    const filtered = this.filteredItems
    return `
      <div class="content" part="content">
        ${filtered.length === 0
          ? '<div class="empty" part="empty">No items found.</div>'
          : `<div class="list" part="list">
              ${filtered.map((item, index) => this.renderItem(item, index)).join('')}
            </div>`}
      </div>
    `
  }

  private renderItem(item: string, index: number) {
    const selected = this.multiple ? this.values.includes(item) : this.value === item
    return `
      <button
        class="item"
        part="item"
        type="button"
        data-item-index="${index}"
        data-highlighted="${String(index === this._highlightedIndex)}"
      >
        <span>${escapeHtml(item)}</span>
        ${selected ? '<span class="check">✓</span>' : ''}
      </button>
    `
  }
}

if (!customElements.get('shadcx-combobox')) {
  customElements.define('shadcx-combobox', Combobox)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-combobox': Combobox
  }
}
