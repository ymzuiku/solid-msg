var x=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var z=Object.prototype.hasOwnProperty;var E=e=>x(e,"__esModule",{value:!0});var F=(e,o)=>{for(var t in o)x(e,t,{get:o[t],enumerable:!0})},q=(e,o,t,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of T(o))!z.call(e,i)&&(t||i!=="default")&&x(e,i,{get:()=>o[i],enumerable:!(s=B(o,i))||s.enumerable});return e};var A=(e=>(o,t)=>e&&e.get(o)||(t=q(E({}),o,1),e&&e.set(o,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var Y={};F(Y,{Message:()=>I,solidMsg:()=>X});var p=require("solid-js/web"),C=require("solid-js/web"),v=require("solid-js/web"),b=require("solid-js/web"),M=require("solid-js/web"),h=require("solid-js/web"),c=require("solid-js/web"),$=require("solid-js/web"),a=require("solid-js"),j=require("solid-js/store"),L=require("solid-js/web");var y=`:root {
  --solid-msg-red-ft: #fff;
  --solid-msg-red-bg: #f43f5e;
  --solid-msg-red-deep: #b71933;
  --solid-msg-blue-ft: #fff;
  --solid-msg-blue-bg: #6366f1;
  --solid-msg-blue-deep: #282bda;
  --solid-msg-green-ft: #fff;
  --solid-msg-green-bg: #10b981;
  --solid-msg-green-deep: #096b4a;
  --solid-msg-light-ft: #333;
  --solid-msg-light-bg: #fff;
  --solid-msg-light-deep: rgb(129, 129, 129);
  --solid-msg-dark-ft: #fff;
  --solid-msg-dark-bg: #000;
  --solid-msg-dark-deep: rgb(103, 103, 103);
  --solid-msg-radius: 8px;
  --solid-msg-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.solid-msg {
  transform-origin: center;
  position: relative;
  transition: all 300ms ease-out;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  margin: 6px;
  box-shadow: var(--solid-msg-shadow);
  border-radius: var(--solid-msg-radius);
}
.solid-msg.removing {
  transform: scaleY(0);
  opacity: 0;
  margin: 0px;
}
.solid-msg.appending {
  transform: translate(0px, 40px);
}
@media (min-width: 640px) {
  .solid-msg {
    cursor: pointer;
  }
}
.solid-msg.red {
  background-color: var(--solid-msg-red-bg);
  color: var(--solid-msg-red-ft);
}
.solid-msg.blue {
  background-color: var(--solid-msg-blue-bg);
  color: var(--solid-msg-blue-ft);
}
.solid-msg.green {
  background-color: var(--solid-msg-green-bg);
  color: var(--solid-msg-green-ft);
}

.solid-msg.dark {
  background-color: var(--solid-msg-dark-bg);
  color: var(--solid-msg-dark-ft);
}

.solid-msg.light {
  background-color: var(--solid-msg-light-bg);
  color: var(--solid-msg-light-ft);
}

.solid-msg-box {
  position: fixed;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-out;
}

.solid-msg-box.top {
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0px);
}
.solid-msg-box.top-right {
  top: 40px;
  right: 40px;
}
.solid-msg-box.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.solid-msg-box.bottom {
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0px);
}

.solid-msg-progrecss {
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  border-radius: 4px;
  height: 3px;
  transition: transform 500ms linear;
}

.solid-msg-progrecss.red {
  background-color: var(--solid-msg-red-deep);
}

.solid-msg-progrecss.green {
  background-color: var(--solid-msg-green-deep);
}
.solid-msg-progrecss.blue {
  background-color: var(--solid-msg-blue-deep);
}

.solid-msg-progrecss.light {
  background-color: var(--solid-msg-light-deep);
}

.solid-msg-progrecss.dark {
  background-color: var(--solid-msg-dark-deep);
}

/* class={\`font-normal font-sans text-center flex-1 break-words whitespace-normal overflow-hidden\`} */
.solid-msg-txt {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  flex: 1;
  overflow-wrap: break-word;
  white-space: normal;
  overflow: hidden;
}
.solid-msg-txt.removing {
  opacity: 0;
}

.solid-msg-close {
  margin-left: 8px;
  width: 24px;
  height: 24px;
  opacity: 0.7;
  flex-grow: 0;
  cursor: pointer;
}
`;var G=(0,p.template)('<div><div class="solid-msg-txt"></div></div>',4),S=(0,p.template)("<div></div>",2),H=(0,p.template)('<div class="solid-msg-close"></div>',2),N=document.createElement("style");N.textContent=y;document.head.appendChild(N);var R=e=>{let[o,t]=(0,a.createSignal)(1);return(0,a.onMount)(()=>{requestAnimationFrame(()=>{t(0)})}),(()=>{let s=G.cloneNode(!0),i=s.firstChild;return s.$$click=()=>{r.clickCardClose&&w(e.id)},(0,c.insert)(s,(()=>{let n=(0,$.memo)(()=>!!r.progress,!0);return()=>n()&&(()=>{let l=S.cloneNode(!0);return l.style.setProperty("transform-origin","0% 0%"),(0,h.effect)(d=>{let m=["solid-msg-progrecss",e.type].join(" "),_=`scaleX(${o()})`,k=e.duration+"ms";return m!==d._v$4&&(0,b.className)(l,d._v$4=m),_!==d._v$5&&l.style.setProperty("transform",d._v$5=_),k!==d._v$6&&l.style.setProperty("transition-duration",d._v$6=k),d},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),l})()})(),i),(0,c.insert)(i,()=>e.msg),(0,c.insert)(s,(()=>{let n=(0,$.memo)(()=>!!r.closeButton,!0);return()=>n()&&(()=>{let l=H.cloneNode(!0);return l.$$click=()=>w(e.id),l.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,l})()})(),null),(0,h.effect)(n=>{let l={["solid-msg"]:!0,[e.type]:!0,removing:e.removing,appending:e.appending},d=e.removing?"0px":r.padding,m=!!e.removing;return n._v$=(0,M.classList)(s,l,n._v$),d!==n._v$2&&s.style.setProperty("padding",n._v$2=d),m!==n._v$3&&i.classList.toggle("removing",n._v$3=m),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})()},r={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",zIndex:"2000",duration:1e4,Component:R},P=!1,U=()=>{P||(P=!0,typeof window!="undefined"&&(0,L.render)(I,document.body))},[f,g]=(0,a.createRoot)(()=>(0,j.createStore)({show:!0,list:[]})),w=e=>{g("list",o=>o.id==e,{removing:!0}),setTimeout(()=>{let o=[];for(let t=0;t<f.list.length;t++){let s=f.list[t];s.id!==e&&o.push(s)}g("list",o)},310)},V=()=>String(Math.random()),u=(e,o,t=r.duration)=>{U();let s=V();g("list",[...f.list,{msg:o,type:e,id:s,duration:t,appending:!0}]),requestAnimationFrame(()=>{g("list",i=>i.id===s,{appending:!1})}),setTimeout(()=>{w(s)},t)},X={options:r,setOptions:e=>{Object.assign(r,e),g("show",!1),g("show",!0)},red:(e,o=r.duration)=>{u("red",e,o)},blue:(e,o=r.duration)=>{u("blue",e,o)},green:(e,o=r.duration)=>{u("green",e,o)},light:(e,o=r.duration)=>{u("light",e,o)},dark:(e,o=r.duration)=>{u("dark",e,o)}};function I(){return(0,v.createComponent)(a.Show,{get when(){return f.show},children:()=>(()=>{let e=S.cloneNode(!0);return(0,c.insert)(e,(0,v.createComponent)(a.For,{get each(){return f.list},children:o=>(0,v.createComponent)(r.Component,o)})),(0,h.effect)(o=>{let t=`solid-msg-box ${r.position}`,s=r.width,i=r.zIndex;return t!==o._v$7&&(0,b.className)(e,o._v$7=t),s!==o._v$8&&e.style.setProperty("max-width",o._v$8=s),i!==o._v$9&&e.style.setProperty("z-index",o._v$9=i),o},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})()})}(0,C.delegateEvents)(["click"]);module.exports=A(Y);
