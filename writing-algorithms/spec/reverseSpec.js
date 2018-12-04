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

  it('reverse with slice - expect [a,b] to return [b,a]', function() {
    expect(reverse2(['a','b'])).toEqual(['b','a']);
  });

  it('reverse with slice - expect [a,b,c] to return [c,b,a]', function() {
    expect(reverse2(['a','b','c'])).toEqual(['c','b','a']);
  });

});