/*jslint node: true */

'use strict';

module.exports = split;

/**
 * Splits a string on a given value.
 *
 * @param {string} str The string that you wish to split.
 * @param {string} splitter The character that you wish to split the string on.
 *
 * @returns {array} An array of splits, split on the the splitter character.
 *
 * @example
 * var str = 'hello there';
 *
 * split(str, ' ');
 * // returns ['hello', 'there']
 */

function split(str, splitter) {
  var result = [];
  var len = str.length;
  var count = 0;

  for (var i = 0; i < len; i += 1) {
    if (str[i] === splitter) {
      count += 1;
    } else {
      if (!result[count]) {
        result[count] = '';
      }

      result[count] += str[i];
    }
  }

  return result;
}
