/*jslint node: true */

'use strict';

var isString = require('./isString');

/**
 * Downcases every letter in a string.
 *
 * @params {string}
 *
 * @returns {string} The original string in lowercase.
 *
 * @example
 * var str = 'TEST';
 *
 * downcase(str);
 * // returns 'test'
 */

function downcase(str) {
  if (!isString(str)) {
    throw new TypeError('Downcase must take a string');
  }

  return str && str.toLowerCase();
}

module.exports = downcase;
