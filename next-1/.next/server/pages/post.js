(function() {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "e:\\webdevelopment_f\\apps\\next-demo\\next-1\\pages\\post.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Comment = ({
  email,
  body
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
    children: email
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
    children: body
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 2
}, undefined);

const Post = ({
  id,
  comments
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: ["Comments for Post #", id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), comments.map(c => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comment, _objectSpread(_objectSpread({}, c), {}, {
      key: c.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }
    })))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};

Post.getInitialProps = async ({
  query
}) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`;
  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
  const {
    data
  } = res;
  return _objectSpread(_objectSpread({}, query), {}, {
    comments: data
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEvLi9wYWdlcy9wb3N0LmpzIiwid2VicGFjazovL25leHQtMS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dC0xL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LTEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDb21tZW50IiwiZW1haWwiLCJib2R5IiwiUG9zdCIsImlkIiwiY29tbWVudHMiLCJtYXAiLCJjIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJ1cmwiLCJyZXMiLCJheGlvcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELGtCQUNmO0FBQUEsMEJBQ0M7QUFBQSxjQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUEsY0FBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7O0FBT0EsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsSUFBRjtBQUFNQztBQUFOLENBQUQsS0FBc0I7QUFDbEMsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLHdDQUF3QkQsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEVBRUVDLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxDQUFELGlCQUNiLHFEQUFDLE9BQUQsa0NBQWFBLENBQWI7QUFBZ0IsU0FBRyxFQUFFQSxDQUFDLENBQUNILEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQSxDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBUUEsQ0FURDs7QUFXQUQsSUFBSSxDQUFDSyxlQUFMLEdBQXVCLE9BQU87QUFBRUM7QUFBRixDQUFQLEtBQXFCO0FBQzNDLFFBQU1DLEdBQUcsR0FBSSx3REFBdURELEtBQUssQ0FBQ0wsRUFBRyxFQUE3RTtBQUNBLFFBQU1PLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFVRixHQUFWLENBQWxCO0FBQ0EsUUFBTTtBQUFFRztBQUFGLE1BQVdGLEdBQWpCO0FBQ0EseUNBQVlGLEtBQVo7QUFBbUJKLFlBQVEsRUFBRVE7QUFBN0I7QUFDQSxDQUxEOztBQU9BLCtEQUFlVixJQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGVtYWlsLCBib2R5IH0pID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PGg1PntlbWFpbH08L2g1PlxyXG5cdFx0PHA+e2JvZHl9PC9wPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IGlkLCBjb21tZW50cyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMT5Db21tZW50cyBmb3IgUG9zdCAje2lkfTwvaDE+XHJcblx0XHRcdHtjb21tZW50cy5tYXAoKGMpID0+IChcclxuXHRcdFx0XHQ8Q29tbWVudCB7Li4uY30ga2V5PXtjLmlkfSAvPlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuXHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0ke3F1ZXJ5LmlkfWA7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0Y29uc3QgeyBkYXRhIH0gPSByZXM7XHJcblx0cmV0dXJuIHsgLi4ucXVlcnksIGNvbW1lbnRzOiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==