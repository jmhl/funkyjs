'use strict';

var copy   = require('./copy');
var curry  = require('./curry');
var first  = require('./first');
var reduce = require('./reduce');

module.exports = inject;

// inspired by the Ruby inject shortcut: [].inject(:+)
function inject(operand, list) {
  if (arguments.length === 1 && !Array.isArray(list)) {
    return curry(inject)(operand);
  }

  if (!Array.isArray(list)) {
    throw new TypeError('Inject must be passed an array');
  }
  
  var base = first(list); 
  var newList = copy(list);
  newList = newList.splice(1);

  switch (operand) {
    case '+':
      return reduce(_sum, base, newList); 
    case '-':
      return reduce(_subtract, base, newList); 
    case '*':
      return reduce(_multiply, base, newList); 
    case '/':
      return reduce(_divide, base, newList); 
  }
}

function _sum(a, b) {
  return a + b;
}

function _subtract(a, b) {
  return a - b;
}

function _multiply(a, b) {
  return a * b;
}

function _divide(a, b) {
  return a / b;
}
