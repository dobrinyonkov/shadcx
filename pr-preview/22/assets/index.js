var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap,o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}},s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:re,getPrototypeOf:ie}=Object,f=globalThis,ae=f.trustedTypes,oe=ae?ae.emptyScript:``,se=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!d(e,t),ce={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...ne(e),...re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[p(`elementProperties`)]=new Map,g[p(`finalized`)]=new Map,se?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var _=globalThis,le=e=>e,v=_.trustedTypes,ue=v?v.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+y,pe=`<${fe}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,C=Array.isArray,me=e=>C(e)||typeof e?.[Symbol.iterator]==`function`,w=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ge=/>/g,E=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),O=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),be=new WeakMap,A=b.createTreeWalker(b,129);function xe(e,t){if(!C(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var Se=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=T;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===T?c[1]===`!--`?o=he:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=E):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=E):o=ge:o===E?c[0]===`>`?(o=i??T,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?E:c[3]===`"`?ve:_e):o===ve||o===_e?o=E:o===he||o===ge?o=T:(o=E,i=void 0);let d=o===E&&e[t+1].startsWith(`/>`)?` `:``;a+=o===T?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[xe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},j=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Se(t,n);if(this.el=e.createElement(l,r),A.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=A.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?we:r[1]===`?`?Te:r[1]===`@`?Ee:P}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),A.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===O)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var Ce=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);A.currentNode=r;let i=A.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new N(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new De(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=A.nextNode(),a++)}return A.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},N=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),S(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==O&&this._(e):e._$litType$===void 0?e.nodeType===void 0?me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=j.createElement(xe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ce(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new j(e)),t}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===O&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},we=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Te=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Ee=class extends P{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??k)===O)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Oe=_.litHtmlPolyfillSupport;Oe?.(j,N),(_.litHtmlVersions??=[]).push(`3.3.2`);var ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new N(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},F=globalThis,I=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};I._$litElement$=!0,I.finalized=!0,F.litElementHydrateSupport?.({LitElement:I});var Ae=F.litElementPolyfillSupport;Ae?.({LitElement:I}),(F.litElementVersions??=[]).push(`4.2.2`);var je=Symbol.for(``),Me=e=>{if(e?.r===je)return e?._$litStatic$},Ne=e=>({_$litStatic$:e,r:je}),Pe=new Map,Fe=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Me(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Pe.get(e))===void 0&&(o.raw=o,Pe.set(e,t=o)),n=s}return e(t,...n)})(D),L=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ie={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Le=(e=Ie,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Re(e){return(t,n)=>typeof n==`object`?Le(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function R(e){return Re({...e,state:!0,attribute:!1})}var ze=Object.assign({"../lib/badge.css":`mark{border-radius:var(--radius);background-color:hsl(var(--primary));height:1.375rem;color:hsl(var(--primary-foreground));font-family:var(--font-sans);white-space:nowrap;border:1px solid #0000;outline:none;justify-content:center;align-items:center;gap:.25rem;padding:0 .625rem;font-size:.75rem;font-weight:500;line-height:1;transition:color .15s,background-color .15s,border-color .15s,box-shadow .15s;display:inline-flex}mark:hover{background-color:hsl(var(--primary) / .9)}mark:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}mark svg,mark [data-icon]{flex-shrink:0;width:.75rem;height:.75rem}mark [data-icon=inline-start]{margin-inline-end:.125rem}mark [data-icon=inline-end]{margin-inline-start:.125rem}mark.scx-secondary{background-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground))}mark.scx-secondary:hover{background-color:hsl(var(--secondary) / .8)}mark.scx-destructive{background-color:hsl(var(--destructive));color:hsl(var(--destructive-foreground))}mark.scx-destructive:hover{background-color:hsl(var(--destructive) / .9)}mark.scx-outline{border-color:hsl(var(--border));background-color:hsl(var(--background));color:hsl(var(--foreground))}mark.scx-outline:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}mark.scx-ghost{color:hsl(var(--foreground));background-color:#0000}mark.scx-ghost:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}mark.scx-link{color:hsl(var(--primary));text-underline-offset:4px;background-color:#0000;border-color:#0000}mark.scx-link:hover{background-color:#0000;text-decoration:underline}@keyframes scx-spin{to{transform:rotate(360deg)}}.scx-spinner{border:2px solid;border-right-color:#0000;border-radius:9999px;animation:.8s linear infinite scx-spin;display:inline-block}mark[aria-busy=true]{cursor:wait;pointer-events:none;opacity:.8}`,"../lib/button.css":`button,a[role=button]{appearance:none;border-radius:calc(var(--radius) - 2px);background-color:hsl(var(--primary));height:2.25rem;color:hsl(var(--primary-foreground));cursor:pointer;font-family:var(--font-sans);white-space:nowrap;border:1px solid #0000;outline:none;justify-content:center;align-items:center;gap:.5rem;padding:0 1rem;font-size:.875rem;font-weight:500;line-height:1;text-decoration:none;transition:color .15s,background-color .15s,border-color .15s,box-shadow .15s;display:inline-flex;box-shadow:0 1px 3px #0000001a,0 1px 2px -1px #0000001a}button:hover,a[role=button]:hover{background-color:hsl(var(--primary) / .9)}button:disabled,button[aria-disabled=true],a[role=button][aria-disabled=true]{opacity:.5;pointer-events:none}button svg,a[role=button] svg{pointer-events:none;flex-shrink:0;width:1rem;height:1rem}button.scx-xs,a[role=button].scx-xs{height:1.75rem;padding-inline:.5rem;font-size:.8125rem}button.scx-sm,a[role=button].scx-sm{height:2rem;padding-inline:.75rem;font-size:.8125rem}button.scx-lg,a[role=button].scx-lg{height:2.5rem;padding-inline:1.5rem}button.scx-icon,a[role=button].scx-icon{width:2.25rem;padding:0}button.scx-icon-xs,a[role=button].scx-icon-xs{width:1.75rem;height:1.75rem;padding:0}button.scx-icon-sm,a[role=button].scx-icon-sm{width:2rem;height:2rem;padding:0}button.scx-icon-lg,a[role=button].scx-icon-lg{width:2.5rem;height:2.5rem;padding:0}button.scx-destructive,a[role=button].scx-destructive{background-color:hsl(var(--destructive));color:hsl(var(--destructive-foreground));box-shadow:0 1px 2px #0000000d}button.scx-destructive:hover,a[role=button].scx-destructive:hover{background-color:hsl(var(--destructive) / .9)}button.scx-outline,a[role=button].scx-outline{border-color:hsl(var(--input));background-color:hsl(var(--background));color:hsl(var(--foreground));box-shadow:0 1px 2px #0000000d}button.scx-outline:hover,a[role=button].scx-outline:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}button.scx-secondary,a[role=button].scx-secondary{background-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground));box-shadow:0 1px 2px #0000000d}button.scx-secondary:hover,a[role=button].scx-secondary:hover{background-color:hsl(var(--secondary) / .8)}button.scx-ghost,a[role=button].scx-ghost{color:hsl(var(--foreground));box-shadow:none;background-color:#0000}button.scx-ghost:hover,a[role=button].scx-ghost:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}button.scx-link,a[role=button].scx-link{color:hsl(var(--primary));box-shadow:none;text-underline-offset:4px;background-color:#0000}button.scx-link:hover,a[role=button].scx-link:hover{background-color:#0000;text-decoration:underline}button[aria-invalid=true],a[role=button][aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 1px hsl(var(--destructive) / .2)}button:focus-visible,a[role=button]:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}button[aria-invalid=true]:focus-visible,a[role=button][aria-invalid=true]:focus-visible{outline-color:hsl(var(--destructive));box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive))}button[aria-busy=true],a[role=button][aria-busy=true]{cursor:wait;pointer-events:none}button[aria-busy=true]>.scx-spinner,a[role=button][aria-busy=true]>.scx-spinner{width:1rem;height:1rem}button[aria-busy=true].scx-icon>.scx-spinner,a[role=button][aria-busy=true].scx-icon>.scx-spinner{position:absolute}button[aria-busy=true].scx-icon :not(.scx-spinner),a[role=button][aria-busy=true].scx-icon :not(.scx-spinner){visibility:hidden}`,"../lib/checkbox.css":`input[type=checkbox]{appearance:none;border:1px solid hsl(var(--primary));border-radius:calc(var(--radius) - 4px);background-color:hsl(var(--background));color:#0000;cursor:pointer;outline:none;flex-shrink:0;place-content:center;width:1rem;height:1rem;padding:0;transition:color .15s,background-color .15s,border-color .15s,box-shadow .15s;display:inline-grid;box-shadow:0 1px 2px #0000000d}input[type=checkbox]:before{content:"";transform-origin:50%;clip-path:polygon(14% 44%,0 58%,38% 96%,100% 18%,86% 6%,36% 68%);background-color:currentColor;width:.625rem;height:.625rem;transition:transform .12s;transform:scale(0)}input[type=checkbox]:checked,input[type=checkbox]:indeterminate{border-color:hsl(var(--primary));background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}input[type=checkbox]:checked:before{transform:scale(1)}input[type=checkbox]:indeterminate:before{clip-path:none;width:.625rem;height:.125rem;transform:scale(1)}input[type=checkbox]:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}input[type=checkbox]:disabled{cursor:not-allowed;opacity:.5}input[type=checkbox][aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 1px hsl(var(--destructive) / .2)}input[type=checkbox][aria-invalid=true]:focus-visible{outline-color:hsl(var(--destructive));box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive))}`,"../lib/combobox.css":`select{border:1px solid hsl(var(--input));border-radius:calc(var(--radius) - 2px);background-color:hsl(var(--background));width:100%;min-width:0;max-width:24rem;height:2.25rem;color:hsl(var(--foreground));font-family:var(--font-sans);outline:none;padding:.25rem 2rem .25rem .75rem;font-size:.875rem;line-height:1.5;transition:color .15s,border-color .15s,box-shadow .15s;display:flex}select:not([multiple]){appearance:none;background-image:linear-gradient(45deg, transparent 50%, hsl(var(--muted-foreground)) 50%), linear-gradient(135deg, hsl(var(--muted-foreground)) 50%, transparent 50%);background-position:calc(100% - 1rem),calc(100% - .7rem);background-repeat:no-repeat;background-size:.3rem .3rem,.3rem .3rem}select[multiple]{height:auto;min-height:8rem;padding:.25rem}select:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}select:disabled{cursor:not-allowed;opacity:.5}select[aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 1px hsl(var(--destructive) / .2)}select[aria-invalid=true]:focus-visible{outline-color:hsl(var(--destructive));box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive))}select option{background-color:hsl(var(--popover));color:hsl(var(--popover-foreground));padding:.5rem}input[list]{max-width:24rem}fieldset.scx-option-list{border:1px solid hsl(var(--input));border-radius:calc(var(--radius) - 2px);background-color:hsl(var(--background));width:100%;max-width:24rem;color:hsl(var(--foreground));font-family:var(--font-sans);gap:.25rem;margin:0;padding:.25rem;display:grid}fieldset.scx-option-list:focus-within{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}fieldset.scx-option-list[aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 1px hsl(var(--destructive) / .2)}fieldset.scx-option-list[aria-invalid=true]:focus-within{outline-color:hsl(var(--destructive));box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive))}fieldset.scx-option-list legend{color:hsl(var(--muted-foreground));padding:0 .25rem;font-size:.8125rem;font-weight:500}fieldset.scx-option-list label{border-radius:calc(var(--radius) - 4px);min-height:2rem;color:hsl(var(--foreground));cursor:pointer;align-items:center;gap:.5rem;padding:.375rem .5rem;font-size:.875rem;line-height:1.25;display:flex}fieldset.scx-option-list label:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}fieldset.scx-option-list button{width:100%;height:2rem;box-shadow:none;justify-content:flex-start}fieldset.scx-option-list button[aria-pressed=true]{border-color:hsl(var(--primary));background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}fieldset.scx-option-list button[aria-pressed=true]:hover{background-color:hsl(var(--primary) / .9)}fieldset.scx-option-list button:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}`,"../lib/index.css":``,"../lib/input.css":`input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=hidden]){border:1px solid hsl(var(--input));border-radius:calc(var(--radius) - 2px);background-color:hsl(var(--background));width:100%;min-width:0;height:2.25rem;color:hsl(var(--foreground));font-family:var(--font-sans);outline:none;padding:.25rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s,border-color .15s,box-shadow .15s;display:flex}input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=hidden])::placeholder{color:hsl(var(--muted-foreground))}input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=hidden]):focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=hidden]):disabled{cursor:not-allowed;opacity:.5}input[aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 1px hsl(var(--destructive) / .2)}input[aria-invalid=true]:focus-visible{outline-color:hsl(var(--destructive));box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--destructive))}input[type=file]{align-items:center;padding-top:.25rem;padding-bottom:.25rem}input[type=file]::file-selector-button{border-radius:calc(var(--radius) - 4px);height:1.75rem;color:hsl(var(--foreground));cursor:pointer;font-family:var(--font-sans);background-color:#0000;border:0;margin:-.125rem .75rem -.125rem -.5rem;padding:0 .625rem;font-size:.875rem;font-weight:500}input[type=file]::file-selector-button:hover{background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}input[readonly]{background-color:hsl(var(--muted));opacity:.7}@media (width>=768px){input:not([type=button]):not([type=submit]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=hidden]){font-size:.875rem}}`,"../lib/preflight.css":`*,:before,:after{box-sizing:border-box}*{border-color:hsl(var(--border))}html{-webkit-text-size-adjust:100%;line-height:1.5}body{line-height:inherit;margin:0}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,optgroup,select,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;margin:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button;background-image:none}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}textarea{resize:vertical}::placeholder{color:hsl(var(--muted-foreground));opacity:1}[hidden]{display:none!important}`,"../lib/slider.css":`input[type=range]{appearance:none;cursor:pointer;touch-action:none;background:0 0;outline:none;width:100%;height:1.25rem}input[type=range]::-webkit-slider-runnable-track{background-color:hsl(var(--primary) / .2);border-radius:9999px;height:.375rem}input[type=range]::-moz-range-track{background-color:hsl(var(--primary) / .2);border-radius:9999px;height:.375rem}input[type=range]::-webkit-slider-thumb{appearance:none;border:2px solid hsl(var(--primary));background-color:hsl(var(--background));border-radius:9999px;width:1.25rem;height:1.25rem;margin-top:-.4375rem;transition:border-color .15s,box-shadow .15s;box-shadow:0 1px 3px #0000001a,0 1px 2px -1px #0000001a}input[type=range]::-moz-range-thumb{border:2px solid hsl(var(--primary));background-color:hsl(var(--background));border-radius:9999px;width:1.25rem;height:1.25rem;transition:border-color .15s,box-shadow .15s;box-shadow:0 1px 3px #0000001a,0 1px 2px -1px #0000001a}input[type=range]:focus-visible::-webkit-slider-thumb{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}input[type=range]:focus-visible::-moz-range-thumb{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}input[type=range]:focus-visible{outline:none}input[type=range]:focus-visible::-moz-focus-outer{border:0}input[type=range]:disabled{opacity:.5;cursor:not-allowed}input[type=range]:disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]:disabled::-moz-range-thumb{cursor:not-allowed}input[type=range].scx-vertical{writing-mode:vertical-lr;direction:rtl;width:1.25rem;height:12rem}input[type=range].scx-vertical::-webkit-slider-runnable-track{width:.375rem;height:100%}input[type=range].scx-vertical::-webkit-slider-thumb{margin-top:0;margin-left:-.4375rem}input[type=range].scx-vertical::-moz-range-track{width:.375rem;height:100%}.scx-slider{touch-action:none;-webkit-user-select:none;user-select:none;align-items:center;width:100%;height:1.25rem;display:flex;position:relative}.scx-slider-track{background-color:hsl(var(--primary) / .2);border-radius:9999px;flex-grow:1;height:.375rem;position:relative}.scx-slider-range{background-color:hsl(var(--primary));border-radius:9999px;height:100%;position:absolute}.scx-slider-thumb{border:2px solid hsl(var(--primary));background-color:hsl(var(--background));cursor:pointer;border-radius:9999px;outline:none;width:1.25rem;height:1.25rem;transition:border-color .15s,box-shadow .15s;display:block;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0000001a,0 1px 2px -1px #0000001a}.scx-slider-thumb:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px;box-shadow:0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring))}.scx-slider-thumb:disabled,.scx-slider-thumb[aria-disabled=true]{display:none}.scx-slider-vertical{flex-direction:column;width:1.25rem;height:12rem}.scx-slider-vertical .scx-slider-track{flex-grow:0;width:.375rem;height:100%}.scx-slider-vertical .scx-slider-range{width:100%;height:auto}.scx-slider-vertical .scx-slider-thumb{left:auto}.scx-slider.disabled{opacity:.5;pointer-events:none}.scx-slider.disabled .scx-slider-thumb{cursor:not-allowed}`,"../lib/textarea.css":`textarea{field-sizing:content;border:1px solid hsl(var(--input));border-radius:var(--radius);width:100%;min-width:0;min-height:4rem;color:hsl(var(--foreground));font-family:var(--font-sans);background-color:#0000;outline:none;padding:.5rem .625rem;font-size:1rem;line-height:1.5;transition:color .15s,background-color .15s,border-color .15s,box-shadow .15s;display:flex}.dark textarea{background-color:hsl(var(--input) / .3)}textarea::placeholder{color:hsl(var(--muted-foreground))}textarea:focus-visible{border-color:hsl(var(--ring));box-shadow:0 0 0 3px hsl(var(--ring) / .5)}textarea:disabled{cursor:not-allowed;background-color:hsl(var(--input) / .5);opacity:.5}.dark textarea:disabled{background-color:hsl(var(--input) / .8)}textarea[aria-invalid=true]{border-color:hsl(var(--destructive));box-shadow:0 0 0 3px hsl(var(--destructive) / .2)}.dark textarea[aria-invalid=true]{border-color:hsl(var(--destructive) / .5);box-shadow:0 0 0 3px hsl(var(--destructive) / .4)}@media (width>=768px){textarea{font-size:.875rem}}`,"../lib/theme.css":`*,:before,:after{box-sizing:border-box}body{font-family:var(--font-sans);background-color:hsl(var(--background));color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--font-sans:"Inter", system-ui, -apple-system, sans-serif;--font-mono:"JetBrains Mono", ui-monospace, SFMono-Regular, monospace;--radius:.5rem;--background:0 0% 100%;--foreground:0 0% 3.9%;--card:0 0% 100%;--card-foreground:0 0% 3.9%;--popover:0 0% 100%;--popover-foreground:0 0% 3.9%;--primary:0 0% 9%;--primary-foreground:0 0% 98%;--secondary:0 0% 96.1%;--secondary-foreground:0 0% 9%;--muted:0 0% 96.1%;--muted-foreground:0 0% 45.1%;--accent:0 0% 96.1%;--accent-foreground:0 0% 9%;--destructive:0 84.2% 60.2%;--destructive-foreground:0 0% 98%;--border:0 0% 89.8%;--input:0 0% 89.8%;--ring:0 0% 3.9%;--chart-1:12 76% 61%;--chart-2:173 58% 39%;--chart-3:197 37% 24%;--chart-4:43 74% 66%;--chart-5:27 87% 67%}.dark{--background:0 0% 3.9%;--foreground:0 0% 98%;--card:0 0% 3.9%;--card-foreground:0 0% 98%;--popover:0 0% 3.9%;--popover-foreground:0 0% 98%;--primary:0 0% 98%;--primary-foreground:0 0% 9%;--secondary:0 0% 14.9%;--secondary-foreground:0 0% 98%;--muted:0 0% 14.9%;--muted-foreground:0 0% 63.9%;--accent:0 0% 14.9%;--accent-foreground:0 0% 98%;--destructive:0 62.8% 30.6%;--destructive-foreground:0 0% 98%;--border:0 0% 14.9%;--input:0 0% 14.9%;--ring:0 0% 83.1%;--chart-1:220 70% 50%;--chart-2:160 60% 45%;--chart-3:30 80% 55%;--chart-4:280 65% 60%;--chart-5:340 75% 55%}`}),Be=[`../lib/theme.css`,`../lib/preflight.css`],Ve=Object.entries(ze).filter(([e])=>!Be.includes(e)&&e!==`../lib/index.css`).sort(([e],[t])=>e.localeCompare(t)).map(([,e])=>e),z=c`${s([...Be.map(e=>ze[e]).filter(Boolean),...Ve].join(`
`))}`;function B(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var He=t({BadgePage:()=>V}),V=class extends I{static{this.styles=[z,c`
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

    mark.success {
      background-color: hsl(142 71% 45% / 0.15);
      border-color: hsl(142 71% 45% / 0.35);
      color: hsl(142 84% 25%);
    }

    :host-context(.dark) mark.success {
      background-color: hsl(142 70% 35% / 0.25);
      border-color: hsl(142 70% 45% / 0.45);
      color: hsl(142 100% 85%);
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
  `]}render(){return D`
      <h1>Badge</h1>
      <p class="desc">Displays a badge or a component that looks like a badge.</p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;mark&gt;Badge&lt;/mark&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Variants</h3>
      <div class="preview">
        <mark>Default</mark>
        <mark class="scx-secondary">Secondary</mark>
        <mark class="scx-destructive">Destructive</mark>
        <mark class="scx-outline">Outline</mark>
        <mark class="scx-ghost">Ghost</mark>
        <mark class="scx-link">Link</mark>
      </div>
      <pre><code>&lt;mark&gt;Default&lt;/mark&gt;
&lt;mark class="scx-secondary"&gt;Secondary&lt;/mark&gt;
&lt;mark class="scx-destructive"&gt;Destructive&lt;/mark&gt;
&lt;mark class="scx-outline"&gt;Outline&lt;/mark&gt;
&lt;mark class="scx-ghost"&gt;Ghost&lt;/mark&gt;
&lt;mark class="scx-link"&gt;Link&lt;/mark&gt;</code></pre>

      <h3>With Icon</h3>
      <div class="preview">
        <mark>
          <svg data-icon="inline-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
          Verified
        </mark>
        <mark class="scx-outline">
          New
          <svg data-icon="inline-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </mark>
      </div>
      <pre><code>&lt;mark&gt;
  &lt;svg data-icon="inline-start" ...&gt;&lt;/svg&gt;
  Verified
&lt;/mark&gt;</code></pre>

      <h3>With Spinner</h3>
      <div class="preview">
        <mark class="scx-secondary" aria-busy="true">
          <span data-icon="inline-start" class="scx-spinner"></span>
          Syncing
        </mark>
      </div>
      <pre><code>&lt;mark class="scx-secondary" aria-busy="true"&gt;
  &lt;span data-icon="inline-start" class="scx-spinner"&gt;&lt;/span&gt;
  Syncing
&lt;/mark&gt;</code></pre>

      <h3>Link</h3>
      <div class="preview">
        <a class="inline-link" href="https://example.com" target="_blank" rel="noreferrer">
          <mark class="scx-link">Read docs</mark>
        </a>
      </div>
      <pre><code>&lt;a href="https://example.com"&gt;
  &lt;mark class="scx-link"&gt;Read docs&lt;/mark&gt;
&lt;/a&gt;</code></pre>

      <h3>Custom Colors</h3>
      <div class="preview">
        <mark class="success">Success</mark>
      </div>
      <pre><code>mark.success {
  background-color: hsl(142 71% 45% / 0.15);
  border-color: hsl(142 71% 45% / 0.35);
  color: hsl(142 84% 25%);
}</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element / class</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>mark</code></td>
              <td><code>scx-secondary | scx-destructive | scx-outline | scx-ghost | scx-link</code></td>
              <td>Badge variants. No class is the default badge.</td>
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
              <td><code>mark.your-class</code></td>
              <td>Override colors, borders, radius, or spacing directly with CSS variables or standard CSS.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};V=B([L(`badge-page`)],V);var Ue=t({ButtonPage:()=>H}),H=class extends I{static{this.styles=[z,c`
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
  `]}render(){return D`
      <h1>Button</h1>
      <p class="desc">
        Displays a button or a component that looks like a button.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;button class="scx-outline"&gt;Button&lt;/button&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <button>Button</button>
      </div>
      <pre><code>&lt;button&gt;Button&lt;/button&gt;</code></pre>

      <h3>Variants</h3>
      <div class="preview">
        <button>Default</button>
        <button class="scx-destructive">Destructive</button>
        <button class="scx-outline">Outline</button>
        <button class="scx-secondary">Secondary</button>
        <button class="scx-ghost">Ghost</button>
        <button class="scx-link">Link</button>
      </div>
      <pre><code>&lt;button&gt;Default&lt;/button&gt;
&lt;button class="scx-destructive"&gt;Destructive&lt;/button&gt;
&lt;button class="scx-outline"&gt;Outline&lt;/button&gt;
&lt;button class="scx-secondary"&gt;Secondary&lt;/button&gt;
&lt;button class="scx-ghost"&gt;Ghost&lt;/button&gt;
&lt;button class="scx-link"&gt;Link&lt;/button&gt;</code></pre>

      <h3>Sizes</h3>
      <div class="preview">
        <button class="scx-xs">Extra Small</button>
        <button class="scx-sm">Small</button>
        <button>Default</button>
        <button class="scx-lg">Large</button>
      </div>
      <pre><code>&lt;button class="scx-xs"&gt;Extra Small&lt;/button&gt;
&lt;button class="scx-sm"&gt;Small&lt;/button&gt;
&lt;button&gt;Default&lt;/button&gt;
&lt;button class="scx-lg"&gt;Large&lt;/button&gt;</code></pre>

      <h3>Icon</h3>
      <div class="preview">
        <button class="scx-icon scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-icon-xs scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-icon-sm scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button class="scx-icon-lg scx-outline" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <pre><code>&lt;button class="scx-icon scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/button&gt;
&lt;button class="scx-icon-xs scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/button&gt;
&lt;button class="scx-icon-sm scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/button&gt;
&lt;button class="scx-icon-lg scx-outline" aria-label="Search"&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/button&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <button disabled>Primary</button>
        <button class="scx-outline" disabled>Outline</button>
        <button class="scx-ghost" disabled>Ghost</button>
      </div>
      <pre><code>&lt;button disabled&gt;Primary&lt;/button&gt;
&lt;button class="scx-outline" disabled&gt;Outline&lt;/button&gt;
&lt;button class="scx-ghost" disabled&gt;Ghost&lt;/button&gt;</code></pre>

      <h3>Busy</h3>
      <div class="preview">
        <button aria-busy="true">
          <span class="scx-spinner"></span>
          Please wait
        </button>
        <button class="scx-outline" aria-busy="true">
          <span class="scx-spinner"></span>
          Please wait
        </button>
        <button class="scx-ghost" aria-busy="true">
          <span class="scx-spinner"></span>
          Please wait
        </button>
        <button class="scx-icon scx-outline" aria-busy="true" aria-label="Loading">
          <span class="scx-spinner"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </div>
      <pre><code>&lt;button aria-busy="true"&gt;
  &lt;span class="scx-spinner"&gt;&lt;/span&gt;
  Please wait
&lt;/button&gt;
&lt;button class="scx-outline" aria-busy="true"&gt;
  &lt;span class="scx-spinner"&gt;&lt;/span&gt;
  Please wait
&lt;/button&gt;
&lt;button class="scx-ghost" aria-busy="true"&gt;
  &lt;span class="scx-spinner"&gt;&lt;/span&gt;
  Please wait
&lt;/button&gt;
&lt;button class="scx-icon scx-outline" aria-busy="true" aria-label="Loading"&gt;
  &lt;span class="scx-spinner"&gt;&lt;/span&gt;
  &lt;svg ...&gt;&lt;/svg&gt;
&lt;/button&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Class / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>class</code></td>
              <td><code>scx-destructive | scx-outline | scx-secondary | scx-ghost | scx-link</code></td>
              <td>Visual variants. No class is the default button.</td>
            </tr>
            <tr>
              <td><code>class</code></td>
              <td><code>scx-xs | scx-sm | scx-lg | scx-icon | scx-icon-xs | scx-icon-sm | scx-icon-lg</code></td>
              <td>Size presets. No size class is the default size.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean attribute</code></td>
              <td>Disabled state on native buttons.</td>
            </tr>
            <tr>
              <td><code>aria-busy</code></td>
              <td><code>true</code></td>
              <td>Busy/loading state. Use with an inline <code>scx-spinner</code> element.</td>
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
              <td>Native and ARIA states are styled directly by CSS.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};H=B([L(`button-page`)],H);var We=t({CheckboxPage:()=>U}),U=class extends I{constructor(...e){super(...e),this._checked=!1}static{this.styles=[z,c`
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
  `]}_onCheckedChange(e){let t=e.currentTarget;this._checked=t.checked}render(){return D`
      <h1>Checkbox</h1>
      <p class="desc">
        A control that allows the user to toggle between checked and unchecked
        states, with support for indeterminate and invalid states.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input type="checkbox"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox">
          <span class="label">Accept terms and conditions</span>
        </label>
      </div>
      <pre><code>&lt;label style="display: inline-flex; align-items: center; gap: 0.5rem;"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span&gt;Accept terms and conditions&lt;/span&gt;
&lt;/label&gt;</code></pre>

      <h3>Checked + Controlled</h3>
      <div class="preview">
        <label class="row">
          <input
            type="checkbox"
            .checked=${this._checked}
            @change=${e=>this._onCheckedChange(e)}
          >
          <span class="label">Enable notifications</span>
        </label>
        <span class="muted">State: ${this._checked?`checked`:`unchecked`}</span>
      </div>
      <pre><code>&lt;input type="checkbox" checked&gt;
&lt;script&gt;
  checkbox.addEventListener('change', (event) =&gt; {
    console.log(event.currentTarget.checked)
  })
&lt;/script&gt;</code></pre>

      <h3>Indeterminate</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" .indeterminate=${!0} aria-checked="mixed">
          <span class="label">Partially selected</span>
        </label>
      </div>
      <pre><code>&lt;input id="partial" type="checkbox" aria-checked="mixed"&gt;
&lt;script&gt;
  document.getElementById('partial').indeterminate = true
&lt;/script&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" disabled>
          <span class="label">Disabled option</span>
        </label>
      </div>
      <pre><code>&lt;input type="checkbox" disabled&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <label class="row">
          <input type="checkbox" aria-invalid="true">
          <span class="label">Required field</span>
        </label>
      </div>
      <pre><code>&lt;input type="checkbox" aria-invalid="true"&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>State / attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>checked</code></td>
              <td>Native property / attribute</td>
              <td>Applies checked visual state.</td>
            </tr>
            <tr>
              <td><code>indeterminate</code></td>
              <td>Native property</td>
              <td>Applies mixed visual state via <code>:indeterminate</code>.</td>
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
    `}};B([R()],U.prototype,`_checked`,void 0),U=B([L(`checkbox-page`)],U);var Ge=t({ComboboxPage:()=>G}),W=[`Next.js`,`SvelteKit`,`Nuxt.js`,`Remix`,`Astro`],G=class extends I{constructor(...e){super(...e),this._singleValue=``,this._autocompleteValue=``,this._multipleValues=[]}static{this.styles=[z,c`
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
  `]}_onSingleValueChange(e){let t=e.currentTarget;this._singleValue=t.value}_onOptionListClick(e){let t=e.target;if(!(t instanceof Node))return;let n=(t instanceof Element?t:t.parentElement)?.closest(`button[data-value]`);if(!n)return;let r=new Set(this._multipleValues),i=n.dataset.value||``;r.has(i)?r.delete(i):r.add(i),this._multipleValues=W.filter(e=>r.has(e))}_onAutocompleteInput(e){let t=e.currentTarget;this._autocompleteValue=t.value}render(){return D`
      <h1>Combobox</h1>
      <p class="desc">
        Native select and datalist controls styled to sit beside the rest of
        the shadcn-inspired form elements.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <p>
        In CSS-only shadcx, combobox-style controls are native form elements.
        Use <code>&lt;select&gt;</code> for fixed choices or
        <code>&lt;input list&gt;</code> when you want browser-provided
        autocomplete.
      </p>
      <pre><code>&lt;select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h2>Examples</h2>
      <h3>Basic</h3>
      <div class="preview">
        <select
          aria-label="Select a framework"
          @change=${e=>this._onSingleValueChange(e)}
        >
          <option value="">Select a framework</option>
          ${W.map(e=>D`<option value=${e}>${e}</option>`)}
        </select>
        <div class="state">Value: ${this._singleValue||`(none)`}</div>
      </div>
      <pre><code>&lt;select name="framework"&gt;
  &lt;option value=""&gt;Select a framework&lt;/option&gt;
  &lt;option&gt;Next.js&lt;/option&gt;
  &lt;option&gt;SvelteKit&lt;/option&gt;
  &lt;option&gt;Nuxt.js&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h3>Autocomplete</h3>
      <p>
        The input itself is fully styled, but the suggestion popup belongs to
        the browser and operating system, so its visual styling is limited.
      </p>
      <div class="preview">
        <input
          list="framework-options"
          placeholder="Search frameworks"
          @input=${e=>this._onAutocompleteInput(e)}
        >
        <datalist id="framework-options">
          ${W.map(e=>D`<option value=${e}></option>`)}
        </datalist>
        <div class="state">Value: ${this._autocompleteValue||`(none)`}</div>
      </div>
      <pre><code>&lt;input list="framework-options" placeholder="Search frameworks"&gt;
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
          ${W.map(e=>D`
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
        <select disabled aria-label="Disabled framework">
          <option>Disabled</option>
        </select>
        <br><br>
        <select aria-invalid="true" aria-label="Required framework">
          <option value="">Required framework</option>
          ${W.map(e=>D`<option value=${e}>${e}</option>`)}
        </select>
      </div>
      <pre><code>&lt;select disabled&gt;
  &lt;option&gt;Disabled&lt;/option&gt;
&lt;/select&gt;
&lt;select aria-invalid="true"&gt;
  &lt;option value=""&gt;Required framework&lt;/option&gt;
&lt;/select&gt;</code></pre>

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
            <tr><td><code>select</code></td><td>Native element</td><td>Styled as the shadcn-like combobox/select trigger.</td></tr>
            <tr><td><code>input[list]</code></td><td>Native element</td><td>Styled like an input while the browser owns autocomplete UI.</td></tr>
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
              <td><code>select</code>, <code>input[list]</code>, buttons</td>
              <td>Use native form events and read <code>event.currentTarget.value</code> or update <code>aria-pressed</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};B([R()],G.prototype,`_singleValue`,void 0),B([R()],G.prototype,`_autocompleteValue`,void 0),B([R()],G.prototype,`_multipleValues`,void 0),G=B([L(`combobox-page`)],G);var Ke=t({InputPage:()=>K}),K=class extends I{static{this.styles=[z,c`
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
  `]}render(){return D`
      <h1>Input</h1>
      <p class="desc">
        A text input component for forms and user data entry with built-in
        styling and accessibility features.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input placeholder="Enter text"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <input placeholder="Enter text">
      </div>
      <pre><code>&lt;input placeholder="Enter text"&gt;</code></pre>

      <h3>Types</h3>
      <div class="preview">
        <input type="text" placeholder="Text">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="search" placeholder="Search">
      </div>
      <pre><code>&lt;input type="text" placeholder="Text"&gt;
&lt;input type="email" placeholder="Email"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="search" placeholder="Search"&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <input placeholder="Disabled" disabled>
      </div>
      <pre><code>&lt;input placeholder="Disabled" disabled&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <input placeholder="Error" aria-invalid="true">
      </div>
      <pre><code>&lt;input placeholder="Error" aria-invalid="true"&gt;</code></pre>

      <h3>Readonly</h3>
      <div class="preview">
        <input placeholder="Read only" readonly value="Cannot edit">
      </div>
      <pre><code>&lt;input placeholder="Read only" readonly value="Cannot edit"&gt;</code></pre>

      <h3>File</h3>
      <div class="preview">
        <input type="file">
      </div>
      <pre><code>&lt;input type="file"&gt;</code></pre>

      <h3>Required</h3>
      <div class="preview">
        <input placeholder="Required field" required>
      </div>
      <pre><code>&lt;input placeholder="Required field" required&gt;</code></pre>

      <h3>With Button</h3>
      <div class="preview">
        <div class="inline-row">
          <input type="search" placeholder="Search...">
          <button class="scx-outline">Search</button>
        </div>
      </div>
      <pre><code>&lt;div style="display: flex; gap: 0.5rem;"&gt;
  &lt;input type="search" placeholder="Search..."&gt;
  &lt;button class="scx-outline"&gt;Search&lt;/button&gt;
&lt;/div&gt;</code></pre>

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
              <td><code>input</code></td>
              <td>Text-like inputs are styled directly. Checkboxes and textareas have their own styles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};K=B([L(`input-page`)],K);var qe=t({OverviewPage:()=>q}),q=class extends I{static{this.styles=c`
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
  `}_navigateBadge(e){e.preventDefault(),location.hash=`badge`}_navigateButton(e){e.preventDefault(),location.hash=`button`}_navigateInput(e){e.preventDefault(),location.hash=`input`}_navigateTextarea(e){e.preventDefault(),location.hash=`textarea`}_navigateCheckbox(e){e.preventDefault(),location.hash=`checkbox`}_navigateCombobox(e){e.preventDefault(),location.hash=`combobox`}_navigateThemeGenerator(e){e.preventDefault(),location.hash=`theme-generator`}render(){return D`
      <h1>shadcx</h1>
      <p class="lead">
        shadcn/ui reimagined as pure CSS for native HTML. No framework lock-in,
        no Tailwind CSS, no component runtime &mdash; just semantic elements
        styled by shadcn-compatible variables.
      </p>

      <h2>Getting Started</h2>
      <p>
        Load the stylesheet via CDN and start using native HTML elements in any
        page:
      </p>
      <pre><code>&lt;link rel="stylesheet" href="https://dobrinyonkov.github.io/shadcx/assets/index.css"&gt;</code></pre>

      <h2>Theme Generator</h2>
      <p>
        Build a shadcn-compatible variable set visually, preview it against the
        native components, and export the CSS in one click.
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
    `}};q=B([L(`overview-page`)],q);var Je=t({SliderPage:()=>J}),J=class extends I{constructor(...e){super(...e),this._controlledValue=33,this._rangeValues=[25,75],this._activeRangeThumb=-1,this._multiValues=[10,30,70],this._activeMultiThumb=-1,this._onPointerMove=e=>{this._activeRangeThumb>=0&&this._updateRangeThumb(e),this._activeMultiThumb>=0&&this._updateMultiThumb(e)},this._onPointerUp=()=>{this._activeRangeThumb=-1,this._activeMultiThumb=-1}}static{this.styles=[z,c`
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
  `]}connectedCallback(){super.connectedCallback(),window.addEventListener(`pointermove`,this._onPointerMove),window.addEventListener(`pointerup`,this._onPointerUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`pointermove`,this._onPointerMove),window.removeEventListener(`pointerup`,this._onPointerUp)}_getValueFromEvent(e,t,n,r){let i=t.getBoundingClientRect(),a=Math.max(0,Math.min(1,(e.clientX-i.left)/i.width));return Math.round((n+a*(r-n))*100)/100}_startRangeDrag(e,t){t.preventDefault(),this._activeRangeThumb=e,t.target.setPointerCapture?.(t.pointerId)}_updateRangeThumb(e){let t=this.shadowRoot?.querySelector(`.scx-range-track`);if(!t)return;let n=this._getValueFromEvent(e,t,0,100),r=[...this._rangeValues];r[this._activeRangeThumb]=n,this._activeRangeThumb===0?r[0]=Math.min(n,r[1]-1):r[1]=Math.max(n,r[0]+1),this._rangeValues=r}_startMultiDrag(e,t){t.preventDefault(),this._activeMultiThumb=e,t.target.setPointerCapture?.(t.pointerId)}_updateMultiThumb(e){let t=this.shadowRoot?.querySelector(`.scx-multi-track`);if(!t)return;let n=this._getValueFromEvent(e,t,0,100),r=[...this._multiValues];r[this._activeMultiThumb]=Math.max(this._activeMultiThumb>0?r[this._activeMultiThumb-1]+1:0,Math.min(this._activeMultiThumb<r.length-1?r[this._activeMultiThumb+1]-1:100,n)),this._multiValues=r}_onRangeKeydown(e,t){if(t.key===`ArrowRight`||t.key===`ArrowUp`){t.preventDefault();let n=[...this._rangeValues];n[e]=Math.min(100,n[e]+1),e===0&&n[0]>=n[1]&&(n[0]=n[1]-1),e===1&&n[1]<=n[0]&&(n[1]=n[0]+1),this._rangeValues=n}else if(t.key===`ArrowLeft`||t.key===`ArrowDown`){t.preventDefault();let n=[...this._rangeValues];n[e]=Math.max(0,n[e]-1),e===0&&n[0]>=n[1]&&(n[0]=n[1]-1),e===1&&n[1]<=n[0]&&(n[1]=n[0]+1),this._rangeValues=n}}_onMultiKeydown(e,t){if(t.key===`ArrowRight`||t.key===`ArrowUp`){t.preventDefault();let n=[...this._multiValues];n[e]=Math.min(100,n[e]+1);for(let e=0;e<n.length-1;e++)n[e]>=n[e+1]&&(n[e+1]=n[e]+1);this._multiValues=n}else if(t.key===`ArrowLeft`||t.key===`ArrowDown`){t.preventDefault();let n=[...this._multiValues];n[e]=Math.max(0,n[e]-1);for(let e=n.length-1;e>0;e--)n[e]<=n[e-1]&&(n[e-1]=n[e]-1);this._multiValues=n}}render(){return D`
      <h1>Slider</h1>
      <p class="desc">
        An input where the user selects a value from within a given range.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;input type="range" min="0" max="100" step="1" value="33"&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <input type="range" min="0" max="100" step="1" .value=${`33`}>
      </div>
      <pre><code>&lt;input type="range" min="0" max="100" step="1" value="33"&gt;</code></pre>

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
          ${this._multiValues.map((e,t)=>D`
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
        <input type="range" class="scx-vertical" min="0" max="100" step="1" .value=${`33`}>
      </div>
      <pre><code>&lt;input type="range" class="scx-vertical" min="0" max="100" step="1" value="33"&gt;</code></pre>

      <h3>Controlled</h3>
      <div class="preview">
        <div class="flex-col">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            .value=${String(this._controlledValue)}
            @input=${e=>{this._controlledValue=Number(e.target.value)}}
          >
          <span class="value-readout">${this._controlledValue}</span>
        </div>
      </div>
      <pre><code>&lt;input type="range" min="0" max="100" step="1"&gt;
&lt;script&gt;
  document.querySelector('input[type=range]')
    .addEventListener('input', (e) =&gt; {
      console.log(e.target.value)
    })
&lt;/script&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <input type="range" min="0" max="100" step="1" .value=${`33`} disabled>
      </div>
      <pre><code>&lt;input type="range" min="0" max="100" step="1" value="33" disabled&gt;</code></pre>

      <h2>API Reference</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element / Attribute</th>
              <th>Values</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;input type="range"&gt;</code></td>
              <td>Native element</td>
              <td>Single-thumb slider with full browser accessibility.</td>
            </tr>
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
              <td><code>class</code></td>
              <td><code>scx-vertical</code></td>
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
    `}};B([R()],J.prototype,`_controlledValue`,void 0),B([R()],J.prototype,`_rangeValues`,void 0),B([R()],J.prototype,`_multiValues`,void 0),J=B([L(`slider-page`)],J);var Ye=t({TextareaPage:()=>Y}),Y=class extends I{static{this.styles=[z,c`
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

    .preview > textarea,
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
  `]}render(){return D`
      <h1>Textarea</h1>
      <p class="desc">
        Displays a form textarea or a component that looks like a textarea.
      </p>

      <h2>Installation</h2>
      <pre><code>&lt;link rel="stylesheet" href=".../assets/index.css"&gt;</code></pre>

      <h2>Usage</h2>
      <pre><code>&lt;textarea placeholder="Type your message here."&gt;&lt;/textarea&gt;</code></pre>

      <h2>Examples</h2>

      <h3>Basic</h3>
      <div class="preview">
        <textarea placeholder="Type your message here."></textarea>
      </div>
      <pre><code>&lt;textarea placeholder="Type your message here."&gt;&lt;/textarea&gt;</code></pre>

      <h3>Field</h3>
      <div class="preview">
        <div class="field">
          <label for="textarea-message">Message</label>
          <textarea id="textarea-message" placeholder="Type your message here." rows="6"></textarea>
          <small>Enter your message below.</small>
        </div>
      </div>
      <pre><code>&lt;label for="textarea-message"&gt;Message&lt;/label&gt;
&lt;textarea id="textarea-message" placeholder="Type your message here." rows="6"&gt;&lt;/textarea&gt;
&lt;small&gt;Enter your message below.&lt;/small&gt;</code></pre>

      <h3>Disabled</h3>
      <div class="preview">
        <div class="field" data-disabled>
          <label for="textarea-disabled">Message</label>
          <textarea id="textarea-disabled" placeholder="Type your message here." disabled></textarea>
        </div>
      </div>
      <pre><code>&lt;div data-disabled&gt;
  &lt;label for="textarea-disabled"&gt;Message&lt;/label&gt;
  &lt;textarea id="textarea-disabled" placeholder="Type your message here." disabled&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>

      <h3>Invalid</h3>
      <div class="preview">
        <div class="field" data-invalid>
          <label for="textarea-invalid">Message</label>
          <textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"></textarea>
          <small>Please enter a valid message.</small>
        </div>
      </div>
      <pre><code>&lt;div data-invalid&gt;
  &lt;label for="textarea-invalid"&gt;Message&lt;/label&gt;
  &lt;textarea id="textarea-invalid" placeholder="Type your message here." aria-invalid="true"&gt;&lt;/textarea&gt;
  &lt;small&gt;Please enter a valid message.&lt;/small&gt;
&lt;/div&gt;</code></pre>

      <h3>Button</h3>
      <div class="preview">
        <div class="stack">
          <textarea placeholder="Type your message here."></textarea>
          <button>Send message</button>
        </div>
      </div>
      <pre><code>&lt;div style="display: grid; gap: 0.5rem;"&gt;
  &lt;textarea placeholder="Type your message here."&gt;&lt;/textarea&gt;
  &lt;button&gt;Send message&lt;/button&gt;
&lt;/div&gt;</code></pre>

      <h3>RTL</h3>
      <div class="preview">
        <div class="rtl-box" dir="rtl">
          <label for="textarea-rtl">التعليقات</label>
          <textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."></textarea>
        </div>
      </div>
      <pre><code>&lt;div dir="rtl"&gt;
  &lt;label for="textarea-rtl"&gt;التعليقات&lt;/label&gt;
  &lt;textarea id="textarea-rtl" placeholder="شاركنا أفكارك حول خدمتنا."&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>

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
            <tr>
              <td><code>textarea</code></td>
              <td>Native element</td>
              <td>Styled directly with shadcn-compatible border, radius, focus, and text tokens.</td>
            </tr>
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
    `}};Y=B([L(`textarea-page`)],Y);var Xe=t({ThemeGeneratorPage:()=>Z}),Ze=`font-sans.font-mono.radius.background.foreground.card.card-foreground.popover.popover-foreground.primary.primary-foreground.secondary.secondary-foreground.muted.muted-foreground.accent.accent-foreground.destructive.destructive-foreground.border.input.ring.chart-1.chart-2.chart-3.chart-4.chart-5`.split(`.`),Qe={"font-sans":`'Inter', system-ui, -apple-system, sans-serif`,"font-mono":`'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`,radius:`0.5rem`,background:`0 0% 100%`,foreground:`0 0% 3.9%`,card:`0 0% 100%`,"card-foreground":`0 0% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`0 0% 3.9%`,primary:`0 0% 9%`,"primary-foreground":`0 0% 98%`,secondary:`0 0% 96.1%`,"secondary-foreground":`0 0% 9%`,muted:`0 0% 96.1%`,"muted-foreground":`0 0% 45.1%`,accent:`0 0% 96.1%`,"accent-foreground":`0 0% 9%`,destructive:`0 84.2% 60.2%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 89.8%`,input:`0 0% 89.8%`,ring:`0 0% 3.9%`,"chart-1":`12 76% 61%`,"chart-2":`173 58% 39%`,"chart-3":`197 37% 24%`,"chart-4":`43 74% 66%`,"chart-5":`27 87% 67%`},$e={"font-sans":`'Inter', system-ui, -apple-system, sans-serif`,"font-mono":`'JetBrains Mono', ui-monospace, SFMono-Regular, monospace`,radius:`0.5rem`,background:`0 0% 3.9%`,foreground:`0 0% 98%`,card:`0 0% 3.9%`,"card-foreground":`0 0% 98%`,popover:`0 0% 3.9%`,"popover-foreground":`0 0% 98%`,primary:`0 0% 98%`,"primary-foreground":`0 0% 9%`,secondary:`0 0% 14.9%`,"secondary-foreground":`0 0% 98%`,muted:`0 0% 14.9%`,"muted-foreground":`0 0% 63.9%`,accent:`0 0% 14.9%`,"accent-foreground":`0 0% 98%`,destructive:`0 62.8% 30.6%`,"destructive-foreground":`0 0% 98%`,border:`0 0% 14.9%`,input:`0 0% 14.9%`,ring:`0 0% 83.1%`,"chart-1":`220 70% 50%`,"chart-2":`160 60% 45%`,"chart-3":`30 80% 55%`,"chart-4":`280 65% 60%`,"chart-5":`340 75% 55%`},et={Neutral:{background:`0 0% 100%`,foreground:`0 0% 3.9%`,card:`0 0% 100%`,"card-foreground":`0 0% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`0 0% 3.9%`,secondary:`0 0% 96.1%`,"secondary-foreground":`0 0% 9%`,muted:`0 0% 96.1%`,"muted-foreground":`0 0% 45.1%`,accent:`0 0% 96.1%`,"accent-foreground":`0 0% 9%`,border:`0 0% 89.8%`,input:`0 0% 89.8%`},Zinc:{background:`0 0% 100%`,foreground:`240 10% 3.9%`,card:`0 0% 100%`,"card-foreground":`240 10% 3.9%`,popover:`0 0% 100%`,"popover-foreground":`240 10% 3.9%`,secondary:`240 4.8% 95.9%`,"secondary-foreground":`240 5.9% 10%`,muted:`240 4.8% 95.9%`,"muted-foreground":`240 3.8% 46.1%`,accent:`240 4.8% 95.9%`,"accent-foreground":`240 5.9% 10%`,border:`240 5.9% 90%`,input:`240 5.9% 90%`},Slate:{background:`0 0% 100%`,foreground:`222.2 84% 4.9%`,card:`0 0% 100%`,"card-foreground":`222.2 84% 4.9%`,popover:`0 0% 100%`,"popover-foreground":`222.2 84% 4.9%`,secondary:`210 40% 96.1%`,"secondary-foreground":`222.2 47.4% 11.2%`,muted:`210 40% 96.1%`,"muted-foreground":`215.4 16.3% 46.9%`,accent:`210 40% 96.1%`,"accent-foreground":`222.2 47.4% 11.2%`,border:`214.3 31.8% 91.4%`,input:`214.3 31.8% 91.4%`},Stone:{background:`0 0% 100%`,foreground:`20 14.3% 4.1%`,card:`0 0% 100%`,"card-foreground":`20 14.3% 4.1%`,popover:`0 0% 100%`,"popover-foreground":`20 14.3% 4.1%`,secondary:`60 4.8% 95.9%`,"secondary-foreground":`24 9.8% 10%`,muted:`60 4.8% 95.9%`,"muted-foreground":`25 5.3% 44.7%`,accent:`60 4.8% 95.9%`,"accent-foreground":`24 9.8% 10%`,border:`20 5.9% 90%`,input:`20 5.9% 90%`}},tt={Neutral:{background:`0 0% 3.9%`,foreground:`0 0% 98%`,card:`0 0% 3.9%`,"card-foreground":`0 0% 98%`,popover:`0 0% 3.9%`,"popover-foreground":`0 0% 98%`,secondary:`0 0% 14.9%`,"secondary-foreground":`0 0% 98%`,muted:`0 0% 14.9%`,"muted-foreground":`0 0% 63.9%`,accent:`0 0% 14.9%`,"accent-foreground":`0 0% 98%`,border:`0 0% 14.9%`,input:`0 0% 14.9%`},Zinc:{background:`240 10% 3.9%`,foreground:`0 0% 98%`,card:`240 10% 3.9%`,"card-foreground":`0 0% 98%`,popover:`240 10% 3.9%`,"popover-foreground":`0 0% 98%`,secondary:`240 3.7% 15.9%`,"secondary-foreground":`0 0% 98%`,muted:`240 3.7% 15.9%`,"muted-foreground":`240 5% 64.9%`,accent:`240 3.7% 15.9%`,"accent-foreground":`0 0% 98%`,border:`240 3.7% 15.9%`,input:`240 3.7% 15.9%`},Slate:{background:`222.2 84% 4.9%`,foreground:`210 40% 98%`,card:`222.2 84% 4.9%`,"card-foreground":`210 40% 98%`,popover:`222.2 84% 4.9%`,"popover-foreground":`210 40% 98%`,secondary:`217.2 32.6% 17.5%`,"secondary-foreground":`210 40% 98%`,muted:`217.2 32.6% 17.5%`,"muted-foreground":`215 20.2% 65.1%`,accent:`217.2 32.6% 17.5%`,"accent-foreground":`210 40% 98%`,border:`217.2 32.6% 17.5%`,input:`217.2 32.6% 17.5%`},Stone:{background:`20 14.3% 4.1%`,foreground:`0 0% 95%`,card:`20 14.3% 4.1%`,"card-foreground":`0 0% 95%`,popover:`20 14.3% 4.1%`,"popover-foreground":`0 0% 95%`,secondary:`12 6.5% 15.1%`,"secondary-foreground":`0 0% 98%`,muted:`12 6.5% 15.1%`,"muted-foreground":`24 5.4% 63.9%`,accent:`12 6.5% 15.1%`,"accent-foreground":`0 0% 98%`,border:`12 6.5% 15.1%`,input:`12 6.5% 15.1%`}},nt={Default:{primary:`0 0% 9%`,"primary-foreground":`0 0% 98%`,ring:`0 0% 3.9%`,radius:`0.5rem`},Nova:{primary:`263 70% 50%`,"primary-foreground":`0 0% 98%`,accent:`263 48% 95%`,"accent-foreground":`263 64% 22%`,ring:`263 70% 50%`,radius:`0.75rem`},Grove:{primary:`152 56% 36%`,"primary-foreground":`0 0% 98%`,accent:`152 42% 94%`,"accent-foreground":`153 70% 18%`,ring:`152 56% 36%`,radius:`0.625rem`},Ember:{primary:`18 88% 46%`,"primary-foreground":`0 0% 98%`,accent:`28 86% 94%`,"accent-foreground":`18 88% 22%`,ring:`18 88% 46%`,radius:`0.375rem`}},rt={Default:{primary:`0 0% 98%`,"primary-foreground":`0 0% 9%`,ring:`0 0% 83.1%`,radius:`0.5rem`},Nova:{primary:`263 72% 66%`,"primary-foreground":`0 0% 98%`,accent:`263 35% 18%`,"accent-foreground":`263 90% 88%`,ring:`263 72% 66%`,radius:`0.75rem`},Grove:{primary:`152 62% 48%`,"primary-foreground":`0 0% 98%`,accent:`152 33% 16%`,"accent-foreground":`152 74% 86%`,ring:`152 62% 48%`,radius:`0.625rem`},Ember:{primary:`18 90% 58%`,"primary-foreground":`0 0% 98%`,accent:`18 42% 17%`,"accent-foreground":`28 92% 86%`,ring:`18 90% 58%`,radius:`0.375rem`}},X=[{label:`Inter`,value:`'Inter', system-ui, -apple-system, sans-serif`},{label:`Geist`,value:`'Geist', 'Inter', system-ui, sans-serif`},{label:`System`,value:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`},{label:`Serif`,value:`ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`}],it=[{label:`Primary`,token:`primary`,hint:`Buttons, selected states`},{label:`Accent`,token:`accent`,hint:`Hover and soft surfaces`},{label:`Destructive`,token:`destructive`,hint:`Invalid and danger states`},{label:`Border`,token:`border`,hint:`Cards and separators`},{label:`Ring`,token:`ring`,hint:`Focus outlines`}],at=[{label:`Chart 1`,token:`chart-1`},{label:`Chart 2`,token:`chart-2`},{label:`Chart 3`,token:`chart-3`},{label:`Chart 4`,token:`chart-4`},{label:`Chart 5`,token:`chart-5`}],Z=class extends I{constructor(...e){super(...e),this._base=`Neutral`,this._style=`Default`,this._copied=!1,this._dark=document.documentElement.classList.contains(`dark`),this._theme=this._createTheme()}connectedCallback(){super.connectedCallback(),this._darkObserver=new MutationObserver(()=>this._syncDocumentTheme()),this._darkObserver.observe(document.documentElement,{attributeFilter:[`class`],attributes:!0}),this._syncDocumentTheme()}disconnectedCallback(){this._darkObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){this.renderRoot.querySelectorAll(`[data-action="shuffle"]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),this._shuffle()})}),this.renderRoot.querySelectorAll(`[data-action="export"]`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),this._copyCss()})})}static{this.styles=[z,c`
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

    .action-stack button {
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
  `]}get _basePaletteSet(){return this._dark?tt:et}get _stylePresetSet(){return this._dark?rt:nt}get _themeStyle(){return Ze.map(e=>`--${e}: ${this._theme[e]}`).join(`; `)}get _radiusValue(){return Number.parseFloat(this._theme.radius.replace(`rem`,``))}get _fontLabel(){return X.find(e=>e.value===this._theme[`font-sans`])?.label??`Custom`}_createTheme(){let e=this._dark?$e:Qe,t=this._basePaletteSet[this._base],n=this._stylePresetSet[this._style];return{...e,...t,...n}}_syncDocumentTheme(){let e=document.documentElement.classList.contains(`dark`);if(e===this._dark)return;let t=this._theme[`font-sans`];this._dark=e,this._theme={...this._createTheme(),"font-sans":t}}_setToken(e,t){let n={...this._theme,[e]:t};e===`primary`&&(n[`primary-foreground`]=this._foregroundFor(t)),e===`accent`&&(n[`accent-foreground`]=this._foregroundFor(t)),e===`destructive`&&(n[`destructive-foreground`]=this._foregroundFor(t)),this._theme=n}_setColor(e,t){let n=t.currentTarget;this._setToken(e,this._hexToHsl(n.value))}_setRadius(e){let t=e.currentTarget;this._theme={...this._theme,radius:`${t.value}rem`}}_setFont(e){this._theme={...this._theme,"font-sans":e}}_applyBase(e){let t=e.currentTarget;this._base=t.value,this._theme={...this._theme,...this._basePaletteSet[t.value]}}_applyStyle(e){let t=e.currentTarget;this._style=t.value,this._theme={...this._theme,...this._stylePresetSet[t.value]}}_shuffle(){let e=Object.keys(et),t=Object.keys(nt),n=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)],i=Math.floor(Math.random()*360),a=(i+72+Math.floor(Math.random()*120))%360,o=(i+32)%360,s=this._dark?58+Math.floor(Math.random()*14):38+Math.floor(Math.random()*13),c=this._dark?16:94,l=`${i} ${64+Math.floor(Math.random()*18)}% ${s}%`,u=`${a} ${52+Math.floor(Math.random()*18)}% ${c}%`,d=[.25,.375,.5,.625,.75,1][Math.floor(Math.random()*6)];this._base=n,this._style=r,this._theme={...this._theme,...this._basePaletteSet[n],...this._stylePresetSet[r],primary:l,"primary-foreground":this._foregroundFor(l),accent:u,"accent-foreground":this._foregroundFor(u),ring:l,radius:`${d}rem`,"chart-1":`${o} 76% 56%`,"chart-2":`${(o+58)%360} 62% 44%`,"chart-3":`${(o+123)%360} 48% 42%`,"chart-4":`${(o+188)%360} 78% 62%`,"chart-5":`${(o+247)%360} 70% 58%`}}async _copyCss(){try{await navigator.clipboard.writeText(this._buildCss()),this._copied=!0,window.setTimeout(()=>{this._copied=!1},1800)}catch{this._copied=!1}}_buildCss(){let e=Ze.map(e=>`  --${e}: ${this._theme[e]};`).join(`
`);return`${this._dark?`.dark`:`:root`} {\n${e}\n}\n`}_hslToHex(e){let t=e.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);if(!t)return`#000000`;let n=Number.parseFloat(t[1])/360,r=Number.parseFloat(t[2])/100,i=Number.parseFloat(t[3])/100;if(r===0){let e=Math.round(i*255);return this._toHex(e,e,e)}let a=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e},o=i<.5?i*(1+r):i+r-i*r,s=2*i-o,c=Math.round(a(s,o,n+1/3)*255),l=Math.round(a(s,o,n)*255),u=Math.round(a(s,o,n-1/3)*255);return this._toHex(c,l,u)}_hexToHsl(e){let t=Number.parseInt(e.slice(1,3),16)/255,n=Number.parseInt(e.slice(3,5),16)/255,r=Number.parseInt(e.slice(5,7),16)/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=0,s=0,c=(i+a)/2;if(i!==a){let e=i-a;s=c>.5?e/(2-i-a):e/(i+a),o=i===t?(n-r)/e+(n<r?6:0):i===n?(r-t)/e+2:(t-n)/e+4,o/=6}return`${Math.round(o*360)} ${Math.round(s*100)}% ${Math.round(c*100)}%`}_toHex(e,t,n){return`#${[e,t,n].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}_foregroundFor(e){let t=e.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);return(t?Number.parseFloat(t[3]):50)>62?`0 0% 9%`:`0 0% 98%`}_renderSelectControl(e,t,n,r){return D`
      <div class="control-row">
        <span class="control-copy">
          <span>${e}</span>
          <strong>${t}</strong>
        </span>
        <select aria-label=${e} @change=${r}>
          ${n.map(e=>D`
            <option value=${e} ?selected=${e===t}>${e}</option>
          `)}
        </select>
      </div>
    `}_renderColorControl(e,t,n){return D`
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
    `}render(){return D`
      <div class="generator" style=${this._themeStyle} data-testid="theme-generator">
        <aside class="controls" aria-label="Theme controls">
          <div class="controls-header">
            <span class="controls-title">
              <strong>Theme Generator</strong>
              <span>shadcn variables</span>
            </span>
            <button
              class="scx-icon scx-outline"
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
            </button>
          </div>

          <div class="controls-body">
            <div class="control-group">
              ${this._renderSelectControl(`Style`,this._style,Object.keys(nt),e=>this._applyStyle(e))}
              ${this._renderSelectControl(`Base Color`,this._base,Object.keys(et),e=>this._applyBase(e))}
              ${this._renderSelectControl(`Font`,this._fontLabel,X.map(e=>e.label),e=>{let t=e.currentTarget,n=X.find(e=>e.label===t.value);n&&this._setFont(n.value)})}
            </div>

            <div class="control-group">
              ${it.map(e=>this._renderColorControl(e.label,e.token,e.hint))}
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
              ${at.map(e=>this._renderColorControl(e.label,e.token,`Chart token`))}
            </div>

            <div class="action-stack">
              <button
                class="scx-outline"
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
              </button>
              <button
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
              </button>
            </div>
          </div>
        </aside>

        <section class="preview" aria-label="Component preview">
          <div class="preview-header">
            <div class="preview-heading">
              <h1>Theme Preview</h1>
              <p>Native buttons, form controls, badges, lists, and chart colors using the current variable set.</p>
            </div>
            <div class="preview-actions">
              <button>Deploy</button>
              <button class="scx-outline">Preview</button>
            </div>
          </div>

          <div class="preview-body">
            <div class="showcase">
              <div class="section-title">
                <h2>Components</h2>
                <span>${this._base} / ${this._style}</span>
              </div>

              <div class="button-row">
                <button>Primary</button>
                <button class="scx-secondary">Secondary</button>
                <button class="scx-outline">Outline</button>
                <button class="scx-ghost">Ghost</button>
                <button class="scx-destructive">Delete</button>
              </div>

              <div class="badge-row">
                <mark>Default</mark>
                <mark class="scx-secondary">Secondary</mark>
                <mark class="scx-outline">Outline</mark>
                <mark class="scx-destructive">Invalid</mark>
              </div>

              <div class="form-grid">
                <div class="field">
                  <label for="generator-email">Email</label>
                  <input id="generator-email" value="hello@shadcx.dev">
                  <small>Border, input, text, and focus ring tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-invalid">Invalid state</label>
                  <input id="generator-invalid" value="Missing value" aria-invalid="true">
                  <small>Uses aria-invalid and destructive tokens.</small>
                </div>
                <div class="field wide">
                  <label for="generator-message">Message</label>
                  <textarea id="generator-message" placeholder="Share a few details."></textarea>
                  <small>Textarea background, radius, and ring follow the same tokens.</small>
                </div>
                <div class="field">
                  <label for="generator-framework">Framework</label>
                  <select id="generator-framework">
                    <option>Native HTML</option>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Svelte</option>
                  </select>
                </div>
                <label class="checkbox-line">
                  <input type="checkbox" checked>
                  Receive release notes
                </label>
              </div>

              <fieldset class="scx-option-list option-list">
                <legend>Menu Accent</legend>
                <button type="button" class="scx-outline" aria-pressed="true">Subtle</button>
                <button type="button" class="scx-outline" aria-pressed="false">Solid</button>
                <button type="button" class="scx-outline" aria-pressed="false">Ghost</button>
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

              <button
                class="scx-outline"
                type="button"
                data-action="export"
              >
                ${this._copied?`Copied CSS to clipboard`:`Copy current variables`}
              </button>
            </div>
          </div>
        </section>
      </div>
    `}};B([R()],Z.prototype,`_base`,void 0),B([R()],Z.prototype,`_style`,void 0),B([R()],Z.prototype,`_copied`,void 0),B([R()],Z.prototype,`_dark`,void 0),B([R()],Z.prototype,`_theme`,void 0),Z=B([L(`theme-generator-page`)],Z);var ot=t({ThemingPage:()=>st}),st=class extends I{static{this.styles=c`
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
  `}_navigateThemeGenerator(e){e.preventDefault(),location.hash=`theme-generator`}render(){return D`
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
    `}};st=B([L(`theming-page`)],st);var ct=Object.assign({"./pages/badge-page.ts":He,"./pages/button-page.ts":Ue,"./pages/checkbox-page.ts":We,"./pages/combobox-page.ts":Ge,"./pages/input-page.ts":Ke,"./pages/overview-page.ts":qe,"./pages/slider-page.ts":Je,"./pages/textarea-page.ts":Ye,"./pages/theme-generator-page.ts":Xe,"./pages/theming-page.ts":ot}),lt=new Map([[`/`,{elementName:`overview-page`,label:`Introduction`,wide:!1}],[`theming`,{elementName:`theming-page`,label:`Theming`,wide:!1}],[`theme-generator`,{elementName:`theme-generator-page`,label:`Theme Generator`,wide:!0}]]),ut=[`badge`,`button`,`input`,`textarea`,`checkbox`,`combobox`,`slider`];function dt(e){return e.split(`-`).map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join(` `)}function ft(e){let t=e.split(`/`).pop()?.replace(/-page\.ts$/,``)??``;return t===`overview`?`/`:t}var Q=Object.keys(ct).map(e=>{let t=ft(e),n=lt.get(t);return{route:t,elementName:n?.elementName??`${t}-page`,label:n?.label??dt(t),wide:n?.wide??!1}}),pt=[`/`,`theming`,`theme-generator`].map(e=>Q.find(t=>t.route===e)).filter(e=>!!e),mt=Q.filter(e=>!lt.has(e.route)).sort((e,t)=>{let n=ut.indexOf(e.route),r=ut.indexOf(t.route);return(n===-1?2**53-1:n)-(r===-1?2**53-1:r)||e.label.localeCompare(t.label)});function ht(e){return Q.find(t=>t.route===e)??Q.find(e=>e.route===`/`)??{route:`/`,elementName:`overview-page`,label:`Introduction`,wide:!1}}function gt(e){return D`
    <section>
      <h1>${dt(e)}</h1>
      <p>This page has not been registered yet.</p>
    </section>
  `}var _t=class extends I{constructor(...e){super(...e),this.active=``}static{this.styles=c`
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

  `}_navigate(e,t){t.preventDefault(),location.hash=e,this.active=e}_renderNavItem(e){let t=e.route===`/`?`#/`:`#/${e.route}`;return D`
      <a
        class="nav-item ${this._isActive(e.route)}"
        href=${t}
        @click=${t=>this._navigate(e.route,t)}
      >
        ${e.label}
      </a>
    `}_isActive(e){return this.active===e?`active`:``}render(){return D`
      <nav class="nav">
        <div class="nav-section">Getting Started</div>
        ${pt.map(e=>this._renderNavItem(e))}

        <div class="nav-section">Components</div>
        ${mt.map(e=>this._renderNavItem(e))}

      </nav>
    `}};B([Re({type:String})],_t.prototype,`active`,void 0),_t=B([L(`app-sidebar`)],_t);var $=class extends I{constructor(){super(),this._page=`/`,this._sidebarOpen=!1,this._dark=!1,this._dark=window.matchMedia(`(prefers-color-scheme: dark)`).matches,this._applyTheme(),this._updatePage(),window.addEventListener(`hashchange`,()=>this._updatePage()),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{this._dark=e.matches,this._applyTheme()})}_updatePage(){let e=location.hash.slice(1)||`/`,t=e===`/`?`/`:e.replace(/^\//,``);this._page=t,this._sidebarOpen=!1}_applyTheme(){document.documentElement.classList.toggle(`dark`,this._dark),document.documentElement.style.colorScheme=this._dark?`dark`:`light`}_toggleTheme(){this._dark=!this._dark,this._applyTheme()}static{this.styles=c`
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
  `}render(){let e=this._sidebarOpen?`sidebar open`:`sidebar`,t=this._sidebarOpen?`overlay open`:`overlay`,n=ht(this._page).wide?`content wide`:`content`;return D`
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
    `}_renderPage(){let e=ht(this._page);if(!customElements.get(e.elementName))return gt(this._page);let t=Ne(e.elementName);return Fe`<${t}></${t}>`}};B([R()],$.prototype,`_page`,void 0),B([R()],$.prototype,`_sidebarOpen`,void 0),B([R()],$.prototype,`_dark`,void 0),$=B([L(`app-layout`)],$);