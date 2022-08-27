var x=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var O=e=>x(e,"__esModule",{value:!0});var T=(e,t)=>{for(var r in t)x(e,r,{get:t[r],enumerable:!0})},F=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of P(t))!E.call(e,s)&&(r||s!=="default")&&x(e,s,{get:()=>t[s],enumerable:!(i=I(t,s))||i.enumerable});return e};var H=(e=>(t,r)=>e&&e.get(t)||(r=F(O({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var G={};T(G,{Message:()=>B,solidMsg:()=>A});var b=require("solid-js/web"),M=require("solid-js/web"),h=require("solid-js/web"),j=require("solid-js/web"),v=require("solid-js/web"),g=require("solid-js/web"),u=require("solid-js/web"),k=require("solid-js/web"),c=require("solid-js"),N=require("solid-js/store"),S=require("solid-js/web"),n=require("twind"),R=(0,b.template)("<div><p></p></div>",4),_=(0,b.template)("<div></div>",2);var X=e=>{let[t,r]=(0,c.createSignal)(e.duration),i=setInterval(()=>{r(t()-50)},50);return(0,c.onCleanup)(()=>{clearInterval(i)}),(()=>{let s=R.cloneNode(!0),$=s.firstChild;return s.$$click=()=>{o.clickCardClose&&y(e.id)},(0,g.insert)(s,(()=>{let a=(0,k.memo)(()=>!!o.progress,!0);return()=>a()&&(()=>{let l=_.cloneNode(!0);return l.style.setProperty("transform-origin","0% 0%"),(0,v.effect)(d=>{let f=[n.tw`absolute w-full left-0 bottom-0 rounded h-[3px]`,o.progresCss[e.type]].join(" "),C=`scaleX(${t()/e.duration})`;return f!==d._v$4&&(0,u.className)(l,d._v$4=f),C!==d._v$5&&l.style.setProperty("transform",d._v$5=C),d},{_v$4:void 0,_v$5:void 0}),l})()})(),$),(0,u.className)($,n.tw`flex-1 break-words whitespace-normal overflow-hidden`),(0,g.insert)($,()=>e.msg),(0,g.insert)(s,(()=>{let a=(0,k.memo)(()=>!!o.closeButton,!0);return()=>a()&&(()=>{let l=_.cloneNode(!0);return l.$$click=()=>y(e.id),(0,u.className)(l,n.tw`ml-2 w-6 h-6 opacity-70 flex-grow-0 cursor-pointer`),l.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,l})()})(),null),(0,v.effect)(a=>{let l=o.css[e.type],d={[n.tw`cursor-pointer`]:o.clickCardClose},f=o.padding;return l!==a._v$&&(0,u.className)(s,a._v$=l),a._v$2=(0,j.classList)(s,d,a._v$2),f!==a._v$3&&s.style.setProperty("padding",a._v$3=f),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})()},o={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",duration:1e4,css:{error:n.tw`relative overflow-hidden w-full inline-block bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,success:n.tw`relative overflow-hidden w-full inline-block bg-indigo-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,light:n.tw`relative overflow-hidden w-full inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,dark:n.tw`relative overflow-hidden w-full inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`},progresCss:{light:n.tw`bg-black opacity-20`,dark:n.tw`bg-white opacity-20`,success:n.tw`bg-indigo-800`,error:n.tw`bg-red-800`},Component:X},L=!1,q=()=>{L||(L=!0,typeof window!="undefined"&&(0,S.render)(B,document.body))},[m,w]=(0,c.createRoot)(()=>(0,N.createStore)({show:!0,list:[]})),y=e=>{let t=[];for(let r=0;r<m.list.length;r++){let i=m.list[r];i.id!==e&&t.push(i)}w("list",t)},z=()=>String(Math.random()),p=(e,t,r=o.duration)=>{q();let i=z();w("list",[...m.list,{msg:t,type:e,id:i,duration:r}]),setTimeout(()=>{y(i)},r)},A={options:o,setOptions:e=>{Object.assign(o,e),w("show",!1),w("show",!0)},error:(e,t=o.duration)=>{p("error",e,t)},success:(e,t=o.duration)=>{p("success",e,t)},light:(e,t=o.duration)=>{p("light",e,t)},dark:(e,t=o.duration)=>{p("dark",e,t)}},D={top:n.tw`fixed mx-auto top-10 left-1/2 -translate-x-1/2 space-y-4`,center:n.tw`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4`,bottom:n.tw`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2 space-y-4`};function B(){return(0,h.createComponent)(c.Show,{get when(){return m.show},children:()=>(()=>{let e=_.cloneNode(!0);return(0,g.insert)(e,(0,h.createComponent)(c.For,{get each(){return m.list},children:t=>(0,h.createComponent)(o.Component,t)})),(0,v.effect)(t=>{let r=D[o.position],i=o.width;return r!==t._v$6&&(0,u.className)(e,t._v$6=r),i!==t._v$7&&e.style.setProperty("width",t._v$7=i),t},{_v$6:void 0,_v$7:void 0}),e})()})}(0,M.delegateEvents)(["click"]);module.exports=H(G);
