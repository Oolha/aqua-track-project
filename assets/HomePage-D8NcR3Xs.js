import{j as S,L as fe,r as g,R as d}from"./index-BSMdXD9R.js";import{L as ze}from"./Logo-DyaAhGji.js";import{A as We}from"./AdvantagesSection-rXw1cR8S.js";const Be="_welcomFont_jkyvz_1",Fe="_box_jkyvz_8",Ve="_subtitle_jkyvz_13",Ge="_title_jkyvz_22",qe="_links_jkyvz_31",Ye="_tryTrackerBtn_jkyvz_37",Xe="_signInBtn_jkyvz_46",W={welcomFont:Be,box:Fe,subtitle:Ve,title:Ge,links:qe,tryTrackerBtn:Ye,signInBtn:Xe};function Ke(){return S.jsxs("div",{className:W.welcomFont,children:[S.jsx(ze,{}),S.jsxs("div",{className:W.box,children:[S.jsx("h2",{className:W.subtitle,children:"Record daily water intake and track"}),S.jsx("h1",{className:`${W.title} title`,children:"Water consumption tracker"}),S.jsxs("div",{className:W.links,children:[S.jsx(fe,{to:"/signup",className:`${W.linkGreen} linkGreen`,children:"Try Tracker"}),S.jsx(fe,{to:"/signin",className:`${W.linkWhite} linkWhite`,children:"Sign In"})]})]})]})}var Je={attributes:!0,characterData:!0,subtree:!0,childList:!0};function Qe(e,t,n=Je){g.useEffect(()=>{if(e.current){const r=new MutationObserver(t);return r.observe(e.current,n),()=>{r.disconnect()}}},[t,n])}var we=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,s){return o[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,s=this.__entries__;o<s.length;o++){var i=s[o];n.call(r,i[1],i[0])}},t}()}(),ae=typeof window<"u"&&typeof document<"u"&&window.document===document,U=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Ue=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(U):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Ze=2;function et(e,t){var n=!1,r=!1,o=0;function s(){n&&(n=!1,e()),r&&a()}function i(){Ue(s)}function a(){var c=Date.now();if(n){if(c-o<Ze)return;r=!0}else n=!0,r=!1,setTimeout(i,t);o=c}return a}var tt=20,nt=["top","right","bottom","left","width","height","size","weight"],rt=typeof MutationObserver<"u",ot=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=et(this.refresh.bind(this),tt)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!ae||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),rt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!ae||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=nt.some(function(s){return!!~r.indexOf(s)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),_e=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},F=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||U},Ee=ne(0,0,0,0);function Z(e){return parseFloat(e)||0}function de(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var s=e["border-"+o+"-width"];return r+Z(s)},0)}function it(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var s=o[r],i=e["padding-"+s];n[s]=Z(i)}return n}function st(e){var t=e.getBBox();return ne(0,0,t.width,t.height)}function at(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ee;var r=F(e).getComputedStyle(e),o=it(r),s=o.left+o.right,i=o.top+o.bottom,a=Z(r.width),c=Z(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==t&&(a-=de(r,"left","right")+s),Math.round(c+i)!==n&&(c-=de(r,"top","bottom")+i)),!ct(e)){var h=Math.round(a+s)-t,l=Math.round(c+i)-n;Math.abs(h)!==1&&(a-=h),Math.abs(l)!==1&&(c-=l)}return ne(o.left,o.top,a,c)}var lt=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof F(e).SVGGraphicsElement}:function(e){return e instanceof F(e).SVGElement&&typeof e.getBBox=="function"}}();function ct(e){return e===F(e).document.documentElement}function ut(e){return ae?lt(e)?st(e):at(e):Ee}function ft(e){var t=e.x,n=e.y,r=e.width,o=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,i=Object.create(s.prototype);return _e(i,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),i}function ne(e,t,n,r){return{x:e,y:t,width:n,height:r}}var dt=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ne(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=ut(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ht=function(){function e(t,n){var r=ft(n);_e(this,{target:t,contentRect:r})}return e}(),vt=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new we,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof F(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new dt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof F(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ht(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Oe=typeof WeakMap<"u"?new WeakMap:new we,xe=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ot.getInstance(),r=new vt(t,n,this);Oe.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){xe.prototype[e]=function(){var t;return(t=Oe.get(this))[e].apply(t,arguments)}});var pt=function(){return typeof U.ResizeObserver<"u"?U.ResizeObserver:xe}(),mt=({mutationObservables:e,resizeObservables:t,refresh:n})=>{const[r,o]=g.useState(0),s=g.useRef(document.documentElement||document.body);function i(c){const h=Array.from(c);for(const l of h)if(e){if(!l.attributes)continue;e.find(v=>l.matches(v))&&n(!0)}}function a(c){const h=Array.from(c);for(const l of h)if(t){if(!l.attributes)continue;t.find(v=>l.matches(v))&&o(r+1)}}return Qe(s,c=>{for(const h of c)h.addedNodes.length!==0&&(i(h.addedNodes),a(h.addedNodes)),h.removedNodes.length!==0&&(i(h.removedNodes),a(h.removedNodes))},{childList:!0,subtree:!0}),g.useEffect(()=>{if(!t)return;const c=new pt(()=>{n()});for(const h of t){const l=document.querySelector(h);l&&c.observe(l)}return()=>{c.disconnect()}},[t,r]),null},gt=mt;function Q(e){let t=ke;return e&&(t=e.getBoundingClientRect()),t}function bt(e,t){const[n,r]=g.useState(ke),o=g.useCallback(()=>{e!=null&&e.current&&r(Q(e==null?void 0:e.current))},[e==null?void 0:e.current]);return g.useEffect(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[e==null?void 0:e.current,t]),n}var ke={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function yt(e,t){return new Promise(n=>{if(!(e instanceof Element))throw new TypeError("Argument 1 must be an Element");let r=0,o=null;const s=Object.assign({behavior:"smooth"},t);e.scrollIntoView(s),requestAnimationFrame(i);function i(){const a=e==null?void 0:e.getBoundingClientRect().top;if(a===o){if(r++>2)return n(null)}else r=0,o=a;requestAnimationFrame(i)}})}function J(e){return e<0?0:e}function wt(e){return typeof e=="object"&&e!==null?{thresholdX:e.x||0,thresholdY:e.y||0}:{thresholdX:e||0,thresholdY:e||0}}function re(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return{w:e,h:t}}function _t({top:e,right:t,bottom:n,left:r,threshold:o}){const{w:s,h:i}=re(),{thresholdX:a,thresholdY:c}=wt(o);return e<0&&n-e>i?!0:e>=0+c&&r>=0+a&&n<=i-c&&t<=s-a}var he=(e,t)=>e>t,ve=(e,t)=>e>t;function Et(e,t=[]){const n=(r,o)=>t.includes(r)?1:t.includes(o)?-1:0;return Object.keys(e).map(r=>({position:r,value:e[r]})).sort((r,o)=>o.value-r.value).sort((r,o)=>n(r.position,o.position)).filter(r=>r.value>0).map(r=>r.position)}var se=10;function le(e=se){return Array.isArray(e)?e.length===1?[e[0],e[0],e[0],e[0]]:e.length===2?[e[1],e[0],e[1],e[0]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.length>3?[e[0],e[1],e[2],e[3]]:[se,se]:[e,e,e,e]}var Ot={maskWrapper:()=>({opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}),svgWrapper:({windowWidth:e,windowHeight:t,wpt:n,wpl:r})=>({width:e,height:t,left:Number(r),top:Number(n),position:"fixed"}),maskArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,fill:"black",rx:0}),maskRect:({windowWidth:e,windowHeight:t,maskID:n})=>({x:0,y:0,width:e,height:t,fill:"currentColor",mask:`url(#${n})`}),clickArea:({windowWidth:e,windowHeight:t,clipID:n})=>({x:0,y:0,width:e,height:t,fill:"currentcolor",pointerEvents:"auto",clipPath:`url(#${n})`}),highlightedArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,pointerEvents:"auto",fill:"transparent",display:"none"})};function xt(e){return(t,n)=>{const r=Ot[t](n),o=e[t];return o?o(r,n):r}}var kt=({padding:e=10,wrapperPadding:t=0,onClick:n,onClickHighlighted:r,styles:o={},sizes:s,className:i,highlightedAreaClassName:a,maskId:c,clipId:h})=>{const l=c||pe("mask__"),u=h||pe("clip__"),v=xt(o),[m,y,_,b]=le(e),[p,E,k,j]=le(t),{w:N,h:H}=re(),R=J((s==null?void 0:s.width)+b+y),x=J((s==null?void 0:s.height)+m+_),M=J((s==null?void 0:s.top)-m-p),O=J((s==null?void 0:s.left)-b-j),P=N-j-E,w=H-p-k,D=v("maskArea",{x:O,y:M,width:R,height:x}),L=v("highlightedArea",{x:O,y:M,width:R,height:x});return d.createElement("div",{style:v("maskWrapper",{}),onClick:n,className:i},d.createElement("svg",{width:P,height:w,xmlns:"http://www.w3.org/2000/svg",style:v("svgWrapper",{windowWidth:P,windowHeight:w,wpt:p,wpl:j})},d.createElement("defs",null,d.createElement("mask",{id:l},d.createElement("rect",{x:0,y:0,width:P,height:w,fill:"white"}),d.createElement("rect",{style:D,rx:D.rx?1:void 0})),d.createElement("clipPath",{id:u},d.createElement("polygon",{points:`0 0, 0 ${w}, ${O} ${w}, ${O} ${M}, ${O+R} ${M}, ${O+R} ${M+x}, ${O} ${M+x}, ${O} ${w}, ${P} ${w}, ${P} 0`}))),d.createElement("rect",{style:v("maskRect",{windowWidth:P,windowHeight:w,maskID:l})}),d.createElement("rect",{style:v("clickArea",{windowWidth:P,windowHeight:w,top:M,left:O,width:R,height:x,clipID:u})}),d.createElement("rect",{style:L,className:a,onClick:r,rx:L.rx?1:void 0})))},Rt=kt;function pe(e){return e+Math.random().toString(36).substring(2,16)}var Ct=Object.defineProperty,ee=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,me=(e,t,n)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&me(e,n,t[n]);if(ee)for(var n of ee(t))Ce.call(t,n)&&me(e,n,t[n]);return e},St=(e,t)=>{var n={};for(var r in e)Re.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ee)for(var r of ee(e))t.indexOf(r)<0&&Ce.call(e,r)&&(n[r]=e[r]);return n},At={popover:()=>({position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0})};function Mt(e){return(t,n)=>{const r=At[t](n),o=e[t];return o?o(r,n):r}}var Pt=e=>{var t=e,{children:n,position:r="bottom",padding:o=10,styles:s={},sizes:i,refresher:a}=t,c=St(t,["children","position","padding","styles","sizes","refresher"]);const h=g.useRef(null),l=g.useRef(""),u=g.useRef(""),v=g.useRef(""),{w:m,h:y}=re(),_=Mt(s),b=bt(h,a),{width:p,height:E}=b,[k,j,N,H]=le(o),R=(i==null?void 0:i.left)-H,x=(i==null?void 0:i.top)-k,M=(i==null?void 0:i.right)+j,O=(i==null?void 0:i.bottom)+N,P=r&&typeof r=="function"?r({width:p,height:E,windowWidth:m,windowHeight:y,top:x,left:R,right:M,bottom:O,x:i.x,y:i.y},b):r,w={left:R,right:m-M,top:x,bottom:y-O},D=(C,T,$)=>{switch(C){case"top":return w.top>E+N;case"right":return T?!1:w.right>p+H;case"bottom":return $?!1:w.bottom>E+k;case"left":return w.left>p+j;default:return!1}},L=(C,T,$)=>{const f=Et(w,$?["right","left"]:T?["top","bottom"]:[]);for(let I=0;I<f.length;I++)if(D(f[I],T,$))return l.current=f[I],C[f[I]];return l.current="center",C.center},G=(C=>{if(Array.isArray(C)){const z=he(C[0],m),ie=ve(C[1],y);return l.current="custom",[z?m/2-p/2:C[0],ie?y/2-E/2:C[1]]}const T=he(R+p,m),$=ve(O+E,y),f=T?Math.min(R,m-p):Math.max(R,0),I=$?E>w.bottom?Math.max(O-E,0):Math.max(x,0):x;$&&E>w.bottom?u.current="bottom":u.current="top",T?v.current="left":v.current="right";const q={top:[f-H,x-E-N],right:[M+H,I-k],bottom:[f-H,O+k],left:[R-p-j,I-k],center:[m/2-p/2,y/2-E/2]};return C==="center"||D(C,T,$)&&!T&&!$?(l.current=C,q[C]):L(q,T,$)})(P);return d.createElement("div",ge({className:"reactour__popover",style:ge({transform:`translate(${Math.round(G[0])}px, ${Math.round(G[1])}px)`},_("popover",{position:l.current,verticalAlign:u.current,horizontalAlign:v.current,helperRect:b,targetRect:i})),ref:h},c),n)},jt=Pt,Tt=Object.defineProperty,$t=Object.defineProperties,It=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&be(e,n,t[n]);if(te)for(var n of te(t))Ae.call(t,n)&&be(e,n,t[n]);return e},ce=(e,t)=>$t(e,It(t)),X=(e,t)=>{var n={};for(var r in e)Se.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&te)for(var r of te(e))t.indexOf(r)<0&&Ae.call(e,r)&&(n[r]=e[r]);return n},Nt={bottom:0,height:0,left:0,right:0,top:0,width:0,windowWidth:0,windowHeight:0,x:0,y:0};function Ht(e,t={block:"center",behavior:"smooth",inViewThreshold:0}){const[n,r]=g.useState(!1),[o,s]=g.useState(!1),[i,a]=g.useState(!1),[c,h]=g.useState(null),[l,u]=g.useState(Nt),v=(e==null?void 0:e.selector)instanceof Element?e==null?void 0:e.selector:document.querySelector(e==null?void 0:e.selector),m=g.useCallback(()=>{const _=ye(v,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),b=X(_,["hasHighligtedElems"]);Object.entries(l).some(([p,E])=>b[p]!==E)&&u(b)},[v,e==null?void 0:e.highlightedSelectors,l]);g.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[v,e==null?void 0:e.highlightedSelectors,c]),g.useEffect(()=>{!_t(ce(A({},l),{threshold:t.inViewThreshold}))&&v&&(r(!0),yt(v,t).then(()=>{o||h(Date.now())}).finally(()=>{r(!1)}))},[l]);const y=g.useCallback(()=>{s(!0);const _=ye(v,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),{hasHighligtedElems:b}=_,p=X(_,["hasHighligtedElems"]);a(b),u(p),s(!1)},[v,e==null?void 0:e.highlightedSelectors,l]);return{sizes:l,transition:n,target:v,observableRefresher:y,isHighlightingObserved:i}}function ye(e,t=[],n=!0){let r=!1;const{w:o,h:s}=re();if(!t)return ce(A({},Q(e)),{windowWidth:o,windowHeight:s,hasHighligtedElems:!1});let i=Q(e),a={bottom:0,height:0,left:o,right:0,top:s,width:0};for(const h of t){const l=document.querySelector(h);if(!l||l.style.display==="none"||l.style.visibility==="hidden")continue;const u=Q(l);r=!0,n||!e?(u.top<a.top&&(a.top=u.top),u.right>a.right&&(a.right=u.right),u.bottom>a.bottom&&(a.bottom=u.bottom),u.left<a.left&&(a.left=u.left),a.width=a.right-a.left,a.height=a.bottom-a.top):(u.top<i.top&&(i.top=u.top),u.right>i.right&&(i.right=u.right),u.bottom>i.bottom&&(i.bottom=u.bottom),u.left<i.left&&(i.left=u.left),i.width=i.right-i.left,i.height=i.bottom-i.top)}const c=n||!e?a.width>0&&a.height>0:!1;return{left:(c?a:i).left,top:(c?a:i).top,right:(c?a:i).right,bottom:(c?a:i).bottom,width:(c?a:i).width,height:(c?a:i).height,windowWidth:o,windowHeight:s,hasHighligtedElems:r,x:i.x,y:i.y}}var Dt=({disableKeyboardNavigation:e,setCurrentStep:t,currentStep:n,setIsOpen:r,stepsLength:o,disable:s,rtl:i,clickProps:a,keyboardHandler:c})=>{function h(l){if(l.stopPropagation(),e===!0||s)return;let u,v,m;e&&(u=e.includes("esc"),v=e.includes("right"),m=e.includes("left"));function y(){t(Math.min(n+1,o-1))}function _(){t(Math.max(n-1,0))}c&&typeof c=="function"?c(l,a,{isEscDisabled:u,isRightDisabled:v,isLeftDisabled:m}):(l.keyCode===27&&!u&&(l.preventDefault(),r(!1)),l.keyCode===39&&!v&&(l.preventDefault(),i?_():y()),l.keyCode===37&&!m&&(l.preventDefault(),i?y():_()))}return g.useEffect(()=>(window.addEventListener("keydown",h,!1),()=>{window.removeEventListener("keydown",h)}),[s,t,n]),null},Lt=Dt,zt={badge:()=>({position:"absolute",fontFamily:"monospace",background:"var(--reactour-accent,#007aff)",height:"1.875em",lineHeight:2,paddingLeft:"0.8125em",paddingRight:"0.8125em",fontSize:"1em",borderRadius:"1.625em",color:"white",textAlign:"center",boxShadow:"0 0.25em 0.5em rgba(0, 0, 0, 0.3)",top:"-0.8125em",left:"-0.8125em"}),controls:()=>({display:"flex",marginTop:24,alignItems:"center",justifyContent:"space-between"}),navigation:()=>({counterReset:"dot",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}),button:({disabled:e})=>({display:"block",padding:0,border:0,background:"none",cursor:e?"not-allowed":"pointer"}),arrow:({disabled:e})=>({color:e?"#caccce":"#646464",width:16,height:12,flex:"0 0 16px"}),dot:({current:e,disabled:t,showNumber:n})=>({counterIncrement:"dot",width:8,height:8,border:e?"0":"1px solid #caccce",borderRadius:"100%",padding:0,display:"block",margin:4,transition:"opacity 0.3s, transform 0.3s",cursor:t?"not-allowed":"pointer",transform:`scale(${e?1.25:1})`,color:e?"var(--reactour-accent, #007aff)":"#caccce",background:e?"var(--reactour-accent, #007aff)":"none"}),close:({disabled:e})=>({position:"absolute",top:22,right:22,width:9,height:9,"--rt-close-btn":e?"#caccce":"#5e5e5e","--rt-close-btn-disabled":e?"#caccce":"#000"}),svg:()=>({display:"block"})};function oe(e){return(t,n)=>{const r=zt[t](n),o=e[t];return o?o(r,n):r}}var Wt=({styles:e={},children:t})=>{const n=oe(e);return d.createElement("span",{style:n("badge",{})},t)},Bt=Wt,Ft=e=>{var t=e,{styles:n={},onClick:r,disabled:o}=t,s=X(t,["styles","onClick","disabled"]);const i=oe(n);return d.createElement("button",A({className:"reactour__close-button",style:A(A({},i("button",{})),i("close",{disabled:o})),onClick:r},s),d.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":!0,role:"presentation",style:A({},i("svg",{}))},d.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))},Vt=Ft,Gt=({content:e,setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:s})=>typeof e=="function"?e({setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:s}):e,qt=Gt,Yt=({styles:e={},steps:t,setCurrentStep:n,currentStep:r,setIsOpen:o,nextButton:s,prevButton:i,disableDots:a,hideDots:c,hideButtons:h,disableAll:l,rtl:u,Arrow:v=Me})=>{const m=t.length,y=oe(e),_=({onClick:b,kind:p="next",children:E,hideArrow:k})=>{function j(){l||(b&&typeof b=="function"?b():n(p==="next"?Math.min(r+1,m-1):Math.max(r-1,0)))}return d.createElement("button",{style:y("button",{kind:p,disabled:l||(p==="next"?m-1===r:r===0)}),onClick:j,"aria-label":`Go to ${p} step`},k?null:d.createElement(v,{styles:e,inverted:u?p==="prev":p==="next",disabled:l||(p==="next"?m-1===r:r===0)}),E)};return d.createElement("div",{style:y("controls",{}),dir:u?"rtl":"ltr"},h?null:i&&typeof i=="function"?i({Button:_,setCurrentStep:n,currentStep:r,stepsLength:m,setIsOpen:o,steps:t}):d.createElement(_,{kind:"prev"}),c?null:d.createElement("div",{style:y("navigation",{})},Array.from({length:m},(b,p)=>p).map(b=>{var p;return d.createElement("button",{style:y("dot",{current:b===r,disabled:a||l}),onClick:()=>{!a&&!l&&n(b)},key:`navigation_dot_${b}`,"aria-label":((p=t[b])==null?void 0:p.navDotAriaLabel)||`Go to step ${b+1}`})})),h?null:s&&typeof s=="function"?s({Button:_,setCurrentStep:n,currentStep:r,stepsLength:m,setIsOpen:o,steps:t}):d.createElement(_,null))},Xt=Yt,Me=({styles:e={},inverted:t=!1,disabled:n})=>{const r=oe(e);return d.createElement("svg",{viewBox:"0 0 18.4 14.4",style:r("arrow",{inverted:t,disabled:n})},d.createElement("path",{d:t?"M17 7.2H1M10.8 1L17 7.2l-6.2 6.2":"M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}))},Kt={Badge:Bt,Close:Vt,Content:qt,Navigation:Xt,Arrow:Me},Jt=e=>A(A({},Kt),e),Qt=({styles:e,components:t={},badgeContent:n,accessibilityOptions:r,disabledActions:o,onClickClose:s,steps:i,setCurrentStep:a,currentStep:c,transition:h,isHighlightingObserved:l,setIsOpen:u,nextButton:v,prevButton:m,disableDotsNavigation:y,rtl:_,showPrevNextButtons:b=!0,showCloseButton:p=!0,showNavigation:E=!0,showBadge:k=!0,showDots:j=!0,meta:N,setMeta:H,setSteps:R})=>{const x=i[c],{Badge:M,Close:O,Content:P,Navigation:w,Arrow:D}=Jt(t),L=n&&typeof n=="function"?n({currentStep:c,totalSteps:i.length,transition:h}):c+1;function V(){o||(s&&typeof s=="function"?s({setCurrentStep:a,setIsOpen:u,currentStep:c,steps:i,meta:N,setMeta:H,setSteps:R}):u(!1))}return d.createElement(d.Fragment,null,k?d.createElement(M,{styles:e},L):null,p?d.createElement(O,{styles:e,"aria-label":r==null?void 0:r.closeButtonAriaLabel,disabled:o,onClick:V}):null,d.createElement(P,{content:x==null?void 0:x.content,setCurrentStep:a,currentStep:c,transition:h,isHighlightingObserved:l,setIsOpen:u}),E?d.createElement(w,{setCurrentStep:a,currentStep:c,setIsOpen:u,steps:i,styles:e,"aria-hidden":!(r!=null&&r.showNavigationScreenReaders),nextButton:v,prevButton:m,disableDots:y,hideButtons:!b,hideDots:!j,disableAll:o,rtl:_,Arrow:D}):null)},Ut=Qt,Zt=e=>{var t=e,{currentStep:n,setCurrentStep:r,setIsOpen:o,steps:s=[],setSteps:i,styles:a={},scrollSmooth:c,afterOpen:h,beforeClose:l,padding:u=10,position:v,onClickMask:m,onClickHighlighted:y,keyboardHandler:_,className:b="reactour__popover",maskClassName:p="reactour__mask",highlightedMaskClassName:E,clipId:k,maskId:j,disableInteraction:N,disableKeyboardNavigation:H,inViewThreshold:R,disabledActions:x,setDisabledActions:M,disableWhenSelectorFalsy:O,rtl:P,accessibilityOptions:w={closeButtonAriaLabel:"Close Tour",showNavigationScreenReaders:!0},ContentComponent:D,Wrapper:L,meta:V,setMeta:G,onTransition:C=()=>"center"}=t,T=X(t,["currentStep","setCurrentStep","setIsOpen","steps","setSteps","styles","scrollSmooth","afterOpen","beforeClose","padding","position","onClickMask","onClickHighlighted","keyboardHandler","className","maskClassName","highlightedMaskClassName","clipId","maskId","disableInteraction","disableKeyboardNavigation","inViewThreshold","disabledActions","setDisabledActions","disableWhenSelectorFalsy","rtl","accessibilityOptions","ContentComponent","Wrapper","meta","setMeta","onTransition"]),$;const f=s[n],I=A(A({},a),f==null?void 0:f.styles),{sizes:q,transition:z,observableRefresher:ie,isHighlightingObserved:ue,target:B}=Ht(f,{block:"center",behavior:c?"smooth":"auto",inViewThreshold:R});g.useEffect(()=>(h&&typeof h=="function"&&h(B),()=>{l&&typeof l=="function"&&l(B)}),[]);const{maskPadding:Te,popoverPadding:$e,wrapperPadding:Ie}=tn(($=f==null?void 0:f.padding)!=null?$:u),K={setCurrentStep:r,setIsOpen:o,currentStep:n,setSteps:i,steps:s,setMeta:G,meta:V};function Ne(){x||(m&&typeof m=="function"?m(K):o(!1))}const He=typeof(f==null?void 0:f.stepInteraction)=="boolean"?!(f!=null&&f.stepInteraction):N?typeof N=="boolean"?N:N(K):!1;g.useEffect(()=>(f!=null&&f.action&&typeof(f==null?void 0:f.action)=="function"&&(f==null||f.action(B)),(f==null?void 0:f.disableActions)!==void 0&&M(f==null?void 0:f.disableActions),()=>{f!=null&&f.actionAfter&&typeof(f==null?void 0:f.actionAfter)=="function"&&(f==null||f.actionAfter(B))}),[f]);const De=z?C:f!=null&&f.position?f==null?void 0:f.position:v,Le=L||d.Fragment;return f?d.createElement(Le,null,d.createElement(gt,{mutationObservables:f==null?void 0:f.mutationObservables,resizeObservables:f==null?void 0:f.resizeObservables,refresh:ie}),d.createElement(Lt,{setCurrentStep:r,currentStep:n,setIsOpen:o,stepsLength:s.length,disableKeyboardNavigation:H,disable:x,rtl:P,clickProps:K,keyboardHandler:_}),(!O||B)&&d.createElement(Rt,{sizes:z?nn:q,onClick:Ne,styles:A({highlightedArea:Y=>ce(A({},Y),{display:He?"block":"none"})},I),padding:z?0:Te,highlightedAreaClassName:E,className:p,onClickHighlighted:Y=>{Y.preventDefault(),Y.stopPropagation(),y&&y(Y,K)},wrapperPadding:Ie,clipId:k,maskId:j}),(!O||B)&&d.createElement(jt,{sizes:q,styles:I,position:De,padding:$e,"aria-labelledby":w==null?void 0:w.ariaLabelledBy,className:b,refresher:n},D?d.createElement(D,A({styles:I,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:s,accessibilityOptions:w,disabledActions:x,transition:z,isHighlightingObserved:ue,rtl:P},T)):d.createElement(Ut,A({styles:I,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:s,setSteps:i,accessibilityOptions:w,disabledActions:x,transition:z,isHighlightingObserved:ue,rtl:P,meta:V,setMeta:G},T)))):null},en=Zt;function tn(e){return typeof e=="object"&&e!==null?{maskPadding:e.mask,popoverPadding:e.popover,wrapperPadding:e.wrapper}:{maskPadding:e,popoverPadding:e,wrapperPadding:0}}var nn={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},rn={isOpen:!1,setIsOpen:()=>!1,currentStep:0,setCurrentStep:()=>0,steps:[],setSteps:()=>[],setMeta:()=>"",disabledActions:!1,setDisabledActions:()=>!1,components:{}},Pe=d.createContext(rn),on=e=>{var t=e,{children:n,defaultOpen:r=!1,startAt:o=0,steps:s,setCurrentStep:i,currentStep:a}=t,c=X(t,["children","defaultOpen","startAt","steps","setCurrentStep","currentStep"]);const[h,l]=g.useState(r),[u,v]=g.useState(o),[m,y]=g.useState(s),[_,b]=g.useState(""),[p,E]=g.useState(!1),k=A({isOpen:h,setIsOpen:l,currentStep:a||u,setCurrentStep:i&&typeof i=="function"?i:v,steps:m,setSteps:y,disabledActions:p,setDisabledActions:E,meta:_,setMeta:b},c);return d.createElement(Pe.Provider,{value:k},n,h?d.createElement(en,A({},k)):null)};function sn(){return g.useContext(Pe)}const an=()=>{const{setIsOpen:e}=sn(),[t,n]=g.useState(!1);return g.useEffect(()=>{const r=setTimeout(()=>{n(!0)},2e3);return()=>clearTimeout(r)},[]),S.jsx(S.Fragment,{children:t&&S.jsx("button",{style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#9BE1A0",color:"#323F47",border:"none",borderRadius:"30px",padding:"10px 20px",cursor:"pointer"},onClick:()=>e(!0),children:"Start Tour"})})},ln="_homePage_e602l_2",cn={homePage:ln},je=[{selector:".title",content:"Hi! Welcome to AquaTrack!"},{selector:".linkGreen",content:"Click here and register!"},{selector:".linkWhite",content:"Click here to log in to your account!"}];console.log("Steps:",je);const hn=()=>S.jsxs(on,{steps:je,children:[S.jsx(an,{}),S.jsxs("div",{className:cn.homePage,children:[S.jsx(Ke,{}),S.jsx(We,{})]})]});export{hn as default};
//# sourceMappingURL=HomePage-D8NcR3Xs.js.map
