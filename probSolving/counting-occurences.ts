/* Write a function, `countOccurrences` which takes a string and returns an object detailing the number of occurrences in the string of each letter in the string.

E.g. 

INPUT: “HELLO”

OUTPUT: {”E”: 1, “O”: 1, “H”: 1, “L”: 2}  

Note that the *order* of object properties doesn’t matter and shouldn’t be relied upon in your tests. */

function countOccurrences(string: string) {
  const stringArray = string.split(" ");
  const wordCount = {};
  for (const letter in stringArray) {
    if (wordCount[letter] === undefined) {
      wordCount[letter] = 1;
    }
    // adding a key value pair with the key 'letter' and the value one
    else {
      wordCount[letter] += 1;
    }
  }
  return wordCount;
}

export default countOccurrences;
console.log(countOccurrences("hello"));
