/*jslint node: true */

'use strict';

var isString = require('./isString');

function upcase(str) {
  if (!isString(str)) {
    throw new TypeError('Upcase must take a string');
  }

  return str && str.toUpperCase();
}

module.exports = upcase;
