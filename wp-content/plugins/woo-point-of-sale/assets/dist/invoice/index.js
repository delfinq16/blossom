this["wc"] = this["wc"] || {}; this["wc"]["invoice"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/invoice/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/invoice/App.js":
/*!****************************!*\
  !*** ./src/invoice/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_buttons_buttons_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buttons/buttons.jsx */ "./src/invoice/components/buttons/buttons.jsx");
/* harmony import */ var _components_invoice_invoice_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/invoice/invoice.jsx */ "./src/invoice/components/invoice/invoice.jsx");
/* harmony import */ var _components_editElement_editElement_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/editElement/editElement.jsx */ "./src/invoice/components/editElement/editElement.jsx");
/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.less */ "./src/invoice/App.less");
/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _super.call(this, props);

    _initialiseProps.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var posUser = urlParams.get('pos_user');
    var posOrder = urlParams.get('pos_order');
    var editable = !posUser && !posOrder;
    _this.state = {
      editElement: 0,
      element: '',
      editable: editable
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.editable) {
        document.querySelector('.wkwcpos-invoice-wrapper').addEventListener('click', function (e) {
          if (e.target.classList.contains('wkwcpos-invoice-editable')) {
            if (e.target.classList.contains('wkwcpos-invoice-edit')) {
              e.target.classList.remove('wkwcpos-invoice-edit');

              _this2.setElementInState('');
            } else {
              document.querySelectorAll('.wkwcpos-invoice-editable').forEach(function (editableElement) {
                if (editableElement.classList.contains('wkwcpos-invoice-edit')) {
                  editableElement.classList.remove('wkwcpos-invoice-edit');
                }
              });
              e.target.classList.add('wkwcpos-invoice-edit');

              _this2.setElementInState(e.target);
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: this.state.editable ? "wkwcpos-invoice-container editable" : 'wkwcpos-invoice-container'
      }, this.state.editable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_buttons_buttons_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        editElement: this.state.editElement,
        element: this.state.element,
        setElement: this.setElementInState
      }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_invoice_invoice_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null), this.state.editElement && this.state.element ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_editElement_editElement_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        element: this.state.element,
        setElement: this.setElementInState
      }) : ''), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("br", null), this.state.editable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "button",
        class: "button button-primary",
        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('Save', 'wc_pos'),
        onClick: this.handleSave
      }) : '');
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setElementInState = function () {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (element) {
      _this3.setState({
        editElement: 1,
        element: element
      });
    } else {
      _this3.setState({
        editElement: 0,
        element: element
      });
    }
  };

  this.handleSave = function () {
    var invoiceHtml = document.querySelector('.wkwcpos-invoice-wrapper-container').innerHTML;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var invoiceId = urlParams.get('id');
    fetch(wkwcposInvoiceObj.api_admin_ajax, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      }),
      body: "action=wkwcpos_save_invoice&nonce=".concat(wkwcposInvoiceObj.pos_api_nonce, "&id=").concat(invoiceId, "&invoice_html=").concat(invoiceHtml)
    }).then(function (response) {
      return response.ok ? response.json() : false;
    }).then(function (response) {
      if (response.success) {
        var URL = window.location.href + '&invoice_saved=true';
        window.location.href = URL;
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/invoice/App.less":
/*!******************************!*\
  !*** ./src/invoice/App.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/invoice/components/buttons/buttons.jsx":
/*!****************************************************!*\
  !*** ./src/invoice/components/buttons/buttons.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _buttons_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons.less */ "./src/invoice/components/buttons/buttons.less");
/* harmony import */ var _buttons_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_buttons_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Buttons = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Buttons, _Component);

  var _super = _createSuper(Buttons);

  function Buttons(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Buttons);

    _this = _super.call(this, props);

    _this.handleClick = function () {
      _this.setState({
        addElement: !_this.state.addElement
      });
    };

    _this.resetDefaultInvoice = function () {
      var logo_invoice = '${logo_invoice}';
      var outlet_name = '${outlet_name}';
      var order_id = '${order_id}';
      var order_date = '${order_date}';
      var customer_fname = '${customer_fname}';
      var customer_lname = '${customer_lname}';
      var outlet_address = '${outlet_address}';
      var outlet_city = '${outlet_city}';
      var outlet_state = '${outlet_state}';
      var outlet_country = '${outlet_country}';
      var outlet_postcode = '${outlet_postcode}';
      var pos_user_phone = '${pos_user_phone}';
      var pos_user_email = '${pos_user_email}';
      var pro_name = '${pro_name}';
      var pro_quantity = '${pro_quantity}';
      var pro_unit_price = '${pro_unit_price}';
      var pro_total = '${pro_total}';
      var sub_total = '${sub_total}';
      var tax_title = '${tax_title}';
      var order_tax = '${order_tax}';
      var coupon_name = '${coupon_name}';
      var coupon_amount = '${coupon_amount}';
      var order_discount = '${order_discount}';
      var order_total = '${order_total}';
      var cashpay_amount = '${cashpay_amount}';
      var other_payment_text = '${other_payment_text}';
      var otherpay_amount = '${otherpay_amount}';
      var order_change = '${order_change}';
      var cashier_name = '${cashier_name}';
      logo_invoice = wkwcposInvoiceObj.invoice_data.logo_invoice;
      var invoiceData = "\n\n                <style>\n                    .wkwcpos-invoice-wrapper {\n                        padding: 10px;\n                        background-color: #fff;\n                        border-radius: 2px;\n                        grid-area: second;\n                    }\n                    .wkwcpos-invoice-wrapper * {\n                        padding: 0;\n                        margin: 0;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-header, .wkwcpos-invoice-wrapper .invoice-footer .footer-details {\n                        text-align: center;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-header img {\n                        width: 50px;\n                        margin: 10px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details {\n                        width: 100%;\n                        display: inline-block;\n                    }\n                    .wkwcpos-invoice-wrapper .order-details, .wkwcpos-invoice-wrapper .outlet-details {\n                        width: 50%;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details .order-details {\n                        float: left;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details .outlet-details {\n                        float: right;\n                        text-align: right;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details {\n                        margin: 15px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table {\n                        border-collapse: collapse;\n                        width: 100%;\n                        text-align: center;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td {\n                        padding: 3px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td p {\n                        padding: 3px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table thead, .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(1) {\n                        border-style: dashed;\n                        border-width: 3px 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(3) {\n                        border-style: dashed;\n                        border-width: 0 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(1), .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(2) {\n                        border-style: dashed;\n                        border-width: 0 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper hr {\n                        width: 35%;\n                        margin: 10px auto 7px;\n                        border-style: dashed;\n                        border-width: 3px 0;\n                        border-top-color: #ddd;\n                        border-bottom-color: #fafafa;\n                    }\n                </style>\n\n                <div class=\"wkwcpos-invoice-wrapper\">\n\n                    <div class=\"invoice-header wkwcpos-invoice-editable\">\n                        <p class=\"wkwcpos-invoice-editable\">Tax Invoice/Bill of Supply</p>\n                        <img src=\"".concat(logo_invoice, "\" class=\"wkwcpos-invoice-editable\" />\n                        <h3 class=\"wkwcpos-invoice-editable\">").concat(outlet_name, "</h3>\n                    </div>\n\n                    <div class=\"invoice-details\">\n                        <div class=\"order-details\">\n                            <p class=\"wkwcpos-invoice-editable\">Order - ").concat(order_id, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Date : ").concat(order_date, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Customer : ").concat(customer_fname, " ").concat(customer_lname, "</p>\n                        </div>\n                        <div class=\"outlet-details\">\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_address, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_city, " ").concat(outlet_state, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Tel No: ").concat(pos_user_phone, "</p>\n                        </div>\n                    </div>\n\n                    <div class=\"product-details\">\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th class=\"wkwcpos-invoice-editable\">Product Name</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Unit Price</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Quantity</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Total Price</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_name, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_unit_price, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_quantity, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_total, "</td>\n                                </tr>\n                            </tbody>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">SubTotal</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(sub_total, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(tax_title, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_tax, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Discount</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_discount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(coupon_name, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(coupon_amount, "</td>\n                                </tr>\n                            </tbody>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Total</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_total, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Cash Payment</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(cashpay_amount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(other_payment_text, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(otherpay_amount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Change</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_change, "</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div class=\"invoice-footer\">\n                        <p class=\"wkwcpos-invoice-editable\">Cashier: ").concat(cashier_name, "</p>\n                        <div class=\"footer-details\">\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_name, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Tel No: ").concat(pos_user_phone, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Email: ").concat(pos_user_email, "</p>\n                            <hr class=\"wkwcpos-invoice-editable\" />\n                            <p class=\"wkwcpos-invoice-editable\">Have a nice day</p>\n                        </div>\n                    </div>\n                </div>");
      invoiceData = eval('`' + invoiceData + '`');
      document.querySelector('.wkwcpos-invoice-wrapper-container').innerHTML = invoiceData;

      _this.props.setElement('');

      document.querySelector('.wkwcpos-invoice-wrapper').addEventListener('click', function (e) {
        if (e.target.classList.contains('wkwcpos-invoice-editable')) {
          if (e.target.classList.contains('wkwcpos-invoice-edit')) {
            e.target.classList.remove('wkwcpos-invoice-edit');

            _this.props.setElement('');
          } else {
            document.querySelectorAll('.wkwcpos-invoice-editable').forEach(function (editableElement) {
              if (editableElement.classList.contains('wkwcpos-invoice-edit')) {
                editableElement.classList.remove('wkwcpos-invoice-edit');
              }
            });
            e.target.classList.add('wkwcpos-invoice-edit');

            _this.props.setElement(e.target);
          }
        }
      });
    };

    _this.handleAddElement = function (e) {
      var element = _this.props.element;
      var nodeName = e.target.closest('li').getAttribute('data-element');
      var newElement = document.createElement(nodeName);
      newElement.classList.add('wkwcpos-invoice-editable');

      if (nodeName == 'IMG') {
        newElement.src = nodeName;
      } else if (nodeName != 'HR') {
        newElement.innerHTML = nodeName;
      }

      element.insertAdjacentElement('afterend', newElement);

      _this.setState({
        addElement: !_this.state.addElement
      }, function () {
        document.querySelectorAll('.wkwcpos-invoice-editable').forEach(function (editableElement) {
          if (editableElement.classList.contains('wkwcpos-invoice-edit')) {
            editableElement.classList.remove('wkwcpos-invoice-edit');
          }
        });
        newElement.classList.add('wkwcpos-invoice-edit');

        _this.props.setElement(newElement);
      });
    };

    _this.state = {
      addElement: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Buttons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wkwcpos-button-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "add-element",
        onClick: this.handleClick
      }, "+"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "reset-invoice button button-primary",
        onClick: this.resetDefaultInvoice
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Reset Default', 'wc_pos')), this.state.addElement ? this.props.editElement && this.props.element ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wkwcpos-add-element-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Element', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H1",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H1"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 1', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H2",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H2"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 2', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H3",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H3"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 3', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H4",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H4"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 4', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H5",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H5"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 5', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "H6",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "H6"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Heading 6', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "IMG",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "IMG"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Image', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "P",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "P"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Paragraph', 'wc_pos'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        "data-element": "HR",
        onClick: function onClick(e) {
          return _this2.handleAddElement(e);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wkwcpos-element-icon"
      }, "HR"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Horizontal Ruler', 'wc_pos'))))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wkwcpos-add-element-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Select element first in the invoice to add new element next to it.', 'wc_pos'))) : '');
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./src/invoice/components/buttons/buttons.less":
/*!*****************************************************!*\
  !*** ./src/invoice/components/buttons/buttons.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/invoice/components/editElement/editElement.jsx":
/*!************************************************************!*\
  !*** ./src/invoice/components/editElement/editElement.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editElement_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editElement.less */ "./src/invoice/components/editElement/editElement.less");
/* harmony import */ var _editElement_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editElement_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var EditElement = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EditElement, _Component);

  var _super = _createSuper(EditElement);

  function EditElement(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditElement);

    _this = _super.call(this, props);

    _this.handleRemoveElement = function (element) {
      element.remove();

      _this.props.setElement();
    };

    _this.handleChange = function (element, e, cssStyle) {
      var withoutPixelProperties = ['fontWeight', 'color', 'textAlign', 'borderStyle', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderBottomColor'];

      if (cssStyle == 'innerHTML') {
        element.innerHTML = e.target.value;
      } else if (cssStyle == 'src') {
        element.src = e.target.value;
      } else {
        if (withoutPixelProperties.includes(cssStyle)) {
          element.style[cssStyle] = e.target.value;
        } else {
          element.style[cssStyle] = e.target.value + 'px';
        }
      }

      _this.setState({
        element: element,
        elementStyle: element.style
      });
    };

    _this.validatePixels = function (value) {
      return value.replace('px', '');
    };

    _this.componentToHex = function (c) {
      var hex = Number(c).toString(16);
      return hex.length < 2 ? "0" + hex : hex;
    };

    _this.rgbToHex = function (rgb) {
      rgb = rgb.replace('rgb(', '');
      rgb = rgb.replace(')', '');
      rgb = rgb.split(', ');
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      return "#" + _this.componentToHex(r) + _this.componentToHex(g) + _this.componentToHex(b);
    };

    _this.state = {
      element: _this.props.element,
      elementStyle: _this.props.element.style
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditElement, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.element != this.props.element) {
        this.setState({
          element: this.props.element
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.element) {
        return '';
      }

      var element = this.state.element;
      var label = element.innerHTML;
      var elementStyle = window.getComputedStyle(element);
      var nodeName = element.nodeName;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wkwcpos-edit-element-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, nodeName + ' ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Element Properties', 'wc_pos')), nodeName == 'IMG' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Link', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "text",
        value: element.src,
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'src');
        }
      })) : nodeName == 'HR' ? '' : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Label', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "text",
        value: label,
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'innerHTML');
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Font Size (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: this.validatePixels(elementStyle.fontSize),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'fontSize');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Font Weight', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        step: "100",
        min: "100",
        max: "900",
        value: this.validatePixels(elementStyle.fontWeight),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'fontWeight');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Color', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "color",
        value: this.rgbToHex(elementStyle.color),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'color');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Line Height (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        step: "0.1",
        min: "0",
        value: this.validatePixels(elementStyle.lineHeight),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'lineHeight');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Width (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        step: "1",
        value: parseInt(this.validatePixels(this.state.elementStyle.width ? this.state.elementStyle.width : elementStyle.width)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'width');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Height (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: parseInt(this.validatePixels(this.state.elementStyle.height ? this.state.elementStyle.height : elementStyle.height)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'height');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Padding Left (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: this.validatePixels(elementStyle.paddingLeft),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'paddingLeft');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Padding Right (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: this.validatePixels(elementStyle.paddingRight),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'paddingRight');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Padding Top (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: this.validatePixels(elementStyle.paddingTop),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'paddingTop');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Padding Bottom (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: this.validatePixels(elementStyle.paddingBottom),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'paddingBottom');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin Left (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        value: this.validatePixels(elementStyle.marginLeft),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'marginLeft');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin Right (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        value: this.validatePixels(elementStyle.marginRight),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'marginRight');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin Top (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        value: this.validatePixels(elementStyle.marginTop),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'marginTop');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin Bottom (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        value: this.validatePixels(elementStyle.marginBottom),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'marginBottom');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Text Align', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("select", {
        value: this.validatePixels(elementStyle.textAlign),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'textAlign');
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "left"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Left', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "right"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Right', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "center"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Center', 'wc_pos'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Style (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("select", {
        value: this.validatePixels(elementStyle.borderStyle),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderStyle');
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "none"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "solid"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Solid', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "dashed"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Dashed', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "dotted"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Dotted', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "double"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Double', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "groove"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Groove', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("option", {
        value: "ridge"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Ridge', 'wc_pos')))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Left Color', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "color",
        value: this.rgbToHex(elementStyle.borderLeftColor),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderLeftColor');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Right Color', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "color",
        value: this.rgbToHex(elementStyle.borderRightColor),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderRightColor');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Top Color', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "color",
        value: this.rgbToHex(elementStyle.borderTopColor),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderTopColor');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Bottom Color', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "color",
        value: this.rgbToHex(elementStyle.borderBottomColor),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderBottomColor');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Left Width (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: parseInt(this.validatePixels(this.state.elementStyle.borderLeftWidth ? this.state.elementStyle.borderLeftWidth : elementStyle.borderLeftWidth)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderLeftWidth');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Right Width (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: parseInt(this.validatePixels(this.state.elementStyle.borderRightWidth ? this.state.elementStyle.borderRightWidth : elementStyle.borderRightWidth)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderRightWidth');
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Top Width (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: parseInt(this.validatePixels(this.state.elementStyle.borderTopWidth ? this.state.elementStyle.borderTopWidth : elementStyle.borderTopWidth)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderTopWidth');
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Bottom Width (px)', 'wc_pos'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "number",
        min: "0",
        value: parseInt(this.validatePixels(this.state.elementStyle.borderBottomWidth ? this.state.elementStyle.borderBottomWidth : elementStyle.borderBottomWidth)),
        onChange: function onChange(e) {
          return _this2.handleChange(element, e, 'borderBottomWidth');
        }
      })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("input", {
        type: "button",
        className: "button button-secondary",
        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Remove', 'wc_pos'),
        onClick: function onClick(e) {
          return _this2.handleRemoveElement(element);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wkwcpos-predefined-element-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Pre-defined Variables', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_name}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet Name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_address}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet Address', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_city}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet City', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_state}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet State', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_country}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet Country', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${outlet_postcode}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Outlet Postcode', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${customer_fname}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Customer First Name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${customer_lname}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Customer Last Name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${cashier_name}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Cashier/POS user name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pos_user_phone}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('POS User\'s phone number', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pos_user_email}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('POS User\'s email', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_id}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order ID', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_date}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Date', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${tax_title}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Tax Title', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_tax}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Tax Amount', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${coupon_name}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Coupon Name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${coupon_amount}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Coupon Amount', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_discount}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Discount', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${sub_total}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Subtotal', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_total}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Total', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${cashpay_amount}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Cashpay Amount', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${otherpay_amount}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Other Pay Amount', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${other_payment_text}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Other Payment title', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${order_change}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Change', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pro_name}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Product Name', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pro_quantity}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Product Quantity', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pro_unit_price}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Product Unit Price', 'wc_pos')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", null, '${pro_total}', " - "), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Product Total Price', 'wc_pos')), Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_9__["applyFilters"])('wkwcpos_add_new_invoice_variables', ''))));
    }
  }]);

  return EditElement;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditElement);

/***/ }),

/***/ "./src/invoice/components/editElement/editElement.less":
/*!*************************************************************!*\
  !*** ./src/invoice/components/editElement/editElement.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/invoice/components/invoice/invoice.jsx":
/*!****************************************************!*\
  !*** ./src/invoice/components/invoice/invoice.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _invoice_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.less */ "./src/invoice/components/invoice/invoice.less");
/* harmony import */ var _invoice_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_invoice_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





var Invoice = function Invoice() {
  function getInvoice() {
    var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var logo_invoice = '${logo_invoice}';
    var outlet_name = '${outlet_name}';
    var order_id = '${order_id}';
    var order_date = '${order_date}';
    var customer_fname = '${customer_fname}';
    var customer_lname = '${customer_lname}';
    var outlet_address = '${outlet_address}';
    var outlet_city = '${outlet_city}';
    var outlet_state = '${outlet_state}';
    var outlet_country = '${outlet_country}';
    var outlet_postcode = '${outlet_postcode}';
    var pos_user_phone = '${pos_user_phone}';
    var pos_user_email = '${pos_user_email}';
    var pro_name = '${pro_name}';
    var pro_quantity = '${pro_quantity}';
    var pro_unit_price = '${pro_unit_price}';
    var pro_total = '${pro_total}';
    var sub_total = '${sub_total}';
    var tax_title = '${tax_title}';
    var order_tax = '${order_tax}';
    var coupon_name = '${coupon_name}';
    var coupon_amount = '${coupon_amount}';
    var order_discount = '${order_discount}';
    var order_total = '${order_total}';
    var cashpay_amount = '${cashpay_amount}';
    var other_payment_text = '${other_payment_text}';
    var otherpay_amount = '${otherpay_amount}';
    var order_change = '${order_change}';
    var cashier_name = '${cashier_name}';
    logo_invoice = wkwcposInvoiceObj.invoice_data.logo_invoice;

    if (wkwcposInvoiceObj.invoice_data.outlet) {
      var outlet = wkwcposInvoiceObj.invoice_data.outlet;
      outlet_name = outlet.outlet_name;
      outlet_address = outlet.outlet_address;
      outlet_city = outlet.outlet_city;
      outlet_state = outlet.outlet_state;
      outlet_country = outlet.outlet_country;
      outlet_postcode = outlet.outlet_postcode;
    }

    if (wkwcposInvoiceObj.invoice_data.pos_user_phone) {
      pos_user_phone = wkwcposInvoiceObj.invoice_data.pos_user_phone;
    }

    if (wkwcposInvoiceObj.invoice_data.pos_order) {
      order = wkwcposInvoiceObj.invoice_data.pos_order;
      order_id = '#' + order.order_id;
      order_date = order.order_date;
      customer_fname = order.billing.fname;
      customer_lname = order.billing.lname;
      sub_total = order.cart_subtotal;
      order_discount = order.discount;
      order_total = order.order_html;
      cashpay_amount = order.cashPay > 0 ? order.cashPay_html : 'N/A';
      otherpay_amount = order.cardPay > 0 ? order.cardPay_html : 'N/A';
      other_payment_text = order.cardPay > 0 ? order.payment_title : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Other Payments', 'wc_pos');
      order_change = order.balance;
      pro_name = '';
      pro_unit_price = '';
      pro_quantity = '';
      pro_total = '';
      order.products.forEach(function (pro, i) {
        pro_name += "<p>".concat(pro.product_name, "</p>");
        pro_unit_price += "<p>".concat(pro.product_unit_price, "</p>");
        pro_quantity += "<p>".concat(pro.qty, "</p>");
        pro_total += "<p>".concat(pro.product_total_price, "</p>");

        if (pro.product_meta_data) {
          pro_name += "<p>".concat(Object.keys(pro.product_meta_data), "</p>");
          pro_unit_price += '<br />';
          pro_quantity += '<br />';
          pro_total += '<br />';
        }

        if (pro.product_meta_data) {
          pro_name += "<p>".concat(Object.values(pro.product_meta_data), "</p>");
          pro_unit_price += '<br />';
          pro_quantity += '<br />';
          pro_total += '<br />';
        }
      });
      var order_tax_lines = order.tax_lines;
      tax_title = '';
      order_tax = '';

      if (order_tax_lines.length > 0) {
        order_tax_lines.forEach(function (tax) {
          tax_title += "<p>".concat(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tax', 'wc_pos'), "(").concat(tax.title, ")</p>");
          order_tax += "<p>".concat(tax.total, "</p>");
        });
      }

      var coupons = order.coupons;
      coupon_name = '';
      coupon_amount = '';
      Object.keys(coupons).forEach(function (i) {
        coupon_name += "<p>".concat(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Coupon', 'wc_pos'), "(").concat(i, ")</p>");
        coupon_amount += "<p>".concat(coupons[i], "</p>");
      });
    }

    if (wkwcposInvoiceObj.invoice_data.pos_user) {
      pos_user_email = wkwcposInvoiceObj.invoice_data.pos_user.data.user_email;
      cashier_name = wkwcposInvoiceObj.invoice_data.pos_user.data.display_name;
    }

    var invoiceData = '';

    if (wkwcposInvoiceObj.invoice_html) {
      invoiceData = wkwcposInvoiceObj.invoice_html;
    } else {
      invoiceData = "\n\n                <style>\n                    .wkwcpos-invoice-wrapper {\n                        padding: 10px;\n                        background-color: #fff;\n                        border-radius: 2px;\n                        grid-area: second;\n                    }\n                    .wkwcpos-invoice-wrapper * {\n                        padding: 0;\n                        margin: 0;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-header, .wkwcpos-invoice-wrapper .invoice-footer .footer-details {\n                        text-align: center;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-header img {\n                        width: 50px;\n                        margin: 10px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details {\n                        width: 100%;\n                        display: inline-block;\n                    }\n                    .wkwcpos-invoice-wrapper .order-details, .wkwcpos-invoice-wrapper .outlet-details {\n                        width: 50%;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details .order-details {\n                        float: left;\n                    }\n                    .wkwcpos-invoice-wrapper .invoice-details .outlet-details {\n                        float: right;\n                        text-align: right;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details {\n                        margin: 15px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table {\n                        border-collapse: collapse;\n                        width: 100%;\n                        text-align: center;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td {\n                        padding: 3px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td p {\n                        padding: 3px 0;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table thead, .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(1) {\n                        border-style: dashed;\n                        border-width: 3px 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(3) {\n                        border-style: dashed;\n                        border-width: 0 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(1), .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(2) {\n                        border-style: dashed;\n                        border-width: 0 0 3px;\n                        border-color: #ddd;\n                    }\n                    .wkwcpos-invoice-wrapper hr {\n                        width: 35%;\n                        margin: 10px auto 7px;\n                        border-style: dashed;\n                        border-width: 3px 0;\n                        border-top-color: #ddd;\n                        border-bottom-color: #fafafa;\n                    }\n                </style>\n\n                <div class=\"wkwcpos-invoice-wrapper\">\n\n                    <div class=\"invoice-header wkwcpos-invoice-editable\">\n                        <p class=\"wkwcpos-invoice-editable\">Tax Invoice/Bill of Supply</p>\n                        <img src=\"".concat(logo_invoice, "\" class=\"wkwcpos-invoice-editable\" />\n                        <h3 class=\"wkwcpos-invoice-editable\">").concat(outlet_name, "</h3>\n                    </div>\n\n                    <div class=\"invoice-details\">\n                        <div class=\"order-details\">\n                            <p class=\"wkwcpos-invoice-editable\">Order - ").concat(order_id, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Date : ").concat(order_date, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Customer : ").concat(customer_fname, " ").concat(customer_lname, "</p>\n                        </div>\n                        <div class=\"outlet-details\">\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_address, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_city, " ").concat(outlet_state, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Tel No: ").concat(pos_user_phone, "</p>\n                        </div>\n                    </div>\n\n                    <div class=\"product-details\">\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th class=\"wkwcpos-invoice-editable\">Product Name</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Unit Price</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Quantity</th>\n                                    <th class=\"wkwcpos-invoice-editable\">Total Price</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_name, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_unit_price, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_quantity, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(pro_total, "</td>\n                                </tr>\n                            </tbody>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">SubTotal</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(sub_total, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(tax_title, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_tax, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Discount</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_discount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(coupon_name, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(coupon_amount, "</td>\n                                </tr>\n                            </tbody>\n                            <tbody>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Total</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_total, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Cash Payment</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(cashpay_amount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(other_payment_text, "</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(otherpay_amount, "</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\"></td>\n                                    <td class=\"wkwcpos-invoice-editable\">Change</td>\n                                    <td class=\"wkwcpos-invoice-editable\">").concat(order_change, "</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div class=\"invoice-footer\">\n                        <p class=\"wkwcpos-invoice-editable\">Cashier: ").concat(cashier_name, "</p>\n                        <div class=\"footer-details\">\n                            <p class=\"wkwcpos-invoice-editable\">").concat(outlet_name, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Tel No: ").concat(pos_user_phone, "</p>\n                            <p class=\"wkwcpos-invoice-editable\">Email: ").concat(pos_user_email, "</p>\n                            <hr class=\"wkwcpos-invoice-editable\" />\n                            <p class=\"wkwcpos-invoice-editable\">Have a nice day</p>\n                        </div>\n                    </div>\n                </div>");
    }

    invoiceData = eval('`' + invoiceData + '`');
    return invoiceData;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wkwcpos-invoice-wrapper-container",
    dangerouslySetInnerHTML: {
      __html: getInvoice()
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Invoice);

/***/ }),

/***/ "./src/invoice/components/invoice/invoice.less":
/*!*****************************************************!*\
  !*** ./src/invoice/components/invoice/invoice.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/invoice/index.js":
/*!******************************!*\
  !*** ./src/invoice/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/invoice/App.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


document.addEventListener("DOMContentLoaded", function () {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('wkwcpos-invoice-editor-app'));
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL3NyYy9pbnZvaWNlL0FwcC5qcyIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vLi9zcmMvaW52b2ljZS9BcHAubGVzcz9jYzdjIiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL3NyYy9pbnZvaWNlL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLmpzeCIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vLi9zcmMvaW52b2ljZS9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5sZXNzPzU3ZTciLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vc3JjL2ludm9pY2UvY29tcG9uZW50cy9lZGl0RWxlbWVudC9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vc3JjL2ludm9pY2UvY29tcG9uZW50cy9lZGl0RWxlbWVudC9lZGl0RWxlbWVudC5sZXNzP2Q5YzIiLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdLy4vc3JjL2ludm9pY2UvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuanN4Iiwid2VicGFjazovL3djLlttb2R1bGVuYW1lXS8uL3NyYy9pbnZvaWNlL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmxlc3M/YWY1OSIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vLi9zcmMvaW52b2ljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vZXh0ZXJuYWwge1widGhpc1wiOltcIndwXCIsXCJlbGVtZW50XCJdfSIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vZXh0ZXJuYWwge1widGhpc1wiOltcIndwXCIsXCJob29rc1wiXX0iLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdL2V4dGVybmFsIHtcInRoaXNcIjpbXCJ3cFwiLFwiaTE4blwiXX0iLCJ3ZWJwYWNrOi8vd2MuW21vZHVsZW5hbWVdL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly93Yy5bbW9kdWxlbmFtZV0vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInBvc1VzZXIiLCJnZXQiLCJwb3NPcmRlciIsImVkaXRhYmxlIiwic3RhdGUiLCJlZGl0RWxlbWVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0RWxlbWVudEluU3RhdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVkaXRhYmxlRWxlbWVudCIsImFkZCIsIl9fIiwiaGFuZGxlU2F2ZSIsIkNvbXBvbmVudCIsInNldFN0YXRlIiwiaW52b2ljZUh0bWwiLCJpbm5lckhUTUwiLCJpbnZvaWNlSWQiLCJmZXRjaCIsIndrd2Nwb3NJbnZvaWNlT2JqIiwiYXBpX2FkbWluX2FqYXgiLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImJvZHkiLCJwb3NfYXBpX25vbmNlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwic3VjY2VzcyIsIlVSTCIsImhyZWYiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJCdXR0b25zIiwiaGFuZGxlQ2xpY2siLCJhZGRFbGVtZW50IiwicmVzZXREZWZhdWx0SW52b2ljZSIsImxvZ29faW52b2ljZSIsIm91dGxldF9uYW1lIiwib3JkZXJfaWQiLCJvcmRlcl9kYXRlIiwiY3VzdG9tZXJfZm5hbWUiLCJjdXN0b21lcl9sbmFtZSIsIm91dGxldF9hZGRyZXNzIiwib3V0bGV0X2NpdHkiLCJvdXRsZXRfc3RhdGUiLCJvdXRsZXRfY291bnRyeSIsIm91dGxldF9wb3N0Y29kZSIsInBvc191c2VyX3Bob25lIiwicG9zX3VzZXJfZW1haWwiLCJwcm9fbmFtZSIsInByb19xdWFudGl0eSIsInByb191bml0X3ByaWNlIiwicHJvX3RvdGFsIiwic3ViX3RvdGFsIiwidGF4X3RpdGxlIiwib3JkZXJfdGF4IiwiY291cG9uX25hbWUiLCJjb3Vwb25fYW1vdW50Iiwib3JkZXJfZGlzY291bnQiLCJvcmRlcl90b3RhbCIsImNhc2hwYXlfYW1vdW50Iiwib3RoZXJfcGF5bWVudF90ZXh0Iiwib3RoZXJwYXlfYW1vdW50Iiwib3JkZXJfY2hhbmdlIiwiY2FzaGllcl9uYW1lIiwiaW52b2ljZV9kYXRhIiwiaW52b2ljZURhdGEiLCJldmFsIiwic2V0RWxlbWVudCIsImhhbmRsZUFkZEVsZW1lbnQiLCJub2RlTmFtZSIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImluc2VydEFkamFjZW50RWxlbWVudCIsIkVkaXRFbGVtZW50IiwiaGFuZGxlUmVtb3ZlRWxlbWVudCIsImhhbmRsZUNoYW5nZSIsImNzc1N0eWxlIiwid2l0aG91dFBpeGVsUHJvcGVydGllcyIsInZhbHVlIiwiaW5jbHVkZXMiLCJzdHlsZSIsImVsZW1lbnRTdHlsZSIsInZhbGlkYXRlUGl4ZWxzIiwicmVwbGFjZSIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsIk51bWJlciIsInRvU3RyaW5nIiwibGVuZ3RoIiwicmdiVG9IZXgiLCJyZ2IiLCJzcGxpdCIsInIiLCJnIiwiYiIsInByZXZQcm9wcyIsImxhYmVsIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwibGluZUhlaWdodCIsInBhcnNlSW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYXBwbHlGaWx0ZXJzIiwiSW52b2ljZSIsImdldEludm9pY2UiLCJvcmRlciIsIm91dGxldCIsInBvc19vcmRlciIsImJpbGxpbmciLCJmbmFtZSIsImxuYW1lIiwiY2FydF9zdWJ0b3RhbCIsImRpc2NvdW50Iiwib3JkZXJfaHRtbCIsImNhc2hQYXkiLCJjYXNoUGF5X2h0bWwiLCJjYXJkUGF5IiwiY2FyZFBheV9odG1sIiwicGF5bWVudF90aXRsZSIsImJhbGFuY2UiLCJwcm9kdWN0cyIsInBybyIsImkiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3VuaXRfcHJpY2UiLCJxdHkiLCJwcm9kdWN0X3RvdGFsX3ByaWNlIiwicHJvZHVjdF9tZXRhX2RhdGEiLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwib3JkZXJfdGF4X2xpbmVzIiwidGF4X2xpbmVzIiwidGF4IiwidGl0bGUiLCJ0b3RhbCIsImNvdXBvbnMiLCJwb3NfdXNlciIsImRhdGEiLCJ1c2VyX2VtYWlsIiwiZGlzcGxheV9uYW1lIiwiaW52b2ljZV9odG1sIiwiX19odG1sIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7OztBQ2pCQSxjQUFjLG1CQUFPLENBQUMsMEVBQW1COztBQUV6Qyw0QkFBNEIsbUJBQU8sQ0FBQywrRkFBeUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGU7O0FBR2YsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQXBDO0FBQ0EsUUFBTUMsU0FBUyxHQUFLLElBQUlDLGVBQUosQ0FBb0JMLFdBQXBCLENBQXBCO0FBQ0EsUUFBTU0sT0FBTyxHQUFPRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFNSixTQUFTLENBQUNHLEdBQVYsQ0FBYyxXQUFkLENBQXBCO0FBRUEsUUFBTUUsUUFBUSxHQUFHLENBQUVILE9BQUYsSUFBYSxDQUFFRSxRQUFoQztBQUVBLFVBQUtFLEtBQUwsR0FBYTtBQUNUQyxpQkFBVyxFQUFFLENBREo7QUFFVEMsYUFBTyxFQUFFLEVBRkE7QUFHVEgsY0FBUSxFQUFHQTtBQUhGLEtBQWI7QUFWZTtBQWVsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDaEIsVUFBSyxLQUFLQyxLQUFMLENBQVdELFFBQWhCLEVBQTJCO0FBQ3ZCSSxnQkFBUSxDQUFDQyxhQUFULENBQXdCLDBCQUF4QixFQUFxREMsZ0JBQXJELENBQXVFLE9BQXZFLEVBQWdGLFVBQUFDLENBQUMsRUFBSTtBQUNqRixjQUFLQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNkIsMEJBQTdCLENBQUwsRUFBaUU7QUFDN0QsZ0JBQUtILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxTQUFULENBQW1CQyxRQUFuQixDQUE2QixzQkFBN0IsQ0FBTCxFQUE2RDtBQUN6REgsZUFBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTJCLHNCQUEzQjs7QUFDQSxvQkFBSSxDQUFDQyxpQkFBTCxDQUF1QixFQUF2QjtBQUNILGFBSEQsTUFHTztBQUNIUixzQkFBUSxDQUFDUyxnQkFBVCxDQUEyQiwyQkFBM0IsRUFBeURDLE9BQXpELENBQWtFLFVBQUFDLGVBQWUsRUFBSTtBQUNqRixvQkFBS0EsZUFBZSxDQUFDTixTQUFoQixDQUEwQkMsUUFBMUIsQ0FBb0Msc0JBQXBDLENBQUwsRUFBb0U7QUFDaEVLLGlDQUFlLENBQUNOLFNBQWhCLENBQTBCRSxNQUExQixDQUFrQyxzQkFBbEM7QUFDSDtBQUNKLGVBSkQ7QUFLQUosZUFBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJPLEdBQW5CLENBQXdCLHNCQUF4Qjs7QUFDQSxvQkFBSSxDQUFDSixpQkFBTCxDQUF1QkwsQ0FBQyxDQUFDQyxNQUF6QjtBQUNIO0FBQ0o7QUFDSixTQWZEO0FBZ0JIO0FBQ0o7Ozs2QkE2Q1E7QUFDTCxhQUNJLHlFQUFDLDRDQUFELENBQU8sUUFBUCxRQUNJO0FBQUssaUJBQVMsRUFBRSxLQUFLUCxLQUFMLENBQVdELFFBQVgsR0FBc0Isb0NBQXRCLEdBQTZEO0FBQTdFLFNBQ00sS0FBS0MsS0FBTCxDQUFXRCxRQUFYLEdBQ0UseUVBQUMsdUVBQUQ7QUFBUyxtQkFBVyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsV0FBakM7QUFBOEMsZUFBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsT0FBbEU7QUFBMkUsa0JBQVUsRUFBRSxLQUFLUztBQUE1RixRQURGLEdBRUEsRUFITixFQUlJLHlFQUFDLHVFQUFELE9BSkosRUFLSyxLQUFLWCxLQUFMLENBQVdDLFdBQVgsSUFBMEIsS0FBS0QsS0FBTCxDQUFXRSxPQUFyQyxHQUErQyx5RUFBQyxnRkFBRDtBQUFhLGVBQU8sRUFBRSxLQUFLRixLQUFMLENBQVdFLE9BQWpDO0FBQTBDLGtCQUFVLEVBQUUsS0FBS1M7QUFBM0QsUUFBL0MsR0FBa0ksRUFMdkksQ0FESixFQVFJLG9GQVJKLEVBU00sS0FBS1gsS0FBTCxDQUFXRCxRQUFYLEdBQ0Y7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsdUJBQTNCO0FBQW1ELGFBQUssRUFBRWlCLDJEQUFFLENBQUUsTUFBRixFQUFVLFFBQVYsQ0FBNUQ7QUFBa0YsZUFBTyxFQUFFLEtBQUtDO0FBQWhHLFFBREUsR0FFQSxFQVhOLENBREo7QUFlSDs7OztFQW5HYUMsK0M7Ozs7O09Bd0NkUCxpQixHQUFvQixZQUFrQjtBQUFBLFFBQWpCVCxPQUFpQix1RUFBUCxFQUFPOztBQUNsQyxRQUFLQSxPQUFMLEVBQWU7QUFDWCxZQUFJLENBQUNpQixRQUFMLENBQWM7QUFDVmxCLG1CQUFXLEVBQUUsQ0FESDtBQUVWQyxlQUFPLEVBQUdBO0FBRkEsT0FBZDtBQUlILEtBTEQsTUFLTztBQUNILFlBQUksQ0FBQ2lCLFFBQUwsQ0FBYztBQUNWbEIsbUJBQVcsRUFBRSxDQURIO0FBRVZDLGVBQU8sRUFBR0E7QUFGQSxPQUFkO0FBSUg7QUFDSixHOztPQUVEZSxVLEdBQWEsWUFBTTtBQUNmLFFBQU1HLFdBQVcsR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixvQ0FBeEIsRUFBK0RpQixTQUFuRjtBQUVBLFFBQU0vQixXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQkwsV0FBcEIsQ0FBbEI7QUFDQSxRQUFNZ0MsU0FBUyxHQUFHNUIsU0FBUyxDQUFDRyxHQUFWLENBQWMsSUFBZCxDQUFsQjtBQUVBMEIsU0FBSyxDQUFFQyxpQkFBaUIsQ0FBQ0MsY0FBcEIsRUFBb0M7QUFDckNDLFlBQU0sRUFBRSxNQUQ2QjtBQUVyQ0MsYUFBTyxFQUFFLElBQUlDLE9BQUosQ0FBYTtBQUNsQix3QkFBZ0IsbUNBREU7QUFFbEIsa0JBQVU7QUFGUSxPQUFiLENBRjRCO0FBTXJDQyxVQUFJLDhDQUF1Q0wsaUJBQWlCLENBQUNNLGFBQXpELGlCQUE2RVIsU0FBN0UsMkJBQXVHRixXQUF2RztBQU5pQyxLQUFwQyxDQUFMLENBUUNXLElBUkQsQ0FRTyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxFQUFULEdBQWNELFFBQVEsQ0FBQ0UsSUFBVCxFQUFkLEdBQWdDLEtBQXBDO0FBQUEsS0FSZixFQVNDSCxJQVRELENBU00sVUFBQUMsUUFBUSxFQUFJO0FBRWQsVUFBS0EsUUFBUSxDQUFDRyxPQUFkLEVBQXdCO0FBQ3BCLFlBQU1DLEdBQUcsR0FBRzdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjZDLElBQWhCLEdBQXVCLHFCQUFuQztBQUNBOUMsY0FBTSxDQUFDQyxRQUFQLENBQWdCNkMsSUFBaEIsR0FBdUJELEdBQXZCO0FBQ0g7QUFFSixLQWhCRCxFQWlCQ0UsS0FqQkQsQ0FpQk8sVUFBQ0MsR0FBRCxFQUFTO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsS0FuQkQ7QUFvQkgsRzs7O0FBcUJVbkQsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUM5R0EsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7SUFFTXNELE87Ozs7O0FBRUYsbUJBQVlyRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFRbkJzRCxXQVJtQixHQVFMLFlBQU07QUFDaEIsWUFBS3hCLFFBQUwsQ0FBYztBQUNWeUIsa0JBQVUsRUFBRSxDQUFDLE1BQUs1QyxLQUFMLENBQVc0QztBQURkLE9BQWQ7QUFHSCxLQVprQjs7QUFBQSxVQWNuQkMsbUJBZG1CLEdBY0csWUFBTTtBQUV4QixVQUFJQyxZQUFZLEdBQU0saUJBQXRCO0FBQ0EsVUFBSUMsV0FBVyxHQUFPLGdCQUF0QjtBQUNBLFVBQUlDLFFBQVEsR0FBVSxhQUF0QjtBQUNBLFVBQUlDLFVBQVUsR0FBUSxlQUF0QjtBQUNBLFVBQUlDLGNBQWMsR0FBSSxtQkFBdEI7QUFDQSxVQUFJQyxjQUFjLEdBQUksbUJBQXRCO0FBQ0EsVUFBSUMsY0FBYyxHQUFJLG1CQUF0QjtBQUNBLFVBQUlDLFdBQVcsR0FBTyxnQkFBdEI7QUFDQSxVQUFJQyxZQUFZLEdBQU0saUJBQXRCO0FBQ0EsVUFBSUMsY0FBYyxHQUFJLG1CQUF0QjtBQUNBLFVBQUlDLGVBQWUsR0FBRyxvQkFBdEI7QUFDQSxVQUFJQyxjQUFjLEdBQUksbUJBQXRCO0FBQ0EsVUFBSUMsY0FBYyxHQUFJLG1CQUF0QjtBQUVBLFVBQUlDLFFBQVEsR0FBZ0IsYUFBNUI7QUFDQSxVQUFJQyxZQUFZLEdBQVksaUJBQTVCO0FBQ0EsVUFBSUMsY0FBYyxHQUFVLG1CQUE1QjtBQUNBLFVBQUlDLFNBQVMsR0FBZSxjQUE1QjtBQUVBLFVBQUlDLFNBQVMsR0FBWSxjQUF6QjtBQUNBLFVBQUlDLFNBQVMsR0FBWSxjQUF6QjtBQUNBLFVBQUlDLFNBQVMsR0FBWSxjQUF6QjtBQUNBLFVBQUlDLFdBQVcsR0FBVSxnQkFBekI7QUFDQSxVQUFJQyxhQUFhLEdBQVEsa0JBQXpCO0FBQ0EsVUFBSUMsY0FBYyxHQUFPLG1CQUF6QjtBQUNBLFVBQUlDLFdBQVcsR0FBVSxnQkFBekI7QUFDQSxVQUFJQyxjQUFjLEdBQU8sbUJBQXpCO0FBQ0EsVUFBSUMsa0JBQWtCLEdBQUcsdUJBQXpCO0FBQ0EsVUFBSUMsZUFBZSxHQUFNLG9CQUF6QjtBQUNBLFVBQUlDLFlBQVksR0FBUyxpQkFBekI7QUFFQSxVQUFJQyxZQUFZLEdBQUcsaUJBQW5CO0FBRUE1QixrQkFBWSxHQUFHdEIsaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQjdCLFlBQTlDO0FBRUEsVUFBSThCLFdBQVcsMnVIQTZFYTlCLFlBN0ViLHNIQThFd0NDLFdBOUV4Qyx3T0FtRm1EQyxRQW5GbkQsNEZBb0ZrREMsVUFwRmxELGdHQXFGc0RDLGNBckZ0RCxjQXFGd0VDLGNBckZ4RSw2S0F3RjJDQyxjQXhGM0MscUZBeUYyQ0MsV0F6RjNDLGNBeUYwREMsWUF6RjFELDZGQTBGbURHLGNBMUZuRCxzMEJBMEdvREUsUUExR3BELCtGQTJHb0RFLGNBM0dwRCwrRkE0R29ERCxZQTVHcEQsK0ZBNkdvREUsU0E3R3BELHFmQXFIb0RDLFNBckhwRCxnVkEwSG9EQyxTQTFIcEQsK0ZBMkhvREMsU0EzSHBELDBhQWlJb0RHLGNBaklwRCxnVkFzSW9ERixXQXRJcEQsK0ZBdUlvREMsYUF2SXBELGtmQStJb0RFLFdBL0lwRCw4YUFxSm9EQyxjQXJKcEQsZ1ZBMEpvREMsa0JBMUpwRCwrRkEySm9EQyxlQTNKcEQsd2FBaUtvREMsWUFqS3BELDRSQXdLZ0RDLFlBeEtoRCw2SUEwSzJDM0IsV0ExSzNDLDZGQTJLbURVLGNBM0tuRCw0RkE0S2tEQyxjQTVLbEQsMlBBQWY7QUFtTEFrQixpQkFBVyxHQUFHQyxJQUFJLENBQUMsTUFBSUQsV0FBSixHQUFnQixHQUFqQixDQUFsQjtBQUVBekUsY0FBUSxDQUFDQyxhQUFULENBQXdCLG9DQUF4QixFQUErRGlCLFNBQS9ELEdBQTJFdUQsV0FBM0U7O0FBRUEsWUFBS3ZGLEtBQUwsQ0FBV3lGLFVBQVgsQ0FBc0IsRUFBdEI7O0FBRUEzRSxjQUFRLENBQUNDLGFBQVQsQ0FBd0IsMEJBQXhCLEVBQXFEQyxnQkFBckQsQ0FBdUUsT0FBdkUsRUFBZ0YsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pGLFlBQUtBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxTQUFULENBQW1CQyxRQUFuQixDQUE2QiwwQkFBN0IsQ0FBTCxFQUFpRTtBQUM3RCxjQUFLSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNkIsc0JBQTdCLENBQUwsRUFBNkQ7QUFDekRILGFBQUMsQ0FBQ0MsTUFBRixDQUFTQyxTQUFULENBQW1CRSxNQUFuQixDQUEyQixzQkFBM0I7O0FBQ0Esa0JBQUtyQixLQUFMLENBQVd5RixVQUFYLENBQXNCLEVBQXRCO0FBQ0gsV0FIRCxNQUdPO0FBQ0gzRSxvQkFBUSxDQUFDUyxnQkFBVCxDQUEyQiwyQkFBM0IsRUFBeURDLE9BQXpELENBQWtFLFVBQUFDLGVBQWUsRUFBSTtBQUNqRixrQkFBS0EsZUFBZSxDQUFDTixTQUFoQixDQUEwQkMsUUFBMUIsQ0FBb0Msc0JBQXBDLENBQUwsRUFBb0U7QUFDaEVLLCtCQUFlLENBQUNOLFNBQWhCLENBQTBCRSxNQUExQixDQUFrQyxzQkFBbEM7QUFDSDtBQUNKLGFBSkQ7QUFLQUosYUFBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJPLEdBQW5CLENBQXdCLHNCQUF4Qjs7QUFDQSxrQkFBSzFCLEtBQUwsQ0FBV3lGLFVBQVgsQ0FBc0J4RSxDQUFDLENBQUNDLE1BQXhCO0FBQ0g7QUFDSjtBQUNKLE9BZkQ7QUFpQkgsS0E3UGtCOztBQUFBLFVBK1BuQndFLGdCQS9QbUIsR0ErUEEsVUFBQXpFLENBQUMsRUFBSTtBQUNwQixVQUFNSixPQUFPLEdBQUcsTUFBS2IsS0FBTCxDQUFXYSxPQUEzQjtBQUNBLFVBQU04RSxRQUFRLEdBQUcxRSxDQUFDLENBQUNDLE1BQUYsQ0FBUzBFLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUJDLFlBQXZCLENBQXFDLGNBQXJDLENBQWpCO0FBRUEsVUFBTUMsVUFBVSxHQUFHaEYsUUFBUSxDQUFDaUYsYUFBVCxDQUF3QkosUUFBeEIsQ0FBbkI7QUFFQUcsZ0JBQVUsQ0FBQzNFLFNBQVgsQ0FBcUJPLEdBQXJCLENBQTBCLDBCQUExQjs7QUFFQSxVQUFLaUUsUUFBUSxJQUFJLEtBQWpCLEVBQXlCO0FBQ3JCRyxrQkFBVSxDQUFDRSxHQUFYLEdBQWlCTCxRQUFqQjtBQUNILE9BRkQsTUFFTyxJQUFLQSxRQUFRLElBQUksSUFBakIsRUFBd0I7QUFDM0JHLGtCQUFVLENBQUM5RCxTQUFYLEdBQXVCMkQsUUFBdkI7QUFDSDs7QUFFRDlFLGFBQU8sQ0FBQ29GLHFCQUFSLENBQStCLFVBQS9CLEVBQTJDSCxVQUEzQzs7QUFDQSxZQUFLaEUsUUFBTCxDQUFjO0FBQ1Z5QixrQkFBVSxFQUFFLENBQUUsTUFBSzVDLEtBQUwsQ0FBVzRDO0FBRGYsT0FBZCxFQUVHLFlBQU07QUFDTHpDLGdCQUFRLENBQUNTLGdCQUFULENBQTJCLDJCQUEzQixFQUF5REMsT0FBekQsQ0FBa0UsVUFBQUMsZUFBZSxFQUFJO0FBQ2pGLGNBQUtBLGVBQWUsQ0FBQ04sU0FBaEIsQ0FBMEJDLFFBQTFCLENBQW9DLHNCQUFwQyxDQUFMLEVBQW9FO0FBQ2hFSywyQkFBZSxDQUFDTixTQUFoQixDQUEwQkUsTUFBMUIsQ0FBa0Msc0JBQWxDO0FBQ0g7QUFDSixTQUpEO0FBS0F5RSxrQkFBVSxDQUFDM0UsU0FBWCxDQUFxQk8sR0FBckIsQ0FBMEIsc0JBQTFCOztBQUNBLGNBQUsxQixLQUFMLENBQVd5RixVQUFYLENBQXVCSyxVQUF2QjtBQUNILE9BVkQ7QUFXSCxLQXpSa0I7O0FBR2YsVUFBS25GLEtBQUwsR0FBYTtBQUNUNEMsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFIZTtBQU1sQjs7Ozs2QkFxUlE7QUFBQTs7QUFDTCxhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQThCLGVBQU8sRUFBRSxLQUFLRDtBQUE1QyxhQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLHFDQUFsQjtBQUF3RCxlQUFPLEVBQUUsS0FBS0U7QUFBdEUsU0FBNkY3QiwwREFBRSxDQUFFLGVBQUYsRUFBbUIsUUFBbkIsQ0FBL0YsQ0FGSixFQUlNLEtBQUtoQixLQUFMLENBQVc0QyxVQUFYLEdBQ0csS0FBS3ZELEtBQUwsQ0FBV1ksV0FBWCxJQUEwQixLQUFLWixLQUFMLENBQVdhLE9BQXJDLEdBQ0c7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxxRkFBS2MsMERBQUUsQ0FBRSxTQUFGLEVBQWEsUUFBYixDQUFQLENBREosRUFFSSxvRkFGSixFQUdJLHFGQUNJO0FBQUksd0JBQWEsSUFBakI7QUFBc0IsZUFBTyxFQUFHLGlCQUFBVixDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDeUUsZ0JBQUwsQ0FBc0J6RSxDQUF0QixDQUFKO0FBQUE7QUFBakMsU0FBZ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGNBQWhFLEVBQWdILG9GQUFoSCxFQUFzSCx1RkFBT1UsMERBQUUsQ0FBRSxXQUFGLEVBQWUsUUFBZixDQUFULENBQXRILENBREosRUFFSTtBQUFJLHdCQUFhLElBQWpCO0FBQXNCLGVBQU8sRUFBRyxpQkFBQVYsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ3lFLGdCQUFMLENBQXNCekUsQ0FBdEIsQ0FBSjtBQUFBO0FBQWpDLFNBQWdFO0FBQU0saUJBQVMsRUFBQztBQUFoQixjQUFoRSxFQUFnSCxvRkFBaEgsRUFBc0gsdUZBQU9VLDBEQUFFLENBQUUsV0FBRixFQUFlLFFBQWYsQ0FBVCxDQUF0SCxDQUZKLEVBR0k7QUFBSSx3QkFBYSxJQUFqQjtBQUFzQixlQUFPLEVBQUcsaUJBQUFWLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUN5RSxnQkFBTCxDQUFzQnpFLENBQXRCLENBQUo7QUFBQTtBQUFqQyxTQUFnRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsY0FBaEUsRUFBZ0gsb0ZBQWhILEVBQXNILHVGQUFPVSwwREFBRSxDQUFFLFdBQUYsRUFBZSxRQUFmLENBQVQsQ0FBdEgsQ0FISixFQUlJO0FBQUksd0JBQWEsSUFBakI7QUFBc0IsZUFBTyxFQUFHLGlCQUFBVixDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDeUUsZ0JBQUwsQ0FBc0J6RSxDQUF0QixDQUFKO0FBQUE7QUFBakMsU0FBZ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGNBQWhFLEVBQWdILG9GQUFoSCxFQUFzSCx1RkFBT1UsMERBQUUsQ0FBRSxXQUFGLEVBQWUsUUFBZixDQUFULENBQXRILENBSkosRUFLSTtBQUFJLHdCQUFhLElBQWpCO0FBQXNCLGVBQU8sRUFBRyxpQkFBQVYsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ3lFLGdCQUFMLENBQXNCekUsQ0FBdEIsQ0FBSjtBQUFBO0FBQWpDLFNBQWdFO0FBQU0saUJBQVMsRUFBQztBQUFoQixjQUFoRSxFQUFnSCxvRkFBaEgsRUFBc0gsdUZBQU9VLDBEQUFFLENBQUUsV0FBRixFQUFlLFFBQWYsQ0FBVCxDQUF0SCxDQUxKLEVBTUk7QUFBSSx3QkFBYSxJQUFqQjtBQUFzQixlQUFPLEVBQUcsaUJBQUFWLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUN5RSxnQkFBTCxDQUFzQnpFLENBQXRCLENBQUo7QUFBQTtBQUFqQyxTQUFnRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsY0FBaEUsRUFBZ0gsb0ZBQWhILEVBQXNILHVGQUFPVSwwREFBRSxDQUFFLFdBQUYsRUFBZSxRQUFmLENBQVQsQ0FBdEgsQ0FOSixFQU9JO0FBQUksd0JBQWEsS0FBakI7QUFBdUIsZUFBTyxFQUFHLGlCQUFBVixDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDeUUsZ0JBQUwsQ0FBc0J6RSxDQUF0QixDQUFKO0FBQUE7QUFBbEMsU0FBaUU7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLGVBQWpFLEVBQWtILG9GQUFsSCxFQUF3SCx1RkFBT1UsMERBQUUsQ0FBRSxPQUFGLEVBQVcsUUFBWCxDQUFULENBQXhILENBUEosRUFRSTtBQUFJLHdCQUFhLEdBQWpCO0FBQXFCLGVBQU8sRUFBRyxpQkFBQVYsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ3lFLGdCQUFMLENBQXNCekUsQ0FBdEIsQ0FBSjtBQUFBO0FBQWhDLFNBQStEO0FBQU0saUJBQVMsRUFBQztBQUFoQixhQUEvRCxFQUE4RyxvRkFBOUcsRUFBb0gsdUZBQU9VLDBEQUFFLENBQUUsV0FBRixFQUFlLFFBQWYsQ0FBVCxDQUFwSCxDQVJKLEVBU0k7QUFBSSx3QkFBYSxJQUFqQjtBQUFzQixlQUFPLEVBQUcsaUJBQUFWLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUN5RSxnQkFBTCxDQUFzQnpFLENBQXRCLENBQUo7QUFBQTtBQUFqQyxTQUFnRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsY0FBaEUsRUFBZ0gsb0ZBQWhILEVBQXNILHVGQUFPVSwwREFBRSxDQUFFLGtCQUFGLEVBQXNCLFFBQXRCLENBQVQsQ0FBdEgsQ0FUSixDQUhKLENBREgsR0FpQkc7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxvRkFBSUEsMERBQUUsQ0FBRSxvRUFBRixFQUF3RSxRQUF4RSxDQUFOLENBREosQ0FsQk4sR0FzQkEsRUExQk4sQ0FESjtBQThCSDs7OztFQTVUaUJFLCtDOztBQStUUHdCLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDblVBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztJQUVNNkMsVzs7Ozs7QUFFRix1QkFBWWxHLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWdCbkJtRyxtQkFoQm1CLEdBZ0JHLFVBQUF0RixPQUFPLEVBQUk7QUFDN0JBLGFBQU8sQ0FBQ1EsTUFBUjs7QUFDQSxZQUFLckIsS0FBTCxDQUFXeUYsVUFBWDtBQUNILEtBbkJrQjs7QUFBQSxVQXFCbkJXLFlBckJtQixHQXFCSixVQUFDdkYsT0FBRCxFQUFVSSxDQUFWLEVBQWFvRixRQUFiLEVBQTBCO0FBRXJDLFVBQU1DLHNCQUFzQixHQUFHLENBQUUsWUFBRixFQUFnQixPQUFoQixFQUF5QixXQUF6QixFQUFzQyxhQUF0QyxFQUFxRCxpQkFBckQsRUFBd0Usa0JBQXhFLEVBQTRGLGdCQUE1RixFQUE4RyxtQkFBOUcsQ0FBL0I7O0FBRUEsVUFBS0QsUUFBUSxJQUFJLFdBQWpCLEVBQStCO0FBQzNCeEYsZUFBTyxDQUFDbUIsU0FBUixHQUFvQmYsQ0FBQyxDQUFDQyxNQUFGLENBQVNxRixLQUE3QjtBQUNILE9BRkQsTUFFTyxJQUFLRixRQUFRLElBQUksS0FBakIsRUFBeUI7QUFDNUJ4RixlQUFPLENBQUNtRixHQUFSLEdBQWMvRSxDQUFDLENBQUNDLE1BQUYsQ0FBU3FGLEtBQXZCO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsWUFBS0Qsc0JBQXNCLENBQUNFLFFBQXZCLENBQWlDSCxRQUFqQyxDQUFMLEVBQW1EO0FBQy9DeEYsaUJBQU8sQ0FBQzRGLEtBQVIsQ0FBZUosUUFBZixJQUE0QnBGLENBQUMsQ0FBQ0MsTUFBRixDQUFTcUYsS0FBckM7QUFDSCxTQUZELE1BRU87QUFDSDFGLGlCQUFPLENBQUM0RixLQUFSLENBQWVKLFFBQWYsSUFBNEJwRixDQUFDLENBQUNDLE1BQUYsQ0FBU3FGLEtBQVQsR0FBaUIsSUFBN0M7QUFDSDtBQUNKOztBQUNELFlBQUt6RSxRQUFMLENBQWM7QUFDVmpCLGVBQU8sRUFBRUEsT0FEQztBQUVWNkYsb0JBQVksRUFBRTdGLE9BQU8sQ0FBQzRGO0FBRlosT0FBZDtBQUlILEtBeENrQjs7QUFBQSxVQTBDbkJFLGNBMUNtQixHQTBDRixVQUFBSixLQUFLLEVBQUk7QUFDdEIsYUFBT0EsS0FBSyxDQUFDSyxPQUFOLENBQWUsSUFBZixFQUFxQixFQUFyQixDQUFQO0FBQ0gsS0E1Q2tCOztBQUFBLFVBOENuQkMsY0E5Q21CLEdBOENGLFVBQUFDLENBQUMsRUFBSTtBQUNsQixVQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0YsQ0FBRCxDQUFOLENBQVVHLFFBQVYsQ0FBbUIsRUFBbkIsQ0FBVjtBQUNBLGFBQU9GLEdBQUcsQ0FBQ0csTUFBSixHQUFhLENBQWIsR0FBaUIsTUFBTUgsR0FBdkIsR0FBNkJBLEdBQXBDO0FBQ0gsS0FqRGtCOztBQUFBLFVBbURuQkksUUFuRG1CLEdBbURSLFVBQUFDLEdBQUcsRUFBSTtBQUVkQSxTQUFHLEdBQUdBLEdBQUcsQ0FBQ1IsT0FBSixDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBTjtBQUNBUSxTQUFHLEdBQUdBLEdBQUcsQ0FBQ1IsT0FBSixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsQ0FBTjtBQUNBUSxTQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsS0FBSixDQUFXLElBQVgsQ0FBTjtBQUVBLFVBQU1DLENBQUMsR0FBR0YsR0FBRyxDQUFDLENBQUQsQ0FBYjtBQUNBLFVBQU1HLENBQUMsR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBYjtBQUNBLFVBQU1JLENBQUMsR0FBR0osR0FBRyxDQUFDLENBQUQsQ0FBYjtBQUVBLGFBQU8sTUFBTSxNQUFLUCxjQUFMLENBQW9CUyxDQUFwQixDQUFOLEdBQStCLE1BQUtULGNBQUwsQ0FBb0JVLENBQXBCLENBQS9CLEdBQXdELE1BQUtWLGNBQUwsQ0FBb0JXLENBQXBCLENBQS9EO0FBQ0gsS0E5RGtCOztBQUVmLFVBQUs3RyxLQUFMLEdBQWE7QUFDVEUsYUFBTyxFQUFFLE1BQUtiLEtBQUwsQ0FBV2EsT0FEWDtBQUVUNkYsa0JBQVksRUFBRSxNQUFLMUcsS0FBTCxDQUFXYSxPQUFYLENBQW1CNEY7QUFGeEIsS0FBYjtBQUZlO0FBTWxCOzs7O3VDQUVrQmdCLFMsRUFBVztBQUMxQixVQUFLQSxTQUFTLENBQUM1RyxPQUFWLElBQXFCLEtBQUtiLEtBQUwsQ0FBV2EsT0FBckMsRUFBK0M7QUFDM0MsYUFBS2lCLFFBQUwsQ0FBYztBQUNWakIsaUJBQU8sRUFBRSxLQUFLYixLQUFMLENBQVdhO0FBRFYsU0FBZDtBQUdIO0FBQ0o7Ozs2QkFrRFE7QUFBQTs7QUFFTCxVQUFLLENBQUUsS0FBS0YsS0FBTCxDQUFXRSxPQUFsQixFQUE0QjtBQUN4QixlQUFPLEVBQVA7QUFDSDs7QUFFRCxVQUFNQSxPQUFPLEdBQVEsS0FBS0YsS0FBTCxDQUFXRSxPQUFoQztBQUNBLFVBQU02RyxLQUFLLEdBQVU3RyxPQUFPLENBQUNtQixTQUE3QjtBQUNBLFVBQU0wRSxZQUFZLEdBQUd4RyxNQUFNLENBQUN5SCxnQkFBUCxDQUF5QjlHLE9BQXpCLENBQXJCO0FBRUEsVUFBTThFLFFBQVEsR0FBRzlFLE9BQU8sQ0FBQzhFLFFBQXpCO0FBRUEsYUFDSSx5RUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLHFGQUFLQSxRQUFRLEdBQUcsR0FBWCxHQUFpQmhFLDBEQUFFLENBQUUsb0JBQUYsRUFBd0IsUUFBeEIsQ0FBeEIsQ0FESixFQUVNZ0UsUUFBUSxJQUFJLEtBQVosR0FDRSx3RkFBUWhFLDBEQUFFLENBQUUsTUFBRixFQUFVLFFBQVYsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFZCxPQUFPLENBQUNtRixHQUFsQztBQUF1QyxnQkFBUSxFQUFHLGtCQUFBL0UsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsS0FBOUIsQ0FBSjtBQUFBO0FBQW5ELFFBREosQ0FERixHQUlFMEUsUUFBUSxJQUFJLElBQVosR0FBbUIsRUFBbkIsR0FDQSx3RkFBUWhFLDBEQUFFLENBQUUsT0FBRixFQUFXLFFBQVgsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFK0YsS0FBMUI7QUFBaUMsZ0JBQVEsRUFBRyxrQkFBQXpHLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLFdBQTlCLENBQUo7QUFBQTtBQUE3QyxRQURKLENBUFIsRUFXSSx3RkFDSSx3RkFDSSxxRkFDSSxxRkFDSSx3RkFBUVUsMERBQUUsQ0FBRSxnQkFBRixFQUFvQixRQUFwQixDQUFWLEVBQ0k7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixXQUFHLEVBQUMsR0FBekI7QUFBNkIsYUFBSyxFQUFFLEtBQUtnRixjQUFMLENBQW9CRCxZQUFZLENBQUNrQixRQUFqQyxDQUFwQztBQUFnRixnQkFBUSxFQUFHLGtCQUFBM0csQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsVUFBOUIsQ0FBSjtBQUFBO0FBQTVGLFFBREosQ0FESixDQURKLEVBTUkscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsYUFBRixFQUFpQixRQUFqQixDQUFWLEVBQ0k7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixZQUFJLEVBQUMsS0FBMUI7QUFBZ0MsV0FBRyxFQUFDLEtBQXBDO0FBQTBDLFdBQUcsRUFBQyxLQUE5QztBQUFvRCxhQUFLLEVBQUUsS0FBS2dGLGNBQUwsQ0FBb0JELFlBQVksQ0FBQ21CLFVBQWpDLENBQTNEO0FBQXlHLGdCQUFRLEVBQUcsa0JBQUE1RyxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixZQUE5QixDQUFKO0FBQUE7QUFBckgsUUFESixDQURKLENBTkosQ0FESixFQWFJLHFGQUNJLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLE9BQUYsRUFBVyxRQUFYLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGFBQUssRUFBRSxLQUFLd0YsUUFBTCxDQUFjVCxZQUFZLENBQUNvQixLQUEzQixDQUEzQjtBQUE4RCxnQkFBUSxFQUFHLGtCQUFBN0csQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsT0FBOUIsQ0FBSjtBQUFBO0FBQTFFLFFBREosQ0FESixDQURKLEVBTUkscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsa0JBQUYsRUFBc0IsUUFBdEIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsWUFBSSxFQUFDLEtBQTFCO0FBQWdDLFdBQUcsRUFBQyxHQUFwQztBQUF3QyxhQUFLLEVBQUUsS0FBS2dGLGNBQUwsQ0FBb0JELFlBQVksQ0FBQ3FCLFVBQWpDLENBQS9DO0FBQTZGLGdCQUFRLEVBQUcsa0JBQUE5RyxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixZQUE5QixDQUFKO0FBQUE7QUFBekcsUUFESixDQURKLENBTkosQ0FiSixFQXlCSSxxRkFDSSxxRkFDSSx3RkFBUVUsMERBQUUsQ0FBRSxZQUFGLEVBQWdCLFFBQWhCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixZQUFJLEVBQUMsR0FBbEM7QUFBc0MsYUFBSyxFQUFFcUcsUUFBUSxDQUFDLEtBQUtyQixjQUFMLENBQW9CLEtBQUtoRyxLQUFMLENBQVcrRixZQUFYLENBQXdCdUIsS0FBeEIsR0FBZ0MsS0FBS3RILEtBQUwsQ0FBVytGLFlBQVgsQ0FBd0J1QixLQUF4RCxHQUFnRXZCLFlBQVksQ0FBQ3VCLEtBQWpHLENBQUQsQ0FBckQ7QUFBZ0ssZ0JBQVEsRUFBRyxrQkFBQWhILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLE9BQTlCLENBQUo7QUFBQTtBQUE1SyxRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLGFBQUssRUFBRXFHLFFBQVEsQ0FBQyxLQUFLckIsY0FBTCxDQUFvQixLQUFLaEcsS0FBTCxDQUFXK0YsWUFBWCxDQUF3QndCLE1BQXhCLEdBQWlDLEtBQUt2SCxLQUFMLENBQVcrRixZQUFYLENBQXdCd0IsTUFBekQsR0FBa0V4QixZQUFZLENBQUN3QixNQUFuRyxDQUFELENBQTVDO0FBQTBKLGdCQUFRLEVBQUcsa0JBQUFqSCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixRQUE5QixDQUFKO0FBQUE7QUFBdEssUUFESixDQURKLENBTkosQ0F6QkosRUFxQ0kscUZBQ0kscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsbUJBQUYsRUFBdUIsUUFBdkIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDeUIsV0FBakMsQ0FBcEM7QUFBbUYsZ0JBQVEsRUFBRyxrQkFBQWxILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLGFBQTlCLENBQUo7QUFBQTtBQUEvRixRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLG9CQUFGLEVBQXdCLFFBQXhCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixhQUFLLEVBQUUsS0FBS2dGLGNBQUwsQ0FBb0JELFlBQVksQ0FBQzBCLFlBQWpDLENBQXBDO0FBQW9GLGdCQUFRLEVBQUcsa0JBQUFuSCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixjQUE5QixDQUFKO0FBQUE7QUFBaEcsUUFESixDQURKLENBTkosQ0FyQ0osRUFpREkscUZBQ0kscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsa0JBQUYsRUFBc0IsUUFBdEIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDMkIsVUFBakMsQ0FBcEM7QUFBa0YsZ0JBQVEsRUFBRyxrQkFBQXBILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLFlBQTlCLENBQUo7QUFBQTtBQUE5RixRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLHFCQUFGLEVBQXlCLFFBQXpCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixhQUFLLEVBQUUsS0FBS2dGLGNBQUwsQ0FBb0JELFlBQVksQ0FBQzRCLGFBQWpDLENBQXBDO0FBQXFGLGdCQUFRLEVBQUcsa0JBQUFySCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixlQUE5QixDQUFKO0FBQUE7QUFBakcsUUFESixDQURKLENBTkosQ0FqREosRUE2REkscUZBQ0kscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsa0JBQUYsRUFBc0IsUUFBdEIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFFLEtBQUtnRixjQUFMLENBQW9CRCxZQUFZLENBQUM2QixVQUFqQyxDQUE1QjtBQUEwRSxnQkFBUSxFQUFHLGtCQUFBdEgsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsWUFBOUIsQ0FBSjtBQUFBO0FBQXRGLFFBREosQ0FESixDQURKLEVBTUkscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsbUJBQUYsRUFBdUIsUUFBdkIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFFLEtBQUtnRixjQUFMLENBQW9CRCxZQUFZLENBQUM4QixXQUFqQyxDQUE1QjtBQUEyRSxnQkFBUSxFQUFHLGtCQUFBdkgsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsYUFBOUIsQ0FBSjtBQUFBO0FBQXZGLFFBREosQ0FESixDQU5KLENBN0RKLEVBeUVJLHFGQUNJLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLGlCQUFGLEVBQXFCLFFBQXJCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDK0IsU0FBakMsQ0FBNUI7QUFBeUUsZ0JBQVEsRUFBRyxrQkFBQXhILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLFdBQTlCLENBQUo7QUFBQTtBQUFyRixRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLG9CQUFGLEVBQXdCLFFBQXhCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDZ0MsWUFBakMsQ0FBNUI7QUFBNEUsZ0JBQVEsRUFBRyxrQkFBQXpILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLGNBQTlCLENBQUo7QUFBQTtBQUF4RixRQURKLENBREosQ0FOSixDQXpFSixFQXFGSSxxRkFDSSxxRkFDSSx3RkFBUVUsMERBQUUsQ0FBRSxZQUFGLEVBQWdCLFFBQWhCLENBQVYsRUFDSTtBQUFTLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDaUMsU0FBakMsQ0FBaEI7QUFBNkQsZ0JBQVEsRUFBRyxrQkFBQTFILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLFdBQTlCLENBQUo7QUFBQTtBQUF6RSxTQUNJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBc0JVLDBEQUFFLENBQUUsTUFBRixFQUFVLFFBQVYsQ0FBeEIsQ0FESixFQUVJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBdUJBLDBEQUFFLENBQUUsT0FBRixFQUFXLFFBQVgsQ0FBekIsQ0FGSixFQUdJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBd0JBLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBMUIsQ0FISixDQURKLENBREosQ0FESixFQVVJLHFGQUNJLHdGQUFRQSwwREFBRSxDQUFFLG1CQUFGLEVBQXVCLFFBQXZCLENBQVYsRUFDSTtBQUFTLGFBQUssRUFBRSxLQUFLZ0YsY0FBTCxDQUFvQkQsWUFBWSxDQUFDa0MsV0FBakMsQ0FBaEI7QUFBK0QsZ0JBQVEsRUFBRyxrQkFBQTNILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLGFBQTlCLENBQUo7QUFBQTtBQUEzRSxTQUNJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBc0JVLDBEQUFFLENBQUUsTUFBRixFQUFVLFFBQVYsQ0FBeEIsQ0FESixFQUVJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBdUJBLDBEQUFFLENBQUUsT0FBRixFQUFXLFFBQVgsQ0FBekIsQ0FGSixFQUdJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBd0JBLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBMUIsQ0FISixFQUlJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBd0JBLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBMUIsQ0FKSixFQUtJO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBd0JBLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBMUIsQ0FMSixFQU1JO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBd0JBLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBMUIsQ0FOSixFQU9JO0FBQVEsYUFBSyxFQUFDO0FBQWQsU0FBdUJBLDBEQUFFLENBQUUsT0FBRixFQUFXLFFBQVgsQ0FBekIsQ0FQSixDQURKLENBREosQ0FWSixDQXJGSixFQTZHSSxxRkFDSSxxRkFDSSx3RkFBUUEsMERBQUUsQ0FBRSxtQkFBRixFQUF1QixRQUF2QixDQUFWLEVBQ0k7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixhQUFLLEVBQUUsS0FBS3dGLFFBQUwsQ0FBY1QsWUFBWSxDQUFDbUMsZUFBM0IsQ0FBM0I7QUFBd0UsZ0JBQVEsRUFBRyxrQkFBQTVILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLGlCQUE5QixDQUFKO0FBQUE7QUFBcEYsUUFESixDQURKLENBREosRUFNSSxxRkFDSSx3RkFBUVUsMERBQUUsQ0FBRSxvQkFBRixFQUF3QixRQUF4QixDQUFWLEVBQ0k7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixhQUFLLEVBQUUsS0FBS3dGLFFBQUwsQ0FBY1QsWUFBWSxDQUFDb0MsZ0JBQTNCLENBQTNCO0FBQXlFLGdCQUFRLEVBQUcsa0JBQUE3SCxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixrQkFBOUIsQ0FBSjtBQUFBO0FBQXJGLFFBREosQ0FESixDQU5KLENBN0dKLEVBeUhJLHFGQUNJLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLGtCQUFGLEVBQXNCLFFBQXRCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGFBQUssRUFBRSxLQUFLd0YsUUFBTCxDQUFjVCxZQUFZLENBQUNxQyxjQUEzQixDQUEzQjtBQUF1RSxnQkFBUSxFQUFHLGtCQUFBOUgsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsZ0JBQTlCLENBQUo7QUFBQTtBQUFuRixRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLHFCQUFGLEVBQXlCLFFBQXpCLENBQVYsRUFDQTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGFBQUssRUFBRSxLQUFLd0YsUUFBTCxDQUFjVCxZQUFZLENBQUNzQyxpQkFBM0IsQ0FBM0I7QUFBMEUsZ0JBQVEsRUFBRyxrQkFBQS9ILENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNtRixZQUFMLENBQWtCdkYsT0FBbEIsRUFBMkJJLENBQTNCLEVBQThCLG1CQUE5QixDQUFKO0FBQUE7QUFBdEYsUUFEQSxDQURKLENBTkosQ0F6SEosRUFxSUkscUZBQ0kscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUsd0JBQUYsRUFBNEIsUUFBNUIsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLGFBQUssRUFBRXFHLFFBQVEsQ0FBQyxLQUFLckIsY0FBTCxDQUFvQixLQUFLaEcsS0FBTCxDQUFXK0YsWUFBWCxDQUF3QnVDLGVBQXhCLEdBQTBDLEtBQUt0SSxLQUFMLENBQVcrRixZQUFYLENBQXdCdUMsZUFBbEUsR0FBb0Z2QyxZQUFZLENBQUN1QyxlQUFySCxDQUFELENBQTVDO0FBQXFMLGdCQUFRLEVBQUcsa0JBQUFoSSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixpQkFBOUIsQ0FBSjtBQUFBO0FBQWpNLFFBREosQ0FESixDQURKLEVBTUkscUZBQ0ksd0ZBQVFVLDBEQUFFLENBQUUseUJBQUYsRUFBNkIsUUFBN0IsQ0FBVixFQUNJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBRyxFQUFDLEdBQXpCO0FBQTZCLGFBQUssRUFBRXFHLFFBQVEsQ0FBQyxLQUFLckIsY0FBTCxDQUFvQixLQUFLaEcsS0FBTCxDQUFXK0YsWUFBWCxDQUF3QndDLGdCQUF4QixHQUEyQyxLQUFLdkksS0FBTCxDQUFXK0YsWUFBWCxDQUF3QndDLGdCQUFuRSxHQUFzRnhDLFlBQVksQ0FBQ3dDLGdCQUF2SCxDQUFELENBQTVDO0FBQXdMLGdCQUFRLEVBQUcsa0JBQUFqSSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbUYsWUFBTCxDQUFrQnZGLE9BQWxCLEVBQTJCSSxDQUEzQixFQUE4QixrQkFBOUIsQ0FBSjtBQUFBO0FBQXBNLFFBREosQ0FESixDQU5KLENBcklKLEVBaUpJLHFGQUNJLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLHVCQUFGLEVBQTJCLFFBQTNCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixhQUFLLEVBQUVxRyxRQUFRLENBQUMsS0FBS3JCLGNBQUwsQ0FBb0IsS0FBS2hHLEtBQUwsQ0FBVytGLFlBQVgsQ0FBd0J5QyxjQUF4QixHQUF5QyxLQUFLeEksS0FBTCxDQUFXK0YsWUFBWCxDQUF3QnlDLGNBQWpFLEdBQWtGekMsWUFBWSxDQUFDeUMsY0FBbkgsQ0FBRCxDQUE1QztBQUFrTCxnQkFBUSxFQUFHLGtCQUFBbEksQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsZ0JBQTlCLENBQUo7QUFBQTtBQUE5TCxRQURKLENBREosQ0FESixFQU1JLHFGQUNJLHdGQUFRVSwwREFBRSxDQUFFLDBCQUFGLEVBQThCLFFBQTlCLENBQVYsRUFDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUcsRUFBQyxHQUF6QjtBQUE2QixhQUFLLEVBQUVxRyxRQUFRLENBQUMsS0FBS3JCLGNBQUwsQ0FBb0IsS0FBS2hHLEtBQUwsQ0FBVytGLFlBQVgsQ0FBd0IwQyxpQkFBeEIsR0FBNEMsS0FBS3pJLEtBQUwsQ0FBVytGLFlBQVgsQ0FBd0IwQyxpQkFBcEUsR0FBd0YxQyxZQUFZLENBQUMwQyxpQkFBekgsQ0FBRCxDQUE1QztBQUEyTCxnQkFBUSxFQUFHLGtCQUFBbkksQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ21GLFlBQUwsQ0FBa0J2RixPQUFsQixFQUEyQkksQ0FBM0IsRUFBOEIsbUJBQTlCLENBQUo7QUFBQTtBQUF2TSxRQURKLENBREosQ0FOSixDQWpKSixDQURKLENBWEosRUEyS0k7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLHlCQUEvQjtBQUF5RCxhQUFLLEVBQUVVLDBEQUFFLENBQUUsUUFBRixFQUFZLFFBQVosQ0FBbEU7QUFBeUYsZUFBTyxFQUFFLGlCQUFBVixDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDa0YsbUJBQUwsQ0FBeUJ0RixPQUF6QixDQUFKO0FBQUE7QUFBbkcsUUEzS0osQ0FESixFQThLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLHFGQUFLYywwREFBRSxDQUFFLHVCQUFGLEVBQTJCLFFBQTNCLENBQVAsQ0FESixFQUVJLHFGQUNJLHFGQUFJLHlGQUFTLGdCQUFULFFBQUosRUFBNENBLDBEQUFFLENBQUUsYUFBRixFQUFpQixRQUFqQixDQUE5QyxDQURKLEVBRUkscUZBQUkseUZBQVMsbUJBQVQsUUFBSixFQUErQ0EsMERBQUUsQ0FBRSxnQkFBRixFQUFvQixRQUFwQixDQUFqRCxDQUZKLEVBR0kscUZBQUkseUZBQVMsZ0JBQVQsUUFBSixFQUE0Q0EsMERBQUUsQ0FBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTlDLENBSEosRUFJSSxxRkFBSSx5RkFBUyxpQkFBVCxRQUFKLEVBQTZDQSwwREFBRSxDQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBL0MsQ0FKSixFQUtJLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUsZ0JBQUYsRUFBb0IsUUFBcEIsQ0FBakQsQ0FMSixFQU1JLHFGQUFJLHlGQUFTLG9CQUFULFFBQUosRUFBZ0RBLDBEQUFFLENBQUUsaUJBQUYsRUFBcUIsUUFBckIsQ0FBbEQsQ0FOSixFQU9JLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUscUJBQUYsRUFBeUIsUUFBekIsQ0FBakQsQ0FQSixFQVFJLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUsb0JBQUYsRUFBd0IsUUFBeEIsQ0FBakQsQ0FSSixFQVNJLHFGQUFJLHlGQUFTLGlCQUFULFFBQUosRUFBNkNBLDBEQUFFLENBQUUsdUJBQUYsRUFBMkIsUUFBM0IsQ0FBL0MsQ0FUSixFQVVJLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUsMEJBQUYsRUFBOEIsUUFBOUIsQ0FBakQsQ0FWSixFQVdJLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUsbUJBQUYsRUFBdUIsUUFBdkIsQ0FBakQsQ0FYSixFQVlJLHFGQUFJLHlGQUFTLGFBQVQsUUFBSixFQUF5Q0EsMERBQUUsQ0FBRSxVQUFGLEVBQWMsUUFBZCxDQUEzQyxDQVpKLEVBYUkscUZBQUkseUZBQVMsZUFBVCxRQUFKLEVBQTJDQSwwREFBRSxDQUFFLFlBQUYsRUFBZ0IsUUFBaEIsQ0FBN0MsQ0FiSixFQWNJLHFGQUFJLHlGQUFTLGNBQVQsUUFBSixFQUEwQ0EsMERBQUUsQ0FBRSxpQkFBRixFQUFxQixRQUFyQixDQUE1QyxDQWRKLEVBZUkscUZBQUkseUZBQVMsY0FBVCxRQUFKLEVBQTBDQSwwREFBRSxDQUFFLGtCQUFGLEVBQXNCLFFBQXRCLENBQTVDLENBZkosRUFnQkkscUZBQUkseUZBQVMsZ0JBQVQsUUFBSixFQUE0Q0EsMERBQUUsQ0FBRSxtQkFBRixFQUF1QixRQUF2QixDQUE5QyxDQWhCSixFQWlCSSxxRkFBSSx5RkFBUyxrQkFBVCxRQUFKLEVBQThDQSwwREFBRSxDQUFFLHFCQUFGLEVBQXlCLFFBQXpCLENBQWhELENBakJKLEVBa0JJLHFGQUFJLHlGQUFTLG1CQUFULFFBQUosRUFBK0NBLDBEQUFFLENBQUUsZ0JBQUYsRUFBb0IsUUFBcEIsQ0FBakQsQ0FsQkosRUFtQkkscUZBQUkseUZBQVMsY0FBVCxRQUFKLEVBQTBDQSwwREFBRSxDQUFFLGdCQUFGLEVBQW9CLFFBQXBCLENBQTVDLENBbkJKLEVBb0JJLHFGQUFJLHlGQUFTLGdCQUFULFFBQUosRUFBNENBLDBEQUFFLENBQUUsYUFBRixFQUFpQixRQUFqQixDQUE5QyxDQXBCSixFQXFCSSxxRkFBSSx5RkFBUyxtQkFBVCxRQUFKLEVBQStDQSwwREFBRSxDQUFFLHNCQUFGLEVBQTBCLFFBQTFCLENBQWpELENBckJKLEVBc0JJLHFGQUFJLHlGQUFTLG9CQUFULFFBQUosRUFBZ0RBLDBEQUFFLENBQUUsd0JBQUYsRUFBNEIsUUFBNUIsQ0FBbEQsQ0F0QkosRUF1QkkscUZBQUkseUZBQVMsdUJBQVQsUUFBSixFQUFtREEsMERBQUUsQ0FBRSwyQkFBRixFQUErQixRQUEvQixDQUFyRCxDQXZCSixFQXdCSSxxRkFBSSx5RkFBUyxpQkFBVCxRQUFKLEVBQTZDQSwwREFBRSxDQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBL0MsQ0F4QkosRUF5QkkscUZBQUkseUZBQVMsYUFBVCxRQUFKLEVBQXlDQSwwREFBRSxDQUFFLG9CQUFGLEVBQXdCLFFBQXhCLENBQTNDLENBekJKLEVBMEJJLHFGQUFJLHlGQUFTLGlCQUFULFFBQUosRUFBNkNBLDBEQUFFLENBQUUsd0JBQUYsRUFBNEIsUUFBNUIsQ0FBL0MsQ0ExQkosRUEyQkkscUZBQUkseUZBQVMsbUJBQVQsUUFBSixFQUErQ0EsMERBQUUsQ0FBRSwwQkFBRixFQUE4QixRQUE5QixDQUFqRCxDQTNCSixFQTRCSSxxRkFBSSx5RkFBUyxjQUFULFFBQUosRUFBMENBLDBEQUFFLENBQUUsMkJBQUYsRUFBK0IsUUFBL0IsQ0FBNUMsQ0E1QkosRUE2QkswSCxxRUFBWSxDQUFFLG1DQUFGLEVBQXVDLEVBQXZDLENBN0JqQixDQUZKLENBOUtKLENBREo7QUFtTkg7Ozs7RUFqU3FCeEgsK0M7O0FBb1NYcUUsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUN6U0EsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW9ELE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFbEIsV0FBU0MsVUFBVCxHQUFrQztBQUFBLFFBQWJDLEtBQWEsdUVBQUwsRUFBSztBQUU5QixRQUFJL0YsWUFBWSxHQUFNLGlCQUF0QjtBQUNBLFFBQUlDLFdBQVcsR0FBTyxnQkFBdEI7QUFDQSxRQUFJQyxRQUFRLEdBQVUsYUFBdEI7QUFDQSxRQUFJQyxVQUFVLEdBQVEsZUFBdEI7QUFDQSxRQUFJQyxjQUFjLEdBQUksbUJBQXRCO0FBQ0EsUUFBSUMsY0FBYyxHQUFJLG1CQUF0QjtBQUNBLFFBQUlDLGNBQWMsR0FBSSxtQkFBdEI7QUFDQSxRQUFJQyxXQUFXLEdBQU8sZ0JBQXRCO0FBQ0EsUUFBSUMsWUFBWSxHQUFNLGlCQUF0QjtBQUNBLFFBQUlDLGNBQWMsR0FBSSxtQkFBdEI7QUFDQSxRQUFJQyxlQUFlLEdBQUcsb0JBQXRCO0FBQ0EsUUFBSUMsY0FBYyxHQUFJLG1CQUF0QjtBQUNBLFFBQUlDLGNBQWMsR0FBSSxtQkFBdEI7QUFFQSxRQUFJQyxRQUFRLEdBQWdCLGFBQTVCO0FBQ0EsUUFBSUMsWUFBWSxHQUFZLGlCQUE1QjtBQUNBLFFBQUlDLGNBQWMsR0FBVSxtQkFBNUI7QUFDQSxRQUFJQyxTQUFTLEdBQWUsY0FBNUI7QUFFQSxRQUFJQyxTQUFTLEdBQVksY0FBekI7QUFDQSxRQUFJQyxTQUFTLEdBQVksY0FBekI7QUFDQSxRQUFJQyxTQUFTLEdBQVksY0FBekI7QUFDQSxRQUFJQyxXQUFXLEdBQVUsZ0JBQXpCO0FBQ0EsUUFBSUMsYUFBYSxHQUFRLGtCQUF6QjtBQUNBLFFBQUlDLGNBQWMsR0FBTyxtQkFBekI7QUFDQSxRQUFJQyxXQUFXLEdBQVUsZ0JBQXpCO0FBQ0EsUUFBSUMsY0FBYyxHQUFPLG1CQUF6QjtBQUNBLFFBQUlDLGtCQUFrQixHQUFHLHVCQUF6QjtBQUNBLFFBQUlDLGVBQWUsR0FBTSxvQkFBekI7QUFDQSxRQUFJQyxZQUFZLEdBQVMsaUJBQXpCO0FBRUEsUUFBSUMsWUFBWSxHQUFHLGlCQUFuQjtBQUVBNUIsZ0JBQVksR0FBR3RCLGlCQUFpQixDQUFDbUQsWUFBbEIsQ0FBK0I3QixZQUE5Qzs7QUFFQSxRQUFLdEIsaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQm1FLE1BQXBDLEVBQTZDO0FBQ3pDLFVBQU1BLE1BQU0sR0FBWXRILGlCQUFpQixDQUFDbUQsWUFBbEIsQ0FBK0JtRSxNQUF2RDtBQUNBL0YsaUJBQVcsR0FBTytGLE1BQU0sQ0FBQy9GLFdBQXpCO0FBQ0FLLG9CQUFjLEdBQUkwRixNQUFNLENBQUMxRixjQUF6QjtBQUNBQyxpQkFBVyxHQUFPeUYsTUFBTSxDQUFDekYsV0FBekI7QUFDQUMsa0JBQVksR0FBTXdGLE1BQU0sQ0FBQ3hGLFlBQXpCO0FBQ0FDLG9CQUFjLEdBQUl1RixNQUFNLENBQUN2RixjQUF6QjtBQUNBQyxxQkFBZSxHQUFHc0YsTUFBTSxDQUFDdEYsZUFBekI7QUFDSDs7QUFFRCxRQUFLaEMsaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQmxCLGNBQXBDLEVBQXFEO0FBQ2pEQSxvQkFBYyxHQUFHakMsaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQmxCLGNBQWhEO0FBQ0g7O0FBRUQsUUFBS2pDLGlCQUFpQixDQUFDbUQsWUFBbEIsQ0FBK0JvRSxTQUFwQyxFQUFnRDtBQUM1Q0YsV0FBSyxHQUFnQnJILGlCQUFpQixDQUFDbUQsWUFBbEIsQ0FBK0JvRSxTQUFwRDtBQUNBL0YsY0FBUSxHQUFhLE1BQU02RixLQUFLLENBQUM3RixRQUFqQztBQUNBQyxnQkFBVSxHQUFXNEYsS0FBSyxDQUFDNUYsVUFBM0I7QUFDQUMsb0JBQWMsR0FBTzJGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxLQUFuQztBQUNBOUYsb0JBQWMsR0FBTzBGLEtBQUssQ0FBQ0csT0FBTixDQUFjRSxLQUFuQztBQUNBbkYsZUFBUyxHQUFZOEUsS0FBSyxDQUFDTSxhQUEzQjtBQUNBL0Usb0JBQWMsR0FBT3lFLEtBQUssQ0FBQ08sUUFBM0I7QUFDQS9FLGlCQUFXLEdBQVV3RSxLQUFLLENBQUNRLFVBQTNCO0FBQ0EvRSxvQkFBYyxHQUFPdUUsS0FBSyxDQUFDUyxPQUFOLEdBQWdCLENBQWhCLEdBQW9CVCxLQUFLLENBQUNVLFlBQTFCLEdBQXlDLEtBQTlEO0FBQ0EvRSxxQkFBZSxHQUFNcUUsS0FBSyxDQUFDVyxPQUFOLEdBQWdCLENBQWhCLEdBQW9CWCxLQUFLLENBQUNZLFlBQTFCLEdBQXlDLEtBQTlEO0FBQ0FsRix3QkFBa0IsR0FBR3NFLEtBQUssQ0FBQ1csT0FBTixHQUFnQixDQUFoQixHQUFvQlgsS0FBSyxDQUFDYSxhQUExQixHQUEwQzFJLDBEQUFFLENBQUUsZ0JBQUYsRUFBb0IsUUFBcEIsQ0FBakU7QUFDQXlELGtCQUFZLEdBQVNvRSxLQUFLLENBQUNjLE9BQTNCO0FBRUFoRyxjQUFRLEdBQWdCLEVBQXhCO0FBQ0FFLG9CQUFjLEdBQVUsRUFBeEI7QUFDQUQsa0JBQVksR0FBWSxFQUF4QjtBQUNBRSxlQUFTLEdBQWUsRUFBeEI7QUFFQStFLFdBQUssQ0FBQ2UsUUFBTixDQUFlL0ksT0FBZixDQUF1QixVQUFDZ0osR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFFL0JuRyxnQkFBUSxpQkFBdUJrRyxHQUFHLENBQUNFLFlBQTNCLFNBQVI7QUFDQWxHLHNCQUFjLGlCQUFpQmdHLEdBQUcsQ0FBQ0csa0JBQXJCLFNBQWQ7QUFDQXBHLG9CQUFZLGlCQUFtQmlHLEdBQUcsQ0FBQ0ksR0FBdkIsU0FBWjtBQUNBbkcsaUJBQVMsaUJBQXNCK0YsR0FBRyxDQUFDSyxtQkFBMUIsU0FBVDs7QUFFQSxZQUFLTCxHQUFHLENBQUNNLGlCQUFULEVBQTZCO0FBQ3pCeEcsa0JBQVEsaUJBQWdCeUcsTUFBTSxDQUFDQyxJQUFQLENBQVlSLEdBQUcsQ0FBQ00saUJBQWhCLENBQWhCLFNBQVI7QUFDQXRHLHdCQUFjLElBQUksUUFBbEI7QUFDQUQsc0JBQVksSUFBTSxRQUFsQjtBQUNBRSxtQkFBUyxJQUFTLFFBQWxCO0FBQ0g7O0FBQ0QsWUFBSytGLEdBQUcsQ0FBQ00saUJBQVQsRUFBNkI7QUFDekJ4RyxrQkFBUSxpQkFBZ0J5RyxNQUFNLENBQUNFLE1BQVAsQ0FBY1QsR0FBRyxDQUFDTSxpQkFBbEIsQ0FBaEIsU0FBUjtBQUNBdEcsd0JBQWMsSUFBSSxRQUFsQjtBQUNBRCxzQkFBWSxJQUFNLFFBQWxCO0FBQ0FFLG1CQUFTLElBQVMsUUFBbEI7QUFDSDtBQUVKLE9BcEJEO0FBc0JBLFVBQU15RyxlQUFlLEdBQUcxQixLQUFLLENBQUMyQixTQUE5QjtBQUVBeEcsZUFBUyxHQUFHLEVBQVo7QUFDQUMsZUFBUyxHQUFHLEVBQVo7O0FBRUEsVUFBSXNHLGVBQWUsQ0FBQ2hFLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBRTVCZ0UsdUJBQWUsQ0FBQzFKLE9BQWhCLENBQXdCLFVBQUM0SixHQUFELEVBQVM7QUFDN0J6RyxtQkFBUyxpQkFBVWhELDBEQUFFLENBQUUsS0FBRixFQUFTLFFBQVQsQ0FBWixjQUFtQ3lKLEdBQUcsQ0FBQ0MsS0FBdkMsVUFBVDtBQUNBekcsbUJBQVMsaUJBQVV3RyxHQUFHLENBQUNFLEtBQWQsU0FBVDtBQUNILFNBSEQ7QUFLSDs7QUFFRCxVQUFNQyxPQUFPLEdBQUcvQixLQUFLLENBQUMrQixPQUF0QjtBQUVBMUcsaUJBQVcsR0FBRyxFQUFkO0FBQ0FDLG1CQUFhLEdBQUcsRUFBaEI7QUFFQWlHLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZTyxPQUFaLEVBQXFCL0osT0FBckIsQ0FBOEIsVUFBQ2lKLENBQUQsRUFBTztBQUNqQzVGLG1CQUFXLGlCQUFVbEQsMERBQUUsQ0FBRSxRQUFGLEVBQVksUUFBWixDQUFaLGNBQXNDOEksQ0FBdEMsVUFBWDtBQUNBM0YscUJBQWEsaUJBQVV5RyxPQUFPLENBQUNkLENBQUQsQ0FBakIsU0FBYjtBQUNILE9BSEQ7QUFLSDs7QUFFRCxRQUFLdEksaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQmtHLFFBQXBDLEVBQStDO0FBQzNDbkgsb0JBQWMsR0FBR2xDLGlCQUFpQixDQUFDbUQsWUFBbEIsQ0FBK0JrRyxRQUEvQixDQUF3Q0MsSUFBeEMsQ0FBNkNDLFVBQTlEO0FBQ0FyRyxrQkFBWSxHQUFLbEQsaUJBQWlCLENBQUNtRCxZQUFsQixDQUErQmtHLFFBQS9CLENBQXdDQyxJQUF4QyxDQUE2Q0UsWUFBOUQ7QUFDSDs7QUFFRCxRQUFJcEcsV0FBVyxHQUFHLEVBQWxCOztBQUVBLFFBQUtwRCxpQkFBaUIsQ0FBQ3lKLFlBQXZCLEVBQXNDO0FBQ2xDckcsaUJBQVcsR0FBR3BELGlCQUFpQixDQUFDeUosWUFBaEM7QUFDSCxLQUZELE1BRU87QUFFSHJHLGlCQUFXLDJ1SEE2RWE5QixZQTdFYixzSEE4RXdDQyxXQTlFeEMsd09BbUZtREMsUUFuRm5ELDRGQW9Ga0RDLFVBcEZsRCxnR0FxRnNEQyxjQXJGdEQsY0FxRndFQyxjQXJGeEUsNktBd0YyQ0MsY0F4RjNDLHFGQXlGMkNDLFdBekYzQyxjQXlGMERDLFlBekYxRCw2RkEwRm1ERyxjQTFGbkQsczBCQTBHb0RFLFFBMUdwRCwrRkEyR29ERSxjQTNHcEQsK0ZBNEdvREQsWUE1R3BELCtGQTZHb0RFLFNBN0dwRCxxZkFxSG9EQyxTQXJIcEQsZ1ZBMEhvREMsU0ExSHBELCtGQTJIb0RDLFNBM0hwRCwwYUFpSW9ERyxjQWpJcEQsZ1ZBc0lvREYsV0F0SXBELCtGQXVJb0RDLGFBdklwRCxrZkErSW9ERSxXQS9JcEQsOGFBcUpvREMsY0FySnBELGdWQTBKb0RDLGtCQTFKcEQsK0ZBMkpvREMsZUEzSnBELHdhQWlLb0RDLFlBaktwRCw0UkF3S2dEQyxZQXhLaEQsNklBMEsyQzNCLFdBMUszQyw2RkEyS21EVSxjQTNLbkQsNEZBNEtrREMsY0E1S2xELDJQQUFYO0FBa0xIOztBQUVEa0IsZUFBVyxHQUFHQyxJQUFJLENBQUMsTUFBSUQsV0FBSixHQUFnQixHQUFqQixDQUFsQjtBQUVBLFdBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQW1ELDJCQUF1QixFQUFFO0FBQUVzRyxZQUFNLEVBQUV0QyxVQUFVO0FBQXBCO0FBQTVFLElBREo7QUFJSCxDQWhVRDs7QUFrVWVELHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDdFVBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUdBO0FBRUF4SSxRQUFRLENBQUNFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRW5EOEssa0RBQVEsQ0FBQ0MsTUFBVCxDQUNDLHlFQUFDLDRDQUFELE9BREQsRUFFQ2pMLFFBQVEsQ0FBQ2tMLGNBQVQsQ0FBd0IsNEJBQXhCLENBRkQ7QUFLQSxDQVBELEU7Ozs7Ozs7Ozs7O0FDWEEsYUFBYSx3Q0FBd0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0F2RCxhQUFhLHNDQUFzQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQXJELGFBQWEscUNBQXFDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBcEQsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9hc3NldHMvZGlzdC9pbnZvaWNlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW52b2ljZS9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5qc3gnO1xuaW1wb3J0IEludm9pY2UgZnJvbSAnLi9jb21wb25lbnRzL2ludm9pY2UvaW52b2ljZS5qc3gnO1xuaW1wb3J0IEVkaXRFbGVtZW50IGZyb20gJy4vY29tcG9uZW50cy9lZGl0RWxlbWVudC9lZGl0RWxlbWVudC5qc3gnO1xuaW1wb3J0ICcuL0FwcC5sZXNzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyAgID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHBvc1VzZXIgICAgID0gdXJsUGFyYW1zLmdldCgncG9zX3VzZXInKTtcbiAgICAgICAgY29uc3QgcG9zT3JkZXIgICAgPSB1cmxQYXJhbXMuZ2V0KCdwb3Nfb3JkZXInKTtcblxuICAgICAgICBjb25zdCBlZGl0YWJsZSA9ICEgcG9zVXNlciAmJiAhIHBvc09yZGVyO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlZGl0RWxlbWVudDogMCxcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcnLFxuICAgICAgICAgICAgZWRpdGFibGUgOiBlZGl0YWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCB0aGlzLnN0YXRlLmVkaXRhYmxlICkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy53a3djcG9zLWludm9pY2Utd3JhcHBlcicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3drd2Nwb3MtaW52b2ljZS1lZGl0YWJsZScgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudEluU3RhdGUoJycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy53a3djcG9zLWludm9pY2UtZWRpdGFibGUnICkuZm9yRWFjaCggZWRpdGFibGVFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVkaXRhYmxlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCAnd2t3Y3Bvcy1pbnZvaWNlLWVkaXQnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRJblN0YXRlKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEVsZW1lbnRJblN0YXRlID0gKGVsZW1lbnQgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlZGl0RWxlbWVudDogMSxcbiAgICAgICAgICAgICAgICBlbGVtZW50IDogZWxlbWVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZWRpdEVsZW1lbnQ6IDAsXG4gICAgICAgICAgICAgICAgZWxlbWVudCA6IGVsZW1lbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludm9pY2VIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy53a3djcG9zLWludm9pY2Utd3JhcHBlci1jb250YWluZXInICkuaW5uZXJIVE1MO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICAgIGNvbnN0IGludm9pY2VJZCA9IHVybFBhcmFtcy5nZXQoJ2lkJyk7XG5cbiAgICAgICAgZmV0Y2goIHdrd2Nwb3NJbnZvaWNlT2JqLmFwaV9hZG1pbl9hamF4LCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSApLFxuICAgICAgICAgICAgYm9keTogYGFjdGlvbj13a3djcG9zX3NhdmVfaW52b2ljZSZub25jZT0ke3drd2Nwb3NJbnZvaWNlT2JqLnBvc19hcGlfbm9uY2V9JmlkPSR7aW52b2ljZUlkfSZpbnZvaWNlX2h0bWw9JHtpbnZvaWNlSHRtbH1gLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2Uub2sgPyByZXNwb25zZS5qc29uKCkgOiBmYWxzZSApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgaWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZpbnZvaWNlX3NhdmVkPXRydWUnO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gVVJMO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZWRpdGFibGUgPyBcIndrd2Nwb3MtaW52b2ljZS1jb250YWluZXIgZWRpdGFibGVcIiA6ICd3a3djcG9zLWludm9pY2UtY29udGFpbmVyJ30+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lZGl0YWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9ucyBlZGl0RWxlbWVudD17dGhpcy5zdGF0ZS5lZGl0RWxlbWVudH0gZWxlbWVudD17dGhpcy5zdGF0ZS5lbGVtZW50fSBzZXRFbGVtZW50PXt0aGlzLnNldEVsZW1lbnRJblN0YXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8SW52b2ljZSAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lZGl0RWxlbWVudCAmJiB0aGlzLnN0YXRlLmVsZW1lbnQgPyA8RWRpdEVsZW1lbnQgZWxlbWVudD17dGhpcy5zdGF0ZS5lbGVtZW50fSBzZXRFbGVtZW50PXt0aGlzLnNldEVsZW1lbnRJblN0YXRlfSAvPiA6ICcnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lZGl0YWJsZSA/XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIHZhbHVlPXtfXyggJ1NhdmUnLCAnd2NfcG9zJyApfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9IC8+XG4gICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL2J1dHRvbnMubGVzcyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhZGRFbGVtZW50OiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRFbGVtZW50OiAhdGhpcy5zdGF0ZS5hZGRFbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RGVmYXVsdEludm9pY2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBsb2dvX2ludm9pY2UgICAgPSAnJHtsb2dvX2ludm9pY2V9JztcclxuICAgICAgICBsZXQgb3V0bGV0X25hbWUgICAgID0gJyR7b3V0bGV0X25hbWV9JztcclxuICAgICAgICBsZXQgb3JkZXJfaWQgICAgICAgID0gJyR7b3JkZXJfaWR9JztcclxuICAgICAgICBsZXQgb3JkZXJfZGF0ZSAgICAgID0gJyR7b3JkZXJfZGF0ZX0nO1xyXG4gICAgICAgIGxldCBjdXN0b21lcl9mbmFtZSAgPSAnJHtjdXN0b21lcl9mbmFtZX0nO1xyXG4gICAgICAgIGxldCBjdXN0b21lcl9sbmFtZSAgPSAnJHtjdXN0b21lcl9sbmFtZX0nO1xyXG4gICAgICAgIGxldCBvdXRsZXRfYWRkcmVzcyAgPSAnJHtvdXRsZXRfYWRkcmVzc30nO1xyXG4gICAgICAgIGxldCBvdXRsZXRfY2l0eSAgICAgPSAnJHtvdXRsZXRfY2l0eX0nO1xyXG4gICAgICAgIGxldCBvdXRsZXRfc3RhdGUgICAgPSAnJHtvdXRsZXRfc3RhdGV9JztcclxuICAgICAgICBsZXQgb3V0bGV0X2NvdW50cnkgID0gJyR7b3V0bGV0X2NvdW50cnl9JztcclxuICAgICAgICBsZXQgb3V0bGV0X3Bvc3Rjb2RlID0gJyR7b3V0bGV0X3Bvc3Rjb2RlfSc7XHJcbiAgICAgICAgbGV0IHBvc191c2VyX3Bob25lICA9ICcke3Bvc191c2VyX3Bob25lfSc7XHJcbiAgICAgICAgbGV0IHBvc191c2VyX2VtYWlsICA9ICcke3Bvc191c2VyX2VtYWlsfSc7XHJcblxyXG4gICAgICAgIGxldCBwcm9fbmFtZSAgICAgICAgICAgICAgPSAnJHtwcm9fbmFtZX0nO1xyXG4gICAgICAgIGxldCBwcm9fcXVhbnRpdHkgICAgICAgICAgPSAnJHtwcm9fcXVhbnRpdHl9JztcclxuICAgICAgICBsZXQgcHJvX3VuaXRfcHJpY2UgICAgICAgID0gJyR7cHJvX3VuaXRfcHJpY2V9JztcclxuICAgICAgICBsZXQgcHJvX3RvdGFsICAgICAgICAgICAgID0gJyR7cHJvX3RvdGFsfSc7XHJcblxyXG4gICAgICAgIGxldCBzdWJfdG90YWwgICAgICAgICAgPSAnJHtzdWJfdG90YWx9JztcclxuICAgICAgICBsZXQgdGF4X3RpdGxlICAgICAgICAgID0gJyR7dGF4X3RpdGxlfSc7XHJcbiAgICAgICAgbGV0IG9yZGVyX3RheCAgICAgICAgICA9ICcke29yZGVyX3RheH0nO1xyXG4gICAgICAgIGxldCBjb3Vwb25fbmFtZSAgICAgICAgPSAnJHtjb3Vwb25fbmFtZX0nO1xyXG4gICAgICAgIGxldCBjb3Vwb25fYW1vdW50ICAgICAgPSAnJHtjb3Vwb25fYW1vdW50fSc7XHJcbiAgICAgICAgbGV0IG9yZGVyX2Rpc2NvdW50ICAgICA9ICcke29yZGVyX2Rpc2NvdW50fSc7XHJcbiAgICAgICAgbGV0IG9yZGVyX3RvdGFsICAgICAgICA9ICcke29yZGVyX3RvdGFsfSc7XHJcbiAgICAgICAgbGV0IGNhc2hwYXlfYW1vdW50ICAgICA9ICcke2Nhc2hwYXlfYW1vdW50fSc7XHJcbiAgICAgICAgbGV0IG90aGVyX3BheW1lbnRfdGV4dCA9ICcke290aGVyX3BheW1lbnRfdGV4dH0nO1xyXG4gICAgICAgIGxldCBvdGhlcnBheV9hbW91bnQgICAgPSAnJHtvdGhlcnBheV9hbW91bnR9JztcclxuICAgICAgICBsZXQgb3JkZXJfY2hhbmdlICAgICAgID0gJyR7b3JkZXJfY2hhbmdlfSc7XHJcblxyXG4gICAgICAgIGxldCBjYXNoaWVyX25hbWUgPSAnJHtjYXNoaWVyX25hbWV9JztcclxuXHJcbiAgICAgICAgbG9nb19pbnZvaWNlID0gd2t3Y3Bvc0ludm9pY2VPYmouaW52b2ljZV9kYXRhLmxvZ29faW52b2ljZTtcclxuXHJcbiAgICAgICAgbGV0IGludm9pY2VEYXRhID0gYFxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogc2Vjb25kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5pbnZvaWNlLWhlYWRlciwgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5pbnZvaWNlLWZvb3RlciAuZm9vdGVyLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1oZWFkZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAub3JkZXItZGV0YWlscywgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5vdXRsZXQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1kZXRhaWxzIC5vcmRlci1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1kZXRhaWxzIC5vdXRsZXQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMgdGFibGUgdGgsIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHRoLCAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0ZCBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHRoZWFkLCAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0Ym9keTpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweCAwIDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0Ym9keTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMgdGFibGUgdGJvZHk6bnRoLW9mLXR5cGUoMikgdHI6bGFzdC1jaGlsZCB0ZDpudGgtbGFzdC1vZi10eXBlKDEpLCAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0Ym9keTpudGgtb2YtdHlwZSgyKSB0cjpsYXN0LWNoaWxkIHRkOm50aC1sYXN0LW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludm9pY2UtaGVhZGVyIHdrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlRheCBJbnZvaWNlL0JpbGwgb2YgU3VwcGx5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9nb19pbnZvaWNlfVwiIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvdXRsZXRfbmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52b2ljZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPk9yZGVyIC0gJHtvcmRlcl9pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkRhdGUgOiAke29yZGVyX2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5DdXN0b21lciA6ICR7Y3VzdG9tZXJfZm5hbWV9ICR7Y3VzdG9tZXJfbG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dGxldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3V0bGV0X2FkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke291dGxldF9jaXR5fSAke291dGxldF9zdGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlRlbCBObzogJHtwb3NfdXNlcl9waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlByb2R1Y3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlVuaXQgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7cHJvX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtwcm9fdW5pdF9wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke3Byb19xdWFudGl0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke3Byb190b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+U3ViVG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke3N1Yl90b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke3RheF90aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke29yZGVyX3RheH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5EaXNjb3VudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3JkZXJfZGlzY291bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtjb3Vwb25fbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke2NvdXBvbl9hbW91bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvcmRlcl90b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5DYXNoIFBheW1lbnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke2Nhc2hwYXlfYW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3RoZXJfcGF5bWVudF90ZXh0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3RoZXJwYXlfYW1vdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkNoYW5nZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3JkZXJfY2hhbmdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnZvaWNlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkNhc2hpZXI6ICR7Y2FzaGllcl9uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3V0bGV0X25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5UZWwgTm86ICR7cG9zX3VzZXJfcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5FbWFpbDogJHtwb3NfdXNlcl9lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5IYXZlIGEgbmljZSBkYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgaW52b2ljZURhdGEgPSBldmFsKCdgJytpbnZvaWNlRGF0YSsnYCcpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyLWNvbnRhaW5lcicgKS5pbm5lckhUTUwgPSBpbnZvaWNlRGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRFbGVtZW50KCcnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy53a3djcG9zLWludm9pY2Utd3JhcHBlcicgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3a3djcG9zLWludm9pY2UtZWRpdGFibGUnICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3drd2Nwb3MtaW52b2ljZS1lZGl0JyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEVsZW1lbnQoJycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZScgKS5mb3JFYWNoKCBlZGl0YWJsZUVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVkaXRhYmxlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3a3djcG9zLWludm9pY2UtZWRpdCcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnd2t3Y3Bvcy1pbnZvaWNlLWVkaXQnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCggJ3drd2Nwb3MtaW52b2ljZS1lZGl0JyApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RWxlbWVudChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFkZEVsZW1lbnQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5nZXRBdHRyaWJ1dGUoICdkYXRhLWVsZW1lbnQnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApO1xyXG5cclxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoICd3a3djcG9zLWludm9pY2UtZWRpdGFibGUnICk7XHJcblxyXG4gICAgICAgIGlmICggbm9kZU5hbWUgPT0gJ0lNRycgKSB7XHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc3JjID0gbm9kZU5hbWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICggbm9kZU5hbWUgIT0gJ0hSJyApIHtcclxuICAgICAgICAgICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBub2RlTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCAnYWZ0ZXJlbmQnLCBuZXdFbGVtZW50ICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZEVsZW1lbnQ6ICEgdGhpcy5zdGF0ZS5hZGRFbGVtZW50LFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy53a3djcG9zLWludm9pY2UtZWRpdGFibGUnICkuZm9yRWFjaCggZWRpdGFibGVFbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggZWRpdGFibGVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3drd2Nwb3MtaW52b2ljZS1lZGl0JyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnd2t3Y3Bvcy1pbnZvaWNlLWVkaXQnICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnd2t3Y3Bvcy1pbnZvaWNlLWVkaXQnICk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RWxlbWVudCggbmV3RWxlbWVudCApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndrd2Nwb3MtYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1lbGVtZW50XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc2V0LWludm9pY2UgYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5yZXNldERlZmF1bHRJbnZvaWNlfSA+e19fKCAnUmVzZXQgRGVmYXVsdCcsICd3Y19wb3MnICl9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmFkZEVsZW1lbnQgPyBcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5lZGl0RWxlbWVudCAmJiB0aGlzLnByb3BzLmVsZW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndrd2Nwb3MtYWRkLWVsZW1lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntfXyggJ0VsZW1lbnQnLCAnd2NfcG9zJyApfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1lbGVtZW50PVwiSDFcIiBvbkNsaWNrPXsgZSA9PiB0aGlzLmhhbmRsZUFkZEVsZW1lbnQoZSkgfT48c3BhbiBjbGFzc05hbWU9XCJ3a3djcG9zLWVsZW1lbnQtaWNvblwiPkgxPC9zcGFuPjxiciAvPjxzcGFuPntfXyggJ0hlYWRpbmcgMScsICd3Y19wb3MnICl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtZWxlbWVudD1cIkgyXCIgb25DbGljaz17IGUgPT4gdGhpcy5oYW5kbGVBZGRFbGVtZW50KGUpIH0+PHNwYW4gY2xhc3NOYW1lPVwid2t3Y3Bvcy1lbGVtZW50LWljb25cIj5IMjwvc3Bhbj48YnIgLz48c3Bhbj57X18oICdIZWFkaW5nIDInLCAnd2NfcG9zJyApfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWVsZW1lbnQ9XCJIM1wiIG9uQ2xpY2s9eyBlID0+IHRoaXMuaGFuZGxlQWRkRWxlbWVudChlKSB9PjxzcGFuIGNsYXNzTmFtZT1cIndrd2Nwb3MtZWxlbWVudC1pY29uXCI+SDM8L3NwYW4+PGJyIC8+PHNwYW4+e19fKCAnSGVhZGluZyAzJywgJ3djX3BvcycgKX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1lbGVtZW50PVwiSDRcIiBvbkNsaWNrPXsgZSA9PiB0aGlzLmhhbmRsZUFkZEVsZW1lbnQoZSkgfT48c3BhbiBjbGFzc05hbWU9XCJ3a3djcG9zLWVsZW1lbnQtaWNvblwiPkg0PC9zcGFuPjxiciAvPjxzcGFuPntfXyggJ0hlYWRpbmcgNCcsICd3Y19wb3MnICl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtZWxlbWVudD1cIkg1XCIgb25DbGljaz17IGUgPT4gdGhpcy5oYW5kbGVBZGRFbGVtZW50KGUpIH0+PHNwYW4gY2xhc3NOYW1lPVwid2t3Y3Bvcy1lbGVtZW50LWljb25cIj5INTwvc3Bhbj48YnIgLz48c3Bhbj57X18oICdIZWFkaW5nIDUnLCAnd2NfcG9zJyApfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWVsZW1lbnQ9XCJINlwiIG9uQ2xpY2s9eyBlID0+IHRoaXMuaGFuZGxlQWRkRWxlbWVudChlKSB9PjxzcGFuIGNsYXNzTmFtZT1cIndrd2Nwb3MtZWxlbWVudC1pY29uXCI+SDY8L3NwYW4+PGJyIC8+PHNwYW4+e19fKCAnSGVhZGluZyA2JywgJ3djX3BvcycgKX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1lbGVtZW50PVwiSU1HXCIgb25DbGljaz17IGUgPT4gdGhpcy5oYW5kbGVBZGRFbGVtZW50KGUpIH0+PHNwYW4gY2xhc3NOYW1lPVwid2t3Y3Bvcy1lbGVtZW50LWljb25cIj5JTUc8L3NwYW4+PGJyIC8+PHNwYW4+e19fKCAnSW1hZ2UnLCAnd2NfcG9zJyApfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLWVsZW1lbnQ9XCJQXCIgb25DbGljaz17IGUgPT4gdGhpcy5oYW5kbGVBZGRFbGVtZW50KGUpIH0+PHNwYW4gY2xhc3NOYW1lPVwid2t3Y3Bvcy1lbGVtZW50LWljb25cIj5QPC9zcGFuPjxiciAvPjxzcGFuPntfXyggJ1BhcmFncmFwaCcsICd3Y19wb3MnICl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtZWxlbWVudD1cIkhSXCIgb25DbGljaz17IGUgPT4gdGhpcy5oYW5kbGVBZGRFbGVtZW50KGUpIH0+PHNwYW4gY2xhc3NOYW1lPVwid2t3Y3Bvcy1lbGVtZW50LWljb25cIj5IUjwvc3Bhbj48YnIgLz48c3Bhbj57X18oICdIb3Jpem9udGFsIFJ1bGVyJywgJ3djX3BvcycgKX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3a3djcG9zLWFkZC1lbGVtZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntfXyggJ1NlbGVjdCBlbGVtZW50IGZpcnN0IGluIHRoZSBpbnZvaWNlIHRvIGFkZCBuZXcgZWxlbWVudCBuZXh0IHRvIGl0LicsICd3Y19wb3MnICl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25zOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0ICcuL2VkaXRFbGVtZW50Lmxlc3MnO1xyXG5pbXBvcnQgeyBhcHBseUZpbHRlcnMgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcclxuXHJcbmNsYXNzIEVkaXRFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnByb3BzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50LnN0eWxlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICggcHJldlByb3BzLmVsZW1lbnQgIT0gdGhpcy5wcm9wcy5lbGVtZW50ICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucHJvcHMuZWxlbWVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVtb3ZlRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGVsZW1lbnQsIGUsIGNzc1N0eWxlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpdGhvdXRQaXhlbFByb3BlcnRpZXMgPSBbICdmb250V2VpZ2h0JywgJ2NvbG9yJywgJ3RleHRBbGlnbicsICdib3JkZXJTdHlsZScsICdib3JkZXJMZWZ0Q29sb3InLCAnYm9yZGVyUmlnaHRDb2xvcicsICdib3JkZXJUb3BDb2xvcicsICdib3JkZXJCb3R0b21Db2xvcicgXTtcclxuXHJcbiAgICAgICAgaWYgKCBjc3NTdHlsZSA9PSAnaW5uZXJIVE1MJyApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBjc3NTdHlsZSA9PSAnc3JjJyApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIHdpdGhvdXRQaXhlbFByb3BlcnRpZXMuaW5jbHVkZXMoIGNzc1N0eWxlICkgKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlWyBjc3NTdHlsZSBdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlWyBjc3NTdHlsZSBdID0gZS50YXJnZXQudmFsdWUgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICBlbGVtZW50U3R5bGU6IGVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVQaXhlbHMgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoICdweCcsICcnICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50VG9IZXggPSBjID0+IHtcclxuICAgICAgICB2YXIgaGV4ID0gTnVtYmVyKGMpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA8IDIgPyBcIjBcIiArIGhleCA6IGhleDtcclxuICAgIH1cclxuXHJcbiAgICByZ2JUb0hleCA9IHJnYiA9PiB7XHJcblxyXG4gICAgICAgIHJnYiA9IHJnYi5yZXBsYWNlKCAncmdiKCcsICcnICk7XHJcbiAgICAgICAgcmdiID0gcmdiLnJlcGxhY2UoICcpJywgJycgKTtcclxuICAgICAgICByZ2IgPSByZ2Iuc3BsaXQoICcsICcgKTtcclxuXHJcbiAgICAgICAgY29uc3QgciA9IHJnYlswXTtcclxuICAgICAgICBjb25zdCBnID0gcmdiWzFdO1xyXG4gICAgICAgIGNvbnN0IGIgPSByZ2JbMl07XHJcblxyXG4gICAgICAgIHJldHVybiBcIiNcIiArIHRoaXMuY29tcG9uZW50VG9IZXgocikgKyB0aGlzLmNvbXBvbmVudFRvSGV4KGcpICsgdGhpcy5jb21wb25lbnRUb0hleChiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICggISB0aGlzLnN0YXRlLmVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgICAgICA9IHRoaXMuc3RhdGUuZWxlbWVudDtcclxuICAgICAgICBjb25zdCBsYWJlbCAgICAgICAgPSBlbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbWVudCApO1xyXG5cclxuICAgICAgICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2t3Y3Bvcy1lZGl0LWVsZW1lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bm9kZU5hbWUgKyAnICcgKyBfXyggJ0VsZW1lbnQgUHJvcGVydGllcycsICd3Y19wb3MnICl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICB7IG5vZGVOYW1lID09ICdJTUcnID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdMaW5rJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtlbGVtZW50LnNyY30gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdzcmMnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA6ICggbm9kZU5hbWUgPT0gJ0hSJyA/ICcnIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0xhYmVsJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYWJlbH0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdpbm5lckhUTUwnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0ZvbnQgU2l6ZSAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5mb250U2l6ZSl9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAnZm9udFNpemUnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0ZvbnQgV2VpZ2h0JywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjEwMFwiIG1pbj1cIjEwMFwiIG1heD1cIjkwMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5mb250V2VpZ2h0KX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdmb250V2VpZ2h0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnQ29sb3InLCAnd2NfcG9zJyApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXt0aGlzLnJnYlRvSGV4KGVsZW1lbnRTdHlsZS5jb2xvcil9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAnY29sb3InKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0xpbmUgSGVpZ2h0IChweCknLCAnd2NfcG9zJyApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4xXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5saW5lSGVpZ2h0KX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdsaW5lSGVpZ2h0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnV2lkdGggKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBzdGVwPVwiMVwiIHZhbHVlPXtwYXJzZUludCh0aGlzLnZhbGlkYXRlUGl4ZWxzKHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLndpZHRoID8gdGhpcy5zdGF0ZS5lbGVtZW50U3R5bGUud2lkdGggOiBlbGVtZW50U3R5bGUud2lkdGgpKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICd3aWR0aCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnSGVpZ2h0IChweCknLCAnd2NfcG9zJyApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgdmFsdWU9e3BhcnNlSW50KHRoaXMudmFsaWRhdGVQaXhlbHModGhpcy5zdGF0ZS5lbGVtZW50U3R5bGUuaGVpZ2h0ID8gdGhpcy5zdGF0ZS5lbGVtZW50U3R5bGUuaGVpZ2h0IDogZWxlbWVudFN0eWxlLmhlaWdodCkpfSBvbkNoYW5nZT17IGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZWxlbWVudCwgZSwgJ2hlaWdodCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ1BhZGRpbmcgTGVmdCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5wYWRkaW5nTGVmdCl9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAncGFkZGluZ0xlZnQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ1BhZGRpbmcgUmlnaHQgKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiB2YWx1ZT17dGhpcy52YWxpZGF0ZVBpeGVscyhlbGVtZW50U3R5bGUucGFkZGluZ1JpZ2h0KX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdwYWRkaW5nUmlnaHQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdQYWRkaW5nIFRvcCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5wYWRkaW5nVG9wKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdwYWRkaW5nVG9wJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5wYWRkaW5nQm90dG9tKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdwYWRkaW5nQm90dG9tJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnTWFyZ2luIExlZnQgKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5tYXJnaW5MZWZ0KX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdtYXJnaW5MZWZ0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdNYXJnaW4gUmlnaHQgKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5tYXJnaW5SaWdodCl9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAnbWFyZ2luUmlnaHQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdNYXJnaW4gVG9wIChweCknLCAnd2NfcG9zJyApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy52YWxpZGF0ZVBpeGVscyhlbGVtZW50U3R5bGUubWFyZ2luVG9wKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdtYXJnaW5Ub3AnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ01hcmdpbiBCb3R0b20gKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnZhbGlkYXRlUGl4ZWxzKGVsZW1lbnRTdHlsZS5tYXJnaW5Cb3R0b20pfSBvbkNoYW5nZT17IGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZWxlbWVudCwgZSwgJ21hcmdpbkJvdHRvbScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ1RleHQgQWxpZ24nLCAnd2NfcG9zJyApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAgdmFsdWU9e3RoaXMudmFsaWRhdGVQaXhlbHMoZWxlbWVudFN0eWxlLnRleHRBbGlnbil9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAndGV4dEFsaWduJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWZ0XCI+e19fKCAnTGVmdCcsICd3Y19wb3MnICl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+e19fKCAnUmlnaHQnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZW50ZXJcIj57X18oICdDZW50ZXInLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdCb3JkZXIgU3R5bGUgKHB4KScsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICB2YWx1ZT17dGhpcy52YWxpZGF0ZVBpeGVscyhlbGVtZW50U3R5bGUuYm9yZGVyU3R5bGUpfSBvbkNoYW5nZT17IGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZWxlbWVudCwgZSwgJ2JvcmRlclN0eWxlJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+e19fKCAnTm9uZScsICd3Y19wb3MnICl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNvbGlkXCI+e19fKCAnU29saWQnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXNoZWRcIj57X18oICdEYXNoZWQnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3R0ZWRcIj57X18oICdEb3R0ZWQnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkb3VibGVcIj57X18oICdEb3VibGUnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncm9vdmVcIj57X18oICdHcm9vdmUnLCAnd2NfcG9zJyApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWRnZVwiPntfXyggJ1JpZGdlJywgJ3djX3BvcycgKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0JvcmRlciBMZWZ0IENvbG9yJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17dGhpcy5yZ2JUb0hleChlbGVtZW50U3R5bGUuYm9yZGVyTGVmdENvbG9yKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdib3JkZXJMZWZ0Q29sb3InKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0JvcmRlciBSaWdodCBDb2xvcicsICd3Y19wb3MnICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9e3RoaXMucmdiVG9IZXgoZWxlbWVudFN0eWxlLmJvcmRlclJpZ2h0Q29sb3IpfSBvbkNoYW5nZT17IGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZWxlbWVudCwgZSwgJ2JvcmRlclJpZ2h0Q29sb3InKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdCb3JkZXIgVG9wIENvbG9yJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17dGhpcy5yZ2JUb0hleChlbGVtZW50U3R5bGUuYm9yZGVyVG9wQ29sb3IpfSBvbkNoYW5nZT17IGUgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZWxlbWVudCwgZSwgJ2JvcmRlclRvcENvbG9yJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdCb3JkZXIgQm90dG9tIENvbG9yJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXt0aGlzLnJnYlRvSGV4KGVsZW1lbnRTdHlsZS5ib3JkZXJCb3R0b21Db2xvcil9IG9uQ2hhbmdlPXsgZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlbGVtZW50LCBlLCAnYm9yZGVyQm90dG9tQ29sb3InKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57X18oICdCb3JkZXIgTGVmdCBXaWR0aCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXtwYXJzZUludCh0aGlzLnZhbGlkYXRlUGl4ZWxzKHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLmJvcmRlckxlZnRXaWR0aCA/IHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLmJvcmRlckxlZnRXaWR0aCA6IGVsZW1lbnRTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdib3JkZXJMZWZ0V2lkdGgnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntfXyggJ0JvcmRlciBSaWdodCBXaWR0aCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXtwYXJzZUludCh0aGlzLnZhbGlkYXRlUGl4ZWxzKHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPyB0aGlzLnN0YXRlLmVsZW1lbnRTdHlsZS5ib3JkZXJSaWdodFdpZHRoIDogZWxlbWVudFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdib3JkZXJSaWdodFdpZHRoJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnQm9yZGVyIFRvcCBXaWR0aCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXtwYXJzZUludCh0aGlzLnZhbGlkYXRlUGl4ZWxzKHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLmJvcmRlclRvcFdpZHRoID8gdGhpcy5zdGF0ZS5lbGVtZW50U3R5bGUuYm9yZGVyVG9wV2lkdGggOiBlbGVtZW50U3R5bGUuYm9yZGVyVG9wV2lkdGgpKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdib3JkZXJUb3BXaWR0aCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e19fKCAnQm9yZGVyIEJvdHRvbSBXaWR0aCAocHgpJywgJ3djX3BvcycgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXtwYXJzZUludCh0aGlzLnZhbGlkYXRlUGl4ZWxzKHRoaXMuc3RhdGUuZWxlbWVudFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID8gdGhpcy5zdGF0ZS5lbGVtZW50U3R5bGUuYm9yZGVyQm90dG9tV2lkdGggOiBlbGVtZW50U3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpKX0gb25DaGFuZ2U9eyBlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGVsZW1lbnQsIGUsICdib3JkZXJCb3R0b21XaWR0aCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNlY29uZGFyeVwiIHZhbHVlPXtfXyggJ1JlbW92ZScsICd3Y19wb3MnKX0gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVJlbW92ZUVsZW1lbnQoZWxlbWVudCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2t3Y3Bvcy1wcmVkZWZpbmVkLWVsZW1lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57X18oICdQcmUtZGVmaW5lZCBWYXJpYWJsZXMnLCAnd2NfcG9zJyApfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3V0bGV0X25hbWV9J30gLSA8L3N0cm9uZz57IF9fKCAnT3V0bGV0IE5hbWUnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3V0bGV0X2FkZHJlc3N9J30gLSA8L3N0cm9uZz57IF9fKCAnT3V0bGV0IEFkZHJlc3MnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3V0bGV0X2NpdHl9J30gLSA8L3N0cm9uZz57IF9fKCAnT3V0bGV0IENpdHknLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3V0bGV0X3N0YXRlfSd9IC0gPC9zdHJvbmc+eyBfXyggJ091dGxldCBTdGF0ZScsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvdXRsZXRfY291bnRyeX0nfSAtIDwvc3Ryb25nPnsgX18oICdPdXRsZXQgQ291bnRyeScsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvdXRsZXRfcG9zdGNvZGV9J30gLSA8L3N0cm9uZz57IF9fKCAnT3V0bGV0IFBvc3Rjb2RlJywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke2N1c3RvbWVyX2ZuYW1lfSd9IC0gPC9zdHJvbmc+eyBfXyggJ0N1c3RvbWVyIEZpcnN0IE5hbWUnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7Y3VzdG9tZXJfbG5hbWV9J30gLSA8L3N0cm9uZz57IF9fKCAnQ3VzdG9tZXIgTGFzdCBOYW1lJywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke2Nhc2hpZXJfbmFtZX0nfSAtIDwvc3Ryb25nPnsgX18oICdDYXNoaWVyL1BPUyB1c2VyIG5hbWUnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7cG9zX3VzZXJfcGhvbmV9J30gLSA8L3N0cm9uZz57IF9fKCAnUE9TIFVzZXJcXCdzIHBob25lIG51bWJlcicsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtwb3NfdXNlcl9lbWFpbH0nfSAtIDwvc3Ryb25nPnsgX18oICdQT1MgVXNlclxcJ3MgZW1haWwnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3JkZXJfaWR9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgSUQnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3JkZXJfZGF0ZX0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBEYXRlJywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke3RheF90aXRsZX0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBUYXggVGl0bGUnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7b3JkZXJfdGF4fSd9IC0gPC9zdHJvbmc+eyBfXyggJ09yZGVyIFRheCBBbW91bnQnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7Y291cG9uX25hbWV9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgQ291cG9uIE5hbWUnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7Y291cG9uX2Ftb3VudH0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBDb3Vwb24gQW1vdW50JywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke29yZGVyX2Rpc2NvdW50fSd9IC0gPC9zdHJvbmc+eyBfXyggJ09yZGVyIERpc2NvdW50JywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke3N1Yl90b3RhbH0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBTdWJ0b3RhbCcsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvcmRlcl90b3RhbH0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBUb3RhbCcsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtjYXNocGF5X2Ftb3VudH0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBDYXNocGF5IEFtb3VudCcsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvdGhlcnBheV9hbW91bnR9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgT3RoZXIgUGF5IEFtb3VudCcsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvdGhlcl9wYXltZW50X3RleHR9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgT3RoZXIgUGF5bWVudCB0aXRsZScsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtvcmRlcl9jaGFuZ2V9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgQ2hhbmdlJywgJ3djX3BvcycgKSB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+eycke3Byb19uYW1lfSd9IC0gPC9zdHJvbmc+eyBfXyggJ09yZGVyIFByb2R1Y3QgTmFtZScsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtwcm9fcXVhbnRpdHl9J30gLSA8L3N0cm9uZz57IF9fKCAnT3JkZXIgUHJvZHVjdCBRdWFudGl0eScsICd3Y19wb3MnICkgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPnsnJHtwcm9fdW5pdF9wcmljZX0nfSAtIDwvc3Ryb25nPnsgX18oICdPcmRlciBQcm9kdWN0IFVuaXQgUHJpY2UnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz57JyR7cHJvX3RvdGFsfSd9IC0gPC9zdHJvbmc+eyBfXyggJ09yZGVyIFByb2R1Y3QgVG90YWwgUHJpY2UnLCAnd2NfcG9zJyApIH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXBwbHlGaWx0ZXJzKCAnd2t3Y3Bvc19hZGRfbmV3X2ludm9pY2VfdmFyaWFibGVzJywgJycgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEVsZW1lbnQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbnZvaWNlLmxlc3MnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCBJbnZvaWNlID0gKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gZ2V0SW52b2ljZSggb3JkZXIgPSAnJyApIHtcblxuICAgICAgICBsZXQgbG9nb19pbnZvaWNlICAgID0gJyR7bG9nb19pbnZvaWNlfSc7XG4gICAgICAgIGxldCBvdXRsZXRfbmFtZSAgICAgPSAnJHtvdXRsZXRfbmFtZX0nO1xuICAgICAgICBsZXQgb3JkZXJfaWQgICAgICAgID0gJyR7b3JkZXJfaWR9JztcbiAgICAgICAgbGV0IG9yZGVyX2RhdGUgICAgICA9ICcke29yZGVyX2RhdGV9JztcbiAgICAgICAgbGV0IGN1c3RvbWVyX2ZuYW1lICA9ICcke2N1c3RvbWVyX2ZuYW1lfSc7XG4gICAgICAgIGxldCBjdXN0b21lcl9sbmFtZSAgPSAnJHtjdXN0b21lcl9sbmFtZX0nO1xuICAgICAgICBsZXQgb3V0bGV0X2FkZHJlc3MgID0gJyR7b3V0bGV0X2FkZHJlc3N9JztcbiAgICAgICAgbGV0IG91dGxldF9jaXR5ICAgICA9ICcke291dGxldF9jaXR5fSc7XG4gICAgICAgIGxldCBvdXRsZXRfc3RhdGUgICAgPSAnJHtvdXRsZXRfc3RhdGV9JztcbiAgICAgICAgbGV0IG91dGxldF9jb3VudHJ5ICA9ICcke291dGxldF9jb3VudHJ5fSc7XG4gICAgICAgIGxldCBvdXRsZXRfcG9zdGNvZGUgPSAnJHtvdXRsZXRfcG9zdGNvZGV9JztcbiAgICAgICAgbGV0IHBvc191c2VyX3Bob25lICA9ICcke3Bvc191c2VyX3Bob25lfSc7XG4gICAgICAgIGxldCBwb3NfdXNlcl9lbWFpbCAgPSAnJHtwb3NfdXNlcl9lbWFpbH0nO1xuXG4gICAgICAgIGxldCBwcm9fbmFtZSAgICAgICAgICAgICAgPSAnJHtwcm9fbmFtZX0nO1xuICAgICAgICBsZXQgcHJvX3F1YW50aXR5ICAgICAgICAgID0gJyR7cHJvX3F1YW50aXR5fSc7XG4gICAgICAgIGxldCBwcm9fdW5pdF9wcmljZSAgICAgICAgPSAnJHtwcm9fdW5pdF9wcmljZX0nO1xuICAgICAgICBsZXQgcHJvX3RvdGFsICAgICAgICAgICAgID0gJyR7cHJvX3RvdGFsfSc7XG5cbiAgICAgICAgbGV0IHN1Yl90b3RhbCAgICAgICAgICA9ICcke3N1Yl90b3RhbH0nO1xuICAgICAgICBsZXQgdGF4X3RpdGxlICAgICAgICAgID0gJyR7dGF4X3RpdGxlfSc7XG4gICAgICAgIGxldCBvcmRlcl90YXggICAgICAgICAgPSAnJHtvcmRlcl90YXh9JztcbiAgICAgICAgbGV0IGNvdXBvbl9uYW1lICAgICAgICA9ICcke2NvdXBvbl9uYW1lfSc7XG4gICAgICAgIGxldCBjb3Vwb25fYW1vdW50ICAgICAgPSAnJHtjb3Vwb25fYW1vdW50fSc7XG4gICAgICAgIGxldCBvcmRlcl9kaXNjb3VudCAgICAgPSAnJHtvcmRlcl9kaXNjb3VudH0nO1xuICAgICAgICBsZXQgb3JkZXJfdG90YWwgICAgICAgID0gJyR7b3JkZXJfdG90YWx9JztcbiAgICAgICAgbGV0IGNhc2hwYXlfYW1vdW50ICAgICA9ICcke2Nhc2hwYXlfYW1vdW50fSc7XG4gICAgICAgIGxldCBvdGhlcl9wYXltZW50X3RleHQgPSAnJHtvdGhlcl9wYXltZW50X3RleHR9JztcbiAgICAgICAgbGV0IG90aGVycGF5X2Ftb3VudCAgICA9ICcke290aGVycGF5X2Ftb3VudH0nO1xuICAgICAgICBsZXQgb3JkZXJfY2hhbmdlICAgICAgID0gJyR7b3JkZXJfY2hhbmdlfSc7XG5cbiAgICAgICAgbGV0IGNhc2hpZXJfbmFtZSA9ICcke2Nhc2hpZXJfbmFtZX0nO1xuXG4gICAgICAgIGxvZ29faW52b2ljZSA9IHdrd2Nwb3NJbnZvaWNlT2JqLmludm9pY2VfZGF0YS5sb2dvX2ludm9pY2U7XG5cbiAgICAgICAgaWYgKCB3a3djcG9zSW52b2ljZU9iai5pbnZvaWNlX2RhdGEub3V0bGV0ICkge1xuICAgICAgICAgICAgY29uc3Qgb3V0bGV0ICAgICAgICAgID0gd2t3Y3Bvc0ludm9pY2VPYmouaW52b2ljZV9kYXRhLm91dGxldDtcbiAgICAgICAgICAgIG91dGxldF9uYW1lICAgICA9IG91dGxldC5vdXRsZXRfbmFtZTtcbiAgICAgICAgICAgIG91dGxldF9hZGRyZXNzICA9IG91dGxldC5vdXRsZXRfYWRkcmVzcztcbiAgICAgICAgICAgIG91dGxldF9jaXR5ICAgICA9IG91dGxldC5vdXRsZXRfY2l0eTtcbiAgICAgICAgICAgIG91dGxldF9zdGF0ZSAgICA9IG91dGxldC5vdXRsZXRfc3RhdGU7XG4gICAgICAgICAgICBvdXRsZXRfY291bnRyeSAgPSBvdXRsZXQub3V0bGV0X2NvdW50cnk7XG4gICAgICAgICAgICBvdXRsZXRfcG9zdGNvZGUgPSBvdXRsZXQub3V0bGV0X3Bvc3Rjb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB3a3djcG9zSW52b2ljZU9iai5pbnZvaWNlX2RhdGEucG9zX3VzZXJfcGhvbmUgKSB7XG4gICAgICAgICAgICBwb3NfdXNlcl9waG9uZSA9IHdrd2Nwb3NJbnZvaWNlT2JqLmludm9pY2VfZGF0YS5wb3NfdXNlcl9waG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggd2t3Y3Bvc0ludm9pY2VPYmouaW52b2ljZV9kYXRhLnBvc19vcmRlciApIHtcbiAgICAgICAgICAgIG9yZGVyICAgICAgICAgICAgICA9IHdrd2Nwb3NJbnZvaWNlT2JqLmludm9pY2VfZGF0YS5wb3Nfb3JkZXI7XG4gICAgICAgICAgICBvcmRlcl9pZCAgICAgICAgICAgPSAnIycgKyBvcmRlci5vcmRlcl9pZDtcbiAgICAgICAgICAgIG9yZGVyX2RhdGUgICAgICAgICA9IG9yZGVyLm9yZGVyX2RhdGU7XG4gICAgICAgICAgICBjdXN0b21lcl9mbmFtZSAgICAgPSBvcmRlci5iaWxsaW5nLmZuYW1lO1xuICAgICAgICAgICAgY3VzdG9tZXJfbG5hbWUgICAgID0gb3JkZXIuYmlsbGluZy5sbmFtZTtcbiAgICAgICAgICAgIHN1Yl90b3RhbCAgICAgICAgICA9IG9yZGVyLmNhcnRfc3VidG90YWw7XG4gICAgICAgICAgICBvcmRlcl9kaXNjb3VudCAgICAgPSBvcmRlci5kaXNjb3VudDtcbiAgICAgICAgICAgIG9yZGVyX3RvdGFsICAgICAgICA9IG9yZGVyLm9yZGVyX2h0bWw7XG4gICAgICAgICAgICBjYXNocGF5X2Ftb3VudCAgICAgPSBvcmRlci5jYXNoUGF5ID4gMCA/IG9yZGVyLmNhc2hQYXlfaHRtbCA6ICdOL0EnO1xuICAgICAgICAgICAgb3RoZXJwYXlfYW1vdW50ICAgID0gb3JkZXIuY2FyZFBheSA+IDAgPyBvcmRlci5jYXJkUGF5X2h0bWwgOiAnTi9BJztcbiAgICAgICAgICAgIG90aGVyX3BheW1lbnRfdGV4dCA9IG9yZGVyLmNhcmRQYXkgPiAwID8gb3JkZXIucGF5bWVudF90aXRsZSA6IF9fKCAnT3RoZXIgUGF5bWVudHMnLCAnd2NfcG9zJyApO1xuICAgICAgICAgICAgb3JkZXJfY2hhbmdlICAgICAgID0gb3JkZXIuYmFsYW5jZTtcblxuICAgICAgICAgICAgcHJvX25hbWUgICAgICAgICAgICAgID0gJyc7XG4gICAgICAgICAgICBwcm9fdW5pdF9wcmljZSAgICAgICAgPSAnJztcbiAgICAgICAgICAgIHByb19xdWFudGl0eSAgICAgICAgICA9ICcnO1xuICAgICAgICAgICAgcHJvX3RvdGFsICAgICAgICAgICAgID0gJyc7XG5cbiAgICAgICAgICAgIG9yZGVyLnByb2R1Y3RzLmZvckVhY2goKHBybywgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgcHJvX25hbWUgICAgICAgICAgICAgICs9IGA8cD4ke3Byby5wcm9kdWN0X25hbWV9PC9wPmA7XG4gICAgICAgICAgICAgICAgcHJvX3VuaXRfcHJpY2UgICAgICAgICs9IGA8cD4ke3Byby5wcm9kdWN0X3VuaXRfcHJpY2V9PC9wPmA7XG4gICAgICAgICAgICAgICAgcHJvX3F1YW50aXR5ICAgICAgICAgICs9IGA8cD4ke3Byby5xdHl9PC9wPmA7XG4gICAgICAgICAgICAgICAgcHJvX3RvdGFsICAgICAgICAgICAgICs9IGA8cD4ke3Byby5wcm9kdWN0X3RvdGFsX3ByaWNlfTwvcD5gO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBwcm8ucHJvZHVjdF9tZXRhX2RhdGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb19uYW1lICAgICAgICs9IGA8cD4ke09iamVjdC5rZXlzKHByby5wcm9kdWN0X21ldGFfZGF0YSl9PC9wPmA7XG4gICAgICAgICAgICAgICAgICAgIHByb191bml0X3ByaWNlICs9ICc8YnIgLz4nO1xuICAgICAgICAgICAgICAgICAgICBwcm9fcXVhbnRpdHkgICArPSAnPGJyIC8+JztcbiAgICAgICAgICAgICAgICAgICAgcHJvX3RvdGFsICAgICAgKz0gJzxiciAvPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggcHJvLnByb2R1Y3RfbWV0YV9kYXRhICkge1xuICAgICAgICAgICAgICAgICAgICBwcm9fbmFtZSAgICAgICArPSBgPHA+JHtPYmplY3QudmFsdWVzKHByby5wcm9kdWN0X21ldGFfZGF0YSl9PC9wPmA7XG4gICAgICAgICAgICAgICAgICAgIHByb191bml0X3ByaWNlICs9ICc8YnIgLz4nO1xuICAgICAgICAgICAgICAgICAgICBwcm9fcXVhbnRpdHkgICArPSAnPGJyIC8+JztcbiAgICAgICAgICAgICAgICAgICAgcHJvX3RvdGFsICAgICAgKz0gJzxiciAvPic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb3JkZXJfdGF4X2xpbmVzID0gb3JkZXIudGF4X2xpbmVzO1xuXG4gICAgICAgICAgICB0YXhfdGl0bGUgPSAnJztcbiAgICAgICAgICAgIG9yZGVyX3RheCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAob3JkZXJfdGF4X2xpbmVzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIG9yZGVyX3RheF9saW5lcy5mb3JFYWNoKCh0YXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGF4X3RpdGxlICs9IGA8cD4ke19fKCAnVGF4JywgJ3djX3BvcycgKX0oJHt0YXgudGl0bGV9KTwvcD5gO1xuICAgICAgICAgICAgICAgICAgICBvcmRlcl90YXggKz0gYDxwPiR7dGF4LnRvdGFsfTwvcD5gO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvdXBvbnMgPSBvcmRlci5jb3Vwb25zO1xuXG4gICAgICAgICAgICBjb3Vwb25fbmFtZSA9ICcnO1xuICAgICAgICAgICAgY291cG9uX2Ftb3VudCA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb3Vwb25zKS5mb3JFYWNoKCAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdXBvbl9uYW1lICs9IGA8cD4ke19fKCAnQ291cG9uJywgJ3djX3BvcycgKX0oJHtpfSk8L3A+YDtcbiAgICAgICAgICAgICAgICBjb3Vwb25fYW1vdW50ICs9IGA8cD4ke2NvdXBvbnNbaV19PC9wPmA7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggd2t3Y3Bvc0ludm9pY2VPYmouaW52b2ljZV9kYXRhLnBvc191c2VyICkge1xuICAgICAgICAgICAgcG9zX3VzZXJfZW1haWwgPSB3a3djcG9zSW52b2ljZU9iai5pbnZvaWNlX2RhdGEucG9zX3VzZXIuZGF0YS51c2VyX2VtYWlsO1xuICAgICAgICAgICAgY2FzaGllcl9uYW1lICAgPSB3a3djcG9zSW52b2ljZU9iai5pbnZvaWNlX2RhdGEucG9zX3VzZXIuZGF0YS5kaXNwbGF5X25hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW52b2ljZURhdGEgPSAnJztcblxuICAgICAgICBpZiAoIHdrd2Nwb3NJbnZvaWNlT2JqLmludm9pY2VfaHRtbCApIHtcbiAgICAgICAgICAgIGludm9pY2VEYXRhID0gd2t3Y3Bvc0ludm9pY2VPYmouaW52b2ljZV9odG1sO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpbnZvaWNlRGF0YSA9IGBcblxuICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBzZWNvbmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtaGVhZGVyLCAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtZm9vdGVyIC5mb290ZXItZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5pbnZvaWNlLWhlYWRlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLm9yZGVyLWRldGFpbHMsIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAub3V0bGV0LWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtZGV0YWlscyAub3JkZXItZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtZGV0YWlscyAub3V0bGV0LWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMgdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHRoLCAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0aCwgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMgdGFibGUgdGQgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0aGVhZCwgLndrd2Nwb3MtaW52b2ljZS13cmFwcGVyIC5wcm9kdWN0LWRldGFpbHMgdGFibGUgdGJvZHk6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweCAwIDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0Ym9keTpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgLnByb2R1Y3QtZGV0YWlscyB0YWJsZSB0Ym9keTpudGgtb2YtdHlwZSgyKSB0cjpsYXN0LWNoaWxkIHRkOm50aC1sYXN0LW9mLXR5cGUoMSksIC53a3djcG9zLWludm9pY2Utd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHRhYmxlIHRib2R5Om50aC1vZi10eXBlKDIpIHRyOmxhc3QtY2hpbGQgdGQ6bnRoLWxhc3Qtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXIgaHIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3a3djcG9zLWludm9pY2Utd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnZvaWNlLWhlYWRlciB3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+VGF4IEludm9pY2UvQmlsbCBvZiBTdXBwbHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9nb19pbnZvaWNlfVwiIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3V0bGV0X25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludm9pY2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPk9yZGVyIC0gJHtvcmRlcl9pZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5EYXRlIDogJHtvcmRlcl9kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkN1c3RvbWVyIDogJHtjdXN0b21lcl9mbmFtZX0gJHtjdXN0b21lcl9sbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRsZXQtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvdXRsZXRfYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke291dGxldF9jaXR5fSAke291dGxldF9zdGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5UZWwgTm86ICR7cG9zX3VzZXJfcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlByb2R1Y3QgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5Vbml0IFByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlF1YW50aXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPlRvdGFsIFByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtwcm9fbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtwcm9fdW5pdF9wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtwcm9fcXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7cHJvX3RvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+U3ViVG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtzdWJfdG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke3RheF90aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvcmRlcl90YXh9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5EaXNjb3VudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke29yZGVyX2Rpc2NvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtjb3Vwb25fbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtjb3Vwb25fYW1vdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvcmRlcl90b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkNhc2ggUGF5bWVudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj4ke2Nhc2hwYXlfYW1vdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+JHtvdGhlcl9wYXltZW50X3RleHR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3RoZXJwYXlfYW1vdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+Q2hhbmdlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3JkZXJfY2hhbmdlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnZvaWNlLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIj5DYXNoaWVyOiAke2Nhc2hpZXJfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPiR7b3V0bGV0X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+VGVsIE5vOiAke3Bvc191c2VyX3Bob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndrd2Nwb3MtaW52b2ljZS1lZGl0YWJsZVwiPkVtYWlsOiAke3Bvc191c2VyX2VtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJ3a3djcG9zLWludm9pY2UtZWRpdGFibGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2t3Y3Bvcy1pbnZvaWNlLWVkaXRhYmxlXCI+SGF2ZSBhIG5pY2UgZGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cblxuICAgICAgICBpbnZvaWNlRGF0YSA9IGV2YWwoJ2AnK2ludm9pY2VEYXRhKydgJyk7XG5cbiAgICAgICAgcmV0dXJuIGludm9pY2VEYXRhO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2t3Y3Bvcy1pbnZvaWNlLXdyYXBwZXItY29udGFpbmVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBnZXRJbnZvaWNlKCkgfX0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludm9pY2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5cdFJlYWN0RE9NLnJlbmRlcihcblx0XHQ8QXBwIC8+LFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3a3djcG9zLWludm9pY2UtZWRpdG9yLWFwcCcpXG5cdCk7XG5cbn0pOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wid3BcIl1bXCJlbGVtZW50XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wid3BcIl1bXCJob29rc1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIndwXCJdW1wiaTE4blwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==