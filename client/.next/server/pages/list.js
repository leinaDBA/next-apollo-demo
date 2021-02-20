module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/list.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.module.css":
/*!************************************!*\
  !*** ./components/Card.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__Onj16\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQubW9kdWxlLmNzcz80YWRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX19PbmoxNlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.module.css\n");

/***/ }),

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/le15/IdeaProjects/next-apollo-demo/client/components/Card.tsx\";\n// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\n\n\nconst Card = ({\n  name,\n  email,\n  address,\n  phone\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: email\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: phone\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQudHN4P2M5NjAiXSwibmFtZXMiOlsiQ2FyZCIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJwaG9uZSIsInN0eWxlcyIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLFNBQWY7QUFBd0JDO0FBQXhCLENBQUQsS0FBNkM7QUFDeEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHVEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBTUw7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSxnQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQSxnQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7QUFXZUosbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmQgPSAoeyBuYW1lLCBlbWFpbCwgYWRkcmVzcywgcGhvbmUgfTogUGVyc29uKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxkaXY+e25hbWV9PC9kaXY+XG4gICAgICA8ZGl2PntlbWFpbH08L2Rpdj5cbiAgICAgIDxkaXY+e2FkZHJlc3N9PC9kaXY+XG4gICAgICA8ZGl2PntwaG9uZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ }),

/***/ "./lib/with-apollo.ts":
/*!****************************!*\
  !*** ./lib/with-apollo.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__[\"createHttpLink\"])({\n  uri: 'http://localhost:5000/graphql'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(({\n  initialState\n}) => new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  link,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]().restore(initialState || {})\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aC1hcG9sbG8udHM/YzBkOSJdLCJuYW1lcyI6WyJsaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJ3aXRoQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQSxNQUFNQSxJQUFJLEdBQUlDLHVFQUFjLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUE1QjtBQUVlQyxzSEFBVSxDQUN2QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNFLElBQUlDLDJEQUFKLENBQWlCO0FBQ2ZMLE1BRGU7QUFFZk0sT0FBSyxFQUFFLElBQUlDLDREQUFKLEdBQW9CQyxPQUFwQixDQUE0QkosWUFBWSxJQUFJLEVBQTVDO0FBRlEsQ0FBakIsQ0FGcUIsQ0FBekIiLCJmaWxlIjoiLi9saWIvd2l0aC1hcG9sbG8udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aEFwb2xsbywgeyBJbml0QXBvbGxvT3B0aW9ucyB9IGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IEFwb2xsb0NhY2hlLCBBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEluTWVtb3J5Q2FjaGUsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IFdpdGhBcG9sbG9Qcm9wcyB9IGZyb20gJ25leHQtd2l0aC1hcG9sbG8vbGliL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQXBvbGxvUHJvcHMgPSBXaXRoQXBvbGxvUHJvcHM8QXBvbGxvQ2FjaGU8Tm9ybWFsaXplZENhY2hlT2JqZWN0Pj47XG5cbmNvbnN0IGxpbmsgPSAoY3JlYXRlSHR0cExpbmsoeyB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbCcgfSkgYXMgdW5rbm93bikgYXMgQXBvbGxvTGluaztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhcbiAgKHsgaW5pdGlhbFN0YXRlIH06IEluaXRBcG9sbG9PcHRpb25zPE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4pID0+XG4gICAgbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBsaW5rLFxuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCkucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pLFxuICAgIH0pLFxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/with-apollo.ts\n");

/***/ }),

/***/ "./pages/list.module.css":
/*!*******************************!*\
  !*** ./pages/list.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"list_container__2S9Gm\",\n\t\"stickyButton\": \"list_stickyButton__3kxEI\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0Lm1vZHVsZS5jc3M/YWJkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvbGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGlzdF9jb250YWluZXJfXzJTOUdtXCIsXG5cdFwic3RpY2t5QnV0dG9uXCI6IFwibGlzdF9zdGlja3lCdXR0b25fXzNreEVJXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/list.module.css\n");

/***/ }),

/***/ "./pages/list.tsx":
/*!************************!*\
  !*** ./pages/list.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.tsx\");\n/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.module.css */ \"./pages/list.module.css\");\n/* harmony import */ var _list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_list_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_with_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/with-apollo */ \"./lib/with-apollo.ts\");\n\n\n\nvar _jsxFileName = \"/Users/le15/IdeaProjects/next-apollo-demo/client/pages/list.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-ignore\n\n\n\nconst query = _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"gql\"]`\n  query {\n    list {\n      name\n      address\n      email\n      phone\n    }\n  }\n`;\n\nconst CardGrid = () => {\n  const {\n    0: cardData,\n    1: setCardData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    refetch\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(query, {\n    onCompleted: ({\n      list\n    }) => setCardData([...cardData, ...list]),\n    notifyOnNetworkStatusChange: true\n  });\n\n  if (!cardData) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  const loadMore = async () => {\n    await refetch();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stickyButton,\n      onClick: loadMore,\n      children: \"Load more cards\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: cardData.map((person, index) => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread(_objectSpread({}, person), {}, {\n        key: index,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }\n      })))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst ApolloContext = ({\n  apollo\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n  client: apollo,\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardGrid, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 50,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_with_apollo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ApolloContext));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0LnRzeD83NzQ5Il0sIm5hbWVzIjpbInF1ZXJ5IiwiZ3FsIiwiQ2FyZEdyaWQiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwidXNlU3RhdGUiLCJyZWZldGNoIiwidXNlUXVlcnkiLCJvbkNvbXBsZXRlZCIsImxpc3QiLCJub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJsb2FkTW9yZSIsInN0eWxlcyIsInN0aWNreUJ1dHRvbiIsImNvbnRhaW5lciIsIm1hcCIsInBlcnNvbiIsImluZGV4IiwiQXBvbGxvQ29udGV4dCIsImFwb2xsbyIsIldpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxrREFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTs7QUFXQSxNQUFNQyxRQUFRLEdBQUcsTUFBbUI7QUFDbEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBFQyxzREFBUSxDQUFXLEVBQVgsQ0FBeEY7QUFFQSxRQUFNO0FBQUVDO0FBQUYsTUFBMkJDLCtEQUFRLENBQUNQLEtBQUQsRUFBUTtBQUMvQ1EsZUFBVyxFQUFFLENBQUM7QUFBRUM7QUFBRixLQUFELEtBQWtDTCxXQUFXLENBQUMsQ0FBQyxHQUFHRCxRQUFKLEVBQWMsR0FBR00sSUFBakIsQ0FBRCxDQURYO0FBRS9DQywrQkFBMkIsRUFBRTtBQUZrQixHQUFSLENBQXpDOztBQUtBLE1BQUksQ0FBQ1AsUUFBTCxFQUFlO0FBQ2Isd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxRQUFNUSxRQUFRLEdBQUcsWUFBMkI7QUFDMUMsVUFBTUwsT0FBTyxFQUFiO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLDRCQUNFO0FBQVEsZUFBUyxFQUFFTSx1REFBTSxDQUFDQyxZQUExQjtBQUF3QyxhQUFPLEVBQUVGLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVDLHVEQUFNLENBQUNFLFNBQXZCO0FBQUEsZ0JBQ0dYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLENBQUNDLE1BQUQsRUFBaUJDLEtBQWpCLGtCQUNaLDREQUFDLHdEQUFELGtDQUFVRCxNQUFWO0FBQWtCLFdBQUcsRUFBRUMsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBLGtCQURGO0FBWUQsQ0EzQkQ7O0FBNkJBLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDcEIscUVBQUMsNkRBQUQ7QUFBZ0IsUUFBTSxFQUFFQSxNQUF4QjtBQUFBLHlCQUNFLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFNZUMsK0hBQVUsQ0FBQ0YsYUFBRCxDQUF6QiIsImZpbGUiOiIuL3BhZ2VzL2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdxbCwgUXVlcnlSZXN1bHQsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkLCB7IFBlcnNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBXaXRoQXBvbGxvLCB7IEFwb2xsb1Byb3BzIH0gZnJvbSAnLi4vbGliL3dpdGgtYXBvbGxvJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBsaXN0IHtcbiAgICAgIG5hbWVcbiAgICAgIGFkZHJlc3NcbiAgICAgIGVtYWlsXG4gICAgICBwaG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ2FyZEdyaWQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXTogW1BlcnNvbltdLCBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxQZXJzb25bXT4+XSA9IHVzZVN0YXRlPFBlcnNvbltdPihbXSk7XG5cbiAgY29uc3QgeyByZWZldGNoIH06IFF1ZXJ5UmVzdWx0ID0gdXNlUXVlcnkocXVlcnksIHtcbiAgICBvbkNvbXBsZXRlZDogKHsgbGlzdCB9OiB7IGxpc3Q6IFBlcnNvbltdIH0pID0+IHNldENhcmREYXRhKFsuLi5jYXJkRGF0YSwgLi4ubGlzdF0pLFxuICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcbiAgfSk7XG5cbiAgaWYgKCFjYXJkRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gIH1cblxuICBjb25zdCBsb2FkTW9yZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCByZWZldGNoKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RpY2t5QnV0dG9ufSBvbkNsaWNrPXtsb2FkTW9yZX0+XG4gICAgICAgIExvYWQgbW9yZSBjYXJkc1xuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtjYXJkRGF0YS5tYXAoKHBlcnNvbjogUGVyc29uLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPENhcmQgey4uLnBlcnNvbn0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IEFwb2xsb0NvbnRleHQgPSAoeyBhcG9sbG8gfTogQXBvbGxvUHJvcHMpOiBKU1guRWxlbWVudCA9PiAoXG4gIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4gICAgPENhcmRHcmlkIC8+XG4gIDwvQXBvbGxvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoQXBvbGxvKEFwb2xsb0NvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-with-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCI/YmE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LXdpdGgtYXBvbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-with-apollo\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });