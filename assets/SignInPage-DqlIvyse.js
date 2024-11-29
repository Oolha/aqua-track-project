import{r as ye,u as rt,j as b,L as st}from"./index-vPyF9UtG.js";import{c as ot,a as we,o as it}from"./yup-fhOEn5xf.js";import{u as at,I as ct}from"./index.esm-0HdAX8xW.js";import{L as lt}from"./Logo-Cu7evS7L.js";import{A as ut}from"./AdvantagesSection-SU1WjuC8.js";function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:fe}=Object,X=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:k}=Array,v=G("undefined");function dt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=C("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const mt=G("string"),N=G("function"),De=G("number"),Q=e=>e!==null&&typeof e=="object",ht=e=>e===!0||e===!1,W=e=>{if(X(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=C("Date"),wt=C("File"),bt=C("Blob"),gt=C("FileList"),Et=e=>Q(e)&&N(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=X(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},Rt=C("URLSearchParams"),[Tt,_t,Ot,xt]=["ReadableStream","Request","Response","Headers"].map(C),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!v(e)&&e!==B;function oe(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;W(t[o])&&W(r)?t[o]=oe(t[o],r):W(r)?t[o]=oe({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const Nt=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&N(s)?e[o]=je(s,n):e[o]=s},{allOwnKeys:r}),e),Ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Pt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Lt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Bt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kt=C("HTMLFormElement"),qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),It=C("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},vt=e=>{qe(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Mt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Ht=()=>{},zt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Ie={DIGIT:ge,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+ge},Wt=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Jt(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $t=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return M(r,(i,c)=>{const f=n(i,s+1);!v(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Vt=C("AsyncFunction"),Kt=e=>e&&(Q(e)||N(e))&&N(e.then)&&N(e.catch),ve=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",N(B.postMessage)),Xt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||ve,a={isArray:k,isArrayBuffer:Be,isBuffer:dt,isFormData:St,isArrayBufferView:pt,isString:mt,isNumber:De,isBoolean:ht,isObject:Q,isPlainObject:W,isReadableStream:Tt,isRequest:_t,isResponse:Ot,isHeaders:xt,isUndefined:v,isDate:yt,isFile:wt,isBlob:bt,isRegExp:It,isFunction:N,isStream:Et,isURLSearchParams:Rt,isTypedArray:Bt,isFileList:gt,forEach:M,merge:oe,extend:Nt,trim:At,stripBOM:Ct,inherits:Pt,toFlatObject:Lt,kindOf:X,kindOfTest:C,endsWith:Ft,toArray:jt,forEachEntry:Dt,matchAll:Ut,isHTMLForm:kt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:qe,freezeMethods:vt,toObjectSet:Mt,toCamelCase:qt,noop:Ht,toFiniteNumber:zt,findKey:Ue,global:B,isContextDefined:ke,ALPHABET:Ie,generateString:Wt,isSpecCompliantForm:Jt,toJSONObject:$t,isAsyncFn:Vt,isThenable:Kt,setImmediate:ve,asap:Xt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Me=y.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{He[e]={value:e}});Object.defineProperties(y,He);Object.defineProperty(Me,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Me);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Gt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Qt(e){return a.isArray(e)&&!e.some(ie)}const Zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,m){return!a.isUndefined(m[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,m){let S=p;if(p&&!m&&typeof p=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Qt(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(S=a.toArray(p)))return h=ze(h),S.forEach(function(_,L){!(a.isUndefined(_)||_===null)&&t.append(i===!0?Ee([h],L,o):i===null?h:h+"[]",l(_))}),!1}return ie(p)?!0:(t.append(Ee(m,h,o),l(p)),!1)}const d=[],w=Object.assign(Zt,{defaultVisitor:u,convertValue:l,isVisitable:ie});function g(p,h){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(p),a.forEach(p,function(S,T){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(T)?T.trim():T,h,w))===!0&&g(S,h?h.concat(T):[T])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const We=de.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Yt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||Yt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Re{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},en=typeof URLSearchParams<"u"?URLSearchParams:de,tn=typeof FormData<"u"?FormData:null,nn=typeof Blob<"u"?Blob:null,rn={isBrowser:!0,classes:{URLSearchParams:en,FormData:tn,Blob:nn},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ae=typeof navigator=="object"&&navigator||void 0,sn=pe&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),on=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",an=pe&&window.location.href||"http://localhost",cn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:sn,hasStandardBrowserWebWorkerEnv:on,navigator:ae,origin:an},Symbol.toStringTag,{value:"Module"})),O={...cn,...rn};function ln(e,t){return Z(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function un(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ve(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=fn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(un(r),s,n,0)}),n}return null}function dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const H={transitional:$e,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ln(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),dn(t)):t}],transformResponse:[function(t){const n=this.transitional||H.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{H.headers[e]={}});const pn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&pn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Te=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function hn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const yn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function wn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function bn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=I(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=J(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!yn(t))i(mn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return hn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=I(i),i){const c=a.findKey(r,i);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?wn(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=I(i);r[c]||(bn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function re(e,t){const n=this||H,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,y,{__CANCEL__:!0});function Xe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function En(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=u&&l-u;return g?Math.round(w*1e3/g):void 0}}function Sn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=En(50,250);return Sn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},_e=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Oe=e=>(...t)=>a.asap(()=>e(...t)),Rn=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,Tn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function On(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!_n(t)?On(e,t):t}const xe=e=>e instanceof A?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,d,w){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:w},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,w){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,w)}else return r(l,u,d,w)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(xe(l),xe(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,w=d(e[u],t[u],u);a.isUndefined(w)&&d!==c||(n[u]=w)}),n}const Qe=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Je(Ge(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Rn(t.url))){const l=s&&o&&Tn.read(o);l&&i.set(s,l)}return t},xn=typeof XMLHttpRequest<"u",An=xn&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,w,g,p;function h(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function S(){if(!m)return;const _=A.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),x={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:_,config:e,request:m};Xe(function(j){n(j),h()},function(j){r(j),h()},x),m=null}"onloadend"in m?m.onloadend=S:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(S)},m.onabort=function(){m&&(r(new y("Request aborted",y.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const x=s.transitional||$e;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),r(new y(L,x.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(L,x){m.setRequestHeader(x,L)}),a.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),c&&c!=="json"&&(m.responseType=s.responseType),l&&([w,p]=V(l,!0),m.addEventListener("progress",w)),f&&m.upload&&([d,g]=V(f),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(u=_=>{m&&(r(!_||_.type?new q(null,e,m):_),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const T=gn(s.url);if(T&&O.protocols.indexOf(T)===-1){r(new y("Unsupported protocol "+T+":",y.ERR_BAD_REQUEST,e));return}m.send(o||null)})},Nn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new q(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Cn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Pn=async function*(e,t){for await(const n of Ln(e))yield*Cn(n,t)},Ln=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ae=(e,t,n,r)=>{const s=Pn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let w=o+=d;n(w)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=Y&&typeof ReadableStream=="function",Fn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},jn=Ze&&Ye(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,ce=Ze&&Ye(()=>a.isReadableStream(new Response("").body)),K={stream:ce&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Bn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Fn(e)).byteLength},Dn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Bn(t)},Un=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:w}=Qe(e);l=l?(l+"").toLowerCase():"text";let g=Nn([s,o&&o.toAbortSignal()],i),p;const h=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let m;try{if(f&&jn&&n!=="get"&&n!=="head"&&(m=await Dn(u,r))!==0){let x=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=x.headers.get("content-type"))&&u.setContentType(F),x.body){const[j,z]=_e(m,V(Oe(f)));r=Ae(x.body,Ne,j,z)}}a.isString(d)||(d=d?"include":"omit");const S="credentials"in Request.prototype;p=new Request(t,{...w,signal:g,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:S?d:void 0});let T=await fetch(p);const _=ce&&(l==="stream"||l==="response");if(ce&&(c||_&&h)){const x={};["status","statusText","headers"].forEach(he=>{x[he]=T[he]});const F=a.toFiniteNumber(T.headers.get("content-length")),[j,z]=c&&_e(F,V(Oe(c),!0))||[];T=new Response(Ae(T.body,Ne,j,()=>{z&&z(),h&&h()}),x)}l=l||"text";let L=await K[a.findKey(K,l)||"text"](T,e);return!_&&h&&h(),await new Promise((x,F)=>{Xe(x,F,{data:L,headers:A.from(T.headers),status:T.status,statusText:T.statusText,config:e,request:p})})}catch(S){throw h&&h(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:S.cause||S}):y.from(S,S&&S.code,e,p)}}),le={http:Gt,xhr:An,fetch:Un};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,kn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!kn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Pe(e){return se(e),e.headers=A.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||H.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ke(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.8",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+tt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function qn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new y("option "+o+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const $={assertOptions:qn,validators:ee},P=$.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&$.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:$.assertOptions(s,{encode:P.function,serialize:P.function},!0)),$.assertOptions(n,{baseUrl:P.spelling("baseURL"),withXsrfToken:P.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,d=0,w;if(!f){const p=[Pe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),w=p.length,u=Promise.resolve(n);d<w;)u=u.then(p[d++],p[d++]);return u}w=c.length;let g=n;for(d=0;d<w;){const p=c[d++],h=c[d++];try{g=p(g)}catch(m){h.call(this,m);break}}try{u=Pe.call(this,g)}catch(p){return Promise.reject(p)}for(d=0,w=l.length;d<w;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=U(this.defaults,t);const n=Ge(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}function In(e){return function(n){return e.apply(null,n)}}function vn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function nt(e){const t=new D(e),n=je(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(U(e,s))},n}const R=nt(H);R.Axios=D;R.CanceledError=q;R.CancelToken=me;R.isCancel=Ke;R.VERSION=tt;R.toFormData=Z;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=In;R.isAxiosError=vn;R.mergeConfig=U;R.AxiosHeaders=A;R.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=et.getAdapter;R.HttpStatusCode=ue;R.default=R;const Mn="_loginContainer_1vnmy_1",Hn="_formWrapper_1vnmy_18",zn="_title_1vnmy_25",Wn="_form_1vnmy_18",Jn="_field_1vnmy_41",$n="_formLabel_1vnmy_54",Vn="_formInput_1vnmy_61",Kn="_error_1vnmy_81",Xn="_errorMessage_1vnmy_86",Gn="_iconEye_1vnmy_94",Qn="_formButton_1vnmy_104",Zn="_signinText_1vnmy_123",Yn="_signupLink_1vnmy_131",er="_passwordToggle_1vnmy_140",tr="_passwordWrapper_1vnmy_152",nr="_logo_1vnmy_163",rr="_btnWrapper_1vnmy_214",sr="_notification_1vnmy_247",E={loginContainer:Mn,formWrapper:Hn,title:zn,form:Wn,field:Jn,formLabel:$n,formInput:Vn,error:Kn,errorMessage:Xn,iconEye:Gn,formButton:Qn,signinText:Zn,signupLink:Yn,passwordToggle:er,passwordWrapper:tr,logo:nr,btnWrapper:rr,notification:sr,"fade-in":"_fade-in_1vnmy_1"},or=ot({email:we().email("Invalid email format").required("Email is required"),password:we().min(8,"Password must be at least 8 characters").required("Password is required")});function ir(){const[e,t]=ye.useState(!1),[n,r]=ye.useState(null),s=rt(),o=()=>t(d=>!d),{register:i,handleSubmit:c,formState:{errors:f},reset:l}=at({resolver:it(or)}),u=async d=>{var w,g;try{const p=await R.post("https://example.com/api/signin",d),{token:h}=p.data;localStorage.setItem("authToken",h),l(),s("/tracker")}catch(p){const h=((g=(w=p.response)==null?void 0:w.data)==null?void 0:g.message)||"Failed to log in. Please try again.";r(h),setTimeout(()=>r(null),5e3)}};return b.jsx(b.Fragment,{children:b.jsxs("div",{className:E.loginContainer,children:[b.jsx(lt,{}),b.jsxs("div",{className:E.formWrapper,children:[b.jsx("h2",{className:E.title,children:"Sign In"}),b.jsxs("form",{onSubmit:c(u),className:E.form,children:[b.jsxs("div",{className:E.field,children:[b.jsx("label",{htmlFor:"email",className:E.formLabel,children:"Email"}),b.jsx("input",{...i("email"),type:"email",placeholder:"Enter your email",className:`${E.formInput} ${f.email?E.error:""}`}),f.email&&b.jsx("p",{className:E.errorMessage,children:f.email.message})]}),b.jsxs("div",{className:E.field,children:[b.jsx("label",{htmlFor:"password",className:E.formLabel,children:"Password"}),b.jsxs("div",{className:E.passwordWrapper,children:[b.jsx("input",{...i("password"),type:e?"text":"password",placeholder:"Enter your password",className:`${E.formInput} ${f.password?E.error:""}`}),f.password&&b.jsx("p",{className:E.errorMessage,children:f.password.message}),b.jsx("button",{type:"button",className:E.passwordToggle,onClick:o,"aria-label":e?"Hide password":"Show password",children:b.jsx(ct,{id:e?"icon-eye":"icon-eye-off",size:20,className:E.iconEye})})]})]}),b.jsx("div",{className:E.btnWrapper,children:b.jsx("button",{type:"submit",className:E.formButton,children:"Sign In"})})]})]}),b.jsx("div",{children:b.jsxs("p",{className:E.signinText,children:["Don't have an account?"," ",b.jsx(st,{to:"/signup",className:E.signupLink,children:"Sign Up"})]})}),n&&b.jsx("div",{className:E.notification,children:n})]})})}const ar="_login_mp29j_1",Fe={login:ar};function pr(){return b.jsxs("div",{className:Fe.login,children:[b.jsx(ir,{}),b.jsx("div",{className:Fe.hidden,children:b.jsx(ut,{})})]})}export{pr as default};
//# sourceMappingURL=SignInPage-DqlIvyse.js.map
