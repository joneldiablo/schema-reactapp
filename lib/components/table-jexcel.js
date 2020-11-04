"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jexcel = _interopRequireDefault(require("jexcel"));

var _eventEmitter = _interopRequireDefault(require("../event-emitter"));

var _icons = _interopRequireDefault(require("../icons"));

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

var TableJexcel = /*#__PURE__*/function (_React$Component) {
  _inherits(TableJexcel, _React$Component);

  var _super = _createSuper(TableJexcel);

  function TableJexcel(props) {
    var _this;

    _classCallCheck(this, TableJexcel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addRow", function () {
      _this.jexcel.insertRow();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTable", function (tableInstance, cell, col, row, val, id) {
      if (col === 0) {
        _this.rowRenderActions(cell, row, val);
      }

      if (col === 2) {
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

    _defineProperty(_assertThisInitialized(_this), "rowGotoEdit", function (e, id) {
      e.preventDefault();
      console.log(id);

      _this.props.history.push('/catalogo/' + id);
    });

    _defineProperty(_assertThisInitialized(_this), "rowOpenView", function (e, id) {
      e.preventDefault();
      window.open('https://google.com', '_blank');
    });

    _defineProperty(_assertThisInitialized(_this), "rowDelete", function (e) {
      e.preventDefault();

      _this.jexcel.deleteRow();
    });

    _this.tableRef = new _react["default"].createRef();
    var pathname = props.location.pathname;
    _this.instance = pathname + _this.constructor.name;
    return _this;
  }

  _createClass(TableJexcel, [{
    key: "loadTable",
    value: function loadTable() {
      var w = this.table.offsetWidth - 2;
      var opts = {
        url: this.props.url,
        nestedHeaders: this.props.nestedHeaders,
        columns: this.props.columns,
        freezeColumns: 2,
        tableOverflow: true,
        updateTable: this.updateTable,
        tableWidth: w + 'px',
        lazyLoading: true
      };
      this.jexcel = (0, _jexcel["default"])(this.table, opts);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.table = this.tableRef.current;
      this.loadTable();

      _eventEmitter["default"].subscribe('resize-' + this.props.closestId, this.onResize, this.instance);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _eventEmitter["default"].unsubscribe('resize-' + this.props.closestId, this.instance);
    }
  }, {
    key: "rowRenderActions",
    value: function rowRenderActions(cell, row, val) {
      var _this2 = this;

      var rowData = this.jexcel.getRowData(row);
      var div = document.createElement('div');

      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", null, val, /*#__PURE__*/_react["default"].createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this2.rowOpenView(e, rowData[0]);
        },
        className: "link-info"
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
        icon: "eye",
        className: "mr-2"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this2.rowGotoEdit(e, rowData[0]);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
        icon: "pencil-square-o",
        className: "mr-2"
      })), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this2.rowDelete(e);
        },
        className: "link-danger"
      }, /*#__PURE__*/_react["default"].createElement(_icons["default"], {
        icon: "trash"
      })))), div);

      cell.innerHTML = null;
      cell.appendChild(div);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.tableRef
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
  url: '',
  nestedHeaders: null,
  columns: null
});
//# sourceMappingURL=table-jexcel.js.map