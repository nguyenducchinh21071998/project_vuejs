(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  data: function data() {
    return {
      errorFileMessage: '',
      imageType: ['image/jpeg', 'image/jpg', 'image/png', 'image/PNG', 'image/JPG'],
      isImage: true,
      idUpdate: '',
      foot_current: '',
      divisions_option: [],
      image_employee: '',
      form: {
        id: '',
        name: '',
        birthday: '',
        birthdayFormat: '',
        current_address: '',
        address: '',
        university_name: '',
        work_type: '',
        join_date: '',
        company_id: '',
        job_title_id: '',
        foot: '',
        department_id: '',
        position_id: '',
        level: '',
        japanese_level: '',
        image_url: '',
        gender: '',
        nationality: '',
        nation: '',
        phone: '',
        phone_family: '',
        identity_number: '',
        identity_card_date: '',
        identity_card_place: '',
        visa_card_number: '',
        visa_date_period: '',
        link_facebook: '',
        email: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.idUpdate = _this.$route.params.id;

              if (!_this.idUpdate) {
                _context.next = 9;
                break;
              }

              _context.next = 4;
              return _this.$store.dispatch('employee/getEmployee', _this.idUpdate);

            case 4:
              if (_this.$store.state.employee.checkEmployee !== 200) {
                _this.$router.push('/employees');
              }

              for (key in _this.getEmployee) {
                key === 'image_url' ? _this.image_employee = _this.getEmployee[key] : _this.getEmployee[key] !== null ? _this.form[key] = _this.getEmployee[key] : '';
              }

              _this.getEmployee.department.parent_id === null ? (_this.form.foot = _this.getEmployee.department.id) && (_this.form.department_id = '') : (_this.form.department_id = _this.getEmployee.department.id) && (_this.form.foot = _this.getEmployee.department.parent_id);
              _this.foot_current = _this.form.foot;

              _this.changeFoot(_this.form.foot);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    getEmployee: 'employee/getEmployee',
    jobTitle: 'commons/jobTitle',
    foots: 'commons/foots',
    divisions: 'commons/divisions',
    positions: 'commons/positions',
    jobLevel: 'commons/jobLevel',
    company: 'commons/company',
    gender: 'commons/gender',
    japaneseLevel: 'commons/japaneseLevel',
    workType: 'commons/workType'
  })),
  methods: {
    submitEmployee: function submitEmployee() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // add data to form data
                formData = new FormData();

                for (key in _this2.form) {
                  if (key === 'department_id') {
                    _this2.form.department_id === '' && _this2.form.foot !== '' ? formData.append('department_id', _this2.form.foot) : formData.append('department_id', _this2.form.department_id);
                  } else if (key === 'image_url') {
                    _this2.form.image_url !== null && _this2.form.image_url !== '' ? formData.append('file_url', _this2.form[key]) : '';
                  } else {
                    formData.append(key, _this2.form[key]);
                  }
                }

                if (_this2.idUpdate) {
                  formData.append('old_id', _this2.idUpdate);
                }

                if (!_this2.errorFileMessage) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                if (!(_this2.$route.name === 'CreateEmployee')) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return _this2.$store.dispatch('employee/createEmployee', formData).then(function (response) {
                  var message = ['Created'];
                  message.forEach(function (message) {
                    _this2.$bvToast.toast(message, {
                      title: '',
                      noCloseButton: false,
                      autoHideDelay: 2000,
                      appendToast: true,
                      toaster: 'b-toaster-top-center',
                      variant: 'success',
                      noFade: false,
                      solid: true
                    });
                  });
                  setTimeout(function () {
                    _this2.$router.push({
                      path: "/employees/detail/".concat(_this2.form.id)
                    });
                  }, 1000);
                })["catch"](function (error) {});

              case 8:
                _context2.next = 12;
                break;

              case 10:
                _context2.next = 12;
                return _this2.$store.dispatch('employee/updateEmployee', {
                  data: formData,
                  id: _this2.idUpdate
                }).then(function (response) {
                  var message = ['Updated'];
                  message.forEach(function (message) {
                    _this2.$bvToast.toast(message, {
                      title: '',
                      noCloseButton: false,
                      autoHideDelay: 2000,
                      appendToast: true,
                      toaster: 'b-toaster-top-center',
                      variant: 'success',
                      noFade: false,
                      solid: true
                    });
                  });
                  setTimeout(function () {
                    _this2.$router.push({
                      path: "/employees/detail/".concat(_this2.form.id)
                    });
                  }, 1000);
                })["catch"](function (error) {});

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // change avartar
    onImageChange: function onImageChange(e) {
      var file = e.target.files[0];

      if (e.target.files[0] && !this.imageType.includes(e.target.files[0].type)) {
        this.isImage = false;
        this.form.image_url = '';
        this.errorFileMessage = this.$t('error.img_type');
        return;
      } // check size file


      if (e.target.files[0] && e.target.files[0].size > 2000000) {
        this.isImage = false;
        this.errorFileMessage = this.$t('error.img_max');
        return;
      } //display image is choosen


      if (file !== undefined) {
        this.image_employee = URL.createObjectURL(file);
      }

      this.errorFileMessage = null;
      this.isImage = true;
      this.form.image_url = e.target.files[0];
    },
    cancelSubmit: function cancelSubmit() {
      this.$router.push({
        path: '/employees'
      });
    },
    changeFoot: function changeFoot(foot) {
      this.divisions_option = this.divisions.filter(function (option) {
        return option.parent_id === foot;
      });

      if (this.divisions_option.length === 0 || !foot || !this.form.department_id || this.foot_current !== foot) {
        this.form.department_id = '';
      }
    },
    changeDivision: function changeDivision() {
      this.foot_current = this.form.foot;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h4[data-v-1f0ad427] {\n  margin-bottom: 16px;\n  font-weight: bold;\n}\n.form-field[data-v-1f0ad427] {\n  margin-bottom: 20px;\n  clear: both;\n}\n.create_form .require[data-v-1f0ad427] {\n  color: #ff1a1a;\n}\n.employees[data-v-1f0ad427] {\n  margin-bottom: 50px;\n}\n.employees-form.button[data-v-1f0ad427] {\n  margin-top: 40px;\n  padding: 0px;\n}\n.save-info[data-v-1f0ad427] {\n  background: #b4daf3;\n  font-weight: 600;\n  padding: 7px 70px;\n  color: #0d2e48;\n  margin-right: 20px;\n  border: 2px solid #b4daf3;\n}\n.cancel-employee[data-v-1f0ad427] {\n  padding: 7px 45px;\n  font-weight: 600;\n  background: #f6f6f6;\n  border: 2px solid #0d2e48;\n  color: #0d2e48;\n  max-width: 213px;\n}\n.employees.container label[data-v-1f0ad427] {\n  font-weight: 600;\n  display: inline-block;\n  width: 33%;\n}\n.employees.container .form-group[data-v-1f0ad427] {\n  display: inline-block;\n  width: 66%;\n  margin-bottom: 5px;\n}\n.employees.container .form-control[data-v-1f0ad427] {\n  display: inline-block;\n  width: 66%;\n  margin-bottom: 0px;\n}\n.employees.container .form-control-file[data-v-1f0ad427] {\n  display: inline-block;\n  width: 66%;\n  float: right;\n  margin: 0px 0px 15px;\n}\n.employees.container .image-avartar[data-v-1f0ad427] {\n  margin-bottom: 15px;\n}\n.employees.container .error.image[data-v-1f0ad427] {\n  color: #ff1a1a;\n  width: 100%;\n  margin-bottom: 0px;\n  display: inline-block;\n}\n.employees.container .form-field.avatar[data-v-1f0ad427] {\n  margin-bottom: 34px;\n}\n.employees .required[data-v-1f0ad427] {\n  color: #ff1a1a;\n  margin-left: 34%;\n  margin-top: -15px;\n}\n@media screen and (max-width: 1200px) {\n.container-fluid .employees.container .form-group[data-v-1f0ad427] {\n    display: inline-block;\n    width: 100%;\n}\n.container-fluid .employees.container .form-control[data-v-1f0ad427] {\n    width: 100%;\n}\n.container-fluid .employees .required[data-v-1f0ad427] {\n    margin-left: 0%;\n}\n.container-fluid .employees.container label[data-v-1f0ad427] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 767px) {\n.employees .save-info[data-v-1f0ad427] {\n    margin-right: 0px;\n}\n.save-info[data-v-1f0ad427] {\n    margin-bottom: 20px;\n    width: 100%;\n}\n.cancel-employee[data-v-1f0ad427] {\n    width: 100%;\n    max-width: 100%;\n}\n.employees-form[data-v-1f0ad427] {\n    padding: 0px;\n}\n.employees.container[data-v-1f0ad427] {\n    padding: 0px;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true& ***!
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
  return _c("ValidationObserver", {
    ref: "formEmployee",
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var handleSubmit = ref.handleSubmit
          return [
            _c(
              "CForm",
              {
                staticClass: "create_form",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return handleSubmit(_vm.submitEmployee)
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
                        staticClass: "employees-form",
                        attrs: { md: "6", sm: "12" }
                      },
                      [
                        _c("CCol", { attrs: { md: "12" } }, [
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("label.personal_information")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.id_code")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required|numeric|max:4|min_value:1",
                                name: _vm.$t("label.id_code")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("CInput", {
                                          attrs: { type: "number" },
                                          model: {
                                            value: _vm.form.id,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "id", $$v)
                                            },
                                            expression: "form.id"
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
                        ),
                        _vm._v(" "),
                        !_vm.idUpdate
                          ? _c(
                              "CCol",
                              {
                                staticClass: "form-field",
                                attrs: { md: "12" }
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.$t("label.email")) +
                                      "\n                        "
                                  ),
                                  _c("span", { staticClass: "require" }, [
                                    _vm._v("(*)")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  attrs: {
                                    rules: "required|email",
                                    name: _vm.$t("label.email")
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("CInput", {
                                              attrs: { type: "email" },
                                              model: {
                                                value: _vm.form.email,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "email",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.email"
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
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.full_name")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required|min:6|max:64",
                                name: _vm.$t("label.full_name")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("CInput", {
                                          model: {
                                            value: _vm.form.name,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "name", $$v)
                                            },
                                            expression: "form.name"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.birthday")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.birthday")
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
                                            value: _vm.form.birthday,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "birthday",
                                                $$v
                                              )
                                            },
                                            expression: "form.birthday"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.native_country")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.address,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "address", $$v)
                                },
                                expression: "form.address"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.address")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.current_address,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "current_address", $$v)
                                },
                                expression: "form.current_address"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.university")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.university_name,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "university_name", $$v)
                                },
                                expression: "form.university_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.form_of_work")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.work_type,
                                    expression: "form.work_type"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "work_type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("employee.select_option"))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.workType, function(option, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: index } },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(option) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "CCol",
                      {
                        staticClass: "employees-form",
                        attrs: { md: "6", sm: "12" }
                      },
                      [
                        _c("CCol", { attrs: { md: "12" } }, [
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("label.information_business")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.time_start")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.time_start")
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
                                            value: _vm.form.join_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "join_date",
                                                $$v
                                              )
                                            },
                                            expression: "form.join_date"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.member_companies")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.member_companies")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.company_id,
                                                expression: "form.company_id"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.form,
                                                  "company_id",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "employee.select_option"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.company, function(
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
                                                    "\n                                " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "commons.label_company_name_" +
                                                            option
                                                        )
                                                      ) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        ),
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.office")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.office")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.job_title_id,
                                                expression: "form.job_title_id"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.form,
                                                  "job_title_id",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "employee.select_option"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.jobTitle, function(
                                              option,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: option.id }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(option.name) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        ),
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.foot")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.foot")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.foot,
                                                expression: "form.foot"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            on: {
                                              change: [
                                                function($event) {
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
                                                    _vm.form,
                                                    "foot",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.changeFoot(
                                                    _vm.form.foot
                                                  )
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "employee.select_option"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.foots, function(
                                              option,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: option.id }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(option.name) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        ),
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.division")) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.department_id,
                                    expression: "form.department_id"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  disabled:
                                    _vm.form.foot &&
                                    _vm.divisions_option.length !== 0
                                      ? false
                                      : true
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "department_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.changeDivision()
                                    }
                                  ]
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        >\n                        "
                                ),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("employee.select_option"))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.divisions_option, function(
                                  option,
                                  index
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      key: index,
                                      domProps: { value: option.id }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(option.name) +
                                          "\n                        "
                                      )
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
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.position")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required",
                                name: _vm.$t("label.position")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.position_id,
                                                expression: "form.position_id"
                                              }
                                            ],
                                            staticClass: "form-control",
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
                                                  _vm.form,
                                                  "position_id",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "employee.select_option"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.positions, function(
                                              option,
                                              index
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: { value: option.id }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(option.name) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        ),
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.level")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.level,
                                    expression: "form.level"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "level",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("employee.select_option"))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.jobLevel, function(option, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: option } },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t(
                                              "commons.label_job_level_" +
                                                option
                                            )
                                          ) +
                                          "\n                        "
                                      )
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
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.Japanese")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.japanese_level,
                                    expression: "form.japanese_level"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "japanese_level",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("employee.select_option"))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.japaneseLevel, function(
                                  option,
                                  index
                                ) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: option } },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "commons.label_japanese_level_" +
                                              option
                                          )
                                        ) + "\n                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "CRow",
                  [
                    _c(
                      "CCol",
                      {
                        staticClass: "employees-form",
                        attrs: { md: "6", sm: "12" }
                      },
                      [
                        _c(
                          "CCol",
                          {
                            staticClass: "other-infomation",
                            attrs: { md: "12" }
                          },
                          [
                            _c("h4", [
                              _vm._v(_vm._s(_vm.$t("label.other_infomation")))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          {
                            staticClass: "form-field avatar",
                            attrs: { md: "12" }
                          },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.personal_photo")))
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image-avartar",
                              attrs: {
                                src: _vm.image_employee
                                  ? _vm.image_employee
                                  : "/images/no-image-available.jpg",
                                width: "100",
                                height: "100"
                              }
                            }),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "image|size:2000",
                                name: _vm.$t("label.personal_photo")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("input", {
                                          staticClass: "form-control-file",
                                          attrs: {
                                            type: "file",
                                            id: "fileImage"
                                          },
                                          on: { change: _vm.onImageChange }
                                        }),
                                        _vm._v(" "),
                                        !_vm.isImage
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "error image required"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.errorFileMessage)
                                                )
                                              ]
                                            )
                                          : _vm._e(),
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.gender")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.gender,
                                    expression: "form.gender"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "gender",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("employee.select_option"))
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.gender, function(option, index) {
                                  return _c(
                                    "option",
                                    { key: index, domProps: { value: option } },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$t(
                                              "commons.label_gender_name_" +
                                                option
                                            )
                                          ) +
                                          "\n                        "
                                      )
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
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.nationality")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.nationality,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "nationality", $$v)
                                },
                                expression: "form.nationality"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.nation")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.nation,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "nation", $$v)
                                },
                                expression: "form.nation"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.phone_number")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required|numeric|min:9|max:14",
                                name: _vm.$t("label.phone_number")
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
                                            value: _vm.form.phone,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "phone", $$v)
                                            },
                                            expression: "form.phone"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.phone_number_family")) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "numeric|min:9|max:14",
                                name: _vm.$t("label.phone_number_family")
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
                                            value: _vm.form.phone_family,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "phone_family",
                                                $$v
                                              )
                                            },
                                            expression: "form.phone_family"
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
                      "CCol",
                      {
                        staticClass: "employees-form",
                        attrs: { md: "6", sm: "12" }
                      },
                      [
                        _c("CCol", { attrs: { md: "12" } }, [
                          _c("br"),
                          _vm._v(" "),
                          _c("br")
                        ]),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("label.id_card_pasport")) +
                                  "\n                        "
                              ),
                              _c("span", { staticClass: "require" }, [
                                _vm._v("(*)")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: {
                                  required: true,
                                  regex: /^[a-zA-Z0-9]+$/,
                                  min: 6,
                                  max: 32
                                },
                                name: _vm.$t("label.id_card_pasport")
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
                                            value: _vm.form.identity_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "identity_number",
                                                $$v
                                              )
                                            },
                                            expression: "form.identity_number"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.date_provide")))
                            ]),
                            _vm._v(" "),
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
                                value: _vm.form.identity_card_date,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "identity_card_date", $$v)
                                },
                                expression: "form.identity_card_date"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.place_provide")))
                            ]),
                            _vm._v(" "),
                            _c("CInput", {
                              model: {
                                value: _vm.form.identity_card_place,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "identity_card_place", $$v)
                                },
                                expression: "form.identity_card_place"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [_vm._v(_vm._s(_vm.$t("label.visa")))]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "numeric|min:6|max:32",
                                name: _vm.$t("label.visa_card_number")
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
                                            value: _vm.form.visa_card_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "visa_card_number",
                                                $$v
                                              )
                                            },
                                            expression: "form.visa_card_number"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.expiry_date_visa")))
                            ]),
                            _vm._v(" "),
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
                                value: _vm.form.visa_date_period,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "visa_date_period", $$v)
                                },
                                expression: "form.visa_date_period"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "CCol",
                          { staticClass: "form-field", attrs: { md: "12" } },
                          [
                            _c("label", [
                              _vm._v(_vm._s(_vm.$t("label.link_facebook")))
                            ]),
                            _vm._v(" "),
                            _c("ValidationProvider", {
                              attrs: {
                                rules: {
                                  regex: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
                                },
                                name: _vm.$t("label.link_facebook")
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("CInput", {
                                          model: {
                                            value: _vm.form.link_facebook,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "link_facebook",
                                                $$v
                                              )
                                            },
                                            expression: "form.link_facebook"
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
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "CCol",
                  {
                    staticClass: "employees-form button",
                    attrs: { md: "12", sm: "12" }
                  },
                  [
                    _c(
                      "CCol",
                      { staticClass: "employees-form", attrs: { md: "12" } },
                      [
                        _c(
                          "CButton",
                          {
                            staticClass: "save-info",
                            attrs: { type: "submit" }
                          },
                          [_vm._v(_vm._s(_vm.$t("label.save_infomation")))]
                        ),
                        _vm._v(" "),
                        !_vm.idUpdate
                          ? _c(
                              "CButton",
                              {
                                staticClass: "cancel-employee",
                                attrs: { type: "reset" },
                                on: { click: _vm.cancelSubmit }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("label.cancel_employee")) +
                                    "\n                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.idUpdate
                          ? _c(
                              "CButton",
                              {
                                staticClass: "cancel-employee",
                                attrs: { type: "reset" },
                                on: { click: _vm.cancelSubmit }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("label.cancel_update_employee")
                                  ) + "\n                "
                                )
                              ]
                            )
                          : _vm._e()
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
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Employees/FormEmployee.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Employees/FormEmployee.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true& */ "./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true&");
/* harmony import */ var _FormEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEmployee.vue?vue&type=script&lang=js& */ "./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& */ "./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f0ad427",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Employees/FormEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=style&index=0&id=1f0ad427&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_style_index_0_id_1f0ad427_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Employees/FormEmployee.vue?vue&type=template&id=1f0ad427&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEmployee_vue_vue_type_template_id_1f0ad427_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);