!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);n(2),r.mount("*")},function(t,e,n){var r;!function(o,i){"use strict";function u(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function a(t,e){for(var n,r=e.length,o=t.length;r>o;)n=e[--r],e.splice(r,1),n.unmount()}function c(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];$(r)?b(r,function(t){S(t,n,e)}):S(r,n,e)})}function f(t,e,n){var r,o=t._root;for(t._virts=[];o;)r=o.nextSibling,n?e.insertBefore(o,n._root):e.appendChild(o),t._virts.push(o),o=r}function s(t,e,n,r){for(var o,i=t._root,u=0;r>u;u++)o=i.nextSibling,e.insertBefore(i,n._root),i=o}function l(t,e,n){w(t,"each");var r,o=typeof N(t,"no-reorder")!==nt||w(t,"no-reorder"),i=A(t),l=Y[i]||{tmpl:t.outerHTML},p=ut.test(i),d=t.parentNode,h=document.createTextNode(""),v=L(t),m="option"===i.toLowerCase(),b=[],y=[],x="VIRTUAL"==t.tagName;n=st.loopKeys(n),d.insertBefore(h,t),e.one("before-mount",function(){t.parentNode.removeChild(t),d.stub&&(d=e.root)}).on("update",function(){var w=st(n.val,e),_=document.createDocumentFragment();$(w)||(r=w||!1,w=r?Object.keys(w).map(function(t){return u(n,t,w[t])}):[]);for(var N=0,C=w.length;C>N;N++){var L=w[N],E=o&&L instanceof Object&&!r,S=y.indexOf(L),T=~S&&E?S:N,M=b[T];L=!r&&n.key?u(n,L,N):L,!E&&!M||E&&!~S||!M?(M=new g(l,{parent:e,isLoop:!0,hasImpl:!!Y[i],root:p?d:t.cloneNode(),item:L},t.innerHTML),M.mount(),x&&(M._root=M.root.firstChild),N!=b.length&&b[N]?(x?f(M,d,b[N]):d.insertBefore(M.root,b[N].root),y.splice(N,0,L)):x?f(M,_):_.appendChild(M.root),b.splice(N,0,M),T=N):M.update(L,!0),T!==N&&E&&b[N]&&(x?s(M,d,b[N],t.childNodes.length):d.insertBefore(M.root,b[N].root),n.pos&&(M[n.pos]=N),b.splice(N,0,b.splice(T,1)[0]),y.splice(N,0,y.splice(T,1)[0]),!v&&M.tags&&c(M,N)),M._item=L,O(M,"_parent",e)}if(a(w,b),m){if(d.appendChild(_),d.length){var A,j=d.options;for(d.selectedIndex=A=-1,N=0;N<j.length;N++)(j[N].selected=j[N].__selected)&&0>A&&(d.selectedIndex=A=N)}}else d.insertBefore(_,h);v&&(e.tags[i]=b),y=w.slice()})}function p(t,e,n,r){H(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||N(t,"each")?1:0,n){var o=L(t);o&&!t.isLoop&&n.push(T(o,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||z(t,e,[])}})}function d(t,e,n){function r(t,e,r){st.hasExpr(e)&&n.push(j({dom:t,expr:e},r))}H(t,function(t){var n,o=t.nodeType;return 3==o&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==o?(n=N(t,"each"))?(l(t,e,n),!1):(b(t.attributes,function(e){var n=e.name,o=n.split("__")[1];return r(t,e.value,{attr:o||n,bool:o}),o?(w(t,n),!1):void 0}),L(t)?!1:void 0):void 0})}function g(t,e,n){function r(){var t=v&&h?s:g||s;b(S.attributes,function(e){var n=e.value;l[_(e.name)]=st.hasExpr(n)?st(n,t):n}),b(Object.keys(A),function(e){l[_(e)]=st(A[e],t)})}function o(t){for(var e in N)typeof s[e]!==ot&&I(s,e)&&(s[e]=t[e])}function u(){s.parent&&h&&b(Object.keys(s.parent),function(t){var e=!R(at,t)&&R(H,t);(typeof s[t]===ot||e)&&(e||H.push(t),s[t]=s.parent[t])})}function a(t){s.update(t,!0)}function c(t){if(b(E,function(e){e[t?"mount":"unmount"]()}),g){var e=t?"on":"off";h?g[e]("unmount",s.unmount):g[e]("update",a)[e]("unmount",s.unmount)}}var f,s=Q.observable(this),l=q(e.opts)||{},g=e.parent,h=e.isLoop,v=e.hasImpl,N=k(e.item),L=[],E=[],S=e.root,T=S.tagName.toLowerCase(),A={},H=[];t.name&&S._tag&&S._tag.unmount(!0),this.isMounted=!1,S.isLoop=h,S._tag=this,O(this,"_riot_id",++G),j(this,{parent:g,root:S,opts:l,tags:{}},N),b(S.attributes,function(t){var e=t.value;st.hasExpr(e)&&(A[t.name]=e)}),f=lt(t.tmpl,n),O(this,"update",function(t,e){return t=k(t),u(),t&&x(N)&&(o(t),N=t),j(s,t),r(),s.trigger("update",t),m(L,s),e&&s.parent?s.parent.one("updated",function(){s.trigger("updated")}):dt(function(){s.trigger("updated")}),this}),O(this,"mixin",function(){return b(arguments,function(t){var e;t=typeof t===nt?Q.mixin(t):t,y(t)?(e=new t,t=t.prototype):e=t,b(Object.getOwnPropertyNames(t),function(t){"init"!=t&&(s[t]=y(e[t])?e[t].bind(s):e[t])}),e.init&&e.init.bind(s)()}),this}),O(this,"mount",function(){r();var e=Q.mixin(J);if(e&&s.mixin(e),t.fn&&t.fn.call(s,l),d(f,s,L),c(!0),t.attrs&&F(t.attrs,function(t,e){C(S,t,e)}),(t.attrs||v)&&d(s.root,s,L),s.parent&&!h||s.update(N),s.trigger("before-mount"),h&&!v)S=f.firstChild;else{for(;f.firstChild;)S.appendChild(f.firstChild);S.stub&&(S=g.root)}O(s,"root",S),h&&p(s.root,s.parent,null,!0),!s.parent||s.parent.isMounted?(s.isMounted=!0,s.trigger("mount")):s.parent.one("mount",function(){B(s.root)||(s.parent.isMounted=s.isMounted=!0,s.trigger("mount"))})}),O(this,"unmount",function(t){var e,n=S,r=n.parentNode,o=X.indexOf(s);if(s.trigger("before-unmount"),~o&&X.splice(o,1),this._virts&&b(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),r){if(g)e=M(g),$(e.tags[T])?b(e.tags[T],function(t,n){t._riot_id==s._riot_id&&e.tags[T].splice(n,1)}):e.tags[T]=i;else for(;n.firstChild;)n.removeChild(n.firstChild);t?w(r,"riot-tag"):r.removeChild(n)}s.trigger("unmount"),c(),s.off("*"),s.isMounted=!1,delete S._tag}),p(f,this,E)}function h(t,e,n,r){n[t]=function(t){var i,u=r._parent,a=r._item;if(!a)for(;u&&!a;)a=u._item,u=u._parent;t=t||o.event,I(t,"currentTarget")&&(t.currentTarget=n),I(t,"target")&&(t.target=t.srcElement),I(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=a,e.call(r,t)===!0||/radio|check/.test(n.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=a?M(u):r,i.update())}}function v(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function m(t,e){b(t,function(t,n){var r=t.dom,o=t.attr,i=st(t.expr,e),u=t.dom.parentNode;if(t.bool?(i=!!i,"selected"===o&&(r.__selected=i)):null==i&&(i=""),t.value!==i){if(t.value=i,!o)return i+="",void(u&&("TEXTAREA"===u.tagName?(u.value=i,ct||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(w(r,o),y(i))h(o,i,r,e);else if("if"==o){var a=t.stub,c=function(){v(a.parentNode,a,r)},f=function(){v(r.parentNode,r,a)};i?a&&(c(),r.inStub=!1,B(r)||H(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),r.parentNode?f():(e.parent||e).one("updated",f),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":t.bool?(r[o]=i,i&&C(r,o,o)):(0===i||i&&typeof i!==rt)&&(U(o,W)&&o!=tt&&(o=o.slice(W.length)),C(r,o,i))}})}function b(t,e){for(var n,r=t?t.length:0,o=0;r>o;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function y(t){return typeof t===it||!1}function x(t){return t&&typeof t===rt}function w(t,e){t.removeAttribute(e)}function _(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function N(t,e){return t.getAttribute(e)}function C(t,e,n){t.setAttribute(e,n)}function L(t){return t.tagName&&Y[N(t,et)||N(t,tt)||t.tagName.toLowerCase()]}function E(t,e,n){var r=n.tags[e];r?($(r)||r!==t&&(n.tags[e]=[r]),R(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function S(t,e,n){var r,o=t.parent;o&&(r=o.tags[e],$(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):E(t,e,o))}function T(t,e,n,r){var o=new g(t,e,n),i=A(e.root),u=M(r);return o.parent=u,o._parent=r,E(o,i,u),u!==r&&E(o,i,r),e.root.innerHTML="",o}function M(t){for(var e=t;!L(e.root)&&e.parent;)e=e.parent;return e}function O(t,e,n,r){return Object.defineProperty(t,e,j({value:n,enumerable:!1,writable:!1,configurable:!1},r)),t}function A(t){var e=L(t),n=N(t,"name"),r=n&&!st.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function j(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var o in e)I(t,o)&&(t[o]=e[o]);return t}function R(t,e){return~t.indexOf(e)}function $(t){return Array.isArray(t)||t instanceof Array}function I(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===ot||n&&n.writable}function k(t){if(!(t instanceof g||t&&typeof t.trigger==it))return t;var e={};for(var n in t)R(at,n)||(e[n]=t[n]);return e}function H(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)H(t,e),t=t.nextSibling}}function F(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function B(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function K(t){return document.createElement(t)}function P(t,e){return(e||document).querySelectorAll(t)}function D(t,e){return(e||document).querySelector(t)}function q(t){function e(){}return e.prototype=t,new e}function V(t){return N(t,"id")||N(t,"name")}function z(t,e,n){var r,o=V(t),i=function(i){R(n,o)||(r=$(i),i?(!r||r&&!R(i,t))&&(r?i.push(t):e[o]=[i,t]):e[o]=t)};o&&(st.hasExpr(o)?e.one("mount",function(){o=V(t),i(e[o])}):i(e[o]))}function U(t,e){return t.slice(0,e.length)===e}function Z(t,e,n){var r=Y[e],o=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new g(r,{root:t,opts:n},o)),r&&r.mount&&(r.mount(),R(X,r)||X.push(r)),r}var Q={version:"v2.3.17",settings:{}},G=0,X=[],Y={},J="__global_mixin",W="riot-",tt=W+"tag",et="data-is",nt="string",rt="object",ot="undefined",it="function",ut=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,at=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],ct=0|(o&&o.document||{}).documentMode;Q.observable=function(t){t=t||{};var e={},n=Array.prototype.slice,r=function(t,e){t.replace(/\S+/g,e)};return Object.defineProperties(t,{on:{value:function(n,o){return"function"!=typeof o?t:(r(n,function(t,n){(e[t]=e[t]||[]).push(o),o.typed=n>0}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,o){return"*"!=n||o?r(n,function(t){if(o)for(var n,r=e[t],i=0;n=r&&r[i];++i)n==o&&r.splice(i--,1);else delete e[t]}):e={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,u=arguments.length-1,a=new Array(u),c=0;u>c;c++)a[c]=arguments[c+1];return r(o,function(r){i=n.call(e[r]||[],0);for(var o,u=0;o=i[u];++u){if(o.busy)return;o.busy=1,o.apply(t,o.typed?[r].concat(a):a),i[u]!==o&&u--,o.busy=0}e["*"]&&"*"!=r&&t.trigger.apply(t,["*",r].concat(a))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(t){function e(t){return t.split(/[\/?#]/)}function n(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);return r?r.slice(1):void 0}function r(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function i(t){g=r(l,1),M[_](L,g),M[_](E,g),O[_]($,p),t&&l(!0)}function u(){this.$=[],t.observable(this),k.on("stop",this.s.bind(this)),k.on("emit",this.e.bind(this))}function a(t){return t[C](/^\/|\/$/,"")}function c(t){return"string"==typeof t}function f(t){return(t||j.href||"")[C](y,"")}function s(t){return"#"==h[0]?(t||j.href||"").split(h)[1]||"":f(t)[C](h,"")}function l(t){var e=0==B;if(!(B>=T)&&(B++,F.push(function(){var e=s();(t||e!=v)&&(k[S]("emit",e),v=e)}),e)){for(;F.length;)F[0](),F.shift();B=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[N]("download")||!e[N]("href")||e.target&&"_self"!=e.target||-1==e.href.indexOf(j.href.match(y)[0])||(e.href==j.href||e.href.split("#")[0]!=j.href.split("#")[0]&&("#"==h||0===f(e.href).indexOf(h))&&d(s(e.href),e.title||O.title))&&t.preventDefault()}}function d(t,e,n){return A?(t=h+a(t),e=e||O.title,n?A.replaceState(null,e,t):A.pushState(null,e,t),O.title=e,H=!1,l(),H):k[S]("emit",s(t))}var g,h,v,m,b,y=/^.+?\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,N="hasAttribute",C="replace",L="popstate",E="hashchange",S="trigger",T=3,M="undefined"!=typeof o&&o,O="undefined"!=typeof document&&document,A=M&&history,j=M&&(A.location||M.location),R=u.prototype,$=O&&O.ontouchstart?"touchstart":"click",I=!1,k=t.observable(),H=!1,F=[],B=0;R.m=function(t,e,n){!c(t)||e&&!c(e)?e?this.r(t,e):this.r("@",t):d(t,e,n||!1)},R.s=function(){this.off("*"),this.$=[]},R.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?m:b)(a(t),a(e));return"undefined"!=typeof n?(this[S].apply(null,[e].concat(n)),H=!0):void 0},this)},R.r=function(t,e){"@"!=t&&(t="/"+a(t),this.$.push(t)),this.on(t,e)};var K=new u,P=K.m.bind(K);P.create=function(){var t=new u;return t.m.stop=t.s.bind(t),t.m.bind(t)},P.base=function(t){h=t||"#",v=s()},P.exec=function(){l(!0)},P.parser=function(t,r){t||r||(m=e,b=n),t&&(m=t),r&&(b=r)},P.query=function(){var t={},e=j.href||v;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},P.stop=function(){I&&(M&&(M[w](L,g),M[w](E,g),O[w]($,p)),k[S]("stop"),I=!1)},P.start=function(t){I||(M&&("complete"==document.readyState?i(t):M[_]("load",function(){setTimeout(function(){i(t)},1)})),I=!0)},P.base(),P.parser(),t.route=P}(Q);var ft=function(t){function e(t){return t}function n(t,e){return e||(e=m),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?f:"")}function r(t){if(t===g)return h;var e=t.split(" ");if(2!==e.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:h[4],e),e[5]=n(t.length>3?/\\({|})/g:h[5],e),e[6]=n(h[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,f),e[8]=t,e}function o(t){return t instanceof RegExp?a(t):m[t]}function i(t){(t||(t=g))!==m[8]&&(m=r(t),a=t===g?e:n,m[9]=a(h[9]),m[10]=a(h[10])),v=t}function u(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:i,get:function(){return v},enumerable:!0}),c=t,i(e)}var a,c,f="g",s=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,f),"[":RegExp("([[\\]])|"+p,f),"{":RegExp("([{}])|"+p,f)},g="{ }",h=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,f),g,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],v=t,m=[];return o.split=function(t,e,n){function r(t){e||u?f.push(t&&t.replace(n[5],"$1")):f.push(t)}function o(t,e,n){var r,o=d[e];for(o.lastIndex=n,n=1;(r=o.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:o.lastIndex}n||(n=m);var i,u,a,c,f=[],s=n[6];for(u=a=s.lastIndex=0;i=s.exec(t);){if(c=i.index,u){if(i[2]){s.lastIndex=o(t,i[2],s.lastIndex);continue}if(!i[3])continue}i[1]||(r(t.slice(a,c)),a=s.lastIndex,s=n[6+(u^=1)],s.lastIndex=a)}return t&&a<t.length&&r(t.slice(a)),f},o.hasExpr=function(t){return m[4].test(t)},o.loopKeys=function(t){var e=t.match(m[9]);return e?{key:e[1],pos:e[2],val:m[0]+e[3].trim()+m[1]}:{val:t.trim()}},o.hasRaw=function(t){return m[10].test(t)},o.array=function(t){return t?r(t):m},Object.defineProperty(o,"settings",{set:u,get:function(){return c}}),o.settings="undefined"!=typeof Q&&Q.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=s,o.S_QBLOCKS=p,o}(),st=function(){function t(t,r){return t?(a[t]||(a[t]=n(t))).call(r,e):t}function e(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function n(t){var e=r(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function r(t){var e,n=[],r=ft.split(t.replace(/\u2057/g,'"'),1);if(r.length>2||r[0]){var o,u,a=[];for(o=u=0;o<r.length;++o)e=r[o],e&&(e=1&o?i(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[u++]=e);e=2>u?a[0]:"["+a.join(",")+'].join("")'}else e=i(r[1],0,n);return n[0]&&(e=e.replace(f,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){function r(e,n){var r,o=1,i=s[e];for(i.lastIndex=n.lastIndex;r=i.exec(t);)if(r[0]===e)++o;else if(!--o)break;n.lastIndex=o?t.length:i.lastIndex}if("="===t[0]&&(t=t.slice(1)),t=t.replace(c,function(t,e){return t.length>2&&!e?""+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],a=0;t&&(o=t.match(l))&&!o.index;){var f,p,d=/,|([[{(])|$/g;for(t=RegExp.rightContext,f=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=d.exec(t))[1];)r(p,d);p=t.slice(0,o.index),t=RegExp.rightContext,i[a++]=u(p,1,f)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:u(t,e)}return t}function u(t,e,n){var r;return t=t.replace(d,function(t,e,n,o,i){return n&&(o=r?0:o+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+p+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!g.test(i.slice(o)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};t.haveRaw=ft.hasRaw,t.hasExpr=ft.hasExpr,t.loopKeys=ft.loopKeys,t.errorHandler=null;var c=RegExp(ft.S_QBLOCKS,"g"),f=/\x01(\d+)~/g,s={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},l=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/,p='"in this?this:'+("object"!=typeof o?"global":"window")+").",d=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,g=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.parse=function(t){return t},t.version=ft.version="v2.3.21",t}(),lt=function gt(){function gt(n,r){var o=n&&n.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),u=K("div");return n=e(n,r),a.test(i)?u=t(u,n,i):u.innerHTML=n,u.stub=!0,u}function t(t,e,n){var r="o"===n[0],o=r?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=D(i,o))}return o}function e(t,e){if(!n.test(t))return t;var u={};return e=e&&e.replace(o,function(t,e,n){return u[e]=u[e]||n,""}).trim(),t.replace(i,function(t,e,n){return u[e]||n||""}).replace(r,function(t,n){return e||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,o=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,i=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},a=ct&&10>ct?ut:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return gt}(),pt=function(t){if(!o)return{add:function(){},inject:function(){}};var e=function(){var t=K("style");C(t,"type","text/css");var e=D("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),n=e.styleSheet,r="";return Object.defineProperty(t,"styleNode",{value:e,writable:!0}),{add:function(t){r+=t},inject:function(){r&&(n?n.cssText+=r:e.innerHTML+=r,r="")}}}(Q),dt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(o||{});Q.util={brackets:ft,tmpl:st},Q.mixin=function(){var t={};return function(e,n){return x(e)?(n=e,void(t[J]=j(t[J]||{},n))):n?void(t[e]=n):t[e]}}(),Q.tag=function(t,e,n,r,o){return y(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(y(n)?o=n:pt.add(n)),t=t.toLowerCase(),Y[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.tag2=function(t,e,n,r,o){return n&&pt.add(n),Y[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.mount=function(t,e,n){function r(t){var e="";return b(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+et+'="'+t+'"],['+tt+'="'+t+'"]')}),e}function o(){var t=Object.keys(Y);return t+r(t)}function i(t){if(t.tagName){var r=N(t,et)||N(t,tt);e&&r!==e&&(r=e,C(t,et,e));var o=Z(t,r||t.tagName.toLowerCase(),n);o&&c.push(o)}else t.length&&b(t,i)}var u,a,c=[];if(pt.inject(),x(e)&&(n=e,e=0),typeof t===nt?("*"===t?t=a=o():t+=r(t.split(/, */)),u=t?P(t):[]):u=t,"*"===e){if(e=a||o(),u.tagName)u=P(e,u);else{var f=[];b(u,function(t){f.push(P(e,t))}),u=f}e=0}return i(u),c},Q.update=function(){return b(X,function(t){t.update()})},Q.Tag=g,typeof e===rt?t.exports=Q:"function"===it&&typeof n(3)!==ot?(r=function(){return Q}.call(e,n,e,t),!(r!==i&&(t.exports=r))):o.riot=Q}("undefined"!=typeof window?window:void 0)},function(t,e,n){(function(t){"use strict";t.tag2("basic-app","<div>Hello, world!</div>","","",function(t){})}).call(e,n(1))},function(t,e){(function(e){t.exports=e}).call(e,{})}]);