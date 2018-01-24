/*
Promise
🚀1级标题
🚕2级标题
🚲3级标题
⭐常用
*/

// 基础用法🚀
{
  // let promise = new Promise(( resolve, reject ) =>{
  //   // resolve('test');
  //   reject('reject');
  // })

  // promise.then(
  //   val => {
  //     console.log(val)
  //   },
  //   error => {
  //     console.log(error)
  //   }
  // )

  // // promise.then(
  // //   val => {
  // //     console.log(val)
  // //   }
  // // ).catch(
  // //   err => {
  // //     console.log(err)
  // //   }
  // // )
}
//用Promise对象实现的 Ajax 操作的例子
{
  // let getJSON = function(url) {
  //   let promise = new Promise(function(resolve, reject){
  //     let client = new XMLHttpRequest();
  //     client.open("GET", url);
  //     client.onreadystatechange = handler;
  //     client.responseType = "json";
  //     client.setRequestHeader("Accept", "application/json");
  //     client.send();

  //     function handler() {
  //       if (this.readyState !== 4) {
  //         return;
  //       }
  //       if (this.status === 200) {
  //         resolve(this.response);
  //       } else {
  //         reject(new Error(this.statusText));
  //       }
  //     };
  //   });

  //   return promise;
  // };

  // getJSON("/posts.json").then(function(json) {
  //   console.log('Contents: ' + json);
  // }, function(error) {
  //   console.error('出错了', error);
  // });
}

//一个异步操作的结果是返回另一个异步操作
// p1是一个Promise，3秒之后变为rejected。
// p2的状态在1秒之后改变，resolve方法返回的是p1。
// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
// 所以，后面的then语句都变成针对后者（p1）。又过了2秒，p1变为rejected，导致触发catch方法指定的回调函数。
{
  // let p1 = new Promise(function (resolve, reject) {
  //   setTimeout(() => reject(new Error('fail')), 3000)
  // })

  // let p2 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve(p1), 1000)
  // })

  // p2
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error))
  // // Error: fail
}

// 注意：调用resolve或reject并不会终结 Promise 的参数函数的执行。
{
  // new Promise((resolve, reject) => {
  //   resolve(1);  //最好在它们前面加上return语句，这样就不会有意外
  //   console.log(2);
  // }).then(r => {
  //   console.log(r);
  // });
  // // 2
  // // 1
}

// Promise.prototype.then()🚀
let promiseResolve = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('黄金亮大好人')
    }, 2000);
  })
}
let promiseRejected = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('黄金亮大坏蛋')
    }, 2000);
  })
}

// 抛出错误模拟🚕
// 写法一
// const promiseError = new Promise(function(resolve, reject) {
//   try {
//     throw new Error('test');
//   } catch(e) {
//     reject(e);
//   }
// });

// // 写法二
// const promiseError = new Promise(function(resolve, reject) {
//   reject(new Error('test'));
// });

// 写法三
const promiseError = new Promise((resolve, reject) => {
  throw new Error('错误会被catch捕获到')
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//链式执行
{
  // promiseResolve().then(function(str) {
  //   console.log(str)
  //     return promiseResolve();
  // }).then(
  //   comments => console.log("resolved: ", comments),
  //   err => console.log("rejected: ", err)
  // );
}

// Promise.prototype.catch()🚀
{
  // promiseRejected().then((a) => {
  //   console.log('resolved:', a)
  // }).catch((b) => {
  //   console.log('reject:', b)
  // })
}

{
  // p.then((val) => console.log('fulfilled:', val))
  //   .catch((err) => console.log('rejected', err));
  // // 等同于
  // p.then((val) => console.log('fulfilled:', val))
  //   .then(null, (err) => console.log("rejected:", err));
}

// then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。⭐
{
  // // 写法一
  // promiseError.then( result => {
  //   console.log('1', result)
  // }, error => {
  //   console.log('2', error)
  // })

  // // 写法二
  // promiseError.then( result => {
  //   console.log('1', result)
  // }).catch( error => {
  //   console.log('2', error)
  // })

  // // 写法三
  // promiseError.catch( error => {
  //   console.log('3', error)
  // })
}

// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
{
  // const promise = new Promise((resolve, reject) => {
  //   resolve('成功哈哈')
  //   throw new Error('成功后抛出错误测试') //会抛出错误，但不会被promise的reject处理
  // })

  // promise.then(
  //   resolve => {
  //     console.log('成功', resolve)
  //   },
  //   reject => {
  //     console.log('失败', reject)
  //   }
  // ).catch(
  //   error => {
  //     console.log('错误被catch捕获到', error)
  //   }
  // )
}

// Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
// 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。


// Promise 内部的错误不会影响到 Promise 外部的代码
{
  // const someAsyncThing = function() {
  //   return new Promise(function(resolve, reject) {
  //     // 下面一行会报错，因为x没有声明
  //     resolve(x + 2);
  //   });
  // };

  // someAsyncThing().then(function() {
  //   console.log('everything is great');
  // });

  // setTimeout(() => { console.log(123) }, 2000);
  // // Uncaught (in promise) ReferenceError: x is not defined
  // // 123
}
// 上面代码中，someAsyncThing函数产生的 Promise 对象，内部有语法错误。
// 浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。
// 这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。


{
  // const promise = new Promise(function (resolve, reject) {
  //   resolve('ok');
  //   // {
  //   //   throw new Error('test')
  //   // }
  //   setTimeout(function () { throw new Error('test'); console.log('123456') }, 0) //
  // });
  // promise.then(function (value) { console.log(value) });
  // // ok
  // // Uncaught Error: test
}
// Promise 指定在下一轮“事件循环”再抛出错误。
// 到了那个时候，Promise 的运行已经结束了，所以这个错误是在 Promise 函数体外抛出的，会冒泡到最外层，成了未捕获的错误。

{
  // const someAsyncThing = function() {
  //   return new Promise(function(resolve, reject) {
  //     // 下面一行会报错，因为x没有声明
  //     resolve(x + 2);
  //   });
  // };

  // someAsyncThing()
  // .catch(function(error) {
  //   console.log('捕获错误', error);
  // })
  // .then(function() {
  //   console.log('继续链式调用');
  // });
  // // oh no [ReferenceError: x is not defined]
  // // carry on
}
// 上面代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。
// 如果没有报错，则会跳过catch方法。

{
  // const someAsyncThing = function() {
  //   return new Promise(function(resolve, reject) {
  //     // 下面一行会报错，因为x没有声明
  //     resolve(x + 2);
  //   });
  // };

  // someAsyncThing().then(function() {
  //   return someOtherAsyncThing();
  // }).catch(function(error) {
  //   console.log('捕获x错误', error);
  //   // 下面一行会报错，因为 y 没有声明
  //   y + 2;
  // }).then(function() {
  //   console.log('被上面捕获错误阻止');
  // });

  // 上面代码中，catch方法抛出一个错误，因为后面没有别的catch方法了，导致这个错误不会被捕获，也不会传递到外层。如果改写一下，结果就不一样了

  // someAsyncThing().then(function() {
  //   // 因为上面x未定义,所以不会执行这里
  //   return someOtherAsyncThing();
  // }).then(
  //   response => {
  //     console.log('获得的值为', response)
  //   }
  // ).catch(function(error) {
  //   console.log('oh no', error);
  //   // 下面一行会报错，因为y没有声明
  //   y + 2;
  // }).catch(function(error) {
  //   console.log('carry on', error);
  // });

  // oh no [ReferenceError: x is not defined]
  // carry on [ReferenceError: y is not defined]

  // 上面代码中，第二个catch方法用来捕获，前一个catch方法抛出的错误。

}

// Promise.all() 🚀

// Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。⭐
{
  // const p = Promise.all([p1, p2, p3]);
}
// 上面代码，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
// （Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
// p的状态由p1、p2、p3决定，分成两种情况。
// （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

{

  // let pArr = [1,2,3,4].map(item => {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(() => {
  //       console.log(`p${item}执行成功`)
  //       // if (item == 3) {
  //       //   reject(item)
  //       // }
  //       return resolve(item)
  //     }, item * 1000 );
  //   });
  // });

  // let pAll = Promise.all(pArr);
  // pAll.then(
  //   resolve => {
  //     console.log(resolve);
  //   },
  //   reject => {
  //     console.log( '拒绝的承诺', reject);
  //   }
  // ).catch(
  //   error => {
  //     console.log('捕获错误', error);
  //   }
  // );

}


{
  // 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。⭐

  // const p1 = new Promise((resolve, reject) => {
  //   resolve('hello');
  // })
  // .then(result => result)
  // .catch(e => e);

  // const p2 = new Promise((resolve, reject) => {
  //   throw new Error('报错了');
  // })
  // .then(result => result)
  // .catch(e => e);

  // Promise.all([p1, p2])
  // .then(result => console.log(result))
  // .catch(e => console.log(e));

  // ["hello", Error: 报错了]
  // p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。
  // 该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

  // 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。

}


// Promise.race()🚀

// Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
// const p = Promise.race([p1, p2, p3]);
// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

{
  // let pArr = [1, 2, 3, 4].map(item => {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(() => {
  //       console.log(`p${item}执行成功`)
  //       // if (item == 1) {
  //       //   reject(item)
  //       // }
  //       return resolve(item)
  //     }, item * 1000);
  //   });
  // });

  // let pAll = Promise.race(pArr);
  // pAll.then(
  //   resolve => {
  //     console.log(resolve);
  //   },
  //   reject => {
  //     console.log('拒绝的承诺', reject);
  //   }
  // ).catch(
  //   error => {
  //     console.log('捕获错误', error);
  //   }
  //   );
}


// Promise.resolve()🚀

// 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
// const jsPromise = Promise.resolve($.ajax('/whatever.json'));
// 上面代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。

// Promise.resolve等价于下面的写法。
{
  // Promise.resolve('foo')
  // // 等价于
  // new Promise(resolve => resolve('foo'))
}


// Promise.resolve方法的参数分成四种情况。

// （1）参数是一个 Promise 实例
// 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

// （2）参数是一个thenable对象
// thenable对象指的是具有then方法的对象，比如下面这个对象。
// Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
/*
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
*/

{
  // let thenable = {
  //     then: function (resolve, reject) {
  //         resolve(42);
  //     }
  // };

  // let p1 = Promise.resolve(thenable);
  // p1.then((value) => {
  //     console.log(value);  // 42
  // })
}

// 上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。


// （3）参数不是具有then方法的对象，或根本就不是对象
// 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
{
  // const p = Promise.resolve('Hello');

  // p.then(function (s) {
  //   console.log(s)
  // });
}
// Hello
// 上面代码生成一个新的 Promise 对象的实例p。
// 由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。
// Promise.resolve方法的参数，会同时传给回调函数。


// （4）不带有任何参数
// Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
// 所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve方法。
{
  // const p = Promise.resolve();
  // p.then(function () {
  //   // ...
  // });
}
// 上面代码的变量p就是一个 Promise 对象。

// 需要注意的是，立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
{
  // setTimeout(function () {
  //   console.log('three');
  // }, 0);
  // Promise.resolve().then(function () {
  //   console.log('two');
  // });
  // console.log('one');
  // // one
  // // two
  // // three
}
// 上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。