(this["webpackJsonpreact-pages"]=this["webpackJsonpreact-pages"]||[]).push([[0],{156:function(e,t,c){},157:function(e,t,c){},250:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(42),s=c.n(i),r=(c(156),c(157),c(46)),l=c(21),j=c(51),o=c(32),d=c(81),b=c(44),h=c(254),O=c(255),u=c(49),x=c(6),p=function(){var e=Object(l.f)(),t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=(c[0],c[1]),i=Object(n.useState)([]),s=Object(o.a)(i,2),p=s[0],m=s[1];Object(n.useEffect)((function(){fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php").then((function(e){return e.json()})).then((function(e){localStorage.setItem("playsList",JSON.stringify(e)),m(e)})),a(!0)}),[]);return Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{justify:"space-around",align:"middle",children:Object(x.jsxs)(b.a,{span:12,children:[Object(x.jsx)("h1",{id:"mainHeader",children:"Play Browser"}),Object(x.jsxs)(h.a,{name:"normal_login",className:"login-form",onFinish:function(t){var c=[];if(t.title){var n=p.filter((function(e){return e.title.includes(t.title)}));console.log(n),c.push.apply(c,Object(j.a)(n))}localStorage.setItem("playsList",JSON.stringify(c)),e("/play-list")},children:[Object(x.jsx)(h.a.Item,{name:"title",children:Object(x.jsx)(O.a,{placeholder:"Title"})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsxs)(d.a,{justify:"space-around",children:[Object(x.jsx)(b.a,{span:8,children:Object(x.jsx)(u.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Show Matching Plays"})}),Object(x.jsx)(b.a,{span:8,offset:8,children:Object(x.jsx)(r.b,{to:"/play-list",children:Object(x.jsx)(u.a,{type:"primary",htmlType:"button",className:"login-form-button",children:"Show All Plays"})})})]})}),Object(x.jsx)("div",{id:"credit",children:"Image retrieved from NIKON CORPORATION, NIKON D750 Published on December 26, 2017"})]})]})})})},m=c(52),f=c(252),y=c(88),g=c(62),v=c(253),k=c(256),I=c(258),S=c(259),w=c(28),N=c.n(w),C=(c(36),f.a.Header),T=f.a.Content,H=y.a.Option,F=function(){var e=Object(l.f)(),t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(JSON.parse(localStorage.getItem("playsList"))),p=Object(o.a)(s,2),m=p[0],w=p[1],F=Object(n.useState)(JSON.parse(localStorage.getItem("playsList"))),M=Object(o.a)(F,2),D=M[0],B=M[1],J=Object(n.useState)([]),P=Object(o.a)(J,2),A=P[0],L=P[1],z=h.a.useForm(),E=Object(o.a)(z,1)[0],G=Object(n.useState)(!0),K=Object(o.a)(G,2),Y=K[0],R=K[1],U=function(){R(!1)};Object(n.useEffect)((function(){m||fetch("https://randyconnolly.com/funwebdev/3rd/api/shakespeare/list.php").then((function(e){return e.json()})).then((function(e){localStorage.setItem("playsList",JSON.stringify(e)),w(e),B(e)})),i(!0)}),[m]);var _=[{title:Object(x.jsx)("a",{id:"title",href:"#",onclick:m.sort((function(e,t){return e.title>t.title?1:-1})),children:"Title"}),dataIndex:"title",key:"title"},{title:Object(x.jsx)("a",{id:"year",href:"#",children:"Year"}),dataIndex:"likelyDate"},{title:"",dataIndex:"address",render:function(t,c,n){return Object(x.jsxs)("div",{children:[Object(x.jsx)(u.a,{type:"primary",icon:Object(x.jsx)(I.a,{}),onClick:function(){return function(e){L((function(t){return[].concat(Object(j.a)(t),[e])})),w(m.filter((function(t){return t.id!==e.id})))}(c)}}),Object(x.jsx)(u.a,{onClick:function(){return function(t){localStorage.setItem("playDetails",JSON.stringify(t)),e("/play-details/"+t.id)}(c)},children:" View "})]})}}],V=[{title:"Title",dataIndex:"title",key:"title"},{title:"Year",dataIndex:"likelyDate"},{title:"",dataIndex:"address",render:function(e,t,c){return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{type:"primary",icon:Object(x.jsx)(S.a,{}),onClick:function(){return function(e){w((function(t){return[e].concat(Object(j.a)(t))})),L(A.filter((function(t){return t.id!==e.id})))}(t)}})})}}];return Object(x.jsx)("div",{children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(C,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(x.jsxs)(g.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(x.jsxs)(g.a.Item,{children:[" ",Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{src:"../logo192.png",alt:"home",width:"30px",height:"30px"})})]},"1"),Object(x.jsx)(g.a.Item,{children:"About"},"2")]})}),Object(x.jsxs)(N.a,{show:Y,onHide:U,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Modal title"})}),Object(x.jsx)(N.a.Body,{children:"Github: https://github.com/lcorn26/web3_asg1.git Group Members: Liam Cormwall, Meet Suthar, Yuan zhou Technology used: React, NPM, Modals, css= @ant-design/icons"}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(u.a,{variant:"secondary",onClick:U,children:"Close"}),Object(x.jsx)(u.a,{variant:"primary",children:"Understood"})]})]}),Object(x.jsx)(T,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(b.a,{span:8,children:[Object(x.jsx)("button",{class:"btn-minimize",onClick:function(){return R(!Y)}}),Y?Object(x.jsxs)("div",{id:"fav",className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(x.jsx)("h1",{children:"Favourites"}),a?Object(x.jsx)(v.a,{pagination:!1,dataSource:A,columns:V}):null]}):null]}),Object(x.jsx)(b.a,{span:8,children:Object(x.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(x.jsx)("h1",{children:"Play Filters"}),Object(x.jsx)(k.a,{children:Object(x.jsxs)(h.a,{layout:{labelCol:{span:4},wrapperCol:{span:14}},onFinish:function(e){console.log(e);var t=[];if(e.title){var c=D.filter((function(t){return t.title.includes(e.title)}));console.log(c),t.push(c)}if(e.before&&e.after){var n=D.filter((function(t){return+t.likelyDate<+e.before&&+t.likelyDate>+e.after}));console.log(n),t.push.apply(t,Object(j.a)(n))}if(e.after&&!e.before){var a=D.filter((function(t){return+t.likelyDate>+e.after}));console.log(a),t.push.apply(t,Object(j.a)(a))}if(!e.after&&e.before){var i=D.filter((function(t){return+t.likelyDate<+e.before}));console.log(i),t.push.apply(t,Object(j.a)(i))}if(e.genre){var s=D.filter((function(t){return t.genre===e.genre}));console.log(s),t.push.apply(t,Object(j.a)(s))}console.log(t),w(t)},form:E,children:[Object(x.jsx)(h.a.Item,{name:"title",label:"Title",children:Object(x.jsx)(O.a,{placeholder:""})}),Object(x.jsx)(h.a.Item,{label:"Year",children:Object(x.jsxs)(d.a,{gutter:8,children:[Object(x.jsx)(b.a,{span:24,children:Object(x.jsx)(h.a.Item,{name:"before",label:"Before",children:Object(x.jsx)(O.a,{})})}),Object(x.jsx)(b.a,{span:24,children:Object(x.jsx)(h.a.Item,{name:"after",label:"After",children:Object(x.jsx)(O.a,{})})})]})}),Object(x.jsx)(h.a.Item,{name:"genre",label:"Genre",children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(H,{value:"comedy",children:"Comedy"}),Object(x.jsx)(H,{value:"tragedy",children:"Tragedy"}),Object(x.jsx)(H,{value:"history",children:"History"})]})}),Object(x.jsxs)(h.a.Item,{layout:{wrapperCol:{offset:8,span:16}},children:[Object(x.jsx)(u.a,{type:"primary",htmlType:"submit",children:"Filter"}),Object(x.jsx)(u.a,{htmlType:"button",onClick:function(){E.resetFields()},children:"Clear"})]})]})})]})}),Object(x.jsxs)(b.a,{span:8,children:[" ",Object(x.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(x.jsx)("h1",{children:"List / Matches"}),a?Object(x.jsx)(v.a,{pagination:!1,dataSource:m,columns:_}):null]})]})]})})]})})};function M(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Favourites"})})}var D=c(122),B=c(257),J=f.a.Header,P=f.a.Content,A=y.a.Option,L=D.a.TabPane,z=function(){var e,t=Object(l.g)().id,c=Object(n.useState)(!1),a=Object(o.a)(c,2),i=(a[0],a[1]),s=Object(n.useState)(!1),j=Object(o.a)(s,2),O=j[0],p=j[1],v=JSON.parse(localStorage.getItem("playDetails"));Object(n.useEffect)((function(){fetch("https://randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+t).then((function(e){return e.json()})).then((function(e){p(e),i(!0)}))}),[t]);var I=Object(n.useState)(!0),S=Object(o.a)(I,2),w=S[0],C=S[1],T=function(){return C(!1)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)(N.a,{show:w,onHide:T,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Modal title"})}),Object(x.jsx)(N.a.Body,{children:"I will not close if you click outside me. Don't even try to press escape key."}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(u.a,{variant:"secondary",onClick:T,children:"Close"}),Object(x.jsx)(u.a,{variant:"primary",children:"Understood"})]})]})}),Object(x.jsxs)(f.a,{children:[Object(x.jsx)(J,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(x.jsxs)(g.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(x.jsxs)(g.a.Item,{children:[" ",Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{src:"../logo192.png",alt:"home",width:"30px",height:"30px"})})]},"1"),Object(x.jsx)(g.a.Item,{children:Object(x.jsx)(r.b,{to:function(){C(!0)},children:"About"})},"2")]})}),Object(x.jsxs)(N.a,{show:w,onHide:T,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Modal title"})}),Object(x.jsx)(N.a.Body,{children:"Github: https://github.com/lcorn26/web3_asg1.git Group Members: Liam Cormwall, Meet Suthar, Yuan zhou Technology used: React, NPM, Modals, css= @ant-design/icons"}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(u.a,{variant:"secondary",onClick:T,children:"Close"}),Object(x.jsx)(u.a,{variant:"primary",children:"Understood"})]})]}),Object(x.jsx)(P,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:O.message?Object(x.jsx)(d.a,{children:Object(x.jsx)(b.a,{span:24,children:Object(x.jsx)(k.a,{children:Object(x.jsx)(m.a,{description:O.message})})})}):Object(x.jsxs)(d.a,{gutter:8,children:[Object(x.jsx)(b.a,{span:8,children:Object(x.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)("h1",{children:O.title}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(y.a,{value:"1",children:Object(x.jsx)(A,{value:"1",children:"ACT 1"})})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(y.a,{value:"1",children:Object(x.jsx)(A,{value:"1",children:"SCENE 1"})})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(y.a,{value:"1",children:Object(x.jsx)(A,{value:"1"})})})]})]})})}),Object(x.jsx)(b.a,{span:16,children:Object(x.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(x.jsx)(k.a,{children:Object(x.jsxs)(D.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(x.jsxs)(L,{tab:"Details",children:[Object(x.jsx)("p",{children:v.title}),Object(x.jsxs)("p",{children:["Genre: ",v.genre]}),Object(x.jsxs)("p",{children:["Wiki: ",v.wiki]}),Object(x.jsxs)("p",{children:["Shakespear Org: ",v.shakespeareOrg]}),Object(x.jsxs)("p",{children:["Synopsis: ",v.synopsis]}),Object(x.jsxs)("p",{children:["gutenberg: ",v.gutenberg]})]},"1"),Object(x.jsx)(L,{tab:"Characters",children:Object(x.jsx)(B.b,{dataSource:O.persona,renderItem:function(e){return Object(x.jsx)(B.b.Item,{extra:Object(x.jsx)("p",{children:e.desc}),children:e.player})}})},"2"),Object(x.jsxs)(L,{tab:"Text",children:[Object(x.jsx)("h1",{children:O.title}),null===O||void 0===O||null===(e=O.acts)||void 0===e?void 0:e.map((function(e,t){var c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:e.name}),null===(c=e.scenes)||void 0===c?void 0:c.map((function(e,t){var c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("hr",{}),Object(x.jsx)("p",{children:Object(x.jsx)("b",{children:e.title})}),Object(x.jsx)("p",{children:e.stageDirection}),null===(c=e.speeches)||void 0===c?void 0:c.map((function(e,t){var c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:Object(x.jsx)("b",{children:e.speaker})}),null===(c=e.lines)||void 0===c?void 0:c.map((function(e,t){return Object(x.jsx)("p",{children:e})}))]})}))]})}))]})}))]},"3")]})})})})]})})]})]})};function E(){return Object(x.jsx)("div",{children:Object(x.jsx)(r.a,{basename:window.location.pathname||"",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:p,element:Object(x.jsx)(p,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/play-list",component:F,element:Object(x.jsx)(F,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/play-details/:id",component:z,element:Object(x.jsx)(z,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/favourites",component:M,element:Object(x.jsx)(M,{})}),Object(x.jsx)(l.a,{exact:!0,path:"*",component:m.a,element:Object(x.jsx)(m.a,{})})]})})})}var G=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(E,{})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.e84914f3.chunk.js.map