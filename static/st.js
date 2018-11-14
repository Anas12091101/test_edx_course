/*!
* st.js 6.0.1
* Copyright 2016-2017 Massachusetts Institute of Technology
* All rights reserved.
*/
!function(){"use strict";function t(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(r).map(function(t){return r[t]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}function e(t,r){void 0===r&&(r={}),window.Logger&&"function"==typeof window.Logger.log&&window.Logger.log(w+"."+t,p({},{version:"6.0.1"},r))}function n(t,r,e){var n=r.length,o="",a=t>0?Math.floor(Math.log(t)/Math.log(n)):0,c=t;for(Math.floor(t/Math.pow(n,a))>=n&&(a+=1),e&&(a=e-1,c%=Math.pow(n,e));a>=0;){var i=Math.floor(c/Math.pow(n,a));o+=r.charAt(i),c-=i*Math.pow(n,a),a-=1}return o}function o(t,r){for(var e="",n=t.length,o=0;o<r;o+=1){var a=Math.floor(Math.random()*n);e+=t.charAt(a)}return e}function a(t,r){for(var e=0;e<r.length;e+=1){var n=t.search(r[e]);if(n>=0)return n}return-1}function c(t){var r=new Date,e=r.getUTCFullYear()-2016,c=Math.floor(r.getUTCMonth()/3),i=m+n(e,b,4)+n(c,b,2)+o(b,j),u=a(t,x)+1;return t.slice(0,u)+i+t.slice(u)}function i(t){return"string"!=typeof t?t:t.replace(/[\x01-\x08\x0e-\x1f\x7f\x81\x8d\x8f\x90\x9d\u200b-\u200d\u2060-\u2064]/g,"")}function u(t,r){var e=new RegExp(Object.keys(r).join("|")),n=/^application\/x-www-form-urlencoded/;t.ajaxPrefilter(function(t){e.test(t.url)&&n.test(t.contentType)&&Object.keys(r).filter(function(r){return t.url.match(r)}).map(function(t){return r[t]}).forEach(function(r){var e=r.request,n=r.success;if(e)try{t.data=k(e(E(t.data),t))}catch(t){v(t)}if(n){var o=t.success;t.success=function(r,e,a){try{r=n(r,t)}catch(t){v(t)}return o.call(this,r,e,a)}}})})}function f(){return"function"==typeof window.jQuery&&(u(window.jQuery,{"xmodule_handler/input_ajax$":{request:function(t){return/^preview_(formcalc|chemcalc)$/.test(t.dispatch)?p({},t,{formula:i(t.formula)}):t}},"xmodule_handler/problem_check$":{request:function(t){var r=p({},t);return Object.keys(t).forEach(function(e){r[e]=i(t[e])}),r}},"xmodule_handler/problem_show$":{success:function(t,r){var e=r.url,n=t.answers,o=p({},n),a={},i=e.match(/\/([^\/]*type@problem[^\/]*)\//)[1];return Object.keys(n).filter(function(t){return!t.match(/_solution_\d+$/)}).filter(function(t){return"string"==typeof n[t]}).forEach(function(t){var r=n[t];r.match(/^\s*<[^>]+ class=["'][^"']*\bcode-answer\b[^"]*["'][^>]*>/)||r.match(/\[mathjaxinline]|\[mathjax]|\\\(|\\\[/)||(o[t]=a[t]=c(r))}),y(i,o),p({},t,{answers:o})}}}),!0)}function l(){if("object"!=typeof window.MathJax)return!1;if(void 0===window.MathJax.Hub)return!window.MathJax.AuthorInit&&(window.MathJax.AuthorInit=function(){var t=!1;try{t=l()}catch(t){v(t)}g({MathJax:t})},"pending");var t=window.MathJax.Hub.Queue;return window.MathJax.Hub.Queue=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];var n=[].concat(r);return r.filter(function(t){return Array.isArray(t)&&3===t.length}).forEach(function(t,r){var e=t[0],o=t[1],a=t[2];"Text"===e&&"string"==typeof a&&(n[r]=[e,o,i(a)])}),t.apply(this,n)},!0}var s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=r()?Object.assign:function(r,e){for(var n,o,a=t(r),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var i in n)s.call(n,i)&&(a[i]=n[i]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(n);for(var u=0;u<o.length;u++)h.call(n,o[u])&&(a[o[u]]=n[o[u]])}}return a},d="__st1c8784b3",w="mitx.dll.st",g=function(t){return e("loaded",t)},y=function(t,r){return e("answer.shown",{problem_id:t,answers:r})},v=function(t){try{var r=t.name,n=t.message,o=t.stack;e("error",{name:r,message:n,stack:o})}catch(t){}},m="‌‍",b="‌‍",j=24,x=[/(\S[^a-zA-Z0-9])|([^a-zA-Z0-9]\S)/,/\S\S/,/.$/],O=function(t){function r(t,r){r="function"==typeof r?r():null===r?"":r,o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(r)}function e(t,r,n){var o;if(Array.isArray(r))for(var a=0;a<r.length;a++)c.test(t)?n(t,r[a]):e(t+"["+("object"==typeof r[a]?a:"")+"]",r[a],n);else if("object"==typeof r)for(o in r)e(t+"["+o+"]",r[o],n);else n(t,r)}var n,o=[],a=/%20/g,c=/\[\]$/;for(n in t)e(n,t[n],r);return o.join("&").replace(a,"+")},M={param:O},_=function(t,r){function e(t){var r="";try{r=decodeURIComponent(t)}catch(e){r=unescape(t)}return r}var n={},o={true:!0,false:!1,null:null};return"string"!=typeof t?n:("undefined"==typeof r&&(r=!0),t.replace(/\+/g," ").split("&").forEach(function(t){var a,c=t.split("="),i=e(c[0]),u=n,f=0,l=i.split("]["),s=l.length-1;if(/\[/.test(l[0])&&/\]$/.test(l[s])?(l[s]=l[s].replace(/\]$/,""),l=l.shift().split("[").concat(l),s=l.length-1):s=0,2===c.length)if(a=e(c[1]),r&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==o[a]?o[a]:a),s)for(;f<=s;f++)i=""===l[f]?u.length:l[f],u=u[i]=f<s?u[i]||(l[f+1]&&isNaN(l[f+1])?{}:[]):a;else Array.isArray(n[i])?n[i].push(a):void 0!==n[i]?n[i]=[n[i],a]:n[i]=a;else i&&(n[i]=r?void 0:"")}),n)},A={deparam:_},k=M.param,E=A.deparam,$=window[d]=window[d]||{version:"6.0.1"};if(!$.loaded){$.loaded=!0;var J=!1,S=!1;try{J=f()}catch(t){v(t)}try{S=l()}catch(t){v(t)}g({ajax:J,MathJax:S})}}();