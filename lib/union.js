'use strict';

module.exports = union;

/**
 * Takes two arrays and returns a new array with all the values from each array (without duplicates).
 *
 * @param {array} list1
 * @param {array} list2
 *
 * @returns {array} The union of the two arrays.
 *
 * @example
 * var list1 = [1, 2, 3];
 * var list2 = [1, 4, 5];
 *
 * union(list1, list2)
 * // returns [1, 2, 3, 4, 5];
 * // Also note that 1 is in both arrays, but the result of union only includes one 1.
 */

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
