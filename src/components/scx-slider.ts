const styles = `
  :host {
    display: block;
  }
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 1.25rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    touch-action: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 0.375rem;
    border-radius: 9999px;
    background-color: hsl(var(--primary) / 0.2);
  }
  input[type='range']::-moz-range-track {
    height: 0.375rem;
    border-radius: 9999px;
    background-color: hsl(var(--primary) / 0.2);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: -0.4375rem;
    border-radius: 9999px;
    border: 2px solid hsl(var(--primary));
    background-color: hsl(var(--background));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input[type='range']::-moz-range-thumb {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    border: 2px solid hsl(var(--primary));
    background-color: hsl(var(--background));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input[type='range']:focus-visible::-webkit-slider-thumb {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='range']:focus-visible::-moz-range-thumb {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='range']:focus-visible {
    outline: none;
  }
  input[type='range']:focus-visible::-moz-focus-outer {
    border: 0;
  }
  input[type='range']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  input[type='range']:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }
  input[type='range']:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
  input[type='range'][data-orientation='vertical'] {
    writing-mode: vertical-lr;
    direction: rtl;
    width: 1.25rem;
    height: 12rem;
  }
  input[type='range'][data-orientation='vertical']::-webkit-slider-runnable-track {
    width: 0.375rem;
    height: 100%;
  }
  input[type='range'][data-orientation='vertical']::-webkit-slider-thumb {
    margin-left: -0.4375rem;
    margin-top: 0;
  }
  input[type='range'][data-orientation='vertical']::-moz-range-track {
    width: 0.375rem;
    height: 100%;
  }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><input type="range" part="slider">`

export class ScxSlider extends HTMLElement {
  static formAssociated = true
  private _internals: ElementInternals
  private _input: HTMLInputElement

  static get observedAttributes() {
    return ['min', 'max', 'step', 'value', 'disabled', 'aria-invalid', 'orientation', 'name']
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
    if (name === 'disabled') {
      this._input.toggleAttribute('disabled', value !== null)
    } else if (name === 'orientation') {
      if (value === 'vertical') this._input.setAttribute('data-orientation', 'vertical')
      else this._input.removeAttribute('data-orientation')
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._input.setAttribute('aria-invalid', 'true')
      else this._input.removeAttribute('aria-invalid')
    } else {
      if (value !== null) this._input.setAttribute(name, value)
      else this._input.removeAttribute(name)
    }
  }
}

customElements.define('scx-slider', ScxSlider)
