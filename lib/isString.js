/*jslint node: true */

'use strict';

module.exports = isString;

/**
 * Detects whether the argument is a string.
 *
 * @param {var} str The element to be tested.
 *
 * @returns {boolean} Returns true if the element is a string, returns false otherwise. 
 *
 * @example
 * isString('');
 * // true
 */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
