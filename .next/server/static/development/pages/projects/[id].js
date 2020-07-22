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
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/posters/movieshub.png */ "./images/posters/movieshub.png");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/posters/photohub.png */ "./images/posters/photohub.png");
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/posters/restarunt.png */ "./images/posters/restarunt.png");
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/posters/sayhi.png */ "./images/posters/sayhi.png");
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/posters/weatherapp.png */ "./images/posters/weatherapp.png");
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/gifs/movies.gif */ "./images/gifs/movies.gif");
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/gifs/photo.gif */ "./images/gifs/photo.gif");
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/gifs/restarunt.gif */ "./images/gifs/restarunt.gif");
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/gifs/sayhi.gif */ "./images/gifs/sayhi.gif");
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\pages\\projects\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const projectdata = [{
  name: "SayHI",
  info: "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
  image: _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  imagegif: _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_11___default.a
}, {
  name: "PhotoHub",
  info: "PhotoHub, you can Download Most Beautiful Images And collections...",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  imagegif: _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_9___default.a
}, {
  name: "Movies",
  info: "Movies, We can See Different types of movies and trailers and cast...",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  imagegif: _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_8___default.a
}, {
  name: "Weather App",
  info: "Weather App, You Can Check The Weather And around City Weather...",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  imagegif: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7___default.a
}, {
  name: "Restaurant",
  info: "Restaurants app, You can Check the Hotels and Reviews...",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  imagegif: _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_10___default.a
}];
const ProjectWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  color: white;
  padding: 3rem;
  & > div > div {
    & > h1 {
      font-size: 6rem;
      text-align: center;
      margin: 2rem 0;
      &::after {
        content: "";
      }
    }
    & > img {
      width: 100%;
    }
  }
`;

const Id = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  const oneproject = projectdata.filter((data, i) => i == id);

  if (oneproject.length >= 1) {
    const {
      name,
      info,
      image,
      imagegif
    } = oneproject[0];
    return __jsx(ProjectWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, name)), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvbW92aWVzLmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9waG90by5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9zYXloaS5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9zYXloaS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvd2VhdGhlcmFwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInByb2plY3RkYXRhIiwibmFtZSIsImluZm8iLCJpbWFnZSIsInNheWhpIiwiaW1hZ2VnaWYiLCJzYXloaWdpZiIsInBob3RvaHViIiwicGhvdG9naWYiLCJtb3ZpZXNQb3N0ZXIiLCJtb3ZpZXNnaWYiLCJ3ZXRoZXJhcHAiLCJyZXN0YXJ1bnQiLCJyZXN0YXJ1bnRnaWYiLCJQcm9qZWN0V2FwcGVyIiwic3R5bGVkIiwiZGl2IiwiSWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25lcHJvamVjdCIsImZpbHRlciIsImRhdGEiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLckIsSUFBTCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVFLEtBQVY7QUFBaUIsU0FBRyxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLENBREYsQ0FERjtBQVlELEdBZkQsTUFlTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0F0QkQ7O0FBdUJlYyxpRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzLWIxNjA2OWM0ODc4NTYyNWM0YmY5MjQ3MWYxNTE0MmU5LmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9waG90by04MTllNTdkZjc4ZWUwMjY1YmExZmNmYmY3OTY3YzlkNy5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcmVzdGFydW50LWFjZDBmNmU2ZTExMmJlOTVjNTQ0MTA5ZGZjMzNlNGEyLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zYXloaS1jYWVkYjgyMjBiYjMxYWM4Y2U1MjdmZWZlZWJiM2NjMC5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW92aWVzaHViLTFmYjY1ZDcxNzMxMzBlNWRkMmFlYzMwOTQ5NzhiYWU0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9waG90b2h1Yi02Mzg2MzA4MjUzZmQyNmI4ZWM1YTBlYTgwYTliNGZmYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcmVzdGFydW50LTQ0MDhiZTkxNGJhZTE2MTZlM2JiNGFmNjk4OTZkODAzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zYXloaS01ZTc4MWRlMmJjMzdhMDg3NDZjZmM1NTM1MzdmMTlkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2VhdGhlcmFwcC0yNWI5NjE4NDM3ODQyMmM5Y2RhNmZhODE2MzJiNWYyNC5wbmdcIjsiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG1vdmllc1Bvc3RlciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9odWIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3Bob3RvaHViLnBuZ1wiO1xyXG5pbXBvcnQgcmVzdGFydW50IGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9yZXN0YXJ1bnQucG5nXCI7XHJcbmltcG9ydCBzYXloaSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nXCI7XHJcbmltcG9ydCB3ZXRoZXJhcHAgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nXCI7XHJcblxyXG5pbXBvcnQgbW92aWVzZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9tb3ZpZXMuZ2lmXCI7XHJcbmltcG9ydCBwaG90b2dpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmXCI7XHJcbmltcG9ydCByZXN0YXJ1bnRnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWZcIjtcclxuaW1wb3J0IHNheWhpZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9zYXloaS5naWZcIjtcclxuY29uc3QgcHJvamVjdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYXlISVwiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJTYXlIaSwgaXQncyBsaWtlIGEgU29jaWFsIE1lZGlhIFBsYXRmb3JtIFRoYXQgUGVyZm9ybXMgYWRkaW5nIFBvc3QgYW5kIFNlbmRpbmcgTWVzc2FnZXMuLlwiLFxyXG4gICAgaW1hZ2U6IHNheWhpLFxyXG4gICAgaW1hZ2VnaWY6IHNheWhpZ2lmLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzogXCJQaG90b0h1YiwgeW91IGNhbiBEb3dubG9hZCBNb3N0IEJlYXV0aWZ1bCBJbWFnZXMgQW5kIGNvbGxlY3Rpb25zLi4uXCIsXHJcbiAgICBpbWFnZTogcGhvdG9odWIsXHJcbiAgICBpbWFnZWdpZjogcGhvdG9naWYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vdmllc1wiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJNb3ZpZXMsIFdlIGNhbiBTZWUgRGlmZmVyZW50IHR5cGVzIG9mIG1vdmllcyBhbmQgdHJhaWxlcnMgYW5kIGNhc3QuLi5cIixcclxuICAgIGltYWdlOiBtb3ZpZXNQb3N0ZXIsXHJcbiAgICBpbWFnZWdpZjogbW92aWVzZ2lmLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgaW5mbzogXCJXZWF0aGVyIEFwcCwgWW91IENhbiBDaGVjayBUaGUgV2VhdGhlciBBbmQgYXJvdW5kIENpdHkgV2VhdGhlci4uLlwiLFxyXG4gICAgaW1hZ2U6IHdldGhlcmFwcCxcclxuICAgIGltYWdlZ2lmOiB3ZXRoZXJhcHAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnRcIixcclxuICAgIGluZm86IFwiUmVzdGF1cmFudHMgYXBwLCBZb3UgY2FuIENoZWNrIHRoZSBIb3RlbHMgYW5kIFJldmlld3MuLi5cIixcclxuICAgIGltYWdlOiByZXN0YXJ1bnQsXHJcbiAgICBpbWFnZWdpZjogcmVzdGFydW50Z2lmLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFByb2plY3RXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gICYgPiBkaXYgPiBkaXYge1xyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgSWQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG9uZXByb2plY3QgPSBwcm9qZWN0ZGF0YS5maWx0ZXIoKGRhdGEsIGkpID0+IGkgPT0gaWQpO1xyXG4gIGlmIChvbmVwcm9qZWN0Lmxlbmd0aCA+PSAxKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGluZm8sIGltYWdlLCBpbWFnZWdpZiB9ID0gb25lcHJvamVjdFswXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvamVjdFdhcHBlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiUHJvamVjdEltYWdlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1Byb2plY3RXYXBwZXI+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IElkO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9