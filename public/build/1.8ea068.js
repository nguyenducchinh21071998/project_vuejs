(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartBarExample',
  components: {
    CChartBar: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartBar"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartBarSimple',
  components: {
    CChartBar: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartBar"]
  },
  props: _objectSpread(_objectSpread({}, _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartBar"].props), {}, {
    backgroundColor: {
      type: String,
      "default": 'rgba(0,0,0,.2)'
    },
    pointHoverBackgroundColor: String,
    dataPoints: {
      type: Array,
      "default": function _default() {
        return [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    label: {
      type: String,
      "default": 'Sales'
    },
    pointed: Boolean
  }),
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        data: this.dataPoints,
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.backgroundColor),
        pointHoverBackgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.pointHoverBackgroundColor),
        label: this.label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
    },
    computedDatasets: function computedDatasets() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["deepObjectsMerge"])(this.defaultDatasets, this.datasets || {});
    },
    computedOptions: function computedOptions() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["deepObjectsMerge"])(this.defaultOptions, this.options || {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartDoughnutExample',
  components: {
    CChartDoughnut: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartDoughnut"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartLineExample',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: 'Data One',
        backgroundColor: 'rgb(228,102,81,0.9)',
        data: [30, 39, 10, 50, 30, 70, 35]
      }, {
        label: 'Data Two',
        backgroundColor: 'rgb(0,216,255,0.9)',
        data: [39, 80, 40, 35, 40, 20, 45]
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartLineSimple',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  props: _objectSpread(_objectSpread({}, _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"].props), {}, {
    borderColor: {
      type: String,
      "default": 'rgba(255,255,255,.55)'
    },
    backgroundColor: {
      type: String,
      "default": 'transparent'
    },
    dataPoints: {
      type: Array,
      "default": function _default() {
        return [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    label: {
      type: String,
      "default": 'Sales'
    },
    pointed: Boolean,
    pointHoverBackgroundColor: String
  }),
  computed: {
    pointHoverColor: function pointHoverColor() {
      if (this.pointHoverBackgroundColor) {
        return this.pointHoverBackgroundColor;
      } else if (this.backgroundColor !== 'transparent') {
        return this.backgroundColor;
      }

      return this.borderColor;
    },
    defaultDatasets: function defaultDatasets() {
      return [{
        data: this.dataPoints,
        borderColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.borderColor),
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.backgroundColor),
        pointBackgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.pointHoverColor),
        pointHoverBackgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getColor"])(this.pointHoverColor),
        label: this.label
      }];
    },
    pointedOptions: function pointedOptions() {
      return {
        scales: {
          xAxes: [{
            offset: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, this.dataPoints) - 5,
              max: Math.max.apply(Math, this.dataPoints) + 5
            }
          }]
        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      };
    },
    straightOptions: function straightOptions() {
      return {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      };
    },
    defaultOptions: function defaultOptions() {
      var options = this.pointed ? this.pointedOptions : this.straightOptions;
      return Object.assign({}, options, {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      });
    },
    computedDatasets: function computedDatasets() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["deepObjectsMerge"])(this.defaultDatasets, this.datasets || {});
    },
    computedOptions: function computedOptions() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["deepObjectsMerge"])(this.defaultOptions, this.options || {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CChartPieExample',
  components: {
    CChartPie: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartPie"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
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
  name: 'CChartPolarAreaExample',
  components: {
    CChartPolarArea: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartPolarArea"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: 'rgba(179,181,198,1)',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        aspectRatio: 1.5
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
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
  name: 'CChartRadarExample',
  components: {
    CChartRadar: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartRadar"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: '2019',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        tooltipLabelColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: '2020',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        tooltipLabelColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        aspectRatio: 1.5
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainChartExample',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      var brandSuccess = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('success2') || '#4dbd74';
      var brandInfo = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('info') || '#20a8d8';
      var brandDanger = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('danger') || '#f86c6b';
      var elements = 27;
      var data1 = [];
      var data2 = [];
      var data3 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
      }

      return [{
        label: 'My First dataset',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      }, {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2
      }, {
        label: 'My Third dataset',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/index.js */ "./resources/js/assets/charts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WidgetsBrand',
  components: {
    CChartLineSimple: _charts_index_js__WEBPACK_IMPORTED_MODULE_0__["CChartLineSimple"]
  },
  props: {
    noCharts: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/index.js */ "./resources/js/assets/charts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WidgetsDropdown',
  components: {
    CChartLineSimple: _charts_index_js__WEBPACK_IMPORTED_MODULE_0__["CChartLineSimple"],
    CChartBarSimple: _charts_index_js__WEBPACK_IMPORTED_MODULE_0__["CChartBarSimple"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_charts_MainChartExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/assets/charts/MainChartExample */ "./resources/js/assets/charts/MainChartExample.vue");
/* harmony import */ var _assets_widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/assets/widgets/WidgetsDropdown */ "./resources/js/assets/widgets/WidgetsDropdown.vue");
/* harmony import */ var _assets_widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/assets/widgets/WidgetsBrand */ "./resources/js/assets/widgets/WidgetsBrand.vue");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  components: {
    MainChartExample: _assets_charts_MainChartExample__WEBPACK_IMPORTED_MODULE_1__["default"],
    WidgetsDropdown: _assets_widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
    WidgetsBrand: _assets_widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_3__["default"],
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4__["CChartLine"],
    CChartPie: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4__["CChartPie"],
    CChartBar: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_4__["CChartBar"]
  },
  data: function data() {
    return {
      selected: 'All',
      dataJoinMember: [],
      dataOutMember: [],
      dataInOutMember: [],
      listOptionInOut: ['All', 'Foot', 'Division']
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch('chart/getChartsData');

            case 2:
              _context.next = 4;
              return _this.$store.dispatch('chart/getChartsDataJoinOut', 'All');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    changeOption: function changeOption(param) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('chart/getChartsDataJoinOut', param);

              case 2:
                _this2.selected = param;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])({
    memberCompanies: 'chart/memberCompanies',
    memberFoots: 'chart/memberFoots',
    memberDivisions: 'chart/memberDivisions',
    memberJobTitle: 'chart/memberJobTitle',
    memberInOut: 'chart/memberInOut'
  })), {}, {
    defaultOptions: function defaultOptions() {
      return {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0
            }
          }]
        }
      };
    },
    defaultOptionJobTile: function defaultOptionJobTile() {
      var sum = [];

      for (var prop in this.memberJobTitle.data) {
        sum = sum * 1 + this.memberJobTitle.data[prop] * 1;
      }

      return {
        tooltips: {
          callbacks: {
            label: function label(tooltipItem, data) {
              var labels = data['labels'][tooltipItem['index']];
              var count = data['datasets'][0]['data'][tooltipItem['index']];
              var percentage = Math.round(data['datasets'][0]['data'][tooltipItem['index']] / sum * 100 * 10) / 10;
              return "".concat(labels, " : ").concat(count, " (").concat(percentage, "%)");
            }
          }
        }
      };
    },
    dataCompanies: function dataCompanies() {
      var dataMemberCompany = [{
        data: this.memberCompanies.data,
        backgroundColor: this.memberCompanies.backgroundColor
      }];
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(dataMemberCompany, this.datasets || {});
    },
    dataFoots: function dataFoots() {
      var memberFoots = [{
        data: this.memberFoots.data,
        backgroundColor: this.memberFoots.backgroundColor
      }];
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(memberFoots, this.datasets || {});
    },
    dataDivisions: function dataDivisions() {
      var memberDivisions = [{
        data: this.memberDivisions.data,
        backgroundColor: this.memberDivisions.backgroundColor
      }];
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(memberDivisions, this.datasets || {});
    },
    dataJobTitle: function dataJobTitle() {
      var memberJobTitle = [{
        data: this.memberJobTitle.data,
        backgroundColor: this.memberJobTitle.backgroundColor
      }];
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(memberJobTitle, this.datasets || {});
    },
    computedOptions: function computedOptions() {
      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(this.defaultOptions, this.options || {});
    },
    dataJoinOut: function dataJoinOut() {
      this.dataInOutMember = [];

      if (this.selected === 'All') {
        this.dataJoinMember = {
          data: this.memberInOut.memberIn,
          backgroundColor: 'transparent',
          borderColor: '#ffcc66',
          label: this.$t('chart.member_join')
        };
        this.dataOutMember = {
          data: this.memberInOut.memberOut,
          backgroundColor: 'transparent',
          borderColor: '#cc3300',
          label: this.$t('chart.member_out')
        };
        this.dataInOutMember = [this.dataJoinMember, this.dataOutMember];
      }

      if (this.selected === 'Division') {
        for (var prop in this.memberInOut) {
          this.dataInOutMember.push({
            data: Object.values(this.memberInOut[prop].data),
            backgroundColor: 'transparent',
            borderColor: this.memberInOut[prop].borderColor,
            label: this.memberInOut[prop].label
          });
        }
      }

      if (this.selected === 'Foot') {
        for (var _prop in this.memberInOut) {
          this.dataInOutMember.push({
            data: Object.values(this.memberInOut[_prop].data),
            backgroundColor: 'transparent',
            borderColor: this.memberInOut[_prop].borderColor,
            label: this.memberInOut[_prop].label
          });
        }
      }

      return Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["deepObjectsMerge"])(this.dataInOutMember, this.datasets || {});
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chart-dashboard .chart-title[data-v-418e52d9] {\n  margin-bottom: 15px;\n}\n.chart-dashboard .chart-title h4.card-title[data-v-418e52d9] {\n  padding-left: 15px;\n}\n.chart-dashboard .chart-title h4.line-chart[data-v-418e52d9] {\n  padding-left: 58px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.c-chart-brand[data-v-6a305f96] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartBar", {
    attrs: { datasets: _vm.defaultDatasets, labels: "months" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartBar", {
    attrs: {
      datasets: _vm.computedDatasets,
      options: _vm.computedOptions,
      labels: _vm.labels
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartDoughnut", {
    attrs: {
      datasets: _vm.defaultDatasets,
      labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: { datasets: _vm.defaultDatasets, labels: "months" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: {
      datasets: _vm.computedDatasets,
      options: _vm.computedOptions,
      labels: _vm.labels
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartPie", {
    attrs: {
      datasets: _vm.defaultDatasets,
      labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartPolarArea", {
    attrs: {
      datasets: _vm.defaultDatasets,
      options: _vm.defaultOptions,
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running"
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartRadar", {
    attrs: {
      datasets: _vm.defaultDatasets,
      options: _vm.defaultOptions,
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running"
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: {
      datasets: _vm.defaultDatasets,
      options: _vm.defaultOptions,
      labels: [
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "CRow",
    [
      !_vm.noCharts
        ? [
            _c(
              "CCol",
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "facebook",
                      "right-header": "89k",
                      "right-footer": "friends",
                      "left-header": "459",
                      "left-footer": "feeds"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-facebook", height: "52" }
                    }),
                    _vm._v(" "),
                    _c("CChartLineSimple", {
                      staticClass: "c-chart-brand",
                      attrs: {
                        "background-color": "rgba(255,255,255,.1)",
                        "data-points": [65, 59, 84, 84, 51, 55, 40],
                        label: "Friends",
                        labels: "months"
                      }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "twitter",
                      "right-header": "973k",
                      "right-footer": "followers",
                      "left-header": "1.792",
                      "left-footer": "tweets"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-twitter", height: "52" }
                    }),
                    _vm._v(" "),
                    _c("CChartLineSimple", {
                      staticClass: "c-chart-brand",
                      attrs: {
                        "background-color": "rgba(255,255,255,.1)",
                        "data-points": [1, 13, 9, 17, 34, 41, 38],
                        label: "Followers",
                        labels: "months"
                      }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "linkedin",
                      "right-header": "500+",
                      "right-footer": "contracts",
                      "left-header": "292",
                      "left-footer": "feeds"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-linkedin", height: "52" }
                    }),
                    _vm._v(" "),
                    _c("CChartLineSimple", {
                      staticClass: "c-chart-brand",
                      attrs: {
                        "background-color": "rgba(255,255,255,.1)",
                        "data-points": [78, 81, 80, 45, 34, 12, 40],
                        label: "Contracts",
                        labels: "months"
                      }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      "right-header": "12",
                      "right-footer": "events",
                      "left-header": "4",
                      "left-footer": "meetings",
                      color: "warning"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cil-calendar", height: "52" }
                    }),
                    _vm._v(" "),
                    _c("CChartLineSimple", {
                      staticClass: "c-chart-brand",
                      attrs: {
                        "background-color": "rgba(255,255,255,.1)",
                        "data-points": [35, 23, 56, 22, 97, 23, 64],
                        label: "Followers",
                        labels: "months"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]
        : [
            _c(
              "CCol",
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "facebook",
                      "right-header": "89k",
                      "right-footer": "friends",
                      "left-header": "459",
                      "left-footer": "feeds"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-facebook", height: "56" }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "twitter",
                      "right-header": "973k",
                      "right-footer": "followers",
                      "left-header": "1.792",
                      "left-footer": "tweets"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-twitter", height: "56" }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      color: "linkedin",
                      "right-header": "500+",
                      "right-footer": "contracts",
                      "left-header": "292",
                      "left-footer": "feeds"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cib-linkedin", height: "56" }
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
              { attrs: { md: "3", sm: "6" } },
              [
                _c(
                  "CWidgetBrand",
                  {
                    attrs: {
                      "right-header": "12",
                      "right-footer": "events",
                      "left-header": "4",
                      "left-footer": "meetings",
                      color: "warning"
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "my-4",
                      attrs: { name: "cil-calendar", height: "56" }
                    })
                  ],
                  1
                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { sm: "6", lg: "3" } },
        [
          _c("CWidgetDropdown", {
            attrs: {
              color: "primary",
              header: "9.823",
              text: "Members online"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "CDropdown",
                      {
                        attrs: {
                          color: "transparent p-0",
                          placement: "bottom-end"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "toggler-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-settings" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Another action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Something else here...")]),
                        _vm._v(" "),
                        _c("CDropdownItem", { attrs: { disabled: "" } }, [
                          _vm._v(
                            "\n                        Disabled action\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "footer",
                fn: function() {
                  return [
                    _c("CChartLineSimple", {
                      staticClass: "mt-3 mx-3",
                      staticStyle: { height: "70px" },
                      attrs: {
                        pointed: "",
                        "data-points": [65, 59, 84, 84, 51, 55, 40],
                        "point-hover-background-color": "primary",
                        label: "Members",
                        labels: "months"
                      }
                    })
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { sm: "6", lg: "3" } },
        [
          _c("CWidgetDropdown", {
            attrs: { color: "info", header: "9.823", text: "Members online" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "CDropdown",
                      {
                        attrs: {
                          color: "transparent p-0",
                          placement: "bottom-end",
                          caret: false
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "toggler-content",
                            fn: function() {
                              return [
                                _c("CIcon", {
                                  attrs: { name: "cil-location-pin" }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Another action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Something else here...")]),
                        _vm._v(" "),
                        _c("CDropdownItem", { attrs: { disabled: "" } }, [
                          _vm._v(
                            "\n                        Disabled action\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "footer",
                fn: function() {
                  return [
                    _c("CChartLineSimple", {
                      staticClass: "mt-3 mx-3",
                      staticStyle: { height: "70px" },
                      attrs: {
                        pointed: "",
                        "data-points": [1, 18, 9, 17, 34, 22, 11],
                        "point-hover-background-color": "info",
                        options: { elements: { line: { tension: 0.00001 } } },
                        label: "Members",
                        labels: "months"
                      }
                    })
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { sm: "6", lg: "3" } },
        [
          _c("CWidgetDropdown", {
            attrs: {
              color: "warning",
              header: "9.823",
              text: "Members online"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "CDropdown",
                      {
                        attrs: {
                          color: "transparent p-0",
                          placement: "bottom-end"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "toggler-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-settings" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Another action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Something else here...")]),
                        _vm._v(" "),
                        _c("CDropdownItem", { attrs: { disabled: "" } }, [
                          _vm._v(
                            "\n                        Disabled action\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "footer",
                fn: function() {
                  return [
                    _c("CChartLineSimple", {
                      staticClass: "mt-3",
                      staticStyle: { height: "70px" },
                      attrs: {
                        "background-color": "rgba(255,255,255,.2)",
                        "data-points": [78, 81, 80, 45, 34, 12, 40],
                        options: { elements: { line: { borderWidth: 2.5 } } },
                        "point-hover-background-color": "warning",
                        label: "Members",
                        labels: "months"
                      }
                    })
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CCol",
        { attrs: { sm: "6", lg: "3" } },
        [
          _c("CWidgetDropdown", {
            attrs: { color: "danger", header: "9.823", text: "Members online" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "CDropdown",
                      {
                        attrs: {
                          color: "transparent p-0",
                          placement: "bottom-end"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "toggler-content",
                            fn: function() {
                              return [
                                _c("CIcon", { attrs: { name: "cil-settings" } })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Another action")]),
                        _vm._v(" "),
                        _c("CDropdownItem", [_vm._v("Something else here...")]),
                        _vm._v(" "),
                        _c("CDropdownItem", { attrs: { disabled: "" } }, [
                          _vm._v(
                            "\n                        Disabled action\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "footer",
                fn: function() {
                  return [
                    _c("CChartBarSimple", {
                      staticClass: "mt-3 mx-3",
                      staticStyle: { height: "70px" },
                      attrs: {
                        "background-color": "rgb(250, 152, 152)",
                        label: "Members",
                        labels: "months"
                      }
                    })
                  ]
                },
                proxy: true
              }
            ])
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "chart-dashboard" },
    [
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12", lg: "6" } },
                            [
                              _c("CRow", { staticClass: "chart-title" }, [
                                _c("h4", { staticClass: "card-title mb-0" }, [
                                  _vm._v(_vm._s(_vm.$t("chart.member_company")))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr", { staticClass: "mt-0" }),
                              _vm._v(" "),
                              _c("CChartBar", {
                                attrs: {
                                  datasets: _vm.dataCompanies,
                                  options: _vm.computedOptions,
                                  labels: _vm.memberCompanies.labels
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12", lg: "6" } },
                            [
                              _c("CRow", { staticClass: "chart-title" }, [
                                _c("h4", { staticClass: "card-title mb-0" }, [
                                  _vm._v(_vm._s(_vm.$t("chart.foot")))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr", { staticClass: "mt-0" }),
                              _vm._v(" "),
                              _c("CChartBar", {
                                attrs: {
                                  datasets: _vm.dataFoots,
                                  labels: _vm.memberFoots.labels,
                                  options: _vm.computedOptions
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br")
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
            { attrs: { md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c(
                            "CCol",
                            { attrs: { sm: "12", lg: "6" } },
                            [
                              _c("CRow", { staticClass: "chart-title" }, [
                                _c("h4", { staticClass: "card-title mb-0" }, [
                                  _vm._v(_vm._s(_vm.$t("chart.division")))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr", { staticClass: "mt-0" }),
                              _vm._v(" "),
                              _c("CChartBar", {
                                attrs: {
                                  datasets: _vm.dataDivisions,
                                  labels: _vm.memberDivisions.labels,
                                  options: _vm.computedOptions
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12", lg: "6" } },
                            [
                              _c("CRow", { staticClass: "chart-title" }, [
                                _c("h4", { staticClass: "card-title mb-0" }, [
                                  _vm._v(_vm._s(_vm.$t("chart.all_member")))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr", { staticClass: "mt-0" }),
                              _vm._v(" "),
                              _c("CChartPie", {
                                attrs: {
                                  datasets: _vm.dataJobTitle,
                                  labels: _vm.memberJobTitle.labels,
                                  options: _vm.defaultOptionJobTile
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br")
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
            { attrs: { sm: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        [
                          _c("CRow", { staticClass: "chart-title" }, [
                            _c("h4", { staticClass: "line-chart mb-0" }, [
                              _vm._v(_vm._s(_vm.$t("chart.join_out")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            {
                              staticClass: "d-none d-md-block",
                              attrs: { sm: "10" }
                            },
                            [
                              _c(
                                "CButtonGroup",
                                { staticClass: "float-right mr-3" },
                                _vm._l(_vm.listOptionInOut, function(
                                  value,
                                  key
                                ) {
                                  return _c(
                                    "CButton",
                                    {
                                      key: key,
                                      staticClass: "mx-0",
                                      attrs: {
                                        color: "outline-secondary",
                                        pressed:
                                          value === _vm.selected ? true : false
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeOption(value)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(value) + "\n                "
                                      )
                                    ]
                                  )
                                }),
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
                        { attrs: { md: "10" } },
                        [
                          _c("CChartLine", {
                            attrs: {
                              datasets: _vm.dataJoinOut,
                              labels: "indexes",
                              labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                              ]
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
            ],
            1
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

/***/ "./resources/js/assets/charts/CChartBarExample.vue":
/*!*********************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarExample.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartBarExample.vue?vue&type=template&id=37a91904& */ "./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904&");
/* harmony import */ var _CChartBarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartBarExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartBarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartBarExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartBarExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartBarExample.vue?vue&type=template&id=37a91904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarExample.vue?vue&type=template&id=37a91904&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarExample_vue_vue_type_template_id_37a91904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartBarSimple.vue":
/*!********************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarSimple.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartBarSimple.vue?vue&type=template&id=a51c7164& */ "./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164&");
/* harmony import */ var _CChartBarSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartBarSimple.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartBarSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartBarSimple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartBarSimple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164&":
/*!***************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartBarSimple.vue?vue&type=template&id=a51c7164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartBarSimple.vue?vue&type=template&id=a51c7164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartBarSimple_vue_vue_type_template_id_a51c7164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartDoughnutExample.vue":
/*!**************************************************************!*\
  !*** ./resources/js/assets/charts/CChartDoughnutExample.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartDoughnutExample.vue?vue&type=template&id=218b1071& */ "./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071&");
/* harmony import */ var _CChartDoughnutExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartDoughnutExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartDoughnutExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartDoughnutExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartDoughnutExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartDoughnutExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartDoughnutExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartDoughnutExample.vue?vue&type=template&id=218b1071& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartDoughnutExample.vue?vue&type=template&id=218b1071&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartDoughnutExample_vue_vue_type_template_id_218b1071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartLineExample.vue":
/*!**********************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineExample.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartLineExample.vue?vue&type=template&id=6f8e05bf& */ "./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf&");
/* harmony import */ var _CChartLineExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartLineExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartLineExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartLineExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartLineExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartLineExample.vue?vue&type=template&id=6f8e05bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineExample.vue?vue&type=template&id=6f8e05bf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineExample_vue_vue_type_template_id_6f8e05bf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartLineSimple.vue":
/*!*********************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineSimple.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartLineSimple.vue?vue&type=template&id=07792e26& */ "./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26&");
/* harmony import */ var _CChartLineSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartLineSimple.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartLineSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartLineSimple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartLineSimple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineSimple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartLineSimple.vue?vue&type=template&id=07792e26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartLineSimple.vue?vue&type=template&id=07792e26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartLineSimple_vue_vue_type_template_id_07792e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartPieExample.vue":
/*!*********************************************************!*\
  !*** ./resources/js/assets/charts/CChartPieExample.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartPieExample.vue?vue&type=template&id=4e5f4865& */ "./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865&");
/* harmony import */ var _CChartPieExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartPieExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartPieExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartPieExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPieExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartPieExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPieExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPieExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartPieExample.vue?vue&type=template&id=4e5f4865& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPieExample.vue?vue&type=template&id=4e5f4865&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPieExample_vue_vue_type_template_id_4e5f4865___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartPolarAreaExample.vue":
/*!***************************************************************!*\
  !*** ./resources/js/assets/charts/CChartPolarAreaExample.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66& */ "./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66&");
/* harmony import */ var _CChartPolarAreaExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartPolarAreaExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartPolarAreaExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartPolarAreaExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPolarAreaExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartPolarAreaExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPolarAreaExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartPolarAreaExample.vue?vue&type=template&id=5b3b3c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartPolarAreaExample_vue_vue_type_template_id_5b3b3c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/CChartRadarExample.vue":
/*!***********************************************************!*\
  !*** ./resources/js/assets/charts/CChartRadarExample.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartRadarExample.vue?vue&type=template&id=6a2ea22a& */ "./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a&");
/* harmony import */ var _CChartRadarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartRadarExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CChartRadarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/CChartRadarExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartRadarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartRadarExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartRadarExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CChartRadarExample.vue?vue&type=template&id=6a2ea22a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/CChartRadarExample.vue?vue&type=template&id=6a2ea22a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CChartRadarExample_vue_vue_type_template_id_6a2ea22a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/MainChartExample.vue":
/*!*********************************************************!*\
  !*** ./resources/js/assets/charts/MainChartExample.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainChartExample.vue?vue&type=template&id=f0ee46de& */ "./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de&");
/* harmony import */ var _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainChartExample.vue?vue&type=script&lang=js& */ "./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/charts/MainChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainChartExample.vue?vue&type=template&id=f0ee46de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/charts/MainChartExample.vue?vue&type=template&id=f0ee46de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f0ee46de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/charts/index.js":
/*!*********************************************!*\
  !*** ./resources/js/assets/charts/index.js ***!
  \*********************************************/
/*! exports provided: CChartLineSimple, CChartBarSimple, CChartLineExample, CChartBarExample, CChartDoughnutExample, CChartRadarExample, CChartPieExample, CChartPolarAreaExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CChartLineSimple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChartLineSimple */ "./resources/js/assets/charts/CChartLineSimple.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartLineSimple", function() { return _CChartLineSimple__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CChartBarSimple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CChartBarSimple */ "./resources/js/assets/charts/CChartBarSimple.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartBarSimple", function() { return _CChartBarSimple__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CChartLineExample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CChartLineExample */ "./resources/js/assets/charts/CChartLineExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartLineExample", function() { return _CChartLineExample__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CChartBarExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CChartBarExample */ "./resources/js/assets/charts/CChartBarExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartBarExample", function() { return _CChartBarExample__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CChartDoughnutExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CChartDoughnutExample */ "./resources/js/assets/charts/CChartDoughnutExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartDoughnutExample", function() { return _CChartDoughnutExample__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CChartRadarExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CChartRadarExample */ "./resources/js/assets/charts/CChartRadarExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartRadarExample", function() { return _CChartRadarExample__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CChartPieExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CChartPieExample */ "./resources/js/assets/charts/CChartPieExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartPieExample", function() { return _CChartPieExample__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CChartPolarAreaExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CChartPolarAreaExample */ "./resources/js/assets/charts/CChartPolarAreaExample.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CChartPolarAreaExample", function() { return _CChartPolarAreaExample__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsBrand.vue":
/*!******************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsBrand.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true& */ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true&");
/* harmony import */ var _WidgetsBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetsBrand.vue?vue&type=script&lang=js& */ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& */ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WidgetsBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a305f96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/widgets/WidgetsBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsBrand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=6a305f96&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_6a305f96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsBrand.vue?vue&type=template&id=6a305f96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_template_id_6a305f96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsDropdown.vue":
/*!*********************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsDropdown.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetsDropdown.vue?vue&type=template&id=56e3d1d2& */ "./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2&");
/* harmony import */ var _WidgetsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetsDropdown.vue?vue&type=script&lang=js& */ "./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WidgetsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/assets/widgets/WidgetsDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetsDropdown.vue?vue&type=template&id=56e3d1d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/assets/widgets/WidgetsDropdown.vue?vue&type=template&id=56e3d1d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsDropdown_vue_vue_type_template_id_56e3d1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/User/DashBoard.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/User/DashBoard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=template&id=418e52d9&scoped=true& */ "./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true&");
/* harmony import */ var _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=script&lang=js& */ "./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& */ "./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "418e52d9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User/DashBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=style&index=0&id=418e52d9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_style_index_0_id_418e52d9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=template&id=418e52d9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/User/DashBoard.vue?vue&type=template&id=418e52d9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_418e52d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);