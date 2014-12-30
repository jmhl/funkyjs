/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = scanl;

/**
 * Scans an array starting from the left - similar to the foldl function, except that it returns a list of all the accumulator values (starting with acc - the argument passed to the list) ending with the final accumulator.
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
 * // returns [0, 1, 3, 8, 11];
 *
 * @example
 * var scanAdd = scanl(add);
 * 
 * scanAdd(0, arr);
 * // returns [0, 1, 3, 8, 11];
 */

function scanl(fn, acc, arr) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curryN(3, scanl)(fn);
  }

  var len = arr.length;
  var result = new Array(len);
  result[0] = acc;

  for (var i = 0; i < len; i += 1) {
    acc = fn(acc, arr[i]);
    result[i + 1] = acc;
  }

  return result;
}
