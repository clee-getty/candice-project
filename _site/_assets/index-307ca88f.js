var pt=Object.defineProperty;var vt=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var T=(r,t,e)=>(vt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=window,F=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),V=new WeakMap;let $t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new $t(typeof r=="string"?r:r+"",void 0,st),gt=(r,t)=>{F?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},K=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const N=window,W=N.trustedTypes,_t=W?W.emptyScript:"",Z=N.reactiveElementPolyfillSupport,j={toAttribute(r,t){switch(t){case Boolean:r=r?_t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),L={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt},D="finalized";let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(D))return!1;this[D]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return gt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:j;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};A[D]=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:A}),((O=N.reactiveElementVersions)!==null&&O!==void 0?O:N.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const B=window,y=B.trustedTypes,J=y?y.createPolicy("lit-html",{createHTML:r=>r}):void 0,z="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+$,At=`<${nt}>`,_=document,x=()=>_.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,mt=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,f=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Y=/"/g,lt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ht=yt(1),S=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),tt=new WeakMap,g=_.createTreeWalker(_,129,null,!1);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const St=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=E;for(let d=0;d<e;d++){const l=r[d];let h,u,a=-1,p=0;for(;p<l.length&&(o.lastIndex=p,u=o.exec(l),u!==null);)p=o.lastIndex,o===E?u[1]==="!--"?o=G:u[1]!==void 0?o=Q:u[2]!==void 0?(lt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=f):u[3]!==void 0&&(o=f):o===f?u[0]===">"?(o=s??E,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?f:u[3]==='"'?Y:X):o===Y||o===X?o=f:o===G||o===Q?o=E:(o=f,s=void 0);const v=o===f&&r[d+1].startsWith("/>")?" ":"";n+=o===E?l+At:a>=0?(i.push(h),l.slice(0,a)+z+l.slice(a)+$+v):l+$+(a===-2?(i.push(void 0),d):v)}return[dt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class w{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[h,u]=St(t,e);if(this.el=w.createElement(h,i),g.currentNode=this.el.content,e===2){const a=this.el.content,p=a.firstChild;p.remove(),a.append(...p.childNodes)}for(;(s=g.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const p of s.getAttributeNames())if(p.endsWith(z)||p.startsWith($)){const v=u[o++];if(a.push(p),v!==void 0){const ct=s.getAttribute(v.toLowerCase()+z).split($),P=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:P[2],strings:ct,ctor:P[1]==="."?Et:P[1]==="?"?Ct:P[1]==="@"?wt:H})}else l.push({type:6,index:n})}for(const p of a)s.removeAttribute(p)}if(lt.test(s.tagName)){const a=s.textContent.split($),p=a.length-1;if(p>0){s.textContent=y?y.emptyScript:"";for(let v=0;v<p;v++)s.append(a[v],x()),g.nextNode(),l.push({type:2,index:++n});s.append(a[p],x())}}}else if(s.nodeType===8)if(s.data===nt)l.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)l.push({type:7,index:n}),a+=$.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function b(r,t,e=r,i){var s,n,o,d;if(t===S)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=b(r,l._$AS(r,t.values),l,i)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:_).importNode(i,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,h=s[0];for(;h!==void 0;){if(d===h.index){let u;h.type===2?u=new I(o,o.nextSibling,this,t):h.type===1?u=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(u=new It(o,this,t)),this._$AV.push(u),h=s[++l]}d!==(h==null?void 0:h.index)&&(o=g.nextNode(),d++)}return g.currentNode=_,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var n;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):mt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=w.createElement(dt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const o=new bt(n,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new w(t)),e}T(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new I(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,i,s,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const d=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=b(this,d[i+l],e,l),h===S&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===c?t=c:t!==c&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}const xt=y?y.emptyScript:"";class Ct extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==c?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class wt extends H{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=b(this,t,e,0))!==null&&i!==void 0?i:c)===S)return;const s=this._$AH,n=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==c&&(s===c||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const et=B.litHtmlPolyfillSupport;et==null||et(w,I),((M=B.litHtmlVersions)!==null&&M!==void 0?M:B.litHtmlVersions=[]).push("2.7.5");const Pt=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new I(t.insertBefore(x(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k,q;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}}m.finalized=!0,m._$litElement$=!0,(k=globalThis.litElementHydrateSupport)===null||k===void 0||k.call(globalThis,{LitElement:m});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:m});((q=globalThis.litElementVersions)!==null&&q!==void 0?q:globalThis.litElementVersions=[]).push("3.3.2");class ut extends m{constructor(){super(),this.setupFullscreenButton(),this.setupNavigationButtons(),this.setupKeyboardControls()}get counterCurrent(){return this.querySelector("[data-lightbox-counter-current]")}get counterTotal(){return this.querySelector("[data-lightbox-counter-total]")}get fullscreenButton(){return this.querySelector("[data-lightbox-fullscreen]")}get nextButton(){return this.querySelector("[data-lightbox-next]")}get previousButton(){return this.querySelector("[data-lightbox-previous]")}get slides(){return this.querySelectorAll("[data-lightbox-slide]")}get slideIds(){return Array.from(this.slides).map(t=>t.dataset.lightboxSlideId)}get currentSlide(){if(this.slides.length)return this.currentId?this.slides[this.currentSlideIndex]:this.slides[0]}get currentSlideIndex(){if(this.slides.length)return this.currentId?this.slideIds.findIndex(t=>t===this.currentId):0}get fullscreen(){return document.fullscreen}next(){if(!this.slides.length)return;const t=this.currentSlideIndex+1,e=this.slideIds[t%this.slides.length];this.currentId=e}previous(){if(!this.slides.length)return;const t=this.currentSlideIndex-1,e=this.slideIds.slice(t)[0];this.currentId=e}setupFullscreenButton(){this.fullscreenButton&&this.fullscreenButton.addEventListener("click",()=>{this.toggleFullscreen()})}setupNavigationButtons(){!this.nextButton||!this.previousButton||(this.nextButton.addEventListener("click",()=>{this.next()}),this.previousButton.addEventListener("click",()=>{this.previous()}))}setupKeyboardControls(){document.addEventListener("keyup",({code:t})=>{if(this.slides.length>1)switch(t){default:break;case"ArrowRight":this.next();break;case"ArrowLeft":this.previous();break}})}toggleFullscreen(){const t=this.renderRoot.firstElementChild;this.fullscreen?document.exitFullscreen():t.requestFullscreen(),this.updateFullscreenButton()}updateCounterElements(){!this.counterCurrent||!this.counterTotal||(this.counterCurrent.innerText=this.currentSlideIndex+1,this.counterTotal.innerText=this.slides.length)}updateCurrentSlideElement(){this.currentSlide&&(this.slides.forEach(t=>{t.dataset.lightboxSlideId!==this.currentId&&delete t.dataset.lightboxCurrent}),this.currentSlide.dataset.lightboxCurrent=!0)}updateFullscreenButton(){this.fullscreenButton&&(this.fullscreenButton.dataset.lightboxFullscreen=!this.fullscreen)}render(){return this.slides.length?(this.currentId=this.slideIds[this.currentSlideIndex],this.updateCurrentSlideElement(),this.updateCounterElements(),ht`
      <div class="q-lightbox">
        <slot></slot>
      </div>
    `):""}}T(ut,"properties",{currentId:{attribute:"current-id",type:String}});customElements.define("q-lightbox",ut);class at extends m{get closeButton(){return this.querySelector("[data-modal-close]")}get lightbox(){return this.querySelector("q-lightbox")}constructor(){super(),this.setupKeyboardControls(),this.setupModalTriggers()}close(){this.active=!1,this.currentId=null,this.updateLightboxCurrentId(),this.enableScrolling()}disableScrolling(){document.querySelector("html").style.overflow="hidden"}enableScrolling(){document.querySelector("html").style.overflow="auto"}getCurrentFigureId(t){const{target:e}=t;let i=e;for(;!i.matches("figure")&&!i.getAttribute("id");)i=i.parentNode;return i.getAttribute("id")}open(t){this.currentId=this.getCurrentFigureId(t),this.active=!0,this.updateLightboxCurrentId(),this.disableScrolling()}setupCloseButton(){this.closeButton&&this.closeButton.addEventListener("click",()=>{this.close()})}setupKeyboardControls(){document.addEventListener("keyup",({code:t})=>{this.active&&t==="Escape"&&this.close()})}setupModalTriggers(){document.querySelectorAll(".q-figure__modal-link").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.open(e)})})}updateLightboxCurrentId(){this.lightbox&&this.lightbox.setAttribute("current-id",this.currentId)}render(){return this.dataset.modalActive=this.active,this.setupCloseButton(),ht`
      <div class="q-modal">
        <slot></slot>
      </div>
    `}}T(at,"properties",{active:{type:Boolean},currentId:{attribute:"current-id",type:String}});customElements.define("q-modal",at);
//# sourceMappingURL=index-307ca88f.js.map
