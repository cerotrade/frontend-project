import{k as _,ac as y,S as A,ad as F,D as I,a7 as B,ae as U,af as w,m as D,H as R,ag as $,ah as o,ai as c,a as r,W as l}from"./index-b3dc84eb.js";const H=_({...y(),...A(F(),["inline"])},"VCheckbox"),W=I()({name:"VCheckbox",inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:d,slots:t}=u;const s=B(e,"modelValue"),{isFocused:n,focus:i,blur:m}=U(e),p=w(),b=D(()=>e.id||`checkbox-${p}`);return R(()=>{const[v,V]=$(d),[h,M]=o.filterProps(e),[k,N]=c.filterProps(e);return r(o,l({class:["v-checkbox",e.class]},v,h,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:b.value,focused:n.value,style:e.style}),{...t,default:a=>{let{id:f,messagesId:x,isDisabled:P,isReadonly:g}=a;return r(c,l(k,{id:f.value,"aria-describedby":x.value,disabled:P.value,readonly:g.value},V,{modelValue:s.value,"onUpdate:modelValue":C=>s.value=C,onFocus:i,onBlur:m}),t)}})}),{}}}),j="/cero-trade/assets/sphere-a0a45c7f.svg",q="/cero-trade/assets/table-view-87532049.svg",z="/cero-trade/assets/card-view-e5fb1595.svg";export{W as V,q as _,z as a,j as s};