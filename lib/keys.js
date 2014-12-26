/*jslint node: true */

'use strict';

var isObject = require('./isObject');

module.exports = keys;

/**
 * Provides an array of the keys from an object.
 *
 * @param {object} obj
 * 
 * @returns {array} An array of all the keys in the object.
 *
 * @example
 * var obj = { 'one': 1, 'two': 2 };
 *
 * keys(obj);
 * // returns ['one', 'two']
 */

function keys(obj) {
  if (!isObject(obj)) {
    throw new TypeError('Keys must be used with an object');
  }

  var result = [];

  for (var key in obj) {
    result.push(key);
  }

  return result;
}
