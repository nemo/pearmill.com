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

var _pricing = require('../../styles/pricing');

var _pricing2 = _interopRequireDefault(_pricing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PricingComponent = function (_Component) {
  (0, _inherits3.default)(PricingComponent, _Component);

  function PricingComponent() {
    (0, _classCallCheck3.default)(this, PricingComponent);

    return (0, _possibleConstructorReturn3.default)(this, (PricingComponent.__proto__ || (0, _getPrototypeOf2.default)(PricingComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(PricingComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('section', { id: 'pricing', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h2', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Pricing'), _react2.default.createElement('h3', { className: 'lead', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Pay a very low, one-time fee up front to receive ad assets. For the ads that are performing well, a percentage of your spend will be paid as a royalty to our creators.')), _react2.default.createElement('div', { className: 'pricing', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h3', { className: 'plan-name', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Static-Image Ads'), _react2.default.createElement('div', { className: 'grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-get', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You provide:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any creative direction, brand guidelines, or restrictions.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any internal assets you\'d like used.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Information about specific audience that the creative will be used for.'), _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You\'ll receive:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x 2 unique sets of creatives for any ad unit.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x 3 variations of copy to use. (if ordered)'))), _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-pay', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('span', { className: 'price main', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$150')), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Plus ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '%2'), ' of ad-spend on the ads you receive from us, upto $500.', _react2.default.createElement('br', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }), 'Add ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$50'), ' if you need copywriting.')))))), _react2.default.createElement('div', { className: 'pricing', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h3', { className: 'plan-name', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Video Ad Edits'), _react2.default.createElement('div', { className: 'grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-get', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You provide:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Raw footage of shoots you\'ve done that are related to the ad.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any creative direction, brand guidelines, or restrictions.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any soundtrack you\'d like to use.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Information about specific audience that the creative will be used for.'), _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You\'ll receive:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Edited video ad based off of raw footage provided.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Music layered for video. (if ordered)'))), _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-pay', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('span', { className: 'price main', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$600')), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Plus ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '%2'), ' of ad-spend on the ads you receive from us, upto $800.', _react2.default.createElement('br', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }), 'Add ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$500'), ' if you need music.')))))), _react2.default.createElement('div', { className: 'pricing', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h3', { className: 'plan-name', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Animated Ads'), _react2.default.createElement('div', { className: 'grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-get', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You\'ll provide:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any creative direction, brand guidelines, or restrictions.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Any soundtrack you\'d like to use.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Information about specific audience that the creative will be used for.'), _react2.default.createElement('h4', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'You\'ll receive:'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Unique animated video.'), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'x Music layered for video. (if ordered)'))), _react2.default.createElement('div', { className: 'col-flex', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'what-you-pay', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, _react2.default.createElement('span', { className: 'price main', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$1,800')), _react2.default.createElement('p', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, 'Plus ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '%2'), ' of ad-spend on the ads you receive from us, upto $1,000.', _react2.default.createElement('br', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }), 'Add ', _react2.default.createElement('span', { className: 'price', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _pricing2.default.__scopedHash + ' ' + _grid2.default.__scopedHash
      }, '$500'), ' if you need music.')))))), _react2.default.createElement(_style2.default, {
        styleId: _sections2.default.__scopedHash,
        css: _sections2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _pricing2.default.__scopedHash,
        css: _pricing2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _grid2.default.__scopedHash,
        css: _grid2.default.__scoped
      }));
    }
  }]);

  return PricingComponent;
}(_react.Component);

exports.default = PricingComponent;