exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 47840:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 62996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GraphVisualization)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_force_graph_2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8550);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function GraphVisualization({ data }) {
    const graphRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (graphRef.current) {
            graphRef.current.d3Force("charge").strength(-100);
            graphRef.current.d3Force("link").distance(50);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_force_graph_2d__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ref: graphRef,
        graphData: data,
        nodeLabel: "name",
        nodeAutoColorBy: "group",
        linkDirectionalArrowLength: 3.5,
        linkDirectionalArrowRelPos: 1,
        linkCurvature: 0.25,
        width: 600,
        height: 400
    });
}


/***/ }),

/***/ 50756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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