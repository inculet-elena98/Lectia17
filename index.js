// const arr = [1, 'string', { name: 'Alex' }, false]
// const arr = [1, 2, 3, 4, 5]
// arr[0] = 0
// arr[99] = 6
// arr['someIndex'] = 6
// arr[arr.length] = 6
// arr[5] = 6
// const arr = [, , , , 5]
// console.log(arr[0])
// console.log(arr[arr.length - 1])
// console.log(arr)


// const arr = [1, 2, 3, 4, 5]
// arr.length = 2
// delete arr[1]
// console.log(arr)


// const arr = new Array('str')
// console.log(arr)


// const arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }


// const arr = [1, 2, 3, 4, 5]
// for (let i = 10; i >= 0; i--) {
//   console.log(i)
// }


// const arr = [1, 2, 3, 4, 5]
// for (let i = 10; i--;) {
//   console.log(i)
// }


// const arr = [1, 2, 3, 4, 5]
// for (; ;) {
//   console.log('hi')
// }


// const arr = [1, 2, 3, 4, 5]
// let i = 0;
// while (i < 20) {
//   console.log(i)
//   i++
// }


// const arr = [1, 2, 3, 4, 5]
// let i = 0;
// do {
//   console.log(i++)
// } while (i < 20)


// const arr = [1, 2, 3, 4, 5]
// let condition = true
// while (condition) {
//   console.log(condition)
//   condition = false
// }


// const arr = [1, 2, 3, 4, 5]
// let i = 0;
// while (i < 10) {
//   console.log(i)
//   i++
// }


// const arr = [1, 2, 3, 4, 5]
// let i = 0;
// if (i < 10) {
//   console.log(i)
//   i++
// }


// const arr = [1, 2, 3, 4, 5]
// console.log(arr.map((item, index, array) => {
//   console.log('element', item)
//   console.log('index', index)
//   console.log('array', array)
// }))


// const arr = [1, 2, 3, 4, 5]
// console.log(arr.map((item, index) => {
//   return {
//     count: item,
//     index: index
//   }
// }))


// const arr = [1, 2, 3, 4, 5]
// const arr1 = arr
// const arr1 = arr.map(item) => {
//   return item
// }

// arr1.push(6)
// console.log('arr', arr)
// console.log('arr1', arr1)



// const arr = [true, true, false, true, false]
// const arr1 = arr.filter((item, index) => {
//   return item
// })

// arr1.push(6)
// console.log('arr', arr)
// console.log('arr1', arr1)



// const arr = [1, 2, 3, 4, 5]
// const arr1 = arr.filter((item, idx) => {
//   console.log(idx, item)
//   return idx > 2
// })
// arr1.push(6)
// console.log('arr', arr)
// console.log('arr1', arr1)



// const arr = [1, 2, 3, 4, 5]
// const idx = arr.indexOf(2)

// console.log('arr', arr)
// console.log('arr1', idx)



// const arr = [1, 2, 3, 4, 5]
// const idx = arr.indexOf(6)

// console.log('arr', arr)
// console.log('arr1', idx)



// const arr = [1, 2, 3, 4, 5]
// const idx = arr.findIndex((item) => {
//   return item > 2
// })

// console.log('arr', arr)
// console.log('arr1', idx)



// const arr = [1, 2, 3, 4, 5]
// const every = arr.every((item) => {
//   return item > 1
// })

// console.log('arr', arr)
// console.log('arr1', every)



// const arr = [1, 2, 3, 4, 5]
// const some = arr.some((item) => {
//   console.log(item)
//   return item > 2
// })

// console.log('arr', arr)
// console.log('arr1', some)


// const arr = [1, 2, 3, 4, 5]
// const every = arr.every((item) => {
//   console.log(item)
//   return item > 1
// })

// console.log('arr', arr)
// console.log('arr1', every)



// const arr = [[1, 2], 3, [4, [5]]]

// console.log('arr', arr)
// console.log('flat', arr.flat())



// const arr = [[1, 2], 3, [4, [5]]]

// console.log('arr', arr)
// console.log('flat', arr.flat(2))


// const arr = [[1, 2], 3, [4, [5]]]
// arr.flat(3).forEach((item, index) => {
//   console.log('item', item)
//   console.log('index', index)
// })



// const arr = [[1, 2], 3, [4, [5]]]
// let sum = 0
// arr.flat(3).forEach((item, index) => {
//   sum = sum + item
// })
// console.log(sum)



// const arr = [1, 2, 3, 4, 5]
// let sum = 0
// arr.forEach((item) => {
//   sum = sum + item
// })
// console.log(sum)



// const arr = [1, 2, 3, 4, 5]
// // const itemToDelete = arr.findIndex
// const foundToDelete = arr.find((item, index) => {
//   if (index === 3) {
//     return item
//   }
// })
// const result = aee.filter((item) => {
//   return item !== foundToDelete
// })
// console.log('arr', arr)
// console.log('found', result)



// const arr = [1, 2, 3, 4, 5]
// const arr1 = [6, 7, 8, 9, 10]
// const arr2 = { ...arr, ...arr1 }
// // const arr2 = arr1.concat(arr)

// console.log('arr', arr)
// console.log('arr1', arr1)
// console.log('arr2', arr2)



const arr = [1, 2, 3, 4, 5]


console.log('arr', arr)
console.log('includes', arr.includes(6))
