const maxChars = (str: string) => {
    const stack ={}
    let maxCharacter = ''
    const strArr = str.split('').sort((a: any, b: any) => a - b)
    
    strArr.forEach((s) => {
        if(stack[s]) return stack[s]++
        return stack[s] = 1
    })

    const MaxLength = Math.max(...Object.values(stack))

    for(let char in stack){
        if(stack[char] === MaxLength) return maxCharacter = char
    }
    return maxCharacter
}

console.log(maxChars('hellllllllooooo'))
console.log(maxChars('abbbbbbvvvvvvvvddddddddddddddd'))
console.log(maxChars('javascript'))