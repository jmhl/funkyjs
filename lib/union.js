'use strict';

var keys = require('./keys');

module.exports = union;

function union(list1, list2) {
  var result = [];
  var cache = {};

  list1.forEach(function(item) {
    if (cache[item]) {
      cache[item] += 1;
    } else {
      cache[item] = 1;
    }
  });

  list2.forEach(function(item) {
    cache[item] = true;
  });

  var cacheKeys = keys(cache);

  cacheKeys.forEach(function(key) {
    result.push(key);
  });

  return result;
}
