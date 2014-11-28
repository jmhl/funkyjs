'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = filter;

function filter(condition, list) {
  if (!isArray(list) && arguments.length > 1) {
    throw new TypeError('Filter must be used with a list');
  }

  if (!isArray(condition) && arguments.length < 2) {
    return curry(filter)(condition);
  }

  var result = [];

  list.forEach(function(item) {
    if (condition(item)) {
      result.push(item);
    }
  });

  return result;
}
