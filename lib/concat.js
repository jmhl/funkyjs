/*jslint node: true */

'use strict';

module.exports = concat;

/**
 * Takes two arrays and concatenates the second array onto the first. Note that this alters the first array.
 *
 * @param {array} base The base array to be added to.
 * @param {array} toAdd The array to be added to the base array.
 *
 * @returns {array} Returns the first array (base) with the items from the second array (toAdd) added to it.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * concat(arr, [4, 5]);
 * // returns [1, 2, 3, 4, 5]
 */

function concat(base, toAdd) {
  var len = toAdd.length;

  for (var i = 0; i < len; i += 1) {
    base.push(toAdd[i]);
  }

  return base;
}
