(this["webpackJsonpmy-pokemon"]=this["webpackJsonpmy-pokemon"]||[]).push([[9],{500:function(e,n,a){},524:function(e,n,a){},525:function(e,n,a){e.exports=a.p+"static/media/pokemon-logo.ddd5084d.png"},564:function(e,n,a){"use strict";a.r(n);var t=a(157),l=a(158),o=a(160),c=a(159),m=a(161),r=a(1),i=a.n(r),s=a(49),u=(a(500),a(524),function(e){function n(e){return Object(t.a)(this,n),Object(o.a)(this,Object(c.a)(n).call(this,e))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},i.a.createElement("a",{className:"navbar-brand",href:"/my-pokemon/"},i.a.createElement("img",{src:a(525)})),i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"/my-pokemon/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"/my-pokemon/list/0"},"Pokemon List")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"/my-pokemon/owned"},"My Pokemon"))))}}]),n}(i.a.Component)),p=i.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,565))})),d=i.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,560))})),f=i.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,561))})),h=i.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,562))})),b=[{path:"/",exact:!0,name:"Pokemon Home",component:p},{path:"/owned",exact:!0,name:"Pokemon Owned",component:d},{path:"/owned/detail/:id",exact:!0,name:"Pokemon Owned",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,563))}))},{path:"/list/:page",exact:!0,name:"Pokemon List",component:f},{path:"/detail/:id",exact:!0,name:"Pokemon Detail",component:h}],k=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,m=new Array(l),r=0;r<l;r++)m[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(m)))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"app-body"},i.a.createElement("main",{className:"main"},i.a.createElement("div",{style:{overflowX:"hidden"}},i.a.createElement(u,null),i.a.createElement(r.Suspense,{fallback:this.loading()},i.a.createElement(s.c,null,b.map((function(e,n){return e.component?i.a.createElement(s.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return i.a.createElement(e.component,n)}}):null}))))))))}}]),n}(r.Component);n.default=k}}]);
//# sourceMappingURL=9.96d5b1e1.chunk.js.map