'use strict';

var isObject = require('./isObject');

module.exports = keys;

function keys(obj) {
  if (!isObject(obj)) {
    throw new TypeError('Keys must be used with an object');
  }

  var result = [];

  for (var key in obj) {
    result.push(key);
  }

  return result;
}
