import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('source-code-block')
export class SourceCodeBlock extends LitElement {
  @property({ type: String }) source = ''
  @property({ type: String, attribute: 'js-source' }) jsSource = ''
  @property({ type: String }) filename = 'component.ts'
  @state() private expanded = false
  @state() private copied = false
  @state() private language: 'ts' | 'js' = 'js'

  static styles = css`
    :host {
      display: block;
      margin-bottom: 1.5rem;
    }

    .frame {
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted));
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
      padding: 0.625rem 0.75rem;
      background-color: hsl(var(--background));
    }

    .filename {
      min-width: 0;
      overflow: hidden;
      color: hsl(var(--foreground));
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      display: inline-flex;
      flex-shrink: 0;
      gap: 0.375rem;
    }

    .switcher {
      display: inline-flex;
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
    }

    button {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font: inherit;
      font-size: 0.75rem;
      font-weight: 500;
      height: 1.75rem;
      padding: 0 0.625rem;
    }

    .switcher button {
      border: 0;
      border-radius: 0;
    }

    .switcher button[aria-pressed='true'] {
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }

    button:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    pre {
      max-height: calc(1.6em * 7 + 2rem);
      margin: 0;
      overflow: auto;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
      line-height: 1.6;
    }

    :host([expanded]) pre {
      max-height: none;
    }

    code {
      display: block;
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
    }

    .line {
      display: grid;
      grid-template-columns: 3.25rem max-content;
      min-width: max-content;
    }

    .line:first-child {
      padding-top: 1rem;
    }

    .line:last-child {
      padding-bottom: 1rem;
    }

    .line-number {
      position: sticky;
      left: 0;
      padding: 0 0.75rem 0 1rem;
      border-right: 1px solid hsl(var(--border));
      background-color: hsl(var(--muted));
      color: hsl(var(--muted-foreground));
      text-align: right;
      user-select: none;
    }

    .line-code {
      padding: 0 1rem;
      white-space: pre;
    }
  `

  updated() {
    this.toggleAttribute('expanded', this.expanded)
  }

  private toggleExpanded() {
    this.expanded = !this.expanded
  }

  private setLanguage(language: 'ts' | 'js') {
    this.language = language
  }

  private async copySource() {
    await navigator.clipboard.writeText(this.currentSource)
    this.copied = true
    window.setTimeout(() => {
      this.copied = false
    }, 1500)
  }

  private get currentSource() {
    return this.language === 'js' ? this.jsSource || this.source : this.source
  }

  private get currentFilename() {
    return this.language === 'js' ? this.filename.replace(/\.ts$/, '.js') : this.filename
  }

  private get lines() {
    return this.currentSource.split('\n')
  }

  render() {
    return html`
      <div class="frame">
        <div class="header">
          <span class="filename">${this.currentFilename}</span>
          <span class="actions">
            <span class="switcher" aria-label="Source language">
              <button type="button" aria-pressed=${String(this.language === 'ts')} @click=${() => this.setLanguage('ts')}>TS</button>
              <button type="button" aria-pressed=${String(this.language === 'js')} @click=${() => this.setLanguage('js')}>JS</button>
            </span>
            <button type="button" @click=${this.copySource}>${this.copied ? 'Copied' : 'Copy'}</button>
            <button type="button" @click=${this.toggleExpanded}>${this.expanded ? 'Collapse' : 'Expand'}</button>
          </span>
        </div>
        <pre><code>${this.lines.map((line, index) => html`<span class="line"><span class="line-number">${index + 1}</span><span class="line-code">${line}</span></span>`)}</code></pre>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'source-code-block': SourceCodeBlock
  }
}
