/*jslint node: true */

'use strict';

var curryN     = require('./curryN');
var isFunction = require('./isFunction');

module.exports = zipWith;

function zipWith(fn, list1, list2) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curryN(3, zipWith)(fn);
  }

  var len1 = list1.length;
  var len2 = list2.length;
  var len = len1 >= len2
    ? len2
    : len1;

  var result = new Array(len);

  for (var i = 0; i < len; i += 1) {
    result[i] = fn(list1[i], list2[i]);
  }

  return result;
}
