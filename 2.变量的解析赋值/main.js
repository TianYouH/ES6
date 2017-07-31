// 1. 数组的解析赋值

// 测试一
  // 以前
// let a = 1; 
// let b = 2;
// let c = 3;
  // 现在
// let [a, b, c] = [1, 2, 3];
// console.log(b);

// 测试二
// let [a, [[b],c]] = [1,[[2],3]];
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

// let [ , , c] = ['a', 'b', '112'];
// console.log(c) //112

// let [x, , y] = [1, 2, 3];
// console.log(x); //1
// console.log(y); //3

// let [a,...b] = [1, 2, 3, 4];
// console.log(a); //1
// console.log(b); //[2, 3, 4]

// let [x, y,...z] = ['huang'];
// console.log(x) //huang
// console.log(y) //undefined
// console.log(z) //[]
// ⭐如果解析不成功，变量的值就等于undefined
// let [y] = [];  //y = undefined
// let [x, y] = [1] //y = undefined

// 测试三 ： 不完全解构
// let [x, y] = [1, 2, 3];
// console.log(x); //1
// console.log(y); //2

// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a) //1
// console.log(b) //2
// console.log(d) //4

// 测试四 ： 不可遍历结构,详参阅Iterator
  // 报错
// let [a] = 1;
// let [b] = true;
// let [c] = NaN;
// let [d] = null;
// let [e] = {};

// 测试五 ： Set结构
// let [x, y, z] = new Set(['a', 1, ['123']]);
// console.log(x) //a
// console.log(y) //1
// console.log(z) //['123']

// 测试六 ： 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(sixth) // 5

// 上面代码中，fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。

// 默认值 ： 结构赋值允许指定默认值
// 测试一 ： 等于（===）undefined赋值失败，默认值生效
// let [a = true] = [];
// console.log(a) //true
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// console.log(y)

// 测试二 ：null不严格等于undefined 
// let [x = 1] = [undefined];
// console.log(x)
// let [y = 2] = [null];
// console.log(y)

//  ◔ ‸◔? 测试三 ： 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
// function f() {
//   console.log('aaa');
// }
// let [x = f()] = [1];
// console.log(x) //1
// 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
// let x;
// if ([1][0] === undefined) {
//   x = f();
// } else {
//   x = [1][0];
// }
// console.log(x)

// 测试四 ： 默认值可以引用结构赋值的其他变量，但该变量必须已经声明

// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// 上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2. 对象的解析赋值

// 测试一： 解构不仅可以用于数组，还可以用于对象。
// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo) // "aaa"
// console.log(bar) // "bbb"
// ⭐对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

// 测试二：属性的次序不一致，对取值完全没有影响
// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// console.log(foo) // "aaa"
// console.log(bar) // "bbb"

// 测试三 ：没有对应的同名属性，导致取不到值，最后等于undefined
// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz) // undefined

//测试四 ： 如果变量名与属性名不一致，必须写成下面这样。
// var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz) // "aaa"

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// console.log(f) // 'hello'
// console.log(l) // 'world'
// 这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。

// let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// 也就是说，⭐对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined
// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。

// 测试五 ： 与数组一样，解构也可以用于嵌套结构的对象。

// let obj = { p: ['Hello',{ y: 'World' }]};
      // let { p: [x, { y }] } = obj;
// console.log(x) // "Hello"
// console.log(y) // "World"

// 注意，这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。
// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };
// let { p, p: [x, { y }] } = obj;
// console.log(x) // "Hello"
// console.log(y) // "World"
// console.log(p) // ["Hello", {y: "World"}]


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3. 字符串的解析赋值

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 4. 数值和布尔值的解析赋值

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 5. 函数参数的解析赋值

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 6. 圆括号的问题

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 7. 用途