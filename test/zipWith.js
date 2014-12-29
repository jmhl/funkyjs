'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var zipWith = funky.zipWith;
var add     = funky.add;

describe('zipWith', function() {
  var list1;
  var list2;
  var result;
  var zipped;

  before(function() {
    list1 = [1, 2, 3, 4];
    list2 = [2, 3, 4, 5];
    result = [3, 5, 7, 9];
    zipped = zipWith(add, list1, list2);
  });

  it('should zip the two lists', function() {
    var resLen = result.length;

    expect(zipped.length).to.equal(resLen);
  });

  it('should apply the function to the lists when zipping', function() {
    expect(zipped).to.deep.equal(result);
  });

  it('should handle arrays of different lengths', function() {
    var list3 = [2, 3, 4, 5, 6];
    var zipped3 = zipWith(add, list1, list3);

    expect(zipped3).to.deep.equal(result);
  });

  it('should curry the function we wish to zip with', function() {
    var zipWithAdd = zipWith(add);
    var curriedZipWith = zipWithAdd(list1, list2);
    
    expect(curriedZipWith).to.deep.equal(result);
  });
});
