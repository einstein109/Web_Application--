(function(){var f="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,p=function(){p=function(){};n.Symbol||(n.Symbol=aa)},aa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),r=function(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&f(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});r=function(){}},q=function(a){var b=0;return ba(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ba=function(a){r();a={next:a};a[n.Symbol.iterator]=function(){return this};return a},t=function(a){r();var b=a[Symbol.iterator];return b?b.call(a):q(a)},v=this,w=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},y=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=ca:y=da;return y.apply(null,arguments)},z=Date.now||function(){return+new Date},A=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.C=function(a,c,I){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var B=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"==typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var C=function(){},ea="function"==typeof Uint8Array,E=function(a,b,c){a.b=null;b||(b=[]);a.l=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(d&&"object"==typeof d&&"array"!=w(d)&&!(ea&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.g)d+=a.f,a.a[d]=a.a[d]||D;else{var e=a.g+a.f;a.a[e]||(a.c=a.a[e]={});a.c[d]=a.c[d]||D}},D=[],F=function(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===D?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===D?a.c[b]=[]:c},G=function(a,b,c){a=F(a,b);return null==a?c:a},fa=function(a){var b=H;a.b||(a.b={});if(!a.b[1]){var c=F(a,1);c&&(a.b[1]=new b(c))}return a.b[1]},L=function(a){var b=K;a.b||(a.b={});if(!a.b[1]){if(1<a.g){var c=1+a.f;var d=a.a[c];c=d===D?a.a[c]=[]:d}else d=a.c[1],c=d===D?a.c[1]=[]:d;d=[];for(var e=0;e<c.length;e++)d[e]=new b(c[e]);a.b[1]=d}b=a.b[1];b==D&&(b=a.b[1]=[]);return b};C.prototype.toString=function(){return this.a.toString()};var H=function(a){E(this,a,ha)};A(H,C);var ha=[1],K=function(a){E(this,a,null)};A(K,C);var M=function(a){E(this,a,null)};A(M,C);var N=document,O=window;var ia={capture:!0},ja=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});v.addEventListener("test",null,b)}catch(c){}return a});function ka(a){return a?a.passive&&ja()?a:a.capture||!1:!1}var P=function(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,ka(d))};var la=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Q=function(a,b){a&&la(b,function(b,d){a.style[d]=b})},ma=function(a){for(var b=N.body,c=document.createDocumentFragment(),d=a.length,e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};var R=function(){this.b=this.b;this.c=this.c};R.prototype.b=!1;var na=function(a){a.b||(a.b=!0,a.f())};R.prototype.f=function(){if(this.c)for(;this.c.length;)this.c.shift()()};var S=function(a,b,c){R.call(this);this.g=a;this.u=b||0;this.i=c;this.l=y(this.s,this)};A(S,R);S.prototype.a=0;S.prototype.f=function(){S.B.f.call(this);this.stop();delete this.g;delete this.i};S.prototype.start=function(a){this.stop();var b=this.l;a=void 0!==a?a:this.u;if("function"!=w(b))if(b&&"function"==typeof b.handleEvent)b=y(b.handleEvent,b);else throw Error("Invalid listener argument");this.a=2147483647<Number(a)?-1:v.setTimeout(b,a||0)};S.prototype.stop=function(){0!=this.a&&v.clearTimeout(this.a);this.a=0};S.prototype.s=function(){this.a=0;this.g&&this.g.call(this.i)};var oa=function(a){P(O,"message",function(b){try{var c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};var pa={display:"inline-block",position:"absolute"},qa={display:"none",width:"100%",height:"100%",top:"0",left:"0"},T=function(a,b){a&&(a.style.display=(void 0===b?0:b)?"none":"inline-block")},U=function(){this.c=[];this.f=this.a=null;this.u=[];this.i=null;this.s=[];this.b=[];this.g=[];this.l={};this.A=[]};U.prototype.init=function(a){var b=this;this.i=new M(a);a=fa(this.i);B(L(a),function(a){b.g.push({v:0,m:!1,w:0,h:a,o:-1})});try{var c=N.querySelectorAll("*[data-ifc]")}catch(e){c=[]}this.b=c;c=this.b.length;for(a={j:0};a.j<c;a={j:a.j},++a.j){var d=new H(JSON.parse(this.b[a.j].getAttribute("data-ifc")||"[]"));B(L(d),function(a){return function(c){b.g.push({v:0,m:!1,w:0,h:c,o:a.j})}}(a))}c=t(this.g);for(a=c.next();!a.done;a=c.next())a=a.value,d=a.h,0<G(d,2,0)&&0<G(d,5,1)?(!this.a&&G(d,9,!1)&&(this.a=V(qa)),ra(this,a)):G(d,1,"")&&G(d,9,!1)&&sa(this,G(d,1,""));c=this.c.slice(0);this.a&&c.push(this.a);N.body&&ma(c);P(N,"click",function(a){for(var c,d=-1,e=[],W=t(b.g),m=W.next();!m.done;m=W.next()){m=m.value;var g=m.o,l=-1!==g;if(!(G(m.h,3,0)<=d||m.m||l&&!1===e[g])){var h=!l||e[g]||b.b[g].contains(a.target);l&&h&&(e[g]=!0);if(g=h)if(l=a,g=m,h=g.h,0<G(h,2,0)&&0<G(h,5,1))g=b.l[G(h,5,1)],g=void 0!==g&&z()<g+G(h,2,0);else if(G(h,1,"")){h=(0<=g.o?b.b[g.o]:N.body).getBoundingClientRect();var x=parseFloat(N.body.style.zoom||1),u=t([l.clientX/x-h.left,l.clientY/x-h.top,h.width,h.height]);l=u.next().value;h=u.next().value;x=u.next().value;u=u.next().value;!(0<x&&0<u)||isNaN(l)||isNaN(h)||0>l||0>h?g=!1:(g=X(G(g.h,1,"")),g=!(l>=g.left&&x-l>g.right&&h>=g.top&&u-h>g.bottom))}else g=!0;g&&(c=m,d=G(m.h,3,0))}}if(c)switch(d=c.h,G(d,4,1)){case 2:case 3:case 4:var k=void 0===k?!1:k;a.preventDefault?a.preventDefault():a.returnValue=!1;k&&a.stopPropagation();k=z();500<k-c.w&&(c.w=k,++c.v);k=c.h;if(G(k,8,0)&&c.v>=G(k,8,0))if(c.m=!0,b.a&&0<G(k,2,0))Y(b);else if(0<b.c.length&&G(k,1,""))for(k=t(b.c),c=k.next();!c.done;c=k.next())T(c.value,!0);k=d.a;c=t(b.s);for(d=c.next();!d.done;d=c.next())d=d.value,d(a,k)}},ia)};U.prototype.registerCallback=function(a){this.s.push(a)};var sa=function(a,b){b=X(b);var c=G(a.i,9,0);a.c=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(function(a){return V(a,9019)})},Z=function(a,b){if(!b.m){var c=G(b.h,5,1);a.l[c]=z();G(b.h,9,!1)&&(a.u.push(b),Y(a))}},ra=function(a,b){switch(G(b.h,5,1)){case 2:O.AFMA_Communicator&&O.AFMA_Communicator.addEventListener&&O.AFMA_Communicator.addEventListener("onshow",function(){Z(a,b)});break;case 4:P(N,"DOMContentLoaded",function(){Z(a,b)});break;case 7:O.mraid&&O.mraid.isViewable&&P(O.mraid,"viewableChange",function(){var c=O.mraid;"function"==w(c.isViewable)&&c.isViewable()&&Z(a,b)});break;case 8:oa(function(c){c.rr&&Z(a,b)});break;case 9:if(O.IntersectionObserver){var c=new IntersectionObserver(function(c){c=t(c);for(var d=c.next();!d.done;d=c.next())if(0<d.value.intersectionRatio){Z(a,b);break}});c.observe(N.body);a.A.push(c)}}},Y=function(a){for(var b=0,c=t(a.u),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.h,I=a.l[G(e,5,1)];d.m||void 0===I||(b=Math.max(b,I+G(e,2,0)))}a.f&&na(a.f);b-=z();var J=a.a;0<b?(T(J),a.f=new S(function(){T(J,!0)},b),a.f.start()):T(J,!0)},V=function(a,b){b=void 0===b?2147483647:b;var c=N.createElement("DIV");Q(c,pa);Q(c,{"z-index":b});Q(c,a);return c},X=function(a){a=void 0===a?"":a;var b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4==a.length&&a.reduce(function(a,b){return a&&!isNaN(b)},!0)&&(a=t(a.map(function(a){return+a})),b.top=a.next().value,b.right=a.next().value,b.bottom=a.next().value,b.left=a.next().value));return b};window.googqscp=new U;}).call(this);