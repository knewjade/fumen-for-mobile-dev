if(!self.define){let i,e={};const c=(c,a)=>(c=new URL(c+".js",a).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(a,n)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const s=i=>c(i,o),f={module:{uri:o},exports:r,require:s};e[o]=Promise.all(a.map((i=>f[i]||s(i)))).then((i=>(n(...i),r)))}}define(["./workbox-b86ff79f"],(function(i){"use strict";i.setCacheNameDetails({prefix:"fumen-for-mobile"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"help.html",revision:"68e84e8db3b29d8dbecee5800d2ea83a"},{url:"icons/android-icon-144x144.png",revision:"3216767ed0c3fd210e8fd479c07ea281"},{url:"icons/android-icon-192x192.png",revision:"5f8950b1ea76d7f0b9035b841f5b2db5"},{url:"icons/android-icon-36x36.png",revision:"e96d9a86b0620e6545ffdb2ce6bbdb5d"},{url:"icons/android-icon-48x48.png",revision:"46f6f17e90ad1cd74654e191c13eb75c"},{url:"icons/android-icon-72x72.png",revision:"487382f4a46c357bdd0a42a5459db976"},{url:"icons/android-icon-96x96.png",revision:"20e72ee77fc2b1bb69d5c4b65ca7d1b8"},{url:"icons/apple-icon-114x114.png",revision:"c4ca2249c0db7568b8db7b93c62485e3"},{url:"icons/apple-icon-120x120.png",revision:"838dd44741e9c4b33ff62ec8ffe6cedb"},{url:"icons/apple-icon-144x144.png",revision:"3216767ed0c3fd210e8fd479c07ea281"},{url:"icons/apple-icon-152x152.png",revision:"edd88540b15a535cbc95e1bf977fb347"},{url:"icons/apple-icon-180x180.png",revision:"304368d7b781913fe521efee46b5c138"},{url:"icons/apple-icon-57x57.png",revision:"106e70c9ba91ea801e267fa3de0f0d04"},{url:"icons/apple-icon-60x60.png",revision:"9a2fdfe0a1eb5708c3d05bcb0e0022fd"},{url:"icons/apple-icon-72x72.png",revision:"487382f4a46c357bdd0a42a5459db976"},{url:"icons/apple-icon-76x76.png",revision:"87d2a635f2206ab61fc9d41288217e43"},{url:"icons/apple-icon-precomposed.png",revision:"2587c8b82c8836a024a30880a0890103"},{url:"icons/apple-icon.png",revision:"2587c8b82c8836a024a30880a0890103"},{url:"icons/favicon-16x16.png",revision:"8d1b5259112d3447e6518796153b0c81"},{url:"icons/favicon-32x32.png",revision:"3763e0a069e930f3c322b38b241ecf1e"},{url:"icons/favicon-96x96.png",revision:"20e72ee77fc2b1bb69d5c4b65ca7d1b8"},{url:"icons/favicon.ico",revision:"e286d64c9bb819cbb76cb844badad5e8"},{url:"icons/ms-icon-144x144.png",revision:"3216767ed0c3fd210e8fd479c07ea281"},{url:"icons/ms-icon-150x150.png",revision:"530186601d3f783b9f9028a6bc756074"},{url:"icons/ms-icon-310x310.png",revision:"235d3f4d248d287286ac94d4f90d0cf6"},{url:"icons/ms-icon-70x70.png",revision:"f2cfb937b65792662948480891d41333"},{url:"img/Empty.svg",revision:"afcee0b28e87aecce178cf8284b4a561"},{url:"img/Empty_classic.svg",revision:"afcee0b28e87aecce178cf8284b4a561"},{url:"img/Gray.svg",revision:"42e02c0d17df4a0ca7b53d9ba709911d"},{url:"img/Gray_classic.svg",revision:"42e02c0d17df4a0ca7b53d9ba709911d"},{url:"img/I.svg",revision:"74a5daf708e1f5d521e384ee5f24205f"},{url:"img/I_classic.svg",revision:"a60c15325ff41da0403edacc5ebc9981"},{url:"img/J.svg",revision:"bf10bcb97edd2dd5f073ddb372d16102"},{url:"img/J_classic.svg",revision:"9c248e83d3437d0088a14248df972478"},{url:"img/L.svg",revision:"bd56817d5a2750a2a3fa9e7a94d8c7c4"},{url:"img/L_classic.svg",revision:"95db2883f78dacc9b942e2cba099635b"},{url:"img/O.svg",revision:"4b17e343f518e65dfb1308febdc4a11d"},{url:"img/O_classic.svg",revision:"4b17e343f518e65dfb1308febdc4a11d"},{url:"img/S.svg",revision:"ad400d84a5fc9477b51cca2c24a584ff"},{url:"img/S_classic.svg",revision:"8fd3f0910746202759113df4b3075aae"},{url:"img/T.svg",revision:"267ce8f8ec2f47d7b8d2f1507837b933"},{url:"img/T_classic.svg",revision:"169f889033faee7b3a8d8979a44f9963"},{url:"img/Z.svg",revision:"84d942045663a664d5a2564f63d09313"},{url:"img/Z_classic.svg",revision:"da234aa67fac0c0a68bb2037b24e9273"},{url:"img/rotation_Empty.svg",revision:"dbf0f45656c3d98f4e07057362575924"},{url:"img/rotation_Left.svg",revision:"1d162760df41363cbeddf25cb8b85ea2"},{url:"img/rotation_Reverse.svg",revision:"50eda3c4784dcb212b388f899c18106d"},{url:"img/rotation_Right.svg",revision:"918c4a62b01850c8838b9895bd910105"},{url:"img/rotation_Spawn.svg",revision:"ae7c28898b87703b3a916953898389a9"},{url:"index.html",revision:"4fafd3123c812a0412b3a0bf7c6eb855"},{url:"jump.js",revision:"2beffb80be256125c681c719fe83e44c"},{url:"main.bundle.js",revision:"a4f5c22b677137e5fe62dd126babc52f"},{url:"manifest.json",revision:"64b88b07c6ac5ed8c57a21c32de98eeb"},{url:"material-iconfont/_mixins.scss",revision:"d441a5aa0f989c9494b51c18fff4c6e4"},{url:"material-iconfont/_variables.scss",revision:"24401e39eeafcee228f9b0a7b2635581"},{url:"material-iconfont/filled.css",revision:"56a03889f6ddfbc0b46947d925315f30"},{url:"material-iconfont/filled.scss",revision:"626952ede1c1a01f18eb5e89074c95c5"},{url:"material-iconfont/material-icons-outlined.woff",revision:"9948d1d93a30e6666189ff147ea7ec96"},{url:"material-iconfont/material-icons-outlined.woff2",revision:"e1a7398bccc3cac6f91a6feafad048a5"},{url:"material-iconfont/material-icons-round.woff",revision:"e39e19c19fbfffb3af5d86ee2253d495"},{url:"material-iconfont/material-icons-round.woff2",revision:"da654c21ca224f15548c17f6e02b166c"},{url:"material-iconfont/material-icons-sharp.woff",revision:"fa4268daf9819b8da431261386438563"},{url:"material-iconfont/material-icons-sharp.woff2",revision:"42b22ac52b110bb11691dcfd11d5baa0"},{url:"material-iconfont/material-icons-two-tone.woff",revision:"ca42f38d705a8b959501260705b07dd7"},{url:"material-iconfont/material-icons-two-tone.woff2",revision:"5cbc7f31926fbce673484646b6af3d10"},{url:"material-iconfont/material-icons.css",revision:"1a7232cb0cad2269f09c6be4c274c00c"},{url:"material-iconfont/material-icons.scss",revision:"83424e664bd720c175e0a0d0f0293fa2"},{url:"material-iconfont/material-icons.woff",revision:"263e223425dafdc3b3658d81d164f986"},{url:"material-iconfont/material-icons.woff2",revision:"7bdf272c965400b0c625533e3aea2e31"},{url:"material-iconfont/outlined.css",revision:"ad9f5ca8f4fb3cd39c788f1c8f6868bd"},{url:"material-iconfont/outlined.scss",revision:"9bf2101b04cbe6a9e17fd2cd9feb7e79"},{url:"material-iconfont/round.css",revision:"7ff45fcddc4935a34d551a7404db7426"},{url:"material-iconfont/round.scss",revision:"f3fbf04eedcc7f226773a2eefa2747ec"},{url:"material-iconfont/sharp.css",revision:"32e18af4abf255f08719b808cf247f31"},{url:"material-iconfont/sharp.scss",revision:"4e43408e1d014de4f08142a6720435bc"},{url:"material-iconfont/two-tone.css",revision:"970321db9e87699c81ed8d65b7635119"},{url:"material-iconfont/two-tone.scss",revision:"ead29640b6251328022d6de84d0f5d82"},{url:"materialize/materialize.min.css",revision:"ec1df3ba49973dcb9ff212f052d39483"},{url:"materialize/materialize.min.js",revision:"9c564b22a702425399b1124389ca0624"},{url:"materialize/materialize.min.js.LICENSE.txt",revision:"601c83c85129f3955a169de052f2ac58"},{url:"vendor.bundle.js",revision:"24c041ef443e0879d9482aa4d103fcbc"},{url:"vendor.bundle.js.LICENSE.txt",revision:"596f62f005ab771450a45985410c8645"}],{}),i.initialize({})}));
