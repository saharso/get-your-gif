(this["webpackJsonpget-your-gif"]=this["webpackJsonpget-your-gif"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),c=a(22).a,i=n.a.createContext({state:c,dispatch:void 0})},,,function(e,t,a){"use strict";var r;!function(e){e.SEARCH_QUERY="searchQuery",e.UPDATE_HISTORY="updateHistory",e.ADD_TO_FAVORITES="addToFavorites",e.REMOVE_FROM_FAVORITES="removeFromFavorites"}(r||(r={})),t.a=r},function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var r=a(7),n=a(23);function c(e){localStorage.setItem("favorites",JSON.stringify(Object(n.a)(e.favoritesMap)))}function i(){var e=JSON.parse(localStorage.getItem("favorites")||"[]");if(!Array.isArray(e))return new Map;var t=new Map;return e.forEach((function(e){return t.set(e.id,e)})),t}function s(e,t){var a;return{add:function(){return(a=Object(r.a)({},e)).favoritesMap.set(t.payload.id,t.payload),t.payload.isFavorite=!0,c(a),a},remove:function(){return(a=Object(r.a)({},e)).favoritesMap.delete(t.payload.id),t.payload.isFavorite=!1,c(a),a},getFavoritesFromLocalStorage:i}}},,,,,,function(e,t,a){"use strict";a(39);var r=a(1);t.a=function(){return Object(r.jsx)("div",{className:"ui-spinner","aria-label":"loading"})}},,function(e,t,a){"use strict";var r=a(14),n={searchQuery:"",favoritesMap:new Map(Object(r.b)()),searchHistory:[]};t.a=n},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(9);function n(e){return Array.from(e,(function(e){var t=Object(r.a)(e,2);t[0];return t[1]}))}},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),i=a.n(c),s=(a(30),a(9)),o=(a(31),a(11)),u=(a(32),a(19)),d=a.n(u),l=a(10),f=a(1),j=function(e){var t=e.title,a=e.routes,n=Object(r.useContext)(l.a),c=n.state,i=(n.dispatch,Object(r.useState)(0)),u=Object(s.a)(i,2),j=u[0],p=u[1];return Object(f.jsxs)("header",{className:"gyg-header",children:[Object(f.jsxs)("div",{className:"app-header__top",children:[Object(f.jsx)("img",{className:"app-header__logo",src:"https://media1.giphy.com/media/3o7ZeQBhbVGnELP4bK/giphy.gif?cid=dce653c9igqtyhssh9441s2osnslbpbvh6cgms5cvvqsaa8j&rid=giphy.gif&ct=g",alt:"logo"}),Object(f.jsxs)("div",{className:"app-header__text space-endGap-big",children:[Object(f.jsx)("h1",{className:"app-header__title",children:t}),Object(f.jsx)("p",{className:"app-header__caption",children:"Search Millions of Gifs!"})]}),Object(f.jsx)("div",{className:"layout-fillEmpty",id:"portal-element"})]}),Object(f.jsx)("nav",{className:"app-header__menu",children:a&&a.map((function(e,t){return Object(f.jsxs)(o.b,{className:d()("app-header__menuItem",{"is-active":t===j}),to:e.to,onClick:function(){p(t)},children:[e.title," ",(a=e.to,"/favorites"===a?" (".concat(c.favoritesMap.size,")"):"")]},e.to);var a}))})]})},p=a(2),b=a(20),h=function(e){var t=e.routes;return Object(f.jsx)("main",{className:"gyg-main layout-scrollY",children:Object(f.jsx)(p.c,{children:t&&t.map((function(e){var t=e.component;return Object(f.jsx)(p.a,{exact:!0,path:e.to,render:function(){return Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.a,{})}),children:Object(f.jsx)(t,{})})}},e.to)}))})})},O=[{title:"Search Gifs",to:"/",component:n.a.lazy((function(){return a.e(3).then(a.bind(null,56))}))},{title:"Favorites",to:"/favorites",component:n.a.lazy((function(){return a.e(4).then(a.bind(null,54))}))}],v=a(7),m=a(13),g=a(14),y=new Set;var x=function(e,t){switch(t.type){case m.a.SEARCH_QUERY:return Object(v.a)(Object(v.a)({},e),{},{searchQuery:t.payload});case m.a.ADD_TO_FAVORITES:return Object(g.a)(e,t).add();case m.a.REMOVE_FROM_FAVORITES:return Object(g.a)(e,t).remove();case m.a.UPDATE_HISTORY:return function(e,t){var a=Object(v.a)({},e);return t.payload?(y.add(t.payload),a.searchHistory=Array.from(y),a):a}(e,t);default:throw new Error}};var _=function(){var e=Object(r.useReducer)(x,l.b),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(f.jsx)(l.a.Provider,{value:{state:a,dispatch:n},children:Object(f.jsx)(o.a,{basename:"/",children:Object(f.jsxs)("div",{className:"gyg-wrapper",children:[Object(f.jsx)(j,{title:"Get your Gif",routes:O}),Object(f.jsx)(h,{routes:O})]})})})},S=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,55)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),S()}],[[40,1,2]]]);
//# sourceMappingURL=main.750d02c6.chunk.js.map