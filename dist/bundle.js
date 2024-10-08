!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.convertThai=e():t.convertThai=e()}(this,(()=>(()=>{"use strict";var t={394:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bathText=void 0;const r=["","หนึ่ง","สอง","สาม","สี่","ห้า","หก","เจ็ด","แปด","เก้า"],o=["","สิบ","ร้อย","พัน","หมื่น","แสน","ล้าน"],n=t=>{let e="";const n=t.length;for(let a=0;a<n;a++){const u=t[a],d=n-a-1;0!==u&&(e+=r[u]+o[d%6],d%6==0&&0!==d&&(e+=o[6]))}return e=e.replace("หนึ่งสิบ","สิบ"),e=e.replace("สองสิบ","ยี่สิบ"),e=e.replace("สิบหนึ่ง","สิบเอ็ด"),e};e.bathText=t=>{try{if(null==t||isNaN(t))return"";if(0===t)return"ศูนย์บาทถ้วน";const e=Math.abs(t).toFixed(2),[r,a]=e.split("."),u=r.split("").map(Number),d=a.split("").map(Number);let s="";const m=u.length;if(m>6){const t=u.slice(0,m-6),e=u.slice(m-6);s+=n(t)+o[6],s+=n(e)}else s+=n(u);return s+="บาท",d.length>0&&0!==d[0]?s+=n(d)+"สตางค์":s+="ถ้วน",t<0?"ลบ"+s:s}catch(t){return console.error(t),""}}},308:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.dateFormat=void 0;const o=r(451),n={months:{full:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],short:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]},days:{full:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],short:["อา","จ","อ","พ","พฤ","ศ","ส"]}},a={months:{full:["January","February","March","April","May","June","July","August","September","October","November","December"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},days:{full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},u=(t,e="th")=>{try{return t?1===t.length?"th"===e?`๐${t}`:`0${t}`:t:""}catch(t){return console.error(t),""}};e.dateFormat=(t,e="dd/mm/yyyy",r="BE",d="th")=>{try{if(!t||!e)return"";const s=new Date(t),m={day:s.getDay(),date:s.getDate(),month:s.getMonth(),year:s.getFullYear(),hour:s.getHours(),minute:s.getMinutes(),second:s.getSeconds()};switch(r){case"BE":m.year+=543;break;case"MS":m.year+=638;break;case"JE":m.year=m.year-543+1;break;case"RE":m.year-=1781;break;case"HE":m.year-=622}return((t,e,r="th")=>{try{const d={dddd:"th"===r?n.days.full[t.day]:a.days.full[t.day],ddd:"th"===r?n.days.short[t.day]:a.days.short[t.day],dd:u("th"===r?(0,o.numberFormat)(t.date):t.date.toString(),r),d:t.date.toString(),mmmm:"th"===r?n.months.full[t.month]:a.months.full[t.month],mmm:"th"===r?n.months.short[t.month]:a.months.short[t.month],mm:u("th"===r?(0,o.numberFormat)(t.month+1):(t.month+1).toString(),r),m:(t.month+1).toString(),yyyy:"th"===r?(0,o.numberFormat)(t.year):t.year.toString(),yy:u("th"===r?(0,o.numberFormat)(t.year%100):(t.year%100).toString(),r),HH:u("th"===r?(0,o.numberFormat)(t.hour):t.hour.toString(),r),H:t.hour.toString(),MM:u("th"===r?(0,o.numberFormat)(t.minute):t.minute.toString(),r),M:t.minute.toString(),ss:u("th"===r?(0,o.numberFormat)(t.second):t.second.toString(),r),s:t.second.toString()};return e.replace(/dddd|ddd|dd|d|mmmm|mmm|mm|m|yyyy|yy|HH|H|MM|M|ss|s/g,(t=>d[t]))}catch(t){return console.error(t),""}})(m,e,d)}catch(t){return console.error(t),""}}},451:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.numberFormat=void 0;const r={0:"๐",1:"๑",2:"๒",3:"๓",4:"๔",5:"๕",6:"๖",7:"๗",8:"๘",9:"๙",".":".",",":",","-":"-"};e.numberFormat=(t,e,o)=>{var n,a,u;try{if(null==t||isNaN(t))return"";let d=Number(t),s=String(d);if(e||0===e){const t=Math.floor(Math.abs(e));s=null===(n=100*d/100)||void 0===n?void 0:n.toFixed(t)}if(","===o){const[t,e]=null==s?void 0:s.split(".");s=null==t?void 0:t.replace(/\B(?=(\d{3})+(?!\d))/g,o),e&&(s=`${s}.${e}`)}const m=(null===(a=null==s?void 0:s.split(""))||void 0===a?void 0:a.map((t=>"."===t||","===t||"-"===t?t:Number(t))))||[];if(m.length>0){const t=(null===(u=null==m?void 0:m.map((t=>r[t])))||void 0===u?void 0:u.join(""))||"";return t}return""}catch(t){return console.error(t),""}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}var o={};return(()=>{var t=o;Object.defineProperty(t,"__esModule",{value:!0}),t.convertThai=t.bathText=t.numberFormat=t.dateFormat=void 0;const e=r(308);Object.defineProperty(t,"dateFormat",{enumerable:!0,get:function(){return e.dateFormat}});const n=r(451);Object.defineProperty(t,"numberFormat",{enumerable:!0,get:function(){return n.numberFormat}});const a=r(394);Object.defineProperty(t,"bathText",{enumerable:!0,get:function(){return a.bathText}});const u={dateFormat:e.dateFormat,numberFormat:n.numberFormat,bathText:a.bathText};t.convertThai=u})(),o})()));