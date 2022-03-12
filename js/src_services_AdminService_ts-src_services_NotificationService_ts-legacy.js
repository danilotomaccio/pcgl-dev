(self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || []).push([["src_services_AdminService_ts-src_services_NotificationService_ts"],{

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
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FirebaseDBService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FirebaseDBService */ "./src/services/FirebaseDBService.ts");











var AdminService = /*#__PURE__*/function () {
  // private store: Store<RootState>;
  function AdminService() {
    (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AdminService);

    this.db = new _FirebaseDBService__WEBPACK_IMPORTED_MODULE_10__.FirebaseDBService(); // this.store = store;
  }

  (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AdminService, [{
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, users, uid, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.readData('users');

              case 2:
                res = _context.sent;
                users = [];

                if (res) {
                  for (uid in res) {
                    user = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res[uid]), {}, {
                      uid: uid
                    });
                    users.push(user);
                  }
                }

                return _context.abrupt("return", users);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: "getAllTopics",
    value: function () {
      var _getAllTopics = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.db.readData('notifications/topics');

              case 2:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", Object.keys(res));

              case 5:
                return _context2.abrupt("return", []);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllTopics() {
        return _getAllTopics.apply(this, arguments);
      }

      return getAllTopics;
    }()
  }, {
    key: "getAllRoles",
    value: function () {
      var _getAllRoles = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var roles, formattedRoles, role;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.db.readData('permissions');

              case 2:
                roles = _context3.sent;
                formattedRoles = {};

                if (roles) {
                  for (role in roles) {
                    formattedRoles[role] = Object.keys(roles[role]);
                  }
                }

                return _context3.abrupt("return", formattedRoles);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAllRoles() {
        return _getAllRoles.apply(this, arguments);
      }

      return getAllRoles;
    }()
  }, {
    key: "getTokensFromUsers",
    value: function getTokensFromUsers(users) {
      return users.flatMap(function (user) {
        if (user.notificationTokens) {
          return Object.keys(user.notificationTokens);
        }
      });
    }
  }, {
    key: "saveTopic",
    value: function () {
      var _saveTopic = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(topic, tokens) {
        var topicObj;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                topicObj = tokens.reduce(function (tObj, t) {
                  return (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, tObj), {}, (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, t, true));
                }, {});
                this.db.writeData("notifications/topics/".concat(topic), topicObj);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveTopic(_x, _x2) {
        return _saveTopic.apply(this, arguments);
      }

      return saveTopic;
    }()
  }]);

  return AdminService;
}();

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
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);






var NotificationService = /*#__PURE__*/function () {
  function NotificationService() {
    (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotificationService);
  }

  (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NotificationService, [{
    key: "sendNotification",
    value: function () {
      var _sendNotification = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(message) {
        var myHeaders, raw, requestOptions, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                raw = JSON.stringify(message);
                requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw
                };
                _context.next = 6;
                return fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/send", requestOptions);

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                return _context.abrupt("return", _context.sent);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendNotification(_x) {
        return _sendNotification.apply(this, arguments);
      }

      return sendNotification;
    }()
  }, {
    key: "addToTopic",
    value: function () {
      var _addToTopic = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tokens, topic) {
        var myHeaders, raw, requestOptions, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                raw = JSON.stringify({
                  tokens: tokens,
                  topic: topic
                });
                requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw
                };
                _context2.next = 6;
                return fetch("https://unruffled-liskov-633292.netlify.app/.netlify/functions/addToTopic", requestOptions);

              case 6:
                res = _context2.sent;
                _context2.next = 9;
                return res.json();

              case 9:
                return _context2.abrupt("return", _context2.sent);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addToTopic(_x2, _x3) {
        return _addToTopic.apply(this, arguments);
      }

      return addToTopic;
    }()
  }, {
    key: "getTopics",
    value: function () {
      var _getTopics = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTopics() {
        return _getTopics.apply(this, arguments);
      }

      return getTopics;
    }()
  }]);

  return NotificationService;
}();

/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var TypeError = global.TypeError;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ })

}]);
//# sourceMappingURL=src_services_AdminService_ts-src_services_NotificationService_ts-legacy.js.map