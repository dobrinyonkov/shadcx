import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../lib/card.ts'
import '../../lib/button.ts'
import '../../lib/badge.ts'
import '../source-code-block.ts'
import cardSource from '../../lib/card.ts?raw'
import cardJavaScriptSource from '../../lib/card.ts?source-js'

export const description = 'Displays a card with header, content, and footer.'

@customElement('card-page')
export class CardPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc { color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 24rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }

    shadcx-card { width: min(100%, 24rem); }
    shadcx-card.demo-image { width: min(100%, 28rem); }
    .card-copy { color: hsl(var(--muted-foreground)); margin: 0; }
    .footer-between { justify-content: space-between; }
    .demo-image img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
      shadcx-card { width: 100%; }
    }
  `

  render() {
    return html`
      <h1>Card</h1>
      <p class="desc">Displays a card with header, content, and footer.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/card.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="card.ts" .source=${cardSource} .jsSource=${cardJavaScriptSource}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-card&gt;
  &lt;shadcx-card-header&gt;
    &lt;shadcx-card-title&gt;Card Title&lt;/shadcx-card-title&gt;
    &lt;shadcx-card-description&gt;Card Description&lt;/shadcx-card-description&gt;
    &lt;shadcx-card-action&gt;Card Action&lt;/shadcx-card-action&gt;
  &lt;/shadcx-card-header&gt;
  &lt;shadcx-card-content&gt;Card Content&lt;/shadcx-card-content&gt;
  &lt;shadcx-card-footer&gt;Card Footer&lt;/shadcx-card-footer&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-card>
          <shadcx-card-header>
            <shadcx-card-title>Team Seats</shadcx-card-title>
            <shadcx-card-description>Manage seats for your workspace.</shadcx-card-description>
            <shadcx-card-action><shadcx-badge variant="secondary">Pro</shadcx-badge></shadcx-card-action>
          </shadcx-card-header>
          <shadcx-card-content>
            <p class="card-copy">Invite teammates, assign roles, and review billing impact before changes are applied.</p>
          </shadcx-card-content>
          <shadcx-card-footer class="footer-between">
            <span>12 of 20 seats used</span>
            <shadcx-button size="sm">Manage</shadcx-button>
          </shadcx-card-footer>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card&gt;
  &lt;shadcx-card-header&gt;
    &lt;shadcx-card-title&gt;Team Seats&lt;/shadcx-card-title&gt;
    &lt;shadcx-card-description&gt;Manage seats for your workspace.&lt;/shadcx-card-description&gt;
    &lt;shadcx-card-action&gt;&lt;shadcx-badge variant="secondary"&gt;Pro&lt;/shadcx-badge&gt;&lt;/shadcx-card-action&gt;
  &lt;/shadcx-card-header&gt;
  &lt;shadcx-card-content&gt;...&lt;/shadcx-card-content&gt;
  &lt;shadcx-card-footer&gt;...&lt;/shadcx-card-footer&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h3>Small</h3>
      <div class="preview">
        <shadcx-card size="sm">
          <shadcx-card-header>
            <shadcx-card-title>Storage</shadcx-card-title>
            <shadcx-card-description>Small cards use tighter spacing.</shadcx-card-description>
          </shadcx-card-header>
          <shadcx-card-content>42 GB used this month.</shadcx-card-content>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card size="sm"&gt;...&lt;/shadcx-card&gt;</code></pre>

      <h3>Image</h3>
      <div class="preview">
        <shadcx-card class="demo-image">
          <img data-card-image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Laptop showing source code" />
          <shadcx-card-header>
            <shadcx-card-title>Release Notes</shadcx-card-title>
            <shadcx-card-description>Ship a polished update summary with media.</shadcx-card-description>
          </shadcx-card-header>
          <shadcx-card-content>Use a standard image before the header for media cards.</shadcx-card-content>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card&gt;
  &lt;img data-card-image src="..." alt="..." /&gt;
  &lt;shadcx-card-header&gt;...&lt;/shadcx-card-header&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>size</code></td><td><code>"default" | "sm"</code></td><td><code>"default"</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Part</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>root</code></td><td>The internal wrapper on each card element.</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-page': CardPage
  }
}
