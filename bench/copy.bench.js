'use strict';

var funky = require('../funky');
var copy  = funky.copy; 

var arr = [1, 2, 3];
var obj = { 'one': 1, 'two': 2 };
var deepArr = [1, 2, [3, 4]];
var deepObj = {
  'one': 1,
  'two': 2,
  'three': {
    'four': 4 
  }
};

module.exports = {
  name: 'copy',
  tests: [
    {
      name: 'copy array',
      maxTime: 2,
      fn: function() {
        copy(arr);
      }
    },
    {
      name: 'copy obj',
      maxTime: 2,
      fn: function() {
        copy(obj);
      }
    },
    {
      name: 'copy arr (deep)',
      maxTime: 2,
      fn: function() {
        copy(deepArr);
      }
    },
    {
      name: 'copy obj (deep)',
      maxTime: 2,
      fn: function() {
        copy(deepObj);
      }
    }
  ]
};
