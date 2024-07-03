// objects in javascript 
// // objects in javascript are the collection of key-value pairs. It is a non-primitive data type in javascript.
// example
let obj={name:"sakshi",age:21};
console.log(obj.name); //sakshi
console.log(obj.age); //21
// yha, we have created an object obj with two key-value pairs. We can access the values using the keys.

// there are three ways to create an object in javascript:
// 1. object literal
// 2. using new keyword
// 3. using constructor function

// 1. object literal
// example
let obj1={name:"sakshi",age:21};
console.log(obj1.name); //sakshi
console.log(obj1.age); //21
// yha, we have created an object obj1 using object literal syntax.
// here i have declared the values at decleration time.

// 2. using new keyword
// example
let obj2=new Object();
obj2.name="sakshi";
obj2.age=21;
console.log(obj2.name); //sakshi
console.log(obj2.age); //21
// yha, we have created an object obj2 using the new keyword.
// here i have declared the values after decleration. using object.property_name=value.


// 3. using constructor function
// example
function Person(name,age){
    this.name=name;
    this.age=age;
}
let obj3=new Person("sakshi",21);
console.log(obj3.name); //sakshi
console.log(obj3.age); //21
// yha, we have created an object obj3 using the constructor function.
// here i have declared the values using the constructor function.


// objects in javascript are mutable, which means that we can change the values of the object after it is created.
// example
let obj4={name:"sakshi",age:21};
obj4.age=22;
console.log(obj4.age); //22
// yha, we have changed the value of age from 21 to 22. This is called mutability in objects.
 