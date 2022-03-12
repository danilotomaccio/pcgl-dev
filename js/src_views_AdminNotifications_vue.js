(self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || []).push([["src_views_AdminNotifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/NotificationService */ "./src/services/NotificationService.ts");
/* harmony import */ var _services_AdminService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/AdminService */ "./src/services/AdminService.ts");



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  data() {
    const message = {};
    const topics = [];
    return {
      message,
      topics,
      selectedTopic: topics[0]
    };
  },

  async mounted() {
    this.topics = await new _services_AdminService__WEBPACK_IMPORTED_MODULE_2__.AdminService().getAllTopics();
  },

  methods: {
    async sendPushNotification() {
      if (this.message.topic && this.message.title && this.message.description) {
        const msg = {
          topic: this.message.topic,
          webpush: {
            notification: {
              title: this.message.title,
              body: this.message.description,
              icon: "https://app.protezioneciviletricarico.com/img/icons/android-chrome-192x192.png",
              color: "#7e55c3",
              badge: "https://app.protezioneciviletricarico.com/img/icons/android-chrome-192x192.png"
            }
          }
        };
        await new _services_NotificationService__WEBPACK_IMPORTED_MODULE_1__.NotificationService().sendNotification(msg);
      }
    }

  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-beb795da"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

const _hoisted_1 = {
  id: "notifications"
};
const _hoisted_2 = {
  class: "notification"
};
const _hoisted_3 = {
  class: "desc",
  name: "title"
};
const _hoisted_4 = {
  class: "desc",
  name: "desctiption"
};
const _hoisted_5 = {
  class: "desc",
  name: "topic"
};
const _hoisted_6 = {
  class: "topics_list"
};
const _hoisted_7 = ["selected", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "input",
    contenteditable: "true",
    inputmode: 'text',
    onInput: _cache[0] || (_cache[0] = $event => _ctx.message.title = $event.target.innerText)
  }, null, 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "input",
    contenteditable: "true",
    inputmode: 'text',
    onInput: _cache[1] || (_cache[1] = $event => _ctx.message.description = $event.target.innerText)
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.topic), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.topics, topic => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: "topic",
      key: topic,
      selected: _ctx.selectedTopic === topic,
      onClick: () => _ctx.selectedTopic = _ctx.selectedTopic === topic ? '' : topic
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(topic), 9
    /* TEXT, PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "topic new_topic_button",
    onClick: _cache[2] || (_cache[2] = () => this.$router.push('/admin/notifications/newTopic'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.newTopic), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "submit_button",
    onClick: _cache[3] || (_cache[3] = //@ts-ignore
    (...args) => _ctx.sendPushNotification && _ctx.sendPushNotification(...args))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t.sendNotification), 1
  /* TEXT */
  )]);
}

/***/ }),

/***/ "./src/services/AdminService.ts":
/*!**************************************!*\
  !*** ./src/services/AdminService.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": function() { return /* binding */ AdminService; }
/* harmony export */ });
/* harmony import */ var _FirebaseDBService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirebaseDBService */ "./src/services/FirebaseDBService.ts");

class AdminService {
  // private store: Store<RootState>;
  constructor() {
    this.db = new _FirebaseDBService__WEBPACK_IMPORTED_MODULE_0__.FirebaseDBService(); // this.store = store;
  }

  async getAllUsers() {
    const res = await this.db.readData('users');
    const users = [];

    if (res) {
      for (const uid in res) {
        const user = { ...res[uid],
          uid
        };
        users.push(user);
      }
    }

    return users;
  }

  async getAllTopics() {
    const res = await this.db.readData('notifications/topics');

    if (res) {
      return Object.keys(res);
    }

    return [];
  }

  async getAllRoles() {
    const roles = await this.db.readData('permissions');
    const formattedRoles = {};

    if (roles) {
      for (const role in roles) {
        formattedRoles[role] = Object.keys(roles[role]);
      }
    }

    return formattedRoles;
  }

  getTokensFromUsers(users) {
    return users.flatMap(user => {
      if (user.notificationTokens) {
        return Object.keys(user.notificationTokens);
      }
    });
  }

  async saveTopic(topic, tokens) {
    const topicObj = tokens.reduce((tObj, t) => ({ ...tObj,
      [t]: true
    }), {});
    this.db.writeData(`notifications/topics/${topic}`, topicObj);
  }

}

/***/ }),

/***/ "./src/services/NotificationService.ts":
/*!*********************************************!*\
  !*** ./src/services/NotificationService.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": function() { return /* binding */ NotificationService; }
/* harmony export */ });
class NotificationService {
  async sendNotification(message) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(message);
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    const res = await fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/send", requestOptions);
    return await res.json();
  }

  async addToTopic(tokens, topic) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      tokens,
      topic
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    const res = await fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/addToTopic", requestOptions);
    return await res.json();
  }

  async getTopics() {//
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#notifications[data-v-beb795da] {\n  display: flex;\n  flex-direction: column;\n}\n#notifications .desc[data-v-beb795da] {\n  margin: 4px;\n  font-weight: 500;\n  align-self: flex-start;\n}\n#notifications .notification[data-v-beb795da] {\n  display: flex;\n  flex-direction: column;\n}\n#notifications .input[data-v-beb795da] {\n  border: 1px #2c3e50 solid;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 6px;\n  -webkit-appearance: none;\n  outline: none;\n}\n#notifications .topics_list[data-v-beb795da] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#notifications .topics_list .topic[data-v-beb795da] {\n  border: 1px #2c3e50 solid;\n  border-radius: 8px;\n  padding: 8px;\n  margin: 6px;\n  cursor: pointer;\n}\n#notifications .topics_list .topic[selected=true][data-v-beb795da] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  z-index: 2;\n  border: 1px #0047bb solid;\n  background-color: #0047bb;\n  color: #f0fbff;\n}\n#notifications .topics_list .new_topic_button[data-v-beb795da] {\n  border: 1px grey dashed;\n}\n#notifications .submit_button[data-v-beb795da] {\n  text-align: center;\n  margin: 26px auto;\n  background-color: #0047bb;\n  color: #f0fbff;\n  font-weight: 500;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  z-index: 2;\n  cursor: pointer;\n  /* &[disabled=\"true\"] {\n    pointer-events: none;\n    opacity: 0.4;\n  } */\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/AdminNotifications.vue":
/*!******************************************!*\
  !*** ./src/views/AdminNotifications.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminNotifications_vue_vue_type_template_id_beb795da_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true */ "./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true");
/* harmony import */ var _AdminNotifications_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNotifications.vue?vue&type=script&lang=ts */ "./src/views/AdminNotifications.vue?vue&type=script&lang=ts");
/* harmony import */ var _AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true */ "./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AdminNotifications_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminNotifications_vue_vue_type_template_id_beb795da_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-beb795da"],['__file',"src/views/AdminNotifications.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/AdminNotifications.vue?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./src/views/AdminNotifications.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNotifications.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true":
/*!********************************************************************************************!*\
  !*** ./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_template_id_beb795da_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_template_id_beb795da_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=template&id=beb795da&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNotifications_vue_vue_type_style_index_0_id_beb795da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AdminNotifications.vue?vue&type=style&index=0&id=beb795da&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("3883864f", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=src_views_AdminNotifications_vue.js.map