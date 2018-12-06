// Most frequent words
// Given a text, find which are the ten most common words.

// Tests
// checking ordering the frequency list to start with
// when list is ['a','a','b','c','a','b'] expect ['a','b','c']

// Plain English
// =============
// go through the list
// write down the first item and add 1 to it
// look at the next item,
//   if it matches any previous item, increment 1 to the number for that previous entry
//   if it doesn't match the first item write it down as a new entry in the list with a 1
//   continue
// once at end of list, arrange the new list by number descending and take the top 10

// function signature
// frequency(list)



function frequency(list) {
  var newList = {}

  for (var i = 0; i < list.length; i++) {

    if (newList[list[i]] != undefined){
      newList[list[i]] += 1
    } else {

      newList[list[i]] = 1
    }
  }

  var keys = Object.keys(newList);
  newList = keys.sort(function(a, b) { return newList[a] - newList[b] });
  // newList = keys.sort(function(a, b) { return newList[a] - newList[b] });
  newList = newList.reverse()
  newList = newList.slice(0, 10)
  return newList
}

function frequency2 (list) {
  var result = list.reduce((tally, num) => {
    if (!tally[num]) {
      tally[num] = 1;
    } else {
      tally[num] = tally[num] + 1;
    }
    return tally;
  }, {} );

  var keys = Object.keys(result);
  var newList = keys.sort(function(a, b) { return result[a] - result[b] });
  // newList = keys.sort(function(a, b) { return newList[a] - newList[b] });
  newList = newList.reverse()
  newList = newList.slice(0, 10)
  return newList


}

var arr = "50,89,28,58,94,58,96,0,89,48,18,3,12,42,43,4,86,33,64,74,50,32,0,92,82,85,82,47,2,75,28,56,91,19,38,87,49,59,1,66,16,67,78,98,23,62,36,48,25,20,30,16,83,76,54,7,70,69,96,76,34,65,23,29,84,43,19,79,11,25,96,90,7,7,69,25,50,94,20,34,43,98,39,15,53,55,30,96,44,47,75,70,54,77,50,34,66,87,96,44,44,6,35,51,81,82,61,93,35,80,60,18,29,93,70,65,50,60,4,48,34,33,7,33,98,70,30,87,63,88,99,5,75,93,84,70,79,65,2,22,77,78,71,39,5,65,83,94,47,25,59,2,10,1,10,41,52,3,62,95,77,95,79,63,92,26,82,5,11,74,19,38,59,40,79,37,78,60,0,21,94,15,71,81,23,77,38,54,89,48,65,74,25,32,41,28,85,20,64,31,50,89,28,58,94,58,96,0,89,48,18,3,12,42,43,4,86,33,64,74,50,32,0,92,82,85,82,47,2,75,28,56,91,19,38,87,49,59,1,66,16,67,78,98,23,62,36,48,25,20,30,16,83,76,54,7,70,69,96,76,34,65,23,29,84,43,19,79,11,25,96,90,7,7,69,25,50,94,20,34,43,98,39,15,53,55,30,96,44,47,75,70,54,77,50,34,66,87,96,44,44,6,35,51,81,82,61,93,35,80,60,18,29,93,70,65,50,60,4,48,34,33,7,33,98,70,30,87,63,88,99,5,75,93,84,70,79,65,2,22,77,78,71,39,5,65,83,94,47,25,59,2,10,1,10,41,52,3,62,95,77,95,79,63,92,26,82,5,11,74,19,38,59,40,79,37,78,60,0,21,94,15,71,81,23,77,38,54,89,48,65,74,25,32,41,28,85,20,64,31,50,89,28,58,94,58,96,0,89,48,18,3,12,42,43,4,86,33,64,74,50,32,0,92,82,85,82,47,2,75,28,56,91,19,38,87,49,59,1,66,16,67,78,98,23,62,36,48,25,20,30,16,83,76,54,7,70,69,96,76,34,65,23,29,84,43,19,79,11,25,96,90,7,7,69,25,50,94,20,34,43,98,39,15,53,55,30,96,44,47,75,70,54,77,50,34,66,87,96,44,44,6,35,51,81,82,61,93,35,80,60,18,29,93,70,65,50,60,4,48,34,33,7,33,98,70,30,87,63,88,99,5,75,93,84,70,79,65,2,22,77,78,71,39,5,65,83,94,47,25,59,2,10,1,10,41,52,3,62,95,77,95,79,63,92,26,82,5,11,74,19,38,59,40,79,37,78,60,0,21,94,15,71,81,23,77,38,54,89,48,65,74,25,32,41,28,85,20,64,31"
arr = arr.split(',')
// var mylist = ['a','a','b','c','a','b']
// document.write(frequency(arr))
console.log(frequency2(arr))
