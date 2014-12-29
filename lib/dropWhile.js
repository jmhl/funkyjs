/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = dropWhile;

/**
 * Drop elements from the array that match the predicate function until it returns false then returns an array with all the remaining elements.
 *
 * @params {function} predicate The predicate function.
 * @params {array} arr
 *
 * @returns {array} Returns an array of only elements that return true for the predicate function.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var arr = [2, 4, 6, 7, 8, 10, 11];
 * 
 * dropWhile(isEven, arr);
 * // returns [7, 8, 10, 11]
 *
 * @example
 * var dropWhileEven = dropWhile(isEven);
 * dropWhileEven(arr);
 * // returns [7, 8, 10, 11]
 */

function dropWhile(predicate, arr) {
  if (!isFunction(predicate)) {
    throw new TypeError('DropWhile requires a predicate function');
  }

  if (arguments.length === 1) {
    return curry(dropWhile)(predicate);
  }

  var len = arr.length;
  var result = [];
  var reject = true;

  for (var i = 0; i < len; i += 1) {
    if (!predicate(arr[i])) {
      reject = false;
    }

    if (!reject) {
      result.push(arr[i]);
    }
  }

  return result;
}
