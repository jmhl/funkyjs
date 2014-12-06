'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = filter;

/**
 * Filters the list based on a given condition.
 *
 * This function can be curried.
 *
 * @param {function} condition The function that is used to filter the array.
 * @param {array} list The array to filter.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * var nums = [2, 3, 4, 5, 6, 7, 8];
 *
 * filter(isEven, nums);
 * // returns [2, 4, 6, 8]
 *
 * @example
 * var nums = [2, 3, 4, 5, 6, 7, 8];
 * var filterEvens = filter(isEven);
 *
 * filterEvens(nums);
 * // returns [2, 4, 6, 8]
 */

function filter(condition, list) {
  var argsLen = arguments.length;

  if (!isArray(list) && argsLen > 1) {
    throw new TypeError('Filter must be used with a list');
  }

  if (!isArray(condition) && argsLen < 2) {
    return curry(filter)(condition);
  }

  var len = list.length;
  var result = [];

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (condition(item)) {
      result.push(item);
    }
  }

  return result;
}
