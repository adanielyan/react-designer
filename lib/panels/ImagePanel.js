"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Panel2 = require("./Panel");

var _Panel3 = _interopRequireDefault(_Panel2);

var _PropertyGroup = require("./PropertyGroup");

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Columns = require("./Columns");

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require("./Column");

var _Column2 = _interopRequireDefault(_Column);

var _reactDropzone = require("react-dropzone");

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagePanel = function (_Panel) {
  _inherits(ImagePanel, _Panel);

  function ImagePanel() {
    _classCallCheck(this, ImagePanel);

    return _possibleConstructorReturn(this, (ImagePanel.__proto__ || Object.getPrototypeOf(ImagePanel)).apply(this, arguments));
  }

  _createClass(ImagePanel, [{
    key: "onDrop",
    value: function onDrop(acceptedFiles) {
      if (acceptedFiles.length == 0) {
        return;
      }

      var file = acceptedFiles[0];
      var fr = new FileReader();

      var setImage = function (e) {
        this.props.onChange("xlinkHref", e.target.result);
      }.bind(this);
      fr.onload = setImage;
      fr.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        { object: object, showIf: (0, _lodash.has)(object, "xlinkHref") },
        _react2.default.createElement(
          _Columns2.default,
          { label: "Image" },
          _react2.default.createElement(
            _Column2.default,
            null,
            _react2.default.createElement(
              _reactDropzone2.default,
              {
                accept: "image/*",
                onDrop: this.onDrop.bind(this),
                multiple: false,
                style: {
                  float: "left",
                  marginRight: "3px",
                  padding: "3px",
                  border: "1px solid gray",
                  color: "gray",
                  borderRadius: "3px",
                  width: "100px",
                  textAlign: "center"
                },
                activeStyle: {
                  border: "1px solid blue",
                  backgroundColor: "white",
                  color: "black"
                }
              },
              _react2.default.createElement(
                "div",
                null,
                "drop new file"
              )
            )
          )
        )
      );
    }
  }]);

  return ImagePanel;
}(_Panel3.default);

exports.default = ImagePanel;