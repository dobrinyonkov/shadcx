import { css, unsafeCSS } from 'lit'
import themeCss from '../lib/theme.css?inline'
import preflightCss from '../lib/preflight.css?inline'
import badgeCss from '../lib/badge.css?inline'
import buttonCss from '../lib/button.css?inline'
import inputCss from '../lib/input.css?inline'
import checkboxCss from '../lib/checkbox.css?inline'
import comboboxCss from '../lib/combobox.css?inline'

const componentCss = [
  themeCss,
  preflightCss,
  badgeCss,
  buttonCss,
  inputCss,
  checkboxCss,
  comboboxCss,
].join('\n')

export const componentStyles = css`${unsafeCSS(componentCss)}`
