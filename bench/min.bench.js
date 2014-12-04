'use strict';

var funky = require('../funky');
var min   = funky.min; 

var arr = [23, 12, 35, 61, 12];

module.exports = {
  name: 'min',
  tests: [
    {
      name: 'min numbers',
      minTime: 2,
      fn: function() {
        min(33, 45);
      }
    },
    {
      name: 'min array',
      minTime: 2,
      fn: function() {
        min(arr);
      }
    }
  ]
};
