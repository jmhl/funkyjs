'use strict';

var funky  = require('../funky');
var curryN = funky.curryN; 

function addThree(a, b, c) {
  return a + b + c;
};

var curriedAddThree = curryN(3, addThree);
var f = curriedAddThree(1, 2);

module.exports = {
  name: 'curryN',
  maxTime: 2,
  fn: function() {
    f(3);
  }
};
