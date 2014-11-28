'use strict';

var isArray  = require('./isArray');
var isObject = require('./isObject');

module.exports = copy;

function copy(list) {
  if (!isArray(list) && !isObject(list)) {
    throw new TypeError('Copy must be called with either an array or an object');
  }

  if (isObject(list)) {
    return _copyObject(list);
  }

  var result = [];

  list.forEach(function(item) {
    if (isArray(item) || isObject(item)) {
      result.push(copy(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

function _copyObject(obj) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  keys.forEach(function(key) {
    var item = obj[key];

    if (isArray(item) || isObject(item)) {
      result[key] = copy(item);
    } else {
      result[key] = item;
    }
  });

  return result;
}
