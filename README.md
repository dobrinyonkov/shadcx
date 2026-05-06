# shadcx

shadcn/ui reimagined as self-contained web components. No framework lock-in, no
Tailwind CSS — just copy-pasteable custom elements powered by shadcn-compatible
CSS variables.

## Quick Start

Load the shared theme CSS, import any component, and use it:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css" />
<script type="module" src="https://dobrinyonkov.github.io/shadcx/components/scx-button.js"></script>

<scx-button variant="outline">Button</scx-button>
<scx-input placeholder="Email" aria-invalid="true"></scx-input>
<scx-textarea placeholder="Message"></scx-textarea>
<scx-badge variant="secondary">Beta</scx-badge>
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
  components/        # Self-contained web components (copy-paste ready)
    scx-button.ts    # Button web component
    scx-input.ts     # Input web component
    scx-textarea.ts  # Textarea web component
    scx-checkbox.ts  # Checkbox web component
    scx-badge.ts     # Badge web component
    scx-select.ts    # Select web component
    scx-slider.ts    # Slider web component
  lib/               # Shared CSS variables and preflight
    theme.css         # shadcn-compatible CSS custom properties
    preflight.css     # Reset and base styles
  app/               # Playground / docs site
    app-layout.ts     # Shell layout
    app-sidebar.ts    # Sidebar navigation
    pages/            # One page per component
  main.ts            # Entry point
index.html           # Docs site entry HTML
```

## How to use a component

Each component is a single file. Copy it into your project, import it, and use
the tag:

```ts
import './scx-button.js'
```

```html
<scx-button variant="destructive" size="sm">Delete</scx-button>
```

You also need the shared `theme.css` (and optionally `preflight.css`) on your
page so the components can read the design tokens.

## Theming

shadcx uses CSS custom properties matching shadcn/ui's design token system. All
color values are stored as **HSL channels** and composed at usage sites:

```css
/* Definition */
--primary: 0 0% 9%;

/* Usage (inside component shadow DOM) */
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

Use the theme generator to tweak shadcn variables visually, preview the
components, shuffle palettes, and copy a ready-to-use `:root` block:
[shadcx docs → Theme Generator](https://dobrinyonkov.github.io/shadcx/#/theme-generator)

## Components API

### Button

```html
<scx-button variant="outline" size="sm">Click me</scx-button>
```

- `variant`: `destructive | outline | secondary | ghost | link`
- `size`: `xs | sm | lg | icon | icon-xs | icon-sm | icon-lg`
- `disabled`: boolean

### Input

```html
<scx-input type="email" placeholder="Email"></scx-input>
```

- `type`: any native input type
- `placeholder`, `disabled`, `readonly`, `required`, `aria-invalid`
- `value`: string

### Textarea

```html
<scx-textarea placeholder="Message" rows="4"></scx-textarea>
```

- `placeholder`, `rows`, `disabled`, `readonly`, `required`, `aria-invalid`
- `value`: string

### Checkbox

```html
<scx-checkbox checked></scx-checkbox>
```

- `checked`, `indeterminate`, `disabled`, `aria-invalid`

### Badge

```html
<scx-badge variant="outline">New</scx-badge>
```

- `variant`: `secondary | destructive | outline | ghost | link`

### Select

```html
<scx-select>
  <option>Next.js</option>
  <option>SvelteKit</option>
</scx-select>
```

- `disabled`, `multiple`, `aria-invalid`
- `value`: string

### Slider

```html
<scx-slider min="0" max="100" step="1" value="33"></scx-slider>
```

- `min`, `max`, `step`, `value`
- `disabled`, `orientation="vertical"`

## License

MIT
