'use strict';

var funky  = require('../funky');
var inject = funky.inject; 

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

module.exports = {
  name: 'inject',
  maxTime: 2,
  fn: function() {
    inject('+', nums);
  }
};
