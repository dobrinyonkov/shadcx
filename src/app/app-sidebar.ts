import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { componentRoutes, gettingStartedRoutes, type PageRoute } from './page-registry.ts'

@customElement('app-sidebar')
export class AppSidebar extends LitElement {
  @property({ type: String }) active = ''

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .nav {
      flex: 1;
      overflow-y: auto;
      padding: 1rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .nav-section {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: hsl(var(--muted-foreground));
      padding: 0.5rem 0.5rem 0.25rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.5rem;
      border-radius: calc(var(--radius) - 2px);
      font-size: 0.875rem;
      font-weight: 500;
      color: hsl(var(--foreground));
      text-decoration: none;
      transition:
        background-color 0.15s,
        color 0.15s;
      cursor: pointer;
    }

    .nav-item:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .nav-item.active {
      background-color: hsl(var(--primary) / 0.1);
      color: hsl(var(--primary));
    }

  `

  private _navigate(hash: string, e: Event) {
    e.preventDefault()
    location.hash = hash
    this.active = hash
  }

  private _renderNavItem(page: PageRoute) {
    const href = page.route === '/' ? '#/' : `#/${page.route}`

    return html`
      <a
        class="nav-item ${this._isActive(page.route)}"
        href=${href}
        @click=${(e: Event) => this._navigate(page.route, e)}
      >
        ${page.label}
      </a>
    `
  }

  private _isActive(hash: string) {
    return this.active === hash ? 'active' : ''
  }

  render() {
    return html`
      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        ${gettingStartedRoutes.map((page) => this._renderNavItem(page))}

        <div class="nav-section">Components</div>
        ${componentRoutes.map((page) => this._renderNavItem(page))}

      </nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-sidebar': AppSidebar
  }
}
