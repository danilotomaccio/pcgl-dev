if(!self.define){let r,i={};const a=(a,e)=>(a=new URL(a+".js",e).href,i[a]||new Promise((i=>{if("document"in self){const r=document.createElement("script");r.src=a,r.onload=i,document.head.appendChild(r)}else r=a,importScripts(a),i()})).then((()=>{let r=i[a];if(!r)throw new Error(`Module ${a} didn’t register its module`);return r})));self.define=(e,l)=>{const n=r||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const u=r=>a(r,n),o={module:{uri:n},exports:s,require:u};i[n]=Promise.all(e.map((r=>o[r]||u(r)))).then((r=>(l(...r),s)))}}define(["./workbox-4f586afe"],(function(r){"use strict";r.setCacheNameDetails({prefix:"avatar-fe"}),self.skipWaiting(),r.precacheAndRoute([{url:"/css/app.b841c349.css",revision:null},{url:"/img/avatar-1.ff7b1fbf.jpg",revision:null},{url:"/img/avatar-10.1f3cca13.jpg",revision:null},{url:"/img/avatar-11.ead5d646.jpg",revision:null},{url:"/img/avatar-12.6800376e.jpg",revision:null},{url:"/img/avatar-13.a41bf0c6.jpg",revision:null},{url:"/img/avatar-14.3afc014e.jpg",revision:null},{url:"/img/avatar-15.ee1285d4.jpg",revision:null},{url:"/img/avatar-16.60ab30a4.jpg",revision:null},{url:"/img/avatar-17.93de64dd.jpg",revision:null},{url:"/img/avatar-18.6ab7448e.jpg",revision:null},{url:"/img/avatar-19.94c60630.jpg",revision:null},{url:"/img/avatar-2.cd00a765.jpg",revision:null},{url:"/img/avatar-20.395136ca.jpg",revision:null},{url:"/img/avatar-3.58d1e595.jpg",revision:null},{url:"/img/avatar-4.139934b8.jpg",revision:null},{url:"/img/avatar-5.0d89ae3d.jpg",revision:null},{url:"/img/avatar-6.cf15a025.jpg",revision:null},{url:"/img/avatar-7.0c2c09b1.jpg",revision:null},{url:"/img/avatar-8.fae1495e.jpg",revision:null},{url:"/img/avatar-9.8aed195f.jpg",revision:null},{url:"/img/screenshots/1.png",revision:"4a30a00d454af5ce188ae1fc0ed3ffca"},{url:"/img/screenshots/2.png",revision:"d55a480cf5f9df4e6af3015c90da627e"},{url:"/index.html",revision:"2610620fc844fe637c585b999340c058"},{url:"/js/app.97e80eb0.js",revision:null},{url:"/js/chunk-vendors.2aa0edb1.js",revision:null},{url:"/manifest.json",revision:"74bae5ce5d0e61151a544983f1a9df03"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
