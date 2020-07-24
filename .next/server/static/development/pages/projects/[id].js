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
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\pages\\projects\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const projectdata = [{
  name: "SayHI",
  info: "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
  image: _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  imagegif: _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
  site: "https://sayhi-dev-5fc85.firebaseapp.com/",
  code: "https://github.com/nagasaijithin/sayhi",
  stack: ["React", "Redux", "styled-components", "firebase"],
  fullcontent: "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it Provides The Realtime database, firestore, cloud functions, Deployments, That Inspires Me To Build This Web Application Along The Way I learn a lot of things about react, redux, firebase, styled-components, after completed this project that motived me learn more about this awesome tool   "
}, {
  name: "PhotoHub",
  info: "PhotoHub, you can Download Most Beautiful Images And collections...",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  imagegif: _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
  stack: ["React", "Redux", "styled-components"],
  code: "https://github.com/nagasaijithin/photo",
  site: "https://photohubjithin.netlify.app/",
  fullcontent: "Photo hub is service to providing high-quality images for a user can see the different types of images and collections and Download images. This build with react,redux and styled-components with 'unsplash' API "
}, {
  name: "Movies",
  info: "Movies, We can See Different types of movies and trailers and cast...",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  imagegif: _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_9___default.a,
  stack: ["Html", "Sass", "javascript"],
  code: "https://github.com/nagasaijithin/movies.nagasaijithin",
  site: "https://moviesjithin.netlify.app/",
  fullcontent: "Movies application build with HTML, CSS, javascript, and API from Themoviedb it's provided movies information like cast, trailers, movies rating and related movies "
}, {
  name: "Weather App",
  info: "Weather App, You Can Check The Weather And around City Weather...",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  imagegif: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  stack: ["Html", "Sass", "javascript"],
  code: "https://github.com/nagasaijithin/weathermain.nagasaijithin",
  site: "https://weatherjithin.netlify.app/",
  fullcontent: " Weather app build with Html, CSS, javascript and OpenWeather API, This App Detects Your Current Location Then Show About Your Weather And Humidity, Wind And around City Weather,"
}, {
  name: "Restaurant",
  info: "Restaurants app, You can Check the Hotels and Reviews...",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  imagegif: _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
  stack: ["Html", "Sass", "javascript"],
  site: "https://restaurantsjithin.netlify.app/",
  code: "https://github.com/nagasaijithin/restaurantsapp.nagasaijithin",
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
      code
    } = oneproject[0];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ProjectWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, __jsx(PosterWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 15
      }
    }, name)), __jsx(BtnWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: site,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, "View Site")), __jsx("a", {
      href: code,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }, "Code"))), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image,
      alt: "ProjectImage",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }))), __jsx(ContentWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }, fullcontent)), __jsx(StackWapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    }, "Stack"), __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }
    }, stack.map((data, i) => __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }, data))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    })), __jsx(BackgroundText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvbW92aWVzLmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9waG90by5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dpZnMvcmVzdGFydW50LmdpZiIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZ2lmcy9zYXloaS5naWYiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcG9zdGVycy9zYXloaS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Bvc3RlcnMvd2VhdGhlcmFwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZhY2Vib29rSWNvbiIsIkdpdGh1Ykljb24iLCJJbnN0YWdyYW1JY29uIiwiRm9vdGVyV2FwcGVyIiwic3R5bGVkIiwiZm9vdGVyIiwiSWNvbnNXYXBwZXIiLCJkaXYiLCJGb290ZXIiLCJwcm9qZWN0ZGF0YSIsIm5hbWUiLCJpbmZvIiwiaW1hZ2UiLCJzYXloaSIsImltYWdlZ2lmIiwic2F5aGlnaWYiLCJzaXRlIiwiY29kZSIsInN0YWNrIiwiZnVsbGNvbnRlbnQiLCJwaG90b2h1YiIsInBob3RvZ2lmIiwibW92aWVzUG9zdGVyIiwibW92aWVzZ2lmIiwid2V0aGVyYXBwIiwicmVzdGFydW50IiwicmVzdGFydW50Z2lmIiwiUHJvamVjdFdhcHBlciIsIlBvc3RlcldhcHBlciIsIkNvbnRlbnRXYXBwZXIiLCJCYWNrZ3JvdW5kVGV4dCIsImgxIiwiU3RhY2tXYXBwZXIiLCJCdG5XYXBwZXIiLCJJZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJvbmVwcm9qZWN0IiwiZmlsdGVyIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7SUFDT0EsWSxZQUFBQSxZOzs7Ozs7O0FBQUFBLFk7Ozs7Ozs7SUFDQUMsVSxZQUFBQSxVOzs7Ozs7O0FBQUFBLFU7Ozs7Ozs7SUFDQUMsYSxZQUFBQSxhOzs7Ozs7OztBQUFBQSxhOzs7Ozs7QUFDUCxNQUFNQyxZQUFZLEdBQUdDLHdEQUFNLENBQUNDLE1BQVY7QUFB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LENBWkYsQ0FERixFQWtCRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtPLFdBQUwsQ0FERixDQURGLEVBSUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELEtBQUssQ0FBQzBCLEdBQU4sQ0FBVSxDQUFDSCxJQUFELEVBQU9DLENBQVAsS0FDVDtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFELElBQWIsQ0FERCxDQURILENBRkYsQ0FKRixDQWxCRixFQStCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEvQkYsQ0FERixFQWtDRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQi9CLElBQWpCLENBbENGLENBREY7QUFzQ0QsR0F6Q0QsTUF5Q087QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBaEREOztBQWlEZXdCLGlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak9BLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0c1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIi4uL2ltYWdlcy9mYWNlYm9va0ljb24uc3ZnXCI7XHJcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuLi9pbWFnZXMvZ2l0aHViaWNvbi5zdmdcIjtcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIi4uL2ltYWdlcy9pbnN0YWdyYW1pY29uLnN2Z1wiO1xyXG5jb25zdCBGb290ZXJXYXBwZXIgPSBzdHlsZWQuZm9vdGVyYFxyXG4gIGhlaWdodDogMzB2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDVyZW0gYXV0byAwO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcblxyXG4gICYgPiBoMixcclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG4gICYgPiBoMiB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb25zV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcblxyXG4gICYgPiBhID4gc3ZnIHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldhcHBlciBpZD1cImNvbnRhY3RtZVwiPlxyXG4gICAgICA8aDE+Q29udGFjdCBNZTwvaDE+XHJcbiAgICAgIDxoMj5cclxuICAgICAgICBMZXQncyBCdWlsZCBTb21ldGhpbmcgVG9nZXRoZXIgRmVlbCBmcmVlIHRvIHJlYWNoIG91dCBpZiB5b3UncmUgbG9va2luZ1xyXG4gICAgICAgIGZvciBhIEZyb250IGVuZCB3ZWIgZGV2ZWxvcGVyLFxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8SWNvbnNXYXBwZXI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wYXN1cHVsZXRpLmppdGhpbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbmFnYXNhaWppdGhpbl9wYXN1cHVsZXRpL1wiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnN0YWdyYW1JY29uIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0ljb25zV2FwcGVyPlxyXG4gICAgPC9Gb290ZXJXYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllcy1iMTYwNjljNDg3ODU2MjVjNGJmOTI0NzFmMTUxNDJlOS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG8tODE5ZTU3ZGY3OGVlMDI2NWJhMWZjZmJmNzk2N2M5ZDcuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC1hY2QwZjZlNmUxMTJiZTk1YzU0NDEwOWRmYzMzZTRhMi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktY2FlZGI4MjIwYmIzMWFjOGNlNTI3ZmVmZWViYjNjYzAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21vdmllc2h1Yi0xZmI2NWQ3MTczMTMwZTVkZDJhZWMzMDk0OTc4YmFlNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvdG9odWItNjM4NjMwODI1M2ZkMjZiOGVjNWEwZWE4MGE5YjRmZmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Jlc3RhcnVudC00NDA4YmU5MTRiYWUxNjE2ZTNiYjRhZjY5ODk2ZDgwMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2F5aGktNWU3ODFkZTJiYzM3YTA4NzQ2Y2ZjNTUzNTM3ZjE5ZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dlYXRoZXJhcHAtMjViOTYxODQzNzg0MjJjOWNkYTZmYTgxNjMyYjVmMjQucG5nXCI7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBtb3ZpZXNQb3N0ZXIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmdcIjtcclxuaW1wb3J0IHBob3RvaHViIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmdcIjtcclxuaW1wb3J0IHJlc3RhcnVudCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZ1wiO1xyXG5pbXBvcnQgc2F5aGkgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3NheWhpLnBuZ1wiO1xyXG5pbXBvcnQgd2V0aGVyYXBwIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy93ZWF0aGVyYXBwLnBuZ1wiO1xyXG5cclxuaW1wb3J0IG1vdmllc2dpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvbW92aWVzLmdpZlwiO1xyXG5pbXBvcnQgcGhvdG9naWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3Bob3RvLmdpZlwiO1xyXG5pbXBvcnQgcmVzdGFydW50Z2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9yZXN0YXJ1bnQuZ2lmXCI7XHJcbmltcG9ydCBzYXloaWdpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvc2F5aGkuZ2lmXCI7XHJcbmNvbnN0IHByb2plY3RkYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiU2F5SElcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiU2F5SGksIGl0J3MgbGlrZSBhIFNvY2lhbCBNZWRpYSBQbGF0Zm9ybSBUaGF0IFBlcmZvcm1zIGFkZGluZyBQb3N0IGFuZCBTZW5kaW5nIE1lc3NhZ2VzLi5cIixcclxuICAgIGltYWdlOiBzYXloaSxcclxuICAgIGltYWdlZ2lmOiBzYXloaWdpZixcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9zYXloaS1kZXYtNWZjODUuZmlyZWJhc2VhcHAuY29tL1wiLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmFnYXNhaWppdGhpbi9zYXloaVwiLFxyXG4gICAgc3RhY2s6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJzdHlsZWQtY29tcG9uZW50c1wiLCBcImZpcmViYXNlXCJdLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiU2F5SGkgaXMgQnVpbGQgV2l0aCBSZWFjdC1SZWR1eC1maXJlYmFzZSwgRmlyZWJhc2UgUHJvdmlkaW5nIEF3ZXNvbWUgU2VydmljZXMgRm9yIEEgRGV2ZWxvcGVyIGl0IFByb3ZpZGVzIFRoZSBSZWFsdGltZSBkYXRhYmFzZSwgZmlyZXN0b3JlLCBjbG91ZCBmdW5jdGlvbnMsIERlcGxveW1lbnRzLCBUaGF0IEluc3BpcmVzIE1lIFRvIEJ1aWxkIFRoaXMgV2ViIEFwcGxpY2F0aW9uIEFsb25nIFRoZSBXYXkgSSBsZWFybiBhIGxvdCBvZiB0aGluZ3MgYWJvdXQgcmVhY3QsIHJlZHV4LCBmaXJlYmFzZSwgc3R5bGVkLWNvbXBvbmVudHMsIGFmdGVyIGNvbXBsZXRlZCB0aGlzIHByb2plY3QgdGhhdCBtb3RpdmVkIG1lIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBhd2Vzb21lIHRvb2wgICBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGhvdG9IdWJcIixcclxuICAgIGluZm86IFwiUGhvdG9IdWIsIHlvdSBjYW4gRG93bmxvYWQgTW9zdCBCZWF1dGlmdWwgSW1hZ2VzIEFuZCBjb2xsZWN0aW9ucy4uLlwiLFxyXG4gICAgaW1hZ2U6IHBob3RvaHViLFxyXG4gICAgaW1hZ2VnaWY6IHBob3RvZ2lmLFxyXG4gICAgc3RhY2s6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJzdHlsZWQtY29tcG9uZW50c1wiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vcGhvdG9cIixcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9waG90b2h1YmppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGZ1bGxjb250ZW50OlxyXG4gICAgICBcIlBob3RvIGh1YiBpcyBzZXJ2aWNlIHRvIHByb3ZpZGluZyBoaWdoLXF1YWxpdHkgaW1hZ2VzIGZvciBhIHVzZXIgY2FuIHNlZSB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGltYWdlcyBhbmQgY29sbGVjdGlvbnMgYW5kIERvd25sb2FkIGltYWdlcy4gVGhpcyBidWlsZCB3aXRoIHJlYWN0LHJlZHV4IGFuZCBzdHlsZWQtY29tcG9uZW50cyB3aXRoICd1bnNwbGFzaCcgQVBJIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNb3ZpZXNcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiTW92aWVzLCBXZSBjYW4gU2VlIERpZmZlcmVudCB0eXBlcyBvZiBtb3ZpZXMgYW5kIHRyYWlsZXJzIGFuZCBjYXN0Li4uXCIsXHJcbiAgICBpbWFnZTogbW92aWVzUG9zdGVyLFxyXG4gICAgaW1hZ2VnaWY6IG1vdmllc2dpZixcclxuICAgIHN0YWNrOiBbXCJIdG1sXCIsIFwiU2Fzc1wiLCBcImphdmFzY3JpcHRcIl0sXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYWdhc2Fpaml0aGluL21vdmllcy5uYWdhc2Fpaml0aGluXCIsXHJcbiAgICBzaXRlOiBcImh0dHBzOi8vbW92aWVzaml0aGluLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiTW92aWVzIGFwcGxpY2F0aW9uIGJ1aWxkIHdpdGggSFRNTCwgQ1NTLCBqYXZhc2NyaXB0LCBhbmQgQVBJIGZyb20gVGhlbW92aWVkYiBpdCdzIHByb3ZpZGVkIG1vdmllcyBpbmZvcm1hdGlvbiBsaWtlIGNhc3QsIHRyYWlsZXJzLCBtb3ZpZXMgcmF0aW5nIGFuZCByZWxhdGVkIG1vdmllcyBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV2VhdGhlciBBcHBcIixcclxuICAgIGluZm86IFwiV2VhdGhlciBBcHAsIFlvdSBDYW4gQ2hlY2sgVGhlIFdlYXRoZXIgQW5kIGFyb3VuZCBDaXR5IFdlYXRoZXIuLi5cIixcclxuICAgIGltYWdlOiB3ZXRoZXJhcHAsXHJcbiAgICBpbWFnZWdpZjogd2V0aGVyYXBwLFxyXG4gICAgc3RhY2s6IFtcIkh0bWxcIiwgXCJTYXNzXCIsIFwiamF2YXNjcmlwdFwiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vd2VhdGhlcm1haW4ubmFnYXNhaWppdGhpblwiLFxyXG4gICAgc2l0ZTogXCJodHRwczovL3dlYXRoZXJqaXRoaW4ubmV0bGlmeS5hcHAvXCIsXHJcbiAgICBmdWxsY29udGVudDpcclxuICAgICAgXCIgV2VhdGhlciBhcHAgYnVpbGQgd2l0aCBIdG1sLCBDU1MsIGphdmFzY3JpcHQgYW5kIE9wZW5XZWF0aGVyIEFQSSwgVGhpcyBBcHAgRGV0ZWN0cyBZb3VyIEN1cnJlbnQgTG9jYXRpb24gVGhlbiBTaG93IEFib3V0IFlvdXIgV2VhdGhlciBBbmQgSHVtaWRpdHksIFdpbmQgQW5kIGFyb3VuZCBDaXR5IFdlYXRoZXIsXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnRcIixcclxuICAgIGluZm86IFwiUmVzdGF1cmFudHMgYXBwLCBZb3UgY2FuIENoZWNrIHRoZSBIb3RlbHMgYW5kIFJldmlld3MuLi5cIixcclxuICAgIGltYWdlOiByZXN0YXJ1bnQsXHJcbiAgICBpbWFnZWdpZjogcmVzdGFydW50Z2lmLFxyXG4gICAgc3RhY2s6IFtcIkh0bWxcIiwgXCJTYXNzXCIsIFwiamF2YXNjcmlwdFwiXSxcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9yZXN0YXVyYW50c2ppdGhpbi5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZ2FzYWlqaXRoaW4vcmVzdGF1cmFudHNhcHAubmFnYXNhaWppdGhpblwiLFxyXG4gICAgZnVsbGNvbnRlbnQ6XHJcbiAgICAgIFwiUmVzdGF1cmFudCBBcHBsaWNhdGlvbiBCdWlsZCB3aXRoIEhUTUwsIENTUywgSmF2YXNjcmlwdCwgYW5kIFpvbWF0byBBUEksIFRoaXMgQXBwIERldGVjdHMgVGhlIEN1cnJlbnQgTG9jYXRpb24gQW5kIFNob3cgIEFyb3VuZCBUaGUgUmVzdGF1cmFudCdzIFJhdGluZ3MsIEltYWdlcyBBbmQgTW9yZSBcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBQcm9qZWN0V2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICB6LWluZGV4OiA1O1xyXG5gO1xyXG5jb25zdCBQb3N0ZXJXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gICYgPiBkaXYge1xyXG4gICAgJiA+IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxN3JlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAmID4gaW1nIHtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDRweCAxMHB4IHJnYigwLCAwLCAwLCA2NCUpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbnRlbnRXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gICYgPiBkaXYge1xyXG4gICAgJiA+IGgyIHtcclxuICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEJhY2tncm91bmRUZXh0ID0gc3R5bGVkLmgxYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQzJSwgLTQzJSkgcm90YXRlKDdkZWcpO1xyXG4gIGNvbG9yOiAjM2EzOTM5O1xyXG4gIGZvbnQtc2l6ZTogMjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LXNoYWRvdzogMTBweCA0cHggOXB4IHJnYigwIDAgMCAvIDU5JSk7XHJcbmA7XHJcbmNvbnN0IFN0YWNrV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDVyZW0gMDtcclxuXHJcbiAgJiA+IGgyIHtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAmID4gdWwge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAmID4gbGkge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEJ0bldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICAmID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjByZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbjtcclxuICAgIH1cclxuICAgICYgPiBwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IElkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBvbmVwcm9qZWN0ID0gcHJvamVjdGRhdGEuZmlsdGVyKChkYXRhLCBpKSA9PiBpID09IGlkKTtcclxuICBpZiAob25lcHJvamVjdC5sZW5ndGggPj0gMSkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBpbWFnZSwgZnVsbGNvbnRlbnQsIHN0YWNrLCBzaXRlLCBjb2RlIH0gPSBvbmVwcm9qZWN0WzBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFByb2plY3RXYXBwZXI+XHJcbiAgICAgICAgICA8UG9zdGVyV2FwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ0bldhcHBlcj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtzaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxwPlZpZXcgU2l0ZTwvcD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17Y29kZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db2RlPC9wPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9CdG5XYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJQcm9qZWN0SW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUG9zdGVyV2FwcGVyPlxyXG5cclxuICAgICAgICAgIDxDb250ZW50V2FwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj57ZnVsbGNvbnRlbnR9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTdGFja1dhcHBlcj5cclxuICAgICAgICAgICAgICA8aDI+U3RhY2s8L2gyPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzdGFjay5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e2RhdGF9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvU3RhY2tXYXBwZXI+XHJcbiAgICAgICAgICA8L0NvbnRlbnRXYXBwZXI+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Qcm9qZWN0V2FwcGVyPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kVGV4dD57bmFtZX08L0JhY2tncm91bmRUZXh0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSWQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=