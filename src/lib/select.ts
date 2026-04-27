import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

@customElement('shadcx-select-item')
export class SelectItem extends LitElement {
  @property({ type: String, reflect: true }) value = ''
  @property({ type: Boolean, reflect: true }) disabled = false

  static styles = css`
    :host {
      display: none;
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-select')
export class Select extends LitElement {
  @property({ type: String }) placeholder = 'Select an option'
  @property({ type: String, reflect: true }) value = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: String, attribute: 'aria-invalid' }) ariaInvalid: string | null = null

  @state() private _open = false
  @state() private _items: SelectItem[] = []
  @state() private _highlightedIndex = -1

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
        min-width: 12rem;
        position: relative;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      .root {
        position: relative;
        width: 100%;
      }

      .trigger {
        appearance: none;
        text-transform: none;
        width: 100%;
        height: 2.25rem;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        border-radius: calc(var(--radius) - 2px);
        border: 1px solid hsl(var(--input));
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        font-size: 0.875rem;
        line-height: 1;
        padding: 0 0.75rem;
        cursor: pointer;
        outline: none;
        transition:
          border-color 0.15s,
          box-shadow 0.15s,
          background-color 0.15s;
      }

      .trigger[data-placeholder='true'] {
        color: hsl(var(--muted-foreground));
      }

      .trigger:focus-visible {
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .trigger:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .trigger[aria-invalid='true'] {
        border-color: hsl(var(--destructive));
      }

      .chevron {
        width: 1rem;
        height: 1rem;
        color: hsl(var(--muted-foreground));
        flex-shrink: 0;
      }

      .content {
        position: absolute;
        top: calc(100% + 0.25rem);
        left: 0;
        width: 100%;
        min-width: max-content;
        z-index: 50;
        border-radius: calc(var(--radius) - 2px);
        border: 1px solid hsl(var(--border));
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        box-shadow:
          0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -4px rgba(0, 0, 0, 0.1);
        max-height: 16rem;
        overflow: auto;
        padding: 0.25rem;
      }

      .item {
        width: 100%;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        border-radius: calc(var(--radius) - 4px);
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.375rem 0.5rem;
        cursor: pointer;
        color: inherit;
        text-align: left;
      }

      .item:hover,
      .item[data-highlighted='true'] {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .item[data-selected='true'] {
        font-weight: 600;
      }

      .item:disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .item-label {
        flex: 1;
      }

      .check {
        width: 0.875rem;
        height: 0.875rem;
        margin-left: 0.5rem;
      }

      .sr {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('focusout', this._onFocusOut)
  }

  disconnectedCallback() {
    this.removeEventListener('focusout', this._onFocusOut)
    super.disconnectedCallback()
  }

  firstUpdated() {
    this._collectItems()
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this._syncHighlightToValue()
    }
  }

  private _onFocusOut = (event: FocusEvent) => {
    const nextTarget = event.relatedTarget as Node | null
    if (!nextTarget || !this.shadowRoot?.contains(nextTarget)) {
      this._open = false
    }
  }

  private _onSlotChange() {
    this._collectItems()
  }

  private _collectItems() {
    const slot = this.shadowRoot?.querySelector('slot')
    const assigned = slot?.assignedElements({ flatten: true }) ?? []
    this._items = assigned.filter((el): el is SelectItem => el.tagName.toLowerCase() === 'shadcx-select-item')

    if (!this.value) {
      const firstEnabled = this._items.find((item) => !item.disabled)
      this._highlightedIndex = firstEnabled ? this._items.indexOf(firstEnabled) : -1
      return
    }

    this._syncHighlightToValue()
  }

  private _syncHighlightToValue() {
    const selectedIndex = this._items.findIndex((item) => item.value === this.value)
    this._highlightedIndex = selectedIndex >= 0 ? selectedIndex : this._highlightedIndex
  }

  private _toggleOpen() {
    if (this.disabled) {
      return
    }

    this._open = !this._open
    if (this._open && this.value) {
      this._syncHighlightToValue()
    }
  }

  private _selectValue(nextValue: string) {
    if (this.value === nextValue) {
      this._open = false
      return
    }

    this.value = nextValue
    this._open = false
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: { value: nextValue },
        bubbles: true,
        composed: true,
      }),
    )
  }

  private _onKeyDown(event: KeyboardEvent) {
    if (this.disabled) {
      return
    }

    const enabledItems = this._items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !item.disabled)

    if (!enabledItems.length) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!this._open) {
        this._open = true
        return
      }

      const highlighted = this._items[this._highlightedIndex]
      if (highlighted && !highlighted.disabled) {
        this._selectValue(highlighted.value)
      }
      return
    }

    if (event.key === 'Escape') {
      this._open = false
      return
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return
    }

    event.preventDefault()
    if (!this._open) {
      this._open = true
    }

    const currentIndex = enabledItems.findIndex(({ index }) => index === this._highlightedIndex)
    const offset = event.key === 'ArrowDown' ? 1 : -1
    const nextIndex = currentIndex === -1
      ? 0
      : (currentIndex + offset + enabledItems.length) % enabledItems.length

    this._highlightedIndex = enabledItems[nextIndex].index
  }

  private _selectedItem() {
    return this._items.find((item) => item.value === this.value)
  }

  render() {
    const selectedItem = this._selectedItem()
    const label = selectedItem?.textContent?.trim() || this.placeholder

    return html`
      <div class="root" @keydown=${this._onKeyDown}>
        <button
          part="trigger"
          class="trigger"
          type="button"
          role="combobox"
          aria-expanded=${String(this._open)}
          aria-haspopup="listbox"
          aria-invalid=${this.ariaInvalid || nothing}
          data-placeholder=${String(!selectedItem)}
          ?disabled=${this.disabled}
          @click=${this._toggleOpen}
        >
          <span>${label}</span>
          <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.5 6.5 8 10l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>

        ${this._open
          ? html`
              <div part="content" class="content" role="listbox">
                ${this._items.map((item, index) => {
                  const itemLabel = item.textContent?.trim() || item.value
                  const isSelected = item.value === this.value
                  const isHighlighted = index === this._highlightedIndex

                  return html`
                    <button
                      part="item"
                      class="item"
                      type="button"
                      role="option"
                      data-selected=${String(isSelected)}
                      data-highlighted=${String(isHighlighted)}
                      aria-selected=${String(isSelected)}
                      ?disabled=${item.disabled}
                      @mouseenter=${() => (this._highlightedIndex = index)}
                      @click=${() => this._selectValue(item.value)}
                    >
                      <span class="item-label">${itemLabel}</span>
                      ${isSelected
                        ? html`
                            <svg class="check" viewBox="0 0 16 16" aria-hidden="true">
                              <polyline points="3.5 8.5 6.8 11.8 12.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                            </svg>
                          `
                        : nothing}
                    </button>
                  `
                })}
              </div>
            `
          : nothing}

        <span class="sr" aria-hidden="true"><slot @slotchange=${this._onSlotChange}></slot></span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-select': Select
    'shadcx-select-item': SelectItem
  }
}
