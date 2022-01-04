const addBorder = (arrayOfStrings: string[]): string[] => {
    // const border = new Array(arrayOfStrings.length + 2).fill('*').join('')
    const border ='*'.repeat(arrayOfStrings.length + 2)
    const updatedArray = arrayOfStrings.map((arr) => `*${arr}*`)
    return [border, ...updatedArray, border]
}

console.log(addBorder(['abc', 'def', 'gh']))
console.log(addBorder(['abcsadas', 'defasdfsfdsf']))
console.log(addBorder(['abcasd']))