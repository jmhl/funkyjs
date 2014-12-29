/*jslint node: true */

'use strict';

module.exports = foldl1;

function foldl1(fn, arr) {
  var len = arr.length;
  var result = arr[0];

  for (var i = 1; i < len; i += 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
