import { html, type TemplateResult } from 'lit'

const pageModules = import.meta.glob('./pages/*-page.ts', { eager: true })

const corePages = new Map([
  ['/', { elementName: 'overview-page', label: 'Introduction', wide: false }],
  ['theming', { elementName: 'theming-page', label: 'Theming', wide: false }],
  ['theme-generator', { elementName: 'theme-generator-page', label: 'Theme Generator', wide: true }],
])

const componentOrder = ['badge', 'button', 'input', 'checkbox', 'combobox']

export interface PageRoute {
  route: string
  elementName: string
  label: string
  wide: boolean
}

function titleFromRoute(route: string) {
  return route
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

function routeFromPath(path: string) {
  const name = path.split('/').pop()?.replace(/-page\.ts$/, '') ?? ''
  return name === 'overview' ? '/' : name
}

const discoveredRoutes = Object.keys(pageModules)
  .map((path) => {
    const route = routeFromPath(path)
    const corePage = corePages.get(route)

    return {
      route,
      elementName: corePage?.elementName ?? `${route}-page`,
      label: corePage?.label ?? titleFromRoute(route),
      wide: corePage?.wide ?? false,
    }
  })

export const gettingStartedRoutes = ['/', 'theming', 'theme-generator']
  .map((route) => discoveredRoutes.find((page) => page.route === route))
  .filter((page): page is PageRoute => Boolean(page))

export const componentRoutes = discoveredRoutes
  .filter((page) => !corePages.has(page.route))
  .sort((a, b) => {
    const aIndex = componentOrder.indexOf(a.route)
    const bIndex = componentOrder.indexOf(b.route)
    const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex
    const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex

    return aRank - bRank || a.label.localeCompare(b.label)
  })

export function getPageRoute(route: string): PageRoute {
  return (
    discoveredRoutes.find((page) => page.route === route) ??
    discoveredRoutes.find((page) => page.route === '/') ??
    {
      route: '/',
      elementName: 'overview-page',
      label: 'Introduction',
      wide: false,
    }
  )
}

export function renderMissingPage(route: string): TemplateResult {
  return html`
    <section>
      <h1>${titleFromRoute(route)}</h1>
      <p>This page has not been registered yet.</p>
    </section>
  `
}
