(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[520],{8457:function(t,e,r){"use strict";var n=r(7854),i=r(9974),o=r(6916),a=r(7908),s=r(3411),u=r(7659),c=r(4411),l=r(6244),d=r(6135),f=r(8554),p=r(1246),v=n.Array;t.exports=function(t){var e=a(t),r=c(this),n=arguments.length,h=n>1?arguments[1]:void 0,g=void 0!==h;g&&(h=i(h,n>2?arguments[2]:void 0));var y,x,m,b,w,I,R=p(e),Z=0;if(!R||this==v&&u(R))for(y=l(e),x=r?new this(y):v(y);y>Z;Z++)I=g?h(e[Z],Z):e[Z],d(x,Z,I);else for(b=f(e,R),w=b.next,x=r?new this:[];!(m=o(w,b)).done;Z++)I=g?s(b,h,[m.value,Z],!0):m.value,d(x,Z,I);return x.length=Z,x}},3411:function(t,e,r){var n=r(9670),i=r(9212);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(a){i(t,"throw",a)}}},2261:function(t,e,r){"use strict";var n=r(6916),i=r(1702),o=r(1340),a=r(7066),s=r(2999),u=r(2309),c=r(30),l=r(9909).get,d=r(9441),f=r(7168),p=u("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,h=v,g=i("".charAt),y=i("".indexOf),x=i("".replace),m=i("".slice),b=function(){var t=/a/,e=/b*/g;return n(v,t,"a"),n(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=s.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],R=b||I||w||d||f;R&&(h=function(t){var e,r,i,s,u,d,f,R=this,Z=l(R),k=o(t),E=Z.raw;if(E)return E.lastIndex=R.lastIndex,e=n(h,E,k),R.lastIndex=E.lastIndex,e;var S=Z.groups,A=w&&R.sticky,O=n(a,R),N=R.source,T=0,_=k;if(A&&(O=x(O,"y",""),-1===y(O,"g")&&(O+="g"),_=m(k,R.lastIndex),R.lastIndex>0&&(!R.multiline||R.multiline&&"\n"!==g(k,R.lastIndex-1))&&(N="(?: "+N+")",_=" "+_,T++),r=new RegExp("^(?:"+N+")",O)),I&&(r=new RegExp("^"+N+"$(?!\\s)",O)),b&&(i=R.lastIndex),s=n(v,A?r:R,_),A?s?(s.input=m(s.input,T),s[0]=m(s[0],T),s.index=R.lastIndex,R.lastIndex+=s[0].length):R.lastIndex=0:b&&s&&(R.lastIndex=R.global?s.index+s[0].length:i),I&&s&&s.length>1&&n(p,s[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s&&S)for(s.groups=d=c(null),u=0;u<S.length;u++)f=S[u],d[f[0]]=s[f[1]];return s}),t.exports=h},7066:function(t,e,r){"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,r){var n=r(7293),i=r(7854),o=i.RegExp,a=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=a||n((function(){return!o("a","y").sticky})),u=a||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:s,UNSUPPORTED_Y:a}},9441:function(t,e,r){var n=r(7293),i=r(7854),o=i.RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,r){var n=r(7293),i=r(7854),o=i.RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1038:function(t,e,r){var n=r(2109),i=r(8457),o=r(7072),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},7042:function(t,e,r){"use strict";var n=r(2109),i=r(7854),o=r(3157),a=r(4411),s=r(111),u=r(1400),c=r(6244),l=r(5656),d=r(6135),f=r(5112),p=r(1194),v=r(206),h=p("slice"),g=f("species"),y=i.Array,x=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,n,i,f=l(this),p=c(f),h=u(t,p),m=u(void 0===e?p:e,p);if(o(f)&&(r=f.constructor,a(r)&&(r===y||o(r.prototype))?r=void 0:s(r)&&(r=r[g],null===r&&(r=void 0)),r===y||void 0===r))return v(f,h,m);for(n=new(void 0===r?y:r)(x(m-h,0)),i=0;h<m;h++,i++)h in f&&d(n,i,f[h]);return n.length=i,n}})},4916:function(t,e,r){"use strict";var n=r(2109),i=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},7601:function(t,e,r){"use strict";r(4916);var n=r(2109),i=r(7854),o=r(6916),a=r(1702),s=r(614),u=r(111),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=i.Error,d=a(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!s(e))return d(this,t);var r=o(e,this,t);if(null!==r&&!u(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},9894:function(t,e,r){"use strict";var n;r.d(e,{b:function(){return n}}),function(t){t[t["OPEN"]=0]="OPEN",t[t["OPTIONS"]=1]="OPTIONS"}(n||(n={}))},2792:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(2482),i=r(8534),o=r(3087),a=r(2833),s=(r(5666),r(1703),r(7627)),u=r(7663),c=r(8907),l=function(){function t(){(0,o.Z)(this,t),this.db=new c.B,this.store=s.h}return(0,a.Z)(t,[{key:"takeCar",value:function(){var t=(0,i.Z)(regeneratorRuntime.mark((function t(e,r,i){var o,a,s,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=this.store.state.firebase.user,a=(0,u.VF)((0,u.iH)(this.db.db)).key,!o){t.next=16;break}return s={},(0,n.Z)(s,"cars/".concat(i,"/out"),!0),(0,n.Z)(s,"cars/".concat(i,"/usedBy"),o.uid),(0,n.Z)(s,"users/".concat(o.uid,"/usingCar"),!0),(0,n.Z)(s,"users/".concat(o.uid,"/car"),i),(0,n.Z)(s,"users/".concat(o.uid,"/carReport"),a),(0,n.Z)(s,"carReports/".concat(a),{startOdometer:r,carId:i,startTime:new Date,userId:o.uid,userName:o.displayName,causal:e}),c=s,console.log(c),t.prev=5,t.next=8,this.db.updateValues(c);case 8:return l=t.sent,t.abrupt("return",l);case 12:t.prev=12,t.t0=t["catch"](5),console.error(t.t0),console.error(c);case 16:throw new Error("User not logged trying to update");case 17:case"end":return t.stop()}}),t,this,[[5,12]])})));function e(e,r,n){return t.apply(this,arguments)}return e}()},{key:"leaveCar",value:function(){var t=(0,i.Z)(regeneratorRuntime.mark((function t(e,r,i){var o,a,s,u,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.store.state.firebase.user,s=null===(o=this.store.state.appState.user)||void 0===o?void 0:o.carReport,!a||!s){t.next=16;break}return u={},(0,n.Z)(u,"cars/".concat(r,"/out"),!1),(0,n.Z)(u,"cars/".concat(r,"/odometer"),e),(0,n.Z)(u,"cars/".concat(r,"/usedBy"),null),(0,n.Z)(u,"users/".concat(a.uid,"/usingCar"),!1),(0,n.Z)(u,"users/".concat(a.uid,"/car"),null),(0,n.Z)(u,"users/".concat(a.uid,"/carReport"),null),(0,n.Z)(u,"carReports/".concat(s,"/stopOdometer"),e),(0,n.Z)(u,"carReports/".concat(s,"/stopTime"),new Date),c=u,i&&(c["carReports/".concat(s,"/declarations")]=i),t.prev=5,t.next=8,this.db.updateValues(c);case 8:return l=t.sent,t.abrupt("return",l);case 12:t.prev=12,t.t0=t["catch"](5),console.error(t.t0),console.error(c);case 16:throw new Error("User not logged trying to update");case 17:case"end":return t.stop()}}),t,this,[[5,12]])})));function e(e,r,n){return t.apply(this,arguments)}return e}()}]),t}()},521:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(6252),i=r(3577),o=r(9963),a={id:"activity"},s={class:"title"},u={class:"question"},c={key:0,class:"options"},l=["name","id","onClick"],d={key:1,class:"open"},f=["inputmode","onInput"],p={class:"divider"},v=["disabled"];function h(t,e,r,h,g,y){var x=this;return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n.WI)(t.$slots,"default",{},void 0,!0)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.sections,(function(e,r){return(0,n.wg)(),(0,n.iD)("div",{class:"section",key:e.question},[(0,n._)("div",u,(0,i.zw)(e.question),1),e.type===t.sectionType.OPTIONS?((0,n.wg)(),(0,n.iD)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,(function(t){return(0,n.wg)(),(0,n.iD)("label",{key:t.id,class:"opt"},[(0,n._)("input",{type:"radio",name:"section-".concat(r),id:t.id,onClick:function(r){return x.res[e.id]=t}},null,8,l),(0,n.Uk)(" "+(0,i.zw)(t.value),1)])})),128))])):((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",{class:"input",contenteditable:"true",inputmode:e.inputMode?e.inputMode:"text",onInput:function(r){return x.res[e.id]=t.parseInput(r.target.innerText,e)}},null,40,f)])),(0,n.wy)((0,n._)("div",p,null,512),[[o.F8,r<t.sections.length-1]])])})),128)),(0,n._)("div",{class:"submit_button",disabled:!t.submitActive,onClick:e[0]||(e[0]=function(){return t.onSubmit&&t.onSubmit.apply(t,arguments)})},(0,i.zw)(t.submitText),9,v)])}var g=r(8439),y=r(9894),x=(0,n.aZ)({emits:["onSubmit"],props:{sections:{type:Array,required:!0},submitText:String},data:function(){var t={},e={};return{res:t,errors:e}},computed:{sectionType:function(){return y.b},submitActive:function(){var t,e=(0,g.Z)(this.sections);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r.mandatory&&(!this.$data.res[r.id]||0===this.$data.res[r.id].length))return!1;if(this.errors[r.id])return!1}}catch(n){e.e(n)}finally{e.f()}return!0}},methods:{onSubmit:function(){this.$emit("onSubmit",this.$data.res)},parseInput:function(t,e){if(e.type===y.b.OPEN&&e.inputMode){var r=e.inputMode;if("numeric"===r){var n=parseInt(t);return isNaN(n)?(this.errors[e.id]=!0,null):(this.errors[e.id]=!1,n)}if("decimal"===r){var i=parseFloat(t);return isNaN(i)?(this.errors[e.id]=!0,null):(this.errors[e.id]=!1,i)}}return t}}}),m=r(3744);const b=(0,m.Z)(x,[["render",h],["__scopeId","data-v-49618c39"]]);var w=b},8439:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1703),r(7042),r(8309),r(1038),r(4916),r(7601);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function o(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=520-legacy.3ae937e5.js.map