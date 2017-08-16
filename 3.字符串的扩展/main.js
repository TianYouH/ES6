// 1.字符的 Unicode 表示法

// 测试一 ：JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
// console.log("\u0061") //a

//测试二 : 范围 这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

// console.log("\uD842\uDFB7") // "𠮷"


//测试三 ：下面代码表示，如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
// console.log("\u20BB7") //₻7

//测试四 ：ES6 ⭐ 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
// console.log("\u{20BB7}") // "𠮷"

// console.log("\u{41}\u{42}\u{43}") // "ABC"

// let hello = 123;
// console.log('hell\u{6F}') // hello
// console.log(hell\u{6F}) // 123 

// 测试五 ：下面代码中，最后一个例子表明，大括号表示法与四字节的 UTF-16 编码是等价的。
// console.log('\u{1F680}' === '\uD83D\uDE80') // true

//测试六 ：⭐ 有了这种表示法之后，JavaScript 共有6种方法可以表示一个字符。

// console.log('\z' === 'z')  // true
// console.log('\172' === 'z') // true
// console.log('\x7A' === 'z') // true
// console.log('\u007A' === 'z') // true
// console.log('\u{7A}' === 'z') // true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2.codePointAt()

//测试一 ：JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。

// var s = "𠮷";  //这个特殊字符，不是字。。占两字节
// let hh = '黄金亮'  //这些都占一字节
// console.log(hh.length)
// console.log(s.length) // 2
// console.log(s.charAt(0)) // ''
// console.log(s.charAt(1)) // ''
// console.log(s.charCodeAt(0)) // 55362
// console.log(s.charCodeAt(1)) // 57271
// 上面代码中，汉字“𠮷”（注意，这个字不是“吉祥”的“吉”）的码点是0x20BB7，UTF-16编码为0xD842 0xDFB7（十进制为55362 57271），需要4个字节储存。
// 对于这种4个字节的字符，JavaScript不能正确处理，字符串长度会误判为2，而且charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值。


//测试二 ：⭐ ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
// var s = '𠮷a';
// console.log(s.codePointAt(0)) // 134071
// console.log(s.codePointAt(1)) // 57271
// console.log(s.codePointAt(2)) // 97
// codePointAt方法的参数，是字符在字符串中的位置（从0开始）。
// 上面代码中，JavaScript将“𠮷a”视为三个字符，codePointAt方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点134071（即十六进制的20BB7）。
// 在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt方法的结果与charCodeAt方法相同。

// 总之，codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。

//测试三 ： codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。

// var s = '𠮷a';
// console.log(s.codePointAt(0).toString(16)) // "20bb7"
// console.log(s.codePointAt(2).toString(16)) // "61"

//测试四 ：你可能注意到了，codePointAt方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是1，但是必须向codePointAt方法传入2。解决这个问题的一个办法是使用for...of循环，因为它会正确识别32位的UTF-16字符。
// var s = '𠮷a';
// for (let ch of s) {
//   console.log(ch.codePointAt(0).toString(16));
// }
// 20bb7
// 61

//测试五 ：codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
// function is32Bit(c) {
//       return c.codePointAt(0) > 0xFFFF;
// }
// console.log(is32Bit("𠮷")) // true
// console.log(is32Bit("a")) // false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3.String.fromCodePoint()   从码点返回对应字符

// 测试一 ：⭐ ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。

// console.log(String.fromCharCode(0x20BB7)) // "ஷ"
// 注 ： 上面代码中，String.fromCharCode不能识别大于0xFFFF的码点，所以0x20BB7就发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。

//测试二 ： ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。

// console.log(String.fromCodePoint(0x20BB7))// "𠮷"
// console.log(String.fromCodePoint(0x78, 0x1f680, 0x79)) //x🚀y
// console.log(String.fromCodePoint(0x1f680)) //🚀
// console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y') // true
// // 上面代码中，如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。

// 注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 4.字符串的遍历器接口

//测试一 ：ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。

// for (let codePoint of 'foo') {
//   console.log(codePoint)
// }
// "f"
// "o"
// "o"

// 测试二 ： 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
// var text = String.fromCodePoint(0x20BB7);
// console.log(text)
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }
// // " "
// // " "

// for (let i of text) {
//   console.log(i);
// }
// // "𠮷"
// 上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不可打印），而for...of循环会正确识别出这一个字符。

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 5.at()

// ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。

// console.log('abc'.charAt(0)) // "a"
// console.log('𠮷'.charAt(0)) // "\uD842"
// 上面代码中，charAt方法返回的是UTF-16编码的第一个字节，实际上是无法显示的。

// 目前，有一个提案，提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。

// 'abc'.at(0) // "a"
// '𠮷'.at(0) // "𠮷"
// 这个方法可以通过垫片库实现。

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 6.normalize()  字符的不同表示方法统一为同样的形式,称为 Unicode 正规化。

//测试一 ：许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\u01D1）。
// 另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。

// 这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。

// console.log('\u01D1'==='\u004F\u030C') //false

// console.log('\u01D1'.length) // 1
// console.log('\u004F\u030C'.length) // 2
// 上面代码表示，JavaScript 将合成字符视为两个字符，导致两种表示方法不相等。

//测试二 ：ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

// console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize()) // true
// normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。

// NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
// NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
// NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
// NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。
// '\u004F\u030C'.normalize('NFC').length // 1
// '\u004F\u030C'.normalize('NFD').length // 2
// 上面代码表示，NFC参数返回字符的合成形式，NFD参数返回字符的分解形式。

// 不过，normalize方法目前不能识别三个或三个以上字符的合成。这种情况下，还是只能使用正则表达式，通过Unicode编号区间判断

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 7.⭐includes(), startsWith(), endsWith()

//测试一 ：传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
// var s = 'Hello world!';

// console.log(s.startsWith('Hello')) // true
// console.log(s.endsWith('!')) // true
// console.log(s.includes('o')) // true

//测试二 ：这三个方法都支持第二个参数，表示开始搜索的位置。
// var s = 'Hello world!';

// console.log(s.startsWith('world', 6)) // true
// console.log(s.endsWith('Hello', 5)) // true
// console.log(s.includes('Hello', 6)) // false
// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 8.repeat()

//测试一 ：repeat方法返回一个新字符串，表示将原字符串重复n次。
// console.log('x'.repeat(3)) // "xxx"
// console.log('hello'.repeat(2)) // "hellohello"
// console.log('na'.repeat(0)) // ""

//测试二 ：参数如果是小数，会被向下取整。
// console.log('na'.repeat(2.9)) // "nana"

//测试三 ：如果repeat的参数是负数或者Infinity，会报错。
// console.log('na'.repeat(Infinity)) // RangeError
// console.log('na'.repeat(-1)) // RangeError

//测试四 : 但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
// 'na'.repeat(-0.9) // ""  
// 参数NaN等同于0。
// 'na'.repeat(NaN) // ""

//测试五 ：如果repeat的参数是字符串，则会先转换成数字。
// 'na'.repeat('na') // ""
// 'na'.repeat('3') // "nanana"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 9.padStart()，padEnd()

//测试一 ：ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

// console.log('x'.padStart(5, 'ab')) // 'ababx'
// console.log('x'.padStart(4, 'ab')) // 'abax'

// console.log('x'.padEnd(5, 'ab')) // 'xabab'
// console.log('x'.padEnd(4, 'ab')) // 'xaba'
// 上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

//测试二 ：如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
// 'xxx'.padStart(2, 'ab') // 'xxx'
// 'xxx'.padEnd(2, 'ab') // 'xxx'
// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
// 'abc'.padStart(10, '0123456789')
// // '0123456abc'

//测试三 ：如果省略第二个参数，默认使用空格补全长度。
// 'x'.padStart(4) // '   x'
// 'x'.padEnd(4) // 'x   '

//测试四 ：padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。
// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"

//测试五 ：另一个用途是提示字符串格式。
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 10.模板字符串


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 11.实例：模板编译


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 12.标签模板


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 13.String.raw()


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 14.模板字符串的限制