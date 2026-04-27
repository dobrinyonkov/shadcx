import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type PopoverAlign = 'start' | 'center' | 'end'

@customElement('shadcx-popover')
export class Popover extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false

  static styles = [
    preflight,
    css`
      :host {
        position: relative;
        display: inline-flex;
      }
    `,
  ]

  private readonly _onDocumentMouseDown = (event: MouseEvent) => {
    if (!this.open) {
      return
    }

    const target = event.target as Node | null
    if (target && !this.contains(target)) {
      this.close()
    }
  }

  private readonly _onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      this.close()
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('shadcx-popover-toggle', this._onToggle as EventListener)
    this.addEventListener('shadcx-popover-open', this._onOpen as EventListener)
    this.addEventListener('shadcx-popover-close', this._onClose as EventListener)
    document.addEventListener('mousedown', this._onDocumentMouseDown)
    document.addEventListener('keydown', this._onKeyDown)
  }

  disconnectedCallback() {
    this.removeEventListener('shadcx-popover-toggle', this._onToggle as EventListener)
    this.removeEventListener('shadcx-popover-open', this._onOpen as EventListener)
    this.removeEventListener('shadcx-popover-close', this._onClose as EventListener)
    document.removeEventListener('mousedown', this._onDocumentMouseDown)
    document.removeEventListener('keydown', this._onKeyDown)
    super.disconnectedCallback()
  }

  updated(changed: Map<string, unknown>) {
    if (!changed.has('open')) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('open-change', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    )
  }

  openPopover() {
    this.open = true
  }

  close() {
    this.open = false
  }

  toggle() {
    this.open = !this.open
  }

  private _onToggle = () => this.toggle()
  private _onOpen = () => this.openPopover()
  private _onClose = () => this.close()

  render() {
    return html`<slot></slot>`
  }
}

@customElement('shadcx-popover-trigger')
export class PopoverTrigger extends LitElement {
  @state() private _open = false

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
      }

      .root {
        text-transform: none;
        appearance: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        white-space: nowrap;
        border-radius: calc(var(--radius) - 2px);
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid hsl(var(--input));
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        height: 2.25rem;
        padding-inline: 1rem;
        outline: none;
        transition:
          color 0.15s,
          background-color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s;
      }

      .root:hover {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .root:focus-visible {
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.closest('shadcx-popover')?.addEventListener('open-change', this._syncOpen as EventListener)
  }

  disconnectedCallback() {
    this.closest('shadcx-popover')?.removeEventListener('open-change', this._syncOpen as EventListener)
    super.disconnectedCallback()
  }

  private _syncOpen = (event: CustomEvent<{ open: boolean }>) => {
    this._open = event.detail.open
  }

  private _togglePopover() {
    this.dispatchEvent(new CustomEvent('shadcx-popover-toggle', { bubbles: true, composed: true }))
  }

  render() {
    return html`
      <button
        part="root"
        class="root"
        type="button"
        aria-haspopup="dialog"
        aria-expanded=${String(this._open)}
        @click=${this._togglePopover}
      >
        <slot></slot>
      </button>
    `
  }
}

@customElement('shadcx-popover-content')
export class PopoverContent extends LitElement {
  @property({ type: String, reflect: true }) align: PopoverAlign = 'center'
  @property({ type: Number, attribute: 'side-offset' }) sideOffset = 4
  @state() private _open = false

  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        z-index: 50;
        min-width: 16rem;
        top: calc(100% + var(--_side-offset, 0.25rem));
      }

      :host([align='start']) {
        left: 0;
      }

      :host([align='center']) {
        left: 50%;
        transform: translateX(-50%);
      }

      :host([align='end']) {
        right: 0;
      }

      .root {
        border: 1px solid hsl(var(--border));
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        border-radius: calc(var(--radius) - 2px);
        padding: 1rem;
        box-shadow:
          0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1);
      }

      :host([data-state='closed']) {
        pointer-events: none;
      }

      :host([data-state='closed']) .root {
        opacity: 0;
        transform: translateY(-0.25rem);
      }

      :host([data-state='open']) .root {
        opacity: 1;
        transform: translateY(0);
      }

      .root {
        transition: opacity 0.15s ease, transform 0.15s ease;
      }
    `,
  ]

  connectedCallback() {
    super.connectedCallback()
    this.style.setProperty('--_side-offset', `${this.sideOffset}px`)
    this.closest('shadcx-popover')?.addEventListener('open-change', this._syncOpen as EventListener)
  }

  disconnectedCallback() {
    this.closest('shadcx-popover')?.removeEventListener('open-change', this._syncOpen as EventListener)
    super.disconnectedCallback()
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('sideOffset')) {
      this.style.setProperty('--_side-offset', `${this.sideOffset}px`)
    }

    this.setAttribute('data-state', this._open ? 'open' : 'closed')
  }

  private _syncOpen = (event: CustomEvent<{ open: boolean }>) => {
    this._open = event.detail.open
  }

  render() {
    return html`
      <div part="root" class="root" role="dialog" aria-hidden=${String(!this._open)}>
        <slot></slot>
      </div>
    `
  }
}

@customElement('shadcx-popover-header')
export class PopoverHeader extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: grid;
        gap: 0.125rem;
      }
    `,
  ]

  render() {
    return html`<div part="root"><slot></slot></div>`
  }
}

@customElement('shadcx-popover-title')
export class PopoverTitle extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: block;
      }

      .root {
        margin: 0;
        font-size: 0.9375rem;
        line-height: 1.25;
        font-weight: 600;
        color: hsl(var(--popover-foreground));
      }
    `,
  ]

  render() {
    return html`<h3 part="root" class="root"><slot></slot></h3>`
  }
}

@customElement('shadcx-popover-description')
export class PopoverDescription extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: block;
      }

      .root {
        margin: 0;
        font-size: 0.8125rem;
        line-height: 1.45;
        color: hsl(var(--muted-foreground));
      }
    `,
  ]

  render() {
    return html`<p part="root" class="root"><slot></slot></p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-popover': Popover
    'shadcx-popover-trigger': PopoverTrigger
    'shadcx-popover-content': PopoverContent
    'shadcx-popover-header': PopoverHeader
    'shadcx-popover-title': PopoverTitle
    'shadcx-popover-description': PopoverDescription
  }
}
