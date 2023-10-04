(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 62626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45385);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _altafid_storybook_assets_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26650);
/* harmony import */ var _altafid_storybook_assets_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_altafid_storybook_assets_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96488);
/* harmony import */ var _assets_layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_layout_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _altafid_mkt_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12185);
/* harmony import */ var _altafid_mkt_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75912);






function MyApp({ Component , pageProps  }) {
    return(// @ts-ignore
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_altafid_mkt_core__WEBPACK_IMPORTED_MODULE_5__/* .StyleProvider */ .V, {
        Component: Component,
        pageProps: pageProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_altafid_mkt_core__WEBPACK_IMPORTED_MODULE_6__/* .CoreProvider */ .k, {
            Component: Component,
            pageProps: pageProps
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ CoreProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CoreProvider = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};


/***/ }),

/***/ 12185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ StyleProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../node_modules/.pnpm/antd@5.1.7_biqbaboplfbrettd7655fr4n2y/node_modules/antd/lib/index.js
var lib = __webpack_require__(88001);
;// CONCATENATED MODULE: ../packages/storybook/lib/config-provider.ts

/* harmony default export */ const config_provider = (lib/* ConfigProvider */.iV);

;// CONCATENATED MODULE: ../packages/mkt-core/src/providers/StyleProvider/index.tsx
// @ts-noCheck



const StyleProvider = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(config_provider, {
        theme: {
            token: {
                "colorPrimary": "#7db1f6",
                "fontFamily": '"Merriweather Sans", "Roboto", sans-serif',
                "colorText": "#5c5c5c",
                "fontSizeHeading1": 22,
                "fontSizeHeading2": 20,
                "fontSizeHeading3": 18,
                "fontSizeHeading4": 16,
                "fontSizeHeading5": 14,
                "fontSizeLG": 18,
                "fontSizeSM": 14,
                "fontSizeXL": 20,
                "colorBgLayout": "#fff",
                "Button": {
                    "borderRadius": "4px",
                    "controlHeight": 40,
                    "fontSize": "14px",
                    "fontFamily": '"Merriweather Sans", "Roboto", sans-serif',
                    "colorPrimaryBorder": "#7db1f6",
                    "colorPrimaryHover": "#648ec5",
                    "colorPrimaryActive": "#324762",
                    "colorPrimaryText": "#fff",
                    "colorBorder": "#7db1f6",
                    "colorTextActive": "#7db1f6",
                    "colorBgContainerDisabled": "#fff",
                    "colorTextDisabled": "#bed8fb",
                    "colorBgContainer": "#fff",
                    "colorLink": "#648ec5",
                    "colorLinkHover": "#4b6a94",
                    "colorLinkActive": "#324762",
                    "colorLinkDisabled": "#c7c7c7",
                    "colorError": "#E12333"
                },
                "Alert": {
                    "colorSuccessBg": "#daefd7",
                    "colorSuccessBorder": "#c7e6c2",
                    "colorInfoBg": "#f1f1f1",
                    "colorInfoBorder": "#e3e3e3",
                    "colorErrorBg": "#f9d3d6",
                    "colorErrorBorder": "#f6bdc2"
                },
                "Checkbox": {
                    "colorBorder": "#c7c7c7",
                    "fontSizeLG": 18,
                    "fontSizeSM": 14,
                    "fontSizeXL": 20
                },
                "Radio": {
                    "colorBorder": "#c7c7c7",
                    "fontSizeLG": 18,
                    "fontSizeSM": 14,
                    "fontSizeXL": 20
                },
                "Divider": {
                    "colorSplit": "#e3e3e3",
                    "marginLG": 16
                },
                "Carousel": {
                    "colorBgContainer": "#648ec5",
                    "dotWidth": 8,
                    "dotHeight": 8,
                    "dotWidthActive": 8,
                    "controlHeightSM": 0
                },
                "Dropdown": {
                    "borderRadiusLG": "4px"
                },
                "Tooltip": {
                    "borderRadius": 8
                },
                "Progress": {
                    "errorColor": "#E12333",
                    "colorSuccess": "#45AD35",
                    "colorPrimary": "#7db1f6",
                    "colorInfo": "#7db1f6",
                    "fontFamily": '"Inter", "Roboto", sans-serif'
                },
                "Select": {
                    "borderRadius": "4px"
                }
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};


/***/ }),

/***/ 45385:
/***/ (() => {



/***/ }),

/***/ 26650:
/***/ (() => {



/***/ }),

/***/ 96488:
/***/ (() => {



/***/ }),

/***/ 52727:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/cssinjs");

/***/ }),

/***/ 70566:
/***/ ((module) => {

"use strict";
module.exports = require("@ctrl/tinycolor");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 20997:
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
var __webpack_exports__ = __webpack_require__.X(0, [1], () => (__webpack_exec__(62626)));
module.exports = __webpack_exports__;

})();