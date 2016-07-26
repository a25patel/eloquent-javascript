// Write a program that prints out all the numbers from 1 -100. Numbers divisible by '3' print 'Fizz', numbers divisible by '5' print Buzz and numbers divisible by both print 'FizzBuzz'.
//
// Pseudo Code:
// 1. Print numbers 1 through 100
// 2. number % 3 === 0 -> Fizz
// 2. number % 5 === 0 -> Buzz
// 2. number % 5 && number % 3 === 0 -> FizzBuzz


i = 1;
while(i <=100){
  if(i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz");
  }else if(i % 5 === 0){
    console.log("Buzz")
  }else if(i % 3 === 0 ){
    console.log("Fizz")
  }else{
    console.log(i)
  }
  i++;
}

// More Eloquent Solution
for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz"
  }
  console.log(output || i);
}
