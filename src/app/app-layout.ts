import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './app-sidebar.ts'
import './pages/overview-page.ts'
import './pages/theming-page.ts'
import './pages/button-page.ts'
import './pages/input-page.ts'

@customElement('app-layout')
export class AppLayout extends LitElement {
  @state() private _page = '/'
  @state() private _sidebarOpen = false

  constructor() {
    super()
    this._applyTheme()
    this._updatePage()
    window.addEventListener('hashchange', () => this._updatePage())
  }

  private _updatePage() {
    const hash = location.hash.slice(1) || '/'
    this._page = hash
    this._sidebarOpen = false
  }

  private _applyTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }

  static styles = css`
    :host {
      display: flex;
      min-height: 100svh;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 40;
    }

    .overlay.open {
      display: block;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 15rem;
      background-color: hsl(var(--background));
      border-right: 1px solid hsl(var(--border));
      z-index: 50;
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .content {
      flex: 1;
      margin-left: 0;
      padding: 1.25rem;
      max-width: 48rem;
      min-width: 0;
      transition: margin-left 0.2s ease;
    }

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0.75rem;
      left: 0.75rem;
      z-index: 60;
      height: 2.25rem;
      width: 2.25rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 1.25rem;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    @media (min-width: 768px) {
      .sidebar {
        position: sticky;
        height: 100svh;
        transform: translateX(0);
      }

      .content {
        margin-left: 0;
        padding: 2rem 3rem;
      }

      .overlay {
        display: none !important;
      }

      .menu-btn {
        display: none;
      }
    }
  `

  render() {
    const sidebarClasses = this._sidebarOpen ? 'sidebar open' : 'sidebar'
    const overlayClasses = this._sidebarOpen ? 'overlay open' : 'overlay'

    return html`
      <div
        class=${overlayClasses}
        @click=${() => (this._sidebarOpen = false)}
      ></div>
      <div class=${sidebarClasses}>
        <app-sidebar active=${this._page}></app-sidebar>
      </div>

      <button
        class="menu-btn"
        @click=${() => (this._sidebarOpen = !this._sidebarOpen)}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>

      <main class="content">${this._renderPage()}</main>
    `
  }

  private _renderPage() {
    switch (this._page) {
      case 'theming':
        return html`<theming-page></theming-page>`
      case 'button':
        return html`<button-page></button-page>`
      case 'input':
        return html`<input-page></input-page>`
      default:
        return html`<overview-page></overview-page>`
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': AppLayout
  }
}
