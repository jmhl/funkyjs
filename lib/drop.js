'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = drop;

function drop(num, arr) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(arr)) {
    throw new TypeError('Drop must be passed an array');
  }

  if (argsLen === 1 && isNumber(num)) {
    return curry(drop)(num);
  }

  var len = arr.length;
  var result = new Array(len - num);

  for(var i = num; i < len; i += 1) {
    result[i - num] = arr[i];
  }

  return result;
}
