!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.convertThai=t():e.convertThai=t()}(this,(()=>(()=>{"use strict";var e={394:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.bathText=void 0;const r=["","หนึ่ง","สอง","สาม","สี่","ห้า","หก","เจ็ด","แปด","เก้า"],o=["","สิบ","ร้อย","พัน","หมื่น","แสน","ล้าน"],n=e=>{let t="";const n=e.length;for(let a=0;a<n;a++){const u=e[a],m=n-a-1;0!==u&&(t+=r[u]+o[m%6],m%6==0&&0!==m&&(t+=o[6]))}return t=t.replace("หนึ่งสิบ","สิบ"),t=t.replace("สองสิบ","ยี่สิบ"),t=t.replace("สิบหนึ่ง","สิบเอ็ด"),t};t.bathText=e=>{try{if(null==e||isNaN(e))return"";if(0===e)return"ศูนย์บาทถ้วน";const t=Math.abs(e).toFixed(2),[r,a]=t.split("."),u=r.split("").map(Number),m=a.split("").map(Number);let l="";const d=u.length;if(d>6){const e=u.slice(0,d-6),t=u.slice(d-6);l+=n(e)+o[6],l+=n(t)}else l+=n(u);return l+="บาท",m.length>0&&0!==m[0]?l+=n(m)+"สตางค์":l+="ถ้วน",e<0?"ลบ"+l:l}catch(e){return console.error(e),""}}},308:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dateFormat=void 0;const o=r(451),n={fulls:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],shorts:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],fullDays:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],shortDays:["อา","จ","อ","พ","พฤ","ศ","ส"]};t.dateFormat=(e,t="dd/mm/yyyy",r="BE")=>{try{if(!e||!t)return"";const o=new Date(e),n={day:o.getDay(),date:o.getDate(),month:o.getMonth(),year:o.getFullYear(),hour:o.getHours(),minute:o.getMinutes(),second:o.getSeconds()};return n.year="BE"===r?o.getFullYear()+543:"CE"===r?o.getFullYear():"MS"===r?o.getFullYear()+638:"JE"===r?o.getFullYear()-543+1:"RE"===r?o.getFullYear()-1781:"HE"===r?o.getFullYear()-622:o.getFullYear()+543,a(n,t)}catch(e){return console.error(e),""}};const a=(e,t)=>{try{const r={dddd:n.fullDays[e.day],ddd:n.shortDays[e.day],dd:u((0,o.numberFormat)(e.date)),d:(0,o.numberFormat)(e.date),mmmm:n.fulls[e.month],mmm:n.shorts[e.month],mm:u((0,o.numberFormat)(e.month+1)),m:(0,o.numberFormat)(e.month+1),yyyy:(0,o.numberFormat)(e.year),yy:u((0,o.numberFormat)(e.year%100)),HH:u((0,o.numberFormat)(e.hour)),H:(0,o.numberFormat)(e.hour),MM:u((0,o.numberFormat)(e.minute)),M:(0,o.numberFormat)(e.minute),ss:u((0,o.numberFormat)(e.second)),s:(0,o.numberFormat)(e.second)};return t.replace(/dddd|ddd|dd|d|mmmm|mmm|mm|m|yyyy|yy|HH|H|MM|M|ss|s/g,(e=>r[e]||""))}catch(e){return console.error(e),""}},u=e=>{try{return e?1==(null==e?void 0:e.length)?`๐${e}`:e:""}catch(e){return console.error(e),""}}},451:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.numberFormat=void 0;const r={0:"๐",1:"๑",2:"๒",3:"๓",4:"๔",5:"๕",6:"๖",7:"๗",8:"๘",9:"๙",".":".",",":",","-":"-"};t.numberFormat=(e,t,o)=>{var n,a,u;try{if(null==e||isNaN(e))return"";let m=Number(e),l=String(m);if(t||0===t){const e=Math.floor(Math.abs(t));l=null===(n=100*m/100)||void 0===n?void 0:n.toFixed(e)}if(","===o){const[e,t]=null==l?void 0:l.split(".");l=null==e?void 0:e.replace(/\B(?=(\d{3})+(?!\d))/g,o),t&&(l=`${l}.${t}`)}const d=(null===(a=null==l?void 0:l.split(""))||void 0===a?void 0:a.map((e=>"."===e||","===e||"-"===e?e:Number(e))))||[];if(d.length>0){const e=(null===(u=null==d?void 0:d.map((e=>r[e])))||void 0===u?void 0:u.join(""))||"";return e}return""}catch(e){return console.error(e),""}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.convertThai=e.bathText=e.numberFormat=e.dateFormat=void 0;const t=r(308);Object.defineProperty(e,"dateFormat",{enumerable:!0,get:function(){return t.dateFormat}});const n=r(451);Object.defineProperty(e,"numberFormat",{enumerable:!0,get:function(){return n.numberFormat}});const a=r(394);Object.defineProperty(e,"bathText",{enumerable:!0,get:function(){return a.bathText}});const u={dateFormat:t.dateFormat,numberFormat:n.numberFormat,bathText:a.bathText};e.convertThai=u})(),o})()));