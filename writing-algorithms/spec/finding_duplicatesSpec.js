'use strict';

describe('Find Duplicates', function() {
  // var thermostat;

  // beforeEach(function() {
  //   thermostat = new Thermostat();
  // });

  it('expect [a,a] to find duplicate and return true', function() {
    expect(findDuplicates(['a','a'])).toEqual(true);
  });

  it('expect [a,b] to not find duplicate and return false', function() {
    expect(findDuplicates(['a','b'])).toEqual(false);
  });

  it('expect [1,2,3,4,1] to find duplicate and return true', function() {
    expect(findDuplicates([1,2,3,4,1])).toEqual(true);
  });

  it('expect [1,2,3,4,5] to not find duplicate and return false', function() {
    expect(findDuplicates([1,2,3,4,5])).toEqual(false);
  });



});
