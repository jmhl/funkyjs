/*jslint node: true */

'use strict';

module.exports = isNumber;

/**
 * Detects whether the argument is a number.
 *
 * @param {var} num The element to be tested.
 *
 * @returns {boolean} Returns true if the element is a number, returns false otherwise. 
 *
 * @example
 * isNumber(2);
 * // true
 */

function isNumber(num) {
  return !isNaN(num) && parseInt(num) === num;
}
