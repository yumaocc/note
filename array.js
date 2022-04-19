
let _slice = (arr, start, end = 0) => {
  let newArr = []
  if (end === 0) {
    arr.forEach((e, index) => {
      index >= start ? newArr.push(e) : ''
    })
    return newArr
  }
  arr.forEach((e, index) => {
    if (start <= index && end >= index) {
      newArr.push(e)
    }
  })
  return newArr
}
let c = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(_slice(c,1))