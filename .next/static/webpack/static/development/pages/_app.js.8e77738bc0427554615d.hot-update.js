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
})(["height:10vh;width:100%;box-shadow:1px 1px 10px black;padding:2.2rem;position:fixed;background-color:var(--blackBackgroundColor);display:none;@media ", "{display:block;}& > div{height:100%;display:flex;align-items:center;justify-content:space-around;& > div:nth-child(2){& > svg{height:auto;width:4rem;& > g{fill:var(--blackTextColor);}}}& > div:nth-child(1){color:var(--blackTextColor);font-size:3rem;transform:rotate(90deg);}& > div:nth-child(3){& > span{position:relative;& > input{height:0;width:0;visibility:hidden;&:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}}& > label{width:8rem;height:4rem;background:gray;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);cursor:pointer;border-radius:100px;&:after{content:\"\";width:3rem;height:3rem;background:white;position:absolute;border-radius:50%;top:12%;left:6%;transition:0.3s;}}input:checked + label{background:#76a4da;}input:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}label:active:after{width:31px;}}}}"], function (_ref2) {
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
      lineNumber: 209,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }), "Home"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("aboutme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }), "About me"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("portfolio").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }), "Portfolio"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("contactme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }), "Contact me"), __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
      lineNumber: 231,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }, "Go Back"))), __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 248,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "checkbox",
    id: "switch",
    name: "theme",
    onChange: function onChange(e) {
      var updateCond = checktheMode === "dark" ? "light" : "dark";
      setState(updateCond);
      checkBtn(e);
    },
    checked: checktheMode === "dark" ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
      lineNumber: 270,
      columnNumber: 5
    }
  }, __jsx(NavWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  })), id ? __jsx(ProjectLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }) : __jsx(HomeLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 36
    }
  }))), __jsx(MlbNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, "|||"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }, __jsx(Checkbox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  })))), children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJNYWluV2l0Y2hMb2dvIiwiTWFpbkxheW91dCIsInN0eWxlZCIsImRpdiIsIk5hdldhcHBlciIsInRoZW1lIiwibWVkaWFxdXJ5IiwibGFwdG9wTWlkIiwiTWxiTmF2IiwibmF2IiwidHJhbnMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjaGVja0J0biIsImUiLCJIb21lTGlua3MiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiUHJvamVjdExpbmtzIiwiQ2hlY2tib3giLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNoZWNrdGhlTW9kZSIsInVwZGF0ZUNvbmQiLCJMYXlPdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNPQSxhLFlBQUFBLGE7Ozs7Ozs7Ozs7TUFBQUEsYTtBQUFBQSxhOzs7Ozs7QUFDUDtBQUNBO0FBQ0EsSUFBTUMsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFoQjtLQUFNRixVO0FBSU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtzQ0FNSjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsU0FBL0I7QUFBQSxDQU5JLENBQWY7TUFBTUgsUztBQWlHTixJQUFNSSxNQUFNLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ2hD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O0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlHQSxFQUFFLEdBQUcsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFzQixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUozQixDQURGLENBREYsRUFTRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQURGLENBVEYsRUFvQkdILFFBcEJILENBREY7QUF3QkQsQ0EzQkQ7O0lBQU1ELE07VUFDV0cscUQ7OztNQURYSCxNO0FBNkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy44ZTc3NzM4YmMwNDI3NTU0NjE1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTWFpbldpdGNoTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL3doaXRlbG9nby5zdmdcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgTWFpbkxheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0JhY2tncm91bmRDb2xvcik7XHJcbmA7XHJcbmNvbnN0IE5hdldhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkubGFwdG9wTWlkfSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAmID4gdWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgJiA+IGxpIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM3NmE0ZGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbDphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMXB4O1xyXG4gICAgICB9XHJcbiAgICAgICYgPiBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHRvcDogMTIlO1xyXG4gICAgICAgICAgbGVmdDogNiU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGxpID4gYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgICYgPiBsaSA+IHN2ZyB7XHJcbiAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICYgPiBnIHtcclxuICAgICAgICBmaWxsOiB2YXIoLS1ibGFja1RleHRDb2xvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNbGJOYXYgPSBzdHlsZWQubmF2YFxyXG4gIGhlaWdodDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggYmxhY2s7XHJcbiAgcGFkZGluZzogMi4ycmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0JhY2tncm91bmRDb2xvcik7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAbWVkaWEgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tZWRpYXF1cnkubGFwdG9wTWlkfSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgJiA+IGRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgJiA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAmID4gc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgJiA+IGcge1xyXG4gICAgICAgICAgZmlsbDogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgJiA+IHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmID4gaW5wdXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgPiBsYWJlbCB7XHJcbiAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEyJTtcclxuICAgICAgICAgICAgbGVmdDogNiU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzc2YTRkYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsOmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5sZXQgdHJhbnMgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKTtcclxuICB9LCAxMDAwKTtcclxufTtcclxuZnVuY3Rpb24gY2hlY2tCdG4oZSkge1xyXG4gIC8vIGUucGVyc2lzdCgpO1xyXG4gIC8vIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgLy8gICB0cmFucygpO1xyXG4gIC8vICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcImRhcmtcIik7XHJcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl90aGVtZVwiLCBKU09OLnN0cmluZ2lmeShcImRhcmtcIikpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICB0cmFucygpO1xyXG4gIC8vICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcImxpZ2h0XCIpO1xyXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdGhlbWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJsaWdodFwiKSk7XHJcbiAgLy8gfVxyXG59XHJcbmNvbnN0IEhvbWVMaW5rcyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGxpIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKS5zY3JvbGxJbnRvVmlldygpfT5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgSG9tZVxyXG4gICAgPC9saT5cclxuICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0bWVcIikuc2Nyb2xsSW50b1ZpZXcoKX0+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIEFib3V0IG1lXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvXCIpLnNjcm9sbEludG9WaWV3KCl9PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICBQb3J0Zm9saW9cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgb25DbGljaz17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0bWVcIikuc2Nyb2xsSW50b1ZpZXcoKX0+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIENvbnRhY3QgbWVcclxuICAgIDwvbGk+XHJcbiAgICA8Q2hlY2tib3ggLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmNvbnN0IFByb2plY3RMaW5rcyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGxpPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPkdvIEJhY2s8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8Q2hlY2tib3ggLz5cclxuICA8Lz5cclxuKTtcclxuY29uc3QgQ2hlY2tib3ggPSAoKSA9PiB7XHJcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdGhlbWVcIik7XHJcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKGRhdGEpKTtcclxuICB9KTtcclxuICBsZXQgY2hlY2t0aGVNb2RlID0gc3RhdGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgaWQ9XCJzd2l0Y2hcIlxyXG4gICAgICAgICAgbmFtZT1cInRoZW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQ29uZCA9IGNoZWNrdGhlTW9kZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcclxuICAgICAgICAgICAgc2V0U3RhdGUodXBkYXRlQ29uZCk7XHJcbiAgICAgICAgICAgIGNoZWNrQnRuKGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrdGhlTW9kZSA9PT0gXCJkYXJrXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInN3aXRjaFwiPjwvbGFiZWw+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufTtcclxuY29uc3QgTGF5T3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgIDxOYXZXYXBwZXI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TWFpbldpdGNoTG9nbyAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIHtpZCA/IDxQcm9qZWN0TGlua3MgLz4gOiA8SG9tZUxpbmtzIC8+fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvTmF2V2FwcGVyPlxyXG4gICAgICA8TWxiTmF2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pnx8fDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1haW5XaXRjaExvZ28gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENoZWNrYm94IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NbGJOYXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5T3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9