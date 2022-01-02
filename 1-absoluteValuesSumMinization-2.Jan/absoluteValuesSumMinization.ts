// Approach: 
// 1) Check if the length isEven => array[Math.floor(length/2) - 1]
// Else array[Math.floor(length/2)]

const absoluteValuesSumMinimization = (arrayOfNums: number[]): number => {
    if(arrayOfNums.length % 2 === 0) return arrayOfNums[Math.floor(arrayOfNums.length / 2) - 1]
    return arrayOfNums[Math.floor(arrayOfNums.length / 2)]
}

console.log(absoluteValuesSumMinimization([2,4,7]))
console.log(absoluteValuesSumMinimization([2,4,7,6]))
console.log(absoluteValuesSumMinimization([2,4,7,6,6]))
console.log(absoluteValuesSumMinimization([2,4,7,6,6,8]))