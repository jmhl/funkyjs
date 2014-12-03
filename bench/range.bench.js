'use strict';

var funky = require('../funky');
var range = funky.range;

module.exports = {
  name: 'range',
  tests: [
    {
      name: 'range low to high',
      maxTime: 2,
      fn: function() {
        range(1, 10);
      }
    },
    {
      name: 'range high to low',
      maxTime: 2,
      fn: function() {
        range(10, 1);
      }
    }
  ]
};
