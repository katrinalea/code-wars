
import { validBraces } from "./valid-braces";

test("finding the digital root, two digit num", () => {
    expect(validBraces("(){}[]")).toBe(true),
      expect(validBraces("(")).toBe(false),
      expect(validBraces("[({})](])]")).toBe(false);
  });