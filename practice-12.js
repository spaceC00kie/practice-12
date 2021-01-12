//given an array of strings return the array of integers representing the length of the corresponding string

arr = ["bob", "linda", "tina", "gene", "louise"]

const stringLength = (arr) => arr.map(i => i.length)

console.log(stringLength(arr))


//write a function that accepts an integer array, doubles each item, then returns mutated array