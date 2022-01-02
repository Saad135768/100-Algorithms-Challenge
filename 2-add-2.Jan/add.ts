const add = (a: number, b: number, ...c: number[]): number => {
    return c.reduce((accumlator, currentValue) => accumlator + currentValue, a + b)
}

console.log(add(1,2,3,4,5,6))
console.log(add(3,4,12,24,22,1233))
console.log(add(10,10))