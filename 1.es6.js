// 1.let 和 const 关键字

// let 关键字 定义变量为块级作用域 
if (true) {
    let a = "name"
}
//打印结果：not defined
// console.log(a);


// const定义常量，一旦定义不可修改。如果是引用类型，可以改变其属性
const a = "黄";
// 报错只读
// a = "金";
// 引用类型测试
const b = { hh: 'hhhh' };
console.log(b.hh = "aaaa");

// 2.函数

//箭头函数 永远匿名 解决this指向全局问题
let add = (a, b) => { return a + b };
// 写法二
// let add = (a, b) => a + b;
console.log(add(2, 3));
// 回掉函数
let number = [2, 4, 6];
let doubleNumber = number.map((number) => number * 2);
console.log(doubleNumber);

let kitty = {
    age: 5,
    grow: function() {
        setTimeout(() => {
            console.log(this.age);
        }, 2000);
    }
};
kitty.grow();

// 函数默认参数
function desc(name = '黄金亮', age = 5) {
    console.log(arguments);
    return "我叫" + name + ",今年" + age + "岁啦。"
}
console.log(desc("狐美人", 999));

// Rest参数
function test(name = "金闪闪", ...rest) {
    console.log(rest); //[ 18, '火锅' ]
    console.log(`大家好,我叫 ${name} ,今年 ${rest[0]} 岁啦。喜欢吃 ${rest[1]} 。`); //大家好,我叫 闪闪 ,今年 18 岁啦。喜欢吃 火锅 。
}
test("闪闪", 18, "火锅");

// 3.展开运算符

// 函数调用  函数把一个数组作为一个参数依次调用
function test2(x, y, z) {};
var args = [1, 2, 3];
// test2.apply(null, args);  //老
test2(...args);

// 数组字面量
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 对象展开运算符  SE7提案
let mike = { name: "huang", age: 50 };
// mike = {...mike, sex: "男" };
// console.log(mike);

// 4.模版字符串。  `:后引号
name = "哦哦哦";
age = 15;
console.log(`我叫 ${ name } ,今年 ${ age }`);

// 5.解构赋值  快速从数组或对象中提取变量，之后用一个表达式读取整个结构。

// 解构数组
let foo = ["黄", "金", "亮"];
let [one, two, three] = foo;
console.log(`${ one } , ${ two } , ${ three }`);

// 解构对象  
let person = { age: 20, name: "黄金亮" };
let { age1, name1 } = person;
console.log(`${ age1 } ${ name1 }`);

// 6.类
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    shout() {
        return `我叫 ${ this.name } ，今年 ${ this.age } 岁啦,`
    };
    static foo() {
        return "我是一个人类";
    };
};

const p = new People("黄金亮", 18);
console.log(p.shout());

class Dog extends People {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    };
    shuo() {
        return super.shout() + `我的颜色是 ${this.color} 。`
    };
};
const d = new Dog("狗", 2, "黄色");
console.log(d.shuo());