'use strict';

module.exports = reverse;

/**
 * Takes a list and returns a new list in reverse order.
 *
 * @param {array} arr The array to be reversed.
 *
 * @returns {array} A new array with the items from the given array in reverse order.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * reverse(arr);
 * //returns [3, 2, 1]
 */

function reverse(arr) {
  var len = arr.length;
  var result = new Array(len);
  var j = 0;

  for (var i = len - 1; i >= 0; i -= 1, j += 1) {
    result[j] = arr[i];
  }

  return result;
}
