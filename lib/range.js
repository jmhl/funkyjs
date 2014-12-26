/*jslint node: true */

'use strict';

var isNumber = require('./isNumber');

module.exports = range;

/**
 * Takes two numbers and returns a list of numbers (inclusive). Range can form a list from both low to high and high to low. Because of this argument order matters.
 *
 * @param {number} from The number to start the range from.
 * @param {number} stepTo When two arguments are passed in, this is the number to end the range at, but when three arguments are passed in, this is the step number.
 * @param {number} to (optional) The number to end the range at.
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
 *
 * @example
 * range(2, 4, 10);
 * // returns [2, 4, 6, 8, 10]
 */

function range(from, stepTo, to) {
  var len = arguments.length;

  if (len === 2) {
    return standardRange(from, stepTo);
  } else if (len === 3) {
    return stepRange(from, stepTo, to);
  }
}

function stepRange(from, step, to) {
  if (!isNumber(from) || !isNumber(step) || !isNumber(to)) {
    throw new TypeError('Arguments must be numbers');
  }

  var skip = step - from;
  var result = [];

  for (var i = from; i <= to + skip; i += skip) {
    if (i <= to) {
      result.push(i);
    }
  }

  return result;
}

function standardRange(from, to) {
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
