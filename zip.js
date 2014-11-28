'use strict';

var isObject = require('./is_object');

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
  var result = [];
  var keys = Object.keys(obj);

  keys.forEach(function(key) {
    result.push([key, obj[key]]);
  });

  return result;
}
