exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 8972:
/***/ ((module) => {

// Exports
module.exports = {
	"productList": "ProductList_productList__9CraL",
	"product": "ProductList_product__3n2Wo",
	"image": "ProductList_image__7f3Dj",
	"content": "ProductList_content__LSYDN",
	"divider": "ProductList_divider__h6anX",
	"name": "ProductList_name__NH2Mx",
	"prices": "ProductList_prices__GFpo8",
	"originalPrice": "ProductList_originalPrice__3DfmU",
	"starRating": "ProductList_starRating__IGcwx",
	"likeCount": "ProductList_likeCount__0koiN"
};


/***/ }),

/***/ 418:
/***/ ((module) => {

// Exports
module.exports = {
	"searchForm": "SearchForm_searchForm__UEKBn",
	"searchInput": "SearchForm_searchInput__P7SYk",
	"searchButton": "SearchForm_searchButton__dpQJJ"
};


/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ProductList.module.css
var ProductList_module = __webpack_require__(8972);
var ProductList_module_default = /*#__PURE__*/__webpack_require__.n(ProductList_module);
// EXTERNAL MODULE: ./components/StarRating.js
var StarRating = __webpack_require__(1571);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/heart.svg
/* harmony default export */ const heart = ({"src":"/_next/static/media/heart.0e1fecc6.svg","height":13,"width":13,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/ProductList.js






function ProductList({ className ="" , products  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: `${(ProductList_module_default()).productList} ${className}`,
        children: products?.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    className: (ProductList_module_default()).product,
                    href: `/items/${product.id}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ProductList_module_default()).image,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                fill: true,
                                src: product.imgUrl,
                                alt: product.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ProductList_module_default()).content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (ProductList_module_default()).name,
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ProductList_module_default()).prices,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (ProductList_module_default()).originalPrice,
                                                    children: [
                                                        product.price.toLocaleString(),
                                                        "원"
                                                    ]
                                                }),
                                                product.salePrice.toLocaleString(),
                                                "원"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    className: (ProductList_module_default()).divider
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ProductList_module_default()).starRating,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(StarRating/* default */.Z, {
                                                    value: product.starRating
                                                }),
                                                product.starRatingCount.toLocaleString()
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ProductList_module_default()).likeCount,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: heart,
                                                    alt: "좋아요"
                                                }),
                                                product.likeCount.toLocaleString()
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, product.id))
    });
}


/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__);




function SearchForm({ initialValue =""  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialValue);
    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!value) {
            router.push("/");
            return;
        }
        router.push(`/search?q=${value}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchForm),
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchInput),
                name: "q",
                value: value,
                placeholder: "찾고 싶은 옷을 검색해보세요.",
                onChange: handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchButton),
                children: "검색"
            })
        ]
    });
}


/***/ }),

/***/ 1571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RATINGS = [
    1,
    2,
    3,
    4,
    5
];
function StarRating({ value =1  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: RATINGS.map((rating)=>value >= rating ? "★" : "✩")
    });
}
6;


/***/ }),

/***/ 1979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://learn.codeit.kr/api/codeitmall"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;