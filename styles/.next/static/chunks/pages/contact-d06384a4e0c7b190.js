(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(3308)}])},3308:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var n=s(5893),a=s(7294),c=s(9008),o=s.n(c),r=s(870),i=s.n(r),l=s(3935),u=s(7907),m=s.n(u),d=function(e){let{title:t,message:s,status:a}=e,c="";"success"===a&&(c=m().success),"error"===a&&(c=m().error);let o="".concat(m().notification," ").concat(c);return l.createPortal((0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("h2",{children:t}),(0,n.jsx)("p",{children:s})]}),document.getElementById("notifications"))};async function f(e){let t=await fetch("/api/contact",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),s=await t.json();if(!t.ok)throw Error(s.message||"Something went wrong!")}var h=function(){let e;let[t,s]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[u,m]=(0,a.useState)(),[h,_]=(0,a.useState)();async function g(e){e.preventDefault(),m("pending");try{await f({email:t,name:c,message:r}),m("success"),l(""),s(""),o("")}catch(e){_(e.message),m("error")}}return(0,a.useEffect)(()=>{if("success"===u||"error"===u){let e=setTimeout(()=>{m(null),_(null)},3e3);return()=>clearTimeout(e)}},[u]),"pending"===u&&(e={status:"pending",title:"Sending message...",message:"Your message is on its way!"}),"success"===u&&(e={status:"success",title:"Success!",message:"Message sent successfully!"}),"error"===u&&(e={status:"error",title:"Error!",message:h}),(0,n.jsxs)("section",{className:i().contact,children:[(0,n.jsx)("h1",{children:"How can I help you?"}),(0,n.jsxs)("form",{className:i().form,onSubmit:g,children:[(0,n.jsxs)("div",{className:i().controls,children:[(0,n.jsxs)("div",{className:i().control,children:[(0,n.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,n.jsx)("input",{type:"email",id:"email",required:!0,value:t,onChange:e=>s(e.target.value)})]}),(0,n.jsxs)("div",{className:i().control,children:[(0,n.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,n.jsx)("input",{type:"text",id:"name",required:!0,value:c,onChange:e=>o(e.target.value)})]})]}),(0,n.jsxs)("div",{className:i().control,children:[(0,n.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,n.jsx)("textarea",{id:"message",rows:"5",required:!0,value:r,onChange:e=>l(e.target.value)})]}),(0,n.jsx)("div",{className:i().actions,children:(0,n.jsx)("button",{children:"Send Message"})})]}),e&&(0,n.jsx)(d,{status:e.status,title:e.title,message:e.message})]})},_=function(){return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Contact me"}),(0,n.jsx)("meta",{name:"description",content:"Send me your massages"})]}),(0,n.jsx)(h,{})]})}},870:function(e){e.exports={contact:"contact-form_contact__sS1CV",form:"contact-form_form__ajkJi",controls:"contact-form_controls__H5dmM",control:"contact-form_control__Zez0K",actions:"contact-form_actions__E0bPN"}},7907:function(e){e.exports={notification:"notification_notification___QcdW",success:"notification_success__sPEtA",error:"notification_error__8zRg7"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);