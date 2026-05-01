# shadcx

shadcn/ui reimagined as pure CSS for native HTML. No framework lock-in, no
Tailwind CSS, no Web Components runtime - just semantic elements styled by
shadcn-compatible variables.

## Quick Start

Load one stylesheet and use native elements:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css" />

<button class="scx-outline">Button</button>
<input placeholder="Email" aria-invalid="true" />
<textarea placeholder="Message"></textarea>
<mark class="scx-secondary">Beta</mark>
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
  lib/               # The CSS library (bundled to one public stylesheet)
    index.css         # Generated import entry for every lib/*.css file
    theme.css         # shadcn-compatible CSS custom properties
    button.css        # Native button styles and scx-* variants
    input.css         # Native input styles
    textarea.css      # Native textarea styles
    checkbox.css      # Native checkbox states
    badge.css         # mark-based badge styles
    combobox.css      # select and input[list] styles
  app/               # Playground / docs site
    app-layout.ts     # Shell layout (sidebar + content + hash router)
    app-sidebar.ts    # Sidebar navigation
    pages/            # Theming, generator, and one page per component
  main.ts            # Entry point - loads CSS + playground
index.html           # Docs site entry HTML
```

Adding a component is file-based: add `src/lib/component-name.css` and
`src/app/pages/component-name-page.ts`. Vite discovers both automatically,
bundles the CSS into `dist/assets/index.css`, registers the playground page,
and adds the page to the component navigation.

## Theming

shadcx uses CSS custom properties matching shadcn/ui's design token system. All color values are stored as **HSL channels** and composed at usage sites:

```css
/* Definition */
--primary: 0 0% 9%;

/* Usage (in component CSS) */
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

Use the theme generator to tweak shadcn variables visually, preview the native
components, shuffle palettes, and copy a ready-to-use `:root` block:
[shadcx docs → Theme Generator](https://dobrinyonkov.github.io/shadcx/#/theme-generator)

## Native API

shadcx styles HTML directly:

```html
<button>Default</button>
<button class="scx-secondary">Secondary</button>
<button class="scx-destructive">Delete</button>
<button class="scx-icon scx-outline" aria-label="Search">...</button>

<input placeholder="Name" />
<textarea placeholder="Message"></textarea>
<input type="checkbox" aria-invalid="true" />

<select>
  <option>Select a framework</option>
</select>

<fieldset class="scx-option-list">
  <legend>Frameworks</legend>
  <button type="button" class="scx-outline" aria-pressed="false">Next.js</button>
  <button type="button" class="scx-outline" aria-pressed="false">SvelteKit</button>
</fieldset>
```

State uses native selectors and ARIA attributes, for example `:disabled`,
`:checked`, `:indeterminate`, `:focus-visible`, and `aria-invalid="true"`.

## License

MIT
