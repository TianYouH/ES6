const _ = require('./lodash4.17.10');
// 
// ⭐返回一个新的
// 🚕在原有上操作
// 🚀近似操作组


// 数组

// 🚀
// 🆕1.chunk:⭐将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
/*
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
*/

// 🚀
// 🆕2.compact:⭐创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
/*
console.log(_.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]
*/

// 🚀
// 🆕3.concat:⭐创建一个新数组，将array与任何数组 或 值连接在一起。
/*
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]
*/

// 🚀
// 🆕4.difference:⭐创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 
/*
console.log(_.difference([3, 2, 1], [4, 2]));
// => [3, 1]
*/

// 🆕4.1.differenceBy(array, [values], [iteratee=_.identity])：⭐这个方法类似_.difference ，除了它接受一个 iteratee （愚人码头注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（愚人码头注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。 
/*
console.log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
// => [3.1, 1.3]
 
// The `_.property` iteratee shorthand.
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
// => [{ 'x': 2 }]
*/

// 🆕4.2.differenceWith(array, [values], [comparator])：⭐这个方法类似_.difference ，除了它接受一个 comparator （愚人码头注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。 
/*
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 2, 'y': 1 }], _.isEqual))
*/

// 🚀
// 🆕5.drop(array, [n=1])：⭐创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
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

// 🆕5.1.dropRight(array, [n=1]):⭐创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

// 🆕5.2.dropWhile(array, [predicate=_.identity])：⭐创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。

// 🆕5.3.dropRightWhile(array, [predicate=_.identity])：⭐创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
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
// 🆕6.fill(array, value, [start=0], [end=array.length])：🚕使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
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

// 🚀
// 🆕7.findIndex(array, [predicate=_.identity], [fromIndex=0])：该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
/*
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
  console.log(_.findIndex(users, function(o) { return o.user == 'barney'; }));
  // => 0
   
  // The `_.matches` iteratee shorthand.
  console.log(_.findIndex(users, { 'user': 'fred', 'active': false }));
  // => 1
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.findIndex(users, ['active', false]));
  // => 0
   
  // The `_.property` iteratee shorthand.
  console.log(_.findIndex(users, 'active'));
  // => 2
*/

// 🆕7.1.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1]):这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。

// 🆕7.2.indexOf(array, value, [fromIndex=0])：使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
/*
console.log(_.indexOf([1, 2, 1, 2], 2));
// => 1
 
// Search from the `fromIndex`.
console.log(_.indexOf([1, 2, 1, 2], 2, 2));
// => 3
*/

// 🆕7.3.lastIndexOf(array, value, [fromIndex=array.length-1]):这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。




// 🚀
// 🆕8.head(array)别名_.first：获取数组 array 的第一个元素。
/*
console.log(_.head([1, 2, 3]));
// => 1
 
console.log(_.first([]));
// => undefined
*/

// 🆕8.1.last(array)：获取array中的最后一个元素。
/*
console.log(_.last([1, 2, 3]));
// => 3
*/

// 🆕8.2.initial(array):获取数组array中除了最后一个元素之外的所有元素（愚人码头注：去除数组array中的最后一个元素）。
/*
console.log(_.initial([1, 2, 3]));
// => [1, 2]
*/



// 🚀
// 🆕9.flatten(array)：减少一级array嵌套深度。
/*
console.log(_.flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]
*/
// 🆕9.1.flattenDeep(array)：将array递归为一维数组。 
/*
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
// => [1, 2, 3, 4, 5]
*/
// 🆕9.2.flattenDepth(array, [depth=1]):根据 depth 递归减少 array 的嵌套层级
/*
var array = [1, [2, [3, [4]], 5]];
 
console.log(_.flattenDepth(array, 1));
// => [1, 2, [3, [4]], 5]
 
console.log(_.flattenDepth(array, 2));
// => [1, 2, 3, [4], 5]
*/

// 🚀
// 🆕10.fromPairs(pairs):这个方法返回一个由键值对pairs构成的对象。与_.toPairs正好相反；
/*
console.log(_.fromPairs([['fred', 30], ['barney', 40]]));
// => { 'fred': 30, 'barney': 40 }
*/

// 🚀
// 🆕11.intersection([arrays]):创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（愚人码头注：可以理解为给定数组的交集）
/*
console.log(_.intersection([2, 1], [4, 2], [1, 2]));
// => [2]
*/

// 🆕11.1.intersectionBy([arrays], [iteratee=_.identity]):这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
/*
console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor));
// => [2.1]
 
// The `_.property` iteratee shorthand.
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
// => [{ 'x': 1 }]
*/

// 🆕11.2.intersectionWith([arrays], [comparator])：这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。
/*
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
console.log(_.intersectionWith(objects, others, _.isEqual));
// => [{ 'x': 1, 'y': 2 }]
*/


// 🚀
// 🆕12.join(array, [separator=',']):将 array 中的所有元素转换为由 separator 分隔的字符串。
/*
console.log(_.join(['a', 'b', 'c'], '~'));
// => 'a~b~c'
*/


// 🚀
// 🆕3.
// 🚀
// 🆕14.
// 🚀
// 🆕15.
// 🚀
// 🆕16.
// 🚀
// 🆕17.
// 🚀
// 🆕18.
// 🚀
// 🆕19.
// 🚀
// 🆕20.
// 🚀
// 🆕21.
// 🚀
// 🆕22.
// 🚀
// 🆕23.
// 🚀
// 🆕24.


// “集合” 方法(“Collection” Methods)

// 处理🚀

// 🆕1. countBy(collection, [iteratee=_.identity])：创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（愚人码头注：迭代次数）。 iteratee 调用一个参数：(value)。
// 把给定的集合根据条件进行分类统计
/*
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }
 
// The `_.property` iteratee shorthand.
console.log(_.countBy(['one', 'two', 'three'], 'length'));
// => { '3': 2, '5': 1 }
*/

// 🆕1.1.groupBy(collection, [iteratee=_.identity])：创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。
// 把给定的集合根据条件进行分类打包并标识
/*
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
console.log(_.groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }
*/

// 🆕1.2.flatMap(collection, [iteratee=_.identity])：创建一个扁平化（愚人码头注：同阶数组）的数组，这个数组的值来自collection（集合）中的每一个值经过 iteratee（迭代函数） 处理后返回的结果，并且扁平化合并。 iteratee 调用三个参数： (value, index|key, collection)。
// 对集合值进行迭代，并将最后对值处理的结果进行扁平化返回。
/*
function duplicate(n) {
    return [n, n];
  }
  console.log(_.flatMap([1, 2], duplicate));
  // => [1, 1, 2, 2]
*/

// 🆕1.3.flatMapDeep(collection, [iteratee=_.identity])：这个方法类似 _.flatMap 不同之处在于，_.flatMapDeep 会继续扁平化递归映射的结果。
// 对集合值进行迭代，并将最后对值处理的结果进行深度扁平化返回。
/*
function duplicate(n) {
  return [[[n, n]]];
}
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
*/

// 🆕1.4.flatMapDepth(collection, [iteratee=_.identity], [depth=1])：该方法类似_.flatMap，不同之处在于，_.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。
// 对集合值进行迭代，并将最后对值处理的结果进行给定深度扁平化返回。
/*
function duplicate(n) {
    return [[[n, n]]];
  }
  console.log(_.flatMapDepth([1, 2], duplicate, 2));
  // => [[1, 1], [2, 2]]
*/

// 🆕1.5.invokeMap(collection, path, [args])：调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。任何附加的参数提供给每个被调用的方法。如果methodName（方法名）是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。
// 遍历给定集合，并对集合种的每个元素执行给定函数，并以函数返回结果替换原值
/*
console.log(_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
// => [[1, 5, 7], [1, 2, 3]]
console.log(_.invokeMap([123, 456], String.prototype.split, ''));
// => [['1', '2', '3'], ['4', '5', '6']]
*/

// 🆕1.6.keyBy(collection, [iteratee=_.identity])：创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。
/*
var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];
  _.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
  });
  // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
  console.log(_.keyBy(array, 'dir'));
  // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
*/

// 🆕1.7.sortBy(collection, [iteratees=[_.identity]])：创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。
// 排序
/*
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
  console.log(_.sortBy(users, function(o) { return o.user; }));
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
  console.log(_.sortBy(users, ['user', 'age']));
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
   
  _.sortBy(users, 'user', function(o) {
    return Math.floor(o.age / 10);
  });
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
*/

// 🆕1.8.orderBy(collection, [iteratees=[_.identity]], [orders]):此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。
// 对集合根据需要条件进行排序
/*
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
  // 以 `user` 升序排序 再  `age` 以降序排序。
  console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
*/

// 1.9.partition(collection, [predicate=_.identity]):创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。
// 把给定集合根据给定条件拆分成两组，第一组条件为真，第二组条件为假
/*
var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
   
  console.log(_.partition(users, function(o) { return o.active; }));
  // => objects for [['fred'], ['barney', 'pebbles']]
   
  // The `_.matches` iteratee shorthand.
  console.log(_.partition(users, { 'age': 1, 'active': false }));
  // => objects for [['pebbles'], ['barney', 'fred']]
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.partition(users, ['active', false]));
  // => objects for [['barney', 'pebbles'], ['fred']]
   
  // The `_.property` iteratee shorthand.
  console.log(_.partition(users, 'active'));
  // => objects for [['fred'], ['barney', 'pebbles']]
*/

// 🆕1.9.1.reduce(collection, [iteratee=_.identity], [accumulator])：压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(愚人码头注：作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(愚人码头注：accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：(accumulator, value, index|key, collection). 
// 迭代给定集合并返回期望的元素叠加结果
/*
_.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0);
  // => 3
   
  _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  }, {});
  // => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
  */

//   🆕1.9.2.reduceRight(collection, [iteratee=_.identity], [accumulator])：这个方法类似 _.reduce ，除了它是从右到左遍历collection（集合）中的元素的。
/*
var array = [[0, 1], [2, 3], [4, 5]];
 
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
*/

// 🆕1.9.3：shuffle(collection):创建一个被打乱值的集合。 使用 Fisher-Yates shuffle 版本。
/*
console.log(_.shuffle([1, 2, 3, 4]));
// => [4, 1, 3, 2]
*/

// 效验🚀

// 🆕2.every(collection, [predicate=_.identity])：通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)。 
// 迭代给定集合元素是否符合条件，只要有一个不符合就会终止迭代，返回false;
/*
console.log(_.every([true, 1, null, 'yes'], Boolean));
// => false
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
// The `_.matches` iteratee shorthand.
console.log(_.every(users, { 'user': 'barney', 'active': false }));
// => false
 
// The `_.matchesProperty` iteratee shorthand.
console.log(_.every(users, ['active', false]));
// => true
 
// The `_.property` iteratee shorthand.
console.log(_.every(users, 'active'));
// => false
*/

// 🆕2.1.some(collection, [predicate=_.identity])：通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。
// 迭代给定集合元素是否符合需求，如果都符合就返回true,否则返回false
/*
console.log(_.some([null, 0, 'yes', false], Boolean));
// => true
 
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
 
// The `_.matches` iteratee shorthand.
console.log(_.some(users, { 'user': 'barney', 'active': false }));
// => false
 
// The `_.matchesProperty` iteratee shorthand.
console.log(_.some(users, ['active', false]));
// => true
 
// The `_.property` iteratee shorthand.
console.log(_.some(users, 'active'));
// => true
*/

// 🆕2.2.includes(collection, value, [fromIndex=0])：检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。
// 查找给定值是否存在于集合中
/*
console.log(_.includes([1, 2, 3], 1));
// => true
 
console.log(_.includes([1, 2, 3], 1, 2));
// => false
 
console.log(_.includes({ 'user': 'fred', 'age': 40 }, 'fred'));
// => true
 
console.log(_.includes('pebbles', 'eb'));
// => true
*/

// 🆕2.3.size(collection)：返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
/*
console.log(_.size([1, 2, 3]));
// => 3
 
console.log(_.size({ 'a': 1, 'b': 2 }));
// => 2
 
console.log(_.size('pebbles'));
// => 7
*/

// 查找🚀

// 🆕3.filter(collection, [predicate=_.identity]):遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。 
// 过滤给定集合，并返回所有为真的结果集合
/*
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  console.log(_.filter(users, function(o) { return !o.active; }));
  // => objects for [ { user: 'fred', age: 40, active: false } ]
   
  // The `_.matches` iteratee shorthand.
  console.log(_.filter(users, { 'age': 36, 'active': true }));
  // => objects for [ { user: 'barney', age: 36, active: true } ]
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.filter(users, ['active', false]));
  // => objects for [ { user: 'fred', age: 40, active: false } ]
   
  // The `_.property` iteratee shorthand.
  console.log(_.filter(users, 'active'));
  // => objects for [ { user: 'barney', age: 36, active: true } ]
  */

// 🆕3.1.reject(collection, [predicate=_.identity])：_.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（愚人码头注释：非真）。
// 过滤给定集合，并返回所有为假的结果集合

//   🆕3.2.find(collection, [predicate=_.identity], [fromIndex=0])：遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。
// 找到给定条件的元素，并返回第一个
/*
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
   
  console.log(_.find(users, function(o) { return o.age < 40; }));
  // => object for 'barney'
   
  // The `_.matches` iteratee shorthand.
  console.log(_.find(users, { 'age': 1, 'active': true }));
  // => object for 'pebbles'
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.find(users, ['active', false]));
  // => object for 'fred'
   
  // The `_.property` iteratee shorthand.
  console.log(_.find(users, 'active'));
  // => object for 'barney'
  */

//  🆕3.3.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])：这个方法类似_.find ，不同之处在于，_.findLast是从右至左遍历collection （集合）元素的。
// 从右侧找到给定条件的元素，并返回第一个
/*
_.findLast([1, 2, 3, 4], function(n) {
    return n % 2 == 1;
  });
  // => 3
  */

// 🆕3.4.sample(collection)：从collection（集合）中获得一个随机元素。
/*
console.log(_.sample([1, 2, 3, 4]));
// => 2?
*/

// 🆕3.5.sampleSize(collection, [n=1])：从collection（集合）中获得 n 个随机元素。
/*
console.log(_.sampleSize([1, 2, 3], 2));
// => [3, 1]?
 
console.log(_.sampleSize([1, 2, 3], 4));
// => [2, 3, 1]?
*/

// 遍历🚀

// 🆕4.forEach(collection, [iteratee=_.identity])：调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。 
// 别名_.each
/*
_([1, 2]).forEach(function(value) {
    console.log(value);
  });
  // => Logs `1` then `2`.
   
  _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    console.log(key);
  });
  // => Logs 'a' then 'b' (iteration order is not guaranteed).
  */

//   🆕4.1：forEachRight(collection, [iteratee=_.identity])：这个方法类似 _.forEach，不同之处在于，_.forEachRight 是从右到左遍历集合中每一个元素的。
// 别名_.eachRight

// 🆕4.1.map(collection, [iteratee=_.identity])：创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数： (value, index|key, collection). 
// 遍历得定集合并根据需求进行处理
/*
function square(n) {
    return n * n;
  }
   
  _.map([4, 8], square);
  // => [16, 64]
   
  _.map({ 'a': 4, 'b': 8 }, square);
  // => [16, 64] (iteration order is not guaranteed)
   
  var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];
   
  // The `_.property` iteratee shorthand.
  _.map(users, 'user');
  // => ['barney', 'fred']
  */


//   “Date” Methods（“日期”方法）

// 🚀

// 🆕1.now()：获得 Unix 纪元 (1 January 1970 00:00:00 UTC) 直到现在的毫秒数。
/*
_.defer(function(stamp) {
    console.log(_.now() - stamp);
  }, _.now());
  // => 记录延迟函数调用的毫秒数
*/