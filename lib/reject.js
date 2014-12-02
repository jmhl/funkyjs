'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = reject;

function reject(condition, list) {
  var argsLen = arguments.length;

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('Reject must be used with a list');
  }

  if (argsLen < 2 && !isArray(condition)) {
    return curry(reject)(condition);
  }

  var result = [];
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];

    if (!condition(item)) {
      result.push(item);
    }
  }

  return result;
}
