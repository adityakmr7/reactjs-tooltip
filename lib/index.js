"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es6.object.set-prototype-of.js");

require("core-js/modules/es6.object.get-prototype-of.js");

require("core-js/modules/es6.reflect.construct.js");

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToolTip = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolTip, _React$Component);

  var _super = _createSuper(ToolTip);

  function ToolTip(props) {
    var _this;

    _classCallCheck(this, ToolTip);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "showToolTip", function () {
      _this.setState({
        active: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideToolTip", function () {
      _this.setState({
        active: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderId", "react-tooltip-content");

    _defineProperty(_assertThisInitialized(_this), "renderTooltip", function () {
      var render = _this.props.render;

      if (_this.state.active) {
        var _this$sourceRef$curre = _this.sourceRef.current.getBoundingClientRect(),
            top = _this$sourceRef$curre.top,
            left = _this$sourceRef$curre.left,
            width = _this$sourceRef$curre.width;

        return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
          style: {
            position: 'absolute',
            bottom: window.innerHeight - top + 23 - window.screenY,
            left: left + width / 2 + window.screenX
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          id: _this.renderId,
          style: {
            position: 'relative',
            background: _this.props.color,
            color: _this.props.textColor,
            padding: '8px 16px',
            borderRadius: '5px',
            left: '-50%'
          }
        }, render, /*#__PURE__*/_react.default.createElement("span", {
          style: {
            position: 'absolute',
            bottom: -10,
            left: 'calc(50% - 5px)',
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: "".concat(_this.props.color, " transparent transparent transparent")
          }
        }))), _this.domNode);
      }

      return null;
    });

    var id = "react-tooltip";
    _this.domNode = document.querySelector("#".concat(id));

    if (!_this.domNode) {
      _this.domNode = document.createElement('div');

      _this.domNode.setAttribute('id', id);

      document.body.appendChild(_this.domNode);
    }

    _this.state = {
      active: false
    };
    _this.sourceRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(ToolTip, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var source = /*#__PURE__*/_react.default.createElement("span", {
        key: "0",
        onMouseEnter: this.showToolTip,
        onMouseLeave: this.hideToolTip,
        onFocus: this.showToolTip,
        onBlur: this.hideToolTip,
        ref: this.sourceRef,
        tabIndex: "0",
        role: "button",
        "aria-describedby": this.renderId
      }, children);

      return [source, this.renderTooltip()];
    }
  }]);

  return ToolTip;
}(_react.default.Component);

ToolTip.propTypes = {
  /** Wrapped content */
  children: _propTypes.node.isRequired,
  render: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]).isRequired,
  color: _propTypes.string,
  textColor: _propTypes.string
};
ToolTip.defaultProps = {
  color: '#424242',
  textColor: '#ffffff'
};
var _default = ToolTip;
exports.default = _default;