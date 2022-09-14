/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/controller/mainController.js":
/*!**************************************************!*\
  !*** ./src/modules/controller/mainController.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    document.querySelector(".switch input").addEventListener("click", function (e) {
      return _this.test(e);
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
      return {
        input: input,
        degreeBig: degreeBig,
        degreeSmall: degreeSmall,
        wind: wind,
        main: main,
        span: span
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
        var weatherData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.t0 = !this.getElements().input.validity.valid;
                _context.next = _context.t0 === true ? 4 : 5;
                break;

              case 4:
                return _context.abrupt("return", this.view.showEmptyError(this.getElements().span));

              case 5:
                _context.next = 7;
                return this.getWeatherData();

              case 7:
                weatherData = _context.sent;

                if (typeof weatherData === "undefined") {
                  console.log("test");
                }

                if (this.getElements().main.hasChildNodes()) this.view.deleteForecast(this.getElements().main);
                this.view.showForecast(0);
                this.model.createMainCard(weatherData.currentWeather, weatherData.geoLocation);
                this.view.showForecast(1);
                this.model.createEightDaysCard(weatherData.eightDaysWeather);
                this.view.changeBackground(weatherData.currentWeather);

              case 15:
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
    key: "getWeatherData",
    value: function () {
      var _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var geoLocation, currentWeather, eightDaysWeather;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.getGeoCode(this.getElements().input.value);

              case 2:
                geoLocation = _context2.sent;
                _context2.next = 5;
                return this.model.getCurrentWeather(geoLocation.lat, geoLocation.lon);

              case 5:
                currentWeather = _context2.sent;
                _context2.next = 8;
                return this.model.getEightDaysWeather(geoLocation.lat, geoLocation.lon);

              case 8:
                eightDaysWeather = _context2.sent;
                return _context2.abrupt("return", {
                  geoLocation: geoLocation,
                  currentWeather: currentWeather,
                  eightDaysWeather: eightDaysWeather
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWeatherData() {
        return _getWeatherData.apply(this, arguments);
      }

      return getWeatherData;
    }()
  }, {
    key: "test",
    value: function test() {
      if (this.getElements().degreeBig.classList.contains("celsius--big")) {
        this.getElements().degreeBig.textContent = this.convertToFahrenheit(this.getElements().degreeBig.textContent);
        this.getElements().wind.textContent = this.convertToMph(this.getElements().wind.textContent) + " mph";
      }

      if (this.getElements().degreeBig.classList.contains("fahrenheit--big")) {
        this.getElements().degreeBig.textContent = this.convertToCelsius(this.getElements().degreeBig.textContent);
        this.getElements().wind.textContent = this.convertToKmh(this.getElements().wind.textContent) + " km/h";
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
        var dayOfWeek = this.getDayOfWeek(new Date(this.data.daily[i].dt * 1000).getDay()); //Turns Unix Timestamp to week day

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
    key: "getGeoCode",
    value: function () {
      var _getGeoCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchText) {
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
                console.log(_context.t0, "Refresh page and try again later");

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function getGeoCode(_x) {
        return _getGeoCode.apply(this, arguments);
      }

      return getGeoCode;
    }()
  }, {
    key: "getCurrentWeather",
    value: function () {
      var _getCurrentWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(lat, lon) {
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

      function getCurrentWeather(_x2, _x3) {
        return _getCurrentWeather.apply(this, arguments);
      }

      return getCurrentWeather;
    }()
  }, {
    key: "getEightDaysWeather",
    value: function () {
      var _getEightDaysWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(lat, lon) {
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

      function getEightDaysWeather(_x4, _x5) {
        return _getEightDaysWeather.apply(this, arguments);
      }

      return getEightDaysWeather;
    }()
  }, {
    key: "createMainCard",
    value: function createMainCard(currentWeather, geoLocation) {
      var condition = currentWeather.weather[0].description;
      var regionNamesInEnglish = new Intl.DisplayNames(["en"], {
        type: "region"
      }); // To convert CA to Canada, per example

      var city = geoLocation.name + ", " + regionNamesInEnglish.of(currentWeather.sys.country);
      var degrees = Math.round(currentWeather.main.temp);
      var feelsLike = Math.round(currentWeather.main.feels_like);
      var wind = this.convertFromMs(currentWeather.wind.speed) + " km/h";
      var humidity = "HUMIDITY: " + currentWeather.main.humidity + "%";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_clear_sky_grooveland_designs_zjoydJb17mE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg */ "./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg");
/* harmony import */ var _images_clear_sky_vince_sanga_LBQ1RVn5dfM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/clear-sky/vince-sanga-LBQ1RVn5dfM-unsplash.jpg */ "./src/images/clear-sky/vince-sanga-LBQ1RVn5dfM-unsplash.jpg");
/* harmony import */ var _images_few_clouds_aziz_ayad_NJDyFoXDAus_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg */ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg");
/* harmony import */ var _images_few_clouds_kym_mackinnon_wNSWuIjkD1I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/few-clouds/kym-mackinnon-wNSWuIjkD1I-unsplash.jpg */ "./src/images/few-clouds/kym-mackinnon-wNSWuIjkD1I-unsplash.jpg");
/* harmony import */ var _images_scattered_clouds_nick_fewings_ZtDiJzokZi0_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg */ "./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg");
/* harmony import */ var _images_scattered_clouds_herrmann_stamm_4vmjOLf9edk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg */ "./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg");
/* harmony import */ var _images_broken_clouds_dave_hoefler_llEjCH71E9o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/broken-clouds/dave-hoefler-llEjCH71E9o-unsplash.jpg */ "./src/images/broken-clouds/dave-hoefler-llEjCH71E9o-unsplash.jpg");
/* harmony import */ var _images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg */ "./src/images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg");
/* harmony import */ var _images_shower_rain_ed_leszczynskl_R3ofE_8DyLk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/shower-rain/ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg */ "./src/images/shower-rain/ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg");
/* harmony import */ var _images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg */ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg");
/* harmony import */ var _images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg */ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg");
/* harmony import */ var _images_rain_anna_atkins_rNBaaxyeWWM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/rain/anna-atkins-rNBaaxyeWWM-unsplash.jpg */ "./src/images/rain/anna-atkins-rNBaaxyeWWM-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg */ "./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_eugene_triguba_Cm5zI68Wdew_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/thunderstorm/eugene-triguba-Cm5zI68Wdew-unsplash.jpg */ "./src/images/thunderstorm/eugene-triguba-Cm5zI68Wdew-unsplash.jpg");
/* harmony import */ var _images_snow_nathan_fertig_o_Nw3H21Js_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg */ "./src/images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg");
/* harmony import */ var _images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg */ "./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg");
/* harmony import */ var _images_mist_chris_leipelt_kWd5ER2XpSg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg */ "./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg");
/* harmony import */ var _images_mist_daniil_onischenko_3C6DIGvZfEw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg */ "./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg");


















/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(iconCode) {
  switch (iconCode) {
    case "01d":
      setDailyContainerBG("dailyContainer--black");
      black;
      white;
      return changeMainBg(_images_clear_sky_grooveland_designs_zjoydJb17mE_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_0__);

    case "01n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_clear_sky_vince_sanga_LBQ1RVn5dfM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__);

    case "02d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_few_clouds_aziz_ayad_NJDyFoXDAus_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__);

    case "02n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_few_clouds_kym_mackinnon_wNSWuIjkD1I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__);

    case "03d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_scattered_clouds_nick_fewings_ZtDiJzokZi0_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__);

    case "03n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_scattered_clouds_herrmann_stamm_4vmjOLf9edk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__);

    case "04d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_broken_clouds_dave_hoefler_llEjCH71E9o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__);

    case "04n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__);

    case "09d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_shower_rain_ed_leszczynskl_R3ofE_8DyLk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_8__);

    case "09n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__);

    case "10d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_10__);

    case "10n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_rain_anna_atkins_rNBaaxyeWWM_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__);

    case "11d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__);

    case "11n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_thunderstorm_eugene_triguba_Cm5zI68Wdew_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__);

    case "13d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_snow_nathan_fertig_o_Nw3H21Js_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__);

    case "13n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_15__);

    case "50d":
      setDailyContainerBG("dailyContainer--black");
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
  console.log(document.querySelectorAll(".dailyContainer"));
  document.querySelectorAll(".dailyContainer")[0].classList.add(color);
}

/***/ }),

/***/ "./src/modules/view/mainView.js":
/*!**************************************!*\
  !*** ./src/modules/view/mainView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeBg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeBg */ "./src/modules/view/changeBg.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "showForecast",
    value: function showForecast(position) {
      var temp = document.getElementsByTagName("template")[position];
      var clone = temp.content.cloneNode(true);
      document.getElementsByClassName("container")[0].append(clone);
    }
  }, {
    key: "deleteForecast",
    value: function deleteForecast(parent) {
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
    key: "CheckEmpty",
    value: function CheckEmpty(input, span) {
      if (input.validity.valid) {
        span.textContent = ""; // Reset to initial state

        span.className = "form__notFound";
      } else {
        this.showEmptyError(input, span);
      }
    }
  }]);

  return View;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style/normalize.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style/normalize.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n  /* background-color: #393939; */\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 22%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The switcher */\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: var(--light-black-color);\n}\n\ninput:checked + .slider {\n  background-color: rgb(255 95 95);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px rgb(255 95 95);\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n#city-name {\n  width: 28rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(./normalize.css);\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap\");\n\n:root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n  /* background-color: #393939; */\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 22%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The switcher */\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: var(--light-black-color);\n}\n\ninput:checked + .slider {\n  background-color: rgb(255 95 95);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px rgb(255 95 95);\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n#city-name {\n  width: 28rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

module.exports = __webpack_require__.p + "anandu-vinod-pbxwxwfI0B4-unsplash.jpg";

/***/ }),

/***/ "./src/images/broken-clouds/dave-hoefler-llEjCH71E9o-unsplash.jpg":
/*!************************************************************************!*\
  !*** ./src/images/broken-clouds/dave-hoefler-llEjCH71E9o-unsplash.jpg ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dave-hoefler-llEjCH71E9o-unsplash.jpg";

/***/ }),

/***/ "./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg":
/*!***************************************************************************!*\
  !*** ./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grooveland-designs-zjoydJb17mE-unsplash.jpeg";

/***/ }),

/***/ "./src/images/clear-sky/vince-sanga-LBQ1RVn5dfM-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/images/clear-sky/vince-sanga-LBQ1RVn5dfM-unsplash.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "vince-sanga-LBQ1RVn5dfM-unsplash.jpg";

/***/ }),

/***/ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aziz-ayad-NJDyFoXDAus-unsplash.jpeg";

/***/ }),

/***/ "./src/images/few-clouds/kym-mackinnon-wNSWuIjkD1I-unsplash.jpg":
/*!**********************************************************************!*\
  !*** ./src/images/few-clouds/kym-mackinnon-wNSWuIjkD1I-unsplash.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kym-mackinnon-wNSWuIjkD1I-unsplash.jpg";

/***/ }),

/***/ "./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg":
/*!*****************************************************************!*\
  !*** ./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chris-leipelt-kWd5ER2XpSg-unsplash.jpeg";

/***/ }),

/***/ "./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg":
/*!*********************************************************************!*\
  !*** ./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg";

/***/ }),

/***/ "./src/images/rain/anna-atkins-rNBaaxyeWWM-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/rain/anna-atkins-rNBaaxyeWWM-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "anna-atkins-rNBaaxyeWWM-unsplash.jpg";

/***/ }),

/***/ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg";

/***/ }),

/***/ "./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg":
/*!******************************************************************************!*\
  !*** ./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "herrmann-stamm-4vmjOLf9edk-unsplash.jpeg";

/***/ }),

/***/ "./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg":
/*!****************************************************************************!*\
  !*** ./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nick-fewings-ZtDiJzokZi0-unsplash.jpeg";

/***/ }),

/***/ "./src/images/shower-rain/ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg":
/*!*************************************************************************!*\
  !*** ./src/images/shower-rain/ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg";

/***/ }),

/***/ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg":
/*!**********************************************************************!*\
  !*** ./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kyle-szegedi-JSmc0GmSV1o-unsplash.jpg";

/***/ }),

/***/ "./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "alex-teplitz-I-Tg2H84mos-unsplash.jpg";

/***/ }),

/***/ "./src/images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nathan-fertig-_o_Nw3H21Js-unsplash.jpg";

/***/ }),

/***/ "./src/images/thunderstorm/eugene-triguba-Cm5zI68Wdew-unsplash.jpg":
/*!*************************************************************************!*\
  !*** ./src/images/thunderstorm/eugene-triguba-Cm5zI68Wdew-unsplash.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eugene-triguba-Cm5zI68Wdew-unsplash.jpg";

/***/ }),

/***/ "./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg":
/*!*************************************************************************!*\
  !*** ./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/style/style.css */ "./src/modules/style/style.css");
/* harmony import */ var _modules_model_mainModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/model/mainModel */ "./src/modules/model/mainModel.js");
/* harmony import */ var _modules_view_mainView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view/mainView */ "./src/modules/view/mainView.js");
/* harmony import */ var _modules_controller_mainController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controller/mainController */ "./src/modules/controller/mainController.js");




var model = new _modules_model_mainModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
var view = new _modules_view_mainView__WEBPACK_IMPORTED_MODULE_2__["default"](); // eslint-disable-next-line no-unused-vars

var controller = new _modules_controller_mainController__WEBPACK_IMPORTED_MODULE_3__["default"](model, view);

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDRyxRQUFQLENBQWdCQyxJQUF4RDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL21vZGVsL0VpZ2h0RGF5c0NhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvbWFpbk1vZGVsLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcvY2hhbmdlQmcuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy9tYWluVmlldy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zdHlsZS9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzcz83NGQwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHRoaXMuc2VhcmNoV2VhdGhlcihlKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gdGhpcy5jaGVja0lucHV0KCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3dpdGNoIGlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy50ZXN0KGUpKTtcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlZ3JlZUJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZF9fZGVncmVlc1wiKVswXTtcbiAgICBjb25zdCBkZWdyZWVTbWFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlsc19fZmVlbHNMaWtlLCAuZGFpbHlDYXJkX19tYXgsIC5kYWlseUNhcmRfX21pblwiKTtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzX193aW5kXCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19ub3RGb3VuZFwiKVswXTtcblxuICAgIHJldHVybiB7IGlucHV0LCBkZWdyZWVCaWcsIGRlZ3JlZVNtYWxsLCB3aW5kLCBtYWluLCBzcGFuIH07XG4gIH1cblxuICBjaGVja0lucHV0KCkge1xuICAgIHRoaXMudmlldy5DaGVja0VtcHR5KHRoaXMuZ2V0RWxlbWVudHMoKS5pbnB1dCwgdGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICB9XG5cbiAgYXN5bmMgc2VhcmNoV2VhdGhlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoIXRoaXMuZ2V0RWxlbWVudHMoKS5pbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4gdGhpcy52aWV3LnNob3dFbXB0eUVycm9yKHRoaXMuZ2V0RWxlbWVudHMoKS5zcGFuKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB0aGlzLmdldFdlYXRoZXJEYXRhKCk7XG4gICAgaWYgKHR5cGVvZiB3ZWF0aGVyRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRFbGVtZW50cygpLm1haW4uaGFzQ2hpbGROb2RlcygpKSB0aGlzLnZpZXcuZGVsZXRlRm9yZWNhc3QodGhpcy5nZXRFbGVtZW50cygpLm1haW4pO1xuICAgIHRoaXMudmlldy5zaG93Rm9yZWNhc3QoMCk7XG4gICAgdGhpcy5tb2RlbC5jcmVhdGVNYWluQ2FyZCh3ZWF0aGVyRGF0YS5jdXJyZW50V2VhdGhlciwgd2VhdGhlckRhdGEuZ2VvTG9jYXRpb24pO1xuICAgIHRoaXMudmlldy5zaG93Rm9yZWNhc3QoMSk7XG4gICAgdGhpcy5tb2RlbC5jcmVhdGVFaWdodERheXNDYXJkKHdlYXRoZXJEYXRhLmVpZ2h0RGF5c1dlYXRoZXIpO1xuICAgIHRoaXMudmlldy5jaGFuZ2VCYWNrZ3JvdW5kKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIC8vc3BsaXQgaW4gdGhyZWUgZnVuY3Rpb25zXG4gICAgY29uc3QgZ2VvTG9jYXRpb24gPSBhd2FpdCB0aGlzLm1vZGVsLmdldEdlb0NvZGUodGhpcy5nZXRFbGVtZW50cygpLmlucHV0LnZhbHVlKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHRoaXMubW9kZWwuZ2V0Q3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24ubGF0LCBnZW9Mb2NhdGlvbi5sb24pO1xuICAgIGNvbnN0IGVpZ2h0RGF5c1dlYXRoZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmdldEVpZ2h0RGF5c1dlYXRoZXIoZ2VvTG9jYXRpb24ubGF0LCBnZW9Mb2NhdGlvbi5sb24pO1xuXG4gICAgcmV0dXJuIHsgZ2VvTG9jYXRpb24sIGN1cnJlbnRXZWF0aGVyLCBlaWdodERheXNXZWF0aGVyIH07XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC5jb250YWlucyhcImNlbHNpdXMtLWJpZ1wiKSkge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFRvRmFocmVuaGVpdCh0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50KTtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS53aW5kLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9NcGgodGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQpICsgXCIgbXBoXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC5jb250YWlucyhcImZhaHJlbmhlaXQtLWJpZ1wiKSkge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFRvQ2Vsc2l1cyh0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50KTtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS53aW5kLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9LbWgodGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQpICsgXCIga20vaFwiO1xuICAgIH1cbiAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC50b2dnbGUoXCJjZWxzaXVzLS1iaWdcIik7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLmRlZ3JlZUJpZy5jbGFzc0xpc3QudG9nZ2xlKFwiZmFocmVuaGVpdC0tYmlnXCIpO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlU21hbGwpIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbHNpdXNcIikpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ZhaHJlbmhlaXQoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2Vsc2l1c1wiKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZhaHJlbmhlaXRcIik7XG4gICAgfVxuICB9XG4gIGNvbnZlcnRUb0NlbHNpdXMoZGVncmVlKSB7XG4gICAgY29uc3QgdmFsTnVtID0gcGFyc2VGbG9hdChkZWdyZWUpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCh2YWxOdW0gLSAzMikgLyAxLjgpO1xuICB9XG4gIGNvbnZlcnRUb0ZhaHJlbmhlaXQoZGVncmVlKSB7XG4gICAgY29uc3QgdmFsTnVtID0gcGFyc2VGbG9hdChkZWdyZWUpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbE51bSAqIDEuOCArIDMyKTtcbiAgfVxuICBjb252ZXJ0VG9LbWgoc3BlZWQpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KHNwZWVkKTtcbiAgICByZXR1cm4gKHZhbE51bSAqIDEuNjA5KS50b0ZpeGVkKDIpO1xuICB9XG4gIGNvbnZlcnRUb01waChzcGVlZCkge1xuICAgIGNvbnN0IHZhbE51bSA9IHBhcnNlRmxvYXQoc3BlZWQpO1xuICAgIHJldHVybiAodmFsTnVtIC8gMS42MDkpLnRvRml4ZWQoMik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iLCJjbGFzcyBFaWdodERheXNDYXJkIHtcbiAgY29uc3RydWN0b3IoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIHRoaXMuZGF0YSA9IGVpZ2h0RGF5c1dlYXRoZXI7XG4gIH1cblxuICBmaWxsRWlnaHREYXlzQ2FyZCgpIHtcbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseUNhcmRfX21heFwiKTtcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseUNhcmRfX21pblwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q29udGFpbmVyIGltZ1wiKTtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDNcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEuZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1heFRlbXBbaV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYWlseVtpXS50ZW1wLm1heCk7XG4gICAgICBtaW5UZW1wW2ldLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh0aGlzLmRhdGEuZGFpbHlbaV0udGVtcC5taW4pO1xuICAgICAgaW1nW2ldLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3RoaXMuZGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICBjb25zdCBkYXlPZldlZWsgPSB0aGlzLmdldERheU9mV2VlayhuZXcgRGF0ZSh0aGlzLmRhdGEuZGFpbHlbaV0uZHQgKiAxMDAwKS5nZXREYXkoKSk7IC8vVHVybnMgVW5peCBUaW1lc3RhbXAgdG8gd2VlayBkYXlcbiAgICAgIGRheVtpXS50ZXh0Q29udGVudCA9IGRheU9mV2VlaztcbiAgICB9XG4gIH1cbiAgZ2V0RGF5T2ZXZWVrKG51bWJlcikge1xuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIlN1bmRheVwiO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gXCJNb25kYXlcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFwiVHVlc2RheVwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCJXZWRuZXNkYXlcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIFwiVGh1cnNkYXlcIjtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBcIlNhdHVyZGF5XCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVpZ2h0RGF5c0NhcmQ7XG4iLCJjbGFzcyBNYWluQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy5kZWdyZWVzID0gZGVncmVlcztcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGZlZWxzTGlrZTtcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxuXG4gIGZpbGxNYWluQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZCBwXCIpO1xuICAgIGNvbnN0IGNhcmREYXRhID0gW3RoaXMuY29uZGl0aW9uLCB0aGlzLmNpdHksIHRoaXMuZGVncmVlcywgdGhpcy5mZWVsc0xpa2UsIHRoaXMud2luZCwgdGhpcy5odW1pZGl0eV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkSW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgY2FyZEluZm9baV0udGV4dENvbnRlbnQgPSBjYXJkRGF0YVtpXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNhcmQ7XG4iLCJpbXBvcnQgTWFpbkNhcmQgZnJvbSBcIi4vbWFpbkNhcmRcIjtcbmltcG9ydCBFaWdodERheXNDYXJkIGZyb20gXCIuL0VpZ2h0RGF5c0NhcmRcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmtleSA9IFwiOTA3MjBmNDIyYmI1Y2Y3NGY5MWJlNzYxMDFmNDhmNTBcIjtcbiAgICB0aGlzLm1ldHJpYyA9IFwibWV0cmljXCI7XG4gICAgdGhpcy5pbXBlcmlhbCA9IFwiaW1wZXJpYWxcIjtcbiAgfVxuXG4gIGFzeW5jIGdldEdlb0NvZGUoc2VhcmNoVGV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBVUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaFRleHR9JmFwcGlkPSR7dGhpcy5rZXl9YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YVswXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJSZWZyZXNoIHBhZ2UgYW5kIHRyeSBhZ2FpbiBsYXRlclwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRDdXJyZW50V2VhdGhlcihsYXQsIGxvbikge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHt0aGlzLmtleX0mdW5pdHM9bWV0cmljYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgZ2V0RWlnaHREYXlzV2VhdGhlcihsYXQsIGxvbikge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1ob3VybHksbWludXRlbHksYWxlcnRzJnVuaXRzPW1ldHJpYyZhcHBpZD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY3JlYXRlTWFpbkNhcmQoY3VycmVudFdlYXRoZXIsIGdlb0xvY2F0aW9uKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCByZWdpb25OYW1lc0luRW5nbGlzaCA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pOyAvLyBUbyBjb252ZXJ0IENBIHRvIENhbmFkYSwgcGVyIGV4YW1wbGVcbiAgICBjb25zdCBjaXR5ID0gZ2VvTG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlZ2lvbk5hbWVzSW5FbmdsaXNoLm9mKGN1cnJlbnRXZWF0aGVyLnN5cy5jb3VudHJ5KTtcbiAgICBjb25zdCBkZWdyZWVzID0gTWF0aC5yb3VuZChjdXJyZW50V2VhdGhlci5tYWluLnRlbXApO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjb25zdCB3aW5kID0gdGhpcy5jb252ZXJ0RnJvbU1zKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpICsgXCIga20vaFwiO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gXCJIVU1JRElUWTogXCIgKyBjdXJyZW50V2VhdGhlci5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgY29uc3QgbWFpbkNhcmQgPSB0aGlzLmdlbmVyYXRlTWFpbkNhcmQoY29uZGl0aW9uLCBjaXR5LCBkZWdyZWVzLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KTtcbiAgICBtYWluQ2FyZC5maWxsTWFpbkNhcmQoKTtcbiAgfVxuXG4gIGNvbnZlcnRGcm9tTXMoc3BlZWQpIHtcbiAgICByZXR1cm4gKHNwZWVkICogMy42KS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgZ2VuZXJhdGVNYWluQ2FyZChjb25kaXRpb24sIGNpdHksIGRlZ3JlZXMsIGZlZWxzTGlrZSwgd2luZCwgaHVtaWRpdHkpIHtcbiAgICBsZXQgbWFpbkNhcmRJdGVtID0gbmV3IE1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgcmV0dXJuIG1haW5DYXJkSXRlbTtcbiAgfVxuXG4gIGNyZWF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmQgPSB0aGlzLmdlbmVyYXRlRWlnaHREYXlzQ2FyZChlaWdodERheXNXZWF0aGVyKTtcbiAgICBlaWdodERheXNDYXJkLmZpbGxFaWdodERheXNDYXJkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGxldCBlaWdodERheXNDYXJkSXRlbSA9IG5ldyBFaWdodERheXNDYXJkKGVpZ2h0RGF5c1dlYXRoZXIpO1xuICAgIHJldHVybiBlaWdodERheXNDYXJkSXRlbTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCBjbGVhclNreURheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NsZWFyLXNreS9ncm9vdmVsYW5kLWRlc2lnbnMtempveWRKYjE3bUUtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGNsZWFyU2t5TmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9jbGVhci1za3kvdmluY2Utc2FuZ2EtTEJRMVJWbjVkZk0tdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgZmV3Q2xvdWRzRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9heml6LWF5YWQtTkpEeUZvWERBdXMtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGZld0Nsb3Vkc05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvZmV3LWNsb3Vkcy9reW0tbWFja2lubm9uLXdOU1d1SWprRDFJLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc0RheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NjYXR0ZXJlZC1jbG91ZHMvbmljay1mZXdpbmdzLVp0RGlKem9rWmkwLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBzY2F0dGVyZWRDbG91ZHNOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3NjYXR0ZXJlZC1jbG91ZHMvaGVycm1hbm4tc3RhbW0tNHZtak9MZjllZGstdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jyb2tlbi1jbG91ZHMvZGF2ZS1ob2VmbGVyLWxsRWpDSDcxRTlvLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvYnJva2VuLWNsb3Vkcy9hbmFuZHUtdmlub2QtcGJ4d3h3ZkkwQjQtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgc2hvd2VyUmFpbkRheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nob3dlci1yYWluL2VkLWxlc3pjenluc2tsLVIzb2ZFLThEeUxrLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBzaG93ZXJSYWluTmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9zaG93ZXItcmFpbi9reWxlLXN6ZWdlZGktSlNtYzBHbVNWMW8tdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgcmFpbkRheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaW4vc2ltb24ta3V6bmV0c292LWlnUXgzRVRrS1pZLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCByYWluTmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9yYWluL2FubmEtYXRraW5zLXJOQmFheHllV1dNLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHRodW5kZXJzdG9ybURheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RodW5kZXJzdG9ybS9yYXljaGVsLXNhbm5lci1MQ3N3RkNueUU2WS11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCB0aHVuZGVyc3Rvcm1OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RodW5kZXJzdG9ybS9ldWdlbmUtdHJpZ3ViYS1DbTV6STY4V2Rldy11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBzbm93RGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvc25vdy9uYXRoYW4tZmVydGlnLV9vX053M0gyMUpzLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nub3cvYWxleC10ZXBsaXR6LUktVGcySDg0bW9zLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IG1pc3REYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9taXN0L2NocmlzLWxlaXBlbHQta1dkNUVSMlhwU2ctdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL21pc3QvZGFuaWlsLW9uaXNjaGVua28tM0M2RElHdlpmRXctdW5zcGxhc2guanBlZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWNvbkNvZGUpIHtcbiAgc3dpdGNoIChpY29uQ29kZSkge1xuICAgIGNhc2UgXCIwMWRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICBibGFjaztcbiAgICAgIHdoaXRlO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhjbGVhclNreURheSk7XG4gICAgY2FzZSBcIjAxblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoY2xlYXJTa3lOaWdodCk7XG4gICAgY2FzZSBcIjAyZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoZmV3Q2xvdWRzRGF5KTtcbiAgICBjYXNlIFwiMDJuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhmZXdDbG91ZHNOaWdodCk7XG4gICAgY2FzZSBcIjAzZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc2NhdHRlcmVkQ2xvdWRzRGF5KTtcbiAgICBjYXNlIFwiMDNuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzY2F0dGVyZWRDbG91ZHNOaWdodCk7XG4gICAgY2FzZSBcIjA0ZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoYnJva2VuQ2xvdWRzRGF5KTtcbiAgICBjYXNlIFwiMDRuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhicm9rZW5DbG91ZHNOaWdodCk7XG4gICAgY2FzZSBcIjA5ZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc2hvd2VyUmFpbkRheSk7XG4gICAgY2FzZSBcIjA5blwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc2hvd2VyUmFpbk5pZ2h0KTtcbiAgICBjYXNlIFwiMTBkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhyYWluRGF5KTtcbiAgICBjYXNlIFwiMTBuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhyYWluTmlnaHQpO1xuICAgIGNhc2UgXCIxMWRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHRodW5kZXJzdG9ybURheSk7XG4gICAgY2FzZSBcIjExblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcodGh1bmRlcnN0b3JtTmlnaHQpO1xuICAgIGNhc2UgXCIxM2RcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNub3dEYXkpO1xuICAgIGNhc2UgXCIxM25cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNub3dOaWdodCk7XG4gICAgY2FzZSBcIjUwZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcobWlzdERheSk7XG4gICAgY2FzZSBcIjUwblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcobWlzdE5pZ2h0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNYWluQmcoaW1hZ2UpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltYWdlfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xufVxuXG5mdW5jdGlvbiBzZXREYWlseUNvbnRhaW5lckJHKGNvbG9yKSB7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlDb250YWluZXJcIikpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q29udGFpbmVyXCIpWzBdLmNsYXNzTGlzdC5hZGQoY29sb3IpO1xufVxuIiwiaW1wb3J0IGNoYW5nZUJnIGZyb20gXCIuL2NoYW5nZUJnXCI7XG5cbmNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2hvd0ZvcmVjYXN0KHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGVtcGxhdGVcIilbcG9zaXRpb25dO1xuICAgIGNvbnN0IGNsb25lID0gdGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzBdLmFwcGVuZChjbG9uZSk7XG4gIH1cbiAgZGVsZXRlRm9yZWNhc3QocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VCYWNrZ3JvdW5kKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgY2hhbmdlQmcoY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5pY29uKTtcbiAgfVxuXG4gIHNob3dFbXB0eUVycm9yKHNwYW4pIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gXCLinJYgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJlcnJvci0tYWN0aXZlXCIpO1xuICB9XG5cbiAgQ2hlY2tFbXB0eShpbnB1dCwgc3Bhbikge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7IC8vIFJlc2V0IHRvIGluaXRpYWwgc3RhdGVcbiAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJmb3JtX19ub3RGb3VuZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFbXB0eUVycm9yKGlucHV0LCBzcGFuKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9zdHlsZS9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTtBQUMzRTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTtBQUMvRTs7O0VBR0U7QUFDRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTtBQUNGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7QUFDRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7QUFDRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTtBQUMvRTs7O0VBR0U7QUFDRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFO0FBQ0Y7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTtBQUNGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFO0FBQ0Y7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFO0FBQ0Y7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTtBQUNGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTtBQUNGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFO0FBQy9FOztFQUVFO0FBQ0Y7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICAtLWxpZ2h0LWJsYWNrLWNvbG9yOiAjMzkzOTM5O1xcblxcbiAgLS1zaGFkb3c6IDFweCAycHggNHB4IHJnYigwIDAgMCAvIDUxJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTsgKi9cXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogM3JlbSA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbn1cXG5cXG4uY2FyZF9fY29uZGl0aW9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4uY2FyZF9fY2l0eSB7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uY2FyZF9fZGVncmVlcyB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcmRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0b3A6IDQ1JTtcXG4gIGxlZnQ6IDIyLjVyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kZXRhaWxzX19mZWVsc0xpa2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlsc19fZmVlbHNMaWtlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkZFRUxTIExJS0U6IFxcXCI7XFxufVxcblxcbi5kZXRhaWxzX193aW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIldJTkQ6IFxcXCI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW0gNHJlbSAwLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDIyJSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0tYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyX19kYWlseUNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDAgMCAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYWlseUNhcmRfX21heCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bYWx0PVxcXCJDb25kaXRpb25cXFwiXSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jZWxzaXVzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZmFocmVuaGVpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNlbHNpdXMtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5mYWhyZW5oZWl0LS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2hlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDk1IDk1KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiKDI1NSA5NSA5NSk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbltmb3I9XFxcImNpdHktbmFtZVxcXCJdIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICB3aWR0aDogMjhyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDMuNHJlbSA3cHggMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDI1JSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNlYXJjaEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcbi5lcnJvci0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGdCQUFnQixFQUFFLDJCQUEyQjtFQUM3Qyw0QkFBNEI7O0VBRTVCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3R0FBd0c7RUFDeEcsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQzlDLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtF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QkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9ub3JtYWxpemUuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICAtLWxpZ2h0LWJsYWNrLWNvbG9yOiAjMzkzOTM5O1xcblxcbiAgLS1zaGFkb3c6IDFweCAycHggNHB4IHJnYigwIDAgMCAvIDUxJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTsgKi9cXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogM3JlbSA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbn1cXG5cXG4uY2FyZF9fY29uZGl0aW9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4uY2FyZF9fY2l0eSB7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uY2FyZF9fZGVncmVlcyB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcmRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0b3A6IDQ1JTtcXG4gIGxlZnQ6IDIyLjVyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kZXRhaWxzX19mZWVsc0xpa2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlsc19fZmVlbHNMaWtlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkZFRUxTIExJS0U6IFxcXCI7XFxufVxcblxcbi5kZXRhaWxzX193aW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIldJTkQ6IFxcXCI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW0gNHJlbSAwLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDIyJSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0tYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyX19kYWlseUNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDAgMCAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYWlseUNhcmRfX21heCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bYWx0PVxcXCJDb25kaXRpb25cXFwiXSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jZWxzaXVzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZmFocmVuaGVpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNlbHNpdXMtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5mYWhyZW5oZWl0LS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2hlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGhlaWdodDogMTdweDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgbGVmdDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtYmxhY2stY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDk1IDk1KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiKDI1NSA5NSA5NSk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbltmb3I9XFxcImNpdHktbmFtZVxcXCJdIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICB3aWR0aDogMjhyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDMuNHJlbSA3cHggMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDI1JSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNlYXJjaEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcbi5lcnJvci0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbW9kdWxlcy9zdHlsZS9zdHlsZS5jc3NcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2R1bGVzL21vZGVsL21haW5Nb2RlbFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3L21haW5WaWV3XCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcblxuY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKTtcbmNvbnN0IHZpZXcgPSBuZXcgVmlldygpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xuXG5pZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG59XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIm1vZGVsIiwidmlldyIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoV2VhdGhlciIsImNoZWNrSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidGVzdCIsImlucHV0IiwiZGVncmVlQmlnIiwicXVlcnlTZWxlY3RvckFsbCIsImRlZ3JlZVNtYWxsIiwid2luZCIsIm1haW4iLCJzcGFuIiwiQ2hlY2tFbXB0eSIsImdldEVsZW1lbnRzIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGl0eSIsInZhbGlkIiwic2hvd0VtcHR5RXJyb3IiLCJnZXRXZWF0aGVyRGF0YSIsIndlYXRoZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImhhc0NoaWxkTm9kZXMiLCJkZWxldGVGb3JlY2FzdCIsInNob3dGb3JlY2FzdCIsImNyZWF0ZU1haW5DYXJkIiwiY3VycmVudFdlYXRoZXIiLCJnZW9Mb2NhdGlvbiIsImNyZWF0ZUVpZ2h0RGF5c0NhcmQiLCJlaWdodERheXNXZWF0aGVyIiwiY2hhbmdlQmFja2dyb3VuZCIsImdldEdlb0NvZGUiLCJ2YWx1ZSIsImdldEN1cnJlbnRXZWF0aGVyIiwibGF0IiwibG9uIiwiZ2V0RWlnaHREYXlzV2VhdGhlciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidGV4dENvbnRlbnQiLCJjb252ZXJ0VG9GYWhyZW5oZWl0IiwiY29udmVydFRvTXBoIiwiY29udmVydFRvQ2Vsc2l1cyIsImNvbnZlcnRUb0ttaCIsInRvZ2dsZSIsImVsZW1lbnQiLCJkZWdyZWUiLCJ2YWxOdW0iLCJwYXJzZUZsb2F0IiwiTWF0aCIsInJvdW5kIiwic3BlZWQiLCJ0b0ZpeGVkIiwiRWlnaHREYXlzQ2FyZCIsImRhdGEiLCJtYXhUZW1wIiwibWluVGVtcCIsImltZyIsImRheSIsImkiLCJkYWlseSIsImxlbmd0aCIsInRlbXAiLCJtYXgiLCJtaW4iLCJzcmMiLCJ3ZWF0aGVyIiwiaWNvbiIsImRheU9mV2VlayIsImdldERheU9mV2VlayIsIkRhdGUiLCJkdCIsImdldERheSIsIm51bWJlciIsIk1haW5DYXJkIiwiY29uZGl0aW9uIiwiY2l0eSIsImRlZ3JlZXMiLCJmZWVsc0xpa2UiLCJodW1pZGl0eSIsImNhcmRJbmZvIiwiY2FyZERhdGEiLCJNb2RlbCIsImtleSIsIm1ldHJpYyIsImltcGVyaWFsIiwic2VhcmNoVGV4dCIsIlVSTCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiIsInJlZ2lvbk5hbWVzSW5FbmdsaXNoIiwiSW50bCIsIkRpc3BsYXlOYW1lcyIsInR5cGUiLCJuYW1lIiwib2YiLCJzeXMiLCJjb3VudHJ5IiwiZmVlbHNfbGlrZSIsImNvbnZlcnRGcm9tTXMiLCJtYWluQ2FyZCIsImdlbmVyYXRlTWFpbkNhcmQiLCJmaWxsTWFpbkNhcmQiLCJtYWluQ2FyZEl0ZW0iLCJlaWdodERheXNDYXJkIiwiZ2VuZXJhdGVFaWdodERheXNDYXJkIiwiZmlsbEVpZ2h0RGF5c0NhcmQiLCJlaWdodERheXNDYXJkSXRlbSIsImNsZWFyU2t5RGF5IiwiY2xlYXJTa3lOaWdodCIsImZld0Nsb3Vkc0RheSIsImZld0Nsb3Vkc05pZ2h0Iiwic2NhdHRlcmVkQ2xvdWRzRGF5Iiwic2NhdHRlcmVkQ2xvdWRzTmlnaHQiLCJicm9rZW5DbG91ZHNEYXkiLCJicm9rZW5DbG91ZHNOaWdodCIsInNob3dlclJhaW5EYXkiLCJzaG93ZXJSYWluTmlnaHQiLCJyYWluRGF5IiwicmFpbk5pZ2h0IiwidGh1bmRlcnN0b3JtRGF5IiwidGh1bmRlcnN0b3JtTmlnaHQiLCJzbm93RGF5Iiwic25vd05pZ2h0IiwibWlzdERheSIsIm1pc3ROaWdodCIsImljb25Db2RlIiwic2V0RGFpbHlDb250YWluZXJCRyIsImJsYWNrIiwid2hpdGUiLCJjaGFuZ2VNYWluQmciLCJpbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiY29sb3IiLCJhZGQiLCJjaGFuZ2VCZyIsIlZpZXciLCJwb3NpdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xvbmUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFwcGVuZCIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsImNvbnRyb2xsZXIiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==