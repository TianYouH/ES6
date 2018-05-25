const _ = require('./lodash4.17.10');
// ⭐返回一个新的
// 🚕在原有上操作
// 🚀近似操作组


// 数组

// 🚀
// 1.chunk:⭐将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
/*
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
*/

// 🚀
// 2.compact:⭐创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
/*
console.log(_.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]
*/

// 🚀
// 3.concat:⭐创建一个新数组，将array与任何数组 或 值连接在一起。
/*
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]
*/

// 🚀
// 4.difference:⭐创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 
/*
console.log(_.difference([3, 2, 1], [4, 2]));
// => [3, 1]
*/

// 4.1.differenceBy(array, [values], [iteratee=_.identity])：⭐这个方法类似_.difference ，除了它接受一个 iteratee （愚人码头注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（愚人码头注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。 
/*
console.log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
// => [3.1, 1.3]
 
// The `_.property` iteratee shorthand.
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
// => [{ 'x': 2 }]
*/

// 4.2.differenceWith(array, [values], [comparator])：⭐这个方法类似_.difference ，除了它接受一个 comparator （愚人码头注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。 
/*
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 2, 'y': 1 }], _.isEqual))
*/

// 🚀
// 5.drop(array, [n=1])：⭐创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
/*
var arr = [ 1, 2, 3, 4, 5];
console.log(_.drop(arr, 2));
// => [ 3, 4, 5 ]
console.log(arr);
// => [ 1, 2, 3, 4, 5 ]
console.log(_.drop([1, 2, 3]));
// => [2, 3]
console.log(_.drop([1, 2, 3], 2));
// => [3]
console.log(_.drop([1, 2, 3], 5));
// => []
console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]
*/

// 5.1.dropRight(array, [n=1]):⭐创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

// 5.2.dropWhile(array, [predicate=_.identity])：⭐创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。

// 5.3.dropRightWhile(array, [predicate=_.identity])：⭐创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
/*
var users = [{
        'user': 'fred',
        'active': false
    },
    {
        'user': 'barney',
        'active': true
    },
    {
        'user': 'pebbles',
        'active': false
    },
    {
        'user': 'huang',
        'active': true
    },
];

console.log(_.dropRightWhile(users, function (o) {
    return !o.active;
}));
// => [ { user: 'barney', active: true } ]

// The `_.matches` iteratee shorthand.
console.log(_.dropRightWhile(users, {
    'user': 'pebbles',
    'active': false
}));
// => [ { user: 'barney', active: true },{ user: 'fred', active: false } ]

// The `_.matchesProperty` iteratee shorthand.
console.log(_.dropRightWhile(users, ['active', false]));
// => [ { user: 'barney', active: true } ]

// The `_.property` iteratee shorthand.  从右侧开始剔除为给定属性值为真的对象
console.log(_.dropRightWhile(users, 'active'));
// => [ { user: 'fred', active: false }, { user: 'barney', active: true }, { user: 'pebbles', active: false } ]
*/


// 🚀
// 6.fill(array, value, [start=0], [end=array.length])：🚕使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
/*
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

console.log(_.fill(Array(3), 2));
// => [2, 2, 2]

console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
// => [4, '*', '*', 10]
*/


