'use strict';

var isObject = require('./isObject');

module.exports = copy;

function copy(list) {
  if (!Array.isArray(list) && !isObject(list)) {
    throw new TypeError('Copy must be called with either an array or an object');
  }

  if (isObject(list)) {
    return _copyObject(list);
  }

  var result = [];

  list.forEach(function(item) {
    result.push(item);
  });

  return result;
}

function _copyObject(obj) {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  keys.forEach(function(key) {
    result[key] = obj[key];
  });

  return result;
}
