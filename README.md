- 第一章 ES6简介
	- ECMAScript是JavaScript的规格，后者是前者的实现。
- 第二章 let和const
	- let与var一样为声明变量，但是let的作用域为所在代码块。
	- 初略的理解为{}中。
	- for循环中let只在循环中能够使用
	- let不会发生变量提升
	- let/const存在暂时性死区
		- 在一个块中，如果在声明let/const之前使用了变量，那么直接报错。
		- typeof在这里达不到百分百安全，let变量在声明前会发生错误
		- typeof在检测一个没有声明的变量时显示undefined，与let不同
		- function默认参数为let（可能～），如果参数为x=y,y=1就会发生死区，因为y在使用前没有声明。
	- let不能在作用域内重复声明，也就意味着函数参数不能从新声明（在函数内部）。
	- es6的作用域：
		- 全局
		- 函数
		- 块级
	- 无块级作用域缺点：
		- 内层变量覆盖外层变量
		- 用于计数的循环变了变为全局变量
	- 块级作用域可以任意嵌套
	- 块级作用域可以替代立即执行的匿名函数
	- es5严格声明中函数只能在顶层作用域和函数作用域中声明
	- 严格模式
		- ‘use strict’
	- es6中，块级作用域中定义的函数为let声明，块级作用域中声明的函数不能在块以外调用
		- 在不同实现下有差异，所以尽量避免块中声明函数
		- 如果需要应该写成函数表达式
	- const为常量
	- const必须初始化
	- const不提升
	- 不可重复声明
	- 对于复合变量，const只是不能改变指向数据的地址，地址内的数据可以改变
	- 冻结对象
		- const foo = Object.freeze({})
		- 这种方法只是对对象本身冻结，还需要对属性也一起冻结
	- es6声明方式：
		- var
		- let
		- const
		- import
		- class
		- function
	- node中全局对象为global，浏览器中为windows
	- es6中，var和function声明的变量依然为全局对象的属性，let／const／class声明的全局变量不再进入全局属性中
- 第三章 变量的解构和赋值
	- es6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这辈称作解构（Destructuring）
	- 本质上，这种写法属于‘模式匹配’
	- 如果解构失败，变量的值就为undefined
	- 不完全解构，只匹配一部分值
	- 如果右边不是可遍历的结构，那么解构失败：
		- 1
		- false
		- NaN
		- undefined
		- null
		- {}
		- 前五个位转换为object时不具备Iterator接口
		- 第六个本身没有Iterator接口
	- 解构同时适用于let和const
	- Set解构也可以使用解构
	- 只要含有Iterator接口的数据都能解构
	- Generator函数原生有Iterator接口
	- 解构可以有默认值
	- es6内部严格使用‘===’判断一个位置是否有值。如果一个数组成员不严格等于undefined，默认赋值不发生。
	- 默认值可以引用解构赋值的其他值，如果不存在则报错。
	- 对象也能运用解构
	- 对象没有顺序，所以解构必须对应属性名称。同名属性名才能解构。
		- 但是{foo: bar}这样的形式中，将被解构对象中foo数据赋值刀bar上。
	- js会将行首的{理解成代码块，所以如果之前声明了的变量名不能出现在解构中
	- 可以将解构包围在()中解决问题。
	- 字符串也能解构
	- 数值和布尔值解构会将其转换为对象，解构时运用其属性和方法名
	- 函数参数解构
	- ES6规定，只要有可能导致解构的奇异，就不得使用圆括号（不能嗲圆括号情况：）
		- 变量声明中
		- 函数参数中
		- 赋值语句中，不能讲整个模式或者过嵌套模式中的一层，放在圆括号里
	- 可以使用圆括号情况：
		- 赋值语句的非模式部分。
	- 解构用途
		- 交换变量值
		- 从函数返回多个值
		- 函数参数的定义
		- 提取json数据
		- 函数参数默认值
		- 遍历map解构
			- 任何部署了iterator接口的对象，都可以用for..of遍历
		- 输入模块的指定方法
- 第四章 字符串的扩展
	- es5中双字节字符串表示为’\uxxxx\uxxxx’
	- ‘\u20bb7’会被解析为’\u20bb+7’
	- es6中将码点放入大括号能就能正确解析’\u(20bb7}’
	‘\u{41}\u{42}\u{43}’=‘abc’
	- js中超过4字节的字符，会被认为是两个字符
	- es6中codePointAt()方法可以正确处理4字节字符
	- codePointAt().toString()可以将十进制输出转换为十六进制
	- for of方法可以正确识别32为utf-16字符
	- String.fromeCharCode(ucode)识别16位字符
	- String.fromeCodePoint()可以识别32位字符
	- es6中新加入字符串遍历器for of
	- at()与charAt()
		- at能够返回32位字符，charAt()不能正确反应32位字符
	- normalize() 合成字符
	- includes() 返回布尔值，表示参数是否在字符串中
	- startsWith() 返回布尔值，表示参数是否在字符串头部
	- endWith() 返回布尔值，是否在尾部
	- s.repeat(n) 返回将s重复n次的字符串 ，n位小数会被取整，负数或者Infinity会报错，0返回空字符串
	- s.padStart(n, st)将s用st补全到n位，st添加在左边
	- s.padEnd()同上，st添加在尾部
	- st可省略 默认填充空格
	- 模版字符串
		- 字符串定义在``中
		- 可以表示普通字符串，多行字符串，字符串中可嵌入变量${value} value表示仁义的js表达式
		- 如果value不是字符串，会按照一般规则转换为字符串
		- 模版字符串可以嵌套
	- 标签模版
		- tag`name ${cc} is ${bb}`
		- 同等于
		- tag([‘name ‘,’ is ‘],cc, bb)
		- 传递前会先解析cc和bb
	- String.raw()参数为字符串，返回一个斜杠都被转义的字符串。如果参数中\已经转义了就不再转义
- 第五章 正则的扩展
	- es6使用正则表达式作为构造函数第一个参数，可以有第二参数，其会覆盖表达式中的修饰符
		- var regex = new RegExp(/xyz/ig, ‘i’)
		- i将替换ig
	- 字符串的四个可使用正则的方法全部调用RegExp中的方法
		- match
		- replace
		- search
		- split
	- 添加u修饰符
		- 处理32字节字符
		- 对于大于0xffff的字符使用.点字符的时候必须加u
		- 使用{}表示的unicode字符，必须加u
		- 量词使用也可正确识别32位
		- 只有带有u标识符才能正确解读unicode中的{]
	- y修饰符，与g相似，但是y在匹配一次的下一次是从匹配字符的下一个开始匹配，并不是全局。
	- y隐含了头部匹配
	- sticky属性，表示是否使用y修饰符
	- flags返回正则表达式的修饰符
