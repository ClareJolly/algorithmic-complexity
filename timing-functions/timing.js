function createArray(n) {
  arr = []
  var i;
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 101))
  }
  return arr
}

function getShuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function getLast(arr) {
  return arr.slice(-1)[0]
}

function getReverse(arr) {
  return arr.reverse()
}

function getSort(arr) {
  return arr.sort()
}

forAveraging = {}

function performanceTimer(callback,cb_name,n) {
  test = []

  document.write("<br><br>" +cb_name +'- run '+n+'<br>')
  for (i = 100000; i <= 1000001; i+=50000) {
    array_to_test = createArray(i)
    //Run Performance steps
    var a = performance.now()
    callback(array_to_test)
    var b = performance.now();
    //end performance steps
    test.push({[i]:(b-a)})

    if (forAveraging[i] === undefined){
      forAveraging[i] =  (b-a)
    } else {
      forAveraging[i] =  forAveraging[i] + (b-a)
    }
    document.write("<br>")
    document.write(i + '\t' + (b - a));
  }
  // return test
}

results = []
loop = 2
for (x = 1; x <= loop; x++) {
    // results.push(performanceTimer(getLast,'getLast',x))
    results.push(performanceTimer(getReverse,'getReverse',x))
    // results.push(performanceTimer(getShuffle,'getShuffle',x))
    // results.push(performanceTimer(getSort,'getSort',x))

}

// runTimer(getLast, 2,'getLast')
function runTimer(toTest, loop, functionname) {
  results = []

  for (x = 1; x <= loop; x++) {
      results.push(performanceTimer(toTest,functionname,x))
  }
}

function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
}

var newObject = objectMap(forAveraging, function(value) {
  return value/loop
})

console.log("Averages: ",newObject);

const entries = Object.entries(newObject)
document.write("<br><br>Averages</br>")
for (const [a, b] of entries) {
  document.write(a +',' +b+'<br>')
}


createCSV(entries,"getReverse")

function createCSV(arr,name) {
// const rows = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
let csvContent = "data:text/csv;charset=utf-8,";
arr.forEach(function(rowArray){
   let row = rowArray.join(",");
   csvContent += row + "\r\n";
});
// var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", name+".csv");
document.body.appendChild(link); // Required for FF

link.click();
}
