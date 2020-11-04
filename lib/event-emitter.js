"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "dispatch",
    value: function dispatch(event, data) {
      if (!this.events[event]) return;
      this.events[event].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            callback = _ref2[0];

        return callback(data);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventString, callback, id) {
      var _this = this;

      var events = eventString.split(/[ ,]+/);
      events.forEach(function (e) {
        if (!_this.events[e]) _this.events[e] = [];

        _this.events[e].push([callback, id]);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventString, id) {
      var _this2 = this;

      var events = eventString.split(/[ ,]+/);
      events.forEach(function (e) {
        if (!_this2.events[e]) return;

        var rest = _this2.events[e].filter(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              eventId = _ref4[1];

          return eventId != id;
        });

        _this2.events[e] = rest;
      });
    }
  }]);

  return EventEmitter;
}();

var _default = new EventEmitter();

exports["default"] = _default;
//# sourceMappingURL=event-emitter.js.map