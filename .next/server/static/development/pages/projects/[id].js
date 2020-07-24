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
  imagegif: _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
  fullcontent: "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it Provides The Realtime database, firestore, cloud functions, Deployments, That Inspires Me To Build This Web Application Along The Way I learn a lot of things about react, redux, firebase, styled-components, after completed this project that motived me learn more about this awesome tool   "
}, {
  name: "PhotoHub",
  info: "PhotoHub, you can Download Most Beautiful Images And collections...",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  imagegif: _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_9___default.a,
  fullcontent: "Photo hub is service to providing high-quality images for a user can see the different types of images and collections and Download images. This build with react,redux and styled-components with 'unsplash' API "
}, {
  name: "Movies",
  info: "Movies, We can See Different types of movies and trailers and cast...",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  imagegif: _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_8___default.a,
  fullcontent: "Movies application build with HTML, CSS, javascript, and API from Themoviedb it's provided movies information like cast, trailers, movies rating and related movies "
}, {
  name: "Weather App",
  info: "Weather App, You Can Check The Weather And around City Weather...",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  imagegif: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  fullcontent: "This weather app detects your current location then show about your weather and Humidity, Wind And around City Weather, this app build with Html, CSS, javascript and OpenWeather API"
}, {
  name: "Restaurant",
  info: "Restaurants app, You can Check the Hotels and Reviews...",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  imagegif: _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
  fullcontent: "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it provides the realtime database, fire store, cloud functions, deploy, that inspires me to build this web app "
}];
const ProjectWapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "id__ProjectWapper",
  componentId: "sc-1p6cphk-0"
})(["width:100%;color:white;padding:3rem;& > div > div{& > h1{font-size:6rem;text-align:center;margin:2rem 0;}& > img{width:100%;}}"]);

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
      fullcontent
    } = oneproject[0];
    return __jsx(ProjectWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, name)), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, fullcontent))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvbW92aWVzLmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9waG90by5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9zYXloaS5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9zYXloaS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvd2VhdGhlcmFwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInByb2plY3RkYXRhIiwibmFtZSIsImluZm8iLCJpbWFnZSIsInNheWhpIiwiaW1hZ2VnaWYiLCJzYXloaWdpZiIsImZ1bGxjb250ZW50IiwicGhvdG9odWIiLCJwaG90b2dpZiIsIm1vdmllc1Bvc3RlciIsIm1vdmllc2dpZiIsIndldGhlcmFwcCIsInJlc3RhcnVudCIsInJlc3RhcnVudGdpZiIsIlByb2plY3RXYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJvbmVwcm9qZWN0IiwiZmlsdGVyIiwiZGF0YSIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLdEIsSUFBTCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVFLEtBQVY7QUFBaUIsU0FBRyxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0ksV0FBTCxDQURGLENBREYsQ0FURixDQURGO0FBaUJELEdBcEJELE1Bb0JPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQTNCRDs7QUE0QmVXLGlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0c1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb3ZpZXMtYjE2MDY5YzQ4Nzg1NjI1YzRiZjkyNDcxZjE1MTQyZTkuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvLTgxOWU1N2RmNzhlZTAyNjViYTFmY2ZiZjc5NjdjOWQ3LmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZXN0YXJ1bnQtYWNkMGY2ZTZlMTEyYmU5NWM1NDQxMDlkZmMzM2U0YTIuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpLWNhZWRiODIyMGJiMzFhYzhjZTUyN2ZlZmVlYmIzY2MwLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb3ZpZXNodWItMWZiNjVkNzE3MzEzMGU1ZGQyYWVjMzA5NDk3OGJhZTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Bob3RvaHViLTYzODYzMDgyNTNmZDI2YjhlYzVhMGVhODBhOWI0ZmZhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZXN0YXJ1bnQtNDQwOGJlOTE0YmFlMTYxNmUzYmI0YWY2OTg5NmQ4MDMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NheWhpLTVlNzgxZGUyYmMzN2EwODc0NmNmYzU1MzUzN2YxOWRiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93ZWF0aGVyYXBwLTI1Yjk2MTg0Mzc4NDIyYzljZGE2ZmE4MTYzMmI1ZjI0LnBuZ1wiOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgbW92aWVzUG9zdGVyIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9tb3ZpZXNodWIucG5nXCI7XHJcbmltcG9ydCBwaG90b2h1YiBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvcGhvdG9odWIucG5nXCI7XHJcbmltcG9ydCByZXN0YXJ1bnQgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3Jlc3RhcnVudC5wbmdcIjtcclxuaW1wb3J0IHNheWhpIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9zYXloaS5wbmdcIjtcclxuaW1wb3J0IHdldGhlcmFwcCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvd2VhdGhlcmFwcC5wbmdcIjtcclxuXHJcbmltcG9ydCBtb3ZpZXNnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL21vdmllcy5naWZcIjtcclxuaW1wb3J0IHBob3RvZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9waG90by5naWZcIjtcclxuaW1wb3J0IHJlc3RhcnVudGdpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZlwiO1xyXG5pbXBvcnQgc2F5aGlnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3NheWhpLmdpZlwiO1xyXG5jb25zdCBwcm9qZWN0ZGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNheUhJXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIlNheUhpLCBpdCdzIGxpa2UgYSBTb2NpYWwgTWVkaWEgUGxhdGZvcm0gVGhhdCBQZXJmb3JtcyBhZGRpbmcgUG9zdCBhbmQgU2VuZGluZyBNZXNzYWdlcy4uXCIsXHJcbiAgICBpbWFnZTogc2F5aGksXHJcbiAgICBpbWFnZWdpZjogc2F5aGlnaWYsXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJTYXlIaSBpcyBCdWlsZCBXaXRoIFJlYWN0LVJlZHV4LWZpcmViYXNlLCBGaXJlYmFzZSBQcm92aWRpbmcgQXdlc29tZSBTZXJ2aWNlcyBGb3IgQSBEZXZlbG9wZXIgaXQgUHJvdmlkZXMgVGhlIFJlYWx0aW1lIGRhdGFiYXNlLCBmaXJlc3RvcmUsIGNsb3VkIGZ1bmN0aW9ucywgRGVwbG95bWVudHMsIFRoYXQgSW5zcGlyZXMgTWUgVG8gQnVpbGQgVGhpcyBXZWIgQXBwbGljYXRpb24gQWxvbmcgVGhlIFdheSBJIGxlYXJuIGEgbG90IG9mIHRoaW5ncyBhYm91dCByZWFjdCwgcmVkdXgsIGZpcmViYXNlLCBzdHlsZWQtY29tcG9uZW50cywgYWZ0ZXIgY29tcGxldGVkIHRoaXMgcHJvamVjdCB0aGF0IG1vdGl2ZWQgbWUgbGVhcm4gbW9yZSBhYm91dCB0aGlzIGF3ZXNvbWUgdG9vbCAgIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzogXCJQaG90b0h1YiwgeW91IGNhbiBEb3dubG9hZCBNb3N0IEJlYXV0aWZ1bCBJbWFnZXMgQW5kIGNvbGxlY3Rpb25zLi4uXCIsXHJcbiAgICBpbWFnZTogcGhvdG9odWIsXHJcbiAgICBpbWFnZWdpZjogcGhvdG9naWYsXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJQaG90byBodWIgaXMgc2VydmljZSB0byBwcm92aWRpbmcgaGlnaC1xdWFsaXR5IGltYWdlcyBmb3IgYSB1c2VyIGNhbiBzZWUgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBpbWFnZXMgYW5kIGNvbGxlY3Rpb25zIGFuZCBEb3dubG9hZCBpbWFnZXMuIFRoaXMgYnVpbGQgd2l0aCByZWFjdCxyZWR1eCBhbmQgc3R5bGVkLWNvbXBvbmVudHMgd2l0aCAndW5zcGxhc2gnIEFQSSBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW92aWVzXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcIk1vdmllcywgV2UgY2FuIFNlZSBEaWZmZXJlbnQgdHlwZXMgb2YgbW92aWVzIGFuZCB0cmFpbGVycyBhbmQgY2FzdC4uLlwiLFxyXG4gICAgaW1hZ2U6IG1vdmllc1Bvc3RlcixcclxuICAgIGltYWdlZ2lmOiBtb3ZpZXNnaWYsXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJNb3ZpZXMgYXBwbGljYXRpb24gYnVpbGQgd2l0aCBIVE1MLCBDU1MsIGphdmFzY3JpcHQsIGFuZCBBUEkgZnJvbSBUaGVtb3ZpZWRiIGl0J3MgcHJvdmlkZWQgbW92aWVzIGluZm9ybWF0aW9uIGxpa2UgY2FzdCwgdHJhaWxlcnMsIG1vdmllcyByYXRpbmcgYW5kIHJlbGF0ZWQgbW92aWVzIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgaW5mbzogXCJXZWF0aGVyIEFwcCwgWW91IENhbiBDaGVjayBUaGUgV2VhdGhlciBBbmQgYXJvdW5kIENpdHkgV2VhdGhlci4uLlwiLFxyXG4gICAgaW1hZ2U6IHdldGhlcmFwcCxcclxuICAgIGltYWdlZ2lmOiB3ZXRoZXJhcHAsXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCJUaGlzIHdlYXRoZXIgYXBwIGRldGVjdHMgeW91ciBjdXJyZW50IGxvY2F0aW9uIHRoZW4gc2hvdyBhYm91dCB5b3VyIHdlYXRoZXIgYW5kIEh1bWlkaXR5LCBXaW5kIEFuZCBhcm91bmQgQ2l0eSBXZWF0aGVyLCB0aGlzIGFwcCBidWlsZCB3aXRoIEh0bWwsIENTUywgamF2YXNjcmlwdCBhbmQgT3BlbldlYXRoZXIgQVBJXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnRcIixcclxuICAgIGluZm86IFwiUmVzdGF1cmFudHMgYXBwLCBZb3UgY2FuIENoZWNrIHRoZSBIb3RlbHMgYW5kIFJldmlld3MuLi5cIixcclxuICAgIGltYWdlOiByZXN0YXJ1bnQsXHJcbiAgICBpbWFnZWdpZjogcmVzdGFydW50Z2lmLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiU2F5SGkgaXMgQnVpbGQgV2l0aCBSZWFjdC1SZWR1eC1maXJlYmFzZSwgRmlyZWJhc2UgUHJvdmlkaW5nIEF3ZXNvbWUgU2VydmljZXMgRm9yIEEgRGV2ZWxvcGVyIGl0IHByb3ZpZGVzIHRoZSByZWFsdGltZSBkYXRhYmFzZSwgZmlyZSBzdG9yZSwgY2xvdWQgZnVuY3Rpb25zLCBkZXBsb3ksIHRoYXQgaW5zcGlyZXMgbWUgdG8gYnVpbGQgdGhpcyB3ZWIgYXBwIFwiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFByb2plY3RXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gICYgPiBkaXYgPiBkaXYge1xyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgfVxyXG4gICAgJiA+IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgSWQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG9uZXByb2plY3QgPSBwcm9qZWN0ZGF0YS5maWx0ZXIoKGRhdGEsIGkpID0+IGkgPT0gaWQpO1xyXG4gIGlmIChvbmVwcm9qZWN0Lmxlbmd0aCA+PSAxKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGltYWdlLCBmdWxsY29udGVudCB9ID0gb25lcHJvamVjdFswXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvamVjdFdhcHBlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiUHJvamVjdEltYWdlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e2Z1bGxjb250ZW50fTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Qcm9qZWN0V2FwcGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==