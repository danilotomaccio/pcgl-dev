if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let c={};const u=s=>i(s,l),o={module:{uri:l},exports:c,require:u};e[l]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(n(...s),c)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"protezione-civile"}),self.skipWaiting(),s.precacheAndRoute([{url:"/css/189.1ff5327c.css",revision:null},{url:"/css/376.9905b316.css",revision:null},{url:"/css/514.a5d32d39.css",revision:null},{url:"/css/757.a5d32d39.css",revision:null},{url:"/css/806.f72cbd70.css",revision:null},{url:"/css/811.ccca0348.css",revision:null},{url:"/css/954.c804b26d.css",revision:null},{url:"/css/app.dfa22877.css",revision:null},{url:"/firebase-messaging-sw.js",revision:"53f7b8e0fa10569931c18d5c69ef6031"},{url:"/img/screenshots/1.png",revision:"82a5a149eb2b736f683675981b3c73af"},{url:"/img/screenshots/2.png",revision:"4e67f793422c0942f0157080fcf801cf"},{url:"/img/screenshots/3.png",revision:"e184505b6626745465aa1582c993aec0"},{url:"/index.html",revision:"855e42f7584eff7b0edad9e8e14cdf04"},{url:"/js/189.145d1ff7.js",revision:null},{url:"/js/376.734fbad0.js",revision:null},{url:"/js/514.fbfe4413.js",revision:null},{url:"/js/520.10971d28.js",revision:null},{url:"/js/757.86b80338.js",revision:null},{url:"/js/806.b3c463dc.js",revision:null},{url:"/js/811.96cb84b9.js",revision:null},{url:"/js/954.6f8b5046.js",revision:null},{url:"/js/app.b6cbbb6b.js",revision:null},{url:"/js/chunk-vendors.328966c3.js",revision:null},{url:"/manifest.json",revision:"00ed6a31ab921b650210179a32f6e5ae"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
