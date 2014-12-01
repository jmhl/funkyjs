'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = filter;

function filter(condition, list) {
  var argsLen = arguments.length;

  if (!isArray(list) && argsLen > 1) {
    throw new TypeError('Filter must be used with a list');
  }

  if (!isArray(condition) && argsLen < 2) {
    return curry(filter)(condition);
  }

  var len = list.length;
  var result = [];

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (condition(item)) {
      result.push(item);
    }
  }

  return result;
}
