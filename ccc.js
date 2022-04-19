let _slice = (start, end = 0) => {
    let newArr = []
    if (end === 0) {
      this.forEach((e, index) => {
        index >= start ? newArr.push(e) : ''
      })
      return newArr
    }
    this.forEach((e, index) => {
      if (start <= index && end >= index) {
        newArr.push(e)
      }
    })
    return newArr
  }
  let s = [0,1,2,3,4,5,6]
 let c = s._slice(1)
 console.log(c)