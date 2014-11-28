'use strict';

var isArray = require('./isArray');
var reduce  = require('./reduce');

module.exports = flatten;

function flatten(list) {
  if (!isArray(list)) {
    throw new TypeError('Flatten must be used with an array');
  }

  return reduce(_flatten, [], list);
}

function _flatten(a, b) {
  if (isArray(b)) {
    b = flatten(b);
  }

  return a.concat(b);
}
