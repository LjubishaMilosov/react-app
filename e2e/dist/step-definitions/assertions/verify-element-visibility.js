"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(elementKey, expectedElementText) {
    var page, globalConfig, globalVariables, elementIdentifier, content;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig, globalVariables = this.globalVariables;
          console.log("the ".concat(elementKey, " should contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalVariables, globalConfig);
          _context.next = 5;
          return page.textContent(elementIdentifier);

        case 5:
          content = _context.sent;

        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should be displayed$/, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(elementKey) {
    var page, globalVariables, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          page = this.screen.page, globalVariables = this.globalVariables, globalConfig = this.globalConfig;
          console.log("the ".concat(elementKey, " should be displayed"));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalVariables, globalConfig);
          _context3.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var isElementVisible;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return page.$(elementIdentifier);

                case 2:
                  _context2.t0 = _context2.sent;
                  isElementVisible = _context2.t0 != null;
                  return _context2.abrupt("return", isElementVisible);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));

        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());