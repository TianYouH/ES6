//Proxy

/*
1.概述
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Prox+y 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
*/

// 测试例子1  var proxy = new Proxy(target, handler);
// new Proxy()表示生成一个Proxy实例，
// target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。
/*
let obj = new Proxy({}, {
    get: function (target, key, receiver) {
       console.log(`获取: ${key}`) ;
    //    return Reflect.get(target, key, receiver);
    return 35
    },
    set: function (target, key, value, receiver) {
        console.log(`设置 ${key}`)
        return Reflect.get(target, key, value,receiver);
    }
})

let buttonAdd = document.getElementById('buttonSet');
let buttonSubtract = document.getElementById('buttonGet');
buttonAdd.addEventListener('click', function () {
    obj.name = 'huang';
})
buttonSubtract.addEventListener('click', function () {
    console.log(obj.name)
})
*/

