# shadcn/ui to shadcx Conversion Guide

This guide documents the current shadcx target: **pure CSS over native HTML**.
There are no library Web Components, no component registration script, and no
runtime abstraction. Consumers load one bundled stylesheet and write semantic
HTML directly.

## Philosophy

| Concern | shadcn/ui | shadcx |
|---------|-----------|--------|
| Framework | React | Any HTML, any framework |
| Styling | Tailwind utilities | Bundled CSS |
| Runtime | React components | None for the library |
| Distribution | Copy source components | CDN stylesheet |
| Theming | shadcn CSS variables | Same shadcn CSS variables |
| State | React props plus ARIA | Native attributes, selectors, and ARIA |

Core rules:

1. Preserve the shadcn look as closely as native CSS allows.
2. Style semantic elements directly instead of wrapping them in custom elements.
3. Use shadcn variables as the theming entry point: `--primary`, `--radius`,
   `--foreground`, `--input`, `--ring`, and the rest.
4. Add small `scx-*` classes only when native HTML has no equivalent for a
   shadcn variant or size.
5. Prefer native events (`click`, `input`, `change`) and native state
   (`disabled`, `checked`, `:indeterminate`, `aria-invalid="true"`).

## Output Structure

Each converted component contributes CSS only:

```text
src/lib/
  index.css       # Vite-generated import entry for every library stylesheet
  theme.css       # shadcn-compatible variables
  preflight.css   # shared base reset
  button.css
  badge.css
  input.css
  textarea.css
  checkbox.css
  combobox.css
```

`src/main.ts` imports `src/lib/index.css`. The Vite `shadcx-css-index` plugin
discovers `src/lib/*.css`, keeps `theme.css` and `preflight.css` first, and
bundles the result into the single public stylesheet at
`dist/assets/index.css`.

Consumer usage:

```html
<link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css">

<button class="scx-outline">Save</button>
<input placeholder="Email" aria-invalid="true">
<textarea placeholder="Message"></textarea>
<mark class="scx-secondary">Beta</mark>
```

## Conversion Workflow

### 1. Analyze the shadcn Source

For each component, capture:

| Area | What to record |
|------|----------------|
| Element | The semantic HTML element to target |
| Variants | shadcn `variant` values and visual tokens |
| Sizes | shadcn `size` values and dimensions |
| State | hover, focus-visible, disabled, invalid, checked, open |
| Events | Native event equivalent |
| Theming | Which shadcn variables drive colors, borders, radius, text |

### 2. Choose the Native Target

| Old shadcx Web Component | CSS-only shadcx target | Notes |
|--------------------------|------------------------|-------|
| `<shadcx-button>` | `<button>` or `<a role="button">` | Variants and sizes use `scx-*` classes |
| `<shadcx-input>` | `<input>` | Invalid state uses `aria-invalid="true"` |
| `<shadcx-textarea>` | `<textarea>` | Invalid state uses `aria-invalid="true"` |
| `<shadcx-checkbox>` | `<input type="checkbox">` | Checked and indeterminate use native selectors |
| `<shadcx-badge>` | `<mark>` | Variants use `scx-*` classes |
| `<shadcx-combobox>` | `<select>`, `<input list>`, or `fieldset.scx-option-list` | Browser owns dropdown/autocomplete behavior |

When a shadcn behavior depends on JavaScript, the library does not recreate it.
The consuming app can add native JavaScript around the semantic element.

`input[list]` is intentionally limited: browsers do not expose the datalist
popup for reliable custom styling. For a fully styled autocomplete dropdown,
use app-level JavaScript and ARIA listbox markup; keep that behavior outside the
CSS library.

### 3. Translate Tailwind to CSS Variables

| Tailwind / shadcn | shadcx CSS |
|-------------------|------------|
| `bg-primary` | `background-color: hsl(var(--primary))` |
| `text-primary-foreground` | `color: hsl(var(--primary-foreground))` |
| `border-input` | `border-color: hsl(var(--input))` |
| `ring-ring` | `box-shadow: 0 0 0 4px hsl(var(--ring))` |
| `rounded-md` | `border-radius: calc(var(--radius) - 2px)` |
| `h-9` | `height: 2.25rem` |
| `px-4` | `padding-inline: 1rem` |
| `text-sm` | `font-size: 0.875rem` |
| `font-medium` | `font-weight: 500` |
| `transition-colors` | transition color, background, border, and shadow |

### 4. Map Variants and Sizes

Use the native element as the default style. Add classes only for alternatives:

```html
<button>Default</button>
<button class="scx-secondary">Secondary</button>
<button class="scx-destructive">Destructive</button>
<button class="scx-outline">Outline</button>
<button class="scx-ghost">Ghost</button>
<button class="scx-link">Link</button>

<button class="scx-sm">Small</button>
<button class="scx-lg">Large</button>
<button class="scx-icon scx-outline" aria-label="Search">...</button>
```

Recommended shared class names:

| Purpose | Classes |
|---------|---------|
| Variant | `scx-secondary`, `scx-destructive`, `scx-outline`, `scx-ghost`, `scx-link` |
| Button size | `scx-xs`, `scx-sm`, `scx-lg` |
| Icon button size | `scx-icon`, `scx-icon-xs`, `scx-icon-sm`, `scx-icon-lg` |

### 5. Map State

| shadcn state | CSS-only state |
|--------------|----------------|
| `disabled` prop | Native `disabled` attribute |
| `aria-invalid` prop | `aria-invalid="true"` |
| Checkbox checked | `input[type="checkbox"]:checked` |
| Checkbox indeterminate | `input[type="checkbox"]:indeterminate` |
| Focus ring | `:focus-visible` |
| Hover | `:hover` |
| Controlled value | Native `input` or `change` events |

Example:

```html
<input placeholder="Email" aria-invalid="true">

<input id="partial" type="checkbox" aria-checked="mixed">
<script>
  document.getElementById('partial').indeterminate = true
</script>
```

### 6. Keep Theming Centralized

Do not introduce component-specific theme systems unless a real component need
appears. Prefer the shadcn variables:

```css
:root {
  --primary: 260 80% 50%;
  --primary-foreground: 0 0% 100%;
  --radius: 0.75rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
}
```

Component CSS should compose colors at the usage site:

```css
button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-radius: calc(var(--radius) - 2px);
}
```

## Playground Updates

The playground may remain a Lit app, but examples must render native HTML and
use native events:

| Old example | New example |
|-------------|-------------|
| `<shadcx-button variant="outline">` | `<button class="scx-outline">` |
| `<shadcx-input aria-invalid="true">` | `<input aria-invalid="true">` |
| `<shadcx-checkbox @checked-change=...>` | `<input type="checkbox" @change=...>` |
| `<shadcx-combobox @value-change=...>` | `<select @change=...>` or `<input list @input=...>` |

Because the playground renders examples inside shadow roots, import the library
CSS into those docs pages as shared preview styles. This is a playground-only
implementation detail; consumers still load just the single CSS file.

The playground also includes a theme generator route at `#/theme-generator`.
It should remain a docs/tooling feature: the generator can use Lit state and
browser clipboard APIs, but the exported result is still plain CSS variables
for `:root`. Its preview should use the same native elements and `scx-*`
classes as the component docs, so changes to the CSS library are visible in one
place.

## Validation Checklist

Before marking a conversion complete:

- The old component `.ts` file is removed from `src/lib`.
- The component has a `src/lib/component-name.css` file. Do not add it to an
  import list; Vite discovers it automatically.
- The playground has a matching `src/app/pages/component-name-page.ts` file
  registered as `<component-name-page>`. The route and sidebar entry are
  discovered automatically.
- `src/main.ts` imports only the bundled CSS plus the playground shell.
- Docs and examples use native HTML, not `shadcx-*` elements.
- Installation snippets include only the stylesheet link.
- Variants, sizes, hover, focus, disabled, and invalid states match shadcn as
  closely as possible.
- Colors, borders, radius, focus rings, and text colors come from shadcn
  variables.
- Native events replace custom events.
- `pnpm build` emits a single public CSS asset for consumption.

## Component Reference

### Button

```html
<button>Default</button>
<button class="scx-outline">Outline</button>
<button class="scx-secondary">Secondary</button>
<button class="scx-icon" aria-label="Open menu">...</button>
```

### Input

```html
<input placeholder="Name">
<input type="email" aria-invalid="true">
```

### Textarea

```html
<textarea placeholder="Message"></textarea>
<textarea placeholder="Message" aria-invalid="true"></textarea>
```

### Checkbox

```html
<label>
  <input type="checkbox">
  Accept terms
</label>
```

### Badge

```html
<mark>Default</mark>
<mark class="scx-destructive">Error</mark>
<mark class="scx-outline">New</mark>
```

### Combobox

```html
<select name="framework">
  <option value="">Select a framework</option>
  <option>Next.js</option>
  <option>SvelteKit</option>
</select>

<input list="frameworks" placeholder="Search frameworks">
<datalist id="frameworks">
  <option value="Next.js"></option>
  <option value="SvelteKit"></option>
</datalist>

<fieldset class="scx-option-list">
  <legend>Frameworks</legend>
  <button type="button" class="scx-outline" aria-pressed="false">Next.js</button>
  <button type="button" class="scx-outline" aria-pressed="false">SvelteKit</button>
</fieldset>
```
