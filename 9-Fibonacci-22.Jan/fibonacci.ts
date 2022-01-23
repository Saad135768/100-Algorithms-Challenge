// 0,1,1,2,3,5,8,13,21,34,55,89

const fibonacciRecursive = (index: number): number => {
  
    if(index < 2) return index
    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2)
}

const fibonacciRegular = (index: number): number => {
    const array: number[] = [0, 1]
    for(let i = 0; i < index - 1; i++){
        array.push(array[i] + array[i + 1])
    }
    return array[index]
}
console.log(fibonacciRecursive(11))
console.log(fibonacciRecursive(4))
console.log(fibonacciRecursive(10))
console.log(fibonacciRecursive(11))

console.log(fibonacciRegular(11))
console.log(fibonacciRegular(4))
console.log(fibonacciRegular(10))
console.log(fibonacciRegular(11))