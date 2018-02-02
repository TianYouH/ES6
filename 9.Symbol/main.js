/*
Symbol
🚀1级标题
🚕2级标题
🚲3级标题
⭐常用

概述
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。
如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。

ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol 值通过Symbol函数生成。
这就是说，对象的属性名现在可以有两种类型⭐，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
*/

// ⭐注意，Symbol函数前不能使用new命令，否则会报错。
// 这是因为生成的 Symbol 是一个原始类型的值，不是对象。
// 也就是说，由于 Symbol 值不是对象，所以不能添加属性。
// 基本上，它是一种类似于字符串的数据类型。

{
  // const sym = Symbol('123')
  // console.log(sym)  //Symbol(123)
  // console.log(sym.toString())  //Symbol(123)
  // console.log(typeof sym)  //symbol
}

{
// const obj = {
//   toString() {
//     return 'abc';
//   }
// };
// const sym = Symbol(obj);
// console.log(sym) //Symbol(abc)
}
// ⭐如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。


{
// 没有参数的情况
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 === s2) // false

// // 有参数的情况
// let s3 = Symbol('foo');
// let s4 = Symbol('foo');
// console.log(s3 === s4) // false
}

// ⭐注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

// Symbol 值不能与其他类型的值进行运算，会报错。
// 但是，Symbol 值可以显式转为字符串。
// 另外，Symbol 值也可以转为布尔值，但是不能转为数值。
{
  // let sym = Symbol('My symbol');
// console.log("your symbol is " + sym)
// TypeError: can't convert symbol to string

// console.log(`your symbol is ${sym}`)
// TypeError: can't convert symbol to string

// let sym1 = Symbol('My symbol');
// String(sym1) // 'Symbol(My symbol)'
// console.log(sym1.toString()) // 'Symbol(My symbol)'

// let sym2 = Symbol();
// console.log(Boolean(sym2))// true
// console.log(!sym2)// false

// console.log(Number(sym2))   // TypeError
// console.log(sym2 + 2)  // TypeError

}
