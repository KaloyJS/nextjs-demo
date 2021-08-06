(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "e:\\webdevelopment_f\\apps\\next-demo\\next-1\\pages\\index.js";




const Index = ({
  posts
}) => {
  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Home page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: posts.map(p => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: `/post?id=${p.id}`,
          as: `/p/${p.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: p.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7
        }, undefined)
      }, p.id, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

Index.getInitialProps = async ctx => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('https://jsonplaceholder.typicode.com/posts');
  const {
    data
  } = res;
  return {
    posts: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/Link");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LTEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHQtMS9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovL25leHQtMS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC0xL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwIiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImF4aW9zIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFBLGdCQUNFQSxLQUFLLENBQUNHLEdBQU4sQ0FBV0MsQ0FBRCxpQkFDVjtBQUFBLCtCQUNDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdBLENBQUMsQ0FBQ0MsRUFBRyxFQUE3QjtBQUFnQyxZQUFFLEVBQUcsTUFBS0QsQ0FBQyxDQUFDQyxFQUFHLEVBQS9DO0FBQUEsaUNBQ0M7QUFBQSxzQkFBSUQsQ0FBQyxDQUFDRTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsU0FBU0YsQ0FBQyxDQUFDQyxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBY0EsQ0FoQkQ7O0FBa0JBTixLQUFLLENBQUNRLGVBQU4sR0FBd0IsTUFBT0MsR0FBUCxJQUFlO0FBQ3RDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFVLDRDQUFWLENBQWxCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLEdBQWpCO0FBQ0EsU0FBTztBQUFFVCxTQUFLLEVBQUVXO0FBQVQsR0FBUDtBQUNBLENBSkQ7O0FBTUEsK0RBQWVaLEtBQWYsRTs7Ozs7Ozs7Ozs7QUM1QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBwb3N0cyB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cocG9zdHMpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDE+SG9tZSBwYWdlPC9oMT5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdHtwb3N0cy5tYXAoKHApID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e3AuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3Q/aWQ9JHtwLmlkfWB9IGFzPXtgL3AvJHtwLmlkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdDxhPntwLnRpdGxlfTwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcclxuXHRjb25zdCB7IGRhdGEgfSA9IHJlcztcclxuXHRyZXR1cm4geyBwb3N0czogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=