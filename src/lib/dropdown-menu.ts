import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type DropdownMenuItemVariant = 'default' | 'destructive'

@customElement('shadcx-dropdown-menu')
export class DropdownMenu extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false

  private _trigger: DropdownMenuTrigger | null = null

  static styles = css`
    :host {
      display: inline-flex;
      position: relative;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('shadcx-dropdown-select', this._onSelect as EventListener)
    this.addEventListener('shadcx-dropdown-open', this._onOpen as EventListener)
    this.addEventListener('shadcx-dropdown-close', this._onClose as EventListener)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('shadcx-dropdown-select', this._onSelect as EventListener)
    this.removeEventListener('shadcx-dropdown-open', this._onOpen as EventListener)
    this.removeEventListener('shadcx-dropdown-close', this._onClose as EventListener)
    window.removeEventListener('pointerdown', this._handlePointerDown)
    window.removeEventListener('keydown', this._handleWindowKeyDown)
  }

  registerTrigger(trigger: DropdownMenuTrigger) {
    this._trigger = trigger
  }

  toggle() {
    this.setOpen(!this.open)
  }

  setOpen(value: boolean) {
    if (this.open === value) return

    this.open = value
    this.dispatchEvent(
      new CustomEvent('open-change', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    )

    if (this.open) {
      window.addEventListener('pointerdown', this._handlePointerDown)
      window.addEventListener('keydown', this._handleWindowKeyDown)
    } else {
      window.removeEventListener('pointerdown', this._handlePointerDown)
      window.removeEventListener('keydown', this._handleWindowKeyDown)
      this._trigger?.focusTrigger()
    }

    this.querySelectorAll<DropdownMenuContent>('shadcx-dropdown-menu-content').forEach((content) => {
      content.syncFromMenu()
    })
  }

  private _handleWindowKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.setOpen(false)
    }
  }

  private _handlePointerDown = (event: PointerEvent) => {
    if (event.composedPath().includes(this)) {
      return
    }

    this.setOpen(false)
  }

  private _onSelect = () => {
    this.setOpen(false)
  }

  private _onOpen = () => {
    this.setOpen(true)
  }

  private _onClose = () => {
    this.setOpen(false)
  }

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-trigger')
export class DropdownMenuTrigger extends LitElement {
  @property({ type: Boolean, reflect: true }) disabled = false

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
      }

      .root {
        all: unset;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: calc(var(--radius) - 2px);
      }

      .root:focus-visible {
        box-shadow: 0 0 0 2px hsl(var(--ring));
      }

      .root:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.menu?.registerTrigger(this)
  }

  get menu() {
    return this.closest('shadcx-dropdown-menu') as DropdownMenu | null
  }

  focusTrigger() {
    this.shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus()
  }

  private _onClick() {
    this.menu?.toggle()
  }

  private _onKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    this.menu?.toggle()
  }

  render() {
    return html`
      <button
        class="root"
        part="root"
        type="button"
        aria-haspopup="menu"
        aria-expanded=${String(this.menu?.open ?? false)}
        ?disabled=${this.disabled}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <slot></slot>
      </button>
    `
  }
}

@customElement('shadcx-dropdown-menu-content')
export class DropdownMenuContent extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: String }) align: 'start' | 'center' | 'end' = 'start'

  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        z-index: 50;
        min-width: 12rem;
      }

      :host(:not([open])) {
        display: none;
      }

      .root {
        overflow: hidden;
        border: 1px solid hsl(var(--border));
        border-radius: calc(var(--radius) - 2px);
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        padding: 0.25rem;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.syncFromMenu()
  }

  get menu() {
    return this.closest('shadcx-dropdown-menu') as DropdownMenu | null
  }

  syncFromMenu() {
    this.open = Boolean(this.menu?.open)
    this.style.top = 'calc(100% + 0.25rem)'

    if (this.align === 'end') {
      this.style.right = '0'
      this.style.left = 'auto'
    } else if (this.align === 'center') {
      this.style.left = '50%'
      this.style.transform = 'translateX(-50%)'
      this.style.right = 'auto'
    } else {
      this.style.left = '0'
      this.style.right = 'auto'
    }
  }

  render() {
    return html`<div class="root" part="root" role="menu"><slot></slot></div>`
  }
}

@customElement('shadcx-dropdown-menu-group')
export class DropdownMenuGroup extends LitElement {
  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-label')
export class DropdownMenuLabel extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: block;
        padding: 0.375rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: hsl(var(--muted-foreground));
      }
    `,
  ]

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-separator')
export class DropdownMenuSeparator extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: block;
        margin: 0.25rem -0.25rem;
        border-top: 1px solid hsl(var(--border));
      }
    `,
  ]

  render() {
    return nothing
  }
}

@customElement('shadcx-dropdown-menu-shortcut')
export class DropdownMenuShortcut extends LitElement {
  static styles = css`
    :host {
      margin-left: auto;
      font-size: 0.75rem;
      letter-spacing: 0.02em;
      color: hsl(var(--muted-foreground));
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-item')
export class DropdownMenuItem extends LitElement {
  @property({ type: String, reflect: true }) variant: DropdownMenuItemVariant = 'default'
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true, attribute: 'inset' }) inset = false

  static styles = [
    preflight,
    css`
      :host {
        display: flex;
      }

      .root {
        all: unset;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: calc(var(--radius) - 4px);
        padding: 0.375rem 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
        color: hsl(var(--popover-foreground));
      }

      :host([inset]) .root {
        padding-left: 2rem;
      }

      .root:hover,
      .root:focus-visible {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      :host([variant='destructive']) .root {
        color: hsl(var(--destructive));
      }

      :host([variant='destructive']) .root:hover,
      :host([variant='destructive']) .root:focus-visible {
        background-color: hsl(var(--destructive));
        color: hsl(var(--destructive-foreground));
      }

      .root:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    `,
  ]

  private _onClick() {
    if (this.disabled) return

    this.dispatchEvent(new CustomEvent('item-select', { bubbles: true, composed: true }))
    this.dispatchEvent(new CustomEvent('shadcx-dropdown-select', { bubbles: true, composed: true }))
  }

  render() {
    return html`
      <button
        class="root"
        part="root"
        type="button"
        role="menuitem"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `
  }
}

@customElement('shadcx-dropdown-menu-checkbox-item')
export class DropdownMenuCheckboxItem extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false

  static styles = [
    preflight,
    css`
      :host {
        display: flex;
      }

      .root {
        all: unset;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: calc(var(--radius) - 4px);
        padding: 0.375rem 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
      }

      .root:hover,
      .root:focus-visible {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .indicator {
        width: 1rem;
        display: inline-flex;
        justify-content: center;
        flex-shrink: 0;
      }

      .root:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    `,
  ]

  private _onClick() {
    if (this.disabled) return

    this.checked = !this.checked
    this.dispatchEvent(
      new CustomEvent('checked-change', {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    )
    this.dispatchEvent(new CustomEvent('shadcx-dropdown-select', { bubbles: true, composed: true }))
  }

  render() {
    return html`
      <button
        class="root"
        part="root"
        type="button"
        role="menuitemcheckbox"
        aria-checked=${String(this.checked)}
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <span class="indicator">${this.checked ? '✓' : ''}</span>
        <slot></slot>
      </button>
    `
  }
}

@customElement('shadcx-dropdown-menu-radio-group')
export class DropdownMenuRadioGroup extends LitElement {
  @property({ type: String }) value = ''

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('radio-select', this._onSelect as EventListener)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('radio-select', this._onSelect as EventListener)
  }

  private _onSelect(event: CustomEvent<{ value: string }>) {
    this.value = event.detail.value
    this.querySelectorAll<DropdownMenuRadioItem>('shadcx-dropdown-menu-radio-item').forEach((item) => {
      item.syncFromGroup()
    })

    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-radio-item')
export class DropdownMenuRadioItem extends LitElement {
  @property({ type: String }) value = ''
  @state() private _checked = false

  static styles = [
    preflight,
    css`
      :host {
        display: flex;
      }

      .root {
        all: unset;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: calc(var(--radius) - 4px);
        padding: 0.375rem 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
      }

      .root:hover,
      .root:focus-visible {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .indicator {
        width: 1rem;
        display: inline-flex;
        justify-content: center;
        flex-shrink: 0;
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.syncFromGroup()
  }

  private get _group() {
    return this.closest('shadcx-dropdown-menu-radio-group') as DropdownMenuRadioGroup | null
  }

  syncFromGroup() {
    this._checked = this._group?.value === this.value
  }

  private _onClick() {
    this.dispatchEvent(
      new CustomEvent('radio-select', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
    this.dispatchEvent(new CustomEvent('shadcx-dropdown-select', { bubbles: true, composed: true }))
  }

  render() {
    return html`
      <button class="root" part="root" type="button" role="menuitemradio" aria-checked=${String(this._checked)} @click=${this._onClick}>
        <span class="indicator">${this._checked ? '●' : ''}</span>
        <slot></slot>
      </button>
    `
  }
}

@customElement('shadcx-dropdown-menu-sub')
export class DropdownMenuSub extends LitElement {
  @state() private _open = false

  static styles = css`
    :host {
      position: relative;
      display: block;
    }

    :host(:hover) {
      --sub-open: 1;
    }
  `

  setOpen(value: boolean) {
    this._open = value
    this.querySelectorAll<DropdownMenuSubContent>('shadcx-dropdown-menu-sub-content').forEach((content) => {
      content.open = this._open
    })
  }

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-dropdown-menu-sub-trigger')
export class DropdownMenuSubTrigger extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: flex;
      }

      .root {
        all: unset;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: calc(var(--radius) - 4px);
        padding: 0.375rem 0.5rem;
        font-size: 0.875rem;
        cursor: pointer;
      }

      .root:hover,
      .root:focus-visible {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .chevron {
        margin-left: auto;
        color: hsl(var(--muted-foreground));
      }
    `,
  ]

  private get _sub() {
    return this.closest('shadcx-dropdown-menu-sub') as DropdownMenuSub | null
  }

  private _open() {
    this._sub?.setOpen(true)
  }

  private _close() {
    this._sub?.setOpen(false)
  }

  render() {
    return html`
      <button class="root" part="root" type="button" role="menuitem" @mouseenter=${this._open} @mouseleave=${this._close} @focus=${this._open}>
        <slot></slot>
        <span class="chevron">›</span>
      </button>
    `
  }
}

@customElement('shadcx-dropdown-menu-sub-content')
export class DropdownMenuSubContent extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false

  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        left: calc(100% + 0.25rem);
        top: 0;
        z-index: 60;
        min-width: 11rem;
      }

      :host(:not([open])) {
        display: none;
      }

      .root {
        overflow: hidden;
        border: 1px solid hsl(var(--border));
        border-radius: calc(var(--radius) - 2px);
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        padding: 0.25rem;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
      }
    `,
  ]

  render() {
    return html`<div class="root" part="root"><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-dropdown-menu': DropdownMenu
    'shadcx-dropdown-menu-trigger': DropdownMenuTrigger
    'shadcx-dropdown-menu-content': DropdownMenuContent
    'shadcx-dropdown-menu-group': DropdownMenuGroup
    'shadcx-dropdown-menu-label': DropdownMenuLabel
    'shadcx-dropdown-menu-separator': DropdownMenuSeparator
    'shadcx-dropdown-menu-shortcut': DropdownMenuShortcut
    'shadcx-dropdown-menu-item': DropdownMenuItem
    'shadcx-dropdown-menu-checkbox-item': DropdownMenuCheckboxItem
    'shadcx-dropdown-menu-radio-group': DropdownMenuRadioGroup
    'shadcx-dropdown-menu-radio-item': DropdownMenuRadioItem
    'shadcx-dropdown-menu-sub': DropdownMenuSub
    'shadcx-dropdown-menu-sub-trigger': DropdownMenuSubTrigger
    'shadcx-dropdown-menu-sub-content': DropdownMenuSubContent
  }
}
