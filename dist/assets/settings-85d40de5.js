import{_ as v}from"./wallet-ccee8465.js";import{_ as V,a as P,b as w,c as S,d as A,e as F,f as L,g as B}from"./loading-757e8277.js";import{_ as N}from"./internet-computer-icon-1597769d.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{r as R,b as y,d as s,a as e,w as t,h as a,g as l,L as f,o as m,V as c,f as r,M as h,N as p,c as g,e as u,O as E,P as b}from"./index-b3dc84eb.js";import{V as _,a as d}from"./VRow-f6a99b2b.js";const C="/cero-trade/assets/ring-belt-90e484b7.svg",k="/cero-trade/assets/password-resset-15a9ae66.svg",I="/cero-trade/assets/company-logo-53775de0.svg",M="/cero-trade/assets/cloud-upload-8b7854bf.svg",j={data(){return{tabsWindow:1,dialogNotification:!1,show_password:!1,dialogResetPassword:!1,dialogCompany:!1,walletStatus:!1,status2fa:!1,verifyStatus:!1,show_password:!1,dialogParticipantForm:!1,dialogPending:!1,dialogParticipant:!1,dialogPhone:!1,items:["US","UK"],selectedLang:"USA",dialogConect:!1,dialogCreditCrad:!1,dialog2fa:!1}}},z={id:"settings"},q={class:"mb-10",style:{color:"#00555B","font-size":"16px","font-weight":"700"}},D=s("h3",null,"Settings",-1),W=s("span",{class:"mb-16",style:{color:"#475467"}},"Lorem ipsum dolor sit amet.",-1),T=s("h5",{class:"mb-6"},"Company information",-1),H=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),O={key:0,class:"mb-10",src:v,alt:"Wallet"},G=s("h5",{class:"mb-6"},"Connect your wallet",-1),K=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Y={key:3,class:"divrow jspace acenter mt-6"},J={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},Q=s("h5",{class:"mb-6"},"2FA Authentification",-1),X=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),Z={key:3,class:"divrow jspace acenter mt-6"},$={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},ee=s("h5",{class:"mb-6"},"Veirfy as participant",-1),te=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),se={key:3,class:"divrow jspace acenter mt-6"},le={style:{"font-size":"12px","font-weight":"700",color:"#067647"}},oe=s("img",{class:"mb-10",src:C,alt:"Wallet",style:{width:"21px",height:"21px"}},null,-1),ie=s("h5",{class:"mb-6"},"Notification",-1),ae=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),ne=s("img",{class:"mb-10",src:k,alt:"Password reset",style:{width:"21px",height:"21px"}},null,-1),de=s("h5",{class:"mb-6"},"Reset password",-1),re=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),ce=s("h5",{class:"mb-6"},"Support",-1),ue=s("span",{class:"tertiary",style:{"font-weight":"300"}}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, Modi voluptate nobis ducimus tempora? Alias. ",-1),me=s("img",{class:"mb-10",src:C,alt:"Password reset",style:{width:"30px",height:"30px"}},null,-1),pe=s("h5",null,"Notification",-1),fe=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),_e={class:"divrow mt-6",style:{gap:"10px"}},ge=s("img",{class:"mb-10",src:k,alt:"Password reset",style:{width:"30px",height:"30px"}},null,-1),ye=s("h5",null,"Reset Password",-1),he=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),be=s("label",{for:"password"},"New Password",-1),ve=s("label",{for:"confirm-password"},"Confirm password",-1),we={class:"divrow mt-6",style:{gap:"10px"}},Ce=s("h5",null,"Company information",-1),ke=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),xe=s("div",{class:"divrow mt-4 mb-6 acenter",style:{gap:"15px"}},[s("img",{src:I,alt:"Logo",style:{width:"45px"}}),s("span",{style:{color:"#667085"}},[s("img",{src:M,alt:"Logo",style:{width:"15px"}}),l(" Replace Company Logo")])],-1),Ve=s("label",{for:"company-name"},"Company name",-1),Pe=s("label",{for:"company-id"},"Company ID",-1),Se=s("label",{for:"city"},"City",-1),Ae=s("label",{for:"country"},"Country",-1),Fe=s("label",{for:"address"},"Company address",-1),Le={class:"divrow mt-6",style:{gap:"10px"}},Be=s("img",{class:"mb-10",src:v,alt:"Wallet",style:{width:"30px"}},null,-1),Ne=s("h5",null,"Connect wallet",-1),Ue=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit",-1),Re=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:V,alt:"Visa"}),s("img",{src:P,alt:"Mastercard"}),s("img",{src:w,alt:"Mastercard"})],-1),Ee=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Credit / Debit cards",-1),Ie=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:S,alt:"Bitcoin"}),s("img",{src:A,alt:"Ethereum"})],-1),Me=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with cryptocurrency",-1),je=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:F,alt:"Bank"})],-1),ze=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Bank transfer",-1),qe=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:L,alt:"Tether"})],-1),De=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with stablecoins",-1),We=s("div",{class:"divrow mb-4",style:{gap:"10px"}},[s("img",{src:N,alt:"ICP"})],-1),Te=s("h6",{class:"mb-4",style:{"font-weight":"700"}},"Payment with ICP",-1),He=s("h5",null,"Credit card connect",-1),Oe=s("label",{for:"card-name"},"Card issuer name",-1),Ge=s("label",{for:"card-number"},"Card number",-1),Ke=s("img",{src:w,alt:"Icono"},null,-1),Ye=s("label",{for:"expiration"},"Expiration date",-1),Je=s("label",{for:"cvc"},"Enter CVC",-1),Qe={class:"divrow mt-6",style:{gap:"10px"}},Xe=s("h5",null,"Add 2-factor verification",-1),Ze=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),$e=s("label",{for:"card-number"},"Add mobile phone",-1),et={class:"divrow mt-6",style:{gap:"10px"}},tt=s("h5",null,"Verify your phone",-1),st=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),lt=s("label",{for:"otp"},"Secure code",-1),ot=s("h5",null,"Verify as participant",-1),it={class:"divrow jspace",style:{gap:"30px"}},at=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),nt={class:"tertiary mt-4",style:{"font-weight":"700"}},dt=s("h6",null,"Non-participant",-1),rt=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),ct={class:"divcol astart ml-6",style:{gap:"20px"}},ut=s("h6",null,"Participant",-1),mt=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),pt={class:"divcol astart ml-6",style:{gap:"20px"}},ft=s("h5",null,"Verify as participant",-1),_t=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1),gt={class:"tertiary mt-4",style:{"font-weight":"700"}},yt=s("label",{for:"credential"},"Credential ID",-1),ht=s("label",{for:"password"},"Password",-1),bt=s("img",{src:B,alt:"loading",class:"mb-6",style:{width:"30px"}},null,-1),vt=s("h5",null,"Verification pending",-1),wt=s("span",{class:"tertiary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias laboriosam iste eum, repellendus.",-1);function Ct(kt,o,xt,Vt,i,Pt){const x=R("v-otp-input");return m(),y("div",z,[s("span",q,[e(a,null,{default:t(()=>[l("mdi-home")]),_:1}),l(),e(a,null,{default:t(()=>[l("mdi-chevron-right")]),_:1}),l(" Settings")]),D,W,e(_,null,{default:t(()=>[e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[e(a,{class:"mb-10"},{default:t(()=>[l("mdi-information-outline")]),_:1}),T,H,e(r,{class:"btn mt-6",onClick:o[0]||(o[0]=n=>i.dialogCompany=!0)},{default:t(()=>[l(" Edit personal information "),e(a,null,{default:t(()=>[l("mdi-account-edit-outline")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:h(["card",{verifyStatus:i.walletStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[i.walletStatus?p("",!0):(m(),y("img",O)),i.walletStatus?(m(),g(a,{key:1,class:"mb-10",style:{color:"#067647"}},{default:t(()=>[l("mdi-wallet-outline")]),_:1})):p("",!0),G,K,i.walletStatus?p("",!0):(m(),g(r,{key:2,class:"btn mt-6",onClick:o[1]||(o[1]=n=>i.dialogConect=!0)},{default:t(()=>[l(" Connect + ")]),_:1})),i.walletStatus?(m(),y("div",Y,[s("span",J,[e(a,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("Wallet successfuly connected")]),e(r,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Payment methods")]),_:1})])):p("",!0)]),_:1},8,["class"])]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:h(["card",{verifyStatus:i.status2fa}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[i.status2fa?p("",!0):(m(),g(a,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[l("mdi-lock-outline")]),_:1})),i.status2fa?(m(),g(a,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[l("mdi-lock-outline")]),_:1})):p("",!0),Q,X,i.status2fa?p("",!0):(m(),g(r,{key:2,class:"btn mt-6",onClick:o[2]||(o[2]=n=>i.dialog2fa=!0)},{default:t(()=>[l(" Setup "),e(a,null,{default:t(()=>[l("mdi-lock-outline")]),_:1})]),_:1})),i.status2fa?(m(),y("div",Z,[s("span",$,[e(a,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("2FA successfuly added")]),e(r,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Security")]),_:1})])):p("",!0)]),_:1},8,["class"])]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:h(["card",{verifyStatus:i.verifyStatus}]),style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[i.verifyStatus?p("",!0):(m(),g(a,{key:0,class:"mb-10",color:"#000"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})),i.verifyStatus?(m(),g(a,{key:1,class:"mb-10",color:"#067647"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})):p("",!0),ee,te,i.verifyStatus?p("",!0):(m(),g(r,{key:2,class:"btn mt-6",onClick:o[3]||(o[3]=n=>i.dialogParticipant=!0)},{default:t(()=>[l(" Veirfy as participant "),e(a,null,{default:t(()=>[l("mdi-check-decagram-outline")]),_:1})]),_:1})),i.verifyStatus?(m(),y("div",se,[s("span",le,[e(a,{class:"mr-2 icon-green"},{default:t(()=>[l("mdi-check")]),_:1}),l("Veirification confirmed")]),e(r,{class:"btn",style:{"font-size":"12px!important","background-color":"#fff!important","border-radius":"10px!important",border:"1px solid rgba(0,0,0,0.25)!important"}},{default:t(()=>[l("Security")]),_:1})])):p("",!0)]),_:1},8,["class"])]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[oe,ie,ae,e(r,{class:"btn mt-6",onClick:o[4]||(o[4]=n=>i.dialogNotification=!0)},{default:t(()=>[l(" Setup "),e(a,null,{default:t(()=>[l("mdi-bell-outline")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[ne,de,re,e(r,{class:"btn mt-6",onClick:o[5]||(o[5]=n=>i.dialogResetPassword=!0)},{default:t(()=>[l(" Reset your password "),e(a,null,{default:t(()=>[l("mdi-sync")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"4",sm:"6",cols:"12"},{default:t(()=>[e(c,{class:"card",style:{"background-color":"#F9FAFB!important"}},{default:t(()=>[e(a,{class:"mb-10"},{default:t(()=>[l("mdi-headphones")]),_:1}),ce,ue,e(r,{class:"btn mt-6"},{default:t(()=>[l(" Contac Support "),e(a,null,{default:t(()=>[l("mdi-headphones")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{modelValue:i.dialogNotification,"onUpdate:modelValue":o[9]||(o[9]=n=>i.dialogNotification=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-notification"},{default:t(()=>[e(a,{class:"close",onClick:o[6]||(o[6]=n=>i.dialogNotification=!1)},{default:t(()=>[l("mdi-close")]),_:1}),me,pe,fe,s("div",_e,[e(r,{class:"btn",style:{"background-color":"#fff!important"},onClick:o[7]||(o[7]=n=>i.dialogNotification=!1)},{default:t(()=>[l("Cancel "),e(a,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(r,{class:"btn",onClick:o[8]||(o[8]=n=>{i.dialogNotification=!1}),style:{border:"none!important"}},{default:t(()=>[l("Save changes "),e(a,null,{default:t(()=>[l("mdi-content-save-outline")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogResetPassword,"onUpdate:modelValue":o[15]||(o[15]=n=>i.dialogResetPassword=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-reset"},{default:t(()=>[e(a,{class:"close",onClick:o[10]||(o[10]=n=>i.dialogResetPassword=!1)},{default:t(()=>[l("mdi-close")]),_:1}),ge,ye,he,e(_,{class:"mt-4"},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[be,e(u,{id:"confirm-password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":i.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:i.show_password?"text":"password","onClick:appendInner":o[11]||(o[11]=n=>i.show_password=!i.show_password),placeholder:"Enter your password"},null,8,["append-inner-icon","type"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[ve,e(u,{id:"confirm-password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":i.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:i.show_password?"text":"password","onClick:appendInner":o[12]||(o[12]=n=>i.show_password=!i.show_password),placeholder:"Enter your password"},null,8,["append-inner-icon","type"])]),_:1})]),_:1}),s("div",we,[e(r,{class:"btn",style:{"background-color":"#fff!important"},onClick:o[13]||(o[13]=n=>i.dialogResetPassword=!1)},{default:t(()=>[l("Cancel "),e(a,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(r,{class:"btn",onClick:o[14]||(o[14]=n=>{i.dialogResetPassword=!1}),style:{border:"none!important"}},{default:t(()=>[l("Reset your password "),e(a,null,{default:t(()=>[l("mdi-sync")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogCompany,"onUpdate:modelValue":o[19]||(o[19]=n=>i.dialogCompany=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-company"},{default:t(()=>[e(a,{class:"close",onClick:o[16]||(o[16]=n=>i.dialogCompany=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-10",style:{width:"30px"}},{default:t(()=>[l("mdi-account-multiple-outline")]),_:1}),Ce,ke,xe,e(_,null,{default:t(()=>[e(d,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[Ve,e(u,{id:"company-name",class:"input",variant:"outlined",elevation:"0",placeholder:"ABC Company"})]),_:1}),e(d,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[Pe,e(u,{id:"company-id",class:"input",variant:"outlined",elevation:"0",placeholder:"0000000000"})]),_:1}),e(d,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[Se,e(u,{id:"city",class:"input",variant:"outlined",elevation:"0",placeholder:"New York"})]),_:1}),e(d,{xl:"6",lg:"6",cols:"12"},{default:t(()=>[Ae,e(u,{id:"country",class:"input",variant:"outlined",elevation:"0",placeholder:"USA"})]),_:1}),e(d,{cols:"12"},{default:t(()=>[Fe,e(u,{id:"address",class:"input",variant:"outlined",elevation:"0",placeholder:"office@abccompany.com"})]),_:1})]),_:1}),s("div",Le,[e(r,{class:"btn",style:{"background-color":"#fff!important"},onClick:o[17]||(o[17]=n=>i.dialogCompany=!1)},{default:t(()=>[l("Cancel "),e(a,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(r,{class:"btn",onClick:o[18]||(o[18]=n=>{i.dialogCompany=!1}),style:{border:"none!important"}},{default:t(()=>[l("Save changes "),e(a,null,{default:t(()=>[l("mdi-content-save-outline")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogConect,"onUpdate:modelValue":o[22]||(o[22]=n=>i.dialogConect=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-connect"},{default:t(()=>[e(a,{class:"close",onClick:o[20]||(o[20]=n=>i.dialogConect=!1)},{default:t(()=>[l("mdi-close")]),_:1}),Be,Ne,Ue,e(_,{class:"mt-6"},{default:t(()=>[e(d,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card divcol astart jcenter"},{default:t(()=>[Re,Ee,e(r,{class:"btn",onClick:o[21]||(o[21]=n=>{i.dialogConect=!1,i.dialogCreditCrad=!0})},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card divcol astart jcenter"},{default:t(()=>[Ie,Me,e(r,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card divcol astart jcenter"},{default:t(()=>[je,ze,e(r,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card divcol astart jcenter"},{default:t(()=>[qe,De,e(r,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1}),e(d,{xl:"4",lg:"4",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card divcol astart jcenter"},{default:t(()=>[We,Te,e(r,{class:"btn"},{default:t(()=>[l("Connect")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogCreditCrad,"onUpdate:modelValue":o[26]||(o[26]=n=>i.dialogCreditCrad=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-credit-card"},{default:t(()=>[e(a,{class:"close",onClick:o[23]||(o[23]=n=>i.dialogCreditCrad=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-6"},{default:t(()=>[l("mdi-credit-card-outline")]),_:1}),He,e(_,{class:"mt-6"},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[Oe,e(u,{id:"card-name",class:"input",variant:"outlined",elevation:"0",placeholder:"Olivia Cero"})]),_:1}),e(d,{cols:"12"},{default:t(()=>[Ge,e(u,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"Card number","append-inner-icon":"mdi-help-circle-outline"},{"prepend-inner":t(()=>[Ke]),_:1})]),_:1}),e(d,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Ye,e(u,{id:"expiration",class:"input",variant:"outlined",elevation:"0",placeholder:"12/24"})]),_:1}),e(d,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[Je,e(u,{id:"cvc",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter CVC","append-inner-icon":"mdi-help-circle-outline"})]),_:1})]),_:1}),s("div",Qe,[e(r,{class:"btn",style:{"background-color":"#fff!important"},onClick:o[24]||(o[24]=n=>i.dialogCreditCrad=!1)},{default:t(()=>[l("Cancel "),e(a,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(r,{class:"btn",onClick:o[25]||(o[25]=n=>{i.dialogCreditCrad=!1,i.walletStatus=!0})},{default:t(()=>[l("Confirm "),e(a,null,{default:t(()=>[l("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialog2fa,"onUpdate:modelValue":o[31]||(o[31]=n=>i.dialog2fa=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-2fa"},{default:t(()=>[e(a,{class:"close",onClick:o[27]||(o[27]=n=>i.dialog2fa=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-6"},{default:t(()=>[l("mdi-shield-outline")]),_:1}),Xe,Ze,e(_,{class:"mt-6"},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[$e,e(u,{id:"card-number",class:"input",variant:"outlined",elevation:"0",placeholder:"+1 (555) 000-0000","append-inner-icon":"mdi-help-circle-outline"},{default:t(()=>[e(E,{modelValue:i.selectedLang,"onUpdate:modelValue":o[28]||(o[28]=n=>i.selectedLang=n),items:i.items,variant:"solo",flat:"","menu-icon":"mdi-chevron-down",class:"select","bg-color":"transparent","hide-details":"",style:{color:"#000","z-index":"99"}},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),s("div",et,[e(r,{class:"btn",style:{"background-color":"#fff!important"},onClick:o[29]||(o[29]=n=>i.dialog2fa=!1)},{default:t(()=>[l("Cancel "),e(a,null,{default:t(()=>[l("mdi-close")]),_:1})]),_:1}),e(r,{class:"btn",onClick:o[30]||(o[30]=n=>{i.dialog2fa=!1,i.dialogPhone=!0})},{default:t(()=>[l("Confirm "),e(a,null,{default:t(()=>[l("mdi-check")]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogPhone,"onUpdate:modelValue":o[33]||(o[33]=n=>i.dialogPhone=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-2fa"},{default:t(()=>[e(a,{class:"close",onClick:o[32]||(o[32]=n=>{i.dialogPhone=!1,i.status2fa=!0})},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-6"},{default:t(()=>[l("mdi-shield-outline")]),_:1}),tt,st,e(_,{class:"mt-6"},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[lt,e(x,{id:"otp",length:4})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogParticipant,"onUpdate:modelValue":o[36]||(o[36]=n=>i.dialogParticipant=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-participant"},{default:t(()=>[e(a,{class:"close",onClick:o[34]||(o[34]=n=>i.dialogParticipant=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-6"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1}),ot,s("div",it,[at,e(r,{class:"btn",style:{border:"none!important"},onClick:o[35]||(o[35]=n=>{i.dialogParticipant=!1,i.dialogParticipantForm=!0})},{default:t(()=>[l("Become a participant")]),_:1})]),s("span",nt,[e(a,null,{default:t(()=>[l("mdi-help-circle-outline")]),_:1}),l(" How to become a participant")]),e(_,{class:"mt-6"},{default:t(()=>[e(d,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card pt-6 pb-6",style:{height:"100%!important"}},{default:t(()=>[dt,rt,e(b,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",ct,[s("span",null,[e(a,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Acces to basic features")]),s("span",null,[e(a,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic reporting + analytics")]),s("span",null,[e(a,{class:"check mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Up to 10 individual users")])])]),_:1})]),_:1}),e(d,{xl:"6",lg:"6",md:"6",cols:"12"},{default:t(()=>[e(c,{class:"card pt-6 pb-6"},{default:t(()=>[ut,mt,e(b,{thickness:2,class:"tertiary mt-4 mb-4",style:{height:"1px",width:"150%",position:"relative",left:"-80px"}}),s("div",pt,[s("span",null,[e(a,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Acces to basic features")]),s("span",null,[e(a,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic reporting + analytics")]),s("span",null,[e(a,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Up to 10 individual users")]),s("span",null,[e(a,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" 20GB individual data")]),s("span",null,[e(a,{class:"check-green mr-2"},{default:t(()=>[l("mdi-check")]),_:1}),l(" Basic chat support")])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogParticipantForm,"onUpdate:modelValue":o[40]||(o[40]=n=>i.dialogParticipantForm=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-form"},{default:t(()=>[e(a,{class:"close",onClick:o[37]||(o[37]=n=>i.dialogParticipantForm=!1)},{default:t(()=>[l("mdi-close")]),_:1}),e(a,{class:"mb-6"},{default:t(()=>[l("mdi-check-decagram-outline")]),_:1}),ft,_t,s("span",gt,[e(a,null,{default:t(()=>[l("mdi-help-circle-outline")]),_:1}),l(" How to become a participant")]),e(_,{class:"mt-6"},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[yt,e(u,{id:"credential",class:"input",variant:"outlined",elevation:"0",placeholder:"Enter credential ID","append-inner-icon":"mdi-help-circle-outline"})]),_:1}),e(d,{cols:"12"},{default:t(()=>[ht,e(u,{id:"password",class:"input",variant:"outlined",elevation:"0","append-inner-icon":i.show_password?"mdi-eye-outline":"mdi-eye-off-outline",type:i.show_password?"text":"password",placeholder:"Enter password","onClick:appendInner":o[38]||(o[38]=n=>i.show_password=!i.show_password)},null,8,["append-inner-icon","type"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(r,{class:"btn",style:{"min-width":"100%!important"},onClick:o[39]||(o[39]=n=>{i.dialogParticipantForm=!1,i.dialogPending=!0})},{default:t(()=>[l(" Verify ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:i.dialogPending,"onUpdate:modelValue":o[42]||(o[42]=n=>i.dialogPending=n),persistent:""},{default:t(()=>[e(c,{class:"card card-dialog-2fa"},{default:t(()=>[e(a,{class:"close",onClick:o[41]||(o[41]=n=>{i.dialogPending=!1,i.verifyStatus=!0})},{default:t(()=>[l("mdi-close")]),_:1}),bt,vt,wt]),_:1})]),_:1},8,["modelValue"])])}const Ut=U(j,[["render",Ct]]);export{Ut as default};
