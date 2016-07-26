# Introduction
A program is a building of thought

### Javascript
A way to add programs and functionality to web pages, originally for Netscape Navigator

**ECMAscript and JavaScript can be used interchangeably - same language**

### Code
Code is the text that makes up programs

# Chapter 1 - Values, Types, And Operator
_How Binary Works_
  0   0   0   0   1   1   0   1
128  64  32  16   8   4   2   1
So that’s the binary number 00001101, or 8 + 4 + 1, which equals 13.

_Values_
Chunks that represent pieces of information

_Types_
Numbers
Strings
Booleans
Objects
Functions
Undefined Values

_Modulo_
% - remainder
314 % 100 = 14

_Special Numbers_
Infinity
- Infinity
NaN - not a number, number type, doesn't yield a precise, meaningful result.

_Strings_
\ - character after it has special meaning, escaping character
\nWORD - newline & starts with WORD
\t - tab character
Actual backslash - \'\\n\'
* Cannot be divided, multiplied, or subtracted

_Unary Operators_
Takes one value
typeof - ex: console.log(typeof 'word')
--> string
- = both a binary and unary operator, takes one value (-8)

_Boolean Values_
String Comparisons:
  - Uppercase < Lowercase --ex: "Z" < 'a'
  - Alphabetic

Logical Operators:
&& - and, binary operator, true only if both values are true
|| - or, true if either values are true
|| and && - if values are of different type, will convert the one on the left to a boolean to figure out what to do. || Will return value on left if true other wise will return value on right. && is opposite.  


! - not, unary operator, flips value, !true = false

Precedence (lowest to highest)
|| -> && -> ===, >=, <=, != -> *+/-
Concatenation -> addition

Conditional Operator: (Ternary Operator)
if(this is true){
  then do this
}else{
  do this
}

if this is true ? then do this : else do this

_Undefined Values_
null - absences of a value
undefined -absence of a value

_Automatic Type Conversion_
" " , 0, and NaN -> false
Everything else -> true
=== and !== should be used more! Will not automatic type convert for those

_Short Circuiting of Logical Operators_
