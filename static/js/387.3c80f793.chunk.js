"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n,a=r(861),c=r(885),u=r(757),i=r.n(u),s=r(739),o=r(791),p=r(390),f=r(854),l=r(168),d=r(444).ZP.ul(n||(n=(0,l.Z)(["\ndisplay: grid; \ngrid-template-columns: repeat(3, 1fr); \ngrid-template-rows: repeat(4, 1fr); \ngrid-column-gap: 10px;\ngrid-row-gap: 10px; \nlist-style: none;\n"]))),h=r(184),v=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)([]),r=(0,c.Z)(t,2),n=r[0],u=r[1],l=(0,o.useState)(!1),v=(0,c.Z)(l,2),g=v[0],m=v[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,p.zv)(e);case 4:r=t.sent,u(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,h.jsxs)("div",{children:[g&&(0,h.jsx)(f.a,{}),(0,h.jsx)(d,{children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"200px",height:"350px",src:e.profile_path?"https://image.tmdb.org/t/p/w500"+e.profile_path:"https://via.placeholder.com/960x240",alt:e.original_name}),(0,h.jsx)("p",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}},854:function(e,t,r){r.d(t,{a:function(){return c}});r(791);var n=r(243),a=r(184),c=function(){return(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}},390:function(e,t,r){r.d(t,{Hg:function(){return s},TP:function(){return p},V0:function(){return o},tx:function(){return l},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(388),i="d88f0de56ca3b9f50c6b6c569b5a8f7a";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.3c80f793.chunk.js.map