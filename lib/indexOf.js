'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = indexOf;

function indexOf(arr, val, fromIdx) {
  if (!isArray(arr) || !isNumber(val)) {
    throw new TypeError('Must take an array and a number');
  }

  var len = arr.length;
  var start = fromIdx ? fromIdx : 0;

  for (var i = start; i < len; i += 1) {
    if (arr[i] === val) {
      return i;
    }
  }

  return null;
}
