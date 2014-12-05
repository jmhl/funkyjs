'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');

module.exports = partition;

function partition(predicate, arr) {
  if (arguments.length === 1 && isFunction(predicate)) {
    return curry(partition)(predicate);
  }

  if (!isArray(arr)) {
    throw new TypeError('Must be of type array');
  }

  var passes = [];
  var fails = [];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    var item = arr[i];

    if (predicate(item)) {
      passes.push(item);
    } else {
      fails.push(item);
    }
  }

  return [passes, fails]
}
