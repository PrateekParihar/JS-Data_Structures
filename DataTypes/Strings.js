/*
String Methods list

.length()
.trim() — Removing white space
.includes() — Determine if string contains substring
.indexOf() — Finding the index of a substring
.toUpperCase() — Capitalizes entire string
.toLowerCase() — Lower cases entire string
.replace() — Replaces strings with new values
.slice()— Return a section of a string / Copy Part of a Sentence
.split() — Converts string into an array of strings
.repeat() — Repeats a string a specified number of times
.charAt() — Returns the character at an index
.charCodeAt() —Return the unicode at an index


Strings are immutable
Be aware of type coercion(more on this in another article)
There is no difference between declaring strings using double quotes and single quotes(some languages have differences)


*/

// String.length()
const str = "Length of this String";
console.log(str.length); //21

//The trim() function removes white space from the beginning and end of a string.

const str1 = "            Length of this String          ";
console.log(str1.length); //43
console.log(str1.trim());

/*.includes() — Determine if string contains substring

The includes() function determines if a substring is contained in a larger string and returns true or false. This has many applications, but one common use-case is for string matching for searching/parsing.

*/

const name = 'Prateek Parihar.';
let searchName1 = 'Prateek';
let searchName2 = 'Rohan';
console.log(name.includes(searchName1)); // true
console.log(name.includes(searchName2)); // false

/*
.indexOf() — Finding the index of a substring

The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.

The common pattern for indexOf() which mimics the behavior of includes() which is to check if the index is greater than -1:
*/

// const name = 'Prateek Parihar.';
// let searchName1 = 'Prateek';
// let searchName2 = 'Rohan';
// console.log(name.indexOf(searchName1)); // 0
// console.log(name.indexOf(searchName2)); // -1


/*
.toUpperCase() — Capitalizes entire string
.toLowerCase() — Lower cases entire string
*/

const name1 = 'Prateek Parihar.';

console.log(name1.toUpperCase()); // 0
console.log(name1.toLowerCase()); // -1


/*
.replace() — Replaces strings with new values

he replace() function is called on a string and will return a string with a pattern replaced by a replacement string. It takes either a regex or a 9string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence.
*/

const str3 = 'Hello World! My name is Prateek.'
const stringPattern = 'Prateek';
const regxPattern = /Prateek/gi
const replacement = 'Rohan';

console.log(str3.replace(stringPattern,replacement));
console.log(str3.replace(regxPattern,replacement));

/*
.slice() — Return a section of a string

The slice() method will extract a section of a string based on the index supplied and return it as a new string. This is useful when you know the structure of a string and want to retrieve a certain portion, or it can be used with the indexOf method which we learned earlier where you can find the index of the first occurrence of a substring and use that as a reference point for slicing.
*/

const str4 = 'Hello World! My name is -Prateek.'
console.log(str4.slice(0,12)); //Hello World!
let  findIndex = str4.indexOf('-') +1;
console.log(str4.slice(findIndex));


/*
.split() — Converts string into an array of strings

The split() method takes a separator which you want to split apart the string on, and it returns an array of strings. This is useful when you know your string uses a certain character to separate data, or if you want to operate on specific substrings individually.
*/

const str5 = 'Hello World! My name is -Prateek.'
console.log(str5.split(' ')); //[ 'Hello', 'World!', 'My', 'name', 'is', '-Prateek.' ]
console.log(str5.split('!')); //[ 'Hello World', ' My name is -Prateek.' ]

/*
.repeat() — Repeats a string a specified number of times

The repeat() function returns a string consisting of the elements of the object repeated the given number of times.
*/

const str6 = 'Hello World! My name is -Prateek.'
console.log(str6.repeat(3)); //Hello World! My name is -Prateek.Hello World! My name is -Prateek.Hello World! My name is -Prateek.


/*
.match() — Returns array of matching strings

The match() method retrieves the matches when matching a string against a regular expression.
*/
let str7 = 'Hello World! My name is -Prateek.';
let regex =  /[A-Z]/g;
let found = str7.match(regex);
console.log(found); //[ 'H', 'W', 'M', 'P' ]


/*
.charAt() — Returns the character at an index

*/
let str8 = 'Hello World! My name is -Prateek.';
console.log(str8.charAt(0)); //H
console.log(str8.charAt(13)); //M


/*
.charCodeAt() —Return the unicode at an index

The charCodeAt() method returns the unicode of the character at a specified index in a string. This an UTF-16 cone integer between 0 and 65535.
*/

let str9 = 'Hello World! My name is -Prateek.';
console.log(str9.charCodeAt(0)); //72
console.log(str9.charCodeAt(13)); //77

