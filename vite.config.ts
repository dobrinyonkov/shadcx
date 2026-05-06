import { defineConfig } from 'vite'
import ts from 'typescript'

const sourceJsPlugin = {
  name: 'source-js',
  enforce: 'pre' as const,
  async load(id: string) {
    if (!id.endsWith('?source-js')) {
      return null
    }

    const file = id.slice(0, -'?source-js'.length)
    const source = await import('node:fs/promises').then((fs) => fs.readFile(file, 'utf8'))
    const output = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        useDefineForClassFields: true,
      },
    }).outputText.trim()

    return `export default ${JSON.stringify(output)}`
  },
}

export default defineConfig({
  base: process.env.BASE_PATH || '/shadcx/',
  plugins: [sourceJsPlugin],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        theme: 'src/lib/theme.css',
        badge: 'src/lib/badge.ts',
        button: 'src/lib/button.ts',
        checkbox: 'src/lib/checkbox.ts',
        combobox: 'src/lib/combobox.ts',
        input: 'src/lib/input.ts',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
