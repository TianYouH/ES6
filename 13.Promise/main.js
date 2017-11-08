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