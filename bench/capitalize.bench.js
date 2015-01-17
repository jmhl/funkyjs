'use strict';

var funky      = require('../funky');
var capitalize = funky.capitalize; 

module.exports = {
  name: 'capitalize',
  maxTime: 2,
  fn: function() {
    capitalize('test');
  }
};
