/*jslint node: true */

'use strict';

module.exports = foldl;

/**
 * Performs a left fold on an array: traverses a list from left to right and performs a function on each element until left with a single value. We start with an initial value, the accumulator (acc), and each operation will result in a new accumulator.
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
 * foldl(mult, 2, arr);
 * // returns 48
 */

function foldl(fn, acc, arr) {
  var len = arr.length;
  var result = acc;

  for (var i = 0; i < len; i += 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
