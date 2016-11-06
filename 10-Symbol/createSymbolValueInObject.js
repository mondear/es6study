let mSymbol = Symbol();

//one
var a = {};
a[mSymbol] = 'Hello';

//two
var a = {
  [mSymbol]: 'hello'
}

//three
var a = {};
Object.defineProperty(a, mSymbol, {
  value: 'hello'
});

console.log(a[mSymbol]);
