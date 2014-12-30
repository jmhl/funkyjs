/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = scanr1;

/**
 * Scans an array starting from the right - similar to the foldr1 function, except that it returns a list of all the accumulator values starting with the last element in the list and ending with the final accumulator.
 *
 * @params {function} fn The function to perform on each element in the array.
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
 * scanr1(add, arr);
 * // returns [3, 8, 10, 11];
 *
 * @example
 * var scanAdd = scanr1(add);
 *
 * scanAdd(arr);
 * // returns [3, 8, 10, 11];
 */

function scanr1(fn, arr) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curry(scanr1)(fn);
  }

  var len = arr.length;
  var acc = arr[len - 1];
  var result = new Array(len - 1);
  result[len - 1] = acc;

  for (var i = len - 2; i >= 0; i -= 1) {
    acc = fn(acc, arr[i]);
    result[i] = acc;
  }

  return result;
}
