/*jslint node: true */

'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = take;

/**
 * Given an array, it returns a new array of only the first n elements.
 *
 * This function can be curried.
 *
 * @param {number} num The number of elements to take from the array.
 * @param {array} arr The array that you wish to take elements from.
 *
 * @returns {array} The new array made up of just the first n (num) of elements in the given array (arr).
 *
 * @example
 * var arr = [1, 2, 3, 4, 5, 6];
 *
 * take(2, arr);
 * // returns [1, 2]
 *
 * @example
 * var takeTwo = take(2);
 *
 * takeTwo(arr);
 * // returns [1, 2]
 */

function take(num, arr) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(arr)) {
    throw new TypeError('Take must be passed an array');
  }

  if (argsLen === 1 && isNumber(num)) {
    return curry(take)(num);
  }

  var result = new Array(num);

  for (var i = 0; i < num; i += 1) {
    result[i] = arr[i];
  }

  return result;
}
