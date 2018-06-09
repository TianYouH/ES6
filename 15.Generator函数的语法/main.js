// 简介
/*
Generator 函数有多种理解角度。
    语法上，首先可以把它理解成， Generator 函数是一个状态机，封装了多个内部状态 。 
        Generator 函数除了状态机，还是一个遍历器对象生成函数。 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。 

    形式上，Generator 函数是一个普通函数， 但是有两个特征。
        一是， function 关键字与函数名之间有一个星号；
        二是，函数体内部使用 yield 表达式，定义不同的内部状态 

    换言之，Generator 函数是分段执行的， yield 表达式是暂停执行的标记，而 next 方法可以恢复执行。 
*/

/*
function* helloWorldGeneratator(params) {
    yield 'hellow';
    yield 'world';
    return 'generator';
}

var gen = helloWorldGeneratator();

console.log(gen.next());  //{ value: 'hellow', done: false }
console.log(gen.next());  //{ value: 'world', done: false }
console.log(gen.next());  //{ value: 'generator', done: true }
*/


// 🚀

/*
yield表达式与return语句既有相似之处，也有区别。
    相似之处在于，都能返回紧跟在语句后面的那个表达式的值。
    区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。

    一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。
    正常函数只能返回一个值，因为只能执行一次return；Generator 函数可以返回一系列的值，因为可以有任意多个yield。
    从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历（英语中，generator 这个词是“生成器”的意思）。
*/


// ⭐Generator 函数执行后，返回一个遍历器对象。该对象本身也具有 Symbol.iterator 属性，执行后返回自身。 
/*
function* gen() {
    // some code
}
var g = gen();
console.log(g[Symbol.iterator]() === g)
// true
*/

// ⭐为 JavaScript 提供了手动的“惰性求值” :保f函数不会再赋值时被处罚调用
// Generator 函数可以不用 yield 表达式，这时就变成了一个单纯的暂缓执行函数 
/*
function* f() {
    console.log('执行了！')
  }
  
  var generator = f();
  
  setTimeout(function () {
    generator.next()
  }, 2000);
  */
//  上面代码中，函数 f 如果是普通函数，在为变量 generator 赋值时就会执行。但是，函数 f 是一个 Generator 函数，就变成只有调用 next 方法时，函数 f 才会执行。 


// ⭐需要注意， yield 表达式只能用在 Generator 函数里面，用在其他地方都会报错。 
/*
(function (){ 
    yield 1;
})()
// SyntaxError: Unexpected number
*/


// ⭐yield 表达式如果用在另一个表达式之中，必须放在圆括号里面。 
/*
function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError

    console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
}
*/

// ⭐yield 表达式用作函数参数或放在赋值表达式的右边，可以不加括号。 
/*
function* demo() {
    foo(yield 'a', yield 'b'); // OK
    let input = yield; // OK
}
*/

// ⭐next 方法的参数
// yield 表达式本身没有返回值，或者说总是返回 undefined 。 next 方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。 

/*
Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。
    通过 next 方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
    也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
*/

/*
function* foo(x) {
  var y = 2 * (yield (x + 1));
  console.log(y); //24,第二次调用next方法，将上一次yield表达式的值设为12
  var z = yield (y / 3);
  console.log(z); //13,第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。
  return (x + y + z);
}

// var a = foo(5);
// console.log(a.next()) // Object{value:6, done:false}
// console.log(a.next()) // Object{value:NaN, done:false}
// console.log(a.next()) // Object{value:NaN, done:true}

var b = foo(5);
console.log(b.next()) // { value:6, done:false }
console.log(b.next(12)) // { value:8, done:false }
console.log(b.next(13)) // { value:42, done:true }
*/


// ⭐从语义上讲，第一个 next 方法用来启动遍历器对象，所以不用带有参数。 
/*
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
  }
  
  let genObj = dataConsumer();

  genObj.next();
  // Started
  genObj.next('a')
  // 1. a
  genObj.next('b')
  // 2. b
  */


//  ⭐如果想要第一次调用 next 方法时，就能够输入值，可以在 Generator 函数外面再包一层。 
/*
function wrapper(generatorFunction) {
    return function (...args) {
      let generatorObject = generatorFunction(...args);
      generatorObject.next();
      return generatorObject;
    };
  }
  
  const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
  });
  
  wrapped().next('hello!')
  // First input: hello!
  */


//  ⭐for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
/*
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
*/
// ⭐注意，一旦 next 方法的返回对象的 done 属性为 true ， for...of 循环就会中止。


// 🚀

// Generator.prototype.throw()

// ⭐Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。

/*
var g = function* () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
};

var i = g();
console.log(i.next());

try {
    i.throw(new Error('内部错误')); //第一个错误
    i.throw('b'); //第二个错误
} catch (e) {
    console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
*/

/*
上面代码中，遍历器对象i连续抛出两个错误。
    第一个错误被 Generator 函数体内的 catch 语句捕获。
    i 第二次抛出错误，由于 Generator 函数内部的 catch 语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的 catch 语句捕获。

    throw 方法可以接受一个参数，该参数会被 catch 语句接收，建议抛出 Error 对象的实例。 
*/

// ⭐throw 方法抛出的错误要被内部捕获，前提是必须至少执行过一次 next 方法 。

// ⭐不要混淆遍历器对象的 throw 方法和全局的 throw 命令 。

// ⭐如果 Generator 函数内部没有部署 try...catch 代码块，那么 throw 方法抛出的错误，将被外部 try...catch 代码块捕获。

// ⭐如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。