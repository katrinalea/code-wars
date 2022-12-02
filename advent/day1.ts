import fs from 'fs/promises';

async function readFileAndSolveProblem() {
    console.log("hello")
    const inputRaw = await fs.readFile("./advent/food.txt", { encoding: 'utf8' })
    const inputLines: string[] = inputRaw.split("\n");
    console.log({ inputLines })
    console.log("hello")
    //TODO: solve the problem here, based on inputLines

}

readFileAndSolveProblem()