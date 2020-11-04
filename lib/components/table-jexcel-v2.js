"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _jexcel = _interopRequireDefault(require("jexcel"));

var _eventEmitter = _interopRequireDefault(require("../event-emitter"));

var _reactRouterDom2 = require("react-router-dom/cjs/react-router-dom.min");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/**
 * version de la tabla con su ruta de consulta de cada fila inmersa
 */
var TableJexcel = /*#__PURE__*/function (_React$Component) {
  _inherits(TableJexcel, _React$Component);

  var _super = _createSuper(TableJexcel);

  function TableJexcel(props) {
    var _this;

    _classCallCheck(this, TableJexcel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addRow", function () {
      _this.el.insertRow();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTable", function (instance, cell, col, row, val, id) {
      if (col === 0) {
        var el = _this.editRow(row);

        cell.appendChild(el);
      }

      if (col === 1) {
        if (!val) return;
        var img = "<img src=".concat(val, " style=\"height: 40px; width: 100%; object-fit: cover\" />");
        cell.innerHTML = img;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (_ref) {
      var width = _ref.width,
          height = _ref.height;
      if (!_this.table) return;

      var _this$table$getElemen = _this.table.getElementsByClassName('jexcel_content'),
          _this$table$getElemen2 = _slicedToArray(_this$table$getElemen, 1),
          j = _this$table$getElemen2[0];

      if (!j) return;
      j.style.width = width + 'px'; //j.style.maxHeight = height + 'px';
    });

    _defineProperty(_assertThisInitialized(_this), "nav", function (e) {
      e.preventDefault();

      _this.props.history.push('/catalogo/' + e.target.dataset.id);
    });

    _defineProperty(_assertThisInitialized(_this), "loadTable", function (ref) {
      if (!ref) {
        _eventEmitter["default"].unsubscribe('resize', 'TableJexcel');

        return;
      }

      _this.table = ref;
      var w = ref.offsetWidth - 2;
      var opts = Object.assign({}, _this.props.options, {
        freezeColumns: 1,
        tableOverflow: true,
        updateTable: _this.updateTable,
        tableWidth: w + 'px',
        lazyLoading: true
      });
      _this.el = (0, _jexcel["default"])(ref, opts);

      _eventEmitter["default"].subscribe('resize', _this.onResize, 'TableJexcel');
    });

    return _this;
  }

  _createClass(TableJexcel, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _eventEmitter["default"].unsubscribe('resize', 'TableJexcel');
    }
  }, {
    key: "editRow",
    value: function editRow(id) {
      var el = document.createElement('p');
      var anchor = document.createElement('a');
      anchor.innerHTML = 'ver elemento';
      anchor.addEventListener('click', this.nav);
      anchor.href = '#';
      anchor.dataset.id = id;
      el.appendChild(anchor);
      return el;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom2.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom2.Route, {
        path: '/catalogo/',
        exact: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.loadTable
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("input", {
        type: "button",
        value: "Add new row",
        onClick: function onClick() {
          return _this2.addRow();
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom2.Route, {
        path: '/catalogo/:id'
      }, " una ruta muy alocada!!!!")));
    }
  }]);

  return TableJexcel;
}(_react["default"].Component);

exports["default"] = TableJexcel;

_defineProperty(TableJexcel, "defaultProps", {
  options: {
    url: 'https://my.api.mockaroo.com/products.json?key=30283510',
    //data: [],
    nestedHeaders: [[{
      title: 'Descripción del Producto o Servicio',
      colspan: 5
    }, {
      title: 'Datos de venta',
      colspan: 7
    }]],
    columns: [{
      name: 'name',
      title: 'Nombre',
      type: 'text',
      width: 250
    }, {
      name: 'gallery',
      title: 'Galería',
      type: 'text',
      width: 120
    }, {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      width: 400
    }, {
      name: 'category',
      title: 'Categoría',
      type: 'text',
      width: 120
    }, {
      name: 'tags',
      title: 'Etiquetas',
      type: 'text',
      width: 120
    }, {
      name: 'price',
      title: 'Precio',
      type: 'numeric',
      width: 80
    }, {
      name: 'priceSale',
      title: 'Oferta',
      type: 'numeric',
      width: 80
    }, {
      name: 'unit',
      title: 'Unidad',
      type: 'text',
      width: 80
    }, {
      name: 'min',
      title: 'Mínimo',
      type: 'numeric',
      width: 80
    }, {
      name: 'max',
      title: 'Máximo',
      type: 'numeric',
      width: 80
    }, {
      name: 'step',
      title: 'Incremento',
      type: 'numeric',
      width: 100
    }, {
      name: 'discounts',
      title: 'Descuentos',
      type: 'text',
      width: 100
    }, {
      name: 'document',
      type: 'hidden'
    }]
  }
});
//# sourceMappingURL=table-jexcel-v2.js.map