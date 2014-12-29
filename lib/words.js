/*jslint node: true */

'use strict';

module.exports = words;

/**
 * Should split a string on spaces into an array of strings.
 *
 * @params {string} str The string to be split.
 *
 * @returns {array} Returns an array of strings.
 *
 * @example
 * var str = 'this is a test';
 *
 * words(str);
 * // returns ['this', 'is', 'a', 'test']
 */

function words(str) {
  return str.split(/ /);
}
