'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../../styles/header');

var _header2 = _interopRequireDefault(_header);

var _button = require('../../styles/button');

var _button2 = _interopRequireDefault(_button);

var _scrollToElement = require('scroll-to-element');

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderComponent = function (_Component) {
  (0, _inherits3.default)(HeaderComponent, _Component);

  function HeaderComponent(props) {
    (0, _classCallCheck3.default)(this, HeaderComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderComponent.__proto__ || (0, _getPrototypeOf2.default)(HeaderComponent)).call(this, props));

    _this.state = {
      text: '',
      loopNum: 0
    };
    return _this;
  }

  (0, _createClass3.default)(HeaderComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (function () {
        var qs,
            js,
            q,
            s,
            d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = "typef_orm_share",
            b = "https://embed.typeform.com/";if (!gi.call(d, id)) {
          js = ce.call(d, "script");js.id = id;js.src = b + "embed.js";q = gt.call(d, "script")[0];q.parentNode.insertBefore(js, q);
        }
      })();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'scroll',
    value: function scroll(event) {
      event.preventDefault();
      var href = (event.target.href || '').split('#')[1];

      console.log('href', href);

      (0, _scrollToElement2.default)('#' + href, {
        align: 'middle'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var text = this.state.text;

      return _react2.default.createElement('header', { id: 'header', 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('h1', { id: 'logo', 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Pearmill'), _react2.default.createElement('ul', {
        'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('li', {
        'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('a', { href: '#work', onClick: this.scroll, 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'How It Works')), _react2.default.createElement('li', {
        'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('a', { href: '#case-studies', onClick: this.scroll, 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Examples')), _react2.default.createElement('li', {
        'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('a', { className: 'typeform-share', href: 'https://paidgrowth.typeform.com/to/wxdzCL', 'data-jsx-ext': _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Get Started'))), children), _react2.default.createElement(_style2.default, {
        styleId: _header2.default.__scopedHash,
        css: _header2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _button2.default.__scopedHash,
        css: _button2.default.__scoped
      }));
    }
  }]);

  return HeaderComponent;
}(_react.Component);

exports.default = HeaderComponent;