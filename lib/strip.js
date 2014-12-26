/*jslint node: true */

'use strict';

module.exports = strip;

/**
 * Strips a string of all whitespace characters.
 *
 * @param {string} str The string you wish to strip.
 *
 * @result {string} The string stripped of all whitespace characters.
 *
 * @example
 * var str = 'hello world';
 *
 * strip(str)
 * // returns 'helloworld'
 */

function strip(str) {
  return str.replace(/\s/g, '');
}
