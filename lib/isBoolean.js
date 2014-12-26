/*jslint node: true */

'use strict';

module.exports = isBoolean;

/**
 * Detects whether the argument is a boolean.
 *
 * @param {var} bool The element to be tested.
 *
 * @returns {boolean} Returns true if the element is a boolean, returns false otherwise. 
 *
 * @example
 * isBoolean(true);
 * // true
 */

function isBoolean(bool) {
  return typeof bool === 'boolean';
}
