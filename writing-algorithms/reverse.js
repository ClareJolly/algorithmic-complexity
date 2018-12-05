// Reverse an array
// Given a list of things (numbers or words),
// reverse the list

// Tests
// when list is ['a','b'] expect ['b','a']
// when list is ['a','b','c'] expect ['c','b','a']

// Plain English
// =============
// get the list
// look at the final entry in list and add to the top of a new list
// move to the previous one and add to the bottom of the new list
// repeat

// Function signature
// reverse(arr)

function reverse (arr) {
  newArr = []
  for (var i = arr.length - 1; i >= 0; --i){
    newArr.push(arr[i])
  }
  return newArr
}

function reverse2 (arr) {
  newArr = []
  for (var i = 0; i < arr.length ;i++){
    newArr.push(arr.slice(-1-i)[0])
  }
  console.log(newArr)
  return newArr
}

function reverse3 (arr) {

return arr.map((item,index) => arr[arr.length-1-index])

}

// reverse2(['a','b'])
