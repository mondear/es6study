let proto = new Proxy({}, {
  get: function(target, proterty, reciver) {
    console.log('GET: ' + proterty);
    return target[proterty];
  }
})

let obj = Object.create(proto);
obj.cc;
