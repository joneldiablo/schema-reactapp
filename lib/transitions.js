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
    mapStyles: function mapStyles(_ref) {
      var offset = _ref.offset,
          opacity = _ref.opacity;
      return {
        transform: offset != 0 ? "translateX(".concat(offset, "%)") : null,
        opacity: opacity
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
    mapStyles: function mapStyles(styles) {
      return {
        transform: styles.offset != 0 ? "translateX(".concat(styles.offset, "%)") : null,
        opacity: styles.opacity
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
    mapStyles: function mapStyles(styles) {
      return {
        transform: styles.offset != 0 ? "translateY(".concat(styles.offset, "%)") : null,
        opacity: styles.opacity
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
    mapStyles: function mapStyles(styles) {
      return {
        transform: styles.offset != 0 ? "translateY(".concat(styles.offset, "%)") : null,
        opacity: styles.opacity
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