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

  :host { display: inline-flex; vertical-align: middle; }
  :host([disabled]) { pointer-events: none; }

  .root {
    appearance: none;
    border: 1px solid hsl(var(--primary));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    outline: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    border-radius: calc(var(--radius) - 4px);
    background-color: hsl(var(--background));
    color: transparent;
    cursor: pointer;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s, color 0.15s;
  }

  .root:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  .root:disabled { opacity: 0.5; cursor: not-allowed; }
  .root[data-state='checked'], .root[data-state='indeterminate'] {
    border-color: hsl(var(--primary));
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  .root[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  .indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .icon {
    width: 0.875rem;
    height: 0.875rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.25;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,t=class extends HTMLElement{constructor(...e){super(...e),this._internals=this.attachInternals(),this.toggle=()=>{this.disabled||(this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked,this.updateFormValue(),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`checked-change`,{detail:{checked:this.checked,indeterminate:this.indeterminate,state:this.state},bubbles:!0,composed:!0})))},this.onKeyDown=e=>{e.key===`Enter`&&(e.preventDefault(),this.toggle())}}static{this.formAssociated=!0}static{this.observedAttributes=[`name`,`value`,`checked`,`indeterminate`,`disabled`,`aria-invalid`]}get name(){return this.getAttribute(`name`)??``}set name(e){this.setAttribute(`name`,e)}get value(){return this.getAttribute(`value`)??`on`}set value(e){this.setAttribute(`value`,e)}get checked(){return this.hasAttribute(`checked`)}set checked(e){this.toggleAttribute(`checked`,e)}get indeterminate(){return this.hasAttribute(`indeterminate`)}set indeterminate(e){this.toggleAttribute(`indeterminate`,e)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,e)}get ariaInvalid(){return this.getAttribute(`aria-invalid`)}set ariaInvalid(e){e===null?this.removeAttribute(`aria-invalid`):this.setAttribute(`aria-invalid`,e)}get state(){return this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.render()}attributeChangedCallback(){this.render()}formResetCallback(){this.checked=this.hasAttribute(`checked`),this.indeterminate=this.hasAttribute(`indeterminate`),this.updateFormValue()}updateFormValue(){if(typeof this._internals.setFormValue==`function`){if(this.disabled||!this.name||!this.checked){this._internals.setFormValue(null);return}this._internals.setFormValue(this.value)}}render(){if(!this.shadowRoot)return;let t=this.state===`checked`?`<svg class="icon" viewBox="0 0 16 16"><polyline points="3.5 8.5 6.8 11.8 12.5 5.5" /></svg>`:this.state===`indeterminate`?`<svg class="icon" viewBox="0 0 16 16"><line x1="3.5" y1="8" x2="12.5" y2="8" /></svg>`:``;this.shadowRoot.innerHTML=`
      <style>${e}</style>
      <button
        part="root"
        class="root"
        type="button"
        role="checkbox"
        data-state="${this.state}"
        aria-checked="${this.indeterminate?`mixed`:String(this.checked)}"
        ${this.ariaInvalid?`aria-invalid="${this.ariaInvalid}"`:``}
        ${this.disabled?`disabled`:``}
      >
        <span part="indicator" class="indicator" aria-hidden="true">${t}</span>
      </button>
    `;let n=this.shadowRoot.querySelector(`button`);n?.addEventListener(`click`,this.toggle),n?.addEventListener(`keydown`,this.onKeyDown),this.updateFormValue()}};customElements.get(`shadcx-checkbox`)||customElements.define(`shadcx-checkbox`,t);