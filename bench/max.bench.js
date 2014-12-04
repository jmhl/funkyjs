'use strict';

var funky = require('../funky');
var max   = funky.max; 

var arr = [23, 12, 35, 61, 12];

module.exports = {
  name: 'max',
  tests: [
    {
      name: 'max numbers',
      maxTime: 2,
      fn: function() {
        max(33, 45);
      }
    },
    {
      name: 'max array',
      maxTime: 2,
      fn: function() {
        max(arr);
      }
    }
  ]
};
