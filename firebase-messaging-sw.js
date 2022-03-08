(function(){var e={676:function(e,t){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,a){i=e[t].apply(e,r),n(i).then(s,a)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new h(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function h(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function f(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new f(n)}function p(e){this._db=e}function g(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new d(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function m(e){return r(indexedDB,"deleteDatabase",[e])}s(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(h,"_cursor",["direction","key","primaryKey","value"]),a(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(h.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new h(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(l,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},s(f,"_tx",["objectStoreNames","mode"]),o(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},s(d,"_db",["name","version","objectStoreNames"]),o(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[u,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}))},913:function(){"use strict";try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:function(){"use strict";try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:function(){"use strict";try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:function(){"use strict";try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}();!function(){"use strict";n(913);const e=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n},t=e;class r extends Error{constructor(e,n){const r=t(e,n);super(r),this.name=e,this.details=n}}const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>{for(const t of Object.keys(i))e(t)},o={updateDetails:e=>{a((t=>{"string"===typeof e[t]&&(i[t]=e[t])}))},getGoogleAnalyticsName:e=>e||s(i.googleAnalytics),getPrecacheName:e=>e||s(i.precache),getPrefix:()=>i.prefix,getRuntimeName:e=>e||s(i.runtime),getSuffix:()=>i.suffix};function c(e,t){const n=t();return e.waitUntil(n),n}n(977);const u="__WB_REVISION__";function h(e){if(!e)throw new r("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new r("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),s=new URL(n,location.href);return i.searchParams.set(u,t),{cacheKey:i.href,url:s.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let d;function p(){if(void 0===d){const t=new Response("");if("body"in t)try{new Response(t.body),d=!0}catch(e){d=!1}d=!1}return d}async function g(e,t){let n=null;if(e.url){const t=new URL(e.url);n=t.origin}if(n!==self.location.origin)throw new r("cross-origin-copy-response",{origin:n});const i=e.clone(),s={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=t?t(s):s,o=p()?i.body:await i.blob();return new Response(o,a)}const m=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function w(e,t){const n=new URL(e);for(const r of t)n.searchParams.delete(r);return n.href}async function y(e,t,n,r){const i=w(t.url,n);if(t.url===i)return e.match(t,r);const s=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await e.keys(t,s);for(const o of a){const t=w(o.url,n);if(i===t)return e.match(o,r)}}class b{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const v=new Set;async function _(){for(const e of v)await e()}function C(e){return new Promise((t=>setTimeout(t,e)))}n(873);function I(e){return"string"===typeof e?new Request(e):e}class S{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new b,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=I(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(a){if(a instanceof Error)throw new r("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const s=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:s,response:e});return e}catch(o){throw i&&await this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:i.clone(),request:s.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=I(e);let n;const{cacheName:r,matchOptions:i}=this._strategy,s=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},i),{cacheName:r});n=await caches.match(s,a);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:r,matchOptions:i,cachedResponse:n,request:s,event:this.event})||void 0;return n}async cachePut(e,t){const n=I(e);await C(0);const i=await this.getCacheKey(n,"write");if(!t)throw new r("cache-put-with-no-response",{url:m(i.url)});const s=await this._ensureResponseSafeToCache(t);if(!s)return!1;const{cacheName:a,matchOptions:o}=this._strategy,c=await self.caches.open(a),u=this.hasCallback("cacheDidUpdate"),h=u?await y(c,i.clone(),["__WB_REVISION__"],o):null;try{await c.put(i,u?s.clone():s)}catch(l){if(l instanceof Error)throw"QuotaExceededError"===l.name&&await _(),l}for(const r of this.iterateCallbacks("cacheDidUpdate"))await r({cacheName:a,oldResponse:h,newResponse:s.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=I(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const i=Object.assign(Object.assign({},r),{state:n});return t[e](i)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(t=await r({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class k{constructor(e={}){this.cacheName=o.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"===typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,i=new S(this,{event:t,request:n,params:r}),s=this._getResponse(i,n,t),a=this._awaitComplete(s,i,n,t);return[s,a]}async _getResponse(e,t,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(i=await this._handle(t,e),!i||"error"===i.type)throw new r("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:t}),i)break;if(!i)throw s}for(const r of e.iterateCallbacks("handlerWillRespond"))i=await r({event:n,request:t,response:i});return i}async _awaitComplete(e,t,n,r){let i,s;try{i=await e}catch(s){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:i}),await t.doneWaiting()}catch(a){a instanceof Error&&(s=a)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:i,error:s}),t.destroy(),s)throw s}}class E extends k{constructor(e={}){e.cacheName=o.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const i=t.params||{};if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const r=i.integrity,s=e.integrity,a=!s||s===r;if(n=await t.fetch(new Request(e,{integrity:s||r})),r&&a){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,n.clone());0}}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e),i=await t.cachePut(e,n.clone());if(!i)throw new r("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==E.copyRedirectedCacheableResponsesPlugin&&(r===E.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},E.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await g(e):e}};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:o.getPrecacheName(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:i}=h(n),s="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==e)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(i,e),this._urlsToCacheModes.set(i,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[i,s]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(i),r=new Request(i,{integrity:t,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const i of t)n.has(i.url)||(await e.delete(i),r.push(i.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){const e=await self.caches.open(this.strategy.cacheName);return e.match(n)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new r("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let D;const O=()=>(D||(D=new T),D);n(80);const R="GET",A=e=>e&&"object"===typeof e?e:{handle:e};class P{constructor(e,t,n=R){this.handler=A(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=A(e)}}class N extends P{constructor(e,t,n){const r=({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)};super(r,t,n)}}class L{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:i,route:s}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let a=s&&s.handler;const o=e.method;if(!a&&this._defaultHandlerMap.has(o)&&(a=this._defaultHandlerMap.get(o)),!a)return void 0;let c;try{c=a.handle({url:n,request:e,event:t,params:i})}catch(h){c=Promise.reject(h)}const u=s&&s.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:e,event:t,params:i})}catch(s){s instanceof Error&&(r=s)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw r}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const i=this._routes.get(n.method)||[];for(const s of i){let i;const a=s.match({url:e,sameOrigin:t,request:n,event:r});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"===typeof a)&&(i=void 0),{route:s,params:i}}return{}}setDefaultHandler(e,t=R){this._defaultHandlerMap.set(t,A(e))}setCatchHandler(e){this._catchHandler=A(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let j;const M=()=>(j||(j=new L,j.addFetchListener(),j.addCacheListener()),j);function x(e,t,n){let i;if("string"===typeof e){const r=new URL(e,location.href);0;const s=({url:e})=>e.href===r.href;i=new P(s,t,n)}else if(e instanceof RegExp)i=new N(e,t,n);else if("function"===typeof e)i=new P(e,t,n);else{if(!(e instanceof P))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}const s=M();return s.registerRoute(i),i}function K(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}function*q(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:i}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const a=K(s,t);if(yield a.href,n&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=n,yield e.href}if(r){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:s});for(const t of e)yield t.href}}class U extends P{constructor(e,t){const n=({request:n})=>{const r=e.getURLsToCacheKeys();for(const i of q(n.url,t)){const t=r.get(i);if(t){const n=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:n}}}};super(n,e.strategy)}}function B(e){const t=O(),n=new U(t,e);x(n)}function $(e){const t=O();t.precache(e)}function F(e,t){$(e),B(t)}
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
const H=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},W=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,c=o?e[i+2]:0,u=t>>2,h=(3&t)<<4|a>>4;let l=(15&a)<<2|c>>6,f=63&c;o||(f=64,s||(l=64)),r.push(n[u],n[h],n[l],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(H(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):W(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const o=i<e.length,c=o?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==c||null==h)throw Error();const l=t<<2|a>>4;if(r.push(l),64!==c){const e=a<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(e){const t=H(e);return V.encodeByteArray(t,!0)};
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
 */function J(){return"object"===typeof indexedDB}function Z(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function X(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const Y="FirebaseError";class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Y,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?te(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`,o=new Q(r,a,n);return o}}function te(e,t){return e.replace(ne,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const ne=/\{\$([^}]+)}/g;
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
 */function re(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ie(n)&&ie(s)){if(!re(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ie(e){return null!==e&&"object"===typeof e}
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
function se(e){return e&&e._delegate?e._delegate:e}class ae{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const oe="[DEFAULT]";
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
 */class ce{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new G;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(he(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=oe){return this.instances.has(e)}getOptions(e=oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ue(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=oe){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ue(e){return e===oe?void 0:e}function he(e){return"EAGER"===e.instantiationMode}
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
 */class le{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ce(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const fe=[];var de;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(de||(de={}));const pe={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},ge=de.INFO,me={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},we=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=me[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ye{constructor(e){this.name=e,this._logLevel=ge,this._logHandler=we,this._userLogHandler=null,fe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?pe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}var be=n(676);
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
class ve{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(_e(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function _e(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Ce="@firebase/app",Ie="0.7.18",Se=new ye("@firebase/app"),ke="@firebase/app-compat",Ee="@firebase/analytics-compat",Te="@firebase/analytics",De="@firebase/app-check-compat",Oe="@firebase/app-check",Re="@firebase/auth",Ae="@firebase/auth-compat",Pe="@firebase/database",Ne="@firebase/database-compat",Le="@firebase/functions",je="@firebase/functions-compat",Me="@firebase/installations",xe="@firebase/installations-compat",Ke="@firebase/messaging",qe="@firebase/messaging-compat",Ue="@firebase/performance",Be="@firebase/performance-compat",$e="@firebase/remote-config",Fe="@firebase/remote-config-compat",He="@firebase/storage",We="@firebase/storage-compat",Ve="@firebase/firestore",ze="@firebase/firestore-compat",Ge="firebase",Je="[DEFAULT]",Ze={[Ce]:"fire-core",[ke]:"fire-core-compat",[Te]:"fire-analytics",[Ee]:"fire-analytics-compat",[Oe]:"fire-app-check",[De]:"fire-app-check-compat",[Re]:"fire-auth",[Ae]:"fire-auth-compat",[Pe]:"fire-rtdb",[Ne]:"fire-rtdb-compat",[Le]:"fire-fn",[je]:"fire-fn-compat",[Me]:"fire-iid",[xe]:"fire-iid-compat",[Ke]:"fire-fcm",[qe]:"fire-fcm-compat",[Ue]:"fire-perf",[Be]:"fire-perf-compat",[$e]:"fire-rc",[Fe]:"fire-rc-compat",[He]:"fire-gcs",[We]:"fire-gcs-compat",[Ve]:"fire-fst",[ze]:"fire-fst-compat","fire-js":"fire-js",[Ge]:"fire-js-all"},Xe=new Map,Ye=new Map;function Qe(e,t){try{e.container.addComponent(t)}catch(n){Se.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function et(e){const t=e.name;if(Ye.has(t))return Se.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const n of Xe.values())Qe(n,e);return!0}function tt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const nt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},rt=new ee("app","Firebase",nt);
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
class it{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ae("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}
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
 */function st(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Je,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw rt.create("bad-app-name",{appName:String(r)});const i=Xe.get(r);if(i){if(re(e,i.options)&&re(n,i.config))return i;throw rt.create("duplicate-app",{appName:r})}const s=new le(r);for(const o of Ye.values())s.addComponent(o);const a=new it(e,n,s);return Xe.set(r,a),a}function at(e=Je){const t=Xe.get(e);if(!t)throw rt.create("no-app",{appName:e});return t}function ot(e,t,n){var r;let i=null!==(r=Ze[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Se.warn(e.join(" "))}et(new ae(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const ct="firebase-heartbeat-database",ut=1,ht="firebase-heartbeat-store";let lt=null;function ft(){return lt||(lt=(0,be.openDb)(ct,ut,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(ht)}})).catch((e=>{throw rt.create("storage-open",{originalErrorMessage:e.message})}))),lt}async function dt(e){try{const t=await ft();return t.transaction(ht).objectStore(ht).get(mt(e))}catch(t){throw rt.create("storage-get",{originalErrorMessage:t.message})}}async function pt(e,t){try{const n=await ft(),r=n.transaction(ht,"readwrite"),i=r.objectStore(ht);return await i.put(t,mt(e)),r.complete}catch(n){throw rt.create("storage-set",{originalErrorMessage:n.message})}}async function gt(e){try{const t=await ft(),n=t.transaction(ht,"readwrite");return await n.objectStore(ht).delete(mt(e)),n.complete}catch(t){throw rt.create("storage-delete",{originalErrorMessage:t.message})}}function mt(e){return`${e.name}!${e.options.appId}`}
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
 */const wt=1024,yt=2592e6;class bt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ct(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=vt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some((e=>e.date===n)))return this._heartbeatsCache.push({date:n,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=yt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:e,unsentEntries:t}=_t(this._heartbeatsCache),n=z(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}function vt(){const e=new Date;return e.toISOString().substring(0,10)}function _t(e,t=wt){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.userAgent===i.userAgent));if(e){if(e.dates.push(i.date),It(n)>t){e.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),It(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ct{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!J()&&Z().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await dt(this.app);return(null===e||void 0===e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){const t=await this._canUseIndexedDBPromise;return t?pt(this.app,{heartbeats:e}):void 0}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return pt(this.app,{heartbeats:[...t,...e]})}}async delete(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return pt(this.app,{heartbeats:t.filter((t=>!e.includes(t)))})}}async deleteAll(){const e=await this._canUseIndexedDBPromise;return e?gt(this.app):void 0}}function It(e){return z(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function St(e){et(new ae("platform-logger",(e=>new ve(e)),"PRIVATE")),et(new ae("heartbeat",(e=>new bt(e)),"PRIVATE")),ot(Ce,Ie,e),ot(Ce,Ie,"esm2017"),ot("fire-js","")}St("");var kt="firebase",Et="9.6.8";
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
ot(kt,Et,"app");const Tt="@firebase/installations",Dt="0.5.5",Ot=1e4,Rt=`w:${Dt}`,At="FIS_v2",Pt="https://firebaseinstallations.googleapis.com/v1",Nt=36e5,Lt="installations",jt="Installations",Mt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},xt=new ee(Lt,jt,Mt);function Kt(e){return e instanceof Q&&e.code.includes("request-failed")}
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
 */function qt({projectId:e}){return`${Pt}/projects/${e}/installations`}function Ut(e){return{token:e.token,requestStatus:2,expiresIn:Wt(e.expiresIn),creationTime:Date.now()}}async function Bt(e,t){const n=await t.json(),r=n.error;return xt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ft(e,{refreshToken:t}){const n=$t(e);return n.append("Authorization",Vt(t)),n}async function Ht(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Wt(e){return Number(e.replace("s","000"))}function Vt(e){return`${At} ${e}`}
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
 */async function zt(e,{fid:t}){const n=qt(e),r=$t(e),i={fid:t,authVersion:At,appId:e.appId,sdkVersion:Rt},s={method:"POST",headers:r,body:JSON.stringify(i)},a=await Ht((()=>fetch(n,s)));if(a.ok){const e=await a.json(),n={fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ut(e.authToken)};return n}throw await Bt("Create Installation",a)}
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
 */function Gt(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */function Jt(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const Zt=/^[cdef][\w-]{21}$/,Xt="";function Yt(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=Qt(e);return Zt.test(n)?n:Xt}catch(e){return Xt}}function Qt(e){const t=Jt(e);return t.substr(0,22)}
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
 */function en(e){return`${e.appName}!${e.appId}`}
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
 */const tn=new Map;function nn(e,t){const n=en(e);rn(n,t),sn(n,t)}function rn(e,t){const n=tn.get(e);if(n)for(const r of n)r(t)}function sn(e,t){const n=on();n&&n.postMessage({key:e,fid:t}),cn()}let an=null;function on(){return!an&&"BroadcastChannel"in self&&(an=new BroadcastChannel("[Firebase] FID Change"),an.onmessage=e=>{rn(e.data.key,e.data.fid)}),an}function cn(){0===tn.size&&an&&(an.close(),an=null)}
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
 */const un="firebase-installations-database",hn=1,ln="firebase-installations-store";let fn=null;function dn(){return fn||(fn=(0,be.openDb)(un,hn,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(ln)}}))),fn}async function pn(e,t){const n=en(e),r=await dn(),i=r.transaction(ln,"readwrite"),s=i.objectStore(ln),a=await s.get(n);return await s.put(t,n),await i.complete,a&&a.fid===t.fid||nn(e,t.fid),t}async function gn(e){const t=en(e),n=await dn(),r=n.transaction(ln,"readwrite");await r.objectStore(ln).delete(t),await r.complete}async function mn(e,t){const n=en(e),r=await dn(),i=r.transaction(ln,"readwrite"),s=i.objectStore(ln),a=await s.get(n),o=t(a);return void 0===o?await s.delete(n):await s.put(o,n),await i.complete,!o||a&&a.fid===o.fid||nn(e,o.fid),o}
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
 */async function wn(e){let t;const n=await mn(e,(n=>{const r=yn(n),i=bn(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===Xt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yn(e){const t=e||{fid:Yt(),registrationStatus:0};return In(t)}function bn(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(xt.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vn(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:_n(e)}:{installationEntry:t}}async function vn(e,t){try{const n=await zt(e,t);return pn(e,n)}catch(n){throw Kt(n)&&409===n.customData.serverCode?await gn(e):await pn(e,{fid:t.fid,registrationStatus:0}),n}}async function _n(e){let t=await Cn(e);while(1===t.registrationStatus)await Gt(100),t=await Cn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await wn(e);return n||t}return t}function Cn(e){return mn(e,(e=>{if(!e)throw xt.create("installation-not-found");return In(e)}))}function In(e){return Sn(e)?{fid:e.fid,registrationStatus:0}:e}function Sn(e){return 1===e.registrationStatus&&e.registrationTime+Ot<Date.now()}
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
 */async function kn({appConfig:e,platformLoggerProvider:t},n){const r=En(e,n),i=Ft(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:Rt}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Ht((()=>fetch(r,o)));if(c.ok){const e=await c.json(),t=Ut(e);return t}throw await Bt("Generate Auth Token",c)}function En(e,{fid:t}){return`${qt(e)}/${t}/authTokens:generate`}
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
 */async function Tn(e,t=!1){let n;const r=await mn(e.appConfig,(r=>{if(!An(r))throw xt.create("not-registered");const i=r.authToken;if(!t&&Pn(i))return r;if(1===i.requestStatus)return n=Dn(e,t),r;{if(!navigator.onLine)throw xt.create("app-offline");const t=Ln(r);return n=Rn(e,t),t}})),i=n?await n:r.authToken;return i}async function Dn(e,t){let n=await On(e.appConfig);while(1===n.authToken.requestStatus)await Gt(100),n=await On(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Tn(e,t):r}function On(e){return mn(e,(e=>{if(!An(e))throw xt.create("not-registered");const t=e.authToken;return jn(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function Rn(e,t){try{const n=await kn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await pn(e.appConfig,r),n}catch(n){if(!Kt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pn(e.appConfig,n)}else await gn(e.appConfig);throw n}}function An(e){return void 0!==e&&2===e.registrationStatus}function Pn(e){return 2===e.requestStatus&&!Nn(e)}function Nn(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Nt}function Ln(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jn(e){return 1===e.requestStatus&&e.requestTime+Ot<Date.now()}
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
 */async function Mn(e){const t=e,{installationEntry:n,registrationPromise:r}=await wn(t.appConfig);return r?r.catch(console.error):Tn(t).catch(console.error),n.fid}
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
 */async function xn(e,t=!1){const n=e;await Kn(n.appConfig);const r=await Tn(n,t);return r.token}async function Kn(e){const{registrationPromise:t}=await wn(e);t&&await t}
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
function qn(e){if(!e||!e.options)throw Un("App Configuration");if(!e.name)throw Un("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Un(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Un(e){return xt.create("missing-app-config-values",{valueName:e})}
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
 */const Bn="installations",$n="installations-internal",Fn=e=>{const t=e.getProvider("app").getImmediate(),n=qn(t),r=tt(t,"platform-logger"),i={app:t,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()};return i},Hn=e=>{const t=e.getProvider("app").getImmediate(),n=tt(t,Bn).getImmediate(),r={getId:()=>Mn(n),getToken:e=>xn(n,e)};return r};function Wn(){et(new ae(Bn,Fn,"PUBLIC")),et(new ae($n,Hn,"PRIVATE"))}Wn(),ot(Tt,Dt),ot(Tt,Dt,"esm2017");
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
const Vn="/firebase-messaging-sw.js",zn="/firebase-cloud-messaging-push-scope",Gn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Jn="https://fcmregistrations.googleapis.com/v1",Zn="google.c.a.c_id",Xn="google.c.a.c_l",Yn="google.c.a.ts",Qn="google.c.a.e";var er,tr;
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
function nr(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function rr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(er||(er={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(tr||(tr={}));const ir="fcm_token_details_db",sr=5,ar="fcm_token_object_Store";async function or(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(ir))return null}let t=null;const n=await(0,be.openDb)(ir,sr,(async n=>{var r;if(n.oldVersion<2)return;if(!n.objectStoreNames.contains(ar))return;const i=n.transaction.objectStore(ar),s=await i.index("fcmSenderId").get(e);if(await i.clear(),s)if(2===n.oldVersion){const e=s;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(r=e.createTime)&&void 0!==r?r:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:nr(e.vapidKey)}}}else if(3===n.oldVersion){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:nr(e.auth),p256dh:nr(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:nr(e.vapidKey)}}}else if(4===n.oldVersion){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:nr(e.auth),p256dh:nr(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:nr(e.vapidKey)}}}}));return n.close(),await(0,be.deleteDb)(ir),await(0,be.deleteDb)("fcm_vapid_details_db"),await(0,be.deleteDb)("undefined"),cr(t)?t:null}function cr(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const ur="firebase-messaging-database",hr=1,lr="firebase-messaging-store";let fr=null;function dr(){return fr||(fr=(0,be.openDb)(ur,hr,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(lr)}}))),fr}async function pr(e){const t=wr(e),n=await dr(),r=await n.transaction(lr).objectStore(lr).get(t);if(r)return r;{const t=await or(e.appConfig.senderId);if(t)return await gr(e,t),t}}async function gr(e,t){const n=wr(e),r=await dr(),i=r.transaction(lr,"readwrite");return await i.objectStore(lr).put(t,n),await i.complete,t}async function mr(e){const t=wr(e),n=await dr(),r=n.transaction(lr,"readwrite");await r.objectStore(lr).delete(t),await r.complete}function wr({appConfig:e}){return e.appId}
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
 */const yr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},br=new ee("messaging","Messaging",yr);
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
async function vr(e,t){const n=await Sr(e),r=kr(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{const t=await fetch(Ir(e.appConfig),i);s=await t.json()}catch(a){throw br.create("token-subscribe-failed",{errorInfo:a})}if(s.error){const e=s.error.message;throw br.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw br.create("token-subscribe-no-token");return s.token}async function _r(e,t){const n=await Sr(e),r=kr(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{const n=await fetch(`${Ir(e.appConfig)}/${t.token}`,i);s=await n.json()}catch(a){throw br.create("token-update-failed",{errorInfo:a})}if(s.error){const e=s.error.message;throw br.create("token-update-failed",{errorInfo:e})}if(!s.token)throw br.create("token-update-no-token");return s.token}async function Cr(e,t){const n=await Sr(e),r={method:"DELETE",headers:n};try{const n=await fetch(`${Ir(e.appConfig)}/${t}`,r),i=await n.json();if(i.error){const e=i.error.message;throw br.create("token-unsubscribe-failed",{errorInfo:e})}}catch(i){throw br.create("token-unsubscribe-failed",{errorInfo:i})}}function Ir({projectId:e}){return`${Jn}/projects/${e}/registrations`}async function Sr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function kr({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==Gn&&(i.web.applicationPubKey=r),i}
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
 */const Er=6048e5;async function Tr(e){const t=await Ar(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:nr(t.getKey("auth")),p256dh:nr(t.getKey("p256dh"))},r=await pr(e.firebaseDependencies);if(r){if(Pr(r.subscriptionOptions,n))return Date.now()>=r.createTime+Er?Or(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Cr(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Rr(e.firebaseDependencies,n)}return Rr(e.firebaseDependencies,n)}async function Dr(e){const t=await pr(e.firebaseDependencies);t&&(await Cr(e.firebaseDependencies,t.token),await mr(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Or(e,t){try{const n=await _r(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await gr(e.firebaseDependencies,r),n}catch(n){throw await Dr(e),n}}async function Rr(e,t){const n=await vr(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await gr(e,r),r.token}async function Ar(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:rr(t)})}function Pr(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&i&&s}
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
 */function Nr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Lr(t,e),jr(t,e),Mr(t,e),t}function Lr(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i)}function jr(e,t){t.data&&(e.data=t.data)}function Mr(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}
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
 */function xr(e){return"object"===typeof e&&!!e&&Zn in e}
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
 */function Kr(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}
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
 */function qr(e){if(!e||!e.options)throw Ur("App Configuration Object");if(!e.name)throw Ur("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Ur(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ur(e){return br.create("missing-app-config-values",{valueName:e})}
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
 */Kr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Kr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Br{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=qr(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function $r(e){try{e.swRegistration=await navigator.serviceWorker.register(Vn,{scope:zn}),e.swRegistration.update().catch((()=>{}))}catch(t){throw br.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}
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
 */async function Fr(e,t){if(t||e.swRegistration||await $r(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw br.create("invalid-sw-registration");e.swRegistration=t}}
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
 */async function Hr(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Gn)}
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
 */async function Wr(e,t){if(!navigator)throw br.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw br.create("permission-blocked");return await Hr(e,null===t||void 0===t?void 0:t.vapidKey),await Fr(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),Tr(e)}
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
 */async function Vr(e,t,n){const r=zr(t),i=await e.firebaseDependencies.analyticsProvider.get();i.logEvent(r,{message_id:n[Zn],message_name:n[Xn],message_time:n[Yn],message_device_time:Math.floor(Date.now()/1e3)})}function zr(e){switch(e){case tr.NOTIFICATION_CLICKED:return"notification_open";case tr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */async function Gr(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===tr.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(Nr(n)):e.onMessageHandler.next(Nr(n)));const r=n.data;xr(r)&&"1"===r[Qn]&&await Vr(e,n.messageType,r)}const Jr="@firebase/messaging",Zr="0.9.9",Xr=e=>{const t=new Br(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>Gr(t,e))),t},Yr=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>Wr(t,e)};return n};function Qr(){et(new ae("messaging",Xr,"PUBLIC")),et(new ae("messaging-internal",Yr,"PRIVATE")),ot(Jr,Zr),ot(Jr,Zr,"esm2017")}
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
 */async function ei(){try{await Z()}catch(e){return!1}return"undefined"!==typeof window&&J()&&X()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
function ti(e=at()){return ei().then((e=>{if(!e)throw br.create("unsupported-browser")}),(e=>{throw br.create("indexed-db-unsupported")})),tt(se(e),"messaging").getImmediate()}async function ni(e,t){return e=se(e),Wr(e,t)}Qr(),F([{'revision':null,'url':'/pcgl-dev/css/555.8770f46a.css'},{'revision':null,'url':'/pcgl-dev/css/831.8770f46a.css'},{'revision':null,'url':'/pcgl-dev/css/861.ec8fb37e.css'},{'revision':null,'url':'/pcgl-dev/css/app.d49e4b10.css'},{'revision':'ac85224c3d3afb512224c58a97b0270b','url':'/pcgl-dev/index.html'},{'revision':null,'url':'/pcgl-dev/js/555.1368979d.js'},{'revision':null,'url':'/pcgl-dev/js/660.16d230b4.js'},{'revision':null,'url':'/pcgl-dev/js/714.e79495c2.js'},{'revision':null,'url':'/pcgl-dev/js/831.687bc6a9.js'},{'revision':null,'url':'/pcgl-dev/js/861.d7f554b1.js'},{'revision':null,'url':'/pcgl-dev/js/app.4147faf6.js'},{'revision':null,'url':'/pcgl-dev/js/chunk-vendors.7c9adf90.js'},{'revision':'3dd6e38d9576213b630cf7e2359477d5','url':'/pcgl-dev/manifest.json'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/pcgl-dev/robots.txt'}]);const ri={apiKey:"AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",authDomain:"pcgltricarico05.firebaseapp.com",databaseURL:"https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pcgltricarico05",storageBucket:"pcgltricarico05.appspot.com",messagingSenderId:"320152077505",appId:"1:320152077505:web:f4c84686f061134a78c040",measurementId:"G-7ZHL4J15XG"},ii=(st(ri),ti());ni(ii,{vapidKey:"BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU"})}()})();
//# sourceMappingURL=firebase-messaging-sw.js.map