"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitFor = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var waitFor = exports.waitFor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(predicate, options) {
    var _ref2, _ref2$timeout, timeout, _ref2$wait, wait, sleep, startDate, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref2 = options || {}, _ref2$timeout = _ref2.timeout, timeout = _ref2$timeout === void 0 ? 20000 : _ref2$timeout, _ref2$wait = _ref2.wait, wait = _ref2$wait === void 0 ? 2000 : _ref2$wait;

          sleep = function sleep(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          };

          startDate = new Date();

        case 3:
          if (!(new Date().getTime() - startDate.getTime() < timeout)) {
            _context.next = 13;
            break;
          }

          _context.next = 6;
          return predicate();

        case 6:
          result = _context.sent;

          if (!result) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", result);

        case 9:
          _context.next = 11;
          return sleep(wait);

        case 11:
          _context.next = 3;
          break;

        case 13:
          throw new Error("Wait time of ".concat(timeout, "ms exceeded"));

        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function waitFor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();