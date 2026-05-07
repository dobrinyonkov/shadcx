import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/button.ts'
import '../../lib/card.ts'
import '../../lib/checkbox.ts'
import '../../lib/combobox.ts'
import '../../lib/input.ts'
import '../../lib/textarea.ts'

export const description = 'A dedicated playground for testing form components together in one interactive page.'

const frameworks = ['Lit', 'React', 'Vue', 'Svelte', 'Solid', 'Angular', 'Astro']
const channels = ['Email', 'Slack', 'Discord', 'Phone']

@customElement('form-playground-page')
export class FormPlaygroundPage extends LitElement {
  @state() private _accepted = false
  @state() private _newsletter = true
  @state() private _framework = 'Lit'
  @state() private _contactChannels = ['Email']
  @state() private _values: Record<string, string> = {}
  @state() private _notes = ''
  @state() private _submitted = false
  @state() private _message = 'No submission yet.'
  @state() private _events = ['Playground ready']

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .hero {
      display: grid;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      width: fit-content;
      border: 1px solid hsl(var(--border));
      border-radius: 999px;
      padding: 0.25rem 0.625rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3,
    p {
      margin: 0;
    }

    h1 {
      max-width: 48rem;
      color: hsl(var(--foreground));
      font-size: clamp(2rem, 6vw, 4.75rem);
      font-weight: 800;
      letter-spacing: -0.07em;
      line-height: 0.9;
    }

    .desc {
      max-width: 42rem;
      color: hsl(var(--muted-foreground));
      font-size: 1rem;
      line-height: 1.7;
    }

    .grid {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
      gap: 1rem;
      align-items: start;
    }

    .panel {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 8px);
      background:
        radial-gradient(circle at top left, hsl(var(--primary) / 0.1), transparent 18rem),
        hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 20px 60px hsl(var(--foreground) / 0.08);
      overflow: hidden;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      border-bottom: 1px solid hsl(var(--border));
      padding: 1rem;
    }

    .panel-title {
      font-size: 1rem;
      font-weight: 700;
      color: hsl(var(--foreground));
    }

    .panel-note {
      margin-top: 0.2rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .status {
      align-self: start;
      border-radius: 999px;
      background: hsl(var(--primary) / 0.1);
      color: hsl(var(--primary));
      padding: 0.25rem 0.625rem;
      font-size: 0.75rem;
      font-weight: 700;
    }

    form {
      display: grid;
      gap: 1rem;
      padding: 1rem;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .field,
    fieldset {
      display: grid;
      gap: 0.45rem;
      min-width: 0;
    }

    fieldset {
      border: 1px dashed hsl(var(--border));
      border-radius: calc(var(--radius) + 2px);
      padding: 0.875rem;
    }

    legend,
    label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 650;
    }

    .hint,
    .error {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.45;
    }

    .error {
      color: hsl(var(--destructive));
    }

    .check-row {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 0.625rem;
      align-items: start;
    }

    .check-copy {
      display: grid;
      gap: 0.15rem;
    }

    .actions,
    .button-rack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .side {
      display: grid;
      gap: 1rem;
      position: sticky;
      top: 4rem;
    }

    .readout {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 8px);
      background-color: hsl(var(--card));
      padding: 1rem;
    }

    .readout h2 {
      color: hsl(var(--foreground));
      font-size: 0.95rem;
      font-weight: 750;
      margin-bottom: 0.75rem;
    }

    dl {
      display: grid;
      gap: 0.5rem;
      margin: 0;
    }

    .kv {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
      padding-bottom: 0.5rem;
      font-size: 0.8125rem;
    }

    .kv:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    dt {
      color: hsl(var(--muted-foreground));
    }

    dd {
      margin: 0;
      color: hsl(var(--foreground));
      font-weight: 650;
      text-align: right;
    }

    .log {
      display: grid;
      gap: 0.35rem;
      color: hsl(var(--muted-foreground));
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.75rem;
      line-height: 1.5;
    }

    @media (max-width: 980px) {
      .grid,
      .fields {
        grid-template-columns: 1fr;
      }

      .side {
        position: static;
      }
    }
  `

  private _onInput(name: string, event: InputEvent) {
    const input = event.composedPath().find((target) => target instanceof HTMLInputElement) as HTMLInputElement | undefined
    this._values = { ...this._values, [name]: input?.value ?? '' }
  }

  private _onNotes(event: InputEvent) {
    const textarea = event.composedPath().find((target) => target instanceof HTMLTextAreaElement) as HTMLTextAreaElement | undefined
    this._notes = textarea?.value ?? ''
  }

  private _log(message: string) {
    this._events = [message, ...this._events].slice(0, 5)
  }

  private _onAccepted(event: CustomEvent<{ checked: boolean }>) {
    this._accepted = event.detail.checked
    this._log(`checkbox accepted: ${String(this._accepted)}`)
  }

  private _onNewsletter(event: CustomEvent<{ checked: boolean }>) {
    this._newsletter = event.detail.checked
    this._log(`checkbox newsletter: ${String(this._newsletter)}`)
  }

  private _onFramework(event: CustomEvent<{ value: string }>) {
    this._framework = event.detail.value
    this._log(`combobox framework: ${this._framework || 'empty'}`)
  }

  private _onChannels(event: CustomEvent<{ value: string[] }>) {
    this._contactChannels = event.detail.value
    this._log(`combobox channels: ${this._contactChannels.join(', ') || 'none'}`)
  }

  private _validate() {
    const invalid = !this._values.name || !this._values.email || !this._accepted
    for (const name of ['name', 'email']) {
      const field = this.renderRoot.querySelector(`shadcx-input[data-name="${name}"]`)
      field?.toggleAttribute('aria-invalid', !this._values[name])
    }
    this.renderRoot.querySelector('shadcx-checkbox[data-name="accepted"]')?.toggleAttribute('aria-invalid', !this._accepted)
    return !invalid
  }

  private _submit(event?: Event) {
    event?.preventDefault()
    this._submitted = true
    if (!this._validate()) {
      this._message = 'Please complete the required fields and accept the terms.'
      this._log('submit blocked: validation failed')
      return
    }
    this._message = `Submitted ${this._values.name} using ${this._framework}.`
    this._log('submit passed')
  }

  private _reset() {
    for (const input of this.renderRoot.querySelectorAll('shadcx-input')) {
      const control = input.shadowRoot?.querySelector('input')
      if (control) control.value = ''
      input.removeAttribute('aria-invalid')
    }
    const textarea = this.renderRoot.querySelector('shadcx-textarea')?.shadowRoot?.querySelector('textarea')
    if (textarea) textarea.value = ''
    this._accepted = false
    this._newsletter = true
    this._framework = 'Lit'
    this._contactChannels = ['Email']
    this._values = {}
    this._notes = ''
    this._submitted = false
    this._message = 'Form reset.'
    this._log('reset complete')
  }

  render() {
    const requiredError = this._submitted && !this._accepted

    return html`
      <section class="hero">
        <span class="eyebrow">Dedicated Playground</span>
        <h1>Form support lab for shadcx components.</h1>
        <p class="desc">
          Use this page to verify text inputs, password/search/file/date inputs,
          textarea, checkboxes, combobox selection, buttons, reset behavior, and
          simple validation in one place.
        </p>
      </section>

      <div class="grid">
        <section class="panel" aria-label="Form playground">
          <div class="panel-header">
            <div>
              <h2 class="panel-title">Account intake</h2>
              <p class="panel-note">Required fields toggle invalid styling on submit.</p>
            </div>
            <span class="status">${this._message}</span>
          </div>

          <form @submit=${this._submit} novalidate>
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <shadcx-input data-name="name" id="name" placeholder="Ada Lovelace" required @input=${(event: InputEvent) => this._onInput('name', event)}></shadcx-input>
                <span class="hint">Text input with required validation.</span>
              </div>

              <div class="field">
                <label for="email">Email</label>
                <shadcx-input data-name="email" id="email" type="email" placeholder="ada@example.com" required @input=${(event: InputEvent) => this._onInput('email', event)}></shadcx-input>
                <span class="hint">Email input type and invalid state support.</span>
              </div>

              <div class="field">
                <label for="password">Password</label>
                <shadcx-input data-name="password" id="password" type="password" placeholder="••••••••" @input=${(event: InputEvent) => this._onInput('password', event)}></shadcx-input>
              </div>

              <div class="field">
                <label for="search">Search</label>
                <shadcx-input data-name="search" id="search" type="search" placeholder="Search components" @input=${(event: InputEvent) => this._onInput('search', event)}></shadcx-input>
              </div>

              <div class="field">
                <label for="date">Launch date</label>
                <shadcx-input data-name="date" id="date" type="date" @input=${(event: InputEvent) => this._onInput('date', event)}></shadcx-input>
              </div>

              <div class="field">
                <label for="file">Attachment</label>
                <shadcx-input data-name="file" id="file" type="file" @input=${(event: InputEvent) => this._onInput('file', event)}></shadcx-input>
              </div>
            </div>

            <div class="field">
              <label for="notes">Notes</label>
              <shadcx-textarea id="notes" rows="5" placeholder="Describe the form scenario to test..." @input=${this._onNotes}></shadcx-textarea>
            </div>

            <div class="fields">
              <div class="field">
                <label for="framework">Framework combobox</label>
                <shadcx-combobox
                  id="framework"
                  placeholder="Pick a framework"
                  show-clear
                  auto-highlight
                  value=${this._framework}
                  .items=${frameworks}
                  @value-change=${this._onFramework}
                ></shadcx-combobox>
              </div>

              <div class="field">
                <label for="channels">Multi-select combobox</label>
                <shadcx-combobox
                  id="channels"
                  placeholder="Pick channels"
                  multiple
                  show-clear
                  auto-highlight
                  .items=${channels}
                  .values=${this._contactChannels}
                  @value-change=${this._onChannels}
                ></shadcx-combobox>
              </div>
            </div>

            <fieldset>
              <legend>Checkbox support</legend>
              <div class="check-row">
                <shadcx-checkbox
                  data-name="accepted"
                  ?checked=${this._accepted}
                  @checked-change=${this._onAccepted}
                ></shadcx-checkbox>
                <div class="check-copy">
                  <label>Accept terms</label>
                  <span class=${requiredError ? 'error' : 'hint'}>${requiredError ? 'Required before submit.' : 'Click or press Enter on the checkbox.'}</span>
                </div>
              </div>
              <div class="check-row">
                <shadcx-checkbox ?checked=${this._newsletter} @checked-change=${this._onNewsletter}></shadcx-checkbox>
                <div class="check-copy">
                  <label>Send product updates</label>
                  <span class="hint">Optional checked state starts enabled.</span>
                </div>
              </div>
              <div class="check-row">
                <shadcx-checkbox indeterminate></shadcx-checkbox>
                <div class="check-copy">
                  <label>Indeterminate example</label>
                  <span class="hint">First activation resolves to checked.</span>
                </div>
              </div>
            </fieldset>

            <div class="actions">
              <shadcx-button @click=${this._submit}>Submit playground</shadcx-button>
              <shadcx-button variant="outline" @click=${this._reset}>Reset</shadcx-button>
              <shadcx-button variant="ghost" @click=${() => this._log('ghost button clicked')}>Ghost action</shadcx-button>
            </div>
          </form>
        </section>

        <aside class="side">
          <section class="readout" aria-live="polite">
            <h2>Live State</h2>
            <dl>
              <div class="kv"><dt>Framework</dt><dd>${this._framework || 'None'}</dd></div>
              <div class="kv"><dt>Channels</dt><dd>${this._contactChannels.join(', ') || 'None'}</dd></div>
              <div class="kv"><dt>Terms</dt><dd>${this._accepted ? 'Accepted' : 'Missing'}</dd></div>
              <div class="kv"><dt>Newsletter</dt><dd>${this._newsletter ? 'On' : 'Off'}</dd></div>
              <div class="kv"><dt>Notes</dt><dd>${this._notes || 'Empty'}</dd></div>
            </dl>
          </section>

          <section class="readout">
            <h2>Button Variants</h2>
            <div class="button-rack">
              <shadcx-button size="xs">XS</shadcx-button>
              <shadcx-button size="sm" variant="secondary">Small</shadcx-button>
              <shadcx-button variant="outline">Outline</shadcx-button>
              <shadcx-button variant="destructive">Delete</shadcx-button>
              <shadcx-button variant="link">Link</shadcx-button>
              <shadcx-button disabled>Disabled</shadcx-button>
            </div>
          </section>

          <section class="readout">
            <h2>Event Log</h2>
            <div class="log">${this._events.map((event) => html`<span>${event}</span>`)}</div>
          </section>
        </aside>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-playground-page': FormPlaygroundPage
  }
}
