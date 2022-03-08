"use strict";
(self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || []).push([["src_views_UseCar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Activity_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Activity.vue */ "./src/components/Activity.vue");
/* harmony import */ var _model_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/Section */ "./src/model/Section.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _services_CarService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/CarService */ "./src/services/CarService.ts");





/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  components: {
    Activity: _components_Activity_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  /* data() { // TODO - inserendo l'url di questa pagina direttamente nella barra degli indirizzi non ci saranno macchine
  }, */
  computed: {
    cars: () => _store__WEBPACK_IMPORTED_MODULE_2__.store.state.appState.cars,
    sections: () => {
      const cars = _store__WEBPACK_IMPORTED_MODULE_2__.store.state.appState.cars;
      const sect = [{
        id: "car",
        question: "Scegli una macchina",
        options: cars ? cars.filter(c => !c.out).map(c => ({
          id: c.plate,
          value: `${c.model} (${c.plate})`
        })) : [],
        type: _model_Section__WEBPACK_IMPORTED_MODULE_1__.SectionType.OPTIONS,
        mandatory: true
      }, {
        id: "causal",
        question: "Causale",
        type: _model_Section__WEBPACK_IMPORTED_MODULE_1__.SectionType.OPEN,
        mandatory: true
      }, {
        id: "odometer",
        question: "Contachilometri alla partenza",
        type: _model_Section__WEBPACK_IMPORTED_MODULE_1__.SectionType.OPEN,
        mandatory: true,
        inputMode: 'numeric'
      }];
      return sect;
    }
  },

  /* watch: {
    "$store.state.appState.cars"(nv) {
      this.cars = nv;
      console.log(this.cars);
      
    },
  }, */
  methods: {
    async onSubmit(res) {
      //TODO - Soluzione provvisoria
      if (_store__WEBPACK_IMPORTED_MODULE_2__.store.state.appState.user.usingCar) {
        this.$router.push("/");
      }

      const carService = new _services_CarService__WEBPACK_IMPORTED_MODULE_4__.CarService();
      const car = res.car.id;

      if (car) {
        await carService.takeCar(res.causal, res.odometer, car);
        this.$router.push("/");
      }
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prendi una macchina ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Activity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Activity");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Activity, {
    sections: _ctx.sections,
    submitText: "Prendi",
    onOnSubmit: _ctx.onSubmit
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["sections", "onOnSubmit"]);
}

/***/ }),

/***/ "./src/views/UseCar.vue":
/*!******************************!*\
  !*** ./src/views/UseCar.vue ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UseCar_vue_vue_type_template_id_44b535f2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UseCar.vue?vue&type=template&id=44b535f2&ts=true */ "./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true");
/* harmony import */ var _UseCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UseCar.vue?vue&type=script&lang=ts */ "./src/views/UseCar.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UseCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UseCar_vue_vue_type_template_id_44b535f2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/UseCar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/UseCar.vue?vue&type=script&lang=ts":
/*!******************************************************!*\
  !*** ./src/views/UseCar.vue?vue&type=script&lang=ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCar.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true":
/*!********************************************************************!*\
  !*** ./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCar_vue_vue_type_template_id_44b535f2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCar_vue_vue_type_template_id_44b535f2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCar.vue?vue&type=template&id=44b535f2&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UseCar.vue?vue&type=template&id=44b535f2&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_views_UseCar_vue.js.map