(function(){"use strict";var e={2674:function(e,t,n){n.d(t,{q:function(){return i},u:function(){return o}});const i={apiKey:"AIzaSyCGLXls0uwohW8UczwMuMPgY61QRCyjydA",authDomain:"soter-ia.firebaseapp.com",databaseURL:"https://soter-ia.firebaseio.com",projectId:"soter-ia",storageBucket:"soter-ia.appspot.com",messagingSenderId:"712755300293",appId:"1:712755300293:web:9c91cc4c98e2a36b77edac",measurementId:"G-6Y82RJ5Q37"},o="BLz4hW8tcGGVq3HkDTlruyQO4mW-IfHrG_5cNdkfW8zFfTHAjSXaGIqb4jE63RIWhBsf-ob_7z2X5N6ItZ-phyM"},4121:function(e,t,n){var i=n(1146),o=n(9963),a=n(6252);function s(e,t,n,i,s,r){const c=(0,a.up)("Notification"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.message?((0,a.wg)(),(0,a.j4)(c,{key:0,message:e.message},null,8,["message"])):(0,a.kq)("",!0),(0,a.Wm)(u,null,{default:(0,a.w5)((({Component:e,route:t})=>[(0,a.Wm)(o.uT,{name:t.meta.transition||"fade",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))])),_:2},1032,["name"])])),_:1})],64)}var r=n(8637),c=n(5975),u=n(7627),l=n(26),d=n(9065),p=n(3577);const m={id:"notification"},f=["moving"],h={class:"title"},v={class:"body"};function g(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",{class:"notification",onTouchmovePassive:t[0]||(t[0]=(...t)=>e.onTouchMove&&e.onTouchMove(...t)),onTouchstartPassive:t[1]||(t[1]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchendPassive:t[2]||(t[2]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t)),style:(0,p.j5)({transform:`translateX(${e.translate}px)`}),moving:e.moving},[(0,a._)("div",h,(0,p.zw)(e.message.notification.title),1),(0,a._)("div",v,(0,p.zw)(e.message.notification.body),1)],44,f)])}var w=(0,a.aZ)({props:{message:{type:Object,required:!0}},mounted(){window&&(this.windowWidth=window.innerWidth,window.addEventListener("resize",(e=>this.windowWidth=window.innerWidth)))},data(){return{touchStartPoint:[0,0],translate:0,moving:!1,windowWidth:0}},methods:{onTouchMove(e){this.translate=e.changedTouches[0].screenX-this.touchStartPoint[0]},onTouchStart(e){this.moving=!1,this.touchStartPoint=[e.changedTouches[0].screenX,e.changedTouches[0].screenY]},onTouchEnd(e){this.moving=!0;const t=160;this.translate>t?this.translate=this.windowWidth+1:this.translate<-t?this.translate=-(this.windowWidth+1):this.translate=0}}}),b=n(3744);const y=(0,b.Z)(w,[["render",g],["__scopeId","data-v-2c68abfa"]]);var k=y,C=(0,a.aZ)({components:{Notification:k},data(){let e=null;return{message:e}},created(){window.addEventListener("beforeinstallprompt",(e=>{this.$store.commit(l.wX,e)}));c.O.getApp();(0,r.oR)(u.J).dispatch(d.LW)},methods:{},watch:{"$store.state.messages.lastMessage"(e){this.message=e,setTimeout((()=>{this.message=null}),1e4)}}});const _=(0,b.Z)(C,[["render",s]]);var T=_;const P={beforeMount(e,t,n){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}};var S=n(5205);(0,S.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var A=n(2119);const D=e=>((0,a.dD)("data-v-1e678e97"),e=e(),(0,a.Cn)(),e),L={id:"home"},E=D((()=>(0,a._)("div",{class:"background"},[(0,a._)("div",{class:"header"})],-1))),z={class:"foreground"},I={class:"header"},O={key:0,class:"activities placeholder"},U=D((()=>(0,a._)("div",{class:"placeholder_card"},null,-1))),j=D((()=>(0,a._)("div",{class:"placeholder_card"},null,-1))),M=D((()=>(0,a._)("div",{class:"placeholder_card"},null,-1))),N=[U,j,M],$={key:1,class:"activities"},B={key:0,class:"car"},q={key:1,class:"admin"},W={key:2,class:"no_permission"},x=D((()=>(0,a._)("div",{class:"icon"},[(0,a._)("span",{class:"material-icon"},"sentiment_dissatisfied")],-1)));function Z(e,t,n,i,o,s){const r=(0,a.up)("Settings"),c=(0,a.up)("LeaveCarButton"),u=(0,a.up)("UseCarButton"),l=(0,a.up)("AdminButton");return(0,a.wg)(),(0,a.iD)("div",L,[(0,a.Wm)(r),E,(0,a._)("div",z,[(0,a._)("div",I,(0,p.zw)(e.headerString),1),e.user?((0,a.wg)(),(0,a.iD)("div",$,[e.usecar?((0,a.wg)(),(0,a.iD)("div",B,[e.usingCar?((0,a.wg)(),(0,a.j4)(c,{key:0})):((0,a.wg)(),(0,a.j4)(u,{key:1}))])):(0,a.kq)("",!0),e.hasPermission("admin")?((0,a.wg)(),(0,a.iD)("div",q,[(0,a.Wm)(l)])):(0,a.kq)("",!0),!e.user||e.hasPermission("admin")||e.usecar?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",W,[x,(0,a.Uk)(" "+(0,p.zw)(e.$t.noPermission),1)]))])):((0,a.wg)(),(0,a.iD)("div",O,N))])])}var F=n(655),H=n(1124);const G=e=>((0,a.dD)("data-v-79094fd2"),e=e(),(0,a.Cn)(),e),X=G((()=>(0,a._)("span",{class:"material-icon"},"agriculture",-1)));function R(e,t,n,i,o,s){const r=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(r,{onClick:e.openUseCarPage},{icon:(0,a.w5)((()=>[X])),title:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.useCarTitle),1)])),description:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.useCarDesc),1)])),_:1},8,["onClick"])}const V={class:"icon"},J={class:"text"},K={class:"title"},Q={class:"desciption"};function Y(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("div",{class:(0,p.C_)({activity_card:!0,animated:e.animated}),onClick:t[0]||(t[0]=(...t)=>e.expand&&e.expand(...t))},[(0,a._)("div",V,[(0,a.WI)(e.$slots,"icon",{},void 0,!0)]),(0,a._)("div",J,[(0,a._)("div",K,[(0,a.WI)(e.$slots,"title",{},void 0,!0)]),(0,a._)("div",Q,[(0,a.WI)(e.$slots,"description",{},void 0,!0)])])],2)}var ee=(0,a.aZ)({data(){return{animated:!1}},methods:{expand(){this.animated=!0}}});const te=(0,b.Z)(ee,[["render",Y],["__scopeId","data-v-1174658e"]]);var ne=te,ie=(0,a.aZ)({components:{ActivityButton:ne},methods:{openUseCarPage(){this.$router.push({path:"usecar"})}}});const oe=(0,b.Z)(ie,[["render",R],["__scopeId","data-v-79094fd2"]]);var ae=oe;const se=e=>((0,a.dD)("data-v-9242d3aa"),e=e(),(0,a.Cn)(),e),re=se((()=>(0,a._)("span",{class:"material-icon"},"agriculture",-1)));function ce(e,t,n,i,o,s){const r=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(r,{onClick:e.openUseCarPage},{icon:(0,a.w5)((()=>[re])),title:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.leaveCarTitle),1)])),description:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.leaveCarDesc),1)])),_:1},8,["onClick"])}var ue=(0,a.aZ)({components:{ActivityButton:ne},methods:{openUseCarPage(){this.$router.push({path:"leavecar"})}}});const le=(0,b.Z)(ue,[["render",ce],["__scopeId","data-v-9242d3aa"]]);var de=le;const pe=e=>((0,a.dD)("data-v-a72cec0c"),e=e(),(0,a.Cn)(),e),me=pe((()=>(0,a._)("span",{class:"material-icon"},"admin_panel_settings",-1)));function fe(e,t,n,i,o,s){const r=(0,a.up)("ActivityButton");return(0,a.wg)(),(0,a.j4)(r,{onClick:e.openUseCarPage},{icon:(0,a.w5)((()=>[me])),title:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.adminTitle),1)])),description:(0,a.w5)((()=>[(0,a.Uk)((0,p.zw)(e.$t.adminDesc),1)])),_:1},8,["onClick"])}var he=(0,a.aZ)({components:{ActivityButton:ne},methods:{openUseCarPage(){this.$router.push({path:"admin"})}}});const ve=(0,b.Z)(he,[["render",fe],["__scopeId","data-v-a72cec0c"]]);var ge=ve;const we=e=>((0,a.dD)("data-v-1fc5b220"),e=e(),(0,a.Cn)(),e),be={id:"more_menu"},ye=we((()=>(0,a._)("span",{class:"material-icon"},"more_vert",-1))),ke=[ye],Ce={key:0,id:"menu"},_e={class:"text"};function Te(e,t,n,i,o,s){const r=(0,a.Q2)("click-outside");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",be,[(0,a._)("div",{id:"menu_btn",onClick:t[0]||(t[0]=t=>e.showMenu=!e.showMenu)},ke),e.showMenu?((0,a.wg)(),(0,a.iD)("div",Ce,[e.installEv?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"option",onClick:t[1]||(t[1]=(...t)=>e.installApp&&e.installApp(...t))},(0,p.zw)(e.$t.install),1)):(0,a.kq)("",!0),(0,a._)("div",{class:"option",onClick:t[2]||(t[2]=(...t)=>e.logout&&e.logout(...t))},[(0,a._)("div",_e,(0,p.zw)(e.$t.logout),1)])])):(0,a.kq)("",!0)])),[[r,e.onClickOutside]])}var Pe=n(6322),Se=(0,a.aZ)({data(){const e=!1;return{showMenu:e}},methods:{onClickOutside(){this.showMenu=!1},logout(){(0,Pe.w7)((0,Pe.v0)()),this.$router.push("login")},installApp(){this.installEv&&this.installEv.prompt()}},computed:{installEv(){return this.$store.state.appState.installEvent}}});const Ae=(0,b.Z)(Se,[["render",Te],["__scopeId","data-v-1fc5b220"]]);var De=Ae;let Le=class extends H.w3{};Le=(0,F.gn)([(0,H.Ei)({components:{UseCarButton:ae,LeaveCarButton:de,AdminButton:ge,Settings:De},mounted(){u.h.dispatch(l.VX)},computed:{displayName(){return(0,r.oR)(u.J).state.firebase.user?.displayName},usingCar:()=>u.h.state.appState.user.usingCar,usecar(){return this.hasPermission("usecar")},headerString(){const e=u.h.getters.usedCar;return e?`Come va la ${e.model}?`:`Ciao${this.displayName?", "+this.displayName:""}!`},user:()=>u.h.state.appState.user},methods:{hasPermission(e){const t=u.h.state.appState.user;if(t)return null!=t.permissions[e]}}})],Le);var Ee=Le;const ze=(0,b.Z)(Ee,[["render",Z],["__scopeId","data-v-1e678e97"]]);var Ie=ze;const Oe=[{path:"/",name:"Home",component:Ie,meta:{requireLogin:!0}},{path:"/login",name:"Login",component:()=>n.e(811).then(n.bind(n,6811))},{path:"/usecar",name:"Use car",component:()=>Promise.all([n.e(520),n.e(514)]).then(n.bind(n,4664)),meta:{transition:"expand-card",requireLogin:!0}},{path:"/leavecar",name:"Leave car",component:()=>Promise.all([n.e(520),n.e(757)]).then(n.bind(n,5248)),meta:{transition:"expand-card",requireLogin:!0}},{path:"/admin",name:"Admin",component:()=>n.e(134).then(n.bind(n,2134)),meta:{transition:"expand-card",requireLogin:!0},children:[{path:"",component:()=>n.e(796).then(n.bind(n,1796)),meta:{transition:"expand-card",requireLogin:!0}},{path:"notifications",component:()=>n.e(954).then(n.bind(n,3954)),meta:{transition:"expand-card",requireLogin:!0}},{path:"notifications/newTopic",component:()=>n.e(83).then(n.bind(n,9083)),meta:{transition:"expand-card",requireLogin:!0}}]}],Ue=(0,A.p7)({history:(0,A.r5)(),routes:Oe});Ue.beforeEach((e=>{if(e.meta.requireLogin&&!u.h.state.firebase.user)return{path:"/login",query:{redirect:e.fullPath}}}));var je=Ue;const Me={useCarTitle:"Utilizza parco auto",useCarDesc:"Registra gli spostamenti dei mezzi dell'associazione",chooseCar:"Scegli mezzo",causal:"Motivo dello spostamento",startOdometer:"Contachilometri alla partenza",useCarBtn:"Prendi",leaveCarTitle:"Lascia macchina",leaveCarDesc:"Chiudi e registra report spostamento",stopOdometer:"Contachilometri finale",declarations:"Qualcosa da dichiarare?",leaveCarBtn:"Lascia",adminTitle:"Pannello di amministrazione",adminDesc:"Gestione riservata al direttivo",csvDownloadDesc:"Non puoi ancora fare granché ma per il momento puoi scaricare il csv dei report",csvDownloadBtn:"Scarica CSV",noPermission:"Sembra che tu non abbia alcun permesso. Chiedi ad uno degli amministratori di configurare il tuo profilo o effettua il logout (menú in alto a destra)",loginDesc:"Per usare quest'app devi essere loggato. Per loggarti devi avere un account Google. Verrano presi dal tuo account solo nome ed indirizzo mail per la gestione dei permessi",loginTitle:"Protezione civile gruppo lucano Tricarico",loginWithGoogle:"Accedi con Google",logout:"Effettua logout",install:"Installa app",notificationDesc:"Invia una notifica ad un gruppo di iscritti",goToAdminPush:"Invia notifica",sendNotification:"Invia",sendingNotification:"Inviando...",title:"Titolo",description:"Description",users:"Utenti",topic:"Topic",newTopic:"Crea topic"},Ne=(0,o.ri)(T).use(u.h,u.J).use(je).directive("click-outside",P),$e=Me;(0,i.KL)();Ne.config.globalProperties.$t=$e,Ne.config.globalProperties.$store=u.h,Ne.mount("#app")},8907:function(e,t,n){n.d(t,{B:function(){return a}});var i=n(7663),o=n(5975);class a{constructor(){this.firebase=o.O.getApp(),this.db=(0,i.N8)()}async readData(e){try{const t=await(0,i.U2)((0,i.iU)((0,i.iH)(this.db),e));return t.exists()?t.val():(console.log("No data available"),null)}catch(t){return console.log(t),null}}async writeData(e,t){try{await(0,i.t8)((0,i.iH)(this.db,e),t)}catch(n){console.log(n)}}async listenForChanges(e,t){const n=(0,i.iH)(this.db,e);(0,i.jM)(n,(e=>{const n=e.val();t(n)}))}async updateValues(e){(0,i.Vx)((0,i.iH)(this.db),e)}}},5975:function(e,t,n){n.d(t,{O:function(){return s}});var i=n(2674),o=n(5503),a=n(6690);class s{constructor(){this.app=(0,o.ZF)(i.q),(0,a.v0)()}static getInstance(){return s.instance||(s.instance=new this),s.instance}static getApp(){return s.getInstance().app}}},7627:function(e,t,n){n.d(t,{J:function(){return r},h:function(){return c}});var i=n(8637),o=n(26),a=n(9065),s=n(8802);const r=Symbol(),c=(0,i.MT)({modules:{firebase:a.Uu,appState:o.FH,messages:s.i}})},26:function(e,t,n){n.d(t,{VX:function(){return l},In:function(){return d},wX:function(){return p},FH:function(){return u}});var i=n(8907),o=n(2674),a=n(1146);class s{constructor(){this.db=new i.B}async saveNoticationToken(e,t){const n={[`/users/${t}/notificationTokens/${e}`]:!0};try{await this.db.updateValues(n)}catch(i){console.error(i)}}async getMessagingToken(){try{const e=(0,a.KL)(),t=await(0,a.LP)(e,{vapidKey:o.u});if(t)return console.log("client token: ",t),t;console.log("No registration token available. Request permission to generate one.")}catch(e){console.error("An error occurred while retrieving token. ",e)}}}var r=n(8802);const c=new i.B,u={state:{cars:null,user:null,installEvent:null},mutations:{updateCars(e,t){e.cars=t},updateUser(e,t){e.user={...t}},setInstallEvent(e,t){e.installEvent=t}},actions:{listenCars:({commit:e})=>{c.listenForChanges("cars",(t=>e("updateCars",Object.values(t))))},listenUser:async({commit:e,rootState:t,dispatch:n})=>{const i=await c.readData(`users/${t.firebase.user?.uid}`);if(i){e("updateUser",i);const o=new s,a=await o.getMessagingToken();if(n(r.u),a&&(!i.notificationTokens||!Object.keys(i.notificationTokens).includes(a))){const e=t.firebase.user?.uid;e&&await o.saveNoticationToken(a,e)}}}},getters:{carByPlate:e=>t=>e.cars?e.cars.find((e=>e.plate===t)):null,usedCar:e=>e.cars&&e.user?e.cars.find((t=>t.plate===e.user?.car)):null,permissions:e=>e.user?Object.keys(e.user.permissions):[],notificationTokens:e=>e.user&&e.user.notificationTokens?Object.keys(e.user.notificationTokens):[]}},l="listenCars",d="listenUser",p="setInstallEvent"},9065:function(e,t,n){n.d(t,{LW:function(){return u},Uu:function(){return r}});var i=n(6690);function o(e,t){const n=t,i=(...[t,i])=>{n(t,i);const o=JSON.stringify(t[e]);localStorage.setItem(e,o)};return i}function a(e,t){const n=JSON.parse(localStorage.getItem(e));return n||t}var s=n(26);const r={state:{app:null,user:a("user",null)},mutations:{setApp(e,t){e.app=t},setUser:o("user",((e,t)=>{e.user=t}))},actions:{listenUserAuth:({commit:e,dispatch:t})=>{const n=(0,i.v0)();(0,i.Aj)(n,(n=>{n?(e(c,n),t(s.In)):e(c,null)}))}}},c="setUser",u="listenUserAuth"},8802:function(e,t,n){n.d(t,{i:function(){return o},u:function(){return a}});var i=n(1146);const o={state:{messages:[],lastMessage:null},mutations:{addMessage(e,t){e.messages.push(t)},updateLastMessage(e,t){e.lastMessage=t}},actions:{listenMessages:async({commit:e})=>{(0,i.ps)((0,i.KL)(),(t=>{console.log(t),e("addMessage",t),e("updateLastMessage",t)}))}},getters:{}},a="listenMessages"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],o=e[l][1],a=e[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(r=!1,a<s&&(s=a));if(r){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{83:"78d79105",134:"5a4f196d",514:"fbfe4413",520:"25a9ed55",757:"f81b7b14",796:"a1d94ace",811:"96cb84b9",954:"6f8b5046"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{83:"56bbae92",134:"29b5bfa4",514:"a5d32d39",757:"a5d32d39",796:"a2fba7df",811:"ccca0348",954:"c804b26d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="protezione-civile:";n.l=function(i,o,a,s){if(e[i])e[i].push(o);else{var r,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+a){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=i),e[i]=[o];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){o=s[i],a=o.getAttribute("data-href");if(a===e||a===t)return o}},i=function(i){return new Promise((function(o,a){var s=n.miniCssF(i),r=n.p+s;if(t(s,r))return o();e(i,r,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={83:1,134:1,514:1,757:1,796:1,811:1,954:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=a);var s=n.p+n.u(t),r=new Error,c=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,o[1](r)}};n.l(s,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,s=i[0],r=i[1],c=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var l=c(n)}for(t&&t(i);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},i=self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4121)}));i=n.O(i)})();
//# sourceMappingURL=app.a5462341.js.map