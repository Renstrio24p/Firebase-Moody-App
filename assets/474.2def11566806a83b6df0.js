/*! For license information please see 474.2def11566806a83b6df0.js.LICENSE.txt */
"use strict";(self.webpackChunkstandalone_javascript=self.webpackChunkstandalone_javascript||[]).push([[474],{474:(e,t,r)=>{r.d(t,{default:()=>Ie});const n=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,h=i>>2,l=(3&i)<<4|a>>4;let d=(15&a)<<2|c>>6,u=63&c;o||(u=64,s||(d=64)),n.push(r[h],r[l],r[d],r[u])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const c=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==c)throw new s;const h=i<<2|a>>4;if(n.push(h),64!==o){const e=a<<4&240|o>>2;if(n.push(e),64!==c){const e=o<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){return function(e){const t=n(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=()=>{try{return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process)return;const e="MISSING_ENV_VAR".__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}class h extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(d,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(i,r):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new h(n,a,r)}}const d=/\{\$([^}]+)}/g;function u(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const r=e[i],s=t[i];if(p(r)&&p(s)){if(!u(r,s))return!1}else if(r!==s)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function p(e){return null!==e&&"object"==typeof e}class f{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const g="[DEFAULT]";class m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new c;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:g})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=g){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return e=this,null,t=function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])},new Promise(((r,n)=>{var i=e=>{try{a(t.next(e))}catch(e){n(e)}},s=e=>{try{a(t.throw(e))}catch(e){n(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,s);a((t=t.apply(e,null)).next())}));var e,t}isComponentSet(){return null!=this.component}isInitialized(e=g){return this.instances.has(e)}getOptions(e=g){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===g?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=g){return this.component?this.component.multipleInstances?e:g:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const _=[];var E,y;(y=E||(E={}))[y.DEBUG=0]="DEBUG",y[y.VERBOSE=1]="VERBOSE",y[y.INFO=2]="INFO",y[y.WARN=3]="WARN",y[y.ERROR=4]="ERROR",y[y.SILENT=5]="SILENT";const I={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},v=E.INFO,S={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},D=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=S[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)},w=(e,t)=>t.some((t=>e instanceof t));let C,A;const O=new WeakMap,B=new WeakMap,N=new WeakMap,L=new WeakMap,R=new WeakMap;let T={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return B.get(e);if("objectStoreNames"===t)return e.objectStoreNames||N.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return P(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function M(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(A||(A=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(V(this),e),P(O.get(this))}:function(...e){return P(t.apply(V(this),e))}:function(e,...r){const n=t.call(V(this),e,...r);return N.set(n,e.sort?e.sort():[e]),P(n)}:(e instanceof IDBTransaction&&function(e){if(B.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));B.set(e,t)}(e),w(e,C||(C=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,T):e);var t}function P(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(P(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&O.set(t,e)})).catch((()=>{})),R.set(t,e),t}(e);if(L.has(e))return L.get(e);const t=M(e);return t!==e&&(L.set(e,t),R.set(t,e)),t}const V=e=>R.get(e);var k=Object.defineProperty,$=Object.defineProperties,j=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const z=["get","getKey","getAll","getAllKeys","count"],W=["put","add","delete","clear"],G=new Map;function K(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(G.get(t))return G.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=W.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!z.includes(r))return;const s=function(e,...t){return s=this,null,a=function*(){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return n&&(a=a.index(t.shift())),(yield Promise.all([a[r](...t),i&&s.done]))[0]},new Promise(((e,t)=>{var r=e=>{try{i(a.next(e))}catch(e){t(e)}},n=e=>{try{i(a.throw(e))}catch(e){t(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,n);i((a=a.apply(s,null)).next())}));var s,a};return G.set(t,s),s}var J,Y;Y=((e,t)=>{for(var r in t||(t={}))F.call(t,r)&&U(e,r,t[r]);if(H)for(var r of H(t))x.call(t,r)&&U(e,r,t[r]);return e})({},J=T),T=$(Y,j({get:(e,t,r)=>K(e,t)||J.get(e,t,r),has:(e,t)=>!!K(e,t)||J.has(e,t)}));var q=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{o(r.next(e))}catch(e){i(e)}},a=e=>{try{o(r.throw(e))}catch(e){i(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);o((r=r.apply(e,t)).next())}));class X{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Z="@firebase/app",Q="0.9.20",ee=new class{constructor(e){this.name=e,this._logLevel=v,this._logHandler=D,this._userLogHandler=null,_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}("@firebase/app"),te={[Z]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},re=new Map,ne=new Map;function ie(e,t){try{e.container.addComponent(t)}catch(r){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function se(e){const t=e.name;if(ne.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;ne.set(t,e);for(const t of re.values())ie(t,e);return!0}const ae=new l("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});class oe{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new f("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}function ce(e,t,r){var n;let i=null!==(n=te[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ee.warn(e.join(" "))}se(new f(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}const he="firebase-heartbeat-database",le=1,de="firebase-heartbeat-store";let ue=null;function pe(){return ue||(ue=function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=P(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(P(a.result),e.oldVersion,e.newVersion,P(a.transaction),e)})),r&&a.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}(he,le,{upgrade:(e,t)=>{0===t&&e.createObjectStore(de)}}).catch((e=>{throw ae.create("idb-open",{originalErrorMessage:e.message})}))),ue}function fe(e,t){return q(this,null,(function*(){try{const r=(yield pe()).transaction(de,"readwrite"),n=r.objectStore(de);yield n.put(t,ge(e)),yield r.done}catch(e){if(e instanceof h)ee.warn(e.message);else{const t=ae.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ee.warn(t.message)}}}))}function ge(e){return`${e.name}!${e.options.appId}`}class me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}triggerHeartbeat(){return q(this,null,(function*(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=be();if(null===this._heartbeatsCache&&(this._heartbeatsCache=yield this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}))}getHeartbeatsHeader(){return q(this,null,(function*(){if(null===this._heartbeatsCache&&(yield this._heartbeatsCachePromise),null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=be(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const e=r.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ee(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Ee(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=a(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}))}}function be(){return(new Date).toISOString().substring(0,10)}class _e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return q(this,null,(function*(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}))}read(){return q(this,null,(function*(){if(yield this._canUseIndexedDBPromise){const e=yield function(e){return q(this,null,(function*(){try{const t=yield pe();return yield t.transaction(de).objectStore(de).get(ge(e))}catch(e){if(e instanceof h)ee.warn(e.message);else{const t=ae.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ee.warn(t.message)}}}))}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}))}overwrite(e){return q(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const r=yield this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}))}add(e){return q(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const r=yield this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}))}}function Ee(e){return a(JSON.stringify({version:2,heartbeats:e})).length}se(new f("platform-logger",(e=>new X(e)),"PRIVATE")),se(new f("heartbeat",(e=>new me(e)),"PRIVATE")),ce(Z,Q,""),ce(Z,Q,"esm2017"),ce("fire-js",""),ce("firebase","10.5.0","app");const ye=function(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ae.create("bad-app-name",{appName:String(i)});if(r||(r=null===(s=o())||void 0===s?void 0:s.config),!r)throw ae.create("no-options");var s;const a=re.get(i);if(a){if(u(r,a.options)&&u(n,a.config))return a;throw ae.create("duplicate-app",{appName:i})}const c=new b(i);for(const e of ne.values())c.addComponent(e);const h=new oe(r,n,c);return re.set(i,h),h}({apiKey:"MISSING_ENV_VAR".FIREBASE_API_KEY,authDomain:"MISSING_ENV_VAR".FIREBASE_AUTH_DOMAIN,projectId:"MISSING_ENV_VAR".FIREBASE_PROJECT_ID,storageBucket:"MISSING_ENV_VAR".FIREBASE_STORAGE_BUCKET,messagingSenderId:"MISSING_ENV_VAR".FIREBASE_MSG_SENDER_ID,appId:"MISSING_ENV_VAR".FIREBASE_APP_ID});ye&&console.log("Firebase Successfully Connected..");const Ie=ye}}]);