'use strict';

var curry = require('./curry');
var isNumber = require('./is_number');

module.exports = take;

function take(num, arr) {
  if (arguments.length > 1 && !Array.isArray(arr)) {
    throw new TypeError('Take must be passed an array');
  }

  if (arguments.length === 1 && isNumber(num)) {
    return curry(take)(num);
  }

  return arr.slice(0, num);
}
