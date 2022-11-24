import countOccurences from "./counting-occurences";
//const countOccurences = require("./counting-occurences");

test.skip("return a count of letters in a string", () => {
  expect(countOccurences("hello")).toBe({ h: 1, e: 1, l: 2, o: 1 });
  expect(countOccurences("goodbye")).toBe({
    g: 1,
    o: 2,
    d: 1,
    b: 1,
    y: 1,
    e: 1,
  });
});
