"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 53581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ../node_modules/.pnpm/next@13.0.4_xu2oyky5xxx7aqobdjiakwuwzm/node_modules/next/document.js
var next_document = __webpack_require__(83096);
// EXTERNAL MODULE: external "@ant-design/cssinjs"
var cssinjs_ = __webpack_require__(52727);
;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
;// CONCATENATED MODULE: ./pages/_document.tsx




class HeadlessDocument extends next_document["default"] {
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet).filter((el)=>el !== "htmlAttributes" && el !== "bodyAttributes").map((el)=>this.props.helmet[el].toComponent());
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            ...this.helmetHtmlAttrComponents,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: `${"https://app.altafid.dev.altafid.net/staticAsset/"}favicon.svg`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: `/css/altafid-token.css`
                        }),
                        this.helmetHeadComponents
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    ...this.helmetBodyAttrComponents,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
// It's compatible with static-site generation (SSG).
HeadlessDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const cache = (0,cssinjs_.createCache)();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(cssinjs_.StyleProvider, {
                        cache: cache,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(App, {
                            ...props
                        })
                    });
                }
        });
    const initialProps = await next_document["default"].getInitialProps(ctx);
    // Generate the css string for the styles coming from jss
    const css = (0,cssinjs_.extractStyle)(cache);
    return {
        ...initialProps,
        styles: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                initialProps.styles,
                /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    id: "jss-server-side",
                    dangerouslySetInnerHTML: {
                        __html: css
                    }
                }, "jss-server-side")
            ]
        }),
        helmet: external_react_helmet_namespaceObject.Helmet.renderStatic()
    };
};
/* harmony default export */ const _document = (HeadlessDocument);


/***/ }),

/***/ 52727:
/***/ ((module) => {

module.exports = require("@ant-design/cssinjs");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 32778:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [595,96], () => (__webpack_exec__(53581)));
module.exports = __webpack_exports__;

})();