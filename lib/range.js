'use strict';

var isNumber = require('./isNumber');

module.exports = range;

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
