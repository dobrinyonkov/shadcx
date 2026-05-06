const pageModules = import.meta.glob('./pages/*-page.ts', { eager: true }) as Record<string, any>

export interface PageInfo {
  name: string
  tag: string
  title: string
  description: string
  hash: string
}

function discoverPages(): PageInfo[] {
  return Object.keys(pageModules)
    .map((path) => {
      const match = path.match(/\/([^/]+)-page\.ts$/)
      if (!match) return null
      const name = match[1]
      const mod = pageModules[path]
      const title = name
        .split('-')
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join(' ')
      const hash = name === 'overview' ? '/' : name
      return {
        name,
        tag: `${name}-page`,
        title,
        description: (mod?.description as string) ?? '',
        hash,
      }
    })
    .filter(Boolean) as PageInfo[]
}

export const allPages = discoverPages()

const gettingStartedSet = new Set(['overview', 'theming', 'theme-generator'])

export const gettingStartedPages = [
  allPages.find((p) => p.name === 'overview'),
  allPages.find((p) => p.name === 'theming'),
  allPages.find((p) => p.name === 'theme-generator'),
].filter(Boolean) as PageInfo[]

export const componentPages = allPages
  .filter((p) => !gettingStartedSet.has(p.name))
  .sort((a, b) => a.name.localeCompare(b.name))
