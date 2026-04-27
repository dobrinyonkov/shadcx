# shadcn/ui → shadcx Conversion Guide

This guide provides a repeatable methodology for converting **shadcn/ui** (React + Tailwind CSS) components into **shadcx** (Web Components + CSS Custom Properties). It preserves meaning, accessibility, and the shadcn API surface while targeting a framework-agnostic, no-Tailwind output.

## Philosophy

### Why Convert?

| Concern | shadcn/ui | shadcx |
|---------|-----------|--------|
| **Framework lock-in** | React only | Any HTML page, any framework |
| **Styling system** | Tailwind CSS required | CSS custom properties (theme layer) |
| **Build dependency** | JSX → React → Tailwind → PostCSS | Standard ES modules, no preprocessor |
| **Distribution** | Copy source files | CDN-importable `<script type="module">` |
| **Scoped styles** | Tailwind utility classes | Shadow DOM |
| **Customization** | Override via className / tailwind.config | CSS custom properties + `::part()` |

### Core Principles

1. **Preserve Meaning First** — Every variant, size, state, and behavior must be accounted for
2. **No Silent Loss** — Each shadcn feature is explicitly mapped, adapted, or documented as out-of-scope
3. **Clarity Over Fidelity** — Use idiomatic Web Component patterns instead of 1:1 React translation
4. **Consistency by Default** — Follow Lit conventions, shadow DOM best practices, CSS property naming
5. **Extensibility** — Components must be styleable from outside via `::part()` and CSS custom properties

---

## Conversion Workflow

### Phase 1: Analyze the Source (shadcn component)

For each shadcn component being converted, document:

**Structure**
- JSX element tree (what nested elements exist)
- Which elements receive what Tailwind classes
- Slots / children placement

**Properties**
| Prop | Type | Default | shadcn purpose |
|------|------|---------|-----------------|
| `variant` | `"default" \| "outline" \| ...` | `"default"` | Visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| ...` | `"default"` | Dimension preset |
| `asChild` | `boolean` | `false` | Slot-based composition |

**States**
- hover, focus-visible, active, disabled, aria-invalid
- Which Tailwind classes map to which states
- Any programmatic state (loading, open, checked)

**Interactions / Events**
- Click handlers
- Keyboard handling (Enter, Space, Escape)
- Custom event callbacks (onClick, onChange)

**Dependencies**
- `class-variance-authority` (CVA) for variant composition
- `@radix-ui/react-slot` for `asChild`
- `tailwind-merge` / `clsx` for className merging
- Tailwind theme tokens → shadcn CSS variables

→ **Output**: A complete feature checklist (see Appendix)

---

### Phase 2: Design the Target Model (shadcx Web Component)

#### Mapping Table

| shadcn Concept | shadcx Equivalent | Notes |
|----------------|-------------------|-------|
| **JSX element** | `render()` returning `html\`<...>\`` | Lit template literal |
| **Props** | `@property()` decorators | Reflect to attributes for CSS selectors |
| **className** | `data-*` attributes in shadow DOM | Enables variant/size-based CSS |
| **Tailwind classes** | Shadow DOM `css\`...\`` static styles | Scoped, no collision |
| **CVA variants** | `data-variant="..."` + CSS attribute selectors | `[data-variant="ghost"] { ... }` |
| **`asChild`** | Slot | User puts content inside `<shadcx-button>` |
| **hover:** | `:hover` in shadow CSS | `[data-variant="outline"]:hover { ... }` |
| **focus-visible:** | `:focus-visible` in shadow CSS | `:focus-visible { box-shadow: ... }` |
| **Tailwind colors** | `hsl(var(--primary))` | Theme tokens as HSL channels |
| **Tailwind spacing** | `rem`-based inline values | `height: 2.25rem; padding-inline: 1rem` |
| **`onClick` handler** | `@click=${this._handler}` in template | Lit event binding |
| **React children** | `<slot></slot>` | Default slot for content |
| **forwardRef** | `this.shadowRoot?.querySelector(...)` | Or expose via `@query()` |
| **`aria-*` props** | `aria-*` attributes on shadow elements | Same semantics |
| **`disabled` prop** | `@property({ reflect: true })` | `:host([disabled])` for styling |

#### Unmappable Features (Explicit Decisions)

| shadcn Feature | Reason Unmappable | shadcx Decision |
|----------------|-------------------|-----------------|
| `asChild` (React cloneElement) | No React render delegation | Use `<slot>` — the consumer wraps their element inside the component |
| `className` merging | No Tailwind class strings | Expose `::part()` for external CSS |
| `forwardRef` | No imperative refs | Use DOM APIs, events, or `::part()` |
| Tailwind `dark:` prefix | Media query or class toggle | Use `.dark` class on `<html>` → CSS custom properties cascade through shadow DOM |
| CVA `compoundVariants` | Conditional variant logic | Handle with explicit CSS rules or Lit reactive properties |

#### Component Structure Template

```
target-component.ts
├── @customElement('shadcx-<name>')
├── @property() declarations (variant, size, disabled, ...)
├── static styles = css`...` (shadow DOM styles)
│   ├── :host { base host styles }
│   ├── [data-variant="..."] { variant styles }
│   ├── [data-size="..."] { size styles }
│   ├── :hover, :focus-visible, :disabled states
│   └── ::slotted() styles for icon spacing
├── render() → html`<element part="root" data-*="..."><slot></slot></element>`
└── declare global { HTMLElementTagNameMap }
```

---

### Phase 3: Implement the Transformation

#### Step 1: Translate Structure

**shadcn button.tsx:**
```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
```

**shadcx button.ts:**
```ts
@customElement('shadcx-button')
export class Button extends LitElement {
  @property({ type: String, reflect: true }) variant: ButtonVariant = 'default'
  @property({ type: String, reflect: true }) size: ButtonSize = 'default'
  @property({ type: Boolean, reflect: true }) disabled = false

  render() {
    return html`
      <button part="root" data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `
  }
}
```

Key differences explained:

1. **No `forwardRef`** — Web Components expose their DOM via `shadowRoot`, events, and `::part()`. No imperative ref pattern needed.
2. **No `asChild`** — The default `<slot>` achieves the same goal: place your own element inside the component.
3. **`data-*` attributes instead of `className`** — Enables variant/size CSS in shadow DOM without class string manipulation.
4. **No CVA** — Variant composition is handled by CSS attribute selectors, which cascade naturally.

#### Step 2: Translate Styling

**shadcn (CVA + Tailwind):**
```ts
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline: "border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        // ...
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        // ...
      },
    },
  }
)
```

**shadcx (CSS custom properties in shadow DOM):**
```css
/* Base */
.root {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
}

/* Size: default (h-9 px-4 py-2) */
[data-size='default'] { height: 2.25rem; padding-inline: 1rem; }
[data-size='sm'] { height: 2rem; padding-inline: 0.75rem; font-size: 0.8125rem; }

/* Variant: default (bg-primary text-primary-foreground) */
[data-variant='default'] {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
[data-variant='default']:hover {
  background-color: hsl(var(--primary) / 0.9);
}

/* Variant: outline */
[data-variant='outline'] {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}
[data-variant='outline']:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}
```

**Tailwind shorthand → CSS mapping cheatsheet:**

| Tailwind | CSS Equivalent |
|----------|---------------|
| `h-9` | `height: 2.25rem` |
| `px-4` | `padding-inline: 1rem` |
| `text-sm` | `font-size: 0.875rem` |
| `font-medium` | `font-weight: 500` |
| `rounded-md` | `border-radius: calc(var(--radius) - 2px)` |
| `bg-primary` | `background-color: hsl(var(--primary))` |
| `text-primary-foreground` | `color: hsl(var(--primary-foreground))` |
| `hover:bg-primary/90` | `:hover { background-color: hsl(var(--primary) / 0.9) }` |
| `border` | `border: 1px solid hsl(var(--border))` |
| `shadow` | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)` |
| `focus-visible:ring-2` | `:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)) }` |
| `transition-colors` | `transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s` |
| `whitespace-nowrap` | `white-space: nowrap` |
| `gap-2` | `gap: 0.5rem` |
| `inline-flex` | `display: inline-flex` |
| `items-center` | `align-items: center` |
| `justify-center` | `justify-content: center` |
| `disabled:opacity-50` | `:disabled { opacity: 0.5 }` |
| `disabled:pointer-events-none` | `:host([disabled]) { pointer-events: none }` |

#### Step 3: Translate State & Interactions

| shadcn Pattern | shadcx Pattern |
|----------------|----------------|
| `onClick={handler}` | `@click=${this._handler}` in Lit template |
| `onChange={(e) => setValue(e.target.value)}` | `@input=${this._onInput}` → dispatch `CustomEvent` |
| `disabled` prop | `@property({ reflect: true })` → CSS `:host([disabled])` + `:disabled` |
| `aria-*` attributes | Same attributes on shadow DOM elements |
| Controlled vs uncontrolled | One-way binding with `@property()`; two-way via custom events |

---

### Phase 4: Preserve Quality Attributes

| Quality | shadcn Approach | shadcx Equivalent |
|---------|----------------|------------------|
| **Accessibility** | `aria-*` attributes on JSX elements | Same `aria-*` on shadow DOM elements |
| **Keyboard** | React synthetic events | Native DOM events (same behavior) |
| **Focus ring** | `focus-visible:ring-2 ring-offset-2` | `:focus-visible { box-shadow: 0 0 0 2px bg, 0 0 0 4px ring }` |
| **Hover states** | Tailwind `hover:` variants | CSS `:hover` in shadow styles |
| **Disabled** | `disabled` prop → Tailwind utility | `:host([disabled])` + `:disabled` with `opacity: 0.5` |
| **Dark mode** | `dark:` Tailwind prefix | `.dark` class on `<html>` → CSS custom properties cascade through shadow DOM |
| **RTL** | `rtl:` Tailwind prefix | Logical properties (`padding-inline`, `margin-inline`) used throughout |
| **Responsive** | Tailwind breakpoints | CSS `@media` queries in shadow DOM (rarely needed for atomic components) |

---

### Phase 5: Theming & Customization

**shadcn (Tailwind config):**
```js
// tailwind.config.js — theme tokens
colors: {
  primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" }
}
```

**shadcx (CSS custom properties):**
```css
/* theme.css — same HSL channels, no Tailwind needed */
:root {
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --radius: 0.5rem;
}
.dark {
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
}
```

**Consumer customization:**
```css
/* Override theme globally */
:root { --primary: 260 80% 50%; }

/* Style a specific component via shadow parts */
shadcx-button::part(root) {
  border-radius: 0;
  font-weight: 700;
}
```

---

### Phase 6: Validation Checklist

Before marking a conversion complete, verify:

**Props**
- [ ] All shadcn props are mapped to `@property()` declarations
- [ ] Prop defaults match shadcn defaults
- [ ] Props reflect to attributes for CSS targeting
- [ ] Missing props are documented in a "Not Yet Implemented" section

**Variants & Sizes**
- [ ] Every shadcn `variant` value has a corresponding CSS `[data-variant="..."]` rule
- [ ] Every shadcn `size` value has a corresponding CSS `[data-size="..."]` rule
- [ ] Visual output matches shadcn (spacing, colors, typography, shadows)

**States**
- [ ] `:hover` styles applied
- [ ] `:focus-visible` ring rendered
- [ ] `:disabled` opacity and pointer-events applied
- [ ] `aria-invalid` styled for input/select components

**Shadow Parts**
- [ ] Each styleable element has a `part="..."` attribute
- [ ] Part names are documented in the component's API reference table

**Events**
- [ ] Native DOM events (click, input) propagate correctly
- [ ] Custom events (`shadcx-input`, etc.) fire with typed `detail`
- [ ] Events are `bubbles: true, composed: true` to cross shadow boundaries

**Accessibility**
- [ ] Appropriate `aria-*` attributes on shadow DOM elements
- [ ] Keyboard interactions preserved (Enter/Space on buttons, Escape on dialogs)
- [ ] Focus management works correctly

**Dark Mode**
- [ ] Component renders correctly with `.dark` class on `<html>`
- [ ] No hardcoded colors — all use `hsl(var(--...))` or transparent
- [ ] Contrast ratios pass WCAG AA

---

## Appendix A: Button Conversion — Feature Checklist

| Feature | shadcn | shadcx Status |
|---------|--------|---------------|
| **variant: default** | `bg-primary text-primary-foreground` | ✅ `hsl(var(--primary))` background |
| **variant: outline** | `border bg-background` | ✅ |
| **variant: ghost** | Transparent, hover accent | ✅ |
| **variant: destructive** | `bg-destructive text-destructive-foreground` | ✅ |
| **variant: secondary** | `bg-secondary text-secondary-foreground` | ✅ |
| **variant: link** | `text-primary underline-offset-4` | ✅ |
| **size: default** | `h-9 px-4 py-2` | ✅ |
| **size: xs** | `h-7 px-2` | ✅ |
| **size: sm** | `h-8 px-3` | ✅ |
| **size: lg** | `h-10 px-6` | ✅ |
| **size: icon** | `h-9 w-9` | ✅ |
| **size: icon-xs** | `h-7 w-7` | ✅ |
| **size: icon-sm** | `h-8 w-8` | ✅ |
| **size: icon-lg** | `h-10 w-10` | ✅ |
| **disabled** | `opacity-50 pointer-events-none` | ✅ |
| **focus-visible ring** | `ring-2 ring-offset-2` | ✅ |
| **hover states** | `hover:bg-.../90` | ✅ |
| **asChild** | `Slot` / `cloneElement` | ❌ Use `<slot>` |
| **className** | Consumer classes merged | ❌ Use `::part()` |
| **forwardRef** | Ref forwarded to button | ❌ Use shadow DOM queries |
| **cssPart: root** | — | ✅ `part="root"` on `<button>` |

---

## Appendix B: Quick Mapping Reference

| shadcn Pattern | shadcx Pattern |
|----------------|----------------|
| `className={cn(...)}` | `data-*` attributes + shadow CSS selectors |
| `variant="ghost"` | `data-variant="ghost"` → `[data-variant="ghost"] { ... }` |
| `size="lg"` | `data-size="lg"` → `[data-size="lg"] { ... }` |
| `{...props}` spread | Individual `@property()` declarations |
| `{children}` | `<slot></slot>` |
| `ref={ref}` | `this.shadowRoot?.querySelector('button[part="root"]')` |
| `onClick={fn}` | `@click=${this._fn}` |
| `asChild={true}` | User's element as slotted child |
| `disabled={true}` | `?disabled=${true}` on shadow element |
| Tailwind `shadow` | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)` |
| Tailwind `rounded-md` | `border-radius: calc(var(--radius) - 2px)` |
| Tailwind `bg-primary` | `background-color: hsl(var(--primary))` |
| Tailwind `text-primary-foreground` | `color: hsl(var(--primary-foreground))` |
| Tailwind `transition-colors` | `transition: color .15s, background-color .15s, border-color .15s, box-shadow .15s` |
| `@radix-ui/react-slot` | Native `<slot>` element |
| `class-variance-authority` | CSS attribute selectors in shadow styles |
| `tailwind-merge` | Not needed (no class strings) |
