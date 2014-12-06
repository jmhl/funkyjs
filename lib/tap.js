'use strict';

var curry      = require('./curry');
var isFunction = require('./isFunction');

module.exports = tap;

/**
 * Taps into the control flow and calls the function with the second parameter as the argument and then returns the second argument.
 *
 * @params {function} fn The function to call.
 * @params {var} a The argument to be passed into the function (fn).
 *
 * @returns {var} Returns the second parameter to the tap function.
 *
 * @example
 * function print(a) {
 *   return console.log(a);
 * }
 *
 * tap(double, 2);
 * // Has a side effect of printing 2
 * // And then returns 2
 */

function tap(fn, a) {
  if (arguments.length === 1 && isFunction(fn)) {
    return curry(tap)(fn);
  }

  fn(a);
  return a;
}
