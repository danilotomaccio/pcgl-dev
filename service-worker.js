if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const d=e=>l(e,n),o={module:{uri:n},exports:c,require:d};s[n]=Promise.all(i.map((e=>o[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"protezione-civile"}),self.skipWaiting(),e.precacheAndRoute([{url:"/pcgl-dev/css/555.8770f46a.css",revision:null},{url:"/pcgl-dev/css/831.8770f46a.css",revision:null},{url:"/pcgl-dev/css/861.ec8fb37e.css",revision:null},{url:"/pcgl-dev/css/app.d49e4b10.css",revision:null},{url:"/pcgl-dev/firebase-messaging-sw.js",revision:"b805cc1782f6d22adf3a7dc70d216d32"},{url:"/pcgl-dev/index.html",revision:"f9a461172810455cc2ad1be031d1e004"},{url:"/pcgl-dev/js/555.1368979d.js",revision:null},{url:"/pcgl-dev/js/660.16d230b4.js",revision:null},{url:"/pcgl-dev/js/714.e79495c2.js",revision:null},{url:"/pcgl-dev/js/831.687bc6a9.js",revision:null},{url:"/pcgl-dev/js/861.d7f554b1.js",revision:null},{url:"/pcgl-dev/js/app.5872462a.js",revision:null},{url:"/pcgl-dev/js/chunk-vendors.783b8690.js",revision:null},{url:"/pcgl-dev/manifest.json",revision:"3dd6e38d9576213b630cf7e2359477d5"},{url:"/pcgl-dev/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
