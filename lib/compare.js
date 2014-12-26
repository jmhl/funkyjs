/*jslint node: true */

'use strict';

module.exports = compare;

/**
 * Compares a property of two objects.
 *
 * @param {string} prop This is the name of the property.
 * @param {object} obj1 The first object to compare.
 * @param {object} obj2 The second object to compare.
 *
 * @returns {boolean} Returns true if the property is strictly equal, false otherwise.
 *
 * @example
 * var obj1 = { 'one': 1, 'two' : 2 };
 * var obj2 = { 'zero': 0, 'two': 2 };
 *
 * compare('two', obj1, obj2);
 * // returns true
 */

function compare(prop, obj1, obj2) {
  return obj1[prop] === obj2[prop];
}
