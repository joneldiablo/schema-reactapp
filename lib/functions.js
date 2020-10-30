"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomS4 = void 0;

var randomS4 = function randomS4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};

exports.randomS4 = randomS4;
//# sourceMappingURL=functions.js.map