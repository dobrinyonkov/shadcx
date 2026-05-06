import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'
import '../../components/scx-slider.ts'

@customElement('slider-page')
export class SliderPage extends LitElement {
  static styles = [componentStyles, css`
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
      gap: 1rem;
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

    td code {
      font-size: 0.75rem;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .value-readout {
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
      min-width: 2rem;
      text-align: center;
    }

    .scx-slider {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 1.25rem;
      touch-action: none;
      user-select: none;
    }

    .scx-slider-track {
      position: relative;
      height: 0.375rem;
      flex-grow: 1;
      border-radius: 9999px;
      background-color: hsl(var(--primary) / 0.2);
    }

    .scx-slider-range {
      position: absolute;
      height: 100%;
      border-radius: 9999px;
      background-color: hsl(var(--primary));
    }

    .scx-slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 9999px;
      border: 2px solid hsl(var(--primary));
      background-color: hsl(var(--background));
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      transition: border-color 0.15s, box-shadow 0.15s;
      outline: none;
      cursor: pointer;
    }

    .scx-slider-thumb:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }

    .scx-slider-thumb:disabled,
    .scx-slider-thumb[aria-disabled='true'] {
      display: none;
    }

    .scx-slider-vertical {
      flex-direction: column;
      width: 1.25rem;
      height: 12rem;
    }

    .scx-slider-vertical .scx-slider-track {
      width: 0.375rem;
      height: 100%;
      flex-grow: 0;
    }

    .scx-slider-vertical .scx-slider-range {
      width: 100%;
      height: auto;
    }

    .scx-slider-vertical .scx-slider-thumb {
      left: auto;
    }

    .scx-slider.disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .scx-slider.disabled .scx-slider-thumb {
      cursor: not-allowed;
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
  `]

  @state() private _controlledValue = 33

  @state() private _rangeValues = [25, 75]
  private _activeRangeThumb = -1

  @state() private _multiValues = [10, 30, 70]
  private _activeMultiThumb = -1

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('pointermove', this._onPointerMove)
    window.addEventListener('pointerup', this._onPointerUp)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('pointermove', this._onPointerMove)
    window.removeEventListener('pointerup', this._onPointerUp)
  }

  private _onPointerMove = (e: PointerEvent) => {
    if (this._activeRangeThumb >= 0) {
      this._updateRangeThumb(e)
    }
    if (this._activeMultiThumb >= 0) {
      this._updateMultiThumb(e)
    }
  }

  private _onPointerUp = () => {
    this._activeRangeThumb = -1
    this._activeMultiThumb = -1
  }

  private _getValueFromEvent(e: PointerEvent, track: HTMLElement, min: number, max: number): number {
    const rect = track.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    return Math.round((min + pct * (max - min)) * 100) / 100
  }

  private _startRangeDrag(index: number, e: PointerEvent) {
    e.preventDefault()
    this._activeRangeThumb = index
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  private _updateRangeThumb(e: PointerEvent) {
    const track = this.shadowRoot?.querySelector('.scx-range-track') as HTMLElement
    if (!track) return
    const value = this._getValueFromEvent(e, track, 0, 100)
    const values = [...this._rangeValues]
    values[this._activeRangeThumb] = value
    if (this._activeRangeThumb === 0) {
      values[0] = Math.min(value, values[1] - 1)
    } else {
      values[1] = Math.max(value, values[0] + 1)
    }
    this._rangeValues = values
  }

  private _startMultiDrag(index: number, e: PointerEvent) {
    e.preventDefault()
    this._activeMultiThumb = index
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  private _updateMultiThumb(e: PointerEvent) {
    const track = this.shadowRoot?.querySelector('.scx-multi-track') as HTMLElement
    if (!track) return
    const value = this._getValueFromEvent(e, track, 0, 100)
    const values = [...this._multiValues]
    values[this._activeMultiThumb] = Math.max(
      this._activeMultiThumb > 0 ? values[this._activeMultiThumb - 1] + 1 : 0,
      Math.min(
        this._activeMultiThumb < values.length - 1 ? values[this._activeMultiThumb + 1] - 1 : 100,
        value
      )
    )
    this._multiValues = values
  }

  private _onRangeKeydown(index: number, e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const values = [...this._rangeValues]
      values[index] = Math.min(100, values[index] + 1)
      if (index === 0 && values[0] >= values[1]) values[0] = values[1] - 1
      if (index === 1 && values[1] <= values[0]) values[1] = values[0] + 1
      this._rangeValues = values
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      const values = [...this._rangeValues]
      values[index] = Math.max(0, values[index] - 1)
      if (index === 0 && values[0] >= values[1]) values[0] = values[1] - 1
      if (index === 1 && values[1] <= values[0]) values[1] = values[0] + 1
      this._rangeValues = values
    }
  }

  private _onMultiKeydown(index: number, e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const values = [...this._multiValues]
      values[index] = Math.min(100, values[index] + 1)
      for (let i = 0; i < values.length - 1; i++) {
        if (values[i] >= values[i + 1]) values[i + 1] = values[i] + 1
      }
      this._multiValues = values
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      const values = [...this._multiValues]
      values[index] = Math.max(0, values[index] - 1)
      for (let i = values.length - 1; i > 0; i--) {
        if (values[i] <= values[i - 1]) values[i - 1] = values[i] - 1
      }
      this._multiValues = values
    }
  }

  render() {
    return html`
      <h1>Slider</h1>
      <p class="desc">
        An input where the user selects a value from within a given range.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-slider.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-slider min="0" max="100" step="1" value="33"></scx-slider>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h3>Range</h3>
      <div class="preview">
        <div class="scx-slider" style="width: 100%;">
          <div class="scx-slider-track scx-range-track">
            <div
              class="scx-slider-range"
              style="left: ${this._rangeValues[0]}%; width: ${this._rangeValues[1] - this._rangeValues[0]}%"
            ></div>
          </div>
          <div
            class="scx-slider-thumb"
            style="left: ${this._rangeValues[0]}%"
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${this._rangeValues[0]}
            aria-label="Minimum"
            @pointerdown=${(e: PointerEvent) => this._startRangeDrag(0, e)}
            @keydown=${(e: KeyboardEvent) => this._onRangeKeydown(0, e)}
          ></div>
          <div
            class="scx-slider-thumb"
            style="left: ${this._rangeValues[1]}%"
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${this._rangeValues[1]}
            aria-label="Maximum"
            @pointerdown=${(e: PointerEvent) => this._startRangeDrag(1, e)}
            @keydown=${(e: KeyboardEvent) => this._onRangeKeydown(1, e)}
          ></div>
        </div>
        <span class="value-readout">
          ${this._rangeValues[0]} - ${this._rangeValues[1]}
        </span>
      </div>
      <pre><code>&lt;div class="scx-slider"&gt;
  &lt;div class="scx-slider-track"&gt;
    &lt;div class="scx-slider-range" style="left: 25%; width: 50%"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 25%" role="slider"
       tabindex="0" aria-valuenow="25"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 75%" role="slider"
       tabindex="0" aria-valuenow="75"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>Multiple Thumbs</h3>
      <div class="preview">
        <div class="scx-slider" style="width: 100%;">
          <div class="scx-slider-track scx-multi-track">
            <div
              class="scx-slider-range"
              style="left: ${this._multiValues[0]}%; width: ${this._multiValues[this._multiValues.length - 1] - this._multiValues[0]}%"
            ></div>
          </div>
          ${this._multiValues.map((v, i) => html`
            <div
              class="scx-slider-thumb"
              style="left: ${v}%"
              role="slider"
              tabindex="0"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow=${v}
              aria-label="Thumb ${i + 1}"
              @pointerdown=${(e: PointerEvent) => this._startMultiDrag(i, e)}
              @keydown=${(e: KeyboardEvent) => this._onMultiKeydown(i, e)}
            ></div>
          `)}
        </div>
        <span class="value-readout">
          [${this._multiValues.join(', ')}]
        </span>
      </div>
      <pre><code>&lt;div class="scx-slider"&gt;
  &lt;div class="scx-slider-track"&gt;
    &lt;div class="scx-slider-range" style="left: 10%; width: 60%"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 10%" role="slider"
       tabindex="0" aria-valuenow="10"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 30%" role="slider"
       tabindex="0" aria-valuenow="30"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 70%" role="slider"
       tabindex="0" aria-valuenow="70"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>Vertical</h3>
      <div class="preview" style="justify-content: center;">
        <scx-slider orientation="vertical" min="0" max="100" step="1" value="33"></scx-slider>
      </div>
      <pre><code>&lt;scx-slider orientation="vertical" min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h3>Controlled</h3>
      <div class="preview">
        <div class="flex-col">
          <scx-slider
            min="0"
            max="100"
            step="1"
            .value=${String(this._controlledValue)}
            @input=${(e: Event) => { this._controlledValue = Number((e.target as HTMLElement & { value: string }).value) }}
          ></scx-slider>
          <span class="value-readout">${this._controlledValue}</span>
        </div>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1"&gt;&lt;/scx-slider&gt;
&lt;script&gt;
  document.querySelector('scx-slider')
    .addEventListener('input', (e) =&gt; {
      console.log(e.target.value)
    })
&lt;/script&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <scx-slider min="0" max="100" step="1" value="33" disabled></scx-slider>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33" disabled&gt;&lt;/scx-slider&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>min</code></td>
              <td><code>number</code></td>
              <td>Minimum allowed value.</td>
            </tr>
            <tr>
              <td><code>max</code></td>
              <td><code>number</code></td>
              <td>Maximum allowed value.</td>
            </tr>
            <tr>
              <td><code>step</code></td>
              <td><code>number</code></td>
              <td>Step interval for value changes.</td>
            </tr>
            <tr>
              <td><code>value</code></td>
              <td><code>string</code></td>
              <td>Current slider value.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean attribute</code></td>
              <td>Disables the slider.</td>
            </tr>
            <tr>
              <td><code>orientation</code></td>
              <td><code>vertical</code></td>
              <td>Renders the slider vertically.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Custom Multi-Thumb Slider</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>scx-slider</code></td>
              <td>Container for a custom JavaScript-driven slider.</td>
            </tr>
            <tr>
              <td><code>scx-slider-track</code></td>
              <td>The track element shown behind the range.</td>
            </tr>
            <tr>
              <td><code>scx-slider-range</code></td>
              <td>The filled range indicator. Position with <code>left</code> and <code>width</code>.</td>
            </tr>
            <tr>
              <td><code>scx-slider-thumb</code></td>
              <td>A draggable thumb. Use <code>role="slider"</code> for accessibility.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slider-page': SliderPage
  }
}
