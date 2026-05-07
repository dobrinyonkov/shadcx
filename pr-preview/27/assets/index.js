import"./modulepreload-polyfill.js";/* empty css     */import"./button.js";import"./badge.js";import"./input.js";import"./textarea.js";import"./checkbox.js";import"./combobox.js";import"./card.js";import"./dropdown-menu.js";var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap,o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}},s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:re,getPrototypeOf:ie}=Object,f=globalThis,ae=f.trustedTypes,oe=ae?ae.emptyScript:``,se=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!d(e,t),le={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var h=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ne(e),...re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[p(`elementProperties`)]=new Map,h[p(`finalized`)]=new Map,se?.({ReactiveElement:h}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var g=globalThis,ue=e=>e,_=g.trustedTypes,de=_?_.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,fe=`$lit$`,v=`lit$${Math.random().toFixed(9).slice(2)}$`,pe=`?`+v,me=`<${pe}>`,y=document,b=()=>y.createComment(``),x=e=>e===null||typeof e!=`object`&&typeof e!=`function`,S=Array.isArray,he=e=>S(e)||typeof e?.[Symbol.iterator]==`function`,C=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,_e=/>/g,T=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ve=/'/g,ye=/"/g,be=/^(?:script|style|textarea|title)$/i,E=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),D=Symbol.for(`lit-noChange`),O=Symbol.for(`lit-nothing`),xe=new WeakMap,k=y.createTreeWalker(y,129);function Se(e,t){if(!S(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return de===void 0?t:de.createHTML(t)}var Ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=w;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===w?c[1]===`!--`?o=ge:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=T):(be.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=T):o=_e:o===T?c[0]===`>`?(o=i??w,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?T:c[3]===`"`?ye:ve):o===ye||o===ve?o=T:o===ge||o===_e?o=w:(o=T,i=void 0);let d=o===T&&e[t+1].startsWith(`/>`)?` `:``;a+=o===w?n+me:l>=0?(r.push(s),n.slice(0,l)+fe+n.slice(l)+v+d):n+v+(l===-2?t:d)}return[Se(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},we=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ce(t,n);if(this.el=e.createElement(l,r),k.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=k.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(fe)){let t=u[o++],n=i.getAttribute(e).split(v),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ee:r[1]===`?`?De:r[1]===`@`?Oe:M}),i.removeAttribute(e)}else e.startsWith(v)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(be.test(i.tagName)){let e=i.textContent.split(v),t=e.length-1;if(t>0){i.textContent=_?_.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],b()),k.nextNode(),c.push({type:2,index:++a});i.append(e[t],b())}}}else if(i.nodeType===8)if(i.data===pe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(v,e+1))!==-1;)c.push({type:7,index:a}),e+=v.length-1}a++}}static createElement(e,t){let n=y.createElement(`template`);return n.innerHTML=e,n}};function A(e,t,n=e,r){if(t===D)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=x(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=A(e,i._$AS(e,t.values),i,r)),t}var Te=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??y).importNode(t,!0);k.currentNode=r;let i=k.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new j(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=k.nextNode(),a++)}return k.currentNode=y,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},j=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),x(e)?e===O||e==null||e===``?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==D&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=we.createElement(Se(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Te(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new we(e)),t}k(t){S(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(b()),this.O(b()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ue(e).nextSibling;ue(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=A(this,e,t,0),a=!x(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=A(this,r[n+o],t,o),s===D&&(s=this._$AH[o]),a||=!x(s)||s!==this._$AH[o],s===O?e=O:e!==O&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ee=class extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},De=class extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},Oe=class extends M{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??O)===D)return;let n=this._$AH,r=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==O&&(n===O||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},Ae=g.litHtmlPolyfillSupport;Ae?.(we,j),(g.litHtmlVersions??=[]).push(`3.3.2`);var je=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new j(t.insertBefore(b(),e),e,void 0,n??{})}return i._$AI(e),i},N=globalThis,P=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=je(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};P._$litElement$=!0,P.finalized=!0,N.litElementHydrateSupport?.({LitElement:P});var Me=N.litElementPolyfillSupport;Me?.({LitElement:P}),(N.litElementVersions??=[]).push(`4.2.2`);var F=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ne={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:ce},Pe=(e=Ne,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function I(e){return(t,n)=>typeof n==`object`?Pe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function L(e){return I({...e,state:!0,attribute:!1})}function R(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var z=class extends P{constructor(...e){super(...e),this.source=``,this.jsSource=``,this.filename=`component.ts`,this.expanded=!1,this.copied=!1,this.language=`js`}static{this.styles=c`
    :host {
      display: block;
      margin-bottom: 1.5rem;
    }

    .frame {
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted));
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
      padding: 0.625rem 0.75rem;
      background-color: hsl(var(--background));
    }

    .filename {
      min-width: 0;
      overflow: hidden;
      color: hsl(var(--foreground));
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      display: inline-flex;
      flex-shrink: 0;
      gap: 0.375rem;
    }

    .switcher {
      display: inline-flex;
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
    }

    button {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      font: inherit;
      font-size: 0.75rem;
      font-weight: 500;
      height: 1.75rem;
      padding: 0 0.625rem;
    }

    .switcher button {
      border: 0;
      border-radius: 0;
    }

    .switcher button[aria-pressed='true'] {
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }

    button:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    pre {
      max-height: calc(1.6em * 7 + 2rem);
      margin: 0;
      overflow: auto;
      color: hsl(var(--foreground));
      font-size: 0.8125rem;
      line-height: 1.6;
    }

    :host([expanded]) pre {
      max-height: none;
    }

    code {
      display: block;
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
    }

    .line {
      display: grid;
      grid-template-columns: 3.25rem max-content;
      min-width: max-content;
    }

    .line:first-child {
      padding-top: 1rem;
    }

    .line:last-child {
      padding-bottom: 1rem;
    }

    .line-number {
      position: sticky;
      left: 0;
      padding: 0 0.75rem 0 1rem;
      border-right: 1px solid hsl(var(--border));
      background-color: hsl(var(--muted));
      color: hsl(var(--muted-foreground));
      text-align: right;
      user-select: none;
    }

    .line-code {
      padding: 0 1rem;
      white-space: pre;
    }
  `}updated(){this.toggleAttribute(`expanded`,this.expanded)}toggleExpanded(){this.expanded=!this.expanded}setLanguage(e){this.language=e}async copySource(){await navigator.clipboard.writeText(this.currentSource),this.copied=!0,window.setTimeout(()=>{this.copied=!1},1500)}get currentSource(){return this.language===`js`&&this.jsSource||this.source}get currentFilename(){return this.language===`js`?this.filename.replace(/\.ts$/,`.js`):this.filename}get lines(){return this.currentSource.split(`
`)}render(){return E`
      <div class="frame">
        <div class="header">
          <span class="filename">${this.currentFilename}</span>
          <span class="actions">
            <span class="switcher" aria-label="Source language">
              <button type="button" aria-pressed=${String(this.language===`ts`)} @click=${()=>this.setLanguage(`ts`)}>TS</button>
              <button type="button" aria-pressed=${String(this.language===`js`)} @click=${()=>this.setLanguage(`js`)}>JS</button>
            </span>
            <button type="button" @click=${this.copySource}>${this.copied?`Copied`:`Copy`}</button>
            <button type="button" @click=${this.toggleExpanded}>${this.expanded?`Collapse`:`Expand`}</button>
          </span>
        </div>
        <pre><code>${this.lines.map((e,t)=>E`<span class="line"><span class="line-number">${t+1}</span><span class="line-code">${e}</span></span>`)}</code></pre>
      </div>
    `}};R([I({type:String})],z.prototype,`source`,void 0),R([I({type:String,attribute:`js-source`})],z.prototype,`jsSource`,void 0),R([I({type:String})],z.prototype,`filename`,void 0),R([L()],z.prototype,`expanded`,void 0),R([L()],z.prototype,`copied`,void 0),R([L()],z.prototype,`language`,void 0),z=R([F(`source-code-block`)],z);var Fe=`export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link'

const styles = \`
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

  :host { display: inline-flex; }

  .root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    white-space: nowrap;
    border-radius: var(--radius);
    border: 1px solid transparent;
    padding-inline: 0.625rem;
    height: 1.375rem;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 500;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }

  .root ::slotted(svg),
  .root ::slotted([data-icon]) {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }

  .root ::slotted([data-icon='inline-start']) { margin-inline-end: 0.125rem; }
  .root ::slotted([data-icon='inline-end']) { margin-inline-start: 0.125rem; }

  [data-variant='default'] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  [data-variant='default']:hover { background-color: hsl(var(--primary) / 0.9); }

  [data-variant='secondary'] {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
  }
  [data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }

  [data-variant='destructive'] {
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
  }
  [data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }

  [data-variant='outline'] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border-color: hsl(var(--border));
  }
  [data-variant='outline']:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  [data-variant='ghost'] {
    background-color: transparent;
    color: hsl(var(--foreground));
  }
  [data-variant='ghost']:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  [data-variant='link'] {
    background-color: transparent;
    border-color: transparent;
    color: hsl(var(--primary));
    text-underline-offset: 4px;
  }
  [data-variant='link']:hover { text-decoration: underline; }
\`

export class Badge extends HTMLElement {
  static observedAttributes = ['variant']

  get variant(): BadgeVariant {
    return (this.getAttribute('variant') as BadgeVariant | null) ?? 'default'
  }

  set variant(value: BadgeVariant) {
    this.setAttribute('variant', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' })
    }
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <span part="root" class="root" data-variant="\${this.variant}" tabindex="0"><slot></slot></span>
    \`
  }
}

if (!customElements.get('shadcx-badge')) {
  customElements.define('shadcx-badge', Badge)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-badge': Badge
  }
}
`,Ie=`const styles = \`
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

  :host { display: inline-flex; }

  .root {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    white-space: nowrap;
    border-radius: var(--radius);
    border: 1px solid transparent;
    padding-inline: 0.625rem;
    height: 1.375rem;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 500;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }

  .root ::slotted(svg),
  .root ::slotted([data-icon]) {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }

  .root ::slotted([data-icon='inline-start']) { margin-inline-end: 0.125rem; }
  .root ::slotted([data-icon='inline-end']) { margin-inline-start: 0.125rem; }

  [data-variant='default'] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
  [data-variant='default']:hover { background-color: hsl(var(--primary) / 0.9); }

  [data-variant='secondary'] {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
  }
  [data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }

  [data-variant='destructive'] {
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
  }
  [data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }

  [data-variant='outline'] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border-color: hsl(var(--border));
  }
  [data-variant='outline']:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  [data-variant='ghost'] {
    background-color: transparent;
    color: hsl(var(--foreground));
  }
  [data-variant='ghost']:hover {
    background-color: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }

  [data-variant='link'] {
    background-color: transparent;
    border-color: transparent;
    color: hsl(var(--primary));
    text-underline-offset: 4px;
  }
  [data-variant='link']:hover { text-decoration: underline; }
\`;
export class Badge extends HTMLElement {
    static observedAttributes = ['variant'];
    get variant() {
        return this.getAttribute('variant') ?? 'default';
    }
    set variant(value) {
        this.setAttribute('variant', value);
    }
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <span part="root" class="root" data-variant="\${this.variant}" tabindex="0"><slot></slot></span>
    \`;
    }
}
if (!customElements.get('shadcx-badge')) {
    customElements.define('shadcx-badge', Badge);
}`,Le=t({BadgePage:()=>B,description:()=>Re}),Re=`Displays a badge or a component that looks like a badge.`,B=class extends P{static{this.styles=c`
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

    shadcx-badge.success::part(root) {
      background-color: hsl(142 71% 45% / 0.15);
      border-color: hsl(142 71% 45% / 0.35);
      color: hsl(142 84% 25%);
    }

    :host-context(.dark) shadcx-badge.success::part(root) {
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
  `}render(){return E`
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/badge.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="badge.ts" .source=${Fe} .jsSource=${Ie}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-badge variant="default"&gt;Badge&lt;/shadcx-badge&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <shadcx-badge>Default</shadcx-badge>
        <shadcx-badge variant="secondary">Secondary</shadcx-badge>
        <shadcx-badge variant="destructive">Destructive</shadcx-badge>
        <shadcx-badge variant="outline">Outline</shadcx-badge>
        <shadcx-badge variant="ghost">Ghost</shadcx-badge>
        <shadcx-badge variant="link">Link</shadcx-badge>
      </div>
      <pre><code>&lt;shadcx-badge&gt;Default&lt;/shadcx-badge&gt;
&lt;shadcx-badge variant="secondary"&gt;Secondary&lt;/shadcx-badge&gt;
&lt;shadcx-badge variant="destructive"&gt;Destructive&lt;/shadcx-badge&gt;
&lt;shadcx-badge variant="outline"&gt;Outline&lt;/shadcx-badge&gt;
&lt;shadcx-badge variant="ghost"&gt;Ghost&lt;/shadcx-badge&gt;
&lt;shadcx-badge variant="link"&gt;Link&lt;/shadcx-badge&gt;</code></pre>

      <h3>With Icon</h3>
      <div class="preview">
        <shadcx-badge>
          <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          Verified
        </shadcx-badge>
        <shadcx-badge variant="outline">
          New
          <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </shadcx-badge>
      </div>
      <pre><code>&lt;shadcx-badge&gt;
  &lt;svg data-icon="inline-start" ...&gt;&lt;/svg&gt;
  Verified
&lt;/shadcx-badge&gt;</code></pre>

      <h3>With Spinner</h3>
      <div class="preview">
        <shadcx-badge variant="secondary">
          <span data-icon="inline-start" class="spinner"></span>
          Syncing
        </shadcx-badge>
      </div>
      <pre><code>&lt;shadcx-badge variant="secondary"&gt;
  &lt;span data-icon="inline-start" class="spinner"&gt;&lt;/span&gt;
  Syncing
&lt;/shadcx-badge&gt;</code></pre>

      <h3>Link</h3>
      <div class="preview">
        <a class="inline-link" href="https://example.com" target="_blank" rel="noreferrer">
          <shadcx-badge variant="link">Read docs</shadcx-badge>
        </a>
      </div>
      <pre><code>&lt;a href="https://example.com"&gt;
  &lt;shadcx-badge variant="link"&gt;Read docs&lt;/shadcx-badge&gt;
&lt;/a&gt;</code></pre>

      <h3>Custom Colors</h3>
      <div class="preview">
        <shadcx-badge class="success">Success</shadcx-badge>
      </div>
      <pre><code>shadcx-badge.success::part(root) {
  background-color: hsl(142 71% 45% / 0.15);
  border-color: hsl(142 71% 45% / 0.35);
  color: hsl(142 84% 25%);
}</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"</code></td>
              <td><code>"default"</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>root</code></td>
              <td>The internal <code>&lt;span&gt;</code> badge element.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};B=R([F(`badge-page`)],B);var ze=`export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export type ButtonSize =
  | 'default'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg'

const styles = \`
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

  :host { display: inline-flex; }
  :host([disabled]) { pointer-events: none; }

  .root {
    text-transform: none;
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root:disabled { opacity: 0.5; pointer-events: none; }
  .root:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  .root ::slotted(svg) { pointer-events: none; width: 1rem; height: 1rem; flex-shrink: 0; }

  [data-size='default'] { height: 2.25rem; padding-inline: 1rem; }
  [data-size='xs'] { height: 1.75rem; padding-inline: 0.5rem; font-size: 0.8125rem; }
  [data-size='sm'] { height: 2rem; padding-inline: 0.75rem; font-size: 0.8125rem; }
  [data-size='lg'] { height: 2.5rem; padding-inline: 1.5rem; }
  [data-size='icon'] { height: 2.25rem; width: 2.25rem; padding: 0; }
  [data-size='icon-xs'] { height: 1.75rem; width: 1.75rem; padding: 0; }
  [data-size='icon-sm'] { height: 2rem; width: 2rem; padding: 0; }
  [data-size='icon-lg'] { height: 2.5rem; width: 2.5rem; padding: 0; }

  [data-variant='default'] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
  [data-variant='default']:hover { background-color: hsl(var(--primary) / 0.9); }

  [data-variant='destructive'] {
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }

  [data-variant='outline'] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border-color: hsl(var(--input));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  [data-variant='secondary'] {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }

  [data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); }
  [data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  [data-variant='link'] { background-color: transparent; color: hsl(var(--primary)); text-underline-offset: 4px; }
  [data-variant='link']:hover { text-decoration: underline; }

  [aria-invalid='true'] { border-color: hsl(var(--destructive)); box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2); }
\`

export class Button extends HTMLElement {
  static observedAttributes = ['variant', 'size', 'disabled']

  get variant(): ButtonVariant {
    return (this.getAttribute('variant') as ButtonVariant | null) ?? 'default'
  }

  set variant(value: ButtonVariant) {
    this.setAttribute('variant', value)
  }

  get size(): ButtonSize {
    return (this.getAttribute('size') as ButtonSize | null) ?? 'default'
  }

  set size(value: ButtonSize) {
    this.setAttribute('size', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <button part="root" class="root" data-variant="\${this.variant}" data-size="\${this.size}" \${this.disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    \`
  }
}

if (!customElements.get('shadcx-button')) {
  customElements.define('shadcx-button', Button)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-button': Button
  }
}
`,Be=`const styles = \`
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

  :host { display: inline-flex; }
  :host([disabled]) { pointer-events: none; }

  .root {
    text-transform: none;
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root:disabled { opacity: 0.5; pointer-events: none; }
  .root:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)); }
  .root ::slotted(svg) { pointer-events: none; width: 1rem; height: 1rem; flex-shrink: 0; }

  [data-size='default'] { height: 2.25rem; padding-inline: 1rem; }
  [data-size='xs'] { height: 1.75rem; padding-inline: 0.5rem; font-size: 0.8125rem; }
  [data-size='sm'] { height: 2rem; padding-inline: 0.75rem; font-size: 0.8125rem; }
  [data-size='lg'] { height: 2.5rem; padding-inline: 1.5rem; }
  [data-size='icon'] { height: 2.25rem; width: 2.25rem; padding: 0; }
  [data-size='icon-xs'] { height: 1.75rem; width: 1.75rem; padding: 0; }
  [data-size='icon-sm'] { height: 2rem; width: 2rem; padding: 0; }
  [data-size='icon-lg'] { height: 2.5rem; width: 2.5rem; padding: 0; }

  [data-variant='default'] {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
  [data-variant='default']:hover { background-color: hsl(var(--primary) / 0.9); }

  [data-variant='destructive'] {
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='destructive']:hover { background-color: hsl(var(--destructive) / 0.9); }

  [data-variant='outline'] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border-color: hsl(var(--input));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='outline']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  [data-variant='secondary'] {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  [data-variant='secondary']:hover { background-color: hsl(var(--secondary) / 0.8); }

  [data-variant='ghost'] { background-color: transparent; color: hsl(var(--foreground)); }
  [data-variant='ghost']:hover { background-color: hsl(var(--accent)); color: hsl(var(--accent-foreground)); }

  [data-variant='link'] { background-color: transparent; color: hsl(var(--primary)); text-underline-offset: 4px; }
  [data-variant='link']:hover { text-decoration: underline; }

  [aria-invalid='true'] { border-color: hsl(var(--destructive)); box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2); }
\`;
export class Button extends HTMLElement {
    static observedAttributes = ['variant', 'size', 'disabled'];
    get variant() {
        return this.getAttribute('variant') ?? 'default';
    }
    set variant(value) {
        this.setAttribute('variant', value);
    }
    get size() {
        return this.getAttribute('size') ?? 'default';
    }
    set size(value) {
        this.setAttribute('size', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <button part="root" class="root" data-variant="\${this.variant}" data-size="\${this.size}" \${this.disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    \`;
    }
}
if (!customElements.get('shadcx-button')) {
    customElements.define('shadcx-button', Button);
}`,Ve=t({ButtonPage:()=>V,description:()=>He}),He=`Displays a button or a component that looks like a button.`,V=class extends P{static{this.styles=c`
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
  `}render(){return E`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/button.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="button.ts" .source=${ze} .jsSource=${Be}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-button variant="outline"&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-button>Button</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <shadcx-button variant="default">Default</shadcx-button>
        <shadcx-button variant="destructive">Destructive</shadcx-button>
        <shadcx-button variant="outline">Outline</shadcx-button>
        <shadcx-button variant="secondary">Secondary</shadcx-button>
        <shadcx-button variant="ghost">Ghost</shadcx-button>
        <shadcx-button variant="link">Link</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button variant="default"&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button variant="destructive"&gt;Destructive&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline"&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button variant="secondary"&gt;Secondary&lt;/shadcx-button&gt;
&lt;shadcx-button variant="ghost"&gt;Ghost&lt;/shadcx-button&gt;
&lt;shadcx-button variant="link"&gt;Link&lt;/shadcx-button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <shadcx-button size="xs">Extra Small</shadcx-button>
        <shadcx-button size="sm">Small</shadcx-button>
        <shadcx-button size="default">Default</shadcx-button>
        <shadcx-button size="lg">Large</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button size="xs"&gt;Extra Small&lt;/shadcx-button&gt;
&lt;shadcx-button size="sm"&gt;Small&lt;/shadcx-button&gt;
&lt;shadcx-button size="default"&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button size="lg"&gt;Large&lt;/shadcx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <shadcx-button size="icon" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </shadcx-button>
        <shadcx-button size="icon-xs" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </shadcx-button>
        <shadcx-button size="icon-sm" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </shadcx-button>
        <shadcx-button size="icon-lg" variant="outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button size="icon" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button size="icon-xs" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button size="icon-sm" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button size="icon-lg" variant="outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-button disabled>Primary</shadcx-button>
        <shadcx-button variant="outline" disabled>Outline</shadcx-button>
        <shadcx-button variant="ghost" disabled>Ghost</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button disabled&gt;Primary&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline" disabled&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button variant="ghost" disabled&gt;Ghost&lt;/shadcx-button&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</code></td>
              <td><code>"default"</code></td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"</code></td>
              <td><code>"default"</code></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>root</code></td>
              <td>The <code>&lt;button&gt;</code> element</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};V=R([F(`button-page`)],V);var Ue=`export type CardSize = 'default' | 'sm'

const preflight = \`
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
  img, video { max-width: 100%; height: auto; }
  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
  blockquote, dl, dd, hr, figure, p, pre { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: inherit; }
  [hidden] { display: none !important; }
\`

const cardStyles = \`
  \${preflight}

  :host {
    --shadcx-card-padding: 1.5rem;
    --shadcx-card-gap: 1.5rem;
    display: block;
  }

  :host([size='sm']) {
    --shadcx-card-padding: 1rem;
    --shadcx-card-gap: 1rem;
  }

  .root {
    display: flex;
    flex-direction: column;
    gap: var(--shadcx-card-gap);
    border-radius: calc(var(--radius) + 2px);
    border: 1px solid hsl(var(--border));
    background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .root ::slotted(img),
  .root ::slotted([data-card-image]) {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
\`

const headerStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 0.375rem 1rem;
    padding: var(--shadcx-card-padding) var(--shadcx-card-padding) 0;
  }

  .root ::slotted(shadcx-card-title),
  .root ::slotted(shadcx-card-description) {
    grid-column: 1;
  }

  .root ::slotted(shadcx-card-action) {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: end;
    align-self: start;
  }
\`

const titleStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--card-foreground));
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
\`

const descriptionStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.45;
  }
\`

const actionStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
\`

const contentStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    padding-inline: var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
\`

const footerStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 var(--shadcx-card-padding) var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
\`

abstract class CardElement extends HTMLElement {
  protected abstract styles: string
  protected partName = 'root'
  protected rootClassName = 'root'

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${this.styles}</style>
      <div part="\${this.partName}" class="\${this.rootClassName}"><slot></slot></div>
    \`
  }
}

export class Card extends HTMLElement {
  static observedAttributes = ['size']

  get size(): CardSize {
    return (this.getAttribute('size') as CardSize | null) ?? 'default'
  }

  set size(value: CardSize) {
    this.setAttribute('size', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${cardStyles}</style>
      <div part="root" class="root" data-size="\${this.size}"><slot></slot></div>
    \`
  }
}

export class CardHeader extends CardElement {
  protected styles = headerStyles
}

export class CardTitle extends CardElement {
  protected styles = titleStyles
}

export class CardDescription extends CardElement {
  protected styles = descriptionStyles
}

export class CardAction extends CardElement {
  protected styles = actionStyles
}

export class CardContent extends CardElement {
  protected styles = contentStyles
}

export class CardFooter extends CardElement {
  protected styles = footerStyles
}

const definitions: [string, CustomElementConstructor][] = [
  ['shadcx-card', Card],
  ['shadcx-card-header', CardHeader],
  ['shadcx-card-title', CardTitle],
  ['shadcx-card-description', CardDescription],
  ['shadcx-card-action', CardAction],
  ['shadcx-card-content', CardContent],
  ['shadcx-card-footer', CardFooter],
]

for (const [tag, element] of definitions) {
  if (!customElements.get(tag)) {
    customElements.define(tag, element)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-card': Card
    'shadcx-card-header': CardHeader
    'shadcx-card-title': CardTitle
    'shadcx-card-description': CardDescription
    'shadcx-card-action': CardAction
    'shadcx-card-content': CardContent
    'shadcx-card-footer': CardFooter
  }
}
`,We=`const preflight = \`
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
  img, video { max-width: 100%; height: auto; }
  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
  blockquote, dl, dd, hr, figure, p, pre { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: inherit; }
  [hidden] { display: none !important; }
\`;
const cardStyles = \`
  \${preflight}

  :host {
    --shadcx-card-padding: 1.5rem;
    --shadcx-card-gap: 1.5rem;
    display: block;
  }

  :host([size='sm']) {
    --shadcx-card-padding: 1rem;
    --shadcx-card-gap: 1rem;
  }

  .root {
    display: flex;
    flex-direction: column;
    gap: var(--shadcx-card-gap);
    border-radius: calc(var(--radius) + 2px);
    border: 1px solid hsl(var(--border));
    background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .root ::slotted(img),
  .root ::slotted([data-card-image]) {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
\`;
const headerStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 0.375rem 1rem;
    padding: var(--shadcx-card-padding) var(--shadcx-card-padding) 0;
  }

  .root ::slotted(shadcx-card-title),
  .root ::slotted(shadcx-card-description) {
    grid-column: 1;
  }

  .root ::slotted(shadcx-card-action) {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: end;
    align-self: start;
  }
\`;
const titleStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--card-foreground));
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
\`;
const descriptionStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.45;
  }
\`;
const actionStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
\`;
const contentStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    padding-inline: var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
\`;
const footerStyles = \`
  \${preflight}

  :host { display: block; }

  .root {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 var(--shadcx-card-padding) var(--shadcx-card-padding);
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    line-height: 1.5;
  }
\`;
class CardElement extends HTMLElement {
    partName = 'root';
    rootClassName = 'root';
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${this.styles}</style>
      <div part="\${this.partName}" class="\${this.rootClassName}"><slot></slot></div>
    \`;
    }
}
export class Card extends HTMLElement {
    static observedAttributes = ['size'];
    get size() {
        return this.getAttribute('size') ?? 'default';
    }
    set size(value) {
        this.setAttribute('size', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${cardStyles}</style>
      <div part="root" class="root" data-size="\${this.size}"><slot></slot></div>
    \`;
    }
}
export class CardHeader extends CardElement {
    styles = headerStyles;
}
export class CardTitle extends CardElement {
    styles = titleStyles;
}
export class CardDescription extends CardElement {
    styles = descriptionStyles;
}
export class CardAction extends CardElement {
    styles = actionStyles;
}
export class CardContent extends CardElement {
    styles = contentStyles;
}
export class CardFooter extends CardElement {
    styles = footerStyles;
}
const definitions = [
    ['shadcx-card', Card],
    ['shadcx-card-header', CardHeader],
    ['shadcx-card-title', CardTitle],
    ['shadcx-card-description', CardDescription],
    ['shadcx-card-action', CardAction],
    ['shadcx-card-content', CardContent],
    ['shadcx-card-footer', CardFooter],
];
for (const [tag, element] of definitions) {
    if (!customElements.get(tag)) {
        customElements.define(tag, element);
    }
}`,Ge=t({CardPage:()=>H,description:()=>Ke}),Ke=`Displays a card with header, content, and footer.`,H=class extends P{static{this.styles=c`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc { color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }

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

    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 24rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }

    shadcx-card { width: min(100%, 24rem); }
    shadcx-card.demo-image { width: min(100%, 28rem); }
    .card-copy { color: hsl(var(--muted-foreground)); margin: 0; }
    .footer-between { justify-content: space-between; }
    .demo-image img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
      shadcx-card { width: 100%; }
    }
  `}render(){return E`
      <h1>Card</h1>
      <p class="desc">Displays a card with header, content, and footer.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/card.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="card.ts" .source=${Ue} .jsSource=${We}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-card&gt;
  &lt;shadcx-card-header&gt;
    &lt;shadcx-card-title&gt;Card Title&lt;/shadcx-card-title&gt;
    &lt;shadcx-card-description&gt;Card Description&lt;/shadcx-card-description&gt;
    &lt;shadcx-card-action&gt;Card Action&lt;/shadcx-card-action&gt;
  &lt;/shadcx-card-header&gt;
  &lt;shadcx-card-content&gt;Card Content&lt;/shadcx-card-content&gt;
  &lt;shadcx-card-footer&gt;Card Footer&lt;/shadcx-card-footer&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-card>
          <shadcx-card-header>
            <shadcx-card-title>Team Seats</shadcx-card-title>
            <shadcx-card-description>Manage seats for your workspace.</shadcx-card-description>
            <shadcx-card-action><shadcx-badge variant="secondary">Pro</shadcx-badge></shadcx-card-action>
          </shadcx-card-header>
          <shadcx-card-content>
            <p class="card-copy">Invite teammates, assign roles, and review billing impact before changes are applied.</p>
          </shadcx-card-content>
          <shadcx-card-footer class="footer-between">
            <span>12 of 20 seats used</span>
            <shadcx-button size="sm">Manage</shadcx-button>
          </shadcx-card-footer>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card&gt;
  &lt;shadcx-card-header&gt;
    &lt;shadcx-card-title&gt;Team Seats&lt;/shadcx-card-title&gt;
    &lt;shadcx-card-description&gt;Manage seats for your workspace.&lt;/shadcx-card-description&gt;
    &lt;shadcx-card-action&gt;&lt;shadcx-badge variant="secondary"&gt;Pro&lt;/shadcx-badge&gt;&lt;/shadcx-card-action&gt;
  &lt;/shadcx-card-header&gt;
  &lt;shadcx-card-content&gt;...&lt;/shadcx-card-content&gt;
  &lt;shadcx-card-footer&gt;...&lt;/shadcx-card-footer&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h3>Small</h3>
      <div class="preview">
        <shadcx-card size="sm">
          <shadcx-card-header>
            <shadcx-card-title>Storage</shadcx-card-title>
            <shadcx-card-description>Small cards use tighter spacing.</shadcx-card-description>
          </shadcx-card-header>
          <shadcx-card-content>42 GB used this month.</shadcx-card-content>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card size="sm"&gt;...&lt;/shadcx-card&gt;</code></pre>

      <h3>Image</h3>
      <div class="preview">
        <shadcx-card class="demo-image">
          <img data-card-image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Laptop showing source code" />
          <shadcx-card-header>
            <shadcx-card-title>Release Notes</shadcx-card-title>
            <shadcx-card-description>Ship a polished update summary with media.</shadcx-card-description>
          </shadcx-card-header>
          <shadcx-card-content>Use a standard image before the header for media cards.</shadcx-card-content>
        </shadcx-card>
      </div>
      <pre><code>&lt;shadcx-card&gt;
  &lt;img data-card-image src="..." alt="..." /&gt;
  &lt;shadcx-card-header&gt;...&lt;/shadcx-card-header&gt;
&lt;/shadcx-card&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>size</code></td><td><code>"default" | "sm"</code></td><td><code>"default"</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Part</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>root</code></td><td>The internal wrapper on each card element.</td></tr>
          </tbody>
        </table>
      </div>
    `}};H=R([F(`card-page`)],H);var qe=`export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate'

const styles = \`
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
\`

export class Checkbox extends HTMLElement {
  static observedAttributes = ['checked', 'indeterminate', 'disabled', 'aria-invalid']

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value: boolean) {
    this.toggleAttribute('checked', value)
  }

  get indeterminate() {
    return this.hasAttribute('indeterminate')
  }

  set indeterminate(value: boolean) {
    this.toggleAttribute('indeterminate', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  get ariaInvalid() {
    return this.getAttribute('aria-invalid')
  }

  set ariaInvalid(value: string | null) {
    if (value === null) this.removeAttribute('aria-invalid')
    else this.setAttribute('aria-invalid', value)
  }

  private get state(): CheckboxState {
    if (this.indeterminate) return 'indeterminate'
    return this.checked ? 'checked' : 'unchecked'
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private toggle = () => {
    if (this.disabled) return

    if (this.indeterminate) {
      this.indeterminate = false
      this.checked = true
    } else {
      this.checked = !this.checked
    }

    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    this.dispatchEvent(
      new CustomEvent('checked-change', {
        detail: {
          checked: this.checked,
          indeterminate: this.indeterminate,
          state: this.state,
        },
        bubbles: true,
        composed: true,
      }),
    )
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    this.toggle()
  }

  private render() {
    if (!this.shadowRoot) return
    const icon = this.state === 'checked'
      ? '<svg class="icon" viewBox="0 0 16 16"><polyline points="3.5 8.5 6.8 11.8 12.5 5.5" /></svg>'
      : this.state === 'indeterminate'
        ? '<svg class="icon" viewBox="0 0 16 16"><line x1="3.5" y1="8" x2="12.5" y2="8" /></svg>'
        : ''

    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <button
        part="root"
        class="root"
        type="button"
        role="checkbox"
        data-state="\${this.state}"
        aria-checked="\${this.indeterminate ? 'mixed' : String(this.checked)}"
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
        \${this.disabled ? 'disabled' : ''}
      >
        <span part="indicator" class="indicator" aria-hidden="true">\${icon}</span>
      </button>
    \`
    const button = this.shadowRoot.querySelector('button')
    button?.addEventListener('click', this.toggle)
    button?.addEventListener('keydown', this.onKeyDown)
  }
}

if (!customElements.get('shadcx-checkbox')) {
  customElements.define('shadcx-checkbox', Checkbox)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-checkbox': Checkbox
  }
}
`,Je=`const styles = \`
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
\`;
export class Checkbox extends HTMLElement {
    static observedAttributes = ['checked', 'indeterminate', 'disabled', 'aria-invalid'];
    get checked() {
        return this.hasAttribute('checked');
    }
    set checked(value) {
        this.toggleAttribute('checked', value);
    }
    get indeterminate() {
        return this.hasAttribute('indeterminate');
    }
    set indeterminate(value) {
        this.toggleAttribute('indeterminate', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    get ariaInvalid() {
        return this.getAttribute('aria-invalid');
    }
    set ariaInvalid(value) {
        if (value === null)
            this.removeAttribute('aria-invalid');
        else
            this.setAttribute('aria-invalid', value);
    }
    get state() {
        if (this.indeterminate)
            return 'indeterminate';
        return this.checked ? 'checked' : 'unchecked';
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    toggle = () => {
        if (this.disabled)
            return;
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = true;
        }
        else {
            this.checked = !this.checked;
        }
        this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        this.dispatchEvent(new CustomEvent('checked-change', {
            detail: {
                checked: this.checked,
                indeterminate: this.indeterminate,
                state: this.state,
            },
            bubbles: true,
            composed: true,
        }));
    };
    onKeyDown = (event) => {
        if (event.key !== 'Enter')
            return;
        event.preventDefault();
        this.toggle();
    };
    render() {
        if (!this.shadowRoot)
            return;
        const icon = this.state === 'checked'
            ? '<svg class="icon" viewBox="0 0 16 16"><polyline points="3.5 8.5 6.8 11.8 12.5 5.5" /></svg>'
            : this.state === 'indeterminate'
                ? '<svg class="icon" viewBox="0 0 16 16"><line x1="3.5" y1="8" x2="12.5" y2="8" /></svg>'
                : '';
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <button
        part="root"
        class="root"
        type="button"
        role="checkbox"
        data-state="\${this.state}"
        aria-checked="\${this.indeterminate ? 'mixed' : String(this.checked)}"
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
        \${this.disabled ? 'disabled' : ''}
      >
        <span part="indicator" class="indicator" aria-hidden="true">\${icon}</span>
      </button>
    \`;
        const button = this.shadowRoot.querySelector('button');
        button?.addEventListener('click', this.toggle);
        button?.addEventListener('keydown', this.onKeyDown);
    }
}
if (!customElements.get('shadcx-checkbox')) {
    customElements.define('shadcx-checkbox', Checkbox);
}`,Ye=t({CheckboxPage:()=>U,description:()=>Xe}),Xe=`A control that allows the user to toggle between checked and unchecked states, with support for indeterminate and invalid states.`,U=class extends P{constructor(...e){super(...e),this._checked=!1}static{this.styles=c`
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
  `}_onCheckedChange(e){let t=e.currentTarget;this._checked=!!t.checked}render(){return E`
      <h1>Checkbox</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and unchecked
        states, with support for indeterminate and invalid states.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/checkbox.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="checkbox.ts" .source=${qe} .jsSource=${Je}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-checkbox&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <label class="row">
          <shadcx-checkbox></shadcx-checkbox>
          <span class="label">Accept terms and conditions</span>
        </label>
      </div>
      <pre><code>&lt;label style="display: inline-flex; align-items: center; gap: 0.5rem;"&gt;
  &lt;shadcx-checkbox&gt;&lt;/shadcx-checkbox&gt;
  &lt;span&gt;Accept terms and conditions&lt;/span&gt;
&lt;/label&gt;</code></pre>

      <h3>Checked + Controlled</h3>
      <div class="preview">
        <label class="row">
          <shadcx-checkbox
            .checked=${this._checked}
            @change=${this._onCheckedChange}
          ></shadcx-checkbox>
          <span class="label">Enable notifications</span>
        </label>
        <span class="muted">State: ${this._checked?`checked`:`unchecked`}</span>
      </div>
      <pre><code>&lt;shadcx-checkbox .checked=${"${checked}"} @change=${"${onChange}"}&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Indeterminate</h3>
      <div class="preview">
        <label class="row">
          <shadcx-checkbox indeterminate></shadcx-checkbox>
          <span class="label">Partially selected</span>
        </label>
      </div>
      <pre><code>&lt;shadcx-checkbox indeterminate&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row">
          <shadcx-checkbox disabled></shadcx-checkbox>
          <span class="label">Disabled option</span>
        </label>
      </div>
      <pre><code>&lt;shadcx-checkbox disabled&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row">
          <shadcx-checkbox aria-invalid="true"></shadcx-checkbox>
          <span class="label">Required field</span>
        </label>
      </div>
      <pre><code>&lt;shadcx-checkbox aria-invalid="true"&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>checked</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>indeterminate</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>string | null</code></td>
              <td><code>null</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};R([L()],U.prototype,`_checked`,void 0),U=R([F(`checkbox-page`)],U);var Ze=`const styles = \`
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
\`

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export class Combobox extends HTMLElement {
  static observedAttributes = ['placeholder', 'disabled', 'multiple', 'show-clear', 'auto-highlight', 'aria-invalid', 'value']

  private _items: string[] = []
  private _values: string[] = []
  private _query = ''
  private _open = false
  private _highlightedIndex = -1

  get items() {
    return this._items
  }

  set items(value: string[]) {
    this._items = Array.isArray(value) ? value : []
    this.render()
  }

  get placeholder() {
    return this.getAttribute('placeholder') ?? 'Select an option'
  }

  set placeholder(value: string) {
    this.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  get multiple() {
    return this.hasAttribute('multiple')
  }

  set multiple(value: boolean) {
    this.toggleAttribute('multiple', value)
  }

  get showClear() {
    return this.hasAttribute('show-clear')
  }

  set showClear(value: boolean) {
    this.toggleAttribute('show-clear', value)
  }

  get autoHighlight() {
    return this.hasAttribute('auto-highlight')
  }

  set autoHighlight(value: boolean) {
    this.toggleAttribute('auto-highlight', value)
  }

  get ariaInvalid() {
    return this.getAttribute('aria-invalid')
  }

  set ariaInvalid(value: string | null) {
    if (value === null) this.removeAttribute('aria-invalid')
    else this.setAttribute('aria-invalid', value)
  }

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    if (value) this.setAttribute('value', value)
    else this.removeAttribute('value')
  }

  get values() {
    return this._values
  }

  set values(value: string[]) {
    this._values = Array.isArray(value) ? value : []
    this.render()
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    window.addEventListener('pointerdown', this.onWindowPointerDown)
    this.render()
  }

  disconnectedCallback() {
    window.removeEventListener('pointerdown', this.onWindowPointerDown)
  }

  attributeChangedCallback() {
    if (!this.multiple && !this._query && this.value) {
      this._query = this.value
    }
    this.render()
  }

  private get filteredItems() {
    const query = this._query.trim().toLowerCase()
    if (!query) return this.items
    return this.items.filter((item) => item.toLowerCase().includes(query))
  }

  private onWindowPointerDown = (event: PointerEvent) => {
    if (!event.composedPath().includes(this)) {
      this._open = false
      this.render()
    }
  }

  private toggleOpen() {
    if (this.disabled) return
    this._open = !this._open
    if (this._open && this.autoHighlight && this.filteredItems.length > 0) {
      this._highlightedIndex = 0
    }
    this.render()
  }

  private onInput = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement
    this._query = input.value
    this._open = true
    this._highlightedIndex = this.autoHighlight && this.filteredItems.length > 0 ? 0 : -1
    this.render(true)
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (!this._open && event.key === 'ArrowDown') {
      event.preventDefault()
      this._open = true
      this._highlightedIndex = 0
      this.render(true)
      return
    }

    if (!this._open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this._highlightedIndex = Math.min(this._highlightedIndex + 1, this.filteredItems.length - 1)
      this.render(true)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0)
      this.render(true)
      return
    }

    if (event.key === 'Enter' && this._highlightedIndex >= 0) {
      event.preventDefault()
      this.selectItem(this.filteredItems[this._highlightedIndex])
      return
    }

    if (event.key === 'Escape') {
      this._open = false
      this._highlightedIndex = -1
      this.render()
    }
  }

  private selectItem(item: string) {
    if (this.multiple) {
      if (this.values.includes(item)) {
        this._values = this.values.filter((value) => value !== item)
      } else {
        this._values = [...this.values, item]
      }
      this._query = ''
      this.dispatchValueChange(this.values)
      this.render(true)
      return
    }

    this.value = item
    this._query = item
    this._open = false
    this.dispatchValueChange(this.value)
    this.render()
  }

  private clear() {
    this.value = ''
    this._values = []
    this._query = ''
    this.dispatchValueChange(this.multiple ? this.values : this.value)
    this.render(true)
  }

  private onActionButtonClick = () => {
    const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value)
    if (this.showClear && hasValue) {
      this.clear()
      return
    }
    this.toggleOpen()
  }

  private removeValue(item: string) {
    this._values = this.values.filter((value) => value !== item)
    this.dispatchValueChange(this.values)
    this.render(true)
  }

  private dispatchValueChange(value: string | string[]) {
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value }, bubbles: true, composed: true }))
  }

  private render(focusInput = false) {
    if (!this.shadowRoot) return
    if (!this.multiple && !this._query && this.value) {
      this._query = this.value
    }

    const inputAttrs = \`
      value="\${escapeHtml(this._query)}"
      placeholder="\${escapeHtml(this.placeholder)}"
      \${this.disabled ? 'disabled' : ''}
      \${this.ariaInvalid ? \`aria-invalid="\${escapeHtml(this.ariaInvalid)}"\` : ''}
    \`
    const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value)
    const actionLabel = this.showClear && hasValue ? 'Clear selection' : 'Open options'
    const actionText = this.showClear && hasValue ? 'x' : '▾'

    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <div class="control">
        \${this.multiple ? this.renderMultipleInput(inputAttrs) : this.renderSingleInput(inputAttrs)}
        <button class="icon-btn" type="button" aria-label="\${actionLabel}">\${actionText}</button>
      </div>
      \${this._open ? this.renderContent() : ''}
    \`

    const input = this.shadowRoot.querySelector('input')
    input?.addEventListener('focus', () => {
      if (this._open) return
      this._open = true
      this.render(true)
    })
    input?.addEventListener('input', this.onInput)
    input?.addEventListener('keydown', this.onKeyDown)
    this.shadowRoot.querySelector('.icon-btn')?.addEventListener('click', this.onActionButtonClick)
    this.shadowRoot.querySelectorAll<HTMLButtonElement>('[data-item-index]').forEach((button) => {
      button.addEventListener('mouseenter', () => {
        this._highlightedIndex = Number(button.dataset.itemIndex)
        this.render(focusInput)
      })
      button.addEventListener('click', () => this.selectItem(this.filteredItems[Number(button.dataset.itemIndex)]))
    })
    this.shadowRoot.querySelectorAll<HTMLButtonElement>('[data-remove-value]').forEach((button) => {
      button.addEventListener('click', () => this.removeValue(button.dataset.removeValue ?? ''))
    })

    if (focusInput) {
      const nextInput = this.shadowRoot.querySelector<HTMLInputElement>('input')
      nextInput?.focus()
      nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length)
    }
  }

  private renderSingleInput(inputAttrs: string) {
    return \`<input class="input" part="input" \${inputAttrs}>\`
  }

  private renderMultipleInput(inputAttrs: string) {
    return \`
      <div class="chips" part="chips">
        \${this.values.map((item) => \`
          <span class="chip" part="chip">
            \${escapeHtml(item)}
            <button class="chip-remove" type="button" data-remove-value="\${escapeHtml(item)}" aria-label="Remove \${escapeHtml(item)}">x</button>
          </span>
        \`).join('')}
        <input class="chips-input" part="input" \${inputAttrs}>
      </div>
    \`
  }

  private renderContent() {
    const filtered = this.filteredItems
    return \`
      <div class="content" part="content">
        \${filtered.length === 0
          ? '<div class="empty" part="empty">No items found.</div>'
          : \`<div class="list" part="list">
              \${filtered.map((item, index) => this.renderItem(item, index)).join('')}
            </div>\`}
      </div>
    \`
  }

  private renderItem(item: string, index: number) {
    const selected = this.multiple ? this.values.includes(item) : this.value === item
    return \`
      <button
        class="item"
        part="item"
        type="button"
        data-item-index="\${index}"
        data-highlighted="\${String(index === this._highlightedIndex)}"
      >
        <span>\${escapeHtml(item)}</span>
        \${selected ? '<span class="check">✓</span>' : ''}
      </button>
    \`
  }
}

if (!customElements.get('shadcx-combobox')) {
  customElements.define('shadcx-combobox', Combobox)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-combobox': Combobox
  }
}
`,Qe=`const styles = \`
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
\`;
function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}
export class Combobox extends HTMLElement {
    static observedAttributes = ['placeholder', 'disabled', 'multiple', 'show-clear', 'auto-highlight', 'aria-invalid', 'value'];
    _items = [];
    _values = [];
    _query = '';
    _open = false;
    _highlightedIndex = -1;
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = Array.isArray(value) ? value : [];
        this.render();
    }
    get placeholder() {
        return this.getAttribute('placeholder') ?? 'Select an option';
    }
    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    get multiple() {
        return this.hasAttribute('multiple');
    }
    set multiple(value) {
        this.toggleAttribute('multiple', value);
    }
    get showClear() {
        return this.hasAttribute('show-clear');
    }
    set showClear(value) {
        this.toggleAttribute('show-clear', value);
    }
    get autoHighlight() {
        return this.hasAttribute('auto-highlight');
    }
    set autoHighlight(value) {
        this.toggleAttribute('auto-highlight', value);
    }
    get ariaInvalid() {
        return this.getAttribute('aria-invalid');
    }
    set ariaInvalid(value) {
        if (value === null)
            this.removeAttribute('aria-invalid');
        else
            this.setAttribute('aria-invalid', value);
    }
    get value() {
        return this.getAttribute('value') ?? '';
    }
    set value(value) {
        if (value)
            this.setAttribute('value', value);
        else
            this.removeAttribute('value');
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = Array.isArray(value) ? value : [];
        this.render();
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        window.addEventListener('pointerdown', this.onWindowPointerDown);
        this.render();
    }
    disconnectedCallback() {
        window.removeEventListener('pointerdown', this.onWindowPointerDown);
    }
    attributeChangedCallback() {
        if (!this.multiple && !this._query && this.value) {
            this._query = this.value;
        }
        this.render();
    }
    get filteredItems() {
        const query = this._query.trim().toLowerCase();
        if (!query)
            return this.items;
        return this.items.filter((item) => item.toLowerCase().includes(query));
    }
    onWindowPointerDown = (event) => {
        if (!event.composedPath().includes(this)) {
            this._open = false;
            this.render();
        }
    };
    toggleOpen() {
        if (this.disabled)
            return;
        this._open = !this._open;
        if (this._open && this.autoHighlight && this.filteredItems.length > 0) {
            this._highlightedIndex = 0;
        }
        this.render();
    }
    onInput = (event) => {
        const input = event.currentTarget;
        this._query = input.value;
        this._open = true;
        this._highlightedIndex = this.autoHighlight && this.filteredItems.length > 0 ? 0 : -1;
        this.render(true);
    };
    onKeyDown = (event) => {
        if (!this._open && event.key === 'ArrowDown') {
            event.preventDefault();
            this._open = true;
            this._highlightedIndex = 0;
            this.render(true);
            return;
        }
        if (!this._open)
            return;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this._highlightedIndex = Math.min(this._highlightedIndex + 1, this.filteredItems.length - 1);
            this.render(true);
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0);
            this.render(true);
            return;
        }
        if (event.key === 'Enter' && this._highlightedIndex >= 0) {
            event.preventDefault();
            this.selectItem(this.filteredItems[this._highlightedIndex]);
            return;
        }
        if (event.key === 'Escape') {
            this._open = false;
            this._highlightedIndex = -1;
            this.render();
        }
    };
    selectItem(item) {
        if (this.multiple) {
            if (this.values.includes(item)) {
                this._values = this.values.filter((value) => value !== item);
            }
            else {
                this._values = [...this.values, item];
            }
            this._query = '';
            this.dispatchValueChange(this.values);
            this.render(true);
            return;
        }
        this.value = item;
        this._query = item;
        this._open = false;
        this.dispatchValueChange(this.value);
        this.render();
    }
    clear() {
        this.value = '';
        this._values = [];
        this._query = '';
        this.dispatchValueChange(this.multiple ? this.values : this.value);
        this.render(true);
    }
    onActionButtonClick = () => {
        const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value);
        if (this.showClear && hasValue) {
            this.clear();
            return;
        }
        this.toggleOpen();
    };
    removeValue(item) {
        this._values = this.values.filter((value) => value !== item);
        this.dispatchValueChange(this.values);
        this.render(true);
    }
    dispatchValueChange(value) {
        this.dispatchEvent(new CustomEvent('value-change', { detail: { value }, bubbles: true, composed: true }));
    }
    render(focusInput = false) {
        if (!this.shadowRoot)
            return;
        if (!this.multiple && !this._query && this.value) {
            this._query = this.value;
        }
        const inputAttrs = \`
      value="\${escapeHtml(this._query)}"
      placeholder="\${escapeHtml(this.placeholder)}"
      \${this.disabled ? 'disabled' : ''}
      \${this.ariaInvalid ? \`aria-invalid="\${escapeHtml(this.ariaInvalid)}"\` : ''}
    \`;
        const hasValue = this.multiple ? this.values.length > 0 : Boolean(this.value);
        const actionLabel = this.showClear && hasValue ? 'Clear selection' : 'Open options';
        const actionText = this.showClear && hasValue ? 'x' : '▾';
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <div class="control">
        \${this.multiple ? this.renderMultipleInput(inputAttrs) : this.renderSingleInput(inputAttrs)}
        <button class="icon-btn" type="button" aria-label="\${actionLabel}">\${actionText}</button>
      </div>
      \${this._open ? this.renderContent() : ''}
    \`;
        const input = this.shadowRoot.querySelector('input');
        input?.addEventListener('focus', () => {
            if (this._open)
                return;
            this._open = true;
            this.render(true);
        });
        input?.addEventListener('input', this.onInput);
        input?.addEventListener('keydown', this.onKeyDown);
        this.shadowRoot.querySelector('.icon-btn')?.addEventListener('click', this.onActionButtonClick);
        this.shadowRoot.querySelectorAll('[data-item-index]').forEach((button) => {
            button.addEventListener('mouseenter', () => {
                this._highlightedIndex = Number(button.dataset.itemIndex);
                this.render(focusInput);
            });
            button.addEventListener('click', () => this.selectItem(this.filteredItems[Number(button.dataset.itemIndex)]));
        });
        this.shadowRoot.querySelectorAll('[data-remove-value]').forEach((button) => {
            button.addEventListener('click', () => this.removeValue(button.dataset.removeValue ?? ''));
        });
        if (focusInput) {
            const nextInput = this.shadowRoot.querySelector('input');
            nextInput?.focus();
            nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
        }
    }
    renderSingleInput(inputAttrs) {
        return \`<input class="input" part="input" \${inputAttrs}>\`;
    }
    renderMultipleInput(inputAttrs) {
        return \`
      <div class="chips" part="chips">
        \${this.values.map((item) => \`
          <span class="chip" part="chip">
            \${escapeHtml(item)}
            <button class="chip-remove" type="button" data-remove-value="\${escapeHtml(item)}" aria-label="Remove \${escapeHtml(item)}">x</button>
          </span>
        \`).join('')}
        <input class="chips-input" part="input" \${inputAttrs}>
      </div>
    \`;
    }
    renderContent() {
        const filtered = this.filteredItems;
        return \`
      <div class="content" part="content">
        \${filtered.length === 0
            ? '<div class="empty" part="empty">No items found.</div>'
            : \`<div class="list" part="list">
              \${filtered.map((item, index) => this.renderItem(item, index)).join('')}
            </div>\`}
      </div>
    \`;
    }
    renderItem(item, index) {
        const selected = this.multiple ? this.values.includes(item) : this.value === item;
        return \`
      <button
        class="item"
        part="item"
        type="button"
        data-item-index="\${index}"
        data-highlighted="\${String(index === this._highlightedIndex)}"
      >
        <span>\${escapeHtml(item)}</span>
        \${selected ? '<span class="check">✓</span>' : ''}
      </button>
    \`;
    }
}
if (!customElements.get('shadcx-combobox')) {
    customElements.define('shadcx-combobox', Combobox);
}`,$e=t({ComboboxPage:()=>G,description:()=>et}),et=`Autocomplete input with suggestion filtering, keyboard navigation, clear behavior, and optional multi-select chips.`,W=[`Next.js`,`SvelteKit`,`Nuxt.js`,`Remix`,`Astro`],G=class extends P{constructor(...e){super(...e),this._singleValue=``,this._multipleValues=[]}static{this.styles=c`
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
  `}_onSingleValueChange(e){let t=e;this._singleValue=t.detail.value}_onMultipleValueChange(e){let t=e;this._multipleValues=t.detail.value}render(){return E`
      <h1>Combobox</h1>
      <p class="desc">
        Autocomplete input with suggestion filtering, keyboard navigation, clear
        behavior, and optional multi-select chips.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/combobox.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="combobox.ts" .source=${Ze} .jsSource=${Qe}></source-code-block>

      <h2>Usage</h2>
      <p>
        In shadcx, list rendering is handled internally by
        <code>&lt;shadcx-combobox&gt;</code>, so there is no separate
        <code>ComboboxItem</code> component to compose.
      </p>
      <pre><code>&lt;shadcx-combobox id="framework-combobox" placeholder="Select a framework"&gt;&lt;/shadcx-combobox&gt;
&lt;script type="module"&gt;
  const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]
  const combobox = document.getElementById("framework-combobox")
  combobox.items = frameworks
&lt;/script&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <shadcx-combobox
          .items=${W}
          placeholder="Select a framework"
          show-clear
          auto-highlight
          .value=${this._singleValue}
          @value-change=${this._onSingleValueChange}
        ></shadcx-combobox>
        <div class="state">Value: ${this._singleValue||`(none)`}</div>
      </div>
      <pre><code>&lt;shadcx-combobox
  id="framework-single"
  placeholder="Select a framework"
  show-clear
  auto-highlight
&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h3>Multiple</h3>
      <div class="preview">
        <shadcx-combobox
          .items=${W}
          multiple
          show-clear
          auto-highlight
          placeholder="Add framework"
          .values=${this._multipleValues}
          @value-change=${this._onMultipleValueChange}
        ></shadcx-combobox>
        <div class="state">Values: ${this._multipleValues.length>0?this._multipleValues.join(`, `):`(none)`}</div>
      </div>
      <pre><code>&lt;shadcx-combobox
  id="framework-multiple"
  multiple
  show-clear
  auto-highlight
  placeholder="Add framework"
&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h3>Disabled + Invalid</h3>
      <div class="preview">
        <shadcx-combobox .items=${W} disabled placeholder="Disabled"></shadcx-combobox>
        <br><br>
        <shadcx-combobox .items=${W} aria-invalid="true" placeholder="Required framework"></shadcx-combobox>
      </div>
      <pre><code>&lt;shadcx-combobox disabled&gt;&lt;/shadcx-combobox&gt;
&lt;shadcx-combobox aria-invalid="true"&gt;&lt;/shadcx-combobox&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>items</code></td><td><code>string[]</code></td><td><code>[]</code></td></tr>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>"Select an option"</code></td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>values</code></td><td><code>string[]</code></td><td><code>[]</code></td></tr>
            <tr><td><code>multiple</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>show-clear</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>auto-highlight</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>string | null</code></td><td><code>null</code></td></tr>
          </tbody>
        </table>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Detail</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>value-change</code></td>
              <td><code>{ value: string | string[] }</code></td>
              <td>Fires whenever selected value(s) change.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};R([L()],G.prototype,`_singleValue`,void 0),R([L()],G.prototype,`_multipleValues`,void 0),G=R([F(`combobox-page`)],G);var tt=`export type DropdownMenuItemVariant = 'default' | 'destructive'

const preflight = \`
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
\`

const rootStyles = \`
  \${preflight}
  :host {
    display: inline-block;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }
\`

const triggerStyles = \`
  \${preflight}
  :host { display: inline-flex; }
  .root { display: inline-flex; cursor: pointer; }
\`

const contentStyles = \`
  \${preflight}
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
\`

const groupStyles = \`
  \${preflight}
  :host { display: block; }
  .root { display: grid; gap: 0.125rem; }
\`

const labelStyles = \`
  \${preflight}
  :host { display: block; }
  .root { padding: 0.375rem 0.5rem; font-size: 0.8125rem; font-weight: 600; color: hsl(var(--foreground)); }
\`

const separatorStyles = \`
  \${preflight}
  :host { display: block; }
  .root { height: 1px; margin: 0.25rem -0.25rem; background-color: hsl(var(--border)); }
\`

const itemStyles = \`
  \${preflight}
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
\`

const shortcutStyles = \`
  \${preflight}
  :host { margin-inline-start: auto; }
  .root { color: hsl(var(--muted-foreground)); font-size: 0.75rem; letter-spacing: 0.08em; }
\`

const subStyles = \`
  \${preflight}
  :host {
    display: block;
    position: relative;
  }
  :host(:hover) ::slotted(shadcx-dropdown-menu-sub-content),
  :host(:focus-within) ::slotted(shadcx-dropdown-menu-sub-content),
  :host([open]) ::slotted(shadcx-dropdown-menu-sub-content) { display: block; }
\`

const subTriggerStyles = \`
  \${itemStyles}
  .chevron { margin-inline-start: auto; color: hsl(var(--muted-foreground)); }
\`

const subContentStyles = \`
  \${contentStyles}
  :host {
    display: none;
    inset-block-start: -0.25rem;
    inset-inline-start: calc(100% + 0.25rem);
  }
  :host([data-side='left']) { inset-inline-start: auto; inset-inline-end: calc(100% + 0.25rem); }
\`

function defineElement(tag: string, element: CustomElementConstructor) {
  if (!customElements.get(tag)) customElements.define(tag, element)
}

abstract class SlotElement extends HTMLElement {
  protected abstract styles: string
  protected partName = 'root'
  protected rootClassName = 'root'

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`<style>\${this.styles}</style><div part="\${this.partName}" class="\${this.rootClassName}"><slot></slot></div>\`
  }
}

export class DropdownMenu extends HTMLElement {
  static observedAttributes = ['open']

  get open() {
    return this.hasAttribute('open')
  }

  set open(value: boolean) {
    this.toggleAttribute('open', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    window.addEventListener('pointerdown', this.onWindowPointerDown)
    window.addEventListener('keydown', this.onWindowKeyDown)
    this.addEventListener('click', this.onClick)
    this.addEventListener('keydown', this.onKeyDown)
    this.render()
    this.syncContent()
  }

  disconnectedCallback() {
    window.removeEventListener('pointerdown', this.onWindowPointerDown)
    window.removeEventListener('keydown', this.onWindowKeyDown)
    this.removeEventListener('click', this.onClick)
    this.removeEventListener('keydown', this.onKeyDown)
  }

  attributeChangedCallback() {
    this.syncContent()
  }

  private onWindowPointerDown = (event: PointerEvent) => {
    if (!event.composedPath().includes(this)) this.open = false
  }

  private onWindowKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.open = false
  }

  private onClick = (event: Event) => {
    const path = event.composedPath()
    if (path.some((node) => node instanceof DropdownMenuTrigger)) {
      this.open = !this.open
      return
    }

    const item = path.find((node) => node instanceof DropdownMenuItem) as DropdownMenuItem | undefined
    if (item && !item.disabled) this.open = false
  }

  private onKeyDown = (event: KeyboardEvent) => {
    const path = event.composedPath()
    const fromTrigger = path.some((node) => node instanceof DropdownMenuTrigger)

    if (fromTrigger && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault()
      this.open = true
      this.focusMenuItem(event.key === 'ArrowUp' ? 'last' : 'first')
      return
    }

    if (!this.open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      this.focusMenuItem('next')
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      this.focusMenuItem('previous')
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      this.focusMenuItem('first')
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      this.focusMenuItem('last')
    }
  }

  private getMenuItems() {
    const selector = [
      'shadcx-dropdown-menu-item',
      'shadcx-dropdown-menu-checkbox-item',
      'shadcx-dropdown-menu-radio-item',
      'shadcx-dropdown-menu-sub-trigger',
    ].join(',')

    return Array.from(this.querySelectorAll(selector)).filter((item) => {
      if (item instanceof DropdownMenuItem && item.disabled) return false
      return item instanceof HTMLElement
    }) as HTMLElement[]
  }

  private getItemButton(item: HTMLElement) {
    return item.shadowRoot?.querySelector<HTMLButtonElement>('button') ?? null
  }

  private focusMenuItem(position: 'first' | 'last' | 'next' | 'previous') {
    const items = this.getMenuItems()
    if (items.length === 0) return

    const activeIndex = items.findIndex((item) => item.shadowRoot?.activeElement === this.getItemButton(item))
    let nextIndex = 0

    if (position === 'last') nextIndex = items.length - 1
    if (position === 'next') nextIndex = activeIndex >= 0 ? (activeIndex + 1) % items.length : 0
    if (position === 'previous') nextIndex = activeIndex >= 0 ? (activeIndex - 1 + items.length) % items.length : items.length - 1

    requestAnimationFrame(() => this.getItemButton(items[nextIndex])?.focus())
  }

  private syncContent() {
    this.querySelectorAll('shadcx-dropdown-menu-content').forEach((content) => {
      content.toggleAttribute('data-open', this.open)
      content.setAttribute('data-align', content.getAttribute('align') ?? 'start')
    })

    if (this.open) requestAnimationFrame(() => this.updatePlacement())
  }

  private updatePlacement() {
    const trigger = this.querySelector('shadcx-dropdown-menu-trigger')
    const content = this.querySelector('shadcx-dropdown-menu-content')
    if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement)) return

    const triggerRect = trigger.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()
    const gap = 4
    const spaceBelow = window.innerHeight - triggerRect.bottom - gap
    const spaceAbove = triggerRect.top - gap
    const shouldOpenTop = contentRect.height > spaceBelow && spaceAbove > spaceBelow

    content.setAttribute('data-side', shouldOpenTop ? 'top' : 'bottom')
    content.toggleAttribute('data-constrain', Math.max(spaceBelow, spaceAbove) < contentRect.height)

    this.querySelectorAll('shadcx-dropdown-menu-sub').forEach((sub) => {
      if (sub instanceof DropdownMenuSub) sub.updatePlacement()
    })
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`<style>\${rootStyles}</style><slot></slot>\`
  }
}

export class DropdownMenuTrigger extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`<style>\${triggerStyles}</style><span part="root" class="root"><slot></slot></span>\`
  }
}

export class DropdownMenuContent extends SlotElement {
  static observedAttributes = ['align', 'data-open']
  protected styles = contentStyles
}

export class DropdownMenuGroup extends SlotElement {
  protected styles = groupStyles
}

export class DropdownMenuLabel extends SlotElement {
  protected styles = labelStyles
}

export class DropdownMenuSeparator extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`<style>\${separatorStyles}</style><div part="root" class="root" role="separator"></div>\`
  }
}

export class DropdownMenuItem extends HTMLElement {
  static observedAttributes = ['variant', 'disabled']

  get variant(): DropdownMenuItemVariant {
    return (this.getAttribute('variant') as DropdownMenuItemVariant | null) ?? 'default'
  }

  set variant(value: DropdownMenuItemVariant) {
    this.setAttribute('variant', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  protected get indicator() {
    return ''
  }

  protected get itemRole() {
    return 'menuitem'
  }

  protected render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${itemStyles}</style>
      <button part="root" class="root" type="button" role="\${this.itemRole}" data-variant="\${this.variant}" \${this.disabled ? 'disabled' : ''}>
        \${this.indicator ? \`<span class="indicator">\${this.indicator}</span>\` : ''}
        <span class="content"><slot></slot></span>
      </button>
    \`
  }
}

export class DropdownMenuCheckboxItem extends DropdownMenuItem {
  static observedAttributes = ['variant', 'disabled', 'checked']

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value: boolean) {
    this.toggleAttribute('checked', value)
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('click', this.onClick)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick)
  }

  protected get indicator() {
    return this.checked ? '✓' : ''
  }

  protected get itemRole() {
    return 'menuitemcheckbox'
  }

  protected render() {
    super.render()
    this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked))
  }

  private onClick = () => {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(new CustomEvent('checked-change', { detail: { checked: this.checked }, bubbles: true, composed: true }))
  }
}

export class DropdownMenuRadioGroup extends HTMLElement {
  static observedAttributes = ['value']

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    if (value) this.setAttribute('value', value)
    else this.removeAttribute('value')
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.addEventListener('click', this.onClick)
    this.render()
    this.syncItems()
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick)
  }

  attributeChangedCallback() {
    this.syncItems()
  }

  private onClick = (event: Event) => {
    const item = event.composedPath().find((node) => node instanceof DropdownMenuRadioItem) as DropdownMenuRadioItem | undefined
    if (!item || item.disabled) return
    this.value = item.value
    this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.value }, bubbles: true, composed: true }))
  }

  private syncItems() {
    this.querySelectorAll('shadcx-dropdown-menu-radio-item').forEach((item) => {
      if (!(item instanceof DropdownMenuRadioItem)) return
      item.checked = item.value === this.value
    })
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`<style>\${groupStyles}</style><div part="root" class="root" role="group"><slot></slot></div>\`
  }
}

export class DropdownMenuRadioItem extends DropdownMenuItem {
  static observedAttributes = ['variant', 'disabled', 'checked', 'value']

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(value: boolean) {
    this.toggleAttribute('checked', value)
  }

  protected get indicator() {
    return this.checked ? '•' : ''
  }

  protected get itemRole() {
    return 'menuitemradio'
  }

  protected render() {
    super.render()
    this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked))
  }
}

export class DropdownMenuShortcut extends SlotElement {
  protected styles = shortcutStyles
}

export class DropdownMenuSub extends SlotElement {
  protected styles = subStyles

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('pointerenter', this.openSubmenu)
    this.addEventListener('focusin', this.openSubmenu)
  }

  disconnectedCallback() {
    this.removeEventListener('pointerenter', this.openSubmenu)
    this.removeEventListener('focusin', this.openSubmenu)
  }

  private openSubmenu = () => {
    this.setAttribute('open', '')
    requestAnimationFrame(() => this.updatePlacement())
  }

  updatePlacement() {
    const trigger = this.querySelector('shadcx-dropdown-menu-sub-trigger')
    const content = this.querySelector('shadcx-dropdown-menu-sub-content')
    if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement)) return

    const triggerRect = trigger.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()
    const gap = 4
    const spaceRight = window.innerWidth - triggerRect.right - gap
    const spaceLeft = triggerRect.left - gap
    const shouldOpenLeft = contentRect.width > spaceRight && spaceLeft > spaceRight

    content.setAttribute('data-side', shouldOpenLeft ? 'left' : 'right')
  }
}

export class DropdownMenuSubTrigger extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${subTriggerStyles}</style>
      <button part="root" class="root" type="button" role="menuitem" aria-haspopup="menu">
        <span class="content"><slot></slot></span><span class="chevron">›</span>
      </button>
    \`
  }
}

export class DropdownMenuSubContent extends SlotElement {
  protected styles = subContentStyles
}

defineElement('shadcx-dropdown-menu', DropdownMenu)
defineElement('shadcx-dropdown-menu-trigger', DropdownMenuTrigger)
defineElement('shadcx-dropdown-menu-content', DropdownMenuContent)
defineElement('shadcx-dropdown-menu-group', DropdownMenuGroup)
defineElement('shadcx-dropdown-menu-label', DropdownMenuLabel)
defineElement('shadcx-dropdown-menu-separator', DropdownMenuSeparator)
defineElement('shadcx-dropdown-menu-item', DropdownMenuItem)
defineElement('shadcx-dropdown-menu-checkbox-item', DropdownMenuCheckboxItem)
defineElement('shadcx-dropdown-menu-radio-group', DropdownMenuRadioGroup)
defineElement('shadcx-dropdown-menu-radio-item', DropdownMenuRadioItem)
defineElement('shadcx-dropdown-menu-shortcut', DropdownMenuShortcut)
defineElement('shadcx-dropdown-menu-sub', DropdownMenuSub)
defineElement('shadcx-dropdown-menu-sub-trigger', DropdownMenuSubTrigger)
defineElement('shadcx-dropdown-menu-sub-content', DropdownMenuSubContent)

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-dropdown-menu': DropdownMenu
    'shadcx-dropdown-menu-trigger': DropdownMenuTrigger
    'shadcx-dropdown-menu-content': DropdownMenuContent
    'shadcx-dropdown-menu-group': DropdownMenuGroup
    'shadcx-dropdown-menu-label': DropdownMenuLabel
    'shadcx-dropdown-menu-separator': DropdownMenuSeparator
    'shadcx-dropdown-menu-item': DropdownMenuItem
    'shadcx-dropdown-menu-checkbox-item': DropdownMenuCheckboxItem
    'shadcx-dropdown-menu-radio-group': DropdownMenuRadioGroup
    'shadcx-dropdown-menu-radio-item': DropdownMenuRadioItem
    'shadcx-dropdown-menu-shortcut': DropdownMenuShortcut
    'shadcx-dropdown-menu-sub': DropdownMenuSub
    'shadcx-dropdown-menu-sub-trigger': DropdownMenuSubTrigger
    'shadcx-dropdown-menu-sub-content': DropdownMenuSubContent
  }
}
`,nt=`const preflight = \`
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
\`;
const rootStyles = \`
  \${preflight}
  :host {
    display: inline-block;
    position: relative;
    font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
  }
\`;
const triggerStyles = \`
  \${preflight}
  :host { display: inline-flex; }
  .root { display: inline-flex; cursor: pointer; }
\`;
const contentStyles = \`
  \${preflight}
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
\`;
const groupStyles = \`
  \${preflight}
  :host { display: block; }
  .root { display: grid; gap: 0.125rem; }
\`;
const labelStyles = \`
  \${preflight}
  :host { display: block; }
  .root { padding: 0.375rem 0.5rem; font-size: 0.8125rem; font-weight: 600; color: hsl(var(--foreground)); }
\`;
const separatorStyles = \`
  \${preflight}
  :host { display: block; }
  .root { height: 1px; margin: 0.25rem -0.25rem; background-color: hsl(var(--border)); }
\`;
const itemStyles = \`
  \${preflight}
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
\`;
const shortcutStyles = \`
  \${preflight}
  :host { margin-inline-start: auto; }
  .root { color: hsl(var(--muted-foreground)); font-size: 0.75rem; letter-spacing: 0.08em; }
\`;
const subStyles = \`
  \${preflight}
  :host {
    display: block;
    position: relative;
  }
  :host(:hover) ::slotted(shadcx-dropdown-menu-sub-content),
  :host(:focus-within) ::slotted(shadcx-dropdown-menu-sub-content),
  :host([open]) ::slotted(shadcx-dropdown-menu-sub-content) { display: block; }
\`;
const subTriggerStyles = \`
  \${itemStyles}
  .chevron { margin-inline-start: auto; color: hsl(var(--muted-foreground)); }
\`;
const subContentStyles = \`
  \${contentStyles}
  :host {
    display: none;
    inset-block-start: -0.25rem;
    inset-inline-start: calc(100% + 0.25rem);
  }
  :host([data-side='left']) { inset-inline-start: auto; inset-inline-end: calc(100% + 0.25rem); }
\`;
function defineElement(tag, element) {
    if (!customElements.get(tag))
        customElements.define(tag, element);
}
class SlotElement extends HTMLElement {
    partName = 'root';
    rootClassName = 'root';
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`<style>\${this.styles}</style><div part="\${this.partName}" class="\${this.rootClassName}"><slot></slot></div>\`;
    }
}
export class DropdownMenu extends HTMLElement {
    static observedAttributes = ['open'];
    get open() {
        return this.hasAttribute('open');
    }
    set open(value) {
        this.toggleAttribute('open', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        window.addEventListener('pointerdown', this.onWindowPointerDown);
        window.addEventListener('keydown', this.onWindowKeyDown);
        this.addEventListener('click', this.onClick);
        this.addEventListener('keydown', this.onKeyDown);
        this.render();
        this.syncContent();
    }
    disconnectedCallback() {
        window.removeEventListener('pointerdown', this.onWindowPointerDown);
        window.removeEventListener('keydown', this.onWindowKeyDown);
        this.removeEventListener('click', this.onClick);
        this.removeEventListener('keydown', this.onKeyDown);
    }
    attributeChangedCallback() {
        this.syncContent();
    }
    onWindowPointerDown = (event) => {
        if (!event.composedPath().includes(this))
            this.open = false;
    };
    onWindowKeyDown = (event) => {
        if (event.key === 'Escape')
            this.open = false;
    };
    onClick = (event) => {
        const path = event.composedPath();
        if (path.some((node) => node instanceof DropdownMenuTrigger)) {
            this.open = !this.open;
            return;
        }
        const item = path.find((node) => node instanceof DropdownMenuItem);
        if (item && !item.disabled)
            this.open = false;
    };
    onKeyDown = (event) => {
        const path = event.composedPath();
        const fromTrigger = path.some((node) => node instanceof DropdownMenuTrigger);
        if (fromTrigger && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
            event.preventDefault();
            this.open = true;
            this.focusMenuItem(event.key === 'ArrowUp' ? 'last' : 'first');
            return;
        }
        if (!this.open)
            return;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.focusMenuItem('next');
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.focusMenuItem('previous');
            return;
        }
        if (event.key === 'Home') {
            event.preventDefault();
            this.focusMenuItem('first');
            return;
        }
        if (event.key === 'End') {
            event.preventDefault();
            this.focusMenuItem('last');
        }
    };
    getMenuItems() {
        const selector = [
            'shadcx-dropdown-menu-item',
            'shadcx-dropdown-menu-checkbox-item',
            'shadcx-dropdown-menu-radio-item',
            'shadcx-dropdown-menu-sub-trigger',
        ].join(',');
        return Array.from(this.querySelectorAll(selector)).filter((item) => {
            if (item instanceof DropdownMenuItem && item.disabled)
                return false;
            return item instanceof HTMLElement;
        });
    }
    getItemButton(item) {
        return item.shadowRoot?.querySelector('button') ?? null;
    }
    focusMenuItem(position) {
        const items = this.getMenuItems();
        if (items.length === 0)
            return;
        const activeIndex = items.findIndex((item) => item.shadowRoot?.activeElement === this.getItemButton(item));
        let nextIndex = 0;
        if (position === 'last')
            nextIndex = items.length - 1;
        if (position === 'next')
            nextIndex = activeIndex >= 0 ? (activeIndex + 1) % items.length : 0;
        if (position === 'previous')
            nextIndex = activeIndex >= 0 ? (activeIndex - 1 + items.length) % items.length : items.length - 1;
        requestAnimationFrame(() => this.getItemButton(items[nextIndex])?.focus());
    }
    syncContent() {
        this.querySelectorAll('shadcx-dropdown-menu-content').forEach((content) => {
            content.toggleAttribute('data-open', this.open);
            content.setAttribute('data-align', content.getAttribute('align') ?? 'start');
        });
        if (this.open)
            requestAnimationFrame(() => this.updatePlacement());
    }
    updatePlacement() {
        const trigger = this.querySelector('shadcx-dropdown-menu-trigger');
        const content = this.querySelector('shadcx-dropdown-menu-content');
        if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement))
            return;
        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const gap = 4;
        const spaceBelow = window.innerHeight - triggerRect.bottom - gap;
        const spaceAbove = triggerRect.top - gap;
        const shouldOpenTop = contentRect.height > spaceBelow && spaceAbove > spaceBelow;
        content.setAttribute('data-side', shouldOpenTop ? 'top' : 'bottom');
        content.toggleAttribute('data-constrain', Math.max(spaceBelow, spaceAbove) < contentRect.height);
        this.querySelectorAll('shadcx-dropdown-menu-sub').forEach((sub) => {
            if (sub instanceof DropdownMenuSub)
                sub.updatePlacement();
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`<style>\${rootStyles}</style><slot></slot>\`;
    }
}
export class DropdownMenuTrigger extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`<style>\${triggerStyles}</style><span part="root" class="root"><slot></slot></span>\`;
    }
}
export class DropdownMenuContent extends SlotElement {
    static observedAttributes = ['align', 'data-open'];
    styles = contentStyles;
}
export class DropdownMenuGroup extends SlotElement {
    styles = groupStyles;
}
export class DropdownMenuLabel extends SlotElement {
    styles = labelStyles;
}
export class DropdownMenuSeparator extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`<style>\${separatorStyles}</style><div part="root" class="root" role="separator"></div>\`;
    }
}
export class DropdownMenuItem extends HTMLElement {
    static observedAttributes = ['variant', 'disabled'];
    get variant() {
        return this.getAttribute('variant') ?? 'default';
    }
    set variant(value) {
        this.setAttribute('variant', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    get indicator() {
        return '';
    }
    get itemRole() {
        return 'menuitem';
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${itemStyles}</style>
      <button part="root" class="root" type="button" role="\${this.itemRole}" data-variant="\${this.variant}" \${this.disabled ? 'disabled' : ''}>
        \${this.indicator ? \`<span class="indicator">\${this.indicator}</span>\` : ''}
        <span class="content"><slot></slot></span>
      </button>
    \`;
    }
}
export class DropdownMenuCheckboxItem extends DropdownMenuItem {
    static observedAttributes = ['variant', 'disabled', 'checked'];
    get checked() {
        return this.hasAttribute('checked');
    }
    set checked(value) {
        this.toggleAttribute('checked', value);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.onClick);
    }
    disconnectedCallback() {
        this.removeEventListener('click', this.onClick);
    }
    get indicator() {
        return this.checked ? '✓' : '';
    }
    get itemRole() {
        return 'menuitemcheckbox';
    }
    render() {
        super.render();
        this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked));
    }
    onClick = () => {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('checked-change', { detail: { checked: this.checked }, bubbles: true, composed: true }));
    };
}
export class DropdownMenuRadioGroup extends HTMLElement {
    static observedAttributes = ['value'];
    get value() {
        return this.getAttribute('value') ?? '';
    }
    set value(value) {
        if (value)
            this.setAttribute('value', value);
        else
            this.removeAttribute('value');
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.addEventListener('click', this.onClick);
        this.render();
        this.syncItems();
    }
    disconnectedCallback() {
        this.removeEventListener('click', this.onClick);
    }
    attributeChangedCallback() {
        this.syncItems();
    }
    onClick = (event) => {
        const item = event.composedPath().find((node) => node instanceof DropdownMenuRadioItem);
        if (!item || item.disabled)
            return;
        this.value = item.value;
        this.dispatchEvent(new CustomEvent('value-change', { detail: { value: this.value }, bubbles: true, composed: true }));
    };
    syncItems() {
        this.querySelectorAll('shadcx-dropdown-menu-radio-item').forEach((item) => {
            if (!(item instanceof DropdownMenuRadioItem))
                return;
            item.checked = item.value === this.value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`<style>\${groupStyles}</style><div part="root" class="root" role="group"><slot></slot></div>\`;
    }
}
export class DropdownMenuRadioItem extends DropdownMenuItem {
    static observedAttributes = ['variant', 'disabled', 'checked', 'value'];
    get value() {
        return this.getAttribute('value') ?? '';
    }
    set value(value) {
        this.setAttribute('value', value);
    }
    get checked() {
        return this.hasAttribute('checked');
    }
    set checked(value) {
        this.toggleAttribute('checked', value);
    }
    get indicator() {
        return this.checked ? '•' : '';
    }
    get itemRole() {
        return 'menuitemradio';
    }
    render() {
        super.render();
        this.shadowRoot?.querySelector('button')?.setAttribute('aria-checked', String(this.checked));
    }
}
export class DropdownMenuShortcut extends SlotElement {
    styles = shortcutStyles;
}
export class DropdownMenuSub extends SlotElement {
    styles = subStyles;
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('pointerenter', this.openSubmenu);
        this.addEventListener('focusin', this.openSubmenu);
    }
    disconnectedCallback() {
        this.removeEventListener('pointerenter', this.openSubmenu);
        this.removeEventListener('focusin', this.openSubmenu);
    }
    openSubmenu = () => {
        this.setAttribute('open', '');
        requestAnimationFrame(() => this.updatePlacement());
    };
    updatePlacement() {
        const trigger = this.querySelector('shadcx-dropdown-menu-sub-trigger');
        const content = this.querySelector('shadcx-dropdown-menu-sub-content');
        if (!(trigger instanceof HTMLElement) || !(content instanceof HTMLElement))
            return;
        const triggerRect = trigger.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const gap = 4;
        const spaceRight = window.innerWidth - triggerRect.right - gap;
        const spaceLeft = triggerRect.left - gap;
        const shouldOpenLeft = contentRect.width > spaceRight && spaceLeft > spaceRight;
        content.setAttribute('data-side', shouldOpenLeft ? 'left' : 'right');
    }
}
export class DropdownMenuSubTrigger extends HTMLElement {
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${subTriggerStyles}</style>
      <button part="root" class="root" type="button" role="menuitem" aria-haspopup="menu">
        <span class="content"><slot></slot></span><span class="chevron">›</span>
      </button>
    \`;
    }
}
export class DropdownMenuSubContent extends SlotElement {
    styles = subContentStyles;
}
defineElement('shadcx-dropdown-menu', DropdownMenu);
defineElement('shadcx-dropdown-menu-trigger', DropdownMenuTrigger);
defineElement('shadcx-dropdown-menu-content', DropdownMenuContent);
defineElement('shadcx-dropdown-menu-group', DropdownMenuGroup);
defineElement('shadcx-dropdown-menu-label', DropdownMenuLabel);
defineElement('shadcx-dropdown-menu-separator', DropdownMenuSeparator);
defineElement('shadcx-dropdown-menu-item', DropdownMenuItem);
defineElement('shadcx-dropdown-menu-checkbox-item', DropdownMenuCheckboxItem);
defineElement('shadcx-dropdown-menu-radio-group', DropdownMenuRadioGroup);
defineElement('shadcx-dropdown-menu-radio-item', DropdownMenuRadioItem);
defineElement('shadcx-dropdown-menu-shortcut', DropdownMenuShortcut);
defineElement('shadcx-dropdown-menu-sub', DropdownMenuSub);
defineElement('shadcx-dropdown-menu-sub-trigger', DropdownMenuSubTrigger);
defineElement('shadcx-dropdown-menu-sub-content', DropdownMenuSubContent);`,rt=t({DropdownMenuPage:()=>K,description:()=>it}),it=`Displays a menu of actions or functions triggered by a button.`,K=class extends P{constructor(...e){super(...e),this._density=`comfortable`}static{this.styles=c`
    :host { display: block; font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif); }
    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc, .note { color: hsl(var(--muted-foreground)); }
    .desc { margin-bottom: 1.5rem; }
    .note { font-size: 0.875rem; }
    .preview { border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1.5rem; display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 0; border-bottom-left-radius: 0; border-bottom-right-radius: 0; min-height: 12rem; }
    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 34rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); vertical-align: top; }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }
    td code { font-size: 0.75rem; }
    shadcx-dropdown-menu-content.wide { --shadcx-dropdown-menu-width: 14rem; }
    .avatar { width: 2.25rem; height: 2.25rem; border-radius: 999px; border: 1px solid hsl(var(--border)); background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--muted-foreground))); color: hsl(var(--primary-foreground)); display: inline-grid; place-items: center; font-weight: 700; cursor: pointer; }
    @media (max-width: 640px) { h1 { font-size: 1.375rem; } h2 { font-size: 1.125rem; } .preview { padding: 1rem; } pre { padding: 0.75rem; font-size: 0.75rem; } }
  `}_onDensityChange(e){let t=e;this._density=t.detail.value}render(){return E`
      <h1>Dropdown Menu</h1>
      <p class="desc">Displays a menu of actions or functions triggered by a button.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/dropdown-menu.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="dropdown-menu.ts" .source=${tt} .jsSource=${nt}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-dropdown-menu&gt;
  &lt;shadcx-dropdown-menu-trigger&gt;
    &lt;shadcx-button variant="outline"&gt;Open&lt;/shadcx-button&gt;
  &lt;/shadcx-dropdown-menu-trigger&gt;
  &lt;shadcx-dropdown-menu-content&gt;
    &lt;shadcx-dropdown-menu-label&gt;My Account&lt;/shadcx-dropdown-menu-label&gt;
    &lt;shadcx-dropdown-menu-item&gt;Profile&lt;/shadcx-dropdown-menu-item&gt;
    &lt;shadcx-dropdown-menu-item&gt;Billing&lt;/shadcx-dropdown-menu-item&gt;
  &lt;/shadcx-dropdown-menu-content&gt;
&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Open</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-label>My Account</shadcx-dropdown-menu-label>
            <shadcx-dropdown-menu-item>Profile</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>Billing</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-item>Team</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>Subscription</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu&gt;...&lt;/shadcx-dropdown-menu&gt;</code></pre>

      <h3>Shortcuts and Icons</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Actions</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content class="wide">
            <shadcx-dropdown-menu-item>
              <svg data-icon viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              New File
              <shadcx-dropdown-menu-shortcut>N</shadcx-dropdown-menu-shortcut>
            </shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item>
              <svg data-icon viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/></svg>
              Save
              <shadcx-dropdown-menu-shortcut>S</shadcx-dropdown-menu-shortcut>
            </shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-item variant="destructive">Delete</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-item&gt;
  &lt;svg data-icon&gt;...&lt;/svg&gt;
  New File
  &lt;shadcx-dropdown-menu-shortcut&gt;N&lt;/shadcx-dropdown-menu-shortcut&gt;
&lt;/shadcx-dropdown-menu-item&gt;</code></pre>

      <h3>Checkboxes</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">View</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-checkbox-item checked>Show Toolbar</shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-checkbox-item>Show Sidebar</shadcx-dropdown-menu-checkbox-item>
            <shadcx-dropdown-menu-checkbox-item checked>Show Status Bar</shadcx-dropdown-menu-checkbox-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-checkbox-item checked&gt;Show Toolbar&lt;/shadcx-dropdown-menu-checkbox-item&gt;</code></pre>

      <h3>Radio Group</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><shadcx-button variant="outline">Density: ${this._density}</shadcx-button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content>
            <shadcx-dropdown-menu-radio-group value=${this._density} @value-change=${this._onDensityChange}>
              <shadcx-dropdown-menu-radio-item value="compact">Compact</shadcx-dropdown-menu-radio-item>
              <shadcx-dropdown-menu-radio-item value="comfortable">Comfortable</shadcx-dropdown-menu-radio-item>
              <shadcx-dropdown-menu-radio-item value="spacious">Spacious</shadcx-dropdown-menu-radio-item>
            </shadcx-dropdown-menu-radio-group>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-radio-group value="comfortable"&gt;
  &lt;shadcx-dropdown-menu-radio-item value="compact"&gt;Compact&lt;/shadcx-dropdown-menu-radio-item&gt;
&lt;/shadcx-dropdown-menu-radio-group&gt;</code></pre>

      <h3>Submenu and Avatar</h3>
      <div class="preview">
        <shadcx-dropdown-menu>
          <shadcx-dropdown-menu-trigger><button class="avatar" type="button">DY</button></shadcx-dropdown-menu-trigger>
          <shadcx-dropdown-menu-content align="end" class="wide">
            <shadcx-dropdown-menu-label>dobrinyonkov</shadcx-dropdown-menu-label>
            <shadcx-dropdown-menu-item>Account</shadcx-dropdown-menu-item>
            <shadcx-dropdown-menu-sub>
              <shadcx-dropdown-menu-sub-trigger>Switch workspace</shadcx-dropdown-menu-sub-trigger>
              <shadcx-dropdown-menu-sub-content>
                <shadcx-dropdown-menu-item>Design</shadcx-dropdown-menu-item>
                <shadcx-dropdown-menu-item>Engineering</shadcx-dropdown-menu-item>
              </shadcx-dropdown-menu-sub-content>
            </shadcx-dropdown-menu-sub>
            <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
            <shadcx-dropdown-menu-item variant="destructive">Sign out</shadcx-dropdown-menu-item>
          </shadcx-dropdown-menu-content>
        </shadcx-dropdown-menu>
      </div>
      <pre><code>&lt;shadcx-dropdown-menu-sub&gt;
  &lt;shadcx-dropdown-menu-sub-trigger&gt;Switch workspace&lt;/shadcx-dropdown-menu-sub-trigger&gt;
  &lt;shadcx-dropdown-menu-sub-content&gt;...&lt;/shadcx-dropdown-menu-sub-content&gt;
&lt;/shadcx-dropdown-menu-sub&gt;</code></pre>

      <p class="note">Current shadcx scope: uncontrolled/open attribute, labels, groups, separators, items, destructive items, checkbox items, radio groups, shortcuts, basic submenus, outside click, and Escape dismissal. Radix-only features such as portals, collision handling, modal focus trapping, full roving tabindex, and typeahead are not implemented in this first vanilla port.</p>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Element</th><th>Prop</th><th>Type / Default</th></tr></thead>
          <tbody>
            <tr><td><code>shadcx-dropdown-menu</code></td><td><code>open</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-content</code></td><td><code>align</code></td><td><code>"start" | "end"</code> / <code>"start"</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-item</code></td><td><code>variant</code></td><td><code>"default" | "destructive"</code> / <code>"default"</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-item</code></td><td><code>disabled</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-checkbox-item</code></td><td><code>checked</code></td><td><code>boolean</code> / <code>false</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-radio-group</code></td><td><code>value</code></td><td><code>string</code> / <code>""</code></td></tr>
            <tr><td><code>shadcx-dropdown-menu-radio-item</code></td><td><code>value</code></td><td><code>string</code> / <code>""</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Events</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Event</th><th>Element</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td><code>checked-change</code></td><td><code>shadcx-dropdown-menu-checkbox-item</code></td><td><code>{ checked: boolean }</code></td></tr>
            <tr><td><code>value-change</code></td><td><code>shadcx-dropdown-menu-radio-group</code></td><td><code>{ value: string }</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Part</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>root</code></td><td>The internal wrapper/control for each dropdown menu element.</td></tr>
          </tbody>
        </table>
      </div>
    `}};R([L()],K.prototype,`_density`,void 0),K=R([F(`dropdown-menu-page`)],K);var at=t({FormPlaygroundPage:()=>q,description:()=>ot}),ot=`A dedicated playground for testing form components together in one interactive page.`,st=[`Lit`,`React`,`Vue`,`Svelte`,`Solid`,`Angular`,`Astro`],ct=[`Email`,`Slack`,`Discord`,`Phone`],q=class extends P{constructor(...e){super(...e),this._accepted=!1,this._newsletter=!0,this._framework=`Lit`,this._contactChannels=[`Email`],this._values={},this._notes=``,this._submitted=!1,this._message=`No submission yet.`,this._events=[`Playground ready`]}static{this.styles=c`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .hero {
      display: grid;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      width: fit-content;
      border: 1px solid hsl(var(--border));
      border-radius: 999px;
      padding: 0.25rem 0.625rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3,
    p {
      margin: 0;
    }

    h1 {
      max-width: 48rem;
      color: hsl(var(--foreground));
      font-size: clamp(2rem, 6vw, 4.75rem);
      font-weight: 800;
      letter-spacing: -0.07em;
      line-height: 0.9;
    }

    .desc {
      max-width: 42rem;
      color: hsl(var(--muted-foreground));
      font-size: 1rem;
      line-height: 1.7;
    }

    .grid {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
      gap: 1rem;
      align-items: start;
    }

    .panel {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 8px);
      background:
        radial-gradient(circle at top left, hsl(var(--primary) / 0.1), transparent 18rem),
        hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 20px 60px hsl(var(--foreground) / 0.08);
      overflow: hidden;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      border-bottom: 1px solid hsl(var(--border));
      padding: 1rem;
    }

    .panel-title {
      font-size: 1rem;
      font-weight: 700;
      color: hsl(var(--foreground));
    }

    .panel-note {
      margin-top: 0.2rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .status {
      align-self: start;
      border-radius: 999px;
      background: hsl(var(--primary) / 0.1);
      color: hsl(var(--primary));
      padding: 0.25rem 0.625rem;
      font-size: 0.75rem;
      font-weight: 700;
    }

    form {
      display: grid;
      gap: 1rem;
      padding: 1rem;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .field,
    fieldset {
      display: grid;
      gap: 0.45rem;
      min-width: 0;
    }

    fieldset {
      border: 1px dashed hsl(var(--border));
      border-radius: calc(var(--radius) + 2px);
      padding: 0.875rem;
    }

    legend,
    label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 650;
    }

    .hint,
    .error {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
      line-height: 1.45;
    }

    .error {
      color: hsl(var(--destructive));
    }

    .check-row {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 0.625rem;
      align-items: start;
    }

    .check-copy {
      display: grid;
      gap: 0.15rem;
    }

    .actions,
    .button-rack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .side {
      display: grid;
      gap: 1rem;
      position: sticky;
      top: 4rem;
    }

    .readout {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 8px);
      background-color: hsl(var(--card));
      padding: 1rem;
    }

    .readout h2 {
      color: hsl(var(--foreground));
      font-size: 0.95rem;
      font-weight: 750;
      margin-bottom: 0.75rem;
    }

    dl {
      display: grid;
      gap: 0.5rem;
      margin: 0;
    }

    .kv {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      border-bottom: 1px solid hsl(var(--border));
      padding-bottom: 0.5rem;
      font-size: 0.8125rem;
    }

    .kv:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    dt {
      color: hsl(var(--muted-foreground));
    }

    dd {
      margin: 0;
      color: hsl(var(--foreground));
      font-weight: 650;
      text-align: right;
    }

    .log {
      display: grid;
      gap: 0.35rem;
      color: hsl(var(--muted-foreground));
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.75rem;
      line-height: 1.5;
    }

    @media (max-width: 980px) {
      .grid,
      .fields {
        grid-template-columns: 1fr;
      }

      .side {
        position: static;
      }
    }
  `}_onInput(e,t){let n=t.composedPath().find(e=>e instanceof HTMLInputElement);this._values={...this._values,[e]:n?.value??``}}_onNotes(e){let t=e.composedPath().find(e=>e instanceof HTMLTextAreaElement);this._notes=t?.value??``}_log(e){this._events=[e,...this._events].slice(0,5)}_onAccepted(e){this._accepted=e.detail.checked,this._log(`checkbox accepted: ${String(this._accepted)}`)}_onNewsletter(e){this._newsletter=e.detail.checked,this._log(`checkbox newsletter: ${String(this._newsletter)}`)}_onFramework(e){this._framework=e.detail.value,this._log(`combobox framework: ${this._framework||`empty`}`)}_onChannels(e){this._contactChannels=e.detail.value,this._log(`combobox channels: ${this._contactChannels.join(`, `)||`none`}`)}_validate(){let e=!this._values.name||!this._values.email||!this._accepted;for(let e of[`name`,`email`])this.renderRoot.querySelector(`shadcx-input[data-name="${e}"]`)?.toggleAttribute(`aria-invalid`,!this._values[e]);return this.renderRoot.querySelector(`shadcx-checkbox[data-name="accepted"]`)?.toggleAttribute(`aria-invalid`,!this._accepted),!e}_submit(e){if(e?.preventDefault(),this._submitted=!0,!this._validate()){this._message=`Please complete the required fields and accept the terms.`,this._log(`submit blocked: validation failed`);return}this._message=`Submitted ${this._values.name} using ${this._framework}.`,this._log(`submit passed`)}_reset(){for(let e of this.renderRoot.querySelectorAll(`shadcx-input`)){let t=e.shadowRoot?.querySelector(`input`);t&&(t.value=``),e.removeAttribute(`aria-invalid`)}let e=this.renderRoot.querySelector(`shadcx-textarea`)?.shadowRoot?.querySelector(`textarea`);e&&(e.value=``),this._accepted=!1,this._newsletter=!0,this._framework=`Lit`,this._contactChannels=[`Email`],this._values={},this._notes=``,this._submitted=!1,this._message=`Form reset.`,this._log(`reset complete`)}render(){let e=this._submitted&&!this._accepted;return E`
      <section class="hero">
        <span class="eyebrow">Dedicated Playground</span>
        <h1>Form support lab for shadcx components.</h1>
        <p class="desc">
          Use this page to verify text inputs, password/search/file/date inputs,
          textarea, checkboxes, combobox selection, buttons, reset behavior, and
          simple validation in one place.
        </p>
      </section>

      <div class="grid">
        <section class="panel" aria-label="Form playground">
          <div class="panel-header">
            <div>
              <h2 class="panel-title">Account intake</h2>
              <p class="panel-note">Required fields toggle invalid styling on submit.</p>
            </div>
            <span class="status">${this._message}</span>
          </div>

          <form @submit=${this._submit} novalidate>
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <shadcx-input data-name="name" id="name" placeholder="Ada Lovelace" required @input=${e=>this._onInput(`name`,e)}></shadcx-input>
                <span class="hint">Text input with required validation.</span>
              </div>

              <div class="field">
                <label for="email">Email</label>
                <shadcx-input data-name="email" id="email" type="email" placeholder="ada@example.com" required @input=${e=>this._onInput(`email`,e)}></shadcx-input>
                <span class="hint">Email input type and invalid state support.</span>
              </div>

              <div class="field">
                <label for="password">Password</label>
                <shadcx-input data-name="password" id="password" type="password" placeholder="••••••••" @input=${e=>this._onInput(`password`,e)}></shadcx-input>
              </div>

              <div class="field">
                <label for="search">Search</label>
                <shadcx-input data-name="search" id="search" type="search" placeholder="Search components" @input=${e=>this._onInput(`search`,e)}></shadcx-input>
              </div>

              <div class="field">
                <label for="date">Launch date</label>
                <shadcx-input data-name="date" id="date" type="date" @input=${e=>this._onInput(`date`,e)}></shadcx-input>
              </div>

              <div class="field">
                <label for="file">Attachment</label>
                <shadcx-input data-name="file" id="file" type="file" @input=${e=>this._onInput(`file`,e)}></shadcx-input>
              </div>
            </div>

            <div class="field">
              <label for="notes">Notes</label>
              <shadcx-textarea id="notes" rows="5" placeholder="Describe the form scenario to test..." @input=${this._onNotes}></shadcx-textarea>
            </div>

            <div class="fields">
              <div class="field">
                <label for="framework">Framework combobox</label>
                <shadcx-combobox
                  id="framework"
                  placeholder="Pick a framework"
                  show-clear
                  auto-highlight
                  value=${this._framework}
                  .items=${st}
                  @value-change=${this._onFramework}
                ></shadcx-combobox>
              </div>

              <div class="field">
                <label for="channels">Multi-select combobox</label>
                <shadcx-combobox
                  id="channels"
                  placeholder="Pick channels"
                  multiple
                  show-clear
                  auto-highlight
                  .items=${ct}
                  .values=${this._contactChannels}
                  @value-change=${this._onChannels}
                ></shadcx-combobox>
              </div>
            </div>

            <fieldset>
              <legend>Checkbox support</legend>
              <div class="check-row">
                <shadcx-checkbox
                  data-name="accepted"
                  ?checked=${this._accepted}
                  @checked-change=${this._onAccepted}
                ></shadcx-checkbox>
                <div class="check-copy">
                  <label>Accept terms</label>
                  <span class=${e?`error`:`hint`}>${e?`Required before submit.`:`Click or press Enter on the checkbox.`}</span>
                </div>
              </div>
              <div class="check-row">
                <shadcx-checkbox ?checked=${this._newsletter} @checked-change=${this._onNewsletter}></shadcx-checkbox>
                <div class="check-copy">
                  <label>Send product updates</label>
                  <span class="hint">Optional checked state starts enabled.</span>
                </div>
              </div>
              <div class="check-row">
                <shadcx-checkbox indeterminate></shadcx-checkbox>
                <div class="check-copy">
                  <label>Indeterminate example</label>
                  <span class="hint">First activation resolves to checked.</span>
                </div>
              </div>
            </fieldset>

            <div class="actions">
              <shadcx-button @click=${this._submit}>Submit playground</shadcx-button>
              <shadcx-button variant="outline" @click=${this._reset}>Reset</shadcx-button>
              <shadcx-button variant="ghost" @click=${()=>this._log(`ghost button clicked`)}>Ghost action</shadcx-button>
            </div>
          </form>
        </section>

        <aside class="side">
          <section class="readout" aria-live="polite">
            <h2>Live State</h2>
            <dl>
              <div class="kv"><dt>Framework</dt><dd>${this._framework||`None`}</dd></div>
              <div class="kv"><dt>Channels</dt><dd>${this._contactChannels.join(`, `)||`None`}</dd></div>
              <div class="kv"><dt>Terms</dt><dd>${this._accepted?`Accepted`:`Missing`}</dd></div>
              <div class="kv"><dt>Newsletter</dt><dd>${this._newsletter?`On`:`Off`}</dd></div>
              <div class="kv"><dt>Notes</dt><dd>${this._notes||`Empty`}</dd></div>
            </dl>
          </section>

          <section class="readout">
            <h2>Button Variants</h2>
            <div class="button-rack">
              <shadcx-button size="xs">XS</shadcx-button>
              <shadcx-button size="sm" variant="secondary">Small</shadcx-button>
              <shadcx-button variant="outline">Outline</shadcx-button>
              <shadcx-button variant="destructive">Delete</shadcx-button>
              <shadcx-button variant="link">Link</shadcx-button>
              <shadcx-button disabled>Disabled</shadcx-button>
            </div>
          </section>

          <section class="readout">
            <h2>Event Log</h2>
            <div class="log">${this._events.map(e=>E`<span>${e}</span>`)}</div>
          </section>
        </aside>
      </div>
    `}};R([L()],q.prototype,`_accepted`,void 0),R([L()],q.prototype,`_newsletter`,void 0),R([L()],q.prototype,`_framework`,void 0),R([L()],q.prototype,`_contactChannels`,void 0),R([L()],q.prototype,`_values`,void 0),R([L()],q.prototype,`_notes`,void 0),R([L()],q.prototype,`_submitted`,void 0),R([L()],q.prototype,`_message`,void 0),R([L()],q.prototype,`_events`,void 0),q=R([F(`form-playground-page`)],q);var lt=`const styles = \`
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
    width: 100%;
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    font-size: 1rem;
    color: hsl(var(--foreground));
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root::placeholder { color: hsl(var(--muted-foreground)); }
  .root:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  .root:disabled { cursor: not-allowed; opacity: 0.5; }
  .root::file-selector-button {
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(var(--foreground));
  }
  .root[aria-invalid] { border-color: hsl(var(--destructive)); }

  @media (min-width: 768px) {
    .root { font-size: 0.875rem; }
  }
\`

export class Input extends HTMLElement {
  static observedAttributes = ['type', 'placeholder', 'disabled', 'required', 'readonly', 'aria-invalid']

  get type() {
    return this.getAttribute('type') ?? 'text'
  }

  set type(value: string) {
    this.setAttribute('type', value)
  }

  get placeholder() {
    return this.getAttribute('placeholder') ?? ''
  }

  set placeholder(value: string) {
    this.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  get required() {
    return this.hasAttribute('required')
  }

  set required(value: boolean) {
    this.toggleAttribute('required', value)
  }

  get readonly() {
    return this.hasAttribute('readonly')
  }

  set readonly(value: boolean) {
    this.toggleAttribute('readonly', value)
  }

  get ariaInvalid() {
    return this.getAttribute('aria-invalid')
  }

  set ariaInvalid(value: string | null) {
    if (value === null) this.removeAttribute('aria-invalid')
    else this.setAttribute('aria-invalid', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <input
        part="root"
        class="root"
        type="\${this.type}"
        placeholder="\${this.placeholder}"
        \${this.disabled ? 'disabled' : ''}
        \${this.required ? 'required' : ''}
        \${this.readonly ? 'readonly' : ''}
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
      >
    \`
  }
}

if (!customElements.get('shadcx-input')) {
  customElements.define('shadcx-input', Input)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-input': Input
  }
}
`,ut=`const styles = \`
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
    width: 100%;
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid hsl(var(--input));
    background-color: hsl(var(--background));
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    font-size: 1rem;
    color: hsl(var(--foreground));
    transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }

  .root::placeholder { color: hsl(var(--muted-foreground)); }
  .root:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
  }
  .root:disabled { cursor: not-allowed; opacity: 0.5; }
  .root::file-selector-button {
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(var(--foreground));
  }
  .root[aria-invalid] { border-color: hsl(var(--destructive)); }

  @media (min-width: 768px) {
    .root { font-size: 0.875rem; }
  }
\`;
export class Input extends HTMLElement {
    static observedAttributes = ['type', 'placeholder', 'disabled', 'required', 'readonly', 'aria-invalid'];
    get type() {
        return this.getAttribute('type') ?? 'text';
    }
    set type(value) {
        this.setAttribute('type', value);
    }
    get placeholder() {
        return this.getAttribute('placeholder') ?? '';
    }
    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    get required() {
        return this.hasAttribute('required');
    }
    set required(value) {
        this.toggleAttribute('required', value);
    }
    get readonly() {
        return this.hasAttribute('readonly');
    }
    set readonly(value) {
        this.toggleAttribute('readonly', value);
    }
    get ariaInvalid() {
        return this.getAttribute('aria-invalid');
    }
    set ariaInvalid(value) {
        if (value === null)
            this.removeAttribute('aria-invalid');
        else
            this.setAttribute('aria-invalid', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <input
        part="root"
        class="root"
        type="\${this.type}"
        placeholder="\${this.placeholder}"
        \${this.disabled ? 'disabled' : ''}
        \${this.required ? 'required' : ''}
        \${this.readonly ? 'readonly' : ''}
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
      >
    \`;
    }
}
if (!customElements.get('shadcx-input')) {
    customElements.define('shadcx-input', Input);
}`,dt=t({InputPage:()=>J,description:()=>ft}),ft=`A text input component for forms and user data entry with built-in styling and accessibility features.`,J=class extends P{static{this.styles=c`
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
  `}render(){return E`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/input.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="input.ts" .source=${lt} .jsSource=${ut}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-input placeholder="Enter text"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-input placeholder="Enter text"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Enter text"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Types</h3>
      <div class="preview">
        <shadcx-input type="text" placeholder="Text"></shadcx-input>
        <shadcx-input type="email" placeholder="Email"></shadcx-input>
        <shadcx-input type="password" placeholder="Password"></shadcx-input>
        <shadcx-input type="search" placeholder="Search"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input type="text" placeholder="Text"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="email" placeholder="Email"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="password" placeholder="Password"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="search" placeholder="Search"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-input placeholder="Disabled" disabled></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Disabled" disabled&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <shadcx-input placeholder="Error" aria-invalid="true"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Error" aria-invalid="true"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>File</h3>
      <div class="preview">
        <shadcx-input type="file"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input type="file"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Required</h3>
      <div class="preview">
        <shadcx-input placeholder="Required field" required></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Required field" required&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="inline-row">
          <shadcx-input type="search" placeholder="Search..."></shadcx-input>
          <shadcx-button variant="outline">Search</shadcx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; gap: 0.5rem;"&gt;
  &lt;shadcx-input type="search" placeholder="Search..."&gt;&lt;/shadcx-input&gt;
  &lt;shadcx-button variant="outline"&gt;Search&lt;/shadcx-button&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type</code></td>
              <td><code>string</code></td>
              <td><code>"text"</code></td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td><code>string</code></td>
              <td><code>""</code></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>required</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>aria-invalid</code></td>
              <td><code>string</code></td>
              <td><code>—</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>root</code></td>
              <td>The <code>&lt;input&gt;</code> element</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};J=R([F(`input-page`)],J);var pt=t({OverviewPage:()=>mt}),mt=class extends P{static{this.styles=c`
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
      h1 {
        font-size: 1.375rem;
      }
      h2 {
        font-size: 1.125rem;
      }
      .lead {
        font-size: 1rem;
      }
      pre {
        padding: 0.75rem;
        font-size: 0.75rem;
      }
      .cards {
        grid-template-columns: 1fr;
      }
    }
  `}render(){return E`
      <h1>shadcx</h1>
      <p class="lead">
        shadcn/ui reimagined as Web Components. No framework lock-in, no
        Tailwind CSS &mdash; just reusable components that work anywhere.
      </p>

      <h2>Getting Started</h2>
      <p>
        Load the library via CDN and start using the components in any HTML
        page:
      </p>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Components</h2>
      <div class="cards">
        ${Pt.map(e=>E`
            <a
              class="card"
              href="#/${e.hash}"
              @click=${t=>{t.preventDefault(),location.hash=e.hash}}
            >
              <h3>${e.title}</h3>
              <p>${e.description}</p>
            </a>
          `)}
      </div>
    `}};mt=R([F(`overview-page`)],mt);var ht=`const styles = \`
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
\`

export class Textarea extends HTMLElement {
  static observedAttributes = [
    'placeholder',
    'value',
    'rows',
    'disabled',
    'required',
    'readonly',
    'aria-invalid',
  ]

  private _textarea: HTMLTextAreaElement | null = null

  get placeholder() {
    return this.getAttribute('placeholder') ?? ''
  }

  set placeholder(value: string) {
    this.setAttribute('placeholder', value)
  }

  get value() {
    return this._textarea?.value ?? this.getAttribute('value') ?? ''
  }

  set value(value: string) {
    this.setAttribute('value', value)
    if (this._textarea) this._textarea.value = value
  }

  get rows() {
    return this.getAttribute('rows') ?? '3'
  }

  set rows(value: string) {
    this.setAttribute('rows', value)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    this.toggleAttribute('disabled', value)
  }

  get required() {
    return this.hasAttribute('required')
  }

  set required(value: boolean) {
    this.toggleAttribute('required', value)
  }

  get readonly() {
    return this.hasAttribute('readonly')
  }

  set readonly(value: boolean) {
    this.toggleAttribute('readonly', value)
  }

  get ariaInvalid() {
    return this.getAttribute('aria-invalid')
  }

  set ariaInvalid(value: string | null) {
    if (value === null) this.removeAttribute('aria-invalid')
    else this.setAttribute('aria-invalid', value)
  }

  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' })
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  private render() {
    if (!this.shadowRoot) return
    const value = this.value
    this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <textarea
        part="root"
        class="root"
        placeholder="\${this.placeholder}"
        rows="\${this.rows}"
        \${this.disabled ? 'disabled' : ''}
        \${this.required ? 'required' : ''}
        \${this.readonly ? 'readonly' : ''}
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
      ></textarea>
    \`
    this._textarea = this.shadowRoot.querySelector('textarea')
    if (!this._textarea) return
    this._textarea.value = value
  }
}

if (!customElements.get('shadcx-textarea')) {
  customElements.define('shadcx-textarea', Textarea)
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcx-textarea': Textarea
  }
}
`,gt=`const styles = \`
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
\`;
export class Textarea extends HTMLElement {
    static observedAttributes = [
        'placeholder',
        'value',
        'rows',
        'disabled',
        'required',
        'readonly',
        'aria-invalid',
    ];
    _textarea = null;
    get placeholder() {
        return this.getAttribute('placeholder') ?? '';
    }
    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }
    get value() {
        return this._textarea?.value ?? this.getAttribute('value') ?? '';
    }
    set value(value) {
        this.setAttribute('value', value);
        if (this._textarea)
            this._textarea.value = value;
    }
    get rows() {
        return this.getAttribute('rows') ?? '3';
    }
    set rows(value) {
        this.setAttribute('rows', value);
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    get required() {
        return this.hasAttribute('required');
    }
    set required(value) {
        this.toggleAttribute('required', value);
    }
    get readonly() {
        return this.hasAttribute('readonly');
    }
    set readonly(value) {
        this.toggleAttribute('readonly', value);
    }
    get ariaInvalid() {
        return this.getAttribute('aria-invalid');
    }
    set ariaInvalid(value) {
        if (value === null)
            this.removeAttribute('aria-invalid');
        else
            this.setAttribute('aria-invalid', value);
    }
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        const value = this.value;
        this.shadowRoot.innerHTML = \`
      <style>\${styles}</style>
      <textarea
        part="root"
        class="root"
        placeholder="\${this.placeholder}"
        rows="\${this.rows}"
        \${this.disabled ? 'disabled' : ''}
        \${this.required ? 'required' : ''}
        \${this.readonly ? 'readonly' : ''}
        \${this.ariaInvalid ? \`aria-invalid="\${this.ariaInvalid}"\` : ''}
      ></textarea>
    \`;
        this._textarea = this.shadowRoot.querySelector('textarea');
        if (!this._textarea)
            return;
        this._textarea.value = value;
    }
}
if (!customElements.get('shadcx-textarea')) {
    customElements.define('shadcx-textarea', Textarea);
}`,_t=t({TextareaPage:()=>yt,description:()=>vt}),vt=`Displays a form textarea or a component that looks like a textarea.`,yt=class extends P{static{this.styles=c`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    h1 { font-size: 1.75rem; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 0.5rem; color: hsl(var(--foreground)); }
    h2 { font-size: 1.25rem; font-weight: 600; margin: 2.25rem 0 0.75rem; color: hsl(var(--foreground)); }
    h3 { font-size: 1rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: hsl(var(--foreground)); }
    p { font-size: 0.9375rem; line-height: 1.65; color: hsl(var(--foreground)); margin: 0 0 0.75rem; }
    .desc { color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }

    .preview {
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .preview + pre { margin-top: 0; border-top-left-radius: 0; border-top-right-radius: 0; border-top: none; }
    pre { background-color: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: calc(var(--radius) - 2px); padding: 1rem; overflow-x: auto; font-size: 0.8125rem; line-height: 1.6; margin: 0 0 1.5rem; }
    code { font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace); font-size: 0.8125rem; }
    :not(pre) > code { background-color: hsl(var(--muted)); padding: 0.15rem 0.4rem; border-radius: calc(var(--radius) - 4px); }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 1.5rem; }
    table { width: 100%; min-width: 24rem; font-size: 0.875rem; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
    th { font-weight: 600; color: hsl(var(--foreground)); font-size: 0.8125rem; }
    td { color: hsl(var(--muted-foreground)); font-size: 0.8125rem; }
    td:first-child { color: hsl(var(--foreground)); font-weight: 500; }
    td code { font-size: 0.75rem; }

    .field {
      display: grid;
      gap: 0.375rem;
      width: min(100%, 20rem);
    }

    .field label {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
    }

    .field .help {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.45;
      margin: 0;
    }

    .field[data-disabled] label,
    .field[data-disabled] .help {
      opacity: 0.5;
    }

    .field[data-invalid] label,
    .field[data-invalid] .help {
      color: hsl(var(--destructive));
    }

    .stack {
      display: grid;
      gap: 0.5rem;
      width: min(100%, 20rem);
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
    }
  `}render(){return E`
      <h1>Textarea</h1>
      <p class="desc">Displays a form textarea or a component that looks like a textarea.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/theme.css"&gt;
&lt;script type="module" src="https://dobrinyonkov.github.io/shadcx/assets/textarea.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Copy Paste Source</h2>
      <source-code-block filename="textarea.ts" .source=${ht} .jsSource=${gt}></source-code-block>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-textarea placeholder="Type your message here."&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-textarea placeholder="Type your message here."></shadcx-textarea>
      </div>
      <pre><code>&lt;shadcx-textarea placeholder="Type your message here."&gt;&lt;/shadcx-textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <label for="message">Message</label>
          <shadcx-textarea id="message" placeholder="Tell us what you need help with."></shadcx-textarea>
          <p class="help">Your message will be sent to the support team.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field"&gt;
  &lt;label for="message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="message" placeholder="Tell us what you need help with."&gt;&lt;/shadcx-textarea&gt;
  &lt;p&gt;Your message will be sent to the support team.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <label for="disabled-message">Message</label>
          <shadcx-textarea id="disabled-message" placeholder="Disabled textarea" disabled></shadcx-textarea>
          <p class="help">This field is currently unavailable.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-disabled&gt;
  &lt;label for="disabled-message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="disabled-message" disabled&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <label for="invalid-message">Message</label>
          <shadcx-textarea id="invalid-message" placeholder="Type at least 10 characters." aria-invalid="true"></shadcx-textarea>
          <p class="help">Message must be at least 10 characters.</p>
        </div>
      </div>
      <pre><code>&lt;div class="field" data-invalid&gt;
  &lt;label for="invalid-message"&gt;Message&lt;/label&gt;
  &lt;shadcx-textarea id="invalid-message" aria-invalid="true"&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="stack">
          <shadcx-textarea placeholder="Write a comment..."></shadcx-textarea>
          <shadcx-button>Submit</shadcx-button>
        </div>
      </div>
      <pre><code>&lt;div style="display: grid; gap: 0.5rem;"&gt;
  &lt;shadcx-textarea placeholder="Write a comment..."&gt;&lt;/shadcx-textarea&gt;
  &lt;shadcx-button&gt;Submit&lt;/shadcx-button&gt;
&lt;/div&gt;</code></pre>

      <h3>RTL</h3>
      <div class="preview" dir="rtl">
        <shadcx-textarea placeholder="اكتب رسالتك هنا"></shadcx-textarea>
      </div>
      <pre><code>&lt;div dir="rtl"&gt;
  &lt;shadcx-textarea placeholder="اكتب رسالتك هنا"&gt;&lt;/shadcx-textarea&gt;
&lt;/div&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td></tr>
            <tr><td><code>rows</code></td><td><code>string</code></td><td><code>"3"</code></td></tr>
            <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>aria-invalid</code></td><td><code>string</code></td><td><code>—</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3>CSS Parts</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Part</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>root</code></td><td>The <code>&lt;textarea&gt;</code> element</td></tr>
          </tbody>
        </table>
      </div>
    `}};yt=R([F(`textarea-page`)],yt);var bt=t({ThemeGeneratorPage:()=>X}),xt=`font-sans.font-mono.radius.background.foreground.card.card-foreground.popover.popover-foreground.primary.primary-foreground.secondary.secondary-foreground.muted.muted-foreground.accent.accent-foreground.destructive.destructive-foreground.border.input.ring.chart-1.chart-2.chart-3.chart-4.chart-5`.split(`.`),St={"font-sans":`'Inter', system-ui, -apple-system, sans-serif`,"font-mono":`'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`,radius:`0.5rem`,background:`0 0% 100%`,foreground:`0 0% 3.9%`,card:`0 0% 100%`,"card-foreground":`0 0% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`0 0% 3.9%`,primary:`0 0% 9%`,"primary-foreground":`0 0% 98%`,secondary:`0 0% 96.1%`,"secondary-foreground":`0 0% 9%`,muted:`0 0% 96.1%`,"muted-foreground":`0 0% 45.1%`,accent:`0 0% 96.1%`,"accent-foreground":`0 0% 9%`,destructive:`0 84.2% 60.2%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 89.8%`,input:`0 0% 89.8%`,ring:`0 0% 3.9%`,"chart-1":`12 76% 61%`,"chart-2":`173 58% 39%`,"chart-3":`197 37% 24%`,"chart-4":`43 74% 66%`,"chart-5":`27 87% 67%`},Ct={...St,background:`0 0% 3.9%`,foreground:`0 0% 98%`,card:`0 0% 3.9%`,"card-foreground":`0 0% 98%`,popover:`0 0% 3.9%`,"popover-foreground":`0 0% 98%`,primary:`0 0% 98%`,"primary-foreground":`0 0% 9%`,secondary:`0 0% 14.9%`,"secondary-foreground":`0 0% 98%`,muted:`0 0% 14.9%`,"muted-foreground":`0 0% 63.9%`,accent:`0 0% 14.9%`,"accent-foreground":`0 0% 98%`,destructive:`0 62.8% 30.6%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 14.9%`,input:`0 0% 14.9%`,ring:`0 0% 83.1%`,"chart-1":`220 70% 50%`,"chart-2":`160 60% 45%`,"chart-3":`30 80% 55%`,"chart-4":`280 65% 60%`,"chart-5":`340 75% 55%`},Y={Neutral:{},Zinc:{foreground:`240 10% 3.9%`,"card-foreground":`240 10% 3.9%`,"popover-foreground":`240 10% 3.9%`,secondary:`240 4.8% 95.9%`,"secondary-foreground":`240 5.9% 10%`,muted:`240 4.8% 95.9%`,"muted-foreground":`240 3.8% 46.1%`,accent:`240 4.8% 95.9%`,"accent-foreground":`240 5.9% 10%`,border:`240 5.9% 90%`,input:`240 5.9% 90%`},Slate:{foreground:`222.2 84% 4.9%`,"card-foreground":`222.2 84% 4.9%`,"popover-foreground":`222.2 84% 4.9%`,secondary:`210 40% 96.1%`,"secondary-foreground":`222.2 47.4% 11.2%`,muted:`210 40% 96.1%`,"muted-foreground":`215.4 16.3% 46.9%`,accent:`210 40% 96.1%`,"accent-foreground":`222.2 47.4% 11.2%`,border:`214.3 31.8% 91.4%`,input:`214.3 31.8% 91.4%`},Stone:{foreground:`20 14.3% 4.1%`,"card-foreground":`20 14.3% 4.1%`,"popover-foreground":`20 14.3% 4.1%`,secondary:`60 4.8% 95.9%`,"secondary-foreground":`24 9.8% 10%`,muted:`60 4.8% 95.9%`,"muted-foreground":`25 5.3% 44.7%`,accent:`60 4.8% 95.9%`,"accent-foreground":`24 9.8% 10%`,border:`20 5.9% 90%`,input:`20 5.9% 90%`}},wt={Default:{},Nova:{primary:`263 70% 50%`,"primary-foreground":`0 0% 98%`,accent:`263 48% 95%`,"accent-foreground":`263 64% 22%`,ring:`263 70% 50%`,radius:`0.75rem`,"chart-1":`263 70% 50%`,"chart-2":`291 64% 42%`},Grove:{primary:`152 56% 36%`,"primary-foreground":`0 0% 98%`,accent:`152 42% 94%`,"accent-foreground":`153 70% 18%`,ring:`152 56% 36%`,radius:`0.625rem`,"chart-1":`152 56% 36%`,"chart-2":`94 50% 42%`},Ember:{primary:`18 88% 46%`,"primary-foreground":`0 0% 98%`,accent:`28 86% 94%`,"accent-foreground":`18 88% 22%`,ring:`18 88% 46%`,radius:`0.375rem`,"chart-1":`18 88% 46%`,"chart-2":`38 92% 50%`}},Tt=[{label:`Inter`,value:`'Inter', system-ui, -apple-system, sans-serif`},{label:`Geist`,value:`'Geist', 'Inter', system-ui, sans-serif`},{label:`System`,value:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},{label:`Serif`,value:`ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`}],Et=[{label:`Primary`,token:`primary`,hint:`Buttons and selected states`},{label:`Accent`,token:`accent`,hint:`Hover and soft surfaces`},{label:`Destructive`,token:`destructive`,hint:`Invalid and danger states`},{label:`Border`,token:`border`,hint:`Cards and separators`},{label:`Ring`,token:`ring`,hint:`Focus outlines`}],Dt=[{label:`Chart 1`,token:`chart-1`},{label:`Chart 2`,token:`chart-2`},{label:`Chart 3`,token:`chart-3`},{label:`Chart 4`,token:`chart-4`},{label:`Chart 5`,token:`chart-5`}],X=class extends P{constructor(...e){super(...e),this.base=`Neutral`,this.presetStyle=`Default`,this.copied=!1,this.dark=document.documentElement.classList.contains(`dark`),this.theme=this.createTheme()}connectedCallback(){super.connectedCallback(),this.darkObserver=new MutationObserver(()=>this.syncDocumentTheme()),this.darkObserver.observe(document.documentElement,{attributeFilter:[`class`],attributes:!0}),this.syncDocumentTheme()}disconnectedCallback(){this.darkObserver?.disconnect(),super.disconnectedCallback()}static{this.styles=c`
    :host {
      display: block;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .generator {
      display: grid;
      grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);
      gap: 1.25rem;
      min-height: calc(100svh - 7rem);
      color: hsl(var(--foreground));
    }

    .controls,
    .preview {
      overflow: hidden;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.5rem);
      background-color: hsl(var(--card));
      color: hsl(var(--card-foreground));
      box-shadow: 0 18px 50px rgb(0 0 0 / 0.08);
    }

    .controls {
      align-self: start;
      position: sticky;
      top: 5rem;
    }

    .controls-header,
    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 1px solid hsl(var(--border));
    }

    h1,
    h2,
    p {
      margin: 0;
    }

    h1 {
      color: hsl(var(--foreground));
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 1.2;
    }

    h2 {
      color: hsl(var(--foreground));
      font-size: 1rem;
      font-weight: 650;
      line-height: 1.25;
    }

    p,
    small,
    .muted {
      color: hsl(var(--muted-foreground));
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .controls-title {
      display: grid;
      gap: 0.125rem;
    }

    .controls-title strong {
      color: hsl(var(--foreground));
      font-size: 0.9375rem;
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

    .control-row,
    .radius-control {
      display: grid;
      gap: 0.5rem;
      padding: 0.625rem 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) + 0.125rem);
      background-color: hsl(var(--background));
    }

    .control-row {
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      min-height: 3.125rem;
    }

    .control-copy {
      display: grid;
      min-width: 0;
      gap: 0.125rem;
    }

    .control-copy span,
    .control-copy label {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .control-copy strong,
    .radius-head strong {
      overflow: hidden;
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    select,
    input[type='range'] {
      width: 100%;
      accent-color: hsl(var(--primary));
      font: inherit;
    }

    .control-row select {
      width: 8.5rem;
      height: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 4px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
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

    .swatch::-webkit-color-swatch,
    .swatch::-moz-color-swatch {
      border: 0;
      border-radius: 999px;
    }

    .radius-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .action-stack {
      display: grid;
      gap: 0.5rem;
    }

    .action-stack shadcx-button {
      width: 100%;
    }

    .preview {
      display: grid;
      grid-template-rows: auto 1fr;
      min-width: 0;
      background: linear-gradient(180deg, hsl(var(--muted) / 0.7), transparent 18rem), hsl(var(--background));
    }

    .preview-heading {
      display: grid;
      gap: 0.25rem;
      min-width: 0;
    }

    .preview-actions,
    .button-row,
    .badge-row,
    .chart-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .preview-scroll {
      overflow-x: auto;
      overflow-y: hidden;
      padding: 1rem;
      -webkit-overflow-scrolling: touch;
    }

    .preview-body {
      display: grid;
      grid-template-columns: repeat(4, minmax(18rem, 1fr));
      grid-auto-rows: minmax(0, auto);
      gap: 1rem;
      min-width: 76rem;
      align-items: start;
    }

    .preview-card::part(root) {
      height: 100%;
    }

    .preview-card.tall {
      grid-row: span 2;
    }

    .card-section {
      display: grid;
      gap: 0.75rem;
      align-content: start;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .metric {
      display: grid;
      gap: 0.125rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .metric strong {
      color: hsl(var(--foreground));
      font-size: 1.25rem;
      line-height: 1;
    }

    .metric span {
      color: hsl(var(--muted-foreground));
      font-size: 0.75rem;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
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

    .field label,
    .checkbox-line {
      color: hsl(var(--foreground));
      font-size: 0.875rem;
      font-weight: 500;
    }

    .checkbox-line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .chart-row {
      align-items: end;
      min-height: 8rem;
      padding: 0.75rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--muted) / 0.45);
    }

    .chart-row.compact {
      min-height: 5rem;
    }

    .bar {
      flex: 1;
      min-width: 2rem;
      border-radius: calc(var(--radius) - 3px) calc(var(--radius) - 3px) 0 0;
    }

    .bar:nth-child(1) { height: 3.8rem; background-color: hsl(var(--chart-1)); }
    .bar:nth-child(2) { height: 6.25rem; background-color: hsl(var(--chart-2)); }
    .bar:nth-child(3) { height: 4.9rem; background-color: hsl(var(--chart-3)); }
    .bar:nth-child(4) { height: 7rem; background-color: hsl(var(--chart-4)); }
    .bar:nth-child(5) { height: 5.4rem; background-color: hsl(var(--chart-5)); }

    .token-strip {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.5rem;
    }

    .token {
      overflow: hidden;
      min-height: 3rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background: hsl(var(--muted));
    }

    .token span {
      display: block;
      height: 1rem;
    }

    .token:nth-child(1) span { background-color: hsl(var(--primary)); }
    .token:nth-child(2) span { background-color: hsl(var(--secondary)); }
    .token:nth-child(3) span { background-color: hsl(var(--accent)); }
    .token:nth-child(4) span { background-color: hsl(var(--destructive)); }
    .token:nth-child(5) span { background-color: hsl(var(--ring)); }

    .token strong {
      display: block;
      padding: 0.5rem;
      color: hsl(var(--muted-foreground));
      font-size: 0.6875rem;
      font-weight: 600;
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
      .form-grid {
        grid-template-columns: 1fr;
      }

      .preview-scroll {
        overflow: visible;
        padding: 0.875rem;
      }

      .preview-body {
        grid-template-columns: 1fr;
        min-width: 0;
      }

      .preview-header {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `}get themeStyle(){return xt.map(e=>`--${e}: ${this.theme[e]}`).join(`; `)}get radiusValue(){return Number.parseFloat(this.theme.radius.replace(`rem`,``))}get fontLabel(){return Tt.find(e=>e.value===this.theme[`font-sans`])?.label??`Custom`}createTheme(){return{...this.dark?Ct:St,...this.dark?{}:Y[this.base],...wt[this.presetStyle]}}syncDocumentTheme(){let e=document.documentElement.classList.contains(`dark`);if(e===this.dark)return;let t=this.theme[`font-sans`];this.dark=e,this.theme={...this.createTheme(),"font-sans":t}}setToken(e,t){let n={...this.theme,[e]:t};e===`primary`&&(n[`primary-foreground`]=this.foregroundFor(t)),e===`accent`&&(n[`accent-foreground`]=this.foregroundFor(t)),e===`destructive`&&(n[`destructive-foreground`]=this.foregroundFor(t)),this.theme=n}setColor(e,t){let n=t.currentTarget;this.setToken(e,this.hexToHsl(n.value))}setRadius(e){let t=e.currentTarget;this.theme={...this.theme,radius:`${t.value}rem`}}setFont(e){this.theme={...this.theme,"font-sans":e}}applyBase(e){let t=e.currentTarget;this.base=t.value,this.theme=this.createTheme()}applyStyle(e){let t=e.currentTarget;this.presetStyle=t.value,this.theme=this.createTheme()}shuffle(){let e=Object.keys(Y),t=Object.keys(wt),n=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)],i=Math.floor(Math.random()*360),a=(i+96)%360,o=`${i} 72% ${this.dark?62:44}%`,s=`${a} 62% ${this.dark?18:94}%`,c=[.25,.375,.5,.625,.75,1][Math.floor(Math.random()*6)];this.base=n,this.presetStyle=r,this.theme={...this.createTheme(),primary:o,"primary-foreground":this.foregroundFor(o),accent:s,"accent-foreground":this.foregroundFor(s),ring:o,radius:`${c}rem`,"chart-1":`${i} 76% 56%`,"chart-2":`${(i+58)%360} 62% 44%`,"chart-3":`${(i+123)%360} 48% 42%`,"chart-4":`${(i+188)%360} 78% 62%`,"chart-5":`${(i+247)%360} 70% 58%`}}async copyCss(){await navigator.clipboard.writeText(this.buildCss()),this.copied=!0,window.setTimeout(()=>{this.copied=!1},1800)}buildCss(){let e=xt.map(e=>`  --${e}: ${this.theme[e]};`).join(`
`);return`${this.dark?`.dark`:`:root`} {\n${e}\n}\n`}hslToHex(e){let t=e.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);if(!t)return`#000000`;let n=Number.parseFloat(t[1])/360,r=Number.parseFloat(t[2])/100,i=Number.parseFloat(t[3])/100;if(r===0){let e=Math.round(i*255);return this.toHex(e,e,e)}let a=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e},o=i<.5?i*(1+r):i+r-i*r,s=2*i-o;return this.toHex(Math.round(a(s,o,n+1/3)*255),Math.round(a(s,o,n)*255),Math.round(a(s,o,n-1/3)*255))}hexToHsl(e){let t=Number.parseInt(e.slice(1,3),16)/255,n=Number.parseInt(e.slice(3,5),16)/255,r=Number.parseInt(e.slice(5,7),16)/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=0,s=0,c=(i+a)/2;if(i!==a){let e=i-a;s=c>.5?e/(2-i-a):e/(i+a),o=i===t?(n-r)/e+(n<r?6:0):i===n?(r-t)/e+2:(t-n)/e+4,o/=6}return`${Math.round(o*360)} ${Math.round(s*100)}% ${Math.round(c*100)}%`}toHex(e,t,n){return`#${[e,t,n].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}foregroundFor(e){let t=e.match(/[\d.]+\s+[\d.]+%\s+([\d.]+)%/);return(t?Number.parseFloat(t[1]):50)>62?`0 0% 9%`:`0 0% 98%`}renderSelectControl(e,t,n,r){return E`
      <div class="control-row">
        <span class="control-copy">
          <span>${e}</span>
          <strong>${t}</strong>
        </span>
        <select aria-label=${e} @change=${r}>
          ${n.map(e=>E`<option value=${e} ?selected=${e===t}>${e}</option>`)}
        </select>
      </div>
    `}renderColorControl(e,t,n){return E`
      <div class="control-row">
        <span class="control-copy">
          <label for=${t}>${e}</label>
          <strong>${n}</strong>
        </span>
        <input
          id=${t}
          class="swatch"
          type="color"
          .value=${this.hslToHex(this.theme[t])}
          @input=${e=>this.setColor(t,e)}
          aria-label=${`${e} color`}
        >
      </div>
    `}render(){return E`
      <div class="generator" style=${this.themeStyle} data-testid="theme-generator">
        <aside class="controls" aria-label="Theme controls">
          <div class="controls-header">
            <span class="controls-title">
              <strong>Theme Generator</strong>
              <span class="muted">shadcn variables</span>
            </span>
            <shadcx-button size="icon-sm" variant="outline" aria-label="Shuffle theme" @click=${this.shuffle}>↻</shadcx-button>
          </div>

          <div class="controls-body">
            <div class="control-group">
              ${this.renderSelectControl(`Style`,this.presetStyle,Object.keys(wt),e=>this.applyStyle(e))}
              ${this.renderSelectControl(`Base Color`,this.base,Object.keys(Y),e=>this.applyBase(e))}
              ${this.renderSelectControl(`Font`,this.fontLabel,Tt.map(e=>e.label),e=>{let t=e.currentTarget,n=Tt.find(e=>e.label===t.value);n&&this.setFont(n.value)})}
            </div>

            <div class="control-group">
              ${Et.map(e=>this.renderColorControl(e.label,e.token,e.hint))}
            </div>

            <div class="control-group">
              <div class="radius-control">
                <div class="radius-head">
                  <span>Radius</span>
                  <strong>${this.theme.radius}</strong>
                </div>
                <input type="range" min="0" max="1" step="0.125" .value=${String(this.radiusValue)} @input=${this.setRadius} aria-label="Border radius">
              </div>
              ${Dt.map(e=>this.renderColorControl(e.label,e.token,`Chart token`))}
            </div>

            <div class="action-stack">
              <shadcx-button variant="outline" @click=${this.shuffle}>Shuffle</shadcx-button>
              <shadcx-button @click=${this.copyCss}>${this.copied?`Copied CSS`:`Export CSS`}</shadcx-button>
            </div>
          </div>
        </aside>

        <section class="preview" aria-label="Component preview">
          <div class="preview-header">
            <div class="preview-heading">
              <h1>Theme Preview</h1>
              <p>Live shadcx components using the current variable set.</p>
            </div>
            <div class="preview-actions">
              <shadcx-button>Deploy</shadcx-button>
              <shadcx-button variant="outline">Preview</shadcx-button>
            </div>
          </div>

          <div class="preview-scroll">
            <div class="preview-body">
              <shadcx-card class="preview-card tall">
                <shadcx-card-header>
                  <shadcx-card-title>Dashboard</shadcx-card-title>
                  <shadcx-card-description>${this.base} / ${this.presetStyle}</shadcx-card-description>
                  <shadcx-card-action>
                    <shadcx-dropdown-menu>
                      <shadcx-dropdown-menu-trigger>
                        <shadcx-button size="sm" variant="outline">Actions</shadcx-button>
                      </shadcx-dropdown-menu-trigger>
                      <shadcx-dropdown-menu-content align="end">
                        <shadcx-dropdown-menu-label>Theme</shadcx-dropdown-menu-label>
                        <shadcx-dropdown-menu-item @click=${this.shuffle}>Shuffle</shadcx-dropdown-menu-item>
                        <shadcx-dropdown-menu-item @click=${this.copyCss}>Copy CSS</shadcx-dropdown-menu-item>
                        <shadcx-dropdown-menu-separator></shadcx-dropdown-menu-separator>
                        <shadcx-dropdown-menu-item variant="destructive">Reset</shadcx-dropdown-menu-item>
                      </shadcx-dropdown-menu-content>
                    </shadcx-dropdown-menu>
                  </shadcx-card-action>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="card-section">
                    <div class="metric-grid">
                      <div class="metric"><strong>2.4k</strong><span>Visitors</span></div>
                      <div class="metric"><strong>18%</strong><span>Growth</span></div>
                      <div class="metric"><strong>42</strong><span>Projects</span></div>
                      <div class="metric"><strong>8ms</strong><span>Latency</span></div>
                    </div>
                    <div class="chart-row compact" aria-hidden="true">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                    </div>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Buttons</shadcx-card-title>
                  <shadcx-card-description>Primary, secondary, outline, ghost, destructive.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="button-row">
                    <shadcx-button>Primary</shadcx-button>
                    <shadcx-button variant="secondary">Secondary</shadcx-button>
                    <shadcx-button variant="outline">Outline</shadcx-button>
                    <shadcx-button variant="ghost">Ghost</shadcx-button>
                    <shadcx-button variant="destructive">Delete</shadcx-button>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Badges</shadcx-card-title>
                  <shadcx-card-description>Status labels using semantic tokens.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="badge-row">
                    <shadcx-badge>Default</shadcx-badge>
                    <shadcx-badge variant="secondary">Secondary</shadcx-badge>
                    <shadcx-badge variant="outline">Outline</shadcx-badge>
                    <shadcx-badge variant="destructive">Invalid</shadcx-badge>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card tall">
                <shadcx-card-header>
                  <shadcx-card-title>Form</shadcx-card-title>
                  <shadcx-card-description>Input, textarea, checkbox, and combobox.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="form-grid">
                    <div class="field">
                      <label>Email</label>
                      <shadcx-input value="hello@shadcx.dev" placeholder="Email"></shadcx-input>
                    </div>
                    <div class="field">
                      <label>Invalid state</label>
                      <shadcx-input placeholder="Missing value" aria-invalid="true"></shadcx-input>
                    </div>
                    <div class="field wide">
                      <label>Framework</label>
                      <shadcx-combobox .items=${[`Native HTML`,`React`,`Vue`,`Svelte`]} value="Native HTML"></shadcx-combobox>
                    </div>
                    <div class="field wide">
                      <label>Message</label>
                      <shadcx-textarea rows="4" placeholder="Tell us what you are building..."></shadcx-textarea>
                    </div>
                    <label class="checkbox-line">
                      <shadcx-checkbox checked></shadcx-checkbox>
                      Receive release notes
                    </label>
                  </div>
                </shadcx-card-content>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Color Tokens</shadcx-card-title>
                  <shadcx-card-description>Theme variables as UI surfaces.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <div class="token-strip" aria-hidden="true">
                    <div class="token"><span></span><strong>primary</strong></div>
                    <div class="token"><span></span><strong>secondary</strong></div>
                    <div class="token"><span></span><strong>accent</strong></div>
                    <div class="token"><span></span><strong>destructive</strong></div>
                    <div class="token"><span></span><strong>ring</strong></div>
                  </div>
                </shadcx-card-content>
                <shadcx-card-footer>
                  <shadcx-button variant="outline" @click=${this.copyCss}>${this.copied?`Copied CSS`:`Copy variables`}</shadcx-button>
                </shadcx-card-footer>
              </shadcx-card>

              <shadcx-card class="preview-card">
                <shadcx-card-header>
                  <shadcx-card-title>Card Surface</shadcx-card-title>
                  <shadcx-card-description>Radius, border, card, and muted tokens.</shadcx-card-description>
                </shadcx-card-header>
                <shadcx-card-content>
                  <p>Every piece in this preview is rendered with real shadcx components and the currently generated CSS variables.</p>
                </shadcx-card-content>
                <shadcx-card-footer>
                  <shadcx-button size="sm">Save</shadcx-button>
                  <shadcx-button size="sm" variant="outline">Cancel</shadcx-button>
                </shadcx-card-footer>
              </shadcx-card>
            </div>
          </div>
        </section>
      </div>
    `}};R([L()],X.prototype,`base`,void 0),R([L()],X.prototype,`presetStyle`,void 0),R([L()],X.prototype,`copied`,void 0),R([L()],X.prototype,`dark`,void 0),R([L()],X.prototype,`theme`,void 0),X=R([F(`theme-generator-page`)],X);var Ot=t({ThemingPage:()=>kt}),kt=class extends P{static{this.styles=c`
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
  `}render(){return E`
      <h1>Theming</h1>
      <p class="desc">
        Learn how to customize shadcx with CSS custom properties.
      </p>

      <h2>Architecture</h2>
      <p>
        shadcx uses CSS custom properties (variables) based on
        shadcn/ui&rsquo;s theming system. Each design token is stored as
        space-separated <strong>H S L</strong> channels, and components compose
        full colors at usage sites:
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
        theme before the components load:
      </p>
      <pre><code>&lt;style&gt;
  :root {
    --primary: 260 80% 50%;
    --primary-foreground: 0 0% 100%;
    --radius: 0.75rem;
  }
&lt;/style&gt;</code></pre>

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
    `}};kt=R([F(`theming-page`)],kt);var At=Object.assign({"./pages/badge-page.ts":Le,"./pages/button-page.ts":Ve,"./pages/card-page.ts":Ge,"./pages/checkbox-page.ts":Ye,"./pages/combobox-page.ts":$e,"./pages/dropdown-menu-page.ts":rt,"./pages/form-playground-page.ts":at,"./pages/input-page.ts":dt,"./pages/overview-page.ts":pt,"./pages/textarea-page.ts":_t,"./pages/theme-generator-page.ts":bt,"./pages/theming-page.ts":Ot});function jt(){return Object.keys(At).map(e=>{let t=e.match(/\/([^/]+)-page\.ts$/);if(!t)return null;let n=t[1],r=At[e],i=n.split(`-`).map(e=>e[0].toUpperCase()+e.slice(1)).join(` `),a=n===`overview`?`/`:n;return{name:n,tag:`${n}-page`,title:i,description:r?.description??``,hash:a}}).filter(Boolean)}var Z=jt(),Mt=new Set([`overview`,`theming`,`theme-generator`]),Nt=[Z.find(e=>e.name===`overview`),Z.find(e=>e.name===`theming`),Z.find(e=>e.name===`theme-generator`)].filter(Boolean),Pt=Z.filter(e=>!Mt.has(e.name)).sort((e,t)=>e.name.localeCompare(t.name)),Q=class extends P{constructor(...e){super(...e),this.active=``}static{this.styles=c`
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
  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}render(){let e=e=>this.active===e?`active`:``;return E`
      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        ${Nt.map(t=>{let n=t.name===`overview`?`Introduction`:t.title,r=t.hash===`/`?`#/`:`#/${t.hash}`;return E`
            <a
              class="nav-item ${e(t.hash)}"
              href=${r}
              @click=${e=>this._navigate(t.hash,e)}
            >
              ${n}
            </a>
          `})}

        <div class="nav-section">Components</div>
        ${Pt.map(t=>E`
            <a
              class="nav-item ${e(t.hash)}"
              href="#/${t.hash}"
              @click=${e=>this._navigate(t.hash,e)}
            >
              ${t.title}
            </a>
          `)}
      </nav>
    `}};R([I({type:String})],Q.prototype,`active`,void 0),Q=R([F(`app-sidebar`)],Q);var $=class extends P{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`;this._page=e,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=c`
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
      position: sticky;
      top: 0;
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

    .github-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid hsl(var(--border));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      flex-shrink: 0;
      transition: background-color 0.15s, color 0.15s;
    }

    .github-link:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    .github-link svg {
      width: 1rem;
      height: 1rem;
      fill: currentColor;
    }

    .theme-btn:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
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
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=this._dark?`☀`:`☽`,r=[`theme-generator`,`form-playground`].includes(this._page)?`content wide`:`content`;return E`
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
        <a
          class="github-link"
          href="https://github.com/dobrinyonkov/shadcx"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub repository"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.62c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
        <button
          class="theme-btn"
          @click=${this._toggleTheme}
          aria-label="Toggle theme"
        >
          ${n}
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

        <main class=${r}>${this._renderPage()}</main>
      </div>
    `}_renderPage(){if(this._page===`/`||!this._page)return E`${document.createElement(`overview-page`)}`;let e=Z.find(e=>e.name===this._page);return e?E`${document.createElement(e.tag)}`:E`${document.createElement(`overview-page`)}`}};R([L()],$.prototype,`_page`,void 0),R([L()],$.prototype,`_sidebarOpen`,void 0),R([L()],$.prototype,`_dark`,void 0),$=R([F(`app-layout`)],$);