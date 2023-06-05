let http = require("http")

function sum(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

function checkprime(a){
let count = 0
    for(let i=1; i<=a; i++){
        if(a%i==0){
           count++
        }
    }
    if(count == 2){
        return false
    }else{
        return false
    }
}

function Sort(arr){
    arr.sort((a,b)=>(a-b))
   // console.log(arr)
    return arr
}

function NumberOfWays(N){

    if(N==0){

        return 1

    }else if(N<0){

        return 0

    }
    
   return NumberOfWays(N-1)+NumberOfWays(N-2)+NumberOfWays(N-3)



}











module.exports = {sum,multiply,checkprime,Sort,NumberOfWays}