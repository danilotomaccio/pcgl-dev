(function(){var e={8278:function(e,t,a){"use strict";var i=a(9242),r=a(3396);function n(e,t,a,n,o,s){const c=(0,r.up)("top-app-bar"),l=(0,r.up)("router-view"),d=(0,r.up)("drawer-menu");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c),(0,r.Wm)(l,null,{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})])),_:1})}a(4976),a(2554),a(8830);const o={id:"top-bar"},s={class:"top-app-bar headline3"},c=["badge"],l=(0,r.Uk)(" Avatar "),d={key:0,class:"separator"};function p(e,t,a,n,p,u){const g=(0,r.up)("router-link"),m=(0,r.up)("options-input");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("header",s,[(0,r._)("span",{class:"material-icon",onClick:t[0]||(t[0]=(...t)=>e.toggleDrawer&&e.toggleDrawer(...t)),badge:e.badge}," menu",8,c),(0,r.Wm)(g,{to:"/",class:"link"},{default:(0,r.w5)((()=>[l])),_:1}),this.$route?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[e.showSearch?((0,r.wg)(),(0,r.iD)("span",{key:1,class:"material-icon",onClick:t[2]||(t[2]=(...t)=>e.toggleShowSearch&&e.toggleShowSearch(...t))},"close")):((0,r.wg)(),(0,r.iD)("span",{key:0,class:"material-icon",onClick:t[1]||(t[1]=(...t)=>e.toggleShowSearch&&e.toggleShowSearch(...t))},"filter_list"))],64)):(0,r.kq)("",!0)]),(0,r.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[e.showSearch?((0,r.wg)(),(0,r.j4)(m,{key:0,label:"Posizione",options:e.cities,onSelected:e.filterSelected},null,8,["options","onSelected"])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(i.uT,{name:"separator",appear:""},{default:(0,r.w5)((()=>[e.showSearch?((0,r.wg)(),(0,r.iD)("div",d)):(0,r.kq)("",!0)])),_:1})])}a(3166);const u={state:{openDrawer:!1,showSearch:!1,selectedCity:""},mutations:{toggleDrawer(e,t=!e.openDrawer){e.openDrawer=t},toggleShowSearch(e,t=!e.showSearch){e.showSearch=t},updateSelectedCity(e,t){e.selectedCity=t}},actions:{}},g="toggleDrawer",m="toggleShowSearch",v="updateSelectedCity";var h=a(7139);const w={class:"options"};function f(e,t,a,i,n,o){const s=(0,r.up)("mwc-list-item"),c=(0,r.up)("mwc-select");return(0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(c,{outlined:"",label:e.label,onSelected:e.selected,fixedMenuPosition:"",naturalMenuWidth:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{selected:""===e.selectedCity},null,8,["selected"]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,(t=>((0,r.wg)(),(0,r.j4)(s,{key:t,value:t,selected:e.selectedCity===t},{default:(0,r.w5)((()=>[(0,r.Uk)((0,h.zw)(t),1)])),_:2},1032,["value","selected"])))),128))])),_:1},8,["label","onSelected"])])}a(8899),a(981),a(8039);var b=(0,r.aZ)({props:{label:String,options:Object},emits:["selected"],methods:{selected(e){this.$emit("selected",e)}},computed:{selectedCity(){return this.$store.state.gui.selectedCity}}}),k=a(89);const y=(0,k.Z)(b,[["render",f],["__scopeId","data-v-32b0fd4a"]]);var _=y,j=a(2482),C=JSON.parse('[{"id":1,"name":"Gery","surname":"Martyn","email":"gmartyn0@businesswire.com","gender":"Male","photo":"avatar-1.jpg","city":"Matera","phrase":"Total dynamic definition","rating":4.3,"price":69,"equipment":["180_CAM"]},{"id":2,"name":"Chelsae","surname":"Bullar","email":"cbullar1@blog.com","gender":"Female","photo":"avatar-2.jpg","city":"Bari","phrase":"Automated mission-critical analyzer","rating":4.7,"price":68,"equipment":["180_CAM"]},{"id":3,"name":"Rriocard","surname":"Pepler","email":"rpepler2@devhub.com","gender":"Male","photo":"avatar-3.jpg","city":"Foggia","phrase":"Profit-focused system-worthy contingency","rating":4,"price":53,"equipment":["180_CAM","360_CAM"]},{"id":4,"name":"Ferdy","surname":"McKinley","email":"fmckinley3@vk.com","gender":"Male","photo":"avatar-4.jpg","city":"Napoli","phrase":"Enterprise-wide high-level strategy","rating":3.8,"price":64,"equipment":["360_CAM"]},{"id":5,"name":"Fan","surname":"Morgans","email":"fmorgans4@vimeo.com","gender":"Female","photo":"avatar-5.jpg","city":"Roma","phrase":"Intuitive optimal challenge","rating":3.9,"price":64,"equipment":["180_CAM","360_CAM"]},{"id":6,"name":"Moise","surname":"Keelinge","email":"mkeelinge5@cornell.edu","gender":"Male","photo":"avatar-6.jpg","city":"Bologna","phrase":"Re-contextualized directional groupware","rating":4.2,"price":76,"equipment":["360_CAM"]},{"id":7,"name":"Holly","surname":"Shakshaft","email":"hshakshaft6@youku.com","gender":"Male","photo":"avatar-7.jpg","city":"Milano","phrase":"Optimized even-keeled analyzer","rating":3,"price":28,"equipment":["180_CAM"]},{"id":8,"name":"Nikkie","surname":"Henbury","email":"nhenbury7@chronoengine.com","gender":"Female","photo":"avatar-8.jpg","city":"Venezia","phrase":"Compatible responsive support","rating":4.1,"price":89,"equipment":["180_CAM"]},{"id":9,"name":"Templeton","surname":"Aindrais","email":"taindrais8@blogspot.com","gender":"Genderqueer","photo":"avatar-9.jpg","city":"Altamura","phrase":"Open-architected neutral hierarchy","rating":4,"price":84,"equipment":["180_CAM"]},{"id":10,"name":"Mahmud","surname":"Bentham3","email":"mbentham9@networksolutions.com","gender":"Male","photo":"avatar-10.jpg","city":"Bari","phrase":"Secured bandwidth-monitored protocol","rating":4.9,"price":32,"equipment":["180_CAM","360_CAM"]},{"id":11,"name":"Flori","surname":"Matiashvili","email":"fmatiashvilia@reddit.com","gender":"Female","photo":"avatar-11.jpg","city":"Matera","phrase":"Reduced client-driven methodology","rating":4.3,"price":81,"equipment":["180_CAM"]},{"id":12,"name":"Jaquith","surname":"Thow","email":"jthowb@clickbank.net","gender":"Female","photo":"avatar-12.jpg","city":"Gravina","phrase":"Versatile even-keeled interface","rating":3.9,"price":90,"equipment":["360_CAM"]},{"id":13,"name":"Ekaterina","surname":"MacTurlough","email":"emacturloughc@prlog.org","gender":"Female","photo":"avatar-13.jpg","city":"Matera","phrase":"Grass-roots 6th generation data-warehouse","rating":3.9,"price":23,"equipment":["360_CAM"]},{"id":14,"name":"Bernard","surname":"Dannohl","email":"bdannohld@tripod.com","gender":"Agender","photo":"avatar-14.jpg","city":"Lecce","phrase":"Reduced multimedia hardware","rating":3.7,"price":48,"equipment":["180_CAM"]},{"id":15,"name":"Michele","surname":"Wyd","email":"mwyde@huffingtonpost.com","gender":"Female","photo":"avatar-15.jpg","city":"Firenze","phrase":"Ameliorated real-time benchmark","rating":4,"price":72,"equipment":["180_CAM"]},{"id":16,"name":"Krista","surname":"Schroeder","email":"kschroederf@ezinearticles.com","gender":"Female","photo":"avatar-16.jpg","city":"Milano","phrase":"Phased system-worthy parallelism","rating":4,"price":24,"equipment":["180_CAM"]},{"id":17,"name":"Demetre","surname":"Ghirigori","email":"dghirigorig@foxnews.com","gender":"Male","photo":"avatar-17.jpg","city":"Firenze","phrase":"Optimized user-facing workforce","rating":2.9,"price":68,"equipment":["360_CAM"]},{"id":18,"name":"Humfrey","surname":"Dinnington","email":"hdinningtonh@reuters.com","gender":"Male","photo":"avatar-18.jpg","city":"Napoli","phrase":"Centralized maximized capability","rating":3.5,"price":84,"equipment":["180_CAM","360_CAM"]},{"id":19,"name":"Cher","surname":"Francescozzi","email":"cfrancescozzii@seesaa.net","gender":"Female","photo":"avatar-19.jpg","city":"Roma","phrase":"Automated background installation","rating":4,"price":68,"equipment":["180_CAM"]},{"id":20,"name":"Jesse","surname":"Darkin","email":"jdarkinj@google.co.jp","gender":"Male","photo":"avatar-20.jpg","city":"Torino","phrase":"Vision-oriented bifurcated capability","rating":3.6,"price":22,"equipment":["180_CAM"]}]');class D{constructor(){(0,j.Z)(this,"avatarList",C)}getCities(){return Array.from(new Set(this.avatarList.map((e=>e.city))))}getAvatarsByCity(e){return this.avatarList.filter((t=>t.city===e))}getAvatarById(e){return this.avatarList.filter((t=>t.id===e))[0]}}var A=(0,r.aZ)({components:{OptionsInput:_},computed:{drawerOpened(){return this.$store.state.gui.openDrawer},showSearch(){return this.$store.state.gui.showSearch},cities(){const e=new D;return e.getCities()},badge(){return null!=this.$store.state.settings.installEvent||this.$store.state.settings.updateAvailable}},methods:{toggleDrawer(){this.$store.commit(g)},toggleShowSearch(){this.$store.commit(m)},filterSelected(e){this.$store.commit(v,this.cities[e.detail.index-1])}}});const M=(0,k.Z)(A,[["render",p],["__scopeId","data-v-7cb2522f"]]);var z=M;const S=e=>((0,r.dD)("data-v-8ac77972"),e=e(),(0,r.Cn)(),e),$=S((()=>(0,r._)("span",{slot:"title"},"Avatar",-1))),x={class:"content",slot:"appContent"};function q(e,t,a,i,n,o){const s=(0,r.up)("drawer-content"),c=(0,r.up)("mwc-drawer"),l=(0,r.Q2)("gesture");return(0,r.wg)(),(0,r.j4)(c,{id:"drawer",hasHeader:"",type:"modal",open:e.isOpened,ref:"drawer"},{default:(0,r.w5)((()=>[$,(0,r.wy)((0,r.Wm)(s,null,null,512),[[l,e.onGesture]]),(0,r._)("div",x,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])),_:3},8,["open"])}a(2753);const E=e=>((0,r.dD)("data-v-762f5763"),e=e(),(0,r.Cn)(),e),O={id:"drawer-content"},I=E((()=>(0,r._)("span",{class:"material-icon"},"search",-1))),Z=E((()=>(0,r._)("span",{class:"material-icon"},"date_range",-1))),B=E((()=>(0,r._)("span",{class:"material-icon",badge:"true"},"get_app",-1))),F=E((()=>(0,r._)("span",{class:"material-icon",badge:"true"},"sync",-1))),T={class:"version"};function W(e,t,a,i,n,o){return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("div",{class:"row",onClick:t[0]||(t[0]=(...t)=>e.search&&e.search(...t))},[I,(0,r.Uk)(" "+(0,h.zw)(this.$t.searchAvatar),1)]),(0,r._)("div",{class:"row",onClick:t[1]||(t[1]=(...t)=>e.toBookings&&e.toBookings(...t))},[Z,(0,r.Uk)(" "+(0,h.zw)(this.$t.bookings),1)]),e.installEv?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"row",onClick:t[2]||(t[2]=(...t)=>e.installApp&&e.installApp(...t))},[B,(0,r.Uk)(" "+(0,h.zw)(this.$t.installApp),1)])):(0,r.kq)("",!0),e.updateAvailable?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"row",onClick:t[3]||(t[3]=(...t)=>e.updateApp&&e.updateApp(...t))},[F,(0,r.Uk)(" "+(0,h.zw)(this.$t.updateApp),1)])):(0,r.kq)("",!0),(0,r._)("div",T,"v"+(0,h.zw)(e.version),1)])}var L=(0,r.aZ)({computed:{installEv(){return this.$store.state.settings.installEvent},updateAvailable(){return this.$store.state.settings.updateAvailable},version(){return this.$store.state.settings.version}},methods:{installApp(){this.installEv&&this.installEv.prompt()},updateApp(){this.updateAvailable&&window.location.reload()},search(){"home"!==this.$route.name&&this.$router.push("/"),this.$store.commit(g,!1),this.$store.commit(m,!0)},toBookings(){this.$store.commit(g,!1),this.$router.push("/bookings")}}});const N=(0,k.Z)(L,[["render",W],["__scopeId","data-v-762f5763"]]);var P=N,H=(0,r.aZ)({components:{DrawerContent:P},mounted(){this.$refs.drawer.addEventListener("MDCDrawer:closed",this.onClose)},computed:{isOpened(){return this.$store.state.gui.openDrawer}},methods:{onClose(){this.$store.commit(g,!1)},onGesture(e){e.x<-50&&this.$store.commit(g,!1)}}});const G=(0,k.Z)(H,[["render",q],["__scopeId","data-v-8ac77972"]]);var K=G;const Y={state:{installEvent:null,updateAvailable:!1,version:null,notificationsGranted:"granted"===Notification.permission},mutations:{setInstallEvent(e,t){e.installEvent=t},setUpdateAvailable(e,t=!0){e.updateAvailable=t},setVersion(e,t){e.version=t},setNotificationsGranted(e,t="granted"===Notification.permission){e.notificationsGranted=t}},actions:{}},U="setInstallEvent",R="setUpdateAvailable",J="setVersion";var V=(0,r.aZ)({components:{TopAppBar:z,DrawerMenu:K},created(){window.addEventListener("beforeinstallprompt",(e=>{this.$store.commit(U,e)}))}});const Q=(0,k.Z)(V,[["render",n]]);var X=Q;const ee={beforeMount(e,t){e.clickOutsideEvent=function(a){e===a.target||e.contains(a.target)||t.value(a,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},te={beforeMount(e,t){e.gestureEvent=function(a){if("touchstart"===a.type&&(e.touchStart=[a.changedTouches[0].screenX,a.changedTouches[0].screenY]),"touchend"===a.type){const i=e.touchStart,r=[a.changedTouches[0].screenX,a.changedTouches[0].screenY],n={x:r[0]-i[0],y:r[1]-i[1]};t.value(n,e)}},document.body.addEventListener("touchmove",e.gestureEvent),document.body.addEventListener("touchstart",e.gestureEvent),document.body.addEventListener("touchend",e.gestureEvent)},unmounted(e){document.body.removeEventListener("touchmove",e.gestureEvent),document.body.removeEventListener("touchstart",e.gestureEvent),document.body.removeEventListener("touchend",e.gestureEvent)}};var ae=a(5431),ie=a(65);function re(e,t){const a=t,i=(...[t,i])=>{a(t,i);const r=JSON.stringify(t[e]);localStorage.setItem(e,r)};return i}function ne(e,t){const a=JSON.parse(localStorage.getItem(e));return a||t}const oe={state:{bookings:ne("bookings",[])},mutations:{addBooking:re("bookings",((e,t)=>{e.bookings.push(t)})),removeBooking:re("bookings",((e,t)=>{e.bookings.splice(e.bookings.map((e=>e.id)).indexOf(t),1)}))},actions:{}},se="addBooking",ce=Symbol(),le=(0,ie.MT)({modules:{settings:Y,gui:u,user:oe}});(0,ae.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),le.commit(R)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var de=a(678);const pe={class:"home"},ue={class:"avatars"};function ge(e,t,a,i,n,o){const s=(0,r.up)("avatar-card"),c=(0,r.up)("fab-button"),l=(0,r.Q2)("gesture");return(0,r.wg)(),(0,r.iD)("div",pe,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",ue,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.avatars,(t=>((0,r.wg)(),(0,r.j4)(s,{key:t.id,avatar:t,onClick:a=>e.goToAvatarPage(t.id)},null,8,["avatar","onClick"])))),128))])),[[l,e.onGesture]]),(0,r.Wm)(c,{icon:"filter_list",label:e.$t.filter,expanded:e.expandedFab,onClick:e.search},null,8,["label","expanded","onClick"])])}const me={class:"avatar-card"},ve={class:"photo"},he=["src"],we={class:"description"},fe={class:"name headline5"},be={class:"city"},ke={class:"equipment"},ye={id:"icon",class:"material-icon"},_e={class:"price"};function je(e,t,i,n,o,s){const c=(0,r.up)("rating-stars");return(0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("div",ve,[(0,r._)("img",{src:a(9671)(`./${e.avatar.photo}`)},null,8,he)]),(0,r._)("div",we,[(0,r._)("div",fe,(0,h.zw)(e.avatar.name)+" "+(0,h.zw)(e.avatar.surname),1),(0,r._)("div",be,(0,h.zw)(e.avatar.city),1),(0,r._)("div",ke,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.avatar.equipment,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"icon",key:e},[(0,r._)("span",ye,(0,h.zw)("180_CAM"===e?"vrpano":"360"),1)])))),128))]),(0,r.Wm)(c,{rating:e.avatar.rating,class:"rating"},null,8,["rating"]),(0,r._)("div",_e,(0,h.zw)(e.avatar.price)+" €/h",1)])])}const Ce={class:"rating"};function De(e,t,a,i,n,o){return(0,r.wg)(),(0,r.iD)("div",Ce,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Math.floor(e.rating),(e=>((0,r.wg)(),(0,r.iD)("span",{class:"star material-icon",key:e},"star")))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Math.round(e.rating%1),(e=>((0,r.wg)(),(0,r.iD)("span",{class:"star material-icon",key:e},"star_half")))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Math.round(5-e.rating),(e=>((0,r.wg)(),(0,r.iD)("span",{class:"star material-icon",key:e},"star_outline")))),128))])}var Ae=(0,r.aZ)({props:{rating:Number}});const Me=(0,k.Z)(Ae,[["render",De]]);var ze=Me,Se=(0,r.aZ)({components:{RatingStars:ze},props:{avatar:Object}});const $e=(0,k.Z)(Se,[["render",je],["__scopeId","data-v-04e58274"]]);var xe=$e;const qe={class:"material-icon"},Ee={key:0};function Oe(e,t,a,n,o,s){return(0,r.wg)(),(0,r.iD)("div",{class:"fab",onClick:t[0]||(t[0]=(...t)=>e.search&&e.search(...t))},[(0,r._)("span",qe,(0,h.zw)(e.icon),1),(0,r.Wm)(i.uT,{name:"fade"},{default:(0,r.w5)((()=>[e.expanded?((0,r.wg)(),(0,r.iD)("label",Ee,(0,h.zw)(e.label),1)):(0,r.kq)("",!0)])),_:1})])}var Ie=(0,r.aZ)({props:{icon:{type:String,required:!0},label:{type:String,required:!1},expanded:{type:Boolean,required:!1,default:!1}}});const Ze=(0,k.Z)(Ie,[["render",Oe],["__scopeId","data-v-6bd896a2"]]);var Be=Ze,Fe=(0,r.aZ)({data(){return{expandedFab:!0}},components:{AvatarCard:xe,FabButton:Be},computed:{avatars(){const e=new D,t=this.$store.state.gui.selectedCity;return t&&""!==t?e.getAvatarsByCity(t):e.avatarList}},methods:{search(){this.$store.commit(m,!0),window.scrollTo({top:0,behavior:"smooth"})},onGesture(e){e.y>50&&(this.expandedFab=!0),e.y<-50&&(this.expandedFab=!1)},goToAvatarPage(e){console.log(e),this.$router.push(`/avatar/${e}`)}}});const Te=(0,k.Z)(Fe,[["render",ge],["__scopeId","data-v-14ba5e90"]]);var We=Te;const Le=e=>((0,r.dD)("data-v-939d3adc"),e=e(),(0,r.Cn)(),e),Ne={id:"ava"},Pe={key:0,id:"avatar"},He={class:"head"},Ge={class:"image"},Ke=["src"],Ye={class:"asd"},Ue={class:"name headline5"},Re={class:"city"},Je={class:"price"},Ve=Le((()=>(0,r._)("div",{class:"divider"},null,-1))),Qe={class:"phrase"},Xe=Le((()=>(0,r._)("div",{class:"divider"},null,-1))),et={class:"equipment"},tt={class:"headline6"},at={id:"icon",class:"material-icon"},it={for:"icon"},rt=Le((()=>(0,r._)("div",{class:"divider"},null,-1))),nt={class:"reviews"},ot={class:"headline6"},st={class:"num"},ct={key:1,class:"booking-view"},lt={class:"headline6"};function dt(e,t,n,o,s,c){const l=(0,r.up)("rating-stars"),d=(0,r.up)("mwc-textfield"),p=(0,r.up)("mwc-textarea"),u=(0,r.up)("fab-button");return(0,r.wg)(),(0,r.iD)("div",Ne,[(0,r.Wm)(i.uT,{name:"slide-right",mode:"out-in"},{default:(0,r.w5)((()=>[e.isBooking?((0,r.wg)(),(0,r.iD)("div",ct,[(0,r._)("div",lt,(0,h.zw)(e.$t.addDetails),1),(0,r.Wm)(d,{outlined:"",label:"Data",icon:"date_range",type:"date",min:(new Date).toISOString().split("T")[0],onInput:t[0]||(t[0]=t=>e.bookDate=t.target.value)},null,8,["min"]),(0,r.Wm)(p,{outlined:"",label:"Descrizione",onInput:t[1]||(t[1]=t=>e.bookDescription=t.target.value)})])):((0,r.wg)(),(0,r.iD)("div",Pe,[(0,r._)("div",He,[(0,r._)("div",Ge,[(0,r._)("img",{src:a(9671)(`./${e.avatar.photo}`)},null,8,Ke)]),(0,r._)("div",Ye,[(0,r._)("div",Ue,(0,h.zw)(e.avatar.name)+" "+(0,h.zw)(e.avatar.surname),1),(0,r._)("div",Re,(0,h.zw)(e.avatar.city),1),(0,r._)("div",Je,(0,h.zw)(e.avatar.price)+" €/h",1)])]),Ve,(0,r._)("div",Qe,(0,h.zw)(e.avatar.phrase),1),Xe,(0,r._)("div",et,[(0,r._)("div",tt,(0,h.zw)(e.$t.equipment),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.avatar.equipment,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"eq",key:e},[(0,r._)("span",at,(0,h.zw)("180_CAM"===e?"vrpano":"360"),1),(0,r._)("label",it,(0,h.zw)("180_CAM"===e?"Camera a 180˚":"Camera a 360˚"),1)])))),128))]),rt,(0,r._)("div",nt,[(0,r._)("div",ot,(0,h.zw)(e.$t.reviews),1),(0,r.Wm)(l,{rating:e.avatar.rating},null,8,["rating"]),(0,r._)("div",st,"("+(0,h.zw)(e.avatar.rating)+")",1)])]))])),_:1}),(0,r.Wm)(u,{icon:e.isBooking?"event_available":"date_range",label:e.$t.book,expanded:!0,onClick:e.book},null,8,["icon","label","onClick"])])}a(6722),a(5599);class pt{constructor({date:e,avatarId:t,description:a}){(0,j.Z)(this,"id",void 0),(0,j.Z)(this,"date",void 0),(0,j.Z)(this,"avatarId",void 0),(0,j.Z)(this,"description",void 0),this.id=Math.random().toString(36).replace("0.",""),this.date=e,this.avatarId=t,this.description=a}}var ut=(0,r.aZ)({components:{RatingStars:ze,FabButton:Be},data(){const e=new D,t=e.getAvatarById(parseInt(this.$route.params.id));return{avatar:t,isBooking:!1,bookDate:0,bookDescription:""}},methods:{book(){this.isBooking?(this.$store.commit(se,new pt({date:new Date(this.bookDate).getTime(),avatarId:this.avatar.id,description:this.bookDescription})),this.$router.push("/bookCompleted")):this.isBooking=!0}}});const gt=(0,k.Z)(ut,[["render",dt],["__scopeId","data-v-939d3adc"]]);var mt=gt;const vt=e=>((0,r.dD)("data-v-45e40909"),e=e(),(0,r.Cn)(),e),ht={id:"book-completed"},wt={key:0,class:"waiting"},ft={key:1,class:"message"},bt=vt((()=>(0,r._)("div",null,"Prenotazione effettuata",-1))),kt=[bt];function yt(e,t,a,i,n,o){return(0,r.wg)(),(0,r.iD)("div",ht,[e.waiting?((0,r.wg)(),(0,r.iD)("div",wt,"Prenotazione in corso...")):((0,r.wg)(),(0,r.iD)("div",ft,kt))])}var _t=(0,r.aZ)({components:{},data(){return{waiting:!0}},mounted(){setTimeout((()=>this.waiting=!1),1500)}});const jt=(0,k.Z)(_t,[["render",yt],["__scopeId","data-v-45e40909"]]);var Ct=jt;const Dt={id:"bookings"},At={key:0,class:"no-bookings"};function Mt(e,t,a,i,n,o){const s=(0,r.up)("book-card");return(0,r.wg)(),(0,r.iD)("div",Dt,[0===e.bookings.length?((0,r.wg)(),(0,r.iD)("div",At,(0,h.zw)(this.$t.noBookings),1)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(e.bookings,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"booking",key:e.id},[(0,r.Wm)(s,{book:e},null,8,["book"])])))),128))])}const zt={id:"book-card"},St={class:"avatar-name"},$t={class:"city"},xt={class:"date"},qt={class:"description"};function Et(e,t,a,i,n,o){return(0,r.wg)(),(0,r.iD)("div",zt,[(0,r._)("div",St,(0,h.zw)(e.avatar.name)+" "+(0,h.zw)(e.avatar.surname),1),(0,r._)("div",$t,(0,h.zw)(e.avatar.city),1),(0,r._)("div",xt,(0,h.zw)(new Date(e.book.date).toLocaleDateString()),1),(0,r._)("div",qt,(0,h.zw)(e.book.description),1)])}var Ot=(0,r.aZ)({props:{book:{required:!0,type:Object}},computed:{avatar(){const e=new D;return e.getAvatarById(this.book.avatarId)}}});const It=(0,k.Z)(Ot,[["render",Et],["__scopeId","data-v-604a08d0"]]);var Zt=It,Bt=(0,r.aZ)({components:{BookCard:Zt},data(){return{waiting:!0}},computed:{bookings(){return this.$store.state.user.bookings}}});const Ft=(0,k.Z)(Bt,[["render",Mt],["__scopeId","data-v-1110a843"]]);var Tt=Ft;const Wt=[{path:"/",name:"home",component:We},{path:"/avatar/:id/booking",component:mt,alias:["/avatar/:id"]},{path:"/bookCompleted",component:Ct},{path:"/bookings",component:Tt}],Lt=(0,de.p7)({history:(0,de.r5)(),routes:Wt});var Nt=Lt;const Pt={bookings:"Prenotazioni",noBookings:"Non hai ancora prenotazioni",searchAvatar:"Cerca avatar",installApp:"Installa app",updateApp:"Aggiorna app",equipment:"Equipaggiamento:",reviews:"Recensioni:",addDetails:"Qualche ultimo dettaglio prima di prenotare",filter:"Filtra",book:"Prenota"},Ht=(0,i.ri)(X).use(le,ce).use(Nt).directive("click-outside",ee).directive("gesture",te),Gt=Pt;Ht.config.globalProperties.$t=Gt,Ht.config.globalProperties.$store=le,Ht.mount("#app"),console.log("v0.2.0"),le.commit(J,"0.2.0")},9671:function(e,t,a){var i={"./avatar-1.jpg":3043,"./avatar-10.jpg":7681,"./avatar-11.jpg":2413,"./avatar-12.jpg":8024,"./avatar-13.jpg":2817,"./avatar-14.jpg":9393,"./avatar-15.jpg":2970,"./avatar-16.jpg":5592,"./avatar-17.jpg":9682,"./avatar-18.jpg":4891,"./avatar-19.jpg":3467,"./avatar-2.jpg":9416,"./avatar-20.jpg":8010,"./avatar-3.jpg":2673,"./avatar-4.jpg":258,"./avatar-5.jpg":506,"./avatar-6.jpg":1964,"./avatar-7.jpg":9067,"./avatar-8.jpg":2565,"./avatar-9.jpg":8138};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=9671},3043:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-1.ff7b1fbf.jpg"},7681:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-10.1f3cca13.jpg"},2413:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-11.ead5d646.jpg"},8024:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-12.6800376e.jpg"},2817:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-13.a41bf0c6.jpg"},9393:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-14.3afc014e.jpg"},2970:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-15.ee1285d4.jpg"},5592:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-16.60ab30a4.jpg"},9682:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-17.93de64dd.jpg"},4891:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-18.6ab7448e.jpg"},3467:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-19.94c60630.jpg"},9416:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-2.cd00a765.jpg"},8010:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-20.395136ca.jpg"},2673:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-3.58d1e595.jpg"},258:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-4.139934b8.jpg"},506:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-5.0d89ae3d.jpg"},1964:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-6.cf15a025.jpg"},9067:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-7.0c2c09b1.jpg"},2565:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-8.fae1495e.jpg"},8138:function(e,t,a){"use strict";e.exports=a.p+"img/avatar-9.8aed195f.jpg"}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,r,n){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],n=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[c])}))?i.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,o=i[0],s=i[1],c=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var d=c(a)}for(t&&t(i);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},i=self["webpackChunkavatar_fe"]=self["webpackChunkavatar_fe"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8278)}));i=a.O(i)})();
//# sourceMappingURL=app.97e80eb0.js.map