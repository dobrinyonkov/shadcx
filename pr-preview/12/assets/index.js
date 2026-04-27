(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,re=f.trustedTypes,ie=re?re.emptyScript:``,ae=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[p(`elementProperties`)]=new Map,g[p(`finalized`)]=new Map,ae?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var _=globalThis,se=e=>e,v=_.trustedTypes,ce=v?v.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+y,de=`<${ue}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,C=Array.isArray,fe=e=>C(e)||typeof e?.[Symbol.iterator]==`function`,w=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,E=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),O=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),ve=new WeakMap,A=b.createTreeWalker(b,129);function ye(e,t){if(!C(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=T;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===T?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=E):(_e.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=E):o=me:o===E?c[0]===`>`?(o=i??T,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?E:c[3]===`"`?ge:he):o===ge||o===he?o=E:o===pe||o===me?o=T:(o=E,i=void 0);let d=o===E&&e[t+1].startsWith(`/>`)?` `:``;a+=o===T?n+de:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},j=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),A.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=A.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:P}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),A.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8)if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===O)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);A.currentNode=r;let i=A.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new N(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=A.nextNode(),a++)}return A.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},N=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),S(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==O&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=j.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new j(e)),t}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=se(e).nextSibling;se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===O&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Ce=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},we=class extends P{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??k)===O)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Ee=_.litHtmlPolyfillSupport;Ee?.(j,N),(_.litHtmlVersions??=[]).push(`3.3.2`);var De=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new N(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},F=globalThis,I=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};I._$litElement$=!0,I.finalized=!0,F.litElementHydrateSupport?.({LitElement:I});var Oe=F.litElementPolyfillSupport;Oe?.({LitElement:I}),(F.litElementVersions??=[]).push(`4.2.2`);var L=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ke={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Ae=(e=ke,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function R(e){return(t,n)=>typeof n==`object`?Ae(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function z(e){return R({...e,state:!0,attribute:!1})}var B=o`
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
`;function V(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var H=class extends I{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1}static{this.styles=[B,o`
    :host {
      display: inline-flex;
    }

    :host([disabled]) {
      pointer-events: none;
    }

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
      transition:
        color 0.15s,
        background-color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s;
    }

    .root:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .root:focus-visible {
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    .root ::slotted(svg) {
      pointer-events: none;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }

    /* ---- sizes ---- */
    [data-size='default'] {
      height: 2.25rem;
      padding-inline: 1rem;
    }
    [data-size='xs'] {
      height: 1.75rem;
      padding-inline: 0.5rem;
      font-size: 0.8125rem;
    }
    [data-size='sm'] {
      height: 2rem;
      padding-inline: 0.75rem;
      font-size: 0.8125rem;
    }
    [data-size='lg'] {
      height: 2.5rem;
      padding-inline: 1.5rem;
    }
    [data-size='icon'] {
      height: 2.25rem;
      width: 2.25rem;
      padding: 0;
    }
    [data-size='icon-xs'] {
      height: 1.75rem;
      width: 1.75rem;
      padding: 0;
    }
    [data-size='icon-sm'] {
      height: 2rem;
      width: 2rem;
      padding: 0;
    }
    [data-size='icon-lg'] {
      height: 2.5rem;
      width: 2.5rem;
      padding: 0;
    }

    /* ---- variants ---- */
    [data-variant='default'] {
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px -1px rgba(0, 0, 0, 0.1);
    }
    [data-variant='default']:hover {
      background-color: hsl(var(--primary) / 0.9);
    }

    [data-variant='destructive'] {
      background-color: hsl(var(--destructive));
      color: hsl(var(--destructive-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='destructive']:hover {
      background-color: hsl(var(--destructive) / 0.9);
    }

    [data-variant='outline'] {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      border-color: hsl(var(--input));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='outline']:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    [data-variant='secondary'] {
      background-color: hsl(var(--secondary));
      color: hsl(var(--secondary-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='secondary']:hover {
      background-color: hsl(var(--secondary) / 0.8);
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
      color: hsl(var(--primary));
      text-underline-offset: 4px;
    }
    [data-variant='link']:hover {
      text-decoration: underline;
    }

    [aria-invalid='true'] {
      border-color: hsl(var(--destructive));
      box-shadow: 0 0 0 1px hsl(var(--destructive) / 0.2);
    }
  `]}render(){return D`
      <button
        part="root"
        class="root"
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `}};V([R({type:String,reflect:!0})],H.prototype,`variant`,void 0),V([R({type:String,reflect:!0})],H.prototype,`size`,void 0),V([R({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),H=V([L(`shadcx-button`)],H);var U=class extends I{constructor(...e){super(...e),this.variant=`default`}static{this.styles=[B,o`
      :host {
        display: inline-flex;
      }

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
        transition:
          color 0.15s,
          background-color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s;
      }

      .root:focus-visible {
        outline: none;
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }

      .root ::slotted(svg),
      .root ::slotted([data-icon]) {
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
      }

      .root ::slotted([data-icon='inline-start']) {
        margin-inline-end: 0.125rem;
      }

      .root ::slotted([data-icon='inline-end']) {
        margin-inline-start: 0.125rem;
      }

      [data-variant='default'] {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
      }

      [data-variant='default']:hover {
        background-color: hsl(var(--primary) / 0.9);
      }

      [data-variant='secondary'] {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
      }

      [data-variant='secondary']:hover {
        background-color: hsl(var(--secondary) / 0.8);
      }

      [data-variant='destructive'] {
        background-color: hsl(var(--destructive));
        color: hsl(var(--destructive-foreground));
      }

      [data-variant='destructive']:hover {
        background-color: hsl(var(--destructive) / 0.9);
      }

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

      [data-variant='link']:hover {
        text-decoration: underline;
      }
    `]}render(){return D`
      <span
        part="root"
        class="root"
        data-variant=${this.variant}
        tabindex="0"
      >
        <slot></slot>
      </span>
    `}};V([R({type:String,reflect:!0})],U.prototype,`variant`,void 0),U=V([L(`shadcx-badge`)],U);var W=class extends I{constructor(...e){super(...e),this.type=`text`,this.placeholder=``,this.disabled=!1,this.required=!1,this.readonly=!1,this.ariaInvalid=null}static{this.styles=[B,o`
    :host {
      display: flex;
    }

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
      transition:
        color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s;
    }

    .root::placeholder {
      color: hsl(var(--muted-foreground));
    }

    .root:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    .root:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .root::file-selector-button {
      border: 0;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 500;
      color: hsl(var(--foreground));
    }

    .root[aria-invalid] {
      border-color: hsl(var(--destructive));
    }

    @media (min-width: 768px) {
      .root {
        font-size: 0.875rem;
      }
    }
  `]}render(){return D`
      <input
        part="root"
        class="root"
        type=${this.type}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        aria-invalid=${this.ariaInvalid||k}
      >
    `}};V([R({type:String})],W.prototype,`type`,void 0),V([R({type:String})],W.prototype,`placeholder`,void 0),V([R({type:Boolean,reflect:!0})],W.prototype,`disabled`,void 0),V([R({type:Boolean,reflect:!0})],W.prototype,`required`,void 0),V([R({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),V([R({type:String,attribute:`aria-invalid`})],W.prototype,`ariaInvalid`,void 0),W=V([L(`shadcx-input`)],W);var G=class extends I{constructor(...e){super(...e),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.ariaInvalid=null}static{this.styles=[B,o`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([disabled]) {
      pointer-events: none;
    }

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
      transition:
        background-color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s,
        color 0.15s;
    }

    .root:focus-visible {
      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    .root:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .root[data-state='checked'],
    .root[data-state='indeterminate'] {
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
  `]}get _state(){return this.indeterminate?`indeterminate`:this.checked?`checked`:`unchecked`}_toggle(){this.disabled||(this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`checked-change`,{detail:{checked:this.checked,indeterminate:this.indeterminate,state:this._state},bubbles:!0,composed:!0})))}_onKeyDown(e){e.key===`Enter`&&(e.preventDefault(),this._toggle())}render(){return D`
      <button
        part="root"
        class="root"
        type="button"
        role="checkbox"
        data-state=${this._state}
        aria-checked=${this.indeterminate?`mixed`:String(this.checked)}
        aria-invalid=${this.ariaInvalid||k}
        ?disabled=${this.disabled}
        @click=${this._toggle}
        @keydown=${this._onKeyDown}
      >
        <span part="indicator" class="indicator" aria-hidden="true">
          ${this._state===`checked`?D`<svg class="icon" viewBox="0 0 16 16"><polyline points="3.5 8.5 6.8 11.8 12.5 5.5" /></svg>`:this._state===`indeterminate`?D`<svg class="icon" viewBox="0 0 16 16"><line x1="3.5" y1="8" x2="12.5" y2="8" /></svg>`:k}
        </span>
      </button>
    `}};V([R({type:Boolean,reflect:!0})],G.prototype,`checked`,void 0),V([R({type:Boolean,reflect:!0})],G.prototype,`indeterminate`,void 0),V([R({type:Boolean,reflect:!0})],G.prototype,`disabled`,void 0),V([R({type:String,attribute:`aria-invalid`})],G.prototype,`ariaInvalid`,void 0),G=V([L(`shadcx-checkbox`)],G);var K=class extends I{constructor(...e){super(...e),this.open=!1,this._onDocumentMouseDown=e=>{if(!this.open)return;let t=e.target;t&&!this.contains(t)&&this.close()},this._onKeyDown=e=>{e.key===`Escape`&&this.open&&this.close()},this._onToggle=()=>this.toggle(),this._onOpen=()=>this.openPopover(),this._onClose=()=>this.close()}static{this.styles=[B,o`
      :host {
        position: relative;
        display: inline-flex;
      }
    `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`shadcx-popover-toggle`,this._onToggle),this.addEventListener(`shadcx-popover-open`,this._onOpen),this.addEventListener(`shadcx-popover-close`,this._onClose),document.addEventListener(`mousedown`,this._onDocumentMouseDown),document.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){this.removeEventListener(`shadcx-popover-toggle`,this._onToggle),this.removeEventListener(`shadcx-popover-open`,this._onOpen),this.removeEventListener(`shadcx-popover-close`,this._onClose),document.removeEventListener(`mousedown`,this._onDocumentMouseDown),document.removeEventListener(`keydown`,this._onKeyDown),super.disconnectedCallback()}updated(e){e.has(`open`)&&this.dispatchEvent(new CustomEvent(`open-change`,{detail:{open:this.open},bubbles:!0,composed:!0}))}openPopover(){this.open=!0}close(){this.open=!1}toggle(){this.open=!this.open}render(){return D`<slot></slot>`}};V([R({type:Boolean,reflect:!0})],K.prototype,`open`,void 0),K=V([L(`shadcx-popover`)],K);var q=class extends I{constructor(...e){super(...e),this._open=!1,this._syncOpen=e=>{this._open=e.detail.open}}static{this.styles=[B,o`
      :host {
        display: inline-flex;
      }

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
        border: 1px solid hsl(var(--input));
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        height: 2.25rem;
        padding-inline: 1rem;
        outline: none;
        transition:
          color 0.15s,
          background-color 0.15s,
          border-color 0.15s,
          box-shadow 0.15s;
      }

      .root:hover {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      .root:focus-visible {
        box-shadow:
          0 0 0 2px hsl(var(--background)),
          0 0 0 4px hsl(var(--ring));
      }
    `]}connectedCallback(){super.connectedCallback(),this.closest(`shadcx-popover`)?.addEventListener(`open-change`,this._syncOpen)}disconnectedCallback(){this.closest(`shadcx-popover`)?.removeEventListener(`open-change`,this._syncOpen),super.disconnectedCallback()}_togglePopover(){this.dispatchEvent(new CustomEvent(`shadcx-popover-toggle`,{bubbles:!0,composed:!0}))}render(){return D`
      <button
        part="root"
        class="root"
        type="button"
        aria-haspopup="dialog"
        aria-expanded=${String(this._open)}
        @click=${this._togglePopover}
      >
        <slot></slot>
      </button>
    `}};V([z()],q.prototype,`_open`,void 0),q=V([L(`shadcx-popover-trigger`)],q);var J=class extends I{constructor(...e){super(...e),this.align=`center`,this.sideOffset=4,this._open=!1,this._syncOpen=e=>{this._open=e.detail.open}}static{this.styles=[B,o`
      :host {
        position: absolute;
        z-index: 50;
        min-width: 16rem;
        top: calc(100% + var(--_side-offset, 0.25rem));
      }

      :host([align='start']) {
        left: 0;
      }

      :host([align='center']) {
        left: 50%;
        transform: translateX(-50%);
      }

      :host([align='end']) {
        right: 0;
      }

      .root {
        border: 1px solid hsl(var(--border));
        background-color: hsl(var(--popover));
        color: hsl(var(--popover-foreground));
        border-radius: calc(var(--radius) - 2px);
        padding: 1rem;
        box-shadow:
          0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1);
      }

      :host([data-state='closed']) {
        pointer-events: none;
      }

      :host([data-state='closed']) .root {
        opacity: 0;
        transform: translateY(-0.25rem);
      }

      :host([data-state='open']) .root {
        opacity: 1;
        transform: translateY(0);
      }

      .root {
        transition: opacity 0.15s ease, transform 0.15s ease;
      }
    `]}connectedCallback(){super.connectedCallback(),this.style.setProperty(`--_side-offset`,`${this.sideOffset}px`),this.closest(`shadcx-popover`)?.addEventListener(`open-change`,this._syncOpen)}disconnectedCallback(){this.closest(`shadcx-popover`)?.removeEventListener(`open-change`,this._syncOpen),super.disconnectedCallback()}updated(e){e.has(`sideOffset`)&&this.style.setProperty(`--_side-offset`,`${this.sideOffset}px`),this.setAttribute(`data-state`,this._open?`open`:`closed`)}render(){return D`
      <div part="root" class="root" role="dialog" aria-hidden=${String(!this._open)}>
        <slot></slot>
      </div>
    `}};V([R({type:String,reflect:!0})],J.prototype,`align`,void 0),V([R({type:Number,attribute:`side-offset`})],J.prototype,`sideOffset`,void 0),V([z()],J.prototype,`_open`,void 0),J=V([L(`shadcx-popover-content`)],J);var je=class extends I{static{this.styles=[B,o`
      :host {
        display: grid;
        gap: 0.125rem;
      }
    `]}render(){return D`<div part="root"><slot></slot></div>`}};je=V([L(`shadcx-popover-header`)],je);var Me=class extends I{static{this.styles=[B,o`
      :host {
        display: block;
      }

      .root {
        margin: 0;
        font-size: 0.9375rem;
        line-height: 1.25;
        font-weight: 600;
        color: hsl(var(--popover-foreground));
      }
    `]}render(){return D`<h3 part="root" class="root"><slot></slot></h3>`}};Me=V([L(`shadcx-popover-title`)],Me);var Ne=class extends I{static{this.styles=[B,o`
      :host {
        display: block;
      }

      .root {
        margin: 0;
        font-size: 0.8125rem;
        line-height: 1.45;
        color: hsl(var(--muted-foreground));
      }
    `]}render(){return D`<p part="root" class="root"><slot></slot></p>`}};Ne=V([L(`shadcx-popover-description`)],Ne);var Y=class extends I{constructor(...e){super(...e),this.active=``}static{this.styles=o`
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

  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}render(){let e=e=>this.active===e?`active`:``;return D`
      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        <a
          class="nav-item ${e(`/`)}"
          href="#/"
          @click=${e=>this._navigate(`/`,e)}
        >
          Introduction
        </a>
        <a
          class="nav-item ${e(`theming`)}"
          href="#/theming"
          @click=${e=>this._navigate(`theming`,e)}
        >
          Theming
        </a>

        <div class="nav-section">Components</div>
        <a
          class="nav-item ${e(`badge`)}"
          href="#/badge"
          @click=${e=>this._navigate(`badge`,e)}
        >
          Badge
        </a>
        <a
          class="nav-item ${e(`button`)}"
          href="#/button"
          @click=${e=>this._navigate(`button`,e)}
        >
          Button
        </a>
        <a
          class="nav-item ${e(`input`)}"
          href="#/input"
          @click=${e=>this._navigate(`input`,e)}
        >
          Input
        </a>
        <a
          class="nav-item ${e(`checkbox`)}"
          href="#/checkbox"
          @click=${e=>this._navigate(`checkbox`,e)}
        >
          Checkbox
        </a>

        <a
          class="nav-item ${e(`popover`)}"
          href="#/popover"
          @click=${e=>this._navigate(`popover`,e)}
        >
          Popover
        </a>

      </nav>
    `}};V([R({type:String})],Y.prototype,`active`,void 0),Y=V([L(`app-sidebar`)],Y);var X=class extends I{static{this.styles=o`
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
  `}_navigateBadge(e){e.preventDefault(),location.hash=`badge`}_navigateButton(e){e.preventDefault(),location.hash=`button`}_navigateInput(e){e.preventDefault(),location.hash=`input`}_navigatePopover(e){e.preventDefault(),location.hash=`popover`}render(){return D`
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
        <a class="card" href="#/badge" @click=${this._navigateBadge}>
          <h3>Badge</h3>
          <p>Displays a badge or a component that looks like a badge.</p>
        </a>
        <a class="card" href="#/button" @click=${this._navigateButton}>
          <h3>Button</h3>
          <p>Displays a button or a component that looks like a button.</p>
        </a>
        <a class="card" href="#/input" @click=${this._navigateInput}>
          <h3>Input</h3>
          <p>A text input component for forms and user data entry.</p>
        </a>
        <a class="card" href="#/popover" @click=${this._navigatePopover}>
          <h3>Popover</h3>
          <p>Displays rich content in a floating panel, triggered by a button.</p>
        </a>
      </div>
    `}};X=V([L(`overview-page`)],X);var Pe=class extends I{static{this.styles=o`
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
  `}render(){return D`
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
    `}};Pe=V([L(`theming-page`)],Pe);var Fe=class extends I{static{this.styles=o`
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
  `}render(){return D`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

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
    `}};Fe=V([L(`button-page`)],Fe);var Ie=class extends I{static{this.styles=o`
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
  `}render(){return D`
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

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
    `}};Ie=V([L(`badge-page`)],Ie);var Le=class extends I{static{this.styles=o`
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
  `}render(){return D`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

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
    `}};Le=V([L(`input-page`)],Le);var Z=class extends I{constructor(...e){super(...e),this._checked=!1}static{this.styles=o`
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
  `}_onCheckedChange(e){let t=e.currentTarget;this._checked=!!t.checked}render(){return D`
      <h1>Checkbox</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and unchecked
        states, with support for indeterminate and invalid states.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

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
    `}};V([z()],Z.prototype,`_checked`,void 0),Z=V([L(`checkbox-page`)],Z);var Q=class extends I{static{this.styles=o`
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
      gap: 0.75rem;
      margin-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      min-height: 10rem;
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

    .form-row {
      display: grid;
      gap: 0.25rem;
    }

    .form-label {
      font-size: 0.8125rem;
      color: hsl(var(--foreground));
      font-weight: 500;
    }

    .form-input {
      border: 1px solid hsl(var(--input));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font: inherit;
      font-size: 0.8125rem;
      height: 2rem;
      padding-inline: 0.5rem;
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
  `}render(){return D`
      <h1>Popover</h1>
      <p class="desc">
        Displays rich content in a floating panel, triggered by a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-popover&gt;
  &lt;shadcx-popover-trigger&gt;Open Popover&lt;/shadcx-popover-trigger&gt;
  &lt;shadcx-popover-content&gt;
    &lt;shadcx-popover-header&gt;
      &lt;shadcx-popover-title&gt;Title&lt;/shadcx-popover-title&gt;
      &lt;shadcx-popover-description&gt;Description text here.&lt;/shadcx-popover-description&gt;
    &lt;/shadcx-popover-header&gt;
  &lt;/shadcx-popover-content&gt;
&lt;/shadcx-popover&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Open Popover</shadcx-popover-trigger>
          <shadcx-popover-content>
            <shadcx-popover-header>
              <shadcx-popover-title>Dimensions</shadcx-popover-title>
              <shadcx-popover-description>
                Set dimensions for the layer and save when you're done.
              </shadcx-popover-description>
            </shadcx-popover-header>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover&gt;
  &lt;shadcx-popover-trigger&gt;Open Popover&lt;/shadcx-popover-trigger&gt;
  &lt;shadcx-popover-content&gt;...&lt;/shadcx-popover-content&gt;
&lt;/shadcx-popover&gt;</code></pre>

      <h3>Align</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Start</shadcx-popover-trigger>
          <shadcx-popover-content align="start">
            <shadcx-popover-description>Aligned to the start edge.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>

        <shadcx-popover>
          <shadcx-popover-trigger>Center</shadcx-popover-trigger>
          <shadcx-popover-content align="center">
            <shadcx-popover-description>Centered relative to trigger.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>

        <shadcx-popover>
          <shadcx-popover-trigger>End</shadcx-popover-trigger>
          <shadcx-popover-content align="end">
            <shadcx-popover-description>Aligned to the end edge.</shadcx-popover-description>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover-content align="start|center|end"&gt;...&lt;/shadcx-popover-content&gt;</code></pre>

      <h3>With Form</h3>
      <div class="preview">
        <shadcx-popover>
          <shadcx-popover-trigger>Edit Profile</shadcx-popover-trigger>
          <shadcx-popover-content align="start" side-offset="8">
            <shadcx-popover-header>
              <shadcx-popover-title>Edit profile</shadcx-popover-title>
              <shadcx-popover-description>Make changes and close with Escape.</shadcx-popover-description>
            </shadcx-popover-header>
            <div class="form-row">
              <label class="form-label" for="popover-name">Name</label>
              <input class="form-input" id="popover-name" value="shadcx user" />
            </div>
          </shadcx-popover-content>
        </shadcx-popover>
      </div>
      <pre><code>&lt;shadcx-popover-content side-offset="8"&gt;
  &lt;!-- content --&gt;
&lt;/shadcx-popover-content&gt;</code></pre>

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
              <td><code>open</code> (on <code>shadcx-popover</code>)</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>align</code> (on <code>shadcx-popover-content</code>)</td>
              <td><code>"start" | "center" | "end"</code></td>
              <td><code>"center"</code></td>
            </tr>
            <tr>
              <td><code>side-offset</code> (on <code>shadcx-popover-content</code>)</td>
              <td><code>number</code></td>
              <td><code>4</code></td>
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
              <td><code>root</code> on <code>shadcx-popover-trigger</code></td>
              <td>The trigger button element.</td>
            </tr>
            <tr>
              <td><code>root</code> on <code>shadcx-popover-content</code></td>
              <td>The floating content container.</td>
            </tr>
            <tr>
              <td><code>root</code> on header/title/description</td>
              <td>Typography wrapper elements inside content.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};Q=V([L(`popover-page`)],Q);var $=class extends I{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`;this._page=e,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=o`
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
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=this._dark?`☀`:`☽`;return D`
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

        <main class="content">${this._renderPage()}</main>
      </div>
    `}_renderPage(){switch(this._page){case`badge`:return D`<badge-page></badge-page>`;case`button`:return D`<button-page></button-page>`;case`input`:return D`<input-page></input-page>`;case`checkbox`:return D`<checkbox-page></checkbox-page>`;case`popover`:return D`<popover-page></popover-page>`;case`theming`:return D`<theming-page></theming-page>`;default:return D`<overview-page></overview-page>`}}};V([z()],$.prototype,`_page`,void 0),V([z()],$.prototype,`_sidebarOpen`,void 0),V([z()],$.prototype,`_dark`,void 0),$=V([L(`app-layout`)],$);