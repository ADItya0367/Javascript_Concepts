// undefined vs NaN vs null
// undefined: A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.   
// NaN: NaN is a property of the global object. In other words, it is a variable in global scope. The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program. It is the returned value when Math functions fail (Math.sqrt(-1)) or when a function trying to parse a number fails (parseInt("blabla")). It is a number, and a type of number. Use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN. Or perform a self-comparison: NaN !== NaN is true, NaN === NaN is false.
// null: The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.


// example 
let abc;
console.log(abc); //undefined
// here, we have not assigned any value to the variable abc so it is undefined.

let abc1=null;
console.log(abc1); //null
// here, we have assigned null value to the variable abc1 so it is null.

let abc2=10;
console.log(abc2); //10
// here, we have assigned 10 value to the variable abc2 so it is 10.


let abc3=10;
let abc4;
console.log(abc3+abc4); //NaN
// here, we have not assigned any value to the variable abc4 so it is undefined.
// now, if we add abc3 and abc4 then it will return NaN because we are adding a number with undefined value.

let abc5=10;
let abc6=null;
console.log(abc5+abc6); //10
// here, we have assigned null value to the variable abc6 so it is null.

// matlab agar null ke sath kuch add karoge toh wp value deg but in case we will add it with undefined it will give NaN.