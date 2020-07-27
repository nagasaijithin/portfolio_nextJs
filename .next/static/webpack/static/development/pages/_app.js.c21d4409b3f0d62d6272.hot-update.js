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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\portfolio\\components\\layout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MainWitchLogo = function MainWitchLogo(props) {
  return __jsx("svg", props, __jsx("g", {
    fill: "#FFF"
  }, __jsx("path", {
    d: "M0 85v85h24.6l5.6-9.8c26.4-45.8 42.1-73.1 64.7-112 14.4-24.9 26.4-45.9 26.8-46.7.4-1.3-1.3-1.5-11.3-1.5H98.5L94 7.9c-2.5 4.3-19.8 34.4-38.5 66.9l-34 59-.3-66.9L21 0H0v85zM176.8 65.2c-.3 64.8-.3 65.3-2.5 69.3-4.8 9-13.8 14.4-23.7 14.5-8.1 0-12.9-1.7-18.2-6.3-5.2-4.6-8.2-9.9-9.1-16.2l-.6-4.5H102v3.3c0 4.9 2.7 14.4 5.8 20.1 4.3 8.1 12.9 16.1 21.9 20.4 7.7 3.7 7.9 3.7 20.3 3.7s12.6 0 20.4-3.8c13.6-6.4 23.5-19 26.5-33.5.7-3.5 1.1-26.3 1.1-68.7V0h-20.9l-.3 65.2z"
  }), __jsx("path", {
    d: "M112.3 59.7L102 77.3V100h21V71c0-16-.1-29-.2-29-.2 0-4.9 8-10.5 17.7z"
  })));
};

_c8 = MainWitchLogo;
MainWitchLogo.defaultProps = {
  width: "198",
  height: "170",
  viewBox: "0 0 198 170",
  xmlns: "http://www.w3.org/2000/svg"
};


var MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "layout__MainLayout",
  componentId: "ju091f-0"
})(["display:flex;background-color:var(--blackBackgroundColor);"]);
_c = MainLayout;
var NavWapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "layout__NavWapper",
  componentId: "ju091f-1"
})(["flex-basis:20%;height:100vh;color:var(--blackTextColor);position:sticky;top:0;@media ", "{display:none;}& > ul{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;list-style:none;font-size:3rem;& > li{cursor:pointer;-webkit-text-stroke-color:var(--blackTextColor);-webkit-text-stroke-width:0.5px;-webkit-text-fill-color:transparent;position:relative;&:hover{& > div{width:100%;}}& > div{width:0%;height:0.2rem;background:var(--blackTextColor);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all 0.6s ease-in;}}& > span{position:relative;& > input{height:0;width:0;visibility:hidden;}input:checked + label{background:#76a4da;}input:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}label:active:after{width:31px;}& > label{width:8rem;height:4rem;background:gray;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);cursor:pointer;border-radius:100px;&:after{content:\"\";width:3rem;height:3rem;background:white;position:absolute;border-radius:50%;top:12%;left:6%;transition:0.3s;}}}& > li > a{color:var(--blackTextColor);text-decoration:none;}& > li > svg{width:5rem;height:auto;& > g{fill:var(--blackTextColor);}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.mediaqury.laptopMid;
});
_c2 = NavWapper;
var MlbNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "layout__MlbNav",
  componentId: "ju091f-2"
})(["height:10vh;width:100%;box-shadow:1px 1px 10px black;padding:2.2rem;position:fixed;background-color:var(--blackBackgroundColor);display:none;@media ", "{display:block;}& > div{height:100%;display:flex;align-items:center;justify-content:space-around;& > div:nth-child(2){& > svg{height:auto;width:4rem;& > g{fill:var(--blackTextColor);}}}& > div:nth-child(1){color:var(--blackTextColor);font-size:3rem;transform:rotate(90deg);}& > span{position:relative;& > input{height:0;width:0;visibility:hidden;}& > label{width:8rem;height:4rem;background:gray;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);cursor:pointer;border-radius:100px;&:after{content:\"\";width:3rem;height:3rem;background:white;position:absolute;border-radius:50%;top:12%;left:6%;transition:0.3s;}}input:checked + label{background:#76a4da;}input:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}label:active:after{width:31px;}}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaqury.laptopMid;
});
_c3 = MlbNav;

var trans = function trans() {
  document.documentElement.classList.add("transition");
  window.setTimeout(function () {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

function checkBtn(e) {// e.persist();
  // if (e.target.checked) {
  //   trans();
  //   document.documentElement.setAttribute("data-mode", "dark");
  //   localStorage.setItem("_theme", JSON.stringify("dark"));
  // } else {
  //   trans();
  //   document.documentElement.setAttribute("data-mode", "light");
  //   localStorage.setItem("_theme", JSON.stringify("light"));
  // }
}

var HomeLinks = function HomeLinks() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("home").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), "Home"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("aboutme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }), "About me"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("portfolio").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }), "Portfolio"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("contactme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }), "Contact me"), __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }));
};

_c4 = HomeLinks;

var ProjectLinks = function ProjectLinks() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, "Go Back"))), __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 5
    }
  }));
};

_c5 = ProjectLinks;

var Checkbox = function Checkbox() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = localStorage.getItem("_theme");
    setState(JSON.parse(data));
  });
  var checktheMode = state;
  return __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "checkbox",
    id: "switch",
    name: "theme",
    onChange: function onChange(e) {
      // let updateCond = checktheMode === "dark" ? "light" : "dark";
      // setState(updateCond);
      checkBtn(e);
    } // checked={checktheMode === "dark" ? true : false}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }));
};

_s(Checkbox, "Z9hTlZ+NcQz32JPuAL7cN+c9jIA=");

_c6 = Checkbox;

var LayOut = function LayOut(_ref3) {
  _s2();

  var children = _ref3.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  return __jsx(MainLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, __jsx(NavWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  })), id ? __jsx(ProjectLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  }) : __jsx(HomeLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 36
    }
  }))), __jsx(MlbNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, "|||"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  })), __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }))), children);
};

_s2(LayOut, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c7 = LayOut;
/* harmony default export */ __webpack_exports__["default"] = (LayOut);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "MainLayout");
$RefreshReg$(_c2, "NavWapper");
$RefreshReg$(_c3, "MlbNav");
$RefreshReg$(_c4, "HomeLinks");
$RefreshReg$(_c5, "ProjectLinks");
$RefreshReg$(_c6, "Checkbox");
$RefreshReg$(_c7, "LayOut");
$RefreshReg$(_c8, "MainWitchLogo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJNYWluV2l0Y2hMb2dvIiwiTWFpbkxheW91dCIsInN0eWxlZCIsImRpdiIsIk5hdldhcHBlciIsInRoZW1lIiwibWVkaWFxdXJ5IiwibGFwdG9wTWlkIiwiTWxiTmF2IiwibmF2IiwidHJhbnMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjaGVja0J0biIsImUiLCJIb21lTGlua3MiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiUHJvamVjdExpbmtzIiwiQ2hlY2tib3giLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNoZWNrdGhlTW9kZSIsIkxheU91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ09BLGEsWUFBQUEsYTs7Ozs7Ozs7OztNQUFBQSxhO0FBQUFBLGE7Ozs7OztBQUNQO0FBQ0E7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWhCO0tBQU1GLFU7QUFJTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK3NDQU1KO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxTQUEvQjtBQUFBLENBTkksQ0FBZjtNQUFNSCxTO0FBaUdOLElBQU1JLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSwrNkJBUUQ7QUFBQSxNQUFH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QUEsSUFKM0IsQ0FERixDQURGLEVBU0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQUtFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQVRGLEVBa0JHSCxRQWxCSCxDQURGO0FBc0JELENBekJEOztJQUFNRCxNO1VBQ1dHLHFEOzs7TUFEWEgsTTtBQTJCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzIxZDQ0MDliM2YwZDYyZDYyNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE1haW5XaXRjaExvZ28gZnJvbSBcIi4uL2ltYWdlcy93aGl0ZWxvZ28uc3ZnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IE1haW5MYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tCYWNrZ3JvdW5kQ29sb3IpO1xyXG5gO1xyXG5jb25zdCBOYXZXYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LmxhcHRvcE1pZH0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgJiA+IHVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICYgPiBsaSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICYgPiBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzZhNGRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWw6YWN0aXZlOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgfVxyXG4gICAgICAmID4gbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgIGxlZnQ6IDYlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBsaSA+IGEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmID4gbGkgPiBzdmcge1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAmID4gZyB7XHJcbiAgICAgICAgZmlsbDogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWxiTmF2ID0gc3R5bGVkLm5hdmBcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDIuMnJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgQG1lZGlhICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubWVkaWFxdXJ5LmxhcHRvcE1pZH0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICYgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgJiA+IHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICYgPiBnIHtcclxuICAgICAgICAgIGZpbGw6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB9XHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgbGVmdDogNiU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzZhNGRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWw6YWN0aXZlOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmxldCB0cmFucyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIik7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gIH0sIDEwMDApO1xyXG59O1xyXG5mdW5jdGlvbiBjaGVja0J0bihlKSB7XHJcbiAgLy8gZS5wZXJzaXN0KCk7XHJcbiAgLy8gaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAvLyAgIHRyYW5zKCk7XHJcbiAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwiZGFya1wiKTtcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3RoZW1lXCIsIEpTT04uc3RyaW5naWZ5KFwiZGFya1wiKSk7XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHRyYW5zKCk7XHJcbiAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwibGlnaHRcIik7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl90aGVtZVwiLCBKU09OLnN0cmluZ2lmeShcImxpZ2h0XCIpKTtcclxuICAvLyB9XHJcbn1cclxuY29uc3QgSG9tZUxpbmtzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8bGkgb25DbGljaz17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLnNjcm9sbEludG9WaWV3KCl9PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICBIb21lXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRtZVwiKS5zY3JvbGxJbnRvVmlldygpfT5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgQWJvdXQgbWVcclxuICAgIDwvbGk+XHJcbiAgICA8bGkgb25DbGljaz17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW9cIikuc2Nyb2xsSW50b1ZpZXcoKX0+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIFBvcnRmb2xpb1xyXG4gICAgPC9saT5cclxuICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RtZVwiKS5zY3JvbGxJbnRvVmlldygpfT5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgQ29udGFjdCBtZVxyXG4gICAgPC9saT5cclxuICAgIDxDaGVja2JveCAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuY29uc3QgUHJvamVjdExpbmtzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+R28gQmFjazwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICAgIDxDaGVja2JveCAvPlxyXG4gIDwvPlxyXG4pO1xyXG5jb25zdCBDaGVja2JveCA9ICgpID0+IHtcclxuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl90aGVtZVwiKTtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gIH0pO1xyXG4gIGxldCBjaGVja3RoZU1vZGUgPSBzdGF0ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHtcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBpZD1cInN3aXRjaFwiXHJcbiAgICAgICAgICBuYW1lPVwidGhlbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVDb25kID0gY2hlY2t0aGVNb2RlID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xyXG4gICAgICAgICAgICAvLyBzZXRTdGF0ZSh1cGRhdGVDb25kKTtcclxuICAgICAgICAgICAgY2hlY2tCdG4oZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgLy8gY2hlY2tlZD17Y2hlY2t0aGVNb2RlID09PSBcImRhcmtcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic3dpdGNoXCI+PC9sYWJlbD5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5jb25zdCBMYXlPdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgPE5hdldhcHBlcj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxNYWluV2l0Y2hMb2dvIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge2lkID8gPFByb2plY3RMaW5rcyAvPiA6IDxIb21lTGlua3MgLz59XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9OYXZXYXBwZXI+XHJcbiAgICAgIDxNbGJOYXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+fHx8PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWFpbldpdGNoTG9nbyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NbGJOYXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5T3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9