(()=>{"use strict";var e={982:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,":root {\n\t--color-dark-brown2: #241b19;\n\t--color-dark-brown1: #553a34;\n\t--color-neutral-brown: #6b4c4c;\n\t--color-light-brown1: #8f6b64;\n\t--color-light-brown2: #bc9072;\n\n    --color-jet-stream: #C5DBC8;\n    --color-white-chocolate: #ECE9D2;\n    --color-pale-silver: #D5C5B5;\n    --color-tuscany: #B89E97;\n}\n\nbody{\n    height: 100vh;\n    background-color: var(--color-jet-stream);\n    margin: 0;\n}\n\n.title {\n    color: var(--color-dark-brown1);\n}\n\n.header {\n    background-color: var(--color-white-chocolate);\n    height: 50px;\n}\n\n.header__nav {\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: bottom;\n    gap: 30px;\n}\n\n.header__pages{\n    margin-top: 5px;\n    padding: 10px 30px;\n\n    cursor: pointer;\n\n    border: 3px solid var(--color-jet-stream);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom: none;\n}\n\n.header__pages:hover {\n    text-decoration: underline;\n}\n\n.header__pages-active{\n    margin-top: 5px;\n    padding: 10px 30px;\n    background-color: var(--color-jet-stream);\n\n    cursor: pointer;\n\n    border: 3px solid var(--color-jet-stream);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom: none;\n}\n\n.header__pages-active:hover {\n    text-decoration: underline;\n}\n\nmain h1{\n    margin-top: 0;\n}\n\nmain {\n    width: 1000px;\n    margin: 10px auto 0px auto;\n    padding: 30px;\n    \n    display: flex;\n    flex-direction: column;\n    \n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--color-white-chocolate);\n\n    border-radius: 100px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(982),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=document.getElementById("content");document.body.onload=function(){!function(e,n){const t=document.createElement("header"),r=document.createElement("nav"),o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");t.className="header",r.className="header__nav",o.textContent="Home",o.className="header__pages",a.textContent="Menu",a.className="header__pages",c.textContent="Contact",c.className="header__pages",o.className="header__pages-active",r.appendChild(o),r.appendChild(a),r.appendChild(c),t.appendChild(r),e.appendChild(t)}(f),function(e){const n=document.createElement("main"),t=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("img");t.innerText="Coffee Vibes",r.innerText="This is the most Awesome coffee out there.",t.className="title",o.src="https://steamuserimages-a.akamaihd.net/ugc/788632137952739176/8B1BD7371460AF8F0C08B7DC67B53A70476C06B9/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",o.style="width: 400px",n.appendChild(t),n.appendChild(r),n.appendChild(o),e.appendChild(n)}(f)}})()})();