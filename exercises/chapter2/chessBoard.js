// Write a Program that creates a string that represents an 8x8 grid.
//
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var size = 30;
var output = '';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if((i + j) % 2 === 0){
      output += ' ';
    }else{
      output += "#";
    }
  }
  output += "\n";
}
console.log(output)
