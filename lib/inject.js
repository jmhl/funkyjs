'use strict';

var copy     = require('./copy');
var curry    = require('./curry');
var first    = require('./first');
var isArray  = require('./isArray');
var reduce   = require('./reduce');
var add      = require('./add');
var mult     = require('./mult');
var subtract = require('./subtract');
var div      = require('./div');

module.exports = inject;

// inspired by the Ruby inject shortcut: [].inject(:+)
function inject(operand, list) {
  if (arguments.length === 1 && !isArray(list)) {
    return curry(inject)(operand);
  }

  if (!isArray(list)) {
    throw new TypeError('Inject must be passed an array');
  }
  
  var base = first(list); 
  var newList = copy(list);
  newList = newList.splice(1);

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
