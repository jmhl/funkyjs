'use strict';

module.exports = isFunction;

/**
 * Detects whether the argument is a function.
 *
 * @param {var} fn The element to be tested.
 *
 * @returns {boolean} Returns true if the element is a function, returns false otherwise. 
 *
 * @example
 * isFunction(function() {});
 * // true
 */

function isFunction(fn) {
  return !!fn && fn instanceof Function;
}
