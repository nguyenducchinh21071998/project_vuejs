(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isValid: true,
      activeTab: "general-informations"
    };
  },
  created: function created() {
    this.editCustomer();

    if (this.$route.params.tab) {
      this.activeTab = this.$route.params.tab;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    customer: "customer/customerEdit",
    rank: "commons/rank"
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("customer", ["edit"])), {}, {
    filterData: function filterData(type) {
      if (this.customer) {
        return this.customer.customer_responsibilities.filter(function (item) {
          return item.type === type;
        });
      }
    },
    editCustomer: function editCustomer() {
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
                return _this.edit(id);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validateForm: function validateForm() {
      var fields = [];
      this.isValid = true;

      var _iterator = _createForOfIteratorHelper(this.customer.customer_responsibilities),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var employee = _step.value;
          fields.push(employee);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      for (var _i = 0, _fields = fields; _i < _fields.length; _i++) {
        var field = _fields[_i];

        switch (field.type) {
          case 1:
            if (!field.name || !field.position) {
              this.isValid = false;
              return;
            }

            break;

          case 2:
            if (!field.name) {
              this.isValid = false;
              return;
            }

            break;

          case 3:
            if (!field.name) {
              this.isValid = false;
              return;
            }

            break;
        }
      }
    },
    updateCustomer: function updateCustomer() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var form, employeesType_1, employeesType_2, employeesType_3, i, data, _i2, _data, _i3, _data2, check;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.validateForm();

                form = JSON.parse(JSON.stringify(_this2.customer));
                delete form.employees;
                form = _objectSpread(_objectSpread({}, form), {}, {
                  responsibilityCustomer: [],
                  responsibilityFabbiJapan: [],
                  responsibilityFabbi: []
                });
                employeesType_1 = _this2.filterData(1);
                employeesType_2 = _this2.filterData(2);
                employeesType_3 = _this2.filterData(3);

                for (i = 0; i < employeesType_1.length; i++) {
                  data = {
                    name: employeesType_1[i].name,
                    employee_position: employeesType_1[i].position
                  };
                  form.responsibilityCustomer.push(data);
                }

                for (_i2 = 0; _i2 < employeesType_2.length; _i2++) {
                  _data = {
                    name: employeesType_2[_i2].name
                  };
                  form.responsibilityFabbiJapan.push(_data);
                }

                for (_i3 = 0; _i3 < employeesType_3.length; _i3++) {
                  _data2 = {
                    name: employeesType_3[_i3].name
                  };
                  form.responsibilityFabbi.push(_data2);
                }

                _context2.next = 12;
                return _this2.$refs.formCustomer.validate();

              case 12:
                check = _context2.sent;

                if (!(check && _this2.isValid)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 16;
                return _this2.$store.dispatch("customer/update", form).then(function (response) {
                  var message = ["Updated"];
                  message.forEach(function (message) {
                    _this2.$bvToast.toast(message, {
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
                    _this2.$router.push({
                      path: "/customers"
                    });
                  }, 1000);
                })["catch"](function (error) {});

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeTab: function changeTab(name) {
      this.activeTab = name;
    },
    addInformation: function addInformation(type) {
      this.customer.customer_responsibilities.push({
        customer_id: null,
        position: null,
        type: type
      });
    },
    checkTypeLength: function checkTypeLength(type) {
      return this.customer.customer_responsibilities.filter(function (item) {
        return item.type === type;
      }).length > 1;
    },
    deleteInformation: function deleteInformation(index) {
      this.customer.customer_responsibilities.splice(index, 1);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-36d10a8d] {\n  box-sizing: border-box;\n}\n.aside-menu[data-v-36d10a8d] {\n  margin-left: 150px;\n}\n.nav-tabs[data-v-36d10a8d] {\n  border: none;\n  font-size: 1rem;\n}\n.nav-item[data-v-36d10a8d] {\n  color: #858585;\n  cursor: pointer;\n}\n.nav-item.active span[data-v-36d10a8d] {\n  color: #032641;\n  display: inline-block;\n  border-bottom: 2px solid black;\n  padding-bottom: 2px;\n  font-weight: bold;\n}\n.form-group[data-v-36d10a8d] {\n  margin-bottom: 0;\n}\nh5[data-v-36d10a8d] {\n  margin: 30px 0;\n  font-weight: bold;\n}\nlabel[data-v-36d10a8d] {\n  color: #385368;\n}\n.required[data-v-36d10a8d] {\n  color: #ff1a1a;\n}\n.onsite[data-v-36d10a8d],\n.offshore[data-v-36d10a8d] {\n  color: #f6922d;\n}\n.placeholder[data-v-36d10a8d] {\n  position: absolute;\n  right: 25px;\n  color: #b3b3b3;\n  top: 7px;\n}\n.error-required[data-v-36d10a8d] {\n  color: #ff1a1a;\n}\n.contract[data-v-36d10a8d] {\n  margin: 0px;\n}\n.btn-add-new label[data-v-36d10a8d] {\n  color: #f6ab5f;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.btn-submit[data-v-36d10a8d] {\n  background-color: #b4daf3;\n  width: 215px;\n  height: 40px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.delete-btn[data-v-36d10a8d] {\n  color: red;\n}\n@media screen and (max-width: 1300px) {\n.aside-menu[data-v-36d10a8d] {\n    margin-left: 30px;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                          return handleSubmit(_vm.updateCustomer)
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
                              _c("CInput", {
                                attrs: { type: "hidden" },
                                model: {
                                  value: _vm.customer.id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customer, "id", $$v)
                                  },
                                  expression: "customer.id"
                                }
                              }),
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
                                      _c("h5", { staticClass: "onsite" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "customer.label_customer_offshore"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("h5", { staticClass: "label-text" }, [
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
                                                        "customer.contract"
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
                                                  name: _vm.$t(
                                                    "customer.contract"
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
                                  _vm._l(
                                    _vm.customer.customer_responsibilities,
                                    function(item_employee, index) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          staticClass:
                                            "customer-infomation mb-5"
                                        },
                                        [
                                          item_employee.type == 1
                                            ? _c(
                                                "div",
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
                                                              "\n                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.label_customer_name"
                                                                  )
                                                                ) +
                                                                "\n                        "
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "required"
                                                              },
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
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                item_employee.name,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  item_employee,
                                                                  "name",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "item_employee.name"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.checkTypeLength(1)
                                                        ? _c(
                                                            "span",
                                                            {
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.deleteInformation(
                                                                    index
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("CIcon", {
                                                                staticClass:
                                                                  "delete-btn",
                                                                attrs: {
                                                                  name:
                                                                    "cilTrash"
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
                                                              "\n                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "customer.label_customer_location"
                                                                  )
                                                                ) +
                                                                "\n                        "
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "required"
                                                              },
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
                                                            staticClass:
                                                              "-select",
                                                            attrs: {
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                item_employee.position,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  item_employee,
                                                                  "position",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "item_employee.position"
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
                                            : _vm._e()
                                        ]
                                      )
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(1)
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
                                  _vm._l(
                                    _vm.customer.customer_responsibilities,
                                    function(item_employee, index) {
                                      return _c("div", { key: index }, [
                                        item_employee.type == 2
                                          ? _c(
                                              "div",
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
                                                            "\n                        " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "customer.label_customer_name"
                                                                )
                                                              ) +
                                                              "\n                        "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "required"
                                                            },
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
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          model: {
                                                            value:
                                                              item_employee.name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item_employee,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item_employee.name"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _vm.checkTypeLength(2)
                                                      ? _c(
                                                          "span",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.deleteInformation(
                                                                  index
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("CIcon", {
                                                              staticClass:
                                                                "delete-btn",
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
                                          : _vm._e()
                                      ])
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(2)
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
                                  _vm._l(
                                    _vm.customer.customer_responsibilities,
                                    function(item_employee, index) {
                                      return _c("div", { key: index }, [
                                        item_employee.type == 3
                                          ? _c(
                                              "div",
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
                                                            "\n                        " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "customer.label_customer_name"
                                                                )
                                                              ) +
                                                              "\n                        "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "required"
                                                            },
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
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          model: {
                                                            value:
                                                              item_employee.name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item_employee,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item_employee.name"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _vm.checkTypeLength(3)
                                                      ? _c(
                                                          "span",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.deleteInformation(
                                                                  index
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("CIcon", {
                                                              staticClass:
                                                                "delete-btn",
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
                                          : _vm._e()
                                      ])
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btn-add-new" }, [
                                    _c(
                                      "label",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.addInformation(3)
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

/***/ "./resources/js/pages/User/Customers/EditCustomer.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/User/Customers/EditCustomer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true& */ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true&");
/* harmony import */ var _EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCustomer.vue?vue&type=script&lang=js& */ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& */ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36d10a8d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User/Customers/EditCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=style&index=0&id=36d10a8d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_style_index_0_id_36d10a8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/Customers/EditCustomer.vue?vue&type=template&id=36d10a8d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCustomer_vue_vue_type_template_id_36d10a8d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);