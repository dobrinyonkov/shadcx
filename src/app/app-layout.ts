import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './app-sidebar.ts'
import './pages/overview-page.ts'
import './pages/theming-page.ts'
import './pages/button-page.ts'
import './pages/input-page.ts'
import './pages/checkbox-page.ts'
import './pages/avatar-page.ts'

@customElement('app-layout')
export class AppLayout extends LitElement {
  @state() private _page = '/'
  @state() private _sidebarOpen = false
  @state() private _dark = false

  constructor() {
    super()
    this._dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this._applyTheme()
    this._updatePage()
    window.addEventListener('hashchange', () => this._updatePage())
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this._dark = e.matches
      this._applyTheme()
    })
  }

  private _updatePage() {
    const hash = location.hash.slice(1) || '/'
    this._page = hash
    this._sidebarOpen = false
  }

  private _applyTheme() {
    document.documentElement.classList.toggle('dark', this._dark)
    document.documentElement.style.colorScheme = this._dark ? 'dark' : 'light'
  }

  private _toggleTheme() {
    this._dark = !this._dark
    this._applyTheme()
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100svh;
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    /* --- topbar --- */
    .topbar {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      height: 3rem;
      padding: 0 1rem;
      background-color: hsl(var(--background));
      border-bottom: 1px solid hsl(var(--border));
      z-index: 70;
      flex-shrink: 0;
    }

    .topbar-brand {
      font-size: 1rem;
      font-weight: 700;
      color: hsl(var(--foreground));
      flex: 1;
    }

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 1.125rem;
      font-family: inherit;
      flex-shrink: 0;
    }

    .theme-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 1rem;
      font-family: inherit;
      flex-shrink: 0;
      transition: background-color 0.15s, color 0.15s;
    }

    .theme-btn:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    /* --- body layout --- */
    .layout-body {
      display: flex;
      flex: 1;
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 49;
    }

    .overlay.open {
      display: block;
    }

    .sidebar {
      position: fixed;
      top: 3rem;
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
      padding: 1.25rem;
      max-width: 48rem;
      min-width: 0;
      background-color: hsl(var(--background));
    }

    @media (min-width: 768px) {
      .topbar {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      .menu-btn {
        display: none;
      }

      .sidebar {
        position: sticky;
        top: 3rem;
        height: calc(100svh - 3rem);
        transform: translateX(0);
      }

      .content {
        padding: 2rem 3rem;
      }

      .overlay {
        display: none !important;
      }
    }
  `

  render() {
    const sidebarClasses = this._sidebarOpen ? 'sidebar open' : 'sidebar'
    const overlayClasses = this._sidebarOpen ? 'overlay open' : 'overlay'
    const themeIcon = this._dark ? '\u2600' : '\u263D'

    return html`
      <!-- topbar (mobile only) -->
      <header class="topbar">
        <button
          class="menu-btn"
          @click=${() => (this._sidebarOpen = !this._sidebarOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <span class="topbar-brand">shadcx</span>
        <button
          class="theme-btn"
          @click=${this._toggleTheme}
          aria-label="Toggle theme"
        >
          ${themeIcon}
        </button>
      </header>

      <div class="layout-body">
        <div
          class=${overlayClasses}
          @click=${() => (this._sidebarOpen = false)}
        ></div>

        <aside class=${sidebarClasses}>
          <app-sidebar active=${this._page}></app-sidebar>
        </aside>

        <main class="content">${this._renderPage()}</main>
      </div>
    `
  }

  private _renderPage() {
    switch (this._page) {
      case 'button':
        return html`<button-page></button-page>`
      case 'input':
        return html`<input-page></input-page>`
      case 'checkbox':
        return html`<checkbox-page></checkbox-page>`
      case 'avatar':
        return html`<avatar-page></avatar-page>`
      case 'theming':
        return html`<theming-page></theming-page>`
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
