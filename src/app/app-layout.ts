import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './app-sidebar.ts'
import './page-registry.ts'
import { allPages } from './page-registry.ts'

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
      position: sticky;
      top: 0;
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

    .github-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      flex-shrink: 0;
      transition: background-color 0.15s, color 0.15s;
    }

    .github-link:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .github-link svg {
      width: 1rem;
      height: 1rem;
      fill: currentColor;
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

    .content.wide {
      max-width: none;
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
    const contentClasses = this._page === 'theme-generator' ? 'content wide' : 'content'

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
        <a
          class="github-link"
          href="https://github.com/dobrinyonkov/shadcx"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub repository"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.62c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
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

        <main class=${contentClasses}>${this._renderPage()}</main>
      </div>
    `
  }

  private _renderPage() {
    if (this._page === '/' || !this._page) {
      return html`${document.createElement('overview-page')}`
    }
    const page = allPages.find((p) => p.name === this._page)
    if (page) {
      return html`${document.createElement(page.tag)}`
    }
    return html`${document.createElement('overview-page')}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': AppLayout
  }
}
