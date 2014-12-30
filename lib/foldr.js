/*jslint node: true */

'use strict';

module.exports = foldr;

/**
 * Performs a right fold on an array: traverses a list from right to left and performs a function on each element until left with a single value. We start with an initial value, the accumulator (acc), and each operation will result in a new accumulator.
 *
 * @params {function} fn The function to apply to each element.
 * @params {array} arr The array to traverse.
 * @params {element} acc The initial accumulator value.
 *
 * @returns The single result of the fold.
 *
 * @example
 * function mult(a, b) {
 *   return a * b;
 * }
 *
 * var arr = [2, 3, 4];
 * foldr(mult, arr, 2);
 * // returns 48
 */

function foldr(fn, arr, acc) {
  var len = arr.length;
  var result = acc;

  for (var i = len - 1; i >= 0; i -= 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
