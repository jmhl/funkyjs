/*jslint node: true */

'use strict';

module.exports = slice;

/**
 * Takes a string and returns the substring from the specified values.
 *
 * @param {string} str
 * @param {number} start The starting index of the string of the slice that you want.
 * @param {length} length (optional) The desired length of the string slice. When this value is not specified, slice assumes you want the slice from the starting index to the end of the string. 
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

function slice(str, start, length) {
  var result = '';
  length = length
    ? length
    : str.length - start;

  for (var i = start; i < start + length; i += 1) {
    result += str[i];
  }

  return result;
}
