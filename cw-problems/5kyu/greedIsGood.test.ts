
import  {score} from "./greedisGood"

test("greed is good kata", () => {
    expect(score([1,2,3,4,5])).toEqual(150);
    expect(score([3,3,3,4,5])).toEqual(350)
})