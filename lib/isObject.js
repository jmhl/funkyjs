/*jslint node: true */

'use strict';

module.exports = isObject;

/**
 * Checks if the functions is an object.
 *
 * @param {object} The object (or not) to check.
 *
 * @returns {boolean} True if passed an object, false otherwise.
 *
 * @example
 * isObject({});
 * // returns true
 */

function isObject(obj) {
  return {}.toString.call(obj) === '[object Object]';
}
