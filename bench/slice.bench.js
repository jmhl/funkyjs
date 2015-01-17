'use strict';

var funky = require('../funky');
var slice = funky.slice; 

var str = 'hello there';
var arr = [1, 2, 3, 4, 5, 6];

module.exports = {
  name: 'slice',
  tests: [
    {
      name: 'slice string',
      maxTime: 2,
      fn: function() {
        slice(str, 2, 3);
      }
    },
    {
      name: 'native slice string',
      maxTime: 2,
      fn: function() {
        str.slice(2, 3);
      }
    },
    {
      name: 'slice array',
      maxTime: 2,
      fn: function() {
        slice(arr, 2, 3); 
      }
    },
    {
      name: 'native slice array',
      maxTime: 2,
      fn: function() {
        arr.slice(2, 3); 
      }
    }
  ]
};
