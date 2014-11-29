'use strict';

var keys = require('./keys');

module.exports = union;

function union(list1, list2) {
  var result = [];
  var cache = {};

  list1.forEach(function(item) {
    if (cache[item] === 1) {
      cache[item] = 2;
    } else {
      cache[item] = 1;
    }
  });

  list2.forEach(function(item) {
    if (cache[item] === 1) {
      cache[item] = 2;
    } else {
      cache[item] = 1;
    }
  });

  var cacheKeys = keys(cache);

  cacheKeys.forEach(function(key) {
    if (cache[key] === 1) {
      result.push(key);
    }
  });

  return result;
}
