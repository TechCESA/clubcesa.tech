"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.3.0";
exports.ids = ["vendor-chunks/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.3.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   composeRefs: () => (/* binding */ $6ed0406888f73fc4$export$43e446d32b3d21af),\n/* harmony export */   useComposedRefs: () => (/* binding */ $6ed0406888f73fc4$export$c7b2cbe3552a0d05)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_react-dom@18.3.0_react@18.3.0__react@18.3.0_sass@1.75.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n/**\n * Set a given ref to a given value\n * This utility takes care of different types of refs: callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$var$setRef(ref, value) {\n    if (typeof ref === 'function') ref(value);\n    else if (ref !== null && ref !== undefined) ref.current = value;\n}\n/**\n * A utility to compose multiple refs together\n * Accepts callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {\n    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)\n        )\n    ;\n}\n/**\n * A custom hook that composes multiple refs\n * Accepts callback refs and RefObject(s)\n */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi43OV9yZWFjdEAxOC4zLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEOzs7QUFHeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQWtCO0FBQzdCOzs7OztBQUtnSTtBQUNoSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsdWJjZXNhLnRlY2gvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbXBvc2UtcmVmc0AxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi43OV9yZWFjdEAxOC4zLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvZGlzdC9pbmRleC5tanM/ZGZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrIGFzICQzdnFtciR1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5cblxuLyoqXG4gKiBTZXQgYSBnaXZlbiByZWYgdG8gYSBnaXZlbiB2YWx1ZVxuICogVGhpcyB1dGlsaXR5IHRha2VzIGNhcmUgb2YgZGlmZmVyZW50IHR5cGVzIG9mIHJlZnM6IGNhbGxiYWNrIHJlZnMgYW5kIFJlZk9iamVjdChzKVxuICovIGZ1bmN0aW9uICQ2ZWQwNDA2ODg4ZjczZmM0JHZhciRzZXRSZWYocmVmLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSByZWYodmFsdWUpO1xuICAgIGVsc2UgaWYgKHJlZiAhPT0gbnVsbCAmJiByZWYgIT09IHVuZGVmaW5lZCkgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbn1cbi8qKlxuICogQSB1dGlsaXR5IHRvIGNvbXBvc2UgbXVsdGlwbGUgcmVmcyB0b2dldGhlclxuICogQWNjZXB0cyBjYWxsYmFjayByZWZzIGFuZCBSZWZPYmplY3QocylcbiAqLyBmdW5jdGlvbiAkNmVkMDQwNjg4OGY3M2ZjNCRleHBvcnQkNDNlNDQ2ZDMyYjNkMjFhZiguLi5yZWZzKSB7XG4gICAgcmV0dXJuIChub2RlKT0+cmVmcy5mb3JFYWNoKChyZWYpPT4kNmVkMDQwNjg4OGY3M2ZjNCR2YXIkc2V0UmVmKHJlZiwgbm9kZSlcbiAgICAgICAgKVxuICAgIDtcbn1cbi8qKlxuICogQSBjdXN0b20gaG9vayB0aGF0IGNvbXBvc2VzIG11bHRpcGxlIHJlZnNcbiAqIEFjY2VwdHMgY2FsbGJhY2sgcmVmcyBhbmQgUmVmT2JqZWN0KHMpXG4gKi8gZnVuY3Rpb24gJDZlZDA0MDY4ODhmNzNmYzQkZXhwb3J0JGM3YjJjYmUzNTUyYTBkMDUoLi4ucmVmcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICByZXR1cm4gJDN2cW1yJHVzZUNhbGxiYWNrKCQ2ZWQwNDA2ODg4ZjczZmM0JGV4cG9ydCQ0M2U0NDZkMzJiM2QyMWFmKC4uLnJlZnMpLCByZWZzKTtcbn1cblxuXG5cblxuZXhwb3J0IHskNmVkMDQwNjg4OGY3M2ZjNCRleHBvcnQkNDNlNDQ2ZDMyYjNkMjFhZiBhcyBjb21wb3NlUmVmcywgJDZlZDA0MDY4ODhmNzNmYzQkZXhwb3J0JGM3YjJjYmUzNTUyYTBkMDUgYXMgdXNlQ29tcG9zZWRSZWZzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\n");

/***/ })

};
;