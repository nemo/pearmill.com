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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Services = require('../components/Services');

var _Services2 = _interopRequireDefault(_Services);

var _CaseStudies = require('../components/CaseStudies');

var _CaseStudies2 = _interopRequireDefault(_CaseStudies);

var _Clients = require('../components/Clients');

var _Clients2 = _interopRequireDefault(_Clients);

var _Pricing = require('../components/Pricing');

var _Pricing2 = _interopRequireDefault(_Pricing);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _global = require('../styles/global');

var _global2 = _interopRequireDefault(_global);

var _sections = require('../styles/sections');

var _sections2 = _interopRequireDefault(_sections);

var _header = require('../styles/header');

var _header2 = _interopRequireDefault(_header);

var _button = require('../styles/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CSS

// Components
var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Pearmill \u2013\xA0Quality Ad Creative at Scale'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('meta', { property: 'og:title', content: 'Pearmill\xA0\u2013 Quality Ad Creative at Scale', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('meta', { property: 'og:description', content: 'Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform.', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('meta', { property: 'og:url', content: 'https://pearmill.com', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('meta', { property: 'og:image', content: 'https://pearmill.com/static/logo-card.png', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: 'https://pearmill.com/static/favicon.ico', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      })), _react2.default.createElement(_Header2.default, null, _react2.default.createElement('h1', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Animation, Video, and Image ad creative at scale.'), _react2.default.createElement('h2', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform.'), _react2.default.createElement('div', { id: 'cta', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, _react2.default.createElement('a', { className: 'typeform-share btn white', href: 'https://paidgrowth.typeform.com/to/wxdzCL', 'data-mode': 'popup', 'data-hide-headers': 'true', 'data-hide-footer': 'true', target: '_blank', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'Get Started'), _react2.default.createElement('a', { href: '#examples', onClick: this.scroll, className: 'btn', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _header2.default.__scopedHash + ' ' + _button2.default.__scopedHash
      }, 'See Examples'))), _react2.default.createElement(_Clients2.default, null), _react2.default.createElement(_Services2.default, null), _react2.default.createElement(_Pricing2.default, null), _react2.default.createElement(_CaseStudies2.default, null), _react2.default.createElement(_Footer2.default, null), _react2.default.createElement(_style2.default, {
        styleId: _global2.default.__hash,
        css: _global2.default
      }), _react2.default.createElement(_style2.default, {
        styleId: _sections2.default.__scopedHash,
        css: _sections2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _header2.default.__scopedHash,
        css: _header2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _button2.default.__scopedHash,
        css: _button2.default.__scoped
      }));
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;