# Functions

_Define_
var square = function(argument){
  do something
  return this;
}

square(argument)

function square(argument){
  do something
  return this;
}

#Parameters and Scopes
Variable created inside the function are local and available only to that function once it is run, variables declared outside are global, therefore available at all times to any function

_Lexical Scoping_
Variable visibility, scope is defined by position in source code, in order to solve variables, js starts at the innermost scope and searches outward until it finds what its looking for

_Call Stack_
The place where the computer stores the context of where its place is

_Closure_
Being able to reference a specific instance of local variables in an enclosing function

_Recursion_
A function that calls itself

```
function power(base, exp){
  if(exponent === 0){
    return 1;
  }else{
    return base * power(base, exp - 1)
  }
}
```

**Running through a loop is a lot faster than calling a function multiple**

* Pure function - Value producing, doesn't read global variables,
produces same value.
