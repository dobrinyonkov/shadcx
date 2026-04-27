# shadcx

shadcn/ui reimagined as Web Components. No framework lock-in, no Tailwind CSS — just reusable components that work anywhere.

## Quick Start

Load via CDN and drop components into any HTML page:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css" />
<script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/index.js"></script>

<shadcx-button variant="default">Click me</shadcx-button>
<shadcx-input placeholder="Type something..."></shadcx-input>
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
    button.ts         # <shadcx-button>
    input.ts          # <shadcx-input>
    index.ts          # Barrel export
  app/               # Playground / docs site
    app-layout.ts     # Shell layout (sidebar + content + hash router)
    app-sidebar.ts    # Sidebar navigation
    pages/            # One page per component
  main.ts            # Entry point — loads theme + components + playground
index.html           # Docs site entry HTML
```

## Component API

### Button

```html
<shadcx-button variant="outline" size="lg" disabled>Button</shadcx-button>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"default" \| "outline" \| "ghost" \| "destructive" \| "secondary" \| "link"` | `"default"` |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` |
| `disabled` | `boolean` | `false` |

**CSS Part:** `root` — the inner `<button>` element.

### Input

```html
<shadcx-input placeholder="Email" type="email" disabled></shadcx-input>
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `string` | `"text"` |
| `placeholder` | `string` | `""` |
| `value` | `string` | `""` |
| `name` | `string` | `""` |
| `disabled` | `boolean` | `false` |
| `required` | `boolean` | `false` |
| `readonly` | `boolean` | `false` |

**Event:** `shadcx-input` — fires on every keystroke with `detail: { value: string }`.

**CSS Part:** `root` — the inner `<input>` element.

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
