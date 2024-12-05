import{r as b,h as d,j as oe}from"./index-BC4aY7-z.js";var Le={attributes:!0,characterData:!0,subtree:!0,childList:!0};function Ne(e,t,n=Le){b.useEffect(()=>{if(e.current){const r=new MutationObserver(t);return r.observe(e.current,n),()=>{r.disconnect()}}},[t,n])}var ge=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,s){return o[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,s=this.__entries__;o<s.length;o++){var i=s[o];n.call(r,i[1],i[0])}},t}()}(),se=typeof window<"u"&&typeof document<"u"&&window.document===document,J=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ze=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(J):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),We=2;function je(e,t){var n=!1,r=!1,o=0;function s(){n&&(n=!1,e()),r&&a()}function i(){ze(s)}function a(){var c=Date.now();if(n){if(c-o<We)return;r=!0}else n=!0,r=!1,setTimeout(i,t);o=c}return a}var Be=20,Ve=["top","right","bottom","left","width","height","size","weight"],Fe=typeof MutationObserver<"u",qe=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=je(this.refresh.bind(this),Be)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!se||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Fe?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!se||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=Ve.some(function(s){return!!~r.indexOf(s)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ye=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},j=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||J},we=ee(0,0,0,0);function Q(e){return parseFloat(e)||0}function ue(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var s=e["border-"+o+"-width"];return r+Q(s)},0)}function Ge(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var s=o[r],i=e["padding-"+s];n[s]=Q(i)}return n}function Ye(e){var t=e.getBBox();return ee(0,0,t.width,t.height)}function Xe(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return we;var r=j(e).getComputedStyle(e),o=Ge(r),s=o.left+o.right,i=o.top+o.bottom,a=Q(r.width),c=Q(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==t&&(a-=ue(r,"left","right")+s),Math.round(c+i)!==n&&(c-=ue(r,"top","bottom")+i)),!Je(e)){var h=Math.round(a+s)-t,l=Math.round(c+i)-n;Math.abs(h)!==1&&(a-=h),Math.abs(l)!==1&&(c-=l)}return ee(o.left,o.top,a,c)}var Ke=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof j(e).SVGGraphicsElement}:function(e){return e instanceof j(e).SVGElement&&typeof e.getBBox=="function"}}();function Je(e){return e===j(e).document.documentElement}function Qe(e){return se?Ke(e)?Ye(e):Xe(e):we}function Ue(e){var t=e.x,n=e.y,r=e.width,o=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,i=Object.create(s.prototype);return ye(i,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),i}function ee(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Ze=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ee(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Qe(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),et=function(){function e(t,n){var r=Ue(n);ye(this,{target:t,contentRect:r})}return e}(),tt=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ge,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof j(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Ze(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof j(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new et(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),_e=typeof WeakMap<"u"?new WeakMap:new ge,Ee=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=qe.getInstance(),r=new tt(t,n,this);_e.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ee.prototype[e]=function(){var t;return(t=_e.get(this))[e].apply(t,arguments)}});var nt=function(){return typeof J.ResizeObserver<"u"?J.ResizeObserver:Ee}(),rt=({mutationObservables:e,resizeObservables:t,refresh:n})=>{const[r,o]=b.useState(0),s=b.useRef(document.documentElement||document.body);function i(c){const h=Array.from(c);for(const l of h)if(e){if(!l.attributes)continue;e.find(v=>l.matches(v))&&n(!0)}}function a(c){const h=Array.from(c);for(const l of h)if(t){if(!l.attributes)continue;t.find(v=>l.matches(v))&&o(r+1)}}return Ne(s,c=>{for(const h of c)h.addedNodes.length!==0&&(i(h.addedNodes),a(h.addedNodes)),h.removedNodes.length!==0&&(i(h.removedNodes),a(h.removedNodes))},{childList:!0,subtree:!0}),b.useEffect(()=>{if(!t)return;const c=new nt(()=>{n()});for(const h of t){const l=document.querySelector(h);l&&c.observe(l)}return()=>{c.disconnect()}},[t,r]),null},ot=rt;function K(e){let t=Oe;return e&&(t=e.getBoundingClientRect()),t}function it(e,t){const[n,r]=b.useState(Oe),o=b.useCallback(()=>{e!=null&&e.current&&r(K(e==null?void 0:e.current))},[e==null?void 0:e.current]);return b.useEffect(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[e==null?void 0:e.current,t]),n}var Oe={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function st(e,t){return new Promise(n=>{if(!(e instanceof Element))throw new TypeError("Argument 1 must be an Element");let r=0,o=null;const s=Object.assign({behavior:"smooth"},t);e.scrollIntoView(s),requestAnimationFrame(i);function i(){const a=e==null?void 0:e.getBoundingClientRect().top;if(a===o){if(r++>2)return n(null)}else r=0,o=a;requestAnimationFrame(i)}})}function X(e){return e<0?0:e}function at(e){return typeof e=="object"&&e!==null?{thresholdX:e.x||0,thresholdY:e.y||0}:{thresholdX:e||0,thresholdY:e||0}}function te(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return{w:e,h:t}}function lt({top:e,right:t,bottom:n,left:r,threshold:o}){const{w:s,h:i}=te(),{thresholdX:a,thresholdY:c}=at(o);return e<0&&n-e>i?!0:e>=0+c&&r>=0+a&&n<=i-c&&t<=s-a}var fe=(e,t)=>e>t,de=(e,t)=>e>t;function ct(e,t=[]){const n=(r,o)=>t.includes(r)?1:t.includes(o)?-1:0;return Object.keys(e).map(r=>({position:r,value:e[r]})).sort((r,o)=>o.value-r.value).sort((r,o)=>n(r.position,o.position)).filter(r=>r.value>0).map(r=>r.position)}var ie=10;function ae(e=ie){return Array.isArray(e)?e.length===1?[e[0],e[0],e[0],e[0]]:e.length===2?[e[1],e[0],e[1],e[0]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.length>3?[e[0],e[1],e[2],e[3]]:[ie,ie]:[e,e,e,e]}var ut={maskWrapper:()=>({opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}),svgWrapper:({windowWidth:e,windowHeight:t,wpt:n,wpl:r})=>({width:e,height:t,left:Number(r),top:Number(n),position:"fixed"}),maskArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,fill:"black",rx:0}),maskRect:({windowWidth:e,windowHeight:t,maskID:n})=>({x:0,y:0,width:e,height:t,fill:"currentColor",mask:`url(#${n})`}),clickArea:({windowWidth:e,windowHeight:t,clipID:n})=>({x:0,y:0,width:e,height:t,fill:"currentcolor",pointerEvents:"auto",clipPath:`url(#${n})`}),highlightedArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,pointerEvents:"auto",fill:"transparent",display:"none"})};function ft(e){return(t,n)=>{const r=ut[t](n),o=e[t];return o?o(r,n):r}}var dt=({padding:e=10,wrapperPadding:t=0,onClick:n,onClickHighlighted:r,styles:o={},sizes:s,className:i,highlightedAreaClassName:a,maskId:c,clipId:h})=>{const l=c||he("mask__"),u=h||he("clip__"),v=ft(o),[m,y,_,g]=ae(e),[p,E,R,P]=ae(t),{w:I,h:H}=te(),C=X((s==null?void 0:s.width)+g+y),x=X((s==null?void 0:s.height)+m+_),A=X((s==null?void 0:s.top)-m-p),O=X((s==null?void 0:s.left)-g-P),M=I-P-E,w=H-p-R,L=v("maskArea",{x:O,y:A,width:C,height:x}),N=v("highlightedArea",{x:O,y:A,width:C,height:x});return d.createElement("div",{style:v("maskWrapper",{}),onClick:n,className:i},d.createElement("svg",{width:M,height:w,xmlns:"http://www.w3.org/2000/svg",style:v("svgWrapper",{windowWidth:M,windowHeight:w,wpt:p,wpl:P})},d.createElement("defs",null,d.createElement("mask",{id:l},d.createElement("rect",{x:0,y:0,width:M,height:w,fill:"white"}),d.createElement("rect",{style:L,rx:L.rx?1:void 0})),d.createElement("clipPath",{id:u},d.createElement("polygon",{points:`0 0, 0 ${w}, ${O} ${w}, ${O} ${A}, ${O+C} ${A}, ${O+C} ${A+x}, ${O} ${A+x}, ${O} ${w}, ${M} ${w}, ${M} 0`}))),d.createElement("rect",{style:v("maskRect",{windowWidth:M,windowHeight:w,maskID:l})}),d.createElement("rect",{style:v("clickArea",{windowWidth:M,windowHeight:w,top:A,left:O,width:C,height:x,clipID:u})}),d.createElement("rect",{style:N,className:a,onClick:r,rx:N.rx?1:void 0})))},ht=dt;function he(e){return e+Math.random().toString(36).substring(2,16)}var vt=Object.defineProperty,U=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&ve(e,n,t[n]);if(U)for(var n of U(t))Re.call(t,n)&&ve(e,n,t[n]);return e},pt=(e,t)=>{var n={};for(var r in e)xe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&U)for(var r of U(e))t.indexOf(r)<0&&Re.call(e,r)&&(n[r]=e[r]);return n},mt={popover:()=>({position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0})};function bt(e){return(t,n)=>{const r=mt[t](n),o=e[t];return o?o(r,n):r}}var gt=e=>{var t=e,{children:n,position:r="bottom",padding:o=10,styles:s={},sizes:i,refresher:a}=t,c=pt(t,["children","position","padding","styles","sizes","refresher"]);const h=b.useRef(null),l=b.useRef(""),u=b.useRef(""),v=b.useRef(""),{w:m,h:y}=te(),_=bt(s),g=it(h,a),{width:p,height:E}=g,[R,P,I,H]=ae(o),C=(i==null?void 0:i.left)-H,x=(i==null?void 0:i.top)-R,A=(i==null?void 0:i.right)+P,O=(i==null?void 0:i.bottom)+I,M=r&&typeof r=="function"?r({width:p,height:E,windowWidth:m,windowHeight:y,top:x,left:C,right:A,bottom:O,x:i.x,y:i.y},g):r,w={left:C,right:m-A,top:x,bottom:y-O},L=(S,T,$)=>{switch(S){case"top":return w.top>E+I;case"right":return T?!1:w.right>p+H;case"bottom":return $?!1:w.bottom>E+R;case"left":return w.left>p+P;default:return!1}},N=(S,T,$)=>{const f=ct(w,$?["right","left"]:T?["top","bottom"]:[]);for(let D=0;D<f.length;D++)if(L(f[D],T,$))return l.current=f[D],S[f[D]];return l.current="center",S.center},V=(S=>{if(Array.isArray(S)){const z=fe(S[0],m),re=de(S[1],y);return l.current="custom",[z?m/2-p/2:S[0],re?y/2-E/2:S[1]]}const T=fe(C+p,m),$=de(O+E,y),f=T?Math.min(C,m-p):Math.max(C,0),D=$?E>w.bottom?Math.max(O-E,0):Math.max(x,0):x;$&&E>w.bottom?u.current="bottom":u.current="top",T?v.current="left":v.current="right";const F={top:[f-H,x-E-I],right:[A+H,D-R],bottom:[f-H,O+R],left:[C-p-P,D-R],center:[m/2-p/2,y/2-E/2]};return S==="center"||L(S,T,$)&&!T&&!$?(l.current=S,F[S]):N(F,T,$)})(M);return d.createElement("div",pe({className:"reactour__popover",style:pe({transform:`translate(${Math.round(V[0])}px, ${Math.round(V[1])}px)`},_("popover",{position:l.current,verticalAlign:u.current,horizontalAlign:v.current,helperRect:g,targetRect:i})),ref:h},c),n)},yt=gt,wt=Object.defineProperty,_t=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,me=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&me(e,n,t[n]);if(Z)for(var n of Z(t))Se.call(t,n)&&me(e,n,t[n]);return e},le=(e,t)=>_t(e,Et(t)),G=(e,t)=>{var n={};for(var r in e)Ce.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))t.indexOf(r)<0&&Se.call(e,r)&&(n[r]=e[r]);return n},Ot={bottom:0,height:0,left:0,right:0,top:0,width:0,windowWidth:0,windowHeight:0,x:0,y:0};function xt(e,t={block:"center",behavior:"smooth",inViewThreshold:0}){const[n,r]=b.useState(!1),[o,s]=b.useState(!1),[i,a]=b.useState(!1),[c,h]=b.useState(null),[l,u]=b.useState(Ot),v=(e==null?void 0:e.selector)instanceof Element?e==null?void 0:e.selector:document.querySelector(e==null?void 0:e.selector),m=b.useCallback(()=>{const _=be(v,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),g=G(_,["hasHighligtedElems"]);Object.entries(l).some(([p,E])=>g[p]!==E)&&u(g)},[v,e==null?void 0:e.highlightedSelectors,l]);b.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[v,e==null?void 0:e.highlightedSelectors,c]),b.useEffect(()=>{!lt(le(k({},l),{threshold:t.inViewThreshold}))&&v&&(r(!0),st(v,t).then(()=>{o||h(Date.now())}).finally(()=>{r(!1)}))},[l]);const y=b.useCallback(()=>{s(!0);const _=be(v,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),{hasHighligtedElems:g}=_,p=G(_,["hasHighligtedElems"]);a(g),u(p),s(!1)},[v,e==null?void 0:e.highlightedSelectors,l]);return{sizes:l,transition:n,target:v,observableRefresher:y,isHighlightingObserved:i}}function be(e,t=[],n=!0){let r=!1;const{w:o,h:s}=te();if(!t)return le(k({},K(e)),{windowWidth:o,windowHeight:s,hasHighligtedElems:!1});let i=K(e),a={bottom:0,height:0,left:o,right:0,top:s,width:0};for(const h of t){const l=document.querySelector(h);if(!l||l.style.display==="none"||l.style.visibility==="hidden")continue;const u=K(l);r=!0,n||!e?(u.top<a.top&&(a.top=u.top),u.right>a.right&&(a.right=u.right),u.bottom>a.bottom&&(a.bottom=u.bottom),u.left<a.left&&(a.left=u.left),a.width=a.right-a.left,a.height=a.bottom-a.top):(u.top<i.top&&(i.top=u.top),u.right>i.right&&(i.right=u.right),u.bottom>i.bottom&&(i.bottom=u.bottom),u.left<i.left&&(i.left=u.left),i.width=i.right-i.left,i.height=i.bottom-i.top)}const c=n||!e?a.width>0&&a.height>0:!1;return{left:(c?a:i).left,top:(c?a:i).top,right:(c?a:i).right,bottom:(c?a:i).bottom,width:(c?a:i).width,height:(c?a:i).height,windowWidth:o,windowHeight:s,hasHighligtedElems:r,x:i.x,y:i.y}}var Rt=({disableKeyboardNavigation:e,setCurrentStep:t,currentStep:n,setIsOpen:r,stepsLength:o,disable:s,rtl:i,clickProps:a,keyboardHandler:c})=>{function h(l){if(l.stopPropagation(),e===!0||s)return;let u,v,m;e&&(u=e.includes("esc"),v=e.includes("right"),m=e.includes("left"));function y(){t(Math.min(n+1,o-1))}function _(){t(Math.max(n-1,0))}c&&typeof c=="function"?c(l,a,{isEscDisabled:u,isRightDisabled:v,isLeftDisabled:m}):(l.keyCode===27&&!u&&(l.preventDefault(),r(!1)),l.keyCode===39&&!v&&(l.preventDefault(),i?_():y()),l.keyCode===37&&!m&&(l.preventDefault(),i?y():_()))}return b.useEffect(()=>(window.addEventListener("keydown",h,!1),()=>{window.removeEventListener("keydown",h)}),[s,t,n]),null},Ct=Rt,St={badge:()=>({position:"absolute",fontFamily:"monospace",background:"var(--reactour-accent,#007aff)",height:"1.875em",lineHeight:2,paddingLeft:"0.8125em",paddingRight:"0.8125em",fontSize:"1em",borderRadius:"1.625em",color:"white",textAlign:"center",boxShadow:"0 0.25em 0.5em rgba(0, 0, 0, 0.3)",top:"-0.8125em",left:"-0.8125em"}),controls:()=>({display:"flex",marginTop:24,alignItems:"center",justifyContent:"space-between"}),navigation:()=>({counterReset:"dot",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}),button:({disabled:e})=>({display:"block",padding:0,border:0,background:"none",cursor:e?"not-allowed":"pointer"}),arrow:({disabled:e})=>({color:e?"#caccce":"#646464",width:16,height:12,flex:"0 0 16px"}),dot:({current:e,disabled:t,showNumber:n})=>({counterIncrement:"dot",width:8,height:8,border:e?"0":"1px solid #caccce",borderRadius:"100%",padding:0,display:"block",margin:4,transition:"opacity 0.3s, transform 0.3s",cursor:t?"not-allowed":"pointer",transform:`scale(${e?1.25:1})`,color:e?"var(--reactour-accent, #007aff)":"#caccce",background:e?"var(--reactour-accent, #007aff)":"none"}),close:({disabled:e})=>({position:"absolute",top:22,right:22,width:9,height:9,"--rt-close-btn":e?"#caccce":"#5e5e5e","--rt-close-btn-disabled":e?"#caccce":"#000"}),svg:()=>({display:"block"})};function ne(e){return(t,n)=>{const r=St[t](n),o=e[t];return o?o(r,n):r}}var kt=({styles:e={},children:t})=>{const n=ne(e);return d.createElement("span",{style:n("badge",{})},t)},At=kt,Mt=e=>{var t=e,{styles:n={},onClick:r,disabled:o}=t,s=G(t,["styles","onClick","disabled"]);const i=ne(n);return d.createElement("button",k({className:"reactour__close-button",style:k(k({},i("button",{})),i("close",{disabled:o})),onClick:r},s),d.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":!0,role:"presentation",style:k({},i("svg",{}))},d.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))},Pt=Mt,Tt=({content:e,setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:s})=>typeof e=="function"?e({setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:s}):e,$t=Tt,Dt=({styles:e={},steps:t,setCurrentStep:n,currentStep:r,setIsOpen:o,nextButton:s,prevButton:i,disableDots:a,hideDots:c,hideButtons:h,disableAll:l,rtl:u,Arrow:v=ke})=>{const m=t.length,y=ne(e),_=({onClick:g,kind:p="next",children:E,hideArrow:R})=>{function P(){l||(g&&typeof g=="function"?g():n(p==="next"?Math.min(r+1,m-1):Math.max(r-1,0)))}return d.createElement("button",{style:y("button",{kind:p,disabled:l||(p==="next"?m-1===r:r===0)}),onClick:P,"aria-label":`Go to ${p} step`},R?null:d.createElement(v,{styles:e,inverted:u?p==="prev":p==="next",disabled:l||(p==="next"?m-1===r:r===0)}),E)};return d.createElement("div",{style:y("controls",{}),dir:u?"rtl":"ltr"},h?null:i&&typeof i=="function"?i({Button:_,setCurrentStep:n,currentStep:r,stepsLength:m,setIsOpen:o,steps:t}):d.createElement(_,{kind:"prev"}),c?null:d.createElement("div",{style:y("navigation",{})},Array.from({length:m},(g,p)=>p).map(g=>{var p;return d.createElement("button",{style:y("dot",{current:g===r,disabled:a||l}),onClick:()=>{!a&&!l&&n(g)},key:`navigation_dot_${g}`,"aria-label":((p=t[g])==null?void 0:p.navDotAriaLabel)||`Go to step ${g+1}`})})),h?null:s&&typeof s=="function"?s({Button:_,setCurrentStep:n,currentStep:r,stepsLength:m,setIsOpen:o,steps:t}):d.createElement(_,null))},It=Dt,ke=({styles:e={},inverted:t=!1,disabled:n})=>{const r=ne(e);return d.createElement("svg",{viewBox:"0 0 18.4 14.4",style:r("arrow",{inverted:t,disabled:n})},d.createElement("path",{d:t?"M17 7.2H1M10.8 1L17 7.2l-6.2 6.2":"M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}))},Ht={Badge:At,Close:Pt,Content:$t,Navigation:It,Arrow:ke},Lt=e=>k(k({},Ht),e),Nt=({styles:e,components:t={},badgeContent:n,accessibilityOptions:r,disabledActions:o,onClickClose:s,steps:i,setCurrentStep:a,currentStep:c,transition:h,isHighlightingObserved:l,setIsOpen:u,nextButton:v,prevButton:m,disableDotsNavigation:y,rtl:_,showPrevNextButtons:g=!0,showCloseButton:p=!0,showNavigation:E=!0,showBadge:R=!0,showDots:P=!0,meta:I,setMeta:H,setSteps:C})=>{const x=i[c],{Badge:A,Close:O,Content:M,Navigation:w,Arrow:L}=Lt(t),N=n&&typeof n=="function"?n({currentStep:c,totalSteps:i.length,transition:h}):c+1;function B(){o||(s&&typeof s=="function"?s({setCurrentStep:a,setIsOpen:u,currentStep:c,steps:i,meta:I,setMeta:H,setSteps:C}):u(!1))}return d.createElement(d.Fragment,null,R?d.createElement(A,{styles:e},N):null,p?d.createElement(O,{styles:e,"aria-label":r==null?void 0:r.closeButtonAriaLabel,disabled:o,onClick:B}):null,d.createElement(M,{content:x==null?void 0:x.content,setCurrentStep:a,currentStep:c,transition:h,isHighlightingObserved:l,setIsOpen:u}),E?d.createElement(w,{setCurrentStep:a,currentStep:c,setIsOpen:u,steps:i,styles:e,"aria-hidden":!(r!=null&&r.showNavigationScreenReaders),nextButton:v,prevButton:m,disableDots:y,hideButtons:!g,hideDots:!P,disableAll:o,rtl:_,Arrow:L}):null)},zt=Nt,Wt=e=>{var t=e,{currentStep:n,setCurrentStep:r,setIsOpen:o,steps:s=[],setSteps:i,styles:a={},scrollSmooth:c,afterOpen:h,beforeClose:l,padding:u=10,position:v,onClickMask:m,onClickHighlighted:y,keyboardHandler:_,className:g="reactour__popover",maskClassName:p="reactour__mask",highlightedMaskClassName:E,clipId:R,maskId:P,disableInteraction:I,disableKeyboardNavigation:H,inViewThreshold:C,disabledActions:x,setDisabledActions:A,disableWhenSelectorFalsy:O,rtl:M,accessibilityOptions:w={closeButtonAriaLabel:"Close Tour",showNavigationScreenReaders:!0},ContentComponent:L,Wrapper:N,meta:B,setMeta:V,onTransition:S=()=>"center"}=t,T=G(t,["currentStep","setCurrentStep","setIsOpen","steps","setSteps","styles","scrollSmooth","afterOpen","beforeClose","padding","position","onClickMask","onClickHighlighted","keyboardHandler","className","maskClassName","highlightedMaskClassName","clipId","maskId","disableInteraction","disableKeyboardNavigation","inViewThreshold","disabledActions","setDisabledActions","disableWhenSelectorFalsy","rtl","accessibilityOptions","ContentComponent","Wrapper","meta","setMeta","onTransition"]),$;const f=s[n],D=k(k({},a),f==null?void 0:f.styles),{sizes:F,transition:z,observableRefresher:re,isHighlightingObserved:ce,target:W}=xt(f,{block:"center",behavior:c?"smooth":"auto",inViewThreshold:C});b.useEffect(()=>(h&&typeof h=="function"&&h(W),()=>{l&&typeof l=="function"&&l(W)}),[]);const{maskPadding:Me,popoverPadding:Pe,wrapperPadding:Te}=Bt(($=f==null?void 0:f.padding)!=null?$:u),Y={setCurrentStep:r,setIsOpen:o,currentStep:n,setSteps:i,steps:s,setMeta:V,meta:B};function $e(){x||(m&&typeof m=="function"?m(Y):o(!1))}const De=typeof(f==null?void 0:f.stepInteraction)=="boolean"?!(f!=null&&f.stepInteraction):I?typeof I=="boolean"?I:I(Y):!1;b.useEffect(()=>(f!=null&&f.action&&typeof(f==null?void 0:f.action)=="function"&&(f==null||f.action(W)),(f==null?void 0:f.disableActions)!==void 0&&A(f==null?void 0:f.disableActions),()=>{f!=null&&f.actionAfter&&typeof(f==null?void 0:f.actionAfter)=="function"&&(f==null||f.actionAfter(W))}),[f]);const Ie=z?S:f!=null&&f.position?f==null?void 0:f.position:v,He=N||d.Fragment;return f?d.createElement(He,null,d.createElement(ot,{mutationObservables:f==null?void 0:f.mutationObservables,resizeObservables:f==null?void 0:f.resizeObservables,refresh:re}),d.createElement(Ct,{setCurrentStep:r,currentStep:n,setIsOpen:o,stepsLength:s.length,disableKeyboardNavigation:H,disable:x,rtl:M,clickProps:Y,keyboardHandler:_}),(!O||W)&&d.createElement(ht,{sizes:z?Vt:F,onClick:$e,styles:k({highlightedArea:q=>le(k({},q),{display:De?"block":"none"})},D),padding:z?0:Me,highlightedAreaClassName:E,className:p,onClickHighlighted:q=>{q.preventDefault(),q.stopPropagation(),y&&y(q,Y)},wrapperPadding:Te,clipId:R,maskId:P}),(!O||W)&&d.createElement(yt,{sizes:F,styles:D,position:Ie,padding:Pe,"aria-labelledby":w==null?void 0:w.ariaLabelledBy,className:g,refresher:n},L?d.createElement(L,k({styles:D,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:s,accessibilityOptions:w,disabledActions:x,transition:z,isHighlightingObserved:ce,rtl:M},T)):d.createElement(zt,k({styles:D,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:s,setSteps:i,accessibilityOptions:w,disabledActions:x,transition:z,isHighlightingObserved:ce,rtl:M,meta:B,setMeta:V},T)))):null},jt=Wt;function Bt(e){return typeof e=="object"&&e!==null?{maskPadding:e.mask,popoverPadding:e.popover,wrapperPadding:e.wrapper}:{maskPadding:e,popoverPadding:e,wrapperPadding:0}}var Vt={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},Ft={isOpen:!1,setIsOpen:()=>!1,currentStep:0,setCurrentStep:()=>0,steps:[],setSteps:()=>[],setMeta:()=>"",disabledActions:!1,setDisabledActions:()=>!1,components:{}},Ae=d.createContext(Ft),Yt=e=>{var t=e,{children:n,defaultOpen:r=!1,startAt:o=0,steps:s,setCurrentStep:i,currentStep:a}=t,c=G(t,["children","defaultOpen","startAt","steps","setCurrentStep","currentStep"]);const[h,l]=b.useState(r),[u,v]=b.useState(o),[m,y]=b.useState(s),[_,g]=b.useState(""),[p,E]=b.useState(!1),R=k({isOpen:h,setIsOpen:l,currentStep:a||u,setCurrentStep:i&&typeof i=="function"?i:v,steps:m,setSteps:y,disabledActions:p,setDisabledActions:E,meta:_,setMeta:g},c);return d.createElement(Ae.Provider,{value:R},n,h?d.createElement(jt,k({},R)):null)};function qt(){return b.useContext(Ae)}const Xt=()=>{const{setIsOpen:e}=qt(),[t,n]=b.useState(!1);return b.useEffect(()=>{const r=setTimeout(()=>{n(!0)},2e3);return()=>clearTimeout(r)},[]),oe.jsx(oe.Fragment,{children:t&&oe.jsx("button",{style:{position:"fixed",bottom:"20px",left:"10px",backgroundColor:"#9BE1A0",color:"#323F47",border:"none",borderRadius:"30px",padding:"10px 20px",cursor:"pointer",zIndex:"99"},onClick:()=>e(!0),children:"Start Tour"})})};export{Yt as T,Xt as a};
//# sourceMappingURL=TourGuide-BlfZ-03-.js.map
