let target = {};
let handlen = {};
let {proxy, revoke} = Proxy.revocable(target, handlen);

proxy.foo = 123;
console.log(proxy.foo);

revoke();

proxy.foo;
