/* Write a function, 
 which calculates the correctness hints for each letter of a given single guess in Wordle based on the given hidden target. */

//Assume that the strings guess and hiddenTarget are always formed of exactly 5 upper-case alphabet characters (often with repeats).

// so you type in 5 letters, they can be repeated, if one matches an item in the hidden target it is returned as correct, with the position,
// can get a right letter wrong place mark

type MarkedGuess =
  | "Letter one correct"
  | "Letter two correct"
  | "Letter three correct"
  | "Letter four correct"
  | "Letter five correct"
  | "Letter one correct, wrong position"
  | "Letter two correct, wrong position"
  | "Letter three correct, wrong position"
  | "Letter four correct, wrong position"
  | "Letter five correct, wrong position";

export default function markWordleGuess(
  guess: string,
  hiddenTarget: string
): MarkedGuess[] {
  const guessArray = guess.split("");
  const hiddenTargetArray = hiddenTarget.split("");
  const markedArray: MarkedGuess[] = [];

  if (hiddenTargetArray[0] === guessArray[0]) {
    markedArray.push("Letter one correct");
  } else if (hiddenTargetArray.includes(guessArray[0])) {
    markedArray.push("Letter one correct, wrong position");
  }

  if (hiddenTargetArray[1] === guessArray[1]) {
    markedArray.push("Letter two correct");
  } else if (hiddenTargetArray.includes(guessArray[1])) {
    markedArray.push("Letter two correct, wrong position");
  }

  if (hiddenTargetArray[2] === guessArray[2]) {
    markedArray.push("Letter three correct");
  } else if (hiddenTargetArray.includes(guessArray[2])) {
    markedArray.push("Letter three correct, wrong position");
  }

  if (hiddenTargetArray[3] === guessArray[3]) {
    markedArray.push("Letter four correct");
  } else if (hiddenTargetArray.includes(guessArray[3])) {
    markedArray.push("Letter four correct, wrong position");
  }

  if (hiddenTargetArray[4] === guessArray[4]) {
    markedArray.push("Letter five correct");
  } else if (hiddenTargetArray.includes(guessArray[4])) {
    markedArray.push("Letter five correct, wrong position");
  }

  return markedArray;
}
