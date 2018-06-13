webpackHotUpdate(5,{

/***/ "./components/Pricing/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__ = __webpack_require__("./node_modules/rc-slider/lib/Slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_sections__ = __webpack_require__("./styles/sections.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_grid__ = __webpack_require__("./styles/grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_button__ = __webpack_require__("./styles/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_pricing__ = __webpack_require__("./styles/pricing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_slider_assets_index_css__ = __webpack_require__("./node_modules/rc-slider/assets/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_slider_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rc_slider_assets_index_css__);
var _jsxFileName = "/Users/nimagardideh/Documents/workspace/pear/pearmill.com/components/Pricing/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components

 // CSS







var imageRewardPrice = 500;
var videoRewardPrice = 1000;
var animationRewardPrice = 2000;

var PricingComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PricingComponent, _Component);

  function PricingComponent(props) {
    var _this;

    _classCallCheck(this, PricingComponent);

    _this = _possibleConstructorReturn(this, (PricingComponent.__proto__ || Object.getPrototypeOf(PricingComponent)).call(this, props));
    var imageRanges = {
      0: 0,
      5: {
        label: 5,
        style: {
          color: __WEBPACK_IMPORTED_MODULE_3__styles_variables__["e" /* primaryColor */]
        }
      },
      15: {
        label: 15,
        style: {
          color: __WEBPACK_IMPORTED_MODULE_3__styles_variables__["e" /* primaryColor */]
        }
      },
      30: {
        label: 30,
        style: {
          color: __WEBPACK_IMPORTED_MODULE_3__styles_variables__["e" /* primaryColor */]
        }
      }
    };
    var videoRanges = {
      0: 0,
      5: {
        label: 5,
        style: {
          color: __WEBPACK_IMPORTED_MODULE_3__styles_variables__["e" /* primaryColor */]
        }
      },
      15: {
        label: 15,
        style: {
          color: __WEBPACK_IMPORTED_MODULE_3__styles_variables__["e" /* primaryColor */]
        }
      }
    };
    _this.state = {
      sliders: {
        images: 2,
        videos: 1,
        animations: 1
      },
      ranges: {
        images: imageRanges,
        videos: videoRanges,
        animations: Object.assign({}, videoRanges)
      }
    };
    return _this;
  }

  _createClass(PricingComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {}
  }, {
    key: "onSliderChange",
    value: function onSliderChange(type) {
      var _this2 = this;

      return function (value) {
        _this2.setState({
          sliders: _objectSpread({}, _this2.state.sliders, _defineProperty({}, type, value))
        });
      };
    }
  }, {
    key: "pricePerCreative",
    value: function pricePerCreative(type) {
      var sliders = this.state.sliders;

      switch (type) {
        case 'images':
          if (sliders.images == 0) return 0;else if (sliders.images < 5) return 75;else if (sliders.images < 15) return 71.25;else if (sliders.images < 30) return 69;else if (sliders.images >= 30) return 67.50;

        case 'videos':
          if (sliders.videos == 0) return 0;else if (sliders.videos < 5) return 600;else if (sliders.videos < 15) return 570;else if (sliders.videos >= 15) return 540;

        case 'animations':
          if (sliders.animations == 0) return 0;else if (sliders.animations < 5) return 1800;else if (sliders.animations < 15) return 1710;else if (sliders.animations >= 15) return 1620;

        default:
          return 0;
      }
    }
  }, {
    key: "monthlyPrice",
    value: function monthlyPrice() {
      var sliders = this.state.sliders;
      var imagePrice = sliders.images * this.pricePerCreative('images');
      var videoPrice = sliders.videos * this.pricePerCreative('videos');
      var animationsPrice = sliders.animations * this.pricePerCreative('animations');
      return imagePrice + videoPrice + animationsPrice;
    }
  }, {
    key: "maxRewardPrice",
    value: function maxRewardPrice() {
      var sliders = this.state.sliders;
      var imagePrice = sliders.images * imageRewardPrice;
      var videoPrice = sliders.videos * videoRewardPrice;
      var animationPrice = sliders.animations * animationRewardPrice;
      return imagePrice + videoPrice + animationPrice;
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          sliders = _state.sliders,
          ranges = _state.ranges;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        id: "pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "BYOP \u2013\xA0Build Your Own Plan"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'lead'
      }, "Receive the assets with an initial monthly subscription. If the assets perform well, a bonus will be paid out to our creators. Bonuses  help our creators learn how their work performs - and incentivizes higher quality work.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'pricing'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'lead'
      }, "Choose how many assets you need a month:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid pricing-header'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-5'
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
      }, "# of Creatives"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
      }, "Price / Creative", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }), "(monthly)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
      }, "Max Reward", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }), "(for performance)")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Static-Image Ads"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Image ads, story or carousel ads optimzied for conversion for all major platforms.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
        min: 0,
        max: 30,
        marks: ranges.images,
        value: sliders.images,
        onChange: this.onSliderChange('images'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You provide:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.images > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x ", sliders.images, " unique set(s) of creatives for any ad unit.")) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, sliders.images, "x"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('images').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, imageRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Video Ad Edits"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Video ads, cut from raw-footage you provide, optomized for conversion.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
        min: 0,
        max: 15,
        marks: ranges.videos,
        value: sliders.videos,
        onChange: this.onSliderChange('videos'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You provide:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.videos > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x ", sliders.videos, " unique set(s) of creatives for any ad unit.")) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, sliders.videos, "x"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('videos').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, videoRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Animated Ads"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Animations (videos), uniquely produced and optimized for conversion. All major platforms supported.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_slider_lib_Slider___default.a, {
        min: 0,
        max: 15,
        marks: ranges.animations,
        value: sliders.animations,
        onChange: this.onSliderChange('animations'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You provide:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.animations > 0 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "x ", sliders.animations, " unique set(s) of creatives for any ad unit.")) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, sliders.animations, "x"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('animations').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, animationRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid sub-total sub-total-header'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-flex plan-name'
      }, "Total")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid sub-total'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Monthly Price")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.monthlyPrice().toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-3 description'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "Charged on a monthly basis, this covers the cost of production for our creators.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'grid sub-total'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Maximum Reward")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.maxRewardPrice().toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-3 description'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "Maximum reward, calculated as 2% of ad-spend on approved creative. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash)
      }, "This is on top of the monthly price."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + 'btn-container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://paidgrowth.typeform.com/to/wxdzCL",
        "data-mode": "popup",
        "data-hide-headers": "true",
        "data-hide-footer": "true",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash) + " " + "typeform-share btn primary"
      }, "Get Started")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_4__styles_sections__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, __WEBPACK_IMPORTED_MODULE_7__styles_pricing__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_5__styles_grid__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_6__styles_button__["a" /* default */].__scoped
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PricingComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(imageRewardPrice, "imageRewardPrice", "/Users/nimagardideh/Documents/workspace/pear/pearmill.com/components/Pricing/index.js");
  reactHotLoader.register(videoRewardPrice, "videoRewardPrice", "/Users/nimagardideh/Documents/workspace/pear/pearmill.com/components/Pricing/index.js");
  reactHotLoader.register(animationRewardPrice, "animationRewardPrice", "/Users/nimagardideh/Documents/workspace/pear/pearmill.com/components/Pricing/index.js");
  reactHotLoader.register(PricingComponent, "PricingComponent", "/Users/nimagardideh/Documents/workspace/pear/pearmill.com/components/Pricing/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.75a582a0ee6415425d0a.hot-update.js.map