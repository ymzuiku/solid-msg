import{template as u}from"solid-js/web";import{delegateEvents as S}from"solid-js/web";import{createComponent as p}from"solid-js/web";import{className as w}from"solid-js/web";import{classList as j}from"solid-js/web";import{effect as v}from"solid-js/web";import{insert as f}from"solid-js/web";import{memo as _}from"solid-js/web";import{createRoot as P,createSignal as I,For as B,onMount as T,Show as z}from"solid-js";import{createStore as E}from"solid-js/store";import{render as F}from"solid-js/web";var $=`:root {
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
`;var L=u('<div><div class="solid-msg-txt"></div></div>',4),k=u("<div></div>",2),N=u('<div class="solid-msg-close"></div>',2),y=document.createElement("style");y.textContent=$;document.head.appendChild(y);var q=e=>{let[o,r]=I(1);return T(()=>{requestAnimationFrame(()=>{r(0)})}),(()=>{let t=L.cloneNode(!0),d=t.firstChild;return t.$$click=()=>{s.clickCardClose&&h(e.id)},f(t,(()=>{let i=_(()=>!!s.progress,!0);return()=>i()&&(()=>{let n=k.cloneNode(!0);return n.style.setProperty("transform-origin","0% 0%"),v(l=>{let g=["solid-msg-progrecss",e.type].join(" "),x=`scaleX(${o()})`,b=e.duration+"ms";return g!==l._v$4&&w(n,l._v$4=g),x!==l._v$5&&n.style.setProperty("transform",l._v$5=x),b!==l._v$6&&n.style.setProperty("transition-duration",l._v$6=b),l},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})()})(),d),f(d,()=>e.msg),f(t,(()=>{let i=_(()=>!!s.closeButton,!0);return()=>i()&&(()=>{let n=N.cloneNode(!0);return n.$$click=()=>h(e.id),n.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,n})()})(),null),v(i=>{let n={["solid-msg"]:!0,[e.type]:!0,removing:e.removing,appending:e.appending},l=e.removing?"0px":s.padding,g=!!e.removing;return i._v$=j(t,n,i._v$),l!==i._v$2&&t.style.setProperty("padding",i._v$2=l),g!==i._v$3&&d.classList.toggle("removing",i._v$3=g),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()},s={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",zIndex:"2000",duration:1e4,Component:q},C=!1,A=()=>{C||(C=!0,typeof window!="undefined"&&F(G,document.body))},[m,a]=P(()=>E({show:!0,list:[]})),h=e=>{a("list",o=>o.id==e,{removing:!0}),setTimeout(()=>{let o=[];for(let r=0;r<m.list.length;r++){let t=m.list[r];t.id!==e&&o.push(t)}a("list",o)},310)},O=()=>String(Math.random()),c=(e,o,r=s.duration)=>{A();let t=O();a("list",[...m.list,{msg:o,type:e,id:t,duration:r,appending:!0}]),requestAnimationFrame(()=>{a("list",d=>d.id===t,{appending:!1})}),setTimeout(()=>{h(t)},r)},oe={options:s,setOptions:e=>{Object.assign(s,e),a("show",!1),a("show",!0)},red:(e,o=s.duration)=>{c("red",e,o)},blue:(e,o=s.duration)=>{c("blue",e,o)},green:(e,o=s.duration)=>{c("green",e,o)},light:(e,o=s.duration)=>{c("light",e,o)},dark:(e,o=s.duration)=>{c("dark",e,o)}};function G(){return p(z,{get when(){return m.show},children:()=>(()=>{let e=k.cloneNode(!0);return f(e,p(B,{get each(){return m.list},children:o=>p(s.Component,o)})),v(o=>{let r=`solid-msg-box ${s.position}`,t=s.width,d=s.zIndex;return r!==o._v$7&&w(e,o._v$7=r),t!==o._v$8&&e.style.setProperty("max-width",o._v$8=t),d!==o._v$9&&e.style.setProperty("z-index",o._v$9=d),o},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})()})}S(["click"]);export{G as Message,oe as solidMsg};
