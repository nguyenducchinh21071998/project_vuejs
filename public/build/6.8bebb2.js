(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Customer",
  data: function data() {
    return {};
  },
  created: function created() {
    this.customerDetail();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    customer: "customer/customer"
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("customer", ["showDetail"])), {}, {
    customerDetail: function customerDetail() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$route.params.id;

              case 2:
                id = _context.sent;

                if (!id) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return _this.showDetail(id);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#employee-detail[data-v-7d848594] {\n  padding: 20px 100px;\n}\n#employee-detail .employees-form[data-v-7d848594] {\n  padding: 0 50px;\n  margin-bottom: 30px;\n}\n#employee-detail .employees-form .btn-edit[data-v-7d848594] {\n  color: #333;\n}\n#employee-detail .employees-form .text-label-content[data-v-7d848594] {\n  margin-top: 33px;\n}\n#employee-detail .employees-form .text-label-content .text-label-infor[data-v-7d848594] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n#employee-detail .employees-form .text-label-content .text-label-infor .text-content-input[data-v-7d848594] {\n  margin-top: 48px;\n}\n#employee-detail .employees-form .text-label-content .text-label-infor .text-content-input .show-text-input[data-v-7d848594] {\n  border: 1px solid #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 70%;\n  padding: 3px 10px;\n  height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-top: -40px;\n  margin-left: 183px;\n}\n#employee-detail .employees-form .text-label-content .text-label-infor .text-content-input .show-text-input .span-label[data-v-7d848594] {\n  float: right;\n}\n#employee-detail .employees-form .text-label-content .label-text[data-v-7d848594] {\n  color: #000;\n}\n#employee-detail .employees-form .text-label-content-off[data-v-7d848594] {\n  margin-top: 63px;\n}\n#employee-detail .employees-form .text-label-content-off .text-label-infor[data-v-7d848594] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n#employee-detail .employees-form .text-label-content-off .label-text[data-v-7d848594] {\n  color: #000;\n}\n#employee-detail .employees-form .text-label h3[data-v-7d848594] {\n  color: #333;\n  font-weight: 600;\n}\n#employee-detail .employees-form .text-label h3 .icon-text-label[data-v-7d848594] {\n  margin-left: 8px;\n}\n#employee-detail .employees-form .text-label .label-onsite[data-v-7d848594] {\n  color: #f98d31;\n}\n#employee-detail .employees-form .text-content[data-v-7d848594] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n#employee-detail .employees-form .text-content .image[data-v-7d848594] {\n  width: 70%;\n}\n#employee-detail .employees-form .text-content label[data-v-7d848594] {\n  width: 30%;\n  color: #333;\n  font-size: 13px;\n  font-weight: 600;\n}\n#employee-detail .employees-form .show-text[data-v-7d848594] {\n  border: 1px solid #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 70%;\n  padding: 3px 10px;\n  height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n#employee-detail .employees-form .show-text .span-label[data-v-7d848594] {\n  float: right;\n}\n#employee-detail .employees-form .show-text-name[data-v-7d848594] {\n  border: 1px solid #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 70%;\n  padding: 3px 10px;\n  height: 120px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true& ***!
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
  return _c(
    "div",
    { attrs: { id: "employee-detail" } },
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label" }, [
                _c(
                  "h3",
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.$t("customer.label_customer_information")) +
                        "\n          "
                    ),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "Customer Edit",
                            params: {
                              id: _vm.customer.id,
                              tab: "general-informations"
                            }
                          },
                          tag: "a"
                        }
                      },
                      [
                        _c("CIcon", {
                          staticClass: "btn-edit",
                          attrs: { name: "cilPencil" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-label-content" }, [
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(
                      _vm._s(_vm.$t("customer.label_customer_company_name"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(_vm._s(_vm.customer.company_name))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(
                      _vm._s(_vm.$t("customer.label_customer_abbreviations"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(_vm._s(_vm.customer.abbreviations))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("customer.label_customer_investment")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.customer.investment) +
                        "\n            "
                    ),
                    _c("span", { staticClass: "span-label" }, [
                      _vm._v(_vm._s(_vm.$t("customer.money")))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(
                      _vm._s(_vm.$t("customer.label_customer_shareholder"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(_vm._s(_vm.customer.shareholder))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("customer.label_customer_rank")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(
                      _vm._s(_vm.$t("customer.label_customer_rank")) +
                        " " +
                        _vm._s(_vm.customer.rank)
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("customer.label_customer_homepage")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: _vm.customer.website, target: "_blank" }
                      },
                      [_vm._v(_vm._s(_vm.customer.website))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(
                      _vm._s(_vm.$t("customer.label_customer_number_employee"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text" }, [
                    _vm._v(_vm._s(_vm.customer.number_employee))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-content" }, [
                  _c("label", [
                    _vm._v(
                      _vm._s(
                        _vm.$t("customer.label_customer_company_description")
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "show-text-name" }, [
                    _vm._v(_vm._s(_vm.customer.description))
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label" }, [
                _c(
                  "h3",
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t("customer.label_customer_user_information")
                        ) +
                        "\n          "
                    ),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "Customer Edit",
                            params: {
                              id: _vm.customer.id,
                              tab: "customer-care"
                            }
                          },
                          tag: "a"
                        }
                      },
                      [
                        _c("CIcon", {
                          staticClass: "btn-edit",
                          attrs: { name: "cilPencil" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-label-content" },
                [
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", [
                      _vm._v(_vm._s(_vm.$t("customer.label_customer")))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.customer.customer_responsibilities, function(
                    item
                  ) {
                    return _c(
                      "div",
                      { key: item.id, staticClass: "text-label-infor" },
                      [
                        item.type == 1
                          ? _c("div", [
                              _c("div", { staticClass: "text-content" }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("customer.label_customer_name")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "show-text" }, [
                                  _vm._v(_vm._s(item.name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-content" }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("customer.label_customer_location")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "show-text" }, [
                                  _vm._v(_vm._s(item.position))
                                ])
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", [
                      _vm._v(
                        _vm._s(_vm.$t("customer.label_customer_fabbi_japan"))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.customer.customer_responsibilities, function(
                    item_fabbi_japan
                  ) {
                    return _c(
                      "div",
                      {
                        key: item_fabbi_japan.id,
                        staticClass: "text-label-infor"
                      },
                      [
                        item_fabbi_japan.type == 2
                          ? _c("div", [
                              _c("div", { staticClass: "text-content" }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("customer.label_customer_name")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "show-text" }, [
                                  _vm._v(_vm._s(item_fabbi_japan.name))
                                ])
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", [
                      _vm._v(_vm._s(_vm.$t("customer.label_customer_fabbi")))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.customer.customer_responsibilities, function(
                    item_fabbi
                  ) {
                    return _c(
                      "div",
                      { key: item_fabbi.id, staticClass: "text-label-infor" },
                      [
                        item_fabbi.type == 3
                          ? _c("div", [
                              _c("div", { staticClass: "text-content" }, [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("customer.label_customer_name")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "show-text" }, [
                                  _vm._v(_vm._s(item_fabbi.name))
                                ])
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label" }, [
                _c(
                  "h3",
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.$t("customer.label_customer_cost")) +
                        "\n          "
                    ),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "Customer Edit",
                            params: { id: _vm.customer.id, tab: "contract" }
                          },
                          tag: "a"
                        }
                      },
                      [
                        _c("CIcon", {
                          staticClass: "btn-edit",
                          attrs: { name: "cilPencil" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-label-content" }, [
                _c("div", { staticClass: "text-label" }, [
                  _c("h5", { staticClass: "label-onsite" }, [
                    _vm._v(_vm._s(_vm.$t("customer.label_customer_onsite")))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-label-content" }, [
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", { staticClass: "label-text" }, [
                      _vm._v(
                        _vm._s(_vm.$t("customer.semi_commissioned_contract"))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label-infor" }, [
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_onsite_leader")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_onsite_leader) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_onsite_nember")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_onsite_member) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-label-content" }, [
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", { staticClass: "label-text" }, [
                      _vm._v(_vm._s(_vm.$t("customer.contract")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label-infor" }, [
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_onsite_leader")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.lab_contract_onsite_leader) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_onsite_nember")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.lab_contract_onsite_member) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label-content-off" }, [
                _c("div", { staticClass: "text-label" }, [
                  _c("h5", { staticClass: "label-onsite" }, [
                    _vm._v(_vm._s(_vm.$t("customer.label_customer_offshore")))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-label-content" }, [
                  _c("div", { staticClass: "text-label" }, [
                    _c("h5", { staticClass: "label-text" }, [
                      _vm._v(
                        _vm._s(_vm.$t("customer.semi_commissioned_contract"))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label-infor" }, [
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_offshore_brse")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_offshore_brse) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_offshore_se")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_offshore_se) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_offshore_tester")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_offshore_tester) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("customer.label_offshore_comtor")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.contract_offshore_comtor) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-label-infor" }, [
                    _c("div", { staticClass: "text-content-input" }, [
                      _c("label", [
                        _c("h5", { staticClass: "label-text" }, [
                          _vm._v(_vm._s(_vm.$t("customer.contract")))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text-input" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.customer.lab_contract_offshore) +
                            "\n                "
                        ),
                        _c("span", { staticClass: "span-label" }, [
                          _vm._v(_vm._s(_vm.$t("customer.money")))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/User/Customers/CustomerDetail.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CustomerDetail.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true& */ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true&");
/* harmony import */ var _CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& */ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d848594",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User/Customers/CustomerDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=style&index=0&id=7d848594&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_style_index_0_id_7d848594_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/CustomerDetail.vue?vue&type=template&id=7d848594&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_7d848594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);