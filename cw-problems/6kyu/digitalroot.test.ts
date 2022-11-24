import digitalroot from "./digitalroot";

test("finding the digital root, two digit num", () => {
  expect(digitalroot(22)).toBe(4),
    expect(digitalroot(45)).toBe(9),
    expect(digitalroot(34)).toBe(7);
});

test("finding the digital root, three and four digit num", () => {
  expect(digitalroot(5678)).toBe(8),
    expect(digitalroot(49)).toBe(4),
    expect(digitalroot(789)).toBe(6);
});
