//旧版本
// class A() {
//   this.foo = 'hello';
// }
// if (!global._foo) {
//   global._foo = new A();
// }
// module.exports = global._foo;
//这种方法如果在之后的代码中改写了global._foo后，一切的引用foo的地方都会失效。
//
//新的模式，使用Symbol
const FOO_KEY = Symbol('foo');
class A {
  constructor() {}
}
if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}
module.exports = global[FOO_KEY];
