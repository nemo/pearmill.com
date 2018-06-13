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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
var _defaultExport = ["#clients h1{text-align:center;font-style:normal;padding-bottom:3rem;}", "#clients .col-1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;}", "#clients .client-logo{min-height:60px;background-repeat:no-repeat;background-size:contain;background-position:center;}"];
_defaultExport.__hash = "951507357";
_defaultExport.__scoped = ["#clients.jsx-1612768668 h1.jsx-1612768668{text-align:center;font-style:normal;padding-bottom:3rem;}", "#clients.jsx-1612768668 .col-1.jsx-1612768668{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;}", "#clients.jsx-1612768668 .client-logo.jsx-1612768668{min-height:60px;background-repeat:no-repeat;background-size:contain;background-position:center;}"];
_defaultExport.__scopedHash = "1612768668";
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
  }, "Our creatives have served the very best"), external__react__default.a.createElement("div", {
    className: "jsx-".concat(grid["a" /* default */].__scopedHash, " jsx-").concat(clients.__scopedHash, " jsx-").concat(sections["a" /* default */].__scopedHash) + " " + 'grid'
  }, external__react__default.a.createElement("div", {
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

var _defaultExport = ["section#pricing{background:white;}", ".pricing{background:".concat(variables["a" /* backgroundColor */], ";padding:0.8rem;margin-bottom:1rem;}"), "#pricing h2{font-size:2.5rem;text-align:center;font-style:normal;margin-top:0px;}", "#pricing .lead{text-align:center;max-width:58rem;margin:0 auto;}", "#pricing .secondary-lead{font-size:0.9rem;color:".concat(variables["b" /* borderColor */], ";margin-top:0px;}"), ".pricing .plan-name{font-weight:bold;font-size:1.8rem;font-style:normal;margin-top:0px;margin-bottom:15px;}", ".pricing .price{font-size:1.5rem;font-weight:bold;font-style:normal;text-align:center;}", ".pricing .slider-container{padding:0px 15px;}", ".pricing .price-header{text-align:center;}", ".pricing .pricing-model{padding-top:15px;}", ".pricing .price.main{font-size:8rem;}", ".pricing .sub-total{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing .btn-container{padding-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing .sub-total-header{padding-top:50px;}", ".pricing .sub-total-header .plan-name{text-align:center !important;}", ".pricing .pricing-header{padding-top:15px;}", ".pricing .sub-total .plan-name{padding-right:15px;text-align:right;margin-bottom:0;}", ".pricing .sub-total .description{padding-left:15px;text-align:left;}", ".rc-slider-dot-active{border-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-track{background-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-handle{border-color:".concat(variables["e" /* primaryColor */], " !important;background-color:").concat(variables["e" /* primaryColor */], " !important;}"), ".pricing .what-you-get:first-child{border-right:1px solid ".concat(variables["b" /* borderColor */], ";}"), ".pricing .what-you-pay{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".pricing p{font-size:1.1rem;}", ".pricing .what-you-get,.pricing .what-you-pay{margin-top:40px;padding:0rem 0.8rem 1.2rem;height:100%;}", ".what-you-get h4,.what-you-pay h4{font-size:1.2rem;font-weight:bold;font-style:normal;padding:0;}", ".what-you-get h5,.what-you-pay h5{font-size:1rem;font-weight:bold;font-style:normal;margin-bottom:0.5rem;}", "@media (max-width:1100px){}", "@media (max-width:600px){}"];
_defaultExport.__hash = "3345852982";
_defaultExport.__scoped = ["section#pricing.jsx-1665427831{background:white;}", ".pricing.jsx-1665427831{background:".concat(variables["a" /* backgroundColor */], ";padding:0.8rem;margin-bottom:1rem;}"), "#pricing.jsx-1665427831 h2.jsx-1665427831{font-size:2.5rem;text-align:center;font-style:normal;margin-top:0px;}", "#pricing.jsx-1665427831 .lead.jsx-1665427831{text-align:center;max-width:58rem;margin:0 auto;}", "#pricing.jsx-1665427831 .secondary-lead.jsx-1665427831{font-size:0.9rem;color:".concat(variables["b" /* borderColor */], ";margin-top:0px;}"), ".pricing.jsx-1665427831 .plan-name.jsx-1665427831{font-weight:bold;font-size:1.8rem;font-style:normal;margin-top:0px;margin-bottom:15px;}", ".pricing.jsx-1665427831 .price.jsx-1665427831{font-size:1.5rem;font-weight:bold;font-style:normal;text-align:center;}", ".pricing.jsx-1665427831 .slider-container.jsx-1665427831{padding:0px 15px;}", ".pricing.jsx-1665427831 .price-header.jsx-1665427831{text-align:center;}", ".pricing.jsx-1665427831 .pricing-model.jsx-1665427831{padding-top:15px;}", ".pricing.jsx-1665427831 .price.main.jsx-1665427831{font-size:8rem;}", ".pricing.jsx-1665427831 .sub-total.jsx-1665427831{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing.jsx-1665427831 .btn-container.jsx-1665427831{padding-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".pricing.jsx-1665427831 .sub-total-header.jsx-1665427831{padding-top:50px;}", ".pricing.jsx-1665427831 .sub-total-header.jsx-1665427831 .plan-name.jsx-1665427831{text-align:center !important;}", ".pricing.jsx-1665427831 .pricing-header.jsx-1665427831{padding-top:15px;}", ".pricing.jsx-1665427831 .sub-total.jsx-1665427831 .plan-name.jsx-1665427831{padding-right:15px;text-align:right;margin-bottom:0;}", ".pricing.jsx-1665427831 .sub-total.jsx-1665427831 .description.jsx-1665427831{padding-left:15px;text-align:left;}", ".rc-slider-dot-active.jsx-1665427831{border-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-track.jsx-1665427831{background-color:".concat(variables["e" /* primaryColor */], " !important;}"), ".rc-slider-handle.jsx-1665427831{border-color:".concat(variables["e" /* primaryColor */], " !important;background-color:").concat(variables["e" /* primaryColor */], " !important;}"), ".pricing.jsx-1665427831 .what-you-get.jsx-1665427831:first-child{border-right:1px solid ".concat(variables["b" /* borderColor */], ";}"), ".pricing.jsx-1665427831 .what-you-pay.jsx-1665427831{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".pricing.jsx-1665427831 p.jsx-1665427831{font-size:1.1rem;}", ".pricing.jsx-1665427831 .what-you-get.jsx-1665427831,.pricing.jsx-1665427831 .what-you-pay.jsx-1665427831{margin-top:40px;padding:0rem 0.8rem 1.2rem;height:100%;}", ".what-you-get.jsx-1665427831 h4.jsx-1665427831,.what-you-pay.jsx-1665427831 h4.jsx-1665427831{font-size:1.2rem;font-weight:bold;font-style:normal;padding:0;}", ".what-you-get.jsx-1665427831 h5.jsx-1665427831,.what-you-pay.jsx-1665427831 h5.jsx-1665427831{font-size:1rem;font-weight:bold;font-style:normal;margin-bottom:0.5rem;}", "@media (max-width:1100px){}", "@media (max-width:600px){}"];
_defaultExport.__scopedHash = "1665427831";
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
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
      }, "# of Creatives"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
      }, "Price / Creative", external__react__default.a.createElement("br", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash)
      }), "(monthly)"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price-header'
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
      }, "Image ads, story or carousel ads optimzied for conversion for all major platforms.")), external__react__default.a.createElement("div", {
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
      }, sliders.images, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('images').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, imageRewardPrice.toLocaleString('en-US', {
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
      }, "Video ads, cut from raw-footage you provide, optomized for conversion.")), external__react__default.a.createElement("div", {
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
      }, sliders.videos, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('videos').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, videoRewardPrice.toLocaleString('en-US', {
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
      }, sliders.animations, "x"), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, this.pricePerCreative('animations').toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })), external__react__default.a.createElement("div", {
        className: "jsx-".concat(sections["a" /* default */].__scopedHash, " jsx-").concat(grid["a" /* default */].__scopedHash, " jsx-").concat(styles_button["a" /* default */].__scopedHash) + " " + 'col-1 price'
      }, animationRewardPrice.toLocaleString('en-US', {
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
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsPage; });
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





var TermsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(TermsPage, _Component);

  function TermsPage() {
    _classCallCheck(this, TermsPage);

    return _possibleConstructorReturn(this, (TermsPage.__proto__ || Object.getPrototypeOf(TermsPage)).apply(this, arguments));
  }

  _createClass(TermsPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmill \u2013 Terms of Service"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
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
      }, "Terms of Service", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
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
      }, "Terms of Use Agreement"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Welcome to Pearmill (\"Pearmill,\" \"we,\" or \"us\"). This page explains the terms by which you may use our online and/or mobile services, website, and software provided on or in connection with the service (collectively the \"Services\"). By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement (\"Agreement\") and to the collection and use of your information as set forth in the Pearmill Privacy Policy, whether or not you are a registered user of our Services. Pearmill reserves the right to make unilateral modifications to these terms and will provide notice of these changes as described below. This Agreement applies to all visitors, users, and others who access the Services (\"Users\")."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "1. Use of Our Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmillprovides a platform that enables users of Pearmill\u2019s Services to receive expert advice and opinions of many different kinds of products, and to have products purchased by third party providers of various services (each a \"Third Party Provider\")."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "A. Eligibility"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "This is a contract between you and Pearmill. You must read and agree to these terms before using the Services. If you do not agree, you may not use the Services. You may use the Services only if you can form a binding contract with Pearmill, and only in compliance with this Agreement and all applicable local, state, national, and international laws, rules and regulations."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You must be at least 13 years of age (or the age of legal majority in your jurisdiction if different than 18) to be eligible to use the Services. Any use or access to the Services by anyone under 13 is strictly prohibited and in violation of this Agreement. Some requests may not be made via the Service by users under 18 or 21 years of age. In certain instances, Pearmill may require you to provide proof of identity to create your account, or to access or use the Services, and you acknowledge and agree that you may be denied access or use of the Services if you refuse to provide such proof. The Services are not available to any Users previously removed from the Services by Pearmill."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "B. Pearmill Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to use the Services for your personal, noncommercial use only and as permitted by the features of the Services. Pearmill reserves all rights not expressly granted herein in the Services and the Pearmill Content (as defined below). Pearmill may terminate this license at any time for any reason or no reason."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "C. Pearmill Accounts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Your Pearmill account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion. We may maintain different types of accounts for different types of Users. If you open a Pearmill account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to this Agreement, and that you agree to this Agreement on the entity's behalf. By connecting to Pearmill with a third-party service, you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service. You may never use another User's account without permission. When creating your account, you must provide accurate and complete information, and you must keep this information up to date. Your failure to maintain accurate, complete, and up-to-date account information may result in your inability to access and use the Services or our termination of this Agreement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You are solely responsible for the activity that occurs on your account, and you must keep your account secure. You must notify Pearmill immediately of any breach of security or unauthorized use of your account. Pearmill will not be liable for any losses caused by any unauthorized use of your account."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "By providing Pearmill your email address you consent to our using the email address to send you Services-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Services and special offers. If you do not want to receive such email messages, you may opt out by emailing us at contact@pearmill.com. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "D. Services Rules"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated \"scraping\"; (ii) using any automated system, including without limitation \"robots,\" \"spiders,\" \"offline readers,\" etc., to access the Services (except that Pearmill grants the operators of public search engines revocable permission to use spiders to copy publically available materials from https://pearmill.com for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials); (iii) transmitting spam, chain letters, or other unsolicited email, SMS, or other messages; (iv) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Services; (v) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (vi) uploading invalid data, viruses, worms, or other software agents through the Services; (vii) collecting or harvesting any personally identifiable information, including account names, from the Services; (viii) using the Services for any commercial solicitation purposes; (ix) impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity; (x) interfering with the proper working of the Services; (xi) accessing any content on the Services through any technology or means other than those provided or authorized by the Services; or (xii) bypassing the measures we may use to prevent or restrict access to the Services, including without limitation features that prevent or restrict use or copying of any content or enforce limitations on use of the Services or the content therein."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We may, without prior notice, change the Services; stop providing the Services or features of the Services, to you or to Users generally; or create usage limits for the Services. We may permanently or temporarily terminate or suspend your access to the Services without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You are solely responsible for your interactions with other Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Pearmill shall have no liability for your interactions with other Users, or for any User's action or inaction."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "2. Mobile Software"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "A. Mobile Software. We may make available software to access the Services via a mobile device (\"Mobile Software\"). To use the Mobile Software you must have a mobile device that is compatible with the Mobile Software. Pearmill does not warrant that the Mobile Software will be compatible with your mobile device. You may use mobile data in connection with the Mobile Software and may incur additional charges from your wireless provider for these services. You agree that you are solely responsible for any such charges. Pearmill hereby grants you a non-exclusive, non-transferable, revocable license to use a compiled code copy of the Mobile Software for one Pearmill account on one mobile device owned or leased solely by you, for your personal use."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You may not: (i) modify, disassemble, decompile or reverse engineer the Mobile Software, except to the extent that such restriction is expressly prohibited by law; (ii) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Mobile Software to any third party or use the Mobile Software to provide time sharing or similar services for any third party; (iii) make any copies of the Mobile Software; (iv) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Mobile Software, features that prevent or restrict use or copying of any content accessible through the Mobile Software, or features that enforce limitations on use of the Mobile Software; or (v) delete the copyright and other proprietary rights notices on the Mobile Software. You acknowledge that Pearmill may from time to time issue upgraded versions of the Mobile Software, and may automatically electronically upgrade the version of the Mobile Software that you are using on your mobile device. You consent to such automatic upgrading on your mobile device, and agree that the terms and conditions of this Agreement will apply to all such upgrades. Any third-party code that may be incorporated in the Mobile Software is covered by the applicable open source or third-party license EULA, if any, authorizing use of such code. The foregoing license grant is not a sale of the Mobile Software or any copy thereof, and Pearmill or its third-party partners or suppliers retain all right, title, and interest in the Mobile Software (and any copy thereof). Any attempt by you to transfer any of the rights, duties or obligations hereunder, except as expressly provided for in this Agreement, is void. Pearmill reserves all rights not expressly granted under this Agreement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "If the Mobile Software is being acquired on behalf of the United States Government, then the following provision applies. The Mobile Software will be deemed to be \"commercial computer software\" and \"commercial computer software documentation,\" respectively, pursuant to DFAR Section 227.7202 and FAR Section 12.212, as applicable. Any use, reproduction, release, performance, display or disclosure of the Services and any accompanying documentation by the U.S. Government will be governed solely by these Terms of Services and is prohibited except to the extent expressly permitted by these Terms of Services. The Mobile Software originates in the United States, and is subject to United States export laws and regulations. The Mobile Software may not be exported or re-exported to certain countries or those persons or entities prohibited from receiving exports from the United States. In addition, the Mobile Software may be subject to the import and export laws of other countries. You agree to comply with all United States and foreign laws related to use of the Mobile Software and the Services."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "B. Mobile Software from iTunes. The following applies to any Mobile Software you acquire from the iTunes Store (\"iTunes-Sourced Software\"): You acknowledge and agree that this Agreement is solely between you and Pearmill, not Apple, and that Apple has no responsibility for the iTunes-Sourced Software or content thereof. Your use of the iTunes-Sourced Software must comply with the App Store Terms of Services. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the iTunes-Sourced Software. In the event of any failure of the iTunes-Sourced Software to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the iTunes-Sourced Software to you; to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the iTunes-Sourced Software, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be solely governed by this Agreement and any law applicable to Pearmill as provider of the software. You acknowledge that Apple is not responsible for addressing any claims of you or any third party relating to the iTunes-Sourced Software or your possession and/or use of the iTunes-Sourced Software, including, but not limited to: (i) product liability claims; (ii) any claim that the iTunes-Sourced Software fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation; and all such claims are governed solely by this Agreement and any law applicable to Pearmill as provider of the software. You acknowledge that, in the event of any third-party claim that the iTunes-Sourced Software or your possession and use of that iTunes-Sourced Software infringes that third party's intellectual property rights, Pearmill, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim to the extent required by this Agreement. You and Pearmill acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of this Agreement as relates to your license of the iTunes-Sourced Software, and that, upon your acceptance of the terms and conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement as relates to your license of the iTunes-Sourced Software against you as a third-party beneficiary thereof."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "3. Our Proprietary Rights"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "The Services and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, and music (the \"Pearmill Content\"), and all Intellectual Property Rights related thereto, are the exclusive property of Pearmill and its licensors. Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Pearmill Content. Use of the Pearmill Content for any purpose not expressly permitted by this Agreement is strictly prohibited."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You may choose to or we may invite you to submit comments or ideas about the Services, including without limitation about how to improve the Services or our products (\"Ideas\"). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Pearmill under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Pearmill does not waive any rights to use similar or related ideas previously known to Pearmill, or developed by its employees, or obtained from sources other than you."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "4. Paid Services"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "A. Billing Policies. Certain aspects of the Services may be provided for a fee or other charge. Pearmill may add new services for additional fees and charges, add or amend fees and charges for existing services, at any time in its sole discretion. Any change to our pricing or payment terms shall become effective in the billing cycle following notice of such change to you as provided in this Agreement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "B. No Refunds. You may cancel your Pearmill account or any requests at any time; however, you are not entitled to any refund for cancellation. Pearmill provides refunds for purchases only in Pearmill\u2019s sole discretion. In the event that Pearmill suspends or terminates your account or this Agreement, you understand and agree that you shall receive no refund or exchange for any Pearmill Property, any content or data associated with your account, or for anything else, except if, in Pearmill\u2019s sole discretion, Pearmill provides you a refund or exchange."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "C. Payment Information; Taxes. All information that you provide in connection with a purchase or transaction or other monetary transaction interaction with the Services must be accurate, complete, and current. You agree to pay all charges incurred by users of your credit card, debit card, or other payment method used in connection with a purchase or transaction or other monetary transaction interaction with the Services at the prices in effect when such charges are incurred. You will pay any applicable taxes, if any, relating to any such purchases, transactions or other monetary transaction interactions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "D. California Residents. The provider of services is set forth herein. If you are a California resident, in accordance with Cal. Civ. Code \xA71789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "5. Privacy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "We care about the privacy of our Users. You understand that by using the Services you consent to the collection, use and disclosure of your personally identifiable information and aggregate data as set forth in our Privacy Policy, and to have your personally identifiable information collected, used, transferred to and processed in the United States."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "6. Security"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "Pearmillcares about the integrity and security of your personal information. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "7. Third-Party Links and Information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "The Services may contain links to third-party materials that are not owned or controlled by Pearmill. Pearmill does not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access a third-party website or service from the Services, you do so at your own risk, and you understand that this Agreement and Pearmill\u2019s Privacy Policy do not apply to your use of such sites. You expressly relieve Pearmill from any and all liability arising from your use of any third-party website, service, or content. Additionally, your dealings with or participation in promotions of advertisers found on the Services, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertisers. You agree that Pearmill shall not be responsible for any loss or damage of any sort relating to your dealings with such advertisers."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "8. Indemnity"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "You agree to defend, indemnify and hold harmless Pearmill and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services, including any data or content transmitted or received by you; (ii) your violation of any term of this Agreement, including without limitation your breach of any of the representations and warranties above; (iii) your violation of any third-party right, including without limitation any right of privacy, Intellectual Property Rights, and any rights of Third Party Providers; (iv) your violation of any applicable law, rule or regulation; (v) any content that is submitted via your account including without limitation misleading, false, or inaccurate information; (vi) your willful misconduct; or (vii) any other party's access and use of the Services with your unique username, password or other appropriate security code."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "9. No Warranty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. USE OF THE SERVICE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE BRIEF OR THROUGH THE SERVICE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE FOREGOING, THE BRIEF, ITS SUBSIDIARIES, ITS AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; THAT ANY REQUESTS WILL BE MET SATISFACTORILY OR AT ALL; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICE."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "THE BRIEF DOES NOT GUARANTEE THE SUITABILITY, SAFETY, OR ABILITY OF ANY THIRD PARTY PROVIDER, NOR THAT ANY SUCH THIRD PARTY PROVIDER WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS. THE BRIEF DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE THE BRIEF SERVICE OR ANY HYPERLINKED WEBSITE OR SERVICE, AND THE BRIEF WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND PROVIDERS OF SUCH THIRD PARTY PRODUCTS OR SERVICES."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "FEDERAL LAW, SOME STATES, PROVINCES AND OTHER JURISDICTIONS DO NOT ALLOW THE EXCLUSION AND LIMITATIONS OF CERTAIN IMPLIED WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS AND EXCLUSIONS UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "10. Limitation of Liability"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE BRIEF, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THIS SERVICE. UNDER NO CIRCUMSTANCES WILL THE BRIEF BE RESPONSIBLE FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE BRIEF ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF REQUESTS OR CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR SERVICE; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY; (VI) ANY ERRORS OR OMISSIONS IN ANY REQUESTS OR CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICE; (VII) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY; AND/OR (VIII) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY THIRD PARTY PROVIDER. IN NO EVENT SHALL THE BRIEF, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID TO THE BRIEF HEREUNDER OR $100.00, WHICHEVER IS GREATER."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF THE BRIEF HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS, EXCLUSIONS, AND LIMITATIONS OF LIABILITY UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "11. Governing Law, Arbitration, and Class Action/Jury Trial Waiver"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "A. Governing Law. You agree that: (i) the Services shall be deemed solely based in California; and (ii) the Services shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdictions other than California. This Agreement shall be governed by the internal substantive laws of the State of California, without respect to its conflict of laws principles. The parties acknowledge that this Agreement evidences a transaction involving interstate commerce. Notwithstanding the preceding sentences with respect to the substantive law, any arbitration conducted pursuant to the terms of this Agreement shall be governed by the Federal Arbitration Act (9 U.S.C. \xA7\xA7 1-16). The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the personal jurisdiction of the federal and state courts located in Santa Clara County, California for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision below, including any provisional relief required to prevent irreparable harm. You agree that Santa Clara County, California is the proper forum for any appeals of an arbitration award or for trial court proceedings in the event that the arbitration provision below is found to be unenforceable."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "B. Arbitration. For any dispute with Pearmill, you agree to first contact us at contact@pearmill.com and attempt to resolve the dispute with us informally. In the unlikely event that Pearmill has not been able to resolve a dispute it has with you after sixty (60) days, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to this Agreement, or the breach or alleged breach thereof (collectively, \"Claims\"), by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. JAMS may be contacted at www.jamsadr.com. The arbitration will be conducted in Santa Clara County, California, unless you and Pearmill agree otherwise. If you are using the Services for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys' fees and reasonable costs for expert and other witnesses. If you are an individual using the Services for non-commercial purposes: (i) JAMS may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from JAMS; (ii) the award rendered by the arbitrator may include your costs of arbitration, your reasonable attorney's fees, and your reasonable costs for expert and other witnesses; and (iii) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing Pearmill from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, Intellectual Property Rights or other proprietary rights."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "C. Class Action/Jury Trial Waiver. WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER THEY HAVE OBTAINED OR USED THE SERVICE FOR PERSONAL, COMMERCIAL OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION OR OTHER REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND THE BRIEF ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "12. General"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "A. Assignment. This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Pearmill without restriction. Any attempted transfer or assignment in violation hereof shall be null and void."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "B. Notification Procedures and Changes to the Agreement. Pearmill may provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through posting of such notice on our website, as determined by Pearmill in our sole discretion. Pearmill reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in this Agreement. Pearmill is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. Pearmill may, in its sole discretion, modify or update this Agreement from time to time, and so you should review this page periodically. When we change the Agreement in a material manner, we will update the \u2018last modified' date at the bottom of this page. Your continued use of the Services after any such change constitutes your acceptance of the new Terms of Use. If you do not agree to any of these terms or any future Terms of Use, do not use or access (or continue to access) the Services."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "C. Entire Agreement/Severability. This Agreement, together with any amendments and any additional agreements you may enter into with Pearmill in connection with the Services, shall constitute the entire agreement between you and Pearmill concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect, except that in the event of unenforceability of the universal Class Action/Jury Trial Waiver, the entire arbitration agreement shall be unenforceable."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "D. No Waiver. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Pearmill failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_10__styles_sections__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_11__styles_header__["a" /* default */].__scopedHash)
      }, "E. Contact. Please contact us at contact@pearmill.com with any questions regarding this Agreement. This Agreement was last modified on February 10, 2016."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
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

  return TermsPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })
/******/ ]);