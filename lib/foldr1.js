/*jslint node: true */

'use strict';

module.exports = foldr1;

/**
 * Performs a right fold on an array: traverses a list from right to left and performs a function on each element until left with a single value. Unlike foldr, this does not require an accumulator value; the initial accumlator value will be the final element in the list.
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
 * foldr1(mult, arr);
 * // returns 24
 */

function foldr1(fn, arr) {
  var len = arr.length;
  var result = arr[len - 1];

  for (var i = len - 2; i >= 0; i -= 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
