/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');
var isObject   = require('./isObject');

module.exports = map;

/**
 * Iterates over an array or object, calls a given function on each item and then returns a new array or object with the results of each function call.
 *
 * This function can be curried.
 *
 * @param {function} fn The function to be called on each item.
 * @param {array/object} iterable The list to be mapped.
 *
 * @returns {array/object} The mapped list.
 *
 * @example
 * function square(a) {
 *   return a * a;
 * }
 *
 * var arr = [1, 2, 3];
 *
 * map(square, arr);
 *
 * // returns [1, 4, 9]
 * // Also note that arr === [1, 2, 3]
 *
 * @example
 * var obj = { 'one': 1, 'two': 2 };
 *
 * map(square, obj);
 * // returns { 'one': 1, 'two': 4 }
 * // Also note that obj === { 'one': 1, 'two': 2}
 *
 * @example
 * var arr = [2, 3, 4];
 * var mapSquares = map(square);
 *
 * mapSquares(arr);
 * // returns [4, 9, 16]
 * // Also note that arr === [2, 3, 4]
 */

function map(fn, iterable) {
  var result;
  var len;

  if (isArray(iterable)) {
    len = iterable.length;
    result = new Array(len);

    for (var i = 0; i < len; i += 1) {
      result[i] = fn(iterable[i]);
    }
  } else if (isObject(iterable)) {
    result = {};
    var objKeys = Object.keys(iterable);
    len = objKeys.length;

    for (var i = 0; i < len; i += 1) {
      var key = objKeys[i];
      result[key] = fn(iterable[key]);
    }
  } else if (arguments.length === 1 && isFunction(fn)) {
    return curry(map)(fn);
  } else {
    throw new TypeError('Must be of type Array or Object');
  }

  return result;
}
