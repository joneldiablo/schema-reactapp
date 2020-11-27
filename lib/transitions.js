"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var transitions = {
  fade: {
    atEnter: {
      opacity: 0
    },
    atLeave: {
      opacity: 0
    },
    atActive: {
      opacity: 1
    },
    mapStyles: function mapStyles(_ref) {
      var opacity = _ref.opacity;
      return {
        opacity: opacity != 1 ? opacity : null
      };
    }
  },
  slideRight: {
    atEnter: {
      offset: -100,
      opacity: 0
    },
    atLeave: {
      offset: 100,
      opacity: 0
    },
    atActive: {
      offset: 0,
      opacity: 1
    },
    mapStyles: function mapStyles(_ref2) {
      var offset = _ref2.offset,
          opacity = _ref2.opacity;
      return {
        transform: offset != 0 ? "translateX(".concat(offset, "%)") : null,
        opacity: opacity != 1 ? opacity : null,
        display: opacity === 1 ? 'block' : null
      };
    }
  },
  slideLeft: {
    atEnter: {
      offset: 100,
      opacity: 0
    },
    atLeave: {
      offset: -100,
      opacity: 0
    },
    atActive: {
      offset: 0,
      opacity: 1
    },
    mapStyles: function mapStyles(_ref3) {
      var offset = _ref3.offset,
          opacity = _ref3.opacity;
      return {
        transform: offset != 0 ? "translateX(".concat(offset, "%)") : null,
        opacity: opacity != 1 ? opacity : null,
        display: opacity === 1 ? 'block' : null
      };
    }
  },
  slideTop: {
    atEnter: {
      offset: 100,
      opacity: 0
    },
    atLeave: {
      offset: -100,
      opacity: 0
    },
    atActive: {
      offset: 0,
      opacity: 1
    },
    mapStyles: function mapStyles(_ref4) {
      var offset = _ref4.offset,
          opacity = _ref4.opacity;
      return {
        transform: offset != 0 ? "translateY(".concat(offset, "%)") : null,
        opacity: opacity != 1 ? opacity : null,
        display: opacity === 1 ? 'block' : null
      };
    }
  },
  slideBottom: {
    atEnter: {
      offset: -100,
      opacity: 0
    },
    atLeave: {
      offset: 100,
      opacity: 0
    },
    atActive: {
      offset: 0,
      opacity: 1
    },
    mapStyles: function mapStyles(_ref5) {
      var offset = _ref5.offset,
          opacity = _ref5.opacity;
      return {
        transform: offset != 0 ? "translateY(".concat(offset, "%)") : null,
        opacity: opacity != 1 ? opacity : null,
        display: opacity === 1 ? 'block' : null
      };
    }
  }
};

var _default = function _default(transition) {
  var toReturn = Object.assign({
    runOnMount: true,
    className: 'route-wrapper'
  }, transitions[transition] || transitions.fade);
  return toReturn;
};

exports["default"] = _default;
//# sourceMappingURL=transitions.js.map