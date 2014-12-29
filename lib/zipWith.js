/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = zipWith;

/**
 * Joins (zips) two lists together while applying a given function between the corresponding elements.
 *
 * @params {function} fn The function to be applied to each element pair.
 * @params {array} list1
 * @params {array} list2
 *
 * @returns {array} Returns an array made up from the two given lists after having the given function applied.
 *
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * var l1 = [1, 2, 3];
 * var l2 = [2, 3, 4];
 *
 * zipWith(add, l1, l2);
 * // returns [3, 5, 7];
 *
 * @example
 * var zipWithAdd = zipWith(add);
 * zipWithAdd(l1, l2);
 * // returns [3, 5, 7];
 */

function zipWith(fn, list1, list2) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curryN(3, zipWith)(fn);
  }

  if (arguments.length !== 3) {
    throw new TypeError('ZipWith must be called with a function and two lists');
  }

  var len1 = list1.length;
  var len2 = list2.length;
  var len = len1 >= len2
    ? len2
    : len1;

  var result = new Array(len);

  for (var i = 0; i < len; i += 1) {
    result[i] = fn(list1[i], list2[i]);
  }

  return result;
}
