function createArray(...elemente) {
  let handle = {
    get: function(target, properKey, receiver) {
      let index = Number(properKey);
      if (index < 0) {
        properKey = String(target.length + index);
      }
      return Reflect.get(target, properKey, receiver);
    }
  };
  let target = [];
  target.push(...elemente);
  return new Proxy(target, handle);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
