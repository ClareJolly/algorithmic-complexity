// Finding duplicates
// Given a list of things (numbers or words), find if there are any duplicates in the list.

// Tests
// when list is ['a','a'] expect true
// when list is ['a','b'] expect false
// when list is ['a','b'] expect length of new list to equal length of original list

// Plain English
// =============
// go through the list
// write down the first item
// look at the next item,
//   if it matches any previous item, stop and return true
//   if it doesn't match the first item write it down
//   continue
// once at end of list, if length of your new written down list matches length of the input then return false.

// function signature
// findDuplicates(list)



function findDuplicates(list) {
  newList = {}
  // console.log(newList)
  //go through the list
  console.log(list.length)
  for (var i = 0; i < list.length; i++) {
    // look at item
    // if it matches a previous return true
    if (newList[list[i]] != undefined){
      return true
    } else {
      //if it doesn't match a previous entry, add to the new list
      newList[list[i]] = ''
    }
  }
  // console.log(newList)
  //once at end of list, if length of your new written down list matches length of the input then return false.
  return false

}

// mylist = ['a','b','c','d','a']
// findDuplicates(mylist)
