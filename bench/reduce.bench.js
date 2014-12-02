'use strict';

var funky   = require('../funky');
var reduce  = funky.reduce; 
var add     = funky.add;

var nums = [1, 2, 3];

module.exports = {
  name: 'reduce',
  maxTime: 2,
  fn: function() {
    reduce(add, 10, nums);
  }
};
