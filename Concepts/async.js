// async in javascript is a function that is used to define an asynchronous function. The async function returns a promise that is resolved with the value returned by the async function. The async function can contain an await expression that pauses the execution of the async function and waits for the promise to be resolved. The await expression can only be used inside an async function.
// example
 async function fetchData(){
     let response=await fetch('https://api.example.com/data');
     let data=await response.json();
     return data;
 }

 // In the above example, the fetchData function is defined as an async function. The async function fetches data from an API using the fetch function. The await keyword is used to pause the execution of the async function until the promise returned by the fetch function is resolved. The await keyword can only be used inside an async function. The async function returns a promise that is resolved with the data fetched from the API.