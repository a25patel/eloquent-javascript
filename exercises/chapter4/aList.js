// * List *
// Nested set of objects, first obj holds reference to second, second to third, etc
//
// var myObj = {
//   value: 1,
//   reference: {
//     value: 2,
//     reference: {
//       value: 3,
//       reference: null
//     }
//   }
// }
//
// 1. Write a function that builds a data structure as such when given [1,2,3] as an arguement.
//   fn([1,2,3]) -> {value: 1, reference{value: 2, reference{value:3, reference: null}}}
//
// 2. Do the reverse of the first. List to Array
//   fn({value: 10, reference{value:20, reference: null}}) -> [10,20]
//
// 3. Takes an element and a list, creates new list that adds that element to front of list
//   fn(10, myObj) -> {value: 10, reference: myObj}
//
// 4. Takes list and number. finds element in given position in list
//   fn(list, 1) -> 20
//   list = {
//     value: 10,
//     reference: {
//       value: 20,
//       reference:null
//     }
//   }
//   [10, 20] 1 is the indexof the array of the list
