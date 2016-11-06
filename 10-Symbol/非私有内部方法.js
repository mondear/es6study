let size = Symbol('size');

class Cellection {
  constructor() {
    this[size] = 0;
  }
  add(item) {
    this[this[size]] = item;
    this[size]++;
  }
  static sizeOf(instance) {
    return instance[size];
  }
}

var a = new Cellection();

a.add('foo');
a.add('bar')
console.log(a[size]);
console.log(Cellection.sizeOf(a));

Object.keys(a);
