export type CardSize = 'default' | 'sm'

const preflight = `
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
  img, video { max-width: 100%; height: auto; }
  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
  blockquote, dl, dd, hr, figure, p, pre { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: inherit; }
  [hidden] { display: none !important; }
`

const cardStyles = `
  ${preflight}

  :host {
    --shadcx-card-padding: 1.5rem;
    --shadcx-card-gap: 1.5rem;
    display: block;
  }

  :host([size='sm']) {
    --shadcx-card-padding: 1rem;
    --shadcx-card-gap: 1rem;
  }

  .root {
    display: flex;
    flex-direction: column;
    gap: var(--shadcx-card-gap);
    border-radius: calc(var(--radius) + 2px);
    border: 1px solid hsl(var(--border));
    background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .root ::slotted(img),
  .root ::slotted([data-card-image]) {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`

const headerStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 0.375rem 1rem;
    padding: var(--shadcx-card-padding) var(--shadcx-card-padding) 0;
  }

  .root ::slotted(shadcx-card-title),
  .root ::slotted(shadcx-card-description) {
    grid-column: 1;
  }

  .root ::slotted(shadcx-card-action) {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: end;
    align-self: start;
  }
`

const titleStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--card-foreground));
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
`

const descriptionStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.45;
  }
`

const actionStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const contentStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    padding-inline: var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
`

const footerStyles = `
  ${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 var(--shadcx-card-padding) var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
`

abstract class CardElement extends HTMLElement {
  protected abstract styles: string
  protected partName = 'root'
  protected rootClassName = 'root'

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div part="${this.partName}" class="${this.rootClassName}"><slot></slot></div>
    `
  }
}

export class Card extends HTMLElement {
  static observedAttributes = ['size']

  get size(): CardSize {
    return (this.getAttribute('size') as CardSize | null) ?? 'default'
  }

  set size(value: CardSize) {
    this.setAttribute('size', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = `
      <style>${cardStyles}</style>
      <div part="root" class="root" data-size="${this.size}"><slot></slot></div>
    `
  }
}

export class CardHeader extends CardElement {
  protected styles = headerStyles
}

export class CardTitle extends CardElement {
  protected styles = titleStyles
}

export class CardDescription extends CardElement {
  protected styles = descriptionStyles
}

export class CardAction extends CardElement {
  protected styles = actionStyles
}

export class CardContent extends CardElement {
  protected styles = contentStyles
}

export class CardFooter extends CardElement {
  protected styles = footerStyles
}

const definitions: [string, CustomElementConstructor][] = [
  ['shadcx-card', Card],
  ['shadcx-card-header', CardHeader],
  ['shadcx-card-title', CardTitle],
  ['shadcx-card-description', CardDescription],
  ['shadcx-card-action', CardAction],
  ['shadcx-card-content', CardContent],
  ['shadcx-card-footer', CardFooter],
]

for (const [tag, element] of definitions) {
  if (!customElements.get(tag)) {
    customElements.define(tag, element)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-card': Card
    'shadcx-card-header': CardHeader
    'shadcx-card-title': CardTitle
    'shadcx-card-description': CardDescription
    'shadcx-card-action': CardAction
    'shadcx-card-content': CardContent
    'shadcx-card-footer': CardFooter
  }
}
