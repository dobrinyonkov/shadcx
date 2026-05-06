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
  button { appearance: none; background: transparent; background-image: none; }
  [hidden] { display: none !important; }
`,t=`
  ${e}
  :host {
    display: inline-block;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }
`,n=`
  ${e}
  :host { display: inline-flex; }
  .root { display: inline-flex; cursor: pointer; }
`,r=`
  ${e}
  :host {
    display: none;
    position: absolute;
    inset-block-start: calc(100% + 0.25rem);
    inset-inline-start: 0;
    z-index: 50;
    min-width: var(--shadcx-dropdown-menu-width, 12rem);
  }
  :host([align='end']) { inset-inline-start: auto; inset-inline-end: 0; }
  :host([data-side='top']) { inset-block-start: auto; inset-block-end: calc(100% + 0.25rem); }
  :host([data-align='end']) { inset-inline-start: auto; inset-inline-end: 0; }
  :host([data-open]) { display: block; }
  .root {
    min-width: inherit;
    overflow: visible;
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius) - 2px);
    background-color: hsl(var(--popover));
    color: hsl(var(--popover-foreground));
    padding: 0.25rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  :host([data-constrain]) .root {
    max-height: min(24rem, calc(100svh - 1rem));
    overflow: auto;
  }
`,i=`
  ${e}
  :host { display: block; }
  .root { display: grid; gap: 0.125rem; }
`,a=`
  ${e}
  :host { display: block; }
  .root { padding: 0.375rem 0.5rem; font-size: 0.8125rem; font-weight: 600; color: hsl(var(--foreground)); }
`,o=`
  ${e}
  :host { display: block; }
  .root { height: 1px; margin: 0.25rem -0.25rem; background-color: hsl(var(--border)); }
`,s=`
  ${e}
  :host { display: block; }
  :host([disabled]) { pointer-events: none; opacity: 0.5; }
  .root {
    width: 100%;
    min-height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    border-radius: calc(var(--radius) - 4px);
    background-color: transparent;
    color: hsl(var(--popover-foreground));
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25;
    outline: none;
    padding: 0.375rem 0.5rem;
    text-align: start;
    user-select: none;
  }
  .root:hover, .root:focus-visible {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  [data-variant='destructive'] { color: hsl(var(--destructive)); }
  [data-variant='destructive']:hover, [data-variant='destructive']:focus-visible {
    background-color: hsl(var(--destructive) / 0.1);
    color: hsl(var(--destructive));
  }
  .indicator { width: 1rem; flex: 0 0 1rem; color: hsl(var(--primary)); text-align: center; }
  .content { display: inline-flex; min-width: 0; flex: 1; align-items: center; gap: 0.5rem; }
  .root ::slotted(svg), .root ::slotted([data-icon]) { width: 1rem; height: 1rem; flex-shrink: 0; }
`,c=`
  ${e}
  :host { margin-inline-start: auto; }
  .root { color: hsl(var(--muted-foreground)); font-size: 0.75rem; letter-spacing: 0.08em; }
`,l=`
  ${e}
  :host {
    display: block;
    position: relative;
  }
  :host(:hover) ::slotted(shadcx-dropdown-menu-sub-content),
  :host(:focus-within) ::slotted(shadcx-dropdown-menu-sub-content),
  :host([open]) ::slotted(shadcx-dropdown-menu-sub-content) { display: block; }
`,u=`
  ${s}
  .chevron { margin-inline-start: auto; color: hsl(var(--muted-foreground)); }
`,d=`
  ${r}
  :host {
    display: none;
    inset-block-start: -0.25rem;
    inset-inline-start: calc(100% + 0.25rem);
  }
  :host([data-side='left']) { inset-inline-start: auto; inset-inline-end: calc(100% + 0.25rem); }
`;function f(e,t){customElements.get(e)||customElements.define(e,t)}var p=class extends HTMLElement{constructor(...e){super(...e),this.partName=`root`,this.rootClassName=`root`}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`<style>${this.styles}</style><div part="${this.partName}" class="${this.rootClassName}"><slot></slot></div>`)}},m=class extends HTMLElement{constructor(...e){super(...e),this.onWindowPointerDown=e=>{e.composedPath().includes(this)||(this.open=!1)},this.onWindowKeyDown=e=>{e.key===`Escape`&&(this.open=!1)},this.onClick=e=>{let t=e.composedPath();if(t.some(e=>e instanceof h)){this.open=!this.open;return}let n=t.find(e=>e instanceof b);n&&!n.disabled&&(this.open=!1)},this.onKeyDown=e=>{if(e.composedPath().some(e=>e instanceof h)&&[`Enter`,` `,`ArrowDown`,`ArrowUp`].includes(e.key)){e.preventDefault(),this.open=!0,this.focusMenuItem(e.key===`ArrowUp`?`last`:`first`);return}if(this.open){if(e.key===`ArrowDown`){e.preventDefault(),this.focusMenuItem(`next`);return}if(e.key===`ArrowUp`){e.preventDefault(),this.focusMenuItem(`previous`);return}if(e.key===`Home`){e.preventDefault(),this.focusMenuItem(`first`);return}e.key===`End`&&(e.preventDefault(),this.focusMenuItem(`last`))}}}static{this.observedAttributes=[`open`]}get open(){return this.hasAttribute(`open`)}set open(e){this.toggleAttribute(`open`,e)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),window.addEventListener(`pointerdown`,this.onWindowPointerDown),window.addEventListener(`keydown`,this.onWindowKeyDown),this.addEventListener(`click`,this.onClick),this.addEventListener(`keydown`,this.onKeyDown),this.render(),this.syncContent()}disconnectedCallback(){window.removeEventListener(`pointerdown`,this.onWindowPointerDown),window.removeEventListener(`keydown`,this.onWindowKeyDown),this.removeEventListener(`click`,this.onClick),this.removeEventListener(`keydown`,this.onKeyDown)}attributeChangedCallback(){this.syncContent()}getMenuItems(){let e=[`shadcx-dropdown-menu-item`,`shadcx-dropdown-menu-checkbox-item`,`shadcx-dropdown-menu-radio-item`,`shadcx-dropdown-menu-sub-trigger`].join(`,`);return Array.from(this.querySelectorAll(e)).filter(e=>e instanceof b&&e.disabled?!1:e instanceof HTMLElement)}getItemButton(e){return e.shadowRoot?.querySelector(`button`)??null}focusMenuItem(e){let t=this.getMenuItems();if(t.length===0)return;let n=t.findIndex(e=>e.shadowRoot?.activeElement===this.getItemButton(e)),r=0;e===`last`&&(r=t.length-1),e===`next`&&(r=n>=0?(n+1)%t.length:0),e===`previous`&&(r=n>=0?(n-1+t.length)%t.length:t.length-1),requestAnimationFrame(()=>this.getItemButton(t[r])?.focus())}syncContent(){this.querySelectorAll(`shadcx-dropdown-menu-content`).forEach(e=>{e.toggleAttribute(`data-open`,this.open),e.setAttribute(`data-align`,e.getAttribute(`align`)??`start`)}),this.open&&requestAnimationFrame(()=>this.updatePlacement())}updatePlacement(){let e=this.querySelector(`shadcx-dropdown-menu-trigger`),t=this.querySelector(`shadcx-dropdown-menu-content`);if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=window.innerHeight-n.bottom-4,a=n.top-4,o=r.height>i&&a>i;t.setAttribute(`data-side`,o?`top`:`bottom`),t.toggleAttribute(`data-constrain`,Math.max(i,a)<r.height),this.querySelectorAll(`shadcx-dropdown-menu-sub`).forEach(e=>{e instanceof T&&e.updatePlacement()})}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`<style>${t}</style><slot></slot>`)}},h=class extends HTMLElement{connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`<style>${n}</style><span part="root" class="root"><slot></slot></span>`)}},g=class extends p{constructor(...e){super(...e),this.styles=r}static{this.observedAttributes=[`align`,`data-open`]}},_=class extends p{constructor(...e){super(...e),this.styles=i}},v=class extends p{constructor(...e){super(...e),this.styles=a}},y=class extends HTMLElement{connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.shadowRoot&&(this.shadowRoot.innerHTML=`<style>${o}</style><div part="root" class="root" role="separator"></div>`)}},b=class extends HTMLElement{static{this.observedAttributes=[`variant`,`disabled`]}get variant(){return this.getAttribute(`variant`)??`default`}set variant(e){this.setAttribute(`variant`,e)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,e)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.render()}attributeChangedCallback(){this.render()}get indicator(){return``}get itemRole(){return`menuitem`}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>${s}</style>
      <button part="root" class="root" type="button" role="${this.itemRole}" data-variant="${this.variant}" ${this.disabled?`disabled`:``}>
        ${this.indicator?`<span class="indicator">${this.indicator}</span>`:``}
        <span class="content"><slot></slot></span>
      </button>
    `)}},x=class extends b{constructor(...e){super(...e),this.onClick=()=>{this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`checked-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})))}}static{this.observedAttributes=[`variant`,`disabled`,`checked`]}get checked(){return this.hasAttribute(`checked`)}set checked(e){this.toggleAttribute(`checked`,e)}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.onClick)}disconnectedCallback(){this.removeEventListener(`click`,this.onClick)}get indicator(){return this.checked?`✓`:``}get itemRole(){return`menuitemcheckbox`}render(){super.render(),this.shadowRoot?.querySelector(`button`)?.setAttribute(`aria-checked`,String(this.checked))}},S=class extends HTMLElement{constructor(...e){super(...e),this.onClick=e=>{let t=e.composedPath().find(e=>e instanceof C);!t||t.disabled||(this.value=t.value,this.dispatchEvent(new CustomEvent(`value-change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}}static{this.observedAttributes=[`value`]}get value(){return this.getAttribute(`value`)??``}set value(e){e?this.setAttribute(`value`,e):this.removeAttribute(`value`)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.addEventListener(`click`,this.onClick),this.render(),this.syncItems()}disconnectedCallback(){this.removeEventListener(`click`,this.onClick)}attributeChangedCallback(){this.syncItems()}syncItems(){this.querySelectorAll(`shadcx-dropdown-menu-radio-item`).forEach(e=>{e instanceof C&&(e.checked=e.value===this.value)})}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`<style>${i}</style><div part="root" class="root" role="group"><slot></slot></div>`)}},C=class extends b{static{this.observedAttributes=[`variant`,`disabled`,`checked`,`value`]}get value(){return this.getAttribute(`value`)??``}set value(e){this.setAttribute(`value`,e)}get checked(){return this.hasAttribute(`checked`)}set checked(e){this.toggleAttribute(`checked`,e)}get indicator(){return this.checked?`•`:``}get itemRole(){return`menuitemradio`}render(){super.render(),this.shadowRoot?.querySelector(`button`)?.setAttribute(`aria-checked`,String(this.checked))}},w=class extends p{constructor(...e){super(...e),this.styles=c}},T=class extends p{constructor(...e){super(...e),this.styles=l,this.openSubmenu=()=>{this.setAttribute(`open`,``),requestAnimationFrame(()=>this.updatePlacement())}}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerenter`,this.openSubmenu),this.addEventListener(`focusin`,this.openSubmenu)}disconnectedCallback(){this.removeEventListener(`pointerenter`,this.openSubmenu),this.removeEventListener(`focusin`,this.openSubmenu)}updatePlacement(){let e=this.querySelector(`shadcx-dropdown-menu-sub-trigger`),t=this.querySelector(`shadcx-dropdown-menu-sub-content`);if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=window.innerWidth-n.right-4,a=n.left-4,o=r.width>i&&a>i;t.setAttribute(`data-side`,o?`left`:`right`)}},E=class extends HTMLElement{connectedCallback(){this.shadowRoot||this.attachShadow({mode:`open`}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>${u}</style>
      <button part="root" class="root" type="button" role="menuitem" aria-haspopup="menu">
        <span class="content"><slot></slot></span><span class="chevron">›</span>
      </button>
    `)}},D=class extends p{constructor(...e){super(...e),this.styles=d}};f(`shadcx-dropdown-menu`,m),f(`shadcx-dropdown-menu-trigger`,h),f(`shadcx-dropdown-menu-content`,g),f(`shadcx-dropdown-menu-group`,_),f(`shadcx-dropdown-menu-label`,v),f(`shadcx-dropdown-menu-separator`,y),f(`shadcx-dropdown-menu-item`,b),f(`shadcx-dropdown-menu-checkbox-item`,x),f(`shadcx-dropdown-menu-radio-group`,S),f(`shadcx-dropdown-menu-radio-item`,C),f(`shadcx-dropdown-menu-shortcut`,w),f(`shadcx-dropdown-menu-sub`,T),f(`shadcx-dropdown-menu-sub-trigger`,E),f(`shadcx-dropdown-menu-sub-content`,D);