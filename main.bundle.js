(self.webpackChunkn7_site=self.webpackChunkn7_site||[]).push([[792],{208:(n,e,t)=>{"use strict";t.d(e,{A:()=>x});var o=t(601),a=t.n(o),i=t(314),r=t.n(i),s=t(417),c=t.n(s),d=new URL(t(109),t.b),l=new URL(t(13),t.b),u=new URL(t(63),t.b),p=new URL(t(749),t.b),m=new URL(t(73),t.b),f=r()(a()),h=c()(d),g=c()(l),y=c()(u),b=c()(p),v=c()(m);f.push([n.id,`@font-face {\n  font-family: "Roboto";\n  src: url(${h});\n}\n\n@font-face {\n  font-family: "Nato Sans";\n  src: url(${g});\n}\n\n@font-face {\n  font-family: "Kay";\n  src: url(${y});\n}\n\n@font-face {\n  font-family: "Nunito";\n  src: url(${b});\n}\n\n:root {\n  --main-size: 100vh;\n  --header-size: 7em;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh4,\nul,\nspan {\n  font-family: "Nunito";\n}\n\nh3 {\n  font-family: "Kay";\n  font-size: 1.25rem;\n}\n\np {\n  font-family: "Kay";\n}\n\nbody {\n  background-color: #0a0a0a;\n  overflow: auto;\n  scrollbar-width: none;\n  animation: load 0.6s;\n}\n\n.load-scroll {\n  overflow: hidden;\n}\n\nbody::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\nul {\n  display: flex;\n  gap: 2em;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  font-family: "Nunito";\n}\n\n.main {\n  color: white;\n  min-height: var(--main-size);\n  transition: background-image 0.9s ease-in-out;\n  transition: opacity 1s ease-in-out;\n  background-image: url(${v});\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  background-position: fixed;\n  animation: load 1s;\n}\n\n.main * {\n  animation: load 0.5s;\n}\n\n.loaded::before {\n  opacity: 1;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: var(--header-size);\n}\n\nheader .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1em;\n  height: 90%;\n}\n\nheader .line {\n  border: 1px solid white;\n  color: white;\n}\n\nnav {\n  margin-bottom: 0.5em;\n}\n\nheader li {\n  transition: all 0.15s ease-in-out;\n  margin-bottom: 5px;\n  cursor: default;\n}\n\nheader li:hover {\n  transform: translateY(-5px);\n}\n\n.head-li:active {\n  scale: 1.1;\n}\n\n.hover-li {\n  border-bottom: 2px solid white;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(var(--main-size) - var(--header-size));\n}\n\n#content.load-content {\n  overflow: hidden;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid #27272a;\n  border-radius: 16px;\n  background-color: #18181b;\n  height: 500px;\n  max-width: 700px;\n  width: 60%;\n  min-width: 550px;\n  opacity: 0.925;\n  gap: 1em;\n}\n\n.container h1 {\n  margin-top: 1em;\n}\n\n.container p {\n  font-size: 1.15rem;\n}\n\n.container img {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin: 1.5em;\n  object-fit: cover;\n}\n\n.discord-button {\n  display: flex;\n  border: 2px solid #404040;\n  border-radius: 5px;\n  background-color: #262626;\n  color: white;\n  width: 35%;\n  height: 2em;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.discord-button:active {\n  scale: 1.1;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px,1fr));\n  grid-template-rows: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 2em;\n  margin-top: 2em;\n  margin-left: 2em;\n  margin-right: 2em;\n  width: calc(100% - 4em);\n  min-height: calc(85vh - 11em);\n  margin-bottom: 0.5em;\n  /* height: auto; */\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  border-radius: 15px;\n  background-color: #262626;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-blend-mode: inherits;\n  background-size: cover;\n  transition: all 0.3s ease-in-out;\n  min-height: 340px;\n}\n\n.item:hover {\n  scale: 1.05;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: #262626;\n  border-radius: 0 0 8px 8px;\n  height: 20%;\n  transition: all 0.3s ease-in-out;\n}\n\n.footer * {\n  margin-left: 0.5em;\n}\n\n.footer:hover {\n  background-color: #9e0707;\n}\n\n.footer div {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer p {\n  font-family: "Nunito";\n}\n\n.footer button {\n  display: flex;\n  height: 100%;\n  width: 30%;\n  justify-content: center;\n  align-items: center;\n  font-family: "Nunito";\n  transition: all 0.3s ease-in-outW;\n  border-radius: 0 0 8px 0;\n  border: none;\n  background-color: #262626;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n\n.div-text {\n  display: none;\n  background-color: #18181b;\n  opacity: 0.975;\n  height: calc(100% - 20%);\n  width: 100%;\n  border-radius: 15px 15px 0 0;\n  transition: all 0.3s ease-in-out;\n}\n\n.div-text p {\n  margin: 1em ;\n  font-family: "Roboto";\n}\n\n.container-info {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  max-width: 500px;\n  gap: 3em;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\n\n.description h2:first-child{\n  margin-top: 0em;\n}\n\n.description h2 {\n  margin-top: 1.5em;\n}\n\n.footer-date {\n  display: flex;\n  justify-content: end;\n}\n\n@keyframes load {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}`,""]);const x=f},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var c=o(n,a),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},662:(n,e,t)=>{"use strict";var o=t(72),a=t.n(o),i=t(825),r=t.n(i),s=t(659),c=t.n(s),d=t(56),l=t.n(d),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals,t(646),t(177),t.p,t(73),t.p,t.p,t.p,t.p,t.p,t.p},646:()=>{window.addEventListener("load",(()=>{const n=document.querySelector(".main");n.classList.add("loaded"),n.style.opacity="1",setTimeout((function(){document.body.classList.remove("load-scroll")}),1e3)}))},177:()=>{const n=document.querySelector("#content"),e=document.querySelectorAll(".head-li"),t=(document.querySelector(".grid-container"),document.querySelector(".link-item"),document.querySelector(".opened"),document.querySelector(".main"));function o(){return n.innerHTML=""}function a(){const e=document.createElement("div");e.classList.add("container"),n.appendChild(e);const t=document.createElement("h1");t.innerHTML="Join to the channel",e.appendChild(t);const o=document.createElement("p");o.innerHTML="This is a Russian community of gamers.",e.appendChild(o);const a=document.createElement("img");a.src="./assets/logo.png",a.alt="logo",e.appendChild(a);const i=document.createElement("a");i.href="https://discord.gg/j3KxS685wp",i.classList.add("discord-button"),i.target="_blank",i.innerHTML="Join To",e.appendChild(i)}function i(n,e,t,o,a){const i=document.createElement("div");i.classList.add("item"),i.style.backgroundImage=`url("${o}")`,a.appendChild(i);const r=document.createElement("div");r.classList.add("div-text"),i.appendChild(r);const s=document.createElement("p");s.innerHTML=t,r.appendChild(s);const c=document.createElement("div");c.classList.add("footer"),i.appendChild(c);const d=document.createElement("div");c.appendChild(d);const l=document.createElement("h3");l.innerHTML=n,d.appendChild(l);const u=document.createElement("p");u.innerHTML=e,d.appendChild(u);const p=document.createElement("button");p.classList.add("link-item"),c.appendChild(p);const m=document.createElement("h4");m.innerHTML="Читать",p.appendChild(m),c.addEventListener("mouseover",(()=>{p.style.backgroundColor="#9e0707"})),c.addEventListener("mouseout",(()=>{p.style.backgroundColor="#262626"})),p.addEventListener("mousedown",(()=>{p.classList.contains("opened")?(r.style.opacity="0",setTimeout((function(){r.style.display="none"}),300),p.classList.remove("opened")):(r.style.display="block",r.style.opacity="0.975",p.classList.add("opened"))}))}a(),document.body.classList.add("load-scroll"),setTimeout((function(){document.body.classList.remove("load-scroll")}),1e3);let r=[{heading:"Добавление нового бота",span:"Теперь в ⁠🤖︱бот-команды можно вводить функции @GAME-INFO  который будет оповещать вас о различных раздачах игр и многое другое. Подробнее можно узнать выполнив команду !help выбрав данного бота как условие запроса. "},{heading:"Добавление нового бота",span:"В предыдущем обновлении 1.5 мы добавляли «КЛАНЫ» спустя время они стали не актуальны, хоть задумка была интересная и даже очень залипательная, но всему приходит конец, поэтому мы ее удалили полностью. "},{heading:"Добавление нового бота",span:"Решили заменить символ на более иной, прошлый надоел."}];e.forEach((e=>{e.addEventListener("click",(e=>{if("home"==e.target.id)o(),n.style.alignItems="center",t.style.backgroundImage='url("./assets/back.webp")',a();else if("news"==e.target.id)o(),n.style.alignItems="center",t.style.backgroundImage='url("./assets/back2.jpg")',function(e,t,o){const a=document.createElement("div");a.classList.add("container-info"),n.appendChild(a);const i=document.createElement("div");i.classList.add("head"),a.appendChild(i);const r=document.createElement("div");r.classList.add("description"),a.appendChild(r);const s=document.createElement("div");s.classList.add("footer-date"),a.appendChild(s);const c=document.createElement("h1");c.innerHTML="Обновление сервера 1.6",i.appendChild(c);const d=document.createElement("span");d.innerHTML="Обновление с некоторыми исправлениями",i.appendChild(d),o.forEach((({heading:n,span:e})=>{const t=document.createElement("h2");t.innerHTML=n,r.appendChild(t);const o=document.createElement("span");o.innerHTML=e,r.appendChild(o)}));const l=document.createElement("h4");l.innerHTML="Обновление от 12.08.24",s.appendChild(l)}(0,0,r);else if("info"==e.target.id){o(),n.style.alignItems="baseline",t.style.backgroundImage='url("./assets/back1.webp")';const e=document.createElement("div");e.classList.add("grid-container"),n.appendChild(e),document.body.classList.add("load-scroll"),setTimeout((function(){document.body.classList.remove("load-scroll")}),1e3),i("Illarionz","Owner N7","Крутой тип с фасика.","./assets/illarionz.jpg",e),i("rokeyzzz","Owner N7","Меня убил Дантес, я призрак Пушкина, преследую маленьких девочек по Иркутску, чтобы написать поэму о их маленькой жизни.","./assets/rokeyzzz.png",e),i("kurtted","Developer N7",'Меня бросила девушка со словами "Ты мне больше никто", в ответ я сказал "Маме своей так скажи" и проломил ей череп вертухой дрррррпмбум чикибубуббм...',"./assets/kurtted.gif",e),i("realm","Developer N7","Мастер разоблачений, самый крутой тип на сервере, создатель этого сайта.","./assets/realm.gif",e)}}))}))},73:(n,e,t)=>{"use strict";n.exports=t.p+"assets/back.webp"},63:(n,e,t)=>{"use strict";n.exports=t.p+"fonts/KayPhoDu-Regular.ttf"},13:(n,e,t)=>{"use strict";n.exports=t.p+"fonts/NotoSansSignWriting-Regular.ttf"},749:(n,e,t)=>{"use strict";n.exports=t.p+"fonts/Nunito-VariableFont_wght.ttf"},109:(n,e,t)=>{"use strict";n.exports=t.p+"fonts/Roboto-Regular.ttf"}},n=>{n(n.s=662)}]);