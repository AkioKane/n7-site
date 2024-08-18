/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkn7_site"] = self["webpackChunkn7_site"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Regular.ttf */ \"./src/fonts/Roboto/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Noto_Sans_SignWriting/NotoSansSignWriting-Regular.ttf */ \"./src/fonts/Noto_Sans_SignWriting/NotoSansSignWriting-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Kay_Pho_Du/KayPhoDu-Regular.ttf */ \"./src/fonts/Kay_Pho_Du/KayPhoDu-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito/Nunito-VariableFont_wght.ttf */ \"./src/fonts/Nunito/Nunito-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/back.webp */ \"./src/assets/back.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n  font-family: \"Nato Sans\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n@font-face {\n  font-family: \"Kay\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n@font-face {\n  font-family: \"Nunito\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n:root {\n  --main-size: 100vh;\n  --header-size: 7em;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1,\nul {\n  font-family: \"Nunito\";\n}\n\nh3 {\n  font-family: \"Kay\";\n  font-size: 1.25rem;\n}\n\np {\n  font-family: \"Kay\";\n}\n\nbody {\n  background-color: rgb(87, 87, 87);\n  overflow: hidden;\n  animation: load 0.6s;\n}\n\nbody.load-scroll {\n  overflow: hidden;\n}\n\nul {\n  display: flex;\n  gap: 2em;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  font-family: \"Nunito\";\n}\n\n.main {\n  color: white;\n  min-height: var(--main-size);\n  transition: background-image 0.9s ease-in-out;\n  transition: opacity 1s ease-in-out;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  animation: load 1s;\n}\n\n.main * {\n  animation: load 0.5s;\n}\n\n.loaded::before {\n  opacity: 1;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: var(--header-size);\n}\n\nheader .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1em;\n  height: 90%;\n}\n\nheader .line {\n  border: 1px solid white;\n  color: white;\n}\n\nnav {\n  margin-bottom: 0.5em;\n}\n\nheader li {\n  transition: all 0.15s ease-in-out;\n  margin-bottom: 5px;\n  cursor: default;\n}\n\nheader li:hover {\n  transform: translateY(-5px);\n}\n\n.head-li:active {\n  scale: 1.1;\n}\n\n.hover-li {\n  border-bottom: 2px solid white;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(var(--main-size) - var(--header-size));\n}\n\n#content.load-content {\n  overflow: hidden;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 3px solid #27272a;\n  border-radius: 16px;\n  background-color: #18181b;\n  height: 500px;\n  max-width: 700px;\n  width: 60%;\n  min-width: 550px;\n  opacity: 0.925;\n  gap: 1em;\n}\n\n.container h1 {\n  margin-top: 1em;\n}\n\n.container p {\n  font-size: 1.15rem;\n}\n\n.container img {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin: 1.5em;\n  object-fit: cover;\n}\n\n.discord-button {\n  display: flex;\n  border: 2px solid #404040;\n  border-radius: 5px;\n  background-color: #262626;\n  color: white;\n  width: 35%;\n  height: 2em;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.discord-button:active {\n  scale: 1.1;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(300px, 1fr));\n  grid-template-rows: repeat(3, minmax(250px, 1fr));\n  gap: 2em;\n  margin-top: 2em;\n  margin-left: 2em;\n  margin-right: 2em;\n  width: calc(100% - 4em);\n  height: calc(100% - 2em);\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n  border-radius: 15px;\n  background-color: #262626;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 130% auto;\n  transition: all 0.3s ease-in-out;\n}\n\n.item:hover {\n  scale: 1.05;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: #262626;\n  border-radius: 0 0 8px 8px;\n  height: 20%;\n  transition: all 0.3s ease-in-out;\n}\n\n.footer * {\n  margin-left: 0.5em;\n}\n\n.footer:hover {\n  background-color: #9e0707;\n}\n\n.footer div {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer p {\n  font-family: \"Nunito\";\n}\n\n.footer button {\n  display: flex;\n  height: 100%;\n  width: 30%;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Nunito\";\n  transition: all 0.3s ease-in-outW;\n  border-radius: 0 0 8px 0;\n  border: none;\n  background-color: #262626;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n\n.div-text {\n  display: none;\n  background-color: #18181b;\n  opacity: 0.975;\n  height: calc(100% - 20%);\n  width: 100%;\n  border-radius: 15px 15px 0 0;\n  transition: all 0.3s ease-in-out;\n}\n\n.div-text p {\n  margin: 1em ;\n  font-family: \"Roboto\";\n}\n\n@keyframes load {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://n7-site/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://n7-site/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://n7-site/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://n7-site/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://n7-site/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://n7-site/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_load_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_back_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/back.webp */ \"./src/assets/back.webp\");\n/* harmony import */ var _assets_back1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/back1.jpg */ \"./src/assets/back1.jpg\");\n/* harmony import */ var _assets_kurtted_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/kurtted.gif */ \"./src/assets/kurtted.gif\");\n/* harmony import */ var _assets_illarionz_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/illarionz.jpg */ \"./src/assets/illarionz.jpg\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://n7-site/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ (() => {

eval("window.addEventListener('load', () => {\n  const background = document.querySelector('.main');\n  background.classList.add('loaded');\n  background.style.opacity = \"1\"\n  setTimeout(function() {\n    document.body.classList.remove(\"load-scroll\")\n  }, 500)\n});\n\n//# sourceURL=webpack://n7-site/./src/load.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const container = document.querySelector(\"#content\");\nconst headLi = document.querySelectorAll(\".head-li\");\nconst gridContainer = document.querySelector(\".grid-container\")\nconst linkItem = document.querySelector(\".link-item\")\nconst opened = document.querySelector(\".opened\")\nconst main = document.querySelector(\".main\")\n\nfunction clear() {\n  return container.innerHTML = \"\";\n};\n\nfunction loadHome() {\n  const content = document.createElement(\"div\");\n  content.classList.add(\"container\");\n  container.appendChild(content);\n\n  const h1 = document.createElement(\"h1\");\n  h1.innerHTML = \"Join to the channel\";\n  content.appendChild(h1)\n\n  const p = document.createElement(\"p\");\n  p.innerHTML = \"This is a Russian community of gamers.\";\n  content.appendChild(p);\n\n  const img = document.createElement(\"img\");\n  img.src = './assets/logo.png';\n  img.alt = 'logo';\n  content.appendChild(img);\n\n  const a = document.createElement(\"a\");\n  a.href = \"https://discord.gg/j3KxS685wp\";\n  a.classList.add(\"discord-button\");\n  a.target = \"_blank\";\n  a.innerHTML = \"Join To\";\n  content.appendChild(a);\n};\n\nfunction loadShop(name, description, infoDecription, filename) {\n  const content = document.createElement(\"div\");\n  content.classList.add(\"grid-container\");\n  container.appendChild(content);\n\n  const item = document.createElement(\"div\");\n  item.classList.add(\"item\");\n  item.style.backgroundImage = `url(\"${filename}\")`;\n  content.appendChild(item);\n\n  const divText = document.createElement(\"div\");\n  divText.classList.add(\"div-text\");\n  item.appendChild(divText);\n\n  const infoText = document.createElement(\"p\");\n  infoText.innerHTML = infoDecription;\n  divText.appendChild(infoText);\n\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  item.appendChild(footer);\n\n  const div = document.createElement(\"div\");\n  footer.appendChild(div);\n\n  const h3 = document.createElement(\"h3\");\n  h3.innerHTML = name;\n  div.appendChild(h3);\n\n  const p = document.createElement(\"p\");\n  p.innerHTML = description;\n  div.appendChild(p);\n\n  const a = document.createElement(\"button\");\n  a.classList.add(\"link-item\")\n  footer.appendChild(a);\n\n  const h4 = document.createElement(\"h4\");\n  h4.innerHTML = \"Читать\";\n  a.appendChild(h4);\n\n  footer.addEventListener(\"mouseover\", () => {\n    a.style.backgroundColor = \"#9e0707\";\n  });\n  footer.addEventListener(\"mouseout\", () => {\n    a.style.backgroundColor = \"#262626\";\n  });\n  a.addEventListener(\"mousedown\", () => {\n    if (a.classList.contains(\"opened\")) {\n      divText.style.opacity = \"0\";\n      setTimeout(function() {\n        divText.style.display = \"none\";\n      }, 300)\n      a.classList.remove(\"opened\")\n    } else {\n      divText.style.display = \"block\";\n      divText.style.opacity = \"0.975\";\n      a.classList.add(\"opened\");\n    }\n    \n  });\n};\n\nloadHome();\n\nlet illarionz = \"Крутой тип с фасика.\"\n\nheadLi.forEach(element => {\n  element.addEventListener(\"click\", (event) => {\n    if (event.target.id == \"home\") {\n      clear();\n      main.style.backgroundImage = 'url(\"./assets/back.webp\")';\n      loadHome();\n    } else if (event.target.id == \"news\") {\n      clear()\n      main.style.backgroundImage = 'url(\"./assets/back1.jpg\")'\n      loadShop(\"Illarionz\", \"Owner N7\", illarionz, \"./assets/illarionz.jpg\");\n    } else if (event.target.id == \"info\") {\n      // function loadInfo\n    }\n  })\n});\n\n//# sourceURL=webpack://n7-site/./src/script.js?");

/***/ }),

/***/ "./src/assets/back.webp":
/*!******************************!*\
  !*** ./src/assets/back.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/back.webp\";\n\n//# sourceURL=webpack://n7-site/./src/assets/back.webp?");

/***/ }),

/***/ "./src/assets/back1.jpg":
/*!******************************!*\
  !*** ./src/assets/back1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/back1.jpg\";\n\n//# sourceURL=webpack://n7-site/./src/assets/back1.jpg?");

/***/ }),

/***/ "./src/assets/illarionz.jpg":
/*!**********************************!*\
  !*** ./src/assets/illarionz.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/illarionz.jpg\";\n\n//# sourceURL=webpack://n7-site/./src/assets/illarionz.jpg?");

/***/ }),

/***/ "./src/assets/kurtted.gif":
/*!********************************!*\
  !*** ./src/assets/kurtted.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/kurtted.gif\";\n\n//# sourceURL=webpack://n7-site/./src/assets/kurtted.gif?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/logo.png\";\n\n//# sourceURL=webpack://n7-site/./src/assets/logo.png?");

/***/ }),

/***/ "./src/fonts/Kay_Pho_Du/KayPhoDu-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Kay_Pho_Du/KayPhoDu-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/KayPhoDu-Regular.ttf\";\n\n//# sourceURL=webpack://n7-site/./src/fonts/Kay_Pho_Du/KayPhoDu-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Noto_Sans_SignWriting/NotoSansSignWriting-Regular.ttf":
/*!*************************************************************************!*\
  !*** ./src/fonts/Noto_Sans_SignWriting/NotoSansSignWriting-Regular.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/NotoSansSignWriting-Regular.ttf\";\n\n//# sourceURL=webpack://n7-site/./src/fonts/Noto_Sans_SignWriting/NotoSansSignWriting-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Nunito/Nunito-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/Nunito/Nunito-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Nunito-VariableFont_wght.ttf\";\n\n//# sourceURL=webpack://n7-site/./src/fonts/Nunito/Nunito-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://n7-site/./src/fonts/Roboto/Roboto-Regular.ttf?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);