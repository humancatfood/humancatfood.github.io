function $(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(C)}function D(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(R(n,e))}function dt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,u){if(r){const c=O(n,e,i,u);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in G;let w=!1;function I(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const l=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:K(1,r,b=>n[e[b]].claim_order,l))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const u=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(u.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[o],f)}}function U(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function xt(){return k(" ")}function $t(){return k("")}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){for(const e in n)Z(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){nt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function B(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function vt(t,n,e){return B(t,n,e,X)}function Et(t,n,e){return B(t,n,e,Y)}function et(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function Nt(t){return et(t," ")}function St(t,n){n=""+n,t.data!==n&&(t.data=n)}function kt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function jt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(r)):u===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Mt(t,n){return new t(n)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function Tt(t){H().$$.on_mount.push(t)}function Ct(t){H().$$.after_update.push(t)}const h=[],T=[];let m=[];const E=[],P=Promise.resolve();let N=!1;function W(){N||(N=!0,P.then(L))}function Dt(){return W(),P}function S(t){m.push(t)}function Ot(t){E.push(t)}const v=new Set;let _=0;function L(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),it(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function rt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Bt(){d.r||g(d.c),d=d.p}function ot(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Pt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Wt(t){return typeof t=="object"&&t!==null?t:{}}const ct=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ct];function Lt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(C).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),u.forEach(S)}function lt(t,n){const e=t.$$;e.fragment!==null&&(rt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,u,c,s=[-1]){const o=y;p(t);const l=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,b,...A)=>{const j=A.length?A[0]:b;return l.ctx&&r(l.ctx[a],l.ctx[a]=j)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](j),f&&ut(t,a)),b}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){I();const a=tt(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ot(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),J(),L()}p(o)}class Gt{$destroy(){lt(this,1),this.$destroy=$}$on(n,e){if(!D(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{st as A,lt as B,Y as C,Et as D,$ as E,dt as F,z as G,wt as H,At as I,ht as J,mt as K,_t as L,Pt as M,yt as N,pt as O,Wt as P,bt as Q,Lt as R,Gt as S,Ot as T,U,ft as V,jt as W,xt as a,gt as b,Nt as c,Ht as d,$t as e,Bt as f,ot as g,V as h,Rt as i,Ct as j,X as k,vt as l,tt as m,Z as n,Tt as o,kt as p,k as q,et as r,at as s,Dt as t,St as u,qt as v,T as w,Mt as x,zt as y,Ft as z};
