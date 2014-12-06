'use strict';

var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = min;

/**
 * Returns the largest value. Can return either the smallest of two values, or the smallest number in an array.
 *
 * @param {number} a First argument can be a number.
 * @param {array} a First argument can be an array.
 * @param {number} b (optional) The second number to compare.
 *
 * @returns {number} Returns either the smallest number from the array, or the smallest of the two numbers passed in as arguments.
 *
 * @example
 * min(2, 4);
 * // returns 2
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * min(arr);
 * // returns 1
 */

function min(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a < b
      ? a
      : b
  } else if (isArray(a, b)) {
    return _minArray(a); 
  }
}

function _minArray(arr) {
  var smallest = arr[0];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    smallest = arr[i] < smallest ? arr[i] : smallest;
  }

  return smallest;
}
