'use strict';

var isObject = require('./isObject');

module.exports = zip;

function zip(list1, list2) {
  if (isObject(list1)) {
    return _zipObject(list1);
  }

  return _zipArray(list1, list2);
}

function _zipArray(list1, list2) {
  var len1 = list1.length;
  var len2 = list2.length;
  var maxLength = Math.min(len1, len2);
  var result = [];

  for (var i = 0; i < maxLength; i += 1) {
    result.push([list1[i], list2[i]]); 
  }

  return result;
}

function _zipObject(obj) {
  var keys = Object.keys(obj);
  var keysLen = keys.length;
  var result = new Array(keysLen);

  for (var i = 0; i < keysLen; i += 1) {
    var key = keys[i];

    result[i] = [key, obj[key]];
  }

  return result;
}
