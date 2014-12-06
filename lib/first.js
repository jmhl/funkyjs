'use strict';

module.exports = first;

/**
 * Returns the first element from an array.
 *
 * @param {array} arr
 *
 * @returns {var} The first element in the array.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * first(arr);
 * // returns 1
 */

function first(arr) {
  return arr[0];
}
