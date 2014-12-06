'use strict';

module.exports = intersect;

/**
 * Takes two arrays and returns the unique intersecting elements of the two arrays.
 *
 * @param {array} list1
 * @param {array} list2
 *
 * @returns {array} An array of the unique intersect elements.
 *
 * @example
 * var list1 = [1, 1, 3, 5];
 * var list2 = [1, 2, 3];
 *
 * intersect(list1, list2);
 * // returns [1, 3]
 */

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
