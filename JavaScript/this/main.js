// this理解笔记：每个函数的this是在调用时决定的。

// node环境下是严格模式，因此很多测试用例不生效。

/*
绑定规则

1.默认绑定
2.隐式绑定
    ①.隐式丢失
3.显示绑定
    ①.硬绑定
    ②.API调用上下文
4.new绑定
5.优先级
    ①.判断this
6.绑定例外
    ①.被忽略的this
    ②.间接引用
    ③.软绑定
    ④.箭头函数
*/


// 1.默认绑定⭐

/*
function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域

    console.log('baz');
    bar();//bar的调用位置
}

function bar() {
    // 当前调用栈是：baz -> bar
    // 因此，当前调用位置在baz中

    console.log('bar');
    foo();//foo调用的位置
}

function foo() {
    // 当前调用栈是：baz -> bar -> foo
    // 因此，当前调用位置在bar中

    console.log('foo');
}

baz();
*/

/*
function foo() {
    console.log(this);
}

var a = 2;

foo();//2
*/


// 2.隐式绑定⭐
//     ①.隐式丢失⭐
// 3.显示绑定⭐
//     ①.硬绑定⭐
//     ②.API调用上下文⭐
// 4.new绑定⭐
// 5.优先级⭐
//     ①.判断this⭐
// 6.绑定例外⭐
//     ①.被忽略的this⭐
//     ②.间接引用⭐
//     ③.软绑定⭐
//     ④.箭头函数⭐