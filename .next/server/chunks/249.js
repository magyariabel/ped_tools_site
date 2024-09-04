exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 49078:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23))

/***/ }),

/***/ 92926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49227);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75223);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57226);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17025);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93821);

const Icons = {
    home: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    users: lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    barChart: lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    tools: lucide_react__WEBPACK_IMPORTED_MODULE_3__.Tools,
    target: lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
};


/***/ }),

/***/ 83360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(92411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/icons.tsx
var icons = __webpack_require__(92926);
;// CONCATENATED MODULE: ./app/components/Header.tsx



const navigation = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Stakeholders",
        href: "/stakeholders"
    },
    {
        name: "KPIs",
        href: "/kpis"
    },
    {
        name: "Tools",
        href: "/tools"
    },
    {
        name: "Intervention Points",
        href: "/intervention-points"
    }
];
function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-white shadow-sm",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            "aria-label": "Top",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "PED Design Tool"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons */.P.home, {
                                    className: "h-8 w-8 text-primary"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ml-10 flex items-baseline space-x-4",
                            children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.href,
                                    className: "text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",
                                    children: item.name
                                }, item.name))
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Footer.tsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center text-gray-500 text-sm",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " PED Design Tool. All rights reserved."
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "PED Design Tool",
    description: "Positive Energy District Design Tool"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;