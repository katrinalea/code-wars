import { calcWinState } from "./ticTacToe";

test("testing who has won", () => {
  expect(calcWinState(["x", "o", "x", "o", "o", "o", "o", "x", "x"])).toBe(
    "O Won"
  ),
    expect(calcWinState(["x", "x", "x", "o", "o", "x", "o", "o", "x"])).toBe(
      "X Won"
    ),
    expect(
      calcWinState(["x", "x", "x", "empty", "o", "x", "o", "o", "x"])
    ).toBe("X Won"),
    expect(calcWinState(["x", "o", "x", "o", "o", "x", "o", "x", "o"])).toBe(
      "draw"
    ),
    expect(
      calcWinState(["x", "o", "x", "empty", "empty", "empty", "o", "o", "x"])
    ).toBe("not finished");
});
