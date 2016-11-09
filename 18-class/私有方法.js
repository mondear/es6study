/**
 * 下划线方式
 */
class foo {
  constructor() {}
  foo() {
    return 'foo';
  }
  _bar() {
    return 'bar';
  }
}

/**
 * 外部定义方式
 */
function barr(baz) {
  return this.snaf = baz;
}
class fooo {
  constructor() {}
  foo(baz) {
    barr.call(this, baz);
  }
}

/**
 * 使用Symbol
 */
const bar = Symbol('bar');
const snaf = Symbol('snaf')
class foooo {
  constructor() {}
  foo(baz) {
    this[bar](baz);
  }
  [ bar](baz) {
    return this[snaf] = baz;
  }
}
