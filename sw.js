if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return o[e]||(r=new Promise((async r=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]}))},r=(r,o)=>{Promise.all(r.map(e)).then((e=>o(1===e.length?e[0]:e)))},o={require:Promise.resolve(r)};self.define=(r,n,s)=>{o[r]||(o[r]=Promise.resolve().then((()=>{let o={};const i={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return o;case"module":return i;default:return e(r)}}))).then((e=>{const r=s(...e);return o.default||(o.default=r),o}))})))}}define("./sw.js",["./workbox-60633eee"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fumen-for-mobile"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"main.bundle.js",revision:"b2f533a0690d515bbd62f49e9dfb0505"},{url:"vendor.bundle.js",revision:"8f8dea244e7c3f4fb3d7c321c6ec77c6"},{url:"vendor.bundle.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"}],{}),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/materialize\/.+\.(js|css)$/,new e.CacheFirst({cacheName:"fumen-for-mobile-materialize-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1209600,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/icon\?family=Material\+Icons$/,new e.CacheFirst({cacheName:"fumen-for-mobile-materialize-font-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1209600,purgeOnQuotaError:!0})]}),"GET"),e.initialize({})}));
