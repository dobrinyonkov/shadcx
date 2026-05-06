import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const sourceJsPlugin = {
  name: 'source-js',
  enforce: 'pre' as const,
  async load(id: string) {
    if (!id.endsWith('?source-js')) {
      return null
    }

    const file = id.slice(0, -'?source-js'.length)
    const source = await import('node:fs/promises').then((f) => f.readFile(file, 'utf8'))
    const output = ts
      .transpileModule(source, {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ES2022,
          useDefineForClassFields: true,
        },
      })
      .outputText.trim()

    return `export default ${JSON.stringify(output)}`
  },
}

function discoverComponentEntries() {
  const libDir = path.resolve(__dirname, 'src/lib')
  const files = fs.readdirSync(libDir)
  const entries: Record<string, string> = {}

  for (const file of files) {
    if (!file.endsWith('.ts') || file === 'index.ts') continue
    const name = file.replace('.ts', '')
    entries[name] = `src/lib/${file}`
  }

  return entries
}

function generateBarrel() {
  const libDir = path.resolve(__dirname, 'src/lib')
  const files = fs
    .readdirSync(libDir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .sort()

  const exports = files.map((file) => {
    const name = file.replace('.ts', '')
    const className = name[0].toUpperCase() + name.slice(1)
    return `export { ${className} } from './${file}'`
  })

  const content = `// Auto-generated barrel file — do not edit manually\n${exports.join('\n')}\n`
  const indexPath = path.join(libDir, 'index.ts')
  const existing = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : ''
  if (existing !== content) {
    fs.writeFileSync(indexPath, content)
  }
}

const autoBarrelPlugin = {
  name: 'auto-barrel',
  enforce: 'pre' as const,
  buildStart() {
    generateBarrel()
  },
}

export default defineConfig({
  base: process.env.BASE_PATH || '/shadcx/',
  plugins: [sourceJsPlugin, autoBarrelPlugin],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        demo: 'demo/index.html',
        theme: 'src/lib/theme.css',
        ...discoverComponentEntries(),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
