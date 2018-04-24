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

var _caseStudies = require('../../styles/caseStudies');

var _caseStudies2 = _interopRequireDefault(_caseStudies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var examples = [{
  type: 'image',
  src: '/static/case-studies/cover/cover-1.png'
}, {
  type: 'image',
  src: '/static/case-studies/cover/cover-2.png'
}, {
  type: 'image',
  src: '/static/case-studies/cover/cover-3.png'
}, {
  type: 'image',
  src: '/static/case-studies/cover/cover-4.png'
}, {
  type: 'image',
  src: '/static/case-studies/triple-byte/triple-byte-1.png'
}, {
  type: 'image',
  src: '/static/case-studies/triple-byte/triple-byte-3.png'
}, {
  type: 'image',
  src: '/static/case-studies/triple-byte/triple-byte-4.png'
}, {
  type: 'image',
  src: '/static/case-studies/Aptible/Aptible-sample-1.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Aptible/Aptible-sample-2.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Aptible/Aptible-sample-3.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Aptible/Aptible-sample-4.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Aptible/Aptible-sample-5.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/AllBirds/Facebook 1200x628 Copy 35.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/AllBirds/Facebook 1200x628 Copy 36.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Cleanly/Facebook 1200x628 Copy 35.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Fabric/Facebook 1200x628 Copy 20.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Fabric/Facebook 1200x628 Copy 21.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Harvest Daily/HD - sample 1.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Harvest Daily/HD - sample 2.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Harvest Daily/HD - sample 3.jpg'
}, {
  type: 'image',
  src: '/static/case-studies/Harvest Daily/HD - sample 4.jpg'
}];

var CaseStudiesComponent = function (_Component) {
  (0, _inherits3.default)(CaseStudiesComponent, _Component);

  function CaseStudiesComponent(props) {
    (0, _classCallCheck3.default)(this, CaseStudiesComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CaseStudiesComponent.__proto__ || (0, _getPrototypeOf2.default)(CaseStudiesComponent)).call(this, props));

    _this.startTimer = function () {
      _this._timer = setTimeout(function () {
        clearTimeout(_this._timer);

        var newExamples = _this.state.examples.slice();

        var sourceRandomIndex = Math.floor(Math.random() * examples.length);
        var randomIndex = Math.floor(Math.random() * 8);
        var isValid = true;

        if (examples[sourceRandomIndex].src !== newExamples[randomIndex].src) {
          for (var index = 0; index < 8; index++) {
            if (newExamples[index].src === examples[sourceRandomIndex].src) {
              isValid = false;
              break;
            }
          }

          if (isValid) {
            newExamples[randomIndex] = examples[sourceRandomIndex];
          }
        }

        _this.setState({
          examples: newExamples
        });

        _this.startTimer();
      }, 2000);
    };

    _this.state = {
      examples: examples
    };
    return _this;
  }

  (0, _createClass3.default)(CaseStudiesComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.startTimer();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var exmps = this.state.examples.slice(0, 8);

      return _react2.default.createElement('section', { id: 'case-studies', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, _react2.default.createElement('h2', {
        'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, 'High Quality, Performant Creative'), _react2.default.createElement('h3', { className: 'lead', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, 'Our network of designers are incentivized to produce performant creative. Below is a small snapshot of creative that\'s been through over $20M of spend over the past year alone.'), _react2.default.createElement('div', { className: 'grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, _react2.default.createElement('div', { className: 'col-7 grid', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }, exmps.map(function (example, index) {
        return _react2.default.createElement('div', { className: 'col-5 case-img-container', key: example.src, 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
        }, example.type === 'image' ? _react2.default.createElement('img', { src: example.src, 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
        }) : _react2.default.createElement('div', {
          'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
        }));
      })))), _react2.default.createElement('div', { id: 'case-studies-clip', 'data-jsx-ext': _sections2.default.__scopedHash + ' ' + _grid2.default.__scopedHash + ' ' + _caseStudies2.default.__scopedHash
      }), _react2.default.createElement(_style2.default, {
        styleId: _sections2.default.__scopedHash,
        css: _sections2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _grid2.default.__scopedHash,
        css: _grid2.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _caseStudies2.default.__scopedHash,
        css: _caseStudies2.default.__scoped
      }));
    }
  }]);

  return CaseStudiesComponent;
}(_react.Component);

exports.default = CaseStudiesComponent;