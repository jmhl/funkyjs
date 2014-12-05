'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var split  = funky.split; 

describe('split', function() {
  it('should split the string ', function() {
    var str = 'hello there';
    var res = ['hello', 'there'];

    expect(split(str, ' ')).to.deep.equal(res);
  });
});
