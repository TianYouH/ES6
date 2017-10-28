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

// 16. keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。
{
// let iterator = arr.keys();

// console.log(iterator);// Array Iterator {}

// console.log(iterator.next()); // Object {value: 0, done: false}

// console.log(iterator.next()); // Object {value: 1, done: false}

// console.log(iterator.next()); // Object {value: 2, done: false}

// console.log(iterator.next()); // Object {value: undefined, done: true}
}

// 17.lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
// {
// let index = numArr.lastIndexOf(2);// index is 3
// index = numArr.lastIndexOf(7);
// console.log(index);// index is 6
// index = numArr.lastIndexOf(3, 3);
// console.log(index);// index is 2
// index = numArr.lastIndexOf(2, 2);
// console.log(index);// index is 1
// index = numArr.lastIndexOf(7, -2);
// console.log(index);// index is -1
// index = numArr.lastIndexOf(2, -1);
// console.log(index);// index is 1
// }

// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
{
// let doubles = numArr.map( x => x ** 2);  // ** 指数运算符 例：3**3 = 27
// console.log(doubles);
// let halves = numArr.map(x => x / 2);
// console.log(halves);
// let roots = numArr.map(Math.sqrt);
// console.log(roots);
}

// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
{
// console.log(numArr.length) //7
// console.log(numArr.pop()) //7
// numArr.pop();
// console.log(numArr); // [ 1, 2, 3, 4, 5 ]
// console.log(numArr.length) //5
}

// push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。
{
// console.log(numArr.push(8, 9)) //9
// console.log(numArr) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
}

// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
{
    // let a = [1, 2, 3];
    // let b = a.shift();   
    // console.log(a); // [2, 3]
    // console.log(b); // 1
}

// reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
{
// let total = [1, 2, 3].reduce(function(initVal, currentVal, index, arr) {
//   return initVal + currentVal;
// }, 2); //参数而是可选初始值，如果不填写将从数组第一个只开始结果也就是6
// console.log(total) //8

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//   return a.concat(b);
// }, ['5']);
// console.log(flattened) // [ '5', 0, 1, 2, 3, 4, 5 ]

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// let countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});
// console.log(countedNames) //{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// let obj = {name: 'huang', age: 13};
// if ('age' in obj) {
//     console.log('age属性存在')
// }else{
//     console.log('age不存在')
// }
}

// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
// PS: 与  Array.prototype.reduce() 的执行方向相反
{
// let flattened = [
//     [0, 1], 
//     [2, 3], 
//     [4, 5]
// ].reduceRight((a, b) => {
//     return a.concat(b);
// }, []);
// console.log(flattened) // [ 4, 5, 2, 3, 0, 1 ]
}

// reverse() 方法将数组中元素的位置颠倒。
// 第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。
{
//  numArr.reverse()
//  console.log(numArr) //[ 7, 6, 5, 4, 3, 2, 1 ]
}

// slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原始数组不会被修改。
{
// let a = ['zero', 'one', 'two', 'three'];
// let sliced = a.slice(1, 3);

// console.log(a);      // ['zero', 'one', 'two', 'three']
// console.log(sliced); // ['one', 'two']
}

// some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。一个通过即可
{
// const isBiggerThan10 = (element, index, array) => {
//   return element > 10;
// }
// console.log([2, 5, 8, 1, 4].some(isBiggerThan10)) // false

// console.log([12, 5, 8, 1, 4].some(isBiggerThan10)) // true
}

// sort() 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
{
    // let fruit = ['cherries', 'apples', 'bananas'];
    // console.log(fruit.sort()) // ['apples', 'bananas', 'cherries']
    
    // let scores = [1, 10, 21, 2]; 
    // console.log(scores.sort()) // [1, 10, 2, 21] // 注意10在2之前, // 因为在 Unicode 指针顺序中"10"在"2"之前

    // scores.sort((a, b) => {
    //     if (a<b) { return -1 } //小于 0 ，那么 a 会被排列到 b 之前
    //     if (a>b) { return 1 }  //大于 0 ， b 会被排列到 a 之前。
    //     return 0  //等于 0 ， a 和 b 的相对位置不变。
    // })
    // console.log(scores) //[ 1, 2, 10, 21 ]

    // let things = ['word', 'Word', '1 Word', '2 Words']; 
    // console.log(things.sort()) // ['1 Word', '2 Words', 'Word', 'word'] // 在Unicode中, 数字在大写字母之前, // 大写字母在小写字母之前.
}

// splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
{
    // let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    
    // myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
    // console.log(myFish)// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]
    
    // myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
    // console.log(myFish)// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
}

// toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
{
// let number = 1337;
// let date = new Date();
// console.log(date.toLocaleTimeString())
// let myArr = ["foo", number, date ];

// let str = myArr.toLocaleString(); 
// console.log(str); 
// 输出 "1,337,2017/8/13 下午8:32:24,foo"
// 假定运行在中文（zh-CN）环境，北京时区
}