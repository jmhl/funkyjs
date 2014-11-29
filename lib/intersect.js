'use strict';

module.exports = intersect;

function intersect(list1, list2) {
  var result = [];
  var cache = {};

  list1.forEach(function(item) {
    cache[item] = true;
  });

  list2.forEach(function(item) {
    if (cache[item]) {
      result.push(item);
    }
  });

  return result;
}
