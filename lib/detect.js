'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = detect;

function detect(condition, list) {
  if (arguments.length > 1 && !Array.isArray(list)) {
    throw new TypeError('Detect must be used with a list');
  }

  if (arguments.length === 1 && isFunction(condition)) {
    return curry(detect)(condition);
  }

  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    if (condition(list[i])) {
      return list[i];
    }
  }

  return null;
}
