(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6WfQ":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("9TBO"),i=function(t,e,n,i,o){return r.a(void 0,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})},o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},Dgxi:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var a=n[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var c=o(a),s=0;s<c.length;s++)i(c[s])}});for(var r=o(e),a=0;a<r.length;a++)i(r[a]);var s=document.createElement("div");s.appendChild(e);var u=s.querySelector("div");return null!==u?u.innerHTML:s.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(a.includes(r.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var s=o(t);for(e=0;e<s.length;e++)i(s[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},QY0l:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("OEdq"),i=n("H+bZ"),o=n("67Y/"),a=n("IfdK"),c=n("CcnG"),s=function(){function t(t){this.apiService=t}return t.prototype.validate=function(t){return this.apiService.post("/sessions/"+a.a.id()+"/responses",{article:t.article,type:t.type,trust:t.trust,position:t.position,clickedReadMoreAt:t.clickedReadMoreAt},!0)},t.prototype.next=function(){return this.apiService.get("/sessions/"+localStorage.getItem("current-session")+"/article",!0).pipe(Object(o.a)(function(t){return new r.a(t)}))},t.prototype.get=function(t){return this.apiService.get("/articles/"+t,!0).pipe(Object(o.a)(function(t){return new r.a(t)}))},t.prototype.image=function(t){return this.apiService.url(t.path)},t.ngInjectableDef=c.S({factory:function(){return new t(c.W(i.a))},token:t,providedIn:"root"}),t}()},SF24:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r});var r=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},aEGo:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s});var r=n("9TBO"),i=function(t,e){return null!==e.closest(t)},o=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,n){return r.a(void 0,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||c.test(t)?[3,2]:(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,n)];case 2:return[2,!1]}})})}},fA50:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()},i1UR:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return u}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return a});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}},c=function(t,e,n){return Math.max(t,Math.min(e,n))},s=function(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}},u=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,e){var n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}},p=function(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}},mnRn:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("ZZ/e"),i=n("CcnG"),o=n("ZYjt"),a=function(){function t(t,e){this.platform=t,this.sanitize=e}return t.prototype.get=function(t){return this.platform.is("mobile")?t:"/app/"+t},t.prototype.getSafeStyle=function(t){return this.sanitize.bypassSecurityTrustStyle(this.get(t))},t.prototype.getSafeBackgroundStyle=function(t){return this.sanitize.bypassSecurityTrustStyle("url('"+this.get(t)+"')")},t.prototype.getSafeUrl=function(t){return this.sanitize.bypassSecurityTrustUrl(this.get(t))},t.ngInjectableDef=i.S({factory:function(){return new t(i.W(r.Gb),i.W(o.c))},token:t,providedIn:"root"}),t}()},qfBg:function(t,e,n){"use strict";var r=n("H+bZ"),i=n("67Y/"),o=function(){return function(t){Object.assign(this,t)}}(),a=n("CcnG");n.d(e,"a",function(){return c});var c=function(){function t(t){this.api=t}return t.viewDisclaimer=function(){localStorage.setItem("disclaimer_viewed","1")},t.disclaimerWasViewed=function(){return"1"===localStorage.getItem("disclaimer_viewed")},t.tutorialWasViewed=function(){return"1"===localStorage.getItem("tutorial_viewed")},t.viewTutorial=function(){localStorage.setItem("tutorial_viewed","1")},t.prototype.login=function(t,e){var n=this,r=this.api.post("/login",{email:t,password:e});return r.subscribe(function(e){n.api.setToken(e.token),n.api.setCurrentUserEmail(t)},function(t){}),r},t.prototype.logout=function(){this.api.removeToken(),this.api.removeCurrentUser()},t.prototype.register=function(t,e,n,r,a,c,s){void 0===s&&(s=null);var u={email:t,plainPassword:e,ageRange:n,degree:r,gender:a,location:c,facebookId:s};return console.log(u),this.api.post("/register",u).pipe(Object(i.a)(function(t){return new o(t)}))},t.prototype.facebookLogin=function(t){var e=this,n=this.api.post("/facebook-login",{facebook_id:t.authResponse.userID,facebook_token:t.authResponse.accessToken});return n.subscribe(function(t){e.api.setToken(t.token),e.api.setCurrentUserEmail(t.email)},function(t){e.logout()}),n},t.ngInjectableDef=a.S({factory:function(){return new t(a.W(r.a))},token:t,providedIn:"root"}),t}()},qjUB:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.scrollLength=50,this.active=!0}return Object.defineProperty(t.prototype,"container",{set:function(t){var e=this;this.containerElement=t,t&&(t.addEventListener("scroll",function(){e.active=t.offsetHeight<t.scrollHeight-t.scrollTop}),t.addEventListener("DOMSubtreeModified",function(){e.active=t.offsetHeight<t.scrollHeight-t.scrollTop}))},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){},t.prototype.scroll=function(){var t=this.containerElement.scrollTop+this.scrollLength;this.active&&t<=this.containerElement.scrollHeight?this.containerElement.scrollTo({top:t,behavior:"smooth"}):this.active&&this.containerElement.scrollTo({top:this.containerElement.scrollHeight,behavior:"smooth"})},t}()},"qrm+":function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return u}),n.d(e,"createGesture",function(){return p});var r,i=n("24pd"),o=(n("lSdy"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new a(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new c(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),a=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),c=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",u=new o,l=function(t,e,n,r){var i,o,a=d(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,a),function(){t[o](e,n,a)}},d=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){r=!1}return!!r},f=function(t){return t instanceof Document?t:t.ownerDocument},p=function(t){var e=!1,n=!1,r=!0,o=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),c=a.canStart,s=a.onWillStart,d=a.onStart,p=a.onEnd,b=a.notCaptured,g=a.onMove,y=a.threshold,S={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},w=function(t,e,n){var r=a.maxAngle*(Math.PI/180),i="x"===a.direction,o=Math.cos(r),c=e*e,s=0,u=0,l=!1,d=0;return{start:function(t,e){s=t,u=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var n=t-s,r=e-u,a=n*n+r*r;if(a<c)return!1;var f=Math.sqrt(a),p=(i?n:r)/f;return d=p>o?1:p<-o?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,a.threshold),E=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),k=function(){e&&(o=!1,g&&g(S))},T=function(){return!(E&&!E.capture()||(e=!0,r=!1,S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp,s?s(S).then(C):C(),0))},C=function(){d&&d(S),r=!0},I=function(){e=!1,n=!1,o=!1,r=!0,E.release()},D=function(t){var n=e,i=r;I(),i&&(h(S,t),n?p&&p(S):b&&b(S))},L=function(t,e,n,r,i){var o,a,c,s,u,d,p,h=0,v=function(r){h=Date.now()+2e3,e(r)&&(!a&&n&&(a=l(t,"touchmove",n,i)),c||(c=l(t,"touchend",b,i)),s||(s=l(t,"touchcancel",b,i)))},m=function(r){h>Date.now()||e(r)&&(!d&&n&&(d=l(f(t),"mousemove",n,i)),p||(p=l(f(t),"mouseup",g,i)))},b=function(t){y(),r&&r(t)},g=function(t){S(),r&&r(t)},y=function(){a&&a(),c&&c(),s&&s(),a=c=s=void 0},S=function(){d&&d(),p&&p(),d=p=void 0},w=function(){y(),S()},E=function(e){e?(o&&o(),u&&u(),o=u=void 0,w()):(o||(o=l(t,"touchstart",v,i)),u||(u=l(t,"mousedown",m,i)))};return{setDisabled:E,stop:w,destroy:function(){E(!0),r=n=e=void 0}}}(a.el,function(t){var e=m(t);return!(n||!r)&&(v(t,S),S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp=e,S.velocityX=S.velocityY=S.deltaX=S.deltaY=0,S.event=t,(!c||!1!==c(S))&&(E.release(),!!E.start()&&(n=!0,0===y?T():(w.start(S.startX,S.startY),!0))))},function(t){e?!o&&r&&(o=!0,h(S,t),Object(i.n)(k)):(h(S,t),w.detect(S.currentX,S.currentY)&&(w.isGesture()&&T()||O()))},D,{capture:!1}),O=function(){I(),L.stop(),b&&b(S)};return{setDisabled:function(t){t&&e&&D(void 0),L.setDisabled(t)},destroy:function(){E.destroy(),L.destroy()}}},h=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;v(e,t);var o=t.currentX,a=t.currentY,c=(t.timeStamp=m(e))-i;if(c>0&&c<100){var s=(a-r)/c;t.velocityX=(o-n)/c*.7+.3*t.velocityX,t.velocityY=.7*s+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}},v=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},m=function(t){return t.timeStamp||Date.now()}},uoaX:function(t,e,n){"use strict";n.d(e,"a",function(){return S}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return a});var r=n("9TBO"),i=n("24pd"),o=n("bjU6"),a=function(t){return new Promise(function(e,n){Object(i.n)(function(){c(t),s(t).then(function(n){n.animation&&n.animation.destroy(),u(t),e(n)},function(e){u(t),n(e)})})})},c=function(t){var e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},s=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,l(t)];case 1:return[2,(e=n.sent())?d(e,t):f(t)]}})})},u=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,n.e(106).then(n.bind(null,"72vL"))]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(107).then(n.bind(null,"LoTI"))];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,e]}})})},d=function(t,e){return r.a(void 0,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,p(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,"6Qsj")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),m(e.enteringEl,e.leavingEl),[4,v(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&b(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},f=function(t){return r.a(void 0,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,p(t,!1)];case 1:return r.sent(),m(e,n),b(e,n),[2,{hasCompleted:!0}]}})})},p=function(t,e){return r.a(void 0,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[S(t.enteringEl),S(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})},h=function(t,e){return r.a(void 0,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},v=function(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r},m=function(t,e){g(e,o.c),g(t,o.a)},b=function(t,e){g(t,o.b),g(e,o.d)},g=function(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},y=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},S=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(S))];case 3:n.sent(),n.label=4;case 4:return[2]}})})},w=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},ypx6:function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("Ip0R"),a=n("ZZ/e");n("qjUB"),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var c=r.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{position:absolute}[_nghost-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-transition:.3s;transition:all .3s;color:transparent}[_nghost-%COMP%]   ion-icon.active[_ngcontent-%COMP%]{color:#999}"]],data:{}});function s(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,3,"ion-icon",[["name","arrow-down"]],null,[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==t.component.scroll()&&r),r},i.G,i.i)),r.ob(1,278528,null,0,o.h,[r.s,r.t,r.k,r.D],{ngClass:[0,"ngClass"]},null),r.Cb(2,{active:0}),r.ob(3,49152,null,0,a.A,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(t,e){var n=t(e,2,0,e.component.active);t(e,1,0,n),t(e,3,0,"arrow-down")},null)}}}]);