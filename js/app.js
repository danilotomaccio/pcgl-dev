/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _services_FirebaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/FirebaseService */ "./src/services/FirebaseService.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _store_modules_appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/modules/appState */ "./src/store/modules/appState.ts");
/* harmony import */ var _store_modules_firebaseModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/modules/firebaseModule */ "./src/store/modules/firebaseModule.ts");






/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  created() {
    window.addEventListener("beforeinstallprompt", ev => {
      this.$store.commit(_store_modules_appState__WEBPACK_IMPORTED_MODULE_2__.SET_INSTALL_EVENT, ev);
    });
    const app = _services_FirebaseService__WEBPACK_IMPORTED_MODULE_0__.FirebaseService.getApp();
    (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)(_store__WEBPACK_IMPORTED_MODULE_1__.key).dispatch(_store_modules_firebaseModule__WEBPACK_IMPORTED_MODULE_3__.LISTEN_USER_AUTH);
  },

  methods: {//
  },
  computed: {
    messages() {
      return this.$store.state.messages.messages;
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/esm2017/index.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* import {
  CHANGE_MAX_BOMB_TIME,
  CHANGE_MIN_BOMB_TIME,
  TOGGLE_FONT,
  TOGGLE_FULL_SCREEN,
} from "@/store/modules/SettingsModule"; */


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  data() {
    const showMenu = false;
    return {
      showMenu
    };
  },

  methods: {
    onClickOutside() {
      this.showMenu = false;
    },

    logout() {
      (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)((0,_firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)()); //TODO - Fare logout altrove?

      this.$router.push("login");
    },

    installApp() {
      if (this.installEv) {
        this.installEv.prompt();
      }
    }

  },
  computed: {
    installEv() {
      return this.$store.state.appState.installEvent;
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js");
/* harmony import */ var _components_UseCarButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UseCarButton.vue */ "./src/components/UseCarButton.vue");
/* harmony import */ var _components_LeaveCarButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/LeaveCarButton.vue */ "./src/components/LeaveCarButton.vue");
/* harmony import */ var _components_AdminButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AdminButton.vue */ "./src/components/AdminButton.vue");
/* harmony import */ var _components_Settings_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Settings.vue */ "./src/components/Settings.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _store_modules_appState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/modules/appState */ "./src/store/modules/appState.ts");









let Home = class Home extends vue_class_component__WEBPACK_IMPORTED_MODULE_6__.Vue {};
Home = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,vue_class_component__WEBPACK_IMPORTED_MODULE_6__.Options)({
  components: {
    UseCarButton: _components_UseCarButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    LeaveCarButton: _components_LeaveCarButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminButton: _components_AdminButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Settings: _components_Settings_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  mounted() {
    // if (this.hasPermission("usecar")) { //TODO !!!
    _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch(_store_modules_appState__WEBPACK_IMPORTED_MODULE_5__.LISTEN_CARS); // }
  },

  computed: {
    displayName() {
      return (0,vuex__WEBPACK_IMPORTED_MODULE_8__.useStore)(_store__WEBPACK_IMPORTED_MODULE_4__.key).state.firebase.user?.displayName;
    },

    usingCar: () => _store__WEBPACK_IMPORTED_MODULE_4__.store.state.appState.user.usingCar,

    usecar() {
      return this.hasPermission("usecar");
    },

    headerString() {
      const usedCar = _store__WEBPACK_IMPORTED_MODULE_4__.store.getters.usedCar;

      if (usedCar) {
        return `Come va la ${usedCar.model}?`;
      }

      return `Ciao${this.displayName ? ", " + this.displayName : ""}!`;
    }

  },
  methods: {
    hasPermission(permission) {
      const user = _store__WEBPACK_IMPORTED_MODULE_4__.store.state.appState.user;

      if (user) {
        return user.permissions[permission] != null;
      }
    }

  }
})], Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  id: "notification"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.messages.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.messages[_ctx.messages.length - 1]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({
      Component,
      route
    }) => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
      name: route.meta.transition || 'fade',
      mode: "out-in"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(Component)))]),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["name"])]),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-47aa12d3"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  id: "more_menu"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "material-icon"
}, "more_vert", -1
/* HOISTED */
));

const _hoisted_3 = [_hoisted_2];
const _hoisted_4 = {
  key: 0,
  id: "menu"
};
const _hoisted_5 = {
  class: "text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("click-outside");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "menu_btn",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.showMenu = !_ctx.showMenu)
  }, _hoisted_3), _ctx.showMenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_ctx.installEv ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "option",
    onClick: _cache[1] || (_cache[1] = //@ts-ignore
    (...args) => _ctx.installApp && _ctx.installApp(...args))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.install), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "option",
    onClick: _cache[2] || (_cache[2] = //@ts-ignore
    (...args) => _ctx.logout && _ctx.logout(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.logout), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])), [[_directive_click_outside, _ctx.onClickOutside]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fae5bece"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  id: "home"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "background"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "header"
})], -1
/* HOISTED */
));

const _hoisted_3 = {
  class: "foreground"
};
const _hoisted_4 = {
  class: "header"
};
const _hoisted_5 = {
  class: "activities"
};
const _hoisted_6 = {
  key: 0,
  class: "car"
};
const _hoisted_7 = {
  key: 1,
  class: "admin"
};
const _hoisted_8 = {
  key: 2,
  class: "no_permission"
};

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "material-icon"
}, "sentiment_dissatisfied")], -1
/* HOISTED */
));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Settings");

  const _component_LeaveCarButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LeaveCarButton");

  const _component_UseCarButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UseCarButton");

  const _component_AdminButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Settings), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.headerString), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_ctx.usecar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_ctx.usingCar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LeaveCarButton, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_UseCarButton, {
    key: 1
  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.hasPermission('admin') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminButton)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.hasPermission('admin') && !_ctx.usecar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.noPermission), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  <div class=\"other\">\n          Per il momento è tutto ma se lavorerai sodo e farai tutto quello che\n          ti viene detto senza fare domande un giorno anche tu potrai fare altre\n          cose oltre a quelle sopra elencate\n        </div> ")])])]);
}

/***/ }),

/***/ "./src/directives/click-outside.ts":
/*!*****************************************!*\
  !*** ./src/directives/click-outside.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickOutsideDirective": function() { return /* binding */ clickOutsideDirective; }
/* harmony export */ });
const clickOutsideDirective = {
  beforeMount(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },

  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }

};

/***/ }),

/***/ "./src/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./src/firebaseConfig.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": function() { return /* binding */ firebaseConfig; },
/* harmony export */   "vapidKey": function() { return /* binding */ vapidKey; }
/* harmony export */ });
/* export const firebaseConfig = {
    apiKey: "AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",
    authDomain: "pcgltricarico05.firebaseapp.com",
    databaseURL: "https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pcgltricarico05",
    storageBucket: "pcgltricarico05.appspot.com",
    messagingSenderId: "320152077505",
    appId: "1:320152077505:web:f4c84686f061134a78c040",
    measurementId: "G-7ZHL4J15XG"
};
export const vapidKey = "BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU"; */
const firebaseConfig = {
  apiKey: "AIzaSyCGLXls0uwohW8UczwMuMPgY61QRCyjydA",
  authDomain: "soter-ia.firebaseapp.com",
  databaseURL: "https://soter-ia.firebaseio.com",
  projectId: "soter-ia",
  storageBucket: "soter-ia.appspot.com",
  messagingSenderId: "712755300293",
  appId: "1:712755300293:web:9c91cc4c98e2a36b77edac",
  measurementId: "G-6Y82RJ5Q37"
};
const vapidKey = "BLz4hW8tcGGVq3HkDTlruyQO4mW-IfHrG_5cNdkfW8zFfTHAjSXaGIqb4jE63RIWhBsf-ob_7z2X5N6ItZ-phyM";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/click-outside */ "./src/directives/click-outside.ts");
/* harmony import */ var _registerServiceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerServiceWorker */ "./src/registerServiceWorker.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/router/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strings */ "./src/strings.ts");








const app = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]).use(_store__WEBPACK_IMPORTED_MODULE_6__.store, _store__WEBPACK_IMPORTED_MODULE_6__.key).use(_router__WEBPACK_IMPORTED_MODULE_5__["default"]).directive('click-outside', _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__.clickOutsideDirective);
const t = _strings__WEBPACK_IMPORTED_MODULE_7__.strings;
const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getMessaging)();
app.config.globalProperties.$t = t;
app.config.globalProperties.$store = _store__WEBPACK_IMPORTED_MODULE_6__.store; // TODO - Mi sa che non serve

app.mount('#app');

/***/ }),

/***/ "./src/registerServiceWorker.ts":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var register_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! register-service-worker */ "./node_modules/register-service-worker/index.js");
/* eslint-disable no-console */
 // if (process.env.NODE_ENV === 'production') {

(0,register_service_worker__WEBPACK_IMPORTED_MODULE_0__.register)(`${"/"}service-worker.js`, {
  ready() {
    console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
  },

  registered() {
    console.log('Service worker has been registered.');
  },

  cached() {
    console.log('Content has been cached for offline use.');
  },

  updatefound() {
    console.log('New content is downloading.');
  },

  updated() {
    console.log('New content is available; please refresh.');
  },

  offline() {
    console.log('No internet connection found. App is running in offline mode.');
  },

  error(error) {
    console.error('Error during service worker registration:', error);
  }

}); // }

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Home.vue */ "./src/views/Home.vue");



const routes = [{
  path: '/',
  name: 'Home',
  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  meta: {
    requireLogin: true
  }
}, {
  path: '/login',
  name: 'Login',
  component: () => __webpack_require__.e(/*! import() */ "src_views_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../views/Login.vue */ "./src/views/Login.vue"))
}, {
  path: '/usecar',
  name: 'Use car',
  component: () => Promise.all(/*! import() */[__webpack_require__.e("src_services_CarService_ts-src_components_Activity_vue"), __webpack_require__.e("src_views_UseCar_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/UseCar.vue */ "./src/views/UseCar.vue")),
  meta: {
    transition: 'expand-card',
    requireLogin: true
  }
}, {
  path: '/leavecar',
  name: 'Leave car',
  component: () => Promise.all(/*! import() */[__webpack_require__.e("src_services_CarService_ts-src_components_Activity_vue"), __webpack_require__.e("src_views_LeaveCar_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/LeaveCar.vue */ "./src/views/LeaveCar.vue")),
  meta: {
    transition: 'expand-card',
    requireLogin: true
  }
}, {
  path: '/admin',
  name: 'Admin',
  component: () => __webpack_require__.e(/*! import() */ "src_views_Admin_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../views/Admin.vue */ "./src/views/Admin.vue")),
  meta: {
    transition: 'expand-card',
    requireLogin: true
  },
  children: [{
    path: '',
    component: () => __webpack_require__.e(/*! import() */ "src_views_AdminHome_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AdminHome.vue */ "./src/views/AdminHome.vue")),
    meta: {
      transition: 'expand-card',
      requireLogin: true
    }
  }, {
    path: 'notifications',
    component: () => __webpack_require__.e(/*! import() */ "src_views_AdminNotifications_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AdminNotifications.vue */ "./src/views/AdminNotifications.vue")),
    meta: {
      transition: 'expand-card',
      requireLogin: true
    }
  }]
}];
const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHashHistory)(),
  routes
});
router.beforeEach(to => {
  if (to.meta.requireLogin && !_store__WEBPACK_IMPORTED_MODULE_0__.store.state.firebase.user) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: {
        redirect: to.fullPath
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/services/FirebaseDBService.ts":
/*!*******************************************!*\
  !*** ./src/services/FirebaseDBService.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseDBService": function() { return /* binding */ FirebaseDBService; }
/* harmony export */ });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _FirebaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirebaseService */ "./src/services/FirebaseService.ts");


class FirebaseDBService {
  constructor() {
    this.firebase = _FirebaseService__WEBPACK_IMPORTED_MODULE_1__.FirebaseService.getApp();
    this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
  }

  async readData(path) {
    try {
      const snapshot = await (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.child)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db), path));

      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async writeData(path, data) {
    try {
      await (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, path), data);
    } catch (error) {
      console.log(error);
    }
  }

  async listenForChanges(path, callback) {
    const elRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, path);
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(elRef, snapshot => {
      const data = snapshot.val();
      callback(data);
    });
  }

  async updateValues(updates) {
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db), updates);
  }

}

/***/ }),

/***/ "./src/services/FirebaseService.ts":
/*!*****************************************!*\
  !*** ./src/services/FirebaseService.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": function() { return /* binding */ FirebaseService; }
/* harmony export */ });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebaseConfig */ "./src/firebaseConfig.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



class FirebaseService {
  constructor() {
    this.app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.firebaseConfig);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
  }

  static getInstance() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new this();
    }

    return FirebaseService.instance;
  }

  static getApp() {
    return FirebaseService.getInstance().app;
  }

}

/***/ }),

/***/ "./src/services/UserService.ts":
/*!*************************************!*\
  !*** ./src/services/UserService.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebaseConfig */ "./src/firebaseConfig.ts");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");
/* harmony import */ var _FirebaseDBService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FirebaseDBService */ "./src/services/FirebaseDBService.ts");



class UserService {
  // private store: Store<RootState>;
  constructor() {
    this.db = new _FirebaseDBService__WEBPACK_IMPORTED_MODULE_2__.FirebaseDBService(); // this.store = store;
  }

  async saveNoticationToken(token, userUid) {
    const updates = {
      [`/users/${userUid}/notificationTokens/${token}`]: true
    };

    try {
      await this.db.updateValues(updates);
    } catch (error) {
      console.error(error);
    }
  }

  async getMessagingToken() {
    try {
      const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getMessaging)();
      const currentToken = await (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_1__.getToken)(messaging, {
        vapidKey: _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.vapidKey
      });

      if (currentToken) {
        console.log("client token: ", currentToken);
        return currentToken;
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    } catch (error) {
      console.error("An error occurred while retrieving token. ", error);
    }
  }

}

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "key": function() { return /* binding */ key; },
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _modules_appState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/appState */ "./src/store/modules/appState.ts");
/* harmony import */ var _modules_firebaseModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/firebaseModule */ "./src/store/modules/firebaseModule.ts");
/* harmony import */ var _modules_messagesModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/messagesModule */ "./src/store/modules/messagesModule.ts");




const key = Symbol();
const store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.createStore)({
  modules: {
    firebase: _modules_firebaseModule__WEBPACK_IMPORTED_MODULE_1__.firebaseModule,
    appState: _modules_appState__WEBPACK_IMPORTED_MODULE_0__.appStateModule,
    messages: _modules_messagesModule__WEBPACK_IMPORTED_MODULE_2__.messagesModule
  }
});

/***/ }),

/***/ "./src/store/modules/appState.ts":
/*!***************************************!*\
  !*** ./src/store/modules/appState.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTEN_CARS": function() { return /* binding */ LISTEN_CARS; },
/* harmony export */   "LISTEN_USER": function() { return /* binding */ LISTEN_USER; },
/* harmony export */   "SET_INSTALL_EVENT": function() { return /* binding */ SET_INSTALL_EVENT; },
/* harmony export */   "appStateModule": function() { return /* binding */ appStateModule; }
/* harmony export */ });
/* harmony import */ var _services_FirebaseDBService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/FirebaseDBService */ "./src/services/FirebaseDBService.ts");
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/UserService */ "./src/services/UserService.ts");
/* harmony import */ var _messagesModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messagesModule */ "./src/store/modules/messagesModule.ts");



const firebase = new _services_FirebaseDBService__WEBPACK_IMPORTED_MODULE_0__.FirebaseDBService();
const appStateModule = {
  state: {
    cars: null,
    user: null,
    installEvent: null
  },
  mutations: {
    updateCars(state, cars) {
      state.cars = cars;
    },

    updateUser(state, user) {
      state.user = { ...user
      };
    },

    setInstallEvent(state, installEvent) {
      state.installEvent = installEvent;
    }

  },
  actions: {
    listenCars: ({
      commit
    }) => {
      firebase.listenForChanges('cars', cars => commit('updateCars', Object.values(cars)));
    },
    listenUser: async ({
      commit,
      rootState,
      dispatch
    }) => {
      const user = await firebase.readData(`users/${rootState.firebase.user?.uid}`);

      if (user) {
        commit('updateUser', user);
        const userService = new _services_UserService__WEBPACK_IMPORTED_MODULE_1__.UserService();
        const currentToken = await userService.getMessagingToken();
        dispatch(_messagesModule__WEBPACK_IMPORTED_MODULE_2__.LISTEN_MESSAGES);

        if (currentToken && !(user.notificationTokens && Object.keys(user.notificationTokens).includes(currentToken))) {
          const uid = rootState.firebase.user?.uid;

          if (uid) {
            await userService.saveNoticationToken(currentToken, uid);
          }
        }
      }
    }
  },
  getters: {
    carByPlate: state => plate => {
      if (state.cars) {
        return state.cars.find(c => c.plate === plate);
      }

      return null;
    },
    usedCar: state => {
      if (state.cars && state.user) {
        return state.cars.find(c => c.plate === state.user?.car);
      }

      return null;
    },
    permissions: state => {
      if (state.user) {
        return Object.keys(state.user.permissions);
      }

      return [];
    },
    notificationTokens: state => {
      if (state.user && state.user.notificationTokens) {
        return Object.keys(state.user.notificationTokens);
      }

      return [];
    }
  }
};
const LISTEN_CARS = 'listenCars',
      LISTEN_USER = 'listenUser',
      SET_INSTALL_EVENT = 'setInstallEvent';

/***/ }),

/***/ "./src/store/modules/firebaseModule.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/firebaseModule.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTEN_USER_AUTH": function() { return /* binding */ LISTEN_USER_AUTH; },
/* harmony export */   "SET_APP": function() { return /* binding */ SET_APP; },
/* harmony export */   "SET_USER": function() { return /* binding */ SET_USER; },
/* harmony export */   "firebaseModule": function() { return /* binding */ firebaseModule; }
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/store/utils.ts");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appState */ "./src/store/modules/appState.ts");



const firebaseModule = {
  state: {
    app: null,
    user: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadObjFromLocal)('user', null)
  },
  mutations: {
    setApp(state, app) {
      state.app = app;
    },

    setUser: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.withSaveObjLocal)('user', (state, user) => {
      state.user = user;
    })
  },
  actions: {
    listenUserAuth: ({
      commit,
      dispatch
    }) => {
      const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, user => {
        if (user) {
          commit(SET_USER, user);
          dispatch(_appState__WEBPACK_IMPORTED_MODULE_2__.LISTEN_USER);
        } else {
          commit(SET_USER, null);
        }
      });
    }
  }
};
const SET_APP = 'setApp',
      SET_USER = 'setUser',
      LISTEN_USER_AUTH = 'listenUserAuth';

/***/ }),

/***/ "./src/store/modules/messagesModule.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/messagesModule.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTEN_MESSAGES": function() { return /* binding */ LISTEN_MESSAGES; },
/* harmony export */   "messagesModule": function() { return /* binding */ messagesModule; }
/* harmony export */ });
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js");

const messagesModule = {
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    }

  },
  actions: {
    listenMessages: async ({
      commit
    }) => {
      (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.onMessage)((0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getMessaging)(), m => {
        console.log(m);
        commit('addMessage', m);
      });
    }
  },
  getters: {}
};
const LISTEN_MESSAGES = 'listenMessages';

/***/ }),

/***/ "./src/store/utils.ts":
/*!****************************!*\
  !*** ./src/store/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadObjFromLocal": function() { return /* binding */ loadObjFromLocal; },
/* harmony export */   "loadStringFromLocal": function() { return /* binding */ loadStringFromLocal; },
/* harmony export */   "withSaveObjLocal": function() { return /* binding */ withSaveObjLocal; },
/* harmony export */   "withSaveStringLocal": function() { return /* binding */ withSaveStringLocal; }
/* harmony export */ });
//TODO - Da migliorare (property deve essere il nome della proprietà!!!!!)
function withSaveObjLocal(property, mutation) {
  const oldMutation = mutation;

  const newMutation = (...[state, payload]) => {
    oldMutation(state, payload);
    const stringObj = JSON.stringify(state[property]); //Not good (as any)

    localStorage.setItem(property, stringObj);
  };

  return newMutation;
}

function withSaveStringLocal(property, mutation) {
  const oldMutation = mutation;

  const newMutation = (...[state, payload]) => {
    oldMutation(state, payload);
    localStorage.setItem(property, state[property]); //Not good (as any)
  };

  return newMutation;
}

function loadObjFromLocal(key, ifNotPresent) {
  const local = JSON.parse(localStorage.getItem(key));
  return local ? local : ifNotPresent;
}

function loadStringFromLocal(key, ifNotPresent) {
  const local = localStorage.getItem(key);
  return local ? local : ifNotPresent;
}



/***/ }),

/***/ "./src/strings.ts":
/*!************************!*\
  !*** ./src/strings.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
const strings = {
  useCarTitle: "Utilizza parco auto",
  useCarDesc: "Registra gli spostamenti dei mezzi dell'associazione",
  chooseCar: "Scegli mezzo",
  causal: "Motivo dello spostamento",
  startOdometer: "Contachilometri alla partenza",
  useCarBtn: "Prendi",
  leaveCarTitle: "Lascia macchina",
  leaveCarDesc: "Chiudi e registra report spostamento",
  stopOdometer: "Contachilometri finale",
  declarations: "Qualcosa da dichiarare?",
  leaveCarBtn: "Lascia",
  adminTitle: "Pannello di amministrazione",
  adminDesc: "Gestione riservata al direttivo",
  csvDownloadDesc: "Non puoi ancora fare granché ma per il momento puoi scaricare il csv dei report",
  csvDownloadBtn: "Scarica CSV",
  noPermission: "Sembra che tu non abbia alcun permesso. Chiedi ad uno degli amministratori di configurare il tuo profilo o effettua il logout (menú in alto a destra)",
  loginDesc: "Per usare quest'app devi essere loggato. Per loggarti devi avere un account Google. Verrano presi dal tuo account solo nome ed indirizzo mail per la gestione dei permessi",
  loginTitle: "Protezione civile gruppo lucano Tricarico",
  loginWithGoogle: "Accedi con Google",
  logout: "Effettua logout",
  install: "Installa app",
  notificationDesc: "Invia una notifica ad un gruppo di iscritti",
  goToAdminPush: "Invia notifica"
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  data() {
    return {
      animated: false
    };
  },

  methods: {
    expand() {
      this.animated = true;
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue */ "./src/components/ActivityButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    ActivityButton: _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openUseCarPage() {
      this.$router.push({
        path: "admin"
      });
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue */ "./src/components/ActivityButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    ActivityButton: _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openUseCarPage() {
      this.$router.push({
        path: "leavecar"
      });
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue */ "./src/components/ActivityButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    ActivityButton: _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openUseCarPage() {
      this.$router.push({
        path: "usecar"
      });
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fc65565e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  class: "icon"
};
const _hoisted_2 = {
  class: "text"
};
const _hoisted_3 = {
  class: "title"
};
const _hoisted_4 = {
  class: "desciption"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      activity_card: true,
      animated: _ctx.animated
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.expand && _ctx.expand(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "description", {}, undefined, true)])])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7521c4e1"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "material-icon"
}, "admin_panel_settings", -1
/* HOISTED */
));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActivityButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityButton, {
    onClick: _ctx.openUseCarPage
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.adminTitle), 1
    /* TEXT */
    )]),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.adminDesc), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5c1931df"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "material-icon"
}, "agriculture", -1
/* HOISTED */
));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActivityButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityButton, {
    onClick: _ctx.openUseCarPage
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.leaveCarTitle), 1
    /* TEXT */
    )]),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.leaveCarDesc), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1a0e530f"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "material-icon"
}, "agriculture", -1
/* HOISTED */
));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ActivityButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityButton, {
    onClick: _ctx.openUseCarPage
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.useCarTitle), 1
    /* TEXT */
    )]),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.useCarDesc), 1
    /* TEXT */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0;\n}\n.expand-card-enter-active,\n.expand-card-leave-active {\n  transition: opacity 0.4s cubic-bezier(0.94, 0.01, 1, 1);\n}\n.expand-card-enter-from,\n.expand-card-leave-to {\n  opacity: 0;\n}\n.material-icon {\n  font-family: \"Material Icons Round\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".activity_card[data-v-fc65565e] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  z-index: 6;\n  border-radius: 8px;\n  padding: 14px;\n  max-width: 100%;\n  background-color: white;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  transition: transform 1s ease;\n  transition-delay: 0.1s;\n}\n.activity_card .icon[data-v-fc65565e],\n.activity_card .text[data-v-fc65565e] {\n  transition: opacity 0.2s ease;\n}\n.activity_card.animated[data-v-fc65565e] {\n  overflow: hidden;\n  border-radius: 1%;\n  transform: scale(1.3, 16);\n}\n.activity_card.animated .icon[data-v-fc65565e],\n.activity_card.animated .text[data-v-fc65565e] {\n  opacity: 0;\n}\n.icon[data-v-fc65565e] {\n  margin-right: 6px;\n  display: flex;\n}\n.icon svg[data-v-fc65565e] {\n  fill: #2c3e50;\n}\n.text[data-v-fc65565e] {\n  text-align: initial;\n}\n.text .title[data-v-fc65565e] {\n  font-weight: 500;\n  font-size: 21px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "span[data-v-7521c4e1] {\n  font-size: 36px;\n  color: #2c3e50;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "span[data-v-5c1931df] {\n  font-size: 36px;\n  color: #2c3e50;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#more_menu[data-v-47aa12d3] {\n  margin: 16px;\n}\n#more_menu #menu_btn[data-v-47aa12d3] {\n  position: absolute;\n  right: 12px;\n  height: 24px;\n}\n#more_menu #menu[data-v-47aa12d3] {\n  position: absolute;\n  right: 12px;\n  margin-left: 12px;\n  background-color: white;\n  color: #1d1d1d;\n  width: auto;\n  min-width: 260px;\n  border-radius: 16px;\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n  z-index: 10;\n}\n#more_menu #menu .option[data-v-47aa12d3] {\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#more_menu #menu input[type=number][data-v-47aa12d3] {\n  -webkit-appearance: none;\n  font-family: inherit;\n  width: 20%;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  padding: 6px;\n}\n.switch[data-v-47aa12d3] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  margin: 12px;\n}\n.switch input[data-v-47aa12d3] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch .slider[data-v-47aa12d3] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #9c9100;\n  transition: 0.4s;\n  border-radius: 2em;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  z-index: 1;\n}\n.switch .slider[data-v-47aa12d3]:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 2px;\n  bottom: 2px;\n  background-color: #2c3e50;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.switch input:checked + .slider[data-v-47aa12d3] {\n  background-color: #eedc00;\n}\n.switch input:focus + .slider[data-v-47aa12d3] {\n  box-shadow: 0 0 1px #eedc00;\n}\n.switch input:checked + .slider[data-v-47aa12d3]:before {\n  transform: translateX(12px);\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "span[data-v-1a0e530f] {\n  font-size: 36px;\n  color: #2c3e50;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* #home {\n  height: 100%;\n} */\n.foreground[data-v-fae5bece] {\n  z-index: 10;\n  padding: 40px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  /* .other {\n    margin-top: 20px;\n    color: rgb(161, 161, 161);\n    border: 2px rgb(161, 161, 161) dashed;\n    padding: 12px;\n    border-radius: 8px;\n  } */\n}\n.foreground .activities[data-v-fae5bece] {\n  width: 100%;\n  flex: 1;\n}\n.foreground .activities > *[data-v-fae5bece] {\n  margin: 12px 0;\n}\n.foreground .no_permission[data-v-fae5bece] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  z-index: 6;\n  border-radius: 8px;\n  padding: 14px;\n  max-width: 100%;\n  background-color: white;\n  color: #2c3e50;\n}\n.icon span[data-v-fae5bece] {\n  color: #2c3e50;\n  font-size: 56px;\n}\n.header[data-v-fae5bece] {\n  padding: 40px 0;\n  color: #2c3e50;\n  font-size: 26px;\n  font-weight: 600;\n}\n.background[data-v-fae5bece] {\n  z-index: -10;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n}\n.background .header[data-v-fae5bece] {\n  background-color: #eedc00;\n  flex-basis: 140px;\n}\n@media screen and (max-width: 600px) {\n.foreground[data-v-fae5bece] {\n    padding: 40px 24px;\n}\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&ts=true */ "./src/App.vue?vue&type=template&id=7ba5bd90&ts=true");
/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ "./src/App.vue?vue&type=script&lang=ts");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/ActivityButton.vue":
/*!*******************************************!*\
  !*** ./src/components/ActivityButton.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true */ "./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true");
/* harmony import */ var _ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=script&lang=js */ "./src/components/ActivityButton.vue?vue&type=script&lang=js");
/* harmony import */ var _ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fc65565e"],['__file',"src/components/ActivityButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/AdminButton.vue":
/*!****************************************!*\
  !*** ./src/components/AdminButton.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminButton_vue_vue_type_template_id_7521c4e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true */ "./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true");
/* harmony import */ var _AdminButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminButton.vue?vue&type=script&lang=js */ "./src/components/AdminButton.vue?vue&type=script&lang=js");
/* harmony import */ var _AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true */ "./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AdminButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminButton_vue_vue_type_template_id_7521c4e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7521c4e1"],['__file',"src/components/AdminButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/LeaveCarButton.vue":
/*!*******************************************!*\
  !*** ./src/components/LeaveCarButton.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaveCarButton_vue_vue_type_template_id_5c1931df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true */ "./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true");
/* harmony import */ var _LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveCarButton.vue?vue&type=script&lang=js */ "./src/components/LeaveCarButton.vue?vue&type=script&lang=js");
/* harmony import */ var _LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true */ "./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LeaveCarButton_vue_vue_type_template_id_5c1931df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5c1931df"],['__file',"src/components/LeaveCarButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/Settings.vue":
/*!*************************************!*\
  !*** ./src/components/Settings.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true */ "./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true");
/* harmony import */ var _Settings_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=ts */ "./src/components/Settings.vue?vue&type=script&lang=ts");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true */ "./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Settings_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-47aa12d3"],['__file',"src/components/Settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/UseCarButton.vue":
/*!*****************************************!*\
  !*** ./src/components/UseCarButton.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UseCarButton_vue_vue_type_template_id_1a0e530f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true */ "./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true");
/* harmony import */ var _UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UseCarButton.vue?vue&type=script&lang=js */ "./src/components/UseCarButton.vue?vue&type=script&lang=js");
/* harmony import */ var _UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true */ "./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UseCarButton_vue_vue_type_template_id_1a0e530f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1a0e530f"],['__file',"src/components/UseCarButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true */ "./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=ts */ "./src/views/Home.vue?vue&type=script&lang=ts");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fae5bece"],['__file',"src/views/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/components/Settings.vue?vue&type=script&lang=ts":
/*!*************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=script&lang=ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&ts=true":
/*!***********************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&ts=true ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true");


/***/ }),

/***/ "./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true":
/*!***************************************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_47aa12d3_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=template&id=47aa12d3&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true":
/*!******************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true");


/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/AdminButton.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/AdminButton.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/LeaveCarButton.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/LeaveCarButton.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/UseCarButton.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/UseCarButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true");


/***/ }),

/***/ "./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_template_id_7521c4e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_template_id_7521c4e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=template&id=7521c4e1&scoped=true");


/***/ }),

/***/ "./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_template_id_5c1931df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_template_id_5c1931df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df&scoped=true");


/***/ }),

/***/ "./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_template_id_1a0e530f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_template_id_1a0e530f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f&scoped=true");


/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminButton_vue_vue_type_style_index_0_id_7521c4e1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_style_index_0_id_5c1931df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_47aa12d3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_style_index_0_id_1a0e530f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4d0a118a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("d19c03ee", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AdminButton.vue?vue&type=style&index=0&id=7521c4e1&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7df6c9f0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=style&index=0&id=5c1931df&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("2a101c72", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Settings.vue?vue&type=style&index=0&id=47aa12d3&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("53d6d16f", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=style&index=0&id=1a0e530f&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("20a5eeb5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("11dff15c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "protezione-civile:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map