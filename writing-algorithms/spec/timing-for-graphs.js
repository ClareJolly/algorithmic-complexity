function Timing() {
  this.forAveraging = {}
  this.forMedian = {}
};

Timing.prototype.createArray = function(n) {
  arr = []
  var i;
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
};

Timing.prototype.create1and0Array = function(n) {
  arr = []
  var i;
  for (i = 0; i <= n; i++) {
    arr.push(Math.round(Math.random()))
  }
  console.log(arr)
  return arr
};


Timing.prototype.createIncrementingArray = function(n) {
  arr = []
  var i;
  var a;
  for (i = 0; i < n-1; i++) {
    arr.push(i)
  }
  arr.push(0)
  return arr
};

Timing.prototype.findMedian = function(arr) {

arr.sort((a, b) => a - b);
let lowMiddle = Math.floor((arr.length - 1) / 2);
let highMiddle = Math.ceil((arr.length - 1) / 2);
let median = (arr[lowMiddle] + arr[highMiddle]) / 2;
return median
}

Timing.prototype.performanceTimer = function(callback, cb_name, n,arraytype) {
  test = []
  document.getElementById('main').insertAdjacentHTML('beforeend', "<br><br>" + cb_name + '- run ' + n + '<br>');
  // document.write("<br><br>" + cb_name + '- run ' + n + '<br>')
  // for (i = 100000; i <= 1000001; i += 50000) {
  for (i = 10000; i <= 100001; i += 5000) {
  // for (i = 200; i <= 800; i += 100) {
    // for (i = 1; i <= 30; i ++) {
    array_to_test = arraytype(i)

    // document.getElementById('main').insertAdjacentHTML('beforeend', array_to_test);

    //Run Performance steps
    var a = window.performance.now()
    callback(array_to_test)
    var b = window.performance.now();
    //end performance steps

    // test.push({
    //   [i]: (b - a)
    // })

    if (this.forAveraging[i] === undefined) {
      this.forAveraging[i] = (b - a)
    } else {
      this.forAveraging[i] = this.forAveraging[i] + (b - a)
    }

    if (this.forMedian[i] === undefined) {
      this.forMedian[i]= [b-a]
    } else {
      this.forMedian[i].push(b-a)
    }
    // console.log("foraveraging:",this.forAveraging)
    // console.log("formedian:",this.forMedian)
    // document.write("<br>")
    // document.write(i + '\t' + (b - a));
    document.getElementById('main').insertAdjacentHTML('beforeend', "<br>");
    document.getElementById('main').insertAdjacentHTML('beforeend', i + '\t' + (b - a));
  }
  return test
}

Timing.prototype.runTimer = function(toTest, loop, functionname,arraytype) {
  results = []
  // console.log(toTest)

  for (x = 1; x <= loop; x++) {
    results.push(this.performanceTimer(toTest, functionname, x,arraytype))
  }

  var newObject = this.objectMap(this.forAveraging, function(value) {
    return value / loop
  })

// console.log("Average: ", newObject);
  // findMedian

  var newObjectMedian = this.objectMap(this.forMedian, function(value) {
    // return this.getSort([1,2])
    value.sort((a, b) => a - b);
    let lowMiddle = Math.floor((value.length - 1) / 2);
    let highMiddle = Math.ceil((value.length - 1) / 2);
    let median = (value[lowMiddle] + value[highMiddle]) / 2;
    return median
  })
  // console.log("Median: ", newObjectMedian);

  const entries = Object.entries(newObjectMedian)
  document.getElementById('main').insertAdjacentHTML('beforeend',"<br><br>Averages</br>");
  // document.write("<br><br>Averages</br>")
  for (const [a, b] of entries) {
    document.getElementById('main').insertAdjacentHTML('beforeend', a + ',' + b + '<br>');
    // document.write(a + ',' + b + '<br>')
  }

  this.createCSV(entries, functionname)
}

Timing.prototype.objectMap = function(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

Timing.prototype.createCSV = function(arr, name) {

  let csvContent = "data:text/csv;charset=utf-8,";
  arr.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name + ".csv");
  document.body.appendChild(link); // Required for FF

  link.click();
}

export const entries
export Timing
