"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _functions = require("../functions");

var _eventEmitter = _interopRequireDefault(require("../event-emitter"));

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

var NavCards = /*#__PURE__*/function (_React$Component) {
  _inherits(NavCards, _React$Component);

  var _super = _createSuper(NavCards);

  function NavCards() {
    var _this;

    _classCallCheck(this, NavCards);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rowCols: ' row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5'
    });

    _defineProperty(_assertThisInitialized(_this), "id", (0, _functions.randomS4)());

    _defineProperty(_assertThisInitialized(_this), "onResize", function (_ref) {
      var width = _ref.width;
      var rowCols = '';
      if (width >= 1400) //xxl
        rowCols = ' row-cols-5';else if (width >= 1200) //xl
        rowCols = ' row-cols-4';else if (width >= 768) //lg
        rowCols = ' row-cols-3'; //else if (width >= 992)//md
        //  rowCols = ' row-cols-3';
      else if (width >= 576) //sm
          rowCols = ' row-cols-2';else //xs
          rowCols = '';

      _this.setState({
        rowCols: rowCols
      });
    });

    return _this;
  }

  _createClass(NavCards, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var closestId = this.props.closestId;

      if (closestId) {
        _eventEmitter["default"].subscribe('resize-' + closestId, this.onResize, this.id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var closestId = this.props.closestId;

      if (closestId) {
        _eventEmitter["default"].unsubscribe('resize-' + closestId, this.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var menu = this.props.menu;
      var rowClassName = 'row g-3 ' + this.state.rowCols;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container-fluid p-4 nav-cards"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: rowClassName
      }, menu.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "",
          key: i
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "card h-100 shadow-hover"
        }, item.image ? /*#__PURE__*/_react["default"].createElement("img", {
          src: (0, _functions.assets)('images', item.image),
          className: "card-img",
          style: {
            opacity: .3,
            objectFit: 'cover',
            minHeight: 150
          }
        }) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "card-img",
          style: {
            minHeight: 150
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "card-img-overlay"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "card-body nav-card-body"
        }, /*#__PURE__*/_react["default"].createElement("h5", {
          className: "card-title nav-item"
        }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: item.icon,
          className: "mr-2"
        }), item.label, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
          icon: "chevron-right",
          className: "small float-right"
        }), /*#__PURE__*/_react["default"].createElement("hr", {
          className: "my-1"
        })), /*#__PURE__*/_react["default"].createElement("p", {
          className: "card-subtitle mb-2 text-muted"
        }, item.description), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: item.path,
          className: "stretched-link"
        })))));
      })));
    }
  }]);

  return NavCards;
}(_react["default"].Component);

exports["default"] = NavCards;

_defineProperty(NavCards, "defaultProps", {
  menu: []
});
//# sourceMappingURL=nav-cards.js.map