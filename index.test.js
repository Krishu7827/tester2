let {sum,multiply,checkprime,Sort,NumberOfWays} = require("./index")
//let Jest = require('jest')
global.score = 1
describe('add',()=>{
test('add 1 + 2 to equal 2',()=>{
    expect(sum(1,2)).toBe(3)
    global.score+=1
})
})

describe('multiply',()=>{
test('multiply number',()=>{
    expect(multiply(2,3)).toBe(6)
    global.score+=1
})
})

test('check 5 is prime number or not',()=>{
    expect(checkprime(5)).toBe(true)
    global.score+=1
})


test('checking arr is sorted or not',()=>{

    expect(Sort([2,3,5,6,7,3,1])).toEqual([1,2,3,3,5,6,7])
    expect(Sort([5,4,3,2,1])).toEqual([1,2,3,4,5])
    global.score+=1
})


test('Number of ways problems',()=>{
    expect(NumberOfWays(4)).toEqual(7)
    expect(NumberOfWays(3)).toEqual(4)
    expect(NumberOfWays(7)).toEqual(44)
    global.score+=2
})





afterAll(()=>{
    console.log("Final Score is",global.score)
})