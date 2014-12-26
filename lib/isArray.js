/*jslint node: true */

'use strict';

module.exports = isArray;

/**
 * Detects whether the argument is an array.
 *
 * @param {var} arr The element to be tested.
 *
 * @returns {boolean} Returns true if the element is an array, but false if the element is not an array.
 *
 * @example
 * isArray([]);
 * // true
 */

function isArray(arr) {
  return Array.isArray(arr);
}
