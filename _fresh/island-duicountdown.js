import{b as i}from"./chunk-OPYDAOI5.js";import{a as c}from"./chunk-YILHZKGN.js";import{b as a}from"./chunk-KNDIS3IX.js";import{c as s}from"./chunk-UCKURDVD.js";import"./chunk-2GUEMEWN.js";import"./chunk-7XBR77FJ.js";import{a as e}from"./chunk-3MXJYX4G.js";import{k as o}from"./chunk-VZ4DKIQG.js";import"./chunk-Z47A3HLT.js";function l(t){let n=t-Date.now(),r=Math.floor(n/1e3%60),p=Math.floor(n/1e3/60%60),u=Math.floor(n/(1e3*60*60)%24),m=Math.floor(n/(1e3*60*60*24));return{total:n,days:m,hours:u,minutes:p,seconds:r,over:!(n>0)}}var h=o([]);var E=o(void 0);function f(t){return t.children}f.displayName="Partial";var x=Date.parse("31 Jan 2024 23:59:59 GMT+3");console.log(new Date().toTimeString());function V(){let t=s({}),n=s(!1);if(!n.value){n.value=!0;let r=setInterval(()=>{t.value=l(x),t.value.seconds==0&&(a.value+=1,i&&c()),t.value.over&&clearInterval(r)},1e3)}return e("div",{className:"grid grid-flow-col gap-5 text-center auto-cols-max py-6 sm:py-2",children:[e("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e("span",{className:"countdown font-mono text-5xl",children:e("span",{style:{"--value":t.value.days}})}),"days"]}),e("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e("span",{className:"countdown font-mono text-5xl",children:e("span",{style:{"--value":t.value.hours}})}),"hours"]}),e("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e("span",{className:"countdown font-mono text-5xl",children:e("span",{style:{"--value":t.value.minutes}})}),"min"]}),e("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e("span",{className:"countdown font-mono text-5xl",children:e("span",{style:{"--value":t.value.seconds}})}),"sec"]})]})}export{V as DuiCountdown};
