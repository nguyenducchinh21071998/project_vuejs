(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Employee',
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"]
  },
  data: function data() {
    return {
      formResignation: {
        employeeId: null,
        resignationDate: null,
        resignationReason: null
      }
    };
  },
  created: function created() {
    this.showDataEmployee();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    employee: 'employee/employee',
    workType: 'commons/workType'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('employee', ['showEmployee', 'resignationEmployee'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('layout', ['setLoading'])), {}, {
    showModal: function showModal(employeeId) {
      this.$refs['my-modal'].show();
      this.formResignation.employeeId = employeeId;
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    showDataEmployee: function showDataEmployee() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var empoloyeeId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$route.params.id;

              case 2:
                empoloyeeId = _context.sent;

                if (!empoloyeeId) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return _this.showEmployee(empoloyeeId);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    takeResignation: function takeResignation() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.setLoading(true);

                _context2.next = 3;
                return _this2.resignationEmployee(_this2.formResignation).then(function () {
                  _this2.setLoading(false);

                  _this2.hideModal();

                  _this2.showDataEmployee();

                  _this2.formResignation = {};

                  _this2.$toast(_this2.$t('popup.label_popup_resignation_success'), null, 2000, 'b-toaster-top-center', 'success');
                })["catch"](function () {
                  _this2.setLoading(false);

                  _this2.hideModal();

                  _this2.formResignation = {};
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#employee-detail[data-v-46eeabd9] {\n  padding: 20px 100px;\n}\n#employee-detail .employees-form[data-v-46eeabd9] {\n  padding: 0 50px;\n  margin-bottom: 30px;\n}\n#employee-detail .employees-form .text-label h4[data-v-46eeabd9] {\n  color: #333;\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 30px;\n}\n#employee-detail .employees-form .text-label h4 .icon-text-label[data-v-46eeabd9] {\n  margin-left: 8px;\n}\n#employee-detail .employees-form .text-content[data-v-46eeabd9] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n#employee-detail .employees-form .text-content .image[data-v-46eeabd9] {\n  width: 70%;\n}\n#employee-detail .employees-form .text-content label[data-v-46eeabd9] {\n  width: 30%;\n  color: #333;\n  font-size: 13px;\n  font-weight: 600;\n}\n#employee-detail .employees-form .show-text[data-v-46eeabd9] {\n  border: 1px solid #fff;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  width: 70%;\n  padding: 0 10px;\n  height: 25px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n#employee-detail .employees-form .text-area[data-v-46eeabd9] {\n  height: 60px;\n}\n#employee-detail .employees-form .required[data-v-46eeabd9] {\n  color: #dc1313;\n  font-size: 13px;\n}\n#employee-detail #toggle-btn[data-v-46eeabd9] {\n  height: 37px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                _c("h4", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("employee.label_employee_information")) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_code")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.id) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_name")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_birthday")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm._f("formatDate")(_vm.employee.birthday)) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_address")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.address) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(_vm.$t("employee.label_employee_current_residence"))
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.current_address) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_university")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.university_name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_work_type")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.workType[_vm.employee.work_type]) +
                      "\n                "
                  )
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
                _c("h4", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.$t("employee.label_employee_information_skill")
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_date_start")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm._f("formatDate")(_vm.employee.join_date)) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.employee.resignation_date
                ? [
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(
                          _vm._s(
                            _vm.$t("employee.label_employee_resignation_date")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm._f("formatDate")(
                                _vm.employee.resignation_date
                              )
                            ) +
                            "\n                    "
                        )
                      ])
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_company_name")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.company_name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_job_title")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.job_title_name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_foot")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.foot) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_division")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.division) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_position")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.position_name) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_level")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.employee.level
                          ? _vm.$t(
                              "commons.label_job_level_" + _vm.employee.level
                            )
                          : ""
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(
                      _vm.$t("employee.label_employee_language_certificate")
                    )
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.employee.japanese_level
                          ? _vm.$t(
                              "commons.label_japanese_level_" +
                                _vm.employee.japanese_level
                            )
                          : ""
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.employee.resignation_reason
                ? [
                    _c("div", { staticClass: "text-content" }, [
                      _c("label", [
                        _vm._v(
                          _vm._s(
                            _vm.$t("employee.label_employee_resignation_reason")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "show-text text-area" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.employee.resignation_reason) +
                            "\n                    "
                        )
                      ])
                    ])
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label" }, [
                _c("h4", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.$t("employee.label_employee_information_other")
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_avatar")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "image" }, [
                  _c("img", {
                    attrs: {
                      src: _vm.employee.image_url,
                      alt: _vm.employee.name,
                      height: "60px"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_gender")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.employee.gender
                          ? _vm.$t(
                              "commons.label_gender_name_" + _vm.employee.gender
                            )
                          : ""
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_nationality")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.nationality) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_nation")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.nation) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_phone")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.phone) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("label.phone_number_family")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.phone_family) +
                      "\n                "
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "employees-form", attrs: { md: "6", sm: "12" } },
            [
              _c("div", { staticClass: "text-label" }, [_c("h4")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(_vm.$t("employee.label_employee_identity_card"))
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.identity_number) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(
                      _vm.$t("employee.label_employee_date_range_identity_card")
                    )
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm._f("formatDate")(_vm.employee.identity_card_date)
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(
                      _vm.$t("employee.label_employee_place_identity_card")
                    )
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.identity_card_place) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(_vm._s(_vm.$t("employee.label_employee_visa_card")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.visa_card_number) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(_vm.$t("employee.label_employee_visa_card_duration"))
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm._f("formatDate")(_vm.employee.visa_date_period)
                      ) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-content" }, [
                _c("label", [
                  _vm._v(
                    _vm._s(_vm.$t("employee.label_employee_link_facebook"))
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "show-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.employee.link_facebook) +
                      "\n                "
                  )
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.employee.resignation_date
        ? [
            _c(
              "CRow",
              [
                _c(
                  "CCol",
                  { staticClass: "text-center", attrs: { md: "12", sm: "12" } },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-success",
                        attrs: {
                          to: { path: "/employees/update/" + _vm.employee.id },
                          tag: "a"
                        }
                      },
                      [
                        _c("CIcon", {
                          staticStyle: {
                            "margin-right": "3px",
                            border: "1px solid #fff"
                          },
                          attrs: { name: "cil-pencil" }
                        }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$t("button.label_action_edit")) +
                            "\n                "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "mr-1" }),
                    _vm._v(" "),
                    _c(
                      "CButton",
                      {
                        attrs: {
                          id: "toggle-btn",
                          color: "danger",
                          square: ""
                        },
                        on: {
                          click: function($event) {
                            return _vm.showModal(_vm.employee.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$t("button.label_action_resignation")) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      [
        _c(
          "b-modal",
          { ref: "my-modal", attrs: { "hide-footer": "", "hide-header": "" } },
          [
            _c("ValidationObserver", {
              ref: "formResignation",
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
                              return handleSubmit(_vm.takeResignation)
                            }
                          }
                        },
                        [
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                {
                                  staticClass: "form-field",
                                  attrs: { md: "12" }
                                },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "employee.label_employee_resignation_date"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      rules: "required",
                                      name: _vm.$t(
                                        "employee.label_employee_resignation_date"
                                      )
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("b-form-input", {
                                                directives: [
                                                  {
                                                    name: "mask",
                                                    rawName: "v-mask",
                                                    value: "##/##/####",
                                                    expression: "'##/##/####'"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "dd/mm/yyyy"
                                                },
                                                model: {
                                                  value:
                                                    _vm.formResignation
                                                      .resignationDate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formResignation,
                                                      "resignationDate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "formResignation.resignationDate"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "required" },
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
                          _c("div", { staticClass: "mt-2" }),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                {
                                  staticClass: "form-field",
                                  attrs: { md: "12" }
                                },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "employee.label_employee_resignation_reason"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    attrs: {
                                      rules: "required|min:10|max:500",
                                      name: _vm.$t(
                                        "employee.label_employee_resignation_reason"
                                      )
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("b-form-textarea", {
                                                attrs: { rows: "4" },
                                                model: {
                                                  value:
                                                    _vm.formResignation
                                                      .resignationReason,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formResignation,
                                                      "resignationReason",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "formResignation.resignationReason"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "required" },
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
                            { staticClass: "d-flex justify-content-end mr-1" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn btn-success mt-3",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "button.label_action_resignation_accept"
                                      )
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "mr-2" }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { variant: "outline-danger" },
                                  on: { click: _vm.hideModal }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("button.label_action_cancel"))
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/User/Employees/EmployeeInformation.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/User/Employees/EmployeeInformation.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true& */ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true&");
/* harmony import */ var _EmployeeInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeInformation.vue?vue&type=script&lang=js& */ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& */ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmployeeInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46eeabd9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User/Employees/EmployeeInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=style&index=0&id=46eeabd9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_style_index_0_id_46eeabd9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Employees/EmployeeInformation.vue?vue&type=template&id=46eeabd9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeInformation_vue_vue_type_template_id_46eeabd9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);