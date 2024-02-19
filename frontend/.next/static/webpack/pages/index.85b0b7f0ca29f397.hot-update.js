"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst MyComponent = ()=>{\n    _s();\n    //Define un estado para almacenar los datos recibidos de la API\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchData = async ()=>{\n        try {\n            //Realiza una petición get a la api utilizando Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/products\");\n            //Actualiza el estado con los datos recibidos\n            setData(response.data);\n        } catch (error) {\n            console.error(\"Hubo un problema:\", error);\n        }\n    };\n    //Llama a la función fetchData cuando el componente se monta\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []); //El segundo argumento [] asegura que useEffect solo se ejecute una vez, cuando el componente se monta\n    //Mapeo a los datos recibidos de la API\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar navbar-expand-lg navbar-light bg-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"nav-link\",\n                            href: \"http://localhost:3000\",\n                            children: \"Ecommerce\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"navbar-toggler\",\n                            type: \"button\",\n                            \"data-bs-toggle\": \"collapse\",\n                            \"data-bs-target\": \"#navbarNav\",\n                            \"aria-controls\": \"navbarNav\",\n                            \"aria-expanded\": \"false\",\n                            \"aria-label\": \"Toggle navigation\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"navbar-toggler-icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"collapse navbar-collapse\",\n                            id: \"navbarNav\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navbar-nav\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"nav-link\",\n                                            href: \"http://127.0.0.1:8000/brand\",\n                                            children: \"Marcas\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"nav-link\",\n                                            href: \"http://127.0.0.1:8000/product\",\n                                            children: \"Productos\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            Data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: Data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-dark rounded py-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                className: \"card-title text-center text-white\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                    children: item.product\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text mt-3\",\n                                            children: item.comments\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-group list-group-flush\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-muted\",\n                                                            children: \"Talla: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            class: \"badge bg-secondary rounded-pill\",\n                                                            children: item.size\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-muted\",\n                                                            children: \"Marca: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            class: \"badge bg-secondary rounded-pill\",\n                                                            children: item.brand\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-muted\",\n                                                            children: \"Inventario: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            class: \"badge bg-secondary rounded-pill\",\n                                                            children: item.inventory\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-muted\",\n                                                            children: \"Fecha de embarque: \"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            class: \"badge bg-secondary rounded-pill\",\n                                                            children: item.shipment_date\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-center mt-4\",\n                children: \"Desarrollado por Juan Diego Pabon Rios\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Prueba_Tiendapp\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyComponent, \"41P1N77ud5cwUsN5JNgp0GMz570=\");\n_c = MyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\nvar _c;\n$RefreshReg$(_c, \"MyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ2Y7QUFFN0IsTUFBTUksY0FBYzs7SUFDbEIsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNSyxZQUFZO1FBQ2hCLElBQUk7WUFDRixvREFBb0Q7WUFDcEQsTUFBTUMsV0FBVyxNQUFNUixpREFBUyxDQUFDO1lBQ2pDLDZDQUE2QztZQUM3Q00sUUFBUUUsU0FBU0UsSUFBSTtRQUN2QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHFCQUFxQkE7UUFDckM7SUFDRjtJQUVBLDREQUE0RDtJQUM1RFYsZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUUsR0FBRyxzR0FBc0c7SUFFOUcsdUNBQXVDO0lBQ3ZDLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNaLGtEQUFJQTs0QkFBQ1ksV0FBVTs0QkFBV0MsTUFBSztzQ0FBd0I7Ozs7OztzQ0FJeEQsOERBQUNDOzRCQUNDRixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMQyxrQkFBZTs0QkFDZkMsa0JBQWU7NEJBQ2ZDLGlCQUFjOzRCQUNkQyxpQkFBYzs0QkFDZEMsY0FBVztzQ0FFWCw0RUFBQ0M7Z0NBQUtULFdBQVU7Ozs7Ozs7Ozs7O3NDQUVsQiw4REFBQ0Y7NEJBQUlFLFdBQVU7NEJBQTJCVSxJQUFHO3NDQUMzQyw0RUFBQ0M7Z0NBQUdYLFdBQVU7O2tEQUNaLDhEQUFDWTt3Q0FBR1osV0FBVTtrREFDWiw0RUFBQ1osa0RBQUlBOzRDQUFDWSxXQUFVOzRDQUFXQyxNQUFLO3NEQUE4Qjs7Ozs7Ozs7Ozs7a0RBSWhFLDhEQUFDVzt3Q0FBR1osV0FBVTtrREFDWiw0RUFBQ1osa0RBQUlBOzRDQUFDWSxXQUFVOzRDQUFXQyxNQUFLO3NEQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUXpFWCxxQkFDQyw4REFBQ1E7Z0JBQUlFLFdBQVU7MEJBQ1pWLEtBQUt1QixHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNoQjt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNGO2dDQUFJRSxXQUFVOzBDQUNiLDRFQUFDRjtvQ0FBSUUsV0FBVTs7c0RBQ2IsOERBQUNGOzRDQUFJRSxXQUFVO3NEQUNiLDRFQUFDZTtnREFBR2YsV0FBVTswREFDWiw0RUFBQ2dCOzhEQUFHRixLQUFLRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O3NEQUdwQiw4REFBQ0M7NENBQUVsQixXQUFVO3NEQUNUYyxLQUFLSyxRQUFROzs7Ozs7c0RBRWpCLDhEQUFDUjs0Q0FBR1gsV0FBVTs7OERBQ1osOERBQUNZO29EQUFHWixXQUFVOztzRUFDWiw4REFBQ1M7NERBQUtULFdBQVU7c0VBQWE7Ozs7OztzRUFDN0IsOERBQUNTOzREQUFLVyxPQUFNO3NFQUNUTixLQUFLTyxJQUFJOzs7Ozs7Ozs7Ozs7OERBR2QsOERBQUNUO29EQUFHWixXQUFVOztzRUFDWiw4REFBQ1M7NERBQUtULFdBQVU7c0VBQWE7Ozs7OztzRUFDN0IsOERBQUNTOzREQUFLVyxPQUFNO3NFQUNUTixLQUFLUSxLQUFLOzs7Ozs7Ozs7Ozs7OERBR2YsOERBQUNWO29EQUFHWixXQUFVOztzRUFDWiw4REFBQ1M7NERBQUtULFdBQVU7c0VBQWE7Ozs7OztzRUFDN0IsOERBQUNTOzREQUFLVyxPQUFNO3NFQUNUTixLQUFLUyxTQUFTOzs7Ozs7Ozs7Ozs7OERBR25CLDhEQUFDWDtvREFBR1osV0FBVTs7c0VBQ1osOERBQUNTOzREQUFLVCxXQUFVO3NFQUFhOzs7Ozs7c0VBQzdCLDhEQUFDUzs0REFBS1csT0FBTTtzRUFDVE4sS0FBS1UsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FXckMsOERBQUNOOzs7OzswQkFFSCw4REFBQ087Z0JBQU96QixXQUFVOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBSzNDO0dBL0dNWDtLQUFBQTtBQWlITiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gIC8vRGVmaW5lIHVuIGVzdGFkbyBwYXJhIGFsbWFjZW5hciBsb3MgZGF0b3MgcmVjaWJpZG9zIGRlIGxhIEFQSVxuICBjb25zdCBbRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vUmVhbGl6YSB1bmEgcGV0aWNpw7NuIGdldCBhIGxhIGFwaSB1dGlsaXphbmRvIEF4aW9zXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdHNcIik7XG4gICAgICAvL0FjdHVhbGl6YSBlbCBlc3RhZG8gY29uIGxvcyBkYXRvcyByZWNpYmlkb3NcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJIdWJvIHVuIHByb2JsZW1hOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vTGxhbWEgYSBsYSBmdW5jacOzbiBmZXRjaERhdGEgY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pOyAvL0VsIHNlZ3VuZG8gYXJndW1lbnRvIFtdIGFzZWd1cmEgcXVlIHVzZUVmZmVjdCBzb2xvIHNlIGVqZWN1dGUgdW5hIHZleiwgY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgbW9udGFcblxuICAvL01hcGVvIGEgbG9zIGRhdG9zIHJlY2liaWRvcyBkZSBsYSBBUElcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIj5cbiAgICAgICAgICAgIEVjb21tZXJjZVxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgTWFyY2FzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIHtEYXRhID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIHtEYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrIHJvdW5kZWQgcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLnByb2R1Y3R9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb21tZW50c31cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRhbGxhOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXNlY29uZGFyeSByb3VuZGVkLXBpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5NYXJjYTogPC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctc2Vjb25kYXJ5IHJvdW5kZWQtcGlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5JbnZlbnRhcmlvOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXNlY29uZGFyeSByb3VuZGVkLXBpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW52ZW50b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkZlY2hhIGRlIGVtYmFycXVlOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXNlY29uZGFyeSByb3VuZGVkLXBpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2hpcG1lbnRfZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+PC9wPlxuICAgICAgKX1cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICBEZXNhcnJvbGxhZG8gcG9yIEp1YW4gRGllZ28gUGFib24gUmlvc1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIk15Q29tcG9uZW50IiwiRGF0YSIsInNldERhdGEiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiaWQiLCJ1bCIsImxpIiwibWFwIiwiaXRlbSIsImg1IiwiYiIsInByb2R1Y3QiLCJwIiwiY29tbWVudHMiLCJjbGFzcyIsInNpemUiLCJicmFuZCIsImludmVudG9yeSIsInNoaXBtZW50X2RhdGUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});