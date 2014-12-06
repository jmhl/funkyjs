'use strict';

var copy     = require('./copy');
var curry    = require('./curry');
var isArray  = require('./isArray');
var reduce   = require('./reduce');
var add      = require('./add');
var mult     = require('./mult');
var subtract = require('./subtract');
var div      = require('./div');

module.exports = inject;

/**
 * Simulates the Ruby inject shortcut (http://ruby-doc.org/core-2.1.5/Enumerable.html#method-i-inject, [].inject(:+)). Performs a mathematical operation on each value in the array.
 *
 * @param {string} operand Can be one of: +, *, -, /
 * @param {array} list
 *
 * @returns {number} The result from performing all the operations on the array.
 *
 * @example
 * var arr = [1, 2, 3];
 *
 * inject('+', arr);
 * // returns 6
 */

// inspired by the Ruby inject shortcut: [].inject(:+)
function inject(operand, list) {
  var listIsArray = isArray(list);

  if (arguments.length === 1 && !listIsArray) {
    return curry(inject)(operand);
  }

  if (!listIsArray) {
    throw new TypeError('Inject must be passed an array');
  }
  
  var base = list[0]; 
  var newList = [];
  var len = list.length;

  for (var i = 1; i < len; i += 1) {
    newList.push(list[i]);
  }

  switch (operand) {
    case '+':
      return reduce(add, base, newList); 
    case '-':
      return reduce(subtract, base, newList); 
    case '*':
      return reduce(mult, base, newList); 
    case '/':
      return reduce(div, base, newList); 
  }
}
