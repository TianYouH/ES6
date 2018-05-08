// 属性

/*
 1. Object.proptotype
 几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（也被称为覆盖）。
 但是有时候可能故意创建不具有典型原型链继承的对象，比如通过Object.create(null)创建的对象，或者通过Object.setPrototypeOf方法改变原型链。

 改变Object原型，会通过原型链，而改变所有对象；除非这些属性和方法被其他对原型链更里层的改动所覆盖。这提供了一个非常强大的、但有潜在危险的机制，来覆盖或扩展对象行为。
*/

//2.Object.proptotype.__proto__
/*
let Circle = function () {};
let shape = {};
let circle = new Circle();
// 设置该对象的原型链引用
// 过时且不推荐使用的。这里只是举个例子，尽量不要在生产环境中这样做。
shape.__proto__ = circle;
console.log(shape.__proto__ === circle)  //true
*/

// 3.Object.proptotype.constructor  返回创建实例对象的 Object 构造函数的引用。
/*
let obj = {};  //ƒ Object() { [native code] }
let arr = [];  //ƒ Array() { [native code] }
let num = 1;  //ƒ Number() { [native code] }
let bol = true;  //ƒ Boolean() { [native code] }
let str = '879';  //ƒ String() { [native code] }
let err = new Error('123');  //ƒ Error() { [native code] }

let und = undefined;  //constructor' of undefined
let nan = NaN;  //constructor' of undefined
let nul = null;  //constructor' of undefined

let arr1 = [obj, arr, num, bol, str, err, und, nan, nul];
arr1.forEach(function (val, key) {
    console.log(val.constructor);
})
*/
