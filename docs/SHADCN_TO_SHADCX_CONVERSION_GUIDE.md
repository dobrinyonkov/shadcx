# shadcn/ui → shadcx (Pure CSS) Conversion Guide

This project now converts shadcn component ideas into **semantic HTML + CSS only**.

## Rules

1. Prefer semantic elements (`button`, `input`, `select`, `textarea`, `label`) over wrappers.
2. Use `aria-*` and native states for styling hooks (e.g. `aria-invalid="true"`).
3. Keep shadcn variables (`--primary`, `--ring`, `--destructive`, etc.) as the theming API.
4. Use minimal opt-in classes only for variants/sizes when semantics alone are not enough:
   - Buttons: `.scx-secondary`, `.scx-outline`, `.scx-ghost`, `.scx-link`, `.scx-destructive`, `.scx-sm`, `.scx-lg`, `.scx-icon`
   - Badges: `.scx-badge` + variant classes
   - Combobox: `.scx-combobox`
5. Keep all component styles in `src/lib/*.css` and import through `src/lib/index.css`.
6. Build must emit a single distributable CSS file.

## State mappings

- Invalid field: `input[aria-invalid="true"]`
- Disabled button: `button:disabled` or `[role="button"][aria-disabled="true"]`
- Focus ring: `:focus-visible`
- Checked checkbox: `input[type="checkbox"]:checked`

## Packaging

- Entry CSS: `src/main.css`
- Library barrel CSS: `src/lib/index.css`
- Vite uses `cssCodeSplit: false` to output one CSS asset.
