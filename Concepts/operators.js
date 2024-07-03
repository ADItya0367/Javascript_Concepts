// operators in javascript
// operators are defined as symbols that are used to perform operations on operands.
// means agar i want to do any operation on any value then i will use operators.
// there are different types of operators in javascript:



//Shortcut for operators in javascript:
ACBLAS(arithematic, comparison, bitwise, logical, assignment, string)

// 1. Arithmetic operators

//example
let a=10;
let b=20;
console.log(a+b); //30
//operators involved in arithematic operators are:
// +, -, *, /, %, ++, --    we can use all these operators in arithematic operators.




// 2. Assignment operators

// example
let ab=10;
let bc=20;
console.log(ab+=bc); //30
//operators involved in assignment operators are:
// =, +=, -=, *=, /=, %=, **=, &=, |=, ^=, >>=, <<=    we can use all these operators in assignment operators.


// 3. Comparison operators

//example
let abc=10;
let bcd=20;
console.log(abc==bcd); //false
//operators involved in comparison operators are:
// ==, ===, !=, !==, >, <, >=, <=    we can use all these operators in comparison operators.
// here == is used for checking the value only, === is used for checking the value and datatype both.which is a very important concept in javascript


// 4. Logical operators

//example
let abcd=10;
let bcde=20;
console.log(abcd==10 && bcde==20); //true
//operators involved in logical operators are:
// &&, ||, !    we can use all these operators in logical operators.


// 5. Bitwise operators

//example
let abcde=10;
let bcdef=20;   
console.log(abcde & bcdef); //0
//operators involved in bitwise operators are:
// &, |, ~, ^, <<, >>    we can use all these operators in bitwise operators.


// 6. Ternary operators

//example
let abcdef=10;
let bcdefg=20;
let result=(abcdef==10)? "true":"false";
console.log(result); //true
//operators involved in ternary operators are:
// ? :    we can use all these operators in ternary operators.
// yha ? is mainly used to check the conditions and :(colon) is used to give the result.


// 7. typeof operators

//example
let abcdefg=10;
console.log(typeof abcdefg); //number
// it mainly checks what type of data we are using in our code.


// 8. delete operators

//example
let abcdefgh=10;
delete abcdefgh;
console.log(abcdefgh); //error
// it is used to delete the object, property or element.



