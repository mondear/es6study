var person = {
  name: 'zhangsan'
}

var proxy = new Proxy(person, {
  get: function(target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw ReferenceError("don't find the property.");
    }
  }
})

console.log(proxy.name);
console.log(proxy.ccI);
