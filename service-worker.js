if(!self.define){let l,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const l=document.createElement("script");l.src=r,l.onload=e,document.head.appendChild(l)}else l=r,importScripts(r),e()})).then((()=>{let l=e[r];if(!l)throw new Error(`Module ${r} didn’t register its module`);return l})));self.define=(i,s)=>{const t=l||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let n={};const o=l=>r(l,t),c={module:{uri:t},exports:n,require:o};e[t]=Promise.all(i.map((l=>c[l]||o(l)))).then((l=>(s(...l),n)))}}define(["./workbox-db5fc017"],(function(l){"use strict";l.setCacheNameDetails({prefix:"alien-rpg-roller"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/alien-ttrpg-skill-roller/css/app.382bbcc5.css",revision:null},{url:"/alien-ttrpg-skill-roller/index.html",revision:"acff167037b9fab11a22a089a3b61c0a"},{url:"/alien-ttrpg-skill-roller/js/about.9a2f39c7.js",revision:null},{url:"/alien-ttrpg-skill-roller/js/app.d87c9c74.js",revision:null},{url:"/alien-ttrpg-skill-roller/js/chunk-vendors.377ae7f8.js",revision:null},{url:"/alien-ttrpg-skill-roller/manifest.json",revision:"da9296fe4e34ecc3555c0098452546d4"},{url:"/alien-ttrpg-skill-roller/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
