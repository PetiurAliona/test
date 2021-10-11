// На входе массив чисел, например: arr = [1,2,3,4,5].

// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:

// для arr = [ 1, 2, 3, 4, 5 ]
// getSums(arr) = [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5] = [1, 3, 6, 10, 15]

// const arr = [1, 2, 3, 4, 5]

// const getSums = arr.reduce((acc, value) => acc + value, 0)

// console.log(getSums)

// [1, 3, 6, 10, 15]

// const arr = [1, 2, 3, 4, 5]

// const getSums = (arr) =>
//   arr.reduce((sum, value) => {
//     if (!sum.length) {
//       sum.push(value)
//     } else {
//       sum.push(sum[sum.length - 1] + value)
//     }
//     return sum
//   }, [])

// console.log(getSums(arr))

// let arr = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Міша", age: 29 },
// ]

// const avarageAge = arr.reduce((age, value) => age + value.age, 0) / arr.length
// console.log(avarageAge)

// const arr = ["thor", "loki", "js", "react", "python", "odin", "html", "css"]

// const obj = (arr) =>
//   arr.reduce((acc, item) => {
//     !acc[item.length] ? (acc[item.length] = 1) : (acc[item.length] += 1)
//     return acc
//   }, {})

// console.log(obj(arr))
