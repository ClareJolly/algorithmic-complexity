function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var a = performance.now();
console.log(a)
  shuffle([1,4,5,6,8,2,3])
var b = performance.now();
console.log('It took ' + (b - a) + ' ms.');
