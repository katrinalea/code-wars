import containsValue from "./code-war";

test("find if an array contains a certain value", () => {
  expect(containsValue([1, 2, 3, 4], 4)).toBe(true);
  expect(containsValue(["hello", "goodbye"], "hell")).toBe(false);
})
  
