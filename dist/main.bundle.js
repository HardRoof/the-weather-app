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
      var randomNumber = Math.floor(Math.random() * 6);
      var images = [_images_home_aaron_burden_3Dc_I_65ug_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__, _images_home_daniel_leone_v7daTKlZzaw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__, _images_home_greg_rosenke_J90VAXIQK88_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_3__, _images_home_ian_dooley_DuBNA1QMpPA_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__, _images_home_john_fowler_RsRTIofe0HE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__, _images_home_simon_berger_twukN12EN7c_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__];
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
      span.textContent = '✖ Location not found. Please try another city or matching format: "City" or "City, Country"';
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

/***/ "./src/images/home/simon-berger-twukN12EN7c-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/home/simon-berger-twukN12EN7c-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "simon-berger-twukN12EN7c-unsplash.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7Ozs7Ozs7O0FBREEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQXRCOztJQUVNQztFQUNKLG9CQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QjtJQUFBOztJQUFBOztJQUN2QixLQUFLRCxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxJQUFMLEdBQVlBLElBQVo7SUFDQUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLGdCQUFkLENBQStCLFFBQS9CLEVBQXlDLFVBQUNDLENBQUQ7TUFBQSxPQUFPLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQkQsQ0FBbkIsQ0FBUDtJQUFBLENBQXpDO0lBQ0FILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QztNQUFBLE9BQU0sS0FBSSxDQUFDRyxVQUFMLEVBQU47SUFBQSxDQUF4QztJQUNBQyxNQUFNLENBQUNKLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO01BQUEsT0FBTSxLQUFJLENBQUNILElBQUwsQ0FBVVEsYUFBVixFQUFOO0lBQUEsQ0FBaEM7RUFDRDs7OztXQUVELHVCQUFjO01BQ1osSUFBTUMsS0FBSyxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtNQUNBLElBQU1DLFNBQVMsR0FBR1YsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNEMsQ0FBNUMsQ0FBbEI7TUFDQSxJQUFNQyxXQUFXLEdBQUdaLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsdURBQTFCLENBQXBCO01BQ0EsSUFBTUUsSUFBSSxHQUFHYixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWI7TUFDQSxJQUFNSyxJQUFJLEdBQUdkLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixZQUF2QixDQUFiO01BQ0EsSUFBTU0sSUFBSSxHQUFHZixRQUFRLENBQUNXLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxDQUE3QyxDQUFiO01BQ0EsSUFBTUssU0FBUyxHQUFHaEIsUUFBUSxDQUFDUyxhQUFULENBQXVCLGVBQXZCLENBQWxCO01BQ0EsSUFBTVEsT0FBTyxHQUFHakIsUUFBUSxDQUFDa0Isc0JBQVQsQ0FBZ0MsbUJBQWhDLEVBQXFELENBQXJELENBQWhCO01BQ0EsSUFBTUMsU0FBUyxHQUFHbkIsUUFBUSxDQUFDUyxhQUFULENBQXVCLGdCQUF2QixDQUFsQjtNQUVBLE9BQU87UUFBRUQsS0FBSyxFQUFMQSxLQUFGO1FBQVNFLFNBQVMsRUFBVEEsU0FBVDtRQUFvQkUsV0FBVyxFQUFYQSxXQUFwQjtRQUFpQ0MsSUFBSSxFQUFKQSxJQUFqQztRQUF1Q0MsSUFBSSxFQUFKQSxJQUF2QztRQUE2Q0MsSUFBSSxFQUFKQSxJQUE3QztRQUFtREMsU0FBUyxFQUFUQSxTQUFuRDtRQUE4REMsT0FBTyxFQUFQQSxPQUE5RDtRQUF1RUUsU0FBUyxFQUFUQTtNQUF2RSxDQUFQO0lBQ0Q7OztXQUVELHNCQUFhO01BQ1gsS0FBS3BCLElBQUwsQ0FBVXFCLFVBQVYsQ0FBcUIsS0FBS0MsV0FBTCxHQUFtQmIsS0FBeEMsRUFBK0MsS0FBS2EsV0FBTCxHQUFtQk4sSUFBbEU7SUFDRDs7OztzRkFFRCxpQkFBb0JaLENBQXBCO1FBQUE7O1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDRUEsQ0FBQyxDQUFDbUIsY0FBRjs7Z0JBREYsSUFFTyxLQUFLRCxXQUFMLEdBQW1CYixLQUFuQixDQUF5QmUsUUFBekIsQ0FBa0NDLEtBRnpDO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFBQSxpQ0FFdUQsS0FBS3pCLElBQUwsQ0FBVTBCLGNBQVYsQ0FBeUIsS0FBS0osV0FBTCxHQUFtQk4sSUFBNUMsQ0FGdkQ7O2NBQUE7Z0JBR0UsS0FBS2hCLElBQUwsQ0FBVTJCLFdBQVYsQ0FBc0IsQ0FBdEI7Z0JBSEY7Z0JBQUEsT0FJNEIsS0FBS0MsY0FBTCxFQUo1Qjs7Y0FBQTtnQkFJUUMsV0FKUjs7Z0JBQUEsTUFLTSxPQUFPQSxXQUFQLEtBQXVCLFdBTDdCO2tCQUFBO2tCQUFBO2dCQUFBOztnQkFNSSxLQUFLUCxXQUFMLEdBQW1CSixPQUFuQixDQUEyQlksTUFBM0I7Z0JBTkosaUNBT1csS0FBSzlCLElBQUwsQ0FBVStCLG9CQUFWLENBQStCLEtBQUtULFdBQUwsR0FBbUJOLElBQWxELENBUFg7O2NBQUE7Z0JBQUE7Z0JBQUEsT0FTK0IsS0FBS2dCLGlCQUFMLENBQXVCSCxXQUF2QixDQVQvQjs7Y0FBQTtnQkFTUUksY0FUUjtnQkFBQTtnQkFBQSxPQVVpQyxLQUFLQyxtQkFBTCxDQUF5QkwsV0FBekIsQ0FWakM7O2NBQUE7Z0JBVVFNLGdCQVZSO2dCQVdFLElBQUksS0FBS2IsV0FBTCxHQUFtQlAsSUFBbkIsQ0FBd0JxQixhQUF4QixFQUFKLEVBQTZDLEtBQUtwQyxJQUFMLENBQVVxQyxhQUFWLENBQXdCLEtBQUtmLFdBQUwsR0FBbUJQLElBQTNDO2dCQUM3QyxLQUFLZixJQUFMLENBQVUyQixXQUFWLENBQXNCLENBQXRCO2dCQUNBLEtBQUtMLFdBQUwsR0FBbUJMLFNBQW5CLENBQTZCZCxnQkFBN0IsQ0FBOEMsT0FBOUMsRUFBdUQsVUFBQ0MsQ0FBRDtrQkFBQSxPQUFPLE1BQUksQ0FBQ2tDLFdBQUwsQ0FBaUJsQyxDQUFqQixDQUFQO2dCQUFBLENBQXZEO2dCQUNBLEtBQUtMLEtBQUwsQ0FBV3dDLGNBQVgsQ0FBMEJOLGNBQTFCLEVBQTBDSixXQUExQztnQkFDQSxLQUFLN0IsSUFBTCxDQUFVMkIsV0FBVixDQUFzQixDQUF0QjtnQkFDQSxLQUFLNUIsS0FBTCxDQUFXeUMsbUJBQVgsQ0FBK0JMLGdCQUEvQjtnQkFDQSxLQUFLbkMsSUFBTCxDQUFVeUMsZ0JBQVYsQ0FBMkJSLGNBQTNCOztjQWpCRjtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7Ozs7Ozs7Ozs7O3VGQW9CQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ1FTLFVBRFIsR0FDcUIsS0FBS3BCLFdBQUwsR0FBbUJiLEtBQW5CLENBQXlCa0MsS0FEOUM7Z0JBQUE7Z0JBQUEsT0FFNEIsS0FBSzVDLEtBQUwsQ0FBVzZDLGdCQUFYLENBQTRCLEtBQUtDLHdCQUFMLENBQThCSCxVQUE5QixDQUE1QixDQUY1Qjs7Y0FBQTtnQkFFUWIsV0FGUjtnQkFBQSxrQ0FHU0EsV0FIVDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7Ozs7Ozs7Ozs7V0FNQSxrQ0FBeUJwQixLQUF6QixFQUFnQztNQUM5QixJQUFNcUMsVUFBVSxHQUFHckMsS0FBSyxDQUFDc0MsS0FBTixDQUFZLEdBQVosQ0FBbkI7TUFDQSxJQUFNQyxRQUFRLEdBQUdGLFVBQVUsQ0FBQyxDQUFELENBQTNCO01BQ0EsSUFBTUcsT0FBTyxHQUFHeEMsS0FBSyxDQUFDeUMsU0FBTixDQUFnQnpDLEtBQUssQ0FBQzBDLFdBQU4sQ0FBa0IsR0FBbEIsSUFBeUIsQ0FBekMsQ0FBaEI7TUFDQSxJQUFNQyxXQUFXLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkosT0FBTyxDQUFDSyxJQUFSLEVBQWhCLENBQXBCOztNQUNBLElBQUkxRCxNQUFNLENBQUMyRCxTQUFQLENBQWlCSCxXQUFqQixNQUFrQyxJQUF0QyxFQUE0QztRQUMxQyxJQUFNSSxXQUFXLEdBQUc1RCxNQUFNLENBQUMyRCxTQUFQLENBQWlCSCxXQUFqQixFQUE4QkssSUFBbEQ7UUFDQSxpQkFBVVQsUUFBVixlQUF1QlEsV0FBdkI7TUFDRCxDQUhELE1BR08saUJBQVVSLFFBQVY7SUFDUjs7O1dBRUQsb0JBQVdVLEdBQVgsRUFBZ0I7TUFDZCxJQUFNQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsV0FBSixHQUFrQmIsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBakI7O01BQ0EsS0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixRQUFRLENBQUNHLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO1FBQ3hDRixRQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjRixRQUFRLENBQUNFLENBQUQsQ0FBUixDQUFZRSxNQUFaLENBQW1CLENBQW5CLEVBQXNCQyxXQUF0QixLQUFzQ0wsUUFBUSxDQUFDRSxDQUFELENBQVIsQ0FBWVgsU0FBWixDQUFzQixDQUF0QixDQUFwRDtNQUNEOztNQUNELE9BQU9TLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLEdBQWQsQ0FBUDtJQUNEOzs7OzBGQUVELGtCQUF3QnBDLFdBQXhCO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUMrQixLQUFLOUIsS0FBTCxDQUFXbUUsbUJBQVgsQ0FBK0JyQyxXQUFXLENBQUNzQyxHQUEzQyxFQUFnRHRDLFdBQVcsQ0FBQ3VDLEdBQTVELENBRC9COztjQUFBO2dCQUNRbkMsY0FEUjtnQkFBQSxrQ0FFU0EsY0FGVDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7Ozs7Ozs7Ozs7OzRGQUtBLGtCQUEwQkosV0FBMUI7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ2lDLEtBQUs5QixLQUFMLENBQVdzRSxxQkFBWCxDQUFpQ3hDLFdBQVcsQ0FBQ3NDLEdBQTdDLEVBQWtEdEMsV0FBVyxDQUFDdUMsR0FBOUQsQ0FEakM7O2NBQUE7Z0JBQ1FqQyxnQkFEUjtnQkFBQSxrQ0FFU0EsZ0JBRlQ7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7O1dBS0EsdUJBQWM7TUFDWixJQUFJLEtBQUtiLFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCMkQsU0FBN0IsQ0FBdUNDLFFBQXZDLENBQWdELGNBQWhELENBQUosRUFBcUU7UUFDbkUsS0FBS2pELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCNkQsV0FBN0IsR0FBMkMsS0FBS0MsbUJBQUwsQ0FBeUIsS0FBS25ELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCNkQsV0FBdEQsQ0FBM0M7UUFDQSxLQUFLbEQsV0FBTCxHQUFtQlIsSUFBbkIsQ0FBd0IwRCxXQUF4QixhQUF5QyxLQUFLRSxZQUFMLENBQWtCLEtBQUtwRCxXQUFMLEdBQW1CUixJQUFuQixDQUF3QjBELFdBQTFDLENBQXpDO01BQ0Q7O01BQ0QsSUFBSSxLQUFLbEQsV0FBTCxHQUFtQlgsU0FBbkIsQ0FBNkIyRCxTQUE3QixDQUF1Q0MsUUFBdkMsQ0FBZ0QsaUJBQWhELENBQUosRUFBd0U7UUFDdEUsS0FBS2pELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCNkQsV0FBN0IsR0FBMkMsS0FBS0csZ0JBQUwsQ0FBc0IsS0FBS3JELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCNkQsV0FBbkQsQ0FBM0M7UUFDQSxLQUFLbEQsV0FBTCxHQUFtQlIsSUFBbkIsQ0FBd0IwRCxXQUF4QixhQUF5QyxLQUFLSSxZQUFMLENBQWtCLEtBQUt0RCxXQUFMLEdBQW1CUixJQUFuQixDQUF3QjBELFdBQTFDLENBQXpDO01BQ0Q7O01BQ0QsS0FBS2xELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCMkQsU0FBN0IsQ0FBdUNPLE1BQXZDLENBQThDLGNBQTlDO01BQ0EsS0FBS3ZELFdBQUwsR0FBbUJYLFNBQW5CLENBQTZCMkQsU0FBN0IsQ0FBdUNPLE1BQXZDLENBQThDLGlCQUE5Qzs7TUFWWSwyQ0FXVSxLQUFLdkQsV0FBTCxHQUFtQlQsV0FYN0I7TUFBQTs7TUFBQTtRQVdaLG9EQUFzRDtVQUFBLElBQTNDaUUsT0FBMkM7VUFDcEQsSUFBSUEsT0FBTyxDQUFDUixTQUFSLENBQWtCQyxRQUFsQixDQUEyQixTQUEzQixDQUFKLEVBQTJDTyxPQUFPLENBQUNOLFdBQVIsR0FBc0IsS0FBS0MsbUJBQUwsQ0FBeUJLLE9BQU8sQ0FBQ04sV0FBakMsQ0FBdEI7VUFDM0MsSUFBSU0sT0FBTyxDQUFDUixTQUFSLENBQWtCQyxRQUFsQixDQUEyQixZQUEzQixDQUFKLEVBQThDTyxPQUFPLENBQUNOLFdBQVIsR0FBc0IsS0FBS0csZ0JBQUwsQ0FBc0JHLE9BQU8sQ0FBQ04sV0FBOUIsQ0FBdEI7VUFDOUNNLE9BQU8sQ0FBQ1IsU0FBUixDQUFrQk8sTUFBbEIsQ0FBeUIsU0FBekI7VUFDQUMsT0FBTyxDQUFDUixTQUFSLENBQWtCTyxNQUFsQixDQUF5QixZQUF6QjtRQUNEO01BaEJXO1FBQUE7TUFBQTtRQUFBO01BQUE7SUFpQmI7OztXQUVELDBCQUFpQkUsTUFBakIsRUFBeUI7TUFDdkIsSUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNGLE1BQUQsQ0FBekI7TUFDQSxPQUFPRyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDSCxNQUFNLEdBQUcsRUFBVixJQUFnQixHQUEzQixDQUFQO0lBQ0Q7OztXQUVELDZCQUFvQkQsTUFBcEIsRUFBNEI7TUFDMUIsSUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNGLE1BQUQsQ0FBekI7TUFDQSxPQUFPRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBTSxHQUFHLEdBQVQsR0FBZSxFQUExQixDQUFQO0lBQ0Q7OztXQUVELHNCQUFhSSxLQUFiLEVBQW9CO01BQ2xCLElBQU1KLE1BQU0sR0FBR0MsVUFBVSxDQUFDRyxLQUFELENBQXpCO01BQ0EsT0FBTyxDQUFDSixNQUFNLEdBQUcsS0FBVixFQUFpQkssT0FBakIsQ0FBeUIsQ0FBekIsQ0FBUDtJQUNEOzs7V0FFRCxzQkFBYUQsS0FBYixFQUFvQjtNQUNsQixJQUFNSixNQUFNLEdBQUdDLFVBQVUsQ0FBQ0csS0FBRCxDQUF6QjtNQUNBLE9BQU8sQ0FBQ0osTUFBTSxHQUFHLEtBQVYsRUFBaUJLLE9BQWpCLENBQXlCLENBQXpCLENBQVA7SUFDRDs7Ozs7O0FBRUgsaUVBQWV2RixVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzSE13RjtFQUNKLHVCQUFZbkQsZ0JBQVosRUFBOEI7SUFBQTs7SUFDNUIsS0FBS29ELElBQUwsR0FBWXBELGdCQUFaO0VBQ0Q7Ozs7V0FFRCw2QkFBb0I7TUFDbEIsSUFBTXFELE9BQU8sR0FBR3ZGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWhCO01BQ0EsSUFBTTZFLE9BQU8sR0FBR3hGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWhCO01BQ0EsSUFBTThFLEdBQUcsR0FBR3pGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIscUJBQTFCLENBQVo7TUFDQSxJQUFNK0UsR0FBRyxHQUFHMUYsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixJQUExQixDQUFaOztNQUNBLEtBQUssSUFBSWlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBCLElBQUwsQ0FBVUssS0FBVixDQUFnQjlCLE1BQXBDLEVBQTRDRCxDQUFDLEVBQTdDLEVBQWlEO1FBQy9DMkIsT0FBTyxDQUFDM0IsQ0FBRCxDQUFQLENBQVdXLFdBQVgsR0FBeUJVLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtJLElBQUwsQ0FBVUssS0FBVixDQUFnQi9CLENBQWhCLEVBQW1CZ0MsSUFBbkIsQ0FBd0JDLEdBQW5DLENBQXpCO1FBQ0FMLE9BQU8sQ0FBQzVCLENBQUQsQ0FBUCxDQUFXVyxXQUFYLEdBQXlCVSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLSSxJQUFMLENBQVVLLEtBQVYsQ0FBZ0IvQixDQUFoQixFQUFtQmdDLElBQW5CLENBQXdCRSxHQUFuQyxDQUF6QjtRQUNBTCxHQUFHLENBQUM3QixDQUFELENBQUgsQ0FBT21DLEdBQVAsOENBQWlELEtBQUtULElBQUwsQ0FBVUssS0FBVixDQUFnQi9CLENBQWhCLEVBQW1Cb0MsT0FBbkIsQ0FBMkIsQ0FBM0IsRUFBOEJDLElBQS9FO1FBQ0EsSUFBTUMsU0FBUyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0IsSUFBSUMsSUFBSixDQUFTLEtBQUtkLElBQUwsQ0FBVUssS0FBVixDQUFnQi9CLENBQWhCLEVBQW1CeUMsRUFBbkIsR0FBd0IsSUFBakMsRUFBdUNDLE1BQXZDLEVBQWxCLENBQWxCLENBSitDLENBSXVDOztRQUN0RlosR0FBRyxDQUFDOUIsQ0FBRCxDQUFILENBQU9XLFdBQVAsR0FBcUIyQixTQUFyQjtNQUNEO0lBQ0Y7OztXQUVELHNCQUFhSyxNQUFiLEVBQXFCO01BQ25CLFFBQVFBLE1BQVI7UUFDRSxLQUFLLENBQUw7VUFDRSxPQUFPLFFBQVA7O1FBQ0YsS0FBSyxDQUFMO1VBQ0UsT0FBTyxRQUFQOztRQUNGLEtBQUssQ0FBTDtVQUNFLE9BQU8sU0FBUDs7UUFDRixLQUFLLENBQUw7VUFDRSxPQUFPLFdBQVA7O1FBQ0YsS0FBSyxDQUFMO1VBQ0UsT0FBTyxVQUFQOztRQUNGLEtBQUssQ0FBTDtVQUNFLE9BQU8sUUFBUDs7UUFDRixLQUFLLENBQUw7VUFDRSxPQUFPLFVBQVA7O1FBQ0Y7TUFmRjtJQWlCRDs7Ozs7O0FBR0gsaUVBQWVsQixhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4Q01tQjtFQUNKLGtCQUFZQyxTQUFaLEVBQXVCQyxJQUF2QixFQUE2QkMsT0FBN0IsRUFBc0NDLFNBQXRDLEVBQWlEL0YsSUFBakQsRUFBdURnRyxRQUF2RCxFQUFpRTtJQUFBOztJQUMvRCxLQUFLSixTQUFMLEdBQWlCQSxTQUFqQjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLE9BQUwsR0FBZUEsT0FBZjtJQUNBLEtBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0lBQ0EsS0FBSy9GLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtnRyxRQUFMLEdBQWdCQSxRQUFoQjtFQUNEOzs7O1dBRUQsd0JBQWU7TUFDYixJQUFNQyxRQUFRLEdBQUc5RyxRQUFRLENBQUNXLGdCQUFULENBQTBCLFNBQTFCLENBQWpCO01BQ0EsSUFBTW9HLFFBQVEsR0FBRyxDQUFDLEtBQUtOLFNBQU4sRUFBaUIsS0FBS0MsSUFBdEIsRUFBNEIsS0FBS0MsT0FBakMsRUFBMEMsS0FBS0MsU0FBL0MsRUFBMEQsS0FBSy9GLElBQS9ELEVBQXFFLEtBQUtnRyxRQUExRSxDQUFqQjs7TUFDQSxLQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa0QsUUFBUSxDQUFDakQsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7UUFDeENrRCxRQUFRLENBQUNsRCxDQUFELENBQVIsQ0FBWVcsV0FBWixHQUEwQndDLFFBQVEsQ0FBQ25ELENBQUQsQ0FBbEM7TUFDRDtJQUNGOzs7Ozs7QUFHSCxpRUFBZTRDLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDbEJBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUNBOztJQUVNUTtFQUNKLGlCQUFjO0lBQUE7O0lBQ1osS0FBS0MsR0FBTCxHQUFXLGtDQUFYO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLFFBQWQ7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0VBQ0Q7Ozs7O3lGQUVELGlCQUF1QkMsVUFBdkI7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUVVQyxHQUZWLDREQUVrRUQsVUFGbEUsb0JBRXNGLEtBQUtILEdBRjNGO2dCQUFBO2dCQUFBLE9BRzJCSyxLQUFLLENBQUNELEdBQUQsRUFBTTtrQkFBRUUsSUFBSSxFQUFFO2dCQUFSLENBQU4sQ0FIaEM7O2NBQUE7Z0JBR1VDLFFBSFY7Z0JBQUE7Z0JBQUEsT0FJdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUp2Qjs7Y0FBQTtnQkFJVW5DLElBSlY7Z0JBQUEsaUNBS1dBLElBQUksQ0FBQyxDQUFELENBTGY7O2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsaUNBT1dvQyxPQUFPLENBQUNDLEdBQVIsY0FBaUIsa0NBQWpCLENBUFg7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7Ozs0RkFXQSxrQkFBMEJ6RCxHQUExQixFQUErQkMsR0FBL0I7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNRa0QsR0FEUixpRUFDcUVuRCxHQURyRSxrQkFDZ0ZDLEdBRGhGLG9CQUM2RixLQUFLOEMsR0FEbEc7Z0JBQUE7Z0JBQUEsT0FFeUJLLEtBQUssQ0FBQ0QsR0FBRCxFQUFNO2tCQUFFRSxJQUFJLEVBQUU7Z0JBQVIsQ0FBTixDQUY5Qjs7Y0FBQTtnQkFFUUMsUUFGUjs7Z0JBQUEsSUFHT0EsUUFBUSxDQUFDSSxFQUhoQjtrQkFBQTtrQkFBQTtnQkFBQTs7Z0JBQUEsTUFJVUMsS0FBSyxDQUFDTCxRQUFRLENBQUNNLE1BQVYsQ0FKZjs7Y0FBQTtnQkFBQTtnQkFBQSxPQU1xQk4sUUFBUSxDQUFDQyxJQUFULEVBTnJCOztjQUFBO2dCQU1RbkMsSUFOUjtnQkFBQSxrQ0FPU0EsSUFQVDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7Ozs7Ozs7Ozs7OzhGQVVBLGtCQUE0QnBCLEdBQTVCLEVBQWlDQyxHQUFqQztRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ1FrRCxHQURSLGlFQUNxRW5ELEdBRHJFLGtCQUNnRkMsR0FEaEY7Z0JBQUE7Z0JBQUEsT0FFeUJtRCxLQUFLLENBQUNELEdBQUQsRUFBTTtrQkFBRUUsSUFBSSxFQUFFO2dCQUFSLENBQU4sQ0FGOUI7O2NBQUE7Z0JBRVFDLFFBRlI7O2dCQUFBLElBR09BLFFBQVEsQ0FBQ0ksRUFIaEI7a0JBQUE7a0JBQUE7Z0JBQUE7O2dCQUFBLE1BSVVDLEtBQUssQ0FBQ0wsUUFBUSxDQUFDTSxNQUFWLENBSmY7O2NBQUE7Z0JBQUE7Z0JBQUEsT0FNcUJOLFFBQVEsQ0FBQ0MsSUFBVCxFQU5yQjs7Y0FBQTtnQkFNUW5DLElBTlI7Z0JBQUEsa0NBT1NBLElBUFQ7O2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7O1dBVUEsd0JBQWV0RCxjQUFmLEVBQStCSixXQUEvQixFQUE0QztNQUMxQyxJQUFNNkUsU0FBUyxHQUFHekUsY0FBYyxDQUFDZ0UsT0FBZixDQUF1QixDQUF2QixFQUEwQitCLFdBQTVDO01BQ0EsSUFBTUMsb0JBQW9CLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLENBQUMsSUFBRCxDQUF0QixFQUE4QjtRQUFFQyxJQUFJLEVBQUU7TUFBUixDQUE5QixDQUE3QixDQUYwQyxDQUVzQzs7TUFDaEYsSUFBTXpCLElBQUksYUFBTTlFLFdBQVcsQ0FBQ3dHLElBQWxCLGVBQTJCSixvQkFBb0IsQ0FBQ0ssRUFBckIsQ0FBd0JyRyxjQUFjLENBQUNzRyxHQUFmLENBQW1CdEYsT0FBM0MsQ0FBM0IsQ0FBVjtNQUNBLElBQU0yRCxPQUFPLEdBQUcxQixJQUFJLENBQUNDLEtBQUwsQ0FBV2xELGNBQWMsQ0FBQ2xCLElBQWYsQ0FBb0I4RSxJQUEvQixDQUFoQjtNQUNBLElBQU1nQixTQUFTLEdBQUczQixJQUFJLENBQUNDLEtBQUwsQ0FBV2xELGNBQWMsQ0FBQ2xCLElBQWYsQ0FBb0J5SCxVQUEvQixDQUFsQjtNQUNBLElBQU0xSCxJQUFJLGFBQU0sS0FBSzJILGFBQUwsQ0FBbUJ4RyxjQUFjLENBQUNuQixJQUFmLENBQW9Cc0UsS0FBdkMsQ0FBTixVQUFWO01BQ0EsSUFBTTBCLFFBQVEsdUJBQWdCN0UsY0FBYyxDQUFDbEIsSUFBZixDQUFvQitGLFFBQXBDLE1BQWQ7TUFDQSxJQUFNNEIsUUFBUSxHQUFHLEtBQUtDLGdCQUFMLENBQXNCakMsU0FBdEIsRUFBaUNDLElBQWpDLEVBQXVDQyxPQUF2QyxFQUFnREMsU0FBaEQsRUFBMkQvRixJQUEzRCxFQUFpRWdHLFFBQWpFLENBQWpCO01BQ0E0QixRQUFRLENBQUNFLFlBQVQ7SUFDRDs7O1dBRUQsdUJBQWN4RCxLQUFkLEVBQXFCO01BQ25CLE9BQU8sQ0FBQ0EsS0FBSyxHQUFHLEdBQVQsRUFBY0MsT0FBZCxDQUFzQixDQUF0QixDQUFQO0lBQ0Q7OztXQUVELDBCQUFpQnFCLFNBQWpCLEVBQTRCQyxJQUE1QixFQUFrQ0MsT0FBbEMsRUFBMkNDLFNBQTNDLEVBQXNEL0YsSUFBdEQsRUFBNERnRyxRQUE1RCxFQUFzRTtNQUNwRSxJQUFNK0IsWUFBWSxHQUFHLElBQUlwQyxpREFBSixDQUFhQyxTQUFiLEVBQXdCQyxJQUF4QixFQUE4QkMsT0FBOUIsRUFBdUNDLFNBQXZDLEVBQWtEL0YsSUFBbEQsRUFBd0RnRyxRQUF4RCxDQUFyQjtNQUNBLE9BQU8rQixZQUFQO0lBQ0Q7OztXQUVELDZCQUFvQjFHLGdCQUFwQixFQUFzQztNQUNwQyxJQUFNMkcsYUFBYSxHQUFHLEtBQUtDLHFCQUFMLENBQTJCNUcsZ0JBQTNCLENBQXRCO01BQ0EyRyxhQUFhLENBQUNFLGlCQUFkO0lBQ0Q7OztXQUVELCtCQUFzQjdHLGdCQUF0QixFQUF3QztNQUN0QyxJQUFNOEcsaUJBQWlCLEdBQUcsSUFBSTNELHNEQUFKLENBQWtCbkQsZ0JBQWxCLENBQTFCO01BQ0EsT0FBTzhHLGlCQUFQO0lBQ0Q7Ozs7OztBQUdILGlFQUFlaEMsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDZCQUFlLG9DQUFVbUQsUUFBVixFQUFvQjtFQUNqQyxRQUFRQSxRQUFSO0lBQ0UsS0FBSyxLQUFMO01BQ0VDLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDcEIsMkZBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VtQixtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ25CLG9GQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFa0IsbUJBQW1CLENBQUMsdUJBQUQsQ0FBbkI7TUFDQSxPQUFPQyxZQUFZLENBQUNsQixtRkFBRCxDQUFuQjs7SUFDRixLQUFLLEtBQUw7TUFDRWlCLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDakIsaUZBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VnQixtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ2hCLDRGQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFZSxtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ2YsOEZBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VjLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDZCwyRkFBRCxDQUFuQjs7SUFDRixLQUFLLEtBQUw7TUFDRWEsbUJBQW1CLENBQUMsdUJBQUQsQ0FBbkI7TUFDQSxPQUFPQyxZQUFZLENBQUNiLHdGQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFWSxtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ1osaUZBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VXLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDWCxzRkFBRCxDQUFuQjs7SUFDRixLQUFLLEtBQUw7TUFDRVUsbUJBQW1CLENBQUMsdUJBQUQsQ0FBbkI7TUFDQSxPQUFPQyxZQUFZLENBQUNWLG9GQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFUyxtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ1QsK0VBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VRLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDUiwwRkFBRCxDQUFuQjs7SUFDRixLQUFLLEtBQUw7TUFDRU8sbUJBQW1CLENBQUMsdUJBQUQsQ0FBbkI7TUFDQSxPQUFPQyxZQUFZLENBQUNQLDZGQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFTSxtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ04sa0ZBQUQsQ0FBbkI7O0lBQ0YsS0FBSyxLQUFMO01BQ0VLLG1CQUFtQixDQUFDLHVCQUFELENBQW5CO01BQ0EsT0FBT0MsWUFBWSxDQUFDTCxnRkFBRCxDQUFuQjs7SUFDRixLQUFLLEtBQUw7TUFDRUksbUJBQW1CLENBQUMsdUJBQUQsQ0FBbkI7TUFDQSxPQUFPQyxZQUFZLENBQUNKLGtGQUFELENBQW5COztJQUNGLEtBQUssS0FBTDtNQUNFRyxtQkFBbUIsQ0FBQyx1QkFBRCxDQUFuQjtNQUNBLE9BQU9DLFlBQVksQ0FBQ0gsc0ZBQUQsQ0FBbkI7RUF0REo7QUF3REQ7O0FBRUQsU0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7RUFDM0J0SyxRQUFRLENBQUNDLElBQVQsQ0FBY3NLLEtBQWQsQ0FBb0JDLFVBQXBCLGlCQUF3Q0YsS0FBeEM7RUFDQXRLLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjc0ssS0FBZCxDQUFvQkUsY0FBcEIsR0FBcUMsT0FBckM7QUFDRDs7QUFFRCxTQUFTTCxtQkFBVCxDQUE2Qk0sS0FBN0IsRUFBb0M7RUFDbEMxSyxRQUFRLENBQUNXLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxDQUE3QyxFQUFnRDBELFNBQWhELENBQTBEc0csR0FBMUQsQ0FBOERELEtBQTlEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1TO0VBQ0osZ0JBQWM7SUFBQTtFQUFFOzs7O1dBRWhCLHlCQUFnQjtNQUNkLElBQU1DLFlBQVksR0FBR25HLElBQUksQ0FBQ29HLEtBQUwsQ0FBV3BHLElBQUksQ0FBQ3FHLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBckI7TUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQ1YsK0VBQUQsRUFBU0MsZ0ZBQVQsRUFBaUJDLGdGQUFqQixFQUF5QkMsOEVBQXpCLEVBQWlDQywrRUFBakMsRUFBeUNDLCtFQUF6QyxDQUFmO01BQ0FsTCxRQUFRLENBQUNDLElBQVQsQ0FBY3NLLEtBQWQsQ0FBb0JDLFVBQXBCLGlCQUF3Q2UsTUFBTSxDQUFDSCxZQUFELENBQTlDO01BQ0FwTCxRQUFRLENBQUNDLElBQVQsQ0FBY3NLLEtBQWQsQ0FBb0JFLGNBQXBCLEdBQXFDLE9BQXJDO0lBQ0Q7OztXQUVELHFCQUFZZSxRQUFaLEVBQXNCO01BQ3BCLElBQU01RixJQUFJLEdBQUc1RixRQUFRLENBQUN5TCxvQkFBVCxDQUE4QixVQUE5QixFQUEwQ0QsUUFBMUMsQ0FBYjtNQUNBLElBQU1FLEtBQUssR0FBRzlGLElBQUksQ0FBQytGLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixJQUF2QixDQUFkO01BQ0E1TCxRQUFRLENBQUNrQixzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxFQUFnRDJLLE1BQWhELENBQXVESCxLQUF2RDtJQUNEOzs7V0FFRCx1QkFBY0ksTUFBZCxFQUFzQjtNQUNwQixPQUFPQSxNQUFNLENBQUNDLFVBQWQsRUFBMEI7UUFDeEJELE1BQU0sQ0FBQ0UsV0FBUCxDQUFtQkYsTUFBTSxDQUFDQyxVQUExQjtNQUNEO0lBQ0Y7OztXQUVELDBCQUFpQi9KLGNBQWpCLEVBQWlDO01BQy9CNEkscURBQVEsQ0FBQzVJLGNBQWMsQ0FBQ2dFLE9BQWYsQ0FBdUIsQ0FBdkIsRUFBMEJDLElBQTNCLENBQVI7SUFDRDs7O1dBRUQsd0JBQWVsRixJQUFmLEVBQXFCO01BQ25CQSxJQUFJLENBQUN3RCxXQUFMLEdBQW1CLDJCQUFuQjtNQUNBeEQsSUFBSSxDQUFDc0QsU0FBTCxDQUFlc0csR0FBZixDQUFtQixlQUFuQjtJQUNEOzs7V0FFRCw4QkFBcUI1SixJQUFyQixFQUEyQjtNQUN6QkEsSUFBSSxDQUFDd0QsV0FBTCxHQUFtQiw2RkFBbkI7TUFDQXhELElBQUksQ0FBQ3NELFNBQUwsQ0FBZXNHLEdBQWYsQ0FBbUIsZUFBbkI7SUFDRDs7O1dBRUQsb0JBQVduSyxLQUFYLEVBQWtCTyxJQUFsQixFQUF3QjtNQUN0QixJQUFJUCxLQUFLLENBQUNlLFFBQU4sQ0FBZUMsS0FBbkIsRUFBMEI7UUFDeEJULElBQUksQ0FBQ3dELFdBQUwsR0FBbUIsRUFBbkIsQ0FEd0IsQ0FDRDs7UUFDdkJ4RCxJQUFJLENBQUNrTCxTQUFMLEdBQWlCLGdCQUFqQjtNQUNEO0lBQ0Y7Ozs7OztBQUdILGlFQUFlZCxJQUFmOzs7Ozs7Ozs7O0FDcERBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtB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QUF3QixhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVkseUJBQXlCLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxV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ZDtBQUNBLElBQU1qSCxJQUFJLEdBQUcsSUFBSW9MLDhEQUFKLEVBQWI7QUFDQSxJQUFNZSxVQUFVLEdBQUcsSUFBSXJNLDBFQUFKLENBQWVDLEtBQWYsRUFBc0JDLElBQXRCLENBQW5COztBQUVBLElBQUlPLE1BQU0sQ0FBQzZMLE9BQVAsQ0FBZUMsWUFBbkIsRUFBaUM7RUFDL0I5TCxNQUFNLENBQUM2TCxPQUFQLENBQWVDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBa0MsSUFBbEMsRUFBd0M5TCxNQUFNLENBQUMrTCxRQUFQLENBQWdCQyxJQUF4RDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL21vZGVsL0VpZ2h0RGF5c0NhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbk1vZGVsLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcvY2hhbmdlQmcuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy9tYWluVmlldy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY291bnRyeS1jb2RlLWxvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdHlsZS9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb29rdXAgPSByZXF1aXJlKFwiY291bnRyeS1jb2RlLWxvb2t1cFwiKTtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLCB2aWV3KSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB0aGlzLnNlYXJjaFdlYXRoZXIoZSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHRoaXMuY2hlY2tJbnB1dCgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gdGhpcy52aWV3LnNldEhvbWVQYWdlQmcoKSk7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWdyZWVCaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2RlZ3JlZXNcIilbMF07XG4gICAgY29uc3QgZGVncmVlU21hbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHNfX2ZlZWxzTGlrZSwgLmRhaWx5Q2FyZF9fbWF4LCAuZGFpbHlDYXJkX19taW5cIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc19fd2luZFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fbm90Rm91bmRcIilbMF07XG4gICAgY29uc3Qgc3dpdGNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2ggaW5wdXRcIik7XG4gICAgY29uc3QgbG9hZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJfX2xvYWRlclwiKVswXTtcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbYWx0PVwiU2VhcmNoXCJdJyk7XG5cbiAgICByZXR1cm4geyBpbnB1dCwgZGVncmVlQmlnLCBkZWdyZWVTbWFsbCwgd2luZCwgbWFpbiwgc3Bhbiwgc3dpdGNoQnRuLCBsb2FkRGl2LCBzZWFyY2hCdG4gfTtcbiAgfVxuXG4gIGNoZWNrSW5wdXQoKSB7XG4gICAgdGhpcy52aWV3LkNoZWNrRW1wdHkodGhpcy5nZXRFbGVtZW50cygpLmlucHV0LCB0aGlzLmdldEVsZW1lbnRzKCkuc3Bhbik7XG4gIH1cblxuICBhc3luYyBzZWFyY2hXZWF0aGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmdldEVsZW1lbnRzKCkuaW5wdXQudmFsaWRpdHkudmFsaWQpIHJldHVybiB0aGlzLnZpZXcuc2hvd0VtcHR5RXJyb3IodGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICAgIHRoaXMudmlldy5zaG93Q29udGVudCgyKTtcbiAgICBjb25zdCBnZW9Mb2NhdGlvbiA9IGF3YWl0IHRoaXMuZ2V0R2VvTG9jYXRpb24oKTtcbiAgICBpZiAodHlwZW9mIGdlb0xvY2F0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkubG9hZERpdi5yZW1vdmUoKTtcbiAgICAgIHJldHVybiB0aGlzLnZpZXcuc2hvd1Vua25vd25DaXR5RXJyb3IodGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0Q3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24pO1xuICAgIGNvbnN0IGVpZ2h0RGF5c1dlYXRoZXIgPSBhd2FpdCB0aGlzLmdldEVpZ2h0RGF5c1dlYXRoZXIoZ2VvTG9jYXRpb24pO1xuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzKCkubWFpbi5oYXNDaGlsZE5vZGVzKCkpIHRoaXMudmlldy5kZWxldGVDb250ZW50KHRoaXMuZ2V0RWxlbWVudHMoKS5tYWluKTtcbiAgICB0aGlzLnZpZXcuc2hvd0NvbnRlbnQoMCk7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLnN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY2hhbmdlVW5pdHMoZSkpO1xuICAgIHRoaXMubW9kZWwuY3JlYXRlTWFpbkNhcmQoY3VycmVudFdlYXRoZXIsIGdlb0xvY2F0aW9uKTtcbiAgICB0aGlzLnZpZXcuc2hvd0NvbnRlbnQoMSk7XG4gICAgdGhpcy5tb2RlbC5jcmVhdGVFaWdodERheXNDYXJkKGVpZ2h0RGF5c1dlYXRoZXIpO1xuICAgIHRoaXMudmlldy5jaGFuZ2VCYWNrZ3JvdW5kKGN1cnJlbnRXZWF0aGVyKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdlb0xvY2F0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzKCkuaW5wdXQudmFsdWU7XG4gICAgY29uc3QgZ2VvTG9jYXRpb24gPSBhd2FpdCB0aGlzLm1vZGVsLmZldGNoR2VvTG9jYXRpb24odGhpcy5jb252ZXJ0Q291bnRyeU5hbWVUb0NvZGUoaW5wdXRWYWx1ZSkpO1xuICAgIHJldHVybiBnZW9Mb2NhdGlvbjtcbiAgfVxuXG4gIGNvbnZlcnRDb3VudHJ5TmFtZVRvQ29kZShpbnB1dCkge1xuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpbnB1dC5zcGxpdChcIixcIik7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBpbnB1dEFycmF5WzBdO1xuICAgIGNvbnN0IGNvdW50cnkgPSBpbnB1dC5zdWJzdHJpbmcoaW5wdXQubGFzdEluZGV4T2YoXCIsXCIpICsgMSk7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSB0aGlzLmNhcGl0YWxpemUoY291bnRyeS50cmltKCkpO1xuICAgIGlmIChsb29rdXAuYnlDb3VudHJ5KGNvdW50cnlOYW1lKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBsb29rdXAuYnlDb3VudHJ5KGNvdW50cnlOYW1lKS5pc28yO1xuICAgICAgcmV0dXJuIGAke2NpdHlOYW1lfSwgJHtjb3VudHJ5Q29kZX1gO1xuICAgIH0gZWxzZSByZXR1cm4gYCR7Y2l0eU5hbWV9YDtcbiAgfVxuXG4gIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgY29uc3Qgc3BsaXRTdHIgPSBzdHIudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdFN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgc3BsaXRTdHJbaV0gPSBzcGxpdFN0cltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNwbGl0U3RyW2ldLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIHNwbGl0U3RyLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHRoaXMubW9kZWwuZmV0Y2hDdXJyZW50V2VhdGhlcihnZW9Mb2NhdGlvbi5sYXQsIGdlb0xvY2F0aW9uLmxvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xuICB9XG5cbiAgYXN5bmMgZ2V0RWlnaHREYXlzV2VhdGhlcihnZW9Mb2NhdGlvbikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c1dlYXRoZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZldGNoRWlnaHREYXlzV2VhdGhlcihnZW9Mb2NhdGlvbi5sYXQsIGdlb0xvY2F0aW9uLmxvbik7XG4gICAgcmV0dXJuIGVpZ2h0RGF5c1dlYXRoZXI7XG4gIH1cblxuICBjaGFuZ2VVbml0cygpIHtcbiAgICBpZiAodGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxzaXVzLS1iaWdcIikpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ZhaHJlbmhlaXQodGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy50ZXh0Q29udGVudCk7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udmVydFRvTXBoKHRoaXMuZ2V0RWxlbWVudHMoKS53aW5kLnRleHRDb250ZW50KX0gbXBoYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdC0tYmlnXCIpKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQpO1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnZlcnRUb0ttaCh0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCl9IGttL2hgO1xuICAgIH1cbiAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxzaXVzLS1iaWdcIik7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy5jbGFzc0xpc3QudG9nZ2xlKFwiZmFocmVuaGVpdC0tYmlnXCIpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlU21hbGwpIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbHNpdXNcIikpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ZhaHJlbmhlaXQoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2Vsc2l1c1wiKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZhaHJlbmhlaXRcIik7XG4gICAgfVxuICB9XG5cbiAgY29udmVydFRvQ2Vsc2l1cyhkZWdyZWUpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KGRlZ3JlZSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbE51bSAtIDMyKSAvIDEuOCk7XG4gIH1cblxuICBjb252ZXJ0VG9GYWhyZW5oZWl0KGRlZ3JlZSkge1xuICAgIGNvbnN0IHZhbE51bSA9IHBhcnNlRmxvYXQoZGVncmVlKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWxOdW0gKiAxLjggKyAzMik7XG4gIH1cblxuICBjb252ZXJ0VG9LbWgoc3BlZWQpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KHNwZWVkKTtcbiAgICByZXR1cm4gKHZhbE51bSAqIDEuNjA5KS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgY29udmVydFRvTXBoKHNwZWVkKSB7XG4gICAgY29uc3QgdmFsTnVtID0gcGFyc2VGbG9hdChzcGVlZCk7XG4gICAgcmV0dXJuICh2YWxOdW0gLyAxLjYwOSkudG9GaXhlZCgyKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImNsYXNzIEVpZ2h0RGF5c0NhcmQge1xuICBjb25zdHJ1Y3RvcihlaWdodERheXNXZWF0aGVyKSB7XG4gICAgdGhpcy5kYXRhID0gZWlnaHREYXlzV2VhdGhlcjtcbiAgfVxuXG4gIGZpbGxFaWdodERheXNDYXJkKCkge1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWF4XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWluXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlDb250YWluZXIgaW1nXCIpO1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgbWF4VGVtcFtpXS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodGhpcy5kYXRhLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICAgIG1pblRlbXBbaV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgICBpbWdbaV0uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGhpcy5kYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IHRoaXMuZ2V0RGF5T2ZXZWVrKG5ldyBEYXRlKHRoaXMuZGF0YS5kYWlseVtpXS5kdCAqIDEwMDApLmdldERheSgpKTsgLy8gVHVybnMgVW5peCBUaW1lc3RhbXAgdG8gd2VlayBkYXlcbiAgICAgIGRheVtpXS50ZXh0Q29udGVudCA9IGRheU9mV2VlaztcbiAgICB9XG4gIH1cblxuICBnZXREYXlPZldlZWsobnVtYmVyKSB7XG4gICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcIk1vbmRheVwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJUdWVzZGF5XCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gXCJUaHVyc2RheVwiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJGcmlkYXlcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVpZ2h0RGF5c0NhcmQ7XG4iLCJjbGFzcyBNYWluQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy5kZWdyZWVzID0gZGVncmVlcztcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGZlZWxzTGlrZTtcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxuXG4gIGZpbGxNYWluQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZCBwXCIpO1xuICAgIGNvbnN0IGNhcmREYXRhID0gW3RoaXMuY29uZGl0aW9uLCB0aGlzLmNpdHksIHRoaXMuZGVncmVlcywgdGhpcy5mZWVsc0xpa2UsIHRoaXMud2luZCwgdGhpcy5odW1pZGl0eV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgY2FyZEluZm9baV0udGV4dENvbnRlbnQgPSBjYXJkRGF0YVtpXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhcmQ7XG4iLCJpbXBvcnQgTWFpbkNhcmQgZnJvbSBcIi4vbWFpbkNhcmRcIjtcbmltcG9ydCBFaWdodERheXNDYXJkIGZyb20gXCIuL0VpZ2h0RGF5c0NhcmRcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmtleSA9IFwiOTA3MjBmNDIyYmI1Y2Y3NGY5MWJlNzYxMDFmNDhmNTBcIjtcbiAgICB0aGlzLm1ldHJpYyA9IFwibWV0cmljXCI7XG4gICAgdGhpcy5pbXBlcmlhbCA9IFwiaW1wZXJpYWxcIjtcbiAgfVxuXG4gIGFzeW5jIGZldGNoR2VvTG9jYXRpb24oc2VhcmNoVGV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaFRleHR9JmFwcGlkPSR7dGhpcy5rZXl9YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhWzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVyciwgXCJSZWZyZXNoIHBhZ2UgYW5kIHRyeSBhZ2FpbiBsYXRlclwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaEN1cnJlbnRXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke3RoaXMua2V5fSZ1bml0cz1tZXRyaWNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBmZXRjaEVpZ2h0RGF5c1dlYXRoZXIobGF0LCBsb24pIHtcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9aG91cmx5LG1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz1tZXRyaWMmYXBwaWQ9MjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjcmVhdGVNYWluQ2FyZChjdXJyZW50V2VhdGhlciwgZ2VvTG9jYXRpb24pIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJlZ2lvbk5hbWVzSW5FbmdsaXNoID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7IC8vIFRvIGNvbnZlcnQgQ0EgdG8gQ2FuYWRhLCBwZXIgZXhhbXBsZVxuICAgIGNvbnN0IGNpdHkgPSBgJHtnZW9Mb2NhdGlvbi5uYW1lfSwgJHtyZWdpb25OYW1lc0luRW5nbGlzaC5vZihjdXJyZW50V2VhdGhlci5zeXMuY291bnRyeSl9YDtcbiAgICBjb25zdCBkZWdyZWVzID0gTWF0aC5yb3VuZChjdXJyZW50V2VhdGhlci5tYWluLnRlbXApO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjb25zdCB3aW5kID0gYCR7dGhpcy5jb252ZXJ0RnJvbU1zKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpfSBrbS9oYDtcbiAgICBjb25zdCBodW1pZGl0eSA9IGBIVU1JRElUWTogJHtjdXJyZW50V2VhdGhlci5tYWluLmh1bWlkaXR5fSVgO1xuICAgIGNvbnN0IG1haW5DYXJkID0gdGhpcy5nZW5lcmF0ZU1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgbWFpbkNhcmQuZmlsbE1haW5DYXJkKCk7XG4gIH1cblxuICBjb252ZXJ0RnJvbU1zKHNwZWVkKSB7XG4gICAgcmV0dXJuIChzcGVlZCAqIDMuNikudG9GaXhlZCgyKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWFpbkNhcmQoY29uZGl0aW9uLCBjaXR5LCBkZWdyZWVzLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgY29uc3QgbWFpbkNhcmRJdGVtID0gbmV3IE1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgcmV0dXJuIG1haW5DYXJkSXRlbTtcbiAgfVxuXG4gIGNyZWF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmQgPSB0aGlzLmdlbmVyYXRlRWlnaHREYXlzQ2FyZChlaWdodERheXNXZWF0aGVyKTtcbiAgICBlaWdodERheXNDYXJkLmZpbGxFaWdodERheXNDYXJkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmRJdGVtID0gbmV3IEVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcik7XG4gICAgcmV0dXJuIGVpZ2h0RGF5c0NhcmRJdGVtO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiaW1wb3J0IGNsZWFyU2t5RGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvY2xlYXItc2t5L2dyb292ZWxhbmQtZGVzaWducy16am95ZEpiMTdtRS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgY2xlYXJTa3lOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NsZWFyLXNreS9rZXZpbi1idW1hbi03WUQ4US0zbUVNZy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgZmV3Q2xvdWRzRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9heml6LWF5YWQtTkpEeUZvWERBdXMtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGZld0Nsb3Vkc05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9zaWQtc29uaS1EOFZ3TTNONXh6NC11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBzY2F0dGVyZWRDbG91ZHNEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzTmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9zY2F0dGVyZWQtY2xvdWRzL2hlcnJtYW5uLXN0YW1tLTR2bWpPTGY5ZWRrLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBicm9rZW5DbG91ZHNEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9icm9rZW4tY2xvdWRzL3JheWNoZWwtc2FubmVyLWNzd3ZLUzU5RTkwLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBicm9rZW5DbG91ZHNOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jyb2tlbi1jbG91ZHMvYW5hbmR1LXZpbm9kLXBieHd4d2ZJMEI0LXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zaG93ZXItcmFpbi9uaWMteS1jLUNyWHVZeGZPSjRJLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nob3dlci1yYWluL2t5bGUtc3plZ2VkaS1KU21jMEdtU1Yxby11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCByYWluRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvcmFpbi9zaW1vbi1rdXpuZXRzb3YtaWdReDNFVGtLWlktdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaW4vc3Rvcm1zZWVrZXItdlJDWjNEenRhb0EtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgdGh1bmRlcnN0b3JtRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvdGh1bmRlcnN0b3JtL3JheWNoZWwtc2FubmVyLUxDc3dGQ255RTZZLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybU5pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvdGh1bmRlcnN0b3JtL21pY2hhbC1tYW5jZXdpY3otUjlMN3VraEJTZ3MtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHNub3dEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zbm93L2RhbmllbC1taXJsZWEtb0laVUZKVzhWaEUtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nub3cvYWxleC10ZXBsaXR6LUktVGcySDg0bW9zLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IG1pc3REYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9taXN0L2NocmlzLWxlaXBlbHQta1dkNUVSMlhwU2ctdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21pc3QvZGFuaWlsLW9uaXNjaGVua28tM0M2RElHdlpmRXctdW5zcGxhc2guanBlZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWNvbkNvZGUpIHtcbiAgc3dpdGNoIChpY29uQ29kZSkge1xuICAgIGNhc2UgXCIwMWRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGNsZWFyU2t5RGF5KTtcbiAgICBjYXNlIFwiMDFuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhjbGVhclNreU5pZ2h0KTtcbiAgICBjYXNlIFwiMDJkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhmZXdDbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwMm5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGZld0Nsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDNkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzY2F0dGVyZWRDbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwM25cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNjYXR0ZXJlZENsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDRkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhicm9rZW5DbG91ZHNEYXkpO1xuICAgIGNhc2UgXCIwNG5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGJyb2tlbkNsb3Vkc05pZ2h0KTtcbiAgICBjYXNlIFwiMDlkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzaG93ZXJSYWluRGF5KTtcbiAgICBjYXNlIFwiMDluXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzaG93ZXJSYWluTmlnaHQpO1xuICAgIGNhc2UgXCIxMGRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHJhaW5EYXkpO1xuICAgIGNhc2UgXCIxMG5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHJhaW5OaWdodCk7XG4gICAgY2FzZSBcIjExZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcodGh1bmRlcnN0b3JtRGF5KTtcbiAgICBjYXNlIFwiMTFuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyh0aHVuZGVyc3Rvcm1OaWdodCk7XG4gICAgY2FzZSBcIjEzZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc25vd0RheSk7XG4gICAgY2FzZSBcIjEzblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc25vd05pZ2h0KTtcbiAgICBjYXNlIFwiNTBkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhtaXN0RGF5KTtcbiAgICBjYXNlIFwiNTBuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhtaXN0TmlnaHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW5CZyhpbWFnZSkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1hZ2V9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcmA7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG59XG5cbmZ1bmN0aW9uIHNldERhaWx5Q29udGFpbmVyQkcoY29sb3IpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseUNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QuYWRkKGNvbG9yKTtcbn1cbiIsImltcG9ydCBjaGFuZ2VCZyBmcm9tIFwiLi9jaGFuZ2VCZ1wiO1xuaW1wb3J0IGltYWdlMCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUvYWFyb24tYnVyZGVuLS0zRGMtSS02NXVnLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBpbWFnZTEgZnJvbSBcIi4uLy4uL2ltYWdlcy9ob21lL2RhbmllbC1sZW9uZS12N2RhVEtsWnphdy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2UyIGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9ncmVnLXJvc2Vua2UtSjkwVkFYSVFLODgtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hvbWUvaWFuLWRvb2xleS1EdUJOQTFRTXBQQS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U0IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9qb2huLWZvd2xlci1Sc1JUSW9mZTBIRS11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U1IGZyb20gXCIuLi8uLi9pbWFnZXMvaG9tZS9zaW1vbi1iZXJnZXItdHd1a04xMkVON2MtdW5zcGxhc2guanBnXCI7XG5cbmNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0SG9tZVBhZ2VCZygpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICBjb25zdCBpbWFnZXMgPSBbaW1hZ2UwLCBpbWFnZTEsIGltYWdlMiwgaW1hZ2UzLCBpbWFnZTQsIGltYWdlNV07XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltYWdlc1tyYW5kb21OdW1iZXJdfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gIH1cblxuICBzaG93Q29udGVudChwb3NpdGlvbikge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRlbXBsYXRlXCIpW3Bvc2l0aW9uXTtcbiAgICBjb25zdCBjbG9uZSA9IHRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVswXS5hcHBlbmQoY2xvbmUpO1xuICB9XG5cbiAgZGVsZXRlQ29udGVudChwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlQmFja2dyb3VuZChjdXJyZW50V2VhdGhlcikge1xuICAgIGNoYW5nZUJnKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbik7XG4gIH1cblxuICBzaG93RW1wdHlFcnJvcihzcGFuKSB7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IFwi4pyWIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItLWFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNob3dVbmtub3duQ2l0eUVycm9yKHNwYW4pIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJ+KcliBMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSB0cnkgYW5vdGhlciBjaXR5IG9yIG1hdGNoaW5nIGZvcm1hdDogXCJDaXR5XCIgb3IgXCJDaXR5LCBDb3VudHJ5XCInO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImVycm9yLS1hY3RpdmVcIik7XG4gIH1cblxuICBDaGVja0VtcHR5KGlucHV0LCBzcGFuKSB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjsgLy8gUmVzZXQgdG8gaW5pdGlhbCBzdGF0ZVxuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImZvcm1fX25vdEZvdW5kXCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iLCJtb2R1bGUuZXhwb3J0cy5ieUZpcHMgPSBmdW5jdGlvbihjb2RlKSB7XG4gIHJldHVybiBzZWFyY2goJ2ZpcHMnLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzLmJ5SXNvID0gZnVuY3Rpb24oY29kZSkge1xuICBpZiAoIWlzTmFOKHBhcnNlSW50KGNvZGUpKSkge1xuICAgIHJldHVybiBzZWFyY2goJ2lzb05vJywgY29kZS50b1N0cmluZygpKVxuICB9XG5cbiAgaWYgKGNvZGUubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIHNlYXJjaCgnaXNvMicsIGNvZGUudG9VcHBlckNhc2UoKSlcbiAgfVxuXG4gIGlmIChjb2RlLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBzZWFyY2goJ2lzbzMnLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBkZXRlcm1pbmUgSVNPIGNvZGUgdHlwZScpXG59XG5cbm1vZHVsZS5leHBvcnRzLmJ5SW50ZXJuZXQgPSBmdW5jdGlvbihjb2RlKSB7XG4gIHJldHVybiBzZWFyY2goJ2ludGVybmV0JywgY29kZS50b1VwcGVyQ2FzZSgpKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5ieUNvdW50cnkgPSBmdW5jdGlvbihjb3VudHJ5KSB7XG4gIHJldHVybiBzZWFyY2goJ2NvdW50cnknLCBjb3VudHJ5KVxufVxuXG5mdW5jdGlvbiBzZWFyY2goZmllbGQsIGNvZGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY291bnRyaWVzW2ldW2ZpZWxkXSA9PT0gY29kZSkge1xuICAgICAgcmV0dXJuIGNvdW50cmllc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG52YXIgY291bnRyaWVzID0gW1xuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0FmZ2hhbmlzdGFuJyxcbiAgICBjYXBpdGFsOiAnS2FidWwnLFxuICAgIGZpcHM6ICdBRicsXG4gICAgaXNvMjogJ0FGJyxcbiAgICBpc28zOiAnQUZHJyxcbiAgICBpc29ObzogJzQnLFxuICAgIGludGVybmV0OiAnQUYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQWxiYW5pYScsXG4gICAgY2FwaXRhbDogJ1RpcmFuYScsXG4gICAgZmlwczogJ0FMJyxcbiAgICBpc28yOiAnQUwnLFxuICAgIGlzbzM6ICdBTEInLFxuICAgIGlzb05vOiAnOCcsXG4gICAgaW50ZXJuZXQ6ICdBTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQWxnZXJpYScsXG4gICAgY2FwaXRhbDogJ0FsZ2llcnMnLFxuICAgIGZpcHM6ICdBRycsXG4gICAgaXNvMjogJ0RaJyxcbiAgICBpc28zOiAnRFpBJyxcbiAgICBpc29ObzogJzEyJyxcbiAgICBpbnRlcm5ldDogJ0RaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICBjYXBpdGFsOiAnUGFnbyBQYWdvJyxcbiAgICBmaXBzOiAnQVEnLFxuICAgIGlzbzI6ICdBUycsXG4gICAgaXNvMzogJ0FTTScsXG4gICAgaXNvTm86ICcxNicsXG4gICAgaW50ZXJuZXQ6ICdBUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdBbmRvcnJhJyxcbiAgICBjYXBpdGFsOiAnQW5kb3JyYSBsYSBWZWxsYScsXG4gICAgZmlwczogJ0FOJyxcbiAgICBpc28yOiAnQUQnLFxuICAgIGlzbzM6ICdBTkQnLFxuICAgIGlzb05vOiAnMjAnLFxuICAgIGludGVybmV0OiAnQUQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0FuZ29sYScsXG4gICAgY2FwaXRhbDogJ0x1YW5kYScsXG4gICAgZmlwczogJ0FPJyxcbiAgICBpc28yOiAnQU8nLFxuICAgIGlzbzM6ICdBR08nLFxuICAgIGlzb05vOiAnMjQnLFxuICAgIGludGVybmV0OiAnQU8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdBbmd1aWxsYScsXG4gICAgY2FwaXRhbDogJ1RoZSBWYWxsZXknLFxuICAgIGZpcHM6ICdBVicsXG4gICAgaXNvMjogJ0FJJyxcbiAgICBpc28zOiAnQUlBJyxcbiAgICBpc29ObzogJzY2MCcsXG4gICAgaW50ZXJuZXQ6ICdBSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICAgIGNhcGl0YWw6IFwiU2FpbnQgSm9obidzXCIsXG4gICAgZmlwczogJ0FDJyxcbiAgICBpc28yOiAnQUcnLFxuICAgIGlzbzM6ICdBVEcnLFxuICAgIGlzb05vOiAnMjgnLFxuICAgIGludGVybmV0OiAnQUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0FyZ2VudGluYScsXG4gICAgY2FwaXRhbDogJ0J1ZW5vcyBBaXJlcycsXG4gICAgZmlwczogJ0FSJyxcbiAgICBpc28yOiAnQVInLFxuICAgIGlzbzM6ICdBUkcnLFxuICAgIGlzb05vOiAnMzInLFxuICAgIGludGVybmV0OiAnQVInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdBcm1lbmlhJyxcbiAgICBjYXBpdGFsOiAnWWVyZXZhbicsXG4gICAgZmlwczogJ0FNJyxcbiAgICBpc28yOiAnQU0nLFxuICAgIGlzbzM6ICdBUk0nLFxuICAgIGlzb05vOiAnNTEnLFxuICAgIGludGVybmV0OiAnQU0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdBcnViYScsXG4gICAgY2FwaXRhbDogJ09yYW5qZXN0YWQnLFxuICAgIGZpcHM6ICdBQScsXG4gICAgaXNvMjogJ0FXJyxcbiAgICBpc28zOiAnQUJXJyxcbiAgICBpc29ObzogJzUzMycsXG4gICAgaW50ZXJuZXQ6ICdBVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdBdXN0cmFsaWEnLFxuICAgIGNhcGl0YWw6ICdDYW5iZXJyYScsXG4gICAgZmlwczogJ0FTJyxcbiAgICBpc28yOiAnQVUnLFxuICAgIGlzbzM6ICdBVVMnLFxuICAgIGlzb05vOiAnMzYnLFxuICAgIGludGVybmV0OiAnQVUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQXVzdHJpYScsXG4gICAgY2FwaXRhbDogJ1ZpZW5uYScsXG4gICAgZmlwczogJ0FVJyxcbiAgICBpc28yOiAnQVQnLFxuICAgIGlzbzM6ICdBVVQnLFxuICAgIGlzb05vOiAnNDAnLFxuICAgIGludGVybmV0OiAnQVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdBemVyYmFpamFuJyxcbiAgICBjYXBpdGFsOiAnQmFrdSAoQmFraSknLFxuICAgIGZpcHM6ICdBSicsXG4gICAgaXNvMjogJ0FaJyxcbiAgICBpc28zOiAnQVpFJyxcbiAgICBpc29ObzogJzMxJyxcbiAgICBpbnRlcm5ldDogJ0FaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVGhlIEJhaGFtYXMnLFxuICAgIGNhcGl0YWw6ICdOYXNzYXUnLFxuICAgIGZpcHM6ICdCRicsXG4gICAgaXNvMjogJ0JTJyxcbiAgICBpc28zOiAnQkhTJyxcbiAgICBpc29ObzogJzQ0JyxcbiAgICBpbnRlcm5ldDogJ0JTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQmFocmFpbicsXG4gICAgY2FwaXRhbDogJ01hbmFtYScsXG4gICAgZmlwczogJ0JBJyxcbiAgICBpc28yOiAnQkgnLFxuICAgIGlzbzM6ICdCSFInLFxuICAgIGlzb05vOiAnNDgnLFxuICAgIGludGVybmV0OiAnQkgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQmFuZ2xhZGVzaCcsXG4gICAgY2FwaXRhbDogJ0RoYWthJyxcbiAgICBmaXBzOiAnQkcnLFxuICAgIGlzbzI6ICdCRCcsXG4gICAgaXNvMzogJ0JHRCcsXG4gICAgaXNvTm86ICc1MCcsXG4gICAgaW50ZXJuZXQ6ICdCRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0JhcmJhZG9zJyxcbiAgICBjYXBpdGFsOiAnQnJpZGdldG93bicsXG4gICAgZmlwczogJ0JCJyxcbiAgICBpc28yOiAnQkInLFxuICAgIGlzbzM6ICdCUkInLFxuICAgIGlzb05vOiAnNTInLFxuICAgIGludGVybmV0OiAnQkInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQmVsYXJ1cycsXG4gICAgY2FwaXRhbDogJ01pbnNrJyxcbiAgICBmaXBzOiAnQk8nLFxuICAgIGlzbzI6ICdCWScsXG4gICAgaXNvMzogJ0JMUicsXG4gICAgaXNvTm86ICcxMTInLFxuICAgIGludGVybmV0OiAnQlknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQmVsZ2l1bScsXG4gICAgY2FwaXRhbDogJ0JydXNzZWxzJyxcbiAgICBmaXBzOiAnQkUnLFxuICAgIGlzbzI6ICdCRScsXG4gICAgaXNvMzogJ0JFTCcsXG4gICAgaXNvTm86ICc1NicsXG4gICAgaW50ZXJuZXQ6ICdCRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCZWxpemUnLFxuICAgIGNhcGl0YWw6ICdCZWxtb3BhbicsXG4gICAgZmlwczogJ0JIJyxcbiAgICBpc28yOiAnQlonLFxuICAgIGlzbzM6ICdCTFonLFxuICAgIGlzb05vOiAnODQnLFxuICAgIGludGVybmV0OiAnQlonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQmVuaW4nLFxuICAgIGNhcGl0YWw6ICdQb3J0by1Ob3Zv77+977+9JyxcbiAgICBmaXBzOiAnQk4nLFxuICAgIGlzbzI6ICdCSicsXG4gICAgaXNvMzogJ0JFTicsXG4gICAgaXNvTm86ICcyMDQnLFxuICAgIGludGVybmV0OiAnQkonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCZXJtdWRhJyxcbiAgICBjYXBpdGFsOiAnSGFtaWx0b24nLFxuICAgIGZpcHM6ICdCRCcsXG4gICAgaXNvMjogJ0JNJyxcbiAgICBpc28zOiAnQk1VJyxcbiAgICBpc29ObzogJzYwJyxcbiAgICBpbnRlcm5ldDogJ0JNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0JodXRhbicsXG4gICAgY2FwaXRhbDogJ1RoaW1waHUnLFxuICAgIGZpcHM6ICdCVCcsXG4gICAgaXNvMjogJ0JUJyxcbiAgICBpc28zOiAnQlROJyxcbiAgICBpc29ObzogJzY0JyxcbiAgICBpbnRlcm5ldDogJ0JUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCb2xpdmlhJyxcbiAgICBjYXBpdGFsOiAnTGEgUGF6IC8gU3VjcmUnLFxuICAgIGZpcHM6ICdCTCcsXG4gICAgaXNvMjogJ0JPJyxcbiAgICBpc28zOiAnQk9MJyxcbiAgICBpc29ObzogJzY4JyxcbiAgICBpbnRlcm5ldDogJ0JPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICAgIGNhcGl0YWw6ICdTYXJhamV2bycsXG4gICAgZmlwczogJ0JLJyxcbiAgICBpc28yOiAnQkEnLFxuICAgIGlzbzM6ICdCSUgnLFxuICAgIGlzb05vOiAnNzAnLFxuICAgIGludGVybmV0OiAnQkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0JvdHN3YW5hJyxcbiAgICBjYXBpdGFsOiAnR2Fib3JvbmUnLFxuICAgIGZpcHM6ICdCQycsXG4gICAgaXNvMjogJ0JXJyxcbiAgICBpc28zOiAnQldBJyxcbiAgICBpc29ObzogJzcyJyxcbiAgICBpbnRlcm5ldDogJ0JXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCcmF6aWwnLFxuICAgIGNhcGl0YWw6ICdCcmFzaWxpYScsXG4gICAgZmlwczogJ0JSJyxcbiAgICBpc28yOiAnQlInLFxuICAgIGlzbzM6ICdCUkEnLFxuICAgIGlzb05vOiAnNzYnLFxuICAgIGludGVybmV0OiAnQlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCcml0aXNoIFZpcmdpbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnUm9hZCBUb3duJyxcbiAgICBmaXBzOiAnVkknLFxuICAgIGlzbzI6ICdWRycsXG4gICAgaXNvMzogJ1ZHQicsXG4gICAgaXNvTm86ICc5MicsXG4gICAgaW50ZXJuZXQ6ICdWRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0JydW5laScsXG4gICAgY2FwaXRhbDogJ0JhbmRhciBTZXJpIEJlZ2F3YW4nLFxuICAgIGZpcHM6ICdCWCcsXG4gICAgaXNvMjogJ0JOJyxcbiAgICBpc28zOiAnQlJOJyxcbiAgICBpc29ObzogJzk2JyxcbiAgICBpbnRlcm5ldDogJ0JOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0J1bGdhcmlhJyxcbiAgICBjYXBpdGFsOiAnU29maWEnLFxuICAgIGZpcHM6ICdCVScsXG4gICAgaXNvMjogJ0JHJyxcbiAgICBpc28zOiAnQkdSJyxcbiAgICBpc29ObzogJzEwMCcsXG4gICAgaW50ZXJuZXQ6ICdCRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdCdXJraW5hIEZhc28nLFxuICAgIGNhcGl0YWw6ICdPdWFnYWRvdWdvdScsXG4gICAgZmlwczogJ1VWJyxcbiAgICBpc28yOiAnQkYnLFxuICAgIGlzbzM6ICdCRkEnLFxuICAgIGlzb05vOiAnODU0JyxcbiAgICBpbnRlcm5ldDogJ0JGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ0J1cnVuZGknLFxuICAgIGNhcGl0YWw6ICdCdWp1bWJ1cmEnLFxuICAgIGZpcHM6ICdCWScsXG4gICAgaXNvMjogJ0JJJyxcbiAgICBpc28zOiAnQkRJJyxcbiAgICBpc29ObzogJzEwOCcsXG4gICAgaW50ZXJuZXQ6ICdCSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NhbWJvZGlhJyxcbiAgICBjYXBpdGFsOiAnUGhub20gUGVuaCcsXG4gICAgZmlwczogJ0NCJyxcbiAgICBpc28yOiAnS0gnLFxuICAgIGlzbzM6ICdLSE0nLFxuICAgIGlzb05vOiAnMTE2JyxcbiAgICBpbnRlcm5ldDogJ0tIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0NhbWVyb29uJyxcbiAgICBjYXBpdGFsOiAnWWFvdW5kZScsXG4gICAgZmlwczogJ0NNJyxcbiAgICBpc28yOiAnQ00nLFxuICAgIGlzbzM6ICdDTVInLFxuICAgIGlzb05vOiAnMTIwJyxcbiAgICBpbnRlcm5ldDogJ0NNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdDYW5hZGEnLFxuICAgIGNhcGl0YWw6ICdPdHRhd2EnLFxuICAgIGZpcHM6ICdDQScsXG4gICAgaXNvMjogJ0NBJyxcbiAgICBpc28zOiAnQ0FOJyxcbiAgICBpc29ObzogJzEyNCcsXG4gICAgaW50ZXJuZXQ6ICdDQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDYXBlIFZlcmRlJyxcbiAgICBjYXBpdGFsOiAnUHJhaWEnLFxuICAgIGZpcHM6ICdDVicsXG4gICAgaXNvMjogJ0NWJyxcbiAgICBpc28zOiAnQ1BWJyxcbiAgICBpc29ObzogJzEzMicsXG4gICAgaW50ZXJuZXQ6ICdDVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0NheW1hbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnR2VvcmdlIFRvd24nLFxuICAgIGZpcHM6ICdDSicsXG4gICAgaXNvMjogJ0tZJyxcbiAgICBpc28zOiAnQ1lNJyxcbiAgICBpc29ObzogJzEzNicsXG4gICAgaW50ZXJuZXQ6ICdLWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnLFxuICAgIGNhcGl0YWw6ICdCYW5ndWknLFxuICAgIGZpcHM6ICdDVCcsXG4gICAgaXNvMjogJ0NGJyxcbiAgICBpc28zOiAnQ0FGJyxcbiAgICBpc29ObzogJzE0MCcsXG4gICAgaW50ZXJuZXQ6ICdDRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDaGFkJyxcbiAgICBjYXBpdGFsOiBcIk4nRGphbWVuYVwiLFxuICAgIGZpcHM6ICdDRCcsXG4gICAgaXNvMjogJ1REJyxcbiAgICBpc28zOiAnVENEJyxcbiAgICBpc29ObzogJzE0OCcsXG4gICAgaW50ZXJuZXQ6ICdURCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2hpbGUnLFxuICAgIGNhcGl0YWw6ICdTYW50aWFnbycsXG4gICAgZmlwczogJ0NJJyxcbiAgICBpc28yOiAnQ0wnLFxuICAgIGlzbzM6ICdDSEwnLFxuICAgIGlzb05vOiAnMTUyJyxcbiAgICBpbnRlcm5ldDogJ0NMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ2hpbmEnLFxuICAgIGNhcGl0YWw6ICdCZWlqaW5nJyxcbiAgICBmaXBzOiAnQ0gnLFxuICAgIGlzbzI6ICdDTicsXG4gICAgaXNvMzogJ0NITicsXG4gICAgaXNvTm86ICcxNTYnLFxuICAgIGludGVybmV0OiAnQ04nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDaHJpc3RtYXMgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnVGhlIFNldHRsZW1lbnQnLFxuICAgIGZpcHM6ICdLVCcsXG4gICAgaXNvMjogJ0NYJyxcbiAgICBpc28zOiAnQ1hSJyxcbiAgICBpc29ObzogJzE2MicsXG4gICAgaW50ZXJuZXQ6ICdDWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnV2VzdCBJc2xhbmQnLFxuICAgIGZpcHM6ICdDSycsXG4gICAgaXNvMjogJ0NDJyxcbiAgICBpc28zOiAnQ0NLJyxcbiAgICBpc29ObzogJzE2NicsXG4gICAgaW50ZXJuZXQ6ICdDQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ29sb21iaWEnLFxuICAgIGNhcGl0YWw6ICdCb2dvdGEnLFxuICAgIGZpcHM6ICdDTycsXG4gICAgaXNvMjogJ0NPJyxcbiAgICBpc28zOiAnQ09MJyxcbiAgICBpc29ObzogJzE3MCcsXG4gICAgaW50ZXJuZXQ6ICdDTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnQ29tb3JvcycsXG4gICAgY2FwaXRhbDogJ01vcm9uaScsXG4gICAgZmlwczogJ0NOJyxcbiAgICBpc28yOiAnS00nLFxuICAgIGlzbzM6ICdDT00nLFxuICAgIGlzb05vOiAnMTc0JyxcbiAgICBpbnRlcm5ldDogJ0tNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ1JlcHVibGljIG9mIHRoZSBDb25nbycsXG4gICAgY2FwaXRhbDogJ0JyYXp6YXZpbGxlJyxcbiAgICBmaXBzOiAnQ0YnLFxuICAgIGlzbzI6ICdDRycsXG4gICAgaXNvMzogJ0NPRycsXG4gICAgaXNvTm86ICcxNzgnLFxuICAgIGludGVybmV0OiAnQ0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnQ29vayBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnQXZhcnVhJyxcbiAgICBmaXBzOiAnQ1cnLFxuICAgIGlzbzI6ICdDSycsXG4gICAgaXNvMzogJ0NPSycsXG4gICAgaXNvTm86ICcxODQnLFxuICAgIGludGVybmV0OiAnQ0snXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ29zdGEgUmljYScsXG4gICAgY2FwaXRhbDogJ1NhbiBKb3NlJyxcbiAgICBmaXBzOiAnQ1MnLFxuICAgIGlzbzI6ICdDUicsXG4gICAgaXNvMzogJ0NSSScsXG4gICAgaXNvTm86ICcxODgnLFxuICAgIGludGVybmV0OiAnQ1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiBcIkNvdGUgZCdJdm9pcmVcIixcbiAgICBjYXBpdGFsOiAnWWFtb3Vzc291a3JvJyxcbiAgICBmaXBzOiAnSVYnLFxuICAgIGlzbzI6ICdDSScsXG4gICAgaXNvMzogJ0NJVicsXG4gICAgaXNvTm86ICczODQnLFxuICAgIGludGVybmV0OiAnQ0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQ3JvYXRpYScsXG4gICAgY2FwaXRhbDogJ1phZ3JlYicsXG4gICAgZmlwczogJ0hSJyxcbiAgICBpc28yOiAnSFInLFxuICAgIGlzbzM6ICdIUlYnLFxuICAgIGlzb05vOiAnMTkxJyxcbiAgICBpbnRlcm5ldDogJ0hSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQ3ViYScsXG4gICAgY2FwaXRhbDogJ0hhdmFuYScsXG4gICAgZmlwczogJ0NVJyxcbiAgICBpc28yOiAnQ1UnLFxuICAgIGlzbzM6ICdDVUInLFxuICAgIGlzb05vOiAnMTkyJyxcbiAgICBpbnRlcm5ldDogJ0NVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ3lwcnVzJyxcbiAgICBjYXBpdGFsOiAnTmljb3NpYScsXG4gICAgZmlwczogJ0NZJyxcbiAgICBpc28yOiAnQ1knLFxuICAgIGlzbzM6ICdDWVAnLFxuICAgIGlzb05vOiAnMTk2JyxcbiAgICBpbnRlcm5ldDogJ0NZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0N6ZWNoIFJlcHVibGljJyxcbiAgICBjYXBpdGFsOiAnUHJhZ3VlJyxcbiAgICBmaXBzOiAnRVonLFxuICAgIGlzbzI6ICdDWicsXG4gICAgaXNvMzogJ0NaRScsXG4gICAgaXNvTm86ICcyMDMnLFxuICAgIGludGVybmV0OiAnQ1onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Rlbm1hcmsnLFxuICAgIGNhcGl0YWw6ICdDb3BlbmhhZ2VuJyxcbiAgICBmaXBzOiAnREEnLFxuICAgIGlzbzI6ICdESycsXG4gICAgaXNvMzogJ0ROSycsXG4gICAgaXNvTm86ICcyMDgnLFxuICAgIGludGVybmV0OiAnREsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRGppYm91dGknLFxuICAgIGNhcGl0YWw6ICdEamlib3V0aScsXG4gICAgZmlwczogJ0RKJyxcbiAgICBpc28yOiAnREonLFxuICAgIGlzbzM6ICdESkknLFxuICAgIGlzb05vOiAnMjYyJyxcbiAgICBpbnRlcm5ldDogJ0RKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnRG9taW5pY2EnLFxuICAgIGNhcGl0YWw6ICdSb3NlYXUnLFxuICAgIGZpcHM6ICdETycsXG4gICAgaXNvMjogJ0RNJyxcbiAgICBpc28zOiAnRE1BJyxcbiAgICBpc29ObzogJzIxMicsXG4gICAgaW50ZXJuZXQ6ICdETSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgY2FwaXRhbDogJ1NhbnRvIERvbWluZ28nLFxuICAgIGZpcHM6ICdEUicsXG4gICAgaXNvMjogJ0RPJyxcbiAgICBpc28zOiAnRE9NJyxcbiAgICBpc29ObzogJzIxNCcsXG4gICAgaW50ZXJuZXQ6ICdETydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnRWN1YWRvcicsXG4gICAgY2FwaXRhbDogJ1F1aXRvJyxcbiAgICBmaXBzOiAnRUMnLFxuICAgIGlzbzI6ICdFQycsXG4gICAgaXNvMzogJ0VDVScsXG4gICAgaXNvTm86ICcyMTgnLFxuICAgIGludGVybmV0OiAnRUMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0VneXB0JyxcbiAgICBjYXBpdGFsOiAnQ2Fpcm8nLFxuICAgIGZpcHM6ICdFRycsXG4gICAgaXNvMjogJ0VHJyxcbiAgICBpc28zOiAnRUdZJyxcbiAgICBpc29ObzogJzgxOCcsXG4gICAgaW50ZXJuZXQ6ICdFRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdFbCBTYWx2YWRvcicsXG4gICAgY2FwaXRhbDogJ1NhbiBTYWx2YWRvcicsXG4gICAgZmlwczogJ0VTJyxcbiAgICBpc28yOiAnU1YnLFxuICAgIGlzbzM6ICdTTFYnLFxuICAgIGlzb05vOiAnMjIyJyxcbiAgICBpbnRlcm5ldDogJ1NWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgICBjYXBpdGFsOiAnTWFsYWJvJyxcbiAgICBmaXBzOiAnRUsnLFxuICAgIGlzbzI6ICdHUScsXG4gICAgaXNvMzogJ0dOUScsXG4gICAgaXNvTm86ICcyMjYnLFxuICAgIGludGVybmV0OiAnR1EnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXJpdHJlYScsXG4gICAgY2FwaXRhbDogJ0FzbWFyYScsXG4gICAgZmlwczogJ0VSJyxcbiAgICBpc28yOiAnRVInLFxuICAgIGlzbzM6ICdFUkknLFxuICAgIGlzb05vOiAnMjMyJyxcbiAgICBpbnRlcm5ldDogJ0VSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0VzdG9uaWEnLFxuICAgIGNhcGl0YWw6ICdUYWxsaW5uJyxcbiAgICBmaXBzOiAnRU4nLFxuICAgIGlzbzI6ICdFRScsXG4gICAgaXNvMzogJ0VTVCcsXG4gICAgaXNvTm86ICcyMzMnLFxuICAgIGludGVybmV0OiAnRUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXRoaW9waWEnLFxuICAgIGNhcGl0YWw6ICdBZGRpcyBBYmFiYScsXG4gICAgZmlwczogJ0VUJyxcbiAgICBpc28yOiAnRVQnLFxuICAgIGlzbzM6ICdFVEgnLFxuICAgIGlzb05vOiAnMjMxJyxcbiAgICBpbnRlcm5ldDogJ0VUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcyknLFxuICAgIGNhcGl0YWw6ICdTdGFubGV5JyxcbiAgICBmaXBzOiAnRkEnLFxuICAgIGlzbzI6ICdGSycsXG4gICAgaXNvMzogJ0ZMSycsXG4gICAgaXNvTm86ICcyMzgnLFxuICAgIGludGVybmV0OiAnRksnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Zhcm9lIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdUb3JzaGF2bicsXG4gICAgZmlwczogJ0ZPJyxcbiAgICBpc28yOiAnRk8nLFxuICAgIGlzbzM6ICdGUk8nLFxuICAgIGlzb05vOiAnMjM0JyxcbiAgICBpbnRlcm5ldDogJ0ZPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0ZpamknLFxuICAgIGNhcGl0YWw6ICdTdXZhJyxcbiAgICBmaXBzOiAnRkonLFxuICAgIGlzbzI6ICdGSicsXG4gICAgaXNvMzogJ0ZKSScsXG4gICAgaXNvTm86ICcyNDInLFxuICAgIGludGVybmV0OiAnRkonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ZpbmxhbmQnLFxuICAgIGNhcGl0YWw6ICdIZWxzaW5raScsXG4gICAgZmlwczogJ0ZJJyxcbiAgICBpc28yOiAnRkknLFxuICAgIGlzbzM6ICdGSU4nLFxuICAgIGlzb05vOiAnMjQ2JyxcbiAgICBpbnRlcm5ldDogJ0ZJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ZyYW5jZScsXG4gICAgY2FwaXRhbDogJ1BhcmlzJyxcbiAgICBmaXBzOiAnRlInLFxuICAgIGlzbzI6ICdGUicsXG4gICAgaXNvMzogJ0ZSQScsXG4gICAgaXNvTm86ICcyNTAnLFxuICAgIGludGVybmV0OiAnRlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0ZyZW5jaCBHdWlhbmEnLFxuICAgIGNhcGl0YWw6ICdDYXllbm5lJyxcbiAgICBmaXBzOiAnRkcnLFxuICAgIGlzbzI6ICdHRicsXG4gICAgaXNvMzogJ0dVRicsXG4gICAgaXNvTm86ICcyNTQnLFxuICAgIGludGVybmV0OiAnR0YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnRnJlbmNoIFBvbHluZXNpYScsXG4gICAgY2FwaXRhbDogJ1BhcGVldGUnLFxuICAgIGZpcHM6ICdGUCcsXG4gICAgaXNvMjogJ1BGJyxcbiAgICBpc28zOiAnUFlGJyxcbiAgICBpc29ObzogJzI1OCcsXG4gICAgaW50ZXJuZXQ6ICdQRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHYWJvbicsXG4gICAgY2FwaXRhbDogJ0xpYnJldmlsbGUnLFxuICAgIGZpcHM6ICdHQicsXG4gICAgaXNvMjogJ0dBJyxcbiAgICBpc28zOiAnR0FCJyxcbiAgICBpc29ObzogJzI2NicsXG4gICAgaW50ZXJuZXQ6ICdHQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUaGUgR2FtYmlhJyxcbiAgICBjYXBpdGFsOiAnQmFuanVsJyxcbiAgICBmaXBzOiAnR0EnLFxuICAgIGlzbzI6ICdHTScsXG4gICAgaXNvMzogJ0dNQicsXG4gICAgaXNvTm86ICcyNzAnLFxuICAgIGludGVybmV0OiAnR00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdHZW9yZ2lhJyxcbiAgICBjYXBpdGFsOiBcIlQnYmlsaXNpXCIsXG4gICAgZmlwczogJ0dHJyxcbiAgICBpc28yOiAnR0UnLFxuICAgIGlzbzM6ICdHRU8nLFxuICAgIGlzb05vOiAnMjY4JyxcbiAgICBpbnRlcm5ldDogJ0dFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0dlcm1hbnknLFxuICAgIGNhcGl0YWw6ICdCZXJsaW4nLFxuICAgIGZpcHM6ICdHTScsXG4gICAgaXNvMjogJ0RFJyxcbiAgICBpc28zOiAnREVVJyxcbiAgICBpc29ObzogJzI3NicsXG4gICAgaW50ZXJuZXQ6ICdERSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHaGFuYScsXG4gICAgY2FwaXRhbDogJ0FjY3JhJyxcbiAgICBmaXBzOiAnR0gnLFxuICAgIGlzbzI6ICdHSCcsXG4gICAgaXNvMzogJ0dIQScsXG4gICAgaXNvTm86ICcyODgnLFxuICAgIGludGVybmV0OiAnR0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR2licmFsdGFyJyxcbiAgICBjYXBpdGFsOiAnR2licmFsdGFyJyxcbiAgICBmaXBzOiAnR0knLFxuICAgIGlzbzI6ICdHSScsXG4gICAgaXNvMzogJ0dJQicsXG4gICAgaXNvTm86ICcyOTInLFxuICAgIGludGVybmV0OiAnR0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR3JlZWNlJyxcbiAgICBjYXBpdGFsOiAnQXRoZW5zJyxcbiAgICBmaXBzOiAnR1InLFxuICAgIGlzbzI6ICdHUicsXG4gICAgaXNvMzogJ0dSQycsXG4gICAgaXNvTm86ICczMDAnLFxuICAgIGludGVybmV0OiAnR1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0dyZWVubGFuZCcsXG4gICAgY2FwaXRhbDogJ051dWsgKEdvZHRoYWIpJyxcbiAgICBmaXBzOiAnR0wnLFxuICAgIGlzbzI6ICdHTCcsXG4gICAgaXNvMzogJ0dSTCcsXG4gICAgaXNvTm86ICczMDQnLFxuICAgIGludGVybmV0OiAnR0wnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdHcmVuYWRhJyxcbiAgICBjYXBpdGFsOiBcIlNhaW50IEdlb3JnZSdzXCIsXG4gICAgZmlwczogJ0dKJyxcbiAgICBpc28yOiAnR0QnLFxuICAgIGlzbzM6ICdHUkQnLFxuICAgIGlzb05vOiAnMzA4JyxcbiAgICBpbnRlcm5ldDogJ0dEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnR3VhZGVsb3VwZScsXG4gICAgY2FwaXRhbDogJ0Jhc3NlLVRlcnJlJyxcbiAgICBmaXBzOiAnR1AnLFxuICAgIGlzbzI6ICdHUCcsXG4gICAgaXNvMzogJ0dMUCcsXG4gICAgaXNvTm86ICczMTInLFxuICAgIGludGVybmV0OiAnR1AnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnR3VhbScsXG4gICAgY2FwaXRhbDogJ0hhZ2F0bmEgKEFnYW5hKScsXG4gICAgZmlwczogJ0dRJyxcbiAgICBpc28yOiAnR1UnLFxuICAgIGlzbzM6ICdHVU0nLFxuICAgIGlzb05vOiAnMzE2JyxcbiAgICBpbnRlcm5ldDogJ0dVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0d1YXRlbWFsYScsXG4gICAgY2FwaXRhbDogJ0d1YXRlbWFsYScsXG4gICAgZmlwczogJ0dUJyxcbiAgICBpc28yOiAnR1QnLFxuICAgIGlzbzM6ICdHVE0nLFxuICAgIGlzb05vOiAnMzIwJyxcbiAgICBpbnRlcm5ldDogJ0dUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0d1aW5lYScsXG4gICAgY2FwaXRhbDogJ0NvbmFrcnknLFxuICAgIGZpcHM6ICdHVicsXG4gICAgaXNvMjogJ0dOJyxcbiAgICBpc28zOiAnR0lOJyxcbiAgICBpc29ObzogJzMyNCcsXG4gICAgaW50ZXJuZXQ6ICdHTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHdWluZWEtQmlzc2F1JyxcbiAgICBjYXBpdGFsOiAnQmlzc2F1JyxcbiAgICBmaXBzOiAnUFUnLFxuICAgIGlzbzI6ICdHVycsXG4gICAgaXNvMzogJ0dOQicsXG4gICAgaXNvTm86ICc2MjQnLFxuICAgIGludGVybmV0OiAnR1cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0d1eWFuYScsXG4gICAgY2FwaXRhbDogJ0dlb3JnZXRvd24nLFxuICAgIGZpcHM6ICdHWScsXG4gICAgaXNvMjogJ0dZJyxcbiAgICBpc28zOiAnR1VZJyxcbiAgICBpc29ObzogJzMyOCcsXG4gICAgaW50ZXJuZXQ6ICdHWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0hhaXRpJyxcbiAgICBjYXBpdGFsOiAnUG9ydC1hdS1QcmluY2UnLFxuICAgIGZpcHM6ICdIQScsXG4gICAgaXNvMjogJ0hUJyxcbiAgICBpc28zOiAnSFRJJyxcbiAgICBpc29ObzogJzMzMicsXG4gICAgaW50ZXJuZXQ6ICdIVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSknLFxuICAgIGNhcGl0YWw6ICdWYXRpY2FuIENpdHknLFxuICAgIGZpcHM6ICdWVCcsXG4gICAgaXNvMjogJ1ZBJyxcbiAgICBpc28zOiAnVkFUJyxcbiAgICBpc29ObzogJzMzNicsXG4gICAgaW50ZXJuZXQ6ICdWQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdIb25kdXJhcycsXG4gICAgY2FwaXRhbDogJ1RlZ3VjaWdhbHBhJyxcbiAgICBmaXBzOiAnSE8nLFxuICAgIGlzbzI6ICdITicsXG4gICAgaXNvMzogJ0hORCcsXG4gICAgaXNvTm86ICczNDAnLFxuICAgIGludGVybmV0OiAnSE4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSHVuZ2FyeScsXG4gICAgY2FwaXRhbDogJ0J1ZGFwZXN0JyxcbiAgICBmaXBzOiAnSFUnLFxuICAgIGlzbzI6ICdIVScsXG4gICAgaXNvMzogJ0hVTicsXG4gICAgaXNvTm86ICczNDgnLFxuICAgIGludGVybmV0OiAnSFUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ljZWxhbmQnLFxuICAgIGNhcGl0YWw6ICdSZXlramF2aWsnLFxuICAgIGZpcHM6ICdJQycsXG4gICAgaXNvMjogJ0lTJyxcbiAgICBpc28zOiAnSVNMJyxcbiAgICBpc29ObzogJzM1MicsXG4gICAgaW50ZXJuZXQ6ICdJUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdJbmRpYScsXG4gICAgY2FwaXRhbDogJ05ldyBEZWxoaScsXG4gICAgZmlwczogJ0lOJyxcbiAgICBpc28yOiAnSU4nLFxuICAgIGlzbzM6ICdJTkQnLFxuICAgIGlzb05vOiAnMzU2JyxcbiAgICBpbnRlcm5ldDogJ0lOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSW5kb25lc2lhJyxcbiAgICBjYXBpdGFsOiAnSmFrYXJ0YScsXG4gICAgZmlwczogJ0lEJyxcbiAgICBpc28yOiAnSUQnLFxuICAgIGlzbzM6ICdJRE4nLFxuICAgIGlzb05vOiAnMzYwJyxcbiAgICBpbnRlcm5ldDogJ0lEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSXJhbicsXG4gICAgY2FwaXRhbDogJ1RlaHJhbicsXG4gICAgZmlwczogJ0lSJyxcbiAgICBpc28yOiAnSVInLFxuICAgIGlzbzM6ICdJUk4nLFxuICAgIGlzb05vOiAnMzY0JyxcbiAgICBpbnRlcm5ldDogJ0lSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSXJhcScsXG4gICAgY2FwaXRhbDogJ0JhZ2hkYWQnLFxuICAgIGZpcHM6ICdJWicsXG4gICAgaXNvMjogJ0lRJyxcbiAgICBpc28zOiAnSVJRJyxcbiAgICBpc29ObzogJzM2OCcsXG4gICAgaW50ZXJuZXQ6ICdJUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdJcmVsYW5kJyxcbiAgICBjYXBpdGFsOiAnRHVibGluJyxcbiAgICBmaXBzOiAnRUknLFxuICAgIGlzbzI6ICdJRScsXG4gICAgaXNvMzogJ0lSTCcsXG4gICAgaXNvTm86ICczNzInLFxuICAgIGludGVybmV0OiAnSUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdJc3JhZWwnLFxuICAgIGNhcGl0YWw6ICdKZXJ1c2FsZW0nLFxuICAgIGZpcHM6ICdJUycsXG4gICAgaXNvMjogJ0lMJyxcbiAgICBpc28zOiAnSVNSJyxcbiAgICBpc29ObzogJzM3NicsXG4gICAgaW50ZXJuZXQ6ICdJTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSXRhbHknLFxuICAgIGNhcGl0YWw6ICdSb21lJyxcbiAgICBmaXBzOiAnSVQnLFxuICAgIGlzbzI6ICdJVCcsXG4gICAgaXNvMzogJ0lUQScsXG4gICAgaXNvTm86ICczODAnLFxuICAgIGludGVybmV0OiAnSVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdKYW1haWNhJyxcbiAgICBjYXBpdGFsOiAnS2luZ3N0b24nLFxuICAgIGZpcHM6ICdKTScsXG4gICAgaXNvMjogJ0pNJyxcbiAgICBpc28zOiAnSkFNJyxcbiAgICBpc29ObzogJzM4OCcsXG4gICAgaW50ZXJuZXQ6ICdKTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0phcGFuJyxcbiAgICBjYXBpdGFsOiAnVG9reW8nLFxuICAgIGZpcHM6ICdKQScsXG4gICAgaXNvMjogJ0pQJyxcbiAgICBpc28zOiAnSlBOJyxcbiAgICBpc29ObzogJzM5MicsXG4gICAgaW50ZXJuZXQ6ICdKUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0pvcmRhbicsXG4gICAgY2FwaXRhbDogJ0FtbWFuJyxcbiAgICBmaXBzOiAnSk8nLFxuICAgIGlzbzI6ICdKTycsXG4gICAgaXNvMzogJ0pPUicsXG4gICAgaXNvTm86ICc0MDAnLFxuICAgIGludGVybmV0OiAnSk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdLYXpha2hzdGFuJyxcbiAgICBjYXBpdGFsOiAnQXN0YW5hIChBa21vbGEpJyxcbiAgICBmaXBzOiAnS1onLFxuICAgIGlzbzI6ICdLWicsXG4gICAgaXNvMzogJ0tBWicsXG4gICAgaXNvTm86ICczOTgnLFxuICAgIGludGVybmV0OiAnS1onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnS2VueWEnLFxuICAgIGNhcGl0YWw6ICdOYWlyb2JpJyxcbiAgICBmaXBzOiAnS0UnLFxuICAgIGlzbzI6ICdLRScsXG4gICAgaXNvMzogJ0tFTicsXG4gICAgaXNvTm86ICc0MDQnLFxuICAgIGludGVybmV0OiAnS0UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnS2lyaWJhdGknLFxuICAgIGNhcGl0YWw6ICdUYXJhd2EnLFxuICAgIGZpcHM6ICdLUicsXG4gICAgaXNvMjogJ0tJJyxcbiAgICBpc28zOiAnS0lSJyxcbiAgICBpc29ObzogJzI5NicsXG4gICAgaW50ZXJuZXQ6ICdLSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ05vcnRoIEtvcmVhJyxcbiAgICBjYXBpdGFsOiBcIlAneW9uZ3lhbmdcIixcbiAgICBmaXBzOiAnS04nLFxuICAgIGlzbzI6ICdLUCcsXG4gICAgaXNvMzogJ1BSSycsXG4gICAgaXNvTm86ICc0MDgnLFxuICAgIGludGVybmV0OiAnS1AnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBLb3JlYScsXG4gICAgY2FwaXRhbDogJ1Nlb3VsJyxcbiAgICBmaXBzOiAnS1MnLFxuICAgIGlzbzI6ICdLUicsXG4gICAgaXNvMzogJ0tPUicsXG4gICAgaXNvTm86ICc0MTAnLFxuICAgIGludGVybmV0OiAnS1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdLdXdhaXQnLFxuICAgIGNhcGl0YWw6ICdLdXdhaXQnLFxuICAgIGZpcHM6ICdLVScsXG4gICAgaXNvMjogJ0tXJyxcbiAgICBpc28zOiAnS1dUJyxcbiAgICBpc29ObzogJzQxNCcsXG4gICAgaW50ZXJuZXQ6ICdLVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ0t5cmd5enN0YW4nLFxuICAgIGNhcGl0YWw6ICdCaXNoa2VrJyxcbiAgICBmaXBzOiAnS0cnLFxuICAgIGlzbzI6ICdLRycsXG4gICAgaXNvMzogJ0tHWicsXG4gICAgaXNvTm86ICc0MTcnLFxuICAgIGludGVybmV0OiAnS0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdMYW9zJyxcbiAgICBjYXBpdGFsOiAnVmllbnRpYW5lJyxcbiAgICBmaXBzOiAnTEEnLFxuICAgIGlzbzI6ICdMQScsXG4gICAgaXNvMzogJ0xBTycsXG4gICAgaXNvTm86ICc0MTgnLFxuICAgIGludGVybmV0OiAnTEEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTGF0dmlhJyxcbiAgICBjYXBpdGFsOiAnUmlnYScsXG4gICAgZmlwczogJ0xHJyxcbiAgICBpc28yOiAnTFYnLFxuICAgIGlzbzM6ICdMVkEnLFxuICAgIGlzb05vOiAnNDI4JyxcbiAgICBpbnRlcm5ldDogJ0xWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTGViYW5vbicsXG4gICAgY2FwaXRhbDogJ0JlaXJ1dCcsXG4gICAgZmlwczogJ0xFJyxcbiAgICBpc28yOiAnTEInLFxuICAgIGlzbzM6ICdMQk4nLFxuICAgIGlzb05vOiAnNDIyJyxcbiAgICBpbnRlcm5ldDogJ0xCJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdMZXNvdGhvJyxcbiAgICBjYXBpdGFsOiAnTWFzZXJ1JyxcbiAgICBmaXBzOiAnTFQnLFxuICAgIGlzbzI6ICdMUycsXG4gICAgaXNvMzogJ0xTTycsXG4gICAgaXNvTm86ICc0MjYnLFxuICAgIGludGVybmV0OiAnTFMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTGliZXJpYScsXG4gICAgY2FwaXRhbDogJ01vbnJvdmlhJyxcbiAgICBmaXBzOiAnTEknLFxuICAgIGlzbzI6ICdMUicsXG4gICAgaXNvMzogJ0xCUicsXG4gICAgaXNvTm86ICc0MzAnLFxuICAgIGludGVybmV0OiAnTFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0xpYnlhJyxcbiAgICBjYXBpdGFsOiAnVHJpcG9saScsXG4gICAgZmlwczogJ0xZJyxcbiAgICBpc28yOiAnTFknLFxuICAgIGlzbzM6ICdMQlknLFxuICAgIGlzb05vOiAnNDM0JyxcbiAgICBpbnRlcm5ldDogJ0xZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0xpZWNodGVuc3RlaW4nLFxuICAgIGNhcGl0YWw6ICdWYWR1eicsXG4gICAgZmlwczogJ0xTJyxcbiAgICBpc28yOiAnTEknLFxuICAgIGlzbzM6ICdMSUUnLFxuICAgIGlzb05vOiAnNDM4JyxcbiAgICBpbnRlcm5ldDogJ0xJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0xpdGh1YW5pYScsXG4gICAgY2FwaXRhbDogJ1ZpbG5pdXMnLFxuICAgIGZpcHM6ICdMSCcsXG4gICAgaXNvMjogJ0xUJyxcbiAgICBpc28zOiAnTFRVJyxcbiAgICBpc29ObzogJzQ0MCcsXG4gICAgaW50ZXJuZXQ6ICdMVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdMdXhlbWJvdXJnJyxcbiAgICBjYXBpdGFsOiAnTHV4ZW1ib3VyZycsXG4gICAgZmlwczogJ0xVJyxcbiAgICBpc28yOiAnTFUnLFxuICAgIGlzbzM6ICdMVVgnLFxuICAgIGlzb05vOiAnNDQyJyxcbiAgICBpbnRlcm5ldDogJ0xVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ05vcnRoIE1hY2Vkb25pYScsXG4gICAgY2FwaXRhbDogJ1Nrb3BqZScsXG4gICAgZmlwczogJ01LJyxcbiAgICBpc28yOiAnTUsnLFxuICAgIGlzbzM6ICdNS0QnLFxuICAgIGlzb05vOiAnODA3JyxcbiAgICBpbnRlcm5ldDogJ01LJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdNYWRhZ2FzY2FyJyxcbiAgICBjYXBpdGFsOiAnQW50YW5hbmFyaXZvJyxcbiAgICBmaXBzOiAnTUEnLFxuICAgIGlzbzI6ICdNRycsXG4gICAgaXNvMzogJ01ERycsXG4gICAgaXNvTm86ICc0NTAnLFxuICAgIGludGVybmV0OiAnTUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01hbGF3aScsXG4gICAgY2FwaXRhbDogJ0xpbG9uZ3dlJyxcbiAgICBmaXBzOiAnTUknLFxuICAgIGlzbzI6ICdNVycsXG4gICAgaXNvMzogJ01XSScsXG4gICAgaXNvTm86ICc0NTQnLFxuICAgIGludGVybmV0OiAnTVcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdNYWxheXNpYScsXG4gICAgY2FwaXRhbDogJ0t1YWxhIEx1bXB1cicsXG4gICAgZmlwczogJ01ZJyxcbiAgICBpc28yOiAnTVknLFxuICAgIGlzbzM6ICdNWVMnLFxuICAgIGlzb05vOiAnNDU4JyxcbiAgICBpbnRlcm5ldDogJ01ZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ01hbGRpdmVzJyxcbiAgICBjYXBpdGFsOiAnTWFsZSAoTWFhbGUpJyxcbiAgICBmaXBzOiAnTVYnLFxuICAgIGlzbzI6ICdNVicsXG4gICAgaXNvMzogJ01EVicsXG4gICAgaXNvTm86ICc0NjInLFxuICAgIGludGVybmV0OiAnTVYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWFsaScsXG4gICAgY2FwaXRhbDogJ0JhbWFrbycsXG4gICAgZmlwczogJ01MJyxcbiAgICBpc28yOiAnTUwnLFxuICAgIGlzbzM6ICdNTEknLFxuICAgIGlzb05vOiAnNDY2JyxcbiAgICBpbnRlcm5ldDogJ01MJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNYWx0YScsXG4gICAgY2FwaXRhbDogJ1ZhbGxldHRhJyxcbiAgICBmaXBzOiAnTVQnLFxuICAgIGlzbzI6ICdNVCcsXG4gICAgaXNvMzogJ01MVCcsXG4gICAgaXNvTm86ICc0NzAnLFxuICAgIGludGVybmV0OiAnTVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSXNsZSBvZiBNYW4nLFxuICAgIGNhcGl0YWw6ICdEb3VnbGFzJyxcbiAgICBmaXBzOiAnSU0nLFxuICAgIGlzbzI6ICdJTScsXG4gICAgaXNvMzogJ0lNTicsXG4gICAgaXNvTm86ICc4MzMnLFxuICAgIGludGVybmV0OiAnSU0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTWFyc2hhbGwgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ01hanVybycsXG4gICAgZmlwczogJ1JNJyxcbiAgICBpc28yOiAnTUgnLFxuICAgIGlzbzM6ICdNSEwnLFxuICAgIGlzb05vOiAnNTg0JyxcbiAgICBpbnRlcm5ldDogJ01IJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnTWFydGluaXF1ZScsXG4gICAgY2FwaXRhbDogJ0ZvcnQtZGUtRnJhbmNlJyxcbiAgICBmaXBzOiAnTUInLFxuICAgIGlzbzI6ICdNUScsXG4gICAgaXNvMzogJ01UUScsXG4gICAgaXNvTm86ICc0NzQnLFxuICAgIGludGVybmV0OiAnTVEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWF1cml0YW5pYScsXG4gICAgY2FwaXRhbDogJ05vdWFrY2hvdHQnLFxuICAgIGZpcHM6ICdNUicsXG4gICAgaXNvMjogJ01SJyxcbiAgICBpc28zOiAnTVJUJyxcbiAgICBpc29ObzogJzQ3OCcsXG4gICAgaW50ZXJuZXQ6ICdNUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnTWF1cml0aXVzJyxcbiAgICBjYXBpdGFsOiAnUG9ydCBMb3VpcycsXG4gICAgZmlwczogJ01QJyxcbiAgICBpc28yOiAnTVUnLFxuICAgIGlzbzM6ICdNVVMnLFxuICAgIGlzb05vOiAnNDgwJyxcbiAgICBpbnRlcm5ldDogJ01VJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdNYXlvdHRlJyxcbiAgICBjYXBpdGFsOiAnTWFtb3V0em91JyxcbiAgICBmaXBzOiAnTUYnLFxuICAgIGlzbzI6ICdZVCcsXG4gICAgaXNvMzogJ01ZVCcsXG4gICAgaXNvTm86ICcxNzUnLFxuICAgIGludGVybmV0OiAnWVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWV4aWNvJyxcbiAgICBjYXBpdGFsOiAnTWV4aWNvJyxcbiAgICBmaXBzOiAnTVgnLFxuICAgIGlzbzI6ICdNWCcsXG4gICAgaXNvMzogJ01FWCcsXG4gICAgaXNvTm86ICc0ODQnLFxuICAgIGludGVybmV0OiAnTVgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnRmVkZXJhdGVkIFN0YXRlcyBvZiBNaWNyb25lc2lhJyxcbiAgICBjYXBpdGFsOiAnUGFsaWtpcicsXG4gICAgZmlwczogJycsXG4gICAgaXNvMjogJ0ZNJyxcbiAgICBpc28zOiAnRlNNJyxcbiAgICBpc29ObzogJzU4MycsXG4gICAgaW50ZXJuZXQ6ICdGTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNb2xkb3ZhJyxcbiAgICBjYXBpdGFsOiAnQ2hpc2luYXUnLFxuICAgIGZpcHM6ICdNRCcsXG4gICAgaXNvMjogJ01EJyxcbiAgICBpc28zOiAnTURBJyxcbiAgICBpc29ObzogJzQ5OCcsXG4gICAgaW50ZXJuZXQ6ICdNRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNb25hY28nLFxuICAgIGNhcGl0YWw6ICdNb25hY28nLFxuICAgIGZpcHM6ICdNTicsXG4gICAgaXNvMjogJ01DJyxcbiAgICBpc28zOiAnTUNPJyxcbiAgICBpc29ObzogJzQ5MicsXG4gICAgaW50ZXJuZXQ6ICdNQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFzaWEnLFxuICAgIGNvdW50cnk6ICdNb25nb2xpYScsXG4gICAgY2FwaXRhbDogJ1VsYWFuYmFhdGFyJyxcbiAgICBmaXBzOiAnTUcnLFxuICAgIGlzbzI6ICdNTicsXG4gICAgaXNvMzogJ01ORycsXG4gICAgaXNvTm86ICc0OTYnLFxuICAgIGludGVybmV0OiAnTU4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdNb250c2VycmF0JyxcbiAgICBjYXBpdGFsOiAnUGx5bW91dGgnLFxuICAgIGZpcHM6ICdNSCcsXG4gICAgaXNvMjogJ01TJyxcbiAgICBpc28zOiAnTVNSJyxcbiAgICBpc29ObzogJzUwMCcsXG4gICAgaW50ZXJuZXQ6ICdNUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTW9yb2NjbycsXG4gICAgY2FwaXRhbDogJ1JhYmF0JyxcbiAgICBmaXBzOiAnTU8nLFxuICAgIGlzbzI6ICdNQScsXG4gICAgaXNvMzogJ01BUicsXG4gICAgaXNvTm86ICc1MDQnLFxuICAgIGludGVybmV0OiAnTUEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01vemFtYmlxdWUnLFxuICAgIGNhcGl0YWw6ICdNYXB1dG8nLFxuICAgIGZpcHM6ICdNWicsXG4gICAgaXNvMjogJ01aJyxcbiAgICBpc28zOiAnTU9aJyxcbiAgICBpc29ObzogJzUwOCcsXG4gICAgaW50ZXJuZXQ6ICdNWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ015YW5tYXIgKEJ1cm1hKScsXG4gICAgY2FwaXRhbDogJ1Jhbmdvb24gKFlhbmdvbiknLFxuICAgIGZpcHM6ICdCTScsXG4gICAgaXNvMjogJ01NJyxcbiAgICBpc28zOiAnTU1SJyxcbiAgICBpc29ObzogJzEwNCcsXG4gICAgaW50ZXJuZXQ6ICdNTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTmFtaWJpYScsXG4gICAgY2FwaXRhbDogJ1dpbmRob2VrJyxcbiAgICBmaXBzOiAnV0EnLFxuICAgIGlzbzI6ICdOQScsXG4gICAgaXNvMzogJ05BTScsXG4gICAgaXNvTm86ICc1MTYnLFxuICAgIGludGVybmV0OiAnTkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTmF1cnUnLFxuICAgIGNhcGl0YWw6ICdubyBvZmZpY2lhbCBjYXBpdGFsJyxcbiAgICBmaXBzOiAnTlInLFxuICAgIGlzbzI6ICdOUicsXG4gICAgaXNvMzogJ05SVScsXG4gICAgaXNvTm86ICc1MjAnLFxuICAgIGludGVybmV0OiAnTlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTmVwYWwnLFxuICAgIGNhcGl0YWw6ICdLYXRobWFuZHUnLFxuICAgIGZpcHM6ICdOUCcsXG4gICAgaXNvMjogJ05QJyxcbiAgICBpc28zOiAnTlBMJyxcbiAgICBpc29ObzogJzUyNCcsXG4gICAgaW50ZXJuZXQ6ICdOUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdOZXRoZXJsYW5kcycsXG4gICAgY2FwaXRhbDogJ0Ftc3RlcmRhbScsXG4gICAgZmlwczogJ05MJyxcbiAgICBpc28yOiAnTkwnLFxuICAgIGlzbzM6ICdOTEQnLFxuICAgIGlzb05vOiAnNTI4JyxcbiAgICBpbnRlcm5ldDogJ05MJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnTmV0aGVybGFuZHMgQW50aWxsZXMnLFxuICAgIGNhcGl0YWw6ICdXaWxsZW1zdGFkJyxcbiAgICBmaXBzOiAnTlQnLFxuICAgIGlzbzI6ICdBTicsXG4gICAgaXNvMzogJ0FOVCcsXG4gICAgaXNvTm86ICc1MzAnLFxuICAgIGludGVybmV0OiAnQU4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTmV3IENhbGVkb25pYScsXG4gICAgY2FwaXRhbDogJ05vdW1lYScsXG4gICAgZmlwczogJ05DJyxcbiAgICBpc28yOiAnTkMnLFxuICAgIGlzbzM6ICdOQ0wnLFxuICAgIGlzb05vOiAnNTQwJyxcbiAgICBpbnRlcm5ldDogJ05DJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05ldyBaZWFsYW5kJyxcbiAgICBjYXBpdGFsOiAnV2VsbGluZ3RvbicsXG4gICAgZmlwczogJ05aJyxcbiAgICBpc28yOiAnTlonLFxuICAgIGlzbzM6ICdOWkwnLFxuICAgIGlzb05vOiAnNTU0JyxcbiAgICBpbnRlcm5ldDogJ05aJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ05pY2FyYWd1YScsXG4gICAgY2FwaXRhbDogJ01hbmFndWEnLFxuICAgIGZpcHM6ICdOVScsXG4gICAgaXNvMjogJ05JJyxcbiAgICBpc28zOiAnTklDJyxcbiAgICBpc29ObzogJzU1OCcsXG4gICAgaW50ZXJuZXQ6ICdOSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdOaWdlcicsXG4gICAgY2FwaXRhbDogJ05pYW1leScsXG4gICAgZmlwczogJ05HJyxcbiAgICBpc28yOiAnTkUnLFxuICAgIGlzbzM6ICdORVInLFxuICAgIGlzb05vOiAnNTYyJyxcbiAgICBpbnRlcm5ldDogJ05FJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIGNhcGl0YWw6ICdBYnVqYScsXG4gICAgZmlwczogJ05JJyxcbiAgICBpc28yOiAnTkcnLFxuICAgIGlzbzM6ICdOR0EnLFxuICAgIGlzb05vOiAnNTY2JyxcbiAgICBpbnRlcm5ldDogJ05HJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05pdWUnLFxuICAgIGNhcGl0YWw6ICdBbG9maScsXG4gICAgZmlwczogJ05FJyxcbiAgICBpc28yOiAnTlUnLFxuICAgIGlzbzM6ICdOSVUnLFxuICAgIGlzb05vOiAnNTcwJyxcbiAgICBpbnRlcm5ldDogJ05VJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05vcmZvbGsgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnS2luZ3N0b24nLFxuICAgIGZpcHM6ICdORicsXG4gICAgaXNvMjogJ05GJyxcbiAgICBpc28zOiAnTkZLJyxcbiAgICBpc29ObzogJzU3NCcsXG4gICAgaW50ZXJuZXQ6ICdORidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdTYWlwYW4nLFxuICAgIGZpcHM6ICdDUScsXG4gICAgaXNvMjogJ01QJyxcbiAgICBpc28zOiAnTU5QJyxcbiAgICBpc29ObzogJzU4MCcsXG4gICAgaW50ZXJuZXQ6ICdNUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTm9yd2F5JyxcbiAgICBjYXBpdGFsOiAnT3NsbycsXG4gICAgZmlwczogJ05PJyxcbiAgICBpc28yOiAnTk8nLFxuICAgIGlzbzM6ICdOT1InLFxuICAgIGlzb05vOiAnNTc4JyxcbiAgICBpbnRlcm5ldDogJ05PJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnT21hbicsXG4gICAgY2FwaXRhbDogJ011c2NhdCcsXG4gICAgZmlwczogJ01VJyxcbiAgICBpc28yOiAnT00nLFxuICAgIGlzbzM6ICdPTU4nLFxuICAgIGlzb05vOiAnNTEyJyxcbiAgICBpbnRlcm5ldDogJ09NJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ1Bha2lzdGFuJyxcbiAgICBjYXBpdGFsOiAnSXNsYW1hYmFkJyxcbiAgICBmaXBzOiAnUEsnLFxuICAgIGlzbzI6ICdQSycsXG4gICAgaXNvMzogJ1BBSycsXG4gICAgaXNvTm86ICc1ODYnLFxuICAgIGludGVybmV0OiAnUEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnUGFsYXUnLFxuICAgIGNhcGl0YWw6ICdLb3JvcicsXG4gICAgZmlwczogJ1BTJyxcbiAgICBpc28yOiAnUFcnLFxuICAgIGlzbzM6ICdQTFcnLFxuICAgIGlzb05vOiAnNTg1JyxcbiAgICBpbnRlcm5ldDogJ1BXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUGFsZXN0aW5pYW4gVGVycml0b3J5JyxcbiAgICBjYXBpdGFsOiAnRWFzdCBKZXJ1c2FsZW0nLFxuICAgIGZpcHM6ICdXRScsXG4gICAgaXNvMjogJ1BTJyxcbiAgICBpc28zOiAnUFNFJyxcbiAgICBpc29ObzogJzI3NScsXG4gICAgaW50ZXJuZXQ6ICdQUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdQYW5hbWEnLFxuICAgIGNhcGl0YWw6ICdQYW5hbWEnLFxuICAgIGZpcHM6ICdQTScsXG4gICAgaXNvMjogJ1BBJyxcbiAgICBpc28zOiAnUEFOJyxcbiAgICBpc29ObzogJzU5MScsXG4gICAgaW50ZXJuZXQ6ICdQQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICBjYXBpdGFsOiAnUG9ydCBNb3Jlc2J5JyxcbiAgICBmaXBzOiAnUFAnLFxuICAgIGlzbzI6ICdQRycsXG4gICAgaXNvMzogJ1BORycsXG4gICAgaXNvTm86ICc1OTgnLFxuICAgIGludGVybmV0OiAnUEcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1BhcmFndWF5JyxcbiAgICBjYXBpdGFsOiAnQXN1bmNpb24nLFxuICAgIGZpcHM6ICdQQScsXG4gICAgaXNvMjogJ1BZJyxcbiAgICBpc28zOiAnUFJZJyxcbiAgICBpc29ObzogJzYwMCcsXG4gICAgaW50ZXJuZXQ6ICdQWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnUGVydScsXG4gICAgY2FwaXRhbDogJ0xpbWEnLFxuICAgIGZpcHM6ICdQRScsXG4gICAgaXNvMjogJ1BFJyxcbiAgICBpc28zOiAnUEVSJyxcbiAgICBpc29ObzogJzYwNCcsXG4gICAgaW50ZXJuZXQ6ICdQRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1BoaWxpcHBpbmVzJyxcbiAgICBjYXBpdGFsOiAnTWFuaWxhJyxcbiAgICBmaXBzOiAnUlAnLFxuICAgIGlzbzI6ICdQSCcsXG4gICAgaXNvMzogJ1BITCcsXG4gICAgaXNvTm86ICc2MDgnLFxuICAgIGludGVybmV0OiAnUEgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnUGl0Y2Fpcm4gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0FkYW1zdG93bicsXG4gICAgZmlwczogJ1BDJyxcbiAgICBpc28yOiAnUE4nLFxuICAgIGlzbzM6ICdQQ04nLFxuICAgIGlzb05vOiAnNjEyJyxcbiAgICBpbnRlcm5ldDogJ1BOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1BvbGFuZCcsXG4gICAgY2FwaXRhbDogJ1dhcnNhdycsXG4gICAgZmlwczogJ1BMJyxcbiAgICBpc28yOiAnUEwnLFxuICAgIGlzbzM6ICdQT0wnLFxuICAgIGlzb05vOiAnNjE2JyxcbiAgICBpbnRlcm5ldDogJ1BMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1BvcnR1Z2FsJyxcbiAgICBjYXBpdGFsOiAnTGlzYm9uJyxcbiAgICBmaXBzOiAnUE8nLFxuICAgIGlzbzI6ICdQVCcsXG4gICAgaXNvMzogJ1BSVCcsXG4gICAgaXNvTm86ICc2MjAnLFxuICAgIGludGVybmV0OiAnUFQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdQdWVydG8gUmljbycsXG4gICAgY2FwaXRhbDogJ1NhbiBKdWFuJyxcbiAgICBmaXBzOiAnUlEnLFxuICAgIGlzbzI6ICdQUicsXG4gICAgaXNvMzogJ1BSSScsXG4gICAgaXNvTm86ICc2MzAnLFxuICAgIGludGVybmV0OiAnUFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdRYXRhcicsXG4gICAgY2FwaXRhbDogJ0RvaGEnLFxuICAgIGZpcHM6ICdRQScsXG4gICAgaXNvMjogJ1FBJyxcbiAgICBpc28zOiAnUUFUJyxcbiAgICBpc29ObzogJzYzNCcsXG4gICAgaW50ZXJuZXQ6ICdRQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnUmV1bmlvbicsXG4gICAgY2FwaXRhbDogJ1NhaW50LURlbmlzJyxcbiAgICBmaXBzOiAnUkUnLFxuICAgIGlzbzI6ICdSRScsXG4gICAgaXNvMzogJ1JFVScsXG4gICAgaXNvTm86ICc2MzgnLFxuICAgIGludGVybmV0OiAnUkUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUm9tYW5pYScsXG4gICAgY2FwaXRhbDogJ0J1Y2hhcmVzdCcsXG4gICAgZmlwczogJ1JPJyxcbiAgICBpc28yOiAnUk8nLFxuICAgIGlzbzM6ICdST1UnLFxuICAgIGlzb05vOiAnNjQyJyxcbiAgICBpbnRlcm5ldDogJ1JPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQXNpYScsXG4gICAgY291bnRyeTogJ1J1c3NpYScsXG4gICAgY2FwaXRhbDogJ01vc2NvdycsXG4gICAgZmlwczogJ1JTJyxcbiAgICBpc28yOiAnUlUnLFxuICAgIGlzbzM6ICdSVVMnLFxuICAgIGlzb05vOiAnNjQzJyxcbiAgICBpbnRlcm5ldDogJ1JVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ1J3YW5kYScsXG4gICAgY2FwaXRhbDogJ0tpZ2FsaScsXG4gICAgZmlwczogJ1JXJyxcbiAgICBpc28yOiAnUlcnLFxuICAgIGlzbzM6ICdSV0EnLFxuICAgIGlzb05vOiAnNjQ2JyxcbiAgICBpbnRlcm5ldDogJ1JXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgICBjYXBpdGFsOiAnQmFzc2V0ZXJyZScsXG4gICAgZmlwczogJ1NDJyxcbiAgICBpc28yOiAnS04nLFxuICAgIGlzbzM6ICdLTkEnLFxuICAgIGlzb05vOiAnNjU5JyxcbiAgICBpbnRlcm5ldDogJ0tOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgTHVjaWEnLFxuICAgIGNhcGl0YWw6ICdDYXN0cmllcycsXG4gICAgZmlwczogJ1NUJyxcbiAgICBpc28yOiAnTEMnLFxuICAgIGlzbzM6ICdMQ0EnLFxuICAgIGlzb05vOiAnNjYyJyxcbiAgICBpbnRlcm5ldDogJ0xDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcbiAgICBjYXBpdGFsOiAnU2FpbnQtUGllcnJlJyxcbiAgICBmaXBzOiAnU0InLFxuICAgIGlzbzI6ICdQTScsXG4gICAgaXNvMzogJ1NQTScsXG4gICAgaXNvTm86ICc2NjYnLFxuICAgIGludGVybmV0OiAnUE0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gICAgY2FwaXRhbDogJ0tpbmdzdG93bicsXG4gICAgZmlwczogJ1ZDJyxcbiAgICBpc28yOiAnVkMnLFxuICAgIGlzbzM6ICdWQ1QnLFxuICAgIGlzb05vOiAnNjcwJyxcbiAgICBpbnRlcm5ldDogJ1ZDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTYW4gTWFyaW5vJyxcbiAgICBjYXBpdGFsOiAnU2FuIE1hcmlubycsXG4gICAgZmlwczogJ1NNJyxcbiAgICBpc28yOiAnU00nLFxuICAgIGlzbzM6ICdTTVInLFxuICAgIGlzb05vOiAnNjc0JyxcbiAgICBpbnRlcm5ldDogJ1NNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gICAgY2FwaXRhbDogJ1NhbyBUb21lJyxcbiAgICBmaXBzOiAnVFAnLFxuICAgIGlzbzI6ICdTVCcsXG4gICAgaXNvMzogJ1NUUCcsXG4gICAgaXNvTm86ICc2NzgnLFxuICAgIGludGVybmV0OiAnU1QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTYXVkaSBBcmFiaWEnLFxuICAgIGNhcGl0YWw6ICdSaXlhZGgnLFxuICAgIGZpcHM6ICdTQScsXG4gICAgaXNvMjogJ1NBJyxcbiAgICBpc28zOiAnU0FVJyxcbiAgICBpc29ObzogJzY4MicsXG4gICAgaW50ZXJuZXQ6ICdTQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTZW5lZ2FsJyxcbiAgICBjYXBpdGFsOiAnRGFrYXInLFxuICAgIGZpcHM6ICdTRycsXG4gICAgaXNvMjogJ1NOJyxcbiAgICBpc28zOiAnU0VOJyxcbiAgICBpc29ObzogJzY4NicsXG4gICAgaW50ZXJuZXQ6ICdTTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnU2V5Y2hlbGxlcycsXG4gICAgY2FwaXRhbDogJ1ZpY3RvcmlhJyxcbiAgICBmaXBzOiAnU0UnLFxuICAgIGlzbzI6ICdTQycsXG4gICAgaXNvMzogJ1NZQycsXG4gICAgaXNvTm86ICc2OTAnLFxuICAgIGludGVybmV0OiAnU0MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU2llcnJhIExlb25lJyxcbiAgICBjYXBpdGFsOiAnRnJlZXRvd24nLFxuICAgIGZpcHM6ICdTTCcsXG4gICAgaXNvMjogJ1NMJyxcbiAgICBpc28zOiAnU0xFJyxcbiAgICBpc29ObzogJzY5NCcsXG4gICAgaW50ZXJuZXQ6ICdTTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1NpbmdhcG9yZScsXG4gICAgY2FwaXRhbDogJ1NpbmdhcG9yZScsXG4gICAgZmlwczogJ1NOJyxcbiAgICBpc28yOiAnU0cnLFxuICAgIGlzbzM6ICdTR1AnLFxuICAgIGlzb05vOiAnNzAyJyxcbiAgICBpbnRlcm5ldDogJ1NHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1Nsb3Zha2lhJyxcbiAgICBjYXBpdGFsOiAnQnJhdGlzbGF2YScsXG4gICAgZmlwczogJ0xPJyxcbiAgICBpc28yOiAnU0snLFxuICAgIGlzbzM6ICdTVksnLFxuICAgIGlzb05vOiAnNzAzJyxcbiAgICBpbnRlcm5ldDogJ1NLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1Nsb3ZlbmlhJyxcbiAgICBjYXBpdGFsOiAnTGp1YmxqYW5hJyxcbiAgICBmaXBzOiAnU0knLFxuICAgIGlzbzI6ICdTSScsXG4gICAgaXNvMzogJ1NWTicsXG4gICAgaXNvTm86ICc3MDUnLFxuICAgIGludGVybmV0OiAnU0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnU29sb21vbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnSG9uaWFyYScsXG4gICAgZmlwczogJ0JQJyxcbiAgICBpc28yOiAnU0InLFxuICAgIGlzbzM6ICdTTEInLFxuICAgIGlzb05vOiAnOTAnLFxuICAgIGludGVybmV0OiAnU0InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU29tYWxpYScsXG4gICAgY2FwaXRhbDogJ01vZ2FkaXNodScsXG4gICAgZmlwczogJ1NPJyxcbiAgICBpc28yOiAnU08nLFxuICAgIGlzbzM6ICdTT00nLFxuICAgIGlzb05vOiAnNzA2JyxcbiAgICBpbnRlcm5ldDogJ1NPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBBZnJpY2EnLFxuICAgIGNhcGl0YWw6ICdQcmV0b3JpYe+/ve+/vScsXG4gICAgZmlwczogJ1NGJyxcbiAgICBpc28yOiAnWkEnLFxuICAgIGlzbzM6ICdaQUYnLFxuICAgIGlzb05vOiAnNzEwJyxcbiAgICBpbnRlcm5ldDogJ1pBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1NwYWluJyxcbiAgICBjYXBpdGFsOiAnTWFkcmlkJyxcbiAgICBmaXBzOiAnU1AnLFxuICAgIGlzbzI6ICdFUycsXG4gICAgaXNvMzogJ0VTUCcsXG4gICAgaXNvTm86ICc3MjQnLFxuICAgIGludGVybmV0OiAnRVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU3JpIExhbmthJyxcbiAgICBjYXBpdGFsOiAnQ29sb21ibycsXG4gICAgZmlwczogJ0NFJyxcbiAgICBpc28yOiAnTEsnLFxuICAgIGlzbzM6ICdMS0EnLFxuICAgIGlzb05vOiAnMTQ0JyxcbiAgICBpbnRlcm5ldDogJ0xLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTdWRhbicsXG4gICAgY2FwaXRhbDogJ0toYXJ0b3VtJyxcbiAgICBmaXBzOiAnU1UnLFxuICAgIGlzbzI6ICdTRCcsXG4gICAgaXNvMzogJ1NETicsXG4gICAgaXNvTm86ICc3MzYnLFxuICAgIGludGVybmV0OiAnU0QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1N1cmluYW1lJyxcbiAgICBjYXBpdGFsOiAnUGFyYW1hcmlibycsXG4gICAgZmlwczogJ05TJyxcbiAgICBpc28yOiAnU1InLFxuICAgIGlzbzM6ICdTVVInLFxuICAgIGlzb05vOiAnNzQwJyxcbiAgICBpbnRlcm5ldDogJ1NSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTdmFsYmFyZCcsXG4gICAgY2FwaXRhbDogJ0xvbmd5ZWFyYnllbicsXG4gICAgZmlwczogJ1NWJyxcbiAgICBpc28yOiAnU0onLFxuICAgIGlzbzM6ICdTSk0nLFxuICAgIGlzb05vOiAnNzQ0JyxcbiAgICBpbnRlcm5ldDogJ1NKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFc3dhdGluaScsXG4gICAgY2FwaXRhbDogJ01iYWJhbmUnLFxuICAgIGZpcHM6ICdXWicsXG4gICAgaXNvMjogJ1NaJyxcbiAgICBpc28zOiAnU1daJyxcbiAgICBpc29ObzogJzc0OCcsXG4gICAgaW50ZXJuZXQ6ICdTWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3dlZGVuJyxcbiAgICBjYXBpdGFsOiAnU3RvY2tob2xtJyxcbiAgICBmaXBzOiAnU1cnLFxuICAgIGlzbzI6ICdTRScsXG4gICAgaXNvMzogJ1NXRScsXG4gICAgaXNvTm86ICc3NTInLFxuICAgIGludGVybmV0OiAnU0UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3dpdHplcmxhbmQnLFxuICAgIGNhcGl0YWw6ICdCZXJuJyxcbiAgICBmaXBzOiAnU1onLFxuICAgIGlzbzI6ICdDSCcsXG4gICAgaXNvMzogJ0NIRScsXG4gICAgaXNvTm86ICc3NTYnLFxuICAgIGludGVybmV0OiAnQ0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTeXJpYScsXG4gICAgY2FwaXRhbDogJ0RhbWFzY3VzJyxcbiAgICBmaXBzOiAnU1knLFxuICAgIGlzbzI6ICdTWScsXG4gICAgaXNvMzogJ1NZUicsXG4gICAgaXNvTm86ICc3NjAnLFxuICAgIGludGVybmV0OiAnU1knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdUYWl3YW4nLFxuICAgIGNhcGl0YWw6ICdUYWlwZWknLFxuICAgIGZpcHM6ICdUVycsXG4gICAgaXNvMjogJ1RXJyxcbiAgICBpc28zOiAnVFdOJyxcbiAgICBpc29ObzogJzE1OCcsXG4gICAgaW50ZXJuZXQ6ICdUVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ1RhamlraXN0YW4nLFxuICAgIGNhcGl0YWw6ICdEdXNoYW5iZScsXG4gICAgZmlwczogJ1RJJyxcbiAgICBpc28yOiAnVEonLFxuICAgIGlzbzM6ICdUSksnLFxuICAgIGlzb05vOiAnNzYyJyxcbiAgICBpbnRlcm5ldDogJ1RKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1RhbnphbmlhJyxcbiAgICBjYXBpdGFsOiAnRGFyIGVzIFNhbGFhbScsXG4gICAgZmlwczogJ1RaJyxcbiAgICBpc28yOiAnVFonLFxuICAgIGlzbzM6ICdUWkEnLFxuICAgIGlzb05vOiAnODM0JyxcbiAgICBpbnRlcm5ldDogJ1RaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVGhhaWxhbmQnLFxuICAgIGNhcGl0YWw6ICdCYW5na29rJyxcbiAgICBmaXBzOiAnVEgnLFxuICAgIGlzbzI6ICdUSCcsXG4gICAgaXNvMzogJ1RIQScsXG4gICAgaXNvTm86ICc3NjQnLFxuICAgIGludGVybmV0OiAnVEgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVG9nbycsXG4gICAgY2FwaXRhbDogJ0xvbWUnLFxuICAgIGZpcHM6ICdUTycsXG4gICAgaXNvMjogJ1RHJyxcbiAgICBpc28zOiAnVEdPJyxcbiAgICBpc29ObzogJzc2OCcsXG4gICAgaW50ZXJuZXQ6ICdURydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdUb2tlbGF1JyxcbiAgICBjYXBpdGFsOiAnbm9uZScsXG4gICAgZmlwczogJ1RMJyxcbiAgICBpc28yOiAnVEsnLFxuICAgIGlzbzM6ICdUS0wnLFxuICAgIGlzb05vOiAnNzcyJyxcbiAgICBpbnRlcm5ldDogJ1RLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1RvbmdhJyxcbiAgICBjYXBpdGFsOiBcIk51a3UnYWxvZmFcIixcbiAgICBmaXBzOiAnVE4nLFxuICAgIGlzbzI6ICdUTycsXG4gICAgaXNvMzogJ1RPTicsXG4gICAgaXNvTm86ICc3NzYnLFxuICAgIGludGVybmV0OiAnVE8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgICBjYXBpdGFsOiAnUG9ydC1vZi1TcGFpbicsXG4gICAgZmlwczogJ1REJyxcbiAgICBpc28yOiAnVFQnLFxuICAgIGlzbzM6ICdUVE8nLFxuICAgIGlzb05vOiAnNzgwJyxcbiAgICBpbnRlcm5ldDogJ1RUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUdW5pc2lhJyxcbiAgICBjYXBpdGFsOiAnVHVuaXMnLFxuICAgIGZpcHM6ICdUUycsXG4gICAgaXNvMjogJ1ROJyxcbiAgICBpc28zOiAnVFVOJyxcbiAgICBpc29ObzogJzc4OCcsXG4gICAgaW50ZXJuZXQ6ICdUTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1R1cmtleScsXG4gICAgY2FwaXRhbDogJ0Fua2FyYScsXG4gICAgZmlwczogJ1RVJyxcbiAgICBpc28yOiAnVFInLFxuICAgIGlzbzM6ICdUVVInLFxuICAgIGlzb05vOiAnNzkyJyxcbiAgICBpbnRlcm5ldDogJ1RSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVHVya21lbmlzdGFuJyxcbiAgICBjYXBpdGFsOiAnQXNoZ2FiYXQnLFxuICAgIGZpcHM6ICdUWCcsXG4gICAgaXNvMjogJ1RNJyxcbiAgICBpc28zOiAnVEtNJyxcbiAgICBpc29ObzogJzc5NScsXG4gICAgaW50ZXJuZXQ6ICdUTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0dyYW5kIFR1cmsnLFxuICAgIGZpcHM6ICdUSycsXG4gICAgaXNvMjogJ1RDJyxcbiAgICBpc28zOiAnVENBJyxcbiAgICBpc29ObzogJzc5NicsXG4gICAgaW50ZXJuZXQ6ICdUQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdUdXZhbHUnLFxuICAgIGNhcGl0YWw6ICdGdW5hZnV0aScsXG4gICAgZmlwczogJ1RWJyxcbiAgICBpc28yOiAnVFYnLFxuICAgIGlzbzM6ICdUVVYnLFxuICAgIGlzb05vOiAnNzk4JyxcbiAgICBpbnRlcm5ldDogJ1RWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1VnYW5kYScsXG4gICAgY2FwaXRhbDogJ0thbXBhbGEnLFxuICAgIGZpcHM6ICdVRycsXG4gICAgaXNvMjogJ1VHJyxcbiAgICBpc28zOiAnVUdBJyxcbiAgICBpc29ObzogJzgwMCcsXG4gICAgaW50ZXJuZXQ6ICdVRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdVa3JhaW5lJyxcbiAgICBjYXBpdGFsOiAnS2lldicsXG4gICAgZmlwczogJ1VQJyxcbiAgICBpc28yOiAnVUEnLFxuICAgIGlzbzM6ICdVS1InLFxuICAgIGlzb05vOiAnODA0JyxcbiAgICBpbnRlcm5ldDogJ1VBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxuICAgIGNhcGl0YWw6ICdBYnUgRGhhYmknLFxuICAgIGZpcHM6ICdUQycsXG4gICAgaXNvMjogJ0FFJyxcbiAgICBpc28zOiAnQVJFJyxcbiAgICBpc29ObzogJzc4NCcsXG4gICAgaW50ZXJuZXQ6ICdBRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXG4gICAgY2FwaXRhbDogJ0xvbmRvbicsXG4gICAgZmlwczogJ1VLJyxcbiAgICBpc28yOiAnR0InLFxuICAgIGlzbzM6ICdHQlInLFxuICAgIGlzb05vOiAnODI2JyxcbiAgICBpbnRlcm5ldDogJ1VLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICBjYXBpdGFsOiAnV2FzaGluZ3RvbiBEQycsXG4gICAgZmlwczogJ1VTJyxcbiAgICBpc28yOiAnVVMnLFxuICAgIGlzbzM6ICdVU0EnLFxuICAgIGlzb05vOiAnODQwJyxcbiAgICBpbnRlcm5ldDogJ1VTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdXYXNoaW5ndG9uIERDJyxcbiAgICBmaXBzOiAnJyxcbiAgICBpc28yOiAnVU0nLFxuICAgIGlzbzM6ICdVTUknLFxuICAgIGlzb05vOiAnNTgxJyxcbiAgICBpbnRlcm5ldDogJ1VTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVcnVndWF5JyxcbiAgICBjYXBpdGFsOiAnTW9udGV2aWRlbycsXG4gICAgZmlwczogJ1VZJyxcbiAgICBpc28yOiAnVVknLFxuICAgIGlzbzM6ICdVUlknLFxuICAgIGlzb05vOiAnODU4JyxcbiAgICBpbnRlcm5ldDogJ1VZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVXpiZWtpc3RhbicsXG4gICAgY2FwaXRhbDogJ1Rhc2hrZW50IChUb3Noa2VudCknLFxuICAgIGZpcHM6ICdVWicsXG4gICAgaXNvMjogJ1VaJyxcbiAgICBpc28zOiAnVVpCJyxcbiAgICBpc29ObzogJzg2MCcsXG4gICAgaW50ZXJuZXQ6ICdVWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdWYW51YXR1JyxcbiAgICBjYXBpdGFsOiAnUG9ydC1WaWxhJyxcbiAgICBmaXBzOiAnTkgnLFxuICAgIGlzbzI6ICdWVScsXG4gICAgaXNvMzogJ1ZVVCcsXG4gICAgaXNvTm86ICc1NDgnLFxuICAgIGludGVybmV0OiAnVlUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1ZlbmV6dWVsYScsXG4gICAgY2FwaXRhbDogJ0NhcmFjYXMnLFxuICAgIGZpcHM6ICdWRScsXG4gICAgaXNvMjogJ1ZFJyxcbiAgICBpc28zOiAnVkVOJyxcbiAgICBpc29ObzogJzg2MicsXG4gICAgaW50ZXJuZXQ6ICdVRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1ZpZXRuYW0nLFxuICAgIGNhcGl0YWw6ICdIYW5vaScsXG4gICAgZmlwczogJ1ZOJyxcbiAgICBpc28yOiAnVk4nLFxuICAgIGlzbzM6ICdWTk0nLFxuICAgIGlzb05vOiAnNzA0JyxcbiAgICBpbnRlcm5ldDogJ1ZOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVmlyZ2luIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdDaGFybG90dGUgQW1hbGllJyxcbiAgICBmaXBzOiAnVlEnLFxuICAgIGlzbzI6ICdWSScsXG4gICAgaXNvMzogJ1ZJUicsXG4gICAgaXNvTm86ICc4NTAnLFxuICAgIGludGVybmV0OiAnVkknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICAgIGNhcGl0YWw6ICdNYXRhLVV0dSAob24gSWxlIFV2ZWEpJyxcbiAgICBmaXBzOiAnV0YnLFxuICAgIGlzbzI6ICdXRicsXG4gICAgaXNvMzogJ1dMRicsXG4gICAgaXNvTm86ICc4NzYnLFxuICAgIGludGVybmV0OiAnV0YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgICBjYXBpdGFsOiAnbm9uZScsXG4gICAgZmlwczogJ1dJJyxcbiAgICBpc28yOiAnRUgnLFxuICAgIGlzbzM6ICdFU0gnLFxuICAgIGlzb05vOiAnNzMyJyxcbiAgICBpbnRlcm5ldDogJ0VIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1dlc3Rlcm4gU2Ftb2EnLFxuICAgIGNhcGl0YWw6ICdBcGlhJyxcbiAgICBmaXBzOiAnV1MnLFxuICAgIGlzbzI6ICdXUycsXG4gICAgaXNvMzogJ1dTTScsXG4gICAgaXNvTm86ICc4ODInLFxuICAgIGludGVybmV0OiAnV1MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdZZW1lbicsXG4gICAgY2FwaXRhbDogJ1NhbmFhJyxcbiAgICBmaXBzOiAnWU0nLFxuICAgIGlzbzI6ICdZRScsXG4gICAgaXNvMzogJ1lFTScsXG4gICAgaXNvTm86ICc4ODcnLFxuICAgIGludGVybmV0OiAnWUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28nLFxuICAgIGNhcGl0YWw6ICdLaW5zaGFzYScsXG4gICAgZmlwczogJ0NHJyxcbiAgICBpc28yOiAnQ0QnLFxuICAgIGlzbzM6ICdDT0QnLFxuICAgIGlzb05vOiAnMTgwJyxcbiAgICBpbnRlcm5ldDogJ1pSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdaYW1iaWEnLFxuICAgIGNhcGl0YWw6ICdMdXNha2EnLFxuICAgIGZpcHM6ICdaQScsXG4gICAgaXNvMjogJ1pNJyxcbiAgICBpc28zOiAnWk1CJyxcbiAgICBpc29ObzogJzg5NCcsXG4gICAgaW50ZXJuZXQ6ICdaTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnWmltYmFid2UnLFxuICAgIGNhcGl0YWw6ICdIYXJhcmUnLFxuICAgIGZpcHM6ICdaSScsXG4gICAgaXNvMjogJ1pXJyxcbiAgICBpc28zOiAnWldFJyxcbiAgICBpc29ObzogJzcxNicsXG4gICAgaW50ZXJuZXQ6ICdaVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0hvbmcgS29uZycsXG4gICAgY2FwaXRhbDogJ1ZpY3RvcmlhJyxcbiAgICBmaXBzOiAnSEsnLFxuICAgIGlzbzI6ICdISycsXG4gICAgaXNvMzogJ0hLRycsXG4gICAgaXNvTm86ICczNDQnLFxuICAgIGludGVybmV0OiAnSEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdNYWNhdScsXG4gICAgY2FwaXRhbDogJ01hY2F1JyxcbiAgICBmaXBzOiAnTUMnLFxuICAgIGlzbzI6ICdNTycsXG4gICAgaXNvMzogJ01BQycsXG4gICAgaXNvTm86ICc0NDYnLFxuICAgIGludGVybmV0OiAnTU8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbnRhcmN0aWNhJyxcbiAgICByZWdpb246ICdBbnRhcmN0aWNhJyxcbiAgICBjb3VudHJ5OiAnQW50YXJjdGljYScsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0FZJyxcbiAgICBpc28yOiAnQVEnLFxuICAgIGlzbzM6ICdBVEEnLFxuICAgIGlzb05vOiAnMTAnLFxuICAgIGludGVybmV0OiAnQVEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBdGxhbnRpYyBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGggQXRsYW50aWMgT2NlYW4nLFxuICAgIGNvdW50cnk6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnQlYnLFxuICAgIGlzbzI6ICdCVicsXG4gICAgaXNvMzogJ0JWVCcsXG4gICAgaXNvTm86ICc3NCcsXG4gICAgaW50ZXJuZXQ6ICdCVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdJTycsXG4gICAgaXNvMjogJ0lPJyxcbiAgICBpc28zOiAnSU9UJyxcbiAgICBpc29ObzogJzg2JyxcbiAgICBpbnRlcm5ldDogJ0lPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnSW5kaWFuIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdGcmVuY2ggU291dGhlcm4gYW5kIEFudGFyY3RpYyBMYW5kcycsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0ZTJyxcbiAgICBpc28yOiAnVEYnLFxuICAgIGlzbzM6ICdBVEYnLFxuICAgIGlzb05vOiAnMjYwJyxcbiAgICBpbnRlcm5ldDogJy0tJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnSW5kaWFuIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdITScsXG4gICAgaXNvMjogJ0hNJyxcbiAgICBpc28zOiAnSE1EJyxcbiAgICBpc29ObzogJzMzNCcsXG4gICAgaW50ZXJuZXQ6ICdITSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0F0bGFudGljIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aCBBdGxhbnRpYyBPY2VhbicsXG4gICAgY291bnRyeTogJ1NhaW50IEhlbGVuYScsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ1NIJyxcbiAgICBpc28yOiAnU0gnLFxuICAgIGlzbzM6ICdTSE4nLFxuICAgIGlzb05vOiAnNjU0JyxcbiAgICBpbnRlcm5ldDogJ1NIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXRsYW50aWMgT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEF0bGFudGljIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdTWCcsXG4gICAgaXNvMjogJ0dTJyxcbiAgICBpc28zOiAnU0dTJyxcbiAgICBpc29ObzogJzIzOScsXG4gICAgaW50ZXJuZXQ6ICdHUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdHdWVybnNleScsXG4gICAgY2FwaXRhbDogJ1NhaW50IFBldGVyIFBvcnQnLFxuICAgIGZpcHM6ICdHSycsXG4gICAgaXNvMjogJ0dHJyxcbiAgICBpc28zOiAnR0dZJyxcbiAgICBpc29ObzogJzgzMScsXG4gICAgaW50ZXJuZXQ6ICdHRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTZXJiaWEnLFxuICAgIGNhcGl0YWw6ICdCZWxncmFkZScsXG4gICAgZmlwczogJ1JJJyxcbiAgICBpc28yOiAnUlMnLFxuICAgIGlzbzM6ICdTUkInLFxuICAgIGlzb05vOiAnNjg4JyxcbiAgICBpbnRlcm5ldDogJ1JTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgQmFydGjDqWxlbXknLFxuICAgIGNhcGl0YWw6ICdHdXN0YXZpYScsXG4gICAgZmlwczogJ1RCJyxcbiAgICBpc28yOiAnQkwnLFxuICAgIGlzbzM6ICdCTE0nLFxuICAgIGlzb05vOiAnNjUyJyxcbiAgICBpbnRlcm5ldDogJ0JMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ01vbnRlbmVncm8nLFxuICAgIGNhcGl0YWw6ICdQb2Rnb3JpY2EnLFxuICAgIGZpcHM6ICdNSicsXG4gICAgaXNvMjogJ01FJyxcbiAgICBpc28zOiAnTU5FJyxcbiAgICBpc29ObzogJzQ5OScsXG4gICAgaW50ZXJuZXQ6ICdNRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdKZXJzZXknLFxuICAgIGNhcGl0YWw6ICdTYWludCBIZWxpZXInLFxuICAgIGZpcHM6ICdKRScsXG4gICAgaXNvMjogJ0pFJyxcbiAgICBpc28zOiAnSkVZJyxcbiAgICBpc29ObzogJzgzMicsXG4gICAgaW50ZXJuZXQ6ICdKRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0N1cmHDp2FvJyxcbiAgICBjYXBpdGFsOiAnV2lsbGVtc3RhZCcsXG4gICAgZmlwczogJ1VDJyxcbiAgICBpc28yOiAnQ1cnLFxuICAgIGlzbzM6ICdDVVcnLFxuICAgIGlzb05vOiAnNTMxJyxcbiAgICBpbnRlcm5ldDogJ0NXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgTWFydGluJyxcbiAgICBjYXBpdGFsOiAnTWFyaWdvdCcsXG4gICAgZmlwczogJ1JOJyxcbiAgICBpc28yOiAnTUYnLFxuICAgIGlzbzM6ICdNQUYnLFxuICAgIGlzb05vOiAnNjYzJyxcbiAgICBpbnRlcm5ldDogJ01GJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2ludCBNYWFydGVuJyxcbiAgICBjYXBpdGFsOiAnUGhpbGlwc2J1cmcnLFxuICAgIGZpcHM6ICdOTicsXG4gICAgaXNvMjogJ1NYJyxcbiAgICBpc28zOiAnU1hNJyxcbiAgICBpc29ObzogJzUzNCcsXG4gICAgaW50ZXJuZXQ6ICdTWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1RpbW9yLUxlc3RlJyxcbiAgICBjYXBpdGFsOiAnRGlsaScsXG4gICAgZmlwczogJ1RUJyxcbiAgICBpc28yOiAnVEwnLFxuICAgIGlzbzM6ICdUTFMnLFxuICAgIGlzb05vOiAnNjI2JyxcbiAgICBpbnRlcm5ldDogJ1RMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBTdWRhbicsXG4gICAgY2FwaXRhbDogJ0p1YmEnLFxuICAgIGZpcHM6ICdPRCcsXG4gICAgaXNvMjogJ1NTJyxcbiAgICBpc28zOiAnU1NEJyxcbiAgICBpc29ObzogJzcyOCcsXG4gICAgaW50ZXJuZXQ6ICdTUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnw4VsYW5kIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdNYXJpZWhhbW4nLFxuICAgIGZpcHM6ICdBWCcsXG4gICAgaXNvMjogJ0FYJyxcbiAgICBpc28zOiAnQUxBJyxcbiAgICBpc29ObzogJzI0OCcsXG4gICAgaW50ZXJuZXQ6ICdBWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0JvbmFpcmUnLFxuICAgIGNhcGl0YWw6ICdLcmFsZW5kaWprJyxcbiAgICBmaXBzOiAnQlEnLFxuICAgIGlzbzI6ICdCUScsXG4gICAgaXNvMzogJ0JFUycsXG4gICAgaXNvTm86ICc1MzUnLFxuICAgIGludGVybmV0OiAnQlEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUmVwdWJsaWMgb2YgS29zb3ZvJyxcbiAgICBjYXBpdGFsOiAnUHJpc3RpbmEnLFxuICAgIGZpcHM6ICdLVicsXG4gICAgaXNvMjogJ1hLJyxcbiAgICBpc28zOiAnVU5LJyxcbiAgICBpc29ObzogbnVsbCxcbiAgICBpbnRlcm5ldDogJ1hLJ1xuICB9LFxuXVxuXG5tb2R1bGUuZXhwb3J0cy5jb3VudHJpZXMgPSBjb3VudHJpZXNcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZS9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTtBQUMzRTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTtBQUMvRTs7O0VBR0U7QUFDRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTtBQUNGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7QUFDRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7QUFDRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTtBQUMvRTs7O0VBR0U7QUFDRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFO0FBQ0Y7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTtBQUNGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFO0FBQ0Y7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFO0FBQ0Y7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTtBQUNGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTtBQUNGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICAtLWxpZ2h0LWJsYWNrLWNvbG9yOiAjMzkzOTM5O1xcbiAgLS1zaGFkb3c6IDFweCAycHggNHB4IHJnYigwIDAgMCAvIDUxJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbn1cXG5cXG5bZm9yPVxcXCJjaXR5LW5hbWVcXFwiXSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICB3aWR0aDogMjlyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDMuNHJlbSA3cHggMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDI1JSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuW3R5cGU9XFxcImltYWdlXFxcIl0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiA3cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4uZXJyb3ItLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7IC8qIFNwZWNpZmllcyBob3cgYW4gZWxlbWVudCdzIGNvbnRlbnQgc2hvdWxkIGJsZW5kIHdpdGggaXRzIGRpcmVjdCBwYXJlbnQgYmFja2dyb3VuZC4gKi9cXG4gIHRleHQtc2hhZG93OiAwLjJweCAwIDAgY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiBNYWluICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uY29udGFpbmVyX19sb2dvQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgbGVmdDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGNvbG9yOiAjZmY4ZjMyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCBibGFjaztcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgbWFyZ2luOiAzcmVtIDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxufVxcblxcbi5jYXJkX19jb25kaXRpb24ge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcbi5jYXJkX19jaXR5IHtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5jYXJkX19kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMjIuNXJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRldGFpbHNfX2ZlZWxzTGlrZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzX19mZWVsc0xpa2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRkVFTFMgTElLRTogXFxcIjtcXG59XFxuXFxuLmRldGFpbHNfX3dpbmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiV0lORDogXFxcIjtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW0gNHJlbSAwLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDQwJSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0tYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyX19kYWlseUNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDAgMCAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYWlseUNhcmRfX21heCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY2Vsc2l1czo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZhaHJlbmhlaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jZWxzaXVzLS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZmFocmVuaGVpdC0tYmlnOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuOHJlbTtcXG4gIGxlZnQ6IDE3LjNyZW07XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuW2FsdD1cXFwiQ29uZGl0aW9uXFxcIl0ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4vKiBMb2FkaW5nIGNvbXBvbmVudCovXFxuLmNvbnRhaW5lcl9fbG9hZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MjUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmxvYWRlcl9fY29tcG9uZW50IHtcXG4gIGJvcmRlcjogMTZweCBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCByZ2IoOTIgMjEwIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogVGhlIHN3aXRjaCAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogNXB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7IC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA2ZTZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxnQkFBZ0IsRUFBRSwyQkFBMkI7RUFDN0MsNEJBQTRCO0VBQzVCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3R0FBd0c7RUFDeEcsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQzlDLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUEsV0FB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VCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVSxFQUFFLCtCQUErQjtFQUMzQyxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL25vcm1hbGl6ZS5jc3MpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8qIFRvIHR1cm4gMXJlbSBpbnRvIDEwcHggKi9cXG4gIC0tbGlnaHQtYmxhY2stY29sb3I6ICMzOTM5Mzk7XFxuICAtLXNoYWRvdzogMXB4IDJweCA0cHggcmdiKDAgMCAwIC8gNTElKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5wLFxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiAzcmVtIDRyZW07XFxufVxcblxcbltmb3I9XFxcImNpdHktbmFtZVxcXCJdIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNlYXJjaEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4jY2l0eS1uYW1lIHtcXG4gIHdpZHRoOiAyOXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHggMy40cmVtIDdweCAxcmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMjUlKTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcbi5lcnJvci0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1heC13aWR0aDogMzByZW07XFxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgLyogU3BlY2lmaWVzIGhvdyBhbiBlbGVtZW50J3MgY29udGVudCBzaG91bGQgYmxlbmQgd2l0aCBpdHMgZGlyZWN0IHBhcmVudCBiYWNrZ3JvdW5kLiAqL1xcbiAgdGV4dC1zaGFkb3c6IDAuMnB4IDAgMCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIE1haW4gKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5jb250YWluZXJfX2xvZ29Cb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICBsZWZ0OiAycmVtO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgY29sb3I6ICNmZjhmMzI7XFxuICB0ZXh0LXNoYWRvdzogMCAwIGJsYWNrO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1pbi13aWR0aDogNDByZW07XFxuICBtYXJnaW46IDNyZW0gNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG59XFxuXFxuLmNhcmRfX2NvbmRpdGlvbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuLmNhcmRfX2NpdHkge1xcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmNhcmRfX2RlZ3JlZXMge1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdG9wOiA0NSU7XFxuICBsZWZ0OiAyMi41cmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMi42cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGV0YWlsc19fZmVlbHNMaWtlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRldGFpbHNfX2ZlZWxzTGlrZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJGRUVMUyBMSUtFOiBcXFwiO1xcbn1cXG5cXG4uZGV0YWlsc19fd2luZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJXSU5EOiBcXFwiO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbSA0cmVtIDAuMnJlbTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXItLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgNDAlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAxNSUpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXJfX2RhaWx5Q2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMCAwIDEuNnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhaWx5Q2FyZF9fbWF4IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jZWxzaXVzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZmFocmVuaGVpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNlbHNpdXMtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5mYWhyZW5oZWl0LS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5bYWx0PVxcXCJDb25kaXRpb25cXFwiXSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi8qIExvYWRpbmcgY29tcG9uZW50Ki9cXG4uY29udGFpbmVyX19sb2FkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYyNSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9hZGVyX19jb21wb25lbnQge1xcbiAgYm9yZGVyOiAxNnB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHJnYig5MiAyMTAgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBUaGUgc3dpdGNoICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDsgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgd2lkdGg6IDE3cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBib3R0b206IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDZlNmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2R1bGVzL21vZGVsL21haW5Nb2RlbFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3L21haW5WaWV3XCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcblxuY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKTtcbmNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG1vZGVsLCB2aWV3KTtcblxuaWYgKHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xufVxuIl0sIm5hbWVzIjpbImxvb2t1cCIsInJlcXVpcmUiLCJDb250cm9sbGVyIiwibW9kZWwiLCJ2aWV3IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWFyY2hXZWF0aGVyIiwiY2hlY2tJbnB1dCIsIndpbmRvdyIsInNldEhvbWVQYWdlQmciLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJkZWdyZWVCaWciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVncmVlU21hbGwiLCJ3aW5kIiwibWFpbiIsInNwYW4iLCJzd2l0Y2hCdG4iLCJsb2FkRGl2IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlYXJjaEJ0biIsIkNoZWNrRW1wdHkiLCJnZXRFbGVtZW50cyIsInByZXZlbnREZWZhdWx0IiwidmFsaWRpdHkiLCJ2YWxpZCIsInNob3dFbXB0eUVycm9yIiwic2hvd0NvbnRlbnQiLCJnZXRHZW9Mb2NhdGlvbiIsImdlb0xvY2F0aW9uIiwicmVtb3ZlIiwic2hvd1Vua25vd25DaXR5RXJyb3IiLCJnZXRDdXJyZW50V2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiZ2V0RWlnaHREYXlzV2VhdGhlciIsImVpZ2h0RGF5c1dlYXRoZXIiLCJoYXNDaGlsZE5vZGVzIiwiZGVsZXRlQ29udGVudCIsImNoYW5nZVVuaXRzIiwiY3JlYXRlTWFpbkNhcmQiLCJjcmVhdGVFaWdodERheXNDYXJkIiwiY2hhbmdlQmFja2dyb3VuZCIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImZldGNoR2VvTG9jYXRpb24iLCJjb252ZXJ0Q291bnRyeU5hbWVUb0NvZGUiLCJpbnB1dEFycmF5Iiwic3BsaXQiLCJjaXR5TmFtZSIsImNvdW50cnkiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImNvdW50cnlOYW1lIiwiY2FwaXRhbGl6ZSIsInRyaW0iLCJieUNvdW50cnkiLCJjb3VudHJ5Q29kZSIsImlzbzIiLCJzdHIiLCJzcGxpdFN0ciIsInRvTG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiam9pbiIsImZldGNoQ3VycmVudFdlYXRoZXIiLCJsYXQiLCJsb24iLCJmZXRjaEVpZ2h0RGF5c1dlYXRoZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiY29udmVydFRvRmFocmVuaGVpdCIsImNvbnZlcnRUb01waCIsImNvbnZlcnRUb0NlbHNpdXMiLCJjb252ZXJ0VG9LbWgiLCJ0b2dnbGUiLCJlbGVtZW50IiwiZGVncmVlIiwidmFsTnVtIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJyb3VuZCIsInNwZWVkIiwidG9GaXhlZCIsIkVpZ2h0RGF5c0NhcmQiLCJkYXRhIiwibWF4VGVtcCIsIm1pblRlbXAiLCJpbWciLCJkYXkiLCJkYWlseSIsInRlbXAiLCJtYXgiLCJtaW4iLCJzcmMiLCJ3ZWF0aGVyIiwiaWNvbiIsImRheU9mV2VlayIsImdldERheU9mV2VlayIsIkRhdGUiLCJkdCIsImdldERheSIsIm51bWJlciIsIk1haW5DYXJkIiwiY29uZGl0aW9uIiwiY2l0eSIsImRlZ3JlZXMiLCJmZWVsc0xpa2UiLCJodW1pZGl0eSIsImNhcmRJbmZvIiwiY2FyZERhdGEiLCJNb2RlbCIsImtleSIsIm1ldHJpYyIsImltcGVyaWFsIiwic2VhcmNoVGV4dCIsIlVSTCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGVzY3JpcHRpb24iLCJyZWdpb25OYW1lc0luRW5nbGlzaCIsIkludGwiLCJEaXNwbGF5TmFtZXMiLCJ0eXBlIiwibmFtZSIsIm9mIiwic3lzIiwiZmVlbHNfbGlrZSIsImNvbnZlcnRGcm9tTXMiLCJtYWluQ2FyZCIsImdlbmVyYXRlTWFpbkNhcmQiLCJmaWxsTWFpbkNhcmQiLCJtYWluQ2FyZEl0ZW0iLCJlaWdodERheXNDYXJkIiwiZ2VuZXJhdGVFaWdodERheXNDYXJkIiwiZmlsbEVpZ2h0RGF5c0NhcmQiLCJlaWdodERheXNDYXJkSXRlbSIsImNsZWFyU2t5RGF5IiwiY2xlYXJTa3lOaWdodCIsImZld0Nsb3Vkc0RheSIsImZld0Nsb3Vkc05pZ2h0Iiwic2NhdHRlcmVkQ2xvdWRzRGF5Iiwic2NhdHRlcmVkQ2xvdWRzTmlnaHQiLCJicm9rZW5DbG91ZHNEYXkiLCJicm9rZW5DbG91ZHNOaWdodCIsInNob3dlclJhaW5EYXkiLCJzaG93ZXJSYWluTmlnaHQiLCJyYWluRGF5IiwicmFpbk5pZ2h0IiwidGh1bmRlcnN0b3JtRGF5IiwidGh1bmRlcnN0b3JtTmlnaHQiLCJzbm93RGF5Iiwic25vd05pZ2h0IiwibWlzdERheSIsIm1pc3ROaWdodCIsImljb25Db2RlIiwic2V0RGFpbHlDb250YWluZXJCRyIsImNoYW5nZU1haW5CZyIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJjb2xvciIsImFkZCIsImNoYW5nZUJnIiwiaW1hZ2UwIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiaW1hZ2UzIiwiaW1hZ2U0IiwiaW1hZ2U1IiwiVmlldyIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwiaW1hZ2VzIiwicG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsb25lIiwiY29udGVudCIsImNsb25lTm9kZSIsImFwcGVuZCIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsImNvbnRyb2xsZXIiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==