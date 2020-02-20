/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"go-play-sdk\\\",\\\"version\\\":\\\"0.0.1\\\",\\\"description\\\":\\\"Go Play SDK\\\",\\\"main\\\":\\\"./dist/sdk.js\\\",\\\"scripts\\\":{\\\"test\\\":\\\"echo \\\\\\\"Error: no test specified\\\\\\\" && exit 1\\\",\\\"build\\\":\\\"webpack --config webpack.config.prod.js\\\",\\\"build-dev\\\":\\\"webpack --config webpack.config.dev.js\\\",\\\"start\\\":\\\"npm run build-dev && webpack-dev-server --config webpack.config.dev.js  --watch\\\"},\\\"author\\\":\\\"khoa.nguyen@dirox.net\\\",\\\"license\\\":\\\"ISC\\\",\\\"devDependencies\\\":{\\\"@babel/core\\\":\\\"^7.8.4\\\",\\\"@babel/plugin-proposal-class-properties\\\":\\\"^7.8.3\\\",\\\"@babel/preset-env\\\":\\\"^7.8.4\\\",\\\"babel-loader\\\":\\\"^8.0.6\\\",\\\"babel-preset-es2015\\\":\\\"^6.24.1\\\",\\\"html-webpack-plugin\\\":\\\"^3.2.0\\\",\\\"webpack\\\":\\\"^4.41.5\\\",\\\"webpack-cli\\\":\\\"^3.3.10\\\",\\\"webpack-dev-server\\\":\\\"^3.10.1\\\"},\\\"dependencies\\\":{}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal.js */ \"./src/signal.js\");\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.js */ \"./src/message.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar sdkInfo = __webpack_require__(/*! ../package.json */ \"./package.json\");\n\nvar GoPlaySDK =\n/*#__PURE__*/\nfunction () {\n  function GoPlaySDK() {\n    _classCallCheck(this, GoPlaySDK);\n\n    _defineProperty(this, \"version\", sdkInfo.version);\n\n    _defineProperty(this, \"otherPlayers\", []);\n\n    _defineProperty(this, \"currentScore\", 0);\n\n    _defineProperty(this, \"finalScore\", 0);\n\n    _defineProperty(this, \"gameStarted\", false);\n  }\n\n  _createClass(GoPlaySDK, [{\n    key: \"emitToNativeScript\",\n\n    /**\n     * Emit data to native script application via the webview bridge (auto injected to web view)\n     * Check: https://github.com/Notalib/nativescript-webview-ext\n     * @param {string} signal \n     * @param {*} data \n     */\n    value: function emitToNativeScript(signal, data) {\n      if (window.nsWebViewBridge) {\n        window.nsWebViewBridge.emit(signal, data);\n        console.log(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"EMIT_TO_WEBVIEW\"], \" signal >>> \".concat(signal, \", \"), \" data >>> \".concat(data));\n      } else {\n        console.log(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"NO_WEBVIEW_BRIDGE\"]);\n      }\n    }\n    /**\n     * Get sdk version\n     */\n\n  }, {\n    key: \"getVersion\",\n    value: function getVersion() {\n      this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"VERSION\"], this.version);\n      return this.version;\n    }\n    /**\n     * Returns current user’s public info. The current user is the local user that launched the game/platform. \n     * @param {Function} onSuccess \n     * @param {Function} onFailed \n     */\n\n  }, {\n    key: \"getCurrentPlayer\",\n    value: function getCurrentPlayer() {\n      var onSuccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var onFailed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      if (onSuccess) {\n        this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_USER\"], GoPlaySDK.Settings.currentUser);\n        onSuccess(GoPlaySDK.Settings.currentUser);\n      }\n    }\n    /*  Returns array of current user’s opponents. \n        The opponents is the player local user is playing against. Returns null for single-player games.*/\n\n  }, {\n    key: \"getOtherPlayers\",\n    value: function getOtherPlayers() {\n      var onSuccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var onFailed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      if (onSuccess) {\n        var data = null;\n\n        if (GoPlaySDK.Settings.gameType !== 'single') {\n          data = this.otherPlayers;\n        }\n\n        this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"OTHER_PLAYERS\"], data);\n        onSuccess(data);\n      }\n    }\n    /* Returns an XML/JSON string with game specific definition data including: \n        - GameType (SinglePlayer, Multiplayer) \n        - CurrentUser\n        - OpponentUsers\n    */\n\n  }, {\n    key: \"getGameConfigInfo\",\n    value: function getGameConfigInfo() {\n      var onSuccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var onFailed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      if (onSuccess) {\n        onSuccess({\n          gameType: GoPlaySDK.Settings.gameType,\n          currentUser: GoPlaySDK.Settings.currentUser,\n          opponentUsers: this.otherPlayers\n        });\n      }\n    }\n    /*  Will be called when an HTML5 game is launched and gameplay is about to begin, \n        this call must be made to the platform indicating a game session has begun. \n        Further gameplay API calls will be ignored until StartGame() has been called. \n        This should also be called on each new round of game play. */\n\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this.gameStarted = true;\n      this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"START_GAME\"], true);\n    }\n    /*  Each time the game score changes, call this to report the latest score. \n        This is used to help prevent cheating and to help re-establish lost connections. \n        Available only after StartGame(). */\n\n  }, {\n    key: \"updateCurrentScore\",\n    value: function updateCurrentScore(score) {\n      var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var onFailed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      this.currentScore = score;\n      this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"CURRENT_SCORE\"], this.currentScore);\n\n      if (onSuccess) {\n        onSuccess(this.currentScore);\n      }\n    }\n    /*  Called by the client to report the final score earned by the player. \n        Any additional calls to game APIs are ignored with the exception of StartGame(). \n        Available only after StartGame(). */\n\n  }, {\n    key: \"updateFinalScore\",\n    value: function updateFinalScore(score) {\n      var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var onFailed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      this.finalScore = score;\n      this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"FINAL_SCORE\"], this.finalScore);\n\n      if (onSuccess) {\n        onSuccess(this.finalScore);\n      }\n    }\n    /*\n        Called to end the game session. Aborted games score lower than 0’s in matched games. \n        Used by cheat detection system and for allowing player to abort game session to start over. \n        Game passes reason for aborting game so platform can decide what actions to take. Available only after StartGame().\n        reason:\n           + TimedOut – game session took too long to complete due to device sleeping, cheating, etc.\n           + ShadowVariableMismatch – game detected variable tampering (mismatch with shadow variable)\n           + GameException – trapped exception \n    */\n\n  }, {\n    key: \"abortGame\",\n    value: function abortGame(reason) {\n      var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var onFailed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n      if (!this.gameStarted) {\n        if (onFailed) {\n          onFailed(_message_js__WEBPACK_IMPORTED_MODULE_1__[\"GAME_NOT_STARTED\"]);\n        }\n\n        return;\n      }\n\n      this.emitToNativeScript(_signal_js__WEBPACK_IMPORTED_MODULE_0__[\"ABORT_GAME\"], reason);\n\n      if (onSuccess) {\n        onSuccess(reason);\n      }\n    }\n  }]);\n\n  return GoPlaySDK;\n}();\n\nwindow.GoPlaySDK = new GoPlaySDK();\nwindow.GoPlaySDK.Settings = {\n  gameId: '',\n  gameType: '',\n  currentUser: {}\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/*! exports provided: GAME_NOT_STARTED, NO_WEBVIEW_BRIDGE, EMIT_TO_WEBVIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_NOT_STARTED\", function() { return GAME_NOT_STARTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NO_WEBVIEW_BRIDGE\", function() { return NO_WEBVIEW_BRIDGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMIT_TO_WEBVIEW\", function() { return EMIT_TO_WEBVIEW; });\nvar GAME_NOT_STARTED = 'Error: game not started yet!';\nvar NO_WEBVIEW_BRIDGE = 'The webview bridge has not been injected yet!';\nvar EMIT_TO_WEBVIEW = 'Emit data to web view';\n\n//# sourceURL=webpack:///./src/message.js?");

/***/ }),

/***/ "./src/signal.js":
/*!***********************!*\
  !*** ./src/signal.js ***!
  \***********************/
/*! exports provided: VERSION, CURRENT_USER, OTHER_PLAYERS, START_GAME, CURRENT_SCORE, FINAL_SCORE, ABORT_GAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERSION\", function() { return VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_USER\", function() { return CURRENT_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OTHER_PLAYERS\", function() { return OTHER_PLAYERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START_GAME\", function() { return START_GAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_SCORE\", function() { return CURRENT_SCORE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FINAL_SCORE\", function() { return FINAL_SCORE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABORT_GAME\", function() { return ABORT_GAME; });\nvar VERSION = 'version';\nvar CURRENT_USER = 'current_user';\nvar OTHER_PLAYERS = 'other_players';\nvar START_GAME = 'start_game';\nvar CURRENT_SCORE = 'current_score';\nvar FINAL_SCORE = 'final score';\nvar ABORT_GAME = 'abort_game';\n\n//# sourceURL=webpack:///./src/signal.js?");

/***/ })

/******/ });