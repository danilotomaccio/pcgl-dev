if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>l(e,n),d={module:{uri:n},exports:c,require:o};s[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"protezione-civile"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pcgl-dev/css/555.8770f46a.css",revision:null},{url:"/pcgl-dev/css/831.8770f46a.css",revision:null},{url:"/pcgl-dev/css/861.ec8fb37e.css",revision:null},{url:"/pcgl-dev/css/app.d49e4b10.css",revision:null},{url:"/pcgl-dev/index.html",revision:"ac85224c3d3afb512224c58a97b0270b"},{url:"/pcgl-dev/js/555.1368979d.js",revision:null},{url:"/pcgl-dev/js/660.16d230b4.js",revision:null},{url:"/pcgl-dev/js/714.e79495c2.js",revision:null},{url:"/pcgl-dev/js/831.687bc6a9.js",revision:null},{url:"/pcgl-dev/js/861.d7f554b1.js",revision:null},{url:"/pcgl-dev/js/app.4147faf6.js",revision:null},{url:"/pcgl-dev/js/chunk-vendors.7c9adf90.js",revision:null},{url:"/pcgl-dev/manifest.json",revision:"3dd6e38d9576213b630cf7e2359477d5"},{url:"/pcgl-dev/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
