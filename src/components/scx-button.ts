const styles = `
  :host {
    display: inline-flex;
  }
  button {
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid transparent;
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  button:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
  button:disabled,
  button[aria-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
  }
  ::slotted(svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    pointer-events: none;
  }
  button[data-size='xs'] { height: 1.75rem; padding-inline: 0.5rem; font-size: 0.8125rem; }
  button[data-size='sm'] { height: 2rem; padding-inline: 0.75rem; font-size: 0.8125rem; }
  button[data-size='lg'] { height: 2.5rem; padding-inline: 1.5rem; }
  button[data-size='icon'] { width: 2.25rem; padding: 0; }
  button[data-size='icon-xs'] { width: 1.75rem; height: 1.75rem; padding: 0; }
  button[data-size='icon-sm'] { width: 2rem; height: 2rem; padding: 0; }
  button[data-size='icon-lg'] { width: 2.5rem; height: 2.5rem; padding: 0; }
  button[data-variant='destructive'] { background-color: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }
  button[data-variant='outline'] { border-color: hsl(var(--input)); background-color: hsl(var(--background)); color: hsl(var(--foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  button[data-variant='secondary'] { background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }
  button[data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); box-shadow: none; }
  button[data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  button[data-variant='link'] { background-color: transparent; color: hsl(var(--primary)); box-shadow: none; text-underline-offset: 4px; }
  button[data-variant='link']:hover { background-color: transparent; text-decoration: underline; }
  button[aria-invalid='true'] { border-color: hsl(var(--destructive)); box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2); }
  button:focus-visible { outline: 2px solid hsl(var(--ring)); outline-offset: 2px; box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  button[aria-invalid='true']:focus-visible { outline-color: hsl(var(--destructive)); box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive)); }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><button part="button" type="button"><slot></slot></button>`

export class ScxButton extends HTMLElement {
  private _btn: HTMLButtonElement

  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'aria-invalid']
  }

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
    this._btn = shadow.querySelector('button')!
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'disabled') {
      this._btn.toggleAttribute('disabled', value !== null)
    } else if (name === 'aria-invalid') {
      if (value === 'true') this._btn.setAttribute('aria-invalid', 'true')
      else this._btn.removeAttribute('aria-invalid')
    } else if (name === 'variant' || name === 'size') {
      if (value) this._btn.setAttribute(`data-${name}`, value)
      else this._btn.removeAttribute(`data-${name}`)
    }
  }
}

customElements.define('scx-button', ScxButton)
