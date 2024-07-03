// strings in javascript 
// strings in javascript are the sequence of characters enclosed within the double quotes or single quotes.
// example
let str="sakshi";
let str1='sakshi';
console.log(str);
console.log(str1);
// here, we have created two strings str and str1 and printed them.
// strings are immutable in javascript.

// string methods
// 1. charAt()
// this method returns the character at the specified index.
// example
let strr="sakshi";
console.log(strr.charAt(2)); //k
// here, we have printed the character at the index 2.


// 2. charCodeAt()
// this method returns the unicode of the character at the specified index.
// example
let strrr="sakshi";
console.log(strrr.charCodeAt(2)); //107
// here, we have printed the unicode of the character at the index 2.


// 3. concat()
// this method is used to concatenate two or more strings.
// example
let strrrr="sakshi";
let strrrr1="sahu";
console.log(strrrr.concat(strrrr1)); //sakshisahu
// here, we have concatenated two strings.


// 4. endsWith()
// this method checks whether the string ends with the specified string or not.
// example
let strrrr2="sakshi";
console.log(strrrr2.endsWith("i")); //true
// here, we have checked whether the string ends with i or not.


// 5. fromCharCode()
// this method returns the character for the specified unicode.
// example
console.log(String.fromCharCode(107)); //k
// here, we have printed the character for the unicode 107.


// 6. includes()
// this method checks whether the string contains the specified string or not.
// example
let strrrr3="sakshi";
console.log(strrrr3.includes("k")); //true
// here, we have checked whether the string contains k or not.


// 7. indexOf()
// this method returns the index of the first occurrence of the specified string.
// example
let strrrr4="sakshi";
console.log(strrrr4.indexOf("k")); //2
// here, we have printed the index of the first occurrence of k.


// 8. lastIndexOf()
// this method returns the index of the last occurrence of the specified string.
// example
let strrrr5="sakshi";
console.log(strrrr5.lastIndexOf("s")); //0
// here, we have printed the index of the last occurrence of s.


// 9. match()
// this method is used to match the string with the regular expression.
// example
let strrrr6="sakshi";
console.log(strrrr6.match(/k/)); //k
// here, we have matched the string with the regular expression.


// 10. repeat()
// this method is used to repeat the string for the specified number of times.
// example
let strrrr7="sakshi";
console.log(strrrr7.repeat(2)); //sakshisakshi


// 11. replace()
// this method is used to replace the specified string with another string.
// example
let strrrr8="sakshi";
console.log(strrrr8.replace("s","k")); //kakshi
// here, we have replaced s with k.


// 12. search()
// this method is used to search the specified string in the string.
// example
let strrrr9="sakshi";
console.log(strrrr9.search("k")); //2
// here, we have searched for k in the string.


// 13. slice()
// this method is used to slice the string.
// example
let strrrr10="sakshi";
console.log(strrrr10.slice(1,3)); //ak
// here, we have sliced the string.

