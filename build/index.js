!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@utility-point/ReactGT",["React"],t):"object"==typeof exports?exports["@utility-point/ReactGT"]=t(require("react")):e["@utility-point/ReactGT"]=t(e.React)}(global,(function(e){return(()=>{"use strict";var t={54:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466);t.default=({direction:e,disabled:t,onClick:n})=>o.default.createElement("button",{type:"button",className:"__react-gt__chevron-button",disabled:t,onClick:n},-1===e?o.default.createElement(l.LeftArrow,null):o.default.createElement(l.RightArrow,null))},737:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466);t.default=o.default.memo((({close:e})=>o.default.createElement("button",{type:"button",onClick:t=>{t.stopPropagation(),e()},className:"__react-gt__close-button"},o.default.createElement(l.Close,null))))},801:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=o.default.memo((({currentStep:e})=>o.default.createElement("div",{className:"__react-gt__page-number"},e+1)))},486:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n(798));t.default=a.default.memo((({children:e,style:t,className:n})=>{const[r,o]=a.useState(!0);return a.useEffect((()=>{setTimeout((()=>{o(!1)}),0)}),[]),a.default.createElement("div",{className:`${n} __react-gt__fade-in ${r?"":"__react-gt__fade-in-init"}`},e)}))},646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(486));t.default=o.default.memo((()=>o.default.createElement(l.default,null,o.default.createElement("div",{className:"__react-gt__highlight"}))))},466:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DownArrow=t.UpArrow=t.Close=t.RightArrow=t.LeftArrow=void 0;const o=r(n(798)),l=({path:e})=>o.default.createElement("svg",{className:"__react-gt__icon"},o.default.createElement("path",{d:e}));t.LeftArrow=()=>o.default.createElement(l,{path:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),t.RightArrow=()=>o.default.createElement(l,{path:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),t.Close=()=>o.default.createElement(l,{path:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),t.UpArrow=()=>o.default.createElement(l,{path:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),t.DownArrow=()=>o.default.createElement(l,{path:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=({top:e,left:t,right:n,width:r,height:o,bottom:l},a)=>{const i={},{clientWidth:u,clientHeight:d}=document.documentElement,c=t-10,s=u-(r+t+10),f=e-10,p=d-l;i.width=u<350?u-20:330,i.height=a;const _=()=>{f>p?i.bottom=l+10:i.top=f},h=()=>{c>s?t+r<i.width+10?i.left=10:i.right=u-n-10:u-t<i.width+10?i.right=10:i.left=t-10};return c>s&&c>=i.width+20?(i.right=u-t+20,_()):s>=i.width+20?(i.left=t+r+20,_()):f>p&&f>a+20?(i.bottom=e-20,h()):p>a+20?(i.top=e+o+20,h()):(i.top=e+o/3,i.left=t+10+r/2-i.width/2),i.top<10&&(i.top=10),i.bottom>window.innerHeight&&(i.bottom=window.innerHeight-30),i.left<10&&(i.left=10),i.right>window.innerWidth&&(i.right=window.innerWidth-30),i}},284:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(798)),d=i(n(486)),c=n(466),s=i(n(479)),f=i(n(774));t.default=u.default.memo((e=>{var{boundaries:t,stepIndex:n,changeStep:r,allSteps:o,close:l,renderedContent:i,scrollToElement:p}=e,_=e.overrides,{closeButton:h,currentStepLabel:m}=_,v=a(_,["closeButton","currentStepLabel"]);const b=u.useRef(void 0),g=u.useMemo((()=>u.default.createElement("div",{ref:b},i,u.default.createElement(f.default,{stepIndex:n,changeStep:r,allSteps:o,overrides:v}))),[o,r,i,n]),w=u.useMemo((()=>{var e,n;return s.default(t,(null!==(n=null===(e=null==b?void 0:b.current)||void 0===e?void 0:e.clientHeight)&&void 0!==n?n:0)+48)}),[t]),y=u.useMemo((()=>(({top:e,left:t,height:n,width:r})=>e<-n?u.default.createElement(c.UpArrow,null):e>window.innerHeight-10?u.default.createElement(c.DownArrow,null):t>window.innerWidth-10?u.default.createElement(c.RightArrow,null):t<-r?u.default.createElement(c.LeftArrow,null):null)(t)),[t]);return u.default.createElement(d.default,{className:"__react-gt__modal",style:{transform:`translate(${w.right?`calc(${document.body.clientWidth-w.right}px - 100%)`:`${w.left}px`}, ${w.bottom?`calc(${w.bottom}px - 100%)`:`${w.top}px`})`,width:`${w.width}px`,height:`${w.height}px`}},u.default.createElement("div",{className:"__react-gt__modal-content",style:{padding:`24px ${w.width/11}px`},onClick:y?p:void 0},!!y&&u.default.createElement("div",{className:"__react-gt__arrow"},y),u.default.createElement(m,{currentStep:n,totalSteps:o.length}),u.default.createElement(h,{close:l}),g))}))},654:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(54));t.default=({currentStep:e,goNext:t})=>o.default.createElement(l.default,{direction:1,disabled:0===e,onClick:t})},503:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(54));t.default=({currentStep:e,goBack:t,totalSteps:n})=>o.default.createElement(l.default,{direction:-1,disabled:e===n-1,onClick:t})},157:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(n(798)),u=a(n(737)),d=a(n(801)),c=a(n(654)),s=a(n(503)),f=a(n(425)),p=a(n(529)),_=a(n(887)),h=a(n(299));t.default=i.default.memo((({open:e,onClose:t,steps:n,openAt:r=0,scrollIntoViewOptions:o={behavior:"smooth",block:"center"},overrides:l})=>{var a,m,v,b,g,w;const[y,O]=i.useState(r),x=i.useMemo((()=>n.map(((e,t)=>t))),[n]),E=i.useCallback((()=>{t(),O(r)}),[t,r]);return e?i.default.createElement(i.default.Fragment,null,i.default.createElement("style",null,h.default()),i.default.createElement("div",{className:"__react-gt__overlay",onClick:E}),i.default.createElement(f.default,Object.assign({},n[y],{stepIndex:y,changeStep:e=>O(e),allSteps:x,close:E,scrollIntoViewOptions:o,overrides:{closeButton:null!==(a=null==l?void 0:l.closeButton)&&void 0!==a?a:u.default,currentStepLabel:null!==(m=null==l?void 0:l.currentStepLabel)&&void 0!==m?m:d.default,nextStepButton:null!==(v=null==l?void 0:l.nextStepButton)&&void 0!==v?v:c.default,previousStepButton:null!==(b=null==l?void 0:l.previousStepButton)&&void 0!==b?b:s.default,stepButton:null!==(g=null==l?void 0:l.stepButton)&&void 0!==g?g:p.default,stepButtonWrapper:null!==(w=null==l?void 0:l.stepButtonWrapper)&&void 0!==w?w:_.default}}))):null}))},425:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(798)),d=i(n(646)),c=i(n(284)),s=n(798),f=u.default.memo((({boundaries:{top:e,left:t,height:n,width:r}})=>u.default.createElement("style",null,".__react-gt__highlight","{","transform: translate(",t-10,"px, ",e-10,"px);width: ",r+20,"px;height:"," ",n+20,"px","}"))),p=u.default.memo((({element:e,stepIndex:t,changeStep:n,allSteps:r,close:o,renderedContent:l,scrollIntoViewOptions:a,overrides:i})=>{const[p,_]=u.useState((()=>e.getBoundingClientRect())),h=s.useCallback((()=>_(e.getBoundingClientRect())),[e]),m=s.useCallback((()=>{e.scrollIntoView(a),h()}),[e]),v=s.useCallback((e=>{"ArrowLeft"===e.code&&0!==t?n(t-1):"ArrowRight"===e.code&&t!==r.length-1&&n(t+1)}),[t,n,r]);return u.useEffect((()=>{m(),window.addEventListener("resize",h),window.addEventListener("scroll",h),window.addEventListener("keydown",v);const e=setInterval((()=>window.dispatchEvent(new Event("resize"))),250),t=setTimeout((()=>clearInterval(e)),3e3);return()=>{clearInterval(e),clearTimeout(t),window.removeEventListener("resize",h),window.removeEventListener("scroll",h),window.removeEventListener("keydown",v)}}),[e]),u.default.createElement(u.default.Fragment,null,u.default.createElement(f,{boundaries:p}),u.default.createElement(d.default,null),u.default.createElement(c.default,{scrollToElement:m,boundaries:p,renderedContent:l,stepIndex:t,changeStep:n,allSteps:r,close:o,overrides:i}))}));t.default=u.default.memo((e=>{var{selector:t,content:n,stepIndex:r}=e,o=a(e,["selector","content","stepIndex"]);const[l,i]=u.useState(0),d=u.default.createElement(n,{step:r}),c=u.useMemo((()=>{return e=t,document.querySelector(e);var e}),[t,l]);return null==c&&l<25&&setTimeout((()=>i(l+1)),100),l>0&&i(0),u.default.createElement(p,Object.assign({},Object.assign(Object.assign({},o),{element:null!=c?c:document.body,renderedContent:d,stepIndex:r})))}))},529:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=({currentStep:e,step:t,goToStep:n})=>o.default.createElement("button",{type:"button",className:e===t?"__react-gt__dot __react-gt__dot-selected":"__react-gt__dot",onClick:n},o.default.createElement("div",null))},887:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=({stepButtons:e})=>o.default.createElement("div",{className:"__react-gt__dot-wrapper"},e)},607:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(157);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(a).default}}),o(n(699),t)},774:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=o.default.memo((({stepIndex:e,changeStep:t,allSteps:n,overrides:{nextStepButton:r,previousStepButton:l,stepButton:a,stepButtonWrapper:i}})=>o.default.createElement("div",{className:"__react-gt__page-selector"},o.default.createElement(l,{currentStep:e,goBack:()=>t(e-1),skipTo:t,totalSteps:n.length}),o.default.createElement(i,{stepButtons:n.map(((n,r)=>o.default.createElement(a,{key:n,currentStep:e,step:r,goToStep:()=>t(r)}))),currentStep:e,totalSteps:n.length,goNext:()=>t(e+1),goBack:()=>t(e-1),skipTo:t}),o.default.createElement(r,{currentStep:e,goNext:()=>t(e+1),skipTo:t,totalSteps:n.length}))))},299:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=(e,t)=>Object.entries(e).reduce(((e,[r,o],l,a)=>"object"==typeof o?`${e}}${t}${r}{${n(o,`${t}${r}`)}`:`${e}${r}:${o};`),"");t.default=(e=.4,t="#00c19f",r="background-color",o="border",l="display",a="color",i="cursor",u="width",d="height",c="border-radius",s="position",f="max-width",p="z-index",_="justify-content",h="align-items",m="box-shadow",v=":hover",b="center",g="flex",w="transition",y="opacity",O="overflow")=>{return x={".__react-gt__":{dot:{[i]:"pointer",[l]:"contents",[r]:"inherit",[o]:"none"," div":{[u]:"10px",[d]:"10px",[r]:"inherit",[o]:"1px solid #757575",[c]:"50%","margin-right":"7px",[O]:"hidden"},":hover div":{[r]:"#757575"},"-selected":{" div":{[i]:"default",[r]:t,[o]:`1px solid ${t}`},":hover div":{[r]:t}}},"chevron-button":{[r]:"inherit",[o]:"none",[a]:"#757575",[i]:"pointer",":disabled":{[a]:"#e0e0e0",[i]:"default"},[v]:{[a]:"#212121"}},"page-selector":{[l]:g,[_]:"space-between"},"dot-wrapper":{[l]:g,[f]:"200px","flex-wrap":"wrap",[h]:b},"close-button":{[r]:"transparent",[o]:"none",[a]:"#757575",[i]:"pointer",[s]:"absolute",top:"12px",right:"15px",[v]:{[a]:"#212121"}},overlay:{[s]:"fixed",top:0,right:0,left:0,bottom:0,[p]:999996},"page-number":{[r]:t,[a]:"white",[m]:"rgb(0 0 0 / 30%) 0px 0.5em 3em",[u]:"40px",[d]:"40px",[c]:"50%",[l]:g,[h]:b,[_]:b,[s]:"absolute",left:"-10px",top:"-10px"},modal:{[w]:`transform ${e}s ease, height ${e}s ease, width ${e}s ease`,[f]:"330px","min-height":"48px",[s]:"fixed",[r]:"#fff",left:0,top:0,[c]:"8px",[p]:999999,[m]:"rgb(0 0 0 / 30%) 0px 0.5em 3em","-content":{[O]:"hidden",[d]:"100%"}},icon:{fill:"currentColor",[u]:"1em",[d]:"1em",[l]:"inline-block","font-size":"1.5rem",[w]:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","flex-shrink":0,"user-select":"none"},arrow:{[s]:"absolute",right:"-10px",top:"-10px",[u]:"40px",[d]:"40px",[c]:"50%",[r]:t,[l]:g,[_]:b,[h]:b,[a]:"white"},highlight:{left:0,right:0,[s]:"fixed",[c]:"8px",[m]:"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)",[w]:`transform ${e}s ease, height ${e}s ease, width ${e}s ease`,[p]:999997,[s]:"absolute"},"fade-in":{[w]:`${y} ${e}s ease`,[y]:0,"-init":{[y]:1}}}},Object.entries(x).reduce(((e,[t,r])=>{const o=n(r,t);return`${e}${t}{${o}${"}"!=o[o.length-1]?"}":""}`}),"");var x}},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},798:t=>{t.exports=e}},n={};return function e(r){var o=n[r];if(void 0!==o)return o.exports;var l=n[r]={exports:{}};return t[r].call(l.exports,l,l.exports,e),l.exports}(607)})()}));
//# sourceMappingURL=index.js.map