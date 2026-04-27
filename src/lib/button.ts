import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type ButtonVariant =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'secondary'
  | 'link'

type ButtonSize =
  | 'default'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg'

@customElement('shadcx-button')
export class Button extends LitElement {
  @property({ type: String, reflect: true }) variant: ButtonVariant = 'default'
  @property({ type: String, reflect: true }) size: ButtonSize = 'default'
  @property({ type: Boolean, reflect: true }) disabled = false

  static styles = css`
    :host {
      display: inline-flex;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .root {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      white-space: nowrap;
      border-radius: calc(var(--radius) - 2px);
      font-size: 0.875rem;
      font-weight: 500;
      font-family: inherit;
      transition:
        color 0.15s,
        background-color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s;
      cursor: pointer;
      user-select: none;
      border: 1px solid transparent;
      outline: none;
      padding: 0;
    }

    /* --- sizes --- */
    [data-size='default'] {
      height: 2.25rem;
      padding-inline: 1rem;
    }

    [data-size='xs'] {
      height: 1.75rem;
      padding-inline: 0.5rem;
      font-size: 0.75rem;
      border-radius: calc(var(--radius) - 4px);
    }

    [data-size='sm'] {
      height: 2rem;
      padding-inline: 0.75rem;
      font-size: 0.8125rem;
    }

    [data-size='lg'] {
      height: 2.5rem;
      padding-inline: 1.5rem;
    }

    [data-size='icon'] {
      height: 2.25rem;
      width: 2.25rem;
      padding-inline: 0;
    }

    [data-size='icon-xs'] {
      height: 1.75rem;
      width: 1.75rem;
      padding-inline: 0;
      border-radius: calc(var(--radius) - 4px);
    }

    [data-size='icon-sm'] {
      height: 2rem;
      width: 2rem;
      padding-inline: 0;
    }

    [data-size='icon-lg'] {
      height: 2.5rem;
      width: 2.5rem;
      padding-inline: 0;
    }

    /* --- variants --- */

    /* default */
    [data-variant='default'] {
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='default']:hover:not(:disabled) {
      background-color: hsl(var(--primary) / 0.9);
    }

    /* outline */
    [data-variant='outline'] {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      border-color: hsl(var(--border));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='outline']:hover:not(:disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    /* ghost */
    [data-variant='ghost'] {
      color: hsl(var(--foreground));
    }
    [data-variant='ghost']:hover:not(:disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    /* destructive */
    [data-variant='destructive'] {
      background-color: hsl(var(--destructive));
      color: hsl(var(--destructive-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='destructive']:hover:not(:disabled) {
      background-color: hsl(var(--destructive) / 0.9);
    }

    /* secondary */
    [data-variant='secondary'] {
      background-color: hsl(var(--secondary));
      color: hsl(var(--secondary-foreground));
    }
    [data-variant='secondary']:hover:not(:disabled) {
      background-color: hsl(var(--secondary) / 0.8);
    }

    /* link */
    [data-variant='link'] {
      color: hsl(var(--primary));
      text-underline-offset: 4px;
    }
    [data-variant='link']:hover:not(:disabled) {
      text-decoration: underline;
    }

    /* --- states --- */

    .root:disabled {
      opacity: 0.5;
    }

    .root:focus-visible {
      box-shadow: 0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    /* slotted icon spacing */
    ::slotted([data-icon='inline-start']) {
      margin-right: 0.25rem;
    }
    ::slotted([data-icon='inline-end']) {
      margin-left: 0.25rem;
    }
  `

  render() {
    return html`
      <button
        part="root"
        class="root"
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-button': Button
  }
}
