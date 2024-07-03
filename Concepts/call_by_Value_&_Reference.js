// call by value and call by reference
// In javascript, we have two ways to pass the arguments to a function. They are:
// call by value
// call by reference

// call by value
// In call by value, a copy of the actual value is passed to the function. It means that if we make any changes in the function, it will not affect the actual value.
// example
let a=10;
function change(a){
    a=20;
}   
change(a);
console.log(a); //10

// Here, we have passed the value of a to the function change. Now, if we make any changes in the function, it will not affect the actual value of a. This is called call by value.
// matlab ki agar humne a ki value ko function me pass kiya hai toh agar humne function me kuch changes kiye toh wo changes actual value me reflect nahi honge.

// call by reference
// In call by reference, the reference of the actual value is passed to the function. It means that if we make any changes in the function, it will affect the actual value.
// example
let obj={name:"sakshi",age:21};
function change(obj){
    obj.age=22;
}
change(obj);
console.log(obj.age); //22


// Here, we have passed the reference of obj to the function change. Now, if we make any changes in the function, it will affect the actual value of obj. This is called call by reference.
// matlab ki agar humne obj ka reference function me pass kiya hai toh agar humne function me kuch changes kiye toh wo changes actual value me reflect honge.


