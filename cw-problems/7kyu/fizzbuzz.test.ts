import { fizzBuzz } from "./fizzbuzz";

test("test if numbers are square", () => {
  expect(fizzBuzz(4)).toEqual([1, 2, "Fizz", 4]);
  expect(fizzBuzz(8)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);
});
