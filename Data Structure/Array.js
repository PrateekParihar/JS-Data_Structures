/*
arr.push(...item)
arr.pop()
arr.shift()
arr.unshift(...items)

arr.splice(index[,deleteCount,elm1,...,elmN])
arr.slice(start,end)   // end - exclusive

arr.concat(arg1,arg2,....)

arr.indexOf(item,from)
arr.lastIndexOf(item,from)
arr.includes(item,from)

arr.find(function(item,index,array){

})
arr.findIndex(function(item,index,array){

})

arr.filter(function(item,index,array){

})

arr.map(function(item,index,array){
    
})

*/

/*
    arr.push(...items)– adds items to the end,
    arr.pop()– extracts an item from the end,
    arr.shift()– extracts an item from the beginning,
    arr.unshift(...items)– adds items to the beginning.


*/

//--------------------------------------------------------------------------------------------------
/*
   
The arr.splice(str) method is a swiss army knife
for arrays.It can do everything: add, remove and insert elements.

    The syntax is:
    arr.splice(index[, deleteCount, elem1, ..., elemN])

It starts from the position index: removes deleteCount elements and then inserts elem1, ..., elemN at their place.Returns the array of removed elements.


*/

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]


let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log(arr) // now ["Let's", "dance", "right", "now"]


//Here we can see that splice returns the array of removed elements:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log(removed); // "I", "study" <-- array of removed elements


//The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log(arr); // "I", "study", "complex", "language", "JavaScript"


/*
Negative indexes allowed
Here and in other array methods, negative indexes are allowed.They specify the position from the end of the array, like here:
*/

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log(arr); // 1,2,3,4,5

//---------------------------------------------------------------------------------------------------------
/*
slice
The method arr.slice is much simpler than similar - looking arr.splice.

The syntax is:

    arr.slice(start, end)
It returns a new array where it copies all items start index "start"
to "end"(not including "end").Both start and end can be negative, in that
case position from array end is assumed.

It works like str.slice, but makes subarrays instead of substrings.

For instance:
*/

let str = "test";
let arr = ["t", "e", "s", "t"];

console.log(str.slice(1, 3)); // es
console.log(arr.slice(1, 3)); // e,s

console.log(str.slice(-2)); // st
console.log(arr.slice(-2)); // s,t

//-------------------------------------------------------------------------------------------------------
/*
concat
The method arr.concat joins the array with other arrays and / or items.

The syntax is:

    arr.concat(arg1, arg2...)
It accepts any number of arguments– either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument is an array or has Symbol.isConcatSpreadable property, then all its elements are copied.Otherwise, the argument itself is copied.

For instance:
*/
let arr = [1, 2];

// merge arr with [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// merge arr with [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// merge arr with [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
// Normally, it only copies elements from arrays(“spreads” them).Other objects, even if they look like arrays, added as a whole:

let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object]
//[1, 2, arrayLike]

//…But if an array - like object has Symbol.isConcatSpreadable property, then its elements are added instead:

let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike)); // 1,2,something,else

//--------------------------------------------------------------------------------------------------------------

/*
Searching in array
These are methods to search for something in an array.

    indexOf / lastIndexOf and includes
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise - 1.

arr.lastIndexOf(item, from)– same, but looks from right to left.

arr.includes(item, from)– looks for item starting from index from, returns true if found.
For instance:
*/
let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

//Note that the methods use === comparison.So,if we look for false, it finds exactly false and not the zero.If we want to check for inclusion, and don’ t want to know the exact index, then arr.includes is preferred.

//Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf / lastIndexOf:

const arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr.includes(NaN)); // true (correct)

//-----------------------------------------------------------------------------------------------------------
/* 
 find and findIndex
Imagine we have an array of objects.How do we find an object with the specific condition ?

        Here the arr.find method comes in handy.

    The syntax is:

    let result = arr.find(function (item, index, array) {
        // should return true if the item is what we are looking for
    });

The function is called repetitively for each element of the array:

    item is the element.
    index is its index.
    array is the array itself.   
If it returns true, the search is stopped, the item is returned.If nothing found, undefined is returned.

For example, we have an array of users, each with the fields id and name.Let’ s find the one with id == 1:
*/

let users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

//In real life arrays of objects is a common thing, so the find method is very useful.

//Note that in the example we provide to find a single - argument function item => item.id == 1. Other parameters of find are rarely used.

//The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself.


//------------------------------------------------------------------------------------------------------
/*
filter
The find method looks for a single(first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is roughly the same as find, but it returns an array of matching elements:

    let results = arr.filter(function (item, index, array) {
        // should return true if the item passes the filter
    });
For instance:
*/
let users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

/*
            //Transform an array
This section is about the methods transforming or reordering the array.



map
The arr.map method is one of the most useful and often used.

The syntax is:

    let result = arr.map(function (item, index, array) {
        // returns the new value instead of item
    })

It calls the function for each element of the array and returns the array of results.

For instance, here we transform each element into its length:
*/
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6