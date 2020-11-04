"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

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

var NavListCards = /*#__PURE__*/function (_React$Component) {
  _inherits(NavListCards, _React$Component);

  var _super = _createSuper(NavListCards);

  function NavListCards() {
    var _this;

    _classCallCheck(this, NavListCards);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      type: 'list'
    });

    return _this;
  }

  _createClass(NavListCards, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return this.state.type === 'list' ? this.asList : this.asCards;
    }
  }, {
    key: "asCards",
    get: function get() {
      var menu = this.props.menu;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid p-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row gx-3"
      }, menu.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "col-12 col-sm-auto",
          key: i
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "card",
          style: {
            backgroundImage: "url(".concat((0, _functions.assets)('images', item.image), ")")
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/_react["default"].createElement("h5", {
          className: "card-title nav-item"
        }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: item.icon,
          className: "mr-2"
        }), item.label, /*#__PURE__*/_react["default"].createElement("hr", {
          className: "my-1"
        })), /*#__PURE__*/_react["default"].createElement("p", {
          className: "card-subtitle mb-2 text-muted"
        }, item.description), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: item.path,
          className: "stretched-link"
        }))));
      })));
    }
  }, {
    key: "asList",
    get: function get() {
      var menu = this.props.menu;
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "list-group list-group-flush"
      }, menu.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: "list-group-item"
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: item.path,
          className: "list-group-item-action text-decoration-none"
        }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: item.icon,
          className: "mr-2"
        }), item.label, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: "chevron-right",
          className: "float-right small"
        })));
      }));
    }
  }]);

  return NavListCards;
}(_react["default"].Component);

exports["default"] = NavListCards;

_defineProperty(NavListCards, "defaultProps", {
  menu: []
});
//# sourceMappingURL=nav-list-cards.js.map