'use strict';

module.exports = curry;

function curry(fn) {
  return function(a, b) {
    switch (arguments.length) {
      case 0:
        throw new TypeError('Function called with no arguments');
      case 1:
        return function(b) {
          return fn(a, b);
        }
      default:
        return fn(a, b);
    }
  }
};
