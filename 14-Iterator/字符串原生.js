let str = 'Hello World!';

let itr = str[Symbol.iterator]();

console.log(itr.next());
console.log(itr.next());

for (let i of str) {
  console.log(i);
}
