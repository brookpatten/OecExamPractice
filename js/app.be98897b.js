(function(e){function n(n){for(var r,u,c=n[0],i=n[1],l=n[2],f=0,s=[];f<c.length;f++)u=c[f],o[u]&&s.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-108b9b93":"99032e6e","chunk-2b948a83":"c8539e2a","chunk-2d0c4303":"3054e333","chunk-2d22c303":"f9aef47e","chunk-346f0b33":"f9ed8b83","chunk-4e8d4066":"fe27bb8e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-108b9b93":1,"chunk-2b948a83":1,"chunk-346f0b33":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-108b9b93":"250b2b03","chunk-2b948a83":"e70e6d0f","chunk-2d0c4303":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-346f0b33":"4cd47573","chunk-4e8d4066":"31d6cfe0"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===o))return n()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],f=l.getAttribute("data-href");if(f===r||f===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],d.parentNode.removeChild(d),t(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){u[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),l=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,t[1](a)}o[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("7514"),t("1c4c"),t("8a81"),t("f466"),t("579f"),t("587a");var r=t("a026"),u=t("5f5b"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],c={name:"app"},i=c,l=(t("5c0b"),t("2877")),f=Object(l["a"])(i,o,a,!1,null,null,null),s=f.exports,d=t("8c4f"),p=function(){return t.e("chunk-4e8d4066").then(t.bind(null,"e8c5"))},h=function(){return t.e("chunk-108b9b93").then(t.bind(null,"bb51"))},b=function(){return t.e("chunk-2b948a83").then(t.bind(null,"2d70"))},m=function(){return t.e("chunk-346f0b33").then(t.bind(null,"2e44"))};function v(){return[{path:"/",redirect:"/home",name:"Home",component:p,children:[{path:"quiz",name:"Quiz",component:m},{path:"final",name:"Final",component:b},{path:"/home",name:"Home",component:h}]}]}r["default"].use(d["a"]);var g=new d["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:v()}),y=t("bc3a"),k=t.n(y),w=t("2ef0"),j=t.n(w),O=t("415c"),_=t.n(O),x=t("0213"),A=t("1368"),E=t.n(A);E.a.polyfill(),r["default"].use(u["a"]),r["default"].use(_.a,j.a),r["default"].use(x["default"]),k.a.defaults.baseURL="./",r["default"].prototype.$axios=k.a,new r["default"]({el:"#app",router:g,template:"<App/>",components:{App:s}})},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),u=t.n(r);u.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.be98897b.js.map