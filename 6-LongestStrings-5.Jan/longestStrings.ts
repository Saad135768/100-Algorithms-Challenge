const longestStrings = (arrayOfStrings: string[]) :string[] => {
    const longestLength = Math.max(...arrayOfStrings.map(a => a.length))
    const result = arrayOfStrings.filter((a) => a.length === longestLength)
    return result
}

console.log(longestStrings(['abb', 'ad','adfadsfas','a']))
console.log(longestStrings(['a', 'a','adfadsfas','a']))
console.log(longestStrings(['axxx', 'xa','axxx','a']))