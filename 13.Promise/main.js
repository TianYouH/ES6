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
  // )
}

// Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。