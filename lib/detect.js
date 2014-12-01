'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');

module.exports = detect;

function detect(condition, list) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('Detect must be used with a list');
  }

  if (argsLen === 1 && isFunction(condition)) {
    return curry(detect)(condition);
  }

  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (condition(item)) {
      return item;
    }
  }

  return null;
}
