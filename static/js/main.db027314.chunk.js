(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(14),i=c.n(r),a=(c(29),c(21)),s=(c(30),c(8)),l=c(1);function j(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(window.innerWidth),j=Object(a.a)(i,2),o=j[0],b=j[1];return Object(n.useEffect)((function(){var e=function(){b(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(l.jsxs)("nav",{children:[(c||o>600)&&Object(l.jsxs)("ul",{className:"liste",children:[Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("li",{className:"items",children:"Accueil"})}),Object(l.jsx)(s.b,{to:"/ecrire",children:Object(l.jsx)("li",{className:"items",children:"\xc9crire"})}),Object(l.jsx)(s.b,{to:"/contact",children:Object(l.jsx)("li",{className:"items",children:"Contact"})})]}),Object(l.jsx)("button",{onClick:function(){r(!c)},className:"btn",children:"BTN"})]})}var o=c(13);c(37),c(38);function b(e){return Object(l.jsx)("div",{className:"card",children:e.children})}var u=c(9),d=c(24),h={articles:[]};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDARTICLE":var c=Object(d.a)(e.articles);return c.unshift(t.payload),{articles:c};case"LOADARTICLES":return Object(o.a)(Object(o.a)({},e),{},{articles:t.payload})}return e},x=c(44);function m(){var e=Object(u.c)((function(e){return Object(o.a)({},e.articleReducer)})).articles,t=Object(u.b)();return Object(n.useEffect)((function(){0===e.length&&t((function(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e({type:"LOADARTICLES",payload:t})}))}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"home-title",children:"Tous les articles"}),Object(l.jsx)("div",{className:"container-cards",children:e.map((function(e){return Object(l.jsxs)(b,{children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)(s.b,{to:{pathname:"articles/".concat(e.title.replace(/\s+/g,"-").trim()),state:{title:e.title,body:e.body}},children:"Lire l'article"})]},Object(x.a)())}))})]})}c(39);function f(){return Object(l.jsxs)("div",{className:"container-contact",children:[Object(l.jsx)("h1",{children:"Contactez-nous"}),Object(l.jsx)("p",{children:"Par mail : blogreact@gmail.com"}),Object(l.jsx)("p",{children:"Par t\xe9l\xe9phone : XX-XX-XX"}),Object(l.jsx)("p",{children:"Rejoignez-nous sur les r\xe9seaux"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Facebook"}),Object(l.jsx)("li",{children:"Twitter"}),Object(l.jsx)("li",{children:"YouTube"})]})]})}c(40);function p(){var e=Object(u.b)(),t=Object(n.useRef)([]),c=function(e){e&&!t.current.includes(e)&&t.current.push(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title-form",children:"\xc9crivez un article"}),Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var n={title:t.current[0].value,body:t.current[1].value};e({type:"ADDARTICLE",payload:n}),c.target.reset()},className:"container-form",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Titre"}),Object(l.jsx)("input",{ref:c,type:"text",id:"title",placeholder:"Entre votre nom",className:"inp-title"}),Object(l.jsx)("label",{htmlFor:"article",children:"Votre article"}),Object(l.jsx)("textarea",{ref:c,id:"article",placeholder:"Votre article",className:"inp-body"}),Object(l.jsx)("button",{children:"Envoyez l'article"})]})]})}function v(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p,{})})}var g=c(3);c(41);function y(){var e=Object(g.f)();return console.log(e),Object(l.jsxs)("div",{className:"article-content",children:[Object(l.jsxs)("h2",{children:["Votre article : ",e.state.title]}),Object(l.jsx)("p",{children:e.state.body})]})}var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.a,{basename:"/blog-react-test",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{path:"/",exact:!0,component:m}),Object(l.jsx)(g.a,{path:"/ecrire",exact:!0,component:v}),Object(l.jsx)(g.a,{path:"/contact",exact:!0,component:f}),Object(l.jsx)(g.a,{path:"/articles/:slug",exact:!0,component:y})]})]})})},w=c(17),E=c(23),A=Object(w.b)({articleReducer:O}),L=Object(w.c)(A,Object(w.a)(E.a));i.a.render(Object(l.jsx)(u.a,{store:L,children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.db027314.chunk.js.map