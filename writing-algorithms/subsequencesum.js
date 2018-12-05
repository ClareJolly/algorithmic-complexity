// Sub-sequence sum
// Given an array of integers and a target number, find if there exist a sequence of numbers that sum up to the target.
//
// For example:
//
// array	target	expected return
// [10,3,1,7]	8	should return true (because 1+7 = 8)
// [10,3,1,7]	10	should return true (because 10 is in the array)
// [10,3,1,7]	21	should return true (because the sum of the whole array return 21)
// [10,3,1,7]	22	should return false (because you can't reach 22 by summing all numbers)
// [10,3,1,7]	17	should return false (because 10 and 7 are not next to each other)


// Tests
// [10,3,1,7]	8	should return true (because 1+7 = 8)
// [10,3,1,7]	10	should return true (because 10 is in the array)
// [10,3,1,7]	21	should return true (because the sum of the whole array return 21)
// [10,3,1,7]	22	should return false (because you can't reach 22 by summing all numbers)
// [10,3,1,7]	17	should return false (because 10 and 7 are not next to each other)

// Plain English
// =============
// get the list
// check if sum of array is less than number - return false
// check if number appears in the array - return true
// //start of loop
// start at the start of the list and add the first and second - return true of adds up to num
// sum of first, second and third - true if matches number
// keep going to end of array
// end of loop
// start at second number and do the above again

// Function signature
// subSequenceSum(arr,num)

function subSequenceSum (arr,num) {
  //check if sum is less than the number given
  var sum = arr.reduce((a, b) => a + b, 0);
  if (sum < num){
    return false
  }
  //check if number appears in the array
  var n = arr.includes(num);
  if (n){
    return true
  }

  x = 0
  for (var i = x; i < arr.length ;i++){
  if (arr[i]+arr[i+1] === num){
    return true
  }
  }
  // arr.forEach(checkNumbers)
}

// function checkNumbers(val,index,arr){
//   console.log(index,val)
//   console.log(val+arr[index+1])
// }

subSequenceSum([10,3,1,7],8)
