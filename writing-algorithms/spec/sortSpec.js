'use strict';

describe('Sorting 1s and 0s', function() {
  // var thermostat;

  // beforeEach(function() {
  //   thermostat = new Thermostat();
  // });

  it('new array - expect [0,1,0,1] to return [0,0,1,0]', function() {
    expect(sort([0,1,0,1])).toEqual([0,0,1,1]);
  });

  it('same array - expect [0,1,0,1] to return [0,0,1,0]', function() {
    expect(sort2([0,1,0,1])).toEqual([0,0,1,1]);
  });

  it('trying to make it linear - expect [0,1,0,1] to return [0,0,1,0]', function() {
    expect(sort3([0,1,0,1])).toEqual([0,0,1,1]);
  });

  it('insertion sort - expect [5,2,1,3] to return [1,2,3,5]', function() {
    expect(insertionSort([5,2,1,3])).toEqual([1,2,3,5]);
  });

  it('bubble sort - expect [5,2,1,3] to return [1,2,3,5]', function() {
    expect(bubbleSort([5,2,1,3])).toEqual([1,2,3,5]);
  });

});
