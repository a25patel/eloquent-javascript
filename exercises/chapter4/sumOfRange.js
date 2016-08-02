// 1. Write a range function that takes 2 arguments, start and end, and returns an array containing all the numbers from start upto and including end.

var array = [];
var total = 0;
function range(startNum, endNum, step){
  if(array[array.length - 1] >= endNum) {
    if (array[array.length - 1] > endNum) {
      array.pop();
      console.log(array);
      sum(array);
    }else{
    console.log(array);
    sum(array);
    }
  }else{
    array.push(startNum);
    startNum += step;
    range(startNum, endNum, step);
  }
}

range(1, 12, 2);

// 2. write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(array){
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}

// 3. modify range function to take a third argument that indicates step value used to build array. If no step given, array elements go up by increments of one.
//   ex: function (1, 10, 2) returns [1,3,5,7,9]
//       function(5, 2 ,-1) returns [5, 4, 3 , 2]

// ***Mine doesn't work for negatives!***

// ELEGANT SOLUTION
function range(start, end, step) {S
  if (step === null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
