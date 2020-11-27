"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assets = exports.setSchema = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = {
  domain: null,
  assets: {
    images: null,
    icons: null,
    files: null,
    fonts: null
  }
};

var setSchema = function setSchema(s) {
  schema = s;
};

exports.setSchema = setSchema;

var assets = function assets(type) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!schema) throw 'Schema is not defined. import setSchema first and pass the eschema as param';
  return (0, _urlJoin["default"])(schema.domain, schema.assets[type], value);
};

exports.assets = assets;
//# sourceMappingURL=schema-management.js.map