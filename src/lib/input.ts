import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('shadcx-input')
export class Input extends LitElement {
  @property({ type: String }) type = 'text'
  @property({ type: String }) placeholder = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: String, attribute: 'aria-invalid' }) ariaInvalid: string | null = null

  static styles = css`
    :host {
      display: flex;
    }

    .root {
      margin: 0;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
      display: flex;
      width: 100%;
      height: 2.25rem;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--input));
      background-color: hsl(var(--background));
      padding-inline: 0.75rem;
      padding-block: 0.25rem;
      font-size: 1rem;
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

    .root::file-selector-button {
      border: 0;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 500;
      color: hsl(var(--foreground));
    }

    .root[aria-invalid] {
      border-color: hsl(var(--destructive));
    }

    @media (min-width: 768px) {
      .root {
        font-size: 0.875rem;
      }
    }
  `

  render() {
    return html`
      <input
        part="root"
        class="root"
        type=${this.type}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        aria-invalid=${this.ariaInvalid || nothing}
      >
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-input': Input
  }
}
