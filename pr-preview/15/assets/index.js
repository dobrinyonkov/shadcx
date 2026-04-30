(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,b=e=>e,x=y.trustedTypes,S=x?x.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ae=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,w=`?`+C,oe=`<${w}>`,T=document,E=()=>T.createComment(``),D=e=>e===null||typeof e!=`object`&&typeof e!=`function`,O=Array.isArray,se=e=>O(e)||typeof e?.[Symbol.iterator]==`function`,k=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,le=/>/g,j=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ue=/'/g,de=/"/g,fe=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),N=Symbol.for(`lit-noChange`),P=Symbol.for(`lit-nothing`),F=new WeakMap,I=T.createTreeWalker(T,129);function L(e,t){if(!O(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return S===void 0?t:S.createHTML(t)}var pe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=A;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===A?c[1]===`!--`?o=ce:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=j):(fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=j):o=le:o===j?c[0]===`>`?(o=i??A,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?j:c[3]===`"`?de:ue):o===de||o===ue?o=j:o===ce||o===le?o=A:(o=j,i=void 0);let d=o===j&&e[t+1].startsWith(`/>`)?` `:``;a+=o===A?n+oe:l>=0?(r.push(s),n.slice(0,l)+ae+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[L(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},R=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=pe(t,n);if(this.el=e.createElement(l,r),I.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=I.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ae)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?he:r[1]===`?`?ge:r[1]===`@`?_e:V}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(fe.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],E()),I.nextNode(),c.push({type:2,index:++a});i.append(e[t],E())}}}else if(i.nodeType===8)if(i.data===w)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){let n=T.createElement(`template`);return n.innerHTML=e,n}};function z(e,t,n=e,r){if(t===N)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=D(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=z(e,i._$AS(e,t.values),i,r)),t}var me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);I.currentNode=r;let i=I.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new B(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ve(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=I.nextNode(),a++)}return I.currentNode=T,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},B=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),D(e)?e===P||e==null||e===``?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==N&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=R.createElement(L(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return t===void 0&&F.set(e.strings,t=new R(e)),t}k(t){O(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(E()),this.O(E()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=b(e).nextSibling;b(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=z(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==N,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=z(this,r[n+o],t,o),s===N&&(s=this._$AH[o]),a||=!D(s)||s!==this._$AH[o],s===P?e=P:e!==P&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},he=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},ge=class extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}},_e=class extends V{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??P)===N)return;let n=this._$AH,r=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ve=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}},ye=y.litHtmlPolyfillSupport;ye?.(R,B),(y.litHtmlVersions??=[]).push(`3.3.2`);var be=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new B(t.insertBefore(E(),e),e,void 0,n??{})}return i._$AI(e),i},H=globalThis,U=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=be(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};U._$litElement$=!0,U.finalized=!0,H.litElementHydrateSupport?.({LitElement:U});var xe=H.litElementPolyfillSupport;xe?.({LitElement:U}),(H.litElementVersions??=[]).push(`4.2.2`);var W=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Se={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g},Ce=(e=Se,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function G(e){return(t,n)=>typeof n==`object`?Ce(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function K(e){return G({...e,state:!0,attribute:!1})}function q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var J=class extends U{constructor(...e){super(...e),this.active=``}static{this.styles=o`
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

  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}render(){let e=e=>this.active===e?`active`:``;return M`
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
          class="nav-item ${e(`combobox`)}"
          href="#/combobox"
          @click=${e=>this._navigate(`combobox`,e)}
        >
          Combobox
        </a>

      </nav>
    `}};q([G({type:String})],J.prototype,`active`,void 0),J=q([W(`app-sidebar`)],J);var we=class extends U{static{this.styles=o`
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
  `}_navigateBadge(e){e.preventDefault(),location.hash=`badge`}_navigateButton(e){e.preventDefault(),location.hash=`button`}_navigateInput(e){e.preventDefault(),location.hash=`input`}_navigateCombobox(e){e.preventDefault(),location.hash=`combobox`}render(){return M`
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
        <a class="card" href="#/combobox" @click=${this._navigateCombobox}>
          <h3>Combobox</h3>
          <p>Autocomplete input with suggestion list and multi-select support.</p>
        </a>
      </div>
    `}};we=q([W(`overview-page`)],we);var Te=class extends U{static{this.styles=o`
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
  `}render(){return M`
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
    `}};Te=q([W(`theming-page`)],Te);var Ee=class extends U{static{this.styles=o`
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
  `}render(){return M`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-button class="scx-button scx-outline"&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <button class="scx-button">Button</button>
      </div>
      <pre><code>&lt;shadcx-button&gt;Button&lt;/shadcx-button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <button class="scx-button" >Default</button>
        <button class="scx-button scx-destructive">Destructive</button>
        <button class="scx-button scx-outline">Outline</button>
        <button class="scx-button scx-secondary">Secondary</button>
        <button class="scx-button scx-ghost">Ghost</button>
        <button class="scx-button scx-link">Link</button>
      </div>
      <pre><code>&lt;shadcx-button &gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-destructive"&gt;Destructive&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-outline"&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-secondary"&gt;Secondary&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-ghost"&gt;Ghost&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-link"&gt;Link&lt;/shadcx-button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <button class="scx-button scx-xs">Extra Small</button>
        <button class="scx-button scx-sm">Small</button>
        <button class="scx-button" >Default</button>
        <button class="scx-button scx-lg">Large</button>
      </div>
      <pre><code>&lt;shadcx-button class="scx-button scx-xs"&gt;Extra Small&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-sm"&gt;Small&lt;/shadcx-button&gt;
&lt;shadcx-button &gt;Default&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-lg"&gt;Large&lt;/shadcx-button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <button class="scx-button scx-icon scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-xs scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-sm scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-button scx-icon-lg scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <pre><code>&lt;shadcx-button class="scx-button scx-icon scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-xs scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-sm scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-icon-lg scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/shadcx-button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <button class="scx-button" disabled>Primary</button>
        <button class="scx-button scx-outline" disabled>Outline</button>
        <button class="scx-button scx-ghost" disabled>Ghost</button>
      </div>
      <pre><code>&lt;shadcx-button disabled&gt;Primary&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-outline" disabled&gt;Outline&lt;/shadcx-button&gt;
&lt;shadcx-button class="scx-button scx-ghost" disabled&gt;Ghost&lt;/shadcx-button&gt;</code></pre>

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
    `}};Ee=q([W(`button-page`)],Ee);var De=class extends U{static{this.styles=o`
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
  `}render(){return M`
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;shadcx-badge &gt;Badge&lt;/shadcx-badge&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <span class="scx-badge">Default</span>
        <span class="scx-badge scx-secondary">Secondary</span>
        <span class="scx-badge scx-destructive">Destructive</span>
        <span class="scx-badge scx-outline">Outline</span>
        <span class="scx-badge scx-ghost">Ghost</span>
        <span class="scx-badge scx-link">Link</span>
      </div>
      <pre><code>&lt;shadcx-badge&gt;Default&lt;/shadcx-badge&gt;
&lt;shadcx-badge class="scx-badge scx-secondary"&gt;Secondary&lt;/shadcx-badge&gt;
&lt;shadcx-badge class="scx-badge scx-destructive"&gt;Destructive&lt;/shadcx-badge&gt;
&lt;shadcx-badge class="scx-badge scx-outline"&gt;Outline&lt;/shadcx-badge&gt;
&lt;shadcx-badge class="scx-badge scx-ghost"&gt;Ghost&lt;/shadcx-badge&gt;
&lt;shadcx-badge class="scx-badge scx-link"&gt;Link&lt;/shadcx-badge&gt;</code></pre>

      <h3>With Icon</h3>
      <div class="preview">
        <span class="scx-badge">
          <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          Verified
        </span>
        <span class="scx-badge scx-outline">
          New
          <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </span>
      </div>
      <pre><code>&lt;shadcx-badge&gt;
  &lt;svg data-icon="inline-start" ...&gt;&lt;/svg&gt;
  Verified
&lt;/shadcx-badge&gt;</code></pre>

      <h3>With Spinner</h3>
      <div class="preview">
        <span class="scx-badge scx-secondary">
          <span data-icon="inline-start" class="spinner"></span>
          Syncing
        </span>
      </div>
      <pre><code>&lt;shadcx-badge class="scx-badge scx-secondary"&gt;
  &lt;span data-icon="inline-start" class="spinner"&gt;&lt;/span&gt;
  Syncing
&lt;/shadcx-badge&gt;</code></pre>

      <h3>Link</h3>
      <div class="preview">
        <a class="inline-link" href="https://example.com" target="_blank" rel="noreferrer">
          <span class="scx-badge scx-link">Read docs</span>
        </a>
      </div>
      <pre><code>&lt;a href="https://example.com"&gt;
  &lt;shadcx-badge class="scx-badge scx-link"&gt;Read docs&lt;/shadcx-badge&gt;
&lt;/a&gt;</code></pre>

      <h3>Custom Colors</h3>
      <div class="preview">
        <span class="success">Success</span>
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
    `}};De=q([W(`badge-page`)],De);var Y=class extends U{static{this.styles=o`
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
  `}render(){return M`
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
        <input class="scx-input" placeholder="Enter text">
      </div>
      <pre><code>&lt;shadcx-input placeholder="Enter text"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Types</h3>
      <div class="preview">
        <input class="scx-input" type="text" placeholder="Text">
        <input class="scx-input" type="email" placeholder="Email">
        <input class="scx-input" type="password" placeholder="Password">
        <input class="scx-input" type="search" placeholder="Search">
      </div>
      <pre><code>&lt;shadcx-input type="text" placeholder="Text"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="email" placeholder="Email"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="password" placeholder="Password"&gt;&lt;/shadcx-input&gt;
&lt;shadcx-input type="search" placeholder="Search"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <input class="scx-input" placeholder="Disabled" disabled>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Disabled" disabled&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <input class="scx-input" placeholder="Error" aria-invalid="true">
      </div>
      <pre><code>&lt;shadcx-input placeholder="Error" aria-invalid="true"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>File</h3>
      <div class="preview">
        <input class="scx-input" type="file">
      </div>
      <pre><code>&lt;shadcx-input type="file"&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>Readonly</h3>
      <div class="preview">
        <input class="scx-input" placeholder="Readonly field" readonly>
      </div>
      <pre><code>&lt;input class="scx-input" readonly /&gt;</code></pre>

      <h3>Required</h3>
      <div class="preview">
        <input class="scx-input" placeholder="Required field" required>
      </div>
      <pre><code>&lt;shadcx-input placeholder="Required field" required&gt;&lt;/shadcx-input&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="inline-row">
          <input class="scx-input" type="search" placeholder="Search...">
          <button class="scx-button scx-outline">Search</button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; gap: 0.5rem;"&gt;
  &lt;shadcx-input type="search" placeholder="Search..."&gt;&lt;/shadcx-input&gt;
  &lt;shadcx-button class="scx-button scx-outline"&gt;Search&lt;/shadcx-button&gt;
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
    `}};Y=q([W(`input-page`)],Y);var X=class extends U{constructor(...e){super(...e),this._checked=!1}static{this.styles=o`
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
  `}_onCheckedChange(e){let t=e.currentTarget;this._checked=!!t.checked}render(){return M`
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
          <input type="checkbox" class="scx-checkbox">
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
          <input type="checkbox" class="scx-checkbox"
            .checked=${this._checked}
            @change=${this._onCheckedChange}
          >
          <span class="label">Enable notifications</span>
        </label>
        <span class="muted">State: ${this._checked?`checked`:`unchecked`}</span>
      </div>
      <pre><code>&lt;shadcx-checkbox .checked=${"${checked}"} @change=${"${onChange}"}&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Indeterminate</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" class="scx-checkbox" indeterminate>
          <span class="label">Partially selected</span>
        </label>
      </div>
      <pre><code>&lt;shadcx-checkbox indeterminate&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" class="scx-checkbox" disabled>
          <span class="label">Disabled option</span>
        </label>
      </div>
      <pre><code>&lt;shadcx-checkbox disabled&gt;&lt;/shadcx-checkbox&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" class="scx-checkbox" aria-invalid="true">
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
    `}};q([K()],X.prototype,`_checked`,void 0),X=q([W(`checkbox-page`)],X);var Z=[`Next.js`,`SvelteKit`,`Nuxt.js`,`Remix`,`Astro`],Q=class extends U{constructor(...e){super(...e),this._singleValue=``,this._multipleValues=[]}static{this.styles=o`
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
  `}_onSingleValueChange(e){let t=e;this._singleValue=t.detail.value}_onMultipleValueChange(e){let t=e;this._multipleValues=t.detail.value}render(){return M`
      <h1>Combobox</h1>
      <p class="desc">
        Autocomplete input with suggestion filtering, keyboard navigation, clear
        behavior, and optional multi-select chips.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;
&lt;script type="module" src=".../assets/index.js"&gt;&lt;/script&gt;</code></pre>

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
        <input list="frameworks" class="scx-combobox"
          .items=${Z}
          placeholder="Select a framework"
          show-clear
          auto-highlight
          .value=${this._singleValue}
          @value-change=${this._onSingleValueChange}
        >
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
        <input list="frameworks" class="scx-combobox"
          .items=${Z}
          multiple
          show-clear
          auto-highlight
          placeholder="Add framework"
          .values=${this._multipleValues}
          @value-change=${this._onMultipleValueChange}
        >
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
        <input list="frameworks" class="scx-combobox" .items=${Z} disabled placeholder="Disabled">
        <br><br>
        <input list="frameworks" class="scx-combobox" .items=${Z} aria-invalid="true" placeholder="Required framework">
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
    `}};q([K()],Q.prototype,`_singleValue`,void 0),q([K()],Q.prototype,`_multipleValues`,void 0),Q=q([W(`combobox-page`)],Q);var $=class extends U{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`;this._page=e,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=o`
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
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=this._dark?`☀`:`☽`;return M`
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
    `}_renderPage(){switch(this._page){case`badge`:return M`<badge-page></badge-page>`;case`button`:return M`<button-page></button-page>`;case`input`:return M`<input-page></input-page>`;case`checkbox`:return M`<checkbox-page></checkbox-page>`;case`combobox`:return M`<combobox-page></combobox-page>`;case`theming`:return M`<theming-page></theming-page>`;default:return M`<overview-page></overview-page>`}}};q([K()],$.prototype,`_page`,void 0),q([K()],$.prototype,`_sidebarOpen`,void 0),q([K()],$.prototype,`_dark`,void 0),$=q([W(`app-layout`)],$);