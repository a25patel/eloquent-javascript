# Data Structures
Objects allows us to group values together and build complex Structures

_Methods_
var array = []


push: array.push("hello", "Goodbye")
      array = ["hello", "Goodbye"]
join: array.join(' ');
      hello Goodbye

      array.join(' and ');
      hello and Goodbye
pop: array.pop();
    Goodbye

_Mutability_
impossible to change an existing value of the different types

Objects CAN be modified by changing properties (mutable)


**
Correlation: measure of dependence between variables. Coefficient of -1 to 1

_Objects_
var map = {};
  map[country] = 'Canada';
map = {country: 'Canada'}

for(var event in map){
  console.log(event + ': ' + map[event])
}
country: Canada

_Array_
* array.shift() - removes the front item from the list
* array.unshift(item) - adds item to the front of the array
* array.indexOf(item) - gives you index of that item
* array.lastIndexOf(item) - gives you index of that item starting from the end
* array.slice(startIndex, endIndex) - gives you an array from the start index to the end index -1. *can be used on strings as well*
  array = [1, 2, 3, 5, 6, 8]
  array.slice(2, 5) = [3,5,6]
  array.slice(3) = [5,6,8]

_Strings_
var string = "coconuts";
* string.slice(4, 7);
  -> nut
* string.indexOf('u');
  -> 5
* string.indexOf('onu');
  -> 3
* string.trim(); - removes all whitespace, newlines, tabs etc from string
* string.charAt(index) - exaclty like stating string[index]

_Arguments_
* function noArg(){
  do something
}
noArg(a,b,c); //this is okay
* function manyArg(one, two, three){
  do something
}
manyArg(); this is also okay

*Can use arguments object as an array.*
* arguments.length - find out how many arguments were passed

_Math_
Math object is used as a container, group a bunch of related functionality. Provides a namespace

Math.min
Math.random
Math.floor - rounds to nearest whole number
Math.ceil - rounds UP to a whole number

_Global Scope_
Each global variable is present as a property of this object
* Global scope is stored in the window variable
