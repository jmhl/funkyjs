/*jslint node: true */

'use strict';

module.exports = count;

/**
 * Counts the number of times that a value occurs in an array.
 *
 * @param {array} arr
 * @param {var} val The value to be counted
 *
 * @returns {number} The number of times that the value occurs.
 * If the value does not occur, then the function returns 0.
 *
 * @example
 * var arr = [1, 2, 3, 2];
 *
 * count(arr, 2);
 * // returns 2
 */
function count(arr, val) {
  var count = 0;
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    if (arr[i] === val) {
      count += 1;
    }
  }

  return count;
}
