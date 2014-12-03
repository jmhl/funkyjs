'use strict';

module.exports = union;

function union(list1, list2) {
  var result = [];
  var cache = {};
  var l1Len = list1.length;
  var l2Len = list2.length;

  for (var i = 0; i < l1Len; i += 1) {
    var item = list1[i];

    if (cache[item] === 1) {
      cache[item] = 2;
    } else {
      cache[item] = 1;
    }
  }

  for (var j = 0; j < l2Len; j += 1) {
    var item = list2[j];

    if (cache[item] === 1) {
      cache[item] = 2;
    } else {
      cache[item] = 1;
    }
  }

  var cacheKeys = Object.keys(cache);
  var cacheKeysLen = cacheKeys.length;

  for (var k = 0; k < cacheKeysLen; k += 1) {
    var key = cacheKeys[k];

    if (cache[key] === 1) {
      result.push(key);
    }
  }

  return result;
}
