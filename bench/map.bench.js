'use strict';

var funky  = require('../funky');
var map    = funky.map; 
var square = funky.square;

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];

var numsObj = {
  '8': 8,
  '85': 85,
  '2': 2,
  '34': 34,
  '3': 3,
  '23': 23,
  '247': 247,
  '57': 57,
  '0': 0,
  '6': 6,
  '5': 5,
  '46': 46,
  '54': 54,
  '643': 643
};

module.exports = {
  name: 'map',
  tests: [
    {
      name: 'map array',
      maxTime: 2,
      fn: function() {
        map(square, nums);
      }
    },
    {
      name: 'map obj',
      maxTime: 2,
      fn: function() {
        map(square, numsObj);
      }
    }
  ]
};
