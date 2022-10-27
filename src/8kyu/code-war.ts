/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function containsValue(
  array: any[],
  value: number | string
): boolean {
  return array.includes(value);
  // for (let item of array) {
  // if (item === value) {
  //  return true;
  // } else {
  //  return false;
  //  }
}
export default containsValue;
