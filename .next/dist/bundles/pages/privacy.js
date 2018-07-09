module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return darkTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lightTextColor; });
var primaryColor = '#ec4957';
var borderColor = '#979797';
var backgroundColor = '#F7FAFC';
var darkTextColor = '#494545';
var lightTextColor = 'rgba(255, 255, 255, 0.8)';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(0);

var _defaultExport = ["section .container,section.container{padding-top:5rem;padding-bottom:5rem;}", "section#footer-cta{text-align:center;padding-top:4.5rem;padding-bottom:4.5rem;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* backgroundColor */], ";}"), "#case-studies-clip{position:absolute;height:100%;width:100%;top:0;left:0;right:0;bottom:0;z-index:-10;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* backgroundColor */], ";-webkit-clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);-webkit-clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);}"), "#work-clip{-webkit-clip-path:polygon(100% 0,0 0,0 100%);-webkit-clip-path:polygon(100% 0,0 0,0 100%);clip-path:polygon(100% 0,0 0,0 100%);background:white;height:280px;}", "section#work{background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:linear-gradient(0deg,").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], " 0%,").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], " 99.9%,white 98%);color:white;}"), "section#work *{color:white;}", "@media (max-width:1200px){}", "@media (max-width:600px){}"];
_defaultExport.__hash = "1277394948";
_defaultExport.__scoped = ["section.jsx-884557861 .container.jsx-884557861,section.container.jsx-884557861{padding-top:5rem;padding-bottom:5rem;}", "section#footer-cta.jsx-884557861{text-align:center;padding-top:4.5rem;padding-bottom:4.5rem;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* backgroundColor */], ";}"), "#case-studies-clip.jsx-884557861{position:absolute;height:100%;width:100%;top:0;left:0;right:0;bottom:0;z-index:-10;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* backgroundColor */], ";-webkit-clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);-webkit-clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);clip-path:polygon(0 79%,100% 20%,100% 100%,0% 100%);}"), "#work-clip.jsx-884557861{-webkit-clip-path:polygon(100% 0,0 0,0 100%);-webkit-clip-path:polygon(100% 0,0 0,0 100%);clip-path:polygon(100% 0,0 0,0 100%);background:white;height:280px;}", "section#work.jsx-884557861{background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:linear-gradient(0deg,").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], " 0%,").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], " 99.9%,white 98%);color:white;}"), "section#work.jsx-884557861 *.jsx-884557861{color:white;}", "@media (max-width:1200px){}", "@media (max-width:600px){}"];
_defaultExport.__scopedHash = "884557861";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = [".grid{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".grid>.grid{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;}", ".col-flex{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;}", ".col-1{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;}", ".col-2{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;}", ".col-3{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;}", ".col-4{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;}", ".col-5{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;}", ".col-6{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;}", ".col-7{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;}", "[class^='col-']{margin:0 15px;}", ".grid .grid [class^='col-']{margin:0 0px;}", "@media (max-width:1100px){.grid{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}[class^='col-']{margin:15px 0;}}", "@media (max-width:600px){.grid{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}[class^='col-']{margin:15px 0;}}"];
_defaultExport.__hash = "2956419420";
_defaultExport.__scoped = [".grid.jsx-1797088605{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".grid.jsx-1797088605>.grid.jsx-1797088605{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;}", ".col-flex.jsx-1797088605{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;}", ".col-1.jsx-1797088605{-webkit-flex:1 1 10%;-ms-flex:1 1 10%;flex:1 1 10%;}", ".col-2.jsx-1797088605{-webkit-flex:1 1 20%;-ms-flex:1 1 20%;flex:1 1 20%;}", ".col-3.jsx-1797088605{-webkit-flex:1 1 30%;-ms-flex:1 1 30%;flex:1 1 30%;}", ".col-4.jsx-1797088605{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;}", ".col-5.jsx-1797088605{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;}", ".col-6.jsx-1797088605{-webkit-flex:1 1 60%;-ms-flex:1 1 60%;flex:1 1 60%;}", ".col-7.jsx-1797088605{-webkit-flex:1 1 70%;-ms-flex:1 1 70%;flex:1 1 70%;}", "[class^='col-'].jsx-1797088605{margin:0 15px;}", ".grid.jsx-1797088605 .grid.jsx-1797088605 [class^='col-'].jsx-1797088605{margin:0 0px;}", "@media (max-width:1100px){.grid.jsx-1797088605{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}[class^='col-'].jsx-1797088605{margin:15px 0;}}", "@media (max-width:600px){.grid.jsx-1797088605{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}[class^='col-'].jsx-1797088605{margin:15px 0;}}"];
_defaultExport.__scopedHash = "1797088605";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(0);

var _defaultExport = [".btn{display:inline-block;font-family:'Avenir Medium';font-size:20px;color:white;border:1px solid white;border-radius:50px;text-align:center;min-width:230px;min-height:51.5px;line-height:51.5px;}", ".btn:hover{cursor:pointer;color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:white;}"), ".btn.primary{color:white;border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}"), ".btn.primary:hover{background:transparent;color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}"), ".btn.white{color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border-color:white;background:white;}"), ".btn.white:hover{color:white;border-color:white;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}")];
_defaultExport.__hash = "1044764486";
_defaultExport.__scoped = [".btn.jsx-2548412135{display:inline-block;font-family:'Avenir Medium';font-size:20px;color:white;border:1px solid white;border-radius:50px;text-align:center;min-width:230px;min-height:51.5px;line-height:51.5px;}", ".btn.jsx-2548412135:hover{cursor:pointer;color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:white;}"), ".btn.primary.jsx-2548412135{color:white;border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";background:").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}"), ".btn.primary.jsx-2548412135:hover{background:transparent;color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}"), ".btn.white.jsx-2548412135{color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border-color:white;background:white;}"), ".btn.white.jsx-2548412135:hover{color:white;border-color:white;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";}")];
_defaultExport.__scopedHash = "2548412135";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(0);

var _defaultExport = ["#header{padding-top:5.9rem;position:relative;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";color:white;}"), "#header:after{top:100%;left:0%;border:solid transparent;content:\" \";height:0;width:0px;position:absolute;pointer-events:none;border-color:rgba(236,93,87,0);border-top-color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border-width:80px;margin-left:-80px;}"), "#logo{display:inline-block;font-family:'Advertising Script';font-size:35px;color:white;margin-top:0;}", "#header ul{float:right;list-style-type:none;margin-top:0px;}", "#header ul li{display:inline-block;font-family:'Avenir Medium';font-size:1.2rem;vertical-align:top;color:white;padding-left:2.4rem;}", "#header ul li a{color:white;-webkit-text-decoration:none;text-decoration:none;}", "#header h1:not(#logo){padding-top:5rem;text-align:center;font-size:2.5rem;font-style:normal;color:white;}", "#header h2{padding-bottom:5rem;color:rgba(255,255,255,0.8);font-size:1.5rem;line-height:1.6rem;vertical-align:middle;font-style:normal;text-align:center;max-width:50rem;margin:0 auto;word-wrap:break-word;}", ".blinking-cursor{display:inline-block !important;vertical-align:middle;margin-left:1.1rem;height:16.45rem;width:0.57rem;background:white;-webkit-animation-duration:2000ms;animation-duration:2000ms;content:' ';}", "#header #cta{text-align:center;padding-bottom:7.25rem;}", "#header #cta a{margin-right:1.875rem;display:inline-block;}", "@media (max-width:1200px){#header #logo{padding-left:1rem;}#header ul{padding-right:1rem;}}", "@media (max-width:600px){#header{padding-top:3rem;}#header ul{float:none;padding:0;}#header h1{font-size:2rem;}#header h2{font-size:1.5rem;}.blinking-cursor{height:5.5rem;width:0.30rem;}#header #cta{text-align:center;}#header #cta a:first-child{margin-bottom:1.875rem;}}"];
_defaultExport.__hash = "3815798164";
_defaultExport.__scoped = ["#header.jsx-3656507541{padding-top:5.9rem;position:relative;background:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";color:white;}"), "#header.jsx-3656507541:after{top:100%;left:0%;border:solid transparent;content:\" \";height:0;width:0px;position:absolute;pointer-events:none;border-color:rgba(236,93,87,0);border-top-color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["e" /* primaryColor */], ";border-width:80px;margin-left:-80px;}"), "#logo.jsx-3656507541{display:inline-block;font-family:'Advertising Script';font-size:35px;color:white;margin-top:0;}", "#header.jsx-3656507541 ul.jsx-3656507541{float:right;list-style-type:none;margin-top:0px;}", "#header.jsx-3656507541 ul.jsx-3656507541 li.jsx-3656507541{display:inline-block;font-family:'Avenir Medium';font-size:1.2rem;vertical-align:top;color:white;padding-left:2.4rem;}", "#header.jsx-3656507541 ul.jsx-3656507541 li.jsx-3656507541 a.jsx-3656507541{color:white;-webkit-text-decoration:none;text-decoration:none;}", "#header.jsx-3656507541 h1.jsx-3656507541:not(#logo){padding-top:5rem;text-align:center;font-size:2.5rem;font-style:normal;color:white;}", "#header.jsx-3656507541 h2.jsx-3656507541{padding-bottom:5rem;color:rgba(255,255,255,0.8);font-size:1.5rem;line-height:1.6rem;vertical-align:middle;font-style:normal;text-align:center;max-width:50rem;margin:0 auto;word-wrap:break-word;}", ".blinking-cursor.jsx-3656507541{display:inline-block !important;vertical-align:middle;margin-left:1.1rem;height:16.45rem;width:0.57rem;background:white;-webkit-animation-duration:2000ms;animation-duration:2000ms;content:' ';}", "#header.jsx-3656507541 #cta.jsx-3656507541{text-align:center;padding-bottom:7.25rem;}", "#header.jsx-3656507541 #cta.jsx-3656507541 a.jsx-3656507541{margin-right:1.875rem;display:inline-block;}", "@media (max-width:1200px){#header.jsx-3656507541 #logo.jsx-3656507541{padding-left:1rem;}#header.jsx-3656507541 ul.jsx-3656507541{padding-right:1rem;}}", "@media (max-width:600px){#header.jsx-3656507541{padding-top:3rem;}#header.jsx-3656507541 ul.jsx-3656507541{float:none;padding:0;}#header.jsx-3656507541 h1.jsx-3656507541{font-size:2rem;}#header.jsx-3656507541 h2.jsx-3656507541{font-size:1.5rem;}.blinking-cursor.jsx-3656507541{height:5.5rem;width:0.30rem;}#header.jsx-3656507541 #cta.jsx-3656507541{text-align:center;}#header.jsx-3656507541 #cta.jsx-3656507541 a.jsx-3656507541:first-child{margin-bottom:1.875rem;}}"];
_defaultExport.__scopedHash = "3656507541";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("scroll-to-element");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./styles/sections.js
var sections = __webpack_require__(3);

// EXTERNAL MODULE: ./styles/grid.js
var grid = __webpack_require__(4);

// CONCATENATED MODULE: ./styles/services.js
var _defaultExport = [".service-icons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".service-icon{margin:0 auto;background:#D8D8D8;border-radius:100px;width:1rem;height:1rem;-webkit-flex:0 0 1rem;-ms-flex:0 0 1rem;flex:0 0 1rem;content:' ';margin-bottom:1rem;}", ".service-icon.active{background:white;width:1.2rem;height:1.2rem;-webkit-flex:0 0 1.2rem;-ms-flex:0 0 1.2rem;flex:0 0 1.2rem;}", ".service-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".service-title h2{font-size:9rem;margin:0;color:#F1F1EC;opacity:0.4;}", ".service-title h3{font-size:2.7rem;margin:0;padding-right:10px;}", ".service.col-5{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;}", ".service.col-5:last-child{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;}", ".service.col-10{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}", ".service{margin:0 0;padding:0 10px 0 0;}", ".service h4{font-family:'Avenir Medium';font-size:1.35rem;color:white;font-style:normal;margin-bottom:0rem;}", ".service p{font-family:'Avenir';font-size:1.125rem;line-height:1.4rem;opacity:0.87;color:white;}", ".service-grid{min-height:29.1rem;-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}", "@media (max-width:1100px){.service-icons{display:block;}.service-icons .service-icon{display:inline-block;margin-right:15px;}}", "@media (max-width:600px){.service{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}}"];
_defaultExport.__hash = "3496092629";
_defaultExport.__scoped = [".service-icons.jsx-926654548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".service-icon.jsx-926654548{margin:0 auto;background:#D8D8D8;border-radius:100px;width:1rem;height:1rem;-webkit-flex:0 0 1rem;-ms-flex:0 0 1rem;flex:0 0 1rem;content:' ';margin-bottom:1rem;}", ".service-icon.active.jsx-926654548{background:white;width:1.2rem;height:1.2rem;-webkit-flex:0 0 1.2rem;-ms-flex:0 0 1.2rem;flex:0 0 1.2rem;}", ".service-title.jsx-926654548{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".service-title.jsx-926654548 h2.jsx-926654548{font-size:9rem;margin:0;color:#F1F1EC;opacity:0.4;}", ".service-title.jsx-926654548 h3.jsx-926654548{font-size:2.7rem;margin:0;padding-right:10px;}", ".service.col-5.jsx-926654548{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;}", ".service.col-5.jsx-926654548:last-child{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;}", ".service.col-10.jsx-926654548{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}", ".service.jsx-926654548{margin:0 0;padding:0 10px 0 0;}", ".service.jsx-926654548 h4.jsx-926654548{font-family:'Avenir Medium';font-size:1.35rem;color:white;font-style:normal;margin-bottom:0rem;}", ".service.jsx-926654548 p.jsx-926654548{font-family:'Avenir';font-size:1.125rem;line-height:1.4rem;opacity:0.87;color:white;}", ".service-grid.jsx-926654548{min-height:29.1rem;-webkit-flex-shrink:0 !important;-ms-flex-negative:0 !important;flex-shrink:0 !important;}", "@media (max-width:1100px){.service-icons.jsx-926654548{display:block;}.service-icons.jsx-926654548 .service-icon.jsx-926654548{display:inline-block;margin-right:15px;}}", "@media (max-width:600px){.service.jsx-926654548{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}}"];
_defaultExport.__scopedHash = "926654548";
/* harmony default export */ var services = (_defaultExport);
// CONCATENATED MODULE: ./components/Services/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services_ServicesComponent; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Services_ServicesComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ServicesComponent, _Component);

  function ServicesComponent(props) {
    var _this;

    _classCallCheck(this, ServicesComponent);

    _this = _possibleConstructorReturn(this, (ServicesComponent.__proto__ || Object.getPrototypeOf(ServicesComponent)).call(this, props));
    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  _createClass(ServicesComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {}
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "work",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, external__react__default.a.createElement("div", {
        id: "work-clip",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'container'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'grid services'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'col-5 service-grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'service-title'
      }, external__react__default.a.createElement("h2", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "1."), external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "Brief thousands of creators at once")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'service'
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "Submit a templatized creative brief describing the campaign you\u2019d like to run, who you\u2019re targeting and what its goals are.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'service'
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "It\u2019ll be fluid and we\u2019ll ask you lots of questions about your brand, what it stands for, and any restrictions or inspirations you\u2019d like to convey."))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'col-5 service-grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'service-title'
      }, external__react__default.a.createElement("h2", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "2."), external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "Receive Assets and start running")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash) + " " + 'service'
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "We\u2019ll automatically upload the assets and ads to the appropriate platforms, so you can start using them right away!"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(services.__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash)
      }, "We\u2019ll also track their progress and performance when you start allocating budget towards them."))))), external__react__default.a.createElement(style__default.a, {
        styleId: sections["a" /* default */].__scopedHash,
        css: sections["a" /* default */].__scoped
      }), external__react__default.a.createElement(style__default.a, {
        styleId: services.__scopedHash,
        css: services.__scoped
      }), external__react__default.a.createElement(style__default.a, {
        styleId: grid["a" /* default */].__scopedHash,
        css: grid["a" /* default */].__scoped
      }));
    }
  }]);

  return ServicesComponent;
}(external__react_["Component"]);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./styles/sections.js
var sections = __webpack_require__(3);

// EXTERNAL MODULE: ./styles/grid.js
var grid = __webpack_require__(4);

// EXTERNAL MODULE: ./styles/variables.js
var variables = __webpack_require__(0);

// CONCATENATED MODULE: ./styles/caseStudies.js

var _defaultExport = ["#case-studies{position:relative;overflow:hidden;}", "#case-studies .container{z-index:100000;}", "#case-studies h2{font-size:2.5rem;text-align:center;margin-top:0px;font-style:normal;}", "#case-studies h3{text-align:center;max-width:52rem;font-style:normal;margin:0 auto 2rem;}", ".case-img-container{padding:5px;max-height:30rem;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;-webkit-animation:fadein 2s;animation:fadein 2s;}", ".case-img-container img{border-radius:3px;box-shadow:0px 0px 3px 0px ".concat(variables["b" /* borderColor */], ";}"), ".case-study-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "#case-studies h1{font-family:'Avenir Medium';font-style:normal;font-size:3.12rem;margin-bottom:0rem;}", "#case-studies a{margin-top:0rem;font-size:1.1rem;}", "#case-studies p{font-family:'Avenir';font-size:1.5rem;line-height:1.8rem;margin-bottom:0.5rem;margin-top:0.5rem;}", "@media (max-width:1200px){#case-studies .col-7{margin-right:0px;}}", "@media (max-width:600px){#case-studies .col-7{margin-right:0px;}}", "@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}", "@keyframes fadein{from{opacity:0;}to{opacity:1;}}"];
_defaultExport.__hash = "2110844587";
_defaultExport.__scoped = ["#case-studies.jsx-3690460810{position:relative;overflow:hidden;}", "#case-studies.jsx-3690460810 .container.jsx-3690460810{z-index:100000;}", "#case-studies.jsx-3690460810 h2.jsx-3690460810{font-size:2.5rem;text-align:center;margin-top:0px;font-style:normal;}", "#case-studies.jsx-3690460810 h3.jsx-3690460810{text-align:center;max-width:52rem;font-style:normal;margin:0 auto 2rem;}", ".case-img-container.jsx-3690460810{padding:5px;max-height:30rem;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;-webkit-animation:fadein-jsx-3690460810 2s;animation:fadein-jsx-3690460810 2s;}", ".case-img-container.jsx-3690460810 img.jsx-3690460810{border-radius:3px;box-shadow:0px 0px 3px 0px ".concat(variables["b" /* borderColor */], ";}"), ".case-study-title.jsx-3690460810{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "#case-studies.jsx-3690460810 h1.jsx-3690460810{font-family:'Avenir Medium';font-style:normal;font-size:3.12rem;margin-bottom:0rem;}", "#case-studies.jsx-3690460810 a.jsx-3690460810{margin-top:0rem;font-size:1.1rem;}", "#case-studies.jsx-3690460810 p.jsx-3690460810{font-family:'Avenir';font-size:1.5rem;line-height:1.8rem;margin-bottom:0.5rem;margin-top:0.5rem;}", "@media (max-width:1200px){#case-studies.jsx-3690460810 .col-7.jsx-3690460810{margin-right:0px;}}", "@media (max-width:600px){#case-studies.jsx-3690460810 .col-7.jsx-3690460810{margin-right:0px;}}", "@-webkit-keyframes fadein-jsx-3690460810{from{opacity:0;}to{opacity:1;}}", "@keyframes fadein-jsx-3690460810{from{opacity:0;}to{opacity:1;}}"];
_defaultExport.__scopedHash = "3690460810";
/* harmony default export */ var caseStudies = (_defaultExport);
// CONCATENATED MODULE: ./components/CaseStudies/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStudies_CaseStudiesComponent; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





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

var CaseStudies_CaseStudiesComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CaseStudiesComponent, _Component);

  function CaseStudiesComponent(props) {
    var _this;

    _classCallCheck(this, CaseStudiesComponent);

    _this = _possibleConstructorReturn(this, (CaseStudiesComponent.__proto__ || Object.getPrototypeOf(CaseStudiesComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "startTimer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
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
      }
    });
    _this.state = {
      examples: examples
    };
    return _this;
  }

  _createClass(CaseStudiesComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.startTimer();
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      clearTimeout(this._timer);
    }
  }, {
    key: "render",
    value: function render() {
      var exmps = this.state.examples.slice(0, 8);
      return external__react__default.a.createElement("section", {
        id: "case-studies",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash)
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash) + " " + 'container'
      }, external__react__default.a.createElement("h2", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash)
      }, "High Quality, Performant Creative"), external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash) + " " + 'lead'
      }, "Our network of designers are incentivized to produce performant creative. Below is a small snapshot of creative that's been through over $20M of spend over the past year alone."), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash) + " " + 'grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash) + " " + 'col-7 grid'
      }, exmps.map(function (example, index) {
        return external__react__default.a.createElement("div", {
          key: example.src,
          className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash) + " " + 'col-5 case-img-container'
        }, example.type === 'image' ? external__react__default.a.createElement("img", {
          src: example.src,
          className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash)
        }) : external__react__default.a.createElement("div", {
          className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash)
        }));
      })))), external__react__default.a.createElement("div", {
        id: "case-studies-clip",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(caseStudies.__scopedHash)
      }), external__react__default.a.createElement(style__default.a, {
        styleId: sections["a" /* default */].__scopedHash,
        css: sections["a" /* default */].__scoped
      }), external__react__default.a.createElement(style__default.a, {
        styleId: grid["a" /* default */].__scopedHash,
        css: grid["a" /* default */].__scoped
      }), external__react__default.a.createElement(style__default.a, {
        styleId: caseStudies.__scopedHash,
        css: caseStudies.__scoped
      }));
    }
  }]);

  return CaseStudiesComponent;
}(external__react_["Component"]);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./styles/grid.js
var grid = __webpack_require__(4);

// EXTERNAL MODULE: ./styles/sections.js
var sections = __webpack_require__(3);

// CONCATENATED MODULE: ./styles/clients.js
var _defaultExport = ["#clients h1{text-align:center;font-style:normal;padding-bottom:3rem;}", "#clients .col-1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;margin-bottom:25px;}", "#clients .client-logo{min-height:60px;background-repeat:no-repeat;background-size:contain;background-position:center;}"];
_defaultExport.__hash = "432848318";
_defaultExport.__scoped = ["#clients.jsx-353378943 h1.jsx-353378943{text-align:center;font-style:normal;padding-bottom:3rem;}", "#clients.jsx-353378943 .col-1.jsx-353378943{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;margin-bottom:25px;}", "#clients.jsx-353378943 .client-logo.jsx-353378943{min-height:60px;background-repeat:no-repeat;background-size:contain;background-position:center;}"];
_defaultExport.__scopedHash = "353378943";
/* harmony default export */ var clients = (_defaultExport);
// CONCATENATED MODULE: ./components/Clients/index.js





/* harmony default export */ var Clients = __webpack_exports__["a"] = (function () {
  return external__react__default.a.createElement("section", {
    id: "clients",
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash)
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'container'
  }, external__react__default.a.createElement("h1", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash)
  }, "Our creators have served the very best"), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'grid'
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/nytimes.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/dollar-shave-club.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/davidstea.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/toyota.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/skype.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/aptible.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  }))), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'grid'
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/textline.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/stdlib.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/cover.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/keenio.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/frankandoak.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/grokker.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'col-1'
  }, external__react__default.a.createElement("div", {
    style: {
      backgroundImage: 'url(/static/clients/humi.png)'
    },
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'client-logo'
  })))), external__react__default.a.createElement(style__default.a, {
    styleId: grid["a" /* default */].__scopedHash,
    css: grid["a" /* default */].__scoped
  }), external__react__default.a.createElement(style__default.a, {
    styleId: clients.__scopedHash,
    css: clients.__scoped
  }), external__react__default.a.createElement(style__default.a, {
    styleId: sections["a" /* default */].__scopedHash,
    css: sections["a" /* default */].__scoped
  }));
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "rc-slider/lib/Slider"
var Slider_ = __webpack_require__(13);
var Slider__default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: ./styles/variables.js
var variables = __webpack_require__(0);

// EXTERNAL MODULE: ./styles/sections.js
var sections = __webpack_require__(3);

// EXTERNAL MODULE: ./styles/grid.js
var grid = __webpack_require__(4);

// EXTERNAL MODULE: ./styles/button.js
var styles_button = __webpack_require__(5);

// CONCATENATED MODULE: ./styles/pricing.js

var _defaultExport = ["section#pricing{background:white;}", ".pricing{background:".concat(variables["a" /* backgroundColor */], ";padding:0.8rem;margin-bottom:1rem;}"), "#pricing h2{font-size:2.5rem;text-align:center;font-style:normal;margin-top:0px;}", "#pricing .lead{text-align:center;max-width:58rem;margin:0 auto;}", "#pricing .secondary-lead{font-size:0.9rem;color:".concat(variables["b" /* borderColor */], ";margin-top:0px;}"), ".pricing .plan-name{font-weight:bold;font-size:1.8rem;font-style:normal;margin-top:0px;margin-bottom:15px;}", ".pricing .price span.mobile-only{font-size:1rem;text-align:left;width:100px;padding-bottom:15px;}", ".pricing .price{font-size:1.5rem;font-weight:bold;font-style:normal;text-align:center;}", ".pricing .slider-container{padding:0px 15px;}", ".pricing .price-header{text-align:center;}", ".pricing .pricing-model{padding-top:15px;}", ".pricing .price.main{font-size:8rem;}", ".pricing .sub-total{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing .btn-container{padding-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing .sub-total-header{padding-top:50px;}", ".pricing .sub-total-header .plan-name{text-align:center !important;}", ".pricing .pricing-header{padding-top:15px;}", ".pricing .sub-total .plan-name{padding-right:15px;text-align:right;margin-bottom:0;}", ".pricing .sub-total .description{padding-left:15px;text-align:left;}", ".rc-slider-dot-active{border-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-track{background-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-handle{border-color:".concat(variables["e" /* primaryColor */], " !important;background-color:").concat(variables["e" /* primaryColor */], " !important;}"), ".pricing .what-you-get:first-child{border-right:1px solid ".concat(variables["b" /* borderColor */], ";}"), ".pricing .what-you-pay{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".pricing p{font-size:1.1rem;}", ".pricing .what-you-get,.pricing .what-you-pay{margin-top:40px;padding:0rem 0.8rem 1.2rem;height:100%;}", ".what-you-get h4,.what-you-pay h4{font-size:1.2rem;font-weight:bold;font-style:normal;padding:0;}", ".what-you-get h5,.what-you-pay h5{font-size:1rem;font-weight:bold;font-style:normal;margin-bottom:0.5rem;}", ".mobile-only{display:none;}", "@media (max-width:1100px){}", "@media (max-width:600px){.desktop-only{display:none;}.mobile-only{display:inline-block;}.slider-container{margin-bottom:30px;}.pricing .price{text-align:left;}}"];
_defaultExport.__hash = "1284992690";
_defaultExport.__scoped = ["section#pricing.jsx-960369139{background:white;}", ".pricing.jsx-960369139{background:".concat(variables["a" /* backgroundColor */], ";padding:0.8rem;margin-bottom:1rem;}"), "#pricing.jsx-960369139 h2.jsx-960369139{font-size:2.5rem;text-align:center;font-style:normal;margin-top:0px;}", "#pricing.jsx-960369139 .lead.jsx-960369139{text-align:center;max-width:58rem;margin:0 auto;}", "#pricing.jsx-960369139 .secondary-lead.jsx-960369139{font-size:0.9rem;color:".concat(variables["b" /* borderColor */], ";margin-top:0px;}"), ".pricing.jsx-960369139 .plan-name.jsx-960369139{font-weight:bold;font-size:1.8rem;font-style:normal;margin-top:0px;margin-bottom:15px;}", ".pricing.jsx-960369139 .price.jsx-960369139 span.mobile-only.jsx-960369139{font-size:1rem;text-align:left;width:100px;padding-bottom:15px;}", ".pricing.jsx-960369139 .price.jsx-960369139{font-size:1.5rem;font-weight:bold;font-style:normal;text-align:center;}", ".pricing.jsx-960369139 .slider-container.jsx-960369139{padding:0px 15px;}", ".pricing.jsx-960369139 .price-header.jsx-960369139{text-align:center;}", ".pricing.jsx-960369139 .pricing-model.jsx-960369139{padding-top:15px;}", ".pricing.jsx-960369139 .price.main.jsx-960369139{font-size:8rem;}", ".pricing.jsx-960369139 .sub-total.jsx-960369139{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing.jsx-960369139 .btn-container.jsx-960369139{padding-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing.jsx-960369139 .sub-total-header.jsx-960369139{padding-top:50px;}", ".pricing.jsx-960369139 .sub-total-header.jsx-960369139 .plan-name.jsx-960369139{text-align:center !important;}", ".pricing.jsx-960369139 .pricing-header.jsx-960369139{padding-top:15px;}", ".pricing.jsx-960369139 .sub-total.jsx-960369139 .plan-name.jsx-960369139{padding-right:15px;text-align:right;margin-bottom:0;}", ".pricing.jsx-960369139 .sub-total.jsx-960369139 .description.jsx-960369139{padding-left:15px;text-align:left;}", ".rc-slider-dot-active.jsx-960369139{border-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-track.jsx-960369139{background-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-handle.jsx-960369139{border-color:".concat(variables["e" /* primaryColor */], " !important;background-color:").concat(variables["e" /* primaryColor */], " !important;}"), ".pricing.jsx-960369139 .what-you-get.jsx-960369139:first-child{border-right:1px solid ".concat(variables["b" /* borderColor */], ";}"), ".pricing.jsx-960369139 .what-you-pay.jsx-960369139{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".pricing.jsx-960369139 p.jsx-960369139{font-size:1.1rem;}", ".pricing.jsx-960369139 .what-you-get.jsx-960369139,.pricing.jsx-960369139 .what-you-pay.jsx-960369139{margin-top:40px;padding:0rem 0.8rem 1.2rem;height:100%;}", ".what-you-get.jsx-960369139 h4.jsx-960369139,.what-you-pay.jsx-960369139 h4.jsx-960369139{font-size:1.2rem;font-weight:bold;font-style:normal;padding:0;}", ".what-you-get.jsx-960369139 h5.jsx-960369139,.what-you-pay.jsx-960369139 h5.jsx-960369139{font-size:1rem;font-weight:bold;font-style:normal;margin-bottom:0.5rem;}", ".mobile-only.jsx-960369139{display:none;}", "@media (max-width:1100px){}", "@media (max-width:600px){.desktop-only.jsx-960369139{display:none;}.mobile-only.jsx-960369139{display:inline-block;}.slider-container.jsx-960369139{margin-bottom:30px;}.pricing.jsx-960369139 .price.jsx-960369139{text-align:left;}}"];
_defaultExport.__scopedHash = "960369139";
/* harmony default export */ var pricing = (_defaultExport);
// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(14);
var assets_default = /*#__PURE__*/__webpack_require__.n(assets);

// CONCATENATED MODULE: ./components/Pricing/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pricing_PricingComponent; });


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

var Pricing_PricingComponent =
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
          color: variables["e" /* primaryColor */]
        }
      },
      15: {
        label: 15,
        style: {
          color: variables["e" /* primaryColor */]
        }
      },
      30: {
        label: 30,
        style: {
          color: variables["e" /* primaryColor */]
        }
      }
    };
    var videoRanges = {
      0: 0,
      5: {
        label: 5,
        style: {
          color: variables["e" /* primaryColor */]
        }
      },
      15: {
        label: 15,
        style: {
          color: variables["e" /* primaryColor */]
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
      return external__react__default.a.createElement("section", {
        id: "pricing",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'container'
      }, external__react__default.a.createElement("h2", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "BYOP \u2013\xA0Build Your Own Plan"), external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'lead'
      }, "Receive the assets with an initial monthly subscription. If the assets perform well, a reward will be paid out to our creators. Rewards help our creators learn how their work performs - and incentivizes higher quality work.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'pricing'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'container'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'lead'
      }, "Choose how many assets you need a month:"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid pricing-header'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-5'
      }), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header desktop-only'
      }, "# of Assets"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header desktop-only'
      }, "Price / Creative", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(monthly)"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header desktop-only'
      }, "Max Reward", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(for performance)")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Static-Image Ads"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Image ads, story or carousel ads optimized for conversion for all major platforms.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, external__react__default.a.createElement(Slider__default.a, {
        min: 0,
        max: 30,
        marks: ranges.images,
        value: sliders.images,
        onChange: this.onSliderChange('images')
      }), external__react__default.a.createElement("div", {
        style: {
          display: 'none'
        },
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You provide:"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.images > 0 ? external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x ", sliders.images, " unique set(s) of creatives for any ad unit.")) : external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "# of Assets"), " ", sliders.images, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Price / Creative", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(monthly)"), " ", this.pricePerCreative('images').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Max Reward", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(for performance)"), " ", imageRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Video Ad Edits"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Video ads, cut from raw-footage you provide, optimized for conversion.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, external__react__default.a.createElement(Slider__default.a, {
        min: 0,
        max: 15,
        marks: ranges.videos,
        value: sliders.videos,
        onChange: this.onSliderChange('videos')
      }), external__react__default.a.createElement("div", {
        style: {
          display: 'none'
        },
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You provide:"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.videos > 0 ? external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x ", sliders.videos, " unique set(s) of creatives for any ad unit.")) : external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "# of Assets"), " ", sliders.videos, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Price / Creative", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(monthly)"), " ", this.pricePerCreative('videos').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Max Reward", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(for performance)"), " ", videoRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid pricing-model'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Animated Ads"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'secondary-lead'
      }, "Animations (videos), uniquely produced and optimized for conversion. All major platforms supported.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-5 slider-container'
      }, external__react__default.a.createElement(Slider__default.a, {
        min: 0,
        max: 15,
        marks: ranges.animations,
        value: sliders.animations,
        onChange: this.onSliderChange('animations')
      }), external__react__default.a.createElement("div", {
        style: {
          display: 'none'
        },
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You provide:"), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any creative direction, brand guidelines, or restrictions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Any internal assets you'd like used."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Information about specific audience that each creative will be used for.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'what-you-get col-flex'
      }, external__react__default.a.createElement("h4", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "You'll receive:"), sliders.animations > 0 ? external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Unlimited revisions."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x Automatic asset uploads to Facebook, Instagram, LinkedIn, and Twitter post-approval."), external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "x ", sliders.animations, " unique set(s) of creatives for any ad unit.")) : external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "Well, nothing. Obviously.")))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "# of Assets"), " ", sliders.animations, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Price / Creative", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(monthly)"), " ", this.pricePerCreative('animations').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, external__react__default.a.createElement("span", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'mobile-only'
      }, "Max Reward", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(for performance)"), " ", animationRewardPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      }))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid sub-total sub-total-header'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-flex plan-name'
      }, "Total")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid sub-total'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Monthly Price")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.monthlyPrice().toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-3 description'
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "Charged on a monthly basis, this covers the cost of production for our creators.")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid sub-total'
      }, external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, external__react__default.a.createElement("h3", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'plan-name'
      }, "Maximum Reward")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.maxRewardPrice().toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-3 description'
      }, external__react__default.a.createElement("p", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "Cap on reward, calculated as 2% of ad-spend on approved creative and charged bi-weekly. ", external__react__default.a.createElement("b", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }, "This is on top of the monthly price."))), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-2'
      }, "\xA0")), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'btn-container'
      }, external__react__default.a.createElement("a", {
        href: "https://paidgrowth.typeform.com/to/wxdzCL",
        "data-mode": "popup",
        "data-hide-headers": "true",
        "data-hide-footer": "true",
        target: "_blank",
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + "typeform-share btn primary"
      }, "Get Started")))), external__react__default.a.createElement(style__default.a, {
        styleId: sections["a" /* default */].__scopedHash,
        css: sections["a" /* default */].__scoped
      }), external__react__default.a.createElement("style", null, pricing), external__react__default.a.createElement(style__default.a, {
        styleId: grid["a" /* default */].__scopedHash,
        css: grid["a" /* default */].__scoped
      }), external__react__default.a.createElement(style__default.a, {
        styleId: styles_button["a" /* default */].__scopedHash,
        css: styles_button["a" /* default */].__scoped
      }));
    }
  }]);

  return PricingComponent;
}(external__react_["Component"]);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("rc-slider/lib/Slider");

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_header__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scroll_to_element__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scroll_to_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_scroll_to_element__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var HeaderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderComponent, _Component);

  function HeaderComponent(props) {
    var _this;

    _classCallCheck(this, HeaderComponent);

    _this = _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this, props));
    _this.state = {
      text: '',
      loopNum: 0
    };
    return _this;
  }

  _createClass(HeaderComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
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
            b = "https://embed.typeform.com/";

        if (!gi.call(d, id)) {
          js = ce.call(d, "script");
          js.id = id;
          js.src = b + "embed.js";
          q = gt.call(d, "script")[0];
          q.parentNode.insertBefore(js, q);
        }
      })();
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      clearTimeout(this._timer);
    }
  }, {
    key: "scroll",
    value: function scroll(event) {
      event.preventDefault();
      var href = (event.target.href || '').split('#')[1];
      __WEBPACK_IMPORTED_MODULE_4_scroll_to_element___default()("#".concat(href), {
        align: 'middle'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var text = this.state.text;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        id: "header",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash) + " " + 'container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        id: "logo",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, "Pearmill"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#work",
        onClick: this.scroll,
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, "How It Works")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#case-studies",
        onClick: this.scroll,
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, "Examples")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://agency.pearmill.com",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash)
      }, "Agency"))), children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_2__styles_header__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_3__styles_button__["a" /* default */].__scoped
      }));
    }
  }]);

  return HeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./styles/variables.js
var variables = __webpack_require__(0);

// CONCATENATED MODULE: ./styles/footer.js

var _defaultExport = ["section#footer-cta{margin-bottom:0px;padding-bottom:0px;}", "section#footer-cta .container{padding:0rem 0 3rem;}", "#footer-cta h1{font-family:'Avenir Medium';font-size:2.8rem;font-style:normal;margin-bottom:0.5rem;}", "#footer-cta h2{font-family:'Avenir';font-style:normal;font-size:1.5rem;line-height:1.8rem;margin:0 0 3rem 0;}", "#footer{background:".concat(variables["c" /* darkTextColor */], ";color:").concat(variables["d" /* lightTextColor */], ";}"), "#footer a{color:".concat(variables["d" /* lightTextColor */], ";font-weight:bold;}"), "#footer ul,#footer ul li{list-style:none;}", "#footer ul{padding:1rem 0;}", "#footer ul li{padding-bottom:0.8rem;}"];
_defaultExport.__hash = "1574505840";
_defaultExport.__scoped = ["section#footer-cta.jsx-2242730417{margin-bottom:0px;padding-bottom:0px;}", "section#footer-cta.jsx-2242730417 .container.jsx-2242730417{padding:0rem 0 3rem;}", "#footer-cta.jsx-2242730417 h1.jsx-2242730417{font-family:'Avenir Medium';font-size:2.8rem;font-style:normal;margin-bottom:0.5rem;}", "#footer-cta.jsx-2242730417 h2.jsx-2242730417{font-family:'Avenir';font-style:normal;font-size:1.5rem;line-height:1.8rem;margin:0 0 3rem 0;}", "#footer.jsx-2242730417{background:".concat(variables["c" /* darkTextColor */], ";color:").concat(variables["d" /* lightTextColor */], ";}"), "#footer.jsx-2242730417 a.jsx-2242730417{color:".concat(variables["d" /* lightTextColor */], ";font-weight:bold;}"), "#footer.jsx-2242730417 ul.jsx-2242730417,#footer.jsx-2242730417 ul.jsx-2242730417 li.jsx-2242730417{list-style:none;}", "#footer.jsx-2242730417 ul.jsx-2242730417{padding:1rem 0;}", "#footer.jsx-2242730417 ul.jsx-2242730417 li.jsx-2242730417{padding-bottom:0.8rem;}"];
_defaultExport.__scopedHash = "2242730417";
/* harmony default export */ var footer = (_defaultExport);
// EXTERNAL MODULE: ./styles/sections.js
var sections = __webpack_require__(3);

// EXTERNAL MODULE: ./styles/button.js
var styles_button = __webpack_require__(5);

// EXTERNAL MODULE: ./styles/grid.js
var grid = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Footer/index.js






/* harmony default export */ var Footer = __webpack_exports__["a"] = (function () {
  return external__react__default.a.createElement("section", {
    id: "footer-cta",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'container'
  }, external__react__default.a.createElement("h2", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, "Are you a Creator?"), external__react__default.a.createElement("a", {
    href: "https://paidgrowth.typeform.com/to/gLv4xK",
    "data-mode": "popup",
    "data-hide-headers": "true",
    "data-hide-footer": "true",
    target: "_blank",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + "typeform-share btn primary"
  }, "Join Us")), external__react__default.a.createElement("div", {
    id: "footer",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'grid'
  }, external__react__default.a.createElement("div", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-3'
  }, "\xA0"), external__react__default.a.createElement("div", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-3'
  }, external__react__default.a.createElement("ul", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, external__react__default.a.createElement("li", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, external__react__default.a.createElement("a", {
    href: "/privacy",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, "Privacy Policy"), " | ", external__react__default.a.createElement("a", {
    href: "/terms",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, "Terms of Service")), external__react__default.a.createElement("li", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, "\xA9 Copyright 2018 \u2013 Suto Collective Inc. DBA Pearmill"), external__react__default.a.createElement("li", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }, "Artists are the new song writers."))), external__react__default.a.createElement("div", {
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-3'
  }, "\xA0"))), external__react__default.a.createElement(style__default.a, {
    styleId: sections["a" /* default */].__scopedHash,
    css: sections["a" /* default */].__scoped
  }), external__react__default.a.createElement(style__default.a, {
    styleId: grid["a" /* default */].__scopedHash,
    css: grid["a" /* default */].__scoped
  }), external__react__default.a.createElement(style__default.a, {
    styleId: footer.__scopedHash,
    css: footer.__scoped
  }), external__react__default.a.createElement(style__default.a, {
    styleId: styles_button["a" /* default */].__scopedHash,
    css: styles_button["a" /* default */].__scoped
  }), external__react__default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-104380641-2",
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }), external__react__default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', 'UA-104380641-2');\n    "
    },
    className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(footer.__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
  }));
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(0);

var _defaultExport = ["@import url(\"/static/css/normalize.css\");", "@import url(\"/static/css/animate.css\");", "@font-face{font-family:'Adobe Garamond Pro';src:url('/static/fonts/Adobe-Garamond-Pro-Regular.eot');src:url('/static/fonts/Adobe-Garamond-Pro-Regular.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Adobe-Garamond-Pro-Regular.woff') format('woff'), url('/static/fonts/Adobe-Garamond-Pro-Regular.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-Book.eot');src:url('/static/fonts/Avenir-Book.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Book.woff') format('woff'), url('/static/fonts/Avenir-Book.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir Medium';src:url('/static/fonts/Avenir-Medium.eot');src:url('/static/fonts/Avenir-Medium.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Medium.woff') format('woff'), url('/static/fonts/Avenir-Medium.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-BookOblique.eot');src:url('/static/fonts/Avenir-BookOblique.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-BookOblique.woff') format('woff'), url('/static/fonts/Avenir-BookOblique.ttf') format('truetype');font-weight:normal;font-style:italic;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-Light.eot');src:url('/static/fonts/Avenir-Light.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Light.woff') format('woff'), url('/static/fonts/Avenir-Light.ttf') format('truetype');font-weight:lighter;font-style:normal;}", "@font-face{font-family:'Advertising Script';src:url('/static/fonts/AdvertisingScript-Bold.eot');src:url('/static/fonts/AdvertisingScript-Bold.eot?#iefix') format('embedded-opentype'), url('/static/fonts/AdvertisingScript-Bold.woff') format('woff'), url('/static/fonts/AdvertisingScript-Bold.ttf') format('truetype');font-weight:bold;font-style:normal;}", "body{color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["c" /* darkTextColor */], ";background:rgba(255,255,255,0.8);height:100%;width:100%;font-family:\"Adobe Garamond Pro\",serif;font-size:16px;}"), "h1,h2,h3,h4,h5{font-family:'Adobe Garamond Pro';font-weight:normal;font-style:italic;color:#5E5E5E;}", "a{-webkit-text-decoration:none;text-decoration:none;}", "img{max-width:100%;}", ".container{width:1200px;margin:0 auto;}", ".text-center{text-align:center;}", ".lead{font-size:1.5rem;line-height:2rem;margin-top:0;margin-bottom:0.3rem;}", "*{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;box-sizing:border-box;}", "@media (max-width:1200px){html,body{font-size:14px;}.container{width:100%;padding-left:2rem;padding-right:2rem;}}", "@media (max-width:600px){html,body{font-size:13px;}.container{width:100%;padding-left:1rem;padding-right:1rem;}}"];
_defaultExport.__hash = "1748212977";
_defaultExport.__scoped = ["@import url(\"/static/css/normalize.css\");", "@import url(\"/static/css/animate.css\");", "@font-face{font-family:'Adobe Garamond Pro';src:url('/static/fonts/Adobe-Garamond-Pro-Regular.eot');src:url('/static/fonts/Adobe-Garamond-Pro-Regular.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Adobe-Garamond-Pro-Regular.woff') format('woff'), url('/static/fonts/Adobe-Garamond-Pro-Regular.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-Book.eot');src:url('/static/fonts/Avenir-Book.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Book.woff') format('woff'), url('/static/fonts/Avenir-Book.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir Medium';src:url('/static/fonts/Avenir-Medium.eot');src:url('/static/fonts/Avenir-Medium.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Medium.woff') format('woff'), url('/static/fonts/Avenir-Medium.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-BookOblique.eot');src:url('/static/fonts/Avenir-BookOblique.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-BookOblique.woff') format('woff'), url('/static/fonts/Avenir-BookOblique.ttf') format('truetype');font-weight:normal;font-style:italic;}", "@font-face{font-family:'Avenir';src:url('/static/fonts/Avenir-Light.eot');src:url('/static/fonts/Avenir-Light.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Avenir-Light.woff') format('woff'), url('/static/fonts/Avenir-Light.ttf') format('truetype');font-weight:lighter;font-style:normal;}", "@font-face{font-family:'Advertising Script';src:url('/static/fonts/AdvertisingScript-Bold.eot');src:url('/static/fonts/AdvertisingScript-Bold.eot?#iefix') format('embedded-opentype'), url('/static/fonts/AdvertisingScript-Bold.woff') format('woff'), url('/static/fonts/AdvertisingScript-Bold.ttf') format('truetype');font-weight:bold;font-style:normal;}", "body.jsx-3357452464{color:".concat(__WEBPACK_IMPORTED_MODULE_0__variables__["c" /* darkTextColor */], ";background:rgba(255,255,255,0.8);height:100%;width:100%;font-family:\"Adobe Garamond Pro\",serif;font-size:16px;}"), "h1.jsx-3357452464,h2.jsx-3357452464,h3.jsx-3357452464,h4.jsx-3357452464,h5.jsx-3357452464{font-family:'Adobe Garamond Pro';font-weight:normal;font-style:italic;color:#5E5E5E;}", "a.jsx-3357452464{-webkit-text-decoration:none;text-decoration:none;}", "img.jsx-3357452464{max-width:100%;}", ".container.jsx-3357452464{width:1200px;margin:0 auto;}", ".text-center.jsx-3357452464{text-align:center;}", ".lead.jsx-3357452464{font-size:1.5rem;line-height:2rem;margin-top:0;margin-bottom:0.3rem;}", "*.jsx-3357452464{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;box-sizing:border-box;}", "@media (max-width:1200px){html.jsx-3357452464,body.jsx-3357452464{font-size:14px;}.container.jsx-3357452464{width:100%;padding-left:2rem;padding-right:2rem;}}", "@media (max-width:600px){html.jsx-3357452464,body.jsx-3357452464{font-size:13px;}.container.jsx-3357452464{width:100%;padding-left:1rem;padding-right:1rem;}}"];
_defaultExport.__scopedHash = "3357452464";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Services__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CaseStudies__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Clients__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Pricing__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_sections__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_header__ = __webpack_require__(6);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // Components






 // CSS





var PrivacyPage =
/*#__PURE__*/
function (_Component) {
  _inherits(PrivacyPage, _Component);

  function PrivacyPage() {
    _classCallCheck(this, PrivacyPage);

    return _possibleConstructorReturn(this, (PrivacyPage.__proto__ || Object.getPrototypeOf(PrivacyPage)).apply(this, arguments));
  }

  _createClass(PrivacyPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmill \u2013\xA0Privacy Policy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:title",
        content: "Pearmill\xA0\u2013 Quality Ad Creative at Scale",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:description",
        content: "Tap into thousands of expert copy-writers, designers, and animators to produce your ads, and pay them when the ads perform.",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:url",
        content: "https://pearmill.com",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        property: "og:image",
        content: "https://pearmill.com/static/logo-card.png",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "https://pearmill.com/static/favicon.ico",
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Privacy Policy", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash) + " " + 'container'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmill"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Suto Collective Inc.'s Privacy Policy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash) + " " + 'lead'
      }, "Suto Collective, Inc. (\"Pearmill,\" \"we,\" \"our,\" or \"us\") is committed to respecting and protecting your privacy. This Privacy Policy applies to the Pearmill website, https://pearmill.com and our mobile and email service (collectively, our \"Service\"), and describes how we collect, protect, use and share information gathered about you on our websites. By using our Service, you agree to the terms of this Privacy Policy and our Terms of Use. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Use."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "1. INFORMATION WE COLLECT"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Categories of personal information we collect can include:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Information you provide to us directly. Pearmill collects personally identifiable information on the Service when you interact with us, such as when you engage with the Pearmill Service through your mobile device or interact with our website. The personal information we collect may include your name, mobile number, mailing address, email address, date of birth, and any other information necessary to fulfill your request. You should feel free to decline to provide any information that we request, however, please note that doing so may make it impossible for Pearmill to fulfill your request. We use the information that we collect to provide the products or services that you request, to improve and customize our Service, and to contact you about special promotions and new products."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Information We Collect from Third Parties. We may collect information about you from the parties and services that we engage to provide your requests. We may also collect information about you from third party services and from publicly available sources. For example, we may receive information about you when you interact with our site through various social media, for example, by liking us on Facebook or following us on Twitter or by logging in to our service through Facebook, Twitter or any other third party login. The data we receive is dependent upon your privacy settings with the social network. You should always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to our website."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "2. HOW WE USE COOKIES AND OTHER TRACKING TECHNOLOGY TO COLLECT INFORMATION"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pixel Tags and Cookies"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We and our third party partners may automatically collect certain types of usage information when you visit our website or use our Service. For instance, when you visit our website, we may send one or more cookies\u2014a small text file containing a string of alphanumeric characters\u2014to your computer that uniquely identifies your browser and lets us enhance your navigation through the site. A cookie may also convey information to us about how you use our website (e.g., the pages you view, the links you click, how frequently you access our website, and other actions you take on our website), and allow us to track your usage of the Service over time. We may collect log file information about your browser or mobile device each time you access the Service. Log file information may include anonymous information such as your web request, Internet Protocol (\"IP\") address, browser type, information about your mobile device, referring / exit pages and URLs, number of clicks and how you interact with links on our website, domain names, landing pages, pages viewed, and other such information. The information allows for more accurate reporting and improvement of our website."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may also collect analytics data, or use third-party analytics tools, to help us measure traffic and usage trends for our website. These tools collect information sent by your browser or mobile device, including the pages you visit, your use of third party applications, and other information that assists us in analyzing and improving our website. When you access our website by or through a mobile device, we may receive or collect and store a unique identification number associated with your device (for example, a UDID, IDFA, Google Advertising ID or similar), mobile carrier, device type and manufacturer."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may use the data collected through cookies, log file, device identifiers, location data and pixel tags to: (a) remember information so that you will not have to re-enter it the next time you use our Service; (b) provide custom, personalized content and information, including advertising; (c) provide and monitor the effectiveness of our website and our email communications; (d) monitor aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on our website; (e) diagnose or fix technology problems; and (f) otherwise to plan for and enhance our website. The information we collect through these tracking technologies may be linked to the Personal Information you have chosen to share with us when you register."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Third Party Tracking and Online Advertising"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We permit third party online advertising networks to collect information about your use of our website over time so that they may play or display ads that may be relevant to your interests on our website as well as on other websites or services. Typically, the information is collected through cookies or similar tracking technologies. You may \"opt out\" of the collection of any information through cookies or other tracking technology by managing the preferences or settings on your browser or mobile device. However, if you decide not to accept our cookies, your ability to use some features on our site may be impaired. Please refer to your browser's or mobile device's technical information for instructions on how to delete and disable cookies, and other tracking/recording tools. (To learn more about cookies, clear gifs/web beacons and related technologies and how you may opt-out of some of this tracking, you may wish to visit http://www.allaboutcookies.org and/or the Network Advertising Initiative's online resources, at http://www.networkadvertising.org). We are not able to respond to Do Not Track signals sent by your browser at this time. Depending on your mobile device, you may not be able to control tracking technologies through settings. If you have any questions about opting out of the collection of cookies and other tracking/recording tools, you can contact us directly at contact@pearmill.com."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "3. SHARING OF YOUR INFORMATION"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may share your personal information in the instances described below. For further information on your choices regarding your information, see the \"Your Choices About Your Information\" section below."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may share your personal information with:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "With our agents in order to perform your requested service. Each of our Representatives is required to abide by a confidentiality agreement with regard to your requested services."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Third-party vendors and other service providers as needed to fulfil your request, such as retail merchants;"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Third-party vendors and other service providers that perform services on our behalf, as needed to carry out their work for us, which may include identifying and serving targeted advertisements, billing, payment processing, hosting, and record-keeping services. Pearmill uses Stripe to process payments and does not store your payment information or process payments. However, your information, including payment information, may be stored by third parties that transmit or process this data on our behalf, including Stripe and Twilio, which transmits text messages on our behalf. This Privacy Policy does not govern the data practices of our third party service providers."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Other companies whose products or services may be of interest to you;"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Other parties in connection with any company transaction, such as a merger, sale of all or a portion of company assets or shares, reorganization, financing, change of control or acquisition of all or a portion of our business by another company or third party or in the event of bankruptcy or related or similar proceedings; and"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Third parties as required by law or subpoena or, if we reasonably believe that such action is necessary, to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our Terms of Use or to protect the security or integrity of our Service; and/or (c) to exercise or protect the rights, property, or personal safety of Pearmill, our Users, or others."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may also aggregate or otherwise strip data of all personally identifying characteristics and may share that aggregated, anonymized data with third parties."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "4. YOUR CHOICES ABOUT YOUR INFORMATION"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "How to Control Your Communication Preferences"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You can stop receiving promotional email communications from us by clicking on the \"unsubscribe link\" provided in such communications. We make every effort to promptly process all unsubscribe requests. You may not opt out of Service-related communications (e.g., information about your request, changes/updates to our products or features of the Service, technical and security notices). If you want to opt-out of having your information shared with third parties for marketing purposes, you may contact us directly at contact@pearmill.com."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "By providing your mobile phone number to request our Service, you consent to receive SMS messages from Pearmill and you are responsible for all messaging and data charges that may apply. You can opt-out of receiving SMS messages by texting \"STOP\" at any time in response to a SMS communication. For assistance, text \"HELP\" at any time."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Modifying or Deleting Your Information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "If you have any questions about reviewing, modifying or deleting your information, you can contact us directly at contact@pearmill.com. Pearmill may retain your information for a commercially reasonable time for backup, archival, or audit purposes."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "5. HOW WE STORE AND PROTECT YOUR INFORMATION"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Storage and Processing"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Your information collected through our website may be stored and processed in the United States or any other country in which Pearmill or its subsidiaries, affiliates or service providers maintain facilities. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction, and you consent to the transfer of information to the U.S. or any other country in which Pearmill or its parent, subsidiaries, affiliates or service providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Keeping Your Information Safe"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmill cares about the security of your information, and uses commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information collected through our website. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, Pearmill will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "6. CHILDREN'S PRIVACY"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmill does not knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register as Users. In the event that we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible. If you believe that we might have any information from a child under 13, please contact us at contact@pearmill.com."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "7. THIRD PARTY WEB SITES AND SERVICES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "In order to provide our Service, it is necessary for us to share your information with third parties (such as retail merchants, etc) who help us provide our Services to you. Because of the nature of our Service, you may not know the identity of the third party vendor or service provider we share your personal information with in order to fulfil your request until your request has been fulfilled. We do our best to work with only reputable service providers, but we are not responsible for the data collection and use practices of these third party services. By electing to use our Service, you agree that we may share your personal information with these service providers for the purpose of fulfilling your request."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Our website may integrate with or contain links to other third party sites and services. We are not responsible for the practices employed by third party websites or services embedded in, linked to, or linked from our website and your interactions with any third-party website or service are subject to that third party's own rules and policies."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "8. PRIVACY AND CHANGE OF CONTROL"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "In the event Pearmill goes through a business transition, such as a merger, reorganization, financing, change of control, or acquisition or sale of all or a portion of our business, we may transfer your personal information as part of the transaction."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "9. CHANGES TO OUR PRIVACY POLICY"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "By using our Service, you consent to the collection, use and storage of your information by us in the manner described in this Privacy Policy. We reserve the right to make changes to this Privacy Policy from time to time. If this Privacy Policy changes in any way, we will place an updated version on this page. Regularly reviewing this page ensures that you are always aware of what information we collect, how we use it and under what circumstances, if any, we will share it with other parties."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Your Comments Are Appreciated"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "If you have any questions or comments regarding our privacy policy or our website, you can send us an email at contact@pearmill.com."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "This Privacy Policy was last updated on March 1, 2017."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_9__styles_global__["a" /* default */].__hash,
        css: __WEBPACK_IMPORTED_MODULE_9__styles_global__["a" /* default */]
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scoped
      }));
    }
  }]);

  return PrivacyPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })
/******/ ]);