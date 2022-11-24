/* Write a function `calcWinState` to take a representation of a tictactoe (noughts and crosses) board ( `BoardState`) and return the status (`WinStatus`):

either

- there was a draw;
- or the game has not been finished yet;
- or a player won (indicate the winning player)

Assume all input board states are legal (e.g. no board has winning rows by BOTH players).

Assume, for simplicity, that `type Player = "X" | "O"`

### Designing representations

- You will have to design the representation of the board state.  Keep it simple.   Coordinates representing (x, y) or (column,row) are **not** actually required.

- You will have to design the return type to be able to represent the three states.

Note: In the case of a win, you don’t have to report *where* the winning row is, only which player won. */
//array with 9 'empty' sections
// each turn let player = not player
//1,2,3 & 4,5,6 & 7,8,9 & 1,4,7 & 2,5,8 & 3,6,9 & 1,5,9 & 7,5,3   8 ways to win

type Player = "x" | "o";
type WinState = "draw" | "X Won" | "O Won" | "not finished";

//example boardState = ["x", "o", "x", "empty", "o", "empty", "x", "empty", "o"]  //input is an array of length 9 with string entries

export function calcWinState(boardState: string[]): WinState {
  if (boardState[0] === "x" && boardState[1] === "x" && boardState[2] === "x") {
    return "X Won";
  } else if (
    boardState[0] === "o" &&
    boardState[1] === "o" &&
    boardState[2] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[3] === "x" &&
    boardState[4] === "x" &&
    boardState[5] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[3] === "o" &&
    boardState[4] === "o" &&
    boardState[5] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[6] === "x" &&
    boardState[7] === "x" &&
    boardState[8] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[6] === "o" &&
    boardState[7] === "o" &&
    boardState[8] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[0] === "x" &&
    boardState[3] === "x" &&
    boardState[6] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[0] === "o" &&
    boardState[3] === "o" &&
    boardState[6] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[1] === "x" &&
    boardState[4] === "x" &&
    boardState[7] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[1] === "o" &&
    boardState[4] === "o" &&
    boardState[7] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[2] === "x" &&
    boardState[5] === "x" &&
    boardState[8] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[2] === "o" &&
    boardState[5] === "o" &&
    boardState[8] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[0] === "x" &&
    boardState[5] === "x" &&
    boardState[9] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[0] === "o" &&
    boardState[5] === "o" &&
    boardState[9] === "o"
  ) {
    return "O Won";
  } else if (
    boardState[2] === "x" &&
    boardState[4] === "x" &&
    boardState[6] === "x"
  ) {
    return "X Won";
  } else if (
    boardState[2] === "o" &&
    boardState[4] === "o" &&
    boardState[6] === "o"
  ) {
    return "O Won";
  } else if (boardState.includes("empty")) {
    return "not finished";
  } else {
    return "draw";
  }
}

// need to add draw cases in
