'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = reject;

function reject(condition, list) {
  if (arguments.length > 1 && !isArray(list)) {
    throw new TypeError('Reject must be used with a list');
  }

  if (arguments.length < 2 && !isArray(condition)) {
    return curry(reject)(condition);
  }

  var result = [];

  list.forEach(function(item) {
    if (!condition(item)) {
      result.push(item);
    }
  });

  return result;
}
