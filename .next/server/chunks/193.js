"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 50756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getDriver)
/* harmony export */ });
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6440);
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;
const driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default().driver(uri, neo4j_driver__WEBPACK_IMPORTED_MODULE_0___default().auth.basic(user, password));
function getDriver() {
    return driver;
}


/***/ }),

/***/ 82413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center",
        children: "Loading..."
    });
}


/***/ }),

/***/ 97324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getDriver)
/* harmony export */ });
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55105);

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;
const driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_0__/* ["default"].driver */ .ZP.driver(uri, neo4j_driver__WEBPACK_IMPORTED_MODULE_0__/* ["default"].auth */ .ZP.auth.basic(user, password));
function getDriver() {
    return driver;
}


/***/ })

};
;