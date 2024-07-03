// shallow copy
// shallow copy in javascript is a process in which we copy the reference of the object and not the object itself. It means that if we make changes in the copied object, it will also affect the original object.
// example
let obj1={name:"sakshi",age:21};
let obj2=obj1;
obj2.age=22;
console.log(obj1.age); //22
// Here, we have created an object obj1 and assigned it to obj2. Now, if we make any changes in obj2, it will also affect obj1. This is called a shallow copy.
// matlab ki agar humne obj1 ko obj2 me assign kiya hai toh agar humne obj2 me kuch changes kiye toh wo changes obj1 me bhi reflect honge.


// deep copy
// deep copy in javascript is a process in which we copy the object itself and not the reference of the object. It means that if we make changes in the copied object, it will not affect the original object.
// example
let obj11={name:"sakshi",age:21};
let obj2={...obj1};
obj2.age=22;
console.log(obj11.age); //21
// Here, we have created an object obj1 and copied it to obj2 using the spread operator. Now, if we make any changes in obj2, it will not affect obj1. This is called a deep copy.