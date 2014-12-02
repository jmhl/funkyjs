'use strict';

module.exports = union;

function union(list1, list2) {
  var result = [];
  var cache = {};
  var list1Len = list1.length;
  var list2Len = list2.length;

  for (var i = 0; i < list1Len; i +=1) {
    cache[list1[i]] = true;
  }

  for (var j = 0; j < list2Len; j += 1) {
    cache[list2[j]] = true;
  }

  var cacheKeys = Object.keys(cache);
  var cacheLen = cacheKeys.length;

  for (var k = 0; k < cacheLen; k += 1) {
    result.push(cacheKeys[k]);
  }

  return result;
}
