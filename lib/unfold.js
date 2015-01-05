/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = unfold;

/**
 * Unfolds a list from a starting value.
 *
 * This function can be curried.
 *
 * @params {element} end The end condition for the creation of the list.
 * @params {function} fn The function that effects the next value of the list.
 * @params {element} value The beginning value of the list.
 *
 * @returns {array} Returns the created array.
 *
 * @example
 * function minusOne(num) {
 *   return num - 1;
 * }
 *
 * unfold(minusOne, 0, 10);
 * // returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 *
 * @example
 * var unfoldBySubtractingOne = unfold(minusOne, 0);
 *
 * unfoldBySubtractingOne(10);
 * // returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

function unfold(fn, end, val) {
  if (arguments.length === 2 && isFunction(fn)) {
    return curryN(3, unfold)(fn)(end);
  }

  if (val === end) {
    return [];
  }

  var result = [val];
  result = result.concat(unfold(fn, end, fn(val)));

  return result;
}
