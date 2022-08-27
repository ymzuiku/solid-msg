import{template as $}from"solid-js/web";import{delegateEvents as y}from"solid-js/web";import{classList as C}from"solid-js/web";import{effect as p}from"solid-js/web";import{createComponent as h}from"solid-js/web";import{insert as x}from"solid-js/web";import{className as c}from"solid-js/web";import{memo as w}from"solid-js/web";import{createRoot as j,createSignal as N,For as I,onCleanup as S,Show as k}from"solid-js";import{createStore as L}from"solid-js/store";import{render as P}from"solid-js/web";import{tw as o}from"twind";var M=$("<p></p>",2),v=$("<div></div>",2);var B=e=>{let[t,i]=N(e.duration),s=setInterval(()=>{i(t()-50)},50);return S(()=>{clearInterval(s)}),(()=>{let l=v.cloneNode(!0);return l.$$click=()=>{n.clickCardClose&&b(e.id)},x(l,h(k,{get when(){return!e.pending},get children(){return[w(()=>w(()=>!!n.progress,!0)()&&(()=>{let r=v.cloneNode(!0);return r.style.setProperty("transform-origin","0% 0%"),p(a=>{let m=[o`absolute w-full left-0 bottom-0 rounded h-[3px]`,n.progresCss[e.type]].join(" "),d=`scaleX(${t()/e.duration})`;return m!==a._v$4&&c(r,a._v$4=m),d!==a._v$5&&r.style.setProperty("transform",a._v$5=d),a},{_v$4:void 0,_v$5:void 0}),r})()),(()=>{let r=M.cloneNode(!0);return c(r,o`flex-1 break-words whitespace-normal overflow-hidden`),x(r,()=>e.msg),r})(),w(()=>w(()=>!!n.closeButton,!0)()&&(()=>{let r=v.cloneNode(!0);return r.$$click=()=>b(e.id),c(r,o`ml-2 w-6 h-6 opacity-70 flex-grow-0 cursor-pointer`),r.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,r})())]}})),p(r=>{let a=n.css[e.type],m={[o`cursor-pointer`]:n.clickCardClose,[o`h-0 max-h-0 opacity-0 mt-0`]:e.pending,[o`mt-4`]:!e.pending},d=e.pending?"0px":n.padding;return a!==r._v$&&c(l,r._v$=a),r._v$2=C(l,m,r._v$2),d!==r._v$3&&l.style.setProperty("padding",r._v$3=d),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l})()},n={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",zIndex:"2000",duration:1e4,css:{red:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,blue:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-indigo-500 dark:bg-black text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,green:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-green-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,light:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,dark:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`},progresCss:{light:o`bg-black opacity-20`,dark:o`bg-white opacity-20`,blue:o`bg-indigo-800`,red:o`bg-red-800`,green:o`bg-green-800`},Component:B},_=!1,z=()=>{_||(_=!0,typeof window!="undefined"&&P(O,document.body))},[u,g]=j(()=>L({show:!0,list:[]})),b=e=>{g("list",t=>t.id==e,{pending:!0}),setTimeout(()=>{let t=[];for(let i=0;i<u.list.length;i++){let s=u.list[i];s.id!==e&&t.push(s)}g("list",t)},310)},T=()=>String(Math.random()),f=(e,t,i=n.duration)=>{z();let s=T();g("list",[...u.list,{msg:t,type:e,id:s,duration:i}]),setTimeout(()=>{b(s)},i)},V={options:n,setOptions:e=>{Object.assign(n,e),g("show",!1),g("show",!0)},red:(e,t=n.duration)=>{f("red",e,t)},blue:(e,t=n.duration)=>{f("blue",e,t)},green:(e,t=n.duration)=>{f("green",e,t)},light:(e,t=n.duration)=>{f("light",e,t)},dark:(e,t=n.duration)=>{f("dark",e,t)}},E={top:o`fixed mx-auto top-10 left-1/2 -translate-x-1/2`,center:o`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,bottom:o`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2`};function O(){return h(k,{get when(){return u.show},children:()=>(()=>{let e=v.cloneNode(!0);return x(e,h(I,{get each(){return u.list},children:t=>h(n.Component,t)})),p(t=>{let i=E[n.position],s=n.width,l=n.zIndex;return i!==t._v$6&&c(e,t._v$6=i),s!==t._v$7&&e.style.setProperty("width",t._v$7=s),l!==t._v$8&&e.style.setProperty("z-index",t._v$8=l),t},{_v$6:void 0,_v$7:void 0,_v$8:void 0}),e})()})}y(["click"]);export{O as Message,V as solidMsg};
