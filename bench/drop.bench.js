'use strict';

var funky = require('../funky');
var drop  = funky.drop;

var arr = [1, 2, 3, 4, 5, 6];

module.exports = {
  name: 'drop',
  maxTime: 2,
  fn: function() {
    drop(2, arr);
  }
};
