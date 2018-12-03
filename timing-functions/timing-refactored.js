function Timing() {
  this.forAveraging = {}
};

Timing.prototype.createArray = function(n) {
  arr = []
  var i;
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 101))
  }
  return arr
};


Timing.prototype.getShuffle = function(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

Timing.prototype.getLast = function(arr) {
  return arr.slice(-1)[0]
}

Timing.prototype.getReverse = function(arr) {
  return arr.reverse()
}

Timing.prototype.getSort = function(arr) {
  return arr.sort()
}

Timing.prototype.performanceTimer = function(callback, cb_name, n) {
  test = []
  console.log(callback)
  document.write("<br><br>" + cb_name + '- run ' + n + '<br>')
  for (i = 100000; i <= 1000001; i += 50000) {
    array_to_test = this.createArray(i)

    //Run Performance steps
    var a = performance.now()
    callback(array_to_test)
    var b = performance.now();
    //end performance steps

    test.push({
      [i]: (b - a)
    })

    if (this.forAveraging[i] === undefined) {
      this.forAveraging[i] = (b - a)
    } else {
      this.forAveraging[i] = this.forAveraging[i] + (b - a)
    }
    document.write("<br>")
    document.write(i + '\t' + (b - a));
  }
  return test
}

Timing.prototype.runTimer = function(toTest, loop, functionname) {
  results = []
  console.log(toTest)

  for (x = 1; x <= loop; x++) {
    results.push(this.performanceTimer(toTest, functionname, x))
  }

  var newObject = this.objectMap(this.forAveraging, function(value) {
    return value / loop
  })

  console.log("Averages: ", newObject);

  const entries = Object.entries(newObject)

  document.write("<br><br>Averages</br>")
  for (const [a, b] of entries) {
    document.write(a + ',' + b + '<br>')
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
