import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { preflight } from './preflight.ts'

export type AvatarSize = 'default' | 'sm' | 'lg'

@customElement('shadcx-avatar')
export class Avatar extends LitElement {
  @property({ type: String, reflect: true }) size: AvatarSize = 'default'

  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
        flex-shrink: 0;
      }

      :host([size='sm']) {
        width: 2rem;
        height: 2rem;
      }

      :host([size='lg']) {
        width: 3rem;
        height: 3rem;
      }

      .root {
        position: relative;
        display: inline-flex;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 9999px;
        background-color: hsl(var(--muted));
        color: hsl(var(--foreground));
      }
    `,
  ]

  render() {
    return html`
      <span part="root" class="root" data-size=${this.size}>
        <slot></slot>
      </span>
    `
  }
}

@customElement('shadcx-avatar-image')
export class AvatarImage extends LitElement {
  @property({ type: String }) src = ''
  @property({ type: String }) alt = ''
  @state() private _status: 'idle' | 'loaded' | 'error' = 'idle'

  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        inset: 0;
        display: block;
      }

      .root {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .root.hidden {
        display: none;
      }
    `,
  ]

  private _onLoad() {
    this._status = 'loaded'
  }

  private _onError() {
    this._status = 'error'
  }

  render() {
    const shouldHide = !this.src || this._status === 'error'

    return html`
      <img
        part="root"
        class=${shouldHide ? 'root hidden' : 'root'}
        src=${this.src || nothing}
        alt=${this.alt}
        @load=${this._onLoad}
        @error=${this._onError}
      >
    `
  }
}

@customElement('shadcx-avatar-fallback')
export class AvatarFallback extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        inset: 0;
        display: flex;
      }

      .root {
        display: inline-flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        background-color: hsl(var(--muted));
        color: hsl(var(--muted-foreground));
        font-size: 0.75rem;
        font-weight: 500;
      }
    `,
  ]

  render() {
    return html`<span part="root" class="root"><slot></slot></span>`
  }
}

@customElement('shadcx-avatar-badge')
export class AvatarBadge extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 2;
        display: inline-flex;
      }

      .root {
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 9999px;
        border: 2px solid hsl(var(--background));
        background-color: hsl(var(--primary));
      }
    `,
  ]

  render() {
    return html`<span part="root" class="root"><slot></slot></span>`
  }
}

@customElement('shadcx-avatar-group')
export class AvatarGroup extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
        align-items: center;
      }

      .root {
        display: inline-flex;
        align-items: center;
      }

      .root ::slotted(*) {
        margin-left: -0.625rem;
        box-shadow: 0 0 0 2px hsl(var(--background));
        border-radius: 9999px;
      }

      .root ::slotted(*:first-child) {
        margin-left: 0;
      }
    `,
  ]

  render() {
    return html`<div part="root" class="root"><slot></slot></div>`
  }
}

@customElement('shadcx-avatar-group-count')
export class AvatarGroupCount extends LitElement {
  static styles = [
    preflight,
    css`
      :host {
        display: inline-flex;
      }

      .root {
        display: inline-flex;
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        margin-left: -0.625rem;
        border-radius: 9999px;
        box-shadow: 0 0 0 2px hsl(var(--background));
        background-color: hsl(var(--muted));
        color: hsl(var(--muted-foreground));
        font-size: 0.75rem;
        font-weight: 500;
      }
    `,
  ]

  render() {
    return html`<span part="root" class="root"><slot></slot></span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-avatar': Avatar
    'shadcx-avatar-image': AvatarImage
    'shadcx-avatar-fallback': AvatarFallback
    'shadcx-avatar-badge': AvatarBadge
    'shadcx-avatar-group': AvatarGroup
    'shadcx-avatar-group-count': AvatarGroupCount
  }
}
