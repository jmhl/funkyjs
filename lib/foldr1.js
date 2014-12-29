/*jslint node: true */

'use strict';

module.exports = foldr1;

function foldr1(fn, arr) {
  var len = arr.length;
  var result = arr[0];

  for (var i = len - 1; i > 0; i -= 1) {
    result = fn(result, arr[i]);
  }

  return result;
}
