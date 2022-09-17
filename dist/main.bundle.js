/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/controller/mainController.js":
/*!**************************************************!*\
  !*** ./src/modules/controller/mainController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var lookup = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");

var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.model = model;
    this.view = view;
    document.body.addEventListener("submit", function (e) {
      return _this.searchWeather(e);
    });
    document.body.addEventListener("input", function () {
      return _this.checkInput();
    });
    window.addEventListener("load", function () {
      return _this.view.setHomePageBg();
    });
  }

  _createClass(Controller, [{
    key: "getElements",
    value: function getElements() {
      var input = document.querySelector("input");
      var degreeBig = document.querySelectorAll(".card__degrees")[0];
      var degreeSmall = document.querySelectorAll(".details__feelsLike, .dailyCard__max, .dailyCard__min");
      var wind = document.querySelector(".details__wind");
      var main = document.querySelector(".container");
      var span = document.querySelectorAll(".form__notFound")[0];
      var switchBtn = document.querySelector(".switch input");
      var loadDiv = document.getElementsByClassName("container__loader")[0];
      var searchBtn = document.querySelector('[alt="Search"]');
      return {
        input: input,
        degreeBig: degreeBig,
        degreeSmall: degreeSmall,
        wind: wind,
        main: main,
        span: span,
        switchBtn: switchBtn,
        loadDiv: loadDiv,
        searchBtn: searchBtn
      };
    }
  }, {
    key: "checkInput",
    value: function checkInput() {
      this.view.CheckEmpty(this.getElements().input, this.getElements().span);
    }
  }, {
    key: "searchWeather",
    value: function () {
      var _searchWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var _this2 = this;

        var geoLocation, currentWeather, eightDaysWeather;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (this.getElements().input.validity.valid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", this.view.showEmptyError(this.getElements().span));

              case 3:
                this.view.showContent(2);
                _context.next = 6;
                return this.getGeoLocation();

              case 6:
                geoLocation = _context.sent;

                if (!(typeof geoLocation === "undefined")) {
                  _context.next = 10;
                  break;
                }

                this.getElements().loadDiv.remove();
                return _context.abrupt("return", this.view.showUnknownCityError(this.getElements().span));

              case 10:
                _context.next = 12;
                return this.getCurrentWeather(geoLocation);

              case 12:
                currentWeather = _context.sent;
                _context.next = 15;
                return this.getEightDaysWeather(geoLocation);

              case 15:
                eightDaysWeather = _context.sent;
                if (this.getElements().main.hasChildNodes()) this.view.deleteContent(this.getElements().main);
                this.view.showContent(0);
                this.getElements().switchBtn.addEventListener("click", function (e) {
                  return _this2.changeUnits(e);
                });
                this.model.createMainCard(currentWeather, geoLocation);
                this.view.showContent(1);
                this.model.createEightDaysCard(eightDaysWeather);
                this.view.changeBackground(currentWeather);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function searchWeather(_x) {
        return _searchWeather.apply(this, arguments);
      }

      return searchWeather;
    }()
  }, {
    key: "getGeoLocation",
    value: function () {
      var _getGeoLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var inputValue, geoLocation;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                inputValue = this.getElements().input.value;
                _context2.next = 3;
                return this.model.fetchGeoLocation(this.convertCountryNameToCode(inputValue));

              case 3:
                geoLocation = _context2.sent;
                return _context2.abrupt("return", geoLocation);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGeoLocation() {
        return _getGeoLocation.apply(this, arguments);
      }

      return getGeoLocation;
    }()
  }, {
    key: "convertCountryNameToCode",
    value: function convertCountryNameToCode(input) {
      var inputArray = input.split(",");
      var cityName = inputArray[0];
      var country = input.substring(input.lastIndexOf(",") + 1);
      var countryName = this.capitalize(country.trim());

      if (lookup.byCountry(countryName) !== null) {
        var countryCode = lookup.byCountry(countryName).iso2;
        return "".concat(cityName, ", ").concat(countryCode);
      } else return "".concat(cityName);
    }
  }, {
    key: "capitalize",
    value: function capitalize(str) {
      var splitStr = str.toLowerCase().split(" ");

      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }

      return splitStr.join(" ");
    }
  }, {
    key: "getCurrentWeather",
    value: function () {
      var _getCurrentWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(geoLocation) {
        var currentWeather;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.model.fetchCurrentWeather(geoLocation.lat, geoLocation.lon);

              case 2:
                currentWeather = _context3.sent;
                return _context3.abrupt("return", currentWeather);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCurrentWeather(_x2) {
        return _getCurrentWeather.apply(this, arguments);
      }

      return getCurrentWeather;
    }()
  }, {
    key: "getEightDaysWeather",
    value: function () {
      var _getEightDaysWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(geoLocation) {
        var eightDaysWeather;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.model.fetchEightDaysWeather(geoLocation.lat, geoLocation.lon);

              case 2:
                eightDaysWeather = _context4.sent;
                return _context4.abrupt("return", eightDaysWeather);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEightDaysWeather(_x3) {
        return _getEightDaysWeather.apply(this, arguments);
      }

      return getEightDaysWeather;
    }()
  }, {
    key: "changeUnits",
    value: function changeUnits() {
      if (this.getElements().degreeBig.classList.contains("celsius--big")) {
        this.getElements().degreeBig.textContent = this.convertToFahrenheit(this.getElements().degreeBig.textContent);
        this.getElements().wind.textContent = "".concat(this.convertToMph(this.getElements().wind.textContent), " mph");
      }

      if (this.getElements().degreeBig.classList.contains("fahrenheit--big")) {
        this.getElements().degreeBig.textContent = this.convertToCelsius(this.getElements().degreeBig.textContent);
        this.getElements().wind.textContent = "".concat(this.convertToKmh(this.getElements().wind.textContent), " km/h");
      }

      this.getElements().degreeBig.classList.toggle("celsius--big");
      this.getElements().degreeBig.classList.toggle("fahrenheit--big");

      var _iterator = _createForOfIteratorHelper(this.getElements().degreeSmall),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (element.classList.contains("celsius")) element.textContent = this.convertToFahrenheit(element.textContent);
          if (element.classList.contains("fahrenheit")) element.textContent = this.convertToCelsius(element.textContent);
          element.classList.toggle("celsius");
          element.classList.toggle("fahrenheit");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "convertToCelsius",
    value: function convertToCelsius(degree) {
      var valNum = parseFloat(degree);
      return Math.round((valNum - 32) / 1.8);
    }
  }, {
    key: "convertToFahrenheit",
    value: function convertToFahrenheit(degree) {
      var valNum = parseFloat(degree);
      return Math.round(valNum * 1.8 + 32);
    }
  }, {
    key: "convertToKmh",
    value: function convertToKmh(speed) {
      var valNum = parseFloat(speed);
      return (valNum * 1.609).toFixed(2);
    }
  }, {
    key: "convertToMph",
    value: function convertToMph(speed) {
      var valNum = parseFloat(speed);
      return (valNum / 1.609).toFixed(2);
    }
  }]);

  return Controller;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/modules/model/EightDaysCard.js":
/*!********************************************!*\
  !*** ./src/modules/model/EightDaysCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var EightDaysCard = /*#__PURE__*/function () {
  function EightDaysCard(eightDaysWeather) {
    _classCallCheck(this, EightDaysCard);

    this.data = eightDaysWeather;
  }

  _createClass(EightDaysCard, [{
    key: "fillEightDaysCard",
    value: function fillEightDaysCard() {
      var maxTemp = document.querySelectorAll(".dailyCard__max");
      var minTemp = document.querySelectorAll(".dailyCard__min");
      var img = document.querySelectorAll(".dailyContainer img");
      var day = document.querySelectorAll("h3");

      for (var i = 0; i < this.data.daily.length; i++) {
        maxTemp[i].textContent = Math.round(this.data.daily[i].temp.max);
        minTemp[i].textContent = Math.round(this.data.daily[i].temp.min);
        img[i].src = "http://openweathermap.org/img/wn/".concat(this.data.daily[i].weather[0].icon, "@2x.png");
        var dayOfWeek = this.getDayOfWeek(new Date(this.data.daily[i].dt * 1000).getDay()); // Turns Unix Timestamp to week day

        day[i].textContent = dayOfWeek;
      }
    }
  }, {
    key: "getDayOfWeek",
    value: function getDayOfWeek(number) {
      switch (number) {
        case 0:
          return "Sunday";

        case 1:
          return "Monday";

        case 2:
          return "Tuesday";

        case 3:
          return "Wednesday";

        case 4:
          return "Thursday";

        case 5:
          return "Friday";

        case 6:
          return "Saturday";

        default:
      }
    }
  }]);

  return EightDaysCard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EightDaysCard);

/***/ }),

/***/ "./src/modules/model/mainCard.js":
/*!***************************************!*\
  !*** ./src/modules/model/mainCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MainCard = /*#__PURE__*/function () {
  function MainCard(condition, city, degrees, feelsLike, wind, humidity) {
    _classCallCheck(this, MainCard);

    this.condition = condition;
    this.city = city;
    this.degrees = degrees;
    this.feelsLike = feelsLike;
    this.wind = wind;
    this.humidity = humidity;
  }

  _createClass(MainCard, [{
    key: "fillMainCard",
    value: function fillMainCard() {
      var cardInfo = document.querySelectorAll(".card p");
      var cardData = [this.condition, this.city, this.degrees, this.feelsLike, this.wind, this.humidity];

      for (var i = 0; i < cardInfo.length; i++) {
        cardInfo[i].textContent = cardData[i];
      }
    }
  }]);

  return MainCard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainCard);

/***/ }),

/***/ "./src/modules/model/mainModel.js":
/*!****************************************!*\
  !*** ./src/modules/model/mainModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainCard */ "./src/modules/model/mainCard.js");
/* harmony import */ var _EightDaysCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EightDaysCard */ "./src/modules/model/EightDaysCard.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.key = "90720f422bb5cf74f91be76101f48f50";
    this.metric = "metric";
    this.imperial = "imperial";
  }

  _createClass(Model, [{
    key: "fetchGeoLocation",
    value: function () {
      var _fetchGeoLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchText) {
        var URL, response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                URL = "http://api.openweathermap.org/geo/1.0/direct?q=".concat(searchText, "&appid=").concat(this.key);
                _context.next = 4;
                return fetch(URL, {
                  mode: "cors"
                });

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", data[0]);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", console.log(_context.t0, "Refresh page and try again later"));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function fetchGeoLocation(_x) {
        return _fetchGeoLocation.apply(this, arguments);
      }

      return fetchGeoLocation;
    }()
  }, {
    key: "fetchCurrentWeather",
    value: function () {
      var _fetchCurrentWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(lat, lon) {
        var URL, response, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                URL = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(this.key, "&units=metric");
                _context2.next = 3;
                return fetch(URL, {
                  mode: "cors"
                });

              case 3:
                response = _context2.sent;

                if (response.ok) {
                  _context2.next = 6;
                  break;
                }

                throw Error(response.status);

              case 6:
                _context2.next = 8;
                return response.json();

              case 8:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchCurrentWeather(_x2, _x3) {
        return _fetchCurrentWeather.apply(this, arguments);
      }

      return fetchCurrentWeather;
    }()
  }, {
    key: "fetchEightDaysWeather",
    value: function () {
      var _fetchEightDaysWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(lat, lon) {
        var URL, response, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                URL = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(lat, "&lon=").concat(lon, "&exclude=hourly,minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4");
                _context3.next = 3;
                return fetch(URL, {
                  mode: "cors"
                });

              case 3:
                response = _context3.sent;

                if (response.ok) {
                  _context3.next = 6;
                  break;
                }

                throw Error(response.status);

              case 6:
                _context3.next = 8;
                return response.json();

              case 8:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fetchEightDaysWeather(_x4, _x5) {
        return _fetchEightDaysWeather.apply(this, arguments);
      }

      return fetchEightDaysWeather;
    }()
  }, {
    key: "createMainCard",
    value: function createMainCard(currentWeather, geoLocation) {
      var condition = currentWeather.weather[0].description;
      var regionNamesInEnglish = new Intl.DisplayNames(["en"], {
        type: "region"
      }); // To convert CA to Canada, per example

      var city = "".concat(geoLocation.name, ", ").concat(regionNamesInEnglish.of(currentWeather.sys.country));
      var degrees = Math.round(currentWeather.main.temp);
      var feelsLike = Math.round(currentWeather.main.feels_like);
      var wind = "".concat(this.convertFromMs(currentWeather.wind.speed), " km/h");
      var humidity = "HUMIDITY: ".concat(currentWeather.main.humidity, "%");
      var mainCard = this.generateMainCard(condition, city, degrees, feelsLike, wind, humidity);
      mainCard.fillMainCard();
    }
  }, {
    key: "convertFromMs",
    value: function convertFromMs(speed) {
      return (speed * 3.6).toFixed(2);
    }
  }, {
    key: "generateMainCard",
    value: function generateMainCard(condition, city, degrees, feelsLike, wind, humidity) {
      var mainCardItem = new _mainCard__WEBPACK_IMPORTED_MODULE_0__["default"](condition, city, degrees, feelsLike, wind, humidity);
      return mainCardItem;
    }
  }, {
    key: "createEightDaysCard",
    value: function createEightDaysCard(eightDaysWeather) {
      var eightDaysCard = this.generateEightDaysCard(eightDaysWeather);
      eightDaysCard.fillEightDaysCard();
    }
  }, {
    key: "generateEightDaysCard",
    value: function generateEightDaysCard(eightDaysWeather) {
      var eightDaysCardItem = new _EightDaysCard__WEBPACK_IMPORTED_MODULE_1__["default"](eightDaysWeather);
      return eightDaysCardItem;
    }
  }]);

  return Model;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/modules/view/changeBg.js":
/*!**************************************!*\
  !*** ./src/modules/view/changeBg.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_clear_sky_grooveland_designs_zjoydJb17mE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg */ "./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg");
/* harmony import */ var _images_clear_sky_kevin_buman_7YD8Q_3mEMg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg */ "./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg");
/* harmony import */ var _images_few_clouds_aziz_ayad_NJDyFoXDAus_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg */ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg");
/* harmony import */ var _images_few_clouds_sid_soni_D8VwM3N5xz4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg */ "./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg");
/* harmony import */ var _images_scattered_clouds_nick_fewings_ZtDiJzokZi0_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg */ "./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg");
/* harmony import */ var _images_scattered_clouds_herrmann_stamm_4vmjOLf9edk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg */ "./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg");
/* harmony import */ var _images_broken_clouds_raychel_sanner_cswvKS59E90_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/broken-clouds/raychel-sanner-cswvKS59E90-unsplash.jpeg */ "./src/images/broken-clouds/raychel-sanner-cswvKS59E90-unsplash.jpeg");
/* harmony import */ var _images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg */ "./src/images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg");
/* harmony import */ var _images_shower_rain_nic_y_c_CrXuYxfOJ4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg */ "./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg");
/* harmony import */ var _images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg */ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg");
/* harmony import */ var _images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg */ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg");
/* harmony import */ var _images_rain_stormseeker_vRCZ3DztaoA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg */ "./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg */ "./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_michal_mancewicz_R9L7ukhBSgs_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg */ "./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg");
/* harmony import */ var _images_snow_daniel_mirlea_oIZUFJW8VhE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/snow/daniel-mirlea-oIZUFJW8VhE-unsplash.jpeg */ "./src/images/snow/daniel-mirlea-oIZUFJW8VhE-unsplash.jpeg");
/* harmony import */ var _images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg */ "./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg");
/* harmony import */ var _images_mist_chris_leipelt_kWd5ER2XpSg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg */ "./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg");
/* harmony import */ var _images_mist_daniil_onischenko_3C6DIGvZfEw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg */ "./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg");


















/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(iconCode) {
  switch (iconCode) {
    case "01d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_clear_sky_grooveland_designs_zjoydJb17mE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_0__);

    case "01n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_clear_sky_kevin_buman_7YD8Q_3mEMg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__);

    case "02d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_few_clouds_aziz_ayad_NJDyFoXDAus_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__);

    case "02n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_few_clouds_sid_soni_D8VwM3N5xz4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__);

    case "03d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_scattered_clouds_nick_fewings_ZtDiJzokZi0_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__);

    case "03n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_scattered_clouds_herrmann_stamm_4vmjOLf9edk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__);

    case "04d":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_broken_clouds_raychel_sanner_cswvKS59E90_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_6__);

    case "04n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__);

    case "09d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_shower_rain_nic_y_c_CrXuYxfOJ4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__);

    case "09n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__);

    case "10d":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__);

    case "10n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_rain_stormseeker_vRCZ3DztaoA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__);

    case "11d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__);

    case "11n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_thunderstorm_michal_mancewicz_R9L7ukhBSgs_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_13__);

    case "13d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_snow_daniel_mirlea_oIZUFJW8VhE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_14__);

    case "13n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__);

    case "50d":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_mist_chris_leipelt_kWd5ER2XpSg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_16__);

    case "50n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_mist_daniil_onischenko_3C6DIGvZfEw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_17__);
  }
}

function changeMainBg(image) {
  document.body.style.background = "url(".concat(image, ") no-repeat center center");
  document.body.style.backgroundSize = "cover";
}

function setDailyContainerBG(color) {
  document.querySelectorAll(".dailyContainer")[0].classList.add(color);
}

/***/ }),

/***/ "./src/modules/view/mainView.js":
/*!**************************************!*\
  !*** ./src/modules/view/mainView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeBg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeBg */ "./src/modules/view/changeBg.js");
/* harmony import */ var _images_home_aaron_burden_3Dc_I_65ug_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/home/aaron-burden--3Dc-I-65ug-unsplash.jpeg */ "./src/images/home/aaron-burden--3Dc-I-65ug-unsplash.jpeg");
/* harmony import */ var _images_home_daniel_leone_v7daTKlZzaw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/home/daniel-leone-v7daTKlZzaw-unsplash.jpeg */ "./src/images/home/daniel-leone-v7daTKlZzaw-unsplash.jpeg");
/* harmony import */ var _images_home_greg_rosenke_J90VAXIQK88_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/home/greg-rosenke-J90VAXIQK88-unsplash.jpeg */ "./src/images/home/greg-rosenke-J90VAXIQK88-unsplash.jpeg");
/* harmony import */ var _images_home_ian_dooley_DuBNA1QMpPA_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/home/ian-dooley-DuBNA1QMpPA-unsplash.jpeg */ "./src/images/home/ian-dooley-DuBNA1QMpPA-unsplash.jpeg");
/* harmony import */ var _images_home_john_fowler_RsRTIofe0HE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/home/john-fowler-RsRTIofe0HE-unsplash.jpeg */ "./src/images/home/john-fowler-RsRTIofe0HE-unsplash.jpeg");
/* harmony import */ var _images_home_simon_berger_twukN12EN7c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/home/simon-berger-twukN12EN7c-unsplash.jpg */ "./src/images/home/simon-berger-twukN12EN7c-unsplash.jpg");
/* harmony import */ var _images_home_caleb_stokes_pY1FKeEP8v8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/home/caleb-stokes-pY1FKeEP8v8-unsplash.jpg */ "./src/images/home/caleb-stokes-pY1FKeEP8v8-unsplash.jpg");
/* harmony import */ var _images_home_willian_justen_de_vasconcellos_jOF2TFSNxQI_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/home/willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg */ "./src/images/home/willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg");
/* harmony import */ var _images_home_abednego_s_g_h7FysA92Jww_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/home/abednego-s-g-h7FysA92Jww-unsplash.jpeg */ "./src/images/home/abednego-s-g-h7FysA92Jww-unsplash.jpeg");
/* harmony import */ var _images_home_nidheesh_kavalan_Ha501MB_XE8_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/home/nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg */ "./src/images/home/nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg");
/* harmony import */ var _images_home_wladislaw_sokolowskij_0vw4InAC_yM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/home/wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg */ "./src/images/home/wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg");
/* harmony import */ var _images_home_billy_huynh_PHB9CK5K7js_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/home/billy-huynh-PHB9CK5K7js-unsplash.jpeg */ "./src/images/home/billy-huynh-PHB9CK5K7js-unsplash.jpeg");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }















var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "setHomePageBg",
    value: function setHomePageBg() {
      var randomNumber = Math.floor(Math.random() * 12);
      var images = [_images_home_aaron_burden_3Dc_I_65ug_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__, _images_home_daniel_leone_v7daTKlZzaw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__, _images_home_greg_rosenke_J90VAXIQK88_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_3__, _images_home_ian_dooley_DuBNA1QMpPA_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__, _images_home_john_fowler_RsRTIofe0HE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__, _images_home_simon_berger_twukN12EN7c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_home_caleb_stokes_pY1FKeEP8v8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_home_willian_justen_de_vasconcellos_jOF2TFSNxQI_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_8__, _images_home_abednego_s_g_h7FysA92Jww_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_9__, _images_home_nidheesh_kavalan_Ha501MB_XE8_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__, _images_home_wladislaw_sokolowskij_0vw4InAC_yM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__, _images_home_billy_huynh_PHB9CK5K7js_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_12__];
      document.body.style.background = "url(".concat(images[randomNumber], ") no-repeat center center");
      document.body.style.backgroundSize = "cover";
    }
  }, {
    key: "showContent",
    value: function showContent(position) {
      var temp = document.getElementsByTagName("template")[position];
      var clone = temp.content.cloneNode(true);
      document.getElementsByClassName("container")[0].append(clone);
    }
  }, {
    key: "deleteContent",
    value: function deleteContent(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  }, {
    key: "changeBackground",
    value: function changeBackground(currentWeather) {
      (0,_changeBg__WEBPACK_IMPORTED_MODULE_0__["default"])(currentWeather.weather[0].icon);
    }
  }, {
    key: "showEmptyError",
    value: function showEmptyError(span) {
      span.textContent = "✖ This field is required.";
      span.classList.add("error--active");
    }
  }, {
    key: "showUnknownCityError",
    value: function showUnknownCityError(span) {
      span.textContent = '✖ Location not found. Please try another city or matching format: "City" or "City, Country".';
      span.classList.add("error--active");
    }
  }, {
    key: "CheckEmpty",
    value: function CheckEmpty(input, span) {
      if (input.validity.valid) {
        span.textContent = ""; // Reset to initial state

        span.className = "form__notFound";
      }
    }
  }]);

  return View;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./node_modules/country-code-lookup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/country-code-lookup/index.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports.byFips = function(code) {
  return search('fips', code.toUpperCase())
}

module.exports.byIso = function(code) {
  if (!isNaN(parseInt(code))) {
    return search('isoNo', code.toString())
  }

  if (code.length === 2) {
    return search('iso2', code.toUpperCase())
  }

  if (code.length === 3) {
    return search('iso3', code.toUpperCase())
  }

  throw new Error('cannot determine ISO code type')
}

module.exports.byInternet = function(code) {
  return search('internet', code.toUpperCase())
}

module.exports.byCountry = function(country) {
  return search('country', country)
}

function search(field, code) {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i][field] === code) {
      return countries[i]
    }
  }
  return null
}

var countries = [
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Afghanistan',
    capital: 'Kabul',
    fips: 'AF',
    iso2: 'AF',
    iso3: 'AFG',
    isoNo: '4',
    internet: 'AF'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Albania',
    capital: 'Tirana',
    fips: 'AL',
    iso2: 'AL',
    iso3: 'ALB',
    isoNo: '8',
    internet: 'AL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Algeria',
    capital: 'Algiers',
    fips: 'AG',
    iso2: 'DZ',
    iso3: 'DZA',
    isoNo: '12',
    internet: 'DZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'American Samoa',
    capital: 'Pago Pago',
    fips: 'AQ',
    iso2: 'AS',
    iso3: 'ASM',
    isoNo: '16',
    internet: 'AS'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Andorra',
    capital: 'Andorra la Vella',
    fips: 'AN',
    iso2: 'AD',
    iso3: 'AND',
    isoNo: '20',
    internet: 'AD'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Angola',
    capital: 'Luanda',
    fips: 'AO',
    iso2: 'AO',
    iso3: 'AGO',
    isoNo: '24',
    internet: 'AO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Anguilla',
    capital: 'The Valley',
    fips: 'AV',
    iso2: 'AI',
    iso3: 'AIA',
    isoNo: '660',
    internet: 'AI'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Antigua and Barbuda',
    capital: "Saint John's",
    fips: 'AC',
    iso2: 'AG',
    iso3: 'ATG',
    isoNo: '28',
    internet: 'AG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Argentina',
    capital: 'Buenos Aires',
    fips: 'AR',
    iso2: 'AR',
    iso3: 'ARG',
    isoNo: '32',
    internet: 'AR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Armenia',
    capital: 'Yerevan',
    fips: 'AM',
    iso2: 'AM',
    iso3: 'ARM',
    isoNo: '51',
    internet: 'AM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Aruba',
    capital: 'Oranjestad',
    fips: 'AA',
    iso2: 'AW',
    iso3: 'ABW',
    isoNo: '533',
    internet: 'AW'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Australia',
    capital: 'Canberra',
    fips: 'AS',
    iso2: 'AU',
    iso3: 'AUS',
    isoNo: '36',
    internet: 'AU'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Austria',
    capital: 'Vienna',
    fips: 'AU',
    iso2: 'AT',
    iso3: 'AUT',
    isoNo: '40',
    internet: 'AT'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Azerbaijan',
    capital: 'Baku (Baki)',
    fips: 'AJ',
    iso2: 'AZ',
    iso3: 'AZE',
    isoNo: '31',
    internet: 'AZ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'The Bahamas',
    capital: 'Nassau',
    fips: 'BF',
    iso2: 'BS',
    iso3: 'BHS',
    isoNo: '44',
    internet: 'BS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Bahrain',
    capital: 'Manama',
    fips: 'BA',
    iso2: 'BH',
    iso3: 'BHR',
    isoNo: '48',
    internet: 'BH'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bangladesh',
    capital: 'Dhaka',
    fips: 'BG',
    iso2: 'BD',
    iso3: 'BGD',
    isoNo: '50',
    internet: 'BD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Barbados',
    capital: 'Bridgetown',
    fips: 'BB',
    iso2: 'BB',
    iso3: 'BRB',
    isoNo: '52',
    internet: 'BB'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Belarus',
    capital: 'Minsk',
    fips: 'BO',
    iso2: 'BY',
    iso3: 'BLR',
    isoNo: '112',
    internet: 'BY'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Belgium',
    capital: 'Brussels',
    fips: 'BE',
    iso2: 'BE',
    iso3: 'BEL',
    isoNo: '56',
    internet: 'BE'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Belize',
    capital: 'Belmopan',
    fips: 'BH',
    iso2: 'BZ',
    iso3: 'BLZ',
    isoNo: '84',
    internet: 'BZ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Benin',
    capital: 'Porto-Novo��',
    fips: 'BN',
    iso2: 'BJ',
    iso3: 'BEN',
    isoNo: '204',
    internet: 'BJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bermuda',
    capital: 'Hamilton',
    fips: 'BD',
    iso2: 'BM',
    iso3: 'BMU',
    isoNo: '60',
    internet: 'BM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bhutan',
    capital: 'Thimphu',
    fips: 'BT',
    iso2: 'BT',
    iso3: 'BTN',
    isoNo: '64',
    internet: 'BT'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Bolivia',
    capital: 'La Paz / Sucre',
    fips: 'BL',
    iso2: 'BO',
    iso3: 'BOL',
    isoNo: '68',
    internet: 'BO'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    fips: 'BK',
    iso2: 'BA',
    iso3: 'BIH',
    isoNo: '70',
    internet: 'BA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Botswana',
    capital: 'Gaborone',
    fips: 'BC',
    iso2: 'BW',
    iso3: 'BWA',
    isoNo: '72',
    internet: 'BW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Brazil',
    capital: 'Brasilia',
    fips: 'BR',
    iso2: 'BR',
    iso3: 'BRA',
    isoNo: '76',
    internet: 'BR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'British Virgin Islands',
    capital: 'Road Town',
    fips: 'VI',
    iso2: 'VG',
    iso3: 'VGB',
    isoNo: '92',
    internet: 'VG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Brunei',
    capital: 'Bandar Seri Begawan',
    fips: 'BX',
    iso2: 'BN',
    iso3: 'BRN',
    isoNo: '96',
    internet: 'BN'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bulgaria',
    capital: 'Sofia',
    fips: 'BU',
    iso2: 'BG',
    iso3: 'BGR',
    isoNo: '100',
    internet: 'BG'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Burkina Faso',
    capital: 'Ouagadougou',
    fips: 'UV',
    iso2: 'BF',
    iso3: 'BFA',
    isoNo: '854',
    internet: 'BF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Burundi',
    capital: 'Bujumbura',
    fips: 'BY',
    iso2: 'BI',
    iso3: 'BDI',
    isoNo: '108',
    internet: 'BI'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cambodia',
    capital: 'Phnom Penh',
    fips: 'CB',
    iso2: 'KH',
    iso3: 'KHM',
    isoNo: '116',
    internet: 'KH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cameroon',
    capital: 'Yaounde',
    fips: 'CM',
    iso2: 'CM',
    iso3: 'CMR',
    isoNo: '120',
    internet: 'CM'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Canada',
    capital: 'Ottawa',
    fips: 'CA',
    iso2: 'CA',
    iso3: 'CAN',
    isoNo: '124',
    internet: 'CA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cape Verde',
    capital: 'Praia',
    fips: 'CV',
    iso2: 'CV',
    iso3: 'CPV',
    isoNo: '132',
    internet: 'CV'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cayman Islands',
    capital: 'George Town',
    fips: 'CJ',
    iso2: 'KY',
    iso3: 'CYM',
    isoNo: '136',
    internet: 'KY'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Central African Republic',
    capital: 'Bangui',
    fips: 'CT',
    iso2: 'CF',
    iso3: 'CAF',
    isoNo: '140',
    internet: 'CF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Chad',
    capital: "N'Djamena",
    fips: 'CD',
    iso2: 'TD',
    iso3: 'TCD',
    isoNo: '148',
    internet: 'TD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Chile',
    capital: 'Santiago',
    fips: 'CI',
    iso2: 'CL',
    iso3: 'CHL',
    isoNo: '152',
    internet: 'CL'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'China',
    capital: 'Beijing',
    fips: 'CH',
    iso2: 'CN',
    iso3: 'CHN',
    isoNo: '156',
    internet: 'CN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Christmas Island',
    capital: 'The Settlement',
    fips: 'KT',
    iso2: 'CX',
    iso3: 'CXR',
    isoNo: '162',
    internet: 'CX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    fips: 'CK',
    iso2: 'CC',
    iso3: 'CCK',
    isoNo: '166',
    internet: 'CC'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Colombia',
    capital: 'Bogota',
    fips: 'CO',
    iso2: 'CO',
    iso3: 'COL',
    isoNo: '170',
    internet: 'CO'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Comoros',
    capital: 'Moroni',
    fips: 'CN',
    iso2: 'KM',
    iso3: 'COM',
    isoNo: '174',
    internet: 'KM'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Republic of the Congo',
    capital: 'Brazzaville',
    fips: 'CF',
    iso2: 'CG',
    iso3: 'COG',
    isoNo: '178',
    internet: 'CG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Cook Islands',
    capital: 'Avarua',
    fips: 'CW',
    iso2: 'CK',
    iso3: 'COK',
    isoNo: '184',
    internet: 'CK'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Costa Rica',
    capital: 'San Jose',
    fips: 'CS',
    iso2: 'CR',
    iso3: 'CRI',
    isoNo: '188',
    internet: 'CR'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: "Cote d'Ivoire",
    capital: 'Yamoussoukro',
    fips: 'IV',
    iso2: 'CI',
    iso3: 'CIV',
    isoNo: '384',
    internet: 'CI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Croatia',
    capital: 'Zagreb',
    fips: 'HR',
    iso2: 'HR',
    iso3: 'HRV',
    isoNo: '191',
    internet: 'HR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cuba',
    capital: 'Havana',
    fips: 'CU',
    iso2: 'CU',
    iso3: 'CUB',
    isoNo: '192',
    internet: 'CU'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Cyprus',
    capital: 'Nicosia',
    fips: 'CY',
    iso2: 'CY',
    iso3: 'CYP',
    isoNo: '196',
    internet: 'CY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Czech Republic',
    capital: 'Prague',
    fips: 'EZ',
    iso2: 'CZ',
    iso3: 'CZE',
    isoNo: '203',
    internet: 'CZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Denmark',
    capital: 'Copenhagen',
    fips: 'DA',
    iso2: 'DK',
    iso3: 'DNK',
    isoNo: '208',
    internet: 'DK'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Djibouti',
    capital: 'Djibouti',
    fips: 'DJ',
    iso2: 'DJ',
    iso3: 'DJI',
    isoNo: '262',
    internet: 'DJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominica',
    capital: 'Roseau',
    fips: 'DO',
    iso2: 'DM',
    iso3: 'DMA',
    isoNo: '212',
    internet: 'DM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominican Republic',
    capital: 'Santo Domingo',
    fips: 'DR',
    iso2: 'DO',
    iso3: 'DOM',
    isoNo: '214',
    internet: 'DO'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Ecuador',
    capital: 'Quito',
    fips: 'EC',
    iso2: 'EC',
    iso3: 'ECU',
    isoNo: '218',
    internet: 'EC'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Egypt',
    capital: 'Cairo',
    fips: 'EG',
    iso2: 'EG',
    iso3: 'EGY',
    isoNo: '818',
    internet: 'EG'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'El Salvador',
    capital: 'San Salvador',
    fips: 'ES',
    iso2: 'SV',
    iso3: 'SLV',
    isoNo: '222',
    internet: 'SV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Equatorial Guinea',
    capital: 'Malabo',
    fips: 'EK',
    iso2: 'GQ',
    iso3: 'GNQ',
    isoNo: '226',
    internet: 'GQ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Eritrea',
    capital: 'Asmara',
    fips: 'ER',
    iso2: 'ER',
    iso3: 'ERI',
    isoNo: '232',
    internet: 'ER'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Estonia',
    capital: 'Tallinn',
    fips: 'EN',
    iso2: 'EE',
    iso3: 'EST',
    isoNo: '233',
    internet: 'EE'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    fips: 'ET',
    iso2: 'ET',
    iso3: 'ETH',
    isoNo: '231',
    internet: 'ET'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Falkland Islands (Islas Malvinas)',
    capital: 'Stanley',
    fips: 'FA',
    iso2: 'FK',
    iso3: 'FLK',
    isoNo: '238',
    internet: 'FK'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Faroe Islands',
    capital: 'Torshavn',
    fips: 'FO',
    iso2: 'FO',
    iso3: 'FRO',
    isoNo: '234',
    internet: 'FO'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Fiji',
    capital: 'Suva',
    fips: 'FJ',
    iso2: 'FJ',
    iso3: 'FJI',
    isoNo: '242',
    internet: 'FJ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Finland',
    capital: 'Helsinki',
    fips: 'FI',
    iso2: 'FI',
    iso3: 'FIN',
    isoNo: '246',
    internet: 'FI'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'France',
    capital: 'Paris',
    fips: 'FR',
    iso2: 'FR',
    iso3: 'FRA',
    isoNo: '250',
    internet: 'FR'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'French Guiana',
    capital: 'Cayenne',
    fips: 'FG',
    iso2: 'GF',
    iso3: 'GUF',
    isoNo: '254',
    internet: 'GF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'French Polynesia',
    capital: 'Papeete',
    fips: 'FP',
    iso2: 'PF',
    iso3: 'PYF',
    isoNo: '258',
    internet: 'PF'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Gabon',
    capital: 'Libreville',
    fips: 'GB',
    iso2: 'GA',
    iso3: 'GAB',
    isoNo: '266',
    internet: 'GA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'The Gambia',
    capital: 'Banjul',
    fips: 'GA',
    iso2: 'GM',
    iso3: 'GMB',
    isoNo: '270',
    internet: 'GM'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Georgia',
    capital: "T'bilisi",
    fips: 'GG',
    iso2: 'GE',
    iso3: 'GEO',
    isoNo: '268',
    internet: 'GE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Germany',
    capital: 'Berlin',
    fips: 'GM',
    iso2: 'DE',
    iso3: 'DEU',
    isoNo: '276',
    internet: 'DE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Ghana',
    capital: 'Accra',
    fips: 'GH',
    iso2: 'GH',
    iso3: 'GHA',
    isoNo: '288',
    internet: 'GH'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Gibraltar',
    capital: 'Gibraltar',
    fips: 'GI',
    iso2: 'GI',
    iso3: 'GIB',
    isoNo: '292',
    internet: 'GI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Greece',
    capital: 'Athens',
    fips: 'GR',
    iso2: 'GR',
    iso3: 'GRC',
    isoNo: '300',
    internet: 'GR'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Greenland',
    capital: 'Nuuk (Godthab)',
    fips: 'GL',
    iso2: 'GL',
    iso3: 'GRL',
    isoNo: '304',
    internet: 'GL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Grenada',
    capital: "Saint George's",
    fips: 'GJ',
    iso2: 'GD',
    iso3: 'GRD',
    isoNo: '308',
    internet: 'GD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Guadeloupe',
    capital: 'Basse-Terre',
    fips: 'GP',
    iso2: 'GP',
    iso3: 'GLP',
    isoNo: '312',
    internet: 'GP'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Guam',
    capital: 'Hagatna (Agana)',
    fips: 'GQ',
    iso2: 'GU',
    iso3: 'GUM',
    isoNo: '316',
    internet: 'GU'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Guatemala',
    capital: 'Guatemala',
    fips: 'GT',
    iso2: 'GT',
    iso3: 'GTM',
    isoNo: '320',
    internet: 'GT'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea',
    capital: 'Conakry',
    fips: 'GV',
    iso2: 'GN',
    iso3: 'GIN',
    isoNo: '324',
    internet: 'GN'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea-Bissau',
    capital: 'Bissau',
    fips: 'PU',
    iso2: 'GW',
    iso3: 'GNB',
    isoNo: '624',
    internet: 'GW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Guyana',
    capital: 'Georgetown',
    fips: 'GY',
    iso2: 'GY',
    iso3: 'GUY',
    isoNo: '328',
    internet: 'GY'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Haiti',
    capital: 'Port-au-Prince',
    fips: 'HA',
    iso2: 'HT',
    iso3: 'HTI',
    isoNo: '332',
    internet: 'HT'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Holy See (Vatican City)',
    capital: 'Vatican City',
    fips: 'VT',
    iso2: 'VA',
    iso3: 'VAT',
    isoNo: '336',
    internet: 'VA'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Honduras',
    capital: 'Tegucigalpa',
    fips: 'HO',
    iso2: 'HN',
    iso3: 'HND',
    isoNo: '340',
    internet: 'HN'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Hungary',
    capital: 'Budapest',
    fips: 'HU',
    iso2: 'HU',
    iso3: 'HUN',
    isoNo: '348',
    internet: 'HU'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Iceland',
    capital: 'Reykjavik',
    fips: 'IC',
    iso2: 'IS',
    iso3: 'ISL',
    isoNo: '352',
    internet: 'IS'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'India',
    capital: 'New Delhi',
    fips: 'IN',
    iso2: 'IN',
    iso3: 'IND',
    isoNo: '356',
    internet: 'IN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Indonesia',
    capital: 'Jakarta',
    fips: 'ID',
    iso2: 'ID',
    iso3: 'IDN',
    isoNo: '360',
    internet: 'ID'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iran',
    capital: 'Tehran',
    fips: 'IR',
    iso2: 'IR',
    iso3: 'IRN',
    isoNo: '364',
    internet: 'IR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iraq',
    capital: 'Baghdad',
    fips: 'IZ',
    iso2: 'IQ',
    iso3: 'IRQ',
    isoNo: '368',
    internet: 'IQ'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Ireland',
    capital: 'Dublin',
    fips: 'EI',
    iso2: 'IE',
    iso3: 'IRL',
    isoNo: '372',
    internet: 'IE'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Israel',
    capital: 'Jerusalem',
    fips: 'IS',
    iso2: 'IL',
    iso3: 'ISR',
    isoNo: '376',
    internet: 'IL'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Italy',
    capital: 'Rome',
    fips: 'IT',
    iso2: 'IT',
    iso3: 'ITA',
    isoNo: '380',
    internet: 'IT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Jamaica',
    capital: 'Kingston',
    fips: 'JM',
    iso2: 'JM',
    iso3: 'JAM',
    isoNo: '388',
    internet: 'JM'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Japan',
    capital: 'Tokyo',
    fips: 'JA',
    iso2: 'JP',
    iso3: 'JPN',
    isoNo: '392',
    internet: 'JP'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Jordan',
    capital: 'Amman',
    fips: 'JO',
    iso2: 'JO',
    iso3: 'JOR',
    isoNo: '400',
    internet: 'JO'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kazakhstan',
    capital: 'Astana (Akmola)',
    fips: 'KZ',
    iso2: 'KZ',
    iso3: 'KAZ',
    isoNo: '398',
    internet: 'KZ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Kenya',
    capital: 'Nairobi',
    fips: 'KE',
    iso2: 'KE',
    iso3: 'KEN',
    isoNo: '404',
    internet: 'KE'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Kiribati',
    capital: 'Tarawa',
    fips: 'KR',
    iso2: 'KI',
    iso3: 'KIR',
    isoNo: '296',
    internet: 'KI'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'North Korea',
    capital: "P'yongyang",
    fips: 'KN',
    iso2: 'KP',
    iso3: 'PRK',
    isoNo: '408',
    internet: 'KP'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'South Korea',
    capital: 'Seoul',
    fips: 'KS',
    iso2: 'KR',
    iso3: 'KOR',
    isoNo: '410',
    internet: 'KR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Kuwait',
    capital: 'Kuwait',
    fips: 'KU',
    iso2: 'KW',
    iso3: 'KWT',
    isoNo: '414',
    internet: 'KW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kyrgyzstan',
    capital: 'Bishkek',
    fips: 'KG',
    iso2: 'KG',
    iso3: 'KGZ',
    isoNo: '417',
    internet: 'KG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Laos',
    capital: 'Vientiane',
    fips: 'LA',
    iso2: 'LA',
    iso3: 'LAO',
    isoNo: '418',
    internet: 'LA'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Latvia',
    capital: 'Riga',
    fips: 'LG',
    iso2: 'LV',
    iso3: 'LVA',
    isoNo: '428',
    internet: 'LV'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Lebanon',
    capital: 'Beirut',
    fips: 'LE',
    iso2: 'LB',
    iso3: 'LBN',
    isoNo: '422',
    internet: 'LB'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Lesotho',
    capital: 'Maseru',
    fips: 'LT',
    iso2: 'LS',
    iso3: 'LSO',
    isoNo: '426',
    internet: 'LS'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Liberia',
    capital: 'Monrovia',
    fips: 'LI',
    iso2: 'LR',
    iso3: 'LBR',
    isoNo: '430',
    internet: 'LR'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Libya',
    capital: 'Tripoli',
    fips: 'LY',
    iso2: 'LY',
    iso3: 'LBY',
    isoNo: '434',
    internet: 'LY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Liechtenstein',
    capital: 'Vaduz',
    fips: 'LS',
    iso2: 'LI',
    iso3: 'LIE',
    isoNo: '438',
    internet: 'LI'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Lithuania',
    capital: 'Vilnius',
    fips: 'LH',
    iso2: 'LT',
    iso3: 'LTU',
    isoNo: '440',
    internet: 'LT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Luxembourg',
    capital: 'Luxembourg',
    fips: 'LU',
    iso2: 'LU',
    iso3: 'LUX',
    isoNo: '442',
    internet: 'LU'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'North Macedonia',
    capital: 'Skopje',
    fips: 'MK',
    iso2: 'MK',
    iso3: 'MKD',
    isoNo: '807',
    internet: 'MK'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Madagascar',
    capital: 'Antananarivo',
    fips: 'MA',
    iso2: 'MG',
    iso3: 'MDG',
    isoNo: '450',
    internet: 'MG'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Malawi',
    capital: 'Lilongwe',
    fips: 'MI',
    iso2: 'MW',
    iso3: 'MWI',
    isoNo: '454',
    internet: 'MW'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    fips: 'MY',
    iso2: 'MY',
    iso3: 'MYS',
    isoNo: '458',
    internet: 'MY'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Maldives',
    capital: 'Male (Maale)',
    fips: 'MV',
    iso2: 'MV',
    iso3: 'MDV',
    isoNo: '462',
    internet: 'MV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mali',
    capital: 'Bamako',
    fips: 'ML',
    iso2: 'ML',
    iso3: 'MLI',
    isoNo: '466',
    internet: 'ML'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Malta',
    capital: 'Valletta',
    fips: 'MT',
    iso2: 'MT',
    iso3: 'MLT',
    isoNo: '470',
    internet: 'MT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Isle of Man',
    capital: 'Douglas',
    fips: 'IM',
    iso2: 'IM',
    iso3: 'IMN',
    isoNo: '833',
    internet: 'IM'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Marshall Islands',
    capital: 'Majuro',
    fips: 'RM',
    iso2: 'MH',
    iso3: 'MHL',
    isoNo: '584',
    internet: 'MH'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Martinique',
    capital: 'Fort-de-France',
    fips: 'MB',
    iso2: 'MQ',
    iso3: 'MTQ',
    isoNo: '474',
    internet: 'MQ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mauritania',
    capital: 'Nouakchott',
    fips: 'MR',
    iso2: 'MR',
    iso3: 'MRT',
    isoNo: '478',
    internet: 'MR'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mauritius',
    capital: 'Port Louis',
    fips: 'MP',
    iso2: 'MU',
    iso3: 'MUS',
    isoNo: '480',
    internet: 'MU'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mayotte',
    capital: 'Mamoutzou',
    fips: 'MF',
    iso2: 'YT',
    iso3: 'MYT',
    isoNo: '175',
    internet: 'YT'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Mexico',
    capital: 'Mexico',
    fips: 'MX',
    iso2: 'MX',
    iso3: 'MEX',
    isoNo: '484',
    internet: 'MX'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Federated States of Micronesia',
    capital: 'Palikir',
    fips: '',
    iso2: 'FM',
    iso3: 'FSM',
    isoNo: '583',
    internet: 'FM'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Moldova',
    capital: 'Chisinau',
    fips: 'MD',
    iso2: 'MD',
    iso3: 'MDA',
    isoNo: '498',
    internet: 'MD'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Monaco',
    capital: 'Monaco',
    fips: 'MN',
    iso2: 'MC',
    iso3: 'MCO',
    isoNo: '492',
    internet: 'MC'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Mongolia',
    capital: 'Ulaanbaatar',
    fips: 'MG',
    iso2: 'MN',
    iso3: 'MNG',
    isoNo: '496',
    internet: 'MN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Montserrat',
    capital: 'Plymouth',
    fips: 'MH',
    iso2: 'MS',
    iso3: 'MSR',
    isoNo: '500',
    internet: 'MS'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Morocco',
    capital: 'Rabat',
    fips: 'MO',
    iso2: 'MA',
    iso3: 'MAR',
    isoNo: '504',
    internet: 'MA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Mozambique',
    capital: 'Maputo',
    fips: 'MZ',
    iso2: 'MZ',
    iso3: 'MOZ',
    isoNo: '508',
    internet: 'MZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Myanmar (Burma)',
    capital: 'Rangoon (Yangon)',
    fips: 'BM',
    iso2: 'MM',
    iso3: 'MMR',
    isoNo: '104',
    internet: 'MM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Namibia',
    capital: 'Windhoek',
    fips: 'WA',
    iso2: 'NA',
    iso3: 'NAM',
    isoNo: '516',
    internet: 'NA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Nauru',
    capital: 'no official capital',
    fips: 'NR',
    iso2: 'NR',
    iso3: 'NRU',
    isoNo: '520',
    internet: 'NR'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Nepal',
    capital: 'Kathmandu',
    fips: 'NP',
    iso2: 'NP',
    iso3: 'NPL',
    isoNo: '524',
    internet: 'NP'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Netherlands',
    capital: 'Amsterdam',
    fips: 'NL',
    iso2: 'NL',
    iso3: 'NLD',
    isoNo: '528',
    internet: 'NL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Netherlands Antilles',
    capital: 'Willemstad',
    fips: 'NT',
    iso2: 'AN',
    iso3: 'ANT',
    isoNo: '530',
    internet: 'AN'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Caledonia',
    capital: 'Noumea',
    fips: 'NC',
    iso2: 'NC',
    iso3: 'NCL',
    isoNo: '540',
    internet: 'NC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Zealand',
    capital: 'Wellington',
    fips: 'NZ',
    iso2: 'NZ',
    iso3: 'NZL',
    isoNo: '554',
    internet: 'NZ'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Nicaragua',
    capital: 'Managua',
    fips: 'NU',
    iso2: 'NI',
    iso3: 'NIC',
    isoNo: '558',
    internet: 'NI'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Niger',
    capital: 'Niamey',
    fips: 'NG',
    iso2: 'NE',
    iso3: 'NER',
    isoNo: '562',
    internet: 'NE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Nigeria',
    capital: 'Abuja',
    fips: 'NI',
    iso2: 'NG',
    iso3: 'NGA',
    isoNo: '566',
    internet: 'NG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Niue',
    capital: 'Alofi',
    fips: 'NE',
    iso2: 'NU',
    iso3: 'NIU',
    isoNo: '570',
    internet: 'NU'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Norfolk Island',
    capital: 'Kingston',
    fips: 'NF',
    iso2: 'NF',
    iso3: 'NFK',
    isoNo: '574',
    internet: 'NF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Northern Mariana Islands',
    capital: 'Saipan',
    fips: 'CQ',
    iso2: 'MP',
    iso3: 'MNP',
    isoNo: '580',
    internet: 'MP'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Norway',
    capital: 'Oslo',
    fips: 'NO',
    iso2: 'NO',
    iso3: 'NOR',
    isoNo: '578',
    internet: 'NO'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Oman',
    capital: 'Muscat',
    fips: 'MU',
    iso2: 'OM',
    iso3: 'OMN',
    isoNo: '512',
    internet: 'OM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Pakistan',
    capital: 'Islamabad',
    fips: 'PK',
    iso2: 'PK',
    iso3: 'PAK',
    isoNo: '586',
    internet: 'PK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Palau',
    capital: 'Koror',
    fips: 'PS',
    iso2: 'PW',
    iso3: 'PLW',
    isoNo: '585',
    internet: 'PW'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Palestinian Territory',
    capital: 'East Jerusalem',
    fips: 'WE',
    iso2: 'PS',
    iso3: 'PSE',
    isoNo: '275',
    internet: 'PS'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Panama',
    capital: 'Panama',
    fips: 'PM',
    iso2: 'PA',
    iso3: 'PAN',
    isoNo: '591',
    internet: 'PA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Papua New Guinea',
    capital: 'Port Moresby',
    fips: 'PP',
    iso2: 'PG',
    iso3: 'PNG',
    isoNo: '598',
    internet: 'PG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Paraguay',
    capital: 'Asuncion',
    fips: 'PA',
    iso2: 'PY',
    iso3: 'PRY',
    isoNo: '600',
    internet: 'PY'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Peru',
    capital: 'Lima',
    fips: 'PE',
    iso2: 'PE',
    iso3: 'PER',
    isoNo: '604',
    internet: 'PE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Philippines',
    capital: 'Manila',
    fips: 'RP',
    iso2: 'PH',
    iso3: 'PHL',
    isoNo: '608',
    internet: 'PH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Pitcairn Islands',
    capital: 'Adamstown',
    fips: 'PC',
    iso2: 'PN',
    iso3: 'PCN',
    isoNo: '612',
    internet: 'PN'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Poland',
    capital: 'Warsaw',
    fips: 'PL',
    iso2: 'PL',
    iso3: 'POL',
    isoNo: '616',
    internet: 'PL'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Portugal',
    capital: 'Lisbon',
    fips: 'PO',
    iso2: 'PT',
    iso3: 'PRT',
    isoNo: '620',
    internet: 'PT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Puerto Rico',
    capital: 'San Juan',
    fips: 'RQ',
    iso2: 'PR',
    iso3: 'PRI',
    isoNo: '630',
    internet: 'PR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Qatar',
    capital: 'Doha',
    fips: 'QA',
    iso2: 'QA',
    iso3: 'QAT',
    isoNo: '634',
    internet: 'QA'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Reunion',
    capital: 'Saint-Denis',
    fips: 'RE',
    iso2: 'RE',
    iso3: 'REU',
    isoNo: '638',
    internet: 'RE'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Romania',
    capital: 'Bucharest',
    fips: 'RO',
    iso2: 'RO',
    iso3: 'ROU',
    isoNo: '642',
    internet: 'RO'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Russia',
    capital: 'Moscow',
    fips: 'RS',
    iso2: 'RU',
    iso3: 'RUS',
    isoNo: '643',
    internet: 'RU'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Rwanda',
    capital: 'Kigali',
    fips: 'RW',
    iso2: 'RW',
    iso3: 'RWA',
    isoNo: '646',
    internet: 'RW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    fips: 'SC',
    iso2: 'KN',
    iso3: 'KNA',
    isoNo: '659',
    internet: 'KN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Lucia',
    capital: 'Castries',
    fips: 'ST',
    iso2: 'LC',
    iso3: 'LCA',
    isoNo: '662',
    internet: 'LC'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    fips: 'SB',
    iso2: 'PM',
    iso3: 'SPM',
    isoNo: '666',
    internet: 'PM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    fips: 'VC',
    iso2: 'VC',
    iso3: 'VCT',
    isoNo: '670',
    internet: 'VC'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'San Marino',
    capital: 'San Marino',
    fips: 'SM',
    iso2: 'SM',
    iso3: 'SMR',
    isoNo: '674',
    internet: 'SM'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sao Tome and Principe',
    capital: 'Sao Tome',
    fips: 'TP',
    iso2: 'ST',
    iso3: 'STP',
    isoNo: '678',
    internet: 'ST'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Saudi Arabia',
    capital: 'Riyadh',
    fips: 'SA',
    iso2: 'SA',
    iso3: 'SAU',
    isoNo: '682',
    internet: 'SA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Senegal',
    capital: 'Dakar',
    fips: 'SG',
    iso2: 'SN',
    iso3: 'SEN',
    isoNo: '686',
    internet: 'SN'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Seychelles',
    capital: 'Victoria',
    fips: 'SE',
    iso2: 'SC',
    iso3: 'SYC',
    isoNo: '690',
    internet: 'SC'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sierra Leone',
    capital: 'Freetown',
    fips: 'SL',
    iso2: 'SL',
    iso3: 'SLE',
    isoNo: '694',
    internet: 'SL'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Singapore',
    capital: 'Singapore',
    fips: 'SN',
    iso2: 'SG',
    iso3: 'SGP',
    isoNo: '702',
    internet: 'SG'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Slovakia',
    capital: 'Bratislava',
    fips: 'LO',
    iso2: 'SK',
    iso3: 'SVK',
    isoNo: '703',
    internet: 'SK'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Slovenia',
    capital: 'Ljubljana',
    fips: 'SI',
    iso2: 'SI',
    iso3: 'SVN',
    isoNo: '705',
    internet: 'SI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Solomon Islands',
    capital: 'Honiara',
    fips: 'BP',
    iso2: 'SB',
    iso3: 'SLB',
    isoNo: '90',
    internet: 'SB'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Somalia',
    capital: 'Mogadishu',
    fips: 'SO',
    iso2: 'SO',
    iso3: 'SOM',
    isoNo: '706',
    internet: 'SO'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'South Africa',
    capital: 'Pretoria��',
    fips: 'SF',
    iso2: 'ZA',
    iso3: 'ZAF',
    isoNo: '710',
    internet: 'ZA'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Spain',
    capital: 'Madrid',
    fips: 'SP',
    iso2: 'ES',
    iso3: 'ESP',
    isoNo: '724',
    internet: 'ES'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Sri Lanka',
    capital: 'Colombo',
    fips: 'CE',
    iso2: 'LK',
    iso3: 'LKA',
    isoNo: '144',
    internet: 'LK'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Sudan',
    capital: 'Khartoum',
    fips: 'SU',
    iso2: 'SD',
    iso3: 'SDN',
    isoNo: '736',
    internet: 'SD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Suriname',
    capital: 'Paramaribo',
    fips: 'NS',
    iso2: 'SR',
    iso3: 'SUR',
    isoNo: '740',
    internet: 'SR'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Svalbard',
    capital: 'Longyearbyen',
    fips: 'SV',
    iso2: 'SJ',
    iso3: 'SJM',
    isoNo: '744',
    internet: 'SJ'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Eswatini',
    capital: 'Mbabane',
    fips: 'WZ',
    iso2: 'SZ',
    iso3: 'SWZ',
    isoNo: '748',
    internet: 'SZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Sweden',
    capital: 'Stockholm',
    fips: 'SW',
    iso2: 'SE',
    iso3: 'SWE',
    isoNo: '752',
    internet: 'SE'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Switzerland',
    capital: 'Bern',
    fips: 'SZ',
    iso2: 'CH',
    iso3: 'CHE',
    isoNo: '756',
    internet: 'CH'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Syria',
    capital: 'Damascus',
    fips: 'SY',
    iso2: 'SY',
    iso3: 'SYR',
    isoNo: '760',
    internet: 'SY'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Taiwan',
    capital: 'Taipei',
    fips: 'TW',
    iso2: 'TW',
    iso3: 'TWN',
    isoNo: '158',
    internet: 'TW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Tajikistan',
    capital: 'Dushanbe',
    fips: 'TI',
    iso2: 'TJ',
    iso3: 'TJK',
    isoNo: '762',
    internet: 'TJ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Tanzania',
    capital: 'Dar es Salaam',
    fips: 'TZ',
    iso2: 'TZ',
    iso3: 'TZA',
    isoNo: '834',
    internet: 'TZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Thailand',
    capital: 'Bangkok',
    fips: 'TH',
    iso2: 'TH',
    iso3: 'THA',
    isoNo: '764',
    internet: 'TH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Togo',
    capital: 'Lome',
    fips: 'TO',
    iso2: 'TG',
    iso3: 'TGO',
    isoNo: '768',
    internet: 'TG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tokelau',
    capital: 'none',
    fips: 'TL',
    iso2: 'TK',
    iso3: 'TKL',
    isoNo: '772',
    internet: 'TK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tonga',
    capital: "Nuku'alofa",
    fips: 'TN',
    iso2: 'TO',
    iso3: 'TON',
    isoNo: '776',
    internet: 'TO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Trinidad and Tobago',
    capital: 'Port-of-Spain',
    fips: 'TD',
    iso2: 'TT',
    iso3: 'TTO',
    isoNo: '780',
    internet: 'TT'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Tunisia',
    capital: 'Tunis',
    fips: 'TS',
    iso2: 'TN',
    iso3: 'TUN',
    isoNo: '788',
    internet: 'TN'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Turkey',
    capital: 'Ankara',
    fips: 'TU',
    iso2: 'TR',
    iso3: 'TUR',
    isoNo: '792',
    internet: 'TR'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Turkmenistan',
    capital: 'Ashgabat',
    fips: 'TX',
    iso2: 'TM',
    iso3: 'TKM',
    isoNo: '795',
    internet: 'TM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Turks and Caicos Islands',
    capital: 'Grand Turk',
    fips: 'TK',
    iso2: 'TC',
    iso3: 'TCA',
    isoNo: '796',
    internet: 'TC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tuvalu',
    capital: 'Funafuti',
    fips: 'TV',
    iso2: 'TV',
    iso3: 'TUV',
    isoNo: '798',
    internet: 'TV'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Uganda',
    capital: 'Kampala',
    fips: 'UG',
    iso2: 'UG',
    iso3: 'UGA',
    isoNo: '800',
    internet: 'UG'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Ukraine',
    capital: 'Kiev',
    fips: 'UP',
    iso2: 'UA',
    iso3: 'UKR',
    isoNo: '804',
    internet: 'UA'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    fips: 'TC',
    iso2: 'AE',
    iso3: 'ARE',
    isoNo: '784',
    internet: 'AE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'United Kingdom',
    capital: 'London',
    fips: 'UK',
    iso2: 'GB',
    iso3: 'GBR',
    isoNo: '826',
    internet: 'UK'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States',
    capital: 'Washington DC',
    fips: 'US',
    iso2: 'US',
    iso3: 'USA',
    isoNo: '840',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States Minor Outlying Islands',
    capital: 'Washington DC',
    fips: '',
    iso2: 'UM',
    iso3: 'UMI',
    isoNo: '581',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Uruguay',
    capital: 'Montevideo',
    fips: 'UY',
    iso2: 'UY',
    iso3: 'URY',
    isoNo: '858',
    internet: 'UY'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Uzbekistan',
    capital: 'Tashkent (Toshkent)',
    fips: 'UZ',
    iso2: 'UZ',
    iso3: 'UZB',
    isoNo: '860',
    internet: 'UZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Vanuatu',
    capital: 'Port-Vila',
    fips: 'NH',
    iso2: 'VU',
    iso3: 'VUT',
    isoNo: '548',
    internet: 'VU'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Venezuela',
    capital: 'Caracas',
    fips: 'VE',
    iso2: 'VE',
    iso3: 'VEN',
    isoNo: '862',
    internet: 'UE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Vietnam',
    capital: 'Hanoi',
    fips: 'VN',
    iso2: 'VN',
    iso3: 'VNM',
    isoNo: '704',
    internet: 'VN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Virgin Islands',
    capital: 'Charlotte Amalie',
    fips: 'VQ',
    iso2: 'VI',
    iso3: 'VIR',
    isoNo: '850',
    internet: 'VI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Wallis and Futuna',
    capital: 'Mata-Utu (on Ile Uvea)',
    fips: 'WF',
    iso2: 'WF',
    iso3: 'WLF',
    isoNo: '876',
    internet: 'WF'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Western Sahara',
    capital: 'none',
    fips: 'WI',
    iso2: 'EH',
    iso3: 'ESH',
    isoNo: '732',
    internet: 'EH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Western Samoa',
    capital: 'Apia',
    fips: 'WS',
    iso2: 'WS',
    iso3: 'WSM',
    isoNo: '882',
    internet: 'WS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Yemen',
    capital: 'Sanaa',
    fips: 'YM',
    iso2: 'YE',
    iso3: 'YEM',
    isoNo: '887',
    internet: 'YE'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Democratic Republic of the Congo',
    capital: 'Kinshasa',
    fips: 'CG',
    iso2: 'CD',
    iso3: 'COD',
    isoNo: '180',
    internet: 'ZR'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zambia',
    capital: 'Lusaka',
    fips: 'ZA',
    iso2: 'ZM',
    iso3: 'ZMB',
    isoNo: '894',
    internet: 'ZM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zimbabwe',
    capital: 'Harare',
    fips: 'ZI',
    iso2: 'ZW',
    iso3: 'ZWE',
    isoNo: '716',
    internet: 'ZW'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Hong Kong',
    capital: 'Victoria',
    fips: 'HK',
    iso2: 'HK',
    iso3: 'HKG',
    isoNo: '344',
    internet: 'HK'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Macau',
    capital: 'Macau',
    fips: 'MC',
    iso2: 'MO',
    iso3: 'MAC',
    isoNo: '446',
    internet: 'MO'
  },
  {
    continent: 'Antarctica',
    region: 'Antarctica',
    country: 'Antarctica',
    capital: '',
    fips: 'AY',
    iso2: 'AQ',
    iso3: 'ATA',
    isoNo: '10',
    internet: 'AQ'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Bouvet Island',
    capital: '',
    fips: 'BV',
    iso2: 'BV',
    iso3: 'BVT',
    isoNo: '74',
    internet: 'BV'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'British Indian Ocean Territory',
    capital: '',
    fips: 'IO',
    iso2: 'IO',
    iso3: 'IOT',
    isoNo: '86',
    internet: 'IO'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'French Southern and Antarctic Lands',
    capital: '',
    fips: 'FS',
    iso2: 'TF',
    iso3: 'ATF',
    isoNo: '260',
    internet: '--'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'Heard Island and McDonald Islands',
    capital: '',
    fips: 'HM',
    iso2: 'HM',
    iso3: 'HMD',
    isoNo: '334',
    internet: 'HM'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Saint Helena',
    capital: '',
    fips: 'SH',
    iso2: 'SH',
    iso3: 'SHN',
    isoNo: '654',
    internet: 'SH'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'South Georgia and the South Sandwich Islands',
    capital: '',
    fips: 'SX',
    iso2: 'GS',
    iso3: 'SGS',
    isoNo: '239',
    internet: 'GS'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Guernsey',
    capital: 'Saint Peter Port',
    fips: 'GK',
    iso2: 'GG',
    iso3: 'GGY',
    isoNo: '831',
    internet: 'GG'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Serbia',
    capital: 'Belgrade',
    fips: 'RI',
    iso2: 'RS',
    iso3: 'SRB',
    isoNo: '688',
    internet: 'RS'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Barthélemy',
    capital: 'Gustavia',
    fips: 'TB',
    iso2: 'BL',
    iso3: 'BLM',
    isoNo: '652',
    internet: 'BL'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Montenegro',
    capital: 'Podgorica',
    fips: 'MJ',
    iso2: 'ME',
    iso3: 'MNE',
    isoNo: '499',
    internet: 'ME'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Jersey',
    capital: 'Saint Helier',
    fips: 'JE',
    iso2: 'JE',
    iso3: 'JEY',
    isoNo: '832',
    internet: 'JE'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Curaçao',
    capital: 'Willemstad',
    fips: 'UC',
    iso2: 'CW',
    iso3: 'CUW',
    isoNo: '531',
    internet: 'CW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Martin',
    capital: 'Marigot',
    fips: 'RN',
    iso2: 'MF',
    iso3: 'MAF',
    isoNo: '663',
    internet: 'MF'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Sint Maarten',
    capital: 'Philipsburg',
    fips: 'NN',
    iso2: 'SX',
    iso3: 'SXM',
    isoNo: '534',
    internet: 'SX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Timor-Leste',
    capital: 'Dili',
    fips: 'TT',
    iso2: 'TL',
    iso3: 'TLS',
    isoNo: '626',
    internet: 'TL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'South Sudan',
    capital: 'Juba',
    fips: 'OD',
    iso2: 'SS',
    iso3: 'SSD',
    isoNo: '728',
    internet: 'SS'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Åland Islands',
    capital: 'Mariehamn',
    fips: 'AX',
    iso2: 'AX',
    iso3: 'ALA',
    isoNo: '248',
    internet: 'AX'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bonaire',
    capital: 'Kralendijk',
    fips: 'BQ',
    iso2: 'BQ',
    iso3: 'BES',
    isoNo: '535',
    internet: 'BQ'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Republic of Kosovo',
    capital: 'Pristina',
    fips: 'KV',
    iso2: 'XK',
    iso3: 'UNK',
    isoNo: null,
    internet: 'XK'
  },
]

module.exports.countries = countries


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/normalize.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style/normalize.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/modules/style/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;AAC3E;+EAC+E;AAC/E;;;EAGE;AACF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,SAAS;AACX;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;;EAGE;AACF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;AAC/E;;;EAGE;AACF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;AACF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;AACF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;AACF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;AACF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;;EAGE;AACF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;AAC/E;;;EAGE;AACF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;AACF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;AACF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;AACF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;AACF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;AACF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;AACF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;AACF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;AACF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;;EAGE;AACF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;AACF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;AACF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;AACF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;AACF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;EAEE;AACF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;AAC/E;;EAEE;AACF;EACE,aAAa;AACf;;AAEA;;EAEE;AACF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n  border-radius: 2px;\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n#city-name {\n  width: 29rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n  position: absolute;\n  font-size: 1.3rem;\n  max-width: 30rem;\n  mix-blend-mode: difference; /* Specifies how an element's content should blend with its direct parent background. */\n  text-shadow: 0.2px 0 0 currentColor;\n}\n\n/* Main */\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.container__logoBox {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  font-size: 26px;\n  color: #ff8f32;\n  text-shadow: 0 0 black;\n  mix-blend-mode: difference;\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 40%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n/* Loading component*/\n.container__loader {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  z-index: 1;\n}\n\n.loader__component {\n  border: 16px solid gray;\n  border-top: 16px solid rgb(92 210 255);\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* The switch */\n.switch {\n  position: absolute;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n  right: 0;\n  top: 5px;\n}\n\n.switch input {\n  opacity: 0; /* Hide default HTML checkbox */\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: #706e6e;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: white;\n  text-shadow: none;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(./normalize.css);\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap\");\n\n:root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n  border-radius: 2px;\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n#city-name {\n  width: 29rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n  position: absolute;\n  font-size: 1.3rem;\n  max-width: 30rem;\n  mix-blend-mode: difference; /* Specifies how an element's content should blend with its direct parent background. */\n  text-shadow: 0.2px 0 0 currentColor;\n}\n\n/* Main */\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.container__logoBox {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  font-size: 26px;\n  color: #ff8f32;\n  text-shadow: 0 0 black;\n  mix-blend-mode: difference;\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 40%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n/* Loading component*/\n.container__loader {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.625);\n  z-index: 1;\n}\n\n.loader__component {\n  border: 16px solid gray;\n  border-top: 16px solid rgb(92 210 255);\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* The switch */\n.switch {\n  position: absolute;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n  right: 0;\n  top: 5px;\n}\n\n.switch input {\n  opacity: 0; /* Hide default HTML checkbox */\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: #706e6e;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: white;\n  text-shadow: none;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/style/style.css":
/*!*************************************!*\
  !*** ./src/modules/style/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg":
/*!************************************************************************!*\
  !*** ./src/images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "anandu-vinod-pbxwxwfI0B4-unsplash.jpg";

/***/ }),

/***/ "./src/images/broken-clouds/raychel-sanner-cswvKS59E90-unsplash.jpeg":
/*!***************************************************************************!*\
  !*** ./src/images/broken-clouds/raychel-sanner-cswvKS59E90-unsplash.jpeg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "raychel-sanner-cswvKS59E90-unsplash.jpeg";

/***/ }),

/***/ "./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg":
/*!***************************************************************************!*\
  !*** ./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "grooveland-designs-zjoydJb17mE-unsplash.jpeg";

/***/ }),

/***/ "./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg":
/*!********************************************************************!*\
  !*** ./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "kevin-buman-7YD8Q-3mEMg-unsplash.jpeg";

/***/ }),

/***/ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aziz-ayad-NJDyFoXDAus-unsplash.jpeg";

/***/ }),

/***/ "./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sid-soni-D8VwM3N5xz4-unsplash.jpg";

/***/ }),

/***/ "./src/images/home/aaron-burden--3Dc-I-65ug-unsplash.jpeg":
/*!****************************************************************!*\
  !*** ./src/images/home/aaron-burden--3Dc-I-65ug-unsplash.jpeg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aaron-burden--3Dc-I-65ug-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/abednego-s-g-h7FysA92Jww-unsplash.jpeg":
/*!****************************************************************!*\
  !*** ./src/images/home/abednego-s-g-h7FysA92Jww-unsplash.jpeg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abednego-s-g-h7FysA92Jww-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/billy-huynh-PHB9CK5K7js-unsplash.jpeg":
/*!***************************************************************!*\
  !*** ./src/images/home/billy-huynh-PHB9CK5K7js-unsplash.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "billy-huynh-PHB9CK5K7js-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/caleb-stokes-pY1FKeEP8v8-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/home/caleb-stokes-pY1FKeEP8v8-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "caleb-stokes-pY1FKeEP8v8-unsplash.jpg";

/***/ }),

/***/ "./src/images/home/daniel-leone-v7daTKlZzaw-unsplash.jpeg":
/*!****************************************************************!*\
  !*** ./src/images/home/daniel-leone-v7daTKlZzaw-unsplash.jpeg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "daniel-leone-v7daTKlZzaw-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/greg-rosenke-J90VAXIQK88-unsplash.jpeg":
/*!****************************************************************!*\
  !*** ./src/images/home/greg-rosenke-J90VAXIQK88-unsplash.jpeg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "greg-rosenke-J90VAXIQK88-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/ian-dooley-DuBNA1QMpPA-unsplash.jpeg":
/*!**************************************************************!*\
  !*** ./src/images/home/ian-dooley-DuBNA1QMpPA-unsplash.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ian-dooley-DuBNA1QMpPA-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/john-fowler-RsRTIofe0HE-unsplash.jpeg":
/*!***************************************************************!*\
  !*** ./src/images/home/john-fowler-RsRTIofe0HE-unsplash.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "john-fowler-RsRTIofe0HE-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg":
/*!********************************************************************!*\
  !*** ./src/images/home/nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/simon-berger-twukN12EN7c-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/home/simon-berger-twukN12EN7c-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "simon-berger-twukN12EN7c-unsplash.jpg";

/***/ }),

/***/ "./src/images/home/willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg":
/*!**********************************************************************************!*\
  !*** ./src/images/home/willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg";

/***/ }),

/***/ "./src/images/home/wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg":
/*!************************************************************************!*\
  !*** ./src/images/home/wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "wladislaw-sokolowskij-0vw4InAC-yM-unsplash.jpg";

/***/ }),

/***/ "./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg":
/*!*****************************************************************!*\
  !*** ./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "chris-leipelt-kWd5ER2XpSg-unsplash.jpeg";

/***/ }),

/***/ "./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg":
/*!*********************************************************************!*\
  !*** ./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg";

/***/ }),

/***/ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg";

/***/ }),

/***/ "./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "stormseeker-vRCZ3DztaoA-unsplash.jpg";

/***/ }),

/***/ "./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg":
/*!******************************************************************************!*\
  !*** ./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "herrmann-stamm-4vmjOLf9edk-unsplash.jpeg";

/***/ }),

/***/ "./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg":
/*!****************************************************************************!*\
  !*** ./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nick-fewings-ZtDiJzokZi0-unsplash.jpeg";

/***/ }),

/***/ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg":
/*!**********************************************************************!*\
  !*** ./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "kyle-szegedi-JSmc0GmSV1o-unsplash.jpg";

/***/ }),

/***/ "./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nic-y-c-CrXuYxfOJ4I-unsplash.jpg";

/***/ }),

/***/ "./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "alex-teplitz-I-Tg2H84mos-unsplash.jpg";

/***/ }),

/***/ "./src/images/snow/daniel-mirlea-oIZUFJW8VhE-unsplash.jpeg":
/*!*****************************************************************!*\
  !*** ./src/images/snow/daniel-mirlea-oIZUFJW8VhE-unsplash.jpeg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "daniel-mirlea-oIZUFJW8VhE-unsplash.jpeg";

/***/ }),

/***/ "./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg":
/*!****************************************************************************!*\
  !*** ./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg";

/***/ }),

/***/ "./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg":
/*!*************************************************************************!*\
  !*** ./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "raychel-sanner-LCswFCnyE6Y-unsplash.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/style/style.css */ "./src/modules/style/style.css");
/* harmony import */ var _modules_model_mainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/model/mainModel */ "./src/modules/model/mainModel.js");
/* harmony import */ var _modules_view_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view/mainView */ "./src/modules/view/mainView.js");
/* harmony import */ var _modules_controller_mainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controller/mainController */ "./src/modules/controller/mainController.js");




var model = new _modules_model_mainModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
var view = new _modules_view_mainView__WEBPACK_IMPORTED_MODULE_2__["default"]();
var controller = new _modules_controller_mainController__WEBPACK_IMPORTED_MODULE_3__["default"](model, view);

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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SyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxRQUFRLEtBQUssS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sS0FBSyxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxLQUFLLE1BQU0sWUFBWSxPQUFPLE9BQU8sS0FBSyxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sT0FBTyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLFFBQVEsS0FBSyxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxRQUFRLFlBQVksT0FBTyxNQUFNLEtBQUssUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssUUFBUSxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLFNBQVMsS0FBSyxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxPQUFPLEtBQUssTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sT0FBTyxLQUFLLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTSxL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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTNMLEtBQUssR0FBRyxJQUFJa0gsZ0VBQUosRUFBZDtBQUNBLElBQU1qSCxJQUFJLEdBQUcsSUFBSTBMLDhEQUFKLEVBQWI7QUFDQSxJQUFNZSxVQUFVLEdBQUcsSUFBSTNNLDBFQUFKLENBQWVDLEtBQWYsRUFBc0JDLElBQXRCLENBQW5COztBQUVBLElBQUlPLE1BQU0sQ0FBQ21NLE9BQVAsQ0FBZUMsWUFBbkIsRUFBaUM7RUFDL0JwTSxNQUFNLENBQUNtTSxPQUFQLENBQWVDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBa0MsSUFBbEMsRUFBd0NwTSxNQUFNLENBQUNxTSxRQUFQLENBQWdCQyxJQUF4RDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL21vZGVsL0VpZ2h0RGF5c0NhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbk1vZGVsLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcvY2hhbmdlQmcuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy9tYWluVmlldy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY291bnRyeS1jb2RlLWxvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdHlsZS9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb29rdXAgPSByZXF1aXJlKFwiY291bnRyeS1jb2RlLWxvb2t1cFwiKTtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB0aGlzLnNlYXJjaFdlYXRoZXIoZSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHRoaXMuY2hlY2tJbnB1dCgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gdGhpcy52aWV3LnNldEhvbWVQYWdlQmcoKSk7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWdyZWVCaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2RlZ3JlZXNcIilbMF07XG4gICAgY29uc3QgZGVncmVlU21hbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHNfX2ZlZWxzTGlrZSwgLmRhaWx5Q2FyZF9fbWF4LCAuZGFpbHlDYXJkX19taW5cIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc19fd2luZFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fbm90Rm91bmRcIilbMF07XG4gICAgY29uc3Qgc3dpdGNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2ggaW5wdXRcIik7XG4gICAgY29uc3QgbG9hZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJfX2xvYWRlclwiKVswXTtcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbYWx0PVwiU2VhcmNoXCJdJyk7XG5cbiAgICByZXR1cm4geyBpbnB1dCwgZGVncmVlQmlnLCBkZWdyZWVTbWFsbCwgd2luZCwgbWFpbiwgc3Bhbiwgc3dpdGNoQnRuLCBsb2FkRGl2LCBzZWFyY2hCdG4gfTtcbiAgfVxuXG4gIGNoZWNrSW5wdXQoKSB7XG4gICAgdGhpcy52aWV3LkNoZWNrRW1wdHkodGhpcy5nZXRFbGVtZW50cygpLmlucHV0LCB0aGlzLmdldEVsZW1lbnRzKCkuc3Bhbik7XG4gIH1cblxuICBhc3luYyBzZWFyY2hXZWF0aGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmdldEVsZW1lbnRzKCkuaW5wdXQudmFsaWRpdHkudmFsaWQpIHJldHVybiB0aGlzLnZpZXcuc2hvd0VtcHR5RXJyb3IodGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICAgIHRoaXMudmlldy5zaG93Q29udGVudCgyKTtcbiAgICBjb25zdCBnZW9Mb2NhdGlvbiA9IGF3YWl0IHRoaXMuZ2V0R2VvTG9jYXRpb24oKTtcbiAgICBpZiAodHlwZW9mIGdlb0xvY2F0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkubG9hZERpdi5yZW1vdmUoKTtcbiAgICAgIHJldHVybiB0aGlzLnZpZXcuc2hvd1Vua25vd25DaXR5RXJyb3IodGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0Q3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24pO1xuICAgIGNvbnN0IGVpZ2h0RGF5c1dlYXRoZXIgPSBhd2FpdCB0aGlzLmdldEVpZ2h0RGF5c1dlYXRoZXIoZ2VvTG9jYXRpb24pO1xuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzKCkubWFpbi5oYXNDaGlsZE5vZGVzKCkpIHRoaXMudmlldy5kZWxldGVDb250ZW50KHRoaXMuZ2V0RWxlbWVudHMoKS5tYWluKTtcbiAgICB0aGlzLnZpZXcuc2hvd0NvbnRlbnQoMCk7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLnN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY2hhbmdlVW5pdHMoZSkpO1xuICAgIHRoaXMubW9kZWwuY3JlYXRlTWFpbkNhcmQoY3VycmVudFdlYXRoZXIsIGdlb0xvY2F0aW9uKTtcbiAgICB0aGlzLnZpZXcuc2hvd0NvbnRlbnQoMSk7XG4gICAgdGhpcy5tb2RlbC5jcmVhdGVFaWdodERheXNDYXJkKGVpZ2h0RGF5c1dlYXRoZXIpO1xuICAgIHRoaXMudmlldy5jaGFuZ2VCYWNrZ3JvdW5kKGN1cnJlbnRXZWF0aGVyKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdlb0xvY2F0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzKCkuaW5wdXQudmFsdWU7XG4gICAgY29uc3QgZ2VvTG9jYXRpb24gPSBhd2FpdCB0aGlzLm1vZGVsLmZldGNoR2VvTG9jYXRpb24odGhpcy5jb252ZXJ0Q291bnRyeU5hbWVUb0NvZGUoaW5wdXRWYWx1ZSkpO1xuICAgIHJldHVybiBnZW9Mb2NhdGlvbjtcbiAgfVxuXG4gIGNvbnZlcnRDb3VudHJ5TmFtZVRvQ29kZShpbnB1dCkge1xuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpbnB1dC5zcGxpdChcIixcIik7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBpbnB1dEFycmF5WzBdO1xuICAgIGNvbnN0IGNvdW50cnkgPSBpbnB1dC5zdWJzdHJpbmcoaW5wdXQubGFzdEluZGV4T2YoXCIsXCIpICsgMSk7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSB0aGlzLmNhcGl0YWxpemUoY291bnRyeS50cmltKCkpO1xuICAgIGlmIChsb29rdXAuYnlDb3VudHJ5KGNvdW50cnlOYW1lKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBsb29rdXAuYnlDb3VudHJ5KGNvdW50cnlOYW1lKS5pc28yO1xuICAgICAgcmV0dXJuIGAke2NpdHlOYW1lfSwgJHtjb3VudHJ5Q29kZX1gO1xuICAgIH0gZWxzZSByZXR1cm4gYCR7Y2l0eU5hbWV9YDtcbiAgfVxuXG4gIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgY29uc3Qgc3BsaXRTdHIgPSBzdHIudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdFN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgc3BsaXRTdHJbaV0gPSBzcGxpdFN0cltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNwbGl0U3RyW2ldLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIHNwbGl0U3RyLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHRoaXMubW9kZWwuZmV0Y2hDdXJyZW50V2VhdGhlcihnZW9Mb2NhdGlvbi5sYXQsIGdlb0xvY2F0aW9uLmxvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xuICB9XG5cbiAgYXN5bmMgZ2V0RWlnaHREYXlzV2VhdGhlcihnZW9Mb2NhdGlvbikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c1dlYXRoZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZldGNoRWlnaHREYXlzV2VhdGhlcihnZW9Mb2NhdGlvbi5sYXQsIGdlb0xvY2F0aW9uLmxvbik7XG4gICAgcmV0dXJuIGVpZ2h0RGF5c1dlYXRoZXI7XG4gIH1cblxuICBjaGFuZ2VVbml0cygpIHtcbiAgICBpZiAodGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxzaXVzLS1iaWdcIikpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ZhaHJlbmhlaXQodGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy50ZXh0Q29udGVudCk7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udmVydFRvTXBoKHRoaXMuZ2V0RWxlbWVudHMoKS53aW5kLnRleHRDb250ZW50KX0gbXBoYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdC0tYmlnXCIpKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQpO1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnZlcnRUb0ttaCh0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCl9IGttL2hgO1xuICAgIH1cbiAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxzaXVzLS1iaWdcIik7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy5jbGFzc0xpc3QudG9nZ2xlKFwiZmFocmVuaGVpdC0tYmlnXCIpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlU21hbGwpIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbHNpdXNcIikpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ZhaHJlbmhlaXQoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2Vsc2l1c1wiKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZhaHJlbmhlaXRcIik7XG4gICAgfVxuICB9XG5cbiAgY29udmVydFRvQ2Vsc2l1cyhkZWdyZWUpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KGRlZ3JlZSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbE51bSAtIDMyKSAvIDEuOCk7XG4gIH1cblxuICBjb252ZXJ0VG9GYWhyZW5oZWl0KGRlZ3JlZSkge1xuICAgIGNvbnN0IHZhbE51bSA9IHBhcnNlRmxvYXQoZGVncmVlKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWxOdW0gKiAxLjggKyAzMik7XG4gIH1cblxuICBjb252ZXJ0VG9LbWgoc3BlZWQpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KHNwZWVkKTtcbiAgICByZXR1cm4gKHZhbE51bSAqIDEuNjA5KS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgY29udmVydFRvTXBoKHNwZWVkKSB7XG4gICAgY29uc3QgdmFsTnVtID0gcGFyc2VGbG9hdChzcGVlZCk7XG4gICAgcmV0dXJuICh2YWxOdW0gLyAxLjYwOSkudG9GaXhlZCgyKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImNsYXNzIEVpZ2h0RGF5c0NhcmQge1xuICBjb25zdHJ1Y3RvcihlaWdodERheXNXZWF0aGVyKSB7XG4gICAgdGhpcy5kYXRhID0gZWlnaHREYXlzV2VhdGhlcjtcbiAgfVxuXG4gIGZpbGxFaWdodERheXNDYXJkKCkge1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWF4XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWluXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlDb250YWluZXIgaW1nXCIpO1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgbWF4VGVtcFtpXS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodGhpcy5kYXRhLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICAgIG1pblRlbXBbaV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgICBpbWdbaV0uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGhpcy5kYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IHRoaXMuZ2V0RGF5T2ZXZWVrKG5ldyBEYXRlKHRoaXMuZGF0YS5kYWlseVtpXS5kdCAqIDEwMDApLmdldERheSgpKTsgLy8gVHVybnMgVW5peCBUaW1lc3RhbXAgdG8gd2VlayBkYXlcbiAgICAgIGRheVtpXS50ZXh0Q29udGVudCA9IGRheU9mV2VlaztcbiAgICB9XG4gIH1cblxuICBnZXREYXlPZldlZWsobnVtYmVyKSB7XG4gICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcIk1vbmRheVwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJUdWVzZGF5XCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gXCJUaHVyc2RheVwiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJGcmlkYXlcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVpZ2h0RGF5c0NhcmQ7XG4iLCJjbGFzcyBNYWluQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy5kZWdyZWVzID0gZGVncmVlcztcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGZlZWxzTGlrZTtcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxuXG4gIGZpbGxNYWluQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZCBwXCIpO1xuICAgIGNvbnN0IGNhcmREYXRhID0gW3RoaXMuY29uZGl0aW9uLCB0aGlzLmNpdHksIHRoaXMuZGVncmVlcywgdGhpcy5mZWVsc0xpa2UsIHRoaXMud2luZCwgdGhpcy5odW1pZGl0eV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgY2FyZEluZm9baV0udGV4dENvbnRlbnQgPSBjYXJkRGF0YVtpXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhcmQ7XG4iLCJpbXBvcnQgTWFpbkNhcmQgZnJvbSBcIi4vbWFpbkNhcmRcIjtcbmltcG9ydCBFaWdodERheXNDYXJkIGZyb20gXCIuL0VpZ2h0RGF5c0NhcmRcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmtleSA9IFwiOTA3MjBmNDIyYmI1Y2Y3NGY5MWJlNzYxMDFmNDhmNTBcIjtcbiAgICB0aGlzLm1ldHJpYyA9IFwibWV0cmljXCI7XG4gICAgdGhpcy5pbXBlcmlhbCA9IFwiaW1wZXJpYWxcIjtcbiAgfVxuXG4gIGFzeW5jIGZldGNoR2VvTG9jYXRpb24oc2VhcmNoVGV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaFRleHR9JmFwcGlkPSR7dGhpcy5rZXl9YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhWzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVyciwgXCJSZWZyZXNoIHBhZ2UgYW5kIHRyeSBhZ2FpbiBsYXRlclwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaEN1cnJlbnRXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke3RoaXMua2V5fSZ1bml0cz1tZXRyaWNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBmZXRjaEVpZ2h0RGF5c1dlYXRoZXIobGF0LCBsb24pIHtcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9aG91cmx5LG1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz1tZXRyaWMmYXBwaWQ9MjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjcmVhdGVNYWluQ2FyZChjdXJyZW50V2VhdGhlciwgZ2VvTG9jYXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJlZ2lvbk5hbWVzSW5FbmdsaXNoID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7IC8vIFRvIGNvbnZlcnQgQ0EgdG8gQ2FuYWRhLCBwZXIgZXhhbXBsZVxuICAgIGNvbnN0IGNpdHkgPSBgJHtnZW9Mb2NhdGlvbi5uYW1lfSwgJHtyZWdpb25OYW1lc0luRW5nbGlzaC5vZihjdXJyZW50V2VhdGhlci5zeXMuY291bnRyeSl9YDtcbiAgICBjb25zdCBkZWdyZWVzID0gTWF0aC5yb3VuZChjdXJyZW50V2VhdGhlci5tYWluLnRlbXApO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjb25zdCB3aW5kID0gYCR7dGhpcy5jb252ZXJ0RnJvbU1zKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpfSBrbS9oYDtcbiAgICBjb25zdCBodW1pZGl0eSA9IGBIVU1JRElUWTogJHtjdXJyZW50V2VhdGhlci5tYWluLmh1bWlkaXR5fSVgO1xuICAgIGNvbnN0IG1haW5DYXJkID0gdGhpcy5nZW5lcmF0ZU1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgbWFpbkNhcmQuZmlsbE1haW5DYXJkKCk7XG4gIH1cblxuICBjb252ZXJ0RnJvbU1zKHNwZWVkKSB7XG4gICAgcmV0dXJuIChzcGVlZCAqIDMuNikudG9GaXhlZCgyKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWFpbkNhcmQoY29uZGl0aW9uLCBjaXR5LCBkZWdyZWVzLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgY29uc3QgbWFpbkNhcmRJdGVtID0gbmV3IE1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgcmV0dXJuIG1haW5DYXJkSXRlbTtcbiAgfVxuXG4gIGNyZWF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmQgPSB0aGlzLmdlbmVyYXRlRWlnaHREYXlzQ2FyZChlaWdodERheXNXZWF0aGVyKTtcbiAgICBlaWdodERheXNDYXJkLmZpbGxFaWdodERheXNDYXJkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmRJdGVtID0gbmV3IEVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcik7XG4gICAgcmV0dXJuIGVpZ2h0RGF5c0NhcmRJdGVtO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiaW1wb3J0IGNsZWFyU2t5RGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvY2xlYXItc2t5L2dyb292ZWxhbmQtZGVzaWducy16am95ZEpiMTdtRS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgY2xlYXJTa3lOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NsZWFyLXNreS9rZXZpbi1idW1hbi03WUQ4US0zbUVNZy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgZmV3Q2xvdWRzRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9heml6LWF5YWQtTkpEeUZvWERBdXMtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGZld0Nsb3Vkc05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9zaWQtc29uaS1EOFZ3TTNONXh6NC11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBzY2F0dGVyZWRDbG91ZHNEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzTmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL2hlcnJtYW5uLXN0YW1tLTR2bWpPTGY5ZWRrLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBicm9rZW5DbG91ZHNEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9icm9rZW4tY2xvdWRzL3JheWNoZWwtc2FubmVyLWNzd3ZLUzU5RTkwLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBicm9rZW5DbG91ZHNOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jyb2tlbi1jbG91ZHMvYW5hbmR1LXZpbm9kLXBieHd4d2ZJMEI0LXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zaG93ZXItcmFpbi9uaWMteS1jLUNyWHVZeGZPSjRJLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nob3dlci1yYWluL2t5bGUtc3plZ2VkaS1KU21jMEdtU1Yxby11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCByYWluRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvcmFpbi9zaW1vbi1rdXpuZXRzb3YtaWdReDNFVGtLWlktdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaW4vc3Rvcm1zZWVrZXItdlJDWjNEenRhb0EtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgdGh1bmRlcnN0b3JtRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvdGh1bmRlcnN0b3JtL3JheWNoZWwtc2FubmVyLUxDc3dGQ255RTZZLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybU5pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvdGh1bmRlcnN0b3JtL21pY2hhbC1tYW5jZXdpY3otUjlMN3VraEJTZ3MtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHNub3dEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zbm93L2RhbmllbC1taXJsZWEtb0laVUZKVzhWaEUtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nub3cvYWxleC10ZXBsaXR6LUktVGcySDg0bW9zLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IG1pc3REYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9taXN0L2NocmlzLWxlaXBlbHQta1dkNUVSMlhwU2ctdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21pc3QvZGFuaWlsLW9uaXNjaGVua28tM0M2RElHdlpmRXctdW5zcGxhc2guanBlZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWNvbkNvZGUpIHtcbiAgc3dpdGNoIChpY29uQ29kZSkge1xuICAgIGNhc2UgXCIwMWRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGNsZWFyU2t5RGF5KTtcbiAgICBjYXNlIFwiMDFuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhjbGVhclNreU5pZ2h0KTtcbiAgICBjYXNlIFwiMDJkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhmZXdDbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwMm5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGZld0Nsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDNkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzY2F0dGVyZWRDbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwM25cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNjYXR0ZXJlZENsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDRkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhicm9rZW5DbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwNG5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGJyb2tlbkNsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDlkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzaG93ZXJSYWluRGF5KTtcbiAgICBjYXNlIFwiMDluXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzaG93ZXJSYWluTmlnaHQpO1xuICAgIGNhc2UgXCIxMGRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHJhaW5EYXkpO1xuICAgIGNhc2UgXCIxMG5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHJhaW5OaWdodCk7XG4gICAgY2FzZSBcIjExZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcodGh1bmRlcnN0b3JtRGF5KTtcbiAgICBjYXNlIFwiMTFuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyh0aHVuZGVyc3Rvcm1OaWdodCk7XG4gICAgY2FzZSBcIjEzZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc25vd0RheSk7XG4gICAgY2FzZSBcIjEzblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc25vd05pZ2h0KTtcbiAgICBjYXNlIFwiNTBkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhtaXN0RGF5KTtcbiAgICBjYXNlIFwiNTBuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhtaXN0TmlnaHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW5CZyhpbWFnZSkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1hZ2V9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmA7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG59XG5cbmZ1bmN0aW9uIHNldERhaWx5Q29udGFpbmVyQkcoY29sb3IpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseUNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QuYWRkKGNvbG9yKTtcbn1cbiIsImltcG9ydCBjaGFuZ2VCZyBmcm9tIFwiLi9jaGFuZ2VCZ1wiO1xuaW1wb3J0IGltYWdlMCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUvYWFyb24tYnVyZGVuLS0zRGMtSS02NXVnLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBpbWFnZTEgZnJvbSBcIi4uLy4uL2ltYWdlcy9ob21lL2RhbmllbC1sZW9uZS12N2RhVEtsWnphdy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2UyIGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9ncmVnLXJvc2Vua2UtSjkwVkFYSVFLODgtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUvaWFuLWRvb2xleS1EdUJOQTFRTXBQQS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U0IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9qb2huLWZvd2xlci1Sc1JUSW9mZTBIRS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U1IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9zaW1vbi1iZXJnZXItdHd1a04xMkVON2MtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgaW1hZ2U2IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9jYWxlYi1zdG9rZXMtcFkxRktlRVA4djgtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgaW1hZ2U3IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS93aWxsaWFuLWp1c3Rlbi1kZS12YXNjb25jZWxsb3Mtak9GMlRGU054UUktdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGltYWdlOCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUvYWJlZG5lZ28tcy1nLWg3RnlzQTkySnd3LXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBpbWFnZTkgZnJvbSBcIi4uLy4uL2ltYWdlcy9ob21lL25pZGhlZXNoLWthdmFsYW4tSGE1MDFNQl9YRTgtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGltYWdlMTAgZnJvbSBcIi4uLy4uL2ltYWdlcy9ob21lL3dsYWRpc2xhdy1zb2tvbG93c2tpai0wdnc0SW5BQy15TS11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBpbWFnZTExIGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9iaWxseS1odXluaC1QSEI5Q0s1Szdqcy11bnNwbGFzaC5qcGVnXCI7XG5cbmNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0SG9tZVBhZ2VCZygpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMik7XG4gICAgY29uc3QgaW1hZ2VzID0gW2ltYWdlMCwgaW1hZ2UxLCBpbWFnZTIsIGltYWdlMywgaW1hZ2U0LCBpbWFnZTUsIGltYWdlNiwgaW1hZ2U3LCBpbWFnZTgsIGltYWdlOSwgaW1hZ2UxMCwgaW1hZ2UxMV07XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltYWdlc1tyYW5kb21OdW1iZXJdfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gIH1cblxuICBzaG93Q29udGVudChwb3NpdGlvbikge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRlbXBsYXRlXCIpW3Bvc2l0aW9uXTtcbiAgICBjb25zdCBjbG9uZSA9IHRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXS5hcHBlbmQoY2xvbmUpO1xuICB9XG5cbiAgZGVsZXRlQ29udGVudChwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlQmFja2dyb3VuZChjdXJyZW50V2VhdGhlcikge1xuICAgIGNoYW5nZUJnKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbik7XG4gIH1cblxuICBzaG93RW1wdHlFcnJvcihzcGFuKSB7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IFwi4pyWIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItLWFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNob3dVbmtub3duQ2l0eUVycm9yKHNwYW4pIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJ+KcliBMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSB0cnkgYW5vdGhlciBjaXR5IG9yIG1hdGNoaW5nIGZvcm1hdDogXCJDaXR5XCIgb3IgXCJDaXR5LCBDb3VudHJ5XCIuJztcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJlcnJvci0tYWN0aXZlXCIpO1xuICB9XG5cbiAgQ2hlY2tFbXB0eShpbnB1dCwgc3Bhbikge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7IC8vIFJlc2V0IHRvIGluaXRpYWwgc3RhdGVcbiAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJmb3JtX19ub3RGb3VuZFwiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwibW9kdWxlLmV4cG9ydHMuYnlGaXBzID0gZnVuY3Rpb24oY29kZSkge1xuICByZXR1cm4gc2VhcmNoKCdmaXBzJywgY29kZS50b1VwcGVyQ2FzZSgpKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5ieUlzbyA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgaWYgKCFpc05hTihwYXJzZUludChjb2RlKSkpIHtcbiAgICByZXR1cm4gc2VhcmNoKCdpc29ObycsIGNvZGUudG9TdHJpbmcoKSlcbiAgfVxuXG4gIGlmIChjb2RlLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiBzZWFyY2goJ2lzbzInLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG4gIH1cblxuICBpZiAoY29kZS5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gc2VhcmNoKCdpc28zJywgY29kZS50b1VwcGVyQ2FzZSgpKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZGV0ZXJtaW5lIElTTyBjb2RlIHR5cGUnKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5ieUludGVybmV0ID0gZnVuY3Rpb24oY29kZSkge1xuICByZXR1cm4gc2VhcmNoKCdpbnRlcm5ldCcsIGNvZGUudG9VcHBlckNhc2UoKSlcbn1cblxubW9kdWxlLmV4cG9ydHMuYnlDb3VudHJ5ID0gZnVuY3Rpb24oY291bnRyeSkge1xuICByZXR1cm4gc2VhcmNoKCdjb3VudHJ5JywgY291bnRyeSlcbn1cblxuZnVuY3Rpb24gc2VhcmNoKGZpZWxkLCBjb2RlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvdW50cmllc1tpXVtmaWVsZF0gPT09IGNvZGUpIHtcbiAgICAgIHJldHVybiBjb3VudHJpZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxudmFyIGNvdW50cmllcyA9IFtcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdBZmdoYW5pc3RhbicsXG4gICAgY2FwaXRhbDogJ0thYnVsJyxcbiAgICBmaXBzOiAnQUYnLFxuICAgIGlzbzI6ICdBRicsXG4gICAgaXNvMzogJ0FGRycsXG4gICAgaXNvTm86ICc0JyxcbiAgICBpbnRlcm5ldDogJ0FGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0FsYmFuaWEnLFxuICAgIGNhcGl0YWw6ICdUaXJhbmEnLFxuICAgIGZpcHM6ICdBTCcsXG4gICAgaXNvMjogJ0FMJyxcbiAgICBpc28zOiAnQUxCJyxcbiAgICBpc29ObzogJzgnLFxuICAgIGludGVybmV0OiAnQUwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0FsZ2VyaWEnLFxuICAgIGNhcGl0YWw6ICdBbGdpZXJzJyxcbiAgICBmaXBzOiAnQUcnLFxuICAgIGlzbzI6ICdEWicsXG4gICAgaXNvMzogJ0RaQScsXG4gICAgaXNvTm86ICcxMicsXG4gICAgaW50ZXJuZXQ6ICdEWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdBbWVyaWNhbiBTYW1vYScsXG4gICAgY2FwaXRhbDogJ1BhZ28gUGFnbycsXG4gICAgZmlwczogJ0FRJyxcbiAgICBpc28yOiAnQVMnLFxuICAgIGlzbzM6ICdBU00nLFxuICAgIGlzb05vOiAnMTYnLFxuICAgIGludGVybmV0OiAnQVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQW5kb3JyYScsXG4gICAgY2FwaXRhbDogJ0FuZG9ycmEgbGEgVmVsbGEnLFxuICAgIGZpcHM6ICdBTicsXG4gICAgaXNvMjogJ0FEJyxcbiAgICBpc28zOiAnQU5EJyxcbiAgICBpc29ObzogJzIwJyxcbiAgICBpbnRlcm5ldDogJ0FEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdBbmdvbGEnLFxuICAgIGNhcGl0YWw6ICdMdWFuZGEnLFxuICAgIGZpcHM6ICdBTycsXG4gICAgaXNvMjogJ0FPJyxcbiAgICBpc28zOiAnQUdPJyxcbiAgICBpc29ObzogJzI0JyxcbiAgICBpbnRlcm5ldDogJ0FPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQW5ndWlsbGEnLFxuICAgIGNhcGl0YWw6ICdUaGUgVmFsbGV5JyxcbiAgICBmaXBzOiAnQVYnLFxuICAgIGlzbzI6ICdBSScsXG4gICAgaXNvMzogJ0FJQScsXG4gICAgaXNvTm86ICc2NjAnLFxuICAgIGludGVybmV0OiAnQUknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgICBjYXBpdGFsOiBcIlNhaW50IEpvaG4nc1wiLFxuICAgIGZpcHM6ICdBQycsXG4gICAgaXNvMjogJ0FHJyxcbiAgICBpc28zOiAnQVRHJyxcbiAgICBpc29ObzogJzI4JyxcbiAgICBpbnRlcm5ldDogJ0FHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdBcmdlbnRpbmEnLFxuICAgIGNhcGl0YWw6ICdCdWVub3MgQWlyZXMnLFxuICAgIGZpcHM6ICdBUicsXG4gICAgaXNvMjogJ0FSJyxcbiAgICBpc28zOiAnQVJHJyxcbiAgICBpc29ObzogJzMyJyxcbiAgICBpbnRlcm5ldDogJ0FSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQXJtZW5pYScsXG4gICAgY2FwaXRhbDogJ1llcmV2YW4nLFxuICAgIGZpcHM6ICdBTScsXG4gICAgaXNvMjogJ0FNJyxcbiAgICBpc28zOiAnQVJNJyxcbiAgICBpc29ObzogJzUxJyxcbiAgICBpbnRlcm5ldDogJ0FNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQXJ1YmEnLFxuICAgIGNhcGl0YWw6ICdPcmFuamVzdGFkJyxcbiAgICBmaXBzOiAnQUEnLFxuICAgIGlzbzI6ICdBVycsXG4gICAgaXNvMzogJ0FCVycsXG4gICAgaXNvTm86ICc1MzMnLFxuICAgIGludGVybmV0OiAnQVcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnQXVzdHJhbGlhJyxcbiAgICBjYXBpdGFsOiAnQ2FuYmVycmEnLFxuICAgIGZpcHM6ICdBUycsXG4gICAgaXNvMjogJ0FVJyxcbiAgICBpc28zOiAnQVVTJyxcbiAgICBpc29ObzogJzM2JyxcbiAgICBpbnRlcm5ldDogJ0FVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0F1c3RyaWEnLFxuICAgIGNhcGl0YWw6ICdWaWVubmEnLFxuICAgIGZpcHM6ICdBVScsXG4gICAgaXNvMjogJ0FUJyxcbiAgICBpc28zOiAnQVVUJyxcbiAgICBpc29ObzogJzQwJyxcbiAgICBpbnRlcm5ldDogJ0FUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQXplcmJhaWphbicsXG4gICAgY2FwaXRhbDogJ0Jha3UgKEJha2kpJyxcbiAgICBmaXBzOiAnQUonLFxuICAgIGlzbzI6ICdBWicsXG4gICAgaXNvMzogJ0FaRScsXG4gICAgaXNvTm86ICczMScsXG4gICAgaW50ZXJuZXQ6ICdBWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1RoZSBCYWhhbWFzJyxcbiAgICBjYXBpdGFsOiAnTmFzc2F1JyxcbiAgICBmaXBzOiAnQkYnLFxuICAgIGlzbzI6ICdCUycsXG4gICAgaXNvMzogJ0JIUycsXG4gICAgaXNvTm86ICc0NCcsXG4gICAgaW50ZXJuZXQ6ICdCUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0JhaHJhaW4nLFxuICAgIGNhcGl0YWw6ICdNYW5hbWEnLFxuICAgIGZpcHM6ICdCQScsXG4gICAgaXNvMjogJ0JIJyxcbiAgICBpc28zOiAnQkhSJyxcbiAgICBpc29ObzogJzQ4JyxcbiAgICBpbnRlcm5ldDogJ0JIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0JhbmdsYWRlc2gnLFxuICAgIGNhcGl0YWw6ICdEaGFrYScsXG4gICAgZmlwczogJ0JHJyxcbiAgICBpc28yOiAnQkQnLFxuICAgIGlzbzM6ICdCR0QnLFxuICAgIGlzb05vOiAnNTAnLFxuICAgIGludGVybmV0OiAnQkQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCYXJiYWRvcycsXG4gICAgY2FwaXRhbDogJ0JyaWRnZXRvd24nLFxuICAgIGZpcHM6ICdCQicsXG4gICAgaXNvMjogJ0JCJyxcbiAgICBpc28zOiAnQlJCJyxcbiAgICBpc29ObzogJzUyJyxcbiAgICBpbnRlcm5ldDogJ0JCJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0JlbGFydXMnLFxuICAgIGNhcGl0YWw6ICdNaW5zaycsXG4gICAgZmlwczogJ0JPJyxcbiAgICBpc28yOiAnQlknLFxuICAgIGlzbzM6ICdCTFInLFxuICAgIGlzb05vOiAnMTEyJyxcbiAgICBpbnRlcm5ldDogJ0JZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0JlbGdpdW0nLFxuICAgIGNhcGl0YWw6ICdCcnVzc2VscycsXG4gICAgZmlwczogJ0JFJyxcbiAgICBpc28yOiAnQkUnLFxuICAgIGlzbzM6ICdCRUwnLFxuICAgIGlzb05vOiAnNTYnLFxuICAgIGludGVybmV0OiAnQkUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQmVsaXplJyxcbiAgICBjYXBpdGFsOiAnQmVsbW9wYW4nLFxuICAgIGZpcHM6ICdCSCcsXG4gICAgaXNvMjogJ0JaJyxcbiAgICBpc28zOiAnQkxaJyxcbiAgICBpc29ObzogJzg0JyxcbiAgICBpbnRlcm5ldDogJ0JaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0JlbmluJyxcbiAgICBjYXBpdGFsOiAnUG9ydG8tTm92b++/ve+/vScsXG4gICAgZmlwczogJ0JOJyxcbiAgICBpc28yOiAnQkonLFxuICAgIGlzbzM6ICdCRU4nLFxuICAgIGlzb05vOiAnMjA0JyxcbiAgICBpbnRlcm5ldDogJ0JKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQmVybXVkYScsXG4gICAgY2FwaXRhbDogJ0hhbWlsdG9uJyxcbiAgICBmaXBzOiAnQkQnLFxuICAgIGlzbzI6ICdCTScsXG4gICAgaXNvMzogJ0JNVScsXG4gICAgaXNvTm86ICc2MCcsXG4gICAgaW50ZXJuZXQ6ICdCTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdCaHV0YW4nLFxuICAgIGNhcGl0YWw6ICdUaGltcGh1JyxcbiAgICBmaXBzOiAnQlQnLFxuICAgIGlzbzI6ICdCVCcsXG4gICAgaXNvMzogJ0JUTicsXG4gICAgaXNvTm86ICc2NCcsXG4gICAgaW50ZXJuZXQ6ICdCVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQm9saXZpYScsXG4gICAgY2FwaXRhbDogJ0xhIFBheiAvIFN1Y3JlJyxcbiAgICBmaXBzOiAnQkwnLFxuICAgIGlzbzI6ICdCTycsXG4gICAgaXNvMzogJ0JPTCcsXG4gICAgaXNvTm86ICc2OCcsXG4gICAgaW50ZXJuZXQ6ICdCTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcbiAgICBjYXBpdGFsOiAnU2FyYWpldm8nLFxuICAgIGZpcHM6ICdCSycsXG4gICAgaXNvMjogJ0JBJyxcbiAgICBpc28zOiAnQklIJyxcbiAgICBpc29ObzogJzcwJyxcbiAgICBpbnRlcm5ldDogJ0JBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdCb3Rzd2FuYScsXG4gICAgY2FwaXRhbDogJ0dhYm9yb25lJyxcbiAgICBmaXBzOiAnQkMnLFxuICAgIGlzbzI6ICdCVycsXG4gICAgaXNvMzogJ0JXQScsXG4gICAgaXNvTm86ICc3MicsXG4gICAgaW50ZXJuZXQ6ICdCVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQnJhemlsJyxcbiAgICBjYXBpdGFsOiAnQnJhc2lsaWEnLFxuICAgIGZpcHM6ICdCUicsXG4gICAgaXNvMjogJ0JSJyxcbiAgICBpc28zOiAnQlJBJyxcbiAgICBpc29ObzogJzc2JyxcbiAgICBpbnRlcm5ldDogJ0JSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQnJpdGlzaCBWaXJnaW4gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ1JvYWQgVG93bicsXG4gICAgZmlwczogJ1ZJJyxcbiAgICBpc28yOiAnVkcnLFxuICAgIGlzbzM6ICdWR0InLFxuICAgIGlzb05vOiAnOTInLFxuICAgIGludGVybmV0OiAnVkcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdCcnVuZWknLFxuICAgIGNhcGl0YWw6ICdCYW5kYXIgU2VyaSBCZWdhd2FuJyxcbiAgICBmaXBzOiAnQlgnLFxuICAgIGlzbzI6ICdCTicsXG4gICAgaXNvMzogJ0JSTicsXG4gICAgaXNvTm86ICc5NicsXG4gICAgaW50ZXJuZXQ6ICdCTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdCdWxnYXJpYScsXG4gICAgY2FwaXRhbDogJ1NvZmlhJyxcbiAgICBmaXBzOiAnQlUnLFxuICAgIGlzbzI6ICdCRycsXG4gICAgaXNvMzogJ0JHUicsXG4gICAgaXNvTm86ICcxMDAnLFxuICAgIGludGVybmV0OiAnQkcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQnVya2luYSBGYXNvJyxcbiAgICBjYXBpdGFsOiAnT3VhZ2Fkb3Vnb3UnLFxuICAgIGZpcHM6ICdVVicsXG4gICAgaXNvMjogJ0JGJyxcbiAgICBpc28zOiAnQkZBJyxcbiAgICBpc29ObzogJzg1NCcsXG4gICAgaW50ZXJuZXQ6ICdCRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdCdXJ1bmRpJyxcbiAgICBjYXBpdGFsOiAnQnVqdW1idXJhJyxcbiAgICBmaXBzOiAnQlknLFxuICAgIGlzbzI6ICdCSScsXG4gICAgaXNvMzogJ0JESScsXG4gICAgaXNvTm86ICcxMDgnLFxuICAgIGludGVybmV0OiAnQkknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDYW1ib2RpYScsXG4gICAgY2FwaXRhbDogJ1Bobm9tIFBlbmgnLFxuICAgIGZpcHM6ICdDQicsXG4gICAgaXNvMjogJ0tIJyxcbiAgICBpc28zOiAnS0hNJyxcbiAgICBpc29ObzogJzExNicsXG4gICAgaW50ZXJuZXQ6ICdLSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDYW1lcm9vbicsXG4gICAgY2FwaXRhbDogJ1lhb3VuZGUnLFxuICAgIGZpcHM6ICdDTScsXG4gICAgaXNvMjogJ0NNJyxcbiAgICBpc28zOiAnQ01SJyxcbiAgICBpc29ObzogJzEyMCcsXG4gICAgaW50ZXJuZXQ6ICdDTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdOb3J0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2FuYWRhJyxcbiAgICBjYXBpdGFsOiAnT3R0YXdhJyxcbiAgICBmaXBzOiAnQ0EnLFxuICAgIGlzbzI6ICdDQScsXG4gICAgaXNvMzogJ0NBTicsXG4gICAgaXNvTm86ICcxMjQnLFxuICAgIGludGVybmV0OiAnQ0EnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2FwZSBWZXJkZScsXG4gICAgY2FwaXRhbDogJ1ByYWlhJyxcbiAgICBmaXBzOiAnQ1YnLFxuICAgIGlzbzI6ICdDVicsXG4gICAgaXNvMzogJ0NQVicsXG4gICAgaXNvTm86ICcxMzInLFxuICAgIGludGVybmV0OiAnQ1YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdDYXltYW4gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0dlb3JnZSBUb3duJyxcbiAgICBmaXBzOiAnQ0onLFxuICAgIGlzbzI6ICdLWScsXG4gICAgaXNvMzogJ0NZTScsXG4gICAgaXNvTm86ICcxMzYnLFxuICAgIGludGVybmV0OiAnS1knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcbiAgICBjYXBpdGFsOiAnQmFuZ3VpJyxcbiAgICBmaXBzOiAnQ1QnLFxuICAgIGlzbzI6ICdDRicsXG4gICAgaXNvMzogJ0NBRicsXG4gICAgaXNvTm86ICcxNDAnLFxuICAgIGludGVybmV0OiAnQ0YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2hhZCcsXG4gICAgY2FwaXRhbDogXCJOJ0RqYW1lbmFcIixcbiAgICBmaXBzOiAnQ0QnLFxuICAgIGlzbzI6ICdURCcsXG4gICAgaXNvMzogJ1RDRCcsXG4gICAgaXNvTm86ICcxNDgnLFxuICAgIGludGVybmV0OiAnVEQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0NoaWxlJyxcbiAgICBjYXBpdGFsOiAnU2FudGlhZ28nLFxuICAgIGZpcHM6ICdDSScsXG4gICAgaXNvMjogJ0NMJyxcbiAgICBpc28zOiAnQ0hMJyxcbiAgICBpc29ObzogJzE1MicsXG4gICAgaW50ZXJuZXQ6ICdDTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NoaW5hJyxcbiAgICBjYXBpdGFsOiAnQmVpamluZycsXG4gICAgZmlwczogJ0NIJyxcbiAgICBpc28yOiAnQ04nLFxuICAgIGlzbzM6ICdDSE4nLFxuICAgIGlzb05vOiAnMTU2JyxcbiAgICBpbnRlcm5ldDogJ0NOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ2hyaXN0bWFzIElzbGFuZCcsXG4gICAgY2FwaXRhbDogJ1RoZSBTZXR0bGVtZW50JyxcbiAgICBmaXBzOiAnS1QnLFxuICAgIGlzbzI6ICdDWCcsXG4gICAgaXNvMzogJ0NYUicsXG4gICAgaXNvTm86ICcxNjInLFxuICAgIGludGVybmV0OiAnQ1gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ1dlc3QgSXNsYW5kJyxcbiAgICBmaXBzOiAnQ0snLFxuICAgIGlzbzI6ICdDQycsXG4gICAgaXNvMzogJ0NDSycsXG4gICAgaXNvTm86ICcxNjYnLFxuICAgIGludGVybmV0OiAnQ0MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0NvbG9tYmlhJyxcbiAgICBjYXBpdGFsOiAnQm9nb3RhJyxcbiAgICBmaXBzOiAnQ08nLFxuICAgIGlzbzI6ICdDTycsXG4gICAgaXNvMzogJ0NPTCcsXG4gICAgaXNvTm86ICcxNzAnLFxuICAgIGludGVybmV0OiAnQ08nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ0NvbW9yb3MnLFxuICAgIGNhcGl0YWw6ICdNb3JvbmknLFxuICAgIGZpcHM6ICdDTicsXG4gICAgaXNvMjogJ0tNJyxcbiAgICBpc28zOiAnQ09NJyxcbiAgICBpc29ObzogJzE3NCcsXG4gICAgaW50ZXJuZXQ6ICdLTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdSZXB1YmxpYyBvZiB0aGUgQ29uZ28nLFxuICAgIGNhcGl0YWw6ICdCcmF6emF2aWxsZScsXG4gICAgZmlwczogJ0NGJyxcbiAgICBpc28yOiAnQ0cnLFxuICAgIGlzbzM6ICdDT0cnLFxuICAgIGlzb05vOiAnMTc4JyxcbiAgICBpbnRlcm5ldDogJ0NHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0Nvb2sgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0F2YXJ1YScsXG4gICAgZmlwczogJ0NXJyxcbiAgICBpc28yOiAnQ0snLFxuICAgIGlzbzM6ICdDT0snLFxuICAgIGlzb05vOiAnMTg0JyxcbiAgICBpbnRlcm5ldDogJ0NLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0Nvc3RhIFJpY2EnLFxuICAgIGNhcGl0YWw6ICdTYW4gSm9zZScsXG4gICAgZmlwczogJ0NTJyxcbiAgICBpc28yOiAnQ1InLFxuICAgIGlzbzM6ICdDUkknLFxuICAgIGlzb05vOiAnMTg4JyxcbiAgICBpbnRlcm5ldDogJ0NSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogXCJDb3RlIGQnSXZvaXJlXCIsXG4gICAgY2FwaXRhbDogJ1lhbW91c3NvdWtybycsXG4gICAgZmlwczogJ0lWJyxcbiAgICBpc28yOiAnQ0knLFxuICAgIGlzbzM6ICdDSVYnLFxuICAgIGlzb05vOiAnMzg0JyxcbiAgICBpbnRlcm5ldDogJ0NJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Nyb2F0aWEnLFxuICAgIGNhcGl0YWw6ICdaYWdyZWInLFxuICAgIGZpcHM6ICdIUicsXG4gICAgaXNvMjogJ0hSJyxcbiAgICBpc28zOiAnSFJWJyxcbiAgICBpc29ObzogJzE5MScsXG4gICAgaW50ZXJuZXQ6ICdIUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0N1YmEnLFxuICAgIGNhcGl0YWw6ICdIYXZhbmEnLFxuICAgIGZpcHM6ICdDVScsXG4gICAgaXNvMjogJ0NVJyxcbiAgICBpc28zOiAnQ1VCJyxcbiAgICBpc29ObzogJzE5MicsXG4gICAgaW50ZXJuZXQ6ICdDVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0N5cHJ1cycsXG4gICAgY2FwaXRhbDogJ05pY29zaWEnLFxuICAgIGZpcHM6ICdDWScsXG4gICAgaXNvMjogJ0NZJyxcbiAgICBpc28zOiAnQ1lQJyxcbiAgICBpc29ObzogJzE5NicsXG4gICAgaW50ZXJuZXQ6ICdDWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdDemVjaCBSZXB1YmxpYycsXG4gICAgY2FwaXRhbDogJ1ByYWd1ZScsXG4gICAgZmlwczogJ0VaJyxcbiAgICBpc28yOiAnQ1onLFxuICAgIGlzbzM6ICdDWkUnLFxuICAgIGlzb05vOiAnMjAzJyxcbiAgICBpbnRlcm5ldDogJ0NaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdEZW5tYXJrJyxcbiAgICBjYXBpdGFsOiAnQ29wZW5oYWdlbicsXG4gICAgZmlwczogJ0RBJyxcbiAgICBpc28yOiAnREsnLFxuICAgIGlzbzM6ICdETksnLFxuICAgIGlzb05vOiAnMjA4JyxcbiAgICBpbnRlcm5ldDogJ0RLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0RqaWJvdXRpJyxcbiAgICBjYXBpdGFsOiAnRGppYm91dGknLFxuICAgIGZpcHM6ICdESicsXG4gICAgaXNvMjogJ0RKJyxcbiAgICBpc28zOiAnREpJJyxcbiAgICBpc29ObzogJzI2MicsXG4gICAgaW50ZXJuZXQ6ICdESidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0RvbWluaWNhJyxcbiAgICBjYXBpdGFsOiAnUm9zZWF1JyxcbiAgICBmaXBzOiAnRE8nLFxuICAgIGlzbzI6ICdETScsXG4gICAgaXNvMzogJ0RNQScsXG4gICAgaXNvTm86ICcyMTInLFxuICAgIGludGVybmV0OiAnRE0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdEb21pbmljYW4gUmVwdWJsaWMnLFxuICAgIGNhcGl0YWw6ICdTYW50byBEb21pbmdvJyxcbiAgICBmaXBzOiAnRFInLFxuICAgIGlzbzI6ICdETycsXG4gICAgaXNvMzogJ0RPTScsXG4gICAgaXNvTm86ICcyMTQnLFxuICAgIGludGVybmV0OiAnRE8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0VjdWFkb3InLFxuICAgIGNhcGl0YWw6ICdRdWl0bycsXG4gICAgZmlwczogJ0VDJyxcbiAgICBpc28yOiAnRUMnLFxuICAgIGlzbzM6ICdFQ1UnLFxuICAgIGlzb05vOiAnMjE4JyxcbiAgICBpbnRlcm5ldDogJ0VDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFZ3lwdCcsXG4gICAgY2FwaXRhbDogJ0NhaXJvJyxcbiAgICBmaXBzOiAnRUcnLFxuICAgIGlzbzI6ICdFRycsXG4gICAgaXNvMzogJ0VHWScsXG4gICAgaXNvTm86ICc4MTgnLFxuICAgIGludGVybmV0OiAnRUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnRWwgU2FsdmFkb3InLFxuICAgIGNhcGl0YWw6ICdTYW4gU2FsdmFkb3InLFxuICAgIGZpcHM6ICdFUycsXG4gICAgaXNvMjogJ1NWJyxcbiAgICBpc28zOiAnU0xWJyxcbiAgICBpc29ObzogJzIyMicsXG4gICAgaW50ZXJuZXQ6ICdTVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFcXVhdG9yaWFsIEd1aW5lYScsXG4gICAgY2FwaXRhbDogJ01hbGFibycsXG4gICAgZmlwczogJ0VLJyxcbiAgICBpc28yOiAnR1EnLFxuICAgIGlzbzM6ICdHTlEnLFxuICAgIGlzb05vOiAnMjI2JyxcbiAgICBpbnRlcm5ldDogJ0dRJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0VyaXRyZWEnLFxuICAgIGNhcGl0YWw6ICdBc21hcmEnLFxuICAgIGZpcHM6ICdFUicsXG4gICAgaXNvMjogJ0VSJyxcbiAgICBpc28zOiAnRVJJJyxcbiAgICBpc29ObzogJzIzMicsXG4gICAgaW50ZXJuZXQ6ICdFUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdFc3RvbmlhJyxcbiAgICBjYXBpdGFsOiAnVGFsbGlubicsXG4gICAgZmlwczogJ0VOJyxcbiAgICBpc28yOiAnRUUnLFxuICAgIGlzbzM6ICdFU1QnLFxuICAgIGlzb05vOiAnMjMzJyxcbiAgICBpbnRlcm5ldDogJ0VFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0V0aGlvcGlhJyxcbiAgICBjYXBpdGFsOiAnQWRkaXMgQWJhYmEnLFxuICAgIGZpcHM6ICdFVCcsXG4gICAgaXNvMjogJ0VUJyxcbiAgICBpc28zOiAnRVRIJyxcbiAgICBpc29ObzogJzIzMScsXG4gICAgaW50ZXJuZXQ6ICdFVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpJyxcbiAgICBjYXBpdGFsOiAnU3RhbmxleScsXG4gICAgZmlwczogJ0ZBJyxcbiAgICBpc28yOiAnRksnLFxuICAgIGlzbzM6ICdGTEsnLFxuICAgIGlzb05vOiAnMjM4JyxcbiAgICBpbnRlcm5ldDogJ0ZLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdGYXJvZSBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnVG9yc2hhdm4nLFxuICAgIGZpcHM6ICdGTycsXG4gICAgaXNvMjogJ0ZPJyxcbiAgICBpc28zOiAnRlJPJyxcbiAgICBpc29ObzogJzIzNCcsXG4gICAgaW50ZXJuZXQ6ICdGTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdGaWppJyxcbiAgICBjYXBpdGFsOiAnU3V2YScsXG4gICAgZmlwczogJ0ZKJyxcbiAgICBpc28yOiAnRkonLFxuICAgIGlzbzM6ICdGSkknLFxuICAgIGlzb05vOiAnMjQyJyxcbiAgICBpbnRlcm5ldDogJ0ZKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdGaW5sYW5kJyxcbiAgICBjYXBpdGFsOiAnSGVsc2lua2knLFxuICAgIGZpcHM6ICdGSScsXG4gICAgaXNvMjogJ0ZJJyxcbiAgICBpc28zOiAnRklOJyxcbiAgICBpc29ObzogJzI0NicsXG4gICAgaW50ZXJuZXQ6ICdGSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdGcmFuY2UnLFxuICAgIGNhcGl0YWw6ICdQYXJpcycsXG4gICAgZmlwczogJ0ZSJyxcbiAgICBpc28yOiAnRlInLFxuICAgIGlzbzM6ICdGUkEnLFxuICAgIGlzb05vOiAnMjUwJyxcbiAgICBpbnRlcm5ldDogJ0ZSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdGcmVuY2ggR3VpYW5hJyxcbiAgICBjYXBpdGFsOiAnQ2F5ZW5uZScsXG4gICAgZmlwczogJ0ZHJyxcbiAgICBpc28yOiAnR0YnLFxuICAgIGlzbzM6ICdHVUYnLFxuICAgIGlzb05vOiAnMjU0JyxcbiAgICBpbnRlcm5ldDogJ0dGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICAgIGNhcGl0YWw6ICdQYXBlZXRlJyxcbiAgICBmaXBzOiAnRlAnLFxuICAgIGlzbzI6ICdQRicsXG4gICAgaXNvMzogJ1BZRicsXG4gICAgaXNvTm86ICcyNTgnLFxuICAgIGludGVybmV0OiAnUEYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnR2Fib24nLFxuICAgIGNhcGl0YWw6ICdMaWJyZXZpbGxlJyxcbiAgICBmaXBzOiAnR0InLFxuICAgIGlzbzI6ICdHQScsXG4gICAgaXNvMzogJ0dBQicsXG4gICAgaXNvTm86ICcyNjYnLFxuICAgIGludGVybmV0OiAnR0EnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVGhlIEdhbWJpYScsXG4gICAgY2FwaXRhbDogJ0Jhbmp1bCcsXG4gICAgZmlwczogJ0dBJyxcbiAgICBpc28yOiAnR00nLFxuICAgIGlzbzM6ICdHTUInLFxuICAgIGlzb05vOiAnMjcwJyxcbiAgICBpbnRlcm5ldDogJ0dNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnR2VvcmdpYScsXG4gICAgY2FwaXRhbDogXCJUJ2JpbGlzaVwiLFxuICAgIGZpcHM6ICdHRycsXG4gICAgaXNvMjogJ0dFJyxcbiAgICBpc28zOiAnR0VPJyxcbiAgICBpc29ObzogJzI2OCcsXG4gICAgaW50ZXJuZXQ6ICdHRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdHZXJtYW55JyxcbiAgICBjYXBpdGFsOiAnQmVybGluJyxcbiAgICBmaXBzOiAnR00nLFxuICAgIGlzbzI6ICdERScsXG4gICAgaXNvMzogJ0RFVScsXG4gICAgaXNvTm86ICcyNzYnLFxuICAgIGludGVybmV0OiAnREUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnR2hhbmEnLFxuICAgIGNhcGl0YWw6ICdBY2NyYScsXG4gICAgZmlwczogJ0dIJyxcbiAgICBpc28yOiAnR0gnLFxuICAgIGlzbzM6ICdHSEEnLFxuICAgIGlzb05vOiAnMjg4JyxcbiAgICBpbnRlcm5ldDogJ0dIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0dpYnJhbHRhcicsXG4gICAgY2FwaXRhbDogJ0dpYnJhbHRhcicsXG4gICAgZmlwczogJ0dJJyxcbiAgICBpc28yOiAnR0knLFxuICAgIGlzbzM6ICdHSUInLFxuICAgIGlzb05vOiAnMjkyJyxcbiAgICBpbnRlcm5ldDogJ0dJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0dyZWVjZScsXG4gICAgY2FwaXRhbDogJ0F0aGVucycsXG4gICAgZmlwczogJ0dSJyxcbiAgICBpc28yOiAnR1InLFxuICAgIGlzbzM6ICdHUkMnLFxuICAgIGlzb05vOiAnMzAwJyxcbiAgICBpbnRlcm5ldDogJ0dSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdHcmVlbmxhbmQnLFxuICAgIGNhcGl0YWw6ICdOdXVrIChHb2R0aGFiKScsXG4gICAgZmlwczogJ0dMJyxcbiAgICBpc28yOiAnR0wnLFxuICAgIGlzbzM6ICdHUkwnLFxuICAgIGlzb05vOiAnMzA0JyxcbiAgICBpbnRlcm5ldDogJ0dMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnR3JlbmFkYScsXG4gICAgY2FwaXRhbDogXCJTYWludCBHZW9yZ2Unc1wiLFxuICAgIGZpcHM6ICdHSicsXG4gICAgaXNvMjogJ0dEJyxcbiAgICBpc28zOiAnR1JEJyxcbiAgICBpc29ObzogJzMwOCcsXG4gICAgaW50ZXJuZXQ6ICdHRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0d1YWRlbG91cGUnLFxuICAgIGNhcGl0YWw6ICdCYXNzZS1UZXJyZScsXG4gICAgZmlwczogJ0dQJyxcbiAgICBpc28yOiAnR1AnLFxuICAgIGlzbzM6ICdHTFAnLFxuICAgIGlzb05vOiAnMzEyJyxcbiAgICBpbnRlcm5ldDogJ0dQJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0d1YW0nLFxuICAgIGNhcGl0YWw6ICdIYWdhdG5hIChBZ2FuYSknLFxuICAgIGZpcHM6ICdHUScsXG4gICAgaXNvMjogJ0dVJyxcbiAgICBpc28zOiAnR1VNJyxcbiAgICBpc29ObzogJzMxNicsXG4gICAgaW50ZXJuZXQ6ICdHVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdHdWF0ZW1hbGEnLFxuICAgIGNhcGl0YWw6ICdHdWF0ZW1hbGEnLFxuICAgIGZpcHM6ICdHVCcsXG4gICAgaXNvMjogJ0dUJyxcbiAgICBpc28zOiAnR1RNJyxcbiAgICBpc29ObzogJzMyMCcsXG4gICAgaW50ZXJuZXQ6ICdHVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHdWluZWEnLFxuICAgIGNhcGl0YWw6ICdDb25ha3J5JyxcbiAgICBmaXBzOiAnR1YnLFxuICAgIGlzbzI6ICdHTicsXG4gICAgaXNvMzogJ0dJTicsXG4gICAgaXNvTm86ICczMjQnLFxuICAgIGludGVybmV0OiAnR04nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnR3VpbmVhLUJpc3NhdScsXG4gICAgY2FwaXRhbDogJ0Jpc3NhdScsXG4gICAgZmlwczogJ1BVJyxcbiAgICBpc28yOiAnR1cnLFxuICAgIGlzbzM6ICdHTkInLFxuICAgIGlzb05vOiAnNjI0JyxcbiAgICBpbnRlcm5ldDogJ0dXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdHdXlhbmEnLFxuICAgIGNhcGl0YWw6ICdHZW9yZ2V0b3duJyxcbiAgICBmaXBzOiAnR1knLFxuICAgIGlzbzI6ICdHWScsXG4gICAgaXNvMzogJ0dVWScsXG4gICAgaXNvTm86ICczMjgnLFxuICAgIGludGVybmV0OiAnR1knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdIYWl0aScsXG4gICAgY2FwaXRhbDogJ1BvcnQtYXUtUHJpbmNlJyxcbiAgICBmaXBzOiAnSEEnLFxuICAgIGlzbzI6ICdIVCcsXG4gICAgaXNvMzogJ0hUSScsXG4gICAgaXNvTm86ICczMzInLFxuICAgIGludGVybmV0OiAnSFQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkpJyxcbiAgICBjYXBpdGFsOiAnVmF0aWNhbiBDaXR5JyxcbiAgICBmaXBzOiAnVlQnLFxuICAgIGlzbzI6ICdWQScsXG4gICAgaXNvMzogJ1ZBVCcsXG4gICAgaXNvTm86ICczMzYnLFxuICAgIGludGVybmV0OiAnVkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnSG9uZHVyYXMnLFxuICAgIGNhcGl0YWw6ICdUZWd1Y2lnYWxwYScsXG4gICAgZmlwczogJ0hPJyxcbiAgICBpc28yOiAnSE4nLFxuICAgIGlzbzM6ICdITkQnLFxuICAgIGlzb05vOiAnMzQwJyxcbiAgICBpbnRlcm5ldDogJ0hOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0h1bmdhcnknLFxuICAgIGNhcGl0YWw6ICdCdWRhcGVzdCcsXG4gICAgZmlwczogJ0hVJyxcbiAgICBpc28yOiAnSFUnLFxuICAgIGlzbzM6ICdIVU4nLFxuICAgIGlzb05vOiAnMzQ4JyxcbiAgICBpbnRlcm5ldDogJ0hVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdJY2VsYW5kJyxcbiAgICBjYXBpdGFsOiAnUmV5a2phdmlrJyxcbiAgICBmaXBzOiAnSUMnLFxuICAgIGlzbzI6ICdJUycsXG4gICAgaXNvMzogJ0lTTCcsXG4gICAgaXNvTm86ICczNTInLFxuICAgIGludGVybmV0OiAnSVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSW5kaWEnLFxuICAgIGNhcGl0YWw6ICdOZXcgRGVsaGknLFxuICAgIGZpcHM6ICdJTicsXG4gICAgaXNvMjogJ0lOJyxcbiAgICBpc28zOiAnSU5EJyxcbiAgICBpc29ObzogJzM1NicsXG4gICAgaW50ZXJuZXQ6ICdJTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0luZG9uZXNpYScsXG4gICAgY2FwaXRhbDogJ0pha2FydGEnLFxuICAgIGZpcHM6ICdJRCcsXG4gICAgaXNvMjogJ0lEJyxcbiAgICBpc28zOiAnSUROJyxcbiAgICBpc29ObzogJzM2MCcsXG4gICAgaW50ZXJuZXQ6ICdJRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0lyYW4nLFxuICAgIGNhcGl0YWw6ICdUZWhyYW4nLFxuICAgIGZpcHM6ICdJUicsXG4gICAgaXNvMjogJ0lSJyxcbiAgICBpc28zOiAnSVJOJyxcbiAgICBpc29ObzogJzM2NCcsXG4gICAgaW50ZXJuZXQ6ICdJUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0lyYXEnLFxuICAgIGNhcGl0YWw6ICdCYWdoZGFkJyxcbiAgICBmaXBzOiAnSVonLFxuICAgIGlzbzI6ICdJUScsXG4gICAgaXNvMzogJ0lSUScsXG4gICAgaXNvTm86ICczNjgnLFxuICAgIGludGVybmV0OiAnSVEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSXJlbGFuZCcsXG4gICAgY2FwaXRhbDogJ0R1YmxpbicsXG4gICAgZmlwczogJ0VJJyxcbiAgICBpc28yOiAnSUUnLFxuICAgIGlzbzM6ICdJUkwnLFxuICAgIGlzb05vOiAnMzcyJyxcbiAgICBpbnRlcm5ldDogJ0lFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSXNyYWVsJyxcbiAgICBjYXBpdGFsOiAnSmVydXNhbGVtJyxcbiAgICBmaXBzOiAnSVMnLFxuICAgIGlzbzI6ICdJTCcsXG4gICAgaXNvMzogJ0lTUicsXG4gICAgaXNvTm86ICczNzYnLFxuICAgIGludGVybmV0OiAnSUwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0l0YWx5JyxcbiAgICBjYXBpdGFsOiAnUm9tZScsXG4gICAgZmlwczogJ0lUJyxcbiAgICBpc28yOiAnSVQnLFxuICAgIGlzbzM6ICdJVEEnLFxuICAgIGlzb05vOiAnMzgwJyxcbiAgICBpbnRlcm5ldDogJ0lUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnSmFtYWljYScsXG4gICAgY2FwaXRhbDogJ0tpbmdzdG9uJyxcbiAgICBmaXBzOiAnSk0nLFxuICAgIGlzbzI6ICdKTScsXG4gICAgaXNvMzogJ0pBTScsXG4gICAgaXNvTm86ICczODgnLFxuICAgIGludGVybmV0OiAnSk0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdKYXBhbicsXG4gICAgY2FwaXRhbDogJ1Rva3lvJyxcbiAgICBmaXBzOiAnSkEnLFxuICAgIGlzbzI6ICdKUCcsXG4gICAgaXNvMzogJ0pQTicsXG4gICAgaXNvTm86ICczOTInLFxuICAgIGludGVybmV0OiAnSlAnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdKb3JkYW4nLFxuICAgIGNhcGl0YWw6ICdBbW1hbicsXG4gICAgZmlwczogJ0pPJyxcbiAgICBpc28yOiAnSk8nLFxuICAgIGlzbzM6ICdKT1InLFxuICAgIGlzb05vOiAnNDAwJyxcbiAgICBpbnRlcm5ldDogJ0pPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnS2F6YWtoc3RhbicsXG4gICAgY2FwaXRhbDogJ0FzdGFuYSAoQWttb2xhKScsXG4gICAgZmlwczogJ0taJyxcbiAgICBpc28yOiAnS1onLFxuICAgIGlzbzM6ICdLQVonLFxuICAgIGlzb05vOiAnMzk4JyxcbiAgICBpbnRlcm5ldDogJ0taJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0tlbnlhJyxcbiAgICBjYXBpdGFsOiAnTmFpcm9iaScsXG4gICAgZmlwczogJ0tFJyxcbiAgICBpc28yOiAnS0UnLFxuICAgIGlzbzM6ICdLRU4nLFxuICAgIGlzb05vOiAnNDA0JyxcbiAgICBpbnRlcm5ldDogJ0tFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0tpcmliYXRpJyxcbiAgICBjYXBpdGFsOiAnVGFyYXdhJyxcbiAgICBmaXBzOiAnS1InLFxuICAgIGlzbzI6ICdLSScsXG4gICAgaXNvMzogJ0tJUicsXG4gICAgaXNvTm86ICcyOTYnLFxuICAgIGludGVybmV0OiAnS0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdOb3J0aCBLb3JlYScsXG4gICAgY2FwaXRhbDogXCJQJ3lvbmd5YW5nXCIsXG4gICAgZmlwczogJ0tOJyxcbiAgICBpc28yOiAnS1AnLFxuICAgIGlzbzM6ICdQUksnLFxuICAgIGlzb05vOiAnNDA4JyxcbiAgICBpbnRlcm5ldDogJ0tQJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU291dGggS29yZWEnLFxuICAgIGNhcGl0YWw6ICdTZW91bCcsXG4gICAgZmlwczogJ0tTJyxcbiAgICBpc28yOiAnS1InLFxuICAgIGlzbzM6ICdLT1InLFxuICAgIGlzb05vOiAnNDEwJyxcbiAgICBpbnRlcm5ldDogJ0tSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnS3V3YWl0JyxcbiAgICBjYXBpdGFsOiAnS3V3YWl0JyxcbiAgICBmaXBzOiAnS1UnLFxuICAgIGlzbzI6ICdLVycsXG4gICAgaXNvMzogJ0tXVCcsXG4gICAgaXNvTm86ICc0MTQnLFxuICAgIGludGVybmV0OiAnS1cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdLeXJneXpzdGFuJyxcbiAgICBjYXBpdGFsOiAnQmlzaGtlaycsXG4gICAgZmlwczogJ0tHJyxcbiAgICBpc28yOiAnS0cnLFxuICAgIGlzbzM6ICdLR1onLFxuICAgIGlzb05vOiAnNDE3JyxcbiAgICBpbnRlcm5ldDogJ0tHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTGFvcycsXG4gICAgY2FwaXRhbDogJ1ZpZW50aWFuZScsXG4gICAgZmlwczogJ0xBJyxcbiAgICBpc28yOiAnTEEnLFxuICAgIGlzbzM6ICdMQU8nLFxuICAgIGlzb05vOiAnNDE4JyxcbiAgICBpbnRlcm5ldDogJ0xBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0xhdHZpYScsXG4gICAgY2FwaXRhbDogJ1JpZ2EnLFxuICAgIGZpcHM6ICdMRycsXG4gICAgaXNvMjogJ0xWJyxcbiAgICBpc28zOiAnTFZBJyxcbiAgICBpc29ObzogJzQyOCcsXG4gICAgaW50ZXJuZXQ6ICdMVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0xlYmFub24nLFxuICAgIGNhcGl0YWw6ICdCZWlydXQnLFxuICAgIGZpcHM6ICdMRScsXG4gICAgaXNvMjogJ0xCJyxcbiAgICBpc28zOiAnTEJOJyxcbiAgICBpc29ObzogJzQyMicsXG4gICAgaW50ZXJuZXQ6ICdMQidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTGVzb3RobycsXG4gICAgY2FwaXRhbDogJ01hc2VydScsXG4gICAgZmlwczogJ0xUJyxcbiAgICBpc28yOiAnTFMnLFxuICAgIGlzbzM6ICdMU08nLFxuICAgIGlzb05vOiAnNDI2JyxcbiAgICBpbnRlcm5ldDogJ0xTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0xpYmVyaWEnLFxuICAgIGNhcGl0YWw6ICdNb25yb3ZpYScsXG4gICAgZmlwczogJ0xJJyxcbiAgICBpc28yOiAnTFInLFxuICAgIGlzbzM6ICdMQlInLFxuICAgIGlzb05vOiAnNDMwJyxcbiAgICBpbnRlcm5ldDogJ0xSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdMaWJ5YScsXG4gICAgY2FwaXRhbDogJ1RyaXBvbGknLFxuICAgIGZpcHM6ICdMWScsXG4gICAgaXNvMjogJ0xZJyxcbiAgICBpc28zOiAnTEJZJyxcbiAgICBpc29ObzogJzQzNCcsXG4gICAgaW50ZXJuZXQ6ICdMWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdMaWVjaHRlbnN0ZWluJyxcbiAgICBjYXBpdGFsOiAnVmFkdXonLFxuICAgIGZpcHM6ICdMUycsXG4gICAgaXNvMjogJ0xJJyxcbiAgICBpc28zOiAnTElFJyxcbiAgICBpc29ObzogJzQzOCcsXG4gICAgaW50ZXJuZXQ6ICdMSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdMaXRodWFuaWEnLFxuICAgIGNhcGl0YWw6ICdWaWxuaXVzJyxcbiAgICBmaXBzOiAnTEgnLFxuICAgIGlzbzI6ICdMVCcsXG4gICAgaXNvMzogJ0xUVScsXG4gICAgaXNvTm86ICc0NDAnLFxuICAgIGludGVybmV0OiAnTFQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTHV4ZW1ib3VyZycsXG4gICAgY2FwaXRhbDogJ0x1eGVtYm91cmcnLFxuICAgIGZpcHM6ICdMVScsXG4gICAgaXNvMjogJ0xVJyxcbiAgICBpc28zOiAnTFVYJyxcbiAgICBpc29ObzogJzQ0MicsXG4gICAgaW50ZXJuZXQ6ICdMVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdOb3J0aCBNYWNlZG9uaWEnLFxuICAgIGNhcGl0YWw6ICdTa29wamUnLFxuICAgIGZpcHM6ICdNSycsXG4gICAgaXNvMjogJ01LJyxcbiAgICBpc28zOiAnTUtEJyxcbiAgICBpc29ObzogJzgwNycsXG4gICAgaW50ZXJuZXQ6ICdNSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnTWFkYWdhc2NhcicsXG4gICAgY2FwaXRhbDogJ0FudGFuYW5hcml2bycsXG4gICAgZmlwczogJ01BJyxcbiAgICBpc28yOiAnTUcnLFxuICAgIGlzbzM6ICdNREcnLFxuICAgIGlzb05vOiAnNDUwJyxcbiAgICBpbnRlcm5ldDogJ01HJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdNYWxhd2knLFxuICAgIGNhcGl0YWw6ICdMaWxvbmd3ZScsXG4gICAgZmlwczogJ01JJyxcbiAgICBpc28yOiAnTVcnLFxuICAgIGlzbzM6ICdNV0knLFxuICAgIGlzb05vOiAnNDU0JyxcbiAgICBpbnRlcm5ldDogJ01XJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTWFsYXlzaWEnLFxuICAgIGNhcGl0YWw6ICdLdWFsYSBMdW1wdXInLFxuICAgIGZpcHM6ICdNWScsXG4gICAgaXNvMjogJ01ZJyxcbiAgICBpc28zOiAnTVlTJyxcbiAgICBpc29ObzogJzQ1OCcsXG4gICAgaW50ZXJuZXQ6ICdNWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdNYWxkaXZlcycsXG4gICAgY2FwaXRhbDogJ01hbGUgKE1hYWxlKScsXG4gICAgZmlwczogJ01WJyxcbiAgICBpc28yOiAnTVYnLFxuICAgIGlzbzM6ICdNRFYnLFxuICAgIGlzb05vOiAnNDYyJyxcbiAgICBpbnRlcm5ldDogJ01WJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01hbGknLFxuICAgIGNhcGl0YWw6ICdCYW1ha28nLFxuICAgIGZpcHM6ICdNTCcsXG4gICAgaXNvMjogJ01MJyxcbiAgICBpc28zOiAnTUxJJyxcbiAgICBpc29ObzogJzQ2NicsXG4gICAgaW50ZXJuZXQ6ICdNTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTWFsdGEnLFxuICAgIGNhcGl0YWw6ICdWYWxsZXR0YScsXG4gICAgZmlwczogJ01UJyxcbiAgICBpc28yOiAnTVQnLFxuICAgIGlzbzM6ICdNTFQnLFxuICAgIGlzb05vOiAnNDcwJyxcbiAgICBpbnRlcm5ldDogJ01UJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0lzbGUgb2YgTWFuJyxcbiAgICBjYXBpdGFsOiAnRG91Z2xhcycsXG4gICAgZmlwczogJ0lNJyxcbiAgICBpc28yOiAnSU0nLFxuICAgIGlzbzM6ICdJTU4nLFxuICAgIGlzb05vOiAnODMzJyxcbiAgICBpbnRlcm5ldDogJ0lNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ01hcnNoYWxsIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdNYWp1cm8nLFxuICAgIGZpcHM6ICdSTScsXG4gICAgaXNvMjogJ01IJyxcbiAgICBpc28zOiAnTUhMJyxcbiAgICBpc29ObzogJzU4NCcsXG4gICAgaW50ZXJuZXQ6ICdNSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ01hcnRpbmlxdWUnLFxuICAgIGNhcGl0YWw6ICdGb3J0LWRlLUZyYW5jZScsXG4gICAgZmlwczogJ01CJyxcbiAgICBpc28yOiAnTVEnLFxuICAgIGlzbzM6ICdNVFEnLFxuICAgIGlzb05vOiAnNDc0JyxcbiAgICBpbnRlcm5ldDogJ01RJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01hdXJpdGFuaWEnLFxuICAgIGNhcGl0YWw6ICdOb3Vha2Nob3R0JyxcbiAgICBmaXBzOiAnTVInLFxuICAgIGlzbzI6ICdNUicsXG4gICAgaXNvMzogJ01SVCcsXG4gICAgaXNvTm86ICc0NzgnLFxuICAgIGludGVybmV0OiAnTVInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ01hdXJpdGl1cycsXG4gICAgY2FwaXRhbDogJ1BvcnQgTG91aXMnLFxuICAgIGZpcHM6ICdNUCcsXG4gICAgaXNvMjogJ01VJyxcbiAgICBpc28zOiAnTVVTJyxcbiAgICBpc29ObzogJzQ4MCcsXG4gICAgaW50ZXJuZXQ6ICdNVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnTWF5b3R0ZScsXG4gICAgY2FwaXRhbDogJ01hbW91dHpvdScsXG4gICAgZmlwczogJ01GJyxcbiAgICBpc28yOiAnWVQnLFxuICAgIGlzbzM6ICdNWVQnLFxuICAgIGlzb05vOiAnMTc1JyxcbiAgICBpbnRlcm5ldDogJ1lUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ01leGljbycsXG4gICAgY2FwaXRhbDogJ01leGljbycsXG4gICAgZmlwczogJ01YJyxcbiAgICBpc28yOiAnTVgnLFxuICAgIGlzbzM6ICdNRVgnLFxuICAgIGlzb05vOiAnNDg0JyxcbiAgICBpbnRlcm5ldDogJ01YJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0ZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYScsXG4gICAgY2FwaXRhbDogJ1BhbGlraXInLFxuICAgIGZpcHM6ICcnLFxuICAgIGlzbzI6ICdGTScsXG4gICAgaXNvMzogJ0ZTTScsXG4gICAgaXNvTm86ICc1ODMnLFxuICAgIGludGVybmV0OiAnRk0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTW9sZG92YScsXG4gICAgY2FwaXRhbDogJ0NoaXNpbmF1JyxcbiAgICBmaXBzOiAnTUQnLFxuICAgIGlzbzI6ICdNRCcsXG4gICAgaXNvMzogJ01EQScsXG4gICAgaXNvTm86ICc0OTgnLFxuICAgIGludGVybmV0OiAnTUQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTW9uYWNvJyxcbiAgICBjYXBpdGFsOiAnTW9uYWNvJyxcbiAgICBmaXBzOiAnTU4nLFxuICAgIGlzbzI6ICdNQycsXG4gICAgaXNvMzogJ01DTycsXG4gICAgaXNvTm86ICc0OTInLFxuICAgIGludGVybmV0OiAnTUMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTW9uZ29saWEnLFxuICAgIGNhcGl0YWw6ICdVbGFhbmJhYXRhcicsXG4gICAgZmlwczogJ01HJyxcbiAgICBpc28yOiAnTU4nLFxuICAgIGlzbzM6ICdNTkcnLFxuICAgIGlzb05vOiAnNDk2JyxcbiAgICBpbnRlcm5ldDogJ01OJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnTW9udHNlcnJhdCcsXG4gICAgY2FwaXRhbDogJ1BseW1vdXRoJyxcbiAgICBmaXBzOiAnTUgnLFxuICAgIGlzbzI6ICdNUycsXG4gICAgaXNvMzogJ01TUicsXG4gICAgaXNvTm86ICc1MDAnLFxuICAgIGludGVybmV0OiAnTVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01vcm9jY28nLFxuICAgIGNhcGl0YWw6ICdSYWJhdCcsXG4gICAgZmlwczogJ01PJyxcbiAgICBpc28yOiAnTUEnLFxuICAgIGlzbzM6ICdNQVInLFxuICAgIGlzb05vOiAnNTA0JyxcbiAgICBpbnRlcm5ldDogJ01BJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdNb3phbWJpcXVlJyxcbiAgICBjYXBpdGFsOiAnTWFwdXRvJyxcbiAgICBmaXBzOiAnTVonLFxuICAgIGlzbzI6ICdNWicsXG4gICAgaXNvMzogJ01PWicsXG4gICAgaXNvTm86ICc1MDgnLFxuICAgIGludGVybmV0OiAnTVonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdNeWFubWFyIChCdXJtYSknLFxuICAgIGNhcGl0YWw6ICdSYW5nb29uIChZYW5nb24pJyxcbiAgICBmaXBzOiAnQk0nLFxuICAgIGlzbzI6ICdNTScsXG4gICAgaXNvMzogJ01NUicsXG4gICAgaXNvTm86ICcxMDQnLFxuICAgIGludGVybmV0OiAnTU0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ05hbWliaWEnLFxuICAgIGNhcGl0YWw6ICdXaW5kaG9laycsXG4gICAgZmlwczogJ1dBJyxcbiAgICBpc28yOiAnTkEnLFxuICAgIGlzbzM6ICdOQU0nLFxuICAgIGlzb05vOiAnNTE2JyxcbiAgICBpbnRlcm5ldDogJ05BJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05hdXJ1JyxcbiAgICBjYXBpdGFsOiAnbm8gb2ZmaWNpYWwgY2FwaXRhbCcsXG4gICAgZmlwczogJ05SJyxcbiAgICBpc28yOiAnTlInLFxuICAgIGlzbzM6ICdOUlUnLFxuICAgIGlzb05vOiAnNTIwJyxcbiAgICBpbnRlcm5ldDogJ05SJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ05lcGFsJyxcbiAgICBjYXBpdGFsOiAnS2F0aG1hbmR1JyxcbiAgICBmaXBzOiAnTlAnLFxuICAgIGlzbzI6ICdOUCcsXG4gICAgaXNvMzogJ05QTCcsXG4gICAgaXNvTm86ICc1MjQnLFxuICAgIGludGVybmV0OiAnTlAnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTmV0aGVybGFuZHMnLFxuICAgIGNhcGl0YWw6ICdBbXN0ZXJkYW0nLFxuICAgIGZpcHM6ICdOTCcsXG4gICAgaXNvMjogJ05MJyxcbiAgICBpc28zOiAnTkxEJyxcbiAgICBpc29ObzogJzUyOCcsXG4gICAgaW50ZXJuZXQ6ICdOTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ05ldGhlcmxhbmRzIEFudGlsbGVzJyxcbiAgICBjYXBpdGFsOiAnV2lsbGVtc3RhZCcsXG4gICAgZmlwczogJ05UJyxcbiAgICBpc28yOiAnQU4nLFxuICAgIGlzbzM6ICdBTlQnLFxuICAgIGlzb05vOiAnNTMwJyxcbiAgICBpbnRlcm5ldDogJ0FOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05ldyBDYWxlZG9uaWEnLFxuICAgIGNhcGl0YWw6ICdOb3VtZWEnLFxuICAgIGZpcHM6ICdOQycsXG4gICAgaXNvMjogJ05DJyxcbiAgICBpc28zOiAnTkNMJyxcbiAgICBpc29ObzogJzU0MCcsXG4gICAgaW50ZXJuZXQ6ICdOQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOZXcgWmVhbGFuZCcsXG4gICAgY2FwaXRhbDogJ1dlbGxpbmd0b24nLFxuICAgIGZpcHM6ICdOWicsXG4gICAgaXNvMjogJ05aJyxcbiAgICBpc28zOiAnTlpMJyxcbiAgICBpc29ObzogJzU1NCcsXG4gICAgaW50ZXJuZXQ6ICdOWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdOaWNhcmFndWEnLFxuICAgIGNhcGl0YWw6ICdNYW5hZ3VhJyxcbiAgICBmaXBzOiAnTlUnLFxuICAgIGlzbzI6ICdOSScsXG4gICAgaXNvMzogJ05JQycsXG4gICAgaXNvTm86ICc1NTgnLFxuICAgIGludGVybmV0OiAnTkknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTmlnZXInLFxuICAgIGNhcGl0YWw6ICdOaWFtZXknLFxuICAgIGZpcHM6ICdORycsXG4gICAgaXNvMjogJ05FJyxcbiAgICBpc28zOiAnTkVSJyxcbiAgICBpc29ObzogJzU2MicsXG4gICAgaW50ZXJuZXQ6ICdORSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdOaWdlcmlhJyxcbiAgICBjYXBpdGFsOiAnQWJ1amEnLFxuICAgIGZpcHM6ICdOSScsXG4gICAgaXNvMjogJ05HJyxcbiAgICBpc28zOiAnTkdBJyxcbiAgICBpc29ObzogJzU2NicsXG4gICAgaW50ZXJuZXQ6ICdORydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOaXVlJyxcbiAgICBjYXBpdGFsOiAnQWxvZmknLFxuICAgIGZpcHM6ICdORScsXG4gICAgaXNvMjogJ05VJyxcbiAgICBpc28zOiAnTklVJyxcbiAgICBpc29ObzogJzU3MCcsXG4gICAgaW50ZXJuZXQ6ICdOVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOb3Jmb2xrIElzbGFuZCcsXG4gICAgY2FwaXRhbDogJ0tpbmdzdG9uJyxcbiAgICBmaXBzOiAnTkYnLFxuICAgIGlzbzI6ICdORicsXG4gICAgaXNvMzogJ05GSycsXG4gICAgaXNvTm86ICc1NzQnLFxuICAgIGludGVybmV0OiAnTkYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnU2FpcGFuJyxcbiAgICBmaXBzOiAnQ1EnLFxuICAgIGlzbzI6ICdNUCcsXG4gICAgaXNvMzogJ01OUCcsXG4gICAgaXNvTm86ICc1ODAnLFxuICAgIGludGVybmV0OiAnTVAnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ05vcndheScsXG4gICAgY2FwaXRhbDogJ09zbG8nLFxuICAgIGZpcHM6ICdOTycsXG4gICAgaXNvMjogJ05PJyxcbiAgICBpc28zOiAnTk9SJyxcbiAgICBpc29ObzogJzU3OCcsXG4gICAgaW50ZXJuZXQ6ICdOTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ09tYW4nLFxuICAgIGNhcGl0YWw6ICdNdXNjYXQnLFxuICAgIGZpcHM6ICdNVScsXG4gICAgaXNvMjogJ09NJyxcbiAgICBpc28zOiAnT01OJyxcbiAgICBpc29ObzogJzUxMicsXG4gICAgaW50ZXJuZXQ6ICdPTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdQYWtpc3RhbicsXG4gICAgY2FwaXRhbDogJ0lzbGFtYWJhZCcsXG4gICAgZmlwczogJ1BLJyxcbiAgICBpc28yOiAnUEsnLFxuICAgIGlzbzM6ICdQQUsnLFxuICAgIGlzb05vOiAnNTg2JyxcbiAgICBpbnRlcm5ldDogJ1BLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1BhbGF1JyxcbiAgICBjYXBpdGFsOiAnS29yb3InLFxuICAgIGZpcHM6ICdQUycsXG4gICAgaXNvMjogJ1BXJyxcbiAgICBpc28zOiAnUExXJyxcbiAgICBpc29ObzogJzU4NScsXG4gICAgaW50ZXJuZXQ6ICdQVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1BhbGVzdGluaWFuIFRlcnJpdG9yeScsXG4gICAgY2FwaXRhbDogJ0Vhc3QgSmVydXNhbGVtJyxcbiAgICBmaXBzOiAnV0UnLFxuICAgIGlzbzI6ICdQUycsXG4gICAgaXNvMzogJ1BTRScsXG4gICAgaXNvTm86ICcyNzUnLFxuICAgIGludGVybmV0OiAnUFMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnUGFuYW1hJyxcbiAgICBjYXBpdGFsOiAnUGFuYW1hJyxcbiAgICBmaXBzOiAnUE0nLFxuICAgIGlzbzI6ICdQQScsXG4gICAgaXNvMzogJ1BBTicsXG4gICAgaXNvTm86ICc1OTEnLFxuICAgIGludGVybmV0OiAnUEEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgY2FwaXRhbDogJ1BvcnQgTW9yZXNieScsXG4gICAgZmlwczogJ1BQJyxcbiAgICBpc28yOiAnUEcnLFxuICAgIGlzbzM6ICdQTkcnLFxuICAgIGlzb05vOiAnNTk4JyxcbiAgICBpbnRlcm5ldDogJ1BHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdQYXJhZ3VheScsXG4gICAgY2FwaXRhbDogJ0FzdW5jaW9uJyxcbiAgICBmaXBzOiAnUEEnLFxuICAgIGlzbzI6ICdQWScsXG4gICAgaXNvMzogJ1BSWScsXG4gICAgaXNvTm86ICc2MDAnLFxuICAgIGludGVybmV0OiAnUFknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1BlcnUnLFxuICAgIGNhcGl0YWw6ICdMaW1hJyxcbiAgICBmaXBzOiAnUEUnLFxuICAgIGlzbzI6ICdQRScsXG4gICAgaXNvMzogJ1BFUicsXG4gICAgaXNvTm86ICc2MDQnLFxuICAgIGludGVybmV0OiAnUEUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdQaGlsaXBwaW5lcycsXG4gICAgY2FwaXRhbDogJ01hbmlsYScsXG4gICAgZmlwczogJ1JQJyxcbiAgICBpc28yOiAnUEgnLFxuICAgIGlzbzM6ICdQSEwnLFxuICAgIGlzb05vOiAnNjA4JyxcbiAgICBpbnRlcm5ldDogJ1BIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1BpdGNhaXJuIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdBZGFtc3Rvd24nLFxuICAgIGZpcHM6ICdQQycsXG4gICAgaXNvMjogJ1BOJyxcbiAgICBpc28zOiAnUENOJyxcbiAgICBpc29ObzogJzYxMicsXG4gICAgaW50ZXJuZXQ6ICdQTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdQb2xhbmQnLFxuICAgIGNhcGl0YWw6ICdXYXJzYXcnLFxuICAgIGZpcHM6ICdQTCcsXG4gICAgaXNvMjogJ1BMJyxcbiAgICBpc28zOiAnUE9MJyxcbiAgICBpc29ObzogJzYxNicsXG4gICAgaW50ZXJuZXQ6ICdQTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdQb3J0dWdhbCcsXG4gICAgY2FwaXRhbDogJ0xpc2JvbicsXG4gICAgZmlwczogJ1BPJyxcbiAgICBpc28yOiAnUFQnLFxuICAgIGlzbzM6ICdQUlQnLFxuICAgIGlzb05vOiAnNjIwJyxcbiAgICBpbnRlcm5ldDogJ1BUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnUHVlcnRvIFJpY28nLFxuICAgIGNhcGl0YWw6ICdTYW4gSnVhbicsXG4gICAgZmlwczogJ1JRJyxcbiAgICBpc28yOiAnUFInLFxuICAgIGlzbzM6ICdQUkknLFxuICAgIGlzb05vOiAnNjMwJyxcbiAgICBpbnRlcm5ldDogJ1BSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUWF0YXInLFxuICAgIGNhcGl0YWw6ICdEb2hhJyxcbiAgICBmaXBzOiAnUUEnLFxuICAgIGlzbzI6ICdRQScsXG4gICAgaXNvMzogJ1FBVCcsXG4gICAgaXNvTm86ICc2MzQnLFxuICAgIGludGVybmV0OiAnUUEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ1JldW5pb24nLFxuICAgIGNhcGl0YWw6ICdTYWludC1EZW5pcycsXG4gICAgZmlwczogJ1JFJyxcbiAgICBpc28yOiAnUkUnLFxuICAgIGlzbzM6ICdSRVUnLFxuICAgIGlzb05vOiAnNjM4JyxcbiAgICBpbnRlcm5ldDogJ1JFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1JvbWFuaWEnLFxuICAgIGNhcGl0YWw6ICdCdWNoYXJlc3QnLFxuICAgIGZpcHM6ICdSTycsXG4gICAgaXNvMjogJ1JPJyxcbiAgICBpc28zOiAnUk9VJyxcbiAgICBpc29ObzogJzY0MicsXG4gICAgaW50ZXJuZXQ6ICdSTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFzaWEnLFxuICAgIGNvdW50cnk6ICdSdXNzaWEnLFxuICAgIGNhcGl0YWw6ICdNb3Njb3cnLFxuICAgIGZpcHM6ICdSUycsXG4gICAgaXNvMjogJ1JVJyxcbiAgICBpc28zOiAnUlVTJyxcbiAgICBpc29ObzogJzY0MycsXG4gICAgaW50ZXJuZXQ6ICdSVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdSd2FuZGEnLFxuICAgIGNhcGl0YWw6ICdLaWdhbGknLFxuICAgIGZpcHM6ICdSVycsXG4gICAgaXNvMjogJ1JXJyxcbiAgICBpc28zOiAnUldBJyxcbiAgICBpc29ObzogJzY0NicsXG4gICAgaW50ZXJuZXQ6ICdSVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gICAgY2FwaXRhbDogJ0Jhc3NldGVycmUnLFxuICAgIGZpcHM6ICdTQycsXG4gICAgaXNvMjogJ0tOJyxcbiAgICBpc28zOiAnS05BJyxcbiAgICBpc29ObzogJzY1OScsXG4gICAgaW50ZXJuZXQ6ICdLTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NhaW50IEx1Y2lhJyxcbiAgICBjYXBpdGFsOiAnQ2FzdHJpZXMnLFxuICAgIGZpcHM6ICdTVCcsXG4gICAgaXNvMjogJ0xDJyxcbiAgICBpc28zOiAnTENBJyxcbiAgICBpc29ObzogJzY2MicsXG4gICAgaW50ZXJuZXQ6ICdMQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdOb3J0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsXG4gICAgY2FwaXRhbDogJ1NhaW50LVBpZXJyZScsXG4gICAgZmlwczogJ1NCJyxcbiAgICBpc28yOiAnUE0nLFxuICAgIGlzbzM6ICdTUE0nLFxuICAgIGlzb05vOiAnNjY2JyxcbiAgICBpbnRlcm5ldDogJ1BNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLFxuICAgIGNhcGl0YWw6ICdLaW5nc3Rvd24nLFxuICAgIGZpcHM6ICdWQycsXG4gICAgaXNvMjogJ1ZDJyxcbiAgICBpc28zOiAnVkNUJyxcbiAgICBpc29ObzogJzY3MCcsXG4gICAgaW50ZXJuZXQ6ICdWQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU2FuIE1hcmlubycsXG4gICAgY2FwaXRhbDogJ1NhbiBNYXJpbm8nLFxuICAgIGZpcHM6ICdTTScsXG4gICAgaXNvMjogJ1NNJyxcbiAgICBpc28zOiAnU01SJyxcbiAgICBpc29ObzogJzY3NCcsXG4gICAgaW50ZXJuZXQ6ICdTTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxuICAgIGNhcGl0YWw6ICdTYW8gVG9tZScsXG4gICAgZmlwczogJ1RQJyxcbiAgICBpc28yOiAnU1QnLFxuICAgIGlzbzM6ICdTVFAnLFxuICAgIGlzb05vOiAnNjc4JyxcbiAgICBpbnRlcm5ldDogJ1NUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU2F1ZGkgQXJhYmlhJyxcbiAgICBjYXBpdGFsOiAnUml5YWRoJyxcbiAgICBmaXBzOiAnU0EnLFxuICAgIGlzbzI6ICdTQScsXG4gICAgaXNvMzogJ1NBVScsXG4gICAgaXNvTm86ICc2ODInLFxuICAgIGludGVybmV0OiAnU0EnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU2VuZWdhbCcsXG4gICAgY2FwaXRhbDogJ0Rha2FyJyxcbiAgICBmaXBzOiAnU0cnLFxuICAgIGlzbzI6ICdTTicsXG4gICAgaXNvMzogJ1NFTicsXG4gICAgaXNvTm86ICc2ODYnLFxuICAgIGludGVybmV0OiAnU04nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ1NleWNoZWxsZXMnLFxuICAgIGNhcGl0YWw6ICdWaWN0b3JpYScsXG4gICAgZmlwczogJ1NFJyxcbiAgICBpc28yOiAnU0MnLFxuICAgIGlzbzM6ICdTWUMnLFxuICAgIGlzb05vOiAnNjkwJyxcbiAgICBpbnRlcm5ldDogJ1NDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NpZXJyYSBMZW9uZScsXG4gICAgY2FwaXRhbDogJ0ZyZWV0b3duJyxcbiAgICBmaXBzOiAnU0wnLFxuICAgIGlzbzI6ICdTTCcsXG4gICAgaXNvMzogJ1NMRScsXG4gICAgaXNvTm86ICc2OTQnLFxuICAgIGludGVybmV0OiAnU0wnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTaW5nYXBvcmUnLFxuICAgIGNhcGl0YWw6ICdTaW5nYXBvcmUnLFxuICAgIGZpcHM6ICdTTicsXG4gICAgaXNvMjogJ1NHJyxcbiAgICBpc28zOiAnU0dQJyxcbiAgICBpc29ObzogJzcwMicsXG4gICAgaW50ZXJuZXQ6ICdTRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTbG92YWtpYScsXG4gICAgY2FwaXRhbDogJ0JyYXRpc2xhdmEnLFxuICAgIGZpcHM6ICdMTycsXG4gICAgaXNvMjogJ1NLJyxcbiAgICBpc28zOiAnU1ZLJyxcbiAgICBpc29ObzogJzcwMycsXG4gICAgaW50ZXJuZXQ6ICdTSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTbG92ZW5pYScsXG4gICAgY2FwaXRhbDogJ0xqdWJsamFuYScsXG4gICAgZmlwczogJ1NJJyxcbiAgICBpc28yOiAnU0knLFxuICAgIGlzbzM6ICdTVk4nLFxuICAgIGlzb05vOiAnNzA1JyxcbiAgICBpbnRlcm5ldDogJ1NJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1NvbG9tb24gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0hvbmlhcmEnLFxuICAgIGZpcHM6ICdCUCcsXG4gICAgaXNvMjogJ1NCJyxcbiAgICBpc28zOiAnU0xCJyxcbiAgICBpc29ObzogJzkwJyxcbiAgICBpbnRlcm5ldDogJ1NCJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NvbWFsaWEnLFxuICAgIGNhcGl0YWw6ICdNb2dhZGlzaHUnLFxuICAgIGZpcHM6ICdTTycsXG4gICAgaXNvMjogJ1NPJyxcbiAgICBpc28zOiAnU09NJyxcbiAgICBpc29ObzogJzcwNicsXG4gICAgaW50ZXJuZXQ6ICdTTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU291dGggQWZyaWNhJyxcbiAgICBjYXBpdGFsOiAnUHJldG9yaWHvv73vv70nLFxuICAgIGZpcHM6ICdTRicsXG4gICAgaXNvMjogJ1pBJyxcbiAgICBpc28zOiAnWkFGJyxcbiAgICBpc29ObzogJzcxMCcsXG4gICAgaW50ZXJuZXQ6ICdaQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTcGFpbicsXG4gICAgY2FwaXRhbDogJ01hZHJpZCcsXG4gICAgZmlwczogJ1NQJyxcbiAgICBpc28yOiAnRVMnLFxuICAgIGlzbzM6ICdFU1AnLFxuICAgIGlzb05vOiAnNzI0JyxcbiAgICBpbnRlcm5ldDogJ0VTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ1NyaSBMYW5rYScsXG4gICAgY2FwaXRhbDogJ0NvbG9tYm8nLFxuICAgIGZpcHM6ICdDRScsXG4gICAgaXNvMjogJ0xLJyxcbiAgICBpc28zOiAnTEtBJyxcbiAgICBpc29ObzogJzE0NCcsXG4gICAgaW50ZXJuZXQ6ICdMSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU3VkYW4nLFxuICAgIGNhcGl0YWw6ICdLaGFydG91bScsXG4gICAgZmlwczogJ1NVJyxcbiAgICBpc28yOiAnU0QnLFxuICAgIGlzbzM6ICdTRE4nLFxuICAgIGlzb05vOiAnNzM2JyxcbiAgICBpbnRlcm5ldDogJ1NEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdTdXJpbmFtZScsXG4gICAgY2FwaXRhbDogJ1BhcmFtYXJpYm8nLFxuICAgIGZpcHM6ICdOUycsXG4gICAgaXNvMjogJ1NSJyxcbiAgICBpc28zOiAnU1VSJyxcbiAgICBpc29ObzogJzc0MCcsXG4gICAgaW50ZXJuZXQ6ICdTUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3ZhbGJhcmQnLFxuICAgIGNhcGl0YWw6ICdMb25neWVhcmJ5ZW4nLFxuICAgIGZpcHM6ICdTVicsXG4gICAgaXNvMjogJ1NKJyxcbiAgICBpc28zOiAnU0pNJyxcbiAgICBpc29ObzogJzc0NCcsXG4gICAgaW50ZXJuZXQ6ICdTSidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXN3YXRpbmknLFxuICAgIGNhcGl0YWw6ICdNYmFiYW5lJyxcbiAgICBmaXBzOiAnV1onLFxuICAgIGlzbzI6ICdTWicsXG4gICAgaXNvMzogJ1NXWicsXG4gICAgaXNvTm86ICc3NDgnLFxuICAgIGludGVybmV0OiAnU1onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1N3ZWRlbicsXG4gICAgY2FwaXRhbDogJ1N0b2NraG9sbScsXG4gICAgZmlwczogJ1NXJyxcbiAgICBpc28yOiAnU0UnLFxuICAgIGlzbzM6ICdTV0UnLFxuICAgIGlzb05vOiAnNzUyJyxcbiAgICBpbnRlcm5ldDogJ1NFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1N3aXR6ZXJsYW5kJyxcbiAgICBjYXBpdGFsOiAnQmVybicsXG4gICAgZmlwczogJ1NaJyxcbiAgICBpc28yOiAnQ0gnLFxuICAgIGlzbzM6ICdDSEUnLFxuICAgIGlzb05vOiAnNzU2JyxcbiAgICBpbnRlcm5ldDogJ0NIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU3lyaWEnLFxuICAgIGNhcGl0YWw6ICdEYW1hc2N1cycsXG4gICAgZmlwczogJ1NZJyxcbiAgICBpc28yOiAnU1knLFxuICAgIGlzbzM6ICdTWVInLFxuICAgIGlzb05vOiAnNzYwJyxcbiAgICBpbnRlcm5ldDogJ1NZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVGFpd2FuJyxcbiAgICBjYXBpdGFsOiAnVGFpcGVpJyxcbiAgICBmaXBzOiAnVFcnLFxuICAgIGlzbzI6ICdUVycsXG4gICAgaXNvMzogJ1RXTicsXG4gICAgaXNvTm86ICcxNTgnLFxuICAgIGludGVybmV0OiAnVFcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdUYWppa2lzdGFuJyxcbiAgICBjYXBpdGFsOiAnRHVzaGFuYmUnLFxuICAgIGZpcHM6ICdUSScsXG4gICAgaXNvMjogJ1RKJyxcbiAgICBpc28zOiAnVEpLJyxcbiAgICBpc29ObzogJzc2MicsXG4gICAgaW50ZXJuZXQ6ICdUSidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUYW56YW5pYScsXG4gICAgY2FwaXRhbDogJ0RhciBlcyBTYWxhYW0nLFxuICAgIGZpcHM6ICdUWicsXG4gICAgaXNvMjogJ1RaJyxcbiAgICBpc28zOiAnVFpBJyxcbiAgICBpc29ObzogJzgzNCcsXG4gICAgaW50ZXJuZXQ6ICdUWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1RoYWlsYW5kJyxcbiAgICBjYXBpdGFsOiAnQmFuZ2tvaycsXG4gICAgZmlwczogJ1RIJyxcbiAgICBpc28yOiAnVEgnLFxuICAgIGlzbzM6ICdUSEEnLFxuICAgIGlzb05vOiAnNzY0JyxcbiAgICBpbnRlcm5ldDogJ1RIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1RvZ28nLFxuICAgIGNhcGl0YWw6ICdMb21lJyxcbiAgICBmaXBzOiAnVE8nLFxuICAgIGlzbzI6ICdURycsXG4gICAgaXNvMzogJ1RHTycsXG4gICAgaXNvTm86ICc3NjgnLFxuICAgIGludGVybmV0OiAnVEcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnVG9rZWxhdScsXG4gICAgY2FwaXRhbDogJ25vbmUnLFxuICAgIGZpcHM6ICdUTCcsXG4gICAgaXNvMjogJ1RLJyxcbiAgICBpc28zOiAnVEtMJyxcbiAgICBpc29ObzogJzc3MicsXG4gICAgaW50ZXJuZXQ6ICdUSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdUb25nYScsXG4gICAgY2FwaXRhbDogXCJOdWt1J2Fsb2ZhXCIsXG4gICAgZmlwczogJ1ROJyxcbiAgICBpc28yOiAnVE8nLFxuICAgIGlzbzM6ICdUT04nLFxuICAgIGlzb05vOiAnNzc2JyxcbiAgICBpbnRlcm5ldDogJ1RPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gICAgY2FwaXRhbDogJ1BvcnQtb2YtU3BhaW4nLFxuICAgIGZpcHM6ICdURCcsXG4gICAgaXNvMjogJ1RUJyxcbiAgICBpc28zOiAnVFRPJyxcbiAgICBpc29ObzogJzc4MCcsXG4gICAgaW50ZXJuZXQ6ICdUVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVHVuaXNpYScsXG4gICAgY2FwaXRhbDogJ1R1bmlzJyxcbiAgICBmaXBzOiAnVFMnLFxuICAgIGlzbzI6ICdUTicsXG4gICAgaXNvMzogJ1RVTicsXG4gICAgaXNvTm86ICc3ODgnLFxuICAgIGludGVybmV0OiAnVE4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdUdXJrZXknLFxuICAgIGNhcGl0YWw6ICdBbmthcmEnLFxuICAgIGZpcHM6ICdUVScsXG4gICAgaXNvMjogJ1RSJyxcbiAgICBpc28zOiAnVFVSJyxcbiAgICBpc29ObzogJzc5MicsXG4gICAgaW50ZXJuZXQ6ICdUUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ1R1cmttZW5pc3RhbicsXG4gICAgY2FwaXRhbDogJ0FzaGdhYmF0JyxcbiAgICBmaXBzOiAnVFgnLFxuICAgIGlzbzI6ICdUTScsXG4gICAgaXNvMzogJ1RLTScsXG4gICAgaXNvTm86ICc3OTUnLFxuICAgIGludGVybmV0OiAnVE0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdHcmFuZCBUdXJrJyxcbiAgICBmaXBzOiAnVEsnLFxuICAgIGlzbzI6ICdUQycsXG4gICAgaXNvMzogJ1RDQScsXG4gICAgaXNvTm86ICc3OTYnLFxuICAgIGludGVybmV0OiAnVEMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnVHV2YWx1JyxcbiAgICBjYXBpdGFsOiAnRnVuYWZ1dGknLFxuICAgIGZpcHM6ICdUVicsXG4gICAgaXNvMjogJ1RWJyxcbiAgICBpc28zOiAnVFVWJyxcbiAgICBpc29ObzogJzc5OCcsXG4gICAgaW50ZXJuZXQ6ICdUVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdVZ2FuZGEnLFxuICAgIGNhcGl0YWw6ICdLYW1wYWxhJyxcbiAgICBmaXBzOiAnVUcnLFxuICAgIGlzbzI6ICdVRycsXG4gICAgaXNvMzogJ1VHQScsXG4gICAgaXNvTm86ICc4MDAnLFxuICAgIGludGVybmV0OiAnVUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnVWtyYWluZScsXG4gICAgY2FwaXRhbDogJ0tpZXYnLFxuICAgIGZpcHM6ICdVUCcsXG4gICAgaXNvMjogJ1VBJyxcbiAgICBpc28zOiAnVUtSJyxcbiAgICBpc29ObzogJzgwNCcsXG4gICAgaW50ZXJuZXQ6ICdVQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICBjYXBpdGFsOiAnQWJ1IERoYWJpJyxcbiAgICBmaXBzOiAnVEMnLFxuICAgIGlzbzI6ICdBRScsXG4gICAgaXNvMzogJ0FSRScsXG4gICAgaXNvTm86ICc3ODQnLFxuICAgIGludGVybmV0OiAnQUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxuICAgIGNhcGl0YWw6ICdMb25kb24nLFxuICAgIGZpcHM6ICdVSycsXG4gICAgaXNvMjogJ0dCJyxcbiAgICBpc28zOiAnR0JSJyxcbiAgICBpc29ObzogJzgyNicsXG4gICAgaW50ZXJuZXQ6ICdVSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdOb3J0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgY2FwaXRhbDogJ1dhc2hpbmd0b24gREMnLFxuICAgIGZpcHM6ICdVUycsXG4gICAgaXNvMjogJ1VTJyxcbiAgICBpc28zOiAnVVNBJyxcbiAgICBpc29ObzogJzg0MCcsXG4gICAgaW50ZXJuZXQ6ICdVUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdOb3J0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnV2FzaGluZ3RvbiBEQycsXG4gICAgZmlwczogJycsXG4gICAgaXNvMjogJ1VNJyxcbiAgICBpc28zOiAnVU1JJyxcbiAgICBpc29ObzogJzU4MScsXG4gICAgaW50ZXJuZXQ6ICdVUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnVXJ1Z3VheScsXG4gICAgY2FwaXRhbDogJ01vbnRldmlkZW8nLFxuICAgIGZpcHM6ICdVWScsXG4gICAgaXNvMjogJ1VZJyxcbiAgICBpc28zOiAnVVJZJyxcbiAgICBpc29ObzogJzg1OCcsXG4gICAgaW50ZXJuZXQ6ICdVWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ1V6YmVraXN0YW4nLFxuICAgIGNhcGl0YWw6ICdUYXNoa2VudCAoVG9zaGtlbnQpJyxcbiAgICBmaXBzOiAnVVonLFxuICAgIGlzbzI6ICdVWicsXG4gICAgaXNvMzogJ1VaQicsXG4gICAgaXNvTm86ICc4NjAnLFxuICAgIGludGVybmV0OiAnVVonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnVmFudWF0dScsXG4gICAgY2FwaXRhbDogJ1BvcnQtVmlsYScsXG4gICAgZmlwczogJ05IJyxcbiAgICBpc28yOiAnVlUnLFxuICAgIGlzbzM6ICdWVVQnLFxuICAgIGlzb05vOiAnNTQ4JyxcbiAgICBpbnRlcm5ldDogJ1ZVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdWZW5lenVlbGEnLFxuICAgIGNhcGl0YWw6ICdDYXJhY2FzJyxcbiAgICBmaXBzOiAnVkUnLFxuICAgIGlzbzI6ICdWRScsXG4gICAgaXNvMzogJ1ZFTicsXG4gICAgaXNvTm86ICc4NjInLFxuICAgIGludGVybmV0OiAnVUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdWaWV0bmFtJyxcbiAgICBjYXBpdGFsOiAnSGFub2knLFxuICAgIGZpcHM6ICdWTicsXG4gICAgaXNvMjogJ1ZOJyxcbiAgICBpc28zOiAnVk5NJyxcbiAgICBpc29ObzogJzcwNCcsXG4gICAgaW50ZXJuZXQ6ICdWTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1ZpcmdpbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnQ2hhcmxvdHRlIEFtYWxpZScsXG4gICAgZmlwczogJ1ZRJyxcbiAgICBpc28yOiAnVkknLFxuICAgIGlzbzM6ICdWSVInLFxuICAgIGlzb05vOiAnODUwJyxcbiAgICBpbnRlcm5ldDogJ1ZJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1dhbGxpcyBhbmQgRnV0dW5hJyxcbiAgICBjYXBpdGFsOiAnTWF0YS1VdHUgKG9uIElsZSBVdmVhKScsXG4gICAgZmlwczogJ1dGJyxcbiAgICBpc28yOiAnV0YnLFxuICAgIGlzbzM6ICdXTEYnLFxuICAgIGlzb05vOiAnODc2JyxcbiAgICBpbnRlcm5ldDogJ1dGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdXZXN0ZXJuIFNhaGFyYScsXG4gICAgY2FwaXRhbDogJ25vbmUnLFxuICAgIGZpcHM6ICdXSScsXG4gICAgaXNvMjogJ0VIJyxcbiAgICBpc28zOiAnRVNIJyxcbiAgICBpc29ObzogJzczMicsXG4gICAgaW50ZXJuZXQ6ICdFSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdXZXN0ZXJuIFNhbW9hJyxcbiAgICBjYXBpdGFsOiAnQXBpYScsXG4gICAgZmlwczogJ1dTJyxcbiAgICBpc28yOiAnV1MnLFxuICAgIGlzbzM6ICdXU00nLFxuICAgIGlzb05vOiAnODgyJyxcbiAgICBpbnRlcm5ldDogJ1dTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnWWVtZW4nLFxuICAgIGNhcGl0YWw6ICdTYW5hYScsXG4gICAgZmlwczogJ1lNJyxcbiAgICBpc28yOiAnWUUnLFxuICAgIGlzbzM6ICdZRU0nLFxuICAgIGlzb05vOiAnODg3JyxcbiAgICBpbnRlcm5ldDogJ1lFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ0RlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcbiAgICBjYXBpdGFsOiAnS2luc2hhc2EnLFxuICAgIGZpcHM6ICdDRycsXG4gICAgaXNvMjogJ0NEJyxcbiAgICBpc28zOiAnQ09EJyxcbiAgICBpc29ObzogJzE4MCcsXG4gICAgaW50ZXJuZXQ6ICdaUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnWmFtYmlhJyxcbiAgICBjYXBpdGFsOiAnTHVzYWthJyxcbiAgICBmaXBzOiAnWkEnLFxuICAgIGlzbzI6ICdaTScsXG4gICAgaXNvMzogJ1pNQicsXG4gICAgaXNvTm86ICc4OTQnLFxuICAgIGludGVybmV0OiAnWk0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1ppbWJhYndlJyxcbiAgICBjYXBpdGFsOiAnSGFyYXJlJyxcbiAgICBmaXBzOiAnWkknLFxuICAgIGlzbzI6ICdaVycsXG4gICAgaXNvMzogJ1pXRScsXG4gICAgaXNvTm86ICc3MTYnLFxuICAgIGludGVybmV0OiAnWlcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdIb25nIEtvbmcnLFxuICAgIGNhcGl0YWw6ICdWaWN0b3JpYScsXG4gICAgZmlwczogJ0hLJyxcbiAgICBpc28yOiAnSEsnLFxuICAgIGlzbzM6ICdIS0cnLFxuICAgIGlzb05vOiAnMzQ0JyxcbiAgICBpbnRlcm5ldDogJ0hLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTWFjYXUnLFxuICAgIGNhcGl0YWw6ICdNYWNhdScsXG4gICAgZmlwczogJ01DJyxcbiAgICBpc28yOiAnTU8nLFxuICAgIGlzbzM6ICdNQUMnLFxuICAgIGlzb05vOiAnNDQ2JyxcbiAgICBpbnRlcm5ldDogJ01PJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW50YXJjdGljYScsXG4gICAgcmVnaW9uOiAnQW50YXJjdGljYScsXG4gICAgY291bnRyeTogJ0FudGFyY3RpY2EnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdBWScsXG4gICAgaXNvMjogJ0FRJyxcbiAgICBpc28zOiAnQVRBJyxcbiAgICBpc29ObzogJzEwJyxcbiAgICBpbnRlcm5ldDogJ0FRJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXRsYW50aWMgT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEF0bGFudGljIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnQm91dmV0IElzbGFuZCcsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0JWJyxcbiAgICBpc28yOiAnQlYnLFxuICAgIGlzbzM6ICdCVlQnLFxuICAgIGlzb05vOiAnNzQnLFxuICAgIGludGVybmV0OiAnQlYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnSU8nLFxuICAgIGlzbzI6ICdJTycsXG4gICAgaXNvMzogJ0lPVCcsXG4gICAgaXNvTm86ICc4NicsXG4gICAgaW50ZXJuZXQ6ICdJTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0luZGlhbiBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnRnJlbmNoIFNvdXRoZXJuIGFuZCBBbnRhcmN0aWMgTGFuZHMnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdGUycsXG4gICAgaXNvMjogJ1RGJyxcbiAgICBpc28zOiAnQVRGJyxcbiAgICBpc29ObzogJzI2MCcsXG4gICAgaW50ZXJuZXQ6ICctLSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0luZGlhbiBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnSE0nLFxuICAgIGlzbzI6ICdITScsXG4gICAgaXNvMzogJ0hNRCcsXG4gICAgaXNvTm86ICczMzQnLFxuICAgIGludGVybmV0OiAnSE0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBdGxhbnRpYyBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGggQXRsYW50aWMgT2NlYW4nLFxuICAgIGNvdW50cnk6ICdTYWludCBIZWxlbmEnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdTSCcsXG4gICAgaXNvMjogJ1NIJyxcbiAgICBpc28zOiAnU0hOJyxcbiAgICBpc29ObzogJzY1NCcsXG4gICAgaW50ZXJuZXQ6ICdTSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0F0bGFudGljIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aCBBdGxhbnRpYyBPY2VhbicsXG4gICAgY291bnRyeTogJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnU1gnLFxuICAgIGlzbzI6ICdHUycsXG4gICAgaXNvMzogJ1NHUycsXG4gICAgaXNvTm86ICcyMzknLFxuICAgIGludGVybmV0OiAnR1MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR3Vlcm5zZXknLFxuICAgIGNhcGl0YWw6ICdTYWludCBQZXRlciBQb3J0JyxcbiAgICBmaXBzOiAnR0snLFxuICAgIGlzbzI6ICdHRycsXG4gICAgaXNvMzogJ0dHWScsXG4gICAgaXNvTm86ICc4MzEnLFxuICAgIGludGVybmV0OiAnR0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU2VyYmlhJyxcbiAgICBjYXBpdGFsOiAnQmVsZ3JhZGUnLFxuICAgIGZpcHM6ICdSSScsXG4gICAgaXNvMjogJ1JTJyxcbiAgICBpc28zOiAnU1JCJyxcbiAgICBpc29ObzogJzY4OCcsXG4gICAgaW50ZXJuZXQ6ICdSUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NhaW50IEJhcnRow6lsZW15JyxcbiAgICBjYXBpdGFsOiAnR3VzdGF2aWEnLFxuICAgIGZpcHM6ICdUQicsXG4gICAgaXNvMjogJ0JMJyxcbiAgICBpc28zOiAnQkxNJyxcbiAgICBpc29ObzogJzY1MicsXG4gICAgaW50ZXJuZXQ6ICdCTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNb250ZW5lZ3JvJyxcbiAgICBjYXBpdGFsOiAnUG9kZ29yaWNhJyxcbiAgICBmaXBzOiAnTUonLFxuICAgIGlzbzI6ICdNRScsXG4gICAgaXNvMzogJ01ORScsXG4gICAgaXNvTm86ICc0OTknLFxuICAgIGludGVybmV0OiAnTUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSmVyc2V5JyxcbiAgICBjYXBpdGFsOiAnU2FpbnQgSGVsaWVyJyxcbiAgICBmaXBzOiAnSkUnLFxuICAgIGlzbzI6ICdKRScsXG4gICAgaXNvMzogJ0pFWScsXG4gICAgaXNvTm86ICc4MzInLFxuICAgIGludGVybmV0OiAnSkUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdDdXJhw6dhbycsXG4gICAgY2FwaXRhbDogJ1dpbGxlbXN0YWQnLFxuICAgIGZpcHM6ICdVQycsXG4gICAgaXNvMjogJ0NXJyxcbiAgICBpc28zOiAnQ1VXJyxcbiAgICBpc29ObzogJzUzMScsXG4gICAgaW50ZXJuZXQ6ICdDVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NhaW50IE1hcnRpbicsXG4gICAgY2FwaXRhbDogJ01hcmlnb3QnLFxuICAgIGZpcHM6ICdSTicsXG4gICAgaXNvMjogJ01GJyxcbiAgICBpc28zOiAnTUFGJyxcbiAgICBpc29ObzogJzY2MycsXG4gICAgaW50ZXJuZXQ6ICdNRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NpbnQgTWFhcnRlbicsXG4gICAgY2FwaXRhbDogJ1BoaWxpcHNidXJnJyxcbiAgICBmaXBzOiAnTk4nLFxuICAgIGlzbzI6ICdTWCcsXG4gICAgaXNvMzogJ1NYTScsXG4gICAgaXNvTm86ICc1MzQnLFxuICAgIGludGVybmV0OiAnU1gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdUaW1vci1MZXN0ZScsXG4gICAgY2FwaXRhbDogJ0RpbGknLFxuICAgIGZpcHM6ICdUVCcsXG4gICAgaXNvMjogJ1RMJyxcbiAgICBpc28zOiAnVExTJyxcbiAgICBpc29ObzogJzYyNicsXG4gICAgaW50ZXJuZXQ6ICdUTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU291dGggU3VkYW4nLFxuICAgIGNhcGl0YWw6ICdKdWJhJyxcbiAgICBmaXBzOiAnT0QnLFxuICAgIGlzbzI6ICdTUycsXG4gICAgaXNvMzogJ1NTRCcsXG4gICAgaXNvTm86ICc3MjgnLFxuICAgIGludGVybmV0OiAnU1MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ8OFbGFuZCBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnTWFyaWVoYW1uJyxcbiAgICBmaXBzOiAnQVgnLFxuICAgIGlzbzI6ICdBWCcsXG4gICAgaXNvMzogJ0FMQScsXG4gICAgaXNvTm86ICcyNDgnLFxuICAgIGludGVybmV0OiAnQVgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCb25haXJlJyxcbiAgICBjYXBpdGFsOiAnS3JhbGVuZGlqaycsXG4gICAgZmlwczogJ0JRJyxcbiAgICBpc28yOiAnQlEnLFxuICAgIGlzbzM6ICdCRVMnLFxuICAgIGlzb05vOiAnNTM1JyxcbiAgICBpbnRlcm5ldDogJ0JRJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1JlcHVibGljIG9mIEtvc292bycsXG4gICAgY2FwaXRhbDogJ1ByaXN0aW5hJyxcbiAgICBmaXBzOiAnS1YnLFxuICAgIGlzbzI6ICdYSycsXG4gICAgaXNvMzogJ1VOSycsXG4gICAgaXNvTm86IG51bGwsXG4gICAgaW50ZXJuZXQ6ICdYSydcbiAgfSxcbl1cblxubW9kdWxlLmV4cG9ydHMuY291bnRyaWVzID0gY291bnRyaWVzXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7QUFDM0U7K0VBQytFO0FBQy9FOzs7RUFHRTtBQUNGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7QUFDRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFO0FBQ0Y7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7QUFDL0U7O0VBRUU7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTtBQUNGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7QUFDRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7QUFDRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7QUFDRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTtBQUNGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7QUFDRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTtBQUNGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgLS1saWdodC1ibGFjay1jb2xvcjogIzM5MzkzOTtcXG4gIC0tc2hhZG93OiAxcHggMnB4IDRweCByZ2IoMCAwIDAgLyA1MSUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnAsXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjZyZW07IC8qIFRvIHR1cm4gMXJlbSBpbnRvIDEwcHggKi9cXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBhdXRvO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG59XFxuXFxuW2Zvcj1cXFwiY2l0eS1uYW1lXFxcIl0ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbiNjaXR5LW5hbWUge1xcbiAgd2lkdGg6IDI5cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDdweCAzLjRyZW0gN3B4IDFyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAyNSUpO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuW3R5cGU9XFxcImltYWdlXFxcIl06YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmVycm9yLS1hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAvKiBTcGVjaWZpZXMgaG93IGFuIGVsZW1lbnQncyBjb250ZW50IHNob3VsZCBibGVuZCB3aXRoIGl0cyBkaXJlY3QgcGFyZW50IGJhY2tncm91bmQuICovXFxuICB0ZXh0LXNoYWRvdzogMC4ycHggMCAwIGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmNvbnRhaW5lcl9fbG9nb0JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIGxlZnQ6IDJyZW07XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBjb2xvcjogI2ZmOGYzMjtcXG4gIHRleHQtc2hhZG93OiAwIDAgYmxhY2s7XFxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogM3JlbSA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbn1cXG5cXG4uY2FyZF9fY29uZGl0aW9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4uY2FyZF9fY2l0eSB7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uY2FyZF9fZGVncmVlcyB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcmRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0b3A6IDQ1JTtcXG4gIGxlZnQ6IDIyLjVyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzX19mZWVsc0xpa2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlsc19fZmVlbHNMaWtlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkZFRUxTIExJS0U6IFxcXCI7XFxufVxcblxcbi5kZXRhaWxzX193aW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIldJTkQ6IFxcXCI7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMS42cmVtIDRyZW0gMC4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0td2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCA0MCUpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXItLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDE1JSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lcl9fZGFpbHlDYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwIDAgMS42cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGFpbHlDYXJkX19tYXgge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNlbHNpdXM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mYWhyZW5oZWl0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2Vsc2l1cy0tYmlnOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuOHJlbTtcXG4gIGxlZnQ6IDE3LjNyZW07XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmZhaHJlbmhlaXQtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcblthbHQ9XFxcIkNvbmRpdGlvblxcXCJdIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLyogTG9hZGluZyBjb21wb25lbnQqL1xcbi5jb250YWluZXJfX2xvYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjI1KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5sb2FkZXJfX2NvbXBvbmVudCB7XFxuICBib3JkZXI6IDE2cHggc29saWQgZ3JheTtcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgcmdiKDkyIDIxMCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDVweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwOyAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICB3aWR0aDogMTdweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNmU2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsZ0JBQWdCLEVBQUUsMkJBQTJCO0VBQzdDLDRCQUE0QjtFQUM1QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0dBQXdHO0VBQ3hHLGlCQUFpQixFQUFFLDJCQUEyQjtFQUM5QyxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtCQUFr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QUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVUsRUFBRSwrQkFBK0I7RUFDM0MsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9ub3JtYWxpemUuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICAtLWxpZ2h0LWJsYWNrLWNvbG9yOiAjMzkzOTM5O1xcbiAgLS1zaGFkb3c6IDFweCAycHggNHB4IHJnYigwIDAgMCAvIDUxJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbn1cXG5cXG5bZm9yPVxcXCJjaXR5LW5hbWVcXFwiXSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICB3aWR0aDogMjlyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDMuNHJlbSA3cHggMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDI1JSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuW3R5cGU9XFxcImltYWdlXFxcIl0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiA3cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4uZXJyb3ItLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7IC8qIFNwZWNpZmllcyBob3cgYW4gZWxlbWVudCdzIGNvbnRlbnQgc2hvdWxkIGJsZW5kIHdpdGggaXRzIGRpcmVjdCBwYXJlbnQgYmFja2dyb3VuZC4gKi9cXG4gIHRleHQtc2hhZG93OiAwLjJweCAwIDAgY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uY29udGFpbmVyX19sb2dvQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgbGVmdDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGNvbG9yOiAjZmY4ZjMyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCBibGFjaztcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgbWFyZ2luOiAzcmVtIDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxufVxcblxcbi5jYXJkX19jb25kaXRpb24ge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcbi5jYXJkX19jaXR5IHtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5jYXJkX19kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMjIuNXJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRldGFpbHNfX2ZlZWxzTGlrZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzX19mZWVsc0xpa2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRkVFTFMgTElLRTogXFxcIjtcXG59XFxuXFxuLmRldGFpbHNfX3dpbmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiV0lORDogXFxcIjtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW0gNHJlbSAwLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDQwJSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0tYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyX19kYWlseUNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDAgMCAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYWlseUNhcmRfX21heCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY2Vsc2l1czo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZhaHJlbmhlaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jZWxzaXVzLS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZmFocmVuaGVpdC0tYmlnOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuOHJlbTtcXG4gIGxlZnQ6IDE3LjNyZW07XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuW2FsdD1cXFwiQ29uZGl0aW9uXFxcIl0ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4vKiBMb2FkaW5nIGNvbXBvbmVudCovXFxuLmNvbnRhaW5lcl9fbG9hZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmxvYWRlcl9fY29tcG9uZW50IHtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCByZ2IoOTIgMjEwIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogVGhlIHN3aXRjaCAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogNXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7IC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA2ZTZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kdWxlcy9tb2RlbC9tYWluTW9kZWxcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL21vZHVsZXMvdmlldy9tYWluVmlld1wiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XG5cbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XG5cbmlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbn1cbiJdLCJuYW1lcyI6WyJsb29rdXAiLCJyZXF1aXJlIiwiQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoV2VhdGhlciIsImNoZWNrSW5wdXQiLCJ3aW5kb3ciLCJzZXRIb21lUGFnZUJnIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiZGVncmVlQmlnIiwicXVlcnlTZWxlY3RvckFsbCIsImRlZ3JlZVNtYWxsIiwid2luZCIsIm1haW4iLCJzcGFuIiwic3dpdGNoQnRuIiwibG9hZERpdiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZWFyY2hCdG4iLCJDaGVja0VtcHR5IiwiZ2V0RWxlbWVudHMiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkaXR5IiwidmFsaWQiLCJzaG93RW1wdHlFcnJvciIsInNob3dDb250ZW50IiwiZ2V0R2VvTG9jYXRpb24iLCJnZW9Mb2NhdGlvbiIsInJlbW92ZSIsInNob3dVbmtub3duQ2l0eUVycm9yIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJjdXJyZW50V2VhdGhlciIsImdldEVpZ2h0RGF5c1dlYXRoZXIiLCJlaWdodERheXNXZWF0aGVyIiwiaGFzQ2hpbGROb2RlcyIsImRlbGV0ZUNvbnRlbnQiLCJjaGFuZ2VVbml0cyIsImNyZWF0ZU1haW5DYXJkIiwiY3JlYXRlRWlnaHREYXlzQ2FyZCIsImNoYW5nZUJhY2tncm91bmQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJmZXRjaEdlb0xvY2F0aW9uIiwiY29udmVydENvdW50cnlOYW1lVG9Db2RlIiwiaW5wdXRBcnJheSIsInNwbGl0IiwiY2l0eU5hbWUiLCJjb3VudHJ5Iiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJjb3VudHJ5TmFtZSIsImNhcGl0YWxpemUiLCJ0cmltIiwiYnlDb3VudHJ5IiwiY291bnRyeUNvZGUiLCJpc28yIiwic3RyIiwic3BsaXRTdHIiLCJ0b0xvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJmZXRjaEN1cnJlbnRXZWF0aGVyIiwibGF0IiwibG9uIiwiZmV0Y2hFaWdodERheXNXZWF0aGVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0ZXh0Q29udGVudCIsImNvbnZlcnRUb0ZhaHJlbmhlaXQiLCJjb252ZXJ0VG9NcGgiLCJjb252ZXJ0VG9DZWxzaXVzIiwiY29udmVydFRvS21oIiwidG9nZ2xlIiwiZWxlbWVudCIsImRlZ3JlZSIsInZhbE51bSIsInBhcnNlRmxvYXQiLCJNYXRoIiwicm91bmQiLCJzcGVlZCIsInRvRml4ZWQiLCJFaWdodERheXNDYXJkIiwiZGF0YSIsIm1heFRlbXAiLCJtaW5UZW1wIiwiaW1nIiwiZGF5IiwiZGFpbHkiLCJ0ZW1wIiwibWF4IiwibWluIiwic3JjIiwid2VhdGhlciIsImljb24iLCJkYXlPZldlZWsiLCJnZXREYXlPZldlZWsiLCJEYXRlIiwiZHQiLCJnZXREYXkiLCJudW1iZXIiLCJNYWluQ2FyZCIsImNvbmRpdGlvbiIsImNpdHkiLCJkZWdyZWVzIiwiZmVlbHNMaWtlIiwiaHVtaWRpdHkiLCJjYXJkSW5mbyIsImNhcmREYXRhIiwiTW9kZWwiLCJrZXkiLCJtZXRyaWMiLCJpbXBlcmlhbCIsInNlYXJjaFRleHQiLCJVUkwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwicmVnaW9uTmFtZXNJbkVuZ2xpc2giLCJJbnRsIiwiRGlzcGxheU5hbWVzIiwidHlwZSIsIm5hbWUiLCJvZiIsInN5cyIsImZlZWxzX2xpa2UiLCJjb252ZXJ0RnJvbU1zIiwibWFpbkNhcmQiLCJnZW5lcmF0ZU1haW5DYXJkIiwiZmlsbE1haW5DYXJkIiwibWFpbkNhcmRJdGVtIiwiZWlnaHREYXlzQ2FyZCIsImdlbmVyYXRlRWlnaHREYXlzQ2FyZCIsImZpbGxFaWdodERheXNDYXJkIiwiZWlnaHREYXlzQ2FyZEl0ZW0iLCJjbGVhclNreURheSIsImNsZWFyU2t5TmlnaHQiLCJmZXdDbG91ZHNEYXkiLCJmZXdDbG91ZHNOaWdodCIsInNjYXR0ZXJlZENsb3Vkc0RheSIsInNjYXR0ZXJlZENsb3Vkc05pZ2h0IiwiYnJva2VuQ2xvdWRzRGF5IiwiYnJva2VuQ2xvdWRzTmlnaHQiLCJzaG93ZXJSYWluRGF5Iiwic2hvd2VyUmFpbk5pZ2h0IiwicmFpbkRheSIsInJhaW5OaWdodCIsInRodW5kZXJzdG9ybURheSIsInRodW5kZXJzdG9ybU5pZ2h0Iiwic25vd0RheSIsInNub3dOaWdodCIsIm1pc3REYXkiLCJtaXN0TmlnaHQiLCJpY29uQ29kZSIsInNldERhaWx5Q29udGFpbmVyQkciLCJjaGFuZ2VNYWluQmciLCJpbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiY29sb3IiLCJhZGQiLCJjaGFuZ2VCZyIsImltYWdlMCIsImltYWdlMSIsImltYWdlMiIsImltYWdlMyIsImltYWdlNCIsImltYWdlNSIsImltYWdlNiIsImltYWdlNyIsImltYWdlOCIsImltYWdlOSIsImltYWdlMTAiLCJpbWFnZTExIiwiVmlldyIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwiaW1hZ2VzIiwicG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsb25lIiwiY29udGVudCIsImNsb25lTm9kZSIsImFwcGVuZCIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsImNvbnRyb2xsZXIiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==