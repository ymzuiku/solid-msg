import{template as k}from"solid-js/web";import{delegateEvents as y}from"solid-js/web";import{classList as C}from"solid-js/web";import{effect as p}from"solid-js/web";import{createComponent as h}from"solid-js/web";import{insert as b}from"solid-js/web";import{className as c}from"solid-js/web";import{memo as w}from"solid-js/web";import{createRoot as j,createSignal as N,For as S,onCleanup as L,Show as $}from"solid-js";import{createStore as B}from"solid-js/store";import{render as I}from"solid-js/web";import{tw as o}from"twind";var M=k("<p></p>",2),v=k("<div></div>",2);var P=e=>{let[t,i]=N(e.duration),s=setInterval(()=>{i(t()-50)},50);return L(()=>{clearInterval(s)}),(()=>{let a=v.cloneNode(!0);return a.$$click=()=>{n.clickCardClose&&x(e.id)},b(a,h($,{get when(){return!e.pending},get children(){return[w(()=>w(()=>!!n.progress,!0)()&&(()=>{let r=v.cloneNode(!0);return r.style.setProperty("transform-origin","0% 0%"),p(l=>{let m=[o`absolute w-full left-0 bottom-0 rounded h-[3px]`,n.progresCss[e.type]].join(" "),d=`scaleX(${t()/e.duration})`;return m!==l._v$4&&c(r,l._v$4=m),d!==l._v$5&&r.style.setProperty("transform",l._v$5=d),l},{_v$4:void 0,_v$5:void 0}),r})()),(()=>{let r=M.cloneNode(!0);return c(r,o`flex-1 break-words whitespace-normal overflow-hidden`),b(r,()=>e.msg),r})(),w(()=>w(()=>!!n.closeButton,!0)()&&(()=>{let r=v.cloneNode(!0);return r.$$click=()=>x(e.id),c(r,o`ml-2 w-6 h-6 opacity-70 flex-grow-0 cursor-pointer`),r.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,r})())]}})),p(r=>{let l=n.css[e.type],m={[o`cursor-pointer`]:n.clickCardClose,[o`h-0 max-h-0 opacity-0 mt-0`]:e.pending,[o`mt-4`]:!e.pending},d=e.pending?"0px":n.padding;return l!==r._v$&&c(a,r._v$=l),r._v$2=C(a,m,r._v$2),d!==r._v$3&&a.style.setProperty("padding",r._v$3=d),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),a})()},n={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",duration:1e4,css:{red:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,blue:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-indigo-500 dark:bg-black text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,green:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-green-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,light:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,dark:o`relative transition-all duration-300 ease-out overflow-hidden w-full inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`},progresCss:{light:o`bg-black opacity-20`,dark:o`bg-white opacity-20`,blue:o`bg-indigo-800`,red:o`bg-red-800`,green:o`bg-green-800`},Component:P},_=!1,T=()=>{_||(_=!0,typeof window!="undefined"&&I(F,document.body))},[u,g]=j(()=>B({show:!0,list:[]})),x=e=>{g("list",t=>t.id==e,{pending:!0}),setTimeout(()=>{let t=[];for(let i=0;i<u.list.length;i++){let s=u.list[i];s.id!==e&&t.push(s)}g("list",t)},310)},E=()=>String(Math.random()),f=(e,t,i=n.duration)=>{T();let s=E();g("list",[...u.list,{msg:t,type:e,id:s,duration:i}]),setTimeout(()=>{x(s)},i)},V={options:n,setOptions:e=>{Object.assign(n,e),g("show",!1),g("show",!0)},red:(e,t=n.duration)=>{f("red",e,t)},blue:(e,t=n.duration)=>{f("blue",e,t)},green:(e,t=n.duration)=>{f("green",e,t)},light:(e,t=n.duration)=>{f("light",e,t)},dark:(e,t=n.duration)=>{f("dark",e,t)}},O={top:o`fixed mx-auto top-10 left-1/2 -translate-x-1/2`,center:o`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,bottom:o`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2`};function F(){return h($,{get when(){return u.show},children:()=>(()=>{let e=v.cloneNode(!0);return b(e,h(S,{get each(){return u.list},children:t=>h(n.Component,t)})),p(t=>{let i=O[n.position],s=n.width;return i!==t._v$6&&c(e,t._v$6=i),s!==t._v$7&&e.style.setProperty("width",t._v$7=s),t},{_v$6:void 0,_v$7:void 0}),e})()})}y(["click"]);export{F as Message,V as solidMsg};
