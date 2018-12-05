// sort an array of 1s and 0s
// Given an array containing only 0s and 1s, sort it.

// Tests
// when list is [0,1,0,1] expect [0,0,1,0]

// Plain English
// =============
// get the list
// look at the first item in the list
// if it's 0 put at the start of the list
// if it's 1 put it at the end of the list
// repeat until the end

// Function signature
// sort(arr)

function sort (arr) {
  newArr = []
  for (var i = 0; i < arr.length; ++i){
    if (arr[i] === 0){
      newArr.unshift(arr[i])
  } else {
    newArr.push(arr[i])
  }
}
  return newArr
}

function sort2 (arr) {
  for (var i = 0; i < arr.length; ++i){
    temp = arr[i]
    arr.splice(i, 1);
    if (temp === 0){
      arr.unshift(0)
  } else {
    arr.push(1)
  }
}
  return arr
}

function sort3(arr) {
    return arr.filter((zero) => (zero === 0)).concat(arr.filter((one) => (one === 1)));
}




console.log(sort3([0,1,0,1]))
