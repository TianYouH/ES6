# Set和Map说明

## Set

类似于数组，但是成员的值都是唯一的，没有重复的值。

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

## WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。

但是，它与 Set 有两个区别。

1. WeakSet 的成员只能是对象，而不能是其他类型的值。
2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

## Map

它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

## WeakMap

WeakMap结构与Map结构类似，也是用于生成键值对的集合。

WeakMap与Map的区别有两点。

1. WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
2. WeakMap的键名所指向的对象，不计入垃圾回收机制。