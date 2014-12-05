'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = indexOf;

function indexOf(arr, val) {
  if (!isArray(arr) || !isNumber(val)) {
    throw new TypeError('Must take an array and a number');
  }

  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    if (arr[i] === val) {
      return i;
    }
  }

  return null;
}
