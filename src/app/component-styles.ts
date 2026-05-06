import { css, unsafeCSS } from 'lit'

const cssModules = import.meta.glob('../lib/*.css', {
  eager: true,
  query: '?inline',
  import: 'default',
}) as Record<string, string>

const baseStyles = ['../lib/theme.css', '../lib/preflight.css']

const componentCss = baseStyles
  .map((path) => cssModules[path])
  .filter(Boolean)
  .join('\n')

export const componentStyles = css`${unsafeCSS(componentCss)}`
