/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const je={},Pi=[],$t=()=>{},rc=()=>!1,gs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ko=n=>n.startsWith("onUpdate:"),ut=Object.assign,Wo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Uu=Object.prototype.hasOwnProperty,qe=(n,e)=>Uu.call(n,e),Ce=Array.isArray,Ri=n=>yr(n)==="[object Map]",_s=n=>yr(n)==="[object Set]",ga=n=>yr(n)==="[object Date]",Re=n=>typeof n=="function",it=n=>typeof n=="string",cn=n=>typeof n=="symbol",Xe=n=>n!==null&&typeof n=="object",sc=n=>(Xe(n)||Re(n))&&Re(n.then)&&Re(n.catch),oc=Object.prototype.toString,yr=n=>oc.call(n),zu=n=>yr(n).slice(8,-1),ac=n=>yr(n)==="[object Object]",qo=n=>it(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,sr=Ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Bu=/-\w/g,Kt=xs(n=>n.replace(Bu,e=>e.slice(1).toUpperCase())),Gu=/\B([A-Z])/g,hi=xs(n=>n.replace(Gu,"-$1").toLowerCase()),lc=xs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Is=xs(n=>n?`on${lc(n)}`:""),on=(n,e)=>!Object.is(n,e),es=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},vs=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let _a;const Sr=()=>_a||(_a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xo(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=it(i)?Wu(i):Xo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(it(n)||Xe(n))return n}const Vu=/;(?![^(]*\))/g,Hu=/:([^]+)/,ku=/\/\*[^]*?\*\//g;function Wu(n){const e={};return n.replace(ku,"").split(Vu).forEach(t=>{if(t){const i=t.split(Hu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function jo(n){let e="";if(it(n))e=n;else if(Ce(n))for(let t=0;t<n.length;t++){const i=jo(n[t]);i&&(e+=i+" ")}else if(Xe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xu=Ho(qu);function uc(n){return!!n||n===""}function ju(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=oi(n[i],e[i]);return t}function oi(n,e){if(n===e)return!0;let t=ga(n),i=ga(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=cn(n),i=cn(e),t||i)return n===e;if(t=Ce(n),i=Ce(e),t||i)return t&&i?ju(n,e):!1;if(t=Xe(n),i=Xe(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!oi(n[a],e[a]))return!1}}return String(n)===String(e)}function Yu(n,e){return n.findIndex(t=>oi(t,e))}const fc=n=>!!(n&&n.__v_isRef===!0),$u=n=>it(n)?n:n==null?"":Ce(n)||Xe(n)&&(n.toString===oc||!Re(n.toString))?fc(n)?$u(n.value):JSON.stringify(n,hc,2):String(n),hc=(n,e)=>fc(e)?hc(n,e.value):Ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Fs(i,s)+" =>"]=r,t),{})}:_s(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fs(t))}:cn(e)?Fs(e):Xe(e)&&!Ce(e)&&!ac(e)?String(e):e,Fs=(n,e="")=>{var t;return cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Ku{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tt;try{return Tt=this,e()}finally{Tt=t}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Zu(){return Tt}let Ye;const Ns=new WeakSet;class dc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ns.has(this)&&(Ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xa(this),gc(this);const e=Ye,t=Zt;Ye=this,Zt=!0;try{return this.fn()}finally{_c(this),Ye=e,Zt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ko(e);this.deps=this.depsTail=void 0,xa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bo(this)&&this.run()}get dirty(){return bo(this)}}let pc=0,or,ar;function mc(n,e=!1){if(n.flags|=8,e){n.next=ar,ar=n;return}n.next=or,or=n}function Yo(){pc++}function $o(){if(--pc>0)return;if(ar){let e=ar;for(ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;or;){let e=or;for(or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function gc(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _c(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ko(i),Ju(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function bo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function xc(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hr)||(n.globalVersion=hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bo(n))))return;n.flags|=2;const e=n.dep,t=Ye,i=Zt;Ye=n,Zt=!0;try{gc(n);const r=n.fn(n._value);(e.version===0||on(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ye=t,Zt=i,_c(n),n.flags&=-3}}function Ko(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ko(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ju(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Zt=!0;const vc=[];function An(){vc.push(Zt),Zt=!1}function Cn(){const n=vc.pop();Zt=n===void 0?!0:n}function xa(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ye;Ye=void 0;try{e()}finally{Ye=t}}}let hr=0;class Qu{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ye||!Zt||Ye===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ye)t=this.activeLink=new Qu(Ye,this),Ye.deps?(t.prevDep=Ye.depsTail,Ye.depsTail.nextDep=t,Ye.depsTail=t):Ye.deps=Ye.depsTail=t,Mc(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ye.depsTail,t.nextDep=void 0,Ye.depsTail.nextDep=t,Ye.depsTail=t,Ye.deps===t&&(Ye.deps=i)}return t}trigger(e){this.version++,hr++,this.notify(e)}notify(e){Yo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$o()}}}function Mc(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mc(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wo=new WeakMap,ni=Symbol(""),To=Symbol(""),dr=Symbol("");function mt(n,e,t){if(Zt&&Ye){let i=wo.get(n);i||wo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Zo),r.map=i,r.key=t),r.track()}}function Sn(n,e,t,i,r,s){const a=wo.get(n);if(!a){hr++;return}const o=l=>{l&&l.trigger()};if(Yo(),e==="clear")a.forEach(o);else{const l=Ce(n),c=l&&qo(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===dr||!cn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(dr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ni)),Ri(n)&&o(a.get(To)));break;case"delete":l||(o(a.get(ni)),Ri(n)&&o(a.get(To)));break;case"set":Ri(n)&&o(a.get(ni));break}}$o()}function di(n){const e=We(n);return e===n?e:(mt(e,"iterate",dr),Vt(n)?e:e.map(Jt))}function Ms(n){return mt(n=We(n),"iterate",dr),n}function nn(n,e){return Ln(n)?ii(n)?Ui(Jt(e)):Ui(e):Jt(e)}const ef={__proto__:null,[Symbol.iterator](){return Os(this,Symbol.iterator,n=>nn(this,n))},concat(...n){return di(this).concat(...n.map(e=>Ce(e)?di(e):e))},entries(){return Os(this,"entries",n=>(n[1]=nn(this,n[1]),n))},every(n,e){return dn(this,"every",n,e,void 0,arguments)},filter(n,e){return dn(this,"filter",n,e,t=>t.map(i=>nn(this,i)),arguments)},find(n,e){return dn(this,"find",n,e,t=>nn(this,t),arguments)},findIndex(n,e){return dn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return dn(this,"findLast",n,e,t=>nn(this,t),arguments)},findLastIndex(n,e){return dn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return dn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Us(this,"includes",n)},indexOf(...n){return Us(this,"indexOf",n)},join(n){return di(this).join(n)},lastIndexOf(...n){return Us(this,"lastIndexOf",n)},map(n,e){return dn(this,"map",n,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...n){return ji(this,"push",n)},reduce(n,...e){return va(this,"reduce",n,e)},reduceRight(n,...e){return va(this,"reduceRight",n,e)},shift(){return ji(this,"shift")},some(n,e){return dn(this,"some",n,e,void 0,arguments)},splice(...n){return ji(this,"splice",n)},toReversed(){return di(this).toReversed()},toSorted(n){return di(this).toSorted(n)},toSpliced(...n){return di(this).toSpliced(...n)},unshift(...n){return ji(this,"unshift",n)},values(){return Os(this,"values",n=>nn(this,n))}};function Os(n,e,t){const i=Ms(n),r=i[e]();return i!==n&&!Vt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const tf=Array.prototype;function dn(n,e,t,i,r,s){const a=Ms(n),o=a!==n&&!Vt(n),l=a[e];if(l!==tf[e]){const f=l.apply(n,s);return o?Jt(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,nn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function va(n,e,t,i){const r=Ms(n),s=r!==n&&!Vt(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=nn(n,c)),t.call(this,c,nn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?nn(n,l):l}function Us(n,e,t){const i=We(n);mt(i,"iterate",dr);const r=i[e](...t);return(r===-1||r===!1)&&ta(t[0])?(t[0]=We(t[0]),i[e](...t)):r}function ji(n,e,t=[]){An(),Yo();const i=We(n)[e].apply(n,t);return $o(),Cn(),i}const nf=Ho("__proto__,__v_isRef,__isVue"),yc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cn));function rf(n){cn(n)||(n=String(n));const e=We(this);return mt(e,"has",n),e.hasOwnProperty(n)}class Sc{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?pf:Ec:s?Tc:wc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ce(e);if(!r){let l;if(a&&(l=ef[t]))return l;if(t==="hasOwnProperty")return rf}const o=Reflect.get(e,t,gt(e)?e:i);if((cn(t)?yc.has(t):nf(t))||(r||mt(e,"get",t),s))return o;if(gt(o)){const l=a&&qo(t)?o:o.value;return r&&Xe(l)?Ao(l):l}return Xe(o)?r?Ao(o):Qo(o):o}}class bc extends Sc{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ce(e)&&qo(t);if(!this._isShallow){const c=Ln(s);if(!Vt(i)&&!Ln(i)&&(s=We(s),i=We(i)),!a&&gt(s)&&!gt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:qe(e,t),l=Reflect.set(e,t,i,gt(e)?e:r);return e===We(r)&&(o?on(i,s)&&Sn(e,"set",t,i):Sn(e,"add",t,i)),l}deleteProperty(e,t){const i=qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Sn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!cn(t)||!yc.has(t))&&mt(e,"has",t),i}ownKeys(e){return mt(e,"iterate",Ce(e)?"length":ni),Reflect.ownKeys(e)}}class sf extends Sc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const of=new bc,af=new sf,lf=new bc(!0);const Eo=n=>n,Dr=n=>Reflect.getPrototypeOf(n);function cf(n,e,t){return function(...i){const r=this.__v_raw,s=We(r),a=Ri(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Eo:e?Ui:Jt;return!e&&mt(s,"iterate",l?To:ni),ut(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Pr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function uf(n,e){const t={get(r){const s=this.__v_raw,a=We(s),o=We(r);n||(on(r,o)&&mt(a,"get",r),mt(a,"get",o));const{has:l}=Dr(a),c=e?Eo:n?Ui:Jt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&mt(We(r),"iterate",ni),r.size},has(r){const s=this.__v_raw,a=We(s),o=We(r);return n||(on(r,o)&&mt(a,"has",r),mt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=We(o),c=e?Eo:n?Ui:Jt;return!n&&mt(l,"iterate",ni),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return ut(t,n?{add:Pr("add"),set:Pr("set"),delete:Pr("delete"),clear:Pr("clear")}:{add(r){const s=We(this),a=Dr(s),o=We(r),l=!e&&!Vt(r)&&!Ln(r)?o:r;return a.has.call(s,l)||on(r,l)&&a.has.call(s,r)||on(o,l)&&a.has.call(s,o)||(s.add(l),Sn(s,"add",l,l)),this},set(r,s){!e&&!Vt(s)&&!Ln(s)&&(s=We(s));const a=We(this),{has:o,get:l}=Dr(a);let c=o.call(a,r);c||(r=We(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?on(s,u)&&Sn(a,"set",r,s):Sn(a,"add",r,s),this},delete(r){const s=We(this),{has:a,get:o}=Dr(s);let l=a.call(s,r);l||(r=We(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Sn(s,"delete",r,void 0),c},clear(){const r=We(this),s=r.size!==0,a=r.clear();return s&&Sn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cf(r,n,e)}),t}function Jo(n,e){const t=uf(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(qe(t,r)&&r in i?t:i,r,s)}const ff={get:Jo(!1,!1)},hf={get:Jo(!1,!0)},df={get:Jo(!0,!1)};const wc=new WeakMap,Tc=new WeakMap,Ec=new WeakMap,pf=new WeakMap;function mf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gf(n){return n.__v_skip||!Object.isExtensible(n)?0:mf(zu(n))}function Qo(n){return Ln(n)?n:ea(n,!1,of,ff,wc)}function _f(n){return ea(n,!1,lf,hf,Tc)}function Ao(n){return ea(n,!0,af,df,Ec)}function ea(n,e,t,i,r){if(!Xe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=gf(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function ii(n){return Ln(n)?ii(n.__v_raw):!!(n&&n.__v_isReactive)}function Ln(n){return!!(n&&n.__v_isReadonly)}function Vt(n){return!!(n&&n.__v_isShallow)}function ta(n){return n?!!n.__v_raw:!1}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function xf(n){return!qe(n,"__v_skip")&&Object.isExtensible(n)&&cc(n,"__v_skip",!0),n}const Jt=n=>Xe(n)?Qo(n):n,Ui=n=>Xe(n)?Ao(n):n;function gt(n){return n?n.__v_isRef===!0:!1}function p0(n){return vf(n,!1)}function vf(n,e){return gt(n)?n:new Mf(n,e)}class Mf{constructor(e,t){this.dep=new Zo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:We(e),this._value=t?e:Jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Vt(e)||Ln(e);e=i?e:We(e),on(e,t)&&(this._rawValue=e,this._value=i?e:Jt(e),this.dep.trigger())}}function yf(n){return gt(n)?n.value:n}const Sf={get:(n,e,t)=>e==="__v_raw"?n:yf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ac(n){return ii(n)?n:new Proxy(n,Sf)}class bf{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ye!==this)return mc(this,!0),!0}get value(){const e=this.dep.track();return xc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wf(n,e,t=!1){let i,r;return Re(n)?i=n:(i=n.get,r=n.set),new bf(i,r,t)}const Rr={},as=new WeakMap;let Kn;function Tf(n,e=!1,t=Kn){if(t){let i=as.get(t);i||as.set(t,i=[]),i.push(n)}}function Ef(n,e,t=je){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:Vt(y)||r===!1||r===0?bn(y,1):bn(y);let u,f,h,m,x=!1,p=!1;if(gt(n)?(f=()=>n.value,x=Vt(n)):ii(n)?(f=()=>c(n),x=!0):Ce(n)?(p=!0,x=n.some(y=>ii(y)||Vt(y)),f=()=>n.map(y=>{if(gt(y))return y.value;if(ii(y))return c(y);if(Re(y))return l?l(y,2):y()})):Re(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){An();try{h()}finally{Cn()}}const y=Kn;Kn=u;try{return l?l(n,3,[m]):n(m)}finally{Kn=y}}:f=$t,e&&r){const y=f,E=r===!0?1/0:r;f=()=>bn(y(),E)}const d=Zu(),M=()=>{u.stop(),d&&d.active&&Wo(d.effects,u)};if(s&&e){const y=e;e=(...E)=>{y(...E),M()}}let T=p?new Array(n.length).fill(Rr):Rr;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const E=u.run();if(r||x||(p?E.some((P,F)=>on(P,T[F])):on(E,T))){h&&h();const P=Kn;Kn=u;try{const F=[E,T===Rr?void 0:p&&T[0]===Rr?[]:T,m];T=E,l?l(e,3,F):e(...F)}finally{Kn=P}}}else u.run()};return o&&o(b),u=new dc(f),u.scheduler=a?()=>a(b,!1):b,m=y=>Tf(y,!1,u),h=u.onStop=()=>{const y=as.get(u);if(y){if(l)l(y,4);else for(const E of y)E();as.delete(u)}},e?i?b(!0):T=u.run():a?a(b.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function bn(n,e=1/0,t){if(e<=0||!Xe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,gt(n))bn(n.value,e,t);else if(Ce(n))for(let i=0;i<n.length;i++)bn(n[i],e,t);else if(_s(n)||Ri(n))n.forEach(i=>{bn(i,e,t)});else if(ac(n)){for(const i in n)bn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(n,e,t,i){try{return i?n(...i):n()}catch(r){ys(r,e,t)}}function un(n,e,t,i){if(Re(n)){const r=br(n,e,t,i);return r&&sc(r)&&r.catch(s=>{ys(s,e,t)}),r}if(Ce(n)){const r=[];for(let s=0;s<n.length;s++)r.push(un(n[s],e,t,i));return r}}function ys(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||je;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){An(),br(s,null,10,[n,l,c]),Cn();return}}Af(n,t,r,i,a)}function Af(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const St=[];let en=-1;const Ii=[];let Nn=null,Ci=0;const Cc=Promise.resolve();let ls=null;function Lc(n){const e=ls||Cc;return n?e.then(this?n.bind(this):n):e}function Cf(n){let e=en+1,t=St.length;for(;e<t;){const i=e+t>>>1,r=St[i],s=pr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function na(n){if(!(n.flags&1)){const e=pr(n),t=St[St.length-1];!t||!(n.flags&2)&&e>=pr(t)?St.push(n):St.splice(Cf(e),0,n),n.flags|=1,Dc()}}function Dc(){ls||(ls=Cc.then(Rc))}function Lf(n){Ce(n)?Ii.push(...n):Nn&&n.id===-1?Nn.splice(Ci+1,0,n):n.flags&1||(Ii.push(n),n.flags|=1),Dc()}function Ma(n,e,t=en+1){for(;t<St.length;t++){const i=St[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;St.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pc(n){if(Ii.length){const e=[...new Set(Ii)].sort((t,i)=>pr(t)-pr(i));if(Ii.length=0,Nn){Nn.push(...e);return}for(Nn=e,Ci=0;Ci<Nn.length;Ci++){const t=Nn[Ci];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Nn=null,Ci=0}}const pr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rc(n){const e=$t;try{for(en=0;en<St.length;en++){const t=St[en];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),br(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;en<St.length;en++){const t=St[en];t&&(t.flags&=-2)}en=-1,St.length=0,Pc(),ls=null,(St.length||Ii.length)&&Rc()}}let Gt=null,Ic=null;function cs(n){const e=Gt;return Gt=n,Ic=n&&n.type.__scopeId||null,e}function Df(n,e=Gt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&hs(-1);const s=cs(e);let a;try{a=n(...r)}finally{cs(s),i._d&&hs(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function m0(n,e){if(Gt===null)return n;const t=Ts(Gt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=je]=e[r];s&&(Re(s)&&(s={mounted:s,updated:s}),s.deep&&bn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function qn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(An(),un(l,t,8,[n.el,o,n,e]),Cn())}}function Pf(n,e){if(bt){let t=bt.provides;const i=bt.parent&&bt.parent.provides;i===t&&(t=bt.provides=Object.create(i)),t[n]=e}}function ts(n,e,t=!1){const i=Fh();if(i||Fi){let r=Fi?Fi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Re(e)?e.call(i&&i.proxy):e}}const Rf=Symbol.for("v-scx"),If=()=>ts(Rf);function zs(n,e,t){return Fc(n,e,t)}function Fc(n,e,t=je){const{immediate:i,deep:r,flush:s,once:a}=t,o=ut({},t),l=e&&i||!e&&s!=="post";let c;if(gr){if(s==="sync"){const m=If();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=$t,m.resume=$t,m.pause=$t,m}}const u=bt;o.call=(m,x,p)=>un(m,u,x,p);let f=!1;s==="post"?o.scheduler=m=>{wt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():na(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Ef(n,e,o);return gr&&(c?c.push(h):l&&h()),h}function Ff(n,e,t){const i=this.proxy,r=it(n)?n.includes(".")?Nc(i,n):()=>i[n]:n.bind(i,i);let s;Re(e)?s=e:(s=e.handler,t=e);const a=wr(this),o=Fc(r,s.bind(i),t);return a(),o}function Nc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Nf=Symbol("_vte"),Of=n=>n.__isTeleport,Uf=Symbol("_leaveCb");function ia(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ia(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Oc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ya(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const us=new WeakMap;function lr(n,e,t,i,r=!1){if(Ce(n)){n.forEach((p,d)=>lr(p,e&&(Ce(e)?e[d]:e),t,i,r));return}if(cr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ts(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===je?o.refs={}:o.refs,f=o.setupState,h=We(f),m=f===je?rc:p=>ya(u,p)?!1:qe(h,p),x=(p,d)=>!(d&&ya(u,d));if(c!=null&&c!==l){if(Sa(e),it(c))u[c]=null,m(c)&&(f[c]=null);else if(gt(c)){const p=e;x(c,p.k)&&(c.value=null),p.k&&(u[p.k]=null)}}if(Re(l))br(l,o,12,[a,u]);else{const p=it(l),d=gt(l);if(p||d){const M=()=>{if(n.f){const T=p?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)Ce(T)&&Wo(T,s);else if(Ce(T))T.includes(s)||T.push(s);else if(p)u[l]=[s],m(l)&&(f[l]=u[l]);else{const b=[s];x(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else p?(u[l]=a,m(l)&&(f[l]=a)):d&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const T=()=>{M(),us.delete(n)};T.id=-1,us.set(n,T),wt(T,t)}else Sa(n),M()}}}function Sa(n){const e=us.get(n);e&&(e.flags|=8,us.delete(n))}Sr().requestIdleCallback;Sr().cancelIdleCallback;const cr=n=>!!n.type.__asyncLoader,Uc=n=>n.type.__isKeepAlive;function zf(n,e){zc(n,"a",e)}function Bf(n,e){zc(n,"da",e)}function zc(n,e,t=bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ss(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Uc(r.parent.vnode)&&Gf(i,e,t,r),r=r.parent}}function Gf(n,e,t,i){const r=Ss(e,n,i,!0);Bc(()=>{Wo(i[e],r)},t)}function Ss(n,e,t=bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{An();const o=wr(t),l=un(e,t,n,a);return o(),Cn(),l});return i?r.unshift(s):r.push(s),s}}const Dn=n=>(e,t=bt)=>{(!gr||n==="sp")&&Ss(n,(...i)=>e(...i),t)},Vf=Dn("bm"),Hf=Dn("m"),kf=Dn("bu"),Wf=Dn("u"),qf=Dn("bum"),Bc=Dn("um"),Xf=Dn("sp"),jf=Dn("rtg"),Yf=Dn("rtc");function $f(n,e=bt){Ss("ec",n,e)}const Kf=Symbol.for("v-ndc");function g0(n,e,t,i){let r;const s=t&&t[i],a=Ce(n);if(a||it(n)){const o=a&&ii(n);let l=!1,c=!1;o&&(l=!Vt(n),c=Ln(n),n=Ms(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ui(Jt(n[u])):Jt(n[u]):n[u],u,void 0,s&&s[u])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Xe(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const Co=n=>n?su(n)?Ts(n):Co(n.parent):null,ur=ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Co(n.parent),$root:n=>Co(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ra(n),$forceUpdate:n=>n.f||(n.f=()=>{na(n.update)}),$nextTick:n=>n.n||(n.n=Lc.bind(n.proxy)),$watch:n=>Ff.bind(n)}),Bs=(n,e)=>n!==je&&!n.__isScriptSetup&&qe(n,e),Zf={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Bs(i,e))return a[e]=1,i[e];if(r!==je&&qe(r,e))return a[e]=2,r[e];if(qe(s,e))return a[e]=3,s[e];if(t!==je&&qe(t,e))return a[e]=4,t[e];Lo&&(a[e]=0)}}const c=ur[e];let u,f;if(c)return e==="$attrs"&&mt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==je&&qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Bs(r,e)?(r[e]=t,!0):i!==je&&qe(i,e)?(i[e]=t,!0):qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==je&&o[0]!=="$"&&qe(n,o)||Bs(e,o)||qe(s,o)||qe(i,o)||qe(ur,o)||qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ba(n){return Ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Lo=!0;function Jf(n){const e=ra(n),t=n.proxy,i=n.ctx;Lo=!1,e.beforeCreate&&wa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:p,deactivated:d,beforeDestroy:M,beforeUnmount:T,destroyed:b,unmounted:y,render:E,renderTracked:P,renderTriggered:F,errorCaptured:v,serverPrefetch:C,expose:I,inheritAttrs:ee,components:ue,directives:B,filters:N}=e;if(c&&Qf(c,i,null),a)for(const te in a){const G=a[te];Re(G)&&(i[te]=G.bind(t))}if(r){const te=r.call(t,t);Xe(te)&&(n.data=Qo(te))}if(Lo=!0,s)for(const te in s){const G=s[te],ce=Re(G)?G.bind(t,t):Re(G.get)?G.get.bind(t,t):$t,re=!Re(G)&&Re(G.set)?G.set.bind(t):$t,q=Gh({get:ce,set:re});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>q.value,set:H=>q.value=H})}if(o)for(const te in o)Gc(o[te],i,t,te);if(l){const te=Re(l)?l.call(t):l;Reflect.ownKeys(te).forEach(G=>{Pf(G,te[G])})}u&&wa(u,n,"c");function ne(te,G){Ce(G)?G.forEach(ce=>te(ce.bind(t))):G&&te(G.bind(t))}if(ne(Vf,f),ne(Hf,h),ne(kf,m),ne(Wf,x),ne(zf,p),ne(Bf,d),ne($f,v),ne(Yf,P),ne(jf,F),ne(qf,T),ne(Bc,y),ne(Xf,C),Ce(I))if(I.length){const te=n.exposed||(n.exposed={});I.forEach(G=>{Object.defineProperty(te,G,{get:()=>t[G],set:ce=>t[G]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===$t&&(n.render=E),ee!=null&&(n.inheritAttrs=ee),ue&&(n.components=ue),B&&(n.directives=B),C&&Oc(n)}function Qf(n,e,t=$t){Ce(n)&&(n=Do(n));for(const i in n){const r=n[i];let s;Xe(r)?"default"in r?s=ts(r.from||i,r.default,!0):s=ts(r.from||i):s=ts(r),gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function wa(n,e,t){un(Ce(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gc(n,e,t,i){let r=i.includes(".")?Nc(t,i):()=>t[i];if(it(n)){const s=e[n];Re(s)&&zs(r,s)}else if(Re(n))zs(r,n.bind(t));else if(Xe(n))if(Ce(n))n.forEach(s=>Gc(s,e,t,i));else{const s=Re(n.handler)?n.handler.bind(t):e[n.handler];Re(s)&&zs(r,s,n)}}function ra(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>fs(l,c,a,!0)),fs(l,e,a)),Xe(e)&&s.set(e,l),l}function fs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&fs(n,s,t,!0),r&&r.forEach(a=>fs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=eh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const eh={data:Ta,props:Ea,emits:Ea,methods:nr,computed:nr,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:nr,directives:nr,watch:nh,provide:Ta,inject:th};function Ta(n,e){return e?n?function(){return ut(Re(n)?n.call(this,this):n,Re(e)?e.call(this,this):e)}:e:n}function th(n,e){return nr(Do(n),Do(e))}function Do(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function vt(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?ut(Object.create(null),n,e):e}function Ea(n,e){return n?Ce(n)&&Ce(e)?[...new Set([...n,...e])]:ut(Object.create(null),ba(n),ba(e!=null?e:{})):e}function nh(n,e){if(!n)return e;if(!e)return n;const t=ut(Object.create(null),n);for(const i in e)t[i]=vt(n[i],e[i]);return t}function Vc(){return{app:null,config:{isNativeTag:rc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ih=0;function rh(n,e){return function(i,r=null){Re(i)||(i=ut({},i)),r!=null&&!Xe(r)&&(r=null);const s=Vc(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:ih++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vh,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Re(u.install)?(a.add(u),u.install(c,...f)):Re(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Et(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,Ts(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(un(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Fi;Fi=c;try{return u()}finally{Fi=f}}};return c}}let Fi=null;const sh=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kt(e)}Modifiers`]||n[`${hi(e)}Modifiers`];function oh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||je;let r=t;const s=e.startsWith("update:"),a=s&&sh(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>it(u)?u.trim():u)),a.number&&(r=t.map(vs)));let o,l=i[o=Is(e)]||i[o=Is(Kt(e))];!l&&s&&(l=i[o=Is(hi(e))]),l&&un(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(c,n,6,r)}}const ah=new WeakMap;function Hc(n,e,t=!1){const i=t?ah:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Re(n)){const l=c=>{const u=Hc(c,e,!0);u&&(o=!0,ut(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Xe(n)&&i.set(n,null),null):(Ce(s)?s.forEach(l=>a[l]=null):ut(a,s),Xe(n)&&i.set(n,a),a)}function bs(n,e){return!n||!gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(n,e[0].toLowerCase()+e.slice(1))||qe(n,hi(e))||qe(n,e))}function Gs(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:x,inheritAttrs:p}=n,d=cs(n);let M,T;try{if(t.shapeFlag&4){const y=r||i,E=y;M=rn(c.call(E,y,u,f,m,h,x)),T=o}else{const y=e;M=rn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:lh(o)}}catch(y){fr.length=0,ys(y,n,1),M=Et(Bn)}let b=M;if(T&&p!==!1){const y=Object.keys(T),{shapeFlag:E}=b;y.length&&E&7&&(s&&y.some(ko)&&(T=ch(T,s)),b=zi(b,T,!1,!0))}return t.dirs&&(b=zi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&ia(b,t.transition),M=b,cs(d),M}const lh=n=>{let e;for(const t in n)(t==="class"||t==="style"||gs(t))&&((e||(e={}))[t]=n[t]);return e},ch=(n,e)=>{const t={};for(const i in n)(!ko(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function uh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Aa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(kc(a,i,h)&&!bs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Aa(i,a,c):!0:!!a;return!1}function Aa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(kc(e,n,s)&&!bs(t,s))return!0}return!1}function kc(n,e,t){const i=n[t],r=e[t];return t==="style"&&Xe(i)&&Xe(r)?!oi(i,r):i!==r}function fh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wc={},qc=()=>Object.create(Wc),Xc=n=>Object.getPrototypeOf(n)===Wc;function hh(n,e,t,i=!1){const r={},s=qc();n.propsDefaults=Object.create(null),jc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:_f(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function dh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=We(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(bs(n.emitsOptions,h))continue;const m=e[h];if(l)if(qe(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Kt(h);r[x]=Po(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{jc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!qe(e,f)&&((u=hi(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Po(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!qe(e,f)&&!0)&&(delete s[f],c=!0)}c&&Sn(n.attrs,"set","")}function jc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(sr(l))continue;const c=e[l];let u;r&&qe(r,u=Kt(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:bs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=We(t),c=o||je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Po(r,l,f,c[f],n,!qe(c,f))}}return a}function Po(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Re(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=wr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===hi(t))&&(i=!0))}return i}const ph=new WeakMap;function Yc(n,e,t=!1){const i=t?ph:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Re(n)){const u=f=>{l=!0;const[h,m]=Yc(f,e,!0);ut(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Xe(n)&&i.set(n,Pi),Pi;if(Ce(s))for(let u=0;u<s.length;u++){const f=Kt(s[u]);Ca(f)&&(a[f]=je)}else if(s)for(const u in s){const f=Kt(u);if(Ca(f)){const h=s[u],m=a[f]=Ce(h)||Re(h)?{type:h}:ut({},h),x=m.type;let p=!1,d=!0;if(Ce(x))for(let M=0;M<x.length;++M){const T=x[M],b=Re(T)&&T.name;if(b==="Boolean"){p=!0;break}else b==="String"&&(d=!1)}else p=Re(x)&&x.name==="Boolean";m[0]=p,m[1]=d,(p||qe(m,"default"))&&o.push(f)}}const c=[a,o];return Xe(n)&&i.set(n,c),c}function Ca(n){return n[0]!=="$"&&!sr(n)}const sa=n=>n==="_"||n==="_ctx"||n==="$stable",oa=n=>Ce(n)?n.map(rn):[rn(n)],mh=(n,e,t)=>{if(e._n)return e;const i=Df((...r)=>oa(e(...r)),t);return i._c=!1,i},$c=(n,e,t)=>{const i=n._ctx;for(const r in n){if(sa(r))continue;const s=n[r];if(Re(s))e[r]=mh(r,s,i);else if(s!=null){const a=oa(s);e[r]=()=>a}}},Kc=(n,e)=>{const t=oa(e);n.slots.default=()=>t},Zc=(n,e,t)=>{for(const i in e)(t||!sa(i))&&(n[i]=e[i])},gh=(n,e,t)=>{const i=n.slots=qc();if(n.vnode.shapeFlag&32){const r=e._;r?(Zc(i,e,t),t&&cc(i,"_",r,!0)):$c(e,i)}else e&&Kc(n,e)},_h=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Zc(r,e,t):(s=!e.$stable,$c(e,r)),a=e}else e&&(Kc(n,e),a={default:1});if(s)for(const o in r)!sa(o)&&a[o]==null&&delete r[o]};function xh(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Sr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const wt=bh;function vh(n){return Mh(n)}function Mh(n,e){xh();const t=Sr();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=$t,insertStaticContent:x}=n,p=(S,A,z,Q=null,Z=null,$=null,se=void 0,fe=null,ae=!!A.dynamicChildren)=>{if(S===A)return;S&&!Yi(S,A)&&(Q=Fe(S),H(S,Z,$,!0),S=null),A.patchFlag===-2&&(ae=!1,A.dynamicChildren=null);const{type:_,ref:g,shapeFlag:L}=A;switch(_){case ws:d(S,A,z,Q);break;case Bn:M(S,A,z,Q);break;case ns:S==null&&T(A,z,Q,se);break;case Mn:ue(S,A,z,Q,Z,$,se,fe,ae);break;default:L&1?E(S,A,z,Q,Z,$,se,fe,ae):L&6?B(S,A,z,Q,Z,$,se,fe,ae):(L&64||L&128)&&_.process(S,A,z,Q,Z,$,se,fe,ae,xe)}g!=null&&Z?lr(g,S&&S.ref,$,A||S,!A):g==null&&S&&S.ref!=null&&lr(S.ref,null,$,S,!0)},d=(S,A,z,Q)=>{if(S==null)i(A.el=o(A.children),z,Q);else{const Z=A.el=S.el;A.children!==S.children&&c(Z,A.children)}},M=(S,A,z,Q)=>{S==null?i(A.el=l(A.children||""),z,Q):A.el=S.el},T=(S,A,z,Q)=>{[S.el,S.anchor]=x(S.children,A,z,Q,S.el,S.anchor)},b=({el:S,anchor:A},z,Q)=>{let Z;for(;S&&S!==A;)Z=h(S),i(S,z,Q),S=Z;i(A,z,Q)},y=({el:S,anchor:A})=>{let z;for(;S&&S!==A;)z=h(S),r(S),S=z;r(A)},E=(S,A,z,Q,Z,$,se,fe,ae)=>{if(A.type==="svg"?se="svg":A.type==="math"&&(se="mathml"),S==null)P(A,z,Q,Z,$,se,fe,ae);else{const _=S.el&&S.el._isVueCE?S.el:null;try{_&&_._beginPatch(),C(S,A,Z,$,se,fe,ae)}finally{_&&_._endPatch()}}},P=(S,A,z,Q,Z,$,se,fe)=>{let ae,_;const{props:g,shapeFlag:L,transition:U,dirs:k}=S;if(ae=S.el=a(S.type,$,g&&g.is,g),L&8?u(ae,S.children):L&16&&v(S.children,ae,null,Q,Z,Vs(S,$),se,fe),k&&qn(S,null,Q,"created"),F(ae,S,S.scopeId,se,Q),g){for(const _e in g)_e!=="value"&&!sr(_e)&&s(ae,_e,null,g[_e],$,Q);"value"in g&&s(ae,"value",null,g.value,$),(_=g.onVnodeBeforeMount)&&Qt(_,Q,S)}k&&qn(S,null,Q,"beforeMount");const ie=yh(Z,U);ie&&U.beforeEnter(ae),i(ae,A,z),((_=g&&g.onVnodeMounted)||ie||k)&&wt(()=>{_&&Qt(_,Q,S),ie&&U.enter(ae),k&&qn(S,null,Q,"mounted")},Z)},F=(S,A,z,Q,Z)=>{if(z&&m(S,z),Q)for(let $=0;$<Q.length;$++)m(S,Q[$]);if(Z){let $=Z.subTree;if(A===$||tu($.type)&&($.ssContent===A||$.ssFallback===A)){const se=Z.vnode;F(S,se,se.scopeId,se.slotScopeIds,Z.parent)}}},v=(S,A,z,Q,Z,$,se,fe,ae=0)=>{for(let _=ae;_<S.length;_++){const g=S[_]=fe?yn(S[_]):rn(S[_]);p(null,g,A,z,Q,Z,$,se,fe)}},C=(S,A,z,Q,Z,$,se)=>{const fe=A.el=S.el;let{patchFlag:ae,dynamicChildren:_,dirs:g}=A;ae|=S.patchFlag&16;const L=S.props||je,U=A.props||je;let k;if(z&&Xn(z,!1),(k=U.onVnodeBeforeUpdate)&&Qt(k,z,A,S),g&&qn(A,S,z,"beforeUpdate"),z&&Xn(z,!0),(L.innerHTML&&U.innerHTML==null||L.textContent&&U.textContent==null)&&u(fe,""),_?I(S.dynamicChildren,_,fe,z,Q,Vs(A,Z),$):se||G(S,A,fe,null,z,Q,Vs(A,Z),$,!1),ae>0){if(ae&16)ee(fe,L,U,z,Z);else if(ae&2&&L.class!==U.class&&s(fe,"class",null,U.class,Z),ae&4&&s(fe,"style",L.style,U.style,Z),ae&8){const ie=A.dynamicProps;for(let _e=0;_e<ie.length;_e++){const oe=ie[_e],W=L[oe],ve=U[oe];(ve!==W||oe==="value")&&s(fe,oe,W,ve,Z,z)}}ae&1&&S.children!==A.children&&u(fe,A.children)}else!se&&_==null&&ee(fe,L,U,z,Z);((k=U.onVnodeUpdated)||g)&&wt(()=>{k&&Qt(k,z,A,S),g&&qn(A,S,z,"updated")},Q)},I=(S,A,z,Q,Z,$,se)=>{for(let fe=0;fe<A.length;fe++){const ae=S[fe],_=A[fe],g=ae.el&&(ae.type===Mn||!Yi(ae,_)||ae.shapeFlag&198)?f(ae.el):z;p(ae,_,g,null,Q,Z,$,se,!0)}},ee=(S,A,z,Q,Z)=>{if(A!==z){if(A!==je)for(const $ in A)!sr($)&&!($ in z)&&s(S,$,A[$],null,Z,Q);for(const $ in z){if(sr($))continue;const se=z[$],fe=A[$];se!==fe&&$!=="value"&&s(S,$,fe,se,Z,Q)}"value"in z&&s(S,"value",A.value,z.value,Z)}},ue=(S,A,z,Q,Z,$,se,fe,ae)=>{const _=A.el=S?S.el:o(""),g=A.anchor=S?S.anchor:o("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:k}=A;k&&(fe=fe?fe.concat(k):k),S==null?(i(_,z,Q),i(g,z,Q),v(A.children||[],z,g,Z,$,se,fe,ae)):L>0&&L&64&&U&&S.dynamicChildren&&S.dynamicChildren.length===U.length?(I(S.dynamicChildren,U,z,Z,$,se,fe),(A.key!=null||Z&&A===Z.subTree)&&Jc(S,A,!0)):G(S,A,z,g,Z,$,se,fe,ae)},B=(S,A,z,Q,Z,$,se,fe,ae)=>{A.slotScopeIds=fe,S==null?A.shapeFlag&512?Z.ctx.activate(A,z,Q,se,ae):N(A,z,Q,Z,$,se,ae):J(S,A,ae)},N=(S,A,z,Q,Z,$,se)=>{const fe=S.component=Ih(S,Q,Z);if(Uc(S)&&(fe.ctx.renderer=xe),Nh(fe,!1,se),fe.asyncDep){if(Z&&Z.registerDep(fe,ne,se),!S.el){const ae=fe.subTree=Et(Bn);M(null,ae,A,z),S.placeholder=ae.el}}else ne(fe,S,A,z,Z,$,se)},J=(S,A,z)=>{const Q=A.component=S.component;if(uh(S,A,z))if(Q.asyncDep&&!Q.asyncResolved){te(Q,A,z);return}else Q.next=A,Q.update();else A.el=S.el,Q.vnode=A},ne=(S,A,z,Q,Z,$,se)=>{const fe=()=>{if(S.isMounted){let{next:L,bu:U,u:k,parent:ie,vnode:_e}=S;{const ge=Qc(S);if(ge){L&&(L.el=_e.el,te(S,L,se)),ge.asyncDep.then(()=>{wt(()=>{S.isUnmounted||_()},Z)});return}}let oe=L,W;Xn(S,!1),L?(L.el=_e.el,te(S,L,se)):L=_e,U&&es(U),(W=L.props&&L.props.onVnodeBeforeUpdate)&&Qt(W,ie,L,_e),Xn(S,!0);const ve=Gs(S),Se=S.subTree;S.subTree=ve,p(Se,ve,f(Se.el),Fe(Se),S,Z,$),L.el=ve.el,oe===null&&fh(S,ve.el),k&&wt(k,Z),(W=L.props&&L.props.onVnodeUpdated)&&wt(()=>Qt(W,ie,L,_e),Z)}else{let L;const{el:U,props:k}=A,{bm:ie,m:_e,parent:oe,root:W,type:ve}=S,Se=cr(A);if(Xn(S,!1),ie&&es(ie),!Se&&(L=k&&k.onVnodeBeforeMount)&&Qt(L,oe,A),Xn(S,!0),U&&Pe){const ge=()=>{S.subTree=Gs(S),Pe(U,S.subTree,S,Z,null)};Se&&ve.__asyncHydrate?ve.__asyncHydrate(U,S,ge):ge()}else{W.ce&&W.ce._hasShadowRoot()&&W.ce._injectChildStyle(ve,S.parent?S.parent.type:void 0);const ge=S.subTree=Gs(S);p(null,ge,z,Q,S,Z,$),A.el=ge.el}if(_e&&wt(_e,Z),!Se&&(L=k&&k.onVnodeMounted)){const ge=A;wt(()=>Qt(L,oe,ge),Z)}(A.shapeFlag&256||oe&&cr(oe.vnode)&&oe.vnode.shapeFlag&256)&&S.a&&wt(S.a,Z),S.isMounted=!0,A=z=Q=null}};S.scope.on();const ae=S.effect=new dc(fe);S.scope.off();const _=S.update=ae.run.bind(ae),g=S.job=ae.runIfDirty.bind(ae);g.i=S,g.id=S.uid,ae.scheduler=()=>na(g),Xn(S,!0),_()},te=(S,A,z)=>{A.component=S;const Q=S.vnode.props;S.vnode=A,S.next=null,dh(S,A.props,Q,z),_h(S,A.children,z),An(),Ma(S),Cn()},G=(S,A,z,Q,Z,$,se,fe,ae=!1)=>{const _=S&&S.children,g=S?S.shapeFlag:0,L=A.children,{patchFlag:U,shapeFlag:k}=A;if(U>0){if(U&128){re(_,L,z,Q,Z,$,se,fe,ae);return}else if(U&256){ce(_,L,z,Q,Z,$,se,fe,ae);return}}k&8?(g&16&&Y(_,Z,$),L!==_&&u(z,L)):g&16?k&16?re(_,L,z,Q,Z,$,se,fe,ae):Y(_,Z,$,!0):(g&8&&u(z,""),k&16&&v(L,z,Q,Z,$,se,fe,ae))},ce=(S,A,z,Q,Z,$,se,fe,ae)=>{S=S||Pi,A=A||Pi;const _=S.length,g=A.length,L=Math.min(_,g);let U;for(U=0;U<L;U++){const k=A[U]=ae?yn(A[U]):rn(A[U]);p(S[U],k,z,null,Z,$,se,fe,ae)}_>g?Y(S,Z,$,!0,!1,L):v(A,z,Q,Z,$,se,fe,ae,L)},re=(S,A,z,Q,Z,$,se,fe,ae)=>{let _=0;const g=A.length;let L=S.length-1,U=g-1;for(;_<=L&&_<=U;){const k=S[_],ie=A[_]=ae?yn(A[_]):rn(A[_]);if(Yi(k,ie))p(k,ie,z,null,Z,$,se,fe,ae);else break;_++}for(;_<=L&&_<=U;){const k=S[L],ie=A[U]=ae?yn(A[U]):rn(A[U]);if(Yi(k,ie))p(k,ie,z,null,Z,$,se,fe,ae);else break;L--,U--}if(_>L){if(_<=U){const k=U+1,ie=k<g?A[k].el:Q;for(;_<=U;)p(null,A[_]=ae?yn(A[_]):rn(A[_]),z,ie,Z,$,se,fe,ae),_++}}else if(_>U)for(;_<=L;)H(S[_],Z,$,!0),_++;else{const k=_,ie=_,_e=new Map;for(_=ie;_<=U;_++){const Le=A[_]=ae?yn(A[_]):rn(A[_]);Le.key!=null&&_e.set(Le.key,_)}let oe,W=0;const ve=U-ie+1;let Se=!1,ge=0;const be=new Array(ve);for(_=0;_<ve;_++)be[_]=0;for(_=k;_<=L;_++){const Le=S[_];if(W>=ve){H(Le,Z,$,!0);continue}let Ue;if(Le.key!=null)Ue=_e.get(Le.key);else for(oe=ie;oe<=U;oe++)if(be[oe-ie]===0&&Yi(Le,A[oe])){Ue=oe;break}Ue===void 0?H(Le,Z,$,!0):(be[Ue-ie]=_+1,Ue>=ge?ge=Ue:Se=!0,p(Le,A[Ue],z,null,Z,$,se,fe,ae),W++)}const we=Se?Sh(be):Pi;for(oe=we.length-1,_=ve-1;_>=0;_--){const Le=ie+_,Ue=A[Le],Qe=A[Le+1],D=Le+1<g?Qe.el||eu(Qe):Q;be[_]===0?p(null,Ue,z,D,Z,$,se,fe,ae):Se&&(oe<0||_!==we[oe]?q(Ue,z,D,2):oe--)}}},q=(S,A,z,Q,Z=null)=>{const{el:$,type:se,transition:fe,children:ae,shapeFlag:_}=S;if(_&6){q(S.component.subTree,A,z,Q);return}if(_&128){S.suspense.move(A,z,Q);return}if(_&64){se.move(S,A,z,xe);return}if(se===Mn){i($,A,z);for(let L=0;L<ae.length;L++)q(ae[L],A,z,Q);i(S.anchor,A,z);return}if(se===ns){b(S,A,z);return}if(Q!==2&&_&1&&fe)if(Q===0)fe.beforeEnter($),i($,A,z),wt(()=>fe.enter($),Z);else{const{leave:L,delayLeave:U,afterLeave:k}=fe,ie=()=>{S.ctx.isUnmounted?r($):i($,A,z)},_e=()=>{$._isLeaving&&$[Uf](!0),L($,()=>{ie(),k&&k()})};U?U($,ie,_e):_e()}else i($,A,z)},H=(S,A,z,Q=!1,Z=!1)=>{const{type:$,props:se,ref:fe,children:ae,dynamicChildren:_,shapeFlag:g,patchFlag:L,dirs:U,cacheIndex:k}=S;if(L===-2&&(Z=!1),fe!=null&&(An(),lr(fe,null,z,S,!0),Cn()),k!=null&&(A.renderCache[k]=void 0),g&256){A.ctx.deactivate(S);return}const ie=g&1&&U,_e=!cr(S);let oe;if(_e&&(oe=se&&se.onVnodeBeforeUnmount)&&Qt(oe,A,S),g&6)me(S.component,z,Q);else{if(g&128){S.suspense.unmount(z,Q);return}ie&&qn(S,null,A,"beforeUnmount"),g&64?S.type.remove(S,A,z,xe,Q):_&&!_.hasOnce&&($!==Mn||L>0&&L&64)?Y(_,A,z,!1,!0):($===Mn&&L&384||!Z&&g&16)&&Y(ae,A,z),Q&&de(S)}(_e&&(oe=se&&se.onVnodeUnmounted)||ie)&&wt(()=>{oe&&Qt(oe,A,S),ie&&qn(S,null,A,"unmounted")},z)},de=S=>{const{type:A,el:z,anchor:Q,transition:Z}=S;if(A===Mn){he(z,Q);return}if(A===ns){y(S);return}const $=()=>{r(z),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(S.shapeFlag&1&&Z&&!Z.persisted){const{leave:se,delayLeave:fe}=Z,ae=()=>se(z,$);fe?fe(S.el,$,ae):ae()}else $()},he=(S,A)=>{let z;for(;S!==A;)z=h(S),r(S),S=z;r(A)},me=(S,A,z)=>{const{bum:Q,scope:Z,job:$,subTree:se,um:fe,m:ae,a:_}=S;La(ae),La(_),Q&&es(Q),Z.stop(),$&&($.flags|=8,H(se,S,A,z)),fe&&wt(fe,A),wt(()=>{S.isUnmounted=!0},A)},Y=(S,A,z,Q=!1,Z=!1,$=0)=>{for(let se=$;se<S.length;se++)H(S[se],A,z,Q,Z)},Fe=S=>{if(S.shapeFlag&6)return Fe(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const A=h(S.anchor||S.el),z=A&&A[Nf];return z?h(z):A};let ye=!1;const Ae=(S,A,z)=>{let Q;S==null?A._vnode&&(H(A._vnode,null,null,!0),Q=A._vnode.component):p(A._vnode||null,S,A,null,null,null,z),A._vnode=S,ye||(ye=!0,Ma(Q),Pc(),ye=!1)},xe={p,um:H,m:q,r:de,mt:N,mc:v,pc:G,pbc:I,n:Fe,o:n};let Ve,Pe;return e&&([Ve,Pe]=e(xe)),{render:Ae,hydrate:Ve,createApp:rh(Ae,Ve)}}function Vs({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Jc(n,e,t=!1){const i=n.children,r=e.children;if(Ce(i)&&Ce(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=yn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Jc(a,o)),o.type===ws&&(o.patchFlag===-1&&(o=r[s]=yn(o)),o.el=a.el),o.type===Bn&&!o.el&&(o.el=a.el)}}function Sh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Qc(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qc(e)}function La(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function eu(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?eu(e.subTree):null}const tu=n=>n.__isSuspense;function bh(n,e){e&&e.pendingBranch?Ce(n)?e.effects.push(...n):e.effects.push(n):Lf(n)}const Mn=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),fr=[];let It=null;function wh(n=!1){fr.push(It=n?null:[])}function Th(){fr.pop(),It=fr[fr.length-1]||null}let mr=1;function hs(n,e=!1){mr+=n,n<0&&It&&e&&(It.hasOnce=!0)}function nu(n){return n.dynamicChildren=mr>0?It||Pi:null,Th(),mr>0&&It&&It.push(n),n}function _0(n,e,t,i,r,s){return nu(ru(n,e,t,i,r,s,!0))}function Eh(n,e,t,i,r){return nu(Et(n,e,t,i,r,!0))}function ds(n){return n?n.__v_isVNode===!0:!1}function Yi(n,e){return n.type===e.type&&n.key===e.key}const iu=({key:n})=>n!=null?n:null,is=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?it(n)||gt(n)||Re(n)?{i:Gt,r:n,k:e,f:!!t}:n:null);function ru(n,e=null,t=null,i=0,r=null,s=n===Mn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&iu(e),ref:e&&is(e),scopeId:Ic,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gt};return o?(aa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=it(t)?8:16),mr>0&&!a&&It&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&It.push(l),l}const Et=Ah;function Ah(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Kf)&&(n=Bn),ds(n)){const o=zi(n,e,!0);return t&&aa(o,t),mr>0&&!s&&It&&(o.shapeFlag&6?It[It.indexOf(n)]=o:It.push(o)),o.patchFlag=-2,o}if(Bh(n)&&(n=n.__vccOpts),e){e=Ch(e);let{class:o,style:l}=e;o&&!it(o)&&(e.class=jo(o)),Xe(l)&&(ta(l)&&!Ce(l)&&(l=ut({},l)),e.style=Xo(l))}const a=it(n)?1:tu(n)?128:Of(n)?64:Xe(n)?4:Re(n)?2:0;return ru(n,e,t,i,r,a,s,!0)}function Ch(n){return n?ta(n)||Xc(n)?ut({},n):n:null}function zi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Dh(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&iu(c),ref:e&&e.ref?t&&s?Ce(s)?s.concat(is(e)):[s,is(e)]:is(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zi(n.ssContent),ssFallback:n.ssFallback&&zi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ia(u,l.clone(u)),u}function Lh(n=" ",e=0){return Et(ws,null,n,e)}function x0(n,e){const t=Et(ns,null,n);return t.staticCount=e,t}function v0(n="",e=!1){return e?(wh(),Eh(Bn,null,n)):Et(Bn,null,n)}function rn(n){return n==null||typeof n=="boolean"?Et(Bn):Ce(n)?Et(Mn,null,n.slice()):ds(n)?yn(n):Et(ws,null,String(n))}function yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zi(n)}function aa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ce(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),aa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xc(e)?e._ctx=Gt:r===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[Lh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=jo([e.class,i.class]));else if(r==="style")e.style=Xo([e.style,i.style]);else if(gs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ce(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Qt(n,e,t,i=null){un(n,e,7,[t,i])}const Ph=Vc();let Rh=0;function Ih(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ph,s={uid:Rh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yc(i,r),emitsOptions:Hc(i,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:i.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=oh.bind(null,s),n.ce&&n.ce(s),s}let bt=null;const Fh=()=>bt||Gt;let ps,Ro;{const n=Sr(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ps=e("__VUE_INSTANCE_SETTERS__",t=>bt=t),Ro=e("__VUE_SSR_SETTERS__",t=>gr=t)}const wr=n=>{const e=bt;return ps(n),n.scope.on(),()=>{n.scope.off(),ps(e)}},Da=()=>{bt&&bt.scope.off(),ps(null)};function su(n){return n.vnode.shapeFlag&4}let gr=!1;function Nh(n,e=!1,t=!1){e&&Ro(e);const{props:i,children:r}=n.vnode,s=su(n);hh(n,i,s,e),gh(n,r,t||e);const a=s?Oh(n,e):void 0;return e&&Ro(!1),a}function Oh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zf);const{setup:i}=t;if(i){An();const r=n.setupContext=i.length>1?zh(n):null,s=wr(n),a=br(i,n,0,[n.props,r]),o=sc(a);if(Cn(),s(),(o||n.sp)&&!cr(n)&&Oc(n),o){if(a.then(Da,Da),e)return a.then(l=>{Pa(n,l,e)}).catch(l=>{ys(l,n,0)});n.asyncDep=a}else Pa(n,a,e)}else ou(n,e)}function Pa(n,e,t){Re(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Xe(e)&&(n.setupState=Ac(e)),ou(n,t)}let Ra;function ou(n,e,t){const i=n.type;if(!n.render){if(!e&&Ra&&!i.render){const r=i.template||ra(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=ut(ut({isCustomElement:s,delimiters:o},a),l);i.render=Ra(r,c)}}n.render=i.render||$t}{const r=wr(n);An();try{Jf(n)}finally{Cn(),r()}}}const Uh={get(n,e){return mt(n,"get",""),n[e]}};function zh(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Uh),slots:n.slots,emit:n.emit,expose:e}}function Ts(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ac(xf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ur)return ur[t](n)},has(e,t){return t in e||t in ur}})):n.proxy}function Bh(n){return Re(n)&&"__vccOpts"in n}const Gh=(n,e)=>wf(n,e,gr);function M0(n,e,t){try{hs(-1);const i=arguments.length;return i===2?Xe(e)&&!Ce(e)?ds(e)?Et(n,null,[e]):Et(n,e):Et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ds(t)&&(t=[t]),Et(n,e,t))}finally{hs(1)}}const Vh="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Io;const Ia=typeof window<"u"&&window.trustedTypes;if(Ia)try{Io=Ia.createPolicy("vue",{createHTML:n=>n})}catch{}const au=Io?n=>Io.createHTML(n):n=>n,Hh="http://www.w3.org/2000/svg",kh="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Fa=vn&&vn.createElement("template"),Wh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?vn.createElementNS(Hh,n):e==="mathml"?vn.createElementNS(kh,n):t?vn.createElement(n,{is:t}):vn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>vn.createTextNode(n),createComment:n=>vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Fa.innerHTML=au(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Fa.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qh=Symbol("_vtc");function Xh(n,e,t){const i=n[qh];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Na=Symbol("_vod"),jh=Symbol("_vsh"),Yh=Symbol(""),$h=/(?:^|;)\s*display\s*:/;function Kh(n,e,t){const i=n.style,r=it(t);let s=!1;if(t&&!r){if(e)if(it(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&rs(i,o,"")}else for(const a in e)t[a]==null&&rs(i,a,"");for(const a in t)a==="display"&&(s=!0),rs(i,a,t[a])}else if(r){if(e!==t){const a=i[Yh];a&&(t+=";"+a),i.cssText=t,s=$h.test(t)}}else e&&n.removeAttribute("style");Na in n&&(n[Na]=s?i.display:"",n[jh]&&(i.display="none"))}const Oa=/\s*!important$/;function rs(n,e,t){if(Ce(t))t.forEach(i=>rs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zh(n,e);Oa.test(t)?n.setProperty(hi(i),t.replace(Oa,""),"important"):n[i]=t}}const Ua=["Webkit","Moz","ms"],Hs={};function Zh(n,e){const t=Hs[e];if(t)return t;let i=Kt(e);if(i!=="filter"&&i in n)return Hs[e]=i;i=lc(i);for(let r=0;r<Ua.length;r++){const s=Ua[r]+i;if(s in n)return Hs[e]=s}return e}const za="http://www.w3.org/1999/xlink";function Ba(n,e,t,i,r,s=Xu(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(za,e.slice(6,e.length)):n.setAttributeNS(za,e,t):t==null||s&&!uc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":cn(t)?String(t):t)}function Ga(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?au(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=uc(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function On(n,e,t,i){n.addEventListener(e,t,i)}function Jh(n,e,t,i){n.removeEventListener(e,t,i)}const Va=Symbol("_vei");function Qh(n,e,t,i,r=null){const s=n[Va]||(n[Va]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ed(e);if(i){const c=s[e]=id(i,r);On(n,o,c,l)}else a&&(Jh(n,o,a,l),s[e]=void 0)}}const Ha=/(?:Once|Passive|Capture)$/;function ed(n){let e;if(Ha.test(n)){e={};let i;for(;i=n.match(Ha);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hi(n.slice(2)),e]}let ks=0;const td=Promise.resolve(),nd=()=>ks||(td.then(()=>ks=0),ks=Date.now());function id(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;un(rd(i,t.value),e,5,[i])};return t.value=n,t.attached=nd(),t}function rd(n,e){if(Ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ka=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sd=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Xh(n,i,a):e==="style"?Kh(n,t,i):gs(e)?ko(e)||Qh(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):od(n,e,i,a))?(Ga(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ba(n,e,i,a,s,e!=="value")):n._isVueCE&&(ad(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!it(i)))?Ga(n,Kt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ba(n,e,i,a))};function od(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ka(e)&&Re(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ka(e)&&it(t)?!1:e in n}function ad(n,e){const t=n._def.props;if(!t)return!1;const i=Kt(e);return Array.isArray(t)?t.some(r=>Kt(r)===i):Object.keys(t).some(r=>Kt(r)===i)}const Bi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ce(e)?t=>es(e,t):e};function ld(n){n.target.composing=!0}function Wa(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tn=Symbol("_assign");function qa(n,e,t){return e&&(n=n.trim()),t&&(n=vs(n)),n}const y0={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Tn]=Bi(r);const s=i||r.props&&r.props.type==="number";On(n,e?"change":"input",a=>{a.target.composing||n[Tn](qa(n.value,t,s))}),(t||s)&&On(n,"change",()=>{n.value=qa(n.value,t,s)}),e||(On(n,"compositionstart",ld),On(n,"compositionend",Wa),On(n,"change",Wa))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Tn]=Bi(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?vs(n.value):n.value,l=e==null?"":e;o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},S0={created(n,{value:e},t){n.checked=oi(e,t.props.value),n[Tn]=Bi(t),On(n,"change",()=>{n[Tn](_r(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[Tn]=Bi(i),e!==t&&(n.checked=oi(e,i.props.value))}},b0={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=_s(e);On(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?vs(_r(a)):_r(a));n[Tn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Lc(()=>{n._assigning=!1})}),n[Tn]=Bi(i)},mounted(n,{value:e}){Xa(n,e)},beforeUpdate(n,e,t){n[Tn]=Bi(t)},updated(n,{value:e}){n._assigning||Xa(n,e)}};function Xa(n,e){const t=n.multiple,i=Ce(e);if(!(t&&!i&&!_s(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=_r(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Yu(e,o)>-1}else a.selected=e.has(o);else if(oi(_r(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function _r(n){return"_value"in n?n._value:n.value}const cd=["ctrl","shift","alt","meta"],ud={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>cd.some(t=>n[`${t}Key`]&&!e.includes(t))},w0=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=ud[e[a]];if(o&&o(r,e))return}return n(r,...s)})},fd=ut({patchProp:sd},Wh);let ja;function hd(){return ja||(ja=vh(fd))}const T0=(...n)=>{const e=hd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pd(i);if(!r)return;const s=e._component;!Re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,dd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function dd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pd(n){return it(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="148",md=0,Ya=1,gd=2,lu=1,_d=2,ir=3,ai=0,Ht=1,ca=2,Ir=3,zn=0,Ni=1,$a=2,Ka=3,Za=4,xd=5,Li=100,vd=101,Md=102,Ja=103,Qa=104,yd=200,Sd=201,bd=202,wd=203,cu=204,uu=205,Td=206,Ed=207,Ad=208,Cd=209,Ld=210,Dd=0,Pd=1,Rd=2,Fo=3,Id=4,Fd=5,Nd=6,Od=7,fu=0,Ud=1,zd=2,En=0,Bd=1,Gd=2,Vd=3,Hd=4,kd=5,hu=300,Gi=301,Vi=302,No=303,Oo=304,Es=306,Uo=1e3,jt=1001,zo=1002,yt=1003,el=1004,Ws=1005,Bt=1006,Wd=1007,xr=1008,li=1009,qd=1010,Xd=1011,du=1012,jd=1013,ei=1014,ti=1015,vr=1016,Yd=1017,$d=1018,Oi=1020,Kd=1021,Zd=1022,Yt=1023,Jd=1024,Qd=1025,ri=1026,Hi=1027,ep=1028,tp=1029,np=1030,ip=1031,rp=1033,qs=33776,Xs=33777,js=33778,Ys=33779,tl=35840,nl=35841,il=35842,rl=35843,sp=36196,sl=37492,ol=37496,al=37808,ll=37809,cl=37810,ul=37811,fl=37812,hl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,Ml=37821,yl=36492,ci=3e3,Ke=3001,op=3200,ap=3201,lp=0,cp=1,tn="srgb",Mr="srgb-linear",$s=7680,up=519,Sl=35044,bl="300 es",Bo=1035;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,wl=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function fp(n,e){return(n%e+e)%e}function Zs(n,e,t){return(1-t)*n+t*e}function Tl(n){return(n&n-1)===0&&n!==0}function Go(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],M=r[6],T=r[1],b=r[4],y=r[7],E=r[2],P=r[5],F=r[8];return s[0]=a*p+o*T+l*E,s[3]=a*d+o*b+l*P,s[6]=a*M+o*y+l*F,s[1]=c*p+u*T+f*E,s[4]=c*d+u*b+f*P,s[7]=c*M+u*y+f*F,s[2]=h*p+m*T+x*E,s[5]=h*d+m*b+x*P,s[8]=h*M+m*y+x*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Ft;function pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Qs={[tn]:{[Mr]:si},[Mr]:{[tn]:ss}},xt={legacyMode:!0,get workingColorSpace(){return Mr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Qs[e]&&Qs[e][t]!==void 0){const i=Qs[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},kt={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Or(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=fp(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=tn){const i=mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return xt.fromWorkingColorSpace(Or(this,rt),e),Rt(rt.r*255,0,255)<<16^Rt(rt.g*255,0,255)<<8^Rt(rt.b*255,0,255)<<0}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Or(this,rt),t);const i=rt.r,r=rt.g,s=rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Or(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=tn){return xt.fromWorkingColorSpace(Or(this,rt),e),e!==tn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=i,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(Nr);const i=Zs(kt.h,Nr.h,t),r=Zs(kt.s,Nr.s,t),s=Zs(kt.l,Nr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Je.NAMES=mu;let pi;class gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=ms("canvas")),pi.width=e.width,pi.height=e.height;const i=pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _u{constructor(e=null){this.isSource=!0,this.uuid=Tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(to(r[a].image)):s.push(to(r[a]))}else s=to(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class Nt extends Wi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=jt,r=jt,s=Bt,a=xr,o=Yt,l=li,c=Nt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Tr(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=hu;Nt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],M=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,E=(M+1)/2,P=(u+h)/4,F=(f+p)/4,v=(x+d)/4;return b>y&&b>E?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=F/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=F/s,r=v/s),this.set(i,r,s,t),this}let T=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-x)/T,this.y=(f-p)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Wi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xu extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dp extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==x){let d=1-o;const M=l*h+c*m+u*x+f*p,T=M>=0?1:-1,b=1-M*M;if(b>Number.EPSILON){const E=Math.sqrt(b),P=Math.atan2(E,M*T);d=Math.sin(d*P)/E,o=Math.sin(o*P)/E}const y=o*T;if(l=l*d+h*y,c=c*d+m*y,u=u*d+x*y,f=f*d+p*y,d===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new V,El=new Er;class Ar{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)jn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox),io.applyMatrix4(e.matrixWorld),this.union(io);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ur.subVectors(this.max,$i),mi.subVectors(e.a,$i),gi.subVectors(e.b,$i),_i.subVectors(e.c,$i),Pn.subVectors(gi,mi),Rn.subVectors(_i,gi),Yn.subVectors(mi,_i);let t=[0,-Pn.z,Pn.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,Pn.z,0,-Pn.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-Pn.y,Pn.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!ro(t,mi,gi,_i,Ur)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,mi,gi,_i,Ur))?!1:(zr.crossVectors(Pn,Rn),t=[zr.x,zr.y,zr.z],ro(t,mi,gi,_i,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new V,new V,new V,new V,new V,new V,new V,new V],jn=new V,io=new Ar,mi=new V,gi=new V,_i=new V,Pn=new V,Rn=new V,Yn=new V,$i=new V,Ur=new V,zr=new V,$n=new V;function ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$n.fromArray(n,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=i.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const pp=new Ar,Ki=new V,so=new V;class ua{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ki,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(so)),this.expandByPoint(Ki.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new V,oo=new V,Br=new V,In=new V,ao=new V,Gr=new V,lo=new V;class mp{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),In.copy(this.origin).sub(oo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=In.dot(this.direction),l=-In.dot(Br),c=In.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Br).multiplyScalar(h).add(oo),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,i,r,s){ao.subVectors(t,e),Gr.subVectors(i,e),lo.crossVectors(ao,Gr);let a=this.direction.dot(lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=o*this.direction.dot(Gr.crossVectors(In,Gr));if(l<0)return null;const c=o*this.direction.dot(ao.cross(In));if(c<0||l+c>a)return null;const u=-o*In.dot(lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,p,d){const M=this.elements;return M[0]=e,M[4]=t,M[8]=i,M[12]=r,M[1]=s,M[5]=a,M[9]=o,M[13]=l,M[2]=c,M[6]=u,M[10]=f,M[14]=h,M[3]=m,M[7]=x,M[11]=p,M[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Fn.crossVectors(i,Dt),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Fn.crossVectors(i,Dt)),Fn.normalize(),Vr.crossVectors(Dt,Fn),r[0]=Fn.x,r[4]=Vr.x,r[8]=Dt.x,r[1]=Fn.y,r[5]=Vr.y,r[9]=Dt.y,r[2]=Fn.z,r[6]=Vr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],M=i[14],T=i[3],b=i[7],y=i[11],E=i[15],P=r[0],F=r[4],v=r[8],C=r[12],I=r[1],ee=r[5],ue=r[9],B=r[13],N=r[2],J=r[6],ne=r[10],te=r[14],G=r[3],ce=r[7],re=r[11],q=r[15];return s[0]=a*P+o*I+l*N+c*G,s[4]=a*F+o*ee+l*J+c*ce,s[8]=a*v+o*ue+l*ne+c*re,s[12]=a*C+o*B+l*te+c*q,s[1]=u*P+f*I+h*N+m*G,s[5]=u*F+f*ee+h*J+m*ce,s[9]=u*v+f*ue+h*ne+m*re,s[13]=u*C+f*B+h*te+m*q,s[2]=x*P+p*I+d*N+M*G,s[6]=x*F+p*ee+d*J+M*ce,s[10]=x*v+p*ue+d*ne+M*re,s[14]=x*C+p*B+d*te+M*q,s[3]=T*P+b*I+y*N+E*G,s[7]=T*F+b*ee+y*J+E*ce,s[11]=T*v+b*ue+y*ne+E*re,s[15]=T*C+b*B+y*te+E*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],M=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+M*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],M=e[15],T=f*d*c-p*h*c+p*l*m-o*d*m-f*l*M+o*h*M,b=x*h*c-u*d*c-x*l*m+a*d*m+u*l*M-a*h*M,y=u*p*c-x*f*c+x*o*m-a*p*m-u*o*M+a*f*M,E=x*f*l-u*p*l-x*o*h+a*p*h+u*o*d-a*f*d,P=t*T+i*b+r*y+s*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=T*F,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*M-i*h*M)*F,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*M+i*l*M)*F,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*F,e[4]=b*F,e[5]=(u*d*s-x*h*s+x*r*m-t*d*m-u*r*M+t*h*M)*F,e[6]=(x*l*s-a*d*s-x*r*c+t*d*c+a*r*M-t*l*M)*F,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*F,e[8]=y*F,e[9]=(x*f*s-u*p*s-x*i*m+t*p*m+u*i*M-t*f*M)*F,e[10]=(a*p*s-x*o*s+x*i*c-t*p*c-a*i*M+t*o*M)*F,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*F,e[12]=E*F,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*F,e[14]=(x*o*r-a*p*r-x*i*l+t*p*l+a*i*d-t*o*d)*F,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,p=a*u,d=a*f,M=o*f,T=l*c,b=l*u,y=l*f,E=i.x,P=i.y,F=i.z;return r[0]=(1-(p+M))*E,r[1]=(m+y)*E,r[2]=(x-b)*E,r[3]=0,r[4]=(m-y)*P,r[5]=(1-(h+M))*P,r[6]=(d+T)*P,r[7]=0,r[8]=(x+b)*F,r[9]=(d-T)*F,r[10]=(1-(h+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=xi.set(r[0],r[1],r[2]).length();const a=xi.set(r[4],r[5],r[6]).length(),o=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const c=1/s,u=1/a,f=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=f,Wt.elements[9]*=f,Wt.elements[10]*=f,t.setFromRotationMatrix(Wt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xi=new V,Wt=new ht,gp=new V(0,0,0),_p=new V(1,1,1),Fn=new V,Vr=new V,Dt=new V,Al=new ht,Cl=new Er;class Cr{constructor(e=0,t=0,i=0,r=Cr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Cr.DefaultOrder="XYZ";Cr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Ll=new V,vi=new Er,gn=new ht,Hr=new V,Zi=new V,vp=new V,Mp=new Er,Dl=new V(1,0,0),Pl=new V(0,1,0),Rl=new V(0,0,1),yp={type:"added"},Il={type:"removed"};class Ot extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DefaultUp.clone();const e=new V,t=new Cr,i=new Er,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ft}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DefaultMatrixWorldAutoUpdate,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Zi,Hr,this.up):gn.lookAt(Hr,Zi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Il)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DefaultUp=new V(0,1,0);Ot.DefaultMatrixAutoUpdate=!0;Ot.DefaultMatrixWorldAutoUpdate=!0;const qt=new V,_n=new V,co=new V,xn=new V,Mi=new V,yi=new V,Fl=new V,uo=new V,fo=new V,ho=new V;class wn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),_n.subVectors(i,t),co.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(_n),l=qt.dot(co),c=_n.dot(_n),u=_n.dot(co),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,xn),l.set(0,0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),_n.subVectors(e,t),qt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),qt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Mi.subVectors(r,i),yi.subVectors(s,i),uo.subVectors(e,i);const l=Mi.dot(uo),c=yi.dot(uo);if(l<=0&&c<=0)return t.copy(i);fo.subVectors(e,r);const u=Mi.dot(fo),f=yi.dot(fo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Mi,a);ho.subVectors(e,s);const m=Mi.dot(ho),x=yi.dot(ho);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(yi,o);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return Fl.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Fl,o);const M=1/(d+p+h);return a=p*M,o=h*M,t.copy(i).addScaledVector(Mi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sp=0;class As extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=Ni,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new V,kr=new $e;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Su extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bp=0;const zt=new ht,po=new Ot,Si=new V,Pt=new Ar,Ji=new Ar,ct=new V;class Gn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?Su:yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Pt.min,Ji.min),Pt.expandByPoint(ct),ct.addVectors(Pt.max,Ji.max),Pt.expandByPoint(ct)):(Pt.expandByPoint(Ji.min),Pt.expandByPoint(Ji.max))}Pt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),ct.add(Si)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new V,u[I]=new V;const f=new V,h=new V,m=new V,x=new $e,p=new $e,d=new $e,M=new V,T=new V;function b(I,ee,ue){f.fromArray(r,I*3),h.fromArray(r,ee*3),m.fromArray(r,ue*3),x.fromArray(a,I*2),p.fromArray(a,ee*2),d.fromArray(a,ue*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const B=1/(p.x*d.y-d.x*p.y);!isFinite(B)||(M.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),c[I].add(M),c[ee].add(M),c[ue].add(M),u[I].add(T),u[ee].add(T),u[ue].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,ee=y.length;I<ee;++I){const ue=y[I],B=ue.start,N=ue.count;for(let J=B,ne=B+N;J<ne;J+=3)b(i[J+0],i[J+1],i[J+2])}const E=new V,P=new V,F=new V,v=new V;function C(I){F.fromArray(s,I*3),v.copy(F);const ee=c[I];E.copy(ee),E.sub(F.multiplyScalar(F.dot(ee))).normalize(),P.crossVectors(v,ee);const B=P.dot(u[I])<0?-1:1;l[I*4]=E.x,l[I*4+1]=E.y,l[I*4+2]=E.z,l[I*4+3]=B}for(let I=0,ee=y.length;I<ee;++I){const ue=y[I],B=ue.start,N=ue.count;for(let J=B,ne=B+N;J<ne;J+=3)C(i[J+0]),C(i[J+1]),C(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let M=0;M<u;M++)h[x++]=c[m++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new ht,bi=new mp,mo=new ua,Qi=new V,er=new V,tr=new V,go=new V,Wr=new V,qr=new $e,Xr=new $e,jr=new $e,_o=new V,Yr=new V;class Un extends Ot{constructor(e=new Gn,t=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(go.fromBufferAttribute(f,e),a?Wr.addScaledVector(go,u):Wr.addScaledVector(go.sub(t),u))}t.add(Wr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),e.ray.intersectsSphere(mo)===!1)||(Nl.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Nl),i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],M=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=M,y=T;b<y;b+=3){const E=o.getX(b),P=o.getX(b+1),F=o.getX(b+2);a=$r(this,d,e,bi,c,u,E,P,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const M=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=$r(this,r,e,bi,c,u,M,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],d=r[p.materialIndex],M=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=M,y=T;b<y;b+=3){const E=b,P=b+1,F=b+2;a=$r(this,d,e,bi,c,u,E,P,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=m,d=x;p<d;p+=3){const M=p,T=p+1,b=p+2;a=$r(this,r,e,bi,c,u,M,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function wp(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ai,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function $r(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,Qi),n.getVertexPosition(o,er),n.getVertexPosition(l,tr);const c=wp(n,e,t,i,Qi,er,tr,_o);if(c){r&&(qr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),c.uv=wn.getUV(_o,Qi,er,tr,qr,Xr,jr,new $e)),s&&(qr.fromBufferAttribute(s,a),Xr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),c.uv2=wn.getUV(_o,Qi,er,tr,qr,Xr,jr,new $e));const u={a,b:o,c:l,normal:new V,materialIndex:0};wn.getNormal(Qi,er,tr,u.normal),c.face=u}return c}class Lr extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function x(p,d,M,T,b,y,E,P,F,v,C){const I=y/F,ee=E/v,ue=y/2,B=E/2,N=P/2,J=F+1,ne=v+1;let te=0,G=0;const ce=new V;for(let re=0;re<ne;re++){const q=re*ee-B;for(let H=0;H<J;H++){const de=H*I-ue;ce[p]=de*T,ce[d]=q*b,ce[M]=N,c.push(ce.x,ce.y,ce.z),ce[p]=0,ce[d]=0,ce[M]=P>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(H/F),f.push(1-re/v),te+=1}}for(let re=0;re<v;re++)for(let q=0;q<F;q++){const H=h+q+J*re,de=h+q+J*(re+1),he=h+(q+1)+J*(re+1),me=h+(q+1)+J*re;l.push(H,de,me),l.push(de,he,me),G+=6}o.addGroup(m,G,C),m+=G,h+=te}}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(n){const e={};for(let t=0;t<n.length;t++){const i=ki(n[t]);for(const r in i)e[r]=i[r]}return e}function Tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bu(n){return n.getRenderTarget()===null&&n.outputEncoding===Ke?tn:Mr}const Ep={clone:ki,merge:Mt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ti=1;class Lp extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Xt(wi,Ti,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Xt(wi,Ti,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Xt(wi,Ti,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Xt(wi,Ti,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Xt(wi,Ti,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Xt(wi,Ti,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=En,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Tu extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:zn});s.uniforms.tEquirect.value=t;const a=new Un(r,s),o=t.minFilter;return t.minFilter===xr&&(t.minFilter=Bt),new Lp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const xo=new V,Pp=new V,Rp=new Ft;class Zn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xo.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rp.getNormalMatrix(e),r=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new ua,Kr=new V;class Eu{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],M=i[13],T=i[14],b=i[15];return t[0].setComponents(o-r,f-l,p-h,b-d).normalize(),t[1].setComponents(o+r,f+l,p+h,b+d).normalize(),t[2].setComponents(o+s,f+c,p+m,b+M).normalize(),t[3].setComponents(o-s,f-c,p-m,b-M).normalize(),t[4].setComponents(o-a,f-u,p-x,b-T).normalize(),t[5].setComponents(o+a,f+u,p+x,b+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ip(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class fa extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],p=[],d=[];for(let M=0;M<u;M++){const T=M*h-a;for(let b=0;b<c;b++){const y=b*f-s;x.push(y,-T,0),p.push(0,0,1),d.push(b/o),d.push(1-M/l)}}for(let M=0;M<l;M++)for(let T=0;T<o;T++){const b=T+c*M,y=T+c*(M+1),E=T+1+c*(M+1),P=T+1+c*M;m.push(b,y,P),m.push(y,E,P)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(d,2))}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp="vec3 transformed = vec3( position );",Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
}`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#endif`,bm=`#if defined( USE_ENVMAP )
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Lm=`struct PhysicalMaterial {
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
}`,Dm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ym=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Eg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ag=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zg=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,s_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,f_=`uniform vec3 diffuse;
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
}`,Ie={alphamap_fragment:Fp,alphamap_pars_fragment:Np,alphatest_fragment:Op,alphatest_pars_fragment:Up,aomap_fragment:zp,aomap_pars_fragment:Bp,begin_vertex:Gp,beginnormal_vertex:Vp,bsdfs:Hp,iridescence_fragment:kp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Yp,color_fragment:$p,color_pars_fragment:Kp,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:rm,emissivemap_pars_fragment:sm,encodings_fragment:om,encodings_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:bm,envmap_vertex:hm,fog_vertex:dm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_fragment:xm,lightmap_pars_fragment:vm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:ym,lights_pars_begin:Sm,lights_toon_fragment:wm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Pm,lights_fragment_end:Rm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Om,map_fragment:Um,map_pars_fragment:zm,map_particle_fragment:Bm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Hm,morphcolor_vertex:km,morphnormal_vertex:Wm,morphtarget_pars_vertex:qm,morphtarget_vertex:Xm,normal_fragment_begin:jm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:Km,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,output_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:vg,specularmap_pars_fragment:Mg,tonemapping_fragment:yg,tonemapping_pars_fragment:Sg,transmission_fragment:bg,transmission_pars_fragment:wg,uv_pars_fragment:Tg,uv_pars_vertex:Eg,uv_vertex:Ag,uv2_pars_fragment:Cg,uv2_pars_vertex:Lg,uv2_vertex:Dg,worldpos_vertex:Pg,background_vert:Rg,background_frag:Ig,backgroundCube_vert:Fg,backgroundCube_frag:Ng,cube_vert:Og,cube_frag:Ug,depth_vert:zg,depth_frag:Bg,distanceRGBA_vert:Gg,distanceRGBA_frag:Vg,equirect_vert:Hg,equirect_frag:kg,linedashed_vert:Wg,linedashed_frag:qg,meshbasic_vert:Xg,meshbasic_frag:jg,meshlambert_vert:Yg,meshlambert_frag:$g,meshmatcap_vert:Kg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:r_,meshtoon_frag:s_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:u_,sprite_frag:f_},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},sn={basic:{uniforms:Mt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Mt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Mt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Mt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Mt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Mt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Mt([pe.points,pe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Mt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Mt([pe.common,pe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Mt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Mt([pe.sprite,pe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Mt([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Mt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};sn.physical={uniforms:Mt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Zr={r:0,b:0,g:0};function h_(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(d,M){let T=!1,b=M.isScene===!0?M.background:null;b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b));const y=n.xr,E=y.getSession&&y.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?p(o,l):b&&b.isColor&&(p(b,1),T=!0),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Es)?(u===void 0&&(u=new Un(new Lr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ki(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,F,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=b.encoding!==Ke,(f!==b||h!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Un(new fa(2,2),new fi({name:"BackgroundMaterial",uniforms:ki(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=b.encoding!==Ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,M){d.getRGB(Zr,bu(n)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(d,M=1){o.set(d),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:x}}function d_(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(N,J,ne,te,G){let ce=!1;if(a){const re=p(te,ne,J);c!==re&&(c=re,m(c.object)),ce=M(N,te,ne,G),ce&&T(N,te,ne,G)}else{const re=J.wireframe===!0;(c.geometry!==te.id||c.program!==ne.id||c.wireframe!==re)&&(c.geometry=te.id,c.program=ne.id,c.wireframe=re,ce=!0)}G!==null&&t.update(G,34963),(ce||u)&&(u=!1,v(N,J,ne,te),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,J,ne){const te=ne.wireframe===!0;let G=o[N.id];G===void 0&&(G={},o[N.id]=G);let ce=G[J.id];ce===void 0&&(ce={},G[J.id]=ce);let re=ce[te];return re===void 0&&(re=d(h()),ce[te]=re),re}function d(N){const J=[],ne=[],te=[];for(let G=0;G<r;G++)J[G]=0,ne[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:te,object:N,attributes:{},index:null}}function M(N,J,ne,te){const G=c.attributes,ce=J.attributes;let re=0;const q=ne.getAttributes();for(const H in q)if(q[H].location>=0){const he=G[H];let me=ce[H];if(me===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;re++}return c.attributesNum!==re||c.index!==te}function T(N,J,ne,te){const G={},ce=J.attributes;let re=0;const q=ne.getAttributes();for(const H in q)if(q[H].location>=0){let he=ce[H];he===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(he=N.instanceColor));const me={};me.attribute=he,he&&he.data&&(me.data=he.data),G[H]=me,re++}c.attributes=G,c.attributesNum=re,c.index=te}function b(){const N=c.newAttributes;for(let J=0,ne=N.length;J<ne;J++)N[J]=0}function y(N){E(N,0)}function E(N,J){const ne=c.newAttributes,te=c.enabledAttributes,G=c.attributeDivisors;ne[N]=1,te[N]===0&&(n.enableVertexAttribArray(N),te[N]=1),G[N]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),G[N]=J)}function P(){const N=c.newAttributes,J=c.enabledAttributes;for(let ne=0,te=J.length;ne<te;ne++)J[ne]!==N[ne]&&(n.disableVertexAttribArray(ne),J[ne]=0)}function F(N,J,ne,te,G,ce){i.isWebGL2===!0&&(ne===5124||ne===5125)?n.vertexAttribIPointer(N,J,ne,G,ce):n.vertexAttribPointer(N,J,ne,te,G,ce)}function v(N,J,ne,te){if(i.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const G=te.attributes,ce=ne.getAttributes(),re=J.defaultAttributeValues;for(const q in ce){const H=ce[q];if(H.location>=0){let de=G[q];if(de===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),de!==void 0){const he=de.normalized,me=de.itemSize,Y=t.get(de);if(Y===void 0)continue;const Fe=Y.buffer,ye=Y.type,Ae=Y.bytesPerElement;if(de.isInterleavedBufferAttribute){const xe=de.data,Ve=xe.stride,Pe=de.offset;if(xe.isInstancedInterleavedBuffer){for(let S=0;S<H.locationSize;S++)E(H.location+S,xe.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let S=0;S<H.locationSize;S++)y(H.location+S);n.bindBuffer(34962,Fe);for(let S=0;S<H.locationSize;S++)F(H.location+S,me/H.locationSize,ye,he,Ve*Ae,(Pe+me/H.locationSize*S)*Ae)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)E(H.location+xe,de.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);n.bindBuffer(34962,Fe);for(let xe=0;xe<H.locationSize;xe++)F(H.location+xe,me/H.locationSize,ye,he,me*Ae,me/H.locationSize*xe*Ae)}}else if(re!==void 0){const he=re[q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(H.location,he);break;case 3:n.vertexAttrib3fv(H.location,he);break;case 4:n.vertexAttrib4fv(H.location,he);break;default:n.vertexAttrib1fv(H.location,he)}}}}P()}function C(){ue();for(const N in o){const J=o[N];for(const ne in J){const te=J[ne];for(const G in te)x(te[G].object),delete te[G];delete J[ne]}delete o[N]}}function I(N){if(o[N.id]===void 0)return;const J=o[N.id];for(const ne in J){const te=J[ne];for(const G in te)x(te[G].object),delete te[G];delete J[ne]}delete o[N.id]}function ee(N){for(const J in o){const ne=o[J];if(ne[N.id]===void 0)continue;const te=ne[N.id];for(const G in te)x(te[G].object),delete te[G];delete ne[N.id]}}function ue(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ue,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:ee,initAttributes:b,enableAttribute:y,disableUnusedAttributes:P}}function p_(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function m_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),M=n.getParameter(36348),T=n.getParameter(36349),b=h>0,y=a||e.has("OES_texture_float"),E=b&&y,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:P}}function g_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,M=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const T=s?0:i,b=T*4;let y=M.clippingState||null;l.value=y,y=u(x,h,b,m);for(let E=0;E!==b;++E)y[E]=t[E];M.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const M=m+p*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<M)&&(d=new Float32Array(M));for(let b=0,y=m;b!==p;++b,y+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function __(n){let e=new WeakMap;function t(a,o){return o===No?a.mapping=Gi:o===Oo&&(a.mapping=Vi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===No||o===Oo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class x_ extends wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,Ol=[.125,.215,.35,.446,.526,.582],Qn=20,vo=new x_,Ul=new Je;let Mo=null;const Jn=(1+Math.sqrt(5))/2,Ai=1/Jn,zl=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Jn,Ai),new V(0,Jn,-Ai),new V(Ai,0,Jn),new V(-Ai,0,Jn),new V(Jn,Ai,0),new V(-Jn,Ai,0)];class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:vr,format:Yt,encoding:ci,depthBuffer:!1},r=Gl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(s)),this._blurMaterial=M_(s,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,i,r){const o=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ul),u.toneMapping=En,u.autoClear=!1;const m=new Mu({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),x=new Un(new Lr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Ul),p=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(o.up.set(0,l[M],0),o.lookAt(c[M],0,0)):T===1?(o.up.set(0,0,l[M]),o.lookAt(0,c[M],0)):(o.up.set(0,l[M],0),o.lookAt(0,0,c[M]));const b=this._cubeSize;Jr(r,T*b,M>2?b:0,b,b),u.setRenderTarget(r),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gi||e.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zl[(r-1)%zl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):Qn;d>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Qn}`);const M=[];let T=0;for(let F=0;F<Qn;++F){const v=F/p,C=Math.exp(-v*v/2);M.push(C),F===0?T+=C:F<d&&(T+=2*C)}for(let F=0;F<M.length;F++)M[F]=M[F]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=M,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=x,h.mipInt.value=b-i;const y=this._sizeLods[r],E=3*y*(r>b-Di?r-b+Di:0),P=4*(this._cubeSize-y);Jr(t,E,P,3*y,2*y),l.setRenderTarget(t),l.render(f,vo)}}function v_(n){const e=[],t=[],i=[];let r=n;const s=n-Di+1+Ol.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Di?l=Ol[a-n+Di-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,M=1,T=new Float32Array(p*x*m),b=new Float32Array(d*x*m),y=new Float32Array(M*x*m);for(let P=0;P<m;P++){const F=P%3*2/3-1,v=P>2?0:-1,C=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];T.set(C,p*x*P),b.set(h,d*x*P);const I=[P,P,P,P,P,P];y.set(I,M*x*P)}const E=new Gn;E.setAttribute("position",new an(T,p)),E.setAttribute("uv",new an(b,d)),E.setAttribute("faceIndex",new an(y,M)),e.push(E),r>Di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gl(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function M_(n,e,t){const i=new Float32Array(Qn),r=new V(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ha(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vl(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Hl(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ha(){return`

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
	`}function y_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Oo,u=l===Gi||l===Vi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Bl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Bl(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function S_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b_(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,M=p.length;d<M;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let b=0,y=T.length;b<y;b+=3){const E=T[b+0],P=T[b+1],F=T[b+2];h.push(E,P,P,F,F,E)}}else{const T=x.array;p=x.version;for(let b=0,y=T.length/3-1;b<y;b+=3){const E=b+0,P=b+1,F=b+2;h.push(E,P,P,F,F,E)}}const d=new(pu(h)?Su:yu)(h,1);d.version=p;const M=s.get(f);M&&e.remove(M),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function w_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function T_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function E_(n,e){return n[0]-e[0]}function A_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function C_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=x!==void 0?x.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let J=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let C=0;b===!0&&(C=1),y===!0&&(C=2),E===!0&&(C=3);let I=u.attributes.position.count*C,ee=1;I>e.maxTextureSize&&(ee=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ue=new Float32Array(I*ee*4*p),B=new xu(ue,I,ee,p);B.type=ti,B.needsUpdate=!0;const N=C*4;for(let ne=0;ne<p;ne++){const te=P[ne],G=F[ne],ce=v[ne],re=I*ee*4*ne;for(let q=0;q<te.count;q++){const H=q*N;b===!0&&(a.fromBufferAttribute(te,q),ue[re+H+0]=a.x,ue[re+H+1]=a.y,ue[re+H+2]=a.z,ue[re+H+3]=0),y===!0&&(a.fromBufferAttribute(G,q),ue[re+H+4]=a.x,ue[re+H+5]=a.y,ue[re+H+6]=a.z,ue[re+H+7]=0),E===!0&&(a.fromBufferAttribute(ce,q),ue[re+H+8]=a.x,ue[re+H+9]=a.y,ue[re+H+10]=a.z,ue[re+H+11]=ce.itemSize===4?a.w:1)}}d={count:p,texture:B,size:new $e(I,ee)},s.set(u,d),u.addEventListener("dispose",J)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const T=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const x=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==x){p=[];for(let y=0;y<x;y++)p[y]=[y,0];i[u.id]=p}for(let y=0;y<x;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(A_);for(let y=0;y<8;y++)y<x&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(E_);const d=u.morphAttributes.position,M=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const E=o[y],P=E[0],F=E[1];P!==Number.MAX_SAFE_INTEGER&&F?(d&&u.getAttribute("morphTarget"+y)!==d[P]&&u.setAttribute("morphTarget"+y,d[P]),M&&u.getAttribute("morphNormal"+y)!==M[P]&&u.setAttribute("morphNormal"+y,M[P]),r[y]=F,T+=F):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),M&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function L_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Cu=new Nt,Lu=new xu,Du=new dp,Pu=new Tu,kl=[],Wl=[],ql=new Float32Array(16),Xl=new Float32Array(9),jl=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kl[r];if(s===void 0&&(s=new Float32Array(r),kl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cs(n,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function F_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),ot(t,i)}}function N_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Xl.set(i),n.uniformMatrix3fv(this.addr,!1,Xl),ot(t,i)}}function O_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;ql.set(i),n.uniformMatrix4fv(this.addr,!1,ql),ot(t,i)}}function U_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function V_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function q_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Cu,r)}function X_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Du,r)}function j_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pu,r)}function Y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lu,r)}function $_(n){switch(n){case 5126:return D_;case 35664:return P_;case 35665:return R_;case 35666:return I_;case 35674:return F_;case 35675:return N_;case 35676:return O_;case 5124:case 35670:return U_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return G_;case 5125:return V_;case 36294:return H_;case 36295:return k_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Y_}}function K_(n,e){n.uniform1fv(this.addr,e)}function Z_(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function J_(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function Q_(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function ex(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tx(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nx(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ix(n,e){n.uniform1iv(this.addr,e)}function rx(n,e){n.uniform2iv(this.addr,e)}function sx(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function ax(n,e){n.uniform1uiv(this.addr,e)}function lx(n,e){n.uniform2uiv(this.addr,e)}function cx(n,e){n.uniform3uiv(this.addr,e)}function ux(n,e){n.uniform4uiv(this.addr,e)}function fx(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Cu,s[a])}function hx(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Du,s[a])}function dx(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pu,s[a])}function px(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lu,s[a])}function mx(n){switch(n){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=$_(t.type)}}class _x{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=mx(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function Yl(n,e){n.seq.push(e),n.map[e.id]=e}function vx(n,e,t){const i=n.name,r=i.length;for(yo.lastIndex=0;;){const s=yo.exec(i),a=yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yl(t,c===void 0?new gx(o,n,e):new _x(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new xx(o),Yl(t,f)),t=f}}}class os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);vx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function $l(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Mx=0;function yx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Sx(n){switch(n){case ci:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Kl(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yx(n.getShaderSource(e),a)}else return r}function bx(n,e){const t=Sx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wx(n,e){let t;switch(e){case Bd:t="Linear";break;case Gd:t="Reinhard";break;case Vd:t="OptimizedCineon";break;case Hd:t="ACESFilmic";break;case kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tx(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function Ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ax(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rr(n){return n!==""}function Zl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(n){return n.replace(Cx,Lx)}function Lx(n,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vo(t)}const Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(n){return n.replace(Dx,Px)}function Px(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ec(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case Vi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case zd:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ux(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Rx(t),c=Ix(t),u=Fx(t),f=Nx(t),h=Ox(t),m=t.isWebGL2?"":Tx(t),x=Ex(s),p=r.createProgram();let d,M,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(rr).join(`
`),d.length>0&&(d+=`
`),M=[m,x].filter(rr).join(`
`),M.length>0&&(M+=`
`)):(d=[ec(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),M=[m,ec(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ie.tonemapping_pars_fragment:"",t.toneMapping!==En?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,bx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Vo(a),a=Zl(a,t),a=Jl(a,t),o=Vo(o),o=Zl(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const b=T+d+a,y=T+M+o,E=$l(r,35633,b),P=$l(r,35632,y);if(r.attachShader(p,E),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(E).trim(),ee=r.getShaderInfoLog(P).trim();let ue=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){ue=!1;const N=Kl(r,E,"vertex"),J=Kl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+N+`
`+J)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||ee==="")&&(B=!1);B&&(this.diagnostics={runnable:ue,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:ee,prefix:M}})}r.deleteShader(E),r.deleteShader(P);let F;this.getUniforms=function(){return F===void 0&&(F=new os(r,p)),F};let v;return this.getAttributes=function(){return v===void 0&&(v=Ax(r,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Mx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=P,this}let zx=0;class Bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Gx(e),t.set(e,i)),i}}class Gx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function Vx(n,e,t,i,r,s,a){const o=new vu,l=new Bx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,C,I,ee,ue){const B=ee.fog,N=ue.geometry,J=v.isMeshStandardMaterial?ee.environment:null,ne=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),te=!!ne&&ne.mapping===Es?ne.image.height:null,G=x[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const ce=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=ce!==void 0?ce.length:0;let q=0;N.morphAttributes.position!==void 0&&(q=1),N.morphAttributes.normal!==void 0&&(q=2),N.morphAttributes.color!==void 0&&(q=3);let H,de,he,me;if(G){const Ve=sn[G];H=Ve.vertexShader,de=Ve.fragmentShader}else H=v.vertexShader,de=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const Y=n.getRenderTarget(),Fe=v.alphaTest>0,ye=v.clearcoat>0,Ae=v.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:v.type,vertexShader:H,fragmentShader:de,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y===null?n.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:ci,map:!!v.map,matcap:!!v.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:te,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===cp,tangentSpaceNormalMap:v.normalMapType===lp,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!v.iridescenceMap,iridescenceThicknessMap:Ae&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ni,alphaMap:!!v.alphaMap,alphaTest:Fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:En,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ca,flipSided:v.side===Ht,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)C.push(I),C.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(C,v),T(C,v),C.push(n.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function M(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function T(v,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),v.push(o.mask)}function b(v){const C=x[v.type];let I;if(C){const ee=sn[C];I=Ep.clone(ee.uniforms)}else I=v.uniforms;return I}function y(v,C){let I;for(let ee=0,ue=c.length;ee<ue;ee++){const B=c[ee];if(B.cacheKey===C){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Ux(n,C,v,s),c.push(I)),I}function E(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:F}}function Hx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,p,d){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=m,M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=p,M.group=d),e++,M}function o(f,h,m,x,p,d){const M=a(f,h,m,x,p,d);m.transmission>0?i.push(M):m.transparent===!0?r.push(M):t.push(M)}function l(f,h,m,x,p,d){const M=a(f,h,m,x,p,d);m.transmission>0?i.unshift(M):m.transparent===!0?r.unshift(M):t.unshift(M)}function c(f,h){t.length>1&&t.sort(f||kx),i.length>1&&i.sort(h||tc),r.length>1&&r.sort(h||tc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Wx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new nc,n.set(i,[a])):r>=s.length?(a=new nc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jx=0;function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $x(n,e){const t=new qx,i=Xx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,a=new ht,o=new ht;function l(u,f){let h=0,m=0,x=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let p=0,d=0,M=0,T=0,b=0,y=0,E=0,P=0,F=0,v=0;u.sort(Yx);const C=f!==!0?Math.PI:1;for(let ee=0,ue=u.length;ee<ue;ee++){const B=u[ee],N=B.color,J=B.intensity,ne=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=N.r*J*C,m+=N.g*J*C,x+=N.b*J*C;else if(B.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],J);else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const ce=B.shadow,re=i.get(B);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,r.directionalShadow[p]=re,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=B.shadow.matrix,y++}r.directional[p]=G,p++}else if(B.isSpotLight){const G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(N).multiplyScalar(J*C),G.distance=ne,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,r.spot[M]=G;const ce=B.shadow;if(B.map&&(r.spotLightMap[F]=B.map,F++,ce.updateMatrices(B),B.castShadow&&v++),r.spotLightMatrix[M]=ce.matrix,B.castShadow){const re=i.get(B);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,r.spotShadow[M]=re,r.spotShadowMap[M]=te,P++}M++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(N).multiplyScalar(J),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[T]=G,T++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*C),G.distance=B.distance,G.decay=B.decay,B.castShadow){const ce=B.shadow,re=i.get(B);re.shadowBias=ce.bias,re.shadowNormalBias=ce.normalBias,re.shadowRadius=ce.radius,re.shadowMapSize=ce.mapSize,re.shadowCameraNear=ce.camera.near,re.shadowCameraFar=ce.camera.far,r.pointShadow[d]=re,r.pointShadowMap[d]=te,r.pointShadowMatrix[d]=B.shadow.matrix,E++}r.point[d]=G,d++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(J*C),G.groundColor.copy(B.groundColor).multiplyScalar(J*C),r.hemi[b]=G,b++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==b||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==P||I.numSpotMaps!==F)&&(r.directional.length=p,r.spot.length=M,r.rectArea.length=T,r.point.length=d,r.hemi.length=b,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=P+F-v,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=b,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=P,I.numSpotMaps=F,r.version=jx++)}function c(u,f){let h=0,m=0,x=0,p=0,d=0;const M=f.matrixWorldInverse;for(let T=0,b=u.length;T<b;T++){const y=u[T];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(M),h++}else if(y.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(M),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(M),x++}else if(y.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(M),o.identity(),a.copy(y.matrixWorld),a.premultiply(M),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(M),m++}else if(y.isHemisphereLight){const E=r.hemi[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(M),d++}}}return{setup:l,setupView:c,state:r}}function ic(n,e){const t=new $x(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new ic(n,e),t.set(s,[l])):a>=o.length?(l=new ic(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Zx extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(n,e,t){let i=new Eu;const r=new $e,s=new $e,a=new ft,o=new Zx({depthPacking:ap}),l=new Jx,c={},u=t.maxTextureSize,f={0:Ht,1:ai,2:ca},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Qx,fragmentShader:e0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Gn;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Un(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu,this.render=function(y,E,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const F=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(zn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let ee=0,ue=y.length;ee<ue;ee++){const B=y[ee],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();if(r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null){const te=this.type!==ir?{minFilter:yt,magFilter:yt}:{};N.map=new ui(r.x,r.y,te),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ne=N.getViewportCount();for(let te=0;te<ne;te++){const G=N.getViewport(te);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(a),N.updateMatrices(B,te),i=N.getFrustum(),b(E,P,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ir&&M(N,P),N.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(F,v,C)};function M(y,E){const P=e.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ui(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,P,h,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,P,m,p,null)}function T(y,E,P,F,v,C){let I=null;const ee=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(ee!==void 0)I=ee;else if(I=P.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ue=I.uuid,B=E.uuid;let N=c[ue];N===void 0&&(N={},c[ue]=N);let J=N[B];J===void 0&&(J=I.clone(),N[B]=J),I=J}return I.visible=E.visible,I.wireframe=E.wireframe,C===ir?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:f[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=F,I.farDistance=v),I}function b(y,E,P,F,v){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===ir)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const ee=e.update(y),ue=y.material;if(Array.isArray(ue)){const B=ee.groups;for(let N=0,J=B.length;N<J;N++){const ne=B[N],te=ue[ne.materialIndex];if(te&&te.visible){const G=T(y,te,F,P.near,P.far,v);n.renderBufferDirect(P,null,ee,G,y,ne)}}}else if(ue.visible){const B=T(y,ue,F,P.near,P.far,v);n.renderBufferDirect(P,null,ee,B,y,null)}}const I=y.children;for(let ee=0,ue=I.length;ee<ue;ee++)b(I[ee],E,P,F,v)}}function n0(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const X=new ft;let le=null;const Me=new ft(0,0,0,0);return{setMask:function(Te){le!==Te&&!D&&(n.colorMask(Te,Te,Te,Te),le=Te)},setLocked:function(Te){D=Te},setClear:function(Te,ke,at,dt,Vn){Vn===!0&&(Te*=dt,ke*=dt,at*=dt),X.set(Te,ke,at,dt),Me.equals(X)===!1&&(n.clearColor(Te,ke,at,dt),Me.copy(X))},reset:function(){D=!1,le=null,Me.set(-1,0,0,0)}}}function s(){let D=!1,X=null,le=null,Me=null;return{setTest:function(Te){Te?Fe(2929):ye(2929)},setMask:function(Te){X!==Te&&!D&&(n.depthMask(Te),X=Te)},setFunc:function(Te){if(le!==Te){switch(Te){case Dd:n.depthFunc(512);break;case Pd:n.depthFunc(519);break;case Rd:n.depthFunc(513);break;case Fo:n.depthFunc(515);break;case Id:n.depthFunc(514);break;case Fd:n.depthFunc(518);break;case Nd:n.depthFunc(516);break;case Od:n.depthFunc(517);break;default:n.depthFunc(515)}le=Te}},setLocked:function(Te){D=Te},setClear:function(Te){Me!==Te&&(n.clearDepth(Te),Me=Te)},reset:function(){D=!1,X=null,le=null,Me=null}}}function a(){let D=!1,X=null,le=null,Me=null,Te=null,ke=null,at=null,dt=null,Vn=null;return{setTest:function(Ze){D||(Ze?Fe(2960):ye(2960))},setMask:function(Ze){X!==Ze&&!D&&(n.stencilMask(Ze),X=Ze)},setFunc:function(Ze,fn,Ut){(le!==Ze||Me!==fn||Te!==Ut)&&(n.stencilFunc(Ze,fn,Ut),le=Ze,Me=fn,Te=Ut)},setOp:function(Ze,fn,Ut){(ke!==Ze||at!==fn||dt!==Ut)&&(n.stencilOp(Ze,fn,Ut),ke=Ze,at=fn,dt=Ut)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Vn!==Ze&&(n.clearStencil(Ze),Vn=Ze)},reset:function(){D=!1,X=null,le=null,Me=null,Te=null,ke=null,at=null,dt=null,Vn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,p=[],d=null,M=!1,T=null,b=null,y=null,E=null,P=null,F=null,v=null,C=!1,I=null,ee=null,ue=null,B=null,N=null;const J=n.getParameter(35661);let ne=!1,te=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=te>=2);let ce=null,re={};const q=n.getParameter(3088),H=n.getParameter(2978),de=new ft().fromArray(q),he=new ft().fromArray(H);function me(D,X,le){const Me=new Uint8Array(4),Te=n.createTexture();n.bindTexture(D,Te),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let ke=0;ke<le;ke++)n.texImage2D(X+ke,0,6408,1,1,0,6408,5121,Me);return Te}const Y={};Y[3553]=me(3553,3553,1),Y[34067]=me(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(Fo),Q(!1),Z(Ya),Fe(2884),A(zn);function Fe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ae(D,X){return m[D]!==X?(n.bindFramebuffer(D,X),m[D]=X,i&&(D===36009&&(m[36160]=X),D===36160&&(m[36009]=X)),!0):!1}function xe(D,X){let le=p,Me=!1;if(D)if(le=x.get(X),le===void 0&&(le=[],x.set(X,le)),D.isWebGLMultipleRenderTargets){const Te=D.texture;if(le.length!==Te.length||le[0]!==36064){for(let ke=0,at=Te.length;ke<at;ke++)le[ke]=36064+ke;le.length=Te.length,Me=!0}}else le[0]!==36064&&(le[0]=36064,Me=!0);else le[0]!==1029&&(le[0]=1029,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ve(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const Pe={[Li]:32774,[vd]:32778,[Md]:32779};if(i)Pe[Ja]=32775,Pe[Qa]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Pe[Ja]=D.MIN_EXT,Pe[Qa]=D.MAX_EXT)}const S={[yd]:0,[Sd]:1,[bd]:768,[cu]:770,[Ld]:776,[Ad]:774,[Td]:772,[wd]:769,[uu]:771,[Cd]:775,[Ed]:773};function A(D,X,le,Me,Te,ke,at,dt){if(D===zn){M===!0&&(ye(3042),M=!1);return}if(M===!1&&(Fe(3042),M=!0),D!==xd){if(D!==T||dt!==C){if((b!==Li||P!==Li)&&(n.blendEquation(32774),b=Li,P=Li),dt)switch(D){case Ni:n.blendFuncSeparate(1,771,1,771);break;case $a:n.blendFunc(1,1);break;case Ka:n.blendFuncSeparate(0,769,0,1);break;case Za:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:n.blendFuncSeparate(770,771,1,771);break;case $a:n.blendFunc(770,1);break;case Ka:n.blendFuncSeparate(0,769,0,1);break;case Za:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,F=null,v=null,T=D,C=dt}return}Te=Te||X,ke=ke||le,at=at||Me,(X!==b||Te!==P)&&(n.blendEquationSeparate(Pe[X],Pe[Te]),b=X,P=Te),(le!==y||Me!==E||ke!==F||at!==v)&&(n.blendFuncSeparate(S[le],S[Me],S[ke],S[at]),y=le,E=Me,F=ke,v=at),T=D,C=!1}function z(D,X){D.side===ca?ye(2884):Fe(2884);let le=D.side===Ht;X&&(le=!le),Q(le),D.blending===Ni&&D.transparent===!1?A(zn):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Me=D.stencilWrite;c.setTest(Me),Me&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(32926):ye(32926)}function Q(D){I!==D&&(D?n.frontFace(2304):n.frontFace(2305),I=D)}function Z(D){D!==md?(Fe(2884),D!==ee&&(D===Ya?n.cullFace(1029):D===gd?n.cullFace(1028):n.cullFace(1032))):ye(2884),ee=D}function $(D){D!==ue&&(ne&&n.lineWidth(D),ue=D)}function se(D,X,le){D?(Fe(32823),(B!==X||N!==le)&&(n.polygonOffset(X,le),B=X,N=le)):ye(32823)}function fe(D){D?Fe(3089):ye(3089)}function ae(D){D===void 0&&(D=33984+J-1),ce!==D&&(n.activeTexture(D),ce=D)}function _(D,X,le){le===void 0&&(ce===null?le=33984+J-1:le=ce);let Me=re[le];Me===void 0&&(Me={type:void 0,texture:void 0},re[le]=Me),(Me.type!==D||Me.texture!==X)&&(ce!==le&&(n.activeTexture(le),ce=le),n.bindTexture(D,X||Y[D]),Me.type=D,Me.texture=X)}function g(){const D=re[ce];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function L(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){de.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function we(D){he.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Le(D,X){let le=f.get(X);le===void 0&&(le=new WeakMap,f.set(X,le));let Me=le.get(D);Me===void 0&&(Me=n.getUniformBlockIndex(X,D.name),le.set(D,Me))}function Ue(D,X){const Me=f.get(X).get(D);u.get(X)!==Me&&(n.uniformBlockBinding(X,Me,D.__bindingPointIndex),u.set(X,Me))}function Qe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,re={},m={},x=new WeakMap,p=[],d=null,M=!1,T=null,b=null,y=null,E=null,P=null,F=null,v=null,C=!1,I=null,ee=null,ue=null,B=null,N=null,de.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:ye,bindFramebuffer:Ae,drawBuffers:xe,useProgram:Ve,setBlending:A,setMaterial:z,setFlipSided:Q,setCullFace:Z,setLineWidth:$,setPolygonOffset:se,setScissorTest:fe,activeTexture:ae,bindTexture:_,unbindTexture:g,compressedTexImage2D:L,compressedTexImage3D:U,texImage2D:Se,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:W,texStorage3D:ve,texSubImage2D:k,texSubImage3D:ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:oe,scissor:be,viewport:we,reset:Qe}}function i0(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(_,g){return M?new OffscreenCanvas(_,g):ms("canvas")}function b(_,g,L,U){let k=1;if((_.width>U||_.height>U)&&(k=U/Math.max(_.width,_.height)),k<1||g===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const ie=g?Go:Math.floor,_e=ie(k*_.width),oe=ie(k*_.height);p===void 0&&(p=T(_e,oe));const W=L?T(_e,oe):p;return W.width=_e,W.height=oe,W.getContext("2d").drawImage(_,0,0,_e,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+_e+"x"+oe+")."),W}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function y(_){return Tl(_.width)&&Tl(_.height)}function E(_){return o?!1:_.wrapS!==jt||_.wrapT!==jt||_.minFilter!==yt&&_.minFilter!==Bt}function P(_,g){return _.generateMipmaps&&g&&_.minFilter!==yt&&_.minFilter!==Bt}function F(_){n.generateMipmap(_)}function v(_,g,L,U,k=!1){if(o===!1)return g;if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ie=g;return g===6403&&(L===5126&&(ie=33326),L===5131&&(ie=33325),L===5121&&(ie=33321)),g===33319&&(L===5126&&(ie=33328),L===5131&&(ie=33327),L===5121&&(ie=33323)),g===6408&&(L===5126&&(ie=34836),L===5131&&(ie=34842),L===5121&&(ie=U===Ke&&k===!1?35907:32856),L===32819&&(ie=32854),L===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function C(_,g,L){return P(_,L)===!0||_.isFramebufferTexture&&_.minFilter!==yt&&_.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function I(_){return _===yt||_===el||_===Ws?9728:9729}function ee(_){const g=_.target;g.removeEventListener("dispose",ee),B(g),g.isVideoTexture&&x.delete(g)}function ue(_){const g=_.target;g.removeEventListener("dispose",ue),J(g)}function B(_){const g=i.get(_);if(g.__webglInit===void 0)return;const L=_.source,U=d.get(L);if(U){const k=U[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&N(_),Object.keys(U).length===0&&d.delete(L)}i.remove(_)}function N(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const L=_.source,U=d.get(L);delete U[g.__cacheKey],a.memory.textures--}function J(_){const g=_.texture,L=i.get(_),U=i.get(g);if(U.__webglTexture!==void 0&&(n.deleteTexture(U.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)n.deleteFramebuffer(L.__webglFramebuffer[k]),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[k]);else{if(n.deleteFramebuffer(L.__webglFramebuffer),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let k=0;k<L.__webglColorRenderbuffer.length;k++)L.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[k]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let k=0,ie=g.length;k<ie;k++){const _e=i.get(g[k]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[k])}i.remove(g),i.remove(_)}let ne=0;function te(){ne=0}function G(){const _=ne;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),ne+=1,_}function ce(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.encoding),g.join()}function re(_,g){const L=i.get(_);if(_.isVideoTexture&&fe(_),_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){const U=_.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(L,_,g);return}}t.bindTexture(3553,L.__webglTexture,33984+g)}function q(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){ye(L,_,g);return}t.bindTexture(35866,L.__webglTexture,33984+g)}function H(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){ye(L,_,g);return}t.bindTexture(32879,L.__webglTexture,33984+g)}function de(_,g){const L=i.get(_);if(_.version>0&&L.__version!==_.version){Ae(L,_,g);return}t.bindTexture(34067,L.__webglTexture,33984+g)}const he={[Uo]:10497,[jt]:33071,[zo]:33648},me={[yt]:9728,[el]:9984,[Ws]:9986,[Bt]:9729,[Wd]:9985,[xr]:9987};function Y(_,g,L){if(L?(n.texParameteri(_,10242,he[g.wrapS]),n.texParameteri(_,10243,he[g.wrapT]),(_===32879||_===35866)&&n.texParameteri(_,32882,he[g.wrapR]),n.texParameteri(_,10240,me[g.magFilter]),n.texParameteri(_,10241,me[g.minFilter])):(n.texParameteri(_,10242,33071),n.texParameteri(_,10243,33071),(_===32879||_===35866)&&n.texParameteri(_,32882,33071),(g.wrapS!==jt||g.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(_,10240,I(g.magFilter)),n.texParameteri(_,10241,I(g.minFilter)),g.minFilter!==yt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===yt||g.minFilter!==Ws&&g.minFilter!==xr||g.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===vr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(_,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Fe(_,g){let L=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",ee));const U=g.source;let k=d.get(U);k===void 0&&(k={},d.set(U,k));const ie=ce(g);if(ie!==_.__cacheKey){k[ie]===void 0&&(k[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),k[ie].usedTimes++;const _e=k[_.__cacheKey];_e!==void 0&&(k[_.__cacheKey].usedTimes--,_e.usedTimes===0&&N(g)),_.__cacheKey=ie,_.__webglTexture=k[ie].texture}return L}function ye(_,g,L){let U=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(U=35866),g.isData3DTexture&&(U=32879);const k=Fe(_,g),ie=g.source;t.bindTexture(U,_.__webglTexture,33984+L);const _e=i.get(ie);if(ie.version!==_e.__version||k===!0){t.activeTexture(33984+L),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const oe=E(g)&&y(g.image)===!1;let W=b(g.image,oe,!1,u);W=ae(g,W);const ve=y(W)||o,Se=s.convert(g.format,g.encoding);let ge=s.convert(g.type),be=v(g.internalFormat,Se,ge,g.encoding,g.isVideoTexture);Y(U,g,ve);let we;const Le=g.mipmaps,Ue=o&&g.isVideoTexture!==!0,Qe=_e.__version===void 0||k===!0,D=C(g,W,ve);if(g.isDepthTexture)be=6402,o?g.type===ti?be=36012:g.type===ei?be=33190:g.type===Oi?be=35056:be=33189:g.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ri&&be===6402&&g.type!==du&&g.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ei,ge=s.convert(g.type)),g.format===Hi&&be===6402&&(be=34041,g.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Oi,ge=s.convert(g.type))),Qe&&(Ue?t.texStorage2D(3553,1,be,W.width,W.height):t.texImage2D(3553,0,be,W.width,W.height,0,Se,ge,null));else if(g.isDataTexture)if(Le.length>0&&ve){Ue&&Qe&&t.texStorage2D(3553,D,be,Le[0].width,Le[0].height);for(let X=0,le=Le.length;X<le;X++)we=Le[X],Ue?t.texSubImage2D(3553,X,0,0,we.width,we.height,Se,ge,we.data):t.texImage2D(3553,X,be,we.width,we.height,0,Se,ge,we.data);g.generateMipmaps=!1}else Ue?(Qe&&t.texStorage2D(3553,D,be,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,Se,ge,W.data)):t.texImage2D(3553,0,be,W.width,W.height,0,Se,ge,W.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Qe&&t.texStorage3D(35866,D,be,Le[0].width,Le[0].height,W.depth);for(let X=0,le=Le.length;X<le;X++)we=Le[X],g.format!==Yt?Se!==null?Ue?t.compressedTexSubImage3D(35866,X,0,0,0,we.width,we.height,W.depth,Se,we.data,0,0):t.compressedTexImage3D(35866,X,be,we.width,we.height,W.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,X,0,0,0,we.width,we.height,W.depth,Se,ge,we.data):t.texImage3D(35866,X,be,we.width,we.height,W.depth,0,Se,ge,we.data)}else{Ue&&Qe&&t.texStorage2D(3553,D,be,Le[0].width,Le[0].height);for(let X=0,le=Le.length;X<le;X++)we=Le[X],g.format!==Yt?Se!==null?Ue?t.compressedTexSubImage2D(3553,X,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(3553,X,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,X,0,0,we.width,we.height,Se,ge,we.data):t.texImage2D(3553,X,be,we.width,we.height,0,Se,ge,we.data)}else if(g.isDataArrayTexture)Ue?(Qe&&t.texStorage3D(35866,D,be,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,Se,ge,W.data)):t.texImage3D(35866,0,be,W.width,W.height,W.depth,0,Se,ge,W.data);else if(g.isData3DTexture)Ue?(Qe&&t.texStorage3D(32879,D,be,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,Se,ge,W.data)):t.texImage3D(32879,0,be,W.width,W.height,W.depth,0,Se,ge,W.data);else if(g.isFramebufferTexture){if(Qe)if(Ue)t.texStorage2D(3553,D,be,W.width,W.height);else{let X=W.width,le=W.height;for(let Me=0;Me<D;Me++)t.texImage2D(3553,Me,be,X,le,0,Se,ge,null),X>>=1,le>>=1}}else if(Le.length>0&&ve){Ue&&Qe&&t.texStorage2D(3553,D,be,Le[0].width,Le[0].height);for(let X=0,le=Le.length;X<le;X++)we=Le[X],Ue?t.texSubImage2D(3553,X,0,0,Se,ge,we):t.texImage2D(3553,X,be,Se,ge,we);g.generateMipmaps=!1}else Ue?(Qe&&t.texStorage2D(3553,D,be,W.width,W.height),t.texSubImage2D(3553,0,0,0,Se,ge,W)):t.texImage2D(3553,0,be,Se,ge,W);P(g,ve)&&F(U),_e.__version=ie.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Ae(_,g,L){if(g.image.length!==6)return;const U=Fe(_,g),k=g.source;t.bindTexture(34067,_.__webglTexture,33984+L);const ie=i.get(k);if(k.version!==ie.__version||U===!0){t.activeTexture(33984+L),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,W=[];for(let X=0;X<6;X++)!_e&&!oe?W[X]=b(g.image[X],!1,!0,c):W[X]=oe?g.image[X].image:g.image[X],W[X]=ae(g,W[X]);const ve=W[0],Se=y(ve)||o,ge=s.convert(g.format,g.encoding),be=s.convert(g.type),we=v(g.internalFormat,ge,be,g.encoding),Le=o&&g.isVideoTexture!==!0,Ue=ie.__version===void 0||U===!0;let Qe=C(g,ve,Se);Y(34067,g,Se);let D;if(_e){Le&&Ue&&t.texStorage2D(34067,Qe,we,ve.width,ve.height);for(let X=0;X<6;X++){D=W[X].mipmaps;for(let le=0;le<D.length;le++){const Me=D[le];g.format!==Yt?ge!==null?Le?t.compressedTexSubImage2D(34069+X,le,0,0,Me.width,Me.height,ge,Me.data):t.compressedTexImage2D(34069+X,le,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+X,le,0,0,Me.width,Me.height,ge,be,Me.data):t.texImage2D(34069+X,le,we,Me.width,Me.height,0,ge,be,Me.data)}}}else{D=g.mipmaps,Le&&Ue&&(D.length>0&&Qe++,t.texStorage2D(34067,Qe,we,W[0].width,W[0].height));for(let X=0;X<6;X++)if(oe){Le?t.texSubImage2D(34069+X,0,0,0,W[X].width,W[X].height,ge,be,W[X].data):t.texImage2D(34069+X,0,we,W[X].width,W[X].height,0,ge,be,W[X].data);for(let le=0;le<D.length;le++){const Te=D[le].image[X].image;Le?t.texSubImage2D(34069+X,le+1,0,0,Te.width,Te.height,ge,be,Te.data):t.texImage2D(34069+X,le+1,we,Te.width,Te.height,0,ge,be,Te.data)}}else{Le?t.texSubImage2D(34069+X,0,0,0,ge,be,W[X]):t.texImage2D(34069+X,0,we,ge,be,W[X]);for(let le=0;le<D.length;le++){const Me=D[le];Le?t.texSubImage2D(34069+X,le+1,0,0,ge,be,Me.image[X]):t.texImage2D(34069+X,le+1,we,ge,be,Me.image[X])}}}P(g,Se)&&F(34067),ie.__version=k.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function xe(_,g,L,U,k){const ie=s.convert(L.format,L.encoding),_e=s.convert(L.type),oe=v(L.internalFormat,ie,_e,L.encoding);i.get(g).__hasExternalTextures||(k===32879||k===35866?t.texImage3D(k,0,oe,g.width,g.height,g.depth,0,ie,_e,null):t.texImage2D(k,0,oe,g.width,g.height,0,ie,_e,null)),t.bindFramebuffer(36160,_),se(g)?h.framebufferTexture2DMultisampleEXT(36160,U,k,i.get(L).__webglTexture,0,$(g)):(k===3553||k>=34069&&k<=34074)&&n.framebufferTexture2D(36160,U,k,i.get(L).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(_,g,L){if(n.bindRenderbuffer(36161,_),g.depthBuffer&&!g.stencilBuffer){let U=33189;if(L||se(g)){const k=g.depthTexture;k&&k.isDepthTexture&&(k.type===ti?U=36012:k.type===ei&&(U=33190));const ie=$(g);se(g)?h.renderbufferStorageMultisampleEXT(36161,ie,U,g.width,g.height):n.renderbufferStorageMultisample(36161,ie,U,g.width,g.height)}else n.renderbufferStorage(36161,U,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,_)}else if(g.depthBuffer&&g.stencilBuffer){const U=$(g);L&&se(g)===!1?n.renderbufferStorageMultisample(36161,U,35056,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(36161,U,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,_)}else{const U=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let k=0;k<U.length;k++){const ie=U[k],_e=s.convert(ie.format,ie.encoding),oe=s.convert(ie.type),W=v(ie.internalFormat,_e,oe,ie.encoding),ve=$(g);L&&se(g)===!1?n.renderbufferStorageMultisample(36161,ve,W,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(36161,ve,W,g.width,g.height):n.renderbufferStorage(36161,W,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function Pe(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const U=i.get(g.depthTexture).__webglTexture,k=$(g);if(g.depthTexture.format===ri)se(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,U,0,k):n.framebufferTexture2D(36160,36096,3553,U,0);else if(g.depthTexture.format===Hi)se(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,U,0,k):n.framebufferTexture2D(36160,33306,3553,U,0);else throw new Error("Unknown depthTexture format")}function S(_){const g=i.get(_),L=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Pe(g.__webglFramebuffer,_)}else if(L){g.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(36160,g.__webglFramebuffer[U]),g.__webglDepthbuffer[U]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[U],_,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function A(_,g,L){const U=i.get(_);g!==void 0&&xe(U.__webglFramebuffer,_,_.texture,36064,3553),L!==void 0&&S(_)}function z(_){const g=_.texture,L=i.get(_),U=i.get(g);_.addEventListener("dispose",ue),_.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=g.version,a.memory.textures++);const k=_.isWebGLCubeRenderTarget===!0,ie=_.isWebGLMultipleRenderTargets===!0,_e=y(_)||o;if(k){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)L.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(L.__webglFramebuffer=n.createFramebuffer(),ie)if(r.drawBuffers){const oe=_.texture;for(let W=0,ve=oe.length;W<ve;W++){const Se=i.get(oe[W]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&se(_)===!1){const oe=ie?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer);for(let W=0;W<oe.length;W++){const ve=oe[W];L.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(36161,L.__webglColorRenderbuffer[W]);const Se=s.convert(ve.format,ve.encoding),ge=s.convert(ve.type),be=v(ve.internalFormat,Se,ge,ve.encoding,_.isXRRenderTarget===!0),we=$(_);n.renderbufferStorageMultisample(36161,we,be,_.width,_.height),n.framebufferRenderbuffer(36160,36064+W,36161,L.__webglColorRenderbuffer[W])}n.bindRenderbuffer(36161,null),_.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(L.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}}if(k){t.bindTexture(34067,U.__webglTexture),Y(34067,g,_e);for(let oe=0;oe<6;oe++)xe(L.__webglFramebuffer[oe],_,g,36064,34069+oe);P(g,_e)&&F(34067),t.unbindTexture()}else if(ie){const oe=_.texture;for(let W=0,ve=oe.length;W<ve;W++){const Se=oe[W],ge=i.get(Se);t.bindTexture(3553,ge.__webglTexture),Y(3553,Se,_e),xe(L.__webglFramebuffer,_,Se,36064+W,3553),P(Se,_e)&&F(3553)}t.unbindTexture()}else{let oe=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?oe=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,U.__webglTexture),Y(oe,g,_e),xe(L.__webglFramebuffer,_,g,36064,oe),P(g,_e)&&F(oe),t.unbindTexture()}_.depthBuffer&&S(_)}function Q(_){const g=y(_)||o,L=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let U=0,k=L.length;U<k;U++){const ie=L[U];if(P(ie,g)){const _e=_.isWebGLCubeRenderTarget?34067:3553,oe=i.get(ie).__webglTexture;t.bindTexture(_e,oe),F(_e),t.unbindTexture()}}}function Z(_){if(o&&_.samples>0&&se(_)===!1){const g=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],L=_.width,U=_.height;let k=16384;const ie=[],_e=_.stencilBuffer?33306:36096,oe=i.get(_),W=_.isWebGLMultipleRenderTargets===!0;if(W)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){ie.push(36064+ve),_.depthBuffer&&ie.push(_e);const Se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Se===!1&&(_.depthBuffer&&(k|=256),_.stencilBuffer&&(k|=1024)),W&&n.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ve]),Se===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),W){const ge=i.get(g[ve]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ge,0)}n.blitFramebuffer(0,0,L,U,0,0,L,U,k,9728),m&&n.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ve,36161,oe.__webglColorRenderbuffer[ve]);const Se=i.get(g[ve]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ve,3553,Se,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function $(_){return Math.min(f,_.samples)}function se(_){const g=i.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(_){const g=a.render.frame;x.get(_)!==g&&(x.set(_,g),_.update())}function ae(_,g){const L=_.encoding,U=_.format,k=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Bo||L!==ci&&(L===Ke?o===!1?e.has("EXT_sRGB")===!0&&U===Yt?(_.format=Bo,_.minFilter=Bt,_.generateMipmaps=!1):g=gu.sRGBToLinear(g):(U!==Yt||k!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",L)),g}this.allocateTextureUnit=G,this.resetTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=de,this.rebindTextures=A,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=se}function r0(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===li)return 5121;if(s===Yd)return 32819;if(s===$d)return 32820;if(s===qd)return 5120;if(s===Xd)return 5122;if(s===du)return 5123;if(s===jd)return 5124;if(s===ei)return 5125;if(s===ti)return 5126;if(s===vr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Kd)return 6406;if(s===Yt)return 6408;if(s===Jd)return 6409;if(s===Qd)return 6410;if(s===ri)return 6402;if(s===Hi)return 34041;if(s===Zd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Bo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ep)return 6403;if(s===tp)return 36244;if(s===np)return 33319;if(s===ip)return 33320;if(s===rp)return 36249;if(s===qs||s===Xs||s===js||s===Ys)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tl||s===nl||s===il||s===rl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sl||s===ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sl)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ol)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===al||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl||s===Ml)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===al)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ll)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ml)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_l)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ml)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===yl)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Oi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class s0 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),M=this._getHandJoint(c,p);d!==null&&(M.matrix.fromArray(d.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=d.radius),M.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class a0 extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=ei),i===void 0&&u===Hi&&(i=Oi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class l0 extends Wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const M=[],T=[],b=new Set,y=new Map,E=new Xt;E.layers.enable(1),E.viewport=new ft;const P=new Xt;P.layers.enable(2),P.viewport=new ft;const F=[E,P],v=new s0;v.layers.enable(1),v.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let H=M[q];return H===void 0&&(H=new So,M[q]=H),H.getTargetRaySpace()},this.getControllerGrip=function(q){let H=M[q];return H===void 0&&(H=new So,M[q]=H),H.getGripSpace()},this.getHand=function(q){let H=M[q];return H===void 0&&(H=new So,M[q]=H),H.getHandSpace()};function ee(q){const H=T.indexOf(q.inputSource);if(H===-1)return;const de=M[H];de!==void 0&&de.dispatchEvent({type:q.type,data:q.inputSource})}function ue(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",B);for(let q=0;q<M.length;q++){const H=T[q];H!==null&&(T[q]=null,M[q].disconnect(H))}C=null,I=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:h}),d=new ui(h.framebufferWidth,h.framebufferHeight,{format:Yt,type:li,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let H=null,de=null,he=null;x.depth&&(he=x.stencil?35056:33190,H=x.stencil?Hi:ri,de=x.stencil?Oi:ei);const me={colorFormat:32856,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(me),r.updateRenderState({layers:[f]}),d=new ui(f.textureWidth,f.textureHeight,{format:Yt,type:li,depthTexture:new a0(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Y=e.properties.get(d);Y.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(q){for(let H=0;H<q.removed.length;H++){const de=q.removed[H],he=T.indexOf(de);he>=0&&(T[he]=null,M[he].disconnect(de))}for(let H=0;H<q.added.length;H++){const de=q.added[H];let he=T.indexOf(de);if(he===-1){for(let Y=0;Y<M.length;Y++)if(Y>=T.length){T.push(de),he=Y;break}else if(T[Y]===null){T[Y]=de,he=Y;break}if(he===-1)break}const me=M[he];me&&me.connect(de)}}const N=new V,J=new V;function ne(q,H,de){N.setFromMatrixPosition(H.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const he=N.distanceTo(J),me=H.projectionMatrix.elements,Y=de.projectionMatrix.elements,Fe=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),Ae=(me[9]+1)/me[5],xe=(me[9]-1)/me[5],Ve=(me[8]-1)/me[0],Pe=(Y[8]+1)/Y[0],S=Fe*Ve,A=Fe*Pe,z=he/(-Ve+Pe),Q=z*-Ve;H.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Q),q.translateZ(z),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Z=Fe+z,$=ye+z,se=S-Q,fe=A+(he-Q),ae=Ae*ye/$*Z,_=xe*ye/$*Z;q.projectionMatrix.makePerspective(se,fe,ae,_,Z,$)}function te(q,H){H===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(H.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;v.near=P.near=E.near=q.near,v.far=P.far=E.far=q.far,(C!==v.near||I!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,I=v.far);const H=q.parent,de=v.cameras;te(v,H);for(let me=0;me<de.length;me++)te(de[me],H);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),q.matrix.copy(v.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const he=q.children;for(let me=0,Y=he.length;me<Y;me++)he[me].updateMatrixWorld(!0);de.length===2?ne(v,E,P):v.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(q){f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.getPlanes=function(){return b};let G=null;function ce(q,H){if(c=H.getViewerPose(l||a),m=H,c!==null){const de=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let he=!1;de.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let me=0;me<de.length;me++){const Y=de[me];let Fe=null;if(h!==null)Fe=h.getViewport(Y);else{const Ae=u.getViewSubImage(f,Y);Fe=Ae.viewport,me===0&&(e.setRenderTargetTextures(d,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(d))}let ye=F[me];ye===void 0&&(ye=new Xt,ye.layers.enable(me),ye.viewport=new ft,F[me]=ye),ye.matrix.fromArray(Y.transform.matrix),ye.projectionMatrix.fromArray(Y.projectionMatrix),ye.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&v.matrix.copy(ye.matrix),he===!0&&v.cameras.push(ye)}}for(let de=0;de<M.length;de++){const he=T[de],me=M[de];he!==null&&me!==void 0&&me.update(he,H,l||a)}if(G&&G(q,H),H.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let de=null;for(const he of b)H.detectedPlanes.has(he)||(de===null&&(de=[]),de.push(he));if(de!==null)for(const he of de)b.delete(he),y.delete(he),i.dispatchEvent({type:"planeremoved",data:he});for(const he of H.detectedPlanes)if(!b.has(he))b.add(he),y.set(he,H.lastChangedTime),i.dispatchEvent({type:"planeadded",data:he});else{const me=y.get(he);he.lastChangedTime>me&&(y.set(he,he.lastChangedTime),i.dispatchEvent({type:"planechanged",data:he}))}}m=null}const re=new Au;re.setAnimationLoop(ce),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}}function c0(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,bu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,M,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,M,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function u0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(T,b){const y=b.program;i.uniformBlockBinding(T,y)}function c(T,b){let y=r[T.id];y===void 0&&(x(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",d));const E=b.program;i.updateUBOMapping(T,E);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function u(T){const b=f();T.__bindingPointIndex=b;const y=n.createBuffer(),E=T.__size,P=T.usage;return n.bindBuffer(35345,y),n.bufferData(35345,E,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,b,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=r[T.id],y=T.uniforms,E=T.__cache;n.bindBuffer(35345,b);for(let P=0,F=y.length;P<F;P++){const v=y[P];if(m(v,P,E)===!0){const C=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let ee=0;for(let ue=0;ue<I.length;ue++){const B=I[ue],N=p(B);typeof B=="number"?(v.__data[0]=B,n.bufferSubData(35345,C+ee,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=B.elements[0],v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=B.elements[0],v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=B.elements[0]):(B.toArray(v.__data,ee),ee+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,v.__data)}}n.bindBuffer(35345,null)}function m(T,b,y){const E=T.value;if(y[b]===void 0){if(typeof E=="number")y[b]=E;else{const P=Array.isArray(E)?E:[E],F=[];for(let v=0;v<P.length;v++)F.push(P[v].clone());y[b]=F}return!0}else if(typeof E=="number"){if(y[b]!==E)return y[b]=E,!0}else{const P=Array.isArray(y[b])?y[b]:[y[b]],F=Array.isArray(E)?E:[E];for(let v=0;v<P.length;v++){const C=P[v];if(C.equals(F[v])===!1)return C.copy(F[v]),!0}}return!1}function x(T){const b=T.uniforms;let y=0;const E=16;let P=0;for(let F=0,v=b.length;F<v;F++){const C=b[F],I={boundary:0,storage:0},ee=Array.isArray(C.value)?C.value:[C.value];for(let ue=0,B=ee.length;ue<B;ue++){const N=ee[ue],J=p(N);I.boundary+=J.boundary,I.storage+=J.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,F>0){P=y%E;const ue=E-P;P!==0&&ue-I.boundary<0&&(y+=E-P,C.__offset=y)}y+=I.storage}return P=y%E,P>0&&(y+=E-P),T.__size=y,T.__cache={},this}function p(T){const b={boundary:0,storage:0};return typeof T=="number"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function d(T){const b=T.target;b.removeEventListener("dispose",d);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function M(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}function f0(){const n=ms("canvas");return n.style.display="block",n}function h0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:f0(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const p=this;let d=!1,M=0,T=0,b=null,y=-1,E=null;const P=new ft,F=new ft;let v=null,C=e.width,I=e.height,ee=1,ue=null,B=null;const N=new ft(0,0,C,I),J=new ft(0,0,C,I);let ne=!1;const te=new Eu;let G=!1,ce=!1,re=null;const q=new ht,H=new $e,de=new V,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return b===null?ee:1}let Y=t;function Fe(w,O){for(let j=0;j<w.length;j++){const R=w[j],K=e.getContext(R,O);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Le,!1),Y===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),Y=Fe(O,w),Y===null)throw Fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Ae,xe,Ve,Pe,S,A,z,Q,Z,$,se,fe,ae,_,g,L,U,k,ie,_e,oe,W,ve;function Se(){ye=new S_(Y),Ae=new m_(Y,ye,n),ye.init(Ae),oe=new r0(Y,ye,Ae),xe=new n0(Y,ye,Ae),Ve=new T_,Pe=new Hx,S=new i0(Y,ye,xe,Pe,Ae,oe,Ve),A=new __(p),z=new y_(p),Q=new Ip(Y,Ae),W=new d_(Y,ye,Q,Ae),Z=new b_(Y,Q,Ve,W),$=new L_(Y,Z,Q,Ve),k=new C_(Y,Ae,S),g=new g_(Pe),se=new Vx(p,A,z,ye,Ae,W,g),fe=new c0(p,Pe),ae=new Wx,_=new Kx(ye,Ae),U=new h_(p,A,z,xe,$,u,a),L=new t0(p,$,Ae),ve=new u0(Y,Ve,Ae,xe),ie=new p_(Y,ye,Ve,Ae),_e=new w_(Y,ye,Ve,Ae),Ve.programs=se.programs,p.capabilities=Ae,p.extensions=ye,p.properties=Pe,p.renderLists=ae,p.shadowMap=L,p.state=xe,p.info=Ve}Se();const ge=new l0(p,Y);this.xr=ge,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(C,I,!1))},this.getSize=function(w){return w.set(C,I)},this.setSize=function(w,O,j){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=w,I=O,e.width=Math.floor(w*ee),e.height=Math.floor(O*ee),j!==!1&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(C*ee,I*ee).floor()},this.setDrawingBufferSize=function(w,O,j){C=w,I=O,ee=j,e.width=Math.floor(w*j),e.height=Math.floor(O*j),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,O,j,R){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,O,j,R),xe.viewport(P.copy(N).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,O,j,R){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,O,j,R),xe.scissor(F.copy(J).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){xe.setScissorTest(ne=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(w=!0,O=!0,j=!0){let R=0;w&&(R|=16384),O&&(R|=256),j&&(R|=1024),Y.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ae.dispose(),_.dispose(),Pe.dispose(),A.dispose(),z.dispose(),$.dispose(),W.dispose(),ve.dispose(),se.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Me),ge.removeEventListener("sessionend",Te),re&&(re.dispose(),re=null),ke.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ve.autoReset,O=L.enabled,j=L.autoUpdate,R=L.needsUpdate,K=L.type;Se(),Ve.autoReset=w,L.enabled=O,L.autoUpdate=j,L.needsUpdate=R,L.type=K}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const O=w.target;O.removeEventListener("dispose",Ue),Qe(O)}function Qe(w){D(w),Pe.remove(w)}function D(w){const O=Pe.get(w).programs;O!==void 0&&(O.forEach(function(j){se.releaseProgram(j)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,j,R,K,Ee){O===null&&(O=he);const De=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Iu(w,O,j,R,K);xe.setMaterial(R,De);let Oe=j.index,He=1;R.wireframe===!0&&(Oe=Z.getWireframeAttribute(j),He=2);const ze=j.drawRange,Be=j.attributes.position;let et=ze.start*He,At=(ze.start+ze.count)*He;Ee!==null&&(et=Math.max(et,Ee.start*He),At=Math.min(At,(Ee.start+Ee.count)*He)),Oe!==null?(et=Math.max(et,0),At=Math.min(At,Oe.count)):Be!=null&&(et=Math.max(et,0),At=Math.min(At,Be.count));const hn=At-et;if(hn<0||hn===1/0)return;W.setup(K,R,Ne,j,Oe);let Hn,tt=ie;if(Oe!==null&&(Hn=Q.get(Oe),tt=_e,tt.setIndex(Hn)),K.isMesh)R.wireframe===!0?(xe.setLineWidth(R.wireframeLinewidth*me()),tt.setMode(1)):tt.setMode(4);else if(K.isLine){let Ge=R.linewidth;Ge===void 0&&(Ge=1),xe.setLineWidth(Ge*me()),K.isLineSegments?tt.setMode(1):K.isLineLoop?tt.setMode(2):tt.setMode(3)}else K.isPoints?tt.setMode(0):K.isSprite&&tt.setMode(4);if(K.isInstancedMesh)tt.renderInstances(et,hn,K.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ls=Math.min(j.instanceCount,Ge);tt.renderInstances(et,hn,Ls)}else tt.render(et,hn)},this.compile=function(w,O){function j(R,K,Ee){R.transparent===!0&&R.side===Ir?(R.side=Ht,R.needsUpdate=!0,Ut(R,K,Ee),R.side=ai,R.needsUpdate=!0,Ut(R,K,Ee),R.side=Ir):Ut(R,K,Ee)}h=_.get(w),h.init(),x.push(h),w.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(R){const K=R.material;if(K)if(Array.isArray(K))for(let Ee=0;Ee<K.length;Ee++){const De=K[Ee];j(De,w,R)}else j(K,w,R)}),x.pop(),h=null};let X=null;function le(w){X&&X(w)}function Me(){ke.stop()}function Te(){ke.start()}const ke=new Au;ke.setAnimationLoop(le),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(w){X=w,ge.setAnimationLoop(w),w===null?ke.stop():ke.start()},ge.addEventListener("sessionstart",Me),ge.addEventListener("sessionend",Te),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(O),O=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,O,b),h=_.get(w,x.length),h.init(),x.push(h),q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(q),ce=this.localClippingEnabled,G=g.init(this.clippingPlanes,ce,O),f=ae.get(w,m.length),f.init(),m.push(f),at(w,O,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ue,B),G===!0&&g.beginShadows();const j=h.state.shadowsArray;if(L.render(j,w,O),G===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(f,w),h.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const R=O.cameras;for(let K=0,Ee=R.length;K<Ee;K++){const De=R[K];dt(f,w,De,De.viewport)}}else dt(f,w,O);b!==null&&(S.updateMultisampleRenderTarget(b),S.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(p,w,O),W.resetDefaultState(),y=-1,E=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function at(w,O,j,R){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){R&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const De=$.update(w),Ne=w.material;Ne.visible&&f.push(w,De,Ne,j,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ve.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ve.render.frame),!w.frustumCulled||te.intersectsObject(w))){R&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const De=$.update(w),Ne=w.material;if(Array.isArray(Ne)){const Oe=De.groups;for(let He=0,ze=Oe.length;He<ze;He++){const Be=Oe[He],et=Ne[Be.materialIndex];et&&et.visible&&f.push(w,De,et,j,de.z,Be)}}else Ne.visible&&f.push(w,De,Ne,j,de.z,null)}}const Ee=w.children;for(let De=0,Ne=Ee.length;De<Ne;De++)at(Ee[De],O,j,R)}function dt(w,O,j,R){const K=w.opaque,Ee=w.transmissive,De=w.transparent;h.setupLightsView(j),Ee.length>0&&Vn(K,O,j),R&&xe.viewport(P.copy(R)),K.length>0&&Ze(K,O,j),Ee.length>0&&Ze(Ee,O,j),De.length>0&&Ze(De,O,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Vn(w,O,j){const R=Ae.isWebGL2;re===null&&(re=new ui(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?vr:li,minFilter:xr,samples:R&&s===!0?4:0})),p.getDrawingBufferSize(H),R?re.setSize(H.x,H.y):re.setSize(Go(H.x),Go(H.y));const K=p.getRenderTarget();p.setRenderTarget(re),p.clear();const Ee=p.toneMapping;p.toneMapping=En,Ze(w,O,j),p.toneMapping=Ee,S.updateMultisampleRenderTarget(re),S.updateRenderTargetMipmap(re),p.setRenderTarget(K)}function Ze(w,O,j){const R=O.isScene===!0?O.overrideMaterial:null;for(let K=0,Ee=w.length;K<Ee;K++){const De=w[K],Ne=De.object,Oe=De.geometry,He=R===null?De.material:R,ze=De.group;Ne.layers.test(j.layers)&&fn(Ne,O,j,Oe,He,ze)}}function fn(w,O,j,R,K,Ee){w.onBeforeRender(p,O,j,R,K,Ee),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(p,O,j,R,w,Ee),K.transparent===!0&&K.side===Ir?(K.side=Ht,K.needsUpdate=!0,p.renderBufferDirect(j,O,R,K,w,Ee),K.side=ai,K.needsUpdate=!0,p.renderBufferDirect(j,O,R,K,w,Ee),K.side=Ir):p.renderBufferDirect(j,O,R,K,w,Ee),w.onAfterRender(p,O,j,R,K,Ee)}function Ut(w,O,j){O.isScene!==!0&&(O=he);const R=Pe.get(w),K=h.state.lights,Ee=h.state.shadowsArray,De=K.state.version,Ne=se.getParameters(w,K.state,Ee,O,j),Oe=se.getProgramCacheKey(Ne);let He=R.programs;R.environment=w.isMeshStandardMaterial?O.environment:null,R.fog=O.fog,R.envMap=(w.isMeshStandardMaterial?z:A).get(w.envMap||R.environment),He===void 0&&(w.addEventListener("dispose",Ue),He=new Map,R.programs=He);let ze=He.get(Oe);if(ze!==void 0){if(R.currentProgram===ze&&R.lightsStateVersion===De)return da(w,Ne),ze}else Ne.uniforms=se.getUniforms(w),w.onBuild(j,Ne,p),w.onBeforeCompile(Ne,p),ze=se.acquireProgram(Ne,Oe),He.set(Oe,ze),R.uniforms=Ne.uniforms;const Be=R.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=g.uniform),da(w,Ne),R.needsLights=Nu(w),R.lightsStateVersion=De,R.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix);const et=ze.getUniforms(),At=os.seqWithValue(et.seq,Be);return R.currentProgram=ze,R.uniformsList=At,ze}function da(w,O){const j=Pe.get(w);j.outputEncoding=O.outputEncoding,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Iu(w,O,j,R,K){O.isScene!==!0&&(O=he),S.resetTextureUnits();const Ee=O.fog,De=R.isMeshStandardMaterial?O.environment:null,Ne=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:ci,Oe=(R.isMeshStandardMaterial?z:A).get(R.envMap||De),He=R.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!R.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,At=!!j.morphAttributes.color,hn=R.toneMapped?p.toneMapping:En,Hn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=Hn!==void 0?Hn.length:0,Ge=Pe.get(R),Ls=h.state.lights;if(G===!0&&(ce===!0||w!==E)){const Ct=w===E&&R.id===y;g.setState(R,w,Ct)}let lt=!1;R.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ls.state.version||Ge.outputEncoding!==Ne||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Oe||R.fog===!0&&Ge.fog!==Ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==g.numPlanes||Ge.numIntersection!==g.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ze||Ge.morphTargets!==Be||Ge.morphNormals!==et||Ge.morphColors!==At||Ge.toneMapping!==hn||Ae.isWebGL2===!0&&Ge.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,Ge.__version=R.version);let kn=Ge.currentProgram;lt===!0&&(kn=Ut(R,O,K));let pa=!1,Xi=!1,Ds=!1;const _t=kn.getUniforms(),Wn=Ge.uniforms;if(xe.useProgram(kn.program)&&(pa=!0,Xi=!0,Ds=!0),R.id!==y&&(y=R.id,Xi=!0),pa||E!==w){if(_t.setValue(Y,"projectionMatrix",w.projectionMatrix),Ae.logarithmicDepthBuffer&&_t.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,Xi=!0,Ds=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const Ct=_t.map.cameraPosition;Ct!==void 0&&Ct.setValue(Y,de.setFromMatrixPosition(w.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&_t.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||K.isSkinnedMesh)&&_t.setValue(Y,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){_t.setOptional(Y,K,"bindMatrix"),_t.setOptional(Y,K,"bindMatrixInverse");const Ct=K.skeleton;Ct&&(Ae.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),_t.setValue(Y,"boneTexture",Ct.boneTexture,S),_t.setValue(Y,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=j.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Ae.isWebGL2===!0)&&k.update(K,j,R,kn),(Xi||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,_t.setValue(Y,"receiveShadow",K.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Wn.envMap.value=Oe,Wn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Xi&&(_t.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Fu(Wn,Ds),Ee&&R.fog===!0&&fe.refreshFogUniforms(Wn,Ee),fe.refreshMaterialUniforms(Wn,R,ee,I,re),os.upload(Y,Ge.uniformsList,Wn,S)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(os.upload(Y,Ge.uniformsList,Wn,S),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&_t.setValue(Y,"center",K.center),_t.setValue(Y,"modelViewMatrix",K.modelViewMatrix),_t.setValue(Y,"normalMatrix",K.normalMatrix),_t.setValue(Y,"modelMatrix",K.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Ct=R.uniformsGroups;for(let Rs=0,Ou=Ct.length;Rs<Ou;Rs++)if(Ae.isWebGL2){const ma=Ct[Rs];ve.update(ma,kn),ve.bind(ma,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function Fu(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Nu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,O,j){Pe.get(w.texture).__webglTexture=O,Pe.get(w.depthTexture).__webglTexture=j;const R=Pe.get(w);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=j===void 0,R.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const j=Pe.get(w);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,j=0){b=w,M=O,T=j;let R=!0,K=null,Ee=!1,De=!1;if(w){const Oe=Pe.get(w);Oe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),R=!1):Oe.__webglFramebuffer===void 0?S.setupRenderTarget(w):Oe.__hasExternalTextures&&S.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const ze=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=ze[O],Ee=!0):Ae.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?K=Pe.get(w).__webglMultisampledFramebuffer:K=ze,P.copy(w.viewport),F.copy(w.scissor),v=w.scissorTest}else P.copy(N).multiplyScalar(ee).floor(),F.copy(J).multiplyScalar(ee).floor(),v=ne;if(xe.bindFramebuffer(36160,K)&&Ae.drawBuffers&&R&&xe.drawBuffers(w,K),xe.viewport(P),xe.scissor(F),xe.setScissorTest(v),Ee){const Oe=Pe.get(w.texture);Y.framebufferTexture2D(36160,36064,34069+O,Oe.__webglTexture,j)}else if(De){const Oe=Pe.get(w.texture),He=O||0;Y.framebufferTextureLayer(36160,36064,Oe.__webglTexture,j||0,He)}y=-1},this.readRenderTargetPixels=function(w,O,j,R,K,Ee,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){xe.bindFramebuffer(36160,Ne);try{const Oe=w.texture,He=Oe.format,ze=Oe.type;if(He!==Yt&&oe.convert(He)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===vr&&(ye.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==li&&oe.convert(ze)!==Y.getParameter(35738)&&!(ze===ti&&(Ae.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-R&&j>=0&&j<=w.height-K&&Y.readPixels(O,j,R,K,oe.convert(He),oe.convert(ze),Ee)}finally{const Oe=b!==null?Pe.get(b).__webglFramebuffer:null;xe.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(w,O,j=0){const R=Math.pow(2,-j),K=Math.floor(O.image.width*R),Ee=Math.floor(O.image.height*R);S.setTexture2D(O,0),Y.copyTexSubImage2D(3553,j,0,0,w.x,w.y,K,Ee),xe.unbindTexture()},this.copyTextureToTexture=function(w,O,j,R=0){const K=O.image.width,Ee=O.image.height,De=oe.convert(j.format),Ne=oe.convert(j.type);S.setTexture2D(j,0),Y.pixelStorei(37440,j.flipY),Y.pixelStorei(37441,j.premultiplyAlpha),Y.pixelStorei(3317,j.unpackAlignment),O.isDataTexture?Y.texSubImage2D(3553,R,w.x,w.y,K,Ee,De,Ne,O.image.data):O.isCompressedTexture?Y.compressedTexSubImage2D(3553,R,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,De,O.mipmaps[0].data):Y.texSubImage2D(3553,R,w.x,w.y,De,Ne,O.image),R===0&&j.generateMipmaps&&Y.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,j,R,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Oe=oe.convert(R.format),He=oe.convert(R.type);let ze;if(R.isData3DTexture)S.setTexture3D(R,0),ze=32879;else if(R.isDataArrayTexture)S.setTexture2DArray(R,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,R.flipY),Y.pixelStorei(37441,R.premultiplyAlpha),Y.pixelStorei(3317,R.unpackAlignment);const Be=Y.getParameter(3314),et=Y.getParameter(32878),At=Y.getParameter(3316),hn=Y.getParameter(3315),Hn=Y.getParameter(32877),tt=j.isCompressedTexture?j.mipmaps[0]:j.image;Y.pixelStorei(3314,tt.width),Y.pixelStorei(32878,tt.height),Y.pixelStorei(3316,w.min.x),Y.pixelStorei(3315,w.min.y),Y.pixelStorei(32877,w.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(ze,K,O.x,O.y,O.z,Ee,De,Ne,Oe,He,tt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ze,K,O.x,O.y,O.z,Ee,De,Ne,Oe,tt.data)):Y.texSubImage3D(ze,K,O.x,O.y,O.z,Ee,De,Ne,Oe,He,tt),Y.pixelStorei(3314,Be),Y.pixelStorei(32878,et),Y.pixelStorei(3316,At),Y.pixelStorei(3315,hn),Y.pixelStorei(32877,Hn),K===0&&R.generateMipmaps&&Y.generateMipmap(ze),xe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){M=0,T=0,b=null,xe.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class d0 extends h0{}d0.prototype.isWebGL1Renderer=!0;class E0 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ru extends Gn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new V,h=new V,m=[],x=[],p=[],d=[];for(let M=0;M<=i;M++){const T=[],b=M/i;let y=0;M==0&&a==0?y=.5/t:M==i&&l==Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const P=E/t;f.x=-e*Math.cos(r+P*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+b*o),x.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(P+y,1-b),T.push(c++)}u.push(T)}for(let M=0;M<i;M++)for(let T=0;T<t;T++){const b=u[M][T+1],y=u[M][T],E=u[M+1][T],P=u[M+1][T+1];(M!==0||a>0)&&m.push(b,y,P),(M!==i-1||l<Math.PI)&&m.push(y,E,P)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(d,2))}static fromJSON(e){return new Ru(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);export{S0 as A,b0 as B,Lh as C,$u as D,wh as E,Mn as F,Eh as G,T0 as H,Mu as M,Xt as P,E0 as S,h0 as W,Hf as a,qf as b,kf as c,Gh as d,Bc as e,Ru as f,Un as g,M0 as h,_0 as i,ru as j,jo as k,g0 as l,w0 as m,Lc as n,Wf as o,Pf as p,v0 as q,p0 as r,x0 as s,Xo as t,Et as u,Df as v,zs as w,yf as x,m0 as y,y0 as z};
