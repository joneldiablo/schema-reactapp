"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _urlJoin = _interopRequireDefault(require("url-join"));

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

var NavService = /*#__PURE__*/function (_React$Component) {
  _inherits(NavService, _React$Component);

  var _super = _createSuper(NavService);

  function NavService(props) {
    var _this;

    _classCallCheck(this, NavService);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      menu: [],
      stick: false,
      icon: 'chevron-right'
    });

    _defineProperty(_assertThisInitialized(_this), "stick", function (e) {
      _this.setState({
        stick: !_this.state.stick,
        icon: _this.state.stick ? 'chevron-right' : 'thumb-tack'
      });
    });

    var pathname = _this.props.location.pathname;
    var rex = pathname.substr(pathname.lastIndexOf('/')) + '$';
    _this.path = pathname.replace(new RegExp(rex), '');
    return _this;
  }

  _createClass(NavService, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      fetch(this.props.url).then(function (r) {
        return r.json();
      }).then(function (payload) {
        _this2.setState({
          menu: payload
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          iconDefault = _this$props.iconDefault,
          iconSize = _this$props.iconSize,
          iconFrom = _this$props.iconFrom,
          labelFrom = _this$props.labelFrom,
          pathFrom = _this$props.pathFrom;
      var _this$state = this.state,
          menu = _this$state.menu,
          stick = _this$state.stick,
          icon = _this$state.icon;
      var className = 'nav flex-column nav-side ' + (stick ? 'stick' : '');
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-link clearfix px-0"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: iconSize,
          height: iconSize
        },
        className: "d-flex justify-content-end align-items-center float-right"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "wrap-collapse-arrow",
        style: {
          cursor: 'pointer'
        },
        onClick: this.stick
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
        icon: icon,
        className: "collapse-arrow"
      }))))), Array.isArray(menu) && menu.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "nav-item",
          key: i
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          to: (0, _urlJoin["default"])(_this3.path, item[pathFrom] + ''),
          className: "nav-link",
          activeClassName: "active"
        }, item[iconFrom] ? /*#__PURE__*/_react["default"].createElement("img", {
          src: item[iconFrom],
          width: iconSize,
          height: iconSize,
          style: {
            objectFit: 'cover'
          }
        }) : /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: iconDefault,
          inline: false,
          width: iconSize,
          height: iconSize
        }), /*#__PURE__*/_react["default"].createElement("span", {
          className: "text-collapse text-nowrap"
        }, item[labelFrom])));
      }));
    }
  }]);

  return NavService;
}(_react["default"].Component);

exports["default"] = NavService;

_defineProperty(NavService, "defaultProps", {
  url: '',
  iconSize: 40,
  iconDefault: 'image',
  iconFrom: 'icon',
  labelFrom: 'label',
  pathFrom: 'id'
});
//# sourceMappingURL=nav-service.js.map