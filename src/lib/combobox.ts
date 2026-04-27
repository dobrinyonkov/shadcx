import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

@customElement('shadcx-combobox')
export class Combobox extends LitElement {
  @property({ attribute: false }) items: string[] = []
  @property({ type: String }) placeholder = 'Select an option'
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) multiple = false
  @property({ type: Boolean, attribute: 'show-clear' }) showClear = false
  @property({ type: Boolean, attribute: 'auto-highlight' }) autoHighlight = false
  @property({ type: String, attribute: 'aria-invalid' }) ariaInvalid: string | null = null
  @property({ type: String }) value = ''
  @property({ attribute: false }) values: string[] = []

  @state() private _query = ''
  @state() private _open = false
  @state() private _highlightedIndex = -1

  static styles = [
    preflight,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 24rem;
        position: relative;
        font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
      }

      .control {
        position: relative;
        width: 100%;
      }

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

      .input:focus-visible {
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .input[aria-invalid] {
        border-color: hsl(var(--destructive));
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

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

      .icon-btn:hover {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

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
        height: 1.5rem;
        border-radius: 999px;
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
        padding: 0 0.5rem;
        font-size: 0.75rem;
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

      .empty {
        padding: 0.75rem;
        font-size: 0.8125rem;
        color: hsl(var(--muted-foreground));
      }

      .list {
        max-height: 15rem;
        overflow-y: auto;
        padding: 0.25rem;
      }

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

      .item:hover,
      .item[data-highlighted='true'] {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .check {
        color: hsl(var(--primary));
        font-size: 0.75rem;
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('pointerdown', this._onWindowPointerDown)
  }

  disconnectedCallback() {
    window.removeEventListener('pointerdown', this._onWindowPointerDown)
    super.disconnectedCallback()
  }

  private _onWindowPointerDown = (event: PointerEvent) => {
    const path = event.composedPath()
    if (!path.includes(this)) {
      this._open = false
    }
  }

  private get _filteredItems() {
    const query = this._query.trim().toLowerCase()
    if (!query) return this.items
    return this.items.filter((item) => item.toLowerCase().includes(query))
  }

  private _toggleOpen() {
    if (this.disabled) return
    this._open = !this._open
    if (this._open && this.autoHighlight && this._filteredItems.length > 0) {
      this._highlightedIndex = 0
    }
  }

  private _onInput(event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this._query = input.value
    this._open = true
    if (this.autoHighlight && this._filteredItems.length > 0) {
      this._highlightedIndex = 0
    } else {
      this._highlightedIndex = -1
    }
  }

  private _onKeyDown(event: KeyboardEvent) {
    if (!this._open && event.key === 'ArrowDown') {
      event.preventDefault()
      this._open = true
      this._highlightedIndex = 0
      return
    }

    if (!this._open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this._highlightedIndex = Math.min(this._highlightedIndex + 1, this._filteredItems.length - 1)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0)
      return
    }

    if (event.key === 'Enter' && this._highlightedIndex >= 0) {
      event.preventDefault()
      this._selectItem(this._filteredItems[this._highlightedIndex])
      return
    }

    if (event.key === 'Escape') {
      this._open = false
      this._highlightedIndex = -1
    }
  }

  private _selectItem(item: string) {
    if (this.multiple) {
      if (this.values.includes(item)) {
        this.values = this.values.filter((value) => value !== item)
      } else {
        this.values = [...this.values, item]
      }
      this._query = ''
      this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.values }, bubbles: true, composed: true }))
      return
    }

    this.value = item
    this._query = item
    this._open = false
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.value }, bubbles: true, composed: true }))
  }

  private _clear() {
    this.value = ''
    this.values = []
    this._query = ''
    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: { value: this.multiple ? this.values : this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  private _onActionButtonClick() {
    const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value)
    if (this.showClear && hasValue) {
      this._clear()
      return
    }
    this._toggleOpen()
  }

  private _removeValue(item: string) {
    this.values = this.values.filter((value) => value !== item)
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.values }, bubbles: true, composed: true }))
  }

  protected updated() {
    if (!this.multiple && !this._query && this.value) {
      this._query = this.value
    }
  }

  render() {
    const filtered = this._filteredItems

    return html`
      <div class="control">
        ${this.multiple
          ? html`
              <div class="chips" part="chips">
                ${this.values.map(
                  (item) => html`
                    <span class="chip" part="chip">
                      ${item}
                      <button class="icon-btn" type="button" @click=${() => this._removeValue(item)} aria-label=${`Remove ${item}`}>
                        ×
                      </button>
                    </span>
                  `,
                )}
                <input
                  class="chips-input"
                  part="input"
                  .value=${this._query}
                  placeholder=${this.placeholder}
                  ?disabled=${this.disabled}
                  aria-invalid=${this.ariaInvalid || nothing}
                  @focus=${() => (this._open = true)}
                  @input=${this._onInput}
                  @keydown=${this._onKeyDown}
                >
              </div>
            `
          : html`
              <input
                class="input"
                part="input"
                .value=${this._query}
                placeholder=${this.placeholder}
                ?disabled=${this.disabled}
                aria-invalid=${this.ariaInvalid || nothing}
                @focus=${() => (this._open = true)}
                @input=${this._onInput}
                @keydown=${this._onKeyDown}
              >
            `}
        <button class="icon-btn" type="button" aria-label="Combobox action" @click=${this._onActionButtonClick}>
          ${this.showClear && (this.multiple ? this.values.length > 0 : Boolean(this.value)) ? '×' : '▾'}
        </button>
      </div>

      ${this._open
        ? html`
            <div class="content" part="content">
              ${filtered.length === 0
                ? html`<div class="empty" part="empty">No items found.</div>`
                : html`
                    <div class="list" part="list">
                      ${filtered.map(
                        (item, index) => html`
                          <button
                            class="item"
                            part="item"
                            type="button"
                            data-highlighted=${String(index === this._highlightedIndex)}
                            @mouseenter=${() => (this._highlightedIndex = index)}
                            @click=${() => this._selectItem(item)}
                          >
                            <span>${item}</span>
                            ${this.multiple
                              ? this.values.includes(item)
                                ? html`<span class="check">✓</span>`
                                : nothing
                              : this.value === item
                                ? html`<span class="check">✓</span>`
                                : nothing}
                          </button>
                        `,
                      )}
                    </div>
                  `}
            </div>
          `
        : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-combobox': Combobox
  }
}
