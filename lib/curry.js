'use strict';

module.exports = curry;

/**
 * Curries a function. Returns a new function with the first parameter bound.
 *
 * @param {function} fn The function to be curried.
 *
 * @returns A new function that can take one argument.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * var addTwo = curry(add)(2);
 *
 * addTwo(1);
 * // 3
 */

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
