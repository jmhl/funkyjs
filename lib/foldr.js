/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = foldr;

/**
 * Performs a right fold on an array: traverses a list from right to left and performs a function on each element until left with a single value. We start with an initial value, the accumulator (acc), and each operation will result in a new accumulator.
 *
 * @params {function} fn The function to apply to each element.
 * @params {element} acc The initial accumulator value.
 * @params {array} arr The array to traverse.
 *
 * @returns The single result of the fold.
 *
 * @example
 * function mult(a, b) {
 *   return a * b;
 * }
 *
 * var arr = [2, 3, 4];
 * foldr(mult, 2, arr);
 * // returns 48
 */

function foldr(fn, acc, arr) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curryN(3, foldr)(fn);
  }

  var len = arr.length;
  var result = acc;

  for (var i = len - 1; i >= 0; i -= 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
