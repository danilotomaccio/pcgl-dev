(function(){"use strict";var e={2674:function(e,n,t){t.d(n,{q:function(){return a},u:function(){return s}});var r={apiKey:"AIzaSyCGLXls0uwohW8UczwMuMPgY61QRCyjydA",authDomain:"soter-ia.firebaseapp.com",databaseURL:"https://soter-ia.firebaseio.com",projectId:"soter-ia",storageBucket:"soter-ia.appspot.com",messagingSenderId:"712755300293",appId:"1:712755300293:web:9c91cc4c98e2a36b77edac",measurementId:"G-6Y82RJ5Q37"},i={apiKey:"AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",authDomain:"pcgltricarico05.firebaseapp.com",databaseURL:"https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pcgltricarico05",storageBucket:"pcgltricarico05.appspot.com",messagingSenderId:"320152077505",appId:"1:320152077505:web:f4c84686f061134a78c040",measurementId:"G-7ZHL4J15XG"};function o(){return!1}var a=o()?r:i,u="BLz4hW8tcGGVq3HkDTlruyQO4mW-IfHrG_5cNdkfW8zFfTHAjSXaGIqb4jE63RIWhBsf-ob_7z2X5N6ItZ-phyM",c="BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU",s=o()?u:c},8798:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(1146),i=t(9963),o=t(6252);function a(e,n,t,r,a,u){var c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,null,{default:(0,o.w5)((function(e){var n=e.Component,t=e.route;return[(0,o.Wm)(i.uT,{name:t.meta.transition||"fade",mode:"out-in"},{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.j4)((0,o.LL)(n)))]})),_:2},1032,["name"])]})),_:1}),(0,o._)("button",{onClick:n[0]||(n[0]=function(){return e.showInstall&&e.showInstall.apply(e,arguments)})},"Button")],64)}var u=t(8534),c=(t(5666),t(7627)),s=t(9065),l=(0,o.aZ)({data:function(){var e={};return{instEv:e}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(n){console.log(n),e.instEv=n}))},mounted:function(){return(0,u.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.h.dispatch(s.LW);case 1:case"end":return e.stop()}}),e)})))()},methods:{showInstall:function(){this.instEv.prompt()}}}),d=t(3744);const f=(0,d.Z)(l,[["render",a]]);var p=f,v={beforeMount:function(e,n,t){e.clickOutsideEvent=function(t){e===t.target||e.contains(t.target)||n.value(t,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},m=t(5205);(0,m.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t(1539),t(8783),t(3948);var h=t(2119),g=t(3577),b=function(e){return(0,o.dD)("data-v-7bed49b0"),e=e(),(0,o.Cn)(),e},w={id:"home"},k=b((function(){return(0,o._)("div",{class:"background"},[(0,o._)("div",{class:"header"})],-1)})),y={class:"foreground"},C={class:"header"},_={class:"activities"},x={key:0,class:"car"},Z={key:1,class:"admin"},U={key:2,class:"no_permission"},L=b((function(){return(0,o._)("div",{class:"icon"},[(0,o._)("span",{class:"material-icon"},"sentiment_dissatisfied")],-1)}));function A(e,n,t,r,i,a){var u=(0,o.up)("Settings"),c=(0,o.up)("LeaveCarButton"),s=(0,o.up)("UseCarButton"),l=(0,o.up)("AdminButton");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(u),k,(0,o._)("div",y,[(0,o._)("div",C,(0,g.zw)(e.headerString),1),(0,o._)("div",_,[e.usecar?((0,o.wg)(),(0,o.iD)("div",x,[e.usingCar?((0,o.wg)(),(0,o.j4)(c,{key:0})):((0,o.wg)(),(0,o.j4)(s,{key:1}))])):(0,o.kq)("",!0),e.hasPermission("admin")?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o.Wm)(l)])):(0,o.kq)("",!0),e.hasPermission("admin")||e.usecar?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",U,[L,(0,o.Uk)(" "+(0,g.zw)(e.$t.noPermission),1)]))])])])}var I=t(2833),S=t(3087),z=t(3806),D=t(1481),P=t(655),j=t(1124),B=function(e){return(0,o.dD)("data-v-79094fd2"),e=e(),(0,o.Cn)(),e},T=B((function(){return(0,o._)("span",{class:"material-icon"},"agriculture",-1)}));function O(e,n,t,r,i,a){var u=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(u,{onClick:e.openUseCarPage},{icon:(0,o.w5)((function(){return[T]})),title:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.useCarTitle),1)]})),description:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.useCarDesc),1)]})),_:1},8,["onClick"])}var N={class:"icon"},E={class:"text"},R={class:"title"},q={class:"desciption"};function M(e,n,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",{class:(0,g.C_)({activity_card:!0,animated:e.animated}),onClick:n[0]||(n[0]=function(){return e.expand&&e.expand.apply(e,arguments)})},[(0,o._)("div",N,[(0,o.WI)(e.$slots,"icon",{},void 0,!0)]),(0,o._)("div",E,[(0,o._)("div",R,[(0,o.WI)(e.$slots,"title",{},void 0,!0)]),(0,o._)("div",q,[(0,o.WI)(e.$slots,"description",{},void 0,!0)])])],2)}var F=(0,o.aZ)({data:function(){return{animated:!1}},methods:{expand:function(){this.animated=!0}}});const $=(0,d.Z)(F,[["render",M],["__scopeId","data-v-1174658e"]]);var W=$,G=(0,o.aZ)({components:{ActivityButton:W},methods:{openUseCarPage:function(){this.$router.push({path:"usecar"})}}});const H=(0,d.Z)(G,[["render",O],["__scopeId","data-v-79094fd2"]]);var J=H,V=function(e){return(0,o.dD)("data-v-9242d3aa"),e=e(),(0,o.Cn)(),e},X=V((function(){return(0,o._)("span",{class:"material-icon"},"agriculture",-1)}));function K(e,n,t,r,i,a){var u=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(u,{onClick:e.openUseCarPage},{icon:(0,o.w5)((function(){return[X]})),title:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.leaveCarTitle),1)]})),description:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.leaveCarDesc),1)]})),_:1},8,["onClick"])}var Q=(0,o.aZ)({components:{ActivityButton:W},methods:{openUseCarPage:function(){this.$router.push({path:"leavecar"})}}});const Y=(0,d.Z)(Q,[["render",K],["__scopeId","data-v-9242d3aa"]]);var ee=Y,ne=function(e){return(0,o.dD)("data-v-a72cec0c"),e=e(),(0,o.Cn)(),e},te=ne((function(){return(0,o._)("span",{class:"material-icon"},"admin_panel_settings",-1)}));function re(e,n,t,r,i,a){var u=(0,o.up)("ActivityButton");return(0,o.wg)(),(0,o.j4)(u,{onClick:e.openUseCarPage},{icon:(0,o.w5)((function(){return[te]})),title:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.adminTitle),1)]})),description:(0,o.w5)((function(){return[(0,o.Uk)((0,g.zw)(e.$t.adminDesc),1)]})),_:1},8,["onClick"])}var ie=(0,o.aZ)({components:{ActivityButton:W},methods:{openUseCarPage:function(){this.$router.push({path:"admin"})}}});const oe=(0,d.Z)(ie,[["render",re],["__scopeId","data-v-a72cec0c"]]);var ae=oe,ue=function(e){return(0,o.dD)("data-v-3b38a572"),e=e(),(0,o.Cn)(),e},ce={id:"more_menu"},se=ue((function(){return(0,o._)("span",{class:"material-icon"},"more_vert",-1)})),le=[se],de={key:0,id:"menu"},fe={class:"text"};function pe(e,n,t,r,i,a){var u=(0,o.Q2)("click-outside");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",{id:"menu_btn",onClick:n[0]||(n[0]=function(n){return e.showMenu=!e.showMenu})},le),e.showMenu?((0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",{class:"option",onClick:n[1]||(n[1]=function(){return e.logout&&e.logout.apply(e,arguments)})},[(0,o._)("div",fe,(0,g.zw)(e.$t.logout),1)])])):(0,o.kq)("",!0)])),[[u,e.onClickOutside]])}var ve=t(6322),me=(0,o.aZ)({data:function(){var e=!1;return{showMenu:e}},methods:{onClickOutside:function(){this.showMenu=!1},logout:function(){(0,ve.w7)((0,ve.v0)()),this.$router.push("login")}},computed:{}});const he=(0,d.Z)(me,[["render",pe],["__scopeId","data-v-3b38a572"]]);var ge=he,be=t(8637),we=t(26),ke=function(e){(0,z.Z)(t,e);var n=(0,D.Z)(t);function t(){return(0,S.Z)(this,t),n.apply(this,arguments)}return(0,I.Z)(t)}(j.w3);ke=(0,P.gn)([(0,j.Ei)({components:{UseCarButton:J,LeaveCarButton:ee,AdminButton:ae,Settings:ge},mounted:function(){c.h.dispatch(we.VX)},computed:{displayName:function(){var e;return null===(e=(0,be.oR)(c.J).state.firebase.user)||void 0===e?void 0:e.displayName},usingCar:function(){var e;return null===(e=c.h.state.appState.user)||void 0===e?void 0:e.usingCar},usecar:function(){return this.hasPermission("usecar")},headerString:function(){var e=c.h.getters.usedCar;return e?"Come va la ".concat(e.model,"?"):"Ciao".concat(this.displayName?", "+this.displayName:"","!")}},methods:{hasPermission:function(e){var n=c.h.state.appState.user;if(n)return null!=n.permissions[e]}}})],ke);var ye=ke;const Ce=(0,d.Z)(ye,[["render",A],["__scopeId","data-v-7bed49b0"]]);var _e=Ce,xe=[{path:"/",name:"Home",component:_e,meta:{requireLogin:!0}},{path:"/login",name:"Login",component:function(){return t.e(811).then(t.bind(t,6811))}},{path:"/usecar",name:"Use car",component:function(){return Promise.all([t.e(747),t.e(349)]).then(t.bind(t,205))},meta:{transition:"expand-card",requireLogin:!0}},{path:"/leavecar",name:"Leave car",component:function(){return Promise.all([t.e(747),t.e(4)]).then(t.bind(t,8184))},meta:{transition:"expand-card",requireLogin:!0}},{path:"/admin",name:"Admin",component:function(){return t.e(978).then(t.bind(t,8978))},meta:{transition:"expand-card",requireLogin:!0},children:[{path:"",component:function(){return t.e(883).then(t.bind(t,9883))},meta:{transition:"expand-card",requireLogin:!0}},{path:"notifications",component:function(){return t.e(192).then(t.bind(t,7192))},meta:{transition:"expand-card",requireLogin:!0}}]}],Ze=(0,h.p7)({history:(0,h.r5)(),routes:xe});Ze.beforeEach((function(e){if(e.meta.requireLogin&&!c.h.state.firebase.user)return{path:"/login",query:{redirect:e.fullPath}}}));var Ue=Ze,Le={useCarTitle:"Utilizza parco auto",useCarDesc:"Registra gli spostamenti dei mezzi dell'associazione",chooseCar:"Scegli mezzo",causal:"Motivo dello spostamento",startOdometer:"Contachilometri alla partenza",useCarBtn:"Prendi",leaveCarTitle:"Lascia macchina",leaveCarDesc:"Chiudi e registra report spostamento",stopOdometer:"Contachilometri finale",declarations:"Qualcosa da dichiarare?",leaveCarBtn:"Lascia",adminTitle:"Pannello di amministrazione",adminDesc:"Gestione riservata al direttivo",csvDownloadDesc:"Non puoi ancora fare granché ma per il momento puoi scaricare il csv dei report",csvDownloadBtn:"Scarica CSV",noPermission:"Sembra che tu non abbia alcun permesso. Chiedi ad uno degli amministratori di configurare il tuo profilo o effettua il logout (menú in alto a destra)",loginDesc:"Per usare quest'app devi essere loggato. Per loggarti devi avere un account Google. Verrano presi dal tuo account solo nome ed indirizzo mail per la gestione dei permessi",loginTitle:"Protezione civile gruppo lucano Tricarico",loginWithGoogle:"Accedi con Google",logout:"Effettua logout",notificationDesc:"Invia una notifica ad un gruppo di iscritti"},Ae=(0,i.ri)(p).use(c.h,c.J).use(Ue).directive("click-outside",v),Ie=Le,Se=(0,r.KL)();Ae.config.globalProperties.$t=Ie,Ae.config.globalProperties.$messaging=Se,Ae.mount("#app")},301:function(e,n,t){t.d(n,{B:function(){return d}});var r=t(8534),i=t(3087),o=t(2833),a=(t(5666),t(7663)),u=t(2674),c=t(5503),s=t(6690),l=function(){function e(){(0,i.Z)(this,e),this.app=(0,c.ZF)(u.q),(0,s.v0)()}return(0,o.Z)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new this),e.instance}},{key:"getApp",value:function(){return e.getInstance().app}}]),e}(),d=function(){function e(){(0,i.Z)(this,e),this.firebase=l.getApp(),this.db=(0,a.N8)()}return(0,o.Z)(e,[{key:"readData",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.U2)((0,a.iU)((0,a.iH)(this.db),n));case 3:if(t=e.sent,!t.exists()){e.next=8;break}return e.abrupt("return",t.val());case 8:return console.log("No data available"),e.abrupt("return",null);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));function n(n){return e.apply(this,arguments)}return n}()},{key:"writeData",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.t8)((0,a.iH)(this.db,n),t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"listenForChanges",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=(0,a.iH)(this.db,n),(0,a.jM)(r,(function(e){var n=e.val();t(n)}));case 2:case"end":return e.stop()}}),e,this)})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"updateValues",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(0,a.Vx)((0,a.iH)(this.db),n);case 1:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()}]),e}()},7627:function(e,n,t){t.d(n,{J:function(){return a},h:function(){return u}});t(2526),t(1817),t(1539);var r=t(8637),i=t(26),o=t(9065),a=Symbol(),u=(0,r.MT)({modules:{firebase:o.Uu,appState:i.FH}})},26:function(e,n,t){t.d(n,{VX:function(){return v},In:function(){return m},FH:function(){return p}});var r=t(8534),i=t(5082),o=(t(5666),t(2479),t(6699),t(2023),t(7941),t(9826),t(1539),t(301)),a=t(2482),u=t(3087),c=t(2833),s=(t(2222),t(2674)),l=t(1146),d=function(){function e(){(0,u.Z)(this,e),this.db=new o.B}return(0,c.Z)(e,[{key:"saveNoticationToken",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=(0,a.Z)({},"/users/".concat(t,"/notificationTokens/").concat(n),!0),console.log(r),e.prev=2,e.next=5,this.db.updateValues(r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[2,7]])})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"getMessagingToken",value:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,l.KL)(),e.next=4,(0,l.LP)(n,{vapidKey:s.u});case 4:if(t=e.sent,!t){e.next=10;break}return console.log("client token: ",t),e.abrupt("return",t);case 10:console.log("No registration token available. Request permission to generate one.");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error("An error occurred while retrieving token. ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));function n(){return e.apply(this,arguments)}return n}()}]),e}(),f=new o.B,p={state:{cars:null,user:null},mutations:{updateCars:function(e,n){e.cars=n},updateUser:function(e,n){e.user=(0,i.Z)({},n)}},actions:{listenCars:function(e){var n=e.commit;f.listenForChanges("cars",(function(e){return n("updateCars",Object.values(e))}))},listenUser:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(n){var t,r,i,o,a,u,c,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=n.commit,o=n.rootState,e.next=3,f.readData("users/".concat(null===(t=o.firebase.user)||void 0===t?void 0:t.uid));case 3:if(a=e.sent,!a){e.next=15;break}return i("updateUser",a),u=new d,e.next=9,u.getMessagingToken();case 9:if(c=e.sent,!c||a.notificationTokens&&Object.keys(a.notificationTokens).includes(c)){e.next=15;break}if(l=null===(s=o.firebase.user)||void 0===s?void 0:s.uid,!l){e.next=15;break}return e.next=15,(new d).saveNoticationToken(c,l);case 15:f.listenForChanges("users/".concat(null===(r=o.firebase.user)||void 0===r?void 0:r.uid),(function(e){return i("updateUser",e)}));case 16:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},getters:{carByPlate:function(e){return function(n){return e.cars?e.cars.find((function(e){return e.plate===n})):null}},usedCar:function(e){return e.cars&&e.user?e.cars.find((function(n){var t;return n.plate===(null===(t=e.user)||void 0===t?void 0:t.car)})):null},permissions:function(e){return e.user?Object.keys(e.user.permissions):[]},notificationTokens:function(e){return e.user&&e.user.notificationTokens?Object.keys(e.user.notificationTokens):[]}}},v="listenCars",m="listenUser"},9065:function(e,n,t){t.d(n,{LW:function(){return s},Uu:function(){return u}});var r=t(6690);t(8862);function i(e,n){var t=n,r=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r[0],a=r[1];t(o,a);var u=JSON.stringify(o[e]);localStorage.setItem(e,u)};return r}function o(e,n){var t=JSON.parse(localStorage.getItem(e));return t||n}var a=t(26),u={state:{app:null,user:o("user",null)},mutations:{setApp:function(e,n){e.app=n},setUser:i("user",(function(e,n){e.user=n}))},actions:{listenUserAuth:function(e){var n=e.commit,t=e.dispatch,i=(0,r.v0)();(0,r.Aj)(i,(function(e){e?(n(c,e),t(a.In)):n(c,null)}))}}},c="setUser",s="listenUserAuth"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(l--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{4:"218caac7",192:"f25a8c30",349:"6e7aae98",747:"083b61d1",811:"176afc63",883:"3921ca68",978:"5c47a105"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{4:"11b2c725",349:"11b2c725",811:"ccca0348",883:"4d35b9fb",978:"aec8de46"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="protezione-civile:";t.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+o){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+o),u.src=r),e[r]=[i];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)t();else{var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=o,i.href=n,document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var i=t[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===n))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===n)return i}},r=function(r){return new Promise((function(i,o){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return i();e(r,u,i,o)}))},i={143:0};t.f.miniCss=function(e,n){var t={4:1,349:1,811:1,883:1,978:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=r(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(t,r){i=e[n]=[t,r]}));r.push(i[2]=o);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(c)var l=c(t)}for(n&&n(r);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},r=self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8798)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.fc6aab48.js.map