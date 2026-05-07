var e=`
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
  img, video { max-width: 100%; height: auto; }
  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
  blockquote, dl, dd, hr, figure, p, pre { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: inherit; }
  button, input, optgroup, select, textarea {
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
  button, select { text-transform: none; }
  button, [type='button'], [type='reset'], [type='submit'] {
    appearance: button;
    background-color: transparent;
    background-image: none;
  }
  :-moz-focusring { outline: auto; }
  :-moz-ui-invalid { box-shadow: none; }
  progress { vertical-align: baseline; }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }
  [type='search'] { appearance: textfield; outline-offset: -2px; }
  ::-webkit-search-decoration { -webkit-appearance: none; }
  ::-webkit-file-upload-button { font: inherit; appearance: button; }
  textarea { resize: vertical; }
  fieldset { margin: 0; padding: 0; min-width: 0; }
  legend { padding: 0; }
  ::placeholder { color: hsl(var(--muted-foreground)); opacity: 1; }
  [hidden] { display: none !important; }

  :host { display: flex; }

  .root {
    display: flex;
    min-height: 4rem;
    width: 100%;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: hsl(var(--foreground));
    resize: vertical;
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root::placeholder { color: hsl(var(--muted-foreground)); }
  .root:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  .root:disabled { cursor: not-allowed; opacity: 0.5; }
  .root[aria-invalid] { border-color: hsl(var(--destructive)); }

  @media (min-width: 768px) {
    .root { font-size: 0.875rem; }
  }
`,t=class extends HTMLElement{constructor(...e){super(...e),this._textarea=null,this._internals=this.attachInternals()}static{this.formAssociated=!0}static{this.observedAttributes=[`name`,`placeholder`,`value`,`rows`,`disabled`,`required`,`readonly`,`aria-invalid`]}get name(){return this.getAttribute(`name`)??``}set name(e){this.setAttribute(`name`,e)}get placeholder(){return this.getAttribute(`placeholder`)??``}set placeholder(e){this.setAttribute(`placeholder`,e)}get value(){return this._textarea?.value??this.getAttribute(`value`)??``}set value(e){this.setAttribute(`value`,e),this._textarea&&(this._textarea.value=e),this.updateFormValue()}get rows(){return this.getAttribute(`rows`)??`3`}set rows(e){this.setAttribute(`rows`,e)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,e)}get required(){return this.hasAttribute(`required`)}set required(e){this.toggleAttribute(`required`,e)}get readonly(){return this.hasAttribute(`readonly`)}set readonly(e){this.toggleAttribute(`readonly`,e)}get ariaInvalid(){return this.getAttribute(`aria-invalid`)}set ariaInvalid(e){e===null?this.removeAttribute(`aria-invalid`):this.setAttribute(`aria-invalid`,e)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.render()}attributeChangedCallback(){this.render()}formResetCallback(){this.value=this.getAttribute(`value`)??``}updateFormValue(){if(typeof this._internals.setFormValue==`function`){if(this.disabled||!this.name){this._internals.setFormValue(null);return}this._internals.setFormValue(this.value)}}render(){if(!this.shadowRoot)return;let t=this.value;this.shadowRoot.innerHTML=`
      <style>${e}</style>
      <textarea
        part="root"
        class="root"
        placeholder="${this.placeholder}"
        rows="${this.rows}"
        ${this.disabled?`disabled`:``}
        ${this.required?`required`:``}
        ${this.readonly?`readonly`:``}
        ${this.ariaInvalid?`aria-invalid="${this.ariaInvalid}"`:``}
      ></textarea>
    `,this._textarea=this.shadowRoot.querySelector(`textarea`),this._textarea&&(this._textarea.value=t,this._textarea.addEventListener(`input`,()=>this.updateFormValue()),this.updateFormValue())}};customElements.get(`shadcx-textarea`)||customElements.define(`shadcx-textarea`,t);