(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(4),i=c(2),b=(c(14),c(15),c(9)),j=c.n(b),r=c(1),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},d=function(e){var t=e.tabs,c=Object(i.h)().tabId||"",a=t.find((function(e){return c===e.id}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-bpxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:e.id===c?"is-active":"",children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block",children:a?a.content:"Please select a tab"})]})},o=(c(17),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),h=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:" navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top ","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:e,children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:e,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(d,{tabs:o})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(d,{tabs:o})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8fd94b0c.chunk.js.map