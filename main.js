(()=>{"use strict";var e={982:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),r=t.n(a),o=t(645),c=t.n(o)()(r());c.push([e.id,":root {\n\t--color-dark-brown2: #241b19;\n\t--color-dark-brown1: #553a34;\n\t--color-neutral-brown: #6b4c4c;\n\t--color-light-brown1: #8f6b64;\n\t--color-light-brown2: #bc9072;\n\n    --color-jet-stream: #C5DBC8;\n    --color-white-chocolate: #ECE9D2;\n    --color-pale-silver: #D5C5B5;\n    --color-tuscany: #B89E97;\n}\n\nbody{\n    height: 100vh;\n    background-color: var(--color-jet-stream);\n    margin: 0;\n}\n\nmain h1{\n    margin-top: 0;\n}\n\nmain {\n    width: 1000px;\n    margin: 10px auto 0px auto;\n    padding: 30px;\n    \n    display: flex;\n    flex-direction: column;\n    \n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--color-white-chocolate);\n\n    border-radius: 100px;\n}\n\n.title {\n    color: var(--color-dark-brown1);\n}\n\n.header {\n    background-color: var(--color-white-chocolate);\n    height: 50px;\n}\n\n.header__nav {\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: bottom;\n    gap: 30px;\n}\n\n.header__pages{\n    margin-top: 5px;\n    padding: 10px 30px;\n\n    cursor: pointer;\n\n    border: 3px solid var(--color-jet-stream);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom: none;\n}\n\n.header__pages:hover {\n    text-decoration: underline;\n}\n\n.header__pages-active{\n    margin-top: 5px;\n    padding: 10px 30px;\n    background-color: var(--color-jet-stream);\n\n    cursor: pointer;\n\n    border: 3px solid var(--color-jet-stream);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom: none;\n}\n\n.header__pages-active:hover {\n    text-decoration: underline;\n}\n\n.coffee__img{\n    width: 400px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=r(u,a);a.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var d=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),c=t.n(o),i=t(565),d=t.n(i),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(982),h={};function f(e){const n=document.createElement("main"),t=document.createElement("h1"),a=document.createElement("p"),r=document.createElement("img");t.innerText="Coffee Vibes",a.innerText="This is the most Awesome coffee out there.",t.className="title",r.src="https://steamuserimages-a.akamaihd.net/ugc/788632137952739176/8B1BD7371460AF8F0C08B7DC67B53A70476C06B9/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",r.style="width: 400px",n.id="main",n.appendChild(t),n.appendChild(a),n.appendChild(r),e.appendChild(n)}function v(e){const n=document.getElementById("header__home"),t=document.getElementById("header__coffee"),a=document.getElementById("header__contact");"home"===e?(n.className="header__pages-active",t.className="header__pages",a.className="header__pages"):"coffee"===e?(t.className="header__pages-active",n.className="header__pages",a.className="header__pages"):(a.className="header__pages-active",n.className="header__pages",t.className="header__pages")}h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g=document.getElementById("content");!function(e,n){const t=document.createElement("header"),a=document.createElement("nav"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div");t.className="header",a.className="header__nav",r.textContent="Home",r.id="header__home",o.textContent="Coffee",o.id="header__coffee",c.textContent="Contact",c.id="header__contact",r.className="header__pages-active",o.className="header__pages",c.className="header__pages",a.appendChild(r),a.appendChild(o),a.appendChild(c),t.appendChild(a),e.appendChild(t)}(g),f(g);const _=document.getElementById("header__home"),x=document.getElementById("header__coffee"),b=document.getElementById("header__contact");function y(){const e=document.getElementById("main");g.removeChild(e)}_.addEventListener("click",(function(){y(),v("home"),f(g)})),x.addEventListener("click",(function(){y(),v("coffee"),function(e){const n=document.createElement("main"),t=document.createElement("h1");t.innerText="Coffee Selection",t.className="title";const a=function(e,n,t){const a=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p"),c=document.createElement("img");return r.textContent="Cappuccino",o.textContent="Lose yourself in the steam of the best italian Coffee",c.src="https://www.arte-latte.com/wp-content/uploads/2020/12/cappuccino1-min-scaled.jpg",c.className="coffee__img",a.appendChild(r),a.appendChild(c),a.appendChild(o),a}();n.id="main",n.appendChild(t),n.appendChild(a),e.appendChild(n)}(g)})),b.addEventListener("click",(function(){y(),v("contact");const e=document.createElement("main");e.id="main",g.appendChild(e)}))})()})();