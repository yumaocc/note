//实现一个函数数组的toString方法，只实现一维数组
//toString() 将数组转化成字符串

const _toString = (a) => {
    
}

let s = [1,2,3,4]
//实现数组pop()方法的第一个功能，即放回数组的最后一个元素
const _pop1 = (a) => {
    
}
//实现数组的pop()方法的第二个功能，删除数组的最后一个元素
const _pop2 = (a) => {
   
}


//实现完成的pop()方法，即删掉数组的最后一个元素，并且返回最后一个元素
const _pop = (a) => {
   
}
//实现数组的push()方法
const _push = (a,newElement) => {
   

}




// 提示
// 1，遍历数组
// 2，无
// 3，数组的length属性可以控制数组的个数
// 4，用一个变量拷贝一份数组最后一位的元素
// 5，同第三题一样

//答案
// 1，
// const _toString = (a) => {
//     let newString = ''
//     a.forEach(e => {
//         newString += e
//     });
//     return newString
// }
// 2，
// const _pop1 = (a) => {
//     return a[a.length -1]
// }
// 3，
// const _pop2 = (a) => {
//     a.length = a.length - 1
// }
// 4，
// const _pop = (a) => {
//     let last = a[length -1]
//     a.length = a.length - 1
//     return last
// }
// 5，
// const _push = (a,newElement) => {
//     a.length = a.length + 1 
//     a[a.length-1] = newElement

// }
