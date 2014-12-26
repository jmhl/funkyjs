/*jslint node: true */

'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = drop;

/**
 * Drops a specified number of elements from an array.
 *
 * This function can be curried.
 *
 * @param {number} num The number of elements to be dropped from the array.
 * @param {array} arr
 *
 * @returns {array} Returns a new array minus the number (num) of elements from the array.
 *
 * @example
 * var arr = [1, 2, 3, 4, 5, 6];
 *
 * drop(2, arr);
 * // returns [3, 4, 5, 6]
 *
 * @example
 * var arr = [1, 2, 3, 4, 5, 6];
 * var dropTwo = drop(2);
 *
 * dropTwo(arr);
 * // returns [3, 4, 5, 6]
 */

function drop(num, arr) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(arr)) {
    throw new TypeError('Drop must be passed an array');
  }

  if (argsLen === 1 && isNumber(num)) {
    return curry(drop)(num);
  }

  var len = arr.length;
  var result = new Array(len - num);

  for(var i = num; i < len; i += 1) {
    result[i - num] = arr[i];
  }

  return result;
}
