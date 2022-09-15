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
      return {
        input: input,
        degreeBig: degreeBig,
        degreeSmall: degreeSmall,
        wind: wind,
        main: main,
        span: span,
        switchBtn: switchBtn
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
                _context.next = 5;
                return this.getGeoLocation();

              case 5:
                geoLocation = _context.sent;

                if (!(typeof geoLocation === "undefined")) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", this.view.showUnknownCityError(this.getElements().span));

              case 8:
                _context.next = 10;
                return this.getCurrentWeather(geoLocation);

              case 10:
                currentWeather = _context.sent;
                _context.next = 13;
                return this.getEightDaysWeather(geoLocation);

              case 13:
                eightDaysWeather = _context.sent;
                if (this.getElements().main.hasChildNodes()) this.view.deleteForecast(this.getElements().main);
                this.view.showForecast(0);
                this.getElements().switchBtn.addEventListener("click", function (e) {
                  return _this2.changeUnits(e);
                });
                this.model.createMainCard(currentWeather, geoLocation);
                this.view.showForecast(1);
                this.model.createEightDaysCard(eightDaysWeather);
                this.view.changeBackground(currentWeather);

              case 21:
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
        var geoLocation;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.fetchGeoLocation(this.getElements().input.value);

              case 2:
                geoLocation = _context2.sent;
                return _context2.abrupt("return", geoLocation);

              case 4:
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
                console.log(_context.t0, "Refresh page and try again later");

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
/* harmony import */ var _images_clear_sky_kevin_buman_7YD8Q_3mEMg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg */ "./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg");
/* harmony import */ var _images_few_clouds_aziz_ayad_NJDyFoXDAus_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg */ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg");
/* harmony import */ var _images_few_clouds_sid_soni_D8VwM3N5xz4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg */ "./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg");
/* harmony import */ var _images_scattered_clouds_nick_fewings_ZtDiJzokZi0_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg */ "./src/images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg");
/* harmony import */ var _images_scattered_clouds_herrmann_stamm_4vmjOLf9edk_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg */ "./src/images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg");
/* harmony import */ var _images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg */ "./src/images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg");
/* harmony import */ var _images_shower_rain_nic_y_c_CrXuYxfOJ4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg */ "./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg");
/* harmony import */ var _images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg */ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg");
/* harmony import */ var _images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg */ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg");
/* harmony import */ var _images_rain_stormseeker_vRCZ3DztaoA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg */ "./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg */ "./src/images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg");
/* harmony import */ var _images_thunderstorm_michal_mancewicz_R9L7ukhBSgs_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg */ "./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg");
/* harmony import */ var _images_snow_nathan_fertig_o_Nw3H21Js_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg */ "./src/images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg");
/* harmony import */ var _images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg */ "./src/images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg");
/* harmony import */ var _images_mist_chris_leipelt_kWd5ER2XpSg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg */ "./src/images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg");
/* harmony import */ var _images_mist_daniil_onischenko_3C6DIGvZfEw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg */ "./src/images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg");





 //import brokenCloudsDay from "../../images/broken-clouds/raychel-sanner-cswvKS59E90-unsplash.jpeg";






 // too many details bottom part


 // too white/dark bottom




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
      return changeMainBg(brokenCloudsDay);

    case "04n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_broken_clouds_anandu_vinod_pbxwxwfI0B4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__);

    case "09d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_shower_rain_nic_y_c_CrXuYxfOJ4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__);

    case "09n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_shower_rain_kyle_szegedi_JSmc0GmSV1o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__);

    case "10d":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_rain_simon_kuznetsov_igQx3ETkKZY_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_9__);

    case "10n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_rain_stormseeker_vRCZ3DztaoA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__);

    case "11d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_thunderstorm_raychel_sanner_LCswFCnyE6Y_unsplash_jpg__WEBPACK_IMPORTED_MODULE_11__);

    case "11n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_thunderstorm_michal_mancewicz_R9L7ukhBSgs_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_12__);

    case "13d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(_images_snow_nathan_fertig_o_Nw3H21Js_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__);

    case "13n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_snow_alex_teplitz_I_Tg2H84mos_unsplash_jpg__WEBPACK_IMPORTED_MODULE_14__);

    case "50d":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_mist_chris_leipelt_kWd5ER2XpSg_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_15__);

    case "50n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(_images_mist_daniil_onischenko_3C6DIGvZfEw_unsplash_jpeg__WEBPACK_IMPORTED_MODULE_16__);
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
    key: "showUnknownCityError",
    value: function showUnknownCityError(span) {
      span.textContent = "✖ Location not found. Please try another city.";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 30%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: absolute;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n  right: 0;\n  top: 5px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The switcher */\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: #706e6e;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: white;\n  text-shadow: none;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n#city-name {\n  width: 28rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n  border-radius: 2px;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n  position: absolute;\n  font-size: 1.3rem;\n  max-width: 28rem;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(./normalize.css);\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap\");\n\n:root {\n  font-size: 62.5%; /* To turn 1rem into 10px */\n  --light-black-color: #393939;\n\n  --shadow: 1px 2px 4px rgb(0 0 0 / 51%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\np,\nh1 {\n  margin: 0;\n}\n\nbody {\n  font-family: montserrat, sans-serif, system-ui, -apple-system, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\";\n  font-size: 1.6rem; /* To turn 1rem into 10px */\n  height: 100vh;\n  display: grid;\n  grid-template-rows: max-content auto;\n  color: #ffffff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-end;\n  padding: 3rem 4rem;\n}\n\n.card {\n  position: relative;\n  width: max-content;\n  min-width: 40rem;\n  margin: 3rem 4rem;\n  font-family: \"Noto Sans\";\n}\n\n.card__condition {\n  text-transform: capitalize;\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n}\n.card__city {\n  margin: 0.5rem 0 1rem;\n  font-size: 4rem;\n  text-transform: uppercase;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n  font-weight: 800;\n}\n.card__degrees {\n  font-size: 15rem;\n  font-weight: 900;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.card__details {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgb(255, 255, 255);\n  top: 45%;\n  left: 22.5rem;\n  height: 10rem;\n  padding-left: 2.6rem;\n  justify-content: space-between;\n}\n.details__feelsLike {\n  position: relative;\n}\n\n.details__feelsLike::before {\n  content: \"FEELS LIKE: \";\n}\n\n.details__wind::before {\n  content: \"WIND: \";\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer {\n  display: flex;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 1.6rem 4rem 0.2rem;\n  text-shadow: var(--shadow);\n}\n\n.dailyContainer--white {\n  background-color: rgba(255, 255, 255, 30%);\n}\n\n.dailyContainer--black {\n  background-color: rgb(0 0 0 / 15%);\n}\n\n.dailyContainer__dailyCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh3 {\n  margin: 0 0 1.6rem;\n  padding-left: 1rem;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.dailyCard__max {\n  margin-bottom: 0.4rem;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n[alt=\"Condition\"] {\n  height: 70px;\n}\n\n.celsius::after {\n  content: \"°C\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.fahrenheit::after {\n  content: \"°F\";\n  position: absolute;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.celsius--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°C\";\n  font-size: 3rem;\n}\n\n.fahrenheit--big::after {\n  position: absolute;\n  top: 1.8rem;\n  left: 17.3rem;\n  content: \"°F\";\n  font-size: 3rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: absolute;\n  display: inline-block;\n  width: 40px;\n  height: 23px;\n  right: 0;\n  top: 5px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The switcher */\n.slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: white;\n  border-radius: 23px;\n  cursor: pointer;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider::before {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  content: \"°C\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  height: 17px;\n  width: 17px;\n  left: 3px;\n  bottom: 3px;\n  border-radius: 50%;\n  background-color: #706e6e;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  color: white;\n  text-shadow: none;\n}\n\ninput:checked + .slider::before {\n  -webkit-transform: translateX(17px);\n  -ms-transform: translateX(17px);\n  transform: translateX(17px);\n  content: \"°F\";\n}\n\n::placeholder {\n  color: #ffffff;\n  opacity: 0.9;\n}\n\n[for=\"city-name\"] {\n  visibility: hidden;\n}\n\n#city-name {\n  width: 28rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  padding: 7px 3.4rem 7px 1rem;\n  color: #ffffff;\n  font-size: 1.6rem;\n  border-radius: 5px 5px 0 0;\n  background-color: rgb(0 0 0 / 25%);\n  text-transform: capitalize;\n}\n\n.searchBox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-bottom: 2px solid #f5f5f5;\n  border-radius: 2px;\n}\n\n[type=\"image\"] {\n  position: absolute;\n  right: 0;\n  padding: 7px;\n  transition: all 0.2s ease;\n}\n\n[type=\"image\"]:active {\n  transform: scale(0.9);\n}\n\n.error--active {\n  display: block !important;\n  position: absolute;\n  font-size: 1.3rem;\n  max-width: 28rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg":
/*!***************************************************************************!*\
  !*** ./src/images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grooveland-designs-zjoydJb17mE-unsplash.jpeg";

/***/ }),

/***/ "./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg":
/*!********************************************************************!*\
  !*** ./src/images/clear-sky/kevin-buman-7YD8Q-3mEMg-unsplash.jpeg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kevin-buman-7YD8Q-3mEMg-unsplash.jpeg";

/***/ }),

/***/ "./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aziz-ayad-NJDyFoXDAus-unsplash.jpeg";

/***/ }),

/***/ "./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/few-clouds/sid-soni-D8VwM3N5xz4-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sid-soni-D8VwM3N5xz4-unsplash.jpg";

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

/***/ "./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg":
/*!*******************************************************************!*\
  !*** ./src/images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg";

/***/ }),

/***/ "./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/rain/stormseeker-vRCZ3DztaoA-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "stormseeker-vRCZ3DztaoA-unsplash.jpg";

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

/***/ "./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg":
/*!**********************************************************************!*\
  !*** ./src/images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kyle-szegedi-JSmc0GmSV1o-unsplash.jpg";

/***/ }),

/***/ "./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/shower-rain/nic-y-c-CrXuYxfOJ4I-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nic-y-c-CrXuYxfOJ4I-unsplash.jpg";

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

/***/ "./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg":
/*!****************************************************************************!*\
  !*** ./src/images/thunderstorm/michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "michal-mancewicz-R9L7ukhBSgs-unsplash.jpeg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLEtBQUssS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxPQUFPLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxPQUFPLEtBQUssS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sS0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLEtBQUssT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxRQUFRLEtBQUssU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssUUFBUSxZQUFZLE9BQU8sTUFBTSxLQUFLLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLFFBQVEsWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxTQUFTLEtBQUssS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sT0FBTyxLQUFLLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLEtB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LGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFV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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXRKLEtBQUssR0FBRyxJQUFJd0YsZ0VBQUosRUFBZDtBQUNBLElBQU12RixJQUFJLEdBQUcsSUFBSXFKLDhEQUFKLEVBQWIsRUFDQTs7QUFDQSxJQUFNWSxVQUFVLEdBQUcsSUFBSW5LLDBFQUFKLENBQWVDLEtBQWYsRUFBc0JDLElBQXRCLENBQW5COztBQUVBLElBQUlrSyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsWUFBbkIsRUFBaUM7RUFDL0JGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxZQUFmLENBQTRCLElBQTVCLEVBQWtDLElBQWxDLEVBQXdDRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLElBQXhEO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbW9kZWwvRWlnaHREYXlzQ2FyZC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9tb2RlbC9tYWluQ2FyZC5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9tb2RlbC9tYWluTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdmlldy9jaGFuZ2VCZy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy92aWV3L21haW5WaWV3LmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3N0eWxlL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc3R5bGUvc3R5bGUuY3NzPzc0ZDAiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGUtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RoZS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGhlLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5zZWFyY2hXZWF0aGVyKGUpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB0aGlzLmNoZWNrSW5wdXQoKSk7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWdyZWVCaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2RlZ3JlZXNcIilbMF07XG4gICAgY29uc3QgZGVncmVlU21hbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHNfX2ZlZWxzTGlrZSwgLmRhaWx5Q2FyZF9fbWF4LCAuZGFpbHlDYXJkX19taW5cIik7XG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc19fd2luZFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fbm90Rm91bmRcIilbMF07XG4gICAgY29uc3Qgc3dpdGNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2ggaW5wdXRcIik7XG5cbiAgICByZXR1cm4geyBpbnB1dCwgZGVncmVlQmlnLCBkZWdyZWVTbWFsbCwgd2luZCwgbWFpbiwgc3Bhbiwgc3dpdGNoQnRuIH07XG4gIH1cblxuICBjaGVja0lucHV0KCkge1xuICAgIHRoaXMudmlldy5DaGVja0VtcHR5KHRoaXMuZ2V0RWxlbWVudHMoKS5pbnB1dCwgdGhpcy5nZXRFbGVtZW50cygpLnNwYW4pO1xuICB9XG5cbiAgYXN5bmMgc2VhcmNoV2VhdGhlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nZXRFbGVtZW50cygpLmlucHV0LnZhbGlkaXR5LnZhbGlkKSByZXR1cm4gdGhpcy52aWV3LnNob3dFbXB0eUVycm9yKHRoaXMuZ2V0RWxlbWVudHMoKS5zcGFuKTtcbiAgICBjb25zdCBnZW9Mb2NhdGlvbiA9IGF3YWl0IHRoaXMuZ2V0R2VvTG9jYXRpb24oKTtcbiAgICBpZiAodHlwZW9mIGdlb0xvY2F0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3LnNob3dVbmtub3duQ2l0eUVycm9yKHRoaXMuZ2V0RWxlbWVudHMoKS5zcGFuKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCB0aGlzLmdldEN1cnJlbnRXZWF0aGVyKGdlb0xvY2F0aW9uKTtcbiAgICBjb25zdCBlaWdodERheXNXZWF0aGVyID0gYXdhaXQgdGhpcy5nZXRFaWdodERheXNXZWF0aGVyKGdlb0xvY2F0aW9uKTtcbiAgICBpZiAodGhpcy5nZXRFbGVtZW50cygpLm1haW4uaGFzQ2hpbGROb2RlcygpKSB0aGlzLnZpZXcuZGVsZXRlRm9yZWNhc3QodGhpcy5nZXRFbGVtZW50cygpLm1haW4pO1xuICAgIHRoaXMudmlldy5zaG93Rm9yZWNhc3QoMCk7XG4gICAgdGhpcy5nZXRFbGVtZW50cygpLnN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuY2hhbmdlVW5pdHMoZSkpO1xuICAgIHRoaXMubW9kZWwuY3JlYXRlTWFpbkNhcmQoY3VycmVudFdlYXRoZXIsIGdlb0xvY2F0aW9uKTtcbiAgICB0aGlzLnZpZXcuc2hvd0ZvcmVjYXN0KDEpO1xuICAgIHRoaXMubW9kZWwuY3JlYXRlRWlnaHREYXlzQ2FyZChlaWdodERheXNXZWF0aGVyKTtcbiAgICB0aGlzLnZpZXcuY2hhbmdlQmFja2dyb3VuZChjdXJyZW50V2VhdGhlcik7XG4gIH1cblxuICBhc3luYyBnZXRHZW9Mb2NhdGlvbigpIHtcbiAgICBjb25zdCBnZW9Mb2NhdGlvbiA9IGF3YWl0IHRoaXMubW9kZWwuZmV0Y2hHZW9Mb2NhdGlvbih0aGlzLmdldEVsZW1lbnRzKCkuaW5wdXQudmFsdWUpO1xuICAgIHJldHVybiBnZW9Mb2NhdGlvbjtcbiAgfVxuXG4gIGFzeW5jIGdldEN1cnJlbnRXZWF0aGVyKGdlb0xvY2F0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCB0aGlzLm1vZGVsLmZldGNoQ3VycmVudFdlYXRoZXIoZ2VvTG9jYXRpb24ubGF0LCBnZW9Mb2NhdGlvbi5sb24pO1xuICAgIHJldHVybiBjdXJyZW50V2VhdGhlcjtcbiAgfVxuXG4gIGFzeW5jIGdldEVpZ2h0RGF5c1dlYXRoZXIoZ2VvTG9jYXRpb24pIHtcbiAgICBjb25zdCBlaWdodERheXNXZWF0aGVyID0gYXdhaXQgdGhpcy5tb2RlbC5mZXRjaEVpZ2h0RGF5c1dlYXRoZXIoZ2VvTG9jYXRpb24ubGF0LCBnZW9Mb2NhdGlvbi5sb24pO1xuICAgIHJldHVybiBlaWdodERheXNXZWF0aGVyO1xuICB9XG5cbiAgY2hhbmdlVW5pdHMoKSB7XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2Vsc2l1cy0tYmlnXCIpKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9GYWhyZW5oZWl0KHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQpO1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb01waCh0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCkgKyBcIiBtcGhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdC0tYmlnXCIpKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLnRleHRDb250ZW50ID0gdGhpcy5jb252ZXJ0VG9DZWxzaXVzKHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcudGV4dENvbnRlbnQpO1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLndpbmQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0ttaCh0aGlzLmdldEVsZW1lbnRzKCkud2luZC50ZXh0Q29udGVudCkgKyBcIiBrbS9oXCI7XG4gICAgfVxuICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVCaWcuY2xhc3NMaXN0LnRvZ2dsZShcImNlbHNpdXMtLWJpZ1wiKTtcbiAgICB0aGlzLmdldEVsZW1lbnRzKCkuZGVncmVlQmlnLmNsYXNzTGlzdC50b2dnbGUoXCJmYWhyZW5oZWl0LS1iaWdcIik7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMuZ2V0RWxlbWVudHMoKS5kZWdyZWVTbWFsbCkge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2Vsc2l1c1wiKSkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFRvRmFocmVuaGVpdChlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZhaHJlbmhlaXRcIikpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUb0NlbHNpdXMoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjZWxzaXVzXCIpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZmFocmVuaGVpdFwiKTtcbiAgICB9XG4gIH1cbiAgY29udmVydFRvQ2Vsc2l1cyhkZWdyZWUpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KGRlZ3JlZSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbE51bSAtIDMyKSAvIDEuOCk7XG4gIH1cbiAgY29udmVydFRvRmFocmVuaGVpdChkZWdyZWUpIHtcbiAgICBjb25zdCB2YWxOdW0gPSBwYXJzZUZsb2F0KGRlZ3JlZSk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsTnVtICogMS44ICsgMzIpO1xuICB9XG4gIGNvbnZlcnRUb0ttaChzcGVlZCkge1xuICAgIGNvbnN0IHZhbE51bSA9IHBhcnNlRmxvYXQoc3BlZWQpO1xuICAgIHJldHVybiAodmFsTnVtICogMS42MDkpLnRvRml4ZWQoMik7XG4gIH1cbiAgY29udmVydFRvTXBoKHNwZWVkKSB7XG4gICAgY29uc3QgdmFsTnVtID0gcGFyc2VGbG9hdChzcGVlZCk7XG4gICAgcmV0dXJuICh2YWxOdW0gLyAxLjYwOSkudG9GaXhlZCgyKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImNsYXNzIEVpZ2h0RGF5c0NhcmQge1xuICBjb25zdHJ1Y3RvcihlaWdodERheXNXZWF0aGVyKSB7XG4gICAgdGhpcy5kYXRhID0gZWlnaHREYXlzV2VhdGhlcjtcbiAgfVxuXG4gIGZpbGxFaWdodERheXNDYXJkKCkge1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWF4XCIpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q2FyZF9fbWluXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlDb250YWluZXIgaW1nXCIpO1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5kYWlseS5sZW5ndGg7IGkrKykge1xuICAgICAgbWF4VGVtcFtpXS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodGhpcy5kYXRhLmRhaWx5W2ldLnRlbXAubWF4KTtcbiAgICAgIG1pblRlbXBbaV0udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YS5kYWlseVtpXS50ZW1wLm1pbik7XG4gICAgICBpbWdbaV0uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGhpcy5kYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgIGNvbnN0IGRheU9mV2VlayA9IHRoaXMuZ2V0RGF5T2ZXZWVrKG5ldyBEYXRlKHRoaXMuZGF0YS5kYWlseVtpXS5kdCAqIDEwMDApLmdldERheSgpKTsgLy9UdXJucyBVbml4IFRpbWVzdGFtcCB0byB3ZWVrIGRheVxuICAgICAgZGF5W2ldLnRleHRDb250ZW50ID0gZGF5T2ZXZWVrO1xuICAgIH1cbiAgfVxuICBnZXREYXlPZldlZWsobnVtYmVyKSB7XG4gICAgc3dpdGNoIChudW1iZXIpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcIk1vbmRheVwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJUdWVzZGF5XCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIldlZG5lc2RheVwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gXCJUaHVyc2RheVwiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gXCJGcmlkYXlcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWlnaHREYXlzQ2FyZDtcbiIsImNsYXNzIE1haW5DYXJkIHtcbiAgY29uc3RydWN0b3IoY29uZGl0aW9uLCBjaXR5LCBkZWdyZWVzLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLmRlZ3JlZXMgPSBkZWdyZWVzO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZmVlbHNMaWtlO1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG5cbiAgZmlsbE1haW5DYXJkKCkge1xuICAgIGNvbnN0IGNhcmRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkIHBcIik7XG4gICAgY29uc3QgY2FyZERhdGEgPSBbdGhpcy5jb25kaXRpb24sIHRoaXMuY2l0eSwgdGhpcy5kZWdyZWVzLCB0aGlzLmZlZWxzTGlrZSwgdGhpcy53aW5kLCB0aGlzLmh1bWlkaXR5XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRJbmZvLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYXJkSW5mb1tpXS50ZXh0Q29udGVudCA9IGNhcmREYXRhW2ldO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ2FyZDtcbiIsImltcG9ydCBNYWluQ2FyZCBmcm9tIFwiLi9tYWluQ2FyZFwiO1xuaW1wb3J0IEVpZ2h0RGF5c0NhcmQgZnJvbSBcIi4vRWlnaHREYXlzQ2FyZFwiO1xuXG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMua2V5ID0gXCI5MDcyMGY0MjJiYjVjZjc0ZjkxYmU3NjEwMWY0OGY1MFwiO1xuICAgIHRoaXMubWV0cmljID0gXCJtZXRyaWNcIjtcbiAgICB0aGlzLmltcGVyaWFsID0gXCJpbXBlcmlhbFwiO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hHZW9Mb2NhdGlvbihzZWFyY2hUZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2VhcmNoVGV4dH0mYXBwaWQ9JHt0aGlzLmtleX1gO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhWzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLCBcIlJlZnJlc2ggcGFnZSBhbmQgdHJ5IGFnYWluIGxhdGVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoQ3VycmVudFdlYXRoZXIobGF0LCBsb24pIHtcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7dGhpcy5rZXl9JnVuaXRzPW1ldHJpY2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoRWlnaHREYXlzV2VhdGhlcihsYXQsIGxvbikge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1ob3VybHksbWludXRlbHksYWxlcnRzJnVuaXRzPW1ldHJpYyZhcHBpZD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY3JlYXRlTWFpbkNhcmQoY3VycmVudFdlYXRoZXIsIGdlb0xvY2F0aW9uKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCByZWdpb25OYW1lc0luRW5nbGlzaCA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbXCJlblwiXSwgeyB0eXBlOiBcInJlZ2lvblwiIH0pOyAvLyBUbyBjb252ZXJ0IENBIHRvIENhbmFkYSwgcGVyIGV4YW1wbGVcbiAgICBjb25zdCBjaXR5ID0gZ2VvTG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlZ2lvbk5hbWVzSW5FbmdsaXNoLm9mKGN1cnJlbnRXZWF0aGVyLnN5cy5jb3VudHJ5KTtcbiAgICBjb25zdCBkZWdyZWVzID0gTWF0aC5yb3VuZChjdXJyZW50V2VhdGhlci5tYWluLnRlbXApO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjb25zdCB3aW5kID0gdGhpcy5jb252ZXJ0RnJvbU1zKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpICsgXCIga20vaFwiO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gXCJIVU1JRElUWTogXCIgKyBjdXJyZW50V2VhdGhlci5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgY29uc3QgbWFpbkNhcmQgPSB0aGlzLmdlbmVyYXRlTWFpbkNhcmQoY29uZGl0aW9uLCBjaXR5LCBkZWdyZWVzLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KTtcbiAgICBtYWluQ2FyZC5maWxsTWFpbkNhcmQoKTtcbiAgfVxuXG4gIGNvbnZlcnRGcm9tTXMoc3BlZWQpIHtcbiAgICByZXR1cm4gKHNwZWVkICogMy42KS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgZ2VuZXJhdGVNYWluQ2FyZChjb25kaXRpb24sIGNpdHksIGRlZ3JlZXMsIGZlZWxzTGlrZSwgd2luZCwgaHVtaWRpdHkpIHtcbiAgICBsZXQgbWFpbkNhcmRJdGVtID0gbmV3IE1haW5DYXJkKGNvbmRpdGlvbiwgY2l0eSwgZGVncmVlcywgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSk7XG4gICAgcmV0dXJuIG1haW5DYXJkSXRlbTtcbiAgfVxuXG4gIGNyZWF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGNvbnN0IGVpZ2h0RGF5c0NhcmQgPSB0aGlzLmdlbmVyYXRlRWlnaHREYXlzQ2FyZChlaWdodERheXNXZWF0aGVyKTtcbiAgICBlaWdodERheXNDYXJkLmZpbGxFaWdodERheXNDYXJkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUVpZ2h0RGF5c0NhcmQoZWlnaHREYXlzV2VhdGhlcikge1xuICAgIGxldCBlaWdodERheXNDYXJkSXRlbSA9IG5ldyBFaWdodERheXNDYXJkKGVpZ2h0RGF5c1dlYXRoZXIpO1xuICAgIHJldHVybiBlaWdodERheXNDYXJkSXRlbTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCBjbGVhclNreURheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NsZWFyLXNreS9ncm9vdmVsYW5kLWRlc2lnbnMtempveWRKYjE3bUUtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGNsZWFyU2t5TmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy9jbGVhci1za3kva2V2aW4tYnVtYW4tN1lEOFEtM21FTWctdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IGZld0Nsb3Vkc0RheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Zldy1jbG91ZHMvYXppei1heWFkLU5KRHlGb1hEQXVzLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBmZXdDbG91ZHNOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Zldy1jbG91ZHMvc2lkLXNvbmktRDhWd00zTjV4ejQtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy9uaWNrLWZld2luZ3MtWnREaUp6b2taaTAtdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvc2NhdHRlcmVkLWNsb3Vkcy9oZXJybWFubi1zdGFtbS00dm1qT0xmOWVkay11bnNwbGFzaC5qcGVnXCI7XG4vL2ltcG9ydCBicm9rZW5DbG91ZHNEYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9icm9rZW4tY2xvdWRzL3JheWNoZWwtc2FubmVyLWNzd3ZLUzU5RTkwLXVuc3BsYXNoLmpwZWdcIjtcbmltcG9ydCBicm9rZW5DbG91ZHNOaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2Jyb2tlbi1jbG91ZHMvYW5hbmR1LXZpbm9kLXBieHd4d2ZJMEI0LXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSBcIi4uLy4uL2ltYWdlcy9zaG93ZXItcmFpbi9uaWMteS1jLUNyWHVZeGZPSjRJLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nob3dlci1yYWluL2t5bGUtc3plZ2VkaS1KU21jMEdtU1Yxby11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCByYWluRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvcmFpbi9zaW1vbi1rdXpuZXRzb3YtaWdReDNFVGtLWlktdW5zcGxhc2guanBlZ1wiO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3JhaW4vc3Rvcm1zZWVrZXItdlJDWjNEenRhb0EtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgdGh1bmRlcnN0b3JtRGF5IGZyb20gXCIuLi8uLi9pbWFnZXMvdGh1bmRlcnN0b3JtL3JheWNoZWwtc2FubmVyLUxDc3dGQ255RTZZLXVuc3BsYXNoLmpwZ1wiOyAvLyB0b28gbWFueSBkZXRhaWxzIGJvdHRvbSBwYXJ0XG5pbXBvcnQgdGh1bmRlcnN0b3JtTmlnaHQgZnJvbSBcIi4uLy4uL2ltYWdlcy90aHVuZGVyc3Rvcm0vbWljaGFsLW1hbmNld2ljei1SOUw3dWtoQlNncy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgc25vd0RheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3Nub3cvbmF0aGFuLWZlcnRpZy1fb19OdzNIMjFKcy11bnNwbGFzaC5qcGdcIjsgLy8gdG9vIHdoaXRlL2RhcmsgYm90dG9tXG5pbXBvcnQgc25vd05pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvc25vdy9hbGV4LXRlcGxpdHotSS1UZzJIODRtb3MtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgbWlzdERheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL21pc3QvY2hyaXMtbGVpcGVsdC1rV2Q1RVIyWHBTZy11bnNwbGFzaC5qcGVnXCI7XG5pbXBvcnQgbWlzdE5pZ2h0IGZyb20gXCIuLi8uLi9pbWFnZXMvbWlzdC9kYW5paWwtb25pc2NoZW5rby0zQzZESUd2WmZFdy11bnNwbGFzaC5qcGVnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpY29uQ29kZSkge1xuICBzd2l0Y2ggKGljb25Db2RlKSB7XG4gICAgY2FzZSBcIjAxZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS1ibGFja1wiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoY2xlYXJTa3lEYXkpO1xuICAgIGNhc2UgXCIwMW5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGNsZWFyU2t5TmlnaHQpO1xuICAgIGNhc2UgXCIwMmRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGZld0Nsb3Vkc0RheSk7XG4gICAgY2FzZSBcIjAyblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoZmV3Q2xvdWRzTmlnaHQpO1xuICAgIGNhc2UgXCIwM2RcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNjYXR0ZXJlZENsb3Vkc0RheSk7XG4gICAgY2FzZSBcIjAzblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoc2NhdHRlcmVkQ2xvdWRzTmlnaHQpO1xuICAgIGNhc2UgXCIwNGRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKGJyb2tlbkNsb3Vkc0RheSk7XG4gICAgY2FzZSBcIjA0blwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcoYnJva2VuQ2xvdWRzTmlnaHQpO1xuICAgIGNhc2UgXCIwOWRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0tYmxhY2tcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNob3dlclJhaW5EYXkpO1xuICAgIGNhc2UgXCIwOW5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHNob3dlclJhaW5OaWdodCk7XG4gICAgY2FzZSBcIjEwZFwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcocmFpbkRheSk7XG4gICAgY2FzZSBcIjEwblwiOlxuICAgICAgc2V0RGFpbHlDb250YWluZXJCRyhcImRhaWx5Q29udGFpbmVyLS13aGl0ZVwiKTtcbiAgICAgIHJldHVybiBjaGFuZ2VNYWluQmcocmFpbk5pZ2h0KTtcbiAgICBjYXNlIFwiMTFkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyh0aHVuZGVyc3Rvcm1EYXkpO1xuICAgIGNhc2UgXCIxMW5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKHRodW5kZXJzdG9ybU5pZ2h0KTtcbiAgICBjYXNlIFwiMTNkXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLWJsYWNrXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzbm93RGF5KTtcbiAgICBjYXNlIFwiMTNuXCI6XG4gICAgICBzZXREYWlseUNvbnRhaW5lckJHKFwiZGFpbHlDb250YWluZXItLXdoaXRlXCIpO1xuICAgICAgcmV0dXJuIGNoYW5nZU1haW5CZyhzbm93TmlnaHQpO1xuICAgIGNhc2UgXCI1MGRcIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKG1pc3REYXkpO1xuICAgIGNhc2UgXCI1MG5cIjpcbiAgICAgIHNldERhaWx5Q29udGFpbmVyQkcoXCJkYWlseUNvbnRhaW5lci0td2hpdGVcIik7XG4gICAgICByZXR1cm4gY2hhbmdlTWFpbkJnKG1pc3ROaWdodCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTWFpbkJnKGltYWdlKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWFnZX0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYDtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbn1cblxuZnVuY3Rpb24gc2V0RGFpbHlDb250YWluZXJCRyhjb2xvcikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5Q29udGFpbmVyXCIpWzBdLmNsYXNzTGlzdC5hZGQoY29sb3IpO1xufVxuIiwiaW1wb3J0IGNoYW5nZUJnIGZyb20gXCIuL2NoYW5nZUJnXCI7XG5cbmNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2hvd0ZvcmVjYXN0KHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGVtcGxhdGVcIilbcG9zaXRpb25dO1xuICAgIGNvbnN0IGNsb25lID0gdGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzBdLmFwcGVuZChjbG9uZSk7XG4gIH1cbiAgZGVsZXRlRm9yZWNhc3QocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VCYWNrZ3JvdW5kKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgY2hhbmdlQmcoY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5pY29uKTtcbiAgfVxuXG4gIHNob3dFbXB0eUVycm9yKHNwYW4pIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gXCLinJYgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJlcnJvci0tYWN0aXZlXCIpO1xuICB9XG5cbiAgc2hvd1Vua25vd25DaXR5RXJyb3Ioc3Bhbikge1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIuKcliBMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSB0cnkgYW5vdGhlciBjaXR5LlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImVycm9yLS1hY3RpdmVcIik7XG4gIH1cblxuICBDaGVja0VtcHR5KGlucHV0LCBzcGFuKSB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjsgLy8gUmVzZXQgdG8gaW5pdGlhbCBzdGF0ZVxuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImZvcm1fX25vdEZvdW5kXCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7QUFDM0U7K0VBQytFO0FBQy9FOzs7RUFHRTtBQUNGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTtBQUNGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7QUFDRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFO0FBQ0Y7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFO0FBQ0Y7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7QUFDL0U7O0VBRUU7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7QUFDL0U7OztFQUdFO0FBQ0Y7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTtBQUNGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7QUFDRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7QUFDRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTtBQUNGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7QUFDRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTtBQUNGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7QUFDRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFO0FBQ0Y7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTtBQUNGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTtBQUNGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgLS1saWdodC1ibGFjay1jb2xvcjogIzM5MzkzOTtcXG5cXG4gIC0tc2hhZG93OiAxcHggMnB4IDRweCByZ2IoMCAwIDAgLyA1MSUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnAsXFxuaDEge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjZyZW07IC8qIFRvIHR1cm4gMXJlbSBpbnRvIDEwcHggKi9cXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBhdXRvO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogM3JlbSA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbn1cXG5cXG4uY2FyZF9fY29uZGl0aW9uIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4uY2FyZF9fY2l0eSB7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uY2FyZF9fZGVncmVlcyB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcmRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDAuMnJlbSBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0b3A6IDQ1JTtcXG4gIGxlZnQ6IDIyLjVyZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjZyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kZXRhaWxzX19mZWVsc0xpa2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlsc19fZmVlbHNMaWtlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkZFRUxTIExJS0U6IFxcXCI7XFxufVxcblxcbi5kZXRhaWxzX193aW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIldJTkQ6IFxcXCI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxLjZyZW0gNHJlbSAwLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDMwJSk7XFxufVxcblxcbi5kYWlseUNvbnRhaW5lci0tYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMTUlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyX19kYWlseUNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDAgMCAxLjZyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kYWlseUNhcmRfX21heCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5bYWx0PVxcXCJDb25kaXRpb25cXFwiXSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5jZWxzaXVzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZmFocmVuaGVpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNlbHNpdXMtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5mYWhyZW5oZWl0LS1iaWc6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS44cmVtO1xcbiAgbGVmdDogMTcuM3JlbTtcXG4gIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogNXB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgd2lkdGg6IDE3cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBib3R0b206IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDZlNmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbltmb3I9XFxcImNpdHktbmFtZVxcXCJdIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2NpdHktbmFtZSB7XFxuICB3aWR0aDogMjhyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDMuNHJlbSA3cHggMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDI1JSk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNlYXJjaEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG5bdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblxcbi5lcnJvci0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1heC13aWR0aDogMjhyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGdCQUFnQixFQUFFLDJCQUEyQjtFQUM3Qyw0QkFBNEI7O0VBRTVCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3R0FBd0c7RUFDeEcsaUJBQWlCLEVBQUUsMkJBQTJCO0VBQzlDLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9ub3JtYWxpemUuY3NzKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlOyAvKiBUbyB0dXJuIDFyZW0gaW50byAxMHB4ICovXFxuICAtLWxpZ2h0LWJsYWNrLWNvbG9yOiAjMzkzOTM5O1xcblxcbiAgLS1zaGFkb3c6IDFweCAycHggNHB4IHJnYigwIDAgMCAvIDUxJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogVG8gdHVybiAxcmVtIGludG8gMTBweCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IDQwcmVtO1xcbiAgbWFyZ2luOiAzcmVtIDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxufVxcblxcbi5jYXJkX19jb25kaXRpb24ge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcbi5jYXJkX19jaXR5IHtcXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5jYXJkX19kZWdyZWVzIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMjIuNXJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRldGFpbHNfX2ZlZWxzTGlrZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzX19mZWVsc0xpa2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRkVFTFMgTElLRTogXFxcIjtcXG59XFxuXFxuLmRldGFpbHNfX3dpbmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiV0lORDogXFxcIjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDEuNnJlbSA0cmVtIDAuMnJlbTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXItLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMzAlKTtcXG59XFxuXFxuLmRhaWx5Q29udGFpbmVyLS1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAxNSUpO1xcbn1cXG5cXG4uZGFpbHlDb250YWluZXJfX2RhaWx5Q2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMCAwIDEuNnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRhaWx5Q2FyZF9fbWF4IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcblthbHQ9XFxcIkNvbmRpdGlvblxcXCJdIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmNlbHNpdXM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mYWhyZW5oZWl0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2Vsc2l1cy0tYmlnOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuOHJlbTtcXG4gIGxlZnQ6IDE3LjNyZW07XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmZhaHJlbmhlaXQtLWJpZzo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjhyZW07XFxuICBsZWZ0OiAxNy4zcmVtO1xcbiAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjNweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2hlciAqL1xcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBoZWlnaHQ6IDE3cHg7XFxuICB3aWR0aDogMTdweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNmU2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTdweCk7XFxuICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuW2Zvcj1cXFwiY2l0eS1uYW1lXFxcIl0ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jY2l0eS1uYW1lIHtcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHggMy40cmVtIDdweCAxcmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMjUlKTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcblt0eXBlPVxcXCJpbWFnZVxcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuW3R5cGU9XFxcImltYWdlXFxcIl06YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmVycm9yLS1hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWF4LXdpZHRoOiAyOHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9tb2R1bGVzL3N0eWxlL3N0eWxlLmNzc1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL21vZHVsZXMvbW9kZWwvbWFpbk1vZGVsXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tb2R1bGVzL3ZpZXcvbWFpblZpZXdcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuXG5jb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xuY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XG5cbmlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbn1cbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwibW9kZWwiLCJ2aWV3IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWFyY2hXZWF0aGVyIiwiY2hlY2tJbnB1dCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImRlZ3JlZUJpZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWdyZWVTbWFsbCIsIndpbmQiLCJtYWluIiwic3BhbiIsInN3aXRjaEJ0biIsIkNoZWNrRW1wdHkiLCJnZXRFbGVtZW50cyIsInByZXZlbnREZWZhdWx0IiwidmFsaWRpdHkiLCJ2YWxpZCIsInNob3dFbXB0eUVycm9yIiwiZ2V0R2VvTG9jYXRpb24iLCJnZW9Mb2NhdGlvbiIsInNob3dVbmtub3duQ2l0eUVycm9yIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJjdXJyZW50V2VhdGhlciIsImdldEVpZ2h0RGF5c1dlYXRoZXIiLCJlaWdodERheXNXZWF0aGVyIiwiaGFzQ2hpbGROb2RlcyIsImRlbGV0ZUZvcmVjYXN0Iiwic2hvd0ZvcmVjYXN0IiwiY2hhbmdlVW5pdHMiLCJjcmVhdGVNYWluQ2FyZCIsImNyZWF0ZUVpZ2h0RGF5c0NhcmQiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwiZmV0Y2hHZW9Mb2NhdGlvbiIsInZhbHVlIiwiZmV0Y2hDdXJyZW50V2VhdGhlciIsImxhdCIsImxvbiIsImZldGNoRWlnaHREYXlzV2VhdGhlciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidGV4dENvbnRlbnQiLCJjb252ZXJ0VG9GYWhyZW5oZWl0IiwiY29udmVydFRvTXBoIiwiY29udmVydFRvQ2Vsc2l1cyIsImNvbnZlcnRUb0ttaCIsInRvZ2dsZSIsImVsZW1lbnQiLCJkZWdyZWUiLCJ2YWxOdW0iLCJwYXJzZUZsb2F0IiwiTWF0aCIsInJvdW5kIiwic3BlZWQiLCJ0b0ZpeGVkIiwiRWlnaHREYXlzQ2FyZCIsImRhdGEiLCJtYXhUZW1wIiwibWluVGVtcCIsImltZyIsImRheSIsImkiLCJkYWlseSIsImxlbmd0aCIsInRlbXAiLCJtYXgiLCJtaW4iLCJzcmMiLCJ3ZWF0aGVyIiwiaWNvbiIsImRheU9mV2VlayIsImdldERheU9mV2VlayIsIkRhdGUiLCJkdCIsImdldERheSIsIm51bWJlciIsIk1haW5DYXJkIiwiY29uZGl0aW9uIiwiY2l0eSIsImRlZ3JlZXMiLCJmZWVsc0xpa2UiLCJodW1pZGl0eSIsImNhcmRJbmZvIiwiY2FyZERhdGEiLCJNb2RlbCIsImtleSIsIm1ldHJpYyIsImltcGVyaWFsIiwic2VhcmNoVGV4dCIsIlVSTCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGVzY3JpcHRpb24iLCJyZWdpb25OYW1lc0luRW5nbGlzaCIsIkludGwiLCJEaXNwbGF5TmFtZXMiLCJ0eXBlIiwibmFtZSIsIm9mIiwic3lzIiwiY291bnRyeSIsImZlZWxzX2xpa2UiLCJjb252ZXJ0RnJvbU1zIiwibWFpbkNhcmQiLCJnZW5lcmF0ZU1haW5DYXJkIiwiZmlsbE1haW5DYXJkIiwibWFpbkNhcmRJdGVtIiwiZWlnaHREYXlzQ2FyZCIsImdlbmVyYXRlRWlnaHREYXlzQ2FyZCIsImZpbGxFaWdodERheXNDYXJkIiwiZWlnaHREYXlzQ2FyZEl0ZW0iLCJjbGVhclNreURheSIsImNsZWFyU2t5TmlnaHQiLCJmZXdDbG91ZHNEYXkiLCJmZXdDbG91ZHNOaWdodCIsInNjYXR0ZXJlZENsb3Vkc0RheSIsInNjYXR0ZXJlZENsb3Vkc05pZ2h0IiwiYnJva2VuQ2xvdWRzTmlnaHQiLCJzaG93ZXJSYWluRGF5Iiwic2hvd2VyUmFpbk5pZ2h0IiwicmFpbkRheSIsInJhaW5OaWdodCIsInRodW5kZXJzdG9ybURheSIsInRodW5kZXJzdG9ybU5pZ2h0Iiwic25vd0RheSIsInNub3dOaWdodCIsIm1pc3REYXkiLCJtaXN0TmlnaHQiLCJpY29uQ29kZSIsInNldERhaWx5Q29udGFpbmVyQkciLCJjaGFuZ2VNYWluQmciLCJicm9rZW5DbG91ZHNEYXkiLCJpbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiY29sb3IiLCJhZGQiLCJjaGFuZ2VCZyIsIlZpZXciLCJwb3NpdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xvbmUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFwcGVuZCIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsImNvbnRyb2xsZXIiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==