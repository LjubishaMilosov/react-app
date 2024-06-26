"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _htmlBehavior = require("../support/html-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, iframeName, input) {
    var page, globalConfig, elementIdentifier, iframeIdentifier, elementIframe;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          console.log("I fill in the ".concat(elementKey, " input on the ").concat(iframeName, " iframe with").concat(input));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
          _context2.next = 6;
          return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

        case 6:
          elementIframe = _context2.sent;
          _context2.next = 9;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var elementIframe, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

                case 2:
                  elementIframe = _context.sent;
                  _context.next = 5;
                  return page.waitForSelector(iframeIdentifier, {
                    state: 'visible'
                  });

                case 5:
                  result = _context.sent;

                  if (!result) {
                    _context.next = 10;
                    break;
                  }

                  if (!elementIframe) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, input);

                case 10:
                  return _context.abrupt("return", result);

                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));

        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());