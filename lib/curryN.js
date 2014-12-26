'use strict';

var isNumber   = require('./isNumber');
var isFunction = require('./isFunction');

module.exports = curryN;

/**
 * Curries a function. Returns a new function with the first parameter bound.
 * 
 * @param {number} numArgs The total number of arguments.
 * @param {function} fn The function to the curried.
 *
 * @returns A new function that can take n arguments.
 *
 * @example
 * var curriedAddThree = curryN(3, addThree);
 * var f = curriedAddThree(1, 2);
 * f(3);
 * // returns 6
 */

function curryN(numArgs, fn) {
  if (!isNumber(numArgs)) {
    throw new TypeError('Must be told a number of arguments to curry');
  } else if (!isFunction(fn)) {
    throw new TypeError('Must be passed a function to curry');
  }

  var maxArgs = numArgs;
  var args = [];

  function curry() {
    if (arguments.length === 0) {
      throw new TypeError('Function called with no arguments');
    }
    var newArgs = Array.prototype.slice.call(arguments);
    args = args.concat(newArgs);
    maxArgs -= newArgs.length;

    if (maxArgs === 0) {
      return fn.apply(null, args);
    } else {
      return curry; 
    }
  }

  return curry;
}
