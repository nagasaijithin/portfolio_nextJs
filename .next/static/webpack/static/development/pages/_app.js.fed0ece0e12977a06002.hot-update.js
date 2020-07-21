webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MainLogo = function MainLogo(props) {
  return __jsx("svg", props, __jsx("g", {
    fill: "#FFF"
  }, __jsx("path", {
    d: "M0 83.015V0h24.026l5.469 9.571c25.783 44.73 41.117 71.393 63.19 109.385 14.063 24.319 25.783 44.828 26.173 45.61.391 1.269-1.269 1.465-11.036 1.465H96.2l-4.395-7.716c-2.442-4.2-19.338-33.597-37.6-65.338L20.997 35.355l-.293 65.338-.195 65.338H0V83.015zM172.672 102.353c-.293-63.287-.293-63.775-2.442-67.682-4.688-8.79-13.478-14.064-23.146-14.161-7.911 0-12.6 1.66-17.775 6.153-5.08 4.492-8.01 9.668-8.888 15.821l-.586 4.395H99.618v-3.223c0-4.785 2.637-14.063 5.665-19.63 4.2-7.911 12.599-15.724 21.389-19.924 7.52-3.614 7.715-3.614 19.826-3.614 12.11 0 12.305 0 19.923 3.712 13.283 6.25 22.952 18.556 25.881 32.717.684 3.419 1.075 25.686 1.075 67.096v62.017h-20.412l-.293-63.677z"
  }), __jsx("path", {
    d: "M109.678 107.725l-10.06-17.19V68.367h20.51v28.322c0 15.627-.098 28.323-.195 28.323-.196 0-4.786-7.813-10.255-17.286z"
  })));
};

_c4 = MainLogo;
MainLogo.defaultProps = {
  width: "194",
  height: "167",
  viewBox: "0 0 194 167",
  xmlns: "http://www.w3.org/2000/svg"
};
var MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "layout__MainLayout",
  componentId: "ju091f-0"
})(["display:flex;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.blackBackground;
});
_c = MainLayout;
var NavWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "layout__NavWapper",
  componentId: "ju091f-1"
})(["flex-basis:20%;height:100vh;color:", ";& > ul{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;list-style:none;font-size:2.5rem;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.textColor;
});
_c2 = NavWapper;

var LayOut = function LayOut(_ref3) {
  var children = _ref3.children;
  return __jsx(MainLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(NavWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(MainLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Home"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "About me"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Contact me"))), children);
};

_c3 = LayOut;
/* harmony default export */ __webpack_exports__["default"] = (LayOut);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "MainLayout");
$RefreshReg$(_c2, "NavWapper");
$RefreshReg$(_c3, "LayOut");
$RefreshReg$(_c4, "MainLogo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJNYWluTG9nbyIsIk1haW5MYXlvdXQiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrQmFja2dyb3VuZCIsIk5hdldhcHBlciIsInRleHRDb2xvciIsIkxheU91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ09BLFEsWUFBQUEsUTs7Ozs7Ozs7OztNQUFBQSxRO0FBQUFBLFE7Ozs7OztBQUNQLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FFTTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxlQUE1QjtBQUFBLENBRk4sQ0FBaEI7S0FBTUwsVTtBQUlOLElBQU1NLFNBQVMsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3TEFHSjtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxTQUE1QjtBQUFBLENBSEksQ0FBZjtNQUFNRCxTOztBQWNOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFFBQWtCO0FBQUEsTUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQy9CLFNBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsQ0FERixDQURGLEVBV0dBLFFBWEgsQ0FERjtBQWVELENBaEJEOztNQUFNRCxNO0FBa0JTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5mZWQwZWNlMGUxMjk3N2EwNjAwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE1haW5Mb2dvIGZyb20gXCIuLi9pbWFnZXMvd2hpdGVsb2dvLnN2Z1wiO1xyXG5jb25zdCBNYWluTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrQmFja2dyb3VuZH07XHJcbmA7XHJcbmNvbnN0IE5hdldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XHJcbiAgJiA+IHVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGF5T3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgPE5hdldhcHBlcj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxNYWluTG9nbyAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICAgIDxsaT5BYm91dCBtZTwvbGk+XHJcbiAgICAgICAgICA8bGk+Q29udGFjdCBtZTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9OYXZXYXBwZXI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5T3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9