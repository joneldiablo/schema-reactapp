"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _functions = require("../functions");

var _icons = _interopRequireDefault(require("../icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Info = /*#__PURE__*/function (_React$Component) {
  _inherits(Info, _React$Component);

  var _super = _createSuper(Info);

  function Info() {
    var _this;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "style", {
      border: '1px solid ' + _this.props.borderColor,
      padding: '2px',
      margin: '2px'
    });

    _defineProperty(_assertThisInitialized(_this), "id", 'modal-' + (0, _functions.randomS4)());

    return _this;
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: this.style,
        className: "shadow-hover"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-sm btn-primary float-right rounded-circle",
        type: "button",
        "data-toggle": "modal",
        "data-target": '#' + this.id
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
        icon: "gear"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: this.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog modal-dialog-scrollable"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "modal-title"
      }, label), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn-close",
        "data-dismiss": "modal"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, Object.keys(this.props).filter(function (k) {
        return k !== 'children';
      }).map(function (k, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, k, ":", /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(_this2.props[k], null, 2)));
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-primary"
      }, "Save changes")))))), children);
    }
  }]);

  return Info;
}(_react["default"].Component);

exports["default"] = Info;

_defineProperty(Info, "defaultProps", {
  borderColor: 'black'
});
//# sourceMappingURL=info.js.map