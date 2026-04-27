import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link'

@customElement('shadcx-badge')
export class Badge extends LitElement {
  @property({ type: String, reflect: true }) variant: BadgeVariant = 'default'

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
      }

      .root {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        white-space: nowrap;
        border-radius: var(--radius);
        border: 1px solid transparent;
        padding-inline: 0.625rem;
        height: 1.375rem;
        font-size: 0.75rem;
        line-height: 1;
        font-weight: 500;
        transition:
          color 0.15s,
          background-color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s;
      }

      .root:focus-visible {
        outline: none;
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .root ::slotted(svg),
      .root ::slotted([data-icon]) {
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
      }

      .root ::slotted([data-icon='inline-start']) {
        margin-inline-end: 0.125rem;
      }

      .root ::slotted([data-icon='inline-end']) {
        margin-inline-start: 0.125rem;
      }

      [data-variant='default'] {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
      }

      [data-variant='default']:hover {
        background-color: hsl(var(--primary) / 0.9);
      }

      [data-variant='secondary'] {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
      }

      [data-variant='secondary']:hover {
        background-color: hsl(var(--secondary) / 0.8);
      }

      [data-variant='destructive'] {
        background-color: hsl(var(--destructive));
        color: hsl(var(--destructive-foreground));
      }

      [data-variant='destructive']:hover {
        background-color: hsl(var(--destructive) / 0.9);
      }

      [data-variant='outline'] {
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        border-color: hsl(var(--border));
      }

      [data-variant='outline']:hover {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      [data-variant='ghost'] {
        background-color: transparent;
        color: hsl(var(--foreground));
      }

      [data-variant='ghost']:hover {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      [data-variant='link'] {
        background-color: transparent;
        border-color: transparent;
        color: hsl(var(--primary));
        text-underline-offset: 4px;
      }

      [data-variant='link']:hover {
        text-decoration: underline;
      }
    `,
  ]

  render() {
    return html`
      <span
        part="root"
        class="root"
        data-variant=${this.variant}
        tabindex="0"
      >
        <slot></slot>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-badge': Badge
  }
}
