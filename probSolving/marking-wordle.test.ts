import markWordleGuess from "./marking-wordle";

test("first tests", () => {
  expect(markWordleGuess("HELLO", "YELLS")).toEqual([
    "Letter two correct",
    "Letter three correct",
    "Letter four correct",
  ]);
});

test("first tests", () => {
    expect(markWordleGuess("HELLO", "SELLH")).toEqual([
    "Letter one correct, wrong position",
      "Letter two correct",
      "Letter three correct",
      "Letter four correct",
    ]);
  });
  


