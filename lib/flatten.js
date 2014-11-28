'use strict';

var reduce = require('./reduce');

module.exports = flatten;

function flatten(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Flatten must be used with an array');
  }

  return reduce(_flatten, [], list);
}

function _flatten(a, b) {
  if (Array.isArray(b)) {
    b = flatten(b);
  }

  return a.concat(b);
}
