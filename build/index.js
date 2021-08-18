!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@utility-point/ReactGT",["React"],t):"object"==typeof exports?exports["@utility-point/ReactGT"]=t(require("react")):e["@utility-point/ReactGT"]=t(e.React)}(global,(function(e){return(()=>{"use strict";var t={737:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(798)),r=o(n(821)),i=n(466);t.default=l.default.memo((({close:e})=>l.default.createElement("button",{type:"button",onClick:e,style:{backgroundColor:"transparent",border:"none",color:"#757575",cursor:"pointer",position:"absolute",top:"12px",right:"15px"}},l.default.createElement(r.default,{style:{color:"#212121"}},l.default.createElement(i.Close,null)))))},486:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(798));t.default=i.default.memo((({children:e,style:t})=>{const[n,o]=i.useState(!0);return i.useEffect((()=>{setTimeout((()=>{o(!1)}),0)}),[]),i.default.createElement("div",{style:Object.assign(Object.assign({},t),{transition:(null==t?void 0:t.transition)?`${t.transition}, opacity 0.4s ease`:"opacity 0.4s ease",opacity:n?0:1})},e)}))},646:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(798)),r=n(798),i=o(n(486)),a=({x:e,y:t,rotation:n,scrollToElement:o})=>{var i,a;const d=r.useRef(void 0),{height:u,width:s,top:c,left:f}=null!==(a=null===(i=d.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==a?a:{};return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{onClick:e=>{o(),e.stopPropagation()},style:{cursor:"pointer",position:"fixed",zIndex:999998,height:u,width:s,top:c,left:f}}),l.default.createElement("svg",{width:"1000vw",height:"1000vh","background-color":"red",style:{left:0,right:0,position:"fixed",transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease",pointerEvents:"none"}},l.default.createElement("defs",null,l.default.createElement("mask",{id:"hole"},l.default.createElement("rect",{width:"100%",height:"100%",fill:"rgba(255, 255, 255, .8)"}),l.default.createElement("path",{ref:d,x:"50",transform:`rotate(${n} 50 50), translate(${t} ${e}), scale(5 5)`,"transform-origin":"4 4",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))),l.default.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#hole)"})))};t.default=l.default.memo((({boundaries:{top:e,left:t,height:n,width:o},scrollToElement:r})=>l.default.createElement(i.default,{style:{zIndex:999997,position:"absolute"}},e<-n?l.default.createElement(a,{scrollToElement:r,x:-(t+o/2-60),y:0,rotation:90}):e>window.innerHeight-10?l.default.createElement(a,{scrollToElement:r,x:t+o/2-60,y:-(window.innerHeight-120),rotation:270}):t>window.innerWidth-10?l.default.createElement(a,{scrollToElement:r,x:-(e+n/2-60),y:-(window.innerWidth-120),rotation:180}):t<-o?l.default.createElement(a,{scrollToElement:r,x:e+n/2-60,y:0,rotation:0}):l.default.createElement("div",{style:{left:0,right:0,transform:`translate(${t-10}px, ${e-10}px)`,position:"fixed",width:`${o+20}px`,height:`${n+20}px`,borderRadius:"8px",boxShadow:"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .8)",transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease"}}))))},821:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(798)),r=n(798);t.default=l.default.memo((({style:e,children:t})=>{const[n,o]=r.useState(!1);return l.default.createElement("div",{style:n?e:void 0,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)},t)}))},466:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Close=t.RightArrow=t.LeftArrow=void 0;const l=o(n(798)),r={fill:"currentColor",width:"1em",height:"1em",display:"inline-block",fontSize:"1.5rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",flexShrink:0,userSelect:"none"},i=({path:e})=>l.default.createElement("svg",{style:r},l.default.createElement("path",{d:e}));t.LeftArrow=()=>l.default.createElement(i,{path:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),t.RightArrow=()=>l.default.createElement(i,{path:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),t.Close=()=>l.default.createElement(i,{path:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=({top:e,left:t,right:n,width:o,height:l,bottom:r},i)=>{const a={},{clientWidth:d,clientHeight:u}=document.documentElement,s=t-10,c=d-(o+t+10),f=e-10,p=u-r;a.width=d<350?d-20:330,a.height=i;const h=()=>{f>p?a.bottom=r+10:a.top=f},m=()=>{s>c?t+o<a.width+10?a.left=10:a.right=d-n-10:d-t<a.width+10?a.right=10:a.left=t-10};return s>c&&s>=a.width+20?(a.right=d-t+20,h()):c>=a.width+20?(a.left=t+o+20,h()):f>p&&f>i+20?(a.bottom=e-20,m()):p>i+20?(a.top=e+l+20,m()):(a.top=e+l/3,a.left=t+10+o/2-a.width/2),a.top<0&&(a.top=0),a.bottom>window.innerHeight&&(a.bottom=window.innerHeight-20),a.left<0&&(a.left=0),a.right>window.innerWidth&&(a.right=window.innerWidth-20),a}},284:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(798)),d=i(n(737)),u=i(n(486)),s=i(n(479)),c=i(n(851)),f=i(n(774));t.default=a.default.memo((({boundaries:e,stepIndex:t,changeStep:n,allSteps:o,close:l,renderedContent:r})=>{const i=a.useRef(void 0),p=a.useMemo((()=>a.default.createElement("div",{ref:i},r,a.default.createElement(f.default,{stepIndex:t,changeStep:n,allSteps:o}))),[o,n,r,t]),h=a.useMemo((()=>{var t,n;return s.default(e,(null!==(n=null===(t=null==i?void 0:i.current)||void 0===t?void 0:t.clientHeight)&&void 0!==n?n:0)+48)}),[e]);return a.default.createElement(u.default,{style:{transition:"transform 0.4s ease, height 0.4s ease, width 0.4s ease",transform:`translate(${h.right?`calc(${document.body.clientWidth-h.right}px - 100%)`:`${h.left}px`}, ${h.bottom?`calc(${h.bottom}px - 100%)`:`${h.top}px`})`,width:`${h.width}px`,height:`${h.height}px`,maxWidth:"330px",minHeight:"48px",position:"fixed",backgroundColor:"#fff",left:0,top:0,borderRadius:"8px",zIndex:999999,boxShadow:"rgb(0 0 0 / 30%) 0px 0.5em 3em"}},a.default.createElement("div",{style:{overflow:"hidden",height:"100%",padding:`24px ${h.width/11}px`}},a.default.createElement(c.default,{selectedIndex:t}),a.default.createElement(d.default,{close:l}),p))}))},851:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(798));t.default=l.default.memo((({selectedIndex:e})=>l.default.createElement("div",{style:{backgroundColor:"#00c19f",color:"white",boxShadow:"rgb(0 0 0 / 30%) 0px 0.5em 3em",width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:"-10px",top:"-10px"}},e+1)))},157:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(798)),d=i(n(425)),u=i(n(299));t.default=a.default.memo((({open:e,onClose:t,steps:n,openAt:o=0})=>{const[l,r]=a.useState(o),i=a.useMemo((()=>n.map(((e,t)=>t))),[n]),s=a.useCallback((e=>{e.stopPropagation(),t(),r(o)}),[t,o]);return e?a.default.createElement(a.default.Fragment,null,a.default.createElement("style",null,u.default),a.default.createElement("div",{style:{position:"fixed",top:0,right:0,left:0,bottom:0,zIndex:999996},onClick:s}),a.default.createElement(d.default,Object.assign({},n[l],{stepIndex:l,changeStep:e=>r(e),allSteps:i,close:s}))):null}))},425:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return l(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=r(n(798)),u=a(n(646)),s=a(n(284)),c=n(798),f={behavior:"smooth",block:"center"},p=d.default.memo((({element:e,stepIndex:t,changeStep:n,allSteps:o,close:l,renderedContent:r})=>{const[i,a]=d.useState((()=>e.getBoundingClientRect())),p=c.useCallback((()=>a(e.getBoundingClientRect())),[e]),h=c.useCallback((()=>{e.scrollIntoView(f),p()}),[e]),m=c.useCallback((e=>{"ArrowLeft"===e.code&&0!==t?n(t-1):"ArrowRight"===e.code&&t!==o.length-1&&n(t+1)}),[t,n,o]);return d.useEffect((()=>{h(),window.addEventListener("resize",p),window.addEventListener("scroll",p),window.addEventListener("keydown",m);const e=setInterval((()=>window.dispatchEvent(new Event("resize"))),250),t=setTimeout((()=>clearInterval(e)),3e3);return()=>{clearInterval(e),clearTimeout(t),window.removeEventListener("resize",p),window.removeEventListener("scroll",p),window.removeEventListener("keydown",m)}}),[e]),d.default.createElement(d.default.Fragment,null,d.default.createElement(u.default,{scrollToElement:h,boundaries:i}),d.default.createElement(s.default,{boundaries:i,renderedContent:r,stepIndex:t,changeStep:n,allSteps:o,close:l}))}));t.default=d.default.memo((e=>{var{selector:t,content:n,stepIndex:o}=e,l=i(e,["selector","content","stepIndex"]);const[r,a]=d.useState(0),u=d.default.createElement(n,{step:o}),s=d.useMemo((()=>{return e=t,document.querySelector(e);var e}),[t,r]);return null==s&&r<25&&setTimeout((()=>a(r+1)),100),r>0&&a(0),d.default.createElement(p,Object.assign({},Object.assign(Object.assign({},l),{element:null!=s?s:document.body,renderedContent:u,stepIndex:o})))}))},607:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),l=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(157);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(i).default}}),l(n(699),t)},774:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(798)),r=o(n(821)),i=n(466),a=n(299),d=({selected:e,onClick:t})=>l.default.createElement("button",{type:"button",className:e?`${a.dotclass} ${a.selectedDotClass}`:a.dotclass,onClick:t},l.default.createElement("div",null)),u=({direction:e,disabled:t,onClick:n})=>l.default.createElement("button",{type:"button",style:{backgroundColor:"inherit",border:"none",color:t?"#e0e0e0":"#757575",cursor:t?"default":"pointer"},disabled:t,onClick:n},l.default.createElement(r.default,{style:t?void 0:{color:"#212121"}},-1===e?l.default.createElement(i.LeftArrow,null):l.default.createElement(i.RightArrow,null)));t.default=l.default.memo((({stepIndex:e,changeStep:t,allSteps:n})=>l.default.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.default.createElement(u,{direction:-1,disabled:n[0]===e,onClick:()=>t(e-1)}),l.default.createElement("div",{style:{display:"flex",maxWidth:"200px",flexWrap:"wrap",alignItems:"center"}},n.map(((n,o)=>l.default.createElement(d,{key:n,onClick:()=>t(o),selected:o===e})))),l.default.createElement(u,{direction:1,disabled:n[n.length-1]===e,onClick:()=>t(e+1)}))))},299:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.selectedDotClass=t.dotclass=t.reactGTSelector=void 0,t.reactGTSelector="__react-gt__dot",t.dotclass=`.${t.reactGTSelector}dot`,t.selectedDotClass=`${t.dotclass}-selected`;const n=`\n${t.dotclass} {\n    cursor: pointer;\n    display: contents;\n    background-color: inherit;\n    border: none;\n}\n${t.dotclass} div {\n    width: 10px;\n    height: 10px;\n    background-color: inherit;\n    border: 1px solid #757575;\n    border-radius: 50%;\n    margin-right: 7px;\n    overflow: hidden;\n}\n${t.dotclass}:hover div{\n    background-color: #757575;\n}\n${t.selectedDotClass} div{\n    cursor: default;\n    background-color: #00c19f;\n    border: 1px solid #00c19f;\n}\n${t.selectedDotClass}:hover div{\n    background-color: #00c19f;\n}\n`;t.default=n},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},798:t=>{t.exports=e}},n={};return function e(o){var l=n[o];if(void 0!==l)return l.exports;var r=n[o]={exports:{}};return t[o].call(r.exports,r,r.exports,e),r.exports}(607)})()}));
//# sourceMappingURL=index.js.map