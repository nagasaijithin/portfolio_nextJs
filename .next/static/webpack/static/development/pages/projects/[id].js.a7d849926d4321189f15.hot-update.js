webpackHotUpdate("static\\development\\pages\\projects\\[id].js",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/posters/movieshub.png */ "./images/posters/movieshub.png");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/posters/photohub.png */ "./images/posters/photohub.png");
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/posters/restarunt.png */ "./images/posters/restarunt.png");
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/posters/sayhi.png */ "./images/posters/sayhi.png");
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/posters/weatherapp.png */ "./images/posters/weatherapp.png");
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/gifs/movies.gif */ "./images/gifs/movies.gif");
/* harmony import */ var _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/gifs/photo.gif */ "./images/gifs/photo.gif");
/* harmony import */ var _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/gifs/restarunt.gif */ "./images/gifs/restarunt.gif");
/* harmony import */ var _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/gifs/sayhi.gif */ "./images/gifs/sayhi.gif");
/* harmony import */ var _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_10__);
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var projectdata = [{
  name: "SayHI",
  info: "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
  image: _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  imagegif: _images_gifs_sayhi_gif__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  name: "PhotoHub",
  info: "PhotoHub, you can Download Most Beautiful Images And collections...",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  imagegif: _images_gifs_photo_gif__WEBPACK_IMPORTED_MODULE_8___default.a
}, {
  name: "Movies",
  info: "Movies, We can See Different types of movies and trailers and cast...",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  imagegif: _images_gifs_movies_gif__WEBPACK_IMPORTED_MODULE_7___default.a
}, {
  name: "Weather App",
  info: "Weather App, You Can Check The Weather And around City Weather...",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  imagegif: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  name: "Restaurant",
  info: "Restaurants app, You can Check the Hotels and Reviews...",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  imagegif: _images_gifs_restarunt_gif__WEBPACK_IMPORTED_MODULE_9___default.a
}];

var Id = function Id() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var oneproject = projectdata.filter(function (data, i) {
    return i == id;
  });
  console.log(oneproject);
  var _oneproject$ = oneproject[0],
      name = _oneproject$.name,
      info = _oneproject$.info,
      image = _oneproject$.image,
      imagegif = _oneproject$.imagegif;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

_s(Id, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Id;
/* harmony default export */ __webpack_exports__["default"] = (Id);

var _c;

$RefreshReg$(_c, "Id");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanMiXSwibmFtZXMiOlsicHJvamVjdGRhdGEiLCJuYW1lIiwiaW5mbyIsImltYWdlIiwic2F5aGkiLCJpbWFnZWdpZiIsInNheWhpZ2lmIiwicGhvdG9odWIiLCJwaG90b2dpZiIsIm1vdmllc1Bvc3RlciIsIm1vdmllc2dpZiIsIndldGhlcmFwcCIsInJlc3RhcnVudCIsInJlc3RhcnVudGdpZiIsIklkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIm9uZXByb2plY3QiLCJmaWx0ZXIiLCJkYXRhIiwiaSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUNFQyxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQ0YsMkZBSEo7QUFJRUMsT0FBSyxFQUFFQyxnRUFKVDtBQUtFQyxVQUFRLEVBQUVDLDhEQUFRQTtBQUxwQixDQURrQixFQVFsQjtBQUNFTCxNQUFJLEVBQUUsVUFEUjtBQUVFQyxNQUFJLEVBQUUscUVBRlI7QUFHRUMsT0FBSyxFQUFFSSxtRUFIVDtBQUlFRixVQUFRLEVBQUVHLDZEQUFRQTtBQUpwQixDQVJrQixFQWNsQjtBQUNFUCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQ0YsdUVBSEo7QUFJRUMsT0FBSyxFQUFFTSxvRUFKVDtBQUtFSixVQUFRLEVBQUVLLDhEQUFTQTtBQUxyQixDQWRrQixFQXFCbEI7QUFDRVQsTUFBSSxFQUFFLGFBRFI7QUFFRUMsTUFBSSxFQUFFLG1FQUZSO0FBR0VDLE9BQUssRUFBRVEscUVBSFQ7QUFJRU4sVUFBUSxFQUFFTSxxRUFBU0E7QUFKckIsQ0FyQmtCLEVBMkJsQjtBQUNFVixNQUFJLEVBQUUsWUFEUjtBQUVFQyxNQUFJLEVBQUUsMERBRlI7QUFHRUMsT0FBSyxFQUFFUyxvRUFIVDtBQUlFUCxVQUFRLEVBQUVRLGlFQUFZQTtBQUp4QixDQTNCa0IsQ0FBcEI7O0FBa0NBLElBQU1DLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFBQTs7QUFDZixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGUsTUFFUEMsRUFGTyxHQUVBRixNQUFNLENBQUNHLEtBRlAsQ0FFUEQsRUFGTztBQUdmLE1BQU1FLFVBQVUsR0FBR25CLFdBQVcsQ0FBQ29CLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FBYUEsQ0FBQyxJQUFJTCxFQUFsQjtBQUFBLEdBQW5CLENBQW5CO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxVQUFaO0FBSmUscUJBS3lCQSxVQUFVLENBQUMsQ0FBRCxDQUxuQztBQUFBLE1BS1BsQixJQUxPLGdCQUtQQSxJQUxPO0FBQUEsTUFLREMsSUFMQyxnQkFLREEsSUFMQztBQUFBLE1BS0tDLEtBTEwsZ0JBS0tBLEtBTEw7QUFBQSxNQUtZRSxRQUxaLGdCQUtZQSxRQUxaO0FBTWYsU0FBTyxrRUFBUDtBQUNELENBUEQ7O0dBQU1TLEU7VUFDV0UscUQ7OztLQURYRixFO0FBUVNBLGlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0c1xcW2lkXS5qcy5hN2Q4NDk5MjZkNDMyMTE4OWYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBtb3ZpZXNQb3N0ZXIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL21vdmllc2h1Yi5wbmdcIjtcclxuaW1wb3J0IHBob3RvaHViIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9waG90b2h1Yi5wbmdcIjtcclxuaW1wb3J0IHJlc3RhcnVudCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvcmVzdGFydW50LnBuZ1wiO1xyXG5pbXBvcnQgc2F5aGkgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3NheWhpLnBuZ1wiO1xyXG5pbXBvcnQgd2V0aGVyYXBwIGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy93ZWF0aGVyYXBwLnBuZ1wiO1xyXG5cclxuaW1wb3J0IG1vdmllc2dpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvbW92aWVzLmdpZlwiO1xyXG5pbXBvcnQgcGhvdG9naWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3Bob3RvLmdpZlwiO1xyXG5pbXBvcnQgcmVzdGFydW50Z2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9yZXN0YXJ1bnQuZ2lmXCI7XHJcbmltcG9ydCBzYXloaWdpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvc2F5aGkuZ2lmXCI7XHJcbmNvbnN0IHByb2plY3RkYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiU2F5SElcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiU2F5SGksIGl0J3MgbGlrZSBhIFNvY2lhbCBNZWRpYSBQbGF0Zm9ybSBUaGF0IFBlcmZvcm1zIGFkZGluZyBQb3N0IGFuZCBTZW5kaW5nIE1lc3NhZ2VzLi5cIixcclxuICAgIGltYWdlOiBzYXloaSxcclxuICAgIGltYWdlZ2lmOiBzYXloaWdpZixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGhvdG9IdWJcIixcclxuICAgIGluZm86IFwiUGhvdG9IdWIsIHlvdSBjYW4gRG93bmxvYWQgTW9zdCBCZWF1dGlmdWwgSW1hZ2VzIEFuZCBjb2xsZWN0aW9ucy4uLlwiLFxyXG4gICAgaW1hZ2U6IHBob3RvaHViLFxyXG4gICAgaW1hZ2VnaWY6IHBob3RvZ2lmLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNb3ZpZXNcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiTW92aWVzLCBXZSBjYW4gU2VlIERpZmZlcmVudCB0eXBlcyBvZiBtb3ZpZXMgYW5kIHRyYWlsZXJzIGFuZCBjYXN0Li4uXCIsXHJcbiAgICBpbWFnZTogbW92aWVzUG9zdGVyLFxyXG4gICAgaW1hZ2VnaWY6IG1vdmllc2dpZixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV2VhdGhlciBBcHBcIixcclxuICAgIGluZm86IFwiV2VhdGhlciBBcHAsIFlvdSBDYW4gQ2hlY2sgVGhlIFdlYXRoZXIgQW5kIGFyb3VuZCBDaXR5IFdlYXRoZXIuLi5cIixcclxuICAgIGltYWdlOiB3ZXRoZXJhcHAsXHJcbiAgICBpbWFnZWdpZjogd2V0aGVyYXBwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZXN0YXVyYW50XCIsXHJcbiAgICBpbmZvOiBcIlJlc3RhdXJhbnRzIGFwcCwgWW91IGNhbiBDaGVjayB0aGUgSG90ZWxzIGFuZCBSZXZpZXdzLi4uXCIsXHJcbiAgICBpbWFnZTogcmVzdGFydW50LFxyXG4gICAgaW1hZ2VnaWY6IHJlc3RhcnVudGdpZixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBJZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgb25lcHJvamVjdCA9IHByb2plY3RkYXRhLmZpbHRlcigoZGF0YSwgaSkgPT4gaSA9PSBpZCk7XHJcbiAgY29uc29sZS5sb2cob25lcHJvamVjdCk7XHJcbiAgY29uc3QgeyBuYW1lLCBpbmZvLCBpbWFnZSwgaW1hZ2VnaWYgfSA9IG9uZXByb2plY3RbMF07XHJcbiAgcmV0dXJuIDw+PC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==