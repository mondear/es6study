let myIte = {};
myIte[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
}

// [...myIte];

let obj = {
  * [Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (let i of obj) {
  console.log(i);
}
