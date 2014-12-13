'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var project = funky.project;

describe('project', function() {
  it('should project the props of the objects', function() {
    var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
    var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
    var kids = [abby, fred];

    var projectedObjs = project(['name', 'grade'], kids);
    var result = [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}];

    expect(projectedObjs).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
    var fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
    var kids = [abby, fred];

    var projectedProps = project(['name', 'grade']);
    var result = [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}];

    expect(projectedProps(kids)).to.deep.equal(result);
  });
});
