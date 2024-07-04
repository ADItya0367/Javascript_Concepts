// promise in javascript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected. A promise is created using the Promise constructor, which takes a function as an argument. The function passed to the Promise constructor is called the executor function, and it is executed immediately by the Promise constructor. 
//The executor function takes two arguments: resolve and reject, which are functions that are used to resolve or reject the promise, respectively.
// The executor function can perform an asynchronous operation and call the resolve function when the operation is successful, or call the reject function when the operation fails.
// The promise object returned by the Promise constructor has methods that can be used to handle the fulfillment or rejection of the promise, such as then, catch, and finally.
// The then method is used to handle the fulfillment of the promise, the catch method is used to handle the rejection of the promise, and the finally method is used to perform cleanup operations after the promise is settled. 
//Promises are used to write asynchronous code in a more readable and maintainable way, and they are commonly used in modern JavaScript applications to handle asynchronous operations such as fetching data from an API or reading a file from the filesystem.


// example
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world");
    },2000);
});

promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("done");
});