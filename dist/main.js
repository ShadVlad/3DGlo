(()=>{"use strict";const e=e=>{console.log("form: ",e.id);const t=document.createElement("div");t.style.cssText="font-size: 2rem;","form3"===e.id&&(t.style.color="white"),e.addEventListener("submit",(r=>{r.preventDefault(),t.textContent="Загрузка...",e.appendChild(t);const n=new FormData(e);let l={};n.forEach(((e,t)=>{l[t]=e,console.log("key: "+t+" val: "+e)})),console.log("body: ",l),o(l).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с Вами свяжемся!",a()})).catch((()=>{t.textContent="Что-то пошло не так..."}))}));const o=e=>fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=()=>{const t=e.querySelector("input[name='user_name']"),o=e.querySelector("input[name='user_email']"),a=e.querySelector("input[name='user_message']"),r=e.querySelector("input[name='user_phone']");t.value="",o.value="",r.value="",a&&(a.value="")}};(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds");function r(e){return e<10?"0"+e:e}function n(){let e=function(){let e=new Date("30 july 2021").getTime(),t=(new Date).getTime(),o=e-t>0?(e-t)/1e3:0,a=Math.floor(o%60),r=Math.floor(o/60%60);return{timeRemaining:o,hours:Math.floor(o/60/60%24),minutes:r,seconds:a}}();t.textContent=r(e.hours),o.textContent=r(e.minutes),a.textContent=r(e.seconds)}n(),setInterval(n,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{let t=e.target;(t.classList.contains("close-btn")||"A"===t.tagName)&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector("body"),o=document.querySelector(".popup-content"),a=document.querySelectorAll(".popup-btn");let r,n;const l=()=>{r=requestAnimationFrame(l),n++,n<38?o.style.left=n+"%":cancelAnimationFrame(r)};a.forEach((o=>{o.addEventListener("click",(()=>{e.style.display="block",n=-50,t.offsetWidth>=768&&(r=requestAnimationFrame(l))}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),a=e=>{for(let a=0;a<o.length;a++)e===a?(t[a].classList.add("active"),o[a].classList.remove("d-none")):(t[a].classList.remove("active"),o[a].classList.add("d-none"))};a(0),e.addEventListener("click",(e=>{let o=e.target;console.log("target: ",o),o=o.closest(".service-header-tab"),console.log("target: ",o),o&&t.forEach(((e,t)=>{e===o&&a(0)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots")),o=document.querySelector(".portfolio-content");let a,r,n=0;const l=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(e,n,"portfolio-item-active"),l(a,n,"dot-active"),n++,n%=e.length,c(e,n,"portfolio-item-active"),c(a,n,"dot-active")},u=(e=3e3)=>{r=setInterval(s,e)};o.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(l(e,n,"portfolio-item-active"),l(a,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&a.forEach(((e,t)=>{e===o&&(n=t)})),n>=e.length&&(n=0),n<0&&(n=e.length-1),c(e,n,"portfolio-item-active"),c(a,n,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),(()=>{for(let o=1;o<=e.length;o++){let e=document.createElement("li");e.classList.add("dot"),1===o&&e.classList.add("dot-active"),t.append(e)}a=document.querySelectorAll(".dot")})(),u(1500)})(),(()=>{const e=document.querySelector(".command");e.addEventListener("mouseover",(e=>{e.target.matches(".command__photo")&&(e.target.src=e.target.dataset.img)})),e.addEventListener("mouseout",(e=>{e.target.matches(".command__photo")&&(e.target.src=e.target.dataset.img.replace("a.","."))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),n=document.querySelector(".calc-count"),l=document.getElementById("total"),c=document.querySelectorAll(".calc-item");t.addEventListener("change",(t=>{const c=t.target;(c.matches("select")||c.matches("input"))&&(()=>{let t=0,c=1,s=1;const u=o.options[o.selectedIndex].value,i=+a.value;n.value>1&&(c+=(n.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),u&&i?(t=e*u*i*c*s,t=1.4==u?t.toFixed(2):t):t=0,l.textContent=t})()}));const s=e=>{e.target.value=e.target.value.replace(/[^0-9]/,"")};c.forEach((e=>{e.addEventListener("keyup",s)}))})(100),(()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input[name='user_name']"),o=document.querySelectorAll("input[name='user_message']"),a=document.querySelectorAll("input[name='user_email']"),r=document.querySelectorAll("input[name='user_phone']"),n=()=>{let e=event.target.value.replace(/\-{2,}/g,"-");e=e.split(/\s+/),event.target.value=e.map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")},l=()=>{let e=event.target.value.replace(/\-{2,}/g,"-");e=e.split(/\s+/),e[0]=e[0].charAt(0).toUpperCase()+e[0].slice(1),event.target.value=e.map((e=>e)).join(" ")},c=()=>{let e=event.target.value.replace(/[^\d\+]/,"");console.log("val: ",e.length),e=e.replace(/\-{2,}/g,"-"),event.target.value=e},s=()=>{let e=event.target.value.replace(/[^A-Za-z\.\@\-\!\*\'\~]/g,"");e=e.replace(/\-{2,}/g,"-"),e=e.replace(/\-/,""),e=e.replace(/\-$/,""),event.target.value=e};e.forEach((e=>{e.addEventListener("keyup",(e=>{e.target.matches("input[name='user_name']")?(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яЁё\s]+$/,"")})(e):e.target.matches("input[name='user_message']")?(e=>{e.target.value=e.target.value.replace(/[^?!,.а-яА-ЯёЁ0-9]+$/,"")})(e):e.target.matches("input[name='user_email']")?(e=>{e.target.value=e.target.value.replace(/[^A-Za-z\.\@\-\!\*\'\~]/,"")})(e):e.target.matches("input[name='user_phone']")&&(e=>{e.target.value=e.target.value.replace(/[^\d\+]/,"")})(e)}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{n()}))})),o.forEach((e=>{e.addEventListener("blur",(e=>{l()}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value,c()}))})),a.forEach((e=>{e.addEventListener("blur",(e=>{s()}))}))})();for(let t=1;t<4;t++)e(document.getElementById("form"+t))})();