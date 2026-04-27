# shadcx

shadcn/ui reimagined as Web Components. No framework lock-in, no Tailwind CSS — just reusable components that work anywhere.

## Quick Start

Load via CDN and drop components into any HTML page:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css" />
<script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/index.js"></script>
```

## Dev Setup

```bash
# Clone
git clone https://github.com/dobrinyonkov/shadcx.git
cd shadcx

# Install dependencies (requires pnpm)
pnpm install

# Start dev server
pnpm dev

# Build
pnpm build

# Preview build locally
pnpm preview
```

## Project Structure

```
src/
  lib/               # The component library (published to CDN)
    theme.css         # CSS custom properties (theming layer)
    index.ts          # Barrel export
  app/               # Playground / docs site
    app-layout.ts     # Shell layout (sidebar + content + hash router)
    app-sidebar.ts    # Sidebar navigation
    pages/            # One page per component
  main.ts            # Entry point — loads theme + components + playground
index.html           # Docs site entry HTML
```

## Theming

shadcx uses CSS custom properties matching shadcn/ui's design token system. All color values are stored as **HSL channels** and composed at usage sites:

```css
/* Definition */
--primary: 0 0% 9%;

/* Usage (in component shadow DOM) */
background-color: hsl(var(--primary));
```

Override any token to customize the theme:

```css
:root {
  --primary: 260 80% 50%;
  --radius: 0.75rem;
}
```

Dark mode is activated by adding the `.dark` class to `<html>`:

```js
document.documentElement.classList.add('dark')
```

Full theming documentation: [shadcx docs → Theming](https://dobrinyonkov.github.io/shadcx/#/theming)

## License

MIT
