(this["webpackJsonpgame-dikha"]=this["webpackJsonpgame-dikha"]||[]).push([[0],{106:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),o=(t(77),t(19)),i=t(20),s=t(25),m=t(21),u=t(26),d=(t(78),t(36)),g=t(34),p=t(55),E=t.n(p),h=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={name:"",email:"",message:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),E()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),a.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"contact",style:{backgroundColor:"white"}},l.a.createElement("h1",{align:"center",style:{marginTop:50,marginBottom:30}},"Let's Get In Touch!"),l.a.createElement("div",{className:"App ",style:{center:{marginLeft:"50",marginRight:"50"}}},l.a.createElement("form",{id:"contact-form form-inline",style:{width:"500px",align:"center",marginLeft:"30%"},onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",align:"center",className:"form-control",id:"name",value:this.state.name,onChange:function(){return e.onNameChange()}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",align:"center",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:function(){return e.onEmailChange()}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",align:"center",value:this.state.message,onChange:function(){return e.onMessageChange()}})),l.a.createElement("button",{type:"submit",style:{marginLeft:"45%"},className:"btn btn-primary"},"Submit"))),l.a.createElement("div",{className:"row row-no-gutters"},l.a.createElement("div",{class:"col-sm-6",align:"center"},l.a.createElement(g.a,{icon:d.a}),": timeforhosting@gmail.com "),l.a.createElement("div",{class:"col-sm-6",align:"center "},l.a.createElement(g.a,{icon:d.b}),": +91-8826264775")))}}]),a}(l.a.Component),f=(t(28),t(56)),v=t.n(f),b=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"col-13"},l.a.createElement("img",{className:"d-block w-100",src:v.a,alt:"First slide"})))},N=t(12),k=t(114),w=t(10),y=t(57),x=t.n(y),C=t(58),j=t.n(C),L=t(59),O=t.n(L),S=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"col-lg-13 mr-auto text-center mb-5 mb-lg-0"},l.a.createElement(N.a,null,l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:x.a,alt:"First slide"}),l.a.createElement(N.a.Caption,null,l.a.createElement(w.Link,{to:"about"},l.a.createElement(k.a,{className:"btn-danger"},"Explore")))),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:O.a,alt:"Third slide"})," ",l.a.createElement(N.a.Caption,null,l.a.createElement(w.Link,{to:"about"},l.a.createElement(k.a,{className:"btn-danger"},"Explore")))),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:j.a,alt:"Third slide"}),l.a.createElement(N.a.Caption,null,l.a.createElement(w.Link,{to:"contact"},l.a.createElement(k.a,{className:"btn-danger"},"Explore")))))))},T=t(62),F=t.n(T),I=t(63),W=t.n(I),M=function(){return l.a.createElement("div",{className:"gamedikha"},l.a.createElement("header",null,l.a.createElement("div",{className:"overlay"}),l.a.createElement("video",{playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},l.a.createElement("source",{src:F.a,type:"video/mp4"})),l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:W.a}))))},A=t(70),B=t(13),H=(t(106),t(64)),J=t.n(H),P=function(){return l.a.createElement(A.a,{className:"navbar navbar-expand-sm bg-light navbar-dark sticky-top"},l.a.createElement(w.Link,{className:"navbar-brand",to:"gamedikha"},l.a.createElement("img",{src:J.a,height:"50",width:"40"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(w.Link,{className:"nav-link",to:"home"},l.a.createElement(B.b,{to:"/"},"Home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(w.Link,{className:"nav-link",to:"about"},l.a.createElement(B.b,{to:"/about"},"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(w.Link,{className:"nav-link",to:"contact"},l.a.createElement(B.b,{to:"/contact"},"Contact"))))))},R=(t(11),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(S,null),l.a.createElement(b,null),l.a.createElement(h,null)))}}]),a}(n.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(111);c.a.render(l.a.createElement(B.a,null,l.a.createElement(R,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");D?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):G(e)}))}}()},56:function(e,a,t){e.exports=t.p+"static/media/i5.8e4ef122.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/i1.ed13c2a7.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/i2.8b90e339.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/i3.a89d570e.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/game_dikha.041fd575.mp4"},63:function(e,a,t){e.exports=t.p+"static/media/game.483b05d9.png"},64:function(e,a,t){e.exports=t.p+"static/media/the.9c5af105.png"},72:function(e,a,t){e.exports=t(112)},77:function(e,a,t){},78:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.0e98da52.chunk.js.map