import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/dropdown-menu.ts'
import '../../lib/button.ts'

@customElement('dropdown-menu-page')
export class DropdownMenuPage extends LitElement {
  @state() private _bookmarks = true
  @state() private _showStatus = false
  @state() private _position = 'bottom'

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
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      min-height: 12rem;
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

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `

  private _onBookmarksChange(event: CustomEvent<{ checked: boolean }>) {
    this._bookmarks = event.detail.checked
  }

  private _onStatusChange(event: CustomEvent<{ checked: boolean }>) {
    this._showStatus = event.detail.checked
  }

  private _onPositionChange(event: CustomEvent<{ value: string }>) {
    this._position = event.detail.value
  }

  render() {
    return html`
      <h1>Dropdown Menu</h1>
      <p class="desc">
        Displays a menu to the user — such as a set of actions or functions —
        triggered by a button.
      </p>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-dropdown-menu&gt;
  &lt;shadcx-dropdown-menu-trigger&gt;
    &lt;shadcx-button variant="outline"&gt;Open&lt;/shadcx-button&gt;
  &lt;/shadcx-dropdown-menu-trigger&gt;
  &lt;shadcx-dropdown-menu-content&gt;
    &lt;shadcx-dropdown-menu-item&gt;Profile&lt;/shadcx-dropdown-menu-item&gt;
  &lt;/shadcx-dropdown-menu-content&gt;
&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger>
            <shadcx-button variant="outline">Open</shadcx-button>
          </shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-group>
              <shadcx-dropdown-menu-label>My Account</shadcx-dropdown-menu-label>
              <shadcx-dropdown-menu-item>Profile</shadcx-dropdown-menu-item>
              <shadcx-dropdown-menu-item>Billing</shadcx-dropdown-menu-item>
            </shadcx-dropdown-menu-group>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-item>Team</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>Subscription</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu&gt;
  ...
&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h3>Checkbox + Radio + Submenu</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger>
            <shadcx-button variant="outline">Preferences</shadcx-button>
          </shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content align="start">
            <shadcx-dropdown-menu-label>Settings</shadcx-dropdown-menu-label>
            <shadcx-dropdown-menu-checkbox-item
              .checked=${this._bookmarks}
              @checked-change=${this._onBookmarksChange}
            >
              Bookmarks
            </shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-checkbox-item
              .checked=${this._showStatus}
              @checked-change=${this._onStatusChange}
            >
              Status bar
            </shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-radio-group
              .value=${this._position}
              @value-change=${this._onPositionChange}
            >
              <shadcx-dropdown-menu-label>Panel position</shadcx-dropdown-menu-label>
              <shadcx-dropdown-menu-radio-item value="top">Top</shadcx-dropdown-menu-radio-item>
              <shadcx-dropdown-menu-radio-item value="bottom">Bottom</shadcx-dropdown-menu-radio-item>
            </shadcx-dropdown-menu-radio-group>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-sub>
              <shadcx-dropdown-menu-sub-trigger>Invite users</shadcx-dropdown-menu-sub-trigger>
              <shadcx-dropdown-menu-sub-content>
                <shadcx-dropdown-menu-item>Email</shadcx-dropdown-menu-item>
                <shadcx-dropdown-menu-item>Message</shadcx-dropdown-menu-item>
              </shadcx-dropdown-menu-sub-content>
            </shadcx-dropdown-menu-sub>
            <shadcx-dropdown-menu-item variant="destructive">Delete workspace</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>State: bookmarks=${this._bookmarks}, statusBar=${this._showStatus}, position=${this._position}</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Purpose</th>
              <th>Key Attributes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;shadcx-dropdown-menu&gt;</code></td>
              <td>Root controller for open/close state.</td>
              <td><code>open</code></td>
            </tr>
            <tr>
              <td><code>&lt;shadcx-dropdown-menu-content&gt;</code></td>
              <td>Popover content container.</td>
              <td><code>align="start|center|end"</code></td>
            </tr>
            <tr>
              <td><code>&lt;shadcx-dropdown-menu-item&gt;</code></td>
              <td>Standard action row.</td>
              <td><code>variant="default|destructive"</code>, <code>disabled</code></td>
            </tr>
            <tr>
              <td><code>&lt;shadcx-dropdown-menu-checkbox-item&gt;</code></td>
              <td>Toggle item.</td>
              <td><code>checked</code>, <code>disabled</code></td>
            </tr>
            <tr>
              <td><code>&lt;shadcx-dropdown-menu-radio-group&gt;</code></td>
              <td>Single-select group.</td>
              <td><code>value</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dropdown-menu-page': DropdownMenuPage
  }
}
