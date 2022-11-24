/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function containsValue(
  array: number[] | string[],
  value: number | string
): boolean | undefined {
  //return array.includes(value);
  for (const item of array) {
    if (item === value) {
      return true;
    } else {
      return false;
    }
  }
  //export default containsValue;
}
console.log(containsValue);
export default containsValue;
