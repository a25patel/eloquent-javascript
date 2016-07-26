// Define a recursive function that accepts a number parameter and returns a boolean Using these three rules
// 1. Zero is even
// 2. 1 is odd
// 3. Any number N, it's evenness is the same as N-2.

function isEven(num){
  if(num === 0){
    return true;
  }else if(num === 1){
    return false;
  }else if(num < 0){
    return isEven(-num);
  }else{
    return isEven(num - 2);
  }
}

console.log(isEven(-12));
