'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = reject;

/**
 * Takes an array and a predicate function and returns an array of items that do not return true for the predicate function. The opposite of filter.
 *
 * This function can be curried.
 *
 * @param {function} condition The predicate function used to determine the resulting list.
 * @param {array} list The list to filter by false values.
 *
 * @result {array} The list of all the items from the given array that return false for the predicate function.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var nums = [2, 3, 4, 5, 6, 7, 8];
 * 
 * reject(isEven, nums);
 * // returns [3, 5, 7]
 *
 * @example
 * var rejectEvens = reject(isEven);
 *
 * rejectEvens(nums);
 * // returns [3, 5, 7]
 */

function reject(condition, list) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('Reject must be used with a list');
  }

  if (argsLen < 2 && !isArray(condition)) {
    return curry(reject)(condition);
  }

  var result = [];
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (!condition(item)) {
      result.push(item);
    }
  }

  return result;
}
