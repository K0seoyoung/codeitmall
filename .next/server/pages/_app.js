(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8672:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__e2It7",
	"page": "Container_page__f4lp3"
};


/***/ }),

/***/ 290:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__l1qoc",
	"container": "Header_container__2E6BT",
	"logo": "Header_logo__DFVkO",
	"setting": "Header_setting__j1zyh"
};


/***/ }),

/***/ 2784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* binding */ useTheme),
/* harmony export */   "f6": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* unused harmony export ThemeContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function ThemeProvider({ children  }) {
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add(theme);
        return ()=>{
            document.body.classList.remove(theme);
        };
    }, [
        theme
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
}
function useTheme() {
    const themeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext 안에서 써야합니다.");
    }
    return themeContext;
}


/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Container.module.css
var Container_module = __webpack_require__(8672);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./components/Container.js


function Container({ className ="" , page =false , children  }) {
    const classNames = `${(Container_module_default()).container} ${page ? (Container_module_default()).page : ""} ${className}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classNames,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header.module.css
var Header_module = __webpack_require__(290);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            className: (Header_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (Header_module_default()).logo,
                    href: "/",
                    children: "codietmall"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (Header_module_default()).setting,
                    href: "/setting",
                    children: "설정"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./lib/ThemeContext.js
var ThemeContext = __webpack_require__(2784);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Codeitmall"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeContext/* ThemeProvider */.f6, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(829)));
module.exports = __webpack_exports__;

})();