// https://www.codewars.com/kata/5270d0d18625160ada0000e4

export function score(dice: number []) {
  const diceObj = {}
  let points = 0;
  for (const roll of dice) {
    if (diceObj === undefined || diceObj[roll] === undefined) {
      diceObj[roll] = 1;
    } else {
      diceObj[roll] += 1;
    }
  }
  console.log(diceObj);
  for (const key of Object.keys(diceObj)) {
    if (key === "1" && diceObj[key] === 3) {
      points += 1000;
    } else if (key === "1" && diceObj[key] / 3 >= 1) {
      points += 1000 + 100 * (diceObj[key] % 3);
      console.log(diceObj[key] % 3, "remainder");
    } else if (key === "1") {
      points += 100 * diceObj[key];
    } else if (key === "6" && diceObj[key] >= 3) {
      points += 600;
    } else if (key === "5" && diceObj[key] === 3) {
      points += 500;
    } else if (key === "5" && diceObj[key] / 3 >= 1) {
      points += 500 + 50 * (diceObj[key] % 3);
    } else if (key === "5") {
      points += 50 * diceObj[key];
    } else if (key === "4" && diceObj[key] >= 3) {
      points += 400;
    } else if (key === "3" && diceObj[key] >= 3) {
      points += 300;
    } else if (key === "2" && diceObj[key] >= 3) {
      points += 200;
    }
  }
  console.log(points);
  return points;
}
