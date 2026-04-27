import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../../lib/avatar.ts'

@customElement('avatar-page')
export class AvatarPage extends LitElement {
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

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
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

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }
  `

  render() {
    return html`
      <h1>Avatar</h1>
      <p class="desc">An image element with fallback support for representing a user.</p>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-avatar&gt;
  &lt;shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"&gt;&lt;/shadcx-avatar-image&gt;
  &lt;shadcx-avatar-fallback&gt;CN&lt;/shadcx-avatar-fallback&gt;
&lt;/shadcx-avatar&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-avatar>
          <shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"></shadcx-avatar-image>
          <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
        </shadcx-avatar>
      </div>
      <pre><code>&lt;shadcx-avatar&gt;
  &lt;shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"&gt;&lt;/shadcx-avatar-image&gt;
  &lt;shadcx-avatar-fallback&gt;CN&lt;/shadcx-avatar-fallback&gt;
&lt;/shadcx-avatar&gt;</code></pre>

      <h3>Badge</h3>
      <div class="preview">
        <shadcx-avatar>
          <shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"></shadcx-avatar-image>
          <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
          <shadcx-avatar-badge></shadcx-avatar-badge>
        </shadcx-avatar>
      </div>
      <pre><code>&lt;shadcx-avatar&gt;
  &lt;shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"&gt;&lt;/shadcx-avatar-image&gt;
  &lt;shadcx-avatar-fallback&gt;CN&lt;/shadcx-avatar-fallback&gt;
  &lt;shadcx-avatar-badge&gt;&lt;/shadcx-avatar-badge&gt;
&lt;/shadcx-avatar&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <shadcx-avatar size="sm">
          <shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"></shadcx-avatar-image>
          <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
        </shadcx-avatar>
        <shadcx-avatar>
          <shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"></shadcx-avatar-image>
          <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
        </shadcx-avatar>
        <shadcx-avatar size="lg">
          <shadcx-avatar-image src="https://github.com/shadcn.png" alt="@shadcn"></shadcx-avatar-image>
          <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
        </shadcx-avatar>
      </div>
      <pre><code>&lt;shadcx-avatar size="sm"&gt;...&lt;/shadcx-avatar&gt;
&lt;shadcx-avatar size="default"&gt;...&lt;/shadcx-avatar&gt;
&lt;shadcx-avatar size="lg"&gt;...&lt;/shadcx-avatar&gt;</code></pre>

      <h3>Avatar Group + Count</h3>
      <div class="preview">
        <shadcx-avatar-group>
          <shadcx-avatar>
            <shadcx-avatar-image src="https://github.com/shadcn.png" alt="shadcn"></shadcx-avatar-image>
            <shadcx-avatar-fallback>CN</shadcx-avatar-fallback>
          </shadcx-avatar>
          <shadcx-avatar>
            <shadcx-avatar-image src="https://avatars.githubusercontent.com/u/124599?v=4" alt="vercel"></shadcx-avatar-image>
            <shadcx-avatar-fallback>VC</shadcx-avatar-fallback>
          </shadcx-avatar>
          <shadcx-avatar-group-count>+2</shadcx-avatar-group-count>
        </shadcx-avatar-group>
      </div>
      <pre><code>&lt;shadcx-avatar-group&gt;
  &lt;shadcx-avatar&gt;...&lt;/shadcx-avatar&gt;
  &lt;shadcx-avatar&gt;...&lt;/shadcx-avatar&gt;
  &lt;shadcx-avatar-group-count&gt;+2&lt;/shadcx-avatar-group-count&gt;
&lt;/shadcx-avatar-group&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Component</th><th>Prop</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>shadcx-avatar</code></td><td><code>size</code></td><td><code>"default" | "sm" | "lg"</code></td><td><code>"default"</code></td></tr>
            <tr><td><code>shadcx-avatar-image</code></td><td><code>src</code>, <code>alt</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>shadcx-avatar-fallback</code></td><td><code>-</code></td><td><code>slot</code></td><td><code>-</code></td></tr>
            <tr><td><code>shadcx-avatar-badge</code></td><td><code>-</code></td><td><code>slot</code></td><td><code>-</code></td></tr>
            <tr><td><code>shadcx-avatar-group</code></td><td><code>-</code></td><td><code>slot</code></td><td><code>-</code></td></tr>
            <tr><td><code>shadcx-avatar-group-count</code></td><td><code>-</code></td><td><code>slot</code></td><td><code>-</code></td></tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'avatar-page': AvatarPage
  }
}
