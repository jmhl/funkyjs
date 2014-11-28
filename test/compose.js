'use strict';

var chai = require('chai');
var expect = chai.expect;
var funky = require('../funky');
var compose = funky.compose; 

describe('compose', function() {
  it('should call functions in order', function() {
    var result = compose(double, square)(2);
    
    expect(result).to.equal(2);
  });
});


function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}
