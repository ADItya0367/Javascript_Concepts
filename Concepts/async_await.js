// async and await in javascript are used to write asynchronous code in a more synchronous way. The async function returns a promise that is resolved with the value returned by the async function. The await keyword is used to pause the execution of the async function and wait for the promise to be resolved. async and await are commonly used in modern JavaScript applications to handle asynchronous operations such as fetching data from an API or reading a file from the filesystem.
//example
async function fetchData(){
    let response=await fetch('https://api.example.com/data');
    let data=await response.json();
    return data;
}
// here the fetchData function is defined as an async function. The async function fetches data from an API using the fetch function. The await keyword is used to pause the execution of the async function until the promise returned by the fetch function is resolved. The await keyword can only be used inside an async function. The async function returns a promise that is resolved with the data fetched from the API.
// another example
