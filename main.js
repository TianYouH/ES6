"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1.let 和 const 关键字

// let 关键字 定义变量为块级作用域 
if (true) {
    var _a = "name";
}
//打印结果：not defined
// console.log(a);


// const定义常量，一旦定义不可修改。如果是引用类型，可以改变其属性
var a = "黄";
// 报错只读
// a = "金";
// 引用类型测试
var b = { hh: 'hhhh' };
console.log(b.hh = "aaaa");

// 2.函数

//箭头函数 永远匿名 解决this指向全局问题
var add = function add(a, b) {
    return a + b;
};
// 写法二
// let add = (a, b) => a + b;
console.log(add(2, 3));
// 回掉函数
var number = [2, 4, 6];
var doubleNumber = number.map(function (number) {
    return number * 2;
});
console.log(doubleNumber);

var kitty = {
    age: 5,
    grow: function grow() {
        var _this = this;

        setTimeout(function () {
            console.log(_this.age);
        }, 2000);
    }
};
kitty.grow();

// 函数默认参数
function desc() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '黄金亮';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    console.log(arguments);
    return "我叫" + name + ",今年" + age + "岁啦。";
}
console.log(desc("狐美人", 999));

// Rest参数
function test() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "金闪闪";

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    console.log(rest); //[ 18, '火锅' ]
    console.log("\u5927\u5BB6\u597D,\u6211\u53EB " + name + " ,\u4ECA\u5E74 " + rest[0] + " \u5C81\u5566\u3002\u559C\u6B22\u5403 " + rest[1] + " \u3002"); //大家好,我叫 闪闪 ,今年 18 岁啦。喜欢吃 火锅 。
}
test("闪闪", 18, "火锅");

// 3.展开运算符

// 函数调用  函数把一个数组作为一个参数依次调用
function test2(x, y, z) {};
var args = [1, 2, 3];
// test2.apply(null, args);  //老
test2.apply(undefined, args);

// 数组字面量
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

// 对象展开运算符  SE7提案
var mike = { name: "huang", age: 50 };
mike = _extends({}, mike, { sex: "男" });
console.log(mike);

// 4.模版字符串。  `:后引号
var name = "哦哦哦";
var age = 15;
console.log("\u6211\u53EB " + name + " ,\u4ECA\u5E74 " + age);

// 5.解构赋值  快速从数组或对象中提取变量，之后用一个表达式读取整个结构。

// 解构数组
var foo = ["黄", "金", "亮"];
var one = foo[0],
    two = foo[1],
    three = foo[2];

console.log(one + " , " + two + " , " + three);

// 解构对象  
var person = { age: 20, name: "黄金亮" };
var age1 = person.age1,
    name1 = person.name1;

console.log(age1 + " " + name1);

// 6.类

var People = function () {
    function People(name, age) {
        _classCallCheck(this, People);

        this.name = name;
        this.age = age;
    }

    _createClass(People, [{
        key: "shout",
        value: function shout() {
            return "\u6211\u53EB " + this.name + " \uFF0C\u4ECA\u5E74 " + this.age + " \u5C81\u5566,";
        }
    }], [{
        key: "foo",
        value: function foo() {
            return "我是一个人类";
        }
    }]);

    return People;
}();

;

var p = new People("黄金亮", 18);
console.log(p.shout());

var Dog = function (_People) {
    _inherits(Dog, _People);

    function Dog(name, age, color) {
        _classCallCheck(this, Dog);

        var _this2 = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name, age));

        _this2.color = color;
        return _this2;
    }

    _createClass(Dog, [{
        key: "shuo",
        value: function shuo() {
            return _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), "shout", this).call(this) + ("\u6211\u7684\u989C\u8272\u662F " + this.color + " \u3002");
        }
    }]);

    return Dog;
}(People);

;
var d = new Dog("狗", 2, "黄色");
console.log(d.shuo());

// 7.模块
// 创建
/*
function hello() {
}
export hello;
*/
/*
export const PI = 3.14;
export function hello() {
}
*/
// export default function () {}

// 导出
// import { hello } from "./hello.js"
// hello();
// import { PI, hello } from "./hello.js"
// import * as util from "./hello.js"
// util.hello();
