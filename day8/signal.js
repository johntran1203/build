function solution(inputArray) {
    let result = inputArray[0] * inputArray[1]
    for(let i=2; i<=inputArray.length; i++) {
        if(inputArray[i-1] *inputArray[i-2] > result ) {
            result = inputArray[i-1] *inputArray[i-2] 
        }

    }
    return result
}


console.log(solution([3,6,-2,-5,7,3]))