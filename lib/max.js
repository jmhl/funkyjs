'use strict';

var isArray  = require('./isArray');
var isNumber = require('./isNumber');
var isObject = require('./isObject');

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

// function _maxArray(a) {
//   return Math.max.apply(null, a);
// }

// assume unsorted
function _maxArray(arr) {
  var largest = 0;
  var len = a.length;

  for (var i = 0; i < len; i += 1) {
    largest = a[i] > largest ? a[i] : largest;
  }

  return largest;
}
