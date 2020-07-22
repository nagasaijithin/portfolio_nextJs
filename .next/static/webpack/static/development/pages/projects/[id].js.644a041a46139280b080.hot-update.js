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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\pages\\projects\\[id].js",
    _s = $RefreshSig$();


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
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, name)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: image,
    alt: "ProjectImage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanMiXSwibmFtZXMiOlsicHJvamVjdGRhdGEiLCJuYW1lIiwiaW5mbyIsImltYWdlIiwic2F5aGkiLCJpbWFnZWdpZiIsInNheWhpZ2lmIiwicGhvdG9odWIiLCJwaG90b2dpZiIsIm1vdmllc1Bvc3RlciIsIm1vdmllc2dpZiIsIndldGhlcmFwcCIsInJlc3RhcnVudCIsInJlc3RhcnVudGdpZiIsIklkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIm9uZXByb2plY3QiLCJmaWx0ZXIiLCJkYXRhIiwiaSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSxPQURSO0FBRUVDLE1BQUksRUFDRiwyRkFISjtBQUlFQyxPQUFLLEVBQUVDLGdFQUpUO0FBS0VDLFVBQVEsRUFBRUMsOERBQVFBO0FBTHBCLENBRGtCLEVBUWxCO0FBQ0VMLE1BQUksRUFBRSxVQURSO0FBRUVDLE1BQUksRUFBRSxxRUFGUjtBQUdFQyxPQUFLLEVBQUVJLG1FQUhUO0FBSUVGLFVBQVEsRUFBRUcsNkRBQVFBO0FBSnBCLENBUmtCLEVBY2xCO0FBQ0VQLE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFDRix1RUFISjtBQUlFQyxPQUFLLEVBQUVNLG9FQUpUO0FBS0VKLFVBQVEsRUFBRUssOERBQVNBO0FBTHJCLENBZGtCLEVBcUJsQjtBQUNFVCxNQUFJLEVBQUUsYUFEUjtBQUVFQyxNQUFJLEVBQUUsbUVBRlI7QUFHRUMsT0FBSyxFQUFFUSxxRUFIVDtBQUlFTixVQUFRLEVBQUVNLHFFQUFTQTtBQUpyQixDQXJCa0IsRUEyQmxCO0FBQ0VWLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSwwREFGUjtBQUdFQyxPQUFLLEVBQUVTLG9FQUhUO0FBSUVQLFVBQVEsRUFBRVEsaUVBQVlBO0FBSnhCLENBM0JrQixDQUFwQjs7QUFrQ0EsSUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBTTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEZSxNQUVQQyxFQUZPLEdBRUFGLE1BQU0sQ0FBQ0csS0FGUCxDQUVQRCxFQUZPO0FBR2YsTUFBTUUsVUFBVSxHQUFHbkIsV0FBVyxDQUFDb0IsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUFhQSxDQUFDLElBQUlMLEVBQWxCO0FBQUEsR0FBbkIsQ0FBbkI7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlMLFVBQVo7QUFKZSxxQkFLeUJBLFVBQVUsQ0FBQyxDQUFELENBTG5DO0FBQUEsTUFLUGxCLElBTE8sZ0JBS1BBLElBTE87QUFBQSxNQUtEQyxJQUxDLGdCQUtEQSxJQUxDO0FBQUEsTUFLS0MsS0FMTCxnQkFLS0EsS0FMTDtBQUFBLE1BS1lFLFFBTFosZ0JBS1lBLFFBTFo7QUFNZixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixJQUFMLENBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUUsS0FBVjtBQUFpQixPQUFHLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERjtBQVVELENBaEJEOztHQUFNVyxFO1VBQ1dFLHFEOzs7S0FEWEYsRTtBQWlCU0EsaUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzXFxbaWRdLmpzLjY0NGEwNDFhNDYxMzkyODBiMDgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IG1vdmllc1Bvc3RlciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9odWIgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3Bob3RvaHViLnBuZ1wiO1xyXG5pbXBvcnQgcmVzdGFydW50IGZyb20gXCIuLi8uLi9pbWFnZXMvcG9zdGVycy9yZXN0YXJ1bnQucG5nXCI7XHJcbmltcG9ydCBzYXloaSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nXCI7XHJcbmltcG9ydCB3ZXRoZXJhcHAgZnJvbSBcIi4uLy4uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nXCI7XHJcblxyXG5pbXBvcnQgbW92aWVzZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9tb3ZpZXMuZ2lmXCI7XHJcbmltcG9ydCBwaG90b2dpZiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dpZnMvcGhvdG8uZ2lmXCI7XHJcbmltcG9ydCByZXN0YXJ1bnRnaWYgZnJvbSBcIi4uLy4uL2ltYWdlcy9naWZzL3Jlc3RhcnVudC5naWZcIjtcclxuaW1wb3J0IHNheWhpZ2lmIGZyb20gXCIuLi8uLi9pbWFnZXMvZ2lmcy9zYXloaS5naWZcIjtcclxuY29uc3QgcHJvamVjdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYXlISVwiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJTYXlIaSwgaXQncyBsaWtlIGEgU29jaWFsIE1lZGlhIFBsYXRmb3JtIFRoYXQgUGVyZm9ybXMgYWRkaW5nIFBvc3QgYW5kIFNlbmRpbmcgTWVzc2FnZXMuLlwiLFxyXG4gICAgaW1hZ2U6IHNheWhpLFxyXG4gICAgaW1hZ2VnaWY6IHNheWhpZ2lmLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzogXCJQaG90b0h1YiwgeW91IGNhbiBEb3dubG9hZCBNb3N0IEJlYXV0aWZ1bCBJbWFnZXMgQW5kIGNvbGxlY3Rpb25zLi4uXCIsXHJcbiAgICBpbWFnZTogcGhvdG9odWIsXHJcbiAgICBpbWFnZWdpZjogcGhvdG9naWYsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vdmllc1wiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJNb3ZpZXMsIFdlIGNhbiBTZWUgRGlmZmVyZW50IHR5cGVzIG9mIG1vdmllcyBhbmQgdHJhaWxlcnMgYW5kIGNhc3QuLi5cIixcclxuICAgIGltYWdlOiBtb3ZpZXNQb3N0ZXIsXHJcbiAgICBpbWFnZWdpZjogbW92aWVzZ2lmLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgaW5mbzogXCJXZWF0aGVyIEFwcCwgWW91IENhbiBDaGVjayBUaGUgV2VhdGhlciBBbmQgYXJvdW5kIENpdHkgV2VhdGhlci4uLlwiLFxyXG4gICAgaW1hZ2U6IHdldGhlcmFwcCxcclxuICAgIGltYWdlZ2lmOiB3ZXRoZXJhcHAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnRcIixcclxuICAgIGluZm86IFwiUmVzdGF1cmFudHMgYXBwLCBZb3UgY2FuIENoZWNrIHRoZSBIb3RlbHMgYW5kIFJldmlld3MuLi5cIixcclxuICAgIGltYWdlOiByZXN0YXJ1bnQsXHJcbiAgICBpbWFnZWdpZjogcmVzdGFydW50Z2lmLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IElkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBvbmVwcm9qZWN0ID0gcHJvamVjdGRhdGEuZmlsdGVyKChkYXRhLCBpKSA9PiBpID09IGlkKTtcclxuICBjb25zb2xlLmxvZyhvbmVwcm9qZWN0KTtcclxuICBjb25zdCB7IG5hbWUsIGluZm8sIGltYWdlLCBpbWFnZWdpZiB9ID0gb25lcHJvamVjdFswXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJQcm9qZWN0SW1hZ2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IElkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9