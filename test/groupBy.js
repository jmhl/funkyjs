'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var groupBy = funky.groupBy;

describe('groupBy', function() {
  var students;
  var result;

  beforeEach(function() {
    students = [
      { name: 'Joshua', score: 6 },
      { name: 'Arnold', score: 8 },
      { name: 'Becky', score: 7 }
    ];

    result = {
      'B': [{ name: 'Arnold', score: 8 }],
      'C': [{ name: 'Becky', score: 7 }],
      'D': [{ name: 'Joshua', score: 6 }],
    };
  });

  it('should group a list by the given function', function() {
    expect(function() {
      groupBy(grade, {})
    }).to.throw(TypeError);
  });

  it('should group a list by the given function', function() {
    expect(groupBy(grade, students)).to.deep.equal(result);
  });

  it('should curry the function when passed only a grouping function', function() {
    var groupByGrade = groupBy(grade);

    expect(groupByGrade(students)).to.deep.equal(result);
  });
});

function grade(student) {
  var score = student.score;

  switch (score) {
    case 10: return 'A';
    case 9 : return 'A';
    case 8 : return 'B';
    case 7 : return 'C';
    case 6 : return 'D';
    case 5 : return 'F';
    case 4 : return 'F';
    case 3 : return 'F';
    case 2 : return 'F';
    case 1 : return 'F';
    case 0 : return 'F';
  }
}
