import square from "./youre-a-square";

test("test if numbers are square", () => {
  expect(square(4)).toStrictEqual(true);
  expect(square(3)).toStrictEqual(false);
  expect(square(4000)).toStrictEqual(false);
});
