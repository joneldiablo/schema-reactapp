"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashRouterController = exports.BrowserRouterController = exports.RouterController = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRouterTransition = require("react-router-transition");

var _urlJoin = _interopRequireDefault(require("url-join"));

var _findComponent = _interopRequireDefault(require("./find-component"));

var _mapRoutes = _interopRequireDefault(require("./map-routes"));

var _template = _interopRequireDefault(require("./containers/template"));

var _page = _interopRequireDefault(require("./containers/page"));

var _section = _interopRequireDefault(require("./containers/section"));

var _transitions = _interopRequireDefault(require("./transitions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Controller = /*#__PURE__*/function (_React$Component) {
  _inherits(Controller, _React$Component);

  var _super = _createSuper(Controller);

  function Controller() {
    var _this;

    _classCallCheck(this, Controller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mapRoutes: (0, _mapRoutes["default"])(_this.props.schema.routes),
      allRoutes: _this.getRoutes(_this.props.schema.routes)
      /*
      modificar para usar la funcion de remplazo de referencias en todos lados, hacer que los objetos mezclen, usar elemento "ref" si es necesario....
      sections: this.resolveRefs(this.props.schema.sections),
      templates: this.resolveRefs(this.props.schema.templates),
      routes: this.resolveRefs(this.props.schema.routes),
      menus: this.resolveRefs(this.props.schema.menus),
      pages: this.resolveRefs(this.props.schema.pages), */

    });

    return _this;
  }

  _createClass(Controller, [{
    key: "resolveRefs",
    value: function resolveRefs(item) {
      var _this2 = this;

      if (Array.isArray(item)) {
        return item.map(function (a) {
          return _this2.resolveRefs(a);
        });
      } else if (_typeof(item) === 'object') {
        var toReturn = {};
        Object.keys(item).forEach(function (k) {
          if (k === 'ref') {
            Object.assign(toReturn, _this2.resolveRefs(item[k]));
            toReturn['id'] = item[k].substring(1).split('.').pop();
          } else if (k === 'attributes') {
            toReturn[k] = Object.assign(toReturn[k] || {}, _this2.resolveRefs(item[k]));
          } else toReturn[k] = _this2.resolveRefs(item[k]);
        });
        return toReturn;
      } else if (typeof item === 'string' && item[0] === '$') {
        var schema = this.props.schema;
        var keys = item.substring(1).split('.');
        var data = keys.reduce(function (obj, key) {
          return obj[key];
        }, schema);
        return this.resolveRefs(data);
      } else return item;
    }
  }, {
    key: "components",
    value: function components() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          type = _ref.type,
          from = _ref.from;

      //type name of componente which colud find with "findComponent", from is the path to component, is not working, some love here!!!
      return (0, _findComponent["default"])(type || from);
    }
  }, {
    key: "pages",
    value: function pages(pageId) {
      var _this3 = this;

      var page = this.resolveRefs(pageId) || [];
      var content = page.content;
      if (Array.isArray(page)) content = page;
      var ThisPage = this.props.Page;
      var ThisSection = this.props.Section;
      return /*#__PURE__*/_react["default"].createElement(ThisPage, page, content.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement(ThisSection, _extends({
          key: i
        }, item, {
          Component: _this3.components(item)
        }));
      }));
    }
  }, {
    key: "templates",
    value: function templates(templateId, children) {
      var _this4 = this;

      var template = this.resolveRefs(templateId) || [];
      var content = template.content;
      if (Array.isArray(template)) content = template;
      var ThisTemplate = this.props.Template;
      var ThisSection = this.props.Section;
      return /*#__PURE__*/_react["default"].createElement(ThisTemplate, template, content.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement(ThisSection, _extends({
          key: i
        }, item, {
          Component: _this4.components(item),
          children: children
        }));
      }));
    }
  }, {
    key: "getRoutes",
    value: function getRoutes(schema) {
      var _this5 = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
      var key = arguments.length > 2 ? arguments[2] : undefined;
      var type = Array.isArray(schema) ? 'array' : _typeof(schema);

      switch (type) {
        case 'array':
          {
            return schema.map(function (schemaItem, i) {
              return _this5.getRoutes(schemaItem, parent, i);
            });
          }

        case 'object':
          {
            var getThisPaths = function getThisPaths(thisRoutes) {
              return thisRoutes.map(function (r) {
                if (!r.path) return getThisPaths(r.children);

                if (Array.isArray(r.path)) {
                  return r.path.map(function (p) {
                    return (0, _urlJoin["default"])(parent, p);
                  });
                }

                return (0, _urlJoin["default"])(parent, r.path || '');
              });
            };

            var template = schema.template,
                content = schema.content,
                children = schema.children,
                path = schema.path,
                exact = schema.exact,
                transition = schema.transition;
            var absPath = Array.isArray(path) ? path.map(function (p) {
              return (0, _urlJoin["default"])(parent, p);
            }) : (0, _urlJoin["default"])(parent, path || '/');
            var props = {
              path: path ? absPath : getThisPaths(children).flat(),
              key: key,
              exact: exact
            };

            var childrenRoutes = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, content && this.pages(content), children && /*#__PURE__*/_react["default"].createElement(_reactRouterTransition.AnimatedSwitch, (0, _transitions["default"])(transition), this.getRoutes(children, absPath)));

            return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, props, template ? this.templates(template, childrenRoutes) : childrenRoutes);
          }

        default:
          throw 'Invalid type: ' + type;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.allRoutes;
    }
  }]);

  return Controller;
}(_react["default"].Component);

exports["default"] = Controller;

_defineProperty(Controller, "defaultProps", {
  schema: {
    routes: []
  },
  Template: _template["default"],
  Page: _page["default"],
  Section: _section["default"]
});

var RouterController = function RouterController(props) {
  var RController = (0, _reactRouterDom.withRouter)(Controller);
  return /*#__PURE__*/_react["default"].createElement(RController, props);
};

exports.RouterController = RouterController;

var BrowserRouterController = function BrowserRouterController(props) {
  var RController = (0, _reactRouterDom.withRouter)(Controller);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(RController, props));
};

exports.BrowserRouterController = BrowserRouterController;

var HashRouterController = function HashRouterController(props) {
  var RController = (0, _reactRouterDom.withRouter)(Controller);
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(RController, props));
};

exports.HashRouterController = HashRouterController;
//# sourceMappingURL=controller.js.map