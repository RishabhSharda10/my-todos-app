(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{106:function(e,t,n){},149:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(25),a=n.n(c),s=(n(149),n(139)),d=n(47),i=(n(74),n(106),n(242)),r=n(246),l=n(247),j=n(142),h=n(101),b=n(248),u=n(249),x=n(9);var p=function(e){var t=Object(o.useState)(!1),n=Object(d.a)(t,2),c=(n[0],n[1],e.todo),a=e.deleteTodoMethod,s=e.setCompletedMethod;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(i.a.Grid,{style:{textAlign:"center",flex:1},children:Object(x.jsxs)(r.b,{children:[Object(x.jsx)("span",{className:c.Completed?"strikeOut":"",children:c.text}),Object(x.jsx)("span",{children:Object(x.jsx)(l.a,{size:"small",onChange:function(e){s(c)},checkedChildren:Object(x.jsx)(j.a,{}),unCheckedChildren:Object(x.jsx)(h.a,{})})}),Object(x.jsx)("span",{onClick:function(){return a(c.id)},children:Object(x.jsx)(b.a,{style:{marginTop:"9px",fontSize:"18px",color:"red",cursor:"pointer"}})}),Object(x.jsx)("span",{children:Object(x.jsx)(u.a,{style:{marginTop:"9px",fontSize:"18px",color:"gray",cursor:"pointer"}})})]})})})};var O=function(e){var t=e.todos,n=e.deleteTodoMethod;return Object(x.jsx)("div",{children:t.map((function(e,t){return Object(x.jsx)(p,{deleteTodoMethod:n,todo:e},t)}))})},m=n(112),f=n(243),g=n(65),T=n(38),y=n(245),C=n(64),v=n(250);var F=function(e){var t,n=f.a.useForm(),c=Object(d.a)(n,1)[0],a=Object(o.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1],l=e.addTodoMethod;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f.a,(t={name:"basic",form:c,initialValues:{remember:!0},layout:"horizontal",onFinish:function(e){console.log("Success:",e.todoName),l({text:i,completed:!1}),r(""),c.resetFields()},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"},Object(m.a)(t,"layout","horizontal"),Object(m.a)(t,"children",Object(x.jsxs)(g.a,{gutter:10,children:[Object(x.jsx)(T.a,{xs:24,sm:24,md:12,lg:15,xl:15,children:Object(x.jsx)(f.a.Item,{wrapperCol:{offset:8,span:24},name:"todoName",rules:[{required:!0,message:"This feild is required"}],children:Object(x.jsx)(y.a,{name:"content",placeholder:"What needs to be done?",onChange:function(e){r(e.target.value)}})})}),Object(x.jsx)(T.a,{xs:24,sm:24,md:5,lg:5,xl:4,children:Object(x.jsx)(f.a.Item,{children:Object(x.jsxs)(C.a,{type:"primary",htmlType:"submit",block:!0,children:[Object(x.jsx)(v.a,{}),"Add Todo"]})})})]})),t))})},k=n(73),M=n.n(k),S=n(244),w=n(240),z=n(241),A=S.a.Title,I=w.a.Header,N=w.a.Footer,L=w.a.Content;var q=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){M.a.get("http://localhost:5000/todos/").then((function(e){c(e.data)}))}),[n]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(I,{children:Object(x.jsx)(A,{align:"center",style:{color:"#fff"},children:"My Todo App"})}),Object(x.jsx)(L,{children:Object(x.jsxs)(g.a,{justify:"center",align:"middle",gutter:[0,20],className:"todos-container",children:[Object(x.jsx)(T.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18},children:Object(x.jsx)(z.a,{title:"Add Todo",subTitle:"To add a todo, just fill the form below and click in add todo."})}),Object(x.jsx)(T.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18},children:Object(x.jsx)(i.a,{title:"Create a new todo",children:Object(x.jsx)(F,{addTodoMethod:function(e){M.a.post("http://localhost:5000/todos/",e).then((function(e){var t=[].concat(Object(s.a)(n),[e.data]);c(t)}))}})})}),Object(x.jsx)(T.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18},children:Object(x.jsx)(i.a,{title:"Todo List",children:Object(x.jsx)(O,{deleteTodoMethod:function(e){M.a.delete("http://localhost:5000/todos/"+e+"/").then((function(t){var o=n.filter((function(t,n){return t.id!==e}));c(o)}))},todos:n})})})]})}),Object(x.jsx)(N,{align:"right",style:{background:"azure",position:"fixed",bottom:"0px",width:"100%",color:"#000"},children:"My Todo App \xa92021 Created by Rishabh"})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};a.a.render(Object(x.jsx)(q,{}),document.getElementById("root")),B()}},[[238,1,2]]]);
//# sourceMappingURL=main.99e7979d.chunk.js.map