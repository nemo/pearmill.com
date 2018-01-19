'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slides = {
  agency: {
    title: "We are a growth and marketing studio, dedicated to paid aquistions. We live and work in NYC.",
    link: "https://agency.pearmill.com",
    cta_title: "Our Services"
  },
  creative: {
    title: "Automate your ad designs, on the back of expert designers who have spent $15M on Facebook alone.",
    link: "https://creative.pearmill.com",
    cta_title: "Learn More"
  },
  approver: {
    title: "The easiest way to get ad approvals from your clients. All in one place.",
    link: "https://approver.pearmill.com",
    cta_title: "Learn More"
  }
};

var keys = ['agency', 'creative', 'approver'];

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      key: 'agency',
      index: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var _this2 = this;

      clearTimeout(this._timer);

      this._timer = setTimeout(function () {
        var index = _this2.state.index >= keys.length - 1 ? 0 : _this2.state.index + 1;
        var key = keys[index];

        _this2.setState({
          index: index,
          key: key
        });

        _this2.refresh();
      }, 5000);
    }
  }, {
    key: 'onSwitch',
    value: function onSwitch(key) {
      var _this3 = this;

      return function (event) {
        event.preventDefault();

        _this3.setState({
          key: key,
          index: keys.indexOf(key)
        });

        _this3.refresh();
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var slide = slides[this.state.key];
      return _react2.default.createElement('div', {
        className: 'jsx-2919191268'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        className: 'jsx-2919191268'
      }, 'Pearmill \u2013\xA0a marketing studio.'), _react2.default.createElement('meta', { name: 'description', content: 'We\'re a marketing studio focused on paid aquistion. We run an agency and build products for marketers.', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { name: 'keywords', content: 'pearmill, marketing agency, facebook ads, google ads, SEO, search engine optimization', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { name: 'robots', content: 'index,follow', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { property: 'og:title', content: 'Pearmill\xA0\u2013 a marketing studio.', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { property: 'og:description', content: 'We\'re a marketing studio focused on paid aquistion. We run an agency and build products for marketers.', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { property: 'og:url', content: 'https://pearmill.com', className: 'jsx-2919191268'
      }), _react2.default.createElement('meta', { property: 'og:image', content: 'https://pearmill.com/static/images/logo-card.png', className: 'jsx-2919191268'
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,700', rel: 'stylesheet', className: 'jsx-2919191268'
      })), _react2.default.createElement('div', {
        className: 'jsx-2919191268' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-2919191268' + ' ' + 'header'
      }, _react2.default.createElement('img', { id: 'logo', src: '/static/images/logo.png', className: 'jsx-2919191268'
      }), _react2.default.createElement('h1', {
        className: 'jsx-2919191268'
      }, '\u2014 a marketing studio.'))), _react2.default.createElement('div', {
        className: 'jsx-2919191268' + ' ' + 'container lead'
      }, _react2.default.createElement('h2', {
        className: 'jsx-2919191268' + ' ' + 'lead'
      }, slide.title), _react2.default.createElement('a', { href: slide.link, className: 'jsx-2919191268' + ' ' + 'btn'
      }, slide.cta_title)), _react2.default.createElement('div', {
        className: 'jsx-2919191268' + ' ' + 'container row'
      }, _react2.default.createElement('a', { href: '#', onClick: this.onSwitch('agency'), className: 'jsx-2919191268' + ' ' + ('col ' + (this.state.key === 'agency' ? 'active' : ''))
      }, 'AGENCY'), _react2.default.createElement('a', { href: '#', onClick: this.onSwitch('creative'), className: 'jsx-2919191268' + ' ' + ('col ' + (this.state.key === 'creative' ? 'active' : ''))
      }, 'CREATIVE API'), _react2.default.createElement('a', { href: '#', onClick: this.onSwitch('approver'), className: 'jsx-2919191268' + ' ' + ('col ' + (this.state.key === 'approver' ? 'active' : ''))
      }, 'AD APPROVER')), _react2.default.createElement(_style2.default, {
        styleId: '2919191268',
        css: ['@font-face{font-family:\'Avenir Next\';src:url(\'/static/fonts/AvenirNext-Medium.woff2\') format(\'woff2\'), url(\'/static/fonts/AvenirNext-Medium.woff\') format(\'woff\');font-weight:500;font-style:normal;}', '@font-face{font-family:\'Avenir Next\';src:url(\'/static/fonts/AvenirNext-Heavy.woff2\') format(\'woff2\'), url(\'/static/fonts/AvenirNext-Heavy.woff\') format(\'woff\');font-weight:900;font-style:normal;}', 'html,body{width:100%;height:100%;margin:0;pading:0;color:white;background-color:#ec4957;font-family:\'Cormorant Garamond\',serif;font-size;16px;}', 'body *{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;box-sizing:border-box;}', '.container{width:1100px;margin:0 auto;}', '.header{padding-top:25px;}', '.header #logo{display:inline-block;}', '.header h1{display:inline-block;vertical-align:top;line-height:34px;padding:0px;font-size:2rem;margin:0px;}', '.lead{margin-top:12rem;text-align:center;font-size:4.5rem;line-height:5rem;margin-bottom:1rem;font-weight:bold;}', '.row{margin-top:6.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.col{-webkit-flex:0 0 33.3333333%;-ms-flex:0 0 33.3333333%;flex:0 0 33.3333333%;padding:5px;}', 'a.col{font-family:\'Avenir Next\';font-weight:500;text-align:center;color:white;text-decoration:none;font-size:1.25rem;}', 'a.col.active,a.col:hover{font-weight:900;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}', '.btn{padding:17px 30px;font-weight:bold;font-size:1.25rem;border:1px solid white;border-radius:40px;color:white;text-decoration:none;}', '@media (max-width:1010px){.container{width:100%;padding:0 15px;}}']
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;