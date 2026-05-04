const styles = `
  :host {
    display: block;
  }
  textarea {
    display: flex;
    field-sizing: content;
    width: 100%;
    min-width: 0;
    min-height: 4rem;
    padding: 0.5rem 0.625rem;
    border: 1px solid hsl(var(--input));
    border-radius: var(--radius);
    background-color: transparent;
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  textarea::placeholder {
    color: hsl(var(--muted-foreground));
  }
  textarea:focus-visible {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }
  textarea:disabled {
    cursor: not-allowed;
    background-color: hsl(var(--input) / 0.5);
    opacity: 0.5;
  }
  textarea[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
  }
  @media (min-width: 768px) {
    textarea {
      font-size: 0.875rem;
    }
  }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><textarea part="textarea"></textarea>`

export class ScxTextarea extends HTMLElement {
  static formAssociated = true
  private _internals: ElementInternals
  private _textarea: HTMLTextAreaElement

  static get observedAttributes() {
    return ['placeholder', 'disabled', 'readonly', 'required', 'aria-invalid', 'rows', 'value', 'name']
  }

  constructor() {
    super()
    this._internals = this.attachInternals()
    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true })
    shadow.appendChild(template.content.cloneNode(true))
    this._textarea = shadow.querySelector('textarea')!
    this._textarea.addEventListener('input', () => {
      this._internals.setFormValue(this._textarea.value)
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    })
    this._textarea.addEventListener('change', () => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    })
  }

  get value() {
    return this._textarea.value
  }
  set value(v: string) {
    this._textarea.value = v
    this._internals.setFormValue(v)
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'value') {
      this._textarea.value = value ?? ''
      this._internals.setFormValue(this._textarea.value)
    } else if (name === 'disabled' || name === 'readonly' || name === 'required') {
      this._textarea.toggleAttribute(name, value !== null)
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._textarea.setAttribute('aria-invalid', 'true')
      else this._textarea.removeAttribute('aria-invalid')
    } else {
      if (value !== null) this._textarea.setAttribute(name, value)
      else this._textarea.removeAttribute(name)
    }
  }
}

customElements.define('scx-textarea', ScxTextarea)
