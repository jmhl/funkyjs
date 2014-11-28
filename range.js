'use strict';

module.exports = range;

function range(from, to) {
  if (from > to) {
    return _rangeHighToLow(from, to);
  } else {
    return _rangeLowToHigh(from, to);
  }
}

function _rangeLowToHigh(from, to) {
  var result = [];

  for (var i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
}

function _rangeHighToLow(from, to) {
  var result = [];

  for (var i = from; i >= to; i -= 1) {
    result.push(i);
  }

  return result;
}
