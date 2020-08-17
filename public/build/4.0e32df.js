(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Customer",
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  data: function data() {
    return {
      activeTab: "general-informations",
      templateMain: [0],
      templateJP: [0],
      templateHN: [0],
      customer: {
        company_name: "",
        abbreviations: "",
        investment: "",
        shareholder: "",
        rank: 1,
        website: "",
        description: "",
        number_employee: "",
        contract_onsite_leader: "",
        contract_onsite_member: "",
        lab_contract_onsite_leader: "",
        lab_contract_onsite_member: "",
        contract_offshore_brse: "",
        contract_offshore_se: "",
        contract_offshore_tester: "",
        contract_offshore_comtor: "",
        lab_contract_offshore: "",
        responsibilityCustomer: [{
          name: "",
          employee_position: ""
        }],
        responsibilityFabbiJapan: [{
          name: ""
        }],
        responsibilityFabbi: [{
          name: ""
        }]
      },
      isValid: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    gender: "commons/gender",
    rank: "commons/rank"
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("customer", ["create"])), {}, {
    validateForm: function validateForm() {
      var forms = [].concat(_toConsumableArray(this.customer.responsibilityCustomer), _toConsumableArray(this.customer.responsibilityFabbiJapan), _toConsumableArray(this.customer.responsibilityFabbi));
      this.isValid = true;

      var _iterator = _createForOfIteratorHelper(forms),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var form = _step.value;

          for (var field in form) {
            if (!form[field]) {
              this.isValid = false;
              return;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    createCustomer: function createCustomer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var check;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.validateForm();

                _context.next = 3;
                return _this.$refs.formCustomer.validate();

              case 3:
                check = _context.sent;

                if (!(check && _this.isValid)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return _this.$store.dispatch("customer/create", _this.customer).then(function (response) {
                  var message = ["Created"];
                  message.forEach(function (message) {
                    _this.$bvToast.toast(message, {
                      title: "",
                      noCloseButton: false,
                      autoHideDelay: 2000,
                      appendToast: true,
                      toaster: "b-toaster-top-center",
                      variant: "success",
                      noFade: false,
                      solid: true
                    });
                  });
                  setTimeout(function () {
                    _this.$router.push({
                      path: "/customers"
                    });
                  }, 1000);
                })["catch"](function (error) {});

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeTab: function changeTab(name) {
      this.activeTab = name;
    },
    addInformation: function addInformation(type) {
      this[type].push(this[type].length);
      var size = 0;

      switch (type) {
        case "templateMain":
          size = this.customer.responsibilityCustomer.length;
          this.customer.responsibilityCustomer[size] = {
            name: "",
            employee_position: ""
          };
          break;

        case "templateJP":
          size = this.customer.responsibilityFabbiJapan.length;
          this.customer.responsibilityFabbiJapan[size] = {
            name: ""
          };
          break;

        case "templateHN":
          size = this.customer.responsibilityFabbi.length;
          this.customer.responsibilityFabbi[size] = {
            name: ""
          };
          break;
      }
    },
    deleteInformation: function deleteInformation(type, index) {
      this[type].splice(index, 1);

      switch (type) {
        case "templateMain":
          this.customer.responsibilityCustomer.splice(index, 1);
          break;

        case "templateJP":
          this.customer.responsibilityFabbiJapan.splice(index, 1);
          break;

        case "templateHN":
          this.customer.responsibilityFabbi.splice(index, 1);
          break;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n*[data-v-2efb1b3f] {\r\n  box-sizing: border-box;\n}\n.aside-menu[data-v-2efb1b3f] {\r\n  margin-left: 150px;\n}\n.nav-tabs[data-v-2efb1b3f] {\r\n  border: none;\r\n  font-size: 1rem;\n}\n.nav-item[data-v-2efb1b3f] {\r\n  color: #858585;\r\n  cursor: pointer;\n}\n.nav-item.active span[data-v-2efb1b3f] {\r\n  color: #032641;\r\n  display: inline-block;\r\n  border-bottom: 2px solid black;\r\n  padding-bottom: 2px;\r\n  font-weight: bold;\n}\n.form-group[data-v-2efb1b3f] {\r\n  margin-bottom: 0;\n}\nh5[data-v-2efb1b3f] {\r\n  margin: 30px 0;\r\n  font-weight: bold;\n}\nlabel[data-v-2efb1b3f] {\r\n  color: #385368;\n}\n.required[data-v-2efb1b3f] {\r\n  color: #ff1a1a;\n}\n.onsite[data-v-2efb1b3f],\r\n.offshore[data-v-2efb1b3f] {\r\n  color: #f6922d;\n}\n.placeholder[data-v-2efb1b3f] {\r\n  position: absolute;\r\n  right: 25px;\r\n  color: #b3b3b3;\r\n  top: 7px;\n}\n.error-required[data-v-2efb1b3f] {\r\n  color: #ff1a1a;\n}\n.contract[data-v-2efb1b3f] {\r\n  margin: 0px;\n}\n.btn-add-new label[data-v-2efb1b3f] {\r\n  color: #f6ab5f;\r\n  font-size: 1rem;\r\n  cursor: pointer;\n}\n.btn-submit[data-v-2efb1b3f] {\r\n  background-color: #b4daf3;\r\n  width: 215px;\r\n  height: 40px;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\n}\n.delete-btn[data-v-2efb1b3f] {\r\n  color: red;\n}\n@media screen and (max-width: 1300px) {\n.aside-menu[data-v-2efb1b3f] {\r\n    margin-left: 30px;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app aside-menu-show" }, [
    _c(
      "aside",
      { staticClass: "aside-menu" },
      [
        _c(
          "CRow",
          { staticClass: "nav nav-tabs p-3", attrs: { role: "tablist" } },
          [
            _c(
              "CCol",
              {
                staticClass: "nav-item",
                class:
                  _vm.activeTab == "general-informations" ? "active" : null,
                attrs: { sm: "4", xl: "2" },
                on: {
                  click: function($event) {
                    return _vm.changeTab("general-informations")
                  }
                }
              },
              [
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("customer.label_customer_information")))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "CCol",
              {
                staticClass: "nav-item",
                class: _vm.activeTab == "contract" ? "active" : null,
                attrs: { sm: "4", xl: "2" },
                on: {
                  click: function($event) {
                    return _vm.changeTab("contract")
                  }
                }
              },
              [
                _c("span", [
                  _vm._v(_vm._s(_vm.$t("customer.label_customer_cost")))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "CCol",
              {
                staticClass: "nav-item",
                class: _vm.activeTab == "customer-care" ? "active" : null,
                attrs: { sm: "4", xl: "3" },
                on: {
                  click: function($event) {
                    return _vm.changeTab("customer-care")
                  }
                }
              },
              [
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("customer.label_customer_user_information"))
                  )
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("ValidationObserver", {
          ref: "formCustomer",
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var handleSubmit = ref.handleSubmit
                return [
                  _c(
                    "CForm",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return handleSubmit(_vm.createCustomer)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "tab-content" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane p-3",
                              class:
                                _vm.activeTab == "general-informations"
                                  ? "active"
                                  : null,
                              attrs: { role: "tabpanel" }
                            },
                            [
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.$t(
                                                "customer.label_customer_company_name"
                                              )
                                            ) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "required" },
                                          [_vm._v("(*)")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required|min:3|max:256",
                                          name: _vm.$t(
                                            "customer.label_customer_company_name"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer
                                                          .company_name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "company_name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.company_name"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.$t(
                                                "customer.label_customer_abbreviations"
                                              )
                                            ) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "required" },
                                          [_vm._v("(*)")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required|max:20",
                                          name: _vm.$t(
                                            "customer.label_customer_abbreviations"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer
                                                          .abbreviations,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "abbreviations",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.abbreviations"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.$t(
                                                "customer.label_customer_investment"
                                              )
                                            ) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "required" },
                                          [_vm._v("(*)")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required|numeric|max:20",
                                          name: _vm.$t(
                                            "customer.label_customer_investment"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer.investment,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "investment",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.investment"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "placeholder"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "customer.money"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_rank"
                                            )
                                          )
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.customer.rank,
                                              expression: "customer.rank"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-group",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.customer,
                                                "rank",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.rank, function(
                                          option,
                                          index
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: index,
                                              domProps: { value: option }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "customer.label_customer_rank"
                                                  )
                                                ) +
                                                  " " +
                                                  _vm._s(option)
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.$t(
                                                "customer.label_customer_shareholder"
                                              )
                                            ) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "required" },
                                          [_vm._v("(*)")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required|max:256",
                                          name: _vm.$t(
                                            "customer.label_customer_shareholder"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer
                                                          .shareholder,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "shareholder",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.shareholder"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_homepage"
                                            )
                                          )
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          name: _vm.$t(
                                            "customer.label_customer_homepage"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer.website,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "website",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.website"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.$t(
                                                "customer.label_customer_number_employee"
                                              )
                                            ) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "required" },
                                          [_vm._v("(*)")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          rules: "required|numeric|max:20",
                                          name: _vm.$t(
                                            "customer.label_customer_number_employee"
                                          )
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("CInput", {
                                                    attrs: { type: "text" },
                                                    model: {
                                                      value:
                                                        _vm.customer
                                                          .number_employee,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.customer,
                                                          "number_employee",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "customer.number_employee"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-required"
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                { staticClass: "mb-4" },
                                [
                                  _c(
                                    "CCol",
                                    {
                                      attrs: {
                                        sm: "12",
                                        md: "3",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_company_description"
                                            )
                                          )
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { sm: "12", md: "7", xl: "5" } },
                                    [
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.customer.description,
                                            expression: "customer.description"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { rows: "5" },
                                        domProps: {
                                          value: _vm.customer.description
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.customer,
                                              "description",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane p-3",
                              class:
                                _vm.activeTab == "contract" ? "active" : null,
                              attrs: { role: "tabpanel" }
                            },
                            [
                              _c(
                                "CRow",
                                [
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "employees-form-onsite",
                                      attrs: { md: "5", sm: "12" }
                                    },
                                    [
                                      _c("h5", { staticClass: "onsite" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_onsite"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("h5", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.semi_commissioned_contract"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_onsite_leader"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_onsite_leader"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_onsite_leader,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_onsite_leader",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_onsite_leader"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_onsite_nember"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_onsite_nember"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_onsite_member,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_onsite_member",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_onsite_member"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("h5", [
                                        _vm._v(
                                          _vm._s(_vm.$t("customer.contract"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_onsite_leader"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_onsite_leader"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .lab_contract_onsite_leader,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "lab_contract_onsite_leader",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.lab_contract_onsite_leader"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_onsite_nember"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_onsite_nember"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .lab_contract_onsite_member,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "lab_contract_onsite_member",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.lab_contract_onsite_member"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    {
                                      staticClass: "employees-form-offshore",
                                      attrs: { md: "5", sm: "12" }
                                    },
                                    [
                                      _c("h5", { staticClass: "offshore" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_offshore"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("h5", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.semi_commissioned_contract"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_offshore_brse"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_offshore_brse"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_offshore_brse,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_offshore_brse",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_offshore_brse"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_offshore_se"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_offshore_se"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_offshore_se,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_offshore_se",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_offshore_se"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_offshore_tester"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_offshore_tester"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_offshore_tester,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_offshore_tester",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_offshore_tester"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "customer.label_offshore_comtor"
                                                    )
                                                  )
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: _vm.$t(
                                                    "customer.label_offshore_comtor"
                                                  )
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .contract_offshore_comtor,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "contract_offshore_comtor",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.contract_offshore_comtor"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        { staticClass: "mb-4" },
                                        [
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "3" } },
                                            [
                                              _c(
                                                "h5",
                                                { staticClass: "contract" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "customer.semi_commissioned_contract"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "CCol",
                                            { attrs: { sm: "12", xl: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "numeric|max:20",
                                                  name: "請負契約"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("CInput", {
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.customer
                                                                  .lab_contract_offshore,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.customer,
                                                                  "lab_contract_offshore",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "customer.lab_contract_offshore"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "placeholder"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.money"
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-required"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane p-3",
                              class:
                                _vm.activeTab == "customer-care"
                                  ? "active"
                                  : null,
                              attrs: { role: "tabpanel" }
                            },
                            [
                              _c("h5", [
                                _vm._v(
                                  _vm._s(_vm.$t("customer.label_customer"))
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "list-customer-information" },
                                [
                                  _vm._l(_vm.templateMain, function(
                                    item,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass: "customer-infomation mb-5"
                                      },
                                      [
                                        _c(
                                          "CRow",
                                          { staticClass: "mb-4" },
                                          [
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "3",
                                                  lg: "3",
                                                  xl: "2"
                                                }
                                              },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "customer.label_customer_name"
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                  _c(
                                                    "span",
                                                    { staticClass: "required" },
                                                    [_vm._v("(*)")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "7",
                                                  xl: "5"
                                                }
                                              },
                                              [
                                                _c("CInput", {
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value:
                                                      _vm.customer
                                                        .responsibilityCustomer[
                                                        index
                                                      ].name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.customer
                                                          .responsibilityCustomer[
                                                          index
                                                        ],
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "customer.responsibilityCustomer[index].name"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _vm.customer.responsibilityCustomer
                                              .length > 1
                                              ? _c(
                                                  "span",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteInformation(
                                                          "templateMain",
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("CIcon", {
                                                      staticClass: "delete-btn",
                                                      attrs: {
                                                        name: "cilTrash"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "CRow",
                                          { staticClass: "md-4" },
                                          [
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "3",
                                                  lg: "3",
                                                  xl: "2"
                                                }
                                              },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "customer.label_customer_location"
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                  _c(
                                                    "span",
                                                    { staticClass: "required" },
                                                    [_vm._v("(*)")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "7",
                                                  xl: "5"
                                                }
                                              },
                                              [
                                                _c("CInput", {
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value:
                                                      _vm.customer
                                                        .responsibilityCustomer[
                                                        index
                                                      ].employee_position,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.customer
                                                          .responsibilityCustomer[
                                                          index
                                                        ],
                                                        "employee_position",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "customer.responsibilityCustomer[index].employee_position"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(
                                              "templateMain"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("customer.label_add_infor")
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("h5", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "customer.label_customer_fabbi_japan"
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "customers-care-jp" },
                                [
                                  _vm._l(_vm.templateJP, function(item, index) {
                                    return _c(
                                      "div",
                                      { key: index },
                                      [
                                        _c(
                                          "CRow",
                                          { staticClass: "mb-4" },
                                          [
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "3",
                                                  lg: "3",
                                                  xl: "2"
                                                }
                                              },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "customer.label_customer_name"
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                  _c(
                                                    "span",
                                                    { staticClass: "required" },
                                                    [_vm._v("(*)")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "7",
                                                  xl: "5"
                                                }
                                              },
                                              [
                                                _c("CInput", {
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value:
                                                      _vm.customer
                                                        .responsibilityFabbiJapan[
                                                        index
                                                      ].name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.customer
                                                          .responsibilityFabbiJapan[
                                                          index
                                                        ],
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "customer.responsibilityFabbiJapan[index].name"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _vm.customer
                                              .responsibilityFabbiJapan.length >
                                            1
                                              ? _c(
                                                  "span",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteInformation(
                                                          "templateJP",
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("CIcon", {
                                                      staticClass: "delete-btn",
                                                      attrs: {
                                                        name: "cilTrash"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(
                                              "templateJP"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("customer.label_add_infor")
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("h5", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("customer.label_customer_fabbi")
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "customers-care-hn" },
                                [
                                  _vm._l(_vm.templateHN, function(item, index) {
                                    return _c(
                                      "div",
                                      { key: index },
                                      [
                                        _c(
                                          "CRow",
                                          { staticClass: "mb-4" },
                                          [
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "3",
                                                  lg: "3",
                                                  xl: "2"
                                                }
                                              },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "customer.label_customer_name"
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                  _c(
                                                    "span",
                                                    { staticClass: "required" },
                                                    [_vm._v("(*)")]
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "CCol",
                                              {
                                                attrs: {
                                                  sm: "12",
                                                  md: "7",
                                                  xl: "5"
                                                }
                                              },
                                              [
                                                _c("CInput", {
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value:
                                                      _vm.customer
                                                        .responsibilityFabbi[
                                                        index
                                                      ].name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.customer
                                                          .responsibilityFabbi[
                                                          index
                                                        ],
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "customer.responsibilityFabbi[index].name"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _vm.customer.responsibilityFabbi
                                              .length > 1
                                              ? _c(
                                                  "span",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteInformation(
                                                          "templateHN",
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("CIcon", {
                                                      staticClass: "delete-btn",
                                                      attrs: {
                                                        name: "cilTrash"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(
                                              "templateHN"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("customer.label_add_infor")
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                2
                              ),
                              _vm._v(" "),
                              !_vm.isValid
                                ? _c(
                                    "span",
                                    { staticClass: "error-required" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("customer.validate"))
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                {
                                  staticClass: "button p-3",
                                  attrs: { md: "12", sm: "12" }
                                },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "m-2 btn-submit",
                                      attrs: { type: "submit", size: "sm" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("button.label_action_create")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/User/Customers/CreateCustomer.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CreateCustomer.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true& */ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true&");
/* harmony import */ var _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=script&lang=js& */ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& */ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2efb1b3f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User/Customers/CreateCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=style&index=0&id=2efb1b3f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_style_index_0_id_2efb1b3f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CreateCustomer.vue?vue&type=template&id=2efb1b3f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_2efb1b3f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);