/*jslint node: true */

'use strict';

module.exports = last;

/**
 * Retrieves the last value from an array.
 *
 * @param {array} arr
 *
 * @returns {var} The last value in the array.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * last(arr);
 * // 3
 */

function last(arr) {
  return arr[arr.length - 1];
}

