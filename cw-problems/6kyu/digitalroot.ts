/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */
/* https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript */

export default function digitalRoot(n: number) {
  const string = n.toString();
  const array = string.split("");
  const numArray = array.map((i) => parseInt(i));

  const sum = numArray.reduce((a, b) => a + b, 0);
  if (sum < 10) {
    return sum;
  }
  const newSum = sum
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reduce((a, b) => a + b, 0);
  if (newSum < 10) return newSum;
}
// seems too complex would have to keep running these lines of code as numbers can keep getting bigger
