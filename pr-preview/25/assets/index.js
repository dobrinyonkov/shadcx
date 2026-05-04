var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`
  :host {
    display: inline-flex;
  }
  button {
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 2.25rem;
    padding: 0 1rem;
    border: 1px solid transparent;
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  button:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
  button:disabled,
  button[aria-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
  }
  ::slotted(svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    pointer-events: none;
  }
  button[data-size='xs'] { height: 1.75rem; padding-inline: 0.5rem; font-size: 0.8125rem; }
  button[data-size='sm'] { height: 2rem; padding-inline: 0.75rem; font-size: 0.8125rem; }
  button[data-size='lg'] { height: 2.5rem; padding-inline: 1.5rem; }
  button[data-size='icon'] { width: 2.25rem; padding: 0; }
  button[data-size='icon-xs'] { width: 1.75rem; height: 1.75rem; padding: 0; }
  button[data-size='icon-sm'] { width: 2rem; height: 2rem; padding: 0; }
  button[data-size='icon-lg'] { width: 2.5rem; height: 2.5rem; padding: 0; }
  button[data-variant='destructive'] { background-color: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }
  button[data-variant='outline'] { border-color: hsl(var(--input)); background-color: hsl(var(--background)); color: hsl(var(--foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  button[data-variant='secondary'] { background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  button[data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }
  button[data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); box-shadow: none; }
  button[data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  button[data-variant='link'] { background-color: transparent; color: hsl(var(--primary)); box-shadow: none; text-underline-offset: 4px; }
  button[data-variant='link']:hover { background-color: transparent; text-decoration: underline; }
  button[aria-invalid='true'] { border-color: hsl(var(--destructive)); box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2); }
  button:focus-visible { outline: 2px solid hsl(var(--ring)); outline-offset: 2px; box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  button[aria-invalid='true']:focus-visible { outline-color: hsl(var(--destructive)); box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive)); }
`,r=document.createElement(`template`);r.innerHTML=`<style>${n}</style><button part="button" type="button"><slot></slot></button>`;var i=class extends HTMLElement{static get observedAttributes(){return[`variant`,`size`,`disabled`,`aria-invalid`]}constructor(){super();let e=this.attachShadow({mode:`open`});e.appendChild(r.content.cloneNode(!0)),this._btn=e.querySelector(`button`)}attributeChangedCallback(e,t,n){e===`disabled`?this._btn.toggleAttribute(`disabled`,n!==null):e===`aria-invalid`?n===`true`?this._btn.setAttribute(`aria-invalid`,`true`):this._btn.removeAttribute(`aria-invalid`):(e===`variant`||e===`size`)&&(n?this._btn.setAttribute(`data-${e}`,n):this._btn.removeAttribute(`data-${e}`))}};customElements.define(`scx-button`,i);var a=`
  :host {
    display: block;
  }
  input {
    display: flex;
    width: 100%;
    min-width: 0;
    height: 2.25rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid hsl(var(--input));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  input::placeholder {
    color: hsl(var(--muted-foreground));
  }
  input:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  input[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  input[aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
  input[type='file'] {
    align-items: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  input[type='file']::file-selector-button {
    height: 1.75rem;
    margin: -0.125rem 0.75rem -0.125rem -0.5rem;
    padding: 0 0.625rem;
    border: 0;
    border-radius: calc(var(--radius) - 4px);
    background-color: transparent;
    color: hsl(var(--foreground));
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
  }
  input[type='file']::file-selector-button:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  @media (min-width: 768px) {
    input {
      font-size: 0.875rem;
    }
  }
`,o=document.createElement(`template`);o.innerHTML=`<style>${a}</style><input part="input">`;var s=class extends HTMLElement{static{this.formAssociated=!0}static get observedAttributes(){return[`type`,`placeholder`,`disabled`,`readonly`,`required`,`aria-invalid`,`value`,`name`,`list`]}constructor(){super(),this._internals=this.attachInternals();let e=this.attachShadow({mode:`open`,delegatesFocus:!0});e.appendChild(o.content.cloneNode(!0)),this._input=e.querySelector(`input`),this._input.addEventListener(`input`,()=>{this._internals.setFormValue(this._input.value),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}),this._input.addEventListener(`change`,()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}get value(){return this._input.value}set value(e){this._input.value=e,this._internals.setFormValue(e)}attributeChangedCallback(e,t,n){e===`value`?(this._input.value=n??``,this._internals.setFormValue(this._input.value)):e===`disabled`||e===`readonly`||e===`required`?this._input.toggleAttribute(e,n!==null):e===`aria-invalid`?n===`true`?this._input.setAttribute(`aria-invalid`,`true`):this._input.removeAttribute(`aria-invalid`):n===null?this._input.removeAttribute(e):this._input.setAttribute(e,n)}};customElements.define(`scx-input`,s);var c=`
  :host {
    display: block;
  }
  textarea {
    display: flex;
    field-sizing: content;
    width: 100%;
    min-width: 0;
    min-height: 4rem;
    padding: 0.5rem 0.625rem;
    border: 1px solid hsl(var(--input));
    border-radius: var(--radius);
    background-color: transparent;
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  textarea::placeholder {
    color: hsl(var(--muted-foreground));
  }
  textarea:focus-visible {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }
  textarea:disabled {
    cursor: not-allowed;
    background-color: hsl(var(--input) / 0.5);
    opacity: 0.5;
  }
  textarea[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
  }
  @media (min-width: 768px) {
    textarea {
      font-size: 0.875rem;
    }
  }
`,l=document.createElement(`template`);l.innerHTML=`<style>${c}</style><textarea part="textarea"></textarea>`;var u=class extends HTMLElement{static{this.formAssociated=!0}static get observedAttributes(){return[`placeholder`,`disabled`,`readonly`,`required`,`aria-invalid`,`rows`,`value`,`name`]}constructor(){super(),this._internals=this.attachInternals();let e=this.attachShadow({mode:`open`,delegatesFocus:!0});e.appendChild(l.content.cloneNode(!0)),this._textarea=e.querySelector(`textarea`),this._textarea.addEventListener(`input`,()=>{this._internals.setFormValue(this._textarea.value),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}),this._textarea.addEventListener(`change`,()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}get value(){return this._textarea.value}set value(e){this._textarea.value=e,this._internals.setFormValue(e)}attributeChangedCallback(e,t,n){e===`value`?(this._textarea.value=n??``,this._internals.setFormValue(this._textarea.value)):e===`disabled`||e===`readonly`||e===`required`?this._textarea.toggleAttribute(e,n!==null):e===`aria-invalid`?n===`true`?this._textarea.setAttribute(`aria-invalid`,`true`):this._textarea.removeAttribute(`aria-invalid`):n===null?this._textarea.removeAttribute(e):this._textarea.setAttribute(e,n)}};customElements.define(`scx-textarea`,u);var d=`
  :host {
    display: inline-flex;
  }
  input[type='checkbox'] {
    appearance: none;
    display: inline-grid;
    place-content: center;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid hsl(var(--primary));
    border-radius: calc(var(--radius) - 4px);
    background-color: hsl(var(--background));
    color: transparent;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    cursor: pointer;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  input[type='checkbox']::before {
    content: '';
    width: 0.625rem;
    height: 0.625rem;
    transform: scale(0);
    transform-origin: center;
    background-color: currentColor;
    clip-path: polygon(14% 44%, 0 58%, 38% 96%, 100% 18%, 86% 6%, 36% 68%);
    transition: transform 0.12s ease;
  }
  input[type='checkbox']:checked,
  input[type='checkbox']:indeterminate {
    border-color: hsl(var(--primary));
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
  input[type='checkbox']:indeterminate::before {
    width: 0.625rem;
    height: 0.125rem;
    clip-path: none;
    transform: scale(1);
  }
  input[type='checkbox']:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='checkbox']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  input[type='checkbox'][aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  input[type='checkbox'][aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
`,ee=document.createElement(`template`);ee.innerHTML=`<style>${d}</style><input type="checkbox" part="checkbox">`;var te=class extends HTMLElement{static{this.formAssociated=!0}static get observedAttributes(){return[`checked`,`indeterminate`,`disabled`,`aria-invalid`,`name`]}constructor(){super(),this._internals=this.attachInternals();let e=this.attachShadow({mode:`open`,delegatesFocus:!0});e.appendChild(ee.content.cloneNode(!0)),this._input=e.querySelector(`input`),this._input.addEventListener(`change`,()=>{this._internals.setFormValue(this._input.checked?`on`:``),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}get checked(){return this._input.checked}set checked(e){this._input.checked=e,this._internals.setFormValue(e?`on`:``)}get indeterminate(){return this._input.indeterminate}set indeterminate(e){this._input.indeterminate=e}attributeChangedCallback(e,t,n){e===`checked`?(this._input.checked=n!==null,this._internals.setFormValue(this._input.checked?`on`:``)):e===`indeterminate`?this._input.indeterminate=n!==null:e===`disabled`?this._input.toggleAttribute(`disabled`,n!==null):e===`aria-invalid`&&(n===`true`?this._input.setAttribute(`aria-invalid`,`true`):this._input.removeAttribute(`aria-invalid`))}};customElements.define(`scx-checkbox`,te);var ne=`
  :host {
    display: inline-flex;
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 1.375rem;
    padding: 0 0.625rem;
    border: 1px solid transparent;
    border-radius: var(--radius);
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  span:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
  span:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  ::slotted(svg),
  ::slotted([data-icon]) {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
  ::slotted([data-icon='inline-start']) {
    margin-inline-end: 0.125rem;
  }
  ::slotted([data-icon='inline-end']) {
    margin-inline-start: 0.125rem;
  }
  span[data-variant='secondary'] { background-color: hsl(var(--secondary)); color: hsl(var(--secondary-foreground)); }
  span[data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }
  span[data-variant='destructive'] { background-color: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); }
  span[data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }
  span[data-variant='outline'] { border-color: hsl(var(--border)); background-color: hsl(var(--background)); color: hsl(var(--foreground)); }
  span[data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  span[data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); }
  span[data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }
  span[data-variant='link'] { border-color: transparent; background-color: transparent; color: hsl(var(--primary)); text-underline-offset: 4px; }
  span[data-variant='link']:hover { background-color: transparent; text-decoration: underline; }
`,re=document.createElement(`template`);re.innerHTML=`<style>${ne}</style><span part="badge" tabindex="0"><slot></slot></span>`;var ie=class extends HTMLElement{static get observedAttributes(){return[`variant`]}constructor(){super();let e=this.attachShadow({mode:`open`});e.appendChild(re.content.cloneNode(!0)),this._span=e.querySelector(`span`)}attributeChangedCallback(e,t,n){e===`variant`&&(n?this._span.setAttribute(`data-variant`,n):this._span.removeAttribute(`data-variant`))}};customElements.define(`scx-badge`,ie);var ae=`
  :host {
    display: block;
  }
  select {
    display: flex;
    width: 100%;
    max-width: 24rem;
    min-width: 0;
    height: 2.25rem;
    padding: 0.25rem 2rem 0.25rem 0.75rem;
    border: 1px solid hsl(var(--input));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: var(--font-sans);
    font-size: 0.875rem;
    line-height: 1.5;
    outline: none;
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  select:not([multiple]) {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, hsl(var(--muted-foreground)) 50%), linear-gradient(135deg, hsl(var(--muted-foreground)) 50%, transparent 50%);
    background-position: calc(100% - 1rem) 50%, calc(100% - 0.7rem) 50%;
    background-size: 0.3rem 0.3rem, 0.3rem 0.3rem;
    background-repeat: no-repeat;
  }
  select[multiple] {
    height: auto;
    min-height: 8rem;
    padding: 0.25rem;
  }
  select:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  select:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  select[aria-invalid='true'] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
  }
  select[aria-invalid='true']:focus-visible {
    outline-color: hsl(var(--destructive));
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
  }
  select option {
    padding: 0.5rem;
    background-color: hsl(var(--popover));
    color: hsl(var(--popover-foreground));
  }
`,oe=document.createElement(`template`);oe.innerHTML=`<style>${ae}</style><select part="select"></select>`;var se=class extends HTMLElement{static{this.formAssociated=!0}static get observedAttributes(){return[`disabled`,`aria-invalid`,`multiple`,`name`,`value`]}constructor(){super(),this._internals=this.attachInternals();let e=this.attachShadow({mode:`open`,delegatesFocus:!0});e.appendChild(oe.content.cloneNode(!0)),this._select=e.querySelector(`select`),this._select.addEventListener(`change`,()=>{this._internals.setFormValue(this._select.value),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}connectedCallback(){this._syncOptions(),this._observer=new MutationObserver(()=>this._syncOptions()),this._observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this._observer?.disconnect()}get value(){return this._select.value}set value(e){this._select.value=e,this._internals.setFormValue(e)}_syncOptions(){let e=this._select.value;this._select.innerHTML=``;for(let e of Array.from(this.children))(e instanceof HTMLOptionElement||e instanceof HTMLOptGroupElement)&&this._select.appendChild(e.cloneNode(!0));this.hasAttribute(`value`)?this._select.value=this.getAttribute(`value`):e&&(this._select.value=e)}attributeChangedCallback(e,t,n){e===`disabled`?this._select.toggleAttribute(`disabled`,n!==null):e===`multiple`?(this._select.toggleAttribute(`multiple`,n!==null),this._syncOptions()):e===`aria-invalid`?n===`true`?this._select.setAttribute(`aria-invalid`,`true`):this._select.removeAttribute(`aria-invalid`):e===`value`?n!==null&&(this._select.value=n):n===null?this._select.removeAttribute(e):this._select.setAttribute(e,n)}};customElements.define(`scx-select`,se);var ce=`
  :host {
    display: block;
  }
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 1.25rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    touch-action: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 0.375rem;
    border-radius: 9999px;
    background-color: hsl(var(--primary) / 0.2);
  }
  input[type='range']::-moz-range-track {
    height: 0.375rem;
    border-radius: 9999px;
    background-color: hsl(var(--primary) / 0.2);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: -0.4375rem;
    border-radius: 9999px;
    border: 2px solid hsl(var(--primary));
    background-color: hsl(var(--background));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input[type='range']::-moz-range-thumb {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    border: 2px solid hsl(var(--primary));
    background-color: hsl(var(--background));
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  input[type='range']:focus-visible::-webkit-slider-thumb {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='range']:focus-visible::-moz-range-thumb {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  input[type='range']:focus-visible {
    outline: none;
  }
  input[type='range']:focus-visible::-moz-focus-outer {
    border: 0;
  }
  input[type='range']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  input[type='range']:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }
  input[type='range']:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
  input[type='range'][data-orientation='vertical'] {
    writing-mode: vertical-lr;
    direction: rtl;
    width: 1.25rem;
    height: 12rem;
  }
  input[type='range'][data-orientation='vertical']::-webkit-slider-runnable-track {
    width: 0.375rem;
    height: 100%;
  }
  input[type='range'][data-orientation='vertical']::-webkit-slider-thumb {
    margin-left: -0.4375rem;
    margin-top: 0;
  }
  input[type='range'][data-orientation='vertical']::-moz-range-track {
    width: 0.375rem;
    height: 100%;
  }
`,le=document.createElement(`template`);le.innerHTML=`<style>${ce}</style><input type="range" part="slider">`;var ue=class extends HTMLElement{static{this.formAssociated=!0}static get observedAttributes(){return[`min`,`max`,`step`,`value`,`disabled`,`aria-invalid`,`orientation`,`name`]}constructor(){super(),this._internals=this.attachInternals();let e=this.attachShadow({mode:`open`,delegatesFocus:!0});e.appendChild(le.content.cloneNode(!0)),this._input=e.querySelector(`input`),this._input.addEventListener(`input`,()=>{this._internals.setFormValue(this._input.value),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}),this._input.addEventListener(`change`,()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}get value(){return this._input.value}set value(e){this._input.value=e,this._internals.setFormValue(e)}attributeChangedCallback(e,t,n){e===`disabled`?this._input.toggleAttribute(`disabled`,n!==null):e===`orientation`?n===`vertical`?this._input.setAttribute(`data-orientation`,`vertical`):this._input.removeAttribute(`data-orientation`):e===`aria-invalid`?n===`true`?this._input.setAttribute(`aria-invalid`,`true`):this._input.removeAttribute(`aria-invalid`):n===null?this._input.removeAttribute(e):this._input.setAttribute(e,n)}};customElements.define(`scx-slider`,ue);var f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),de=new WeakMap,fe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&de.set(t,e))}return e}toString(){return this.cssText}},pe=e=>new fe(typeof e==`string`?e:e+``,void 0,m),h=(e,...t)=>new fe(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),me=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},he=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return pe(t)})(e):e,{is:ge,defineProperty:_e,getOwnPropertyDescriptor:ve,getOwnPropertyNames:ye,getOwnPropertySymbols:be,getPrototypeOf:xe}=Object,g=globalThis,Se=g.trustedTypes,Ce=Se?Se.emptyScript:``,we=g.reactiveElementPolyfillSupport,_=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?Ce:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},y=(e,t)=>!ge(e,t),Te={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol(`metadata`),g.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&_e(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ve(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Te}static _$Ei(){if(this.hasOwnProperty(_(`elementProperties`)))return;let e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_(`properties`))){let e=this.properties,t=[...ye(e),...be(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(he(e))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?v:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?v:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??y)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:`open`},b[_(`elementProperties`)]=new Map,b[_(`finalized`)]=new Map,we?.({ReactiveElement:b}),(g.reactiveElementVersions??=[]).push(`2.1.2`);var x=globalThis,Ee=e=>e,S=x.trustedTypes,De=S?S.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Oe=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,ke=`?`+C,Ae=`<${ke}>`,w=document,T=()=>w.createComment(``),E=e=>e===null||typeof e!=`object`&&typeof e!=`function`,D=Array.isArray,je=e=>D(e)||typeof e?.[Symbol.iterator]==`function`,O=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Ne=/>/g,A=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Pe=/'/g,Fe=/"/g,Ie=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),M=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),Le=new WeakMap,P=w.createTreeWalker(w,129);function Re(e,t){if(!D(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return De===void 0?t:De.createHTML(t)}var ze=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=k;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===k?c[1]===`!--`?o=Me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=A):(Ie.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=A):o=Ne:o===A?c[0]===`>`?(o=i??k,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?A:c[3]===`"`?Fe:Pe):o===Fe||o===Pe?o=A:o===Me||o===Ne?o=k:(o=A,i=void 0);let d=o===A&&e[t+1].startsWith(`/>`)?` `:``;a+=o===k?n+Ae:l>=0?(r.push(s),n.slice(0,l)+Oe+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[Re(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},F=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ze(t,n);if(this.el=e.createElement(l,r),P.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=P.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Oe)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ve:r[1]===`?`?He:r[1]===`@`?Ue:R}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ie.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],T()),P.nextNode(),c.push({type:2,index:++a});i.append(e[t],T())}}}else if(i.nodeType===8)if(i.data===ke)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){let n=w.createElement(`template`);return n.innerHTML=e,n}};function I(e,t,n=e,r){if(t===M)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=E(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=I(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);P.currentNode=r;let i=P.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new L(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new We(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=P.nextNode(),a++)}return P.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},L=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),E(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==M&&this._(e):e._$litType$===void 0?e.nodeType===void 0?je(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=F.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Le.get(e.strings);return t===void 0&&Le.set(e.strings,t=new F(e)),t}k(t){D(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(T()),this.O(T()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ee(e).nextSibling;Ee(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=I(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=I(this,r[n+o],t,o),s===M&&(s=this._$AH[o]),a||=!E(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ve=class extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},He=class extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},Ue=class extends R{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??N)===M)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},We=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}},Ge=x.litHtmlPolyfillSupport;Ge?.(F,L),(x.litHtmlVersions??=[]).push(`3.3.2`);var Ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new L(t.insertBefore(T(),e),e,void 0,n??{})}return i._$AI(e),i},z=globalThis,B=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};B._$litElement$=!0,B.finalized=!0,z.litElementHydrateSupport?.({LitElement:B});var qe=z.litElementPolyfillSupport;qe?.({LitElement:B}),(z.litElementVersions??=[]).push(`4.2.2`);var Je=Symbol.for(``),Ye=e=>{if(e?.r===Je)return e?._$litStatic$},Xe=e=>({_$litStatic$:e,r:Je}),Ze=new Map,Qe=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Ye(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ze.get(e))===void 0&&(o.raw=o,Ze.set(e,t=o)),n=s}return e(t,...n)})(j),V=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},$e={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},et=(e=$e,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function tt(e){return(t,n)=>typeof n==`object`?et(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function H(e){return tt({...e,state:!0,attribute:!1})}var nt=Object.assign({"../lib/index.css":``,"../lib/preflight.css":`*,:before,:after{box-sizing:border-box}*{border-color:hsl(var(--border))}html{-webkit-text-size-adjust:100%;line-height:1.5}body{line-height:inherit;margin:0}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,optgroup,select,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;margin:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button;background-image:none}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}textarea{resize:vertical}::placeholder{color:hsl(var(--muted-foreground));opacity:1}[hidden]{display:none!important}`,"../lib/theme.css":`*,:before,:after{box-sizing:border-box}body{font-family:var(--font-sans);background-color:hsl(var(--background));color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--font-sans:"Inter", system-ui, -apple-system, sans-serif;--font-mono:"JetBrains Mono", ui-monospace, SFMono-Regular, monospace;--radius:.5rem;--background:0 0% 100%;--foreground:0 0% 3.9%;--card:0 0% 100%;--card-foreground:0 0% 3.9%;--popover:0 0% 100%;--popover-foreground:0 0% 3.9%;--primary:0 0% 9%;--primary-foreground:0 0% 98%;--secondary:0 0% 96.1%;--secondary-foreground:0 0% 9%;--muted:0 0% 96.1%;--muted-foreground:0 0% 45.1%;--accent:0 0% 96.1%;--accent-foreground:0 0% 9%;--destructive:0 84.2% 60.2%;--destructive-foreground:0 0% 98%;--border:0 0% 89.8%;--input:0 0% 89.8%;--ring:0 0% 3.9%;--chart-1:12 76% 61%;--chart-2:173 58% 39%;--chart-3:197 37% 24%;--chart-4:43 74% 66%;--chart-5:27 87% 67%}.dark{--background:0 0% 3.9%;--foreground:0 0% 98%;--card:0 0% 3.9%;--card-foreground:0 0% 98%;--popover:0 0% 3.9%;--popover-foreground:0 0% 98%;--primary:0 0% 98%;--primary-foreground:0 0% 9%;--secondary:0 0% 14.9%;--secondary-foreground:0 0% 98%;--muted:0 0% 14.9%;--muted-foreground:0 0% 63.9%;--accent:0 0% 14.9%;--accent-foreground:0 0% 98%;--destructive:0 62.8% 30.6%;--destructive-foreground:0 0% 98%;--border:0 0% 14.9%;--input:0 0% 14.9%;--ring:0 0% 83.1%;--chart-1:220 70% 50%;--chart-2:160 60% 45%;--chart-3:30 80% 55%;--chart-4:280 65% 60%;--chart-5:340 75% 55%}`}),U=h`${pe([`../lib/theme.css`,`../lib/preflight.css`].map(e=>nt[e]).filter(Boolean).join(`
`))}`;function W(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var rt=t({BadgePage:()=>G}),G=class extends B{static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    a.inline-link {
      color: hsl(var(--primary));
      text-decoration: none;
    }

    a.inline-link:hover {
      text-decoration: underline;
    }

    .spinner {
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 9999px;
      animation: spin 0.8s linear infinite;
      display: inline-block;
    }

    scx-badge.success::part(badge) {
      background-color: hsl(142 71% 45% / 0.15);
      border-color: hsl(142 71% 45% / 0.35);
      color: hsl(142 84% 25%);
    }

    :host-context(.dark) scx-badge.success::part(badge) {
      background-color: hsl(142 70% 35% / 0.25);
      border-color: hsl(142 70% 45% / 0.45);
      color: hsl(142 100% 85%);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}render(){return j`
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>import './scx-badge.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-badge&gt;Badge&lt;/scx-badge&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <scx-badge>Default</scx-badge>
        <scx-badge variant="secondary">Secondary</scx-badge>
        <scx-badge variant="destructive">Destructive</scx-badge>
        <scx-badge variant="outline">Outline</scx-badge>
        <scx-badge variant="ghost">Ghost</scx-badge>
        <scx-badge variant="link">Link</scx-badge>
      </div>
      <pre><code>&lt;scx-badge&gt;Default&lt;/scx-badge&gt;
&lt;scx-badge variant="secondary"&gt;Secondary&lt;/scx-badge&gt;
&lt;scx-badge variant="destructive"&gt;Destructive&lt;/scx-badge&gt;
&lt;scx-badge variant="outline"&gt;Outline&lt;/scx-badge&gt;
&lt;scx-badge variant="ghost"&gt;Ghost&lt;/scx-badge&gt;
&lt;scx-badge variant="link"&gt;Link&lt;/scx-badge&gt;</code></pre>

      <h3>With Icon</h3>
      <div class="preview">
        <scx-badge>
          <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          Verified
        </scx-badge>
        <scx-badge variant="outline">
          New
          <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </scx-badge>
      </div>
      <pre><code>&lt;scx-badge&gt;
  &lt;svg data-icon="inline-start" ...&gt;&lt;/svg&gt;
  Verified
&lt;/scx-badge&gt;</code></pre>

      <h3>With Spinner</h3>
      <div class="preview">
        <scx-badge variant="secondary">
          <span data-icon="inline-start" class="spinner"></span>
          Syncing
        </scx-badge>
      </div>
      <pre><code>&lt;scx-badge variant="secondary"&gt;
  &lt;span data-icon="inline-start" class="spinner"&gt;&lt;/span&gt;
  Syncing
&lt;/scx-badge&gt;</code></pre>

      <h3>Link</h3>
      <div class="preview">
        <a class="inline-link" href="https://example.com" target="_blank" rel="noreferrer">
          <scx-badge variant="link">Read docs</scx-badge>
        </a>
      </div>
      <pre><code>&lt;a href="https://example.com"&gt;
  &lt;scx-badge variant="link"&gt;Read docs&lt;/scx-badge&gt;
&lt;/a&gt;</code></pre>

      <h3>Custom Colors</h3>
      <div class="preview">
        <scx-badge class="success">Success</scx-badge>
      </div>
      <pre><code>scx-badge.success::part(badge) {
  background-color: hsl(142 71% 45% / 0.15);
  border-color: hsl(142 71% 45% / 0.35);
  color: hsl(142 84% 25%);
}</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>secondary | destructive | outline | ghost | link</code></td>
              <td>Badge variants. No attribute is the default badge.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Customization</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>scx-badge.your-class::part(badge)</code></td>
              <td>Override colors, borders, radius, or spacing directly with CSS variables or standard CSS.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};G=W([V(`badge-page`)],G);var it=t({ButtonPage:()=>at}),at=class extends B{static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    td code {
      font-size: 0.75rem;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}render(){return j`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-button.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-button variant="outline"&gt;Button&lt;/scx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-button>Button</scx-button>
      </div>
      <pre><code>&lt;scx-button&gt;Button&lt;/scx-button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <scx-button>Default</scx-button>
        <scx-button variant="destructive">Destructive</scx-button>
        <scx-button variant="outline">Outline</scx-button>
        <scx-button variant="secondary">Secondary</scx-button>
        <scx-button variant="ghost">Ghost</scx-button>
        <scx-button variant="link">Link</scx-button>
      </div>
      <pre><code>&lt;scx-button&gt;Default&lt;/scx-button&gt;
&lt;scx-button variant="destructive"&gt;Destructive&lt;/scx-button&gt;
&lt;scx-button variant="outline"&gt;Outline&lt;/scx-button&gt;
&lt;scx-button variant="secondary"&gt;Secondary&lt;/scx-button&gt;
&lt;scx-button variant="ghost"&gt;Ghost&lt;/scx-button&gt;
&lt;scx-button variant="link"&gt;Link&lt;/scx-button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <scx-button size="xs">Extra Small</scx-button>
        <scx-button size="sm">Small</scx-button>
        <scx-button>Default</scx-button>
        <scx-button size="lg">Large</scx-button>
      </div>
      <pre><code>&lt;scx-button size="xs"&gt;Extra Small&lt;/scx-button&gt;
&lt;scx-button size="sm"&gt;Small&lt;/scx-button&gt;
&lt;scx-button&gt;Default&lt;/scx-button&gt;
&lt;scx-button size="lg"&gt;Large&lt;/scx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <scx-button size="icon" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-xs" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-sm" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
        <scx-button size="icon-lg" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </scx-button>
      </div>
      <pre><code>&lt;scx-button size="icon" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-xs" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-sm" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;
&lt;scx-button size="icon-lg" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/scx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <scx-button disabled>Primary</scx-button>
        <scx-button variant="outline" disabled>Outline</scx-button>
        <scx-button variant="ghost" disabled>Ghost</scx-button>
      </div>
      <pre><code>&lt;scx-button disabled&gt;Primary&lt;/scx-button&gt;
&lt;scx-button variant="outline" disabled&gt;Outline&lt;/scx-button&gt;
&lt;scx-button variant="ghost" disabled&gt;Ghost&lt;/scx-button&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>destructive | outline | secondary | ghost | link</code></td>
              <td>Visual variants. No attribute is the default button.</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>xs | sm | lg | icon | icon-xs | icon-sm | icon-lg</code></td>
              <td>Size presets. No size attribute is the default size.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean attribute</code></td>
              <td>Disabled state.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>States</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>:hover</code>, <code>:focus-visible</code>, <code>:disabled</code>, <code>[aria-invalid="true"]</code></td>
              <td>Native and ARIA states are styled directly by CSS inside the shadow DOM.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};at=W([V(`button-page`)],at);var ot=t({CheckboxPage:()=>K}),K=class extends B{constructor(...e){super(...e),this._checked=!1}static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    td code {
      font-size: 0.75rem;
    }

    .row {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .label {
      font-size: 0.875rem;
      color: hsl(var(--foreground));
    }

    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}_onCheckedChange(e){let t=e.currentTarget;this._checked=t.checked}render(){return j`
      <h1>Checkbox</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and unchecked
        states, with support for indeterminate and invalid states.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-checkbox.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-checkbox&gt;&lt;/scx-checkbox&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <label class="row">
          <scx-checkbox></scx-checkbox>
          <span class="label">Accept terms and conditions</span>
        </label>
      </div>
      <pre><code>&lt;label style="display: inline-flex; align-items: center; gap: 0.5rem;"&gt;
  &lt;scx-checkbox&gt;&lt;/scx-checkbox&gt;
  &lt;span&gt;Accept terms and conditions&lt;/span&gt;
&lt;/label&gt;</code></pre>

      <h3>Checked + Controlled</h3>
      <div class="preview">
        <label class="row">
          <scx-checkbox
            ?checked=${this._checked}
            @change=${e=>this._onCheckedChange(e)}
          ></scx-checkbox>
          <span class="label">Enable notifications</span>
        </label>
        <span class="muted">State: ${this._checked?`checked`:`unchecked`}</span>
      </div>
      <pre><code>&lt;scx-checkbox checked&gt;&lt;/scx-checkbox&gt;
&lt;script&gt;
  checkbox.addEventListener('change', (event) =&gt; {
    console.log(event.currentTarget.checked)
  })
&lt;/script&gt;</code></pre>

      <h3>Indeterminate</h3>
      <div class="preview">
        <label class="row">
          <scx-checkbox indeterminate aria-checked="mixed"></scx-checkbox>
          <span class="label">Partially selected</span>
        </label>
      </div>
      <pre><code>&lt;scx-checkbox indeterminate aria-checked="mixed"&gt;&lt;/scx-checkbox&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row">
          <scx-checkbox disabled></scx-checkbox>
          <span class="label">Disabled option</span>
        </label>
      </div>
      <pre><code>&lt;scx-checkbox disabled&gt;&lt;/scx-checkbox&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row">
          <scx-checkbox aria-invalid="true"></scx-checkbox>
          <span class="label">Required field</span>
        </label>
      </div>
      <pre><code>&lt;scx-checkbox aria-invalid="true"&gt;&lt;/scx-checkbox&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>checked</code></td>
              <td>Boolean attribute</td>
              <td>Applies checked visual state.</td>
            </tr>
            <tr>
              <td><code>indeterminate</code></td>
              <td>Boolean attribute</td>
              <td>Applies mixed visual state.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity and cursor.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and invalid ring.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};W([H()],K.prototype,`_checked`,void 0),K=W([V(`checkbox-page`)],K);var st=t({ComboboxPage:()=>J}),q=[`Next.js`,`SvelteKit`,`Nuxt.js`,`Remix`,`Astro`],J=class extends B{constructor(...e){super(...e),this._singleValue=``,this._autocompleteValue=``,this._multipleValues=[]}static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.65;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, monospace);
      font-size: 0.8125rem;
    }

    .state {
      margin-top: 0.75rem;
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 28rem;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    fieldset.scx-option-list {
      display: grid;
      width: 100%;
      max-width: 24rem;
      gap: 0.25rem;
      margin: 0;
      padding: 0.25rem;
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: var(--font-sans);
    }

    fieldset.scx-option-list:focus-within {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }

    fieldset.scx-option-list[aria-invalid='true'] {
      border-color: hsl(var(--destructive));
      box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
    }

    fieldset.scx-option-list[aria-invalid='true']:focus-within {
      outline-color: hsl(var(--destructive));
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive));
    }

    fieldset.scx-option-list legend {
      padding: 0 0.25rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      font-weight: 500;
    }

    fieldset.scx-option-list label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 2rem;
      padding: 0.375rem 0.5rem;
      border-radius: calc(var(--radius) - 4px);
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 0.875rem;
      line-height: 1.25;
    }

    fieldset.scx-option-list label:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    fieldset.scx-option-list button {
      justify-content: flex-start;
      width: 100%;
      height: 2rem;
      box-shadow: none;
    }

    fieldset.scx-option-list button[aria-pressed='true'] {
      border-color: hsl(var(--primary));
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }

    fieldset.scx-option-list button[aria-pressed='true']:hover {
      background-color: hsl(var(--primary) / 0.9);
    }

    fieldset.scx-option-list button:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }
  `]}_onSingleValueChange(e){let t=e.currentTarget;this._singleValue=t.value}_onOptionListClick(e){let t=e.target;if(!(t instanceof Node))return;let n=(t instanceof Element?t:t.parentElement)?.closest(`button[data-value]`);if(!n)return;let r=new Set(this._multipleValues),i=n.dataset.value||``;r.has(i)?r.delete(i):r.add(i),this._multipleValues=q.filter(e=>r.has(e))}_onAutocompleteInput(e){let t=e.currentTarget;this._autocompleteValue=t.value}render(){return j`
      <h1>Combobox</h1>
      <p class="desc">
        Native select and datalist controls styled to sit beside the rest of
        the shadcn-inspired form elements.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-select.js'</code></pre>

      <h2>Usage</h2>
      <p>
        Use <code>&lt;scx-select&gt;</code> for fixed choices or
        <code>&lt;scx-input list&gt;</code> when you want browser-provided
        autocomplete.
      </p>
      <pre><code>&lt;scx-select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/scx-select&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <scx-select
          aria-label="Select a framework"
          @change=${e=>this._onSingleValueChange(e)}
        >
          <option value="">Select a framework</option>
          ${q.map(e=>j`<option value=${e}>${e}</option>`)}
        </scx-select>
        <div class="state">Value: ${this._singleValue||`(none)`}</div>
      </div>
      <pre><code>&lt;scx-select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/scx-select&gt;</code></pre>

      <h3>Autocomplete</h3>
      <p>
        The input itself is fully styled, but the suggestion popup belongs to
        the browser and operating system, so its visual styling is limited.
      </p>
      <div class="preview">
        <scx-input
          list="framework-options"
          placeholder="Search frameworks"
          @input=${e=>this._onAutocompleteInput(e)}
        ></scx-input>
        <datalist id="framework-options">
          ${q.map(e=>j`<option value=${e}></option>`)}
        </datalist>
        <div class="state">Value: ${this._autocompleteValue||`(none)`}</div>
      </div>
      <pre><code>&lt;scx-input list="framework-options" placeholder="Search frameworks"&gt;&lt;/scx-input&gt;
&lt;datalist id="framework-options"&gt;
  &lt;option value="Next.js"&gt;&lt;/option&gt;
  &lt;option value="SvelteKit"&gt;&lt;/option&gt;
  &lt;option value="Nuxt.js"&gt;&lt;/option&gt;
&lt;/datalist&gt;</code></pre>

      <h3>Multiple</h3>
      <div class="preview">
        <fieldset
          class="scx-option-list"
          @click=${e=>this._onOptionListClick(e)}
        >
          <legend>Frameworks</legend>
          ${q.map(e=>j`
              <button
                type="button"
                class="scx-outline"
                data-value=${e}
                aria-pressed=${String(this._multipleValues.includes(e))}
              >
                ${e}
              </button>
            `)}
        </fieldset>
        <div class="state">Values: ${this._multipleValues.length>0?this._multipleValues.join(`, `):`(none)`}</div>
      </div>
<pre><code>&lt;fieldset class="scx-option-list"&gt;
  &lt;legend&gt;Frameworks&lt;/legend&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;Next.js&lt;/button&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;SvelteKit&lt;/button&gt;
  &lt;button type="button" class="scx-outline" aria-pressed="false"&gt;Nuxt.js&lt;/button&gt;
&lt;/fieldset&gt;</code></pre>

      <h3>Disabled + Invalid</h3>
      <div class="preview">
        <scx-select disabled aria-label="Disabled framework">
          <option>Disabled</option>
        </scx-select>
        <br><br>
        <scx-select aria-invalid="true" aria-label="Required framework">
          <option value="">Required framework</option>
          ${q.map(e=>j`<option value=${e}>${e}</option>`)}
        </scx-select>
      </div>
      <pre><code>&lt;scx-select disabled&gt;
  &lt;option&gt;Disabled&lt;/option&gt;
&lt;/scx-select&gt;
&lt;scx-select aria-invalid="true"&gt;
  &lt;option value=""&gt;Required framework&lt;/option&gt;
&lt;/scx-select&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>scx-select</code></td><td>Custom element</td><td>Styled as the shadcn-like combobox/select trigger.</td></tr>
            <tr><td><code>scx-input[list]</code></td><td>Custom element</td><td>Styled like an input while the browser owns autocomplete UI.</td></tr>
            <tr><td><code>fieldset.scx-option-list</code></td><td>Native fieldset</td><td>Styled option group for ergonomic multiple selection.</td></tr>
            <tr><td><code>option</code></td><td>Native child</td><td>Defines available choices.</td></tr>
            <tr><td><code>disabled</code></td><td>Boolean attribute</td><td>Applies disabled opacity and cursor.</td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>true</code></td><td>Applies destructive border and invalid ring.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Target</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>change</code>, <code>input</code></td>
              <td><code>scx-select</code>, <code>scx-input[list]</code>, buttons</td>
              <td>Use native form events and read <code>event.currentTarget.value</code> or update <code>aria-pressed</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};W([H()],J.prototype,`_singleValue`,void 0),W([H()],J.prototype,`_autocompleteValue`,void 0),W([H()],J.prototype,`_multipleValues`,void 0),J=W([V(`combobox-page`)],J);var ct=t({InputPage:()=>lt}),lt=class extends B{static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    td code {
      font-size: 0.75rem;
    }

    .inline-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}render(){return j`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-input.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-input placeholder="Enter text"&gt;&lt;/scx-input&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-input placeholder="Enter text"></scx-input>
      </div>
      <pre><code>&lt;scx-input placeholder="Enter text"&gt;&lt;/scx-input&gt;</code></pre>

      <h3>Types</h3>
      <div class="preview">
        <scx-input type="text" placeholder="Text"></scx-input>
        <scx-input type="email" placeholder="Email"></scx-input>
        <scx-input type="password" placeholder="Password"></scx-input>
        <scx-input type="search" placeholder="Search"></scx-input>
      </div>
      <pre><code>&lt;scx-input type="text" placeholder="Text"&gt;&lt;/scx-input&gt;
&lt;scx-input type="email" placeholder="Email"&gt;&lt;/scx-input&gt;
&lt;scx-input type="password" placeholder="Password"&gt;&lt;/scx-input&gt;
&lt;scx-input type="search" placeholder="Search"&gt;&lt;/scx-input&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <scx-input placeholder="Disabled" disabled></scx-input>
      </div>
      <pre><code>&lt;scx-input placeholder="Disabled" disabled&gt;&lt;/scx-input&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <scx-input placeholder="Error" aria-invalid="true"></scx-input>
      </div>
      <pre><code>&lt;scx-input placeholder="Error" aria-invalid="true"&gt;&lt;/scx-input&gt;</code></pre>

      <h3>File</h3>
      <div class="preview">
        <scx-input type="file"></scx-input>
      </div>
      <pre><code>&lt;scx-input type="file"&gt;&lt;/scx-input&gt;</code></pre>

      <h3>Required</h3>
      <div class="preview">
        <scx-input placeholder="Required field" required></scx-input>
      </div>
      <pre><code>&lt;scx-input placeholder="Required field" required&gt;&lt;/scx-input&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="inline-row">
          <scx-input type="search" placeholder="Search..."></scx-input>
          <scx-button variant="outline">Search</scx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; gap: 0.5rem;"&gt;
  &lt;scx-input type="search" placeholder="Search..."&gt;&lt;/scx-input&gt;
  &lt;scx-button variant="outline"&gt;Search&lt;/scx-button&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type</code></td>
              <td>Native input types</td>
              <td>Text-like input styling, including file inputs.</td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td>Native attribute</td>
              <td>Placeholder text uses <code>--muted-foreground</code>.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity and cursor.</td>
            </tr>
            <tr>
              <td><code>required</code></td>
              <td>Boolean attribute</td>
              <td>Native form validation remains unchanged.</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>Boolean attribute</td>
              <td>Native read-only behavior remains unchanged.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and invalid ring.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Styled Elements</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>scx-input</code></td>
              <td>Encapsulates an <code>input</code> inside a shadow root with shadcn-compatible tokens.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};lt=W([V(`input-page`)],lt);var ut=t({OverviewPage:()=>dt}),dt=class extends B{static{this.styles=h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    .lead {
      font-size: 1.125rem;
      color: hsl(var(--muted-foreground));
      margin: 0 0 2rem;
      line-height: 1.6;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 1rem;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .card {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.25rem;
      text-decoration: none;
      transition:
        border-color 0.15s,
        box-shadow 0.15s;
      cursor: pointer;
    }

    .card:hover {
      border-color: hsl(var(--primary) / 0.4);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .card h3 {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0 0 0.25rem;
      color: hsl(var(--foreground));
    }

    .card p {
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
      margin: 0;
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .lead { font-size: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
      .cards { grid-template-columns: 1fr; }
    }
  `}_navigateBadge(e){e.preventDefault(),location.hash=`badge`}_navigateButton(e){e.preventDefault(),location.hash=`button`}_navigateInput(e){e.preventDefault(),location.hash=`input`}_navigateTextarea(e){e.preventDefault(),location.hash=`textarea`}_navigateCheckbox(e){e.preventDefault(),location.hash=`checkbox`}_navigateCombobox(e){e.preventDefault(),location.hash=`combobox`}_navigateThemeGenerator(e){e.preventDefault(),location.hash=`theme-generator`}render(){return j`
      <h1>shadcx</h1>
      <p class="lead">
        shadcn/ui reimagined as self-contained web components. No framework lock-in,
        no Tailwind CSS — just copy-pasteable components that use shadcn-compatible
        CSS variables.
      </p>

      <h2>Getting Started</h2>
      <p>
        Copy the shared theme CSS and any component file into your project. Each
        component is a single file with its own markup, styles, and logic.
      </p>
      <pre><code>&lt;link rel="stylesheet" href="./theme.css"&gt;
&lt;script type="module" src="./scx-button.js"&gt;&lt;/script&gt;

&lt;scx-button variant="outline"&gt;Button&lt;/scx-button&gt;</code></pre>

      <h2>Theme Generator</h2>
      <p>
        Build a shadcn-compatible variable set visually, preview it against the
        web components, shuffle palettes, and export the CSS in one click.
      </p>
      <div class="cards">
        <a
          class="card"
          href="#/theme-generator"
          @click=${e=>this._navigateThemeGenerator(e)}
        >
          <h3>Theme Generator</h3>
          <p>Tweak color tokens, radius, fonts, borders, rings, and charts.</p>
        </a>
      </div>

      <h2>Components</h2>
      <div class="cards">
        <a class="card" href="#/badge" @click=${e=>this._navigateBadge(e)}>
          <h3>Badge</h3>
          <p>Displays a badge or a component that looks like a badge.</p>
        </a>
        <a class="card" href="#/button" @click=${e=>this._navigateButton(e)}>
          <h3>Button</h3>
          <p>Displays a button or a component that looks like a button.</p>
        </a>
        <a class="card" href="#/input" @click=${e=>this._navigateInput(e)}>
          <h3>Input</h3>
          <p>A text input component for forms and user data entry.</p>
        </a>
        <a class="card" href="#/textarea" @click=${e=>this._navigateTextarea(e)}>
          <h3>Textarea</h3>
          <p>Displays a form textarea or a component that looks like one.</p>
        </a>
        <a class="card" href="#/checkbox" @click=${e=>this._navigateCheckbox(e)}>
          <h3>Checkbox</h3>
          <p>A native checkbox styled with shadcn states.</p>
        </a>
        <a class="card" href="#/combobox" @click=${e=>this._navigateCombobox(e)}>
          <h3>Combobox</h3>
          <p>Native select and datalist controls with shadcn styling.</p>
        </a>
      </div>
    `}};dt=W([V(`overview-page`)],dt);var ft=t({SliderPage:()=>Y}),Y=class extends B{constructor(...e){super(...e),this._controlledValue=33,this._rangeValues=[25,75],this._activeRangeThumb=-1,this._multiValues=[10,30,70],this._activeMultiThumb=-1,this._onPointerMove=e=>{this._activeRangeThumb>=0&&this._updateRangeThumb(e),this._activeMultiThumb>=0&&this._updateMultiThumb(e)},this._onPointerUp=()=>{this._activeRangeThumb=-1,this._activeMultiThumb=-1}}static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    td code {
      font-size: 0.75rem;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .value-readout {
      font-size: 0.8125rem;
      color: hsl(var(--muted-foreground));
      min-width: 2rem;
      text-align: center;
    }

    .scx-slider {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 1.25rem;
      touch-action: none;
      user-select: none;
    }

    .scx-slider-track {
      position: relative;
      height: 0.375rem;
      flex-grow: 1;
      border-radius: 9999px;
      background-color: hsl(var(--primary) / 0.2);
    }

    .scx-slider-range {
      position: absolute;
      height: 100%;
      border-radius: 9999px;
      background-color: hsl(var(--primary));
    }

    .scx-slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 9999px;
      border: 2px solid hsl(var(--primary));
      background-color: hsl(var(--background));
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      transition: border-color 0.15s, box-shadow 0.15s;
      outline: none;
      cursor: pointer;
    }

    .scx-slider-thumb:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }

    .scx-slider-thumb:disabled,
    .scx-slider-thumb[aria-disabled='true'] {
      display: none;
    }

    .scx-slider-vertical {
      flex-direction: column;
      width: 1.25rem;
      height: 12rem;
    }

    .scx-slider-vertical .scx-slider-track {
      width: 0.375rem;
      height: 100%;
      flex-grow: 0;
    }

    .scx-slider-vertical .scx-slider-range {
      width: 100%;
      height: auto;
    }

    .scx-slider-vertical .scx-slider-thumb {
      left: auto;
    }

    .scx-slider.disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .scx-slider.disabled .scx-slider-thumb {
      cursor: not-allowed;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}connectedCallback(){super.connectedCallback(),window.addEventListener(`pointermove`,this._onPointerMove),window.addEventListener(`pointerup`,this._onPointerUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`pointermove`,this._onPointerMove),window.removeEventListener(`pointerup`,this._onPointerUp)}_getValueFromEvent(e,t,n,r){let i=t.getBoundingClientRect(),a=Math.max(0,Math.min(1,(e.clientX-i.left)/i.width));return Math.round((n+a*(r-n))*100)/100}_startRangeDrag(e,t){t.preventDefault(),this._activeRangeThumb=e,t.target.setPointerCapture?.(t.pointerId)}_updateRangeThumb(e){let t=this.shadowRoot?.querySelector(`.scx-range-track`);if(!t)return;let n=this._getValueFromEvent(e,t,0,100),r=[...this._rangeValues];r[this._activeRangeThumb]=n,this._activeRangeThumb===0?r[0]=Math.min(n,r[1]-1):r[1]=Math.max(n,r[0]+1),this._rangeValues=r}_startMultiDrag(e,t){t.preventDefault(),this._activeMultiThumb=e,t.target.setPointerCapture?.(t.pointerId)}_updateMultiThumb(e){let t=this.shadowRoot?.querySelector(`.scx-multi-track`);if(!t)return;let n=this._getValueFromEvent(e,t,0,100),r=[...this._multiValues];r[this._activeMultiThumb]=Math.max(this._activeMultiThumb>0?r[this._activeMultiThumb-1]+1:0,Math.min(this._activeMultiThumb<r.length-1?r[this._activeMultiThumb+1]-1:100,n)),this._multiValues=r}_onRangeKeydown(e,t){if(t.key===`ArrowRight`||t.key===`ArrowUp`){t.preventDefault();let n=[...this._rangeValues];n[e]=Math.min(100,n[e]+1),e===0&&n[0]>=n[1]&&(n[0]=n[1]-1),e===1&&n[1]<=n[0]&&(n[1]=n[0]+1),this._rangeValues=n}else if(t.key===`ArrowLeft`||t.key===`ArrowDown`){t.preventDefault();let n=[...this._rangeValues];n[e]=Math.max(0,n[e]-1),e===0&&n[0]>=n[1]&&(n[0]=n[1]-1),e===1&&n[1]<=n[0]&&(n[1]=n[0]+1),this._rangeValues=n}}_onMultiKeydown(e,t){if(t.key===`ArrowRight`||t.key===`ArrowUp`){t.preventDefault();let n=[...this._multiValues];n[e]=Math.min(100,n[e]+1);for(let e=0;e<n.length-1;e++)n[e]>=n[e+1]&&(n[e+1]=n[e]+1);this._multiValues=n}else if(t.key===`ArrowLeft`||t.key===`ArrowDown`){t.preventDefault();let n=[...this._multiValues];n[e]=Math.max(0,n[e]-1);for(let e=n.length-1;e>0;e--)n[e]<=n[e-1]&&(n[e-1]=n[e]-1);this._multiValues=n}}render(){return j`
      <h1>Slider</h1>
      <p class="desc">
        An input where the user selects a value from within a given range.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-slider.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-slider min="0" max="100" step="1" value="33"></scx-slider>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h3>Range</h3>
      <div class="preview">
        <div class="scx-slider" style="width: 100%;">
          <div class="scx-slider-track scx-range-track">
            <div
              class="scx-slider-range"
              style="left: ${this._rangeValues[0]}%; width: ${this._rangeValues[1]-this._rangeValues[0]}%"
            ></div>
          </div>
          <div
            class="scx-slider-thumb"
            style="left: ${this._rangeValues[0]}%"
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${this._rangeValues[0]}
            aria-label="Minimum"
            @pointerdown=${e=>this._startRangeDrag(0,e)}
            @keydown=${e=>this._onRangeKeydown(0,e)}
          ></div>
          <div
            class="scx-slider-thumb"
            style="left: ${this._rangeValues[1]}%"
            role="slider"
            tabindex="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${this._rangeValues[1]}
            aria-label="Maximum"
            @pointerdown=${e=>this._startRangeDrag(1,e)}
            @keydown=${e=>this._onRangeKeydown(1,e)}
          ></div>
        </div>
        <span class="value-readout">
          ${this._rangeValues[0]} - ${this._rangeValues[1]}
        </span>
      </div>
      <pre><code>&lt;div class="scx-slider"&gt;
  &lt;div class="scx-slider-track"&gt;
    &lt;div class="scx-slider-range" style="left: 25%; width: 50%"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 25%" role="slider"
       tabindex="0" aria-valuenow="25"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 75%" role="slider"
       tabindex="0" aria-valuenow="75"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>Multiple Thumbs</h3>
      <div class="preview">
        <div class="scx-slider" style="width: 100%;">
          <div class="scx-slider-track scx-multi-track">
            <div
              class="scx-slider-range"
              style="left: ${this._multiValues[0]}%; width: ${this._multiValues[this._multiValues.length-1]-this._multiValues[0]}%"
            ></div>
          </div>
          ${this._multiValues.map((e,t)=>j`
            <div
              class="scx-slider-thumb"
              style="left: ${e}%"
              role="slider"
              tabindex="0"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow=${e}
              aria-label="Thumb ${t+1}"
              @pointerdown=${e=>this._startMultiDrag(t,e)}
              @keydown=${e=>this._onMultiKeydown(t,e)}
            ></div>
          `)}
        </div>
        <span class="value-readout">
          [${this._multiValues.join(`, `)}]
        </span>
      </div>
      <pre><code>&lt;div class="scx-slider"&gt;
  &lt;div class="scx-slider-track"&gt;
    &lt;div class="scx-slider-range" style="left: 10%; width: 60%"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 10%" role="slider"
       tabindex="0" aria-valuenow="10"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 30%" role="slider"
       tabindex="0" aria-valuenow="30"&gt;&lt;/div&gt;
  &lt;div class="scx-slider-thumb" style="left: 70%" role="slider"
       tabindex="0" aria-valuenow="70"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>Vertical</h3>
      <div class="preview" style="justify-content: center;">
        <scx-slider orientation="vertical" min="0" max="100" step="1" value="33"></scx-slider>
      </div>
      <pre><code>&lt;scx-slider orientation="vertical" min="0" max="100" step="1" value="33"&gt;&lt;/scx-slider&gt;</code></pre>

      <h3>Controlled</h3>
      <div class="preview">
        <div class="flex-col">
          <scx-slider
            min="0"
            max="100"
            step="1"
            .value=${String(this._controlledValue)}
            @input=${e=>{this._controlledValue=Number(e.target.value)}}
          ></scx-slider>
          <span class="value-readout">${this._controlledValue}</span>
        </div>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1"&gt;&lt;/scx-slider&gt;
&lt;script&gt;
  document.querySelector('scx-slider')
    .addEventListener('input', (e) =&gt; {
      console.log(e.target.value)
    })
&lt;/script&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <scx-slider min="0" max="100" step="1" value="33" disabled></scx-slider>
      </div>
      <pre><code>&lt;scx-slider min="0" max="100" step="1" value="33" disabled&gt;&lt;/scx-slider&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>min</code></td>
              <td><code>number</code></td>
              <td>Minimum allowed value.</td>
            </tr>
            <tr>
              <td><code>max</code></td>
              <td><code>number</code></td>
              <td>Maximum allowed value.</td>
            </tr>
            <tr>
              <td><code>step</code></td>
              <td><code>number</code></td>
              <td>Step interval for value changes.</td>
            </tr>
            <tr>
              <td><code>value</code></td>
              <td><code>string</code></td>
              <td>Current slider value.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean attribute</code></td>
              <td>Disables the slider.</td>
            </tr>
            <tr>
              <td><code>orientation</code></td>
              <td><code>vertical</code></td>
              <td>Renders the slider vertically.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Custom Multi-Thumb Slider</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>scx-slider</code></td>
              <td>Container for a custom JavaScript-driven slider.</td>
            </tr>
            <tr>
              <td><code>scx-slider-track</code></td>
              <td>The track element shown behind the range.</td>
            </tr>
            <tr>
              <td><code>scx-slider-range</code></td>
              <td>The filled range indicator. Position with <code>left</code> and <code>width</code>.</td>
            </tr>
            <tr>
              <td><code>scx-slider-thumb</code></td>
              <td>A draggable thumb. Use <code>role="slider"</code> for accessibility.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};W([H()],Y.prototype,`_controlledValue`,void 0),W([H()],Y.prototype,`_rangeValues`,void 0),W([H()],Y.prototype,`_multiValues`,void 0),Y=W([V(`slider-page`)],Y);var pt=t({TextareaPage:()=>mt}),mt=class extends B{static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview > scx-textarea,
    .preview > .field,
    .preview > .stack,
    .preview > .rtl-box {
      max-width: 20rem;
    }

    .preview + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 24rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    td code {
      font-size: 0.75rem;
    }

    .field,
    .stack,
    .rtl-box {
      display: grid;
      gap: 0.5rem;
      width: 100%;
      min-width: 0;
    }

    .field label,
    .rtl-box label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.35;
    }

    .field small {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .field[data-disabled] label,
    .field[data-disabled] small {
      opacity: 0.5;
    }

    .field[data-invalid] label,
    .field[data-invalid] small {
      color: hsl(var(--destructive));
    }

    .stack {
      justify-items: start;
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .preview {
        padding: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
    }
  `]}render(){return j`
      <h1>Textarea</h1>
      <p class="desc">
        Displays a form textarea or a component that looks like a textarea.
      </p>

      <h2>Installation</h2>
      <pre><code>import './scx-textarea.js'</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <scx-textarea placeholder="Type your message here."></scx-textarea>
      </div>
      <pre><code>&lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <label for="textarea-message">Message</label>
          <scx-textarea id="textarea-message" placeholder="Type your message here." rows="6"></scx-textarea>
          <small>Enter your message below.</small>
        </div>
      </div>
      <pre><code>&lt;label for="textarea-message"&gt;Message&lt;/label&gt;
&lt;scx-textarea id="textarea-message" placeholder="Type your message here." rows="6"&gt;&lt;/scx-textarea&gt;
&lt;small&gt;Enter your message below.&lt;/small&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <label for="textarea-disabled">Message</label>
          <scx-textarea id="textarea-disabled" placeholder="Type your message here." disabled></scx-textarea>
        </div>
      </div>
      <pre><code>&lt;div data-disabled&gt;
  &lt;label for="textarea-disabled"&gt;Message&lt;/label&gt;
  &lt;scx-textarea id="textarea-disabled" placeholder="Type your message here." disabled&gt;&lt;/scx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <label for="textarea-invalid">Message</label>
          <scx-textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"></scx-textarea>
          <small>Please enter a valid message.</small>
        </div>
      </div>
      <pre><code>&lt;div data-invalid&gt;
  &lt;label for="textarea-invalid"&gt;Message&lt;/label&gt;
  &lt;scx-textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"&gt;&lt;/scx-textarea&gt;
  &lt;small&gt;Please enter a valid message.&lt;/small&gt;
&lt;/div&gt;</code></pre>

      <h3>Button</h3>
      <div class="preview">
        <div class="stack">
          <scx-textarea placeholder="Type your message here."></scx-textarea>
          <scx-button>Send message</scx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: grid; gap: 0.5rem;"&gt;
  &lt;scx-textarea placeholder="Type your message here."&gt;&lt;/scx-textarea&gt;
  &lt;scx-button&gt;Send message&lt;/scx-button&gt;
&lt;/div&gt;</code></pre>

      <h3>RTL</h3>
      <div class="preview">
        <div class="rtl-box" dir="rtl">
          <label for="textarea-rtl">التعليقات</label>
          <scx-textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."></scx-textarea>
        </div>
      </div>
      <pre><code>&lt;div dir="rtl"&gt;
  &lt;label for="textarea-rtl"&gt;التعليقات&lt;/label&gt;
  &lt;scx-textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."&gt;&lt;/scx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>placeholder</code></td>
              <td>Native attribute</td>
              <td>Placeholder text uses <code>--muted-foreground</code>.</td>
            </tr>
            <tr>
              <td><code>rows</code></td>
              <td>Native attribute</td>
              <td>Controls the visible line count while preserving the component styles.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean attribute</td>
              <td>Applies disabled opacity, cursor, and input-token background.</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td>Boolean attribute</td>
              <td>Native read-only behavior remains unchanged.</td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>true</code></td>
              <td>Applies destructive border and ring styles.</td>
            </tr>
            <tr>
              <td><code>dir</code></td>
              <td><code>rtl | ltr</code></td>
              <td>Uses browser text direction and logical padding for RTL layouts.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};mt=W([V(`textarea-page`)],mt);var ht=t({ThemeGeneratorPage:()=>X}),gt=`font-sans.font-mono.radius.background.foreground.card.card-foreground.popover.popover-foreground.primary.primary-foreground.secondary.secondary-foreground.muted.muted-foreground.accent.accent-foreground.destructive.destructive-foreground.border.input.ring.chart-1.chart-2.chart-3.chart-4.chart-5`.split(`.`),_t={"font-sans":`'Inter', system-ui, -apple-system, sans-serif`,"font-mono":`'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`,radius:`0.5rem`,background:`0 0% 100%`,foreground:`0 0% 3.9%`,card:`0 0% 100%`,"card-foreground":`0 0% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`0 0% 3.9%`,primary:`0 0% 9%`,"primary-foreground":`0 0% 98%`,secondary:`0 0% 96.1%`,"secondary-foreground":`0 0% 9%`,muted:`0 0% 96.1%`,"muted-foreground":`0 0% 45.1%`,accent:`0 0% 96.1%`,"accent-foreground":`0 0% 9%`,destructive:`0 84.2% 60.2%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 89.8%`,input:`0 0% 89.8%`,ring:`0 0% 3.9%`,"chart-1":`12 76% 61%`,"chart-2":`173 58% 39%`,"chart-3":`197 37% 24%`,"chart-4":`43 74% 66%`,"chart-5":`27 87% 67%`},vt={"font-sans":`'Inter', system-ui, -apple-system, sans-serif`,"font-mono":`'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`,radius:`0.5rem`,background:`0 0% 3.9%`,foreground:`0 0% 98%`,card:`0 0% 3.9%`,"card-foreground":`0 0% 98%`,popover:`0 0% 3.9%`,"popover-foreground":`0 0% 98%`,primary:`0 0% 98%`,"primary-foreground":`0 0% 9%`,secondary:`0 0% 14.9%`,"secondary-foreground":`0 0% 98%`,muted:`0 0% 14.9%`,"muted-foreground":`0 0% 63.9%`,accent:`0 0% 14.9%`,"accent-foreground":`0 0% 98%`,destructive:`0 62.8% 30.6%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 14.9%`,input:`0 0% 14.9%`,ring:`0 0% 83.1%`,"chart-1":`220 70% 50%`,"chart-2":`160 60% 45%`,"chart-3":`30 80% 55%`,"chart-4":`280 65% 60%`,"chart-5":`340 75% 55%`},yt={Neutral:{background:`0 0% 100%`,foreground:`0 0% 3.9%`,card:`0 0% 100%`,"card-foreground":`0 0% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`0 0% 3.9%`,secondary:`0 0% 96.1%`,"secondary-foreground":`0 0% 9%`,muted:`0 0% 96.1%`,"muted-foreground":`0 0% 45.1%`,accent:`0 0% 96.1%`,"accent-foreground":`0 0% 9%`,border:`0 0% 89.8%`,input:`0 0% 89.8%`},Zinc:{background:`0 0% 100%`,foreground:`240 10% 3.9%`,card:`0 0% 100%`,"card-foreground":`240 10% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`240 10% 3.9%`,secondary:`240 4.8% 95.9%`,"secondary-foreground":`240 5.9% 10%`,muted:`240 4.8% 95.9%`,"muted-foreground":`240 3.8% 46.1%`,accent:`240 4.8% 95.9%`,"accent-foreground":`240 5.9% 10%`,border:`240 5.9% 90%`,input:`240 5.9% 90%`},Slate:{background:`0 0% 100%`,foreground:`222.2 84% 4.9%`,card:`0 0% 100%`,"card-foreground":`222.2 84% 4.9%`,popover:`0 0% 100%`,"popover-foreground":`222.2 84% 4.9%`,secondary:`210 40% 96.1%`,"secondary-foreground":`222.2 47.4% 11.2%`,muted:`210 40% 96.1%`,"muted-foreground":`215.4 16.3% 46.9%`,accent:`210 40% 96.1%`,"accent-foreground":`222.2 47.4% 11.2%`,border:`214.3 31.8% 91.4%`,input:`214.3 31.8% 91.4%`},Stone:{background:`0 0% 100%`,foreground:`20 14.3% 4.1%`,card:`0 0% 100%`,"card-foreground":`20 14.3% 4.1%`,popover:`0 0% 100%`,"popover-foreground":`20 14.3% 4.1%`,secondary:`60 4.8% 95.9%`,"secondary-foreground":`24 9.8% 10%`,muted:`60 4.8% 95.9%`,"muted-foreground":`25 5.3% 44.7%`,accent:`60 4.8% 95.9%`,"accent-foreground":`24 9.8% 10%`,border:`20 5.9% 90%`,input:`20 5.9% 90%`}},bt={Neutral:{background:`0 0% 3.9%`,foreground:`0 0% 98%`,card:`0 0% 3.9%`,"card-foreground":`0 0% 98%`,popover:`0 0% 3.9%`,"popover-foreground":`0 0% 98%`,secondary:`0 0% 14.9%`,"secondary-foreground":`0 0% 98%`,muted:`0 0% 14.9%`,"muted-foreground":`0 0% 63.9%`,accent:`0 0% 14.9%`,"accent-foreground":`0 0% 98%`,border:`0 0% 14.9%`,input:`0 0% 14.9%`},Zinc:{background:`240 10% 3.9%`,foreground:`0 0% 98%`,card:`240 10% 3.9%`,"card-foreground":`0 0% 98%`,popover:`240 10% 3.9%`,"popover-foreground":`0 0% 98%`,secondary:`240 3.7% 15.9%`,"secondary-foreground":`0 0% 98%`,muted:`240 3.7% 15.9%`,"muted-foreground":`240 5% 64.9%`,accent:`240 3.7% 15.9%`,"accent-foreground":`0 0% 98%`,border:`240 3.7% 15.9%`,input:`240 3.7% 15.9%`},Slate:{background:`222.2 84% 4.9%`,foreground:`210 40% 98%`,card:`222.2 84% 4.9%`,"card-foreground":`210 40% 98%`,popover:`222.2 84% 4.9%`,"popover-foreground":`210 40% 98%`,secondary:`217.2 32.6% 17.5%`,"secondary-foreground":`210 40% 98%`,muted:`217.2 32.6% 17.5%`,"muted-foreground":`215 20.2% 65.1%`,accent:`217.2 32.6% 17.5%`,"accent-foreground":`210 40% 98%`,border:`217.2 32.6% 17.5%`,input:`217.2 32.6% 17.5%`},Stone:{background:`20 14.3% 4.1%`,foreground:`0 0% 95%`,card:`20 14.3% 4.1%`,"card-foreground":`0 0% 95%`,popover:`20 14.3% 4.1%`,"popover-foreground":`0 0% 95%`,secondary:`12 6.5% 15.1%`,"secondary-foreground":`0 0% 98%`,muted:`12 6.5% 15.1%`,"muted-foreground":`24 5.4% 63.9%`,accent:`12 6.5% 15.1%`,"accent-foreground":`0 0% 98%`,border:`12 6.5% 15.1%`,input:`12 6.5% 15.1%`}},xt={Default:{primary:`0 0% 9%`,"primary-foreground":`0 0% 98%`,ring:`0 0% 3.9%`,radius:`0.5rem`},Nova:{primary:`263 70% 50%`,"primary-foreground":`0 0% 98%`,accent:`263 48% 95%`,"accent-foreground":`263 64% 22%`,ring:`263 70% 50%`,radius:`0.75rem`},Grove:{primary:`152 56% 36%`,"primary-foreground":`0 0% 98%`,accent:`152 42% 94%`,"accent-foreground":`153 70% 18%`,ring:`152 56% 36%`,radius:`0.625rem`},Ember:{primary:`18 88% 46%`,"primary-foreground":`0 0% 98%`,accent:`28 86% 94%`,"accent-foreground":`18 88% 22%`,ring:`18 88% 46%`,radius:`0.375rem`}},St={Default:{primary:`0 0% 98%`,"primary-foreground":`0 0% 9%`,ring:`0 0% 83.1%`,radius:`0.5rem`},Nova:{primary:`263 72% 66%`,"primary-foreground":`0 0% 98%`,accent:`263 35% 18%`,"accent-foreground":`263 90% 88%`,ring:`263 72% 66%`,radius:`0.75rem`},Grove:{primary:`152 62% 48%`,"primary-foreground":`0 0% 98%`,accent:`152 33% 16%`,"accent-foreground":`152 74% 86%`,ring:`152 62% 48%`,radius:`0.625rem`},Ember:{primary:`18 90% 58%`,"primary-foreground":`0 0% 98%`,accent:`18 42% 17%`,"accent-foreground":`28 92% 86%`,ring:`18 90% 58%`,radius:`0.375rem`}},Ct=[{label:`Inter`,value:`'Inter', system-ui, -apple-system, sans-serif`},{label:`Geist`,value:`'Geist', 'Inter', system-ui, sans-serif`},{label:`System`,value:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},{label:`Serif`,value:`ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`}],wt=[{label:`Primary`,token:`primary`,hint:`Buttons, selected states`},{label:`Accent`,token:`accent`,hint:`Hover and soft surfaces`},{label:`Destructive`,token:`destructive`,hint:`Invalid and danger states`},{label:`Border`,token:`border`,hint:`Cards and separators`},{label:`Ring`,token:`ring`,hint:`Focus outlines`}],Tt=[{label:`Chart 1`,token:`chart-1`},{label:`Chart 2`,token:`chart-2`},{label:`Chart 3`,token:`chart-3`},{label:`Chart 4`,token:`chart-4`},{label:`Chart 5`,token:`chart-5`}],X=class extends B{constructor(...e){super(...e),this._base=`Neutral`,this._style=`Default`,this._copied=!1,this._dark=document.documentElement.classList.contains(`dark`),this._theme=this._createTheme()}connectedCallback(){super.connectedCallback(),this._darkObserver=new MutationObserver(()=>this._syncDocumentTheme()),this._darkObserver.observe(document.documentElement,{attributeFilter:[`class`],attributes:!0}),this._syncDocumentTheme()}disconnectedCallback(){this._darkObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){this.renderRoot.querySelectorAll(`[data-action="shuffle"]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),this._shuffle()})}),this.renderRoot.querySelectorAll(`[data-action="export"]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),this._copyCss()})})}static{this.styles=[U,h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      margin: 0;
      color: hsl(var(--foreground));
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1.2;
    }

    p {
      margin: 0;
    }

    .generator {
      display: grid;
      grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);
      gap: 1.25rem;
      min-height: calc(100svh - 7rem);
      color: hsl(var(--foreground));
    }

    .controls {
      align-self: start;
      position: sticky;
      top: 5rem;
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 18px 50px rgb(0 0 0 / 0.08);
    }

    .controls-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.875rem 1rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .controls-title {
      display: grid;
      gap: 0.125rem;
    }

    .controls-title strong {
      font-size: 0.9375rem;
      line-height: 1.2;
    }

    .controls-title span {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.2;
    }

    .controls-body {
      display: grid;
      gap: 0.75rem;
      padding: 0.875rem;
    }

    .control-group {
      display: grid;
      gap: 0.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .control-group:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    .control-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.75rem;
      align-items: center;
      min-height: 3.125rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .control-copy {
      display: grid;
      min-width: 0;
      gap: 0.125rem;
    }

    .control-copy label,
    .control-copy span:first-child {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.2;
    }

    .control-copy strong {
      overflow: hidden;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .control-row select {
      width: 8.5rem;
      max-width: 100%;
      height: 2rem;
      padding-block: 0.125rem;
      font-size: 0.8125rem;
    }

    .swatch {
      width: 2rem;
      height: 2rem;
      padding: 0;
      border: 1px solid hsl(var(--border));
      border-radius: 999px;
      background: transparent;
      cursor: pointer;
    }

    .swatch::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    .swatch::-webkit-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .swatch::-moz-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .radius-control {
      display: grid;
      gap: 0.5rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .radius-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .radius-head strong {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
    }

    input[type='range'] {
      width: 100%;
      accent-color: hsl(var(--primary));
    }

    .action-stack {
      display: grid;
      gap: 0.5rem;
    }

    .action-stack scx-button {
      width: 100%;
    }

    .preview {
      display: grid;
      grid-template-rows: auto 1fr;
      min-width: 0;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background:
        linear-gradient(180deg, hsl(var(--muted) / 0.7), transparent 18rem),
        hsl(var(--background));
      color: hsl(var(--foreground));
      overflow: hidden;
    }

    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    .preview-heading {
      display: grid;
      gap: 0.25rem;
      min-width: 0;
    }

    .preview-heading p {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .preview-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.5rem;
    }

    .preview-body {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.9fr);
      gap: 1rem;
      align-items: start;
      padding: 1rem;
    }

    .showcase,
    .surface {
      border: 1px solid hsl(var(--border));
      border-radius: var(--radius);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
    }

    .showcase {
      display: grid;
      gap: 1rem;
      align-content: start;
      padding: 1rem;
    }

    .surface {
      display: grid;
      gap: 1rem;
      align-content: start;
      padding: 1rem;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .section-title h2,
    .surface h2 {
      margin: 0;
      color: hsl(var(--foreground));
      font-size: 1rem;
      font-weight: 650;
      letter-spacing: 0;
      line-height: 1.25;
    }

    .section-title span,
    .surface p {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .button-row,
    .badge-row,
    .chart-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .form-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 0.75rem;
    }

    .field {
      display: grid;
      gap: 0.375rem;
      min-width: 0;
    }

    .field.wide {
      grid-column: 1 / -1;
    }

    .field label {
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
      font-weight: 500;
    }

    .field small {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.35;
    }

    .checkbox-line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
    }

    .chart-row {
      align-items: end;
      min-height: 8rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .bar {
      flex: 1;
      min-width: 2rem;
      border-radius: calc(var(--radius) - 3px) calc(var(--radius) - 3px) 0 0;
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.18);
    }

    .bar:nth-child(1) {
      height: 3.8rem;
      background-color: hsl(var(--chart-1));
    }

    .bar:nth-child(2) {
      height: 6.25rem;
      background-color: hsl(var(--chart-2));
    }

    .bar:nth-child(3) {
      height: 4.9rem;
      background-color: hsl(var(--chart-3));
    }

    .bar:nth-child(4) {
      height: 7rem;
      background-color: hsl(var(--chart-4));
    }

    .bar:nth-child(5) {
      height: 5.4rem;
      background-color: hsl(var(--chart-5));
    }

    .token-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.5rem;
    }

    .token {
      min-height: 3rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background: hsl(var(--muted));
      overflow: hidden;
    }

    .token span {
      display: block;
      height: 1rem;
    }

    .token:nth-child(1) span {
      background-color: hsl(var(--primary));
    }

    .token:nth-child(2) span {
      background-color: hsl(var(--secondary));
    }

    .token:nth-child(3) span {
      background-color: hsl(var(--accent));
    }

    .token:nth-child(4) span {
      background-color: hsl(var(--destructive));
    }

    .token:nth-child(5) span {
      background-color: hsl(var(--ring));
    }

    .token strong {
      display: block;
      padding: 0.5rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .option-list {
      max-width: none;
    }

    fieldset.scx-option-list {
      display: grid;
      width: 100%;
      max-width: 24rem;
      gap: 0.25rem;
      margin: 0;
      padding: 0.25rem;
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: var(--font-sans);
    }

    fieldset.scx-option-list:focus-within {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }

    fieldset.scx-option-list legend {
      padding: 0 0.25rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      font-weight: 500;
    }

    fieldset.scx-option-list button {
      justify-content: flex-start;
      width: 100%;
      height: 2rem;
      appearance: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.75rem;
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-family: inherit;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1;
    }

    fieldset.scx-option-list button[aria-pressed='true'] {
      border-color: hsl(var(--primary));
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }

    fieldset.scx-option-list button[aria-pressed='true']:hover {
      background-color: hsl(var(--primary) / 0.9);
    }

    fieldset.scx-option-list button:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
    }

    @media (max-width: 1060px) {
      .generator {
        grid-template-columns: 1fr;
      }

      .controls {
        position: static;
      }
    }

    @media (max-width: 780px) {
      .preview-body,
      .form-grid {
        grid-template-columns: 1fr;
      }

      .preview-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .preview-actions {
        justify-content: flex-start;
      }
    }

    @media (max-width: 560px) {
      .generator {
        min-height: auto;
      }

      .controls-body,
      .preview-body {
        padding: 0.75rem;
      }

      .control-row {
        grid-template-columns: 1fr;
      }

      .control-row select {
        width: 100%;
      }
    }
  `]}get _basePaletteSet(){return this._dark?bt:yt}get _stylePresetSet(){return this._dark?St:xt}get _themeStyle(){return gt.map(e=>`--${e}: ${this._theme[e]}`).join(`; `)}get _radiusValue(){return Number.parseFloat(this._theme.radius.replace(`rem`,``))}get _fontLabel(){return Ct.find(e=>e.value===this._theme[`font-sans`])?.label??`Custom`}_createTheme(){let e=this._dark?vt:_t,t=this._basePaletteSet[this._base],n=this._stylePresetSet[this._style];return{...e,...t,...n}}_syncDocumentTheme(){let e=document.documentElement.classList.contains(`dark`);if(e===this._dark)return;let t=this._theme[`font-sans`];this._dark=e,this._theme={...this._createTheme(),"font-sans":t}}_setToken(e,t){let n={...this._theme,[e]:t};e===`primary`&&(n[`primary-foreground`]=this._foregroundFor(t)),e===`accent`&&(n[`accent-foreground`]=this._foregroundFor(t)),e===`destructive`&&(n[`destructive-foreground`]=this._foregroundFor(t)),this._theme=n}_setColor(e,t){let n=t.currentTarget;this._setToken(e,this._hexToHsl(n.value))}_setRadius(e){let t=e.currentTarget;this._theme={...this._theme,radius:`${t.value}rem`}}_setFont(e){this._theme={...this._theme,"font-sans":e}}_applyBase(e){let t=e.currentTarget;this._base=t.value,this._theme={...this._theme,...this._basePaletteSet[t.value]}}_applyStyle(e){let t=e.currentTarget;this._style=t.value,this._theme={...this._theme,...this._stylePresetSet[t.value]}}_shuffle(){let e=Object.keys(yt),t=Object.keys(xt),n=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)],i=Math.floor(Math.random()*360),a=(i+72+Math.floor(Math.random()*120))%360,o=(i+32)%360,s=this._dark?58+Math.floor(Math.random()*14):38+Math.floor(Math.random()*13),c=this._dark?16:94,l=`${i} ${64+Math.floor(Math.random()*18)}% ${s}%`,u=`${a} ${52+Math.floor(Math.random()*18)}% ${c}%`,d=[.25,.375,.5,.625,.75,1][Math.floor(Math.random()*6)];this._base=n,this._style=r,this._theme={...this._theme,...this._basePaletteSet[n],...this._stylePresetSet[r],primary:l,"primary-foreground":this._foregroundFor(l),accent:u,"accent-foreground":this._foregroundFor(u),ring:l,radius:`${d}rem`,"chart-1":`${o} 76% 56%`,"chart-2":`${(o+58)%360} 62% 44%`,"chart-3":`${(o+123)%360} 48% 42%`,"chart-4":`${(o+188)%360} 78% 62%`,"chart-5":`${(o+247)%360} 70% 58%`}}async _copyCss(){try{await navigator.clipboard.writeText(this._buildCss()),this._copied=!0,window.setTimeout(()=>{this._copied=!1},1800)}catch{this._copied=!1}}_buildCss(){let e=gt.map(e=>`  --${e}: ${this._theme[e]};`).join(`
`);return`${this._dark?`.dark`:`:root`} {\n${e}\n}\n`}_hslToHex(e){let t=e.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);if(!t)return`#000000`;let n=Number.parseFloat(t[1])/360,r=Number.parseFloat(t[2])/100,i=Number.parseFloat(t[3])/100;if(r===0){let e=Math.round(i*255);return this._toHex(e,e,e)}let a=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e},o=i<.5?i*(1+r):i+r-i*r,s=2*i-o,c=Math.round(a(s,o,n+1/3)*255),l=Math.round(a(s,o,n)*255),u=Math.round(a(s,o,n-1/3)*255);return this._toHex(c,l,u)}_hexToHsl(e){let t=Number.parseInt(e.slice(1,3),16)/255,n=Number.parseInt(e.slice(3,5),16)/255,r=Number.parseInt(e.slice(5,7),16)/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=0,s=0,c=(i+a)/2;if(i!==a){let e=i-a;s=c>.5?e/(2-i-a):e/(i+a),o=i===t?(n-r)/e+(n<r?6:0):i===n?(r-t)/e+2:(t-n)/e+4,o/=6}return`${Math.round(o*360)} ${Math.round(s*100)}% ${Math.round(c*100)}%`}_toHex(e,t,n){return`#${[e,t,n].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}_foregroundFor(e){let t=e.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);return(t?Number.parseFloat(t[3]):50)>62?`0 0% 9%`:`0 0% 98%`}_renderSelectControl(e,t,n,r){return j`
      <div class="control-row">
        <span class="control-copy">
          <span>${e}</span>
          <strong>${t}</strong>
        </span>
        <select aria-label=${e} @change=${r}>
          ${n.map(e=>j`
            <option value=${e} ?selected=${e===t}>${e}</option>
          `)}
        </select>
      </div>
    `}_renderColorControl(e,t,n){return j`
      <div class="control-row">
        <span class="control-copy">
          <label for=${t}>${e}</label>
          <strong>${n}</strong>
        </span>
        <input
          id=${t}
          class="swatch"
          type="color"
          .value=${this._hslToHex(this._theme[t])}
          @input=${e=>this._setColor(t,e)}
          aria-label=${`${e} color`}
        >
      </div>
    `}render(){return j`
      <div class="generator" style=${this._themeStyle} data-testid="theme-generator">
        <aside class="controls" aria-label="Theme controls">
          <div class="controls-header">
            <span class="controls-title">
              <strong>Theme Generator</strong>
              <span>shadcn variables</span>
            </span>
            <scx-button
              size="icon"
              variant="outline"
              type="button"
              aria-label="Shuffle theme"
              data-action="shuffle"
              data-testid="theme-shuffle"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 3h5v5"></path>
                <path d="M4 20 21 3"></path>
                <path d="M21 16v5h-5"></path>
                <path d="m15 15 6 6"></path>
                <path d="m4 4 5 5"></path>
              </svg>
            </scx-button>
          </div>

          <div class="controls-body">
            <div class="control-group">
              ${this._renderSelectControl(`Style`,this._style,Object.keys(xt),e=>this._applyStyle(e))}
              ${this._renderSelectControl(`Base Color`,this._base,Object.keys(yt),e=>this._applyBase(e))}
              ${this._renderSelectControl(`Font`,this._fontLabel,Ct.map(e=>e.label),e=>{let t=e.currentTarget,n=Ct.find(e=>e.label===t.value);n&&this._setFont(n.value)})}
            </div>

            <div class="control-group">
              ${wt.map(e=>this._renderColorControl(e.label,e.token,e.hint))}
            </div>

            <div class="control-group">
              <div class="radius-control">
                <div class="radius-head">
                  <span>Radius</span>
                  <strong>${this._theme.radius}</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.125"
                  .value=${String(this._radiusValue)}
                  @input=${e=>this._setRadius(e)}
                  aria-label="Border radius"
                >
              </div>
              ${Tt.map(e=>this._renderColorControl(e.label,e.token,`Chart token`))}
            </div>

            <div class="action-stack">
              <scx-button
                variant="outline"
                type="button"
                data-action="shuffle"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 3h5v5"></path>
                  <path d="M4 20 21 3"></path>
                  <path d="M21 16v5h-5"></path>
                  <path d="m15 15 6 6"></path>
                  <path d="m4 4 5 5"></path>
                </svg>
                Shuffle
              </scx-button>
              <scx-button
                type="button"
                data-action="export"
                data-testid="theme-export"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3v12"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M5 21h14"></path>
                </svg>
                ${this._copied?`Copied CSS`:`Export CSS`}
              </scx-button>
            </div>
          </div>
        </aside>

        <section class="preview" aria-label="Component preview">
          <div class="preview-header">
            <div class="preview-heading">
              <h1>Theme Preview</h1>
              <p>Web components, form controls, badges, lists, and chart colors using the current variable set.</p>
            </div>
            <div class="preview-actions">
              <scx-button>Deploy</scx-button>
              <scx-button variant="outline">Preview</scx-button>
            </div>
          </div>

          <div class="preview-body">
            <div class="showcase">
              <div class="section-title">
                <h2>Components</h2>
                <span>${this._base} / ${this._style}</span>
              </div>

              <div class="button-row">
                <scx-button>Primary</scx-button>
                <scx-button variant="secondary">Secondary</scx-button>
                <scx-button variant="outline">Outline</scx-button>
                <scx-button variant="ghost">Ghost</scx-button>
                <scx-button variant="destructive">Delete</scx-button>
              </div>

              <div class="badge-row">
                <scx-badge>Default</scx-badge>
                <scx-badge variant="secondary">Secondary</scx-badge>
                <scx-badge variant="outline">Outline</scx-badge>
                <scx-badge variant="destructive">Invalid</scx-badge>
              </div>

              <div class="form-grid">
                <div class="field">
                  <label for="generator-email">Email</label>
                  <scx-input id="generator-email" value="hello@shadcx.dev"></scx-input>
                  <small>Border, input, text, and focus ring tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-invalid">Invalid state</label>
                  <scx-input id="generator-invalid" value="Missing value" aria-invalid="true"></scx-input>
                  <small>Uses aria-invalid and destructive tokens.</small>
                </div>
                <div class="field wide">
                  <label for="generator-message">Message</label>
                  <scx-textarea id="generator-message" placeholder="Share a few details."></scx-textarea>
                  <small>Textarea background, radius, and ring follow the same tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-framework">Framework</label>
                  <scx-select id="generator-framework">
                    <option>Native HTML</option>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Svelte</option>
                  </scx-select>
                </div>
                <label class="checkbox-line">
                  <scx-checkbox checked></scx-checkbox>
                  Receive release notes
                </label>
              </div>

              <fieldset class="scx-option-list option-list">
                <legend>Menu Accent</legend>
                <button type="button" aria-pressed="true">Subtle</button>
                <button type="button" aria-pressed="false">Solid</button>
                <button type="button" aria-pressed="false">Ghost</button>
              </fieldset>
            </div>

            <div class="surface">
              <div>
                <h2>Color Tokens</h2>
                <p>Every swatch below is composed from the exported CSS variables.</p>
              </div>

              <div class="token-strip" aria-hidden="true">
                <div class="token"><span></span><strong>primary</strong></div>
                <div class="token"><span></span><strong>secondary</strong></div>
                <div class="token"><span></span><strong>accent</strong></div>
                <div class="token"><span></span><strong>destructive</strong></div>
                <div class="token"><span></span><strong>ring</strong></div>
              </div>

              <div class="chart-row" aria-hidden="true">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>

              <scx-button
                variant="outline"
                type="button"
                data-action="export"
              >
                ${this._copied?`Copied CSS to clipboard`:`Copy current variables`}
              </scx-button>
            </div>
          </div>
        </section>
      </div>
    `}};W([H()],X.prototype,`_base`,void 0),W([H()],X.prototype,`_style`,void 0),W([H()],X.prototype,`_copied`,void 0),W([H()],X.prototype,`_dark`,void 0),W([H()],X.prototype,`_theme`,void 0),X=W([V(`theme-generator-page`)],X);var Et=t({ThemingPage:()=>Dt}),Dt=class extends B{static{this.styles=h`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0 0 0.5rem;
      color: hsl(var(--foreground));
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 2.25rem 0 0.75rem;
      color: hsl(var(--foreground));
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.5rem;
      color: hsl(var(--foreground));
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: hsl(var(--foreground));
      margin: 0 0 0.75rem;
    }

    .desc {
      color: hsl(var(--muted-foreground));
      margin-bottom: 1.5rem;
    }

    pre {
      background-color: hsl(var(--muted));
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.8125rem;
      line-height: 1.6;
      margin: 0 0 1.5rem;
    }

    code {
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
    }

    :not(pre) > code {
      background-color: hsl(var(--muted));
      padding: 0.15rem 0.4rem;
      border-radius: calc(var(--radius) - 4px);
    }

    .inline-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 2.25rem;
      padding: 0 1rem;
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: none;
      transition:
        background-color 0.15s,
        color 0.15s;
    }

    .inline-action:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .table-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 1.5rem;
    }

    table {
      width: 100%;
      min-width: 32rem;
      font-size: 0.875rem;
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
      white-space: nowrap;
    }

    th {
      font-weight: 600;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
    }

    td {
      color: hsl(var(--muted-foreground));
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.75rem;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
      font-family: inherit;
    }

    td:last-child {
      white-space: normal;
      min-width: 14rem;
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      pre { padding: 0.75rem; }
    }
  `}_navigateThemeGenerator(e){e.preventDefault(),location.hash=`theme-generator`}render(){return j`
      <h1>Theming</h1>
      <p class="desc">
        Learn how to customize shadcx with CSS custom properties.
      </p>

      <h2>Architecture</h2>
      <p>
        shadcx uses CSS custom properties (variables) based on
        shadcn/ui&rsquo;s theming system. The stylesheet targets native HTML
        elements directly. Each design token is stored as space-separated
        <strong>H S L</strong> channels, and component rules compose full
        colors at usage sites:
      </p>
      <pre><code>/* Definition (stores HSL channels only) */
--primary: 0 0% 9%;

/* Usage (composes the full color) */
background-color: hsl(var(--primary));</code></pre>
      <p>
        This pattern gives you fine-grained control &mdash; change the
        <code>--primary</code> variable in one place and every component updates
        automatically.
      </p>

      <h2>Customizing Colors</h2>
      <p>
        Override any variable on <code>:root</code> to change the default
        theme before the stylesheet is applied:
      </p>
      <pre><code>&lt;style&gt;
  :root {
    --primary: 260 80% 50%;
    --primary-foreground: 0 0% 100%;
    --radius: 0.75rem;
  }
&lt;/style&gt;</code></pre>

      <h2>Theme Generator</h2>
      <p>
        Use the generator to tune the shadcn variables visually, preview the
        native components, shuffle palettes, and copy a ready-to-use
        <code>:root</code> block.
      </p>
      <p>
        <a
          class="inline-action"
          href="#/theme-generator"
          @click=${e=>this._navigateThemeGenerator(e)}
        >
          Open Theme Generator
        </a>
      </p>

      <h2>Dark Mode</h2>
      <p>
        Add the <code>.dark</code> class to
        <code>&lt;html&gt;</code> to activate dark mode:
      </p>
      <pre><code>document.documentElement.classList.add('dark')</code></pre>
      <p>
        Or match the system preference automatically:
      </p>
      <pre><code>if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}</code></pre>
      <p>Override dark mode colors the same way as light:</p>
      <pre><code>.dark {
  --primary: 260 60% 60%;
  --background: 0 0% 5%;
}</code></pre>

      <h2>Design Tokens</h2>
      <p>
        All values are <strong>HSL channels</strong> (H S% L%).
        Compose them with <code>hsl(var(--name))</code>.
        You can also pass an alpha channel:
        <code>hsl(var(--primary) / 0.5)</code>.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Light</th>
              <th>Dark</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--background</td><td>0 0% 100%</td><td>0 0% 3.9%</td>
              <td>Page background</td>
            </tr>
            <tr>
              <td>--foreground</td><td>0 0% 3.9%</td><td>0 0% 98%</td>
              <td>Primary text</td>
            </tr>
            <tr>
              <td>--card</td><td>0 0% 100%</td><td>0 0% 3.9%</td>
              <td>Card surface</td>
            </tr>
            <tr>
              <td>--card-foreground</td><td>0 0% 3.9%</td><td>0 0% 98%</td>
              <td>Card text</td>
            </tr>
            <tr>
              <td>--popover</td><td>0 0% 100%</td><td>0 0% 3.9%</td>
              <td>Popover/dropdown background</td>
            </tr>
            <tr>
              <td>--popover-foreground</td><td>0 0% 3.9%</td><td>0 0% 98%</td>
              <td>Popover text</td>
            </tr>
            <tr>
              <td>--primary</td><td>0 0% 9%</td><td>0 0% 98%</td>
              <td>Primary action color</td>
            </tr>
            <tr>
              <td>--primary-foreground</td><td>0 0% 98%</td><td>0 0% 9%</td>
              <td>Text on primary</td>
            </tr>
            <tr>
              <td>--secondary</td><td>0 0% 96.1%</td><td>0 0% 14.9%</td>
              <td>Secondary surface</td>
            </tr>
            <tr>
              <td>--secondary-foreground</td><td>0 0% 9%</td><td>0 0% 98%</td>
              <td>Text on secondary</td>
            </tr>
            <tr>
              <td>--muted</td><td>0 0% 96.1%</td><td>0 0% 14.9%</td>
              <td>Muted surface (code blocks, etc.)</td>
            </tr>
            <tr>
              <td>--muted-foreground</td><td>0 0% 45.1%</td><td>0 0% 63.9%</td>
              <td>Subtle text</td>
            </tr>
            <tr>
              <td>--accent</td><td>0 0% 96.1%</td><td>0 0% 14.9%</td>
              <td>Accent surface (hover states)</td>
            </tr>
            <tr>
              <td>--accent-foreground</td><td>0 0% 9%</td><td>0 0% 98%</td>
              <td>Text on accent</td>
            </tr>
            <tr>
              <td>--destructive</td><td>0 84.2% 60.2%</td><td>0 62.8% 30.6%</td>
              <td>Destructive action color</td>
            </tr>
            <tr>
              <td>--destructive-foreground</td><td>0 0% 98%</td><td>0 0% 98%</td>
              <td>Text on destructive</td>
            </tr>
            <tr>
              <td>--border</td><td>0 0% 89.8%</td><td>0 0% 14.9%</td>
              <td>Border color</td>
            </tr>
            <tr>
              <td>--input</td><td>0 0% 89.8%</td><td>0 0% 14.9%</td>
              <td>Input border</td>
            </tr>
            <tr>
              <td>--ring</td><td>0 0% 3.9%</td><td>0 0% 83.1%</td>
              <td>Focus ring color</td>
            </tr>
            <tr>
              <td>--radius</td><td colspan="2">0.5rem</td>
              <td>Border radius</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Typography Tokens</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Default</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>--font-sans</td>
              <td>'Inter', system-ui, -apple-system, sans-serif</td>
              <td>Body &amp; UI text</td>
            </tr>
            <tr>
              <td>--font-mono</td>
              <td>'JetBrains Mono', ui-monospace, monospace</td>
              <td>Code &amp; data</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};Dt=W([V(`theming-page`)],Dt);var Ot=Object.assign({"./pages/badge-page.ts":rt,"./pages/button-page.ts":it,"./pages/checkbox-page.ts":ot,"./pages/combobox-page.ts":st,"./pages/input-page.ts":ct,"./pages/overview-page.ts":ut,"./pages/slider-page.ts":ft,"./pages/textarea-page.ts":pt,"./pages/theme-generator-page.ts":ht,"./pages/theming-page.ts":Et}),kt=new Map([[`/`,{elementName:`overview-page`,label:`Introduction`,wide:!1}],[`theming`,{elementName:`theming-page`,label:`Theming`,wide:!1}],[`theme-generator`,{elementName:`theme-generator-page`,label:`Theme Generator`,wide:!0}]]),At=[`badge`,`button`,`input`,`textarea`,`checkbox`,`combobox`,`slider`];function jt(e){return e.split(`-`).map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join(` `)}function Mt(e){let t=e.split(`/`).pop()?.replace(/-page\.ts$/,``)??``;return t===`overview`?`/`:t}var Z=Object.keys(Ot).map(e=>{let t=Mt(e),n=kt.get(t);return{route:t,elementName:n?.elementName??`${t}-page`,label:n?.label??jt(t),wide:n?.wide??!1}}),Nt=[`/`,`theming`,`theme-generator`].map(e=>Z.find(t=>t.route===e)).filter(e=>!!e),Pt=Z.filter(e=>!kt.has(e.route)).sort((e,t)=>{let n=At.indexOf(e.route),r=At.indexOf(t.route);return(n===-1?2**53-1:n)-(r===-1?2**53-1:r)||e.label.localeCompare(t.label)});function Ft(e){return Z.find(t=>t.route===e)??Z.find(e=>e.route===`/`)??{route:`/`,elementName:`overview-page`,label:`Introduction`,wide:!1}}function It(e){return j`
    <section>
      <h1>${jt(e)}</h1>
      <p>This page has not been registered yet.</p>
    </section>
  `}var Q=class extends B{constructor(...e){super(...e),this.active=``}static{this.styles=h`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .nav {
      flex: 1;
      overflow-y: auto;
      padding: 1rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .nav-section {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: hsl(var(--muted-foreground));
      padding: 0.5rem 0.5rem 0.25rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.5rem;
      border-radius: calc(var(--radius) - 2px);
      font-size: 0.875rem;
      font-weight: 500;
      color: hsl(var(--foreground));
      text-decoration: none;
      transition:
        background-color 0.15s,
        color 0.15s;
      cursor: pointer;
    }

    .nav-item:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .nav-item.active {
      background-color: hsl(var(--primary) / 0.1);
      color: hsl(var(--primary));
    }

    .nav-item:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}_renderNavItem(e){let t=e.route===`/`?`#/`:`#/${e.route}`;return j`
      <a
        class="nav-item ${this._isActive(e.route)}"
        href=${t}
        @click=${t=>this._navigate(e.route,t)}
      >
        ${e.label}
      </a>
    `}_isActive(e){return this.active===e?`active`:``}render(){return j`
      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        ${Nt.map(e=>this._renderNavItem(e))}

        <div class="nav-section">Components</div>
        ${Pt.map(e=>this._renderNavItem(e))}

      </nav>
    `}};W([tt({type:String})],Q.prototype,`active`,void 0),Q=W([V(`app-sidebar`)],Q);var $=class extends B{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`,t=e===`/`?`/`:e.replace(/^\//,``);this._page=t,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=h`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100svh;
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    /* --- topbar --- */
    .topbar {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      height: 3rem;
      padding: 0 1rem;
      background-color: hsl(var(--background));
      border-bottom: 1px solid hsl(var(--border));
      z-index: 70;
      flex-shrink: 0;
    }

    .topbar-brand {
      font-size: 1rem;
      font-weight: 700;
      color: hsl(var(--foreground));
      flex: 1;
    }

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 1.125rem;
      font-family: inherit;
      flex-shrink: 0;
    }

    .theme-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font-size: 1rem;
      font-family: inherit;
      flex-shrink: 0;
      transition: background-color 0.15s, color 0.15s;
    }

    .theme-btn:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .menu-btn:focus-visible,
    .theme-btn:focus-visible {
      outline: 2px solid hsl(var(--ring));
      outline-offset: 2px;
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    /* --- body layout --- */
    .layout-body {
      display: flex;
      flex: 1;
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 49;
    }

    .overlay.open {
      display: block;
    }

    .sidebar {
      position: fixed;
      top: 3rem;
      left: 0;
      bottom: 0;
      width: 15rem;
      background-color: hsl(var(--background));
      border-right: 1px solid hsl(var(--border));
      z-index: 50;
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .content {
      flex: 1;
      padding: 1.25rem;
      max-width: 48rem;
      min-width: 0;
      background-color: hsl(var(--background));
    }

    .content.wide {
      max-width: none;
    }

    @media (min-width: 768px) {
      .topbar {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      .menu-btn {
        display: none;
      }

      .sidebar {
        position: sticky;
        top: 3rem;
        height: calc(100svh - 3rem);
        transform: translateX(0);
      }

      .content {
        padding: 2rem 3rem;
      }

      .overlay {
        display: none !important;
      }
    }
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=Ft(this._page).wide?`content wide`:`content`;return j`
      <!-- topbar (mobile only) -->
      <header class="topbar">
        <button
          class="menu-btn"
          @click=${()=>this._sidebarOpen=!this._sidebarOpen}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <span class="topbar-brand">shadcx</span>
        <button
          class="theme-btn"
          @click=${()=>this._toggleTheme()}
          aria-label="Toggle theme"
        >
          ${this._dark?`☀`:`☽`}
        </button>
      </header>

      <div class="layout-body">
        <div
          class=${t}
          @click=${()=>this._sidebarOpen=!1}
        ></div>

        <aside class=${e}>
          <app-sidebar active=${this._page}></app-sidebar>
        </aside>

        <main class=${n}>${this._renderPage()}</main>
      </div>
    `}_renderPage(){let e=Ft(this._page);if(!customElements.get(e.elementName))return It(this._page);let t=Xe(e.elementName);return Qe`<${t}></${t}>`}};W([H()],$.prototype,`_page`,void 0),W([H()],$.prototype,`_sidebarOpen`,void 0),W([H()],$.prototype,`_dark`,void 0),$=W([V(`app-layout`)],$);