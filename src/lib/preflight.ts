import { css } from 'lit'

/**
 * Shared preflight/reset styles for all shadcx components.
 * Mirrors shadcn/ui's approach — scoped to the Shadow DOM of each component.
 */
export const preflight = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  blockquote,
  dl,
  dd,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    appearance: button;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  legend {
    padding: 0;
  }

  ::placeholder {
    color: hsl(var(--muted-foreground));
    opacity: 1;
  }

  [hidden] {
    display: none !important;
  }
`
