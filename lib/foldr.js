/*jslint node: true */

'use strict';

module.exports = foldr;

function foldr(fn, acc, arr) {
  var len = arr.length;
  var result = acc;

  for (var i = len - 1; i >= 0; i -= 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
