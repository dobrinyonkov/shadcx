import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate'

@customElement('shadcx-checkbox')
export class Checkbox extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) indeterminate = false
  @property({ type: Boolean, reflect: true }) disabled = false
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
      appearance: none;
      border: 1px solid hsl(var(--primary));
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      outline: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: transparent;
      cursor: pointer;
      transition:
        background-color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s,
        color 0.15s;
    }

    .root:focus-visible {
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    .root:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .root[data-state='checked'],
    .root[data-state='indeterminate'] {
      border-color: hsl(var(--primary));
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }

    .root[aria-invalid='true'] {
      border-color: hsl(var(--destructive));
      box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
    }

    .indicator {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .icon {
      width: 0.875rem;
      height: 0.875rem;
      stroke: currentColor;
      fill: none;
      stroke-width: 2.25;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
  ]

  private get _state(): CheckboxState {
    if (this.indeterminate) {
      return 'indeterminate'
    }

    return this.checked ? 'checked' : 'unchecked'
  }

  private _toggle() {
    if (this.disabled) {
      return
    }

    if (this.indeterminate) {
      this.indeterminate = false
      this.checked = true
    } else {
      this.checked = !this.checked
    }

    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    this.dispatchEvent(
      new CustomEvent('checked-change', {
        detail: {
          checked: this.checked,
          indeterminate: this.indeterminate,
          state: this._state,
        },
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
        role="checkbox"
        data-state=${this._state}
        aria-checked=${this.indeterminate ? 'mixed' : String(this.checked)}
        aria-invalid=${this.ariaInvalid || nothing}
        ?disabled=${this.disabled}
        @click=${this._toggle}
        @keydown=${this._onKeyDown}
      >
        <span part="indicator" class="indicator" aria-hidden="true">
          ${this._state === 'checked'
            ? html`<svg class="icon" viewBox="0 0 16 16"><polyline points="3.5 8.5 6.8 11.8 12.5 5.5" /></svg>`
            : this._state === 'indeterminate'
              ? html`<svg class="icon" viewBox="0 0 16 16"><line x1="3.5" y1="8" x2="12.5" y2="8" /></svg>`
              : nothing}
        </span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-checkbox': Checkbox
  }
}
