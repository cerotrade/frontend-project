import{_ as g}from"./logo-8b427113.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{o as r,b as c,d as e,F as f,i as v,g as _,t as h,a as t,w as n,h as k,p as b,j as w,r as y,c as x}from"./index-b3dc84eb.js";import{V}from"./VSheet-3fcb47ad.js";import{V as M,a as S}from"./VMain-365fda81.js";const B="/cero-trade/assets/home-white-cd515695.svg",N="/cero-trade/assets/wallet-white-926350a3.svg",I="/cero-trade/assets/marketplace-81be171c.svg",$="/cero-trade/assets/market-trends-08a14c65.svg",C="/cero-trade/assets/config-4e189202.svg",L="/cero-trade/assets/logo-navbar-c048c99e.svg",A="/cero-trade/assets/avatar-online-4c84352f.svg",F="/cero-trade/assets/menu-bars-fe5d4f54.svg";const j={data(){return{dataNavbar:[{img:"home",name:"Home",link:"/dashboard"},{img:"wallet",name:"My portfolio",link:"/my-portfolio"},{img:"marketplace",name:"Marketplace",link:"marketplace"},{img:"market_trends",name:"Market trends",link:"/"},{img:"config",name:"Settings",link:"/settings"}],iconMap:{home:B,wallet:N,marketplace:I,market_trends:$,config:C}}}},a=s=>(b("data-v-ae3ea58e"),s=s(),w(),s),D={id:"navbar",class:"flex-center"},E={id:"navbar__wrapper"},H={class:"center divrow displaynone",style:{gap:"15px"}},T=a(()=>e("img",{src:L,alt:"Logo",class:"mr-14"},null,-1)),q=["onClick"],z=["src","alt"],G={class:"center divrow displaynone",style:{gap:"20px"}},J=a(()=>e("img",{src:A,alt:"Avatar"},null,-1)),K=a(()=>e("div",{class:"divcol"},[e("span",{style:{"font-weight":"700",color:"#fff"}},"Sysiphus"),e("span",{style:{color:"#98A2B3"}},"olivia@cerotrade.com")],-1)),O=a(()=>e("div",{class:"chip-mobile show-mobile"},[e("img",{src:g,alt:"Logo",class:"logo-mobile"})],-1)),P=a(()=>e("img",{src:F,alt:"Menu Bars",class:"menu-bars show-mobile"},null,-1));function Q(s,d,p,l,i,U){return r(),c("nav",D,[e("div",E,[e("div",H,[T,(r(!0),c(f,null,v(i.dataNavbar,(o,m)=>(r(),c("span",{class:"center",key:m,style:{color:"#fff","font-weight":"300!important",cursor:"pointer"},onClick:W=>s.$router.push(o.link)},[e("img",{src:i.iconMap[o.img],alt:o.img,class:"mr-2"},null,8,z),_(" "+h(o.name),1)],8,q))),128))]),e("div",G,[t(k,{color:"#fff"},{default:n(()=>[_("mdi-bell-outline")]),_:1}),t(V,{class:"center divrow",style:{gap:"10px","background-color":"transparent"}},{default:n(()=>[J,K]),_:1})]),O,P])])}const R=u(j,[["render",Q],["__scopeId","data-v-ae3ea58e"]]),te={__name:"default-layout",setup(s){return(d,p)=>{const l=y("router-view");return r(),x(M,{id:"layout"},{default:n(()=>[t(S,null,{default:n(()=>[t(R),t(l)]),_:1})]),_:1})}}};export{te as default};