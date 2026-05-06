import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, normalizePath, type Plugin } from 'vite'

function shadcxCssIndex(): Plugin {
  const libDir = resolve(process.cwd(), 'src/lib')
  const indexPath = normalizePath(resolve(libDir, 'index.css'))
  const baseStyles = ['theme.css', 'preflight.css']

  function buildIndexCss() {
    const cssFiles = new Set(
      readdirSync(libDir).filter(
        (file) => file.endsWith('.css') && file !== 'index.css',
      ),
    )
    const orderedFiles = [
      ...baseStyles.filter((file) => cssFiles.delete(file)),
      ...Array.from(cssFiles).sort((a, b) => a.localeCompare(b)),
    ]

    return `${orderedFiles
      .map((file) => `@import './${file}';`)
      .join('\n')}\n`
  }

  return {
    name: 'shadcx-css-index',
    enforce: 'pre',
    transform(_, id) {
      if (normalizePath(id) !== indexPath) {
        return null
      }

      return {
        code: buildIndexCss(),
        map: null,
      }
    },
    configureServer(server) {
      server.watcher.add(libDir)
      server.watcher.on('all', (event, file) => {
        const normalized = normalizePath(file)
        if (
          !normalized.startsWith(`${normalizePath(libDir)}/`) ||
          !normalized.endsWith('.css')
        ) {
          return
        }

        const indexModule = server.moduleGraph.getModuleById(indexPath)
        if (indexModule) {
          server.moduleGraph.invalidateModule(indexModule)
        }

        if (event === 'add' || event === 'unlink') {
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}

export default defineConfig({
  base: process.env.BASE_PATH || '/shadcx/',
  plugins: [shadcxCssIndex()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
