const alphabetSubSequence = (str: string): boolean => {
    let isAlphabetSubSequence: boolean = true

    if(!str?.trim()) return false

    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().charCodeAt(i + 1) - str.toLowerCase().charCodeAt(i) <= 0)  isAlphabetSubSequence = false
    }

    return isAlphabetSubSequence

}

console.log(alphabetSubSequence('agz'))
console.log(alphabetSubSequence('effg'))
console.log(alphabetSubSequence(''))
console.log(alphabetSubSequence('312'))