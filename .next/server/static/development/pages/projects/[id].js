module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FacebookIcon = function FacebookIcon(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M30.5 0C13.655 0 0 13.655 0 30.5c0 15.29 11.264 27.917 25.94 30.122v-22.04h-7.545v-8.018h7.545V25.23c0-8.833 4.304-12.71 11.645-12.71 3.517 0 5.374.26 6.256.379v6.996h-5.008c-3.117 0-4.206 2.956-4.206 6.286v4.383h9.134l-1.238 8.019H34.63v22.103C49.517 58.67 61 45.939 61 30.5 61 13.655 47.345 0 30.5 0z",
    fill: "#5B5B5B"
  }));
};

FacebookIcon.defaultProps = {
  width: "61",
  height: "61",
  viewBox: "0 0 61 61",
  xmlns: "http://www.w3.org/2000/svg"
};

var GithubIcon = function GithubIcon(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M22.107 62.77A2.798 2.798 0 0 0 23.8 60.2v-7.56c0-.276.022-.563.057-.854a.856.856 0 0 1-.057.014h-5.04c-2.1 0-3.92-.84-4.76-2.52-.98-1.82-1.4-4.9-3.92-6.58-.42-.28-.14-.7.7-.7.84.14 2.66 1.26 3.78 2.8 1.26 1.54 2.52 2.8 4.76 2.8 3.482 0 5.348-.175 6.47-.777 1.308-1.945 3.119-3.423 5.01-3.423v-.035c-7.935-.255-13.005-2.893-15.365-6.965-5.131.059-9.598.567-12.148.99a30.152 30.152 0 0 1-.211-1.382c2.516-.415 6.78-.906 11.683-1a11.427 11.427 0 0 1-.408-1.188c-4.915-.25-9.157-.055-11.461.136-.028-.465-.066-.929-.072-1.4 2.309-.188 6.436-.377 11.225-.154-.11-.7-.182-1.416-.182-2.16 0-2.38.84-4.9 2.38-7-.7-2.38-1.68-7.42.28-9.24 3.78 0 6.44 1.82 7.7 2.94C26.6 15.96 29.26 15.4 32.2 15.4c2.94 0 5.6.56 7.84 1.54 1.26-1.12 3.92-2.94 7.7-2.94 2.1 1.96.98 7 .28 9.24 1.54 2.1 2.38 4.48 2.24 7 0 .678-.063 1.331-.154 1.973 4.898-.241 9.138-.048 11.485.142-.002.472-.046.933-.071 1.399-2.34-.193-6.685-.392-11.703-.125-.124.47-.275.928-.455 1.372 4.965.065 9.331.545 11.968.965-.06.465-.13.925-.212 1.382-2.677-.429-7.24-.93-12.43-.955-2.331 4.03-7.308 6.657-15.088 6.963v.044c3.64 0 7 5.46 7 9.24v7.56c0 1.152.697 2.142 1.692 2.57C55.118 58.525 64.4 46.43 64.4 32.2 64.4 14.445 49.956 0 32.2 0S0 14.445 0 32.2c0 14.23 9.282 26.325 22.107 30.57z",
    fill: "#5B5B5B"
  }));
};

GithubIcon.defaultProps = {
  width: "65",
  height: "63",
  viewBox: "0 0 65 63",
  xmlns: "http://www.w3.org/2000/svg"
};

var InstagramIcon = function InstagramIcon(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M7.327 0C3.307 0 0 3.306 0 7.327v40.264C0 51.594 3.306 54.9 7.327 54.9h40.264c4.003 0 7.309-3.306 7.309-7.31V7.328C54.9 3.307 51.594 0 47.59 0H7.328zm40.264 4.575h-6.416v9.15h9.15V7.327a2.727 2.727 0 0 0-2.734-2.752zM27.45 18.3a9.122 9.122 0 0 1 9.15 9.15 9.122 9.122 0 0 1-9.15 9.15 9.122 9.122 0 0 1-9.15-9.15 9.122 9.122 0 0 1 9.15-9.15zm-13.725 9.15h-9.15v20.14a2.727 2.727 0 0 0 2.752 2.735h40.264a2.723 2.723 0 0 0 2.734-2.734V27.45h-9.15c0 7.56-6.165 13.725-13.725 13.725S13.725 35.01 13.725 27.45z",
    fill: "#5B5B5B",
    fillRule: "evenodd"
  }));
};

InstagramIcon.defaultProps = {
  width: "55",
  height: "55",
  viewBox: "0 0 55 55",
  xmlns: "http://www.w3.org/2000/svg"
};
const FooterWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer__FooterWapper",
  componentId: "sc-1yoaa1r-0"
})(["height:40vh;color:var(--blackTextColor);font-size:1.5rem;width:80%;margin:5rem auto 0;text-align:center;scroll-behavior:smooth;display:flex;flex-direction:column;align-items:stretch;justify-content:space-evenly;& > h2{font-weight:200;width:70%;margin:0 auto;}"]);
const IconsWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__IconsWapper",
  componentId: "sc-1yoaa1r-1"
})(["display:flex;align-items:center;justify-content:space-evenly;& > a > svg{height:5rem;}"]);

const Footer = () => {
  return __jsx(FooterWapper, {
    id: "contactme",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Contact Me"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Let's Build Something Together Feel free to reach out if you're looking for a Front end web developer,"), __jsx(IconsWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/pasupuleti.jithin/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(FacebookIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://github.com/nagasaijithin",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(GithubIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/nagasaijithin_pasupuleti/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(InstagramIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./images/fulllayout/moviesFOne.png":
/*!******************************************!*\
  !*** ./images/fulllayout/moviesFOne.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/moviesFOne-cba02d1a0e4b5a018450dbaff865b8b5.png";

/***/ }),

/***/ "./images/fulllayout/moviesFhome.png":
/*!*******************************************!*\
  !*** ./images/fulllayout/moviesFhome.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/moviesFhome-3780530803fea8d69920812f036cbbf5.png";

/***/ }),

/***/ "./images/fulllayout/photoFcollection.png":
/*!************************************************!*\
  !*** ./images/fulllayout/photoFcollection.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photoFcollection-0c8209ae645511efd7bcb1b452bcf083.png";

/***/ }),

/***/ "./images/fulllayout/photoFhome.png":
/*!******************************************!*\
  !*** ./images/fulllayout/photoFhome.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photoFhome-cceb19fa732aaf39ebf4f3093f9dbe3b.png";

/***/ }),

/***/ "./images/fulllayout/photoFone.png":
/*!*****************************************!*\
  !*** ./images/fulllayout/photoFone.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photoFone-8f270237133830880a9a8b97eaaaec83.png";

/***/ }),

/***/ "./images/fulllayout/restaruntFhome.png":
/*!**********************************************!*\
  !*** ./images/fulllayout/restaruntFhome.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/restaruntFhome-37942035ccc6cabf7ad63bfd9322e207.png";

/***/ }),

/***/ "./images/fulllayout/sayhiFhome.png":
/*!******************************************!*\
  !*** ./images/fulllayout/sayhiFhome.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sayhiFhome-55544ab81a044c53990a64a3914ba951.png";

/***/ }),

/***/ "./images/fulllayout/sayhiFprofile.png":
/*!*********************************************!*\
  !*** ./images/fulllayout/sayhiFprofile.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sayhiFprofile-fc2b99b61c9ea94220a3a3c2c13ad5fb.png";

/***/ }),

/***/ "./images/gifs/movies.gif":
/*!********************************!*\
  !*** ./images/gifs/movies.gif ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/movies-b16069c48785625c4bf92471f15142e9.gif";

/***/ }),

/***/ "./images/gifs/photo.gif":
/*!*******************************!*\
  !*** ./images/gifs/photo.gif ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photo-819e57df78ee0265ba1fcfbf7967c9d7.gif";

/***/ }),

/***/ "./images/gifs/restarunt.gif":
/*!***********************************!*\
  !*** ./images/gifs/restarunt.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/restarunt-acd0f6e6e112be95c544109dfc33e4a2.gif";

/***/ }),

/***/ "./images/gifs/sayhi.gif":
/*!*******************************!*\
  !*** ./images/gifs/sayhi.gif ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sayhi-caedb8220bb31ac8ce527fefeebb3cc0.gif";

/***/ }),

/***/ "./images/posters/movieshub.png":
/*!**************************************!*\
  !*** ./images/posters/movieshub.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/movieshub-1fb65d7173130e5dd2aec3094978bae4.png";

/***/ }),

/***/ "./images/posters/photohub.png":
/*!*************************************!*\
  !*** ./images/posters/photohub.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/photohub-6386308253fd26b8ec5a0ea80a9b4ffa.png";

/***/ }),

/***/ "./images/posters/restarunt.png":
/*!**************************************!*\
  !*** ./images/posters/restarunt.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/restarunt-4408be914bae1616e3bb4af69896d803.png";

/***/ }),

/***/ "./images/posters/sayhi.png":
/*!**********************************!*\
  !*** ./images/posters/sayhi.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sayhi-5e781de2bc37a08746cfc553537f19db.png";

/***/ }),

/***/ "./images/posters/weatherapp.png":
/*!***************************************!*\
  !*** ./images/posters/weatherapp.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/weatherapp-25b96184378422c9cda6fa81632b5f24.png";

/***/ }),

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/posters/movieshub.png */ "./images/posters/movieshub.png");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/posters/photohub.png */ "./images/posters/photohub.png");
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/posters/restarunt.png */ "./images/posters/restarunt.png");
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/posters/sayhi.png */ "./images/posters/sayhi.png");
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/posters/weatherapp.png */ "./images/posters/weatherapp.png");
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/gifs/movies.gif */ "./images/gifs/movies.gif");
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/gifs/photo.gif */ "./images/gifs/photo.gif");
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/gifs/restarunt.gif */ "./images/gifs/restarunt.gif");
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/gifs/sayhi.gif */ "./images/gifs/sayhi.gif");
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_fulllayout_moviesFhome_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/fulllayout/moviesFhome.png */ "./images/fulllayout/moviesFhome.png");
/* harmony import */ var _images_fulllayout_moviesFhome_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_moviesFhome_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_fulllayout_moviesFOne_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/fulllayout/moviesFOne.png */ "./images/fulllayout/moviesFOne.png");
/* harmony import */ var _images_fulllayout_moviesFOne_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_moviesFOne_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_fulllayout_photoFcollection_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/fulllayout/photoFcollection.png */ "./images/fulllayout/photoFcollection.png");
/* harmony import */ var _images_fulllayout_photoFcollection_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_photoFcollection_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_fulllayout_photoFhome_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/fulllayout/photoFhome.png */ "./images/fulllayout/photoFhome.png");
/* harmony import */ var _images_fulllayout_photoFhome_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_photoFhome_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_fulllayout_photoFone_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/fulllayout/photoFone.png */ "./images/fulllayout/photoFone.png");
/* harmony import */ var _images_fulllayout_photoFone_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_photoFone_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_fulllayout_restaruntFhome_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/fulllayout/restaruntFhome.png */ "./images/fulllayout/restaruntFhome.png");
/* harmony import */ var _images_fulllayout_restaruntFhome_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_restaruntFhome_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_fulllayout_sayhiFhome_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../images/fulllayout/sayhiFhome.png */ "./images/fulllayout/sayhiFhome.png");
/* harmony import */ var _images_fulllayout_sayhiFhome_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_sayhiFhome_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _images_fulllayout_sayhiFprofile_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/fulllayout/sayhiFprofile.png */ "./images/fulllayout/sayhiFprofile.png");
/* harmony import */ var _images_fulllayout_sayhiFprofile_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_fulllayout_sayhiFprofile_png__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\pages\\projects\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 /////
// all image
/////





 /////
// all gif
/////




 /////
// all fulllayout
/////









const projectdata = [{
  name: "SayHI",
  info: "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
  image: _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  imagegif: _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
  site: "https://sayhi-dev-5fc85.firebaseapp.com/",
  code: "https://github.com/nagasaijithin/sayhi",
  stack: ["React", "Redux", "styled-components", "firebase"],
  fullimages: [_images_fulllayout_sayhiFhome_png__WEBPACK_IMPORTED_MODULE_19___default.a, _images_fulllayout_sayhiFprofile_png__WEBPACK_IMPORTED_MODULE_20___default.a],
  fullimgcontent: ["This a home page of SayHi application, we can check the new post a post show's how many likes and comments when you click the post or comment icon you go to the post page there you can accesses all comments you can also like comment, This Home aloes without reloading content well update and more...", "This a profile page of SayHi application, we can check how many people following also, check the user follows and posted a posts show's how many likes and comments post had when you click the post or comment icon you go to the post page there you can accesses all comments you can also like comment, This page allows without reloading content well update and more..."],
  fullcontent: "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it Provides The Realtime database, firestore, cloud functions, Deployments, That Inspires Me To Build This Web Application Along The Way I learn a lot of things about react, redux, firebase, styled-components, after completed this project that motived me learn more about this awesome tool   "
}, {
  name: "PhotoHub",
  info: "PhotoHub, you can Download Most Beautiful Images And collections...",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  imagegif: _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
  stack: ["React", "Redux", "styled-components"],
  code: "https://github.com/nagasaijithin/photo",
  site: "https://photohubjithin.netlify.app/",
  fullimages: [_images_fulllayout_photoFhome_png__WEBPACK_IMPORTED_MODULE_16___default.a, _images_fulllayout_photoFone_png__WEBPACK_IMPORTED_MODULE_17___default.a, _images_fulllayout_photoFcollection_png__WEBPACK_IMPORTED_MODULE_15___default.a],
  fullimgcontent: ["PhotoHub providing beautiful images to a user, you can download images on one click and also click the image you turns into image page that shows you more related image", "This a Image page of PhotoHub That Shows the related images depending on The top image you can see the related tag in when you click the link you turns into tags related images page you can also go to next page using bottom  buttons", "This a Collections page of PhotoHub That Shows the different types of collections and when you click collection that shows collection related images there are different types of collection one page shows 25 collections you don't find a favorite collection then you can also go to next page using the bottom buttons"],
  fullcontent: "Photo hub is service to providing high-quality images for a user can see the different types of images and collections and Download images. This build with react,redux and styled-components with 'unsplash' API "
}, {
  name: "Movies",
  info: "Movies, We can See Different types of movies and trailers and cast...",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  imagegif: _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_9___default.a,
  stack: ["Html", "Sass", "javascript"],
  code: "https://github.com/nagasaijithin/movies.nagasaijithin",
  site: "https://moviesjithin.netlify.app/",
  fullimages: [_images_fulllayout_moviesFhome_png__WEBPACK_IMPORTED_MODULE_13___default.a, _images_fulllayout_moviesFOne_png__WEBPACK_IMPORTED_MODULE_14___default.a],
  fullimgcontent: ["This home page of movie site that show top-rated movies and also upcoming movies, actions movies that all data come from API 'MoviesDb' when clicking the movie card that shows movies info ", "This Time doesn't turn into the page it only changes the content like a single-page. that shows a poster of the movie and cats and rating of the movie it's providing movies trailer  and also shows related movies"],
  fullcontent: "Movies application build with HTML, CSS, javascript, and API from Themoviedb it's provided movies information like cast, trailers, movies rating and related movies "
}, {
  name: "Weather App",
  info: "Weather App, You Can Check The Weather And around City Weather...",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  imagegif: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  stack: ["Html", "Sass", "javascript"],
  code: "https://github.com/nagasaijithin/weathermain.nagasaijithin",
  site: "https://weatherjithin.netlify.app/",
  fullimages: [],
  fullcontent: " Weather app build with Html, CSS, javascript and OpenWeather API, This App Detects Your Current Location Then Show About Your Weather And Humidity, Wind And around City Weather,"
}, {
  name: "Restaurant",
  info: "Restaurants app, You can Check the Hotels and Reviews...",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  imagegif: _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
  fullimgcontent: ["This restaurant website build  with HTML, CSS, javascript, and API using Zomato API that shows restaurants images if like a restaurant that store local storage and if click the restaurants that restaurant background color change  like visited link type using session storage"],
  stack: ["Html", "Sass", "javascript"],
  site: "https://restaurantsjithin.netlify.app/",
  code: "https://github.com/nagasaijithin/restaurantsapp.nagasaijithin",
  fullimages: [_images_fulllayout_restaruntFhome_png__WEBPACK_IMPORTED_MODULE_18___default.a],
  fullcontent: "Restaurant Application Build with HTML, CSS, Javascript, and Zomato API, This App Detects The Current Location And Show  Around The Restaurant's Ratings, Images And More "
}];
const ProjectWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ProjectWapper",
  componentId: "sc-1p6cphk-0"
})(["width:100%;color:var(--blackTextColor);padding:3rem;z-index:5;"]);
const PosterWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__PosterWapper",
  componentId: "sc-1p6cphk-1"
})(["margin:3rem 0;& > div{& > h1{font-size:17rem;text-align:center;margin:2rem 0;-webkit-text-stroke-color:var(--blackTextColor);-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;font-weight:300;}& > img{box-shadow:5px 4px 10px rgb(0,0,0,64%);width:100%;}}"]);
const ContentWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ContentWapper",
  componentId: "sc-1p6cphk-2"
})(["margin:3rem 0;& > div{& > h2{margin:2rem 0;font-size:6rem;}}"]);
const BackgroundText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "id__BackgroundText",
  componentId: "sc-1p6cphk-3"
})(["position:fixed;left:50%;top:50%;transform:translate(-43%,-43%) rotate(7deg);color:var(--blackBackgroundColor);font-size:23rem;font-weight:900;text-shadow:10px 4px 9px rgb(0 0 0 / 15%);"]);
const StackWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__StackWapper",
  componentId: "sc-1p6cphk-4"
})(["margin:5rem 0;& > h2{-webkit-text-stroke-color:var(--blackTextColor);-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;font-weight:300;}& > ul{width:70%;margin:2rem auto;font-size:3rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;& > li{list-style-type:circle;}}"]);
const BtnWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__BtnWapper",
  componentId: "sc-1p6cphk-5"
})(["font-size:2.5rem;height:10vh;display:flex;align-items:center;justify-content:space-around;margin:2rem 0;& > a{padding:1.5rem 1rem;color:var(--blackTextColor);text-decoration:none;border:1px solid var(--blackTextColor);border-radius:20rem;position:relative;overflow:hidden;&:hover{&::after{height:100%;}}&::after{content:\"\";position:absolute;width:100%;height:0%;background-color:var(--blackTextColor);mix-blend-mode:difference;left:50%;top:50%;transform:translate(-50%,-50%);transition:all 0.6s ease-in;}& > p{position:relative;z-index:3;mix-blend-mode:difference;}}"]);
const FullimageWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__FullimageWapper",
  componentId: "sc-1p6cphk-6"
})(["margin:4rem;& > div{display:flex;align-items:center;& > div{font-size:4rem;padding:3rem;}& > img{height:50%;width:50%;box-shadow:1px 2px 10px black;}}& > div:nth-child(even){& > div{order:1;}& > img{order:2;}}"]);

const Id = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  const oneproject = projectdata.filter((data, i) => i == id);

  if (oneproject.length >= 1) {
    const {
      name,
      image,
      fullcontent,
      stack,
      site,
      code,
      fullimages,
      fullimgcontent
    } = oneproject[0];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ProjectWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }
    }, __jsx(PosterWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 15
      }
    }, name)), __jsx(BtnWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: site,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }, "View Site")), __jsx("a", {
      href: code,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }, "Code"))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 15
      }
    }))), __jsx(ContentWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 15
      }
    }, fullcontent)), __jsx(StackWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }, "Stack"), __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 15
      }
    }, stack.map((data, i) => __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 19
      }
    }, data)))), __jsx(FullimageWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 13
      }
    }, fullimages.map((data, i) => __jsx("div", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: data,
      alt: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 19
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 19
      }
    }, fullimgcontent ? fullimgcontent[i] : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 11
      }
    })), __jsx(BackgroundText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }
    }, name));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Id);

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/projects/[id].js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\portfolio\pages\projects\[id].js */"./pages/projects/[id].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRk9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmNvbGxlY3Rpb24ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRm9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvcmVzdGFydW50RmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRnByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL21vdmllcy5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvc2F5aGkuZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcGhvdG9odWIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3Jlc3RhcnVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2plY3RzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJHaXRodWJJY29uIiwiSW5zdGFncmFtSWNvbiIsIkZvb3RlcldhcHBlciIsInN0eWxlZCIsImZvb3RlciIsIkljb25zV2FwcGVyIiwiZGl2IiwiRm9vdGVyIiwicHJvamVjdGRhdGEiLCJuYW1lIiwiaW5mbyIsImltYWdlIiwic2F5aGkiLCJpbWFnZWdpZiIsInNheWhpZ2lmIiwic2l0ZSIsImNvZGUiLCJzdGFjayIsImZ1bGxpbWFnZXMiLCJzYXloaUZob21lIiwic2F5aGlGcHJvZmlsZSIsImZ1bGxpbWdjb250ZW50IiwiZnVsbGNvbnRlbnQiLCJwaG90b2h1YiIsInBob3RvZ2lmIiwicGhvdG9GaG9tZSIsInBob3RvRm9uZSIsInBob3RvRmNvbGxlY3Rpb24iLCJtb3ZpZXNQb3N0ZXIiLCJtb3ZpZXNnaWYiLCJtb3ZpZXNGaG9tZSIsIm1vdmllc0ZPbmUiLCJ3ZXRoZXJhcHAiLCJyZXN0YXJ1bnQiLCJyZXN0YXJ1bnRnaWYiLCJyZXN0YXJ1bnRGaG9tZSIsIlByb2plY3RXYXBwZXIiLCJQb3N0ZXJXYXBwZXIiLCJDb250ZW50V2FwcGVyIiwiQmFja2dyb3VuZFRleHQiLCJoMSIsIlN0YWNrV2FwcGVyIiwiQnRuV2FwcGVyIiwiRnVsbGltYWdlV2FwcGVyIiwiSWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25lcHJvamVjdCIsImZpbHRlciIsImRhdGEiLCJpIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFD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QUFPQyxDQUFQLEtBQ2Q7QUFBSyxTQUFHLEVBQUVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRCxJQUFWO0FBQWdCLFNBQUcsRUFBRUMsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHL0IsY0FBYyxHQUNYQSxjQUFjLENBQUMrQixDQUFELENBREgsR0FFWCxna0JBSE4sQ0FGRixDQURELENBREgsQ0FaRixDQWxCRixFQTJDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQ0YsQ0FERixFQThDRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQjNDLElBQWpCLENBOUNGLENBREY7QUFrREQsR0E5REQsTUE4RE87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBckVEOztBQXNFZW1DLGlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0c1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIi4uL2ltYWdlcy9mYWNlYm9va0ljb24uc3ZnXCI7XHJcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi9pbWFnZXMvZ2l0aHViaWNvbi5zdmdcIjtcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIi4uL2ltYWdlcy9pbnN0YWdyYW1pY29uLnN2Z1wiO1xyXG5jb25zdCBGb290ZXJXYXBwZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIGhlaWdodDogNDB2aDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiA1cmVtIGF1dG8gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAmID4gaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uc1dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICYgPiBhID4gc3ZnIHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldhcHBlciBpZD1cImNvbnRhY3RtZVwiPlxyXG4gICAgICA8aDE+Q29udGFjdCBNZTwvaDE+XHJcbiAgICAgIDxoMj5cclxuICAgICAgICBMZXQncyBCdWlsZCBTb21ldGhpbmcgVG9nZXRoZXIgRmVlbCBmcmVlIHRvIHJlYWNoIG91dCBpZiB5b3UncmUgbG9va2luZ1xyXG4gICAgICAgIGZvciBhIEZyb250IGVuZCB3ZWIgZGV2ZWxvcGVyLFxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8SWNvbnNXYXBwZXI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wYXN1cHVsZXRpLmppdGhpbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbmFnYXNhaWppdGhpbl9wYXN1cHVsZXRpL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnN0YWdyYW1JY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0ljb25zV2FwcGVyPlxyXG4gICAgPC9Gb290ZXJXYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllc0ZPbmUtY2JhMDJkMWEwZTRiNWEwMTg0NTBkYmFmZjg2NWI4YjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllc0Zob21lLTM3ODA1MzA4MDNmZWE4ZDY5OTIwODEyZjAzNmNiYmY1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9waG90b0Zjb2xsZWN0aW9uLTBjODIwOWFlNjQ1NTExZWZkN2JjYjFiNDUyYmNmMDgzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9waG90b0Zob21lLWNjZWIxOWZhNzMyYWFmMzllYmY0ZjMwOTNmOWRiZTNiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9waG90b0ZvbmUtOGYyNzAyMzcxMzM4MzA4ODBhOWE4Yjk3ZWFhYWVjODMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudEZob21lLTM3OTQyMDM1Y2NjNmNhYmY3YWQ2M2JmZDkzMjJlMjA3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zYXloaUZob21lLTU1NTQ0YWI4MWEwNDRjNTM5OTBhNjRhMzkxNGJhOTUxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zYXloaUZwcm9maWxlLWZjMmI5OWI2MWM5ZWE5NDIyMGEzYTNjMmMxM2FkNWZiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb3ZpZXMtYjE2MDY5YzQ4Nzg1NjI1YzRiZjkyNDcxZjE1MTQyZTkuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvLTgxOWU1N2RmNzhlZTAyNjViYTFmY2ZiZjc5NjdjOWQ3LmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZXN0YXJ1bnQtYWNkMGY2ZTZlMTEyYmU5NWM1NDQxMDlkZmMzM2U0YTIuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpLWNhZWRiODIyMGJiMzFhYzhjZTUyN2ZlZmVlYmIzY2MwLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb3ZpZXNodWItMWZiNjVkNzE3MzEzMGU1ZGQyYWVjMzA5NDk3OGJhZTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvaHViLTYzODYzMDgyNTNmZDI2YjhlYzVhMGVhODBhOWI0ZmZhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZXN0YXJ1bnQtNDQwOGJlOTE0YmFlMTYxNmUzYmI0YWY2OTg5NmQ4MDMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpLTVlNzgxZGUyYmMzN2EwODc0NmNmYzU1MzUzN2YxOWRiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93ZWF0aGVyYXBwLTI1Yjk2MTg0Mzc4NDIyYzljZGE2ZmE4MTYzMmI1ZjI0LnBuZ1wiOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcclxuLy8vLy9cclxuLy8gYWxsIGltYWdlXHJcbi8vLy8vXHJcbmltcG9ydCBtb3ZpZXNQb3N0ZXIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmdcIjtcclxuaW1wb3J0IHBob3RvaHViIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmdcIjtcclxuaW1wb3J0IHJlc3RhcnVudCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZ1wiO1xyXG5pbXBvcnQgc2F5aGkgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3NheWhpLnBuZ1wiO1xyXG5pbXBvcnQgd2V0aGVyYXBwIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy93ZWF0aGVyYXBwLnBuZ1wiO1xyXG5cclxuLy8vLy9cclxuLy8gYWxsIGdpZlxyXG4vLy8vL1xyXG5pbXBvcnQgbW92aWVzZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9tb3ZpZXMuZ2lmXCI7XHJcbmltcG9ydCBwaG90b2dpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmXCI7XHJcbmltcG9ydCByZXN0YXJ1bnRnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWZcIjtcclxuaW1wb3J0IHNheWhpZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9zYXloaS5naWZcIjtcclxuXHJcbi8vLy8vXHJcbi8vIGFsbCBmdWxsbGF5b3V0XHJcbi8vLy8vXHJcblxyXG5pbXBvcnQgbW92aWVzRmhvbWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L21vdmllc0Zob21lLnBuZ1wiO1xyXG5pbXBvcnQgbW92aWVzRk9uZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRk9uZS5wbmdcIjtcclxuaW1wb3J0IHBob3RvRmNvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmNvbGxlY3Rpb24ucG5nXCI7XHJcbmltcG9ydCBwaG90b0Zob21lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9waG90b0Zob21lLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9Gb25lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9waG90b0ZvbmUucG5nXCI7XHJcbmltcG9ydCByZXN0YXJ1bnRGaG9tZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvcmVzdGFydW50RmhvbWUucG5nXCI7XHJcbmltcG9ydCBzYXloaUZob21lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9zYXloaUZob21lLnBuZ1wiO1xyXG5pbXBvcnQgc2F5aGlGcHJvZmlsZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvc2F5aGlGcHJvZmlsZS5wbmdcIjtcclxuY29uc3QgcHJvamVjdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYXlISVwiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJTYXlIaSwgaXQncyBsaWtlIGEgU29jaWFsIE1lZGlhIFBsYXRmb3JtIFRoYXQgUGVyZm9ybXMgYWRkaW5nIFBvc3QgYW5kIFNlbmRpbmcgTWVzc2FnZXMuLlwiLFxyXG4gICAgaW1hZ2U6IHNheWhpLFxyXG4gICAgaW1hZ2VnaWY6IHNheWhpZ2lmLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3NheWhpLWRldi01ZmM4NS5maXJlYmFzZWFwcC5jb20vXCIsXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluL3NheWhpXCIsXHJcbiAgICBzdGFjazogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcInN0eWxlZC1jb21wb25lbnRzXCIsIFwiZmlyZWJhc2VcIl0sXHJcbiAgICBmdWxsaW1hZ2VzOiBbc2F5aGlGaG9tZSwgc2F5aGlGcHJvZmlsZV0sXHJcbiAgICBmdWxsaW1nY29udGVudDogW1xyXG4gICAgICBcIlRoaXMgYSBob21lIHBhZ2Ugb2YgU2F5SGkgYXBwbGljYXRpb24sIHdlIGNhbiBjaGVjayB0aGUgbmV3IHBvc3QgYSBwb3N0IHNob3cncyBob3cgbWFueSBsaWtlcyBhbmQgY29tbWVudHMgd2hlbiB5b3UgY2xpY2sgdGhlIHBvc3Qgb3IgY29tbWVudCBpY29uIHlvdSBnbyB0byB0aGUgcG9zdCBwYWdlIHRoZXJlIHlvdSBjYW4gYWNjZXNzZXMgYWxsIGNvbW1lbnRzIHlvdSBjYW4gYWxzbyBsaWtlIGNvbW1lbnQsIFRoaXMgSG9tZSBhbG9lcyB3aXRob3V0IHJlbG9hZGluZyBjb250ZW50IHdlbGwgdXBkYXRlIGFuZCBtb3JlLi4uXCIsXHJcbiAgICAgIFwiVGhpcyBhIHByb2ZpbGUgcGFnZSBvZiBTYXlIaSBhcHBsaWNhdGlvbiwgd2UgY2FuIGNoZWNrIGhvdyBtYW55IHBlb3BsZSBmb2xsb3dpbmcgYWxzbywgY2hlY2sgdGhlIHVzZXIgZm9sbG93cyBhbmQgcG9zdGVkIGEgcG9zdHMgc2hvdydzIGhvdyBtYW55IGxpa2VzIGFuZCBjb21tZW50cyBwb3N0IGhhZCB3aGVuIHlvdSBjbGljayB0aGUgcG9zdCBvciBjb21tZW50IGljb24geW91IGdvIHRvIHRoZSBwb3N0IHBhZ2UgdGhlcmUgeW91IGNhbiBhY2Nlc3NlcyBhbGwgY29tbWVudHMgeW91IGNhbiBhbHNvIGxpa2UgY29tbWVudCwgVGhpcyBwYWdlIGFsbG93cyB3aXRob3V0IHJlbG9hZGluZyBjb250ZW50IHdlbGwgdXBkYXRlIGFuZCBtb3JlLi4uXCIsXHJcbiAgICBdLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiU2F5SGkgaXMgQnVpbGQgV2l0aCBSZWFjdC1SZWR1eC1maXJlYmFzZSwgRmlyZWJhc2UgUHJvdmlkaW5nIEF3ZXNvbWUgU2VydmljZXMgRm9yIEEgRGV2ZWxvcGVyIGl0IFByb3ZpZGVzIFRoZSBSZWFsdGltZSBkYXRhYmFzZSwgZmlyZXN0b3JlLCBjbG91ZCBmdW5jdGlvbnMsIERlcGxveW1lbnRzLCBUaGF0IEluc3BpcmVzIE1lIFRvIEJ1aWxkIFRoaXMgV2ViIEFwcGxpY2F0aW9uIEFsb25nIFRoZSBXYXkgSSBsZWFybiBhIGxvdCBvZiB0aGluZ3MgYWJvdXQgcmVhY3QsIHJlZHV4LCBmaXJlYmFzZSwgc3R5bGVkLWNvbXBvbmVudHMsIGFmdGVyIGNvbXBsZXRlZCB0aGlzIHByb2plY3QgdGhhdCBtb3RpdmVkIG1lIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBhd2Vzb21lIHRvb2wgICBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGhvdG9IdWJcIixcclxuICAgIGluZm86IFwiUGhvdG9IdWIsIHlvdSBjYW4gRG93bmxvYWQgTW9zdCBCZWF1dGlmdWwgSW1hZ2VzIEFuZCBjb2xsZWN0aW9ucy4uLlwiLFxyXG4gICAgaW1hZ2U6IHBob3RvaHViLFxyXG4gICAgaW1hZ2VnaWY6IHBob3RvZ2lmLFxyXG4gICAgc3RhY2s6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJzdHlsZWQtY29tcG9uZW50c1wiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vcGhvdG9cIixcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9waG90b2h1YmppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGZ1bGxpbWFnZXM6IFtwaG90b0Zob21lLCBwaG90b0ZvbmUsIHBob3RvRmNvbGxlY3Rpb25dLFxyXG4gICAgZnVsbGltZ2NvbnRlbnQ6IFtcclxuICAgICAgXCJQaG90b0h1YiBwcm92aWRpbmcgYmVhdXRpZnVsIGltYWdlcyB0byBhIHVzZXIsIHlvdSBjYW4gZG93bmxvYWQgaW1hZ2VzIG9uIG9uZSBjbGljayBhbmQgYWxzbyBjbGljayB0aGUgaW1hZ2UgeW91IHR1cm5zIGludG8gaW1hZ2UgcGFnZSB0aGF0IHNob3dzIHlvdSBtb3JlIHJlbGF0ZWQgaW1hZ2VcIixcclxuICAgICAgXCJUaGlzIGEgSW1hZ2UgcGFnZSBvZiBQaG90b0h1YiBUaGF0IFNob3dzIHRoZSByZWxhdGVkIGltYWdlcyBkZXBlbmRpbmcgb24gVGhlIHRvcCBpbWFnZSB5b3UgY2FuIHNlZSB0aGUgcmVsYXRlZCB0YWcgaW4gd2hlbiB5b3UgY2xpY2sgdGhlIGxpbmsgeW91IHR1cm5zIGludG8gdGFncyByZWxhdGVkIGltYWdlcyBwYWdlIHlvdSBjYW4gYWxzbyBnbyB0byBuZXh0IHBhZ2UgdXNpbmcgYm90dG9tICBidXR0b25zXCIsXHJcbiAgICAgIFwiVGhpcyBhIENvbGxlY3Rpb25zIHBhZ2Ugb2YgUGhvdG9IdWIgVGhhdCBTaG93cyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGNvbGxlY3Rpb25zIGFuZCB3aGVuIHlvdSBjbGljayBjb2xsZWN0aW9uIHRoYXQgc2hvd3MgY29sbGVjdGlvbiByZWxhdGVkIGltYWdlcyB0aGVyZSBhcmUgZGlmZmVyZW50IHR5cGVzIG9mIGNvbGxlY3Rpb24gb25lIHBhZ2Ugc2hvd3MgMjUgY29sbGVjdGlvbnMgeW91IGRvbid0IGZpbmQgYSBmYXZvcml0ZSBjb2xsZWN0aW9uIHRoZW4geW91IGNhbiBhbHNvIGdvIHRvIG5leHQgcGFnZSB1c2luZyB0aGUgYm90dG9tIGJ1dHRvbnNcIixcclxuICAgIF0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJQaG90byBodWIgaXMgc2VydmljZSB0byBwcm92aWRpbmcgaGlnaC1xdWFsaXR5IGltYWdlcyBmb3IgYSB1c2VyIGNhbiBzZWUgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBpbWFnZXMgYW5kIGNvbGxlY3Rpb25zIGFuZCBEb3dubG9hZCBpbWFnZXMuIFRoaXMgYnVpbGQgd2l0aCByZWFjdCxyZWR1eCBhbmQgc3R5bGVkLWNvbXBvbmVudHMgd2l0aCAndW5zcGxhc2gnIEFQSSBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW92aWVzXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIk1vdmllcywgV2UgY2FuIFNlZSBEaWZmZXJlbnQgdHlwZXMgb2YgbW92aWVzIGFuZCB0cmFpbGVycyBhbmQgY2FzdC4uLlwiLFxyXG4gICAgaW1hZ2U6IG1vdmllc1Bvc3RlcixcclxuICAgIGltYWdlZ2lmOiBtb3ZpZXNnaWYsXHJcbiAgICBzdGFjazogW1wiSHRtbFwiLCBcIlNhc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9tb3ZpZXMubmFnYXNhaWppdGhpblwiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL21vdmllc2ppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGZ1bGxpbWFnZXM6IFttb3ZpZXNGaG9tZSwgbW92aWVzRk9uZV0sXHJcbiAgICBmdWxsaW1nY29udGVudDogW1xyXG4gICAgICBcIlRoaXMgaG9tZSBwYWdlIG9mIG1vdmllIHNpdGUgdGhhdCBzaG93IHRvcC1yYXRlZCBtb3ZpZXMgYW5kIGFsc28gdXBjb21pbmcgbW92aWVzLCBhY3Rpb25zIG1vdmllcyB0aGF0IGFsbCBkYXRhIGNvbWUgZnJvbSBBUEkgJ01vdmllc0RiJyB3aGVuIGNsaWNraW5nIHRoZSBtb3ZpZSBjYXJkIHRoYXQgc2hvd3MgbW92aWVzIGluZm8gXCIsXHJcbiAgICAgIFwiVGhpcyBUaW1lIGRvZXNuJ3QgdHVybiBpbnRvIHRoZSBwYWdlIGl0IG9ubHkgY2hhbmdlcyB0aGUgY29udGVudCBsaWtlIGEgc2luZ2xlLXBhZ2UuIHRoYXQgc2hvd3MgYSBwb3N0ZXIgb2YgdGhlIG1vdmllIGFuZCBjYXRzIGFuZCByYXRpbmcgb2YgdGhlIG1vdmllIGl0J3MgcHJvdmlkaW5nIG1vdmllcyB0cmFpbGVyICBhbmQgYWxzbyBzaG93cyByZWxhdGVkIG1vdmllc1wiLFxyXG4gICAgXSxcclxuICAgIGZ1bGxjb250ZW50OlxyXG4gICAgICBcIk1vdmllcyBhcHBsaWNhdGlvbiBidWlsZCB3aXRoIEhUTUwsIENTUywgamF2YXNjcmlwdCwgYW5kIEFQSSBmcm9tIFRoZW1vdmllZGIgaXQncyBwcm92aWRlZCBtb3ZpZXMgaW5mb3JtYXRpb24gbGlrZSBjYXN0LCB0cmFpbGVycywgbW92aWVzIHJhdGluZyBhbmQgcmVsYXRlZCBtb3ZpZXMgXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXHJcbiAgICBpbmZvOiBcIldlYXRoZXIgQXBwLCBZb3UgQ2FuIENoZWNrIFRoZSBXZWF0aGVyIEFuZCBhcm91bmQgQ2l0eSBXZWF0aGVyLi4uXCIsXHJcbiAgICBpbWFnZTogd2V0aGVyYXBwLFxyXG4gICAgaW1hZ2VnaWY6IHdldGhlcmFwcCxcclxuICAgIHN0YWNrOiBbXCJIdG1sXCIsIFwiU2Fzc1wiLCBcImphdmFzY3JpcHRcIl0sXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluL3dlYXRoZXJtYWluLm5hZ2FzYWlqaXRoaW5cIixcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly93ZWF0aGVyaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZnVsbGltYWdlczogW10sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCIgV2VhdGhlciBhcHAgYnVpbGQgd2l0aCBIdG1sLCBDU1MsIGphdmFzY3JpcHQgYW5kIE9wZW5XZWF0aGVyIEFQSSwgVGhpcyBBcHAgRGV0ZWN0cyBZb3VyIEN1cnJlbnQgTG9jYXRpb24gVGhlbiBTaG93IEFib3V0IFlvdXIgV2VhdGhlciBBbmQgSHVtaWRpdHksIFdpbmQgQW5kIGFyb3VuZCBDaXR5IFdlYXRoZXIsXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnRcIixcclxuICAgIGluZm86IFwiUmVzdGF1cmFudHMgYXBwLCBZb3UgY2FuIENoZWNrIHRoZSBIb3RlbHMgYW5kIFJldmlld3MuLi5cIixcclxuICAgIGltYWdlOiByZXN0YXJ1bnQsXHJcbiAgICBpbWFnZWdpZjogcmVzdGFydW50Z2lmLFxyXG4gICAgZnVsbGltZ2NvbnRlbnQ6IFtcclxuICAgICAgXCJUaGlzIHJlc3RhdXJhbnQgd2Vic2l0ZSBidWlsZCAgd2l0aCBIVE1MLCBDU1MsIGphdmFzY3JpcHQsIGFuZCBBUEkgdXNpbmcgWm9tYXRvIEFQSSB0aGF0IHNob3dzIHJlc3RhdXJhbnRzIGltYWdlcyBpZiBsaWtlIGEgcmVzdGF1cmFudCB0aGF0IHN0b3JlIGxvY2FsIHN0b3JhZ2UgYW5kIGlmIGNsaWNrIHRoZSByZXN0YXVyYW50cyB0aGF0IHJlc3RhdXJhbnQgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UgIGxpa2UgdmlzaXRlZCBsaW5rIHR5cGUgdXNpbmcgc2Vzc2lvbiBzdG9yYWdlXCIsXHJcbiAgICBdLFxyXG4gICAgc3RhY2s6IFtcIkh0bWxcIiwgXCJTYXNzXCIsIFwiamF2YXNjcmlwdFwiXSxcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9yZXN0YXVyYW50c2ppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vcmVzdGF1cmFudHNhcHAubmFnYXNhaWppdGhpblwiLFxyXG4gICAgZnVsbGltYWdlczogW3Jlc3RhcnVudEZob21lXSxcclxuICAgIGZ1bGxjb250ZW50OlxyXG4gICAgICBcIlJlc3RhdXJhbnQgQXBwbGljYXRpb24gQnVpbGQgd2l0aCBIVE1MLCBDU1MsIEphdmFzY3JpcHQsIGFuZCBab21hdG8gQVBJLCBUaGlzIEFwcCBEZXRlY3RzIFRoZSBDdXJyZW50IExvY2F0aW9uIEFuZCBTaG93ICBBcm91bmQgVGhlIFJlc3RhdXJhbnQncyBSYXRpbmdzLCBJbWFnZXMgQW5kIE1vcmUgXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgUHJvamVjdFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIHotaW5kZXg6IDU7XHJcbmA7XHJcbmNvbnN0IFBvc3RlcldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICAmID4gaDEge1xyXG4gICAgICBmb250LXNpemU6IDE3cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDRweCAxMHB4IHJnYigwLCAwLCAwLCA2NCUpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbnRlbnRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gICYgPiBkaXYge1xyXG4gICAgJiA+IGgyIHtcclxuICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEJhY2tncm91bmRUZXh0ID0gc3R5bGVkLmgxYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQzJSwgLTQzJSkgcm90YXRlKDdkZWcpO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFja0JhY2tncm91bmRDb2xvcik7XHJcbiAgZm9udC1zaXplOiAyM3JlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtc2hhZG93OiAxMHB4IDRweCA5cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuYDtcclxuY29uc3QgU3RhY2tXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNXJlbSAwO1xyXG5cclxuICAmID4gaDIge1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAmID4gdWwge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAmID4gbGkge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEJ0bldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICAmID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW47XHJcbiAgICB9XHJcbiAgICAmID4gcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMztcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGdWxsaW1hZ2VXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNHJlbTtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICB9XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgJiA+IGRpdjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG4gICAgJiA+IGltZyB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgSWQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG9uZXByb2plY3QgPSBwcm9qZWN0ZGF0YS5maWx0ZXIoKGRhdGEsIGkpID0+IGkgPT0gaWQpO1xyXG4gIGlmIChvbmVwcm9qZWN0Lmxlbmd0aCA+PSAxKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBmdWxsY29udGVudCxcclxuICAgICAgc3RhY2ssXHJcbiAgICAgIHNpdGUsXHJcbiAgICAgIGNvZGUsXHJcbiAgICAgIGZ1bGxpbWFnZXMsXHJcbiAgICAgIGZ1bGxpbWdjb250ZW50LFxyXG4gICAgfSA9IG9uZXByb2plY3RbMF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UHJvamVjdFdhcHBlcj5cclxuICAgICAgICAgIDxQb3N0ZXJXYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnRuV2FwcGVyPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3NpdGV9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+VmlldyBTaXRlPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtjb2RlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNvZGU8L3A+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0J0bldhcHBlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlByb2plY3RJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qb3N0ZXJXYXBwZXI+XHJcblxyXG4gICAgICAgICAgPENvbnRlbnRXYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPntmdWxsY29udGVudH08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFN0YWNrV2FwcGVyPlxyXG4gICAgICAgICAgICAgIDxoMj5TdGFjazwvaDI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3N0YWNrLm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT57ZGF0YX08L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9TdGFja1dhcHBlcj5cclxuICAgICAgICAgICAgPEZ1bGxpbWFnZVdhcHBlcj5cclxuICAgICAgICAgICAgICB7ZnVsbGltYWdlcy5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGF9IGFsdD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZnVsbGltZ2NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgID8gZnVsbGltZ2NvbnRlbnRbaV1cclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRnVsbGltYWdlV2FwcGVyPlxyXG4gICAgICAgICAgPC9Db250ZW50V2FwcGVyPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUHJvamVjdFdhcHBlcj5cclxuICAgICAgICA8QmFja2dyb3VuZFRleHQ+e25hbWV9PC9CYWNrZ3JvdW5kVGV4dD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IElkO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9