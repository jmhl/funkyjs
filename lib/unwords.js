/*jslint node: true */

'use strict';

module.exports = unwords;

/**
 * Should join an array of strings on spaces into a single string.
 *
 * @params {array} arr The string to be split.
 *
 * @returns {array} Returns a single string.
 *
 * @example
 * var str = 'this is a test';
 *
 * unwords(['this', 'is', 'a', 'test']);
 * // returns 'this is a test' 
 */

function unwords(arr) {
  return arr.join(' ');
}
