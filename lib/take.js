'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = take;

function take(num, arr) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(arr)) {
    throw new TypeError('Take must be passed an array');
  }

  if (argsLen === 1 && isNumber(num)) {
    return curry(take)(num);
  }

  var result = new Array(num);

  for (var i = 0; i < num; i += 1) {
    result[i] = arr[i];
  }

  return result;
}
