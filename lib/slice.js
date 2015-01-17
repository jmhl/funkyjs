/*jslint node: true */

'use strict';

var isArray  = require('./isArray');
var isString = require('./isString');

module.exports = slice;

/**
 * Takes a string or array and returns the substring or substring from the specified values.
 *
 * @param {string/array} item
 * @param {number} start The starting index of the slice that you want.
 * @param {length} length (optional) The desired length of the slice. When this value is not specified, slice assumes you want the slice from the starting index to the end of the array or string. 
 *
 * @returns {string} The string slice.
 *
 * @example
 * var str = 'hello there';
 *
 * slice(str, 2, 3);
 * // returns 'llo'
 *
 * @example
 * slice(str, 2);
 * // returns 'llo there'
 */

function slice(item, start, length) {
  var len = length ?
    length :
    item.length - start;

  if (isArray(item)) {
    return _sliceArray(item, start, len);
  } else {
    return _sliceString(item, start, len);
  }
}

function _sliceArray(arr, start, length) {
  var result = [];

  for (var i = start, j = 0; i < start + length; i += 1, j += 1) {
    result[j] = arr[i];
  }

  return result;
}

function _sliceString(str, start, length) {
  var result = '';

  for (var i = start; i < start + length; i += 1) {
    result += str[i]
  }

  return result;

}
