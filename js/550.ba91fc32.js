"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[550],{5248:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=a(6252),n=a(3577);function o(t,e,a,o,r,i){const u=(0,s.up)("Activity");return(0,s.wg)(),(0,s.j4)(u,{sections:t.sections,submitText:`${t.$t.leaveCarBtn} ${t.carModel?t.carModel:""}`,onOnSubmit:t.onSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(t.$t.leaveCarTitle),1)])),_:1},8,["sections","submitText","onOnSubmit"])}var r=a(5883),i=a(9894),u=a(7627),c=a(1756),d=a(2792),p=(0,s.aZ)({components:{Activity:r.Z},mounted(){u.h.dispatch(c.VX)},data(){u.h.state.appState.cars;const t=[{id:"odometer",question:this.$t.stopOdometer,type:i.b.OPEN,mandatory:!0,inputMode:"numeric"},{id:"declarations",question:this.$t.declarations,type:i.b.OPEN,mandatory:!1}];return{sections:t}},methods:{async onSubmit(t){u.h.state.appState.user.usingCar&&this.$router.push("/");const e=new d.Z,a=u.h.state.appState.user.car;a&&(await e.leaveCar(t.odometer,a,t.declarations),this.$router.push("/"))}},computed:{carModel:()=>u.h.getters.usedCar?u.h.getters.usedCar.model:null}}),l=a(3744);const h=(0,l.Z)(p,[["render",o]]);var m=h}}]);
//# sourceMappingURL=550.ba91fc32.js.map