/*jslint node: true */

'use strict';

module.exports = foldl1;

/**
 * Performs a left fold on an array: traverses a list from left to right and performs a function on each element until left with a single value. Unlike foldl, this does not require an accumulator value; the initial accumlator value will be the first element in the list.
 *
 * @params {function} fn The function to apply to each element.
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
 * foldl1(mult, arr);
 * // returns 24
 */

function foldl1(fn, arr) {
  var len = arr.length;
  var result = arr[0];

  for (var i = 1; i < len; i += 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
