// Array
let arr = ["黄", "金", "亮", "好"];
let numArr = [1, 2, 3, 4, 5, 6, 7]
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

// ⭐2.Array.isArray() 用于确定传递的值是否是一个 Array。
// console.log(Array.isArray(arr))  //true
// console.log(Array.isArray(str))  //false

// 3.Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
//  Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。
// console.log(Array.of(7))      // [7] 
// console.log(Array.of(1, 2, 3)) // [1, 2, 3]

// console.log(Array(7))          // [ , , , , , , ]
// console.log(Array(1, 2, 3))    // [1, 2, 3]

// ⭐4.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

{
// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];

// let arr3 = arr1.concat(arr2,arr);

// console.log(arr3);  // [ "a", "b", "c", "d", "e", "f" ]

// console.log(arr1);  // ["a", "b", "c"]

// console.log(arr2);  // ["d", "e", "f"]
}

// 5.copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
{
    // let arr = ["黄", "金", "亮", "你","好"];
    // arr.copyWithin(1, 2, 3);
    // console.log(arr) //[ '黄', '亮', '亮', '你', '好' ]

// target(目标位置) === 1:"金"
// start(copy起始位置) === 2:"亮", 
// end(copy结束位置不包含该位置) === 3:"你"
}

// 6.entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

{
// let iterator = arr.entries();
// console.log(iterator); // Array Iterator {}
// console.log(iterator.next().value);  // [0, "黄"]
// console.log(iterator.next().value);  // [1, "金"]
// console.log(iterator.next().value);  // [2, "亮"]
// for (let e of iterator) {
//     console.log(e);  //[ 3, '好' ]
// }
}

// 7.every() 方法测试数组的所有元素是否都通过了指定函数的测试。
{
    // let bool = numArr.every((item, index, arr) => {
    //     return (item > 5) //true   只要有一个成立就是true
    // })
    // console.log(bool)
}

// 8.fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
{
// let numbers = [1, 2, 3];
// console.log(numbers.fill(6));  //[ 6, 6, 6 ]
}

// ⭐9.filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
{
    // test = (item, index, arr) =>{
    //     return item > 5
    // }
    // let arr = numArr.filter(test) //[ 6, 7 ]

    // let arr = numArr.filter((item, index, arr) => item > 5  ) //[ 6, 7 ]

    // console.log(arr)
}