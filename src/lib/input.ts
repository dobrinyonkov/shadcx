import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('shadcx-input')
export class Input extends LitElement {
  @property({ type: String }) type = 'text'
  @property({ type: String }) placeholder = ''
  @property({ type: String }) value = ''
  @property({ type: String }) name = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) readonly = false

  static styles = css`
    :host {
      display: inline-flex;
      width: 100%;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .root {
      display: flex;
      width: 100%;
      height: 2.25rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-family: inherit;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--input));
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      outline: none;
      box-sizing: border-box;
      transition:
        border-color 0.15s,
        box-shadow 0.15s;
    }

    .root::placeholder {
      color: hsl(var(--muted-foreground));
    }

    .root:focus {
      border-color: hsl(var(--ring));
      box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }

    .root:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .root[aria-invalid='true'] {
      border-color: hsl(var(--destructive));
    }

    .root[aria-invalid='true']:focus {
      box-shadow: 0 0 0 2px hsl(var(--destructive) / 0.2);
    }

    /* file input */
    .root[type='file'] {
      padding: 0.375rem;
      cursor: pointer;
    }
    .root[type='file']::file-selector-button {
      height: 1.75rem;
      padding: 0 0.75rem;
      margin-right: 0.5rem;
      font-size: 0.8125rem;
      font-family: inherit;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--input));
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      transition:
        background-color 0.15s,
        color 0.15s;
    }
    .root[type='file']::file-selector-button:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  `

  private _onInput(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value
    this.dispatchEvent(
      new CustomEvent('shadcx-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`
      <input
        part="root"
        class="root"
        type=${this.type}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .name=${this.name}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        @input=${this._onInput}
      />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-input': Input
  }
}
