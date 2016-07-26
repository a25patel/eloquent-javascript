// Write a function that takes a string as an arguement and returns a number that indicates how many uppercase "B"s are in the string

// Write a function that takes two arguments, a string and a character to be counted and counts that character


function countB(phrase, char){
  var count = 0;
  for (var i = 0; i < phrase.length; i++) {
    if(phrase[i] === char){
      count++
    }
  }
  console.log(count);
}

countB("I'm at Barnes and NoBles Bookstore", 'o');
