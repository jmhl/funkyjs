'use strict';

module.exports = compose;

/**
 * Creates a new function that executes the functions passed in as parameters in order.
 *
 * var h = compose(f, g);
 * h(x) === f(g(x));
 *
 * @param {functions}
 *
 * @returns {function} A new function.
 *
 * @example
 * function square(a) {
 *   return a * a;
 * }
 *
 * function double(a) {
 *   return a * 2;
 * }
 *
 * @example
 * var squareThenDouble = compose(square, double);
 *
 * squareThenDouble(3);
 * // returns 18
 */

function compose() {
  var len = arguments.length - 1;
  var fns = [];

  for (var i = len; i >= 0; i -= 1) {
    fns.push(arguments[i]);
  }

  return function(x) {
    for (var j = 0; j < len + 1; j += 1) {
      x = fns[j](x);
    }

    return x;
  }
}
