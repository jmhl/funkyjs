'use strict';

var isArray  = require('./isArray');
var isObject = require('./isObject');
var isString = require('./isString');
var keys     = require('./keys');

module.exports = len;

function len(item) {
  if (isArray(item) || isString(item)) {
    return item.length;
  } else if (isObject(item)) {
    return keys(item).length;
  } else {
    throw new TypeError('Len must be used with an object, array, or string');
  }
}
