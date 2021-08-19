!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@utility-point/ReactGT",["React"],t):"object"==typeof exports?exports["@utility-point/ReactGT"]=t(require("react")):e["@utility-point/ReactGT"]=t(e.React)}(global,(function(e){return(()=>{"use strict";var t={737:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=o.default.memo((({close:e})=>o.default.createElement("button",{type:"button",onClick:e,className:"__react-gt__close-button"})))},486:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=l(n(798));t.default=i.default.memo((({children:e,style:t,className:n})=>{const[r,o]=i.useState(!0);return i.useEffect((()=>{setTimeout((()=>{o(!1)}),0)}),[]),i.default.createElement("div",{className:n,style:Object.assign(Object.assign({},t),{transition:(null==t?void 0:t.transition)?`${t.transition}, opacity 0.4s ease`:"opacity 0.4s ease",opacity:r?0:1})},e)}))},646:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(798),i=r(n(486)),a=({x:e,y:t,rotation:n,scrollToElement:r})=>{var i,a;const u=l.useRef(void 0),{height:d,width:c,top:s,left:f}=null!==(a=null===(i=u.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==a?a:{};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{onClick:e=>{r(),e.stopPropagation()},style:{cursor:"pointer",position:"fixed",zIndex:999998,height:d,width:c,top:s,left:f}}),o.default.createElement("svg",{width:"1000vw",height:"1000vh","background-color":"red",style:{left:0,right:0,position:"fixed",transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease",pointerEvents:"none"}},o.default.createElement("defs",null,o.default.createElement("mask",{id:"hole"},o.default.createElement("rect",{width:"100%",height:"100%",fill:"rgba(255, 255, 255, .8)"}),o.default.createElement("path",{ref:u,x:"50",transform:`rotate(${n} 50 50), translate(${t} ${e}), scale(5 5)`,"transform-origin":"4 4",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),o.default.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#hole)"})))};t.default=o.default.memo((({boundaries:{top:e,left:t,height:n,width:r},scrollToElement:l})=>o.default.createElement(i.default,{style:{zIndex:999997,position:"absolute"}},e<-n?o.default.createElement(a,{scrollToElement:l,x:-(t+r/2-60),y:0,rotation:90}):e>window.innerHeight-10?o.default.createElement(a,{scrollToElement:l,x:t+r/2-60,y:-(window.innerHeight-120),rotation:270}):t>window.innerWidth-10?o.default.createElement(a,{scrollToElement:l,x:-(e+n/2-60),y:-(window.innerWidth-120),rotation:180}):t<-r?o.default.createElement(a,{scrollToElement:l,x:e+n/2-60,y:0,rotation:0}):o.default.createElement("div",{style:{left:0,right:0,transform:`translate(${t-10}px, ${e-10}px)`,position:"fixed",width:`${r+20}px`,height:`${n+20}px`,borderRadius:"8px",boxShadow:"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)",transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease"}}))))},466:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Close=t.RightArrow=t.LeftArrow=void 0;const o=r(n(798)),l=({path:e})=>o.default.createElement("svg",{className:"__react-gt__icon"},o.default.createElement("path",{d:e}));t.LeftArrow=()=>o.default.createElement(l,{path:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),t.RightArrow=()=>o.default.createElement(l,{path:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),t.Close=()=>o.default.createElement(l,{path:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=({top:e,left:t,right:n,width:r,height:o,bottom:l},i)=>{const a={},{clientWidth:u,clientHeight:d}=document.documentElement,c=t-10,s=u-(r+t+10),f=e-10,p=d-l;a.width=u<350?u-20:330,a.height=i;const h=()=>{f>p?a.bottom=l+10:a.top=f},m=()=>{c>s?t+r<a.width+10?a.left=10:a.right=u-n-10:u-t<a.width+10?a.right=10:a.left=t-10};return c>s&&c>=a.width+20?(a.right=u-t+20,h()):s>=a.width+20?(a.left=t+r+20,h()):f>p&&f>i+20?(a.bottom=e-20,m()):p>i+20?(a.top=e+o+20,m()):(a.top=e+o/3,a.left=t+10+r/2-a.width/2),a.top<0&&(a.top=0),a.bottom>window.innerHeight&&(a.bottom=window.innerHeight-20),a.left<0&&(a.left=0),a.right>window.innerWidth&&(a.right=window.innerWidth-20),a}},284:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n(798)),u=i(n(737)),d=i(n(486)),c=i(n(479)),s=i(n(851)),f=i(n(774));t.default=a.default.memo((({boundaries:e,stepIndex:t,changeStep:n,allSteps:r,close:o,renderedContent:l})=>{const i=a.useRef(void 0),p=a.useMemo((()=>a.default.createElement("div",{ref:i},l,a.default.createElement(f.default,{stepIndex:t,changeStep:n,allSteps:r}))),[r,n,l,t]),h=a.useMemo((()=>{var t,n;return c.default(e,(null!==(n=null===(t=null==i?void 0:i.current)||void 0===t?void 0:t.clientHeight)&&void 0!==n?n:0)+48)}),[e]);return a.default.createElement(d.default,{className:"__react-gt__modal",style:{transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease",transform:`translate(${h.right?`calc(${document.body.clientWidth-h.right}px - 100%)`:`${h.left}px`}, ${h.bottom?`calc(${h.bottom}px - 100%)`:`${h.top}px`})`,width:`${h.width}px`,height:`${h.height}px`}},a.default.createElement("div",{className:"__react-gt__modal-content",style:{padding:`24px ${h.width/11}px`}},a.default.createElement(s.default,{selectedIndex:t}),a.default.createElement(u.default,{close:o}),p))}))},851:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798));t.default=o.default.memo((({selectedIndex:e})=>o.default.createElement("div",{className:"__react-gt__page-number"},e+1)))},157:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n(798)),u=i(n(425)),d=i(n(299));t.default=a.default.memo((({open:e,onClose:t,steps:n,openAt:r=0})=>{const[o,l]=a.useState(r),i=a.useMemo((()=>n.map(((e,t)=>t))),[n]),c=a.useCallback((e=>{e.stopPropagation(),t(),l(r)}),[t,r]);return e?a.default.createElement(a.default.Fragment,null,a.default.createElement("style",null,d.default),a.default.createElement("div",{className:"__react-gt__overlay",onClick:c}),a.default.createElement(u.default,Object.assign({},n[o],{stepIndex:o,changeStep:e=>l(e),allSteps:i,close:c}))):null}))},425:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(n(798)),d=a(n(646)),c=a(n(284)),s=n(798),f={behavior:"smooth",block:"center"},p=u.default.memo((({element:e,stepIndex:t,changeStep:n,allSteps:r,close:o,renderedContent:l})=>{const[i,a]=u.useState((()=>e.getBoundingClientRect())),p=s.useCallback((()=>a(e.getBoundingClientRect())),[e]),h=s.useCallback((()=>{e.scrollIntoView(f),p()}),[e]),m=s.useCallback((e=>{"ArrowLeft"===e.code&&0!==t?n(t-1):"ArrowRight"===e.code&&t!==r.length-1&&n(t+1)}),[t,n,r]);return u.useEffect((()=>{h(),window.addEventListener("resize",p),window.addEventListener("scroll",p),window.addEventListener("keydown",m);const e=setInterval((()=>window.dispatchEvent(new Event("resize"))),250),t=setTimeout((()=>clearInterval(e)),3e3);return()=>{clearInterval(e),clearTimeout(t),window.removeEventListener("resize",p),window.removeEventListener("scroll",p),window.removeEventListener("keydown",m)}}),[e]),u.default.createElement(u.default.Fragment,null,u.default.createElement(d.default,{scrollToElement:h,boundaries:i}),u.default.createElement(c.default,{boundaries:i,renderedContent:l,stepIndex:t,changeStep:n,allSteps:r,close:o}))}));t.default=u.default.memo((e=>{var{selector:t,content:n,stepIndex:r}=e,o=i(e,["selector","content","stepIndex"]);const[l,a]=u.useState(0),d=u.default.createElement(n,{step:r}),c=u.useMemo((()=>{return e=t,document.querySelector(e);var e}),[t,l]);return null==c&&l<25&&setTimeout((()=>a(l+1)),100),l>0&&a(0),u.default.createElement(p,Object.assign({},Object.assign(Object.assign({},o),{element:null!=c?c:document.body,renderedContent:d,stepIndex:r})))}))},607:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(157);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(i).default}}),o(n(699),t)},774:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(798)),l=n(466),i=({selected:e,onClick:t})=>o.default.createElement("button",{type:"button",className:e?"_react-gt__dot _react-gt__dot-selected":"__react-gt__dot",onClick:t},o.default.createElement("div",null)),a=({direction:e,disabled:t,onClick:n})=>o.default.createElement("button",{type:"button",className:"__react-gt__chevron-button",disabled:t,onClick:n},-1===e?o.default.createElement(l.LeftArrow,null):o.default.createElement(l.RightArrow,null));t.default=o.default.memo((({stepIndex:e,changeStep:t,allSteps:n})=>o.default.createElement("div",{className:"__react-gt__page-selector"},o.default.createElement(a,{direction:-1,disabled:n[0]===e,onClick:()=>t(e-1)}),o.default.createElement("div",{className:"__react-gt__dot-wrapper"},n.map(((n,r)=>o.default.createElement(i,{key:n,onClick:()=>t(r),selected:r===e})))),o.default.createElement(a,{direction:1,disabled:n[n.length-1]===e,onClick:()=>t(e+1)}))))},299:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=(e,t)=>Object.entries(e).reduce(((e,[r,o],l,i)=>"object"==typeof o?`${e}}${t}${r}{${n(o,`${t}${r}`)}`:`${e}${r}:${o};`),"");t.default=((e="#00c19f",t="background-color",r="border",o="display",l="color",i="cursor",a="width",u="height",d="border-radius",c="position")=>{return s={".__react-gt__":{dot:{[i]:"pointer",[o]:"contents",[t]:"inherit",[r]:"none"," div":{[a]:"10px",[u]:"10px",[t]:"inherit",[r]:"1px solid #757575",[d]:"50%","margin-right":"7px",overflow:"hidden"},":hover div":{[t]:"#757575"},"-selected":{" div":{[i]:"default",[t]:e,[r]:`1px solid ${e}`},":hover div":{[t]:e}}},"chevron-button":{[t]:"inherit",[r]:"none",[l]:"#757575",[i]:"pointer",":disabled":{[l]:"#e0e0e0",[i]:"default"},":hover":{[l]:"#212121"}},"page-selector":{[o]:"flex","justify-content":"space-between"},"dot-wrapper":{[o]:"flex","max-width":"200px","flex-wrap":"wrap","align-items":"center"},"close-button":{[t]:"transparent",[r]:"none",[l]:"#757575",[i]:"pointer",[c]:"absolute",top:"12px",right:"15px",":hover":{[l]:"#212121"}},overlay:{[c]:"fixed",top:0,right:0,left:0,bottom:0,"z-index":999996},"page-number":{[t]:e,[l]:"white","box-shadow":"rgb(0 0 0 / 30%) 0px 0.5em 3em",[a]:"40px",[u]:"40px",[d]:"50%",[o]:"flex","align-items":"center","justify-content":"center",[c]:"absolute",left:"-10px",top:"-10px"},modal:{"max-width":"330px","min-height":"48px",[c]:"fixed",[t]:"#fff",left:0,top:0,[d]:"8px","z-index":999999,"box-shadow":"rgb(0 0 0 / 30%) 0px 0.5em 3em","-content":{overflow:"hidden",[u]:"100%"}},icon:{fill:"currentColor",[a]:"1em",[u]:"1em",display:"inline-block","font-size":"1.5rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","flex-shrink":0,"user-select":"none"}}},Object.entries(s).reduce(((e,[t,r])=>{const o=n(r,t);return`${e}${t}{${o}${"}"!=o[o.length-1]?"}":""}`}),"");var s})()},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},798:t=>{t.exports=e}},n={};return function e(r){var o=n[r];if(void 0!==o)return o.exports;var l=n[r]={exports:{}};return t[r].call(l.exports,l,l.exports,e),l.exports}(607)})()}));
//# sourceMappingURL=index.js.map