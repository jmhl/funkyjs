/*jslint node: true */

'use strict';

var isArray = require('./isArray');

module.exports = concatMap;

function concatMap(fn, arr) {
  var result = [];
  var len = arr.length;

  for (var i = 0; i < len; i += 1) {
    var x = fn(arr[i]);

    result = result.concat(x);
  }

  return result;
}
