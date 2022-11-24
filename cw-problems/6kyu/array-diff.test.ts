import arrayDiff from "./array-diff";

test("find the difference in two arrays", () => {
  expect(arrayDiff([1, 2, 3, 4], [1, 2])).toStrictEqual([3, 4]),
    expect(arrayDiff([5, 6, 7], [8, 9, 10])).toStrictEqual([5, 6, 7]);
  expect(arrayDiff([10, 20], [0])).toStrictEqual([10, 20]);
});
