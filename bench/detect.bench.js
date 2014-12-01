'use strict';

var funky  = require('../funky');
var detect = funky.detect; 

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

function isEven (num) {
  return num % 2 === 0;
}

module.exports = {
  name: 'detect',
  maxTime: 2,
  fn: function() {
    detect(isEven, nums);
  }
};
