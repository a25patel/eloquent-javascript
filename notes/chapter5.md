# Higher Order Functions
Functions that operate on other functions. They either take functions as arguments or return functions, create new functions
Allow us to abstract over actions not just values


_Array Transversal_

* .forEach
* .apply


_JSON_
JavaScript Object Notation - Data storage and communication format on the web
[
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"},
  … and so on
]

* Property names - "double quotes and simple expressions"
* no function calls, variables, or anything involving computation
* no comments

* JSON.stringify - string -> JSON
* JSON.parse - JSON -> String

  ex: var string = {name: "Aanal", age: 25};
      var json = JSON.stringify(string);
      console.log(json);
      -> {"name":"Aanal","age":25}
      var parse = JSON.parse(json);
      -> {name: 'Aanal', age: 25}
      parse.age
      -> 25


 - filter:
  * builds a new array with only the elements that pass the test
  * The function is PURE, doesn't modify the array it is given

 - forEach
 - map:
  * Tranforms array by applying function to all elements and returning new array from returned values.
  * Samelength as input array

 - reduce:
  * Combining function and a start value
  * folding up one element at a time
  * If your array has at least one element, you are allowed to leave off the start argument

 function reduce(array, combine, start){}

 _Composability_
 HOF's are awesome when we start composing functions

 ```JavaScript
 function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56
```
