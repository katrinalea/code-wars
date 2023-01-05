type numNested = number | numNested[];

function sumNested(nestedArray: numNested[]): number {
  let count = 0;
  const stack: numNested[] = [...nestedArray];
  let currentArray: numNested[] = [];

  while (stack.length > 0) {
    if (typeof stack[stack.length - 1] === "number") {
      count += stack[stack.length - 1] as number;
      stack.pop();
    } else {
      if (stack[stack.length - 1] !== undefined) {
        currentArray = stack.pop() as numNested[];
        for (const item of currentArray) {
          if (typeof item === "number") {
            count += item;
          } else {
            stack.push(item);
          }
        }
      }
    }
  }
  return count;
}

console.log(sumNested([10, [2, 3, 6], [1, [100, [3, 4], 5]]]))
console.log(sumNested([1,2,[4,5,[6,6],8],[10,11]]))
console.log(sumNested([]))