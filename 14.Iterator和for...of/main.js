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


// for...of循环

/*
一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
*/

// 数组
/*
const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}
*/


// Set 和 Map
/*
var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e); //Gecko   Trident   Webkit
}
*/

/*
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
  console.log(pair);
}
// ['a', 1]
// ['b', 2]

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262
*/


// 计算生成的数据结构
/*
有些数据结构是在现有数据结构的基础上，计算生成的。比如，ES6 的数组、Set、Map 都部署了以下三个方法，调用后都返回遍历器对象。

entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于 Set，键名与键值相同。Map 结构的 Iterator 接口，默认就是调用entries方法。
keys() 返回一个遍历器对象，用来遍历所有的键名。
values() 返回一个遍历器对象，用来遍历所有的键值。
这三个方法调用后生成的遍历器对象，所遍历的都是计算生成的数据结构。
*/
/*
let arr = ['a', 'b', 'c'];
for (let pair of arr.entries()) {
  console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
*/


// 类似数组的对象

/*
let str = "hello";

for (let s of str) {
  console.log(s); // h e l l o
}
*/

// DOM NodeList对象
/*
let paras = document.querySelectorAll("p");

for (let p of paras) {
  p.classList.add("test");
}
*/

// arguments对象
/*
function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');
// 'a'
// 'b'
*/


// 对象
/*
let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
  };
  
  for (let e in es6) {
    console.log(e);
  }
  // edition
  // committee
  // standard
  
// 会报错
for (let e of es6) {
  console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function
*/


// 与其他遍历语法比较

// ⭐最原始的写法就是for循环。
/*
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
*/

// ⭐数组提供内置的forEach方法。
// 这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。
/*
myArray.forEach(function (value) {
  console.log(value);
});
*/

// ⭐for...in循环可以遍历数组的键名。
// for...in循环有几个缺点。
/*
    数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
    for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
    某些情况下，for...in循环会以任意顺序遍历键名。
        总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。
*/
/*
for (var index in myArray) {
  console.log(myArray[index]);
}
*/

// ⭐for...of循环相比上面几种做法，有一些显著的优点。
// 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
// 不同于forEach方法，它可以与break、continue和return配合使用。
// 提供了遍历所有数据结构的统一操作接口。
/*
for (let value of myArray) {
    console.log(value);
  }
*/