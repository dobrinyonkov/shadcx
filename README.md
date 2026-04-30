# shadcx

shadcn-style design tokens + component styling as **pure CSS**.

## Quick Start

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/style.css" />
```

Use semantic elements directly (no JS runtime, no wrappers):

```html
<button>Primary</button>
<button class="scx-secondary">Secondary</button>
<input aria-invalid="true" placeholder="Required" />
<span class="scx-badge scx-outline">Badge</span>
```

## Theming entry point

shadcx keeps shadcn-compatible variables as the theme API:

```css
:root {
  --primary: 260 80% 50%;
  --primary-foreground: 0 0% 100%;
  --radius: 0.75rem;
}
```

Dark mode uses `.dark` on `<html>`.

## Dev

```bash
pnpm install
pnpm dev
pnpm build
```

## Output

Vite bundles library styles into one CSS file (`assets/style.css`).
