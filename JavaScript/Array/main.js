// Array
let arr = ["黄", "金", "亮", "好"];
let str = 'huang';
// 属性

// 1.length

// console.log(arr.length) // 返回 4

// 2.Array.prototype 表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法
// console.log(Array.prototype)

// 方法

// 1.Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
// console.log(Array.from(arr)) //[ '黄', '金', '亮', '好' ]
// console.log(Array.from(str, (i) => { //[ 'hj', 'uj', 'aj', 'nj', 'gj' ]
//     i += 'j'
//     return i
// }))

// 2.Array.isArray() 用于确定传递的值是否是一个 Array。
console.log(Array.isArray(arr))  //true
console.log(Array.isArray(str))  //false