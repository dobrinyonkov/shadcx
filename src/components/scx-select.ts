const styles = `
  :host {
    display: block;
  }
  select {
    display: flex;
    width: 100%;
    max-width: 24rem;
    min-width: 0;
    height: 2.25rem;
    padding: 0.25rem 2rem 0.25rem 0.75rem;
    border: 1px solid hsl(var(--input));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  select:not([multiple]) {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, hsl(var(--muted-foreground)) 50%), linear-gradient(135deg, hsl(var(--muted-foreground)) 50%, transparent 50%);
    background-position: calc(100% - 1rem) 50%, calc(100% - 0.7rem) 50%;
    background-size: 0.3rem 0.3rem, 0.3rem 0.3rem;
    background-repeat: no-repeat;
  }
  select[multiple] {
    height: auto;
    min-height: 8rem;
    padding: 0.25rem;
  }
  select:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  select:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  select[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  select[aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
  select option {
    padding: 0.5rem;
    background-color: hsl(var(--popover));
    color: hsl(var(--popover-foreground));
  }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><select part="select"></select>`

export class ScxSelect extends HTMLElement {
  static formAssociated = true
  private _internals: ElementInternals
  private _select: HTMLSelectElement
  private _observer?: MutationObserver

  static get observedAttributes() {
    return ['disabled', 'aria-invalid', 'multiple', 'name', 'value']
  }

  constructor() {
    super()
    this._internals = this.attachInternals()
    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true })
    shadow.appendChild(template.content.cloneNode(true))
    this._select = shadow.querySelector('select')!
    this._select.addEventListener('change', () => {
      this._internals.setFormValue(this._select.value)
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    })
  }

  connectedCallback() {
    this._syncOptions()
    this._observer = new MutationObserver(() => this._syncOptions())
    this._observer.observe(this, { childList: true, subtree: true })
  }

  disconnectedCallback() {
    this._observer?.disconnect()
  }

  get value() {
    return this._select.value
  }
  set value(v: string) {
    this._select.value = v
    this._internals.setFormValue(v)
  }

  private _syncOptions() {
    const savedValue = this._select.value
    this._select.innerHTML = ''
    for (const child of Array.from(this.children)) {
      if (child instanceof HTMLOptionElement || child instanceof HTMLOptGroupElement) {
        this._select.appendChild(child.cloneNode(true))
      }
    }
    if (this.hasAttribute('value')) {
      this._select.value = this.getAttribute('value')!
    } else if (savedValue) {
      this._select.value = savedValue
    }
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'disabled') {
      this._select.toggleAttribute('disabled', value !== null)
    } else if (name === 'multiple') {
      this._select.toggleAttribute('multiple', value !== null)
      this._syncOptions()
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._select.setAttribute('aria-invalid', 'true')
      else this._select.removeAttribute('aria-invalid')
    } else if (name === 'value') {
      if (value !== null) this._select.value = value
    } else {
      if (value !== null) this._select.setAttribute(name, value)
      else this._select.removeAttribute(name)
    }
  }
}

customElements.define('scx-select', ScxSelect)
