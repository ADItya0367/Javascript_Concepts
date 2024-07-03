// mutability in pure functions
// // Mutability is a concept in which a variable can be changed after it is created. In JavaScript, objects and arrays are mutable, but strings and numbers are immutable.
// example
let obj={name:"sakshi",age:21};
function change(obj){
    obj.age=22;
}
change(obj);
console.log(obj.age); //22
// yja value change hogya 

let num=20;
function changee(num){
    num=30;
}
console.log(num); //20

// yha value change nhi hua

// Here, we have created an object obj and passed it to the function change. Now, if we make any changes in the function, it will affect the actual value of obj. This is called mutability.
// matlab ki agar humne obj ko function me pass kiya hai to
// agar humne function me kuch changes kiye toh wo changes actual value me reflect honge.