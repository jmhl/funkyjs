/*jslint node: true */

'use strict';

var isArray = require('./isArray');
var reduce  = require('./reduce');

module.exports = flatten;

/**
 * Flattens the array recursively. Handles deeply nested arrays.
 *
 * @param {array} list The list flatten
 *
 * @returns {array} An array of all the values within the array.
 *
 * @example
 * var arr = [1, 2, [3, 4], 5, [6, [7, 8]]];
 *
 * flatten(arr);
 * // returns [1, 2, 3, 4, 5, 6, 7, 8]
 */

function flatten(list) {
  if (!isArray(list)) {
    throw new TypeError('Flatten must be used with an array');
  }

  return reduce(_flatten, [], list);
}

function _flatten(a, b) {
  if (isArray(b)) {
    b = flatten(b);
  }

  return a.concat(b);
}
