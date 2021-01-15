//reverse a string in js and python

const rewind = (word) => {
  let arr = [...word]
  //pointers
  let left = 0
  let right = arr.length - 1
  //move pointers in until they pass
  while (left < right) {
    //switch letters
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    //move pointers in
    left++
    right--
  }
  //return new word
  return arr.join("")
}
