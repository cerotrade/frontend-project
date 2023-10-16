import{s as f,V as b,_ as v,a as k}from"./card-view-a4caa302.js";import{_ as S}from"./wallet-ccee8465.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{r as V,b as h,d as o,a as r,w as i,h as c,g as s,O as y,f as n,Q as C,o as p,e as M,t,M as m,R as u,F as W,i as P,c as j,V as B}from"./index-b3dc84eb.js";import{V as E,a as g}from"./VWindowItem-3559a434.js";import{V as F}from"./VSheet-3fcb47ad.js";import{V as U,a as A}from"./VRow-f6a99b2b.js";const I={data(){return{itemsPerPage:100,windowStep:1,allItems:"All items",items:["All items","Items"],items_timeline:["Timeline","Others"],timeline:"Timeline",toggle:0,headers:[{title:"$",key:"checkbox",sortable:!1,align:"center"},{title:"Facility name",sortable:!1,key:"facility"},{title:"Energy source",key:"energy_source",sortable:!1},{title:"Region",key:"region",sortable:!1},{title:"Price",key:"price",sortable:!1},{title:"MWh",key:"mwh",sortable:!1},{title:"Volume",key:"volume",sortable:!1},{title:"Actions",key:"actions",sortable:!1,align:"center"}],dataMarketplace:[{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-waves",energy_source:"Hydroenergy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-windy",energy_source:"Wind energy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-windy",energy_source:"Wind energy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-windy",energy_source:"Wind energy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-windy",energy_source:"Wind energy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-down",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-windy",energy_source:"Wind energy",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1},{id:"1234567",icon_arrow:"mdi-arrow-up",percent:"20",facility_img:"sphere",facility:"Sphere",price:125,currency:"$",icon_source:"mdi-weather-sunny",energy_source:"Sun",region:"Santiago, Chile",mwh:32,volume:7654,checkbox:!1}],iconMap:{sphere:f}}},methods:{goDetails(){this.$router.push("rec-single")}}},T={id:"marketplace"},z={class:"mb-10",style:{color:"#00555B","font-size":"16px","font-weight":"700"}},D=o("h3",null,"Marketplace",-1),R=o("span",{class:"mb-16",style:{color:"#475467"}},"Lorem ipsum dolor sit amet.",-1),H={class:"divrow jspace"},N={class:"divrow",style:{gap:"15px"}},L={class:"divrow jcenter acenter",style:{gap:"5px"}},O=o("img",{src:v,alt:"Table icon"},null,-1),$=o("img",{src:k,alt:"Card icon"},null,-1),Q={class:"acenter"},q=["src","alt"],G={class:"divrow jspace acenter"},J={class:"divrow acenter"},K={class:"divrow acenter"},X={class:"ml-2"},Y=o("img",{src:S,alt:"wallet"},null,-1),Z={class:"divrow jspace acenter mb-6"},ee={class:"divrow center",style:{gap:"5px"}},oe={class:"mb-0 font700"},ie={class:"jspace divrow mb-1"},re=o("span",null,"Price",-1),se={style:{color:"#475467"}},le={class:"jspace divrow mb-1"},te=o("span",null,"Facility name",-1),ae={class:"center",style:{color:"#475467"}},ce=["src","alt"],ne={class:"jspace divrow mb-1"},de=o("span",null,"Energy source",-1),me={style:{color:"#475467"}},ue={class:"jspace divrow mb-1"},pe=o("span",null,"Region",-1),_e={style:{color:"#475467"}},he={class:"jspace divrow mb-1"},ye=o("span",null,"MWh",-1),ge={style:{color:"#475467"}};function we(fe,a,be,ve,l,_){const w=V("v-data-table");return p(),h("div",T,[o("span",z,[r(c,null,{default:i(()=>[s("mdi-home")]),_:1}),s(),r(c,null,{default:i(()=>[s("mdi-chevron-right")]),_:1}),s(" Marketplace")]),D,R,o("div",H,[o("div",N,[r(y,{modelValue:l.allItems,"onUpdate:modelValue":a[0]||(a[0]=e=>l.allItems=e),items:l.items,variant:"solo",flat:"","menu-icon":"mdi-chevron-down",class:"select","bg-color":"#EAECF0","hide-details":"",density:"compact"},null,8,["modelValue","items"]),r(n,{class:"btn"},{default:i(()=>[r(c,null,{default:i(()=>[s("mdi-filter-variant")]),_:1}),s(" Add filter")]),_:1})]),o("div",L,[r(M,{class:"input",variant:"solo",flat:"",elevation:"0",placeholder:"Search","prepend-inner-icon":"mdi-magnify"}),r(y,{modelValue:l.timeline,"onUpdate:modelValue":a[1]||(a[1]=e=>l.timeline=e),items:l.items_timeline,variant:"solo",flat:"","menu-icon":"mdi-chevron-down",class:"select","bg-color":"#EAECF0","hide-details":"",density:"compact"},null,8,["modelValue","items"]),r(C,{class:"center",rounded:"1",modelValue:l.toggle,"onUpdate:modelValue":a[4]||(a[4]=e=>l.toggle=e)},{default:i(()=>[r(n,{class:"btn-toggle",onClick:a[2]||(a[2]=e=>l.windowStep=1)},{default:i(()=>[O]),_:1}),r(n,{class:"btn-toggle",onClick:a[3]||(a[3]=e=>l.windowStep=2)},{default:i(()=>[$]),_:1})]),_:1},8,["modelValue"]),r(n,{class:"btn",icon:"mdi-dots-vertical",style:{"font-size":"20px!important",padding:"15px!important"}})])]),r(E,{modelValue:l.windowStep,"onUpdate:modelValue":a[6]||(a[6]=e=>l.windowStep=e)},{default:i(()=>[r(g,{value:1},{default:i(()=>[r(w,{"items-per-page":l.itemsPerPage,"onUpdate:itemsPerPage":a[5]||(a[5]=e=>l.itemsPerPage=e),headers:l.headers,items:l.dataMarketplace,class:"mt-6 my-data-table",density:"compact"},{"item.checkbox":i(({item:e})=>[r(b,{modelValue:e.checkbox,"onUpdate:modelValue":d=>e.checkbox=d,"hide-details":"",density:"compact",style:{"max-width":"10px!important","min-width":"10px!important"}},null,8,["modelValue","onUpdate:modelValue"])]),"item.facility":i(({item:e})=>[o("span",Q,[o("img",{src:l.iconMap[e.selectable.facility_img],alt:e.facility_img,class:"mr-1"},null,8,q),s(" "+t(e.selectable.facility),1)])]),"item.energy_source":i(({item:e})=>[o("span",null,[r(c,{class:m({blue:e.selectable.energy_source==="Hydroenergy",grey:e.selectable.energy_source==="Wind energy",yellow:e.selectable.energy_source==="Sun"})},{default:i(()=>[s(t(e.selectable.icon_source),1)]),_:2},1032,["class"]),s(" "+t(e.selectable.energy_source),1)])]),"item.price":i(({item:e})=>[o("span",G,[s(t(e.selectable.price)+" ",1),r(F,{style:{color:"#475467","padding-inline":"5px",border:"1px solid rgba(0,0,0,0.25)","border-radius":"5px"}},{default:i(()=>[s(t(e.selectable.currency),1)]),_:2},1024)])]),"item.mwh":i(({item:e})=>[o("span",J,[s(t(e.selectable.mwh)+" ",1),r(c,null,{default:i(()=>[s("mdi-lightbulb-variant-outline")]),_:1})])]),"item.volume":i(({item:e})=>[o("div",K,[r(u,{style:{"border-radius":"10px!important"},class:m({"red-chip-table":e.selectable.icon_arrow==="mdi-arrow-down","green-chip-table":e.selectable.icon_arrow==="mdi-arrow-up"})},{default:i(()=>[r(c,null,{default:i(()=>[s(t(e.selectable.icon_arrow),1)]),_:2},1024),s(" "+t(e.selectable.percent)+" %",1)]),_:2},1032,["class"]),o("span",X,t(e.selectable.volume),1)])]),"item.actions":i(({item:e})=>[r(u,{onClick:d=>_.goDetails(e),color:"white",class:"chip-table mr-1",style:{"border-radius":"10px!important"}},{default:i(()=>[Y]),_:2},1032,["onClick"]),r(u,{class:"chip-table",color:"white",style:{"border-radius":"10px!important"}},{default:i(()=>[r(c,{size:"default",style:{color:"#000!important"}},{default:i(()=>[s("mdi-file-chart-outline")]),_:1})]),_:1})]),_:2},1032,["items-per-page","headers","items"])]),_:1}),r(g,{value:2,class:"pa-2"},{default:i(()=>[r(U,{class:"mt-6"},{default:i(()=>[(p(!0),h(W,null,P(l.dataMarketplace,(e,d)=>(p(),j(A,{key:d,xl:"3",lg:"3",md:"4",sm:"6",cols:"12"},{default:i(()=>[r(B,{class:"card cards-marketplace",onClick:ke=>_.goDetails(e)},{default:i(()=>[o("div",Z,[o("div",ee,[o("h6",oe,"#"+t(e.id),1),r(u,{class:m({"red-chip":e.icon_arrow==="mdi-arrow-down","green-chip":e.icon_arrow==="mdi-arrow-up"})},{default:i(()=>[r(c,null,{default:i(()=>[s(t(e.icon_arrow),1)]),_:2},1024),s(" "+t(e.percent)+" %",1)]),_:2},1032,["class"])]),r(n,{class:"btn btn-dots",icon:"mdi-dots-vertical"})]),o("div",ie,[re,o("span",se,t(e.currency)+" "+t(e.price),1)]),o("div",le,[te,o("span",ae,[o("img",{src:l.iconMap[e.facility_img],alt:e.facility_img,class:"mr-1"},null,8,ce),s(" "+t(e.facility),1)])]),o("div",ne,[de,o("span",me,[r(c,{class:m({blue:e.energy_source==="Hydroenergy",grey:e.energy_source==="Wind energy",yellow:e.energy_source==="Sun"})},{default:i(()=>[s(t(e.icon_source),1)]),_:2},1032,["class"]),s(" "+t(e.energy_source),1)])]),o("div",ue,[pe,o("span",_e,t(e.region),1)]),o("div",he,[ye,o("span",ge,[r(c,null,{default:i(()=>[s("mdi-lightbulb-variant-outline")]),_:1}),s(" "+t(e.mwh),1)])])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const je=x(I,[["render",we]]);export{je as default};