'use strict';

var isNumber = require('./isNumber');

module.exports = range;

/**
 * Takes two numbers and returns a list of numbers (inclusive). Range can form a list from both low to high and high to low. Because of this argument order matters.
 *
 * @param {number} from The number to start the range from.
 * @param {number} to The number to end the range at.
 *
 * @result {array} An array of numbers.
 *
 * @example
 * range(1, 10);
 * // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @example
 * range(10, 1);
 * // returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

function range(from, to) {
  if (!isNumber(from) || !isNumber(to)) {
    throw new TypeError('Arguments must be numbers');
  }

  if (from > to) {
    return _rangeHighToLow(from, to);
  } else if (from < to) {
    return _rangeLowToHigh(from, to);
  } else {
    return [from];
  }
}

function _rangeLowToHigh(from, to) {
  var result = new Array(to - from + 1); 
  var j = 0;

  for (var i = from; i <= to; i += 1, j += 1) {
    result[j] = i;
  }

  return result;
}

function _rangeHighToLow(from, to) {
  var result = new Array(from - to + 1); 
  var j = 0;

  for (var i = from, j = 0; i >= to; i -= 1, j += 1) {
    result[j] = i;
  }

  return result;
}
