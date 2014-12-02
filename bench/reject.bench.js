'use strict';

var funky   = require('../funky');
var reject  = funky.reject; 
var isEven  = funky.isEven;

var nums = [2, 3, 4, 5, 6, 7, 8];

module.exports = {
  name: 'reject',
  maxTime: 2,
  fn: function() {
    reject(isEven, nums);
  }
};
