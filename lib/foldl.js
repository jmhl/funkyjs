/*jslint node: true */

'use strict';

module.exports = foldl;

function foldl(fn, acc, arr) {
  var len = arr.length;
  var result = acc;

  for (var i = 0; i < len; i += 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
