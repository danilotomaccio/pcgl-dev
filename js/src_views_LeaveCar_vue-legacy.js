"use strict";
(self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || []).push([["src_views_LeaveCar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Activity_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Activity.vue */ "./src/components/Activity.vue");
/* harmony import */ var _model_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/model/Section */ "./src/model/Section.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _store_modules_appState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/modules/appState */ "./src/store/modules/appState.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _services_CarService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/CarService */ "./src/services/CarService.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_6__.defineComponent)({
  components: {
    Activity: _components_Activity_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch(_store_modules_appState__WEBPACK_IMPORTED_MODULE_5__.LISTEN_CARS);
  },
  data: function data() {
    var cars = _store__WEBPACK_IMPORTED_MODULE_4__.store.state.appState.cars;
    var sections = [{
      id: "odometer",
      question: "Contachilometri finale",
      type: _model_Section__WEBPACK_IMPORTED_MODULE_3__.SectionType.OPEN,
      mandatory: true,
      inputMode: 'numeric'
    }, {
      id: "declarations",
      question: "Qualcosa da dichiarare?",
      type: _model_Section__WEBPACK_IMPORTED_MODULE_3__.SectionType.OPEN,
      mandatory: false
    }];
    return {
      sections: sections
    };
  },
  methods: {
    onSubmit: function onSubmit(res) {
      var _this = this;

      return (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _store$state$appState, _store$state$appState2;

        var carService, carPlate;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //TODO - Soluzione provvisoria
                if ((_store$state$appState = _store__WEBPACK_IMPORTED_MODULE_4__.store.state.appState.user) !== null && _store$state$appState !== void 0 && _store$state$appState.usingCar) {
                  _this.$router.push("/");
                }

                carService = new _services_CarService__WEBPACK_IMPORTED_MODULE_7__.CarService();
                carPlate = (_store$state$appState2 = _store__WEBPACK_IMPORTED_MODULE_4__.store.state.appState.user) === null || _store$state$appState2 === void 0 ? void 0 : _store$state$appState2.car;

                if (!carPlate) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return carService.leaveCar(res.odometer, carPlate, res.declarations);

              case 6:
                _this.$router.push("/");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    carModel: function carModel() {
      return _store__WEBPACK_IMPORTED_MODULE_4__.store.getters.usedCar ? _store__WEBPACK_IMPORTED_MODULE_4__.store.getters.usedCar.model : null;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prendi una macchina ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Activity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Activity");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Activity, {
    sections: _ctx.sections,
    submitText: "Lascia ".concat(_ctx.carModel ? _ctx.carModel : ''),
    onOnSubmit: _ctx.onSubmit
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["sections", "submitText", "onOnSubmit"]);
}

/***/ }),

/***/ "./src/views/LeaveCar.vue":
/*!********************************!*\
  !*** ./src/views/LeaveCar.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaveCar_vue_vue_type_template_id_ceeab552_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveCar.vue?vue&type=template&id=ceeab552&ts=true */ "./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true");
/* harmony import */ var _LeaveCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveCar.vue?vue&type=script&lang=ts */ "./src/views/LeaveCar.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LeaveCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LeaveCar_vue_vue_type_template_id_ceeab552_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/LeaveCar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/LeaveCar.vue?vue&type=script&lang=ts":
/*!********************************************************!*\
  !*** ./src/views/LeaveCar.vue?vue&type=script&lang=ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCar.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true":
/*!**********************************************************************!*\
  !*** ./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCar_vue_vue_type_template_id_ceeab552_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCar_vue_vue_type_template_id_ceeab552_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCar.vue?vue&type=template&id=ceeab552&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/LeaveCar.vue?vue&type=template&id=ceeab552&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_views_LeaveCar_vue-legacy.js.map