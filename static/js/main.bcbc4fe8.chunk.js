(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{187:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(20),i=n.n(a),d=(n(97),n(91)),r=n(53),s=n(11);var u=function(t){var e=Object(o.useState)(""),n=Object(r.a)(e,2),c=n[0],a=n[1],i=t.addTodoMethod;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i({title:c,completed:!1}),a("")},children:[Object(s.jsx)("input",{value:c,onChange:function(t){a(t.target.value)}}),Object(s.jsx)("button",{children:"Add Todo"})]})})},j=n(192),l=n(190);n(99),n(62);var b=function(t){j.a.Header,j.a.Footer,j.a.Sider,j.a.Content;var e={width:"33%",textAlign:"center"},n=t.todos;return Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{title:"Card Title",children:n.map((function(t,n){return Object(s.jsx)(l.a.Grid,{style:e,children:t.title},n)}))})})},h=n(60),f=n.n(h);var O=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){f.a.get("http://localhost:5000/todos/").then((function(t){c(t.data)}))}),[n]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(u,{addTodoMethod:function(t){f.a.post("http://localhost:5000/todos/",t).then((function(t){var e=[].concat(Object(d.a)(n),[t.data]);c(e)}))}}),Object(s.jsx)(b,{todos:n})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),p()},62:function(t,e,n){},97:function(t,e,n){}},[[187,1,2]]]);
//# sourceMappingURL=main.bcbc4fe8.chunk.js.map