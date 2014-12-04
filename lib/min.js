'use strict';

var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = min;

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
