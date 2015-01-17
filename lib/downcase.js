/*jslint node: true */

'use strict';

var isString = require('./isString');

function downcase(str) {
  if (!isString(str)) {
    throw new TypeError('Downcase must take a string');
  }

  return str && str.toLowerCase();
}

module.exports = downcase;
