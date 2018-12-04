'use strict';

describe('Sorting 1s and 0s', function() {
  // var thermostat;

  // beforeEach(function() {
  //   thermostat = new Thermostat();
  // });

  it('expect [0,1,0,1] to return [0,0,1,0]', function() {
    expect(sort([0,1,0,1])).toEqual([0,0,1,1]);
  });

});
