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
