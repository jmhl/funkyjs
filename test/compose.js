'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var compose = funky.compose; 
var square  = funky.square;

describe('compose', function() {
  it('should call functions in order', function() {
    var result1 = compose(double, square)(2);
    var result2 = compose(square, double)(2);
    
    expect(result1).to.equal(8);
    expect(result2).to.equal(16);
  });
});


function double(x) {
  return x * 2;
}
