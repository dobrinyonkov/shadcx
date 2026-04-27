import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('overview-page')
export class OverviewPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    .lead {
      font-size: 1.125rem;
      color: hsl(var(--muted-foreground));
      margin: 0 0 2rem;
      line-height: 1.6;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 1rem;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .card {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.25rem;
      text-decoration: none;
      transition:
        border-color 0.15s,
        box-shadow 0.15s;
      cursor: pointer;
    }

    .card:hover {
      border-color: hsl(var(--primary) / 0.4);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .card h3 {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0 0 0.25rem;
      color: hsl(var(--foreground));
    }

    .card p {
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
      margin: 0;
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .lead { font-size: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
      .cards { grid-template-columns: 1fr; }
    }
  `

  private _navigateButton(e: Event) {
    e.preventDefault()
    location.hash = 'button'
  }

  private _navigateInput(e: Event) {
    e.preventDefault()
    location.hash = 'input'
  }

  private _navigateDropdownMenu(e: Event) {
    e.preventDefault()
    location.hash = 'dropdown-menu'
  }

  render() {
    return html`
      <h1>shadcx</h1>
      <p class="lead">
        shadcn/ui reimagined as Web Components. No framework lock-in, no
        Tailwind CSS &mdash; just reusable components that work anywhere.
      </p>

      <h2>Getting Started</h2>
      <p>
        Load the library via CDN and start using the components in any HTML
        page:
      </p>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Components</h2>
      <div class="cards">
        <a class="card" href="#/button" @click=${this._navigateButton}>
          <h3>Button</h3>
          <p>Displays a button or a component that looks like a button.</p>
        </a>
        <a class="card" href="#/input" @click=${this._navigateInput}>
          <h3>Input</h3>
          <p>A text input component for forms and user data entry.</p>
        </a>
        <a class="card" href="#/dropdown-menu" @click=${this._navigateDropdownMenu}>
          <h3>Dropdown Menu</h3>
          <p>Displays a list of actions and options from a trigger button.</p>
        </a>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'overview-page': OverviewPage
  }
}
