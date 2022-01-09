const alternatingSums = (arrayOfNums: number[]): number [] => {
 let sumEvenIndexes: number = 0
 let sumOddIndexes: number = 0

    arrayOfNums.map((_, i) => { //O(n)

        if(i % 2 === 0) return sumEvenIndexes += arrayOfNums[i]

        sumOddIndexes += arrayOfNums[i]
    })


    return [sumEvenIndexes, sumOddIndexes]
}

console.log(alternatingSums([0,1,2,3,4,5]))
console.log(alternatingSums([50, 60, 60, 45, 70]))