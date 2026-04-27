import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

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

    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
      font-weight: 700;
      color: hsl(var(--foreground));
      text-decoration: none;
      border-bottom: 1px solid hsl(var(--border));
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

    .theme-row {
      padding: 0.75rem 1rem;
      border-top: 1px solid hsl(var(--border));
    }

    .theme-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 1.75rem;
      padding: 0 0.75rem;
      font-size: 0.75rem;
      font-family: inherit;
      font-weight: 500;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--border));
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      transition:
        background-color 0.15s,
        color 0.15s;
    }

    .theme-btn:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  `

  private _navigate(hash: string, e: Event) {
    e.preventDefault()
    location.hash = hash
    this.active = hash
  }

  render() {
    const isActive = (hash: string) =>
      this.active === hash ? 'active' : ''

    return html`
      <a class="brand" href="#" @click=${(e: Event) => this._navigate('/', e)}>
        shadcx
      </a>

      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        <a
          class="nav-item ${isActive('/')}"
          href="#/"
          @click=${(e: Event) => this._navigate('/', e)}
        >
          Introduction
        </a>
        <a
          class="nav-item ${isActive('theming')}"
          href="#/theming"
          @click=${(e: Event) => this._navigate('theming', e)}
        >
          Theming
        </a>

        <div class="nav-section">Components</div>
        <a
          class="nav-item ${isActive('button')}"
          href="#/button"
          @click=${(e: Event) => this._navigate('button', e)}
        >
          Button
        </a>
        <a
          class="nav-item ${isActive('input')}"
          href="#/input"
          @click=${(e: Event) => this._navigate('input', e)}
        >
          Input
        </a>

      </nav>

      <div class="theme-row">
        <button class="theme-btn" @click=${this._toggleTheme}>
          Toggle theme
        </button>
      </div>
    `
  }

  private _toggleTheme() {
    document.documentElement.classList.toggle('dark')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-sidebar': AppSidebar
  }
}
