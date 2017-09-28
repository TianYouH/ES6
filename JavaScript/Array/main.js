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
    //     return (item < 7) //false   只要有一个不成立就是false
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

// 10. find() 方法返回数组中满足提供的测试函数的"第一个元素的值"。否则返回 undefined。
{
// function isBigEnough(element) {
//     return element >= 5;
//   }
// console.log(numArr.find(isBigEnough)); // 5

// numArr.find((item, index, arr) => {
//     return item >= 6;
// })

//   另请参见  findIndex() 方法，它返回数组中找到的元素的索引，而不是其值。
//   如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用Array.prototype.indexOf() 或 Array.prototype.includes()
}

// 11.findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
{
// function isBigEnough(element) {
//     return element >= 6;
//   }
  
//  console.log(numArr.findIndex(isBigEnough)); // 5
//   另请参见  find() 方法，它返回数组中找到的元素的值，而不是其索引。
}

// 12.forEach() 方法对数组的每个元素执行一次提供的函数。
{
// arr.forEach(function(element) {
//     console.log(element + '45');
// });
// console.log(arr)  //[ '黄', '金', '亮', '好' ]   只执行不对函数内部操作
// 黄45
// 金45
// 亮45
// 好45
}

// 13.includes() 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false。
{
// console.log(arr.includes('黄'));  // true 
// console.log(arr.includes(4));  // false
}

// 14.indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
// 注意：对于String方法，请参阅 String.prototype.indexOf()。
{
// console.log(numArr.indexOf(2)); // 1
// console.log(numArr.indexOf(6)); // 5
// console.log(numArr.indexOf(7)); // 6
// console.log(numArr.indexOf(8)); // -1
// console.log(numArr.indexOf(9)); // -1

// if (numArr.indexOf(3) === -1) {
//   // element doesn't exist in array
// }
}

// 15.join() 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中。返回一个拼接好的字符串
{
// console.log(arr.join()); // 默认为 "," 黄,金,亮,好

// console.log(arr.join("")); // 分隔符 === 空字符串 ""  黄金亮好

// console.log(arr.join("-")); // 分隔符 "-"  黄-金-亮-好

// console.log(arr);  //[ '黄', '金', '亮', '好' ]
}

// 16.