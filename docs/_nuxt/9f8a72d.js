(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,12,18],{345:function(t,e,n){"use strict";var r=n(20),o=n(7),d=n(84),f=n(31),c=n(23),l=n(61),v=n(138),h=n(82),x=n(9),m=n(66),y=n(83).f,w=n(56).f,k=n(24).f,z=n(346).trim,S="Number",O=o.Number,j=O.prototype,_=l(m(j))==S,N=function(t){var e,n,r,o,d,f,c,code,l=h(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=z(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(f=(d=l.slice(2)).length,c=0;c<f;c++)if((code=d.charCodeAt(c))<48||code>o)return NaN;return parseInt(d,r)}return+l};if(d(S,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var P,M=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof M&&(_?x((function(){j.valueOf.call(n)})):l(n)!=S)?v(new O(N(e)),n,M):N(e)},U=r?y(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;U.length>E;E++)c(O,P=U[E])&&!c(M,P)&&k(M,P,w(O,P));M.prototype=j,j.constructor=M,f(o,S,M)}},346:function(t,e,n){var r=n(36),o="["+n(347)+"]",d=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(d,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},347:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},348:function(t,e,n){n(15),n(12),n(17),n(21),n(14),n(22);var r=n(136),o=n(137);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(35),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,c=void 0===f?[]:f,l=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,m=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["hero3",l,v],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41 44.48"},m)},y),c.concat([n("linearGradient",{attrs:{id:"34ciws96ja",x1:"-1.337",x2:"44.788",y1:"35.067",y2:"35.348",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{offset:"0","stop-color":"#3ABFF0"}}),n("stop",{attrs:{offset:".488","stop-color":"#999EFB"}}),n("stop",{attrs:{offset:"1","stop-color":"#BA73FC"}})]),n("path",{attrs:{fill:"url(#34ciws96ja)",d:"M39.46 33.62h.01v-6.28H36.5v1.97h-1.97v-.98h-.01v-.01h-2.96v5.3h.01v.02H14.7c-.56-4.46-3.62-7.89-7.3-7.89-4.09 0-7.4 4.2-7.4 9.37 0 5.17 3.32 9.37 7.4 9.37 3.68 0 6.73-3.43 7.3-7.89h26.24v-2.96h-1.48v-.02zM7.4 41.52c-2.41 0-4.44-2.93-4.44-6.41C2.97 31.64 5 28.7 7.4 28.7c2.41 0 4.44 2.93 4.44 6.41s-2.03 6.41-4.44 6.41z"}}),n("linearGradient",{attrs:{id:"a7y88ekocb",x1:"-1.179",x2:"44.946",y1:"9.158",y2:"9.44",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{offset:"0","stop-color":"#3ABFF0"}}),n("stop",{attrs:{offset:".488","stop-color":"#999EFB"}}),n("stop",{attrs:{offset:"1","stop-color":"#BA73FC"}})]),n("path",{attrs:{fill:"url(#a7y88ekocb)",d:"M1.48 17.15h2.97v-1.97h1.97v.98h.01v.01h2.96v-5.3h-.02v-.02h16.87c.56 4.46 3.62 7.89 7.3 7.89 4.09 0 7.41-4.2 7.41-9.37 0-5.17-3.32-9.37-7.4-9.37-3.68 0-6.73 3.43-7.3 7.89H0v2.96h1.48v6.3zM33.55 2.96c2.41 0 4.44 2.93 4.44 6.41-.01 3.48-2.04 6.41-4.44 6.41-2.41 0-4.44-2.93-4.44-6.41s2.03-6.41 4.44-6.41z"}})]))}}},359:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("3aa77fba",content,!0,{sourceMap:!1})},365:function(t,e,n){n(15),n(12),n(17),n(21),n(14),n(22);var r=n(136),o=n(137);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(35),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,c=void 0===f?[]:f,l=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,m=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["cabinet2",l,v],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55 31.09"},m)},y),c.concat([n("linearGradient",{attrs:{id:"7gnuqri0xa",x1:"0",x2:"55",y1:"15.544",y2:"15.544",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{offset:"0","stop-color":"#3ABFF0"}}),n("stop",{attrs:{offset:".488","stop-color":"#999EFB"}}),n("stop",{attrs:{offset:"1","stop-color":"#BA73FC"}})]),n("path",{attrs:{fill:"url(#7gnuqri0xa)",d:"M47.16 11.83c1.66-1.18 2.77-3.12 2.77-5.31 0-3.6-2.92-6.51-6.51-6.51-3.6 0-6.51 2.92-6.51 6.51 0 2.2 1.11 4.13 2.77 5.31-2.68.92-4.94 2.8-6.35 5.33-.65-.37-1.31-.68-2.03-.92 1.66-1.18 2.77-3.12 2.77-5.31 0-3.6-2.92-6.51-6.51-6.51s-6.51 2.92-6.51 6.51c0 2.2 1.09 4.13 2.77 5.31-.72.26-1.42.57-2.08.96-1.4-2.55-3.69-4.43-6.37-5.35 1.68-1.18 2.77-3.12 2.77-5.31C18.1 2.92 15.18 0 11.59 0S5.07 2.92 5.07 6.51c0 2.2 1.09 4.13 2.77 5.31C3.28 13.39 0 17.69 0 22.77c0 .5.06 3.1.22 3.93l1.81-.37c-.11-.54-.18-2.77-.18-3.56 0-5.37 4.37-9.74 9.74-9.74 3.62 0 6.9 1.99 8.6 5.15-2.53 2.05-4.06 5.02-4.26 8.28H16c-.02.24-.04.46-.04.7 0 .5.06 3.1.22 3.93l1.81-.37c-.11-.55-.18-2.8-.18-3.58 0-5.37 4.37-9.74 9.74-9.74 2.01 0 3.87.61 5.42 1.66l.04.02c.46.31.89.66 1.27 1.05.09.07.17.17.26.26.37.39.72.79 1.01 1.24.06.07.11.17.15.24.28.44.54.89.74 1.37.04.07.07.17.11.24.18.44.33.92.44 1.4.04.15.07.31.11.46.11.59.18 1.18.18 1.79 0 .77-.07 3.03-.18 3.58l1.81.37c.17-.83.22-3.45.22-3.93 0-.24-.02-.48-.04-.72v-.04c-.02-.39-.07-.76-.13-1.13 0-.02 0-.06-.02-.07-.06-.35-.15-.7-.24-1.05-.02-.04-.02-.09-.04-.13-.09-.31-.18-.63-.31-.92-.02-.07-.06-.15-.07-.22-.11-.26-.22-.54-.35-.77-.06-.11-.09-.2-.15-.31-.11-.22-.24-.44-.37-.65-.07-.13-.15-.24-.22-.37-.13-.2-.28-.39-.42-.57-.09-.11-.17-.24-.28-.35-.24-.3-.5-.59-.77-.85-.28-.28-.57-.54-.89-.79l-.02-.02c1.68-3.15 4.98-5.15 8.6-5.15 5.37 0 9.74 4.37 9.74 9.74 0 .77-.07 3.03-.18 3.58l1.81.37c.17-.85.22-3.45.22-3.93 0-5.11-3.28-9.41-7.84-10.97zm-35.57-.65c-2.58 0-4.67-2.1-4.67-4.67 0-2.56 2.08-4.67 4.67-4.67s4.67 2.1 4.67 4.67c-.01 2.59-2.11 4.67-4.67 4.67zm15.94 4.43c-2.58 0-4.67-2.1-4.67-4.67 0-2.58 2.1-4.67 4.67-4.67s4.67 2.1 4.67 4.67-2.09 4.67-4.67 4.67zm15.88-4.43c-2.58 0-4.67-2.1-4.67-4.67s2.08-4.67 4.67-4.67 4.67 2.1 4.67 4.67c0 2.59-2.1 4.67-4.67 4.67z"}})]))}}},397:function(t,e,n){"use strict";n(359)},398:function(t,e,n){var r=n(29)(!1);r.push([t.i,'*[data-v-72bfb180]{-webkit-tap-highlight-color:transparent;outline:none;touch-action:manipulation}.wrapper[data-v-72bfb180]{max-width:1269px;width:100%;margin:0 auto;padding:0 15px}.fade-in[data-v-72bfb180]{opacity:0;transform:translateY(-20%);transition:opacity .4s,transform .4s}.fade-in.in-viewport[data-v-72bfb180]{opacity:1;transform:translateY(0)}.telegram[data-v-72bfb180]{cursor:pointer;display:flex;align-items:center;justify-content:center;width:43px;height:43px;border-radius:50%;background:linear-gradient(0deg,#2a3145,#242834),radial-gradient(circle at 0,at 0,#06c7ff,#f14cf4);background:linear-gradient(0deg,#2a3145,#242834),radial-gradient(circle at 0 0,#06c7ff,#f14cf4);transition:.3s}.telegram[data-v-72bfb180]:hover{opacity:.8}.telegram img[data-v-72bfb180]{position:relative;top:3px;left:-1px}.hero1[data-v-72bfb180]{width:39px;height:45px}.hero2[data-v-72bfb180]{width:53px;height:54px}.hero3[data-v-72bfb180]{width:41px;height:45px}.cabinet1[data-v-72bfb180]{width:49px;height:49px}.cabinet2[data-v-72bfb180]{width:57px;height:33px}.cabinet3[data-v-72bfb180]{width:57px;height:35px}.cabinet4[data-v-72bfb180]{width:53px;height:40px}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html[data-v-72bfb180]{line-height:1.15;-webkit-text-size-adjust:100%}body[data-v-72bfb180]{margin:0}main[data-v-72bfb180]{display:block}hr[data-v-72bfb180]{box-sizing:content-box;height:0;overflow:visible}pre[data-v-72bfb180]{font-family:monospace,monospace;font-size:1em}a[data-v-72bfb180]{background-color:transparent}abbr[title][data-v-72bfb180]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-v-72bfb180],strong[data-v-72bfb180]{font-weight:bolder}code[data-v-72bfb180],kbd[data-v-72bfb180],samp[data-v-72bfb180]{font-family:monospace,monospace;font-size:1em}small[data-v-72bfb180]{font-size:80%}sub[data-v-72bfb180],sup[data-v-72bfb180]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-72bfb180]{bottom:-.25em}sup[data-v-72bfb180]{top:-.5em}img[data-v-72bfb180]{border-style:none}button[data-v-72bfb180],input[data-v-72bfb180],optgroup[data-v-72bfb180],select[data-v-72bfb180],textarea[data-v-72bfb180]{font-family:inherit;font-size:100%;line-height:1.15;margin:0;outline:none}button[data-v-72bfb180],input[data-v-72bfb180]{overflow:visible}button[data-v-72bfb180],select[data-v-72bfb180]{text-transform:none}[type=button][data-v-72bfb180],[type=reset][data-v-72bfb180],[type=submit][data-v-72bfb180],button[data-v-72bfb180]{-webkit-appearance:button}[type=button][data-v-72bfb180]::-moz-focus-inner,[type=reset][data-v-72bfb180]::-moz-focus-inner,[type=submit][data-v-72bfb180]::-moz-focus-inner,button[data-v-72bfb180]::-moz-focus-inner{border-style:none;padding:0}[type=button][data-v-72bfb180]:-moz-focusring,[type=reset][data-v-72bfb180]:-moz-focusring,[type=submit][data-v-72bfb180]:-moz-focusring,button[data-v-72bfb180]:-moz-focusring{outline:1px dotted ButtonText}fieldset[data-v-72bfb180]{padding:.35em .75em .625em}legend[data-v-72bfb180]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-v-72bfb180]{vertical-align:baseline}textarea[data-v-72bfb180]{overflow:auto}[type=checkbox][data-v-72bfb180],[type=radio][data-v-72bfb180]{box-sizing:border-box;padding:0}[type=number][data-v-72bfb180]::-webkit-inner-spin-button,[type=number][data-v-72bfb180]::-webkit-outer-spin-button{height:auto}[type=search][data-v-72bfb180]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][data-v-72bfb180]::-webkit-search-decoration{-webkit-appearance:none}[data-v-72bfb180]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[data-v-72bfb180]{display:block}summary[data-v-72bfb180]{display:list-item}[hidden][data-v-72bfb180],template[data-v-72bfb180]{display:none}ul[data-v-72bfb180],ul li[data-v-72bfb180]{margin:0;padding:0;text-indent:0;list-style-type:none}h2[data-v-72bfb180]{font-size:63px;line-height:1.1;letter-spacing:3px;font-weight:900}@media screen and (max-width:1100px){h2[data-v-72bfb180]{font-size:40px;letter-spacing:2px}}@media screen and (max-width:767px){h2[data-v-72bfb180]{padding:1px;background-size:99% 99%;background-position:50%;background-repeat:no-repeat}}h3[data-v-72bfb180]{font-size:31px;line-height:1.1;letter-spacing:2px;font-weight:700}@media screen and (max-width:1100px){h3[data-v-72bfb180]{font-size:28px;letter-spacing:1px}}h4[data-v-72bfb180]{font-size:28px;line-height:1.21;letter-spacing:1px;font-weight:600}@media screen and (max-width:1100px){h4[data-v-72bfb180]{font-size:24px;letter-spacing:normal}}h5[data-v-72bfb180]{font-size:24px;line-height:1.44;letter-spacing:1px;font-weight:700;color:#99a7b8}@media screen and (max-width:1100px){h5[data-v-72bfb180]{font-size:18px;letter-spacing:normal}}.p[data-v-72bfb180],p[data-v-72bfb180]{font-size:15px;line-height:1.6;font-weight:400}.p.big[data-v-72bfb180],p.big[data-v-72bfb180]{letter-spacing:1.2px}.p.medium[data-v-72bfb180],p.medium[data-v-72bfb180]{letter-spacing:.9px}.p.small[data-v-72bfb180],p.small[data-v-72bfb180]{letter-spacing:.6px}@media screen and (max-width:1100px){.p[data-v-72bfb180],p[data-v-72bfb180]{font-size:13px;letter-spacing:normal}}@media screen and (max-width:767px){.p[data-v-72bfb180],p[data-v-72bfb180]{padding:1px;background-size:calc(99% - 1px) calc(99% - 1px);background-position:50%;background-repeat:no-repeat}}.btn[data-v-72bfb180]{border:none;font-size:15px;line-height:.9;letter-spacing:.3px;cursor:pointer;text-decoration:none}.btn--header[data-v-72bfb180]{padding:15px 26px;color:#dae1e9;border-radius:22px;background:linear-gradient(180deg,#2e2b41,#2e2b41),radial-gradient(circle at 0,at 0,#06c7ff,#f14cf4);background:linear-gradient(180deg,#2e2b41,#2e2b41),radial-gradient(circle at 0 0,#06c7ff,#f14cf4);box-shadow:inset 0 0 5px 2px rgba(186,74,255,.74);transition:.3s}.btn--header[data-v-72bfb180]:hover{box-shadow:inset 0 0 5px 2px rgba(115,237,251,.8)}.btn--gradient[data-v-72bfb180]{display:flex;align-items:center;padding:11px 24px 8px 19px;border-radius:22px;box-shadow:0 0 15px 3px rgba(223,46,255,.6);transition:.3s;overflow:hidden;position:relative;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}.btn--gradient[data-v-72bfb180]:after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;width:200%;height:100%;background-image:linear-gradient(90deg,#4ffff9 0,#19d1ff 10%,#df2eff 50%,#df2eff 51%,#19d1ff 90%,#4ffff9);z-index:1;transition:.5s ease-in-out}.btn--gradient p[data-v-72bfb180]{line-height:1;color:#fff;font-weight:400;top:-1px;text-shadow:.2px 3px 8px #000}.btn--gradient img[data-v-72bfb180],.btn--gradient p[data-v-72bfb180]{position:relative;z-index:2}.btn--gradient[data-v-72bfb180]:hover{box-shadow:.3px 5px 70px 2px rgba(223,46,255,.3)}.btn--gradient[data-v-72bfb180]:hover:after{width:200%;transform:translate(-50%)}[data-vue-component-name=Step][data-v-72bfb180]{position:relative;padding:57px 30px 34px;width:calc(33.333% - 16px);border-radius:32px;box-shadow:5.1px 6.1px 16.8px 4.2px rgba(21,19,29,.43);display:flex;flex-direction:column;justify-content:space-between;background:#242834}[data-vue-component-name=Step][data-v-72bfb180]:after{left:0;background:radial-gradient(circle at -30%,rgba(78,145,255,.1) 20%,rgba(78,145,255,0) 70%)}[data-vue-component-name=Step][data-v-72bfb180]:after,[data-vue-component-name=Step][data-v-72bfb180]:before{overflow:hidden;position:absolute;border-radius:32px;content:"";top:0;width:50%;height:100%}[data-vue-component-name=Step][data-v-72bfb180]:before{right:0;background:radial-gradient(circle at 130%,rgba(78,145,255,.1) 20%,rgba(78,145,255,0) 70%)}[data-vue-component-name=Step] .step-number[data-v-72bfb180]{position:absolute;left:50%;top:0;transform:translate(-50%,-50%);width:76px;height:76px;box-shadow:inset 0 0 5.2px 1.8px rgba(25,133,195,.74);background-color:#262b38;background-size:99% 99%;background-position:50%;display:flex;align-items:center;justify-content:center;border-radius:50%;text-align:center}[data-vue-component-name=Step] .step-number span[data-v-72bfb180]{white-space:pre-line;background-image:linear-gradient(90deg,#6dcaff,#c663ff),linear-gradient(270deg,#bfbccd,#bfbccd);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;font-size:31.5px;background-size:99% 99%;background-position:50%;display:inline-block;width:18px}[data-vue-component-name=Step] div[data-v-72bfb180],[data-vue-component-name=Step] picture[data-v-72bfb180]{z-index:2;position:relative}[data-vue-component-name=Step] h1[data-v-72bfb180]{text-align:center;font-size:24px;font-weight:700;color:#99a7b8;margin-bottom:9px;letter-spacing:1.44px}[data-vue-component-name=Step] p[data-v-72bfb180]{text-align:center;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.6;letter-spacing:.9px;color:#99a7b8;margin-bottom:33px;padding:0 25px}[data-vue-component-name=Step] picture[data-v-72bfb180]{display:flex;text-align:center;width:143px;height:143px;margin:0 auto;box-shadow:inset 0 0 5.2px 1.8px rgba(25,133,195,.74);background-color:#2c2b3f;border-radius:50%;justify-content:center;align-items:center}[data-vue-component-name=Step] picture .image[data-v-72bfb180]{width:50%}',""]),t.exports=r},409:function(t,e,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("6c63bd79",content,!0,{sourceMap:!1})},418:function(t,e,n){"use strict";n.r(e);n(345);var r={name:"Step",props:{stepNumber:{type:[Number,String],default:null},title:{type:String,default:null},description:{type:String,default:null}}},o=(n(397),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{"data-vue-component-name":"Step"}},[t.stepNumber?n("div",{staticClass:"step-number"},[n("span",[t._v(t._s(t.stepNumber))])]):t._e(),t._v(" "),n("div",[t.title?n("h1",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.description?n("p",[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e()]),t._v(" "),n("picture",[t._t("image")],2)])}),[],!1,null,"72bfb180",null);e.default=component.exports},442:function(t,e,n){n(15),n(12),n(17),n(21),n(14),n(22);var r=n(136),o=n(137);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(35),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,c=void 0===f?[]:f,l=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,m=void 0===x?{}:x,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[l,v],style:[{"enable-background":"new 0 0 64 64"},style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",style:"enable-background:new 0 0 64 64","xml:space":"preserve"},m)},y),c.concat([n("linearGradient",{attrs:{id:"a",gradientUnits:"userSpaceOnUse",x1:"-11.128",y1:"30.796",x2:"83.686",y2:"34.074",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#a)"},attrs:{d:"M0 57.1c.3-.5.6-.9 1.2-.9.7 0 1.3.5 1.3 1.3v3.9h43.2v-11c-.2.2-.4.3-.6.4-2.2 1.6-4.4 3.2-6.7 4.8-.5.4-1 .5-1.6.2s-.7-.8-.6-1.4c0-.5 0-1 .1-1.4 0-.4-.2-.5-.5-.4-.5.2-1 .4-1.4.7-.6.6-1.1 1.2-1.6 1.9-.4.6-.9.9-1.5.7s-.9-.7-.9-1.4v-4.3c-.1-1.2-.6-1.5-1.7-.9-2.3 1.3-4.1 3.2-5.4 5.4-.1.2-.2.4-.4.6-.4.6-1.1.8-1.7.5-.6-.4-.8-1.1-.4-1.7 1.1-2 2.5-3.7 4.3-5.2.8-.6 1.6-1.3 2.5-1.7 2.8-1.5 5.2-.2 5.4 3 0 .3.1.6.1 1 .7-.3 1.3-.7 2-.9s1.4-.2 2.2-.2c.2-1 .5-2.2.7-3.3s.6-2.1 1.2-3l6.6-10.2c.2-.3.3-.6.3-.9V2.6H2.9v43.9c0 .6-.3 1-.9 1.2s-.8.2-1.5 0c-.6-.3-.5-.7-.5-.8V0h47.4c.7.4.9.9.9 1.7v27.4c.2-.4.4-.5.5-.7 2.2-3.4 4.3-6.7 6.5-10.1 1.1-1.7 2.7-2.4 4.7-2.1 2.1.3 3.4 1.5 3.9 3.6.1.6.1.9.1 1v.8c-.4.8-.6 1.7-1.1 2.5-4.7 7.4-9.5 14.7-14.2 22.1-.2.3-.4.8-.4 1.2v14.9c0 .8-.2 1.3-.9 1.7H0v-6.9zm44.8-9.5c4.9-7.7 9.8-15.2 14.7-22.8-1.3-.8-2.5-1.6-3.8-2.4L41 45.2c1.2.8 2.5 1.6 3.8 2.4zM57 20.2c1.3.8 2.5 1.6 3.7 2.4 1.1-1.4.9-2.8-.3-3.6-1-.7-2.6-.4-3.4 1.2zM40.1 47.6c-.3 1.5-.5 2.9-.8 4.4 1.3-.9 2.4-1.7 3.6-2.6-1-.6-1.8-1.2-2.8-1.8z"}}),n("linearGradient",{attrs:{id:"b",gradientUnits:"userSpaceOnUse",x1:"-11.741",y1:"47.974",x2:"83.249",y2:"51.258",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#b)"},attrs:{d:"M24.7 15.1v7.4c0 1.2-.4 1.7-1.6 1.7H9.9c-1.2 0-1.6-.4-1.6-1.6V7.5c0-1.2.4-1.6 1.6-1.6h13.2c1.1 0 1.5.4 1.5 1.6.1 2.5.1 5 .1 7.6zm-11.8 1c-1-2.3-.7-4.2.9-5.5 1.5-1.2 3.6-1.3 5.1-.2 1.8 1.2 2.1 3.1 1.2 5.7.7.4 1.4.7 2.1 1.1V8.4H10.9v8.8c.7-.4 1.4-.8 2-1.1zm9.2 5.5c-.3-1.3-1-2.3-2.2-2.8-2-1-4-1-6.1-.3-1.2.4-2.1 1.1-2.6 2.3-.1.2-.2.5-.2.8h11.1zm-5.6-9.5c-.9 0-1.7.7-1.7 1.7 0 .9.8 1.7 1.7 1.7s1.7-.8 1.7-1.7c0-.9-.7-1.7-1.7-1.7z"}}),n("linearGradient",{attrs:{id:"c",gradientUnits:"userSpaceOnUse",x1:"-11.151",y1:"30.912",x2:"83.839",y2:"34.196",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#c)"},attrs:{d:"M24.8 27.5h14.4c1.4 0 1.8.4 1.8 1.8v4.9c0 1.7-.3 2-2 2H10.4c-1.5 0-1.9-.4-1.9-1.8v-5.2c0-1.2.4-1.7 1.7-1.7h14.6zm13.7 2.6H11.1v3.6h27.4v-3.6z"}}),n("linearGradient",{attrs:{id:"d",gradientUnits:"userSpaceOnUse",x1:"-10.836",y1:"21.825",x2:"84.153",y2:"25.11",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#d)"},attrs:{d:"M18.9 39.9h8.5c.8 0 1.3.5 1.3 1.2s-.5 1.3-1.3 1.3H10.2c-.8-.2-1.2-.7-1.2-1.3 0-.7.5-1.2 1.2-1.2h8.7z"}}),n("linearGradient",{attrs:{id:"e",gradientUnits:"userSpaceOnUse",x1:"-11.908",y1:"52.821",x2:"83.081",y2:"56.105",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#e)"},attrs:{d:"M35.3 8.4h4.3c.9 0 1.5.5 1.5 1.2 0 .8-.5 1.2-1.5 1.2h-8.8c-.7 0-1.3-.4-1.4-1s.2-1.2.8-1.4c.2-.1.5-.1.7-.1 1.4.1 2.9.1 4.4.1z"}}),n("linearGradient",{attrs:{id:"f",gradientUnits:"userSpaceOnUse",x1:"-11.715",y1:"47.23",x2:"83.275",y2:"50.514",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#f)"},attrs:{d:"M35.2 13.9h4.4c.9 0 1.4.5 1.4 1.2 0 .8-.5 1.3-1.4 1.3h-8.9c-.9 0-1.4-.5-1.4-1.3s.5-1.2 1.4-1.2h4.5z"}}),n("linearGradient",{attrs:{id:"g",gradientUnits:"userSpaceOnUse",x1:"-11.525",y1:"41.739",x2:"83.465",y2:"45.023",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#g)"},attrs:{d:"M35.2 19.4h4.4c.9 0 1.4.5 1.4 1.2 0 .8-.5 1.3-1.4 1.3h-8.8c-.9 0-1.5-.5-1.4-1.3 0-.7.5-1.2 1.4-1.2 1.5-.1 3 0 4.4 0z"}}),n("linearGradient",{attrs:{id:"h",gradientUnits:"userSpaceOnUse",x1:"-10.662",y1:"16.789",x2:"84.327",y2:"20.073",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("path",{staticStyle:{fill:"url(#h)"},attrs:{d:"M14.3 45.1h3.8c.9 0 1.5.5 1.5 1.2s-.6 1.3-1.5 1.3h-7.7c-.9 0-1.5-.5-1.4-1.3 0-.7.5-1.2 1.4-1.2h3.9z"}}),n("linearGradient",{attrs:{id:"i",gradientUnits:"userSpaceOnUse",x1:"-10.222",y1:"11.605",x2:"82.515",y2:"14.811",gradientTransform:"matrix(1 0 0 -1 0 64)"}},[n("stop",{staticStyle:{"stop-color":"#3abff0"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#999efb"},attrs:{offset:".488"}}),n("stop",{staticStyle:{"stop-color":"#ba73fc"},attrs:{offset:"1"}})]),n("circle",{staticStyle:{fill:"url(#i)"},attrs:{cx:"1.2",cy:"52",r:"1.2"}})]))}}},443:function(t,e,n){"use strict";n(409)},444:function(t,e,n){var r=n(29)(!1);r.push([t.i,'*[data-v-b10f5ae8]{-webkit-tap-highlight-color:transparent;outline:none;touch-action:manipulation}.wrapper[data-v-b10f5ae8]{max-width:1269px;width:100%;margin:0 auto;padding:0 15px}.fade-in[data-v-b10f5ae8]{opacity:0;transform:translateY(-20%);transition:opacity .4s,transform .4s}.fade-in.in-viewport[data-v-b10f5ae8]{opacity:1;transform:translateY(0)}.telegram[data-v-b10f5ae8]{cursor:pointer;display:flex;align-items:center;justify-content:center;width:43px;height:43px;border-radius:50%;background:linear-gradient(0deg,#2a3145,#242834),radial-gradient(circle at 0,at 0,#06c7ff,#f14cf4);background:linear-gradient(0deg,#2a3145,#242834),radial-gradient(circle at 0 0,#06c7ff,#f14cf4);transition:.3s}.telegram[data-v-b10f5ae8]:hover{opacity:.8}.telegram img[data-v-b10f5ae8]{position:relative;top:3px;left:-1px}.hero1[data-v-b10f5ae8]{width:39px;height:45px}.hero2[data-v-b10f5ae8]{width:53px;height:54px}.hero3[data-v-b10f5ae8]{width:41px;height:45px}.cabinet1[data-v-b10f5ae8]{width:49px;height:49px}.cabinet2[data-v-b10f5ae8]{width:57px;height:33px}.cabinet3[data-v-b10f5ae8]{width:57px;height:35px}.cabinet4[data-v-b10f5ae8]{width:53px;height:40px}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html[data-v-b10f5ae8]{line-height:1.15;-webkit-text-size-adjust:100%}body[data-v-b10f5ae8]{margin:0}main[data-v-b10f5ae8]{display:block}hr[data-v-b10f5ae8]{box-sizing:content-box;height:0;overflow:visible}pre[data-v-b10f5ae8]{font-family:monospace,monospace;font-size:1em}a[data-v-b10f5ae8]{background-color:transparent}abbr[title][data-v-b10f5ae8]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-v-b10f5ae8],strong[data-v-b10f5ae8]{font-weight:bolder}code[data-v-b10f5ae8],kbd[data-v-b10f5ae8],samp[data-v-b10f5ae8]{font-family:monospace,monospace;font-size:1em}small[data-v-b10f5ae8]{font-size:80%}sub[data-v-b10f5ae8],sup[data-v-b10f5ae8]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-b10f5ae8]{bottom:-.25em}sup[data-v-b10f5ae8]{top:-.5em}img[data-v-b10f5ae8]{border-style:none}button[data-v-b10f5ae8],input[data-v-b10f5ae8],optgroup[data-v-b10f5ae8],select[data-v-b10f5ae8],textarea[data-v-b10f5ae8]{font-family:inherit;font-size:100%;line-height:1.15;margin:0;outline:none}button[data-v-b10f5ae8],input[data-v-b10f5ae8]{overflow:visible}button[data-v-b10f5ae8],select[data-v-b10f5ae8]{text-transform:none}[type=button][data-v-b10f5ae8],[type=reset][data-v-b10f5ae8],[type=submit][data-v-b10f5ae8],button[data-v-b10f5ae8]{-webkit-appearance:button}[type=button][data-v-b10f5ae8]::-moz-focus-inner,[type=reset][data-v-b10f5ae8]::-moz-focus-inner,[type=submit][data-v-b10f5ae8]::-moz-focus-inner,button[data-v-b10f5ae8]::-moz-focus-inner{border-style:none;padding:0}[type=button][data-v-b10f5ae8]:-moz-focusring,[type=reset][data-v-b10f5ae8]:-moz-focusring,[type=submit][data-v-b10f5ae8]:-moz-focusring,button[data-v-b10f5ae8]:-moz-focusring{outline:1px dotted ButtonText}fieldset[data-v-b10f5ae8]{padding:.35em .75em .625em}legend[data-v-b10f5ae8]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-v-b10f5ae8]{vertical-align:baseline}textarea[data-v-b10f5ae8]{overflow:auto}[type=checkbox][data-v-b10f5ae8],[type=radio][data-v-b10f5ae8]{box-sizing:border-box;padding:0}[type=number][data-v-b10f5ae8]::-webkit-inner-spin-button,[type=number][data-v-b10f5ae8]::-webkit-outer-spin-button{height:auto}[type=search][data-v-b10f5ae8]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][data-v-b10f5ae8]::-webkit-search-decoration{-webkit-appearance:none}[data-v-b10f5ae8]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[data-v-b10f5ae8]{display:block}summary[data-v-b10f5ae8]{display:list-item}[hidden][data-v-b10f5ae8],template[data-v-b10f5ae8]{display:none}ul[data-v-b10f5ae8],ul li[data-v-b10f5ae8]{margin:0;padding:0;text-indent:0;list-style-type:none}h2[data-v-b10f5ae8]{font-size:63px;line-height:1.1;letter-spacing:3px;font-weight:900}@media screen and (max-width:1100px){h2[data-v-b10f5ae8]{font-size:40px;letter-spacing:2px}}@media screen and (max-width:767px){h2[data-v-b10f5ae8]{padding:1px;background-size:99% 99%;background-position:50%;background-repeat:no-repeat}}h3[data-v-b10f5ae8]{font-size:31px;line-height:1.1;letter-spacing:2px;font-weight:700}@media screen and (max-width:1100px){h3[data-v-b10f5ae8]{font-size:28px;letter-spacing:1px}}h4[data-v-b10f5ae8]{font-size:28px;line-height:1.21;letter-spacing:1px;font-weight:600}@media screen and (max-width:1100px){h4[data-v-b10f5ae8]{font-size:24px;letter-spacing:normal}}h5[data-v-b10f5ae8]{font-size:24px;line-height:1.44;letter-spacing:1px;font-weight:700;color:#99a7b8}@media screen and (max-width:1100px){h5[data-v-b10f5ae8]{font-size:18px;letter-spacing:normal}}.p[data-v-b10f5ae8],p[data-v-b10f5ae8]{font-size:15px;line-height:1.6;font-weight:400}.p.big[data-v-b10f5ae8],p.big[data-v-b10f5ae8]{letter-spacing:1.2px}.p.medium[data-v-b10f5ae8],p.medium[data-v-b10f5ae8]{letter-spacing:.9px}.p.small[data-v-b10f5ae8],p.small[data-v-b10f5ae8]{letter-spacing:.6px}@media screen and (max-width:1100px){.p[data-v-b10f5ae8],p[data-v-b10f5ae8]{font-size:13px;letter-spacing:normal}}@media screen and (max-width:767px){.p[data-v-b10f5ae8],p[data-v-b10f5ae8]{padding:1px;background-size:calc(99% - 1px) calc(99% - 1px);background-position:50%;background-repeat:no-repeat}}.btn[data-v-b10f5ae8]{border:none;font-size:15px;line-height:.9;letter-spacing:.3px;cursor:pointer;text-decoration:none}.btn--header[data-v-b10f5ae8]{padding:15px 26px;color:#dae1e9;border-radius:22px;background:linear-gradient(180deg,#2e2b41,#2e2b41),radial-gradient(circle at 0,at 0,#06c7ff,#f14cf4);background:linear-gradient(180deg,#2e2b41,#2e2b41),radial-gradient(circle at 0 0,#06c7ff,#f14cf4);box-shadow:inset 0 0 5px 2px rgba(186,74,255,.74);transition:.3s}.btn--header[data-v-b10f5ae8]:hover{box-shadow:inset 0 0 5px 2px rgba(115,237,251,.8)}.btn--gradient[data-v-b10f5ae8]{display:flex;align-items:center;padding:11px 24px 8px 19px;border-radius:22px;box-shadow:0 0 15px 3px rgba(223,46,255,.6);transition:.3s;overflow:hidden;position:relative;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}.btn--gradient[data-v-b10f5ae8]:after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;width:200%;height:100%;background-image:linear-gradient(90deg,#4ffff9 0,#19d1ff 10%,#df2eff 50%,#df2eff 51%,#19d1ff 90%,#4ffff9);z-index:1;transition:.5s ease-in-out}.btn--gradient p[data-v-b10f5ae8]{line-height:1;color:#fff;font-weight:400;top:-1px;text-shadow:.2px 3px 8px #000}.btn--gradient img[data-v-b10f5ae8],.btn--gradient p[data-v-b10f5ae8]{position:relative;z-index:2}.btn--gradient[data-v-b10f5ae8]:hover{box-shadow:.3px 5px 70px 2px rgba(223,46,255,.3)}.btn--gradient[data-v-b10f5ae8]:hover:after{width:200%;transform:translate(-50%)}.steps-of-work-with-system[data-v-b10f5ae8]{margin:0 auto 158px;display:flex;flex-direction:column;align-items:center}.steps-of-work-with-system h2[data-v-b10f5ae8]{margin:0 auto 95px;text-align:center;background-image:linear-gradient(90deg,#9dfff9,#75c8fd 25%,#72c1fd 50%,#6ca2fc 75%,#8868fb);color:transparent;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:99% 99%;background-position:50%;background-repeat:no-repeat}.steps-of-work-with-system .step-list[data-v-b10f5ae8]{display:flex;justify-content:space-between}@media screen and (max-width:1200px){.steps-of-work-with-system .step-list[data-v-b10f5ae8]{justify-content:center;flex-wrap:wrap}}@media screen and (max-width:1200px){.steps-of-work-with-system .step-list .step[data-v-b10f5ae8]{flex:0 0 40%;margin-bottom:60px}}@media screen and (max-width:767px){.steps-of-work-with-system .step-list .step[data-v-b10f5ae8]{flex:0 0 90%}}.steps-of-work-with-system .step-list .step:first-child svg[data-v-b10f5ae8]{transform:translateX(5px)}.steps-of-work-with-system .step-list .step[data-v-b10f5ae8]:last-child{margin-right:0}',""]),t.exports=r},447:function(t,e,n){"use strict";n.r(e);var r=n(348),o=n.n(r),d=n(365),f=n.n(d),c=n(442),l=n.n(c),v={name:"StepsOfWorkWithSystem",components:{Step:n(418).default,Hero3:o.a,Cabinet2:f.a,Profile:l.a},data:function(){return{steps:[{stepNumber:1,title:this.$t("index.stepsOfWorkWithSystem.steps[0].title"),description:this.$t("index.stepsOfWorkWithSystem.steps[0].description"),image:l.a},{stepNumber:2,title:this.$t("index.stepsOfWorkWithSystem.steps[1].title"),description:this.$t("index.stepsOfWorkWithSystem.steps[1].description"),image:o.a},{stepNumber:3,title:this.$t("index.stepsOfWorkWithSystem.steps[2].title"),description:this.$t("index.stepsOfWorkWithSystem.steps[2].description"),image:f.a}]}}},h=(n(443),n(5)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"steps-of-work-with-system wrapper",attrs:{id:"steps-of-work-with-system"}},[n("h2",{directives:[{name:"in-viewport",rawName:"v-in-viewport.once",modifiers:{once:!0}}],staticClass:"fade-steps-of-work-with-systemin",domProps:{innerHTML:t._s(t.$t("index.stepsOfWorkWithSystem.title"))}}),t._v(" "),n("ul",{staticClass:"step-list"},t._l(t.steps,(function(e,r){return n("step",{key:r,staticClass:"step",attrs:{"step-number":e.stepNumber,title:e.title,description:e.description},scopedSlots:t._u([{key:"image",fn:function(){return[n(e.image,{tag:"component",style:{width:60}})]},proxy:!0}],null,!0)})})),1)])}),[],!1,null,"b10f5ae8",null);e.default=component.exports}}]);