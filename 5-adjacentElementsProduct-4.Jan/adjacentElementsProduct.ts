const adjacentElementsProduct = (arrayOfNums: number[]): number => {

    let largestNumber = arrayOfNums[0] * arrayOfNums[1]

    for(let i = 0; i < arrayOfNums.length - 1; i++) { //O(n)
        if((arrayOfNums[i] * arrayOfNums[i + 1]) > largestNumber) {
            largestNumber = arrayOfNums[i] * arrayOfNums[i + 1]
        }
    }

    return largestNumber
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]))
console.log(adjacentElementsProduct([3,6,11,2,3,-10]))
console.log(adjacentElementsProduct([0,1,2,2,2,2,3]))
console.log(adjacentElementsProduct([-1,-2,-3,-5,8]))