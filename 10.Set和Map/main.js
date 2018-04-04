// 🚀1级标题
// 🚕2级标题
// 🚲3级标题
// ⭐常用
// 1.ES6 提供了新的数据结构。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// 2.Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
// 3.Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
// 4.Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。

// Set🚀

// Set实例属性和方法🚕
{
    // Set 结构的实例有以下属性。

    // Set.prototype.constructor：构造函数，默认就是Set函数。
    // Set.prototype.size：返回Set实例的成员总数。


    // Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

    // add(value)：添加某个值，返回 Set 结构本身。
    // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    // has(value)：返回一个布尔值，表示该值是否为Set的成员。
    // clear()：清除所有成员，没有返回值。
}

{
    // let s = new Set();
    // [1,2,3,4,5,5,6,6,1,7].forEach(v => s.add(v));
    // console.log(s) //Set { 1, 2, 3, 4, 5, 6, 7 }
}

// Set初始化方式🚕
{
    // const s = new Set([1, 2, 3, 4, 4]);
    // console.log([...s]); //[ 1, 2, 3, 4 ]
    // console.log(...s);   //1 2 3 4
    // console.log(s);      //Set { 1, 2, 3, 4 }

    // const s1 = new Set(document.querySelectorAll('div'));
    // 等于
    // const s2 = new Set();
    // document.querySelectorAll('div').forEach(div => set.add(div));
}

// Set遍历操作🚕
{
    // Set 结构的实例有四个遍历方法，可以用于遍历成员。Set的遍历顺序就是插入顺序。

    // keys()：返回键名的遍历器
    // values()：返回键值的遍历器
    // entries()：返回键值对的遍历器
    // forEach()：使用回调函数遍历每个成员

    // let set = new Set(['red', 'green', 'blue']);

    // for (let item of set.keys()) {console.log(item);}
    // red
    // green
    // blue

    // for (let item of set.values()) {console.log(item);}
    // red
    // green
    // blue

    // for (let item of set.entries()) {console.log(item);}
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]

    // set = new Set([1, 4, 9]);
    // set.forEach((value, key) => console.log(key + ' : ' + value))
    // 1 : 1
    // 4 : 4
    // 9 : 9
}

// Set骚操作🚕

//  1.数组去重
// [...new Set(array)]

//  2.Array.from方法将Set结构转为数组
//  Array.from(new Set(array));


// WeakSet🚀
// 1.WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
// 2.首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
// 3.WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
// 4.WeakSet 不可遍历。
{
    // const ws = new WeakSet();
    // ws.add(1)    // TypeError: Invalid value used in weak set
    // ws.add(Symbol())     // TypeError: invalid value used in weak set

    // WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
    // const a = [[1, 2], [3, 4]];
    // const ws = new WeakSet(a);   // WeakSet {[1, 2], [3, 4]}

    // const b = [3, 4];
    // const ws = new WeakSet(b);   // Uncaught TypeError: Invalid value used in weak set(…)
    // 上面代码中，数组b的成员不是对象，加入 WeaKSet 就会报错。
}

// WeakSet方法🚕
{
    // WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    // WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    // WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
}


// Map🚀
// 1.JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。为了解决这个问题，ES6 提供了 Map 数据结构。
//   它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
//   也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// 2.Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
// 3.如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。
//   另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
// 4.Map 的遍历顺序就是插入顺序。
{
    // const m = new Map();
    // const o = { p: 'Hello World' };

    // m.set(o, 'content')
    // m.get(o) // "content"
    // m.has(o) // true
    // m.delete(o) // true
    // m.has(o) // false


    // const map = new Map([
    //     ['name', '张三'],
    //     ['title', 'Author']
    // ]);

    // map.size // 2
    // map.has('name') // true
    // map.get('name') // "张三"
    // map.has('title') // true
    // map.get('title') // "Author"
}


// Map实例的属性和操作方法🚕
{
    // 属性
    // size 属性        size属性返回 Map 结构的成员总数。

    // 方法
    // set(key, value)  set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
    // has(key)         has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
    // delete(key)      delete方法删除某个键，返回true。如果删除失败，返回false。
    // clear()          clear方法清除所有成员，没有返回值。
}

// Map遍历方法🚕
{
    // Map 结构原生提供三个遍历器生成函数和一个遍历方法。
    // keys() ：返回键名的遍历器。
    // values() ：返回键值的遍历器。
    // entries() ：返回所有成员的遍历器。
    // forEach() ：遍历 Map 的所有成员。
}

// Map骚操作🚕

// 1.Map转为数组
// const myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
// [...myMap]   // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// 2.数组转Map
// new Map([[true, 7], [{foo: 3}, ['abc']]])
// Map { true => 7, Object {foo: 3} => ['abc'] }

// 3.Map 转为对象   略
// 4.对象转为 Map   略
// 5.Map 转为 JSON   略
// 6.JSON 转为 Map   略


// WeakMap🚀
// 1.WeakMap结构与Map结构类似，也是用于生成键值对的集合。
// 2.WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
// 3.WeakMap的键名所指向的对象，不计入垃圾回收机制。
// 4.WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有key()、values()和entries()方法），也没有size属性。
// 因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。
// 这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持clear方法。
// 因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

// 场景：一个典型应用是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
{
    // const wm = new WeakMap();
    // const element = document.getElementById('example');
    // wm.set(element, 'some information');
    // wm.get(element) // "some information"
}
{
    // WeakMap 应用的典型场合就是 DOM 节点作为键名。下面是一个例子。
    // 上面代码中，myElement是一个 DOM 节点，每当发生click事件，就更新一下状态。
    // 我们将这个状态作为键值放在 WeakMap 里，对应的键名就是myElement。一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。

    // let myElement = document.getElementById('logo');
    // let myWeakmap = new WeakMap();

    // myWeakmap.set(myElement, {timesClicked: 0});

    // myElement.addEventListener('click', function() {
    //   let logoData = myWeakmap.get(myElement);
    //   logoData.timesClicked++;
    // }, false);
}