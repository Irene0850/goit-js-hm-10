import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as u}from"./assets/vendor-77e16229.js";const a=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let t=null,c=null;n.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){t=e[0],t<new Date?(u.warning({title:"Warning",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};h(a,g);n.addEventListener("click",()=>{t&&t>new Date&&(n.disabled=!0,a.disabled=!0,c=setInterval(()=>{const e=t-new Date;e<=0&&(clearInterval(c),a.disabled=!1,u.success({title:"Success",message:"Countdown completed!"})),C(w(e))},1e3))});function w(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function C({days:e,hours:s,minutes:r,seconds:d}){y.textContent=o(e),p.textContent=o(s),S.textContent=o(r),b.textContent=o(d)}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map