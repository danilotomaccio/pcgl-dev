(function(){var e={676:function(e,t){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,a){r=e[t].apply(e,i),n(r).then(s,a)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function f(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new f(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new d(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),a(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),a(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(f,"_tx",["objectStoreNames","mode"]),o(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(d,"_db",["name","version","objectStoreNames"]),o(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}))},913:function(){"use strict";try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:function(){"use strict";try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:function(){"use strict";try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:function(){"use strict";try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}();!function(){"use strict";n(913);const e=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n},t=e;class i extends Error{constructor(e,n){const i=t(e,n);super(i),this.name=e,this.details=n}}const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>{for(const t of Object.keys(r))e(t)},o={updateDetails:e=>{a((t=>{"string"===typeof e[t]&&(r[t]=e[t])}))},getGoogleAnalyticsName:e=>e||s(r.googleAnalytics),getPrecacheName:e=>e||s(r.precache),getPrefix:()=>r.prefix,getRuntimeName:e=>e||s(r.runtime),getSuffix:()=>r.suffix};function c(e,t){const n=t();return e.waitUntil(n),n}n(977);const l="__WB_REVISION__";function u(e){if(!e)throw new i("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new i("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set(l,t),{cacheKey:r.href,url:s.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let d;function p(){if(void 0===d){const t=new Response("");if("body"in t)try{new Response(t.body),d=!0}catch(e){d=!1}d=!1}return d}async function g(e,t){let n=null;if(e.url){const t=new URL(e.url);n=t.origin}if(n!==self.location.origin)throw new i("cross-origin-copy-response",{origin:n});const r=e.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},a=t?t(s):s,o=p()?r.body:await r.blob();return new Response(o,a)}const m=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function w(e,t){const n=new URL(e);for(const i of t)n.searchParams.delete(i);return n.href}async function y(e,t,n,i){const r=w(t.url,n);if(t.url===r)return e.match(t,i);const s=Object.assign(Object.assign({},i),{ignoreSearch:!0}),a=await e.keys(t,s);for(const o of a){const t=w(o.url,n);if(r===t)return e.match(o,i)}}class b{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const v=new Set;async function _(){for(const e of v)await e()}function C(e){return new Promise((t=>setTimeout(t,e)))}n(873);function I(e){return"string"===typeof e?new Request(e):e}class S{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new b,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=I(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(a){if(a instanceof Error)throw new i("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const s=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:s,response:e});return e}catch(o){throw r&&await this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:r.clone(),request:s.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=I(e);let n;const{cacheName:i,matchOptions:r}=this._strategy,s=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},r),{cacheName:i});n=await caches.match(s,a);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:i,matchOptions:r,cachedResponse:n,request:s,event:this.event})||void 0;return n}async cachePut(e,t){const n=I(e);await C(0);const r=await this.getCacheKey(n,"write");if(!t)throw new i("cache-put-with-no-response",{url:m(r.url)});const s=await this._ensureResponseSafeToCache(t);if(!s)return!1;const{cacheName:a,matchOptions:o}=this._strategy,c=await self.caches.open(a),l=this.hasCallback("cacheDidUpdate"),u=l?await y(c,r.clone(),["__WB_REVISION__"],o):null;try{await c.put(r,l?s.clone():s)}catch(h){if(h instanceof Error)throw"QuotaExceededError"===h.name&&await _(),h}for(const i of this.iterateCallbacks("cacheDidUpdate"))await i({cacheName:a,oldResponse:u,newResponse:s.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let i=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))i=I(await e({mode:t,request:i,event:this.event,params:this.params}));this._cacheKeys[n]=i}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const n=this._pluginStateMap.get(t),i=i=>{const r=Object.assign(Object.assign({},i),{state:n});return t[e](r)};yield i}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const i of this.iterateCallbacks("cacheWillUpdate"))if(t=await i({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class k{constructor(e={}){this.cacheName=o.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"===typeof e.request?new Request(e.request):e.request,i="params"in e?e.params:void 0,r=new S(this,{event:t,request:n,params:i}),s=this._getResponse(r,n,t),a=this._awaitComplete(s,r,n,t);return[s,a]}async _getResponse(e,t,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new i("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(r=await i({error:s,event:n,request:t}),r)break;if(!r)throw s}for(const i of e.iterateCallbacks("handlerWillRespond"))r=await i({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,i){let r,s;try{r=await e}catch(s){}try{await t.runCallbacks("handlerDidRespond",{event:i,request:n,response:r}),await t.doneWaiting()}catch(a){a instanceof Error&&(s=a)}if(await t.runCallbacks("handlerDidComplete",{event:i,request:n,response:r,error:s}),t.destroy(),s)throw s}}class E extends k{constructor(e={}){e.cacheName=o.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const r=t.params||{};if(!this._fallbackToNetwork)throw new i("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const i=r.integrity,s=e.integrity,a=!s||s===i;if(n=await t.fetch(new Request(e,{integrity:s||i})),i&&a){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,n.clone());0}}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e),r=await t.cachePut(e,n.clone());if(!r)throw new i("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,i]of this.plugins.entries())i!==E.copyRedirectedCacheableResponsesPlugin&&(i===E.defaultPrecacheCacheabilityPlugin&&(e=n),i.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},E.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await g(e):e}};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:o.getPrecacheName(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=u(n),s="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new i("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new i("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[r,s]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(r),i=new Request(r,{integrity:t,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:n,notUpdatedURLs:i}=t;return{updatedURLs:n,notUpdatedURLs:i}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of t)n.has(r.url)||(await e.delete(r),i.push(r.url));return{deletedURLs:i}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){const e=await self.caches.open(this.strategy.cacheName);return e.match(n)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new i("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let D;const O=()=>(D||(D=new T),D);n(80);const A="GET",R=e=>e&&"object"===typeof e?e:{handle:e};class P{constructor(e,t,n=A){this.handler=R(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=R(e)}}class N extends P{constructor(e,t,n){const i=({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)};super(i,t,n)}}class L{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const i=n.origin===location.origin,{params:r,route:s}=this.findMatchingRoute({event:t,request:e,sameOrigin:i,url:n});let a=s&&s.handler;const o=e.method;if(!a&&this._defaultHandlerMap.has(o)&&(a=this._defaultHandlerMap.get(o)),!a)return void 0;let c;try{c=a.handle({url:n,request:e,event:t,params:r})}catch(u){c=Promise.reject(u)}const l=s&&s.catchHandler;return c instanceof Promise&&(this._catchHandler||l)&&(c=c.catch((async i=>{if(l){0;try{return await l.handle({url:n,request:e,event:t,params:r})}catch(s){s instanceof Error&&(i=s)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw i}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:i}){const r=this._routes.get(n.method)||[];for(const s of r){let r;const a=s.match({url:e,sameOrigin:t,request:n,event:i});if(a)return r=a,(Array.isArray(r)&&0===r.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"===typeof a)&&(r=void 0),{route:s,params:r}}return{}}setDefaultHandler(e,t=A){this._defaultHandlerMap.set(t,R(e))}setCatchHandler(e){this._catchHandler=R(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new i("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new i("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let M;const j=()=>(M||(M=new L,M.addFetchListener(),M.addCacheListener()),M);function x(e,t,n){let r;if("string"===typeof e){const i=new URL(e,location.href);0;const s=({url:e})=>e.href===i.href;r=new P(s,t,n)}else if(e instanceof RegExp)r=new N(e,t,n);else if("function"===typeof e)r=new P(e,t,n);else{if(!(e instanceof P))throw new i("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}const s=j();return s.registerRoute(r),r}function B(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}function*U(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:i=!0,urlManipulation:r}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const a=B(s,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(i){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:s});for(const t of e)yield t.href}}class K extends P{constructor(e,t){const n=({request:n})=>{const i=e.getURLsToCacheKeys();for(const r of U(n.url,t)){const t=i.get(r);if(t){const n=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:n}}}};super(n,e.strategy)}}function q(e){const t=O(),n=new K(t,e);x(n)}function $(e){const t=O();t.precache(e)}function H(e,t){$(e),q(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},W=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],a=e[n++],o=e[n++],c=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,a=s?e[r+1]:0,o=r+2<e.length,c=o?e[r+2]:0,l=t>>2,u=(3&t)<<4|a>>4;let h=(15&a)<<2|c>>6,f=63&c;o||(f=64,s||(h=64)),i.push(n[l],n[u],n[h],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):W(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,a=s?n[e.charAt(r)]:0;++r;const o=r<e.length,c=o?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==c||null==u)throw Error();const h=t<<2|a>>4;if(i.push(h),64!==c){const e=a<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(e){const t=F(e);return V.encodeByteArray(t,!0)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"object"===typeof indexedDB}function Y(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="FirebaseError";class Z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Q,Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?ee(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new Z(i,a,n);return o}}function ee(e,t){return e.replace(te,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(ie(n)&&ie(s)){if(!ne(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ie(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return e&&e._delegate?e._delegate:e}class se{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new G;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(le(e))try{this.getOrInitializeService({instanceIdentifier:ae})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ae){return this.instances.has(e)}getOptions(e=ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ce(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=ae){return this.component?this.component.multipleInstances?e:ae:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ce(e){return e===ae?void 0:e}function le(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he=[];var fe;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(fe||(fe={}));const de={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},pe=fe.INFO,ge={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},me=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ge[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class we{constructor(e){this.name=e,this._logLevel=pe,this._logHandler=me,this._userLogHandler=null,he.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?de[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}var ye=n(676);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(ve(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function ve(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const _e="@firebase/app",Ce="0.7.18",Ie=new we("@firebase/app"),Se="@firebase/app-compat",ke="@firebase/analytics-compat",Ee="@firebase/analytics",Te="@firebase/app-check-compat",De="@firebase/app-check",Oe="@firebase/auth",Ae="@firebase/auth-compat",Re="@firebase/database",Pe="@firebase/database-compat",Ne="@firebase/functions",Le="@firebase/functions-compat",Me="@firebase/installations",je="@firebase/installations-compat",xe="@firebase/messaging",Be="@firebase/messaging-compat",Ue="@firebase/performance",Ke="@firebase/performance-compat",qe="@firebase/remote-config",$e="@firebase/remote-config-compat",He="@firebase/storage",Fe="@firebase/storage-compat",We="@firebase/firestore",Ve="@firebase/firestore-compat",ze="firebase",Ge="[DEFAULT]",Je={[_e]:"fire-core",[Se]:"fire-core-compat",[Ee]:"fire-analytics",[ke]:"fire-analytics-compat",[De]:"fire-app-check",[Te]:"fire-app-check-compat",[Oe]:"fire-auth",[Ae]:"fire-auth-compat",[Re]:"fire-rtdb",[Pe]:"fire-rtdb-compat",[Ne]:"fire-fn",[Le]:"fire-fn-compat",[Me]:"fire-iid",[je]:"fire-iid-compat",[xe]:"fire-fcm",[Be]:"fire-fcm-compat",[Ue]:"fire-perf",[Ke]:"fire-perf-compat",[qe]:"fire-rc",[$e]:"fire-rc-compat",[He]:"fire-gcs",[Fe]:"fire-gcs-compat",[We]:"fire-fst",[Ve]:"fire-fst-compat","fire-js":"fire-js",[ze]:"fire-js-all"},Ye=new Map,Qe=new Map;function Ze(e,t){try{e.container.addComponent(t)}catch(n){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(Qe.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;Qe.set(t,e);for(const n of Ye.values())Ze(n,e);return!0}function et(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},nt=new X("app","Firebase",tt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new se("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Ge,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw nt.create("bad-app-name",{appName:String(i)});const r=Ye.get(i);if(r){if(ne(e,r.options)&&ne(n,r.config))return r;throw nt.create("duplicate-app",{appName:i})}const s=new ue(i);for(const o of Qe.values())s.addComponent(o);const a=new it(e,n,s);return Ye.set(i,a),a}function st(e=Ge){const t=Ye.get(e);if(!t)throw nt.create("no-app",{appName:e});return t}function at(e,t,n){var i;let r=null!==(i=Je[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ie.warn(e.join(" "))}Xe(new se(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ot="firebase-heartbeat-database",ct=1,lt="firebase-heartbeat-store";let ut=null;function ht(){return ut||(ut=(0,ye.openDb)(ot,ct,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(lt)}})).catch((e=>{throw nt.create("storage-open",{originalErrorMessage:e.message})}))),ut}async function ft(e){try{const t=await ht();return t.transaction(lt).objectStore(lt).get(gt(e))}catch(t){throw nt.create("storage-get",{originalErrorMessage:t.message})}}async function dt(e,t){try{const n=await ht(),i=n.transaction(lt,"readwrite"),r=i.objectStore(lt);return await r.put(t,gt(e)),i.complete}catch(n){throw nt.create("storage-set",{originalErrorMessage:n.message})}}async function pt(e){try{const t=await ht(),n=t.transaction(lt,"readwrite");return await n.objectStore(lt).delete(gt(e)),n.complete}catch(t){throw nt.create("storage-delete",{originalErrorMessage:t.message})}}function gt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=1024,wt=2592e6;class yt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _t(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=bt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some((e=>e.date===n)))return this._heartbeatsCache.push({date:n,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=wt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:e,unsentEntries:t}=vt(this._heartbeatsCache),n=z(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}function bt(){const e=new Date;return e.toISOString().substring(0,10)}function vt(e,t=mt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.userAgent===r.userAgent));if(e){if(e.dates.push(r.date),Ct(n)>t){e.dates.pop();break}}else if(n.push({userAgent:r.userAgent,dates:[r.date]}),Ct(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class _t{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!J()&&Y().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ft(this.app);return(null===e||void 0===e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){const t=await this._canUseIndexedDBPromise;return t?dt(this.app,{heartbeats:e}):void 0}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return dt(this.app,{heartbeats:[...t,...e]})}}async delete(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return dt(this.app,{heartbeats:t.filter((t=>!e.includes(t)))})}}async deleteAll(){const e=await this._canUseIndexedDBPromise;return e?pt(this.app):void 0}}function Ct(e){return z(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){Xe(new se("platform-logger",(e=>new be(e)),"PRIVATE")),Xe(new se("heartbeat",(e=>new yt(e)),"PRIVATE")),at(_e,Ce,e),at(_e,Ce,"esm2017"),at("fire-js","")}It("");var St="firebase",kt="9.6.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
at(St,kt,"app");const Et="@firebase/installations",Tt="0.5.5",Dt=1e4,Ot=`w:${Tt}`,At="FIS_v2",Rt="https://firebaseinstallations.googleapis.com/v1",Pt=36e5,Nt="installations",Lt="Installations",Mt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},jt=new X(Nt,Lt,Mt);function xt(e){return e instanceof Z&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt({projectId:e}){return`${Rt}/projects/${e}/installations`}function Ut(e){return{token:e.token,requestStatus:2,expiresIn:Ft(e.expiresIn),creationTime:Date.now()}}async function Kt(e,t){const n=await t.json(),i=n.error;return jt.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function qt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $t(e,{refreshToken:t}){const n=qt(e);return n.append("Authorization",Wt(t)),n}async function Ht(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ft(e){return Number(e.replace("s","000"))}function Wt(e){return`${At} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,{fid:t}){const n=Bt(e),i=qt(e),r={fid:t,authVersion:At,appId:e.appId,sdkVersion:Ot},s={method:"POST",headers:i,body:JSON.stringify(r)},a=await Ht((()=>fetch(n,s)));if(a.ok){const e=await a.json(),n={fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ut(e.authToken)};return n}throw await Kt("Create Installation",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=/^[cdef][\w-]{21}$/,Yt="";function Qt(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=Zt(e);return Jt.test(n)?n:Yt}catch(e){return Yt}}function Zt(e){const t=Gt(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map;function tn(e,t){const n=Xt(e);nn(n,t),rn(n,t)}function nn(e,t){const n=en.get(e);if(n)for(const i of n)i(t)}function rn(e,t){const n=an();n&&n.postMessage({key:e,fid:t}),on()}let sn=null;function an(){return!sn&&"BroadcastChannel"in self&&(sn=new BroadcastChannel("[Firebase] FID Change"),sn.onmessage=e=>{nn(e.data.key,e.data.fid)}),sn}function on(){0===en.size&&sn&&(sn.close(),sn=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="firebase-installations-database",ln=1,un="firebase-installations-store";let hn=null;function fn(){return hn||(hn=(0,ye.openDb)(cn,ln,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(un)}}))),hn}async function dn(e,t){const n=Xt(e),i=await fn(),r=i.transaction(un,"readwrite"),s=r.objectStore(un),a=await s.get(n);return await s.put(t,n),await r.complete,a&&a.fid===t.fid||tn(e,t.fid),t}async function pn(e){const t=Xt(e),n=await fn(),i=n.transaction(un,"readwrite");await i.objectStore(un).delete(t),await i.complete}async function gn(e,t){const n=Xt(e),i=await fn(),r=i.transaction(un,"readwrite"),s=r.objectStore(un),a=await s.get(n),o=t(a);return void 0===o?await s.delete(n):await s.put(o,n),await r.complete,!o||a&&a.fid===o.fid||tn(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e){let t;const n=await gn(e,(n=>{const i=wn(n),r=yn(e,i);return t=r.registrationPromise,r.installationEntry}));return n.fid===Yt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function wn(e){const t=e||{fid:Qt(),registrationStatus:0};return Cn(t)}function yn(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(jt.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=bn(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:vn(e)}:{installationEntry:t}}async function bn(e,t){try{const n=await Vt(e,t);return dn(e,n)}catch(n){throw xt(n)&&409===n.customData.serverCode?await pn(e):await dn(e,{fid:t.fid,registrationStatus:0}),n}}async function vn(e){let t=await _n(e);while(1===t.registrationStatus)await zt(100),t=await _n(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await mn(e);return n||t}return t}function _n(e){return gn(e,(e=>{if(!e)throw jt.create("installation-not-found");return Cn(e)}))}function Cn(e){return In(e)?{fid:e.fid,registrationStatus:0}:e}function In(e){return 1===e.registrationStatus&&e.registrationTime+Dt<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn({appConfig:e,platformLoggerProvider:t},n){const i=kn(e,n),r=$t(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:Ot}},o={method:"POST",headers:r,body:JSON.stringify(a)},c=await Ht((()=>fetch(i,o)));if(c.ok){const e=await c.json(),t=Ut(e);return t}throw await Kt("Generate Auth Token",c)}function kn(e,{fid:t}){return`${Bt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t=!1){let n;const i=await gn(e.appConfig,(i=>{if(!An(i))throw jt.create("not-registered");const r=i.authToken;if(!t&&Rn(r))return i;if(1===r.requestStatus)return n=Tn(e,t),i;{if(!navigator.onLine)throw jt.create("app-offline");const t=Nn(i);return n=On(e,t),t}})),r=n?await n:i.authToken;return r}async function Tn(e,t){let n=await Dn(e.appConfig);while(1===n.authToken.requestStatus)await zt(100),n=await Dn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?En(e,t):i}function Dn(e){return gn(e,(e=>{if(!An(e))throw jt.create("not-registered");const t=e.authToken;return Ln(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function On(e,t){try{const n=await Sn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await dn(e.appConfig,i),n}catch(n){if(!xt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await dn(e.appConfig,n)}else await pn(e.appConfig);throw n}}function An(e){return void 0!==e&&2===e.registrationStatus}function Rn(e){return 2===e.requestStatus&&!Pn(e)}function Pn(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pt}function Nn(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ln(e){return 1===e.requestStatus&&e.requestTime+Dt<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e){const t=e,{installationEntry:n,registrationPromise:i}=await mn(t.appConfig);return i?i.catch(console.error):En(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t=!1){const n=e;await xn(n.appConfig);const i=await En(n,t);return i.token}async function xn(e){const{registrationPromise:t}=await mn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bn(e){if(!e||!e.options)throw Un("App Configuration");if(!e.name)throw Un("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Un(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Un(e){return jt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="installations",qn="installations-internal",$n=e=>{const t=e.getProvider("app").getImmediate(),n=Bn(t),i=et(t,"platform-logger"),r={app:t,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()};return r},Hn=e=>{const t=e.getProvider("app").getImmediate(),n=et(t,Kn).getImmediate(),i={getId:()=>Mn(n),getToken:e=>jn(n,e)};return i};function Fn(){Xe(new se(Kn,$n,"PUBLIC")),Xe(new se(qn,Hn,"PRIVATE"))}Fn(),at(Et,Tt),at(Et,Tt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Vn="https://fcmregistrations.googleapis.com/v1",zn="FCM_MSG",Gn="google.c.a.c_id",Jn=3,Yn=1;var Qn,Zn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xn(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ei(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Qn||(Qn={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Zn||(Zn={}));const ti="fcm_token_details_db",ni=5,ii="fcm_token_object_Store";async function ri(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(ti))return null}let t=null;const n=await(0,ye.openDb)(ti,ni,(async n=>{var i;if(n.oldVersion<2)return;if(!n.objectStoreNames.contains(ii))return;const r=n.transaction.objectStore(ii),s=await r.index("fcmSenderId").get(e);if(await r.clear(),s)if(2===n.oldVersion){const e=s;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(i=e.createTime)&&void 0!==i?i:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Xn(e.vapidKey)}}}else if(3===n.oldVersion){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Xn(e.auth),p256dh:Xn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Xn(e.vapidKey)}}}else if(4===n.oldVersion){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Xn(e.auth),p256dh:Xn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Xn(e.vapidKey)}}}}));return n.close(),await(0,ye.deleteDb)(ti),await(0,ye.deleteDb)("fcm_vapid_details_db"),await(0,ye.deleteDb)("undefined"),si(t)?t:null}function si(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="firebase-messaging-database",oi=1,ci="firebase-messaging-store";let li=null;function ui(){return li||(li=(0,ye.openDb)(ai,oi,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(ci)}}))),li}async function hi(e){const t=pi(e),n=await ui(),i=await n.transaction(ci).objectStore(ci).get(t);if(i)return i;{const t=await ri(e.appConfig.senderId);if(t)return await fi(e,t),t}}async function fi(e,t){const n=pi(e),i=await ui(),r=i.transaction(ci,"readwrite");return await r.objectStore(ci).put(t,n),await r.complete,t}async function di(e){const t=pi(e),n=await ui(),i=n.transaction(ci,"readwrite");await i.objectStore(ci).delete(t),await i.complete}function pi({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},mi=new X("messaging","Messaging",gi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wi(e,t){const n=await _i(e),i=Ci(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const t=await fetch(vi(e.appConfig),r);s=await t.json()}catch(a){throw mi.create("token-subscribe-failed",{errorInfo:a})}if(s.error){const e=s.error.message;throw mi.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw mi.create("token-subscribe-no-token");return s.token}async function yi(e,t){const n=await _i(e),i=Ci(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${vi(e.appConfig)}/${t.token}`,r);s=await n.json()}catch(a){throw mi.create("token-update-failed",{errorInfo:a})}if(s.error){const e=s.error.message;throw mi.create("token-update-failed",{errorInfo:e})}if(!s.token)throw mi.create("token-update-no-token");return s.token}async function bi(e,t){const n=await _i(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${vi(e.appConfig)}/${t}`,i),r=await n.json();if(r.error){const e=r.error.message;throw mi.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw mi.create("token-unsubscribe-failed",{errorInfo:r})}}function vi({projectId:e}){return`${Vn}/projects/${e}/registrations`}async function _i({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ci({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==Wn&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=6048e5;async function Si(e){const t=await Di(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Xn(t.getKey("auth")),p256dh:Xn(t.getKey("p256dh"))},i=await hi(e.firebaseDependencies);if(i){if(Oi(i.subscriptionOptions,n))return Date.now()>=i.createTime+Ii?Ei(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await bi(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return Ti(e.firebaseDependencies,n)}return Ti(e.firebaseDependencies,n)}async function ki(e){const t=await hi(e.firebaseDependencies);t&&(await bi(e.firebaseDependencies,t.token),await di(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Ei(e,t){try{const n=await yi(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await fi(e.firebaseDependencies,i),n}catch(n){throw await ki(e),n}}async function Ti(e,t){const n=await wi(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await fi(e,i),i.token}async function Di(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ei(t)})}function Oi(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ri(t,e),Pi(t,e),Ni(t,e),t}function Ri(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r)}function Pi(e,t){t.data&&(e.data=t.data)}function Ni(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return"object"===typeof e&&!!e&&Gn in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(e,t){const n=xi(t,await e.firebaseDependencies.installations.getId());Bi(e,n)}function xi(e,t){var n,i;const r={};return e.from&&(r.project_number=e.from),e.fcmMessageId&&(r.message_id=e.fcmMessageId),r.instance_id=t,e.notification?r.message_type=Qn.DISPLAY_NOTIFICATION.toString():r.message_type=Qn.DATA_MESSAGE.toString(),r.sdk_platform=Jn.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(r.collapse_key=e.collapse_key),r.event=Yn.toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(r.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),r}function Bi(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function Ui(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(e,t){var n,i;const{newSubscription:r}=e;if(!r)return void await ki(t);const s=await hi(t.firebaseDependencies);await ki(t),t.vapidKey=null!==(i=null===(n=null===s||void 0===s?void 0:s.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Wn,await Si(t)}async function qi(e,t){const n=Fi(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await ji(t,n);const i=await Gi();if(Vi(i))return zi(i,n);if(n.notification&&await Ji(Hi(n)),t&&t.onBackgroundMessageHandler){const e=Ai(n);"function"===typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function $i(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[zn];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const r=Yi(i);if(!r)return;const s=new URL(r,self.location.href),a=new URL(self.location.origin);if(s.host!==a.host)return;let o=await Wi(s);return o?o=await o.focus():(o=await self.clients.openWindow(r),await Mi(3e3)),o?(i.messageType=Zn.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,o.postMessage(i)):void 0}function Hi(e){const t=Object.assign({},e.notification);return t.data={[zn]:e},t}function Fi({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}async function Wi(e){const t=await Gi();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}function Vi(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}function zi(e,t){t.isFirebaseMessaging=!0,t.messageType=Zn.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function Gi(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ji(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function Yi(e){var t,n,i;const r=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;return r||(Li(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){if(!e||!e.options)throw Zi("App Configuration Object");if(!e.name)throw Zi("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Zi(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Zi(e){return mi.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Ui("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Xi{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Qi(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=e=>{const t=new Xi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(qi(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(Ki(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil($i(e))})),t};function tr(){Xe(new se("messaging-sw",er,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(){return J()&&await Y()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){if(void 0!==self.document)throw mi.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rr(e=st()){return nr().then((e=>{if(!e)throw mi.create("unsupported-browser")}),(e=>{throw mi.create("indexed-db-unsupported")})),et(re(e),"messaging-sw").getImmediate()}function sr(e,t){return e=re(e),ir(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tr(),H([{'revision':null,'url':'/pcgl-dev/css/347.8c656319.css'},{'revision':null,'url':'/pcgl-dev/css/540.11b2c725.css'},{'revision':null,'url':'/pcgl-dev/css/629.11b2c725.css'},{'revision':null,'url':'/pcgl-dev/css/861.ec8fb37e.css'},{'revision':null,'url':'/pcgl-dev/css/app.d49e4b10.css'},{'revision':'21af6183ad2a18f0a04d7f5d8e482851','url':'/pcgl-dev/index.html'},{'revision':null,'url':'/pcgl-dev/js/347.92e19b6d.js'},{'revision':null,'url':'/pcgl-dev/js/540.ef768e1c.js'},{'revision':null,'url':'/pcgl-dev/js/629.a02b500c.js'},{'revision':null,'url':'/pcgl-dev/js/747.1212dede.js'},{'revision':null,'url':'/pcgl-dev/js/861.d7f554b1.js'},{'revision':null,'url':'/pcgl-dev/js/app.4c61b793.js'},{'revision':null,'url':'/pcgl-dev/js/chunk-vendors.7c9adf90.js'},{'revision':'3dd6e38d9576213b630cf7e2359477d5','url':'/pcgl-dev/manifest.json'},{'revision':'f1b60de540a13b179f1b97b5ef09df66','url':'/pcgl-dev/old.firebase-messaging-sw.js'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/pcgl-dev/robots.txt'}]);const ar={apiKey:"AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",authDomain:"pcgltricarico05.firebaseapp.com",databaseURL:"https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pcgltricarico05",storageBucket:"pcgltricarico05.appspot.com",messagingSenderId:"320152077505",appId:"1:320152077505:web:f4c84686f061134a78c040",measurementId:"G-7ZHL4J15XG"},or=(rt(ar),rr());sr(or,(e=>{console.log("asda[firebase-messaging-sw.js] Received background message ",e);const t="Background Message Title",n={body:"Background Message body.",icon:"/firebase-logo.png"};self.registration.showNotification(t,n)}))}()})();
//# sourceMappingURL=firebase-messaging-sw.js.map