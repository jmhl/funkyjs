'use strict';

var funky   = require('../funky');
var compose = funky.compose; 
var square  = funky.square;
var mult    = funky.mult;

var double = mult(2);

module.exports = {
  name: 'compose',
  maxTime: 2,
  fn: function() {
    compose(double, square)(2);
  }
};

