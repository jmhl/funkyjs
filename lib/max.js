/*jslint node: true */

'use strict';

var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = max;

/**
 * Returns the largest value. Can return either the largest of two values, or the largest number in an array.
 *
 * @param {number} a First argument can be a number.
 * @param {array} a First argument can be an array.
 * @param {number} b (optional) The second number to compare.
 *
 * @returns {number} Returns either the largest number from the array, or the largest of the two numbers passed in as arguments.
 *
 * @example
 * max(2, 4);
 * // returns 4
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * max(arr);
 * // returns 3
 */

function max(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a > b ?
      a :
      b;
  } else if (isArray(a, b)) {
    return _maxArray(a); 
  }
}

function _maxArray(arr) {
  var largest = arr[0];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    largest = arr[i] > largest ? arr[i] : largest;
  }

  return largest;
}
