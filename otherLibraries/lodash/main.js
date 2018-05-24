const _ = require('./lodash4.17.10');

// 数组


// 1.chunk:将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
/*
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
*/
 

// 2.compact:创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
/*
console.log(_.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]
*/


// 3.concat:创建一个新数组，将array与任何数组 或 值连接在一起。
/*
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]
*/


// 4.difference:创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 

console.log(_.difference([3, 2, 1], [4, 2]));
// => [3, 1]

