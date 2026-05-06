const styles = `
  :host {
    display: inline-flex;
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 1.375rem;
    padding: 0 0.625rem;
    border: 1px solid transparent;
    border-radius: var(--radius);
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  span:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
  span:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  ::slotted(svg),
  ::slotted([data-icon]) {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
  ::slotted([data-icon='inline-start']) {
    margin-inline-end: 0.125rem;
  }
  ::slotted([data-icon='inline-end']) {
    margin-inline-start: 0.125rem;
  }
  span[data-variant='secondary'] { background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); }
  span[data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }
  span[data-variant='destructive'] { background-color: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); }
  span[data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }
  span[data-variant='outline'] { border-color: hsl(var(--border)); background-color: hsl(var(--background)); color: hsl(var(--foreground)); }
  span[data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  span[data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); }
  span[data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  span[data-variant='link'] { border-color: transparent; background-color: transparent; color: hsl(var(--primary)); text-underline-offset: 4px; }
  span[data-variant='link']:hover { background-color: transparent; text-decoration: underline; }
`

const template = document.createElement('template')
template.innerHTML = `<style>${styles}</style><span part="badge" tabindex="0"><slot></slot></span>`

export class ScxBadge extends HTMLElement {
  private _span: HTMLSpanElement

  static get observedAttributes() {
    return ['variant']
  }

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
    this._span = shadow.querySelector('span')!
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null) {
    if (name === 'variant') {
      if (value) this._span.setAttribute('data-variant', value)
      else this._span.removeAttribute('data-variant')
    }
  }
}

customElements.define('scx-badge', ScxBadge)
