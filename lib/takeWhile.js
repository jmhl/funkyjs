/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = takeWhile;

/**
 * Takes elements from the array that match the predicate function until it returns false.
 *
 * @params {function} predicate The predicate function.
 * @params {array} arr
 *
 * @returns {array} Returns an array of only elements that return true for the predicate function until the first element returns false.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var arr = [2, 4, 6, 7, 8, 10, 11];
 * 
 * takeWhile(isEven, arr);
 * // returns [2, 4, 6]
 *
 * @example
 * var takeWhileEven = takeWhile(isEven);
 * takeWhileEven(arr);
 * // returns [2, 4, 6]
 */

function takeWhile(predicate, arr) {
  if (!isFunction(predicate)) {
    throw new TypeError('TakeWhile requires a predicate function');
  }

  if (arguments.length === 1) {
    return curry(takeWhile)(predicate);
  }

  var len = arr.length;
  var result = [];

  for (var i = 0; i < len; i += 1) {
    if (!predicate(arr[i])) {
      return result;
    }

    result.push(arr[i]);
  }

  return result;
}
