'use strict';

module.exports = intersect;

function intersect(list1, list2) {
  var result = [];
  var cache = {};
  var lenList1 = list1.length;
  var lenList2 = list2.length;

  for (var i = 0; i < lenList1; i += 1) {
    cache[list1[i]] = true;
  }

  for (var j = 0; j < lenList2; j += 1) {
    var item = list2[j];

    if (cache[item]) {
      result.push(item);
    }
  }

  return result;
}
