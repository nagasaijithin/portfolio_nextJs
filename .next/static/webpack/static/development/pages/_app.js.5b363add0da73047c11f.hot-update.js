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
})(["height:10vh;width:100%;box-shadow:1px 1px 10px black;padding:2.2rem;position:fixed;background-color:var(--blackBackgroundColor);display:none;@media ", "{display:block;z-index:20;}& > div{height:100%;display:flex;align-items:center;justify-content:space-around;& > div:nth-child(2){& > svg{height:auto;width:4rem;& > g{fill:var(--blackTextColor);}}}& > div:nth-child(1){color:var(--blackTextColor);font-size:3rem;transform:rotate(90deg);}& > div:nth-child(3){& > span{position:relative;& > input{height:0;width:0;visibility:hidden;&:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}}& > label{width:8rem;height:4rem;background:gray;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);cursor:pointer;border-radius:100px;&:after{content:\"\";width:3rem;height:3rem;background:white;position:absolute;border-radius:50%;top:12%;left:6%;transition:0.3s;}}input:checked + label{background:#76a4da;}input:checked + label:after{left:calc(100% - 5px);transform:translateX(-100%);}label:active:after{width:31px;}}}}"], function (_ref2) {
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

function checkBtn(e) {
  e.persist();

  if (e.target.checked) {
    trans();
    document.documentElement.setAttribute("data-mode", "dark");
    localStorage.setItem("_theme", JSON.stringify("dark"));
  } else {
    trans();
    document.documentElement.setAttribute("data-mode", "light");
    localStorage.setItem("_theme", JSON.stringify("light"));
  }
}

var HomeLinks = function HomeLinks() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("home").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }), "Home"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("aboutme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }), "About me"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("portfolio").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }), "Portfolio"), __jsx("li", {
    onClick: function onClick() {
      return document.getElementById("contactme").scrollIntoView();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }), "Contact me"), __jsx(Checkbox, {
    id: "dstbtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
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
      lineNumber: 232,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, "Go Back"))), __jsx(Checkbox, {
    id: "dstbtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }));
};

_c5 = ProjectLinks;

var Checkbox = function Checkbox(_ref3) {
  _s();

  var id = _ref3.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = localStorage.getItem("_theme");
    setState(JSON.parse(data));
  });
  var checktheMode = state;

  if (checktheMode === "dark") {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 7
      }
    }, __jsx("input", {
      type: "checkbox",
      id: id,
      name: "theme",
      onChange: function onChange(e) {
        var updateCond = checktheMode === "dark" ? "light" : "dark";
        setState(updateCond);
        checkBtn(e);
      },
      checked: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 7
      }
    }, __jsx("input", {
      type: "checkbox",
      id: id,
      name: "theme",
      onChange: function onChange(e) {
        var updateCond = checktheMode === "dark" ? "light" : "dark";
        setState(updateCond);
        checkBtn(e);
      },
      checked: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }
    }), __jsx("label", {
      htmlFor: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }
    }));
  }
};

_s(Checkbox, "Z9hTlZ+NcQz32JPuAL7cN+c9jIA=");

_c6 = Checkbox;

var LayOut = function LayOut(_ref4) {
  _s2();

  var children = _ref4.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  return __jsx(MainLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 5
    }
  }, __jsx(NavWapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  })), id ? __jsx(ProjectLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }) : __jsx(HomeLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 36
    }
  }))), __jsx(MlbNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 9
    }
  }, id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, "<-") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 48
    }
  }, "|||"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  }, __jsx(MainWitchLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 11
    }
  }, __jsx(Checkbox, {
    id: "mldBtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJNYWluV2l0Y2hMb2dvIiwiTWFpbkxheW91dCIsInN0eWxlZCIsImRpdiIsIk5hdldhcHBlciIsInRoZW1lIiwibWVkaWFxdXJ5IiwibGFwdG9wTWlkIiwiTWxiTmF2IiwibmF2IiwidHJhbnMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjaGVja0J0biIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiSG9tZUxpbmtzIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIlByb2plY3RMaW5rcyIsIkNoZWNrYm94IiwiaWQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZ2V0SXRlbSIsInBhcnNlIiwiY2hlY2t0aGVNb2RlIiwidXBkYXRlQ29uZCIsIkxheU91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUNPQSxhLFlBQUFBLGE7Ozs7Ozs7Ozs7TUFBQUEsYTtBQUFBQSxhOzs7Ozs7QUFDUDtBQUNBO0FBQ0EsSUFBTUMsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFoQjtLQUFNRixVO0FBSU4sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtzQ0FNSjtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsU0FBL0I7QUFBQSxDQU5JLENBQWY7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QTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJR0EsRUFBRSxHQUFHLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBc0IsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKM0IsQ0FERixDQURGLEVBU0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEVBQUUsR0FBRyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQixJQUFoQixDQUFILEdBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEdkMsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLE1BQUUsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREYsQ0FURixFQW9CR1csUUFwQkgsQ0FERjtBQXdCRCxDQTNCRDs7SUFBTUQsTTtVQUNXRyxxRDs7O01BRFhILE07QUE2QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjViMzYzYWRkMGRhNzMwNDdjMTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBNYWluV2l0Y2hMb2dvIGZyb20gXCIuLi9pbWFnZXMvd2hpdGVsb2dvLnN2Z1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBNYWluTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmFja2dyb3VuZENvbG9yKTtcclxuYDtcclxuY29uc3QgTmF2V2FwcGVyID0gc3R5bGVkLmRpdmBcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS5sYXB0b3BNaWR9IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICYgPiB1bCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAmID4gbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAmID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tUZXh0Q29sb3IpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiA+IHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAmID4gaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzc2YTRkYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsOmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgIH1cclxuICAgICAgJiA+IGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgICBsZWZ0OiA2JTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmID4gbGkgPiBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgJiA+IGxpID4gc3ZnIHtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgJiA+IGcge1xyXG4gICAgICAgIGZpbGw6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1sYk5hdiA9IHN0eWxlZC5uYXZgXHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcclxuICBwYWRkaW5nOiAyLjJyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmFja2dyb3VuZENvbG9yKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIEBtZWRpYSAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1lZGlhcXVyeS5sYXB0b3BNaWR9IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgfVxyXG4gICYgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgJiA+IHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICYgPiBnIHtcclxuICAgICAgICAgIGZpbGw6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJsYWNrVGV4dENvbG9yKTtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB9XHJcbiAgICAmID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICYgPiBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJiA+IGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmID4gbGFiZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAxMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM3NmE0ZGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNXB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbDphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxubGV0IHRyYW5zID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvblwiKTtcclxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIik7XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbmZ1bmN0aW9uIGNoZWNrQnRuKGUpIHtcclxuICBlLnBlcnNpc3QoKTtcclxuICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgdHJhbnMoKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJkYXJrXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdGhlbWVcIiwgSlNPTi5zdHJpbmdpZnkoXCJkYXJrXCIpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdHJhbnMoKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJsaWdodFwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3RoZW1lXCIsIEpTT04uc3RyaW5naWZ5KFwibGlnaHRcIikpO1xyXG4gIH1cclxufVxyXG5jb25zdCBIb21lTGlua3MgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIikuc2Nyb2xsSW50b1ZpZXcoKX0+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIEhvbWVcclxuICAgIDwvbGk+XHJcbiAgICA8bGkgb25DbGljaz17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dG1lXCIpLnNjcm9sbEludG9WaWV3KCl9PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICBBYm91dCBtZVxyXG4gICAgPC9saT5cclxuICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRmb2xpb1wiKS5zY3JvbGxJbnRvVmlldygpfT5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgUG9ydGZvbGlvXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdG1lXCIpLnNjcm9sbEludG9WaWV3KCl9PlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICBDb250YWN0IG1lXHJcbiAgICA8L2xpPlxyXG4gICAgPENoZWNrYm94IGlkPVwiZHN0YnRuXCIgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmNvbnN0IFByb2plY3RMaW5rcyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGxpPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPkdvIEJhY2s8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8Q2hlY2tib3ggaWQ9XCJkc3RidG5cIiAvPlxyXG4gIDwvPlxyXG4pO1xyXG5jb25zdCBDaGVja2JveCA9ICh7IGlkIH0pID0+IHtcclxuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl90aGVtZVwiKTtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2UoZGF0YSkpO1xyXG4gIH0pO1xyXG4gIGxldCBjaGVja3RoZU1vZGUgPSBzdGF0ZTtcclxuICBpZiAoY2hlY2t0aGVNb2RlID09PSBcImRhcmtcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgbmFtZT1cInRoZW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHVwZGF0ZUNvbmQgPSBjaGVja3RoZU1vZGUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUodXBkYXRlQ29uZCk7XHJcbiAgICAgICAgICAgICAgY2hlY2tCdG4oZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9PjwvbGFiZWw+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB1cGRhdGVDb25kID0gY2hlY2t0aGVNb2RlID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlKHVwZGF0ZUNvbmQpO1xyXG4gICAgICAgICAgICAgIGNoZWNrQnRuKGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjaGVja2VkPXtmYWxzZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0+PC9sYWJlbD5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IExheU91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICA8TmF2V2FwcGVyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE1haW5XaXRjaExvZ28gLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB7aWQgPyA8UHJvamVjdExpbmtzIC8+IDogPEhvbWVMaW5rcyAvPn1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L05hdldhcHBlcj5cclxuICAgICAgPE1sYk5hdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2lkID8gPExpbmsgaHJlZj1cIi9cIj57XCI8LVwifTwvTGluaz4gOiA8ZGl2Pnx8fDwvZGl2Pn1cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNYWluV2l0Y2hMb2dvIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBpZD1cIm1sZEJ0blwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NbGJOYXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5T3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9