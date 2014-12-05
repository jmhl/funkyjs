'use strict';

var funky = require('../funky');
var keys  = funky.keys; 

var obj = { 'one': 1, 'two': 2, 'three': 3 };

module.exports = {
  name: 'keys',
  maxTime: 2,
  fn: function() {
    keys(obj);
  }
};
