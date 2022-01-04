const addTwoDigits = (number: number = 0): number => {
    const stringifiedNum = number?.toString()
    const firstDigit = stringifiedNum?.charAt(0)
    const secondDigit = stringifiedNum?.charAt(1)
    return +firstDigit + +secondDigit
}

console.log(addTwoDigits(23))
console.log(addTwoDigits(33))
console.log(addTwoDigits(12))