import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type SwitchSize = 'default' | 'sm' | 'lg'

@customElement('shadcx-switch')
export class Switch extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: String, reflect: true }) size: SwitchSize = 'default'
  @property({ type: String, attribute: 'aria-invalid' }) ariaInvalid: string | null = null

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      .root {
        position: relative;
        appearance: none;
        border: 1px solid transparent;
        outline: none;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;
        border-radius: 9999px;
        transition:
          background-color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s,
          opacity 0.15s;
      }

      .root:focus-visible {
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .root:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .root[data-size='default'] {
        width: 2.25rem;
        height: 1.25rem;
      }

      .root[data-size='sm'] {
        width: 2rem;
        height: 1rem;
      }

      .root[data-size='lg'] {
        width: 2.75rem;
        height: 1.5rem;
      }

      .root[data-state='unchecked'] {
        background-color: hsl(var(--input));
      }

      .root[data-state='checked'] {
        background-color: hsl(var(--primary));
      }

      .root[aria-invalid='true'] {
        border-color: hsl(var(--destructive));
        box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
      }

      .thumb {
        display: block;
        border-radius: 9999px;
        background-color: hsl(var(--background));
        box-shadow:
          0 1px 2px 0 rgb(0 0 0 / 0.12),
          0 1px 1px 0 rgb(0 0 0 / 0.06);
        transition: transform 0.15s;
        will-change: transform;
      }

      .root[data-size='default'] .thumb {
        width: 1rem;
        height: 1rem;
        transform: translateX(0.125rem);
      }

      .root[data-size='default'][data-state='checked'] .thumb {
        transform: translateX(1.125rem);
      }

      .root[data-size='sm'] .thumb {
        width: 0.75rem;
        height: 0.75rem;
        transform: translateX(0.125rem);
      }

      .root[data-size='sm'][data-state='checked'] .thumb {
        transform: translateX(1.125rem);
      }

      .root[data-size='lg'] .thumb {
        width: 1.25rem;
        height: 1.25rem;
        transform: translateX(0.125rem);
      }

      .root[data-size='lg'][data-state='checked'] .thumb {
        transform: translateX(1.375rem);
      }
    `,
  ]

  private _toggle() {
    if (this.disabled) {
      return
    }

    this.checked = !this.checked

    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    this.dispatchEvent(
      new CustomEvent('checked-change', {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    )
  }

  private _onKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()
    this._toggle()
  }

  render() {
    return html`
      <button
        part="root"
        class="root"
        type="button"
        role="switch"
        data-size=${this.size}
        data-state=${this.checked ? 'checked' : 'unchecked'}
        aria-checked=${String(this.checked)}
        aria-invalid=${this.ariaInvalid || nothing}
        ?disabled=${this.disabled}
        @click=${this._toggle}
        @keydown=${this._onKeyDown}
      >
        <span part="thumb" class="thumb" aria-hidden="true"></span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-switch': Switch
  }
}
