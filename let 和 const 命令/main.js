// ⭐es6 的声明变量的6种方法
// ES5 只有两种声明变量的方法：var命令和function命令。
// ES6除了添加let和const命令，后面章节还会提到，
// 另外两种声明变量的方法：import命令和class命令。
// 所以，ES6 一共有6种声明变量的方法。

// 基础用法

// 测试一
// {
//   let a = 'aaaaa';
//   var b = 'bbbbbb';
// }
// console.log(b); // ReferenceError: a is not defined
// console.log(a); // aaaaa


// 测试二
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i)
//   }
// }
// a[6]();  //10

// var b = [];
// for (let i = 0; i < 10; i++) {
//   b[i] = function () {
//     console.log(i)
//   }
// }
// b[6](); //6

// 测试三
// for (let i = 0; i < 3; i++) {
//   // console.log(i)  //报错不存在， 这种情况也被称之为暂时性死区
//   let i = 'abc'  //子作用域会覆盖父作用域
//   console.log(i)  // abc*3
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 不存在变量提升

// 测试一
// console.log(黄)
// var 黄 = '金闪闪';

// console.log(金)
// let 金 = '黄灿灿'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 暂时性死区   ~~~   ⭐ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。 详见测试二

//⭐ “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。 详见测试三

// 测试一
// var a = '123';
// if (true) {
//   a = 'huang' //a is not defined  
//   let a;  //let的重复声明会绑定这个块级作用域,所以在作用于内在其之前对a赋值会报错
// }

// 测试二
// if (true) {
//   // a = 'abc';  // ReferenceError
//   // console.log(a);  // ReferenceError

//   let a; 
//   console.log(a);
//   a = '123'
//   console.log(a)
// }

// 测试三
// if (true) {
//   console.log(typeof a);
//   let a; // ReferenceError
// }
// (function () {
//   console.log(typeof a); //undefined
// })()

// 测试四
// function bar(x = y, y = 2) { // 错误
//   return [x, y];
// }
// bar(); // ReferenceError,原因:y在没有声明前被引用
// function bar2(x = 2, y = x) { //正确
//   return [x, y];
// }
// console.log(bar2());

// 测试五
// if (true) {
   // var x = x;
// }
// if (true) {
  // let x = x; // ReferenceError
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 不允许重复声明

// 测试一

// function a() {
//   let a = 10;
//   var a = 10;
// }

// function b() {
//   let a = 10;
//   let a = 10;
// }

// 测试二

// function a(params) {
//   let params;
// }

// function b(params) {
//   {
//     let params;
//   }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 块级作用域

//为什么需要块级作用域
// 测试一： 内层变量覆盖外层变量
// var a = 'aaaaa';
// function f() {
//   if (false) {
//     var a = 'bbbbbbbbb';
//   }
//   console.log(a);
// }
// f(); //undefind   : 由于变量的提升，导致内层的变量覆盖了外层的变量,提升上去但判断为false所以a是undefind

// 测试二： 计数的循环变量泄露为全局变量
// var a = 'huang';
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
// console.log(i) // 5  循环结束后，i并没有消失，泄露成了全局变量。

// ES6 块级作用域
// 测试一: 外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。
// function a() {
//   let b = 5;
//   {
//     let b = 10;
//   }
//   console.log(b)
// }
// a();

// 测试二： 块作用域允许任意嵌套
// {{{{{{{{ console.log('黄大仙到此一游') }}}}}}}}

// 测试三： 外层作用域无法读取内层作用域变量
// {{{
//   {
//     let a = '金闪闪';
//   }
//   console.log(a);
// }}}

// 测试四： 内层可以重复定义外层变量
// {
//   let a = '黄金亮';
//   {
//     let a = '金闪闪';
//   }
// }

// 测试5： 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
// IIFE
// (function () {
//   console.log('金闪闪');
// }())

// // 块级作用域写法
// {
//   console.log('金闪闪');
// }

// 块级作用域和函数声明

// 测试一： ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
// 情况一
// if (true) {
//   function a() {} //ES5非法
// }
// // 情况二
// try {
//   function b() {} //ES5非法
// } catch (e) {

// }

// 测试二
// function a() { console.log('黄金亮111'); }
// (function () {
//   if (false) {
//     function a() { console.log('黄金亮222'); }
//   }
//   a();  //ES5会得到'黄金亮222'，因为在if内声明的函数a会被提升到函数头部,实际运行的代码如下。
// }())
// // ES5 环境
// function a() { console.log('黄金亮111'); }
// (function () {
//   function a() { console.log('黄金亮222'); }
//   if (false) {
//   }
//   a();
// }());

// ES6
// ⭐允许在块级作用域内声明函数。
// ⭐函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
// ⭐同时，函数声明还会提升到所在的块级作用域的头部。
// function a() { console.log('黄金亮111'); }
// (function () {
//   if (false) {
//     function a() { console.log('黄金亮222'); }
//   }
//   a();  //ES6 a is not a function
// }())
// ES6 环境实际运行效果
// function a() { console.log('黄金亮111'); }
// (function () {
//   var a = undefined;
//   if (false) {
//   function a() { console.log('黄金亮222'); }
//   }
//   a();
// }());

// 测试三 ： 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// 函数声明语句
// {
//   let a = 'secret';
//   function f() {
//     return a;
//   }
// }

// 函数表达式
// {
//   let a = 'secret';
//   let f = function () {
//     return a;
//   };
// }


// 测试四 ： 另外，还有一个需要注意的地方。ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。
// // 不报错
// 'use strict';
// if (true) {
//   function f() {}
// }

// // 报错
// 'use strict';
// if (true)
//   function f() {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const
// 基本用法

// 测试一 ： const声明一个只读的常量。一旦声明，常量的值就不能改变。
// const PI = 3.1415;
// PI // 3.1415
// PI = 3; // TypeError: Assignment to constant variable.

// 测试二 ： 对于const来说，只声明不赋值，就会报错。
// const foo;
// SyntaxError: Missing initializer in const declaration

//测试三： const的作用域与let命令相同：只在声明所在的块级作用域内有效。
// if (true) {
//   const MAX = 5;
// }
// MAX // Uncaught ReferenceError: MAX is not defined


// 测试四： const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
// if (true) {
//   console.log(MAX); // ReferenceError
//   const MAX = 5;
// }
// 上面代码在常量MAX声明之前就调用，结果报错。

// 测试五： const声明的常量，也与let一样不可重复声明。
// var message = "Hello!";
// let age = 25;
// 以下两行都会报错
// const message = "Goodbye!";
// const age = 30;

// 本质 ：const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动

// 测试一
// {
//   const foo = {};
//   foo.a = 123;
//   console.log(foo.a);
//   foo = {}; //Assignment to constant variable.  Assignment to constant variable.
// }

// 测试二
// const a = [];
// a.push('nihao');
// a.length = 0;
// a.push('nihao');
// console.log(a.length)
// a = ['tianTian']   //报错

// 测试三 ： 冻结对象
'use strict'
// const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
// foo.a = 123;

// 测试四 ：冻结对象及属性
// var hhhh = (obj) => {
//   Object.freeze(obj);
//   console.log(Object.keys(obj))
//   Object.keys(obj).forEach((key, i) => {
//     if (typeof obj[key] == 'object') {
//       hhhh(obj[key]);
//     }
//   })
// }

// // 只能冻结const对象
// const huang = {
//   name: '黄金亮',
//   age: 12,
//   height: 1.67
// }
// hhhh(huang);
// huang.name = 12; // 错误
// console.log(huang)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//顶层对象的属性  浏览器环境window    Node环境global
// 测试一 : ES5之中，顶层对象的属性与全局变量是等价的.
// window.a = 1
// console.log(a);
// global.b = 1;
// console.log(b)
// var c = 3;  //node环境测试，貌似不等价
// console.log(global.c) //undefind
// console.log(c) //3

// 测试二 ： var命令和function命令声明的全局变量，依旧是顶层对象的属性；
          // 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
          // 也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
// var a = 1;
// // 如果在Node的REPL环境，可以写成global.a
// // 或者采用通用方法，写成this.a
// window.a // 1

// let b = 1;
// window.b // undefined

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// global 对象  ⭐⭐
// ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

// 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
// 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
// Node 里面，顶层对象是global，但其他环境都不支持。
// 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

// 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
// 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
// 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。
// 综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

// 方法一
// (typeof window !== 'undefined'
//    ? window
//    : (typeof process === 'object' &&
//       typeof require === 'function' &&
//       typeof global === 'object')
//      ? global
//      : this);

// 方法二
// var getGlobal = function () {
//   if (typeof self !== 'undefined') { return self; }
//   if (typeof window !== 'undefined') { return window; }
//   if (typeof global !== 'undefined') { return global; }
//   throw new Error('unable to locate global object');
// };


// 现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。

// 垫片库system.global模拟了这个提案，可以在所有环境拿到global。
// CommonJS 的写法
// require('system.global/shim')();
// ES6 模块的写法
// import shim from 'system.global/shim'; shim();
// 上面代码可以保证各种环境里面，global对象都是存在的。

// CommonJS 的写法
// var global = require('system.global')();
// ES6 模块的写法
// import getGlobal from 'system.global';
// const global = getGlobal();
// 上面代码将顶层对象放入变量global。