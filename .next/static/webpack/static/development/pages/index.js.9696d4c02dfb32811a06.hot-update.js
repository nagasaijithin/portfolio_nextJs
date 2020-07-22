webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/allproject.js":
/*!**********************************!*\
  !*** ./components/allproject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/posters/movieshub.png */ "./images/posters/movieshub.png");
/* harmony import */ var _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/posters/photohub.png */ "./images/posters/photohub.png");
/* harmony import */ var _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/posters/restarunt.png */ "./images/posters/restarunt.png");
/* harmony import */ var _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/posters/sayhi.png */ "./images/posters/sayhi.png");
/* harmony import */ var _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/posters/weatherapp.png */ "./images/posters/weatherapp.png");
/* harmony import */ var _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\components\\allproject.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var AllprojectsWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "allproject__AllprojectsWapper",
  componentId: "sc-10tffvr-0"
})(["width:100%;display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));padding:2rem;grid-gap:3rem;& > div > div{width:80%;margin:0 auto;& > h1,h2,a{margin:1rem 0;}}"]);
_c = AllprojectsWapper;
var Cardimg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "allproject__Cardimg",
  componentId: "sc-10tffvr-1"
})(["height:30rem;background-color:red;background-image:url(", ");"], function (_ref) {
  var image = _ref.image;
  return image;
});
_c2 = Cardimg;
var projectdata = [{
  name: "SayHI",
  info: "claims must be compatible with The Misconception of Deliberate Position",
  image: _images_posters_sayhi_png__WEBPACK_IMPORTED_MODULE_5___default.a
}, {
  name: "PhotoHub",
  info: "claims must be compatible with The Misconception of Deliberate Position",
  image: _images_posters_photohub_png__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  name: "Movies",
  info: "claims must be compatible with The Misconception of Deliberate Position",
  image: _images_posters_movieshub_png__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  name: "Weather App",
  info: "claims must be compatible with The Misconception of Deliberate Position",
  image: _images_posters_weatherapp_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  name: "Restaurant",
  info: "claims must be compatible with The Misconception of Deliberate Position",
  image: _images_posters_restarunt_png__WEBPACK_IMPORTED_MODULE_4___default.a
}];

var Allprojects = function Allprojects() {
  return __jsx(AllprojectsWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, projectdata.map(function (_ref2, i) {
    var info = _ref2.info,
        name = _ref2.name,
        image = _ref2.image;
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, __jsx(Cardimg, {
      image: image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, info)));
  }));
};

_c3 = Allprojects;
/* harmony default export */ __webpack_exports__["default"] = (Allprojects);

var _c, _c2, _c3;

$RefreshReg$(_c, "AllprojectsWapper");
$RefreshReg$(_c2, "Cardimg");
$RefreshReg$(_c3, "Allprojects");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsbHByb2plY3QuanMiXSwibmFtZXMiOlsiQWxscHJvamVjdHNXYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDYXJkaW1nIiwiaW1hZ2UiLCJwcm9qZWN0ZGF0YSIsIm5hbWUiLCJpbmZvIiwic2F5aGkiLCJwaG90b2h1YiIsIm1vdmllc1Bvc3RlciIsIndldGhlcmFwcCIsInJlc3RhcnVudCIsIkFsbHByb2plY3RzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxpQkFBaUIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrS0FBdkI7S0FBTUYsaUI7QUFnQk4sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUdhO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBSGIsQ0FBYjtNQUFNRCxPO0FBS04sSUFBTUUsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE1BQUksRUFBRSxPQURSO0FBRUVDLE1BQUksRUFDRix5RUFISjtBQUlFSCxPQUFLLEVBQUVJLGdFQUFLQTtBQUpkLENBRGtCLEVBT2xCO0FBQ0VGLE1BQUksRUFBRSxVQURSO0FBRUVDLE1BQUksRUFDRix5RUFISjtBQUlFSCxPQUFLLEVBQUVLLG1FQUFRQTtBQUpqQixDQVBrQixFQWFsQjtBQUNFSCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFJLEVBQ0YseUVBSEo7QUFJRUgsT0FBSyxFQUFFTSxvRUFBWUE7QUFKckIsQ0Fia0IsRUFtQmxCO0FBQ0VKLE1BQUksRUFBRSxhQURSO0FBRUVDLE1BQUksRUFDRix5RUFISjtBQUlFSCxPQUFLLEVBQUVPLHFFQUFTQTtBQUpsQixDQW5Ca0IsRUF5QmxCO0FBQ0VMLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFDRix5RUFISjtBQUlFSCxPQUFLLEVBQUVRLG9FQUFTQTtBQUpsQixDQXpCa0IsQ0FBcEI7O0FBZ0NBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsU0FDRSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsV0FBVyxDQUFDUyxHQUFaLENBQWdCLGlCQUF3QkMsQ0FBeEI7QUFBQSxRQUFHUixJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTRCxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlRixLQUFmLFNBQWVBLEtBQWY7QUFBQSxXQUNmO0FBQUssU0FBRyxFQUFFVyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFFWCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtFLElBQUwsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUMsSUFBSixDQUhGLENBREYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FERjtBQWFELENBZEQ7O01BQU1NLFc7QUFnQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45Njk2ZDRjMDJkZmIzMjgxMWEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IG1vdmllc1Bvc3RlciBmcm9tIFwiLi4vaW1hZ2VzL3Bvc3RlcnMvbW92aWVzaHViLnBuZ1wiO1xyXG5pbXBvcnQgcGhvdG9odWIgZnJvbSBcIi4uL2ltYWdlcy9wb3N0ZXJzL3Bob3RvaHViLnBuZ1wiO1xyXG5pbXBvcnQgcmVzdGFydW50IGZyb20gXCIuLi9pbWFnZXMvcG9zdGVycy9yZXN0YXJ1bnQucG5nXCI7XHJcbmltcG9ydCBzYXloaSBmcm9tIFwiLi4vaW1hZ2VzL3Bvc3RlcnMvc2F5aGkucG5nXCI7XHJcbmltcG9ydCB3ZXRoZXJhcHAgZnJvbSBcIi4uL2ltYWdlcy9wb3N0ZXJzL3dlYXRoZXJhcHAucG5nXCI7XHJcbmNvbnN0IEFsbHByb2plY3RzV2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBncmlkLWdhcDogM3JlbTtcclxuICAmID4gZGl2ID4gZGl2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICYgPiBoMSxcclxuICAgIGgyLFxyXG4gICAgYSB7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgQ2FyZGltZyA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAzMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHsgaW1hZ2UgfSkgPT4gaW1hZ2V9KTtcclxuYDtcclxuY29uc3QgcHJvamVjdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYXlISVwiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJjbGFpbXMgbXVzdCBiZSBjb21wYXRpYmxlIHdpdGggVGhlIE1pc2NvbmNlcHRpb24gb2YgRGVsaWJlcmF0ZSBQb3NpdGlvblwiLFxyXG4gICAgaW1hZ2U6IHNheWhpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQaG90b0h1YlwiLFxyXG4gICAgaW5mbzpcclxuICAgICAgXCJjbGFpbXMgbXVzdCBiZSBjb21wYXRpYmxlIHdpdGggVGhlIE1pc2NvbmNlcHRpb24gb2YgRGVsaWJlcmF0ZSBQb3NpdGlvblwiLFxyXG4gICAgaW1hZ2U6IHBob3RvaHViLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNb3ZpZXNcIixcclxuICAgIGluZm86XHJcbiAgICAgIFwiY2xhaW1zIG11c3QgYmUgY29tcGF0aWJsZSB3aXRoIFRoZSBNaXNjb25jZXB0aW9uIG9mIERlbGliZXJhdGUgUG9zaXRpb25cIixcclxuICAgIGltYWdlOiBtb3ZpZXNQb3N0ZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcImNsYWltcyBtdXN0IGJlIGNvbXBhdGlibGUgd2l0aCBUaGUgTWlzY29uY2VwdGlvbiBvZiBEZWxpYmVyYXRlIFBvc2l0aW9uXCIsXHJcbiAgICBpbWFnZTogd2V0aGVyYXBwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZXN0YXVyYW50XCIsXHJcbiAgICBpbmZvOlxyXG4gICAgICBcImNsYWltcyBtdXN0IGJlIGNvbXBhdGlibGUgd2l0aCBUaGUgTWlzY29uY2VwdGlvbiBvZiBEZWxpYmVyYXRlIFBvc2l0aW9uXCIsXHJcbiAgICBpbWFnZTogcmVzdGFydW50LFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IEFsbHByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxscHJvamVjdHNXYXBwZXI+XHJcbiAgICAgIHtwcm9qZWN0ZGF0YS5tYXAoKHsgaW5mbywgbmFtZSwgaW1hZ2UgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkaW1nIGltYWdlPXtpbWFnZX0+PC9DYXJkaW1nPlxyXG4gICAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e2luZm99PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BbGxwcm9qZWN0c1dhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxscHJvamVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=