"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mapRoutes = function mapRoutes(schema) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var type = Array.isArray(schema) ? 'array' : _typeof(schema);
  var allPaths = {};

  switch (type) {
    case 'array':
      {
        schema.forEach(function (route) {
          Object.assign(allPaths, mapRoutes(route, parent));
        });
        break;
      }

    case 'object':
      {
        var content = schema.content,
            children = schema.children,
            path = schema.path;
        var url;

        if (Array.isArray(path)) {
          path.forEach(function (p) {
            url = (0, _urlJoin["default"])(parent, p);
            if (content) Object.assign(allPaths, mapRoutes(content, url));
          });
        } else {
          url = (0, _urlJoin["default"])(parent, path || '/');
          if (content) Object.assign(allPaths, mapRoutes(content, url));
        }

        if (children) Object.assign(allPaths, mapRoutes(children, url));
        break;
      }

    default:
      {
        allPaths = _defineProperty({}, parent, schema);
      }
  }

  return allPaths;
};

var _default = mapRoutes;
exports["default"] = _default;
//# sourceMappingURL=map-routes.js.map