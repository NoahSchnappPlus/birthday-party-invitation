(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ye={},Zi=[],on=()=>{},fu=()=>!1,Kr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fo=n=>n.startsWith("onUpdate:"),mt=Object.assign,No=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},of=Object.prototype.hasOwnProperty,$e=(n,e)=>of.call(n,e),Pe=Array.isArray,Ji=n=>$s(n)==="[object Map]",Zr=n=>$s(n)==="[object Set]",ml=n=>$s(n)==="[object Date]",Oe=n=>typeof n=="function",ot=n=>typeof n=="string",Sn=n=>typeof n=="symbol",Xe=n=>n!==null&&typeof n=="object",hu=n=>(Xe(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),pu=Object.prototype.toString,$s=n=>pu.call(n),lf=n=>$s(n).slice(8,-1),mu=n=>$s(n)==="[object Object]",zo=n=>ot(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cf=/-\w/g,ln=Jr(n=>n.replace(cf,e=>e.slice(1).toUpperCase())),uf=/\B([A-Z])/g,Li=Jr(n=>n.replace(uf,"-$1").toLowerCase()),gu=Jr(n=>n.charAt(0).toUpperCase()+n.slice(1)),pa=Jr(n=>n?`on${gu(n)}`:""),vn=(n,e)=>!Object.is(n,e),Lr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Qr=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gl;const Xs=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fs(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ot(i)?pf(i):Fs(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ot(n)||Xe(n))return n}const df=/;(?![^(]*\))/g,ff=/:([^]+)/,hf=/\/\*[^]*?\*\//g;function pf(n){const e={};return n.replace(hf,"").split(df).forEach(t=>{if(t){const i=t.split(ff);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yn(n){let e="";if(ot(n))e=n;else if(Pe(n))for(let t=0;t<n.length;t++){const i=Yn(n[t]);i&&(e+=i+" ")}else if(Xe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=Oo(mf);function _u(n){return!!n||n===""}function vf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Si(n[i],e[i]);return t}function Si(n,e){if(n===e)return!0;let t=ml(n),i=ml(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Sn(n),i=Sn(e),t||i)return n===e;if(t=Pe(n),i=Pe(e),t||i)return t&&i?vf(n,e):!1;if(t=Xe(n),i=Xe(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Si(n[o],e[o]))return!1}}return String(n)===String(e)}function _f(n,e){return n.findIndex(t=>Si(t,e))}const xu=n=>!!(n&&n.__v_isRef===!0),sn=n=>ot(n)?n:n==null?"":Pe(n)||Xe(n)&&(n.toString===pu||!Oe(n.toString))?xu(n)?sn(n.value):JSON.stringify(n,yu,2):String(n),yu=(n,e)=>xu(e)?yu(n,e.value):Ji(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ma(i,r)+" =>"]=s,t),{})}:Zr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ma(t))}:Sn(e)?ma(e):Xe(e)&&!Pe(e)&&!mu(e)?String(e):e,ma=(n,e="")=>{var t;return Sn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class xf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=It;try{return It=this,e()}finally{It=t}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function yf(){return It}let Ke;const ga=new WeakSet;class bu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ga.has(this)&&(ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vl(this),wu(this);const e=Ke,t=cn;Ke=this,cn=!0;try{return this.fn()}finally{Tu(this),Ke=e,cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ko(e);this.deps=this.depsTail=void 0,vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uo(this)&&this.run()}get dirty(){return uo(this)}}let Su=0,Ls,Ps;function Mu(n,e=!1){if(n.flags|=8,e){n.next=Ps,Ps=n;return}n.next=Ls,Ls=n}function Bo(){Su++}function Uo(){if(--Su>0)return;if(Ps){let e=Ps;for(Ps=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function wu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tu(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ko(i),bf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function uo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Eu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Eu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ns)||(n.globalVersion=Ns,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!uo(n))))return;n.flags|=2;const e=n.dep,t=Ke,i=cn;Ke=n,cn=!0;try{wu(n);const s=n.fn(n._value);(e.version===0||vn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ke=t,cn=i,Tu(n),n.flags&=-3}}function ko(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ko(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let cn=!0;const Cu=[];function kn(){Cu.push(cn),cn=!1}function Gn(){const n=Cu.pop();cn=n===void 0?!0:n}function vl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ke;Ke=void 0;try{e()}finally{Ke=t}}}let Ns=0;class Sf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!cn||Ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ke)t=this.activeLink=new Sf(Ke,this),Ke.deps?(t.prevDep=Ke.depsTail,Ke.depsTail.nextDep=t,Ke.depsTail=t):Ke.deps=Ke.depsTail=t,Au(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ke.depsTail,t.nextDep=void 0,Ke.depsTail.nextDep=t,Ke.depsTail=t,Ke.deps===t&&(Ke.deps=i)}return t}trigger(e){this.version++,Ns++,this.notify(e)}notify(e){Bo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Uo()}}}function Au(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Au(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fo=new WeakMap,_i=Symbol(""),ho=Symbol(""),zs=Symbol("");function yt(n,e,t){if(cn&&Ke){let i=fo.get(n);i||fo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Go),s.map=i,s.key=t),s.track()}}function On(n,e,t,i,s,r){const o=fo.get(n);if(!o){Ns++;return}const a=l=>{l&&l.trigger()};if(Bo(),e==="clear")o.forEach(a);else{const l=Pe(n),c=l&&zo(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zs||!Sn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_i)),Ji(n)&&a(o.get(ho)));break;case"delete":l||(a(o.get(_i)),Ji(n)&&a(o.get(ho)));break;case"set":Ji(n)&&a(o.get(_i));break}}Uo()}function Pi(n){const e=qe(n);return e===n?e:(yt(e,"iterate",zs),Jt(n)?e:e.map(un))}function ea(n){return yt(n=qe(n),"iterate",zs),n}function pn(n,e){return Vn(n)?xi(n)?ss(un(e)):ss(e):un(e)}const Mf={__proto__:null,[Symbol.iterator](){return va(this,Symbol.iterator,n=>pn(this,n))},concat(...n){return Pi(this).concat(...n.map(e=>Pe(e)?Pi(e):e))},entries(){return va(this,"entries",n=>(n[1]=pn(this,n[1]),n))},every(n,e){return En(this,"every",n,e,void 0,arguments)},filter(n,e){return En(this,"filter",n,e,t=>t.map(i=>pn(this,i)),arguments)},find(n,e){return En(this,"find",n,e,t=>pn(this,t),arguments)},findIndex(n,e){return En(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return En(this,"findLast",n,e,t=>pn(this,t),arguments)},findLastIndex(n,e){return En(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return En(this,"forEach",n,e,void 0,arguments)},includes(...n){return _a(this,"includes",n)},indexOf(...n){return _a(this,"indexOf",n)},join(n){return Pi(this).join(n)},lastIndexOf(...n){return _a(this,"lastIndexOf",n)},map(n,e){return En(this,"map",n,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...n){return ps(this,"push",n)},reduce(n,...e){return _l(this,"reduce",n,e)},reduceRight(n,...e){return _l(this,"reduceRight",n,e)},shift(){return ps(this,"shift")},some(n,e){return En(this,"some",n,e,void 0,arguments)},splice(...n){return ps(this,"splice",n)},toReversed(){return Pi(this).toReversed()},toSorted(n){return Pi(this).toSorted(n)},toSpliced(...n){return Pi(this).toSpliced(...n)},unshift(...n){return ps(this,"unshift",n)},values(){return va(this,"values",n=>pn(this,n))}};function va(n,e,t){const i=ea(n),s=i[e]();return i!==n&&!Jt(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const wf=Array.prototype;function En(n,e,t,i,s,r){const o=ea(n),a=o!==n&&!Jt(n),l=o[e];if(l!==wf[e]){const d=l.apply(n,r);return a?un(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,pn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function _l(n,e,t,i){const s=ea(n),r=s!==n&&!Jt(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=pn(n,c)),t.call(this,c,pn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?pn(n,l):l}function _a(n,e,t){const i=qe(n);yt(i,"iterate",zs);const s=i[e](...t);return(s===-1||s===!1)&&jo(t[0])?(t[0]=qe(t[0]),i[e](...t)):s}function ps(n,e,t=[]){kn(),Bo();const i=qe(n)[e].apply(n,t);return Uo(),Gn(),i}const Tf=Oo("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sn));function Ef(n){Sn(n)||(n=String(n));const e=qe(this);return yt(e,"has",n),e.hasOwnProperty(n)}class Pu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Nf:Ou:r?Iu:Ru).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!s){let l;if(o&&(l=Mf[t]))return l;if(t==="hasOwnProperty")return Ef}const a=Reflect.get(e,t,bt(e)?e:i);if((Sn(t)?Lu.has(t):Tf(t))||(s||yt(e,"get",t),r))return a;if(bt(a)){const l=o&&zo(t)?a:a.value;return s&&Xe(l)?mo(l):l}return Xe(a)?s?mo(a):Ho(a):a}}class Du extends Pu{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Pe(e)&&zo(t);if(!this._isShallow){const c=Vn(r);if(!Jt(i)&&!Vn(i)&&(r=qe(r),i=qe(i)),!o&&bt(r)&&!bt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:$e(e,t),l=Reflect.set(e,t,i,bt(e)?e:s);return e===qe(s)&&(a?vn(i,r)&&On(e,"set",t,i):On(e,"add",t,i)),l}deleteProperty(e,t){const i=$e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&On(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Sn(t)||!Lu.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",Pe(e)?"length":_i),Reflect.ownKeys(e)}}class Cf extends Pu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Af=new Du,Lf=new Cf,Pf=new Du(!0);const po=n=>n,nr=n=>Reflect.getPrototypeOf(n);function Df(n,e,t){return function(...i){const s=this.__v_raw,r=qe(s),o=Ji(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?po:e?ss:un;return!e&&yt(r,"iterate",l?ho:_i),mt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ir(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Rf(n,e){const t={get(s){const r=this.__v_raw,o=qe(r),a=qe(s);n||(vn(s,a)&&yt(o,"get",s),yt(o,"get",a));const{has:l}=nr(o),c=e?po:n?ss:un;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&yt(qe(s),"iterate",_i),s.size},has(s){const r=this.__v_raw,o=qe(r),a=qe(s);return n||(vn(s,a)&&yt(o,"has",s),yt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=qe(a),c=e?po:n?ss:un;return!n&&yt(l,"iterate",_i),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return mt(t,n?{add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear")}:{add(s){const r=qe(this),o=nr(r),a=qe(s),l=!e&&!Jt(s)&&!Vn(s)?a:s;return o.has.call(r,l)||vn(s,l)&&o.has.call(r,s)||vn(a,l)&&o.has.call(r,a)||(r.add(l),On(r,"add",l,l)),this},set(s,r){!e&&!Jt(r)&&!Vn(r)&&(r=qe(r));const o=qe(this),{has:a,get:l}=nr(o);let c=a.call(o,s);c||(s=qe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?vn(r,u)&&On(o,"set",s,r):On(o,"add",s,r),this},delete(s){const r=qe(this),{has:o,get:a}=nr(r);let l=o.call(r,s);l||(s=qe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&On(r,"delete",s,void 0),c},clear(){const s=qe(this),r=s.size!==0,o=s.clear();return r&&On(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Df(s,n,e)}),t}function Vo(n,e){const t=Rf(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const If={get:Vo(!1,!1)},Of={get:Vo(!1,!0)},Ff={get:Vo(!0,!1)};const Ru=new WeakMap,Iu=new WeakMap,Ou=new WeakMap,Nf=new WeakMap;function zf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bf(n){return n.__v_skip||!Object.isExtensible(n)?0:zf(lf(n))}function Ho(n){return Vn(n)?n:Wo(n,!1,Af,If,Ru)}function Uf(n){return Wo(n,!1,Pf,Of,Iu)}function mo(n){return Wo(n,!0,Lf,Ff,Ou)}function Wo(n,e,t,i,s){if(!Xe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Bf(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function xi(n){return Vn(n)?xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Vn(n){return!!(n&&n.__v_isReadonly)}function Jt(n){return!!(n&&n.__v_isShallow)}function jo(n){return n?!!n.__v_raw:!1}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function kf(n){return!$e(n,"__v_skip")&&Object.isExtensible(n)&&vu(n,"__v_skip",!0),n}const un=n=>Xe(n)?Ho(n):n,ss=n=>Xe(n)?mo(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function Ve(n){return Gf(n,!1)}function Gf(n,e){return bt(n)?n:new Vf(n,e)}class Vf{constructor(e,t){this.dep=new Go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:qe(e),this._value=t?e:un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Jt(e)||Vn(e);e=i?e:qe(e),vn(e,t)&&(this._rawValue=e,this._value=i?e:un(e),this.dep.trigger())}}function di(n){return bt(n)?n.value:n}const Hf={get:(n,e,t)=>e==="__v_raw"?n:di(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return bt(s)&&!bt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Fu(n){return xi(n)?n:new Proxy(n,Hf)}class Wf{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return Mu(this,!0),!0}get value(){const e=this.dep.track();return Eu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jf(n,e,t=!1){let i,s;return Oe(n)?i=n:(i=n.get,s=n.set),new Wf(i,s,t)}const sr={},Br=new WeakMap;let fi;function qf(n,e=!1,t=fi){if(t){let i=Br.get(t);i||Br.set(t,i=[]),i.push(n)}}function $f(n,e,t=Ye){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:Jt(b)||s===!1||s===0?Fn(b,1):Fn(b);let u,d,f,h,x=!1,p=!1;if(bt(n)?(d=()=>n.value,x=Jt(n)):xi(n)?(d=()=>c(n),x=!0):Pe(n)?(p=!0,x=n.some(b=>xi(b)||Jt(b)),d=()=>n.map(b=>{if(bt(b))return b.value;if(xi(b))return c(b);if(Oe(b))return l?l(b,2):b()})):Oe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){kn();try{f()}finally{Gn()}}const b=fi;fi=u;try{return l?l(n,3,[h]):n(h)}finally{fi=b}}:d=on,e&&s){const b=d,M=s===!0?1/0:s;d=()=>Fn(b(),M)}const m=yf(),g=()=>{u.stop(),m&&m.active&&No(m.effects,u)};if(r&&e){const b=e;e=(...M)=>{b(...M),g()}}let _=p?new Array(n.length).fill(sr):sr;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const M=u.run();if(s||x||(p?M.some((C,P)=>vn(C,_[P])):vn(M,_))){f&&f();const C=fi;fi=u;try{const P=[M,_===sr?void 0:p&&_[0]===sr?[]:_,h];_=M,l?l(e,3,P):e(...P)}finally{fi=C}}}else u.run()};return a&&a(y),u=new bu(d),u.scheduler=o?()=>o(y,!1):y,h=b=>qf(b,!1,u),f=u.onStop=()=>{const b=Br.get(u);if(b){if(l)l(b,4);else for(const M of b)M();Br.delete(u)}},e?i?y(!0):_=u.run():o?o(y.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Fn(n,e=1/0,t){if(e<=0||!Xe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,bt(n))Fn(n.value,e,t);else if(Pe(n))for(let i=0;i<n.length;i++)Fn(n[i],e,t);else if(Zr(n)||Ji(n))n.forEach(i=>{Fn(i,e,t)});else if(mu(n)){for(const i in n)Fn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(n,e,t,i){try{return i?n(...i):n()}catch(s){ta(s,e,t)}}function Mn(n,e,t,i){if(Oe(n)){const s=Ys(n,e,t,i);return s&&hu(s)&&s.catch(r=>{ta(r,e,t)}),s}if(Pe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Mn(n[r],e,t,i));return s}}function ta(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ye;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){kn(),Ys(r,null,10,[n,l,c]),Gn();return}}Xf(n,t,s,i,o)}function Xf(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ct=[];let fn=-1;const Qi=[];let Xn=null,Xi=0;const Nu=Promise.resolve();let Ur=null;function qo(n){const e=Ur||Nu;return n?e.then(this?n.bind(this):n):e}function Yf(n){let e=fn+1,t=Ct.length;for(;e<t;){const i=e+t>>>1,s=Ct[i],r=Bs(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function $o(n){if(!(n.flags&1)){const e=Bs(n),t=Ct[Ct.length-1];!t||!(n.flags&2)&&e>=Bs(t)?Ct.push(n):Ct.splice(Yf(e),0,n),n.flags|=1,zu()}}function zu(){Ur||(Ur=Nu.then(Uu))}function Kf(n){Pe(n)?Qi.push(...n):Xn&&n.id===-1?Xn.splice(Xi+1,0,n):n.flags&1||(Qi.push(n),n.flags|=1),zu()}function xl(n,e,t=fn+1){for(;t<Ct.length;t++){const i=Ct[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ct.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bu(n){if(Qi.length){const e=[...new Set(Qi)].sort((t,i)=>Bs(t)-Bs(i));if(Qi.length=0,Xn){Xn.push(...e);return}for(Xn=e,Xi=0;Xi<Xn.length;Xi++){const t=Xn[Xi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Xn=null,Xi=0}}const Bs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uu(n){const e=on;try{for(fn=0;fn<Ct.length;fn++){const t=Ct[fn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ys(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fn<Ct.length;fn++){const t=Ct[fn];t&&(t.flags&=-2)}fn=-1,Ct.length=0,Bu(),Ur=null,(Ct.length||Qi.length)&&Uu()}}let Zt=null,ku=null;function kr(n){const e=Zt;return Zt=n,ku=n&&n.type.__scopeId||null,e}function go(n,e=Zt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Hr(-1);const r=kr(e);let o;try{o=n(...s)}finally{kr(r),i._d&&Hr(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ri(n,e){if(Zt===null)return n;const t=aa(Zt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ye]=e[s];r&&(Oe(r)&&(r={mounted:r,updated:r}),r.deep&&Fn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ai(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(kn(),Mn(l,t,8,[n.el,a,n,e]),Gn())}}function Xo(n,e){if(Lt){let t=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===t&&(t=Lt.provides=Object.create(i)),t[n]=e}}function Pr(n,e,t=!1){const i=qh();if(i||es){let s=es?es._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Oe(e)?e.call(i&&i.proxy):e}}const Zf=Symbol.for("v-scx"),Jf=()=>Pr(Zf);function Dr(n,e,t){return Gu(n,e,t)}function Gu(n,e,t=Ye){const{immediate:i,deep:s,flush:r,once:o}=t,a=mt({},t),l=e&&i||!e&&r!=="post";let c;if(ks){if(r==="sync"){const h=Jf();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=on,h.resume=on,h.pause=on,h}}const u=Lt;a.call=(h,x,p)=>Mn(h,u,x,p);let d=!1;r==="post"?a.scheduler=h=>{Rt(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,x)=>{x?h():$o(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=$f(n,e,a);return ks&&(c?c.push(f):l&&f()),f}function Qf(n,e,t){const i=this.proxy,s=ot(n)?n.includes(".")?Vu(i,n):()=>i[n]:n.bind(i,i);let r;Oe(e)?r=e:(r=e.handler,t=e);const o=Ks(this),a=Gu(s,r.bind(i),t);return o(),a}function Vu(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const eh=Symbol("_vte"),th=n=>n.__isTeleport,nh=Symbol("_leaveCb");function Yo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Yo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Hu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function yl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Gr=new WeakMap;function Ds(n,e,t,i,s=!1){if(Pe(n)){n.forEach((p,m)=>Ds(p,e&&(Pe(e)?e[m]:e),t,i,s));return}if(Rs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ds(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?aa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ye?a.refs={}:a.refs,d=a.setupState,f=qe(d),h=d===Ye?fu:p=>yl(u,p)?!1:$e(f,p),x=(p,m)=>!(m&&yl(u,m));if(c!=null&&c!==l){if(bl(e),ot(c))u[c]=null,h(c)&&(d[c]=null);else if(bt(c)){const p=e;x(c,p.k)&&(c.value=null),p.k&&(u[p.k]=null)}}if(Oe(l))Ys(l,a,12,[o,u]);else{const p=ot(l),m=bt(l);if(p||m){const g=()=>{if(n.f){const _=p?h(l)?d[l]:u[l]:x()||!n.k?l.value:u[n.k];if(s)Pe(_)&&No(_,r);else if(Pe(_))_.includes(r)||_.push(r);else if(p)u[l]=[r],h(l)&&(d[l]=u[l]);else{const y=[r];x(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else p?(u[l]=o,h(l)&&(d[l]=o)):m&&(x(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const _=()=>{g(),Gr.delete(n)};_.id=-1,Gr.set(n,_),Rt(_,t)}else bl(n),g()}}}function bl(n){const e=Gr.get(n);e&&(e.flags|=8,Gr.delete(n))}Xs().requestIdleCallback;Xs().cancelIdleCallback;const Rs=n=>!!n.type.__asyncLoader,Wu=n=>n.type.__isKeepAlive;function ih(n,e){ju(n,"a",e)}function sh(n,e){ju(n,"da",e)}function ju(n,e,t=Lt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(na(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Wu(s.parent.vnode)&&rh(i,e,t,s),s=s.parent}}function rh(n,e,t,i){const s=na(e,n,i,!0);Jo(()=>{No(i[e],s)},t)}function na(n,e,t=Lt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{kn();const a=Ks(t),l=Mn(e,t,n,o);return a(),Gn(),l});return i?s.unshift(r):s.push(r),r}}const Hn=n=>(e,t=Lt)=>{(!ks||n==="sp")&&na(n,(...i)=>e(...i),t)},ah=Hn("bm"),ia=Hn("m"),qu=Hn("bu"),Ko=Hn("u"),Zo=Hn("bum"),Jo=Hn("um"),oh=Hn("sp"),lh=Hn("rtg"),ch=Hn("rtc");function uh(n,e=Lt){na("ec",n,e)}const dh=Symbol.for("v-ndc");function Di(n,e,t,i){let s;const r=t&&t[i],o=Pe(n);if(o||ot(n)){const a=o&&xi(n);let l=!1,c=!1;a&&(l=!Jt(n),c=Vn(n),n=ea(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?ss(un(n[u])):un(n[u]):n[u],u,void 0,r&&r[u])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Xe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}const vo=n=>n?hd(n)?aa(n):vo(n.parent):null,Is=mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vo(n.parent),$root:n=>vo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Qo(n),$forceUpdate:n=>n.f||(n.f=()=>{$o(n.update)}),$nextTick:n=>n.n||(n.n=qo.bind(n.proxy)),$watch:n=>Qf.bind(n)}),xa=(n,e)=>n!==Ye&&!n.__isScriptSetup&&$e(n,e),fh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xa(i,e))return o[e]=1,i[e];if(s!==Ye&&$e(s,e))return o[e]=2,s[e];if($e(r,e))return o[e]=3,r[e];if(t!==Ye&&$e(t,e))return o[e]=4,t[e];_o&&(o[e]=0)}}const c=Is[e];let u,d;if(c)return e==="$attrs"&&yt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ye&&$e(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,$e(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return xa(s,e)?(s[e]=t,!0):i!==Ye&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ye&&a[0]!=="$"&&$e(n,a)||xa(e,a)||$e(r,a)||$e(i,a)||$e(Is,a)||$e(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sl(n){return Pe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _o=!0;function hh(n){const e=Qo(n),t=n.proxy,i=n.ctx;_o=!1,e.beforeCreate&&Ml(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:x,activated:p,deactivated:m,beforeDestroy:g,beforeUnmount:_,destroyed:y,unmounted:b,render:M,renderTracked:C,renderTriggered:P,errorCaptured:v,serverPrefetch:A,expose:L,inheritAttrs:N,components:X,directives:I,filters:R}=e;if(c&&ph(c,i,null),o)for(const k in o){const O=o[k];Oe(O)&&(i[k]=O.bind(t))}if(s){const k=s.call(t,t);Xe(k)&&(n.data=Ho(k))}if(_o=!0,r)for(const k in r){const O=r[k],ne=Oe(O)?O.bind(t,t):Oe(O.get)?O.get.bind(t,t):on,oe=!Oe(O)&&Oe(O.set)?O.set.bind(t):on,q=md({get:ne,set:oe});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>q.value,set:K=>q.value=K})}if(a)for(const k in a)$u(a[k],i,t,k);if(l){const k=Oe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(O=>{Xo(O,k[O])})}u&&Ml(u,n,"c");function te(k,O){Pe(O)?O.forEach(ne=>k(ne.bind(t))):O&&k(O.bind(t))}if(te(ah,d),te(ia,f),te(qu,h),te(Ko,x),te(ih,p),te(sh,m),te(uh,v),te(ch,C),te(lh,P),te(Zo,_),te(Jo,b),te(oh,A),Pe(L))if(L.length){const k=n.exposed||(n.exposed={});L.forEach(O=>{Object.defineProperty(k,O,{get:()=>t[O],set:ne=>t[O]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});M&&n.render===on&&(n.render=M),N!=null&&(n.inheritAttrs=N),X&&(n.components=X),I&&(n.directives=I),A&&Hu(n)}function ph(n,e,t=on){Pe(n)&&(n=xo(n));for(const i in n){const s=n[i];let r;Xe(s)?"default"in s?r=Pr(s.from||i,s.default,!0):r=Pr(s.from||i):r=Pr(s),bt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ml(n,e,t){Mn(Pe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $u(n,e,t,i){let s=i.includes(".")?Vu(t,i):()=>t[i];if(ot(n)){const r=e[n];Oe(r)&&Dr(s,r)}else if(Oe(n))Dr(s,n.bind(t));else if(Xe(n))if(Pe(n))n.forEach(r=>$u(r,e,t,i));else{const r=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(r)&&Dr(s,r,n)}}function Qo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Vr(l,c,o,!0)),Vr(l,e,o)),Xe(e)&&r.set(e,l),l}function Vr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Vr(n,r,t,!0),s&&s.forEach(o=>Vr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=mh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const mh={data:wl,props:Tl,emits:Tl,methods:Ts,computed:Ts,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Ts,directives:Ts,watch:vh,provide:wl,inject:gh};function wl(n,e){return e?n?function(){return mt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function gh(n,e){return Ts(xo(n),xo(e))}function xo(n){if(Pe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ts(n,e){return n?mt(Object.create(null),n,e):e}function Tl(n,e){return n?Pe(n)&&Pe(e)?[...new Set([...n,...e])]:mt(Object.create(null),Sl(n),Sl(e!=null?e:{})):e}function vh(n,e){if(!n)return e;if(!e)return n;const t=mt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function Xu(){return{app:null,config:{isNativeTag:fu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _h=0;function xh(n,e){return function(i,s=null){Oe(i)||(i=mt({},i)),s!=null&&!Xe(s)&&(s=null);const r=Xu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:_h++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Jh,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Oe(u.install)?(o.add(u),u.install(c,...d)):Oe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Pt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(h,u):n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,aa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=es;es=c;try{return u()}finally{es=d}}};return c}}let es=null;const yh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${Li(e)}Modifiers`];function bh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ye;let s=t;const r=e.startsWith("update:"),o=r&&yh(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>ot(u)?u.trim():u)),o.number&&(s=t.map(Qr)));let a,l=i[a=pa(e)]||i[a=pa(ln(e))];!l&&r&&(l=i[a=pa(Li(e))]),l&&Mn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Mn(c,n,6,s)}}const Sh=new WeakMap;function Yu(n,e,t=!1){const i=t?Sh:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const u=Yu(c,e,!0);u&&(a=!0,mt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Xe(n)&&i.set(n,null),null):(Pe(r)?r.forEach(l=>o[l]=null):mt(o,r),Xe(n)&&i.set(n,o),o)}function sa(n,e){return!n||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,Li(e))||$e(n,e))}function ya(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:x,inheritAttrs:p}=n,m=kr(n);let g,_;try{if(t.shapeFlag&4){const b=s||i,M=b;g=mn(c.call(M,b,u,d,h,f,x)),_=a}else{const b=e;g=mn(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),_=e.props?a:Mh(a)}}catch(b){Os.length=0,ta(b,n,1),g=Pt(Qn)}let y=g;if(_&&p!==!1){const b=Object.keys(_),{shapeFlag:M}=y;b.length&&M&7&&(r&&b.some(Fo)&&(_=wh(_,r)),y=rs(y,_,!1,!0))}return t.dirs&&(y=rs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Yo(y,t.transition),g=y,kr(m),g}const Mh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Kr(t))&&((e||(e={}))[t]=n[t]);return e},wh=(n,e)=>{const t={};for(const i in n)(!Fo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Th(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?El(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ku(o,i,f)&&!sa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?El(i,o,c):!0:!!o;return!1}function El(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ku(e,n,r)&&!sa(t,r))return!0}return!1}function Ku(n,e,t){const i=n[t],s=e[t];return t==="style"&&Xe(i)&&Xe(s)?!Si(i,s):i!==s}function Eh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zu={},Ju=()=>Object.create(Zu),Qu=n=>Object.getPrototypeOf(n)===Zu;function Ch(n,e,t,i=!1){const s={},r=Ju();n.propsDefaults=Object.create(null),ed(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Uf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ah(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=qe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(sa(n.emitsOptions,f))continue;const h=e[f];if(l)if($e(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const x=ln(f);s[x]=yo(l,a,x,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{ed(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!$e(e,d)&&((u=Li(d))===d||!$e(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=yo(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!$e(e,d)&&!0)&&(delete r[d],c=!0)}c&&On(n.attrs,"set","")}function ed(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(As(l))continue;const c=e[l];let u;s&&$e(s,u=ln(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=qe(t),c=a||Ye;for(let u=0;u<r.length;u++){const d=r[u];t[d]=yo(s,l,d,c[d],n,!$e(c,d))}}return o}function yo(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=$e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ks(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Li(t))&&(i=!0))}return i}const Lh=new WeakMap;function td(n,e,t=!1){const i=t?Lh:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Oe(n)){const u=d=>{l=!0;const[f,h]=td(d,e,!0);mt(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Xe(n)&&i.set(n,Zi),Zi;if(Pe(r))for(let u=0;u<r.length;u++){const d=ln(r[u]);Cl(d)&&(o[d]=Ye)}else if(r)for(const u in r){const d=ln(u);if(Cl(d)){const f=r[u],h=o[d]=Pe(f)||Oe(f)?{type:f}:mt({},f),x=h.type;let p=!1,m=!0;if(Pe(x))for(let g=0;g<x.length;++g){const _=x[g],y=Oe(_)&&_.name;if(y==="Boolean"){p=!0;break}else y==="String"&&(m=!1)}else p=Oe(x)&&x.name==="Boolean";h[0]=p,h[1]=m,(p||$e(h,"default"))&&a.push(d)}}const c=[o,a];return Xe(n)&&i.set(n,c),c}function Cl(n){return n[0]!=="$"&&!As(n)}const el=n=>n==="_"||n==="_ctx"||n==="$stable",tl=n=>Pe(n)?n.map(mn):[mn(n)],Ph=(n,e,t)=>{if(e._n)return e;const i=go((...s)=>tl(e(...s)),t);return i._c=!1,i},nd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(el(s))continue;const r=n[s];if(Oe(r))e[s]=Ph(s,r,i);else if(r!=null){const o=tl(r);e[s]=()=>o}}},id=(n,e)=>{const t=tl(e);n.slots.default=()=>t},sd=(n,e,t)=>{for(const i in e)(t||!el(i))&&(n[i]=e[i])},Dh=(n,e,t)=>{const i=n.slots=Ju();if(n.vnode.shapeFlag&32){const s=e._;s?(sd(i,e,t),t&&vu(i,"_",s,!0)):nd(e,i)}else e&&id(n,e)},Rh=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ye;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:sd(s,e,t):(r=!e.$stable,nd(e,s)),o=e}else e&&(id(n,e),o={default:1});if(r)for(const a in s)!el(a)&&o[a]==null&&delete s[a]};function Ih(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Xs().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Rt=Bh;function Oh(n){return Fh(n)}function Fh(n,e){Ih();const t=Xs();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=on,insertStaticContent:x}=n,p=(T,D,$,le=null,ae=null,se=null,ue=void 0,me=null,fe=!!D.dynamicChildren)=>{if(T===D)return;T&&!ms(T,D)&&(le=B(T),K(T,ae,se,!0),T=null),D.patchFlag===-2&&(fe=!1,D.dynamicChildren=null);const{type:w,ref:S,shapeFlag:F}=D;switch(w){case ra:m(T,D,$,le);break;case Qn:g(T,D,$,le);break;case Rr:T==null&&_(D,$,le,ue);break;case At:X(T,D,$,le,ae,se,ue,me,fe);break;default:F&1?M(T,D,$,le,ae,se,ue,me,fe):F&6?I(T,D,$,le,ae,se,ue,me,fe):(F&64||F&128)&&w.process(T,D,$,le,ae,se,ue,me,fe,be)}S!=null&&ae?Ds(S,T&&T.ref,se,D||T,!D):S==null&&T&&T.ref!=null&&Ds(T.ref,null,se,T,!0)},m=(T,D,$,le)=>{if(T==null)i(D.el=a(D.children),$,le);else{const ae=D.el=T.el;D.children!==T.children&&c(ae,D.children)}},g=(T,D,$,le)=>{T==null?i(D.el=l(D.children||""),$,le):D.el=T.el},_=(T,D,$,le)=>{[T.el,T.anchor]=x(T.children,D,$,le,T.el,T.anchor)},y=({el:T,anchor:D},$,le)=>{let ae;for(;T&&T!==D;)ae=f(T),i(T,$,le),T=ae;i(D,$,le)},b=({el:T,anchor:D})=>{let $;for(;T&&T!==D;)$=f(T),s(T),T=$;s(D)},M=(T,D,$,le,ae,se,ue,me,fe)=>{if(D.type==="svg"?ue="svg":D.type==="math"&&(ue="mathml"),T==null)C(D,$,le,ae,se,ue,me,fe);else{const w=T.el&&T.el._isVueCE?T.el:null;try{w&&w._beginPatch(),A(T,D,ae,se,ue,me,fe)}finally{w&&w._endPatch()}}},C=(T,D,$,le,ae,se,ue,me)=>{let fe,w;const{props:S,shapeFlag:F,transition:W,dirs:Z}=T;if(fe=T.el=o(T.type,se,S&&S.is,S),F&8?u(fe,T.children):F&16&&v(T.children,fe,null,le,ae,ba(T,se),ue,me),Z&&ai(T,null,le,"created"),P(fe,T,T.scopeId,ue,le),S){for(const ye in S)ye!=="value"&&!As(ye)&&r(fe,ye,null,S[ye],se,le);"value"in S&&r(fe,"value",null,S.value,se),(w=S.onVnodeBeforeMount)&&dn(w,le,T)}Z&&ai(T,null,le,"beforeMount");const ce=Nh(ae,W);ce&&W.beforeEnter(fe),i(fe,D,$),((w=S&&S.onVnodeMounted)||ce||Z)&&Rt(()=>{w&&dn(w,le,T),ce&&W.enter(fe),Z&&ai(T,null,le,"mounted")},ae)},P=(T,D,$,le,ae)=>{if($&&h(T,$),le)for(let se=0;se<le.length;se++)h(T,le[se]);if(ae){let se=ae.subTree;if(D===se||ld(se.type)&&(se.ssContent===D||se.ssFallback===D)){const ue=ae.vnode;P(T,ue,ue.scopeId,ue.slotScopeIds,ae.parent)}}},v=(T,D,$,le,ae,se,ue,me,fe=0)=>{for(let w=fe;w<T.length;w++){const S=T[w]=me?In(T[w]):mn(T[w]);p(null,S,D,$,le,ae,se,ue,me)}},A=(T,D,$,le,ae,se,ue)=>{const me=D.el=T.el;let{patchFlag:fe,dynamicChildren:w,dirs:S}=D;fe|=T.patchFlag&16;const F=T.props||Ye,W=D.props||Ye;let Z;if($&&oi($,!1),(Z=W.onVnodeBeforeUpdate)&&dn(Z,$,D,T),S&&ai(D,T,$,"beforeUpdate"),$&&oi($,!0),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(me,""),w?L(T.dynamicChildren,w,me,$,le,ba(D,ae),se):ue||O(T,D,me,null,$,le,ba(D,ae),se,!1),fe>0){if(fe&16)N(me,F,W,$,ae);else if(fe&2&&F.class!==W.class&&r(me,"class",null,W.class,ae),fe&4&&r(me,"style",F.style,W.style,ae),fe&8){const ce=D.dynamicProps;for(let ye=0;ye<ce.length;ye++){const de=ce[ye],J=F[de],Me=W[de];(Me!==J||de==="value")&&r(me,de,J,Me,ae,$)}}fe&1&&T.children!==D.children&&u(me,D.children)}else!ue&&w==null&&N(me,F,W,$,ae);((Z=W.onVnodeUpdated)||S)&&Rt(()=>{Z&&dn(Z,$,D,T),S&&ai(D,T,$,"updated")},le)},L=(T,D,$,le,ae,se,ue)=>{for(let me=0;me<D.length;me++){const fe=T[me],w=D[me],S=fe.el&&(fe.type===At||!ms(fe,w)||fe.shapeFlag&198)?d(fe.el):$;p(fe,w,S,null,le,ae,se,ue,!0)}},N=(T,D,$,le,ae)=>{if(D!==$){if(D!==Ye)for(const se in D)!As(se)&&!(se in $)&&r(T,se,D[se],null,ae,le);for(const se in $){if(As(se))continue;const ue=$[se],me=D[se];ue!==me&&se!=="value"&&r(T,se,me,ue,ae,le)}"value"in $&&r(T,"value",D.value,$.value,ae)}},X=(T,D,$,le,ae,se,ue,me,fe)=>{const w=D.el=T?T.el:a(""),S=D.anchor=T?T.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:Z}=D;Z&&(me=me?me.concat(Z):Z),T==null?(i(w,$,le),i(S,$,le),v(D.children||[],$,S,ae,se,ue,me,fe)):F>0&&F&64&&W&&T.dynamicChildren&&T.dynamicChildren.length===W.length?(L(T.dynamicChildren,W,$,ae,se,ue,me),(D.key!=null||ae&&D===ae.subTree)&&rd(T,D,!0)):O(T,D,$,S,ae,se,ue,me,fe)},I=(T,D,$,le,ae,se,ue,me,fe)=>{D.slotScopeIds=me,T==null?D.shapeFlag&512?ae.ctx.activate(D,$,le,ue,fe):R(D,$,le,ae,se,ue,fe):j(T,D,fe)},R=(T,D,$,le,ae,se,ue)=>{const me=T.component=jh(T,le,ae);if(Wu(T)&&(me.ctx.renderer=be),$h(me,!1,ue),me.asyncDep){if(ae&&ae.registerDep(me,te,ue),!T.el){const fe=me.subTree=Pt(Qn);g(null,fe,D,$),T.placeholder=fe.el}}else te(me,T,D,$,ae,se,ue)},j=(T,D,$)=>{const le=D.component=T.component;if(Th(T,D,$))if(le.asyncDep&&!le.asyncResolved){k(le,D,$);return}else le.next=D,le.update();else D.el=T.el,le.vnode=D},te=(T,D,$,le,ae,se,ue)=>{const me=()=>{if(T.isMounted){let{next:F,bu:W,u:Z,parent:ce,vnode:ye}=T;{const xe=ad(T);if(xe){F&&(F.el=ye.el,k(T,F,ue)),xe.asyncDep.then(()=>{Rt(()=>{T.isUnmounted||w()},ae)});return}}let de=F,J;oi(T,!1),F?(F.el=ye.el,k(T,F,ue)):F=ye,W&&Lr(W),(J=F.props&&F.props.onVnodeBeforeUpdate)&&dn(J,ce,F,ye),oi(T,!0);const Me=ya(T),Te=T.subTree;T.subTree=Me,p(Te,Me,d(Te.el),B(Te),T,ae,se),F.el=Me.el,de===null&&Eh(T,Me.el),Z&&Rt(Z,ae),(J=F.props&&F.props.onVnodeUpdated)&&Rt(()=>dn(J,ce,F,ye),ae)}else{let F;const{el:W,props:Z}=D,{bm:ce,m:ye,parent:de,root:J,type:Me}=T,Te=Rs(D);if(oi(T,!1),ce&&Lr(ce),!Te&&(F=Z&&Z.onVnodeBeforeMount)&&dn(F,de,D),oi(T,!0),W&&Ie){const xe=()=>{T.subTree=ya(T),Ie(W,T.subTree,T,ae,null)};Te&&Me.__asyncHydrate?Me.__asyncHydrate(W,T,xe):xe()}else{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(Me,T.parent?T.parent.type:void 0);const xe=T.subTree=ya(T);p(null,xe,$,le,T,ae,se),D.el=xe.el}if(ye&&Rt(ye,ae),!Te&&(F=Z&&Z.onVnodeMounted)){const xe=D;Rt(()=>dn(F,de,xe),ae)}(D.shapeFlag&256||de&&Rs(de.vnode)&&de.vnode.shapeFlag&256)&&T.a&&Rt(T.a,ae),T.isMounted=!0,D=$=le=null}};T.scope.on();const fe=T.effect=new bu(me);T.scope.off();const w=T.update=fe.run.bind(fe),S=T.job=fe.runIfDirty.bind(fe);S.i=T,S.id=T.uid,fe.scheduler=()=>$o(S),oi(T,!0),w()},k=(T,D,$)=>{D.component=T;const le=T.vnode.props;T.vnode=D,T.next=null,Ah(T,D.props,le,$),Rh(T,D.children,$),kn(),xl(T),Gn()},O=(T,D,$,le,ae,se,ue,me,fe=!1)=>{const w=T&&T.children,S=T?T.shapeFlag:0,F=D.children,{patchFlag:W,shapeFlag:Z}=D;if(W>0){if(W&128){oe(w,F,$,le,ae,se,ue,me,fe);return}else if(W&256){ne(w,F,$,le,ae,se,ue,me,fe);return}}Z&8?(S&16&&U(w,ae,se),F!==w&&u($,F)):S&16?Z&16?oe(w,F,$,le,ae,se,ue,me,fe):U(w,ae,se,!0):(S&8&&u($,""),Z&16&&v(F,$,le,ae,se,ue,me,fe))},ne=(T,D,$,le,ae,se,ue,me,fe)=>{T=T||Zi,D=D||Zi;const w=T.length,S=D.length,F=Math.min(w,S);let W;for(W=0;W<F;W++){const Z=D[W]=fe?In(D[W]):mn(D[W]);p(T[W],Z,$,null,ae,se,ue,me,fe)}w>S?U(T,ae,se,!0,!1,F):v(D,$,le,ae,se,ue,me,fe,F)},oe=(T,D,$,le,ae,se,ue,me,fe)=>{let w=0;const S=D.length;let F=T.length-1,W=S-1;for(;w<=F&&w<=W;){const Z=T[w],ce=D[w]=fe?In(D[w]):mn(D[w]);if(ms(Z,ce))p(Z,ce,$,null,ae,se,ue,me,fe);else break;w++}for(;w<=F&&w<=W;){const Z=T[F],ce=D[W]=fe?In(D[W]):mn(D[W]);if(ms(Z,ce))p(Z,ce,$,null,ae,se,ue,me,fe);else break;F--,W--}if(w>F){if(w<=W){const Z=W+1,ce=Z<S?D[Z].el:le;for(;w<=W;)p(null,D[w]=fe?In(D[w]):mn(D[w]),$,ce,ae,se,ue,me,fe),w++}}else if(w>W)for(;w<=F;)K(T[w],ae,se,!0),w++;else{const Z=w,ce=w,ye=new Map;for(w=ce;w<=W;w++){const De=D[w]=fe?In(D[w]):mn(D[w]);De.key!=null&&ye.set(De.key,w)}let de,J=0;const Me=W-ce+1;let Te=!1,xe=0;const Ee=new Array(Me);for(w=0;w<Me;w++)Ee[w]=0;for(w=Z;w<=F;w++){const De=T[w];if(J>=Me){K(De,ae,se,!0);continue}let Be;if(De.key!=null)Be=ye.get(De.key);else for(de=ce;de<=W;de++)if(Ee[de-ce]===0&&ms(De,D[de])){Be=de;break}Be===void 0?K(De,ae,se,!0):(Ee[Be-ce]=w+1,Be>=xe?xe=Be:Te=!0,p(De,D[Be],$,null,ae,se,ue,me,fe),J++)}const Ce=Te?zh(Ee):Zi;for(de=Ce.length-1,w=Me-1;w>=0;w--){const De=ce+w,Be=D[De],nt=D[De+1],z=De+1<S?nt.el||od(nt):le;Ee[w]===0?p(null,Be,$,z,ae,se,ue,me,fe):Te&&(de<0||w!==Ce[de]?q(Be,$,z,2):de--)}}},q=(T,D,$,le,ae=null)=>{const{el:se,type:ue,transition:me,children:fe,shapeFlag:w}=T;if(w&6){q(T.component.subTree,D,$,le);return}if(w&128){T.suspense.move(D,$,le);return}if(w&64){ue.move(T,D,$,be);return}if(ue===At){i(se,D,$);for(let F=0;F<fe.length;F++)q(fe[F],D,$,le);i(T.anchor,D,$);return}if(ue===Rr){y(T,D,$);return}if(le!==2&&w&1&&me)if(le===0)me.beforeEnter(se),i(se,D,$),Rt(()=>me.enter(se),ae);else{const{leave:F,delayLeave:W,afterLeave:Z}=me,ce=()=>{T.ctx.isUnmounted?s(se):i(se,D,$)},ye=()=>{se._isLeaving&&se[nh](!0),F(se,()=>{ce(),Z&&Z()})};W?W(se,ce,ye):ye()}else i(se,D,$)},K=(T,D,$,le=!1,ae=!1)=>{const{type:se,props:ue,ref:me,children:fe,dynamicChildren:w,shapeFlag:S,patchFlag:F,dirs:W,cacheIndex:Z}=T;if(F===-2&&(ae=!1),me!=null&&(kn(),Ds(me,null,$,T,!0),Gn()),Z!=null&&(D.renderCache[Z]=void 0),S&256){D.ctx.deactivate(T);return}const ce=S&1&&W,ye=!Rs(T);let de;if(ye&&(de=ue&&ue.onVnodeBeforeUnmount)&&dn(de,D,T),S&6)_e(T.component,$,le);else{if(S&128){T.suspense.unmount($,le);return}ce&&ai(T,null,D,"beforeUnmount"),S&64?T.type.remove(T,D,$,be,le):w&&!w.hasOnce&&(se!==At||F>0&&F&64)?U(w,D,$,!1,!0):(se===At&&F&384||!ae&&S&16)&&U(fe,D,$),le&&he(T)}(ye&&(de=ue&&ue.onVnodeUnmounted)||ce)&&Rt(()=>{de&&dn(de,D,T),ce&&ai(T,null,D,"unmounted")},$)},he=T=>{const{type:D,el:$,anchor:le,transition:ae}=T;if(D===At){ge($,le);return}if(D===Rr){b(T);return}const se=()=>{s($),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(T.shapeFlag&1&&ae&&!ae.persisted){const{leave:ue,delayLeave:me}=ae,fe=()=>ue($,se);me?me(T.el,se,fe):fe()}else se()},ge=(T,D)=>{let $;for(;T!==D;)$=f(T),s(T),T=$;s(D)},_e=(T,D,$)=>{const{bum:le,scope:ae,job:se,subTree:ue,um:me,m:fe,a:w}=T;Al(fe),Al(w),le&&Lr(le),ae.stop(),se&&(se.flags|=8,K(ue,T,D,$)),me&&Rt(me,D),Rt(()=>{T.isUnmounted=!0},D)},U=(T,D,$,le=!1,ae=!1,se=0)=>{for(let ue=se;ue<T.length;ue++)K(T[ue],D,$,le,ae)},B=T=>{if(T.shapeFlag&6)return B(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const D=f(T.anchor||T.el),$=D&&D[eh];return $?f($):D};let Q=!1;const Se=(T,D,$)=>{let le;T==null?D._vnode&&(K(D._vnode,null,null,!0),le=D._vnode.component):p(D._vnode||null,T,D,null,null,null,$),D._vnode=T,Q||(Q=!0,xl(le),Bu(),Q=!1)},be={p,um:K,m:q,r:he,mt:R,mc:v,pc:O,pbc:L,n:B,o:n};let He,Ie;return e&&([He,Ie]=e(be)),{render:Se,hydrate:He,createApp:xh(Se,He)}}function ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Nh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function rd(n,e,t=!1){const i=n.children,s=e.children;if(Pe(i)&&Pe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=In(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&rd(o,a)),a.type===ra&&(a.patchFlag===-1&&(a=s[r]=In(a)),a.el=o.el),a.type===Qn&&!a.el&&(a.el=o.el)}}function zh(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ad(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ad(e)}function Al(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function od(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?od(e.subTree):null}const ld=n=>n.__isSuspense;function Bh(n,e){e&&e.pendingBranch?Pe(n)?e.effects.push(...n):e.effects.push(n):Kf(n)}const At=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),Os=[];let Gt=null;function tt(n=!1){Os.push(Gt=n?null:[])}function Uh(){Os.pop(),Gt=Os[Os.length-1]||null}let Us=1;function Hr(n,e=!1){Us+=n,n<0&&Gt&&e&&(Gt.hasOnce=!0)}function cd(n){return n.dynamicChildren=Us>0?Gt||Zi:null,Uh(),Us>0&&Gt&&Gt.push(n),n}function rt(n,e,t,i,s,r){return cd(V(n,e,t,i,s,r,!0))}function ud(n,e,t,i,s){return cd(Pt(n,e,t,i,s,!0))}function Wr(n){return n?n.__v_isVNode===!0:!1}function ms(n,e){return n.type===e.type&&n.key===e.key}const dd=({key:n})=>n!=null?n:null,Ir=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ot(n)||bt(n)||Oe(n)?{i:Zt,r:n,k:e,f:!!t}:n:null);function V(n,e=null,t=null,i=0,s=null,r=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&dd(e),ref:e&&Ir(e),scopeId:ku,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return a?(nl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ot(t)?8:16),Us>0&&!o&&Gt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gt.push(l),l}const Pt=kh;function kh(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===dh)&&(n=Qn),Wr(n)){const a=rs(n,e,!0);return t&&nl(a,t),Us>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(n)]=a:Gt.push(a)),a.patchFlag=-2,a}if(Zh(n)&&(n=n.__vccOpts),e){e=Gh(e);let{class:a,style:l}=e;a&&!ot(a)&&(e.class=Yn(a)),Xe(l)&&(jo(l)&&!Pe(l)&&(l=mt({},l)),e.style=Fs(l))}const o=ot(n)?1:ld(n)?128:th(n)?64:Xe(n)?4:Oe(n)?2:0;return V(n,e,t,i,s,o,r,!0)}function Gh(n){return n?jo(n)||Qu(n)?mt({},n):n:null}function rs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Vh(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&dd(c),ref:e&&e.ref?t&&r?Pe(r)?r.concat(Ir(e)):[r,Ir(e)]:Ir(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rs(n.ssContent),ssFallback:n.ssFallback&&rs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yo(u,l.clone(u)),u}function fd(n=" ",e=0){return Pt(ra,null,n,e)}function gs(n,e){const t=Pt(Rr,null,n);return t.staticCount=e,t}function Ri(n="",e=!1){return e?(tt(),ud(Qn,null,n)):Pt(Qn,null,n)}function mn(n){return n==null||typeof n=="boolean"?Pt(Qn):Pe(n)?Pt(At,null,n.slice()):Wr(n)?In(n):Pt(ra,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rs(n)}function nl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),nl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Qu(e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),i&64?(t=16,e=[fd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Yn([e.class,i.class]));else if(s==="style")e.style=Fs([e.style,i.style]);else if(Kr(s)){const r=e[s],o=i[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function dn(n,e,t,i=null){Mn(n,e,7,[t,i])}const Hh=Xu();let Wh=0;function jh(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Hh,r={uid:Wh++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:td(i,s),emitsOptions:Yu(i,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:i.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bh.bind(null,r),n.ce&&n.ce(r),r}let Lt=null;const qh=()=>Lt||Zt;let jr,bo;{const n=Xs(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jr=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),bo=e("__VUE_SSR_SETTERS__",t=>ks=t)}const Ks=n=>{const e=Lt;return jr(n),n.scope.on(),()=>{n.scope.off(),jr(e)}},Ll=()=>{Lt&&Lt.scope.off(),jr(null)};function hd(n){return n.vnode.shapeFlag&4}let ks=!1;function $h(n,e=!1,t=!1){e&&bo(e);const{props:i,children:s}=n.vnode,r=hd(n);Ch(n,i,r,e),Dh(n,s,t||e);const o=r?Xh(n,e):void 0;return e&&bo(!1),o}function Xh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fh);const{setup:i}=t;if(i){kn();const s=n.setupContext=i.length>1?Kh(n):null,r=Ks(n),o=Ys(i,n,0,[n.props,s]),a=hu(o);if(Gn(),r(),(a||n.sp)&&!Rs(n)&&Hu(n),a){if(o.then(Ll,Ll),e)return o.then(l=>{Pl(n,l,e)}).catch(l=>{ta(l,n,0)});n.asyncDep=o}else Pl(n,o,e)}else pd(n,e)}function Pl(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Xe(e)&&(n.setupState=Fu(e)),pd(n,t)}let Dl;function pd(n,e,t){const i=n.type;if(!n.render){if(!e&&Dl&&!i.render){const s=i.template||Qo(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=mt(mt({isCustomElement:r,delimiters:a},o),l);i.render=Dl(s,c)}}n.render=i.render||on}{const s=Ks(n);kn();try{hh(n)}finally{Gn(),s()}}}const Yh={get(n,e){return yt(n,"get",""),n[e]}};function Kh(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Yh),slots:n.slots,emit:n.emit,expose:e}}function aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fu(kf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Is)return Is[t](n)},has(e,t){return t in e||t in Is}})):n.proxy}function Zh(n){return Oe(n)&&"__vccOpts"in n}const md=(n,e)=>jf(n,e,ks);function Xt(n,e,t){try{Hr(-1);const i=arguments.length;return i===2?Xe(e)&&!Pe(e)?Wr(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Wr(t)&&(t=[t]),Pt(n,e,t))}finally{Hr(1)}}const Jh="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let So;const Rl=typeof window<"u"&&window.trustedTypes;if(Rl)try{So=Rl.createPolicy("vue",{createHTML:n=>n})}catch{}const gd=So?n=>So.createHTML(n):n=>n,Qh="http://www.w3.org/2000/svg",ep="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Il=Rn&&Rn.createElement("template"),tp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Rn.createElementNS(Qh,n):e==="mathml"?Rn.createElementNS(ep,n):t?Rn.createElement(n,{is:t}):Rn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Rn.createTextNode(n),createComment:n=>Rn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Il.innerHTML=gd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Il.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},np=Symbol("_vtc");function ip(n,e,t){const i=n[np];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ol=Symbol("_vod"),sp=Symbol("_vsh"),rp=Symbol(""),ap=/(?:^|;)\s*display\s*:/;function op(n,e,t){const i=n.style,s=ot(t);let r=!1;if(t&&!s){if(e)if(ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Or(i,a,"")}else for(const o in e)t[o]==null&&Or(i,o,"");for(const o in t)o==="display"&&(r=!0),Or(i,o,t[o])}else if(s){if(e!==t){const o=i[rp];o&&(t+=";"+o),i.cssText=t,r=ap.test(t)}}else e&&n.removeAttribute("style");Ol in n&&(n[Ol]=r?i.display:"",n[sp]&&(i.display="none"))}const Fl=/\s*!important$/;function Or(n,e,t){if(Pe(t))t.forEach(i=>Or(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lp(n,e);Fl.test(t)?n.setProperty(Li(i),t.replace(Fl,""),"important"):n[i]=t}}const Nl=["Webkit","Moz","ms"],Sa={};function lp(n,e){const t=Sa[e];if(t)return t;let i=ln(e);if(i!=="filter"&&i in n)return Sa[e]=i;i=gu(i);for(let s=0;s<Nl.length;s++){const r=Nl[s]+i;if(r in n)return Sa[e]=r}return e}const zl="http://www.w3.org/1999/xlink";function Bl(n,e,t,i,s,r=gf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zl,e.slice(6,e.length)):n.setAttributeNS(zl,e,t):t==null||r&&!_u(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Sn(t)?String(t):t)}function Ul(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_u(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Kn(n,e,t,i){n.addEventListener(e,t,i)}function cp(n,e,t,i){n.removeEventListener(e,t,i)}const kl=Symbol("_vei");function up(n,e,t,i,s=null){const r=n[kl]||(n[kl]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=dp(e);if(i){const c=r[e]=pp(i,s);Kn(n,a,c,l)}else o&&(cp(n,a,o,l),r[e]=void 0)}}const Gl=/(?:Once|Passive|Capture)$/;function dp(n){let e;if(Gl.test(n)){e={};let i;for(;i=n.match(Gl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Li(n.slice(2)),e]}let Ma=0;const fp=Promise.resolve(),hp=()=>Ma||(fp.then(()=>Ma=0),Ma=Date.now());function pp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Mn(mp(i,t.value),e,5,[i])};return t.value=n,t.attached=hp(),t}function mp(n,e){if(Pe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Vl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gp=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?ip(n,i,o):e==="style"?op(n,t,i):Kr(e)?Fo(e)||up(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vp(n,e,i,o))?(Ul(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bl(n,e,i,o,r,e!=="value")):n._isVueCE&&(_p(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!ot(i)))?Ul(n,ln(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bl(n,e,i,o))};function vp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vl(e)&&Oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vl(e)&&ot(t)?!1:e in n}function _p(n,e){const t=n._def.props;if(!t)return!1;const i=ln(e);return Array.isArray(t)?t.some(s=>ln(s)===i):Object.keys(t).some(s=>ln(s)===i)}const as=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Pe(e)?t=>Lr(e,t):e};function xp(n){n.target.composing=!0}function Hl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign");function Wl(n,e,t){return e&&(n=n.trim()),t&&(n=Qr(n)),n}const rr={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Bn]=as(s);const r=i||s.props&&s.props.type==="number";Kn(n,e?"change":"input",o=>{o.target.composing||n[Bn](Wl(n.value,t,r))}),(t||r)&&Kn(n,"change",()=>{n.value=Wl(n.value,t,r)}),e||(Kn(n,"compositionstart",xp),Kn(n,"compositionend",Hl),Kn(n,"change",Hl))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Bn]=as(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Qr(n.value):n.value,l=e==null?"":e;a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},jl={created(n,{value:e},t){n.checked=Si(e,t.props.value),n[Bn]=as(t),Kn(n,"change",()=>{n[Bn](Gs(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[Bn]=as(i),e!==t&&(n.checked=Si(e,i.props.value))}},yp={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Zr(e);Kn(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Qr(Gs(o)):Gs(o));n[Bn](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,qo(()=>{n._assigning=!1})}),n[Bn]=as(i)},mounted(n,{value:e}){ql(n,e)},beforeUpdate(n,e,t){n[Bn]=as(t)},updated(n,{value:e}){n._assigning||ql(n,e)}};function ql(n,e){const t=n.multiple,i=Pe(e);if(!(t&&!i&&!Zr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Gs(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=_f(e,a)>-1}else o.selected=e.has(a);else if(Si(Gs(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Gs(n){return"_value"in n?n._value:n.value}const bp=["ctrl","shift","alt","meta"],Sp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>bp.some(t=>n[`${t}Key`]&&!e.includes(t))},ar=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Sp[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Mp=mt({patchProp:gp},tp);let $l;function wp(){return $l||($l=Oh(Mp))}const Tp=(...n)=>{const e=wp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Cp(i);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ep(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ep(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cp(n){return ot(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="148",Ap=0,Xl=1,Lp=2,vd=1,Pp=2,Es=3,Mi=0,Qt=1,sl=2,or=3,Jn=0,ts=1,Yl=2,Kl=3,Zl=4,Dp=5,Yi=100,Rp=101,Ip=102,Jl=103,Ql=104,Op=200,Fp=201,Np=202,zp=203,_d=204,xd=205,Bp=206,Up=207,kp=208,Gp=209,Vp=210,Hp=0,Wp=1,jp=2,Mo=3,qp=4,$p=5,Xp=6,Yp=7,yd=0,Kp=1,Zp=2,Un=0,Jp=1,Qp=2,em=3,tm=4,nm=5,bd=300,os=301,ls=302,wo=303,To=304,oa=306,Eo=1e3,rn=1001,Co=1002,Et=1003,ec=1004,wa=1005,Yt=1006,im=1007,Vs=1008,wi=1009,sm=1010,rm=1011,Sd=1012,am=1013,gi=1014,vi=1015,Hs=1016,om=1017,lm=1018,ns=1020,cm=1021,um=1022,an=1023,dm=1024,fm=1025,yi=1026,cs=1027,hm=1028,pm=1029,mm=1030,gm=1031,vm=1033,Ta=33776,Ea=33777,Ca=33778,Aa=33779,tc=35840,nc=35841,ic=35842,sc=35843,_m=36196,rc=37492,ac=37496,oc=37808,lc=37809,cc=37810,uc=37811,dc=37812,fc=37813,hc=37814,pc=37815,mc=37816,gc=37817,vc=37818,_c=37819,xc=37820,yc=37821,bc=36492,Ti=3e3,Je=3001,xm=3200,ym=3201,bm=0,Sm=1,hn="srgb",Ws="srgb-linear",La=7680,Mm=519,Sc=35044,Mc="300 es",Ao=1035;class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,wc=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function wm(n,e){return(n%e+e)%e}function Da(n,e,t){return(1-t)*n+t*e}function Tc(n){return(n&n-1)===0&&n!==0}function Lo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],x=i[8],p=s[0],m=s[3],g=s[6],_=s[1],y=s[4],b=s[7],M=s[2],C=s[5],P=s[8];return r[0]=o*p+a*_+l*M,r[3]=o*m+a*y+l*C,r[6]=o*g+a*b+l*P,r[1]=c*p+u*_+d*M,r[4]=c*m+u*y+d*C,r[7]=c*g+u*b+d*P,r[2]=f*p+h*_+x*M,r[5]=f*m+h*y+x*C,r[8]=f*g+h*b+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,x=t*d+i*f+s*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(s*c-u*i)*p,e[2]=(a*i-s*o)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=h*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Vt;function Md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ia={[hn]:{[Ws]:bi},[Ws]:{[hn]:Fr}},Mt={legacyMode:!0,get workingColorSpace(){return Ws},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ia[e]&&Ia[e][t]!==void 0){const i=Ia[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},en={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ur(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=wm(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oa(o,r,e+1/3),this.g=Oa(o,r,e),this.b=Oa(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Mt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Mt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=hn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Mt.fromWorkingColorSpace(ur(this,lt),e),kt(lt.r*255,0,255)<<16^kt(lt.g*255,0,255)<<8^kt(lt.b*255,0,255)<<0}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(ur(this,lt),t);const i=lt.r,s=lt.g,r=lt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(ur(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=hn){return Mt.fromWorkingColorSpace(ur(this,lt),e),e!==hn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(en),en.h+=e,en.s+=t,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(cr);const i=Da(en.h,cr.h,t),s=Da(en.s,cr.s,t),r=Da(en.l,cr.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=wd;let Ii;class Td{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=qr("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ed{constructor(e=null){this.isSource=!0,this.uuid=Zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class Ht extends ds{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=rn,s=rn,r=Yt,o=Vs,a=an,l=wi,c=Ht.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Zs(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=bd;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],x=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(x+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(h+1)/2,M=(g+1)/2,C=(u+f)/4,P=(d+p)/4,v=(x+m)/4;return y>b&&y>M?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=P/i):b>M?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=v/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=P/r,s=v/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-x)*(m-x)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-p)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends ds{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Ht(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cd extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==f||c!==h||u!==x){let m=1-a;const g=l*f+c*h+u*x+d*p,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const M=Math.sqrt(y),C=Math.atan2(M,g*_);m=Math.sin(m*C)/M,a=Math.sin(a*C)/M}const b=a*_;if(l=l*m+f*b,c=c*m+h*b,u=u*m+x*b,d=d*m+p*b,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],x=r[o+3];return e[t]=a*x+u*d+l*h-c*f,e[t+1]=l*x+u*f+c*d-a*h,e[t+2]=c*x+u*h+a*f-l*d,e[t+3]=u*x-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d-f*h*x;break;case"YXZ":this._x=f*u*d+c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d+f*h*x;break;case"ZXY":this._x=f*u*d-c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d-f*h*x;break;case"ZYX":this._x=f*u*d-c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d+f*h*x;break;case"YZX":this._x=f*u*d+c*h*x,this._y=c*h*d+f*u*x,this._z=c*u*x-f*h*d,this._w=c*u*d-f*h*x;break;case"XZY":this._x=f*u*d-c*h*x,this._y=c*h*d-f*u*x,this._z=c*u*x+f*h*d,this._w=c*u*d+f*h*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,d=l*s+r*i-o*t,f=-r*t-o*i-a*s;return this.x=c*l+f*-r+u*-a-d*-o,this.y=u*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new Y,Ec=new Js;class Qs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)li.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox),za.applyMatrix4(e.matrixWorld),this.union(za);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),dr.subVectors(this.max,vs),Oi.subVectors(e.a,vs),Fi.subVectors(e.b,vs),Ni.subVectors(e.c,vs),Wn.subVectors(Fi,Oi),jn.subVectors(Ni,Fi),ci.subVectors(Oi,Ni);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-ci.y,ci.x,0];return!Ba(t,Oi,Fi,Ni,dr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Oi,Fi,Ni,dr))?!1:(fr.crossVectors(Wn,jn),t=[fr.x,fr.y,fr.z],Ba(t,Oi,Fi,Ni,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],li=new Y,za=new Qs,Oi=new Y,Fi=new Y,Ni=new Y,Wn=new Y,jn=new Y,ci=new Y,vs=new Y,dr=new Y,fr=new Y,ui=new Y;function Ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ui.fromArray(n,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cm=new Qs,_s=new Y,Ua=new Y;class rl{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(Ua)),this.expandByPoint(_s.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new Y,ka=new Y,hr=new Y,qn=new Y,Ga=new Y,pr=new Y,Va=new Y;class Am{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.direction).multiplyScalar(t).add(this.origin),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ka.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=qn.dot(this.direction),l=-qn.dot(hr),c=qn.lengthSq(),u=Math.abs(1-o*o);let d,f,h,x;if(u>0)if(d=o*l-a,f=o*a-l,x=r*u,d>=0)if(f>=-x)if(f<=x){const p=1/u;d*=p,f*=p,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(hr).multiplyScalar(f).add(ka),h}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,s,r){Ga.subVectors(t,e),pr.subVectors(i,e),Va.crossVectors(Ga,pr);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(pr.crossVectors(qn,pr));if(l<0)return null;const c=a*this.direction.dot(Ga.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(Va);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,l,c,u,d,f,h,x,p,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=x,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+x*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=x+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,x=c*u,p=c*d;t[0]=f+p*a,t[4]=x*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-x,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,x=c*u,p=c*d;t[0]=f-p*a,t[4]=-o*d,t[8]=x+h*a,t[1]=h+x*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=x*c-h,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=h*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=p-f*d,t[8]=x*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+x,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,h=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+p,t[5]=o*u,t[9]=h*d-x,t[2]=x*d-h,t[6]=a*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Pm)}lookAt(e,t,i){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),$n.crossVectors(i,zt),$n.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),$n.crossVectors(i,zt)),$n.normalize(),mr.crossVectors(zt,$n),s[0]=$n.x,s[4]=mr.x,s[8]=zt.x,s[1]=$n.y,s[5]=mr.y,s[9]=zt.y,s[2]=$n.z,s[6]=mr.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],x=i[2],p=i[6],m=i[10],g=i[14],_=i[3],y=i[7],b=i[11],M=i[15],C=s[0],P=s[4],v=s[8],A=s[12],L=s[1],N=s[5],X=s[9],I=s[13],R=s[2],j=s[6],te=s[10],k=s[14],O=s[3],ne=s[7],oe=s[11],q=s[15];return r[0]=o*C+a*L+l*R+c*O,r[4]=o*P+a*N+l*j+c*ne,r[8]=o*v+a*X+l*te+c*oe,r[12]=o*A+a*I+l*k+c*q,r[1]=u*C+d*L+f*R+h*O,r[5]=u*P+d*N+f*j+h*ne,r[9]=u*v+d*X+f*te+h*oe,r[13]=u*A+d*I+f*k+h*q,r[2]=x*C+p*L+m*R+g*O,r[6]=x*P+p*N+m*j+g*ne,r[10]=x*v+p*X+m*te+g*oe,r[14]=x*A+p*I+m*k+g*q,r[3]=_*C+y*L+b*R+M*O,r[7]=_*P+y*N+b*j+M*ne,r[11]=_*v+y*X+b*te+M*oe,r[15]=_*A+y*I+b*k+M*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],x=e[3],p=e[7],m=e[11],g=e[15];return x*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+p*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+g*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],x=e[12],p=e[13],m=e[14],g=e[15],_=d*m*c-p*f*c+p*l*h-a*m*h-d*l*g+a*f*g,y=x*f*c-u*m*c-x*l*h+o*m*h+u*l*g-o*f*g,b=u*p*c-x*d*c+x*a*h-o*p*h-u*a*g+o*d*g,M=x*d*l-u*p*l-x*a*f+o*p*f+u*a*m-o*d*m,C=t*_+i*y+s*b+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=_*P,e[1]=(p*f*r-d*m*r-p*s*h+i*m*h+d*s*g-i*f*g)*P,e[2]=(a*m*r-p*l*r+p*s*c-i*m*c-a*s*g+i*l*g)*P,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*P,e[4]=y*P,e[5]=(u*m*r-x*f*r+x*s*h-t*m*h-u*s*g+t*f*g)*P,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*g-t*l*g)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*P,e[8]=b*P,e[9]=(x*d*r-u*p*r-x*i*h+t*p*h+u*i*g-t*d*g)*P,e[10]=(o*p*r-x*a*r+x*i*c-t*p*c-o*i*g+t*a*g)*P,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*P,e[12]=M*P,e[13]=(u*p*s-x*d*s+x*i*f-t*p*f-u*i*m+t*d*m)*P,e[14]=(x*a*s-o*p*s-x*i*l+t*p*l+o*i*m-t*a*m)*P,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,x=r*d,p=o*u,m=o*d,g=a*d,_=l*c,y=l*u,b=l*d,M=i.x,C=i.y,P=i.z;return s[0]=(1-(p+g))*M,s[1]=(h+b)*M,s[2]=(x-y)*M,s[3]=0,s[4]=(h-b)*C,s[5]=(1-(f+g))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(x+y)*P,s[9]=(m-_)*P,s[10]=(1-(f+p))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);const c=1/r,u=1/o,d=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,t.setFromRotationMatrix(tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f=-(o+r)/(o-r),h=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=h,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*c,h=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-h,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new Y,tn=new vt,Lm=new Y(0,0,0),Pm=new Y(1,1,1),$n=new Y,mr=new Y,zt=new Y,Cc=new vt,Ac=new Js;class er{constructor(e=0,t=0,i=0,s=er.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}er.DefaultOrder="XYZ";er.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const Lc=new Y,Bi=new Js,Ln=new vt,gr=new Y,xs=new Y,Rm=new Y,Im=new Js,Pc=new Y(1,0,0),Dc=new Y(0,1,0),Rc=new Y(0,0,1),Om={type:"added"},Ic={type:"removed"};class Wt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DefaultUp.clone();const e=new Y,t=new er,i=new Js,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Vt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DefaultMatrixWorldAutoUpdate,this.layers=new Ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(xs,gr,this.up):Ln.lookAt(gr,xs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DefaultUp=new Y(0,1,0);Wt.DefaultMatrixAutoUpdate=!0;Wt.DefaultMatrixWorldAutoUpdate=!0;const nn=new Y,Pn=new Y,Ha=new Y,Dn=new Y,Ui=new Y,ki=new Y,Oc=new Y,Wa=new Y,ja=new Y,qa=new Y;class Nn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){nn.subVectors(s,t),Pn.subVectors(i,t),Ha.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(Pn),l=nn.dot(Ha),c=Pn.dot(Pn),u=Pn.dot(Ha),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,h=(c*l-a*u)*f,x=(o*u-a*l)*f;return r.set(1-h-x,x,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Dn),l.set(0,0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,t,i,s){return nn.subVectors(i,t),Pn.subVectors(e,t),nn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Nn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ui.subVectors(s,i),ki.subVectors(r,i),Wa.subVectors(e,i);const l=Ui.dot(Wa),c=ki.dot(Wa);if(l<=0&&c<=0)return t.copy(i);ja.subVectors(e,s);const u=Ui.dot(ja),d=ki.dot(ja);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ui,o);qa.subVectors(e,r);const h=Ui.dot(qa),x=ki.dot(qa);if(x>=0&&h<=x)return t.copy(r);const p=h*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ki,a);const m=u*x-h*d;if(m<=0&&d-u>=0&&h-x>=0)return Oc.subVectors(r,s),a=(d-u)/(d-u+(h-x)),t.copy(s).addScaledVector(Oc,a);const g=1/(m+p+f);return o=p*g,a=f*g,t.copy(i).addScaledVector(Ui,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fm=0;class la extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=ts,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_d,this.blendDst=xd,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class al extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new Y,vr=new Ze;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ld extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pd extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nm=0;const qt=new vt,$a=new Wt,Gi=new Y,Bt=new Qs,ys=new Qs,ht=new Y;class ei extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?Pd:Ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Bt.min,ys.min),Bt.expandByPoint(ht),ht.addVectors(Bt.max,ys.max),Bt.expandByPoint(ht)):(Bt.expandByPoint(ys.min),Bt.expandByPoint(ys.max))}Bt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),ht.add(Gi)),s=Math.max(s,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new Y,u[L]=new Y;const d=new Y,f=new Y,h=new Y,x=new Ze,p=new Ze,m=new Ze,g=new Y,_=new Y;function y(L,N,X){d.fromArray(s,L*3),f.fromArray(s,N*3),h.fromArray(s,X*3),x.fromArray(o,L*2),p.fromArray(o,N*2),m.fromArray(o,X*2),f.sub(d),h.sub(d),p.sub(x),m.sub(x);const I=1/(p.x*m.y-m.x*p.y);!isFinite(I)||(g.copy(f).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(I),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(I),c[L].add(g),c[N].add(g),c[X].add(g),u[L].add(_),u[N].add(_),u[X].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let L=0,N=b.length;L<N;++L){const X=b[L],I=X.start,R=X.count;for(let j=I,te=I+R;j<te;j+=3)y(i[j+0],i[j+1],i[j+2])}const M=new Y,C=new Y,P=new Y,v=new Y;function A(L){P.fromArray(r,L*3),v.copy(P);const N=c[L];M.copy(N),M.sub(P.multiplyScalar(P.dot(N))).normalize(),C.crossVectors(v,N);const I=C.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=I}for(let L=0,N=b.length;L<N;++L){const X=b[L],I=X.start,R=X.count;for(let j=I,te=I+R;j<te;j+=3)A(i[j+0]),A(i[j+1]),A(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,h=e.count;f<h;f+=3){const x=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,x=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?h=l[p]*a.data.stride+a.offset:h=l[p]*u;for(let g=0;g<u;g++)f[x++]=c[h++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new vt,Vi=new Am,Xa=new rl,bs=new Y,Ss=new Y,Ms=new Y,Ya=new Y,_r=new Y,xr=new Ze,yr=new Ze,br=new Ze,Ka=new Y,Sr=new Y;class zn extends Wt{constructor(e=new ei,t=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ya.fromBufferAttribute(d,e),o?_r.addScaledVector(Ya,u):_r.addScaledVector(Ya.sub(t),u))}t.add(_r)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),e.ray.intersectsSphere(Xa)===!1)||(Fc.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Fc),i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(s))for(let h=0,x=d.length;h<x;h++){const p=d[h],m=s[p.materialIndex],g=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=g,b=_;y<b;y+=3){const M=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);o=Mr(this,m,e,Vi,c,u,M,C,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const h=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=h,m=x;p<m;p+=3){const g=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);o=Mr(this,s,e,Vi,c,u,g,_,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let h=0,x=d.length;h<x;h++){const p=d[h],m=s[p.materialIndex],g=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=g,b=_;y<b;y+=3){const M=y,C=y+1,P=y+2;o=Mr(this,m,e,Vi,c,u,M,C,P),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const h=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=h,m=x;p<m;p+=3){const g=p,_=p+1,y=p+2;o=Mr(this,s,e,Vi,c,u,g,_,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function zm(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Mi,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:n}}function Mr(n,e,t,i,s,r,o,a,l){n.getVertexPosition(o,bs),n.getVertexPosition(a,Ss),n.getVertexPosition(l,Ms);const c=zm(n,e,t,i,bs,Ss,Ms,Ka);if(c){s&&(xr.fromBufferAttribute(s,o),yr.fromBufferAttribute(s,a),br.fromBufferAttribute(s,l),c.uv=Nn.getUV(Ka,bs,Ss,Ms,xr,yr,br,new Ze)),r&&(xr.fromBufferAttribute(r,o),yr.fromBufferAttribute(r,a),br.fromBufferAttribute(r,l),c.uv2=Nn.getUV(Ka,bs,Ss,Ms,xr,yr,br,new Ze));const u={a:o,b:a,c:l,normal:new Y,materialIndex:0};Nn.getNormal(bs,Ss,Ms,u.normal),c.face=u}return c}class tr extends ei{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(d,2));function x(p,m,g,_,y,b,M,C,P,v,A){const L=b/P,N=M/v,X=b/2,I=M/2,R=C/2,j=P+1,te=v+1;let k=0,O=0;const ne=new Y;for(let oe=0;oe<te;oe++){const q=oe*N-I;for(let K=0;K<j;K++){const he=K*L-X;ne[p]=he*_,ne[m]=q*y,ne[g]=R,c.push(ne.x,ne.y,ne.z),ne[p]=0,ne[m]=0,ne[g]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(K/P),d.push(1-oe/v),k+=1}}for(let oe=0;oe<v;oe++)for(let q=0;q<P;q++){const K=f+q+j*oe,he=f+q+j*(oe+1),ge=f+(q+1)+j*(oe+1),_e=f+(q+1)+j*oe;l.push(K,he,_e),l.push(he,ge,_e),O+=6}a.addGroup(h,O,A),h+=O,f+=k}}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const s in i)e[s]=i[s]}return e}function Bm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dd(n){return n.getRenderTarget()===null&&n.outputEncoding===Je?hn:Ws}const Um={clone:us,merge:Tt};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rd extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Rd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Wi=1;class Vm extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Kt(Hi,Wi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Kt(Hi,Wi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Kt(Hi,Wi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Kt(Hi,Wi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Kt(Hi,Wi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Kt(Hi,Wi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Un,e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Id extends Ht{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hm extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Id(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tr(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;const o=new zn(s,r),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=Yt),new Vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Za=new Y,Wm=new Y,jm=new Vt;class hi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Za.subVectors(i,t).cross(Wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Za),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jm.getNormalMatrix(e),s=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new rl,wr=new Y;class Od{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],h=i[9],x=i[10],p=i[11],m=i[12],g=i[13],_=i[14],y=i[15];return t[0].setComponents(a-s,d-l,p-f,y-m).normalize(),t[1].setComponents(a+s,d+l,p+f,y+m).normalize(),t[2].setComponents(a+r,d+c,p+h,y+g).normalize(),t[3].setComponents(a-r,d-c,p-h,y-g).normalize(),t[4].setComponents(a-o,d-u,p-x,y-_).normalize(),t[5].setComponents(a+o,d+u,p+x,y+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(wr.x=s.normal.x>0?e.max.x:e.min.x,wr.y=s.normal.y>0?e.max.y:e.min.y,wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qm(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,f=c.usage,h=n.createBuffer();n.bindBuffer(u,h),n.bufferData(u,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,h=u.updateRange;n.bindBuffer(d,c),h.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):n.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class ol extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],x=[],p=[],m=[];for(let g=0;g<u;g++){const _=g*f-o;for(let y=0;y<c;y++){const b=y*d-r;x.push(b,-_,0),p.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const y=_+c*g,b=_+c*(g+1),M=_+1+c*(g+1),C=_+1+c*g;h.push(y,b,C),h.push(b,M,C)}this.setIndex(h),this.setAttribute("position",new yn(x,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(m,2))}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var $m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm="vec3 transformed = vec3( position );",eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ig=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ov=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Uv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,i_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,M_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:$m,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:Km,aomap_fragment:Zm,aomap_pars_fragment:Jm,begin_vertex:Qm,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:ag,clipping_planes_vertex:og,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:ug,color_vertex:dg,common:fg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,encodings_fragment:xg,encodings_pars_fragment:yg,envmap_fragment:bg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:Mg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ng,envmap_vertex:Tg,fog_vertex:Eg,fog_pars_vertex:Cg,fog_fragment:Ag,fog_pars_fragment:Lg,gradientmap_pars_fragment:Pg,lightmap_fragment:Dg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:zg,lights_toon_pars_fragment:Bg,lights_phong_fragment:Ug,lights_phong_pars_fragment:kg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Hg,lights_fragment_maps:Wg,lights_fragment_end:jg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:Yg,map_fragment:Kg,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphcolor_vertex:nv,morphnormal_vertex:iv,morphtarget_pars_vertex:sv,morphtarget_vertex:rv,normal_fragment_begin:av,normal_fragment_maps:ov,normal_pars_fragment:lv,normal_pars_vertex:cv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:mv,output_fragment:gv,packing:vv,premultiplied_alpha_fragment:_v,project_vertex:xv,dithering_fragment:yv,dithering_pars_fragment:bv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Tv,shadowmap_vertex:Ev,shadowmask_pars_fragment:Cv,skinbase_vertex:Av,skinning_pars_vertex:Lv,skinning_vertex:Pv,skinnormal_vertex:Dv,specularmap_fragment:Rv,specularmap_pars_fragment:Iv,tonemapping_fragment:Ov,tonemapping_pars_fragment:Fv,transmission_fragment:Nv,transmission_pars_fragment:zv,uv_pars_fragment:Bv,uv_pars_vertex:Uv,uv_vertex:kv,uv2_pars_fragment:Gv,uv2_pars_vertex:Vv,uv2_vertex:Hv,worldpos_vertex:Wv,background_vert:jv,background_frag:qv,backgroundCube_vert:$v,backgroundCube_frag:Xv,cube_vert:Yv,cube_frag:Kv,depth_vert:Zv,depth_frag:Jv,distanceRGBA_vert:Qv,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:a_,meshlambert_vert:o_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:h_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:v_,meshtoon_frag:__,points_vert:x_,points_frag:y_,shadow_vert:b_,shadow_frag:S_,sprite_vert:M_,sprite_frag:w_},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},gn={basic:{uniforms:Tt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Tt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Tt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Tt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Tt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Tt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Tt([ve.points,ve.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Tt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Tt([ve.common,ve.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Tt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Tt([ve.sprite,ve.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Tt([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Tt([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};gn.physical={uniforms:Tt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Tr={r:0,b:0,g:0};function T_(n,e,t,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function x(m,g){let _=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y));const b=n.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oa)?(u===void 0&&(u=new zn(new tr(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:us(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=y.encoding!==Je,(d!==y||f!==y.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,h=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zn(new ol(2,2),new Ci({name:"BackgroundMaterial",uniforms:us(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=y.encoding!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,g){m.getRGB(Tr,Dd(n)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:x}}function E_(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function d(R,j,te,k,O){let ne=!1;if(o){const oe=p(k,te,j);c!==oe&&(c=oe,h(c.object)),ne=g(R,k,te,O),ne&&_(R,k,te,O)}else{const oe=j.wireframe===!0;(c.geometry!==k.id||c.program!==te.id||c.wireframe!==oe)&&(c.geometry=k.id,c.program=te.id,c.wireframe=oe,ne=!0)}O!==null&&t.update(O,34963),(ne||u)&&(u=!1,v(R,j,te,k),O!==null&&n.bindBuffer(34963,t.get(O).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function h(R){return i.isWebGL2?n.bindVertexArray(R):r.bindVertexArrayOES(R)}function x(R){return i.isWebGL2?n.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,j,te){const k=te.wireframe===!0;let O=a[R.id];O===void 0&&(O={},a[R.id]=O);let ne=O[j.id];ne===void 0&&(ne={},O[j.id]=ne);let oe=ne[k];return oe===void 0&&(oe=m(f()),ne[k]=oe),oe}function m(R){const j=[],te=[],k=[];for(let O=0;O<s;O++)j[O]=0,te[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:k,object:R,attributes:{},index:null}}function g(R,j,te,k){const O=c.attributes,ne=j.attributes;let oe=0;const q=te.getAttributes();for(const K in q)if(q[K].location>=0){const ge=O[K];let _e=ne[K];if(_e===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),ge===void 0||ge.attribute!==_e||_e&&ge.data!==_e.data)return!0;oe++}return c.attributesNum!==oe||c.index!==k}function _(R,j,te,k){const O={},ne=j.attributes;let oe=0;const q=te.getAttributes();for(const K in q)if(q[K].location>=0){let ge=ne[K];ge===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));const _e={};_e.attribute=ge,ge&&ge.data&&(_e.data=ge.data),O[K]=_e,oe++}c.attributes=O,c.attributesNum=oe,c.index=k}function y(){const R=c.newAttributes;for(let j=0,te=R.length;j<te;j++)R[j]=0}function b(R){M(R,0)}function M(R,j){const te=c.newAttributes,k=c.enabledAttributes,O=c.attributeDivisors;te[R]=1,k[R]===0&&(n.enableVertexAttribArray(R),k[R]=1),O[R]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,j),O[R]=j)}function C(){const R=c.newAttributes,j=c.enabledAttributes;for(let te=0,k=j.length;te<k;te++)j[te]!==R[te]&&(n.disableVertexAttribArray(te),j[te]=0)}function P(R,j,te,k,O,ne){i.isWebGL2===!0&&(te===5124||te===5125)?n.vertexAttribIPointer(R,j,te,O,ne):n.vertexAttribPointer(R,j,te,k,O,ne)}function v(R,j,te,k){if(i.isWebGL2===!1&&(R.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const O=k.attributes,ne=te.getAttributes(),oe=j.defaultAttributeValues;for(const q in ne){const K=ne[q];if(K.location>=0){let he=O[q];if(he===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const ge=he.normalized,_e=he.itemSize,U=t.get(he);if(U===void 0)continue;const B=U.buffer,Q=U.type,Se=U.bytesPerElement;if(he.isInterleavedBufferAttribute){const be=he.data,He=be.stride,Ie=he.offset;if(be.isInstancedInterleavedBuffer){for(let T=0;T<K.locationSize;T++)M(K.location+T,be.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let T=0;T<K.locationSize;T++)b(K.location+T);n.bindBuffer(34962,B);for(let T=0;T<K.locationSize;T++)P(K.location+T,_e/K.locationSize,Q,ge,He*Se,(Ie+_e/K.locationSize*T)*Se)}else{if(he.isInstancedBufferAttribute){for(let be=0;be<K.locationSize;be++)M(K.location+be,he.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<K.locationSize;be++)b(K.location+be);n.bindBuffer(34962,B);for(let be=0;be<K.locationSize;be++)P(K.location+be,_e/K.locationSize,Q,ge,_e*Se,_e/K.locationSize*be*Se)}}else if(oe!==void 0){const ge=oe[q];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(K.location,ge);break;case 3:n.vertexAttrib3fv(K.location,ge);break;case 4:n.vertexAttrib4fv(K.location,ge);break;default:n.vertexAttrib1fv(K.location,ge)}}}}C()}function A(){X();for(const R in a){const j=a[R];for(const te in j){const k=j[te];for(const O in k)x(k[O].object),delete k[O];delete j[te]}delete a[R]}}function L(R){if(a[R.id]===void 0)return;const j=a[R.id];for(const te in j){const k=j[te];for(const O in k)x(k[O].object),delete k[O];delete j[te]}delete a[R.id]}function N(R){for(const j in a){const te=a[j];if(te[R.id]===void 0)continue;const k=te[R.id];for(const O in k)x(k[O].object),delete k[O];delete te[R.id]}}function X(){I(),u=!0,c!==l&&(c=l,h(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:b,disableUnusedAttributes:C}}function C_(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,h;if(s)f=n,h="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function A_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),h=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),y=f>0,b=o||e.has("OES_texture_float"),M=y&&b,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:C}}function L_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new hi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,h){const x=d.length!==0||f||i!==0||s;return s=f,t=u(d,h,0),i=d.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,f,h){const x=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{const _=r?0:i,y=_*4;let b=g.clippingState||null;l.value=b,b=u(x,f,y,h);for(let M=0;M!==y;++M)b[M]=t[M];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,x){const p=d!==null?d.length:0;let m=null;if(p!==0){if(m=l.value,x!==!0||m===null){const g=h+p*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,b=h;y!==p;++y,b+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function P_(n){let e=new WeakMap;function t(o,a){return a===wo?o.mapping=os:a===To&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wo||a===To)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hm(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class D_ extends Rd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,Nc=[.125,.215,.35,.446,.526,.582],mi=20,Ja=new D_,zc=new et;let Qa=null;const pi=(1+Math.sqrt(5))/2,qi=1/pi,Bc=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,pi,qi),new Y(0,pi,-qi),new Y(qi,0,pi),new Y(-qi,0,pi),new Y(pi,qi,0),new Y(-pi,qi,0)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Qa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa),e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Hs,format:an,encoding:Ti,depthBuffer:!1},s=kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=I_(r,e,t)}return s}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,s){const a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zc),u.toneMapping=Un,u.autoClear=!1;const h=new al({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new zn(new tr,h);let p=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,p=!0):(h.color.copy(zc),p=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;Er(s,_*y,g>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===os||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bc[(s-1)%Bc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*mi-1),p=r/x,m=isFinite(r)?1+Math.floor(u*p):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const g=[];let _=0;for(let P=0;P<mi;++P){const v=P/p,A=Math.exp(-v*v/2);g.push(A),P===0?_+=A:P<m&&(_+=2*A)}for(let P=0;P<g.length;P++)g[P]=g[P]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const b=this._sizeLods[s],M=3*b*(s>y-Ki?s-y+Ki:0),C=4*(this._cubeSize-b);Er(t,M,C,3*b,2*b),l.setRenderTarget(t),l.render(d,Ja)}}function R_(n){const e=[],t=[],i=[];let s=n;const r=n-Ki+1+Nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ki?l=Nc[o-n+Ki-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,x=6,p=3,m=2,g=1,_=new Float32Array(p*x*h),y=new Float32Array(m*x*h),b=new Float32Array(g*x*h);for(let C=0;C<h;C++){const P=C%3*2/3-1,v=C>2?0:-1,A=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];_.set(A,p*x*C),y.set(f,m*x*C);const L=[C,C,C,C,C,C];b.set(L,g*x*C)}const M=new ei;M.setAttribute("position",new xn(_,p)),M.setAttribute("uv",new xn(y,m)),M.setAttribute("faceIndex",new xn(b,g)),e.push(M),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kc(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function I_(n,e,t){const i=new Float32Array(mi),s=new Y(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vc(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wo||l===To,u=l===os||l===ls;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Uc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Uc(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function F_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function N_(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const h=d.morphAttributes;for(const x in h){const p=h[x];for(let m=0,g=p.length;m<g;m++)e.update(p[m],34962)}}function c(d){const f=[],h=d.index,x=d.attributes.position;let p=0;if(h!==null){const _=h.array;p=h.version;for(let y=0,b=_.length;y<b;y+=3){const M=_[y+0],C=_[y+1],P=_[y+2];f.push(M,C,C,P,P,M)}}else{const _=x.array;p=x.version;for(let y=0,b=_.length/3-1;y<b;y+=3){const M=y+0,C=y+1,P=y+2;f.push(M,C,C,P,P,M)}}const m=new(Md(f)?Pd:Ld)(f,1);m.version=p;const g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function z_(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,h){n.drawElements(r,h,a,f*l),t.update(h,r,1)}function d(f,h,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,h,a,f*l,x),t.update(h,r,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function B_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function U_(n,e){return n[0]-e[0]}function k_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function G_(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==m){let te=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",te)};var x=te;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let L=0;b===!0&&(L=1),M===!0&&(L=2),C===!0&&(L=3);let N=u.attributes.position.count*L,X=1;N>e.maxTextureSize&&(X=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*X*4*m),R=new Cd(I,N,X,m);R.type=vi,R.needsUpdate=!0;const j=L*4;for(let k=0;k<m;k++){const O=P[k],ne=v[k],oe=A[k],q=N*X*4*k;for(let K=0;K<O.count;K++){const he=K*j;b===!0&&(o.fromBufferAttribute(O,K),I[q+he+0]=o.x,I[q+he+1]=o.y,I[q+he+2]=o.z,I[q+he+3]=0),M===!0&&(o.fromBufferAttribute(ne,K),I[q+he+4]=o.x,I[q+he+5]=o.y,I[q+he+6]=o.z,I[q+he+7]=0),C===!0&&(o.fromBufferAttribute(oe,K),I[q+he+8]=o.x,I[q+he+9]=o.y,I[q+he+10]=o.z,I[q+he+11]=oe.itemSize===4?o.w:1)}}g={count:m,texture:R,size:new Ze(N,X)},r.set(u,g),u.addEventListener("dispose",te)}let _=0;for(let b=0;b<h.length;b++)_+=h[b];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let m=i[u.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];i[u.id]=m}for(let M=0;M<p;M++){const C=m[M];C[0]=M,C[1]=h[M]}m.sort(k_);for(let M=0;M<8;M++)M<p&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(U_);const g=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const C=a[M],P=C[0],v=C[1];P!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+M)!==g[P]&&u.setAttribute("morphTarget"+M,g[P]),_&&u.getAttribute("morphNormal"+M)!==_[P]&&u.setAttribute("morphNormal"+M,_[P]),s[M]=v,y+=v):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function V_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Nd=new Ht,zd=new Cd,Bd=new Em,Ud=new Id,Hc=[],Wc=[],jc=new Float32Array(16),qc=new Float32Array(9),$c=new Float32Array(4);function fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ca(n,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function j_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function $_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),ut(t,i)}}function X_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;qc.set(i),n.uniformMatrix3fv(this.addr,!1,qc),ut(t,i)}}function Y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;jc.set(i),n.uniformMatrix4fv(this.addr,!1,jc),ut(t,i)}}function K_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function e0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function s0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Nd,s)}function r0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bd,s)}function a0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ud,s)}function o0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zd,s)}function l0(n){switch(n){case 5126:return H_;case 35664:return W_;case 35665:return j_;case 35666:return q_;case 35674:return $_;case 35675:return X_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(n,e){n.uniform1fv(this.addr,e)}function u0(n,e){const t=fs(e,this.size,2);n.uniform2fv(this.addr,t)}function d0(n,e){const t=fs(e,this.size,3);n.uniform3fv(this.addr,t)}function f0(n,e){const t=fs(e,this.size,4);n.uniform4fv(this.addr,t)}function h0(n,e){const t=fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p0(n,e){const t=fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m0(n,e){const t=fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function g0(n,e){n.uniform1iv(this.addr,e)}function v0(n,e){n.uniform2iv(this.addr,e)}function _0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function b0(n,e){n.uniform2uiv(this.addr,e)}function S0(n,e){n.uniform3uiv(this.addr,e)}function M0(n,e){n.uniform4uiv(this.addr,e)}function w0(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nd,r[o])}function T0(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bd,r[o])}function E0(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ud,r[o])}function C0(n,e,t){const i=this.cache,s=e.length,r=ca(t,s);ct(i,r)||(n.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zd,r[o])}function A0(n){switch(n){case 5126:return c0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return h0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return b0;case 36295:return S0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=l0(t.type)}}class P0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=A0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Xc(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,s=i.length;for(eo.lastIndex=0;;){const r=eo.exec(i),o=eo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xc(t,c===void 0?new L0(a,n,e):new P0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new D0(a),Xc(t,d)),t=d}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);R0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let I0=0;function O0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function F0(n){switch(n){case Ti:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Kc(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+O0(n.getShaderSource(e),o)}else return s}function N0(n,e){const t=F0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function z0(n,e){let t;switch(e){case Jp:t="Linear";break;case Qp:t="Reinhard";break;case em:t="OptimizedCineon";break;case tm:t="ACESFilmic";break;case nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function B0(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function U0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k0(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cs(n){return n!==""}function Zc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace(G0,V0)}function V0(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Po(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(n){return n.replace(H0,W0)}function W0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Kp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=j0(t),c=q0(t),u=$0(t),d=X0(t),f=Y0(t),h=t.isWebGL2?"":B0(t),x=U0(r),p=s.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[x].filter(Cs).join(`
`),m.length>0&&(m+=`
`),g=[h,x].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(m=[eu(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[h,eu(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Un?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,N0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Po(o),o=Zc(o,t),o=Jc(o,t),a=Po(a),a=Zc(a,t),a=Jc(a,t),o=Qc(o),a=Qc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+m+o,b=_+g+a,M=Yc(s,35633,y),C=Yc(s,35632,b);if(s.attachShader(p,M),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(C).trim();let X=!0,I=!0;if(s.getProgramParameter(p,35714)===!1){X=!1;const R=Kc(s,M,"vertex"),j=Kc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+R+`
`+j)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:g}})}s.deleteShader(M),s.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Nr(s,p)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=k0(s,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Q0(e),t.set(e,i)),i}}class Q0{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}}function ex(n,e,t,i,s,r,o){const a=new Ad,l=new J0,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,L,N,X){const I=N.fog,R=X.geometry,j=v.isMeshStandardMaterial?N.environment:null,te=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),k=!!te&&te.mapping===oa?te.image.height:null,O=x[v.type];v.precision!==null&&(h=s.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ne=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,oe=ne!==void 0?ne.length:0;let q=0;R.morphAttributes.position!==void 0&&(q=1),R.morphAttributes.normal!==void 0&&(q=2),R.morphAttributes.color!==void 0&&(q=3);let K,he,ge,_e;if(O){const He=gn[O];K=He.vertexShader,he=He.fragmentShader}else K=v.vertexShader,he=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const U=n.getRenderTarget(),B=v.alphaTest>0,Q=v.clearcoat>0,Se=v.iridescence>0;return{isWebGL2:u,shaderID:O,shaderName:v.type,vertexShader:K,fragmentShader:he,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?n.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Ti,map:!!v.map,matcap:!!v.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:k,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Sm,tangentSpaceNormalMap:v.normalMapType===bm,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:Q,clearcoatMap:Q&&!!v.clearcoatMap,clearcoatRoughnessMap:Q&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!v.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!v.iridescenceMap,iridescenceThicknessMap:Se&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ts,alphaMap:!!v.alphaMap,alphaTest:B,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Un,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sl,flipSided:v.side===Qt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(g(A,v),_(A,v),A.push(n.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function g(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function _(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function y(v){const A=x[v.type];let L;if(A){const N=gn[A];L=Um.clone(N.uniforms)}else L=v.uniforms;return L}function b(v,A){let L;for(let N=0,X=c.length;N<X;N++){const I=c[N];if(I.cacheKey===A){L=I,++L.usedTimes;break}}return L===void 0&&(L=new K0(n,A,v,r),c.push(L)),L}function M(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:P}}function tx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,x,p,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=p,g.group=m),e++,g}function a(d,f,h,x,p,m){const g=o(d,f,h,x,p,m);h.transmission>0?i.push(g):h.transparent===!0?s.push(g):t.push(g)}function l(d,f,h,x,p,m){const g=o(d,f,h,x,p,m);h.transmission>0?i.unshift(g):h.transparent===!0?s.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||nx),i.length>1&&i.sort(f||tu),s.length>1&&s.sort(f||tu)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ix(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new nu,n.set(i,[o])):s>=r.length?(o=new nu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new et};break;case"SpotLight":t={position:new Y,direction:new Y,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ax=0;function ox(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lx(n,e){const t=new sx,i=rx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new Y);const r=new Y,o=new vt,a=new vt;function l(u,d){let f=0,h=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let p=0,m=0,g=0,_=0,y=0,b=0,M=0,C=0,P=0,v=0;u.sort(ox);const A=d!==!0?Math.PI:1;for(let N=0,X=u.length;N<X;N++){const I=u[N],R=I.color,j=I.intensity,te=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*j*A,h+=R.g*j*A,x+=R.b*j*A;else if(I.isLightProbe)for(let O=0;O<9;O++)s.probe[O].addScaledVector(I.sh.coefficients[O],j);else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const ne=I.shadow,oe=i.get(I);oe.shadowBias=ne.bias,oe.shadowNormalBias=ne.normalBias,oe.shadowRadius=ne.radius,oe.shadowMapSize=ne.mapSize,s.directionalShadow[p]=oe,s.directionalShadowMap[p]=k,s.directionalShadowMatrix[p]=I.shadow.matrix,b++}s.directional[p]=O,p++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(R).multiplyScalar(j*A),O.distance=te,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,s.spot[g]=O;const ne=I.shadow;if(I.map&&(s.spotLightMap[P]=I.map,P++,ne.updateMatrices(I),I.castShadow&&v++),s.spotLightMatrix[g]=ne.matrix,I.castShadow){const oe=i.get(I);oe.shadowBias=ne.bias,oe.shadowNormalBias=ne.normalBias,oe.shadowRadius=ne.radius,oe.shadowMapSize=ne.mapSize,s.spotShadow[g]=oe,s.spotShadowMap[g]=k,C++}g++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(R).multiplyScalar(j),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),s.rectArea[_]=O,_++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*A),O.distance=I.distance,O.decay=I.decay,I.castShadow){const ne=I.shadow,oe=i.get(I);oe.shadowBias=ne.bias,oe.shadowNormalBias=ne.normalBias,oe.shadowRadius=ne.radius,oe.shadowMapSize=ne.mapSize,oe.shadowCameraNear=ne.camera.near,oe.shadowCameraFar=ne.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=O,m++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(j*A),O.groundColor.copy(I.groundColor).multiplyScalar(j*A),s.hemi[y]=O,y++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=h,s.ambient[2]=x;const L=s.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==y||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==P)&&(s.directional.length=p,s.spot.length=g,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=C+P-v,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=v,L.directionalLength=p,L.pointLength=m,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=y,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=P,s.version=ax++)}function c(u,d){let f=0,h=0,x=0,p=0,m=0;const g=d.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const b=u[_];if(b.isDirectionalLight){const M=s.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(b.isSpotLight){const M=s.spot[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),x++}else if(b.isRectAreaLight){const M=s.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const M=s.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:s}}function iu(n,e){const t=new lx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cx(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new iu(n,e),t.set(r,[l])):o>=a.length?(l=new iu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class ux extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(n,e,t){let i=new Od;const s=new Ze,r=new Ze,o=new gt,a=new ux({depthPacking:ym}),l=new dx,c={},u=t.maxTextureSize,d={0:Qt,1:Mi,2:sl},f=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:fx,fragmentShader:hx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const x=new ei;x.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new zn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd,this.render=function(b,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Jn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let N=0,X=b.length;N<X;N++){const I=b[N],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);const j=R.getFrameExtents();if(s.multiply(j),r.copy(R.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,R.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,R.mapSize.y=r.y)),R.map===null){const k=this.type!==Es?{minFilter:Et,magFilter:Et}:{};R.map=new Ei(s.x,s.y,k),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const te=R.getViewportCount();for(let k=0;k<te;k++){const O=R.getViewport(k);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),L.viewport(o),R.updateMatrices(I,k),i=R.getFrustum(),y(M,C,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===Es&&g(R,C),R.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(P,v,A)};function g(b,M){const C=e.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(M,null,C,f,p,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(M,null,C,h,p,null)}function _(b,M,C,P,v,A){let L=null;const N=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)L=N;else if(L=C.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const X=L.uuid,I=M.uuid;let R=c[X];R===void 0&&(R={},c[X]=R);let j=R[I];j===void 0&&(j=L.clone(),R[I]=j),L=j}return L.visible=M.visible,L.wireframe=M.wireframe,A===Es?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=P,L.farDistance=v),L}function y(b,M,C,P,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Es)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const N=e.update(b),X=b.material;if(Array.isArray(X)){const I=N.groups;for(let R=0,j=I.length;R<j;R++){const te=I[R],k=X[te.materialIndex];if(k&&k.visible){const O=_(b,k,P,C.near,C.far,v);n.renderBufferDirect(C,null,N,O,b,te)}}}else if(X.visible){const I=_(b,X,P,C.near,C.far,v);n.renderBufferDirect(C,null,N,I,b,null)}}const L=b.children;for(let N=0,X=L.length;N<X;N++)y(L[N],M,C,P,v)}}function mx(n,e,t){const i=t.isWebGL2;function s(){let z=!1;const ee=new gt;let pe=null;const we=new gt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!z&&(n.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,je,dt,_t,ti){ti===!0&&(Ae*=_t,je*=_t,dt*=_t),ee.set(Ae,je,dt,_t),we.equals(ee)===!1&&(n.clearColor(Ae,je,dt,_t),we.copy(ee))},reset:function(){z=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let z=!1,ee=null,pe=null,we=null;return{setTest:function(Ae){Ae?B(2929):Q(2929)},setMask:function(Ae){ee!==Ae&&!z&&(n.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case Hp:n.depthFunc(512);break;case Wp:n.depthFunc(519);break;case jp:n.depthFunc(513);break;case Mo:n.depthFunc(515);break;case qp:n.depthFunc(514);break;case $p:n.depthFunc(518);break;case Xp:n.depthFunc(516);break;case Yp:n.depthFunc(517);break;default:n.depthFunc(515)}pe=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){we!==Ae&&(n.clearDepth(Ae),we=Ae)},reset:function(){z=!1,ee=null,pe=null,we=null}}}function o(){let z=!1,ee=null,pe=null,we=null,Ae=null,je=null,dt=null,_t=null,ti=null;return{setTest:function(Qe){z||(Qe?B(2960):Q(2960))},setMask:function(Qe){ee!==Qe&&!z&&(n.stencilMask(Qe),ee=Qe)},setFunc:function(Qe,wn,jt){(pe!==Qe||we!==wn||Ae!==jt)&&(n.stencilFunc(Qe,wn,jt),pe=Qe,we=wn,Ae=jt)},setOp:function(Qe,wn,jt){(je!==Qe||dt!==wn||_t!==jt)&&(n.stencilOp(Qe,wn,jt),je=Qe,dt=wn,_t=jt)},setLocked:function(Qe){z=Qe},setClear:function(Qe){ti!==Qe&&(n.clearStencil(Qe),ti=Qe)},reset:function(){z=!1,ee=null,pe=null,we=null,Ae=null,je=null,dt=null,_t=null,ti=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let f={},h={},x=new WeakMap,p=[],m=null,g=!1,_=null,y=null,b=null,M=null,C=null,P=null,v=null,A=!1,L=null,N=null,X=null,I=null,R=null;const j=n.getParameter(35661);let te=!1,k=0;const O=n.getParameter(7938);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),te=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),te=k>=2);let ne=null,oe={};const q=n.getParameter(3088),K=n.getParameter(2978),he=new gt().fromArray(q),ge=new gt().fromArray(K);function _e(z,ee,pe){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(z,Ae),n.texParameteri(z,10241,9728),n.texParameteri(z,10240,9728);for(let je=0;je<pe;je++)n.texImage2D(ee+je,0,6408,1,1,0,6408,5121,we);return Ae}const U={};U[3553]=_e(3553,3553,1),U[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(Mo),le(!1),ae(Xl),B(2884),D(Jn);function B(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Q(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Se(z,ee){return h[z]!==ee?(n.bindFramebuffer(z,ee),h[z]=ee,i&&(z===36009&&(h[36160]=ee),z===36160&&(h[36009]=ee)),!0):!1}function be(z,ee){let pe=p,we=!1;if(z)if(pe=x.get(ee),pe===void 0&&(pe=[],x.set(ee,pe)),z.isWebGLMultipleRenderTargets){const Ae=z.texture;if(pe.length!==Ae.length||pe[0]!==36064){for(let je=0,dt=Ae.length;je<dt;je++)pe[je]=36064+je;pe.length=Ae.length,we=!0}}else pe[0]!==36064&&(pe[0]=36064,we=!0);else pe[0]!==1029&&(pe[0]=1029,we=!0);we&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function He(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const Ie={[Yi]:32774,[Rp]:32778,[Ip]:32779};if(i)Ie[Jl]=32775,Ie[Ql]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ie[Jl]=z.MIN_EXT,Ie[Ql]=z.MAX_EXT)}const T={[Op]:0,[Fp]:1,[Np]:768,[_d]:770,[Vp]:776,[kp]:774,[Bp]:772,[zp]:769,[xd]:771,[Gp]:775,[Up]:773};function D(z,ee,pe,we,Ae,je,dt,_t){if(z===Jn){g===!0&&(Q(3042),g=!1);return}if(g===!1&&(B(3042),g=!0),z!==Dp){if(z!==_||_t!==A){if((y!==Yi||C!==Yi)&&(n.blendEquation(32774),y=Yi,C=Yi),_t)switch(z){case ts:n.blendFuncSeparate(1,771,1,771);break;case Yl:n.blendFunc(1,1);break;case Kl:n.blendFuncSeparate(0,769,0,1);break;case Zl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ts:n.blendFuncSeparate(770,771,1,771);break;case Yl:n.blendFunc(770,1);break;case Kl:n.blendFuncSeparate(0,769,0,1);break;case Zl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,M=null,P=null,v=null,_=z,A=_t}return}Ae=Ae||ee,je=je||pe,dt=dt||we,(ee!==y||Ae!==C)&&(n.blendEquationSeparate(Ie[ee],Ie[Ae]),y=ee,C=Ae),(pe!==b||we!==M||je!==P||dt!==v)&&(n.blendFuncSeparate(T[pe],T[we],T[je],T[dt]),b=pe,M=we,P=je,v=dt),_=z,A=!1}function $(z,ee){z.side===sl?Q(2884):B(2884);let pe=z.side===Qt;ee&&(pe=!pe),le(pe),z.blending===ts&&z.transparent===!1?D(Jn):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const we=z.stencilWrite;c.setTest(we),we&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?B(32926):Q(32926)}function le(z){L!==z&&(z?n.frontFace(2304):n.frontFace(2305),L=z)}function ae(z){z!==Ap?(B(2884),z!==N&&(z===Xl?n.cullFace(1029):z===Lp?n.cullFace(1028):n.cullFace(1032))):Q(2884),N=z}function se(z){z!==X&&(te&&n.lineWidth(z),X=z)}function ue(z,ee,pe){z?(B(32823),(I!==ee||R!==pe)&&(n.polygonOffset(ee,pe),I=ee,R=pe)):Q(32823)}function me(z){z?B(3089):Q(3089)}function fe(z){z===void 0&&(z=33984+j-1),ne!==z&&(n.activeTexture(z),ne=z)}function w(z,ee,pe){pe===void 0&&(ne===null?pe=33984+j-1:pe=ne);let we=oe[pe];we===void 0&&(we={type:void 0,texture:void 0},oe[pe]=we),(we.type!==z||we.texture!==ee)&&(ne!==pe&&(n.activeTexture(pe),ne=pe),n.bindTexture(z,ee||U[z]),we.type=z,we.texture=ee)}function S(){const z=oe[ne];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){he.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),he.copy(z))}function Ce(z){ge.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ge.copy(z))}function De(z,ee){let pe=d.get(ee);pe===void 0&&(pe=new WeakMap,d.set(ee,pe));let we=pe.get(z);we===void 0&&(we=n.getUniformBlockIndex(ee,z.name),pe.set(z,we))}function Be(z,ee){const we=d.get(ee).get(z);u.get(ee)!==we&&(n.uniformBlockBinding(ee,we,z.__bindingPointIndex),u.set(ee,we))}function nt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ne=null,oe={},h={},x=new WeakMap,p=[],m=null,g=!1,_=null,y=null,b=null,M=null,C=null,P=null,v=null,A=!1,L=null,N=null,X=null,I=null,R=null,he.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:Q,bindFramebuffer:Se,drawBuffers:be,useProgram:He,setBlending:D,setMaterial:$,setFlipSided:le,setCullFace:ae,setLineWidth:se,setPolygonOffset:ue,setScissorTest:me,activeTexture:fe,bindTexture:w,unbindTexture:S,compressedTexImage2D:F,compressedTexImage3D:W,texImage2D:Te,texImage3D:xe,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:J,texStorage3D:Me,texSubImage2D:Z,texSubImage3D:ce,compressedTexSubImage2D:ye,compressedTexSubImage3D:de,scissor:Ee,viewport:Ce,reset:nt}}function gx(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return g?new OffscreenCanvas(w,S):qr("canvas")}function y(w,S,F,W){let Z=1;if((w.width>W||w.height>W)&&(Z=W/Math.max(w.width,w.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ce=S?Lo:Math.floor,ye=ce(Z*w.width),de=ce(Z*w.height);p===void 0&&(p=_(ye,de));const J=F?_(ye,de):p;return J.width=ye,J.height=de,J.getContext("2d").drawImage(w,0,0,ye,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+de+")."),J}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return Tc(w.width)&&Tc(w.height)}function M(w){return a?!1:w.wrapS!==rn||w.wrapT!==rn||w.minFilter!==Et&&w.minFilter!==Yt}function C(w,S){return w.generateMipmaps&&S&&w.minFilter!==Et&&w.minFilter!==Yt}function P(w){n.generateMipmap(w)}function v(w,S,F,W,Z=!1){if(a===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=S;return S===6403&&(F===5126&&(ce=33326),F===5131&&(ce=33325),F===5121&&(ce=33321)),S===33319&&(F===5126&&(ce=33328),F===5131&&(ce=33327),F===5121&&(ce=33323)),S===6408&&(F===5126&&(ce=34836),F===5131&&(ce=34842),F===5121&&(ce=W===Je&&Z===!1?35907:32856),F===32819&&(ce=32854),F===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function A(w,S,F){return C(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Et&&w.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function L(w){return w===Et||w===ec||w===wa?9728:9729}function N(w){const S=w.target;S.removeEventListener("dispose",N),I(S),S.isVideoTexture&&x.delete(S)}function X(w){const S=w.target;S.removeEventListener("dispose",X),j(S)}function I(w){const S=i.get(w);if(S.__webglInit===void 0)return;const F=w.source,W=m.get(F);if(W){const Z=W[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(w),Object.keys(W).length===0&&m.delete(F)}i.remove(w)}function R(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const F=w.source,W=m.get(F);delete W[S.__cacheKey],o.memory.textures--}function j(w){const S=w.texture,F=i.get(w),W=i.get(S);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)n.deleteFramebuffer(F.__webglFramebuffer[Z]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[Z]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Z=0,ce=S.length;Z<ce;Z++){const ye=i.get(S[Z]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(S[Z])}i.remove(S),i.remove(w)}let te=0;function k(){te=0}function O(){const w=te;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),te+=1,w}function ne(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function oe(w,S){const F=i.get(w);if(w.isVideoTexture&&me(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,w,S);return}}t.bindTexture(3553,F.__webglTexture,33984+S)}function q(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(35866,F.__webglTexture,33984+S)}function K(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(32879,F.__webglTexture,33984+S)}function he(w,S){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Se(F,w,S);return}t.bindTexture(34067,F.__webglTexture,33984+S)}const ge={[Eo]:10497,[rn]:33071,[Co]:33648},_e={[Et]:9728,[ec]:9984,[wa]:9986,[Yt]:9729,[im]:9985,[Vs]:9987};function U(w,S,F){if(F?(n.texParameteri(w,10242,ge[S.wrapS]),n.texParameteri(w,10243,ge[S.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,ge[S.wrapR]),n.texParameteri(w,10240,_e[S.magFilter]),n.texParameteri(w,10241,_e[S.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(S.wrapS!==rn||S.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,L(S.magFilter)),n.texParameteri(w,10241,L(S.minFilter)),S.minFilter!==Et&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Et||S.minFilter!==wa&&S.minFilter!==Vs||S.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Hs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function B(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",N));const W=S.source;let Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));const ce=ne(S);if(ce!==w.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[ce].usedTimes++;const ye=Z[w.__cacheKey];ye!==void 0&&(Z[w.__cacheKey].usedTimes--,ye.usedTimes===0&&R(S)),w.__cacheKey=ce,w.__webglTexture=Z[ce].texture}return F}function Q(w,S,F){let W=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=35866),S.isData3DTexture&&(W=32879);const Z=B(w,S),ce=S.source;t.bindTexture(W,w.__webglTexture,33984+F);const ye=i.get(ce);if(ce.version!==ye.__version||Z===!0){t.activeTexture(33984+F),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const de=M(S)&&b(S.image)===!1;let J=y(S.image,de,!1,u);J=fe(S,J);const Me=b(J)||a,Te=r.convert(S.format,S.encoding);let xe=r.convert(S.type),Ee=v(S.internalFormat,Te,xe,S.encoding,S.isVideoTexture);U(W,S,Me);let Ce;const De=S.mipmaps,Be=a&&S.isVideoTexture!==!0,nt=ye.__version===void 0||Z===!0,z=A(S,J,Me);if(S.isDepthTexture)Ee=6402,a?S.type===vi?Ee=36012:S.type===gi?Ee=33190:S.type===ns?Ee=35056:Ee=33189:S.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===yi&&Ee===6402&&S.type!==Sd&&S.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=gi,xe=r.convert(S.type)),S.format===cs&&Ee===6402&&(Ee=34041,S.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ns,xe=r.convert(S.type))),nt&&(Be?t.texStorage2D(3553,1,Ee,J.width,J.height):t.texImage2D(3553,0,Ee,J.width,J.height,0,Te,xe,null));else if(S.isDataTexture)if(De.length>0&&Me){Be&&nt&&t.texStorage2D(3553,z,Ee,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)Ce=De[ee],Be?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,Te,xe,Ce.data):t.texImage2D(3553,ee,Ee,Ce.width,Ce.height,0,Te,xe,Ce.data);S.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(3553,z,Ee,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Te,xe,J.data)):t.texImage2D(3553,0,Ee,J.width,J.height,0,Te,xe,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&nt&&t.texStorage3D(35866,z,Ee,De[0].width,De[0].height,J.depth);for(let ee=0,pe=De.length;ee<pe;ee++)Ce=De[ee],S.format!==an?Te!==null?Be?t.compressedTexSubImage3D(35866,ee,0,0,0,Ce.width,Ce.height,J.depth,Te,Ce.data,0,0):t.compressedTexImage3D(35866,ee,Ee,Ce.width,Ce.height,J.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,ee,0,0,0,Ce.width,Ce.height,J.depth,Te,xe,Ce.data):t.texImage3D(35866,ee,Ee,Ce.width,Ce.height,J.depth,0,Te,xe,Ce.data)}else{Be&&nt&&t.texStorage2D(3553,z,Ee,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)Ce=De[ee],S.format!==an?Te!==null?Be?t.compressedTexSubImage2D(3553,ee,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(3553,ee,Ee,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,Te,xe,Ce.data):t.texImage2D(3553,ee,Ee,Ce.width,Ce.height,0,Te,xe,Ce.data)}else if(S.isDataArrayTexture)Be?(nt&&t.texStorage3D(35866,z,Ee,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Te,xe,J.data)):t.texImage3D(35866,0,Ee,J.width,J.height,J.depth,0,Te,xe,J.data);else if(S.isData3DTexture)Be?(nt&&t.texStorage3D(32879,z,Ee,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Te,xe,J.data)):t.texImage3D(32879,0,Ee,J.width,J.height,J.depth,0,Te,xe,J.data);else if(S.isFramebufferTexture){if(nt)if(Be)t.texStorage2D(3553,z,Ee,J.width,J.height);else{let ee=J.width,pe=J.height;for(let we=0;we<z;we++)t.texImage2D(3553,we,Ee,ee,pe,0,Te,xe,null),ee>>=1,pe>>=1}}else if(De.length>0&&Me){Be&&nt&&t.texStorage2D(3553,z,Ee,De[0].width,De[0].height);for(let ee=0,pe=De.length;ee<pe;ee++)Ce=De[ee],Be?t.texSubImage2D(3553,ee,0,0,Te,xe,Ce):t.texImage2D(3553,ee,Ee,Te,xe,Ce);S.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(3553,z,Ee,J.width,J.height),t.texSubImage2D(3553,0,0,0,Te,xe,J)):t.texImage2D(3553,0,Ee,Te,xe,J);C(S,Me)&&P(W),ye.__version=ce.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,F){if(S.image.length!==6)return;const W=B(w,S),Z=S.source;t.bindTexture(34067,w.__webglTexture,33984+F);const ce=i.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(33984+F),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!ye&&!de?J[ee]=y(S.image[ee],!1,!0,c):J[ee]=de?S.image[ee].image:S.image[ee],J[ee]=fe(S,J[ee]);const Me=J[0],Te=b(Me)||a,xe=r.convert(S.format,S.encoding),Ee=r.convert(S.type),Ce=v(S.internalFormat,xe,Ee,S.encoding),De=a&&S.isVideoTexture!==!0,Be=ce.__version===void 0||W===!0;let nt=A(S,Me,Te);U(34067,S,Te);let z;if(ye){De&&Be&&t.texStorage2D(34067,nt,Ce,Me.width,Me.height);for(let ee=0;ee<6;ee++){z=J[ee].mipmaps;for(let pe=0;pe<z.length;pe++){const we=z[pe];S.format!==an?xe!==null?De?t.compressedTexSubImage2D(34069+ee,pe,0,0,we.width,we.height,xe,we.data):t.compressedTexImage2D(34069+ee,pe,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+ee,pe,0,0,we.width,we.height,xe,Ee,we.data):t.texImage2D(34069+ee,pe,Ce,we.width,we.height,0,xe,Ee,we.data)}}}else{z=S.mipmaps,De&&Be&&(z.length>0&&nt++,t.texStorage2D(34067,nt,Ce,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(de){De?t.texSubImage2D(34069+ee,0,0,0,J[ee].width,J[ee].height,xe,Ee,J[ee].data):t.texImage2D(34069+ee,0,Ce,J[ee].width,J[ee].height,0,xe,Ee,J[ee].data);for(let pe=0;pe<z.length;pe++){const Ae=z[pe].image[ee].image;De?t.texSubImage2D(34069+ee,pe+1,0,0,Ae.width,Ae.height,xe,Ee,Ae.data):t.texImage2D(34069+ee,pe+1,Ce,Ae.width,Ae.height,0,xe,Ee,Ae.data)}}else{De?t.texSubImage2D(34069+ee,0,0,0,xe,Ee,J[ee]):t.texImage2D(34069+ee,0,Ce,xe,Ee,J[ee]);for(let pe=0;pe<z.length;pe++){const we=z[pe];De?t.texSubImage2D(34069+ee,pe+1,0,0,xe,Ee,we.image[ee]):t.texImage2D(34069+ee,pe+1,Ce,xe,Ee,we.image[ee])}}}C(S,Te)&&P(34067),ce.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function be(w,S,F,W,Z){const ce=r.convert(F.format,F.encoding),ye=r.convert(F.type),de=v(F.internalFormat,ce,ye,F.encoding);i.get(S).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,de,S.width,S.height,S.depth,0,ce,ye,null):t.texImage2D(Z,0,de,S.width,S.height,0,ce,ye,null)),t.bindFramebuffer(36160,w),ue(S)?f.framebufferTexture2DMultisampleEXT(36160,W,Z,i.get(F).__webglTexture,0,se(S)):(Z===3553||Z>=34069&&Z<=34074)&&n.framebufferTexture2D(36160,W,Z,i.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(w,S,F){if(n.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let W=33189;if(F||ue(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===vi?W=36012:Z.type===gi&&(W=33190));const ce=se(S);ue(S)?f.renderbufferStorageMultisampleEXT(36161,ce,W,S.width,S.height):n.renderbufferStorageMultisample(36161,ce,W,S.width,S.height)}else n.renderbufferStorage(36161,W,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const W=se(S);F&&ue(S)===!1?n.renderbufferStorageMultisample(36161,W,35056,S.width,S.height):ue(S)?f.renderbufferStorageMultisampleEXT(36161,W,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,w)}else{const W=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<W.length;Z++){const ce=W[Z],ye=r.convert(ce.format,ce.encoding),de=r.convert(ce.type),J=v(ce.internalFormat,ye,de,ce.encoding),Me=se(S);F&&ue(S)===!1?n.renderbufferStorageMultisample(36161,Me,J,S.width,S.height):ue(S)?f.renderbufferStorageMultisampleEXT(36161,Me,J,S.width,S.height):n.renderbufferStorage(36161,J,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function Ie(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe(S.depthTexture,0);const W=i.get(S.depthTexture).__webglTexture,Z=se(S);if(S.depthTexture.format===yi)ue(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,Z):n.framebufferTexture2D(36160,36096,3553,W,0);else if(S.depthTexture.format===cs)ue(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,Z):n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function T(w){const S=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]=n.createRenderbuffer(),He(S.__webglDepthbuffer[W],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),He(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function D(w,S,F){const W=i.get(w);S!==void 0&&be(W.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&T(w)}function $(w){const S=w.texture,F=i.get(w),W=i.get(S);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=S.version,o.memory.textures++);const Z=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,ye=b(w)||a;if(Z){F.__webglFramebuffer=[];for(let de=0;de<6;de++)F.__webglFramebuffer[de]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),ce)if(s.drawBuffers){const de=w.texture;for(let J=0,Me=de.length;J<Me;J++){const Te=i.get(de[J]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ue(w)===!1){const de=ce?S:[S];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let J=0;J<de.length;J++){const Me=de[J];F.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(36161,F.__webglColorRenderbuffer[J]);const Te=r.convert(Me.format,Me.encoding),xe=r.convert(Me.type),Ee=v(Me.internalFormat,Te,xe,Me.encoding,w.isXRRenderTarget===!0),Ce=se(w);n.renderbufferStorageMultisample(36161,Ce,Ee,w.width,w.height),n.framebufferRenderbuffer(36160,36064+J,36161,F.__webglColorRenderbuffer[J])}n.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),He(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,W.__webglTexture),U(34067,S,ye);for(let de=0;de<6;de++)be(F.__webglFramebuffer[de],w,S,36064,34069+de);C(S,ye)&&P(34067),t.unbindTexture()}else if(ce){const de=w.texture;for(let J=0,Me=de.length;J<Me;J++){const Te=de[J],xe=i.get(Te);t.bindTexture(3553,xe.__webglTexture),U(3553,Te,ye),be(F.__webglFramebuffer,w,Te,36064+J,3553),C(Te,ye)&&P(3553)}t.unbindTexture()}else{let de=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,W.__webglTexture),U(de,S,ye),be(F.__webglFramebuffer,w,S,36064,de),C(S,ye)&&P(de),t.unbindTexture()}w.depthBuffer&&T(w)}function le(w){const S=b(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let W=0,Z=F.length;W<Z;W++){const ce=F[W];if(C(ce,S)){const ye=w.isWebGLCubeRenderTarget?34067:3553,de=i.get(ce).__webglTexture;t.bindTexture(ye,de),P(ye),t.unbindTexture()}}}function ae(w){if(a&&w.samples>0&&ue(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,W=w.height;let Z=16384;const ce=[],ye=w.stencilBuffer?33306:36096,de=i.get(w),J=w.isWebGLMultipleRenderTargets===!0;if(J)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){ce.push(36064+Me),w.depthBuffer&&ce.push(ye);const Te=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Te===!1&&(w.depthBuffer&&(Z|=256),w.stencilBuffer&&(Z|=1024)),J&&n.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Me]),Te===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),J){const xe=i.get(S[Me]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,xe,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,Z,9728),h&&n.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Me,36161,de.__webglColorRenderbuffer[Me]);const Te=i.get(S[Me]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Me,3553,Te,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function se(w){return Math.min(d,w.samples)}function ue(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(w){const S=o.render.frame;x.get(w)!==S&&(x.set(w,S),w.update())}function fe(w,S){const F=w.encoding,W=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ao||F!==Ti&&(F===Je?a===!1?e.has("EXT_sRGB")===!0&&W===an?(w.format=Ao,w.minFilter=Yt,w.generateMipmaps=!1):S=Td.sRGBToLinear(S):(W!==an||Z!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),S}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=he,this.rebindTextures=D,this.setupRenderTarget=$,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ue}function vx(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===wi)return 5121;if(r===om)return 32819;if(r===lm)return 32820;if(r===sm)return 5120;if(r===rm)return 5122;if(r===Sd)return 5123;if(r===am)return 5124;if(r===gi)return 5125;if(r===vi)return 5126;if(r===Hs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cm)return 6406;if(r===an)return 6408;if(r===dm)return 6409;if(r===fm)return 6410;if(r===yi)return 6402;if(r===cs)return 34041;if(r===um)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ao)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hm)return 6403;if(r===pm)return 36244;if(r===mm)return 33319;if(r===gm)return 33320;if(r===vm)return 36249;if(r===Ta||r===Ea||r===Ca||r===Aa)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tc||r===nc||r===ic||r===sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_m)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===rc||r===ac)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===rc)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ac)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oc||r===lc||r===cc||r===uc||r===dc||r===fc||r===hc||r===pc||r===mc||r===gc||r===vc||r===_c||r===xc||r===yc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===oc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_c)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bc)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ns?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class _x extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xx={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),g=this._getHandJoint(c,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,x=.005;c.inputState.pinching&&f>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yx extends Ht{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:yi,u!==yi&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yi&&(i=gi),i===void 0&&u===cs&&(i=ns),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class bx extends ds{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,f=null,h=null;const x=t.getContextAttributes();let p=null,m=null;const g=[],_=[],y=new Set,b=new Map,M=new Kt;M.layers.enable(1),M.viewport=new gt;const C=new Kt;C.layers.enable(2),C.viewport=new gt;const P=[M,C],v=new _x;v.layers.enable(1),v.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=g[q];return K===void 0&&(K=new to,g[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=g[q];return K===void 0&&(K=new to,g[q]=K),K.getGripSpace()},this.getHand=function(q){let K=g[q];return K===void 0&&(K=new to,g[q]=K),K.getHandSpace()};function N(q){const K=_.indexOf(q.inputSource);if(K===-1)return;const he=g[K];he!==void 0&&he.dispatchEvent({type:q.type,data:q.inputSource})}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",I);for(let q=0;q<g.length;q++){const K=_[q];K!==null&&(_[q]=null,g[q].disconnect(K))}A=null,L=null,e.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),m=new Ei(f.framebufferWidth,f.framebufferHeight,{format:an,type:wi,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let K=null,he=null,ge=null;x.depth&&(ge=x.stencil?35056:33190,K=x.stencil?cs:yi,he=x.stencil?ns:gi);const _e={colorFormat:32856,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),m=new Ei(d.textureWidth,d.textureHeight,{format:an,type:wi,depthTexture:new yx(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const U=e.properties.get(m);U.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(q){for(let K=0;K<q.removed.length;K++){const he=q.removed[K],ge=_.indexOf(he);ge>=0&&(_[ge]=null,g[ge].disconnect(he))}for(let K=0;K<q.added.length;K++){const he=q.added[K];let ge=_.indexOf(he);if(ge===-1){for(let U=0;U<g.length;U++)if(U>=_.length){_.push(he),ge=U;break}else if(_[U]===null){_[U]=he,ge=U;break}if(ge===-1)break}const _e=g[ge];_e&&_e.connect(he)}}const R=new Y,j=new Y;function te(q,K,he){R.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const ge=R.distanceTo(j),_e=K.projectionMatrix.elements,U=he.projectionMatrix.elements,B=_e[14]/(_e[10]-1),Q=_e[14]/(_e[10]+1),Se=(_e[9]+1)/_e[5],be=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],Ie=(U[8]+1)/U[0],T=B*He,D=B*Ie,$=ge/(-He+Ie),le=$*-He;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ae=B+$,se=Q+$,ue=T-le,me=D+(ge-le),fe=Se*Q/se*ae,w=be*Q/se*ae;q.projectionMatrix.makePerspective(ue,me,fe,w,ae,se)}function k(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;v.near=C.near=M.near=q.near,v.far=C.far=M.far=q.far,(A!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,L=v.far);const K=q.parent,he=v.cameras;k(v,K);for(let _e=0;_e<he.length;_e++)k(he[_e],K);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),q.matrix.copy(v.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const ge=q.children;for(let _e=0,U=ge.length;_e<U;_e++)ge[_e].updateMatrixWorld(!0);he.length===2?te(v,M,C):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(q){d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.getPlanes=function(){return y};let O=null;function ne(q,K){if(c=K.getViewerPose(l||o),h=K,c!==null){const he=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ge=!1;he.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let _e=0;_e<he.length;_e++){const U=he[_e];let B=null;if(f!==null)B=f.getViewport(U);else{const Se=u.getViewSubImage(d,U);B=Se.viewport,_e===0&&(e.setRenderTargetTextures(m,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let Q=P[_e];Q===void 0&&(Q=new Kt,Q.layers.enable(_e),Q.viewport=new gt,P[_e]=Q),Q.matrix.fromArray(U.transform.matrix),Q.projectionMatrix.fromArray(U.projectionMatrix),Q.viewport.set(B.x,B.y,B.width,B.height),_e===0&&v.matrix.copy(Q.matrix),ge===!0&&v.cameras.push(Q)}}for(let he=0;he<g.length;he++){const ge=_[he],_e=g[he];ge!==null&&_e!==void 0&&_e.update(ge,K,l||o)}if(O&&O(q,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let he=null;for(const ge of y)K.detectedPlanes.has(ge)||(he===null&&(he=[]),he.push(ge));if(he!==null)for(const ge of he)y.delete(ge),b.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(const ge of K.detectedPlanes)if(!y.has(ge))y.add(ge),b.set(ge,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge});else{const _e=b.get(ge);ge.lastChangedTime>_e&&(b.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}}h=null}const oe=new Fd;oe.setAnimationLoop(ne),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}}function Sx(n,e){function t(p,m){m.color.getRGB(p.fogColor.value,Dd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,g,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),h(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,g,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,g,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*g,p.scale.value=_*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,g){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function h(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Mx(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,y){const b=y.program;i.uniformBlockBinding(_,b)}function c(_,y){let b=s[_.id];b===void 0&&(x(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(_,M);const C=e.render.frame;r[_.id]!==C&&(f(_),r[_.id]=C)}function u(_){const y=d();_.__bindingPointIndex=y;const b=n.createBuffer(),M=_.__size,C=_.usage;return n.bindBuffer(35345,b),n.bufferData(35345,M,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=s[_.id],b=_.uniforms,M=_.__cache;n.bindBuffer(35345,y);for(let C=0,P=b.length;C<P;C++){const v=b[C];if(h(v,C,M)===!0){const A=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let N=0;for(let X=0;X<L.length;X++){const I=L[X],R=p(I);typeof I=="number"?(v.__data[0]=I,n.bufferSubData(35345,A+N,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,A,v.__data)}}n.bindBuffer(35345,null)}function h(_,y,b){const M=_.value;if(b[y]===void 0){if(typeof M=="number")b[y]=M;else{const C=Array.isArray(M)?M:[M],P=[];for(let v=0;v<C.length;v++)P.push(C[v].clone());b[y]=P}return!0}else if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const C=Array.isArray(b[y])?b[y]:[b[y]],P=Array.isArray(M)?M:[M];for(let v=0;v<C.length;v++){const A=C[v];if(A.equals(P[v])===!1)return A.copy(P[v]),!0}}return!1}function x(_){const y=_.uniforms;let b=0;const M=16;let C=0;for(let P=0,v=y.length;P<v;P++){const A=y[P],L={boundary:0,storage:0},N=Array.isArray(A.value)?A.value:[A.value];for(let X=0,I=N.length;X<I;X++){const R=N[X],j=p(R);L.boundary+=j.boundary,L.storage+=j.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,P>0){C=b%M;const X=M-C;C!==0&&X-L.boundary<0&&(b+=M-C,A.__offset=b)}b+=L.storage}return C=b%M,C>0&&(b+=M-C),_.__size=b,_.__cache={},this}function p(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}function wx(){const n=qr("canvas");return n.style.display="block",n}function kd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:wx(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const h=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const p=this;let m=!1,g=0,_=0,y=null,b=-1,M=null;const C=new gt,P=new gt;let v=null,A=e.width,L=e.height,N=1,X=null,I=null;const R=new gt(0,0,A,L),j=new gt(0,0,A,L);let te=!1;const k=new Od;let O=!1,ne=!1,oe=null;const q=new vt,K=new Ze,he=new Y,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return y===null?N:1}let U=t;function B(E,H){for(let ie=0;ie<E.length;ie++){const G=E[ie],re=e.getContext(G,H);if(re!==null)return re}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",De,!1),U===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),U=B(H,E),U===null)throw B(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,Se,be,He,Ie,T,D,$,le,ae,se,ue,me,fe,w,S,F,W,Z,ce,ye,de,J,Me;function Te(){Q=new F_(U),Se=new A_(U,Q,n),Q.init(Se),de=new vx(U,Q,Se),be=new mx(U,Q,Se),He=new B_,Ie=new tx,T=new gx(U,Q,be,Ie,Se,de,He),D=new P_(p),$=new O_(p),le=new qm(U,Se),J=new E_(U,Q,le,Se),ae=new N_(U,le,He,J),se=new V_(U,ae,le,He),Z=new G_(U,Se,T),S=new L_(Ie),ue=new ex(p,D,$,Q,Se,J,S),me=new Sx(p,Ie),fe=new ix,w=new cx(Q,Se),W=new T_(p,D,$,be,se,u,o),F=new px(p,se,Se),Me=new Mx(U,He,Se,be),ce=new C_(U,Q,He,Se),ye=new z_(U,Q,He,Se),He.programs=ue.programs,p.capabilities=Se,p.extensions=Q,p.properties=Ie,p.renderLists=fe,p.shadowMap=F,p.state=be,p.info=He}Te();const xe=new bx(p,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(A,L,!1))},this.getSize=function(E){return E.set(A,L)},this.setSize=function(E,H,ie){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,L=H,e.width=Math.floor(E*N),e.height=Math.floor(H*N),ie!==!1&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(A*N,L*N).floor()},this.setDrawingBufferSize=function(E,H,ie){A=E,L=H,N=ie,e.width=Math.floor(E*ie),e.height=Math.floor(H*ie),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,H,ie,G){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,H,ie,G),be.viewport(C.copy(R).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,H,ie,G){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,H,ie,G),be.scissor(P.copy(j).multiplyScalar(N).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){be.setScissorTest(te=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(E=!0,H=!0,ie=!0){let G=0;E&&(G|=16384),H&&(G|=256),ie&&(G|=1024),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",De,!1),fe.dispose(),w.dispose(),Ie.dispose(),D.dispose(),$.dispose(),se.dispose(),J.dispose(),Me.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",we),xe.removeEventListener("sessionend",Ae),oe&&(oe.dispose(),oe=null),je.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=He.autoReset,H=F.enabled,ie=F.autoUpdate,G=F.needsUpdate,re=F.type;Te(),He.autoReset=E,F.enabled=H,F.autoUpdate=ie,F.needsUpdate=G,F.type=re}function De(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const H=E.target;H.removeEventListener("dispose",Be),nt(H)}function nt(E){z(E),Ie.remove(E)}function z(E){const H=Ie.get(E).programs;H!==void 0&&(H.forEach(function(ie){ue.releaseProgram(ie)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,ie,G,re,Le){H===null&&(H=ge);const Re=re.isMesh&&re.matrixWorld.determinant()<0,Ne=nf(E,H,ie,G,re);be.setMaterial(G,Re);let ze=ie.index,We=1;G.wireframe===!0&&(ze=ae.getWireframeAttribute(ie),We=2);const Ue=ie.drawRange,ke=ie.attributes.position;let it=Ue.start*We,Ot=(Ue.start+Ue.count)*We;Le!==null&&(it=Math.max(it,Le.start*We),Ot=Math.min(Ot,(Le.start+Le.count)*We)),ze!==null?(it=Math.max(it,0),Ot=Math.min(Ot,ze.count)):ke!=null&&(it=Math.max(it,0),Ot=Math.min(Ot,ke.count));const Tn=Ot-it;if(Tn<0||Tn===1/0)return;J.setup(re,G,Ne,ie,ze);let ni,st=ce;if(ze!==null&&(ni=le.get(ze),st=ye,st.setIndex(ni)),re.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*_e()),st.setMode(1)):st.setMode(4);else if(re.isLine){let Ge=G.linewidth;Ge===void 0&&(Ge=1),be.setLineWidth(Ge*_e()),re.isLineSegments?st.setMode(1):re.isLineLoop?st.setMode(2):st.setMode(3)}else re.isPoints?st.setMode(0):re.isSprite&&st.setMode(4);if(re.isInstancedMesh)st.renderInstances(it,Tn,re.count);else if(ie.isInstancedBufferGeometry){const Ge=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ua=Math.min(ie.instanceCount,Ge);st.renderInstances(it,Tn,ua)}else st.render(it,Tn)},this.compile=function(E,H){function ie(G,re,Le){G.transparent===!0&&G.side===or?(G.side=Qt,G.needsUpdate=!0,jt(G,re,Le),G.side=Mi,G.needsUpdate=!0,jt(G,re,Le),G.side=or):jt(G,re,Le)}f=w.get(E),f.init(),x.push(f),E.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(G){const re=G.material;if(re)if(Array.isArray(re))for(let Le=0;Le<re.length;Le++){const Re=re[Le];ie(Re,E,G)}else ie(re,E,G)}),x.pop(),f=null};let ee=null;function pe(E){ee&&ee(E)}function we(){je.stop()}function Ae(){je.start()}const je=new Fd;je.setAnimationLoop(pe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){ee=E,xe.setAnimationLoop(E),E===null?je.stop():je.start()},xe.addEventListener("sessionstart",we),xe.addEventListener("sessionend",Ae),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,H,y),f=w.get(E,x.length),f.init(),x.push(f),q.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),k.setFromProjectionMatrix(q),ne=this.localClippingEnabled,O=S.init(this.clippingPlanes,ne,H),d=fe.get(E,h.length),d.init(),h.push(d),dt(E,H,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(X,I),O===!0&&S.beginShadows();const ie=f.state.shadowsArray;if(F.render(ie,E,H),O===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(d,E),f.setupLights(p.physicallyCorrectLights),H.isArrayCamera){const G=H.cameras;for(let re=0,Le=G.length;re<Le;re++){const Re=G[re];_t(d,E,Re,Re.viewport)}}else _t(d,E,H);y!==null&&(T.updateMultisampleRenderTarget(y),T.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,H),J.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,h.pop(),h.length>0?d=h[h.length-1]:d=null};function dt(E,H,ie,G){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)ie=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){G&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Re=se.update(E),Ne=E.material;Ne.visible&&d.push(E,Re,Ne,ie,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==He.render.frame&&(E.skeleton.update(),E.skeleton.frame=He.render.frame),!E.frustumCulled||k.intersectsObject(E))){G&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Re=se.update(E),Ne=E.material;if(Array.isArray(Ne)){const ze=Re.groups;for(let We=0,Ue=ze.length;We<Ue;We++){const ke=ze[We],it=Ne[ke.materialIndex];it&&it.visible&&d.push(E,Re,it,ie,he.z,ke)}}else Ne.visible&&d.push(E,Re,Ne,ie,he.z,null)}}const Le=E.children;for(let Re=0,Ne=Le.length;Re<Ne;Re++)dt(Le[Re],H,ie,G)}function _t(E,H,ie,G){const re=E.opaque,Le=E.transmissive,Re=E.transparent;f.setupLightsView(ie),Le.length>0&&ti(re,H,ie),G&&be.viewport(C.copy(G)),re.length>0&&Qe(re,H,ie),Le.length>0&&Qe(Le,H,ie),Re.length>0&&Qe(Re,H,ie),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ti(E,H,ie){const G=Se.isWebGL2;oe===null&&(oe=new Ei(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Hs:wi,minFilter:Vs,samples:G&&r===!0?4:0})),p.getDrawingBufferSize(K),G?oe.setSize(K.x,K.y):oe.setSize(Lo(K.x),Lo(K.y));const re=p.getRenderTarget();p.setRenderTarget(oe),p.clear();const Le=p.toneMapping;p.toneMapping=Un,Qe(E,H,ie),p.toneMapping=Le,T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),p.setRenderTarget(re)}function Qe(E,H,ie){const G=H.isScene===!0?H.overrideMaterial:null;for(let re=0,Le=E.length;re<Le;re++){const Re=E[re],Ne=Re.object,ze=Re.geometry,We=G===null?Re.material:G,Ue=Re.group;Ne.layers.test(ie.layers)&&wn(Ne,H,ie,ze,We,Ue)}}function wn(E,H,ie,G,re,Le){E.onBeforeRender(p,H,ie,G,re,Le),E.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(p,H,ie,G,E,Le),re.transparent===!0&&re.side===or?(re.side=Qt,re.needsUpdate=!0,p.renderBufferDirect(ie,H,G,re,E,Le),re.side=Mi,re.needsUpdate=!0,p.renderBufferDirect(ie,H,G,re,E,Le),re.side=or):p.renderBufferDirect(ie,H,G,re,E,Le),E.onAfterRender(p,H,ie,G,re,Le)}function jt(E,H,ie){H.isScene!==!0&&(H=ge);const G=Ie.get(E),re=f.state.lights,Le=f.state.shadowsArray,Re=re.state.version,Ne=ue.getParameters(E,re.state,Le,H,ie),ze=ue.getProgramCacheKey(Ne);let We=G.programs;G.environment=E.isMeshStandardMaterial?H.environment:null,G.fog=H.fog,G.envMap=(E.isMeshStandardMaterial?$:D).get(E.envMap||G.environment),We===void 0&&(E.addEventListener("dispose",Be),We=new Map,G.programs=We);let Ue=We.get(ze);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===Re)return fl(E,Ne),Ue}else Ne.uniforms=ue.getUniforms(E),E.onBuild(ie,Ne,p),E.onBeforeCompile(Ne,p),Ue=ue.acquireProgram(Ne,ze),We.set(ze,Ue),G.uniforms=Ne.uniforms;const ke=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=S.uniform),fl(E,Ne),G.needsLights=rf(E),G.lightsStateVersion=Re,G.needsLights&&(ke.ambientLightColor.value=re.state.ambient,ke.lightProbe.value=re.state.probe,ke.directionalLights.value=re.state.directional,ke.directionalLightShadows.value=re.state.directionalShadow,ke.spotLights.value=re.state.spot,ke.spotLightShadows.value=re.state.spotShadow,ke.rectAreaLights.value=re.state.rectArea,ke.ltc_1.value=re.state.rectAreaLTC1,ke.ltc_2.value=re.state.rectAreaLTC2,ke.pointLights.value=re.state.point,ke.pointLightShadows.value=re.state.pointShadow,ke.hemisphereLights.value=re.state.hemi,ke.directionalShadowMap.value=re.state.directionalShadowMap,ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ke.spotShadowMap.value=re.state.spotShadowMap,ke.spotLightMatrix.value=re.state.spotLightMatrix,ke.spotLightMap.value=re.state.spotLightMap,ke.pointShadowMap.value=re.state.pointShadowMap,ke.pointShadowMatrix.value=re.state.pointShadowMatrix);const it=Ue.getUniforms(),Ot=Nr.seqWithValue(it.seq,ke);return G.currentProgram=Ue,G.uniformsList=Ot,Ue}function fl(E,H){const ie=Ie.get(E);ie.outputEncoding=H.outputEncoding,ie.instancing=H.instancing,ie.skinning=H.skinning,ie.morphTargets=H.morphTargets,ie.morphNormals=H.morphNormals,ie.morphColors=H.morphColors,ie.morphTargetsCount=H.morphTargetsCount,ie.numClippingPlanes=H.numClippingPlanes,ie.numIntersection=H.numClipIntersection,ie.vertexAlphas=H.vertexAlphas,ie.vertexTangents=H.vertexTangents,ie.toneMapping=H.toneMapping}function nf(E,H,ie,G,re){H.isScene!==!0&&(H=ge),T.resetTextureUnits();const Le=H.fog,Re=G.isMeshStandardMaterial?H.environment:null,Ne=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Ti,ze=(G.isMeshStandardMaterial?$:D).get(G.envMap||Re),We=G.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ue=!!G.normalMap&&!!ie.attributes.tangent,ke=!!ie.morphAttributes.position,it=!!ie.morphAttributes.normal,Ot=!!ie.morphAttributes.color,Tn=G.toneMapped?p.toneMapping:Un,ni=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,st=ni!==void 0?ni.length:0,Ge=Ie.get(G),ua=f.state.lights;if(O===!0&&(ne===!0||E!==M)){const Ft=E===M&&G.id===b;S.setState(G,E,Ft)}let ft=!1;G.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ua.state.version||Ge.outputEncoding!==Ne||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ze||G.fog===!0&&Ge.fog!==Le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==S.numPlanes||Ge.numIntersection!==S.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Ue||Ge.morphTargets!==ke||Ge.morphNormals!==it||Ge.morphColors!==Ot||Ge.toneMapping!==Tn||Se.isWebGL2===!0&&Ge.morphTargetsCount!==st)&&(ft=!0):(ft=!0,Ge.__version=G.version);let ii=Ge.currentProgram;ft===!0&&(ii=jt(G,H,re));let hl=!1,hs=!1,da=!1;const St=ii.getUniforms(),si=Ge.uniforms;if(be.useProgram(ii.program)&&(hl=!0,hs=!0,da=!0),G.id!==b&&(b=G.id,hs=!0),hl||M!==E){if(St.setValue(U,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,hs=!0,da=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ft=St.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,he.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||re.isSkinnedMesh)&&St.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(re.isSkinnedMesh){St.setOptional(U,re,"bindMatrix"),St.setOptional(U,re,"bindMatrixInverse");const Ft=re.skeleton;Ft&&(Se.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(U,"boneTexture",Ft.boneTexture,T),St.setValue(U,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=ie.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Se.isWebGL2===!0)&&Z.update(re,ie,G,ii),(hs||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,St.setValue(U,"receiveShadow",re.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=ze,si.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),hs&&(St.setValue(U,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&sf(si,da),Le&&G.fog===!0&&me.refreshFogUniforms(si,Le),me.refreshMaterialUniforms(si,G,N,L,oe),Nr.upload(U,Ge.uniformsList,si,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Nr.upload(U,Ge.uniformsList,si,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(U,"center",re.center),St.setValue(U,"modelViewMatrix",re.modelViewMatrix),St.setValue(U,"normalMatrix",re.normalMatrix),St.setValue(U,"modelMatrix",re.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let ha=0,af=Ft.length;ha<af;ha++)if(Se.isWebGL2){const pl=Ft[ha];Me.update(pl,ii),Me.bind(pl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function sf(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,H,ie){Ie.get(E.texture).__webglTexture=H,Ie.get(E.depthTexture).__webglTexture=ie;const G=Ie.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=ie===void 0,G.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const ie=Ie.get(E);ie.__webglFramebuffer=H,ie.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,ie=0){y=E,g=H,_=ie;let G=!0,re=null,Le=!1,Re=!1;if(E){const ze=Ie.get(E);ze.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(E):ze.__hasExternalTextures&&T.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Ue=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(re=Ue[H],Le=!0):Se.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?re=Ie.get(E).__webglMultisampledFramebuffer:re=Ue,C.copy(E.viewport),P.copy(E.scissor),v=E.scissorTest}else C.copy(R).multiplyScalar(N).floor(),P.copy(j).multiplyScalar(N).floor(),v=te;if(be.bindFramebuffer(36160,re)&&Se.drawBuffers&&G&&be.drawBuffers(E,re),be.viewport(C),be.scissor(P),be.setScissorTest(v),Le){const ze=Ie.get(E.texture);U.framebufferTexture2D(36160,36064,34069+H,ze.__webglTexture,ie)}else if(Re){const ze=Ie.get(E.texture),We=H||0;U.framebufferTextureLayer(36160,36064,ze.__webglTexture,ie||0,We)}b=-1},this.readRenderTargetPixels=function(E,H,ie,G,re,Le,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){be.bindFramebuffer(36160,Ne);try{const ze=E.texture,We=ze.format,Ue=ze.type;if(We!==an&&de.convert(We)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ue===Hs&&(Q.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ue!==wi&&de.convert(Ue)!==U.getParameter(35738)&&!(Ue===vi&&(Se.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-G&&ie>=0&&ie<=E.height-re&&U.readPixels(H,ie,G,re,de.convert(We),de.convert(Ue),Le)}finally{const ze=y!==null?Ie.get(y).__webglFramebuffer:null;be.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,H,ie=0){const G=Math.pow(2,-ie),re=Math.floor(H.image.width*G),Le=Math.floor(H.image.height*G);T.setTexture2D(H,0),U.copyTexSubImage2D(3553,ie,0,0,E.x,E.y,re,Le),be.unbindTexture()},this.copyTextureToTexture=function(E,H,ie,G=0){const re=H.image.width,Le=H.image.height,Re=de.convert(ie.format),Ne=de.convert(ie.type);T.setTexture2D(ie,0),U.pixelStorei(37440,ie.flipY),U.pixelStorei(37441,ie.premultiplyAlpha),U.pixelStorei(3317,ie.unpackAlignment),H.isDataTexture?U.texSubImage2D(3553,G,E.x,E.y,re,Le,Re,Ne,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(3553,G,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Re,H.mipmaps[0].data):U.texSubImage2D(3553,G,E.x,E.y,Re,Ne,H.image),G===0&&ie.generateMipmaps&&U.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(E,H,ie,G,re=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,ze=de.convert(G.format),We=de.convert(G.type);let Ue;if(G.isData3DTexture)T.setTexture3D(G,0),Ue=32879;else if(G.isDataArrayTexture)T.setTexture2DArray(G,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,G.flipY),U.pixelStorei(37441,G.premultiplyAlpha),U.pixelStorei(3317,G.unpackAlignment);const ke=U.getParameter(3314),it=U.getParameter(32878),Ot=U.getParameter(3316),Tn=U.getParameter(3315),ni=U.getParameter(32877),st=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;U.pixelStorei(3314,st.width),U.pixelStorei(32878,st.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),ie.isDataTexture||ie.isData3DTexture?U.texSubImage3D(Ue,re,H.x,H.y,H.z,Le,Re,Ne,ze,We,st.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ue,re,H.x,H.y,H.z,Le,Re,Ne,ze,st.data)):U.texSubImage3D(Ue,re,H.x,H.y,H.z,Le,Re,Ne,ze,We,st),U.pixelStorei(3314,ke),U.pixelStorei(32878,it),U.pixelStorei(3316,Ot),U.pixelStorei(3315,Tn),U.pixelStorei(32877,ni),re===0&&G.generateMipmaps&&U.generateMipmap(Ue),be.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){g=0,_=0,y=null,be.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tx extends kd{}Tx.prototype.isWebGL1Renderer=!0;class Ex extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cl extends ei{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new Y,f=new Y,h=[],x=[],p=[],m=[];for(let g=0;g<=i;g++){const _=[],y=g/i;let b=0;g==0&&o==0?b=.5/t:g==i&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const C=M/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),p.push(f.x,f.y,f.z),m.push(C+b,1-y),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const y=u[g][_+1],b=u[g][_],M=u[g+1][_],C=u[g+1][_+1];(g!==0||o>0)&&h.push(y,b,C),(g!==i-1||l<Math.PI)&&h.push(b,M,C)}this.setIndex(h),this.setAttribute("position",new yn(x,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(m,2))}static fromJSON(e){return new cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function su(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function ul(n={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:su(e[i])&&su(n[i])&&Object.keys(e[i]).length>0&&ul(n[i],e[i])})}const Gd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bn(){const n=typeof document<"u"?document:{};return ul(n,Gd),n}const Cx={document:Gd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Dt(){const n=typeof window<"u"?window:{};return ul(n,Cx),n}function Ax(n=""){return n.trim().split(" ").filter(e=>!!e.trim())}function Lx(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Vd(n,e=0){return setTimeout(n,e)}function $r(){return Date.now()}function Px(n){const e=Dt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function Dx(n,e="x"){const t=Dt();let i,s,r;const o=Px(n);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(s==="none"?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=r.m41:i.length===16?s=parseFloat(i[12]):s=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?s=r.m42:i.length===16?s=parseFloat(i[13]):s=parseFloat(i[5])),s||0}function Ar(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function Rx(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ut(...n){const e=Object(n[0]);for(let t=1;t<n.length;t+=1){const i=n[t];if(i!=null&&!Rx(i)){const s=Object.keys(Object(i)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,o=s.length;r<o;r+=1){const a=s[r],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(Ar(e[a])&&Ar(i[a])?i[a].__swiper__?e[a]=i[a]:Ut(e[a],i[a]):!Ar(e[a])&&Ar(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:Ut(e[a],i[a])):e[a]=i[a])}}}return e}function $i(n,e,t){n.style.setProperty(e,t)}function Hd({swiper:n,targetPosition:e,side:t}){const i=Dt(),s=-n.translate;let r=null,o;const a=n.params.speed;n.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(n.cssModeFrameID);const l=e>s?"next":"prev",c=(d,f)=>l==="next"&&d>=f||l==="prev"&&d<=f,u=()=>{o=new Date().getTime(),r===null&&(r=o);const d=Math.max(Math.min((o-r)/a,1),0),f=.5-Math.cos(d*Math.PI)/2;let h=s+f*(e-s);if(c(h,e)&&(h=e),n.wrapperEl.scrollTo({[t]:h}),c(h,e)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[t]:h})}),i.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=i.requestAnimationFrame(u)};u()}function dl(n){return n.querySelector(".swiper-slide-transform")||n.shadowRoot&&n.shadowRoot.querySelector(".swiper-slide-transform")||n}function _n(n,e=""){const t=Dt(),i=[...n.children];return t.HTMLSlotElement&&n instanceof HTMLSlotElement&&i.push(...n.assignedElements()),e?i.filter(s=>s.matches(e)):i}function Ix(n,e){const t=[e];for(;t.length>0;){const i=t.shift();if(n===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function Ox(n,e){const t=Dt();let i=e.contains(n);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(n),i||(i=Ix(n,e))),i}function Xr(n){try{console.warn(n);return}catch{}}function js(n,e=[]){const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:Ax(e)),t}function Fx(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Nx(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Zn(n,e){return Dt().getComputedStyle(n,null).getPropertyValue(e)}function Yr(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Wd(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Do(n,e,t){const i=Dt();return t?n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):n.offsetWidth}function pt(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}function zx(n){return e=>Math.abs(e)>0&&n.browser&&n.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}function qs(n,e=""){typeof trustedTypes<"u"?n.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):n.innerHTML=e}let no;function Bx(){const n=Dt(),e=bn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function jd(){return no||(no=Bx()),no}let io;function Ux({userAgent:n}={}){const e=jd(),t=Dt(),i=t.navigator.platform,s=n||t.navigator.userAgent,r={ios:!1,android:!1},o=t.screen.width,a=t.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=i==="Win32";let h=i==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&e.touch&&x.indexOf(`${o}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),l&&!f&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function qd(n={}){return io||(io=Ux(n)),io}let so;function kx(){const n=Dt(),e=qd();let t=!1;function i(){const a=n.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(n.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),r=i(),o=r||s&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:o,isWebView:s}}function $d(){return so||(so=kx()),so}function Gx({swiper:n,on:e,emit:t}){const i=Dt();let s=null,r=null;const o=()=>{!n||n.destroyed||!n.initialized||(t("beforeResize"),t("resize"))},a=()=>{!n||n.destroyed||!n.initialized||(s=new ResizeObserver(u=>{r=i.requestAnimationFrame(()=>{const{width:d,height:f}=n;let h=d,x=f;u.forEach(({contentBoxSize:p,contentRect:m,target:g})=>{g&&g!==n.el||(h=m?m.width:(p[0]||p).inlineSize,x=m?m.height:(p[0]||p).blockSize)}),(h!==d||x!==f)&&o()})}),s.observe(n.el))},l=()=>{r&&i.cancelAnimationFrame(r),s&&s.unobserve&&n.el&&(s.unobserve(n.el),s=null)},c=()=>{!n||n.destroyed||!n.initialized||t("orientationchange")};e("init",()=>{if(n.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function Vx({swiper:n,extendParams:e,on:t,emit:i}){const s=[],r=Dt(),o=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,f=new d(h=>{if(n.__preventObserver__)return;if(h.length===1){i("observerUpdate",h[0]);return}const x=function(){i("observerUpdate",h[0])};r.requestAnimationFrame?r.requestAnimationFrame(x):r.setTimeout(x,0)});f.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:n.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),s.push(f)},a=()=>{if(!!n.params.observer){if(n.params.observeParents){const c=Wd(n.hostEl);for(let u=0;u<c.length;u+=1)o(c[u])}o(n.hostEl,{childList:n.params.observeSlideChildren}),o(n.wrapperEl,{attributes:!1})}},l=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)}var Hx={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const s=t?"unshift":"push";return n.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][s](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function s(...r){i.off(n,s),s.__emitterProxy&&delete s.__emitterProxy,e.apply(i,r)}return s.__emitterProxy=e,i.on(n,s,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((s,r)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(...n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,s;return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],i=n.slice(1,n.length),s=e):(t=n[0].events,i=n[0].data,s=n[0].context||e),i.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(s,[o,...i])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(s,i)})}),e}};function Wx(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(Zn(i,"padding-left")||0,10)-parseInt(Zn(i,"padding-right")||0,10),t=t-parseInt(Zn(i,"padding-top")||0,10)-parseInt(Zn(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function jx(){const n=this;function e(L,N){return parseFloat(L.getPropertyValue(n.getDirectionLabel(N))||0)}const t=n.params,{wrapperEl:i,slidesEl:s,rtlTranslate:r,wrongRTL:o}=n,a=n.virtual&&t.virtual.enabled,l=a?n.virtual.slides.length:n.slides.length,c=_n(s,`.${n.params.slideClass}, swiper-slide`),u=a?n.virtual.slides.length:c.length;let d=[];const f=[],h=[];let x=t.slidesOffsetBefore;typeof x=="function"&&(x=t.slidesOffsetBefore.call(n));let p=t.slidesOffsetAfter;typeof p=="function"&&(p=t.slidesOffsetAfter.call(n));const m=n.snapGrid.length,g=n.slidesGrid.length,_=n.size-x-p;let y=t.spaceBetween,b=-x,M=0,C=0;if(typeof _>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*_:typeof y=="string"&&(y=parseFloat(y)),n.virtualSize=-y-x-p,c.forEach(L=>{r?L.style.marginLeft="":L.style.marginRight="",L.style.marginBottom="",L.style.marginTop=""}),t.centeredSlides&&t.cssMode&&($i(i,"--swiper-centered-offset-before",""),$i(i,"--swiper-centered-offset-after","")),t.cssMode&&($i(i,"--swiper-slides-offset-before",`${x}px`),$i(i,"--swiper-slides-offset-after",`${p}px`));const P=t.grid&&t.grid.rows>1&&n.grid;P?n.grid.initSlides(c):n.grid&&n.grid.unsetSlides();let v;const A=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(L=>typeof t.breakpoints[L].slidesPerView<"u").length>0;for(let L=0;L<u;L+=1){v=0;const N=c[L];if(!(N&&(P&&n.grid.updateSlide(L,N,c),Zn(N,"display")==="none"))){if(a&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(v=t.virtual.slidesPerViewAutoSlideSize),v&&N&&(t.roundLengths&&(v=Math.floor(v)),N.style[n.getDirectionLabel("width")]=`${v}px`);else if(t.slidesPerView==="auto"){A&&(N.style[n.getDirectionLabel("width")]="");const X=getComputedStyle(N),I=N.style.transform,R=N.style.webkitTransform;if(I&&(N.style.transform="none"),R&&(N.style.webkitTransform="none"),t.roundLengths)v=n.isHorizontal()?Do(N,"width",!0):Do(N,"height",!0);else{const j=e(X,"width"),te=e(X,"padding-left"),k=e(X,"padding-right"),O=e(X,"margin-left"),ne=e(X,"margin-right"),oe=X.getPropertyValue("box-sizing");if(oe&&oe==="border-box")v=j+O+ne;else{const{clientWidth:q,offsetWidth:K}=N;v=j+te+k+O+ne+(K-q)}}I&&(N.style.transform=I),R&&(N.style.webkitTransform=R),t.roundLengths&&(v=Math.floor(v))}else v=(_-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(v=Math.floor(v)),N&&(N.style[n.getDirectionLabel("width")]=`${v}px`);N&&(N.swiperSlideSize=v),h.push(v),t.centeredSlides?(b=b+v/2+M/2+y,M===0&&L!==0&&(b=b-_/2-y),L===0&&(b=b-_/2-y),Math.abs(b)<1/1e3&&(b=0),t.roundLengths&&(b=Math.floor(b)),C%t.slidesPerGroup===0&&d.push(b),f.push(b)):(t.roundLengths&&(b=Math.floor(b)),(C-Math.min(n.params.slidesPerGroupSkip,C))%n.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+v+y),n.virtualSize+=v+y,M=v,C+=1}}if(n.virtualSize=Math.max(n.virtualSize,_)+p,r&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+y}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+y}px`),P&&n.grid.updateWrapperSize(v,d),!t.centeredSlides){const L=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,N=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||L);let X=d.length;if(N){let R;if(t.slidesPerView==="auto"){R=1;let j=0;for(let te=h.length-1;te>=0&&(j+=h[te]+(te<h.length-1?y:0),j<=_);te-=1)R=h.length-te}else R=Math.floor(t.slidesPerView);X=Math.max(u-R,0)}const I=[];for(let R=0;R<d.length;R+=1){let j=d[R];t.roundLengths&&(j=Math.floor(j)),N?R<=X&&I.push(j):d[R]<=n.virtualSize-_&&I.push(j)}d=I,Math.floor(n.virtualSize-_)-Math.floor(d[d.length-1])>1&&(N||d.push(n.virtualSize-_))}if(a&&t.loop){const L=h[0]+y;if(t.slidesPerGroup>1){const N=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),X=L*t.slidesPerGroup;for(let I=0;I<N;I+=1)d.push(d[d.length-1]+X)}for(let N=0;N<n.virtual.slidesBefore+n.virtual.slidesAfter;N+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+L),f.push(f[f.length-1]+L),n.virtualSize+=L}if(d.length===0&&(d=[0]),y!==0){const L=n.isHorizontal()&&r?"marginLeft":n.getDirectionLabel("marginRight");c.filter((N,X)=>!t.cssMode||t.loop?!0:X!==c.length-1).forEach(N=>{N.style[L]=`${y}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let L=0;h.forEach(X=>{L+=X+(y||0)}),L-=y;const N=L>_?L-_:0;d=d.map(X=>X<=0?-x:X>N?N+p:X)}if(t.centerInsufficientSlides){let L=0;if(h.forEach(N=>{L+=N+(y||0)}),L-=y,L<_){const N=(_-L)/2;d.forEach((X,I)=>{d[I]=X-N}),f.forEach((X,I)=>{f[I]=X+N})}}if(Object.assign(n,{slides:c,snapGrid:d,slidesGrid:f,slidesSizesGrid:h}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){$i(i,"--swiper-centered-offset-before",`${-d[0]}px`),$i(i,"--swiper-centered-offset-after",`${n.size/2-h[h.length-1]/2}px`);const L=-n.snapGrid[0],N=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(X=>X+L),n.slidesGrid=n.slidesGrid.map(X=>X+N)}if(u!==l&&n.emit("slidesLengthChange"),d.length!==m&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),f.length!==g&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const L=`${t.containerModifierClass}backface-hidden`,N=n.el.classList.contains(L);u<=t.maxBackfaceHiddenSlides?N||n.el.classList.add(L):N&&n.el.classList.remove(L)}}function qx(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let s=0,r;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const a=t[r].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function $x(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}const ru=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Xx(n=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:s,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;s&&(o=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const d=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),f=(o-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),h=-(o-u),x=h+e.slidesSizesGrid[l],p=h>=0&&h<=e.size-e.slidesSizesGrid[l],m=h>=0&&h<e.size-1||x>1&&x<=e.size||h<=0&&x>=e.size;m&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),ru(c,m,t.slideVisibleClass),ru(c,p,t.slideFullyVisibleClass),c.progress=s?-d:d,c.originalProgress=s?-f:f}}function Yx(n){const e=this;if(typeof n>"u"){const u=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=e;const l=r,c=o;if(i===0)s=0,r=!0,o=!0;else{s=(n-e.minTranslate())/i;const u=Math.abs(n-e.minTranslate())<1,d=Math.abs(n-e.maxTranslate())<1;r=u||s<=0,o=d||s>=1,u&&(s=0),d&&(s=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],h=e.slidesGrid[d],x=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(n);p>=f?a=(p-f)/x:a=(p+x-h)/x,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),r&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const ro=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Kx(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:s}=n,r=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,a=d=>_n(i,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(r)if(t.loop){let d=s-n.virtual.slidesBefore;d<0&&(d=n.virtual.slides.length+d),d>=n.virtual.slides.length&&(d-=n.virtual.slides.length),l=a(`[data-swiper-slide-index="${d}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else o?(l=e.find(d=>d.column===s),u=e.find(d=>d.column===s+1),c=e.find(d=>d.column===s-1)):l=e[s];l&&(o||(u=Nx(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=Fx(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{ro(d,d===l,t.slideActiveClass),ro(d,d===u,t.slideNextClass),ro(d,d===c,t.slidePrevClass)}),n.emitSlidesClasses()}const zr=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let s=i.querySelector(`.${n.params.lazyPreloaderClass}`);!s&&n.isElement&&(i.shadowRoot?s=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(s=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),s&&!s.lazyPreloaderManaged&&s.remove())})),s&&!s.lazyPreloaderManaged&&s.remove()}},ao=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Ro=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),s=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),n.slides.forEach((l,c)=>{a.includes(l.column)&&ao(n,c)});return}const r=s+i-1;if(n.params.rewind||n.params.loop)for(let o=s-e;o<=r+e;o+=1){const a=(o%t+t)%t;(a<s||a>r)&&ao(n,a)}else for(let o=Math.max(s-e,0);o<=Math.min(r+e,t-1);o+=1)o!==s&&(o>r||o<s)&&ao(n,o)};function Zx(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let s;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?s=r:i>=e[r]&&i<e[r+1]&&(s=r+1):i>=e[r]&&(s=r);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Jx(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=e;let l=n,c;const u=h=>{let x=h-e.virtual.slidesBefore;return x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),x};if(typeof l>"u"&&(l=Zx(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const h=Math.min(s.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===r&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&s.grid&&s.grid.rows>1;let f;if(e.virtual&&s.virtual.enabled)s.loop?f=u(l):f=l;else if(d){const h=e.slides.find(p=>p.column===l);let x=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(e.slides.indexOf(h),0)),f=Math.floor(x/s.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?f=parseInt(h,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:f,previousIndex:r,activeIndex:l}),e.initialized&&Ro(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function Qx(n,e){const t=this,i=t.params;let s=n.closest(`.${i.slideClass}, swiper-slide`);!s&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(s=a)});let r=!1,o;if(s){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===s){r=!0,o=a;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var ey={updateSize:Wx,updateSlides:jx,updateAutoHeight:qx,updateSlidesOffset:$x,updateSlidesProgress:Xx,updateProgress:Yx,updateSlidesClasses:Kx,updateActiveIndex:Jx,updateClickedSlide:Qx};function ty(n=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:s,wrapperEl:r}=e;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;let o=Dx(r,n);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function ny(n,e){const t=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-n:n:l=n,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,s.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:s.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(n-t.minTranslate())/d,u!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function iy(){return-this.snapGrid[0]}function sy(){return-this.snapGrid[this.snapGrid.length-1]}function ry(n=0,e=this.params.speed,t=!0,i=!0,s){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(i&&n>l?u=l:i&&n<c?u=c:u=n,r.updateProgress(u),o.cssMode){const d=r.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return Hd({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(f){!r||r.destroyed||f.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var ay={getTranslate:ty,setTranslate:ny,minTranslate:iy,maxTranslate:sy,translateTo:ry};function oy(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Xd({swiper:n,runCallbacks:e,direction:t,step:i}){const{activeIndex:s,previousIndex:r}=n;let o=t;o||(s>r?o="next":s<r?o="prev":o="reset"),n.emit(`transition${i}`),e&&o==="reset"?n.emit(`slideResetTransition${i}`):e&&s!==r&&(n.emit(`slideChangeTransition${i}`),o==="next"?n.emit(`slideNextTransition${i}`):n.emit(`slidePrevTransition${i}`))}function ly(n=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Xd({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function cy(n=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Xd({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var uy={setTransition:oy,transitionStart:ly,transitionEnd:cy};function dy(n=0,e,t=!0,i,s){typeof n=="string"&&(n=parseInt(n,10));const r=this;let o=n;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:h,enabled:x}=r;if(!x&&!i&&!s||r.destroyed||r.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const p=Math.min(r.params.slidesPerGroupSkip,o);let m=p+Math.floor((o-p)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const g=-l[m];if(a.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const v=-Math.floor(g*100),A=Math.floor(c[P]*100),L=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?v>=A&&v<L-(L-A)/2?o=P:v>=A&&v<L&&(o=P+1):v>=A&&(o=P)}if(r.initialized&&o!==d&&(!r.allowSlideNext&&(f?g>r.translate&&g>r.minTranslate():g<r.translate&&g<r.minTranslate())||!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(g);let _;o>d?_="next":o<d?_="prev":_="reset";const y=r.virtual&&r.params.virtual.enabled;if(!(y&&s)&&(f&&-g===r.translate||!f&&g===r.translate))return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(g),_!=="reset"&&(r.transitionStart(t,_),r.transitionEnd(t,_)),!1;if(a.cssMode){const P=r.isHorizontal(),v=f?g:-g;if(e===0)y&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),y&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[P?"scrollLeft":"scrollTop"]=v})):h[P?"scrollLeft":"scrollTop"]=v,y&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Hd({swiper:r,targetPosition:v,side:P?"left":"top"}),!0;h.scrollTo({[P?"left":"top"]:v,behavior:"smooth"})}return!0}const C=$d().isSafari;return y&&!s&&C&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(e),r.setTranslate(g),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,_),e===0?r.transitionEnd(t,_):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(v){!r||r.destroyed||v.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,_))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function fy(n=0,e,t=!0,i){typeof n=="string"&&(n=parseInt(n,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const r=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=n;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(r){const p=o*s.params.grid.rows;a=s.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else a=s.getSlideIndexByData(o);const l=r?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=s.params,f=c||!!u||!!d;let h=s.params.slidesPerView;h==="auto"?h=s.slidesPerViewDynamic():(h=Math.ceil(parseFloat(s.params.slidesPerView,10)),f&&h%2===0&&(h=h+1));let x=l-a<h;if(f&&(x=x||a<Math.ceil(h/2)),i&&f&&s.params.slidesPerView!=="auto"&&!r&&(x=!1),x){const p=f?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?a+1:a-l+1,slideRealIndex:p==="next"?s.realIndex:void 0})}if(r){const p=o*s.params.grid.rows;o=s.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,t,i)}),s}function hy(n,e=!0,t){const i=this,{enabled:s,params:r,animating:o}=i;if(!s||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,c=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function py(n,e=!0,t){const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const u=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const d=a?i.translate:-i.translate;function f(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const h=f(d),x=r.map(_=>f(_)),p=s.freeMode&&s.freeMode.enabled;let m=r[x.indexOf(h)-1];if(typeof m>"u"&&(s.cssMode||p)){let _;r.forEach((y,b)=>{h>=y&&(_=b)}),typeof _<"u"&&(m=p?r[_]:r[_>0?_-1:_])}let g=0;if(typeof m<"u"&&(g=o.indexOf(m),g<0&&(g=i.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(g=g-i.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),s.rewind&&i.isBeginning){const _=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(_,n,e,t)}else if(s.loop&&i.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(g,n,e,t)}),!0;return i.slideTo(g,n,e,t)}function my(n,e=!0,t){const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function gy(n,e=!0,t,i=.5){const s=this;if(s.destroyed)return;typeof n>"u"&&(n=s.params.speed);let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const c=s.snapGrid[a],u=s.snapGrid[a+1];l-c>(u-c)*i&&(r+=s.params.slidesPerGroup)}else{const c=s.snapGrid[a-1],u=s.snapGrid[a];l-c<=(u-c)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,n,e,t)}function vy(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let s=n.getSlideIndexWhenGrid(n.clickedIndex),r;const o=n.isElement?"swiper-slide":`.${e.slideClass}`,a=n.grid&&n.params.grid&&n.params.grid.rows>1;if(e.loop){if(n.animating)return;r=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n.slideToLoop(r):s>(a?(n.slides.length-i)/2-(n.params.grid.rows-1):n.slides.length-i)?(n.loopFix(),s=n.getSlideIndex(_n(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),Vd(()=>{n.slideTo(s)})):n.slideTo(s)}else n.slideTo(s)}var _y={slideTo:dy,slideToLoop:fy,slideNext:hy,slidePrev:py,slideReset:my,slideToClosest:gy,slideToClickedSlide:vy};function xy(n,e){const t=this,{params:i,slidesEl:s}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{_n(s,`.${i.slideClass}, swiper-slide`).forEach((x,p)=>{x.setAttribute("data-swiper-slide-index",p)})},o=()=>{const h=_n(s,`.${i.slideBlankClass}`);h.forEach(x=>{x.remove()}),h.length>0&&(t.recalcSlides(),t.updateSlides())},a=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||a)&&o();const l=i.slidesPerGroup*(a?i.grid.rows:1),c=t.slides.length%l!==0,u=a&&t.slides.length%i.grid.rows!==0,d=h=>{for(let x=0;x<h;x+=1){const p=t.isElement?js("swiper-slide",[i.slideBlankClass]):js("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(p)}};if(c){if(i.loopAddBlankSlides){const h=l-t.slides.length%l;d(h),t.recalcSlides(),t.updateSlides()}else Xr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(u){if(i.loopAddBlankSlides){const h=i.grid.rows-t.slides.length%i.grid.rows;d(h),t.recalcSlides(),t.updateSlides()}else Xr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const f=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:n,direction:f?void 0:"next",initial:e})}function yy({slideRealIndex:n,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:s,initial:r,byController:o,byMousewheel:a}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:h}=l,{centeredSlides:x,slidesOffsetBefore:p,slidesOffsetAfter:m,initialSlide:g}=h,_=x||!!p||!!m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){e&&(!_&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):_&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let y=h.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(h.slidesPerView,10)),_&&y%2===0&&(y=y+1));const b=h.slidesPerGroupAuto?y:h.slidesPerGroup;let M=_?Math.max(b,Math.ceil(y/2)):b;M%b!==0&&(M+=b-M%b),M+=h.loopAdditionalSlides,l.loopedSlides=M;const C=l.grid&&h.grid&&h.grid.rows>1;c.length<y+M||l.params.effect==="cards"&&c.length<y+M*2?Xr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):C&&h.grid.fill==="row"&&Xr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const P=[],v=[],A=C?Math.ceil(c.length/h.grid.rows):c.length,L=r&&A-g<y&&!_;let N=L?g:l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.find(O=>O.classList.contains(h.slideActiveClass))):N=s;const X=t==="next"||!t,I=t==="prev"||!t;let R=0,j=0;const k=(C?c[s].column:s)+(_&&typeof i>"u"?-y/2+.5:0);if(k<M){R=Math.max(M-k,b);for(let O=0;O<M-k;O+=1){const ne=O-Math.floor(O/A)*A;if(C){const oe=A-ne-1;for(let q=c.length-1;q>=0;q-=1)c[q].column===oe&&P.push(q)}else P.push(A-ne-1)}}else if(k+y>A-M){j=Math.max(k-(A-M*2),b),L&&(j=Math.max(j,y-A+g+1));for(let O=0;O<j;O+=1){const ne=O-Math.floor(O/A)*A;C?c.forEach((oe,q)=>{oe.column===ne&&v.push(q)}):v.push(ne)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<y+M*2&&(v.includes(s)&&v.splice(v.indexOf(s),1),P.includes(s)&&P.splice(P.indexOf(s),1)),I&&P.forEach(O=>{c[O].swiperLoopMoveDOM=!0,f.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),X&&v.forEach(O=>{c[O].swiperLoopMoveDOM=!0,f.append(c[O]),c[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():C&&(P.length>0&&I||v.length>0&&X)&&l.slides.forEach((O,ne)=>{l.grid.updateSlide(ne,O,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),e){if(P.length>0&&I){if(typeof n>"u"){const O=l.slidesGrid[N],oe=l.slidesGrid[N+R]-O;a?l.setTranslate(l.translate-oe):(l.slideTo(N+Math.ceil(R),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-oe,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-oe))}else if(i){const O=C?P.length/h.grid.rows:P.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(v.length>0&&X)if(typeof n>"u"){const O=l.slidesGrid[N],oe=l.slidesGrid[N-j]-O;a?l.setTranslate(l.translate-oe):(l.slideTo(N-j,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-oe,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-oe))}else{const O=C?v.length/h.grid.rows:v.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const O={slideRealIndex:n,direction:t,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(ne=>{!ne.destroyed&&ne.params.loop&&ne.loopFix({...O,slideTo:ne.params.slidesPerView===h.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?e:!1})}l.emit("loopFix")}function by(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||!t||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(s=>{const r=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[r]=s}),n.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{t.append(s)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var Sy={loopCreate:xy,loopFix:yy,loopDestroy:by};function My(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function wy(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var Ty={setGrabCursor:My,unsetGrabCursor:wy};function Ey(n,e=this){function t(i){if(!i||i===bn()||i===Dt())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(n);return!s&&!i.getRootNode?null:s||t(i.getRootNode().host)}return t(e)}function au(n,e,t){const i=Dt(),{params:s}=n,r=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return r&&(t<=o||t>=i.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Cy(n){const e=this,t=bn();let i=n;i.originalEvent&&(i=i.originalEvent);const s=e.touchEventsData;if(i.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==i.pointerId)return;s.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(s.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){au(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!Ox(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||s.isTouched&&s.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(f?Ey(d,l):l.closest(d))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const h=o.currentX,x=o.currentY;if(!au(e,i,h))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=x,s.touchStartTime=$r(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let p=!0;l.matches(s.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(s.focusableElements))&&t.activeElement.blur();const m=p&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||m)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ay(n){const e=bn(),t=this,i=t.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=t;if(!a||!s.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(C=>C.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),i.touchStartTime=$r());return}if(s.touchReleaseOnEdges&&!s.loop)if(t.isVertical()){if(d<r.startY&&t.translate<=t.maxTranslate()||d>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(o&&(u>r.startX&&-t.translate<=t.maxTranslate()||u<r.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(u<r.startX&&t.translate<=t.maxTranslate()||u>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;const f=r.currentX-r.startX,h=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(f**2+h**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let C;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:f*f+h*h>=25&&(C=Math.atan2(Math.abs(h),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?C>s.touchAngle:90-C>s.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let x=t.isHorizontal()?f:h,p=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),p=Math.abs(p)*(o?1:-1)),r.diff=x,x*=s.touchRatio,o&&(x=-x,p=-p);const m=t.touchesDirection;t.swipeDirection=x>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";const g=t.params.loop&&!s.cssMode,_=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(g&&_&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(C)}i.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let y;if(new Date().getTime(),s._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&m!==t.touchesDirection&&g&&_&&Math.abs(x)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=x+i.startTranslate;let b=!0,M=s.resistanceRatio;if(s.touchReleaseOnEdges&&(M=0),x>0?(g&&_&&!y&&i.allowThresholdMove&&i.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+x)**M))):x<0&&(g&&_&&!y&&i.allowThresholdMove&&i.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-x)**M))),b&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),s.threshold>0)if(Math.abs(x)>s.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Ly(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let s;if(i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].find(M=>M.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=$r(),f=d-t.touchStartTime;if(e.allowClick){const M=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(M&&M[0]||i.target,M),e.emit("tap click",i),f<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=$r(),Vd(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(o.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const x=h>=-e.maxTranslate()&&!e.params.loop;let p=0,m=e.slidesSizesGrid[0];for(let M=0;M<c.length;M+=M<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=M<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[M+C]<"u"?(x||h>=c[M]&&h<c[M+C])&&(p=M,m=c[M+C]-c[M]):(x||h>=c[M])&&(p=M,m=c[c.length-1]-c[c.length-2])}let g=null,_=null;o.rewind&&(e.isBeginning?_=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(g=0));const y=(h-c[p])/m,b=p<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(y>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?g:p+b):e.slideTo(p)),e.swipeDirection==="prev"&&(y>1-o.longSwipesRatio?e.slideTo(p+b):_!==null&&y<0&&Math.abs(y)>o.longSwipesRatio?e.slideTo(_):e.slideTo(p))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(p+b):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(g!==null?g:p+b),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:p))}}function ou(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!a?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=s,n.allowSlideNext=i,n.params.watchOverflow&&r!==n.snapGrid&&n.checkOverflow()}function Py(n){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation()))}function Dy(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let s;const r=n.maxTranslate()-n.minTranslate();r===0?s=0:s=(n.translate-n.minTranslate())/r,s!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function Ry(n){const e=this;zr(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Iy(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Yd=(n,e)=>{const t=bn(),{params:i,el:s,wrapperEl:r,device:o}=n,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!s||typeof s=="string"||(t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:a}),s[l]("touchstart",n.onTouchStart,{passive:!1}),s[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",n.onClick,!0),i.cssMode&&r[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ou,!0):n[c]("observerUpdate",ou,!0),s[l]("load",n.onLoad,{capture:!0}))};function Oy(){const n=this,{params:e}=n;n.onTouchStart=Cy.bind(n),n.onTouchMove=Ay.bind(n),n.onTouchEnd=Ly.bind(n),n.onDocumentTouchStart=Iy.bind(n),e.cssMode&&(n.onScroll=Dy.bind(n)),n.onClick=Py.bind(n),n.onLoad=Ry.bind(n),Yd(n,"on")}function Fy(){Yd(this,"off")}var Ny={attachEvents:Oy,detachEvents:Fy};const lu=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function zy(){const n=this,{realIndex:e,initialized:t,params:i,el:s}=n,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=bn(),a=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?n.el:o.querySelector(i.breakpointsBase),c=n.getBreakpoint(r,a,l);if(!c||n.currentBreakpoint===c)return;const d=(c in r?r[c]:void 0)||n.originalParams,f=lu(n,i),h=lu(n,d),x=n.params.grabCursor,p=d.grabCursor,m=i.enabled;f&&!h?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!f&&h&&(s.classList.add(`${i.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&i.grid.fill==="column")&&s.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),x&&!p?n.unsetGrabCursor():!x&&p&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof d[C]>"u")return;const P=i[C]&&i[C].enabled,v=d[C]&&d[C].enabled;P&&!v&&n[C].disable(),!P&&v&&n[C].enable()});const g=d.direction&&d.direction!==i.direction,_=i.loop&&(d.slidesPerView!==i.slidesPerView||g),y=i.loop;g&&t&&n.changeDirection(),Ut(n.params,d);const b=n.params.enabled,M=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),m&&!b?n.disable():!m&&b&&n.enable(),n.currentBreakpoint=c,n.emit("_beforeBreakpoint",d),t&&(_?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!y&&M?(n.loopCreate(e),n.updateSlides()):y&&!M&&n.loopDestroy()),n.emit("breakpoint",d)}function By(n,e="window",t){if(!n||e==="container"&&!t)return;let i=!1;const s=Dt(),r=e==="window"?s.innerHeight:t.clientHeight,o=Object.keys(n).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:r*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?s.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var Uy={setBreakpoint:zy,getBreakpoint:By};function ky(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(s=>{i[s]&&t.push(e+s)}):typeof i=="string"&&t.push(e+i)}),t}function Gy(){const n=this,{classNames:e,params:t,rtl:i,el:s,device:r}=n,o=ky(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),s.classList.add(...e),n.emitContainerClasses()}function Vy(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Hy={addClasses:Gy,removeClasses:Vy};function Wy(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const s=n.slides.length-1,r=n.slidesGrid[s]+n.slidesSizesGrid[s]+i*2;n.isLocked=n.size>r}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var jy={checkOverflow:Wy},Io={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function qy(n,e){return function(i={}){const s=Object.keys(i)[0],r=i[s];if(typeof r!="object"||r===null){Ut(e,i);return}if(n[s]===!0&&(n[s]={enabled:!0}),s==="navigation"&&n[s]&&n[s].enabled&&!n[s].prevEl&&!n[s].nextEl&&(n[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&n[s]&&n[s].enabled&&!n[s].el&&(n[s].auto=!0),!(s in n&&"enabled"in r)){Ut(e,i);return}typeof n[s]=="object"&&!("enabled"in n[s])&&(n[s].enabled=!0),n[s]||(n[s]={enabled:!1}),Ut(e,i)}}const oo={eventsEmitter:Hx,update:ey,translate:ay,transition:uy,slide:_y,loop:Sy,grabCursor:Ty,events:Ny,breakpoints:Uy,checkOverflow:jy,classes:Hy},lo={};class $t{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=Ut({},i),t&&!i.el&&(i.el=t);const s=bn();if(i.el&&typeof i.el=="string"&&s.querySelectorAll(i.el).length>1){const l=[];return s.querySelectorAll(i.el).forEach(c=>{const u=Ut({},i,{el:c});l.push(new $t(u))}),l}const r=this;r.__swiper__=!0,r.support=jd(),r.device=qd({userAgent:i.userAgent}),r.browser=$d(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(l=>{typeof l=="function"&&r.modules.indexOf(l)<0&&r.modules.push(l)});const o={};r.modules.forEach(l=>{l({params:i,swiper:r,extendParams:qy(i,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const a=Ut({},Io,o);return r.params=Ut({},a,lo,i),r.originalParams=Ut({},r.params),r.passedParams=Ut({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,s=_n(t,`.${i.slideClass}, swiper-slide`),r=Yr(s[0]);return Yr(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=_n(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),o=(i.maxTranslate()-s)*e+s;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);t.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:s,slides:r,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let u=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,f;for(let h=c+1;h<r.length;h+=1)r[h]&&!f&&(d+=Math.ceil(r[h].swiperSlideSize),u+=1,d>l&&(f=!0));for(let h=c-1;h>=0;h-=1)r[h]&&!f&&(d+=r[h].swiperSlideSize,u+=1,d>l&&(f=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(t?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&zr(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||s()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,s=i.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(s()):_n(i,s())[0])();return!o&&t.params.createElements&&(o=js("div",t.params.wrapperClass),i.append(o),_n(i,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Zn(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Zn(i,"direction")==="rtl"),wrongRTL:Zn(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(r=>{r.complete?zr(t,r):r.addEventListener("load",o=>{zr(t,o.target)})}),Ro(t),t.initialized=!0,Ro(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:s,el:r,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),Lx(i)),i.destroyed=!0),null}static extendDefaults(e){Ut(lo,e)}static get extendedDefaults(){return lo}static get defaults(){return Io}static installModule(e){$t.prototype.__modules__||($t.prototype.__modules__=[]);const t=$t.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>$t.installModule(t)),$t):($t.installModule(e),$t)}}Object.keys(oo).forEach(n=>{Object.keys(oo[n]).forEach(e=>{$t.prototype[e]=oo[n][e]})});$t.use([Gx,Vx]);const Kd=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ai(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"&&!n.__swiper__}function is(n,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]>"u"?n[i]=e[i]:Ai(e[i])&&Ai(n[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?n[i]=e[i]:is(n[i],e[i]):n[i]=e[i]})}function Zd(n={}){return n.navigation&&typeof n.navigation.nextEl>"u"&&typeof n.navigation.prevEl>"u"}function Jd(n={}){return n.pagination&&typeof n.pagination.el>"u"}function Qd(n={}){return n.scrollbar&&typeof n.scrollbar.el>"u"}function ef(n=""){const e=n.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return e.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}function $y(n=""){return n?n.includes("swiper-wrapper")?n:`swiper-wrapper ${n}`:"swiper-wrapper"}function Xy({swiper:n,slides:e,passedParams:t,changedParams:i,nextEl:s,prevEl:r,scrollbarEl:o,paginationEl:a}){const l=i.filter(v=>v!=="children"&&v!=="direction"&&v!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:f,virtual:h,thumbs:x}=n;let p,m,g,_,y,b,M,C;i.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&!t.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(p=!0),i.includes("controller")&&t.controller&&t.controller.control&&c.controller&&!c.controller.control&&(m=!0),i.includes("pagination")&&t.pagination&&(t.pagination.el||a)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(g=!0),i.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&f&&!f.el&&(_=!0),i.includes("navigation")&&t.navigation&&(t.navigation.prevEl||r)&&(t.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);const P=v=>{!n[v]||(n[v].destroy(),v==="navigation"?(n.isElement&&(n[v].prevEl.remove(),n[v].nextEl.remove()),c[v].prevEl=void 0,c[v].nextEl=void 0,n[v].prevEl=void 0,n[v].nextEl=void 0):(n.isElement&&n[v].el.remove(),c[v].el=void 0,n[v].el=void 0))};i.includes("loop")&&n.isElement&&(c.loop&&!t.loop?b=!0:!c.loop&&t.loop?M=!0:C=!0),l.forEach(v=>{if(Ai(c[v])&&Ai(t[v]))Object.assign(c[v],t[v]),(v==="navigation"||v==="pagination"||v==="scrollbar")&&"enabled"in t[v]&&!t[v].enabled&&P(v);else{const A=t[v];(A===!0||A===!1)&&(v==="navigation"||v==="pagination"||v==="scrollbar")?A===!1&&P(v):c[v]=t[v]}}),l.includes("controller")&&!m&&n.controller&&n.controller.control&&c.controller&&c.controller.control&&(n.controller.control=c.controller.control),i.includes("children")&&e&&h&&c.virtual.enabled?(h.slides=e,h.update(!0)):i.includes("virtual")&&h&&c.virtual.enabled&&(e&&(h.slides=e),h.update(!0)),i.includes("children")&&e&&c.loop&&(C=!0),p&&x.init()&&x.update(!0),m&&(n.controller.control=c.controller.control),g&&(n.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),n.el.appendChild(a)),a&&(c.pagination.el=a),u.init(),u.render(),u.update()),_&&(n.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),n.el.appendChild(o)),o&&(c.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),y&&(n.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),qs(s,n.navigation.arrowSvg),s.part.add("button-next"),n.el.appendChild(s)),(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-prev"),qs(r,n.navigation.arrowSvg),r.part.add("button-prev"),n.el.appendChild(r))),s&&(c.navigation.nextEl=s),r&&(c.navigation.prevEl=r),d.init(),d.update()),i.includes("allowSlideNext")&&(n.allowSlideNext=t.allowSlideNext),i.includes("allowSlidePrev")&&(n.allowSlidePrev=t.allowSlidePrev),i.includes("direction")&&n.changeDirection(t.direction,!1),(b||C)&&n.loopDestroy(),(M||C)&&n.loopCreate(),n.update()}function cu(n={},e=!0){const t={on:{}},i={},s={};is(t,Io),t._emitClasses=!0,t.init=!1;const r={},o=Kd.map(l=>l.replace(/_/,"")),a=Object.assign({},n);return Object.keys(a).forEach(l=>{typeof n[l]>"u"||(o.indexOf(l)>=0?Ai(n[l])?(t[l]={},s[l]={},is(t[l],n[l]),is(s[l],n[l])):(t[l]=n[l],s[l]=n[l]):l.search(/on[A-Z]/)===0&&typeof n[l]=="function"?e?i[`${l[2].toLowerCase()}${l.substr(3)}`]=n[l]:t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=n[l]:r[l]=n[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:s,rest:r,events:i}}function Yy({el:n,nextEl:e,prevEl:t,paginationEl:i,scrollbarEl:s,swiper:r},o){Zd(o)&&e&&t&&(r.params.navigation.nextEl=e,r.originalParams.navigation.nextEl=e,r.params.navigation.prevEl=t,r.originalParams.navigation.prevEl=t),Jd(o)&&i&&(r.params.pagination.el=i,r.originalParams.pagination.el=i),Qd(o)&&s&&(r.params.scrollbar.el=s,r.originalParams.scrollbar.el=s),r.init(n)}function Ky(n,e,t,i,s){const r=[];if(!e)return r;const o=l=>{r.indexOf(l)<0&&r.push(l)};if(t&&i){const l=i.map(s),c=t.map(s);l.join("")!==c.join("")&&o("children"),i.length!==t.length&&o("children")}return Kd.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in n&&l in e)if(Ai(n[l])&&Ai(e[l])){const c=Object.keys(n[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(d=>{n[l][d]!==e[l][d]&&o(l)}),u.forEach(d=>{n[l][d]!==e[l][d]&&o(l)}))}else n[l]!==e[l]&&o(l)}),r}const Zy=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.emit("_virtualUpdated"),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())};function co(n={},e,t){const i=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},r=(o,a)=>{!Array.isArray(o)||o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?r(l.children,a):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")||l.componentOptions&&l.componentOptions.tag==="SwiperSlide"?i.push(l):s[a]&&s[a].push(l)})};return Object.keys(n).forEach(o=>{if(typeof n[o]!="function")return;const a=n[o]();r(a,o)}),t.value=e.value,e.value=i,{slides:i,slots:s}}function Jy(n,e,t){if(!t)return null;const i=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},s=n.value.isHorizontal()?{[n.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:r,to:o}=t,a=n.value.params.loop?-e.length:0,l=n.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=r&&u<=o&&c.length<e.length&&c.push(e[i(u)]);return c.map(u=>{if(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=n,u.props.style=s,u.type)return Xt(u.type,{...u.props},u.children);if(u.componentOptions)return Xt(u.componentOptions.Ctor,{...u.props},u.componentOptions.children)})}const Qy={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopAddBlankSlides:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","_virtualUpdated","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(n,{slots:e,emit:t}){const{tag:i,wrapperTag:s}=n,r=Ve("swiper"),o=Ve(null),a=Ve(!1),l=Ve(!1),c=Ve(null),u=Ve(null),d=Ve(null),f={value:[]},h={value:[]},x=Ve(null),p=Ve(null),m=Ve(null),g=Ve(null),{params:_,passedParams:y}=cu(n,!1);co(e,f,h),d.value=y,h.value=f.value;const b=()=>{co(e,f,h),a.value=!0};_.onAny=(P,...v)=>{t(P,...v)},Object.assign(_.on,{_beforeBreakpoint:b,_containerClasses(P,v){r.value=v}});const M={..._};if(delete M.wrapperClass,u.value=new $t(M),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=f.value;const P={cache:!1,slides:f.value,renderExternal:v=>{o.value=v},renderExternalUpdate:!1};is(u.value.params.virtual,P),is(u.value.originalParams.virtual,P)}Ko(()=>{!l.value&&u.value&&(u.value.emitSlidesClasses(),l.value=!0);const{passedParams:P}=cu(n,!1),v=Ky(P,d.value,f.value,h.value,A=>A.props&&A.props.key);d.value=P,(v.length||a.value)&&u.value&&!u.value.destroyed&&Xy({swiper:u.value,slides:f.value,passedParams:P,changedParams:v,nextEl:x.value,prevEl:p.value,scrollbarEl:g.value,paginationEl:m.value}),a.value=!1}),Xo("swiper",u),Dr(o,()=>{qo(()=>{Zy(u.value)})}),ia(()=>{!c.value||(Yy({el:c.value,nextEl:x.value,prevEl:p.value,paginationEl:m.value,scrollbarEl:g.value,swiper:u.value},_),t("swiper",u.value))}),Zo(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function C(P){return _.virtual?Jy(u,P,o.value):(P.forEach((v,A)=>{v.props||(v.props={}),v.props.swiperRef=u,v.props.swiperSlideIndex=A}),P)}return()=>{const{slides:P,slots:v}=co(e,f,h);return Xt(i,{ref:c,class:ef(r.value)},[v["container-start"],Xt(s,{class:$y(_.wrapperClass)},[v["wrapper-start"],C(P),v["wrapper-end"]]),Zd(n)&&[Xt("div",{ref:p,class:"swiper-button-prev"}),Xt("div",{ref:x,class:"swiper-button-next"})],Qd(n)&&Xt("div",{ref:g,class:"swiper-scrollbar"}),Jd(n)&&Xt("div",{ref:m,class:"swiper-pagination"}),v["container-end"]])}}},eb={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(n,{slots:e}){let t=!1;const{swiperRef:i}=n,s=Ve(null),r=Ve("swiper-slide"),o=Ve(!1);function a(u,d,f){d===s.value&&(r.value=f)}ia(()=>{!i||!i.value||(i.value.on("_slideClass",a),t=!0)}),qu(()=>{t||!i||!i.value||(i.value.on("_slideClass",a),t=!0)}),Ko(()=>{!s.value||!i||!i.value||(typeof n.swiperSlideIndex<"u"&&(s.value.swiperSlideIndex=n.swiperSlideIndex),i.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide"))}),Zo(()=>{!i||!i.value||i.value.off("_slideClass",a)});const l=md(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0}));Xo("swiperSlide",l);const c=()=>{o.value=!0};return()=>Xt(n.tag,{class:ef(`${r.value}`),ref:s,"data-swiper-slide-index":typeof n.virtualIndex>"u"&&i&&i.value&&i.value.params.loop?n.swiperSlideIndex:n.virtualIndex,onLoadCapture:c},n.zoom?Xt("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof n.zoom=="number"?n.zoom:void 0},[e.default&&e.default(l.value),n.lazy&&!o.value&&Xt("div",{class:"swiper-lazy-preloader",onVnodeMounted:u=>{u.el&&(u.el.lazyPreloaderManaged=!0)}})]):[e.default&&e.default(l.value),n.lazy&&!o.value&&Xt("div",{class:"swiper-lazy-preloader",onVnodeMounted:u=>{u.el&&(u.el.lazyPreloaderManaged=!0)}})])}};function tf(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(s=>{if(!t[s]&&t.auto===!0){let r=_n(n.el,`.${i[s]}`)[0];r||(r=js("div",i[s]),r.className=i[s],n.el.append(r)),t[s]=r,e[s]=r}}),t}const uu='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function tb({swiper:n,extendParams:e,on:t,emit:i}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),n.navigation={nextEl:null,prevEl:null,arrowSvg:uu};function s(h){let x;return h&&typeof h=="string"&&n.isElement&&(x=n.el.querySelector(h)||n.hostEl.querySelector(h),x)?x:(h&&(typeof h=="string"&&(x=[...document.querySelectorAll(h)]),n.params.uniqueNavElements&&typeof h=="string"&&x&&x.length>1&&n.el.querySelectorAll(h).length===1?x=n.el.querySelector(h):x&&x.length===1&&(x=x[0])),h&&!x?h:x)}function r(h,x){const p=n.params.navigation;h=pt(h),h.forEach(m=>{m&&(m.classList[x?"add":"remove"](...p.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=x),n.params.watchOverflow&&n.enabled&&m.classList[n.isLocked?"add":"remove"](p.lockClass))})}function o(){const{nextEl:h,prevEl:x}=n.navigation;if(n.params.loop){r(x,!1),r(h,!1);return}r(x,n.isBeginning&&!n.params.rewind),r(h,n.isEnd&&!n.params.rewind)}function a(h){h.preventDefault(),!(n.isBeginning&&!n.params.loop&&!n.params.rewind)&&(n.slidePrev(),i("navigationPrev"))}function l(h){h.preventDefault(),!(n.isEnd&&!n.params.loop&&!n.params.rewind)&&(n.slideNext(),i("navigationNext"))}function c(){const h=n.params.navigation;if(n.params.navigation=tf(n,n.originalParams.navigation,n.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let x=s(h.nextEl),p=s(h.prevEl);Object.assign(n.navigation,{nextEl:x,prevEl:p}),x=pt(x),p=pt(p);const m=(g,_)=>{if(g){if(h.addIcons&&g.matches(".swiper-button-next,.swiper-button-prev")&&!g.querySelector("svg")){const y=document.createElement("div");qs(y,uu),g.appendChild(y.querySelector("svg")),y.remove()}g.addEventListener("click",_==="next"?l:a)}!n.enabled&&g&&g.classList.add(...h.lockClass.split(" "))};x.forEach(g=>m(g,"next")),p.forEach(g=>m(g,"prev"))}function u(){let{nextEl:h,prevEl:x}=n.navigation;h=pt(h),x=pt(x);const p=(m,g)=>{m.removeEventListener("click",g==="next"?l:a),m.classList.remove(...n.params.navigation.disabledClass.split(" "))};h.forEach(m=>p(m,"next")),x.forEach(m=>p(m,"prev"))}t("init",()=>{n.params.navigation.enabled===!1?f():(c(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{u()}),t("enable disable",()=>{let{nextEl:h,prevEl:x}=n.navigation;if(h=pt(h),x=pt(x),n.enabled){o();return}[...h,...x].filter(p=>!!p).forEach(p=>p.classList.add(n.params.navigation.lockClass))}),t("click",(h,x)=>{let{nextEl:p,prevEl:m}=n.navigation;p=pt(p),m=pt(m);const g=x.target;let _=m.includes(g)||p.includes(g);if(n.isElement&&!_){const y=x.path||x.composedPath&&x.composedPath();y&&(_=y.find(b=>p.includes(b)||m.includes(b)))}if(n.params.navigation.hideOnClick&&!_){if(n.pagination&&n.params.pagination&&n.params.pagination.clickable&&(n.pagination.el===g||n.pagination.el.contains(g)))return;let y;p.length?y=p[0].classList.contains(n.params.navigation.hiddenClass):m.length&&(y=m[0].classList.contains(n.params.navigation.hiddenClass)),i(y===!0?"navigationShow":"navigationHide"),[...p,...m].filter(b=>!!b).forEach(b=>b.classList.toggle(n.params.navigation.hiddenClass))}});const d=()=>{n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(" ")),c(),o()},f=()=>{n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(n.navigation,{enable:d,disable:f,update:o,init:c,destroy:u})}function ws(n=""){return`.${n.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function nb({swiper:n,extendParams:e,on:t,emit:i}){const s="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),n.pagination={el:null,bullets:[]};let r,o=0;function a(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function l(g,_){const{bulletActiveClass:y}=n.params.pagination;!g||(g=g[`${_==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${y}-${_}`),g=g[`${_==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${y}-${_}-${_}`)))}function c(g,_,y){if(g=g%y,_=_%y,_===g+1)return"next";if(_===g-1)return"previous"}function u(g){const _=g.target.closest(ws(n.params.pagination.bulletClass));if(!_)return;g.preventDefault();const y=Yr(_)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===y)return;const b=c(n.realIndex,y,n.slides.length);b==="next"?n.slideNext():b==="previous"?n.slidePrev():n.slideToLoop(y)}else n.slideTo(y)}function d(){const g=n.rtl,_=n.params.pagination;if(a())return;let y=n.pagination.el;y=pt(y);let b,M;const C=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,P=n.params.loop?Math.ceil(C/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(M=n.previousRealIndex||0,b=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex<"u"?(b=n.snapIndex,M=n.previousSnapIndex):(M=n.previousIndex||0,b=n.activeIndex||0),_.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const v=n.pagination.bullets;let A,L,N;if(_.dynamicBullets&&(r=Do(v[0],n.isHorizontal()?"width":"height",!0),y.forEach(X=>{X.style[n.isHorizontal()?"width":"height"]=`${r*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&M!==void 0&&(o+=b-(M||0),o>_.dynamicMainBullets-1?o=_.dynamicMainBullets-1:o<0&&(o=0)),A=Math.max(b-o,0),L=A+(Math.min(v.length,_.dynamicMainBullets)-1),N=(L+A)/2),v.forEach(X=>{const I=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${_.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();X.classList.remove(...I)}),y.length>1)v.forEach(X=>{const I=Yr(X);I===b?X.classList.add(..._.bulletActiveClass.split(" ")):n.isElement&&X.setAttribute("part","bullet"),_.dynamicBullets&&(I>=A&&I<=L&&X.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),I===A&&l(X,"prev"),I===L&&l(X,"next"))});else{const X=v[b];if(X&&X.classList.add(..._.bulletActiveClass.split(" ")),n.isElement&&v.forEach((I,R)=>{I.setAttribute("part",R===b?"bullet-active":"bullet")}),_.dynamicBullets){const I=v[A],R=v[L];for(let j=A;j<=L;j+=1)v[j]&&v[j].classList.add(...`${_.bulletActiveClass}-main`.split(" "));l(I,"prev"),l(R,"next")}}if(_.dynamicBullets){const X=Math.min(v.length,_.dynamicMainBullets+4),I=(r*X-r)/2-N*r,R=g?"right":"left";v.forEach(j=>{j.style[n.isHorizontal()?R:"top"]=`${I}px`})}}y.forEach((v,A)=>{if(_.type==="fraction"&&(v.querySelectorAll(ws(_.currentClass)).forEach(L=>{L.textContent=_.formatFractionCurrent(b+1)}),v.querySelectorAll(ws(_.totalClass)).forEach(L=>{L.textContent=_.formatFractionTotal(P)})),_.type==="progressbar"){let L;_.progressbarOpposite?L=n.isHorizontal()?"vertical":"horizontal":L=n.isHorizontal()?"horizontal":"vertical";const N=(b+1)/P;let X=1,I=1;L==="horizontal"?X=N:I=N,v.querySelectorAll(ws(_.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${X}) scaleY(${I})`,R.style.transitionDuration=`${n.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(qs(v,_.renderCustom(n,b+1,P)),A===0&&i("paginationRender",v)):(A===0&&i("paginationRender",v),i("paginationUpdate",v)),n.params.watchOverflow&&n.enabled&&v.classList[n.isLocked?"add":"remove"](_.lockClass)})}function f(){const g=n.params.pagination;if(a())return;const _=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let y=n.pagination.el;y=pt(y);let b="";if(g.type==="bullets"){let M=n.params.loop?Math.ceil(_/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&M>_&&(M=_);for(let C=0;C<M;C+=1)g.renderBullet?b+=g.renderBullet.call(n,C,g.bulletClass):b+=`<${g.bulletElement} ${n.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?b=g.renderFraction.call(n,g.currentClass,g.totalClass):b=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?b=g.renderProgressbar.call(n,g.progressbarFillClass):b=`<span class="${g.progressbarFillClass}"></span>`),n.pagination.bullets=[],y.forEach(M=>{g.type!=="custom"&&qs(M,b||""),g.type==="bullets"&&n.pagination.bullets.push(...M.querySelectorAll(ws(g.bulletClass)))}),g.type!=="custom"&&i("paginationRender",y[0])}function h(){n.params.pagination=tf(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const g=n.params.pagination;if(!g.el)return;let _;typeof g.el=="string"&&n.isElement&&(_=n.el.querySelector(g.el)),!_&&typeof g.el=="string"&&(_=[...document.querySelectorAll(g.el)]),_||(_=g.el),!(!_||_.length===0)&&(n.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...n.el.querySelectorAll(g.el)],_.length>1&&(_=_.find(y=>Wd(y,".swiper")[0]===n.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(n.pagination,{el:_}),_=pt(_),_.forEach(y=>{g.type==="bullets"&&g.clickable&&y.classList.add(...(g.clickableClass||"").split(" ")),y.classList.add(g.modifierClass+g.type),y.classList.add(n.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(y.classList.add(`${g.modifierClass}${g.type}-dynamic`),o=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&y.classList.add(g.progressbarOppositeClass),g.clickable&&y.addEventListener("click",u),n.enabled||y.classList.add(g.lockClass)}))}function x(){const g=n.params.pagination;if(a())return;let _=n.pagination.el;_&&(_=pt(_),_.forEach(y=>{y.classList.remove(g.hiddenClass),y.classList.remove(g.modifierClass+g.type),y.classList.remove(n.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(y.classList.remove(...(g.clickableClass||"").split(" ")),y.removeEventListener("click",u))})),n.pagination.bullets&&n.pagination.bullets.forEach(y=>y.classList.remove(...g.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const g=n.params.pagination;let{el:_}=n.pagination;_=pt(_),_.forEach(y=>{y.classList.remove(g.horizontalClass,g.verticalClass),y.classList.add(n.isHorizontal()?g.horizontalClass:g.verticalClass)})}),t("init",()=>{n.params.pagination.enabled===!1?m():(h(),f(),d())}),t("activeIndexChange",()=>{typeof n.snapIndex>"u"&&d()}),t("snapIndexChange",()=>{d()}),t("snapGridLengthChange",()=>{f(),d()}),t("destroy",()=>{x()}),t("enable disable",()=>{let{el:g}=n.pagination;g&&(g=pt(g),g.forEach(_=>_.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),t("lock unlock",()=>{d()}),t("click",(g,_)=>{const y=_.target,b=pt(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&b&&b.length>0&&!y.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&y===n.navigation.nextEl||n.navigation.prevEl&&y===n.navigation.prevEl))return;const M=b[0].classList.contains(n.params.pagination.hiddenClass);i(M===!0?"paginationShow":"paginationHide"),b.forEach(C=>C.classList.toggle(n.params.pagination.hiddenClass))}});const p=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:g}=n.pagination;g&&(g=pt(g),g.forEach(_=>_.classList.remove(n.params.pagination.paginationDisabledClass))),h(),f(),d()},m=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:g}=n.pagination;g&&(g=pt(g),g.forEach(_=>_.classList.add(n.params.pagination.paginationDisabledClass))),x()};Object.assign(n.pagination,{enable:p,disable:m,render:f,update:d,init:h,destroy:x})}function ib({swiper:n,extendParams:e,on:t,emit:i,params:s}){n.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,a=s&&s.autoplay?s.autoplay.delay:3e3,l=s&&s.autoplay?s.autoplay.delay:3e3,c,u=new Date().getTime(),d,f,h,x,p,m;function g(k){!n||n.destroyed||!n.wrapperEl||k.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",g),!(m||k.detail&&k.detail.bySwiperTouchMove)&&A())}const _=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?d=!0:d&&(l=c,d=!1);const k=n.autoplay.paused?c:u+l-new Date().getTime();n.autoplay.timeLeft=k,i("autoplayTimeLeft",k,k/a),o=requestAnimationFrame(()=>{_()})},y=()=>{let k;return n.virtual&&n.params.virtual.enabled?k=n.slides.find(ne=>ne.classList.contains("swiper-slide-active")):k=n.slides[n.activeIndex],k?parseInt(k.getAttribute("data-swiper-autoplay"),10):void 0},b=()=>{let k=n.params.autoplay.delay;const O=y();return!Number.isNaN(O)&&O>0&&(k=O),k},M=k=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(o),_();let O=k;typeof O>"u"&&(O=b(),a=O,l=O),c=O;const ne=n.params.speed,oe=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(ne,!0,!0),i("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,ne,!0,!0),i("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(ne,!0,!0),i("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,ne,!0,!0),i("autoplay")),n.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return O>0?(clearTimeout(r),r=setTimeout(()=>{oe()},O)):requestAnimationFrame(()=>{oe()}),O},C=()=>{u=new Date().getTime(),n.autoplay.running=!0,M(),i("autoplayStart")},P=()=>{n.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),i("autoplayStop")},v=(k,O)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(r),k||(p=!0);const ne=()=>{i("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",g):A()};if(n.autoplay.paused=!0,O){ne();return}c=(c||n.params.autoplay.delay)-(new Date().getTime()-u),!(n.isEnd&&c<0&&!n.params.loop)&&(c<0&&(c=0),ne())},A=()=>{n.isEnd&&c<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(u=new Date().getTime(),p?(p=!1,M(c)):M(),n.autoplay.paused=!1,i("autoplayResume"))},L=()=>{if(n.destroyed||!n.autoplay.running)return;const k=bn();k.visibilityState==="hidden"&&(p=!0,v(!0)),k.visibilityState==="visible"&&A()},N=k=>{k.pointerType==="mouse"&&(p=!0,m=!0,!(n.animating||n.autoplay.paused)&&v(!0))},X=k=>{k.pointerType==="mouse"&&(m=!1,n.autoplay.paused&&A())},I=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",N),n.el.addEventListener("pointerleave",X))},R=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",N),n.el.removeEventListener("pointerleave",X))},j=()=>{bn().addEventListener("visibilitychange",L)},te=()=>{bn().removeEventListener("visibilitychange",L)};t("init",()=>{n.params.autoplay.enabled&&(I(),j(),C())}),t("destroy",()=>{R(),te(),n.autoplay.running&&P()}),t("_freeModeStaticRelease",()=>{(h||p)&&A()}),t("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?P():v(!0,!0)}),t("beforeTransitionStart",(k,O,ne)=>{n.destroyed||!n.autoplay.running||(ne||!n.params.autoplay.disableOnInteraction?v(!0,!0):P())}),t("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){P();return}f=!0,h=!1,p=!1,x=setTimeout(()=>{p=!0,h=!0,v(!0)},200)}}),t("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!f)){if(clearTimeout(x),clearTimeout(r),n.params.autoplay.disableOnInteraction){h=!1,f=!1;return}h&&n.params.cssMode&&A(),h=!1,f=!1}}),t("slideChange",()=>{n.destroyed||!n.autoplay.running||n.autoplay.paused&&(c=b(),a=b())}),Object.assign(n.autoplay,{start:C,stop:P,pause:v,resume:A})}function sb(n){const{effect:e,swiper:t,on:i,setTranslate:s,setTransition:r,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=n;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),a&&a()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const d=o?o():{};Object.assign(t.params,d),Object.assign(t.originalParams,d)}),i("setTranslate _virtualUpdated",()=>{t.params.effect===e&&s()}),i("setTransition",(d,f)=>{t.params.effect===e&&r(f)}),i("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let u;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(s(),u=!1)}))})}function rb(n,e){const t=dl(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function du(n,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}${n?` swiper-slide-shadow-${n}`:""}`,s=dl(e);let r=s.querySelector(`.${i.split(" ").join(".")}`);return r||(r=js("div",i.split(" ")),s.append(r)),r}function ab({swiper:n,extendParams:e,on:t}){e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),sb({effect:"coverflow",swiper:n,on:t,setTranslate:()=>{const{width:r,height:o,slides:a,slidesSizesGrid:l}=n,c=n.params.coverflowEffect,u=n.isHorizontal(),d=n.translate,f=u?-d+r/2:-d+o/2,h=u?c.rotate:-c.rotate,x=c.depth,p=zx(n);for(let m=0,g=a.length;m<g;m+=1){const _=a[m],y=l[m],b=_.swiperSlideOffset,M=(f-b-y/2)/y,C=typeof c.modifier=="function"?c.modifier(M):M*c.modifier;let P=u?h*C:0,v=u?0:h*C,A=-x*Math.abs(C),L=c.stretch;typeof L=="string"&&L.indexOf("%")!==-1&&(L=parseFloat(c.stretch)/100*y);let N=u?0:L*C,X=u?L*C:0,I=1-(1-c.scale)*Math.abs(C);Math.abs(X)<.001&&(X=0),Math.abs(N)<.001&&(N=0),Math.abs(A)<.001&&(A=0),Math.abs(P)<.001&&(P=0),Math.abs(v)<.001&&(v=0),Math.abs(I)<.001&&(I=0);const R=`translate3d(${X}px,${N}px,${A}px)  rotateX(${p(v)}deg) rotateY(${p(P)}deg) scale(${I})`,j=rb(c,_);if(j.style.transform=R,_.style.zIndex=-Math.abs(Math.round(C))+1,c.slideShadows){let te=u?_.querySelector(".swiper-slide-shadow-left"):_.querySelector(".swiper-slide-shadow-top"),k=u?_.querySelector(".swiper-slide-shadow-right"):_.querySelector(".swiper-slide-shadow-bottom");te||(te=du("coverflow",_,u?"left":"top")),k||(k=du("coverflow",_,u?"right":"bottom")),te&&(te.style.opacity=C>0?C:0),k&&(k.style.opacity=-C>0?-C:0)}}},setTransition:r=>{n.slides.map(a=>dl(a)).forEach(a=>{a.style.transitionDuration=`${r}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{l.style.transitionDuration=`${r}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ob=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},lb={class:"relative min-h-screen overflow-hidden"},cb={class:"space-y-4"},ub=["onClick"],db={class:"hidden md:block fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-primary/10 to-secondary/10 backdrop-blur-md z-40 flex flex-col items-center justify-center border-r border-primary/20 transition-all duration-500 hover:w-80"},fb={class:"space-y-8"},hb=["onClick"],pb={class:"text-lg font-medium transition-all duration-300"},mb={key:0,class:"ml-auto w-2 h-2 rounded-full bg-primary animate-ping"},gb={key:0,class:"absolute left-2 top-8 w-0.5 h-10 bg-gradient-to-b from-gray-400 to-transparent transition-all duration-300 group-hover:from-primary/50"},vb={key:1,class:"fixed inset-0 flex items-center justify-center bg-secondary z-50"},_b={class:"relative"},xb={class:"mt-8 text-center"},yb={class:"mt-4 w-40 h-2 bg-white/50 rounded-full overflow-hidden"},bb={key:2,class:"relative"},Sb={id:"hero",class:"section relative"},Mb={class:"max-w-5xl mx-auto w-full"},wb={class:"mb-12 max-w-2xl mx-auto"},Tb={class:"relative w-full h-full overflow-hidden"},Eb=["src"],Cb={id:"info",class:"section bg-white/50"},Ab={class:"max-w-4xl mx-auto w-full"},Lb={class:"mt-12"},Pb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Db=["onClick"],Rb={class:"relative w-full h-64 overflow-hidden"},Ib=["src","alt"],Ob={class:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"},Fb={class:"text-white text-lg font-bold mb-1"},Nb={class:"text-white/80 text-sm"},zb={id:"timeline",class:"section relative overflow-hidden"},Bb={class:"max-w-3xl mx-auto w-full relative z-10"},Ub={class:"space-y-8"},kb={id:"wishes",class:"section bg-white/50"},Gb={class:"max-w-4xl mx-auto w-full"},Vb={class:"card mb-8"},Hb={class:"space-y-4"},Wb={class:"grid md:grid-cols-2 gap-4"},jb={class:"text-lg font-bold text-primary mb-2"},qb={class:"text-dark/80"},$b={id:"rsvp",class:"section"},Xb={class:"max-w-2xl mx-auto w-full"},Yb={class:"card"},Kb={class:"space-y-4"},Zb={class:"flex space-x-4"},Jb={class:"flex items-center space-x-2"},Qb={class:"flex items-center space-x-2"},eS=["src","alt"],tS={class:"text-white text-2xl font-bold mb-2"},nS={class:"text-white/80 text-lg"},iS={key:4,class:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"},sS={class:"bg-white rounded-2xl p-8 max-w-md text-center"},rS={key:5,class:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"},aS={class:"bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"},oS={class:"flex justify-between items-center mb-6"},lS={class:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"},cS={class:"relative"},uS=["src","alt"],dS={class:"absolute top-4 right-4"},fS=["onClick"],hS={class:"p-4"},pS={class:"flex justify-between items-center"},mS={class:"text-xl font-bold text-dark"},gS={class:"flex items-center space-x-2"},vS={class:"font-medium"},_S={class:"flex justify-end space-x-4"},xS={__name:"App",setup(n){const e=Ve(!0),t=Ve(0),i=Ve(!1),s=Ve(!1),r=Ve(0),o=Ve(!1),a=Ve(!1),l=Ve("hero"),c=Ve(["/img/1.jpg","/img/20260311221158_780_1.jpg","/img/20260311221159_781_1.jpg","/img/20260311221200_782_1.jpg","/img/20260311221201_783_1.jpg","/img/20260311221444_784_1.jpg","/img/20260311221445_785_1.jpg","/img/20260311221446_786_1.jpg","/img/20260311221447_787_1.jpg","/img/20260311222117_795_1.jpg","/img/55.jpg","/img/65e589d136ceac0b273846ba4d6b3638.jpg","/img/78cd8abbee5e4ad5b7916eb345c5fcb2.jpg","/img/8209980757b585cecdc8710a2552cb4c.jpg","/img/SGD4.jpg","/img/a8e351e2f210f0f53827deea3def6d70.jpg","/img/bd49cb9e3fc78944de1f440b22c57aa7.jpg","/img/udhgiuhguG.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311221448_788_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222103_789_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222105_790_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222107_791_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222110_793_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222114_794_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222119_796_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222121_797_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222124_798_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222127_799_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222130_801_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222221_803_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222224_804_1.jpg","/img/\u5FAE\u4FE1\u56FE\u7247_20260311222231_805_1.jpg"]),u=Ve([{src:"/img_party/0dc4dc5fc53eb2c3383b8da21718f68d.jpg",title:"\u7535\u73A9\u5927\u5385",description:"\u534E\u4E3D\u7684\u5165\u53E3\u901A\u9053\uFF0C\u8FCE\u63A5\u5404\u4F4D\u5BBE\u5BA2\u7684\u5230\u6765"},{src:"/img_party/22e7e5ba956d2f2f0992aaea14a8f8b8.jpg",title:"\u6237\u5916\u8349\u576A",description:"\u5C04\u7BAD&\u6237\u5916\u6E38\u620F E\u4EBA\u72C2\u559C\uFF01"},{src:"/img_party/a20e507cc2f44952fa90e3f6c9485c75.jpg",title:"\u61D2\u4EBA\u684C\u6E38",description:"Cissie\u6700\u7231\u7684\u72FC\u4EBA\u6740\uFF01\uFF01\uFF01"},{src:"/img_party/db74d7029a262b488c1eea2dd0ede979.jpg",title:"\u53F0\u7403\u533A\u57DF",description:"\u597D\u4E45\u6CA1\u6253\u53F0\u7403\u4E86"},{src:"/img_party/de03777c67acdd8acefd15d3d654eabf.jpg",title:"\u805A\u9910Party",description:"\u70E7\u70E4 \u62AB\u8428 \u86CB\u7CD5 \u8336\u70B9~"},{src:"/img_party/fbc660c9b1695ce6b9e829474f2d6f4d.jpg",title:"\u6211\u662F\u6B4C\u624B",description:"HAPPY BIRTHDAY TO YOU CISSIE!!!"}]),d=Ve([{id:"hero",label:"\u7167\u7247"},{id:"info",label:"\u6D3E\u5BF9\u4FE1\u606F"},{id:"timeline",label:"\u6D3B\u52A8\u65E5\u7A0B"},{id:"wishes",label:"\u795D\u798F\u7559\u8A00"},{id:"rsvp",label:"\u51FA\u5E2D\u786E\u8BA4"},{id:"export",label:"\u6570\u636E\u5BFC\u51FA"}]),f=Ve(!1),h=Ve([]),x=Ve(JSON.parse(localStorage.getItem("gameVotes"))||{}),p=Ve([{id:"game1",name:"\u4F60\u6765\u6211\u5F80",image:"/img_game/\u4F60\u6765\u6211\u5F80.png"},{id:"game2",name:"\u52A0\u5B57\u6E38\u620F",image:"/img_game/\u52A0\u5B57\u6E38\u620F.png"},{id:"game3",name:"\u5F00\u5173\u6E38\u620F",image:"/img_game/\u5F00\u5173\u6E38\u620F.png"},{id:"game4",name:"\u6293\u9E2D\u5B50",image:"/img_game/\u6293\u9E2D\u5B50.png"},{id:"game5",name:"\u771F\u771F\u5047\u5047",image:"/img_game/\u771F\u771F\u5047\u5047.png"},{id:"game6",name:"\u95F9\u949F\u70B8\u5F39",image:"/img_game/\u95F9\u949F\u70B8\u5F39.png"}]),m=Ve({name:"",content:""}),g=Ve(JSON.parse(localStorage.getItem("birthdayWishes"))||[{name:"\u5C0F\u660E",content:"\u795D\u4F60\u751F\u65E5\u5FEB\u4E50\uFF0C\u6C38\u8FDC\u5E74\u8F7B\u6F02\u4EAE\uFF01"},{name:"\u5C0F\u7EA2",content:"\u671F\u5F85\u53C2\u52A0\u4F60\u7684\u751F\u65E5\u6D3E\u5BF9\uFF0C\u4E00\u5B9A\u4F1A\u5F88\u5F00\u5FC3\uFF01"},{name:"\u5C0F\u674E",content:"\u613F\u4F60\u768423\u5C81\u5145\u6EE1\u60CA\u559C\u548C\u7F8E\u597D\uFF01"}]),_=Ve({name:"",attending:"yes",guests:"0",specialRequests:""}),y=Ve(JSON.parse(localStorage.getItem("birthdayRSVP"))||[]);let b,M,C,P=[];const v=Ve(null);ia(()=>{const U=setInterval(()=>{t.value+=5,t.value>=100&&(clearInterval(U),setTimeout(()=>{e.value=!1,A()},500))},100);document.addEventListener("touchstart",I,{once:!0}),document.addEventListener("click",I,{once:!0}),window.addEventListener("scroll",K),K()}),Jo(()=>{C&&C.dispose(),b&&b.clear(),window.removeEventListener("scroll",K)});function A(){if(!!v.value){b=new Ex,M=new Kt(75,window.innerWidth/window.innerHeight,.1,1e3),M.position.z=5,C=new kd({alpha:!0}),C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.value.appendChild(C.domElement);for(let U=0;U<50;U++)L();N(),window.addEventListener("resize",X)}}function L(){const U=new cl(.1+Math.random()*.3,32,32),B=new al({color:16739221,transparent:!0,opacity:.3+Math.random()*.5}),Q=new zn(U,B);Q.position.x=(Math.random()-.5)*10,Q.position.y=(Math.random()-.5)*10,Q.position.z=(Math.random()-.5)*10,Q.userData={velocity:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}},b.add(Q),P.push(Q)}function N(){requestAnimationFrame(N),P.forEach(U=>{U.position.x+=U.userData.velocity.x,U.position.y+=U.userData.velocity.y,U.position.z+=U.userData.velocity.z,Math.abs(U.position.x)>5&&(U.userData.velocity.x*=-1),Math.abs(U.position.y)>5&&(U.userData.velocity.y*=-1),Math.abs(U.position.z)>5&&(U.userData.velocity.z*=-1),U.rotation.x+=.01,U.rotation.y+=.01}),C.render(b,M)}function X(){!M||!C||(M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),C.setSize(window.innerWidth,window.innerHeight))}function I(){i.value=!0}function R(){i.value=!i.value}function j(){const B=`https://maps.google.com?q=${encodeURIComponent("\u5317\u4EAC\u5E02\u671D\u9633\u533A\u5EFA\u56FD\u8DEF88\u53F7\u661F\u5149\u5BB4\u4F1A\u5385")}`;window.open(B,"_blank")}function te(U){r.value=U,s.value=!0}function k(){s.value=!1}function O(){m.value.name&&m.value.content&&(g.value.unshift({...m.value,timestamp:new Date().toISOString()}),localStorage.setItem("birthdayWishes",JSON.stringify(g.value)),m.value={name:"",content:""})}function ne(){y.value.push({..._.value,timestamp:new Date().toISOString()}),localStorage.setItem("birthdayRSVP",JSON.stringify(y.value)),o.value=!0,_.value={name:"",attending:"yes",guests:"0",specialRequests:""}}function oe(){const U={wishes:g.value,rsvp:y.value,gameVotes:x.value,exportTime:new Date().toISOString()},B=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),Q=URL.createObjectURL(B),Se=document.createElement("a");Se.href=Q,Se.download=`birthday-party-data-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(Se),Se.click(),document.body.removeChild(Se),URL.revokeObjectURL(Q)}function q(U){const B=document.getElementById(U);B&&B.scrollIntoView({behavior:"smooth"})}function K(){const U=d.value.map(B=>B.id);for(const B of U){const Q=document.getElementById(B);if(Q){const Se=Q.getBoundingClientRect();if(Se.top<=100&&Se.bottom>=100){l.value=B;break}}}}function he(U){const B=h.value.indexOf(U);B>-1?h.value.splice(B,1):h.value.push(U)}function ge(){h.value.forEach(U=>{x.value[U]?x.value[U]++:x.value[U]=1}),localStorage.setItem("gameVotes",JSON.stringify(x.value)),f.value=!1,h.value=[]}function _e(U){return x.value[U]||0}return(U,B)=>(tt(),rt("div",lb,[V("div",{ref_key:"bubbleContainer",ref:v,class:"fixed inset-0 -z-10"},null,512),V("div",{class:"fixed top-4 right-4 z-50",onClick:R},[V("div",{class:Yn(["w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg cursor-pointer animate-spin-slow",{"animate-paused":!i.value}])},[...B[16]||(B[16]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 18V5l12-2v13M9 18c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"})],-1)])],2)]),V("div",{class:"md:hidden fixed top-4 left-4 z-50",onClick:B[0]||(B[0]=Q=>a.value=!a.value)},[...B[17]||(B[17]=[V("div",{class:"w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg cursor-pointer"},[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1)])]),a.value?(tt(),rt("div",{key:0,class:"fixed inset-0 bg-black/50 backdrop-blur-md z-40 flex items-center justify-center",onClick:B[2]||(B[2]=Q=>a.value=!1)},[V("div",{class:"bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full",onClick:B[1]||(B[1]=ar(()=>{},["stop"]))},[B[18]||(B[18]=V("h3",{class:"text-2xl font-elegant font-bold text-primary mb-6 text-center"},"\u76EE\u5F55",-1)),V("div",cb,[(tt(!0),rt(At,null,Di(d.value,Q=>(tt(),rt("div",{key:Q.id,class:"py-2"},[V("button",{onClick:Se=>{q(Q.id),a.value=!1},class:Yn(["w-full text-left px-4 py-3 rounded-lg transition-all duration-300",l.value===Q.id?"bg-primary/10 text-primary font-medium":"hover:bg-gray-100"])},sn(Q.label),11,ub)]))),128))])])])):Ri("",!0),V("div",db,[V("div",fb,[(tt(!0),rt(At,null,Di(d.value,(Q,Se)=>(tt(),rt("div",{key:Q.id,class:"relative group"},[V("button",{onClick:be=>q(Q.id),class:Yn(["flex items-center space-x-4 px-6 py-4 rounded-full transition-all duration-300 w-full max-w-xs",l.value===Q.id?"bg-primary/20 text-primary font-medium shadow-md transform scale-105":"text-dark/70 hover:bg-white/30 hover:shadow-sm hover:transform hover:scale-105"])},[V("div",{class:Yn(["w-4 h-4 rounded-full transition-all duration-300 transform",l.value===Q.id?"bg-primary scale-125 animate-pulse":"bg-gray-400 group-hover:bg-gray-500"])},null,2),V("span",pb,sn(Q.label),1),l.value===Q.id?(tt(),rt("div",mb)):Ri("",!0)],10,hb),Se<d.value.length-1?(tt(),rt("div",gb)):Ri("",!0)]))),128))])]),e.value?(tt(),rt("div",vb,[V("div",_b,[B[20]||(B[20]=gs('<div class="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center animate-pulse" data-v-efde33cf><div class="w-32 h-32 rounded-full bg-primary/40 flex items-center justify-center" data-v-efde33cf><div class="w-24 h-24 rounded-full bg-primary/60 flex items-center justify-center" data-v-efde33cf><div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center" data-v-efde33cf><span class="text-white font-elegant text-xl font-bold" data-v-efde33cf>23</span></div></div></div></div>',1)),V("div",xb,[B[19]||(B[19]=V("p",{class:"font-elegant text-2xl text-primary"},"\u52A0\u8F7D\u4E2D...",-1)),V("div",yb,[V("div",{class:"h-full bg-primary rounded-full transition-all duration-300",style:Fs({width:t.value+"%"})},null,4)])])])])):(tt(),rt("div",bb,[V("section",Sb,[V("div",Mb,[B[23]||(B[23]=V("div",{class:"text-center mb-12"},[V("h1",{class:"text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 animate-fade-in-up"},"23rd Birthday Party"),V("p",{class:"text-2xl md:text-3xl font-elegant text-dark/80 mb-8 animate-fade-in-up",style:{"animation-delay":"0.2s"}},"\u81F4\u6211\u4EB2\u7231\u7684\u670B\u53CB")],-1)),V("div",wb,[Pt(di(Qy),{modules:[di(ab),di(tb),di(nb),di(ib)],effect:"coverflow",grabCursor:"",centeredSlides:"",slidesPerView:"3",spaceBetween:"5",loop:"",coverflowEffect:{rotate:0,stretch:-120,depth:150,modifier:1.5,slideShadows:!0},autoplay:{delay:3e3,disableOnInteraction:!1},pagination:"",navigation:"",class:"w-full h-48 md:h-[300px]"},{default:go(()=>[(tt(!0),rt(At,null,Di(c.value,(Q,Se)=>(tt(),ud(di(eb),{key:Se,class:"relative rounded-2xl overflow-hidden shadow-xl"},{default:go(()=>[V("div",Tb,[V("img",{src:Q,alt:"Gallery image",class:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"},null,8,Eb),B[21]||(B[21]=V("div",{class:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"},null,-1)),B[22]||(B[22]=V("div",{class:"absolute inset-0 border-4 border-white/20 rounded-2xl"},null,-1))])]),_:2},1024))),128))]),_:1},8,["modules"])]),B[24]||(B[24]=gs('<div class="text-center" data-v-efde33cf><p class="text-xl text-dark/70 mb-12 animate-fade-in-up" style="animation-delay:0.4s;" data-v-efde33cf>\u6B22\u8FCE\u4F60\u53C2\u52A0\u6211\u7684\u751F\u65E5\u6D3E\u5BF9\uFF01</p><div class="animate-bounce-slow" data-v-efde33cf><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-efde33cf><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-efde33cf></path></svg></div></div>',1))])]),V("section",Cb,[V("div",Ab,[B[30]||(B[30]=V("h2",{class:"text-4xl font-bold text-primary mb-12 text-center"},"\u6D3E\u5BF9\u4FE1\u606F",-1)),V("div",{class:"grid md:grid-cols-2 gap-8"},[B[28]||(B[28]=V("div",{class:"card"},[V("h3",{class:"text-2xl font-bold text-dark mb-4"},"\u65F6\u95F4"),V("p",{class:"text-xl text-dark/80 mb-2"},"2026\u5E743\u670814\u65E5"),V("p",{class:"text-xl text-dark/80"},"11:00~17:00")],-1)),V("div",{class:"card"},[B[25]||(B[25]=V("h3",{class:"text-2xl font-bold text-dark mb-4"},"\u5730\u70B9",-1)),B[26]||(B[26]=V("p",{class:"text-xl text-dark/80 mb-2"},"\u749E\u749E\u5305\u4E0B\u7684\u5927\u522B\u5885\uFF01",-1)),B[27]||(B[27]=V("p",{class:"text-lg text-dark/70 mb-4"},"\u6DF1\u5733\u5E02\u9F99\u5C97\u533A\u65B9\u5757A\u522B\u5885",-1)),V("button",{class:"btn-primary w-full",onClick:j},"\u70B9\u51FB\u5BFC\u822A")])]),V("div",Lb,[B[29]||(B[29]=V("h3",{class:"text-2xl font-bold text-dark mb-6"},"\u573A\u5730\u5C55\u793A",-1)),V("div",Pb,[(tt(!0),rt(At,null,Di(u.value,(Q,Se)=>(tt(),rt("div",{key:Se,class:"cursor-pointer overflow-hidden rounded-xl shadow-lg group",onClick:be=>te(Se)},[V("div",Rb,[V("img",{src:Q.src,alt:Q.title,class:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"},null,8,Ib),V("div",Ob,[V("h4",Fb,sn(Q.title),1),V("p",Nb,sn(Q.description),1)])])],8,Db))),128))])])])]),V("section",zb,[B[35]||(B[35]=V("div",{class:"absolute top-0 left-0 w-full h-full pointer-events-none"},[V("div",{class:"absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-slow"}),V("div",{class:"absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse-slow",style:{"animation-delay":"1s"}}),V("div",{class:"absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse-slow",style:{"animation-delay":"0.5s"}})],-1)),V("div",Bb,[B[34]||(B[34]=V("h2",{class:"text-4xl font-bold text-primary mb-12 text-center"},"\u6D3E\u5BF9\u65E5\u7A0B",-1)),V("div",Ub,[B[32]||(B[32]=gs('<div class="timeline-item animate-fade-in-up" style="animation-delay:0.1s;" data-v-efde33cf><div class="flex items-start space-x-4" data-v-efde33cf><div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" data-v-efde33cf><span class="text-primary font-bold text-sm whitespace-nowrap" data-v-efde33cf>11:30-12:10</span></div><div class="flex-1" data-v-efde33cf><h3 class="text-xl font-bold text-dark mb-2" data-v-efde33cf>\u5165\u573A\u81EA\u7531\u4E0E\u5BFF\u661F\u62CD\u7167</h3><p class="text-dark/80" data-v-efde33cf>\u7B7E\u5230\u5165\u573A\uFF0C\u81EA\u7531\u4EA4\u6D41\uFF0C\u4E0E\u5BFF\u661F\u5408\u5F71\u7559\u5FF5</p></div></div></div><div class="timeline-item animate-fade-in-up" style="animation-delay:0.2s;" data-v-efde33cf><div class="flex items-start space-x-4" data-v-efde33cf><div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" data-v-efde33cf><span class="text-primary font-bold text-sm whitespace-nowrap" data-v-efde33cf>12:10-13:00</span></div><div class="flex-1" data-v-efde33cf><h3 class="text-xl font-bold text-dark mb-2" data-v-efde33cf>\u70E7\u70E4\u5403\u62AB\u8428\u804A\u5929</h3><p class="text-dark/80" data-v-efde33cf>\u4EAB\u7528\u7F8E\u5473\u7684\u70E7\u70E4\u548C\u62AB\u8428\uFF0C\u4E0E\u670B\u53CB\u4EEC\u6109\u5FEB\u804A\u5929</p></div></div></div><div class="timeline-item animate-fade-in-up" style="animation-delay:0.3s;" data-v-efde33cf><div class="flex items-start space-x-4" data-v-efde33cf><div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" data-v-efde33cf><span class="text-primary font-bold text-sm whitespace-nowrap" data-v-efde33cf>13:00-13:15</span></div><div class="flex-1" data-v-efde33cf><h3 class="text-xl font-bold text-dark mb-2" data-v-efde33cf>\u5207\u86CB\u7CD5\u5531\u751F\u65E5\u6B4C\u5408\u5F71\u7559\u604B</h3><p class="text-dark/80" data-v-efde33cf>\u4E00\u8D77\u4E3A\u5BFF\u661F\u5531\u751F\u65E5\u6B4C\uFF0C\u5207\u86CB\u7CD5\uFF0C\u62CD\u7167\u7559\u5FF5</p></div></div></div>',3)),V("div",{class:"timeline-item animate-fade-in-up cursor-pointer",style:{"animation-delay":"0.4s"},onClick:B[3]||(B[3]=Q=>f.value=!0)},[...B[31]||(B[31]=[gs('<div class="flex items-start space-x-4" data-v-efde33cf><div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" data-v-efde33cf><span class="text-primary font-bold text-sm whitespace-nowrap" data-v-efde33cf>13:15-14:30</span></div><div class="flex-1" data-v-efde33cf><div class="flex items-center justify-between" data-v-efde33cf><h3 class="text-xl font-bold text-dark mb-2" data-v-efde33cf>\u6237\u5916\u6E38\u620F\u6D3B\u52A8</h3><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-efde33cf><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-efde33cf></path></svg></div><p class="text-dark/80 mb-2" data-v-efde33cf>\u53C2\u4E0E\u6709\u8DA3\u7684\u6237\u5916\u6E38\u620F\uFF0C\u589E\u8FDB\u53CB\u8C0A</p><p class="text-primary text-sm font-medium" data-v-efde33cf>\u70B9\u51FB\u67E5\u770B\u6E38\u620F\u8BE6\u60C5 &amp; \u6295\u7968</p></div></div>',1)])]),B[33]||(B[33]=gs('<div class="timeline-item animate-fade-in-up" style="animation-delay:0.5s;" data-v-efde33cf><div class="flex items-start space-x-4" data-v-efde33cf><div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" data-v-efde33cf><span class="text-primary font-bold text-sm whitespace-nowrap" data-v-efde33cf>14:30-16:30</span></div><div class="flex-1" data-v-efde33cf><h3 class="text-xl font-bold text-dark mb-2" data-v-efde33cf>\u5BA4\u5185\u684C\u6E38</h3><p class="text-dark/80" data-v-efde33cf>\u5728\u5BA4\u5185\u8FDB\u884C\u5404\u79CD\u6709\u8DA3\u7684\u684C\u6E38\u6D3B\u52A8</p></div></div></div>',1))])])]),V("section",kb,[V("div",Gb,[B[37]||(B[37]=V("h2",{class:"text-4xl font-bold text-primary mb-12 text-center"},"\u795D\u798F\u7559\u8A00\u5899",-1)),V("div",Vb,[B[36]||(B[36]=V("h3",{class:"text-2xl font-bold text-dark mb-4"},"\u5199\u4E0B\u4F60\u7684\u795D\u798F",-1)),V("div",Hb,[ri(V("input",{"onUpdate:modelValue":B[4]||(B[4]=Q=>m.value.name=Q),type:"text",placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57",class:"w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"},null,512),[[rr,m.value.name]]),ri(V("textarea",{"onUpdate:modelValue":B[5]||(B[5]=Q=>m.value.content=Q),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u795D\u798F",class:"w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary h-32"},null,512),[[rr,m.value.content]]),V("button",{class:"btn-primary w-full",onClick:O},"\u53D1\u9001\u795D\u798F")])]),V("div",Wb,[(tt(!0),rt(At,null,Di(g.value,(Q,Se)=>(tt(),rt("div",{key:Se,class:"card animate-fade-in-up",style:Fs({animationDelay:Se*.1+"s"})},[V("h4",jb,sn(Q.name),1),V("p",qb,sn(Q.content),1)],4))),128))])])]),V("section",$b,[V("div",Xb,[B[46]||(B[46]=V("h2",{class:"text-4xl font-bold text-primary mb-12 text-center"},"\u51FA\u5E2D\u786E\u8BA4",-1)),V("div",Yb,[V("form",{onSubmit:ar(ne,["prevent"])},[V("div",Kb,[V("div",null,[B[38]||(B[38]=V("label",{class:"block text-dark font-medium mb-2"},"\u59D3\u540D",-1)),ri(V("input",{"onUpdate:modelValue":B[6]||(B[6]=Q=>_.value.name=Q),type:"text",class:"w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary",required:""},null,512),[[rr,_.value.name]])]),V("div",null,[B[41]||(B[41]=V("label",{class:"block text-dark font-medium mb-2"},"\u662F\u5426\u51FA\u5E2D",-1)),V("div",Zb,[V("label",Jb,[ri(V("input",{"onUpdate:modelValue":B[7]||(B[7]=Q=>_.value.attending=Q),type:"radio",value:"yes",class:"w-4 h-4 text-primary focus:ring-primary"},null,512),[[jl,_.value.attending]]),B[39]||(B[39]=V("span",null,"\u6B23\u7136\u524D\u5F80",-1))]),V("label",Qb,[ri(V("input",{"onUpdate:modelValue":B[8]||(B[8]=Q=>_.value.attending=Q),type:"radio",value:"no",class:"w-4 h-4 text-primary focus:ring-primary"},null,512),[[jl,_.value.attending]]),B[40]||(B[40]=V("span",null,"\u9057\u61BE\u9519\u8FC7",-1))])])]),V("div",null,[B[43]||(B[43]=V("label",{class:"block text-dark font-medium mb-2"},"\u968F\u884C\u4EBA\u6570",-1)),ri(V("select",{"onUpdate:modelValue":B[9]||(B[9]=Q=>_.value.guests=Q),class:"w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"},[...B[42]||(B[42]=[V("option",{value:"0"},"0\u4EBA",-1),V("option",{value:"1"},"1\u4EBA",-1),V("option",{value:"2"},"2\u4EBA",-1),V("option",{value:"3"},"3\u4EBA\u53CA\u4EE5\u4E0A",-1)])],512),[[yp,_.value.guests]])]),V("div",null,[B[44]||(B[44]=V("label",{class:"block text-dark font-medium mb-2"},"\u7279\u6B8A\u8981\u6C42/\u5FCC\u53E3\uFF08\u9009\u586B\uFF09",-1)),ri(V("textarea",{"onUpdate:modelValue":B[10]||(B[10]=Q=>_.value.specialRequests=Q),placeholder:"\u8BF7\u8F93\u5165\u7279\u6B8A\u8981\u6C42\u6216\u5FCC\u53E3",class:"w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary h-24"},null,512),[[rr,_.value.specialRequests]])]),B[45]||(B[45]=V("button",{type:"submit",class:"btn-primary w-full"},"\u63D0\u4EA4\u786E\u8BA4",-1))])],32)])])]),V("section",{id:"export",class:"section bg-white/50"},[V("div",{class:"max-w-2xl mx-auto w-full text-center"},[B[48]||(B[48]=V("h2",{class:"text-4xl font-bold text-primary mb-8"},"\u6570\u636E\u5BFC\u51FA",-1)),B[49]||(B[49]=V("p",{class:"text-lg text-dark/80 mb-8"},"\u5BFC\u51FA\u6240\u6709\u795D\u798F\u7559\u8A00\u548C\u51FA\u5E2D\u786E\u8BA4\u6570\u636E",-1)),V("button",{class:"btn-primary",onClick:oe},[...B[47]||(B[47]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),fd(" \u5BFC\u51FA\u6570\u636E ",-1)])])])])])),s.value?(tt(),rt("div",{key:3,class:"fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4",onClick:k},[V("div",{class:"relative max-w-4xl max-h-[80vh]",onClick:B[11]||(B[11]=ar(()=>{},["stop"]))},[V("img",{src:u.value[r.value].src,alt:u.value[r.value].title,class:"max-w-full max-h-[80vh] object-contain rounded-lg"},null,8,eS),V("button",{class:"absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white",onClick:k},[...B[50]||(B[50]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),V("div",{class:"mt-6 max-w-4xl w-full text-center",onClick:B[12]||(B[12]=ar(()=>{},["stop"]))},[V("h4",tS,sn(u.value[r.value].title),1),V("p",nS,sn(u.value[r.value].description),1)])])):Ri("",!0),o.value?(tt(),rt("div",iS,[V("div",sS,[B[51]||(B[51]=V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-16 w-16 text-primary mx-auto mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),B[52]||(B[52]=V("h3",{class:"text-2xl font-bold text-dark mb-2"},"\u611F\u8C22\u60A8\u7684\u786E\u8BA4\uFF01",-1)),B[53]||(B[53]=V("p",{class:"text-dark/80 mb-6"},"\u6211\u4EEC\u5DF2\u7ECF\u6536\u5230\u4E86\u60A8\u7684\u51FA\u5E2D\u4FE1\u606F",-1)),V("button",{class:"btn-primary",onClick:B[13]||(B[13]=Q=>o.value=!1)},"\u786E\u5B9A")])])):Ri("",!0),f.value?(tt(),rt("div",rS,[V("div",aS,[V("div",oS,[B[55]||(B[55]=V("h3",{class:"text-3xl font-bold text-primary"},"\u6237\u5916\u6E38\u620F\u6295\u7968",-1)),V("button",{class:"w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-dark hover:bg-gray-300 transition-all duration-300",onClick:B[14]||(B[14]=Q=>f.value=!1)},[...B[54]||(B[54]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),B[58]||(B[58]=V("p",{class:"text-dark/80 mb-6"},"\u8BF7\u9009\u62E9\u4F60\u559C\u6B22\u7684\u6237\u5916\u6E38\u620F\uFF08\u53EF\u591A\u9009\uFF09",-1)),V("div",lS,[(tt(!0),rt(At,null,Di(p.value,Q=>(tt(),rt("div",{key:Q.id,class:"border rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"},[V("div",cS,[V("img",{src:Q.image,alt:Q.name,class:"w-full h-48 object-cover object-top"},null,8,uS),V("div",dS,[V("button",{onClick:Se=>he(Q.id),class:Yn(["w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",h.value.includes(Q.id)?"bg-primary text-white":"bg-white/80 text-gray-500 hover:bg-white"])},[...B[56]||(B[56]=[V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)])],10,fS)])]),V("div",hS,[V("div",pS,[V("h4",mS,sn(Q.name),1),V("div",gS,[B[57]||(B[57]=V("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[V("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})],-1)),V("span",vS,sn(_e(Q.id)),1)])])])]))),128))]),V("div",_S,[V("button",{class:"px-6 py-3 rounded-full border border-gray-300 text-dark hover:bg-gray-100 transition-all duration-300",onClick:B[15]||(B[15]=Q=>f.value=!1)},"\u53D6\u6D88"),V("button",{class:"btn-primary",onClick:ge},"\u63D0\u4EA4\u6295\u7968")])])])):Ri("",!0)]))}},yS=ob(xS,[["__scopeId","data-v-efde33cf"]]);Tp(yS).mount("#app");
