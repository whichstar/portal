(function(e){function t(t){for(var s,a,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],r[a]&&d.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r={app:0},o=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-1c90cf17":"7223258d","chunk-2c9c92d9":"9eab99b1","chunk-2d0d63f1":"c7d5044d"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1c90cf17":1,"chunk-2c9c92d9":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var s="static/css/"+({}[e]||e)+"."+{"chunk-1c90cf17":"4a76f2d0","chunk-2c9c92d9":"9d153613","chunk-2d0d63f1":"31d6cfe0"}[e]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===s||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){a[e]=0}));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise(function(t,n){s=r[e]=[t,n]});t.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,n[1](o)}r[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"337d":function(e,t,n){},"36c1":function(e,t,n){},"39cc":function(e,t){e.exports="data:image/png;base64,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"},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"558a":function(e,t,n){"use strict";var s=n("337d"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),c={},i=Object(o["a"])(c,a,r,!1,null,null,null),l=i.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",{staticStyle:{height:"100vh"}},[s("el-aside",{attrs:{width:"auto"}},[s("div",{staticClass:"brand",style:{width:e.isCollapse?"64px":"256px"}},[s("img",{staticClass:"brand__logo",attrs:{src:n("39cc"),alt:"logo"}}),s("h1",{staticClass:"brand__text",style:{opacity:e.isCollapse?0:1}},[e._v("\n        高信科技\n      ")])]),s("el-menu",{attrs:{router:"","default-active":e.$route.path,"unique-opened":"","background-color":"#001529","text-color":"rgba(255, 255, 255, 0.65)","active-text-color":"#ffd04b",collapse:e.isCollapse}},[e._l(e.navList,function(t){return[t.children?s("el-submenu",{key:t.name,attrs:{index:t.name}},[s("template",{slot:"title"},[s("i",{class:"el-icon-"+t.icon}),s("span",[e._v(e._s(t.title))])]),e._l(t.children,function(t){return s("el-menu-item",{key:t.name,attrs:{index:t.path}},[s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])})],2):s("el-menu-item",{key:t.name,attrs:{index:t.path}},[s("i",{class:"el-icon-"+t.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]})],2)],1),s("el-container",[s("el-header",{staticClass:"header",attrs:{height:"64px"}},[s("i",{staticClass:"header__button",class:[e.isCollapse?"el-icon-3rd-indent":"el-icon-3rd-outdent"],on:{click:function(t){e.isCollapse=!e.isCollapse}}})]),s("el-main",[s("keep-alive",[e.$route.meta.keepAlive?s("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():s("router-view")],1)],1)],1)},f=[],b=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),p=n("2f62");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(b["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={name:"home",data:function(){return{isCollapse:!1}},computed:m({},Object(p["b"])(["navList"])),created:function(){this.$store.dispatch("FilterNavList",this.user)},methods:{logout:function(){this.$store.dispatch("Logout").then(function(){location.reload()})}}},h=A,v=(n("558a"),n("b5d4"),Object(o["a"])(h,d,f,!1,null,"1b6cd5c4",null)),g=v.exports;s["default"].use(u["a"]);var k=new u["a"]({mode:"hash",base:"",routes:[{path:"/",component:g,children:[{path:"/",name:"home",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",meta:{title:"概览"},component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}},{path:"/analysis",meta:{title:"客户通道统计",keepAlive:!0},component:function(){return n.e("chunk-2c9c92d9").then(n.bind(null,"9aef"))}},{path:"/sms-detail",meta:{title:"短信发送查询",keepAlive:!0},component:function(){return n.e("chunk-1c90cf17").then(n.bind(null,"15eb"))}}]}]}),y={state:{fullNavList:[{name:"dashboard",title:"概览",icon:"3rd-dashboard",path:"/dashboard"},{name:"user",title:"用户管理",icon:"3rd-user",children:[{name:"analysis",title:"客户通道统计",path:"/analysis"},{name:"smsDetail",title:"短信发送查询",path:"/sms-detail"}]}],navList:[]},getters:{navList:function(e){return e.navList}},mutations:{FILTER_NAV_LIST:function(e,t){e.navList=e.fullNavList}},actions:{FilterNavList:function(e,t){var n=e.commit;n("FILTER_NAV_LIST",t)}}};s["default"].use(p["a"]);var x=new p["a"].Store({state:{},mutations:{},actions:{},modules:{nav:y}}),O=n("9483");Object(O["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f5df");var L=n("5c96"),S=n.n(L),w=(n("c69f"),n("ed2c"),{install:function(){k.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title+" - 高信科技"),n()})}}),C=n("bc3a"),z=n.n(C),F=n("a7fe"),P=n.n(F),E={install:function(){s["default"].use(P.a,z.a),s["default"].axios.defaults.baseURL="http://api.analysis.gaoxintec.com",s["default"].axios.defaults.timeout=6e4,s["default"].axios.defaults.headers.common["Content-Type"]="application/json",s["default"].axios.defaults.headers.common["Accept"]="application/json",s["default"].axios.defaults.headers.common["X-App-Version"]="AYHT-Analysis/1.0.0",s["default"].axios.interceptors.response.use(function(e){return e},function(e){return L["Message"].error(e.response&&e.response.data.message||"操作失败"),Promise.reject(e)})}},U=n("c1df"),K=n.n(U),N={install:function(){Object.defineProperties(s["default"].prototype,{$moment:{value:K.a}}),K.a.locale("zh-cn")}};s["default"].config.productionTip=!1,s["default"].use(S.a,{size:"small"}),s["default"].use(w),s["default"].use(E),s["default"].use(N),new s["default"]({router:k,store:x,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(e,t,n){},b5d4:function(e,t,n){"use strict";var s=n("36c1"),a=n.n(s);a.a},c69f:function(e,t,n){},ed2c:function(e,t,n){}});
//# sourceMappingURL=app.71913407.js.map