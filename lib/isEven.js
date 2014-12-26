/*jslint node: true */

'use strict';

module.exports = isEven;

/**
 * Detects whether a value is even.
 *
 * @param {var} num The element to be tested.
 *
 * @returns {boolean} Returns true if the value is even, false otherwise.
 *
 * @example
 * isEven(4);
 * // true
 */

function isEven(num) {
  return num % 2 === 0;
}
