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


function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++)
    {
      if (arr[i] < arr[0])
      {
        //move to first position
        arr.unshift(arr.splice(i,1)[0]);
      } else if (arr[i] > arr[i-1]) {
      // do nothing
      } else {
      // loop through start of list to locate where it should go
      for (var x = 1; x < i; x++) {
        if (arr[i] > arr[x-1] && arr[i] < arr[x])
        {
          //move element
          arr.splice(x,0,arr.splice(i,1)[0]);
        }
      }
    }
    }
    console.log(arr)
    return arr
}

function bubbleSort(arr){

  for (var b=0; b < arr.length; b++){
    for (var a=0, stop=arr.length-a; a < stop; a++){
    if (arr[a] > arr[a+1]){
      var temp = arr[a];
      arr[a] = arr[a+1];
      arr[a+1] = temp;
                }
              }
  }
console.log(arr)
  return arr
}



function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	} else {

		var l1 = [];
		var l2 = [];
		var newArr = [];
		var pivot = arr.pop();

    var l1l2 = partition(arr,pivot)
    l1 = l1l2[0]
    l2 = l1l2[1]

		return newArr.concat(quickSort(l1), pivot, quickSort(l2));
	}
}

function partition(arr,pivot){

  var l1 = [];
  var l2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      l1.push(arr[i]);
    } else {
      l2.push(arr[i]);
    }
  }

  return [l1,l2]
}





console.log(quickSort([5,2,1,3]))
