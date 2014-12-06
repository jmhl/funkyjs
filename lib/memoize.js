'use strict';

var isFunction = require('./isFunction');

module.exports = memoize;

/**
 * Memoizes the results of a function. So if the exact same parameters are passed to the function, the function will not be called again, but will instead return the desired result from a cache.
 *
 * @param {function} fn The function that you wish to memoize
 *
 * @returns {function} Returns a new function which either calls the function and returns the result, or returns the result from the cache.
 *
 * @example
 * var numberOfCalls = 0;
 *
 * function trackedAdd(a, b) {
 *   numberOfCalls += 1; // this variable increments to prove that the memoization works 
 *   return a + b;
 * }
 *
 * var memoizeTrackedAdd = meomize(trackedAdd);
 *
 * memoizeTrackedAdd(1, 2);
 * // returns 3
 * memoizeTrackedAdd(1, 2);
 * // returns 3
 * // Also note that numberOfCalls === 1
 * memoizeTrackedAdd(2, 3);
 * // returns 5
 * // Also note that now numberOfCalls === 2
 */

function memoize(fn) {
  if (!isFunction(fn)) {
    throw new TypeError('Memoize only works with a function parameter');
  }

  var cache = {};

  return function() {
    var arr = [];
    var len = arguments.length;
    for (var i = 0; i < len; i += 1) {
      arr.push(arguments[i]); 
    }

    var argString = arr.toString();
    if (cache[argString]) {
      return cache[argString];
    }

    cache[argString] = fn.apply(null, arr);
    return cache[argString];
  }
}
