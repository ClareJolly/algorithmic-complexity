'use strict';

describe('SubsequenceSum', function() {


  // [10,3,1,7]	8	should return true (because 1+7 = 8)
  // [10,3,1,7]	10	should return true (because 10 is in the array)
  // [10,3,1,7]	21	should return true (because the sum of the whole array return 21)
  // [10,3,1,7]	22	should return false (because you can't reach 22 by summing all numbers)
  // [10,3,1,7]	17	should return false (because 10 and 7 are not next to each other)

  it('[10,3,1,7]	8	should return true', function() {
    expect(subSequenceSum([10,3,1,7],8)).toEqual(true);
  });

  it('[10,3,1,7]	10	should return true', function() {
    expect(subSequenceSum([10,3,1,7],10)).toEqual(true);
  });

  it('[10,3,1,7]	21	should return true', function() {
    expect(subSequenceSum([10,3,1,7],21)).toEqual(true);
  });

  it('[10,3,1,7]	22	should return false', function() {
    expect(subSequenceSum([10,3,1,7],22)).toEqual(false);
  });

  it('[10,3,1,7]	17	should return false', function() {
    expect(subSequenceSum([10,3,1,7],17)).toEqual(false);
  });
});
