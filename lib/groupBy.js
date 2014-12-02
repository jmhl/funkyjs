'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = groupBy;

function groupBy(groupFn, list) {
  var argsLen = arguments.length;

  if (argsLen === 1 && !isArray(groupFn)) {
    return curry(groupBy)(groupFn);
  }

  if (argsLen > 1 && !isArray(list)) {
    throw new TypeError('groupBy requires a list');
  }

  var result = {};
  var len = list.length;

  for (var i = 0; i < len; i += 1) {
    var item = list[i];
    var group = groupFn(item);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}
