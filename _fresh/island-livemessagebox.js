import{c as t,d as n}from"./chunk-UCKURDVD.js";import"./chunk-2GUEMEWN.js";import"./chunk-7XBR77FJ.js";import{a as s}from"./chunk-3MXJYX4G.js";import"./chunk-VZ4DKIQG.js";import"./chunk-Z47A3HLT.js";function l(){let a=t("Happy new year.");return n(()=>{let e=new EventSource("/api/sse");e.addEventListener("message",r=>{a.value=JSON.parse(r.data)}),e.addEventListener("error",async()=>{e.close()})}),s("div",{class:"pt-6",children:s("p",{class:"text-4xl font-black text-primary",children:a})})}export{l as LiveMessageBox};