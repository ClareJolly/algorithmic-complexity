'use strict';

describe('Reverse', function() {
  var thermostat;

  // beforeEach(function() {
  //   thermostat = new Thermostat();
  // });

  it('expect [a,b] to return [b,a]', function() {
    expect(reverse(['a','b'])).toEqual(['b','a']);
  });

  it('expect [a,b,c] to return [c,b,a]', function() {
    expect(reverse(['a','b','c'])).toEqual(['c','b','a']);
  });

  it('reverse refactored - expect [a,b] to return [b,a]', function() {
    expect(reverse3(['a','b'])).toEqual(['b','a']);
  });

  it('reverse refactored - expect [a,b,c] to return [c,b,a]', function() {
    expect(reverse3(['a','b','c'])).toEqual(['c','b','a']);
  });

});
