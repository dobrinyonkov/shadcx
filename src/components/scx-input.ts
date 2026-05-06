const styles = `
  :host {
    display: block;
  }
  input {
    display: flex;
    width: 100%;
    min-width: 0;
    height: 2.25rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid hsl(var(--input));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  input::placeholder {
    color: hsl(var(--muted-foreground));
  }
  input:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  input[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  input[aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
  input[type='file'] {
    align-items: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  input[type='file']::file-selector-button {
    height: 1.75rem;
    margin: -0.125rem 0.75rem -0.125rem -0.5rem;
    padding: 0 0.625rem;
    border: 0;
    border-radius: calc(var(--radius) - 4px);
    background-color: transparent;
    color: hsl(var(--foreground));
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
  }
  input[type='file']::file-selector-button:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  @media (min-width: 768px) {
    input {
      font-size: 0.875rem;
    }
  }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><input part="input">`

export class ScxInput extends HTMLElement {
  static formAssociated = true
  private _internals: ElementInternals
  private _input: HTMLInputElement

  static get observedAttributes() {
    return ['type', 'placeholder', 'disabled', 'readonly', 'required', 'aria-invalid', 'value', 'name', 'list']
  }

  constructor() {
    super()
    this._internals = this.attachInternals()
    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true })
    shadow.appendChild(template.content.cloneNode(true))
    this._input = shadow.querySelector('input')!
    this._input.addEventListener('input', () => {
      this._internals.setFormValue(this._input.value)
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    })
    this._input.addEventListener('change', () => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    })
  }

  get value() {
    return this._input.value
  }
  set value(v: string) {
    this._input.value = v
    this._internals.setFormValue(v)
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'value') {
      this._input.value = value ?? ''
      this._internals.setFormValue(this._input.value)
    } else if (name === 'disabled' || name === 'readonly' || name === 'required') {
      this._input.toggleAttribute(name, value !== null)
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._input.setAttribute('aria-invalid', 'true')
      else this._input.removeAttribute('aria-invalid')
    } else {
      if (value !== null) this._input.setAttribute(name, value)
      else this._input.removeAttribute(name)
    }
  }
}

customElements.define('scx-input', ScxInput)
