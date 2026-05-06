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

  :host {
    display: block;
    width: 100%;
    max-width: 24rem;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }

  .control { position: relative; width: 100%; }

  .input {
    width: 100%;
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-size: 0.875rem;
    padding: 0 2rem 0 0.75rem;
    outline: none;
  }

  .input:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  .input[aria-invalid] { border-color: hsl(var(--destructive)); }
  .input:disabled { opacity: 0.5; cursor: not-allowed; }

  .icon-btn {
    position: absolute;
    top: 50%;
    right: 0.35rem;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    color: hsl(var(--muted-foreground));
    width: 1.5rem;
    height: 1.5rem;
    border-radius: calc(var(--radius) - 4px);
    cursor: pointer;
  }

  .icon-btn:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    min-height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    padding: 0.25rem 0.35rem;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    height: 1.5rem;
    border-radius: 999px;
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }

  .chip-remove {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    line-height: 1;
  }

  .chips-input {
    border: none;
    background: transparent;
    color: hsl(var(--foreground));
    outline: none;
    font-size: 0.875rem;
    min-width: 8rem;
    flex: 1;
  }

  .content {
    position: absolute;
    z-index: 30;
    margin-top: 0.25rem;
    width: 100%;
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--popover));
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
    overflow: hidden;
  }

  .empty { padding: 0.75rem; font-size: 0.8125rem; color: hsl(var(--muted-foreground)); }
  .list { max-height: 15rem; overflow-y: auto; padding: 0.25rem; }

  .item {
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    border-radius: calc(var(--radius) - 4px);
    padding: 0.5rem;
    color: hsl(var(--popover-foreground));
    font-size: 0.875rem;
    cursor: pointer;
  }

  .item:hover, .item[data-highlighted='true'] {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  .check { color: hsl(var(--primary)); font-size: 0.75rem; }
`;function t(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}var n=class extends HTMLElement{constructor(...e){super(...e),this._items=[],this._values=[],this._query=``,this._open=!1,this._highlightedIndex=-1,this.onWindowPointerDown=e=>{e.composedPath().includes(this)||(this._open=!1,this.render())},this.onInput=e=>{let t=e.currentTarget;this._query=t.value,this._open=!0,this._highlightedIndex=this.autoHighlight&&this.filteredItems.length>0?0:-1,this.render(!0)},this.onKeyDown=e=>{if(!this._open&&e.key===`ArrowDown`){e.preventDefault(),this._open=!0,this._highlightedIndex=0,this.render(!0);return}if(this._open){if(e.key===`ArrowDown`){e.preventDefault(),this._highlightedIndex=Math.min(this._highlightedIndex+1,this.filteredItems.length-1),this.render(!0);return}if(e.key===`ArrowUp`){e.preventDefault(),this._highlightedIndex=Math.max(this._highlightedIndex-1,0),this.render(!0);return}if(e.key===`Enter`&&this._highlightedIndex>=0){e.preventDefault(),this.selectItem(this.filteredItems[this._highlightedIndex]);return}e.key===`Escape`&&(this._open=!1,this._highlightedIndex=-1,this.render(!0))}},this.onActionButtonClick=()=>{let e=this.multiple?this.values.length>0:!!this.value;if(this.showClear&&e){this.clear();return}this.toggleOpen()}}static{this.observedAttributes=[`placeholder`,`disabled`,`multiple`,`show-clear`,`auto-highlight`,`aria-invalid`,`value`]}get items(){return this._items}set items(e){this._items=Array.isArray(e)?e:[],this.render()}get placeholder(){return this.getAttribute(`placeholder`)??`Select an option`}set placeholder(e){this.setAttribute(`placeholder`,e)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,e)}get multiple(){return this.hasAttribute(`multiple`)}set multiple(e){this.toggleAttribute(`multiple`,e)}get showClear(){return this.hasAttribute(`show-clear`)}set showClear(e){this.toggleAttribute(`show-clear`,e)}get autoHighlight(){return this.hasAttribute(`auto-highlight`)}set autoHighlight(e){this.toggleAttribute(`auto-highlight`,e)}get ariaInvalid(){return this.getAttribute(`aria-invalid`)}set ariaInvalid(e){e===null?this.removeAttribute(`aria-invalid`):this.setAttribute(`aria-invalid`,e)}get value(){return this.getAttribute(`value`)??``}set value(e){e?this.setAttribute(`value`,e):this.removeAttribute(`value`)}get values(){return this._values}set values(e){this._values=Array.isArray(e)?e:[],this.render()}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),window.addEventListener(`pointerdown`,this.onWindowPointerDown),this.render()}disconnectedCallback(){window.removeEventListener(`pointerdown`,this.onWindowPointerDown)}attributeChangedCallback(){!this.multiple&&!this._query&&this.value&&(this._query=this.value),this.render()}get filteredItems(){let e=this._query.trim().toLowerCase();return e?this.items.filter(t=>t.toLowerCase().includes(e)):this.items}toggleOpen(){this.disabled||(this._open=!this._open,this._open&&this.autoHighlight&&this.filteredItems.length>0&&(this._highlightedIndex=0),this.render())}selectItem(e){if(this.multiple){this.values.includes(e)?this._values=this.values.filter(t=>t!==e):this._values=[...this.values,e],this._query=``,this.dispatchValueChange(this.values),this.render(!0);return}this.value=e,this._query=e,this._open=!1,this.dispatchValueChange(this.value),this.render()}clear(){this.value=``,this._values=[],this._query=``,this.dispatchValueChange(this.multiple?this.values:this.value),this.render(!0)}removeValue(e){this._values=this.values.filter(t=>t!==e),this.dispatchValueChange(this.values),this.render(!0)}dispatchValueChange(e){this.dispatchEvent(new CustomEvent(`value-change`,{detail:{value:e},bubbles:!0,composed:!0}))}render(n=!1){if(!this.shadowRoot)return;!this.multiple&&!this._query&&this.value&&(this._query=this.value);let r=`
      value="${t(this._query)}"
      placeholder="${t(this.placeholder)}"
      ${this.disabled?`disabled`:``}
      ${this.ariaInvalid?`aria-invalid="${t(this.ariaInvalid)}"`:``}
    `,i=this.multiple?this.values.length>0:!!this.value,a=this.showClear&&i?`Clear selection`:`Open options`,o=this.showClear&&i?`x`:`▾`;this.shadowRoot.innerHTML=`
      <style>${e}</style>
      <div class="control">
        ${this.multiple?this.renderMultipleInput(r):this.renderSingleInput(r)}
        <button class="icon-btn" type="button" aria-label="${a}">${o}</button>
      </div>
      ${this._open?this.renderContent():``}
    `;let s=this.shadowRoot.querySelector(`input`);if(s?.addEventListener(`focus`,()=>{this._open=!0,this.render(!0)}),s?.addEventListener(`input`,this.onInput),s?.addEventListener(`keydown`,this.onKeyDown),this.shadowRoot.querySelector(`.icon-btn`)?.addEventListener(`click`,this.onActionButtonClick),this.shadowRoot.querySelectorAll(`[data-item-index]`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{this._highlightedIndex=Number(e.dataset.itemIndex),this.render(n)}),e.addEventListener(`click`,()=>this.selectItem(this.filteredItems[Number(e.dataset.itemIndex)]))}),this.shadowRoot.querySelectorAll(`[data-remove-value]`).forEach(e=>{e.addEventListener(`click`,()=>this.removeValue(e.dataset.removeValue??``))}),n){let e=this.shadowRoot.querySelector(`input`);e?.focus(),e?.setSelectionRange(e.value.length,e.value.length)}}renderSingleInput(e){return`<input class="input" part="input" ${e}>`}renderMultipleInput(e){return`
      <div class="chips" part="chips">
        ${this.values.map(e=>`
          <span class="chip" part="chip">
            ${t(e)}
            <button class="chip-remove" type="button" data-remove-value="${t(e)}" aria-label="Remove ${t(e)}">x</button>
          </span>
        `).join(``)}
        <input class="chips-input" part="input" ${e}>
      </div>
    `}renderContent(){let e=this.filteredItems;return`
      <div class="content" part="content">
        ${e.length===0?`<div class="empty" part="empty">No items found.</div>`:`<div class="list" part="list">
              ${e.map((e,t)=>this.renderItem(e,t)).join(``)}
            </div>`}
      </div>
    `}renderItem(e,n){let r=this.multiple?this.values.includes(e):this.value===e;return`
      <button
        class="item"
        part="item"
        type="button"
        data-item-index="${n}"
        data-highlighted="${String(n===this._highlightedIndex)}"
      >
        <span>${t(e)}</span>
        ${r?`<span class="check">✓</span>`:``}
      </button>
    `}};customElements.get(`shadcx-combobox`)||customElements.define(`shadcx-combobox`,n);