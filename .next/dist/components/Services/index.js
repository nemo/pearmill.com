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

var _sections = require('../../styles/sections');

var _sections2 = _interopRequireDefault(_sections);

var _grid = require('../../styles/grid');

var _grid2 = _interopRequireDefault(_grid);

var _services = require('../../styles/services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesComponent = function (_Component) {
  (0, _inherits3.default)(ServicesComponent, _Component);

  function ServicesComponent(props) {
    (0, _classCallCheck3.default)(this, ServicesComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ServicesComponent.__proto__ || (0, _getPrototypeOf2.default)(ServicesComponent)).call(this, props));

    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  (0, _createClass3.default)(ServicesComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('section', { id: 'work', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { id: 'work-clip', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }), _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'grid services', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'col-5 service-grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'service-title', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h2', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '1.'), _react2.default.createElement('h3', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Creative Brief')), _react2.default.createElement('div', { className: 'service', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You submit a video and text-based creative brief describing the campaign you\u2019d like to run, who you\u2019re targeting and what its goals are.')), _react2.default.createElement('div', { className: 'service', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'It\u2019ll be fluid and we\u2019ll ask you lots of questions about your brand, what it stands for, and any restrictions or inspirations you\u2019d like to convey.'))), _react2.default.createElement('div', { className: 'col-5 service-grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'service-title', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h2', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '2.'), _react2.default.createElement('h3', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Receive Ads & Assets')), _react2.default.createElement('div', { className: 'service', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'We\u2019ll automatically upload the assets and ads to the appropriate platforms, so you can start using them right away!'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _services2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'We\u2019ll also track their progress and performance when you start allocating budget towards them.'))))), _react2.default.createElement(_style2.default, {
        styleId: _sections2.default.__scopedHash,
        css: _sections2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _services2.default.__scopedHash,
        css: _services2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _grid2.default.__scopedHash,
        css: _grid2.default.__scoped
      }));
    }
  }]);

  return ServicesComponent;
}(_react.Component);

exports.default = ServicesComponent;