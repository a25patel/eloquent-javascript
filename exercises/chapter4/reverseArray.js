// 1. Write a function that takes an array and produces same array in reverse order.
//
// * can't use reverse method

var myArray = [8, 2, 13, 24 , 54];
function reverse(array){
  var newArray = [];
  for (var i = array.length - 1; i >= 0 ; i--) {
   newArray.push(array[i]);
  }
  console.log(newArray);
}
reverse(myArray);
