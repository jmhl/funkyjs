/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = scanr;

/**
 * Scans an array starting from the right - similar to the foldr function, except that it returns a list of all the accumulator values ending with the final accumulator (and starting with acc - the argument passed to the list).
 *
 * @params {function} fn The function to perform on each element in the array.
 * @params {element} acc The initial accumulator.
 * @params {array} arr
 *
 * @returns {array} Returns an array of all the accumulator values.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * var arr = [3, 5, 2, 1];
 *
 * scanr(add, 0, arr);
 * // returns [11, 8, 3, 1, 0];
 *
 * @example
 * var scanAdd = scanr(add);
 *
 * scanAdd(0, arr);
 * // returns [11, 8, 3, 1, 0];
 */

function scanr(fn, acc, arr) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curryN(3, scanr)(fn);
  }

  var len = arr.length;
  var result = new Array(len);
  result[len] = acc;

  for (var i = len - 1; i >= 0; i -= 1) {
    acc = fn(acc, arr[i]);
    result[i] = acc;
  }

  return result;
}
