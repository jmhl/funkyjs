/*jslint node: true */

'use strict';

var curry   = require('./curry');
var isArray = require('./isArray');

module.exports = allAs;

/**
 * Checks if a value is true for a given predicate, or list of predicates.
 *
 * This function can be curried.
 *
 * @param {array} predicates An array of predicates (functions). Even if there is only one predicate you want to match, it must be passed into the function in array form.
 * @param {var} test 
 *
 * @returns {boolean} Returns true if all predicates are satisfied, false otherwise.
 *
 * @example
 * function isEven(num) {
 *   return num % 2 === 0; 
 * }
 *
 * function isLarge(num) {
 *   return num > 10;
 * }
 *
 * allAs([isEven, isLarge], 2);
 * // returns true
 *
 * @example
 * var isEvenAndLarge = allAs([isEven, isLarge]);
 *
 * isEvenAndLarge(2);
 * // returns false
 */

function allAs(predicates, test) {
  if (arguments.length === 1 && isArray(predicates)) {
    return curry(allAs)(predicates);
  }

  var len = predicates.length;

  for (var i = 0; i < len; i += 1) {
    if (!predicates[i](test)) {
      return false;
    }
  }

  return true;
}
