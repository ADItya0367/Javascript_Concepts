// Theory: 

// Definition: The type of data that a variable can store is called data type. JavaScript variables can store several data types such as numbers, strings, and arrays.
//Types of Data Types in JavaScript:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// 1. Primitive Data Types
// Primitive data types are the data types that are not objects and have no methods. There are 7 types of primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// 2. Non-Primitive Data Types
// Non-primitive data types are the data types that are objects and have methods. There are 4 types of non-primitive data types in JavaScript:
// 1. Object (mailny includes let const and var)
// 2. Array
// 3. Function  (function is also a data type)
// 4. Regular Expression


// difference between let const and var in javascript
// let and const are block-scoped, while var is function-scoped.
// var can be redeclared and updated, but let and const can only be updated.
// const can’t be updated or redeclared.  let can be updated but not redeclared. var is hoisted to the top of its function or global scope and initialized with undefined.
// Example:



// example of let 

const example=()=>{
    let x=10;
    if(x===10){
        let x=20;
        console.log(x);
    }
    console.log(x);
}

// example of const

const example1=()=>{
    const x=10;
    if(x===10){
        const x=20;
        console.log(x);
    }
    console.log(x);
}

// example of var
 const example2=()=>{
    var x=10;
    if(x===10){
        var x=20;
        console.log(x);
    }
    console.log(x);
 }