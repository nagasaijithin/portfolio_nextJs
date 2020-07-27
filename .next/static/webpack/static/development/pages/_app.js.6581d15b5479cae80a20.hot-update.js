webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");







var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n*{\n    padding: 0;\n    margin:0;\n    box-sizing: border-box;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-size: 52.6%;\n    scroll-behavior: smooth;\n    --blackBackgroundColor: ", ";\n  --blackTextColor:", "   ;\n  @media ", " {\n    font-size: 43.6%;\n\n  }\n  @media ", " {\n    font-size: 38.6%;\n\n  }\n}\n\nhtml[data-mode=\"dark\"] {\n  --blackBackgroundColor: ", ";\n  --blackTextColor: ", ";\n} \n\n body {\n    font-family: 'Raleway', sans-serif;\n }\n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var theme = {
  colors: {
    blackBackground: "#3A3939",
    blacktextColor: "#ffffff"
  },
  mediaqury: {
    laptopLarg: "(max-width: 844px)",
    laptopMid: "(max-width: 734px)",
    projectMid: "(max-width: 647px)",
    projectMid2: "(max-width: 593px)",
    projectMid3: "(max-width: 483px)",
    tabLarg: "(max-width: 420px)",
    mblMid: "(max-width: 315px)",
    mblsmall: "(max-width:265px)"
  }
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["createGlobalStyle"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.blacktextColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.blackBackground;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaqury.laptopLarg;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaqury.tabLarg;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.blackBackground;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.blacktextColor;
});
_c = GlobalStyle;

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var localState = localStorage.getItem("_theme");

      if (localState) {
        document.documentElement.setAttribute("data-mode", JSON.parse(localState));
      } else {
        localStorage.setItem("_theme", JSON.stringify("light"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }
      }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      })), __jsx(GlobalStyle, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



var _c;

$RefreshReg$(_c, "GlobalStyle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwiYmxhY2tCYWNrZ3JvdW5kIiwiYmxhY2t0ZXh0Q29sb3IiLCJtZWRpYXF1cnkiLCJsYXB0b3BMYXJnIiwibGFwdG9wTWlkIiwicHJvamVjdE1pZCIsInByb2plY3RNaWQyIiwicHJvamVjdE1pZDMiLCJ0YWJMYXJnIiwibWJsTWlkIiwibWJsc21hbGwiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiTXlBcHAiLCJsb2NhbFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFFBQU0sRUFBRTtBQUNOQyxtQkFBZSxFQUFFLFNBRFg7QUFFTkMsa0JBQWMsRUFBRTtBQUZWLEdBREk7QUFLWkMsV0FBUyxFQUFFO0FBQ1RDLGNBQVUsRUFBRSxvQkFESDtBQUVUQyxhQUFTLEVBQUUsb0JBRkY7QUFHVEMsY0FBVSxFQUFFLG9CQUhIO0FBSVRDLGVBQVcsRUFBRSxvQkFKSjtBQUtUQyxlQUFXLEVBQUUsb0JBTEo7QUFNVEMsV0FBTyxFQUFFLG9CQU5BO0FBT1RDLFVBQU0sRUFBRSxvQkFQQztBQVFUQyxZQUFRLEVBQUU7QUFSRDtBQUxDLENBQWQ7QUFnQkEsSUFBTUMsV0FBVyxHQUFHQywyRUFBSCxvQkFXYTtBQUFBLE1BQUdkLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxjQUE1QjtBQUFBLENBWGIsRUFZSTtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxlQUE1QjtBQUFBLENBWkosRUFhTjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsVUFBL0I7QUFBQSxDQWJNLEVBaUJOO0FBQUEsTUFBR0wsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxTQUFOLENBQWdCTSxPQUEvQjtBQUFBLENBakJNLEVBd0JXO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLGVBQTVCO0FBQUEsQ0F4QlgsRUF5Qks7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsY0FBNUI7QUFBQSxDQXpCTCxDQUFqQjtLQUFNVSxXOztJQWdDZUUsSzs7Ozs7Ozs7Ozs7Ozt3Q0FDQztBQUNsQixVQUFJQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFqQjs7QUFDQSxVQUFJRixVQUFKLEVBQWdCO0FBQ2RHLGdCQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXpCLENBQ0UsV0FERixFQUVFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsVUFBWCxDQUZGO0FBSUQsT0FMRCxNQUtPO0FBQ0xDLG9CQUFZLENBQUNPLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JGLElBQUksQ0FBQ0csU0FBTCxDQUFlLE9BQWYsQ0FBL0I7QUFDRDtBQUNGOzs7NkJBQ1E7QUFBQSx3QkFDMEIsS0FBS0MsS0FEL0I7QUFBQSxVQUNDQyxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxTQURaLGVBQ1lBLFNBRFo7QUFFUCxhQUNFLE1BQUMsK0RBQUQ7QUFBZSxhQUFLLEVBQUU1QixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxTQUFELHlGQUFlNEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsQ0FERjtBQVFEOzs7O0VBdEJnQ0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNjU4MWQxNWI1NDc5Y2FlODBhMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBMYXlPdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYmxhY2tCYWNrZ3JvdW5kOiBcIiMzQTM5MzlcIixcclxuICAgIGJsYWNrdGV4dENvbG9yOiBcIiNmZmZmZmZcIixcclxuICB9LFxyXG4gIG1lZGlhcXVyeToge1xyXG4gICAgbGFwdG9wTGFyZzogXCIobWF4LXdpZHRoOiA4NDRweClcIixcclxuICAgIGxhcHRvcE1pZDogXCIobWF4LXdpZHRoOiA3MzRweClcIixcclxuICAgIHByb2plY3RNaWQ6IFwiKG1heC13aWR0aDogNjQ3cHgpXCIsXHJcbiAgICBwcm9qZWN0TWlkMjogXCIobWF4LXdpZHRoOiA1OTNweClcIixcclxuICAgIHByb2plY3RNaWQzOiBcIihtYXgtd2lkdGg6IDQ4M3B4KVwiLFxyXG4gICAgdGFiTGFyZzogXCIobWF4LXdpZHRoOiA0MjBweClcIixcclxuICAgIG1ibE1pZDogXCIobWF4LXdpZHRoOiAzMTVweClcIixcclxuICAgIG1ibHNtYWxsOiBcIihtYXgtd2lkdGg6MjY1cHgpXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogNTIuNiU7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIC0tYmxhY2tCYWNrZ3JvdW5kQ29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrdGV4dENvbG9yfTtcclxuICAtLWJsYWNrVGV4dENvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrQmFja2dyb3VuZH0gICA7XHJcbiAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LmxhcHRvcExhcmd9IHtcclxuICAgIGZvbnQtc2l6ZTogNDMuNiU7XHJcblxyXG4gIH1cclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkudGFiTGFyZ30ge1xyXG4gICAgZm9udC1zaXplOiAzOC42JTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5odG1sW2RhdGEtbW9kZT1cImRhcmtcIl0ge1xyXG4gIC0tYmxhY2tCYWNrZ3JvdW5kQ29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJsYWNrQmFja2dyb3VuZH07XHJcbiAgLS1ibGFja1RleHRDb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmxhY2t0ZXh0Q29sb3J9O1xyXG59IFxyXG5cclxuIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuIH1cclxuIGA7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBsb2NhbFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdGhlbWVcIik7XHJcbiAgICBpZiAobG9jYWxTdGF0ZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiZGF0YS1tb2RlXCIsXHJcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0YXRlKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdGhlbWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJsaWdodFwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxMYXlPdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8L0xheU91dD5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==