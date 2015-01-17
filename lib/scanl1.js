/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = scanl1;

/**
 * Scans an array starting from the left - similar to the foldl1 function, except that it returns a list of all the accumulator values starting with the first element in the list and ending with the final accumulator.
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
 * scanl1(add, arr);
 * // returns [3, 8, 10, 11];
 *
 * @example
 * var scanAdd = scanl1(add);
 *
 * scanAdd(arr);
 * // returns [3, 8, 10, 11];
 */

function scanl1(fn, arr) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curry(scanl1)(fn);
  }

  var acc = arr[0];
  var len = arr.length;
  var result = new Array(len);
  result[0] = acc;

  for (var i = 1; i < len; i += 1) {
    acc = fn(acc, arr[i]);
    result[i] = acc;
  }

  return result;
}

