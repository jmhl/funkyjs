'use strict';

var curry      = require('./curry');
var isArray    = require('./isArray');
var isFunction = require('./isFunction');
var isObject   = require('./isObject');
var keys       = require('./keys');

module.exports = map;

function map(fn, iterable) {
  if (isArray(iterable)) {
    var len = iterable.length;
    var result = new Array(len);

    for (var i = 0; i < len; i += 1) {
      result[i] = fn(iterable[i]);
    }
  } else if (isObject(iterable)) {
    var result = {};
    var objKeys = keys(iterable);
    var len = objKeys.length;

    for (var i = 0; i < len; i += 1) {
      var key = objKeys[i];
      result[key] = fn(iterable[key]);
    }
  } else if (arguments.length === 1 && isFunction(fn)) {
    return curry(map)(fn);
  } else {
    throw new TypeError('Object must be of type Array');
  }

  return result;
}
