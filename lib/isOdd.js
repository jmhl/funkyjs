/*jslint node: true */

'use strict';

module.exports = isOdd;

/**
 * Detects whether the argument is an odd number.
 *
 * @param {var} num The element to be tested.
 *
 * @returns {boolean} Returns true if the element is odd, returns false otherwise. 
 *
 * @example
 * isOdd(3);
 * // true
 */

function isOdd(num) {
  return num % 2 !== 0;
}
