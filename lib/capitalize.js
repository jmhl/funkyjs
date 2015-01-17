/*jslint node: true */

'use strict';

var isString = require('./isString');

function capitalize(str) {
  if (!isString(str)) {
    throw new TypeError('Capitalize must take a string');
  }

  return str && str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
