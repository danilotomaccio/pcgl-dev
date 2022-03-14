"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[376],{591:function(e,t,s){s.d(t,{l:function(){return n}});var i=s(8907);class n{constructor(){this.db=new i.B}async getAllUsers(){const e=await this.db.readData("users"),t=[];if(e)for(const s in e){const i={...e[s],uid:s};t.push(i)}return t}async getAllTopics(){const e=await this.db.readData("notifications/topics");return e?Object.keys(e):[]}async getAllRoles(){const e=await this.db.readData("permissions"),t={};if(e)for(const s in e)t[s]=Object.keys(e[s]);return t}getTokensFromUsers(e){return e.flatMap((e=>{if(e.notificationTokens)return Object.keys(e.notificationTokens)}))}async saveTopic(e,t){const s=t.reduce(((e,t)=>({...e,[t]:!0})),{});this.db.writeData(`notifications/topics/${e}`,s)}}},297:function(e,t,s){s.d(t,{g:function(){return i}});class i{async sendNotification(e){const t=new Headers;t.append("Content-Type","application/json");const s=JSON.stringify(e),i={method:"POST",headers:t,body:s},n=await fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/send",i);return await n.json()}async addToTopic(e,t){const s=new Headers;s.append("Content-Type","application/json");const i=JSON.stringify({tokens:e,topic:t}),n={method:"POST",headers:s,body:i},o=await fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/addToTopic",n);return await o.json()}}},376:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var i=s(6252),n=s(3577);const o=e=>((0,i.dD)("data-v-5543991e"),e=e(),(0,i.Cn)(),e),c={id:"new_topic"},a={class:"desc"},l={class:"users_list"},d=["selected","onClick"],r=o((()=>(0,i._)("div",{class:"divider"},null,-1))),u={class:"roles_list"},p=["selected","onClick"],h={class:"desc"},f=["disabled","loading"];function g(e,t,s,o,g,w){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",a,(0,n.zw)(e.$t.users),1),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.users,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"toggable",key:t.uid,selected:this.selectedUsers.includes(t.uid),onClick:s=>e.toggleFromList(t.uid,this.selectedUsers)},(0,n.zw)(t.info?t.info.mail:t.uid),9,d)))),128))]),r,(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.roles,((t,s)=>((0,i.wg)(),(0,i.iD)("div",{class:"toggable",key:t,selected:this.selectedRole===s,onClick:t=>e.toggleRole(s)},(0,n.zw)(s),9,p)))),128))]),(0,i._)("div",h,(0,n.zw)(e.$t.topic),1),(0,i._)("div",{class:"input",contenteditable:"true",inputmode:"text",onInput:t[0]||(t[0]=t=>e.topic=t.target.innerText)},null,32),(0,i._)("div",{class:"submit_button",onClick:t[1]||(t[1]=(...t)=>e.createTopic&&e.createTopic(...t)),disabled:!e.hasMandatoryFields(),loading:e.loading},(0,n.zw)(e.$t.newTopic),9,f)])}var w=s(297),y=s(591),k=(0,i.aZ)({data(){const e=[],t={},s=[],i="";return{topic:"",users:e,roles:t,selectedUsers:s,selectedRole:i,loading:!1}},async mounted(){const e=new y.l;this.users=await e.getAllUsers(),this.roles=await e.getAllRoles()},methods:{hasMandatoryFields(){return this.selectedUsers.length>0&&""!==this.topic},async createTopic(){const e=this.users.filter((e=>this.selectedUsers.includes(e.uid))).flatMap((e=>Object.keys(e.notificationTokens?e.notificationTokens:{})));""!==this.topic&&e.length>0&&(this.loading=!0,await(new w.g).addToTopic(e,this.topic),await(new y.l).saveTopic(this.topic,e),this.loading=!1,this.$router.back())},toggleFromList(e,t){const s=t.indexOf(e);s>=0?t.splice(s,1):t.push(e)},toggleRole(e){this.selectedRole===e?(this.selectedRole="",this.selectedUsers=[]):(this.selectedRole=e,this.selectedUsers=this.roles[e])}}}),v=s(3744);const T=(0,v.Z)(k,[["render",g],["__scopeId","data-v-5543991e"]]);var b=T}}]);
//# sourceMappingURL=376.734fbad0.js.map