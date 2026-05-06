import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../../lib/badge.ts'
import '../../lib/button.ts'
import '../../lib/card.ts'
import '../../lib/checkbox.ts'
import '../../lib/combobox.ts'
import '../../lib/dropdown-menu.ts'
import '../../lib/input.ts'
import '../../lib/textarea.ts'

type ThemeVariable =
  | 'font-sans'
  | 'font-mono'
  | 'radius'
  | 'background'
  | 'foreground'
  | 'card'
  | 'card-foreground'
  | 'popover'
  | 'popover-foreground'
  | 'primary'
  | 'primary-foreground'
  | 'secondary'
  | 'secondary-foreground'
  | 'muted'
  | 'muted-foreground'
  | 'accent'
  | 'accent-foreground'
  | 'destructive'
  | 'destructive-foreground'
  | 'border'
  | 'input'
  | 'ring'
  | 'chart-1'
  | 'chart-2'
  | 'chart-3'
  | 'chart-4'
  | 'chart-5'

type ThemeValues = Record<ThemeVariable, string>

const themeVariableOrder: ThemeVariable[] = [
  'font-sans',
  'font-mono',
  'radius',
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
]

const defaultTheme: ThemeValues = {
  'font-sans': "'Inter', system-ui, -apple-system, sans-serif",
  'font-mono': "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
  radius: '0.5rem',
  background: '0 0% 100%',
  foreground: '0 0% 3.9%',
  card: '0 0% 100%',
  'card-foreground': '0 0% 3.9%',
  popover: '0 0% 100%',
  'popover-foreground': '0 0% 3.9%',
  primary: '0 0% 9%',
  'primary-foreground': '0 0% 98%',
  secondary: '0 0% 96.1%',
  'secondary-foreground': '0 0% 9%',
  muted: '0 0% 96.1%',
  'muted-foreground': '0 0% 45.1%',
  accent: '0 0% 96.1%',
  'accent-foreground': '0 0% 9%',
  destructive: '0 84.2% 60.2%',
  'destructive-foreground': '0 0% 98%',
  border: '0 0% 89.8%',
  input: '0 0% 89.8%',
  ring: '0 0% 3.9%',
  'chart-1': '12 76% 61%',
  'chart-2': '173 58% 39%',
  'chart-3': '197 37% 24%',
  'chart-4': '43 74% 66%',
  'chart-5': '27 87% 67%',
}

const darkTheme: ThemeValues = {
  ...defaultTheme,
  background: '0 0% 3.9%',
  foreground: '0 0% 98%',
  card: '0 0% 3.9%',
  'card-foreground': '0 0% 98%',
  popover: '0 0% 3.9%',
  'popover-foreground': '0 0% 98%',
  primary: '0 0% 98%',
  'primary-foreground': '0 0% 9%',
  secondary: '0 0% 14.9%',
  'secondary-foreground': '0 0% 98%',
  muted: '0 0% 14.9%',
  'muted-foreground': '0 0% 63.9%',
  accent: '0 0% 14.9%',
  'accent-foreground': '0 0% 98%',
  destructive: '0 62.8% 30.6%',
  'destructive-foreground': '0 0% 98%',
  border: '0 0% 14.9%',
  input: '0 0% 14.9%',
  ring: '0 0% 83.1%',
  'chart-1': '220 70% 50%',
  'chart-2': '160 60% 45%',
  'chart-3': '30 80% 55%',
  'chart-4': '280 65% 60%',
  'chart-5': '340 75% 55%',
}

const basePalettes: Record<string, Partial<ThemeValues>> = {
  Neutral: {},
  Zinc: {
    foreground: '240 10% 3.9%',
    'card-foreground': '240 10% 3.9%',
    'popover-foreground': '240 10% 3.9%',
    secondary: '240 4.8% 95.9%',
    'secondary-foreground': '240 5.9% 10%',
    muted: '240 4.8% 95.9%',
    'muted-foreground': '240 3.8% 46.1%',
    accent: '240 4.8% 95.9%',
    'accent-foreground': '240 5.9% 10%',
    border: '240 5.9% 90%',
    input: '240 5.9% 90%',
  },
  Slate: {
    foreground: '222.2 84% 4.9%',
    'card-foreground': '222.2 84% 4.9%',
    'popover-foreground': '222.2 84% 4.9%',
    secondary: '210 40% 96.1%',
    'secondary-foreground': '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    'muted-foreground': '215.4 16.3% 46.9%',
    accent: '210 40% 96.1%',
    'accent-foreground': '222.2 47.4% 11.2%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
  },
  Stone: {
    foreground: '20 14.3% 4.1%',
    'card-foreground': '20 14.3% 4.1%',
    'popover-foreground': '20 14.3% 4.1%',
    secondary: '60 4.8% 95.9%',
    'secondary-foreground': '24 9.8% 10%',
    muted: '60 4.8% 95.9%',
    'muted-foreground': '25 5.3% 44.7%',
    accent: '60 4.8% 95.9%',
    'accent-foreground': '24 9.8% 10%',
    border: '20 5.9% 90%',
    input: '20 5.9% 90%',
  },
}

const stylePresets: Record<string, Partial<ThemeValues>> = {
  Default: {},
  Nova: {
    primary: '263 70% 50%',
    'primary-foreground': '0 0% 98%',
    accent: '263 48% 95%',
    'accent-foreground': '263 64% 22%',
    ring: '263 70% 50%',
    radius: '0.75rem',
    'chart-1': '263 70% 50%',
    'chart-2': '291 64% 42%',
  },
  Grove: {
    primary: '152 56% 36%',
    'primary-foreground': '0 0% 98%',
    accent: '152 42% 94%',
    'accent-foreground': '153 70% 18%',
    ring: '152 56% 36%',
    radius: '0.625rem',
    'chart-1': '152 56% 36%',
    'chart-2': '94 50% 42%',
  },
  Ember: {
    primary: '18 88% 46%',
    'primary-foreground': '0 0% 98%',
    accent: '28 86% 94%',
    'accent-foreground': '18 88% 22%',
    ring: '18 88% 46%',
    radius: '0.375rem',
    'chart-1': '18 88% 46%',
    'chart-2': '38 92% 50%',
  },
}

const fontOptions = [
  { label: 'Inter', value: "'Inter', system-ui, -apple-system, sans-serif" },
  { label: 'Geist', value: "'Geist', 'Inter', system-ui, sans-serif" },
  { label: 'System', value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
  { label: 'Serif', value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" },
]

const colorControls: Array<{ label: string; token: ThemeVariable; hint: string }> = [
  { label: 'Primary', token: 'primary', hint: 'Buttons and selected states' },
  { label: 'Accent', token: 'accent', hint: 'Hover and soft surfaces' },
  { label: 'Destructive', token: 'destructive', hint: 'Invalid and danger states' },
  { label: 'Border', token: 'border', hint: 'Cards and separators' },
  { label: 'Ring', token: 'ring', hint: 'Focus outlines' },
]

const chartControls: Array<{ label: string; token: ThemeVariable }> = [
  { label: 'Chart 1', token: 'chart-1' },
  { label: 'Chart 2', token: 'chart-2' },
  { label: 'Chart 3', token: 'chart-3' },
  { label: 'Chart 4', token: 'chart-4' },
  { label: 'Chart 5', token: 'chart-5' },
]

@customElement('theme-generator-page')
export class ThemeGeneratorPage extends LitElement {
  @state() private base = 'Neutral'
  @state() private presetStyle = 'Default'
  @state() private copied = false
  @state() private dark = document.documentElement.classList.contains('dark')
  @state() private theme: ThemeValues = this.createTheme()
  private darkObserver?: MutationObserver

  connectedCallback() {
    super.connectedCallback()
    this.darkObserver = new MutationObserver(() => this.syncDocumentTheme())
    this.darkObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })
    this.syncDocumentTheme()
  }

  disconnectedCallback() {
    this.darkObserver?.disconnect()
    super.disconnectedCallback()
  }

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .generator {
      display: grid;
      grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);
      gap: 1.25rem;
      min-height: calc(100svh - 7rem);
      color: hsl(var(--foreground));
    }

    .controls,
    .preview {
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 18px 50px rgb(0 0 0 / 0.08);
    }

    .controls {
      align-self: start;
      position: sticky;
      top: 5rem;
    }

    .controls-header,
    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    h1,
    h2,
    p {
      margin: 0;
    }

    h1 {
      color: hsl(var(--foreground));
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 1.2;
    }

    h2 {
      color: hsl(var(--foreground));
      font-size: 1rem;
      font-weight: 650;
      line-height: 1.25;
    }

    p,
    small,
    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .controls-title {
      display: grid;
      gap: 0.125rem;
    }

    .controls-title strong {
      color: hsl(var(--foreground));
      font-size: 0.9375rem;
    }

    .controls-body {
      display: grid;
      gap: 0.75rem;
      padding: 0.875rem;
    }

    .control-group {
      display: grid;
      gap: 0.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .control-group:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    .control-row,
    .radius-control {
      display: grid;
      gap: 0.5rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .control-row {
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      min-height: 3.125rem;
    }

    .control-copy {
      display: grid;
      min-width: 0;
      gap: 0.125rem;
    }

    .control-copy span,
    .control-copy label {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .control-copy strong,
    .radius-head strong {
      overflow: hidden;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    select,
    input[type='range'] {
      width: 100%;
      accent-color: hsl(var(--primary));
      font: inherit;
    }

    .control-row select {
      width: 8.5rem;
      height: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    .swatch {
      width: 2rem;
      height: 2rem;
      padding: 0;
      border: 1px solid hsl(var(--border));
      border-radius: 999px;
      background: transparent;
      cursor: pointer;
    }

    .swatch::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    .swatch::-webkit-color-swatch,
    .swatch::-moz-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .radius-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .action-stack {
      display: grid;
      gap: 0.5rem;
    }

    .action-stack shadcx-button {
      width: 100%;
    }

    .preview {
      display: grid;
      grid-template-rows: auto 1fr;
      min-width: 0;
      background: linear-gradient(180deg, hsl(var(--muted) / 0.7), transparent 18rem), hsl(var(--background));
    }

    .preview-heading {
      display: grid;
      gap: 0.25rem;
      min-width: 0;
    }

    .preview-actions,
    .button-row,
    .badge-row,
    .chart-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .preview-scroll {
      overflow-x: auto;
      overflow-y: hidden;
      padding: 1rem;
      -webkit-overflow-scrolling: touch;
    }

    .preview-body {
      display: grid;
      grid-template-columns: repeat(4, minmax(18rem, 1fr));
      grid-auto-rows: minmax(0, auto);
      gap: 1rem;
      min-width: 76rem;
      align-items: start;
    }

    .preview-card::part(root) {
      height: 100%;
    }

    .preview-card.tall {
      grid-row: span 2;
    }

    .card-section {
      display: grid;
      gap: 0.75rem;
      align-content: start;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .metric {
      display: grid;
      gap: 0.125rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .metric strong {
      color: hsl(var(--foreground));
      font-size: 1.25rem;
      line-height: 1;
    }

    .metric span {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 0.75rem;
    }

    .field {
      display: grid;
      gap: 0.375rem;
      min-width: 0;
    }

    .field.wide {
      grid-column: 1 / -1;
    }

    .field label,
    .checkbox-line {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
    }

    .checkbox-line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .chart-row {
      align-items: end;
      min-height: 8rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .chart-row.compact {
      min-height: 5rem;
    }

    .bar {
      flex: 1;
      min-width: 2rem;
      border-radius: calc(var(--radius) - 3px) calc(var(--radius) - 3px) 0 0;
    }

    .bar:nth-child(1) { height: 3.8rem; background-color: hsl(var(--chart-1)); }
    .bar:nth-child(2) { height: 6.25rem; background-color: hsl(var(--chart-2)); }
    .bar:nth-child(3) { height: 4.9rem; background-color: hsl(var(--chart-3)); }
    .bar:nth-child(4) { height: 7rem; background-color: hsl(var(--chart-4)); }
    .bar:nth-child(5) { height: 5.4rem; background-color: hsl(var(--chart-5)); }

    .token-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.5rem;
    }

    .token {
      overflow: hidden;
      min-height: 3rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background: hsl(var(--muted));
    }

    .token span {
      display: block;
      height: 1rem;
    }

    .token:nth-child(1) span { background-color: hsl(var(--primary)); }
    .token:nth-child(2) span { background-color: hsl(var(--secondary)); }
    .token:nth-child(3) span { background-color: hsl(var(--accent)); }
    .token:nth-child(4) span { background-color: hsl(var(--destructive)); }
    .token:nth-child(5) span { background-color: hsl(var(--ring)); }

    .token strong {
      display: block;
      padding: 0.5rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.6875rem;
      font-weight: 600;
    }

    @media (max-width: 1060px) {
      .generator {
        grid-template-columns: 1fr;
      }

      .controls {
        position: static;
      }
    }

    @media (max-width: 780px) {
      .form-grid {
        grid-template-columns: 1fr;
      }

      .preview-scroll {
        overflow: visible;
        padding: 0.875rem;
      }

      .preview-body {
        grid-template-columns: 1fr;
        min-width: 0;
      }

      .preview-header {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `

  private get themeStyle() {
    return themeVariableOrder.map((name) => `--${name}: ${this.theme[name]}`).join('; ')
  }

  private get radiusValue() {
    return Number.parseFloat(this.theme.radius.replace('rem', ''))
  }

  private get fontLabel() {
    return fontOptions.find((option) => option.value === this.theme['font-sans'])?.label ?? 'Custom'
  }

  private createTheme() {
    return {
      ...(this.dark ? darkTheme : defaultTheme),
      ...(!this.dark ? basePalettes[this.base] : {}),
      ...stylePresets[this.presetStyle],
    }
  }

  private syncDocumentTheme() {
    const nextDark = document.documentElement.classList.contains('dark')
    if (nextDark === this.dark) return
    const font = this.theme['font-sans']
    this.dark = nextDark
    this.theme = { ...this.createTheme(), 'font-sans': font }
  }

  private setToken(token: ThemeVariable, value: string) {
    const next: ThemeValues = { ...this.theme, [token]: value }
    if (token === 'primary') next['primary-foreground'] = this.foregroundFor(value)
    if (token === 'accent') next['accent-foreground'] = this.foregroundFor(value)
    if (token === 'destructive') next['destructive-foreground'] = this.foregroundFor(value)
    this.theme = next
  }

  private setColor(token: ThemeVariable, event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this.setToken(token, this.hexToHsl(input.value))
  }

  private setRadius(event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this.theme = { ...this.theme, radius: `${input.value}rem` }
  }

  private setFont(value: string) {
    this.theme = { ...this.theme, 'font-sans': value }
  }

  private applyBase(event: Event) {
    const select = event.currentTarget as HTMLSelectElement
    this.base = select.value
    this.theme = this.createTheme()
  }

  private applyStyle(event: Event) {
    const select = event.currentTarget as HTMLSelectElement
    this.presetStyle = select.value
    this.theme = this.createTheme()
  }

  private shuffle() {
    const bases = Object.keys(basePalettes)
    const styles = Object.keys(stylePresets)
    const base = bases[Math.floor(Math.random() * bases.length)]
    const style = styles[Math.floor(Math.random() * styles.length)]
    const hue = Math.floor(Math.random() * 360)
    const accentHue = (hue + 96) % 360
    const primary = `${hue} 72% ${this.dark ? 62 : 44}%`
    const accent = `${accentHue} 62% ${this.dark ? 18 : 94}%`
    const radius = [0.25, 0.375, 0.5, 0.625, 0.75, 1][Math.floor(Math.random() * 6)]

    this.base = base
    this.presetStyle = style
    this.theme = {
      ...this.createTheme(),
      primary,
      'primary-foreground': this.foregroundFor(primary),
      accent,
      'accent-foreground': this.foregroundFor(accent),
      ring: primary,
      radius: `${radius}rem`,
      'chart-1': `${hue} 76% 56%`,
      'chart-2': `${(hue + 58) % 360} 62% 44%`,
      'chart-3': `${(hue + 123) % 360} 48% 42%`,
      'chart-4': `${(hue + 188) % 360} 78% 62%`,
      'chart-5': `${(hue + 247) % 360} 70% 58%`,
    }
  }

  private async copyCss() {
    await navigator.clipboard.writeText(this.buildCss())
    this.copied = true
    window.setTimeout(() => {
      this.copied = false
    }, 1800)
  }

  private buildCss() {
    const variables = themeVariableOrder.map((name) => `  --${name}: ${this.theme[name]};`).join('\n')
    return `${this.dark ? '.dark' : ':root'} {\n${variables}\n}\n`
  }

  private hslToHex(value: string) {
    const match = value.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/)
    if (!match) return '#000000'
    const hue = Number.parseFloat(match[1]) / 360
    const saturation = Number.parseFloat(match[2]) / 100
    const lightness = Number.parseFloat(match[3]) / 100
    if (saturation === 0) {
      const channel = Math.round(lightness * 255)
      return this.toHex(channel, channel, channel)
    }
    const hueToRgb = (p: number, q: number, t: number) => {
      let next = t
      if (next < 0) next += 1
      if (next > 1) next -= 1
      if (next < 1 / 6) return p + (q - p) * 6 * next
      if (next < 1 / 2) return q
      if (next < 2 / 3) return p + (q - p) * (2 / 3 - next) * 6
      return p
    }
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation
    const p = 2 * lightness - q
    return this.toHex(
      Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
      Math.round(hueToRgb(p, q, hue) * 255),
      Math.round(hueToRgb(p, q, hue - 1 / 3) * 255),
    )
  }

  private hexToHsl(value: string) {
    const red = Number.parseInt(value.slice(1, 3), 16) / 255
    const green = Number.parseInt(value.slice(3, 5), 16) / 255
    const blue = Number.parseInt(value.slice(5, 7), 16) / 255
    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)
    let hue = 0
    let saturation = 0
    const lightness = (max + min) / 2

    if (max !== min) {
      const delta = max - min
      saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
      if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0)
      else if (max === green) hue = (blue - red) / delta + 2
      else hue = (red - green) / delta + 4
      hue /= 6
    }

    return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`
  }

  private toHex(red: number, green: number, blue: number) {
    return `#${[red, green, blue].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`
  }

  private foregroundFor(value: string) {
    const match = value.match(/[\d.]+\s+[\d.]+%\s+([\d.]+)%/)
    const lightness = match ? Number.parseFloat(match[1]) : 50
    return lightness > 62 ? '0 0% 9%' : '0 0% 98%'
  }

  private renderSelectControl(label: string, value: string, options: string[], onChange: (event: Event) => void) {
    return html`
      <div class="control-row">
        <span class="control-copy">
          <span>${label}</span>
          <strong>${value}</strong>
        </span>
        <select aria-label=${label} @change=${onChange}>
          ${options.map((option) => html`<option value=${option} ?selected=${option === value}>${option}</option>`)}
        </select>
      </div>
    `
  }

  private renderColorControl(label: string, token: ThemeVariable, hint: string) {
    return html`
      <div class="control-row">
        <span class="control-copy">
          <label for=${token}>${label}</label>
          <strong>${hint}</strong>
        </span>
        <input
          id=${token}
          class="swatch"
          type="color"
          .value=${this.hslToHex(this.theme[token])}
          @input=${(event: Event) => this.setColor(token, event)}
          aria-label=${`${label} color`}
        >
      </div>
    `
  }

  render() {
    return html`
      <div class="generator" style=${this.themeStyle} data-testid="theme-generator">
        <aside class="controls" aria-label="Theme controls">
          <div class="controls-header">
            <span class="controls-title">
              <strong>Theme Generator</strong>
              <span class="muted">shadcn variables</span>
            </span>
            <shadcx-button size="icon-sm" variant="outline" aria-label="Shuffle theme" @click=${this.shuffle}>↻</shadcx-button>
          </div>

          <div class="controls-body">
            <div class="control-group">
              ${this.renderSelectControl('Style', this.presetStyle, Object.keys(stylePresets), (event) => this.applyStyle(event))}
              ${this.renderSelectControl('Base Color', this.base, Object.keys(basePalettes), (event) => this.applyBase(event))}
              ${this.renderSelectControl('Font', this.fontLabel, fontOptions.map((option) => option.label), (event) => {
                const select = event.currentTarget as HTMLSelectElement
                const option = fontOptions.find((item) => item.label === select.value)
                if (option) this.setFont(option.value)
              })}
            </div>

            <div class="control-group">
              ${colorControls.map((control) => this.renderColorControl(control.label, control.token, control.hint))}
            </div>

            <div class="control-group">
              <div class="radius-control">
                <div class="radius-head">
                  <span>Radius</span>
                  <strong>${this.theme.radius}</strong>
                </div>
                <input type="range" min="0" max="1" step="0.125" .value=${String(this.radiusValue)} @input=${this.setRadius} aria-label="Border radius">
              </div>
              ${chartControls.map((control) => this.renderColorControl(control.label, control.token, 'Chart token'))}
            </div>

            <div class="action-stack">
              <shadcx-button variant="outline" @click=${this.shuffle}>Shuffle</shadcx-button>
              <shadcx-button @click=${this.copyCss}>${this.copied ? 'Copied CSS' : 'Export CSS'}</shadcx-button>
            </div>
          </div>
        </aside>

        <section class="preview" aria-label="Component preview">
          <div class="preview-header">
            <div class="preview-heading">
              <h1>Theme Preview</h1>
              <p>Live shadcx components using the current variable set.</p>
            </div>
            <div class="preview-actions">
              <shadcx-button>Deploy</shadcx-button>
              <shadcx-button variant="outline">Preview</shadcx-button>
            </div>
          </div>

          <div class="preview-scroll">
            <div class="preview-body">
              <shadcx-card class="preview-card tall">
                <shadcx-card-header>
                  <shadcx-card-title>Dashboard</shadcx-card-title>
                  <shadcx-card-description>${this.base} / ${this.presetStyle}</shadcx-card-description>
                  <shadcx-card-action>
                    <shadcx-dropdown-menu>
                      <shadcx-dropdown-menu-trigger>
                        <shadcx-button size="sm" variant="outline">Actions</shadcx-button>
                      </shadcx-dropdown-menu-trigger>
                      <shadcx-dropdown-menu-content align="end">
                        <shadcx-dropdown-menu-label>Theme</shadcx-dropdown-menu-label>
                        <shadcx-dropdown-menu-item @click=${this.shuffle}>Shuffle</shadcx-dropdown-menu-item>
                        <shadcx-dropdown-menu-item @click=${this.copyCss}>Copy CSS</shadcx-dropdown-menu-item>
                        <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
                        <shadcx-dropdown-menu-item variant="destructive">Reset</shadcx-dropdown-menu-item>
                      </shadcx-dropdown-menu-content>
                    </shadcx-dropdown-menu>
                  </shadcx-card-action>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="card-section">
                    <div class="metric-grid">
                      <div class="metric"><strong>2.4k</strong><span>Visitors</span></div>
                      <div class="metric"><strong>18%</strong><span>Growth</span></div>
                      <div class="metric"><strong>42</strong><span>Projects</span></div>
                      <div class="metric"><strong>8ms</strong><span>Latency</span></div>
                    </div>
                    <div class="chart-row compact" aria-hidden="true">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                    </div>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Buttons</shadcx-card-title>
                  <shadcx-card-description>Primary, secondary, outline, ghost, destructive.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="button-row">
                    <shadcx-button>Primary</shadcx-button>
                    <shadcx-button variant="secondary">Secondary</shadcx-button>
                    <shadcx-button variant="outline">Outline</shadcx-button>
                    <shadcx-button variant="ghost">Ghost</shadcx-button>
                    <shadcx-button variant="destructive">Delete</shadcx-button>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Badges</shadcx-card-title>
                  <shadcx-card-description>Status labels using semantic tokens.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="badge-row">
                    <shadcx-badge>Default</shadcx-badge>
                    <shadcx-badge variant="secondary">Secondary</shadcx-badge>
                    <shadcx-badge variant="outline">Outline</shadcx-badge>
                    <shadcx-badge variant="destructive">Invalid</shadcx-badge>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card tall">
                <shadcx-card-header>
                  <shadcx-card-title>Form</shadcx-card-title>
                  <shadcx-card-description>Input, textarea, checkbox, and combobox.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="form-grid">
                    <div class="field">
                      <label>Email</label>
                      <shadcx-input value="hello@shadcx.dev" placeholder="Email"></shadcx-input>
                    </div>
                    <div class="field">
                      <label>Invalid state</label>
                      <shadcx-input placeholder="Missing value" aria-invalid="true"></shadcx-input>
                    </div>
                    <div class="field wide">
                      <label>Framework</label>
                      <shadcx-combobox .items=${['Native HTML', 'React', 'Vue', 'Svelte']} value="Native HTML"></shadcx-combobox>
                    </div>
                    <div class="field wide">
                      <label>Message</label>
                      <shadcx-textarea rows="4" placeholder="Tell us what you are building..."></shadcx-textarea>
                    </div>
                    <label class="checkbox-line">
                      <shadcx-checkbox checked></shadcx-checkbox>
                      Receive release notes
                    </label>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Color Tokens</shadcx-card-title>
                  <shadcx-card-description>Theme variables as UI surfaces.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="token-strip" aria-hidden="true">
                    <div class="token"><span></span><strong>primary</strong></div>
                    <div class="token"><span></span><strong>secondary</strong></div>
                    <div class="token"><span></span><strong>accent</strong></div>
                    <div class="token"><span></span><strong>destructive</strong></div>
                    <div class="token"><span></span><strong>ring</strong></div>
                  </div>
                </shadcx-card-content>
                <shadcx-card-footer>
                  <shadcx-button variant="outline" @click=${this.copyCss}>${this.copied ? 'Copied CSS' : 'Copy variables'}</shadcx-button>
                </shadcx-card-footer>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Card Surface</shadcx-card-title>
                  <shadcx-card-description>Radius, border, card, and muted tokens.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <p>Every piece in this preview is rendered with real shadcx components and the currently generated CSS variables.</p>
                </shadcx-card-content>
                <shadcx-card-footer>
                  <shadcx-button size="sm">Save</shadcx-button>
                  <shadcx-button size="sm" variant="outline">Cancel</shadcx-button>
                </shadcx-card-footer>
              </shadcx-card>
            </div>
          </div>
        </section>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'theme-generator-page': ThemeGeneratorPage
  }
}
