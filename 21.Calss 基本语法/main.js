/*
Calss 基本语法
🚀1级标题
🚕2级标题
🚲3级标题
⭐常用

typeof Point // "function"
Point === Point.prototype.constructor // true

*/

// 1. 简介 🚀

// 类的由来 🚕

// 关键字：calss new 

// ES5
// 初始化一个类
/*
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

console.log(p.toString());
*/

// ES6

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var p = new Point(1, 2);

console.log('1.简介：', p.toString());


// 构造函数的prototype

/*
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
*/

/*
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
*/

// 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。

/*
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
*/

// prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。
// Point.prototype.constructor === Point // true


// 类的内部所有定义的方法，都是不可枚举的, ES5 写法可以被枚举
/*
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
*/


// 2.constructor 方法 🚕




/*
*/
/*
*/
/*
*/