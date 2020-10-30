"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jexcel = _interopRequireDefault(require("jexcel"));

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

    _this.wrapper = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(TableJexcel, [{
    key: "updateTable",
    value: function updateTable(instance, cell, col, row, val, id) {
      if (col === 1) {
        cell.innerHTML = "<img src=\"".concat(val, "\" style=\"height: 40px; width:100%; object-fit: cover\">");
      }

      if (col === 6) {
        cell.innerHTML = val.label;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var w = this.wrapper.current.offsetWidth - 2;
      var opts = Object.assign({}, this.props.options, {
        updateTable: this.updateTable,
        tableWidth: w + 'px'
      });
      this.el = (0, _jexcel["default"])(this.wrapper.current, opts);
      setTimeout(function () {
        console.log(_this2.el.content);
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.wrapper
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("input", {
        type: "button",
        value: "Add new row",
        onClick: function onClick() {
          return _this3.addRow();
        }
      }));
    }
  }]);

  return TableJexcel;
}(_react["default"].Component);

exports["default"] = TableJexcel;

_defineProperty(TableJexcel, "defaultProps", {
  options: {
    url: 'https://my.api.mockaroo.com/products?key=30283510',
    //data: [[], [], [], [], []],
    freezeColumns: 2,
    nestedHeaders: [[{}, {
      title: 'Descripción del Producto o Servicio',
      colspan: 7
    }, {
      title: 'Datos de venta',
      colspan: 7
    }]],
    columns: [{
      name: 'available',
      title: 'Visible',
      type: 'checkbox',
      width: 60
    }, {
      name: 'img',
      title: 'Imagen',
      type: 'text',
      width: 120
    }, {
      name: 'gallery',
      title: 'Galería',
      type: 'text',
      width: 120
    }, {
      name: 'name',
      title: 'Nombre',
      type: 'text',
      width: 250
    }, {
      name: 'path',
      title: 'Ruta',
      type: 'text',
      width: 200
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
      name: 'id',
      title: 'ID',
      type: 'hidden'
    }, {
      name: 'categoryId',
      title: 'ID de categoría',
      type: 'hidden'
    }],
    tableOverflow: true,
    tableWidth: '900px'
  }
});
//# sourceMappingURL=table-jexcel.js.map