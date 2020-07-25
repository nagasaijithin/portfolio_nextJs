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
})(["height:30vh;color:white;font-size:1.5rem;width:80%;margin:5rem auto 0;text-align:center;scroll-behavior:smooth;& > h2,h1{margin:1rem;}& > h2{font-weight:200;width:70%;margin:1rem auto;}"]);
const IconsWapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__IconsWapper",
  componentId: "sc-1yoaa1r-1"
})(["display:flex;align-items:center;justify-content:space-evenly;margin:2rem 0;& > a > svg{height:5rem;}"]);

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
  fullimgcontent: ["This a home page of SayHi application, we can check the new post a post show's how many likes and comments when you click the post or comment icon you go to the post page there you can accesses all comments you can also like comment, This Home aloes without reloading content well update and more..."],
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
  stack: ["Html", "Sass", "javascript"],
  site: "https://restaurantsjithin.netlify.app/",
  code: "https://github.com/nagasaijithin/restaurantsapp.nagasaijithin",
  fullimages: [_images_fulllayout_restaruntFhome_png__WEBPACK_IMPORTED_MODULE_18___default.a],
  fullcontent: "Restaurant Application Build with HTML, CSS, Javascript, and Zomato API, This App Detects The Current Location And Show  Around The Restaurant's Ratings, Images And More "
}];
const ProjectWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ProjectWapper",
  componentId: "sc-1p6cphk-0"
})(["width:100%;color:white;padding:3rem;z-index:5;"]);
const PosterWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__PosterWapper",
  componentId: "sc-1p6cphk-1"
})(["margin:3rem 0;& > div{& > h1{font-size:17rem;text-align:center;margin:2rem 0;-webkit-text-stroke-color:white;-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;font-weight:300;}& > img{box-shadow:5px 4px 10px rgb(0,0,0,64%);width:100%;}}"]);
const ContentWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ContentWapper",
  componentId: "sc-1p6cphk-2"
})(["margin:3rem 0;& > div{& > h2{margin:2rem 0;font-size:6rem;}}"]);
const BackgroundText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "id__BackgroundText",
  componentId: "sc-1p6cphk-3"
})(["position:fixed;left:50%;top:50%;transform:translate(-43%,-43%) rotate(7deg);color:#3a3939;font-size:23rem;font-weight:900;text-shadow:10px 4px 9px rgb(0 0 0 / 59%);"]);
const StackWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__StackWapper",
  componentId: "sc-1p6cphk-4"
})(["margin:5rem 0;& > h2{-webkit-text-stroke-color:white;-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;font-weight:300;}& > ul{width:70%;margin:2rem auto;font-size:3rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;& > li{list-style-type:circle;}}"]);
const BtnWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__BtnWapper",
  componentId: "sc-1p6cphk-5"
})(["font-size:2.5rem;height:10vh;display:flex;align-items:center;justify-content:space-around;margin:2rem 0;& > a{padding:1.5rem 1rem;color:white;text-decoration:none;border:1px solid white;border-radius:20rem;position:relative;overflow:hidden;&:hover{&::after{height:100%;}}&::after{content:\"\";position:absolute;width:100%;height:0%;background-color:white;left:50%;top:50%;transform:translate(-50%,-50%);transition:all 0.6s ease-in;}& > p{position:relative;z-index:3;mix-blend-mode:difference;}}"]);
const FullimageWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__FullimageWapper",
  componentId: "sc-1p6cphk-6"
})(["margin:4rem;& > div{display:flex;align-items:center;& > div{font-size:3rem;padding:3rem;}& > img{height:50%;width:50%;}}& > div:nth-child(even){& > div{order:1;}& > img{order:2;}}"]);

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
      fullimages
    } = oneproject[0];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ProjectWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }
    }, __jsx(PosterWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    }, name)), __jsx(BtnWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: site,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }, "View Site")), __jsx("a", {
      href: code,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, "Code"))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    }))), __jsx(ContentWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 15
      }
    }, fullcontent)), __jsx(StackWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 15
      }
    }, "Stack"), __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 15
      }
    }, stack.map((data, i) => __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 19
      }
    }, data)))), __jsx(FullimageWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, fullimages.map((data, i) => __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: data,
      alt: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 19
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 19
      }
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 11
      }
    })), __jsx(BackgroundText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRk9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmNvbGxlY3Rpb24ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRm9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Z1bGxsYXlvdXQvcmVzdGFydW50RmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRmhvbWUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRnByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL21vdmllcy5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvc2F5aGkuZ2lmIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcGhvdG9odWIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3Jlc3RhcnVudC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2plY3RzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGYWNlYm9va0ljb24iLCJHaXRodWJJY29uIiwiSW5zdGFncmFtSWNvbiIsIkZvb3RlcldhcHBlciIsInN0eWxlZCIsImZvb3RlciIsIkljb25zV2FwcGVyIiwiZGl2IiwiRm9vdGVyIiwicHJvamVjdGRhdGEiLCJuYW1lIiwiaW5mbyIsImltYWdlIiwic2F5aGkiLCJpbWFnZWdpZiIsInNheWhpZ2lmIiwic2l0ZSIsImNvZGUiLCJzdGFjayIsImZ1bGxpbWFnZXMiLCJzYXloaUZob21lIiwic2F5aGlGcHJvZmlsZSIsImZ1bGxpbWdjb250ZW50IiwiZnVsbGNvbnRlbnQiLCJwaG90b2h1YiIsInBob3RvZ2lmIiwicGhvdG9GaG9tZSIsInBob3RvRm9uZSIsInBob3RvRmNvbGxlY3Rpb24iLCJtb3ZpZXNQb3N0ZXIiLCJtb3ZpZXNnaWYiLCJtb3ZpZXNGaG9tZSIsIm1vdmllc0ZPbmUiLCJ3ZXRoZXJhcHAiLCJyZXN0YXJ1bnQiLCJyZXN0YXJ1bnRnaWYiLCJyZXN0YXJ1bnRGaG9tZSIsIlByb2plY3RXYXBwZXIiLCJQb3N0ZXJXYXBwZXIiLCJDb250ZW50V2FwcGVyIiwiQmFja2dyb3VuZFRleHQiLCJoMSIsIlN0YWNrV2FwcGVyIiwiQnRuV2FwcGVyIiwiRnVsbGltYWdlV2FwcGVyIiwiSWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25lcHJvamVjdCIsImZpbHRlciIsImRhdGEiLCJpIiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsd2tCQUZGLENBREQsQ0FESCxDQVpGLENBbEJGLEVBa0RFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxERixDQURGLEVBcURFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCM0MsSUFBakIsQ0FyREYsQ0FERjtBQXlERCxHQXBFRCxNQW9FTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0EzRUQ7O0FBNEVlbUMsaUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2ZhY2Vib29rSWNvbi5zdmdcIjtcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4uL2ltYWdlcy9naXRodWJpY29uLnN2Z1wiO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2luc3RhZ3JhbWljb24uc3ZnXCI7XHJcbmNvbnN0IEZvb3RlcldhcHBlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogNXJlbSBhdXRvIDA7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuXHJcbiAgJiA+IGgyLFxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICB9XHJcbiAgJiA+IGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSWNvbnNXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuXHJcbiAgJiA+IGEgPiBzdmcge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9vdGVyV2FwcGVyIGlkPVwiY29udGFjdG1lXCI+XHJcbiAgICAgIDxoMT5Db250YWN0IE1lPC9oMT5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIExldCdzIEJ1aWxkIFNvbWV0aGluZyBUb2dldGhlciBGZWVsIGZyZWUgdG8gcmVhY2ggb3V0IGlmIHlvdSdyZSBsb29raW5nXHJcbiAgICAgICAgZm9yIGEgRnJvbnQgZW5kIHdlYiBkZXZlbG9wZXIsXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxJY29uc1dhcHBlcj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Bhc3VwdWxldGkuaml0aGluL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxHaXRodWJJY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYWdhc2Fpaml0aGluX3Bhc3VwdWxldGkvXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSWNvbnNXYXBwZXI+XHJcbiAgICA8L0Zvb3RlcldhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzRk9uZS1jYmEwMmQxYTBlNGI1YTAxODQ1MGRiYWZmODY1YjhiNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzRmhvbWUtMzc4MDUzMDgwM2ZlYThkNjk5MjA4MTJmMDM2Y2JiZjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRmNvbGxlY3Rpb24tMGM4MjA5YWU2NDU1MTFlZmQ3YmNiMWI0NTJiY2YwODMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRmhvbWUtY2NlYjE5ZmE3MzJhYWYzOWViZjRmMzA5M2Y5ZGJlM2IucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvRm9uZS04ZjI3MDIzNzEzMzgzMDg4MGE5YThiOTdlYWFhZWM4My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcmVzdGFydW50RmhvbWUtMzc5NDIwMzVjY2M2Y2FiZjdhZDYzYmZkOTMyMmUyMDcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpRmhvbWUtNTU1NDRhYjgxYTA0NGM1Mzk5MGE2NGEzOTE0YmE5NTEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpRnByb2ZpbGUtZmMyYjk5YjYxYzllYTk0MjIwYTNhM2MyYzEzYWQ1ZmIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllcy1iMTYwNjljNDg3ODU2MjVjNGJmOTI0NzFmMTUxNDJlOS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG8tODE5ZTU3ZGY3OGVlMDI2NWJhMWZjZmJmNzk2N2M5ZDcuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC1hY2QwZjZlNmUxMTJiZTk1YzU0NDEwOWRmYzMzZTRhMi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktY2FlZGI4MjIwYmIzMWFjOGNlNTI3ZmVmZWViYjNjYzAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllc2h1Yi0xZmI2NWQ3MTczMTMwZTVkZDJhZWMzMDk0OTc4YmFlNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG9odWItNjM4NjMwODI1M2ZkMjZiOGVjNWEwZWE4MGE5YjRmZmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC00NDA4YmU5MTRiYWUxNjE2ZTNiYjRhZjY5ODk2ZDgwMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktNWU3ODFkZTJiYzM3YTA4NzQ2Y2ZjNTUzNTM3ZjE5ZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dlYXRoZXJhcHAtMjViOTYxODQzNzg0MjJjOWNkYTZmYTgxNjMyYjVmMjQucG5nXCI7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG4vLy8vL1xyXG4vLyBhbGwgaW1hZ2VcclxuLy8vLy9cclxuaW1wb3J0IG1vdmllc1Bvc3RlciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9odWIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3Bob3RvaHViLnBuZ1wiO1xyXG5pbXBvcnQgcmVzdGFydW50IGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9yZXN0YXJ1bnQucG5nXCI7XHJcbmltcG9ydCBzYXloaSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nXCI7XHJcbmltcG9ydCB3ZXRoZXJhcHAgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nXCI7XHJcblxyXG4vLy8vL1xyXG4vLyBhbGwgZ2lmXHJcbi8vLy8vXHJcbmltcG9ydCBtb3ZpZXNnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL21vdmllcy5naWZcIjtcclxuaW1wb3J0IHBob3RvZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9waG90by5naWZcIjtcclxuaW1wb3J0IHJlc3RhcnVudGdpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZlwiO1xyXG5pbXBvcnQgc2F5aGlnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3NheWhpLmdpZlwiO1xyXG5cclxuLy8vLy9cclxuLy8gYWxsIGZ1bGxsYXlvdXRcclxuLy8vLy9cclxuXHJcbmltcG9ydCBtb3ZpZXNGaG9tZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvbW92aWVzRmhvbWUucG5nXCI7XHJcbmltcG9ydCBtb3ZpZXNGT25lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9tb3ZpZXNGT25lLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9GY29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Z1bGxsYXlvdXQvcGhvdG9GY29sbGVjdGlvbi5wbmdcIjtcclxuaW1wb3J0IHBob3RvRmhvbWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRmhvbWUucG5nXCI7XHJcbmltcG9ydCBwaG90b0ZvbmUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3Bob3RvRm9uZS5wbmdcIjtcclxuaW1wb3J0IHJlc3RhcnVudEZob21lIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9yZXN0YXJ1bnRGaG9tZS5wbmdcIjtcclxuaW1wb3J0IHNheWhpRmhvbWUgZnJvbSBcIi4uLy4uL2ltYWdlcy9mdWxsbGF5b3V0L3NheWhpRmhvbWUucG5nXCI7XHJcbmltcG9ydCBzYXloaUZwcm9maWxlIGZyb20gXCIuLi8uLi9pbWFnZXMvZnVsbGxheW91dC9zYXloaUZwcm9maWxlLnBuZ1wiO1xyXG5jb25zdCBwcm9qZWN0ZGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNheUhJXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIlNheUhpLCBpdCdzIGxpa2UgYSBTb2NpYWwgTWVkaWEgUGxhdGZvcm0gVGhhdCBQZXJmb3JtcyBhZGRpbmcgUG9zdCBhbmQgU2VuZGluZyBNZXNzYWdlcy4uXCIsXHJcbiAgICBpbWFnZTogc2F5aGksXHJcbiAgICBpbWFnZWdpZjogc2F5aGlnaWYsXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vc2F5aGktZGV2LTVmYzg1LmZpcmViYXNlYXBwLmNvbS9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vc2F5aGlcIixcclxuICAgIHN0YWNrOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwic3R5bGVkLWNvbXBvbmVudHNcIiwgXCJmaXJlYmFzZVwiXSxcclxuICAgIGZ1bGxpbWFnZXM6IFtzYXloaUZob21lLCBzYXloaUZwcm9maWxlXSxcclxuICAgIGZ1bGxpbWdjb250ZW50OiBbXHJcbiAgICAgIFwiVGhpcyBhIGhvbWUgcGFnZSBvZiBTYXlIaSBhcHBsaWNhdGlvbiwgd2UgY2FuIGNoZWNrIHRoZSBuZXcgcG9zdCBhIHBvc3Qgc2hvdydzIGhvdyBtYW55IGxpa2VzIGFuZCBjb21tZW50cyB3aGVuIHlvdSBjbGljayB0aGUgcG9zdCBvciBjb21tZW50IGljb24geW91IGdvIHRvIHRoZSBwb3N0IHBhZ2UgdGhlcmUgeW91IGNhbiBhY2Nlc3NlcyBhbGwgY29tbWVudHMgeW91IGNhbiBhbHNvIGxpa2UgY29tbWVudCwgVGhpcyBIb21lIGFsb2VzIHdpdGhvdXQgcmVsb2FkaW5nIGNvbnRlbnQgd2VsbCB1cGRhdGUgYW5kIG1vcmUuLi5cIixcclxuICAgIF0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJTYXlIaSBpcyBCdWlsZCBXaXRoIFJlYWN0LVJlZHV4LWZpcmViYXNlLCBGaXJlYmFzZSBQcm92aWRpbmcgQXdlc29tZSBTZXJ2aWNlcyBGb3IgQSBEZXZlbG9wZXIgaXQgUHJvdmlkZXMgVGhlIFJlYWx0aW1lIGRhdGFiYXNlLCBmaXJlc3RvcmUsIGNsb3VkIGZ1bmN0aW9ucywgRGVwbG95bWVudHMsIFRoYXQgSW5zcGlyZXMgTWUgVG8gQnVpbGQgVGhpcyBXZWIgQXBwbGljYXRpb24gQWxvbmcgVGhlIFdheSBJIGxlYXJuIGEgbG90IG9mIHRoaW5ncyBhYm91dCByZWFjdCwgcmVkdXgsIGZpcmViYXNlLCBzdHlsZWQtY29tcG9uZW50cywgYWZ0ZXIgY29tcGxldGVkIHRoaXMgcHJvamVjdCB0aGF0IG1vdGl2ZWQgbWUgbGVhcm4gbW9yZSBhYm91dCB0aGlzIGF3ZXNvbWUgdG9vbCAgIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzogXCJQaG90b0h1YiwgeW91IGNhbiBEb3dubG9hZCBNb3N0IEJlYXV0aWZ1bCBJbWFnZXMgQW5kIGNvbGxlY3Rpb25zLi4uXCIsXHJcbiAgICBpbWFnZTogcGhvdG9odWIsXHJcbiAgICBpbWFnZWdpZjogcGhvdG9naWYsXHJcbiAgICBzdGFjazogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcInN0eWxlZC1jb21wb25lbnRzXCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9waG90b1wiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3Bob3RvaHViaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZnVsbGltYWdlczogW3Bob3RvRmhvbWUsIHBob3RvRm9uZSwgcGhvdG9GY29sbGVjdGlvbl0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJQaG90byBodWIgaXMgc2VydmljZSB0byBwcm92aWRpbmcgaGlnaC1xdWFsaXR5IGltYWdlcyBmb3IgYSB1c2VyIGNhbiBzZWUgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBpbWFnZXMgYW5kIGNvbGxlY3Rpb25zIGFuZCBEb3dubG9hZCBpbWFnZXMuIFRoaXMgYnVpbGQgd2l0aCByZWFjdCxyZWR1eCBhbmQgc3R5bGVkLWNvbXBvbmVudHMgd2l0aCAndW5zcGxhc2gnIEFQSSBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW92aWVzXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIk1vdmllcywgV2UgY2FuIFNlZSBEaWZmZXJlbnQgdHlwZXMgb2YgbW92aWVzIGFuZCB0cmFpbGVycyBhbmQgY2FzdC4uLlwiLFxyXG4gICAgaW1hZ2U6IG1vdmllc1Bvc3RlcixcclxuICAgIGltYWdlZ2lmOiBtb3ZpZXNnaWYsXHJcbiAgICBzdGFjazogW1wiSHRtbFwiLCBcIlNhc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9tb3ZpZXMubmFnYXNhaWppdGhpblwiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL21vdmllc2ppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGZ1bGxpbWFnZXM6IFttb3ZpZXNGaG9tZSwgbW92aWVzRk9uZV0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJNb3ZpZXMgYXBwbGljYXRpb24gYnVpbGQgd2l0aCBIVE1MLCBDU1MsIGphdmFzY3JpcHQsIGFuZCBBUEkgZnJvbSBUaGVtb3ZpZWRiIGl0J3MgcHJvdmlkZWQgbW92aWVzIGluZm9ybWF0aW9uIGxpa2UgY2FzdCwgdHJhaWxlcnMsIG1vdmllcyByYXRpbmcgYW5kIHJlbGF0ZWQgbW92aWVzIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgaW5mbzogXCJXZWF0aGVyIEFwcCwgWW91IENhbiBDaGVjayBUaGUgV2VhdGhlciBBbmQgYXJvdW5kIENpdHkgV2VhdGhlci4uLlwiLFxyXG4gICAgaW1hZ2U6IHdldGhlcmFwcCxcclxuICAgIGltYWdlZ2lmOiB3ZXRoZXJhcHAsXHJcbiAgICBzdGFjazogW1wiSHRtbFwiLCBcIlNhc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi93ZWF0aGVybWFpbi5uYWdhc2Fpaml0aGluXCIsXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vd2VhdGhlcmppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGZ1bGxpbWFnZXM6IFtdLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiIFdlYXRoZXIgYXBwIGJ1aWxkIHdpdGggSHRtbCwgQ1NTLCBqYXZhc2NyaXB0IGFuZCBPcGVuV2VhdGhlciBBUEksIFRoaXMgQXBwIERldGVjdHMgWW91ciBDdXJyZW50IExvY2F0aW9uIFRoZW4gU2hvdyBBYm91dCBZb3VyIFdlYXRoZXIgQW5kIEh1bWlkaXR5LCBXaW5kIEFuZCBhcm91bmQgQ2l0eSBXZWF0aGVyLFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZXN0YXVyYW50XCIsXHJcbiAgICBpbmZvOiBcIlJlc3RhdXJhbnRzIGFwcCwgWW91IGNhbiBDaGVjayB0aGUgSG90ZWxzIGFuZCBSZXZpZXdzLi4uXCIsXHJcbiAgICBpbWFnZTogcmVzdGFydW50LFxyXG4gICAgaW1hZ2VnaWY6IHJlc3RhcnVudGdpZixcclxuICAgIHN0YWNrOiBbXCJIdG1sXCIsIFwiU2Fzc1wiLCBcImphdmFzY3JpcHRcIl0sXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vcmVzdGF1cmFudHNqaXRoaW4ubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluL3Jlc3RhdXJhbnRzYXBwLm5hZ2FzYWlqaXRoaW5cIixcclxuICAgIGZ1bGxpbWFnZXM6IFtyZXN0YXJ1bnRGaG9tZV0sXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJSZXN0YXVyYW50IEFwcGxpY2F0aW9uIEJ1aWxkIHdpdGggSFRNTCwgQ1NTLCBKYXZhc2NyaXB0LCBhbmQgWm9tYXRvIEFQSSwgVGhpcyBBcHAgRGV0ZWN0cyBUaGUgQ3VycmVudCBMb2NhdGlvbiBBbmQgU2hvdyAgQXJvdW5kIFRoZSBSZXN0YXVyYW50J3MgUmF0aW5ncywgSW1hZ2VzIEFuZCBNb3JlIFwiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFByb2plY3RXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIHotaW5kZXg6IDU7XHJcbmA7XHJcbmNvbnN0IFBvc3RlcldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICAmID4gaDEge1xyXG4gICAgICBmb250LXNpemU6IDE3cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgICYgPiBpbWcge1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggNHB4IDEwcHggcmdiKDAsIDAsIDAsIDY0JSk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudFdhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgJiA+IGRpdiB7XHJcbiAgICAmID4gaDIge1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQmFja2dyb3VuZFRleHQgPSBzdHlsZWQuaDFgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDMlLCAtNDMlKSByb3RhdGUoN2RlZyk7XHJcbiAgY29sb3I6ICMzYTM5Mzk7XHJcbiAgZm9udC1zaXplOiAyM3JlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtc2hhZG93OiAxMHB4IDRweCA5cHggcmdiKDAgMCAwIC8gNTklKTtcclxuYDtcclxuY29uc3QgU3RhY2tXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogNXJlbSAwO1xyXG5cclxuICAmID4gaDIge1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gICYgPiB1bCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICYgPiBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQnRuV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gICYgPiBhIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluO1xyXG4gICAgfVxyXG4gICAgJiA+IHAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgRnVsbGltYWdlV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDRyZW07XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgJiA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAmID4gZGl2Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgb3JkZXI6IDE7XHJcbiAgICB9XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBJZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgb25lcHJvamVjdCA9IHByb2plY3RkYXRhLmZpbHRlcigoZGF0YSwgaSkgPT4gaSA9PSBpZCk7XHJcbiAgaWYgKG9uZXByb2plY3QubGVuZ3RoID49IDEpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGZ1bGxjb250ZW50LFxyXG4gICAgICBzdGFjayxcclxuICAgICAgc2l0ZSxcclxuICAgICAgY29kZSxcclxuICAgICAgZnVsbGltYWdlcyxcclxuICAgIH0gPSBvbmVwcm9qZWN0WzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFByb2plY3RXYXBwZXI+XHJcbiAgICAgICAgICA8UG9zdGVyV2FwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ0bldhcHBlcj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxwPlZpZXcgU2l0ZTwvcD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17Y29kZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db2RlPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9CdG5XYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJQcm9qZWN0SW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUG9zdGVyV2FwcGVyPlxyXG5cclxuICAgICAgICAgIDxDb250ZW50V2FwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj57ZnVsbGNvbnRlbnR9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTdGFja1dhcHBlcj5cclxuICAgICAgICAgICAgICA8aDI+U3RhY2s8L2gyPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzdGFjay5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e2RhdGF9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvU3RhY2tXYXBwZXI+XHJcbiAgICAgICAgICAgIDxGdWxsaW1hZ2VXYXBwZXI+XHJcbiAgICAgICAgICAgICAge2Z1bGxpbWFnZXMubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YX0gYWx0PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3NcclxuICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd25cclxuICAgICAgICAgICAgICAgICAgICBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGhcclxuICAgICAgICAgICAgICAgICAgICB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GdWxsaW1hZ2VXYXBwZXI+XHJcbiAgICAgICAgICA8L0NvbnRlbnRXYXBwZXI+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Qcm9qZWN0V2FwcGVyPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kVGV4dD57bmFtZX08L0JhY2tncm91bmRUZXh0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSWQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=