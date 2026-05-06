export type DropdownMenuItemVariant = 'default' | 'destructive'

const preflight = `
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
  button { appearance: none; background: transparent; background-image: none; }
  [hidden] { display: none !important; }
`

const rootStyles = `
  ${preflight}
  :host {
    display: inline-block;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }
`

const triggerStyles = `
  ${preflight}
  :host { display: inline-flex; }
  .root { display: inline-flex; cursor: pointer; }
`

const contentStyles = `
  ${preflight}
  :host {
    display: none;
    position: absolute;
    inset-block-start: calc(100% + 0.25rem);
    inset-inline-start: 0;
    z-index: 50;
    min-width: var(--shadcx-dropdown-menu-width, 12rem);
  }
  :host([align='end']) { inset-inline-start: auto; inset-inline-end: 0; }
  :host([data-side='top']) { inset-block-start: auto; inset-block-end: calc(100% + 0.25rem); }
  :host([data-align='end']) { inset-inline-start: auto; inset-inline-end: 0; }
  :host([data-open]) { display: block; }
  .root {
    min-width: inherit;
    overflow: visible;
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--popover));
    color: hsl(var(--popover-foreground));
    padding: 0.25rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  :host([data-constrain]) .root {
    max-height: min(24rem, calc(100svh - 1rem));
    overflow: auto;
  }
`

const groupStyles = `
  ${preflight}
  :host { display: block; }
  .root { display: grid; gap: 0.125rem; }
`

const labelStyles = `
  ${preflight}
  :host { display: block; }
  .root { padding: 0.375rem 0.5rem; font-size: 0.8125rem; font-weight: 600; color: hsl(var(--foreground)); }
`

const separatorStyles = `
  ${preflight}
  :host { display: block; }
  .root { height: 1px; margin: 0.25rem -0.25rem; background-color: hsl(var(--border)); }
`

const itemStyles = `
  ${preflight}
  :host { display: block; }
  :host([disabled]) { pointer-events: none; opacity: 0.5; }
  .root {
    width: 100%;
    min-height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    border-radius: calc(var(--radius) - 4px);
    background-color: transparent;
    color: hsl(var(--popover-foreground));
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25;
    outline: none;
    padding: 0.375rem 0.5rem;
    text-align: start;
    user-select: none;
  }
  .root:hover, .root:focus-visible {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  [data-variant='destructive'] { color: hsl(var(--destructive)); }
  [data-variant='destructive']:hover, [data-variant='destructive']:focus-visible {
    background-color: hsl(var(--destructive) / 0.1);
    color: hsl(var(--destructive));
  }
  .indicator { width: 1rem; flex: 0 0 1rem; color: hsl(var(--primary)); text-align: center; }
  .content { display: inline-flex; min-width: 0; flex: 1; align-items: center; gap: 0.5rem; }
  .root ::slotted(svg), .root ::slotted([data-icon]) { width: 1rem; height: 1rem; flex-shrink: 0; }
`

const shortcutStyles = `
  ${preflight}
  :host { margin-inline-start: auto; }
  .root { color: hsl(var(--muted-foreground)); font-size: 0.75rem; letter-spacing: 0.08em; }
`

const subStyles = `
  ${preflight}
  :host {
    display: block;
    position: relative;
  }
  :host(:hover) ::slotted(shadcx-dropdown-menu-sub-content),
  :host(:focus-within) ::slotted(shadcx-dropdown-menu-sub-content),
  :host([open]) ::slotted(shadcx-dropdown-menu-sub-content) { display: block; }
`

const subTriggerStyles = `
  ${itemStyles}
  .chevron { margin-inline-start: auto; color: hsl(var(--muted-foreground)); }
`

const subContentStyles = `
  ${contentStyles}
  :host {
    display: none;
    inset-block-start: -0.25rem;
    inset-inline-start: calc(100% + 0.25rem);
  }
  :host([data-side='left']) { inset-inline-start: auto; inset-inline-end: calc(100% + 0.25rem); }
`

function defineElement(tag: string, element: CustomElementConstructor) {
  if (!customElements.get(tag)) customElements.define(tag, element)
}

abstract class SlotElement extends HTMLElement {
  protected abstract styles: string
  protected partName = 'root'
  protected rootClassName = 'root'

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `<style>${this.styles}</style><div part="${this.partName}" class="${this.rootClassName}"><slot></slot></div>`
  }
}

export class DropdownMenu extends HTMLElement {
  static observedAttributes = ['open']

  get open() {
    return this.hasAttribute('open')
  }

  set open(value: boolean) {
    this.toggleAttribute('open', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    window.addEventListener('pointerdown', this.onWindowPointerDown)
    window.addEventListener('keydown', this.onWindowKeyDown)
    this.addEventListener('click', this.onClick)
    this.addEventListener('keydown', this.onKeyDown)
    this.render()
    this.syncContent()
  }

  disconnectedCallback() {
    window.removeEventListener('pointerdown', this.onWindowPointerDown)
    window.removeEventListener('keydown', this.onWindowKeyDown)
    this.removeEventListener('click', this.onClick)
    this.removeEventListener('keydown', this.onKeyDown)
  }

  attributeChangedCallback() {
    this.syncContent()
  }

  private onWindowPointerDown = (event: PointerEvent) => {
    if (!event.composedPath().includes(this)) this.open = false
  }

  private onWindowKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.open = false
  }

  private onClick = (event: Event) => {
    const path = event.composedPath()
    if (path.some((node) => node instanceof DropdownMenuTrigger)) {
      this.open = !this.open
      return
    }

    const item = path.find((node) => node instanceof DropdownMenuItem) as DropdownMenuItem | undefined
    if (item && !item.disabled) this.open = false
  }

  private onKeyDown = (event: KeyboardEvent) => {
    const path = event.composedPath()
    const fromTrigger = path.some((node) => node instanceof DropdownMenuTrigger)

    if (fromTrigger && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault()
      this.open = true
      this.focusMenuItem(event.key === 'ArrowUp' ? 'last' : 'first')
      return
    }

    if (!this.open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this.focusMenuItem('next')
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this.focusMenuItem('previous')
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      this.focusMenuItem('first')
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      this.focusMenuItem('last')
    }
  }

  private getMenuItems() {
    const selector = [
      'shadcx-dropdown-menu-item',
      'shadcx-dropdown-menu-checkbox-item',
      'shadcx-dropdown-menu-radio-item',
      'shadcx-dropdown-menu-sub-trigger',
    ].join(',')

    return Array.from(this.querySelectorAll(selector)).filter((item) => {
      if (item instanceof DropdownMenuItem && item.disabled) return false
      return item instanceof HTMLElement
    }) as HTMLElement[]
  }

  private getItemButton(item: HTMLElement) {
    return item.shadowRoot?.querySelector<HTMLButtonElement>('button') ?? null
  }

  private focusMenuItem(position: 'first' | 'last' | 'next' | 'previous') {
    const items = this.getMenuItems()
    if (items.length === 0) return

    const activeIndex = items.findIndex((item) => item.shadowRoot?.activeElement === this.getItemButton(item))
    let nextIndex = 0

    if (position === 'last') nextIndex = items.length - 1
    if (position === 'next') nextIndex = activeIndex >= 0 ? (activeIndex + 1) % items.length : 0
    if (position === 'previous') nextIndex = activeIndex >= 0 ? (activeIndex - 1 + items.length) % items.length : items.length - 1

    requestAnimationFrame(() => this.getItemButton(items[nextIndex])?.focus())
  }

  private syncContent() {
    this.querySelectorAll('shadcx-dropdown-menu-content').forEach((content) => {
      content.toggleAttribute('data-open', this.open)
      content.setAttribute('data-align', content.getAttribute('align') ?? 'start')
    })

    if (this.open) requestAnimationFrame(() => this.updatePlacement())
  }

  private updatePlacement() {
    const trigger = this.querySelector('shadcx-dropdown-menu-trigger')
    const content = this.querySelector('shadcx-dropdown-menu-content')
    if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement)) return

    const triggerRect = trigger.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()
    const gap = 4
    const spaceBelow = window.innerHeight - triggerRect.bottom - gap
    const spaceAbove = triggerRect.top - gap
    const shouldOpenTop = contentRect.height > spaceBelow && spaceAbove > spaceBelow

    content.setAttribute('data-side', shouldOpenTop ? 'top' : 'bottom')
    content.toggleAttribute('data-constrain', Math.max(spaceBelow, spaceAbove) < contentRect.height)

    this.querySelectorAll('shadcx-dropdown-menu-sub').forEach((sub) => {
      if (sub instanceof DropdownMenuSub) sub.updatePlacement()
    })
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `<style>${rootStyles}</style><slot></slot>`
  }
}

export class DropdownMenuTrigger extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `<style>${triggerStyles}</style><span part="root" class="root"><slot></slot></span>`
  }
}

export class DropdownMenuContent extends SlotElement {
  static observedAttributes = ['align', 'data-open']
  protected styles = contentStyles
}

export class DropdownMenuGroup extends SlotElement {
  protected styles = groupStyles
}

export class DropdownMenuLabel extends SlotElement {
  protected styles = labelStyles
}

export class DropdownMenuSeparator extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `<style>${separatorStyles}</style><div part="root" class="root" role="separator"></div>`
  }
}

export class DropdownMenuItem extends HTMLElement {
  static observedAttributes = ['variant', 'disabled']

  get variant(): DropdownMenuItemVariant {
    return (this.getAttribute('variant') as DropdownMenuItemVariant | null) ?? 'default'
  }

  set variant(value: DropdownMenuItemVariant) {
    this.setAttribute('variant', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  protected get indicator() {
    return ''
  }

  protected get itemRole() {
    return 'menuitem'
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `
      <style>${itemStyles}</style>
      <button part="root" class="root" type="button" role="${this.itemRole}" data-variant="${this.variant}" ${this.disabled ? 'disabled' : ''}>
        ${this.indicator ? `<span class="indicator">${this.indicator}</span>` : ''}
        <span class="content"><slot></slot></span>
      </button>
    `
  }
}

export class DropdownMenuCheckboxItem extends DropdownMenuItem {
  static observedAttributes = ['variant', 'disabled', 'checked']

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value: boolean) {
    this.toggleAttribute('checked', value)
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('click', this.onClick)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick)
  }

  protected get indicator() {
    return this.checked ? '✓' : ''
  }

  protected get itemRole() {
    return 'menuitemcheckbox'
  }

  protected render() {
    super.render()
    this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked))
  }

  private onClick = () => {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(new CustomEvent('checked-change', { detail: { checked: this.checked }, bubbles: true, composed: true }))
  }
}

export class DropdownMenuRadioGroup extends HTMLElement {
  static observedAttributes = ['value']

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    if (value) this.setAttribute('value', value)
    else this.removeAttribute('value')
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.addEventListener('click', this.onClick)
    this.render()
    this.syncItems()
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick)
  }

  attributeChangedCallback() {
    this.syncItems()
  }

  private onClick = (event: Event) => {
    const item = event.composedPath().find((node) => node instanceof DropdownMenuRadioItem) as DropdownMenuRadioItem | undefined
    if (!item || item.disabled) return
    this.value = item.value
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.value }, bubbles: true, composed: true }))
  }

  private syncItems() {
    this.querySelectorAll('shadcx-dropdown-menu-radio-item').forEach((item) => {
      if (!(item instanceof DropdownMenuRadioItem)) return
      item.checked = item.value === this.value
    })
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `<style>${groupStyles}</style><div part="root" class="root" role="group"><slot></slot></div>`
  }
}

export class DropdownMenuRadioItem extends DropdownMenuItem {
  static observedAttributes = ['variant', 'disabled', 'checked', 'value']

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value: boolean) {
    this.toggleAttribute('checked', value)
  }

  protected get indicator() {
    return this.checked ? '•' : ''
  }

  protected get itemRole() {
    return 'menuitemradio'
  }

  protected render() {
    super.render()
    this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked))
  }
}

export class DropdownMenuShortcut extends SlotElement {
  protected styles = shortcutStyles
}

export class DropdownMenuSub extends SlotElement {
  protected styles = subStyles

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('pointerenter', this.openSubmenu)
    this.addEventListener('focusin', this.openSubmenu)
  }

  disconnectedCallback() {
    this.removeEventListener('pointerenter', this.openSubmenu)
    this.removeEventListener('focusin', this.openSubmenu)
  }

  private openSubmenu = () => {
    this.setAttribute('open', '')
    requestAnimationFrame(() => this.updatePlacement())
  }

  updatePlacement() {
    const trigger = this.querySelector('shadcx-dropdown-menu-sub-trigger')
    const content = this.querySelector('shadcx-dropdown-menu-sub-content')
    if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement)) return

    const triggerRect = trigger.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()
    const gap = 4
    const spaceRight = window.innerWidth - triggerRect.right - gap
    const spaceLeft = triggerRect.left - gap
    const shouldOpenLeft = contentRect.width > spaceRight && spaceLeft > spaceRight

    content.setAttribute('data-side', shouldOpenLeft ? 'left' : 'right')
  }
}

export class DropdownMenuSubTrigger extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `
      <style>${subTriggerStyles}</style>
      <button part="root" class="root" type="button" role="menuitem" aria-haspopup="menu">
        <span class="content"><slot></slot></span><span class="chevron">›</span>
      </button>
    `
  }
}

export class DropdownMenuSubContent extends SlotElement {
  protected styles = subContentStyles
}

defineElement('shadcx-dropdown-menu', DropdownMenu)
defineElement('shadcx-dropdown-menu-trigger', DropdownMenuTrigger)
defineElement('shadcx-dropdown-menu-content', DropdownMenuContent)
defineElement('shadcx-dropdown-menu-group', DropdownMenuGroup)
defineElement('shadcx-dropdown-menu-label', DropdownMenuLabel)
defineElement('shadcx-dropdown-menu-separator', DropdownMenuSeparator)
defineElement('shadcx-dropdown-menu-item', DropdownMenuItem)
defineElement('shadcx-dropdown-menu-checkbox-item', DropdownMenuCheckboxItem)
defineElement('shadcx-dropdown-menu-radio-group', DropdownMenuRadioGroup)
defineElement('shadcx-dropdown-menu-radio-item', DropdownMenuRadioItem)
defineElement('shadcx-dropdown-menu-shortcut', DropdownMenuShortcut)
defineElement('shadcx-dropdown-menu-sub', DropdownMenuSub)
defineElement('shadcx-dropdown-menu-sub-trigger', DropdownMenuSubTrigger)
defineElement('shadcx-dropdown-menu-sub-content', DropdownMenuSubContent)

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-dropdown-menu': DropdownMenu
    'shadcx-dropdown-menu-trigger': DropdownMenuTrigger
    'shadcx-dropdown-menu-content': DropdownMenuContent
    'shadcx-dropdown-menu-group': DropdownMenuGroup
    'shadcx-dropdown-menu-label': DropdownMenuLabel
    'shadcx-dropdown-menu-separator': DropdownMenuSeparator
    'shadcx-dropdown-menu-item': DropdownMenuItem
    'shadcx-dropdown-menu-checkbox-item': DropdownMenuCheckboxItem
    'shadcx-dropdown-menu-radio-group': DropdownMenuRadioGroup
    'shadcx-dropdown-menu-radio-item': DropdownMenuRadioItem
    'shadcx-dropdown-menu-shortcut': DropdownMenuShortcut
    'shadcx-dropdown-menu-sub': DropdownMenuSub
    'shadcx-dropdown-menu-sub-trigger': DropdownMenuSubTrigger
    'shadcx-dropdown-menu-sub-content': DropdownMenuSubContent
  }
}
