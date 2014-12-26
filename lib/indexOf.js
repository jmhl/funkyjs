/*jslint node: true */

'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = indexOf;

/**
 * Returns the index of a particular value in the array. It also allows you to specify which index you want to start the search from.
 *
 * @param {array} arr The list to search in.
 * @param {var} val The value that you wish to search for.
 * @param {number} fromIdx (optional) The index from which you want to start searching for the value from.
 *
 * @returns {number} If it finds the value, it returns the index of the first occurrence of the value. Otherwise it returns null.
 *
 * @example
 * var arr = [1, 2, 3, 1, 2, 3];
 *
 * indexOf(arr, 2);
 * // returns 1
 *
 * @example
 * indexOf(arr, 2, 3);
 * // returns 4
 */

function indexOf(arr, val, fromIdx) {
  if (!isArray(arr) || !isNumber(val)) {
    throw new TypeError('Must take an array and a number');
  }

  var len = arr.length;
  var start = fromIdx ? fromIdx : 0;

  for (var i = start; i < len; i += 1) {
    if (arr[i] === val) {
      return i;
    }
  }

  return null;
}
