// 排序数组
// 给定一个整数数组 nums，将该数组升序排列。
// 示例 1：
// 输入：[5,2,3,1]
// 输出：[1,2,3,5]


// array.sort
// 第一种方法是用array.sort 方法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
// 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
// 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
// compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
// 要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列
// 执行时间 120 ms	
// 内存消耗 42.2 MB
const sortArray = function(arr) {
  return arr.sort((a, b) => a - b)
}


// 快排
// 执行时间 104 ms	
// 内存消耗 41.1 MB
const sortArrayQuick = function(arr) {
  if (arr.length <= 1) return arr

  return quickSort(arr, 0, arr.length -1)
}

const quickSort = (arr, left, right) => {
  if (left < right) {
    let pivot = right
    let partitionIndex = partition(arr, pivot, left, right)

    quickSort(arr, left, partitionIndex -1 < left ? partitionIndex - 1 : left )
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
  return arr
}

const partition = (arr, pivot, left, right) => {
  let i = left

  for (let j = left; j < right; j++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, pivot)
  return i
}

const swap = (arr, i, j) => {
  let temp = arr [i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 冒泡排序
// 执行时间 104 ms	
// 内存消耗 41.1 MB
const sortArrayBubble = (arr) => {
  if (arr.length <=1) return arr

  for (let i = 0; i <arr.length; i++) {
    let flag = false
    for (let j = 0; j <arr.length - i - 1; j++) {
      if (arr [j + 1] < arr[j]) {
        let temp = arr [j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }

    }
    if (!flag) break
  }
  return arr
}

// 归并排序
// 执行时间 168 ms
// 内存消耗 54.5 MB
const sortArrayMerge = function(arr) {
  if (arr.length <= 1) return arr

let middle = Math.floor(arr.length / 2)
let left = arr.slice(0, middle)
let right= arr.slice(middle)

const res = merge(sortArray(left), sortArray(right)) 
return res
}

var merge = function(left, right) {
let i = 0, j = 0, arr = [];
while (i < left.length && j < right.length) {
    if (left[i] < right[j]){
        arr.push(left[i])
        i++
    }else {
        arr.push(right[j])
        j++
    }
}

return arr.concat(left.slice(i)).concat(right.slice(j))
}

// test sorts
let testArr =[]
for (let i = 0 ; i < 8; i++) {
  testArr.push(Math.floor(Math.random() * 1000))
}

console.log(sortArray(testArr))
console.log(sortArrayQuick(testArr))
console.log(sortArrayBubble(testArr))
console.log(sortArrayMerge(testArr))

