const styles = `
  :host {
    display: inline-flex;
  }
  input[type='checkbox'] {
    appearance: none;
    display: inline-grid;
    place-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid hsl(var(--primary));
    border-radius: calc(var(--radius) - 4px);
    background-color: hsl(var(--background));
    color: transparent;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    cursor: pointer;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  input[type='checkbox']::before {
    content: '';
    width: 0.625rem;
    height: 0.625rem;
    transform: scale(0);
    transform-origin: center;
    background-color: currentColor;
    clip-path: polygon(14% 44%, 0 58%, 38% 96%, 100% 18%, 86% 6%, 36% 68%);
    transition: transform 0.12s ease;
  }
  input[type='checkbox']:checked,
  input[type='checkbox']:indeterminate {
    border-color: hsl(var(--primary));
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:indeterminate::before {
    width: 0.625rem;
    height: 0.125rem;
    clip-path: none;
    transform: scale(1);
  }
  input[type='checkbox']:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='checkbox']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  input[type='checkbox'][aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  input[type='checkbox'][aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><input type="checkbox" part="checkbox">`

export class ScxCheckbox extends HTMLElement {
  static formAssociated = true
  private _internals: ElementInternals
  private _input: HTMLInputElement

  static get observedAttributes() {
    return ['checked', 'indeterminate', 'disabled', 'aria-invalid', 'name']
  }

  constructor() {
    super()
    this._internals = this.attachInternals()
    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true })
    shadow.appendChild(template.content.cloneNode(true))
    this._input = shadow.querySelector('input')!
    this._input.addEventListener('change', () => {
      this._internals.setFormValue(this._input.checked ? 'on' : '')
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    })
  }

  get checked() {
    return this._input.checked
  }
  set checked(v: boolean) {
    this._input.checked = v
    this._internals.setFormValue(v ? 'on' : '')
  }

  get indeterminate() {
    return this._input.indeterminate
  }
  set indeterminate(v: boolean) {
    this._input.indeterminate = v
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'checked') {
      this._input.checked = value !== null
      this._internals.setFormValue(this._input.checked ? 'on' : '')
    } else if (name === 'indeterminate') {
      this._input.indeterminate = value !== null
    } else if (name === 'disabled') {
      this._input.toggleAttribute('disabled', value !== null)
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._input.setAttribute('aria-invalid', 'true')
      else this._input.removeAttribute('aria-invalid')
    }
  }
}

customElements.define('scx-checkbox', ScxCheckbox)
