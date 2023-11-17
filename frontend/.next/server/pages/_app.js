/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/MagicProvider.tsx":
/*!************************************!*\
  !*** ./contexts/MagicProvider.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useMagic: () => (/* binding */ useMagic)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magic_sdk__WEBPACK_IMPORTED_MODULE_1__]);\nmagic_sdk__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst MagicContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    magic: null\n});\nconst MagicProvider = ({ children })=>{\n    const [magic, setMagic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // const [connection, setConnection] = useState<Connection | null>(null);\n    const rpcURL = \"https://polygon-mumbai.infura.io/v3/0138f6badd8d4e61b1f0cabfb83b0a3a\";\n    const customTestnetNodeOptions = {\n        rpcUrl: \"https://rpc-mumbai.maticvigil.com/\",\n        chainId: 80001\n    };\n    const customNodeOptions = {\n        rpcUrl: \"https://polygon-rpc.com/\",\n        chainId: 137\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {\n            const pk = process.env.NEXT_PUBLIC_MAGIC_API_KEY;\n            const magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_1__.Magic(pk, {\n                network: customTestnetNodeOptions\n            });\n            // const connection = new Connection(rpcURL!);\n            setMagic(magic);\n        // setConnection(connection);\n        }\n    }, [\n        rpcURL\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            magic\n        };\n    }, [\n        magic\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MagicContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/contexts/MagicProvider.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\nconst useMagic = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(MagicContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9NYWdpY1Byb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQVFoQztBQVFmLE1BQU1PLDZCQUFlTCxvREFBYUEsQ0FBbUI7SUFDbkRNLE9BQU87QUFDVDtBQUVBLE1BQU1DLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBMkI7SUFDMUQsTUFBTSxDQUFDRixPQUFPRyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFNO0lBQ3hDLHlFQUF5RTtJQUV6RSxNQUFNTSxTQUFTQyxzRUFBK0I7SUFFOUMsTUFBTUcsMkJBQTJCO1FBQy9CQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QkYsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUixJQUFJUyxRQUFRQyxHQUFHLENBQUNNLHlCQUF5QixFQUFFO1lBQ3pDLE1BQU1DLEtBQUtSLFFBQVFDLEdBQUcsQ0FBQ00seUJBQXlCO1lBQ2hELE1BQU1aLFFBQVEsSUFBSVAsNENBQVNBLENBQUNvQixJQUFJO2dCQUM5QkMsU0FBU047WUFDWDtZQUNBLDhDQUE4QztZQUM5Q0wsU0FBU0g7UUFDVCw2QkFBNkI7UUFDL0I7SUFDRixHQUFHO1FBQUNJO0tBQU87SUFFWCxNQUFNVyxRQUFRbEIsOENBQU9BLENBQUM7UUFDcEIsT0FBTztZQUNMRztRQUNGO0lBQ0YsR0FBRztRQUFDQTtLQUFNO0lBRVYscUJBQ0UsOERBQUNELGFBQWFpQixRQUFRO1FBQUNELE9BQU9BO2tCQUFRYjs7Ozs7O0FBRTFDO0FBRU8sTUFBTWUsV0FBVyxJQUFNdEIsaURBQVVBLENBQUNJLGNBQWM7QUFFdkQsaUVBQWVFLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXQtYmVuZGVyLWRhc2hib2FyZC8uL2NvbnRleHRzL01hZ2ljUHJvdmlkZXIudHN4P2IwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFnaWMgYXMgTWFnaWNCYXNlIH0gZnJvbSBcIm1hZ2ljLXNka1wiO1xuaW1wb3J0IHtcbiAgUmVhY3ROb2RlLFxuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IHR5cGUgTWFnaWMgPSBNYWdpY0Jhc2U7XG5cbnR5cGUgTWFnaWNDb250ZXh0VHlwZSA9IHtcbiAgbWFnaWM6IE1hZ2ljIHwgbnVsbDtcbn07XG5cbmNvbnN0IE1hZ2ljQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TWFnaWNDb250ZXh0VHlwZT4oe1xuICBtYWdpYzogbnVsbCxcbn0pO1xuXG5jb25zdCBNYWdpY1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW21hZ2ljLCBzZXRNYWdpY10gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICAvLyBjb25zdCBbY29ubmVjdGlvbiwgc2V0Q29ubmVjdGlvbl0gPSB1c2VTdGF0ZTxDb25uZWN0aW9uIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgcnBjVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcblxuICBjb25zdCBjdXN0b21UZXN0bmV0Tm9kZU9wdGlvbnMgPSB7XG4gICAgcnBjVXJsOiBcImh0dHBzOi8vcnBjLW11bWJhaS5tYXRpY3ZpZ2lsLmNvbS9cIiwgLy8gUG9seWdvbiBSUEMgVVJMXG4gICAgY2hhaW5JZDogODAwMDEsIC8vIFBvbHlnb24gY2hhaW4gaWRcbiAgfTtcblxuICBjb25zdCBjdXN0b21Ob2RlT3B0aW9ucyA9IHtcbiAgICBycGNVcmw6IFwiaHR0cHM6Ly9wb2x5Z29uLXJwYy5jb20vXCIsIC8vIFBvbHlnb24gUlBDIFVSTFxuICAgIGNoYWluSWQ6IDEzNywgLy8gUG9seWdvbiBjaGFpbiBpZFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0FQSV9LRVkpIHtcbiAgICAgIGNvbnN0IHBrID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFHSUNfQVBJX0tFWTtcbiAgICAgIGNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljQmFzZShwaywge1xuICAgICAgICBuZXR3b3JrOiBjdXN0b21UZXN0bmV0Tm9kZU9wdGlvbnMsXG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihycGNVUkwhKTtcbiAgICAgIHNldE1hZ2ljKG1hZ2ljKTtcbiAgICAgIC8vIHNldENvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgfVxuICB9LCBbcnBjVVJMXSk7XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFnaWMsXG4gICAgfTtcbiAgfSwgW21hZ2ljXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFnaWNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvTWFnaWNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZU1hZ2ljID0gKCkgPT4gdXNlQ29udGV4dChNYWdpY0NvbnRleHQpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY1Byb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIk1hZ2ljIiwiTWFnaWNCYXNlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJNYWdpY0NvbnRleHQiLCJtYWdpYyIsIk1hZ2ljUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldE1hZ2ljIiwicnBjVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JQQ19VUkwiLCJjdXN0b21UZXN0bmV0Tm9kZU9wdGlvbnMiLCJycGNVcmwiLCJjaGFpbklkIiwiY3VzdG9tTm9kZU9wdGlvbnMiLCJORVhUX1BVQkxJQ19NQUdJQ19BUElfS0VZIiwicGsiLCJuZXR3b3JrIiwidmFsdWUiLCJQcm92aWRlciIsInVzZU1hZ2ljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/MagicProvider.tsx\n");

/***/ }),

/***/ "./contexts/PolygonProvider.tsx":
/*!**************************************!*\
  !*** ./contexts/PolygonProvider.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PolygonProvider: () => (/* binding */ PolygonProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynamic-labs/ethereum */ \"@dynamic-labs/ethereum\");\n/* harmony import */ var _dynamic_labs_magic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynamic-labs/magic */ \"@dynamic-labs/magic\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_2__, _dynamic_labs_magic__WEBPACK_IMPORTED_MODULE_3__]);\n([_dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_2__, _dynamic_labs_magic__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst DCP = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @dynamic-labs/sdk-react-core */ \"@dynamic-labs/sdk-react-core\")).then((mod)=>mod.DynamicContextProvider), {\n    loadableGenerated: {\n        modules: [\n            \"../contexts/PolygonProvider.tsx -> \" + \"@dynamic-labs/sdk-react-core\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/contexts/PolygonProvider.tsx\",\n            lineNumber: 19,\n            columnNumber: 20\n        }, undefined)\n});\nconst PolygonProvider = ({ children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DCP, {\n        settings: {\n            environmentId: \"5fef0973-9253-4abe-8cc9-9628eb4184bd\",\n            // walletConnectorExtensions: [EthersExtension],\n            walletConnectors: [\n                _dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_2__.EthereumWalletConnectors,\n                _dynamic_labs_magic__WEBPACK_IMPORTED_MODULE_3__.MagicWalletConnectors\n            ],\n            cssOverrides: `\n          .connect-button {\n            width: 100%;\n            padding: 0.75rem;\n          }\n        `\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/contexts/PolygonProvider.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Qb2x5Z29uUHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBUStCO0FBQ047QUFFNUQsTUFBTUcsTUFBTUgsbURBQU9BLENBQ2pCLElBQ0Usd0pBQXNDLENBQUNJLElBQUksQ0FDekMsQ0FBQ0MsTUFBUUEsSUFBSUMsc0JBQXNCOzs7Ozs7SUFHckNDLEtBQUs7SUFDTEMsU0FBUyxrQkFBTSw4REFBQ0M7c0JBQUU7Ozs7Ozs7QUFJZixNQUFNQyxrQkFBK0MsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkUscUJBQ0UsOERBQUNSO1FBQ0NTLFVBQVU7WUFDUkMsZUFBZTtZQUNmLGdEQUFnRDtZQUNoREMsa0JBQWtCO2dCQUFDYiw0RUFBd0JBO2dCQUFFQyxzRUFBcUJBO2FBQUM7WUFDbkVhLGNBQWMsQ0FBQzs7Ozs7UUFLZixDQUFDO1FBQ0g7a0JBRUNKOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYml0LWJlbmRlci1kYXNoYm9hcmQvLi9jb250ZXh0cy9Qb2x5Z29uUHJvdmlkZXIudHN4P2FiM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgRkMsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRHluYW1pY0NvbnRleHRQcm92aWRlcixcbiAgRHluYW1pY1dpZGdldCxcbn0gZnJvbSBcIkBkeW5hbWljLWxhYnMvc2RrLXJlYWN0LWNvcmVcIjtcbmltcG9ydCB7IEV0aGVyc0V4dGVuc2lvbiB9IGZyb20gXCJAZHluYW1pYy1sYWJzL2V0aGVycy12NVwiO1xuaW1wb3J0IHsgRHluYW1pY1dhZ21pQ29ubmVjdG9yIH0gZnJvbSBcIkBkeW5hbWljLWxhYnMvd2FnbWktY29ubmVjdG9yXCI7XG5pbXBvcnQgeyBFdGhlcmV1bVdhbGxldENvbm5lY3RvcnMgfSBmcm9tIFwiQGR5bmFtaWMtbGFicy9ldGhlcmV1bVwiO1xuaW1wb3J0IHsgTWFnaWNXYWxsZXRDb25uZWN0b3JzIH0gZnJvbSBcIkBkeW5hbWljLWxhYnMvbWFnaWNcIjtcblxuY29uc3QgRENQID0gZHluYW1pYyhcbiAgKCkgPT5cbiAgICBpbXBvcnQoXCJAZHluYW1pYy1sYWJzL3Nkay1yZWFjdC1jb3JlXCIpLnRoZW4oXG4gICAgICAobW9kKSA9PiBtb2QuRHluYW1pY0NvbnRleHRQcm92aWRlclxuICAgICksXG4gIHtcbiAgICBzc3I6IGZhbHNlLFxuICAgIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+LFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgUG9seWdvblByb3ZpZGVyOiBGQzx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERDUFxuICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgZW52aXJvbm1lbnRJZDogXCI1ZmVmMDk3My05MjUzLTRhYmUtOGNjOS05NjI4ZWI0MTg0YmRcIixcbiAgICAgICAgLy8gd2FsbGV0Q29ubmVjdG9yRXh0ZW5zaW9uczogW0V0aGVyc0V4dGVuc2lvbl0sXG4gICAgICAgIHdhbGxldENvbm5lY3RvcnM6IFtFdGhlcmV1bVdhbGxldENvbm5lY3RvcnMsIE1hZ2ljV2FsbGV0Q29ubmVjdG9yc10sXG4gICAgICAgIGNzc092ZXJyaWRlczogYFxuICAgICAgICAgIC5jb25uZWN0LWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EQ1A+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJFdGhlcmV1bVdhbGxldENvbm5lY3RvcnMiLCJNYWdpY1dhbGxldENvbm5lY3RvcnMiLCJEQ1AiLCJ0aGVuIiwibW9kIiwiRHluYW1pY0NvbnRleHRQcm92aWRlciIsInNzciIsImxvYWRpbmciLCJwIiwiUG9seWdvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXR0aW5ncyIsImVudmlyb25tZW50SWQiLCJ3YWxsZXRDb25uZWN0b3JzIiwiY3NzT3ZlcnJpZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/PolygonProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _contexts_PolygonProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/PolygonProvider */ \"./contexts/PolygonProvider.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _contexts_MagicProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/MagicProvider */ \"./contexts/MagicProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _contexts_PolygonProvider__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _styles_theme__WEBPACK_IMPORTED_MODULE_6__, _contexts_MagicProvider__WEBPACK_IMPORTED_MODULE_7__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _contexts_PolygonProvider__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _styles_theme__WEBPACK_IMPORTED_MODULE_6__, _contexts_MagicProvider__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_PolygonProvider__WEBPACK_IMPORTED_MODULE_4__.PolygonProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_MagicProvider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n                    client: queryClient,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFMkM7QUFDdkI7QUFDVztBQUNuQjtBQUNQO0FBQ2tCO0FBRXJELE1BQU1PLGNBQWMsSUFBSVAsOERBQVdBO0FBRXBCLFNBQVNRLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNQLHNFQUFlQTtrQkFDZCw0RUFBQ0csK0RBQWFBO3NCQUNaLDRFQUFDSiw0REFBY0E7Z0JBQUNHLE9BQU9BLHFEQUFLQTswQkFDMUIsNEVBQUNKLHNFQUFtQkE7b0JBQUNVLFFBQVFKOztzQ0FDM0IsOERBQUNFOzRCQUFXLEdBQUdDLFNBQVM7Ozs7OztzQ0FDeEIsOERBQUNOLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXQtYmVuZGVyLWRhc2hib2FyZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUG9seWdvblByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dHMvUG9seWdvblByb3ZpZGVyXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IE1hZ2ljUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dHMvTWFnaWNQcm92aWRlclwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQb2x5Z29uUHJvdmlkZXI+XG4gICAgICA8TWFnaWNQcm92aWRlcj5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvTWFnaWNQcm92aWRlcj5cbiAgICA8L1BvbHlnb25Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsIlBvbHlnb25Qcm92aWRlciIsIlRvYXN0ZXIiLCJ0aGVtZSIsIk1hZ2ljUHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        primary: \"#F3F6FB\",\n        black: \"#000000\",\n        white: \"#FFFFFF\",\n        gray: \"#A0A0A0\",\n        lightGray: \"#F3F6FB\",\n        darkerGray: \"#233EFF\",\n        input: \"#040825\",\n        background: \"#050A30\",\n        darkerBlue: \"#040825\",\n        lightBlue: \"#233EFF\"\n    },\n    fonts: {\n        body: \"Montserrat, sans-serif\",\n        heading: \"IBM Plex Mono, monospace\"\n    },\n    blacks: {\n        400: \"#2D2D2D\",\n        500: \"#1B1A1A\",\n        600: \"#151414\",\n        700: \"#0D0D0D\"\n    },\n    green: {\n        700: \"#00BF63\"\n    },\n    red: {\n        700: \"#FF3131\"\n    },\n    components: {\n        Input: {\n            baseStyle: (props)=>({\n                    field: {\n                        color: props.colorMode === \"dark\" ? \"white\" : \"gray.800\",\n                        _focus: {\n                            boxShadow: \"none\"\n                        },\n                        \"::-webkit-calendar-picker-indicator\": {\n                            cursor: \"pointer\",\n                            filter: \"invert(1)\"\n                        }\n                    }\n                })\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsUUFBUUQsNkRBQVdBLENBQUM7SUFDeEJFLFFBQVE7UUFDTkMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsV0FBVztJQUNiO0lBQ0FDLE9BQU87UUFDTEMsTUFBTTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsUUFBUTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFDUDtJQUNBQyxPQUFPO1FBQ0wsS0FBSztJQUNQO0lBQ0FDLEtBQUs7UUFDSCxLQUFLO0lBQ1A7SUFDQUMsWUFBWTtRQUNWQyxPQUFPO1lBQ0xDLFdBQVcsQ0FBQ0MsUUFBa0M7b0JBQzVDQyxPQUFPO3dCQUNMQyxPQUFPRixNQUFNRyxTQUFTLEtBQUssU0FBUyxVQUFVO3dCQUM5Q0MsUUFBUTs0QkFBRUMsV0FBVzt3QkFBTzt3QkFDNUIsdUNBQXVDOzRCQUNyQ0MsUUFBUTs0QkFFUkMsUUFBUTt3QkFDVjtvQkFDRjtnQkFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlNUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpdC1iZW5kZXItZGFzaGJvYXJkLy4vc3R5bGVzL3RoZW1lLnRzPzY5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogXCIjRjNGNkZCXCIsXG4gICAgYmxhY2s6IFwiIzAwMDAwMFwiLFxuICAgIHdoaXRlOiBcIiNGRkZGRkZcIixcbiAgICBncmF5OiBcIiNBMEEwQTBcIixcbiAgICBsaWdodEdyYXk6IFwiI0YzRjZGQlwiLFxuICAgIGRhcmtlckdyYXk6IFwiIzIzM0VGRlwiLFxuICAgIGlucHV0OiBcIiMwNDA4MjVcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwNTBBMzBcIixcbiAgICBkYXJrZXJCbHVlOiBcIiMwNDA4MjVcIixcbiAgICBsaWdodEJsdWU6IFwiIzIzM0VGRlwiLFxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6IFwiTW9udHNlcnJhdCwgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiSUJNIFBsZXggTW9ubywgbW9ub3NwYWNlXCIsXG4gIH0sXG4gIGJsYWNrczoge1xuICAgIDQwMDogXCIjMkQyRDJEXCIsXG4gICAgNTAwOiBcIiMxQjFBMUFcIixcbiAgICA2MDA6IFwiIzE1MTQxNFwiLFxuICAgIDcwMDogXCIjMEQwRDBEXCIsXG4gIH0sXG4gIGdyZWVuOiB7XG4gICAgNzAwOiBcIiMwMEJGNjNcIixcbiAgfSxcbiAgcmVkOiB7XG4gICAgNzAwOiBcIiNGRjMxMzFcIixcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIElucHV0OiB7XG4gICAgICBiYXNlU3R5bGU6IChwcm9wczogeyBjb2xvck1vZGU6IHN0cmluZyB9KSA9PiAoe1xuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvck1vZGUgPT09IFwiZGFya1wiID8gXCJ3aGl0ZVwiIDogXCJncmF5LjgwMFwiLFxuICAgICAgICAgIF9mb2N1czogeyBib3hTaGFkb3c6IFwibm9uZVwiIH0sXG4gICAgICAgICAgXCI6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvclwiOiB7XG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuXG4gICAgICAgICAgICBmaWx0ZXI6IFwiaW52ZXJ0KDEpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJibGFjayIsIndoaXRlIiwiZ3JheSIsImxpZ2h0R3JheSIsImRhcmtlckdyYXkiLCJpbnB1dCIsImJhY2tncm91bmQiLCJkYXJrZXJCbHVlIiwibGlnaHRCbHVlIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsImJsYWNrcyIsImdyZWVuIiwicmVkIiwiY29tcG9uZW50cyIsIklucHV0IiwiYmFzZVN0eWxlIiwicHJvcHMiLCJmaWVsZCIsImNvbG9yIiwiY29sb3JNb2RlIiwiX2ZvY3VzIiwiYm94U2hhZG93IiwiY3Vyc29yIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@dynamic-labs/ethereum":
/*!*****************************************!*\
  !*** external "@dynamic-labs/ethereum" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@dynamic-labs/ethereum");;

/***/ }),

/***/ "@dynamic-labs/magic":
/*!**************************************!*\
  !*** external "@dynamic-labs/magic" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@dynamic-labs/magic");;

/***/ }),

/***/ "@dynamic-labs/sdk-react-core":
/*!***********************************************!*\
  !*** external "@dynamic-labs/sdk-react-core" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@dynamic-labs/sdk-react-core");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("magic-sdk");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();