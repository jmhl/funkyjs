'use strict';

var funky = require('../funky');
var slice = funky.slice; 

var str = 'hello there';
var arr = [1, 2, 3, 4, 5, 6];

module.exports = {
  name: 'slice',
  maxTime: 2,
  fn: function() {
    slice(str, 2, 3);
  }
};
