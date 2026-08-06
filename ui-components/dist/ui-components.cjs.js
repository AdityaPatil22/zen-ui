"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("lit");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis,z=b.ShadowRoot&&(b.ShadyCSS===void 0||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),I=new WeakMap;let V=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=I.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&I.set(e,t))}return t}toString(){return this.cssText}};const Y=r=>new V(typeof r=="string"?r:r+"",void 0,D),J=(r,t)=>{if(z)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=b.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},M=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Y(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:K,defineProperty:W,getOwnPropertyDescriptor:X,getOwnPropertyNames:H,getOwnPropertySymbols:F,getPrototypeOf:G}=Object,d=globalThis,T=d.trustedTypes,Q=T?T.emptyScript:"",k=d.reactiveElementPolyfillSupport,p=(r,t)=>r,f={toAttribute(r,t){switch(t){case Boolean:r=r?Q:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},U=(r,t)=>!K(r,t),B={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:U};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),d.litPropertyMetadata??(d.litPropertyMetadata=new WeakMap);class h extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=B){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&W(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=X(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??B}static _$Ei(){if(this.hasOwnProperty(p("elementProperties")))return;const t=G(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(p("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p("properties"))){const e=this.properties,s=[...H(e),...F(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(M(i))}else t!==void 0&&e.push(M(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return J(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:f).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:f;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??U)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}h.elementStyles=[],h.shadowRootOptions={mode:"open"},h[p("elementProperties")]=new Map,h[p("finalized")]=new Map,k==null||k({ReactiveElement:h}),(d.reactiveElementVersions??(d.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:U},tt=(r=Z,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(l){const w=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,w,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(s==="setter"){const{name:n}=e;return function(l){const w=this[n];t.call(this,l),this.requestUpdate(n,w,r)}}throw Error("Unsupported decorator location: "+s)};function E(r){return(t,e)=>typeof e=="object"?tt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}const P=class P extends a.LitElement{constructor(){super(...arguments),this._variant="primary",this._size="medium",this._disabled=!1}static get properties(){return{variant:{type:String},size:{type:String},disabled:{type:Boolean}}}get variant(){return this._variant}set variant(t){const e=this._variant;this._variant=t,this.requestUpdate("variant",e)}get size(){return this._size}set size(t){const e=this._size;this._size=t,this.requestUpdate("size",e)}get disabled(){return this._disabled}set disabled(t){const e=this._disabled;this._disabled=t,this.requestUpdate("disabled",e)}render(){return a.html`
      <button
        class="${this.size} ${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `}_handleClick(t){this.disabled||this.dispatchEvent(new CustomEvent("zen-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}};P.styles=a.css`
    :host {
      display: inline-block;
    }

    button {
      font-family: system-ui, sans-serif;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Size variants */
    .small {
      padding: 6px 12px;
      font-size: 14px;
    }

    .medium {
      padding: 8px 16px;
      font-size: 16px;
    }

    .large {
      padding: 12px 24px;
      font-size: 18px;
    }

    /* Style variants */
    .primary {
      background: #1b263b;
      color: white;
      border-color: #1b263b;
    }

    .primary:hover:not(:disabled) {
      background: #2a3b59;
      border-color: #2a3b59;
    }

    .secondary {
      background: #e2e8f0;
      color: #1b263b;
      border-color: #e2e8f0;
    }

    .secondary:hover:not(:disabled) {
      background: #cbd5e1;
      border-color: #cbd5e1;
    }

    .outline {
      background: transparent;
      color: #1b263b;
      border-color: #1b263b;
    }

    .outline:hover:not(:disabled) {
      background: #f8fafc;
    }
  `;let m=P;customElements.define("zen-button",m);var et=Object.defineProperty,st=(r,t,e,s)=>{for(var i=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(t,e,i)||i);return i&&et(t,e,i),i};const C=class C extends a.LitElement{constructor(){super(...arguments),this.interactive=!1}render(){return a.html`
      <div class="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.interactive&&this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.interactive&&this.removeEventListener("click",this._handleClick)}_handleClick(t){this.dispatchEvent(new CustomEvent("zen-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}};C.styles=a.css`
    :host {
      display: block;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s ease;
    }

    .card {
      background: white;
      border: 1px solid #e2e8f0;
      padding: 1rem;
      height: 100%;
      box-sizing: border-box;
    }

    :host([interactive]) {
      cursor: pointer;
    }

    :host([interactive]:hover) {
      transform: translateY(-2px);
    }

    /* Slots */
    ::slotted([slot="header"]) {
      margin: 0 0 1rem 0;
      padding: 0 0 1rem 0;
      border-bottom: 1px solid #e2e8f0;
    }

    ::slotted([slot="footer"]) {
      margin: 1rem 0 0 0;
      padding: 1rem 0 0 0;
      border-top: 1px solid #e2e8f0;
    }
  `;let u=C;st([E({type:Boolean,reflect:!0})],u.prototype,"interactive");customElements.define("zen-card",u);var it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,S=(r,t,e,s)=>{for(var i=s>1?void 0:s?rt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&it(t,e,i),i};let c=class extends a.LitElement{constructor(){super(...arguments),this.expanded=!1,this.multiple=!1,this.items=[]}toggleAccordion(r){this.multiple?this.items=this.items.map((t,e)=>e===r?{...t,expanded:!t.expanded}:t):this.items=this.items.map((t,e)=>e===r?{...t,expanded:!t.expanded}:{...t,expanded:!1})}render(){return a.html`
      ${this.items.map((r,t)=>a.html`
          <div class="accordion-item ${r.expanded?"expanded":""}">
            <div class="accordion-header" @click="${()=>this.toggleAccordion(t)}">
              <slot name="header">${r.header}</slot>
              <span>${r.expanded?"▲":"▼"}</span>
            </div>
            <div class="accordion-content">
              <slot name="content">${r.content}</slot>
            </div>
          </div>
        `)}
    `}};c.styles=a.css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .accordion-item {
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      margin-bottom: 8px;
      overflow: hidden;
      transition: height 0.2s ease-in-out;
    }
    .accordion-header {
      background-color: #1b263b;
      color: #e2e8f0;
      padding: 12px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accordion-header:hover {
      background-color: #2a3b59;
    }
    .accordion-content {
      padding: 14px;
      background-color: #f9fafb;
      display: none;
    }
    .accordion-item.expanded .accordion-content {
      display: block;
    }
  `;S([E({type:Boolean,reflect:!0})],c.prototype,"expanded",2);S([E({type:Boolean,reflect:!0})],c.prototype,"multiple",2);S([E({type:Array})],c.prototype,"items",2);c=S([N("zen-accordion")],c);const O=class O extends a.LitElement{constructor(){super(...arguments),this._variant="default",this._size="medium"}static get properties(){return{variant:{type:String},size:{type:String}}}get variant(){return this._variant}set variant(t){const e=this._variant;this._variant=t,this.requestUpdate("variant",e)}get size(){return this._size}set size(t){const e=this._size;this._size=t,this.requestUpdate("size",e)}render(){return a.html`
      <span class="${this.size} ${this.variant}">
        <slot></slot>
      </span>
    `}};O.styles=a.css`
    :host {
      display: inline-block;
    }

    span {
      display: inline-flex;
      align-items: center;
      font-family: system-ui, sans-serif;
      font-weight: 500;
      border-radius: 9999px;
      line-height: 1;
    }

    .small { padding: 2px 8px; font-size: 12px; }
    .medium { padding: 4px 12px; font-size: 14px; }
    .large { padding: 6px 16px; font-size: 16px; }

    .default { background: #e2e8f0; color: #1b263b; }
    .success { background: #dcfce7; color: #166534; }
    .warning { background: #fef9c3; color: #854d0e; }
    .error { background: #fee2e2; color: #991b1b; }
    .info { background: #dbeafe; color: #1e40af; }
  `;let v=O;customElements.define("zen-badge",v);const A=class A extends a.LitElement{constructor(){super(...arguments),this._text="",this._position="top"}static get properties(){return{text:{type:String},position:{type:String}}}get text(){return this._text}set text(t){const e=this._text;this._text=t,this.requestUpdate("text",e)}get position(){return this._position}set position(t){const e=this._position;this._position=t,this.requestUpdate("position",e)}render(){return a.html`
      <div class="wrapper">
        <slot></slot>
        <div class="tooltip ${this.position}">${this.text}</div>
      </div>
    `}};A.styles=a.css`
    :host {
      display: inline-block;
      position: relative;
    }

    .wrapper {
      display: inline-block;
      position: relative;
    }

    .tooltip {
      position: absolute;
      background: #1b263b;
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-family: system-ui, sans-serif;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 100;
    }

    .wrapper:hover .tooltip {
      opacity: 1;
    }

    .top {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .bottom {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .left {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    .right {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }
  `;let g=A;customElements.define("zen-tooltip",g);const q=class q extends a.LitElement{constructor(){super(...arguments),this._tabs=[],this._activeIndex=0}static get properties(){return{tabs:{type:Array},activeIndex:{type:Number,attribute:"active-index"}}}get tabs(){return this._tabs}set tabs(t){const e=this._tabs;this._tabs=t,this.requestUpdate("tabs",e)}get activeIndex(){return this._activeIndex}set activeIndex(t){const e=this._activeIndex;this._activeIndex=t,this.requestUpdate("activeIndex",e)}_selectTab(t){this.activeIndex=t,this.dispatchEvent(new CustomEvent("zen-tab-change",{bubbles:!0,composed:!0,detail:{index:t}}))}render(){var t;return a.html`
      <div class="tab-list" role="tablist">
        ${this.tabs.map((e,s)=>a.html`
          <button
            class="tab-button ${s===this.activeIndex?"active":""}"
            role="tab"
            aria-selected="${s===this.activeIndex}"
            @click="${()=>this._selectTab(s)}"
          >${e.label}</button>
        `)}
      </div>
      <div class="tab-panel" role="tabpanel">
        ${((t=this.tabs[this.activeIndex])==null?void 0:t.content)??""}
      </div>
    `}};q.styles=a.css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    .tab-list {
      display: flex;
      border-bottom: 2px solid #e2e8f0;
      gap: 4px;
    }

    .tab-button {
      padding: 10px 20px;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #64748b;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
      transition: all 0.15s ease;
    }

    .tab-button:hover {
      color: #1b263b;
    }

    .tab-button.active {
      color: #1b263b;
      border-bottom-color: #1b263b;
    }

    .tab-panel {
      padding: 16px 4px;
    }
  `;let y=q;customElements.define("zen-tabs",y);const L=class L extends a.LitElement{constructor(){super(...arguments),this._open=!1,this._heading=""}static get properties(){return{open:{type:Boolean,reflect:!0},heading:{type:String}}}get open(){return this._open}set open(t){const e=this._open;this._open=t,this.requestUpdate("open",e)}get heading(){return this._heading}set heading(t){const e=this._heading;this._heading=t,this.requestUpdate("heading",e)}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("zen-close",{bubbles:!0,composed:!0}))}render(){return a.html`
      <div class="overlay ${this.open?"open":""}" @click="${this._onOverlayClick}">
        <div class="modal" @click="${t=>t.stopPropagation()}">
          <div class="header">
            <h2>${this.heading}</h2>
            <button class="close-btn" @click="${this._close}">&times;</button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}_onOverlayClick(){this._close()}};L.styles=a.css`
    :host {
      font-family: system-ui, sans-serif;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .modal {
      background: white;
      border-radius: 12px;
      width: min(480px, 90vw);
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e2e8f0;
    }

    .header h2 {
      margin: 0;
      font-size: 18px;
      color: #1b263b;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #64748b;
      padding: 4px;
      line-height: 1;
    }

    .close-btn:hover {
      color: #1b263b;
    }

    .body {
      padding: 20px;
    }

    .footer {
      padding: 16px 20px;
      border-top: 1px solid #e2e8f0;
    }
  `;let _=L;customElements.define("zen-modal",_);const j=class j extends a.LitElement{constructor(){super(...arguments),this._label="",this._placeholder="",this._value="",this._type="text",this._variant="default",this._disabled=!1,this._error=""}static get properties(){return{label:{type:String},placeholder:{type:String},value:{type:String},type:{type:String},variant:{type:String},disabled:{type:Boolean},error:{type:String}}}get label(){return this._label}set label(t){const e=this._label;this._label=t,this.requestUpdate("label",e)}get placeholder(){return this._placeholder}set placeholder(t){const e=this._placeholder;this._placeholder=t,this.requestUpdate("placeholder",e)}get value(){return this._value}set value(t){const e=this._value;this._value=t,this.requestUpdate("value",e)}get type(){return this._type}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}get variant(){return this._variant}set variant(t){const e=this._variant;this._variant=t,this.requestUpdate("variant",e)}get disabled(){return this._disabled}set disabled(t){const e=this._disabled;this._disabled=t,this.requestUpdate("disabled",e)}get error(){return this._error}set error(t){const e=this._error;this._error=t,this.requestUpdate("error",e)}_onInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("zen-input",{bubbles:!0,composed:!0,detail:{value:this.value}}))}render(){const t=[this.variant==="filled"?"filled":"",this.error?"has-error":""].filter(Boolean).join(" ");return a.html`
      ${this.label?a.html`<label>${this.label}</label>`:""}
      <input
        type="${this.type}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        ?disabled="${this.disabled}"
        class="${t}"
        @input="${this._onInput}"
      />
      ${this.error?a.html`<div class="error-text">${this.error}</div>`:""}
    `}};j.styles=a.css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #1b263b;
      margin-bottom: 6px;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      font-size: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.15s ease;
      box-sizing: border-box;
      color: #1b263b;
    }

    input:focus {
      border-color: #1b263b;
    }

    input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f8fafc;
    }

    input.filled {
      background: #f1f5f9;
      border-color: transparent;
    }

    input.filled:focus {
      border-color: #1b263b;
    }

    input.has-error {
      border-color: #ef4444;
    }

    .error-text {
      font-size: 13px;
      color: #ef4444;
      margin-top: 4px;
    }
  `;let x=j;customElements.define("zen-input",x);const R=class R extends a.LitElement{constructor(){super(...arguments),this._variant="info",this._dismissible=!1}static get properties(){return{variant:{type:String},dismissible:{type:Boolean}}}get variant(){return this._variant}set variant(t){const e=this._variant;this._variant=t,this.requestUpdate("variant",e)}get dismissible(){return this._dismissible}set dismissible(t){const e=this._dismissible;this._dismissible=t,this.requestUpdate("dismissible",e)}_dismiss(){this.dispatchEvent(new CustomEvent("zen-dismiss",{bubbles:!0,composed:!0})),this.remove()}render(){return a.html`
      <div class="alert ${this.variant}">
        <div class="content">
          <slot></slot>
        </div>
        ${this.dismissible?a.html`
          <button class="close-btn" @click="${this._dismiss}">&times;</button>
        `:""}
      </div>
    `}};R.styles=a.css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    .alert {
      padding: 14px 18px;
      border-radius: 8px;
      font-size: 14px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .info { background: #dbeafe; color: #1e40af; }
    .success { background: #dcfce7; color: #166534; }
    .warning { background: #fef9c3; color: #854d0e; }
    .error { background: #fee2e2; color: #991b1b; }

    .content {
      flex: 1;
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      padding: 0;
      color: inherit;
      opacity: 0.6;
    }

    .close-btn:hover {
      opacity: 1;
    }
  `;let $=R;customElements.define("zen-alert",$);exports.Badge=v;exports.Button=m;exports.Card=u;exports.Modal=_;exports.Tooltip=g;exports.ZenAlert=$;exports.ZenInput=x;exports.ZenTabs=y;
