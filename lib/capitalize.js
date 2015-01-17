/*jslint node: true */

'use strict';

var isString = require('./isString');

/**
 * Capitalizes the first letter in a string.
 *
 * @params {string}
 *
 * @returns {string} The original string with the first letter capitalized.
 *
 * @example
 * var str = 'test';
 *
 * capitalize(str);
 * // returns 'Test'
 */

function capitalize(str) {
  if (!isString(str)) {
    throw new TypeError('Capitalize must take a string');
  }

  return str && str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
