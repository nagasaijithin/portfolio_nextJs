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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
})(["height:40vh;color:var(--blackTextColor);font-size:1.5rem;width:80%;margin:5rem auto 0;text-align:center;scroll-behavior:smooth;display:flex;flex-direction:column;align-items:stretch;justify-content:space-evenly;@media ", "{width:90%;margin:3rem auto 0;}& > h2{font-weight:200;width:70%;margin:0 auto;}"], ({
  theme
}) => theme.mediaqury.tabLarg);
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
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Contact Me"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Let's Build Something Together Feel free to reach out if you're looking for a Front end web developer,"), __jsx(IconsWapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/pasupuleti.jithin/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(FacebookIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://github.com/nagasaijithin",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(GithubIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/nagasaijithin_pasupuleti/",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(InstagramIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
})(["margin:3rem 0;& > div{& > h1{font-size:17rem;text-align:center;margin:2rem 0;-webkit-text-stroke-color:var(--blackTextColor);-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;font-weight:300;@media ", "{font-size:13rem;}@media ", "{font-size:9rem;margin:4rem 0;}@media ", "{font-size:8rem;}@media ", "{font-size:7rem;}}& > img{box-shadow:5px 4px 10px rgb(0,0,0,64%);width:100%;}}"], ({
  theme
}) => theme.mediaqury.laptopMid, ({
  theme
}) => theme.mediaqury.laptopMid2, ({
  theme
}) => theme.mediaqury.mblMid, ({
  theme
}) => theme.mediaqury.mblsmall);
const ContentWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ContentWapper",
  componentId: "sc-1p6cphk-2"
})(["margin:3rem 0;& > div{& > h2{margin:2rem 0;font-size:6rem;@media ", "{font-size:4rem;}@media ", "{font-size:3rem;}}}"], ({
  theme
}) => theme.mediaqury.projectMid3, ({
  theme
}) => theme.mediaqury.mblMid);
const BackgroundText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "id__BackgroundText",
  componentId: "sc-1p6cphk-3"
})(["position:fixed;left:50%;top:50%;transform:translate(-43%,-43%) rotate(7deg);color:var(--blackBackgroundColor);font-size:23rem;font-weight:900;text-shadow:10px 4px 9px rgb(0 0 0 / 15%);text-align:center;@media ", "{font-size:15rem;}@media ", "{font-size:10rem;width:85%;}@media ", "{font-size:8rem;}"], ({
  theme
}) => theme.mediaqury.laptopMid, ({
  theme
}) => theme.mediaqury.laptopMid, ({
  theme
}) => theme.mediaqury.mblsmall);
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
})(["margin:4rem;@media ", "{margin:1rem;}& > div{display:flex;align-items:center;@media ", "{flex-direction:column;}& > div{font-size:4rem;padding:3rem;@media ", "{font-size:3rem;}@media ", "{font-size:2.5rem;}}& > img{height:50%;width:50%;box-shadow:1px 2px 10px black;}}& > div:nth-child(even){& > div{order:1;@media ", "{order:0;}}& > img{order:2;@media ", "{order:0;}}}"], ({
  theme
}) => theme.mediaqury.tabLarg2, ({
  theme
}) => theme.mediaqury.tabLarg2, ({
  theme
}) => theme.mediaqury.projectMid, ({
  theme
}) => theme.mediaqury.projectMid3, ({
  theme
}) => theme.mediaqury.tabLarg2, ({
  theme
}) => theme.mediaqury.tabLarg2);

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
        lineNumber: 310,
        columnNumber: 9
      }
    }, __jsx(PosterWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 15
      }
    }, name)), __jsx(BtnWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: site,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }
    }, "View Site")), __jsx("a", {
      href: code,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }
    }, "Code"))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 15
      }
    }))), __jsx(ContentWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 15
      }
    }, fullcontent)), __jsx(StackWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 15
      }
    }, "Stack"), __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 15
      }
    }, stack.map((data, i) => __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 19
      }
    }, data)))), __jsx(FullimageWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 13
      }
    }, fullimages.map((data, i) => __jsx("div", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: data,
      alt: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 19
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 19
      }
    }, fullimgcontent ? fullimgcontent[i] : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 11
      }
    })), __jsx(BackgroundText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }
    }, name));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Id);

/***/ }),

/***/ 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRk9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmNvbGxlY3Rpb24ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRm9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvcmVzdGFydW50RmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRnByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL21vdmllcy5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvc2F5aGkuZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcGhvdG9odWIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3Jlc3RhcnVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2plY3RzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJHaXRodWJJY29uIiwiSW5zdGFncmFtSWNvbiIsIkZvb3RlcldhcHBlciIsInN0eWxlZCIsImZvb3RlciIsInRoZW1lIiwibWVkaWFxdXJ5IiwidGFiTGFyZyIsIkljb25zV2FwcGVyIiwiZGl2IiwiRm9vdGVyIiwicHJvamVjdGRhdGEiLCJuYW1lIiwiaW5mbyIsImltYWdlIiwic2F5aGkiLCJpbWFnZWdpZiIsInNheWhpZ2lmIiwic2l0ZSIsImNvZGUiLCJzdGFjayIsImZ1bGxpbWFnZXMiLCJzYXloaUZob21lIiwic2F5aGlGcHJvZmlsZSIsImZ1bGxpbWdjb250ZW50IiwiZnVsbGNvbnRlbnQiLCJwaG90b2h1YiIsInBob3RvZ2lmIiwicGhvdG9GaG9tZSIsInBob3RvRm9uZSIsInBob3RvRmNvbGxlY3Rpb24iLCJtb3ZpZXNQb3N0ZXIiLCJtb3ZpZXNnaWYiLCJtb3ZpZXNGaG9tZSIsIm1vdmllc0ZPbmUiLCJ3ZXRoZXJhcHAiLCJyZXN0YXJ1bnQiLCJyZXN0YXJ1bnRnaWYiLCJyZXN0YXJ1bnRGaG9tZSIsIlByb2plY3RXYXBwZXIiLCJQb3N0ZXJXYXBwZXIiLCJsYXB0b3BNaWQiLCJsYXB0b3BNaWQyIiwibWJsTWlkIiwibWJsc21hbGwiLCJDb250ZW50V2FwcGVyIiwicHJvamVjdE1pZDMiLCJCYWNrZ3JvdW5kVGV4dCIsImgxIiwiU3RhY2tXYXBwZXIiLCJCdG5XYXBwZXIiLCJGdWxsaW1hZ2VXYXBwZXIiLCJ0YWJMYXJnMiIsInByb2plY3RNaWQiLCJJZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJvbmVwcm9qZWN0IiwiZmlsdGVyIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFF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QUFLLENBQUM0QyxHQUFOLENBQVUsQ0FBQ0gsSUFBRCxFQUFPQyxDQUFQLEtBQ1Q7QUFBSSxTQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhRCxJQUFiLENBREQsQ0FESCxDQUZGLENBSkYsRUFZRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHeEMsVUFBVSxDQUFDMkMsR0FBWCxDQUFlLENBQUNILElBQUQsRUFBT0MsQ0FBUCxLQUNkO0FBQUssU0FBRyxFQUFFQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUQsSUFBVjtBQUFnQixTQUFHLEVBQUVDLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3RDLGNBQWMsR0FDWEEsY0FBYyxDQUFDc0MsQ0FBRCxDQURILEdBRVgsZ2tCQUhOLENBRkYsQ0FERCxDQURILENBWkYsQ0FsQkYsRUEyQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BM0NGLENBREYsRUE4Q0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUJsRCxJQUFqQixDQTlDRixDQURGO0FBa0RELEdBOURELE1BOERPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQXJFRDs7QUFzRWUwQyxpRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pXQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gXCIuLi9pbWFnZXMvZmFjZWJvb2tJY29uLnN2Z1wiO1xyXG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dpdGh1Ymljb24uc3ZnXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gXCIuLi9pbWFnZXMvaW5zdGFncmFtaWNvbi5zdmdcIjtcclxuY29uc3QgRm9vdGVyV2FwcGVyID0gc3R5bGVkLmZvb3RlcmBcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkudGFiTGFyZ30ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvIDA7XHJcbiAgfVxyXG4gICYgPiBoMiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb25zV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgJiA+IGEgPiBzdmcge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9vdGVyV2FwcGVyIGlkPVwiY29udGFjdG1lXCI+XHJcbiAgICAgIDxoMT5Db250YWN0IE1lPC9oMT5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIExldCdzIEJ1aWxkIFNvbWV0aGluZyBUb2dldGhlciBGZWVsIGZyZWUgdG8gcmVhY2ggb3V0IGlmIHlvdSdyZSBsb29raW5nXHJcbiAgICAgICAgZm9yIGEgRnJvbnQgZW5kIHdlYiBkZXZlbG9wZXIsXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxJY29uc1dhcHBlcj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Bhc3VwdWxldGkuaml0aGluL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxHaXRodWJJY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYWdhc2Fpaml0aGluX3Bhc3VwdWxldGkvXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSWNvbnNXYXBwZXI+XHJcbiAgICA8L0Zvb3RlcldhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzRk9uZS1jYmEwMmQxYTBlNGI1YTAxODQ1MGRiYWZmODY1YjhiNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzRmhvbWUtMzc4MDUzMDgwM2ZlYThkNjk5MjA4MTJmMDM2Y2JiZjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRmNvbGxlY3Rpb24tMGM4MjA5YWU2NDU1MTFlZmQ3YmNiMWI0NTJiY2YwODMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRmhvbWUtY2NlYjE5ZmE3MzJhYWYzOWViZjRmMzA5M2Y5ZGJlM2IucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRm9uZS04ZjI3MDIzNzEzMzgzMDg4MGE5YThiOTdlYWFhZWM4My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcmVzdGFydW50RmhvbWUtMzc5NDIwMzVjY2M2Y2FiZjdhZDYzYmZkOTMyMmUyMDcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpRmhvbWUtNTU1NDRhYjgxYTA0NGM1Mzk5MGE2NGEzOTE0YmE5NTEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpRnByb2ZpbGUtZmMyYjk5YjYxYzllYTk0MjIwYTNhM2MyYzEzYWQ1ZmIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllcy1iMTYwNjljNDg3ODU2MjVjNGJmOTI0NzFmMTUxNDJlOS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG8tODE5ZTU3ZGY3OGVlMDI2NWJhMWZjZmJmNzk2N2M5ZDcuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC1hY2QwZjZlNmUxMTJiZTk1YzU0NDEwOWRmYzMzZTRhMi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktY2FlZGI4MjIwYmIzMWFjOGNlNTI3ZmVmZWViYjNjYzAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllc2h1Yi0xZmI2NWQ3MTczMTMwZTVkZDJhZWMzMDk0OTc4YmFlNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG9odWItNjM4NjMwODI1M2ZkMjZiOGVjNWEwZWE4MGE5YjRmZmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC00NDA4YmU5MTRiYWUxNjE2ZTNiYjRhZjY5ODk2ZDgwMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktNWU3ODFkZTJiYzM3YTA4NzQ2Y2ZjNTUzNTM3ZjE5ZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dlYXRoZXJhcHAtMjViOTYxODQzNzg0MjJjOWNkYTZmYTgxNjMyYjVmMjQucG5nXCI7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG4vLy8vL1xyXG4vLyBhbGwgaW1hZ2VcclxuLy8vLy9cclxuaW1wb3J0IG1vdmllc1Bvc3RlciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9odWIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3Bob3RvaHViLnBuZ1wiO1xyXG5pbXBvcnQgcmVzdGFydW50IGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9yZXN0YXJ1bnQucG5nXCI7XHJcbmltcG9ydCBzYXloaSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nXCI7XHJcbmltcG9ydCB3ZXRoZXJhcHAgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nXCI7XHJcblxyXG4vLy8vL1xyXG4vLyBhbGwgZ2lmXHJcbi8vLy8vXHJcbmltcG9ydCBtb3ZpZXNnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL21vdmllcy5naWZcIjtcclxuaW1wb3J0IHBob3RvZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9waG90by5naWZcIjtcclxuaW1wb3J0IHJlc3RhcnVudGdpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZlwiO1xyXG5pbXBvcnQgc2F5aGlnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3NheWhpLmdpZlwiO1xyXG5cclxuLy8vLy9cclxuLy8gYWxsIGZ1bGxsYXlvdXRcclxuLy8vLy9cclxuXHJcbmltcG9ydCBtb3ZpZXNGaG9tZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRmhvbWUucG5nXCI7XHJcbmltcG9ydCBtb3ZpZXNGT25lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9tb3ZpZXNGT25lLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9GY29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvcGhvdG9GY29sbGVjdGlvbi5wbmdcIjtcclxuaW1wb3J0IHBob3RvRmhvbWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmhvbWUucG5nXCI7XHJcbmltcG9ydCBwaG90b0ZvbmUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRm9uZS5wbmdcIjtcclxuaW1wb3J0IHJlc3RhcnVudEZob21lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9yZXN0YXJ1bnRGaG9tZS5wbmdcIjtcclxuaW1wb3J0IHNheWhpRmhvbWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRmhvbWUucG5nXCI7XHJcbmltcG9ydCBzYXloaUZwcm9maWxlIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9zYXloaUZwcm9maWxlLnBuZ1wiO1xyXG5jb25zdCBwcm9qZWN0ZGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNheUhJXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIlNheUhpLCBpdCdzIGxpa2UgYSBTb2NpYWwgTWVkaWEgUGxhdGZvcm0gVGhhdCBQZXJmb3JtcyBhZGRpbmcgUG9zdCBhbmQgU2VuZGluZyBNZXNzYWdlcy4uXCIsXHJcbiAgICBpbWFnZTogc2F5aGksXHJcbiAgICBpbWFnZWdpZjogc2F5aGlnaWYsXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vc2F5aGktZGV2LTVmYzg1LmZpcmViYXNlYXBwLmNvbS9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vc2F5aGlcIixcclxuICAgIHN0YWNrOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwic3R5bGVkLWNvbXBvbmVudHNcIiwgXCJmaXJlYmFzZVwiXSxcclxuICAgIGZ1bGxpbWFnZXM6IFtzYXloaUZob21lLCBzYXloaUZwcm9maWxlXSxcclxuICAgIGZ1bGxpbWdjb250ZW50OiBbXHJcbiAgICAgIFwiVGhpcyBhIGhvbWUgcGFnZSBvZiBTYXlIaSBhcHBsaWNhdGlvbiwgd2UgY2FuIGNoZWNrIHRoZSBuZXcgcG9zdCBhIHBvc3Qgc2hvdydzIGhvdyBtYW55IGxpa2VzIGFuZCBjb21tZW50cyB3aGVuIHlvdSBjbGljayB0aGUgcG9zdCBvciBjb21tZW50IGljb24geW91IGdvIHRvIHRoZSBwb3N0IHBhZ2UgdGhlcmUgeW91IGNhbiBhY2Nlc3NlcyBhbGwgY29tbWVudHMgeW91IGNhbiBhbHNvIGxpa2UgY29tbWVudCwgVGhpcyBIb21lIGFsb2VzIHdpdGhvdXQgcmVsb2FkaW5nIGNvbnRlbnQgd2VsbCB1cGRhdGUgYW5kIG1vcmUuLi5cIixcclxuICAgICAgXCJUaGlzIGEgcHJvZmlsZSBwYWdlIG9mIFNheUhpIGFwcGxpY2F0aW9uLCB3ZSBjYW4gY2hlY2sgaG93IG1hbnkgcGVvcGxlIGZvbGxvd2luZyBhbHNvLCBjaGVjayB0aGUgdXNlciBmb2xsb3dzIGFuZCBwb3N0ZWQgYSBwb3N0cyBzaG93J3MgaG93IG1hbnkgbGlrZXMgYW5kIGNvbW1lbnRzIHBvc3QgaGFkIHdoZW4geW91IGNsaWNrIHRoZSBwb3N0IG9yIGNvbW1lbnQgaWNvbiB5b3UgZ28gdG8gdGhlIHBvc3QgcGFnZSB0aGVyZSB5b3UgY2FuIGFjY2Vzc2VzIGFsbCBjb21tZW50cyB5b3UgY2FuIGFsc28gbGlrZSBjb21tZW50LCBUaGlzIHBhZ2UgYWxsb3dzIHdpdGhvdXQgcmVsb2FkaW5nIGNvbnRlbnQgd2VsbCB1cGRhdGUgYW5kIG1vcmUuLi5cIixcclxuICAgIF0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJTYXlIaSBpcyBCdWlsZCBXaXRoIFJlYWN0LVJlZHV4LWZpcmViYXNlLCBGaXJlYmFzZSBQcm92aWRpbmcgQXdlc29tZSBTZXJ2aWNlcyBGb3IgQSBEZXZlbG9wZXIgaXQgUHJvdmlkZXMgVGhlIFJlYWx0aW1lIGRhdGFiYXNlLCBmaXJlc3RvcmUsIGNsb3VkIGZ1bmN0aW9ucywgRGVwbG95bWVudHMsIFRoYXQgSW5zcGlyZXMgTWUgVG8gQnVpbGQgVGhpcyBXZWIgQXBwbGljYXRpb24gQWxvbmcgVGhlIFdheSBJIGxlYXJuIGEgbG90IG9mIHRoaW5ncyBhYm91dCByZWFjdCwgcmVkdXgsIGZpcmViYXNlLCBzdHlsZWQtY29tcG9uZW50cywgYWZ0ZXIgY29tcGxldGVkIHRoaXMgcHJvamVjdCB0aGF0IG1vdGl2ZWQgbWUgbGVhcm4gbW9yZSBhYm91dCB0aGlzIGF3ZXNvbWUgdG9vbCAgIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzogXCJQaG90b0h1YiwgeW91IGNhbiBEb3dubG9hZCBNb3N0IEJlYXV0aWZ1bCBJbWFnZXMgQW5kIGNvbGxlY3Rpb25zLi4uXCIsXHJcbiAgICBpbWFnZTogcGhvdG9odWIsXHJcbiAgICBpbWFnZWdpZjogcGhvdG9naWYsXHJcbiAgICBzdGFjazogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcInN0eWxlZC1jb21wb25lbnRzXCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9waG90b1wiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3Bob3RvaHViaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZnVsbGltYWdlczogW3Bob3RvRmhvbWUsIHBob3RvRm9uZSwgcGhvdG9GY29sbGVjdGlvbl0sXHJcbiAgICBmdWxsaW1nY29udGVudDogW1xyXG4gICAgICBcIlBob3RvSHViIHByb3ZpZGluZyBiZWF1dGlmdWwgaW1hZ2VzIHRvIGEgdXNlciwgeW91IGNhbiBkb3dubG9hZCBpbWFnZXMgb24gb25lIGNsaWNrIGFuZCBhbHNvIGNsaWNrIHRoZSBpbWFnZSB5b3UgdHVybnMgaW50byBpbWFnZSBwYWdlIHRoYXQgc2hvd3MgeW91IG1vcmUgcmVsYXRlZCBpbWFnZVwiLFxyXG4gICAgICBcIlRoaXMgYSBJbWFnZSBwYWdlIG9mIFBob3RvSHViIFRoYXQgU2hvd3MgdGhlIHJlbGF0ZWQgaW1hZ2VzIGRlcGVuZGluZyBvbiBUaGUgdG9wIGltYWdlIHlvdSBjYW4gc2VlIHRoZSByZWxhdGVkIHRhZyBpbiB3aGVuIHlvdSBjbGljayB0aGUgbGluayB5b3UgdHVybnMgaW50byB0YWdzIHJlbGF0ZWQgaW1hZ2VzIHBhZ2UgeW91IGNhbiBhbHNvIGdvIHRvIG5leHQgcGFnZSB1c2luZyBib3R0b20gIGJ1dHRvbnNcIixcclxuICAgICAgXCJUaGlzIGEgQ29sbGVjdGlvbnMgcGFnZSBvZiBQaG90b0h1YiBUaGF0IFNob3dzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgY29sbGVjdGlvbnMgYW5kIHdoZW4geW91IGNsaWNrIGNvbGxlY3Rpb24gdGhhdCBzaG93cyBjb2xsZWN0aW9uIHJlbGF0ZWQgaW1hZ2VzIHRoZXJlIGFyZSBkaWZmZXJlbnQgdHlwZXMgb2YgY29sbGVjdGlvbiBvbmUgcGFnZSBzaG93cyAyNSBjb2xsZWN0aW9ucyB5b3UgZG9uJ3QgZmluZCBhIGZhdm9yaXRlIGNvbGxlY3Rpb24gdGhlbiB5b3UgY2FuIGFsc28gZ28gdG8gbmV4dCBwYWdlIHVzaW5nIHRoZSBib3R0b20gYnV0dG9uc1wiLFxyXG4gICAgXSxcclxuICAgIGZ1bGxjb250ZW50OlxyXG4gICAgICBcIlBob3RvIGh1YiBpcyBzZXJ2aWNlIHRvIHByb3ZpZGluZyBoaWdoLXF1YWxpdHkgaW1hZ2VzIGZvciBhIHVzZXIgY2FuIHNlZSB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGltYWdlcyBhbmQgY29sbGVjdGlvbnMgYW5kIERvd25sb2FkIGltYWdlcy4gVGhpcyBidWlsZCB3aXRoIHJlYWN0LHJlZHV4IGFuZCBzdHlsZWQtY29tcG9uZW50cyB3aXRoICd1bnNwbGFzaCcgQVBJIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNb3ZpZXNcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiTW92aWVzLCBXZSBjYW4gU2VlIERpZmZlcmVudCB0eXBlcyBvZiBtb3ZpZXMgYW5kIHRyYWlsZXJzIGFuZCBjYXN0Li4uXCIsXHJcbiAgICBpbWFnZTogbW92aWVzUG9zdGVyLFxyXG4gICAgaW1hZ2VnaWY6IG1vdmllc2dpZixcclxuICAgIHN0YWNrOiBbXCJIdG1sXCIsIFwiU2Fzc1wiLCBcImphdmFzY3JpcHRcIl0sXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluL21vdmllcy5uYWdhc2Fpaml0aGluXCIsXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vbW92aWVzaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZnVsbGltYWdlczogW21vdmllc0Zob21lLCBtb3ZpZXNGT25lXSxcclxuICAgIGZ1bGxpbWdjb250ZW50OiBbXHJcbiAgICAgIFwiVGhpcyBob21lIHBhZ2Ugb2YgbW92aWUgc2l0ZSB0aGF0IHNob3cgdG9wLXJhdGVkIG1vdmllcyBhbmQgYWxzbyB1cGNvbWluZyBtb3ZpZXMsIGFjdGlvbnMgbW92aWVzIHRoYXQgYWxsIGRhdGEgY29tZSBmcm9tIEFQSSAnTW92aWVzRGInIHdoZW4gY2xpY2tpbmcgdGhlIG1vdmllIGNhcmQgdGhhdCBzaG93cyBtb3ZpZXMgaW5mbyBcIixcclxuICAgICAgXCJUaGlzIFRpbWUgZG9lc24ndCB0dXJuIGludG8gdGhlIHBhZ2UgaXQgb25seSBjaGFuZ2VzIHRoZSBjb250ZW50IGxpa2UgYSBzaW5nbGUtcGFnZS4gdGhhdCBzaG93cyBhIHBvc3RlciBvZiB0aGUgbW92aWUgYW5kIGNhdHMgYW5kIHJhdGluZyBvZiB0aGUgbW92aWUgaXQncyBwcm92aWRpbmcgbW92aWVzIHRyYWlsZXIgIGFuZCBhbHNvIHNob3dzIHJlbGF0ZWQgbW92aWVzXCIsXHJcbiAgICBdLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiTW92aWVzIGFwcGxpY2F0aW9uIGJ1aWxkIHdpdGggSFRNTCwgQ1NTLCBqYXZhc2NyaXB0LCBhbmQgQVBJIGZyb20gVGhlbW92aWVkYiBpdCdzIHByb3ZpZGVkIG1vdmllcyBpbmZvcm1hdGlvbiBsaWtlIGNhc3QsIHRyYWlsZXJzLCBtb3ZpZXMgcmF0aW5nIGFuZCByZWxhdGVkIG1vdmllcyBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV2VhdGhlciBBcHBcIixcclxuICAgIGluZm86IFwiV2VhdGhlciBBcHAsIFlvdSBDYW4gQ2hlY2sgVGhlIFdlYXRoZXIgQW5kIGFyb3VuZCBDaXR5IFdlYXRoZXIuLi5cIixcclxuICAgIGltYWdlOiB3ZXRoZXJhcHAsXHJcbiAgICBpbWFnZWdpZjogd2V0aGVyYXBwLFxyXG4gICAgc3RhY2s6IFtcIkh0bWxcIiwgXCJTYXNzXCIsIFwiamF2YXNjcmlwdFwiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vd2VhdGhlcm1haW4ubmFnYXNhaWppdGhpblwiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3dlYXRoZXJqaXRoaW4ubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBmdWxsaW1hZ2VzOiBbXSxcclxuICAgIGZ1bGxjb250ZW50OlxyXG4gICAgICBcIiBXZWF0aGVyIGFwcCBidWlsZCB3aXRoIEh0bWwsIENTUywgamF2YXNjcmlwdCBhbmQgT3BlbldlYXRoZXIgQVBJLCBUaGlzIEFwcCBEZXRlY3RzIFlvdXIgQ3VycmVudCBMb2NhdGlvbiBUaGVuIFNob3cgQWJvdXQgWW91ciBXZWF0aGVyIEFuZCBIdW1pZGl0eSwgV2luZCBBbmQgYXJvdW5kIENpdHkgV2VhdGhlcixcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVzdGF1cmFudFwiLFxyXG4gICAgaW5mbzogXCJSZXN0YXVyYW50cyBhcHAsIFlvdSBjYW4gQ2hlY2sgdGhlIEhvdGVscyBhbmQgUmV2aWV3cy4uLlwiLFxyXG4gICAgaW1hZ2U6IHJlc3RhcnVudCxcclxuICAgIGltYWdlZ2lmOiByZXN0YXJ1bnRnaWYsXHJcbiAgICBmdWxsaW1nY29udGVudDogW1xyXG4gICAgICBcIlRoaXMgcmVzdGF1cmFudCB3ZWJzaXRlIGJ1aWxkICB3aXRoIEhUTUwsIENTUywgamF2YXNjcmlwdCwgYW5kIEFQSSB1c2luZyBab21hdG8gQVBJIHRoYXQgc2hvd3MgcmVzdGF1cmFudHMgaW1hZ2VzIGlmIGxpa2UgYSByZXN0YXVyYW50IHRoYXQgc3RvcmUgbG9jYWwgc3RvcmFnZSBhbmQgaWYgY2xpY2sgdGhlIHJlc3RhdXJhbnRzIHRoYXQgcmVzdGF1cmFudCBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSAgbGlrZSB2aXNpdGVkIGxpbmsgdHlwZSB1c2luZyBzZXNzaW9uIHN0b3JhZ2VcIixcclxuICAgIF0sXHJcbiAgICBzdGFjazogW1wiSHRtbFwiLCBcIlNhc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3Jlc3RhdXJhbnRzaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9yZXN0YXVyYW50c2FwcC5uYWdhc2Fpaml0aGluXCIsXHJcbiAgICBmdWxsaW1hZ2VzOiBbcmVzdGFydW50RmhvbWVdLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiUmVzdGF1cmFudCBBcHBsaWNhdGlvbiBCdWlsZCB3aXRoIEhUTUwsIENTUywgSmF2YXNjcmlwdCwgYW5kIFpvbWF0byBBUEksIFRoaXMgQXBwIERldGVjdHMgVGhlIEN1cnJlbnQgTG9jYXRpb24gQW5kIFNob3cgIEFyb3VuZCBUaGUgUmVzdGF1cmFudCdzIFJhdGluZ3MsIEltYWdlcyBBbmQgTW9yZSBcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBQcm9qZWN0V2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgei1pbmRleDogNTtcclxuYDtcclxuY29uc3QgUG9zdGVyV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDNyZW0gMDtcclxuICAmID4gZGl2IHtcclxuICAgICYgPiBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LmxhcHRvcE1pZH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNyZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LmxhcHRvcE1pZDJ9IHtcclxuICAgICAgICBmb250LXNpemU6IDlyZW07XHJcbiAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5Lm1ibE1pZH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkubWJsc21hbGx9IHtcclxuICAgICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBpbWcge1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNHB4IDEwcHggcmdiKDAsIDAsIDAsIDY0JSk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICAmID4gaDIge1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkucHJvamVjdE1pZDN9IHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5Lm1ibE1pZH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQmFja2dyb3VuZFRleHQgPSBzdHlsZWQuaDFgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDMlLCAtNDMlKSByb3RhdGUoN2RlZyk7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrQmFja2dyb3VuZENvbG9yKTtcclxuICBmb250LXNpemU6IDIzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDEwcHggNHB4IDlweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkubGFwdG9wTWlkfSB7XHJcbiAgICBmb250LXNpemU6IDE1cmVtO1xyXG4gIH1cclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkubGFwdG9wTWlkfSB7XHJcbiAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5Lm1ibHNtYWxsfSB7XHJcbiAgICBmb250LXNpemU6IDhyZW07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTdGFja1dhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA1cmVtIDA7XHJcblxyXG4gICYgPiBoMiB7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gICYgPiB1bCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICYgPiBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQnRuV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gICYgPiBhIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbjtcclxuICAgIH1cclxuICAgICYgPiBwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEZ1bGxpbWFnZVdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiA0cmVtO1xyXG4gIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS50YWJMYXJnMn0ge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS50YWJMYXJnMn0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LnByb2plY3RNaWR9IHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LnByb2plY3RNaWQzfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZGl2Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICAgIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS50YWJMYXJnMn0ge1xyXG4gICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS50YWJMYXJnMn0ge1xyXG4gICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBJZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgb25lcHJvamVjdCA9IHByb2plY3RkYXRhLmZpbHRlcigoZGF0YSwgaSkgPT4gaSA9PSBpZCk7XHJcbiAgaWYgKG9uZXByb2plY3QubGVuZ3RoID49IDEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGZ1bGxjb250ZW50LFxyXG4gICAgICBzdGFjayxcclxuICAgICAgc2l0ZSxcclxuICAgICAgY29kZSxcclxuICAgICAgZnVsbGltYWdlcyxcclxuICAgICAgZnVsbGltZ2NvbnRlbnQsXHJcbiAgICB9ID0gb25lcHJvamVjdFswXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9qZWN0V2FwcGVyPlxyXG4gICAgICAgICAgPFBvc3RlcldhcHBlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCdG5XYXBwZXI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17c2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5WaWV3IFNpdGU8L3A+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2NvZGV9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29kZTwvcD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQnRuV2FwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiUHJvamVjdEltYWdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Bvc3RlcldhcHBlcj5cclxuXHJcbiAgICAgICAgICA8Q29udGVudFdhcHBlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDI+e2Z1bGxjb250ZW50fTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U3RhY2tXYXBwZXI+XHJcbiAgICAgICAgICAgICAgPGgyPlN0YWNrPC9oMj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7c3RhY2subWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntkYXRhfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L1N0YWNrV2FwcGVyPlxyXG4gICAgICAgICAgICA8RnVsbGltYWdlV2FwcGVyPlxyXG4gICAgICAgICAgICAgIHtmdWxsaW1hZ2VzLm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YX0gYWx0PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmdWxsaW1nY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBmdWxsaW1nY29udGVudFtpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GdWxsaW1hZ2VXYXBwZXI+XHJcbiAgICAgICAgICA8L0NvbnRlbnRXYXBwZXI+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Qcm9qZWN0V2FwcGVyPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kVGV4dD57bmFtZX08L0JhY2tncm91bmRUZXh0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSWQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=