const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};ye();function z(){}function ve(t){return t()}function te(){return Object.create(null)}function M(t){t.forEach(ve)}function ke(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Le(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function P(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function $(){return W(" ")}function ze(){return W("")}function H(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ne(t,e){t.value=e==null?"":e}function J(t,e,n){t.classList[n?"add":"remove"](e)}function Ce(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}let B;function R(t){B=t}function Se(){if(!B)throw new Error("Function called outside component initialization");return B}function Ae(){const t=Se();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=Ce(e,n,{cancelable:l});return s.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}const D=[],F=[],V=[],Q=[],Ee=Promise.resolve();let U=!1;function Ie(){U||(U=!0,Ee.then(_e))}function X(t){V.push(t)}function pe(t){Q.push(t)}const G=new Set;let T=0;function _e(){const t=B;do{for(;T<D.length;){const e=D[T];T++,R(e),Oe(e.$$)}for(R(null),D.length=0,T=0;F.length;)F.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];G.has(n)||(G.add(n),n())}V.length=0}while(D.length);for(;Q.length;)Q.pop()();U=!1,G.clear(),R(t)}function Oe(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const q=new Set;let A;function K(){A={r:0,c:[],p:A}}function Z(){A.r||M(A.c),A=A.p}function w(t,e){t&&t.i&&(q.delete(t),t.i(e))}function L(t,e,n,l){if(t&&t.o){if(q.has(t))return;q.add(t),A.c.push(()=>{q.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function be(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function x(t){t&&t.c()}function E(t,e,n,l){const{fragment:s,on_mount:r,on_destroy:o,after_update:i}=t.$$;s&&s.m(e,n),l||X(()=>{const u=r.map(ve).filter(ke);o?o.push(...u):M(u),t.$$.on_mount=[]}),i.forEach(X)}function I(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function je(t,e){t.$$.dirty[0]===-1&&(D.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,n,l,s,r,o,i=[-1]){const u=B;R(t);const g=t.$$={fragment:null,ctx:null,props:r,update:z,not_equal:s,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:te(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};o&&o(g.root);let h=!1;if(g.ctx=n?n(t,e.props||{},(f,c,...d)=>{const a=d.length?d[0]:c;return g.ctx&&s(g.ctx[f],g.ctx[f]=a)&&(!g.skip_bound&&g.bound[f]&&g.bound[f](a),h&&je(t,f)),c}):[],g.update(),h=!0,M(g.before_update),g.fragment=l?l(g.ctx):!1,e.target){if(e.hydrate){const f=$e(e.target);g.fragment&&g.fragment.l(f),f.forEach(y)}else g.fragment&&g.fragment.c();e.intro&&w(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),_e()}R(u)}class N{$destroy(){I(this,1),this.$destroy=z}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function le(t,e,n){const l=t.slice();return l[9]=e[n],l}function se(t){let e,n=t[5](t[9])+"",l,s,r,o;return{c(){e=b("option"),l=W(n),s=$(),e.__value=r=t[9],e.value=e.__value,e.disabled=o=t[0].includes(t[9])},m(i,u){k(i,e,u),p(e,l),p(e,s)},p(i,u){u&2&&n!==(n=i[5](i[9])+"")&&Y(l,n),u&2&&r!==(r=i[9])&&(e.__value=r,e.value=e.__value),u&3&&o!==(o=i[0].includes(i[9]))&&(e.disabled=o)},d(i){i&&y(e)}}}function Ne(t){let e,n,l,s,r,o,i,u,g,h=t[1],f=[];for(let c=0;c<h.length;c+=1)f[c]=se(le(t,h,c));return{c(){e=b("form"),n=b("input"),l=$(),s=b("datalist");for(let c=0;c<f.length;c+=1)f[c].c();r=$(),o=b("input"),m(n,"placeholder","Language name"),m(n,"list","languages"),m(n,"class","lang-input svelte-12w0k7s"),m(s,"id","languages"),m(o,"type","submit"),o.value="Add",o.disabled=i=!t[3],m(o,"class","lang-add svelte-12w0k7s"),m(e,"class","lang-selector svelte-12w0k7s")},m(c,d){k(c,e,d),p(e,n),ne(n,t[2]),p(e,l),p(e,s);for(let a=0;a<f.length;a+=1)f[a].m(s,null);p(e,r),p(e,o),u||(g=[H(n,"input",t[7]),H(e,"submit",t[4])],u=!0)},p(c,[d]){if(d&4&&n.value!==c[2]&&ne(n,c[2]),d&35){h=c[1];let a;for(a=0;a<h.length;a+=1){const v=le(c,h,a);f[a]?f[a].p(v,d):(f[a]=se(v),f[a].c(),f[a].m(s,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}d&8&&i!==(i=!c[3])&&(o.disabled=i)},i:z,o:z,d(c){c&&y(e),P(f,c),u=!1,M(g)}}}function xe(t,e,n){let{languages:l}=e,{selectedLanguages:s=[]}=e,r,o,i=!1;const u=Ae();function g(c){c.preventDefault(),i&&(u("submit",o),n(2,o=""))}function h(c){const d=l.get(c);return d?d.parents.join(" > "):""}function f(){o=this.value,n(2,o)}return t.$$set=c=>{"languages"in c&&n(6,l=c.languages),"selectedLanguages"in c&&n(0,s=c.selectedLanguages)},t.$$.update=()=>{t.$$.dirty&71&&(n(3,i=l.has(o)&&!s.includes(o)),n(1,r=Array.from(l.values()).map(c=>c.name)),r.sort())},[s,r,o,i,g,h,l,f]}class Me extends N{constructor(e){super(),j(this,e,xe,Ne,O,{languages:6,selectedLanguages:0})}}const re=["I","thou","he","we","you","they","this","that","here","there","who","what","where","when","how","not","all","many","some","few","other","one","two","three","four","five","big","long","wide","thick","heavy","small","short","narrow","thin","woman","man","person","child","wife","husband","mother","father","animal","fish","bird","dog","louse","snake","worm","tree","forest","stick","fruit","seed","leaf","root","bark","flower","grass","rope","skin","meat","blood","bone","fat (n.)","egg","horn","tail","feather","hair","head","ear","eye","nose","mouth","tooth","tongue","fingernail","foot","leg","knee","hand","wing","belly","guts","neck","back","breast","heart","liver","drink","eat","bite","suck","spit","vomit","blow","breathe","laugh","see","hear","know","think","smell","fear","sleep","live","die","kill","fight","hunt","hit","cut","split","stab","scratch","dig","swim","fly (v.)","walk","come","lie","sit","stand","turn","fall","give","hold","squeeze","rub","wash","wipe","pull","push","throw","tie","sew","count","say","sing","play","float","flow","freeze","swell","sun","moon","star","water","rain","river","lake","sea","salt","stone","sand","dust","earth","cloud","fog","sky","wind","snow","ice","smoke","fire","ashes","burn","road","mountain","red","green","yellow","white","black","night","day","year","warm","cold","full","new","old","good","bad","rotten","dirty","straight","round","sharp","dull","smooth","wet","dry","correct","near","far","right","left","at","in","with","and","if","because","name"];function De(t){let e,n,l;return{c(){e=S("svg"),n=S("g"),l=S("path"),m(l,"d",`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`),m(n,"fill","currentColor"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 47.971 47.971"),m(e,"class","svelte-1vl70mw")},m(s,r){k(s,e,r),p(e,n),p(n,l)},p:z,i:z,o:z,d(s){s&&y(e)}}}class Re extends N{constructor(e){super(),j(this,e,null,De,O,{})}}function Pe(t,e){return e.has(t)?Promise.resolve(e.get(t)):fetch(t).then(n=>n.json()).then(n=>(e.set(t,n),n))}function oe(t,e,n){const l=t.slice();return l[10]=e[n],l}function ae(t,e,n){const l=t.slice();return l[13]=e[n],l}function ie(t,e,n){const l=t.slice();return l[16]=e[n],l}function ce(t,e,n){const l=t.slice();return l[13]=e[n],l}function ue(t){let e,n,l,s=t[13]+"",r,o,i,u,g,h,f,c,d,a;h=new Re({});function v(){return t[8](t[13])}return{c(){e=b("td"),n=b("div"),l=b("span"),r=W(s),i=$(),u=b("button"),g=b("span"),x(h.$$.fragment),f=$(),m(l,"class","lang-name svelte-110n4ms"),m(l,"title",o=t[4](t[13])),m(g,"class","remove-icon"),m(u,"class","remove-button svelte-110n4ms"),m(n,"class","lang-name-wrapper svelte-110n4ms"),m(e,"class","lang-title-data svelte-110n4ms")},m(_,C){k(_,e,C),p(e,n),p(n,l),p(l,r),p(n,i),p(n,u),p(u,g),E(h,g,null),p(e,f),c=!0,d||(a=H(u,"click",v),d=!0)},p(_,C){t=_,(!c||C&1)&&s!==(s=t[13]+"")&&Y(r,s),(!c||C&1&&o!==(o=t[4](t[13])))&&m(l,"title",o)},i(_){c||(w(h.$$.fragment,_),c=!0)},o(_){L(h.$$.fragment,_),c=!1},d(_){_&&y(e),I(h),d=!1,a()}}}function fe(t){let e,n=t[16]+"",l;return{c(){e=b("li"),l=W(n),m(e,"class","svelte-110n4ms")},m(s,r){k(s,e,r),p(e,l)},p(s,r){r&3&&n!==(n=s[16]+"")&&Y(l,n)},d(s){s&&y(e)}}}function de(t){let e,n,l=t[2](t[13],t[10]),s=[];for(let r=0;r<l.length;r+=1)s[r]=fe(ie(t,l,r));return{c(){e=b("td"),n=b("ul");for(let r=0;r<s.length;r+=1)s[r].c();m(n,"class","svelte-110n4ms"),m(e,"class","lang-word-data svelte-110n4ms"),J(e,"lang-word-data-loading",!t[1][t[13]])},m(r,o){k(r,e,o),p(e,n);for(let i=0;i<s.length;i+=1)s[i].m(n,null)},p(r,o){if(o&15){l=r[2](r[13],r[10]);let i;for(i=0;i<l.length;i+=1){const u=ie(r,l,i);s[i]?s[i].p(u,o):(s[i]=fe(u),s[i].c(),s[i].m(n,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}o&3&&J(e,"lang-word-data-loading",!r[1][r[13]])},d(r){r&&y(e),P(s,r)}}}function ge(t){let e,n,l=t[0],s=[];for(let r=0;r<l.length;r+=1)s[r]=de(ae(t,l,r));return{c(){e=b("tr");for(let r=0;r<s.length;r+=1)s[r].c();n=$(),m(e,"class","lang-word-rows svelte-110n4ms")},m(r,o){k(r,e,o);for(let i=0;i<s.length;i+=1)s[i].m(e,null);p(e,n)},p(r,o){if(o&15){l=r[0];let i;for(i=0;i<l.length;i+=1){const u=ae(r,l,i);s[i]?s[i].p(u,o):(s[i]=de(u),s[i].c(),s[i].m(e,n))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(r){r&&y(e),P(s,r)}}}function Be(t){let e,n,l,s,r,o,i=t[0],u=[];for(let c=0;c<i.length;c+=1)u[c]=ue(ce(t,i,c));const g=c=>L(u[c],1,1,()=>{u[c]=null});let h=t[3](t[1]),f=[];for(let c=0;c<h.length;c+=1)f[c]=ge(oe(t,h,c));return{c(){e=b("table"),n=b("thead"),l=b("tr");for(let c=0;c<u.length;c+=1)u[c].c();s=$(),r=b("tbody");for(let c=0;c<f.length;c+=1)f[c].c();m(n,"class","lang-titles svelte-110n4ms"),m(r,"class","lang-words"),m(e,"class","lang-comparison svelte-110n4ms")},m(c,d){k(c,e,d),p(e,n),p(n,l);for(let a=0;a<u.length;a+=1)u[a].m(l,null);p(e,s),p(e,r);for(let a=0;a<f.length;a+=1)f[a].m(r,null);o=!0},p(c,[d]){if(d&49){i=c[0];let a;for(a=0;a<i.length;a+=1){const v=ce(c,i,a);u[a]?(u[a].p(v,d),w(u[a],1)):(u[a]=ue(v),u[a].c(),w(u[a],1),u[a].m(l,null))}for(K(),a=i.length;a<u.length;a+=1)g(a);Z()}if(d&15){h=c[3](c[1]);let a;for(a=0;a<h.length;a+=1){const v=oe(c,h,a);f[a]?f[a].p(v,d):(f[a]=ge(v),f[a].c(),f[a].m(r,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}},i(c){if(!o){for(let d=0;d<i.length;d+=1)w(u[d]);o=!0}},o(c){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)L(u[d]);o=!1},d(c){c&&y(e),P(u,c),P(f,c)}}}function We(t,e,n){let{availableLanguages:l}=e,{selectedLanguages:s}=e,{cache:r}=e,o={},i=new Set;function u(d,a){let v=o[d];return v?v[a]?v[a]:["\u2014"]:[]}function g(d){const a=new Set;for(const _ of Object.values(d))for(const C of Object.keys(_))a.add(C);const v=[];for(const _ of re)a.has(_)&&v.push(_);for(const _ of a.values())re.includes(_)||v.push(_);return v}function h(d){if(!l)return"";const a=l.get(d);return a?a.parents.join(" > "):""}function f(d){n(0,s=s.filter(a=>a!==d)),delete o[d],localStorage.setItem("selectedLanguages",JSON.stringify(s))}const c=d=>f(d);return t.$$set=d=>{"availableLanguages"in d&&n(6,l=d.availableLanguages),"selectedLanguages"in d&&n(0,s=d.selectedLanguages),"cache"in d&&n(7,r=d.cache)},t.$$.update=()=>{var d;if(t.$$.dirty&195){for(const a of s)if(!o[a]&&!i.has(a)){const v=(d=l.get(a))==null?void 0:d.slug;if(!v)continue;Pe(`./langs/${v}.json`,r).then(_=>{i.delete(a),n(1,o[a]=_,o),n(1,o),n(0,s),n(9,i),n(6,l),n(7,r)})}}},[s,o,u,g,h,f,l,r,c]}class Te extends N{constructor(e){super(),j(this,e,We,Be,O,{availableLanguages:6,selectedLanguages:0,cache:7})}}function Ve(t){let e,n,l,s,r;return{c(){e=S("svg"),n=S("g"),l=S("path"),s=S("path"),r=S("path"),m(l,"d","M321.785,38h-83.384V0H125.169v38H41.785v60h280V38z M155.169,30h53.232v8h-53.232V30z"),m(s,"d",`M295.142,214.31l5.66-86.31H62.769l19.016,290h114.172c-14.861-21.067-23.602-46.746-23.602-74.43\r
      C172.355,274.43,226.849,217.779,295.142,214.31z`),m(r,"d",`M301.785,244.141c-54.826,0-99.43,44.604-99.43,99.429S246.959,443,301.785,443s99.43-44.604,99.43-99.43\r
      S356.611,244.141,301.785,244.141z M355.961,376.533l-21.213,21.213l-32.963-32.963l-32.963,32.963l-21.213-21.213l32.963-32.963\r
      l-32.963-32.963l21.213-21.213l32.963,32.963l32.963-32.963l21.213,21.213l-32.963,32.963L355.961,376.533z`),m(n,"fill","currentColor"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 443 443"),m(e,"class","svelte-1vl70mw")},m(o,i){k(o,e,i),p(e,n),p(n,l),p(n,s),p(n,r)},p:z,i:z,o:z,d(o){o&&y(e)}}}class qe extends N{constructor(e){super(),j(this,e,null,Ve,O,{})}}function He(t){let e,n;return{c(){e=S("svg"),n=S("path"),m(n,"d","M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"),m(e,"viewBox","0 0 1024 1024"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"class","svelte-lteefb")},m(l,s){k(l,e,s),p(e,n)},p:z,i:z,o:z,d(l){l&&y(e)}}}class Je extends N{constructor(e){super(),j(this,e,null,He,O,{})}}function me(t){let e,n,l,s,r,o;const i=[Ke,Fe],u=[];function g(h,f){return h[2]?0:1}return n=g(t),l=u[n]=i[n](t),{c(){e=b("button"),l.c(),m(e,"class","delete-languages-button svelte-stxdxv"),J(e,"restore",t[1]&&t[2])},m(h,f){k(h,e,f),u[n].m(e,null),s=!0,r||(o=H(e,"click",t[3]),r=!0)},p(h,f){let c=n;n=g(h),n!==c&&(K(),L(u[c],1,1,()=>{u[c]=null}),Z(),l=u[n],l||(l=u[n]=i[n](h),l.c()),w(l,1),l.m(e,null)),f&6&&J(e,"restore",h[1]&&h[2])},i(h){s||(w(l),s=!0)},o(h){L(l),s=!1},d(h){h&&y(e),u[n].d(),r=!1,o()}}}function Fe(t){let e,n,l,s;return e=new qe({}),{c(){x(e.$$.fragment),n=$(),l=b("span"),l.textContent="Delete all languages",m(l,"class","label svelte-stxdxv")},m(r,o){E(e,r,o),k(r,n,o),k(r,l,o),s=!0},i(r){s||(w(e.$$.fragment,r),s=!0)},o(r){L(e.$$.fragment,r),s=!1},d(r){I(e,r),r&&y(n),r&&y(l)}}}function Ke(t){let e,n,l,s;return e=new Je({}),{c(){x(e.$$.fragment),n=$(),l=b("span"),l.textContent="Restore all languages",m(l,"class","label svelte-stxdxv")},m(r,o){E(e,r,o),k(r,n,o),k(r,l,o),s=!0},i(r){s||(w(e.$$.fragment,r),s=!0)},o(r){L(e.$$.fragment,r),s=!1},d(r){I(e,r),r&&y(n),r&&y(l)}}}function Ze(t){let e,n,l=(t[0].length>=5||t[2])&&me(t);return{c(){l&&l.c(),e=ze()},m(s,r){l&&l.m(s,r),k(s,e,r),n=!0},p(s,[r]){s[0].length>=5||s[2]?l?(l.p(s,r),r&5&&w(l,1)):(l=me(s),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(K(),L(l,1,1,()=>{l=null}),Z())},i(s){n||(w(l),n=!0)},o(s){L(l),n=!1},d(s){l&&l.d(s),s&&y(e)}}}function Ge(t,e,n){let{selectedLanguages:l}=e,s=null,r=!1;function o(){r?(n(0,l=s),n(1,s=null)):(n(1,s=l),n(0,l=[]))}return t.$$set=i=>{"selectedLanguages"in i&&n(0,l=i.selectedLanguages)},t.$$.update=()=>{t.$$.dirty&3&&n(2,r=s&&l.length===0)},[l,s,r,o]}class Qe extends N{constructor(e){super(),j(this,e,Ge,Ze,O,{selectedLanguages:0})}}function Ue(){return fetch("./languages.json").then(t=>t.json()).then(t=>Xe(t))}function Xe(t){const e=new Map;return we([],t,e),e}function Ye(t){return Array.from(t.matchAll(/[A-Z][a-z]+/g)).map(([e])=>e).join(" ")}function we(t,e,n){for(const[l,s]of Object.entries(e))if(l==="_self")for(const r of s){let o=Ye(r);const i={slug:r,name:o,parents:t};n.set(o,i)}else we([...t,l],s,n)}function he(t){let e,n,l;function s(o){t[5](o)}let r={availableLanguages:t[0],cache:t[2]};return t[1]!==void 0&&(r.selectedLanguages=t[1]),e=new Te({props:r}),F.push(()=>be(e,"selectedLanguages",s)),{c(){x(e.$$.fragment)},m(o,i){E(e,o,i),l=!0},p(o,i){const u={};i&1&&(u.availableLanguages=o[0]),!n&&i&2&&(n=!0,u.selectedLanguages=o[1],pe(()=>n=!1)),e.$set(u)},i(o){l||(w(e.$$.fragment,o),l=!0)},o(o){L(e.$$.fragment,o),l=!1},d(o){I(e,o)}}}function et(t){let e,n,l,s,r,o,i,u,g,h,f;o=new Me({props:{languages:t[0],selectedLanguages:t[1]}}),o.$on("submit",t[3]);function c(v){t[4](v)}let d={};t[1]!==void 0&&(d.selectedLanguages=t[1]),u=new Qe({props:d}),F.push(()=>be(u,"selectedLanguages",c));let a=t[1].length>0&&he(t);return{c(){e=b("main"),n=b("h1"),n.textContent="Swadesh Comparator",l=$(),s=b("section"),r=b("div"),x(o.$$.fragment),i=$(),x(u.$$.fragment),h=$(),a&&a.c(),m(n,"class","title svelte-5z7r7y"),m(r,"class","toolbar svelte-5z7r7y"),m(s,"class","table-content svelte-5z7r7y"),m(e,"class","comparator svelte-5z7r7y")},m(v,_){k(v,e,_),p(e,n),p(e,l),p(e,s),p(s,r),E(o,r,null),p(r,i),E(u,r,null),p(s,h),a&&a.m(s,null),f=!0},p(v,[_]){const C={};_&1&&(C.languages=v[0]),_&2&&(C.selectedLanguages=v[1]),o.$set(C);const ee={};!g&&_&2&&(g=!0,ee.selectedLanguages=v[1],pe(()=>g=!1)),u.$set(ee),v[1].length>0?a?(a.p(v,_),_&2&&w(a,1)):(a=he(v),a.c(),w(a,1),a.m(s,null)):a&&(K(),L(a,1,1,()=>{a=null}),Z())},i(v){f||(w(o.$$.fragment,v),w(u.$$.fragment,v),w(a),f=!0)},o(v){L(o.$$.fragment,v),L(u.$$.fragment,v),L(a),f=!1},d(v){v&&y(e),I(o),I(u),a&&a.d()}}}function tt(){try{const t=localStorage.getItem("selectedLanguages");return JSON.parse(t)}catch{return[]}}function nt(t,e,n){let l=new Map,s=tt(),r=new Map;Ue().then(g=>{n(0,l=g)});function o({detail:g}){n(1,s=[...s,g]),localStorage.setItem("selectedLanguages",JSON.stringify(s))}function i(g){s=g,n(1,s)}function u(g){s=g,n(1,s)}return[l,s,r,o,i,u]}class lt extends N{constructor(e){super(),j(this,e,nt,et,O,{})}}new lt({target:document.getElementById("app")});
