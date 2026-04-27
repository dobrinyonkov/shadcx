(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,re=f.trustedTypes,ie=re?re.emptyScript:``,ae=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!l(e,t),g={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??g}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[p(`elementProperties`)]=new Map,_[p(`finalized`)]=new Map,ae?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var v=globalThis,y=e=>e,b=v.trustedTypes,oe=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,se=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,ce=`?`+x,le=`<${ce}>`,S=document,C=()=>S.createComment(``),w=e=>e===null||typeof e!=`object`&&typeof e!=`function`,T=Array.isArray,ue=e=>T(e)||typeof e?.[Symbol.iterator]==`function`,E=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,k=/>/g,A=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),j=/'/g,M=/"/g,N=/^(?:script|style|textarea|title)$/i,P=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),F=Symbol.for(`lit-noChange`),I=Symbol.for(`lit-nothing`),L=new WeakMap,R=S.createTreeWalker(S,129);function z(e,t){if(!T(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return oe===void 0?t:oe.createHTML(t)}var de=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=D;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===D?c[1]===`!--`?o=O:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=A):(N.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=A):o=k:o===A?c[0]===`>`?(o=i??D,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?A:c[3]===`"`?M:j):o===M||o===j?o=A:o===O||o===k?o=D:(o=A,i=void 0);let d=o===A&&e[t+1].startsWith(`/>`)?` `:``;a+=o===D?n+le:l>=0?(r.push(s),n.slice(0,l)+se+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[z(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},B=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=de(t,n);if(this.el=e.createElement(l,r),R.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=R.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(se)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?pe:r[1]===`?`?me:r[1]===`@`?he:U}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(N.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],C()),R.nextNode(),c.push({type:2,index:++a});i.append(e[t],C())}}}else if(i.nodeType===8)if(i.data===ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){let n=S.createElement(`template`);return n.innerHTML=e,n}};function V(e,t,n=e,r){if(t===F)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=w(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=V(e,i._$AS(e,t.values),i,r)),t}var fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??S).importNode(t,!0);R.currentNode=r;let i=R.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new H(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ge(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=R.nextNode(),a++)}return R.currentNode=S,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},H=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),w(e)?e===I||e==null||e===``?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==F&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ue(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&w(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=B.createElement(z(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return t===void 0&&L.set(e.strings,t=new B(e)),t}k(t){T(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(C()),this.O(C()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=y(e).nextSibling;y(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=I}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=V(this,e,t,0),a=!w(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=V(this,r[n+o],t,o),s===F&&(s=this._$AH[o]),a||=!w(s)||s!==this._$AH[o],s===I?e=I:e!==I&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},pe=class extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}},me=class extends U{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}},he=class extends U{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??I)===F)return;let n=this._$AH,r=e===I&&n!==I||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==I&&(n===I||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}},_e=v.litHtmlPolyfillSupport;_e?.(B,H),(v.litHtmlVersions??=[]).push(`3.3.2`);var ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new H(t.insertBefore(C(),e),e,void 0,n??{})}return i._$AI(e),i},W=globalThis,G=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};G._$litElement$=!0,G.finalized=!0,W.litElementHydrateSupport?.({LitElement:G});var ye=W.litElementPolyfillSupport;ye?.({LitElement:G}),(W.litElementVersions??=[]).push(`4.2.2`);var K=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},be={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},xe=(e=be,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function q(e){return(t,n)=>typeof n==`object`?xe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function J(e){return q({...e,state:!0,attribute:!1})}function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var X=class extends G{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1}static{this.styles=o`
    :host {
      display: inline-flex;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .root {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      white-space: nowrap;
      border-radius: calc(var(--radius) - 2px);
      font-size: 0.875rem;
      font-weight: 500;
      font-family: inherit;
      transition:
        color 0.15s,
        background-color 0.15s,
        border-color 0.15s,
        box-shadow 0.15s;
      cursor: pointer;
      user-select: none;
      border: 1px solid transparent;
      outline: none;
      padding: 0;
    }

    /* --- sizes --- */
    [data-size='default'] {
      height: 2.25rem;
      padding-inline: 1rem;
    }

    [data-size='xs'] {
      height: 1.75rem;
      padding-inline: 0.5rem;
      font-size: 0.75rem;
      border-radius: calc(var(--radius) - 4px);
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
      padding-inline: 0;
    }

    [data-size='icon-xs'] {
      height: 1.75rem;
      width: 1.75rem;
      padding-inline: 0;
      border-radius: calc(var(--radius) - 4px);
    }

    [data-size='icon-sm'] {
      height: 2rem;
      width: 2rem;
      padding-inline: 0;
    }

    [data-size='icon-lg'] {
      height: 2.5rem;
      width: 2.5rem;
      padding-inline: 0;
    }

    /* --- variants --- */

    /* default */
    [data-variant='default'] {
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='default']:hover:not(:disabled) {
      background-color: hsl(var(--primary) / 0.9);
    }

    /* outline */
    [data-variant='outline'] {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      border-color: hsl(var(--border));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='outline']:hover:not(:disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    /* ghost */
    [data-variant='ghost'] {
      color: hsl(var(--foreground));
    }
    [data-variant='ghost']:hover:not(:disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    /* destructive */
    [data-variant='destructive'] {
      background-color: hsl(var(--destructive));
      color: hsl(var(--destructive-foreground));
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    [data-variant='destructive']:hover:not(:disabled) {
      background-color: hsl(var(--destructive) / 0.9);
    }

    /* secondary */
    [data-variant='secondary'] {
      background-color: hsl(var(--secondary));
      color: hsl(var(--secondary-foreground));
    }
    [data-variant='secondary']:hover:not(:disabled) {
      background-color: hsl(var(--secondary) / 0.8);
    }

    /* link */
    [data-variant='link'] {
      color: hsl(var(--primary));
      text-underline-offset: 4px;
    }
    [data-variant='link']:hover:not(:disabled) {
      text-decoration: underline;
    }

    /* --- states --- */

    .root:disabled {
      opacity: 0.5;
    }

    .root:focus-visible {
      box-shadow: 0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring));
    }

    /* slotted icon spacing */
    ::slotted([data-icon='inline-start']) {
      margin-right: 0.25rem;
    }
    ::slotted([data-icon='inline-end']) {
      margin-left: 0.25rem;
    }
  `}render(){return P`
      <button
        part="root"
        class="root"
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `}};Y([q({type:String,reflect:!0})],X.prototype,`variant`,void 0),Y([q({type:String,reflect:!0})],X.prototype,`size`,void 0),Y([q({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),X=Y([K(`shadcx-button`)],X);var Z=class extends G{constructor(...e){super(...e),this.type=`text`,this.placeholder=``,this.value=``,this.name=``,this.disabled=!1,this.required=!1,this.readonly=!1}static{this.styles=o`
    :host {
      display: inline-flex;
      width: 100%;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .root {
      display: flex;
      width: 100%;
      height: 2.25rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-family: inherit;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--input));
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      outline: none;
      box-sizing: border-box;
      transition:
        border-color 0.15s,
        box-shadow 0.15s;
    }

    .root::placeholder {
      color: hsl(var(--muted-foreground));
    }

    .root:focus {
      border-color: hsl(var(--ring));
      box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }

    .root:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .root[aria-invalid='true'] {
      border-color: hsl(var(--destructive));
    }

    .root[aria-invalid='true']:focus {
      box-shadow: 0 0 0 2px hsl(var(--destructive) / 0.2);
    }

    /* file input */
    .root[type='file'] {
      padding: 0.375rem;
      cursor: pointer;
    }
    .root[type='file']::file-selector-button {
      height: 1.75rem;
      padding: 0 0.75rem;
      margin-right: 0.5rem;
      font-size: 0.8125rem;
      font-family: inherit;
      border-radius: calc(var(--radius) - 2px);
      border: 1px solid hsl(var(--input));
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      cursor: pointer;
      transition:
        background-color 0.15s,
        color 0.15s;
    }
    .root[type='file']::file-selector-button:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  `}_onInput(e){let t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent(`shadcx-input`,{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return P`
      <input
        part="root"
        class="root"
        type=${this.type}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .name=${this.name}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        @input=${this._onInput}
      />
    `}};Y([q({type:String})],Z.prototype,`type`,void 0),Y([q({type:String})],Z.prototype,`placeholder`,void 0),Y([q({type:String})],Z.prototype,`value`,void 0),Y([q({type:String})],Z.prototype,`name`,void 0),Y([q({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),Y([q({type:Boolean,reflect:!0})],Z.prototype,`required`,void 0),Y([q({type:Boolean,reflect:!0})],Z.prototype,`readonly`,void 0),Z=Y([K(`shadcx-input`)],Z);var Q=class extends G{constructor(...e){super(...e),this.active=``}static{this.styles=o`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
    }

    .brand {
      display: none;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
      font-weight: 700;
      color: hsl(var(--foreground));
      text-decoration: none;
      border-bottom: 1px solid hsl(var(--border));
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

    @media (min-width: 768px) {
      .brand {
        display: flex;
      }
    }
  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}render(){let e=e=>this.active===e?`active`:``;return P`
      <a class="brand" href="#" @click=${e=>this._navigate(`/`,e)}>
        shadcx
      </a>

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
      </nav>
    `}};Y([q({type:String})],Q.prototype,`active`,void 0),Q=Y([K(`app-sidebar`)],Q);var Se=class extends G{static{this.styles=o`
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
  `}render(){return P`
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

      <p>
        Then use any component in your HTML:
      </p>
      <pre><code>&lt;shadcx-button variant="default"&gt;Click me&lt;/shadcx-button&gt;
&lt;shadcx-input placeholder="Type something..."&gt;&lt;/shadcx-input&gt;</code></pre>

      <h2>Components</h2>
      <div class="cards">
        <a class="card" href="#/button" @click=${this._navigateButton}>
          <h3>Button</h3>
          <p>Displays a button or a component that looks like a button.</p>
        </a>
        <a class="card" href="#/input" @click=${this._navigateInput}>
          <h3>Input</h3>
          <p>A text input component for forms and user data entry.</p>
        </a>
      </div>
    `}_navigateButton(e){e.preventDefault(),location.hash=`button`}_navigateInput(e){e.preventDefault(),location.hash=`input`}};Se=Y([K(`overview-page`)],Se);var Ce=class extends G{static{this.styles=o`
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
  `}render(){return P`
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

      <h2>CSS Shadow Parts</h2>
      <p>
        Every component exposes a CSS
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part"
          target="_blank"
          rel="noopener"
        ><code>::part()</code></a>
        for fine-grained styling from outside the Shadow DOM:
      </p>
      <pre><code>shadcx-button::part(root) {
  border-radius: 0;
  text-transform: uppercase;
  font-weight: 700;
}

shadcx-input::part(root) {
  border-width: 2px;
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
    `}};Ce=Y([K(`theming-page`)],Ce);var we=class extends G{static{this.styles=o`
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
    th, td {
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
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
      white-space: nowrap;
    }
    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
      font-family: inherit;
    }
    td:nth-child(2) {
      white-space: normal;
    }
    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
    }
  `}render(){return P`
      <h1>Button</h1>
      <p class="desc">Displays a button or a component that looks like a button.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-button variant="outline"&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <shadcx-button variant="default">Default</shadcx-button>
        <shadcx-button variant="outline">Outline</shadcx-button>
        <shadcx-button variant="ghost">Ghost</shadcx-button>
        <shadcx-button variant="destructive">Destructive</shadcx-button>
        <shadcx-button variant="secondary">Secondary</shadcx-button>
        <shadcx-button variant="link">Link</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button variant="default"&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline"&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button variant="ghost"&gt;Ghost&lt;/shadcx-button&gt;
&lt;shadcx-button variant="destructive"&gt;Destructive&lt;/shadcx-button&gt;
&lt;shadcx-button variant="secondary"&gt;Secondary&lt;/shadcx-button&gt;
&lt;shadcx-button variant="link"&gt;Link&lt;/shadcx-button&gt;</code></pre>

      <h3>Size</h3>
      <p>Use the <code>size</code> prop to change the size of the button.</p>
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
        <shadcx-button size="icon-xs">?</shadcx-button>
        <shadcx-button size="icon-sm">?</shadcx-button>
        <shadcx-button size="icon">?</shadcx-button>
        <shadcx-button size="icon-lg">?</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button size="icon"&gt;&lt;svg ... /&gt;&lt;/shadcx-button&gt;
&lt;shadcx-button size="icon-sm"&gt;+&lt;/shadcx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-button variant="default" disabled>Default</shadcx-button>
        <shadcx-button variant="outline" disabled>Outline</shadcx-button>
        <shadcx-button variant="ghost" disabled>Ghost</shadcx-button>
      </div>
      <pre><code>&lt;shadcx-button variant="default" disabled&gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button variant="outline" disabled&gt;Outline&lt;/shadcx-button&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>variant</td><td>"default" | "outline" | "ghost" | "destructive" | "secondary" | "link"</td><td>"default"</td></tr>
            <tr><td>size</td><td>"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"</td><td>"default"</td></tr>
            <tr><td>disabled</td><td>boolean</td><td>false</td></tr>
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
            <tr><td>root</td><td>The button element</td></tr>
          </tbody>
        </table>
      </div>
    `}};we=Y([K(`button-page`)],we);var Te=class extends G{static{this.styles=o`
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
      flex-direction: column;
      gap: 0.75rem;
      max-width: 24rem;
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
      min-width: 28rem;
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
      font-family: var(--font-mono, ui-monospace, SFMono-Regular, monospace);
      font-size: 0.8125rem;
      white-space: nowrap;
    }

    td:first-child {
      color: hsl(var(--foreground));
      font-weight: 500;
      font-family: inherit;
    }

    td:last-child {
      white-space: normal;
    }

    @media (max-width: 640px) {
      h1 { font-size: 1.375rem; }
      h2 { font-size: 1.125rem; }
      .preview { padding: 1rem; max-width: 100%; }
      pre { padding: 0.75rem; font-size: 0.75rem; }
    }
  `}render(){return P`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-input /&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <shadcx-input placeholder="Placeholder text..."></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Placeholder text..."&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <shadcx-input disabled placeholder="Disabled input..."></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input disabled placeholder="Disabled input..."&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>File</h3>
      <p>
        Use the <code>type="file"</code> prop to create a file input.
      </p>
      <div class="preview">
        <shadcx-input type="file"></shadcx-input>
      </div>
      <pre><code>&lt;shadcx-input type="file"&gt;&lt;/shadcx-input&gt;</code></pre>

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
              <td>type</td>
              <td>string</td>
              <td>"text"</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>""</td>
            </tr>
            <tr>
              <td>value</td>
              <td>string</td>
              <td>""</td>
            </tr>
            <tr>
              <td>name</td>
              <td>string</td>
              <td>""</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>required</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Events</h3>
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
              <td>shadcx-input</td>
              <td>{ value: string }</td>
              <td>Fires on every input change</td>
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
              <td>root</td>
              <td>The input element</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};Te=Y([K(`input-page`)],Te);var $=class extends G{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`;this._page=e,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=o`
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
        display: none;
      }

      .layout-body {
        padding-top: 0;
      }

      .sidebar {
        position: sticky;
        top: 0;
        height: 100svh;
        transform: translateX(0);
      }

      .content {
        padding: 2rem 3rem;
      }

      .overlay {
        display: none !important;
      }
    }
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=this._dark?`☀`:`☽`;return P`
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
    `}_renderPage(){switch(this._page){case`theming`:return P`<theming-page></theming-page>`;case`button`:return P`<button-page></button-page>`;case`input`:return P`<input-page></input-page>`;default:return P`<overview-page></overview-page>`}}};Y([J()],$.prototype,`_page`,void 0),Y([J()],$.prototype,`_sidebarOpen`,void 0),Y([J()],$.prototype,`_dark`,void 0),$=Y([K(`app-layout`)],$);