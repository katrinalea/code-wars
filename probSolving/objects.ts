/*
function: printCapitalsQuiz
params: 
    - object
return string
===
reversedKey = ""
for each pair assign the reversed key to reversedKey
return Of what country is key.value the capital?: Answer: reversedKey
*/

function printCapitalsQuiz(capitals) {
  let reversedKey = "";
  for (const pair in capitals) {
    reversedKey = reverseString(pair);
    return `Of what country is ${capitals[pair]} the capital?: Answer: ${reversedKey}`;
  }
}

//helper function
// return: string
function reverseString(str) {
  const arr = str.split("");
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join("");
  return reversedStr;
}
//test
console.log(reverseString("hello"), "olleh");
export default printCapitalsQuiz;