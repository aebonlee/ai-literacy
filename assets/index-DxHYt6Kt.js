const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Ce9g6WKm.js","assets/SEOHead-BNhbsbeB.js","assets/ChapterIllustration-ByJ330xs.js","assets/NotFound-BBDv1eW1.js","assets/Login-BKVGqVIJ.js","assets/auth-DKHmQrFs.css","assets/Register-wzXdDDwQ.js","assets/ForgotPassword-CRk23pob.js","assets/MyPage-DwxcRREx.js","assets/Cart-BsD5vdxc.js","assets/useAOS-BQT7QY7m.js","assets/Checkout-LF452ZeH.js","assets/OrderConfirmation-B_tZhabj.js","assets/OrderHistory-DxcT-Mpn.js","assets/CurriculumOverview-brlxuYtL.js","assets/ChapterList-NO_jnp4r.js","assets/useChapterProgress-Cx_RTK2D.js","assets/ChapterDetail-BthTaQ5J.js","assets/NoticeList-gdZRU0qG.js","assets/QnaList-M__DAA5l.js","assets/PracticeHome-Cgtl708C.js","assets/PracticeChatGPT-CcYNgGde.js","assets/PracticeClaude-DS4vo5oh.js","assets/PracticeGemini-BbfhvrwG.js","assets/PracticePrompt-DvxaznH9.js"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var ec={exports:{}},Ia={};var Xg;function ub(){if(Xg)return Ia;Xg=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(l,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:n,type:l,key:h,ref:o!==void 0?o:null,props:c}}return Ia.Fragment=r,Ia.jsx=a,Ia.jsxs=a,Ia}var Qg;function hb(){return Qg||(Qg=1,ec.exports=ub()),ec.exports}var A=hb(),rc={exports:{}},at={};var Zg;function fb(){if(Zg)return at;Zg=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),w=Symbol.iterator;function _(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,k={};function M(T,G,K){this.props=T,this.context=G,this.refs=k,this.updater=K||O}M.prototype.isReactComponent={},M.prototype.setState=function(T,G){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,G,"setState")},M.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function P(){}P.prototype=M.prototype;function R(T,G,K){this.props=T,this.context=G,this.refs=k,this.updater=K||O}var q=R.prototype=new P;q.constructor=R,x(q,M.prototype),q.isPureReactComponent=!0;var F=Array.isArray;function W(){}var J={H:null,A:null,T:null,S:null},It=Object.prototype.hasOwnProperty;function St(T,G,K){var Q=K.ref;return{$$typeof:n,type:T,key:G,ref:Q!==void 0?Q:null,props:K}}function Le(T,G){return St(T.type,G,T.props)}function ue(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Qt(T){var G={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(K){return G[K]})}var we=/\/+/g;function it(T,G){return typeof T=="object"&&T!==null&&T.key!=null?Qt(""+T.key):G.toString(36)}function dt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(W,W):(T.status="pending",T.then(function(G){T.status==="pending"&&(T.status="fulfilled",T.value=G)},function(G){T.status==="pending"&&(T.status="rejected",T.reason=G)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function U(T,G,K,Q,st){var ct=typeof T;(ct==="undefined"||ct==="boolean")&&(T=null);var At=!1;if(T===null)At=!0;else switch(ct){case"bigint":case"string":case"number":At=!0;break;case"object":switch(T.$$typeof){case n:case r:At=!0;break;case b:return At=T._init,U(At(T._payload),G,K,Q,st)}}if(At)return st=st(T),At=Q===""?"."+it(T,0):Q,F(st)?(K="",At!=null&&(K=At.replace(we,"$&/")+"/"),U(st,G,K,"",function(On){return On})):st!=null&&(ue(st)&&(st=Le(st,K+(st.key==null||T&&T.key===st.key?"":(""+st.key).replace(we,"$&/")+"/")+At)),G.push(st)),1;At=0;var de=Q===""?".":Q+":";if(F(T))for(var Ht=0;Ht<T.length;Ht++)Q=T[Ht],ct=de+it(Q,Ht),At+=U(Q,G,K,ct,st);else if(Ht=_(T),typeof Ht=="function")for(T=Ht.call(T),Ht=0;!(Q=T.next()).done;)Q=Q.value,ct=de+it(Q,Ht++),At+=U(Q,G,K,ct,st);else if(ct==="object"){if(typeof T.then=="function")return U(dt(T),G,K,Q,st);throw G=String(T),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return At}function $(T,G,K){if(T==null)return T;var Q=[],st=0;return U(T,Q,"","",function(ct){return G.call(K,ct,st++)}),Q}function nt(T){if(T._status===-1){var G=T._result;G=G(),G.then(function(K){(T._status===0||T._status===-1)&&(T._status=1,T._result=K)},function(K){(T._status===0||T._status===-1)&&(T._status=2,T._result=K)}),T._status===-1&&(T._status=0,T._result=G)}if(T._status===1)return T._result.default;throw T._result}var Et=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Rt={map:$,forEach:function(T,G,K){$(T,function(){G.apply(this,arguments)},K)},count:function(T){var G=0;return $(T,function(){G++}),G},toArray:function(T){return $(T,function(G){return G})||[]},only:function(T){if(!ue(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return at.Activity=m,at.Children=Rt,at.Component=M,at.Fragment=a,at.Profiler=o,at.PureComponent=R,at.StrictMode=l,at.Suspense=g,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,at.__COMPILER_RUNTIME={__proto__:null,c:function(T){return J.H.useMemoCache(T)}},at.cache=function(T){return function(){return T.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(T,G,K){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Q=x({},T.props),st=T.key;if(G!=null)for(ct in G.key!==void 0&&(st=""+G.key),G)!It.call(G,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&G.ref===void 0||(Q[ct]=G[ct]);var ct=arguments.length-2;if(ct===1)Q.children=K;else if(1<ct){for(var At=Array(ct),de=0;de<ct;de++)At[de]=arguments[de+2];Q.children=At}return St(T.type,st,Q)},at.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},at.createElement=function(T,G,K){var Q,st={},ct=null;if(G!=null)for(Q in G.key!==void 0&&(ct=""+G.key),G)It.call(G,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(st[Q]=G[Q]);var At=arguments.length-2;if(At===1)st.children=K;else if(1<At){for(var de=Array(At),Ht=0;Ht<At;Ht++)de[Ht]=arguments[Ht+2];st.children=de}if(T&&T.defaultProps)for(Q in At=T.defaultProps,At)st[Q]===void 0&&(st[Q]=At[Q]);return St(T,ct,st)},at.createRef=function(){return{current:null}},at.forwardRef=function(T){return{$$typeof:f,render:T}},at.isValidElement=ue,at.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:nt}},at.memo=function(T,G){return{$$typeof:p,type:T,compare:G===void 0?null:G}},at.startTransition=function(T){var G=J.T,K={};J.T=K;try{var Q=T(),st=J.S;st!==null&&st(K,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(W,Et)}catch(ct){Et(ct)}finally{G!==null&&K.types!==null&&(G.types=K.types),J.T=G}},at.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},at.use=function(T){return J.H.use(T)},at.useActionState=function(T,G,K){return J.H.useActionState(T,G,K)},at.useCallback=function(T,G){return J.H.useCallback(T,G)},at.useContext=function(T){return J.H.useContext(T)},at.useDebugValue=function(){},at.useDeferredValue=function(T,G){return J.H.useDeferredValue(T,G)},at.useEffect=function(T,G){return J.H.useEffect(T,G)},at.useEffectEvent=function(T){return J.H.useEffectEvent(T)},at.useId=function(){return J.H.useId()},at.useImperativeHandle=function(T,G,K){return J.H.useImperativeHandle(T,G,K)},at.useInsertionEffect=function(T,G){return J.H.useInsertionEffect(T,G)},at.useLayoutEffect=function(T,G){return J.H.useLayoutEffect(T,G)},at.useMemo=function(T,G){return J.H.useMemo(T,G)},at.useOptimistic=function(T,G){return J.H.useOptimistic(T,G)},at.useReducer=function(T,G,K){return J.H.useReducer(T,G,K)},at.useRef=function(T){return J.H.useRef(T)},at.useState=function(T){return J.H.useState(T)},at.useSyncExternalStore=function(T,G,K){return J.H.useSyncExternalStore(T,G,K)},at.useTransition=function(){return J.H.useTransition()},at.version="19.2.5",at}var Fg;function Lc(){return Fg||(Fg=1,rc.exports=fb()),rc.exports}var S=Lc(),ic={exports:{}},Sa={},nc={exports:{}},ac={};var Wg;function gb(){return Wg||(Wg=1,(function(n){function r(U,$){var nt=U.length;U.push($);t:for(;0<nt;){var Et=nt-1>>>1,Rt=U[Et];if(0<o(Rt,$))U[Et]=$,U[nt]=Rt,nt=Et;else break t}}function a(U){return U.length===0?null:U[0]}function l(U){if(U.length===0)return null;var $=U[0],nt=U.pop();if(nt!==$){U[0]=nt;t:for(var Et=0,Rt=U.length,T=Rt>>>1;Et<T;){var G=2*(Et+1)-1,K=U[G],Q=G+1,st=U[Q];if(0>o(K,nt))Q<Rt&&0>o(st,K)?(U[Et]=st,U[Q]=nt,Et=Q):(U[Et]=K,U[G]=nt,Et=G);else if(Q<Rt&&0>o(st,nt))U[Et]=st,U[Q]=nt,Et=Q;else break t}}return $}function o(U,$){var nt=U.sortIndex-$.sortIndex;return nt!==0?nt:U.id-$.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],p=[],b=1,m=null,w=3,_=!1,O=!1,x=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function q(U){for(var $=a(p);$!==null;){if($.callback===null)l(p);else if($.startTime<=U)l(p),$.sortIndex=$.expirationTime,r(g,$);else break;$=a(p)}}function F(U){if(x=!1,q(U),!O)if(a(g)!==null)O=!0,W||(W=!0,Qt());else{var $=a(p);$!==null&&dt(F,$.startTime-U)}}var W=!1,J=-1,It=5,St=-1;function Le(){return k?!0:!(n.unstable_now()-St<It)}function ue(){if(k=!1,W){var U=n.unstable_now();St=U;var $=!0;try{t:{O=!1,x&&(x=!1,P(J),J=-1),_=!0;var nt=w;try{e:{for(q(U),m=a(g);m!==null&&!(m.expirationTime>U&&Le());){var Et=m.callback;if(typeof Et=="function"){m.callback=null,w=m.priorityLevel;var Rt=Et(m.expirationTime<=U);if(U=n.unstable_now(),typeof Rt=="function"){m.callback=Rt,q(U),$=!0;break e}m===a(g)&&l(g),q(U)}else l(g);m=a(g)}if(m!==null)$=!0;else{var T=a(p);T!==null&&dt(F,T.startTime-U),$=!1}}break t}finally{m=null,w=nt,_=!1}$=void 0}}finally{$?Qt():W=!1}}}var Qt;if(typeof R=="function")Qt=function(){R(ue)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,it=we.port2;we.port1.onmessage=ue,Qt=function(){it.postMessage(null)}}else Qt=function(){M(ue,0)};function dt(U,$){J=M(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):It=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(U){switch(w){case 1:case 2:case 3:var $=3;break;default:$=w}var nt=w;w=$;try{return U()}finally{w=nt}},n.unstable_requestPaint=function(){k=!0},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var nt=w;w=U;try{return $()}finally{w=nt}},n.unstable_scheduleCallback=function(U,$,nt){var Et=n.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Et+nt:Et):nt=Et,U){case 1:var Rt=-1;break;case 2:Rt=250;break;case 5:Rt=1073741823;break;case 4:Rt=1e4;break;default:Rt=5e3}return Rt=nt+Rt,U={id:b++,callback:$,priorityLevel:U,startTime:nt,expirationTime:Rt,sortIndex:-1},nt>Et?(U.sortIndex=nt,r(p,U),a(g)===null&&U===a(p)&&(x?(P(J),J=-1):x=!0,dt(F,nt-Et))):(U.sortIndex=Rt,r(g,U),O||_||(O=!0,W||(W=!0,Qt()))),U},n.unstable_shouldYield=Le,n.unstable_wrapCallback=function(U){var $=w;return function(){var nt=w;w=$;try{return U.apply(this,arguments)}finally{w=nt}}}})(ac)),ac}var tp;function pb(){return tp||(tp=1,nc.exports=gb()),nc.exports}var sc={exports:{}},oe={};var ep;function vb(){if(ep)return oe;ep=1;var n=Lc();function r(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var l={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,p,b){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:m==null?null:""+m,children:g,containerInfo:p,implementation:b}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,oe.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return c(g,p,null,b)},oe.flushSync=function(g){var p=h.T,b=l.p;try{if(h.T=null,l.p=2,g)return g()}finally{h.T=p,l.p=b,l.d.f()}},oe.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(g,p))},oe.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},oe.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,m=f(b,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?l.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:m,integrity:w,fetchPriority:_}):b==="script"&&l.d.X(g,{crossOrigin:m,integrity:w,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},oe.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=f(p.as,p.crossOrigin);l.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(g)},oe.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,m=f(b,p.crossOrigin);l.d.L(g,b,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},oe.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=f(p.as,p.crossOrigin);l.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(g)},oe.requestFormReset=function(g){l.d.r(g)},oe.unstable_batchedUpdates=function(g,p){return g(p)},oe.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},oe.useFormStatus=function(){return h.H.useHostTransitionStatus()},oe.version="19.2.5",oe}var rp;function mb(){if(rp)return sc.exports;rp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),sc.exports=vb(),sc.exports}var ip;function yb(){if(ip)return Sa;ip=1;var n=pb(),r=Lc(),a=mb();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(l(188))}function p(t){var e=t.alternate;if(!e){if(e=c(t),e===null)throw Error(l(188));return e!==t?null:t}for(var i=t,s=e;;){var d=i.return;if(d===null)break;var u=d.alternate;if(u===null){if(s=d.return,s!==null){i=s;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===i)return g(d),t;if(u===s)return g(d),e;u=u.sibling}throw Error(l(188))}if(i.return!==s.return)i=d,s=u;else{for(var v=!1,y=d.child;y;){if(y===i){v=!0,i=d,s=u;break}if(y===s){v=!0,s=d,i=u;break}y=y.sibling}if(!v){for(y=u.child;y;){if(y===i){v=!0,i=u,s=d;break}if(y===s){v=!0,s=u,i=d;break}y=y.sibling}if(!v)throw Error(l(189))}}if(i.alternate!==s)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var m=Object.assign,w=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),R=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=ue&&t[ue]||t["@@iterator"],typeof t=="function"?t:null)}var we=Symbol.for("react.client.reference");function it(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===we?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case F:return"Suspense";case W:return"SuspenseList";case St:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case O:return"Portal";case R:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:it(t.type)||"Memo";case It:e=t._payload,t=t._init;try{return it(t(e))}catch{}}return null}var dt=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Et=[],Rt=-1;function T(t){return{current:t}}function G(t){0>Rt||(t.current=Et[Rt],Et[Rt]=null,Rt--)}function K(t,e){Rt++,Et[Rt]=t.current,t.current=e}var Q=T(null),st=T(null),ct=T(null),At=T(null);function de(t,e){switch(K(ct,e),K(st,t),K(Q,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?yg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=yg(e),t=bg(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(Q),K(Q,t)}function Ht(){G(Q),G(st),G(ct)}function On(t){t.memoizedState!==null&&K(At,t);var e=Q.current,i=bg(e,t.type);e!==i&&(K(st,t),K(Q,i))}function $a(t){st.current===t&&(G(Q),G(st)),At.current===t&&(G(At),ba._currentValue=nt)}var Ul,Yc;function si(t){if(Ul===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||"",Yc=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ul+t+Yc}var Ml=!1;function zl(t,e){if(!t||Ml)return"";Ml=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(e){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(L){var D=L}Reflect.construct(t,[],H)}else{try{H.call()}catch(L){D=L}t.call(H.prototype)}}else{try{throw Error()}catch(L){D=L}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(L){if(L&&D&&typeof L.stack=="string")return[L.stack,D.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),v=u[0],y=u[1];if(v&&y){var I=v.split(`
`),j=y.split(`
`);for(d=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(s===I.length||d===j.length)for(s=I.length-1,d=j.length-1;1<=s&&0<=d&&I[s]!==j[d];)d--;for(;1<=s&&0<=d;s--,d--)if(I[s]!==j[d]){if(s!==1||d!==1)do if(s--,d--,0>d||I[s]!==j[d]){var z=`
`+I[s].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=s&&0<=d);break}}}finally{Ml=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?si(i):""}function Gv(t,e){switch(t.tag){case 26:case 27:case 5:return si(t.type);case 16:return si("Lazy");case 13:return t.child!==e&&e!==null?si("Suspense Fallback"):si("Suspense");case 19:return si("SuspenseList");case 0:case 15:return zl(t.type,!1);case 11:return zl(t.type.render,!1);case 1:return zl(t.type,!0);case 31:return si("Activity");default:return""}}function Jc(t){try{var e="",i=null;do e+=Gv(t,i),i=t,t=t.return;while(t);return e}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Bl=Object.prototype.hasOwnProperty,Pl=n.unstable_scheduleCallback,Hl=n.unstable_cancelCallback,qv=n.unstable_shouldYield,$v=n.unstable_requestPaint,_e=n.unstable_now,Vv=n.unstable_getCurrentPriorityLevel,Xc=n.unstable_ImmediatePriority,Qc=n.unstable_UserBlockingPriority,Va=n.unstable_NormalPriority,Kv=n.unstable_LowPriority,Zc=n.unstable_IdlePriority,Yv=n.log,Jv=n.unstable_setDisableYieldValue,kn=null,Ie=null;function jr(t){if(typeof Yv=="function"&&Jv(t),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(kn,t)}catch{}}var Se=Math.clz32?Math.clz32:Zv,Xv=Math.log,Qv=Math.LN2;function Zv(t){return t>>>=0,t===0?32:31-(Xv(t)/Qv|0)|0}var Ka=256,Ya=262144,Ja=4194304;function li(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xa(t,e,i){var s=t.pendingLanes;if(s===0)return 0;var d=0,u=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var y=s&134217727;return y!==0?(s=y&~u,s!==0?d=li(s):(v&=y,v!==0?d=li(v):i||(i=y&~t,i!==0&&(d=li(i))))):(y=s&~u,y!==0?d=li(y):v!==0?d=li(v):i||(i=s&~t,i!==0&&(d=li(i)))),d===0?0:e!==0&&e!==d&&(e&u)===0&&(u=d&-d,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:d}function Nn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Fv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fc(){var t=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),t}function Gl(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function jn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wv(t,e,i,s,d,u){var v=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var y=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(i=v&~i;0<i;){var z=31-Se(i),H=1<<z;y[z]=0,I[z]=-1;var D=j[z];if(D!==null)for(j[z]=null,z=0;z<D.length;z++){var L=D[z];L!==null&&(L.lane&=-536870913)}i&=~H}s!==0&&Wc(t,s,0),u!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=u&~(v&~e))}function Wc(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var s=31-Se(e);t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function tu(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var s=31-Se(i),d=1<<s;d&e|t[s]&e&&(t[s]|=e),i&=~d}}function eu(t,e){var i=e&-e;return i=(i&42)!==0?1:ql(i),(i&(t.suspendedLanes|e))!==0?0:i}function ql(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $l(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ru(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:Gg(t.type))}function iu(t,e){var i=$.p;try{return $.p=t,e()}finally{$.p=i}}var Dr=Math.random().toString(36).slice(2),ee="__reactFiber$"+Dr,he="__reactProps$"+Dr,Oi="__reactContainer$"+Dr,Vl="__reactEvents$"+Dr,tm="__reactListeners$"+Dr,em="__reactHandles$"+Dr,nu="__reactResources$"+Dr,Dn="__reactMarker$"+Dr;function Kl(t){delete t[ee],delete t[he],delete t[Vl],delete t[tm],delete t[em]}function ki(t){var e=t[ee];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Oi]||i[ee]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Tg(t);t!==null;){if(i=t[ee])return i;t=Tg(t)}return e}t=i,i=t.parentNode}return null}function Ni(t){if(t=t[ee]||t[Oi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ln(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function ji(t){var e=t[nu];return e||(e=t[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[Dn]=!0}var au=new Set,su={};function oi(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(su[t]=e,t=0;t<e.length;t++)au.add(e[t])}var rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lu={},ou={};function im(t){return Bl.call(ou,t)?!0:Bl.call(lu,t)?!1:rm.test(t)?ou[t]=!0:(lu[t]=!0,!1)}function Qa(t,e,i){if(im(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var s=e.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function Za(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function cr(t,e,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+s)}}function Ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function du(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nm(t,e,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,u=s.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return d.call(this)},set:function(v){i=""+v,u.call(this,v)}}),Object.defineProperty(t,e,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(v){i=""+v},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){if(!t._valueTracker){var e=du(t)?"checked":"value";t._valueTracker=nm(t,e,""+t[e])}}function cu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),s="";return t&&(s=du(t)?t.checked?"true":"false":t.value),t=s,t!==i?(e.setValue(t),!0):!1}function Fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var am=/[\n"\\]/g;function Me(t){return t.replace(am,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Jl(t,e,i,s,d,u,v,y){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),e!=null?v==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ue(e)):t.value!==""+Ue(e)&&(t.value=""+Ue(e)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),e!=null?Xl(t,v,Ue(e)):i!=null?Xl(t,v,Ue(i)):s!=null&&t.removeAttribute("value"),d==null&&u!=null&&(t.defaultChecked=!!u),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Ue(y):t.removeAttribute("name")}function uu(t,e,i,s,d,u,v,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Yl(t);return}i=i!=null?""+Ue(i):"",e=e!=null?""+Ue(e):i,y||e===t.value||(t.value=e),t.defaultValue=e}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=y?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Yl(t)}function Xl(t,e,i){e==="number"&&Fa(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Li(t,e,i,s){if(t=t.options,e){e={};for(var d=0;d<i.length;d++)e["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=e.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Ue(i),e=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,s&&(t[d].defaultSelected=!0);return}e!==null||t[d].disabled||(e=t[d])}e!==null&&(e.selected=!0)}}function hu(t,e,i){if(e!=null&&(e=""+Ue(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Ue(i):""}function fu(t,e,i,s){if(e==null){if(s!=null){if(i!=null)throw Error(l(92));if(dt(s)){if(1<s.length)throw Error(l(93));s=s[0]}i=s}i==null&&(i=""),e=i}i=Ue(e),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),Yl(t)}function Ui(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var sm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gu(t,e,i){var s=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,i):typeof i!="number"||i===0||sm.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function pu(t,e,i){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var d in e)s=e[d],e.hasOwnProperty(d)&&i[d]!==s&&gu(t,d,s)}else for(var u in e)e.hasOwnProperty(u)&&gu(t,u,e[u])}function Ql(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),om=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wa(t){return om.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ur(){}var Zl=null;function Fl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mi=null,zi=null;function vu(t){var e=Ni(t);if(e&&(t=e.stateNode)){var i=t[he]||null;t:switch(t=e.stateNode,e.type){case"input":if(Jl(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var s=i[e];if(s!==t&&s.form===t.form){var d=s[he]||null;if(!d)throw Error(l(90));Jl(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(e=0;e<i.length;e++)s=i[e],s.form===t.form&&cu(s)}break t;case"textarea":hu(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Li(t,!!i.multiple,e,!1)}}}var Wl=!1;function mu(t,e,i){if(Wl)return t(e,i);Wl=!0;try{var s=t(e);return s}finally{if(Wl=!1,(Mi!==null||zi!==null)&&(Ps(),Mi&&(e=Mi,t=zi,zi=Mi=null,vu(e),t)))for(e=0;e<t.length;e++)vu(t[e])}}function Un(t,e){var i=t.stateNode;if(i===null)return null;var s=i[he]||null;if(s===null)return null;i=s[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(l(231,e,typeof i));return i}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=!1;if(hr)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){to=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{to=!1}var Lr=null,eo=null,ts=null;function yu(){if(ts)return ts;var t,e=eo,i=e.length,s,d="value"in Lr?Lr.value:Lr.textContent,u=d.length;for(t=0;t<i&&e[t]===d[t];t++);var v=i-t;for(s=1;s<=v&&e[i-s]===d[u-s];s++);return ts=d.slice(t,1<s?1-s:void 0)}function es(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rs(){return!0}function bu(){return!1}function fe(t){function e(i,s,d,u,v){this._reactName=i,this._targetInst=d,this.type=s,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(i=t[y],this[y]=i?i(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?rs:bu,this.isPropagationStopped=bu,this}return m(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=fe(di),zn=m({},di,{view:0,detail:0}),dm=fe(zn),ro,io,Bn,ns=m({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bn&&(Bn&&t.type==="mousemove"?(ro=t.screenX-Bn.screenX,io=t.screenY-Bn.screenY):io=ro=0,Bn=t),ro)},movementY:function(t){return"movementY"in t?t.movementY:io}}),Au=fe(ns),cm=m({},ns,{dataTransfer:0}),um=fe(cm),hm=m({},zn,{relatedTarget:0}),no=fe(hm),fm=m({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=fe(fm),pm=m({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vm=fe(pm),mm=m({},di,{data:0}),wu=fe(mm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Am[t])?!!e[t]:!1}function ao(){return wm}var _m=m({},zn,{key:function(t){if(t.key){var e=ym[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=es(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(t){return t.type==="keypress"?es(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?es(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Im=fe(_m),Sm=m({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=fe(Sm),Em=m({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Tm=fe(Em),Cm=m({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=fe(Cm),Rm=m({},ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=fe(Rm),km=m({},di,{newState:0,oldState:0}),Nm=fe(km),jm=[9,13,27,32],so=hr&&"CompositionEvent"in window,Pn=null;hr&&"documentMode"in document&&(Pn=document.documentMode);var Dm=hr&&"TextEvent"in window&&!Pn,Iu=hr&&(!so||Pn&&8<Pn&&11>=Pn),Su=" ",Eu=!1;function Tu(t,e){switch(t){case"keyup":return jm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function Lm(t,e){switch(t){case"compositionend":return Cu(e);case"keypress":return e.which!==32?null:(Eu=!0,Su);case"textInput":return t=e.data,t===Su&&Eu?null:t;default:return null}}function Um(t,e){if(Bi)return t==="compositionend"||!so&&Tu(t,e)?(t=yu(),ts=eo=Lr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iu&&e.locale!=="ko"?null:e.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mm[t.type]:e==="textarea"}function Ru(t,e,i,s){Mi?zi?zi.push(s):zi=[s]:Mi=s,e=Ys(e,"onChange"),0<e.length&&(i=new is("onChange","change",null,i,s),t.push({event:i,listeners:e}))}var Hn=null,Gn=null;function zm(t){hg(t,0)}function as(t){var e=Ln(t);if(cu(e))return t}function Ou(t,e){if(t==="change")return e}var ku=!1;if(hr){var lo;if(hr){var oo="oninput"in document;if(!oo){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),oo=typeof Nu.oninput=="function"}lo=oo}else lo=!1;ku=lo&&(!document.documentMode||9<document.documentMode)}function ju(){Hn&&(Hn.detachEvent("onpropertychange",Du),Gn=Hn=null)}function Du(t){if(t.propertyName==="value"&&as(Gn)){var e=[];Ru(e,Gn,t,Fl(t)),mu(zm,e)}}function Bm(t,e,i){t==="focusin"?(ju(),Hn=e,Gn=i,Hn.attachEvent("onpropertychange",Du)):t==="focusout"&&ju()}function Pm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return as(Gn)}function Hm(t,e){if(t==="click")return as(e)}function Gm(t,e){if(t==="input"||t==="change")return as(e)}function qm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ee=typeof Object.is=="function"?Object.is:qm;function qn(t,e){if(Ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),s=Object.keys(e);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var d=i[s];if(!Bl.call(e,d)||!Ee(t[d],e[d]))return!1}return!0}function Lu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uu(t,e){var i=Lu(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=e&&s>=e)return{node:i,offset:e-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Lu(i)}}function Mu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fa(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Fa(t.document)}return e}function co(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $m=hr&&"documentMode"in document&&11>=document.documentMode,Pi=null,uo=null,$n=null,ho=!1;function Bu(t,e,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ho||Pi==null||Pi!==Fa(s)||(s=Pi,"selectionStart"in s&&co(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$n&&qn($n,s)||($n=s,s=Ys(uo,"onSelect"),0<s.length&&(e=new is("onSelect","select",null,e,i),t.push({event:e,listeners:s}),e.target=Pi)))}function ci(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Hi={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionrun:ci("Transition","TransitionRun"),transitionstart:ci("Transition","TransitionStart"),transitioncancel:ci("Transition","TransitionCancel"),transitionend:ci("Transition","TransitionEnd")},fo={},Pu={};hr&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function ui(t){if(fo[t])return fo[t];if(!Hi[t])return t;var e=Hi[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Pu)return fo[t]=e[i];return t}var Hu=ui("animationend"),Gu=ui("animationiteration"),qu=ui("animationstart"),Vm=ui("transitionrun"),Km=ui("transitionstart"),Ym=ui("transitioncancel"),$u=ui("transitionend"),Vu=new Map,go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");go.push("scrollEnd");function Je(t,e){Vu.set(t,e),oi(e,[t])}var ss=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ze=[],Gi=0,po=0;function ls(){for(var t=Gi,e=po=Gi=0;e<t;){var i=ze[e];ze[e++]=null;var s=ze[e];ze[e++]=null;var d=ze[e];ze[e++]=null;var u=ze[e];if(ze[e++]=null,s!==null&&d!==null){var v=s.pending;v===null?d.next=d:(d.next=v.next,v.next=d),s.pending=d}u!==0&&Ku(i,d,u)}}function os(t,e,i,s){ze[Gi++]=t,ze[Gi++]=e,ze[Gi++]=i,ze[Gi++]=s,po|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function vo(t,e,i,s){return os(t,e,i,s),ds(t)}function hi(t,e){return os(t,null,null,e),ds(t)}function Ku(t,e,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var d=!1,u=t.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(d=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,d&&e!==null&&(d=31-Se(i),t=u.hiddenUpdates,s=t[d],s===null?t[d]=[e]:s.push(e),e.lane=i|536870912),u):null}function ds(t){if(50<ha)throw ha=0,Ed=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qi={};function Jm(t,e,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,i,s){return new Jm(t,e,i,s)}function mo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fr(t,e){var i=t.alternate;return i===null?(i=Te(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Yu(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function cs(t,e,i,s,d,u){var v=0;if(s=t,typeof t=="function")mo(t)&&(v=1);else if(typeof t=="string")v=Wy(t,i,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case St:return t=Te(31,i,e,d),t.elementType=St,t.lanes=u,t;case x:return fi(i.children,d,u,e);case k:v=8,d|=24;break;case M:return t=Te(12,i,e,d|2),t.elementType=M,t.lanes=u,t;case F:return t=Te(13,i,e,d),t.elementType=F,t.lanes=u,t;case W:return t=Te(19,i,e,d),t.elementType=W,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:v=10;break t;case P:v=9;break t;case q:v=11;break t;case J:v=14;break t;case It:v=16,s=null;break t}v=29,i=Error(l(130,t===null?"null":typeof t,"")),s=null}return e=Te(v,i,e,d),e.elementType=t,e.type=s,e.lanes=u,e}function fi(t,e,i,s){return t=Te(7,t,s,e),t.lanes=i,t}function yo(t,e,i){return t=Te(6,t,null,e),t.lanes=i,t}function Ju(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function bo(t,e,i){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xu=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var i=Xu.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Jc(e)},Xu.set(t,e),e)}return{value:t,source:e,stack:Jc(e)}}var $i=[],Vi=0,us=null,Vn=0,Pe=[],He=0,Ur=null,rr=1,ir="";function gr(t,e){$i[Vi++]=Vn,$i[Vi++]=us,us=t,Vn=e}function Qu(t,e,i){Pe[He++]=rr,Pe[He++]=ir,Pe[He++]=Ur,Ur=t;var s=rr;t=ir;var d=32-Se(s)-1;s&=~(1<<d),i+=1;var u=32-Se(e)+d;if(30<u){var v=d-d%5;u=(s&(1<<v)-1).toString(32),s>>=v,d-=v,rr=1<<32-Se(e)+d|i<<d|s,ir=u+t}else rr=1<<u|i<<d|s,ir=t}function Ao(t){t.return!==null&&(gr(t,1),Qu(t,1,0))}function wo(t){for(;t===us;)us=$i[--Vi],$i[Vi]=null,Vn=$i[--Vi],$i[Vi]=null;for(;t===Ur;)Ur=Pe[--He],Pe[He]=null,ir=Pe[--He],Pe[He]=null,rr=Pe[--He],Pe[He]=null}function Zu(t,e){Pe[He++]=rr,Pe[He++]=ir,Pe[He++]=Ur,rr=e.id,ir=e.overflow,Ur=t}var re=null,Nt=null,pt=!1,Mr=null,Ge=!1,_o=Error(l(519));function zr(t){var e=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kn(Be(e,t)),_o}function Fu(t){var e=t.stateNode,i=t.type,s=t.memoizedProps;switch(e[ee]=t,e[he]=s,i){case"dialog":ht("cancel",e),ht("close",e);break;case"iframe":case"object":case"embed":ht("load",e);break;case"video":case"audio":for(i=0;i<ga.length;i++)ht(ga[i],e);break;case"source":ht("error",e);break;case"img":case"image":case"link":ht("error",e),ht("load",e);break;case"details":ht("toggle",e);break;case"input":ht("invalid",e),uu(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ht("invalid",e);break;case"textarea":ht("invalid",e),fu(e,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||s.suppressHydrationWarning===!0||vg(e.textContent,i)?(s.popover!=null&&(ht("beforetoggle",e),ht("toggle",e)),s.onScroll!=null&&ht("scroll",e),s.onScrollEnd!=null&&ht("scrollend",e),s.onClick!=null&&(e.onclick=ur),e=!0):e=!1,e||zr(t,!0)}function Wu(t){for(re=t.return;re;)switch(re.tag){case 5:case 31:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:re=re.return}}function Ki(t){if(t!==re)return!1;if(!pt)return Wu(t),pt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Pd(t.type,t.memoizedProps)),i=!i),i&&Nt&&zr(t),Wu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Nt=Eg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));Nt=Eg(t)}else e===27?(e=Nt,Fr(t.type)?(t=Vd,Vd=null,Nt=t):Nt=e):Nt=re?$e(t.stateNode.nextSibling):null;return!0}function gi(){Nt=re=null,pt=!1}function Io(){var t=Mr;return t!==null&&(me===null?me=t:me.push.apply(me,t),Mr=null),t}function Kn(t){Mr===null?Mr=[t]:Mr.push(t)}var So=T(null),pi=null,pr=null;function Br(t,e,i){K(So,e._currentValue),e._currentValue=i}function vr(t){t._currentValue=So.current,G(So)}function Eo(t,e,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===i)break;t=t.return}}function To(t,e,i,s){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var u=d.dependencies;if(u!==null){var v=d.child;u=u.firstContext;t:for(;u!==null;){var y=u;u=d;for(var I=0;I<e.length;I++)if(y.context===e[I]){u.lanes|=i,y=u.alternate,y!==null&&(y.lanes|=i),Eo(u.return,i,t),s||(v=null);break t}u=y.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(l(341));v.lanes|=i,u=v.alternate,u!==null&&(u.lanes|=i),Eo(v,i,t),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===t){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Yi(t,e,i,s){t=null;for(var d=e,u=!1;d!==null;){if(!u){if((d.flags&524288)!==0)u=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var y=d.type;Ee(d.pendingProps.value,v.value)||(t!==null?t.push(y):t=[y])}}else if(d===At.current){if(v=d.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(ba):t=[ba])}d=d.return}t!==null&&To(e,t,i,s),e.flags|=262144}function hs(t){for(t=t.firstContext;t!==null;){if(!Ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vi(t){pi=t,pr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ie(t){return th(pi,t)}function fs(t,e){return pi===null&&vi(t),th(t,e)}function th(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},pr===null){if(t===null)throw Error(l(308));pr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pr=pr.next=e;return i}var Xm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},Qm=n.unstable_scheduleCallback,Zm=n.unstable_NormalPriority,$t={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Xm,data:new Map,refCount:0}}function Yn(t){t.refCount--,t.refCount===0&&Qm(Zm,function(){t.controller.abort()})}var Jn=null,xo=0,Ji=0,Xi=null;function Fm(t,e){if(Jn===null){var i=Jn=[];xo=0,Ji=kd(),Xi={status:"pending",value:void 0,then:function(s){i.push(s)}}}return xo++,e.then(eh,eh),e}function eh(){if(--xo===0&&Jn!==null){Xi!==null&&(Xi.status="fulfilled");var t=Jn;Jn=null,Ji=0,Xi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Wm(t,e){var i=[],s={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return t.then(function(){s.status="fulfilled",s.value=e;for(var d=0;d<i.length;d++)(0,i[d])(e)},function(d){for(s.status="rejected",s.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),s}var rh=U.S;U.S=function(t,e){Pf=_e(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Fm(t,e),rh!==null&&rh(t,e)};var mi=T(null);function Ro(){var t=mi.current;return t!==null?t:Ot.pooledCache}function gs(t,e){e===null?K(mi,mi.current):K(mi,e.pool)}function ih(){var t=Ro();return t===null?null:{parent:$t._currentValue,pool:t}}var Qi=Error(l(460)),Oo=Error(l(474)),ps=Error(l(542)),vs={then:function(){}};function nh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ah(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(ur,ur),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lh(t),t;default:if(typeof e.status=="string")e.then(ur,ur);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(s){if(e.status==="pending"){var d=e;d.status="fulfilled",d.value=s}},function(s){if(e.status==="pending"){var d=e;d.status="rejected",d.reason=s}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lh(t),t}throw bi=e,Qi}}function yi(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(bi=i,Qi):i}}var bi=null;function sh(){if(bi===null)throw Error(l(459));var t=bi;return bi=null,t}function lh(t){if(t===Qi||t===ps)throw Error(l(483))}var Zi=null,Xn=0;function ms(t){var e=Xn;return Xn+=1,Zi===null&&(Zi=[]),ah(Zi,t,e)}function Qn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ys(t,e){throw e.$$typeof===w?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function oh(t){function e(C,E){if(t){var N=C.deletions;N===null?(C.deletions=[E],C.flags|=16):N.push(E)}}function i(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function s(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function d(C,E){return C=fr(C,E),C.index=0,C.sibling=null,C}function u(C,E,N){return C.index=N,t?(N=C.alternate,N!==null?(N=N.index,N<E?(C.flags|=67108866,E):N):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function v(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function y(C,E,N,B){return E===null||E.tag!==6?(E=yo(N,C.mode,B),E.return=C,E):(E=d(E,N),E.return=C,E)}function I(C,E,N,B){var tt=N.type;return tt===x?z(C,E,N.props.children,B,N.key):E!==null&&(E.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===It&&yi(tt)===E.type)?(E=d(E,N.props),Qn(E,N),E.return=C,E):(E=cs(N.type,N.key,N.props,null,C.mode,B),Qn(E,N),E.return=C,E)}function j(C,E,N,B){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=bo(N,C.mode,B),E.return=C,E):(E=d(E,N.children||[]),E.return=C,E)}function z(C,E,N,B,tt){return E===null||E.tag!==7?(E=fi(N,C.mode,B,tt),E.return=C,E):(E=d(E,N),E.return=C,E)}function H(C,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=yo(""+E,C.mode,N),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _:return N=cs(E.type,E.key,E.props,null,C.mode,N),Qn(N,E),N.return=C,N;case O:return E=bo(E,C.mode,N),E.return=C,E;case It:return E=yi(E),H(C,E,N)}if(dt(E)||Qt(E))return E=fi(E,C.mode,N,null),E.return=C,E;if(typeof E.then=="function")return H(C,ms(E),N);if(E.$$typeof===R)return H(C,fs(C,E),N);ys(C,E)}return null}function D(C,E,N,B){var tt=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return tt!==null?null:y(C,E,""+N,B);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===tt?I(C,E,N,B):null;case O:return N.key===tt?j(C,E,N,B):null;case It:return N=yi(N),D(C,E,N,B)}if(dt(N)||Qt(N))return tt!==null?null:z(C,E,N,B,null);if(typeof N.then=="function")return D(C,E,ms(N),B);if(N.$$typeof===R)return D(C,E,fs(C,N),B);ys(C,N)}return null}function L(C,E,N,B,tt){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return C=C.get(N)||null,y(E,C,""+B,tt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case _:return C=C.get(B.key===null?N:B.key)||null,I(E,C,B,tt);case O:return C=C.get(B.key===null?N:B.key)||null,j(E,C,B,tt);case It:return B=yi(B),L(C,E,N,B,tt)}if(dt(B)||Qt(B))return C=C.get(N)||null,z(E,C,B,tt,null);if(typeof B.then=="function")return L(C,E,N,ms(B),tt);if(B.$$typeof===R)return L(C,E,N,fs(E,B),tt);ys(E,B)}return null}function Y(C,E,N,B){for(var tt=null,vt=null,Z=E,ot=E=0,gt=null;Z!==null&&ot<N.length;ot++){Z.index>ot?(gt=Z,Z=null):gt=Z.sibling;var mt=D(C,Z,N[ot],B);if(mt===null){Z===null&&(Z=gt);break}t&&Z&&mt.alternate===null&&e(C,Z),E=u(mt,E,ot),vt===null?tt=mt:vt.sibling=mt,vt=mt,Z=gt}if(ot===N.length)return i(C,Z),pt&&gr(C,ot),tt;if(Z===null){for(;ot<N.length;ot++)Z=H(C,N[ot],B),Z!==null&&(E=u(Z,E,ot),vt===null?tt=Z:vt.sibling=Z,vt=Z);return pt&&gr(C,ot),tt}for(Z=s(Z);ot<N.length;ot++)gt=L(Z,C,ot,N[ot],B),gt!==null&&(t&&gt.alternate!==null&&Z.delete(gt.key===null?ot:gt.key),E=u(gt,E,ot),vt===null?tt=gt:vt.sibling=gt,vt=gt);return t&&Z.forEach(function(ii){return e(C,ii)}),pt&&gr(C,ot),tt}function et(C,E,N,B){if(N==null)throw Error(l(151));for(var tt=null,vt=null,Z=E,ot=E=0,gt=null,mt=N.next();Z!==null&&!mt.done;ot++,mt=N.next()){Z.index>ot?(gt=Z,Z=null):gt=Z.sibling;var ii=D(C,Z,mt.value,B);if(ii===null){Z===null&&(Z=gt);break}t&&Z&&ii.alternate===null&&e(C,Z),E=u(ii,E,ot),vt===null?tt=ii:vt.sibling=ii,vt=ii,Z=gt}if(mt.done)return i(C,Z),pt&&gr(C,ot),tt;if(Z===null){for(;!mt.done;ot++,mt=N.next())mt=H(C,mt.value,B),mt!==null&&(E=u(mt,E,ot),vt===null?tt=mt:vt.sibling=mt,vt=mt);return pt&&gr(C,ot),tt}for(Z=s(Z);!mt.done;ot++,mt=N.next())mt=L(Z,C,ot,mt.value,B),mt!==null&&(t&&mt.alternate!==null&&Z.delete(mt.key===null?ot:mt.key),E=u(mt,E,ot),vt===null?tt=mt:vt.sibling=mt,vt=mt);return t&&Z.forEach(function(cb){return e(C,cb)}),pt&&gr(C,ot),tt}function xt(C,E,N,B){if(typeof N=="object"&&N!==null&&N.type===x&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:t:{for(var tt=N.key;E!==null;){if(E.key===tt){if(tt=N.type,tt===x){if(E.tag===7){i(C,E.sibling),B=d(E,N.props.children),B.return=C,C=B;break t}}else if(E.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===It&&yi(tt)===E.type){i(C,E.sibling),B=d(E,N.props),Qn(B,N),B.return=C,C=B;break t}i(C,E);break}else e(C,E);E=E.sibling}N.type===x?(B=fi(N.props.children,C.mode,B,N.key),B.return=C,C=B):(B=cs(N.type,N.key,N.props,null,C.mode,B),Qn(B,N),B.return=C,C=B)}return v(C);case O:t:{for(tt=N.key;E!==null;){if(E.key===tt)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){i(C,E.sibling),B=d(E,N.children||[]),B.return=C,C=B;break t}else{i(C,E);break}else e(C,E);E=E.sibling}B=bo(N,C.mode,B),B.return=C,C=B}return v(C);case It:return N=yi(N),xt(C,E,N,B)}if(dt(N))return Y(C,E,N,B);if(Qt(N)){if(tt=Qt(N),typeof tt!="function")throw Error(l(150));return N=tt.call(N),et(C,E,N,B)}if(typeof N.then=="function")return xt(C,E,ms(N),B);if(N.$$typeof===R)return xt(C,E,fs(C,N),B);ys(C,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,E!==null&&E.tag===6?(i(C,E.sibling),B=d(E,N),B.return=C,C=B):(i(C,E),B=yo(N,C.mode,B),B.return=C,C=B),v(C)):i(C,E)}return function(C,E,N,B){try{Xn=0;var tt=xt(C,E,N,B);return Zi=null,tt}catch(Z){if(Z===Qi||Z===ps)throw Z;var vt=Te(29,Z,null,C.mode);return vt.lanes=B,vt.return=C,vt}}}var Ai=oh(!0),dh=oh(!1),Pr=!1;function ko(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function No(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gr(t,e,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(bt&2)!==0){var d=s.pending;return d===null?e.next=e:(e.next=d.next,d.next=e),s.pending=e,e=ds(t),Ku(t,null,i),e}return os(t,s,e,i),ds(t)}function Zn(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,tu(t,i)}}function jo(t,e){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var d=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?d=u=v:u=u.next=v,i=i.next}while(i!==null);u===null?d=u=e:u=u.next=e}else d=u=e;i={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Do=!1;function Fn(){if(Do){var t=Xi;if(t!==null)throw t}}function Wn(t,e,i,s){Do=!1;var d=t.updateQueue;Pr=!1;var u=d.firstBaseUpdate,v=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var I=y,j=I.next;I.next=null,v===null?u=j:v.next=j,v=I;var z=t.alternate;z!==null&&(z=z.updateQueue,y=z.lastBaseUpdate,y!==v&&(y===null?z.firstBaseUpdate=j:y.next=j,z.lastBaseUpdate=I))}if(u!==null){var H=d.baseState;v=0,z=j=I=null,y=u;do{var D=y.lane&-536870913,L=D!==y.lane;if(L?(ft&D)===D:(s&D)===D){D!==0&&D===Ji&&(Do=!0),z!==null&&(z=z.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var Y=t,et=y;D=e;var xt=i;switch(et.tag){case 1:if(Y=et.payload,typeof Y=="function"){H=Y.call(xt,H,D);break t}H=Y;break t;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=et.payload,D=typeof Y=="function"?Y.call(xt,H,D):Y,D==null)break t;H=m({},H,D);break t;case 2:Pr=!0}}D=y.callback,D!==null&&(t.flags|=64,L&&(t.flags|=8192),L=d.callbacks,L===null?d.callbacks=[D]:L.push(D))}else L={lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},z===null?(j=z=L,I=H):z=z.next=L,v|=D;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;L=y,y=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);z===null&&(I=H),d.baseState=I,d.firstBaseUpdate=j,d.lastBaseUpdate=z,u===null&&(d.shared.lanes=0),Yr|=v,t.lanes=v,t.memoizedState=H}}function ch(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function uh(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)ch(i[t],e)}var Fi=T(null),bs=T(0);function hh(t,e){t=Er,K(bs,t),K(Fi,e),Er=t|e.baseLanes}function Lo(){K(bs,Er),K(Fi,Fi.current)}function Uo(){Er=bs.current,G(Fi),G(bs)}var Ce=T(null),qe=null;function qr(t){var e=t.alternate;K(Gt,Gt.current&1),K(Ce,t),qe===null&&(e===null||Fi.current!==null||e.memoizedState!==null)&&(qe=t)}function Mo(t){K(Gt,Gt.current),K(Ce,t),qe===null&&(qe=t)}function fh(t){t.tag===22?(K(Gt,Gt.current),K(Ce,t),qe===null&&(qe=t)):$r()}function $r(){K(Gt,Gt.current),K(Ce,Ce.current)}function xe(t){G(Ce),qe===t&&(qe=null),G(Gt)}var Gt=T(0);function As(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||qd(i)||$d(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mr=0,lt=null,Tt=null,Vt=null,ws=!1,Wi=!1,wi=!1,_s=0,ta=0,tn=null,ty=0;function Mt(){throw Error(l(321))}function zo(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Ee(t[i],e[i]))return!1;return!0}function Bo(t,e,i,s,d,u){return mr=u,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,U.H=t===null||t.memoizedState===null?Qh:td,wi=!1,u=i(s,d),wi=!1,Wi&&(u=ph(e,i,s,d)),gh(t),u}function gh(t){U.H=ia;var e=Tt!==null&&Tt.next!==null;if(mr=0,Vt=Tt=lt=null,ws=!1,ta=0,tn=null,e)throw Error(l(300));t===null||Kt||(t=t.dependencies,t!==null&&hs(t)&&(Kt=!0))}function ph(t,e,i,s){lt=t;var d=0;do{if(Wi&&(tn=null),ta=0,Wi=!1,25<=d)throw Error(l(301));if(d+=1,Vt=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Zh,u=e(i,s)}while(Wi);return u}function ey(){var t=U.H,e=t.useState()[0];return e=typeof e.then=="function"?ea(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(lt.flags|=1024),e}function Po(){var t=_s!==0;return _s=0,t}function Ho(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Go(t){if(ws){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ws=!1}mr=0,Vt=Tt=lt=null,Wi=!1,ta=_s=0,tn=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?lt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function qt(){if(Tt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Vt===null?lt.memoizedState:Vt.next;if(e!==null)Vt=e,Tt=t;else{if(t===null)throw lt.alternate===null?Error(l(467)):Error(l(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Vt===null?lt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ea(t){var e=ta;return ta+=1,tn===null&&(tn=[]),t=ah(tn,t,e),e=lt,(Vt===null?e.memoizedState:Vt.next)===null&&(e=e.alternate,U.H=e===null||e.memoizedState===null?Qh:td),t}function Ss(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ea(t);if(t.$$typeof===R)return ie(t)}throw Error(l(438,String(t)))}function qo(t){var e=null,i=lt.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var s=lt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={data:s.data.map(function(d){return d.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Is(),lt.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),s=0;s<t;s++)i[s]=Le;return e.index++,i}function yr(t,e){return typeof e=="function"?e(t):e}function Es(t){var e=qt();return $o(e,Tt,t)}function $o(t,e,i){var s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=i;var d=t.baseQueue,u=s.pending;if(u!==null){if(d!==null){var v=d.next;d.next=u.next,u.next=v}e.baseQueue=d=u,s.pending=null}if(u=t.baseState,d===null)t.memoizedState=u;else{e=d.next;var y=v=null,I=null,j=e,z=!1;do{var H=j.lane&-536870913;if(H!==j.lane?(ft&H)===H:(mr&H)===H){var D=j.revertLane;if(D===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),H===Ji&&(z=!0);else if((mr&D)===D){j=j.next,D===Ji&&(z=!0);continue}else H={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(y=I=H,v=u):I=I.next=H,lt.lanes|=D,Yr|=D;H=j.action,wi&&i(u,H),u=j.hasEagerState?j.eagerState:i(u,H)}else D={lane:H,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(y=I=D,v=u):I=I.next=D,lt.lanes|=H,Yr|=H;j=j.next}while(j!==null&&j!==e);if(I===null?v=u:I.next=y,!Ee(u,t.memoizedState)&&(Kt=!0,z&&(i=Xi,i!==null)))throw i;t.memoizedState=u,t.baseState=v,t.baseQueue=I,s.lastRenderedState=u}return d===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Vo(t){var e=qt(),i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=t;var s=i.dispatch,d=i.pending,u=e.memoizedState;if(d!==null){i.pending=null;var v=d=d.next;do u=t(u,v.action),v=v.next;while(v!==d);Ee(u,e.memoizedState)||(Kt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,s]}function vh(t,e,i){var s=lt,d=qt(),u=pt;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=e();var v=!Ee((Tt||d).memoizedState,i);if(v&&(d.memoizedState=i,Kt=!0),d=d.queue,Jo(bh.bind(null,s,d,t),[t]),d.getSnapshot!==e||v||Vt!==null&&Vt.memoizedState.tag&1){if(s.flags|=2048,en(9,{destroy:void 0},yh.bind(null,s,d,i,e),null),Ot===null)throw Error(l(349));u||(mr&127)!==0||mh(s,e,i)}return i}function mh(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=lt.updateQueue,e===null?(e=Is(),lt.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function yh(t,e,i,s){e.value=i,e.getSnapshot=s,Ah(e)&&wh(t)}function bh(t,e,i){return i(function(){Ah(e)&&wh(t)})}function Ah(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Ee(t,i)}catch{return!0}}function wh(t){var e=hi(t,2);e!==null&&ye(e,t,2)}function Ko(t){var e=ce();if(typeof t=="function"){var i=t;if(t=i(),wi){jr(!0);try{i()}finally{jr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:t},e}function _h(t,e,i,s){return t.baseState=i,$o(t,Tt,typeof s=="function"?s:yr)}function ry(t,e,i,s,d){if(xs(t))throw Error(l(485));if(t=e.action,t!==null){var u={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};U.T!==null?i(!0):u.isTransition=!1,s(u),i=e.pending,i===null?(u.next=e.pending=u,Ih(e,u)):(u.next=i.next,e.pending=i.next=u)}}function Ih(t,e){var i=e.action,s=e.payload,d=t.state;if(e.isTransition){var u=U.T,v={};U.T=v;try{var y=i(d,s),I=U.S;I!==null&&I(v,y),Sh(t,e,y)}catch(j){Yo(t,e,j)}finally{u!==null&&v.types!==null&&(u.types=v.types),U.T=u}}else try{u=i(d,s),Sh(t,e,u)}catch(j){Yo(t,e,j)}}function Sh(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){Eh(t,e,s)},function(s){return Yo(t,e,s)}):Eh(t,e,i)}function Eh(t,e,i){e.status="fulfilled",e.value=i,Th(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Ih(t,i)))}function Yo(t,e,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do e.status="rejected",e.reason=i,Th(e),e=e.next;while(e!==s)}t.action=null}function Th(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ch(t,e){return e}function xh(t,e){if(pt){var i=Ot.formState;if(i!==null){t:{var s=lt;if(pt){if(Nt){e:{for(var d=Nt,u=Ge;d.nodeType!==8;){if(!u){d=null;break e}if(d=$e(d.nextSibling),d===null){d=null;break e}}u=d.data,d=u==="F!"||u==="F"?d:null}if(d){Nt=$e(d.nextSibling),s=d.data==="F!";break t}}zr(s)}s=!1}s&&(e=i[0])}}return i=ce(),i.memoizedState=i.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ch,lastRenderedState:e},i.queue=s,i=Yh.bind(null,lt,s),s.dispatch=i,s=Ko(!1),u=Wo.bind(null,lt,!1,s.queue),s=ce(),d={state:e,dispatch:null,action:t,pending:null},s.queue=d,i=ry.bind(null,lt,d,u,i),d.dispatch=i,s.memoizedState=t,[e,i,!1]}function Rh(t){var e=qt();return Oh(e,Tt,t)}function Oh(t,e,i){if(e=$o(t,e,Ch)[0],t=Es(yr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var s=ea(e)}catch(v){throw v===Qi?ps:v}else s=e;e=qt();var d=e.queue,u=d.dispatch;return i!==e.memoizedState&&(lt.flags|=2048,en(9,{destroy:void 0},iy.bind(null,d,i),null)),[s,u,t]}function iy(t,e){t.action=e}function kh(t){var e=qt(),i=Tt;if(i!==null)return Oh(e,i,t);qt(),e=e.memoizedState,i=qt();var s=i.queue.dispatch;return i.memoizedState=t,[e,s,!1]}function en(t,e,i,s){return t={tag:t,create:i,deps:s,inst:e,next:null},e=lt.updateQueue,e===null&&(e=Is(),lt.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,e.lastEffect=t),t}function Nh(){return qt().memoizedState}function Ts(t,e,i,s){var d=ce();lt.flags|=t,d.memoizedState=en(1|e,{destroy:void 0},i,s===void 0?null:s)}function Cs(t,e,i,s){var d=qt();s=s===void 0?null:s;var u=d.memoizedState.inst;Tt!==null&&s!==null&&zo(s,Tt.memoizedState.deps)?d.memoizedState=en(e,u,i,s):(lt.flags|=t,d.memoizedState=en(1|e,u,i,s))}function jh(t,e){Ts(8390656,8,t,e)}function Jo(t,e){Cs(2048,8,t,e)}function ny(t){lt.flags|=4;var e=lt.updateQueue;if(e===null)e=Is(),lt.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function Dh(t){var e=qt().memoizedState;return ny({ref:e,nextImpl:t}),function(){if((bt&2)!==0)throw Error(l(440));return e.impl.apply(void 0,arguments)}}function Lh(t,e){return Cs(4,2,t,e)}function Uh(t,e){return Cs(4,4,t,e)}function Mh(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zh(t,e,i){i=i!=null?i.concat([t]):null,Cs(4,4,Mh.bind(null,e,t),i)}function Xo(){}function Bh(t,e){var i=qt();e=e===void 0?null:e;var s=i.memoizedState;return e!==null&&zo(e,s[1])?s[0]:(i.memoizedState=[t,e],t)}function Ph(t,e){var i=qt();e=e===void 0?null:e;var s=i.memoizedState;if(e!==null&&zo(e,s[1]))return s[0];if(s=t(),wi){jr(!0);try{t()}finally{jr(!1)}}return i.memoizedState=[s,e],s}function Qo(t,e,i){return i===void 0||(mr&1073741824)!==0&&(ft&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=Gf(),lt.lanes|=t,Yr|=t,i)}function Hh(t,e,i,s){return Ee(i,e)?i:Fi.current!==null?(t=Qo(t,i,s),Ee(t,e)||(Kt=!0),t):(mr&42)===0||(mr&1073741824)!==0&&(ft&261930)===0?(Kt=!0,t.memoizedState=i):(t=Gf(),lt.lanes|=t,Yr|=t,e)}function Gh(t,e,i,s,d){var u=$.p;$.p=u!==0&&8>u?u:8;var v=U.T,y={};U.T=y,Wo(t,!1,e,i);try{var I=d(),j=U.S;if(j!==null&&j(y,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var z=Wm(I,s);ra(t,e,z,ke(t))}else ra(t,e,s,ke(t))}catch(H){ra(t,e,{then:function(){},status:"rejected",reason:H},ke())}finally{$.p=u,v!==null&&y.types!==null&&(v.types=y.types),U.T=v}}function ay(){}function Zo(t,e,i,s){if(t.tag!==5)throw Error(l(476));var d=qh(t).queue;Gh(t,d,e,nt,i===null?ay:function(){return $h(t),i(s)})}function qh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:nt},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $h(t){var e=qh(t);e.next===null&&(e=t.alternate.memoizedState),ra(t,e.next.queue,{},ke())}function Fo(){return ie(ba)}function Vh(){return qt().memoizedState}function Kh(){return qt().memoizedState}function sy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ke();t=Hr(i);var s=Gr(e,t,i);s!==null&&(ye(s,e,i),Zn(s,e,i)),e={cache:Co()},t.payload=e;return}e=e.return}}function ly(t,e,i){var s=ke();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},xs(t)?Jh(e,i):(i=vo(t,e,i,s),i!==null&&(ye(i,t,s),Xh(i,e,s)))}function Yh(t,e,i){var s=ke();ra(t,e,i,s)}function ra(t,e,i,s){var d={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(xs(t))Jh(e,d);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var v=e.lastRenderedState,y=u(v,i);if(d.hasEagerState=!0,d.eagerState=y,Ee(y,v))return os(t,e,d,0),Ot===null&&ls(),!1}catch{}if(i=vo(t,e,d,s),i!==null)return ye(i,t,s),Xh(i,e,s),!0}return!1}function Wo(t,e,i,s){if(s={lane:2,revertLane:kd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},xs(t)){if(e)throw Error(l(479))}else e=vo(t,i,s,2),e!==null&&ye(e,t,2)}function xs(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Jh(t,e){Wi=ws=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Xh(t,e,i){if((i&4194048)!==0){var s=e.lanes;s&=t.pendingLanes,i|=s,e.lanes=i,tu(t,i)}}var ia={readContext:ie,use:Ss,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};ia.useEffectEvent=Mt;var Qh={readContext:ie,use:Ss,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:ie,useEffect:jh,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Ts(4194308,4,Mh.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Ts(4194308,4,t,e)},useInsertionEffect:function(t,e){Ts(4,2,t,e)},useMemo:function(t,e){var i=ce();e=e===void 0?null:e;var s=t();if(wi){jr(!0);try{t()}finally{jr(!1)}}return i.memoizedState=[s,e],s},useReducer:function(t,e,i){var s=ce();if(i!==void 0){var d=i(e);if(wi){jr(!0);try{i(e)}finally{jr(!1)}}}else d=e;return s.memoizedState=s.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},s.queue=t,t=t.dispatch=ly.bind(null,lt,t),[s.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=Ko(t);var e=t.queue,i=Yh.bind(null,lt,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Xo,useDeferredValue:function(t,e){var i=ce();return Qo(i,t,e)},useTransition:function(){var t=Ko(!1);return t=Gh.bind(null,lt,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var s=lt,d=ce();if(pt){if(i===void 0)throw Error(l(407));i=i()}else{if(i=e(),Ot===null)throw Error(l(349));(ft&127)!==0||mh(s,e,i)}d.memoizedState=i;var u={value:i,getSnapshot:e};return d.queue=u,jh(bh.bind(null,s,u,t),[t]),s.flags|=2048,en(9,{destroy:void 0},yh.bind(null,s,u,i,e),null),i},useId:function(){var t=ce(),e=Ot.identifierPrefix;if(pt){var i=ir,s=rr;i=(s&~(1<<32-Se(s)-1)).toString(32)+i,e="_"+e+"R_"+i,i=_s++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=ty++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Fo,useFormState:xh,useActionState:xh,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Wo.bind(null,lt,!0,i),i.dispatch=e,[t,e]},useMemoCache:qo,useCacheRefresh:function(){return ce().memoizedState=sy.bind(null,lt)},useEffectEvent:function(t){var e=ce(),i={impl:t};return e.memoizedState=i,function(){if((bt&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},td={readContext:ie,use:Ss,useCallback:Bh,useContext:ie,useEffect:Jo,useImperativeHandle:zh,useInsertionEffect:Lh,useLayoutEffect:Uh,useMemo:Ph,useReducer:Es,useRef:Nh,useState:function(){return Es(yr)},useDebugValue:Xo,useDeferredValue:function(t,e){var i=qt();return Hh(i,Tt.memoizedState,t,e)},useTransition:function(){var t=Es(yr)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:ea(t),e]},useSyncExternalStore:vh,useId:Vh,useHostTransitionStatus:Fo,useFormState:Rh,useActionState:Rh,useOptimistic:function(t,e){var i=qt();return _h(i,Tt,t,e)},useMemoCache:qo,useCacheRefresh:Kh};td.useEffectEvent=Dh;var Zh={readContext:ie,use:Ss,useCallback:Bh,useContext:ie,useEffect:Jo,useImperativeHandle:zh,useInsertionEffect:Lh,useLayoutEffect:Uh,useMemo:Ph,useReducer:Vo,useRef:Nh,useState:function(){return Vo(yr)},useDebugValue:Xo,useDeferredValue:function(t,e){var i=qt();return Tt===null?Qo(i,t,e):Hh(i,Tt.memoizedState,t,e)},useTransition:function(){var t=Vo(yr)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:ea(t),e]},useSyncExternalStore:vh,useId:Vh,useHostTransitionStatus:Fo,useFormState:kh,useActionState:kh,useOptimistic:function(t,e){var i=qt();return Tt!==null?_h(i,Tt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:qo,useCacheRefresh:Kh};Zh.useEffectEvent=Dh;function ed(t,e,i,s){e=t.memoizedState,i=i(s,e),i=i==null?e:m({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var rd={enqueueSetState:function(t,e,i){t=t._reactInternals;var s=ke(),d=Hr(s);d.payload=e,i!=null&&(d.callback=i),e=Gr(t,d,s),e!==null&&(ye(e,t,s),Zn(e,t,s))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var s=ke(),d=Hr(s);d.tag=1,d.payload=e,i!=null&&(d.callback=i),e=Gr(t,d,s),e!==null&&(ye(e,t,s),Zn(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ke(),s=Hr(i);s.tag=2,e!=null&&(s.callback=e),e=Gr(t,s,i),e!==null&&(ye(e,t,i),Zn(e,t,i))}};function Fh(t,e,i,s,d,u,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,v):e.prototype&&e.prototype.isPureReactComponent?!qn(i,s)||!qn(d,u):!0}function Wh(t,e,i,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,s),e.state!==t&&rd.enqueueReplaceState(e,e.state,null)}function _i(t,e){var i=e;if("ref"in e){i={};for(var s in e)s!=="ref"&&(i[s]=e[s])}if(t=t.defaultProps){i===e&&(i=m({},i));for(var d in t)i[d]===void 0&&(i[d]=t[d])}return i}function tf(t){ss(t)}function ef(t){console.error(t)}function rf(t){ss(t)}function Rs(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(s){setTimeout(function(){throw s})}}function nf(t,e,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function id(t,e,i){return i=Hr(i),i.tag=3,i.payload={element:null},i.callback=function(){Rs(t,e)},i}function af(t){return t=Hr(t),t.tag=3,t}function sf(t,e,i,s){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var u=s.value;t.payload=function(){return d(u)},t.callback=function(){nf(e,i,s)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){nf(e,i,s),typeof d!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function oy(t,e,i,s,d){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(e=i.alternate,e!==null&&Yi(e,i,d,!0),i=Ce.current,i!==null){switch(i.tag){case 31:case 13:return qe===null?Hs():i.alternate===null&&zt===0&&(zt=3),i.flags&=-257,i.flags|=65536,i.lanes=d,s===vs?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([s]):e.add(s),xd(t,s,d)),!1;case 22:return i.flags|=65536,s===vs?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([s]):i.add(s)),xd(t,s,d)),!1}throw Error(l(435,i.tag))}return xd(t,s,d),Hs(),!1}if(pt)return e=Ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=d,s!==_o&&(t=Error(l(422),{cause:s}),Kn(Be(t,i)))):(s!==_o&&(e=Error(l(423),{cause:s}),Kn(Be(e,i))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,s=Be(s,i),d=id(t.stateNode,s,d),jo(t,d),zt!==4&&(zt=2)),!1;var u=Error(l(520),{cause:s});if(u=Be(u,i),ua===null?ua=[u]:ua.push(u),zt!==4&&(zt=2),e===null)return!0;s=Be(s,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=d&-d,i.lanes|=t,t=id(i.stateNode,s,t),jo(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Jr===null||!Jr.has(u))))return i.flags|=65536,d&=-d,i.lanes|=d,d=af(d),sf(d,t,i,s),jo(i,d),!1}i=i.return}while(i!==null);return!1}var nd=Error(l(461)),Kt=!1;function ne(t,e,i,s){e.child=t===null?dh(e,null,i,s):Ai(e,t.child,i,s)}function lf(t,e,i,s,d){i=i.render;var u=e.ref;if("ref"in s){var v={};for(var y in s)y!=="ref"&&(v[y]=s[y])}else v=s;return vi(e),s=Bo(t,e,i,v,u,d),y=Po(),t!==null&&!Kt?(Ho(t,e,d),br(t,e,d)):(pt&&y&&Ao(e),e.flags|=1,ne(t,e,s,d),e.child)}function of(t,e,i,s,d){if(t===null){var u=i.type;return typeof u=="function"&&!mo(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,df(t,e,u,s,d)):(t=cs(i.type,null,s,e,e.mode,d),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!hd(t,d)){var v=u.memoizedProps;if(i=i.compare,i=i!==null?i:qn,i(v,s)&&t.ref===e.ref)return br(t,e,d)}return e.flags|=1,t=fr(u,s),t.ref=e.ref,t.return=e,e.child=t}function df(t,e,i,s,d){if(t!==null){var u=t.memoizedProps;if(qn(u,s)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=s=u,hd(t,d))(t.flags&131072)!==0&&(Kt=!0);else return e.lanes=t.lanes,br(t,e,d)}return ad(t,e,i,s,d)}function cf(t,e,i,s){var d=s.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(s=e.child=t.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~u}else s=0,e.child=null;return uf(t,e,u,i,s)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&gs(e,u!==null?u.cachePool:null),u!==null?hh(e,u):Lo(),fh(e);else return s=e.lanes=536870912,uf(t,e,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(gs(e,u.cachePool),hh(e,u),$r(),e.memoizedState=null):(t!==null&&gs(e,null),Lo(),$r());return ne(t,e,d,i),e.child}function na(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function uf(t,e,i,s,d){var u=Ro();return u=u===null?null:{parent:$t._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&gs(e,null),Lo(),fh(e),t!==null&&Yi(t,e,s,!0),e.childLanes=d,null}function Os(t,e){return e=Ns({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function hf(t,e,i){return Ai(e,t.child,null,i),t=Os(e,e.pendingProps),t.flags|=2,xe(e),e.memoizedState=null,t}function dy(t,e,i){var s=e.pendingProps,d=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(pt){if(s.mode==="hidden")return t=Os(e,s),e.lanes=536870912,na(null,t);if(Mo(e),(t=Nt)?(t=Sg(t,Ge),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ur!==null?{id:rr,overflow:ir}:null,retryLane:536870912,hydrationErrors:null},i=Ju(t),i.return=e,e.child=i,re=e,Nt=null)):t=null,t===null)throw zr(e);return e.lanes=536870912,null}return Os(e,s)}var u=t.memoizedState;if(u!==null){var v=u.dehydrated;if(Mo(e),d)if(e.flags&256)e.flags&=-257,e=hf(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(l(558));else if(Kt||Yi(t,e,i,!1),d=(i&t.childLanes)!==0,Kt||d){if(s=Ot,s!==null&&(v=eu(s,i),v!==0&&v!==u.retryLane))throw u.retryLane=v,hi(t,v),ye(s,t,v),nd;Hs(),e=hf(t,e,i)}else t=u.treeContext,Nt=$e(v.nextSibling),re=e,pt=!0,Mr=null,Ge=!1,t!==null&&Zu(e,t),e=Os(e,s),e.flags|=4096;return e}return t=fr(t.child,{mode:s.mode,children:s.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ks(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function ad(t,e,i,s,d){return vi(e),i=Bo(t,e,i,s,void 0,d),s=Po(),t!==null&&!Kt?(Ho(t,e,d),br(t,e,d)):(pt&&s&&Ao(e),e.flags|=1,ne(t,e,i,d),e.child)}function ff(t,e,i,s,d,u){return vi(e),e.updateQueue=null,i=ph(e,s,i,d),gh(t),s=Po(),t!==null&&!Kt?(Ho(t,e,u),br(t,e,u)):(pt&&s&&Ao(e),e.flags|=1,ne(t,e,i,u),e.child)}function gf(t,e,i,s,d){if(vi(e),e.stateNode===null){var u=qi,v=i.contextType;typeof v=="object"&&v!==null&&(u=ie(v)),u=new i(s,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=rd,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=s,u.state=e.memoizedState,u.refs={},ko(e),v=i.contextType,u.context=typeof v=="object"&&v!==null?ie(v):qi,u.state=e.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(ed(e,i,v,s),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&rd.enqueueReplaceState(u,u.state,null),Wn(e,s,u,d),Fn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!0}else if(t===null){u=e.stateNode;var y=e.memoizedProps,I=_i(i,y);u.props=I;var j=u.context,z=i.contextType;v=qi,typeof z=="object"&&z!==null&&(v=ie(z));var H=i.getDerivedStateFromProps;z=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||j!==v)&&Wh(e,u,s,v),Pr=!1;var D=e.memoizedState;u.state=D,Wn(e,s,u,d),Fn(),j=e.memoizedState,y||D!==j||Pr?(typeof H=="function"&&(ed(e,i,H,s),j=e.memoizedState),(I=Pr||Fh(e,i,I,s,D,j,v))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=j),u.props=s,u.state=j,u.context=v,s=I):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{u=e.stateNode,No(t,e),v=e.memoizedProps,z=_i(i,v),u.props=z,H=e.pendingProps,D=u.context,j=i.contextType,I=qi,typeof j=="object"&&j!==null&&(I=ie(j)),y=i.getDerivedStateFromProps,(j=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==H||D!==I)&&Wh(e,u,s,I),Pr=!1,D=e.memoizedState,u.state=D,Wn(e,s,u,d),Fn();var L=e.memoizedState;v!==H||D!==L||Pr||t!==null&&t.dependencies!==null&&hs(t.dependencies)?(typeof y=="function"&&(ed(e,i,y,s),L=e.memoizedState),(z=Pr||Fh(e,i,z,s,D,L,I)||t!==null&&t.dependencies!==null&&hs(t.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,L,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,L,I)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&D===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&D===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=L),u.props=s,u.state=L,u.context=I,s=z):(typeof u.componentDidUpdate!="function"||v===t.memoizedProps&&D===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&D===t.memoizedState||(e.flags|=1024),s=!1)}return u=s,ks(t,e),s=(e.flags&128)!==0,u||s?(u=e.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&s?(e.child=Ai(e,t.child,null,d),e.child=Ai(e,null,i,d)):ne(t,e,i,d),e.memoizedState=u.state,t=e.child):t=br(t,e,d),t}function pf(t,e,i,s){return gi(),e.flags|=256,ne(t,e,i,s),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ld(t){return{baseLanes:t,cachePool:ih()}}function od(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Oe),t}function vf(t,e,i){var s=e.pendingProps,d=!1,u=(e.flags&128)!==0,v;if((v=u)||(v=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),v&&(d=!0,e.flags&=-129),v=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(d?qr(e):$r(),(t=Nt)?(t=Sg(t,Ge),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ur!==null?{id:rr,overflow:ir}:null,retryLane:536870912,hydrationErrors:null},i=Ju(t),i.return=e,e.child=i,re=e,Nt=null)):t=null,t===null)throw zr(e);return $d(t)?e.lanes=32:e.lanes=536870912,null}var y=s.children;return s=s.fallback,d?($r(),d=e.mode,y=Ns({mode:"hidden",children:y},d),s=fi(s,d,i,null),y.return=e,s.return=e,y.sibling=s,e.child=y,s=e.child,s.memoizedState=ld(i),s.childLanes=od(t,v,i),e.memoizedState=sd,na(null,s)):(qr(e),dd(e,y))}var I=t.memoizedState;if(I!==null&&(y=I.dehydrated,y!==null)){if(u)e.flags&256?(qr(e),e.flags&=-257,e=cd(t,e,i)):e.memoizedState!==null?($r(),e.child=t.child,e.flags|=128,e=null):($r(),y=s.fallback,d=e.mode,s=Ns({mode:"visible",children:s.children},d),y=fi(y,d,i,null),y.flags|=2,s.return=e,y.return=e,s.sibling=y,e.child=s,Ai(e,t.child,null,i),s=e.child,s.memoizedState=ld(i),s.childLanes=od(t,v,i),e.memoizedState=sd,e=na(null,s));else if(qr(e),$d(y)){if(v=y.nextSibling&&y.nextSibling.dataset,v)var j=v.dgst;v=j,s=Error(l(419)),s.stack="",s.digest=v,Kn({value:s,source:null,stack:null}),e=cd(t,e,i)}else if(Kt||Yi(t,e,i,!1),v=(i&t.childLanes)!==0,Kt||v){if(v=Ot,v!==null&&(s=eu(v,i),s!==0&&s!==I.retryLane))throw I.retryLane=s,hi(t,s),ye(v,t,s),nd;qd(y)||Hs(),e=cd(t,e,i)}else qd(y)?(e.flags|=192,e.child=t.child,e=null):(t=I.treeContext,Nt=$e(y.nextSibling),re=e,pt=!0,Mr=null,Ge=!1,t!==null&&Zu(e,t),e=dd(e,s.children),e.flags|=4096);return e}return d?($r(),y=s.fallback,d=e.mode,I=t.child,j=I.sibling,s=fr(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,j!==null?y=fr(j,y):(y=fi(y,d,i,null),y.flags|=2),y.return=e,s.return=e,s.sibling=y,e.child=s,na(null,s),s=e.child,y=t.child.memoizedState,y===null?y=ld(i):(d=y.cachePool,d!==null?(I=$t._currentValue,d=d.parent!==I?{parent:I,pool:I}:d):d=ih(),y={baseLanes:y.baseLanes|i,cachePool:d}),s.memoizedState=y,s.childLanes=od(t,v,i),e.memoizedState=sd,na(t.child,s)):(qr(e),i=t.child,t=i.sibling,i=fr(i,{mode:"visible",children:s.children}),i.return=e,i.sibling=null,t!==null&&(v=e.deletions,v===null?(e.deletions=[t],e.flags|=16):v.push(t)),e.child=i,e.memoizedState=null,i)}function dd(t,e){return e=Ns({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ns(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function cd(t,e,i){return Ai(e,t.child,null,i),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mf(t,e,i){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),Eo(t.return,e,i)}function ud(t,e,i,s,d,u){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:d,treeForkCount:u}:(v.isBackwards=e,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=i,v.tailMode=d,v.treeForkCount=u)}function yf(t,e,i){var s=e.pendingProps,d=s.revealOrder,u=s.tail;s=s.children;var v=Gt.current,y=(v&2)!==0;if(y?(v=v&1|2,e.flags|=128):v&=1,K(Gt,v),ne(t,e,s,i),s=pt?Vn:0,!y&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mf(t,i,e);else if(t.tag===19)mf(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(i=e.child,d=null;i!==null;)t=i.alternate,t!==null&&As(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=e.child,e.child=null):(d=i.sibling,i.sibling=null),ud(e,!1,d,i,u,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,d=e.child,e.child=null;d!==null;){if(t=d.alternate,t!==null&&As(t)===null){e.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}ud(e,!0,i,null,u,s);break;case"together":ud(e,!1,null,null,void 0,s);break;default:e.memoizedState=null}return e.child}function br(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(Yi(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,i=fr(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=fr(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function hd(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&hs(t)))}function cy(t,e,i){switch(e.tag){case 3:de(e,e.stateNode.containerInfo),Br(e,$t,t.memoizedState.cache),gi();break;case 27:case 5:On(e);break;case 4:de(e,e.stateNode.containerInfo);break;case 10:Br(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Mo(e),null;break;case 13:var s=e.memoizedState;if(s!==null)return s.dehydrated!==null?(qr(e),e.flags|=128,null):(i&e.child.childLanes)!==0?vf(t,e,i):(qr(e),t=br(t,e,i),t!==null?t.sibling:null);qr(e);break;case 19:var d=(t.flags&128)!==0;if(s=(i&e.childLanes)!==0,s||(Yi(t,e,i,!1),s=(i&e.childLanes)!==0),d){if(s)return yf(t,e,i);e.flags|=128}if(d=e.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),K(Gt,Gt.current),s)break;return null;case 22:return e.lanes=0,cf(t,e,i,e.pendingProps);case 24:Br(e,$t,t.memoizedState.cache)}return br(t,e,i)}function bf(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!hd(t,i)&&(e.flags&128)===0)return Kt=!1,cy(t,e,i);Kt=(t.flags&131072)!==0}else Kt=!1,pt&&(e.flags&1048576)!==0&&Qu(e,Vn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var s=e.pendingProps;if(t=yi(e.elementType),e.type=t,typeof t=="function")mo(t)?(s=_i(t,s),e.tag=1,e=gf(null,e,t,s,i)):(e.tag=0,e=ad(null,e,t,s,i));else{if(t!=null){var d=t.$$typeof;if(d===q){e.tag=11,e=lf(null,e,t,s,i);break t}else if(d===J){e.tag=14,e=of(null,e,t,s,i);break t}}throw e=it(t)||t,Error(l(306,e,""))}}return e;case 0:return ad(t,e,e.type,e.pendingProps,i);case 1:return s=e.type,d=_i(s,e.pendingProps),gf(t,e,s,d,i);case 3:t:{if(de(e,e.stateNode.containerInfo),t===null)throw Error(l(387));s=e.pendingProps;var u=e.memoizedState;d=u.element,No(t,e),Wn(e,s,null,i);var v=e.memoizedState;if(s=v.cache,Br(e,$t,s),s!==u.cache&&To(e,[$t],i,!0),Fn(),s=v.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:v.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=pf(t,e,s,i);break t}else if(s!==d){d=Be(Error(l(424)),e),Kn(d),e=pf(t,e,s,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Nt=$e(t.firstChild),re=e,pt=!0,Mr=null,Ge=!0,i=dh(e,null,s,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(gi(),s===d){e=br(t,e,i);break t}ne(t,e,s,i)}e=e.child}return e;case 26:return ks(t,e),t===null?(i=Og(e.type,null,e.pendingProps,null))?e.memoizedState=i:pt||(i=e.type,t=e.pendingProps,s=Js(ct.current).createElement(i),s[ee]=e,s[he]=t,ae(s,i,t),Ft(s),e.stateNode=s):e.memoizedState=Og(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return On(e),t===null&&pt&&(s=e.stateNode=Cg(e.type,e.pendingProps,ct.current),re=e,Ge=!0,d=Nt,Fr(e.type)?(Vd=d,Nt=$e(s.firstChild)):Nt=d),ne(t,e,e.pendingProps.children,i),ks(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((d=s=Nt)&&(s=Py(s,e.type,e.pendingProps,Ge),s!==null?(e.stateNode=s,re=e,Nt=$e(s.firstChild),Ge=!1,d=!0):d=!1),d||zr(e)),On(e),d=e.type,u=e.pendingProps,v=t!==null?t.memoizedProps:null,s=u.children,Pd(d,u)?s=null:v!==null&&Pd(d,v)&&(e.flags|=32),e.memoizedState!==null&&(d=Bo(t,e,ey,null,null,i),ba._currentValue=d),ks(t,e),ne(t,e,s,i),e.child;case 6:return t===null&&pt&&((t=i=Nt)&&(i=Hy(i,e.pendingProps,Ge),i!==null?(e.stateNode=i,re=e,Nt=null,t=!0):t=!1),t||zr(e)),null;case 13:return vf(t,e,i);case 4:return de(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=Ai(e,null,s,i):ne(t,e,s,i),e.child;case 11:return lf(t,e,e.type,e.pendingProps,i);case 7:return ne(t,e,e.pendingProps,i),e.child;case 8:return ne(t,e,e.pendingProps.children,i),e.child;case 12:return ne(t,e,e.pendingProps.children,i),e.child;case 10:return s=e.pendingProps,Br(e,e.type,s.value),ne(t,e,s.children,i),e.child;case 9:return d=e.type._context,s=e.pendingProps.children,vi(e),d=ie(d),s=s(d),e.flags|=1,ne(t,e,s,i),e.child;case 14:return of(t,e,e.type,e.pendingProps,i);case 15:return df(t,e,e.type,e.pendingProps,i);case 19:return yf(t,e,i);case 31:return dy(t,e,i);case 22:return cf(t,e,i,e.pendingProps);case 24:return vi(e),s=ie($t),t===null?(d=Ro(),d===null&&(d=Ot,u=Co(),d.pooledCache=u,u.refCount++,u!==null&&(d.pooledCacheLanes|=i),d=u),e.memoizedState={parent:s,cache:d},ko(e),Br(e,$t,d)):((t.lanes&i)!==0&&(No(t,e),Wn(e,null,null,i),Fn()),d=t.memoizedState,u=e.memoizedState,d.parent!==s?(d={parent:s,cache:s},e.memoizedState=d,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=d),Br(e,$t,s)):(s=u.cache,Br(e,$t,s),s!==d.cache&&To(e,[$t],i,!0))),ne(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function Ar(t){t.flags|=4}function fd(t,e,i,s,d){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(Kf())t.flags|=8192;else throw bi=vs,Oo}else t.flags&=-16777217}function Af(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Lg(e))if(Kf())t.flags|=8192;else throw bi=vs,Oo}function js(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Fc():536870912,t.lanes|=e,sn|=e)}function aa(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(e)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=s,t.childLanes=i,e}function uy(t,e,i){var s=e.pendingProps;switch(wo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return jt(e),null;case 3:return i=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),vr($t),Ht(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ki(e)?Ar(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Io())),jt(e),null;case 26:var d=e.type,u=e.memoizedState;return t===null?(Ar(e),u!==null?(jt(e),Af(e,u)):(jt(e),fd(e,d,null,s,i))):u?u!==t.memoizedState?(Ar(e),jt(e),Af(e,u)):(jt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ar(e),jt(e),fd(e,d,t,s,i)),null;case 27:if($a(e),i=ct.current,d=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&Ar(e);else{if(!s){if(e.stateNode===null)throw Error(l(166));return jt(e),null}t=Q.current,Ki(e)?Fu(e):(t=Cg(d,s,i),e.stateNode=t,Ar(e))}return jt(e),null;case 5:if($a(e),d=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&Ar(e);else{if(!s){if(e.stateNode===null)throw Error(l(166));return jt(e),null}if(u=Q.current,Ki(e))Fu(e);else{var v=Js(ct.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?v.createElement(d,{is:s.is}):v.createElement(d)}}u[ee]=e,u[he]=s;t:for(v=e.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break t;for(;v.sibling===null;){if(v.return===null||v.return===e)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}e.stateNode=u;t:switch(ae(u,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ar(e)}}return jt(e),fd(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&Ar(e);else{if(typeof s!="string"&&e.stateNode===null)throw Error(l(166));if(t=ct.current,Ki(e)){if(t=e.stateNode,i=e.memoizedProps,s=null,d=re,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}t[ee]=e,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||vg(t.nodeValue,i)),t||zr(e,!0)}else t=Js(t).createTextNode(s),t[ee]=e,e.stateNode=t}return jt(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(s=Ki(e),i!==null){if(t===null){if(!s)throw Error(l(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[ee]=e}else gi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),t=!1}else i=Io(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(xe(e),e):(xe(e),null);if((e.flags&128)!==0)throw Error(l(558))}return jt(e),null;case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Ki(e),s!==null&&s.dehydrated!==null){if(t===null){if(!d)throw Error(l(318));if(d=e.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[ee]=e}else gi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),d=!1}else d=Io(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return e.flags&256?(xe(e),e):(xe(e),null)}return xe(e),(e.flags&128)!==0?(e.lanes=i,e):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=e.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==d&&(s.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),js(e,e.updateQueue),jt(e),null);case 4:return Ht(),t===null&&Ld(e.stateNode.containerInfo),jt(e),null;case 10:return vr(e.type),jt(e),null;case 19:if(G(Gt),s=e.memoizedState,s===null)return jt(e),null;if(d=(e.flags&128)!==0,u=s.rendering,u===null)if(d)aa(s,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=As(t),u!==null){for(e.flags|=128,aa(s,!1),t=u.updateQueue,e.updateQueue=t,js(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Yu(i,t),i=i.sibling;return K(Gt,Gt.current&1|2),pt&&gr(e,s.treeForkCount),e.child}t=t.sibling}s.tail!==null&&_e()>zs&&(e.flags|=128,d=!0,aa(s,!1),e.lanes=4194304)}else{if(!d)if(t=As(u),t!==null){if(e.flags|=128,d=!0,t=t.updateQueue,e.updateQueue=t,js(e,t),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!pt)return jt(e),null}else 2*_e()-s.renderingStartTime>zs&&i!==536870912&&(e.flags|=128,d=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_e(),t.sibling=null,i=Gt.current,K(Gt,d?i&1|2:i&1),pt&&gr(e,s.treeForkCount),t):(jt(e),null);case 22:case 23:return xe(e),Uo(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(i&536870912)!==0&&(e.flags&128)===0&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),i=e.updateQueue,i!==null&&js(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==i&&(e.flags|=2048),t!==null&&G(mi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),vr($t),jt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function hy(t,e){switch(wo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vr($t),Ht(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $a(e),null;case 31:if(e.memoizedState!==null){if(xe(e),e.alternate===null)throw Error(l(340));gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(xe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Gt),null;case 4:return Ht(),null;case 10:return vr(e.type),null;case 22:case 23:return xe(e),Uo(),t!==null&&G(mi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return vr($t),null;case 25:return null;default:return null}}function wf(t,e){switch(wo(e),e.tag){case 3:vr($t),Ht();break;case 26:case 27:case 5:$a(e);break;case 4:Ht();break;case 31:e.memoizedState!==null&&xe(e);break;case 13:xe(e);break;case 19:G(Gt);break;case 10:vr(e.type);break;case 22:case 23:xe(e),Uo(),t!==null&&G(mi);break;case 24:vr($t)}}function sa(t,e){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var d=s.next;i=d;do{if((i.tag&t)===t){s=void 0;var u=i.create,v=i.inst;s=u(),v.destroy=s}i=i.next}while(i!==d)}}catch(y){_t(e,e.return,y)}}function Vr(t,e,i){try{var s=e.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var u=d.next;s=u;do{if((s.tag&t)===t){var v=s.inst,y=v.destroy;if(y!==void 0){v.destroy=void 0,d=e;var I=i,j=y;try{j()}catch(z){_t(d,I,z)}}}s=s.next}while(s!==u)}}catch(z){_t(e,e.return,z)}}function _f(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{uh(e,i)}catch(s){_t(t,t.return,s)}}}function If(t,e,i){i.props=_i(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){_t(t,e,s)}}function la(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(d){_t(t,e,d)}}function nr(t,e){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(d){_t(t,e,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){_t(t,e,d)}else i.current=null}function Sf(t){var e=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(d){_t(t,t.return,d)}}function gd(t,e,i){try{var s=t.stateNode;Dy(s,t.type,i,e),s[he]=e}catch(d){_t(t,t.return,d)}}function Ef(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fr(t.type)||t.tag===4}function pd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ef(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=ur));else if(s!==4&&(s===27&&Fr(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(vd(t,e,i),t=t.sibling;t!==null;)vd(t,e,i),t=t.sibling}function Ds(t,e,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(s!==4&&(s===27&&Fr(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Ds(t,e,i),t=t.sibling;t!==null;)Ds(t,e,i),t=t.sibling}function Tf(t){var e=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,d=e.attributes;d.length;)e.removeAttributeNode(d[0]);ae(e,s,i),e[ee]=t,e[he]=i}catch(u){_t(t,t.return,u)}}var wr=!1,Yt=!1,md=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function fy(t,e){if(t=t.containerInfo,zd=el,t=zu(t),co(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var d=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break t}var v=0,y=-1,I=-1,j=0,z=0,H=t,D=null;e:for(;;){for(var L;H!==i||d!==0&&H.nodeType!==3||(y=v+d),H!==u||s!==0&&H.nodeType!==3||(I=v+s),H.nodeType===3&&(v+=H.nodeValue.length),(L=H.firstChild)!==null;)D=H,H=L;for(;;){if(H===t)break e;if(D===i&&++j===d&&(y=v),D===u&&++z===s&&(I=v),(L=H.nextSibling)!==null)break;H=D,D=H.parentNode}H=L}i=y===-1||I===-1?null:{start:y,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(Bd={focusedElem:t,selectionRange:i},el=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)d=t[i],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,i=e,d=u.memoizedProps,u=u.memoizedState,s=i.stateNode;try{var Y=_i(i.type,d);t=s.getSnapshotBeforeUpdate(Y,u),s.__reactInternalSnapshotBeforeUpdate=t}catch(et){_t(i,i.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Gd(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function xf(t,e,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Ir(t,i),s&4&&sa(5,i);break;case 1:if(Ir(t,i),s&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(v){_t(i,i.return,v)}else{var d=_i(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(d,e,t.__reactInternalSnapshotBeforeUpdate)}catch(v){_t(i,i.return,v)}}s&64&&_f(i),s&512&&la(i,i.return);break;case 3:if(Ir(t,i),s&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{uh(t,e)}catch(v){_t(i,i.return,v)}}break;case 27:e===null&&s&4&&Tf(i);case 26:case 5:Ir(t,i),e===null&&s&4&&Sf(i),s&512&&la(i,i.return);break;case 12:Ir(t,i);break;case 31:Ir(t,i),s&4&&kf(t,i);break;case 13:Ir(t,i),s&4&&Nf(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=_y.bind(null,i),Gy(t,i))));break;case 22:if(s=i.memoizedState!==null||wr,!s){e=e!==null&&e.memoizedState!==null||Yt,d=wr;var u=Yt;wr=s,(Yt=e)&&!u?Sr(t,i,(i.subtreeFlags&8772)!==0):Ir(t,i),wr=d,Yt=u}break;case 30:break;default:Ir(t,i)}}function Rf(t){var e=t.alternate;e!==null&&(t.alternate=null,Rf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Kl(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,ge=!1;function _r(t,e,i){for(i=i.child;i!==null;)Of(t,e,i),i=i.sibling}function Of(t,e,i){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(kn,i)}catch{}switch(i.tag){case 26:Yt||nr(i,e),_r(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Yt||nr(i,e);var s=Dt,d=ge;Fr(i.type)&&(Dt=i.stateNode,ge=!1),_r(t,e,i),va(i.stateNode),Dt=s,ge=d;break;case 5:Yt||nr(i,e);case 6:if(s=Dt,d=ge,Dt=null,_r(t,e,i),Dt=s,ge=d,Dt!==null)if(ge)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(i.stateNode)}catch(u){_t(i,e,u)}else try{Dt.removeChild(i.stateNode)}catch(u){_t(i,e,u)}break;case 18:Dt!==null&&(ge?(t=Dt,_g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),gn(t)):_g(Dt,i.stateNode));break;case 4:s=Dt,d=ge,Dt=i.stateNode.containerInfo,ge=!0,_r(t,e,i),Dt=s,ge=d;break;case 0:case 11:case 14:case 15:Vr(2,i,e),Yt||Vr(4,i,e),_r(t,e,i);break;case 1:Yt||(nr(i,e),s=i.stateNode,typeof s.componentWillUnmount=="function"&&If(i,e,s)),_r(t,e,i);break;case 21:_r(t,e,i);break;case 22:Yt=(s=Yt)||i.memoizedState!==null,_r(t,e,i),Yt=s;break;default:_r(t,e,i)}}function kf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gn(t)}catch(i){_t(e,e.return,i)}}}function Nf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gn(t)}catch(i){_t(e,e.return,i)}}function gy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cf),e;default:throw Error(l(435,t.tag))}}function Ls(t,e){var i=gy(t);e.forEach(function(s){if(!i.has(s)){i.add(s);var d=Iy.bind(null,t,s);s.then(d,d)}})}function pe(t,e){var i=e.deletions;if(i!==null)for(var s=0;s<i.length;s++){var d=i[s],u=t,v=e,y=v;t:for(;y!==null;){switch(y.tag){case 27:if(Fr(y.type)){Dt=y.stateNode,ge=!1;break t}break;case 5:Dt=y.stateNode,ge=!1;break t;case 3:case 4:Dt=y.stateNode.containerInfo,ge=!0;break t}y=y.return}if(Dt===null)throw Error(l(160));Of(u,v,d),Dt=null,ge=!1,u=d.alternate,u!==null&&(u.return=null),d.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jf(e,t),e=e.sibling}var Xe=null;function jf(t,e){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ve(t),s&4&&(Vr(3,t,t.return),sa(3,t),Vr(5,t,t.return));break;case 1:pe(e,t),ve(t),s&512&&(Yt||i===null||nr(i,i.return)),s&64&&wr&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var d=Xe;if(pe(e,t),ve(t),s&512&&(Yt||i===null||nr(i,i.return)),s&4){var u=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){t:{s=t.type,i=t.memoizedProps,d=d.ownerDocument||d;e:switch(s){case"title":u=d.getElementsByTagName("title")[0],(!u||u[Dn]||u[ee]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=d.createElement(s),d.head.insertBefore(u,d.querySelector("head > title"))),ae(u,s,i),u[ee]=t,Ft(u),s=u;break t;case"link":var v=jg("link","href",d).get(s+(i.href||""));if(v){for(var y=0;y<v.length;y++)if(u=v[y],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){v.splice(y,1);break e}}u=d.createElement(s),ae(u,s,i),d.head.appendChild(u);break;case"meta":if(v=jg("meta","content",d).get(s+(i.content||""))){for(y=0;y<v.length;y++)if(u=v[y],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){v.splice(y,1);break e}}u=d.createElement(s),ae(u,s,i),d.head.appendChild(u);break;default:throw Error(l(468,s))}u[ee]=t,Ft(u),s=u}t.stateNode=s}else Dg(d,t.type,t.stateNode);else t.stateNode=Ng(d,s,t.memoizedProps);else u!==s?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,s===null?Dg(d,t.type,t.stateNode):Ng(d,s,t.memoizedProps)):s===null&&t.stateNode!==null&&gd(t,t.memoizedProps,i.memoizedProps)}break;case 27:pe(e,t),ve(t),s&512&&(Yt||i===null||nr(i,i.return)),i!==null&&s&4&&gd(t,t.memoizedProps,i.memoizedProps);break;case 5:if(pe(e,t),ve(t),s&512&&(Yt||i===null||nr(i,i.return)),t.flags&32){d=t.stateNode;try{Ui(d,"")}catch(Y){_t(t,t.return,Y)}}s&4&&t.stateNode!=null&&(d=t.memoizedProps,gd(t,d,i!==null?i.memoizedProps:d)),s&1024&&(md=!0);break;case 6:if(pe(e,t),ve(t),s&4){if(t.stateNode===null)throw Error(l(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(Y){_t(t,t.return,Y)}}break;case 3:if(Zs=null,d=Xe,Xe=Xs(e.containerInfo),pe(e,t),Xe=d,ve(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{gn(e.containerInfo)}catch(Y){_t(t,t.return,Y)}md&&(md=!1,Df(t));break;case 4:s=Xe,Xe=Xs(t.stateNode.containerInfo),pe(e,t),ve(t),Xe=s;break;case 12:pe(e,t),ve(t);break;case 31:pe(e,t),ve(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ls(t,s)));break;case 13:pe(e,t),ve(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ms=_e()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ls(t,s)));break;case 22:d=t.memoizedState!==null;var I=i!==null&&i.memoizedState!==null,j=wr,z=Yt;if(wr=j||d,Yt=z||I,pe(e,t),Yt=z,wr=j,ve(t),s&8192)t:for(e=t.stateNode,e._visibility=d?e._visibility&-2:e._visibility|1,d&&(i===null||I||wr||Yt||Ii(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){I=i=e;try{if(u=I.stateNode,d)v=u.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{y=I.stateNode;var H=I.memoizedProps.style,D=H!=null&&H.hasOwnProperty("display")?H.display:null;y.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Y){_t(I,I.return,Y)}}}else if(e.tag===6){if(i===null){I=e;try{I.stateNode.nodeValue=d?"":I.memoizedProps}catch(Y){_t(I,I.return,Y)}}}else if(e.tag===18){if(i===null){I=e;try{var L=I.stateNode;d?Ig(L,!0):Ig(I.stateNode,!1)}catch(Y){_t(I,I.return,Y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,Ls(t,i))));break;case 19:pe(e,t),ve(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ls(t,s)));break;case 30:break;case 21:break;default:pe(e,t),ve(t)}}function ve(t){var e=t.flags;if(e&2){try{for(var i,s=t.return;s!==null;){if(Ef(s)){i=s;break}s=s.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var d=i.stateNode,u=pd(t);Ds(t,u,d);break;case 5:var v=i.stateNode;i.flags&32&&(Ui(v,""),i.flags&=-33);var y=pd(t);Ds(t,y,v);break;case 3:case 4:var I=i.stateNode.containerInfo,j=pd(t);vd(t,j,I);break;default:throw Error(l(161))}}catch(z){_t(t,t.return,z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Df(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Df(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ir(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)xf(t,e.alternate,e),e=e.sibling}function Ii(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Vr(4,e,e.return),Ii(e);break;case 1:nr(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&If(e,e.return,i),Ii(e);break;case 27:va(e.stateNode);case 26:case 5:nr(e,e.return),Ii(e);break;case 22:e.memoizedState===null&&Ii(e);break;case 30:Ii(e);break;default:Ii(e)}t=t.sibling}}function Sr(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var s=e.alternate,d=t,u=e,v=u.flags;switch(u.tag){case 0:case 11:case 15:Sr(d,u,i),sa(4,u);break;case 1:if(Sr(d,u,i),s=u,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){_t(s,s.return,j)}if(s=u,d=s.updateQueue,d!==null){var y=s.stateNode;try{var I=d.shared.hiddenCallbacks;if(I!==null)for(d.shared.hiddenCallbacks=null,d=0;d<I.length;d++)ch(I[d],y)}catch(j){_t(s,s.return,j)}}i&&v&64&&_f(u),la(u,u.return);break;case 27:Tf(u);case 26:case 5:Sr(d,u,i),i&&s===null&&v&4&&Sf(u),la(u,u.return);break;case 12:Sr(d,u,i);break;case 31:Sr(d,u,i),i&&v&4&&kf(d,u);break;case 13:Sr(d,u,i),i&&v&4&&Nf(d,u);break;case 22:u.memoizedState===null&&Sr(d,u,i),la(u,u.return);break;case 30:break;default:Sr(d,u,i)}e=e.sibling}}function yd(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Yn(i))}function bd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Yn(t))}function Qe(t,e,i,s){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lf(t,e,i,s),e=e.sibling}function Lf(t,e,i,s){var d=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,i,s),d&2048&&sa(9,e);break;case 1:Qe(t,e,i,s);break;case 3:Qe(t,e,i,s),d&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Yn(t)));break;case 12:if(d&2048){Qe(t,e,i,s),t=e.stateNode;try{var u=e.memoizedProps,v=u.id,y=u.onPostCommit;typeof y=="function"&&y(v,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){_t(e,e.return,I)}}else Qe(t,e,i,s);break;case 31:Qe(t,e,i,s);break;case 13:Qe(t,e,i,s);break;case 23:break;case 22:u=e.stateNode,v=e.alternate,e.memoizedState!==null?u._visibility&2?Qe(t,e,i,s):oa(t,e):u._visibility&2?Qe(t,e,i,s):(u._visibility|=2,rn(t,e,i,s,(e.subtreeFlags&10256)!==0||!1)),d&2048&&yd(v,e);break;case 24:Qe(t,e,i,s),d&2048&&bd(e.alternate,e);break;default:Qe(t,e,i,s)}}function rn(t,e,i,s,d){for(d=d&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,v=e,y=i,I=s,j=v.flags;switch(v.tag){case 0:case 11:case 15:rn(u,v,y,I,d),sa(8,v);break;case 23:break;case 22:var z=v.stateNode;v.memoizedState!==null?z._visibility&2?rn(u,v,y,I,d):oa(u,v):(z._visibility|=2,rn(u,v,y,I,d)),d&&j&2048&&yd(v.alternate,v);break;case 24:rn(u,v,y,I,d),d&&j&2048&&bd(v.alternate,v);break;default:rn(u,v,y,I,d)}e=e.sibling}}function oa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,s=e,d=s.flags;switch(s.tag){case 22:oa(i,s),d&2048&&yd(s.alternate,s);break;case 24:oa(i,s),d&2048&&bd(s.alternate,s);break;default:oa(i,s)}e=e.sibling}}var da=8192;function nn(t,e,i){if(t.subtreeFlags&da)for(t=t.child;t!==null;)Uf(t,e,i),t=t.sibling}function Uf(t,e,i){switch(t.tag){case 26:nn(t,e,i),t.flags&da&&t.memoizedState!==null&&tb(i,Xe,t.memoizedState,t.memoizedProps);break;case 5:nn(t,e,i);break;case 3:case 4:var s=Xe;Xe=Xs(t.stateNode.containerInfo),nn(t,e,i),Xe=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=da,da=16777216,nn(t,e,i),da=s):nn(t,e,i));break;default:nn(t,e,i)}}function Mf(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ca(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];Wt=s,Bf(s,t)}Mf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zf(t),t=t.sibling}function zf(t){switch(t.tag){case 0:case 11:case 15:ca(t),t.flags&2048&&Vr(9,t,t.return);break;case 3:ca(t);break;case 12:ca(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Us(t)):ca(t);break;default:ca(t)}}function Us(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var s=e[i];Wt=s,Bf(s,t)}Mf(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Vr(8,e,e.return),Us(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Us(e));break;default:Us(e)}t=t.sibling}}function Bf(t,e){for(;Wt!==null;){var i=Wt;switch(i.tag){case 0:case 11:case 15:Vr(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Yn(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Wt=s;else t:for(i=t;Wt!==null;){s=Wt;var d=s.sibling,u=s.return;if(Rf(s),s===i){Wt=null;break t}if(d!==null){d.return=u,Wt=d;break t}Wt=u}}}var py={getCacheForType:function(t){var e=ie($t),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return ie($t).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,bt=0,Ot=null,ut=null,ft=0,wt=0,Re=null,Kr=!1,an=!1,Ad=!1,Er=0,zt=0,Yr=0,Si=0,wd=0,Oe=0,sn=0,ua=null,me=null,_d=!1,Ms=0,Pf=0,zs=1/0,Bs=null,Jr=null,Zt=0,Xr=null,ln=null,Tr=0,Id=0,Sd=null,Hf=null,ha=0,Ed=null;function ke(){return(bt&2)!==0&&ft!==0?ft&-ft:U.T!==null?kd():ru()}function Gf(){if(Oe===0)if((ft&536870912)===0||pt){var t=Ya;Ya<<=1,(Ya&3932160)===0&&(Ya=262144),Oe=t}else Oe=536870912;return t=Ce.current,t!==null&&(t.flags|=32),Oe}function ye(t,e,i){(t===Ot&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(on(t,0),Qr(t,ft,Oe,!1)),jn(t,i),((bt&2)===0||t!==Ot)&&(t===Ot&&((bt&2)===0&&(Si|=i),zt===4&&Qr(t,ft,Oe,!1)),ar(t))}function qf(t,e,i){if((bt&6)!==0)throw Error(l(327));var s=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Nn(t,e),d=s?by(t,e):Cd(t,e,!0),u=s;do{if(d===0){an&&!s&&Qr(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!my(i)){d=Cd(t,e,!1),u=!1;continue}if(d===2){if(u=e,t.errorRecoveryDisabledLanes&u)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){e=v;t:{var y=t;d=ua;var I=y.current.memoizedState.isDehydrated;if(I&&(on(y,v).flags|=256),v=Cd(y,v,!1),v!==2){if(Ad&&!I){y.errorRecoveryDisabledLanes|=u,Si|=u,d=4;break t}u=me,me=d,u!==null&&(me===null?me=u:me.push.apply(me,u))}d=v}if(u=!1,d!==2)continue}}if(d===1){on(t,0),Qr(t,e,0,!0);break}t:{switch(s=t,u=d,u){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Qr(s,e,Oe,!Kr);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(d=Ms+300-_e(),10<d)){if(Qr(s,e,Oe,!Kr),Xa(s,0,!0)!==0)break t;Tr=e,s.timeoutHandle=Ag($f.bind(null,s,i,me,Bs,_d,e,Oe,Si,sn,Kr,u,"Throttled",-0,0),d);break t}$f(s,i,me,Bs,_d,e,Oe,Si,sn,Kr,u,null,-0,0)}}break}while(!0);ar(t)}function $f(t,e,i,s,d,u,v,y,I,j,z,H,D,L){if(t.timeoutHandle=-1,H=e.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ur},Uf(e,u,H);var Y=(u&62914560)===u?Ms-_e():(u&4194048)===u?Pf-_e():0;if(Y=eb(H,Y),Y!==null){Tr=u,t.cancelPendingCommit=Y(Ff.bind(null,t,e,u,i,s,d,v,y,I,z,H,null,D,L)),Qr(t,u,v,!j);return}}Ff(t,e,u,i,s,d,v,y,I)}function my(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var d=i[s],u=d.getSnapshot;d=d.value;try{if(!Ee(u(),d))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e,i,s){e&=~wd,e&=~Si,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;for(var d=e;0<d;){var u=31-Se(d),v=1<<u;s[u]=-1,d&=~v}i!==0&&Wc(t,i,e)}function Ps(){return(bt&6)===0?(fa(0),!1):!0}function Td(){if(ut!==null){if(wt===0)var t=ut.return;else t=ut,pr=pi=null,Go(t),Zi=null,Xn=0,t=ut;for(;t!==null;)wf(t.alternate,t),t=t.return;ut=null}}function on(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,My(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Tr=0,Td(),Ot=t,ut=i=fr(t.current,null),ft=e,wt=0,Re=null,Kr=!1,an=Nn(t,e),Ad=!1,sn=Oe=wd=Si=Yr=zt=0,me=ua=null,_d=!1,(e&8)!==0&&(e|=e&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=e;0<s;){var d=31-Se(s),u=1<<d;e|=t[d],s&=~u}return Er=e,ls(),i}function Vf(t,e){lt=null,U.H=ia,e===Qi||e===ps?(e=sh(),wt=3):e===Oo?(e=sh(),wt=4):wt=e===nd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,ut===null&&(zt=1,Rs(t,Be(e,t.current)))}function Kf(){var t=Ce.current;return t===null?!0:(ft&4194048)===ft?qe===null:(ft&62914560)===ft||(ft&536870912)!==0?t===qe:!1}function Yf(){var t=U.H;return U.H=ia,t===null?ia:t}function Jf(){var t=U.A;return U.A=py,t}function Hs(){zt=4,Kr||(ft&4194048)!==ft&&Ce.current!==null||(an=!0),(Yr&134217727)===0&&(Si&134217727)===0||Ot===null||Qr(Ot,ft,Oe,!1)}function Cd(t,e,i){var s=bt;bt|=2;var d=Yf(),u=Jf();(Ot!==t||ft!==e)&&(Bs=null,on(t,e)),e=!1;var v=zt;t:do try{if(wt!==0&&ut!==null){var y=ut,I=Re;switch(wt){case 8:Td(),v=6;break t;case 3:case 2:case 9:case 6:Ce.current===null&&(e=!0);var j=wt;if(wt=0,Re=null,dn(t,y,I,j),i&&an){v=0;break t}break;default:j=wt,wt=0,Re=null,dn(t,y,I,j)}}yy(),v=zt;break}catch(z){Vf(t,z)}while(!0);return e&&t.shellSuspendCounter++,pr=pi=null,bt=s,U.H=d,U.A=u,ut===null&&(Ot=null,ft=0,ls()),v}function yy(){for(;ut!==null;)Xf(ut)}function by(t,e){var i=bt;bt|=2;var s=Yf(),d=Jf();Ot!==t||ft!==e?(Bs=null,zs=_e()+500,on(t,e)):an=Nn(t,e);t:do try{if(wt!==0&&ut!==null){e=ut;var u=Re;e:switch(wt){case 1:wt=0,Re=null,dn(t,e,u,1);break;case 2:case 9:if(nh(u)){wt=0,Re=null,Qf(e);break}e=function(){wt!==2&&wt!==9||Ot!==t||(wt=7),ar(t)},u.then(e,e);break t;case 3:wt=7;break t;case 4:wt=5;break t;case 7:nh(u)?(wt=0,Re=null,Qf(e)):(wt=0,Re=null,dn(t,e,u,7));break;case 5:var v=null;switch(ut.tag){case 26:v=ut.memoizedState;case 5:case 27:var y=ut;if(v?Lg(v):y.stateNode.complete){wt=0,Re=null;var I=y.sibling;if(I!==null)ut=I;else{var j=y.return;j!==null?(ut=j,Gs(j)):ut=null}break e}}wt=0,Re=null,dn(t,e,u,5);break;case 6:wt=0,Re=null,dn(t,e,u,6);break;case 8:Td(),zt=6;break t;default:throw Error(l(462))}}Ay();break}catch(z){Vf(t,z)}while(!0);return pr=pi=null,U.H=s,U.A=d,bt=i,ut!==null?0:(Ot=null,ft=0,ls(),zt)}function Ay(){for(;ut!==null&&!qv();)Xf(ut)}function Xf(t){var e=bf(t.alternate,t,Er);t.memoizedProps=t.pendingProps,e===null?Gs(t):ut=e}function Qf(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=ff(i,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=ff(i,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Go(e);default:wf(i,e),e=ut=Yu(e,Er),e=bf(i,e,Er)}t.memoizedProps=t.pendingProps,e===null?Gs(t):ut=e}function dn(t,e,i,s){pr=pi=null,Go(e),Zi=null,Xn=0;var d=e.return;try{if(oy(t,d,e,i,ft)){zt=1,Rs(t,Be(i,t.current)),ut=null;return}}catch(u){if(d!==null)throw ut=d,u;zt=1,Rs(t,Be(i,t.current)),ut=null;return}e.flags&32768?(pt||s===1?t=!0:an||(ft&536870912)!==0?t=!1:(Kr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ce.current,s!==null&&s.tag===13&&(s.flags|=16384))),Zf(e,t)):Gs(e)}function Gs(t){var e=t;do{if((e.flags&32768)!==0){Zf(e,Kr);return}t=e.return;var i=uy(e.alternate,e,Er);if(i!==null){ut=i;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);zt===0&&(zt=5)}function Zf(t,e){do{var i=hy(t.alternate,t);if(i!==null){i.flags&=32767,ut=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=i}while(t!==null);zt=6,ut=null}function Ff(t,e,i,s,d,u,v,y,I){t.cancelPendingCommit=null;do qs();while(Zt!==0);if((bt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(u=e.lanes|e.childLanes,u|=po,Wv(t,i,u,v,y,I),t===Ot&&(ut=Ot=null,ft=0),ln=e,Xr=t,Tr=i,Id=u,Sd=d,Hf=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sy(Va,function(){return ig(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,d=$.p,$.p=2,v=bt,bt|=4;try{fy(t,e,i)}finally{bt=v,$.p=d,U.T=s}}Zt=1,Wf(),tg(),eg()}}function Wf(){if(Zt===1){Zt=0;var t=Xr,e=ln,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=U.T,U.T=null;var s=$.p;$.p=2;var d=bt;bt|=4;try{jf(e,t);var u=Bd,v=zu(t.containerInfo),y=u.focusedElem,I=u.selectionRange;if(v!==y&&y&&y.ownerDocument&&Mu(y.ownerDocument.documentElement,y)){if(I!==null&&co(y)){var j=I.start,z=I.end;if(z===void 0&&(z=j),"selectionStart"in y)y.selectionStart=j,y.selectionEnd=Math.min(z,y.value.length);else{var H=y.ownerDocument||document,D=H&&H.defaultView||window;if(D.getSelection){var L=D.getSelection(),Y=y.textContent.length,et=Math.min(I.start,Y),xt=I.end===void 0?et:Math.min(I.end,Y);!L.extend&&et>xt&&(v=xt,xt=et,et=v);var C=Uu(y,et),E=Uu(y,xt);if(C&&E&&(L.rangeCount!==1||L.anchorNode!==C.node||L.anchorOffset!==C.offset||L.focusNode!==E.node||L.focusOffset!==E.offset)){var N=H.createRange();N.setStart(C.node,C.offset),L.removeAllRanges(),et>xt?(L.addRange(N),L.extend(E.node,E.offset)):(N.setEnd(E.node,E.offset),L.addRange(N))}}}}for(H=[],L=y;L=L.parentNode;)L.nodeType===1&&H.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<H.length;y++){var B=H[y];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}el=!!zd,Bd=zd=null}finally{bt=d,$.p=s,U.T=i}}t.current=e,Zt=2}}function tg(){if(Zt===2){Zt=0;var t=Xr,e=ln,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=U.T,U.T=null;var s=$.p;$.p=2;var d=bt;bt|=4;try{xf(t,e.alternate,e)}finally{bt=d,$.p=s,U.T=i}}Zt=3}}function eg(){if(Zt===4||Zt===3){Zt=0,$v();var t=Xr,e=ln,i=Tr,s=Hf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,ln=Xr=null,rg(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Jr=null),$l(i),e=e.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(kn,e,void 0,(e.current.flags&128)===128)}catch{}if(s!==null){e=U.T,d=$.p,$.p=2,U.T=null;try{for(var u=t.onRecoverableError,v=0;v<s.length;v++){var y=s[v];u(y.value,{componentStack:y.stack})}}finally{U.T=e,$.p=d}}(Tr&3)!==0&&qs(),ar(t),d=t.pendingLanes,(i&261930)!==0&&(d&42)!==0?t===Ed?ha++:(ha=0,Ed=t):ha=0,fa(0)}}function rg(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Yn(e)))}function qs(){return Wf(),tg(),eg(),ig()}function ig(){if(Zt!==5)return!1;var t=Xr,e=Id;Id=0;var i=$l(Tr),s=U.T,d=$.p;try{$.p=32>i?32:i,U.T=null,i=Sd,Sd=null;var u=Xr,v=Tr;if(Zt=0,ln=Xr=null,Tr=0,(bt&6)!==0)throw Error(l(331));var y=bt;if(bt|=4,zf(u.current),Lf(u,u.current,v,i),bt=y,fa(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(kn,u)}catch{}return!0}finally{$.p=d,U.T=s,rg(t,e)}}function ng(t,e,i){e=Be(i,e),e=id(t.stateNode,e,2),t=Gr(t,e,2),t!==null&&(jn(t,2),ar(t))}function _t(t,e,i){if(t.tag===3)ng(t,t,i);else for(;e!==null;){if(e.tag===3){ng(e,t,i);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Jr===null||!Jr.has(s))){t=Be(i,t),i=af(2),s=Gr(e,i,2),s!==null&&(sf(i,s,e,t),jn(s,2),ar(s));break}}e=e.return}}function xd(t,e,i){var s=t.pingCache;if(s===null){s=t.pingCache=new vy;var d=new Set;s.set(e,d)}else d=s.get(e),d===void 0&&(d=new Set,s.set(e,d));d.has(i)||(Ad=!0,d.add(i),t=wy.bind(null,t,e,i),e.then(t,t))}function wy(t,e,i){var s=t.pingCache;s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ot===t&&(ft&i)===i&&(zt===4||zt===3&&(ft&62914560)===ft&&300>_e()-Ms?(bt&2)===0&&on(t,0):wd|=i,sn===ft&&(sn=0)),ar(t)}function ag(t,e){e===0&&(e=Fc()),t=hi(t,e),t!==null&&(jn(t,e),ar(t))}function _y(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),ag(t,i)}function Iy(t,e){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(e),ag(t,i)}function Sy(t,e){return Pl(t,e)}var $s=null,cn=null,Rd=!1,Vs=!1,Od=!1,Zr=0;function ar(t){t!==cn&&t.next===null&&(cn===null?$s=cn=t:cn=cn.next=t),Vs=!0,Rd||(Rd=!0,Ty())}function fa(t,e){if(!Od&&Vs){Od=!0;do for(var i=!1,s=$s;s!==null;){if(t!==0){var d=s.pendingLanes;if(d===0)var u=0;else{var v=s.suspendedLanes,y=s.pingedLanes;u=(1<<31-Se(42|t)+1)-1,u&=d&~(v&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,dg(s,u))}else u=ft,u=Xa(s,s===Ot?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Nn(s,u)||(i=!0,dg(s,u));s=s.next}while(i);Od=!1}}function Ey(){sg()}function sg(){Vs=Rd=!1;var t=0;Zr!==0&&Uy()&&(t=Zr);for(var e=_e(),i=null,s=$s;s!==null;){var d=s.next,u=lg(s,e);u===0?(s.next=null,i===null?$s=d:i.next=d,d===null&&(cn=i)):(i=s,(t!==0||(u&3)!==0)&&(Vs=!0)),s=d}Zt!==0&&Zt!==5||fa(t),Zr!==0&&(Zr=0)}function lg(t,e){for(var i=t.suspendedLanes,s=t.pingedLanes,d=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var v=31-Se(u),y=1<<v,I=d[v];I===-1?((y&i)===0||(y&s)!==0)&&(d[v]=Fv(y,e)):I<=e&&(t.expiredLanes|=y),u&=~y}if(e=Ot,i=ft,i=Xa(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Hl(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Nn(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(s!==null&&Hl(s),$l(i)){case 2:case 8:i=Qc;break;case 32:i=Va;break;case 268435456:i=Zc;break;default:i=Va}return s=og.bind(null,t),i=Pl(i,s),t.callbackPriority=e,t.callbackNode=i,e}return s!==null&&s!==null&&Hl(s),t.callbackPriority=2,t.callbackNode=null,2}function og(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(qs()&&t.callbackNode!==i)return null;var s=ft;return s=Xa(t,t===Ot?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(qf(t,s,e),lg(t,_e()),t.callbackNode!=null&&t.callbackNode===i?og.bind(null,t):null)}function dg(t,e){if(qs())return null;qf(t,e,!0)}function Ty(){zy(function(){(bt&6)!==0?Pl(Xc,Ey):sg()})}function kd(){if(Zr===0){var t=Ji;t===0&&(t=Ka,Ka<<=1,(Ka&261888)===0&&(Ka=256)),Zr=t}return Zr}function cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wa(""+t)}function ug(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Cy(t,e,i,s,d){if(e==="submit"&&i&&i.stateNode===d){var u=cg((d[he]||null).action),v=s.submitter;v&&(e=(e=v[he]||null)?cg(e.formAction):v.getAttribute("formAction"),e!==null&&(u=e,v=null));var y=new is("action","action",null,s,d);t.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Zr!==0){var I=v?ug(d,v):new FormData(d);Zo(i,{pending:!0,data:I,method:d.method,action:u},null,I)}}else typeof u=="function"&&(y.preventDefault(),I=v?ug(d,v):new FormData(d),Zo(i,{pending:!0,data:I,method:d.method,action:u},u,I))},currentTarget:d}]})}}for(var Nd=0;Nd<go.length;Nd++){var jd=go[Nd],xy=jd.toLowerCase(),Ry=jd[0].toUpperCase()+jd.slice(1);Je(xy,"on"+Ry)}Je(Hu,"onAnimationEnd"),Je(Gu,"onAnimationIteration"),Je(qu,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(Vm,"onTransitionRun"),Je(Km,"onTransitionStart"),Je(Ym,"onTransitionCancel"),Je($u,"onTransitionEnd"),Di("onMouseEnter",["mouseout","mouseover"]),Di("onMouseLeave",["mouseout","mouseover"]),Di("onPointerEnter",["pointerout","pointerover"]),Di("onPointerLeave",["pointerout","pointerover"]),oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ga));function hg(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],d=s.event;s=s.listeners;t:{var u=void 0;if(e)for(var v=s.length-1;0<=v;v--){var y=s[v],I=y.instance,j=y.currentTarget;if(y=y.listener,I!==u&&d.isPropagationStopped())break t;u=y,d.currentTarget=j;try{u(d)}catch(z){ss(z)}d.currentTarget=null,u=I}else for(v=0;v<s.length;v++){if(y=s[v],I=y.instance,j=y.currentTarget,y=y.listener,I!==u&&d.isPropagationStopped())break t;u=y,d.currentTarget=j;try{u(d)}catch(z){ss(z)}d.currentTarget=null,u=I}}}}function ht(t,e){var i=e[Vl];i===void 0&&(i=e[Vl]=new Set);var s=t+"__bubble";i.has(s)||(fg(e,t,2,!1),i.add(s))}function Dd(t,e,i){var s=0;e&&(s|=4),fg(i,t,s,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[Ks]){t[Ks]=!0,au.forEach(function(i){i!=="selectionchange"&&(Oy.has(i)||Dd(i,!1,t),Dd(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,Dd("selectionchange",!1,e))}}function fg(t,e,i,s){switch(Gg(e)){case 2:var d=nb;break;case 8:d=ab;break;default:d=Qd}i=d.bind(null,e,i,t),d=void 0,!to||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(d=!0),s?d!==void 0?t.addEventListener(e,i,{capture:!0,passive:d}):t.addEventListener(e,i,!0):d!==void 0?t.addEventListener(e,i,{passive:d}):t.addEventListener(e,i,!1)}function Ud(t,e,i,s,d){var u=s;if((e&1)===0&&(e&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var y=s.stateNode.containerInfo;if(y===d)break;if(v===4)for(v=s.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;y!==null;){if(v=ki(y),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){s=u=v;continue t}y=y.parentNode}}s=s.return}mu(function(){var j=u,z=Fl(i),H=[];t:{var D=Vu.get(t);if(D!==void 0){var L=is,Y=t;switch(t){case"keypress":if(es(i)===0)break t;case"keydown":case"keyup":L=Im;break;case"focusin":Y="focus",L=no;break;case"focusout":Y="blur",L=no;break;case"beforeblur":case"afterblur":L=no;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=um;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Tm;break;case Hu:case Gu:case qu:L=gm;break;case $u:L=xm;break;case"scroll":case"scrollend":L=dm;break;case"wheel":L=Om;break;case"copy":case"cut":case"paste":L=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=_u;break;case"toggle":case"beforetoggle":L=Nm}var et=(e&4)!==0,xt=!et&&(t==="scroll"||t==="scrollend"),C=et?D!==null?D+"Capture":null:D;et=[];for(var E=j,N;E!==null;){var B=E;if(N=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||N===null||C===null||(B=Un(E,C),B!=null&&et.push(pa(E,B,N))),xt)break;E=E.return}0<et.length&&(D=new L(D,Y,null,i,z),H.push({event:D,listeners:et}))}}if((e&7)===0){t:{if(D=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",D&&i!==Zl&&(Y=i.relatedTarget||i.fromElement)&&(ki(Y)||Y[Oi]))break t;if((L||D)&&(D=z.window===z?z:(D=z.ownerDocument)?D.defaultView||D.parentWindow:window,L?(Y=i.relatedTarget||i.toElement,L=j,Y=Y?ki(Y):null,Y!==null&&(xt=c(Y),et=Y.tag,Y!==xt||et!==5&&et!==27&&et!==6)&&(Y=null)):(L=null,Y=j),L!==Y)){if(et=Au,B="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(et=_u,B="onPointerLeave",C="onPointerEnter",E="pointer"),xt=L==null?D:Ln(L),N=Y==null?D:Ln(Y),D=new et(B,E+"leave",L,i,z),D.target=xt,D.relatedTarget=N,B=null,ki(z)===j&&(et=new et(C,E+"enter",Y,i,z),et.target=N,et.relatedTarget=xt,B=et),xt=B,L&&Y)e:{for(et=ky,C=L,E=Y,N=0,B=C;B;B=et(B))N++;B=0;for(var tt=E;tt;tt=et(tt))B++;for(;0<N-B;)C=et(C),N--;for(;0<B-N;)E=et(E),B--;for(;N--;){if(C===E||E!==null&&C===E.alternate){et=C;break e}C=et(C),E=et(E)}et=null}else et=null;L!==null&&gg(H,D,L,et,!1),Y!==null&&xt!==null&&gg(H,xt,Y,et,!0)}}t:{if(D=j?Ln(j):window,L=D.nodeName&&D.nodeName.toLowerCase(),L==="select"||L==="input"&&D.type==="file")var vt=Ou;else if(xu(D))if(ku)vt=Gm;else{vt=Pm;var Z=Bm}else L=D.nodeName,!L||L.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?j&&Ql(j.elementType)&&(vt=Ou):vt=Hm;if(vt&&(vt=vt(t,j))){Ru(H,vt,i,z);break t}Z&&Z(t,D,j),t==="focusout"&&j&&D.type==="number"&&j.memoizedProps.value!=null&&Xl(D,"number",D.value)}switch(Z=j?Ln(j):window,t){case"focusin":(xu(Z)||Z.contentEditable==="true")&&(Pi=Z,uo=j,$n=null);break;case"focusout":$n=uo=Pi=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Bu(H,i,z);break;case"selectionchange":if($m)break;case"keydown":case"keyup":Bu(H,i,z)}var ot;if(so)t:{switch(t){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else Bi?Tu(t,i)&&(gt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(gt="onCompositionStart");gt&&(Iu&&i.locale!=="ko"&&(Bi||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Bi&&(ot=yu()):(Lr=z,eo="value"in Lr?Lr.value:Lr.textContent,Bi=!0)),Z=Ys(j,gt),0<Z.length&&(gt=new wu(gt,t,null,i,z),H.push({event:gt,listeners:Z}),ot?gt.data=ot:(ot=Cu(i),ot!==null&&(gt.data=ot)))),(ot=Dm?Lm(t,i):Um(t,i))&&(gt=Ys(j,"onBeforeInput"),0<gt.length&&(Z=new wu("onBeforeInput","beforeinput",null,i,z),H.push({event:Z,listeners:gt}),Z.data=ot)),Cy(H,t,j,i,z)}hg(H,e)})}function pa(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Ys(t,e){for(var i=e+"Capture",s=[];t!==null;){var d=t,u=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||u===null||(d=Un(t,i),d!=null&&s.unshift(pa(t,d,u)),d=Un(t,e),d!=null&&s.push(pa(t,d,u))),t.tag===3)return s;t=t.return}return[]}function ky(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,e,i,s,d){for(var u=e._reactName,v=[];i!==null&&i!==s;){var y=i,I=y.alternate,j=y.stateNode;if(y=y.tag,I!==null&&I===s)break;y!==5&&y!==26&&y!==27||j===null||(I=j,d?(j=Un(i,u),j!=null&&v.unshift(pa(i,j,I))):d||(j=Un(i,u),j!=null&&v.push(pa(i,j,I)))),i=i.return}v.length!==0&&t.push({event:e,listeners:v})}var Ny=/\r\n?/g,jy=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(jy,"")}function vg(t,e){return e=pg(e),pg(t)===e}function Ct(t,e,i,s,d,u){switch(i){case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||Ui(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&Ui(t,""+s);break;case"className":Za(t,"class",s);break;case"tabIndex":Za(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Za(t,i,s);break;case"style":pu(t,s,u);break;case"data":if(e!=="object"){Za(t,"data",s);break}case"src":case"href":if(s===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Wa(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Ct(t,e,"name",d.name,d,null),Ct(t,e,"formEncType",d.formEncType,d,null),Ct(t,e,"formMethod",d.formMethod,d,null),Ct(t,e,"formTarget",d.formTarget,d,null)):(Ct(t,e,"encType",d.encType,d,null),Ct(t,e,"method",d.method,d,null),Ct(t,e,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Wa(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=ur);break;case"onScroll":s!=null&&ht("scroll",t);break;case"onScrollEnd":s!=null&&ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(d.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Wa(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":ht("beforetoggle",t),ht("toggle",t),Qa(t,"popover",s);break;case"xlinkActuate":cr(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":cr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":cr(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":cr(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":cr(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":cr(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":cr(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":cr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":cr(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Qa(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=lm.get(i)||i,Qa(t,i,s))}}function Md(t,e,i,s,d,u){switch(i){case"style":pu(t,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(d.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"children":typeof s=="string"?Ui(t,s):(typeof s=="number"||typeof s=="bigint")&&Ui(t,""+s);break;case"onScroll":s!=null&&ht("scroll",t);break;case"onScrollEnd":s!=null&&ht("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ur);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!su.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),e=i.slice(2,d?i.length-7:void 0),u=t[he]||null,u=u!=null?u[i]:null,typeof u=="function"&&t.removeEventListener(e,u,d),typeof s=="function")){typeof u!="function"&&u!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,s,d);break t}i in t?t[i]=s:s===!0?t.setAttribute(i,""):Qa(t,i,s)}}}function ae(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ht("error",t),ht("load",t);var s=!1,d=!1,u;for(u in i)if(i.hasOwnProperty(u)){var v=i[u];if(v!=null)switch(u){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,u,v,i,null)}}d&&Ct(t,e,"srcSet",i.srcSet,i,null),s&&Ct(t,e,"src",i.src,i,null);return;case"input":ht("invalid",t);var y=u=v=d=null,I=null,j=null;for(s in i)if(i.hasOwnProperty(s)){var z=i[s];if(z!=null)switch(s){case"name":d=z;break;case"type":v=z;break;case"checked":I=z;break;case"defaultChecked":j=z;break;case"value":u=z;break;case"defaultValue":y=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(l(137,e));break;default:Ct(t,e,s,z,i,null)}}uu(t,u,y,I,j,v,d,!1);return;case"select":ht("invalid",t),s=v=u=null;for(d in i)if(i.hasOwnProperty(d)&&(y=i[d],y!=null))switch(d){case"value":u=y;break;case"defaultValue":v=y;break;case"multiple":s=y;default:Ct(t,e,d,y,i,null)}e=u,i=v,t.multiple=!!s,e!=null?Li(t,!!s,e,!1):i!=null&&Li(t,!!s,i,!0);return;case"textarea":ht("invalid",t),u=d=s=null;for(v in i)if(i.hasOwnProperty(v)&&(y=i[v],y!=null))switch(v){case"value":s=y;break;case"defaultValue":d=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Ct(t,e,v,y,i,null)}fu(t,s,d,u);return;case"option":for(I in i)i.hasOwnProperty(I)&&(s=i[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ct(t,e,I,s,i,null));return;case"dialog":ht("beforetoggle",t),ht("toggle",t),ht("cancel",t),ht("close",t);break;case"iframe":case"object":ht("load",t);break;case"video":case"audio":for(s=0;s<ga.length;s++)ht(ga[s],t);break;case"image":ht("error",t),ht("load",t);break;case"details":ht("toggle",t);break;case"embed":case"source":case"link":ht("error",t),ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in i)if(i.hasOwnProperty(j)&&(s=i[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,j,s,i,null)}return;default:if(Ql(e)){for(z in i)i.hasOwnProperty(z)&&(s=i[z],s!==void 0&&Md(t,e,z,s,i,void 0));return}}for(y in i)i.hasOwnProperty(y)&&(s=i[y],s!=null&&Ct(t,e,y,s,i,null))}function Dy(t,e,i,s){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,u=null,v=null,y=null,I=null,j=null,z=null;for(L in i){var H=i[L];if(i.hasOwnProperty(L)&&H!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":I=H;default:s.hasOwnProperty(L)||Ct(t,e,L,null,s,H)}}for(var D in s){var L=s[D];if(H=i[D],s.hasOwnProperty(D)&&(L!=null||H!=null))switch(D){case"type":u=L;break;case"name":d=L;break;case"checked":j=L;break;case"defaultChecked":z=L;break;case"value":v=L;break;case"defaultValue":y=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,e));break;default:L!==H&&Ct(t,e,D,L,s,H)}}Jl(t,v,y,I,j,z,u,d);return;case"select":L=v=y=D=null;for(u in i)if(I=i[u],i.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":L=I;default:s.hasOwnProperty(u)||Ct(t,e,u,null,s,I)}for(d in s)if(u=s[d],I=i[d],s.hasOwnProperty(d)&&(u!=null||I!=null))switch(d){case"value":D=u;break;case"defaultValue":y=u;break;case"multiple":v=u;default:u!==I&&Ct(t,e,d,u,s,I)}e=y,i=v,s=L,D!=null?Li(t,!!i,D,!1):!!s!=!!i&&(e!=null?Li(t,!!i,e,!0):Li(t,!!i,i?[]:"",!1));return;case"textarea":L=D=null;for(y in i)if(d=i[y],i.hasOwnProperty(y)&&d!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ct(t,e,y,null,s,d)}for(v in s)if(d=s[v],u=i[v],s.hasOwnProperty(v)&&(d!=null||u!=null))switch(v){case"value":D=d;break;case"defaultValue":L=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==u&&Ct(t,e,v,d,s,u)}hu(t,D,L);return;case"option":for(var Y in i)D=i[Y],i.hasOwnProperty(Y)&&D!=null&&!s.hasOwnProperty(Y)&&(Y==="selected"?t.selected=!1:Ct(t,e,Y,null,s,D));for(I in s)D=s[I],L=i[I],s.hasOwnProperty(I)&&D!==L&&(D!=null||L!=null)&&(I==="selected"?t.selected=D&&typeof D!="function"&&typeof D!="symbol":Ct(t,e,I,D,s,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in i)D=i[et],i.hasOwnProperty(et)&&D!=null&&!s.hasOwnProperty(et)&&Ct(t,e,et,null,s,D);for(j in s)if(D=s[j],L=i[j],s.hasOwnProperty(j)&&D!==L&&(D!=null||L!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,e));break;default:Ct(t,e,j,D,s,L)}return;default:if(Ql(e)){for(var xt in i)D=i[xt],i.hasOwnProperty(xt)&&D!==void 0&&!s.hasOwnProperty(xt)&&Md(t,e,xt,void 0,s,D);for(z in s)D=s[z],L=i[z],!s.hasOwnProperty(z)||D===L||D===void 0&&L===void 0||Md(t,e,z,D,s,L);return}}for(var C in i)D=i[C],i.hasOwnProperty(C)&&D!=null&&!s.hasOwnProperty(C)&&Ct(t,e,C,null,s,D);for(H in s)D=s[H],L=i[H],!s.hasOwnProperty(H)||D===L||D==null&&L==null||Ct(t,e,H,D,s,L)}function mg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var d=i[s],u=d.transferSize,v=d.initiatorType,y=d.duration;if(u&&y&&mg(v)){for(v=0,y=d.responseEnd,s+=1;s<i.length;s++){var I=i[s],j=I.startTime;if(j>y)break;var z=I.transferSize,H=I.initiatorType;z&&mg(H)&&(I=I.responseEnd,v+=z*(I<y?1:(y-j)/(I-j)))}if(--s,e+=8*(u+v)/(d.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zd=null,Bd=null;function Js(t){return t.nodeType===9?t:t.ownerDocument}function yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=null;function Uy(){var t=window.event;return t&&t.type==="popstate"?t===Hd?!1:(Hd=t,!0):(Hd=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(By)}:Ag;function By(t){setTimeout(function(){throw t})}function Fr(t){return t==="head"}function _g(t,e){var i=e,s=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(d),gn(e);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")va(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,va(i);for(var u=i.firstChild;u;){var v=u.nextSibling,y=u.nodeName;u[Dn]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=v}}else i==="body"&&va(t.ownerDocument.body);i=d}while(i);gn(e)}function Ig(t,e){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function Gd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Gd(i),Kl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Py(t,e,i,s){for(;t.nodeType===1;){var d=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=$e(t.nextSibling),t===null)break}return null}function Hy(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=$e(t.nextSibling),t===null))return null;return t}function Sg(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$e(t.nextSibling),t===null))return null;return t}function qd(t){return t.data==="$?"||t.data==="$~"}function $d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gy(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var s=function(){e(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function $e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Vd=null;function Eg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return $e(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Cg(t,e,i){switch(e=Js(i),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function va(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Kl(t)}var Ve=new Map,xg=new Set;function Xs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Cr=$.d;$.d={f:qy,r:$y,D:Vy,C:Ky,L:Yy,m:Jy,X:Qy,S:Xy,M:Zy};function qy(){var t=Cr.f(),e=Ps();return t||e}function $y(t){var e=Ni(t);e!==null&&e.tag===5&&e.type==="form"?$h(e):Cr.r(t)}var un=typeof document>"u"?null:document;function Rg(t,e,i){var s=un;if(s&&typeof e=="string"&&e){var d=Me(e);d='link[rel="'+t+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),xg.has(d)||(xg.add(d),t={rel:t,crossOrigin:i,href:e},s.querySelector(d)===null&&(e=s.createElement("link"),ae(e,"link",t),Ft(e),s.head.appendChild(e)))}}function Vy(t){Cr.D(t),Rg("dns-prefetch",t,null)}function Ky(t,e){Cr.C(t,e),Rg("preconnect",t,e)}function Yy(t,e,i){Cr.L(t,e,i);var s=un;if(s&&t&&e){var d='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+Me(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+Me(i.imageSizes)+'"]')):d+='[href="'+Me(t)+'"]';var u=d;switch(e){case"style":u=hn(t);break;case"script":u=fn(t)}Ve.has(u)||(t=m({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Ve.set(u,t),s.querySelector(d)!==null||e==="style"&&s.querySelector(ma(u))||e==="script"&&s.querySelector(ya(u))||(e=s.createElement("link"),ae(e,"link",t),Ft(e),s.head.appendChild(e)))}}function Jy(t,e){Cr.m(t,e);var i=un;if(i&&t){var s=e&&typeof e.as=="string"?e.as:"script",d='link[rel="modulepreload"][as="'+Me(s)+'"][href="'+Me(t)+'"]',u=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=fn(t)}if(!Ve.has(u)&&(t=m({rel:"modulepreload",href:t},e),Ve.set(u,t),i.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ya(u)))return}s=i.createElement("link"),ae(s,"link",t),Ft(s),i.head.appendChild(s)}}}function Xy(t,e,i){Cr.S(t,e,i);var s=un;if(s&&t){var d=ji(s).hoistableStyles,u=hn(t);e=e||"default";var v=d.get(u);if(!v){var y={loading:0,preload:null};if(v=s.querySelector(ma(u)))y.loading=5;else{t=m({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Ve.get(u))&&Kd(t,i);var I=v=s.createElement("link");Ft(I),ae(I,"link",t),I._p=new Promise(function(j,z){I.onload=j,I.onerror=z}),I.addEventListener("load",function(){y.loading|=1}),I.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Qs(v,e,s)}v={type:"stylesheet",instance:v,count:1,state:y},d.set(u,v)}}}function Qy(t,e){Cr.X(t,e);var i=un;if(i&&t){var s=ji(i).hoistableScripts,d=fn(t),u=s.get(d);u||(u=i.querySelector(ya(d)),u||(t=m({src:t,async:!0},e),(e=Ve.get(d))&&Yd(t,e),u=i.createElement("script"),Ft(u),ae(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(d,u))}}function Zy(t,e){Cr.M(t,e);var i=un;if(i&&t){var s=ji(i).hoistableScripts,d=fn(t),u=s.get(d);u||(u=i.querySelector(ya(d)),u||(t=m({src:t,async:!0,type:"module"},e),(e=Ve.get(d))&&Yd(t,e),u=i.createElement("script"),Ft(u),ae(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(d,u))}}function Og(t,e,i,s){var d=(d=ct.current)?Xs(d):null;if(!d)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=hn(i.href),i=ji(d).hoistableStyles,s=i.get(e),s||(s={type:"style",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=hn(i.href);var u=ji(d).hoistableStyles,v=u.get(t);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,v),(u=d.querySelector(ma(t)))&&!u._p&&(v.instance=u,v.state.loading=5),Ve.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ve.set(t,i),u||Fy(d,t,i,v.state))),e&&s===null)throw Error(l(528,""));return v}if(e&&s!==null)throw Error(l(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fn(i),i=ji(d).hoistableScripts,s=i.get(e),s||(s={type:"script",instance:null,count:0,state:null},i.set(e,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function hn(t){return'href="'+Me(t)+'"'}function ma(t){return'link[rel="stylesheet"]['+t+"]"}function kg(t){return m({},t,{"data-precedence":t.precedence,precedence:null})}function Fy(t,e,i,s){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){return s.loading|=1}),e.addEventListener("error",function(){return s.loading|=2}),ae(e,"link",i),Ft(e),t.head.appendChild(e))}function fn(t){return'[src="'+Me(t)+'"]'}function ya(t){return"script[async]"+t}function Ng(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var s=t.querySelector('style[data-href~="'+Me(i.href)+'"]');if(s)return e.instance=s,Ft(s),s;var d=m({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ft(s),ae(s,"style",d),Qs(s,i.precedence,t),e.instance=s;case"stylesheet":d=hn(i.href);var u=t.querySelector(ma(d));if(u)return e.state.loading|=4,e.instance=u,Ft(u),u;s=kg(i),(d=Ve.get(d))&&Kd(s,d),u=(t.ownerDocument||t).createElement("link"),Ft(u);var v=u;return v._p=new Promise(function(y,I){v.onload=y,v.onerror=I}),ae(u,"link",s),e.state.loading|=4,Qs(u,i.precedence,t),e.instance=u;case"script":return u=fn(i.src),(d=t.querySelector(ya(u)))?(e.instance=d,Ft(d),d):(s=i,(d=Ve.get(u))&&(s=m({},i),Yd(s,d)),t=t.ownerDocument||t,d=t.createElement("script"),Ft(d),ae(d,"link",s),t.head.appendChild(d),e.instance=d);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,Qs(s,i.precedence,t));return e.instance}function Qs(t,e,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,u=d,v=0;v<s.length;v++){var y=s[v];if(y.dataset.precedence===e)u=y;else if(u!==d)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Kd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Yd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zs=null;function jg(t,e,i){if(Zs===null){var s=new Map,d=Zs=new Map;d.set(i,s)}else d=Zs,s=d.get(i),s||(s=new Map,d.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),d=0;d<i.length;d++){var u=i[d];if(!(u[Dn]||u[ee]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(e)||"";v=t+v;var y=s.get(v);y?y.push(u):s.set(v,[u])}}return s}function Dg(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Wy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Lg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tb(t,e,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=hn(s.href),u=e.querySelector(ma(d));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Fs.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,Ft(u);return}u=e.ownerDocument||e,s=kg(s),(d=Ve.get(d))&&Kd(s,d),u=u.createElement("link"),Ft(u);var v=u;v._p=new Promise(function(y,I){v.onload=y,v.onerror=I}),ae(u,"link",s),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Fs.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Jd=0;function eb(t,e){return t.stylesheets&&t.count===0&&tl(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&tl(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Jd===0&&(Jd=62500*Ly());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tl(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Jd?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function Fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ws=null;function tl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ws=new Map,e.forEach(rb,t),Ws=null,Fs.call(t))}function rb(t,e){if(!(e.state.loading&4)){var i=Ws.get(t);if(i)var s=i.get(null);else{i=new Map,Ws.set(t,i);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<d.length;u++){var v=d[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),s=v)}s&&i.set(null,s)}d=e.instance,v=d.getAttribute("data-precedence"),u=i.get(v)||s,u===s&&i.set(null,d),i.set(v,d),this.count++,s=Fs.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),u?u.parentNode.insertBefore(d,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),e.state.loading|=4}}var ba={$$typeof:R,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function ib(t,e,i,s,d,u,v,y,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.hiddenUpdates=Gl(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ug(t,e,i,s,d,u,v,y,I,j,z,H){return t=new ib(t,e,i,v,I,j,z,H,y),e=1,u===!0&&(e|=24),u=Te(3,null,null,e),t.current=u,u.stateNode=t,e=Co(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:e},ko(u),t}function Mg(t){return t?(t=qi,t):qi}function zg(t,e,i,s,d,u){d=Mg(d),s.context===null?s.context=d:s.pendingContext=d,s=Hr(e),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Gr(t,s,e),i!==null&&(ye(i,t,e),Zn(i,t,e))}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Xd(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function Pg(t){if(t.tag===13||t.tag===31){var e=hi(t,67108864);e!==null&&ye(e,t,67108864),Xd(t,67108864)}}function Hg(t){if(t.tag===13||t.tag===31){var e=ke();e=ql(e);var i=hi(t,e);i!==null&&ye(i,t,e),Xd(t,e)}}var el=!0;function nb(t,e,i,s){var d=U.T;U.T=null;var u=$.p;try{$.p=2,Qd(t,e,i,s)}finally{$.p=u,U.T=d}}function ab(t,e,i,s){var d=U.T;U.T=null;var u=$.p;try{$.p=8,Qd(t,e,i,s)}finally{$.p=u,U.T=d}}function Qd(t,e,i,s){if(el){var d=Zd(s);if(d===null)Ud(t,e,s,rl,i),qg(t,s);else if(lb(d,t,e,i,s))s.stopPropagation();else if(qg(t,s),e&4&&-1<sb.indexOf(t)){for(;d!==null;){var u=Ni(d);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=li(u.pendingLanes);if(v!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;v;){var I=1<<31-Se(v);y.entanglements[1]|=I,v&=~I}ar(u),(bt&6)===0&&(zs=_e()+500,fa(0))}}break;case 31:case 13:y=hi(u,2),y!==null&&ye(y,u,2),Ps(),Xd(u,2)}if(u=Zd(s),u===null&&Ud(t,e,s,rl,i),u===d)break;d=u}d!==null&&s.stopPropagation()}else Ud(t,e,s,null,i)}}function Zd(t){return t=Fl(t),Fd(t)}var rl=null;function Fd(t){if(rl=null,t=ki(t),t!==null){var e=c(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=f(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return rl=t,null}function Gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vv()){case Xc:return 2;case Qc:return 8;case Va:case Kv:return 32;case Zc:return 268435456;default:return 32}default:return 32}}var Wd=!1,Wr=null,ti=null,ei=null,Aa=new Map,wa=new Map,ri=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function _a(t,e,i,s,d,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[d]},e!==null&&(e=Ni(e),e!==null&&Pg(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,d!==null&&e.indexOf(d)===-1&&e.push(d),t)}function lb(t,e,i,s,d){switch(e){case"focusin":return Wr=_a(Wr,t,e,i,s,d),!0;case"dragenter":return ti=_a(ti,t,e,i,s,d),!0;case"mouseover":return ei=_a(ei,t,e,i,s,d),!0;case"pointerover":var u=d.pointerId;return Aa.set(u,_a(Aa.get(u)||null,t,e,i,s,d)),!0;case"gotpointercapture":return u=d.pointerId,wa.set(u,_a(wa.get(u)||null,t,e,i,s,d)),!0}return!1}function $g(t){var e=ki(t.target);if(e!==null){var i=c(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,iu(t.priority,function(){Hg(i)});return}}else if(e===31){if(e=f(i),e!==null){t.blockedOn=e,iu(t.priority,function(){Hg(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Zd(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Zl=s,i.target.dispatchEvent(s),Zl=null}else return e=Ni(i),e!==null&&Pg(e),t.blockedOn=i,!1;e.shift()}return!0}function Vg(t,e,i){il(t)&&i.delete(e)}function ob(){Wd=!1,Wr!==null&&il(Wr)&&(Wr=null),ti!==null&&il(ti)&&(ti=null),ei!==null&&il(ei)&&(ei=null),Aa.forEach(Vg),wa.forEach(Vg)}function nl(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ob)))}var al=null;function Kg(t){al!==t&&(al=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){al===t&&(al=null);for(var e=0;e<t.length;e+=3){var i=t[e],s=t[e+1],d=t[e+2];if(typeof s!="function"){if(Fd(s||i)===null)continue;break}var u=Ni(i);u!==null&&(t.splice(e,3),e-=3,Zo(u,{pending:!0,data:d,method:i.method,action:s},s,d))}}))}function gn(t){function e(I){return nl(I,t)}Wr!==null&&nl(Wr,t),ti!==null&&nl(ti,t),ei!==null&&nl(ei,t),Aa.forEach(e),wa.forEach(e);for(var i=0;i<ri.length;i++){var s=ri[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ri.length&&(i=ri[0],i.blockedOn===null);)$g(i),i.blockedOn===null&&ri.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var d=i[s],u=i[s+1],v=d[he]||null;if(typeof u=="function")v||Kg(i);else if(v){var y=null;if(u&&u.hasAttribute("formAction")){if(d=u,v=u[he]||null)y=v.formAction;else if(Fd(d)!==null)continue}else y=v.action;typeof y=="function"?i[s+1]=y:(i.splice(s,3),s-=3),Kg(i)}}}function Yg(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function e(){d!==null&&(d(),d=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),d!==null&&(d(),d=null)}}}function tc(t){this._internalRoot=t}sl.prototype.render=tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var i=e.current,s=ke();zg(i,s,t,e,null,null)},sl.prototype.unmount=tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zg(t.current,2,null,t,null,null),Ps(),e[Oi]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ru();t={blockedOn:null,target:t,priority:e};for(var i=0;i<ri.length&&e!==0&&e<ri[i].priority;i++);ri.splice(i,0,t),i===0&&$g(t)}};var Jg=r.version;if(Jg!=="19.2.5")throw Error(l(527,Jg,"19.2.5"));$.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=p(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var db={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{kn=ll.inject(db),Ie=ll}catch{}}return Sa.createRoot=function(t,e){if(!o(t))throw Error(l(299));var i=!1,s="",d=tf,u=ef,v=rf;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(d=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(v=e.onRecoverableError)),e=Ug(t,1,!1,null,null,i,s,null,d,u,v,Yg),t[Oi]=e.current,Ld(t),new tc(e)},Sa.hydrateRoot=function(t,e,i){if(!o(t))throw Error(l(299));var s=!1,d="",u=tf,v=ef,y=rf,I=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError),i.formState!==void 0&&(I=i.formState)),e=Ug(t,1,!0,e,i??null,s,d,I,u,v,y,Yg),e.context=Mg(null),i=e.current,s=ke(),s=ql(s),d=Hr(s),d.callback=null,Gr(i,d,s),i=s,e.current.lanes=i,jn(e,i),ar(e),t[Oi]=e.current,Ld(t),new sl(e)},Sa.version="19.2.5",Sa}var np;function bb(){if(np)return ic.exports;np=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),ic.exports=yb(),ic.exports}var Ab=bb();var ap="popstate";function sp(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function wb(n={}){function r(l,o){let c=o.state?.masked,{pathname:h,search:f,hash:g}=c||l.location;return yc("",{pathname:h,search:f,hash:g},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function a(l,o){return typeof o=="string"?o:ja(o)}return Ib(r,a,null,n)}function Lt(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Ye(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function _b(){return Math.random().toString(36).substring(2,10)}function lp(n,r){return{usr:n.state,key:n.key,idx:r,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function yc(n,r,a=null,l,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?Tn(r):r,state:a,key:r&&r.key||l||_b(),unstable_mask:o}}function ja({pathname:n="/",search:r="",hash:a=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function Tn(n){let r={};if(n){let a=n.indexOf("#");a>=0&&(r.hash=n.substring(a),n=n.substring(0,a));let l=n.indexOf("?");l>=0&&(r.search=n.substring(l),n=n.substring(0,l)),n&&(r.pathname=n)}return r}function Ib(n,r,a,l={}){let{window:o=document.defaultView,v5Compat:c=!1}=l,h=o.history,f="POP",g=null,p=b();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function b(){return(h.state||{idx:null}).idx}function m(){f="POP";let k=b(),M=k==null?null:k-p;p=k,g&&g({action:f,location:x.location,delta:M})}function w(k,M){f="PUSH";let P=sp(k)?k:yc(x.location,k,M);p=b()+1;let R=lp(P,p),q=x.createHref(P.unstable_mask||P);try{h.pushState(R,"",q)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(q)}c&&g&&g({action:f,location:x.location,delta:1})}function _(k,M){f="REPLACE";let P=sp(k)?k:yc(x.location,k,M);p=b();let R=lp(P,p),q=x.createHref(P.unstable_mask||P);h.replaceState(R,"",q),c&&g&&g({action:f,location:x.location,delta:0})}function O(k){return Sb(k)}let x={get action(){return f},get location(){return n(o,h)},listen(k){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(ap,m),g=k,()=>{o.removeEventListener(ap,m),g=null}},createHref(k){return r(o,k)},createURL:O,encodeLocation(k){let M=O(k);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:_,go(k){return h.go(k)}};return x}function Sb(n,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Lt(a,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:ja(n);return l=l.replace(/ $/,"%20"),!r&&l.startsWith("//")&&(l=a+l),new URL(l,a)}function Zp(n,r,a="/"){return Eb(n,r,a,!1)}function Eb(n,r,a,l){let o=typeof r=="string"?Tn(r):r,c=kr(o.pathname||"/",a);if(c==null)return null;let h=Fp(n);Tb(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let p=Mb(c);f=Lb(h[g],p,l)}return f}function Fp(n,r=[],a=[],l="",o=!1){let c=(h,f,g=o,p)=>{let b={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&g)return;Lt(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let m=tr([l,b.relativePath]),w=a.concat(b);h.children&&h.children.length>0&&(Lt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Fp(h.children,r,w,m,g)),!(h.path==null&&!h.index)&&r.push({path:m,score:jb(m,h.index),routesMeta:w})};return n.forEach((h,f)=>{if(h.path===""||!h.path?.includes("?"))c(h,f);else for(let g of Wp(h.path))c(h,f,!0,g)}),r}function Wp(n){let r=n.split("/");if(r.length===0)return[];let[a,...l]=r,o=a.endsWith("?"),c=a.replace(/\?$/,"");if(l.length===0)return o?[c,""]:[c];let h=Wp(l.join("/")),f=[];return f.push(...h.map(g=>g===""?c:[c,g].join("/"))),o&&f.push(...h),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function Tb(n){n.sort((r,a)=>r.score!==a.score?a.score-r.score:Db(r.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}var Cb=/^:[\w-]+$/,xb=3,Rb=2,Ob=1,kb=10,Nb=-2,op=n=>n==="*";function jb(n,r){let a=n.split("/"),l=a.length;return a.some(op)&&(l+=Nb),r&&(l+=Rb),a.filter(o=>!op(o)).reduce((o,c)=>o+(Cb.test(c)?xb:c===""?Ob:kb),l)}function Db(n,r){return n.length===r.length&&n.slice(0,-1).every((l,o)=>l===r[o])?n[n.length-1]-r[r.length-1]:0}function Lb(n,r,a=!1){let{routesMeta:l}=n,o={},c="/",h=[];for(let f=0;f<l.length;++f){let g=l[f],p=f===l.length-1,b=c==="/"?r:r.slice(c.length)||"/",m=Al({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},b),w=g.route;if(!m&&p&&a&&!l[l.length-1].route.index&&(m=Al({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!m)return null;Object.assign(o,m.params),h.push({params:o,pathname:tr([c,m.pathname]),pathnameBase:Hb(tr([c,m.pathnameBase])),route:w}),m.pathnameBase!=="/"&&(c=tr([c,m.pathnameBase]))}return h}function Al(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,l]=Ub(n.path,n.caseSensitive,n.end),o=r.match(a);if(!o)return null;let c=o[0],h=c.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:l.reduce((p,{paramName:b,isOptional:m},w)=>{if(b==="*"){let O=f[w]||"";h=c.slice(0,c.length-O.length).replace(/(.)\/+$/,"$1")}const _=f[w];return m&&!_?p[b]=void 0:p[b]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:h,pattern:n}}function Ub(n,r=!1,a=!0){Ye(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g,p,b)=>{if(l.push({paramName:f,isOptional:g!=null}),g){let m=b.charAt(p+h.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),l]}function Mb(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ye(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function kr(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,l=n.charAt(a);return l&&l!=="/"?null:n.slice(a)||"/"}var zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Bb(n,r="/"){let{pathname:a,search:l="",hash:o=""}=typeof n=="string"?Tn(n):n,c;return a?(a=tv(a),a.startsWith("/")?c=dp(a.substring(1),"/"):c=dp(a,r)):c=r,{pathname:c,search:Gb(l),hash:qb(o)}}function dp(n,r){let a=wl(r).split("/");return n.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function lc(n,r,a,l){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pb(n){return n.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function Uc(n){let r=Pb(n);return r.map((a,l)=>l===r.length-1?a.pathname:a.pathnameBase)}function xl(n,r,a,l=!1){let o;typeof n=="string"?o=Tn(n):(o={...n},Lt(!o.pathname||!o.pathname.includes("?"),lc("?","pathname","search",o)),Lt(!o.pathname||!o.pathname.includes("#"),lc("#","pathname","hash",o)),Lt(!o.search||!o.search.includes("#"),lc("#","search","hash",o)));let c=n===""||o.pathname==="",h=c?"/":o.pathname,f;if(h==null)f=a;else{let m=r.length-1;if(!l&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),m-=1;o.pathname=w.join("/")}f=m>=0?r[m]:"/"}let g=Bb(o,f),p=h&&h!=="/"&&h.endsWith("/"),b=(c||h===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(p||b)&&(g.pathname+="/"),g}var tv=n=>n.replace(/\/\/+/g,"/"),tr=n=>tv(n.join("/")),wl=n=>n.replace(/\/+$/,""),Hb=n=>wl(n).replace(/^\/*/,"/"),Gb=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,qb=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,$b=class{constructor(n,r,a,l=!1){this.status=n,this.statusText=r||"",this.internal=l,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Vb(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Kb(n){let r=n.map(a=>a.route.path).filter(Boolean);return tr(r)||"/"}var ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function rv(n,r){let a=n;if(typeof a!="string"||!zb.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let l=a,o=!1;if(ev)try{let c=new URL(window.location.href),h=a.startsWith("//")?new URL(c.protocol+a):new URL(a),f=kr(h.pathname,r);h.origin===c.origin&&f!=null?a=f+h.search+h.hash:o=!0}catch{Ye(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var iv=["POST","PUT","PATCH","DELETE"];new Set(iv);var Yb=["GET",...iv];new Set(Yb);var Cn=S.createContext(null);Cn.displayName="DataRouter";var Rl=S.createContext(null);Rl.displayName="DataRouterState";var nv=S.createContext(!1);function Jb(){return S.useContext(nv)}var av=S.createContext({isTransitioning:!1});av.displayName="ViewTransition";var Xb=S.createContext(new Map);Xb.displayName="Fetchers";var Qb=S.createContext(null);Qb.displayName="Await";var je=S.createContext(null);je.displayName="Navigation";var Ha=S.createContext(null);Ha.displayName="Location";var er=S.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Mc=S.createContext(null);Mc.displayName="RouteError";var sv="REACT_ROUTER_ERROR",Zb="REDIRECT",Fb="ROUTE_ERROR_RESPONSE";function Wb(n){if(n.startsWith(`${sv}:${Zb}:{`))try{let r=JSON.parse(n.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function tA(n){if(n.startsWith(`${sv}:${Fb}:{`))try{let r=JSON.parse(n.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new $b(r.status,r.statusText,r.data)}catch{}}function eA(n,{relative:r}={}){Lt(xn(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:l}=S.useContext(je),{hash:o,pathname:c,search:h}=Ga(n,{relative:r}),f=c;return a!=="/"&&(f=c==="/"?a:tr([a,c])),l.createHref({pathname:f,search:h,hash:o})}function xn(){return S.useContext(Ha)!=null}function De(){return Lt(xn(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Ha).location}var lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ov(n){S.useContext(je).static||S.useLayoutEffect(n)}function Ol(){let{isDataRoute:n}=S.useContext(er);return n?gA():rA()}function rA(){Lt(xn(),"useNavigate() may be used only in the context of a <Router> component.");let n=S.useContext(Cn),{basename:r,navigator:a}=S.useContext(je),{matches:l}=S.useContext(er),{pathname:o}=De(),c=JSON.stringify(Uc(l)),h=S.useRef(!1);return ov(()=>{h.current=!0}),S.useCallback((g,p={})=>{if(Ye(h.current,lv),!h.current)return;if(typeof g=="number"){a.go(g);return}let b=xl(g,JSON.parse(c),o,p.relative==="path");n==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:tr([r,b.pathname])),(p.replace?a.replace:a.push)(b,p.state,p)},[r,a,c,o,n])}S.createContext(null);function QI(){let{matches:n}=S.useContext(er);return n[n.length-1]?.params??{}}function Ga(n,{relative:r}={}){let{matches:a}=S.useContext(er),{pathname:l}=De(),o=JSON.stringify(Uc(a));return S.useMemo(()=>xl(n,JSON.parse(o),l,r==="path"),[n,o,l,r])}function iA(n,r){return dv(n,r)}function dv(n,r,a){Lt(xn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=S.useContext(je),{matches:o}=S.useContext(er),c=o[o.length-1],h=c?c.params:{},f=c?c.pathname:"/",g=c?c.pathnameBase:"/",p=c&&c.route;{let k=p&&p.path||"";uv(f,!p||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let b=De(),m;if(r){let k=typeof r=="string"?Tn(r):r;Lt(g==="/"||k.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${k.pathname}" was given in the \`location\` prop.`),m=k}else m=b;let w=m.pathname||"/",_=w;if(g!=="/"){let k=g.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(k.length).join("/")}let O=Zp(n,{pathname:_});Ye(p||O!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Ye(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=oA(O&&O.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:tr([g,l.encodeLocation?l.encodeLocation(k.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:tr([g,l.encodeLocation?l.encodeLocation(k.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),o,a);return r&&x?S.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...m},navigationType:"POP"}},x):x}function nA(){let n=fA(),r=Vb(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:l},c={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:c},"ErrorBoundary")," or"," ",S.createElement("code",{style:c},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},r),a?S.createElement("pre",{style:o},a):null,h)}var aA=S.createElement(nA,null),cv=class extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){this.props.onError?this.props.onError(n,r):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const a=tA(n.digest);a&&(n=a)}let r=n!==void 0?S.createElement(er.Provider,{value:this.props.routeContext},S.createElement(Mc.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?S.createElement(sA,{error:n},r):r}};cv.contextType=nv;var oc=new WeakMap;function sA({children:n,error:r}){let{basename:a}=S.useContext(je);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let l=Wb(r.digest);if(l){let o=oc.get(r);if(o)throw o;let c=rv(l.location,a);if(ev&&!oc.get(r))if(c.isExternal||l.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:l.replace}));throw oc.set(r,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return n}function lA({routeContext:n,match:r,children:a}){let l=S.useContext(Cn);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(er.Provider,{value:n},a)}function oA(n,r=[],a){let l=a?.state;if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let o=n,c=l?.errors;if(c!=null){let b=o.findIndex(m=>m.route.id&&c?.[m.route.id]!==void 0);Lt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,b+1))}let h=!1,f=-1;if(a&&l){h=l.renderFallback;for(let b=0;b<o.length;b++){let m=o[b];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=b),m.route.id){let{loaderData:w,errors:_}=l,O=m.route.loader&&!w.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||O){a.isStatic&&(h=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let g=a?.onError,p=l&&g?(b,m)=>{g(b,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Kb(l.matches),errorInfo:m})}:void 0;return o.reduceRight((b,m,w)=>{let _,O=!1,x=null,k=null;l&&(_=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||aA,h&&(f<0&&w===0?(uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,k=null):f===w&&(O=!0,k=m.route.hydrateFallbackElement||null)));let M=r.concat(o.slice(0,w+1)),P=()=>{let R;return _?R=x:O?R=k:m.route.Component?R=S.createElement(m.route.Component,null):m.route.element?R=m.route.element:R=b,S.createElement(lA,{match:m,routeContext:{outlet:b,matches:M,isDataRoute:l!=null},children:R})};return l&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?S.createElement(cv,{location:l.location,revalidation:l.revalidation,component:x,error:_,children:P(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):P()},null)}function zc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dA(n){let r=S.useContext(Cn);return Lt(r,zc(n)),r}function cA(n){let r=S.useContext(Rl);return Lt(r,zc(n)),r}function uA(n){let r=S.useContext(er);return Lt(r,zc(n)),r}function Bc(n){let r=uA(n),a=r.matches[r.matches.length-1];return Lt(a.route.id,`${n} can only be used on routes that contain a unique "id"`),a.route.id}function hA(){return Bc("useRouteId")}function fA(){let n=S.useContext(Mc),r=cA("useRouteError"),a=Bc("useRouteError");return n!==void 0?n:r.errors?.[a]}function gA(){let{router:n}=dA("useNavigate"),r=Bc("useNavigate"),a=S.useRef(!1);return ov(()=>{a.current=!0}),S.useCallback(async(o,c={})=>{Ye(a.current,lv),a.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:r,...c}))},[n,r])}var cp={};function uv(n,r,a){!r&&!cp[n]&&(cp[n]=!0,Ye(!1,a))}S.memo(pA);function pA({routes:n,future:r,state:a,isStatic:l,onError:o}){return dv(n,void 0,{state:a,isStatic:l,onError:o})}function vA({to:n,replace:r,state:a,relative:l}){Lt(xn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=S.useContext(je);Ye(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=S.useContext(er),{pathname:h}=De(),f=Ol(),g=xl(n,Uc(c),h,l==="path"),p=JSON.stringify(g);return S.useEffect(()=>{f(JSON.parse(p),{replace:r,state:a,relative:l})},[f,p,l,r,a]),null}function Ut(n){Lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mA({basename:n="/",children:r=null,location:a,navigationType:l="POP",navigator:o,static:c=!1,unstable_useTransitions:h}){Lt(!xn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:f,navigator:o,static:c,unstable_useTransitions:h,future:{}}),[f,o,c,h]);typeof a=="string"&&(a=Tn(a));let{pathname:p="/",search:b="",hash:m="",state:w=null,key:_="default",unstable_mask:O}=a,x=S.useMemo(()=>{let k=kr(p,f);return k==null?null:{location:{pathname:k,search:b,hash:m,state:w,key:_,unstable_mask:O},navigationType:l}},[f,p,b,m,w,_,l,O]);return Ye(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${b}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:S.createElement(je.Provider,{value:g},S.createElement(Ha.Provider,{children:r,value:x}))}function hv({children:n,location:r}){return iA(bc(n),r)}function bc(n,r=[]){let a=[];return S.Children.forEach(n,(l,o)=>{if(!S.isValidElement(l))return;let c=[...r,o];if(l.type===S.Fragment){a.push.apply(a,bc(l.props.children,c));return}Lt(l.type===Ut,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Lt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=bc(l.props.children,c)),a.push(h)}),a}var ml="get",yl="application/x-www-form-urlencoded";function kl(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function yA(n){return kl(n)&&n.tagName.toLowerCase()==="button"}function bA(n){return kl(n)&&n.tagName.toLowerCase()==="form"}function AA(n){return kl(n)&&n.tagName.toLowerCase()==="input"}function wA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function _A(n,r){return n.button===0&&(!r||r==="_self")&&!wA(n)}function Ac(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((r,a)=>{let l=n[a];return r.concat(Array.isArray(l)?l.map(o=>[a,o]):[[a,l]])},[]))}function IA(n,r){let a=Ac(n);return r&&r.forEach((l,o)=>{a.has(o)||r.getAll(o).forEach(c=>{a.append(o,c)})}),a}var ol=null;function SA(){if(ol===null)try{new FormData(document.createElement("form"),0),ol=!1}catch{ol=!0}return ol}var EA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dc(n){return n!=null&&!EA.has(n)?(Ye(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yl}"`),null):n}function TA(n,r){let a,l,o,c,h;if(bA(n)){let f=n.getAttribute("action");l=f?kr(f,r):null,a=n.getAttribute("method")||ml,o=dc(n.getAttribute("enctype"))||yl,c=new FormData(n)}else if(yA(n)||AA(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=n.getAttribute("formaction")||f.getAttribute("action");if(l=g?kr(g,r):null,a=n.getAttribute("formmethod")||f.getAttribute("method")||ml,o=dc(n.getAttribute("formenctype"))||dc(f.getAttribute("enctype"))||yl,c=new FormData(f,n),!SA()){let{name:p,type:b,value:m}=n;if(b==="image"){let w=p?`${p}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else p&&c.append(p,m)}}else{if(kl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ml,l=null,o=yl,h=n}return c&&o==="text/plain"&&(h=c,c=void 0),{action:l,method:a.toLowerCase(),encType:o,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function fv(n,r,a,l){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${l}`:o.pathname=`${o.pathname}.${l}`:o.pathname==="/"?o.pathname=`_root.${l}`:r&&kr(o.pathname,r)==="/"?o.pathname=`${wl(r)}/_root.${l}`:o.pathname=`${wl(o.pathname)}.${l}`,o}async function CA(n,r){if(n.id in r)return r[n.id];try{let a=await import(n.module);return r[n.id]=a,a}catch(a){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xA(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function RA(n,r,a){let l=await Promise.all(n.map(async o=>{let c=r.routes[o.route.id];if(c){let h=await CA(c,a);return h.links?h.links():[]}return[]}));return jA(l.flat(1).filter(xA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function up(n,r,a,l,o,c){let h=(g,p)=>a[p]?g.route.id!==a[p].route.id:!0,f=(g,p)=>a[p].pathname!==g.pathname||a[p].route.path?.endsWith("*")&&a[p].params["*"]!==g.params["*"];return c==="assets"?r.filter((g,p)=>h(g,p)||f(g,p)):c==="data"?r.filter((g,p)=>{let b=l.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(h(g,p)||f(g,p))return!0;if(g.route.shouldRevalidate){let m=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function OA(n,r,{includeHydrateFallback:a}={}){return kA(n.map(l=>{let o=r.routes[l.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function kA(n){return[...new Set(n)]}function NA(n){let r={},a=Object.keys(n).sort();for(let l of a)r[l]=n[l];return r}function jA(n,r){let a=new Set;return new Set(r),n.reduce((l,o)=>{let c=JSON.stringify(NA(o));return a.has(c)||(a.add(c),l.push({key:c,link:o})),l},[])}function Hc(){let n=S.useContext(Cn);return Pc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function DA(){let n=S.useContext(Rl);return Pc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gc=S.createContext(void 0);Gc.displayName="FrameworkContext";function qc(){let n=S.useContext(Gc);return Pc(n,"You must render this element inside a <HydratedRouter> element"),n}function LA(n,r){let a=S.useContext(Gc),[l,o]=S.useState(!1),[c,h]=S.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:p,onMouseLeave:b,onTouchStart:m}=r,w=S.useRef(null);S.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let x=M=>{M.forEach(P=>{h(P.isIntersecting)})},k=new IntersectionObserver(x,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[n]),S.useEffect(()=>{if(l){let x=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(x)}}},[l]);let _=()=>{o(!0)},O=()=>{o(!1),h(!1)};return a?n!=="intent"?[c,w,{}]:[c,w,{onFocus:Ea(f,_),onBlur:Ea(g,O),onMouseEnter:Ea(p,_),onMouseLeave:Ea(b,O),onTouchStart:Ea(m,_)}]:[!1,w,{}]}function Ea(n,r){return a=>{n&&n(a),a.defaultPrevented||r(a)}}function UA({page:n,...r}){let a=Jb(),{router:l}=Hc(),o=S.useMemo(()=>Zp(l.routes,n,l.basename),[l.routes,n,l.basename]);return o?a?S.createElement(zA,{page:n,matches:o,...r}):S.createElement(BA,{page:n,matches:o,...r}):null}function MA(n){let{manifest:r,routeModules:a}=qc(),[l,o]=S.useState([]);return S.useEffect(()=>{let c=!1;return RA(n,r,a).then(h=>{c||o(h)}),()=>{c=!0}},[n,r,a]),l}function zA({page:n,matches:r,...a}){let l=De(),{future:o}=qc(),{basename:c}=Hc(),h=S.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let f=fv(n,c,o.unstable_trailingSlashAwareDataRequests,"rsc"),g=!1,p=[];for(let b of r)typeof b.route.shouldRevalidate=="function"?g=!0:p.push(b.route.id);return g&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[c,o.unstable_trailingSlashAwareDataRequests,n,l,r]);return S.createElement(S.Fragment,null,h.map(f=>S.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...a})))}function BA({page:n,matches:r,...a}){let l=De(),{future:o,manifest:c,routeModules:h}=qc(),{basename:f}=Hc(),{loaderData:g,matches:p}=DA(),b=S.useMemo(()=>up(n,r,p,c,l,"data"),[n,r,p,c,l]),m=S.useMemo(()=>up(n,r,p,c,l,"assets"),[n,r,p,c,l]),w=S.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let x=new Set,k=!1;if(r.forEach(P=>{let R=c.routes[P.route.id];!R||!R.hasLoader||(!b.some(q=>q.route.id===P.route.id)&&P.route.id in g&&h[P.route.id]?.shouldRevalidate||R.hasClientLoader?k=!0:x.add(P.route.id))}),x.size===0)return[];let M=fv(n,f,o.unstable_trailingSlashAwareDataRequests,"data");return k&&x.size>0&&M.searchParams.set("_routes",r.filter(P=>x.has(P.route.id)).map(P=>P.route.id).join(",")),[M.pathname+M.search]},[f,o.unstable_trailingSlashAwareDataRequests,g,l,c,b,r,n,h]),_=S.useMemo(()=>OA(m,c),[m,c]),O=MA(m);return S.createElement(S.Fragment,null,w.map(x=>S.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...a})),_.map(x=>S.createElement("link",{key:x,rel:"modulepreload",href:x,...a})),O.map(({key:x,link:k})=>S.createElement("link",{key:x,nonce:a.nonce,...k,crossOrigin:k.crossOrigin??a.crossOrigin})))}function PA(...n){return r=>{n.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var HA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{HA&&(window.__reactRouterVersion="7.14.2")}catch{}function GA({basename:n,children:r,unstable_useTransitions:a,window:l}){let o=S.useRef();o.current==null&&(o.current=wb({window:l,v5Compat:!0}));let c=o.current,[h,f]=S.useState({action:c.action,location:c.location}),g=S.useCallback(p=>{a===!1?f(p):S.startTransition(()=>f(p))},[a]);return S.useLayoutEffect(()=>c.listen(g),[c,g]),S.createElement(mA,{basename:n,children:r,location:h.location,navigationType:h.action,navigator:c,unstable_useTransitions:a})}var gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lr=S.forwardRef(function({onClick:r,discover:a="render",prefetch:l="none",relative:o,reloadDocument:c,replace:h,unstable_mask:f,state:g,target:p,to:b,preventScrollReset:m,viewTransition:w,unstable_defaultShouldRevalidate:_,...O},x){let{basename:k,navigator:M,unstable_useTransitions:P}=S.useContext(je),R=typeof b=="string"&&gv.test(b),q=rv(b,k);b=q.to;let F=eA(b,{relative:o}),W=De(),J=null;if(f){let dt=xl(f,[],W.unstable_mask?W.unstable_mask.pathname:"/",!0);k!=="/"&&(dt.pathname=dt.pathname==="/"?k:tr([k,dt.pathname])),J=M.createHref(dt)}let[It,St,Le]=LA(l,O),ue=KA(b,{replace:h,unstable_mask:f,state:g,target:p,preventScrollReset:m,relative:o,viewTransition:w,unstable_defaultShouldRevalidate:_,unstable_useTransitions:P});function Qt(dt){r&&r(dt),dt.defaultPrevented||ue(dt)}let we=!(q.isExternal||c),it=S.createElement("a",{...O,...Le,href:(we?J:void 0)||q.absoluteURL||F,onClick:we?Qt:r,ref:PA(x,St),target:p,"data-discover":!R&&a==="render"?"true":void 0});return It&&!R?S.createElement(S.Fragment,null,it,S.createElement(UA,{page:F})):it});lr.displayName="Link";var qA=S.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:l="",end:o=!1,style:c,to:h,viewTransition:f,children:g,...p},b){let m=Ga(h,{relative:p.relative}),w=De(),_=S.useContext(Rl),{navigator:O,basename:x}=S.useContext(je),k=_!=null&&ZA(m)&&f===!0,M=O.encodeLocation?O.encodeLocation(m).pathname:m.pathname,P=w.pathname,R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;a||(P=P.toLowerCase(),R=R?R.toLowerCase():null,M=M.toLowerCase()),R&&x&&(R=kr(R,x)||R);const q=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let F=P===M||!o&&P.startsWith(M)&&P.charAt(q)==="/",W=R!=null&&(R===M||!o&&R.startsWith(M)&&R.charAt(M.length)==="/"),J={isActive:F,isPending:W,isTransitioning:k},It=F?r:void 0,St;typeof l=="function"?St=l(J):St=[l,F?"active":null,W?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Le=typeof c=="function"?c(J):c;return S.createElement(lr,{...p,"aria-current":It,className:St,ref:b,style:Le,to:h,viewTransition:f},typeof g=="function"?g(J):g)});qA.displayName="NavLink";var $A=S.forwardRef(({discover:n="render",fetcherKey:r,navigate:a,reloadDocument:l,replace:o,state:c,method:h=ml,action:f,onSubmit:g,relative:p,preventScrollReset:b,viewTransition:m,unstable_defaultShouldRevalidate:w,..._},O)=>{let{unstable_useTransitions:x}=S.useContext(je),k=XA(),M=QA(f,{relative:p}),P=h.toLowerCase()==="get"?"get":"post",R=typeof f=="string"&&gv.test(f),q=F=>{if(g&&g(F),F.defaultPrevented)return;F.preventDefault();let W=F.nativeEvent.submitter,J=W?.getAttribute("formmethod")||h,It=()=>k(W||F.currentTarget,{fetcherKey:r,method:J,navigate:a,replace:o,state:c,relative:p,preventScrollReset:b,viewTransition:m,unstable_defaultShouldRevalidate:w});x&&a!==!1?S.startTransition(()=>It()):It()};return S.createElement("form",{ref:O,method:P,action:M,onSubmit:l?g:q,..._,"data-discover":!R&&n==="render"?"true":void 0})});$A.displayName="Form";function VA(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pv(n){let r=S.useContext(Cn);return Lt(r,VA(n)),r}function KA(n,{target:r,replace:a,unstable_mask:l,state:o,preventScrollReset:c,relative:h,viewTransition:f,unstable_defaultShouldRevalidate:g,unstable_useTransitions:p}={}){let b=Ol(),m=De(),w=Ga(n,{relative:h});return S.useCallback(_=>{if(_A(_,r)){_.preventDefault();let O=a!==void 0?a:ja(m)===ja(w),x=()=>b(n,{replace:O,unstable_mask:l,state:o,preventScrollReset:c,relative:h,viewTransition:f,unstable_defaultShouldRevalidate:g});p?S.startTransition(()=>x()):x()}},[m,b,w,a,l,o,r,n,c,h,f,g,p])}function ZI(n){Ye(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=S.useRef(Ac(n)),a=S.useRef(!1),l=De(),o=S.useMemo(()=>IA(l.search,a.current?null:r.current),[l.search]),c=Ol(),h=S.useCallback((f,g)=>{const p=Ac(typeof f=="function"?f(new URLSearchParams(o)):f);a.current=!0,c("?"+p,g)},[c,o]);return[o,h]}var YA=0,JA=()=>`__${String(++YA)}__`;function XA(){let{router:n}=pv("useSubmit"),{basename:r}=S.useContext(je),a=hA(),l=n.fetch,o=n.navigate;return S.useCallback(async(c,h={})=>{let{action:f,method:g,encType:p,formData:b,body:m}=TA(c,r);if(h.navigate===!1){let w=h.fetcherKey||JA();await l(w,a,h.action||f,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:m,formMethod:h.method||g,formEncType:h.encType||p,flushSync:h.flushSync})}else await o(h.action||f,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:m,formMethod:h.method||g,formEncType:h.encType||p,replace:h.replace,state:h.state,fromRouteId:a,flushSync:h.flushSync,viewTransition:h.viewTransition})},[l,o,r,a])}function QA(n,{relative:r}={}){let{basename:a}=S.useContext(je),l=S.useContext(er);Lt(l,"useFormAction must be used inside a RouteContext");let[o]=l.matches.slice(-1),c={...Ga(n||".",{relative:r})},h=De();if(n==null){c.search=h.search;let f=new URLSearchParams(c.search),g=f.getAll("index");if(g.some(b=>b==="")){f.delete("index"),g.filter(m=>m).forEach(m=>f.append("index",m));let b=f.toString();c.search=b?`?${b}`:""}}return(!n||n===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:tr([a,c.pathname])),ja(c)}function ZA(n,{relative:r}={}){let a=S.useContext(av);Lt(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=pv("useViewTransitionState"),o=Ga(n,{relative:r});if(!a.isTransitioning)return!1;let c=kr(a.currentLocation.pathname,l)||a.currentLocation.pathname,h=kr(a.nextLocation.pathname,l)||a.nextLocation.pathname;return Al(o.pathname,h)!=null||Al(o.pathname,c)!=null}const vv=S.createContext(null),cc=()=>{const n=new Date().getHours();return n>=6&&n<18?"light":"dark"},FA=["blue","red","green","purple","orange"],hp=n=>{const r=document.cookie.match(new RegExp("(^| )"+n+"=([^;]+)"));return r?decodeURIComponent(r[2]):null},fp=(n,r)=>{document.cookie=`${n}=${encodeURIComponent(r)};path=/;max-age=31536000;SameSite=Lax`},WA=n=>{document.cookie=`${n}=;path=/;max-age=0`},t0=({children:n})=>{const[r,a]=S.useState(()=>{const g=hp("themeMode");return g==="light"||g==="dark"||g==="auto"?g:"auto"}),[l,o]=S.useState(()=>r==="auto"?cc():r),[c,h]=S.useState(()=>{const g=hp("colorTheme");return FA.includes(g??"")?g:"blue"});S.useEffect(()=>{if(r!=="auto"){o(r);return}o(cc());const g=setInterval(()=>{o(cc())},6e4);return()=>clearInterval(g)},[r]),S.useEffect(()=>{document.documentElement.setAttribute("data-theme",l)},[l]),S.useEffect(()=>{document.documentElement.setAttribute("data-color",c),fp("colorTheme",c)},[c]),S.useEffect(()=>{fp("themeMode",r),WA("theme")},[r]);const f=()=>{a(g=>g==="auto"?"light":g==="light"?"dark":"auto")};return A.jsx(vv.Provider,{value:{theme:l,mode:r,toggleTheme:f,colorTheme:c,setColorTheme:h},children:n})},e0=()=>{const n=S.useContext(vv);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n},r0={ko:{nav:{home:"홈",itServices:"IT서비스",education:"교육",publishing:"출판",portfolio:"포트폴리오",community:"커뮤니티",consulting:"컨설팅",about:"회사소개",contact:"연락처",rnd:"연구개발",services:"IT서비스",blog:"블로그"},footer:{tagline:"AI 시대, 누구나 갖춰야 할 AI 리터러시를 학습합니다",companyInfo:"회사 정보",contact:"연락처",quickLinks:"바로가기"},shop:{title:"스토어",subtitle:"도서, 전자출판, 간행물, 온라인 강좌를 만나보세요",all:"전체",book:"도서 & 교육교재",ebook:"전자출판",periodical:"간행물",course:"강좌",addToCart:"장바구니 담기",addedToCart:"담기 완료",price:"가격",noProducts:"해당 카테고리에 상품이 없습니다.",currency:"원"},cart:{title:"장바구니",empty:"장바구니가 비어있습니다.",total:"합계",subtotal:"소계",checkout:"결제하기",remove:"삭제",quantity:"수량",continueShopping:"쇼핑 계속하기",orderSummary:"주문 요약",items:"개 상품"},checkout:{title:"결제",orderSummary:"주문 요약",paymentMethod:"결제 수단",card:"카드 결제",bankTransfer:"계좌이체",customerInfo:"주문자 정보",name:"이름",email:"이메일",phone:"전화번호",namePlaceholder:"홍길동",emailPlaceholder:"email@example.com",phonePlaceholder:"010-0000-0000",pay:"결제하기",processing:"처리 중...",totalAmount:"결제 금액",agree:"주문 내용을 확인하였으며, 결제에 동의합니다."},order:{title:"주문 완료",success:"결제가 완료되었습니다!",orderNumber:"주문번호",paymentStatus:"결제 상태",paid:"결제 완료",pending:"대기 중",failed:"실패",orderDetails:"주문 내역",productName:"상품명",unitPrice:"단가",quantity:"수량",subtotal:"소계",totalAmount:"총 결제금액",backToShop:"스토어로 돌아가기",backToHome:"홈으로"},auth:{login:"로그인",logout:"로그아웃",signUp:"회원가입",loginTitle:"로그인",loginSubtitle:"계정에 로그인하세요",signUpTitle:"회원가입",signUpSubtitle:"새 계정을 만들어보세요",email:"이메일",emailPlaceholder:"email@example.com",password:"비밀번호",passwordPlaceholder:"비밀번호를 입력하세요",passwordConfirm:"비밀번호 확인",passwordConfirmPlaceholder:"비밀번호를 다시 입력하세요",displayName:"이름",displayNamePlaceholder:"표시될 이름을 입력하세요",or:"또는",noAccount:"계정이 없으신가요?",hasAccount:"이미 계정이 있으신가요?",loginError:"로그인에 실패했습니다.",signUpError:"회원가입에 실패했습니다.",passwordMismatch:"비밀번호가 일치하지 않습니다.",passwordTooShort:"비밀번호는 6자 이상이어야 합니다.",loggingIn:"로그인 중...",signingUp:"가입 중...",signUpSuccess:"회원가입이 완료되었습니다!",checkEmail:"이메일을 확인하여 계정을 활성화해주세요.",goToLogin:"로그인 페이지로",myPage:"마이페이지",editProfile:"프로필 수정",profileUpdated:"프로필이 수정되었습니다.",save:"저장",saving:"저장 중...",noName:"이름 없음",back:"뒤로",loginWith:"로그인:",emailAccount:"이메일 계정",admin:"관리자",orderHistory:"주문 이력",orderDate:"주문일",orderAmount:"결제금액",noOrders:"주문 이력이 없습니다.",orderLoadError:"주문 이력을 불러오는 데 실패했습니다.",retry:"다시 시도",soldOut:"품절",uploadImage:"이미지 업로드",dragOrClick:"이미지를 드래그하거나 클릭하여 업로드",uploading:"업로드 중...",uploadComplete:"업로드가 완료되었습니다.",removeImage:"이미지 삭제",forgotPassword:"비밀번호를 잊으셨나요?",forgotPasswordTitle:"비밀번호 재설정",forgotPasswordSubtitle:"가입하신 이메일을 입력하시면 재설정 링크를 보내드립니다.",sendResetLink:"재설정 링크 보내기",sending:"전송 중...",resetEmailSent:"비밀번호 재설정 이메일이 전송되었습니다.",checkEmailForReset:"이메일의 링크를 클릭하여 비밀번호를 재설정하세요.",backToLogin:"로그인으로 돌아가기"},search:{placeholder:"검색어를 입력하세요...",searching:"검색 중...",noResults:"검색 결과가 없습니다.",hint:"사이트 내 콘텐츠를 검색합니다.",blog:"블로그",board:"게시판",gallery:"갤러리"},comments:{title:"댓글",loading:"댓글 로딩 중...",empty:"아직 댓글이 없습니다.",placeholder:"댓글을 입력하세요...",submit:"댓글 작성",submitting:"작성 중...",delete:"삭제",deleteConfirm:"댓글을 삭제하시겠습니까?",loginRequired:"댓글을 작성하려면 로그인이 필요합니다."},community:{cancel:"취소",loading:"로딩 중..."},common:{learnMore:"자세히 보기",contactUs:"문의하기"},site:{nav:{curriculum:"교과 개요",overview:"교과 개요",chapters:"학습하기",part1:"AI 기초",part2:"AI 활용",part3:"AI 윤리",part4:"AI 미래",ch1:"Ch.1 AI란 무엇인가?",ch2:"Ch.2 머신러닝과 딥러닝",ch3:"Ch.3 AI의 역사와 발전",ch4:"Ch.4 생성형 AI 도구",ch5:"Ch.5 프롬프트 엔지니어링",ch6:"Ch.6 AI 활용 실습",ch7:"Ch.7 AI 윤리와 책임",ch8:"Ch.8 편향성과 공정성",ch9:"Ch.9 AI 안전과 신뢰성",ch10:"Ch.10 데이터 리터러시",ch11:"Ch.11 직장과 일상의 AI",ch12:"Ch.12 AI의 미래와 사회",practice:"AI 실습",practiceChatGPT:"ChatGPT 활용",practiceClaude:"Claude 활용",practiceGemini:"Gemini 활용",practicePrompt:"프롬프트 엔지니어링",community:"커뮤니티",notice:"공지사항",qna:"Q&A",myLearning:"나의학습"},home:{badge:"AI 시대 필수 교양",title:"AI Literacy",subtitle:"AI를 이해하고 활용하는 힘",welcome:"AI 리터러시 학습 플랫폼에 오신 것을 환영합니다.",description:"AI 기초부터 윤리, 프롬프트 엔지니어링, 미래 전망까지 — 4개 파트, 12개 챕터의 체계적 학습",instructor:"이애본 교수"}}},en:{nav:{home:"Home",itServices:"IT Services",education:"Education",publishing:"Publishing",portfolio:"Portfolio",community:"Community",consulting:"Consulting",about:"About",contact:"Contact",rnd:"R&D",services:"IT Services",blog:"Blog"},footer:{tagline:"Building essential AI literacy for the AI era",companyInfo:"Company Info",contact:"Contact",quickLinks:"Quick Links"},shop:{title:"Store",subtitle:"Explore books, e-publications, periodicals, and online courses",all:"All",book:"Books & Education Materials",ebook:"E-Publishing",periodical:"Periodicals",course:"Courses",addToCart:"Add to Cart",addedToCart:"Added",price:"Price",noProducts:"No products in this category.",currency:"KRW"},cart:{title:"Cart",empty:"Your cart is empty.",total:"Total",subtotal:"Subtotal",checkout:"Checkout",remove:"Remove",quantity:"Qty",continueShopping:"Continue Shopping",orderSummary:"Order Summary",items:"items"},checkout:{title:"Checkout",orderSummary:"Order Summary",paymentMethod:"Payment Method",card:"Credit Card",bankTransfer:"Bank Transfer",customerInfo:"Customer Information",name:"Name",email:"Email",phone:"Phone",namePlaceholder:"John Doe",emailPlaceholder:"email@example.com",phonePlaceholder:"010-0000-0000",pay:"Pay Now",processing:"Processing...",totalAmount:"Total Amount",agree:"I have reviewed my order and agree to proceed with payment."},order:{title:"Order Complete",success:"Payment completed successfully!",orderNumber:"Order Number",paymentStatus:"Payment Status",paid:"Paid",pending:"Pending",failed:"Failed",orderDetails:"Order Details",productName:"Product",unitPrice:"Unit Price",quantity:"Qty",subtotal:"Subtotal",totalAmount:"Total Amount",backToShop:"Back to Store",backToHome:"Home"},auth:{login:"Log In",logout:"Log Out",signUp:"Sign Up",loginTitle:"Log In",loginSubtitle:"Sign in to your account",signUpTitle:"Sign Up",signUpSubtitle:"Create a new account",email:"Email",emailPlaceholder:"email@example.com",password:"Password",passwordPlaceholder:"Enter your password",passwordConfirm:"Confirm Password",passwordConfirmPlaceholder:"Re-enter your password",displayName:"Name",displayNamePlaceholder:"Enter your display name",or:"or",noAccount:"Don't have an account?",hasAccount:"Already have an account?",loginError:"Login failed.",signUpError:"Sign up failed.",passwordMismatch:"Passwords do not match.",passwordTooShort:"Password must be at least 6 characters.",loggingIn:"Logging in...",signingUp:"Signing up...",signUpSuccess:"Sign up successful!",checkEmail:"Please check your email to activate your account.",goToLogin:"Go to Login",myPage:"My Page",editProfile:"Edit Profile",profileUpdated:"Profile updated.",save:"Save",saving:"Saving...",noName:"No name",back:"Back",loginWith:"Login:",emailAccount:"Email account",admin:"Admin",orderHistory:"Order History",orderDate:"Order Date",orderAmount:"Amount",noOrders:"No order history.",orderLoadError:"Failed to load order history.",retry:"Retry",soldOut:"Sold Out",uploadImage:"Upload Image",dragOrClick:"Drag or click to upload an image",uploading:"Uploading...",uploadComplete:"Upload complete.",removeImage:"Remove Image",forgotPassword:"Forgot password?",forgotPasswordTitle:"Reset Password",forgotPasswordSubtitle:"Enter your email and we'll send you a reset link.",sendResetLink:"Send Reset Link",sending:"Sending...",resetEmailSent:"Password reset email has been sent.",checkEmailForReset:"Click the link in the email to reset your password.",backToLogin:"Back to Login"},search:{placeholder:"Search...",searching:"Searching...",noResults:"No results found.",hint:"Search site content.",blog:"Blog",board:"Board",gallery:"Gallery"},comments:{title:"Comments",loading:"Loading comments...",empty:"No comments yet.",placeholder:"Write a comment...",submit:"Post Comment",submitting:"Posting...",delete:"Delete",deleteConfirm:"Are you sure you want to delete this comment?",loginRequired:"Please log in to leave a comment."},community:{cancel:"Cancel",loading:"Loading..."},common:{learnMore:"Learn More",contactUs:"Contact Us"},site:{nav:{curriculum:"Overview",overview:"Overview",chapters:"Learn",part1:"AI Basics",part2:"AI Practice",part3:"AI Ethics",part4:"AI Future",ch1:"Ch.1 What is AI?",ch2:"Ch.2 ML & Deep Learning",ch3:"Ch.3 History of AI",ch4:"Ch.4 Generative AI Tools",ch5:"Ch.5 Prompt Engineering",ch6:"Ch.6 AI Hands-on",ch7:"Ch.7 AI Ethics",ch8:"Ch.8 Bias & Fairness",ch9:"Ch.9 AI Safety & Trust",ch10:"Ch.10 Data Literacy",ch11:"Ch.11 AI in Work & Life",ch12:"Ch.12 AI Future & Society",practice:"AI Lab",practiceChatGPT:"ChatGPT",practiceClaude:"Claude",practiceGemini:"Gemini",practicePrompt:"Prompt Engineering",community:"Community",notice:"Notices",qna:"Q&A",myLearning:"My Learning"},home:{badge:"Essential AI Education",title:"AI Literacy",subtitle:"The Power to Understand and Use AI",welcome:"Welcome to the AI Literacy learning platform.",description:"From AI basics to ethics, prompt engineering, and future outlook — 4 parts, 12 chapters of systematic learning",instructor:"Prof. Aebon Lee"}}}},mv=S.createContext(null),i0=({children:n})=>{const[r,a]=S.useState("ko"),l=()=>{a(c=>c==="ko"?"en":"ko")},o=c=>{const h=c.split(".");let f=r0[r];for(const g of h)f=f?.[g];return typeof f=="string"?f:c};return A.jsx(mv.Provider,{value:{language:r,toggleLanguage:l,t:o},children:n})},$c=()=>{const n=S.useContext(mv);if(!n)throw new Error("useLanguage must be used within LanguageProvider");return n},yt={id:"ai-literacy",name:"AI Literacy",nameKo:"AI 리터러시",description:"AI 시대 필수 교양 — AI 기초, 활용, 윤리, 미래를 다루는 체계적 학습 플랫폼",url:"https://ai-literacy.dreamitbiz.com",dbPrefix:"ail_",parentSite:{name:"DreamIT Biz",url:"https://www.dreamitbiz.com"},brand:{parts:[{text:"AI",className:"brand-dream"},{text:" Literacy",className:"brand-biz"}]},company:{name:"드림아이티비즈(DreamIT Biz)",ceo:"이애본",bizNumber:"601-45-20154",salesNumber:"제2024-수원팔달-0584호",publisherNumber:"제2026-000026호",address:"경기도 수원시 팔달구 매산로 45, 419호",email:"aebon@dreamitbiz.com",phone:"010-3700-0629",kakao:"aebon",businessHours:"평일: 09:00 ~ 18:00"},features:{shop:!1},colors:[{name:"blue",color:"#0D1B3E"},{name:"red",color:"#C8102E"},{name:"green",color:"#0D9488"},{name:"purple",color:"#7C3AED"},{name:"orange",color:"#C87200"}],menuItems:[{labelKey:"site.nav.curriculum",path:"/curriculum",activePath:"/curriculum"},{labelKey:"site.nav.part1",path:"/chapters/part1",activePath:"/chapters/part1",dropdown:[{path:"/chapters/1",labelKey:"site.nav.ch1"},{path:"/chapters/2",labelKey:"site.nav.ch2"},{path:"/chapters/3",labelKey:"site.nav.ch3"}]},{labelKey:"site.nav.part2",path:"/chapters/part2",activePath:"/chapters/part2",dropdown:[{path:"/chapters/4",labelKey:"site.nav.ch4"},{path:"/chapters/5",labelKey:"site.nav.ch5"},{path:"/chapters/6",labelKey:"site.nav.ch6"}]},{labelKey:"site.nav.part3",path:"/chapters/part3",activePath:"/chapters/part3",dropdown:[{path:"/chapters/7",labelKey:"site.nav.ch7"},{path:"/chapters/8",labelKey:"site.nav.ch8"},{path:"/chapters/9",labelKey:"site.nav.ch9"}]},{labelKey:"site.nav.part4",path:"/chapters/part4",activePath:"/chapters/part4",dropdown:[{path:"/chapters/10",labelKey:"site.nav.ch10"},{path:"/chapters/11",labelKey:"site.nav.ch11"},{path:"/chapters/12",labelKey:"site.nav.ch12"}]},{labelKey:"site.nav.practice",path:"/practice",activePath:"/practice",dropdown:[{path:"/practice/chatgpt",labelKey:"site.nav.practiceChatGPT"},{path:"/practice/claude",labelKey:"site.nav.practiceClaude"},{path:"/practice/gemini",labelKey:"site.nav.practiceGemini"},{path:"/practice/prompt",labelKey:"site.nav.practicePrompt"}]},{labelKey:"site.nav.community",path:"/community/notice",activePath:"/community",dropdown:[{path:"/community/notice",labelKey:"site.nav.notice"},{path:"/community/qna",labelKey:"site.nav.qna"}]}],footerLinks:[{path:"/",labelKey:"nav.home"},{path:"/curriculum",labelKey:"site.nav.curriculum"},{path:"/chapters",labelKey:"site.nav.chapters"},{path:"/practice",labelKey:"site.nav.practice"},{path:"/community/notice",labelKey:"site.nav.notice"},{path:"/community/qna",labelKey:"site.nav.qna"}],familySites:[{name:"DreamIT Biz (본사이트)",url:"https://www.dreamitbiz.com"},{name:"AI·SW 개론",url:"https://aisw.dreamitbiz.com"},{name:"KoreaTech 컴퓨팅 사고",url:"https://koreatech.dreamitbiz.com"},{name:"Edu Hub",url:"https://edu-hub.dreamitbiz.com"}]},n0=S.createContext(null),a0={cartItems:[],cartTotal:0,cartCount:0,addItem:()=>{},removeItem:()=>{},updateQuantity:()=>{},clearCart:()=>{}},s0=()=>S.useContext(n0)??a0;function Nl(n,r){var a={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&r.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(n);o<l.length;o++)r.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(n,l[o])&&(a[l[o]]=n[l[o]]);return a}function l0(n,r,a,l){function o(c){return c instanceof a?c:new a(function(h){h(c)})}return new(a||(a=Promise))(function(c,h){function f(b){try{p(l.next(b))}catch(m){h(m)}}function g(b){try{p(l.throw(b))}catch(m){h(m)}}function p(b){b.done?c(b.value):o(b.value).then(f,g)}p((l=l.apply(n,r||[])).next())})}const o0=n=>n?(...r)=>n(...r):(...r)=>fetch(...r);class Vc extends Error{constructor(r,a="FunctionsError",l){super(r),this.name=a,this.context=l}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class d0 extends Vc{constructor(r){super("Failed to send a request to the Edge Function","FunctionsFetchError",r)}}class gp extends Vc{constructor(r){super("Relay Error invoking the Edge Function","FunctionsRelayError",r)}}class pp extends Vc{constructor(r){super("Edge Function returned a non-2xx status code","FunctionsHttpError",r)}}var wc;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(wc||(wc={}));class c0{constructor(r,{headers:a={},customFetch:l,region:o=wc.Any}={}){this.url=r,this.headers=a,this.region=o,this.fetch=o0(l)}setAuth(r){this.headers.Authorization=`Bearer ${r}`}invoke(r){return l0(this,arguments,void 0,function*(a,l={}){var o;let c,h;try{const{headers:f,method:g,body:p,signal:b,timeout:m}=l;let w={},{region:_}=l;_||(_=this.region);const O=new URL(`${this.url}/${a}`);_&&_!=="any"&&(w["x-region"]=_,O.searchParams.set("forceFunctionRegion",_));let x;p&&(f&&!Object.prototype.hasOwnProperty.call(f,"Content-Type")||!f)?typeof Blob<"u"&&p instanceof Blob||p instanceof ArrayBuffer?(w["Content-Type"]="application/octet-stream",x=p):typeof p=="string"?(w["Content-Type"]="text/plain",x=p):typeof FormData<"u"&&p instanceof FormData?x=p:(w["Content-Type"]="application/json",x=JSON.stringify(p)):p&&typeof p!="string"&&!(typeof Blob<"u"&&p instanceof Blob)&&!(p instanceof ArrayBuffer)&&!(typeof FormData<"u"&&p instanceof FormData)?x=JSON.stringify(p):x=p;let k=b;m&&(h=new AbortController,c=setTimeout(()=>h.abort(),m),b?(k=h.signal,b.addEventListener("abort",()=>h.abort())):k=h.signal);const M=yield this.fetch(O.toString(),{method:g||"POST",headers:Object.assign(Object.assign(Object.assign({},w),this.headers),f),body:x,signal:k}).catch(F=>{throw new d0(F)}),P=M.headers.get("x-relay-error");if(P&&P==="true")throw new gp(M);if(!M.ok)throw new pp(M);let R=((o=M.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),q;return R==="application/json"?q=yield M.json():R==="application/octet-stream"||R==="application/pdf"?q=yield M.blob():R==="text/event-stream"?q=M:R==="multipart/form-data"?q=yield M.formData():q=yield M.text(),{data:q,error:null,response:M}}catch(f){return{data:null,error:f,response:f instanceof pp||f instanceof gp?f.context:void 0}}finally{c&&clearTimeout(c)}})}}const yv=3,vp=n=>Math.min(1e3*2**n,3e4),u0=[520,503],bv=["GET","HEAD","OPTIONS"];var h0=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function mp(n,r){return new Promise(a=>{if(r?.aborted){a();return}const l=setTimeout(()=>{r?.removeEventListener("abort",o),a()},n);function o(){clearTimeout(l),a()}r?.addEventListener("abort",o)})}function f0(n,r,a,l){return!(!l||a>=yv||!bv.includes(n)||!u0.includes(r))}var g0=class{constructor(n){var r,a,l,o,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(r=n.shouldThrowOnError)!==null&&r!==void 0?r:!1,this.signal=n.signal,this.isMaybeSingle=(a=n.isMaybeSingle)!==null&&a!==void 0?a:!1,this.shouldStripNulls=(l=n.shouldStripNulls)!==null&&l!==void 0?l:!1,this.urlLengthLimit=(o=n.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(c=n.retry)!==null&&c!==void 0?c:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,r){return this.headers=new Headers(this.headers),this.headers.set(n,r),this}retry(n){return this.retryEnabled=n,this}then(n,r){var a=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const h=this.headers.get("Accept");h==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!h||h==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const l=this.fetch;let c=(async()=>{let h=0;for(;;){const p=new Headers(a.headers);h>0&&p.set("X-Retry-Count",String(h));let b;try{b=await l(a.url.toString(),{method:a.method,headers:p,body:JSON.stringify(a.body,(m,w)=>typeof w=="bigint"?w.toString():w),signal:a.signal})}catch(m){if(m?.name==="AbortError"||m?.code==="ABORT_ERR"||!bv.includes(a.method))throw m;if(a.retryEnabled&&h<yv){const w=vp(h);h++,await mp(w,a.signal);continue}throw m}if(f0(a.method,b.status,h,a.retryEnabled)){var f,g;const m=(f=(g=b.headers)===null||g===void 0?void 0:g.get("Retry-After"))!==null&&f!==void 0?f:null,w=m!==null?Math.max(0,parseInt(m,10)||0)*1e3:vp(h);await b.text(),h++,await mp(w,a.signal);continue}return await a.processResponse(b)}})();return this.shouldThrowOnError||(c=c.catch(h=>{var f;let g="",p="",b="";const m=h?.cause;if(m){var w,_,O,x;const P=(w=m?.message)!==null&&w!==void 0?w:"",R=(_=m?.code)!==null&&_!==void 0?_:"";g=`${(O=h?.name)!==null&&O!==void 0?O:"FetchError"}: ${h?.message}`,g+=`

Caused by: ${(x=m?.name)!==null&&x!==void 0?x:"Error"}: ${P}`,R&&(g+=` (${R})`),m?.stack&&(g+=`
${m.stack}`)}else{var k;g=(k=h?.stack)!==null&&k!==void 0?k:""}const M=this.url.toString().length;return h?.name==="AbortError"||h?.code==="ABORT_ERR"?(b="",p="Request was aborted (timeout or manual cancellation)",M>this.urlLengthLimit&&(p+=`. Note: Your request URL is ${M} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(m?.name==="HeadersOverflowError"||m?.code==="UND_ERR_HEADERS_OVERFLOW")&&(b="",p="HTTP headers exceeded server limits (typically 16KB)",M>this.urlLengthLimit&&(p+=`. Your request URL is ${M} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(f=h?.name)!==null&&f!==void 0?f:"FetchError"}: ${h?.message}`,details:g,hint:p,code:b},data:null,count:null,status:0,statusText:""}})),c.then(n,r)}async processResponse(n){var r=this;let a=null,l=null,o=null,c=n.status,h=n.statusText;if(n.ok){var f,g;if(r.method!=="HEAD"){var p;const w=await n.text();w===""||(r.headers.get("Accept")==="text/csv"||r.headers.get("Accept")&&(!((p=r.headers.get("Accept"))===null||p===void 0)&&p.includes("application/vnd.pgrst.plan+text"))?l=w:l=JSON.parse(w))}const b=(f=r.headers.get("Prefer"))===null||f===void 0?void 0:f.match(/count=(exact|planned|estimated)/),m=(g=n.headers.get("content-range"))===null||g===void 0?void 0:g.split("/");b&&m&&m.length>1&&(o=parseInt(m[1])),r.isMaybeSingle&&Array.isArray(l)&&(l.length>1?(a={code:"PGRST116",details:`Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},l=null,o=null,c=406,h="Not Acceptable"):l.length===1?l=l[0]:l=null)}else{const b=await n.text();try{a=JSON.parse(b),Array.isArray(a)&&n.status===404&&(l=[],a=null,c=200,h="OK")}catch{n.status===404&&b===""?(c=204,h="No Content"):a={message:b}}if(a&&r.shouldThrowOnError)throw new h0(a)}return{success:a===null,error:a,data:l,count:o,status:c,statusText:h}}returns(){return this}overrideTypes(){return this}},p0=class extends g0{select(n){let r=!1;const a=(n??"*").split("").map(l=>/\s/.test(l)&&!r?"":(l==='"'&&(r=!r),l)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:r=!0,nullsFirst:a,foreignTable:l,referencedTable:o=l}={}){const c=o?`${o}.order`:"order",h=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${h?`${h},`:""}${n}.${r?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:r,referencedTable:a=r}={}){const l=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(l,`${n}`),this}range(n,r,{foreignTable:a,referencedTable:l=a}={}){const o=typeof l>"u"?"offset":`${l}.offset`,c=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(o,`${n}`),this.url.searchParams.set(c,`${r-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:r=!1,settings:a=!1,buffers:l=!1,wal:o=!1,format:c="text"}={}){var h;const f=[n?"analyze":null,r?"verbose":null,a?"settings":null,l?"buffers":null,o?"wal":null].filter(Boolean).join("|"),g=(h=this.headers.get("Accept"))!==null&&h!==void 0?h:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${g}"; options=${f};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const yp=new RegExp("[,()]");var An=class extends p0{eq(n,r){return this.url.searchParams.append(n,`eq.${r}`),this}neq(n,r){return this.url.searchParams.append(n,`neq.${r}`),this}gt(n,r){return this.url.searchParams.append(n,`gt.${r}`),this}gte(n,r){return this.url.searchParams.append(n,`gte.${r}`),this}lt(n,r){return this.url.searchParams.append(n,`lt.${r}`),this}lte(n,r){return this.url.searchParams.append(n,`lte.${r}`),this}like(n,r){return this.url.searchParams.append(n,`like.${r}`),this}likeAllOf(n,r){return this.url.searchParams.append(n,`like(all).{${r.join(",")}}`),this}likeAnyOf(n,r){return this.url.searchParams.append(n,`like(any).{${r.join(",")}}`),this}ilike(n,r){return this.url.searchParams.append(n,`ilike.${r}`),this}ilikeAllOf(n,r){return this.url.searchParams.append(n,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(n,r){return this.url.searchParams.append(n,`ilike(any).{${r.join(",")}}`),this}regexMatch(n,r){return this.url.searchParams.append(n,`match.${r}`),this}regexIMatch(n,r){return this.url.searchParams.append(n,`imatch.${r}`),this}is(n,r){return this.url.searchParams.append(n,`is.${r}`),this}isDistinct(n,r){return this.url.searchParams.append(n,`isdistinct.${r}`),this}in(n,r){const a=Array.from(new Set(r)).map(l=>typeof l=="string"&&yp.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(n,`in.(${a})`),this}notIn(n,r){const a=Array.from(new Set(r)).map(l=>typeof l=="string"&&yp.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(n,`not.in.(${a})`),this}contains(n,r){return typeof r=="string"?this.url.searchParams.append(n,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(n,`cs.{${r.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(r)}`),this}containedBy(n,r){return typeof r=="string"?this.url.searchParams.append(n,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(n,`cd.{${r.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(r)}`),this}rangeGt(n,r){return this.url.searchParams.append(n,`sr.${r}`),this}rangeGte(n,r){return this.url.searchParams.append(n,`nxl.${r}`),this}rangeLt(n,r){return this.url.searchParams.append(n,`sl.${r}`),this}rangeLte(n,r){return this.url.searchParams.append(n,`nxr.${r}`),this}rangeAdjacent(n,r){return this.url.searchParams.append(n,`adj.${r}`),this}overlaps(n,r){return typeof r=="string"?this.url.searchParams.append(n,`ov.${r}`):this.url.searchParams.append(n,`ov.{${r.join(",")}}`),this}textSearch(n,r,{config:a,type:l}={}){let o="";l==="plain"?o="pl":l==="phrase"?o="ph":l==="websearch"&&(o="w");const c=a===void 0?"":`(${a})`;return this.url.searchParams.append(n,`${o}fts${c}.${r}`),this}match(n){return Object.entries(n).filter(([r,a])=>a!==void 0).forEach(([r,a])=>{this.url.searchParams.append(r,`eq.${a}`)}),this}not(n,r,a){return this.url.searchParams.append(n,`not.${r}.${a}`),this}or(n,{foreignTable:r,referencedTable:a=r}={}){const l=a?`${a}.or`:"or";return this.url.searchParams.append(l,`(${n})`),this}filter(n,r,a){return this.url.searchParams.append(n,`${r}.${a}`),this}},v0=class{constructor(n,{headers:r={},schema:a,fetch:l,urlLengthLimit:o=8e3,retry:c}){this.url=n,this.headers=new Headers(r),this.schema=a,this.fetch=l,this.urlLengthLimit=o,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,r){const{head:a=!1,count:l}=r??{},o=a?"HEAD":"GET";let c=!1;const h=(n??"*").split("").map(p=>/\s/.test(p)&&!c?"":(p==='"'&&(c=!c),p)).join(""),{url:f,headers:g}=this.cloneRequestState();return f.searchParams.set("select",h),l&&g.append("Prefer",`count=${l}`),new An({method:o,url:f,headers:g,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:r,defaultToNull:a=!0}={}){var l;const o="POST",{url:c,headers:h}=this.cloneRequestState();if(r&&h.append("Prefer",`count=${r}`),a||h.append("Prefer","missing=default"),Array.isArray(n)){const f=n.reduce((g,p)=>g.concat(Object.keys(p)),[]);if(f.length>0){const g=[...new Set(f)].map(p=>`"${p}"`);c.searchParams.set("columns",g.join(","))}}return new An({method:o,url:c,headers:h,schema:this.schema,body:n,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:r,ignoreDuplicates:a=!1,count:l,defaultToNull:o=!0}={}){var c;const h="POST",{url:f,headers:g}=this.cloneRequestState();if(g.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),r!==void 0&&f.searchParams.set("on_conflict",r),l&&g.append("Prefer",`count=${l}`),o||g.append("Prefer","missing=default"),Array.isArray(n)){const p=n.reduce((b,m)=>b.concat(Object.keys(m)),[]);if(p.length>0){const b=[...new Set(p)].map(m=>`"${m}"`);f.searchParams.set("columns",b.join(","))}}return new An({method:h,url:f,headers:g,schema:this.schema,body:n,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:r}={}){var a;const l="PATCH",{url:o,headers:c}=this.cloneRequestState();return r&&c.append("Prefer",`count=${r}`),new An({method:l,url:o,headers:c,schema:this.schema,body:n,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var r;const a="DELETE",{url:l,headers:o}=this.cloneRequestState();return n&&o.append("Prefer",`count=${n}`),new An({method:a,url:l,headers:o,schema:this.schema,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Da(n){"@babel/helpers - typeof";return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Da(n)}function m0(n,r){if(Da(n)!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var l=a.call(n,r);if(Da(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function y0(n){var r=m0(n,"string");return Da(r)=="symbol"?r:r+""}function b0(n,r,a){return(r=y0(r))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function bp(n,r){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,l)}return a}function dl(n){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?bp(Object(a),!0).forEach(function(l){b0(n,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):bp(Object(a)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(a,l))})}return n}var A0=class Av{constructor(r,{headers:a={},schema:l,fetch:o,timeout:c,urlLengthLimit:h=8e3,retry:f}={}){this.url=r,this.headers=new Headers(a),this.schemaName=l,this.urlLengthLimit=h;const g=o??globalThis.fetch;c!==void 0&&c>0?this.fetch=(p,b)=>{const m=new AbortController,w=setTimeout(()=>m.abort(),c),_=b?.signal;if(_){if(_.aborted)return clearTimeout(w),g(p,b);const O=()=>{clearTimeout(w),m.abort()};return _.addEventListener("abort",O,{once:!0}),g(p,dl(dl({},b),{},{signal:m.signal})).finally(()=>{clearTimeout(w),_.removeEventListener("abort",O)})}return g(p,dl(dl({},b),{},{signal:m.signal})).finally(()=>clearTimeout(w))}:this.fetch=g,this.retry=f}from(r){if(!r||typeof r!="string"||r.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new v0(new URL(`${this.url}/${r}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(r){return new Av(this.url,{headers:this.headers,schema:r,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(r,a={},{head:l=!1,get:o=!1,count:c}={}){var h;let f;const g=new URL(`${this.url}/rpc/${r}`);let p;const b=_=>_!==null&&typeof _=="object"&&(!Array.isArray(_)||_.some(b)),m=l&&Object.values(a).some(b);m?(f="POST",p=a):l||o?(f=l?"HEAD":"GET",Object.entries(a).filter(([_,O])=>O!==void 0).map(([_,O])=>[_,Array.isArray(O)?`{${O.join(",")}}`:`${O}`]).forEach(([_,O])=>{g.searchParams.append(_,O)})):(f="POST",p=a);const w=new Headers(this.headers);return m?w.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&w.set("Prefer",`count=${c}`),new An({method:f,url:g,headers:w,schema:this.schemaName,body:p,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class w0{constructor(){}static detectEnvironment(){var r;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((r=navigator.userAgent)===null||r===void 0)&&r.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const a=globalThis.process;if(a){const l=a.versions;if(l&&l.node){const o=l.node,c=parseInt(o.replace(/^v/,"").split(".")[0]);return c>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${c} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${c} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const r=this.detectEnvironment();if(r.constructor)return r.constructor;let a=r.error||"WebSocket not supported in this environment.";throw r.workaround&&(a+=`

Suggested solution: ${r.workaround}`),new Error(a)}static isWebSocketSupported(){try{const r=this.detectEnvironment();return r.type==="native"||r.type==="ws"}catch{return!1}}}const _0="2.105.1",I0=`realtime-js/${_0}`,S0="1.0.0",wv="2.0.0",E0=wv,T0=1e4,C0=100,ni={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},_v={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},_c={connecting:"connecting",closing:"closing",closed:"closed"};class x0{constructor(r){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=r??[]}encode(r,a){if(r.event===this.BROADCAST_EVENT&&!(r.payload instanceof ArrayBuffer)&&typeof r.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(r));let l=[r.join_ref,r.ref,r.topic,r.event,r.payload];return a(JSON.stringify(l))}_binaryEncodeUserBroadcastPush(r){var a;return this._isArrayBuffer((a=r.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(r):this._encodeJsonUserBroadcastPush(r)}_encodeBinaryUserBroadcastPush(r){var a,l;const o=(l=(a=r.payload)===null||a===void 0?void 0:a.payload)!==null&&l!==void 0?l:new ArrayBuffer(0);return this._encodeUserBroadcastPush(r,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(r){var a,l;const o=(l=(a=r.payload)===null||a===void 0?void 0:a.payload)!==null&&l!==void 0?l:{},h=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(r,this.JSON_ENCODING,h)}_encodeUserBroadcastPush(r,a,l){var o,c;const h=r.topic,f=(o=r.ref)!==null&&o!==void 0?o:"",g=(c=r.join_ref)!==null&&c!==void 0?c:"",p=r.payload.event,b=this.allowedMetadataKeys?this._pick(r.payload,this.allowedMetadataKeys):{},m=Object.keys(b).length===0?"":JSON.stringify(b);if(g.length>255)throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`ref length ${f.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`topic length ${h.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`userEvent length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`metadata length ${m.length} exceeds maximum of 255`);const w=this.USER_BROADCAST_PUSH_META_LENGTH+g.length+f.length+h.length+p.length+m.length,_=new ArrayBuffer(this.HEADER_LENGTH+w);let O=new DataView(_),x=0;O.setUint8(x++,this.KINDS.userBroadcastPush),O.setUint8(x++,g.length),O.setUint8(x++,f.length),O.setUint8(x++,h.length),O.setUint8(x++,p.length),O.setUint8(x++,m.length),O.setUint8(x++,a),Array.from(g,M=>O.setUint8(x++,M.charCodeAt(0))),Array.from(f,M=>O.setUint8(x++,M.charCodeAt(0))),Array.from(h,M=>O.setUint8(x++,M.charCodeAt(0))),Array.from(p,M=>O.setUint8(x++,M.charCodeAt(0))),Array.from(m,M=>O.setUint8(x++,M.charCodeAt(0)));var k=new Uint8Array(_.byteLength+l.byteLength);return k.set(new Uint8Array(_),0),k.set(new Uint8Array(l),_.byteLength),k.buffer}decode(r,a){if(this._isArrayBuffer(r)){let l=this._binaryDecode(r);return a(l)}if(typeof r=="string"){const l=JSON.parse(r),[o,c,h,f,g]=l;return a({join_ref:o,ref:c,topic:h,event:f,payload:g})}return a({})}_binaryDecode(r){const a=new DataView(r),l=a.getUint8(0),o=new TextDecoder;if(l===this.KINDS.userBroadcast)return this._decodeUserBroadcast(r,a,o)}_decodeUserBroadcast(r,a,l){const o=a.getUint8(1),c=a.getUint8(2),h=a.getUint8(3),f=a.getUint8(4);let g=this.HEADER_LENGTH+4;const p=l.decode(r.slice(g,g+o));g=g+o;const b=l.decode(r.slice(g,g+c));g=g+c;const m=l.decode(r.slice(g,g+h));g=g+h;const w=r.slice(g,r.byteLength),_=f===this.JSON_ENCODING?JSON.parse(l.decode(w)):w,O={type:this.BROADCAST_EVENT,event:b,payload:_};return h>0&&(O.meta=JSON.parse(m)),{join_ref:null,ref:null,topic:p,event:this.BROADCAST_EVENT,payload:O}}_isArrayBuffer(r){var a;return r instanceof ArrayBuffer||((a=r?.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(r,a){return!r||typeof r!="object"?{}:Object.fromEntries(Object.entries(r).filter(([l])=>a.includes(l)))}}var kt;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(kt||(kt={}));const Ap=(n,r,a={})=>{var l;const o=(l=a.skipTypes)!==null&&l!==void 0?l:[];return r?Object.keys(r).reduce((c,h)=>(c[h]=R0(h,n,r,o),c),{}):{}},R0=(n,r,a,l)=>{const o=r.find(f=>f.name===n),c=o?.type,h=a[n];return c&&!l.includes(c)?Iv(c,h):Ic(h)},Iv=(n,r)=>{if(n.charAt(0)==="_"){const a=n.slice(1,n.length);return j0(r,a)}switch(n){case kt.bool:return O0(r);case kt.float4:case kt.float8:case kt.int2:case kt.int4:case kt.int8:case kt.numeric:case kt.oid:return k0(r);case kt.json:case kt.jsonb:return N0(r);case kt.timestamp:return D0(r);case kt.abstime:case kt.date:case kt.daterange:case kt.int4range:case kt.int8range:case kt.money:case kt.reltime:case kt.text:case kt.time:case kt.timestamptz:case kt.timetz:case kt.tsrange:case kt.tstzrange:return Ic(r);default:return Ic(r)}},Ic=n=>n,O0=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},k0=n=>{if(typeof n=="string"){const r=parseFloat(n);if(!Number.isNaN(r))return r}return n},N0=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},j0=(n,r)=>{if(typeof n!="string")return n;const a=n.length-1,l=n[a];if(n[0]==="{"&&l==="}"){let c;const h=n.slice(1,a);try{c=JSON.parse("["+h+"]")}catch{c=h?h.split(","):[]}return c.map(f=>Iv(r,f))}return n},D0=n=>typeof n=="string"?n.replace(" ","T"):n,Sv=n=>{const r=new URL(n);return r.protocol=r.protocol.replace(/^ws/i,"http"),r.pathname=r.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),r.pathname===""||r.pathname==="/"?r.pathname="/api/broadcast":r.pathname=r.pathname+"/api/broadcast",r.href};var Oa=n=>typeof n=="function"?n:function(){return n},L0=typeof self<"u"?self:null,wn=typeof window<"u"?window:null,or=L0||wn||globalThis,U0="2.0.0",M0=1e4,z0=1e3,dr={connecting:0,open:1,closing:2,closed:3},be={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Rr={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Sc={longpoll:"longpoll",websocket:"websocket"},B0={complete:4},Ec="base64url.bearer.phx.",cl=class{constructor(n,r,a,l){this.channel=n,this.event=r,this.payload=a||function(){return{}},this.receivedResp=null,this.timeout=l,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,r){return this.hasReceived(n)&&r(this.receivedResp.response),this.recHooks.push({status:n,callback:r}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:r,_ref:a}){this.recHooks.filter(l=>l.status===n).forEach(l=>l.callback(r))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,r){this.channel.trigger(this.refEvent,{status:n,response:r})}},Ev=class{constructor(n,r){this.callback=n,this.timerCalc=r,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},P0=class{constructor(n,r,a){this.state=be.closed,this.topic=n,this.params=Oa(r||{}),this.socket=a,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new cl(this,Rr.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Ev(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=be.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(l=>l.send()),this.pushBuffer=[]}),this.joinPush.receive("error",l=>{this.state=be.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=be.closed,this.socket.remove(this)}),this.onError(l=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.isJoining()&&this.joinPush.reset(),this.state=be.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new cl(this,Rr.leave,Oa({}),this.timeout).send(),this.state=be.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Rr.reply,(l,o)=>{this.trigger(this.replyEventName(o),l)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=be.closed,this.bindings=[]}onClose(n){this.on(Rr.close,n)}onError(n){return this.on(Rr.error,r=>n(r))}on(n,r){let a=this.bindingRef++;return this.bindings.push({event:n,ref:a,callback:r}),a}off(n,r){this.bindings=this.bindings.filter(a=>!(a.event===n&&(typeof r>"u"||r===a.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,r,a=this.timeout){if(r=r||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let l=new cl(this,n,function(){return r},a);return this.canPush()?l.send():(l.startTimeout(),this.pushBuffer.push(l)),l}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=be.leaving;let r=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Rr.close,"leave")},a=new cl(this,Rr.leave,Oa({}),n);return a.receive("ok",()=>r()).receive("timeout",()=>r()),a.send(),this.canPush()||a.trigger("ok",{}),a}onMessage(n,r,a){return r}filterBindings(n,r,a){return!0}isMember(n,r,a,l){return this.topic!==n?!1:l&&l!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:r,payload:a,joinRef:l}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=be.joining,this.joinPush.resend(n))}trigger(n,r,a,l){let o=this.onMessage(n,r,a,l);if(r&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(h=>h.event===n&&this.filterBindings(h,r,a));for(let h=0;h<c.length;h++)c[h].callback(o,a,l||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===be.closed}isErrored(){return this.state===be.errored}isJoined(){return this.state===be.joined}isJoining(){return this.state===be.joining}isLeaving(){return this.state===be.leaving}},_l=class{static request(n,r,a,l,o,c,h){if(or.XDomainRequest){let f=new or.XDomainRequest;return this.xdomainRequest(f,n,r,l,o,c,h)}else if(or.XMLHttpRequest){let f=new or.XMLHttpRequest;return this.xhrRequest(f,n,r,a,l,o,c,h)}else{if(or.fetch&&or.AbortController)return this.fetchRequest(n,r,a,l,o,c,h);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,r,a,l,o,c,h){let f={method:n,headers:a,body:l},g=null;return o&&(g=new AbortController,setTimeout(()=>g.abort(),o),f.signal=g.signal),or.fetch(r,f).then(p=>p.text()).then(p=>this.parseJSON(p)).then(p=>h&&h(p)).catch(p=>{p.name==="AbortError"&&c?c():h&&h(null)}),g}static xdomainRequest(n,r,a,l,o,c,h){return n.timeout=o,n.open(r,a),n.onload=()=>{let f=this.parseJSON(n.responseText);h&&h(f)},c&&(n.ontimeout=c),n.onprogress=()=>{},n.send(l),n}static xhrRequest(n,r,a,l,o,c,h,f){n.open(r,a,!0),n.timeout=c;for(let[g,p]of Object.entries(l))n.setRequestHeader(g,p);return n.onerror=()=>f&&f(null),n.onreadystatechange=()=>{if(n.readyState===B0.complete&&f){let g=this.parseJSON(n.responseText);f(g)}},h&&(n.ontimeout=h),n.send(o),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,r){let a=[];for(var l in n){if(!Object.prototype.hasOwnProperty.call(n,l))continue;let o=r?`${r}[${l}]`:l,c=n[l];typeof c=="object"?a.push(this.serialize(c,o)):a.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}return a.join("&")}static appendParams(n,r){if(Object.keys(r).length===0)return n;let a=n.match(/\?/)?"&":"?";return`${n}${a}${this.serialize(r)}`}},H0=n=>{let r="",a=new Uint8Array(n),l=a.byteLength;for(let o=0;o<l;o++)r+=String.fromCharCode(a[o]);return btoa(r)},pn=class{constructor(n,r){r&&r.length===2&&r[1].startsWith(Ec)&&(this.authToken=atob(r[1].slice(Ec.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=dr.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Sc.websocket),"$1/"+Sc.longpoll)}endpointURL(){return _l.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,r,a){this.close(n,r,a),this.readyState=dr.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===dr.open||this.readyState===dr.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),r=>{if(r){var{status:a,token:l,messages:o}=r;if(a===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=l}else a=0;switch(a){case 200:o.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=dr.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${a}`)}})}send(n){typeof n!="string"&&(n=H0(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),r=>{this.awaitingBatchAck=!1,!r||r.status!==200?(this.onerror(r&&r.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,r,a){for(let o of this.reqs)o.abort();this.readyState=dr.closed;let l=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:r,wasClean:a});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",l)):this.onclose(l)}ajax(n,r,a,l,o){let c,h=()=>{this.reqs.delete(c),l()};c=_l.request(n,this.endpointURL(),r,a,this.timeout,h,f=>{this.reqs.delete(c),this.isActive()&&o(f)}),this.reqs.add(c)}},G0=class xa{constructor(r,a={}){let l=a.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=r,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(l.state,o=>{let{onJoin:c,onLeave:h,onSync:f}=this.caller;this.joinRef=this.channel.joinRef(),this.state=xa.syncState(this.state,o,c,h),this.pendingDiffs.forEach(g=>{this.state=xa.syncDiff(this.state,g,c,h)}),this.pendingDiffs=[],f()}),this.channel.on(l.diff,o=>{let{onJoin:c,onLeave:h,onSync:f}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=xa.syncDiff(this.state,o,c,h),f())})}onJoin(r){this.caller.onJoin=r}onLeave(r){this.caller.onLeave=r}onSync(r){this.caller.onSync=r}list(r){return xa.list(this.state,r)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(r,a,l,o){let c=this.clone(r),h={},f={};return this.map(c,(g,p)=>{a[g]||(f[g]=p)}),this.map(a,(g,p)=>{let b=c[g];if(b){let m=p.metas.map(x=>x.phx_ref),w=b.metas.map(x=>x.phx_ref),_=p.metas.filter(x=>w.indexOf(x.phx_ref)<0),O=b.metas.filter(x=>m.indexOf(x.phx_ref)<0);_.length>0&&(h[g]=p,h[g].metas=_),O.length>0&&(f[g]=this.clone(b),f[g].metas=O)}else h[g]=p}),this.syncDiff(c,{joins:h,leaves:f},l,o)}static syncDiff(r,a,l,o){let{joins:c,leaves:h}=this.clone(a);return l||(l=function(){}),o||(o=function(){}),this.map(c,(f,g)=>{let p=r[f];if(r[f]=this.clone(g),p){let b=r[f].metas.map(w=>w.phx_ref),m=p.metas.filter(w=>b.indexOf(w.phx_ref)<0);r[f].metas.unshift(...m)}l(f,p,g)}),this.map(h,(f,g)=>{let p=r[f];if(!p)return;let b=g.metas.map(m=>m.phx_ref);p.metas=p.metas.filter(m=>b.indexOf(m.phx_ref)<0),o(f,p,g),p.metas.length===0&&delete r[f]}),r}static list(r,a){return a||(a=function(l,o){return o}),this.map(r,(l,o)=>a(l,o))}static map(r,a){return Object.getOwnPropertyNames(r).map(l=>a(l,r[l]))}static clone(r){return JSON.parse(JSON.stringify(r))}},ul={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,r){if(n.payload.constructor===ArrayBuffer)return r(this.binaryEncode(n));{let a=[n.join_ref,n.ref,n.topic,n.event,n.payload];return r(JSON.stringify(a))}},decode(n,r){if(n.constructor===ArrayBuffer)return r(this.binaryDecode(n));{let[a,l,o,c,h]=JSON.parse(n);return r({join_ref:a,ref:l,topic:o,event:c,payload:h})}},binaryEncode(n){let{join_ref:r,ref:a,event:l,topic:o,payload:c}=n,h=this.META_LENGTH+r.length+a.length+o.length+l.length,f=new ArrayBuffer(this.HEADER_LENGTH+h),g=new DataView(f),p=0;g.setUint8(p++,this.KINDS.push),g.setUint8(p++,r.length),g.setUint8(p++,a.length),g.setUint8(p++,o.length),g.setUint8(p++,l.length),Array.from(r,m=>g.setUint8(p++,m.charCodeAt(0))),Array.from(a,m=>g.setUint8(p++,m.charCodeAt(0))),Array.from(o,m=>g.setUint8(p++,m.charCodeAt(0))),Array.from(l,m=>g.setUint8(p++,m.charCodeAt(0)));var b=new Uint8Array(f.byteLength+c.byteLength);return b.set(new Uint8Array(f),0),b.set(new Uint8Array(c),f.byteLength),b.buffer},binaryDecode(n){let r=new DataView(n),a=r.getUint8(0),l=new TextDecoder;switch(a){case this.KINDS.push:return this.decodePush(n,r,l);case this.KINDS.reply:return this.decodeReply(n,r,l);case this.KINDS.broadcast:return this.decodeBroadcast(n,r,l)}},decodePush(n,r,a){let l=r.getUint8(1),o=r.getUint8(2),c=r.getUint8(3),h=this.HEADER_LENGTH+this.META_LENGTH-1,f=a.decode(n.slice(h,h+l));h=h+l;let g=a.decode(n.slice(h,h+o));h=h+o;let p=a.decode(n.slice(h,h+c));h=h+c;let b=n.slice(h,n.byteLength);return{join_ref:f,ref:null,topic:g,event:p,payload:b}},decodeReply(n,r,a){let l=r.getUint8(1),o=r.getUint8(2),c=r.getUint8(3),h=r.getUint8(4),f=this.HEADER_LENGTH+this.META_LENGTH,g=a.decode(n.slice(f,f+l));f=f+l;let p=a.decode(n.slice(f,f+o));f=f+o;let b=a.decode(n.slice(f,f+c));f=f+c;let m=a.decode(n.slice(f,f+h));f=f+h;let w=n.slice(f,n.byteLength),_={status:m,response:w};return{join_ref:g,ref:p,topic:b,event:Rr.reply,payload:_}},decodeBroadcast(n,r,a){let l=r.getUint8(1),o=r.getUint8(2),c=this.HEADER_LENGTH+2,h=a.decode(n.slice(c,c+l));c=c+l;let f=a.decode(n.slice(c,c+o));c=c+o;let g=n.slice(c,n.byteLength);return{join_ref:null,ref:null,topic:h,event:f,payload:g}}},q0=class{constructor(n,r={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=r.timeout||M0,this.transport=r.transport||or.WebSocket||pn,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=r.longPollFallbackMs,this.fallbackTimer=null,this.sessionStore=r.sessionStorage||or&&or.sessionStorage,this.establishedConnections=0,this.defaultEncoder=ul.encode.bind(ul),this.defaultDecoder=ul.decode.bind(ul),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=r.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==pn?(this.encode=r.encode||this.defaultEncoder,this.decode=r.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let a=null;wn&&wn.addEventListener&&(wn.addEventListener("pagehide",l=>{this.conn&&(this.disconnect(),a=this.connectClock)}),wn.addEventListener("pageshow",l=>{a===this.connectClock&&(a=null,this.connect())}),wn.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=r.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=r.autoSendHeartbeat??!0,this.heartbeatCallback=r.heartbeatCallback??(()=>{}),this.rejoinAfterMs=l=>r.rejoinAfterMs?r.rejoinAfterMs(l):[1e3,2e3,5e3][l-1]||1e4,this.reconnectAfterMs=l=>r.reconnectAfterMs?r.reconnectAfterMs(l):[10,50,100,150,200,250,500,1e3,2e3][l-1]||5e3,this.logger=r.logger||null,!this.logger&&r.debug&&(this.logger=(l,o,c)=>{console.log(`${l}: ${o}`,c)}),this.longpollerTimeout=r.longpollerTimeout||2e4,this.params=Oa(r.params||{}),this.endPoint=`${n}/${Sc.websocket}`,this.vsn=r.vsn||U0,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Ev(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{r.beforeReconnect&&await r.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=r.authToken}getLongPollTransport(){return pn}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=_l.appendParams(_l.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,r,a){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},r,a)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Oa(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==pn?this.connectWithFallback(pn,this.longPollFallbackMs):this.transportConnect())}log(n,r,a){this.logger&&this.logger(n,r,a)}hasLogger(){return this.logger!==null}onOpen(n){let r=this.makeRef();return this.stateChangeCallbacks.open.push([r,n]),r}onClose(n){let r=this.makeRef();return this.stateChangeCallbacks.close.push([r,n]),r}onError(n){let r=this.makeRef();return this.stateChangeCallbacks.error.push([r,n]),r}onMessage(n){let r=this.makeRef();return this.stateChangeCallbacks.message.push([r,n]),r}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let r=this.makeRef(),a=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:r});let l=this.onMessage(o=>{o.ref===r&&(this.off([l]),n(Date.now()-a))});return!0}transportName(n){return n===pn?"LongPoll":n.name}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${Ec}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=r=>this.onConnError(r),this.conn.onmessage=r=>this.onConnMessage(r),this.conn.onclose=r=>this.onConnClose(r)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,r){this.sessionStore&&this.sessionStore.setItem(n,r)}connectWithFallback(n,r=2500){clearTimeout(this.fallbackTimer);let a=!1,l=!0,o,c,h=this.transportName(n),f=g=>{this.log("transport",`falling back to ${h}...`,g),this.off([o,c]),l=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${h}`))return f("memorized");this.fallbackTimer=setTimeout(f,r),c=this.onError(g=>{this.log("transport","error",g),l&&!a&&(clearTimeout(this.fallbackTimer),f(g))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(a=!0,!l){let g=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${g}`,"true"),this.log("transport",`established ${g} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(f,r),this.ping(g=>{this.log("transport","connected to primary after",g),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),z0,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,r,a){if(!this.conn)return n&&n();const l=this.conn;this.waitForBufferDone(l,()=>{r?l.close(r,a||""):l.close(),this.waitForSocketClosed(l,()=>{this.conn===l&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,r,a=1){if(a===5||!n.bufferedAmount){r();return}setTimeout(()=>{this.waitForBufferDone(n,r,a+1)},150*a)}waitForSocketClosed(n,r,a=1){if(a===5||n.readyState===dr.closed){r();return}setTimeout(()=>{this.waitForSocketClosed(n,r,a+1)},150*a)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let r=this.transport,a=this.establishedConnections;this.triggerStateCallbacks("error",n,r,a),(r===this.transport||a>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(r=>{r.isErrored()||r.isLeaving()||r.isClosed()||r.trigger(Rr.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case dr.connecting:return"connecting";case dr.open:return"open";case dr.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(r=>r!==n)}off(n){for(let r in this.stateChangeCallbacks)this.stateChangeCallbacks[r]=this.stateChangeCallbacks[r].filter(([a])=>n.indexOf(a)===-1)}channel(n,r={}){let a=new P0(n,r,this);return this.channels.push(a),a}push(n){if(this.hasLogger()){let{topic:r,event:a,payload:l,ref:o,join_ref:c}=n;this.log("push",`${r} ${a} (${c}, ${o})`,l)}this.isConnected()?this.encode(n,r=>this.conn.send(r)):this.sendBuffer.push(()=>this.encode(n,r=>this.conn.send(r)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,r=>{let{topic:a,event:l,payload:o,ref:c,join_ref:h}=r;if(c&&c===this.pendingHeartbeatRef){const f=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",f)}catch(g){this.log("error","error in heartbeat callback",g)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${a} ${l} ${c&&"("+c+")"||""}`.trim(),o);for(let f=0;f<this.channels.length;f++){const g=this.channels[f];g.isMember(a,l,o,h)&&g.trigger(l,o,c,h)}this.triggerStateCallbacks("message",r)})}triggerStateCallbacks(n,...r){try{this.stateChangeCallbacks[n].forEach(([a,l])=>{try{l(...r)}catch(o){this.log("error",`error in ${n} callback`,o)}})}catch(a){this.log("error",`error triggering ${n} callbacks`,a)}}leaveOpenTopic(n){let r=this.channels.find(a=>a.topic===n&&(a.isJoined()||a.isJoining()));r&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),r.leave())}};class ka{constructor(r,a){const l=V0(a);this.presence=new G0(r.getChannel(),l),this.presence.onJoin((o,c,h)=>{const f=ka.onJoinPayload(o,c,h);r.getChannel().trigger("presence",f)}),this.presence.onLeave((o,c,h)=>{const f=ka.onLeavePayload(o,c,h);r.getChannel().trigger("presence",f)}),this.presence.onSync(()=>{r.getChannel().trigger("presence",{event:"sync"})})}get state(){return ka.transformState(this.presence.state)}static transformState(r){return r=$0(r),Object.getOwnPropertyNames(r).reduce((a,l)=>{const o=r[l];return a[l]=bl(o),a},{})}static onJoinPayload(r,a,l){const o=wp(a),c=bl(l);return{event:"join",key:r,currentPresences:o,newPresences:c}}static onLeavePayload(r,a,l){const o=wp(a),c=bl(l);return{event:"leave",key:r,currentPresences:o,leftPresences:c}}}function bl(n){return n.metas.map(r=>(r.presence_ref=r.phx_ref,delete r.phx_ref,delete r.phx_ref_prev,r))}function $0(n){return JSON.parse(JSON.stringify(n))}function V0(n){return n?.events&&{events:n.events}}function wp(n){return n?.metas?bl(n):[]}var _p;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(_p||(_p={}));class K0{get state(){return this.presenceAdapter.state}constructor(r,a){this.channel=r,this.presenceAdapter=new ka(this.channel.channelAdapter,a)}}function Y0(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const r=n;if(typeof r.code=="number"){const a=typeof r.reason=="string"&&r.reason?` (${r.reason})`:"";return new Error(`socket closed: ${r.code}${a}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class J0{constructor(r,a,l){const o=X0(l);this.channel=r.getSocket().channel(a,o),this.socket=r}get state(){return this.channel.state}set state(r){this.channel.state=r}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(r,a){return this.channel.on(r,a)}off(r,a){this.channel.off(r,a)}subscribe(r){return this.channel.join(r)}unsubscribe(r){return this.channel.leave(r)}teardown(){this.channel.teardown()}onClose(r){this.channel.onClose(r)}onError(r){return this.channel.onError(r)}push(r,a,l){let o;try{o=this.channel.push(r,a,l)}catch{throw new Error(`tried to push '${r}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>C0){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return o}updateJoinPayload(r){const a=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},a),r)}canPush(){return this.socket.isConnected()&&this.state===ni.joined}isJoined(){return this.state===ni.joined}isJoining(){return this.state===ni.joining}isClosed(){return this.state===ni.closed}isLeaving(){return this.state===ni.leaving}updateFilterBindings(r){this.channel.filterBindings=r}updatePayloadTransform(r){this.channel.onMessage=r}getChannel(){return this.channel}}function X0(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}var Ip;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(Ip||(Ip={}));var Sn;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Sn||(Sn={}));var Or;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(Or||(Or={}));class Na{get state(){return this.channelAdapter.state}set state(r){this.channelAdapter.state=r}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(r,a={config:{}},l){var o,c;if(this.topic=r,this.params=a,this.socket=l,this.bindings={},this.subTopic=r.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.channelAdapter=new J0(this.socket.socketAdapter,r,this.params),this.presence=new K0(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Sv(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(r,a=this.timeout){var l,o,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:h,presence:f,private:g}}=this.params,p=(o=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(_=>_.filter))!==null&&o!==void 0?o:[],b=!!this.bindings[Sn.PRESENCE]&&this.bindings[Sn.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,m={},w={broadcast:h,presence:Object.assign(Object.assign({},f),{enabled:b}),postgres_changes:p,private:g};this.socket.accessTokenValue&&(m.access_token=this.socket.accessTokenValue),this._onError(_=>{r?.(Or.CHANNEL_ERROR,Y0(_))}),this._onClose(()=>r?.(Or.CLOSED)),this.updateJoinPayload(Object.assign({config:w},m)),this._updateFilterMessage(),this.channelAdapter.subscribe(a).receive("ok",async({postgres_changes:_})=>{if(this.socket._isManualToken()||this.socket.setAuth(),_===void 0){r?.(Or.SUBSCRIBED);return}this._updatePostgresBindings(_,r)}).receive("error",_=>{this.state=ni.errored;const O=Object.values(_).join(", ")||"error";r?.(Or.CHANNEL_ERROR,new Error(O,{cause:_}))}).receive("timeout",()=>{r?.(Or.TIMED_OUT)})}return this}_updatePostgresBindings(r,a){var l;const o=this.bindings.postgres_changes,c=(l=o?.length)!==null&&l!==void 0?l:0,h=[];for(let f=0;f<c;f++){const g=o[f],{filter:{event:p,schema:b,table:m,filter:w}}=g,_=r&&r[f];if(_&&_.event===p&&Na.isFilterValueEqual(_.schema,b)&&Na.isFilterValueEqual(_.table,m)&&Na.isFilterValueEqual(_.filter,w))h.push(Object.assign(Object.assign({},g),{id:_.id}));else{this.unsubscribe(),this.state=ni.errored,a?.(Or.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=h,this.state!=ni.errored&&a&&a(Or.SUBSCRIBED)}presenceState(){return this.presence.state}async track(r,a={}){return await this.send({type:"presence",event:"track",payload:r},a.timeout||this.timeout)}async untrack(r={}){return await this.send({type:"presence",event:"untrack"},r)}on(r,a,l){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=r===Sn.PRESENCE||r===Sn.POSTGRES_CHANGES;if(o&&c)throw this.socket.log("channel",`cannot add \`${r}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${r}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(r,a,l)}async httpSend(r,a,l={}){var o;if(a==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(c.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h={method:"POST",headers:c,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})},f=await this._fetchWithTimeout(this.broadcastEndpointURL,h,(o=l.timeout)!==null&&o!==void 0?o:this.timeout);if(f.status===202)return{success:!0};let g=f.statusText;try{const p=await f.json();g=p.error||p.message||g}catch{}return Promise.reject(new Error(g))}async send(r,a={}){var l,o;if(!this.channelAdapter.canPush()&&r.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:h}=r,f={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(f.Authorization=`Bearer ${this.socket.accessTokenValue}`);const g={method:"POST",headers:f,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:h,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,g,(l=a.timeout)!==null&&l!==void 0?l:this.timeout);return await((o=p.body)===null||o===void 0?void 0:o.cancel()),p.ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var h,f,g;const p=this.channelAdapter.push(r.type,r,a.timeout||this.timeout);r.type==="broadcast"&&!(!((g=(f=(h=this.params)===null||h===void 0?void 0:h.config)===null||f===void 0?void 0:f.broadcast)===null||g===void 0)&&g.ack)&&c("ok"),p.receive("ok",()=>c("ok")),p.receive("error",()=>c("error")),p.receive("timeout",()=>c("timed out"))})}updateJoinPayload(r){this.channelAdapter.updateJoinPayload(r)}async unsubscribe(r=this.timeout){return new Promise(a=>{this.channelAdapter.unsubscribe(r).receive("ok",()=>a("ok")).receive("timeout",()=>a("timed out")).receive("error",()=>a("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(r,a,l){const o=new AbortController,c=setTimeout(()=>o.abort(),l),h=await this.socket.fetch(r,Object.assign(Object.assign({},a),{signal:o.signal}));return clearTimeout(c),h}_on(r,a,l){const o=r.toLocaleLowerCase(),c=this.channelAdapter.on(r,l),h={type:o,filter:a,callback:l,ref:c};return this.bindings[o]?this.bindings[o].push(h):this.bindings[o]=[h],this._updateFilterMessage(),this}_onClose(r){this.channelAdapter.onClose(r)}_onError(r){this.channelAdapter.onError(r)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((r,a,l)=>{var o,c,h,f,g,p,b;const m=r.event.toLocaleLowerCase();if(this._notThisChannelEvent(m,l))return!1;const w=(o=this.bindings[m])===null||o===void 0?void 0:o.find(_=>_.ref===r.ref);if(!w)return!0;if(["broadcast","presence","postgres_changes"].includes(m))if("id"in w){const _=w.id,O=(c=w.filter)===null||c===void 0?void 0:c.event;return _&&((h=a.ids)===null||h===void 0?void 0:h.includes(_))&&(O==="*"||O?.toLocaleLowerCase()===((f=a.data)===null||f===void 0?void 0:f.type.toLocaleLowerCase()))}else{const _=(p=(g=w?.filter)===null||g===void 0?void 0:g.event)===null||p===void 0?void 0:p.toLocaleLowerCase();return _==="*"||_===((b=a?.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===m})}_notThisChannelEvent(r,a){const{close:l,error:o,leave:c,join:h}=_v;return a&&[l,o,c,h].includes(r)&&a!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((r,a,l)=>{if(typeof a=="object"&&"ids"in a){const o=a.data,{schema:c,table:h,commit_timestamp:f,type:g,errors:p}=o;return Object.assign(Object.assign({},{schema:c,table:h,commit_timestamp:f,eventType:g,new:{},old:{},errors:p}),this._getPayloadRecords(o))}return a})}copyBindings(r){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const a in r.bindings)for(const l of r.bindings[a])this._on(l.type,l.filter,l.callback)}static isFilterValueEqual(r,a){return(r??void 0)===(a??void 0)}_getPayloadRecords(r){const a={new:{},old:{}};return(r.type==="INSERT"||r.type==="UPDATE")&&(a.new=Ap(r.columns,r.record)),(r.type==="UPDATE"||r.type==="DELETE")&&(a.old=Ap(r.columns,r.old_record)),a}}class Q0{constructor(r,a){this.socket=new q0(r,a)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(r){this.socket.heartbeatCallback=r}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(r,a,l,o=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),o),this.socket.disconnect(()=>{r(),c("ok")},a,l)})}push(r){this.socket.push(r)}log(r,a,l){this.socket.log(r,a,l)}makeRef(){return this.socket.makeRef()}onOpen(r){this.socket.onOpen(r)}onClose(r){this.socket.onClose(r)}onError(r){this.socket.onError(r)}onMessage(r){this.socket.onMessage(r)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==_c.connecting}isDisconnecting(){return this.socket.connectionState()==_c.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Sp={HEARTBEAT_INTERVAL:25e3},Z0=[1e3,2e3,5e3,1e4],F0=1e4,W0=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class tw{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(r,a){var l;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new x0,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...h)=>c(...h):(...h)=>fetch(...h),!(!((l=a?.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey;const o=this._initializeOptions(a);this.socketAdapter=new Q0(r,o),this.httpEndpoint=Sv(r),this.fetch=this._resolveFetch(a?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(r){const a=r.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(r,a){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},r,a)}getChannels(){return this.channels}async removeChannel(r){const a=await r.unsubscribe();return a==="ok"&&r.teardown(),a}async removeAllChannels(){const r=this.channels.map(async l=>{const o=await l.unsubscribe();return l.teardown(),o}),a=await Promise.all(r);return await this.disconnect(),a}log(r,a,l){this.socketAdapter.log(r,a,l)}connectionState(){return this.socketAdapter.connectionState()||_c.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(r,a={config:{}}){const l=`realtime:${r}`,o=this.getChannels().find(c=>c.topic===l);if(o)return o;{const c=new Na(`realtime:${r}`,a,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(r){this.socketAdapter.push(r)}async setAuth(r=null){this._authPromise=this._performAuth(r);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(r){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(r)}_makeRef(){return this.socketAdapter.makeRef()}_remove(r){this.channels=this.channels.filter(a=>a.topic!==r.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(r=null){let a,l=!1;if(r)a=r,l=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),a=this.accessTokenValue}else a=this.accessTokenValue;l?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(o=>{const c={access_token:a,version:I0};a&&o.updateJoinPayload(c),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(_v.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(r="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${r}`,a)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(a=>{this.log("error","error waiting for auth on connect",a)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(r=>{r.ref&&r.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(r){return(a,l)=>{a=="sent"&&this._setAuthSafely(),r&&r(a,l)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const r=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(r),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(r){let a;if(r)a=r;else{const l=new Blob([W0],{type:"application/javascript"});a=URL.createObjectURL(l)}return a}_initializeOptions(r){var a,l,o,c,h,f,g,p,b,m,w;this.worker=(a=r?.worker)!==null&&a!==void 0?a:!1,this.accessToken=(l=r?.accessToken)!==null&&l!==void 0?l:null;const _={};_.timeout=(o=r?.timeout)!==null&&o!==void 0?o:T0,_.heartbeatIntervalMs=(c=r?.heartbeatIntervalMs)!==null&&c!==void 0?c:Sp.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(h=r?.disconnectOnEmptyChannelsAfterMs)!==null&&h!==void 0?h:2*((f=r?.heartbeatIntervalMs)!==null&&f!==void 0?f:Sp.HEARTBEAT_INTERVAL),_.transport=(g=r?.transport)!==null&&g!==void 0?g:w0.getWebSocketConstructor(),_.params=r?.params,_.logger=r?.logger,_.heartbeatCallback=this._wrapHeartbeatCallback(r?.heartbeatCallback),_.reconnectAfterMs=(p=r?.reconnectAfterMs)!==null&&p!==void 0?p:(M=>Z0[M-1]||F0);let O,x;const k=(b=r?.vsn)!==null&&b!==void 0?b:E0;switch(k){case S0:O=(M,P)=>P(JSON.stringify(M)),x=(M,P)=>P(JSON.parse(M));break;case wv:O=this.serializer.encode.bind(this.serializer),x=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${_.vsn}`)}if(_.vsn=k,_.encode=(m=r?.encode)!==null&&m!==void 0?m:O,_.decode=(w=r?.decode)!==null&&w!==void 0?w:x,_.beforeReconnect=this._reconnectAuth.bind(this),(r?.logLevel||r?.log_level)&&(this.logLevel=r.logLevel||r.log_level,_.params=Object.assign(Object.assign({},_.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=r?.workerUrl,_.autoSendHeartbeat=!this.worker}return _}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var La=class extends Error{constructor(n,r){super(n),this.name="IcebergError",this.status=r.status,this.icebergType=r.icebergType,this.icebergCode=r.icebergCode,this.details=r.details,this.isCommitStateUnknown=r.icebergType==="CommitStateUnknownException"||[500,502,504].includes(r.status)&&r.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function ew(n,r,a){const l=new URL(r,n);if(a)for(const[o,c]of Object.entries(a))c!==void 0&&l.searchParams.set(o,c);return l.toString()}async function rw(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function iw(n){const r=n.fetchImpl??globalThis.fetch;return{async request({method:a,path:l,query:o,body:c,headers:h}){const f=ew(n.baseUrl,l,o),g=await rw(n.auth),p=await r(f,{method:a,headers:{...c?{"Content-Type":"application/json"}:{},...g,...h},body:c?JSON.stringify(c):void 0}),b=await p.text(),m=(p.headers.get("content-type")||"").includes("application/json"),w=m&&b?JSON.parse(b):b;if(!p.ok){const _=m?w:void 0,O=_?.error;throw new La(O?.message??`Request failed with status ${p.status}`,{status:p.status,icebergType:O?.type,icebergCode:O?.code,details:_})}return{status:p.status,headers:p.headers,data:w}}}}function hl(n){return n.join("")}var nw=class{constructor(n,r=""){this.client=n,this.prefix=r}async listNamespaces(n){const r=n?{parent:hl(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:r})).data.namespaces.map(l=>({namespace:l}))}async createNamespace(n,r){const a={namespace:n.namespace,properties:r?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${hl(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${hl(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${hl(n.namespace)}`}),!0}catch(r){if(r instanceof La&&r.status===404)return!1;throw r}}async createNamespaceIfNotExists(n,r){try{return await this.createNamespace(n,r)}catch(a){if(a instanceof La&&a.status===409)return;throw a}}};function vn(n){return n.join("")}var aw=class{constructor(n,r="",a){this.client=n,this.prefix=r,this.accessDelegation=a}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables`})).data.identifiers}async createTable(n,r){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables`,body:r,headers:a})).data.metadata}async updateTable(n,r){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables/${n.name}`,body:r});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(n,r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String(r?.purge??!1)}})}async loadTable(n){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables/${n.name}`,headers:r})).data.metadata}async tableExists(n){const r={};this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${vn(n.namespace)}/tables/${n.name}`,headers:r}),!0}catch(a){if(a instanceof La&&a.status===404)return!1;throw a}}async createTableIfNotExists(n,r){try{return await this.createTable(n,r)}catch(a){if(a instanceof La&&a.status===409)return await this.loadTable({namespace:n.namespace,name:r.name});throw a}}},sw=class{constructor(n){let r="v1";n.catalogName&&(r+=`/${n.catalogName}`);const a=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=iw({baseUrl:a,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=n.accessDelegation?.join(","),this.namespaceOps=new nw(this.client,r),this.tableOps=new aw(this.client,r,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,r){return this.namespaceOps.createNamespace(n,r)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,r){return this.tableOps.createTable(n,r)}async updateTable(n,r){return this.tableOps.updateTable(n,r)}async dropTable(n,r){await this.tableOps.dropTable(n,r)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,r){return this.namespaceOps.createNamespaceIfNotExists(n,r)}async createTableIfNotExists(n,r){return this.tableOps.createTableIfNotExists(n,r)}};function Ua(n){"@babel/helpers - typeof";return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ua(n)}function lw(n,r){if(Ua(n)!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var l=a.call(n,r);if(Ua(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function ow(n){var r=lw(n,"string");return Ua(r)=="symbol"?r:r+""}function dw(n,r,a){return(r=ow(r))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function Ep(n,r){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,l)}return a}function rt(n){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Ep(Object(a),!0).forEach(function(l){dw(n,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Ep(Object(a)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(a,l))})}return n}var jl=class extends Error{constructor(n,r="storage",a,l){super(n),this.__isStorageError=!0,this.namespace=r,this.name=r==="vectors"?"StorageVectorsError":"StorageError",this.status=a,this.statusCode=l}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Dl(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Tc=class extends jl{constructor(n,r,a,l="storage"){super(n,l,r,a),this.name=l==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=r,this.statusCode=a}toJSON(){return rt({},super.toJSON())}},Tv=class extends jl{constructor(n,r,a="storage"){super(n,a),this.name=a==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=r}};function Il(n,r,a){const l=rt({},n),o=r.toLowerCase();for(const c of Object.keys(l))c.toLowerCase()===o&&delete l[c];return l[o]=a,l}function cw(n){const r={};for(const[a,l]of Object.entries(n))r[a.toLowerCase()]=l;return r}const uw=n=>n?(...r)=>n(...r):(...r)=>fetch(...r),hw=n=>{if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Cc=n=>{if(Array.isArray(n))return n.map(a=>Cc(a));if(typeof n=="function"||n!==Object(n))return n;const r={};return Object.entries(n).forEach(([a,l])=>{const o=a.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));r[o]=Cc(l)}),r},fw=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),Tp=n=>{var r;return n.msg||n.message||n.error_description||(typeof n.error=="string"?n.error:(r=n.error)===null||r===void 0?void 0:r.message)||JSON.stringify(n)},gw=async(n,r,a,l)=>{if(n!==null&&typeof n=="object"&&typeof n.json=="function"){const o=n;let c=parseInt(o.status,10);Number.isFinite(c)||(c=500),o.json().then(h=>{const f=h?.statusCode||h?.code||c+"";r(new Tc(Tp(h),c,f,l))}).catch(()=>{const h=c+"";r(new Tc(o.statusText||`HTTP ${c} error`,c,h,l))})}else r(new Tv(Tp(n),n,l))},pw=(n,r,a,l)=>{const o={method:n,headers:r?.headers||{}};if(n==="GET"||n==="HEAD"||!l)return rt(rt({},o),a);if(hw(l)){var c;const h=r?.headers||{};let f;for(const[g,p]of Object.entries(h))g.toLowerCase()==="content-type"&&(f=p);o.headers=Il(h,"Content-Type",(c=f)!==null&&c!==void 0?c:"application/json"),o.body=JSON.stringify(l)}else o.body=l;return r?.duplex&&(o.duplex=r.duplex),rt(rt({},o),a)};async function Ta(n,r,a,l,o,c,h){return new Promise((f,g)=>{n(a,pw(r,l,o,c)).then(p=>{if(!p.ok)throw p;if(l?.noResolveJson)return p;if(h==="vectors"){const b=p.headers.get("content-type");if(p.headers.get("content-length")==="0"||p.status===204)return{};if(!b||!b.includes("application/json"))return{}}return p.json()}).then(p=>f(p)).catch(p=>gw(p,g,l,h))})}function Cv(n="storage"){return{get:async(r,a,l,o)=>Ta(r,"GET",a,l,o,void 0,n),post:async(r,a,l,o,c)=>Ta(r,"POST",a,o,c,l,n),put:async(r,a,l,o,c)=>Ta(r,"PUT",a,o,c,l,n),head:async(r,a,l,o)=>Ta(r,"HEAD",a,rt(rt({},l),{},{noResolveJson:!0}),o,void 0,n),remove:async(r,a,l,o,c)=>Ta(r,"DELETE",a,o,c,l,n)}}const vw=Cv("storage"),{get:Ma,post:Fe,put:xc,head:mw,remove:Kc}=vw,Ne=Cv("vectors");var Rn=class{constructor(n,r={},a,l="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=cw(r),this.fetch=uw(a),this.namespace=l}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,r){return this.headers=Il(this.headers,n,r),this}async handleOperation(n){var r=this;try{return{data:await n(),error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(Dl(a))return{data:null,error:a};throw a}}},yw=class{constructor(n,r){this.downloadFn=n,this.shouldThrowOnError=r}then(n,r){return this.execute().then(n,r)}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(r){if(n.shouldThrowOnError)throw r;if(Dl(r))return{data:null,error:r};throw r}}};let xv;xv=Symbol.toStringTag;var bw=class{constructor(n,r){this.downloadFn=n,this.shouldThrowOnError=r,this[xv]="BlobDownloadBuilder",this.promise=null}asStream(){return new yw(this.downloadFn,this.shouldThrowOnError)}then(n,r){return this.getPromise().then(n,r)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(r){if(n.shouldThrowOnError)throw r;if(Dl(r))return{data:null,error:r};throw r}}};const Aw={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Cp={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var ww=class extends Rn{constructor(n,r={},a,l){super(n,r,l,"storage"),this.bucketId=a}async uploadOrUpdate(n,r,a,l){var o=this;return o.handleOperation(async()=>{let c;const h=rt(rt({},Cp),l);let f=rt(rt({},o.headers),n==="POST"&&{"x-upsert":String(h.upsert)});const g=h.metadata;if(typeof Blob<"u"&&a instanceof Blob?(c=new FormData,c.append("cacheControl",h.cacheControl),g&&c.append("metadata",o.encodeMetadata(g)),c.append("",a)):typeof FormData<"u"&&a instanceof FormData?(c=a,c.has("cacheControl")||c.append("cacheControl",h.cacheControl),g&&!c.has("metadata")&&c.append("metadata",o.encodeMetadata(g))):(c=a,f["cache-control"]=`max-age=${h.cacheControl}`,f["content-type"]=h.contentType,g&&(f["x-metadata"]=o.toBase64(o.encodeMetadata(g))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!h.duplex&&(h.duplex="half")),l?.headers)for(const[w,_]of Object.entries(l.headers))f=Il(f,w,_);const p=o._removeEmptyFolders(r),b=o._getFinalPath(p),m=await(n=="PUT"?xc:Fe)(o.fetch,`${o.url}/object/${b}`,c,rt({headers:f},h?.duplex?{duplex:h.duplex}:{}));return{path:p,id:m.Id,fullPath:m.Key}})}async upload(n,r,a){return this.uploadOrUpdate("POST",n,r,a)}async uploadToSignedUrl(n,r,a,l){var o=this;const c=o._removeEmptyFolders(n),h=o._getFinalPath(c),f=new URL(o.url+`/object/upload/sign/${h}`);return f.searchParams.set("token",r),o.handleOperation(async()=>{let g;const p=rt(rt({},Cp),l);let b=rt(rt({},o.headers),{"x-upsert":String(p.upsert)});const m=p.metadata;if(typeof Blob<"u"&&a instanceof Blob?(g=new FormData,g.append("cacheControl",p.cacheControl),m&&g.append("metadata",o.encodeMetadata(m)),g.append("",a)):typeof FormData<"u"&&a instanceof FormData?(g=a,g.has("cacheControl")||g.append("cacheControl",p.cacheControl),m&&!g.has("metadata")&&g.append("metadata",o.encodeMetadata(m))):(g=a,b["cache-control"]=`max-age=${p.cacheControl}`,b["content-type"]=p.contentType,m&&(b["x-metadata"]=o.toBase64(o.encodeMetadata(m))),(typeof ReadableStream<"u"&&g instanceof ReadableStream||g&&typeof g=="object"&&"pipe"in g&&typeof g.pipe=="function")&&!p.duplex&&(p.duplex="half")),l?.headers)for(const[w,_]of Object.entries(l.headers))b=Il(b,w,_);return{path:c,fullPath:(await xc(o.fetch,f.toString(),g,rt({headers:b},p?.duplex?{duplex:p.duplex}:{}))).Key}})}async createSignedUploadUrl(n,r){var a=this;return a.handleOperation(async()=>{let l=a._getFinalPath(n);const o=rt({},a.headers);r?.upsert&&(o["x-upsert"]="true");const c=await Fe(a.fetch,`${a.url}/object/upload/sign/${l}`,{},{headers:o}),h=new URL(a.url+c.url),f=h.searchParams.get("token");if(!f)throw new jl("No token returned by API");return{signedUrl:h.toString(),path:n,token:f}})}async update(n,r,a){return this.uploadOrUpdate("PUT",n,r,a)}async move(n,r,a){var l=this;return l.handleOperation(async()=>await Fe(l.fetch,`${l.url}/object/move`,{bucketId:l.bucketId,sourceKey:n,destinationKey:r,destinationBucket:a?.destinationBucket},{headers:l.headers}))}async copy(n,r,a){var l=this;return l.handleOperation(async()=>({path:(await Fe(l.fetch,`${l.url}/object/copy`,{bucketId:l.bucketId,sourceKey:n,destinationKey:r,destinationBucket:a?.destinationBucket},{headers:l.headers})).Key}))}async createSignedUrl(n,r,a){var l=this;return l.handleOperation(async()=>{let o=l._getFinalPath(n);const c=typeof a?.transform=="object"&&a.transform!==null&&Object.keys(a.transform).length>0;let h=await Fe(l.fetch,`${l.url}/object/sign/${o}`,rt({expiresIn:r},c?{transform:a.transform}:{}),{headers:l.headers});const f=new URLSearchParams;a?.download&&f.set("download",a.download===!0?"":a.download),a?.cacheNonce!=null&&f.set("cacheNonce",String(a.cacheNonce));const g=f.toString();return{signedUrl:encodeURI(`${l.url}${h.signedURL}${g?`&${g}`:""}`)}})}async createSignedUrls(n,r,a){var l=this;return l.handleOperation(async()=>{const o=await Fe(l.fetch,`${l.url}/object/sign/${l.bucketId}`,{expiresIn:r,paths:n},{headers:l.headers}),c=new URLSearchParams;a?.download&&c.set("download",a.download===!0?"":a.download),a?.cacheNonce!=null&&c.set("cacheNonce",String(a.cacheNonce));const h=c.toString();return o.map(f=>rt(rt({},f),{},{signedUrl:f.signedURL?encodeURI(`${l.url}${f.signedURL}${h?`&${h}`:""}`):null}))})}download(n,r,a){const l=typeof r?.transform=="object"&&r.transform!==null&&Object.keys(r.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;r?.transform&&this.applyTransformOptsToQuery(o,r.transform),r?.cacheNonce!=null&&o.set("cacheNonce",String(r.cacheNonce));const c=o.toString(),h=this._getFinalPath(n),f=()=>Ma(this.fetch,`${this.url}/${l}/${h}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},a);return new bw(f,this.shouldThrowOnError)}async info(n){var r=this;const a=r._getFinalPath(n);return r.handleOperation(async()=>Cc(await Ma(r.fetch,`${r.url}/object/info/${a}`,{headers:r.headers})))}async exists(n){var r=this;const a=r._getFinalPath(n);try{return await mw(r.fetch,`${r.url}/object/${a}`,{headers:r.headers}),{data:!0,error:null}}catch(o){if(r.shouldThrowOnError)throw o;if(Dl(o)){var l;const c=o instanceof Tc?o.status:o instanceof Tv?(l=o.originalError)===null||l===void 0?void 0:l.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:o}}throw o}}getPublicUrl(n,r){const a=this._getFinalPath(n),l=new URLSearchParams;r?.download&&l.set("download",r.download===!0?"":r.download),r?.transform&&this.applyTransformOptsToQuery(l,r.transform),r?.cacheNonce!=null&&l.set("cacheNonce",String(r.cacheNonce));const o=l.toString(),c=typeof r?.transform=="object"&&r.transform!==null&&Object.keys(r.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${a}`)+(o?`?${o}`:"")}}}async remove(n){var r=this;return r.handleOperation(async()=>await Kc(r.fetch,`${r.url}/object/${r.bucketId}`,{prefixes:n},{headers:r.headers}))}async list(n,r,a){var l=this;return l.handleOperation(async()=>{const o=rt(rt(rt({},Aw),r),{},{prefix:n||""});return await Fe(l.fetch,`${l.url}/object/list/${l.bucketId}`,o,{headers:l.headers},a)})}async listV2(n,r){var a=this;return a.handleOperation(async()=>{const l=rt({},n);return await Fe(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,l,{headers:a.headers},r)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,r){return r.width&&n.set("width",r.width.toString()),r.height&&n.set("height",r.height.toString()),r.resize&&n.set("resize",r.resize),r.format&&n.set("format",r.format),r.quality&&n.set("quality",r.quality.toString()),n}};const _w="2.105.1",qa={"X-Client-Info":`storage-js/${_w}`};var Iw=class extends Rn{constructor(n,r={},a,l){const o=new URL(n);l?.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const c=o.href.replace(/\/$/,""),h=rt(rt({},qa),r);super(c,h,a,"storage")}async listBuckets(n){var r=this;return r.handleOperation(async()=>{const a=r.listBucketOptionsToQueryString(n);return await Ma(r.fetch,`${r.url}/bucket${a}`,{headers:r.headers})})}async getBucket(n){var r=this;return r.handleOperation(async()=>await Ma(r.fetch,`${r.url}/bucket/${n}`,{headers:r.headers}))}async createBucket(n,r={public:!1}){var a=this;return a.handleOperation(async()=>await Fe(a.fetch,`${a.url}/bucket`,{id:n,name:n,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:a.headers}))}async updateBucket(n,r){var a=this;return a.handleOperation(async()=>await xc(a.fetch,`${a.url}/bucket/${n}`,{id:n,name:n,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:a.headers}))}async emptyBucket(n){var r=this;return r.handleOperation(async()=>await Fe(r.fetch,`${r.url}/bucket/${n}/empty`,{},{headers:r.headers}))}async deleteBucket(n){var r=this;return r.handleOperation(async()=>await Kc(r.fetch,`${r.url}/bucket/${n}`,{},{headers:r.headers}))}listBucketOptionsToQueryString(n){const r={};return n&&("limit"in n&&(r.limit=String(n.limit)),"offset"in n&&(r.offset=String(n.offset)),n.search&&(r.search=n.search),n.sortColumn&&(r.sortColumn=n.sortColumn),n.sortOrder&&(r.sortOrder=n.sortOrder)),Object.keys(r).length>0?"?"+new URLSearchParams(r).toString():""}},Sw=class extends Rn{constructor(n,r={},a){const l=n.replace(/\/$/,""),o=rt(rt({},qa),r);super(l,o,a,"storage")}async createBucket(n){var r=this;return r.handleOperation(async()=>await Fe(r.fetch,`${r.url}/bucket`,{name:n},{headers:r.headers}))}async listBuckets(n){var r=this;return r.handleOperation(async()=>{const a=new URLSearchParams;n?.limit!==void 0&&a.set("limit",n.limit.toString()),n?.offset!==void 0&&a.set("offset",n.offset.toString()),n?.sortColumn&&a.set("sortColumn",n.sortColumn),n?.sortOrder&&a.set("sortOrder",n.sortOrder),n?.search&&a.set("search",n.search);const l=a.toString(),o=l?`${r.url}/bucket?${l}`:`${r.url}/bucket`;return await Ma(r.fetch,o,{headers:r.headers})})}async deleteBucket(n){var r=this;return r.handleOperation(async()=>await Kc(r.fetch,`${r.url}/bucket/${n}`,{},{headers:r.headers}))}from(n){var r=this;if(!fw(n))throw new jl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new sw({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>r.headers},fetch:this.fetch}),l=this.shouldThrowOnError;return new Proxy(a,{get(o,c){const h=o[c];return typeof h!="function"?h:async(...f)=>{try{return{data:await h.apply(o,f),error:null}}catch(g){if(l)throw g;return{data:null,error:g}}}}})}},Ew=class extends Rn{constructor(n,r={},a){const l=n.replace(/\/$/,""),o=rt(rt({},qa),{},{"Content-Type":"application/json"},r);super(l,o,a,"vectors")}async createIndex(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/CreateIndex`,n,{headers:r.headers})||{})}async getIndex(n,r){var a=this;return a.handleOperation(async()=>await Ne.post(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:n,indexName:r},{headers:a.headers}))}async listIndexes(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/ListIndexes`,n,{headers:r.headers}))}async deleteIndex(n,r){var a=this;return a.handleOperation(async()=>await Ne.post(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:n,indexName:r},{headers:a.headers})||{})}},Tw=class extends Rn{constructor(n,r={},a){const l=n.replace(/\/$/,""),o=rt(rt({},qa),{},{"Content-Type":"application/json"},r);super(l,o,a,"vectors")}async putVectors(n){var r=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/PutVectors`,n,{headers:r.headers})||{})}async getVectors(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/GetVectors`,n,{headers:r.headers}))}async listVectors(n){var r=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/ListVectors`,n,{headers:r.headers}))}async queryVectors(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/QueryVectors`,n,{headers:r.headers}))}async deleteVectors(n){var r=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/DeleteVectors`,n,{headers:r.headers})||{})}},Cw=class extends Rn{constructor(n,r={},a){const l=n.replace(/\/$/,""),o=rt(rt({},qa),{},{"Content-Type":"application/json"},r);super(l,o,a,"vectors")}async createBucket(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:r.headers})||{})}async getBucket(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/GetVectorBucket`,{vectorBucketName:n},{headers:r.headers}))}async listBuckets(n={}){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/ListVectorBuckets`,n,{headers:r.headers}))}async deleteBucket(n){var r=this;return r.handleOperation(async()=>await Ne.post(r.fetch,`${r.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:r.headers})||{})}},xw=class extends Cw{constructor(n,r={}){super(n,r.headers||{},r.fetch)}from(n){return new Rw(this.url,this.headers,n,this.fetch)}async createBucket(n){var r=()=>super.createBucket,a=this;return r().call(a,n)}async getBucket(n){var r=()=>super.getBucket,a=this;return r().call(a,n)}async listBuckets(n={}){var r=()=>super.listBuckets,a=this;return r().call(a,n)}async deleteBucket(n){var r=()=>super.deleteBucket,a=this;return r().call(a,n)}},Rw=class extends Ew{constructor(n,r,a,l){super(n,r,l),this.vectorBucketName=a}async createIndex(n){var r=()=>super.createIndex,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(n={}){var r=()=>super.listIndexes,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(n){var r=()=>super.getIndex,a=this;return r().call(a,a.vectorBucketName,n)}async deleteIndex(n){var r=()=>super.deleteIndex,a=this;return r().call(a,a.vectorBucketName,n)}index(n){return new Ow(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},Ow=class extends Tw{constructor(n,r,a,l,o){super(n,r,o),this.vectorBucketName=a,this.indexName=l}async putVectors(n){var r=()=>super.putVectors,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(n){var r=()=>super.getVectors,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(n={}){var r=()=>super.listVectors,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(n){var r=()=>super.queryVectors,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(n){var r=()=>super.deleteVectors,a=this;return r().call(a,rt(rt({},n),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},kw=class extends Iw{constructor(n,r={},a,l){super(n,r,a,l)}from(n){return new ww(this.url,this.headers,n,this.fetch)}get vectors(){return new xw(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Sw(this.url+"/iceberg",this.headers,this.fetch)}};const Rv="2.105.1",_n=30*1e3,Rc=3,uc=Rc*_n,Nw="http://localhost:9999",jw="supabase.auth.token",Dw={"X-Client-Info":`gotrue-js/${Rv}`},Oc="X-Supabase-Api-Version",Ov={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Lw=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Uw=600*1e3;class za extends Error{constructor(r,a,l){super(r),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=l}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function V(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class Mw extends za{constructor(r,a,l){super(r,a,l),this.name="AuthApiError",this.status=a,this.code=l}}function zw(n){return V(n)&&n.name==="AuthApiError"}class We extends za{constructor(r,a){super(r),this.name="AuthUnknownError",this.originalError=a}}class Nr extends za{constructor(r,a,l,o){super(r,l,o),this.name=a,this.status=l}}class te extends Nr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function fl(n){return V(n)&&n.name==="AuthSessionMissingError"}class mn extends Nr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class gl extends Nr{constructor(r){super(r,"AuthInvalidCredentialsError",400,void 0)}}class pl extends Nr{constructor(r,a=null){super(r,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Bw(n){return V(n)&&n.name==="AuthImplicitGrantRedirectError"}class xp extends Nr{constructor(r,a=null){super(r,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Pw extends Nr{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class kc extends Nr{constructor(r,a){super(r,"AuthRetryableFetchError",a,void 0)}}function hc(n){return V(n)&&n.name==="AuthRetryableFetchError"}class Rp extends Nr{constructor(r,a,l){super(r,"AuthWeakPasswordError",a,"weak_password"),this.reasons=l}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Nc extends Nr{constructor(r){super(r,"AuthInvalidJwtError",400,"invalid_jwt")}}const Sl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Op=` 	
\r=`.split(""),Hw=(()=>{const n=new Array(128);for(let r=0;r<n.length;r+=1)n[r]=-1;for(let r=0;r<Op.length;r+=1)n[Op[r].charCodeAt(0)]=-2;for(let r=0;r<Sl.length;r+=1)n[Sl[r].charCodeAt(0)]=r;return n})();function kp(n,r,a){if(n!==null)for(r.queue=r.queue<<8|n,r.queuedBits+=8;r.queuedBits>=6;){const l=r.queue>>r.queuedBits-6&63;a(Sl[l]),r.queuedBits-=6}else if(r.queuedBits>0)for(r.queue=r.queue<<6-r.queuedBits,r.queuedBits=6;r.queuedBits>=6;){const l=r.queue>>r.queuedBits-6&63;a(Sl[l]),r.queuedBits-=6}}function kv(n,r,a){const l=Hw[n];if(l>-1)for(r.queue=r.queue<<6|l,r.queuedBits+=6;r.queuedBits>=8;)a(r.queue>>r.queuedBits-8&255),r.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function Np(n){const r=[],a=h=>{r.push(String.fromCodePoint(h))},l={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=h=>{$w(h,l,a)};for(let h=0;h<n.length;h+=1)kv(n.charCodeAt(h),o,c);return r.join("")}function Gw(n,r){if(n<=127){r(n);return}else if(n<=2047){r(192|n>>6),r(128|n&63);return}else if(n<=65535){r(224|n>>12),r(128|n>>6&63),r(128|n&63);return}else if(n<=1114111){r(240|n>>18),r(128|n>>12&63),r(128|n>>6&63),r(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function qw(n,r){for(let a=0;a<n.length;a+=1){let l=n.charCodeAt(a);if(l>55295&&l<=56319){const o=(l-55296)*1024&65535;l=(n.charCodeAt(a+1)-56320&65535|o)+65536,a+=1}Gw(l,r)}}function $w(n,r,a){if(r.utf8seq===0){if(n<=127){a(n);return}for(let l=1;l<6;l+=1)if((n>>7-l&1)===0){r.utf8seq=l;break}if(r.utf8seq===2)r.codepoint=n&31;else if(r.utf8seq===3)r.codepoint=n&15;else if(r.utf8seq===4)r.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");r.utf8seq-=1}else if(r.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");r.codepoint=r.codepoint<<6|n&63,r.utf8seq-=1,r.utf8seq===0&&a(r.codepoint)}}function En(n){const r=[],a={queue:0,queuedBits:0},l=o=>{r.push(o)};for(let o=0;o<n.length;o+=1)kv(n.charCodeAt(o),a,l);return new Uint8Array(r)}function Vw(n){const r=[];return qw(n,a=>r.push(a)),new Uint8Array(r)}function Ri(n){const r=[],a={queue:0,queuedBits:0},l=o=>{r.push(o)};return n.forEach(o=>kp(o,a,l)),kp(null,a,l),r.join("")}function Kw(n){return Math.round(Date.now()/1e3)+n}function Yw(){return Symbol("auth-callback")}const le=()=>typeof window<"u"&&typeof document<"u",Ei={tested:!1,writable:!1},Nv=()=>{if(!le())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ei.tested)return Ei.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),Ei.tested=!0,Ei.writable=!0}catch{Ei.tested=!0,Ei.writable=!1}return Ei.writable};function Jw(n){const r={},a=new URL(n);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((o,c)=>{r[c]=o})}catch{}return a.searchParams.forEach((l,o)=>{r[o]=l}),r}const jv=n=>n?(...r)=>n(...r):(...r)=>fetch(...r),Xw=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",In=async(n,r,a)=>{await n.setItem(r,JSON.stringify(a))},Ti=async(n,r)=>{const a=await n.getItem(r);if(!a)return null;try{return JSON.parse(a)}catch{return a}},se=async(n,r)=>{await n.removeItem(r)};class Ll{constructor(){this.promise=new Ll.promiseConstructor((r,a)=>{this.resolve=r,this.reject=a})}}Ll.promiseConstructor=Promise;function vl(n){const r=n.split(".");if(r.length!==3)throw new Nc("Invalid JWT structure");for(let l=0;l<r.length;l++)if(!Lw.test(r[l]))throw new Nc("JWT not in base64url format");return{header:JSON.parse(Np(r[0])),payload:JSON.parse(Np(r[1])),signature:En(r[2]),raw:{header:r[0],payload:r[1]}}}async function Qw(n){return await new Promise(r=>{setTimeout(()=>r(null),n)})}function Zw(n,r){return new Promise((l,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const h=await n(c);if(!r(c,null,h)){l(h);return}}catch(h){if(!r(c,h)){o(h);return}}})()})}function Fw(n){return("0"+n.toString(16)).substr(-2)}function Ww(){const r=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=a.length;let o="";for(let c=0;c<56;c++)o+=a.charAt(Math.floor(Math.random()*l));return o}return crypto.getRandomValues(r),Array.from(r,Fw).join("")}async function t_(n){const a=new TextEncoder().encode(n),l=await crypto.subtle.digest("SHA-256",a),o=new Uint8Array(l);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function e_(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const a=await t_(n);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function yn(n,r,a=!1){const l=Ww();let o=l;a&&(o+="/recovery"),await In(n,`${r}-code-verifier`,o);const c=await e_(l);return[c,l===c?"plain":"s256"]}const r_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function i_(n){const r=n.headers.get(Oc);if(!r||!r.match(r_))return null;try{return new Date(`${r}T00:00:00.0Z`)}catch{return null}}function n_(n){if(!n)throw new Error("Missing exp claim");const r=Math.floor(Date.now()/1e3);if(n<=r)throw new Error("JWT has expired")}function a_(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const s_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function xr(n){if(!s_.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ze(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function fc(){const n={};return new Proxy(n,{get:(r,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const l=a.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(r,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(r,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function l_(n,r){return new Proxy(n,{get:(a,l,o)=>{if(l==="__isInsecureUserWarningProxy")return!0;if(typeof l=="symbol"){const c=l.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,l,o)}return!r.value&&typeof l=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),r.value=!0),Reflect.get(a,l,o)}})}function jp(n){return JSON.parse(JSON.stringify(n))}const Ci=n=>n.msg||n.message||n.error_description||n.error||JSON.stringify(n),o_=[502,503,504,520,521,522,523,524,530];async function Dp(n){var r;if(!Xw(n))throw new kc(Ci(n),0);if(o_.includes(n.status))throw new kc(Ci(n),n.status);let a;try{a=await n.json()}catch(c){throw new We(Ci(c),c)}let l;const o=i_(n);if(o&&o.getTime()>=Ov["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?l=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(l=a.error_code),l){if(l==="weak_password")throw new Rp(Ci(a),n.status,((r=a.weak_password)===null||r===void 0?void 0:r.reasons)||[]);if(l==="session_not_found")throw new te}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((c,h)=>c&&typeof h=="string",!0))throw new Rp(Ci(a),n.status,a.weak_password.reasons);throw new Mw(Ci(a),n.status||500,l)}const d_=(n,r,a,l)=>{const o={method:n,headers:r?.headers||{}};return n==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},r?.headers),o.body=JSON.stringify(l),Object.assign(Object.assign({},o),a))};async function X(n,r,a,l){var o;const c=Object.assign({},l?.headers);c[Oc]||(c[Oc]=Ov["2024-01-01"].name),l?.jwt&&(c.Authorization=`Bearer ${l.jwt}`);const h=(o=l?.query)!==null&&o!==void 0?o:{};l?.redirectTo&&(h.redirect_to=l.redirectTo);const f=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",g=await c_(n,r,a+f,{headers:c,noResolveJson:l?.noResolveJson},{},l?.body);return l?.xform?l?.xform(g):{data:Object.assign({},g),error:null}}async function c_(n,r,a,l,o,c){const h=d_(r,l,o,c);let f;try{f=await n(a,Object.assign({},h))}catch(g){throw console.error(g),new kc(Ci(g),0)}if(f.ok||await Dp(f),l?.noResolveJson)return f;try{return await f.json()}catch(g){await Dp(g)}}function Ke(n){var r;let a=null;f_(n)&&(a=Object.assign({},n),n.expires_at||(a.expires_at=Kw(n.expires_in)));const l=(r=n.user)!==null&&r!==void 0?r:n;return{data:{session:a,user:l},error:null}}function Lp(n){const r=Ke(n);return!r.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((a,l)=>a&&typeof l=="string",!0)&&(r.data.weak_password=n.weak_password),r}function ai(n){var r;return{data:{user:(r=n.user)!==null&&r!==void 0?r:n},error:null}}function u_(n){return{data:n,error:null}}function h_(n){const{action_link:r,email_otp:a,hashed_token:l,redirect_to:o,verification_type:c}=n,h=Nl(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),f={action_link:r,email_otp:a,hashed_token:l,redirect_to:o,verification_type:c},g=Object.assign({},h);return{data:{properties:f,user:g},error:null}}function Up(n){return n}function f_(n){return n.access_token&&n.refresh_token&&n.expires_in}const gc=["global","local","others"];class g_{constructor({url:r="",headers:a={},fetch:l,experimental:o}){this.url=r,this.headers=a,this.fetch=jv(l),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(r,a=gc[0]){if(gc.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${gc.join(", ")}`);try{return await X(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:r,noResolveJson:!0}),{data:null,error:null}}catch(l){if(V(l))return{data:null,error:l};throw l}}async inviteUserByEmail(r,a={}){try{return await X(this.fetch,"POST",`${this.url}/invite`,{body:{email:r,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:ai})}catch(l){if(V(l))return{data:{user:null},error:l};throw l}}async generateLink(r){try{const{options:a}=r,l=Nl(r,["options"]),o=Object.assign(Object.assign({},l),a);return"newEmail"in l&&(o.new_email=l?.newEmail,delete o.newEmail),await X(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:h_,redirectTo:a?.redirectTo})}catch(a){if(V(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(r){try{return await X(this.fetch,"POST",`${this.url}/admin/users`,{body:r,headers:this.headers,xform:ai})}catch(a){if(V(a))return{data:{user:null},error:a};throw a}}async listUsers(r){var a,l,o,c,h,f,g;try{const p={nextPage:null,lastPage:0,total:0},b=await X(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(a=r?.page)===null||a===void 0?void 0:a.toString())!==null&&l!==void 0?l:"",per_page:(c=(o=r?.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Up});if(b.error)throw b.error;const m=await b.json(),w=(h=b.headers.get("x-total-count"))!==null&&h!==void 0?h:0,_=(g=(f=b.headers.get("link"))===null||f===void 0?void 0:f.split(","))!==null&&g!==void 0?g:[];return _.length>0&&(_.forEach(O=>{const x=parseInt(O.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(O.split(";")[1].split("=")[1]);p[`${k}Page`]=x}),p.total=parseInt(w)),{data:Object.assign(Object.assign({},m),p),error:null}}catch(p){if(V(p))return{data:{users:[]},error:p};throw p}}async getUserById(r){xr(r);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${r}`,{headers:this.headers,xform:ai})}catch(a){if(V(a))return{data:{user:null},error:a};throw a}}async updateUserById(r,a){xr(r);try{return await X(this.fetch,"PUT",`${this.url}/admin/users/${r}`,{body:a,headers:this.headers,xform:ai})}catch(l){if(V(l))return{data:{user:null},error:l};throw l}}async deleteUser(r,a=!1){xr(r);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${r}`,{headers:this.headers,body:{should_soft_delete:a},xform:ai})}catch(l){if(V(l))return{data:{user:null},error:l};throw l}}async _listFactors(r){xr(r.userId);try{const{data:a,error:l}=await X(this.fetch,"GET",`${this.url}/admin/users/${r.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:a,error:l}}catch(a){if(V(a))return{data:null,error:a};throw a}}async _deleteFactor(r){xr(r.userId),xr(r.id);try{return{data:await X(this.fetch,"DELETE",`${this.url}/admin/users/${r.userId}/factors/${r.id}`,{headers:this.headers}),error:null}}catch(a){if(V(a))return{data:null,error:a};throw a}}async _listOAuthClients(r){var a,l,o,c,h,f,g;try{const p={nextPage:null,lastPage:0,total:0},b=await X(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(a=r?.page)===null||a===void 0?void 0:a.toString())!==null&&l!==void 0?l:"",per_page:(c=(o=r?.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Up});if(b.error)throw b.error;const m=await b.json(),w=(h=b.headers.get("x-total-count"))!==null&&h!==void 0?h:0,_=(g=(f=b.headers.get("link"))===null||f===void 0?void 0:f.split(","))!==null&&g!==void 0?g:[];return _.length>0&&(_.forEach(O=>{const x=parseInt(O.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(O.split(";")[1].split("=")[1]);p[`${k}Page`]=x}),p.total=parseInt(w)),{data:Object.assign(Object.assign({},m),p),error:null}}catch(p){if(V(p))return{data:{clients:[]},error:p};throw p}}async _createOAuthClient(r){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:r,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _getOAuthClient(r){try{return await X(this.fetch,"GET",`${this.url}/admin/oauth/clients/${r}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _updateOAuthClient(r,a){try{return await X(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${r}`,{body:a,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(V(l))return{data:null,error:l};throw l}}async _deleteOAuthClient(r){try{return await X(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${r}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(V(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(r){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients/${r}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _listCustomProviders(r){try{const a={};return r?.type&&(a.type=r.type),await X(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:a,xform:l=>{var o;return{data:{providers:(o=l?.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(a){if(V(a))return{data:{providers:[]},error:a};throw a}}async _createCustomProvider(r){try{return await X(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:r,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _getCustomProvider(r){try{return await X(this.fetch,"GET",`${this.url}/admin/custom-providers/${r}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _updateCustomProvider(r,a){try{return await X(this.fetch,"PUT",`${this.url}/admin/custom-providers/${r}`,{body:a,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(V(l))return{data:null,error:l};throw l}}async _deleteCustomProvider(r){try{return await X(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${r}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(V(a))return{data:null,error:a};throw a}}async _adminListPasskeys(r){Ze(this.experimental),xr(r.userId);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${r.userId}/passkeys`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(V(a))return{data:null,error:a};throw a}}async _adminDeletePasskey(r){Ze(this.experimental),xr(r.userId),xr(r.passkeyId);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${r.userId}/passkeys/${r.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(V(a))return{data:null,error:a};throw a}}}function Mp(n={}){return{getItem:r=>n[r]||null,setItem:(r,a)=>{n[r]=a},removeItem:r=>{delete n[r]}}}const sr={debug:!!(globalThis&&Nv()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Dv extends Error{constructor(r){super(r),this.isAcquireTimeout=!0}}class zp extends Dv{}async function p_(n,r,a){sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",n,r);const l=new globalThis.AbortController;let o;r>0&&(o=setTimeout(()=>{l.abort(),sr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",n)},r)),await Promise.resolve();try{return await globalThis.navigator.locks.request(n,r===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:l.signal},async c=>{if(c){clearTimeout(o),sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",n,c.name);try{return await a()}finally{sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",n,c.name)}}else{if(r===0)throw sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",n),new zp(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);if(sr.debug)try{const h=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(h,null,"  "))}catch(h){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",h)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),clearTimeout(o),await a()}})}catch(c){if(r>0&&clearTimeout(o),c?.name==="AbortError"&&r>0){if(l.signal.aborted)return sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",n),console.warn(`@supabase/gotrue-js: Lock "${n}" was not released within ${r}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(n,{mode:"exclusive",steal:!0},async h=>{if(h){sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)",n,h.name);try{return await a()}finally{sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released (stolen)",n,h.name)}}else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"),await a()}));throw sr.debug&&console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request",n),new zp(`Lock "${n}" was released because another request stole it`)}throw c}}function v_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Lv(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function m_(n){return parseInt(n,16)}function y_(n){const r=new TextEncoder().encode(n);return"0x"+Array.from(r,l=>l.toString(16).padStart(2,"0")).join("")}function b_(n){var r;const{chainId:a,domain:l,expirationTime:o,issuedAt:c=new Date,nonce:h,notBefore:f,requestId:g,resources:p,scheme:b,uri:m,version:w}=n;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!l)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(h&&h.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);if(!m)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(w!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${w}`);if(!((r=n.statement)===null||r===void 0)&&r.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const _=Lv(n.address),O=b?`${b}://${l}`:l,x=n.statement?`${n.statement}
`:"",k=`${O} wants you to sign in with your Ethereum account:
${_}

${x}`;let M=`URI: ${m}
Version: ${w}
Chain ID: ${a}${h?`
Nonce: ${h}`:""}
Issued At: ${c.toISOString()}`;if(o&&(M+=`
Expiration Time: ${o.toISOString()}`),f&&(M+=`
Not Before: ${f.toISOString()}`),g&&(M+=`
Request ID: ${g}`),p){let P=`
Resources:`;for(const R of p){if(!R||typeof R!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${R}`);P+=`
- ${R}`}M+=P}return`${k}
${M}`}class Jt extends Error{constructor({message:r,code:a,cause:l,name:o}){var c;super(r,{cause:l}),this.__isWebAuthnError=!0,this.name=(c=o??(l instanceof Error?l.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=a}}class El extends Jt{constructor(r,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:r}),this.name="WebAuthnUnknownError",this.originalError=a}}function A_({error:n,options:r}){var a,l,o;const{publicKey:c}=r;if(!c)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(r.signal instanceof AbortSignal)return new Jt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((a=c.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new Jt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(r.mediation==="conditional"&&((l=c.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new Jt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new Jt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new Jt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new Jt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return c.pubKeyCredParams.filter(f=>f.type==="public-key").length===0?new Jt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new Jt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const h=window.location.hostname;if(Uv(h)){if(c.rp.id!==h)return new Jt({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new Jt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new Jt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new Jt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new Jt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function w_({error:n,options:r}){const{publicKey:a}=r;if(!a)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(r.signal instanceof AbortSignal)return new Jt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new Jt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const l=window.location.hostname;if(Uv(l)){if(a.rpId!==l)return new Jt({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new Jt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new Jt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new Jt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class __{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const r=new AbortController;return this.controller=r,r.signal}cancelCeremony(){if(this.controller){const r=new Error("Manually cancelling existing WebAuthn API call");r.name="AbortError",this.controller.abort(r),this.controller=void 0}}}const jc=new __;function Bp(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:r,user:a,excludeCredentials:l}=n,o=Nl(n,["challenge","user","excludeCredentials"]),c=En(r).buffer,h=Object.assign(Object.assign({},a),{id:En(a.id).buffer}),f=Object.assign(Object.assign({},o),{challenge:c,user:h});if(l&&l.length>0){f.excludeCredentials=new Array(l.length);for(let g=0;g<l.length;g++){const p=l[g];f.excludeCredentials[g]=Object.assign(Object.assign({},p),{id:En(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return f}function Pp(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:r,allowCredentials:a}=n,l=Nl(n,["challenge","allowCredentials"]),o=En(r).buffer,c=Object.assign(Object.assign({},l),{challenge:o});if(a&&a.length>0){c.allowCredentials=new Array(a.length);for(let h=0;h<a.length;h++){const f=a[h];c.allowCredentials[h]=Object.assign(Object.assign({},f),{id:En(f.id).buffer,type:f.type||"public-key",transports:f.transports})}}return c}function Hp(n){var r;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const a=n;return{id:n.id,rawId:n.id,response:{attestationObject:Ri(new Uint8Array(n.response.attestationObject)),clientDataJSON:Ri(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(r=a.authenticatorAttachment)!==null&&r!==void 0?r:void 0}}function Gp(n){var r;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const a=n,l=n.getClientExtensionResults(),o=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:Ri(new Uint8Array(o.authenticatorData)),clientDataJSON:Ri(new Uint8Array(o.clientDataJSON)),signature:Ri(new Uint8Array(o.signature)),userHandle:o.userHandle?Ri(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:l,authenticatorAttachment:(r=a.authenticatorAttachment)!==null&&r!==void 0?r:void 0}}function Uv(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function Tl(){var n,r;return!!(le()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((r=navigator?.credentials)===null||r===void 0?void 0:r.get)=="function")}async function Mv(n){try{const r=await navigator.credentials.create(n);return r?r instanceof PublicKeyCredential?{data:r,error:null}:{data:null,error:new El("Browser returned unexpected credential type",r)}:{data:null,error:new El("Empty credential response",r)}}catch(r){return{data:null,error:A_({error:r,options:n})}}}async function zv(n){try{const r=await navigator.credentials.get(n);return r?r instanceof PublicKeyCredential?{data:r,error:null}:{data:null,error:new El("Browser returned unexpected credential type",r)}:{data:null,error:new El("Empty credential response",r)}}catch(r){return{data:null,error:w_({error:r,options:n})}}}const I_={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},S_={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Cl(...n){const r=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),a=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),l={};for(const o of n)if(o)for(const c in o){const h=o[c];if(h!==void 0)if(Array.isArray(h))l[c]=h;else if(a(h))l[c]=h;else if(r(h)){const f=l[c];r(f)?l[c]=Cl(f,h):l[c]=Cl(h)}else l[c]=h}return l}function E_(n,r){return Cl(I_,n,r||{})}function T_(n,r){return Cl(S_,n,r||{})}class C_{constructor(r){this.client=r,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(r){return this.client.mfa.enroll(Object.assign(Object.assign({},r),{factorType:"webauthn"}))}async _challenge({factorId:r,webauthn:a,friendlyName:l,signal:o},c){var h;try{const{data:f,error:g}=await this.client.mfa.challenge({factorId:r,webauthn:a});if(!f)return{data:null,error:g};const p=o??jc.createNewAbortSignal();if(f.webauthn.type==="create"){const{user:b}=f.webauthn.credential_options.publicKey;if(!b.name){const m=l;if(m)b.name=`${b.id}:${m}`;else{const _=(await this.client.getUser()).data.user,O=((h=_?.user_metadata)===null||h===void 0?void 0:h.name)||_?.email||_?.id||"User";b.name=`${b.id}:${O}`}}b.displayName||(b.displayName=b.name)}switch(f.webauthn.type){case"create":{const b=E_(f.webauthn.credential_options.publicKey,c?.create),{data:m,error:w}=await Mv({publicKey:b,signal:p});return m?{data:{factorId:r,challengeId:f.id,webauthn:{type:f.webauthn.type,credential_response:m}},error:null}:{data:null,error:w}}case"request":{const b=T_(f.webauthn.credential_options.publicKey,c?.request),{data:m,error:w}=await zv(Object.assign(Object.assign({},f.webauthn.credential_options),{publicKey:b,signal:p}));return m?{data:{factorId:r,challengeId:f.id,webauthn:{type:f.webauthn.type,credential_response:m}},error:null}:{data:null,error:w}}}}catch(f){return V(f)?{data:null,error:f}:{data:null,error:new We("Unexpected error in challenge",f)}}}async _verify({challengeId:r,factorId:a,webauthn:l}){return this.client.mfa.verify({factorId:a,challengeId:r,webauthn:l})}async _authenticate({factorId:r,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new za("rpId is required for WebAuthn authentication")};try{if(!Tl())return{data:null,error:new We("Browser does not support WebAuthn",null)};const{data:h,error:f}=await this.challenge({factorId:r,webauthn:{rpId:a,rpOrigins:l},signal:o},{request:c});if(!h)return{data:null,error:f};const{webauthn:g}=h;return this._verify({factorId:r,challengeId:h.challengeId,webauthn:{type:g.type,rpId:a,rpOrigins:l,credential_response:g.credential_response}})}catch(h){return V(h)?{data:null,error:h}:{data:null,error:new We("Unexpected error in authenticate",h)}}}async _register({friendlyName:r,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new za("rpId is required for WebAuthn registration")};try{if(!Tl())return{data:null,error:new We("Browser does not support WebAuthn",null)};const{data:h,error:f}=await this._enroll({friendlyName:r});if(!h)return await this.client.mfa.listFactors().then(b=>{var m;return(m=b.data)===null||m===void 0?void 0:m.all.find(w=>w.factor_type==="webauthn"&&w.friendly_name===r&&w.status!=="unverified")}).then(b=>b?this.client.mfa.unenroll({factorId:b?.id}):void 0),{data:null,error:f};const{data:g,error:p}=await this._challenge({factorId:h.id,friendlyName:h.friendly_name,webauthn:{rpId:a,rpOrigins:l},signal:o},{create:c});return g?this._verify({factorId:h.id,challengeId:g.challengeId,webauthn:{rpId:a,rpOrigins:l,type:g.webauthn.type,credential_response:g.webauthn.credential_response}}):{data:null,error:p}}catch(h){return V(h)?{data:null,error:h}:{data:null,error:new We("Unexpected error in register",h)}}}}v_();const x_={url:Nw,storageKey:jw,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Dw,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};async function qp(n,r,a){return await a()}const bn={};class Ba{get jwks(){var r,a;return(a=(r=bn[this.storageKey])===null||r===void 0?void 0:r.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(r){bn[this.storageKey]=Object.assign(Object.assign({},bn[this.storageKey]),{jwks:r})}get jwks_cached_at(){var r,a;return(a=(r=bn[this.storageKey])===null||r===void 0?void 0:r.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(r){bn[this.storageKey]=Object.assign(Object.assign({},bn[this.storageKey]),{cachedAt:r})}constructor(r){var a,l,o,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const h=Object.assign(Object.assign({},x_),r);if(this.storageKey=h.storageKey,this.instanceID=(a=Ba.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,Ba.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!h.debug,typeof h.debug=="function"&&(this.logger=h.debug),this.instanceID>0&&le()){const f=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(f),this.logDebugMessages&&console.trace(f)}if(this.persistSession=h.persistSession,this.autoRefreshToken=h.autoRefreshToken,this.experimental=(l=h.experimental)!==null&&l!==void 0?l:{},this.admin=new g_({url:h.url,headers:h.headers,fetch:h.fetch,experimental:this.experimental}),this.url=h.url,this.headers=h.headers,this.fetch=jv(h.fetch),this.lock=h.lock||qp,this.detectSessionInUrl=h.detectSessionInUrl,this.flowType=h.flowType,this.hasCustomAuthorizationHeader=h.hasCustomAuthorizationHeader,this.throwOnError=h.throwOnError,this.lockAcquireTimeout=h.lockAcquireTimeout,h.lock?this.lock=h.lock:this.persistSession&&le()&&(!((o=globalThis?.navigator)===null||o===void 0)&&o.locks)?this.lock=p_:this.lock=qp,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new C_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(h.storage?this.storage=h.storage:Nv()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Mp(this.memoryStorage)),h.userStorage&&(this.userStorage=h.userStorage)):(this.memoryStorage={},this.storage=Mp(this.memoryStorage)),le()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f);try{await this._notifyAllSubscribers(f.data.event,f.data.session,!1)}catch(g){this._debug("#broadcastChannel","error",g)}})}h.skipAutoInitialize||this.initialize().catch(f=>{this._debug("#initialize()","error",f)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(r){if(this.throwOnError&&r&&r.error)throw r.error;return r}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Rv}) ${new Date().toISOString()}`}_debug(...r){return this.logDebugMessages&&this.logger(this._logPrefix(),...r),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var r;try{let a={},l="none";if(le()&&(a=Jw(window.location.href),this._isImplicitGrantCallback(a)?l="implicit":await this._isPKCECallback(a)&&(l="pkce")),le()&&this.detectSessionInUrl&&l!=="none"){const{data:o,error:c}=await this._getSessionFromURL(a,l);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),Bw(c)){const g=(r=c.details)===null||r===void 0?void 0:r.code;if(g==="identity_already_exists"||g==="identity_not_found"||g==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:h,redirectType:f}=o;return this._debug("#_initialize()","detected session in URL",h,"redirect type",f),await this._saveSession(h),setTimeout(async()=>{f==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return V(a)?this._returnResult({error:a}):this._returnResult({error:new We("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(r){var a,l,o;try{const c=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(a=r?.options)===null||a===void 0?void 0:a.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(o=r?.options)===null||o===void 0?void 0:o.captchaToken}},xform:Ke}),{data:h,error:f}=c;if(f||!h)return this._returnResult({data:{user:null,session:null},error:f});const g=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:p,session:g},error:null})}catch(c){if(V(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(r){var a,l,o;try{let c;if("email"in r){const{email:b,password:m,options:w}=r;let _=null,O=null;this.flowType==="pkce"&&([_,O]=await yn(this.storage,this.storageKey)),c=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:w?.emailRedirectTo,body:{email:b,password:m,data:(a=w?.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:w?.captchaToken},code_challenge:_,code_challenge_method:O},xform:Ke})}else if("phone"in r){const{phone:b,password:m,options:w}=r;c=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:b,password:m,data:(l=w?.data)!==null&&l!==void 0?l:{},channel:(o=w?.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:w?.captchaToken}},xform:Ke})}else throw new gl("You must provide either an email or phone number and a password");const{data:h,error:f}=c;if(f||!h)return await se(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:f});const g=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:p,session:g},error:null})}catch(c){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(r){try{let a;if("email"in r){const{email:c,password:h,options:f}=r;a=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:h,gotrue_meta_security:{captcha_token:f?.captchaToken}},xform:Lp})}else if("phone"in r){const{phone:c,password:h,options:f}=r;a=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:h,gotrue_meta_security:{captcha_token:f?.captchaToken}},xform:Lp})}else throw new gl("You must provide either an email or phone number and a password");const{data:l,error:o}=a;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!l||!l.session||!l.user){const c=new mn;return this._returnResult({data:{user:null,session:null},error:c})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:o})}catch(a){if(V(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(r){var a,l,o,c;return await this._handleProviderSignIn(r.provider,{redirectTo:(a=r.options)===null||a===void 0?void 0:a.redirectTo,scopes:(l=r.options)===null||l===void 0?void 0:l.scopes,queryParams:(o=r.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=r.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(r){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(r))}async signInWithWeb3(r){const{chain:a}=r;switch(a){case"ethereum":return await this.signInWithEthereum(r);case"solana":return await this.signInWithSolana(r);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(r){var a,l,o,c,h,f,g,p,b,m,w;let _,O;if("message"in r)_=r.message,O=r.signature;else{const{chain:x,wallet:k,statement:M,options:P}=r;let R;if(le())if(typeof k=="object")R=k;else{const St=window;if("ethereum"in St&&typeof St.ethereum=="object"&&"request"in St.ethereum&&typeof St.ethereum.request=="function")R=St.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof k!="object"||!P?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");R=k}const q=new URL((a=P?.url)!==null&&a!==void 0?a:window.location.href),F=await R.request({method:"eth_requestAccounts"}).then(St=>St).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!F||F.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const W=Lv(F[0]);let J=(l=P?.signInWithEthereum)===null||l===void 0?void 0:l.chainId;if(!J){const St=await R.request({method:"eth_chainId"});J=m_(St)}const It={domain:q.host,address:W,statement:M,uri:q.href,version:"1",chainId:J,nonce:(o=P?.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(h=(c=P?.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&h!==void 0?h:new Date,expirationTime:(f=P?.signInWithEthereum)===null||f===void 0?void 0:f.expirationTime,notBefore:(g=P?.signInWithEthereum)===null||g===void 0?void 0:g.notBefore,requestId:(p=P?.signInWithEthereum)===null||p===void 0?void 0:p.requestId,resources:(b=P?.signInWithEthereum)===null||b===void 0?void 0:b.resources};_=b_(It),O=await R.request({method:"personal_sign",params:[y_(_),W]})}try{const{data:x,error:k}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:_,signature:O},!((m=r.options)===null||m===void 0)&&m.captchaToken?{gotrue_meta_security:{captcha_token:(w=r.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:Ke});if(k)throw k;if(!x||!x.session||!x.user){const M=new mn;return this._returnResult({data:{user:null,session:null},error:M})}return x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),this._returnResult({data:Object.assign({},x),error:k})}catch(x){if(V(x))return this._returnResult({data:{user:null,session:null},error:x});throw x}}async signInWithSolana(r){var a,l,o,c,h,f,g,p,b,m,w,_;let O,x;if("message"in r)O=r.message,x=r.signature;else{const{chain:k,wallet:M,statement:P,options:R}=r;let q;if(le())if(typeof M=="object")q=M;else{const W=window;if("solana"in W&&typeof W.solana=="object"&&("signIn"in W.solana&&typeof W.solana.signIn=="function"||"signMessage"in W.solana&&typeof W.solana.signMessage=="function"))q=W.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof M!="object"||!R?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");q=M}const F=new URL((a=R?.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in q&&q.signIn){const W=await q.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},R?.signInWithSolana),{version:"1",domain:F.host,uri:F.href}),P?{statement:P}:null));let J;if(Array.isArray(W)&&W[0]&&typeof W[0]=="object")J=W[0];else if(W&&typeof W=="object"&&"signedMessage"in W&&"signature"in W)J=W;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in J&&"signature"in J&&(typeof J.signedMessage=="string"||J.signedMessage instanceof Uint8Array)&&J.signature instanceof Uint8Array)O=typeof J.signedMessage=="string"?J.signedMessage:new TextDecoder().decode(J.signedMessage),x=J.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in q)||typeof q.signMessage!="function"||!("publicKey"in q)||typeof q!="object"||!q.publicKey||!("toBase58"in q.publicKey)||typeof q.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");O=[`${F.host} wants you to sign in with your Solana account:`,q.publicKey.toBase58(),...P?["",P,""]:[""],"Version: 1",`URI: ${F.href}`,`Issued At: ${(o=(l=R?.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=R?.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${R.signInWithSolana.notBefore}`]:[],...!((h=R?.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${R.signInWithSolana.expirationTime}`]:[],...!((f=R?.signInWithSolana)===null||f===void 0)&&f.chainId?[`Chain ID: ${R.signInWithSolana.chainId}`]:[],...!((g=R?.signInWithSolana)===null||g===void 0)&&g.nonce?[`Nonce: ${R.signInWithSolana.nonce}`]:[],...!((p=R?.signInWithSolana)===null||p===void 0)&&p.requestId?[`Request ID: ${R.signInWithSolana.requestId}`]:[],...!((m=(b=R?.signInWithSolana)===null||b===void 0?void 0:b.resources)===null||m===void 0)&&m.length?["Resources",...R.signInWithSolana.resources.map(J=>`- ${J}`)]:[]].join(`
`);const W=await q.signMessage(new TextEncoder().encode(O),"utf8");if(!W||!(W instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=W}}try{const{data:k,error:M}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:O,signature:Ri(x)},!((w=r.options)===null||w===void 0)&&w.captchaToken?{gotrue_meta_security:{captcha_token:(_=r.options)===null||_===void 0?void 0:_.captchaToken}}:null),xform:Ke});if(M)throw M;if(!k||!k.session||!k.user){const P=new mn;return this._returnResult({data:{user:null,session:null},error:P})}return k.session&&(await this._saveSession(k.session),await this._notifyAllSubscribers("SIGNED_IN",k.session)),this._returnResult({data:Object.assign({},k),error:M})}catch(k){if(V(k))return this._returnResult({data:{user:null,session:null},error:k});throw k}}async _exchangeCodeForSession(r){const a=await Ti(this.storage,`${this.storageKey}-code-verifier`),[l,o]=(a??"").split("/");try{if(!l&&this.flowType==="pkce")throw new Pw;const{data:c,error:h}=await X(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:r,code_verifier:l},xform:Ke});if(await se(this.storage,`${this.storageKey}-code-verifier`),h)throw h;if(!c||!c.session||!c.user){const f=new mn;return this._returnResult({data:{user:null,session:null,redirectType:null},error:f})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:h})}catch(c){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(r){try{const{options:a,provider:l,token:o,access_token:c,nonce:h}=r,f=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:o,access_token:c,nonce:h,gotrue_meta_security:{captcha_token:a?.captchaToken}},xform:Ke}),{data:g,error:p}=f;if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!g||!g.session||!g.user){const b=new mn;return this._returnResult({data:{user:null,session:null},error:b})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:g,error:p})}catch(a){if(V(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(r){var a,l,o,c,h;try{if("email"in r){const{email:f,options:g}=r;let p=null,b=null;this.flowType==="pkce"&&([p,b]=await yn(this.storage,this.storageKey));const{error:m}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:f,data:(a=g?.data)!==null&&a!==void 0?a:{},create_user:(l=g?.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},code_challenge:p,code_challenge_method:b},redirectTo:g?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:m})}if("phone"in r){const{phone:f,options:g}=r,{data:p,error:b}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:f,data:(o=g?.data)!==null&&o!==void 0?o:{},create_user:(c=g?.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},channel:(h=g?.channel)!==null&&h!==void 0?h:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:p?.message_id},error:b})}throw new gl("You must provide either an email or phone number.")}catch(f){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(f))return this._returnResult({data:{user:null,session:null},error:f});throw f}}async verifyOtp(r){var a,l;try{let o,c;"options"in r&&(o=(a=r.options)===null||a===void 0?void 0:a.redirectTo,c=(l=r.options)===null||l===void 0?void 0:l.captchaToken);const{data:h,error:f}=await X(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},r),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:Ke});if(f)throw f;if(!h)throw new Error("An error occurred on token verification.");const g=h.session,p=h.user;return g?.access_token&&(await this._saveSession(g),await this._notifyAllSubscribers(r.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",g)),this._returnResult({data:{user:p,session:g},error:null})}catch(o){if(V(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(r){var a,l,o,c,h;try{let f=null,g=null;this.flowType==="pkce"&&([f,g]=await yn(this.storage,this.storageKey));const p=await X(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in r?{provider_id:r.providerId}:null),"domain"in r?{domain:r.domain}:null),{redirect_to:(l=(a=r.options)===null||a===void 0?void 0:a.redirectTo)!==null&&l!==void 0?l:void 0}),!((o=r?.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:r.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:f,code_challenge_method:g}),headers:this.headers,xform:u_});return!((c=p.data)===null||c===void 0)&&c.url&&le()&&!(!((h=r.options)===null||h===void 0)&&h.skipBrowserRedirect)&&window.location.assign(p.data.url),this._returnResult(p)}catch(f){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(f))return this._returnResult({data:null,error:f});throw f}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async r=>{const{data:{session:a},error:l}=r;if(l)throw l;if(!a)throw new te;const{error:o}=await X(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(r){if(V(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async resend(r){try{const a=`${this.url}/resend`;if("email"in r){const{email:l,type:o,options:c}=r,{error:h}=await X(this.fetch,"POST",a,{headers:this.headers,body:{email:l,type:o,gotrue_meta_security:{captcha_token:c?.captchaToken}},redirectTo:c?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}else if("phone"in r){const{phone:l,type:o,options:c}=r,{data:h,error:f}=await X(this.fetch,"POST",a,{headers:this.headers,body:{phone:l,type:o,gotrue_meta_security:{captcha_token:c?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:h?.message_id},error:f})}throw new gl("You must provide either an email or phone number and a type")}catch(a){if(V(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async a=>a))}async _acquireLock(r,a){this._debug("#_acquireLock","begin",r);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await l,await a()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,r,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=a();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(r){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await r(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let r=null;const a=await Ti(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?r=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!r)return{data:{session:null},error:null};const l=r.expires_at?r.expires_at*1e3-Date.now()<uc:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",r.expires_at),!l){if(this.userStorage){const h=await Ti(this.userStorage,this.storageKey+"-user");h?.user?r.user=h.user:r.user=fc()}if(this.storage.isServer&&r.user&&!r.user.__isUserNotAvailableProxy){const h={value:this.suppressGetSessionWarning};r.user=l_(r.user,h),h.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:r},error:null}}const{data:o,error:c}=await this._callRefreshToken(r.refresh_token);return c?this._returnResult({data:{session:null},error:c}):this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(r){if(r)return await this._getUser(r);await this.initializePromise;const a=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(r){try{return r?await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:r,xform:ai}):await this._useSession(async a=>{var l,o,c;const{data:h,error:f}=a;if(f)throw f;return!(!((l=h.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new te}:await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=h.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:ai})})}catch(a){if(V(a))return fl(a)&&(await this._removeSession(),await se(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(r,a={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(r,a))}async _updateUser(r,a={}){try{return await this._useSession(async l=>{const{data:o,error:c}=l;if(c)throw c;if(!o.session)throw new te;const h=o.session;let f=null,g=null;this.flowType==="pkce"&&r.email!=null&&([f,g]=await yn(this.storage,this.storageKey));const{data:p,error:b}=await X(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a?.emailRedirectTo,body:Object.assign(Object.assign({},r),{code_challenge:f,code_challenge_method:g}),jwt:h.access_token,xform:ai});if(b)throw b;return h.user=p.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),this._returnResult({data:{user:h.user},error:null})})}catch(l){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(l))return this._returnResult({data:{user:null},error:l});throw l}}async setSession(r){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(r))}async _setSession(r){try{if(!r.access_token||!r.refresh_token)throw new te;const a=Date.now()/1e3;let l=a,o=!0,c=null;const{payload:h}=vl(r.access_token);if(h.exp&&(l=h.exp,o=l<=a),o){const{data:f,error:g}=await this._callRefreshToken(r.refresh_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!f)return{data:{user:null,session:null},error:null};c=f}else{const{data:f,error:g}=await this._getUser(r.access_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});c={access_token:r.access_token,refresh_token:r.refresh_token,user:f.user,token_type:"bearer",expires_in:l-a,expires_at:l},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(a){if(V(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(r){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(r))}async _refreshSession(r){try{return await this._useSession(async a=>{var l;if(!r){const{data:h,error:f}=a;if(f)throw f;r=(l=h.session)!==null&&l!==void 0?l:void 0}if(!r?.refresh_token)throw new te;const{data:o,error:c}=await this._callRefreshToken(r.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(V(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(r,a){var l;try{if(!le())throw new pl("No browser detected.");if(r.error||r.error_description||r.error_code)throw new pl(r.error_description||"Error in URL with unspecified error_description",{error:r.error||"unspecified_error",code:r.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new xp("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new pl("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!r.code)throw new xp("No code detected.");const{data:R,error:q}=await this._exchangeCodeForSession(r.code);if(q)throw q;const F=new URL(window.location.href);return F.searchParams.delete("code"),window.history.replaceState(window.history.state,"",F.toString()),{data:{session:R.session,redirectType:(l=R.redirectType)!==null&&l!==void 0?l:null},error:null}}const{provider_token:o,provider_refresh_token:c,access_token:h,refresh_token:f,expires_in:g,expires_at:p,token_type:b}=r;if(!h||!g||!f||!b)throw new pl("No session defined in URL");const m=Math.round(Date.now()/1e3),w=parseInt(g);let _=m+w;p&&(_=parseInt(p));const O=_-m;O*1e3<=_n&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${O}s, should have been closer to ${w}s`);const x=_-w;m-x>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",x,_,m):m-x<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",x,_,m);const{data:k,error:M}=await this._getUser(h);if(M)throw M;const P={provider_token:o,provider_refresh_token:c,access_token:h,expires_in:w,expires_at:_,refresh_token:f,token_type:b,user:k.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:P,redirectType:r.type},error:null})}catch(o){if(V(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(r){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),r):!!(r.access_token||r.error_description)}async _isPKCECallback(r){const a=await Ti(this.storage,`${this.storageKey}-code-verifier`);return!!(r.code&&a)}async signOut(r={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(r))}async _signOut({scope:r}={scope:"global"}){return await this._useSession(async a=>{var l;const{data:o,error:c}=a;if(c&&!fl(c))return this._returnResult({error:c});const h=(l=o.session)===null||l===void 0?void 0:l.access_token;if(h){const{error:f}=await this.admin.signOut(h,r);if(f&&!(zw(f)&&(f.status===404||f.status===401||f.status===403)||fl(f)))return this._returnResult({error:f})}return r!=="others"&&(await this._removeSession(),await se(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(r){const a=Yw(),l={id:a,callback:r,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,l),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(a)})))(),{data:{subscription:l}}}async _emitInitialSession(r){return await this._useSession(async a=>{var l,o;try{const{data:{session:c},error:h}=a;if(h)throw h;await((l=this.stateChangeEmitters.get(r))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",r,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(r))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",r,"error",c),fl(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(r,a={}){let l=null,o=null;this.flowType==="pkce"&&([l,o]=await yn(this.storage,this.storageKey,!0));try{return await X(this.fetch,"POST",`${this.url}/recover`,{body:{email:r,code_challenge:l,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(c){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var r;try{const{data:a,error:l}=await this.getUser();if(l)throw l;return this._returnResult({data:{identities:(r=a.user.identities)!==null&&r!==void 0?r:[]},error:null})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(r){return"token"in r?this.linkIdentityIdToken(r):this.linkIdentityOAuth(r)}async linkIdentityOAuth(r){var a;try{const{data:l,error:o}=await this._useSession(async c=>{var h,f,g,p,b;const{data:m,error:w}=c;if(w)throw w;const _=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,r.provider,{redirectTo:(h=r.options)===null||h===void 0?void 0:h.redirectTo,scopes:(f=r.options)===null||f===void 0?void 0:f.scopes,queryParams:(g=r.options)===null||g===void 0?void 0:g.queryParams,skipBrowserRedirect:!0});return await X(this.fetch,"GET",_,{headers:this.headers,jwt:(b=(p=m.session)===null||p===void 0?void 0:p.access_token)!==null&&b!==void 0?b:void 0})});if(o)throw o;return le()&&!(!((a=r.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(l?.url),this._returnResult({data:{provider:r.provider,url:l?.url},error:null})}catch(l){if(V(l))return this._returnResult({data:{provider:r.provider,url:null},error:l});throw l}}async linkIdentityIdToken(r){return await this._useSession(async a=>{var l;try{const{error:o,data:{session:c}}=a;if(o)throw o;const{options:h,provider:f,token:g,access_token:p,nonce:b}=r,m=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(l=c?.access_token)!==null&&l!==void 0?l:void 0,body:{provider:f,id_token:g,access_token:p,nonce:b,link_identity:!0,gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Ke}),{data:w,error:_}=m;return _?this._returnResult({data:{user:null,session:null},error:_}):!w||!w.session||!w.user?this._returnResult({data:{user:null,session:null},error:new mn}):(w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("USER_UPDATED",w.session)),this._returnResult({data:w,error:_}))}catch(o){if(await se(this.storage,`${this.storageKey}-code-verifier`),V(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(r){try{return await this._useSession(async a=>{var l,o;const{data:c,error:h}=a;if(h)throw h;return await X(this.fetch,"DELETE",`${this.url}/user/identities/${r.identity_id}`,{headers:this.headers,jwt:(o=(l=c.session)===null||l===void 0?void 0:l.access_token)!==null&&o!==void 0?o:void 0})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(r){const a=`#_refreshAccessToken(${r.substring(0,5)}...)`;this._debug(a,"begin");try{const l=Date.now();return await Zw(async o=>(o>0&&await Qw(200*Math.pow(2,o-1)),this._debug(a,"refreshing attempt",o),await X(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:r},headers:this.headers,xform:Ke})),(o,c)=>{const h=200*Math.pow(2,o);return c&&hc(c)&&Date.now()+h-l<_n})}catch(l){if(this._debug(a,"error",l),V(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}finally{this._debug(a,"end")}}_isValidSession(r){return typeof r=="object"&&r!==null&&"access_token"in r&&"refresh_token"in r&&"expires_at"in r}async _handleProviderSignIn(r,a){const l=await this._getUrlForProvider(`${this.url}/authorize`,r,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",r,"options",a,"url",l),le()&&!a.skipBrowserRedirect&&window.location.assign(l),{data:{provider:r,url:l},error:null}}async _recoverAndRefresh(){var r,a;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const o=await Ti(this.storage,this.storageKey);if(o&&this.userStorage){let h=await Ti(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!h&&(h={user:o.user},await In(this.userStorage,this.storageKey+"-user",h)),o.user=(r=h?.user)!==null&&r!==void 0?r:fc()}else if(o&&!o.user&&!o.user){const h=await Ti(this.storage,this.storageKey+"-user");h&&h?.user?(o.user=h.user,await se(this.storage,this.storageKey+"-user"),await In(this.storage,this.storageKey,o)):o.user=fc()}if(this._debug(l,"session from storage",o),!this._isValidSession(o)){this._debug(l,"session is not valid"),o!==null&&await this._removeSession();return}const c=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<uc;if(this._debug(l,`session has${c?"":" not"} expired with margin of ${uc}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:h}=await this._callRefreshToken(o.refresh_token);h&&(console.error(h),hc(h)||(this._debug(l,"refresh failed with a non-retryable error, removing the session",h),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:h,error:f}=await this._getUser(o.access_token);!f&&h?.user?(o.user=h.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(h){console.error("Error getting user data:",h),this._debug(l,"error getting user data, skipping SIGNED_IN notification",h)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(l,"error",o),console.error(o);return}finally{this._debug(l,"end")}}async _callRefreshToken(r){var a,l;if(!r)throw new te;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${r.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new Ll;const{data:c,error:h}=await this._refreshAccessToken(r);if(h)throw h;if(!c.session)throw new te;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const f={data:c.session,error:null};return this.refreshingDeferred.resolve(f),f}catch(c){if(this._debug(o,"error",c),V(c)){const h={data:null,error:c};return hc(c)||await this._removeSession(),(a=this.refreshingDeferred)===null||a===void 0||a.resolve(h),h}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(r,a,l=!0){const o=`#_notifyAllSubscribers(${r})`;this._debug(o,"begin",a,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:r,session:a});const c=[],h=Array.from(this.stateChangeEmitters.values()).map(async f=>{try{await f.callback(r,a)}catch(g){c.push(g)}});if(await Promise.all(h),c.length>0){for(let f=0;f<c.length;f+=1)console.error(c[f]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(r){this._debug("#_saveSession()",r),this.suppressGetSessionWarning=!0,await se(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},r),l=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&a.user&&await In(this.userStorage,this.storageKey+"-user",{user:a.user});const o=Object.assign({},a);delete o.user;const c=jp(o);await In(this.storage,this.storageKey,c)}else{const o=jp(a);await In(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await se(this.storage,this.storageKey),await se(this.storage,this.storageKey+"-code-verifier"),await se(this.storage,this.storageKey+"-user"),this.userStorage&&await se(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const r=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{r&&le()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",r)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const r=setInterval(()=>this._autoRefreshTokenTick(),_n);this.autoRefreshTicker=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r);const a=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const r=this.autoRefreshTicker;this.autoRefreshTicker=null,r&&clearInterval(r);const a=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,a&&clearTimeout(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const r=Date.now();try{return await this._useSession(async a=>{const{data:{session:l}}=a;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((l.expires_at*1e3-r)/_n);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${_n}ms, refresh threshold is ${Rc} ticks`),o<=Rc&&await this._callRefreshToken(l.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(r){if(r.isAcquireTimeout||r instanceof Dv)this._debug("auto refresh token tick lock not available");else throw r}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!le()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(r){this._debug("#visibilityChangedCallback","error",r)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(r){console.error("_handleVisibilityChange",r)}}async _onVisibilityChanged(r){const a=`#_onVisibilityChanged(${r})`;this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),r||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(r,a,l){const o=[`provider=${encodeURIComponent(a)}`];if(l?.redirectTo&&o.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l?.scopes&&o.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[c,h]=await yn(this.storage,this.storageKey),f=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(h)}`});o.push(f.toString())}if(l?.queryParams){const c=new URLSearchParams(l.queryParams);o.push(c.toString())}return l?.skipBrowserRedirect&&o.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${r}?${o.join("&")}`}async _unenroll(r){try{return await this._useSession(async a=>{var l;const{data:o,error:c}=a;return c?this._returnResult({data:null,error:c}):await X(this.fetch,"DELETE",`${this.url}/factors/${r.factorId}`,{headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(r){try{return await this._useSession(async a=>{var l,o;const{data:c,error:h}=a;if(h)return this._returnResult({data:null,error:h});const f=Object.assign({friendly_name:r.friendlyName,factor_type:r.factorType},r.factorType==="phone"?{phone:r.phone}:r.factorType==="totp"?{issuer:r.issuer}:{}),{data:g,error:p}=await X(this.fetch,"POST",`${this.url}/factors`,{body:f,headers:this.headers,jwt:(l=c?.session)===null||l===void 0?void 0:l.access_token});return p?this._returnResult({data:null,error:p}):(r.factorType==="totp"&&g.type==="totp"&&(!((o=g?.totp)===null||o===void 0)&&o.qr_code)&&(g.totp.qr_code=`data:image/svg+xml;utf-8,${g.totp.qr_code}`),this._returnResult({data:g,error:null}))})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _verify(r){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async a=>{var l;const{data:o,error:c}=a;if(c)return this._returnResult({data:null,error:c});const h=Object.assign({challenge_id:r.challengeId},"webauthn"in r?{webauthn:Object.assign(Object.assign({},r.webauthn),{credential_response:r.webauthn.type==="create"?Hp(r.webauthn.credential_response):Gp(r.webauthn.credential_response)})}:{code:r.code}),{data:f,error:g}=await X(this.fetch,"POST",`${this.url}/factors/${r.factorId}/verify`,{body:h,headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+f.expires_in},f)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",f),this._returnResult({data:f,error:g}))})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}})}async _challenge(r){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async a=>{var l;const{data:o,error:c}=a;if(c)return this._returnResult({data:null,error:c});const h=await X(this.fetch,"POST",`${this.url}/factors/${r.factorId}/challenge`,{body:r,headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token});if(h.error)return h;const{data:f}=h;if(f.type!=="webauthn")return{data:f,error:null};switch(f.webauthn.type){case"create":return{data:Object.assign(Object.assign({},f),{webauthn:Object.assign(Object.assign({},f.webauthn),{credential_options:Object.assign(Object.assign({},f.webauthn.credential_options),{publicKey:Bp(f.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},f),{webauthn:Object.assign(Object.assign({},f.webauthn),{credential_options:Object.assign(Object.assign({},f.webauthn.credential_options),{publicKey:Pp(f.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}})}async _challengeAndVerify(r){const{data:a,error:l}=await this._challenge({factorId:r.factorId});return l?this._returnResult({data:null,error:l}):await this._verify({factorId:r.factorId,challengeId:a.id,code:r.code})}async _listFactors(){var r;const{data:{user:a},error:l}=await this.getUser();if(l)return{data:null,error:l};const o={all:[],phone:[],totp:[],webauthn:[]};for(const c of(r=a?.factors)!==null&&r!==void 0?r:[])o.all.push(c),c.status==="verified"&&o[c.factor_type].push(c);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(r){var a,l,o,c;if(r)try{const{payload:_}=vl(r);let O=null;_.aal&&(O=_.aal);let x=O;const{data:{user:k},error:M}=await this.getUser(r);if(M)return this._returnResult({data:null,error:M});((l=(a=k?.factors)===null||a===void 0?void 0:a.filter(q=>q.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(x="aal2");const R=_.amr||[];return{data:{currentLevel:O,nextLevel:x,currentAuthenticationMethods:R},error:null}}catch(_){if(V(_))return this._returnResult({data:null,error:_});throw _}const{data:{session:h},error:f}=await this.getSession();if(f)return this._returnResult({data:null,error:f});if(!h)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:g}=vl(h.access_token);let p=null;g.aal&&(p=g.aal);let b=p;((c=(o=h.user.factors)===null||o===void 0?void 0:o.filter(_=>_.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(b="aal2");const w=g.amr||[];return{data:{currentLevel:p,nextLevel:b,currentAuthenticationMethods:w},error:null}}async _getAuthorizationDetails(r){try{return await this._useSession(async a=>{const{data:{session:l},error:o}=a;return o?this._returnResult({data:null,error:o}):l?await X(this.fetch,"GET",`${this.url}/oauth/authorizations/${r}`,{headers:this.headers,jwt:l.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new te})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(r,a){try{return await this._useSession(async l=>{const{data:{session:o},error:c}=l;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new te});const h=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${r}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:f=>({data:f,error:null})});return h.data&&h.data.redirect_url&&le()&&!a?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(l){if(V(l))return this._returnResult({data:null,error:l});throw l}}async _denyAuthorization(r,a){try{return await this._useSession(async l=>{const{data:{session:o},error:c}=l;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new te});const h=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${r}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:f=>({data:f,error:null})});return h.data&&h.data.redirect_url&&le()&&!a?.skipBrowserRedirect&&window.location.assign(h.data.redirect_url),h})}catch(l){if(V(l))return this._returnResult({data:null,error:l});throw l}}async _listOAuthGrants(){try{return await this._useSession(async r=>{const{data:{session:a},error:l}=r;return l?this._returnResult({data:null,error:l}):a?await X(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new te})})}catch(r){if(V(r))return this._returnResult({data:null,error:r});throw r}}async _revokeOAuthGrant(r){try{return await this._useSession(async a=>{const{data:{session:l},error:o}=a;return o?this._returnResult({data:null,error:o}):l?(await X(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,query:{client_id:r.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new te})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(r,a={keys:[]}){let l=a.keys.find(f=>f.kid===r);if(l)return l;const o=Date.now();if(l=this.jwks.keys.find(f=>f.kid===r),l&&this.jwks_cached_at+Uw>o)return l;const{data:c,error:h}=await X(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(h)throw h;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,l=c.keys.find(f=>f.kid===r),!l)?null:l}async getClaims(r,a={}){try{let l=r;if(!l){const{data:_,error:O}=await this.getSession();if(O||!_.session)return this._returnResult({data:null,error:O});l=_.session.access_token}const{header:o,payload:c,signature:h,raw:{header:f,payload:g}}=vl(l);a?.allowExpired||n_(c.exp);const p=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,a?.keys?{keys:a.keys}:a?.jwks);if(!p){const{error:_}=await this.getUser(l);if(_)throw _;return{data:{claims:c,header:o,signature:h},error:null}}const b=a_(o.alg),m=await crypto.subtle.importKey("jwk",p,b,!0,["verify"]);if(!await crypto.subtle.verify(b,m,h,Vw(`${f}.${g}`)))throw new Nc("Invalid JWT signature");return{data:{claims:c,header:o,signature:h},error:null}}catch(l){if(V(l))return this._returnResult({data:null,error:l});throw l}}async signInWithPasskey(r){var a,l,o;Ze(this.experimental);try{if(!Tl())return this._returnResult({data:null,error:new We("Browser does not support WebAuthn",null)});const{data:c,error:h}=await this._startPasskeyAuthentication({options:{captchaToken:(a=r?.options)===null||a===void 0?void 0:a.captchaToken}});if(h||!c)return this._returnResult({data:null,error:h});const f=Pp(c.options),g=(o=(l=r?.options)===null||l===void 0?void 0:l.signal)!==null&&o!==void 0?o:jc.createNewAbortSignal(),{data:p,error:b}=await zv({publicKey:f,signal:g});if(b||!p)return this._returnResult({data:null,error:b??new We("WebAuthn ceremony failed",null)});const m=Gp(p);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:m})}catch(c){if(V(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(r){var a,l;Ze(this.experimental);try{if(!Tl())return this._returnResult({data:null,error:new We("Browser does not support WebAuthn",null)});const{data:o,error:c}=await this._startPasskeyRegistration();if(c||!o)return this._returnResult({data:null,error:c});const h=Bp(o.options),f=(l=(a=r?.options)===null||a===void 0?void 0:a.signal)!==null&&l!==void 0?l:jc.createNewAbortSignal(),{data:g,error:p}=await Mv({publicKey:h,signal:f});if(p||!g)return this._returnResult({data:null,error:p??new We("WebAuthn ceremony failed",null)});const b=Hp(g);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:b})}catch(o){if(V(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){Ze(this.experimental);try{return await this._useSession(async r=>{const{data:{session:a},error:l}=r;if(l)return this._returnResult({data:null,error:l});if(!a)return this._returnResult({data:null,error:new te});const{data:o,error:c}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:a.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(r){if(V(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyRegistration(r){Ze(this.experimental);try{return await this._useSession(async a=>{const{data:{session:l},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new te});const{data:c,error:h}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:l.access_token,body:{challenge_id:r.challengeId,credential:r.credential}});return h?this._returnResult({data:null,error:h}):this._returnResult({data:c,error:null})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyAuthentication(r){var a;Ze(this.experimental);try{const{data:l,error:o}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(a=r?.options)===null||a===void 0?void 0:a.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:l,error:null})}catch(l){if(V(l))return this._returnResult({data:null,error:l});throw l}}async _verifyPasskeyAuthentication(r){Ze(this.experimental);try{const{data:a,error:l}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:r.challengeId,credential:r.credential},xform:Ke});return l?this._returnResult({data:null,error:l}):(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:a,error:null}))}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _listPasskeys(){Ze(this.experimental);try{return await this._useSession(async r=>{const{data:{session:a},error:l}=r;if(l)return this._returnResult({data:null,error:l});if(!a)return this._returnResult({data:null,error:new te});const{data:o,error:c}=await X(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:a.access_token,xform:h=>({data:h,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(r){if(V(r))return this._returnResult({data:null,error:r});throw r}}async _updatePasskey(r){Ze(this.experimental);try{return await this._useSession(async a=>{const{data:{session:l},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new te});const{data:c,error:h}=await X(this.fetch,"PATCH",`${this.url}/passkeys/${r.passkeyId}`,{headers:this.headers,jwt:l.access_token,body:{friendly_name:r.friendlyName}});return h?this._returnResult({data:null,error:h}):this._returnResult({data:c,error:null})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}async _deletePasskey(r){Ze(this.experimental);try{return await this._useSession(async a=>{const{data:{session:l},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new te});const{error:c}=await X(this.fetch,"DELETE",`${this.url}/passkeys/${r.passkeyId}`,{headers:this.headers,jwt:l.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(a){if(V(a))return this._returnResult({data:null,error:a});throw a}}}Ba.nextInstanceID={};const R_=Ba,O_="2.105.1";let Ra="";typeof Deno<"u"?Ra="deno":typeof document<"u"?Ra="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ra="react-native":Ra="node";const k_={"X-Client-Info":`supabase-js-${Ra}/${O_}`},N_={headers:k_},j_={schema:"public"},D_={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},L_={};function Pa(n){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Pa(n)}function U_(n,r){if(Pa(n)!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var l=a.call(n,r);if(Pa(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function M_(n){var r=U_(n,"string");return Pa(r)=="symbol"?r:r+""}function z_(n,r,a){return(r=M_(r))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function $p(n,r){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),a.push.apply(a,l)}return a}function Bt(n){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?$p(Object(a),!0).forEach(function(l){z_(n,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):$p(Object(a)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(a,l))})}return n}const B_=n=>n?(...r)=>n(...r):(...r)=>fetch(...r),P_=()=>Headers,H_=(n,r,a)=>{const l=B_(a),o=P_();return async(c,h)=>{var f;const g=(f=await r())!==null&&f!==void 0?f:n;let p=new o(h?.headers);return p.has("apikey")||p.set("apikey",n),p.has("Authorization")||p.set("Authorization",`Bearer ${g}`),l(c,Bt(Bt({},h),{},{headers:p}))}};function G_(n){return n.endsWith("/")?n:n+"/"}function q_(n,r){var a,l;const{db:o,auth:c,realtime:h,global:f}=n,{db:g,auth:p,realtime:b,global:m}=r,w={db:Bt(Bt({},g),o),auth:Bt(Bt({},p),c),realtime:Bt(Bt({},b),h),storage:{},global:Bt(Bt(Bt({},m),f),{},{headers:Bt(Bt({},(a=m?.headers)!==null&&a!==void 0?a:{}),(l=f?.headers)!==null&&l!==void 0?l:{})}),accessToken:async()=>""};return n.accessToken?w.accessToken=n.accessToken:delete w.accessToken,w}function $_(n){const r=n?.trim();if(!r)throw new Error("supabaseUrl is required.");if(!r.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(G_(r))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var V_=class extends R_{constructor(n){super(n)}},K_=class{constructor(n,r,a){var l,o;this.supabaseUrl=n,this.supabaseKey=r;const c=$_(n);if(!r)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const h=`sb-${c.hostname.split(".")[0]}-auth-token`,f={db:j_,realtime:L_,auth:Bt(Bt({},D_),{},{storageKey:h}),global:N_},g=q_(a??{},f);if(this.storageKey=(l=g.auth.storageKey)!==null&&l!==void 0?l:"",this.headers=(o=g.global.headers)!==null&&o!==void 0?o:{},g.accessToken)this.accessToken=g.accessToken,this.auth=new Proxy({},{get:(b,m)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(m)} is not possible`)}});else{var p;this.auth=this._initSupabaseAuthClient((p=g.auth)!==null&&p!==void 0?p:{},this.headers,g.global.fetch)}this.fetch=H_(r,this._getAccessToken.bind(this),g.global.fetch),this.realtime=this._initRealtimeClient(Bt({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},g.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(b=>this.realtime.setAuth(b)).catch(b=>console.warn("Failed to set initial Realtime auth token:",b)),this.rest=new A0(new URL("rest/v1",c).href,{headers:this.headers,schema:g.db.schema,fetch:this.fetch,timeout:g.db.timeout,urlLengthLimit:g.db.urlLengthLimit}),this.storage=new kw(this.storageUrl.href,this.headers,this.fetch,a?.storage),g.accessToken||this._listenForAuthEvents()}get functions(){return new c0(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,r={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,r,a)}channel(n,r={config:{}}){return this.realtime.channel(n,r)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,r,a;if(n.accessToken)return await n.accessToken();const{data:l}=await n.auth.getSession();return(r=(a=l.session)===null||a===void 0?void 0:a.access_token)!==null&&r!==void 0?r:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:r,detectSessionInUrl:a,storage:l,userStorage:o,storageKey:c,flowType:h,lock:f,debug:g,throwOnError:p,experimental:b},m,w){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new V_({url:this.authUrl.href,headers:Bt(Bt({},_),m),storageKey:c,autoRefreshToken:n,persistSession:r,detectSessionInUrl:a,storage:l,userStorage:o,flowType:h,lock:f,debug:g,throwOnError:p,experimental:b,fetch:w,hasCustomAuthorizationHeader:Object.keys(this.headers).some(O=>O.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new tw(this.realtimeUrl.href,Bt(Bt({},n),{},{params:Bt(Bt({},{apikey:this.supabaseKey}),n?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r?.access_token)})}_handleTokenChanged(n,r,a){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Y_=(n,r,a)=>new K_(n,r,a);function J_(){if(typeof window<"u")return!1;const n=globalThis.process;if(!n)return!1;const r=n.version;if(r==null)return!1;const a=r.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}J_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const X_=[{id:101,chapter_id:1,title:"인공지능의 정의",content:`
<h3>인공지능(AI)이란 무엇인가?</h3>
<p>
  <strong>인공지능(Artificial Intelligence, AI)</strong>은 인간의 학습, 추론, 지각, 판단, 언어 이해 등의 지적 능력을
  컴퓨터 시스템으로 구현하는 기술 및 학문 분야를 말합니다. 1956년 다트머스 회의(Dartmouth Conference)에서
  존 매카시(John McCarthy)가 처음으로 "인공지능"이라는 용어를 공식적으로 사용하였으며, 이후 컴퓨터 과학의
  핵심 분야로 발전해 왔습니다.
</p>

<div class="info-box">
  <strong>핵심 정의:</strong> 인공지능은 기계가 인간처럼 사고하고, 학습하며, 문제를 해결할 수 있도록 만드는
  컴퓨터 과학의 한 분야입니다. 단순한 규칙 기반 프로그래밍을 넘어, 경험에서 학습하고 새로운 상황에
  적응하는 능력을 포함합니다.
</div>

<h4>튜링 테스트(Turing Test)</h4>
<p>
  1950년 영국의 수학자 <strong>앨런 튜링(Alan Turing)</strong>은 논문 "Computing Machinery and Intelligence"에서
  기계의 지능을 판별하는 방법을 제안했습니다. <em>튜링 테스트</em>는 인간 심사관이 기계와 대화를 나눌 때,
  상대방이 기계인지 인간인지 구별할 수 없다면 그 기계는 "지능적"이라고 판단하는 방법입니다.
</p>
<ul>
  <li><strong>심사관</strong>: 텍스트 기반으로 질문을 던지는 인간</li>
  <li><strong>응답자 A</strong>: 인간 참가자</li>
  <li><strong>응답자 B</strong>: 컴퓨터 프로그램</li>
  <li>심사관이 A와 B를 구별하지 못하면, B는 튜링 테스트를 통과한 것으로 간주</li>
</ul>

<h4>지능(Intelligence)의 개념</h4>
<p>
  지능이란 무엇인지에 대한 정의는 학자마다 다양합니다. 일반적으로 지능은 다음과 같은 능력을 포함합니다:
</p>
<ol>
  <li><strong>학습 능력</strong> — 경험을 통해 새로운 지식과 기술을 습득하는 능력</li>
  <li><strong>추론 능력</strong> — 기존 지식을 바탕으로 새로운 결론을 도출하는 능력</li>
  <li><strong>문제 해결 능력</strong> — 주어진 조건에서 목표를 달성하기 위한 전략을 수립하는 능력</li>
  <li><strong>적응 능력</strong> — 새로운 환경이나 상황에 유연하게 대처하는 능력</li>
  <li><strong>창의성</strong> — 기존에 없던 새로운 아이디어나 산출물을 만들어내는 능력</li>
</ol>

<div class="info-box warning">
  <strong>주의:</strong> 현재의 AI는 특정 영역에서는 인간을 뛰어넘는 성능을 보이지만,
  인간과 같은 범용적 지능(General Intelligence)을 갖추고 있지는 않습니다.
  AI의 "지능"과 인간의 "지능"은 본질적으로 다른 개념임을 이해해야 합니다.
</div>
    `,sort_order:1},{id:102,chapter_id:1,title:"AI의 유형",content:`
<h3>인공지능의 분류</h3>
<p>
  인공지능은 그 능력 범위와 수준에 따라 크게 세 가지 유형으로 분류됩니다.
  각 유형은 현재 기술 수준과 미래 가능성에서 근본적인 차이를 보입니다.
</p>

<h4>1. 약인공지능 (Narrow AI / Weak AI)</h4>
<p>
  <strong>약인공지능(ANI: Artificial Narrow Intelligence)</strong>은 특정 작업이나 제한된 영역에서만
  인간 수준 또는 그 이상의 성능을 발휘하는 AI입니다. 현재 우리가 사용하는 모든 AI 시스템이
  이 범주에 해당합니다.
</p>
<ul>
  <li>음성 인식 시스템 (Siri, Alexa, 빅스비)</li>
  <li>이미지 분류 및 객체 인식</li>
  <li>체스/바둑 AI (Deep Blue, AlphaGo)</li>
  <li>추천 알고리즘 (Netflix, YouTube, 쿠팡)</li>
  <li>자율 주행 자동차의 인식 시스템</li>
</ul>

<h4>2. 범용인공지능 (General AI / Strong AI)</h4>
<p>
  <strong>범용인공지능(AGI: Artificial General Intelligence)</strong>은 인간과 동등한 수준의
  지적 능력을 갖춘 AI를 말합니다. 어떤 지적 작업이든 인간처럼 이해하고 학습하며 수행할 수 있는
  시스템으로, 아직 실현되지 않은 이론적 개념입니다.
</p>

<h4>3. 초인공지능 (Super AI / Superintelligence)</h4>
<p>
  <strong>초인공지능(ASI: Artificial Super Intelligence)</strong>은 모든 영역에서 인간의 지능을
  크게 능가하는 AI를 의미합니다. 과학적 창의성, 사회적 지능, 일반적 지혜까지 포함하여
  인간보다 우월한 지적 능력을 보유한 시스템입니다.
</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>약인공지능 (ANI)</th>
      <th>범용인공지능 (AGI)</th>
      <th>초인공지능 (ASI)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>능력 범위</strong></td>
      <td>특정 작업에 한정</td>
      <td>인간 수준의 범용 능력</td>
      <td>모든 영역에서 인간 초월</td>
    </tr>
    <tr>
      <td><strong>학습 방식</strong></td>
      <td>주어진 데이터에서 학습</td>
      <td>자율적 학습 및 전이</td>
      <td>자기 개선 및 진화</td>
    </tr>
    <tr>
      <td><strong>현재 상태</strong></td>
      <td>이미 실현됨</td>
      <td>연구 중 (미실현)</td>
      <td>이론적 단계</td>
    </tr>
    <tr>
      <td><strong>대표 사례</strong></td>
      <td>ChatGPT, AlphaGo, Siri</td>
      <td>해당 없음</td>
      <td>해당 없음</td>
    </tr>
    <tr>
      <td><strong>자의식</strong></td>
      <td>없음</td>
      <td>가능성 논의 중</td>
      <td>가능성 있음 (이론)</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>참고:</strong> 2026년 현재, ChatGPT나 Claude와 같은 대규모 언어모델(LLM)이
  매우 뛰어난 성능을 보이지만, 이들은 여전히 약인공지능(ANI)으로 분류됩니다.
  범용인공지능(AGI)의 실현 시기에 대해서는 전문가들 사이에서도 의견이 분분합니다.
</div>
    `,sort_order:2},{id:103,chapter_id:1,title:"AI의 핵심 기술",content:`
<h3>인공지능을 구성하는 핵심 기술</h3>
<p>
  인공지능은 단일 기술이 아니라 여러 핵심 기술들의 융합으로 이루어집니다.
  각 기술은 고유한 역할을 수행하며, 서로 결합하여 강력한 AI 시스템을 구축합니다.
</p>

<h4>1. 머신러닝 (Machine Learning)</h4>
<p>
  <strong>머신러닝</strong>은 명시적으로 프로그래밍하지 않아도 데이터에서 패턴을 학습하고
  예측을 수행하는 기술입니다. AI의 가장 핵심적인 기반 기술로, 지도학습, 비지도학습,
  강화학습의 세 가지 주요 유형이 있습니다.
</p>

<h4>2. 딥러닝 (Deep Learning)</h4>
<p>
  <strong>딥러닝</strong>은 인간 뇌의 신경망 구조를 모방한 <em>인공 신경망(Artificial Neural Network)</em>을
  활용하는 머신러닝의 하위 분야입니다. 여러 층(Layer)의 신경망을 통해 데이터의 복잡한 패턴을
  자동으로 학습합니다.
</p>

<h4>3. 자연어 처리 (Natural Language Processing, NLP)</h4>
<p>
  <strong>자연어 처리</strong>는 인간의 언어(자연어)를 컴퓨터가 이해하고, 해석하며, 생성할 수 있도록
  하는 기술입니다. 번역, 요약, 감정 분석, 챗봇 등에 활용됩니다.
</p>
<ul>
  <li><strong>형태소 분석</strong>: 문장을 의미 있는 최소 단위로 분리</li>
  <li><strong>구문 분석</strong>: 문장의 문법적 구조를 파악</li>
  <li><strong>의미 분석</strong>: 단어와 문장의 의미를 이해</li>
  <li><strong>감정 분석</strong>: 텍스트에 담긴 감정이나 의견을 파악</li>
</ul>

<h4>4. 컴퓨터 비전 (Computer Vision)</h4>
<p>
  <strong>컴퓨터 비전</strong>은 디지털 이미지나 비디오에서 의미 있는 정보를 추출하고 이해하는 기술입니다.
  얼굴 인식, 자율 주행, 의료 영상 분석 등에 핵심적으로 활용됩니다.
</p>

<h4>5. 로보틱스 (Robotics)</h4>
<p>
  <strong>로보틱스</strong>는 AI 기술을 물리적 로봇에 적용하여 자율적으로 환경을 인식하고 행동하는
  시스템을 구현하는 분야입니다. 제조업, 물류, 의료, 서비스 등 다양한 산업에서 활용됩니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">머신러닝/딥러닝</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">NLP / 컴퓨터 비전</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 서비스/로봇</div>
</div>

<div class="info-box">
  <strong>기술 간 관계:</strong> 딥러닝은 머신러닝의 하위 분야이며, 자연어 처리와 컴퓨터 비전은
  딥러닝 기술을 핵심 엔진으로 활용합니다. 로보틱스는 이 모든 기술을 물리적 세계에 적용하는
  통합 분야입니다.
</div>
    `,sort_order:3},{id:104,chapter_id:1,title:"AI의 응용 분야",content:`
<h3>AI가 변화시키는 주요 산업 분야</h3>
<p>
  인공지능은 거의 모든 산업 분야에서 혁신을 이끌고 있습니다.
  각 분야에서 AI가 어떻게 활용되고 있는지 살펴보겠습니다.
</p>

<h4>1. 의료/헬스케어 (Healthcare)</h4>
<p>
  AI는 의료 분야에서 진단 정확도를 높이고 신약 개발을 가속화하는 데 기여하고 있습니다.
</p>
<ul>
  <li><strong>의료 영상 분석</strong>: X-ray, CT, MRI 영상에서 질환을 자동으로 탐지 (폐암, 유방암 조기 발견)</li>
  <li><strong>신약 개발</strong>: AI를 통한 분자 구조 예측 및 약물 후보 물질 탐색 (AlphaFold)</li>
  <li><strong>맞춤형 치료</strong>: 환자의 유전 정보와 병력을 분석하여 개인 맞춤 치료 계획 수립</li>
  <li><strong>원격 진료</strong>: AI 챗봇을 활용한 초기 증상 분석 및 환자 분류</li>
</ul>

<h4>2. 금융 (Finance)</h4>
<p>
  금융 산업에서 AI는 리스크 관리, 사기 탐지, 투자 전략 수립에 핵심적인 역할을 합니다.
</p>
<ul>
  <li><strong>이상 거래 탐지</strong>: 실시간으로 의심스러운 금융 거래를 감지하여 사기를 예방</li>
  <li><strong>신용 평가</strong>: 다양한 데이터를 활용한 정교한 신용도 분석</li>
  <li><strong>로보어드바이저</strong>: AI 기반 자동 투자 자문 및 포트폴리오 관리</li>
  <li><strong>알고리즘 트레이딩</strong>: 시장 데이터를 분석하여 자동으로 매매를 실행</li>
</ul>

<h4>3. 교육 (Education)</h4>
<ul>
  <li><strong>적응형 학습</strong>: 학생의 수준과 학습 속도에 맞춘 맞춤형 교육 콘텐츠 제공</li>
  <li><strong>자동 채점</strong>: 에세이, 서술형 답안의 AI 기반 자동 평가</li>
  <li><strong>학습 분석</strong>: 학생의 학습 패턴을 분석하여 취약점 파악 및 개선 방향 제시</li>
  <li><strong>AI 튜터</strong>: 24시간 질의응답이 가능한 AI 학습 도우미</li>
</ul>

<h4>4. 제조업 (Manufacturing)</h4>
<ul>
  <li><strong>품질 검사</strong>: 컴퓨터 비전을 활용한 제품 불량 자동 검출</li>
  <li><strong>예측 유지보수</strong>: 설비 고장을 사전에 예측하여 다운타임 최소화</li>
  <li><strong>공정 최적화</strong>: 생산 데이터 분석을 통한 효율성 극대화</li>
  <li><strong>공급망 관리</strong>: 수요 예측과 재고 최적화</li>
</ul>

<h4>5. 엔터테인먼트 (Entertainment)</h4>
<ul>
  <li><strong>콘텐츠 추천</strong>: Netflix, Spotify 등의 개인화 추천 시스템</li>
  <li><strong>게임 AI</strong>: 지능적인 NPC(Non-Player Character) 설계</li>
  <li><strong>콘텐츠 생성</strong>: AI를 활용한 음악, 그림, 영상 제작</li>
  <li><strong>실시간 번역</strong>: 다국어 콘텐츠의 실시간 번역 및 더빙</li>
</ul>

<div class="info-box">
  <strong>산업 전망:</strong> McKinsey에 따르면, AI는 2030년까지 전 세계 GDP에 약 13조 달러의
  추가 가치를 창출할 것으로 전망됩니다. 특히 의료, 금융, 제조 분야에서의 AI 적용이
  가장 큰 경제적 효과를 가져올 것으로 예상됩니다.
</div>
    `,sort_order:4},{id:105,chapter_id:1,title:"AI와 인간의 차이",content:`
<h3>인공지능과 인간 지능의 비교</h3>
<p>
  인공지능과 인간의 지능은 근본적으로 다른 방식으로 작동합니다.
  각각의 강점과 한계를 이해하는 것은 AI를 올바르게 활용하기 위해 매우 중요합니다.
</p>

<div class="compare-grid">
  <div class="compare-item">
    <h4>인간의 강점</h4>
    <ul>
      <li>창의적 사고와 상상력</li>
      <li>감정 이해와 공감 능력</li>
      <li>윤리적 판단과 도덕적 추론</li>
      <li>적은 데이터로도 학습 가능</li>
      <li>맥락과 뉘앙스 이해</li>
      <li>상식적 추론 (Common Sense)</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>AI의 강점</h4>
    <ul>
      <li>대량 데이터의 빠른 처리</li>
      <li>24시간 무중단 작업 가능</li>
      <li>일관된 성능 유지 (피로 없음)</li>
      <li>복잡한 수학적 계산</li>
      <li>패턴 인식 속도와 정확도</li>
      <li>대규모 정보 검색과 종합</li>
    </ul>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>비교 항목</th>
      <th>인간</th>
      <th>AI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>처리 속도</strong></td>
      <td>상대적으로 느림</td>
      <td>초당 수십억 연산 가능</td>
    </tr>
    <tr>
      <td><strong>창의성</strong></td>
      <td>독창적 아이디어 생성 가능</td>
      <td>기존 패턴의 조합 및 변형</td>
    </tr>
    <tr>
      <td><strong>감정</strong></td>
      <td>감정을 경험하고 표현</td>
      <td>감정을 시뮬레이션할 수 있으나 경험하지 않음</td>
    </tr>
    <tr>
      <td><strong>학습 방식</strong></td>
      <td>소수의 예시로 일반화</td>
      <td>대량의 데이터 필요</td>
    </tr>
    <tr>
      <td><strong>에너지 소비</strong></td>
      <td>뇌: 약 20W</td>
      <td>대규모 AI: 수백 kW 이상</td>
    </tr>
    <tr>
      <td><strong>실수 패턴</strong></td>
      <td>피로, 감정에 의한 실수</td>
      <td>데이터 편향에 의한 체계적 오류</td>
    </tr>
    <tr>
      <td><strong>적응력</strong></td>
      <td>새로운 상황에 유연하게 대응</td>
      <td>학습 범위 밖의 상황에 취약</td>
    </tr>
  </tbody>
</table>

<h4>협력의 관점</h4>
<p>
  AI와 인간은 경쟁 관계가 아니라 <strong>상호 보완적 관계</strong>에 있습니다.
  인간의 창의성과 판단력, AI의 처리 속도와 정확성을 결합할 때 최상의 결과를 얻을 수 있습니다.
  예를 들어, 의료 분야에서 AI가 영상을 1차 분석하고, 의사가 최종 진단을 내리는 방식이
  각각 단독으로 진행하는 것보다 더 높은 정확도를 보입니다.
</p>

<div class="info-box">
  <strong>핵심 관점:</strong> AI 리터러시의 핵심은 AI를 두려워하거나 맹신하는 것이 아니라,
  AI의 강점과 한계를 정확히 이해하고, 인간의 능력과 적절히 결합하여 활용하는 것입니다.
  이를 <em>"인간-AI 협업(Human-AI Collaboration)"</em>이라 합니다.
</div>
    `,sort_order:5},{id:106,chapter_id:1,title:"AI 시스템의 구성 요소",content:`
<h3>AI 시스템을 구성하는 4대 요소</h3>
<p>
  모든 AI 시스템은 네 가지 핵심 구성 요소의 조합으로 이루어집니다.
  이 요소들이 어떻게 상호작용하는지 이해하면, AI 시스템의 작동 원리를
  보다 깊이 파악할 수 있습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">데이터 (Data)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">알고리즘 (Algorithm)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">컴퓨팅 파워 (Computing)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">인터페이스 (Interface)</div>
</div>

<h4>1. 데이터 (Data)</h4>
<p>
  데이터는 AI의 <strong>"연료"</strong>입니다. AI는 데이터로부터 패턴을 학습하므로,
  데이터의 품질과 양이 AI 성능을 좌우합니다.
</p>
<ul>
  <li><strong>정형 데이터</strong>: 표, 스프레드시트 등 구조화된 데이터 (매출 데이터, 고객 정보)</li>
  <li><strong>비정형 데이터</strong>: 텍스트, 이미지, 동영상, 음성 등 구조화되지 않은 데이터</li>
  <li><strong>반정형 데이터</strong>: JSON, XML 등 일부 구조를 가진 데이터</li>
</ul>

<div class="info-box warning">
  <strong>데이터 품질의 중요성:</strong> "Garbage In, Garbage Out(GIGO)" — 품질이 낮은 데이터를 입력하면
  결과도 신뢰할 수 없습니다. 편향된 데이터는 편향된 AI를 만들어 차별적 결과를 초래할 수 있습니다.
</div>

<h4>2. 알고리즘 (Algorithm)</h4>
<p>
  알고리즘은 AI의 <strong>"두뇌"</strong>입니다. 데이터를 처리하고 학습하는 방법론을 정의합니다.
</p>
<ul>
  <li><strong>지도학습 알고리즘</strong>: 정답이 있는 데이터로 학습 (분류, 회귀)</li>
  <li><strong>비지도학습 알고리즘</strong>: 정답 없이 패턴을 발견 (클러스터링, 차원 축소)</li>
  <li><strong>강화학습 알고리즘</strong>: 보상을 최대화하는 행동을 학습</li>
  <li><strong>딥러닝 아키텍처</strong>: CNN, RNN, Transformer 등 신경망 구조</li>
</ul>

<h4>3. 컴퓨팅 파워 (Computing Power)</h4>
<p>
  컴퓨팅 파워는 AI의 <strong>"근육"</strong>입니다. 대규모 데이터를 처리하고 복잡한 모델을 학습시키기
  위해서는 막대한 연산 능력이 필요합니다.
</p>
<ul>
  <li><strong>GPU (Graphics Processing Unit)</strong>: 병렬 연산에 특화된 프로세서, 딥러닝 학습의 핵심</li>
  <li><strong>TPU (Tensor Processing Unit)</strong>: Google이 AI 전용으로 개발한 프로세서</li>
  <li><strong>클라우드 컴퓨팅</strong>: AWS, GCP, Azure 등을 통한 대규모 연산 자원 활용</li>
  <li><strong>엣지 컴퓨팅</strong>: 기기 자체에서 AI 연산을 수행 (스마트폰 AI 칩)</li>
</ul>

<h4>4. 인터페이스 (Interface)</h4>
<p>
  인터페이스는 AI의 <strong>"얼굴"</strong>입니다. 사용자가 AI 시스템과 상호작용하는 접점을 제공합니다.
</p>
<ul>
  <li><strong>채팅 인터페이스</strong>: ChatGPT, Claude 등의 대화형 UI</li>
  <li><strong>음성 인터페이스</strong>: 시리, 알렉사 등의 음성 비서</li>
  <li><strong>API (Application Programming Interface)</strong>: 개발자가 AI 기능을 앱에 통합</li>
  <li><strong>시각적 대시보드</strong>: AI 분석 결과를 시각화하여 표시</li>
</ul>

<div class="info-box">
  <strong>종합:</strong> 우수한 AI 시스템은 양질의 데이터, 적합한 알고리즘, 충분한 컴퓨팅 파워,
  그리고 직관적인 인터페이스가 유기적으로 결합될 때 비로소 완성됩니다.
</div>
    `,sort_order:6},{id:107,chapter_id:1,title:"AI의 한계와 과제",content:`
<h3>현재 AI의 한계와 해결 과제</h3>
<p>
  인공지능이 눈부신 발전을 이루었지만, 여전히 극복해야 할 중요한 한계와 과제들이 존재합니다.
  AI를 올바르게 활용하기 위해서는 이러한 한계를 정확히 인식해야 합니다.
</p>

<h4>1. 데이터 의존성</h4>
<p>
  현재의 AI, 특히 딥러닝 모델은 <strong>대량의 고품질 데이터</strong>에 의존합니다.
  데이터가 부족하거나 편향되어 있으면 AI의 성능과 신뢰성이 크게 저하됩니다.
</p>
<ul>
  <li>학습 데이터에 포함되지 않은 상황에 대한 대응 능력 부족</li>
  <li>데이터 수집과 라벨링에 막대한 비용과 시간 소요</li>
  <li>개인정보 보호와 데이터 활용 사이의 균형 문제</li>
</ul>

<h4>2. 편향성 (Bias)</h4>
<p>
  AI는 학습 데이터에 존재하는 편향을 그대로 학습하고 증폭시킬 수 있습니다.
</p>
<ul>
  <li><strong>성별 편향</strong>: 채용 AI가 남성 지원자를 선호하는 사례 (아마존, 2018)</li>
  <li><strong>인종 편향</strong>: 얼굴 인식 시스템이 유색인종에 대해 낮은 정확도를 보이는 문제</li>
  <li><strong>언어 편향</strong>: 영어 중심으로 학습된 모델이 다른 언어에서 성능 저하</li>
</ul>

<div class="info-box warning">
  <strong>편향의 위험성:</strong> AI의 편향은 사회적 차별을 자동화하고 고착화할 수 있습니다.
  공정하고 포용적인 AI를 개발하기 위해서는 다양한 배경의 데이터를 확보하고,
  지속적으로 편향을 모니터링하며 수정하는 노력이 필요합니다.
</div>

<h4>3. 설명 가능성 (Explainability)</h4>
<p>
  딥러닝 모델은 흔히 <strong>"블랙박스(Black Box)"</strong>라 불립니다. 모델이 특정 결정을 내린 이유를
  인간이 이해할 수 있는 형태로 설명하기 어렵습니다. 이는 의료, 법률, 금융 등
  설명 가능성이 중요한 분야에서 심각한 문제가 됩니다.
</p>

<h4>4. 에너지 소비</h4>
<p>
  대규모 AI 모델의 학습과 운영에는 막대한 에너지가 소비됩니다.
  GPT-4와 같은 대규모 모델의 학습에는 수천 대의 GPU가 수개월간 가동되며,
  이에 따른 탄소 배출량도 상당합니다.
</p>

<h4>5. 환각 현상 (Hallucination)</h4>
<p>
  대규모 언어모델은 사실이 아닌 정보를 마치 사실인 것처럼 자신감 있게 생성하는
  <strong>"환각(Hallucination)"</strong> 현상을 보입니다. 이는 AI의 출력을 무비판적으로
  수용할 때 심각한 오류를 초래할 수 있습니다.
</p>

<h4>6. 윤리적 과제</h4>
<ul>
  <li><strong>일자리 대체</strong>: AI 자동화로 인한 일자리 구조 변화</li>
  <li><strong>프라이버시</strong>: AI를 활용한 대규모 감시와 개인정보 침해 우려</li>
  <li><strong>자율 무기</strong>: AI 기술의 군사적 활용에 대한 윤리적 논란</li>
  <li><strong>딥페이크</strong>: AI로 생성된 가짜 영상/음성의 악용 가능성</li>
</ul>

<div class="info-box">
  <strong>미래 방향:</strong> 이러한 한계를 극복하기 위해 "책임감 있는 AI(Responsible AI)",
  "설명 가능한 AI(Explainable AI, XAI)", "공정한 AI(Fair AI)" 등의 연구 분야가
  활발하게 발전하고 있습니다.
</div>
    `,sort_order:7},{id:108,chapter_id:1,title:"AI와 우리의 일상",content:`
<h3>일상 속의 인공지능</h3>
<p>
  AI는 이미 우리 생활 곳곳에 깊숙이 스며들어 있습니다. 많은 경우 AI가 작동하고 있다는 것을
  의식하지 못할 정도로 자연스럽게 일상의 일부가 되었습니다.
  일상에서 만나는 주요 AI 서비스를 살펴보겠습니다.
</p>

<h4>1. 음성 비서 (Voice Assistants)</h4>
<p>
  스마트폰과 스마트 스피커에 탑재된 음성 비서는 가장 대표적인 일상 속 AI입니다.
</p>
<ul>
  <li><strong>애플 시리(Siri)</strong>: 아이폰, 아이패드에서 음성 명령 처리</li>
  <li><strong>삼성 빅스비(Bixby)</strong>: 갤럭시 기기의 AI 비서</li>
  <li><strong>아마존 알렉사(Alexa)</strong>: 에코 스피커를 통한 스마트홈 제어</li>
  <li><strong>구글 어시스턴트</strong>: 안드로이드 기기 및 구글 홈 연동</li>
</ul>

<h4>2. 추천 시스템 (Recommendation Systems)</h4>
<p>
  온라인 서비스의 핵심 기능으로, 사용자의 취향과 행동 패턴을 분석하여 맞춤형 콘텐츠를 추천합니다.
</p>
<ul>
  <li><strong>YouTube</strong>: 시청 이력 기반 영상 추천</li>
  <li><strong>Netflix</strong>: 시청 패턴 분석을 통한 콘텐츠 추천 (매출의 80%가 추천에서 발생)</li>
  <li><strong>쿠팡/네이버</strong>: 구매 이력, 검색어 기반 상품 추천</li>
  <li><strong>Spotify/멜론</strong>: 음악 취향 분석을 통한 플레이리스트 자동 생성</li>
</ul>

<h4>3. 내비게이션과 지도 (Navigation)</h4>
<p>
  실시간 교통 정보 분석과 최적 경로 탐색에 AI가 핵심적으로 활용됩니다.
</p>
<ul>
  <li><strong>카카오맵/네이버맵</strong>: 실시간 교통량 분석, 도착 시간 예측</li>
  <li><strong>구글맵</strong>: 과거 교통 패턴 학습을 통한 최적 경로 제안</li>
  <li><strong>T맵</strong>: AI 기반 교통 예측 및 경로 안내</li>
</ul>

<h4>4. 카메라와 사진 (Photography)</h4>
<ul>
  <li><strong>얼굴 인식</strong>: 스마트폰 잠금 해제, 사진 자동 분류</li>
  <li><strong>야간 모드</strong>: AI가 여러 장의 사진을 합성하여 밝고 선명한 야간 사진 생성</li>
  <li><strong>배경 흐림(보케)</strong>: AI가 피사체를 인식하여 인물 모드 촬영</li>
</ul>

<h4>5. 자동 번역 (Machine Translation)</h4>
<ul>
  <li><strong>파파고/구글 번역</strong>: 신경망 기반 기계 번역으로 자연스러운 번역 제공</li>
  <li><strong>실시간 카메라 번역</strong>: 외국어 간판이나 메뉴판을 카메라로 비추면 실시간 번역</li>
</ul>

<h4>6. 스마트홈과 IoT</h4>
<ul>
  <li>AI 에어컨/냉장고: 사용 패턴 학습을 통한 자동 온도 조절</li>
  <li>로봇 청소기: 공간 매핑과 최적 청소 경로 계획</li>
  <li>스마트 조명: 시간대와 활동 패턴에 따른 자동 밝기 조절</li>
</ul>

<div class="info-box">
  <strong>생각해보기:</strong> 여러분이 하루 동안 사용하는 서비스 중 AI가 활용되고 있는 것들을
  찾아보세요. 아침에 일어나 스마트폰 잠금을 해제하는 순간부터, 밤에 넷플릭스 추천 영상을
  시청하는 순간까지, AI는 24시간 우리와 함께하고 있습니다.
</div>
    `,sort_order:8},{id:109,chapter_id:1,title:"학습 정리",content:`
<h3>Chapter 1 학습 정리: AI란 무엇인가?</h3>
<p>이번 장에서 학습한 핵심 개념을 정리합니다.</p>

<div class="info-box">
  <h4>핵심 개념 요약</h4>
  <ol>
    <li><strong>인공지능(AI)</strong>은 인간의 지적 능력을 컴퓨터로 구현하는 기술이자 학문 분야입니다.</li>
    <li><strong>튜링 테스트</strong>는 기계의 지능을 판별하기 위해 앨런 튜링이 제안한 방법입니다.</li>
    <li>AI는 <strong>약인공지능(ANI)</strong>, <strong>범용인공지능(AGI)</strong>, <strong>초인공지능(ASI)</strong>으로 분류되며, 현재는 ANI 단계입니다.</li>
    <li>AI의 핵심 기술로는 <strong>머신러닝, 딥러닝, 자연어 처리, 컴퓨터 비전, 로보틱스</strong>가 있습니다.</li>
    <li>AI는 <strong>의료, 금융, 교육, 제조, 엔터테인먼트</strong> 등 다양한 분야에 적용됩니다.</li>
    <li>AI와 인간은 <strong>상호 보완적 관계</strong>이며, 협업할 때 최상의 결과를 얻을 수 있습니다.</li>
    <li>AI 시스템은 <strong>데이터, 알고리즘, 컴퓨팅 파워, 인터페이스</strong>의 4대 요소로 구성됩니다.</li>
    <li>AI의 주요 한계로는 <strong>데이터 의존성, 편향성, 설명 불가능성, 에너지 소비, 환각 현상</strong> 등이 있습니다.</li>
    <li>AI는 음성 비서, 추천 시스템, 내비게이션, 카메라 등 <strong>일상 곳곳에</strong> 활용되고 있습니다.</li>
  </ol>
</div>

<h4>핵심 용어 정리</h4>
<table>
  <thead>
    <tr>
      <th>용어</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>인공지능 (AI)</strong></td>
      <td>인간의 지적 능력을 컴퓨터로 구현하는 기술</td>
    </tr>
    <tr>
      <td><strong>머신러닝</strong></td>
      <td>데이터에서 패턴을 자동으로 학습하는 기술</td>
    </tr>
    <tr>
      <td><strong>딥러닝</strong></td>
      <td>인공 신경망을 활용한 머신러닝의 하위 분야</td>
    </tr>
    <tr>
      <td><strong>ANI</strong></td>
      <td>약인공지능 — 특정 영역에 특화된 AI</td>
    </tr>
    <tr>
      <td><strong>AGI</strong></td>
      <td>범용인공지능 — 인간 수준의 범용 지능 (미실현)</td>
    </tr>
    <tr>
      <td><strong>튜링 테스트</strong></td>
      <td>기계의 지능을 판별하는 대화 기반 테스트</td>
    </tr>
    <tr>
      <td><strong>환각(Hallucination)</strong></td>
      <td>AI가 사실이 아닌 정보를 생성하는 현상</td>
    </tr>
    <tr>
      <td><strong>편향(Bias)</strong></td>
      <td>데이터나 알고리즘에 내재된 체계적 오류</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>다음 장 미리보기:</strong> Chapter 2에서는 AI의 핵심 기술인 머신러닝과 딥러닝에 대해
  더 깊이 살펴보겠습니다. 지도학습, 비지도학습, 강화학습의 차이점과 신경망의 작동 원리,
  그리고 최신 트랜스포머 아키텍처까지 학습합니다.
</div>
    `,sort_order:9},{id:110,chapter_id:1,title:"학습 확인 문제",content:`
<h3>Chapter 1 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>인공지능의 세 가지 유형 중, 현재 기술 수준에서 실현된 유형은 무엇인가요?</strong></p>
  <ol type="a">
    <li>범용인공지능 (AGI)</li>
    <li>초인공지능 (ASI)</li>
    <li>약인공지능 (ANI)</li>
    <li>양자인공지능 (QAI)</li>
  </ol>
  <p><em>정답: c) 약인공지능(ANI) — 현재 모든 AI 시스템은 특정 작업에 특화된 약인공지능입니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>튜링 테스트에 대한 설명으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>컴퓨터의 연산 속도를 측정하는 테스트이다</li>
    <li>인간 심사관이 대화를 통해 상대방이 기계인지 인간인지 판별하는 테스트이다</li>
    <li>AI의 에너지 효율성을 평가하는 테스트이다</li>
    <li>프로그래밍 언어의 성능을 비교하는 테스트이다</li>
  </ol>
  <p><em>정답: b) 인간 심사관이 대화를 통해 상대방이 기계인지 인간인지 판별하는 테스트이다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>AI 시스템의 4대 구성 요소에 해당하지 않는 것은?</strong></p>
  <ol type="a">
    <li>데이터 (Data)</li>
    <li>알고리즘 (Algorithm)</li>
    <li>감정 (Emotion)</li>
    <li>컴퓨팅 파워 (Computing Power)</li>
  </ol>
  <p><em>정답: c) 감정 — AI 시스템의 4대 요소는 데이터, 알고리즘, 컴퓨팅 파워, 인터페이스입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>대규모 언어모델이 사실이 아닌 정보를 마치 사실인 것처럼 생성하는 현상을 무엇이라 하나요?</strong></p>
  <ol type="a">
    <li>오버피팅 (Overfitting)</li>
    <li>환각 (Hallucination)</li>
    <li>언더피팅 (Underfitting)</li>
    <li>과적합 (Overlearning)</li>
  </ol>
  <p><em>정답: b) 환각(Hallucination) — AI가 사실이 아닌 정보를 자신감 있게 생성하는 현상입니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>다음 중 AI와 인간의 관계에 대한 설명으로 가장 적절한 것은?</strong></p>
  <ol type="a">
    <li>AI가 인간의 모든 능력을 대체할 수 있다</li>
    <li>인간은 AI보다 모든 면에서 우월하다</li>
    <li>AI와 인간은 상호 보완적 관계로, 협업할 때 최상의 결과를 얻을 수 있다</li>
    <li>AI는 인간에게 위협적인 존재이므로 개발을 중단해야 한다</li>
  </ol>
  <p><em>정답: c) AI와 인간은 상호 보완적 관계로, 협업할 때 최상의 결과를 얻을 수 있다.</em></p>
</div>
    `,sort_order:10}],Q_=[{id:201,chapter_id:2,title:"머신러닝이란?",content:`
<h3>머신러닝의 정의와 개념</h3>
<p>
  <strong>머신러닝(Machine Learning, ML)</strong>은 컴퓨터가 명시적으로 프로그래밍되지 않아도
  데이터를 통해 스스로 학습하고, 패턴을 발견하며, 예측이나 의사결정을 수행할 수 있도록 하는
  인공지능의 핵심 분야입니다. 1959년 아서 사무엘(Arthur Samuel)이 "컴퓨터에게 명시적으로
  프로그래밍하지 않고도 학습할 수 있는 능력을 부여하는 연구 분야"라고 정의하였습니다.
</p>

<div class="info-box">
  <strong>핵심 개념:</strong> 전통적 프로그래밍에서는 인간이 규칙을 직접 작성하지만,
  머신러닝에서는 데이터와 결과를 제공하면 컴퓨터가 스스로 규칙(패턴)을 학습합니다.
</div>

<h4>전통적 프로그래밍 vs 머신러닝</h4>

<div class="compare-grid">
  <div class="compare-item">
    <h4>전통적 프로그래밍</h4>
    <p>개발자가 모든 규칙을 직접 코드로 작성합니다.</p>
    <ul>
      <li>입력: 데이터 + 규칙(프로그램)</li>
      <li>출력: 결과</li>
      <li>예: "기온이 0도 이하이면 결빙 경고를 표시하라"</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>머신러닝</h4>
    <p>컴퓨터가 데이터에서 규칙을 자동으로 학습합니다.</p>
    <ul>
      <li>입력: 데이터 + 결과(정답)</li>
      <li>출력: 규칙(모델)</li>
      <li>예: 과거 기상 데이터와 사고 기록을 학습하여 위험 상황 예측</li>
    </ul>
  </div>
</div>

<div class="flow-diagram">
  <div class="flow-step">데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">데이터 전처리</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 평가</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">예측/서비스</div>
</div>

<h4>머신러닝의 세 가지 유형</h4>
<table>
  <thead>
    <tr>
      <th>유형</th>
      <th>학습 방식</th>
      <th>데이터 특성</th>
      <th>대표 알고리즘</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>지도학습</strong></td>
      <td>정답(라벨)이 포함된 데이터로 학습</td>
      <td>입력-출력 쌍이 제공됨</td>
      <td>선형회귀, SVM, 결정 트리</td>
    </tr>
    <tr>
      <td><strong>비지도학습</strong></td>
      <td>정답 없이 데이터의 구조를 탐색</td>
      <td>라벨 없는 데이터</td>
      <td>K-means, DBSCAN, PCA</td>
    </tr>
    <tr>
      <td><strong>강화학습</strong></td>
      <td>보상 신호를 통해 최적 행동 학습</td>
      <td>환경과의 상호작용</td>
      <td>Q-Learning, PPO, DQN</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>왜 머신러닝이 중요한가?</strong> 전통적 프로그래밍으로는 해결하기 어려운 복잡한 문제들
  (예: 이미지 속 고양이 인식, 자연어 번역, 주가 예측)에서 머신러닝은 데이터 기반의
  강력한 해결책을 제공합니다. 데이터가 많을수록 성능이 향상되는 특성을 가집니다.
</div>
    `,sort_order:1},{id:202,chapter_id:2,title:"지도학습",content:`
<h3>지도학습 (Supervised Learning)</h3>
<p>
  <strong>지도학습</strong>은 머신러닝에서 가장 널리 사용되는 학습 방법으로,
  <em>정답(라벨, Label)</em>이 포함된 학습 데이터를 통해 입력과 출력 사이의 관계를 학습합니다.
  마치 선생님(정답)의 지도 아래 학생(모델)이 배우는 것과 같습니다.
</p>

<h4>1. 분류 (Classification)</h4>
<p>
  <strong>분류</strong>는 데이터를 미리 정의된 범주(카테고리) 중 하나로 분류하는 작업입니다.
  출력값이 이산적(불연속적)인 값을 가집니다.
</p>
<ul>
  <li><strong>이메일 스팸 분류</strong>: 수신 이메일을 "스팸" 또는 "정상"으로 분류</li>
  <li><strong>질병 진단</strong>: 의료 데이터를 분석하여 "양성" 또는 "음성" 판정</li>
  <li><strong>이미지 분류</strong>: 사진 속 동물이 "고양이", "개", "새" 중 어떤 것인지 분류</li>
  <li><strong>감정 분석</strong>: 리뷰 텍스트를 "긍정", "부정", "중립"으로 분류</li>
</ul>

<h4>2. 회귀 (Regression)</h4>
<p>
  <strong>회귀</strong>는 연속적인 숫자 값을 예측하는 작업입니다.
  출력값이 연속적인 값을 가집니다.
</p>
<ul>
  <li><strong>주택 가격 예측</strong>: 면적, 위치, 연식 등을 입력으로 가격을 예측</li>
  <li><strong>매출 예측</strong>: 과거 매출 데이터를 바탕으로 미래 매출을 예측</li>
  <li><strong>기온 예측</strong>: 기상 데이터를 분석하여 내일의 최고/최저 기온을 예측</li>
  <li><strong>주가 예측</strong>: 과거 주가와 거래량 등을 분석하여 미래 주가를 예측</li>
</ul>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>분류 (Classification)</th>
      <th>회귀 (Regression)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>출력 형태</strong></td>
      <td>이산적 범주 (클래스)</td>
      <td>연속적 수치</td>
    </tr>
    <tr>
      <td><strong>예시</strong></td>
      <td>스팸/정상, 양성/음성</td>
      <td>가격, 온도, 점수</td>
    </tr>
    <tr>
      <td><strong>평가 지표</strong></td>
      <td>정확도, F1-score, AUC</td>
      <td>MSE, RMSE, R-squared</td>
    </tr>
    <tr>
      <td><strong>대표 알고리즘</strong></td>
      <td>로지스틱 회귀, SVM, 랜덤 포레스트</td>
      <td>선형 회귀, 다항 회귀, Ridge/Lasso</td>
    </tr>
  </tbody>
</table>

<h4>지도학습의 과정</h4>
<div class="flow-diagram">
  <div class="flow-step">라벨링된 데이터 준비</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">학습 데이터 / 테스트 데이터 분리</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 학습 (Training)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 평가 (Testing)</div>
</div>

<div class="info-box">
  <strong>실생활 예시:</strong> 넷플릭스의 콘텐츠 추천, 은행의 대출 승인 심사, 병원의 CT 영상 판독,
  이메일 스팸 필터 등 우리 일상에서 접하는 대부분의 AI 서비스가 지도학습을 기반으로 합니다.
</div>
    `,sort_order:2},{id:203,chapter_id:2,title:"비지도학습",content:`
<h3>비지도학습 (Unsupervised Learning)</h3>
<p>
  <strong>비지도학습</strong>은 정답(라벨)이 없는 데이터에서 숨겨진 패턴이나 구조를 스스로 발견하는
  학습 방법입니다. 데이터의 내재된 특성을 탐색하므로, 사전에 알려지지 않은 인사이트를
  발견하는 데 유용합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> 지도학습이 "이것은 사과, 이것은 배"라고 가르쳐주는 것이라면,
  비지도학습은 "이 과일들을 비슷한 것끼리 묶어봐"라고 하는 것과 같습니다.
  정답 없이 데이터 자체의 유사성과 패턴을 찾아냅니다.
</div>

<h4>1. 클러스터링 (Clustering)</h4>
<p>
  <strong>클러스터링</strong>은 데이터를 유사한 특성을 가진 그룹(클러스터)으로 자동 분류하는 기법입니다.
</p>
<ul>
  <li><strong>고객 세분화</strong>: 구매 패턴에 따라 고객을 VIP, 일반, 이탈 위험 등으로 그룹화</li>
  <li><strong>문서 분류</strong>: 대량의 뉴스 기사를 주제별(정치, 경제, 스포츠)로 자동 분류</li>
  <li><strong>유전자 분석</strong>: 유전자 발현 패턴이 유사한 유전자를 그룹화</li>
  <li><strong>이상 탐지</strong>: 정상적인 패턴과 다른 이상 데이터를 탐지 (사기 거래 탐지)</li>
</ul>

<h4>주요 클러스터링 알고리즘</h4>
<table>
  <thead>
    <tr>
      <th>알고리즘</th>
      <th>특징</th>
      <th>장점</th>
      <th>단점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>K-Means</strong></td>
      <td>K개의 중심점 기반 분류</td>
      <td>구현 간단, 빠른 속도</td>
      <td>K값을 미리 지정해야 함</td>
    </tr>
    <tr>
      <td><strong>DBSCAN</strong></td>
      <td>밀도 기반 분류</td>
      <td>클러스터 개수 자동 결정</td>
      <td>밀도가 다른 클러스터에 취약</td>
    </tr>
    <tr>
      <td><strong>계층적 클러스터링</strong></td>
      <td>트리 구조의 계층적 분류</td>
      <td>덴드로그램으로 시각화 가능</td>
      <td>대규모 데이터에서 느림</td>
    </tr>
  </tbody>
</table>

<h4>2. 차원 축소 (Dimensionality Reduction)</h4>
<p>
  <strong>차원 축소</strong>는 고차원 데이터를 핵심 정보를 유지하면서 저차원으로 변환하는 기법입니다.
  데이터 시각화, 노이즈 제거, 계산 효율성 향상에 활용됩니다.
</p>
<ul>
  <li><strong>PCA (주성분 분석)</strong>: 데이터의 분산을 최대로 보존하는 축을 찾아 차원을 축소</li>
  <li><strong>t-SNE</strong>: 고차원 데이터를 2D/3D로 시각화하는 데 특화된 기법</li>
  <li><strong>오토인코더</strong>: 신경망을 활용한 비선형 차원 축소</li>
</ul>

<div class="info-box">
  <strong>활용 사례:</strong> 비지도학습은 탐색적 데이터 분석에서 특히 강력합니다.
  예를 들어, 신규 시장에 진출할 때 고객 데이터를 클러스터링하여 타겟 고객군을 발견하거나,
  수백 개의 특성(Feature)을 가진 데이터를 차원 축소하여 시각화함으로써
  데이터의 전체적인 구조를 파악할 수 있습니다.
</div>
    `,sort_order:3},{id:204,chapter_id:2,title:"강화학습",content:`
<h3>강화학습 (Reinforcement Learning)</h3>
<p>
  <strong>강화학습</strong>은 에이전트(Agent)가 환경(Environment)과 상호작용하면서,
  보상(Reward)을 최대화하는 행동을 스스로 학습하는 방법입니다.
  시행착오(Trial and Error)를 통해 최적의 전략(정책, Policy)을 발견합니다.
</p>

<h4>강화학습의 핵심 구성 요소</h4>
<div class="flow-diagram">
  <div class="flow-step">에이전트 (Agent)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">행동 (Action)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">환경 (Environment)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">보상/상태 (Reward/State)</div>
</div>

<table>
  <thead>
    <tr>
      <th>구성 요소</th>
      <th>설명</th>
      <th>바둑 AI 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>에이전트 (Agent)</strong></td>
      <td>학습하고 행동하는 주체</td>
      <td>AlphaGo 프로그램</td>
    </tr>
    <tr>
      <td><strong>환경 (Environment)</strong></td>
      <td>에이전트가 상호작용하는 세계</td>
      <td>바둑판과 상대방</td>
    </tr>
    <tr>
      <td><strong>상태 (State)</strong></td>
      <td>현재 환경의 상황 정보</td>
      <td>현재 바둑판의 돌 배치</td>
    </tr>
    <tr>
      <td><strong>행동 (Action)</strong></td>
      <td>에이전트가 수행할 수 있는 동작</td>
      <td>다음 수를 놓을 위치</td>
    </tr>
    <tr>
      <td><strong>보상 (Reward)</strong></td>
      <td>행동의 결과로 받는 피드백</td>
      <td>승리: +1, 패배: -1</td>
    </tr>
    <tr>
      <td><strong>정책 (Policy)</strong></td>
      <td>상태에 따라 행동을 결정하는 전략</td>
      <td>특정 상황에서의 최적의 수 선택 규칙</td>
    </tr>
  </tbody>
</table>

<h4>강화학습의 주요 특징</h4>
<ul>
  <li><strong>탐험과 활용의 딜레마 (Exploration vs Exploitation)</strong>: 새로운 행동을 시도할 것인가(탐험),
    이미 알고 있는 최선의 행동을 반복할 것인가(활용) 사이의 균형</li>
  <li><strong>지연 보상 (Delayed Reward)</strong>: 즉각적인 보상이 아닌, 미래의 보상을 고려한 장기적 전략 학습</li>
  <li><strong>순차적 의사결정</strong>: 하나의 행동이 이후의 상태와 행동에 영향을 미치는 연쇄적 구조</li>
</ul>

<h4>강화학습의 대표적 성과</h4>
<ul>
  <li><strong>AlphaGo (2016)</strong>: 구글 딥마인드가 개발, 인간 바둑 세계 챔피언 이세돌을 4:1로 승리</li>
  <li><strong>AlphaFold (2020)</strong>: 단백질 구조 예측 문제를 혁신적으로 해결</li>
  <li><strong>OpenAI Five (2019)</strong>: 복잡한 팀 전략 게임 Dota 2에서 프로 팀을 상대로 승리</li>
  <li><strong>자율주행</strong>: 복잡한 교통 상황에서의 주행 전략 학습</li>
  <li><strong>로봇 제어</strong>: 보행, 물체 잡기 등 복잡한 운동 제어 학습</li>
</ul>

<div class="info-box warning">
  <strong>강화학습의 도전 과제:</strong> 강화학습은 매우 강력하지만, 대량의 시행착오가 필요하여
  학습에 오랜 시간이 걸리고, 보상 함수를 적절히 설계하는 것이 어렵습니다.
  또한 실제 환경에서의 시행착오는 비용이 크므로, 시뮬레이션 환경에서 먼저 학습한 후
  실제 환경에 적용하는 방식(Sim-to-Real)이 연구되고 있습니다.
</div>
    `,sort_order:4},{id:205,chapter_id:2,title:"딥러닝과 인공 신경망",content:`
<h3>딥러닝과 인공 신경망의 기초</h3>
<p>
  <strong>딥러닝(Deep Learning)</strong>은 인간 뇌의 신경망 구조에서 영감을 받은
  <em>인공 신경망(Artificial Neural Network, ANN)</em>을 활용하는 머신러닝의 하위 분야입니다.
  여러 층(Layer)의 신경망을 통해 데이터의 복잡한 표현을 자동으로 학습합니다.
</p>

<h4>인공 신경망의 기본 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">입력층 (Input Layer)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">은닉층 (Hidden Layers)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">출력층 (Output Layer)</div>
</div>

<h4>뉴런(Neuron)의 작동 원리</h4>
<p>
  인공 신경망의 기본 단위인 <strong>뉴런(또는 노드)</strong>은 다음과 같이 작동합니다:
</p>
<ol>
  <li>여러 입력값을 받아 각 입력에 <strong>가중치(Weight)</strong>를 곱합니다</li>
  <li>가중치가 적용된 입력값들을 모두 합산합니다</li>
  <li><strong>편향(Bias)</strong>을 더합니다</li>
  <li><strong>활성화 함수(Activation Function)</strong>를 적용하여 출력값을 생성합니다</li>
</ol>

<h4>활성화 함수의 종류</h4>
<table>
  <thead>
    <tr>
      <th>함수명</th>
      <th>특징</th>
      <th>주요 용도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ReLU</strong></td>
      <td>0 이하는 0, 양수는 그대로 출력</td>
      <td>은닉층에서 가장 널리 사용</td>
    </tr>
    <tr>
      <td><strong>Sigmoid</strong></td>
      <td>출력을 0~1 사이로 변환</td>
      <td>이진 분류의 출력층</td>
    </tr>
    <tr>
      <td><strong>Softmax</strong></td>
      <td>여러 클래스의 확률 분포를 생성</td>
      <td>다중 분류의 출력층</td>
    </tr>
    <tr>
      <td><strong>Tanh</strong></td>
      <td>출력을 -1~1 사이로 변환</td>
      <td>RNN 등에서 활용</td>
    </tr>
  </tbody>
</table>

<h4>딥러닝의 학습 과정</h4>
<ol>
  <li><strong>순전파 (Forward Propagation)</strong>: 입력 데이터를 신경망에 통과시켜 예측값을 계산</li>
  <li><strong>손실 계산 (Loss Calculation)</strong>: 예측값과 실제값의 차이(오차)를 계산</li>
  <li><strong>역전파 (Back Propagation)</strong>: 오차를 역방향으로 전파하여 각 가중치의 기여도를 계산</li>
  <li><strong>가중치 업데이트</strong>: 경사 하강법(Gradient Descent)을 통해 오차를 줄이는 방향으로 가중치를 조정</li>
  <li>1~4 과정을 수많은 <strong>에포크(Epoch)</strong> 동안 반복하여 모델을 최적화</li>
</ol>

<div class="info-box">
  <strong>왜 "딥(Deep)"러닝인가?</strong> 신경망의 은닉층이 2개 이상인 경우를 "깊은(Deep)" 신경망이라 하며,
  이를 학습시키는 것을 딥러닝이라 합니다. 층이 깊어질수록 데이터의 더 추상적이고
  복잡한 특성을 학습할 수 있지만, 그만큼 많은 데이터와 컴퓨팅 파워가 필요합니다.
</div>
    `,sort_order:5},{id:206,chapter_id:2,title:"CNN과 이미지 인식",content:`
<h3>합성곱 신경망 (CNN: Convolutional Neural Network)</h3>
<p>
  <strong>CNN(합성곱 신경망)</strong>은 이미지 처리에 특화된 딥러닝 아키텍처로,
  이미지에서 특징을 자동으로 추출하고 학습하는 데 탁월한 성능을 보입니다.
  인간의 시각 피질이 시각 정보를 처리하는 방식에서 영감을 받아 설계되었습니다.
</p>

<h4>CNN의 핵심 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">입력 이미지</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">합성곱층 (Conv)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">풀링층 (Pooling)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">완전연결층 (FC)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">출력 (분류 결과)</div>
</div>

<h4>각 층의 역할</h4>
<table>
  <thead>
    <tr>
      <th>층 (Layer)</th>
      <th>역할</th>
      <th>비유</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>합성곱층 (Convolutional Layer)</strong></td>
      <td>필터를 통해 이미지의 특징(에지, 텍스처, 패턴)을 추출</td>
      <td>돋보기로 이미지의 각 부분을 세밀하게 관찰</td>
    </tr>
    <tr>
      <td><strong>풀링층 (Pooling Layer)</strong></td>
      <td>특징 맵의 크기를 줄여 연산량을 감소시키고 주요 특징만 유지</td>
      <td>핵심 정보만 요약하여 정리</td>
    </tr>
    <tr>
      <td><strong>완전연결층 (Fully Connected Layer)</strong></td>
      <td>추출된 특징들을 종합하여 최종 분류를 수행</td>
      <td>모든 단서를 종합하여 결론을 도출</td>
    </tr>
  </tbody>
</table>

<h4>CNN의 특징 학습 과정</h4>
<p>
  CNN은 층이 깊어질수록 점점 더 복잡한 특징을 학습합니다:
</p>
<ul>
  <li><strong>초기 층</strong>: 에지(edge), 선(line), 색상 변화 등 기본적 특징</li>
  <li><strong>중간 층</strong>: 질감(texture), 패턴, 도형 등 중간 수준의 특징</li>
  <li><strong>후반 층</strong>: 눈, 코, 바퀴 등 객체의 구성 요소</li>
  <li><strong>최종 층</strong>: 얼굴, 자동차, 고양이 등 완전한 객체 인식</li>
</ul>

<h4>대표적인 CNN 모델</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>연도</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LeNet-5</strong></td>
      <td>1998</td>
      <td>최초의 CNN, 손글씨 숫자 인식에 활용</td>
    </tr>
    <tr>
      <td><strong>AlexNet</strong></td>
      <td>2012</td>
      <td>ImageNet 대회 우승, 딥러닝 혁명의 시작</td>
    </tr>
    <tr>
      <td><strong>VGGNet</strong></td>
      <td>2014</td>
      <td>깊은 층(16~19층)으로 높은 성능 달성</td>
    </tr>
    <tr>
      <td><strong>ResNet</strong></td>
      <td>2015</td>
      <td>잔차 연결(Skip Connection)으로 152층까지 학습 가능</td>
    </tr>
    <tr>
      <td><strong>EfficientNet</strong></td>
      <td>2019</td>
      <td>효율적인 모델 스케일링으로 최적의 성능-효율 달성</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>CNN의 응용:</strong> 자율주행 자동차의 객체 인식, 의료 영상(X-ray, CT) 분석,
  제조업 불량 검사, 얼굴 인식 보안 시스템, 위성 영상 분석 등 시각적 정보를 처리하는
  거의 모든 AI 시스템에서 CNN이 핵심 역할을 담당합니다.
</div>
    `,sort_order:6},{id:207,chapter_id:2,title:"RNN과 자연어 처리",content:`
<h3>순환 신경망 (RNN: Recurrent Neural Network)</h3>
<p>
  <strong>RNN(순환 신경망)</strong>은 순서가 있는 연속적인 데이터(시퀀스 데이터)를 처리하기 위해
  설계된 신경망 아키텍처입니다. 이전 시점의 정보를 기억하여 현재의 판단에 활용하는 것이
  핵심 특징입니다. 텍스트, 음성, 시계열 데이터 등의 처리에 적합합니다.
</p>

<h4>RNN의 작동 원리</h4>
<p>
  일반적인 신경망은 각 입력을 독립적으로 처리하지만, RNN은 <strong>순환 구조(Recurrent Structure)</strong>를
  통해 이전 시점의 출력(은닉 상태)을 다음 시점의 입력에 함께 전달합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> RNN은 마치 소설을 읽는 것과 같습니다. 현재 문장을 이해할 때
  앞에서 읽은 내용(문맥)을 기억하고 있어야 의미를 정확히 파악할 수 있습니다.
  RNN도 이전 시점의 정보를 "기억"하면서 다음 입력을 처리합니다.
</div>

<h4>RNN의 한계: 기울기 소실 문제</h4>
<p>
  기본 RNN은 긴 시퀀스를 처리할 때 <strong>기울기 소실(Vanishing Gradient)</strong> 문제가 발생합니다.
  역전파 과정에서 기울기가 점점 작아져, 먼 과거의 정보를 학습하기 어려워지는 현상입니다.
</p>

<h4>LSTM (Long Short-Term Memory)</h4>
<p>
  <strong>LSTM</strong>은 RNN의 기울기 소실 문제를 해결하기 위해 1997년에 제안된 아키텍처입니다.
  <em>셀 상태(Cell State)</em>와 세 개의 <em>게이트(Gate)</em>를 도입하여 장기 기억을 효과적으로 유지합니다.
</p>
<ul>
  <li><strong>입력 게이트 (Input Gate)</strong>: 새로운 정보 중 어떤 것을 저장할지 결정</li>
  <li><strong>망각 게이트 (Forget Gate)</strong>: 기존 기억 중 어떤 것을 버릴지 결정</li>
  <li><strong>출력 게이트 (Output Gate)</strong>: 저장된 정보 중 어떤 것을 출력할지 결정</li>
</ul>

<h4>GRU (Gated Recurrent Unit)</h4>
<p>
  <strong>GRU</strong>는 LSTM을 단순화한 구조로, 게이트 수를 줄여(리셋 게이트, 업데이트 게이트)
  연산 효율성을 높이면서도 유사한 성능을 달성합니다.
</p>

<h4>RNN 계열의 활용 분야</h4>
<table>
  <thead>
    <tr>
      <th>활용 분야</th>
      <th>입력</th>
      <th>출력</th>
      <th>예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>기계 번역</strong></td>
      <td>원문 텍스트</td>
      <td>번역 텍스트</td>
      <td>한국어 문장을 영어로 번역</td>
    </tr>
    <tr>
      <td><strong>텍스트 생성</strong></td>
      <td>시작 문장</td>
      <td>이어지는 텍스트</td>
      <td>소설, 기사 자동 작성</td>
    </tr>
    <tr>
      <td><strong>감정 분석</strong></td>
      <td>리뷰 텍스트</td>
      <td>감정 레이블</td>
      <td>긍정/부정/중립 분류</td>
    </tr>
    <tr>
      <td><strong>음성 인식</strong></td>
      <td>음성 신호</td>
      <td>텍스트</td>
      <td>시리, 빅스비 음성 명령 인식</td>
    </tr>
    <tr>
      <td><strong>시계열 예측</strong></td>
      <td>과거 데이터</td>
      <td>미래 예측값</td>
      <td>주가 예측, 수요 예측</td>
    </tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>참고:</strong> RNN/LSTM은 자연어 처리 분야에서 오랫동안 핵심 아키텍처로 활용되었으나,
  2017년 트랜스포머(Transformer)의 등장 이후 대부분의 최신 모델은 트랜스포머 기반으로
  전환되었습니다. 다음 절에서 트랜스포머에 대해 자세히 알아보겠습니다.
</div>
    `,sort_order:7},{id:208,chapter_id:2,title:"트랜스포머와 대규모 언어모델",content:`
<h3>트랜스포머 (Transformer) 아키텍처</h3>
<p>
  <strong>트랜스포머(Transformer)</strong>는 2017년 구글 연구팀이 발표한 논문
  "Attention Is All You Need"에서 제안된 혁신적인 신경망 아키텍처입니다.
  기존 RNN의 순차적 처리 한계를 극복하고, <strong>셀프 어텐션(Self-Attention)</strong> 메커니즘을 통해
  병렬 처리가 가능하여 훈련 속도와 성능 모두 크게 향상되었습니다.
</p>

<h4>어텐션 메커니즘 (Attention Mechanism)</h4>
<p>
  어텐션 메커니즘은 입력 시퀀스의 모든 위치에 대해 <strong>"어디에 주의를 기울일 것인가"</strong>를
  학습하는 방법입니다. 문장 속 각 단어가 다른 모든 단어와의 관계를 동시에 파악합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> "나는 사과를 먹었다"라는 문장에서 "먹었다"를 이해할 때,
  어텐션 메커니즘은 "나"(주어)와 "사과"(목적어)에 높은 주의를 기울이고,
  다른 단어에는 상대적으로 낮은 주의를 기울입니다. 이처럼 문맥에 따라
  중요한 단어에 집중하는 것이 어텐션의 핵심입니다.
</div>

<h4>트랜스포머의 구조</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>인코더 (Encoder)</h4>
    <ul>
      <li>입력 텍스트를 고차원 벡터로 변환</li>
      <li>셀프 어텐션 + 피드포워드 신경망</li>
      <li>BERT, RoBERTa 등이 인코더 기반</li>
      <li>주로 텍스트 이해 작업에 활용</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>디코더 (Decoder)</h4>
    <ul>
      <li>벡터를 다시 텍스트로 변환 (생성)</li>
      <li>마스크드 셀프 어텐션 + 크로스 어텐션</li>
      <li>GPT 시리즈가 디코더 기반</li>
      <li>주로 텍스트 생성 작업에 활용</li>
    </ul>
  </div>
</div>

<h4>대규모 언어모델 (LLM: Large Language Model)</h4>
<p>
  트랜스포머 아키텍처를 기반으로 방대한 양의 텍스트 데이터를 학습한 초대형 모델을
  <strong>대규모 언어모델(LLM)</strong>이라 합니다.
</p>

<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>개발사</th>
      <th>특징</th>
      <th>파라미터 수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BERT</strong></td>
      <td>Google (2018)</td>
      <td>양방향 인코더, 텍스트 이해에 특화</td>
      <td>3.4억</td>
    </tr>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>OpenAI (2020)</td>
      <td>초대형 디코더 모델, 텍스트 생성</td>
      <td>1,750억</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>OpenAI (2023)</td>
      <td>멀티모달(텍스트+이미지), 추론 능력 강화</td>
      <td>비공개 (추정 1조+)</td>
    </tr>
    <tr>
      <td><strong>Claude</strong></td>
      <td>Anthropic (2023~)</td>
      <td>Constitutional AI, 안전성 중시</td>
      <td>비공개</td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>Google (2023~)</td>
      <td>멀티모달, 다양한 크기의 모델 제공</td>
      <td>비공개</td>
    </tr>
  </tbody>
</table>

<h4>LLM의 학습 방법</h4>
<ol>
  <li><strong>사전 학습 (Pre-training)</strong>: 인터넷의 방대한 텍스트 데이터를 학습하여 언어의 일반적 패턴을 습득</li>
  <li><strong>미세 조정 (Fine-tuning)</strong>: 특정 작업에 맞는 데이터로 추가 학습하여 성능을 최적화</li>
  <li><strong>RLHF (인간 피드백 강화학습)</strong>: 인간의 선호도 데이터를 바탕으로 응답 품질을 개선</li>
</ol>

<div class="info-box">
  <strong>트랜스포머의 영향:</strong> 트랜스포머는 자연어 처리를 넘어 컴퓨터 비전(Vision Transformer),
  음성 인식, 단백질 구조 예측, 코드 생성 등 거의 모든 AI 분야에 혁신을 가져왔으며,
  현재 AI 발전의 가장 핵심적인 기반 기술입니다.
</div>
    `,sort_order:8},{id:209,chapter_id:2,title:"학습 정리",content:`
<h3>Chapter 2 학습 정리: 머신러닝과 딥러닝</h3>
<p>이번 장에서 학습한 핵심 개념을 정리합니다.</p>

<div class="info-box">
  <h4>핵심 개념 요약</h4>
  <ol>
    <li><strong>머신러닝</strong>은 데이터에서 패턴을 자동으로 학습하는 기술로, 전통적 프로그래밍과 근본적으로 다릅니다.</li>
    <li><strong>지도학습</strong>은 정답이 있는 데이터를 학습하며, 분류와 회귀 두 가지 유형이 있습니다.</li>
    <li><strong>비지도학습</strong>은 정답 없이 데이터의 숨겨진 패턴을 발견하며, 클러스터링과 차원 축소가 대표적입니다.</li>
    <li><strong>강화학습</strong>은 에이전트가 환경과 상호작용하며 보상을 최대화하는 행동을 학습합니다.</li>
    <li><strong>딥러닝</strong>은 여러 층의 인공 신경망을 통해 복잡한 패턴을 학습하는 머신러닝의 하위 분야입니다.</li>
    <li><strong>CNN</strong>은 이미지 처리에 특화된 아키텍처로, 합성곱층을 통해 시각적 특징을 자동 추출합니다.</li>
    <li><strong>RNN/LSTM</strong>은 순서가 있는 데이터를 처리하며, 이전 정보를 기억하여 활용합니다.</li>
    <li><strong>트랜스포머</strong>는 어텐션 메커니즘 기반의 혁신적 아키텍처로, GPT, BERT 등 LLM의 기반입니다.</li>
  </ol>
</div>

<h4>핵심 용어 정리</h4>
<table>
  <thead>
    <tr>
      <th>용어</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>머신러닝</strong></td>
      <td>데이터에서 패턴을 자동으로 학습하는 AI 기술</td>
    </tr>
    <tr>
      <td><strong>지도학습</strong></td>
      <td>라벨이 있는 데이터로 학습 (분류, 회귀)</td>
    </tr>
    <tr>
      <td><strong>비지도학습</strong></td>
      <td>라벨 없이 데이터의 구조를 탐색 (클러스터링)</td>
    </tr>
    <tr>
      <td><strong>강화학습</strong></td>
      <td>보상 신호를 통해 최적 행동을 학습</td>
    </tr>
    <tr>
      <td><strong>인공 신경망</strong></td>
      <td>뇌의 뉴런 구조를 모방한 연산 모델</td>
    </tr>
    <tr>
      <td><strong>CNN</strong></td>
      <td>이미지 인식에 특화된 합성곱 신경망</td>
    </tr>
    <tr>
      <td><strong>RNN / LSTM</strong></td>
      <td>시퀀스 데이터 처리를 위한 순환 신경망</td>
    </tr>
    <tr>
      <td><strong>트랜스포머</strong></td>
      <td>어텐션 기반의 혁신적 신경망 아키텍처</td>
    </tr>
    <tr>
      <td><strong>LLM</strong></td>
      <td>대규모 언어모델 (GPT, Claude, Gemini 등)</td>
    </tr>
    <tr>
      <td><strong>RLHF</strong></td>
      <td>인간 피드백 기반 강화학습으로 LLM 성능 개선</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>다음 장 미리보기:</strong> Chapter 3에서는 AI의 역사와 발전 과정을 탐구합니다.
  1950년대 AI의 탄생부터 AI 겨울, 딥러닝 혁명, 그리고 생성형 AI의 등장까지
  AI 발전의 주요 이정표를 시간 순서대로 살펴보겠습니다.
</div>
    `,sort_order:9},{id:210,chapter_id:2,title:"학습 확인 문제",content:`
<h3>Chapter 2 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>전통적 프로그래밍과 머신러닝의 가장 큰 차이점은 무엇인가요?</strong></p>
  <ol type="a">
    <li>머신러닝은 컴퓨터를 사용하지 않는다</li>
    <li>전통적 프로그래밍은 규칙을 인간이 작성하고, 머신러닝은 데이터에서 규칙을 학습한다</li>
    <li>전통적 프로그래밍은 데이터가 필요 없다</li>
    <li>머신러닝은 항상 전통적 프로그래밍보다 빠르다</li>
  </ol>
  <p><em>정답: b) 전통적 프로그래밍은 규칙을 인간이 작성하고, 머신러닝은 데이터에서 규칙을 학습한다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>"이메일을 스팸/정상으로 분류하는 AI"는 어떤 학습 유형에 해당하나요?</strong></p>
  <ol type="a">
    <li>비지도학습 - 클러스터링</li>
    <li>강화학습</li>
    <li>지도학습 - 분류</li>
    <li>지도학습 - 회귀</li>
  </ol>
  <p><em>정답: c) 지도학습 - 분류. 정답 라벨(스팸/정상)이 있는 데이터로 학습하며, 이산적 범주를 예측하므로 분류입니다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>강화학습에서 에이전트가 학습하는 방법으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>정답 라벨이 있는 데이터를 학습한다</li>
    <li>데이터의 클러스터를 자동으로 발견한다</li>
    <li>환경과 상호작용하면서 보상을 최대화하는 행동을 학습한다</li>
    <li>인간이 작성한 규칙에 따라 작동한다</li>
  </ol>
  <p><em>정답: c) 환경과 상호작용하면서 보상을 최대화하는 행동을 학습한다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>CNN(합성곱 신경망)이 주로 활용되는 분야는?</strong></p>
  <ol type="a">
    <li>주가 예측</li>
    <li>이미지 인식 및 컴퓨터 비전</li>
    <li>음성 합성</li>
    <li>텍스트 번역</li>
  </ol>
  <p><em>정답: b) 이미지 인식 및 컴퓨터 비전. CNN은 합성곱층을 통해 이미지의 시각적 특징을 자동으로 추출하는 데 특화되어 있습니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>트랜스포머(Transformer) 아키텍처의 핵심 메커니즘은 무엇이며, 이것이 RNN 대비 갖는 장점은?</strong></p>
  <ol type="a">
    <li>순환 구조 — 순차적 처리로 정확도가 높다</li>
    <li>합성곱 — 이미지 처리에 최적화되어 있다</li>
    <li>셀프 어텐션 — 병렬 처리가 가능하고 장거리 의존성을 효과적으로 학습한다</li>
    <li>풀링 — 데이터 크기를 줄여 효율성이 높다</li>
  </ol>
  <p><em>정답: c) 셀프 어텐션 — 모든 위치의 단어 관계를 동시에 파악하여 병렬 처리가 가능하고, RNN의 기울기 소실 문제 없이 장거리 의존성을 효과적으로 학습합니다.</em></p>
</div>
    `,sort_order:10}],Z_=[{id:301,chapter_id:3,title:"AI의 탄생",content:`
<h3>AI의 탄생: 다트머스 회의와 초기 연구</h3>
<p>
  인공지능의 역사는 <strong>1950년대</strong>로 거슬러 올라갑니다. AI라는 개념이 학문적으로 정립되기 이전에도
  "기계가 생각할 수 있는가?"라는 질문은 수많은 과학자와 철학자들의 관심사였습니다.
  이 질문에 최초로 과학적 접근을 시도한 인물이 바로 <strong>앨런 튜링(Alan Turing)</strong>입니다.
</p>

<h4>앨런 튜링과 "기계의 사고"</h4>
<p>
  1950년, 영국의 수학자 앨런 튜링은 논문 <em>"Computing Machinery and Intelligence"</em>를 발표하며
  "기계가 생각할 수 있는가?"라는 역사적 질문을 던졌습니다. 그는 이 질문에 답하기 위해
  <strong>튜링 테스트(Turing Test)</strong>를 제안했습니다. 인간 심사관이 기계와 대화를 나눌 때
  상대방이 기계인지 인간인지 구별할 수 없다면, 그 기계는 "지능적"이라 간주할 수 있다는 것이었습니다.
</p>

<div class="info-box">
  <strong>앨런 튜링 (1912-1954):</strong> 현대 컴퓨터 과학의 아버지로 불리며, 2차 세계대전 중
  독일군의 에니그마(Enigma) 암호를 해독하여 전쟁 종결에 기여했습니다. 그의 "튜링 머신" 개념은
  현대 컴퓨터의 이론적 토대가 되었습니다.
</div>

<h4>다트머스 회의 (1956)</h4>
<p>
  1956년 여름, 미국 다트머스 대학교에서 열린 <strong>다트머스 회의(Dartmouth Conference)</strong>는
  AI 역사의 가장 중요한 이정표입니다. <strong>존 매카시(John McCarthy)</strong>가 주도하고,
  <strong>마빈 민스키(Marvin Minsky)</strong>, <strong>클로드 섀넌(Claude Shannon)</strong>,
  <strong>나다니엘 로체스터(Nathaniel Rochester)</strong> 등이 참여한 이 회의에서
  "인공지능(Artificial Intelligence)"이라는 용어가 공식적으로 탄생했습니다.
</p>

<table>
  <thead>
    <tr>
      <th>인물</th>
      <th>소속</th>
      <th>주요 공헌</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>존 매카시</strong></td>
      <td>다트머스 대학</td>
      <td>"인공지능" 용어 제안, LISP 언어 개발</td>
    </tr>
    <tr>
      <td><strong>마빈 민스키</strong></td>
      <td>MIT</td>
      <td>신경망 연구, MIT AI 연구소 설립</td>
    </tr>
    <tr>
      <td><strong>클로드 섀넌</strong></td>
      <td>벨 연구소</td>
      <td>정보 이론의 창시자</td>
    </tr>
    <tr>
      <td><strong>앨런 뉴웰 & 허버트 사이먼</strong></td>
      <td>카네기멜런 대학</td>
      <td>Logic Theorist -- 최초의 AI 프로그램</td>
    </tr>
  </tbody>
</table>

<div class="flow-diagram">
  <div class="flow-step">튜링 테스트 제안 (1950)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">다트머스 회의 (1956)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">"인공지능" 용어 탄생</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 연구 본격화</div>
</div>

<div class="info-box">
  <strong>다트머스 회의의 의의:</strong> 이 회의는 AI를 독립적인 학문 분야로 확립하고, 향후 수십 년간
  AI 연구의 방향을 결정지었습니다. 참가자들은 "기계가 언어를 사용하고, 추상적 개념을 형성하며,
  인간만이 할 수 있는 문제를 풀 수 있을 것"이라는 낙관적 전망을 공유했습니다.
</div>
    `,sort_order:1},{id:302,chapter_id:3,title:"AI의 첫 번째 황금기",content:`
<h3>AI의 첫 번째 황금기 (1950s-1960s)</h3>
<p>
  다트머스 회의 이후 AI 연구는 강력한 낙관론과 함께 첫 번째 황금기를 맞이했습니다.
  정부와 군사 기관의 대규모 연구 자금이 투입되었고, 초기 AI 프로그램들이
  놀라운 성과를 보여주면서 연구자들은 "곧 인간 수준의 AI가 실현될 것"이라 확신했습니다.
</p>

<h4>초기 AI 프로그램들</h4>
<table>
  <thead>
    <tr>
      <th>프로그램</th>
      <th>연도</th>
      <th>개발자</th>
      <th>기능</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Logic Theorist</strong></td>
      <td>1956</td>
      <td>뉴웰 & 사이먼</td>
      <td>수학 정리를 자동으로 증명 -- 최초의 AI 프로그램</td>
    </tr>
    <tr>
      <td><strong>GPS</strong></td>
      <td>1957</td>
      <td>뉴웰 & 사이먼</td>
      <td>General Problem Solver -- 범용 문제 해결기</td>
    </tr>
    <tr>
      <td><strong>Perceptron</strong></td>
      <td>1958</td>
      <td>프랭크 로젠블랫</td>
      <td>최초의 인공 신경망 모델</td>
    </tr>
    <tr>
      <td><strong>ELIZA</strong></td>
      <td>1966</td>
      <td>조셉 와이젠바움</td>
      <td>최초의 챗봇 -- 심리 상담사를 모방</td>
    </tr>
    <tr>
      <td><strong>SHRDLU</strong></td>
      <td>1968</td>
      <td>테리 위노그래드</td>
      <td>제한된 세계에서 자연어를 이해하고 행동</td>
    </tr>
  </tbody>
</table>

<h4>ELIZA: 최초의 대화형 AI</h4>
<p>
  <strong>ELIZA</strong>는 MIT의 조셉 와이젠바움(Joseph Weizenbaum)이 1966년에 개발한 프로그램으로,
  칼 로저스(Carl Rogers)의 내담자 중심 심리 상담 기법을 모방했습니다. ELIZA는 사용자의 입력에서
  핵심 단어를 인식하고, 미리 정해진 패턴에 따라 응답을 생성하는 단순한 규칙 기반 시스템이었지만,
  많은 사용자들이 ELIZA가 실제로 자신을 이해한다고 느꼈습니다.
</p>

<div class="info-box">
  <strong>ELIZA 효과:</strong> 사람들이 컴퓨터 프로그램에 인간적 감정과 이해 능력을 부여하는 현상을
  "ELIZA 효과"라고 합니다. 이는 오늘날 ChatGPT와 같은 AI 챗봇에 대한 사용자 반응에서도
  동일하게 관찰되는 현상입니다.
</div>

<h4>퍼셉트론: 최초의 인공 신경망</h4>
<p>
  1958년 프랭크 로젠블랫(Frank Rosenblatt)이 개발한 <strong>퍼셉트론(Perceptron)</strong>은
  인간 뇌의 뉴런을 모방한 최초의 인공 신경망 모델이었습니다. 간단한 패턴 인식이 가능했으며,
  당시 뉴욕 타임즈는 "해군이 생각하는 기계의 씨앗을 보여주었다"고 보도했습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">Logic Theorist (1956)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">퍼셉트론 (1958)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">ELIZA (1966)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">SHRDLU (1968)</div>
</div>

<div class="info-box warning">
  <strong>낙관론의 그림자:</strong> 초기 성과에 고무된 연구자들은 과도한 약속을 남발했습니다.
  허버트 사이먼은 1965년 "20년 내에 기계가 인간이 할 수 있는 모든 일을 해낼 것"이라 예측했고,
  마빈 민스키는 "한 세대 안에 AI 문제가 해결될 것"이라 주장했습니다.
  이러한 과도한 낙관은 이후 큰 실망으로 이어지게 됩니다.
</div>
    `,sort_order:2},{id:303,chapter_id:3,title:"첫 번째 AI 겨울",content:`
<h3>첫 번째 AI 겨울 (1970s)</h3>
<p>
  1950-60년대의 낙관적 전망과 달리, AI 연구는 1970년대에 들어 심각한 벽에 부딪혔습니다.
  초기 AI 시스템들의 <strong>근본적 한계</strong>가 드러나면서, 연구 자금이 대폭 삭감되고
  AI 분야 전체가 침체기에 빠지게 됩니다. 이 시기를 <strong>"첫 번째 AI 겨울(First AI Winter)"</strong>이라 부릅니다.
</p>

<h4>한계가 드러난 핵심 영역</h4>

<div class="compare-grid">
  <div class="compare-item">
    <h4>기술적 한계</h4>
    <ul>
      <li>컴퓨터 연산 능력의 절대적 부족</li>
      <li>자연어 처리의 근본적 어려움</li>
      <li>상식 추론(Common Sense Reasoning)의 불가능</li>
      <li>조합 폭발(Combinatorial Explosion) 문제</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>사회적 한계</h4>
    <ul>
      <li>과도한 약속과 기대에 미치지 못하는 결과</li>
      <li>정부 및 군사 연구 자금 대폭 삭감</li>
      <li>학계와 산업계의 AI 연구 관심 저하</li>
      <li>연구자들의 이탈과 사기 저하</li>
    </ul>
  </div>
</div>

<h4>퍼셉트론의 한계 -- 민스키와 패퍼트의 비판</h4>
<p>
  1969년, <strong>마빈 민스키(Marvin Minsky)</strong>와 <strong>시무어 패퍼트(Seymour Papert)</strong>는
  저서 <em>"Perceptrons"</em>에서 단층 퍼셉트론의 근본적 한계를 수학적으로 증명했습니다.
  특히 <strong>XOR 문제</strong>(배타적 논리합)를 해결할 수 없다는 점을 지적하면서,
  신경망 연구에 치명적인 타격을 가했습니다.
</p>

<div class="info-box warning">
  <strong>XOR 문제:</strong> 단층 퍼셉트론은 선형적으로 분리 가능한 문제만 해결할 수 있습니다.
  XOR(배타적 논리합)처럼 비선형적 분류가 필요한 문제는 처리할 수 없었으며,
  이 한계가 신경망 연구의 침체를 가속화했습니다. 이 문제는 이후 다층 퍼셉트론(MLP)으로 해결됩니다.
</div>

<h4>라이트힐 보고서 (1973)</h4>
<p>
  영국의 수학자 <strong>제임스 라이트힐(James Lighthill)</strong>은 1973년 영국 과학연구위원회의 의뢰로
  작성한 보고서에서 AI 연구의 성과가 초기 약속에 크게 미치지 못한다고 결론지었습니다.
  이 보고서는 영국 내 AI 연구 자금의 전면적 삭감으로 이어졌으며,
  미국에서도 DARPA(국방고등연구계획국)의 AI 연구 지원이 축소되었습니다.
</p>

<table>
  <thead>
    <tr>
      <th>사건</th>
      <th>연도</th>
      <th>영향</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>"Perceptrons" 출간</strong></td>
      <td>1969</td>
      <td>신경망 연구 급격히 위축</td>
    </tr>
    <tr>
      <td><strong>라이트힐 보고서</strong></td>
      <td>1973</td>
      <td>영국 AI 연구 자금 전면 삭감</td>
    </tr>
    <tr>
      <td><strong>DARPA 자금 축소</strong></td>
      <td>1974</td>
      <td>미국 AI 연구 규모 대폭 감소</td>
    </tr>
    <tr>
      <td><strong>기계 번역 실패</strong></td>
      <td>1966-1974</td>
      <td>자연어 처리 연구 투자 중단</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>AI 겨울의 교훈:</strong> 첫 번째 AI 겨울은 과도한 기대와 약속이
  실제 기술 수준과 괴리될 때 발생하는 "기대 거품(Hype Bubble)"의 전형적 사례입니다.
  이 교훈은 오늘날 AI 기술에 대한 기대를 설정할 때도 여전히 유효합니다.
</div>
    `,sort_order:3},{id:304,chapter_id:3,title:"전문가 시스템의 시대",content:`
<h3>전문가 시스템의 시대 (1980s)</h3>
<p>
  1980년대에 들어 AI는 <strong>전문가 시스템(Expert System)</strong>이라는 새로운 패러다임으로 부활했습니다.
  전문가 시스템은 특정 분야의 전문가 지식을 규칙(Rule) 형태로 컴퓨터에 입력하여,
  해당 분야의 의사결정을 지원하는 시스템입니다. 이 접근법은 실용적인 성과를 보여주며
  AI의 두 번째 황금기를 열었습니다.
</p>

<h4>전문가 시스템의 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">지식 베이스 (Knowledge Base)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">추론 엔진 (Inference Engine)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">사용자 인터페이스</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">전문가 수준의 판단</div>
</div>

<h4>대표적인 전문가 시스템</h4>
<table>
  <thead>
    <tr>
      <th>시스템</th>
      <th>연도</th>
      <th>분야</th>
      <th>성과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>DENDRAL</strong></td>
      <td>1965-1970s</td>
      <td>화학</td>
      <td>화학 구조를 분석하여 분자식 추론 -- 최초의 전문가 시스템</td>
    </tr>
    <tr>
      <td><strong>MYCIN</strong></td>
      <td>1972-1976</td>
      <td>의료</td>
      <td>혈액 감염 진단 및 항생제 처방 -- 약 69% 정확도로 전문의 수준</td>
    </tr>
    <tr>
      <td><strong>XCON (R1)</strong></td>
      <td>1980</td>
      <td>제조</td>
      <td>DEC 컴퓨터 주문 구성 자동화 -- 연간 수천만 달러 절감</td>
    </tr>
    <tr>
      <td><strong>PROSPECTOR</strong></td>
      <td>1983</td>
      <td>지질학</td>
      <td>광물 탐사 지원 -- 실제 몰리브덴 광맥 발견에 기여</td>
    </tr>
  </tbody>
</table>

<h4>전문가 시스템의 장점과 한계</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>장점</h4>
    <ul>
      <li>전문가 지식의 체계적 보존 및 전달</li>
      <li>일관된 의사결정 지원</li>
      <li>24시간 운영 가능</li>
      <li>의사결정 과정의 투명한 설명 가능</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>한계</h4>
    <ul>
      <li>지식 획득의 어려움 (Knowledge Acquisition Bottleneck)</li>
      <li>새로운 상황에 대한 적응 불가</li>
      <li>유지보수 비용 급증</li>
      <li>상식 추론 능력 부재</li>
    </ul>
  </div>
</div>

<h4>일본의 제5세대 컴퓨터 프로젝트</h4>
<p>
  1982년, 일본 통산성(MITI)은 <strong>제5세대 컴퓨터 프로젝트</strong>를 시작했습니다.
  10년간 약 8억 5천만 달러를 투자하여 자연어를 이해하고, 병렬 처리가 가능한 AI 컴퓨터를
  개발하려 했습니다. 이 프로젝트는 미국과 유럽에서도 AI 연구 투자 경쟁을 촉발했지만,
  결과적으로 당초 목표를 달성하지 못했습니다.
</p>

<div class="info-box">
  <strong>상업적 성공과 교훈:</strong> 전문가 시스템은 AI의 첫 번째 상업적 성공 사례로,
  1980년대 중반 전 세계적으로 수십억 달러 규모의 산업을 형성했습니다.
  그러나 시스템의 확장성과 유연성 부족은 결국 두 번째 AI 겨울을 초래하게 됩니다.
</div>
    `,sort_order:4},{id:305,chapter_id:3,title:"두 번째 AI 겨울",content:`
<h3>두 번째 AI 겨울 (1990s)</h3>
<p>
  1980년대 후반부터 1990년대 중반까지, AI 산업은 다시 한번 심각한 침체기를 겪었습니다.
  전문가 시스템의 한계가 드러나고 상업적 실패가 연이어 발생하면서,
  <strong>"두 번째 AI 겨울(Second AI Winter)"</strong>이 찾아왔습니다.
</p>

<h4>전문가 시스템의 붕괴</h4>
<p>
  전문가 시스템은 초기의 기대와 달리 여러 가지 근본적 문제에 직면했습니다.
  규칙 기반 접근법의 한계가 명확해지면서, 기업들은 막대한 투자 손실을 입었습니다.
</p>

<table>
  <thead>
    <tr>
      <th>문제점</th>
      <th>설명</th>
      <th>결과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>지식 획득 병목</strong></td>
      <td>전문가의 지식을 규칙으로 변환하는 과정이 매우 어렵고 비용이 많이 듦</td>
      <td>시스템 구축 비용 급증</td>
    </tr>
    <tr>
      <td><strong>취약성</strong></td>
      <td>규칙에 없는 새로운 상황에 전혀 대응 불가</td>
      <td>실무 적용 시 잦은 오류</td>
    </tr>
    <tr>
      <td><strong>유지보수 불가</strong></td>
      <td>규칙이 수만 개로 늘어나면 상호 모순과 충돌 발생</td>
      <td>시스템 관리 포기</td>
    </tr>
    <tr>
      <td><strong>하드웨어 의존성</strong></td>
      <td>LISP 머신 등 고가의 전용 하드웨어 필요</td>
      <td>저렴한 PC에 밀려 경쟁력 상실</td>
    </tr>
  </tbody>
</table>

<h4>AI 겨울의 주요 사건들</h4>
<div class="flow-diagram">
  <div class="flow-step">LISP 머신 시장 붕괴 (1987)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 기업 대량 도산 (1988-1993)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">제5세대 프로젝트 실패 (1992)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 연구 자금 최저점</div>
</div>

<p>
  1987년, LISP 머신 시장이 갑작스럽게 붕괴하면서 AI 전문 기업들이 대량으로 도산했습니다.
  Symbolics, Lisp Machines Inc., IntelliCorp 등의 기업이 파산하거나 규모를 대폭 축소했습니다.
  동시에 일본의 제5세대 컴퓨터 프로젝트도 목표를 달성하지 못한 채 종료되었습니다.
</p>

<div class="info-box warning">
  <strong>"AI"라는 이름의 낙인:</strong> 두 번째 AI 겨울 동안 "인공지능"이라는 용어 자체가
  부정적 낙인이 되었습니다. 많은 연구자들은 자신의 연구가 AI로 분류되는 것을 피하고자
  "기계학습(Machine Learning)", "패턴 인식(Pattern Recognition)", "지능 시스템(Intelligent Systems)" 등
  대체 용어를 사용하기 시작했습니다.
</div>

<h4>겨울 속에서 피어난 씨앗</h4>
<p>
  그러나 두 번째 AI 겨울 동안에도 일부 중요한 연구 성과가 있었습니다:
</p>
<ul>
  <li><strong>역전파 알고리즘(Backpropagation)</strong>의 재발견 (1986, 루멜하트 & 힌턴)</li>
  <li><strong>서포트 벡터 머신(SVM)</strong>의 개발 (1990s, 바프닉)</li>
  <li><strong>통계적 자연어 처리</strong> 연구의 기초 마련</li>
  <li><strong>랜덤 포레스트</strong> 등 앙상블 기법 발전</li>
  <li><strong>IBM 딥블루</strong>의 체스 세계 챔피언 격파 (1997)</li>
</ul>

<div class="info-box">
  <strong>교훈:</strong> 두 번의 AI 겨울은 "과도한 기대 -> 실망 -> 투자 축소"라는 기술 발전의
  전형적 패턴을 보여줍니다. 하지만 각 겨울 이후 AI는 더 견고한 기반 위에서 다시 성장했으며,
  겨울 동안 축적된 연구 성과가 다음 도약의 밑거름이 되었습니다.
</div>
    `,sort_order:5},{id:306,chapter_id:3,title:"머신러닝의 부상",content:`
<h3>머신러닝의 부상 (2000s)</h3>
<p>
  2000년대에 들어 AI 연구는 새로운 전환점을 맞이했습니다. 규칙 기반 접근에서
  <strong>데이터 기반의 통계적 학습</strong>으로 패러다임이 전환되면서,
  <strong>머신러닝(Machine Learning)</strong>이 AI의 주류 방법론으로 부상했습니다.
  인터넷의 폭발적 성장으로 대규모 데이터가 축적되고, 컴퓨팅 파워가 향상된 것이 핵심 동력이었습니다.
</p>

<h4>패러다임 전환: 규칙 기반 -> 데이터 기반</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>규칙 기반 AI (과거)</h4>
    <ul>
      <li>인간 전문가가 규칙을 직접 작성</li>
      <li>지식 획득 병목 문제</li>
      <li>새로운 상황 대응 불가</li>
      <li>전문가 시스템 시대의 주류</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>데이터 기반 AI (2000s~)</h4>
    <ul>
      <li>대규모 데이터에서 패턴을 자동 학습</li>
      <li>데이터가 많을수록 성능 향상</li>
      <li>다양한 상황에 적응 가능</li>
      <li>머신러닝, 통계적 학습의 주류화</li>
    </ul>
  </div>
</div>

<h4>핵심 알고리즘과 기술</h4>
<table>
  <thead>
    <tr>
      <th>알고리즘/기술</th>
      <th>등장</th>
      <th>특징</th>
      <th>활용 분야</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>서포트 벡터 머신 (SVM)</strong></td>
      <td>1990s-2000s</td>
      <td>최적의 결정 경계를 찾는 분류기</td>
      <td>텍스트 분류, 이미지 인식</td>
    </tr>
    <tr>
      <td><strong>랜덤 포레스트</strong></td>
      <td>2001</td>
      <td>다수의 결정 트리를 조합하는 앙상블 기법</td>
      <td>의료 진단, 금융 분석</td>
    </tr>
    <tr>
      <td><strong>부스팅 (Boosting)</strong></td>
      <td>2000s</td>
      <td>약한 분류기를 순차적으로 결합</td>
      <td>광고 클릭 예측, 추천 시스템</td>
    </tr>
    <tr>
      <td><strong>베이즈 네트워크</strong></td>
      <td>2000s</td>
      <td>확률적 추론 모델</td>
      <td>스팸 필터, 진단 시스템</td>
    </tr>
  </tbody>
</table>

<h4>머신러닝 부상의 세 가지 동력</h4>
<div class="flow-diagram">
  <div class="flow-step">빅데이터의 등장</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">컴퓨팅 파워 향상</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">알고리즘 혁신</div>
</div>

<ul>
  <li><strong>빅데이터</strong>: 인터넷, SNS, 전자상거래의 폭발적 성장으로 학습에 필요한 대규모 데이터 확보</li>
  <li><strong>컴퓨팅 파워</strong>: CPU 성능 향상과 클라우드 컴퓨팅으로 대규모 연산 가능</li>
  <li><strong>알고리즘 혁신</strong>: SVM, 앙상블 기법 등 효과적인 학습 알고리즘 개발</li>
</ul>

<h4>실용적 성과</h4>
<p>
  2000년대 머신러닝은 실생활에서 눈에 띄는 성과를 내기 시작했습니다:
</p>
<ul>
  <li><strong>구글 검색 엔진</strong>: PageRank + 머신러닝으로 검색 품질 혁신</li>
  <li><strong>넷플릭스 추천</strong>: 2006년 넷플릭스 프라이즈(100만 달러 상금) 대회 개최</li>
  <li><strong>스팸 필터</strong>: 베이지안 필터링으로 이메일 스팸 탐지 실용화</li>
  <li><strong>음성 인식</strong>: 통계적 모델로 음성 인식 정확도 크게 향상</li>
</ul>

<div class="info-box">
  <strong>조용한 혁명:</strong> 2000년대 머신러닝의 부상은 1950-60년대처럼 화려한 약속이 아닌,
  실질적인 성과에 기반한 "조용한 혁명"이었습니다. "AI"라는 용어 대신 "머신러닝", "데이터 마이닝"이라는
  이름으로 불리며, 실용적 문제 해결에 집중한 것이 이전 시기와의 가장 큰 차이점입니다.
</div>
    `,sort_order:6},{id:307,chapter_id:3,title:"딥러닝 혁명",content:`
<h3>딥러닝 혁명 (2010s)</h3>
<p>
  2010년대는 AI 역사에서 가장 극적인 전환점으로, <strong>딥러닝(Deep Learning)</strong>이
  거의 모든 AI 분야에서 혁명적 성과를 달성한 시기입니다. 이 혁명의 시작점은
  2012년 <strong>ImageNet 대회에서의 AlexNet의 압도적 승리</strong>였습니다.
</p>

<h4>AlexNet과 ImageNet (2012)</h4>
<p>
  2012년, 토론토 대학의 <strong>제프리 힌턴(Geoffrey Hinton)</strong> 교수 연구팀의 알렉스 크리체프스키(Alex Krizhevsky)가
  개발한 <strong>AlexNet</strong>이 ImageNet Large Scale Visual Recognition Challenge(ILSVRC)에서
  기존 방법보다 <strong>10%p 이상</strong> 높은 정확도로 우승했습니다. 이 사건은 딥러닝 혁명의 서막이었습니다.
</p>

<div class="info-box">
  <strong>ImageNet 충격:</strong> AlexNet 이전에는 전통적 컴퓨터 비전 기법(SIFT, HOG 등)이 주류였으며,
  오류율은 약 26%에 머물렀습니다. AlexNet은 오류율을 15.3%로 대폭 낮추며 CNN(합성곱 신경망)의
  잠재력을 전 세계에 증명했습니다. 이후 매년 딥러닝 모델이 우승하면서 2015년에는
  인간의 인식 능력(오류율 약 5%)을 초월했습니다.
</div>

<h4>딥러닝 혁명의 핵심 동력</h4>
<table>
  <thead>
    <tr>
      <th>동력</th>
      <th>설명</th>
      <th>핵심 사건</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPU 활용</strong></td>
      <td>NVIDIA GPU를 신경망 학습에 활용, 병렬 연산 속도 10-100배 향상</td>
      <td>CUDA 프레임워크 공개 (2007)</td>
    </tr>
    <tr>
      <td><strong>빅데이터</strong></td>
      <td>ImageNet (1,400만 장), 위키피디아, 웹 크롤링 데이터 등 대규모 학습 데이터</td>
      <td>ImageNet 데이터셋 공개 (2009)</td>
    </tr>
    <tr>
      <td><strong>알고리즘 혁신</strong></td>
      <td>ReLU 활성화 함수, 드롭아웃, 배치 정규화 등 학습 기법 개선</td>
      <td>AlexNet 우승 (2012)</td>
    </tr>
    <tr>
      <td><strong>오픈소스 프레임워크</strong></td>
      <td>TensorFlow, PyTorch 등으로 딥러닝 접근성 대폭 향상</td>
      <td>TensorFlow 공개 (2015)</td>
    </tr>
  </tbody>
</table>

<h4>2010년대 주요 AI 이정표</h4>
<div class="flow-diagram">
  <div class="flow-step">AlexNet 우승 (2012)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">GAN 발명 (2014)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AlphaGo 승리 (2016)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">트랜스포머 발표 (2017)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">BERT/GPT 등장 (2018)</div>
</div>

<ul>
  <li><strong>2014년</strong>: 이안 굿펠로우(Ian Goodfellow)가 <strong>GAN(생성적 적대 신경망)</strong> 발명</li>
  <li><strong>2016년</strong>: 구글 딥마인드의 <strong>AlphaGo</strong>가 이세돌 9단을 4:1로 격파</li>
  <li><strong>2017년</strong>: 구글 연구팀이 <strong>"Attention Is All You Need"</strong> 논문 발표, 트랜스포머 아키텍처 등장</li>
  <li><strong>2018년</strong>: 구글의 <strong>BERT</strong>, OpenAI의 <strong>GPT-1</strong> 발표 -- LLM 시대의 서막</li>
</ul>

<h4>딥러닝 3대 선구자</h4>
<p>
  2018년 튜링상은 딥러닝의 선구자 세 사람에게 수여되었습니다:
</p>
<ul>
  <li><strong>제프리 힌턴(Geoffrey Hinton)</strong> -- 역전파 알고리즘 발전, 볼츠만 머신</li>
  <li><strong>얀 르쿤(Yann LeCun)</strong> -- CNN 개발, LeNet</li>
  <li><strong>요슈아 벤지오(Yoshua Bengio)</strong> -- 순환 신경망 발전, 주의집중 메커니즘 연구</li>
</ul>

<div class="info-box">
  <strong>딥러닝 혁명의 의의:</strong> 2010년대 딥러닝 혁명은 AI가 실험실을 넘어 산업 전반에
  실질적 영향을 미치기 시작한 전환점이었습니다. 이미지 인식, 음성 인식, 자연어 처리,
  게임, 의료 등 거의 모든 분야에서 딥러닝은 기존 방법을 압도하며 AI의 새 시대를 열었습니다.
</div>
    `,sort_order:7},{id:308,chapter_id:3,title:"생성형 AI의 시대",content:`
<h3>생성형 AI의 시대 (2020s)</h3>
<p>
  2020년대는 <strong>생성형 AI(Generative AI)</strong>가 세상을 근본적으로 변화시키기 시작한 시대입니다.
  특히 2022년 11월 <strong>ChatGPT</strong>의 공개는 AI 역사상 가장 강력한 대중적 충격을 안겼으며,
  불과 2개월 만에 1억 명의 사용자를 확보하는 전례 없는 기록을 세웠습니다.
</p>

<h4>생성형 AI의 진화 과정</h4>
<div class="flow-diagram">
  <div class="flow-step">GPT-3 (2020)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">DALL-E (2021)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">ChatGPT (2022.11)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">GPT-4 / Claude / Gemini (2023~)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">멀티모달 AI (2024~)</div>
</div>

<h4>주요 생성형 AI 모델의 발전</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>연도</th>
      <th>개발사</th>
      <th>혁신점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>2020</td>
      <td>OpenAI</td>
      <td>1,750억 파라미터, Few-shot Learning으로 다양한 작업 수행</td>
    </tr>
    <tr>
      <td><strong>DALL-E</strong></td>
      <td>2021</td>
      <td>OpenAI</td>
      <td>텍스트로 이미지를 생성하는 최초의 대규모 모델</td>
    </tr>
    <tr>
      <td><strong>Stable Diffusion</strong></td>
      <td>2022</td>
      <td>Stability AI</td>
      <td>오픈소스 이미지 생성 모델, 접근성 혁신</td>
    </tr>
    <tr>
      <td><strong>ChatGPT</strong></td>
      <td>2022.11</td>
      <td>OpenAI</td>
      <td>RLHF 기반 대화형 AI, 2개월 만에 1억 사용자</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>2023.3</td>
      <td>OpenAI</td>
      <td>멀티모달(텍스트+이미지), 전문가 수준 추론 능력</td>
    </tr>
    <tr>
      <td><strong>Claude 3</strong></td>
      <td>2024</td>
      <td>Anthropic</td>
      <td>Constitutional AI, 안전성과 성능의 균형</td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>2023.12</td>
      <td>Google</td>
      <td>네이티브 멀티모달, 다양한 크기 모델 제공</td>
    </tr>
    <tr>
      <td><strong>Sora</strong></td>
      <td>2024</td>
      <td>OpenAI</td>
      <td>텍스트로 고품질 동영상 생성</td>
    </tr>
  </tbody>
</table>

<h4>생성형 AI의 사회적 영향</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>긍정적 영향</h4>
    <ul>
      <li>창작과 생산성의 민주화</li>
      <li>교육 및 학습 방식의 혁신</li>
      <li>프로그래밍 접근성 확대</li>
      <li>의료/과학 연구 가속화</li>
      <li>다국어 소통 장벽 해소</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>도전과 우려</h4>
    <ul>
      <li>일자리 대체와 노동 시장 변화</li>
      <li>딥페이크와 허위 정보 확산</li>
      <li>저작권과 지적 재산권 논란</li>
      <li>AI 편향과 공정성 문제</li>
      <li>에너지 소비와 환경 영향</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>AI 기술 발전의 가속:</strong> 2020년대 생성형 AI의 발전 속도는 전례가 없습니다.
  GPT-3에서 GPT-4까지 불과 3년, ChatGPT 공개 후 1년 만에 수십 개의 경쟁 모델이 등장했습니다.
  이제 AI는 특정 전문가들의 도구가 아닌, 모든 사람의 일상 도구가 되었으며,
  교육, 의료, 법률, 창작, 코딩 등 거의 모든 영역에서 혁신을 이끌고 있습니다.
</div>

<div class="info-box warning">
  <strong>현재 진행형:</strong> 생성형 AI의 시대는 아직 시작 단계에 불과합니다.
  AI 에이전트, 멀티모달 통합, 소형화된 온디바이스 AI 등 새로운 기술이 빠르게 발전하고 있으며,
  이 기술이 사회에 미치는 영향은 앞으로 더욱 확대될 것으로 예상됩니다.
</div>
    `,sort_order:8},{id:309,chapter_id:3,title:"참고문헌 및 추가 자료",content:`
<h3>참고문헌 및 추가 자료</h3>
<p>Chapter 3에서 다룬 AI의 역사와 발전에 대해 더 깊이 알아보기 위한 자료입니다.</p>

<h4>추천 도서</h4>
<table>
  <thead>
    <tr>
      <th>도서명</th>
      <th>저자</th>
      <th>내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AI 슈퍼파워</strong></td>
      <td>리카이푸 (Lee Kai-Fu)</td>
      <td>미국과 중국의 AI 경쟁 구도와 AI의 미래 전망</td>
    </tr>
    <tr>
      <td><strong>마스터 알고리즘</strong></td>
      <td>페드로 도밍고스</td>
      <td>머신러닝의 다섯 가지 학파와 통합 알고리즘을 향한 여정</td>
    </tr>
    <tr>
      <td><strong>인공지능: 현대적 접근방식</strong></td>
      <td>스튜어트 러셀 & 피터 노빅</td>
      <td>AI 분야의 가장 권위 있는 교과서, AI 역사부터 최신 기술까지</td>
    </tr>
    <tr>
      <td><strong>딥러닝</strong></td>
      <td>이안 굿펠로우, 요슈아 벤지오, 에런 쿠르빌</td>
      <td>딥러닝의 이론적 기초와 실제 응용을 다룬 핵심 교재</td>
    </tr>
    <tr>
      <td><strong>튜링의 사과</strong></td>
      <td>이광근</td>
      <td>컴퓨터 과학의 역사와 앨런 튜링의 업적을 다룬 한국어 교양서</td>
    </tr>
  </tbody>
</table>

<h4>추천 온라인 강좌</h4>
<ul>
  <li><strong>Coursera -- AI For Everyone</strong> (앤드류 응): AI의 기초 개념과 역사를 비전공자 대상으로 설명</li>
  <li><strong>edX -- CS50's Introduction to AI</strong> (하버드): AI의 핵심 알고리즘과 역사적 맥락</li>
  <li><strong>K-MOOC -- 인공지능 개론</strong>: 한국어로 제공되는 AI 기초 강좌</li>
  <li><strong>YouTube -- 3Blue1Brown</strong>: 신경망과 딥러닝을 시각적으로 쉽게 설명</li>
</ul>

<h4>주요 참고 논문 및 보고서</h4>
<ul>
  <li>Turing, A. M. (1950). "Computing Machinery and Intelligence." <em>Mind</em>, 59(236), 433-460.</li>
  <li>McCarthy, J. et al. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."</li>
  <li>Minsky, M. & Papert, S. (1969). <em>Perceptrons</em>. MIT Press.</li>
  <li>Rumelhart, D. E. et al. (1986). "Learning representations by back-propagating errors." <em>Nature</em>, 323, 533-536.</li>
  <li>Krizhevsky, A. et al. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." <em>NeurIPS</em>.</li>
  <li>Vaswani, A. et al. (2017). "Attention Is All You Need." <em>NeurIPS</em>.</li>
</ul>

<h4>유용한 웹사이트</h4>
<ul>
  <li><strong>AI Index Report</strong> (Stanford HAI): 매년 발간되는 AI 발전 현황 보고서</li>
  <li><strong>Papers With Code</strong>: 최신 AI 논문과 코드를 함께 제공</li>
  <li><strong>Our World in Data -- AI</strong>: AI 발전의 역사적 데이터를 시각화</li>
  <li><strong>AI Timeline (Future of Life Institute)</strong>: AI 역사의 주요 이정표를 타임라인으로 정리</li>
</ul>

<div class="info-box">
  <strong>학습 팁:</strong> AI의 역사를 이해하는 것은 단순한 교양을 넘어,
  현재 AI 기술의 강점과 한계를 올바르게 판단하는 데 필수적입니다.
  특히 두 번의 AI 겨울을 통해 과도한 기대와 현실의 괴리가 가져오는 결과를 이해하면,
  현재의 AI 열풍을 더 균형 잡힌 시각으로 바라볼 수 있습니다.
</div>
    `,sort_order:9},{id:310,chapter_id:3,title:"학습 확인 문제",content:`
<h3>Chapter 3 학습 확인 문제</h3>
<p>이번 장에서 학습한 AI의 역사와 발전에 대한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>"인공지능(Artificial Intelligence)"이라는 용어가 공식적으로 탄생한 사건은 무엇인가요?</strong></p>
  <ol type="a">
    <li>앨런 튜링의 논문 발표 (1950)</li>
    <li>다트머스 회의 (1956)</li>
    <li>ELIZA 개발 (1966)</li>
    <li>ImageNet 대회 (2012)</li>
  </ol>
  <p><em>정답: b) 다트머스 회의 (1956). 존 매카시가 주도한 이 회의에서 "인공지능"이라는 용어가 공식적으로 사용되었으며, AI가 독립적인 학문 분야로 확립되었습니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>첫 번째 AI 겨울의 주요 원인으로 올바르지 않은 것은?</strong></p>
  <ol type="a">
    <li>퍼셉트론의 XOR 문제 한계 (민스키 & 패퍼트)</li>
    <li>라이트힐 보고서에 의한 연구 자금 삭감</li>
    <li>컴퓨팅 파워의 절대적 부족</li>
    <li>딥러닝 알고리즘의 실패</li>
  </ol>
  <p><em>정답: d) 딥러닝 알고리즘의 실패. 딥러닝은 2010년대에 등장한 기술로, 1970년대 첫 번째 AI 겨울과는 관련이 없습니다. 나머지는 모두 첫 번째 AI 겨울의 실제 원인입니다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>1980년대 AI 부활의 핵심이었던 "전문가 시스템"의 작동 원리로 올바른 것은?</strong></p>
  <ol type="a">
    <li>대규모 데이터에서 패턴을 자동으로 학습한다</li>
    <li>전문가의 지식을 규칙(Rule) 형태로 입력하여 의사결정을 지원한다</li>
    <li>인공 신경망을 통해 이미지를 인식한다</li>
    <li>강화학습을 통해 게임에서 승리한다</li>
  </ol>
  <p><em>정답: b) 전문가 시스템은 특정 분야 전문가의 지식을 IF-THEN 규칙으로 컴퓨터에 입력하여 해당 분야의 의사결정을 지원하는 시스템입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>2012년 딥러닝 혁명의 시작점이 된 사건은 무엇인가요?</strong></p>
  <ol type="a">
    <li>AlphaGo의 이세돌 격파</li>
    <li>ChatGPT의 출시</li>
    <li>AlexNet의 ImageNet 대회 우승</li>
    <li>트랜스포머 논문 발표</li>
  </ol>
  <p><em>정답: c) AlexNet이 ImageNet 대회에서 기존 방법보다 10%p 이상 높은 정확도로 우승하며, CNN과 딥러닝의 잠재력을 증명한 것이 딥러닝 혁명의 시작점이었습니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>AI 역사를 시간 순서대로 올바르게 나열한 것은?</strong></p>
  <ol type="a">
    <li>다트머스 회의 -> 전문가 시스템 -> 첫 번째 AI 겨울 -> 딥러닝 혁명</li>
    <li>튜링 테스트 -> 다트머스 회의 -> 첫 번째 AI 겨울 -> 전문가 시스템 -> 두 번째 AI 겨울 -> 딥러닝 혁명</li>
    <li>다트머스 회의 -> 딥러닝 혁명 -> 전문가 시스템 -> ChatGPT</li>
    <li>ELIZA -> 튜링 테스트 -> AlphaGo -> 전문가 시스템</li>
  </ol>
  <p><em>정답: b) 튜링 테스트(1950) -> 다트머스 회의(1956) -> 첫 번째 AI 겨울(1970s) -> 전문가 시스템(1980s) -> 두 번째 AI 겨울(1990s) -> 딥러닝 혁명(2010s)이 올바른 순서입니다.</em></p>
</div>

<h4>문제 6</h4>
<div class="info-box">
  <p><strong>2018년 딥러닝의 선구자로서 튜링상을 공동 수상한 세 사람은?</strong></p>
  <ol type="a">
    <li>앨런 튜링, 존 매카시, 마빈 민스키</li>
    <li>제프리 힌턴, 얀 르쿤, 요슈아 벤지오</li>
    <li>일론 머스크, 샘 올트먼, 데미스 허사비스</li>
    <li>앤드류 응, 이안 굿펠로우, 알렉스 크리체프스키</li>
  </ol>
  <p><em>정답: b) 제프리 힌턴, 얀 르쿤, 요슈아 벤지오. 이 세 사람은 수십 년간 신경망과 딥러닝 연구를 지속하며 현대 AI 발전의 토대를 마련한 공로로 "컴퓨터 과학의 노벨상"이라 불리는 튜링상을 공동 수상했습니다.</em></p>
</div>

<h4>문제 7</h4>
<div class="info-box">
  <p><strong>ChatGPT가 2개월 만에 달성한 사용자 수와, 이를 가능하게 한 핵심 기술은?</strong></p>
  <ol type="a">
    <li>1,000만 명, 전문가 시스템</li>
    <li>5,000만 명, CNN</li>
    <li>1억 명, RLHF(인간 피드백 기반 강화학습)</li>
    <li>10억 명, 규칙 기반 AI</li>
  </ol>
  <p><em>정답: c) 1억 명, RLHF. ChatGPT는 GPT-3.5에 RLHF를 적용하여 인간의 대화 스타일에 맞게 미세조정한 모델로, 출시 2개월 만에 1억 명의 사용자를 확보하며 역사상 가장 빠르게 성장한 소비자 애플리케이션이 되었습니다.</em></p>
</div>
    `,sort_order:10}],F_=[{id:401,chapter_id:4,title:"생성형 AI란?",content:`
<h3>생성형 AI(Generative AI)의 개념</h3>
<p>
  <strong>생성형 AI(Generative AI)</strong>는 텍스트, 이미지, 음성, 코드, 영상 등
  새로운 콘텐츠를 자동으로 생성할 수 있는 인공지능 기술입니다.
  기존의 AI가 주로 데이터를 분석하고 분류하는 <em>판별적(Discriminative)</em> 모델이었다면,
  생성형 AI는 학습한 패턴을 바탕으로 완전히 새로운 콘텐츠를 <em>창작</em>합니다.
</p>

<div class="compare-grid">
  <div class="compare-item">
    <h4>판별적 모델 (Discriminative)</h4>
    <ul>
      <li>데이터를 분류하거나 예측하는 데 집중</li>
      <li>입력 데이터가 어떤 범주에 속하는지 판별</li>
      <li>예: 스팸 필터, 이미지 분류, 감정 분석</li>
      <li>"이 이메일은 스팸인가, 정상인가?"</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>생성적 모델 (Generative)</h4>
    <ul>
      <li>새로운 데이터(콘텐츠)를 생성하는 데 집중</li>
      <li>학습한 데이터의 분포를 이해하고 유사한 새 데이터 생성</li>
      <li>예: ChatGPT, DALL-E, Midjourney</li>
      <li>"이 주제에 대한 보고서를 작성해줘"</li>
    </ul>
  </div>
</div>

<h4>생성형 AI의 핵심 기술</h4>
<table>
  <thead>
    <tr>
      <th>기술</th>
      <th>원리</th>
      <th>대표 모델</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>트랜스포머 (Transformer)</strong></td>
      <td>어텐션 메커니즘으로 문맥을 이해하고 텍스트 생성</td>
      <td>GPT, BERT, Claude</td>
    </tr>
    <tr>
      <td><strong>GAN (생성적 적대 신경망)</strong></td>
      <td>생성자와 판별자가 경쟁하며 학습</td>
      <td>StyleGAN, CycleGAN</td>
    </tr>
    <tr>
      <td><strong>확산 모델 (Diffusion Model)</strong></td>
      <td>노이즈를 점진적으로 제거하여 이미지 생성</td>
      <td>Stable Diffusion, DALL-E 3</td>
    </tr>
    <tr>
      <td><strong>VAE (변분 오토인코더)</strong></td>
      <td>데이터를 잠재 공간으로 압축 후 새 데이터 생성</td>
      <td>초기 이미지 생성 모델</td>
    </tr>
  </tbody>
</table>

<h4>생성형 AI가 만들 수 있는 콘텐츠</h4>
<div class="flow-diagram">
  <div class="flow-step">텍스트 (기사, 보고서, 코드)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">이미지 (일러스트, 디자인)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">음성/음악</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">영상/3D 모델</div>
</div>

<ul>
  <li><strong>텍스트</strong>: 기사, 보고서, 소설, 시, 이메일, 코드</li>
  <li><strong>이미지</strong>: 일러스트레이션, 사진풍 이미지, 디자인, 로고</li>
  <li><strong>음성</strong>: 음성 합성(TTS), 음성 변환, 음악 생성</li>
  <li><strong>영상</strong>: 비디오 생성, 애니메이션, 딥페이크</li>
  <li><strong>코드</strong>: 프로그래밍 코드 자동 생성 및 디버깅</li>
  <li><strong>3D</strong>: 3D 모델, 공간 디자인, 가상 환경</li>
</ul>

<div class="info-box">
  <strong>생성형 AI의 의의:</strong> 생성형 AI는 인간의 창작 영역에 AI가 본격적으로 진입한
  첫 번째 사례입니다. 이는 AI를 단순한 분석 도구에서 <strong>창작 파트너</strong>로 전환시켰으며,
  모든 분야에서 생산성과 창의성을 혁신적으로 향상시킬 잠재력을 가지고 있습니다.
</div>
    `,sort_order:1},{id:402,chapter_id:4,title:"ChatGPT",content:`
<h3>ChatGPT: OpenAI의 대화형 AI</h3>
<p>
  <strong>ChatGPT</strong>는 OpenAI가 2022년 11월에 출시한 대화형 AI 서비스로,
  GPT(Generative Pre-trained Transformer) 시리즈를 기반으로 합니다.
  출시 5일 만에 100만 사용자를 돌파하고, 2개월 만에 1억 사용자를 확보하며
  AI 역사의 새로운 이정표를 세웠습니다.
</p>

<h4>GPT 모델의 발전</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>출시</th>
      <th>파라미터</th>
      <th>주요 개선</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-1</strong></td>
      <td>2018.06</td>
      <td>1.17억</td>
      <td>트랜스포머 디코더 기반 사전학습 모델의 시작</td>
    </tr>
    <tr>
      <td><strong>GPT-2</strong></td>
      <td>2019.02</td>
      <td>15억</td>
      <td>유창한 텍스트 생성, 악용 우려로 공개 제한</td>
    </tr>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>2020.06</td>
      <td>1,750억</td>
      <td>Few-shot Learning, API 상업화</td>
    </tr>
    <tr>
      <td><strong>GPT-3.5 (ChatGPT)</strong></td>
      <td>2022.11</td>
      <td>GPT-3 기반</td>
      <td>RLHF 적용, 대화 최적화, 역사적 대중화</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>2023.03</td>
      <td>비공개</td>
      <td>멀티모달(이미지 이해), 추론 능력 대폭 향상</td>
    </tr>
    <tr>
      <td><strong>GPT-4o</strong></td>
      <td>2024.05</td>
      <td>비공개</td>
      <td>음성, 이미지, 텍스트 통합 멀티모달, 실시간 음성 대화</td>
    </tr>
  </tbody>
</table>

<h4>ChatGPT의 핵심 특징</h4>
<ul>
  <li><strong>자연스러운 대화</strong>: 인간과 유사한 자연스러운 대화가 가능</li>
  <li><strong>다양한 작업 수행</strong>: 글쓰기, 번역, 코딩, 분석, 요약, 질의응답 등</li>
  <li><strong>맥락 유지</strong>: 대화의 흐름을 기억하고 이전 내용을 참조</li>
  <li><strong>다국어 지원</strong>: 한국어를 포함한 수십 개 언어 지원</li>
  <li><strong>플러그인/GPTs</strong>: 웹 검색, 코드 실행, 이미지 생성 등 확장 기능</li>
</ul>

<h4>RLHF (인간 피드백 기반 강화학습)</h4>
<div class="flow-diagram">
  <div class="flow-step">대규모 텍스트로 사전학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">인간 피드백 데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">보상 모델 학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">강화학습으로 미세조정</div>
</div>

<p>
  ChatGPT의 성공 비결은 <strong>RLHF(Reinforcement Learning from Human Feedback)</strong>입니다.
  기본 GPT 모델이 텍스트를 생성하는 능력은 뛰어나지만, 인간이 원하는 방식으로 대화하도록
  미세조정하기 위해 인간 평가자의 선호도 데이터를 활용한 강화학습을 적용했습니다.
</p>

<div class="info-box warning">
  <strong>주의사항:</strong> ChatGPT는 환각(Hallucination) 현상을 보일 수 있으며,
  학습 데이터의 시점 이후 정보에는 부정확할 수 있습니다.
  중요한 사실은 반드시 별도의 신뢰할 수 있는 출처로 교차 검증해야 합니다.
  또한 입력한 내용이 학습에 활용될 수 있으므로, 민감한 개인정보나
  기업 기밀 정보의 입력은 주의가 필요합니다.
</div>
    `,sort_order:2},{id:403,chapter_id:4,title:"Claude",content:`
<h3>Claude: Anthropic의 안전한 AI</h3>
<p>
  <strong>Claude</strong>는 AI 안전 연구 기업 <strong>Anthropic</strong>이 개발한 대규모 언어모델입니다.
  OpenAI 출신 연구자들이 설립한 Anthropic은 "AI 안전"을 최우선 가치로 두고,
  <strong>Constitutional AI(헌법적 AI)</strong>라는 독자적인 학습 방법론을 적용하여
  보다 안전하고 도움이 되며 정직한 AI를 만들고자 합니다.
</p>

<h4>Constitutional AI (헌법적 AI)</h4>
<p>
  Claude의 핵심 차별점인 <strong>Constitutional AI</strong>는 AI가 따라야 할 원칙(헌법)을 정의하고,
  AI 스스로 자신의 출력이 이 원칙에 부합하는지 자가 평가하고 수정하도록 학습시키는 방법입니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">원칙(헌법) 정의</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 응답 생성</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">원칙 기반 자가 평가</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">응답 수정 및 개선</div>
</div>

<ul>
  <li><strong>도움이 되는(Helpful)</strong>: 사용자의 요청에 유용하고 정확한 응답 제공</li>
  <li><strong>무해한(Harmless)</strong>: 해로운 콘텐츠나 편향된 응답 최소화</li>
  <li><strong>정직한(Honest)</strong>: 불확실한 것은 불확실하다고 인정, 환각 최소화</li>
</ul>

<h4>Claude의 주요 강점</h4>
<table>
  <thead>
    <tr>
      <th>강점</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>긴 문맥 처리</strong></td>
      <td>최대 200K 토큰의 문맥 창으로 긴 문서 전체를 한 번에 분석 가능</td>
    </tr>
    <tr>
      <td><strong>안전성</strong></td>
      <td>Constitutional AI를 통한 체계적 안전 장치, 유해 콘텐츠 생성 억제</td>
    </tr>
    <tr>
      <td><strong>분석 능력</strong></td>
      <td>복잡한 문서 분석, 논리적 추론, 코드 작성에서 뛰어난 성능</td>
    </tr>
    <tr>
      <td><strong>정직한 응답</strong></td>
      <td>모르는 것은 모른다고 인정하며, 과도한 확신을 지양</td>
    </tr>
    <tr>
      <td><strong>한국어 성능</strong></td>
      <td>한국어 이해와 생성에서 높은 품질의 응답 제공</td>
    </tr>
  </tbody>
</table>

<h4>Claude 모델 라인업</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>Claude Opus</h4>
    <ul>
      <li>최고 성능 모델</li>
      <li>복잡한 분석과 추론 작업에 최적</li>
      <li>깊이 있는 연구, 전략적 사고에 활용</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>Claude Sonnet</h4>
    <ul>
      <li>성능과 속도의 균형</li>
      <li>일상적 작업에 적합</li>
      <li>가장 널리 사용되는 모델</li>
    </ul>
  </div>
</div>

<h4>Claude 활용 사례</h4>
<ul>
  <li><strong>학술 연구</strong>: 논문 분석, 문헌 리뷰, 연구 방법론 검토</li>
  <li><strong>문서 분석</strong>: 긴 보고서, 계약서, 법률 문서의 요약과 핵심 추출</li>
  <li><strong>코딩</strong>: 프로그래밍 코드 작성, 디버깅, 코드 리뷰</li>
  <li><strong>교육</strong>: 교육 자료 제작, 학생 질의응답, 과제 피드백</li>
</ul>

<div class="info-box">
  <strong>Anthropic의 AI 안전 철학:</strong> Anthropic은 AI의 발전과 안전이 함께 이루어져야 한다고 봅니다.
  강력한 AI일수록 더 높은 안전 기준이 필요하며, Constitutional AI는 이러한 철학을
  기술적으로 구현한 것입니다. 이는 AI 개발에서 "책임감 있는 혁신"의 모범 사례로 평가됩니다.
</div>
    `,sort_order:3},{id:404,chapter_id:4,title:"Gemini",content:`
<h3>Gemini: Google의 멀티모달 AI</h3>
<p>
  <strong>Gemini</strong>는 Google DeepMind가 개발한 멀티모달 AI 모델로,
  텍스트, 이미지, 오디오, 비디오, 코드 등 다양한 유형의 데이터를 동시에
  이해하고 생성할 수 있습니다. Google의 방대한 인프라와 데이터를 활용하여
  개발된 차세대 AI 모델입니다.
</p>

<h4>Gemini의 멀티모달 능력</h4>
<p>
  기존 LLM이 주로 텍스트 처리에 특화되었다면, Gemini는 처음부터
  <strong>멀티모달(Multimodal)</strong>로 설계되어 다양한 유형의 정보를 통합적으로 처리합니다.
</p>
<ul>
  <li><strong>텍스트 이해/생성</strong>: 자연어 대화, 글쓰기, 번역, 요약</li>
  <li><strong>이미지 이해</strong>: 사진 설명, 차트 분석, 문서 OCR, 시각적 질의응답</li>
  <li><strong>오디오 처리</strong>: 음성 인식, 다국어 번역, 음성 대화</li>
  <li><strong>비디오 분석</strong>: 영상 내용 이해, 장면 설명, 자막 생성</li>
  <li><strong>코드 생성</strong>: 프로그래밍 코드 작성, 디버깅, 코드 설명</li>
</ul>

<h4>Gemini 모델 라인업</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>특징</th>
      <th>대상 사용자</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Gemini Ultra</strong></td>
      <td>최고 성능, 복잡한 작업 처리</td>
      <td>전문 연구자, 기업</td>
    </tr>
    <tr>
      <td><strong>Gemini Pro</strong></td>
      <td>성능-효율 균형, 다양한 작업</td>
      <td>일반 사용자, 개발자</td>
    </tr>
    <tr>
      <td><strong>Gemini Nano</strong></td>
      <td>온디바이스 AI, 스마트폰 최적화</td>
      <td>모바일 앱, 엣지 디바이스</td>
    </tr>
  </tbody>
</table>

<h4>Google 생태계와의 통합</h4>
<p>
  Gemini의 큰 장점 중 하나는 Google의 광범위한 서비스 생태계와의 깊은 통합입니다.
</p>
<ul>
  <li><strong>Google 검색</strong>: 검색 결과에 AI 요약 제공 (AI Overviews)</li>
  <li><strong>Google Workspace</strong>: Gmail, Docs, Sheets, Slides에 AI 어시스턴트 통합</li>
  <li><strong>Android</strong>: 스마트폰에서 Gemini Nano를 통한 온디바이스 AI 기능</li>
  <li><strong>Google Cloud</strong>: 기업용 AI 서비스 (Vertex AI)</li>
  <li><strong>YouTube</strong>: 영상 요약, 자막 생성, 콘텐츠 분석</li>
</ul>

<div class="compare-grid">
  <div class="compare-item">
    <h4>Gemini의 강점</h4>
    <ul>
      <li>네이티브 멀티모달 처리 능력</li>
      <li>Google 서비스 생태계 통합</li>
      <li>온디바이스 AI (Gemini Nano)</li>
      <li>최신 웹 정보 접근 (Google 검색 연동)</li>
      <li>초대형 문맥 창 (1M+ 토큰)</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>고려사항</h4>
    <ul>
      <li>Google 계정 기반 서비스</li>
      <li>데이터 프라이버시 관련 우려</li>
      <li>일부 기능은 유료 (Gemini Advanced)</li>
      <li>지역별 서비스 가용성 차이</li>
      <li>초기 출시 시 정확도 논란</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>멀티모달 AI의 의미:</strong> Gemini와 같은 멀티모달 AI는 인간이 세계를 인식하는 방식
  (시각, 청각, 언어의 통합)에 한 발 더 가까워진 AI입니다. 텍스트만으로는 전달하기 어려운
  복잡한 정보를 이미지, 도표, 영상과 함께 처리할 수 있어 활용 범위가 크게 확장됩니다.
</div>
    `,sort_order:4},{id:405,chapter_id:4,title:"이미지 생성 AI",content:`
<h3>이미지 생성 AI 도구</h3>
<p>
  이미지 생성 AI는 텍스트 프롬프트(지시문)를 입력하면 해당하는 이미지를 자동으로 생성하는
  기술입니다. 2021년 DALL-E의 등장 이후 급격히 발전하여, 디자인, 마케팅, 교육,
  엔터테인먼트 등 다양한 분야에서 혁신적인 변화를 이끌고 있습니다.
</p>

<h4>주요 이미지 생성 AI 비교</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>개발사</th>
      <th>핵심 기술</th>
      <th>강점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>DALL-E 3</strong></td>
      <td>OpenAI</td>
      <td>확산 모델 + 트랜스포머</td>
      <td>ChatGPT 통합, 정확한 텍스트 반영, 사용 편의성</td>
    </tr>
    <tr>
      <td><strong>Midjourney</strong></td>
      <td>Midjourney Inc.</td>
      <td>독자적 확산 모델</td>
      <td>예술적 품질 최고, 독창적 스타일, 미적 감각</td>
    </tr>
    <tr>
      <td><strong>Stable Diffusion</strong></td>
      <td>Stability AI</td>
      <td>Latent Diffusion Model</td>
      <td>오픈소스, 로컬 실행 가능, 커스터마이징 자유도</td>
    </tr>
    <tr>
      <td><strong>Adobe Firefly</strong></td>
      <td>Adobe</td>
      <td>확산 모델 (라이선스 데이터)</td>
      <td>Photoshop 통합, 상업적 저작권 안전</td>
    </tr>
  </tbody>
</table>

<h4>이미지 생성 AI의 작동 원리: 확산 모델</h4>
<div class="flow-diagram">
  <div class="flow-step">텍스트 프롬프트 입력</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">텍스트 인코딩 (CLIP)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">노이즈에서 점진적 제거</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">고품질 이미지 생성</div>
</div>

<p>
  <strong>확산 모델(Diffusion Model)</strong>은 현재 이미지 생성 AI의 핵심 기술입니다.
  학습 과정에서 이미지에 점진적으로 노이즈를 추가하는 과정을 학습한 후,
  생성 시에는 순수 노이즈에서 시작하여 점진적으로 노이즈를 제거하며
  의미 있는 이미지를 만들어냅니다.
</p>

<h4>효과적인 프롬프트 작성법</h4>
<ul>
  <li><strong>주제 명시</strong>: 생성하고자 하는 주요 대상을 명확히 기술</li>
  <li><strong>스타일 지정</strong>: 사실적, 수채화, 유화, 만화, 미니멀 등 원하는 스타일 명시</li>
  <li><strong>분위기/조명</strong>: 따뜻한, 차가운, 드라마틱, 자연광 등 분위기 요소 추가</li>
  <li><strong>구도/시점</strong>: 클로즈업, 전경, 조감도, 아이소메트릭 등 구도 지정</li>
  <li><strong>부정 프롬프트</strong>: 원하지 않는 요소를 명시하여 제외 (Negative prompt)</li>
</ul>

<h4>활용 분야</h4>
<ul>
  <li><strong>마케팅</strong>: 광고 이미지, 소셜 미디어 콘텐츠, 제품 목업</li>
  <li><strong>교육</strong>: 교재 삽화, 역사적 장면 재현, 과학 개념 시각화</li>
  <li><strong>게임/엔터테인먼트</strong>: 컨셉 아트, 캐릭터 디자인, 배경 이미지</li>
  <li><strong>프로토타이핑</strong>: UI/UX 디자인 초안, 건축 시각화, 패션 디자인</li>
</ul>

<div class="info-box warning">
  <strong>윤리적 고려사항:</strong> 이미지 생성 AI는 딥페이크 제작, 저작권 침해,
  허위 정보 유포 등에 악용될 수 있습니다. AI로 생성된 이미지의 출처를 명확히 하고,
  타인의 초상권과 저작권을 존중하며, 허위 이미지 제작을 자제해야 합니다.
  많은 플랫폼에서 AI 생성 콘텐츠에 대한 표시(워터마크)를 권장하고 있습니다.
</div>
    `,sort_order:5},{id:406,chapter_id:4,title:"음성 및 영상 AI",content:`
<h3>음성 및 영상 생성 AI</h3>
<p>
  텍스트와 이미지를 넘어, AI는 음성 합성, 음악 생성, 비디오 제작 등
  멀티미디어 콘텐츠 전반에서 혁신을 이루고 있습니다.
  이러한 도구들은 콘텐츠 제작의 장벽을 크게 낮추고 있습니다.
</p>

<h4>음성 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>유형</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ElevenLabs</strong></td>
      <td>TTS (텍스트 -> 음성)</td>
      <td>자연스러운 음성, 다국어 지원, 음성 복제 기능, 감정 조절</td>
    </tr>
    <tr>
      <td><strong>OpenAI Whisper</strong></td>
      <td>STT (음성 -> 텍스트)</td>
      <td>오픈소스, 다국어 인식, 높은 정확도, 실시간 처리</td>
    </tr>
    <tr>
      <td><strong>Suno AI</strong></td>
      <td>음악 생성</td>
      <td>텍스트로 작사, 작곡, 보컬까지 자동 생성</td>
    </tr>
    <tr>
      <td><strong>Udio</strong></td>
      <td>음악 생성</td>
      <td>다양한 장르의 고품질 음악 생성, 세밀한 컨트롤</td>
    </tr>
    <tr>
      <td><strong>CLOVA Voice</strong></td>
      <td>TTS (한국어 특화)</td>
      <td>네이버 개발, 한국어에 자연스러운 음성, 다양한 화자 선택</td>
    </tr>
  </tbody>
</table>

<h4>영상 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>기능</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sora (OpenAI)</strong></td>
      <td>텍스트 -> 비디오 생성</td>
      <td>최대 1분 길이의 사실적인 영상 생성, 물리법칙 이해</td>
    </tr>
    <tr>
      <td><strong>Runway Gen-3</strong></td>
      <td>텍스트/이미지 -> 비디오</td>
      <td>전문 영상 편집 도구 통합, 모션 브러시, 인페인팅</td>
    </tr>
    <tr>
      <td><strong>Pika</strong></td>
      <td>텍스트/이미지 -> 비디오</td>
      <td>간편한 인터페이스, 빠른 생성 속도, 웹 기반</td>
    </tr>
    <tr>
      <td><strong>HeyGen</strong></td>
      <td>AI 아바타 영상 생성</td>
      <td>디지털 아바타, 다국어 립싱크, 프레젠테이션 영상</td>
    </tr>
    <tr>
      <td><strong>D-ID</strong></td>
      <td>AI 화자 영상 생성</td>
      <td>사진 한 장으로 말하는 영상 생성, 교육 콘텐츠 제작</td>
    </tr>
  </tbody>
</table>

<h4>음성/영상 AI의 활용 분야</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>교육</h4>
    <ul>
      <li>AI 강사 영상 자동 생성</li>
      <li>다국어 교육 콘텐츠 제작</li>
      <li>오디오북 제작</li>
      <li>역사 인물 재현 영상</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>비즈니스</h4>
    <ul>
      <li>마케팅 영상 자동 제작</li>
      <li>다국어 프레젠테이션</li>
      <li>제품 소개 영상</li>
      <li>고객 서비스 AI 아바타</li>
    </ul>
  </div>
</div>

<div class="info-box warning">
  <strong>딥페이크(Deepfake) 위험성:</strong> 음성 복제와 영상 생성 기술은 딥페이크 제작에
  악용될 수 있습니다. 실제로 존재하지 않는 사건을 조작하거나, 타인의 외모와 음성을
  도용하여 허위 정보를 유포하는 사례가 증가하고 있습니다.
  AI 생성 콘텐츠를 접할 때는 항상 출처를 확인하고, 비판적 사고를 유지해야 합니다.
  한국에서는 딥페이크를 이용한 성범죄가 심각한 사회 문제로 대두되고 있습니다.
</div>
    `,sort_order:6},{id:407,chapter_id:4,title:"코딩 AI 도구",content:`
<h3>코딩 AI 도구: 프로그래밍의 혁신</h3>
<p>
  코딩 AI 도구는 자연어로 작성된 요구사항을 프로그래밍 코드로 변환하거나,
  기존 코드를 분석, 수정, 최적화하는 AI 도구입니다.
  프로그래머의 생산성을 획기적으로 향상시키고, 비전공자도 코딩에 접근할 수 있게 합니다.
</p>

<h4>주요 코딩 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>개발사</th>
      <th>특징</th>
      <th>지원 환경</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GitHub Copilot</strong></td>
      <td>GitHub/Microsoft</td>
      <td>코드 자동 완성, 함수 생성, 주석 기반 코드 작성</td>
      <td>VS Code, JetBrains, Neovim</td>
    </tr>
    <tr>
      <td><strong>Cursor</strong></td>
      <td>Cursor Inc.</td>
      <td>AI 네이티브 코드 에디터, 대화형 코딩, 코드베이스 이해</td>
      <td>독립 에디터 (VS Code 기반)</td>
    </tr>
    <tr>
      <td><strong>Claude Code</strong></td>
      <td>Anthropic</td>
      <td>터미널 기반 AI 코딩 에이전트, 프로젝트 전체 이해 및 수정</td>
      <td>CLI 도구 (터미널)</td>
    </tr>
    <tr>
      <td><strong>Amazon CodeWhisperer</strong></td>
      <td>Amazon</td>
      <td>AWS 통합, 보안 스캔 기능, 기업용 라이선스 관리</td>
      <td>VS Code, JetBrains, AWS IDE</td>
    </tr>
    <tr>
      <td><strong>Replit AI</strong></td>
      <td>Replit</td>
      <td>브라우저 기반 개발 환경 + AI 코딩 지원, 즉시 배포</td>
      <td>웹 브라우저</td>
    </tr>
  </tbody>
</table>

<h4>코딩 AI의 주요 기능</h4>
<ul>
  <li><strong>코드 자동 완성</strong>: 타이핑 중 다음 코드를 예측하여 자동으로 제안</li>
  <li><strong>자연어 -> 코드</strong>: "사용자 목록을 이름순으로 정렬하는 함수"와 같은 요구사항을 코드로 변환</li>
  <li><strong>코드 설명</strong>: 복잡한 코드를 자연어로 설명하여 이해를 도움</li>
  <li><strong>디버깅</strong>: 코드의 오류를 발견하고 수정 방법을 제안</li>
  <li><strong>코드 리팩토링</strong>: 기존 코드를 더 효율적이고 가독성 높은 코드로 개선</li>
  <li><strong>테스트 코드 생성</strong>: 기존 코드에 대한 단위 테스트를 자동으로 작성</li>
</ul>

<h4>바이브 코딩 (Vibe Coding)</h4>
<p>
  <strong>바이브 코딩</strong>은 2025년 안드레이 카파시(Andrej Karpathy)가 제안한 용어로,
  AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 새로운 개발 방식입니다.
  코딩 경험이 없는 사람도 아이디어를 소프트웨어로 구현할 수 있는 가능성을 열었습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">아이디어 구상</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">자연어로 요구사항 설명</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI가 코드 생성</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">결과 확인 및 피드백</div>
</div>

<div class="compare-grid">
  <div class="compare-item">
    <h4>코딩 AI의 장점</h4>
    <ul>
      <li>개발 속도 50~80% 향상</li>
      <li>반복적인 보일러플레이트 코드 자동화</li>
      <li>새로운 프로그래밍 언어/프레임워크 학습 지원</li>
      <li>비전공자의 코딩 접근성 향상</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>주의사항</h4>
    <ul>
      <li>생성된 코드의 정확성 검증 필수</li>
      <li>보안 취약점 포함 가능성</li>
      <li>저작권 및 라이선스 이슈</li>
      <li>AI에 과도하게 의존하면 학습 기회 감소</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>미래 전망:</strong> 코딩 AI는 프로그래밍의 민주화를 가속화하고 있습니다.
  향후에는 자연어만으로 복잡한 소프트웨어를 구축하는 것이 더욱 보편화될 전망이며,
  프로그래머의 역할은 코드 작성에서 AI가 생성한 코드를 검증하고
  시스템을 설계하는 방향으로 변화할 것입니다.
</div>
    `,sort_order:7},{id:408,chapter_id:4,title:"생성형 AI 비교 및 선택 가이드",content:`
<h3>주요 AI 도구 비교와 선택 가이드</h3>
<p>
  다양한 AI 도구가 존재하는 만큼, 자신의 필요에 맞는 도구를 선택하는 것이 중요합니다.
  각 도구의 강점과 특성을 비교하여 목적에 맞는 최적의 AI 도구를 선택해 보겠습니다.
</p>

<h4>주요 대화형 AI 비교</h4>
<table>
  <thead>
    <tr>
      <th>기준</th>
      <th>ChatGPT</th>
      <th>Claude</th>
      <th>Gemini</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>개발사</strong></td>
      <td>OpenAI</td>
      <td>Anthropic</td>
      <td>Google</td>
    </tr>
    <tr>
      <td><strong>핵심 강점</strong></td>
      <td>범용성, 플러그인 생태계</td>
      <td>안전성, 긴 문맥 처리, 분석력</td>
      <td>멀티모달, Google 생태계 통합</td>
    </tr>
    <tr>
      <td><strong>문맥 길이</strong></td>
      <td>128K 토큰</td>
      <td>200K 토큰</td>
      <td>1M+ 토큰</td>
    </tr>
    <tr>
      <td><strong>무료 사용</strong></td>
      <td>GPT-4o mini 무료</td>
      <td>Claude Sonnet 무료</td>
      <td>Gemini Pro 무료</td>
    </tr>
    <tr>
      <td><strong>유료 가격</strong></td>
      <td>월 $20 (Plus)</td>
      <td>월 $20 (Pro)</td>
      <td>월 $20 (Advanced)</td>
    </tr>
    <tr>
      <td><strong>이미지 생성</strong></td>
      <td>DALL-E 3 통합</td>
      <td>미지원</td>
      <td>Imagen 통합</td>
    </tr>
    <tr>
      <td><strong>웹 검색</strong></td>
      <td>실시간 검색 가능</td>
      <td>웹 검색 지원</td>
      <td>Google 검색 통합</td>
    </tr>
    <tr>
      <td><strong>코딩 능력</strong></td>
      <td>우수</td>
      <td>최상위 수준</td>
      <td>우수</td>
    </tr>
    <tr>
      <td><strong>한국어 성능</strong></td>
      <td>우수</td>
      <td>우수</td>
      <td>우수</td>
    </tr>
  </tbody>
</table>

<h4>목적별 추천 AI 도구</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>글쓰기/콘텐츠 제작</h4>
    <ul>
      <li><strong>1순위:</strong> ChatGPT (다양한 스타일)</li>
      <li><strong>2순위:</strong> Claude (논리적 구성력)</li>
      <li>이미지 포함 시: ChatGPT + DALL-E 3</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>학술 연구/분석</h4>
    <ul>
      <li><strong>1순위:</strong> Claude (긴 문서 분석)</li>
      <li><strong>2순위:</strong> ChatGPT (범용 연구)</li>
      <li>최신 정보: Gemini (웹 검색 통합)</li>
    </ul>
  </div>
</div>
<div class="compare-grid">
  <div class="compare-item">
    <h4>코딩/프로그래밍</h4>
    <ul>
      <li><strong>실시간 코딩:</strong> GitHub Copilot</li>
      <li><strong>대화형 코딩:</strong> Claude, Cursor</li>
      <li><strong>프로젝트 전체:</strong> Claude Code</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>이미지/디자인</h4>
    <ul>
      <li><strong>예술적 품질:</strong> Midjourney</li>
      <li><strong>편리한 사용:</strong> DALL-E 3 (ChatGPT)</li>
      <li><strong>커스터마이징:</strong> Stable Diffusion</li>
    </ul>
  </div>
</div>

<h4>AI 도구 선택 시 고려사항</h4>
<ol>
  <li><strong>사용 목적</strong>: 무엇을 하고 싶은지 명확히 정의</li>
  <li><strong>비용</strong>: 무료/유료 플랜, 사용량 제한 확인</li>
  <li><strong>데이터 프라이버시</strong>: 입력 데이터의 보안과 활용 정책</li>
  <li><strong>정확도 요구 수준</strong>: 실수가 허용되는 작업인지 판단</li>
  <li><strong>한국어 지원</strong>: 한국어 입출력 품질 확인</li>
  <li><strong>생태계 호환성</strong>: 기존 사용 도구/서비스와의 연동</li>
</ol>

<div class="info-box">
  <strong>실용적 조언:</strong> 하나의 AI 도구에 의존하기보다, 목적에 따라 여러 도구를
  적절히 조합하여 활용하는 것이 효과적입니다. 각 도구의 강점을 파악하고,
  중요한 결과물에 대해서는 반드시 인간의 검증 과정을 거치는 습관을 기르세요.
</div>
    `,sort_order:8},{id:409,chapter_id:4,title:"참고문헌 및 추가 자료",content:`
<h3>참고문헌 및 추가 자료</h3>
<p>Chapter 4에서 다룬 생성형 AI 도구들에 대해 더 깊이 알아보기 위한 자료입니다.</p>

<h4>추천 도서</h4>
<table>
  <thead>
    <tr>
      <th>도서명</th>
      <th>저자</th>
      <th>내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>생성 AI의 시대</strong></td>
      <td>에단 몰릭 (Ethan Mollick)</td>
      <td>생성형 AI가 업무, 교육, 창작에 미치는 영향과 활용 전략</td>
    </tr>
    <tr>
      <td><strong>AI 2041</strong></td>
      <td>리카이푸 & 천치우판</td>
      <td>AI가 변화시킬 미래 사회를 소설과 에세이로 그린 작품</td>
    </tr>
    <tr>
      <td><strong>프롬프트 엔지니어링</strong></td>
      <td>다양한 저자</td>
      <td>AI에게 효과적으로 질문하고 결과를 얻는 방법론</td>
    </tr>
    <tr>
      <td><strong>바이브 코딩</strong></td>
      <td>다양한 저자</td>
      <td>AI를 활용한 새로운 소프트웨어 개발 방법론</td>
    </tr>
  </tbody>
</table>

<h4>공식 웹사이트 및 문서</h4>
<ul>
  <li><strong>OpenAI 공식 문서</strong> (platform.openai.com): ChatGPT, GPT API, DALL-E 가이드</li>
  <li><strong>Anthropic 공식 문서</strong> (docs.anthropic.com): Claude API 및 사용 가이드</li>
  <li><strong>Google AI 공식 문서</strong> (ai.google.dev): Gemini API 및 활용 가이드</li>
  <li><strong>Stability AI</strong> (stability.ai): Stable Diffusion 모델 및 API 문서</li>
  <li><strong>GitHub Copilot 문서</strong> (docs.github.com/copilot): Copilot 설정 및 활용 가이드</li>
</ul>

<h4>추천 온라인 강좌</h4>
<ul>
  <li><strong>Coursera -- Generative AI for Everyone</strong> (앤드류 응): 생성형 AI의 기초와 활용을 비전공자 대상으로 설명</li>
  <li><strong>DeepLearning.AI -- ChatGPT Prompt Engineering for Developers</strong>: 개발자를 위한 프롬프트 엔지니어링</li>
  <li><strong>Google Cloud Skills Boost -- Introduction to Generative AI</strong>: Google의 생성형 AI 기초 강좌</li>
  <li><strong>Anthropic Prompt Engineering Guide</strong>: Claude를 위한 공식 프롬프트 작성 가이드</li>
</ul>

<h4>AI 도구 비교/리뷰 사이트</h4>
<ul>
  <li><strong>LMSYS Chatbot Arena</strong> (chat.lmsys.org): 다양한 LLM을 블라인드 비교 평가하는 플랫폼</li>
  <li><strong>There's An AI For That</strong> (theresanaiforthat.com): 목적별 AI 도구 검색 디렉토리</li>
  <li><strong>AI Tool Report</strong>: 최신 AI 도구 뉴스 및 리뷰</li>
  <li><strong>Hugging Face</strong> (huggingface.co): 오픈소스 AI 모델 허브 및 커뮤니티</li>
</ul>

<div class="info-box">
  <strong>학습 팁:</strong> 생성형 AI 도구는 빠르게 발전하고 있어, 특정 도구의 기능이나 성능은
  수개월 만에 크게 변할 수 있습니다. 최신 정보를 지속적으로 업데이트하고,
  실제로 여러 도구를 직접 사용해 보면서 자신에게 맞는 워크플로우를 구축하는 것이 중요합니다.
  AI 도구를 "잘 사용하는 능력"이 곧 AI 시대의 핵심 경쟁력이 됩니다.
</div>
    `,sort_order:9},{id:410,chapter_id:4,title:"학습 확인 문제",content:`
<h3>Chapter 4 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>생성형 AI(Generative AI)와 판별적 AI(Discriminative AI)의 차이점으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>생성형 AI는 데이터를 분류하고, 판별적 AI는 새 콘텐츠를 생성한다</li>
    <li>생성형 AI는 새로운 콘텐츠를 생성하고, 판별적 AI는 데이터를 분류/예측한다</li>
    <li>둘 사이에는 차이가 없다</li>
    <li>판별적 AI가 생성형 AI보다 항상 더 뛰어나다</li>
  </ol>
  <p><em>정답: b) 생성형 AI는 새로운 콘텐츠(텍스트, 이미지 등)를 생성하고, 판별적 AI는 데이터를 분류하거나 예측합니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>ChatGPT의 성공을 가능하게 한 핵심 학습 기법은?</strong></p>
  <ol type="a">
    <li>전문가 시스템의 규칙 기반 학습</li>
    <li>비지도학습만을 사용한 사전학습</li>
    <li>RLHF(인간 피드백 기반 강화학습)</li>
    <li>CNN(합성곱 신경망)</li>
  </ol>
  <p><em>정답: c) RLHF(Reinforcement Learning from Human Feedback). ChatGPT는 기본 GPT 모델에 인간 평가자의 선호도 데이터를 활용한 강화학습을 적용하여, 인간이 원하는 방식의 대화를 학습했습니다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>Claude AI의 핵심 학습 방법론인 "Constitutional AI"의 핵심 원칙이 아닌 것은?</strong></p>
  <ol type="a">
    <li>도움이 되는 (Helpful)</li>
    <li>무해한 (Harmless)</li>
    <li>정직한 (Honest)</li>
    <li>최고 속도 (Fastest)</li>
  </ol>
  <p><em>정답: d) 최고 속도. Constitutional AI의 세 가지 핵심 원칙은 도움이 되고(Helpful), 무해하며(Harmless), 정직한(Honest) AI를 만드는 것입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>Gemini의 가장 핵심적인 차별화 특징은 무엇인가요?</strong></p>
  <ol type="a">
    <li>가장 저렴한 가격</li>
    <li>네이티브 멀티모달 처리 능력과 Google 생태계 통합</li>
    <li>오픈소스 모델</li>
    <li>가장 오래된 AI 모델</li>
  </ol>
  <p><em>정답: b) 네이티브 멀티모달 처리 능력과 Google 생태계 통합. Gemini는 텍스트, 이미지, 오디오, 비디오를 통합적으로 처리하며 Google 서비스와 깊이 연동됩니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>현재 이미지 생성 AI의 핵심 기술인 "확산 모델(Diffusion Model)"의 작동 원리로 올바른 것은?</strong></p>
  <ol type="a">
    <li>이미지를 픽셀 단위로 순차적으로 생성한다</li>
    <li>생성자와 판별자가 경쟁하며 이미지를 개선한다</li>
    <li>노이즈를 점진적으로 제거하며 이미지를 생성한다</li>
    <li>기존 이미지를 잘라 붙여서 새 이미지를 만든다</li>
  </ol>
  <p><em>정답: c) 확산 모델은 순수 노이즈에서 시작하여 학습된 패턴에 따라 점진적으로 노이즈를 제거하며 의미 있는 이미지를 생성합니다. DALL-E 3, Stable Diffusion, Midjourney 등이 이 기술을 활용합니다.</em></p>
</div>

<h4>문제 6</h4>
<div class="info-box">
  <p><strong>"바이브 코딩(Vibe Coding)"에 대한 설명으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>음악을 들으며 코딩하는 방법론이다</li>
    <li>AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 방식이다</li>
    <li>특정 프로그래밍 언어의 이름이다</li>
    <li>코딩 없이 마우스만으로 소프트웨어를 만드는 도구이다</li>
  </ol>
  <p><em>정답: b) 바이브 코딩은 AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 새로운 개발 방식으로, 코딩 경험이 없는 사람도 소프트웨어를 만들 수 있는 가능성을 열었습니다.</em></p>
</div>

<h4>문제 7</h4>
<div class="info-box">
  <p><strong>AI 도구를 선택할 때 고려해야 할 사항을 4가지 이상 서술하고, 학술 연구 목적으로 가장 적합한 AI 도구와 그 이유를 설명하시오.</strong></p>
  <p><em>모범 답안: AI 도구 선택 시 고려사항으로는 (1) 사용 목적과 기능 적합성, (2) 비용(무료/유료 플랜), (3) 데이터 프라이버시 정책, (4) 정확도와 신뢰성 수준, (5) 한국어 지원 품질, (6) 기존 도구와의 생태계 호환성 등이 있습니다. 학술 연구 목적으로는 Claude가 적합합니다. 이유는 (1) 200K 토큰의 긴 문맥 창으로 논문 전체를 한 번에 분석할 수 있고, (2) Constitutional AI를 통한 정직한 응답으로 모르는 것은 모른다고 인정하며, (3) 논리적 분석과 추론 능력이 뛰어나 학술 텍스트의 비판적 분석에 적합하기 때문입니다. 다만, 최신 정보가 필요한 경우 Gemini의 Google 검색 통합 기능을 보완적으로 활용할 수 있습니다.</em></p>
</div>
    `,sort_order:10}],W_=[{id:501,chapter_id:5,title:"5.1 프롬프트란?",sort_order:1,content:`
<h2>프롬프트의 정의와 중요성</h2>
<p>프롬프트(Prompt)란 사용자가 AI 시스템에 입력하는 텍스트 명령 또는 질문을 의미합니다. 생성형 AI의 출력 품질은 프롬프트의 품질에 의해 결정됩니다. 좋은 프롬프트는 AI로부터 정확하고 유용한 결과를 이끌어내며, 반대로 모호한 프롬프트는 부정확하거나 관련 없는 응답을 초래합니다.</p>

<div class="info-box">
<strong>핵심 개념</strong><br/>
프롬프트는 인간과 AI 사이의 인터페이스입니다. 프로그래밍 언어가 사람과 컴퓨터 사이의 소통 수단이듯, 프롬프트는 자연어를 통해 AI와 소통하는 방법입니다.
</div>

<h3>프롬프트의 구성 요소</h3>
<table>
<thead>
<tr><th>구성 요소</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>지시(Instruction)</td><td>AI가 수행해야 할 구체적인 작업</td><td>"다음 텍스트를 요약해 주세요"</td></tr>
<tr><td>맥락(Context)</td><td>작업에 필요한 배경 정보</td><td>"대학 신입생을 대상으로 작성된 교재입니다"</td></tr>
<tr><td>입력 데이터(Input)</td><td>처리할 실제 데이터나 텍스트</td><td>요약할 원문 텍스트</td></tr>
<tr><td>출력 형식(Output Format)</td><td>원하는 결과의 형태</td><td>"3개의 핵심 포인트로 정리해 주세요"</td></tr>
</tbody>
</table>

<h3>프롬프트 품질이 중요한 이유</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>나쁜 프롬프트</h4>
<p>"마케팅에 대해 알려줘"</p>
<p>결과: 너무 광범위하고 일반적인 정보를 제공하여, 실제 필요에 맞지 않는 응답이 생성됩니다.</p>
</div>
<div class="compare-item">
<h4>좋은 프롬프트</h4>
<p>"중소 IT기업의 SNS 마케팅 전략을 예산 100만원 이내로 실행 가능한 3가지 방안을 각각 장단점과 함께 표로 정리해 줘"</p>
<p>결과: 구체적이고 실행 가능한 정보를 체계적으로 제공합니다.</p>
</div>
</div>

<h3>프롬프트 엔지니어링이란?</h3>
<p>프롬프트 엔지니어링(Prompt Engineering)은 AI 모델로부터 원하는 출력을 효과적으로 얻기 위해 프롬프트를 설계하고 최적화하는 기술입니다. 이는 단순한 질문 작성을 넘어, AI의 작동 원리를 이해하고 체계적으로 프롬프트를 구성하는 전문 역량입니다.</p>

<div class="info-box warning">
<strong>주의</strong><br/>
프롬프트 엔지니어링은 AI를 "속이는" 기술이 아닙니다. AI의 능력 범위 내에서 최적의 결과를 이끌어내는 효과적인 의사소통 기술입니다. AI가 학습하지 않은 정보를 프롬프트만으로 생성할 수는 없습니다.
</div>
    `},{id:502,chapter_id:5,title:"5.2 효과적인 프롬프트 작성법",sort_order:2,content:`
<h2>효과적인 프롬프트 작성의 원칙</h2>
<p>AI로부터 원하는 결과를 얻기 위해서는 프롬프트를 명확하고 구체적으로 작성해야 합니다. 프롬프트 작성의 핵심 원칙을 살펴보겠습니다.</p>

<h3>프롬프트 작성 5대 원칙</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 명확성(Clarity)</h4>
<p>모호하지 않은 명확한 언어 사용</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 구체성(Specificity)</h4>
<p>원하는 것을 구체적으로 명시</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 맥락(Context)</h4>
<p>충분한 배경 정보 제공</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 제약(Constraints)</h4>
<p>출력의 범위와 형식 지정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5. 예시(Examples)</h4>
<p>원하는 출력의 예시 제공</p>
</div>
</div>

<h3>원칙별 적용 방법</h3>
<table>
<thead>
<tr><th>원칙</th><th>적용 전</th><th>적용 후</th></tr>
</thead>
<tbody>
<tr><td>명확성</td><td>"좋은 글 써 줘"</td><td>"대학교 경영학 수업 기말 보고서에 적합한 서론을 작성해 줘"</td></tr>
<tr><td>구체성</td><td>"짧게 요약해 줘"</td><td>"200자 이내로 3개의 핵심 포인트를 불릿 형식으로 요약해 줘"</td></tr>
<tr><td>맥락</td><td>"이것 분석해 줘"</td><td>"이 데이터는 2025년 1분기 국내 스타트업 투자 현황입니다. 산업별 투자 트렌드를 분석해 줘"</td></tr>
<tr><td>제약</td><td>"마케팅 전략 알려줘"</td><td>"B2B SaaS 기업을 위한 마케팅 전략을 5가지 추천하되, 각각 월 예산 50만원 이하로 실행 가능한 것만 포함해 줘"</td></tr>
<tr><td>예시</td><td>"제목 만들어 줘"</td><td>"'AI시대, 당신의 직업은 안전한가?' 같은 스타일로 관심을 끄는 블로그 제목 5개를 만들어 줘"</td></tr>
</tbody>
</table>

<h3>프롬프트 구조화 템플릿</h3>
<div class="info-box">
<strong>기본 구조 템플릿</strong><br/>
<ol>
<li><strong>역할 지정</strong>: "당신은 [전문가/역할]입니다."</li>
<li><strong>배경 설명</strong>: "[상황/맥락]에 대해..."</li>
<li><strong>구체적 지시</strong>: "[작업]을 수행해 주세요."</li>
<li><strong>제약 조건</strong>: "[형식/길이/조건]을 지켜 주세요."</li>
<li><strong>출력 형식</strong>: "[표/목록/단락] 형태로 정리해 주세요."</li>
</ol>
</div>

<div class="info-box warning">
<strong>흔한 실수</strong><br/>
<ul>
<li><strong>과도한 정보</strong>: 불필요한 정보를 너무 많이 포함하면 AI가 핵심을 놓칠 수 있습니다.</li>
<li><strong>모순된 지시</strong>: "짧지만 상세하게" 같은 모순된 요청은 AI를 혼란스럽게 합니다.</li>
<li><strong>부정문 남용</strong>: "하지 마세요" 보다 "~하세요"라는 긍정형 지시가 더 효과적입니다.</li>
<li><strong>한 번에 너무 많은 요청</strong>: 복잡한 작업은 단계별로 나누어 요청하는 것이 좋습니다.</li>
</ul>
</div>
    `},{id:503,chapter_id:5,title:"5.3 프롬프트 패턴",sort_order:3,content:`
<h2>주요 프롬프트 패턴</h2>
<p>프롬프트 엔지니어링에는 다양한 패턴이 존재하며, 각 패턴은 특정 상황에서 AI의 성능을 극대화합니다. 대표적인 세 가지 패턴을 살펴보겠습니다.</p>

<h3>프롬프트 패턴 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>Zero-shot 프롬프팅</h4>
<p>예시를 제공하지 않고 지시만으로 AI에게 작업을 요청하는 방식입니다. AI의 사전 학습된 지식에 의존합니다.</p>
<p><strong>예시:</strong><br/>"다음 문장의 감정을 '긍정', '부정', '중립' 중 하나로 분류해 줘: '이 영화 정말 재미있었어!'"</p>
</div>
<div class="compare-item">
<h4>Few-shot 프롬프팅</h4>
<p>몇 개의 예시를 함께 제공하여 AI가 패턴을 학습한 후 새로운 입력에 적용하도록 하는 방식입니다.</p>
<p><strong>예시:</strong><br/>"감정 분류 예시:<br/>- '맛있다!' → 긍정<br/>- '별로다' → 부정<br/>- '보통이다' → 중립<br/>그렇다면 '최고의 경험이었습니다'는?"</p>
</div>
<div class="compare-item">
<h4>Chain-of-Thought (CoT)</h4>
<p>AI에게 단계적으로 추론하도록 유도하는 방식입니다. 복잡한 논리적 문제에서 특히 효과적입니다.</p>
<p><strong>예시:</strong><br/>"단계별로 생각해 봅시다. 사과 5개에서 3개를 먹고 2개를 더 사면..."</p>
</div>
</div>

<h3>패턴별 특성 비교</h3>
<table>
<thead>
<tr><th>특성</th><th>Zero-shot</th><th>Few-shot</th><th>Chain-of-Thought</th></tr>
</thead>
<tbody>
<tr><td>예시 필요</td><td>없음</td><td>2~5개</td><td>추론 과정 예시</td></tr>
<tr><td>적합한 작업</td><td>단순 분류, 번역</td><td>특정 형식/스타일 필요</td><td>수학, 논리, 복잡한 추론</td></tr>
<tr><td>프롬프트 길이</td><td>짧음</td><td>중간</td><td>길 수 있음</td></tr>
<tr><td>정확도</td><td>보통</td><td>높음</td><td>복잡한 문제에서 높음</td></tr>
<tr><td>토큰 소비</td><td>적음</td><td>중간</td><td>많음</td></tr>
</tbody>
</table>

<h3>Chain-of-Thought 상세 예시</h3>
<div class="info-box">
<strong>수학 문제 풀기</strong><br/>
<p><em>프롬프트:</em> "식당에 23명이 있었습니다. 점심시간에 15명이 더 왔고, 6명이 나갔습니다. 그 후 8명이 더 왔습니다. 현재 식당에 몇 명이 있습니까? 단계별로 풀어보세요."</p>
<p><em>AI 응답:</em><br/>
1단계: 초기 인원 = 23명<br/>
2단계: 15명 추가 → 23 + 15 = 38명<br/>
3단계: 6명 퇴장 → 38 - 6 = 32명<br/>
4단계: 8명 추가 → 32 + 8 = 40명<br/>
답: 현재 식당에 40명이 있습니다.</p>
</div>

<h3>고급 패턴</h3>
<ul>
<li><strong>Self-Consistency</strong>: 동일 문제를 여러 번 풀게 하고 다수결로 최종 답 선택</li>
<li><strong>Tree-of-Thought</strong>: 여러 추론 경로를 탐색하고 가장 유망한 경로를 선택</li>
<li><strong>ReAct(Reasoning + Acting)</strong>: 추론과 행동(도구 사용)을 교대로 수행</li>
<li><strong>Least-to-Most</strong>: 복잡한 문제를 작은 하위 문제로 분해하여 순차적으로 해결</li>
</ul>
    `},{id:504,chapter_id:5,title:"5.4 역할 지정 프롬프트",sort_order:4,content:`
<h2>역할 지정 프롬프트 (Role Prompting)</h2>
<p>역할 지정 프롬프트는 AI에게 특정 전문가나 캐릭터의 역할을 부여하여 해당 관점에서 응답하도록 유도하는 기법입니다. 이를 통해 AI의 응답 스타일, 전문성 수준, 톤을 효과적으로 조절할 수 있습니다.</p>

<h3>역할 지정의 효과</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>역할 지정 없이</h4>
<p>"투자에 대해 알려줘"</p>
<p>결과: 일반적이고 백과사전식 설명이 나옵니다. 어떤 수준의 독자를 대상으로 하는지 불분명합니다.</p>
</div>
<div class="compare-item">
<h4>역할 지정 포함</h4>
<p>"당신은 20년 경력의 자산운용 전문가입니다. 투자를 처음 시작하는 대학생에게 월 30만원으로 시작할 수 있는 투자 전략을 설명해 주세요."</p>
<p>결과: 전문적이면서도 초보자 눈높이에 맞는 실용적인 조언이 나옵니다.</p>
</div>
</div>

<h3>역할 지정 유형과 예시</h3>
<table>
<thead>
<tr><th>역할 유형</th><th>프롬프트 예시</th><th>활용 상황</th></tr>
</thead>
<tbody>
<tr><td>전문가</td><td>"당신은 데이터 사이언티스트입니다"</td><td>기술적 분석, 전문 용어 설명</td></tr>
<tr><td>교육자</td><td>"당신은 초등학교 선생님입니다"</td><td>쉬운 설명, 교육 콘텐츠 제작</td></tr>
<tr><td>비평가</td><td>"당신은 엄격한 논문 심사위원입니다"</td><td>비판적 검토, 품질 평가</td></tr>
<tr><td>창작자</td><td>"당신은 베스트셀러 카피라이터입니다"</td><td>광고 문구, 마케팅 콘텐츠</td></tr>
<tr><td>컨설턴트</td><td>"당신은 McKinsey 출신 경영 컨설턴트입니다"</td><td>사업 전략, 문제 해결</td></tr>
<tr><td>번역가</td><td>"당신은 한영 동시통역 전문가입니다"</td><td>번역, 로컬라이제이션</td></tr>
</tbody>
</table>

<h3>효과적인 역할 지정 방법</h3>
<div class="info-box">
<strong>역할 지정 프레임워크</strong><br/>
<ol>
<li><strong>전문 분야 명시</strong>: "당신은 [분야]의 전문가입니다"</li>
<li><strong>경험 수준 설정</strong>: "[N]년 경력의 시니어 [직무]"</li>
<li><strong>대상 독자 지정</strong>: "[대상]에게 설명합니다"</li>
<li><strong>톤과 스타일 지정</strong>: "전문적이지만 친근한 어조로"</li>
<li><strong>금지 사항 명시</strong>: "전문 용어는 반드시 쉬운 설명을 덧붙여 주세요"</li>
</ol>
</div>

<h3>페르소나 결합 기법</h3>
<p>하나의 역할만 부여하는 것이 아니라, 여러 특성을 결합하여 더욱 정교한 페르소나를 만들 수 있습니다.</p>

<div class="info-box">
<strong>결합 예시</strong><br/>
"당신은 10년 경력의 UX 디자이너이자 심리학 석사 학위를 가진 전문가입니다. 사용자 행동 심리를 기반으로 모바일 앱의 온보딩 화면을 분석해 주세요. 비전공자도 이해할 수 있는 수준으로 설명하되, 학술적 근거를 함께 제시해 주세요."
</div>

<div class="info-box warning">
<strong>역할 지정 시 주의사항</strong><br/>
<ul>
<li>의사, 변호사 등 전문 자격이 필요한 역할의 경우, AI의 응답은 참고용일 뿐 전문가 상담을 대체하지 않습니다.</li>
<li>비현실적인 역할(예: "당신은 미래에서 온 사람입니다")은 정확한 정보 제공에 도움이 되지 않을 수 있습니다.</li>
<li>역할과 요청 내용이 일관성을 유지해야 합니다.</li>
</ul>
</div>
    `},{id:505,chapter_id:5,title:"5.5 구조화된 출력 요청",sort_order:5,content:`
<h2>구조화된 출력 요청하기</h2>
<p>AI에게 단순히 텍스트를 생성하는 것을 넘어, 특정 구조와 형식을 갖춘 출력을 요청할 수 있습니다. 구조화된 출력은 정보를 체계적으로 정리하고 후속 작업에 바로 활용할 수 있다는 장점이 있습니다.</p>

<h3>주요 출력 형식</h3>
<table>
<thead>
<tr><th>출력 형식</th><th>적합한 상황</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>표(Table)</td><td>비교 분석, 데이터 정리</td><td>"다음 내용을 표로 정리해 줘. 열은 [항목, 장점, 단점, 비용]으로 구성해 줘"</td></tr>
<tr><td>번호 목록</td><td>순서가 있는 절차, 단계</td><td>"회원가입 절차를 번호 매긴 단계별로 작성해 줘"</td></tr>
<tr><td>불릿 목록</td><td>나열, 특징 요약</td><td>"핵심 특징을 불릿 포인트로 정리해 줘"</td></tr>
<tr><td>JSON</td><td>프로그래밍, API 연동</td><td>"다음 정보를 JSON 형식으로 출력해 줘"</td></tr>
<tr><td>마크다운</td><td>문서 작성, 블로그</td><td>"마크다운 형식으로 기술 블로그 글을 작성해 줘"</td></tr>
<tr><td>CSV</td><td>스프레드시트, 데이터 분석</td><td>"CSV 형식으로 데이터를 정리해 줘"</td></tr>
</tbody>
</table>

<h3>표 형식 출력 요청</h3>
<div class="info-box">
<strong>실습 예시</strong><br/>
<p><em>프롬프트:</em> "주요 AI 모델 5개를 비교하는 표를 만들어 줘. 열은 [모델명, 개발사, 출시년도, 주요 특징, 파라미터 수]로 구성해 줘."</p>
<p>이 프롬프트는 명확한 열 구조를 지정하여 AI가 일관된 형식의 표를 생성하도록 유도합니다.</p>
</div>

<h3>JSON 형식 출력 요청</h3>
<div class="info-box">
<strong>실습 예시</strong><br/>
<p><em>프롬프트:</em> "다음 도서 정보를 JSON 형식으로 변환해 줘. 각 도서는 title, author, year, isbn 필드를 포함해야 해. 배열 형태로 출력해 줘."</p>
<p>프로그래밍에서 AI 출력을 직접 활용할 때 특히 유용합니다. 데이터 파이프라인, API 응답 설계 등에 적용할 수 있습니다.</p>
</div>

<h3>복합 구조 요청</h3>
<p>여러 형식을 결합하여 복합적인 구조의 출력을 요청할 수도 있습니다.</p>
<div class="info-box">
<strong>복합 구조 예시</strong><br/>
<p><em>프롬프트:</em> "다음 보고서를 아래 구조로 작성해 줘:<br/>
1. 제목 (h1)<br/>
2. 요약 (3줄 이내)<br/>
3. 핵심 발견 사항 (불릿 5개)<br/>
4. 상세 분석 (소제목별 2~3단락)<br/>
5. 데이터 비교 (표 형식)<br/>
6. 결론 및 제언 (번호 목록)"</p>
</div>

<div class="info-box warning">
<strong>구조화 출력 시 주의사항</strong><br/>
<ul>
<li>너무 복잡한 구조를 한 번에 요청하면 AI가 일부를 누락할 수 있으므로, 필요시 단계별로 요청합니다.</li>
<li>JSON 출력 요청 시 "코드 블록 안에 넣어 줘"를 추가하면 형식이 깔끔해집니다.</li>
<li>표의 열이 너무 많으면 가독성이 떨어질 수 있으므로 5~7개 이내로 제한하는 것이 좋습니다.</li>
</ul>
</div>
    `},{id:506,chapter_id:5,title:"5.6 프롬프트 반복과 개선",sort_order:6,content:`
<h2>프롬프트 반복과 개선 (Iterative Refinement)</h2>
<p>완벽한 프롬프트를 한 번에 작성하는 것은 매우 어렵습니다. 프롬프트 엔지니어링의 핵심은 반복적인 개선 과정을 통해 점진적으로 더 나은 결과를 얻는 것입니다. 이 과정을 "반복적 정련(Iterative Refinement)"이라고 합니다.</p>

<h3>반복 개선 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1단계: 초기 프롬프트</h4>
<p>기본적인 의도를 담은 프롬프트 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2단계: 결과 평가</h4>
<p>AI 응답의 품질, 정확성, 형식 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3단계: 문제 분석</h4>
<p>부족한 점이나 오류의 원인 파악</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4단계: 프롬프트 수정</h4>
<p>분석 결과를 반영하여 프롬프트 개선</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5단계: 재시도</h4>
<p>개선된 프롬프트로 다시 요청 (만족할 때까지 반복)</p>
</div>
</div>

<h3>반복 개선 실전 예시</h3>
<table>
<thead>
<tr><th>반복 단계</th><th>프롬프트</th><th>문제점</th><th>개선 방향</th></tr>
</thead>
<tbody>
<tr><td>1차</td><td>"이력서 써 줘"</td><td>일반적인 템플릿만 제공</td><td>직무와 경력 정보 추가</td></tr>
<tr><td>2차</td><td>"마케팅 직무 신입 이력서를 작성해 줘"</td><td>구체적 경험이 부족</td><td>구체적 활동/성과 정보 제공</td></tr>
<tr><td>3차</td><td>"마케팅 직무 신입 이력서를 작성해 줘. SNS 마케팅 인턴 6개월 경험, 팔로워 200% 성장 달성. 경영학과 졸업 예정"</td><td>형식이 정해지지 않음</td><td>원하는 형식과 분량 지정</td></tr>
<tr><td>4차</td><td>(3차) + "A4 1페이지 분량으로, [경력사항], [학력], [자격증], [자기소개] 섹션으로 구분하여 작성. 각 성과는 수치로 표현"</td><td>만족스러운 결과</td><td>완료</td></tr>
</tbody>
</table>

<h3>디버깅 기법</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI에게 피드백 주기</h4>
<p>"좋은 답변이지만, 더 구체적인 수치를 포함해 줘", "세 번째 항목을 좀 더 상세하게 설명해 줘" 등 구체적인 피드백을 제공합니다.</p>
</div>
<div class="compare-item">
<h4>AI에게 자기 평가 요청</h4>
<p>"방금 작성한 답변의 부족한 점을 스스로 평가하고, 개선된 버전을 다시 작성해 줘"라고 요청하면 AI가 자체적으로 품질을 개선합니다.</p>
</div>
</div>

<div class="info-box">
<strong>프롬프트 버전 관리 팁</strong><br/>
<ul>
<li>효과적이었던 프롬프트는 별도로 저장하여 재사용합니다.</li>
<li>프롬프트 라이브러리를 구축하면 반복 작업의 효율을 높일 수 있습니다.</li>
<li>각 프롬프트에 버전 번호를 매기고 변경 이유를 기록하면 추후 참고에 유용합니다.</li>
<li>팀 작업 시 프롬프트를 공유하여 모범 사례를 확산합니다.</li>
</ul>
</div>
    `},{id:507,chapter_id:5,title:"5.7 프롬프트 엔지니어링 실전 팁",sort_order:7,content:`
<h2>프롬프트 엔지니어링 실전 팁</h2>
<p>프롬프트 엔지니어링의 이론을 넘어, 실제 업무와 학습에서 바로 적용할 수 있는 실전 팁을 알아보겠습니다.</p>

<h3>Do's: 이렇게 하세요</h3>
<table>
<thead>
<tr><th>팁</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>구분자 사용</td><td>입력 데이터와 지시를 명확히 구분</td><td>"---" 또는 """로 텍스트 영역을 구분합니다</td></tr>
<tr><td>단계적 요청</td><td>복잡한 작업을 여러 단계로 나누기</td><td>"1단계: 개요 작성 → 2단계: 각 항목 상세화 → 3단계: 최종 검토"</td></tr>
<tr><td>출력 길이 지정</td><td>원하는 분량을 명시</td><td>"300자 이내로", "A4 2페이지 분량으로"</td></tr>
<tr><td>대상 독자 지정</td><td>누구를 위한 콘텐츠인지 명시</td><td>"고등학생이 이해할 수 있는 수준으로"</td></tr>
<tr><td>톤 지정</td><td>문체와 분위기를 설정</td><td>"공식적인 비즈니스 어조로", "친근한 대화체로"</td></tr>
<tr><td>검증 요청</td><td>AI에게 자체 검증을 요청</td><td>"답변에 오류가 없는지 다시 확인해 줘"</td></tr>
</tbody>
</table>

<h3>Don'ts: 이것은 피하세요</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>모호한 표현</h4>
<p>"적당히", "잘", "좋게" 같은 모호한 표현은 피하세요. 대신 구체적인 기준을 제시합니다.</p>
<p><strong>피하기:</strong> "적당한 길이로 써 줘"<br/>
<strong>권장:</strong> "500자 내외로 써 줘"</p>
</div>
<div class="compare-item">
<h4>가정에 의존</h4>
<p>AI가 당신의 상황을 알고 있다고 가정하지 마세요. 필요한 맥락을 모두 프롬프트에 포함시킵니다.</p>
<p><strong>피하기:</strong> "아까 그 프로젝트에 대해 더 알려줘"<br/>
<strong>권장:</strong> "AI 기반 고객 서비스 챗봇 프로젝트의 데이터베이스 설계에 대해 알려줘"</p>
</div>
</div>

<h3>고급 실전 기법</h3>
<div class="info-box">
<strong>메타 프롬프팅</strong><br/>
AI에게 프롬프트를 작성해 달라고 요청하는 기법입니다. "나는 [목표]를 달성하고 싶어. 이를 위한 최적의 프롬프트를 작성해 줘"라고 요청하면, AI가 더 효과적인 프롬프트를 제안합니다.
</div>

<div class="info-box">
<strong>네거티브 프롬프팅</strong><br/>
원하지 않는 요소를 명시하는 기법입니다. "다음 내용을 포함하지 마세요: 전문 용어, 영어 단어, 개인적 의견"처럼 제외할 사항을 명확히 합니다.
</div>

<h3>프롬프트 체크리스트</h3>
<ul>
<li>목적이 명확한가?</li>
<li>충분한 맥락을 제공했는가?</li>
<li>출력 형식을 지정했는가?</li>
<li>대상 독자를 명시했는가?</li>
<li>분량/길이를 지정했는가?</li>
<li>불필요한 모호성은 없는가?</li>
<li>모순되는 지시는 없는가?</li>
</ul>
    `},{id:508,chapter_id:5,title:"5.8 프롬프트 활용 사례",sort_order:8,content:`
<h2>프롬프트 활용 사례</h2>
<p>프롬프트 엔지니어링은 비즈니스, 교육, 창작 등 다양한 분야에서 실질적으로 활용됩니다. 각 분야별 구체적인 프롬프트 사례를 살펴보겠습니다.</p>

<h3>비즈니스 활용 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>시장 조사</h4>
<p><em>프롬프트:</em> "당신은 시장 분석 전문가입니다. 2025년 한국 이커머스 시장의 주요 트렌드 5가지를 분석하고, 각 트렌드별로 중소기업이 활용할 수 있는 전략을 표로 정리해 주세요."</p>
</div>
<div class="compare-item">
<h4>이메일 작성</h4>
<p><em>프롬프트:</em> "B2B 영업 담당자로서, 처음 연락하는 잠재 고객에게 보낼 콜드 이메일을 작성해 주세요. 우리 제품은 클라우드 기반 HR 솔루션이며, 50~200명 규모 기업이 대상입니다. 3~4문단, 전문적이지만 친근한 톤으로 작성해 주세요."</p>
</div>
</div>

<h3>교육 활용 사례</h3>
<table>
<thead>
<tr><th>활용 목적</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>강의 계획서 작성</td><td>"대학교 '데이터 분석 입문' 과목의 16주 강의 계획서를 작성해 줘. 각 주차별로 주제, 학습 목표, 수업 활동, 과제를 포함해 줘. 수강생은 비전공 2학년 학생입니다."</td></tr>
<tr><td>시험 문제 출제</td><td>"경영학원론 중간고사 문제를 10개 출제해 줘. 객관식 6문항(5지선다), 서술형 4문항으로 구성하고, 난이도는 중상으로 설정해 줘. 정답과 해설도 포함해 줘."</td></tr>
<tr><td>학습 자료 제작</td><td>"고등학생을 위한 '통계학 기초' 학습 자료를 만들어 줘. 평균, 중앙값, 최빈값을 실생활 예시(반 성적, 용돈 등)로 설명하고, 연습 문제 5개를 포함해 줘."</td></tr>
</tbody>
</table>

<h3>창작 활용 사례</h3>
<div class="info-box">
<strong>블로그 글 작성</strong><br/>
<p><em>프롬프트:</em> "기술 블로그 작가로서, '2025년 주목해야 할 AI 트렌드'라는 주제로 블로그 글을 작성해 줘. 다음 조건을 지켜 줘:<br/>
- 총 1500~2000자 분량<br/>
- 서론, 트렌드 5가지(각각 소제목 포함), 결론 구조<br/>
- 각 트렌드에 실제 기업/제품 사례 1개 이상 포함<br/>
- 비전문가도 이해할 수 있는 수준<br/>
- SEO를 고려한 자연스러운 키워드 배치"</p>
</div>

<h3>개인 생산성 활용 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>회의록 정리</h4>
<p>"다음 회의 내용을 정리해 줘. [참석자], [안건별 논의 내용], [결정 사항], [후속 조치(담당자, 기한)] 섹션으로 나누어 작성해 줘."</p>
</div>
<div class="compare-item">
<h4>데이터 정리</h4>
<p>"다음 비정형 텍스트에서 이름, 이메일, 전화번호를 추출하여 CSV 형식으로 정리해 줘. 누락된 정보는 'N/A'로 표시해 줘."</p>
</div>
</div>

<div class="info-box">
<strong>프롬프트 라이브러리 구축</strong><br/>
자주 사용하는 프롬프트를 카테고리별로 저장하고 관리하면, 반복 작업의 효율성을 크게 높일 수 있습니다. Notion, Google Docs, 또는 전용 프롬프트 관리 도구를 활용하여 팀 단위로 공유하는 것을 권장합니다.
</div>
    `},{id:509,chapter_id:5,title:"5.9 학습 정리",sort_order:9,content:`
<h2>Chapter 5 학습 정리</h2>
<p>이번 장에서는 프롬프트 엔지니어링의 기초부터 실전 활용까지 체계적으로 학습했습니다. 핵심 내용을 정리합니다.</p>

<h3>핵심 개념 요약</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>프롬프트 정의</td><td>AI에 입력하는 텍스트 명령. 프롬프트 품질이 AI 출력 품질을 결정</td></tr>
<tr><td>프롬프트 구성 요소</td><td>지시(Instruction), 맥락(Context), 입력 데이터(Input), 출력 형식(Output Format)</td></tr>
<tr><td>작성 원칙</td><td>명확성, 구체성, 맥락 제공, 제약 조건, 예시 활용</td></tr>
<tr><td>프롬프트 패턴</td><td>Zero-shot, Few-shot, Chain-of-Thought 등 상황에 맞는 패턴 선택</td></tr>
<tr><td>역할 지정</td><td>AI에 전문가/캐릭터 역할을 부여하여 전문성과 톤을 조절</td></tr>
<tr><td>구조화 출력</td><td>표, JSON, 마크다운 등 원하는 형식을 명시하여 체계적 출력 확보</td></tr>
<tr><td>반복 개선</td><td>초기 프롬프트 → 평가 → 수정 → 재시도의 반복적 과정</td></tr>
</tbody>
</table>

<h3>프롬프트 엔지니어링 핵심 프레임워크</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>R - Role (역할)</h4>
<p>AI에게 적절한 역할을 부여합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>T - Task (작업)</h4>
<p>수행할 작업을 명확하게 지시합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>F - Format (형식)</h4>
<p>원하는 출력 형식을 지정합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>C - Context (맥락)</h4>
<p>필요한 배경 정보를 제공합니다</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 포인트</strong><br/>
<ul>
<li>프롬프트 엔지니어링은 기술이면서 동시에 예술입니다. 반복 연습을 통해 향상됩니다.</li>
<li>모든 상황에 맞는 만능 프롬프트는 없습니다. 상황에 맞는 패턴을 선택하세요.</li>
<li>AI의 결과물은 항상 비판적으로 검토해야 합니다.</li>
<li>효과적인 프롬프트는 저장하고 공유하여 재사용하세요.</li>
<li>AI 모델마다 특성이 다르므로, 모델에 맞는 프롬프트 조정이 필요합니다.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 이번 장에서 학습한 프롬프트 엔지니어링 기법을 실제 AI 도구에 적용하는 <strong>AI 활용 실습</strong>을 진행합니다. 텍스트 생성, 이미지 생성, 코드 작성, 데이터 분석 등 다양한 영역에서의 실전 활용법을 다룹니다.</p>
    `},{id:510,chapter_id:5,title:"5.10 학습 확인 문제",sort_order:10,content:`
<h2>학습 확인 문제</h2>
<p>Chapter 5에서 학습한 프롬프트 엔지니어링 기초 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> 프롬프트의 4가지 구성 요소를 모두 포함하는 것은?<br/>
① "번역해 줘"<br/>
② "이 글을 영어로 번역해 줘"<br/>
③ "당신은 번역가입니다. 아래 비즈니스 이메일을 영어로 번역하되, 공식적인 톤을 유지하고 200단어 이내로 작성해 주세요."<br/>
④ "좋은 번역을 해 줘. 잘 부탁해."<br/>
<em>정답: ③ — 역할(번역가), 맥락(비즈니스 이메일), 지시(영어 번역), 출력 형식(공식 톤, 200단어 이내)을 모두 포함합니다.</em>
</div>

<div class="info-box">
<strong>문제 2.</strong> Few-shot 프롬프팅에 대한 설명으로 옳은 것은?<br/>
① 예시를 전혀 제공하지 않는 방식이다<br/>
② AI 모델을 추가로 학습시키는 방식이다<br/>
③ 몇 개의 예시를 제공하여 AI가 패턴을 파악하도록 유도하는 방식이다<br/>
④ AI에게 단계별로 추론하도록 요청하는 방식이다<br/>
<em>정답: ③ — Few-shot은 2~5개의 입출력 예시를 제공하여 AI가 원하는 패턴을 학습하게 합니다. ①은 Zero-shot, ④는 Chain-of-Thought입니다.</em>
</div>

<div class="info-box">
<strong>문제 3.</strong> 다음 프롬프트의 문제점을 2가지 이상 지적하고, 개선된 버전을 작성하시오.<br/>
"적당히 좋은 글을 써 줘. 아까 말한 주제로 하되 너무 길지 않게."<br/>
<em>모범 답안: (1) "적당히 좋은"이라는 모호한 표현 사용 — 구체적인 품질 기준이 없음, (2) "아까 말한 주제"라는 맥락 미제공 — AI는 이전 대화를 기억하지 못할 수 있음, (3) "너무 길지 않게"라는 불명확한 분량 지정 — 구체적 글자수/단어수를 명시해야 함. 개선 버전: "대학생을 대상으로 '인공지능의 미래 전망'에 대한 에세이를 작성해 줘. 서론-본론-결론 구조로 800자 내외로 작성하되, 전문 용어에는 간단한 설명을 덧붙여 줘."</em>
</div>

<div class="info-box">
<strong>문제 4.</strong> Chain-of-Thought(CoT) 프롬프팅이 특히 효과적인 작업 유형을 3가지 이상 설명하고, 각각에 대한 CoT 프롬프트 예시를 제시하시오.<br/>
<em>모범 답안: (1) 수학 문제 — "단계별로 풀어보세요. 할인율 20%가 적용된 50,000원짜리 상품에 부가세 10%를 추가하면 최종 가격은?", (2) 논리적 추론 — "단계별로 추론해 보세요. A가 B보다 키가 크고, B가 C보다 키가 크며, D는 A보다 키가 작지만 C보다 크다면, 키 순서는?", (3) 복잡한 의사결정 — "장단점을 단계별로 분석해 보세요. 스타트업에서 첫 개발자를 정규직으로 채용할지, 프리랜서로 계약할지 결정해야 합니다."</em>
</div>

<div class="info-box">
<strong>문제 5.</strong> 역할 지정 프롬프트(Role Prompting)의 장점을 설명하고, "AI 윤리"라는 주제에 대해 서로 다른 3가지 역할을 부여한 프롬프트를 각각 작성하시오.<br/>
<em>모범 답안: 역할 지정의 장점 — AI의 응답 전문성, 톤, 관점을 효과적으로 조절할 수 있으며, 동일 주제라도 다양한 시각의 콘텐츠를 생성할 수 있습니다. 예시: (1) "당신은 AI 윤리학 교수입니다. 학부생을 대상으로 AI 윤리의 핵심 원칙 5가지를 학술적으로 설명해 주세요." (2) "당신은 IT 기업의 법무팀장입니다. AI 윤리 위반이 기업에 미치는 법적·재무적 리스크를 비즈니스 관점에서 분석해 주세요." (3) "당신은 기술 저널리스트입니다. 일반 독자들이 AI 윤리 문제를 쉽게 이해할 수 있도록 최근 사례 중심으로 기사를 작성해 주세요."</em>
</div>
    `}],tI=[{id:601,chapter_id:6,title:"6.1 AI 활용 준비",sort_order:1,content:`
<h2>AI 활용을 위한 준비</h2>
<p>AI 도구를 효과적으로 활용하기 위해서는 먼저 주요 AI 서비스에 대한 이해와 적절한 환경 설정이 필요합니다. 이 절에서는 대표적인 AI 도구의 특징과 계정 설정 방법을 알아봅니다.</p>

<h3>주요 AI 서비스 비교</h3>
<table>
<thead>
<tr><th>서비스</th><th>개발사</th><th>주요 기능</th><th>무료/유료</th><th>특장점</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT</td><td>OpenAI</td><td>대화, 코드, 이미지, 분석</td><td>무료(GPT-3.5) / 유료(GPT-4)</td><td>가장 대중적, 풍부한 플러그인 생태계</td></tr>
<tr><td>Claude</td><td>Anthropic</td><td>대화, 문서 분석, 코드</td><td>무료 / 유료(Pro)</td><td>긴 문서 처리 능력, 안전성 강조</td></tr>
<tr><td>Gemini</td><td>Google</td><td>대화, 검색 연동, 멀티모달</td><td>무료 / 유료(Advanced)</td><td>Google 서비스 통합, 실시간 검색</td></tr>
<tr><td>Copilot</td><td>Microsoft</td><td>코드, 문서, Office 통합</td><td>무료 / 유료(Pro)</td><td>VS Code, Office 365 통합</td></tr>
<tr><td>DALL-E 3</td><td>OpenAI</td><td>이미지 생성</td><td>ChatGPT Plus에 포함</td><td>자연어 프롬프트로 고품질 이미지 생성</td></tr>
<tr><td>Midjourney</td><td>Midjourney</td><td>이미지 생성</td><td>유료(구독)</td><td>예술적 품질이 뛰어난 이미지 생성</td></tr>
</tbody>
</table>

<h3>AI 도구 선택 가이드</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 목적 파악</h4>
<p>무엇을 하고 싶은가? (글쓰기, 코딩, 이미지, 분석)</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 예산 확인</h4>
<p>무료로 충분한가? 유료 플랜이 필요한가?</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 환경 확인</h4>
<p>웹 기반? 데스크톱 앱? 모바일?</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 시작</h4>
<p>계정 생성 후 간단한 테스트부터 시작</p>
</div>
</div>

<h3>계정 설정 시 주의사항</h3>
<div class="info-box warning">
<strong>보안 및 개인정보 주의사항</strong><br/>
<ul>
<li><strong>비밀번호 관리</strong>: AI 서비스마다 고유한 강력한 비밀번호를 사용하세요.</li>
<li><strong>개인정보 입력 금지</strong>: 주민등록번호, 카드 번호, 비밀번호 등 민감한 개인정보를 AI에 입력하지 마세요.</li>
<li><strong>기업 기밀</strong>: 회사 내부 문서, 미공개 정보를 AI에 업로드하지 마세요.</li>
<li><strong>대화 기록</strong>: AI 서비스가 대화 내용을 학습에 사용할 수 있으므로, 설정에서 학습 비허용 옵션을 확인하세요.</li>
<li><strong>2단계 인증</strong>: 가능하다면 2FA(Two-Factor Authentication)를 활성화하세요.</li>
</ul>
</div>

<div class="info-box">
<strong>실습 환경 추천</strong><br/>
본 교재의 실습은 ChatGPT(무료 버전)와 Claude(무료 버전)를 기본으로 진행합니다. 이미지 생성 실습은 Bing Image Creator(무료)를 사용합니다. 별도의 유료 구독 없이 모든 실습을 따라할 수 있습니다.
</div>
    `},{id:602,chapter_id:6,title:"6.2 텍스트 생성 실습",sort_order:2,content:`
<h2>AI를 활용한 텍스트 생성</h2>
<p>생성형 AI의 가장 기본적이면서도 강력한 기능은 텍스트 생성입니다. 에세이, 보고서, 요약문, 이메일 등 다양한 유형의 텍스트를 AI의 도움으로 효율적으로 작성할 수 있습니다.</p>

<h3>실습 1: 에세이 작성</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"대학교 교양 과목 보고서를 작성합니다. 주제는 '인공지능이 교육에 미치는 영향'이며, 다음 구조로 작성해 주세요:<br/>
1. 서론 (200자): 주제 소개 및 논의의 필요성<br/>
2. 본론 1 (300자): AI 기반 개인 맞춤형 학습의 장점<br/>
3. 본론 2 (300자): AI 도입의 우려 사항 및 한계<br/>
4. 결론 (200자): 균형 잡힌 시각과 제언<br/>
학술적이지만 읽기 쉬운 문체로 작성하고, 구체적인 사례를 2개 이상 포함해 주세요."
</div>

<h3>실습 2: 보고서 요약</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 텍스트를 아래 형식으로 요약해 주세요:<br/>
- 한 줄 요약 (30자 이내)<br/>
- 핵심 포인트 3가지 (각 50자 이내)<br/>
- 시사점 (100자 이내)<br/>
원문의 핵심 논지를 왜곡하지 않도록 주의해 주세요."
</div>

<h3>텍스트 생성 유형별 프롬프트 전략</h3>
<table>
<thead>
<tr><th>유형</th><th>핵심 전략</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>학술 글쓰기</td><td>구조 명시, 학술적 톤, 인용 형식 지정</td><td>AI 생성 내용의 사실 확인 필수</td></tr>
<tr><td>비즈니스 문서</td><td>대상 독자, 목적, 톤 명확히 지정</td><td>기밀 정보 입력 금지</td></tr>
<tr><td>창작 글쓰기</td><td>장르, 분위기, 캐릭터 설정 제공</td><td>저작권과 독창성 검토 필요</td></tr>
<tr><td>SNS 콘텐츠</td><td>플랫폼 특성, 해시태그, 글자 수 제한 명시</td><td>팩트 체크 후 게시</td></tr>
</tbody>
</table>

<h3>실습 3: 이메일 작성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>공식 이메일</h4>
<p>"당신은 비즈니스 커뮤니케이션 전문가입니다. 거래처에 납품 일정 변경을 알리는 공식 이메일을 작성해 주세요. 기존 일정은 4월 15일이었으나, 원자재 수급 문제로 4월 25일로 변경됩니다. 정중하고 전문적인 톤으로 작성해 주세요."</p>
</div>
<div class="compare-item">
<h4>감사 이메일</h4>
<p>"인턴십을 마치고 멘토에게 보내는 감사 이메일을 작성해 주세요. 3개월간 마케팅 팀에서 인턴으로 근무했으며, 멘토로부터 데이터 분석과 고객 리서치를 배웠습니다. 진심 어린 감사와 함께 향후 연락 유지 의사를 표현해 주세요."</p>
</div>
</div>

<div class="info-box warning">
<strong>텍스트 생성 시 반드시 확인할 사항</strong><br/>
<ul>
<li>AI가 생성한 사실 관계(날짜, 수치, 인물, 사건)는 반드시 검증하세요.</li>
<li>학술 과제에 AI를 활용할 경우, 학교/교수의 AI 활용 정책을 먼저 확인하세요.</li>
<li>AI 생성 텍스트를 그대로 제출하지 말고, 자신의 관점으로 편집하고 보완하세요.</li>
</ul>
</div>
    `},{id:603,chapter_id:6,title:"6.3 이미지 생성 실습",sort_order:3,content:`
<h2>AI를 활용한 이미지 생성</h2>
<p>AI 이미지 생성 기술은 텍스트 프롬프트만으로 고품질의 이미지를 만들어낼 수 있습니다. 디자인 전문 지식이 없어도 프레젠테이션, 블로그, SNS 등에 활용할 수 있는 이미지를 생성할 수 있습니다.</p>

<h3>주요 이미지 생성 AI 도구</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>접근 방법</th><th>적합한 용도</th></tr>
</thead>
<tbody>
<tr><td>DALL-E 3</td><td>자연어 이해력 우수, ChatGPT 연동</td><td>ChatGPT Plus 구독</td><td>일러스트, 개념 이미지, 로고 초안</td></tr>
<tr><td>Midjourney</td><td>예술적 품질 최고 수준</td><td>Discord 기반, 유료 구독</td><td>예술 작품, 컨셉 아트, 광고 비주얼</td></tr>
<tr><td>Stable Diffusion</td><td>오픈소스, 로컬 실행 가능</td><td>로컬 설치 또는 웹 서비스</td><td>커스터마이징, 대량 생성, 연구</td></tr>
<tr><td>Bing Image Creator</td><td>무료, DALL-E 3 기반</td><td>Microsoft 계정</td><td>간단한 이미지, 프레젠테이션 소재</td></tr>
</tbody>
</table>

<h3>이미지 프롬프트 작성법</h3>
<div class="info-box">
<strong>이미지 프롬프트 구조</strong><br/>
<ol>
<li><strong>주제(Subject)</strong>: 무엇을 그릴 것인가? → "강아지가 공원에서 뛰어노는 장면"</li>
<li><strong>스타일(Style)</strong>: 어떤 화풍인가? → "수채화 스타일", "미니멀리스트", "사실적 사진"</li>
<li><strong>분위기(Mood)</strong>: 어떤 느낌인가? → "밝고 따뜻한", "신비로운", "전문적인"</li>
<li><strong>구도(Composition)</strong>: 어떤 각도/배치인가? → "클로즈업", "조감도", "대칭 구도"</li>
<li><strong>색감(Color)</strong>: 어떤 색조인가? → "파스텔 톤", "선명한 원색", "모노크롬"</li>
</ol>
</div>

<h3>실습: 프레젠테이션용 이미지 생성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기본 프롬프트</h4>
<p>"AI 기술 발전을 보여주는 이미지"</p>
<p>결과: 모호하고 일반적인 이미지가 생성될 가능성이 높습니다.</p>
</div>
<div class="compare-item">
<h4>개선된 프롬프트</h4>
<p>"미래 도시에서 인간과 로봇이 함께 협업하는 사무실 장면. 깔끔한 미니멀리스트 일러스트 스타일. 파란색과 흰색 중심 컬러. 16:9 비율. 프레젠테이션 배경으로 적합하게."</p>
<p>결과: 구체적이고 용도에 맞는 이미지가 생성됩니다.</p>
</div>
</div>

<h3>이미지 생성 시 주의사항</h3>
<div class="info-box warning">
<strong>법적·윤리적 고려사항</strong><br/>
<ul>
<li><strong>초상권</strong>: 실존 인물의 얼굴을 생성하는 것은 법적 문제를 야기할 수 있습니다.</li>
<li><strong>저작권</strong>: AI 생성 이미지의 저작권 귀속은 아직 법적으로 명확하지 않습니다. 상업적 사용 전 서비스 약관을 확인하세요.</li>
<li><strong>편향</strong>: AI 이미지 생성 모델은 학습 데이터의 편향을 반영할 수 있으므로, 다양성을 고려한 프롬프트를 작성하세요.</li>
<li><strong>딥페이크 악용 금지</strong>: 타인을 사칭하거나 허위 정보를 유포하기 위한 이미지 생성은 엄격히 금지됩니다.</li>
</ul>
</div>
    `},{id:604,chapter_id:6,title:"6.4 코드 작성 실습",sort_order:4,content:`
<h2>AI를 활용한 코드 작성</h2>
<p>AI는 프로그래밍 보조 도구로서 탁월한 능력을 발휘합니다. 코드 작성, 디버깅, 리팩토링, 설명 등 개발 과정의 여러 단계에서 AI를 활용할 수 있습니다. 프로그래밍 경험이 없는 초보자도 AI를 통해 간단한 프로그램을 만들 수 있습니다.</p>

<h3>AI 코딩 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>사용 환경</th><th>주요 기능</th></tr>
</thead>
<tbody>
<tr><td>GitHub Copilot</td><td>코드 에디터 통합형</td><td>VS Code, JetBrains</td><td>실시간 코드 자동 완성, 함수 생성</td></tr>
<tr><td>ChatGPT</td><td>대화형 코드 생성</td><td>웹 브라우저</td><td>코드 작성, 설명, 디버깅, 리팩토링</td></tr>
<tr><td>Claude</td><td>긴 코드 분석에 강점</td><td>웹 브라우저</td><td>대규모 코드 분석, 문서화, 리뷰</td></tr>
<tr><td>Cursor</td><td>AI 네이티브 코드 에디터</td><td>데스크톱 앱</td><td>AI 기반 코드 편집, 채팅, 자동 완성</td></tr>
</tbody>
</table>

<h3>실습 1: 간단한 프로그램 작성</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"Python으로 간단한 할 일 목록(Todo List) 프로그램을 작성해 줘. 다음 기능을 포함해야 합니다:<br/>
1. 할 일 추가<br/>
2. 할 일 목록 보기<br/>
3. 할 일 완료 표시<br/>
4. 할 일 삭제<br/>
5. 프로그램 종료<br/>
메뉴 방식으로 동작하고, 각 함수에 한글 주석을 달아 주세요. 초보자가 이해할 수 있도록 간단한 코드로 작성해 주세요."
</div>

<h3>실습 2: 코드 디버깅</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 Python 코드에 오류가 있습니다. 오류를 찾아서 설명하고, 수정된 코드를 제공해 주세요. 왜 이 오류가 발생하는지 초보자도 이해할 수 있도록 설명해 주세요."<br/>
<p>이처럼 오류가 있는 코드를 AI에 제공하면, AI가 문제를 진단하고 해결책을 제시합니다.</p>
</div>

<h3>AI 코딩 활용 단계</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 요구사항 전달</h4>
<p>원하는 기능을 자연어로 설명</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 코드 생성</h4>
<p>AI가 코드를 생성하고 설명 제공</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 검토 및 테스트</h4>
<p>생성된 코드를 실행하고 검증</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 수정 요청</h4>
<p>문제점이나 추가 요구사항 피드백</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 코딩 시 주의사항</strong><br/>
<ul>
<li>AI가 생성한 코드를 반드시 직접 실행하여 테스트하세요. 문법 오류나 논리적 오류가 있을 수 있습니다.</li>
<li>보안에 민감한 코드(인증, 결제 등)는 AI 코드를 그대로 사용하지 말고 보안 전문가의 검토를 받으세요.</li>
<li>AI 코드를 복사·붙여넣기만 하지 말고, 각 줄이 무엇을 하는지 이해하려고 노력하세요.</li>
<li>라이선스 문제를 확인하세요. AI가 생성한 코드가 기존 오픈소스 코드와 유사할 수 있습니다.</li>
</ul>
</div>
    `},{id:605,chapter_id:6,title:"6.5 데이터 분석 실습",sort_order:5,content:`
<h2>AI를 활용한 데이터 분석</h2>
<p>AI는 데이터 분석의 문턱을 크게 낮추었습니다. 전문적인 통계 지식이나 프로그래밍 기술 없이도, 자연어로 데이터 분석을 요청하고 인사이트를 도출할 수 있습니다.</p>

<h3>AI 데이터 분석 활용 영역</h3>
<table>
<thead>
<tr><th>분석 유형</th><th>설명</th><th>AI 활용 방법</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>기술 통계</td><td>데이터의 기본 특성 파악</td><td>"이 데이터의 평균, 중앙값, 표준편차를 구해 줘"</td><td>매출 데이터 기본 통계</td></tr>
<tr><td>추세 분석</td><td>시간에 따른 변화 패턴 파악</td><td>"월별 매출 추이를 분석하고 트렌드를 설명해 줘"</td><td>연간 매출 성장률</td></tr>
<tr><td>비교 분석</td><td>그룹 간 차이 비교</td><td>"A 제품과 B 제품의 판매 성과를 비교 분석해 줘"</td><td>제품별 시장 점유율</td></tr>
<tr><td>상관 분석</td><td>변수 간 관계 파악</td><td>"광고 비용과 매출 사이의 관계를 분석해 줘"</td><td>마케팅 ROI 분석</td></tr>
<tr><td>예측 분석</td><td>미래 값 예측</td><td>"이 추세로 보면 다음 분기 매출은 얼마일까?"</td><td>수요 예측</td></tr>
</tbody>
</table>

<h3>실습: 설문조사 결과 분석</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음은 대학생 100명의 AI 활용 현황 설문 결과입니다. 이 데이터를 분석하여:<br/>
1. 전체 응답의 기술 통계 요약<br/>
2. 성별/학년별 AI 활용 빈도 차이 분석<br/>
3. 가장 많이 사용하는 AI 도구 TOP 5<br/>
4. AI 만족도에 영향을 미치는 요인 분석<br/>
5. 분석 결과 시각화 제안 (어떤 차트를 사용하면 좋을지)<br/>
을 수행해 주세요. 결과를 비전공자가 이해할 수 있는 수준으로 설명해 주세요."
</div>

<h3>ChatGPT 데이터 분석 기능 활용</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>파일 업로드 분석</h4>
<p>ChatGPT Plus의 Code Interpreter(Advanced Data Analysis) 기능을 사용하면 CSV, Excel 파일을 직접 업로드하여 분석할 수 있습니다. AI가 Python 코드를 실행하여 통계 분석과 시각화를 자동으로 수행합니다.</p>
</div>
<div class="compare-item">
<h4>텍스트 기반 분석</h4>
<p>데이터를 텍스트로 붙여넣어 분석을 요청할 수도 있습니다. 소규모 데이터셋이나 요약된 통계 자료를 분석할 때 유용합니다. 무료 버전에서도 활용 가능합니다.</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 데이터 분석 시 주의사항</strong><br/>
<ul>
<li><strong>데이터 보안</strong>: 개인정보나 기업 기밀 데이터를 외부 AI 서비스에 업로드하지 마세요.</li>
<li><strong>결과 검증</strong>: AI의 분석 결과를 맹신하지 말고, 상식과 도메인 지식으로 검증하세요.</li>
<li><strong>맥락 제공</strong>: 데이터의 출처, 수집 방법, 변수의 의미 등 충분한 맥락을 제공하세요.</li>
<li><strong>한계 인식</strong>: AI는 상관관계를 인과관계로 잘못 해석할 수 있습니다. 통계적 해석에 주의하세요.</li>
</ul>
</div>
    `},{id:606,chapter_id:6,title:"6.6 번역과 언어 학습",sort_order:6,content:`
<h2>AI를 활용한 번역과 언어 학습</h2>
<p>AI 번역 기술은 최근 몇 년간 비약적으로 발전하여, 대부분의 일상적인 번역 작업에서 높은 품질을 제공합니다. 또한 AI는 개인 맞춤형 언어 학습 도우미로서도 활용될 수 있습니다.</p>

<h3>AI 번역 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>장점</th><th>한계</th></tr>
</thead>
<tbody>
<tr><td>Google 번역</td><td>200+ 언어 지원, 실시간 번역</td><td>빠르고 접근성 좋음, 카메라 번역</td><td>문맥 파악 부족, 전문 용어 오역 가능</td></tr>
<tr><td>DeepL</td><td>유럽어 중심 고품질 번역</td><td>자연스러운 번역, 전문 문서에 강점</td><td>지원 언어 제한적</td></tr>
<tr><td>ChatGPT/Claude</td><td>대화형, 맥락 기반 번역</td><td>맥락 고려, 톤/스타일 조절 가능</td><td>속도 느림, 긴 문서 분할 필요</td></tr>
<tr><td>파파고</td><td>한국어 특화 번역</td><td>한국어 자연스러움 우수, 구어체 강점</td><td>전문 분야 정확도 편차</td></tr>
</tbody>
</table>

<h3>실습 1: 맥락을 고려한 번역</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 한국어 비즈니스 이메일을 영어로 번역해 주세요. 번역 시 다음 조건을 지켜 주세요:<br/>
- 공식적인 비즈니스 영어 톤 유지<br/>
- 한국식 표현(예: '수고하세요', '잘 부탁드립니다')을 영어권 비즈니스 관행에 맞게 자연스럽게 변환<br/>
- 존칭과 격식체를 적절한 영어 표현으로 변환<br/>
- 번역 후 주요 의역 부분에 대한 설명을 별도로 제공"
</div>

<h3>실습 2: AI 언어 학습 활용</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>회화 연습</h4>
<p>"당신은 일본어 원어민 친구입니다. 나와 일본어로 대화해 주세요. 카페에서 만난 상황입니다. 내가 문법 실수를 하면 올바른 표현을 알려주되, 대화 흐름은 끊지 마세요. N3 수준의 어휘를 사용해 주세요."</p>
</div>
<div class="compare-item">
<h4>문법 학습</h4>
<p>"영어 현재완료(Present Perfect)를 한국어로 설명해 줘. 한국어에는 없는 시제 개념이므로, 한국인 학습자가 자주 틀리는 사례 5가지를 포함하고, 각각 올바른 표현과 함께 비교 설명해 줘."</p>
</div>
</div>

<h3>AI 번역의 효과적 활용 전략</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1차: 초벌 번역</h4>
<p>Google 번역이나 DeepL로 빠르게 번역</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2차: 맥락 보정</h4>
<p>ChatGPT/Claude로 맥락, 톤, 스타일 조정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3차: 전문가 검토</h4>
<p>중요 문서는 전문 번역가/원어민 최종 검수</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 번역 시 주의사항</strong><br/>
<ul>
<li>법률, 의료, 기술 문서의 AI 번역은 반드시 전문가 검수를 거치세요.</li>
<li>문화적 뉘앙스, 관용구, 유머 등은 AI가 정확히 전달하기 어려울 수 있습니다.</li>
<li>AI 번역을 언어 학습의 '정답'으로 맹신하지 마세요. 참고 자료로 활용하세요.</li>
</ul>
</div>
    `},{id:607,chapter_id:6,title:"6.7 문서 요약과 분석",sort_order:7,content:`
<h2>AI를 활용한 문서 요약과 분석</h2>
<p>방대한 양의 문서를 빠르게 이해하고 핵심을 파악하는 것은 학업과 업무에서 필수적인 능력입니다. AI는 긴 문서를 요약하고, 핵심 논점을 추출하며, 비판적으로 분석하는 데 강력한 도우미 역할을 합니다.</p>

<h3>AI 문서 분석 활용 유형</h3>
<table>
<thead>
<tr><th>활용 유형</th><th>설명</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>요약</td><td>핵심 내용 추출 및 축약</td><td>"이 논문의 핵심 내용을 300자로 요약해 줘"</td></tr>
<tr><td>핵심 논점 추출</td><td>주요 주장과 근거 식별</td><td>"이 기사의 주요 주장 3가지와 각각의 근거를 정리해 줘"</td></tr>
<tr><td>비교 분석</td><td>여러 문서의 공통점/차이점</td><td>"두 보고서의 결론을 비교하고 차이점을 표로 정리해 줘"</td></tr>
<tr><td>비판적 분석</td><td>논리적 허점, 편향 찾기</td><td>"이 주장의 논리적 약점이나 편향된 관점을 분석해 줘"</td></tr>
<tr><td>Q&A 생성</td><td>문서 기반 질의응답</td><td>"이 교재의 내용을 바탕으로 시험 문제 5개를 만들어 줘"</td></tr>
</tbody>
</table>

<h3>실습 1: 학술 논문 요약</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 논문을 아래 구조로 요약해 주세요:<br/>
1. 연구 목적 (2~3줄)<br/>
2. 연구 방법 (3~4줄)<br/>
3. 주요 결과 (핵심 발견 3가지, 불릿 포인트)<br/>
4. 결론 및 시사점 (2~3줄)<br/>
5. 한계점 (1~2줄)<br/>
전문 용어는 괄호 안에 쉬운 설명을 덧붙여 주세요."
</div>

<h3>실습 2: 보고서 비판적 분석</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 보고서를 비판적으로 분석해 주세요:<br/>
1. 주장의 근거가 충분한가?<br/>
2. 데이터 해석에 오류는 없는가?<br/>
3. 다른 관점이나 반론은 무엇인가?<br/>
4. 결론이 논리적으로 타당한가?<br/>
5. 개선이 필요한 부분은 무엇인가?<br/>
건설적이고 객관적인 관점으로 분석해 주세요."
</div>

<h3>효과적인 문서 분석 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>단계적 분석</h4>
<p>긴 문서는 한 번에 분석하지 말고, 섹션별로 나누어 분석한 후 전체를 종합합니다. 먼저 목차와 결론을 분석하고, 이후 세부 내용을 다룹니다.</p>
</div>
<div class="compare-item">
<h4>다중 관점 분석</h4>
<p>AI에게 서로 다른 관점(찬성/반대, 낙관/비관, 이론/실무)에서 분석하도록 요청하면, 보다 균형 잡힌 이해를 얻을 수 있습니다.</p>
</div>
</div>

<div class="info-box warning">
<strong>주의사항</strong><br/>
<ul>
<li>AI가 요약한 내용이 원문의 핵심을 정확히 반영하는지 확인하세요. 중요한 세부 사항이 누락될 수 있습니다.</li>
<li>기밀 문서, 미공개 논문, 개인정보가 포함된 문서는 외부 AI에 업로드하지 마세요.</li>
<li>AI 요약을 인용할 때는 반드시 원문을 직접 확인한 후 인용하세요.</li>
</ul>
</div>
    `},{id:608,chapter_id:6,title:"6.8 AI 협업 워크플로우",sort_order:8,content:`
<h2>AI 협업 워크플로우</h2>
<p>AI를 단순한 도구가 아닌 협업 파트너로 활용하면, 업무 효율성을 크게 향상시킬 수 있습니다. 이 절에서는 AI를 일상적인 작업 프로세스에 체계적으로 통합하는 방법을 알아봅니다.</p>

<h3>AI 협업의 기본 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>인간의 역할</h4>
<ul>
<li>목표 설정과 방향 결정</li>
<li>창의적 아이디어와 전략 수립</li>
<li>윤리적 판단과 가치 결정</li>
<li>최종 검토와 품질 보증</li>
<li>이해관계자와의 소통</li>
</ul>
</div>
<div class="compare-item">
<h4>AI의 역할</h4>
<ul>
<li>초안 작성과 아이디어 확장</li>
<li>데이터 처리와 패턴 발견</li>
<li>반복 작업 자동화</li>
<li>다양한 대안 제시</li>
<li>정보 검색과 정리</li>
</ul>
</div>
</div>

<h3>업무 유형별 AI 워크플로우</h3>
<table>
<thead>
<tr><th>업무 단계</th><th>AI 활용 방법</th><th>인간의 역할</th></tr>
</thead>
<tbody>
<tr><td>기획/리서치</td><td>시장 조사, 트렌드 분석, 경쟁사 분석 초안</td><td>전략적 방향 설정, 핵심 인사이트 도출</td></tr>
<tr><td>콘텐츠 제작</td><td>초안 작성, 이미지 생성, 번역</td><td>톤/메시지 결정, 편집, 브랜드 일관성 확인</td></tr>
<tr><td>데이터 분석</td><td>데이터 정리, 통계 분석, 시각화</td><td>분석 목적 설정, 결과 해석, 의사결정</td></tr>
<tr><td>커뮤니케이션</td><td>이메일 초안, 보고서 구조화, 번역</td><td>관계 관리, 미묘한 뉘앙스 조정, 최종 승인</td></tr>
<tr><td>학습/교육</td><td>학습 자료 생성, 퀴즈 출제, 개념 설명</td><td>학습 목표 설정, 내용 검증, 피드백</td></tr>
</tbody>
</table>

<h3>실습: 프로젝트 보고서 작성 워크플로우</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1단계: 구조 설계</h4>
<p>AI에게 보고서 목차 초안 요청<br/>→ 인간이 수정·확정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2단계: 리서치</h4>
<p>AI에게 관련 데이터·사례 조사 요청<br/>→ 인간이 출처 검증</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3단계: 초안 작성</h4>
<p>AI에게 섹션별 초안 생성 요청<br/>→ 인간이 전문성 보강</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4단계: 검토·완성</h4>
<p>AI에게 문법·논리 검토 요청<br/>→ 인간이 최종 편집·승인</p>
</div>
</div>

<div class="info-box">
<strong>AI 협업 성공을 위한 팁</strong><br/>
<ul>
<li><strong>역할 분담</strong>: AI에게 맡길 작업과 인간이 직접 해야 할 작업을 명확히 구분하세요.</li>
<li><strong>반복 검증</strong>: AI 결과물을 항상 검증하는 습관을 들이세요.</li>
<li><strong>점진적 도입</strong>: 처음부터 모든 업무에 AI를 적용하지 말고, 간단한 작업부터 시작하세요.</li>
<li><strong>프롬프트 축적</strong>: 효과적인 프롬프트를 기록하고 팀과 공유하세요.</li>
<li><strong>지속 학습</strong>: AI 도구의 새로운 기능과 업데이트를 지속적으로 학습하세요.</li>
</ul>
</div>
    `},{id:609,chapter_id:6,title:"6.9 학습 정리",sort_order:9,content:`
<h2>Chapter 6 학습 정리</h2>
<p>이번 장에서는 다양한 AI 도구를 실제로 활용하는 방법을 실습했습니다. 각 영역별 핵심 내용을 정리합니다.</p>

<h3>영역별 핵심 요약</h3>
<table>
<thead>
<tr><th>활용 영역</th><th>대표 도구</th><th>핵심 포인트</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>텍스트 생성</td><td>ChatGPT, Claude</td><td>구조 지정, 톤 설정, 구체적 프롬프트</td><td>사실 확인 필수, 학교 AI 정책 확인</td></tr>
<tr><td>이미지 생성</td><td>DALL-E 3, Midjourney</td><td>주제+스타일+분위기+구도 명시</td><td>초상권, 저작권, 딥페이크 주의</td></tr>
<tr><td>코드 작성</td><td>Copilot, ChatGPT</td><td>요구사항 자연어 설명, 코드 이해 노력</td><td>반드시 테스트, 보안 코드 검수</td></tr>
<tr><td>데이터 분석</td><td>ChatGPT(Code Interpreter)</td><td>맥락 제공, 분석 유형 명시</td><td>데이터 보안, 결과 검증</td></tr>
<tr><td>번역</td><td>DeepL, ChatGPT, 파파고</td><td>맥락·톤·스타일 지정</td><td>전문 문서는 전문가 검수</td></tr>
<tr><td>문서 분석</td><td>Claude, ChatGPT</td><td>단계적 분석, 다중 관점 활용</td><td>원문 직접 확인 필수</td></tr>
</tbody>
</table>

<h3>AI 활용의 핵심 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>준비</h4>
<p>목적 파악, 적합한 도구 선택</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>입력</h4>
<p>효과적인 프롬프트 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>생성</h4>
<p>AI의 결과물 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>검증</h4>
<p>정확성, 품질, 윤리 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>활용</h4>
<p>편집, 보완하여 최종 결과물 완성</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 원칙</strong><br/>
<ul>
<li>AI는 도구입니다. 최종 판단과 책임은 항상 사용자에게 있습니다.</li>
<li>AI 결과물을 그대로 사용하지 말고, 반드시 검토하고 자신의 관점으로 보완하세요.</li>
<li>개인정보와 기밀 정보의 보호를 항상 최우선으로 고려하세요.</li>
<li>AI를 활용하되, 기본 역량(글쓰기, 분석, 코딩)을 스스로 기르는 것을 게을리하지 마세요.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 AI를 사용할 때 반드시 고려해야 할 <strong>AI 윤리와 책임</strong>에 대해 학습합니다. AI의 공정성, 투명성, 개인정보 보호, 저작권 등 핵심 윤리 이슈를 심도 있게 다룹니다.</p>
    `},{id:610,chapter_id:6,title:"6.10 학습 확인 문제",sort_order:10,content:`
<h2>학습 확인 문제</h2>
<p>Chapter 6에서 학습한 AI 활용 실습 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> AI 서비스를 사용할 때 절대 입력하면 안 되는 정보가 <u>아닌</u> 것은?<br/>
① 주민등록번호<br/>
② 신용카드 번호<br/>
③ 공개된 뉴스 기사 본문<br/>
④ 회사 내부 기밀 문서<br/>
<em>정답: ③ — 공개된 뉴스 기사는 이미 공개 정보이므로 AI에 입력해도 보안 문제가 없습니다. 나머지는 모두 민감한 정보로 AI에 입력해서는 안 됩니다.</em>
</div>

<div class="info-box">
<strong>문제 2.</strong> AI 이미지 생성 프롬프트 작성 시 포함해야 할 5가지 요소를 나열하시오.<br/>
<em>정답: (1) 주제(Subject) — 무엇을 그릴 것인가, (2) 스타일(Style) — 어떤 화풍인가, (3) 분위기(Mood) — 어떤 느낌인가, (4) 구도(Composition) — 어떤 각도/배치인가, (5) 색감(Color) — 어떤 색조인가</em>
</div>

<div class="info-box">
<strong>문제 3.</strong> AI로 생성한 코드를 실제 프로젝트에 사용하기 전에 반드시 수행해야 할 절차를 3가지 이상 설명하시오.<br/>
<em>모범 답안: (1) 코드를 직접 실행하여 정상 동작 여부를 테스트한다, (2) 각 줄의 코드가 무엇을 하는지 이해하고 검토한다, (3) 보안에 민감한 부분(인증, 결제 등)은 보안 전문가의 검토를 받는다, (4) 라이선스 문제를 확인하여 기존 오픈소스 코드와 유사하지 않은지 검증한다, (5) 엣지 케이스(예외 상황)에 대한 테스트를 수행한다.</em>
</div>

<div class="info-box">
<strong>문제 4.</strong> AI 번역의 효과적인 3단계 활용 전략을 설명하고, 각 단계에서 적합한 도구를 제시하시오.<br/>
<em>모범 답안: 1단계(초벌 번역) — Google 번역이나 DeepL을 사용하여 빠르게 전체 텍스트를 번역합니다. 2단계(맥락 보정) — ChatGPT 또는 Claude를 사용하여 번역된 텍스트의 맥락, 톤, 스타일을 조정합니다. 3단계(전문가 검토) — 중요한 문서의 경우 전문 번역가 또는 원어민이 최종 검수합니다.</em>
</div>

<div class="info-box">
<strong>문제 5.</strong> AI 협업 워크플로우에서 인간이 담당해야 할 역할과 AI에게 맡기기 적합한 역할을 각각 3가지 이상 비교 설명하시오.<br/>
<em>모범 답안: 인간의 역할 — (1) 프로젝트의 목표 설정과 전략적 방향 결정, (2) 윤리적 판단과 가치 기반 의사결정, (3) 최종 결과물의 품질 검토와 승인, (4) 이해관계자와의 감성적 소통과 협상. AI의 역할 — (1) 대량의 데이터 수집·정리 및 패턴 분석, (2) 초안 작성과 다양한 대안 생성, (3) 반복적인 작업(데이터 입력, 형식 변환 등)의 자동화, (4) 문법·맞춤법 검사 등 기계적 검토 수행.</em>
</div>
    `}],eI=[{id:701,chapter_id:7,title:"7.1 AI 윤리란?",sort_order:1,content:`
<h2>AI 윤리의 정의와 중요성</h2>
<p>AI 윤리(AI Ethics)란 인공지능 기술의 개발, 배포, 사용 과정에서 발생할 수 있는 도덕적·사회적 문제를 다루는 학문 분야입니다. AI 시스템이 인간의 가치와 권리를 존중하며, 사회에 긍정적인 영향을 미치도록 보장하는 원칙과 실천 방안을 연구합니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
AI 윤리는 "AI 기술이 무엇을 할 수 있는가"가 아니라, "AI 기술이 무엇을 해야 하고 무엇을 하지 말아야 하는가"를 탐구하는 분야입니다.
</div>

<h3>AI 윤리가 중요한 이유</h3>
<table>
<thead>
<tr><th>측면</th><th>윤리적 문제</th><th>실제 사례</th></tr>
</thead>
<tbody>
<tr><td>의사결정 영향력</td><td>AI의 결정이 개인의 삶에 직접적 영향</td><td>AI 채용 시스템이 특정 성별을 차별한 사례(Amazon, 2018)</td></tr>
<tr><td>사회적 규모</td><td>AI가 수백만 명에게 동시에 영향</td><td>소셜 미디어 알고리즘이 허위 정보 확산에 기여</td></tr>
<tr><td>자동화된 편향</td><td>편향된 데이터가 편향된 결과를 생산</td><td>미국 형사사법 AI(COMPAS)의 인종 편향 논란</td></tr>
<tr><td>개인정보 침해</td><td>대규모 데이터 수집과 감시 가능성</td><td>얼굴 인식 기술의 무분별한 감시 활용</td></tr>
<tr><td>일자리 변화</td><td>자동화로 인한 직업 구조 변화</td><td>제조업, 고객 서비스, 번역 등 분야 변화</td></tr>
</tbody>
</table>

<h3>AI 윤리의 핵심 질문들</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 질문</h4>
<ul>
<li>AI의 결정 과정을 설명할 수 있는가?</li>
<li>AI 시스템의 편향을 탐지하고 수정할 수 있는가?</li>
<li>AI의 오류로 피해가 발생하면 누가 책임지는가?</li>
</ul>
</div>
<div class="compare-item">
<h4>사회적 질문</h4>
<ul>
<li>AI의 혜택이 사회 전체에 공정하게 분배되는가?</li>
<li>AI가 기존의 사회적 불평등을 심화시키지 않는가?</li>
<li>AI 발전에 따른 일자리 변화에 어떻게 대비하는가?</li>
</ul>
</div>
</div>

<h3>AI 윤리의 역사적 배경</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>초기 논의 (1950~2000)</h4>
<p>아시모프의 로봇 3원칙, 튜링의 철학적 질문 등 이론적 논의 중심</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>실용적 전환 (2010~2018)</h4>
<p>빅데이터·딥러닝 발전으로 실제 윤리 문제 부각, 편향·프라이버시 이슈 표면화</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>제도화 (2019~현재)</h4>
<p>EU AI Act, 유네스코 AI 윤리 권고, 각국 AI 윤리 가이드라인 수립</p>
</div>
</div>

<div class="info-box warning">
<strong>왜 모든 사람이 AI 윤리를 이해해야 하는가?</strong><br/>
AI 윤리는 기술자나 정책 입안자만의 문제가 아닙니다. AI를 사용하는 모든 사람이 윤리적 AI 사용자가 되어야 합니다. AI 서비스를 이용할 때 자신의 데이터가 어떻게 사용되는지, AI의 결과를 맹신하고 있지 않은지, AI를 통해 타인에게 피해를 주고 있지 않은지 항상 생각해야 합니다.
</div>
    `},{id:702,chapter_id:7,title:"7.2 AI 윤리 원칙",sort_order:2,content:`
<h2>AI 윤리의 핵심 원칙</h2>
<p>전 세계 주요 기관과 기업이 제시하는 AI 윤리 원칙은 세부 내용에서 차이가 있지만, 핵심적인 원칙은 일관됩니다. 국제적으로 합의된 AI 윤리의 4대 원칙을 살펴보겠습니다.</p>

<h3>AI 윤리 4대 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>1. 공정성 (Fairness)</h4>
<p>AI 시스템이 특정 집단을 차별하지 않고, 모든 사용자에게 동등한 기회와 결과를 제공해야 합니다. 인종, 성별, 나이, 장애 여부 등에 따른 부당한 차별이 없어야 합니다.</p>
</div>
<div class="compare-item">
<h4>2. 투명성 (Transparency)</h4>
<p>AI 시스템의 작동 원리, 의사결정 과정, 사용되는 데이터에 대해 이해 가능한 수준의 정보가 공개되어야 합니다. "블랙박스" 문제를 해소하기 위한 설명 가능한 AI(XAI)가 중요합니다.</p>
</div>
<div class="compare-item">
<h4>3. 책임성 (Accountability)</h4>
<p>AI 시스템의 결정에 대해 명확한 책임 주체가 존재해야 합니다. AI의 오류로 피해가 발생했을 때, 개발자·운영자·사용자 중 누가 어떤 책임을 지는지 분명해야 합니다.</p>
</div>
<div class="compare-item">
<h4>4. 프라이버시 (Privacy)</h4>
<p>개인의 데이터가 동의 없이 수집·활용되지 않아야 하며, 수집된 데이터는 안전하게 관리되어야 합니다. 데이터 최소 수집 원칙과 목적 제한 원칙이 적용되어야 합니다.</p>
</div>
</div>

<h3>원칙의 실제 적용</h3>
<table>
<thead>
<tr><th>윤리 원칙</th><th>실천 방안</th><th>위반 사례</th></tr>
</thead>
<tbody>
<tr><td>공정성</td><td>다양한 집단의 데이터로 학습, 편향 감사(Bias Audit) 실시</td><td>Apple Card 신용 한도 알고리즘의 성별 차별 논란 (2019)</td></tr>
<tr><td>투명성</td><td>AI 사용 고지, 의사결정 근거 제공, 모델 카드(Model Card) 공개</td><td>소셜 미디어 추천 알고리즘의 불투명한 운영</td></tr>
<tr><td>책임성</td><td>AI 감사 체계 구축, 피해 구제 절차 마련, 책임 보험</td><td>자율주행 사고 시 책임 소재 불분명 (Uber, 2018)</td></tr>
<tr><td>프라이버시</td><td>데이터 암호화, 익명화, 동의 기반 수집, 삭제 권리 보장</td><td>Clearview AI의 무단 얼굴 이미지 수집 (2020)</td></tr>
</tbody>
</table>

<h3>추가적인 윤리 원칙</h3>
<div class="info-box">
<strong>확장된 윤리 원칙</strong><br/>
<ul>
<li><strong>안전성(Safety)</strong>: AI 시스템이 의도하지 않은 해로운 행동을 하지 않도록 보장</li>
<li><strong>신뢰성(Reliability)</strong>: AI 시스템이 일관되고 예측 가능하게 동작</li>
<li><strong>포용성(Inclusiveness)</strong>: 장애인, 소수자 등 모든 사람이 AI 혜택에 접근 가능</li>
<li><strong>지속가능성(Sustainability)</strong>: AI의 에너지 소비와 환경 영향을 최소화</li>
<li><strong>인간 중심성(Human-Centeredness)</strong>: AI가 인간의 자율성과 존엄성을 존중</li>
</ul>
</div>

<div class="info-box warning">
<strong>원칙 간 충돌</strong><br/>
AI 윤리 원칙들은 때때로 서로 충돌할 수 있습니다. 예를 들어, 투명성을 높이면 프라이버시가 침해될 수 있고, 공정성을 추구하면 정확도가 낮아질 수 있습니다. 이러한 상충 관계(trade-off)를 어떻게 조율할 것인지가 AI 윤리의 핵심 과제입니다.
</div>
    `},{id:703,chapter_id:7,title:"7.3 책임 있는 AI 개발",sort_order:3,content:`
<h2>책임 있는 AI 개발 (Responsible AI)</h2>
<p>책임 있는 AI 개발이란 AI 시스템의 전체 생애 주기(설계, 개발, 배포, 운영, 폐기)에 걸쳐 윤리적 원칙을 체계적으로 적용하는 실천 방법론입니다. 단순히 윤리 원칙을 선언하는 것을 넘어, 구체적인 프로세스와 도구를 통해 실현합니다.</p>

<h3>책임 있는 AI 개발 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 윤리 영향 평가</h4>
<p>AI 프로젝트 시작 전 잠재적 윤리 리스크 사전 평가</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 공정한 데이터 수집</h4>
<p>다양성을 반영한 데이터 확보, 편향 점검</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 투명한 모델 개발</h4>
<p>설명 가능성 고려, 모델 카드 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 편향 테스트</h4>
<p>다양한 집단에 대한 공정성 테스트 수행</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5. 지속적 모니터링</h4>
<p>배포 후에도 성능·공정성 지속 관찰 및 개선</p>
</div>
</div>

<h3>주요 기업의 Responsible AI 사례</h3>
<table>
<thead>
<tr><th>기업/기관</th><th>접근 방식</th><th>주요 특징</th></tr>
</thead>
<tbody>
<tr><td>Google</td><td>AI Principles (2018)</td><td>7가지 원칙 수립, AI 무기 개발 금지 선언, 레드팀 운영</td></tr>
<tr><td>Microsoft</td><td>Responsible AI Standard (2022)</td><td>6가지 원칙 기반 내부 거버넌스, 영향 평가 도구 개발</td></tr>
<tr><td>Anthropic</td><td>Constitutional AI</td><td>AI가 헌법적 원칙을 따르도록 학습하는 방법론 개발</td></tr>
<tr><td>OpenAI</td><td>Safety & Alignment</td><td>인간의 의도에 부합하는 AI 정렬(Alignment) 연구</td></tr>
<tr><td>한국 정부</td><td>국가 AI 윤리 기준 (2020)</td><td>3대 기본 원칙, 10대 핵심 요건 제시</td></tr>
</tbody>
</table>

<h3>개발자의 윤리적 책임</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 책임</h4>
<ul>
<li>학습 데이터의 편향 검토 및 시정</li>
<li>모델의 설명 가능성 확보</li>
<li>적대적 공격에 대한 강건성 보장</li>
<li>정기적인 성능 및 공정성 감사</li>
</ul>
</div>
<div class="compare-item">
<h4>사회적 책임</h4>
<ul>
<li>AI의 사회적 영향을 사전에 고려</li>
<li>다양한 이해관계자의 의견 수렴</li>
<li>AI 사용 사실의 투명한 공개</li>
<li>피해 발생 시 신속한 대응 체계 구축</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>윤리적 AI 개발 체크리스트</strong><br/>
<ul>
<li>학습 데이터에 특정 집단이 과소/과대 대표되지 않았는가?</li>
<li>AI 시스템의 의사결정 과정을 설명할 수 있는가?</li>
<li>잠재적 오남용 시나리오를 검토했는가?</li>
<li>피해 구제 및 이의 제기 절차가 마련되었는가?</li>
<li>AI 사용 사실을 사용자에게 고지하고 있는가?</li>
<li>정기적인 편향 감사 계획이 수립되었는가?</li>
</ul>
</div>
    `},{id:704,chapter_id:7,title:"7.4 AI와 개인정보 보호",sort_order:4,content:`
<h2>AI와 개인정보 보호</h2>
<p>AI 시스템은 대량의 데이터를 필요로 하며, 이 과정에서 개인정보 보호가 중요한 이슈로 부상합니다. 얼굴 인식, 행동 추적, 감정 분석 등 AI의 능력이 고도화될수록 프라이버시 침해의 위험도 커지고 있습니다.</p>

<h3>AI와 관련된 개인정보 위험</h3>
<table>
<thead>
<tr><th>위험 유형</th><th>설명</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>무단 데이터 수집</td><td>동의 없이 개인 데이터를 수집하여 AI 학습에 활용</td><td>Clearview AI가 SNS에서 30억 장의 얼굴 사진을 무단 수집</td></tr>
<tr><td>과도한 감시</td><td>AI 기반 CCTV, 얼굴 인식으로 일상적 감시</td><td>일부 국가의 도시 전역 AI 감시 시스템 구축</td></tr>
<tr><td>프로파일링</td><td>개인의 행동 패턴을 분석하여 성향·취향을 예측</td><td>SNS 데이터로 정치 성향 예측(Cambridge Analytica)</td></tr>
<tr><td>데이터 유출</td><td>AI 모델에서 학습 데이터가 복원되는 위험</td><td>언어 모델에서 학습 데이터에 포함된 개인정보 유출</td></tr>
<tr><td>추론 공격</td><td>공개 데이터로부터 비공개 정보를 추론</td><td>구매 패턴으로 건강 상태, 임신 여부 등을 추론</td></tr>
</tbody>
</table>

<h3>주요 개인정보 보호 법규</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>EU GDPR</h4>
<p>유럽연합의 일반 데이터 보호 규정(2018). 세계에서 가장 엄격한 개인정보 보호법입니다.</p>
<ul>
<li><strong>동의 원칙</strong>: 데이터 수집 전 명시적 동의 필요</li>
<li><strong>잊힐 권리</strong>: 개인 데이터 삭제 요청 권리</li>
<li><strong>설명 요구권</strong>: AI 자동 결정에 대한 설명 요구 가능</li>
<li><strong>위반 시 벌금</strong>: 전 세계 매출의 4%까지</li>
</ul>
</div>
<div class="compare-item">
<h4>한국 개인정보보호법</h4>
<p>2020년 데이터 3법 개정으로 AI 시대에 맞게 강화되었습니다.</p>
<ul>
<li><strong>가명 처리</strong>: 통계·연구 목적으로 가명 데이터 활용 허용</li>
<li><strong>자동화된 결정 거부권</strong>: AI 자동 결정에 대한 거부 가능 (2023 개정)</li>
<li><strong>개인정보 영향 평가</strong>: 대규모 개인정보 처리 시 사전 평가 의무</li>
<li><strong>개인정보보호위원회</strong>: 독립 감독 기구 운영</li>
</ul>
</div>
</div>

<h3>프라이버시 보호 기술</h3>
<div class="info-box">
<strong>개인정보를 보호하면서 AI를 활용하는 기술</strong><br/>
<ul>
<li><strong>연합학습(Federated Learning)</strong>: 데이터를 중앙 서버로 보내지 않고, 각 기기에서 로컬로 학습한 후 모델 업데이트만 공유합니다.</li>
<li><strong>차등 프라이버시(Differential Privacy)</strong>: 데이터에 의도적으로 노이즈를 추가하여, 개인을 특정할 수 없으면서도 전체 통계는 유효하게 유지합니다.</li>
<li><strong>동형 암호화(Homomorphic Encryption)</strong>: 데이터를 암호화한 상태로 AI 연산을 수행하여, 원본 데이터를 노출하지 않습니다.</li>
<li><strong>합성 데이터(Synthetic Data)</strong>: 실제 데이터의 통계적 특성을 유지하면서 인공적으로 생성된 데이터로 AI를 학습시킵니다.</li>
</ul>
</div>

<div class="info-box warning">
<strong>개인 사용자의 프라이버시 보호 수칙</strong><br/>
<ul>
<li>AI 서비스 가입 시 개인정보 처리 방침을 반드시 확인하세요.</li>
<li>AI에 입력하는 정보가 학습에 사용될 수 있음을 인지하세요.</li>
<li>민감한 개인정보(건강, 금융, 위치 등)는 AI에 입력하지 마세요.</li>
<li>AI 서비스의 데이터 학습 비허용 옵션을 활성화하세요.</li>
</ul>
</div>
    `},{id:705,chapter_id:7,title:"7.5 AI 저작권과 지적재산권",sort_order:5,content:`
<h2>AI 저작권과 지적재산권</h2>
<p>생성형 AI의 등장으로 저작권과 지적재산권 분야에서 전례 없는 법적 쟁점이 발생하고 있습니다. AI가 만든 콘텐츠의 저작권은 누구에게 있는가? AI 학습에 사용된 원작의 저작권은 보호되는가? 이러한 질문들이 현재 전 세계적으로 논의되고 있습니다.</p>

<h3>AI 저작권의 핵심 쟁점</h3>
<table>
<thead>
<tr><th>쟁점</th><th>찬성 측 주장</th><th>반대 측 주장</th><th>현재 상황</th></tr>
</thead>
<tbody>
<tr><td>AI 생성물의 저작권</td><td>AI 사용자/개발자에게 저작권 부여</td><td>인간의 창작 행위가 아니므로 저작권 불인정</td><td>대부분의 국가에서 AI 생성물 단독 저작권 불인정</td></tr>
<tr><td>AI 학습용 데이터</td><td>공정 이용(Fair Use)에 해당</td><td>원작자 동의 없는 사용은 저작권 침해</td><td>소송 진행 중(NYT vs OpenAI 등)</td></tr>
<tr><td>AI 결과물의 유사성</td><td>새로운 창작물로 인정</td><td>원작의 스타일/패턴 복제에 해당</td><td>사례별 판단 필요</td></tr>
</tbody>
</table>

<h3>주요 저작권 소송 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>Getty Images vs Stability AI</h4>
<p>Getty Images가 이미지 생성 AI인 Stable Diffusion이 자사의 수백만 장 이미지를 허락 없이 학습에 사용했다고 소송을 제기했습니다. 생성된 이미지에 Getty 워터마크가 나타나는 사례도 보고되었습니다.</p>
</div>
<div class="compare-item">
<h4>New York Times vs OpenAI</h4>
<p>뉴욕타임스가 OpenAI를 상대로 자사 기사를 AI 학습에 무단 사용했다며 저작권 소송을 제기했습니다. ChatGPT가 NYT 기사를 거의 그대로 출력하는 사례가 증거로 제시되었습니다.</p>
</div>
</div>

<h3>각국의 AI 저작권 정책</h3>
<table>
<thead>
<tr><th>국가/지역</th><th>AI 생성물 저작권</th><th>AI 학습 데이터 정책</th></tr>
</thead>
<tbody>
<tr><td>미국</td><td>인간의 창작적 기여가 있는 경우만 인정</td><td>사례별 공정 이용 판단 (소송 진행 중)</td></tr>
<tr><td>EU</td><td>AI 단독 생성물은 저작권 불인정</td><td>AI Act으로 학습 데이터 출처 공개 의무화</td></tr>
<tr><td>한국</td><td>아직 명확한 법적 기준 없음</td><td>공정 이용 범위 논의 중</td></tr>
<tr><td>일본</td><td>AI 생성물의 저작권 불인정 경향</td><td>AI 학습 목적 데이터 이용 비교적 관대</td></tr>
<tr><td>영국</td><td>컴퓨터 생성 저작물 인정 (1988년 법)</td><td>상업적 AI 학습에 대한 규제 검토 중</td></tr>
</tbody>
</table>

<div class="info-box">
<strong>AI 콘텐츠 사용 시 실천 가이드</strong><br/>
<ul>
<li>AI로 생성한 콘텐츠를 상업적으로 사용할 때는 해당 AI 서비스의 이용 약관을 반드시 확인하세요.</li>
<li>AI 생성 콘텐츠를 자신의 독창적 창작물로 허위 표시하지 마세요.</li>
<li>학술 논문이나 보고서에 AI를 활용한 경우 이를 명시하세요.</li>
<li>AI가 생성한 이미지·텍스트가 기존 저작물과 지나치게 유사하지 않은지 확인하세요.</li>
<li>가능하면 AI 서비스의 상업적 이용이 허용된 플랜을 사용하세요.</li>
</ul>
</div>

<div class="info-box warning">
<strong>학술적 맥락에서의 AI 활용</strong><br/>
많은 대학과 학술지가 AI 활용 정책을 수립하고 있습니다. AI를 활용하여 논문이나 과제를 작성할 때는 반드시 소속 기관의 정책을 확인하고, AI 활용 사실을 투명하게 밝혀야 합니다. AI 생성 텍스트를 자신의 글로 제출하는 것은 학술 부정행위에 해당할 수 있습니다.
</div>
    `},{id:706,chapter_id:7,title:"7.6 AI 딥페이크와 허위정보",sort_order:6,content:`
<h2>딥페이크와 AI 기반 허위정보</h2>
<p>딥페이크(Deepfake)는 딥러닝(Deep Learning)과 가짜(Fake)의 합성어로, AI를 이용하여 실제처럼 보이는 가짜 영상, 이미지, 음성을 만드는 기술입니다. 이 기술은 엔터테인먼트와 교육에 유용하게 사용될 수 있지만, 동시에 심각한 사회적 위험을 초래할 수 있습니다.</p>

<h3>딥페이크의 유형</h3>
<table>
<thead>
<tr><th>유형</th><th>설명</th><th>기술</th><th>위험도</th></tr>
</thead>
<tbody>
<tr><td>얼굴 교체</td><td>영상 속 인물의 얼굴을 다른 사람의 얼굴로 교체</td><td>GAN, Autoencoder</td><td>매우 높음</td></tr>
<tr><td>음성 합성</td><td>특정 인물의 목소리를 복제하여 가짜 발언 생성</td><td>TTS, Voice Cloning</td><td>높음</td></tr>
<tr><td>입술 동기화</td><td>음성에 맞게 영상 속 인물의 입 움직임을 조작</td><td>Lip-sync AI</td><td>높음</td></tr>
<tr><td>전신 합성</td><td>존재하지 않는 인물의 전신 영상을 생성</td><td>Full-body GAN</td><td>중간</td></tr>
<tr><td>텍스트 생성</td><td>실제처럼 보이는 가짜 뉴스 기사, 리뷰 등 생성</td><td>LLM</td><td>높음</td></tr>
</tbody>
</table>

<h3>딥페이크의 위험성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인에 대한 피해</h4>
<ul>
<li><strong>명예 훼손</strong>: 유명인이나 일반인의 허위 영상 유포</li>
<li><strong>사기</strong>: 음성 복제를 이용한 보이스 피싱</li>
<li><strong>성적 착취</strong>: 동의 없는 합성 성적 콘텐츠 제작</li>
<li><strong>신원 도용</strong>: 생체 인증 우회 시도</li>
</ul>
</div>
<div class="compare-item">
<h4>사회에 대한 피해</h4>
<ul>
<li><strong>선거 개입</strong>: 정치인의 가짜 발언 영상 유포</li>
<li><strong>허위 정보 확산</strong>: 가짜 뉴스의 신뢰도 향상</li>
<li><strong>사회적 신뢰 붕괴</strong>: 진짜와 가짜를 구별할 수 없는 상황</li>
<li><strong>역사 왜곡</strong>: 역사적 사건의 허위 영상 제작</li>
</ul>
</div>
</div>

<h3>딥페이크 탐지 방법</h3>
<div class="info-box">
<strong>주요 탐지 기술 및 방법</strong><br/>
<ul>
<li><strong>눈 깜빡임 분석</strong>: 초기 딥페이크는 자연스러운 눈 깜빡임을 구현하지 못하는 경우가 많았습니다.</li>
<li><strong>얼굴 경계 분석</strong>: 얼굴과 배경의 경계 부분에서 부자연스러운 블러나 색상 차이를 탐지합니다.</li>
<li><strong>AI 기반 탐지</strong>: 딥페이크를 탐지하도록 학습된 AI 모델을 사용합니다 (Microsoft Video Authenticator 등).</li>
<li><strong>메타데이터 분석</strong>: 영상의 메타데이터(촬영 기기, 날짜, 편집 이력)를 확인합니다.</li>
<li><strong>출처 확인</strong>: 콘텐츠의 최초 출처를 추적하여 진위를 검증합니다.</li>
</ul>
</div>

<h3>허위정보에 대응하는 자세</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 멈추기 (Stop)</h4>
<p>자극적인 콘텐츠를 보면 즉시 반응하지 말고 멈추세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 출처 확인 (Source)</h4>
<p>콘텐츠의 원래 출처가 신뢰할 수 있는 매체인지 확인하세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 교차 검증 (Verify)</h4>
<p>다른 신뢰할 수 있는 출처에서도 같은 내용을 보도하는지 확인하세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 전파 자제 (Don't Share)</h4>
<p>확인되지 않은 정보는 공유하지 마세요</p>
</div>
</div>

<div class="info-box warning">
<strong>법적 규제</strong><br/>
한국에서는 딥페이크를 이용한 성적 허위 영상 제작·유포를 처벌하는 법률이 시행되고 있습니다(성폭력처벌법 제14조의2). 딥페이크를 악의적으로 제작하거나 유포하는 행위는 형사 처벌의 대상이 됩니다.
</div>
    `},{id:707,chapter_id:7,title:"7.7 AI 윤리 가이드라인",sort_order:7,content:`
<h2>국제 AI 윤리 가이드라인</h2>
<p>AI 기술의 급속한 발전에 따라, 국제기구와 각국 정부는 AI 윤리 가이드라인과 규제 프레임워크를 적극적으로 수립하고 있습니다. 주요 가이드라인의 내용과 특징을 살펴보겠습니다.</p>

<h3>주요 국제 AI 윤리 가이드라인</h3>
<table>
<thead>
<tr><th>기관/문서</th><th>연도</th><th>핵심 내용</th><th>구속력</th></tr>
</thead>
<tbody>
<tr><td>UNESCO AI 윤리 권고</td><td>2021</td><td>193개국 채택. 인권 중심 AI 개발 원칙. 비례성, 안전성, 공정성, 지속가능성</td><td>연성 규범 (비구속)</td></tr>
<tr><td>OECD AI 원칙</td><td>2019</td><td>투명성, 책임성, 보안, 인간 중심 가치. 42개국 채택</td><td>연성 규범 (비구속)</td></tr>
<tr><td>EU AI Act</td><td>2024</td><td>위험 등급별 AI 규제. 고위험 AI에 대한 엄격한 요건. 범용 AI 투명성 의무</td><td>법적 구속력</td></tr>
<tr><td>한국 AI 윤리 기준</td><td>2020</td><td>3대 기본 원칙(인간성, 사회공공성, 기술 합목적성), 10대 핵심 요건</td><td>자율 규범</td></tr>
<tr><td>미국 AI 권리장전 청사진</td><td>2022</td><td>안전하고 효과적인 시스템, 알고리즘 차별 방지, 데이터 프라이버시 등 5대 원칙</td><td>비구속 지침</td></tr>
</tbody>
</table>

<h3>EU AI Act의 위험 분류 체계</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>허용 불가 위험 (Unacceptable Risk)</h4>
<p>전면 금지됩니다.</p>
<ul>
<li>사회적 점수 시스템(Social Scoring)</li>
<li>무차별적 실시간 얼굴 인식 감시</li>
<li>인간 행동을 조작하는 AI</li>
<li>취약 계층 착취 AI</li>
</ul>
</div>
<div class="compare-item">
<h4>고위험 (High Risk)</h4>
<p>엄격한 규제 요건을 준수해야 합니다.</p>
<ul>
<li>채용, 교육, 신용 평가 AI</li>
<li>법 집행, 사법 분야 AI</li>
<li>의료 기기, 자율주행 관련 AI</li>
<li>필수 서비스 접근 결정 AI</li>
</ul>
</div>
</div>

<h3>한국의 AI 윤리 체계</h3>
<div class="info-box">
<strong>국가 AI 윤리 기준 — 3대 원칙, 10대 핵심 요건</strong><br/>
<p><strong>3대 기본 원칙:</strong></p>
<ol>
<li><strong>인간성(Human Dignity)</strong>: AI는 인간의 존엄성과 가치를 존중해야 합니다.</li>
<li><strong>사회의 공공선(Public Good)</strong>: AI는 사회 전체의 이익에 부합해야 합니다.</li>
<li><strong>기술의 합목적성(Purposefulness)</strong>: AI 기술은 인류에게 유익한 방향으로 개발되어야 합니다.</li>
</ol>
<p><strong>10대 핵심 요건:</strong> 인권 보장, 프라이버시 보호, 다양성 존중, 침해 금지, 공공성, 연대성, 데이터 관리, 책임성, 안전성, 투명성</p>
</div>

<div class="info-box warning">
<strong>가이드라인의 한계</strong><br/>
현재 대부분의 AI 윤리 가이드라인은 자율 규범이나 연성 규범의 형태로, 법적 구속력이 없습니다. EU AI Act가 최초의 포괄적 AI 법률로서 선도적 역할을 하고 있으며, 다른 국가들도 유사한 법규를 검토하고 있습니다. 가이드라인의 효과는 기업과 개인의 자발적 준수 의지에 크게 좌우됩니다.
</div>
    `},{id:708,chapter_id:7,title:"7.8 윤리적 AI 사용자 되기",sort_order:8,content:`
<h2>윤리적 AI 사용자 되기</h2>
<p>AI 윤리는 개발자나 기업만의 책임이 아닙니다. AI를 사용하는 모든 사람이 윤리적 책임을 가지며, 일상적인 AI 활용에서 윤리적 판단을 실천해야 합니다. 이 절에서는 개인 사용자로서의 윤리적 AI 활용 방법을 알아봅니다.</p>

<h3>윤리적 AI 사용 원칙</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>인식 (Awareness)</h4>
<p>AI의 능력과 한계를 이해하고, 결과물을 맹신하지 않기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>책임 (Responsibility)</h4>
<p>AI를 사용한 결과에 대해 스스로 책임지기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>존중 (Respect)</h4>
<p>타인의 권리, 프라이버시, 저작권을 존중하기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>투명성 (Transparency)</h4>
<p>AI 활용 사실을 적절히 밝히기</p>
</div>
</div>

<h3>상황별 윤리적 판단 가이드</h3>
<table>
<thead>
<tr><th>상황</th><th>윤리적 행동</th><th>비윤리적 행동</th></tr>
</thead>
<tbody>
<tr><td>학교 과제 작성</td><td>AI를 참고·보조 도구로 사용, 활용 사실을 밝힘</td><td>AI 생성물을 자신의 글로 그대로 제출</td></tr>
<tr><td>업무 보고서 작성</td><td>AI 초안을 검토·수정, 팩트 확인 후 활용</td><td>AI 결과를 검증 없이 의사결정에 사용</td></tr>
<tr><td>SNS 콘텐츠</td><td>AI 생성 이미지임을 표시, 사실 확인 후 공유</td><td>AI 생성 콘텐츠를 실제 사진/영상으로 위장</td></tr>
<tr><td>타인 관련 콘텐츠</td><td>본인의 동의를 받고, 존중하는 방식으로 활용</td><td>타인의 사진/음성으로 동의 없이 딥페이크 제작</td></tr>
<tr><td>정보 검색</td><td>AI 답변을 교차 검증, 출처 확인</td><td>AI 답변을 무비판적으로 사실로 받아들여 전파</td></tr>
</tbody>
</table>

<h3>AI 사용자 윤리 체크리스트</h3>
<div class="info-box">
<strong>AI를 사용하기 전에 확인하세요</strong><br/>
<ul>
<li>이 AI 활용이 누군가에게 해를 끼칠 수 있는가?</li>
<li>개인정보나 기밀 정보를 입력하고 있지 않은가?</li>
<li>AI 결과물을 자신의 독창적 창작물로 허위 표시하고 있지 않은가?</li>
<li>AI의 결과를 비판적으로 검토했는가?</li>
<li>AI 활용 사실을 밝혀야 하는 상황은 아닌가?</li>
<li>저작권이나 초상권을 침해하고 있지 않은가?</li>
<li>AI의 출력이 편향되거나 차별적인 내용을 포함하고 있지 않은가?</li>
</ul>
</div>

<div class="compare-grid">
<div class="compare-item">
<h4>비판적 AI 리터러시</h4>
<p>AI의 결과를 맹신하지 않고 비판적으로 평가하는 능력입니다. AI가 생성한 정보의 정확성, 편향성, 맥락 적합성을 항상 검토해야 합니다. "AI가 말했으니까 맞겠지"라는 태도는 가장 위험한 태도입니다.</p>
</div>
<div class="compare-item">
<h4>디지털 시민 의식</h4>
<p>온라인 공간에서 책임감 있게 행동하는 시민 의식입니다. AI 기술의 발전으로 허위정보 제작이 쉬워진 시대에, 정보를 공유하기 전에 확인하고, 타인의 권리를 존중하며, 사회적 책임을 다하는 태도가 더욱 중요해졌습니다.</p>
</div>
</div>
    `},{id:709,chapter_id:7,title:"7.9 학습 정리",sort_order:9,content:`
<h2>Chapter 7 학습 정리</h2>
<p>이번 장에서는 AI 윤리와 책임에 대해 포괄적으로 학습했습니다. 핵심 내용을 정리합니다.</p>

<h3>핵심 개념 요약</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI 윤리 정의</td><td>AI 기술의 개발·사용 과정에서 발생하는 도덕적·사회적 문제를 다루는 분야</td></tr>
<tr><td>4대 윤리 원칙</td><td>공정성(Fairness), 투명성(Transparency), 책임성(Accountability), 프라이버시(Privacy)</td></tr>
<tr><td>책임 있는 AI</td><td>AI 전체 생애 주기에 걸쳐 윤리 원칙을 적용하는 방법론</td></tr>
<tr><td>개인정보 보호</td><td>GDPR, 개인정보보호법 준수. 연합학습, 차등 프라이버시 등 보호 기술 활용</td></tr>
<tr><td>저작권</td><td>AI 생성물 저작권 논쟁. AI 학습 데이터의 공정 이용 논란. 투명한 활용 사실 공개</td></tr>
<tr><td>딥페이크</td><td>AI 기반 가짜 영상·음성 생성 기술. 출처 확인, 교차 검증으로 대응</td></tr>
<tr><td>가이드라인</td><td>UNESCO, OECD, EU AI Act 등 국제 기준. 한국 AI 윤리 기준 3대 원칙·10대 요건</td></tr>
<tr><td>윤리적 사용자</td><td>인식, 책임, 존중, 투명성의 4가지 원칙 실천</td></tr>
</tbody>
</table>

<h3>AI 윤리의 핵심 프레임워크</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>개인 차원</h4>
<p>비판적 사고, 책임 있는 사용, 프라이버시 보호</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>조직 차원</h4>
<p>윤리 가이드라인, 편향 감사, 투명성 확보</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>사회 차원</h4>
<p>법률·규제, 국제 협력, 시민 교육</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 메시지</strong><br/>
<ul>
<li>AI 윤리는 모든 AI 사용자의 책임입니다.</li>
<li>기술의 발전 속도가 규제보다 빠르므로, 자율적 윤리 의식이 더욱 중요합니다.</li>
<li>AI의 결과물을 항상 비판적으로 검토하세요.</li>
<li>타인의 권리를 존중하고, AI를 사용한 사실을 투명하게 밝히세요.</li>
<li>AI 윤리는 고정된 것이 아니라, 기술과 사회의 변화에 맞게 지속적으로 발전합니다.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 AI 윤리의 핵심 이슈 중 하나인 <strong>AI 편향성과 공정성</strong>에 대해 심도 있게 다룹니다. AI 편향의 유형, 실제 사례, 탐지 방법, 완화 전략 등을 학습합니다.</p>
    `},{id:710,chapter_id:7,title:"7.10 학습 확인 문제",sort_order:10,content:`
<h2>학습 확인 문제</h2>
<p>Chapter 7에서 학습한 AI 윤리와 책임 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> AI 윤리의 4대 핵심 원칙으로 옳지 않은 것은?<br/>
① 공정성 (Fairness)<br/>
② 수익성 (Profitability)<br/>
③ 투명성 (Transparency)<br/>
④ 책임성 (Accountability)<br/>
<em>정답: ② — 수익성은 AI 윤리 원칙에 포함되지 않습니다. 4대 원칙은 공정성, 투명성, 책임성, 프라이버시입니다.</em>
</div>

<div class="info-box">
<strong>문제 2.</strong> EU AI Act의 "허용 불가 위험(Unacceptable Risk)" 카테고리에 해당하여 전면 금지되는 AI 활용 사례를 2가지 이상 설명하시오.<br/>
<em>모범 답안: (1) 사회적 점수 시스템(Social Scoring) — 개인의 사회적 행동을 기반으로 점수를 매기고 이에 따라 권리를 제한하는 시스템은 금지됩니다. (2) 무차별적 실시간 얼굴 인식 감시 — 공공장소에서 불특정 다수를 대상으로 하는 실시간 원격 생체 인식 시스템은 금지됩니다. (3) 인간 행동 조작 AI — 사람의 인지적 약점을 악용하여 행동을 조작하는 AI 시스템은 금지됩니다.</em>
</div>

<div class="info-box">
<strong>문제 3.</strong> AI 생성 콘텐츠의 저작권에 관한 현재 국제적 동향을 설명하고, 학술 과제에서 AI를 활용할 때의 윤리적 가이드라인을 제시하시오.<br/>
<em>모범 답안: 현재 대부분의 국가에서 AI가 단독으로 생성한 콘텐츠에 대한 저작권을 인정하지 않습니다. 미국은 인간의 창작적 기여가 있는 경우에만 제한적으로 인정하고, EU는 학습 데이터 출처 공개를 의무화하고 있습니다. 학술 과제에서의 가이드라인: (1) AI를 참고·보조 도구로만 활용하고, AI 생성 텍스트를 그대로 제출하지 않는다, (2) AI 활용 사실을 투명하게 밝힌다, (3) AI 결과물의 사실 관계를 직접 검증한다, (4) 소속 기관의 AI 활용 정책을 사전에 확인한다.</em>
</div>

<div class="info-box">
<strong>문제 4.</strong> 딥페이크에 대응하기 위한 "멈추기-출처 확인-교차 검증-전파 자제" 4단계 대응법을 각 단계별로 구체적으로 설명하시오.<br/>
<em>모범 답안: (1) 멈추기(Stop) — 자극적이거나 충격적인 영상·이미지를 보았을 때 감정적으로 즉각 반응하지 않고 잠시 멈춥니다. (2) 출처 확인(Source) — 해당 콘텐츠가 최초로 게시된 곳이 신뢰할 수 있는 매체(공식 뉴스, 공식 계정 등)인지 확인합니다. (3) 교차 검증(Verify) — 동일한 사건이나 내용을 다른 신뢰할 수 있는 매체에서도 보도하고 있는지 확인합니다. 한 곳에서만 나오는 정보는 주의가 필요합니다. (4) 전파 자제(Don't Share) — 사실 여부가 확인되지 않은 콘텐츠는 공유하거나 전달하지 않습니다.</em>
</div>

<div class="info-box">
<strong>문제 5.</strong> "AI 윤리는 개발자만의 책임이다"라는 주장에 대해 반론을 제시하고, 일반 AI 사용자가 실천할 수 있는 윤리적 행동 5가지를 제시하시오.<br/>
<em>모범 답안: 반론 — AI 윤리는 개발자뿐만 아니라 AI를 사용하는 모든 사람의 공동 책임입니다. AI 시스템은 개발자가 만들지만, 실제로 사회에 영향을 미치는 것은 사용자의 활용 방식에 따라 결정됩니다. 사용자의 비윤리적 사용(딥페이크 제작, 허위정보 유포 등)은 개발자의 윤리적 개발만으로는 방지할 수 없습니다. 실천 방안: (1) AI 결과물을 항상 비판적으로 검토하고 사실 확인한다, (2) 개인정보와 기밀 정보를 AI에 입력하지 않는다, (3) AI 활용 사실을 투명하게 밝힌다, (4) AI 생성 콘텐츠로 타인에게 해를 끼치지 않는다, (5) 확인되지 않은 AI 생성 정보를 무분별하게 공유하지 않는다.</em>
</div>
    `}],rI=[{id:801,chapter_id:8,title:"AI 편향성이란?",sort_order:1,content:`
<h3>AI 편향의 개념과 중요성</h3>
<p>
  <strong>AI 편향(Bias)</strong>이란 AI 시스템이 특정 집단이나 개인에 대해 체계적으로 불공정한
  결과를 산출하는 현상을 말합니다. 이러한 편향은 의도적이지 않더라도, 데이터, 알고리즘, 설계 과정에서
  자연스럽게 발생할 수 있으며, 사회적 차별을 자동화하고 강화하는 결과를 초래할 수 있습니다.
</p>

<div class="info-box">
  <strong>AI 편향(AI Bias):</strong> AI 시스템의 학습 데이터, 알고리즘 설계, 또는 배포 과정에서
  발생하는 체계적 오류로, 특정 집단에게 유리하거나 불리한 결과를 만들어내는 현상입니다.
</div>

<h4>편향이 문제가 되는 이유</h4>
<table>
  <thead>
    <tr><th>측면</th><th>영향</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>개인 차원</strong></td><td>부당한 대우와 기회 박탈</td><td>적격 지원자가 AI 채용 필터에서 탈락</td></tr>
    <tr><td><strong>사회 차원</strong></td><td>기존 불평등 고착화 및 심화</td><td>특정 지역 대출 거부율 증가</td></tr>
    <tr><td><strong>법적 차원</strong></td><td>차별 금지법 위반 위험</td><td>고용 차별 소송</td></tr>
    <tr><td><strong>경제 차원</strong></td><td>시장 왜곡과 비효율</td><td>우수 인재 배제로 인한 기업 손실</td></tr>
    <tr><td><strong>신뢰 차원</strong></td><td>AI 기술에 대한 불신 확산</td><td>편향 논란으로 서비스 중단</td></tr>
  </tbody>
</table>

<h4>편향 vs 오류</h4>
<div class="compare-grid">
  <div>
    <h5>편향 (Bias)</h5>
    <ul>
      <li>체계적이고 방향성 있는 오류</li>
      <li>특정 집단에 일관되게 불리한 결과</li>
      <li>데이터/설계의 구조적 문제</li>
      <li>수정하지 않으면 지속적으로 반복</li>
    </ul>
  </div>
  <div>
    <h5>오류 (Error)</h5>
    <ul>
      <li>무작위적이고 방향성 없는 실수</li>
      <li>모든 집단에 비슷하게 발생</li>
      <li>모델 복잡도/데이터 양 문제</li>
      <li>더 많은 데이터/훈련으로 감소 가능</li>
    </ul>
  </div>
</div>

<div class="info-box warning">
  <strong>주의:</strong> AI 편향은 기술적 문제일 뿐 아니라 사회적, 윤리적 문제입니다.
  편향된 AI 시스템이 대규모로 배포되면, 그 영향은 수백만 명에게 동시에 미칩니다.
</div>
    `},{id:802,chapter_id:8,title:"편향의 유형",sort_order:2,content:`
<h3>AI 편향의 주요 유형</h3>
<p>AI 편향은 발생 원인과 단계에 따라 다양한 유형으로 분류됩니다.</p>

<h4>데이터 관련 편향</h4>
<table>
  <thead>
    <tr><th>편향 유형</th><th>설명</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>선택 편향</strong></td><td>학습 데이터가 전체 모집단을 대표하지 못할 때 발생</td><td>온라인 설문 데이터에서 인터넷 접근 어려운 계층 누락</td></tr>
    <tr><td><strong>역사적 편향</strong></td><td>과거 사회의 편견이 데이터에 반영</td><td>과거 채용 데이터에서 남성 선호 패턴 학습</td></tr>
    <tr><td><strong>측정 편향</strong></td><td>데이터 수집 방법의 체계적 오류</td><td>피부색에 따라 정확도가 다른 의료 센서</td></tr>
    <tr><td><strong>라벨링 편향</strong></td><td>데이터 라벨링 과정의 주관적 판단</td><td>공격적 발언 분류 기준의 문화적 차이</td></tr>
    <tr><td><strong>표본 편향</strong></td><td>특정 그룹의 과대/과소 대표</td><td>서양인 얼굴 위주로 학습한 얼굴 인식 AI</td></tr>
  </tbody>
</table>

<h4>알고리즘 관련 편향</h4>
<table>
  <thead>
    <tr><th>편향 유형</th><th>설명</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>집계 편향</strong></td><td>다양한 하위 집단을 하나의 모델로 일반화</td><td>당뇨 예측 모델이 인종별 차이를 무시</td></tr>
    <tr><td><strong>평가 편향</strong></td><td>평가 데이터셋의 편향으로 성능 측정 왜곡</td><td>벤치마크 데이터가 특정 언어/문화에 편중</td></tr>
    <tr><td><strong>알고리즘 편향</strong></td><td>최적화 목표 설정의 편향</td><td>클릭률 최적화가 자극적 콘텐츠 우선 노출</td></tr>
  </tbody>
</table>

<h4>배포 및 사용 편향</h4>
<div class="flow-diagram">
  <div class="flow-step">자동화 편향<br/><small>AI 판단을 무비판적 수용</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">확증 편향<br/><small>기존 믿음 강화하는 정보만 소비</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">피드백 루프<br/><small>편향된 결과가 새 데이터가 됨</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">차별 고착화<br/><small>사회적 불평등의 자동화</small></div>
</div>

<div class="info-box">
  <strong>핵심:</strong> 편향은 AI 개발의 어느 단계에서든 발생할 수 있습니다.
  데이터 수집부터 배포까지 모든 과정에서 편향의 가능성을 점검해야 합니다.
</div>
    `},{id:803,chapter_id:8,title:"편향의 실제 사례",sort_order:3,content:`
<h3>AI 편향의 대표적 사례 연구</h3>

<h4>1. 아마존 채용 AI (2014-2017)</h4>
<div class="info-box">
  <strong>사건:</strong> 아마존은 이력서 심사 자동화를 위해 AI를 개발했으나, 10년간의 역사적
  남성 편중 데이터로 학습하여 여성 지원자를 체계적으로 불이익 처리했습니다.
  여성 관련 단어가 포함된 이력서의 점수를 낮추는 패턴이 발견되어 프로젝트가 중단되었습니다.
</div>

<h4>2. COMPAS 재범 예측 (2016)</h4>
<table>
  <thead>
    <tr><th>분석 결과</th><th>흑인 피고인</th><th>백인 피고인</th></tr>
  </thead>
  <tbody>
    <tr><td>위양성률 (재범하지 않았는데 고위험 분류)</td><td>44.9%</td><td>23.5%</td></tr>
    <tr><td>위음성률 (재범했는데 저위험 분류)</td><td>28.0%</td><td>47.7%</td></tr>
  </tbody>
</table>
<p>인종을 직접 사용하지 않았지만, 거주 지역 등 <strong>대리 변수</strong>를 통해 편향이 발생했습니다.</p>

<h4>3. 구글 이미지 인식 (2015)</h4>
<p>구글 포토가 흑인 사용자의 사진을 부적절하게 분류한 사건으로, 다양한 피부색의 학습 데이터 부족이 원인이었습니다.</p>

<h4>4. 헬스케어 알고리즘 (2019)</h4>
<div class="info-box warning">
  <strong>사례:</strong> 의료비 지출을 건강 상태의 대리 변수로 사용하여, 사회경제적 요인으로
  의료 서비스를 덜 이용하는 흑인 환자가 더 건강한 것으로 잘못 판단되었습니다.
  약 수백만 명의 흑인 환자에게 영향을 미쳤습니다.
</div>

<h4>5. 생성형 AI의 편향</h4>
<table>
  <thead>
    <tr><th>영역</th><th>편향 사례</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>이미지 생성</strong></td><td>CEO 프롬프트에 주로 백인 남성 이미지 생성</td></tr>
    <tr><td><strong>텍스트 생성</strong></td><td>특정 문화/종교에 대한 고정관념 반영</td></tr>
    <tr><td><strong>번역</strong></td><td>성별 중립 언어를 성별 고정관념에 따라 번역</td></tr>
    <tr><td><strong>추천 시스템</strong></td><td>필터 버블과 에코 챔버 강화</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>교훈:</strong> 이러한 사례들은 AI 편향이 기술적 실수가 아니라 사회적 불평등의 반영임을 보여줍니다.
</div>
    `},{id:804,chapter_id:8,title:"편향의 원인 분석",sort_order:4,content:`
<h3>AI 편향은 어디에서 오는가?</h3>

<h4>주요 원인 분석</h4>
<table>
  <thead>
    <tr><th>원인 범주</th><th>구체적 원인</th><th>설명</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3"><strong>사회적 원인</strong></td><td>역사적 불평등</td><td>과거 차별의 흔적이 데이터에 기록</td></tr>
    <tr><td>권력 불균형</td><td>데이터 생성/수집 권한이 특정 집단에 집중</td></tr>
    <tr><td>문화적 고정관념</td><td>언어와 이미지에 내재된 편견</td></tr>
    <tr><td rowspan="3"><strong>기술적 원인</strong></td><td>불균형 데이터</td><td>소수 집단의 데이터 부족</td></tr>
    <tr><td>대리 변수</td><td>보호 속성과 상관관계가 높은 변수 사용</td></tr>
    <tr><td>최적화 목표 편향</td><td>정확도만 최적화하면 소수 집단 희생</td></tr>
    <tr><td rowspan="3"><strong>조직적 원인</strong></td><td>개발팀 동질성</td><td>다양성 부족한 팀의 맹점</td></tr>
    <tr><td>일정 압박</td><td>공정성 검증 단계 생략</td></tr>
    <tr><td>인센티브 구조</td><td>성능 지표만 중시, 공정성 지표 무시</td></tr>
  </tbody>
</table>

<h4>대리 변수 (Proxy Variable) 문제</h4>
<div class="info-box warning">
  <strong>대리 변수란?</strong> 보호 속성(인종, 성별 등)을 직접 사용하지 않더라도,
  이와 높은 상관관계를 가진 변수가 간접적으로 차별을 발생시키는 현상입니다.
  <ul>
    <li>우편번호 -- 인종/소득 수준의 대리 변수</li>
    <li>이름 -- 인종/문화적 배경의 대리 변수</li>
    <li>학교명 -- 사회경제적 지위의 대리 변수</li>
  </ul>
  보호 속성을 입력에서 제거하는 것만으로는 편향을 해결할 수 없습니다.
</div>
    `},{id:805,chapter_id:8,title:"공정성의 정의와 지표",sort_order:5,content:`
<h3>AI에서의 공정성이란?</h3>
<p>공정성(Fairness)은 AI 시스템이 모든 개인과 집단에 대해 동등하고 편향 없는 결과를 산출하는 것을 의미합니다.</p>

<h4>주요 공정성 정의</h4>
<table>
  <thead>
    <tr><th>공정성 유형</th><th>정의</th><th>적용 예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>인구 통계적 동등성</strong></td><td>예측 결과의 비율이 모든 집단에서 동일</td><td>광고/마케팅</td></tr>
    <tr><td><strong>균등 기회</strong></td><td>양성 클래스의 참양성률이 모든 집단에서 동일</td><td>채용</td></tr>
    <tr><td><strong>균등 오류율</strong></td><td>참양성률과 위양성률 모두 동일</td><td>의료 진단</td></tr>
    <tr><td><strong>예측 동등성</strong></td><td>양성 예측의 정밀도가 모든 집단에서 동일</td><td>대출 심사</td></tr>
    <tr><td><strong>개인 공정성</strong></td><td>유사한 개인은 유사한 대우를 받아야 함</td><td>개인화 서비스</td></tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>공정성 불가능 정리:</strong> 대부분의 경우 위의 공정성 기준들을 동시에 만족시키는 것은
  수학적으로 불가능합니다(집단 간 기저율이 다를 때). 따라서 상황에 맞는 적절한 공정성 기준을 선택해야 합니다.
</div>

<h4>맥락별 공정성 기준 선택</h4>
<table>
  <thead>
    <tr><th>적용 분야</th><th>권장 기준</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>채용</td><td>균등 기회</td><td>적격 지원자가 동등한 기회를 받아야 함</td></tr>
    <tr><td>대출 심사</td><td>예측 동등성</td><td>승인 시 실제 상환 확률이 동등해야 함</td></tr>
    <tr><td>의료 진단</td><td>균등 오류율</td><td>오진율이 집단 간 동등해야 함</td></tr>
    <tr><td>광고/마케팅</td><td>인구 통계적 동등성</td><td>기회 접근이 평등해야 함</td></tr>
  </tbody>
</table>
    `},{id:806,chapter_id:8,title:"편향 탐지 방법",sort_order:6,content:`
<h3>AI 편향을 찾아내는 방법</h3>

<h4>편향 탐지 프로세스</h4>
<div class="flow-diagram">
  <div class="flow-step">1. 보호 속성 정의<br/><small>성별, 인종, 연령 등</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">2. 데이터 분석<br/><small>분포, 상관관계 검사</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">3. 모델 분석<br/><small>집단별 성능 비교</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">4. 결과 분석<br/><small>공정성 지표 측정</small></div>
</div>

<h4>탐지 기법</h4>
<table>
  <thead>
    <tr><th>단계</th><th>탐지 기법</th><th>목적</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3"><strong>데이터 단계</strong></td><td>분포 분석</td><td>집단별 데이터 수, 특성 분포 비교</td></tr>
    <tr><td>상관관계 분석</td><td>보호 속성과 다른 변수 간 관계 파악</td></tr>
    <tr><td>라벨 불균형 검사</td><td>집단별 긍정/부정 라벨 비율 비교</td></tr>
    <tr><td rowspan="3"><strong>모델 단계</strong></td><td>집단별 성능 비교</td><td>정확도, 재현율, 정밀도를 집단별로 측정</td></tr>
    <tr><td>특성 중요도 분석</td><td>보호 속성 관련 변수의 영향력 측정</td></tr>
    <tr><td>반사실적 분석</td><td>보호 속성만 바꿨을 때 결과 변화 검사</td></tr>
    <tr><td rowspan="2"><strong>결과 단계</strong></td><td>공정성 지표 계산</td><td>DP, EO, EqOdds 등 공정성 지표 측정</td></tr>
    <tr><td>교차 분석</td><td>여러 보호 속성의 교차 영향 분석</td></tr>
  </tbody>
</table>

<h4>주요 편향 탐지 도구</h4>
<table>
  <thead>
    <tr><th>도구</th><th>개발사</th><th>주요 기능</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Fairlearn</strong></td><td>Microsoft</td><td>공정성 평가 및 완화, Python 라이브러리</td></tr>
    <tr><td><strong>AI Fairness 360</strong></td><td>IBM</td><td>70+ 공정성 지표, 10+ 완화 알고리즘</td></tr>
    <tr><td><strong>What-If Tool</strong></td><td>Google</td><td>시각적 모델 분석 및 공정성 검사</td></tr>
    <tr><td><strong>Aequitas</strong></td><td>U of Chicago</td><td>편향 감사(audit) 도구</td></tr>
  </tbody>
</table>
    `},{id:807,chapter_id:8,title:"편향 완화 전략",sort_order:7,content:`
<h3>AI 편향을 줄이는 방법</h3>

<h4>완화 전략 분류</h4>
<div class="compare-grid">
  <div>
    <h5>전처리 (Pre-processing)</h5>
    <p>학습 전 데이터 단계에서 편향 제거</p>
    <ul>
      <li><strong>리샘플링:</strong> 소수 집단 데이터 증강 또는 다수 집단 축소</li>
      <li><strong>리라벨링:</strong> 편향된 라벨 수정</li>
      <li><strong>특성 변환:</strong> 보호 속성과의 상관관계 제거</li>
      <li><strong>합성 데이터:</strong> 부족한 집단의 데이터 생성</li>
    </ul>
  </div>
  <div>
    <h5>학습 중 (In-processing)</h5>
    <p>모델 학습 과정에서 공정성 적용</p>
    <ul>
      <li><strong>공정성 제약:</strong> 손실 함수에 공정성 패널티 추가</li>
      <li><strong>적대적 학습:</strong> 보호 속성을 예측하지 못하도록 학습</li>
      <li><strong>다중 목표 최적화:</strong> 정확도와 공정성 동시 최적화</li>
    </ul>
  </div>
  <div>
    <h5>후처리 (Post-processing)</h5>
    <p>모델 출력 단계에서 결과 보정</p>
    <ul>
      <li><strong>임계값 조정:</strong> 집단별 분류 임계값 차별화</li>
      <li><strong>캘리브레이션:</strong> 예측 확률 보정</li>
      <li><strong>결과 재순위화:</strong> 공정성 기준에 맞게 순위 조정</li>
    </ul>
  </div>
</div>

<h4>조직적 완화 전략</h4>
<table>
  <thead>
    <tr><th>전략</th><th>실천 방안</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>다양성 확보</strong></td><td>개발팀의 인구통계적, 학문적 다양성 확보</td></tr>
    <tr><td><strong>이해관계자 참여</strong></td><td>영향 받는 커뮤니티의 개발 과정 참여</td></tr>
    <tr><td><strong>편향 감사</strong></td><td>독립적 제3자에 의한 정기적 공정성 감사</td></tr>
    <tr><td><strong>투명성 보고</strong></td><td>모델 카드, 데이터시트 등 문서화 공개</td></tr>
    <tr><td><strong>이의 제기 절차</strong></td><td>AI 결정에 대한 이의 신청 및 재검토 체계</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>핵심:</strong> 편향 완화는 일회성 작업이 아니라 지속적 과정입니다.
  배포 후에도 지속적인 모니터링과 업데이트가 필요합니다.
</div>
    `},{id:808,chapter_id:8,title:"공정한 AI 개발 프레임워크",sort_order:8,content:`
<h3>체계적인 공정한 AI 개발</h3>

<h4>공정한 AI 개발 5단계</h4>
<div class="flow-diagram">
  <div class="flow-step">1단계<br/><strong>영향 평가</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">2단계<br/><strong>공정성 정의</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">3단계<br/><strong>편향 탐지</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">4단계<br/><strong>편향 완화</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">5단계<br/><strong>모니터링</strong></div>
</div>

<h4>주요 글로벌 AI 공정성 가이드라인</h4>
<table>
  <thead>
    <tr><th>기관</th><th>가이드라인</th><th>핵심 원칙</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>EU</strong></td><td>AI Act (2024)</td><td>위험 기반 규제, 고위험 AI 투명성 의무</td></tr>
    <tr><td><strong>UNESCO</strong></td><td>AI 윤리 권고안 (2021)</td><td>인간 중심, 포용성, 다양성 존중</td></tr>
    <tr><td><strong>OECD</strong></td><td>AI 원칙 (2019)</td><td>투명성, 설명 가능성, 안전성</td></tr>
    <tr><td><strong>한국</strong></td><td>AI 윤리 기준 (2020)</td><td>인간 존엄, 공공성, 연대, 데이터 관리</td></tr>
  </tbody>
</table>

<h4>모델 카드 (Model Card)</h4>
<div class="info-box">
  <strong>모델 카드:</strong> AI 모델의 성능, 한계, 편향 정보를 체계적으로 문서화하는 표준 양식입니다.
  <ul>
    <li><strong>모델 개요:</strong> 목적, 개발자, 버전</li>
    <li><strong>의도된 사용:</strong> 적합한 / 부적합한 사용 사례</li>
    <li><strong>성능 지표:</strong> 전체 및 집단별 성능</li>
    <li><strong>공정성 분석:</strong> 편향 평가 결과</li>
    <li><strong>한계와 권고사항:</strong> 알려진 한계, 주의사항</li>
  </ul>
</div>
    `},{id:809,chapter_id:8,title:"참고문헌 및 추가 자료",sort_order:9,content:`
<h3>참고문헌</h3>

<h4>학술 논문</h4>
<ol>
  <li>Barocas, S. & Selbst, A. D. (2016). Big Data's Disparate Impact. <em>California Law Review</em>, 104(3).</li>
  <li>Buolamwini, J. & Gebru, T. (2018). Gender Shades. <em>Proceedings of ML Research</em>, 81.</li>
  <li>Chouldechova, A. (2017). Fair Prediction with Disparate Impact. <em>Big Data</em>, 5(2).</li>
  <li>Obermeyer, Z. et al. (2019). Dissecting Racial Bias in Healthcare Algorithm. <em>Science</em>, 366.</li>
  <li>Mitchell, M. et al. (2019). Model Cards for Model Reporting. <em>FAT*</em>.</li>
</ol>

<h4>도서</h4>
<ol>
  <li>O'Neil, C. (2016). <em>Weapons of Math Destruction</em>. Crown.</li>
  <li>Eubanks, V. (2018). <em>Automating Inequality</em>. St. Martin's Press.</li>
  <li>Benjamin, R. (2019). <em>Race After Technology</em>. Polity Press.</li>
  <li>Crawford, K. (2021). <em>Atlas of AI</em>. Yale University Press.</li>
</ol>

<h4>온라인 자료</h4>
<ul>
  <li><strong>AI Fairness 360:</strong> IBM 오픈소스 공정성 도구</li>
  <li><strong>Fairlearn:</strong> Microsoft 공정성 평가 라이브러리</li>
  <li><strong>Google What-If Tool:</strong> 모델 분석 도구</li>
  <li><strong>Algorithmic Justice League:</strong> AI 편향 연구</li>
</ul>
    `},{id:810,chapter_id:8,title:"학습 확인 문제",sort_order:10,content:`
<h3>Chapter 8 학습 확인</h3>
<p>AI 편향성과 공정성에 대한 이해를 점검해 봅시다.</p>

<div class="quiz-section">
  <h4>1. AI 편향과 일반적 오류의 차이점으로 가장 적절한 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q1" value="a" /> a) 편향은 크고, 오류는 작다</label>
    <label><input type="radio" name="q1" value="b" /> b) 편향은 체계적이고 방향성이 있으며, 오류는 무작위적이다</label>
    <label><input type="radio" name="q1" value="c" /> c) 편향은 데이터에서만, 오류는 알고리즘에서만 발생한다</label>
    <label><input type="radio" name="q1" value="d" /> d) 편향은 고칠 수 없고, 오류는 고칠 수 있다</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 편향은 체계적이고 특정 방향으로 일관되게 발생하는 반면, 일반적 오류는 무작위적으로 발생합니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>2. 대리 변수(Proxy Variable)에 대한 설명으로 올바른 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q2" value="a" /> a) 보호 속성을 직접 대체하는 변수</label>
    <label><input type="radio" name="q2" value="b" /> b) 보호 속성과 상관관계가 높아 간접적으로 차별을 발생시키는 변수</label>
    <label><input type="radio" name="q2" value="c" /> c) 편향을 제거하기 위해 사용하는 변수</label>
    <label><input type="radio" name="q2" value="d" /> d) 모델의 정확도를 높이기 위한 보조 변수</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 대리 변수는 우편번호, 이름 등 보호 속성과 상관관계가 높은 변수를 통해 간접적으로 차별이 발생하는 것입니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>3. 아마존 채용 AI 사례에서 발견된 편향의 주된 원인은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q3" value="a" /> a) 알고리즘이 의도적으로 여성을 차별하도록 설계됨</label>
    <label><input type="radio" name="q3" value="b" /> b) 10년간의 역사적 채용 데이터에서 남성 편중 패턴을 학습</label>
    <label><input type="radio" name="q3" value="c" /> c) 데이터 수집 과정에서 여성 이력서가 누락됨</label>
    <label><input type="radio" name="q3" value="d" /> d) 평가 벤치마크 데이터의 문제</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 기술 산업의 역사적 남성 편중이 데이터에 반영되어 역사적 편향이 발생했습니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>4. 공정성 불가능 정리가 의미하는 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q4" value="a" /> a) AI는 절대 공정할 수 없다</label>
    <label><input type="radio" name="q4" value="b" /> b) 모든 공정성 기준을 동시에 만족시키는 것은 수학적으로 불가능하다</label>
    <label><input type="radio" name="q4" value="c" /> c) 공정성과 정확도는 항상 반비례한다</label>
    <label><input type="radio" name="q4" value="d" /> d) 편향 완화 기법은 효과가 없다</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 집단 간 기저율이 다를 때, 여러 공정성 기준을 동시에 만족시키는 것이 불가능합니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>5. 편향 완화 전략 중 후처리 기법에 해당하는 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q5" value="a" /> a) 소수 집단 데이터 증강</label>
    <label><input type="radio" name="q5" value="b" /> b) 손실 함수에 공정성 제약 추가</label>
    <label><input type="radio" name="q5" value="c" /> c) 집단별 분류 임계값 차별화</label>
    <label><input type="radio" name="q5" value="d" /> d) 보호 속성과의 상관관계 제거</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: c)</strong> 후처리 기법은 모델 출력 후 결과를 보정하는 방법으로, 집단별 임계값 조정이 대표적입니다.</p>
  </details>
</div>
    `}],iI=[{id:901,chapter_id:9,title:"9.1 AI 안전의 개념",sort_order:1,content:`
<h3>AI 안전(AI Safety)이란?</h3>
<p>AI 안전(AI Safety)은 인공지능 시스템이 의도한 대로 작동하면서 인간과 사회에 해를 끼치지 않도록 보장하는 연구 및 실천 분야입니다. AI 기술이 급격히 발전함에 따라, 이 기술이 가져올 수 있는 위험을 사전에 식별하고 예방하는 것이 매우 중요해지고 있습니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
AI 안전은 AI 시스템이 설계 목적에 부합하게 작동하고, 예상치 못한 부작용이나 위험을 최소화하며, 인간의 가치와 의도에 부합하도록 보장하는 모든 노력을 포괄합니다.
</div>

<h3>AI 안전이 중요한 이유</h3>
<ul>
<li><strong>사회적 영향력 확대</strong>: AI가 의료, 금융, 교통, 법률 등 중요한 의사결정에 활용되면서 오류의 파급력이 커지고 있습니다.</li>
<li><strong>자율성 증가</strong>: AI 시스템이 더 많은 자율적 판단을 내리게 되면서, 인간의 통제 범위를 벗어날 가능성이 있습니다.</li>
<li><strong>복잡성과 불투명성</strong>: 딥러닝 모델의 의사결정 과정은 매우 복잡하여 왜 그런 결과를 내었는지 설명하기 어렵습니다.</li>
<li><strong>대규모 배포</strong>: 하나의 AI 시스템이 수억 명의 사용자에게 동시에 영향을 미칠 수 있습니다.</li>
</ul>

<h3>AI 안전의 핵심 원칙</h3>
<table>
<thead>
<tr><th>원칙</th><th>설명</th><th>적용 사례</th></tr>
</thead>
<tbody>
<tr><td>정렬(Alignment)</td><td>AI의 목표가 인간의 의도와 일치</td><td>보상 함수 설계 시 인간 가치 반영</td></tr>
<tr><td>견고성(Robustness)</td><td>예상치 못한 상황에서도 안전하게 작동</td><td>자율주행차의 악천후 대응 능력</td></tr>
<tr><td>모니터링(Monitoring)</td><td>AI 시스템의 지속적인 감시 및 평가</td><td>실시간 성능 추적 대시보드</td></tr>
<tr><td>통제 가능성(Controllability)</td><td>필요시 인간이 AI를 중단하거나 수정 가능</td><td>긴급 정지 버튼, 수동 개입 메커니즘</td></tr>
<tr><td>투명성(Transparency)</td><td>AI의 의사결정 과정을 이해할 수 있음</td><td>설명 가능한 AI(XAI) 기술 적용</td></tr>
</tbody>
</table>

<h3>AI 안전 연구의 역사</h3>
<div class="flow-diagram">
<div class="flow-step">2014년<br/>닉 보스트롬<br/>《슈퍼인텔리전스》 출간</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2015년<br/>오픈AI 설립<br/>AI 안전 연구 본격화</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2023년<br/>영국 AI 안전 정상회의<br/>블레츨리 선언</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2024년~<br/>각국 AI 안전 기관<br/>설립 및 규제 강화</div>
</div>
    `},{id:902,chapter_id:9,title:"9.2 AI 시스템의 위험 유형",sort_order:2,content:`
<h3>AI 시스템이 초래할 수 있는 위험</h3>
<p>AI 시스템은 다양한 방식으로 위험을 초래할 수 있습니다. 이러한 위험을 체계적으로 분류하고 이해하는 것은 안전한 AI 개발과 활용의 첫걸음입니다.</p>

<h3>위험의 3대 분류</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>1. 오용(Misuse)</h4>
<p>AI 기술이 악의적인 목적으로 의도적으로 사용되는 경우입니다.</p>
<ul>
<li>딥페이크를 이용한 허위 정보 생성</li>
<li>AI 기반 사이버 공격 자동화</li>
<li>감시 및 프라이버시 침해</li>
<li>AI를 이용한 대규모 피싱 사기</li>
</ul>
</div>
<div class="compare-item">
<h4>2. 사고(Accidents)</h4>
<p>개발자의 의도와 달리 AI 시스템이 예상치 못한 행동을 하는 경우입니다.</p>
<ul>
<li>자율주행차 사고 (우버, 테슬라 사례)</li>
<li>의료 AI의 오진으로 인한 환자 위험</li>
<li>채용 AI의 의도치 않은 차별</li>
<li>추천 알고리즘의 극단주의 콘텐츠 확산</li>
</ul>
</div>
<div class="compare-item">
<h4>3. 정렬 문제(Alignment)</h4>
<p>AI의 목표와 인간의 진정한 의도가 불일치하는 경우입니다.</p>
<ul>
<li>보상 해킹: 목표 지표를 편법으로 최적화</li>
<li>목표 일반화 실패: 훈련 환경과 실제 환경의 차이</li>
<li>가치 정렬 문제: 인간의 복잡한 가치 체계 반영 어려움</li>
<li>수단-목적 전도: 중간 목표를 최종 목표로 착각</li>
</ul>
</div>
</div>

<h3>위험 수준별 분류</h3>
<table>
<thead>
<tr><th>위험 수준</th><th>특성</th><th>사례</th><th>대응 방안</th></tr>
</thead>
<tbody>
<tr><td>낮은 위험</td><td>일상적 불편, 쉽게 복구 가능</td><td>챗봇의 부정확한 응답</td><td>사용자 피드백, 정기 업데이트</td></tr>
<tr><td>중간 위험</td><td>경제적 손실, 차별 발생</td><td>신용 평가 AI의 편향</td><td>편향 감사, 규제 준수</td></tr>
<tr><td>높은 위험</td><td>생명/안전 위협, 대규모 영향</td><td>자율주행차 사고, 의료 오진</td><td>엄격한 인증, 인간 감독 필수</td></tr>
<tr><td>실존적 위험</td><td>인류 전체에 영향</td><td>초지능 AI의 통제 불능</td><td>국제 협력, 안전 연구 투자</td></tr>
</tbody>
</table>

<div class="info-box warning">
<strong>주의: 연쇄적 위험</strong><br/>
AI 위험은 단독으로 발생하기보다 연쇄적으로 확산되는 경향이 있습니다. 예를 들어, 데이터 편향(사고) → 차별적 결과(사회적 위험) → 신뢰 상실(경제적 위험)로 이어질 수 있습니다. 따라서 개별 위험뿐만 아니라 시스템 전체의 위험을 종합적으로 평가해야 합니다.
</div>

<h4>실제 사례: AI 위험이 현실화된 경우</h4>
<ol>
<li><strong>아마존 채용 AI (2018)</strong>: 과거 데이터의 성별 편향으로 여성 지원자를 체계적으로 불리하게 평가</li>
<li><strong>마이크로소프트 Tay (2016)</strong>: 소셜 미디어 챗봇이 악의적 사용자에 의해 혐오 발언을 학습</li>
<li><strong>COMPAS 재범 예측 (2016)</strong>: 형사 사법 AI가 흑인에게 불리한 예측을 보여 인종 차별 논란 발생</li>
</ol>
    `},{id:903,chapter_id:9,title:"9.3 설명 가능한 AI (XAI)",sort_order:3,content:`
<h3>설명 가능한 AI(Explainable AI, XAI)</h3>
<p>설명 가능한 AI(XAI)는 AI 시스템의 의사결정 과정과 결과를 인간이 이해할 수 있도록 설명하는 기술과 방법론을 의미합니다. 딥러닝과 같은 복잡한 모델이 "블랙박스"로 작동하는 문제를 해결하기 위해 등장했습니다.</p>

<div class="info-box">
<strong>왜 XAI가 필요한가?</strong><br/>
AI가 "이 환자는 암일 확률이 95%입니다"라고 진단했을 때, 의사와 환자는 <em>왜</em> 그런 판단을 내렸는지 알 권리가 있습니다. XAI는 이 "왜?"에 답하는 기술입니다.
</div>

<h3>설명 가능성의 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>사전 설명 가능성 (Ante-hoc)</h4>
<p>모델 자체가 해석 가능하도록 설계하는 접근법</p>
<ul>
<li>결정 트리(Decision Tree)</li>
<li>선형 회귀(Linear Regression)</li>
<li>규칙 기반 시스템(Rule-based)</li>
<li>장점: 직관적 이해 가능</li>
<li>단점: 복잡한 패턴 학습 한계</li>
</ul>
</div>
<div class="compare-item">
<h4>사후 설명 가능성 (Post-hoc)</h4>
<p>이미 학습된 복잡한 모델을 사후에 해석하는 접근법</p>
<ul>
<li>LIME (Local Interpretable Model-agnostic Explanations)</li>
<li>SHAP (SHapley Additive exPlanations)</li>
<li>Grad-CAM (시각적 설명)</li>
<li>장점: 복잡한 모델에 적용 가능</li>
<li>단점: 근사적 설명, 완벽하지 않을 수 있음</li>
</ul>
</div>
</div>

<h3>주요 XAI 기법 비교</h3>
<table>
<thead>
<tr><th>기법</th><th>원리</th><th>적용 대상</th><th>출력 형태</th></tr>
</thead>
<tbody>
<tr><td>LIME</td><td>개별 예측 주변을 단순 모델로 근사</td><td>모든 모델</td><td>특성별 중요도</td></tr>
<tr><td>SHAP</td><td>게임 이론 기반 특성 기여도 계산</td><td>모든 모델</td><td>특성별 기여값</td></tr>
<tr><td>Grad-CAM</td><td>그래디언트를 활용한 시각적 히트맵</td><td>CNN 모델</td><td>히트맵 이미지</td></tr>
<tr><td>Attention Visualization</td><td>어텐션 가중치 시각화</td><td>트랜스포머 모델</td><td>토큰별 가중치</td></tr>
<tr><td>Feature Importance</td><td>특성의 전체적 중요도 순위</td><td>트리 기반 모델</td><td>중요도 막대 그래프</td></tr>
</tbody>
</table>

<h3>XAI의 적용 분야</h3>
<div class="flow-diagram">
<div class="flow-step">의료<br/>진단 근거 제시<br/>의사 의사결정 지원</div>
<div class="flow-arrow">→</div>
<div class="flow-step">금융<br/>대출 거부 사유 설명<br/>규제 준수</div>
<div class="flow-arrow">→</div>
<div class="flow-step">법률<br/>판결 근거 투명화<br/>공정성 검증</div>
<div class="flow-arrow">→</div>
<div class="flow-step">자율주행<br/>사고 원인 분석<br/>책임 규명</div>
</div>

<h4>XAI와 규제</h4>
<p>EU의 GDPR(일반 데이터 보호 규정)은 "설명을 요구할 권리(Right to Explanation)"를 규정하고 있으며, 자동화된 의사결정에 대해 개인이 그 논리와 결과에 대한 설명을 요구할 수 있습니다. 이러한 법적 요구사항은 XAI 기술의 발전을 가속화하고 있습니다.</p>
    `},{id:904,chapter_id:9,title:"9.4 AI 환각과 오류",sort_order:4,content:`
<h3>AI 환각(Hallucination)이란?</h3>
<p>AI 환각(Hallucination)은 AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신 있게 생성하는 현상을 말합니다. 특히 대규모 언어 모델(LLM)에서 빈번하게 발생하며, AI 신뢰성의 핵심 과제 중 하나입니다.</p>

<div class="info-box warning">
<strong>위험성 경고</strong><br/>
AI 환각은 단순한 오류가 아닙니다. AI가 완전히 그럴듯한 문장으로 거짓 정보를 제공하기 때문에, 사용자가 이를 사실로 받아들일 위험이 매우 높습니다. 특히 의료, 법률, 학술 분야에서 치명적인 결과를 초래할 수 있습니다.
</div>

<h3>AI 환각의 유형</h3>
<table>
<thead>
<tr><th>유형</th><th>설명</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>사실적 환각<br/>(Factual Hallucination)</td><td>존재하지 않는 사실을 생성</td><td>존재하지 않는 연구 논문이나 통계를 인용</td></tr>
<tr><td>충실도 환각<br/>(Faithfulness Hallucination)</td><td>입력 정보와 모순되는 출력 생성</td><td>원문 요약 시 원래 없던 내용 추가</td></tr>
<tr><td>추론 환각<br/>(Reasoning Hallucination)</td><td>논리적으로 잘못된 추론 수행</td><td>수학 문제에서 중간 과정의 논리적 오류</td></tr>
<tr><td>출처 환각<br/>(Source Hallucination)</td><td>존재하지 않는 출처를 제시</td><td>가짜 URL, 허위 저자명 생성</td></tr>
</tbody>
</table>

<h3>AI 환각의 원인</h3>
<ol>
<li><strong>훈련 데이터의 한계</strong>: 모델이 학습한 데이터에 오류나 편향이 포함되어 있을 수 있습니다.</li>
<li><strong>확률적 생성 방식</strong>: LLM은 다음 토큰의 확률을 기반으로 텍스트를 생성하므로, 통계적으로 그럴듯하지만 사실이 아닌 내용을 만들어냅니다.</li>
<li><strong>지식의 단절</strong>: 학습 데이터의 마감 시점 이후 정보를 알지 못하지만, 추측으로 답변을 생성합니다.</li>
<li><strong>일반화의 과잉</strong>: 학습한 패턴을 부적절하게 새로운 상황에 적용합니다.</li>
</ol>

<h3>환각 완화 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 대응</h4>
<ul>
<li><strong>RAG(검색 증강 생성)</strong>: 외부 데이터베이스에서 관련 정보를 검색하여 답변 근거로 활용</li>
<li><strong>사실 검증 레이어</strong>: 생성된 답변을 자동으로 팩트체크하는 추가 모델 적용</li>
<li><strong>불확실성 표현</strong>: 모델이 확신이 없을 때 이를 명시적으로 표시</li>
<li><strong>RLHF</strong>: 인간 피드백을 통한 강화학습으로 환각 줄이기</li>
</ul>
</div>
<div class="compare-item">
<h4>사용자 대응</h4>
<ul>
<li><strong>교차 검증</strong>: AI 답변을 다른 신뢰할 수 있는 출처와 비교 확인</li>
<li><strong>출처 요청</strong>: AI에게 답변의 근거나 출처를 명시적으로 요청</li>
<li><strong>비판적 사고</strong>: AI 답변을 무비판적으로 수용하지 않는 습관</li>
<li><strong>전문가 검토</strong>: 중요한 의사결정에는 반드시 전문가 확인</li>
</ul>
</div>
</div>

<h4>실제 사례: 환각으로 인한 문제</h4>
<p>2023년 미국에서 한 변호사가 ChatGPT가 생성한 가짜 판례를 법정 서류에 인용하여 제재를 받은 사건이 화제가 되었습니다. 이 사건은 AI 환각의 위험성과 AI 결과물에 대한 인간의 검증 책임을 보여주는 대표적인 사례입니다.</p>
    `},{id:905,chapter_id:9,title:"9.5 AI 보안 위협",sort_order:5,content:`
<h3>AI 시스템을 노리는 보안 위협</h3>
<p>AI 시스템은 전통적인 소프트웨어와는 다른 고유한 보안 취약점을 가지고 있습니다. 공격자들은 AI의 학습 과정, 입력 처리 방식, 의사결정 메커니즘을 악용하여 다양한 공격을 시도할 수 있습니다.</p>

<h3>주요 AI 보안 위협 유형</h3>
<table>
<thead>
<tr><th>공격 유형</th><th>설명</th><th>위험도</th><th>방어 난이도</th></tr>
</thead>
<tbody>
<tr><td>적대적 공격<br/>(Adversarial Attack)</td><td>입력 데이터에 미세한 변형을 가해 AI를 속임</td><td>높음</td><td>높음</td></tr>
<tr><td>프롬프트 인젝션<br/>(Prompt Injection)</td><td>악의적인 프롬프트로 AI의 안전장치를 우회</td><td>높음</td><td>중간</td></tr>
<tr><td>데이터 포이즈닝<br/>(Data Poisoning)</td><td>훈련 데이터를 오염시켜 모델 행동을 조작</td><td>매우 높음</td><td>높음</td></tr>
<tr><td>모델 추출<br/>(Model Extraction)</td><td>반복 쿼리를 통해 AI 모델을 복제</td><td>중간</td><td>중간</td></tr>
<tr><td>멤버십 추론<br/>(Membership Inference)</td><td>특정 데이터가 훈련에 사용되었는지 추론</td><td>중간</td><td>높음</td></tr>
</tbody>
</table>

<h3>주요 공격 상세 분석</h3>

<h4>1. 적대적 공격 (Adversarial Attack)</h4>
<p>인간의 눈에는 차이가 없지만 AI가 완전히 다르게 인식하도록 입력을 조작하는 공격입니다.</p>
<div class="info-box">
<strong>사례</strong>: 정지 표지판에 특정 스티커를 붙이면 자율주행차의 AI가 이를 속도 제한 표지판으로 잘못 인식하는 실험이 2018년에 보고되었습니다. 육안으로는 분명한 정지 표지판이지만, AI의 컴퓨터 비전 시스템은 쉽게 속을 수 있습니다.
</div>

<h4>2. 프롬프트 인젝션 (Prompt Injection)</h4>
<p>LLM 기반 서비스에서 사용자가 악의적인 지시를 입력하여 AI의 보안 가드레일을 우회하는 공격입니다.</p>
<ul>
<li><strong>직접 인젝션</strong>: 사용자가 직접 악의적 프롬프트를 입력</li>
<li><strong>간접 인젝션</strong>: 웹페이지나 문서에 숨겨진 지시를 AI가 읽도록 유도</li>
<li><strong>탈옥(Jailbreaking)</strong>: 역할극이나 가상 시나리오를 통해 안전장치를 우회</li>
</ul>

<h4>3. 데이터 포이즈닝 (Data Poisoning)</h4>
<p>AI 모델의 학습 데이터에 악의적인 데이터를 주입하여 모델의 행동을 근본적으로 조작하는 공격입니다.</p>
<div class="flow-diagram">
<div class="flow-step">공격자가<br/>오염된 데이터 삽입</div>
<div class="flow-arrow">→</div>
<div class="flow-step">모델이<br/>오염된 데이터로 학습</div>
<div class="flow-arrow">→</div>
<div class="flow-step">특정 조건에서<br/>조작된 결과 출력</div>
<div class="flow-arrow">→</div>
<div class="flow-step">정상 데이터에서는<br/>정상 작동 (탐지 어려움)</div>
</div>

<h3>AI 보안 방어 전략</h3>
<ul>
<li><strong>적대적 훈련(Adversarial Training)</strong>: 적대적 사례를 포함하여 모델을 훈련</li>
<li><strong>입력 검증(Input Validation)</strong>: 비정상적인 입력을 탐지하고 차단</li>
<li><strong>모델 모니터링</strong>: 운영 중인 모델의 행동을 실시간 감시</li>
<li><strong>차등 프라이버시(Differential Privacy)</strong>: 개별 데이터의 영향을 수학적으로 제한</li>
<li><strong>레드 팀(Red Team) 테스트</strong>: 전문 보안팀이 공격자 관점에서 취약점 탐색</li>
</ul>
    `},{id:906,chapter_id:9,title:"9.6 신뢰할 수 있는 AI 구축",sort_order:6,content:`
<h3>신뢰할 수 있는 AI(Trustworthy AI)</h3>
<p>신뢰할 수 있는 AI는 기술적으로 견고하고, 윤리적으로 올바르며, 법적으로 적합한 AI 시스템을 의미합니다. EU의 고수준 전문가 그룹(HLEG)은 2019년 "신뢰할 수 있는 AI를 위한 윤리 지침"을 발표하여 이 개념을 체계화했습니다.</p>

<h3>신뢰할 수 있는 AI의 7대 요건 (EU HLEG)</h3>
<table>
<thead>
<tr><th>요건</th><th>설명</th><th>실천 방법</th></tr>
</thead>
<tbody>
<tr><td>인간의 주체성과 감독</td><td>인간이 AI 시스템을 통제할 수 있어야 함</td><td>인간-루프(Human-in-the-loop) 설계</td></tr>
<tr><td>기술적 견고성과 안전</td><td>예상치 못한 상황에서도 안정적으로 작동</td><td>테스트, 검증, 폴백(fallback) 계획</td></tr>
<tr><td>프라이버시와 데이터 거버넌스</td><td>개인정보 보호와 데이터 품질 보장</td><td>GDPR 준수, 데이터 최소화 원칙</td></tr>
<tr><td>투명성</td><td>AI의 기능과 제약 사항을 명확히 전달</td><td>XAI 기술, 사용자 공지, 문서화</td></tr>
<tr><td>다양성, 비차별, 공정성</td><td>편향을 방지하고 모든 사용자를 공정하게 대우</td><td>편향 테스트, 다양한 데이터 확보</td></tr>
<tr><td>사회적, 환경적 웰빙</td><td>사회와 환경에 긍정적 영향</td><td>환경 영향 평가, 사회적 가치 반영</td></tr>
<tr><td>책임성</td><td>AI 시스템의 결과에 대한 책임을 질 수 있음</td><td>감사 추적, 영향 평가, 보고 체계</td></tr>
</tbody>
</table>

<h3>견고한 AI 시스템 구축 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">요구사항 분석<br/>위험 평가<br/>윤리 검토</div>
<div class="flow-arrow">→</div>
<div class="flow-step">데이터 수집<br/>품질 검증<br/>편향 점검</div>
<div class="flow-arrow">→</div>
<div class="flow-step">모델 개발<br/>안전 테스트<br/>성능 검증</div>
<div class="flow-arrow">→</div>
<div class="flow-step">배포 및 모니터링<br/>피드백 수집<br/>지속적 개선</div>
</div>

<h3>신뢰성 확보를 위한 핵심 기술</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>모니터링 시스템</h4>
<ul>
<li><strong>성능 모니터링</strong>: 정확도, 지연 시간, 처리량 추적</li>
<li><strong>드리프트 탐지</strong>: 데이터 분포나 모델 성능의 변화 감지</li>
<li><strong>이상 탐지</strong>: 비정상적인 입출력 패턴 식별</li>
<li><strong>공정성 모니터링</strong>: 그룹 간 결과 차이 지속적 측정</li>
</ul>
</div>
<div class="compare-item">
<h4>테스트와 검증</h4>
<ul>
<li><strong>스트레스 테스트</strong>: 극단적 상황에서의 시스템 안정성 확인</li>
<li><strong>A/B 테스트</strong>: 새 모델과 기존 모델의 비교 평가</li>
<li><strong>레드 팀 테스트</strong>: 보안 취약점과 안전 문제 사전 발견</li>
<li><strong>사용자 테스트</strong>: 실제 사용 환경에서의 문제점 파악</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>모범 사례: 모델 카드(Model Card)</strong><br/>
구글이 제안한 모델 카드는 AI 모델의 성능, 한계, 의도된 사용 범위, 윤리적 고려사항 등을 문서화한 표준 양식입니다. 모델 카드를 통해 개발자, 사용자, 규제 기관 모두가 AI 시스템의 특성을 명확히 이해할 수 있습니다.
</div>
    `},{id:907,chapter_id:9,title:"9.7 AI 안전 규제와 정책",sort_order:7,content:`
<h3>글로벌 AI 안전 규제 동향</h3>
<p>AI 기술의 급격한 발전에 따라 전 세계적으로 AI 안전에 대한 규제와 정책이 빠르게 형성되고 있습니다. 각국은 AI의 혜택을 최대화하면서 위험을 최소화하기 위한 법적, 제도적 프레임워크를 구축하고 있습니다.</p>

<h3>EU AI Act (인공지능법)</h3>
<p>EU AI Act는 세계 최초의 포괄적인 AI 규제 법률로, 2024년 발효되었습니다. 위험 기반 접근법(Risk-based Approach)을 채택하여 AI 시스템을 위험 수준에 따라 분류합니다.</p>

<table>
<thead>
<tr><th>위험 등급</th><th>규제 수준</th><th>해당 AI 시스템 예시</th></tr>
</thead>
<tbody>
<tr><td>허용 불가 위험<br/>(Unacceptable Risk)</td><td>전면 금지</td><td>사회적 점수 시스템, 실시간 원격 생체인식 감시, 무의식적 조작</td></tr>
<tr><td>고위험<br/>(High Risk)</td><td>엄격한 규제 및 인증</td><td>채용 AI, 신용 평가, 의료 진단, 교육 평가, 법 집행</td></tr>
<tr><td>제한적 위험<br/>(Limited Risk)</td><td>투명성 의무</td><td>챗봇(AI임을 고지), 딥페이크(표시 의무), 감정 인식 시스템</td></tr>
<tr><td>최소 위험<br/>(Minimal Risk)</td><td>자유로운 사용</td><td>스팸 필터, AI 게임, 추천 시스템</td></tr>
</tbody>
</table>

<h3>주요국 AI 정책 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>미국</h4>
<ul>
<li>2023년 AI 행정명령 (Executive Order)</li>
<li>NIST AI 위험 관리 프레임워크</li>
<li>분야별 자율 규제 중심</li>
<li>AI 안전 연구소(AISI) 설립</li>
</ul>
</div>
<div class="compare-item">
<h4>중국</h4>
<ul>
<li>생성형 AI 관리 임시 조치 (2023)</li>
<li>알고리즘 추천 관리 규정</li>
<li>딥 합성(딥페이크) 규정</li>
<li>정부 주도의 강력한 규제</li>
</ul>
</div>
<div class="compare-item">
<h4>한국</h4>
<ul>
<li>AI 기본법 제정 추진</li>
<li>AI 윤리 기준 (2020)</li>
<li>디지털 플랫폼 정부 정책</li>
<li>AI 안전성 평가 체계 구축</li>
</ul>
</div>
</div>

<h3>국제 협력 체계</h3>
<div class="flow-diagram">
<div class="flow-step">블레츨리 선언<br/>(2023.11)<br/>28개국 합의</div>
<div class="flow-arrow">→</div>
<div class="flow-step">서울 AI 정상회의<br/>(2024.05)<br/>안전 공약 확대</div>
<div class="flow-arrow">→</div>
<div class="flow-step">G7 AI 행동 강령<br/>히로시마 프로세스<br/>자발적 안전 지침</div>
<div class="flow-arrow">→</div>
<div class="flow-step">OECD AI 원칙<br/>국제 표준화<br/>지속적 협력</div>
</div>

<div class="info-box">
<strong>AI 안전 기관 현황</strong><br/>
영국 AI 안전 연구소(AISI), 미국 AI 안전 연구소, EU AI 사무소(AI Office) 등 전문 기관이 설립되어 AI 안전 연구, 평가, 정책 개발을 수행하고 있습니다. 한국도 2024년 AI 안전 연구원 설립을 추진하며 글로벌 협력에 동참하고 있습니다.
</div>
    `},{id:908,chapter_id:9,title:"9.8 AI 안전 실천 가이드",sort_order:8,content:`
<h3>일반 사용자를 위한 AI 안전 실천 가이드</h3>
<p>AI 시스템을 안전하고 효과적으로 사용하기 위해서는 기술적 지식뿐만 아니라 올바른 사용 습관과 비판적 태도가 필요합니다. 다음은 일반 사용자가 일상에서 실천할 수 있는 구체적인 가이드입니다.</p>

<h3>AI 사용 전: 준비 단계</h3>
<ol>
<li><strong>AI 시스템의 목적과 한계를 이해하세요</strong>: 사용하려는 AI가 어떤 용도로 설계되었고, 어떤 한계가 있는지 파악합니다.</li>
<li><strong>개인정보 정책을 확인하세요</strong>: 입력한 데이터가 어떻게 저장되고 활용되는지 확인합니다.</li>
<li><strong>신뢰할 수 있는 서비스인지 검증하세요</strong>: 공식 서비스인지, 검증된 제공자인지 확인합니다.</li>
</ol>

<h3>AI 사용 중: 안전한 활용 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정보 입력 시 주의사항</h4>
<ul>
<li>주민등록번호, 비밀번호 등 민감 정보 입력 금지</li>
<li>기업 기밀이나 업무 기밀 정보 유의</li>
<li>타인의 개인정보를 AI에 입력하지 않기</li>
<li>의료, 법률 정보 입력 시 개인 식별 정보 제거</li>
</ul>
</div>
<div class="compare-item">
<h4>결과 활용 시 주의사항</h4>
<ul>
<li>AI 답변을 100% 신뢰하지 않기</li>
<li>중요한 정보는 반드시 교차 검증</li>
<li>AI 생성물의 저작권 문제 인식</li>
<li>AI 결과를 자신의 것처럼 제출하지 않기</li>
</ul>
</div>
</div>

<h3>상황별 AI 안전 체크리스트</h3>
<table>
<thead>
<tr><th>사용 상황</th><th>확인 사항</th><th>위험 요소</th></tr>
</thead>
<tbody>
<tr><td>학습/과제 활용</td><td>학교/기관의 AI 사용 정책 확인</td><td>표절, 학문적 부정행위</td></tr>
<tr><td>업무 활용</td><td>회사의 AI 사용 가이드라인 준수</td><td>기밀 유출, 부정확한 결과</td></tr>
<tr><td>건강/의료 정보</td><td>반드시 전문 의료인과 상담</td><td>오진, 잘못된 건강 정보</td></tr>
<tr><td>법률 조언</td><td>반드시 법률 전문가 확인</td><td>잘못된 법률 해석, 판례 환각</td></tr>
<tr><td>금융 결정</td><td>전문가 자문 병행</td><td>부정확한 시장 분석, 투자 손실</td></tr>
<tr><td>콘텐츠 생성</td><td>저작권, 초상권 확인</td><td>법적 분쟁, 허위 정보 유포</td></tr>
</tbody>
</table>

<h3>AI 안전 사용 5대 원칙</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>검증</strong><br/>AI 결과를<br/>항상 확인</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>보호</strong><br/>개인정보를<br/>안전하게 관리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이해</strong><br/>AI의 한계를<br/>명확히 인식</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>책임</strong><br/>AI 활용 결과에<br/>사용자가 책임</div>
</div>

<div class="info-box">
<strong>기억하세요</strong><br/>
AI는 강력한 도구이지만, 최종적인 판단과 책임은 항상 인간에게 있습니다. AI를 현명하게 활용하는 것은 AI 리터러시의 핵심이며, 안전한 사용 습관은 AI 시대를 살아가는 모든 시민의 기본 역량입니다.
</div>
    `},{id:909,chapter_id:9,title:"9.9 학습 정리",sort_order:9,content:`
<h3>Chapter 9 학습 정리: AI 안전과 신뢰성</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI 안전과 신뢰성은 AI 기술이 인간과 사회에 이로운 방향으로 발전하기 위한 필수적인 요소입니다. 기술적 안전성 확보, 규제 체계 구축, 사용자의 올바른 활용 능력 모두가 함께 어우러져야 합니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI 안전의 개념</td><td>AI가 의도대로 작동하면서 해를 끼치지 않도록 보장하는 연구와 실천. 정렬, 견고성, 통제 가능성, 투명성이 핵심 원칙입니다.</td></tr>
<tr><td>위험 유형</td><td>오용(악의적 사용), 사고(의도치 않은 행동), 정렬 문제(목표 불일치)로 분류. 낮은 위험부터 실존적 위험까지 다양한 수준이 존재합니다.</td></tr>
<tr><td>설명 가능한 AI</td><td>AI의 의사결정을 인간이 이해할 수 있도록 하는 기술. LIME, SHAP, Grad-CAM 등의 기법이 활용됩니다.</td></tr>
<tr><td>AI 환각</td><td>AI가 사실이 아닌 정보를 자신 있게 생성하는 현상. RAG, 사실 검증, 교차 검증으로 완화할 수 있습니다.</td></tr>
<tr><td>AI 보안 위협</td><td>적대적 공격, 프롬프트 인젝션, 데이터 포이즈닝 등 AI 고유의 보안 취약점이 존재합니다.</td></tr>
<tr><td>신뢰할 수 있는 AI</td><td>EU HLEG의 7대 요건(인간 감독, 견고성, 프라이버시, 투명성, 공정성, 사회적 웰빙, 책임성)을 충족하는 AI 시스템입니다.</td></tr>
<tr><td>AI 안전 규제</td><td>EU AI Act의 위험 기반 접근법, 각국의 규제 동향, 국제 협력 체계가 빠르게 발전하고 있습니다.</td></tr>
<tr><td>안전 실천 가이드</td><td>검증, 보호, 이해, 책임의 4대 원칙을 바탕으로 일상에서 AI를 안전하게 활용해야 합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>AI 안전(AI Safety)</strong>: AI 시스템이 안전하게 작동하도록 보장하는 분야</li>
<li><strong>정렬(Alignment)</strong>: AI의 목표를 인간의 의도와 가치에 일치시키는 것</li>
<li><strong>XAI</strong>: 설명 가능한 AI (Explainable AI)</li>
<li><strong>환각(Hallucination)</strong>: AI가 사실이 아닌 정보를 생성하는 현상</li>
<li><strong>적대적 공격</strong>: 입력을 미세하게 변형하여 AI를 속이는 공격</li>
<li><strong>프롬프트 인젝션</strong>: 악의적 프롬프트로 AI의 안전장치를 우회하는 공격</li>
<li><strong>데이터 포이즈닝</strong>: 훈련 데이터를 오염시켜 모델을 조작하는 공격</li>
<li><strong>RAG</strong>: 검색 증강 생성 (Retrieval-Augmented Generation)</li>
<li><strong>모델 카드</strong>: AI 모델의 성능, 한계, 윤리적 고려사항을 문서화한 표준 양식</li>
<li><strong>EU AI Act</strong>: 세계 최초의 포괄적 AI 규제 법률</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>NIST AI Risk Management Framework</li>
<li>EU Ethics Guidelines for Trustworthy AI</li>
<li>OECD AI Policy Observatory</li>
<li>한국 AI 윤리 기준 (과학기술정보통신부)</li>
</ul>
    `},{id:910,chapter_id:9,title:"9.10 학습 확인 문제",sort_order:10,content:`
<h3>Chapter 9 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 AI 안전과 신뢰성에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AI 안전의 핵심 원칙</h4>
<div class="info-box">
<p>다음 중 AI 안전의 핵심 원칙에 해당하지 <strong>않는</strong> 것은?</p>
<ol type="a">
<li>정렬(Alignment) — AI의 목표가 인간의 의도와 일치</li>
<li>견고성(Robustness) — 예상치 못한 상황에서도 안전하게 작동</li>
<li>최대 성능(Maximum Performance) — 항상 최고의 정확도를 달성</li>
<li>투명성(Transparency) — AI의 의사결정 과정을 이해할 수 있음</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>최대 성능은 AI 안전의 핵심 원칙이 아닙니다. AI 안전은 성능보다 안전성, 공정성, 투명성을 우선시합니다. 때로는 안전을 위해 성능을 일부 희생할 수도 있습니다.</p>
</details>
</div>

<h4>문제 2. AI 환각(Hallucination)</h4>
<div class="info-box">
<p>AI 환각에 대한 설명으로 <strong>올바른</strong> 것은?</p>
<ol type="a">
<li>AI 시스템의 하드웨어 오류로 인한 출력 이상</li>
<li>AI가 사실이 아닌 정보를 자신 있게 생성하는 현상</li>
<li>AI가 시각적 환상(optical illusion)을 인식하는 능력</li>
<li>AI가 학습 데이터를 그대로 복사하여 출력하는 현상</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 환각은 AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신 있게 생성하는 현상입니다. 이는 LLM의 확률적 텍스트 생성 방식에서 주로 발생합니다.</p>
</details>
</div>

<h4>문제 3. EU AI Act의 위험 분류</h4>
<div class="info-box">
<p>EU AI Act에서 "고위험(High Risk)"으로 분류되는 AI 시스템에 해당하는 것은?</p>
<ol type="a">
<li>AI 기반 스팸 필터</li>
<li>비디오 게임의 NPC AI</li>
<li>채용 과정에서의 이력서 심사 AI</li>
<li>음악 추천 알고리즘</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>채용 AI는 개인의 생계와 직접 관련되는 중요한 의사결정에 사용되므로 EU AI Act에서 고위험 시스템으로 분류됩니다. 스팸 필터, 게임 AI, 추천 시스템은 최소 위험으로 분류됩니다.</p>
</details>
</div>

<h4>문제 4. XAI(설명 가능한 AI)</h4>
<div class="info-box">
<p>다음 중 사후 설명 가능성(Post-hoc) 기법에 해당하는 것을 모두 고르세요.</p>
<ol type="a">
<li>결정 트리(Decision Tree)</li>
<li>LIME (Local Interpretable Model-agnostic Explanations)</li>
<li>선형 회귀(Linear Regression)</li>
<li>SHAP (SHapley Additive exPlanations)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b, d</strong><br/>LIME과 SHAP은 이미 학습된 복잡한 모델을 사후에 해석하는 Post-hoc 기법입니다. 결정 트리와 선형 회귀는 모델 자체가 해석 가능한 Ante-hoc(사전 설명 가능성) 접근법에 해당합니다.</p>
</details>
</div>

<h4>문제 5. AI 보안 위협</h4>
<div class="info-box">
<p>악의적인 사용자가 LLM 기반 서비스에 특수한 텍스트를 입력하여 AI의 안전장치를 우회하려는 공격 방식을 무엇이라 하는가?</p>
<ol type="a">
<li>데이터 포이즈닝 (Data Poisoning)</li>
<li>프롬프트 인젝션 (Prompt Injection)</li>
<li>모델 추출 (Model Extraction)</li>
<li>적대적 공격 (Adversarial Attack)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>프롬프트 인젝션은 악의적인 프롬프트를 통해 LLM의 보안 가드레일을 우회하는 공격입니다. 데이터 포이즈닝은 훈련 데이터 오염, 모델 추출은 모델 복제, 적대적 공격은 입력 데이터 변형을 통한 공격을 의미합니다.</p>
</details>
</div>
    `}],nI=[{id:1001,chapter_id:10,title:"10.1 데이터 리터러시란?",sort_order:1,content:`
<h3>데이터 리터러시의 정의</h3>
<p>데이터 리터러시(Data Literacy)란 데이터를 읽고, 이해하고, 분석하고, 활용하며, 이를 바탕으로 효과적인 의사소통을 할 수 있는 능력을 말합니다. AI 시대에 데이터 리터러시는 디지털 시민으로서 갖추어야 할 핵심 역량 중 하나입니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
데이터 리터러시는 단순히 데이터를 다루는 기술적 능력을 넘어, 데이터의 맥락을 이해하고, 데이터 기반으로 비판적 사고를 수행하며, 윤리적으로 데이터를 활용하는 포괄적인 역량입니다.
</div>

<h3>데이터 리터러시의 구성 요소</h3>
<table>
<thead>
<tr><th>구성 요소</th><th>설명</th><th>관련 활동</th></tr>
</thead>
<tbody>
<tr><td>데이터 읽기<br/>(Data Reading)</td><td>데이터를 정확히 해석하고 의미를 파악하는 능력</td><td>표, 그래프, 통계 수치 이해</td></tr>
<tr><td>데이터 활용<br/>(Data Working)</td><td>데이터를 수집, 정리, 분석하는 실무 능력</td><td>스프레드시트, 데이터베이스 활용</td></tr>
<tr><td>데이터 분석<br/>(Data Analysis)</td><td>데이터에서 패턴과 인사이트를 도출하는 능력</td><td>통계 분석, 추세 파악, 상관관계 분석</td></tr>
<tr><td>데이터 논증<br/>(Data Argumentation)</td><td>데이터를 근거로 논리적 주장을 펼치는 능력</td><td>보고서 작성, 프레젠테이션, 의사결정</td></tr>
</tbody>
</table>

<h3>AI 시대에 데이터 리터러시가 중요한 이유</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인 차원</h4>
<ul>
<li>정보 홍수 속에서 올바른 판단을 위한 기초</li>
<li>개인 데이터 보호와 프라이버시 관리</li>
<li>가짜 뉴스와 허위 통계 식별 능력</li>
<li>AI 도구의 결과를 비판적으로 평가</li>
</ul>
</div>
<div class="compare-item">
<h4>직업 차원</h4>
<ul>
<li>데이터 기반 의사결정이 업무의 표준</li>
<li>거의 모든 직군에서 데이터 활용 능력 요구</li>
<li>데이터 분석 역량이 핵심 경쟁력</li>
<li>AI 도구와 협업하기 위한 기본 소양</li>
</ul>
</div>
<div class="compare-item">
<h4>사회 차원</h4>
<ul>
<li>민주주의 사회에서 정책 판단의 근거</li>
<li>디지털 격차 해소와 포용적 사회 구현</li>
<li>데이터 기반 거버넌스의 투명성 확보</li>
<li>과학적 사실에 기반한 공론장 형성</li>
</ul>
</div>
</div>

<h3>데이터 리터러시 수준 평가</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>초급</strong><br/>데이터를 읽고<br/>기본 해석 가능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>중급</strong><br/>데이터를 수집하고<br/>분석할 수 있음</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>고급</strong><br/>데이터로 인사이트<br/>도출 및 의사결정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>전문가</strong><br/>데이터 전략 수립<br/>조직 문화 변혁 주도</div>
</div>
    `},{id:1002,chapter_id:10,title:"10.2 데이터의 유형과 구조",sort_order:2,content:`
<h3>데이터의 다양한 유형</h3>
<p>데이터는 형태, 구조, 성격에 따라 여러 가지로 분류됩니다. 데이터의 유형을 이해하는 것은 적절한 저장, 처리, 분석 방법을 선택하는 데 필수적입니다.</p>

<h3>구조에 따른 데이터 분류</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정형 데이터 (Structured Data)</h4>
<p>행(row)과 열(column)로 정리된 표 형태의 데이터</p>
<ul>
<li>관계형 데이터베이스(RDB)에 저장</li>
<li>SQL로 쿼리 가능</li>
<li>예: 고객 정보, 거래 내역, 성적표</li>
<li>전체 데이터의 약 20% 차지</li>
</ul>
</div>
<div class="compare-item">
<h4>반정형 데이터 (Semi-structured)</h4>
<p>일정한 구조를 가지지만 엄격한 스키마가 없는 데이터</p>
<ul>
<li>태그나 키-값 쌍으로 구성</li>
<li>유연한 구조 변경 가능</li>
<li>예: JSON, XML, HTML, 이메일</li>
<li>웹 데이터의 상당 부분 차지</li>
</ul>
</div>
<div class="compare-item">
<h4>비정형 데이터 (Unstructured Data)</h4>
<p>미리 정해진 구조가 없는 자유 형식의 데이터</p>
<ul>
<li>텍스트, 이미지, 영상, 음성 등</li>
<li>AI/딥러닝으로 분석 가능해짐</li>
<li>예: SNS 게시물, 뉴스 기사, 의료 영상</li>
<li>전체 데이터의 약 80% 차지</li>
</ul>
</div>
</div>

<h3>성격에 따른 데이터 분류</h3>
<table>
<thead>
<tr><th>분류 기준</th><th>유형</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">측정 수준</td><td>질적 데이터(Qualitative)</td><td>범주나 특성을 나타내는 데이터</td><td>성별, 지역, 학과</td></tr>
<tr><td>양적 데이터(Quantitative)</td><td>수치로 측정 가능한 데이터</td><td>나이, 점수, 매출</td></tr>
<tr><td rowspan="2">수집 시점</td><td>횡단면 데이터(Cross-sectional)</td><td>특정 시점의 데이터</td><td>2024년 고객 만족도 조사</td></tr>
<tr><td>시계열 데이터(Time-series)</td><td>시간에 따른 데이터 변화</td><td>월별 매출, 주가 변동</td></tr>
<tr><td rowspan="2">출처</td><td>1차 데이터(Primary)</td><td>직접 수집한 원시 데이터</td><td>설문 조사, 실험 결과</td></tr>
<tr><td>2차 데이터(Secondary)</td><td>타인이 수집한 기존 데이터</td><td>공공 통계, 연구 보고서</td></tr>
</tbody>
</table>

<h3>데이터의 측정 척도</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>명목 척도</strong><br/>분류만 가능<br/>예: 혈액형, 성별</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>서열 척도</strong><br/>순서 구분 가능<br/>예: 학점, 만족도</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>등간 척도</strong><br/>간격이 동일<br/>예: 온도, IQ</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>비율 척도</strong><br/>절대 영점 존재<br/>예: 키, 무게, 소득</div>
</div>

<div class="info-box">
<strong>AI와 데이터 유형</strong><br/>
AI 모델은 데이터 유형에 따라 다른 처리 방식을 사용합니다. 정형 데이터에는 전통적 머신러닝이, 비정형 데이터에는 딥러닝(CNN, RNN, 트랜스포머 등)이 주로 적용됩니다. 최근에는 멀티모달 AI가 여러 유형의 데이터를 동시에 처리할 수 있게 되었습니다.
</div>
    `},{id:1003,chapter_id:10,title:"10.3 데이터 수집과 전처리",sort_order:3,content:`
<h3>데이터 수집 방법</h3>
<p>데이터 분석의 첫 단계는 목적에 맞는 양질의 데이터를 수집하는 것입니다. 데이터 수집 방법은 연구 목적, 비용, 시간, 데이터 유형에 따라 선택됩니다.</p>

<h3>주요 데이터 수집 방법</h3>
<table>
<thead>
<tr><th>수집 방법</th><th>설명</th><th>장점</th><th>단점</th></tr>
</thead>
<tbody>
<tr><td>설문 조사</td><td>구조화된 질문을 통한 응답 수집</td><td>대량 수집 가능, 표준화</td><td>응답 편향, 낮은 응답률</td></tr>
<tr><td>인터뷰</td><td>대면/비대면 심층 면접</td><td>풍부한 질적 데이터</td><td>시간/비용 소요, 소규모</td></tr>
<tr><td>실험</td><td>통제된 환경에서의 데이터 생성</td><td>인과관계 파악 가능</td><td>인위적 환경, 윤리적 제약</td></tr>
<tr><td>관찰</td><td>자연 상태에서의 행동 기록</td><td>자연스러운 데이터</td><td>관찰자 편향, 시간 소요</td></tr>
<tr><td>웹 크롤링</td><td>웹사이트에서 자동으로 데이터 추출</td><td>대량의 웹 데이터 수집</td><td>법적 이슈, 데이터 품질</td></tr>
<tr><td>센서/IoT</td><td>장치를 통한 자동 실시간 수집</td><td>연속적, 객관적 데이터</td><td>장비 비용, 관리 필요</td></tr>
<tr><td>공공 데이터</td><td>정부/기관이 공개한 데이터 활용</td><td>무료, 신뢰성 높음</td><td>목적 불일치, 시점 차이</td></tr>
</tbody>
</table>

<h3>데이터 전처리(Data Preprocessing)</h3>
<p>수집된 원시 데이터(Raw Data)는 대부분 바로 분석에 사용할 수 없습니다. 결측값, 이상값, 형식 불일치 등 다양한 문제를 해결하는 전처리 과정이 필수적입니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>데이터 정제</strong><br/>결측값 처리<br/>이상값 탐지<br/>중복 제거</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 변환</strong><br/>정규화/표준화<br/>인코딩<br/>형식 통일</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 통합</strong><br/>여러 소스 병합<br/>스키마 통합<br/>일관성 확보</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 축소</strong><br/>차원 축소<br/>샘플링<br/>특성 선택</div>
</div>

<h3>전처리 주요 기법 상세</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>결측값 처리</h4>
<ul>
<li><strong>삭제</strong>: 결측값이 있는 행 또는 열 제거</li>
<li><strong>대체(Imputation)</strong>: 평균, 중앙값, 최빈값으로 채우기</li>
<li><strong>예측 대체</strong>: 머신러닝 모델로 결측값 예측</li>
<li><strong>표시</strong>: 결측 여부를 별도 변수로 표시</li>
</ul>
</div>
<div class="compare-item">
<h4>이상값 처리</h4>
<ul>
<li><strong>통계적 탐지</strong>: Z-score, IQR 방법 활용</li>
<li><strong>시각적 탐지</strong>: 박스플롯, 산점도 활용</li>
<li><strong>처리 방법</strong>: 제거, 변환, 대체, 별도 분석</li>
<li><strong>주의</strong>: 이상값이 중요한 정보일 수 있음</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>전처리의 중요성: "Garbage In, Garbage Out"</strong><br/>
아무리 우수한 AI 모델도 품질이 낮은 데이터로는 좋은 결과를 낼 수 없습니다. 데이터 과학 프로젝트에서 전처리는 전체 작업의 60~80%를 차지할 정도로 중요하고 시간이 많이 걸리는 과정입니다. 전처리의 품질이 분석 결과의 품질을 결정합니다.
</div>
    `},{id:1004,chapter_id:10,title:"10.4 데이터 분석 기초",sort_order:4,content:`
<h3>데이터 분석의 기초</h3>
<p>데이터 분석은 수집된 데이터에서 의미 있는 패턴, 추세, 인사이트를 발견하는 과정입니다. 기초 통계를 이해하는 것은 데이터 리터러시의 핵심 요소이며, AI가 데이터를 어떻게 학습하는지 이해하는 데도 도움이 됩니다.</p>

<h3>기술 통계(Descriptive Statistics)</h3>
<p>데이터의 특성을 수치로 요약하는 기본적인 통계 기법입니다.</p>

<table>
<thead>
<tr><th>분류</th><th>통계량</th><th>설명</th><th>활용 사례</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">중심 경향</td><td>평균(Mean)</td><td>모든 값의 합 / 데이터 수</td><td>평균 매출, 평균 성적</td></tr>
<tr><td>중앙값(Median)</td><td>데이터를 크기순으로 정렬했을 때 중앙 값</td><td>소득 중앙값 (이상값에 강건)</td></tr>
<tr><td>최빈값(Mode)</td><td>가장 빈번하게 나타나는 값</td><td>가장 많이 판매된 제품</td></tr>
<tr><td rowspan="3">산포도</td><td>범위(Range)</td><td>최대값 - 최소값</td><td>온도 변동폭</td></tr>
<tr><td>분산(Variance)</td><td>평균으로부터의 편차 제곱 평균</td><td>투자 위험도 측정</td></tr>
<tr><td>표준편차(SD)</td><td>분산의 제곱근</td><td>시험 점수의 분포 정도</td></tr>
<tr><td rowspan="2">분포 형태</td><td>왜도(Skewness)</td><td>분포의 비대칭 정도</td><td>소득 분포 (우측 치우침)</td></tr>
<tr><td>첨도(Kurtosis)</td><td>분포의 뾰족한 정도</td><td>극단값 빈도 파악</td></tr>
</tbody>
</table>

<h3>상관 분석(Correlation Analysis)</h3>
<p>두 변수 간의 관계 강도와 방향을 파악하는 분석 방법입니다.</p>
<div class="compare-grid">
<div class="compare-item">
<h4>양의 상관관계</h4>
<p>한 변수가 증가할 때 다른 변수도 증가하는 관계</p>
<ul>
<li>상관계수: 0 ~ +1</li>
<li>예: 공부 시간 ↑ → 성적 ↑</li>
<li>예: 광고비 ↑ → 매출 ↑</li>
</ul>
</div>
<div class="compare-item">
<h4>음의 상관관계</h4>
<p>한 변수가 증가할 때 다른 변수가 감소하는 관계</p>
<ul>
<li>상관계수: -1 ~ 0</li>
<li>예: 운동량 ↑ → 체중 ↓</li>
<li>예: 결석 횟수 ↑ → 성적 ↓</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>주의: 상관관계 ≠ 인과관계</strong><br/>
두 변수 사이에 상관관계가 있다고 해서 하나가 다른 하나의 원인인 것은 아닙니다. 예를 들어, "아이스크림 판매량"과 "익사 사고 수"는 높은 양의 상관관계를 보이지만, 이는 둘 다 "여름(기온)"이라는 제3의 변수에 의한 것입니다. 이를 허위 상관(Spurious Correlation)이라 합니다.
</div>

<h3>분석의 4단계</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>기술적 분석</strong><br/>What happened?<br/>과거 데이터 요약</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>진단적 분석</strong><br/>Why did it happen?<br/>원인 분석</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>예측적 분석</strong><br/>What will happen?<br/>미래 예측 (AI 활용)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>처방적 분석</strong><br/>What should we do?<br/>최적 행동 제안</div>
</div>
    `},{id:1005,chapter_id:10,title:"10.5 데이터 시각화",sort_order:5,content:`
<h3>데이터 시각화의 중요성</h3>
<p>데이터 시각화(Data Visualization)는 데이터를 그래프, 차트, 지도 등 시각적 형태로 표현하여 복잡한 정보를 직관적으로 이해할 수 있도록 하는 기술입니다. 인간의 뇌는 텍스트보다 시각적 정보를 약 6만 배 빠르게 처리하기 때문에, 효과적인 시각화는 데이터 커뮤니케이션의 핵심입니다.</p>

<h3>시각화 유형별 가이드</h3>
<table>
<thead>
<tr><th>시각화 유형</th><th>사용 목적</th><th>적합한 데이터</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>막대 그래프<br/>(Bar Chart)</td><td>범주별 값 비교</td><td>카테고리별 수량/금액</td><td>항목이 너무 많으면 가독성 저하</td></tr>
<tr><td>선 그래프<br/>(Line Chart)</td><td>시간에 따른 추세 파악</td><td>시계열 데이터</td><td>시간 간격의 일관성 유지</td></tr>
<tr><td>원형 그래프<br/>(Pie Chart)</td><td>전체 대비 비율 표시</td><td>구성 비율 데이터</td><td>5~7개 이내 항목 권장</td></tr>
<tr><td>산점도<br/>(Scatter Plot)</td><td>두 변수 간 관계 파악</td><td>두 연속형 변수</td><td>데이터 포인트 과밀 시 처리 필요</td></tr>
<tr><td>히트맵<br/>(Heat Map)</td><td>값의 크기를 색상으로 표현</td><td>행렬 데이터, 상관관계</td><td>적절한 색상 스케일 선택</td></tr>
<tr><td>박스플롯<br/>(Box Plot)</td><td>분포와 이상값 파악</td><td>그룹별 연속형 데이터</td><td>데이터 수가 적으면 부적절</td></tr>
<tr><td>히스토그램<br/>(Histogram)</td><td>분포 형태 파악</td><td>연속형 데이터의 빈도</td><td>적절한 구간(bin) 설정 필요</td></tr>
</tbody>
</table>

<h3>좋은 시각화의 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>명확성 (Clarity)</h4>
<ul>
<li>제목과 축 레이블을 명확히 표시</li>
<li>범례를 적절히 배치</li>
<li>불필요한 장식(chartjunk) 제거</li>
<li>하나의 차트에 하나의 메시지 전달</li>
</ul>
</div>
<div class="compare-item">
<h4>정확성 (Accuracy)</h4>
<ul>
<li>축의 시작점을 0으로 설정 (막대 그래프)</li>
<li>비례를 왜곡하지 않기</li>
<li>데이터 출처와 기준 시점 명시</li>
<li>오차 범위나 신뢰구간 표시</li>
</ul>
</div>
</div>

<h3>주요 시각화 도구</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>기초 도구</strong><br/>Excel<br/>Google Sheets<br/>한글/파워포인트</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>전문 도구</strong><br/>Tableau<br/>Power BI<br/>Looker Studio</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>프로그래밍</strong><br/>Python (Matplotlib, Seaborn)<br/>R (ggplot2)<br/>JavaScript (D3.js)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 기반</strong><br/>자연어로 차트 생성<br/>자동 시각화 추천<br/>인사이트 자동 탐지</div>
</div>

<div class="info-box warning">
<strong>시각화의 함정: 데이터 왜곡</strong><br/>
시각화는 데이터를 설득력 있게 전달하지만, 의도적 또는 비의도적으로 데이터를 왜곡할 수 있습니다. Y축 절단, 비율 왜곡, 부적절한 색상 사용, 선택적 데이터 표시 등은 대표적인 시각화 왜곡 기법입니다. 비판적 시각으로 시각화를 해석하는 능력이 데이터 리터러시의 핵심입니다.
</div>
    `},{id:1006,chapter_id:10,title:"10.6 데이터 기반 의사결정",sort_order:6,content:`
<h3>데이터 기반 의사결정(Data-Driven Decision Making)</h3>
<p>데이터 기반 의사결정(DDDM)은 직관이나 경험 대신 객관적인 데이터 분석에 근거하여 비즈니스 및 조직 의사결정을 내리는 접근법입니다. 디지털 전환 시대에 조직의 경쟁력을 좌우하는 핵심 역량으로 자리잡고 있습니다.</p>

<div class="info-box">
<strong>데이터 기반 의사결정의 가치</strong><br/>
MIT 슬론 경영대학원의 연구에 따르면, 데이터 기반 의사결정을 실천하는 기업은 그렇지 않은 기업에 비해 생산성이 5~6% 높고, 수익성도 유의미하게 우수한 것으로 나타났습니다.
</div>

<h3>데이터 기반 의사결정 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1단계</strong><br/>문제 정의<br/>의사결정 목표 설정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2단계</strong><br/>관련 데이터<br/>수집 및 준비</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3단계</strong><br/>데이터 분석<br/>인사이트 도출</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4단계</strong><br/>의사결정 실행<br/>결과 모니터링</div>
</div>

<h3>KPI(핵심 성과 지표)</h3>
<p>KPI(Key Performance Indicator)는 조직의 목표 달성 정도를 측정하는 핵심 지표입니다. 데이터 기반 의사결정에서 KPI는 성과를 객관적으로 평가하고 개선 방향을 제시하는 나침반 역할을 합니다.</p>

<table>
<thead>
<tr><th>분야</th><th>주요 KPI</th><th>설명</th></tr>
</thead>
<tbody>
<tr><td>마케팅</td><td>고객 획득 비용(CAC), 전환율, ROI</td><td>마케팅 활동의 효율성과 효과성 측정</td></tr>
<tr><td>영업</td><td>매출 성장률, 고객 이탈률, 평균 거래 규모</td><td>영업 성과와 고객 관계 관리 수준 파악</td></tr>
<tr><td>운영</td><td>생산성, 불량률, 가동률</td><td>운영 효율성과 품질 수준 측정</td></tr>
<tr><td>인사</td><td>이직률, 직원 만족도, 교육 ROI</td><td>인적 자원 관리의 효과성 평가</td></tr>
<tr><td>교육</td><td>학습 완료율, 성취도, 만족도</td><td>교육 프로그램의 효과 측정</td></tr>
</tbody>
</table>

<h3>직관 vs 데이터 기반 의사결정</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>직관 기반 의사결정</h4>
<ul>
<li>경험과 감(感)에 의존</li>
<li>빠른 결정 가능</li>
<li>개인 편향에 취약</li>
<li>재현성과 설명력이 낮음</li>
<li>복잡한 상황에서 한계</li>
</ul>
</div>
<div class="compare-item">
<h4>데이터 기반 의사결정</h4>
<ul>
<li>객관적 증거에 의존</li>
<li>분석 시간이 필요</li>
<li>편향을 줄일 수 있음</li>
<li>재현 가능하고 설명 가능</li>
<li>복잡한 패턴 발견 가능</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>주의: 데이터의 한계 인식</strong><br/>
데이터 기반 의사결정에도 한계가 있습니다. 데이터가 불완전할 수 있고, 과거 데이터가 미래를 보장하지 않으며, 수량화하기 어려운 가치(창의성, 기업 문화)도 있습니다. 최선의 의사결정은 데이터 분석과 인간의 판단력, 맥락 이해를 결합하는 것입니다.
</div>
    `},{id:1007,chapter_id:10,title:"10.7 데이터 품질과 거버넌스",sort_order:7,content:`
<h3>데이터 품질(Data Quality)</h3>
<p>데이터 품질은 데이터가 의도된 용도에 얼마나 적합한지를 나타내는 척도입니다. 아무리 정교한 분석 도구와 AI 모델을 사용하더라도, 기반이 되는 데이터의 품질이 낮으면 신뢰할 수 있는 결과를 얻을 수 없습니다.</p>

<h3>데이터 품질의 6대 차원</h3>
<table>
<thead>
<tr><th>품질 차원</th><th>설명</th><th>측정 예시</th><th>낮은 품질의 영향</th></tr>
</thead>
<tbody>
<tr><td>정확성<br/>(Accuracy)</td><td>데이터가 현실을 정확히 반영하는 정도</td><td>오류율, 불일치율</td><td>잘못된 분석 결과와 의사결정</td></tr>
<tr><td>완전성<br/>(Completeness)</td><td>필요한 데이터가 빠짐없이 존재하는 정도</td><td>결측값 비율</td><td>편향된 분석, 불완전한 인사이트</td></tr>
<tr><td>일관성<br/>(Consistency)</td><td>동일 데이터가 여러 시스템에서 일치하는 정도</td><td>데이터 충돌 건수</td><td>혼란, 신뢰 저하, 중복 작업</td></tr>
<tr><td>적시성<br/>(Timeliness)</td><td>데이터가 필요한 시점에 사용 가능한 정도</td><td>데이터 업데이트 주기</td><td>시의성 없는 의사결정</td></tr>
<tr><td>유효성<br/>(Validity)</td><td>데이터가 정해진 규칙과 형식에 맞는 정도</td><td>형식 오류율</td><td>시스템 오류, 처리 실패</td></tr>
<tr><td>고유성<br/>(Uniqueness)</td><td>중복 데이터가 없는 정도</td><td>중복 레코드 비율</td><td>과대/과소 집계, 비용 낭비</td></tr>
</tbody>
</table>

<h3>데이터 거버넌스(Data Governance)</h3>
<p>데이터 거버넌스는 조직 내 데이터의 수집, 저장, 활용, 폐기 등 전체 생애주기를 체계적으로 관리하는 정책, 절차, 조직 체계를 말합니다.</p>

<div class="compare-grid">
<div class="compare-item">
<h4>데이터 거버넌스의 구성 요소</h4>
<ul>
<li><strong>정책과 표준</strong>: 데이터 관리 규칙과 품질 기준 정의</li>
<li><strong>조직과 역할</strong>: 데이터 소유자, 관리자, 사용자 역할 명확화</li>
<li><strong>프로세스</strong>: 데이터 수집, 가공, 활용, 폐기 절차</li>
<li><strong>기술</strong>: 데이터 카탈로그, 메타데이터 관리, 보안 도구</li>
</ul>
</div>
<div class="compare-item">
<h4>데이터 거버넌스의 목표</h4>
<ul>
<li><strong>가용성</strong>: 필요한 데이터를 쉽게 찾고 사용할 수 있도록</li>
<li><strong>무결성</strong>: 데이터의 정확성과 일관성 유지</li>
<li><strong>보안성</strong>: 무단 접근과 유출 방지</li>
<li><strong>규제 준수</strong>: 개인정보보호법 등 법적 요구사항 충족</li>
</ul>
</div>
</div>

<h3>데이터 생애주기 관리</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>생성/수집</strong><br/>데이터 발생<br/>수집 계획</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>저장/관리</strong><br/>안전한 저장<br/>접근 권한 관리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>활용/분석</strong><br/>분석 및 활용<br/>가치 창출</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>보관/폐기</strong><br/>보존 기간 관리<br/>안전한 폐기</div>
</div>

<div class="info-box">
<strong>데이터 품질의 비용</strong><br/>
IBM의 연구에 따르면, 미국 기업들이 데이터 품질 문제로 인해 연간 약 3.1조 달러의 비용을 지출하고 있습니다. 데이터 품질 문제는 발견 시점이 늦어질수록 수정 비용이 기하급수적으로 증가하므로, 초기 단계에서의 품질 관리가 매우 중요합니다.
</div>
    `},{id:1008,chapter_id:10,title:"10.8 개인 데이터 관리",sort_order:8,content:`
<h3>개인 데이터와 디지털 발자국</h3>
<p>디지털 시대에 우리는 매일 방대한 양의 개인 데이터를 생성하고 있습니다. 웹 검색, SNS 활동, 온라인 쇼핑, 위치 정보 등 우리의 디지털 활동은 모두 데이터로 기록되며, 이를 '디지털 발자국(Digital Footprint)'이라 합니다.</p>

<h3>디지털 발자국의 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>능동적 발자국 (Active Footprint)</h4>
<p>사용자가 의도적으로 남기는 데이터</p>
<ul>
<li>SNS 게시물, 댓글, 좋아요</li>
<li>이메일, 메시지</li>
<li>온라인 회원 가입 정보</li>
<li>블로그 글, 리뷰 작성</li>
<li>온라인 설문 응답</li>
</ul>
</div>
<div class="compare-item">
<h4>수동적 발자국 (Passive Footprint)</h4>
<p>사용자의 인식 없이 자동 수집되는 데이터</p>
<ul>
<li>웹사이트 방문 기록, 쿠키</li>
<li>IP 주소, 기기 정보</li>
<li>위치 추적 데이터</li>
<li>앱 사용 패턴</li>
<li>검색 기록</li>
</ul>
</div>
</div>

<h3>개인정보 보호 법규</h3>
<table>
<thead>
<tr><th>법규</th><th>적용 지역</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>GDPR</td><td>EU</td><td>정보 주체의 권리 강화, 동의 원칙, 잊힐 권리, 데이터 이동성</td></tr>
<tr><td>개인정보보호법</td><td>한국</td><td>개인정보 처리 원칙, 정보 주체 권리, 안전성 확보 의무</td></tr>
<tr><td>CCPA/CPRA</td><td>미국 캘리포니아</td><td>소비자 프라이버시 권리, 데이터 판매 거부권</td></tr>
<tr><td>PIPL</td><td>중국</td><td>개인정보 처리 동의, 국외 이전 제한</td></tr>
</tbody>
</table>

<h3>개인 데이터 보호 실천 가이드</h3>
<ol>
<li><strong>개인정보 최소 제공 원칙</strong>: 서비스 이용에 꼭 필요한 정보만 제공하고, 선택 항목은 가급적 입력하지 않습니다.</li>
<li><strong>비밀번호 관리</strong>: 서비스마다 다른 강력한 비밀번호를 사용하고, 비밀번호 관리자(Password Manager)를 활용합니다.</li>
<li><strong>2단계 인증 활성화</strong>: 중요한 계정에는 반드시 2단계 인증(2FA)을 설정합니다.</li>
<li><strong>앱 권한 관리</strong>: 설치된 앱의 위치, 카메라, 연락처 등 접근 권한을 정기적으로 점검합니다.</li>
<li><strong>개인정보 처리방침 확인</strong>: 새로운 서비스 가입 시 개인정보가 어떻게 사용되는지 확인합니다.</li>
</ol>

<div class="info-box">
<strong>AI 서비스와 개인 데이터</strong><br/>
AI 서비스를 사용할 때 입력하는 데이터(프롬프트)도 주의가 필요합니다. 일부 AI 서비스는 사용자 입력을 모델 학습에 활용할 수 있으므로, 개인 식별 정보, 업무 기밀, 건강 정보 등 민감한 데이터 입력은 자제해야 합니다. 서비스의 데이터 처리 정책을 반드시 확인하세요.
</div>

<h3>데이터 주체의 주요 권리</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>열람권</strong><br/>내 데이터를<br/>확인할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>정정권</strong><br/>잘못된 데이터를<br/>수정할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>삭제권</strong><br/>불필요한 데이터의<br/>삭제를 요구할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이동권</strong><br/>내 데이터를 다른<br/>서비스로 옮길 권리</div>
</div>
    `},{id:1009,chapter_id:10,title:"10.9 학습 정리",sort_order:9,content:`
<h3>Chapter 10 학습 정리: 데이터 리터러시</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
데이터 리터러시는 AI 시대의 필수 역량으로, 데이터를 읽고, 분석하고, 활용하며, 윤리적으로 관리하는 포괄적인 능력입니다. 데이터의 유형과 구조를 이해하고, 올바른 수집-분석-시각화-의사결정 과정을 통해 데이터의 가치를 극대화할 수 있습니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>데이터 리터러시</td><td>데이터를 읽고, 활용하고, 분석하며, 근거로 논증하는 4가지 역량. 개인, 직업, 사회 모든 차원에서 중요합니다.</td></tr>
<tr><td>데이터 유형</td><td>정형/반정형/비정형, 질적/양적, 1차/2차 등 다양한 분류 기준이 존재하며, 유형에 따라 처리 방법이 달라집니다.</td></tr>
<tr><td>데이터 전처리</td><td>원시 데이터를 분석 가능한 형태로 변환하는 과정. 정제, 변환, 통합, 축소 단계를 거칩니다.</td></tr>
<tr><td>데이터 분석</td><td>기술 통계(평균, 중앙값, 표준편차)와 상관 분석이 기초이며, 기술적-진단적-예측적-처방적 분석 4단계가 있습니다.</td></tr>
<tr><td>데이터 시각화</td><td>데이터를 시각적으로 표현하여 직관적 이해를 돕는 기술. 명확성과 정확성이 핵심 원칙입니다.</td></tr>
<tr><td>데이터 기반 의사결정</td><td>객관적 데이터 분석에 근거한 의사결정 방식. KPI를 통해 성과를 측정하고 개선합니다.</td></tr>
<tr><td>데이터 품질과 거버넌스</td><td>6대 품질 차원(정확성, 완전성, 일관성, 적시성, 유효성, 고유성)과 체계적 데이터 관리 체계입니다.</td></tr>
<tr><td>개인 데이터 관리</td><td>디지털 발자국의 이해, 개인정보보호법 인지, 실천적 보호 전략이 필요합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>데이터 리터러시</strong>: 데이터를 읽고, 분석하고, 활용하며, 논증하는 능력</li>
<li><strong>정형 데이터</strong>: 행과 열로 구조화된 표 형태의 데이터</li>
<li><strong>비정형 데이터</strong>: 미리 정해진 구조 없이 텍스트, 이미지, 영상 등의 형태를 가진 데이터</li>
<li><strong>전처리</strong>: 원시 데이터를 분석 가능한 형태로 정제하고 변환하는 과정</li>
<li><strong>상관관계</strong>: 두 변수 간의 통계적 관련성 (인과관계와 구별)</li>
<li><strong>KPI</strong>: 핵심 성과 지표 (Key Performance Indicator)</li>
<li><strong>데이터 거버넌스</strong>: 조직 내 데이터 관리 정책, 절차, 체계</li>
<li><strong>디지털 발자국</strong>: 디지털 활동으로 남는 데이터 흔적</li>
<li><strong>GDPR</strong>: EU 일반 데이터 보호 규정</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>한국데이터산업진흥원 - 데이터 품질 관리 가이드</li>
<li>공공데이터포털 (data.go.kr)</li>
<li>통계교육원 - 통계 리터러시 자료</li>
<li>개인정보보호위원회 - 개인정보보호 포털</li>
</ul>
    `},{id:1010,chapter_id:10,title:"10.10 학습 확인 문제",sort_order:10,content:`
<h3>Chapter 10 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 데이터 리터러시에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. 데이터 유형 분류</h4>
<div class="info-box">
<p>다음 중 <strong>비정형 데이터</strong>에 해당하는 것은?</p>
<ol type="a">
<li>엑셀로 정리된 고객 정보 테이블</li>
<li>관계형 데이터베이스의 매출 데이터</li>
<li>소셜 미디어에 게시된 텍스트와 이미지</li>
<li>JSON 형식의 API 응답 데이터</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>소셜 미디어 게시물(텍스트, 이미지)은 미리 정해진 구조 없이 자유 형식으로 생성되는 비정형 데이터입니다. a와 b는 정형 데이터, d는 반정형 데이터에 해당합니다.</p>
</details>
</div>

<h4>문제 2. 데이터 전처리</h4>
<div class="info-box">
<p>"Garbage In, Garbage Out"의 의미로 가장 적절한 것은?</p>
<ol type="a">
<li>컴퓨터 하드웨어가 오래되면 분석 결과가 나빠진다</li>
<li>입력 데이터의 품질이 낮으면 분석 결과도 신뢰할 수 없다</li>
<li>가비지 컬렉션을 수행하지 않으면 시스템이 느려진다</li>
<li>불필요한 데이터를 삭제해야 저장 공간을 절약할 수 있다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>"Garbage In, Garbage Out"은 입력 데이터의 품질이 낮으면 아무리 좋은 분석 도구를 사용하더라도 신뢰할 수 있는 결과를 얻을 수 없다는 데이터 분석의 기본 원칙입니다.</p>
</details>
</div>

<h4>문제 3. 상관관계와 인과관계</h4>
<div class="info-box">
<p>"아이스크림 판매량이 증가하면 익사 사고도 증가한다"에 대한 올바른 해석은?</p>
<ol type="a">
<li>아이스크림이 익사의 원인이므로 아이스크림 판매를 규제해야 한다</li>
<li>익사 사고가 아이스크림 소비를 촉진하는 것이다</li>
<li>두 변수 모두 '기온'이라는 제3의 변수에 영향을 받는 허위 상관이다</li>
<li>통계적 오류이므로 이 데이터는 무시해야 한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>이것은 허위 상관(Spurious Correlation)의 대표적인 사례입니다. 아이스크림 판매와 익사 사고 모두 '여름 기온'이라는 공통 원인에 의해 함께 증가하는 것이며, 두 변수 사이에 직접적인 인과관계는 없습니다.</p>
</details>
</div>

<h4>문제 4. 데이터 시각화</h4>
<div class="info-box">
<p>시간에 따른 매출 추이를 파악하기에 가장 적절한 시각화 유형은?</p>
<ol type="a">
<li>원형 그래프 (Pie Chart)</li>
<li>선 그래프 (Line Chart)</li>
<li>히스토그램 (Histogram)</li>
<li>산점도 (Scatter Plot)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>선 그래프는 시간에 따른 데이터의 변화 추세를 파악하는 데 가장 적합한 시각화 유형입니다. 원형 그래프는 비율, 히스토그램은 분포, 산점도는 두 변수 간 관계 파악에 주로 사용됩니다.</p>
</details>
</div>

<h4>문제 5. 개인 데이터 관리</h4>
<div class="info-box">
<p>다음 중 개인 데이터 보호를 위한 올바른 행동이 <strong>아닌</strong> 것은?</p>
<ol type="a">
<li>서비스마다 다른 강력한 비밀번호 사용</li>
<li>중요한 계정에 2단계 인증(2FA) 설정</li>
<li>AI 챗봇에 주민등록번호를 입력하여 본인 인증</li>
<li>설치된 앱의 접근 권한을 정기적으로 점검</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI 챗봇에 주민등록번호와 같은 민감한 개인정보를 입력하는 것은 매우 위험한 행동입니다. AI 서비스의 데이터가 학습에 활용되거나 유출될 수 있으므로, 민감한 개인정보는 절대로 AI 서비스에 입력해서는 안 됩니다.</p>
</details>
</div>
    `}],aI=[{id:1101,chapter_id:11,title:"11.1 AI와 직업의 변화",sort_order:1,content:`
<h3>AI가 바꾸는 직업 세계</h3>
<p>인공지능은 산업혁명 이래 가장 큰 직업 세계의 변화를 이끌고 있습니다. 자동화, 지능화, 디지털 전환이 가속화되면서 기존 직업의 성격이 변하고, 새로운 형태의 일자리가 등장하고 있습니다. 세계경제포럼(WEF)은 2025년까지 AI로 인해 8,500만 개의 일자리가 사라지지만 9,700만 개의 새로운 일자리가 생길 것으로 전망했습니다.</p>

<div class="info-box">
<strong>핵심 트렌드</strong><br/>
AI는 직업을 단순히 '대체'하는 것이 아니라, 직업의 '구성 요소'를 변화시킵니다. 대부분의 직업에서 일부 업무는 자동화되고, 인간은 더 높은 가치를 창출하는 업무에 집중하게 됩니다. 이를 '업무 재구성(Task Redesign)'이라 합니다.
</div>

<h3>산업혁명별 직업 변화 비교</h3>
<table>
<thead>
<tr><th>시대</th><th>핵심 기술</th><th>직업 변화 양상</th><th>새로운 직업 유형</th></tr>
</thead>
<tbody>
<tr><td>1차 산업혁명<br/>(18세기)</td><td>증기기관</td><td>수공업 → 공장 노동</td><td>공장 노동자, 기계 기술자</td></tr>
<tr><td>2차 산업혁명<br/>(19-20세기)</td><td>전기, 대량생산</td><td>가내공업 → 대규모 제조업</td><td>조립 라인 작업자, 전기 기사</td></tr>
<tr><td>3차 산업혁명<br/>(20세기 후반)</td><td>컴퓨터, 인터넷</td><td>아날로그 → 디지털 업무</td><td>프로그래머, 웹 디자이너</td></tr>
<tr><td>4차 산업혁명<br/>(현재)</td><td>AI, 빅데이터, IoT</td><td>반복 업무 → AI 자동화</td><td>AI 엔지니어, 데이터 사이언티스트</td></tr>
</tbody>
</table>

<h3>AI 도입에 따른 직업 변화 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>업무 자동화</h4>
<p>반복적이고 규칙적인 업무가 AI로 대체되는 현상</p>
<ul>
<li>데이터 입력 및 처리</li>
<li>문서 분류 및 정리</li>
<li>기본적인 고객 응대</li>
<li>정형화된 보고서 작성</li>
</ul>
</div>
<div class="compare-item">
<h4>업무 증강</h4>
<p>AI가 인간의 능력을 확장하고 보완하는 형태</p>
<ul>
<li>AI 진단 보조 도구를 활용하는 의사</li>
<li>AI 법률 검색으로 생산성을 높이는 변호사</li>
<li>AI 디자인 도구로 창작하는 디자이너</li>
<li>AI 분석으로 인사이트를 얻는 마케터</li>
</ul>
</div>
<div class="compare-item">
<h4>업무 창출</h4>
<p>AI로 인해 완전히 새로운 형태의 업무가 생기는 현상</p>
<ul>
<li>AI 모델 훈련 및 평가</li>
<li>AI 윤리 심사 및 감사</li>
<li>AI 프롬프트 엔지니어링</li>
<li>인간-AI 협업 설계</li>
</ul>
</div>
</div>

<h4>주요 통계와 전망</h4>
<p>맥킨지 글로벌 연구소에 따르면, 현재 직업 활동의 약 60%에서 최소 30%의 업무가 AI로 자동화 가능합니다. 그러나 완전히 자동화 가능한 직업은 전체의 5% 미만입니다. 이는 대부분의 직업이 사라지는 것이 아니라 변화한다는 것을 의미합니다.</p>
    `},{id:1102,chapter_id:11,title:"11.2 AI가 대체하는 직업",sort_order:2,content:`
<h3>자동화 위험이 높은 직업</h3>
<p>AI와 자동화 기술의 발전으로 특정 유형의 직업은 상당 부분 자동화될 가능성이 높습니다. 어떤 직업이 위험한지 이해하고, 그에 따라 적절히 준비하는 것이 중요합니다.</p>

<h3>자동화 취약 업무의 특성</h3>
<div class="info-box">
<strong>자동화되기 쉬운 업무의 4가지 특성</strong><br/>
<ol>
<li><strong>반복적(Repetitive)</strong>: 동일한 작업을 반복 수행</li>
<li><strong>규칙적(Rule-based)</strong>: 명확한 규칙에 따라 처리</li>
<li><strong>예측 가능(Predictable)</strong>: 작업 환경과 결과가 예측 가능</li>
<li><strong>데이터 집약적(Data-intensive)</strong>: 대량의 데이터 처리 중심</li>
</ol>
</div>

<h3>직업군별 자동화 위험도</h3>
<table>
<thead>
<tr><th>직업군</th><th>자동화 위험도</th><th>영향받는 업무</th><th>변화 방향</th></tr>
</thead>
<tbody>
<tr><td>제조업 생산직</td><td>매우 높음</td><td>조립, 검수, 포장</td><td>로봇 감독, 품질 관리자로 전환</td></tr>
<tr><td>사무 행정직</td><td>높음</td><td>데이터 입력, 문서 처리, 일정 관리</td><td>전략 기획, 커뮤니케이션 중심으로 변화</td></tr>
<tr><td>금융 사무직</td><td>높음</td><td>회계 처리, 대출 심사, 보험 심사</td><td>컨설팅, 리스크 관리로 고도화</td></tr>
<tr><td>운송/물류</td><td>높음</td><td>화물 분류, 재고 관리, 경로 최적화</td><td>자율주행 관리, 물류 전략 수립</td></tr>
<tr><td>고객 서비스</td><td>중간~높음</td><td>FAQ 응대, 주문 처리, 기본 상담</td><td>복잡한 문제 해결, 감정 노동 중심</td></tr>
<tr><td>번역/통역</td><td>중간</td><td>일반 문서 번역, 자막 생성</td><td>고급 통번역, 문화적 맥락 해석</td></tr>
</tbody>
</table>

<h3>WEF 보고서의 주요 전망</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>빠르게 감소하는 직업</h4>
<ul>
<li>데이터 입력 사무원</li>
<li>경리 및 급여 관리 사무원</li>
<li>은행 창구 직원</li>
<li>우체국 직원</li>
<li>출납원 및 매표원</li>
<li>비서 및 행정 보조원</li>
</ul>
</div>
<div class="compare-item">
<h4>상대적으로 안전한 직업</h4>
<ul>
<li>돌봄 및 간호 전문가</li>
<li>교사 및 교육 전문가</li>
<li>사회복지사</li>
<li>예술가 및 공연 예술가</li>
<li>심리상담사</li>
<li>연구 과학자</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>중요한 시각: 직업이 아닌 업무가 대체된다</strong><br/>
자동화는 '직업' 단위가 아니라 '업무(task)' 단위로 발생합니다. 예를 들어, 의사라는 직업이 사라지는 것이 아니라, 영상 판독이나 데이터 분석 같은 특정 업무가 AI로 자동화되는 것입니다. 따라서 자신의 직업에서 AI로 대체될 수 있는 업무와 인간만이 할 수 있는 업무를 구분하여 역량을 개발하는 것이 핵심 전략입니다.
</div>

<h4>생성형 AI의 영향</h4>
<p>ChatGPT 등 생성형 AI의 등장으로 지식 노동(화이트칼라) 직업도 자동화 위험에 노출되었습니다. 글쓰기, 코딩, 디자인, 번역 등 이전에는 안전하다고 여겨졌던 창의적 업무도 AI의 영향을 받고 있어, 모든 직업군에서의 적응이 필요해졌습니다.</p>
    `},{id:1103,chapter_id:11,title:"11.3 AI가 만드는 새로운 직업",sort_order:3,content:`
<h3>AI 시대의 신직업</h3>
<p>AI 기술의 발전은 기존 직업을 변화시키는 동시에, 이전에는 존재하지 않았던 완전히 새로운 직업을 만들어내고 있습니다. 이러한 신직업은 AI 기술의 개발, 운영, 관리, 윤리적 활용 등 다양한 영역에서 등장하고 있습니다.</p>

<h3>AI 관련 신직업 분류</h3>
<table>
<thead>
<tr><th>분류</th><th>직업명</th><th>주요 역할</th><th>필요 역량</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">AI 기술 개발</td><td>AI/ML 엔지니어</td><td>AI 모델 설계, 학습, 배포</td><td>프로그래밍, 수학, 머신러닝</td></tr>
<tr><td>데이터 사이언티스트</td><td>데이터 분석, 모델링, 인사이트 도출</td><td>통계, 프로그래밍, 도메인 지식</td></tr>
<tr><td>MLOps 엔지니어</td><td>AI 모델의 운영 및 자동화 관리</td><td>DevOps, 클라우드, ML 파이프라인</td></tr>
<tr><td rowspan="3">AI 활용/운영</td><td>프롬프트 엔지니어</td><td>AI에 최적의 지시를 설계</td><td>언어 능력, 논리적 사고, AI 이해</td></tr>
<tr><td>AI 트레이너</td><td>AI 모델의 학습 데이터 생성 및 품질 관리</td><td>도메인 전문성, 데이터 라벨링</td></tr>
<tr><td>AI 제품 매니저</td><td>AI 기반 제품/서비스 기획 및 관리</td><td>기술 이해, 비즈니스 감각, UX</td></tr>
<tr><td rowspan="3">AI 거버넌스</td><td>AI 윤리 전문가</td><td>AI의 윤리적 개발과 사용 감독</td><td>윤리학, 법학, 기술 이해</td></tr>
<tr><td>AI 감사관</td><td>AI 시스템의 편향, 공정성, 안전성 검사</td><td>통계, 법규, 기술 감사</td></tr>
<tr><td>AI 정책 분석가</td><td>AI 관련 법규 분석 및 정책 제안</td><td>정책학, 기술 이해, 국제 관계</td></tr>
</tbody>
</table>

<h3>주목할 신직업 상세</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>프롬프트 엔지니어</h4>
<p>생성형 AI에게 최적의 결과를 이끌어내기 위한 프롬프트(지시문)를 설계하는 전문가입니다.</p>
<ul>
<li>AI의 능력과 한계를 깊이 이해</li>
<li>체계적인 프롬프트 설계 방법론 활용</li>
<li>다양한 분야(마케팅, 교육, 법률 등)에 특화</li>
<li>연봉: 해외 기준 $100K~$300K 수준</li>
</ul>
</div>
<div class="compare-item">
<h4>AI 윤리 전문가</h4>
<p>AI 시스템이 윤리적으로 개발되고 사용되도록 감독하고 가이드라인을 제시하는 전문가입니다.</p>
<ul>
<li>AI 편향과 차별 방지 전략 수립</li>
<li>AI 윤리 정책 및 가이드라인 개발</li>
<li>AI 영향 평가(Impact Assessment) 수행</li>
<li>철학, 법학, 기술의 융합 역량 필요</li>
</ul>
</div>
</div>

<h3>AI 시대 직업의 성장 추세</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>데이터 관련</strong><br/>데이터 엔지니어<br/>데이터 분석가<br/>데이터 아키텍트</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 개발</strong><br/>AI 엔지니어<br/>NLP 전문가<br/>컴퓨터 비전 전문가</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 운영</strong><br/>MLOps 엔지니어<br/>AI 인프라 관리자<br/>AI QA 엔지니어</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 거버넌스</strong><br/>AI 윤리 전문가<br/>AI 감사관<br/>AI 법률 전문가</div>
</div>

<div class="info-box">
<strong>융합형 인재의 부상</strong><br/>
AI 시대에는 순수 기술 전문가보다 AI 기술과 특정 도메인(의료, 법률, 교육, 금융 등)을 결합한 '융합형 인재'의 수요가 빠르게 증가하고 있습니다. 예를 들어, 의료 AI 전문가(의학 + AI), 법률 AI 전문가(법학 + AI), 교육 AI 전문가(교육학 + AI) 등이 대표적입니다. 자신의 전문 분야에 AI 역량을 더하는 것이 가장 효과적인 커리어 전략이 될 수 있습니다.
</div>
    `},{id:1104,chapter_id:11,title:"11.4 AI 시대 필수 역량",sort_order:4,content:`
<h3>AI 시대에 필요한 핵심 역량</h3>
<p>AI가 점점 더 많은 업무를 수행하게 되면서, 인간만이 가진 고유한 능력의 가치가 더욱 높아지고 있습니다. AI 시대에 성공하기 위해서는 기술적 역량과 인간적 역량의 균형 잡힌 개발이 필요합니다.</p>

<h3>AI 시대 역량 프레임워크</h3>
<table>
<thead>
<tr><th>역량 분류</th><th>세부 역량</th><th>설명</th><th>중요도</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">디지털 역량</td><td>AI 리터러시</td><td>AI의 원리, 활용법, 한계를 이해하고 활용하는 능력</td><td>필수</td></tr>
<tr><td>데이터 리터러시</td><td>데이터를 읽고, 분석하고, 활용하는 능력</td><td>필수</td></tr>
<tr><td>디지털 도구 활용</td><td>다양한 디지털 도구를 효과적으로 사용하는 능력</td><td>필수</td></tr>
<tr><td rowspan="3">인지적 역량</td><td>비판적 사고</td><td>정보와 주장을 논리적으로 평가하고 판단하는 능력</td><td>매우 높음</td></tr>
<tr><td>창의적 사고</td><td>새로운 아이디어와 해결책을 만들어내는 능력</td><td>매우 높음</td></tr>
<tr><td>복잡한 문제 해결</td><td>다양한 요소가 얽힌 문제를 체계적으로 해결하는 능력</td><td>매우 높음</td></tr>
<tr><td rowspan="3">사회적 역량</td><td>소통과 협업</td><td>효과적으로 의사소통하고 팀에서 협력하는 능력</td><td>매우 높음</td></tr>
<tr><td>감성 지능</td><td>자신과 타인의 감정을 이해하고 관리하는 능력</td><td>높음</td></tr>
<tr><td>리더십</td><td>비전을 제시하고 구성원을 이끄는 능력</td><td>높음</td></tr>
</tbody>
</table>

<h3>AI가 대체하기 어려운 인간 고유 능력</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>창의성과 상상력</h4>
<ul>
<li>완전히 새로운 개념과 아이디어 창출</li>
<li>예술적 표현과 미적 감각</li>
<li>혁신적 문제 해결 방법 발상</li>
<li>AI가 모방은 가능하지만 진정한 창의성과는 차이</li>
</ul>
</div>
<div class="compare-item">
<h4>공감과 감성 지능</h4>
<ul>
<li>타인의 감정을 진정으로 이해하고 공감</li>
<li>복잡한 인간관계에서의 갈등 해결</li>
<li>상황에 맞는 적절한 감정적 반응</li>
<li>돌봄, 상담, 교육에서의 인간적 유대</li>
</ul>
</div>
<div class="compare-item">
<h4>윤리적 판단력</h4>
<ul>
<li>도덕적 딜레마에 대한 가치 판단</li>
<li>사회적 맥락을 고려한 결정</li>
<li>공정성과 정의에 대한 감각</li>
<li>AI는 규칙을 따를 뿐 진정한 윤리적 판단 불가</li>
</ul>
</div>
</div>

<h3>평생 학습의 중요성</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>인식</strong><br/>변화하는 환경과<br/>필요 역량 파악</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>학습</strong><br/>온라인/오프라인<br/>다양한 학습 경로</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>적용</strong><br/>학습한 내용을<br/>업무에 실천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>성찰</strong><br/>결과를 평가하고<br/>다음 학습 계획</div>
</div>

<div class="info-box">
<strong>T자형 인재에서 π자형 인재로</strong><br/>
과거에는 하나의 깊은 전문성과 넓은 일반 지식을 가진 'T자형 인재'가 이상적이었습니다. AI 시대에는 여기에 AI 활용 능력이라는 두 번째 깊이가 추가된 'π(파이)자형 인재'가 요구됩니다. 자신의 전문 분야(첫 번째 기둥)에 AI 역량(두 번째 기둥)을 더하고, 다양한 분야에 대한 폭넓은 이해(가로 막대)를 갖추는 것이 AI 시대의 이상적인 인재상입니다.
</div>
    `},{id:1105,chapter_id:11,title:"11.5 업무에서의 AI 활용",sort_order:5,content:`
<h3>업무 현장의 AI 도구</h3>
<p>AI는 이미 다양한 업무 영역에서 생산성을 높이고 업무 방식을 혁신하고 있습니다. 일정 관리부터 글쓰기, 데이터 분석, 고객 응대까지, AI 도구를 효과적으로 활용하면 업무 효율을 크게 향상시킬 수 있습니다.</p>

<h3>업무 영역별 AI 활용 사례</h3>
<table>
<thead>
<tr><th>업무 영역</th><th>AI 활용 사례</th><th>대표 도구</th><th>효과</th></tr>
</thead>
<tbody>
<tr><td>문서 작성</td><td>보고서 초안 작성, 이메일 작성, 회의록 정리</td><td>ChatGPT, Claude, Copilot</td><td>작성 시간 50~70% 단축</td></tr>
<tr><td>데이터 분석</td><td>데이터 정리, 패턴 발견, 시각화, 예측</td><td>Copilot in Excel, ChatGPT 코드 분석</td><td>분석 정확도 및 속도 향상</td></tr>
<tr><td>일정 관리</td><td>자동 일정 조정, 우선순위 설정, 리마인더</td><td>Microsoft Copilot, Google AI</td><td>시간 관리 효율성 증가</td></tr>
<tr><td>디자인</td><td>이미지 생성, 레이아웃 제안, 색상 추천</td><td>Midjourney, DALL-E, Canva AI</td><td>디자인 반복 시간 단축</td></tr>
<tr><td>프로그래밍</td><td>코드 생성, 디버깅, 코드 리뷰, 문서화</td><td>GitHub Copilot, Cursor, Claude</td><td>개발 생산성 30~50% 향상</td></tr>
<tr><td>고객 서비스</td><td>자동 응답, 문의 분류, 감정 분석</td><td>AI 챗봇, 감성 분석 도구</td><td>응답 시간 대폭 단축</td></tr>
<tr><td>마케팅</td><td>타겟팅, 카피 생성, A/B 테스트, 트렌드 분석</td><td>Jasper, Copy.ai, 분석 도구</td><td>마케팅 ROI 개선</td></tr>
</tbody>
</table>

<h3>효과적인 AI 활용 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI 활용이 효과적인 업무</h4>
<ul>
<li>대량의 정보를 빠르게 정리하고 요약하는 업무</li>
<li>반복적인 패턴이 있는 업무</li>
<li>초안 작성이나 아이디어 브레인스토밍</li>
<li>데이터 분석과 시각화</li>
<li>번역, 교정, 형식 변환</li>
</ul>
</div>
<div class="compare-item">
<h4>인간이 직접 해야 하는 업무</h4>
<ul>
<li>최종 의사결정과 판단</li>
<li>인간관계와 팀 협업</li>
<li>전략적 기획과 비전 수립</li>
<li>감정적 공감이 필요한 고객 응대</li>
<li>윤리적 판단이 필요한 업무</li>
</ul>
</div>
</div>

<h3>업무 AI 활용 워크플로우</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1. 업무 파악</strong><br/>AI에 적합한<br/>업무 식별</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2. 도구 선택</strong><br/>목적에 맞는<br/>AI 도구 선택</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3. 프롬프트 작성</strong><br/>명확하고 구체적인<br/>지시 작성</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4. 검토 및 수정</strong><br/>AI 결과를<br/>비판적으로 검토</div>
</div>

<div class="info-box warning">
<strong>업무 AI 활용 시 주의사항</strong><br/>
<ul>
<li>회사의 AI 사용 정책을 반드시 확인하고 준수하세요.</li>
<li>기밀 정보나 고객 개인정보를 외부 AI 서비스에 입력하지 마세요.</li>
<li>AI 결과물을 무비판적으로 사용하지 말고, 반드시 검토 후 활용하세요.</li>
<li>AI가 생성한 코드나 문서는 반드시 사람이 검증해야 합니다.</li>
</ul>
</div>
    `},{id:1106,chapter_id:11,title:"11.6 일상생활의 AI",sort_order:6,content:`
<h3>생활 속 AI 기술</h3>
<p>AI는 이미 우리의 일상생활 깊숙이 들어와 있습니다. 아침에 일어나서 잠들기까지, 우리는 수많은 AI 기술의 도움을 받고 있습니다. 많은 경우 AI가 작동하고 있다는 사실을 인식하지 못할 정도로 자연스럽게 스며들어 있습니다.</p>

<h3>일상 영역별 AI 활용</h3>
<table>
<thead>
<tr><th>영역</th><th>AI 활용 사례</th><th>활용 기술</th></tr>
</thead>
<tbody>
<tr><td>스마트폰</td><td>음성 비서(시리, 빅스비), 얼굴 인식 잠금, 사진 보정, 키보드 자동 완성</td><td>NLP, 컴퓨터 비전, 예측 모델</td></tr>
<tr><td>스마트 홈</td><td>AI 스피커, 스마트 온도 조절, 로봇 청소기, 스마트 조명</td><td>IoT, 음성 인식, 학습 알고리즘</td></tr>
<tr><td>엔터테인먼트</td><td>넷플릭스/유튜브 추천, 음악 추천, AI 게임 NPC, 콘텐츠 생성</td><td>추천 알고리즘, 강화학습</td></tr>
<tr><td>건강/웰니스</td><td>스마트워치 건강 모니터링, 운동 추천, 수면 분석, 식단 관리</td><td>센서 데이터 분석, 패턴 인식</td></tr>
<tr><td>이동/교통</td><td>내비게이션 경로 최적화, 실시간 교통 예측, 카풀 매칭</td><td>경로 최적화, 수요 예측</td></tr>
<tr><td>쇼핑</td><td>개인화 추천, 가격 비교, 가상 피팅, 챗봇 상담</td><td>추천 시스템, 컴퓨터 비전</td></tr>
<tr><td>금융</td><td>자동 투자(로보어드바이저), 이상 거래 탐지, 신용 평가</td><td>예측 모델, 이상 탐지</td></tr>
</tbody>
</table>

<h3>하루 일과 속의 AI</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>아침</strong><br/>AI 알람<br/>날씨 예측<br/>뉴스 맞춤 추천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>출퇴근</strong><br/>내비게이션 AI<br/>실시간 교통 분석<br/>자율주행 기능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>일상</strong><br/>번역 AI<br/>사진/영상 편집<br/>AI 쇼핑 추천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>저녁</strong><br/>콘텐츠 추천<br/>스마트 홈 제어<br/>수면 분석</div>
</div>

<h3>AI와 건강 관리</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인 건강 모니터링</h4>
<ul>
<li>스마트워치의 심박수, 혈중 산소 모니터링</li>
<li>수면 패턴 분석 및 수면 품질 개선 조언</li>
<li>운동량 추적 및 맞춤형 운동 프로그램</li>
<li>이상 징후 조기 감지 및 알림</li>
</ul>
</div>
<div class="compare-item">
<h4>의료 AI 서비스</h4>
<ul>
<li>AI 기반 증상 체커(초기 자가 진단)</li>
<li>피부 질환 AI 분석 앱</li>
<li>멘탈 헬스 AI 챗봇 상담</li>
<li>약물 상호작용 확인 앱</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>AI 추천의 필터 버블</strong><br/>
AI 추천 시스템은 사용자의 취향에 맞는 콘텐츠를 제공하지만, 이로 인해 '필터 버블(Filter Bubble)' 현상이 발생할 수 있습니다. 자신과 비슷한 의견, 비슷한 콘텐츠만 반복적으로 노출되면서 시야가 좁아지는 현상입니다. AI 추천에만 의존하지 않고, 의도적으로 다양한 관점과 콘텐츠를 탐색하는 노력이 필요합니다.
</div>
    `},{id:1107,chapter_id:11,title:"11.7 AI와 교육의 변화",sort_order:7,content:`
<h3>AI가 변혁하는 교육</h3>
<p>AI 기술은 교육 분야에 혁명적인 변화를 가져오고 있습니다. 개인화 학습, 지능형 튜터링 시스템, 자동 평가, 교육 데이터 분석 등을 통해 교육의 질과 접근성을 크게 향상시키고 있습니다.</p>

<h3>교육 AI의 주요 활용 영역</h3>
<table>
<thead>
<tr><th>영역</th><th>AI 활용 방식</th><th>효과</th><th>대표 사례</th></tr>
</thead>
<tbody>
<tr><td>개인화 학습<br/>(Personalized Learning)</td><td>학습자 수준에 맞는 맞춤형 콘텐츠 제공</td><td>학습 효과 향상, 이탈률 감소</td><td>Khan Academy (Khanmigo)</td></tr>
<tr><td>지능형 튜터링<br/>(Intelligent Tutoring)</td><td>AI가 1:1 개인 교사 역할 수행</td><td>즉각적 피드백, 24시간 학습 지원</td><td>Duolingo (AI 대화), ChatGPT</td></tr>
<tr><td>자동 평가<br/>(Auto Grading)</td><td>과제, 시험 답안 자동 채점 및 피드백</td><td>교사 부담 경감, 신속한 피드백</td><td>Gradescope, Turnitin</td></tr>
<tr><td>학습 분석<br/>(Learning Analytics)</td><td>학습 데이터 분석으로 위험 학생 조기 식별</td><td>중도 탈락 예방, 교육과정 개선</td><td>대학 LMS 분석 시스템</td></tr>
<tr><td>콘텐츠 생성<br/>(Content Creation)</td><td>교육 자료, 문제, 시뮬레이션 자동 생성</td><td>교사의 교재 개발 시간 절약</td><td>AI 기반 문제 생성 도구</td></tr>
</tbody>
</table>

<h3>AI 시대 교육 패러다임의 전환</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>전통적 교육</h4>
<ul>
<li>교사 중심의 일방향 강의</li>
<li>획일적인 교육과정과 진도</li>
<li>정기적인 시험으로 평가</li>
<li>교실 공간에 제한</li>
<li>지식 전달 중심</li>
</ul>
</div>
<div class="compare-item">
<h4>AI 기반 교육</h4>
<ul>
<li>학습자 중심의 상호작용적 학습</li>
<li>개인 맞춤형 학습 경로</li>
<li>실시간 형성 평가와 즉각 피드백</li>
<li>시간과 장소에 제한 없는 학습</li>
<li>역량 개발 및 문제 해결 중심</li>
</ul>
</div>
</div>

<h3>AI 교육 도구의 발전</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1세대</strong><br/>드릴 & 연습<br/>(반복 학습 소프트웨어)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2세대</strong><br/>적응형 학습<br/>(학습자 수준 조절)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3세대</strong><br/>지능형 튜터링<br/>(개인 맞춤 교수)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4세대</strong><br/>생성형 AI 튜터<br/>(자유로운 대화형 학습)</div>
</div>

<div class="info-box warning">
<strong>AI 교육 활용의 과제</strong><br/>
<ul>
<li><strong>학문적 정직성</strong>: AI를 이용한 과제 대필과 표절 문제</li>
<li><strong>비판적 사고 약화</strong>: AI에 지나치게 의존하면 스스로 사고하는 능력이 저하될 수 있음</li>
<li><strong>디지털 격차</strong>: AI 교육 도구에 대한 접근성 차이가 교육 불평등을 심화시킬 우려</li>
<li><strong>데이터 프라이버시</strong>: 미성년 학습자의 학습 데이터 보호 문제</li>
</ul>
</div>
    `},{id:1108,chapter_id:11,title:"11.8 AI 시대 커리어 전략",sort_order:8,content:`
<h3>AI 시대의 커리어 전략</h3>
<p>AI 기술의 발전은 직업 세계를 근본적으로 변화시키고 있습니다. 이 변화 속에서 경쟁력을 유지하고 성장하기 위해서는 전략적인 커리어 설계가 필요합니다. 단순히 AI를 두려워하는 것이 아니라, AI와 함께 성장하는 방법을 찾아야 합니다.</p>

<h3>커리어 전략 5단계 모델</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1. 진단</strong><br/>현재 역량 파악<br/>AI 영향도 분석</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2. 탐색</strong><br/>미래 수요 파악<br/>기회 영역 탐색</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3. 학습</strong><br/>필요 역량 개발<br/>AI 도구 습득</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4. 적용</strong><br/>실무에 AI 활용<br/>포트폴리오 구축</div>
</div>

<h3>직업 유형별 커리어 전략</h3>
<table>
<thead>
<tr><th>현재 직업 유형</th><th>AI 영향도</th><th>추천 전략</th><th>구체적 행동</th></tr>
</thead>
<tbody>
<tr><td>반복적 사무직</td><td>높음</td><td>디지털 전환 역량 강화</td><td>AI 도구 활용법 학습, 분석/기획 역량 개발</td></tr>
<tr><td>전문 지식직</td><td>중간</td><td>AI와 전문성 결합</td><td>AI를 활용한 업무 효율화, 도메인 전문성 심화</td></tr>
<tr><td>창의적 직업</td><td>중간</td><td>AI 도구를 창작에 활용</td><td>AI 생성 도구 숙달, 인간 고유 창의성 강화</td></tr>
<tr><td>대인 서비스직</td><td>낮음</td><td>인간적 가치 극대화</td><td>공감 능력, 커뮤니케이션 역량 심화</td></tr>
<tr><td>기술직</td><td>변동적</td><td>최신 기술 트렌드 추적</td><td>AI/ML 관련 기술 학습, 융합 역량 개발</td></tr>
</tbody>
</table>

<h3>AI 시대 핵심 커리어 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI를 활용하는 사람이 되라</h4>
<ul>
<li>AI를 경쟁자가 아닌 협력 도구로 인식</li>
<li>"AI가 대체하는 것은 사람이 아니라, AI를 사용하는 사람이 AI를 사용하지 않는 사람을 대체한다"</li>
<li>자신의 분야에서 AI를 가장 잘 활용하는 전문가가 되기</li>
</ul>
</div>
<div class="compare-item">
<h4>평생 학습자가 되라</h4>
<ul>
<li>기술 변화 속도에 맞춰 지속적으로 학습</li>
<li>온라인 강좌, 부트캠프, 자기 학습 활용</li>
<li>실험하고 실패하며 배우는 자세</li>
<li>학습 커뮤니티 참여와 네트워킹</li>
</ul>
</div>
</div>

<h3>추천 학습 경로</h3>
<ol>
<li><strong>AI 기초 이해</strong>: AI 리터러시 과정 수강, AI 원리와 활용법 학습</li>
<li><strong>AI 도구 실습</strong>: ChatGPT, Claude 등 생성형 AI 도구를 업무에 실제 적용</li>
<li><strong>데이터 역량 강화</strong>: 엑셀 고급 활용, 기초 통계, 데이터 시각화 학습</li>
<li><strong>전문 분야 심화</strong>: 자신의 분야에서 AI를 활용하는 고급 스킬 개발</li>
<li><strong>포트폴리오 구축</strong>: AI를 활용한 프로젝트 결과물을 포트폴리오로 정리</li>
</ol>

<div class="info-box">
<strong>핵심 메시지</strong><br/>
AI 시대의 커리어 성공은 특정 기술을 아는 것이 아니라, 변화에 적응하고 지속적으로 학습하는 능력에 달려 있습니다. 가장 중요한 역량은 '배우는 법을 배우는 것(Learning to Learn)'입니다.
</div>
    `},{id:1109,chapter_id:11,title:"11.9 학습 정리",sort_order:9,content:`
<h3>Chapter 11 학습 정리: 직장과 일상의 AI</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI는 직업 세계와 일상생활 모든 측면에서 깊은 변화를 가져오고 있습니다. 일부 직업은 자동화되지만 새로운 직업이 더 많이 생겨나며, AI 시대에는 디지털 역량과 인간 고유 역량의 균형 있는 개발이 핵심입니다. AI를 도구로 활용하며 평생 학습하는 자세가 성공의 열쇠입니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI와 직업 변화</td><td>업무 자동화, 업무 증강, 업무 창출의 세 가지 방향으로 변화가 진행됩니다. 직업 자체보다 '업무(task)' 단위의 변화가 핵심입니다.</td></tr>
<tr><td>대체되는 직업</td><td>반복적이고 규칙적이며 예측 가능한 업무가 많은 직업이 자동화 위험이 높습니다. 생성형 AI로 지식 노동도 영향을 받습니다.</td></tr>
<tr><td>새로운 직업</td><td>AI 기술 개발, AI 활용/운영, AI 거버넌스 분야에서 새로운 직업이 등장합니다. 융합형 인재의 수요가 급증합니다.</td></tr>
<tr><td>필수 역량</td><td>AI 리터러시, 비판적 사고, 창의성, 공감 능력, 평생 학습 역량이 핵심입니다. T자형에서 π자형 인재로의 전환이 필요합니다.</td></tr>
<tr><td>업무 AI 활용</td><td>문서 작성, 데이터 분석, 디자인, 코딩 등 다양한 업무에서 AI 도구를 활용할 수 있습니다. 보안과 검증이 중요합니다.</td></tr>
<tr><td>일상의 AI</td><td>스마트폰, 스마트 홈, 엔터테인먼트, 건강, 교통 등 일상 전반에 AI가 활용됩니다. 필터 버블에 주의해야 합니다.</td></tr>
<tr><td>교육의 변화</td><td>개인화 학습, AI 튜터, 자동 평가 등으로 교육 패러다임이 전환되고 있습니다. 학문적 정직성과 디지털 격차가 과제입니다.</td></tr>
<tr><td>커리어 전략</td><td>AI를 협력 도구로 활용하고, 평생 학습하며, 자신의 전문성에 AI 역량을 결합하는 것이 핵심 전략입니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>업무 재구성(Task Redesign)</strong>: AI 도입에 따라 직업 내 업무 구성을 재설계하는 것</li>
<li><strong>업무 증강(Augmentation)</strong>: AI가 인간의 능력을 보완하고 확장하는 형태의 활용</li>
<li><strong>프롬프트 엔지니어</strong>: AI에 최적의 지시를 설계하는 전문가</li>
<li><strong>융합형 인재</strong>: 특정 도메인 전문성과 AI 역량을 함께 갖춘 인재</li>
<li><strong>π자형 인재</strong>: 두 개의 깊은 전문성과 넓은 일반 지식을 갖춘 인재상</li>
<li><strong>필터 버블</strong>: AI 추천으로 자신과 비슷한 콘텐츠만 반복 노출되는 현상</li>
<li><strong>에듀테크(EdTech)</strong>: 교육과 기술의 결합, AI 기반 교육 기술</li>
<li><strong>적응형 학습</strong>: 학습자 수준에 맞게 콘텐츠가 자동 조절되는 학습 방식</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>세계경제포럼(WEF) - Future of Jobs Report</li>
<li>OECD - AI and the Future of Skills</li>
<li>맥킨지 글로벌 연구소 - Jobs Lost, Jobs Gained</li>
<li>한국고용정보원 - AI와 일자리 변화 보고서</li>
</ul>
    `},{id:1110,chapter_id:11,title:"11.10 학습 확인 문제",sort_order:10,content:`
<h3>Chapter 11 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 직장과 일상의 AI에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AI와 직업 변화</h4>
<div class="info-box">
<p>AI로 인한 직업 변화에 대한 설명으로 가장 <strong>적절한</strong> 것은?</p>
<ol type="a">
<li>AI는 모든 직업을 완전히 대체할 것이다</li>
<li>AI는 직업 자체보다 직업 내 개별 업무(task) 단위로 변화를 가져온다</li>
<li>AI는 제조업만 영향을 미치고 서비스업은 안전하다</li>
<li>AI로 인한 직업 변화는 아직 먼 미래의 이야기이다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 자동화는 '직업' 단위가 아니라 '업무(task)' 단위로 발생합니다. 대부분의 직업에서 일부 업무는 자동화되고, 다른 업무는 인간이 계속 수행합니다. 완전히 자동화 가능한 직업은 전체의 5% 미만입니다.</p>
</details>
</div>

<h4>문제 2. AI 시대 필수 역량</h4>
<div class="info-box">
<p>다음 중 AI 시대에 인간이 AI보다 우위를 가지는 역량으로 가장 적절하지 <strong>않은</strong> 것은?</p>
<ol type="a">
<li>공감 능력과 감성 지능</li>
<li>대량 데이터의 빠른 계산과 패턴 인식</li>
<li>창의적 사고와 상상력</li>
<li>윤리적 판단과 가치 기반 의사결정</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>대량 데이터의 빠른 계산과 패턴 인식은 AI가 인간보다 월등히 우수한 영역입니다. 반면 공감 능력, 창의적 사고, 윤리적 판단력은 인간만이 가진 고유한 역량으로, AI 시대에 더욱 가치가 높아집니다.</p>
</details>
</div>

<h4>문제 3. 업무 AI 활용</h4>
<div class="info-box">
<p>업무에서 AI를 활용할 때 주의해야 할 사항으로 <strong>올바르지 않은</strong> 것은?</p>
<ol type="a">
<li>회사의 AI 사용 정책을 확인하고 준수한다</li>
<li>AI 결과물을 반드시 검토한 후 활용한다</li>
<li>업무 효율을 위해 고객 개인정보를 AI에 입력하여 분석한다</li>
<li>AI가 생성한 코드나 문서는 사람이 검증한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>고객 개인정보나 회사 기밀 정보를 외부 AI 서비스에 입력하는 것은 정보 유출 위험이 있어 절대 해서는 안 됩니다. AI 활용 시 데이터 보안과 개인정보 보호를 항상 최우선으로 고려해야 합니다.</p>
</details>
</div>

<h4>문제 4. 일상의 AI</h4>
<div class="info-box">
<p>AI 추천 시스템으로 인해 사용자가 자신과 비슷한 의견과 콘텐츠에만 반복적으로 노출되는 현상을 무엇이라 하는가?</p>
<ol type="a">
<li>데이터 마이닝 (Data Mining)</li>
<li>필터 버블 (Filter Bubble)</li>
<li>정보 과부하 (Information Overload)</li>
<li>디지털 디톡스 (Digital Detox)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>필터 버블(Filter Bubble)은 AI 추천 알고리즘이 사용자의 기존 선호와 행동 패턴에 맞는 콘텐츠만 보여줌으로써, 다양한 관점과 정보로부터 차단되는 현상입니다. 엘리 파리저(Eli Pariser)가 2011년에 처음 제시한 개념입니다.</p>
</details>
</div>

<h4>문제 5. AI 시대 커리어 전략</h4>
<div class="info-box">
<p>다음 중 AI 시대의 커리어 전략으로 가장 효과적인 것은?</p>
<ol type="a">
<li>AI와 관련 없는 전통적인 직업만 고수한다</li>
<li>프로그래밍만 배우면 AI 시대에 충분히 경쟁할 수 있다</li>
<li>자신의 전문 분야에 AI 활용 역량을 결합하고 평생 학습한다</li>
<li>AI가 발전하면 일자리가 없어지므로 준비할 필요가 없다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI 시대의 가장 효과적인 커리어 전략은 자신의 전문 분야(도메인 전문성)에 AI 활용 역량을 결합하는 '융합형 인재'가 되는 것입니다. 동시에 기술 변화에 맞춰 지속적으로 학습하는 평생 학습 자세가 필수적입니다.</p>
</details>
</div>
    `}],sI=[{id:1201,chapter_id:12,title:"12.1 AGI와 ASI",sort_order:1,content:`
<h3>범용 인공지능(AGI)과 초인공지능(ASI)</h3>
<p>현재의 AI는 특정 과제에 특화된 '좁은 AI(Narrow AI)'입니다. 그러나 AI 연구의 궁극적 목표 중 하나는 인간 수준의 범용적 지능을 가진 AGI와, 나아가 인간을 초월하는 ASI의 개발입니다. 이 개념은 AI의 미래를 이해하는 데 핵심적입니다.</p>

<h3>AI의 발전 단계</h3>
<table>
<thead>
<tr><th>단계</th><th>명칭</th><th>특성</th><th>현재 상태</th></tr>
</thead>
<tbody>
<tr><td>1단계</td><td>좁은 AI<br/>(Narrow AI / ANI)</td><td>특정 과제만 수행 가능. 바둑, 번역, 이미지 인식 등 하나의 영역에 특화</td><td>현재 수준. 대부분의 AI 기술이 여기에 해당</td></tr>
<tr><td>2단계</td><td>범용 인공지능<br/>(AGI)</td><td>인간처럼 다양한 과제를 이해하고 학습하며 수행 가능. 전이 학습, 상식적 추론 포함</td><td>아직 달성되지 않음. 활발히 연구 중</td></tr>
<tr><td>3단계</td><td>초인공지능<br/>(ASI)</td><td>모든 지적 영역에서 인간을 크게 초월하는 지능. 자기 개선 능력 보유</td><td>이론적 단계. 실현 여부와 시기 불확실</td></tr>
</tbody>
</table>

<h3>AGI의 핵심 특성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>현재 AI (Narrow AI)</h4>
<ul>
<li>특정 과제에만 뛰어남</li>
<li>학습한 영역 밖에서는 무능</li>
<li>상식적 추론 능력 부족</li>
<li>인간의 지속적 감독 필요</li>
<li>목표를 스스로 설정하지 못함</li>
</ul>
</div>
<div class="compare-item">
<h4>범용 인공지능 (AGI)</h4>
<ul>
<li>다양한 과제를 유연하게 수행</li>
<li>새로운 상황에 스스로 적응</li>
<li>상식과 맥락을 이해</li>
<li>자율적 학습과 추론 가능</li>
<li>목표를 스스로 설정하고 계획 수립</li>
</ul>
</div>
</div>

<h3>AGI 달성 시기에 대한 전문가 전망</h3>
<div class="info-box">
<strong>다양한 예측</strong><br/>
<ul>
<li><strong>낙관적 전망 (10~20년 내)</strong>: 레이 커즈와일, 일부 AI 기업 CEO들은 2030~2040년경 AGI 실현을 예측</li>
<li><strong>신중한 전망 (30~50년 이상)</strong>: 대다수 AI 연구자들은 근본적인 기술적 돌파구가 필요하다고 판단</li>
<li><strong>회의적 전망</strong>: 일부 학자들은 AGI 자체가 달성 불가능하거나, 지능의 정의 자체를 재검토해야 한다고 주장</li>
</ul>
</div>

<h3>ASI와 기술적 특이점</h3>
<p>'기술적 특이점(Technological Singularity)'은 AI가 인간의 지능을 초월하여 자기 자신을 지속적으로 개선하기 시작하는 시점을 의미합니다. 이 지점 이후의 변화는 인간이 예측할 수 없을 정도로 급격할 것으로 예상됩니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>현재</strong><br/>좁은 AI<br/>특정 과제 수행</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>미래</strong><br/>AGI<br/>인간 수준의 범용 지능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이론적</strong><br/>ASI<br/>인간 초월 지능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>가설</strong><br/>특이점<br/>자기 개선의 폭발적 가속</div>
</div>

<div class="info-box warning">
<strong>AGI/ASI에 대한 균형 잡힌 시각</strong><br/>
AGI와 ASI에 대해서는 과도한 낙관도, 과도한 두려움도 경계해야 합니다. 중요한 것은 현재 AI 기술의 발전 방향을 이해하고, 안전하고 유익한 방향으로 기술이 발전할 수 있도록 사회적 논의와 준비를 하는 것입니다.
</div>
    `},{id:1202,chapter_id:12,title:"12.2 AI 규제와 거버넌스",sort_order:2,content:`
<h3>글로벌 AI 규제 현황</h3>
<p>AI 기술의 급속한 발전에 따라, 전 세계적으로 AI의 개발과 사용을 규제하기 위한 법적, 제도적 프레임워크가 구축되고 있습니다. AI 거버넌스는 AI가 안전하고 윤리적이며 공정하게 개발되고 사용되도록 보장하는 전반적인 관리 체계를 의미합니다.</p>

<h3>주요 AI 규제 모델</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>규칙 기반 규제 (EU 모델)</h4>
<ul>
<li>구체적인 법률과 규칙으로 AI를 규제</li>
<li>EU AI Act가 대표적</li>
<li>위험 기반 분류 체계 적용</li>
<li>강제적 이행과 처벌 규정</li>
<li>장점: 명확한 기준, 강력한 보호</li>
<li>단점: 기술 발전 속도에 뒤처질 수 있음</li>
</ul>
</div>
<div class="compare-item">
<h4>원칙 기반 규제 (미국 모델)</h4>
<ul>
<li>광범위한 원칙과 가이드라인 제시</li>
<li>산업별 자율 규제 장려</li>
<li>NIST AI 위험 관리 프레임워크</li>
<li>혁신 친화적 접근</li>
<li>장점: 유연성, 혁신 촉진</li>
<li>단점: 구속력 약함, 일관성 부족</li>
</ul>
</div>
<div class="compare-item">
<h4>국가 주도 규제 (중국 모델)</h4>
<ul>
<li>정부가 AI 개발과 규제를 주도</li>
<li>분야별 세부 규정 신속 제정</li>
<li>알고리즘, 딥페이크, 생성형 AI 규정</li>
<li>국가 안보와 사회 안정 중시</li>
<li>장점: 빠른 대응, 강력한 통제</li>
<li>단점: 혁신 저해, 국제 기준과 차이</li>
</ul>
</div>
</div>

<h3>AI 거버넌스의 핵심 요소</h3>
<table>
<thead>
<tr><th>요소</th><th>내용</th><th>실천 방안</th></tr>
</thead>
<tbody>
<tr><td>투명성</td><td>AI 시스템의 작동 원리와 의사결정 과정 공개</td><td>알고리즘 공개, 모델 카드, 영향 평가 공개</td></tr>
<tr><td>책임성</td><td>AI의 결과에 대한 명확한 책임 체계</td><td>책임 주체 지정, 감사 체계, 피해 구제</td></tr>
<tr><td>공정성</td><td>AI가 특정 집단을 차별하지 않도록 보장</td><td>편향 테스트, 공정성 지표 모니터링</td></tr>
<tr><td>안전성</td><td>AI 시스템의 안전한 작동 보장</td><td>안전 테스트, 인증, 사후 모니터링</td></tr>
<tr><td>프라이버시</td><td>개인정보 수집과 활용의 적절한 관리</td><td>데이터 최소화, 동의 절차, 익명화</td></tr>
</tbody>
</table>

<h3>AI 규제의 도전과제</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>속도 문제</strong><br/>기술 발전이<br/>규제보다 빠름</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>범위 문제</strong><br/>AI의 정의와<br/>적용 범위 설정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>국제 조화</strong><br/>국가 간 규제<br/>일관성 확보</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>균형 문제</strong><br/>혁신 촉진과<br/>위험 방지의 균형</div>
</div>

<div class="info-box">
<strong>한국의 AI 규제 동향</strong><br/>
한국은 'AI 기본법' 제정을 추진하며, AI의 개발과 활용에 관한 기본 원칙, 고위험 AI에 대한 관리 체계, AI 윤리 위원회 설치 등을 주요 내용으로 하고 있습니다. 혁신 촉진과 안전 확보의 균형을 추구하는 한국형 AI 거버넌스 모델을 구축하고 있습니다.
</div>
    `},{id:1203,chapter_id:12,title:"12.3 AI와 환경",sort_order:3,content:`
<h3>AI의 환경적 영향</h3>
<p>AI 기술은 환경 문제 해결에 도움을 줄 수 있지만, 동시에 AI 시스템 자체가 상당한 환경 비용을 발생시킵니다. AI의 환경적 영향을 이해하고 지속 가능한 AI 개발 방향을 모색하는 것이 중요합니다.</p>

<h3>AI의 에너지 소비</h3>
<div class="info-box warning">
<strong>AI 훈련의 탄소 발자국</strong><br/>
대규모 AI 모델 한 개를 훈련하는 데 드는 에너지는 자동차 5대가 일생 동안 배출하는 CO2와 맞먹는 양을 발생시킬 수 있습니다. GPT-4 규모의 모델 훈련에는 수천 개의 GPU가 수개월간 가동되며, 이에 따른 전력 소비가 막대합니다.
</div>

<table>
<thead>
<tr><th>AI 활동</th><th>에너지 소비 수준</th><th>비교 기준</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT 질의 1회</td><td>구글 검색의 약 10배 전력</td><td>구글 검색 1회 ≈ 0.3Wh</td></tr>
<tr><td>GPT-3 훈련 (2020)</td><td>약 1,287 MWh</td><td>미국 가정 120가구 연간 전력량</td></tr>
<tr><td>대규모 모델 훈련 (2024~)</td><td>수천~수만 MWh</td><td>소규모 도시 수준의 전력 소비</td></tr>
<tr><td>AI 데이터센터 (글로벌)</td><td>전 세계 전력의 1~2%</td><td>2030년 3~4%로 증가 전망</td></tr>
</tbody>
</table>

<h3>AI가 환경에 미치는 양면적 영향</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>부정적 영향 (환경 비용)</h4>
<ul>
<li><strong>탄소 배출</strong>: 모델 훈련과 추론에 막대한 전력 소비</li>
<li><strong>물 소비</strong>: 데이터센터 냉각에 대량의 물 사용</li>
<li><strong>전자 폐기물</strong>: GPU 등 하드웨어의 빠른 교체 주기</li>
<li><strong>희귀 광물 채굴</strong>: AI 칩 제조를 위한 자원 채굴</li>
</ul>
</div>
<div class="compare-item">
<h4>긍정적 영향 (환경 해결)</h4>
<ul>
<li><strong>에너지 최적화</strong>: 건물, 공장, 전력망의 에너지 효율 개선</li>
<li><strong>기후 예측</strong>: 정확한 기후 모델링과 재해 예측</li>
<li><strong>스마트 농업</strong>: 물과 비료 사용 최적화</li>
<li><strong>환경 모니터링</strong>: 산림, 해양, 대기 실시간 감시</li>
</ul>
</div>
</div>

<h3>그린 AI(Green AI) 전략</h3>
<p>그린 AI는 AI의 환경적 영향을 최소화하면서도 성능을 유지하는 지속 가능한 AI 개발 접근법입니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>효율적 모델</strong><br/>모델 경량화<br/>지식 증류<br/>가지치기(Pruning)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>효율적 연산</strong><br/>전용 하드웨어<br/>혼합 정밀도 연산<br/>분산 학습 최적화</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>재생 에너지</strong><br/>데이터센터<br/>재생에너지 전환<br/>탄소 중립 목표</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>측정과 보고</strong><br/>탄소 발자국 추적<br/>효율성 지표 공개<br/>환경 영향 보고</div>
</div>

<div class="info-box">
<strong>AI 기업들의 환경 대응</strong><br/>
구글, 마이크로소프트, 메타 등 주요 AI 기업들은 2030년까지 탄소 중립 또는 탄소 네거티브(순배출 제로 이하)를 선언하고 있습니다. 그러나 AI 모델의 규모가 기하급수적으로 커지면서, 에너지 효율 개선 속도보다 총 에너지 소비 증가 속도가 빠른 '리바운드 효과'가 우려되고 있습니다.
</div>
    `},{id:1204,chapter_id:12,title:"12.4 AI와 사회적 불평등",sort_order:4,content:`
<h3>AI와 불평등의 관계</h3>
<p>AI 기술은 사회의 효율성과 생산성을 높이는 동시에, 기존의 불평등을 심화시키거나 새로운 형태의 불평등을 만들어낼 수 있습니다. AI의 혜택이 모든 사회 구성원에게 공평하게 돌아갈 수 있도록 하는 것은 중요한 사회적 과제입니다.</p>

<h3>AI가 심화시킬 수 있는 불평등</h3>
<table>
<thead>
<tr><th>불평등 유형</th><th>현상</th><th>구체적 사례</th></tr>
</thead>
<tbody>
<tr><td>경제적 불평등</td><td>AI로 인한 부의 집중과 일자리 양극화</td><td>AI 활용 기업의 초과 수익, 자동화로 인한 중산층 일자리 감소</td></tr>
<tr><td>디지털 격차<br/>(Digital Divide)</td><td>AI 기술 접근성의 차이</td><td>도시-농촌, 세대, 소득 수준에 따른 AI 접근 격차</td></tr>
<tr><td>AI 격차<br/>(AI Divide)</td><td>AI 활용 능력의 차이</td><td>AI 리터러시 수준에 따른 생산성 및 기회의 격차</td></tr>
<tr><td>글로벌 격차</td><td>국가 간 AI 역량 차이</td><td>선진국과 개발도상국의 AI 기술 및 인프라 차이</td></tr>
<tr><td>알고리즘 불평등</td><td>AI 시스템의 편향으로 인한 차별</td><td>채용, 대출, 형사 사법 등에서의 AI 편향</td></tr>
</tbody>
</table>

<h3>디지털 격차의 계층</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1차 격차</strong><br/>접근 격차<br/>인터넷/기기 보유 여부</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2차 격차</strong><br/>활용 격차<br/>디지털 기술 활용 능력</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3차 격차</strong><br/>결과 격차<br/>디지털 활용의 실제 혜택 차이</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 격차</strong><br/>AI 리터러시<br/>AI 활용 능력의 차이</div>
</div>

<h3>불평등 완화를 위한 접근</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정책적 대응</h4>
<ul>
<li><strong>AI 교육 보편화</strong>: 모든 시민이 AI 리터러시를 갖출 수 있도록 교육 기회 제공</li>
<li><strong>디지털 인프라 확충</strong>: 농촌, 소외 지역의 디지털 접근성 개선</li>
<li><strong>사회 안전망 강화</strong>: AI로 인한 실직자를 위한 재교육과 사회 보장</li>
<li><strong>AI 공정성 규제</strong>: AI 시스템의 편향과 차별을 방지하는 법적 장치</li>
</ul>
</div>
<div class="compare-item">
<h4>기술적 대응</h4>
<ul>
<li><strong>공정한 AI 개발</strong>: 다양한 데이터와 관점을 반영한 AI 모델 개발</li>
<li><strong>오픈소스 AI</strong>: AI 기술의 민주화를 위한 오픈소스 생태계</li>
<li><strong>접근성 높은 AI 도구</strong>: 비전문가도 사용할 수 있는 AI 인터페이스</li>
<li><strong>다국어/다문화 AI</strong>: 영어 중심이 아닌 다양한 언어와 문화를 지원하는 AI</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>AI 격차의 복합적 성격</strong><br/>
AI 격차는 기존의 경제적, 교육적, 지역적 격차와 결합하여 증폭되는 경향이 있습니다. 예를 들어, 저소득층은 AI 교육 기회가 적고 → AI 활용 능력이 낮으며 → AI 시대의 좋은 일자리를 얻기 어렵고 → 소득 격차가 더 벌어지는 악순환이 발생할 수 있습니다. 이러한 복합적 불평등을 해소하기 위해서는 교육, 복지, 기술 정책이 통합적으로 설계되어야 합니다.
</div>
    `},{id:1205,chapter_id:12,title:"12.5 AI와 국가 경쟁력",sort_order:5,content:`
<h3>국가 전략 기술로서의 AI</h3>
<p>AI는 21세기 국가 경쟁력을 결정짓는 핵심 전략 기술로 부상했습니다. 전 세계 주요 국가들은 AI를 국가 안보, 경제 성장, 사회 혁신의 핵심 동력으로 인식하고, 대규모 투자와 전략적 정책을 추진하고 있습니다.</p>

<h3>글로벌 AI 경쟁 현황</h3>
<table>
<thead>
<tr><th>국가</th><th>AI 전략</th><th>주요 강점</th><th>투자 규모</th></tr>
</thead>
<tbody>
<tr><td>미국</td><td>National AI Initiative<br/>민간 주도 혁신</td><td>빅테크 기업, 대학 연구, 벤처 생태계</td><td>민간 투자 세계 최대</td></tr>
<tr><td>중국</td><td>차세대 AI 발전 계획<br/>2030년 AI 세계 1위 목표</td><td>대규모 데이터, 정부 주도 투자, 빠른 실행</td><td>정부 + 민간 대규모 투자</td></tr>
<tr><td>EU</td><td>AI Act + 투자 확대<br/>인간 중심 AI</td><td>규제 선도, 윤리적 AI 프레임워크</td><td>2030년까지 €200억 목표</td></tr>
<tr><td>한국</td><td>AI 국가전략<br/>AI 강국 도약</td><td>반도체, IT 인프라, 디지털 전환 역량</td><td>정부 주도 + 민간 협력</td></tr>
<tr><td>일본</td><td>Society 5.0<br/>AI + 로봇 융합</td><td>로보틱스, 제조업 AI, 고령화 대응</td><td>정부 + 대기업 투자</td></tr>
</tbody>
</table>

<h3>AI 경쟁력의 핵심 요소</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>하드 파워</h4>
<ul>
<li><strong>컴퓨팅 인프라</strong>: GPU/TPU, 슈퍼컴퓨터, 클라우드</li>
<li><strong>데이터</strong>: 대규모 고품질 데이터 확보 능력</li>
<li><strong>반도체</strong>: AI 칩 설계 및 제조 역량</li>
<li><strong>투자</strong>: 연구개발 투자 규모</li>
</ul>
</div>
<div class="compare-item">
<h4>소프트 파워</h4>
<ul>
<li><strong>인재</strong>: AI 연구자, 엔지니어 양성과 유치</li>
<li><strong>생태계</strong>: 스타트업, 대학, 기업의 혁신 네트워크</li>
<li><strong>규제 환경</strong>: 혁신 친화적이면서 안전한 규제</li>
<li><strong>사회적 수용</strong>: AI에 대한 국민의 이해와 수용도</li>
</ul>
</div>
</div>

<h3>한국의 AI 전략과 과제</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>강점</strong><br/>세계 1위 반도체<br/>높은 디지털 인프라<br/>빠른 기술 도입</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>약점</strong><br/>AI 핵심 인재 부족<br/>대형 AI 모델 격차<br/>데이터 규모 제한</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>기회</strong><br/>AI 반도체 시너지<br/>제조업 AI 전환<br/>K-AI 콘텐츠</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>위협</strong><br/>미중 기술 패권 경쟁<br/>인재 해외 유출<br/>규제 지연</div>
</div>

<div class="info-box">
<strong>AI 주권(AI Sovereignty)</strong><br/>
AI 주권은 국가가 자체적인 AI 역량을 보유하고, 핵심 AI 기술과 데이터에 대한 자율성을 유지하는 것을 의미합니다. AI 기술이 소수 국가와 기업에 집중되면서, 많은 국가들이 AI 주권 확보를 국가적 과제로 설정하고 있습니다. 한국도 한국어 대규모 언어 모델 개발, AI 반도체 자립 등을 통해 AI 주권 확보를 추진하고 있습니다.
</div>
    `},{id:1206,chapter_id:12,title:"12.6 AI와 인간의 공존",sort_order:6,content:`
<h3>인간-AI 공존의 시대</h3>
<p>AI와 인간의 관계를 '대체'가 아닌 '공존'과 '협력'의 관점에서 바라보는 것이 중요합니다. '증강 지능(Augmented Intelligence)'이라는 개념은 AI가 인간의 지능을 대체하는 것이 아니라 확장하고 보완하는 역할을 한다는 관점을 강조합니다.</p>

<h3>인간-AI 협업 모델</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI가 잘하는 것</h4>
<ul>
<li>대량 데이터의 빠른 처리와 패턴 인식</li>
<li>24시간 지치지 않는 연속 작업</li>
<li>일관성 있는 반복 업무 수행</li>
<li>다국어 동시 처리</li>
<li>위험 환경에서의 작업</li>
</ul>
</div>
<div class="compare-item">
<h4>인간이 잘하는 것</h4>
<ul>
<li>맥락 이해와 상식적 판단</li>
<li>공감과 감성적 소통</li>
<li>윤리적 가치 판단</li>
<li>창의적 발상과 혁신</li>
<li>복잡한 사회적 상호작용</li>
</ul>
</div>
</div>

<h3>인간-AI 협업의 단계</h3>
<table>
<thead>
<tr><th>단계</th><th>협업 형태</th><th>인간의 역할</th><th>AI의 역할</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>1단계</td><td>도구적 활용</td><td>주도적 의사결정</td><td>단순 보조 도구</td><td>AI 맞춤법 검사기</td></tr>
<tr><td>2단계</td><td>의사결정 지원</td><td>최종 판단 및 결정</td><td>분석 및 추천 제공</td><td>의료 AI 진단 보조</td></tr>
<tr><td>3단계</td><td>협력적 파트너</td><td>방향 설정, 감독</td><td>독립적 업무 수행</td><td>자율주행차 (인간 감독)</td></tr>
<tr><td>4단계</td><td>자율적 위임</td><td>목표 설정, 예외 처리</td><td>자율적 실행</td><td>완전 자동화 시스템</td></tr>
</tbody>
</table>

<h3>공존을 위한 원칙</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>인간 중심</strong><br/>AI는 인간을 위한<br/>도구이자 파트너</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>상호 보완</strong><br/>각자의 강점을<br/>극대화하는 협업</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>인간 통제</strong><br/>중요한 결정에서<br/>인간의 최종 판단</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>지속적 적응</strong><br/>기술 변화에 따른<br/>관계 재정립</div>
</div>

<h3>분야별 인간-AI 협업 사례</h3>
<ol>
<li><strong>의료</strong>: AI가 영상 판독과 데이터 분석을 수행하고, 의사가 환자와의 소통과 최종 진단을 담당</li>
<li><strong>법률</strong>: AI가 판례 검색과 문서 분석을 수행하고, 변호사가 전략 수립과 법정 변론을 담당</li>
<li><strong>교육</strong>: AI가 개인화된 학습 경로와 평가를 제공하고, 교사가 동기 부여와 멘토링을 담당</li>
<li><strong>예술</strong>: AI가 아이디어 발상과 초안 생성을 보조하고, 예술가가 최종 창작과 감성 표현을 담당</li>
</ol>

<div class="info-box">
<strong>증강 지능(Augmented Intelligence)</strong><br/>
증강 지능은 AI를 '인간 지능의 대체재'가 아닌 '인간 지능의 확장'으로 바라보는 관점입니다. 안경이 시력을 보완하듯, AI는 인간의 인지 능력, 분석 능력, 의사결정 능력을 보완하고 확장하는 도구입니다. 이 관점은 인간이 AI 시대에도 중심적 역할을 유지할 수 있다는 희망적 비전을 제시합니다.
</div>
    `},{id:1207,chapter_id:12,title:"12.7 AI 미래 시나리오",sort_order:7,content:`
<h3>AI 미래의 세 가지 시나리오</h3>
<p>AI의 미래는 기술의 발전 방향, 사회적 대응, 규제 정책, 국제 협력 등 다양한 요인에 의해 결정됩니다. 여기서는 낙관적, 현실적, 비관적 세 가지 시나리오를 통해 AI의 미래 가능성을 탐색합니다.</p>

<h3>시나리오 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>낙관적 시나리오</h4>
<p><em>"AI가 인류의 가장 큰 도전들을 해결한다"</em></p>
<ul>
<li>AI가 의료, 교육, 환경 문제를 혁신적으로 해결</li>
<li>개인 맞춤형 의료로 질병 조기 발견과 치료</li>
<li>AI 교육으로 교육 격차 해소</li>
<li>AI 기반 기후변화 대응 기술 발전</li>
<li>새로운 일자리가 사라지는 일자리보다 많음</li>
<li>인간은 창의적이고 의미 있는 일에 집중</li>
</ul>
</div>
<div class="compare-item">
<h4>현실적 시나리오</h4>
<p><em>"기회와 도전이 공존하는 전환의 시대"</em></p>
<ul>
<li>AI가 많은 분야에서 생산성을 크게 향상</li>
<li>일부 직업은 사라지지만 새 직업도 생성</li>
<li>사회적 적응 과정에서 일시적 혼란과 갈등</li>
<li>규제와 기술 발전의 지속적인 조율 필요</li>
<li>AI 혜택의 불균등한 분배에 대한 지속적 논의</li>
<li>점진적인 사회 제도와 교육 체계의 변화</li>
</ul>
</div>
<div class="compare-item">
<h4>비관적 시나리오</h4>
<p><em>"통제되지 않는 AI가 사회적 위기를 초래한다"</em></p>
<ul>
<li>대규모 일자리 대체로 실업률 급증</li>
<li>AI 기술의 소수 기업 독점으로 부의 극심한 집중</li>
<li>딥페이크와 허위 정보로 사회적 신뢰 붕괴</li>
<li>AI 무기와 감시 기술의 확산</li>
<li>프라이버시 침해와 디지털 감시 사회</li>
<li>AI 사고로 인한 대규모 피해</li>
</ul>
</div>
</div>

<h3>미래 결정 요인</h3>
<table>
<thead>
<tr><th>요인</th><th>긍정적 방향</th><th>부정적 방향</th></tr>
</thead>
<tbody>
<tr><td>규제 정책</td><td>혁신과 안전의 균형 잡힌 규제</td><td>과도한 규제 또는 무규제</td></tr>
<tr><td>교육 체계</td><td>AI 리터러시 보편 교육</td><td>교육 격차 확대</td></tr>
<tr><td>국제 협력</td><td>AI 안전에 대한 글로벌 합의</td><td>AI 군비 경쟁 심화</td></tr>
<tr><td>사회 안전망</td><td>전환기 노동자 보호 체계</td><td>사회적 갈등과 불평등 심화</td></tr>
<tr><td>기업 윤리</td><td>책임감 있는 AI 개발</td><td>이익만 추구하는 무분별한 개발</td></tr>
</tbody>
</table>

<h3>바람직한 미래를 위한 행동</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>개인</strong><br/>AI 리터러시 함양<br/>평생 학습<br/>비판적 AI 활용</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>기업</strong><br/>책임감 있는 AI 개발<br/>직원 재교육<br/>윤리적 AI 활용</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>정부</strong><br/>균형 잡힌 규제<br/>교육 투자<br/>사회 안전망 구축</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>국제사회</strong><br/>글로벌 협력<br/>AI 안전 합의<br/>기술 격차 해소</div>
</div>

<div class="info-box">
<strong>우리의 선택이 미래를 결정한다</strong><br/>
AI의 미래는 정해진 것이 아닙니다. 기술 자체는 중립적이며, 그 결과는 우리가 기술을 어떻게 개발하고, 규제하고, 활용하는지에 달려 있습니다. 정보에 기반한 시민의 참여, 책임감 있는 기업의 노력, 현명한 정책 결정이 합쳐질 때 AI는 인류에게 진정한 이익을 가져다줄 수 있습니다.
</div>
    `},{id:1208,chapter_id:12,title:"12.8 AI 리터러시의 미래",sort_order:8,content:`
<h3>평생 AI 학습의 시대</h3>
<p>AI 기술은 빠르게 진화하고 있으며, 이에 따라 AI 리터러시도 고정된 지식이 아니라 지속적으로 업데이트해야 하는 동적 역량입니다. AI 리터러시의 미래는 평생 학습, 비판적 사고, 윤리적 인식의 지속적인 발전에 달려 있습니다.</p>

<h3>AI 리터러시의 발전 방향</h3>
<table>
<thead>
<tr><th>현재</th><th>가까운 미래 (3~5년)</th><th>중장기 미래 (5~10년 이상)</th></tr>
</thead>
<tbody>
<tr><td>AI 기본 개념 이해</td><td>AI 도구의 숙련된 활용</td><td>AI와의 자연스러운 협업</td></tr>
<tr><td>생성형 AI 체험적 활용</td><td>목적별 AI 전략적 활용</td><td>AI 에이전트와 일상적 상호작용</td></tr>
<tr><td>AI 윤리의 기초 인식</td><td>AI 윤리의 실천적 적용</td><td>AI 거버넌스 참여와 시민적 감시</td></tr>
<tr><td>데이터 기초 이해</td><td>데이터 기반 의사결정</td><td>AI-인간 협력적 의사결정</td></tr>
</tbody>
</table>

<h3>미래 AI 리터러시의 핵심 요소</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 이해</h4>
<ul>
<li>새로운 AI 기술의 원리와 한계 파악</li>
<li>멀티모달 AI, AI 에이전트 등 새로운 형태의 AI 이해</li>
<li>AI 도구의 효과적 선택과 활용</li>
<li>AI 결과물의 품질 평가 능력</li>
</ul>
</div>
<div class="compare-item">
<h4>비판적 리터러시</h4>
<ul>
<li>AI 생성 콘텐츠의 진위 판별</li>
<li>AI 편향과 한계의 인식</li>
<li>AI 의존성에 대한 자기 성찰</li>
<li>AI 정보와 인간 판단의 균형</li>
</ul>
</div>
<div class="compare-item">
<h4>윤리적 인식</h4>
<ul>
<li>AI 사용의 윤리적 함의 고려</li>
<li>AI 시대의 디지털 시민의식</li>
<li>AI 정책에 대한 시민적 참여</li>
<li>다음 세대를 위한 AI 윤리 교육</li>
</ul>
</div>
</div>

<h3>AI 리터러시 유지를 위한 전략</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>정보 추적</strong><br/>AI 뉴스, 논문<br/>동향 정기 확인</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>실습 학습</strong><br/>새로운 AI 도구<br/>직접 체험</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>커뮤니티 참여</strong><br/>학습 모임<br/>온라인 커뮤니티</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>성찰과 적용</strong><br/>배운 것을<br/>일상에 적용</div>
</div>

<h3>추천 AI 리터러시 학습 자원</h3>
<ol>
<li><strong>온라인 강좌</strong>: Coursera, edX, K-MOOC의 AI 관련 과정</li>
<li><strong>뉴스레터</strong>: AI 관련 국내외 뉴스레터 구독</li>
<li><strong>팟캐스트/유튜브</strong>: AI 전문가의 해설 콘텐츠</li>
<li><strong>서적</strong>: AI 리터러시 관련 교양 서적</li>
<li><strong>실습</strong>: AI 도구를 일상 업무에 직접 적용해보기</li>
</ol>

<div class="info-box">
<strong>AI 리터러시는 여정이다</strong><br/>
AI 리터러시는 한 번 배우면 끝나는 것이 아니라, 평생에 걸친 학습 여정입니다. 중요한 것은 완벽한 전문가가 되는 것이 아니라, AI 기술의 변화에 관심을 갖고, 새로운 것을 배우려는 자세를 유지하며, 비판적이고 윤리적인 AI 활용 습관을 기르는 것입니다. 이 과정을 통해 우리는 AI 시대의 능동적 시민으로 성장할 수 있습니다.
</div>
    `},{id:1209,chapter_id:12,title:"12.9 학습 정리",sort_order:9,content:`
<h3>Chapter 12 학습 정리: AI의 미래와 사회적 영향</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI의 미래는 기술의 발전 방향뿐 아니라 사회적 선택에 의해 결정됩니다. AGI/ASI의 가능성, 규제와 거버넌스, 환경적 영향, 사회적 불평등, 국가 경쟁력, 인간과의 공존 등 다양한 측면을 종합적으로 이해하고, 바람직한 미래를 위해 적극적으로 참여하는 것이 중요합니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AGI와 ASI</td><td>현재의 좁은 AI에서 범용 AI(AGI), 초인공지능(ASI)으로의 발전 가능성. 실현 시기와 가능성에 대해 전문가 의견이 분분합니다.</td></tr>
<tr><td>AI 규제와 거버넌스</td><td>규칙 기반(EU), 원칙 기반(미국), 국가 주도(중국) 등 다양한 규제 모델이 존재합니다. 혁신과 안전의 균형이 핵심 과제입니다.</td></tr>
<tr><td>AI와 환경</td><td>AI는 환경 문제 해결에 기여하지만, AI 시스템 자체가 상당한 에너지와 자원을 소비합니다. 그린 AI 전략이 필요합니다.</td></tr>
<tr><td>AI와 불평등</td><td>경제적 불평등, 디지털 격차, AI 격차, 알고리즘 차별 등 다양한 형태의 불평등이 심화될 수 있습니다.</td></tr>
<tr><td>AI와 국가 경쟁력</td><td>AI는 국가 전략 기술로, 인재, 인프라, 데이터, 규제 환경, 생태계가 핵심 경쟁 요소입니다.</td></tr>
<tr><td>인간-AI 공존</td><td>증강 지능 관점에서 AI는 인간 능력의 확장 도구입니다. 각자의 강점을 살리는 협업 모델이 핵심입니다.</td></tr>
<tr><td>미래 시나리오</td><td>낙관적, 현실적, 비관적 시나리오가 존재하며, 우리의 선택이 미래를 결정합니다.</td></tr>
<tr><td>AI 리터러시의 미래</td><td>AI 리터러시는 평생 학습 역량으로, 기술적 이해, 비판적 사고, 윤리적 인식의 지속적 발전이 필요합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>ANI (Artificial Narrow Intelligence)</strong>: 좁은 AI, 특정 과제에 특화된 현재 수준의 AI</li>
<li><strong>AGI (Artificial General Intelligence)</strong>: 범용 인공지능, 인간 수준의 범용적 지능을 가진 AI</li>
<li><strong>ASI (Artificial Super Intelligence)</strong>: 초인공지능, 모든 영역에서 인간을 초월하는 AI</li>
<li><strong>기술적 특이점</strong>: AI가 자기 자신을 개선하기 시작하는 전환점</li>
<li><strong>AI 거버넌스</strong>: AI의 개발과 사용을 관리하는 정책, 규제, 제도 체계</li>
<li><strong>그린 AI</strong>: 환경적 영향을 최소화하는 지속 가능한 AI 개발 접근법</li>
<li><strong>AI 격차(AI Divide)</strong>: AI 활용 능력의 차이로 인한 새로운 형태의 디지털 격차</li>
<li><strong>AI 주권</strong>: 국가가 핵심 AI 기술과 데이터에 대한 자율성을 유지하는 것</li>
<li><strong>증강 지능</strong>: AI를 인간 지능의 확장 도구로 바라보는 관점</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>닉 보스트롬 — 《슈퍼인텔리전스》</li>
<li>스튜어트 러셀 — 《어떻게 인공지능과 공존할 것인가》</li>
<li>한국정보화진흥원 — AI 시대의 사회적 영향 보고서</li>
<li>OECD AI Policy Observatory</li>
</ul>
    `},{id:1210,chapter_id:12,title:"12.10 학습 확인 문제",sort_order:10,content:`
<h3>Chapter 12 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 AI의 미래와 사회적 영향에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AGI와 ANI</h4>
<div class="info-box">
<p>현재의 AI 기술 수준에 대한 설명으로 <strong>올바른</strong> 것은?</p>
<ol type="a">
<li>이미 AGI(범용 인공지능)가 실현되었다</li>
<li>현재 AI는 대부분 ANI(좁은 AI)로, 특정 과제에만 특화되어 있다</li>
<li>ASI(초인공지능)가 이미 인간의 지능을 초월했다</li>
<li>기술적 특이점이 이미 도달했다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>현재의 AI는 대부분 ANI(Artificial Narrow Intelligence)로, 바둑, 번역, 이미지 인식 등 특정 과제에만 뛰어난 성능을 발휘합니다. AGI와 ASI는 아직 실현되지 않았으며, 기술적 특이점도 도달하지 않았습니다.</p>
</details>
</div>

<h4>문제 2. AI 규제 모델</h4>
<div class="info-box">
<p>EU AI Act의 접근 방식으로 올바른 것은?</p>
<ol type="a">
<li>모든 AI를 동일한 수준으로 규제한다</li>
<li>AI 사용을 전면 금지한다</li>
<li>위험 수준에 따라 AI를 분류하여 차등 규제한다</li>
<li>AI 기업의 자율 규제에만 의존한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>EU AI Act는 위험 기반 접근법(Risk-based Approach)을 채택하여 AI 시스템을 허용 불가 위험, 고위험, 제한적 위험, 최소 위험의 4단계로 분류하고, 각 단계에 맞는 차등적 규제를 적용합니다.</p>
</details>
</div>

<h4>문제 3. AI와 환경</h4>
<div class="info-box">
<p>AI의 환경적 영향에 대한 설명으로 <strong>적절하지 않은</strong> 것은?</p>
<ol type="a">
<li>대규모 AI 모델 훈련에는 막대한 전력이 소비된다</li>
<li>AI 데이터센터는 냉각에 대량의 물을 사용한다</li>
<li>AI는 환경에 부정적 영향만 미치므로 사용을 줄여야 한다</li>
<li>그린 AI는 모델 경량화와 재생에너지 활용 등을 통해 환경 영향을 줄이는 접근법이다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI는 환경에 부정적 영향(에너지 소비, 탄소 배출)을 미치지만, 동시에 에너지 최적화, 기후 예측, 스마트 농업 등을 통해 환경 문제 해결에도 기여합니다. 부정적 영향만 강조하는 것은 균형 잡힌 시각이 아닙니다.</p>
</details>
</div>

<h4>문제 4. AI와 사회적 불평등</h4>
<div class="info-box">
<p>AI 기술 접근성과 활용 능력의 차이로 인해 발생하는 새로운 형태의 불평등을 무엇이라 하는가?</p>
<ol type="a">
<li>소득 불평등 (Income Inequality)</li>
<li>AI 격차 (AI Divide)</li>
<li>세대 갈등 (Generational Conflict)</li>
<li>정보 비대칭 (Information Asymmetry)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 격차(AI Divide)는 AI 기술에 대한 접근성과 활용 능력의 차이로 인해 발생하는 새로운 형태의 불평등입니다. 기존의 디지털 격차(Digital Divide)의 확장된 개념으로, AI 리터러시 수준에 따른 생산성, 소득, 기회의 차이를 포괄합니다.</p>
</details>
</div>

<h4>문제 5. 인간-AI 공존</h4>
<div class="info-box">
<p>AI를 인간 지능의 '대체'가 아닌 '확장'으로 바라보는 관점을 무엇이라 하는가?</p>
<ol type="a">
<li>범용 인공지능 (AGI)</li>
<li>초인공지능 (ASI)</li>
<li>증강 지능 (Augmented Intelligence)</li>
<li>인공 신경망 (ANN)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>증강 지능(Augmented Intelligence)은 AI를 인간 지능의 대체가 아닌 확장 도구로 바라보는 관점입니다. 안경이 시력을 보완하듯, AI는 인간의 인지, 분석, 의사결정 능력을 보완하고 확장하는 역할을 합니다.</p>
</details>
</div>
    `}],lI=[...X_,...Q_,...Z_,...F_,...W_,...tI,...eI,...rI,...iI,...nI,...aI,...sI],oI=[{id:1,title:"Part 1 · AI 기초 이해",description:"AI의 개념, 머신러닝과 딥러닝의 원리, AI 기술의 역사와 발전 과정을 학습합니다.",sort_order:1},{id:2,title:"Part 2 · AI 활용과 실전",description:"생성형 AI 도구, 프롬프트 엔지니어링, 다양한 AI 활용 실습을 학습합니다.",sort_order:2},{id:3,title:"Part 3 · AI 윤리와 안전",description:"AI 윤리, 편향성과 공정성, AI 시스템의 안전과 신뢰성을 학습합니다.",sort_order:3},{id:4,title:"Part 4 · AI와 미래",description:"데이터 리터러시, 직장과 일상의 AI, AI가 만드는 미래 사회를 학습합니다.",sort_order:4}],Vp=[{id:1,part_id:1,chapter_number:1,title:"AI란 무엇인가?",description:"인공지능의 정의, 유형, 주요 개념과 응용 분야를 탐구합니다.",icon:"ai",color:"#3B82F6"},{id:2,part_id:1,chapter_number:2,title:"머신러닝과 딥러닝",description:"머신러닝의 원리, 지도/비지도/강화학습, 딥러닝과 신경망을 학습합니다.",icon:"brain",color:"#0D9488"},{id:3,part_id:1,chapter_number:3,title:"AI의 역사와 발전",description:"AI의 탄생부터 현재까지의 발전 과정과 주요 이정표를 학습합니다.",icon:"history",color:"#7C3AED"},{id:4,part_id:2,chapter_number:4,title:"생성형 AI 도구",description:"ChatGPT, Claude, Gemini 등 생성형 AI의 특징과 활용법을 학습합니다.",icon:"robot",color:"#DC2626"},{id:5,part_id:2,chapter_number:5,title:"프롬프트 엔지니어링 기초",description:"효과적인 프롬프트 작성법과 AI와의 소통 전략을 학습합니다.",icon:"prompt",color:"#EA580C"},{id:6,part_id:2,chapter_number:6,title:"AI 활용 실습",description:"텍스트, 이미지, 코드 생성 등 AI 도구 실전 활용을 학습합니다.",icon:"practice",color:"#2563EB"},{id:7,part_id:3,chapter_number:7,title:"AI 윤리와 책임",description:"AI 윤리 원칙, 책임 있는 AI 개발과 사용의 원칙을 학습합니다.",icon:"ethics",color:"#059669"},{id:8,part_id:3,chapter_number:8,title:"AI 편향성과 공정성",description:"AI 시스템의 편향 유형, 원인, 탐지 및 완화 방법을 학습합니다.",icon:"fairness",color:"#7C3AED"},{id:9,part_id:3,chapter_number:9,title:"AI 안전과 신뢰성",description:"AI 안전 위험, 설명 가능한 AI, 신뢰할 수 있는 AI 시스템을 학습합니다.",icon:"security",color:"#0891B2"},{id:10,part_id:4,chapter_number:10,title:"데이터 리터러시",description:"데이터 이해, 수집, 분석, 시각화, 데이터 기반 의사결정을 학습합니다.",icon:"data",color:"#CA8A04"},{id:11,part_id:4,chapter_number:11,title:"직장과 일상의 AI",description:"AI가 직업 세계와 일상생활에 미치는 영향과 활용 사례를 학습합니다.",icon:"work",color:"#1E3A8A"},{id:12,part_id:4,chapter_number:12,title:"AI의 미래와 사회적 영향",description:"AGI, AI 규제, AI가 만드는 미래 사회와 대응 전략을 학습합니다.",icon:"future",color:"#DC2626"}],dI=[{id:1,title:"AI Literacy 사이트 오픈 안내",date:"2026-04-28",pinned:!0,category:"공지"},{id:2,title:"학습 콘텐츠 업데이트 안내",date:"2026-04-28",pinned:!1,category:"안내"},{id:3,title:"AI 실습 가이드 추가",date:"2026-04-28",pinned:!1,category:"안내"}],cI=[{id:1,title:"ChatGPT와 Claude의 차이점이 궁금합니다",date:"2026-04-28",category:"질문",answered:!0},{id:2,title:"프롬프트 엔지니어링 학습 순서 추천",date:"2026-04-28",category:"질문",answered:!0},{id:3,title:"AI 윤리 관련 참고 자료",date:"2026-04-28",category:"자료",answered:!1}],Kp="https://hcmgdztsgjvzcyxyayaj.supabase.co",Yp="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw",Ae={parts:`${yt.dbPrefix}parts`,chapters:`${yt.dbPrefix}chapters`,sections:`${yt.dbPrefix}sections`,progress:`${yt.dbPrefix}progress`,bookmarks:`${yt.dbPrefix}bookmarks`,notices:`${yt.dbPrefix}notices`,qna:`${yt.dbPrefix}qna`,comments:`${yt.dbPrefix}comments`,orders:`${yt.dbPrefix}orders`,order_items:`${yt.dbPrefix}order_items`};let pc=null,xi=[];const Pt=()=>(!pc&&Kp&&Yp&&(pc=Y_(Kp,Yp,{auth:{flowType:"pkce",detectSessionInUrl:!0,autoRefreshToken:!0,persistSession:!0}})),pc),FI=async()=>{const n=Pt();if(n){const{data:r,error:a}=await n.from(Ae.parts).select("*").order("sort_order");if(!a&&r&&r.length>0)return r}return oI},WI=async n=>{const r=Pt();if(r){let l=r.from(Ae.chapters).select("*").order("chapter_number");const{data:o,error:c}=await l;if(!c&&o&&o.length>0)return o}return n?Vp.filter(l=>l.part_id===n):Vp},tS=async n=>{const r=Pt();if(r){const{data:a,error:l}=await r.from(Ae.sections).select("*").eq("chapter_id",n).order("sort_order");if(!l&&a&&a.length>0)return a}return lI.filter(a=>a.chapter_id===n)},eS=async()=>{const n=Pt();if(n){const{data:r,error:a}=await n.from(Ae.notices).select("*").order("created_at",{ascending:!1});if(!a&&r&&r.length>0)return r}return dI},rS=async()=>{const n=Pt();if(n){const{data:r,error:a}=await n.from(Ae.qna).select("*").order("created_at",{ascending:!1});if(!a&&r&&r.length>0)return r}return cI},iS=async n=>{const r=Pt();if(!r){const o={id:crypto.randomUUID(),...n,payment_status:"pending",created_at:new Date().toISOString()};return xi.push(o),o}const a={order_number:n.order_number,user_email:n.user_email,user_name:n.user_name,user_phone:n.user_phone,total_amount:n.total_amount,payment_method:n.payment_method},{error:l}=await r.from(Ae.orders).insert(a);if(l)throw l;if(n.items&&n.items.length>0)try{const{data:o}=await r.from(Ae.orders).select("id").eq("order_number",n.order_number).maybeSingle();o?.id&&await r.from(Ae.order_items).insert(n.items.map(c=>({order_id:o.id,product_title:c.product_title,quantity:c.quantity,unit_price:c.unit_price,subtotal:c.subtotal})))}catch{}return{id:n.order_number,order_number:n.order_number}},nS=async n=>{const r=Pt();if(!r)return xi.find(h=>h.order_number===n)||null;const{data:a,error:l}=await r.from(Ae.orders).select("*").eq("order_number",n).limit(1);if(l)throw l;if(!a||a.length===0)return null;const o=a[0],{data:c}=await r.from(Ae.order_items).select("*").eq("order_id",o.id);return{...o,items:c||[]}},uI=async(n,r,a,l)=>{const o=Pt();if(!o){const b=xi.findIndex(m=>m.id===n||m.order_number===n);return b>=0&&(xi[b].payment_status=r,a&&(xi[b].portone_payment_id=a),xi[b].paid_at=new Date().toISOString()),xi[b]}const h=/^[0-9a-f]{8}-[0-9a-f]{4}-/.test(n)?"id":"order_number",f={payment_status:r};f.paid_at=new Date().toISOString();const g={};a&&(g.portone_payment_id=a);let p=null;try{const{data:b,error:m}=await o.from(Ae.orders).update({...f,...g}).eq(h,n).select();if(m)throw m;p=b}catch{try{const{data:b,error:m}=await o.from(Ae.orders).update(f).eq(h,n).select();if(m)throw m;p=b}catch{return console.warn("updateOrderStatus: fallback update also failed for",h,n),null}}return!p||p.length===0?(console.warn("updateOrderStatus: no rows updated for",h,n),null):p[0]},aS=async(n,r)=>{const a=Pt();if(!a)return await uI(r,"paid",n),{verified:!0};const{data:l,error:o}=await a.functions.invoke("verify-payment",{body:{paymentId:n,orderId:r}});if(o)throw o;return l},sS=async n=>{const r=Pt();if(!r)return[];const a=`*, ${Ae.order_items}(*)`,{data:l,error:o}=await r.from(Ae.orders).select(a).eq("user_id",n).order("created_at",{ascending:!1});return o?(console.error("getOrdersByUser error:",o),[]):l||[]};async function lS(){const n=Pt();if(!n)throw new Error("Supabase not configured");const{data:r,error:a}=await n.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});if(a)throw a;return r}async function oS(){const n=Pt();if(!n)throw new Error("Supabase not configured");const{data:r,error:a}=await n.auth.signInWithOAuth({provider:"kakao",options:{redirectTo:window.location.origin+window.location.pathname,scopes:"profile_nickname profile_image account_email"}});if(a)throw a;return r}async function dS(n,r){const a=Pt();if(!a)throw new Error("Supabase not configured");const{data:l,error:o}=await a.auth.signInWithPassword({email:n,password:r});if(o)throw o;return l}async function cS(n,r,a){const l=Pt();if(!l)throw new Error("Supabase not configured");const{data:o,error:c}=await l.auth.signUp({email:n,password:r,options:{data:{full_name:a,signup_domain:window.location.hostname}}});if(c)throw c;return o}async function vc(){const n=Pt();if(!n)return;const{error:r}=await n.auth.signOut({scope:"local"});if(r)throw r}async function hI(n){const r=Pt();if(!r)return null;const{data:a,error:l}=await r.from("user_profiles").select("*").eq("id",n).single();return l?(console.error("getProfile error:",l),null):a}async function uS(n){const r=Pt();if(!r)throw new Error("Supabase not configured");const{data:a,error:l}=await r.auth.resetPasswordForEmail(n,{redirectTo:window.location.origin+window.location.pathname});if(l)throw l;return a}async function Dc(n,r){const a=Pt();if(!a)return null;const{data:l,error:o}=await a.from("user_profiles").update({...r,updated_at:new Date().toISOString()}).eq("id",n).select().single();if(o)throw o;return l}const fI=["aebon@kakao.com","radical8566@gmail.com","aebon@kyonggi.ac.kr"];function gI({timeout:n=600*1e3,warningBefore:r=60*1e3,onTimeout:a,enabled:l=!0}){const o=S.useRef(a);o.current=a;const c=S.useRef(null),h=S.useRef(null),f=S.useRef(Date.now()),g=S.useRef(!1),p=S.useCallback(()=>{c.current&&clearTimeout(c.current),h.current&&clearTimeout(h.current),c.current=null,h.current=null},[]),b=S.useCallback(()=>{document.getElementById("idle-timeout-warning")?.remove()},[]),m=S.useCallback(()=>{if(document.getElementById("idle-timeout-style"))return;const x=document.createElement("style");x.id="idle-timeout-style",x.textContent=["@keyframes idleSlideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}","@keyframes idleFadeOut{from{opacity:1}to{opacity:0}}"].join(""),document.head.appendChild(x)},[]),w=S.useCallback(()=>{if(document.getElementById("idle-timeout-warning"))return;m();const x=document.createElement("div");x.id="idle-timeout-warning",x.style.cssText="position:fixed;top:16px;right:16px;z-index:99999;background:#f59e0b;color:#fff;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,.15);animation:idleSlideIn .3s ease;",x.textContent="⚠️ 1분 후 자동 로그아웃됩니다. 활동을 계속하려면 마우스를 움직여주세요.",document.body.appendChild(x)},[m]),_=S.useCallback(()=>{b(),m();const x=document.createElement("div");x.style.cssText="position:fixed;top:16px;right:16px;z-index:99999;background:#ef4444;color:#fff;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,.15);animation:idleSlideIn .3s ease;",x.textContent="🔒 10분 무동작으로 자동 로그아웃되었습니다.",document.body.appendChild(x),setTimeout(()=>{x.style.animation="idleFadeOut .3s ease forwards",setTimeout(()=>x.remove(),300)},4700)},[b,m]),O=S.useCallback(()=>{p(),b(),f.current=Date.now(),h.current=setTimeout(()=>w(),n-r),c.current=setTimeout(()=>{_(),o.current()},n)},[n,r,p,b,w,_]);S.useEffect(()=>{if(!l){p(),b();return}const x=()=>{g.current||(g.current=!0,setTimeout(()=>{g.current=!1},1e3),O())},k=()=>{document.hidden||(Date.now()-f.current>=n?(_(),o.current()):O())},M=["mousemove","keydown","click","scroll","touchstart"];return M.forEach(P=>window.addEventListener(P,x,{passive:!0})),document.addEventListener("visibilitychange",k),O(),()=>{M.forEach(P=>window.removeEventListener(P,x)),document.removeEventListener("visibilitychange",k),p(),b()}},[l,n,O,p,b,_])}function Jp(n){const r=n.replace(/\D/g,"").slice(0,11);return r.length<=3?r:r.length<=7?`${r.slice(0,3)}-${r.slice(3)}`:`${r.slice(0,3)}-${r.slice(3,7)}-${r.slice(7)}`}const pI=({user:n,onComplete:r})=>{const a=n.user_metadata||{},[l,o]=S.useState(a.full_name||a.name||""),[c,h]=S.useState(""),[f,g]=S.useState(!1),[p,b]=S.useState(""),m=async _=>{_.preventDefault(),b("");const O=l.trim();if(!O){b("이름을 입력해주세요.");return}const x=c.replace(/\D/g,"");if(x&&!/^01[0-9]\d{7,8}$/.test(x)){b("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)");return}g(!0);try{const k={name:O,display_name:O};x&&(k.phone=Jp(x)),await Dc(n.id,k),await r()}catch(k){b("저장에 실패했습니다. 다시 시도해주세요."),console.error("ProfileCompleteModal save error:",k)}finally{g(!1)}},w=async()=>{const _=l.trim();if(_)try{await Dc(n.id,{name:_,display_name:_})}catch{}await r()};return A.jsx("div",{style:{position:"fixed",inset:0,zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(4px)"},children:A.jsxs("form",{onSubmit:m,style:{background:"#fff",borderRadius:"16px",padding:"36px 32px 28px",width:"100%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0,0,0,0.3)",margin:"16px",position:"relative"},onClick:_=>_.stopPropagation(),children:[A.jsx("button",{type:"button",onClick:w,style:{position:"absolute",top:"14px",right:"14px",background:"none",border:"none",color:"#9CA3AF",cursor:"pointer",fontSize:"20px",lineHeight:1,padding:"4px 8px",borderRadius:"6px"},title:"나중에 입력",children:"✕"}),A.jsx("h2",{style:{margin:"0 0 6px",fontSize:"20px",fontWeight:700,color:"#111"},children:"프로필 정보 입력"}),A.jsxs("p",{style:{margin:"0 0 24px",fontSize:"14px",color:"#666",lineHeight:1.5},children:["원활한 수업 운영을 위해 아래 정보를 입력해주세요.",A.jsx("br",{}),A.jsx("span",{style:{color:"#9CA3AF",fontSize:"12px"},children:"전화번호는 선택 사항입니다."})]}),A.jsxs("label",{style:{display:"block",marginBottom:"16px"},children:[A.jsxs("span",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#333",marginBottom:"6px"},children:["이름 ",A.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),A.jsx("input",{type:"text",value:l,onChange:_=>o(_.target.value),placeholder:"실명을 입력해주세요",autoFocus:!0,style:{width:"100%",padding:"10px 12px",fontSize:"15px",border:"1.5px solid #d1d5db",borderRadius:"8px",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:_=>_.target.style.borderColor="#2563eb",onBlur:_=>_.target.style.borderColor="#d1d5db"})]}),A.jsxs("label",{style:{display:"block",marginBottom:"20px"},children:[A.jsxs("span",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#333",marginBottom:"6px"},children:["전화번호 ",A.jsx("span",{style:{color:"#9CA3AF",fontWeight:400},children:"(선택)"})]}),A.jsx("input",{type:"tel",value:c,onChange:_=>h(Jp(_.target.value)),placeholder:"010-0000-0000",style:{width:"100%",padding:"10px 12px",fontSize:"15px",border:"1.5px solid #d1d5db",borderRadius:"8px",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:_=>_.target.style.borderColor="#2563eb",onBlur:_=>_.target.style.borderColor="#d1d5db"})]}),p&&A.jsx("p",{style:{margin:"0 0 14px",fontSize:"13px",color:"#dc2626",fontWeight:500},children:p}),A.jsx("button",{type:"submit",disabled:f,style:{width:"100%",padding:"12px",fontSize:"15px",fontWeight:600,color:"#fff",background:f?"#93c5fd":"#2563eb",border:"none",borderRadius:"8px",cursor:f?"not-allowed":"pointer",transition:"background 0.2s",marginBottom:"10px"},children:f?"저장 중...":"저장하고 시작하기"}),A.jsx("button",{type:"button",onClick:w,disabled:f,style:{width:"100%",padding:"10px",fontSize:"14px",fontWeight:500,color:"#6B7280",background:"none",border:"1px solid #E5E7EB",borderRadius:"8px",cursor:f?"not-allowed":"pointer"},children:"나중에 입력하기"})]})})};async function vI(){const n=["../utils/supabase","../config/supabase"];for(const r of n)try{const a=await import(r);if(typeof a.default=="function")return a.default();if(a.default)return a.default;if(a.supabase)return a.supabase;if(typeof a.getSupabase=="function")return a.getSupabase()}catch{}return null}const mI=["aebon@kakao.com","aebon@kyonggi.ac.kr","radical8566@gmail.com"],yI=10080*60*1e3;function bI({user:n,siteSlug:r,shopUrl:a="https://biz-hub.dreamitbiz.com/shop"}){const[l,o]=S.useState(!1);S.useEffect(()=>{const h=`nudge_dismissed_${r}`;if(sessionStorage.getItem(h))return;const f=(n.email||"").toLowerCase();if(mI.includes(f))return;const g=n.created_at?new Date(n.created_at).getTime():Date.now();if(Date.now()-g<yI)return;(async()=>{try{const b=await vI();if(!b)return;const{data:m,error:w}=await b.from("user_licenses").select("id, license_type, site_slug, expires_at").eq("user_id",n.id);if(w)return;if(m&&m.length>0){const _=new Date;if(m.some(x=>x.expires_at&&new Date(x.expires_at)<_?!1:x.license_type==="bundle"||x.site_slug===r))return}o(!0)}catch{}})()},[n,r]);const c=()=>{sessionStorage.setItem(`nudge_dismissed_${r}`,"1"),o(!1)};return l?A.jsx("div",{onClick:c,style:{position:"fixed",inset:0,zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(3px)"},children:A.jsxs("div",{onClick:h=>h.stopPropagation(),style:{background:"#fff",borderRadius:"16px",padding:"36px 32px 28px",width:"100%",maxWidth:"420px",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",margin:"16px",position:"relative",textAlign:"center"},children:[A.jsx("button",{onClick:c,style:{position:"absolute",top:"14px",right:"14px",background:"none",border:"none",color:"#9CA3AF",cursor:"pointer",fontSize:"20px",lineHeight:1,padding:"4px 8px",borderRadius:"6px"},title:"닫기",children:"✕"}),A.jsx("div",{style:{fontSize:"48px",marginBottom:"12px"},children:"📚"}),A.jsx("h2",{style:{margin:"0 0 8px",fontSize:"20px",fontWeight:700,color:"#111"},children:"더 나은 학습 경험을 위해"}),A.jsxs("p",{style:{margin:"0 0 20px",fontSize:"14px",color:"#666",lineHeight:1.6},children:["이용권을 구매하시면 모든 콘텐츠를",A.jsx("br",{}),"제한 없이 평생 이용하실 수 있습니다."]}),A.jsxs("div",{style:{background:"#F0F7FF",borderRadius:"12px",padding:"16px",marginBottom:"20px",textAlign:"left"},children:[A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[A.jsx("span",{style:{fontSize:"14px",color:"#333"},children:"개별 사이트 이용권"}),A.jsx("span",{style:{fontSize:"16px",fontWeight:700,color:"#2563EB"},children:"30,000원"})]}),A.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[A.jsxs("span",{style:{fontSize:"14px",color:"#333"},children:["전체 사이트 이용권",A.jsx("span",{style:{background:"#DC2626",color:"#fff",fontSize:"11px",fontWeight:600,padding:"2px 6px",borderRadius:"4px",marginLeft:"6px"},children:"~55% 할인"})]}),A.jsx("span",{style:{fontSize:"16px",fontWeight:700,color:"#DC2626"},children:"150,000원"})]})]}),A.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",style:{display:"block",width:"100%",padding:"13px",fontSize:"15px",fontWeight:600,color:"#fff",background:"#2563EB",border:"none",borderRadius:"8px",cursor:"pointer",textDecoration:"none",textAlign:"center",marginBottom:"10px",boxSizing:"border-box"},children:"이용권 보기"}),A.jsx("button",{onClick:c,style:{width:"100%",padding:"11px",fontSize:"14px",fontWeight:500,color:"#6B7280",background:"none",border:"1px solid #E5E7EB",borderRadius:"8px",cursor:"pointer"},children:"다음에 할게요"}),A.jsx("p",{style:{margin:"14px 0 0",fontSize:"12px",color:"#9CA3AF"},children:"1회 결제로 평생 무제한 이용"})]})}):null}const Bv=S.createContext(null),AI=({children:n})=>{const[r,a]=S.useState(null),[l,o]=S.useState(null),[c,h]=S.useState(!0),[f,g]=S.useState(null),p=S.useCallback(async k=>{if(!k){o(null);return}let M=await hI(k.id);if(!M){const P=Pt();if(P){const R=k.user_metadata||{},q=window.location.hostname,{data:F}=await P.from("user_profiles").insert({id:k.id,email:k.email||"",name:R.full_name||R.name||"",display_name:R.full_name||R.name||"",phone:"",provider:k.app_metadata?.provider||"email",signup_domain:q,visited_sites:[q],role:"member"}).select().single();F&&(M=F)}}if(M){const P={},R=window.location.hostname;M.signup_domain||(P.signup_domain=R),(!M.role||M.role==="user")&&(P.role="member");const q=Array.isArray(M.visited_sites)?M.visited_sites:[];if(q.includes(R)||(P.visited_sites=[...q,R]),Object.keys(P).length>0)try{const F=await Dc(k.id,P);o(F)}catch{o(M)}else o(M)}try{const P=Pt();if(P){const{data:R}=await P.rpc("check_user_status",{target_user_id:k.id,current_domain:window.location.hostname});if(R&&R.status&&R.status!=="active"){g({status:R.status,reason:R.reason||"",suspended_until:R.suspended_until||null}),await vc(),a(null),o(null);return}}}catch{}},[]);S.useEffect(()=>{const k=Pt();if(!k){h(!1);return}const{data:{subscription:M}}=k.auth.onAuthStateChange((R,q)=>{const F=q?.user??null;a(F),F?(p(F),R==="SIGNED_IN"&&k.from("user_profiles").update({last_sign_in_at:new Date().toISOString()}).eq("id",F.id).then(()=>{})):o(null),R==="INITIAL_SESSION"&&h(!1)}),P=setTimeout(()=>{h(R=>(R&&console.warn("Auth: INITIAL_SESSION timeout, forcing loading=false"),!1))},5e3);return()=>{clearTimeout(P),M.unsubscribe()}},[p]);const b=S.useCallback(async()=>{await vc(),a(null),o(null)},[]),m=S.useCallback(async()=>{r&&await p(r)},[r,p]),_=[r?.email,r?.user_metadata?.email,r?.identities?.[0]?.identity_data?.email,l?.email].filter(k=>!!k).map(k=>k.toLowerCase()).some(k=>fI.includes(k)),O=!!r,x=O&&!!l&&!l.name;return gI({enabled:O,onTimeout:()=>{vc().catch(()=>{})}}),A.jsxs(Bv.Provider,{value:{user:r,profile:l,loading:c,isLoggedIn:O,isAdmin:_,needsProfileCompletion:x,signOut:b,refreshProfile:m,accountBlock:f,clearAccountBlock:()=>g(null)},children:[n,x&&A.jsx(pI,{user:r,onComplete:m}),O&&r&&!x&&A.jsx(bI,{user:r,siteSlug:yt.id})]})},Pv=()=>{const n=S.useContext(Bv);if(!n)throw new Error("useAuth must be used within AuthProvider");return n},Hv=S.createContext(null);let wI=0;function _I({children:n}){const[r,a]=S.useState([]),l=S.useRef({}),o=S.useCallback(h=>{clearTimeout(l.current[h]),delete l.current[h],a(f=>f.filter(g=>g.id!==h))},[]),c=S.useCallback((h,f="info",g=4e3)=>{const p=++wI;return a(b=>[...b,{id:p,message:h,type:f}]),l.current[p]=setTimeout(()=>o(p),g),p},[o]);return A.jsxs(Hv.Provider,{value:{showToast:c,removeToast:o},children:[n,A.jsx("div",{className:"toast-container",role:"status","aria-live":"polite",children:r.map(h=>A.jsxs("div",{className:`toast-item toast-${h.type}`,children:[A.jsxs("span",{className:"toast-icon",children:[h.type==="success"&&A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[A.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),A.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),h.type==="error"&&A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[A.jsx("circle",{cx:"12",cy:"12",r:"10"}),A.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),A.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),h.type==="info"&&A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[A.jsx("circle",{cx:"12",cy:"12",r:"10"}),A.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),A.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),h.type==="warning"&&A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[A.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),A.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),A.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})]}),A.jsx("span",{className:"toast-message",children:h.message}),A.jsx("button",{className:"toast-close",onClick:()=>o(h.id),children:A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[A.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},h.id))})]})}function hS(){const n=S.useContext(Hv);return n||{showToast:r=>(console.warn("ToastProvider not found:",r),0),removeToast:()=>{}}}const II="modulepreload",SI=function(n){return"/"+n},Xp={},Xt=function(r,a,l){let o=Promise.resolve();if(a&&a.length>0){let g=function(p){return Promise.all(p.map(b=>Promise.resolve(b).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=h?.nonce||h?.getAttribute("nonce");o=g(a.map(p=>{if(p=SI(p),p in Xp)return;Xp[p]=!0;const b=p.endsWith(".css"),m=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${m}`))return;const w=document.createElement("link");if(w.rel=b?"stylesheet":II,b||(w.as="script"),w.crossOrigin="",w.href=p,f&&w.setAttribute("nonce",f),document.head.appendChild(w),b)return new Promise((_,O)=>{w.addEventListener("load",_),w.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&c(f.reason);return r().catch(c)})},Qp=({children:n})=>{const{isLoggedIn:r,loading:a}=Pv(),l=De();return a?A.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:A.jsx("div",{className:"loading-spinner"})}):r?A.jsx(A.Fragment,{children:n}):A.jsx(vA,{to:"/login",state:{from:l},replace:!0})};function EI(n){return n.replace(/_([a-z])/g,(r,a)=>a.toUpperCase())}function mc(n){if(!n)return null;const r={};for(const[a,l]of Object.entries(n))r[EI(a)]=l;return r}async function TI(n){const r=Pt();if(!r||!n.trim())return{blog:[],board:[],gallery:[]};const a=`%${n.trim()}%`,[l,o,c]=await Promise.all([r.from("blog_posts").select("id, title, title_en, excerpt, excerpt_en, category, category_en, date").or(`title.ilike.${a},title_en.ilike.${a},excerpt.ilike.${a},excerpt_en.ilike.${a}`).order("id",{ascending:!1}).limit(5),r.from("board_posts").select("id, title, category, author, date").or(`title.ilike.${a},content.ilike.${a}`).order("id",{ascending:!1}).limit(5),r.from("gallery_items").select("id, title, title_en, description, description_en, category, date").or(`title.ilike.${a},title_en.ilike.${a},description.ilike.${a},description_en.ilike.${a}`).order("id",{ascending:!1}).limit(5)]);return{blog:(l.data||[]).map(h=>mc(h)),board:(o.data||[]).map(h=>mc(h)),gallery:(c.data||[]).map(h=>mc(h))}}const CI=({isOpen:n,onClose:r})=>{const{t:a,language:l}=$c(),o=Ol(),c=S.useRef(null),[h,f]=S.useState(""),[g,p]=S.useState({blog:[],board:[],gallery:[]}),[b,m]=S.useState(!1),w=S.useRef(null);S.useEffect(()=>(n&&(f(""),p({blog:[],board:[],gallery:[]}),setTimeout(()=>c.current?.focus(),100),document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[n]),S.useEffect(()=>{if(!n)return;const R=q=>{q.key==="Escape"&&r()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[n,r]);const _=S.useCallback(async R=>{if(!R.trim()){p({blog:[],board:[],gallery:[]});return}m(!0);try{const q=await TI(R);p(q)}catch(q){console.error("Search error:",q)}finally{m(!1)}},[]),O=R=>{const q=R.target.value;f(q),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>_(q),300)},x=R=>{r(),o(R)},k=g.blog.length+g.board.length+g.gallery.length,M=h.trim().length>0;if(!n)return null;const P=(R,q)=>{let F="/",W="";return q==="blog"?(F=`/community/blog/${R.id}`,W="Blog"):q==="board"?(F=`/community/board/${R.id}`,W="Board"):(F="/community/gallery",W="Gallery"),A.jsxs("button",{className:"search-result-item",onClick:()=>x(F),children:[A.jsx("span",{className:"search-result-type",children:W}),A.jsxs("div",{className:"search-result-info",children:[A.jsx("span",{className:"search-result-title",children:l==="en"&&R.titleEn||R.title}),A.jsxs("span",{className:"search-result-meta",children:[q==="blog"&&A.jsxs(A.Fragment,{children:[l==="en"&&R.categoryEn||R.category," · ",R.date]}),q==="board"&&A.jsxs(A.Fragment,{children:[R.author," · ",R.date]}),q==="gallery"&&A.jsx(A.Fragment,{children:R.date})]})]})]},`${q}-${R.id}`)};return A.jsx("div",{className:"search-modal-overlay",onClick:r,children:A.jsxs("div",{className:"search-modal",onClick:R=>R.stopPropagation(),children:[A.jsx("div",{className:"search-modal-header",children:A.jsxs("div",{className:"search-input-wrapper",children:[A.jsxs("svg",{className:"search-input-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"11",cy:"11",r:"8"}),A.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),A.jsx("input",{ref:c,type:"text",className:"search-input",placeholder:a("search.placeholder"),value:h,onChange:O}),A.jsx("button",{className:"search-close-btn",onClick:r,children:"ESC"})]})}),A.jsxs("div",{className:"search-modal-body",children:[b&&A.jsx("div",{className:"search-loading",children:a("search.searching")}),!b&&M&&k===0&&A.jsx("div",{className:"search-empty",children:a("search.noResults")}),!b&&!M&&A.jsx("div",{className:"search-hint",children:a("search.hint")}),!b&&g.blog.length>0&&A.jsxs("div",{className:"search-group",children:[A.jsx("h4",{className:"search-group-title",children:a("search.blog")}),g.blog.map(R=>P(R,"blog"))]}),!b&&g.board.length>0&&A.jsxs("div",{className:"search-group",children:[A.jsx("h4",{className:"search-group-title",children:a("search.board")}),g.board.map(R=>P(R,"board"))]}),!b&&g.gallery.length>0&&A.jsxs("div",{className:"search-group",children:[A.jsx("h4",{className:"search-group-title",children:a("search.gallery")}),g.gallery.map(R=>P(R,"gallery"))]})]})]})})},xI=()=>{const[n,r]=S.useState(!1),[a,l]=S.useState(!1),[o,c]=S.useState(null),[h,f]=S.useState(!1),[g,p]=S.useState(!1),[b,m]=S.useState(!1),w=S.useRef(null),_=De(),{mode:O,toggleTheme:x,colorTheme:k,setColorTheme:M}=e0(),{language:P,toggleLanguage:R,t:q}=$c(),{cartCount:F}=s0(),{isLoggedIn:W,isAdmin:J,profile:It,signOut:St}=Pv();S.useEffect(()=>{const it=()=>r(window.scrollY>50);return window.addEventListener("scroll",it),()=>window.removeEventListener("scroll",it)},[]),S.useEffect(()=>{l(!1),c(null),p(!1)},[_]),S.useEffect(()=>{const it=dt=>{w.current&&!w.current.contains(dt.target)&&p(!1)};return document.addEventListener("mousedown",it),()=>document.removeEventListener("mousedown",it)},[]);const Le=async()=>{await St(),p(!1)},ue=yt.menuItems.map(it=>({...it,label:q(it.labelKey),dropdown:it.dropdown?it.dropdown.map(dt=>({...dt,label:q(dt.labelKey)})):void 0})),Qt=it=>{const dt=it.activePath||it.path;return dt==="/"?_.pathname==="/":it.dropdown?it.dropdown.some(U=>_.pathname===U.path):_.pathname.startsWith(dt)},we=(It?.display_name||It?.email||"?")[0].toUpperCase();return A.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,children:[A.jsx("div",{className:"container",children:A.jsxs("div",{className:"nav-wrapper",children:[A.jsx("div",{className:"logo",children:A.jsx(lr,{to:"/",children:A.jsx("h1",{children:yt.brand.parts.map((it,dt)=>A.jsx("span",{className:it.className,children:it.text},dt))})})}),A.jsx("ul",{className:`nav-menu ${a?"active":""}`,children:ue.map((it,dt)=>A.jsx("li",{className:`${it.dropdown?"nav-item-dropdown":""} ${o===dt?"active":""}`,onMouseEnter:()=>it.dropdown&&c(dt),onMouseLeave:()=>it.dropdown&&c(null),children:it.dropdown?A.jsxs(A.Fragment,{children:[A.jsx(lr,{to:it.path,className:`nav-link ${Qt(it)?"active":""}`,onClick:U=>{window.innerWidth<=1100&&(U.preventDefault(),c(o===dt?null:dt))},children:it.label}),A.jsx("ul",{className:`dropdown-menu ${o===dt?"active":""}`,children:it.dropdown.map((U,$)=>A.jsx("li",{children:A.jsx(lr,{to:U.path,children:U.label})},$))})]}):A.jsx(lr,{to:it.path,className:`nav-link ${Qt(it)?"active":""}`,children:it.label})},dt))}),A.jsxs("div",{className:"nav-actions",children:[A.jsx("button",{className:"nav-search-btn",onClick:()=>m(!0),"aria-label":"Search",children:A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"11",cy:"11",r:"8"}),A.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),yt.features.shop,A.jsx("button",{className:"lang-switcher",onClick:R,"aria-label":P==="ko"?"Switch to English":"한국어로 전환",children:P==="ko"?"EN":"KR"}),A.jsxs("div",{className:"color-picker-wrapper",children:[A.jsx("button",{className:"color-picker-btn",onClick:()=>f(!h),"aria-label":"Color theme",children:A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"13.5",cy:"6.5",r:"2.5",style:{fill:"#C8102E",stroke:"none"}}),A.jsx("circle",{cx:"17.5",cy:"10.5",r:"2.5",style:{fill:"#C87200",stroke:"none"}}),A.jsx("circle",{cx:"8.5",cy:"7.5",r:"2.5",style:{fill:"#00855A",stroke:"none"}}),A.jsx("circle",{cx:"6.5",cy:"12",r:"2.5",style:{fill:"#0046C8",stroke:"none"}}),A.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.24-.3-.39-.65-.39-1.04 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.5-9-10-9z"})]})}),h&&A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"color-picker-overlay",onClick:()=>f(!1)}),A.jsxs("div",{className:"color-picker-tooltip",children:[A.jsx("div",{className:"color-picker-arrow"}),yt.colors.map(it=>A.jsx("button",{className:`color-dot${k===it.name?" active":""}`,style:{background:it.color},onClick:()=>{M(it.name),f(!1)},"aria-label":`${it.name} theme`},it.name))]})]})]}),A.jsxs("button",{className:"theme-toggle",onClick:x,"aria-label":"테마 전환","data-mode":O,children:[A.jsxs("svg",{className:"sun-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"12",cy:"12",r:"5"}),A.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),A.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),A.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),A.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),A.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),A.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),A.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),A.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),A.jsx("svg",{className:"moon-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:A.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),A.jsxs("svg",{className:"auto-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("circle",{cx:"12",cy:"12",r:"9"}),A.jsx("path",{d:"M12 3a9 9 0 0 1 0 18",fill:"currentColor",opacity:"0.3"}),A.jsx("circle",{cx:"12",cy:"12",r:"4"}),A.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),A.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),A.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),A.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),A.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"})]})]}),W?A.jsxs("div",{className:"nav-user-menu",ref:w,children:[A.jsx("button",{className:"nav-user-btn",onClick:()=>p(!g),children:A.jsx("span",{className:"nav-user-avatar-placeholder",children:we})}),g&&A.jsxs("div",{className:"nav-user-dropdown",children:[A.jsxs("div",{className:"dropdown-user-header",children:[A.jsx("span",{className:"dropdown-user-avatar",children:we}),A.jsxs("div",{className:"dropdown-user-info",children:[A.jsx("span",{className:"dropdown-user-name",children:It?.display_name||""}),A.jsx("span",{className:"dropdown-user-email",children:It?.email||""})]})]}),A.jsx("div",{className:"divider"}),A.jsxs(lr,{to:"/mypage",className:"dropdown-menu-item",children:[A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),A.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),q("auth.myPage")]}),A.jsxs(lr,{to:"/mypage/orders",className:"dropdown-menu-item",children:[A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),A.jsx("polyline",{points:"14 2 14 8 20 8"}),A.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),A.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),q("auth.orderHistory")]}),J&&A.jsxs("a",{href:yt.parentSite.url+"/admin",className:"dropdown-menu-item",target:"_blank",rel:"noopener noreferrer",children:[A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),A.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),A.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),A.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),"관리자"]}),A.jsx("div",{className:"divider"}),A.jsxs("button",{onClick:Le,className:"dropdown-menu-item logout",children:[A.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),A.jsx("polyline",{points:"16 17 21 12 16 7"}),A.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Logout"]})]})]}):A.jsx(lr,{to:"/login",className:"nav-login-btn",children:"Login"}),A.jsxs("button",{className:`mobile-toggle ${a?"active":""}`,onClick:()=>l(!a),"aria-label":"메뉴 토글",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]})]})]})}),A.jsx(CI,{isOpen:b,onClose:()=>m(!1)})]})},RI=()=>{const{t:n}=$c();return A.jsx("footer",{className:"footer",children:A.jsxs("div",{className:"container",children:[A.jsxs("div",{className:"footer-content",children:[A.jsxs("div",{className:"footer-brand",children:[A.jsx("h3",{children:yt.brand.parts.map((r,a)=>A.jsx("span",{className:r.className,children:r.text},a))}),A.jsx("p",{children:n("footer.tagline")}),A.jsxs("div",{className:"company-info",children:[A.jsx("p",{children:A.jsx("strong",{children:yt.company.name})}),A.jsxs("p",{children:["대표이사: ",yt.company.ceo]}),A.jsxs("p",{children:["사업자등록번호: ",yt.company.bizNumber]}),A.jsxs("p",{children:["통신판매신고번호: ",yt.company.salesNumber]}),A.jsxs("p",{children:["출판사 신고번호: ",yt.company.publisherNumber]})]})]}),A.jsxs("div",{className:"footer-links",children:[A.jsx("h4",{children:n("footer.quickLinks")}),A.jsx("ul",{children:yt.footerLinks.map((r,a)=>A.jsx("li",{children:A.jsx(lr,{to:r.path,children:n(r.labelKey)})},a))})]}),A.jsxs("div",{className:"footer-contact",children:[A.jsx("h4",{children:n("footer.contact")}),A.jsx("p",{children:yt.company.address}),A.jsx("p",{children:yt.company.email}),A.jsx("p",{children:yt.company.phone}),A.jsxs("p",{children:["카카오톡: ",yt.company.kakao]}),A.jsx("p",{className:"business-hours",children:yt.company.businessHours}),A.jsx("div",{className:"footer-family",children:A.jsxs("select",{defaultValue:"",onChange:r=>{r.target.value&&window.open(r.target.value,"_blank"),r.target.value=""},children:[A.jsx("option",{value:"",disabled:!0,children:"Family Site"}),A.jsxs("option",{value:yt.parentSite.url,children:[yt.parentSite.name," (본사이트)"]}),yt.familySites.map((r,a)=>A.jsx("option",{value:r.url,children:r.name},a))]})})]})]}),A.jsx("div",{className:"footer-bottom",children:A.jsxs("p",{children:["© 2020-",new Date().getFullYear()," DreamIT Biz. All rights reserved."]})})]})})},OI=S.lazy(()=>Xt(()=>import("./Home-Ce9g6WKm.js"),__vite__mapDeps([0,1,2]))),kI=S.lazy(()=>Xt(()=>import("./NotFound-BBDv1eW1.js"),__vite__mapDeps([3,1]))),NI=S.lazy(()=>Xt(()=>import("./Login-BKVGqVIJ.js"),__vite__mapDeps([4,1,5]))),jI=S.lazy(()=>Xt(()=>import("./Register-wzXdDDwQ.js"),__vite__mapDeps([6,1,5]))),DI=S.lazy(()=>Xt(()=>import("./ForgotPassword-CRk23pob.js"),__vite__mapDeps([7,1,5]))),LI=S.lazy(()=>Xt(()=>import("./MyPage-DwxcRREx.js"),__vite__mapDeps([8,1,5])));S.lazy(()=>Xt(()=>import("./Cart-BsD5vdxc.js"),__vite__mapDeps([9,10,1])));S.lazy(()=>Xt(()=>import("./Checkout-LF452ZeH.js"),__vite__mapDeps([11,10,1])));S.lazy(()=>Xt(()=>import("./OrderConfirmation-B_tZhabj.js"),__vite__mapDeps([12,10,1])));const UI=S.lazy(()=>Xt(()=>import("./OrderHistory-DxcT-Mpn.js"),__vite__mapDeps([13,5]))),MI=S.lazy(()=>Xt(()=>import("./CurriculumOverview-brlxuYtL.js"),__vite__mapDeps([14,1,2]))),Ca=S.lazy(()=>Xt(()=>import("./ChapterList-NO_jnp4r.js"),__vite__mapDeps([15,1,2,16]))),zI=S.lazy(()=>Xt(()=>import("./ChapterDetail-BthTaQ5J.js"),__vite__mapDeps([17,1,2,16]))),BI=S.lazy(()=>Xt(()=>import("./NoticeList-gdZRU0qG.js"),__vite__mapDeps([18,1]))),PI=S.lazy(()=>Xt(()=>import("./QnaList-M__DAA5l.js"),__vite__mapDeps([19,1]))),HI=S.lazy(()=>Xt(()=>import("./PracticeHome-Cgtl708C.js"),__vite__mapDeps([20,1]))),GI=S.lazy(()=>Xt(()=>import("./PracticeChatGPT-CcYNgGde.js"),__vite__mapDeps([21,1]))),qI=S.lazy(()=>Xt(()=>import("./PracticeClaude-DS4vo5oh.js"),__vite__mapDeps([22,1]))),$I=S.lazy(()=>Xt(()=>import("./PracticeGemini-BbfhvrwG.js"),__vite__mapDeps([23,1]))),VI=S.lazy(()=>Xt(()=>import("./PracticePrompt-DvxaznH9.js"),__vite__mapDeps([24,1]))),KI=()=>A.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:A.jsx("div",{className:"loading-spinner"})}),YI=()=>A.jsxs(A.Fragment,{children:[A.jsx(xI,{}),A.jsx("main",{children:A.jsx(S.Suspense,{fallback:A.jsx(KI,{}),children:A.jsxs(hv,{children:[A.jsx(Ut,{path:"/",element:A.jsx(OI,{})}),A.jsxs(A.Fragment,{children:[A.jsx(Ut,{path:"/login",element:A.jsx(NI,{})}),A.jsx(Ut,{path:"/register",element:A.jsx(jI,{})}),A.jsx(Ut,{path:"/forgot-password",element:A.jsx(DI,{})}),A.jsx(Ut,{path:"/mypage",element:A.jsx(Qp,{children:A.jsx(LI,{})})}),A.jsx(Ut,{path:"/mypage/orders",element:A.jsx(Qp,{children:A.jsx(UI,{})})})]}),yt.features.shop,A.jsx(Ut,{path:"/curriculum",element:A.jsx(MI,{})}),A.jsx(Ut,{path:"/chapters",element:A.jsx(Ca,{})}),A.jsx(Ut,{path:"/chapters/part1",element:A.jsx(Ca,{})}),A.jsx(Ut,{path:"/chapters/part2",element:A.jsx(Ca,{})}),A.jsx(Ut,{path:"/chapters/part3",element:A.jsx(Ca,{})}),A.jsx(Ut,{path:"/chapters/part4",element:A.jsx(Ca,{})}),A.jsx(Ut,{path:"/chapters/:chapterNumber",element:A.jsx(zI,{})}),A.jsx(Ut,{path:"/practice",element:A.jsx(HI,{})}),A.jsx(Ut,{path:"/practice/chatgpt",element:A.jsx(GI,{})}),A.jsx(Ut,{path:"/practice/claude",element:A.jsx(qI,{})}),A.jsx(Ut,{path:"/practice/gemini",element:A.jsx($I,{})}),A.jsx(Ut,{path:"/practice/prompt",element:A.jsx(VI,{})}),A.jsxs(A.Fragment,{children:[A.jsx(Ut,{path:"/community/notice",element:A.jsx(BI,{})}),A.jsx(Ut,{path:"/community/qna",element:A.jsx(PI,{})})]}),A.jsx(Ut,{path:"*",element:A.jsx(kI,{})})]})})}),A.jsx(RI,{})]}),JI=({children:n})=>A.jsx(A.Fragment,{children:n});function XI(){return A.jsx(t0,{children:A.jsx(i0,{children:A.jsx(AI,{children:A.jsx(_I,{children:A.jsx(JI,{children:A.jsx(GA,{children:A.jsx("div",{className:"App",children:A.jsx(hv,{children:A.jsx(Ut,{path:"*",element:A.jsx(YI,{})})})})})})})})})})}Ab.createRoot(document.getElementById("root")).render(A.jsx(S.StrictMode,{children:A.jsx(XI,{})}));export{dI as A,eS as B,cI as C,rS as D,lr as L,oI as S,Vp as a,WI as b,Pv as c,Ol as d,De as e,lS as f,FI as g,oS as h,dS as i,A as j,cS as k,uS as l,Dc as m,s0 as n,hS as o,iS as p,uI as q,S as r,yt as s,ZI as t,$c as u,aS as v,nS as w,sS as x,QI as y,tS as z};
