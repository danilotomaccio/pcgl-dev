"use strict";(self["webpackChunkprotezione_civile"]=self["webpackChunkprotezione_civile"]||[]).push([[349],{1249:function(t,e,n){var r=n(2109),a=n(2092).map,o=n(1194),i=o("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},205:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(6252),a=n(3577);function o(t,e,n,o,i,u){var s=(0,r.up)("Activity");return(0,r.wg)(),(0,r.j4)(s,{sections:t.sections,submitText:"".concat(t.$t.useCarBtn),onOnSubmit:t.onSubmit},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(t.$t.useCarTitle),1)]})),_:1},8,["sections","submitText","onOnSubmit"])}var i=n(8534),u=(n(5666),n(1249),n(7327),n(1539),n(2222),n(5883)),s=n(9894),c=n(7627),p=n(2792),m=(0,r.aZ)({components:{Activity:u.Z},computed:{cars:function(){return c.h.state.appState.cars},sections:function(){var t=c.h.state.appState.cars,e=[{id:"car",question:this.$t.chooseCar,options:t?t.filter((function(t){return!t.out})).map((function(t){return{id:t.plate,value:"".concat(t.model," (").concat(t.plate,")")}})):[],type:s.b.OPTIONS,mandatory:!0},{id:"causal",question:this.$t.causal,type:s.b.OPEN,mandatory:!0},{id:"odometer",question:this.$t.startOdometer,type:s.b.OPEN,mandatory:!0,inputMode:"numeric"}];return e}},methods:{onSubmit:function(t){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==(r=c.h.state.appState.user)&&void 0!==r&&r.usingCar&&e.$router.push("/"),a=new p.Z,o=t.car.id,!o){n.next=7;break}return n.next=6,a.takeCar(t.causal,t.odometer,o);case 6:e.$router.push("/");case 7:case"end":return n.stop()}}),n)})))()}}}),d=n(3744);const f=(0,d.Z)(m,[["render",o]]);var l=f}}]);
//# sourceMappingURL=349-legacy.6e7aae98.js.map