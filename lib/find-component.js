"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactImportedComponent = _interopRequireDefault(require("react-imported-component"));

var _navbar = _interopRequireDefault(require("./components/navbar"));

var _container = _interopRequireDefault(require("./components/container"));

var _hero = _interopRequireDefault(require("./components/hero"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _tableJexcel = _interopRequireDefault(require("./components/table-jexcel"));

var _grid = _interopRequireDefault(require("./components/grid"));

var _component = _interopRequireDefault(require("./components/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var path;

  switch (type) {
    case 'navbar':
      return _navbar["default"];

    case 'container':
      return _container["default"];

    case 'hero':
      return _hero["default"];

    case 'footer':
      return _footer["default"];

    case 'table-jexcel':
      return _tableJexcel["default"];

    case 'grid':
      return _grid["default"];

    default:
      path = type;
  }

  if (!path) return _component["default"];
  return (0, _reactImportedComponent["default"])(function () {
    // use the template string (`...`) because "import" function not working with variables
    return Promise.resolve("".concat(path)).then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }, {
    LoadingComponent: function LoadingComponent() {
      return 'loading';
    },
    ErrorComponent: function ErrorComponent() {
      return 'error';
    }
  });
};

exports["default"] = _default;
//# sourceMappingURL=find-component.js.map