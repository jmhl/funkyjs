'use strict';

var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = max;

function max(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a > b
      ? a
      : b
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
