!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@utility-point/ReactGT",["React"],t):"object"==typeof exports?exports["@utility-point/ReactGT"]=t(require("react")):e["@utility-point/ReactGT"]=t(e.React)}(global,(function(e){return(()=>{"use strict";var t={90:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466);t.default=({direction:e})=>e?o.default.createElement("div",{className:"__react-gt__arrow"},(()=>{switch(e){case"up":return o.default.createElement(l.UpArrow,null);case"down":return o.default.createElement(l.DownArrow,null);case"right":return o.default.createElement(l.RightArrow,null);case"left":return o.default.createElement(l.LeftArrow,null);default:return null}})()):null},54:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466);t.default=({direction:e,disabled:t,onClick:n})=>o.default.createElement("button",{type:"button",className:"__react-gt__chevron-button",disabled:t,onClick:n},-1===e?o.default.createElement(l.LeftArrow,null):o.default.createElement(l.RightArrow,null))},737:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466);t.default=o.default.memo((({close:e})=>o.default.createElement("button",{type:"button",onClick:t=>{t.stopPropagation(),e()},className:"__react-gt__close-button"},o.default.createElement(l.Close,null))))},801:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=o.default.memo((({currentStep:e})=>o.default.createElement("div",{className:"__react-gt__page-number"},e+1)))},589:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=({arrow:e,currentStepLabel:t,closeButton:n,content:r,previousStepButton:l,stepButtonWrapper:a,nextStepButton:u})=>o.default.createElement("div",{className:"__react-gt__modal"},o.default.createElement("div",{className:"__react-gt__modal-content"},e,t,n,r,o.default.createElement("div",{className:"__react-gt__page-selector"},l,a,u)))},486:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n(798));t.default=a.default.memo((({children:e})=>{const[t,n]=a.useState(!0);return a.useEffect((()=>{setTimeout((()=>{n(!1)}),0)}),[]),a.default.createElement("div",{className:"__react-gt__fade-in "+(t?"":"__react-gt__fade-in-init")},e)}))},646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(486));t.default=o.default.memo((()=>o.default.createElement(l.default,null,o.default.createElement("div",{className:"__react-gt__highlight"}))))},466:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DownArrow=t.UpArrow=t.Close=t.RightArrow=t.LeftArrow=void 0;const o=r(n(798)),l=({path:e})=>o.default.createElement("svg",{className:"__react-gt__icon"},o.default.createElement("path",{d:e}));t.LeftArrow=()=>o.default.createElement(l,{path:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),t.RightArrow=()=>o.default.createElement(l,{path:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),t.Close=()=>o.default.createElement(l,{path:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),t.UpArrow=()=>o.default.createElement(l,{path:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),t.DownArrow=()=>o.default.createElement(l,{path:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=({top:e,left:t,right:n,width:r,height:o,bottom:l},a)=>{const u={},{clientWidth:i,clientHeight:c}=document.documentElement,d=t-10,s=i-(r+t+10),f=e-10,p=c-l;u.width=i<350?i-20:330,u.height=a;const _=()=>{f>p?u.bottom=l+10:u.top=f},h=()=>{d>s?t+r<u.width+10?u.left=10:u.right=i-n-10:i-t<u.width+10?u.right=10:u.left=t-10};return d>s&&d>=u.width+20?(u.right=i-t+20,_()):s>=u.width+20?(u.left=t+r+20,_()):f>p&&f>a?(u.bottom=e-20,h()):p>a?(u.top=e+o+20,h()):(u.top=e+o/3,u.left=t+10+r/2-u.width/2),u.top<10&&(u.top=10),u.bottom>window.innerHeight&&(u.bottom=window.innerHeight-30),u.left<10&&(u.left=10),u.right>window.innerWidth&&(u.right=window.innerWidth-30),u}},19:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=({top:e,left:t,height:n,width:r})=>e<-n?"up":e>window.innerHeight-10?"down":t>window.innerWidth-10?"right":t<-r?"left":null},284:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(798)),i=a(n(486));t.default=u.default.memo((({arrowDirection:e,stepIndex:t,changeStep:n,allSteps:r,close:o,renderedContent:l,scrollToElement:a,arrow:c,closeButton:d,currentStepLabel:s,dialogWrapper:f,nextStepButton:p,previousStepButton:_,stepButtonWrapper:h,stepButton:m})=>{const b=u.useMemo((()=>u.default.createElement(c,{direction:e})),[c,e]),g=u.useMemo((()=>u.default.createElement(s,{currentStep:t,totalSteps:r.length})),[s,t,r.length]),v=u.useMemo((()=>u.default.createElement(p,{currentStep:t,goNext:()=>n(t+1),skipTo:n,totalSteps:r.length})),[t,n,r.length,p]),w=u.useMemo((()=>u.default.createElement(_,{currentStep:t,goBack:()=>n(t-1),skipTo:n,totalSteps:r.length})),[t,n,r.length,_]),y=u.useMemo((()=>u.default.createElement(h,{stepButtons:r.map(((e,r)=>u.default.createElement(m,{key:e,currentStep:t,step:r,goToStep:()=>n(r)}))),currentStep:t,totalSteps:r.length,goNext:()=>n(t+1),goBack:()=>n(t-1),skipTo:n})),[r,t,n,m,h]),x=u.useMemo((()=>u.default.createElement(d,{close:o})),[o,d]);return u.default.createElement(i.default,null,u.default.createElement("div",{className:"__react-gt__modal-position"},u.default.createElement("div",{id:"__react-gt__modal-container",onClick:b?a:void 0},u.default.createElement(f,Object.assign({},{allSteps:r,arrow:b,changeStep:n,closeButton:x,content:l,currentStepLabel:g,nextStepButton:v,previousStepButton:w,stepButtonWrapper:y,stepIndex:t})))))}))},654:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(54));t.default=({currentStep:e,totalSteps:t,goNext:n})=>o.default.createElement(l.default,{direction:1,disabled:e===t-1,onClick:n})},503:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=r(n(54));t.default=({currentStep:e,goBack:t})=>o.default.createElement(l.default,{direction:-1,disabled:0===e,onClick:t})},157:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(798)),i=a(n(90)),c=a(n(737)),d=a(n(801)),s=a(n(589)),f=a(n(654)),p=a(n(503)),_=a(n(425)),h=a(n(529)),m=a(n(887)),b=a(n(299));t.default=u.default.memo((({open:e,onClose:t,steps:n,openAt:r=0,scrollIntoViewOptions:o={behavior:"smooth",block:"center"},closeButton:l=c.default,currentStepLabel:a=d.default,nextStepButton:g=f.default,previousStepButton:v=p.default,stepButton:w=h.default,stepButtonWrapper:y=m.default,arrow:x=i.default,dialogWrapper:O=s.default})=>{const[S,j]=u.useState(r),E=u.useMemo((()=>n.map(((e,t)=>t))),[n]),M=u.useCallback((()=>{t(),j(r)}),[t,r]);return e?u.default.createElement("div",{className:"__react-gt__"},u.default.createElement("style",null,b.default()),u.default.createElement("div",{className:"__react-gt__overlay",onClick:M}),u.default.createElement(_.default,Object.assign({},n[S],{content:n[S].content,selector:n[S].selector,stepInteraction:n[S].stepInteraction,stepIndex:S,changeStep:e=>j(e),allSteps:E,close:M,scrollIntoViewOptions:o,closeButton:l,currentStepLabel:a,nextStepButton:g,previousStepButton:v,stepButton:w,stepButtonWrapper:y,arrow:x,dialogWrapper:O}))):null}))},425:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=l(n(798)),c=n(798),d=u(n(646)),s=u(n(284)),f=n(299),p=u(n(479)),_=u(n(19)),h=e=>document.querySelector(e),m=i.default.memo((({boundaries:e})=>{var t;const n=h("#__react-gt__modal-container"),r=p.default(e,null!==(t=null==n?void 0:n.clientHeight)&&void 0!==t?t:0);return i.default.createElement("style",null,f.styleObjectToStyleString({".__react-gt__":{modal:{"-position":{transform:`translate(${r.right?`calc(${document.body.clientWidth-r.right}px - 100%)`:`${r.left}px`}, ${r.bottom?`calc(${r.bottom}px - 100%)`:`${r.top}px`})`,width:`${r.width}px`,height:`${r.height}px`},"-content":{padding:`24px ${r.width/11}px`}},highlight:{transform:`translate(${e.left-10}px, ${e.top-10}px)`,height:`${e.height+20}px`,width:`${e.width+20}px`}}}))})),b=i.default.memo((({element:e,stepIndex:t,changeStep:n,allSteps:r,close:o,renderedContent:l,scrollIntoViewOptions:a,closeButton:u,currentStepLabel:f,nextStepButton:p,previousStepButton:h,stepButton:b,stepButtonWrapper:g,arrow:v,dialogWrapper:w})=>{const[y,x]=i.useState((()=>e.getBoundingClientRect())),O=c.useCallback((()=>x(e.getBoundingClientRect())),[e]),S=c.useCallback((()=>{e.scrollIntoView(a),O()}),[O,e,a]),j=c.useCallback((e=>{"ArrowLeft"===e.code&&0!==t?n(t-1):"ArrowRight"===e.code&&t!==r.length-1&&n(t+1)}),[t,n,r]);i.useEffect((()=>{S(),window.addEventListener("resize",O),window.addEventListener("scroll",O),window.addEventListener("keydown",j);const e=setInterval((()=>window.dispatchEvent(new Event("resize"))),250),t=setTimeout((()=>clearInterval(e)),3e3);return()=>{clearInterval(e),clearTimeout(t),window.removeEventListener("resize",O),window.removeEventListener("scroll",O),window.removeEventListener("keydown",j)}}),[O,e,j,S]);const E=i.useMemo((()=>_.default(y)),[y]);return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{boundaries:y}),i.default.createElement(d.default,null),i.default.createElement(s.default,Object.assign({scrollToElement:S,arrowDirection:E,renderedContent:l,stepIndex:t,changeStep:n,allSteps:r,close:o},{closeButton:u,currentStepLabel:f,nextStepButton:p,previousStepButton:h,stepButton:b,stepButtonWrapper:g,arrow:v,dialogWrapper:w})))}));t.default=i.default.memo((e=>{var{selector:t,content:n,stepIndex:r}=e,o=a(e,["selector","content","stepIndex"]);const[l,u]=i.useState(0),c=i.default.createElement(n,{step:r}),d=i.useMemo((()=>h(t)),[t,l]);return null==d&&l<25&&setTimeout((()=>u(l+1)),100),l>0&&u(0),i.default.createElement(b,Object.assign({},Object.assign(Object.assign({},o),{element:null!=d?d:document.body,renderedContent:c,stepIndex:r})))}))},529:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=({currentStep:e,step:t,goToStep:n})=>o.default.createElement("button",{type:"button",className:e===t?"__react-gt__dot __react-gt__dot-selected":"__react-gt__dot",onClick:n},o.default.createElement("div",null))},887:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=({stepButtons:e})=>o.default.createElement("div",{className:"__react-gt__dot-wrapper"},e)},607:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(157);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(a).default}}),o(n(699),t)},299:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.styleObjectToStyleString=void 0;const n=(e,t)=>Object.entries(e).reduce(((e,[r,o])=>"object"==typeof o?`${e}}${t}${r}{${n(o,`${t}${r}`)}`:`${e}${r}:${o};`),"");t.styleObjectToStyleString=e=>Object.entries(e).reduce(((e,[t,r])=>{const o=n(r,t);return`${e}${t}{${o}${"}"!=o[o.length-1]?"}":""}`}),""),t.default=(e=.4,n="#00c19f",r="background-color",o="border",l="display",a="color",u="cursor",i="width",c="height",d="border-radius",s="position",f="max-width",p="z-index",_="justify-content",h="align-items",m="box-shadow",b=":hover",g="center",v="flex",w="transition",y="opacity",x="overflow")=>t.styleObjectToStyleString({".__react-gt__":{[p]:999995,position:"fixed",left:0,top:0,dot:{[u]:"pointer",[l]:"contents",[r]:"inherit",[o]:"none"," div":{[i]:"10px",[c]:"10px",[r]:"inherit",[o]:"1px solid #757575",[d]:"50%","margin-right":"7px",[x]:"hidden"},":hover div":{[r]:"#757575"},"-selected":{" div":{[u]:"default",[r]:n,[o]:`1px solid ${n}`},":hover div":{[r]:n}}},"chevron-button":{[r]:"inherit",[o]:"none",[a]:"#757575",[u]:"pointer",":disabled":{[a]:"#e0e0e0",[u]:"default"},":enabled:hover":{[a]:"#212121"}},"page-selector":{[l]:v,[_]:"space-between"},"dot-wrapper":{[l]:v,[f]:"200px","flex-wrap":"wrap",[h]:g},"close-button":{[r]:"transparent",[o]:"none",[a]:"#757575",[u]:"pointer",[s]:"absolute",top:"12px",right:"15px",[b]:{[a]:"#212121"}},overlay:{[s]:"fixed",top:0,right:0,left:0,bottom:0,[p]:999996},"page-number":{[r]:n,[a]:"white",[m]:"rgb(0 0 0 / 30%) 0px 0.5em 3em",[i]:"40px",[c]:"40px",[d]:"50%",[l]:v,[h]:g,[_]:g,[s]:"absolute",left:"-10px",top:"-10px"},modal:{[r]:"#fff",[d]:"8px",[m]:"rgb(0 0 0 / 30%) 0px 0.5em 3em","-position":{[w]:`transform ${e}s ease, height ${e}s ease, width ${e}s ease`,left:0,top:0,[s]:"fixed",[f]:"330px","min-height":"48px",[p]:999999},"-content":{[x]:"hidden",[c]:"100%"}},icon:{fill:"currentColor",[i]:"1em",[c]:"1em",[l]:"inline-block","font-size":"1.5rem",[w]:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","flex-shrink":0,"user-select":"none"},arrow:{[s]:"absolute",right:"-10px",top:"-10px",[i]:"40px",[c]:"40px",[d]:"50%",[r]:n,[l]:v,[_]:g,[h]:g,[a]:"white",[u]:"pointer"},highlight:{left:0,right:0,[s]:"fixed",[d]:"8px",[m]:"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)",[w]:`transform ${e}s ease, height ${e}s ease, width ${e}s ease`,[p]:999997},"fade-in":{[w]:`${y} ${e}s ease`,[y]:0,[p]:999997,"-init":{[y]:1}}}})},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},798:t=>{t.exports=e}},n={};return function e(r){var o=n[r];if(void 0!==o)return o.exports;var l=n[r]={exports:{}};return t[r].call(l.exports,l,l.exports,e),l.exports}(607)})()}));
//# sourceMappingURL=index.js.map