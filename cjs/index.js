var $=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var z=Object.prototype.hasOwnProperty;var F=e=>$(e,"__esModule",{value:!0});var T=(e,t)=>{for(var n in t)$(e,n,{get:t[n],enumerable:!0})},q=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of I(t))!z.call(e,s)&&(n||s!=="default")&&$(e,s,{get:()=>t[s],enumerable:!(o=B(t,s))||o.enumerable});return e};var A=(e=>(t,n)=>e&&e.get(t)||(n=q(F({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var G={};T(G,{Message:()=>L,solidMsg:()=>X});var b=require("solid-js/web"),M=require("solid-js/web"),w=require("solid-js/web"),_=require("solid-js/web"),p=require("solid-js/web"),m=require("solid-js/web"),u=require("solid-js/web"),k=require("solid-js/web"),d=require("solid-js"),N=require("solid-js/store"),P=require("solid-js/web"),r=require("twind"),E=(0,b.template)("<div><p></p></div>",4),y=(0,b.template)("<div></div>",2);var O=e=>{let[t,n]=(0,d.createSignal)(1);return(0,d.onMount)(()=>{requestAnimationFrame(()=>{n(0)})}),(()=>{let o=E.cloneNode(!0),s=o.firstChild;return o.$$click=()=>{i.clickCardClose&&C(e.id)},(0,m.insert)(o,(()=>{let l=(0,k.memo)(()=>!!i.progress,!0);return()=>l()&&(()=>{let a=y.cloneNode(!0);return a.style.setProperty("transform-origin","0% 0%"),(0,p.effect)(c=>{let g=[r.tw`absolute w-full left-0 bottom-0 rounded h-[3px] ease-linear duration-500 transition-transform`,i.progresCss[e.type]].join(" "),x=`scaleX(${t()})`,j=e.duration+"ms";return g!==c._v$5&&(0,u.className)(a,c._v$5=g),x!==c._v$6&&a.style.setProperty("transform",c._v$6=x),j!==c._v$7&&a.style.setProperty("transition-duration",c._v$7=j),c},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),a})()})(),s),(0,u.className)(s,r.tw`text-center flex-1 break-words whitespace-normal overflow-hidden`),(0,m.insert)(s,()=>e.msg),(0,m.insert)(o,(()=>{let l=(0,k.memo)(()=>!!i.closeButton,!0);return()=>l()&&(()=>{let a=y.cloneNode(!0);return a.$$click=()=>C(e.id),(0,u.className)(a,r.tw`ml-2 w-6 h-6 opacity-70 flex-grow-0 cursor-pointer`),a.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"></path></svg>
`,a})()})(),null),(0,p.effect)(l=>{let a=i.css[e.type],c={[r.tw`origin-center`]:!0,[r.tw`sm:cursor-pointer`]:i.clickCardClose,[r.tw`h-0 max-h-0 opacity-0 mt-0`]:e.removing,[r.tw`mb-4`]:!e.removing,[r.tw`translate-y-12 translate-x-0 opacity-0`]:e.appending},g=e.removing?"0px":i.padding,x={[r.tw`opacity-0`]:e.removing};return a!==l._v$&&(0,u.className)(o,l._v$=a),l._v$2=(0,_.classList)(o,c,l._v$2),g!==l._v$3&&o.style.setProperty("padding",l._v$3=g),l._v$4=(0,_.classList)(s,x,l._v$4),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),o})()},i={position:"top",closeButton:!1,width:"300px",progress:!0,clickCardClose:!0,padding:"10px",zIndex:"2000",duration:1e4,css:{red:r.tw`relative origin-center transition-all duration-300 ease-out overflow-hidden inline-block bg-red-500 dark:bg-red-600 text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,blue:r.tw`relative origin-center transition-all duration-300 ease-out overflow-hidden inline-block bg-indigo-500 dark:bg-black text-white rounded-lg flex flex-row items-center justify-center shadow-lg`,green:r.tw`relative origin-center transition-all duration-300 ease-out overflow-hidden inline-block bg-green-500 dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`,light:r.tw`relative origin-center transition-all duration-300 ease-out overflow-hidden inline-block bg-white dark:bg-black text-base dark:text-white rounded-lg border-1 border-gray-200 flex flex-row items-center justify-center shadow-lg`,dark:r.tw`relative origin-center transition-all duration-300 ease-out overflow-hidden inline-block bg-black dark:bg-black text-white rounded-lg  flex flex-row items-center justify-center shadow-lg`},progresCss:{light:r.tw`bg-black opacity-20`,dark:r.tw`bg-white opacity-20`,blue:r.tw`bg-indigo-800`,red:r.tw`bg-red-800`,green:r.tw`bg-green-800`},Component:O},S=!1,R=()=>{S||(S=!0,typeof window!="undefined"&&(0,P.render)(L,document.body))},[v,f]=(0,d.createRoot)(()=>(0,N.createStore)({show:!0,list:[]})),C=e=>{f("list",t=>t.id==e,{removing:!0}),setTimeout(()=>{let t=[];for(let n=0;n<v.list.length;n++){let o=v.list[n];o.id!==e&&t.push(o)}f("list",t)},310)},H=()=>String(Math.random()),h=(e,t,n=i.duration)=>{R();let o=H();f("list",[...v.list,{msg:t,type:e,id:o,duration:n,appending:!0}]),requestAnimationFrame(()=>{f("list",s=>s.id===o,{appending:!1})}),setTimeout(()=>{C(o)},n)},X={options:i,setOptions:e=>{Object.assign(i,e),f("show",!1),f("show",!0)},red:(e,t=i.duration)=>{h("red",e,t)},blue:(e,t=i.duration)=>{h("blue",e,t)},green:(e,t=i.duration)=>{h("green",e,t)},light:(e,t=i.duration)=>{h("light",e,t)},dark:(e,t=i.duration)=>{h("dark",e,t)}},D={top:r.tw`fixed mx-auto top-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition-all duration-200 ease-out`,topRight:r.tw`fixed mx-auto top-10 right-10 flex flex-col items-center justify-center transition-all duration-200 ease-out`,center:r.tw`fixed mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center  transition-all duration-200 ease-out`,bottom:r.tw`fixed mx-auto bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  transition-all duration-200 ease-out`};function L(){return(0,w.createComponent)(d.Show,{get when(){return v.show},children:()=>(()=>{let e=y.cloneNode(!0);return(0,m.insert)(e,(0,w.createComponent)(d.For,{get each(){return v.list},children:t=>(0,w.createComponent)(i.Component,t)})),(0,p.effect)(t=>{let n=D[i.position],o=i.width,s=i.zIndex;return n!==t._v$8&&(0,u.className)(e,t._v$8=n),o!==t._v$9&&e.style.setProperty("max-width",t._v$9=o),s!==t._v$10&&e.style.setProperty("z-index",t._v$10=s),t},{_v$8:void 0,_v$9:void 0,_v$10:void 0}),e})()})}(0,M.delegateEvents)(["click"]);module.exports=A(G);
