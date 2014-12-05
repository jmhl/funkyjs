'use strict';

var isObject = require('./isObject');

module.exports = invert;

function invert(obj) {
  if (!isObject(obj)) {
    throw new TypeError('Invert must take an object');
  }

  var newObj = {};
  var keys = Object.keys(obj);
  var len = keys.length;

  for (var i = 0; i < len; i += 1) {
    var key = keys[i];

    newObj[obj[key]] = key;
  }

  return newObj;
}
