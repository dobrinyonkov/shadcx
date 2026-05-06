---
name: shadcx
description: Build UIs with shadcx self-contained Web Components. Use this skill when the user wants to create web pages, dashboards, forms, or any UI using shadcx components. Covers CDN usage, theming, component APIs, and patterns for composing layouts without a build step.
license: MIT
---

This skill guides the use of shadcx — self-contained Web Components that mirror shadcn/ui but work in any HTML page without frameworks or build tools.

## Philosophy

shadcx components are:
- **Self-contained**: Each component is a single file with its own CSS, HTML template, and JS. No shared imports.
- **Framework-agnostic**: Vanilla `HTMLElement` custom elements. Works in React, Vue, Svelte, or plain HTML.
- **Theme-driven**: All styling comes from CSS custom properties in `theme.css`. Change variables, change the look.
- **CDN-ready**: Use with `<script type="module">` — no bundler needed.

## Quick Start

Load the theme and any components you need:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css">
<script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/button.js"></script>
<script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/input.js"></script>

<shadcx-button>Click me</shadcx-button>
<shadcx-input placeholder="Type here..."></shadcx-input>
```

## Components

### Button
- **Variants**: `default` | `secondary` | `destructive` | `outline` | `ghost`
- **Sizes**: `default` | `sm` | `lg` | `icon-sm`
- **Attributes**: `variant`, `size`, `disabled`
- **CSS Part**: `::part(root)` for custom overrides

```html
<shadcx-button variant="destructive" size="sm">Delete</shadcx-button>
```

### Input
- **Attributes**: `type`, `placeholder`, `value`, `disabled`, `aria-invalid`
- When `aria-invalid="true"`, shows destructive border and focus ring
- **CSS Part**: `::part(root)`

```html
<shadcx-input placeholder="Email" aria-invalid="true"></shadcx-input>
```

### Badge
- **Variants**: `default` | `secondary` | `destructive` | `outline` | `ghost` | `link`
- **Inline icons**: Add `<svg data-icon="inline-start">` or `<svg data-icon="inline-end">` inside the badge

```html
<shadcx-badge variant="outline">
  <svg data-icon="inline-start" ...></svg>
  Verified
</shadcx-badge>
```

### Checkbox
- **Attributes**: `checked`, `indeterminate`, `disabled`, `aria-invalid`
- **Events**: `input`, `change`, `checked-change` (CustomEvent with `{ checked, indeterminate, state }`)

```html
<shadcx-checkbox checked></shadcx-checkbox>
```

### Combobox
- **Properties**: `.items` (array of strings), `.value` (string), `.open` (boolean)
- **Keyboard**: Arrow keys to navigate, Enter to select, Escape to close
- **Clear button**: Appears when a value is selected

```html
<script type="module">
  const cb = document.querySelector('shadcx-combobox')
  cb.items = ['React', 'Vue', 'Svelte', 'Angular']
  cb.value = 'React'
</script>
<shadcx-combobox></shadcx-combobox>
```

## Theming

The `theme.css` file defines CSS custom properties under `:root` and `.dark`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --radius: 0.5rem;
  /* ... */
}
```

Colors are in HSL format: `hue saturation% lightness%`. Use `hsl(var(--primary))` in your own CSS.

Override variables to retheme:

```html
<style>
  :root {
    --primary: 263 70% 50%;
    --radius: 0.75rem;
  }
</style>
```

## Layout Patterns

### Form field with label

```html
<div style="display:grid;gap:0.375rem">
  <label style="font-size:0.875rem;font-weight:500">Email</label>
  <shadcx-input placeholder="you@example.com"></shadcx-input>
  <small style="font-size:0.8125rem;color:hsl(var(--muted-foreground))">We won't spam you.</small>
</div>
```

### Card (inline until shadcx Card exists)

```html
<div style="border:1px solid hsl(var(--border));border-radius:calc(var(--radius) - 2px);padding:1rem">
  <h3 style="font-size:0.875rem;font-weight:600;margin-bottom:0.5rem">Card Title</h3>
  <p style="font-size:0.8125rem;color:hsl(var(--muted-foreground))">Card content here.</p>
</div>
```

### Horizontal button row

```html
<div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
  <shadcx-button>Primary</shadcx-button>
  <shadcx-button variant="secondary">Secondary</shadcx-button>
  <shadcx-button variant="outline">Cancel</shadcx-button>
</div>
```

## Advanced

### Customizing a component instance

Use `::part(root)` to override a single instance:

```html
<style>
  shadcx-badge.success::part(root) {
    background-color: hsl(142 71% 45% / 0.15);
    border-color: hsl(142 71% 45% / 0.35);
    color: hsl(142 84% 25%);
  }
</style>
<shadcx-badge class="success">Success</shadcx-badge>
```

### Dark mode

Toggle `.dark` on `<html>` and set `color-scheme: dark`:

```html
<html class="dark" style="color-scheme:dark">
```

The `theme.css` file provides `.dark` overrides for all variables.

### Self-hosting

Download `theme.css` and individual `.js` files from the GitHub releases or build from source. No npm install needed for consumers.

## Rules

- Always load `theme.css` before component scripts.
- Components self-register on import. Do not manually call `customElements.define`.
- Use `shadcx-*` tag names as shown — custom element names are fixed.
- For missing primitives (Card, Select, Dialog, Tabs, Table), compose with HTML + CSS using the theme variables, or inline a custom element. Mark with a comment `<!-- replace with shadcx X -->` for future migration.
