import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { componentStyles } from '../component-styles.ts'

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

const darkDefaultTheme: ThemeValues = {
  'font-sans': "'Inter', system-ui, -apple-system, sans-serif",
  'font-mono': "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
  radius: '0.5rem',
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
  Neutral: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    card: '0 0% 100%',
    'card-foreground': '0 0% 3.9%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 3.9%',
    secondary: '0 0% 96.1%',
    'secondary-foreground': '0 0% 9%',
    muted: '0 0% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    accent: '0 0% 96.1%',
    'accent-foreground': '0 0% 9%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
  },
  Zinc: {
    background: '0 0% 100%',
    foreground: '240 10% 3.9%',
    card: '0 0% 100%',
    'card-foreground': '240 10% 3.9%',
    popover: '0 0% 100%',
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
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    card: '0 0% 100%',
    'card-foreground': '222.2 84% 4.9%',
    popover: '0 0% 100%',
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
    background: '0 0% 100%',
    foreground: '20 14.3% 4.1%',
    card: '0 0% 100%',
    'card-foreground': '20 14.3% 4.1%',
    popover: '0 0% 100%',
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

const darkBasePalettes: Record<string, Partial<ThemeValues>> = {
  Neutral: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    card: '0 0% 3.9%',
    'card-foreground': '0 0% 98%',
    popover: '0 0% 3.9%',
    'popover-foreground': '0 0% 98%',
    secondary: '0 0% 14.9%',
    'secondary-foreground': '0 0% 98%',
    muted: '0 0% 14.9%',
    'muted-foreground': '0 0% 63.9%',
    accent: '0 0% 14.9%',
    'accent-foreground': '0 0% 98%',
    border: '0 0% 14.9%',
    input: '0 0% 14.9%',
  },
  Zinc: {
    background: '240 10% 3.9%',
    foreground: '0 0% 98%',
    card: '240 10% 3.9%',
    'card-foreground': '0 0% 98%',
    popover: '240 10% 3.9%',
    'popover-foreground': '0 0% 98%',
    secondary: '240 3.7% 15.9%',
    'secondary-foreground': '0 0% 98%',
    muted: '240 3.7% 15.9%',
    'muted-foreground': '240 5% 64.9%',
    accent: '240 3.7% 15.9%',
    'accent-foreground': '0 0% 98%',
    border: '240 3.7% 15.9%',
    input: '240 3.7% 15.9%',
  },
  Slate: {
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    card: '222.2 84% 4.9%',
    'card-foreground': '210 40% 98%',
    popover: '222.2 84% 4.9%',
    'popover-foreground': '210 40% 98%',
    secondary: '217.2 32.6% 17.5%',
    'secondary-foreground': '210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    'muted-foreground': '215 20.2% 65.1%',
    accent: '217.2 32.6% 17.5%',
    'accent-foreground': '210 40% 98%',
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
  },
  Stone: {
    background: '20 14.3% 4.1%',
    foreground: '0 0% 95%',
    card: '20 14.3% 4.1%',
    'card-foreground': '0 0% 95%',
    popover: '20 14.3% 4.1%',
    'popover-foreground': '0 0% 95%',
    secondary: '12 6.5% 15.1%',
    'secondary-foreground': '0 0% 98%',
    muted: '12 6.5% 15.1%',
    'muted-foreground': '24 5.4% 63.9%',
    accent: '12 6.5% 15.1%',
    'accent-foreground': '0 0% 98%',
    border: '12 6.5% 15.1%',
    input: '12 6.5% 15.1%',
  },
}

const stylePresets: Record<string, Partial<ThemeValues>> = {
  Default: {
    primary: '0 0% 9%',
    'primary-foreground': '0 0% 98%',
    ring: '0 0% 3.9%',
    radius: '0.5rem',
  },
  Nova: {
    primary: '263 70% 50%',
    'primary-foreground': '0 0% 98%',
    accent: '263 48% 95%',
    'accent-foreground': '263 64% 22%',
    ring: '263 70% 50%',
    radius: '0.75rem',
  },
  Grove: {
    primary: '152 56% 36%',
    'primary-foreground': '0 0% 98%',
    accent: '152 42% 94%',
    'accent-foreground': '153 70% 18%',
    ring: '152 56% 36%',
    radius: '0.625rem',
  },
  Ember: {
    primary: '18 88% 46%',
    'primary-foreground': '0 0% 98%',
    accent: '28 86% 94%',
    'accent-foreground': '18 88% 22%',
    ring: '18 88% 46%',
    radius: '0.375rem',
  },
}

const darkStylePresets: Record<string, Partial<ThemeValues>> = {
  Default: {
    primary: '0 0% 98%',
    'primary-foreground': '0 0% 9%',
    ring: '0 0% 83.1%',
    radius: '0.5rem',
  },
  Nova: {
    primary: '263 72% 66%',
    'primary-foreground': '0 0% 98%',
    accent: '263 35% 18%',
    'accent-foreground': '263 90% 88%',
    ring: '263 72% 66%',
    radius: '0.75rem',
  },
  Grove: {
    primary: '152 62% 48%',
    'primary-foreground': '0 0% 98%',
    accent: '152 33% 16%',
    'accent-foreground': '152 74% 86%',
    ring: '152 62% 48%',
    radius: '0.625rem',
  },
  Ember: {
    primary: '18 90% 58%',
    'primary-foreground': '0 0% 98%',
    accent: '18 42% 17%',
    'accent-foreground': '28 92% 86%',
    ring: '18 90% 58%',
    radius: '0.375rem',
  },
}

const fontOptions = [
  {
    label: 'Inter',
    value: "'Inter', system-ui, -apple-system, sans-serif",
  },
  {
    label: 'Geist',
    value: "'Geist', 'Inter', system-ui, sans-serif",
  },
  {
    label: 'System',
    value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  {
    label: 'Serif',
    value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
  },
]

const colorControls: Array<{ label: string; token: ThemeVariable; hint: string }> = [
  { label: 'Primary', token: 'primary', hint: 'Buttons, selected states' },
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
  @state() private _base = 'Neutral'
  @state() private _style = 'Default'
  @state() private _copied = false
  @state() private _dark = document.documentElement.classList.contains('dark')
  @state() private _theme: ThemeValues = this._createTheme()
  private _darkObserver?: MutationObserver

  connectedCallback() {
    super.connectedCallback()
    this._darkObserver = new MutationObserver(() => this._syncDocumentTheme())
    this._darkObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })
    this._syncDocumentTheme()
  }

  disconnectedCallback() {
    this._darkObserver?.disconnect()
    super.disconnectedCallback()
  }

  protected firstUpdated() {
    this.renderRoot.querySelectorAll<HTMLElement>('[data-action="shuffle"]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault()
        this._shuffle()
      })
    })

    this.renderRoot.querySelectorAll<HTMLElement>('[data-action="export"]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault()
        void this._copyCss()
      })
    })
  }

  static styles = [componentStyles, css`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      margin: 0;
      color: hsl(var(--foreground));
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1.2;
    }

    p {
      margin: 0;
    }

    .generator {
      display: grid;
      grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);
      gap: 1.25rem;
      min-height: calc(100svh - 7rem);
      color: hsl(var(--foreground));
    }

    .controls {
      align-self: start;
      position: sticky;
      top: 5rem;
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 18px 50px rgb(0 0 0 / 0.08);
    }

    .controls-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.875rem 1rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .controls-title {
      display: grid;
      gap: 0.125rem;
    }

    .controls-title strong {
      font-size: 0.9375rem;
      line-height: 1.2;
    }

    .controls-title span {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.2;
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

    .control-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.75rem;
      align-items: center;
      min-height: 3.125rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .control-copy {
      display: grid;
      min-width: 0;
      gap: 0.125rem;
    }

    .control-copy label,
    .control-copy span:first-child {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.2;
    }

    .control-copy strong {
      overflow: hidden;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .control-row select {
      width: 8.5rem;
      max-width: 100%;
      height: 2rem;
      padding-block: 0.125rem;
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

    .swatch::-webkit-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .swatch::-moz-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .radius-control {
      display: grid;
      gap: 0.5rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .radius-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .radius-head strong {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
    }

    input[type='range'] {
      width: 100%;
      accent-color: hsl(var(--primary));
    }

    .action-stack {
      display: grid;
      gap: 0.5rem;
    }

    .action-stack button {
      width: 100%;
    }

    .preview {
      display: grid;
      grid-template-rows: auto 1fr;
      min-width: 0;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background:
        linear-gradient(180deg, hsl(var(--muted) / 0.7), transparent 18rem),
        hsl(var(--background));
      color: hsl(var(--foreground));
      overflow: hidden;
    }

    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .preview-heading {
      display: grid;
      gap: 0.25rem;
      min-width: 0;
    }

    .preview-heading p {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .preview-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.5rem;
    }

    .preview-body {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.9fr);
      gap: 1rem;
      align-items: start;
      padding: 1rem;
    }

    .showcase,
    .surface {
      border: 1px solid hsl(var(--border));
      border-radius: var(--radius);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
    }

    .showcase {
      display: grid;
      gap: 1rem;
      align-content: start;
      padding: 1rem;
    }

    .surface {
      display: grid;
      gap: 1rem;
      align-content: start;
      padding: 1rem;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .section-title h2,
    .surface h2 {
      margin: 0;
      color: hsl(var(--foreground));
      font-size: 1rem;
      font-weight: 650;
      letter-spacing: 0;
      line-height: 1.25;
    }

    .section-title span,
    .surface p {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .button-row,
    .badge-row,
    .chart-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
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

    .field label {
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
      font-weight: 500;
    }

    .field small {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.35;
    }

    .checkbox-line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
    }

    .chart-row {
      align-items: end;
      min-height: 8rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .bar {
      flex: 1;
      min-width: 2rem;
      border-radius: calc(var(--radius) - 3px) calc(var(--radius) - 3px) 0 0;
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.18);
    }

    .bar:nth-child(1) {
      height: 3.8rem;
      background-color: hsl(var(--chart-1));
    }

    .bar:nth-child(2) {
      height: 6.25rem;
      background-color: hsl(var(--chart-2));
    }

    .bar:nth-child(3) {
      height: 4.9rem;
      background-color: hsl(var(--chart-3));
    }

    .bar:nth-child(4) {
      height: 7rem;
      background-color: hsl(var(--chart-4));
    }

    .bar:nth-child(5) {
      height: 5.4rem;
      background-color: hsl(var(--chart-5));
    }

    .token-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.5rem;
    }

    .token {
      min-height: 3rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background: hsl(var(--muted));
      overflow: hidden;
    }

    .token span {
      display: block;
      height: 1rem;
    }

    .token:nth-child(1) span {
      background-color: hsl(var(--primary));
    }

    .token:nth-child(2) span {
      background-color: hsl(var(--secondary));
    }

    .token:nth-child(3) span {
      background-color: hsl(var(--accent));
    }

    .token:nth-child(4) span {
      background-color: hsl(var(--destructive));
    }

    .token:nth-child(5) span {
      background-color: hsl(var(--ring));
    }

    .token strong {
      display: block;
      padding: 0.5rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .option-list {
      max-width: none;
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
      .preview-body,
      .form-grid {
        grid-template-columns: 1fr;
      }

      .preview-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .preview-actions {
        justify-content: flex-start;
      }
    }

    @media (max-width: 560px) {
      .generator {
        min-height: auto;
      }

      .controls-body,
      .preview-body {
        padding: 0.75rem;
      }

      .control-row {
        grid-template-columns: 1fr;
      }

      .control-row select {
        width: 100%;
      }
    }
  `]

  private get _basePaletteSet() {
    return this._dark ? darkBasePalettes : basePalettes
  }

  private get _stylePresetSet() {
    return this._dark ? darkStylePresets : stylePresets
  }

  private get _themeStyle() {
    return themeVariableOrder
      .map((name) => `--${name}: ${this._theme[name]}`)
      .join('; ')
  }

  private get _radiusValue() {
    return Number.parseFloat(this._theme.radius.replace('rem', ''))
  }

  private get _fontLabel() {
    return fontOptions.find((option) => option.value === this._theme['font-sans'])?.label ?? 'Custom'
  }

  private _createTheme() {
    const defaults = this._dark ? darkDefaultTheme : defaultTheme
    const base = this._basePaletteSet[this._base]
    const style = this._stylePresetSet[this._style]

    return {
      ...defaults,
      ...base,
      ...style,
    }
  }

  private _syncDocumentTheme() {
    const nextDark = document.documentElement.classList.contains('dark')

    if (nextDark === this._dark) {
      return
    }

    const font = this._theme['font-sans']
    this._dark = nextDark
    this._theme = {
      ...this._createTheme(),
      'font-sans': font,
    }
  }

  private _setToken(token: ThemeVariable, value: string) {
    const next: ThemeValues = { ...this._theme, [token]: value }

    if (token === 'primary') {
      next['primary-foreground'] = this._foregroundFor(value)
    }

    if (token === 'accent') {
      next['accent-foreground'] = this._foregroundFor(value)
    }

    if (token === 'destructive') {
      next['destructive-foreground'] = this._foregroundFor(value)
    }

    this._theme = next
  }

  private _setColor(token: ThemeVariable, event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this._setToken(token, this._hexToHsl(input.value))
  }

  private _setRadius(event: Event) {
    const input = event.currentTarget as HTMLInputElement
    this._theme = { ...this._theme, radius: `${input.value}rem` }
  }

  private _setFont(value: string) {
    this._theme = { ...this._theme, 'font-sans': value }
  }

  private _applyBase(event: Event) {
    const select = event.currentTarget as HTMLSelectElement
    this._base = select.value
    this._theme = { ...this._theme, ...this._basePaletteSet[select.value] }
  }

  private _applyStyle(event: Event) {
    const select = event.currentTarget as HTMLSelectElement
    this._style = select.value
    this._theme = { ...this._theme, ...this._stylePresetSet[select.value] }
  }

  private _shuffle() {
    const bases = Object.keys(basePalettes)
    const styles = Object.keys(stylePresets)
    const base = bases[Math.floor(Math.random() * bases.length)]
    const style = styles[Math.floor(Math.random() * styles.length)]
    const hue = Math.floor(Math.random() * 360)
    const accentHue = (hue + 72 + Math.floor(Math.random() * 120)) % 360
    const chartHue = (hue + 32) % 360
    const primaryLightness = this._dark
      ? 58 + Math.floor(Math.random() * 14)
      : 38 + Math.floor(Math.random() * 13)
    const accentLightness = this._dark ? 16 : 94
    const primary = `${hue} ${64 + Math.floor(Math.random() * 18)}% ${primaryLightness}%`
    const accent = `${accentHue} ${52 + Math.floor(Math.random() * 18)}% ${accentLightness}%`
    const radius = [0.25, 0.375, 0.5, 0.625, 0.75, 1][Math.floor(Math.random() * 6)]

    this._base = base
    this._style = style
    this._theme = {
      ...this._theme,
      ...this._basePaletteSet[base],
      ...this._stylePresetSet[style],
      primary,
      'primary-foreground': this._foregroundFor(primary),
      accent,
      'accent-foreground': this._foregroundFor(accent),
      ring: primary,
      radius: `${radius}rem`,
      'chart-1': `${chartHue} 76% 56%`,
      'chart-2': `${(chartHue + 58) % 360} 62% 44%`,
      'chart-3': `${(chartHue + 123) % 360} 48% 42%`,
      'chart-4': `${(chartHue + 188) % 360} 78% 62%`,
      'chart-5': `${(chartHue + 247) % 360} 70% 58%`,
    }
  }

  private async _copyCss() {
    try {
      await navigator.clipboard.writeText(this._buildCss())
      this._copied = true
      window.setTimeout(() => {
        this._copied = false
      }, 1800)
    } catch {
      this._copied = false
    }
  }

  private _buildCss() {
    const variables = themeVariableOrder
      .map((name) => `  --${name}: ${this._theme[name]};`)
      .join('\n')

    return `${this._dark ? '.dark' : ':root'} {\n${variables}\n}\n`
  }

  private _hslToHex(value: string) {
    const match = value.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/)

    if (!match) {
      return '#000000'
    }

    const hue = Number.parseFloat(match[1]) / 360
    const saturation = Number.parseFloat(match[2]) / 100
    const lightness = Number.parseFloat(match[3]) / 100

    if (saturation === 0) {
      const channel = Math.round(lightness * 255)
      return this._toHex(channel, channel, channel)
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

    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation
    const p = 2 * lightness - q
    const red = Math.round(hueToRgb(p, q, hue + 1 / 3) * 255)
    const green = Math.round(hueToRgb(p, q, hue) * 255)
    const blue = Math.round(hueToRgb(p, q, hue - 1 / 3) * 255)

    return this._toHex(red, green, blue)
  }

  private _hexToHsl(value: string) {
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

      if (max === red) {
        hue = (green - blue) / delta + (green < blue ? 6 : 0)
      } else if (max === green) {
        hue = (blue - red) / delta + 2
      } else {
        hue = (red - green) / delta + 4
      }

      hue /= 6
    }

    return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`
  }

  private _toHex(red: number, green: number, blue: number) {
    return `#${[red, green, blue]
      .map((channel) => channel.toString(16).padStart(2, '0'))
      .join('')}`
  }

  private _foregroundFor(value: string) {
    const match = value.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/)
    const lightness = match ? Number.parseFloat(match[3]) : 50

    return lightness > 62 ? '0 0% 9%' : '0 0% 98%'
  }

  private _renderSelectControl(
    label: string,
    value: string,
    options: string[],
    onChange: (event: Event) => void,
  ) {
    return html`
      <div class="control-row">
        <span class="control-copy">
          <span>${label}</span>
          <strong>${value}</strong>
        </span>
        <select aria-label=${label} @change=${onChange}>
          ${options.map((option) => html`
            <option value=${option} ?selected=${option === value}>${option}</option>
          `)}
        </select>
      </div>
    `
  }

  private _renderColorControl(label: string, token: ThemeVariable, hint: string) {
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
          .value=${this._hslToHex(this._theme[token])}
          @input=${(event: Event) => this._setColor(token, event)}
          aria-label=${`${label} color`}
        >
      </div>
    `
  }

  render() {
    return html`
      <div class="generator" style=${this._themeStyle} data-testid="theme-generator">
        <aside class="controls" aria-label="Theme controls">
          <div class="controls-header">
            <span class="controls-title">
              <strong>Theme Generator</strong>
              <span>shadcn variables</span>
            </span>
            <button
              class="scx-icon scx-outline"
              type="button"
              aria-label="Shuffle theme"
              data-action="shuffle"
              data-testid="theme-shuffle"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 3h5v5"></path>
                <path d="M4 20 21 3"></path>
                <path d="M21 16v5h-5"></path>
                <path d="m15 15 6 6"></path>
                <path d="m4 4 5 5"></path>
              </svg>
            </button>
          </div>

          <div class="controls-body">
            <div class="control-group">
              ${this._renderSelectControl(
                'Style',
                this._style,
                Object.keys(stylePresets),
                (event) => this._applyStyle(event),
              )}
              ${this._renderSelectControl(
                'Base Color',
                this._base,
                Object.keys(basePalettes),
                (event) => this._applyBase(event),
              )}
              ${this._renderSelectControl(
                'Font',
                this._fontLabel,
                fontOptions.map((option) => option.label),
                (event) => {
                  const select = event.currentTarget as HTMLSelectElement
                  const option = fontOptions.find((item) => item.label === select.value)
                  if (option) this._setFont(option.value)
                },
              )}
            </div>

            <div class="control-group">
              ${colorControls.map((control) =>
                this._renderColorControl(control.label, control.token, control.hint),
              )}
            </div>

            <div class="control-group">
              <div class="radius-control">
                <div class="radius-head">
                  <span>Radius</span>
                  <strong>${this._theme.radius}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.125"
                  .value=${String(this._radiusValue)}
                  @input=${(event: Event) => this._setRadius(event)}
                  aria-label="Border radius"
                >
              </div>
              ${chartControls.map((control) =>
                this._renderColorControl(control.label, control.token, 'Chart token'),
              )}
            </div>

            <div class="action-stack">
              <button
                class="scx-outline"
                type="button"
                data-action="shuffle"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 3h5v5"></path>
                  <path d="M4 20 21 3"></path>
                  <path d="M21 16v5h-5"></path>
                  <path d="m15 15 6 6"></path>
                  <path d="m4 4 5 5"></path>
                </svg>
                Shuffle
              </button>
              <button
                type="button"
                data-action="export"
                data-testid="theme-export"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3v12"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M5 21h14"></path>
                </svg>
                ${this._copied ? 'Copied CSS' : 'Export CSS'}
              </button>
            </div>
          </div>
        </aside>

        <section class="preview" aria-label="Component preview">
          <div class="preview-header">
            <div class="preview-heading">
              <h1>Theme Preview</h1>
              <p>Native buttons, form controls, badges, lists, and chart colors using the current variable set.</p>
            </div>
            <div class="preview-actions">
              <button>Deploy</button>
              <button class="scx-outline">Preview</button>
            </div>
          </div>

          <div class="preview-body">
            <div class="showcase">
              <div class="section-title">
                <h2>Components</h2>
                <span>${this._base} / ${this._style}</span>
              </div>

              <div class="button-row">
                <button>Primary</button>
                <button class="scx-secondary">Secondary</button>
                <button class="scx-outline">Outline</button>
                <button class="scx-ghost">Ghost</button>
                <button class="scx-destructive">Delete</button>
              </div>

              <div class="badge-row">
                <mark>Default</mark>
                <mark class="scx-secondary">Secondary</mark>
                <mark class="scx-outline">Outline</mark>
                <mark class="scx-destructive">Invalid</mark>
              </div>

              <div class="form-grid">
                <div class="field">
                  <label for="generator-email">Email</label>
                  <input id="generator-email" value="hello@shadcx.dev">
                  <small>Border, input, text, and focus ring tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-invalid">Invalid state</label>
                  <input id="generator-invalid" value="Missing value" aria-invalid="true">
                  <small>Uses aria-invalid and destructive tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-framework">Framework</label>
                  <select id="generator-framework">
                    <option>Native HTML</option>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Svelte</option>
                  </select>
                </div>
                <label class="checkbox-line">
                  <input type="checkbox" checked>
                  Receive release notes
                </label>
              </div>

              <fieldset class="scx-option-list option-list">
                <legend>Menu Accent</legend>
                <button type="button" class="scx-outline" aria-pressed="true">Subtle</button>
                <button type="button" class="scx-outline" aria-pressed="false">Solid</button>
                <button type="button" class="scx-outline" aria-pressed="false">Ghost</button>
              </fieldset>
            </div>

            <div class="surface">
              <div>
                <h2>Color Tokens</h2>
                <p>Every swatch below is composed from the exported CSS variables.</p>
              </div>

              <div class="token-strip" aria-hidden="true">
                <div class="token"><span></span><strong>primary</strong></div>
                <div class="token"><span></span><strong>secondary</strong></div>
                <div class="token"><span></span><strong>accent</strong></div>
                <div class="token"><span></span><strong>destructive</strong></div>
                <div class="token"><span></span><strong>ring</strong></div>
              </div>

              <div class="chart-row" aria-hidden="true">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>

              <button
                class="scx-outline"
                type="button"
                data-action="export"
              >
                ${this._copied ? 'Copied CSS to clipboard' : 'Copy current variables'}
              </button>
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
