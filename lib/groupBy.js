'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = groupBy;

function groupBy(groupFn, list) {
  if (arguments.length === 1 && !isArray(groupFn)) {
    return curry(groupBy)(groupFn);
  }

  if (arguments.length > 1 && !isArray(list)) {
    throw new TypeError('groupBy requires a list');
  }

  var result = {};

  list.forEach(function(item) {
    var group = groupFn(item);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  });

  return result;
}
