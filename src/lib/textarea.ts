import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

@customElement('shadcx-textarea')
export class Textarea extends LitElement {
  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }

  @property({ type: String }) placeholder = ''
  @property({ type: String }) value = ''
  @property({ type: String }) name = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Number }) rows = 4
  @property({ type: String, attribute: 'aria-invalid' }) ariaInvalid: string | null = null

  static styles = [
    preflight,
    css`
      :host {
        display: block;
      }

      .root {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        min-height: 4rem;
        resize: vertical;
        border-radius: calc(var(--radius) - 2px);
        border: 1px solid hsl(var(--input));
        background-color: hsl(var(--background));
        padding-inline: 0.75rem;
        padding-block: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        color: hsl(var(--foreground));
        transition:
          color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s;
      }

      .root::placeholder {
        color: hsl(var(--muted-foreground));
      }

      .root:focus-visible {
        outline: none;
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .root:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .root[aria-invalid] {
        border-color: hsl(var(--destructive));
      }

      @media (min-width: 768px) {
        .root {
          font-size: 0.875rem;
        }
      }
    `,
  ]

  private _onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement
    this.value = target.value
    this.dispatchEvent(
      new CustomEvent('shadcx-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override focus(options?: FocusOptions) {
    const textarea = this.shadowRoot?.querySelector<HTMLTextAreaElement>('.root')
    textarea?.focus(options)
  }

  render() {
    return html`
      <textarea
        part="root"
        class="root"
        name=${this.name}
        placeholder=${this.placeholder}
        .value=${this.value}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        rows=${this.rows}
        aria-invalid=${this.ariaInvalid || nothing}
        @input=${this._onInput}
      ></textarea>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-textarea': Textarea
  }
}
