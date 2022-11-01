import printCapitalsQuiz from "./objects";
const capitals = {
  Afghanistan: "Kabul",
};
test("", () => {
  expect(printCapitalsQuiz(capitals)).toBe(
    "Of what country is Kabul the capital?: Answer: natsinahgfA Of what country is Luanda the capital?: Answer: alognA"
  );
});
