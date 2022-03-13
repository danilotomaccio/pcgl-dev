(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[376],{6790:function(e,t,n){"use strict";var r=n(7854),i=n(3157),s=n(6244),o=n(9974),a=r.TypeError,u=function(e,t,n,r,c,l,f,d){var p,h,v=c,g=0,w=!!f&&o(f,d);while(g<r){if(g in n){if(p=w?w(n[g],g,t):n[g],l>0&&i(p))h=s(p),v=u(e,t,p,h,v,l-1)-1;else{if(v>=9007199254740991)throw a("Exceed the acceptable array length");e[v]=p}v++}g++}return v};e.exports=u},6535:function(e,t,n){"use strict";var r=n(2109),i=n(6790),s=n(9662),o=n(7908),a=n(6244),u=n(5417);r({target:"Array",proto:!0},{flatMap:function(e){var t,n=o(this),r=a(n);return s(e),t=u(n,0),t.length=i(t,n,n,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},561:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(1400),o=n(9303),a=n(6244),u=n(7908),c=n(5417),l=n(6135),f=n(1194),d=f("splice"),p=i.TypeError,h=Math.max,v=Math.min,g=9007199254740991,w="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,i,f,d,k,m=u(this),y=a(m),b=s(e,y),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=y-b):(n=x-2,r=v(h(o(t),0),y-b)),y+n-r>g)throw p(w);for(i=c(m,r),f=0;f<r;f++)d=b+f,d in m&&l(i,f,m[d]);if(i.length=r,n<r){for(f=b;f<y-r;f++)d=f+r,k=f+n,d in m?m[k]=m[d]:delete m[k];for(f=y;f>y-r+n;f--)delete m[f-1]}else if(n>r)for(f=y-r;f>b;f--)d=f+r-1,k=f+n-1,d in m?m[k]=m[d]:delete m[k];for(f=0;f<n;f++)m[f+b]=arguments[f+2];return m.length=y-r+n,i}})},9244:function(e,t,n){var r=n(1223);r("flatMap")},591:function(e,t,n){"use strict";n.d(t,{l:function(){return c}});var r=n(2482),i=n(5082),s=n(8534),o=n(3087),a=n(2833),u=(n(7941),n(6535),n(9244),n(1539),n(5666),n(8907)),c=function(){function e(){(0,o.Z)(this,e),this.db=new u.B}return(0,a.Z)(e,[{key:"getAllUsers",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(){var t,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.db.readData("users");case 2:if(t=e.sent,n=[],t)for(r in t)s=(0,i.Z)((0,i.Z)({},t[r]),{},{uid:r}),n.push(s);return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllTopics",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.db.readData("notifications/topics");case 2:if(t=e.sent,!t){e.next=5;break}return e.abrupt("return",Object.keys(t));case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllRoles",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.db.readData("permissions");case 2:if(t=e.sent,n={},t)for(r in t)n[r]=Object.keys(t[r]);return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getTokensFromUsers",value:function(e){return e.flatMap((function(e){if(e.notificationTokens)return Object.keys(e.notificationTokens)}))}},{key:"saveTopic",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(t,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=n.reduce((function(e,t){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},t,!0))}),{}),this.db.writeData("notifications/topics/".concat(t),s);case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()},297:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=n(8534),i=n(3087),s=n(2833),o=(n(5666),n(8862),n(1539),function(){function e(){(0,i.Z)(this,e)}return(0,s.Z)(e,[{key:"sendNotification",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t){var n,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Headers,n.append("Content-Type","application/json"),r=JSON.stringify(t),i={method:"POST",headers:n,body:r},e.next=6,fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/send",i);case 6:return s=e.sent,e.next=9,s.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addToTopic",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(t,n){var r,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new Headers,r.append("Content-Type","application/json"),i=JSON.stringify({tokens:t,topic:n}),s={method:"POST",headers:r,body:i},e.next=6,fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/addToTopic",s);case 6:return o=e.sent,e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}())},376:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});n(6699),n(2023);var r=n(6252),i=n(3577),s=function(e){return(0,r.dD)("data-v-5543991e"),e=e(),(0,r.Cn)(),e},o={id:"new_topic"},a={class:"desc"},u={class:"users_list"},c=["selected","onClick"],l=s((function(){return(0,r._)("div",{class:"divider"},null,-1)})),f={class:"roles_list"},d=["selected","onClick"],p={class:"desc"},h=["disabled","loading"];function v(e,t,n,s,v,g){var w=this;return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",a,(0,i.zw)(e.$t.users),1),(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.users,(function(t){return(0,r.wg)(),(0,r.iD)("div",{class:"toggable",key:t.uid,selected:w.selectedUsers.includes(t.uid),onClick:function(n){return e.toggleFromList(t.uid,w.selectedUsers)}},(0,i.zw)(t.info?t.info.mail:t.uid),9,c)})),128))]),l,(0,r._)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.roles,(function(t,n){return(0,r.wg)(),(0,r.iD)("div",{class:"toggable",key:t,selected:w.selectedRole===n,onClick:function(t){return e.toggleRole(n)}},(0,i.zw)(n),9,d)})),128))]),(0,r._)("div",p,(0,i.zw)(e.$t.topic),1),(0,r._)("div",{class:"input",contenteditable:"true",inputmode:"text",onInput:t[0]||(t[0]=function(t){return e.topic=t.target.innerText})},null,32),(0,r._)("div",{class:"submit_button",onClick:t[1]||(t[1]=function(){return e.createTopic&&e.createTopic.apply(e,arguments)}),disabled:!e.hasMandatoryFields(),loading:e.loading},(0,i.zw)(e.$t.newTopic),9,h)])}var g=n(8534),w=(n(6535),n(9244),n(1539),n(7327),n(7941),n(561),n(5666),n(297)),k=n(591),m=(0,r.aZ)({data:function(){var e=[],t={},n=[],r="";return{topic:"",users:e,roles:t,selectedUsers:n,selectedRole:r,loading:!1}},mounted:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new k.l,t.next=3,n.getAllUsers();case 3:return e.users=t.sent,t.next=6,n.getAllRoles();case 6:e.roles=t.sent;case 7:case"end":return t.stop()}}),t)})))()},methods:{hasMandatoryFields:function(){return this.selectedUsers.length>0&&""!==this.topic},createTopic:function(){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.users.filter((function(t){return e.selectedUsers.includes(t.uid)})).flatMap((function(e){return Object.keys(e.notificationTokens?e.notificationTokens:{})})),!(""!==e.topic&&n.length>0)){t.next=9;break}return e.loading=!0,t.next=5,(new w.g).addToTopic(n,e.topic);case 5:return t.next=7,(new k.l).saveTopic(e.topic,n);case 7:e.loading=!1,e.$router.back();case 9:case"end":return t.stop()}}),t)})))()},toggleFromList:function(e,t){var n=t.indexOf(e);n>=0?t.splice(n,1):t.push(e)},toggleRole:function(e){this.selectedRole===e?(this.selectedRole="",this.selectedUsers=[]):(this.selectedRole=e,this.selectedUsers=this.roles[e])}}}),y=n(3744);const b=(0,y.Z)(m,[["render",v],["__scopeId","data-v-5543991e"]]);var x=b}}]);
//# sourceMappingURL=376-legacy.b9b3702c.js.map