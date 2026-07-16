/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Caudex&family=RocknRoll+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Background */\ncanvas {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #05070f;\n    z-index: -1;\n}\n\n/* App */\nbody {\n    font-family: \"RocknRoll One\";\n    color: white;\n}\n\n/* Header */\nsvg {\n    width: 40px;\n    height: 40px;\n    fill: #05070f;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 40px;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n}\n\nheader img {\n    border-radius: 50%;\n    width: 100px;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n}\n\n.search {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    padding: 10px;\n    border-radius: 15px;\n}\n\n.search input {\n    color: #05070f;\n    font-family: \"RocknRoll One\";\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 2rem;\n    width: 500px;\n}\n\n.search button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: transform 0.3s ease;\n} \n\n.search button:hover {\n    transform: scale(1.2);\n}\n\n.search button:active {\n    transform: scale(0.9);\n}\n\n/* Error Message */\n.error {\n    color: red;\n}\n\n/* Display informations */\n#content h1 {\n    text-align: center;\n    margin-top: 100px;\n    font-size: 5rem;\n    font-weight: bold;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 100px;\n}\n\n.weather-secondary {\n    background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));\n    box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.4);\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n    border-radius: 24px;\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    padding: 40px 32px 32px 32px;\n    position: relative;\n    z-index: 1;\n}\n\n.weather-main {\n    position: relative;\n    z-index: 2;\n    margin-bottom: -40px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 140px;\n    height: 140px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));\n    box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.4);\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-6deg);\n}\n\n.weather-stats {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n    margin-top: 60px;\n    max-width: 900px;\n}\n\n.stat-item {\n    background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    border-radius: 20px;\n    box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), 0 8px 24px rgba(0, 0, 0, 0.4);\n    padding: 20px 16px;\n    width: 130px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    transition: transform 0.3s ease;\n}\n\n.stat-item:hover {\n    transform: translateY(-8px);\n}\n\n.stat-sunrise {\n    margin-top: 0px;\n}\n\n.stat-sunset {\n    margin-top: 40px;\n}\n\n.stat-humidity {\n    margin-top: 15px;\n}\n\n.stat-windspeed {\n    margin-top: 55px;\n}\n\n.stat-uvindex {\n    margin-top: 5px;\n}\n\n.stat-tempmax {\n    margin-top: 30px;\n}\n\n.stat-tempmin {\n    margin-top: 20px;\n}\n\n.weather-forecast {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n    padding: 12px 0;\n    background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    z-index: 3;\n}\n\n.forecast-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    opacity: 0.75;\n    transition: opacity 0.3s ease;\n}\n\n.forecast-item:hover {\n    opacity: 1;\n}\n\n.forecast-icon {\n    font-size: 1.3rem;\n}\n\n.forecast-temp {\n    font-size: 0.85rem;\n    margin: 0;\n}\n\n@media (max-width: 600px) {\n    header {\n        padding: 20px;\n        flex-wrap: wrap;\n        gap: 16px;\n        justify-content: center;\n    }\n\n    header h1 {\n        font-size: 2rem;\n    }\n\n    header img {\n        width: 60px;\n    }\n\n    .search input {\n        width: 200px;\n        font-size: 1.2rem;\n    }\n\n    .weather-main {\n        margin-bottom: 0;\n        width: 100px;\n        height: 100px;\n        transform: none;\n    }\n\n    .weather-temp {\n        font-size: 1.3rem;\n    }\n\n    .weather-secondary {\n        padding: 24px 20px;\n        margin-top: 16px;\n    }\n\n    #content h1 {\n        font-size: 2.5rem;\n        margin-top: 0;\n    }\n\n    .weather-stats {\n        gap: 12px;\n    }\n\n    .stat-sunrise, .stat-sunset, .stat-humidity, .stat-windspeed, .stat-uvindex, .stat-tempmax, .stat-tempmin {\n        margin-top: 0;\n    }\n\n    .stat-item {\n        width: 100px;\n        padding: 14px 10px;\n    }\n\n    .weather-forecast {\n        justify-content: flex-start;\n        overflow-x: auto;\n        padding: 10px 16px;\n        gap: 16px;\n    }\n\n    .forecast-item {\n        flex-shrink: 0;\n    }\n\n    #content {\n        padding-bottom: 80px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather_app_odin/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather_app_odin/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather_app_odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_logo_sky_log_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo_sky_log.png */ \"./src/images/logo_sky_log.png\");\n\n\n\nconst key = \"SC4BWVDFLWVH4HLHVLDN8GU3C\";\nconst form = document.getElementById(\"form-search\")\nconst input = document.getElementById(\"input-search\");\nconst content = document.getElementById(\"content\");\n\nconst options = {\n    weekday: 'long',\n    day: 'numeric',\n    month: 'long',\n    year: 'numeric',\n};\n\nfunction celsius(f) {\n    return ((f -32) * 5/9).toFixed(2);\n}\n\nfunction getName(n) {\n    let name = '';\n\n    for (let i = 0; i < n.length; i++) {\n        if (n[i] === ',') return name;\n        name += n[i];\n    }\n    return name;\n}\n\nfunction getIcon(iconName) {\n    const allString = [\n        \"clear-day\", \"clear-night\", \"partly-cloudy-day\", \"partly-cloudy-night\", \"cloudy\", \"rain\", \"showers-day\", \"showers-night\",\n        \"thunder-rain\", \"thunder-showers-day\", \"thunder-showers-night\", \"snow\", \"snow-showers-day\", \"snow-showers-night\",\n        \"fog\", \"wind\", \"hail\"\n    ];\n    const allEmojis = [\n        '☀️', '🌙', '⛅', '☁️', '☁️', '🌧️', '🌦️', '🌧️', '⛈️', '⛈️', '⛈️', '❄️', '🌨️', '🌨️', '🌫️', '💨', '🌨️'\n    ];\n    for (let i = 0; i < allString.length; i++)\n        if (iconName === allString[i]) return allEmojis[i];\n    return '☀️';\n}\n\nclass City {\n    constructor(data) {\n        this.name = getName(data.resolvedAddress);\n        this.date = data.days[0].datetime;\n        this.temp = celsius(data.currentConditions.temp);\n        this.feel =  celsius(data.currentConditions.feelslike);\n        this.conditions = data.currentConditions.conditions;\n        this.sunrise = data.currentConditions.sunrise;\n        this.sunset = data.currentConditions.sunset;\n        this.humidity = data.currentConditions.humidity;\n        this.windspeed = data.currentConditions.windspeed;\n        this.uvindex = data.currentConditions.uvindex;\n        this.icon = data.currentConditions.icon;\n        this.description = data.description;\n        this.tempmax = celsius(data.days[0].tempmax);\n        this.tempmin = celsius(data.days[0].tempmin);\n\n        this.forecast = data.days.slice(1, 6);\n    }\n    \n    display() {\n        console.log(`Nom: ${this.name}`);\n        console.log(`Température: ${this.temp} ressenti ${this.feel}. ${this.conditions}`)\n        console.log(`Sunrise: ${this.sunrise} - Sunset: ${this.sunset}`);\n        content.innerHTML = `\n            <div class=\"weather-main\">\n                <span class=\"weather-icon\">${getIcon(this.icon)}</span>\n                <p class=\"weather-temp\">${this.temp}°C</p>\n            </div>\n            <div class=\"weather-secondary\">\n                <h1>${this.name}</h1>\n                <p class=\"weather-date\">${new Date(this.date + 'T00:00:00').toLocaleDateString('en-US', options)}</p>\n                <p class=\"wheater-feel\">Feels like ${this.feel}°C</p>\n                <p class=\"weather-description\">${this.conditions}. ${this.description}</p>\n            </div>\n            <div class=\"weather-stats\">\n                <div class=\"stat-item stat-sunrise\">\n                    <span class=\"stat-icon\">🌅</span>\n                    <p class=\"stat-label\">Sunrise</p>\n                    <p class=\"stat-value\">${this.sunrise}</p>\n                </div>\n                <div class=\"stat-item stat-sunset\">\n                    <span class=\"stat-icon\">🌇</span>\n                    <p class=\"stat-label\">Sunset</p>\n                    <p class=\"stat-value\">${this.sunset}</p>\n                </div>\n                <div class=\"stat-item stat-humidity\">\n                    <span class=\"stat-icon\">💧</span>\n                    <p class=\"stat-label\">Humidity</p>\n                    <p class=\"stat-value\">${this.humidity}%</p>\n                </div>\n                <div class=\"stat-item stat-windspeed\">\n                    <span class=\"stat-icon\">💨</span>\n                    <p class=\"stat-label\">Windspeed</p>\n                    <p class=\"stat-value\">${this.windspeed} km/h</p>\n                </div>\n                <div class=\"stat-item stat-uvindex\">\n                    <span class=\"stat-icon\">☀️</span>\n                    <p class=\"stat-label\">UV Index</p>\n                    <p class=\"stat-value\">${this.uvindex}</p>\n                </div>\n                <div class=\"stat-item stat-tempmax\">\n                    <span class=\"stat-icon\">🔺</span>\n                    <p class=\"stat-label\">Max</p>\n                    <p class=\"stat-value\">${this.tempmax}°C</p>\n                </div>\n                <div class=\"stat-item stat-tempmin\">\n                    <span class=\"stat-icon\">🔻</span>\n                    <p class=\"stat-label\">Min</p>\n                    <p class=\"stat-value\">${this.tempmin}°C</p>\n                </div>\n            </div>\n            <div class=\"weather-forecast\">\n                ${this.forecast.map(day => {\n                    return `\n                        <div class=\"forecast-item\">\n                            <p class=\"forecast-date\">${new Date(day.datetime + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })}</p>\n                            <span class=\"forecast-icon\">${getIcon(day.icon)}</span>\n                            <p class=\"forecast-temp\">Max: ${celsius(day.tempmax)}°C - Min: ${celsius(day.tempmin)}°C</p>\n                        </div>\n                    `;\n                }).join('')}\n            </div>\n        `\n    }\n}\n\n// Get datas\nasync function getData() {\n    if (input.value.length === 0) {\n        console.log(\"Enter a city name\");\n        return;\n    }\n    try {\n        const location = encodeURIComponent(input.value);\n        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=${key}`);\n        const data = await response.json();\n        const city = new City(data);\n        city.display();\n    } catch (error) {\n        content.innerHTML = `\n            <h1 class=\"error\"><em>${input.value}</em> isn't a city !</h1>\n        `;\n    }\n    input.value = \"\";\n}\n\ninput.addEventListener(\"invalid\", () => {\n    input.setCustomValidity(\"Enter the name of city !\");\n});\n\ninput.addEventListener(\"input\", () => {\n    input.setCustomValidity(\"\");\n});\n\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    getData();\n});\n\n// Add Logo\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const logoNav = document.getElementById(\"img-logo\");\n\n    if (logoNav)\n        logoNav.src = _images_logo_sky_log_png__WEBPACK_IMPORTED_MODULE_1__;\n    const logoLink = document.createElement(\"link\")\n    logoLink.rel = \"icon\";\n    logoLink.type = \"image/png\";\n    logoLink.href = _images_logo_sky_log_png__WEBPACK_IMPORTED_MODULE_1__;\n    document.head.appendChild(logoLink);\n});\n\n// Background\nconst canvas = document.querySelector(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nlet mouseX = window.innerWidth / 2;\nlet mouseY = window.innerHeight / 2;\n\nconst stars = Array.from({length:200}, () => ({\n    x: Math.random() * window.innerWidth,\n    y: Math.random() * window.innerHeight,\n    radius: Math.random() + 0.5,\n    alpha: Math.random(),\n    delta: (Math.random() - 0.5) * 0.02,\n}));\n\nconst shootingStars = [];\n\nfunction createShootingStar() {\n    const side = Math.floor(Math.random() * 4);\n    let startX, startY, baseAngle;\n    \n    if (side === 0) {\n        startX = Math.random() * window.innerWidth;\n        startY = -50;\n        baseAngle = Math.PI / 2;\n    } else if (side === 1) {\n        startX = window.innerWidth + 50;\n        startY = Math.random() * window.innerHeight;\n        baseAngle = Math.PI;\n    } else if (side === 2) {\n        startX = Math.random() * window.innerWidth;\n        startY = window.innerHeight + 50;\n        baseAngle = -Math.PI / 2;\n    } else {\n        startX = -50;\n        startY = Math.random() * window.innerHeight;\n        baseAngle = 0;\n    }\n\n    const angleVariation = (Math.random() - 0.5) * 0.5;\n    \n    const shootStar = {\n        x: startX,\n        y: startY,\n        baseAngle: baseAngle + angleVariation,\n        currentAngle: baseAngle + angleVariation,\n        length: Math.random() * 150 + 80,\n        speed: Math.random() * 3.5 + 4,\n        opacity: 1,\n        curve: (Math.random() - 0.5) * 0.05,\n        path: [] \n    };\n    shootingStars.push(shootStar);\n}\n\nfunction drawStars() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    const offsetX = (mouseX - window.innerWidth / 2);\n    const offsetY = (mouseY - window.innerHeight / 2);\n    \n    stars.forEach(star => {\n        star.alpha += star.delta;\n        if (star.alpha > 1 || star.alpha < 0) star.delta *= -1;\n        ctx.beginPath();\n        ctx.arc(\n            star.x + offsetX * star.radius * 0.2,\n            star.y + offsetY * star.radius * 0.2,\n            star.radius, 0, Math.PI * 2);\n        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;\n        ctx.fill();\n    });\n\n    if (Math.random() < 0.01) createShootingStar();\n    \n    for (let i = shootingStars.length - 1; i >= 0; i--) {\n        const shootStar = shootingStars[i];\n\n        shootStar.path.push({x: shootStar.x, y: shootStar.y});\n\n        const maxPathPoints = Math.ceil(shootStar.length / shootStar.speed) + 5;\n        if (shootStar.path.length > maxPathPoints) shootStar.path.shift();\n        shootStar.currentAngle += shootStar.curve;\n        shootStar.x += shootStar.speed * Math.cos(shootStar.currentAngle);\n        shootStar.y += shootStar.speed * Math.sin(shootStar.currentAngle);\n        \n        shootStar.opacity -= 0.008;\n\n        if (shootStar.opacity <= 0) {\n            shootingStars.splice(i, 1);\n            continue;\n        }\n\n        if (shootStar.path.length > 1) {\n            ctx.beginPath();\n            ctx.moveTo(shootStar.path[0].x, shootStar.path[0].y);\n            for (let j = 1; j < shootStar.path.length; j++) ctx.lineTo(shootStar.path[j].x, shootStar.path[j].y);\n            ctx.strokeStyle = `rgba(255, 255, 255, ${shootStar.opacity})`;\n            ctx.lineWidth = 0.5;\n            ctx.lineCap = 'round';\n            ctx.lineJoin = 'round';\n            ctx.stroke();\n        }\n    }\n    \n    requestAnimationFrame(drawStars);\n}\n\nfunction resizeCanvas() {\n    const dpr = window.devicePixelRatio || 1;\n    canvas.width = window.innerWidth * dpr;\n    canvas.height = window.innerHeight * dpr;\n    ctx.scale(dpr, dpr);\n}\n\nresizeCanvas();\ndrawStars();\n\nwindow.addEventListener(\"resize\", resizeCanvas);\nwindow.addEventListener(\"mousemove\", (e) => {\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n});\n\n//# sourceURL=webpack://weather_app_odin/./src/index.js?\n}");

/***/ },

/***/ "./src/images/logo_sky_log.png"
/*!*************************************!*\
  !*** ./src/images/logo_sky_log.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8f957dd7c8686fba9fbb.png\";\n\n//# sourceURL=webpack://weather_app_odin/./src/images/logo_sky_log.png?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;