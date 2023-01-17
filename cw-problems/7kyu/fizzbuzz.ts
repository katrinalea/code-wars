/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1. */

type IfizzBuzz = number | string;

export const fizzBuzz = (n: number): IfizzBuzz[] => {
  const newArray: IfizzBuzz[] = [];
  for (let item = 1; item <= n; item++) {
    if (item % 3 === 0 && item % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (item % 3 === 0) {
      newArray.push("Fizz");
    } else if (item % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

console.log(fizzBuzz(15));
