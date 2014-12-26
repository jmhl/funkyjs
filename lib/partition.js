/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');

module.exports = partition;

/**
 * Splits an array into an array with two subarrays based on a predicate function. One subarray has all the values that return true for the function, and the second has all the values that return false for the function.
 *
 * This function can be curried.
 *
 * @param {function} predicate The function that determines how the list is partitioned.
 * @param {array} arr The list to be partitioned.
 *
 * @returns {array} A multidimensional array of the true and false values for the predicate function. The first subarray will be the true values and the second subarray will be the false values.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var arr = [0, 1, 2, 3, 4, 5];
 *
 * partition(isEven, arr);
 * // returns [[0, 2, 4], [1, 3, 5]]
 *
 * @example
 * var partitionEvens = partition(isEven);
 *
 * partitionEvens(arr);
 * // returns [[0, 2, 4], [1, 3, 5]]
 */

function partition(predicate, arr) {
  if (arguments.length === 1 && isFunction(predicate)) {
    return curry(partition)(predicate);
  }

  if (!isArray(arr)) {
    throw new TypeError('Must be of type array');
  }

  var passes = [];
  var fails = [];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    var item = arr[i];

    if (predicate(item)) {
      passes.push(item);
    } else {
      fails.push(item);
    }
  }

  return [passes, fails];
}
