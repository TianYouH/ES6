// Iterator(遍历器)概念

/*
遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的作用有三个：
    一是为各种数据结构，提供一个统一的、简便的访问接口；
    二是使得数据结构的成员能够按某种次序排列；
    三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
*/

/*
原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
下面的例子是数组的Symbol.iterator属性。
*/
/*
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
console.log(iter.next()) // { value: undefined, done: true }
*/

