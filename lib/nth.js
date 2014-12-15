'use strict';

module.exports = nth;

/**
 * Finds the nth element in the array. If given a negative index, it will return from the end of the array; an index of -1 will be the last element in the array.
 *
 * @params {number} index
 * @params {array} list
 *
 * @returns {element} The nth element in the array.
 *
 * @example
 * var list = [1, 2, 3, 4, 5];
 *
 * nth(-2, list);
 * // returns 4
 */
function nth(index, list) {
  if (index < 0) {
    var len = list.length;

    return list[len + index];
  }

  return list[index];
}
