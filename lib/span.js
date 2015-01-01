/*jslint node: true */

'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = span;

/**
 * Takes an array and then returns an array with two subarrays - the first subarray contains the elements until the predicate fails, the second contains the remaining elements.
 *
 * This function can be curried.
 *
 * @params {function} predicate The predicate function to match against.
 * @params {array} arr
 *
 * @returns Returns an array of length 2.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var arr = [2, 4, 6, 1, 2, 3];
 * 
 * span(isEven, arr);
 * // returns [[2, 4, 6], [1, 2, 3]]
 *
 * @example
 * var spanEvens = span(isEven);
 *
 * spanEvens(arr);
 * // returns [[2, 4, 6], [1, 2, 3]]
 */

function span(predicate, arr) {
  if (arguments.length === 1 && isFunction(predicate)) {
    return curry(span)(predicate);
  }

  var result = new Array([], []);
  var len = arr.length;
  var satisfied = true;

  for (var i = 0; i < len; i += 1) {
    var item = arr[i];

    if (satisfied) {
      if (predicate(item)) {
        result[0].push(item);
      } else {
        satisfied = false;
        result[1].push(item);
      }
    } else {
      result[1].push(item);
    }
  }

  return result;
}
