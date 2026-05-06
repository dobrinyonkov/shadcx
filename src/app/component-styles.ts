import { css, unsafeCSS } from 'lit'

const cssModules = import.meta.glob('../lib/*.css', {
  eager: true,
  query: '?inline',
  import: 'default',
}) as Record<string, string>

const baseStyles = ['../lib/theme.css', '../lib/preflight.css']
const componentStylesheets = Object.entries(cssModules)
  .filter(([path]) => !baseStyles.includes(path) && path !== '../lib/index.css')
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, styles]) => styles)

const componentCss = [
  ...baseStyles.map((path) => cssModules[path]).filter(Boolean),
  ...componentStylesheets,
].join('\n')

export const componentStyles = css`${unsafeCSS(componentCss)}`
