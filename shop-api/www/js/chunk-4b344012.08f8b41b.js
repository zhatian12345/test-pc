(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b344012"],{"0ef9":function(t,e,n){"use strict";n("6dbb");var r=n("d546"),o=n("ddc4"),i=n("a299"),c=n("655b"),a=n("0056"),u=c("species"),l=RegExp.prototype,s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),v=c("replace"),d=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,v){var h=c(t),x=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=x&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!x||!g||"replace"===t&&(!s||!f||d)||"split"===t&&!p){var E=/./[h],b=n(h,""[t],(function(t,e,n,r,i){var c=e.exec;return c===o||c===l.exec?x&&!i?{done:!0,value:E.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),_=b[0],R=b[1];r(String.prototype,t,_),r(l,h,2==e?function(t,e){return R.call(t,this,e)}:function(t){return R.call(t,this)})}v&&a(l[h],"sham",!0)}},"22cd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("首页")]),n("to-search"),n("div",{staticClass:"box"},[n("h3",[t._v("router-link")]),n("router-link",{attrs:{to:"/movie"}},[t._v("电影")]),n("router-link",{attrs:{to:"/food"}},[t._v("外卖")])],1),n("div",{staticClass:"box"},[n("h3",[t._v("push：添加了一条新的历史记录")]),n("button",{on:{click:t.toMovie}},[t._v("电影")]),n("button",{on:{click:t.toFood}},[t._v("外卖")])]),n("div",{staticClass:"box"},[n("h3",[t._v("replace：用新的记录替换当前历史记录")]),n("button",{on:{click:t.toMovie2}},[t._v("电影")]),n("button",{on:{click:t.toFood2}},[t._v("外卖")])])],1)},o=[],i=(n("6dbb"),n("e0e8"),{mounted:function(){console.log(this.$route)},methods:{toMovie:function(){this.$router.push("/movie")},toFood:function(){this.$router.push("/food")},toMovie2:function(){this.$router.replace("/movie")},toFood2:function(){this.$router.replace("/food")}}}),c=i,a=(n("4d8b"),n("4ac2")),u=Object(a["a"])(c,r,o,!1,null,"5d131cac",null);e["default"]=u.exports},3203:function(t,e,n){},"49b8":function(t,e,n){var r=n("67fe"),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,l,s){var f=n+t.length,v=u.length,d=a;return void 0!==l&&(l=r(l),d=c),i.call(s,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":c=l[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>v){var s=o(a/10);return 0===s?r:s<=v?void 0===u[s-1]?i.charAt(1):u[s-1]+i.charAt(1):r}c=u[a-1]}return void 0===c?"":c}))}},"4d8b":function(t,e,n){"use strict";n("3203")},"6dbb":function(t,e,n){"use strict";var r=n("e1de"),o=n("ddc4");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},8056:function(t,e,n){"use strict";var r=n("a299");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},acaa:function(t,e,n){"use strict";var r=n("20be").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},d411:function(t,e,n){"use strict";var r=n("719e");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ddc4:function(t,e,n){"use strict";var r=n("d411"),o=n("8056"),i=n("e4af"),c=RegExp.prototype.exec,a=i("native-string-replace",String.prototype.replace),u=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],v=l||f||s;v&&(u=function(t){var e,n,o,i,u=this,v=s&&u.sticky,d=r.call(u),p=u.source,h=0,x=t;return v&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),x=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(p="(?: "+p+")",x=" "+x,h++),n=new RegExp("^(?:"+p+")",d)),f&&(n=new RegExp("^"+p+"$(?!\\s)",d)),l&&(e=u.lastIndex),o=c.call(v?n:u,x),v?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:l&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),f&&o&&o.length>1&&a.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=u},e0e8:function(t,e,n){"use strict";var r=n("0ef9"),o=n("719e"),i=n("512c"),c=n("eb95"),a=n("b191"),u=n("acaa"),l=n("49b8"),s=n("f1ae"),f=Math.max,v=Math.min,d=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,x=p?"$":"$0";return[function(n,r){var o=a(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!p&&h||"string"===typeof r&&-1===r.indexOf(x)){var a=n(e,t,this,r);if(a.done)return a.value}var g=o(t),E=String(this),b="function"===typeof r;b||(r=String(r));var _=g.global;if(_){var R=g.unicode;g.lastIndex=0}var $=[];while(1){var S=s(g,E);if(null===S)break;if($.push(S),!_)break;var I=String(S[0]);""===I&&(g.lastIndex=u(E,i(g.lastIndex),R))}for(var y="",m=0,k=0;k<$.length;k++){S=$[k];for(var P=String(S[0]),T=f(v(c(S.index),E.length),0),A=[],w=1;w<S.length;w++)A.push(d(S[w]));var C=S.groups;if(b){var U=[P].concat(A,T,E);void 0!==C&&U.push(C);var N=String(r.apply(void 0,U))}else N=l(P,E,T,A,C,r);T>=m&&(y+=E.slice(m,T)+N,m=T+P.length)}return y+E.slice(m)}]}))},f1ae:function(t,e,n){var r=n("10ef"),o=n("ddc4");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}}}]);
//# sourceMappingURL=chunk-4b344012.08f8b41b.js.map