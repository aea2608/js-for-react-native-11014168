arrayManipulation.js
This JavaScript file provides utility functions for manipulating arrays. It includes three tasks: processing numerical arrays, formatting string arrays based on corresponding numerical arrays, and creating user profiles from two name arrays.

Functions

1. processArray(arr)
This function takes an array of numbers and returns a new array where each number is transformed based on whether it is even or odd.

Even numbers are squared.
Odd numbers are tripled.
Parameters
arr (Array of Numbers): The input array of numbers.
Returns
(Array of Numbers): The transformed array.

Example
const input = [1, 2, 3, 4];
const output = processArray(input);
console.log(output); // [3, 4, 9, 16]

2. formatArrayStrings(strings, numbers)
This function takes two arrays of equal length: one of strings and one of numbers. It returns a new array of strings formatted based on whether the corresponding number is even or odd.

If the number is even, the string is converted to uppercase.
If the number is odd, the string is converted to lowercase.
Parameters
strings (Array of Strings): The input array of strings.
numbers (Array of Numbers): The input array of numbers.
Returns
(Array of Strings): The formatted array of strings.
Throws
An error if the lengths of the two input arrays are not equal.

Example
const strings = ["Hello", "World", "Test"];
const numbers = [2, 3, 4];
const output = formatArrayStrings(strings, numbers);
console.log(output); // ["HELLO", "world", "TEST"]

3. createUserProfiles(names, modifiedNames)
This function takes two arrays of names of equal length and returns an array of user profiles. Each profile is an object containing the original name, the modified name, and a unique ID.

Parameters
names (Array of Strings): The input array of original names.
modifiedNames (Array of Strings): The input array of modified names.
Returns
(Array of Objects): The array of user profile objects.
Throws
An error if the lengths of the two input arrays are not equal.

Example
const names = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["ALICE", "bob", "CHARLIE"];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
/* [
   { originalName: "Alice", modifiedName: "ALICE", id: 1 },
   { originalName: "Bob", modifiedName: "bob", id: 2 },
   { originalName: "Charlie", modifiedName: "CHARLIE", id: 3 }
 ]
 */

