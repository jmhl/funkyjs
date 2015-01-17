/*jslint node: true */

'use strict';

var isString = require('./isString');

/**
 * Capitalizes every letter in a string.
 *
 * @params {string}
 *
 * @returns {string} The original string in uppercase.
 *
 * @example
 * var str = 'test';
 *
 * upcase(str);
 * // returns 'TEST'
 */

function upcase(str) {
  if (!isString(str)) {
    throw new TypeError('Upcase must take a string');
  }

  return str && str.toUpperCase();
}

module.exports = upcase;
