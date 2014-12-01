'use strict';

var funky  = require('../funky');
var filter = funky.filter; 

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

function isEven (num) {
  return num % 2 === 0;
}

module.exports = {
  name: 'filter',
  maxTime: 2,
  fn: function() {
    filter(isEven, nums);
  }
};

