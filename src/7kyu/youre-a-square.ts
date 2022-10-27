// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function square(number: number): boolean {
    let list = Array.from({length: 10000}, (item, index) => index)
    let squareNumbers = []
    for (let i of list){
        squareNumbers.push(i*i)
    }
    if (squareNumbers.includes(number)){
        return true
    } else {
        return false
    }
}

console.log(square(4), "expected = true")