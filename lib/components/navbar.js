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

var Navbar = /*#__PURE__*/function (_React$Component) {
  _inherits(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "id", _this.constructor.name + '-' + (0, _functions.randomS4)());

    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logo = _this$props.logo,
          logoHeight = _this$props.logoHeight,
          site = _this$props.site,
          menu = _this$props.menu,
          menuLeft = _this$props.menuLeft,
          menuRight = _this$props.menuRight,
          background = _this$props.background,
          textOverColor = _this$props.textOverColor,
          expand = _this$props.expand,
          menuPosition = _this$props.menuPosition,
          centeredLogo = _this$props.centeredLogo,
          shadow = _this$props.shadow;
      var className = ['navbar', 'navbar-' + textOverColor, background && 'bg-' + background, 'navbar-expand-' + expand, shadow && (typeof shadow === 'string' ? 'shadow-' + shadow : 'shadow')].filter(function (c) {
        return c;
      }).join(' ');

      var menuItemFunc = function menuItemFunc(item, i) {
        return item && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          key: i,
          to: item.path,
          className: "nav-link",
          exact: item.exact,
          activeClassName: "active"
        }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: item.icon,
          className: "mr-2"
        }), item.label);
      };

      var Logo = function Logo(_ref) {
        var hidden = _ref.hidden,
            visible = _ref.visible;
        if (!logo && !site) return null;
        var className = ['navbar-brand', visible && "m-0 d-none d-".concat(visible, "-block"), hidden && "d-".concat(hidden, "-none")].filter(function (c) {
          return c;
        }).join(' ');
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          className: className,
          to: "/"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: (0, _functions.assets)('images', logo),
          alt: site,
          height: logoHeight
        }), site);
      };

      return /*#__PURE__*/_react["default"].createElement("nav", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/_react["default"].createElement(Logo, {
        hidden: centeredLogo && expand
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": '#' + this.id
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "navbar-toggler-icon"
      })), centeredLogo ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "collapse navbar-collapse",
        id: this.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'navbar-nav col justify-content-center'
      }, menuLeft && menuLeft.map(menuItemFunc)), /*#__PURE__*/_react["default"].createElement(Logo, {
        visible: expand
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'navbar-nav col justify-content-center'
      }, menuRight && menuRight.map(menuItemFunc))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "collapse navbar-collapse",
        id: this.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'navbar-nav ' + (menuPosition === 'right' ? 'ml-auto' : '')
      }, menu && menu.map(menuItemFunc)))));
    }
  }]);

  return Navbar;
}(_react["default"].Component);

exports["default"] = Navbar;

_defineProperty(Navbar, "defaultProps", {
  background: false,
  textOverColor: 'light',
  //light|dark
  logoHeight: 30,
  expand: 'md',
  menuPosition: 'right',
  shadow: false,
  //sm,lg
  centeredLogo: false //center|between|around|evenly

});
//# sourceMappingURL=navbar.js.map