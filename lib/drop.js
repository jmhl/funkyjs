'use strict';

var curry    = require('./curry');
var isArray  = require('./isArray');
var isNumber = require('./isNumber');

module.exports = drop;

function drop(num, arr) {
  if (arguments.length > 1 && !isArray(arr)) {
    throw new TypeError('Drop must be passed an array');
  }

  if (arguments.length === 1 && isNumber(num)) {
    return curry(drop)(num);
  }

  return arr.slice(num, arr.length);
}
