// array operations 
// there are different types of array operations in javascript:




let arr=[1,2,3,4,5];
// here, we have created an array named arr and stored multiple values in it.
// now we can apply multiple operations on this array like:
// 1. accessing the elements of the array

console.log(arr[0]); //1
// here, we have accessed the first element of the array.

// 2. adding elements to the array

arr.push(6);
console.log(arr); //[1,2,3,4,5,6]
// here, we have added an element 6 to the array.


// 3. removing elements from the array

arr.pop();
console.log(arr); //[1,2,3,4,5]
// here, we have removed the last element from the array.


// 4. updating elements of the array

arr[0]=10;
console.log(arr); //[10,2,3,4,5]
// here, we have updated the first element of the array.


// 5. searching elements in the array

console.log(arr.indexOf(3)); //2
// here, we have searched for the element 3 in the array.



// 6. sorting the array

console.log(arr.sort()); //[10,2,3,4,5]
// here, we have sorted the array.



// 7. filtering the array

console.log(arr.filter((value)=>value>3)); //[10,4,5]   
// here, we have filtered the array.

// 8. mapping the array

console.log(arr.map((value)=>value*2)); //[20,4,6,8,10]
// here, we have mapped the array.
// in mapping we mainly use the map function which is used to iterate over the array and perform some operation on each element of the array.

// 9. reducing the array

console.log(arr.reduce((acc,value)=>acc+value)); //24
// here, we have reduced the array.
// in reducing we mainly use the reduce function which is used to reduce the array to a single value.


// 10. joining the array

console.log(arr.join(" ")); //10 2 3 4 5
// here, we have joined the array.



// 11. slicing the array

console.log(arr.slice(1,3)); //[2,3]
// here, we have sliced the array.


// 12. concatenating the array

let arr1=[6,7,8,9];
console.log(arr.concat(arr1)); //[10,2,3,4,5,6,7,8,9]
// here, we have concatenated the array.


// 13. reversing the array

console.log(arr.reverse()); //[5,4,3,2,10]
// here, we have reversed the array.

// 14. copying the array

let arr2=[...arr];
console.log(arr2); //[5,4,3,2,10]
// here, we have copied the array.

// 15. iterating the array

arr.forEach((value)=>console.log(value));


// 16. converting the array to a string

console.log(arr.toString()); //5,4,3,2,10
// here, we have converted the array to a string.
// we could have used stringify method of JSON object also to convert the array to a string.

// 17. converting the array to an object

let obj={...arr};
console.log(obj); //{0:5,1:4,2:3,3:2,4:10}
// here, we have converted the array to an object.

// 18. converting the array to a set

let set=new Set(arr);
console.log(set); //{5,4,3,2,10}
// here, we have converted the array to a set.


// 20. converting the array to a JSON

console.log(JSON.stringify(arr)); //[5,4,3,2,10]
// here, we have converted the array to a JSON.
